import * as i0 from '@angular/core';
import { Injectable, PLATFORM_ID, Inject, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isPlatformBrowser, CommonModule } from '@angular/common';

const DOMAIN_EVENT_HANDLERS = 'HERMES - DOMAIN_EVENT_HANDLERS_TOKEN';

function provideEventHandlers(handlers) {
    return handlers.map((handler) => {
        return {
            provide: DOMAIN_EVENT_HANDLERS,
            useClass: handler,
            multi: true
        };
    });
}

class Key {
    constructor(token) {
        this.token = token;
        this.stringKey = this.generateStringKey();
    }
    static from(token) {
        return new Key(token);
    }
    toString() {
        return this.stringKey;
    }
    generateStringKey() {
        if (typeof this.token !== 'string') {
            return this.token.toString().split(' ')[1] || '';
        }
        else {
            return this.token;
        }
    }
}

class NotFoundKey extends Key {
    constructor(token) {
        super(token);
    }
    getError() {
        if (typeof this.token === 'string') {
            return 'Key not found for the token: ' + this.token;
        }
        else {
            return 'Key not found for the token: ' + this.token.toString();
        }
    }
}

class KeyRegister {
    constructor() {
        this.records = new Map();
    }
    getKey(token) {
        const key = this.records.get(token);
        if (!key) {
            return new NotFoundKey(token);
        }
        return key;
    }
    getKeyAndTryRegister(token, provider) {
        if (!this.has(token)) {
            this.set(token, provider);
        }
        return this.getKey(token);
    }
    has(token) {
        return this.records.has(token);
    }
    set(token, _provider) {
        this.records.set(token, Key.from(token));
    }
    clear() {
        this.records.clear();
    }
}

class ProviderManager {
    constructor() {
        this.providers = new Map();
    }
    get(key) {
        const recordFactory = this.providers.get(key);
        if (!recordFactory) {
            throw new Error(`There is no provider for ${key.toString()}.`);
        }
        return recordFactory;
    }
    has(key) {
        return this.providers.has(key);
    }
    set(key, recordFactory) {
        this.providers.set(key, recordFactory);
    }
    clear() {
        this.providers.clear();
    }
}

class Dependency {
    constructor(serviceToken) {
        this.serviceToken = serviceToken;
    }
    getToken() {
        if (typeof this.serviceToken === 'object') {
            return this.serviceToken.inject;
        }
        else {
            return this.serviceToken;
        }
    }
    isOptional() {
        if (typeof this.serviceToken !== 'string' &&
            typeof this.serviceToken === 'object' &&
            this.serviceToken.optional !== undefined) {
            return this.serviceToken.optional;
        }
        return false;
    }
    /**
     * @deprecated
     */
    isCollection() {
        if (typeof this.serviceToken !== 'string' &&
            typeof this.serviceToken === 'object' &&
            this.serviceToken.collection) {
            return this.serviceToken.collection;
        }
        return false;
    }
}

class RecordFactory {
    constructor(provider) {
        this.provider = provider;
    }
    getDeps() {
        return (this.provider.services || []).map((service) => new Dependency(service));
    }
}

class ClassRecordFactory extends RecordFactory {
    constructor(provider) {
        super(provider);
    }
    create(depsInstances) {
        return new this.provider(...depsInstances);
    }
}

class ValueRecordFactory extends RecordFactory {
    constructor(provider) {
        super(provider);
    }
    getDeps() {
        return [];
    }
    create(_depsInstances) {
        return this.provider;
    }
}

class FactoryRecordFactory extends RecordFactory {
    constructor(provider) {
        super(provider);
    }
    getDeps() {
        return (this.provider.deps || [])
            .map((service) => new Dependency(service));
    }
    create(depsInstances) {
        return this.provider.create(...depsInstances);
    }
}

class CollectionRecordFactory {
}

class ClassCollectionRecordFactory extends CollectionRecordFactory {
    constructor() {
        super(...arguments);
        this.providers = [];
    }
    getDeps() {
        return this.providers
            .map((provider) => {
            return (provider.services || [])
                .map((service) => {
                return new Dependency(service);
            });
        });
    }
    create(setOfDeps) {
        return setOfDeps
            .map((deps, index) => {
            return new this.providers[index](...deps);
        });
    }
    addProvider(provider) {
        this.providers.push(provider);
    }
}

class FactoryCollectionRecordFactory extends CollectionRecordFactory {
    constructor() {
        super(...arguments);
        this.providers = [];
    }
    getDeps() {
        return this.providers
            .map((provider) => {
            return (provider.deps || [])
                .map((service) => new Dependency(service));
        });
    }
    create(setOfDeps) {
        return setOfDeps
            .map((deps, index) => {
            return this.providers[index].create(...deps);
        });
    }
    addProvider(provider) {
        this.providers.push(provider);
    }
}

class ValueCollectionRecordFactory extends CollectionRecordFactory {
    constructor() {
        super(...arguments);
        this.providers = [];
    }
    getDeps() {
        return [];
    }
    create(_setOfDeps) {
        return [...this.providers];
    }
    addProvider(provider) {
        this.providers.push(provider);
    }
}

class ContainerProvider {
    constructor(keyRegister) {
        this.keyRegister = keyRegister;
        this.providerManager = new ProviderManager();
        this.collectionProviders = new Map();
    }
    provide(token, provider) {
        if (provider === undefined) {
            return this.provide(token, token);
        }
        else {
            return this.provideClass(token, provider);
        }
    }
    provideClass(token, provider) {
        return this.addProvider(token, provider, (provider) => new ClassRecordFactory(provider));
    }
    provideValue(token, provider) {
        return this.addProvider(token, provider, (provider) => new ValueRecordFactory(provider));
    }
    provideFactory(token, provider) {
        return this.addProvider(token, provider, (provider) => new FactoryRecordFactory(provider));
    }
    provideCollection(token, provider) {
        return this.addCollectionProvider(token, provider, () => new ClassCollectionRecordFactory());
    }
    provideFactoryCollection(token, provider) {
        return this.addCollectionProvider(token, provider, () => new FactoryCollectionRecordFactory());
    }
    provideValueCollection(token, provider) {
        return this.addCollectionProvider(token, provider, () => new ValueCollectionRecordFactory());
    }
    clear() {
        this.providerManager.clear();
        this.collectionProviders.clear();
    }
    getRecordFactory(key) {
        return this.providerManager.get(key);
    }
    getCollectionRecordFactory(key) {
        return this.collectionProviders.get(key);
    }
    addProvider(token, provider, provideMethod) {
        const key = this.keyRegister.getKeyAndTryRegister(token, provider);
        this.providerManager.set(key, provideMethod(provider));
    }
    addCollectionProvider(token, provider, createFactory) {
        const key = this.keyRegister.getKeyAndTryRegister(token, provider);
        if (this.collectionProviders.has(key)) {
            const multiFactory = this.collectionProviders.get(key);
            if (multiFactory) {
                multiFactory.addProvider(provider);
            }
        }
        else {
            const multiFactory = createFactory();
            multiFactory.addProvider(provider);
            this.collectionProviders.set(key, multiFactory);
        }
    }
}

class RecordManager {
    constructor() {
        this.records = new Map();
    }
    get(key) {
        return this.records.get(key);
    }
    has(key) {
        return this.records.has(key);
    }
    set(key, record) {
        this.records.set(key, record);
    }
    clear() {
        this.records.clear();
    }
}

class ContainerRecord {
    constructor(keyRegister, containerProvider) {
        this.keyRegister = keyRegister;
        this.containerProvider = containerProvider;
        this.recordManager = new RecordManager();
        this.collectionRecords = new Map();
    }
    resolve(token) {
        return this.innerResolve(token);
    }
    resolveCollection(token) {
        return this.innerResolveCollection(token);
    }
    clear() {
        this.recordManager.clear();
        this.collectionRecords.clear();
    }
    resolveDependencies(provider) {
        const deps = provider.getDeps();
        return deps.map((dep) => {
            if (dep.isCollection()) {
                return this.innerResolveCollection(dep.getToken(), dep.isOptional());
            }
            else {
                return this.resolveDependency(dep);
            }
        });
    }
    resolveDependency(dep) {
        return this.innerResolve(dep.getToken(), dep.isOptional());
    }
    innerResolve(token, isOptional) {
        const key = this.keyRegister.getKey(token);
        if (key instanceof NotFoundKey) {
            if (isOptional) {
                return null;
            }
            else {
                throw new Error(key.getError());
            }
        }
        if (!this.recordManager.has(key)) {
            const recordFactory = this.containerProvider.getRecordFactory(key);
            const depsInstances = this.resolveDependencies(recordFactory);
            const instance = recordFactory.create(depsInstances);
            this.recordManager.set(key, instance);
        }
        return this.recordManager.get(key);
    }
    innerResolveCollection(token, isOptional = false) {
        const key = this.keyRegister.getKey(token);
        if (key instanceof NotFoundKey) {
            if (isOptional) {
                return null;
            }
            else {
                throw new Error(key.getError());
            }
        }
        if (!this.collectionRecords.has(key)) {
            const multiFactory = this.containerProvider.getCollectionRecordFactory(key);
            if (multiFactory) {
                const arrayOfDeps = multiFactory.getDeps()
                    .map((deps) => {
                    return deps.map((dep) => {
                        if (dep.isCollection()) {
                            return this.innerResolveCollection(dep.getToken(), dep.isOptional());
                        }
                        else {
                            return this.resolveDependency(dep);
                        }
                    });
                });
                const instances = multiFactory.create(arrayOfDeps);
                this.collectionRecords.set(key, instances);
            }
        }
        return this.collectionRecords.get(key);
    }
}

class ContainerFacade {
    constructor() {
        this.keyRegister = new KeyRegister();
        this.containerProvider = new ContainerProvider(this.keyRegister);
        this.containerRecord = new ContainerRecord(this.keyRegister, this.containerProvider);
    }
    resolve(token) {
        return this.containerRecord.resolve(token);
    }
    resolveCollection(token) {
        return this.containerRecord.resolveCollection(token);
    }
    provide(token, provider) {
        this.containerProvider.provide(token, provider);
        return this;
    }
    provideClass(token, provider) {
        this.containerProvider.provideClass(token, provider);
        return this;
    }
    provideValue(token, provider) {
        this.containerProvider.provideValue(token, provider);
        return this;
    }
    provideFactory(token, provider) {
        this.containerProvider.provideFactory(token, provider);
        return this;
    }
    provideCollection(token, provider) {
        this.containerProvider.provideCollection(token, provider);
        return this;
    }
    provideFactoryCollection(token, provider) {
        this.containerProvider.provideFactoryCollection(token, provider);
        return this;
    }
    provideValueCollection(token, provider) {
        this.containerProvider.provideValueCollection(token, provider);
        return this;
    }
    clear() {
        this.keyRegister.clear();
        this.containerProvider.clear();
        this.containerRecord.clear();
    }
    clearOnlyRecords() {
        this.containerRecord.clear();
    }
}

function createContainer() {
    return new ContainerFacade();
}

class HermesSubscription {
    constructor(finalize, isClosed) {
        this.closed = false;
        // tslint-disable-next-line
        this.finalize = () => { };
        if (finalize !== undefined && finalize !== null &&
            typeof finalize === 'function') {
            this.finalize = finalize;
        }
        if (isClosed !== undefined && isClosed !== null) {
            this.closed = isClosed;
        }
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.finalize();
    }
    getFinalize() {
        return this.finalize;
    }
}

class HermesSubscriber {
    constructor(config) {
        // eslint-disable-next-line
        this.finalize = () => {
        };
        this.completed = false;
        this.closed = false;
        this.observer = config;
    }
    next(value) {
        if (this.isCompleted()) {
            return;
        }
        if (this.observer && this.observer.next) {
            this.observer.next(value);
        }
    }
    error(error) {
        if (this.completed) {
            return;
        }
        if (this.observer && this.observer.error) {
            this.observer.error(error);
        }
        this.unsubscribe();
    }
    complete() {
        if (this.completed) {
            return;
        }
        this.completed = true;
        if (this.observer && this.observer.complete) {
            this.observer.complete();
        }
        this.unsubscribe();
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.completed = true;
        this.finalize();
    }
    setFinalize(finalize) {
        if (finalize && typeof finalize === 'function') {
            this.finalize = finalize;
        }
        else {
        }
    }
    isCompleted() {
        return this.completed;
    }
    isClosed() {
        return this.closed;
    }
    getObserver() {
        return this.observer;
    }
}

class HermesObservable {
    constructor(generator) {
        this.generatorFn = generator;
    }
    pipe(...operations) {
        this.source = this;
        for (const operation of operations) {
            this.source = this.innerPipe(operation, this.source);
        }
        return this.source;
    }
    subscribe(arg) {
        let subscriber;
        if (arg instanceof HermesSubscriber) {
            subscriber = arg;
        }
        else if (arg !== null && this.isObserver(arg)) {
            const { next, error, complete } = arg;
            subscriber = this.createSubscriber(next, error, complete);
        }
        else {
            subscriber = this.createSubscriber(arguments[0], arguments[1], arguments[2]);
        }
        if (this.generatorFn) {
            this.generatorFinalize = this.generatorFn(subscriber);
            subscriber.setFinalize(this.generatorFinalize);
        }
        return this.getSubscription();
    }
    createSubscriber(next, error, complete) {
        return new HermesSubscriber({
            next,
            error,
            complete
        });
    }
    getSubscription() {
        return new HermesSubscription(this.generatorFinalize);
    }
    innerPipe(operation, stream$) {
        return ((input) => {
            return operation(input);
        })(stream$);
    }
    isObserver(observer) {
        return typeof observer === 'object';
    }
}

function hermesEmptySubscription() {
    return new HermesSubscription(() => {
    }, true);
}

class HermesSubject extends HermesObservable {
    constructor() {
        super();
        /**
         * After error
         */
        this.thrownError = null;
        /**
         * After complete
         */
        this.isCompleted = false;
        /**
         * After unsubscribe
         */
        this.isClosed = false;
        this.subscribers = [];
    }
    next(value) {
        this.verifyNotClosed();
        if (this.isCompleted || this.thrownError !== null) {
            return;
        }
        for (const subs of this.subscribers) {
            subs.next(value);
        }
    }
    error(error) {
        this.verifyNotClosed();
        if (this.isCompleted) {
            return;
        }
        this.thrownError = error;
        for (const subs of this.subscribers) {
            subs.error(error);
        }
        this.subscribers.length = 0;
    }
    complete() {
        this.verifyNotClosed();
        if (this.isCompleted) {
            return;
        }
        this.isCompleted = true;
        for (const subs of this.subscribers) {
            subs.complete();
        }
        this.subscribers.length = 0;
    }
    subscribe(arg) {
        this.verifyNotClosed();
        let subscriber;
        if (arg instanceof HermesSubscriber) {
            subscriber = arg;
        }
        else {
            subscriber = this.createSubscriber(arguments[0], arguments[1], arguments[2]);
        }
        if (this.thrownError !== null) {
            subscriber.error(this.thrownError);
            return hermesEmptySubscription();
        }
        else if (this.isCompleted) {
            subscriber.complete();
            return hermesEmptySubscription();
        }
        else {
            this.subscribers.push(subscriber);
            return this.getSubscription();
        }
    }
    unsubscribe() {
        this.isCompleted = true;
        this.isClosed = true;
        this.subscribers.length = 0;
    }
    toObservable() {
        return new HermesObservable((observer) => {
            const subscription = this.subscribe((v) => observer.next(v), (error) => observer.error(error), () => observer.complete());
            return () => subscription.unsubscribe();
        });
    }
    verifyNotClosed() {
        if (this.isClosed) {
            throw new Error('Observable already closed');
        }
    }
}

class DomainEventStream extends HermesSubject {
    // constructor(private readonly eventStore: DomainEventStore) {
    constructor() {
        super();
    }
}

class RandomStringGenerator {
    static generate() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + `${RandomStringGenerator.index++}`;
    }
}
RandomStringGenerator.index = 0;
RandomStringGenerator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RandomStringGenerator, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
RandomStringGenerator.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RandomStringGenerator });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RandomStringGenerator, decorators: [{
            type: Injectable
        }] });

class Message {
    constructor(aggregateId, messageType, messageId = RandomStringGenerator.generate()) {
        this.aggregateId = aggregateId;
        this.messageType = messageType;
        this.messageId = messageId;
    }
    getMessageType() {
        return this.messageType;
    }
    getAggregateId() {
        return this.aggregateId;
    }
    getMessageId() {
        return this.messageId;
    }
    toString() {
        return this.messageType;
    }
    equalsByType(message) {
        return this.getMessageType() === message.getMessageType();
    }
    equals(message) {
        return (this.getMessageType() === message.getMessageType()) && (this.messageId === message.messageId);
    }
    ofMessageType(arg) {
        if (Array.isArray(arg)) {
            const found = arg.find((messageType) => this.isMessageType(messageType));
            return !!found;
        }
        else {
            return this.isMessageType(arg);
        }
    }
    isMessageType(messageType) {
        return this.getMessageType() === messageType;
    }
}

class DomainEvent extends Message {
    constructor(aggregateId, payload, messageType) {
        super(aggregateId, messageType);
        this.payload = payload;
    }
    isSameType(event) {
        return this.constructor.name === event.constructor.name;
    }
    getPayload() {
        return this.payload;
    }
}

function hermesOf(...args) {
    return new HermesObservable(observer => {
        args.forEach(value => {
            observer.next(value);
        });
        observer.complete();
    });
}

function hermesEmpty() {
    return new HermesObservable((observer) => {
        observer.complete();
    });
}

function hermesTake(valuesNumber) {
    return (source) => {
        if (valuesNumber === 0) {
            return hermesEmpty();
        }
        return new HermesObservable(observer => {
            let index = 0;
            const subscriber = new HermesSubscriber({
                next: () => {
                },
                error: (e) => observer.error(e),
                complete: () => observer.complete()
            });
            subscriber.observer.next = function (v) {
                if (index < valuesNumber) {
                    observer.next(v);
                    index++;
                    if (index === valuesNumber) {
                        subscriber.complete();
                    }
                }
            };
            const subscription = source.subscribe(subscriber);
            return subscription.getFinalize();
        });
    };
}

function subscriberForOperator(observer, next, complete) {
    const nextFn = next ? next : (v) => {
        observer.next(v);
    }, completeFn = complete ? complete : () => {
        observer.complete();
    };
    return new HermesSubscriber({
        next: nextFn,
        error: (e) => observer.error(e),
        complete: completeFn
    });
}
function subscriberFromObserver(observer) {
    return new HermesSubscriber({
        next: (v) => observer.next(v),
        error: (e) => observer.error(e),
        complete: () => observer.complete()
    });
}

function hermesFilter(operation) {
    return (source) => {
        return new HermesObservable(observer => {
            const subscriber = subscriberForOperator(observer, (value) => {
                if (operation(value)) {
                    observer.next(value);
                }
            });
            return source.subscribe(subscriber).getFinalize();
        });
    };
}

class DomainEventStore {
    constructor() {
        this.domainEvents = [];
        this.domainEvents$ = new HermesSubject();
    }
    next(event) {
        this.domainEvents.push(event);
        this.domainEvents$.next(event);
    }
    findEventByType(eventType) {
        const events = this.getEvents();
        return events.reverse()
            .find((event) => {
            return event.constructor.name === eventType;
        });
    }
    /**
     * First tries to find event in the history,
     * then method waits for future occurrences of the event.
     */
    waitForEvent(eventType) {
        // find in a history
        const event = this.findEventByType(eventType);
        if (event) {
            return hermesOf(event);
        }
        // wait for future occurrence
        return this.waitForNextEventOccurrence(eventType);
    }
    waitForNextEventOccurrence(arg) {
        let eventType;
        if (arg instanceof DomainEvent) {
            eventType = arg.constructor.name;
        }
        else if (typeof arg === 'string') {
            eventType = arg;
        }
        else {
            return new HermesObservable((observer) => {
                observer.error(new Error('Unsupported argument type.'));
            });
            // return throwError(new Error('Unsupported argument type.'));
        }
        return this.domainEvents$
            .toObservable()
            .pipe(hermesFilter((event) => event.constructor.name === eventType), hermesTake(1));
    }
    getEvents() {
        return this.domainEvents;
    }
}

class CommandStream extends HermesSubject {
    constructor() {
        super();
    }
}

class CommandBus extends HermesObservable {
    constructor(commandsStream) {
        super();
        this.commandsStream = commandsStream;
    }
    subscribe() {
        return this.commandsStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
    }
    ofCommandHandler(...handlers) {
        return this
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((command) => {
            return handlers.some((handler) => {
                return handler.forCommand(command);
            });
        }));
    }
    ofCreateAggregateHandler(...handlers) {
        return this
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((command) => {
            return handlers.some((handler) => {
                return handler.forCommand(command);
            });
        }));
    }
    ofNullHandler(handlers, aggregateCommandHandlers) {
        return this
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((command) => {
            if (!handlers && !aggregateCommandHandlers) {
                return true;
            }
            let foundHandlerForCommand = true;
            if (handlers) {
                foundHandlerForCommand =
                    !handlers.some((handler) => {
                        return handler.forCommand(command);
                    });
            }
            if (aggregateCommandHandlers) {
                foundHandlerForCommand = foundHandlerForCommand &&
                    !aggregateCommandHandlers.some((handler) => {
                        return handler.forCommand(command);
                    });
            }
            return foundHandlerForCommand;
        }));
    }
}
CommandBus.services = [CommandStream];

class Optional {
    constructor(value) {
        if (Optional.isValueEmpty(value)) {
            this.value = null;
        }
        else {
            this.value = value;
        }
        return this;
    }
    static empty() {
        return new Optional(null);
    }
    static of(value) {
        return new Optional(value);
    }
    static isValueEmpty(value) {
        return typeof value === 'undefined' || value === null;
    }
    isEmpty() {
        return Optional.isValueEmpty(this.value);
    }
    isPresent() {
        return !this.isEmpty();
    }
    filter(filterer) {
        if (this.isPresent() && filterer(this.value)) {
            return this;
        }
        return Optional.empty();
    }
    forEach(callback) {
        if (this.isPresent()) {
            callback(this.value);
        }
    }
    map(mapper) {
        if (this.isPresent()) {
            return new Optional(mapper(this.value));
        }
        return Optional.empty();
    }
    /**
     * @deprecated
     */
    getValueOrNullOrThrowError() {
        return this.value;
    }
    getOrThrow() {
        if (this.isEmpty()) {
            throw new Error('Called getOrThrow on an empty Optional');
        }
        return this.value;
    }
    getOrElse(other) {
        if (this.isPresent()) {
            return this.value;
        }
        return other();
    }
    ifPresent(method) {
        if (this.isPresent()) {
            method(this.value);
        }
    }
    ifEmpty(method) {
        if (this.isEmpty()) {
            method();
        }
    }
    orElse(other) {
        if (this.isPresent()) {
            return this;
        }
        return other();
    }
}

class AggregateFactoryArchive {
    constructor() {
        this.map = new Map();
    }
    add(key, factory) {
        this.map.set(key, factory);
    }
    get(key) {
        return Optional.of(this.map.get(key));
    }
    has(key) {
        return this.map.has(key);
    }
}
class AggregateRepositoryArchive {
    constructor() {
        this.map = new Map();
    }
    add(key, repository) {
        this.map.set(key, repository);
    }
    get(key) {
        return Optional.of(this.map.get(key));
    }
    has(key) {
        return this.map.has(key);
    }
}

class AggregateDefinitionInitializer {
    constructor() {
        this.aggregateFactoryArchive = CoreContainer.resolve(AggregateFactoryArchive);
        this.aggregateRepositoryArchive = CoreContainer.resolve(AggregateRepositoryArchive);
    }
    register(definedAggregate) {
        if (definedAggregate) {
            const set = new Set();
            const filteredDefinitions = [];
            definedAggregate.filter((def) => {
                if (!set.has(def.key)) {
                    set.add(def.key);
                    filteredDefinitions.push(def);
                }
            });
            filteredDefinitions.forEach((def) => {
                const factory = CoreContainer.resolve(def.factory), repository = CoreContainer.resolve(def.repository);
                if (!this.aggregateFactoryArchive.has(def.key)) {
                    this.aggregateFactoryArchive.add(def.key, factory);
                }
                if (!this.aggregateRepositoryArchive.has(def.key)) {
                    this.aggregateRepositoryArchive.add(def.key, repository);
                }
            });
            // console.log('Registered aggregate definition:' + filteredDefinitions.length);
            // console.log('Registered aggregate definition:', filteredDefinitions);
        }
    }
}

function hermesTakeUntil(notifier) {
    return (source) => {
        return new HermesObservable(observer => {
            const subscriber = subscriberFromObserver(observer);
            const notifierSubscriber = new HermesSubscriber({
                next: () => subscriber.complete()
            });
            notifier.subscribe(notifierSubscriber);
            const subscription = source.subscribe(subscriber);
            return subscription.getFinalize();
        });
    };
}

function toRxJsObservable(source$) {
    return new Observable((observer) => {
        const subscription = source$.subscribe((value) => observer.next(value), (error) => observer.error(error), () => observer.complete());
        return () => subscription.unsubscribe();
    });
}

class Reactive {
    constructor() {
        this.hermesUnsubscribe$ = new HermesSubject();
    }
    ngOnDestroy() {
        this.hermesUnsubscribe();
    }
    takeUntil() {
        return takeUntil(toRxJsObservable(this.hermesUnsubscribe$));
    }
    hermesUnsubscribe() {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    }
    hermesTakeUntil() {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    }
    isNotStopped() {
        return !this.hermesUnsubscribe$.isCompleted;
    }
}
Reactive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: Reactive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
Reactive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: Reactive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: Reactive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class CommandHandlerInitializer extends Reactive {
    constructor() {
        super();
        this.commandBus = CoreContainer.resolve(CommandBus);
    }
    register(commandHandlers) {
        if (commandHandlers) {
            const set = new Set();
            const filteredHandlers = [];
            commandHandlers.filter((handler) => {
                if (!set.has(handler.commandHandler)) {
                    set.add(handler.commandHandler);
                    filteredHandlers.push(handler);
                }
            });
            filteredHandlers.forEach((handler) => {
                this.commandBus
                    .ofCommandHandler(handler)
                    .pipe(this.hermesTakeUntil())
                    .subscribe((command) => {
                    handler.handleCommand(command);
                });
            });
            // console.log('Registered command handlers:' + filteredHandlers.length);
            // console.log('Registered command handlers:', filteredHandlers);
        }
    }
    registerAggregateCommandHandlers(aggregateCommandHandlers) {
        if (aggregateCommandHandlers) {
            const set = new Set();
            const filteredHandlers = [];
            aggregateCommandHandlers.filter((handler) => {
                if (!set.has(handler.createAggregateCommandHandler)) {
                    set.add(handler.createAggregateCommandHandler);
                    filteredHandlers.push(handler);
                }
            });
            filteredHandlers.forEach((handler) => {
                this.commandBus
                    .ofCreateAggregateHandler(handler)
                    .pipe(this.hermesTakeUntil())
                    .subscribe((command) => {
                    handler.handleCommand(command);
                });
            });
            // console.log('Registered create command handlers:' + filteredHandlers.length);
            // console.log('Registered create command handlers:', filteredHandlers);
        }
    }
}

class DomainEventBus extends HermesObservable {
    constructor(eventStream) {
        super();
        this.eventStream = eventStream;
    }
    subscribe() {
        return this.eventStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
    }
    ofEvents(events) {
        return this
            .eventStream
            .toObservable()
            .pipe(hermesFilter((domainEvent) => {
            return events.some((event) => {
                const eventInstance = this.createEventInstance(event);
                return eventInstance.equalsByType(domainEvent);
            });
        }));
    }
    ofEventHandlers(handlers) {
        return this
            .eventStream
            .toObservable()
            .pipe(hermesFilter((event) => {
            return handlers.some((handler) => handler.forEvents([event]));
        }));
    }
    createEventInstance(event) {
        const args = [], argumentLength = event.constructor.length;
        args.fill(undefined, 0, argumentLength);
        if (args.length === 0) {
            return (new event());
        }
        else if (args.length === 1) {
            return (new event(args[0]));
        }
        else if (args.length === 2) {
            return (new event(args[0], args[1]));
        }
        else if (args.length === 3) {
            return (new event(args[0], args[1], args[2]));
        }
        else if (args.length === 4) {
            return (new event(args[0], args[1], args[2], args[3]));
        }
        else if (args.length === 5) {
            return (new event(args[0], args[1], args[2], args[3], args[4]));
        }
        else {
            throw new Error('DomainEventBus constructor out of arguments');
        }
    }
}
DomainEventBus.services = [DomainEventStream];

class DomainEventHandlerInitializer extends Reactive {
    constructor(domainEventBus) {
        super();
        this.domainEventBus = domainEventBus;
        this.unsub$ = new HermesSubject();
    }
    init(eventHandlers) {
        if (eventHandlers) {
            const set = new Set();
            const filteredHandlers = [];
            eventHandlers.filter((handler) => {
                if (!set.has(handler.domainEventHandler)) {
                    set.add(handler.domainEventHandler);
                    filteredHandlers.push(handler);
                }
            });
            filteredHandlers.forEach((handler) => {
                this.domainEventBus
                    .ofEventHandlers([handler])
                    .pipe(hermesTakeUntil(this.unsub$), this.hermesTakeUntil())
                    .subscribe((event) => {
                    handler.handleEvent(event);
                });
            });
            // console.log('Registered event handlers:', filteredHandlers.length)
            // console.log('Registered event handlers:', filteredHandlers)
        }
    }
    reinit(eventHandlers) {
        this.stop();
        this.init(eventHandlers);
    }
    stop() {
        this.unsub$.next();
        this.unsub$.complete();
        this.unsub$ = new HermesSubject();
    }
}
DomainEventHandlerInitializer.services = [DomainEventBus];

const COMMAND_LOGGER_ENABLED = 'GUI - COMMAND_LOGGER_ENABLED';
const EVENT_LOGGER_ENABLED = 'GUI - EVENT_LOGGER_ENABLED';

class Logger {
    setDomain(domainName) {
        this.domainName = domainName;
    }
    log(message) {
        if (this.shouldPrint(message)) {
            this.print(message);
        }
    }
    shouldPrint(message) {
        if (!this.domainName) {
            return true;
        }
        const log = message.toString();
        return log.includes(this.domainName);
    }
}

class CommandLogger extends Logger {
}

class ConsoleCommandLogger extends CommandLogger {
    constructor() {
        super();
        this.enabled = false;
        this.unsubscribe$ = new HermesSubject();
        this.commandBus = CoreContainer.resolve(CommandBus);
        this.commandBus
            .pipe(hermesFilter(() => this.enabled), hermesTakeUntil(this.unsubscribe$))
            .subscribe((command) => {
            this.log(command);
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    start() {
        this.enabled = true;
    }
    stop() {
        this.enabled = false;
    }
    print(command) {
        // eslint-disable-next-line no-console
        console.log(command.toString(), command);
    }
}
ConsoleCommandLogger.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ConsoleCommandLogger, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ConsoleCommandLogger.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ConsoleCommandLogger });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ConsoleCommandLogger, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class NoopCommandLogger extends CommandLogger {
    start() {
    }
    stop() {
    }
    print(_command) {
    }
}

class DomainEventLogger extends Logger {
    constructor() {
        super();
    }
}

class NoopEventLogger extends DomainEventLogger {
    constructor() {
        super();
    }
    start() {
    }
    stop() {
    }
    print(_event) {
    }
}

class AggregateStoreRegister {
    constructor() {
        this.stores = [];
    }
    register(store) {
        this.stores.push(store);
    }
    captureAggregatesSnapshot(aggregateId) {
        if (!aggregateId) {
            return {};
        }
        const aggregates = {};
        this.stores.forEach((store) => {
            const aggregate = store.findById(aggregateId);
            if (aggregate) {
                const aggregateName = aggregate.constructor.name;
                aggregates[aggregateName] = aggregate;
            }
        });
        return this.cloneAggregates(aggregates);
    }
    cloneAggregates(aggregates) {
        // return JSON.parse(JSON.stringify(aggregates));
        return aggregates;
    }
}

class ConsoleEventLogger extends DomainEventLogger {
    constructor() {
        super();
        this.enabled = false;
        this.unsubscribe$ = new HermesSubject();
        this.eventBus = CoreContainer.resolve(DomainEventBus);
        this.aggregateStoreRegister = CoreContainer.resolve(AggregateStoreRegister);
        this.eventBus
            .pipe(hermesFilter(() => this.enabled), hermesTakeUntil(this.unsubscribe$))
            .subscribe((domainEvent) => {
            this.log(domainEvent);
        });
    }
    onDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    start() {
        this.enabled = true;
    }
    stop() {
        this.enabled = false;
    }
    print(domainEvent) {
        const aggregateId = domainEvent.getAggregateId(), aggregates = this.aggregateStoreRegister.captureAggregatesSnapshot(aggregateId);
        // eslint-disable-next-line no-console
        console.log(domainEvent.toString(), domainEvent, aggregates);
    }
}

const hermesApi = 'hermesApi';
class HermesApi {
    constructor(platformId) {
        this.platformId = platformId;
        this.commandLogger = CoreContainer.resolve(CommandLogger);
        this.eventLogger = CoreContainer.resolve(DomainEventLogger);
        if (isPlatformBrowser(this.platformId)) {
            const api = (api) => {
                return {
                    set loggers(enabled) {
                        if (enabled) {
                            // api.commandLogger.start(); TO FIX
                            // api.eventLogger.start();
                        }
                        else {
                            // api.commandLogger.stop(); // TO FIX
                            // api.eventLogger.stop();
                        }
                    },
                    set domain(domainName) {
                        if (domainName) {
                            api.commandLogger.setDomain(domainName);
                            api.eventLogger.setDomain(domainName);
                        }
                    }
                };
            };
            window[hermesApi] = api(this);
            window[hermesApi].loggers = false;
        }
    }
    init() {
    }
}
HermesApi.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesApi, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
HermesApi.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesApi });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesApi, decorators: [{
            type: Injectable
        }], ctorParameters: function () {
        return [{ type: Object, decorators: [{
                        type: Inject,
                        args: [PLATFORM_ID]
                    }] }];
    } });

class HermesLoggersInitializer {
    // private readonly commandLogger: CommandLogger = CoreContainer.resolve(CommandLogger);
    // private readonly eventLogger: DomainEventLogger = CoreContainer.resolve(DomainEventLogger);
    constructor(platformId) {
        this.platformId = platformId;
    }
    start() {
        this.loggersStart();
    }
    stop() {
        this.loggersStop();
    }
    loggersStart() {
        if (isPlatformBrowser(this.platformId)) {
            // this.commandLogger.start();
            // this.eventLogger.start();
        }
    }
    loggersStop() {
        if (isPlatformBrowser(this.platformId)) {
            // this.commandLogger.stop(); // TO FIX
            // this.eventLogger.stop();
        }
    }
}
HermesLoggersInitializer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesLoggersInitializer, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
HermesLoggersInitializer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesLoggersInitializer });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesLoggersInitializer, decorators: [{
            type: Injectable
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [PLATFORM_ID]
                    }] }];
    } });

class DomainEventPublisher {
    constructor(eventStream) {
        this.eventStream = eventStream;
    }
    publish(args) {
        if (Array.isArray(args)) {
            for (const arg of args) {
                this.publishEvent(arg);
            }
        }
        else {
            this.publishEvent(args);
        }
    }
    publishFromAggregate(aggregate) {
        const events = [...aggregate.getEvents()];
        events.forEach((aggregateEvent) => {
            this.publish(aggregateEvent.toDomainEvent());
        });
    }
    publishEvent(event) {
        if (!event) {
            // eslint-disable-next-line no-console
            console.error(`${event} is not defined`);
        }
        if (!(event instanceof DomainEvent)) {
            // throw new Error(`${event} is not a DomainEvent`);
            // eslint-disable-next-line no-console
            console.error(`${event} is not a DomainEvent`);
        }
        this.eventStream.next(event);
    }
}
DomainEventPublisher.services = [DomainEventStream];

function createAggregateCommandHandlerFactory(createAggregateCommandHandler, aggregateName) {
    return new CreateAggregateCommandHandlerImpl(createAggregateCommandHandler, aggregateName);
}
class CreateAggregateCommandHandlerImpl {
    constructor(createAggregateCommandHandler, aggregateType) {
        this.createAggregateCommandHandler = createAggregateCommandHandler;
        this.aggregateType = aggregateType;
        this.aggregateFactoryArchive = CoreContainer.resolve(AggregateFactoryArchive);
        this.aggregateRepositoryArchive = CoreContainer.resolve(AggregateRepositoryArchive);
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
        this.commandType = this.createCommandInstance().getMessageType();
    }
    handleCommand(command) {
        const aggregateId = command.getAggregateId();
        const optFactory = this.aggregateFactoryArchive.get(this.aggregateType);
        optFactory.ifPresent((factory) => {
            const aggregate = factory.create(aggregateId);
            const type = aggregate.getType(), createCommandConstructor = aggregate.createEvent();
            const createCommand = new createCommandConstructor(aggregateId, type);
            aggregate.addEvent(createCommand);
            const optRepository = this.aggregateRepositoryArchive.get(this.aggregateType);
            optRepository.ifPresent((repo) => {
                repo.save(aggregate);
                this.domainEventPublisher.publishFromAggregate(aggregate);
            });
        });
    }
    forCommand(command) {
        return this.commandType === command.getMessageType();
    }
    createCommandInstance() {
        const args = [], argumentLength = this.createAggregateCommandHandler.forCommand().constructor.length;
        args.fill(undefined, 0, argumentLength);
        if (args.length === 0) {
            return (new (this.createAggregateCommandHandler.forCommand())());
        }
        else if (args.length === 1) {
            return (new (this.createAggregateCommandHandler.forCommand())(args[0]));
        }
        else if (args.length === 2) {
            return (new (this.createAggregateCommandHandler.forCommand())(args[0], args[1]));
        }
        else if (args.length === 3) {
            return (new (this.createAggregateCommandHandler.forCommand())(args[0], args[1], args[2]));
        }
        else if (args.length === 4) {
            return (new (this.createAggregateCommandHandler.forCommand())(args[0], args[1], args[2], args[3]));
        }
        else if (args.length === 5) {
            return (new (this.createAggregateCommandHandler.forCommand())(args[0], args[1], args[2], args[3], args[4]));
        }
        else {
            throw new Error('CreateAggregateCommandHandlerImpl constructor out of arguments');
        }
    }
}

/**
 * ngc for grid package for some reasons doesn't allow to use injection token
 */
const CREATE_AGGREGATE_COMMAND_HANDLERS = 'HERMES - CREATE_AGGREGATE_COMMAND_HANDLERS';

const aggregateDefinitionToken = 'Hermes - aggregateDefinitionToken';

const COMMAND_HANDLERS = 'HERMES - COMMAND_HANDLERS_TOKEN';

function commandHandlerFactory(commandHandler, aggregateName) {
    return new CommandHandlerImpl(commandHandler, aggregateName);
}
class CommandHandlerImpl {
    constructor(commandHandler, aggregateType) {
        this.commandHandler = commandHandler;
        this.aggregateType = aggregateType;
        this.aggregateRepositoryArchive = CoreContainer.resolve(AggregateRepositoryArchive);
        this.commandType = this.createCommandInstance().getMessageType();
    }
    publishDomainEvents(aggregate, command) {
        this.commandHandler.publish(aggregate, command);
    }
    handleCommand(command) {
        const aggregateId = command.getAggregateId();
        const optRepository = this.aggregateRepositoryArchive.get(this.aggregateType);
        optRepository.ifPresent((repo) => {
            const optAggregate = repo.findById(aggregateId);
            optAggregate.ifPresent((aggregate) => {
                this.commandHandler.handle(aggregate, command);
                this.publishDomainEvents(aggregate, command);
            });
        });
    }
    forCommand(command) {
        return this.commandType === command.getMessageType();
    }
    createCommandInstance() {
        const args = [], argumentLength = this.commandHandler.forCommand().constructor.length;
        args.fill(undefined, 0, argumentLength);
        if (args.length === 0) {
            return (new (this.commandHandler.forCommand())());
        }
        else if (args.length === 1) {
            return (new (this.commandHandler.forCommand())(args[0]));
        }
        else if (args.length === 2) {
            return (new (this.commandHandler.forCommand())(args[0], args[1]));
        }
        else if (args.length === 3) {
            return (new (this.commandHandler.forCommand())(args[0], args[1], args[2]));
        }
        else if (args.length === 4) {
            return (new (this.commandHandler.forCommand())(args[0], args[1], args[2], args[3]));
        }
        else if (args.length === 5) {
            return (new (this.commandHandler.forCommand())(args[0], args[1], args[2], args[3], args[4]));
        }
        else {
            throw new Error('CommandHandlerImpl constructor out of arguments');
        }
    }
}

function domainEventHandlerFactoryAsFactory(domainEventHandlerType) {
    return CoreContainer.resolve(domainEventHandlerType);
}
function domainEventHandlerFactory(domainEventHandler) {
    return new DomainEventHandlerImpl(domainEventHandler, [domainEventHandler.forEvent()]);
}
function multiDomainEventHandlerFactory(domainEventHandler) {
    return new DomainEventHandlerImpl(domainEventHandler, domainEventHandler.forEvents());
}
class DomainEventHandlerImpl {
    constructor(domainEventHandler, events) {
        this.domainEventHandler = domainEventHandler;
        this.events = events;
        this.eventTypes = this.createDomainEventTypes();
    }
    handleEvent(event) {
        this.domainEventHandler.handle(event);
    }
    forEvents(events) {
        return events.some((event) => {
            return this.eventTypes.some((type) => {
                return type === event.getMessageType();
            });
        });
    }
    createDomainEventTypes() {
        const types = [];
        for (const event of this.events) {
            const instance = this.createDomainEventInstance(event);
            types.push(instance.getMessageType());
        }
        return types;
    }
    createDomainEventInstance(eventType) {
        const args = [], argumentLength = eventType.constructor.length;
        args.fill(undefined, 0, argumentLength);
        if (args.length === 0) {
            return (new eventType());
        }
        else if (args.length === 1) {
            return (new eventType(args[0]));
        }
        else if (args.length === 2) {
            return (new eventType(args[0], args[1]));
        }
        else if (args.length === 3) {
            return (new eventType(args[0], args[1], args[2]));
        }
        else if (args.length === 4) {
            return (new eventType(args[0], args[1], args[2], args[3]));
        }
        else if (args.length === 5) {
            return (new eventType(args[0], args[1], args[2], args[3], args[4]));
        }
        else {
            throw new Error('DomainEventHandler constructor out of arguments');
        }
    }
}

class HermesRunner extends Reactive {
    constructor(aggregateDefinitionInitializer, commandHandlerInitializer, domainEventHandlerInitializer, commandBus, definedAggregate, eventHandlers, aggregateCommandHandlers, commandHandlers) {
        super();
        this.aggregateDefinitionInitializer = aggregateDefinitionInitializer;
        this.commandHandlerInitializer = commandHandlerInitializer;
        this.domainEventHandlerInitializer = domainEventHandlerInitializer;
        this.commandBus = commandBus;
        this.definedAggregate = definedAggregate;
        this.eventHandlers = eventHandlers;
        this.aggregateCommandHandlers = aggregateCommandHandlers;
        this.commandHandlers = commandHandlers;
        this.started = false;
        if (this.eventHandlers === null) {
            this.eventHandlers = [];
        }
        if (this.aggregateCommandHandlers === null) {
            this.aggregateCommandHandlers = [];
        }
        if (this.commandHandlers === null) {
            this.commandHandlers = [];
        }
    }
    run() {
        if (this.started) {
            return;
        }
        this.checkNullCommand(this.commandHandlers, this.aggregateCommandHandlers);
        this.checkCommandHandlerIsCollection(this.commandHandlers);
        this.checkDomainEventHandlerIsCollection(this.eventHandlers);
        this.aggregateDefinitionInitializer.register(this.definedAggregate);
        this.commandHandlerInitializer.register(this.commandHandlers);
        this.commandHandlerInitializer.registerAggregateCommandHandlers(this.aggregateCommandHandlers);
        this.domainEventHandlerInitializer.init(this.eventHandlers);
        this.started = true;
    }
    destroy() {
        this.commandHandlerInitializer.ngOnDestroy();
        this.domainEventHandlerInitializer.ngOnDestroy();
    }
    checkNullCommand(commandHandlers, aggregateCommandHandlers) {
        this.commandBus
            .ofNullHandler(commandHandlers, aggregateCommandHandlers)
            .pipe(this.hermesTakeUntil())
            .subscribe((command) => {
            // eslint-disable-next-line no-console
            console.error(`Command ${command.toString()} was not intercepted by any CommandHandler.`);
        });
    }
    checkCommandHandlerIsCollection(commandHandlers) {
        if (commandHandlers && !Array.isArray(commandHandlers)) {
            // eslint-disable-next-line no-console
            console.warn('You might provided commandHandler without specifying "multi: true".');
        }
    }
    checkDomainEventHandlerIsCollection(eventHandlers) {
        if (eventHandlers && !Array.isArray(eventHandlers)) {
            // eslint-disable-next-line no-console
            console.warn('You might provided eventHandler without specifying "multi: true".');
        }
    }
}
HermesRunner.services = [
    AggregateDefinitionInitializer,
    CommandHandlerInitializer,
    DomainEventHandlerInitializer,
    CommandBus,
    { inject: aggregateDefinitionToken, collection: true },
    { inject: DOMAIN_EVENT_HANDLERS, collection: true, optional: true },
    { inject: CREATE_AGGREGATE_COMMAND_HANDLERS, collection: true, optional: true },
    { inject: COMMAND_HANDLERS, collection: true, optional: true }
];

const providers = [
    HermesLoggersInitializer,
    RandomStringGenerator,
    HermesApi
];
function commandLoggerFactory(enabled, consoleCommandLogger, noopCommandLogger) {
    if (enabled) {
        return consoleCommandLogger;
    }
    else {
        return noopCommandLogger;
    }
}
function eventLoggerFactory(enabled, consoleEventLogger, noopEventLogger) {
    if (enabled) {
        return consoleEventLogger;
    }
    else {
        return noopEventLogger;
    }
}
class HermesBaseModule extends Reactive {
    constructor(hermesLoggersInitializer, hermesApi) {
        super();
        this.hermesLoggersInitializer = hermesLoggersInitializer;
        this.hermesApi = hermesApi;
        this.hermesRunner = CoreContainer.resolve(HermesRunner);
        this.hermesApi.init();
        this.hermesLoggersInitializer.start();
        this.hermesRunner.run();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.hermesLoggersInitializer.stop();
    }
}
HermesBaseModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesBaseModule, deps: [{ token: HermesLoggersInitializer }, { token: HermesApi }], target: i0.ɵɵFactoryTarget.Injectable });
HermesBaseModule.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesBaseModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesBaseModule, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: HermesLoggersInitializer }, { type: HermesApi }]; } });
class HermesModule extends HermesBaseModule {
    // static readonly container = CoreContainer;
    constructor(hermesLoggersInitializer, hermesApi) {
        super(hermesLoggersInitializer, hermesApi);
    }
    static defineAggregate(aggregateKey, createCommandHandler, factory, repository) {
        CoreContainer.provide(factory);
        CoreContainer.provide(repository);
        CoreContainer.provideValue(aggregateKey, aggregateKey);
        CoreContainer.provideValueCollection(aggregateDefinitionToken, {
            key: aggregateKey,
            factory: factory,
            repository: repository
        });
        HermesModule.registerCreateCommandHandler(createCommandHandler, aggregateKey);
    }
    static withConfig() {
        return {
            ngModule: HermesModule,
            providers: providers
        };
    }
    static registerCommandHandler(commandHandlerType, aggregateName) {
        CoreContainer.provide(commandHandlerType);
        CoreContainer.provideFactoryCollection(COMMAND_HANDLERS, {
            create: commandHandlerFactory,
            deps: [
                commandHandlerType,
                aggregateName
            ]
        });
    }
    static registerDomainEventHandler(domainEventHandlerType) {
        CoreContainer.provide(domainEventHandlerType);
        CoreContainer.provideFactoryCollection(DOMAIN_EVENT_HANDLERS, {
            create: domainEventHandlerFactory,
            deps: [
                domainEventHandlerType
            ]
        });
    }
    static registerMultiDomainEventHandler(domainEventHandlerType) {
        CoreContainer.provide(domainEventHandlerType);
        CoreContainer.provideFactoryCollection(DOMAIN_EVENT_HANDLERS, {
            create: multiDomainEventHandlerFactory,
            deps: [
                domainEventHandlerType
            ]
        });
    }
    static registerCreateCommandHandler(createCommandHandlerType, aggregateName) {
        CoreContainer.provide(createCommandHandlerType);
        CoreContainer.provideFactoryCollection(CREATE_AGGREGATE_COMMAND_HANDLERS, {
            create: createAggregateCommandHandlerFactory,
            deps: [
                createCommandHandlerType,
                aggregateName
            ]
        });
    }
}
HermesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesModule, deps: [{ token: HermesLoggersInitializer }, { token: HermesApi }], target: i0.ɵɵFactoryTarget.NgModule });
HermesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesModule, imports: [CommonModule] });
HermesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesModule, providers: providers, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: providers
                }]
        }], ctorParameters: function () { return [{ type: HermesLoggersInitializer }, { type: HermesApi }]; } });

class CommandDispatcher {
    constructor() {
        this.commandStream = CoreContainer.resolve(CommandStream);
    }
    dispatch(command) {
        this.commandStream.next(command);
    }
}

const CoreContainer = createContainer();
CoreContainer.provideValue(EVENT_LOGGER_ENABLED, true);
CoreContainer.provideValue(COMMAND_LOGGER_ENABLED, true);
CoreContainer.provide(ConsoleCommandLogger);
CoreContainer.provide(NoopCommandLogger);
CoreContainer.provide(NoopEventLogger);
CoreContainer.provide(ConsoleEventLogger);
CoreContainer.provide(DomainEventBus);
CoreContainer.provide(AggregateStoreRegister);
CoreContainer.provideFactory(CommandLogger, { create: commandLoggerFactory, deps: [COMMAND_LOGGER_ENABLED, ConsoleCommandLogger, NoopCommandLogger] });
CoreContainer.provideFactory(DomainEventLogger, { create: eventLoggerFactory, deps: [EVENT_LOGGER_ENABLED, ConsoleEventLogger, NoopEventLogger] });
CoreContainer.provide(AggregateFactoryArchive, AggregateFactoryArchive);
CoreContainer.provide(DomainEventPublisher);
CoreContainer.provide(AggregateRepositoryArchive);
CoreContainer.provide(DomainEventStream, DomainEventStream);
CoreContainer.provide(DomainEventStore, DomainEventStore);
CoreContainer.provide(CommandBus, CommandBus);
CoreContainer.provide(CommandStream);
CoreContainer.provide(CommandDispatcher);
CoreContainer.provide(AggregateDefinitionInitializer, AggregateDefinitionInitializer);
CoreContainer.provide(CommandHandlerInitializer, CommandHandlerInitializer);
CoreContainer.provide(DomainEventHandlerInitializer, DomainEventHandlerInitializer);
CoreContainer.provide(HermesRunner);
const resetCoreContainer = () => {
    CoreContainer.clearOnlyRecords();
};

class Command extends Message {
}

const MessageType = Function;

const CommandType = MessageType;

class AggregateFactory {
}

class AggregateEvent {
    constructor(aggregateId, type) {
        this.aggregateId = aggregateId;
        this.type = type;
    }
    getAggregateId() {
        return this.aggregateId;
    }
    getType() {
        return this.type;
    }
    equals(event) {
        return this.equalsByType(event) &&
            this.getAggregateId().equals(event.getAggregateId());
    }
    equalsByType(event) {
        return this.getType() === event.getType();
    }
}

const AggregateEventType = MessageType;

class AggregateRepository {
}

class AggregateStore {
}

class AggregateRoot {
    constructor(aggregateId, type) {
        this.type = type;
        this.aggregateId = aggregateId;
        this.events = [];
    }
    getId() {
        return this.aggregateId;
    }
    getType() {
        return this.type;
    }
    getEvents() {
        return this.events;
    }
    addEvent(args) {
        if (Array.isArray(args)) {
            for (const event of args) {
                this.events.push(event);
            }
        }
        else {
            this.events.push(args);
        }
    }
    clearEvents() {
        this.events.length = 0;
    }
    equals(aggregate) {
        return aggregate.getId().toString() === this.getId().toString();
    }
}

class HermesId {
    constructor(uid) {
        this.uid = uid;
    }
    getId() {
        return this.uid;
    }
    equals(hermesId) {
        return this.uid === hermesId.getId();
    }
}

class AggregateId extends HermesId {
    constructor(uid) {
        super(uid);
    }
    toString() {
        return super.getId();
    }
}

const DomainEventType = MessageType;

class ReactiveService extends Reactive {
    constructor() {
        super();
    }
    ngOnDestroy() {
        this.hermesUnsubscribe();
    }
}
ReactiveService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ReactiveService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ReactiveService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ReactiveService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ReactiveService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class KeyMap {
    constructor() {
        this.keys = new Map();
        this.values = new WeakMap();
    }
    find(key) {
        const internalKey = this.getInternalKey(key);
        if (internalKey !== undefined) {
            return Optional.of(this.values.get(internalKey));
        }
        else {
            return Optional.empty();
        }
    }
    has(key) {
        const internalKey = this.getInternalKey(key);
        return this.values.has(internalKey);
    }
    set(key, value) {
        this.keys.set(key.toString(), key);
        this.values.set(key, value);
    }
    size() {
        return this.keys.size;
    }
    remove(key) {
        if (this.hasInternalKey(key)) {
            this.keys.delete(key.toString());
            this.values.delete(key);
        }
    }
    removeAll() {
        this.keys.forEach((value) => {
            this.values.delete(value);
        });
        this.keys.clear();
    }
    getInternalKey(key) {
        return this.keys.get(key.toString());
    }
    hasInternalKey(key) {
        return this.keys.has(key.toString());
    }
}

function hermesMap(convert) {
    return (source) => {
        return new HermesObservable((observer) => {
            let index = 0;
            const subscriber = subscriberForOperator(observer, (value) => {
                observer.next(convert(value, index++));
            });
            return source.subscribe(subscriber).getFinalize();
        });
    };
}

function hermesDistinctUntilChanged(compareFn) {
    const compare = compareFn ? compareFn : defaultCompareFn;
    return (source) => {
        return new HermesObservable((observer) => {
            let previousValue = null;
            const subscriber = subscriberForOperator(observer, (value) => {
                if (previousValue === null || !compare(previousValue, value)) {
                    previousValue = value;
                    observer.next(value);
                }
            });
            return source.subscribe(subscriber).getFinalize();
        });
    };
}
function defaultCompareFn(a, b) {
    return a === b;
}

class HermesBehaviorSubject extends HermesSubject {
    constructor(defaultValue) {
        super();
        this.lastValue = defaultValue;
    }
    next(value) {
        this.lastValue = value;
        super.next(value);
    }
    subscribe() {
        const subscription = super.subscribe(arguments[0], arguments[1], arguments[2]);
        super.next(this.lastValue);
        return subscription;
    }
}

class HermesReplaySubject extends HermesSubject {
    constructor(bufferSize = 1) {
        super();
        this.bufferSize = bufferSize;
        this.values = [];
    }
    next(value) {
        this.values.push(value);
        if (this.bufferSize < this.values.length) {
            this.values.shift();
        }
        super.next(value);
    }
    subscribe() {
        let subscriber;
        if (arguments[0] instanceof HermesSubscriber) {
            subscriber = arguments[0];
        }
        else {
            subscriber = this.createSubscriber(arguments[0], arguments[1], arguments[2]);
        }
        const subscription = super.subscribe(subscriber);
        for (const value of this.values) {
            subscriber.next(value);
        }
        return subscription;
    }
}

class HermesArchiveSubject extends HermesSubject {
    constructor() {
        super();
    }
    static of(value) {
        if (value !== undefined) {
            return new HermesBehaviorSubject(value);
        }
        else {
            return new HermesReplaySubject(1);
        }
    }
}

class HermesSingleSubscriber extends HermesSubscriber {
    next(value) {
        if (this.isCompleted()) {
            return;
        }
        const observer = this.getObserver();
        if (observer && observer.next) {
            observer.next(value);
            this.complete();
        }
    }
}

class HermesSingle extends HermesObservable {
    createSubscriber(next, error, complete) {
        return new HermesSingleSubscriber({
            next,
            error,
            complete
        });
    }
}

function singleFromObservable(source) {
    return new HermesSingle((observer) => {
        const subscriber = new HermesSubscriber({
            next: (value) => observer.next(value),
            error: (error) => observer.error(error),
            complete: () => {
            }
        });
        const subscription = source.subscribe(subscriber);
        return subscription.getFinalize();
    });
}

class KeyArchive extends ReactiveService {
    constructor(defaultValue) {
        super();
        this.archive = new KeyMap();
        this.defaultValue = Optional.empty();
        this.archive$ = HermesArchiveSubject.of();
        if (defaultValue !== undefined && defaultValue !== null) {
            this.defaultValue = Optional.of(defaultValue);
        }
    }
    on(key) {
        this.tryToInitDefault(key);
        return this.archive$
            .toObservable()
            .pipe(hermesFilter(() => this.isNotStopped()), hermesMap((map) => {
            return map.find(key);
        }), hermesFilter((value) => value.isPresent()), hermesMap((value) => value.getValueOrNullOrThrowError()), hermesDistinctUntilChanged(this.equals), this.hermesTakeUntil());
    }
    once(key) {
        return singleFromObservable(this.on(key));
    }
    find(key) {
        this.tryToInitDefault(key);
        return this.archive.find(key);
    }
    next(key, value) {
        this.archive.set(key, value);
        this.archive$.next(this.archive);
    }
    equals(a, b) {
        return a === b;
    }
    createDefaultValue(defaultValue) {
        return defaultValue;
    }
    tryToInitDefault(key) {
        this.defaultValue
            .ifPresent((value) => {
            if (!this.archive.has(key)) {
                this.next(key, value);
            }
        });
    }
}

class AggregateArchive extends KeyArchive {
    constructor(defaultValue) {
        super(defaultValue);
    }
}

class EventDrivenRepository extends AggregateArchive {
    constructor(defaultValues) {
        super(defaultValues);
    }
    handle(event) {
        this.next(event.getAggregateId(), event.getPayload());
    }
}

class ReadModelEntity {
    constructor(gui) {
        this.entityId = gui;
    }
    getId() {
        return this.entityId;
    }
}

class ReadModelEntityId {
    constructor(uid) {
        this.uid = uid;
    }
    toString() {
        return this.uid;
    }
    getId() {
        return this.uid;
    }
    equals(entityId) {
        return this.uid === entityId.getId();
    }
}

class ReadModelRoot {
    constructor(gui) {
        this.rootId = gui;
    }
    getId() {
        return this.rootId;
    }
}

class ReadModelRootId {
    constructor(uid) {
        this.uid = uid;
    }
    toString() {
        return this.uid;
    }
    getId() {
        return this.uid;
    }
    equals(entityId) {
        return this.uid === entityId.getId();
    }
}

class ReadModelRootRepository extends Reactive {
    constructor() {
        super();
        this.domainEventBus = CoreContainer.resolve(DomainEventBus);
        this.domainEventBus
            .ofEvents(this.forEvents())
            .pipe(this.hermesTakeUntil())
            .subscribe((event) => {
            try {
                this.subscribe(event);
            }
            catch (e) {
                // eslint-disable-next-line no-console
                console.error(e);
            }
        });
    }
}

class ReadModelStore {
}

class EventRepository extends ReactiveService {
    constructor() {
        super();
        this.domainEventBus = CoreContainer.resolve(DomainEventBus);
    }
    onEvent(aggregateId, eventType) {
        return this.domainEventBus
            .ofEvents([
            eventType
        ])
            .pipe(hermesFilter((event) => event.getAggregateId().toString() === aggregateId.toString()));
    }
}

class Entity {
    constructor(id) {
        this.entityId = id;
    }
    getId() {
        return this.entityId;
    }
    equals(entity) {
        return this.entityId.equals(entity.getId());
    }
}

class EntityId extends HermesId {
}

function ValueObject(_target) {
}
function DomainObject(_target) {
}
function ReadModelObject(_target) {
}

class DomainModule {
    constructor() {
    }
}
DomainModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DomainModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DomainModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DomainModule });
DomainModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DomainModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DomainModule, decorators: [{
            type: NgModule
        }], ctorParameters: function () { return []; } });

class ApiModule {
}
ApiModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ApiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ApiModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ApiModule });
ApiModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ApiModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ApiModule, decorators: [{
            type: NgModule
        }] });

class FeatureModule {
}
FeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FeatureModule });
FeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FeatureModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FeatureModule, decorators: [{
            type: NgModule
        }] });

function hermesNever() {
    return new HermesObservable(() => {
    });
}

function hermesInterval(interval) {
    let counter = 0;
    return new HermesObservable((observer) => {
        const id = setInterval(() => {
            observer.next(counter++);
        }, interval);
        return () => {
            clearInterval(id);
            observer.complete();
        };
    });
}

function hermesTimer(time) {
    return new HermesObservable((observer) => {
        const id = setTimeout(() => {
            observer.next(0);
        }, time);
        return () => {
            clearTimeout(id);
            observer.complete();
        };
    });
}

function hermesFromEvent(element, type) {
    return new HermesObservable((observer) => {
        const listener = (event) => {
            observer.next(event);
        };
        element.addEventListener(type, listener);
        return () => {
            element.removeEventListener(type, listener);
        };
    });
}

function hermesThrowError(error) {
    return new HermesObservable(observer => {
        observer.error(error);
    });
}

function hermesSkip(valuesNumber) {
    return (source) => {
        return new HermesObservable(observer => {
            let index = 0;
            const subscriber = subscriberForOperator(observer, (value) => {
                if (index >= valuesNumber) {
                    observer.next(value);
                }
                index++;
            });
            return source.subscribe(subscriber).getFinalize();
        });
    };
}

function hermesSwitchMap(operation) {
    return (source) => {
        return new HermesObservable((observer) => {
            let isOuterCompleted = false;
            let innerSubscriber = null;
            const tryToComplete = function () {
                if (isOuterCompleted && !innerSubscriber) {
                    observer.complete();
                }
            };
            const outerSubscriber = subscriberForOperator(observer, (v) => {
                if (innerSubscriber) {
                    innerSubscriber.unsubscribe();
                }
                const subscriber = new HermesSubscriber({
                    next: (v2) => observer.next(v2),
                    error: (e) => observer.error(e),
                    complete: () => {
                        innerSubscriber = null;
                        tryToComplete();
                    }
                });
                innerSubscriber = subscriber;
                const innerSubscription = operation(v).subscribe(subscriber);
                return innerSubscription.getFinalize();
            }, () => {
                isOuterCompleted = true;
                tryToComplete();
            });
            return source.subscribe(outerSubscriber).getFinalize();
        });
    };
}

function hermesTap(operation) {
    return (source) => {
        return new HermesObservable(observer => {
            const subscriber = subscriberForOperator(observer, (value) => {
                operation(value);
                observer.next(value);
            });
            return source.subscribe(subscriber).getFinalize();
        });
    };
}

function hermesToArray() {
    return (source) => {
        return new HermesObservable((observer) => {
            const values = [];
            const subscriber = subscriberForOperator(observer, (value) => {
                values.push(value);
            }, () => {
                if (values.length > 0) {
                    observer.next(values);
                }
                observer.complete();
            });
            return source.subscribe(subscriber).getFinalize();
        });
    };
}

function fromRxJsObservable(source$) {
    return new HermesObservable((observer) => {
        const subscription = source$.subscribe((value) => observer.next(value), (error) => observer.error(error), () => observer.complete());
        return () => subscription.unsubscribe();
    });
}

class Archive {
    constructor(value) {
        this.archive$ = HermesArchiveSubject.of(value);
    }
    on() {
        return this.archive$
            .toObservable()
            .pipe(hermesDistinctUntilChanged(this.compare));
    }
    next(value) {
        this.archive$.next(value);
    }
    compare(one, two) {
        return one === two;
    }
}

class RandomIdGenerator {
    static generate() {
        RandomIdGenerator.index++;
        return RandomIdGenerator.index;
    }
}
RandomIdGenerator.index = 0;

class PersistAnemia {
    constructor(uid) {
        this.readModelRootId = uid;
    }
    getReadModelRootId() {
        return this.readModelRootId;
    }
    getId() {
        return this.getReadModelRootId().toString();
    }
}

class PersistStateStore {
    constructor() {
        this.state = new Map();
    }
    set(anemia) {
        this.state.set(anemia.getId(), anemia);
    }
    setMany(anemias) {
        anemias.forEach((anemia) => {
            this.set(anemia);
        });
    }
    get(aggregateId) {
        return Optional.of(this.state.get(aggregateId.toString()));
    }
    getAll() {
        return Array.from(this.state.values());
    }
    clear() {
        this.state.clear();
    }
}

class PersistReadModelStore extends ReadModelStore {
    constructor(stateStore) {
        super();
        this.stateStore = stateStore;
    }
    getById(aggregateId) {
        return this.getValue(aggregateId);
    }
    getAll() {
        return this.getAllValues();
    }
    getAllValues() {
        return this.stateStore
            .getAll()
            .map((anemia) => this.toReadModel(anemia));
    }
    getValue(aggregateId) {
        const optAnemia = this.stateStore.get(aggregateId);
        return optAnemia.map(this.toReadModel);
    }
}

class PersistAggregateStore extends AggregateStore {
    constructor(stateStore) {
        super();
        this.stateStore = stateStore;
        this.aggregateStoreRegister = CoreContainer.resolve(AggregateStoreRegister);
        this.aggregateStoreRegister.register(this);
    }
    save(aggregate) {
        this.saveValue(aggregate);
    }
    findById(aggregateId) {
        return this.getValue(aggregateId);
    }
    saveValue(aggregate) {
        const anemia = this.toAnemia(aggregate);
        this.stateStore.set(anemia);
    }
    getValue(aggregateId) {
        const optAnemia = this.stateStore.get(aggregateId);
        return optAnemia.map(this.fromAnemia);
    }
}

class InMemoryAggregateStore extends AggregateStore {
    constructor(inMemoryStore) {
        super();
        this.inMemoryStore = inMemoryStore;
        this.aggregateStoreRegister = CoreContainer.resolve(AggregateStoreRegister);
        this.aggregateStoreRegister.register(this);
    }
    save(arg) {
        if (Array.isArray(arg)) {
            arg.forEach((aggregate) => {
                this.inMemoryStore.set(aggregate);
            });
        }
        else {
            const aggregate = arg;
            this.inMemoryStore.set(aggregate);
        }
    }
    findById(aggregateId) {
        const optAggregate = this.inMemoryStore.get(aggregateId);
        optAggregate.ifPresent((a) => a.clearEvents());
        return optAggregate;
    }
    remove(aggregateId) {
        this.inMemoryStore.delete(aggregateId);
    }
}

class InMemoryReadModelStore extends ReadModelStore {
    constructor(inMemoryStore) {
        super();
        this.inMemoryStore = inMemoryStore;
    }
    getById(aggregateId) {
        return this.getValue(aggregateId);
    }
    getValue(aggregateId) {
        const optAggregate = this.inMemoryStore.get(aggregateId);
        return optAggregate.map(this.toReadModel.bind(this));
    }
}

class InMemoryStore {
    constructor() {
        this.state = new Map();
    }
    set(aggregate) {
        this.state.set(aggregate.getId().toString(), aggregate);
    }
    setMany(aggregates) {
        aggregates.forEach((aggregate) => {
            this.set(aggregate);
        });
    }
    get(aggregateId) {
        return Optional.of(this.state.get(aggregateId.toString()));
    }
    getAll() {
        return Array.from(this.state.values()).map(v => Optional.of(v));
    }
    has(aggregateId) {
        return this.state.has(aggregateId.toString());
    }
    delete(aggregateId) {
        this.state.delete(aggregateId.toString());
    }
    clear() {
        this.state.clear();
    }
}

class HermesDomainModule {
    ngOnDestroy() {
    }
}
HermesDomainModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesDomainModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HermesDomainModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesDomainModule });
HermesDomainModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesDomainModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: HermesDomainModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });

function assertDomainEvents(actualEvents, expectedEvents) {
    expect(actualEvents.length).toEqual(expectedEvents.length);
    for (const actualEvent of actualEvents) {
        const expectedEvent = expectedEvents.find((event) => {
            return event.equalsByType(actualEvent);
        });
        expect(expectedEvent).toBeDefined();
        expect(actualEvent.equalsByType(expectedEvent)).toBeTruthy();
        // expect(actualEvent.aggregateId).toEqual(expectedEvent.aggregateId, 'Events aggregateId should be the same');
        expect(actualEvent.getPayload()).toEqual(expectedEvent.getPayload(), 'Events payload should be the same');
    }
}
function assertAggregateEvents(actualEvents, expectedEvents) {
    expect(actualEvents.length).toEqual(expectedEvents.length, 'Aggregate events');
    for (const actualEvent of actualEvents) {
        const expectedEvent = expectedEvents.find((event) => {
            return event.equals(actualEvent);
        });
        expect(expectedEvent).toBeDefined();
    }
}
function testEventRepositoryIsEmptyOnStart(createStream, desc) {
    it('should be no ' + desc + ' events on start', () => {
        expect.assertions(3);
        // given
        const nextFn = jest.fn(), errorFn = jest.fn(), completeFn = jest.fn();
        // when
        createStream()
            .subscribe(() => nextFn(), (err) => errorFn(err), () => completeFn());
        // then
        expect(nextFn).not.toHaveBeenCalled();
        expect(errorFn).not.toHaveBeenCalled();
        expect(completeFn).not.toHaveBeenCalled();
    });
}
function onDefaultValuesWarehouseTest(createStream, defaultValue, desc) {
    it('should have default value ' + desc, () => {
        expect.assertions(4);
        // given
        const nextFn = jest.fn(), errorFn = jest.fn(), completeFn = jest.fn();
        // when
        createStream()
            .subscribe((value) => nextFn(value), (err) => errorFn(err), () => completeFn());
        // then
        expect(nextFn).toHaveBeenCalledWith(defaultValue);
        expect(nextFn).toHaveBeenCalledTimes(1);
        expect(errorFn).not.toHaveBeenCalled();
        expect(completeFn).not.toHaveBeenCalled();
    });
}
function onceDefaultValuesWarehouseTest(createStream, defaultValue, desc) {
    it('should have default value ' + desc, () => {
        expect.assertions(4);
        // given
        const nextFn = jest.fn(), errorFn = jest.fn(), completeFn = jest.fn();
        // when
        createStream()
            .subscribe((value) => nextFn(value), (err) => errorFn(err), () => completeFn());
        // then
        expect(nextFn).toHaveBeenCalledWith(defaultValue);
        expect(nextFn).toHaveBeenCalledTimes(1);
        expect(errorFn).not.toHaveBeenCalled();
        expect(completeFn).toHaveBeenCalledTimes(1);
    });
}
function findDefaultValuesWarehouseTest(createValue, defaultValue, desc) {
    it('should find default value' + desc, function () {
        expect.assertions(1);
        expect(createValue()).toEqual(Optional.of(defaultValue));
    });
}
function commandInterceptedByHandlerTest(dispatch, handlerType) {
    it('should trigger command handler', () => {
        expect.assertions(1);
        // given
        const handler = CoreContainer.resolve(handlerType), handlerSpy = jest.spyOn(handler, 'handle');
        // when
        dispatch();
        // then
        expect(handlerSpy).toHaveBeenCalled();
    });
}
function commandPublishEventTest(dispatch, eventType) {
    it('should dispatch event', () => {
        expect.assertions(1);
        // given
        CoreContainer.resolve(DomainEventBus)
            .subscribe((event) => {
            // then
            if (event instanceof eventType) {
                expect(event instanceof eventType).toEqual(true);
            }
        });
        // when
        dispatch();
    });
}
function commandTriggersHandlerAndPublishEventTest(dispatch, handlerType, eventType) {
    commandInterceptedByHandlerTest(dispatch, handlerType);
    commandPublishEventTest(dispatch, eventType);
}

class CreateAggregateCommand extends Command {
    constructor(aggregateId, type) {
        super(aggregateId, type);
    }
}

function enableHermesLoggers(domainName, windowObject) {
    const winRef = windowObject ? windowObject : window;
    if (domainName) {
        winRef[hermesApi].domain = domainName;
    }
    winRef[hermesApi].loggers = true;
}
function disableHermesLoggers(windowObject) {
    const winRef = windowObject ? windowObject : window;
    delete winRef[hermesApi].domain;
    winRef[hermesApi].loggers = false;
}

class DomainInitializer {
    constructor(api, domain) {
        this.api = api;
        this.domain = domain;
        this.container = CoreContainer;
        this.initialized = false;
    }
    init() {
        if (this.initialized) {
            return;
        }
        this.defineAggregate();
        this.registerApiProviders();
        this.registerDomainProviders();
        this.registerCommandHandlers();
        this.registerEventHandlers();
        this.registerMultiEventHandlers();
        this.initialized = true;
    }
    defineAggregate() {
        const definition = this.domain.defineAggregate();
        if (definition) {
            HermesModule.defineAggregate(definition.aggregateKey, definition.createCommandHandler, definition.factory, definition.repository);
        }
    }
    registerApiProviders() {
        this.api.registerProviders(this.container);
    }
    registerDomainProviders() {
        this.domain.registerProviders(this.container);
    }
    registerCommandHandlers() {
        this.domain
            .registerCommandHandlers()
            .forEach((ch) => {
            HermesModule.registerCommandHandler(ch, this.domain.registerKey(this.container));
        });
    }
    registerEventHandlers() {
        this.domain
            .registerDomainEventHandler()
            .forEach((dh) => {
            HermesModule.registerDomainEventHandler(dh);
        });
    }
    registerMultiEventHandlers() {
        this.domain
            .registerMultiDomainEventHandler()
            .forEach((dh) => {
            HermesModule.registerMultiDomainEventHandler(dh);
        });
    }
}

/**
 * API
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AggregateArchive, AggregateEvent, AggregateEventType, AggregateFactory, AggregateId, AggregateRepository, AggregateRoot, AggregateStore, AggregateStoreRegister, ApiModule, Archive, COMMAND_LOGGER_ENABLED, Command, CommandDispatcher, CommandLogger, CommandType, CoreContainer, CreateAggregateCommand, DomainEvent, DomainEventBus, DomainEventPublisher, DomainEventType, DomainInitializer, DomainModule, DomainObject, EVENT_LOGGER_ENABLED, Entity, EntityId, EventDrivenRepository, EventRepository, FeatureModule, HermesApi, HermesArchiveSubject, HermesBehaviorSubject, HermesDomainModule, HermesId, HermesModule, HermesObservable, HermesReplaySubject, HermesRunner, HermesSingle, HermesSubject, HermesSubscription, InMemoryAggregateStore, InMemoryReadModelStore, InMemoryStore, KeyMap, Optional, PersistAggregateStore, PersistAnemia, PersistReadModelStore, PersistStateStore, RandomIdGenerator, RandomStringGenerator, Reactive, ReactiveService, ReadModelEntity, ReadModelEntityId, ReadModelObject, ReadModelRoot, ReadModelRootId, ReadModelRootRepository, ReadModelStore, ValueObject, assertAggregateEvents, assertDomainEvents, commandInterceptedByHandlerTest, commandPublishEventTest, commandTriggersHandlerAndPublishEventTest, createContainer, disableHermesLoggers, enableHermesLoggers, findDefaultValuesWarehouseTest, fromRxJsObservable, hermesDistinctUntilChanged, hermesEmpty, hermesFilter, hermesFromEvent, hermesInterval, hermesMap, hermesNever, hermesOf, hermesSkip, hermesSwitchMap, hermesTake, hermesTakeUntil, hermesTap, hermesThrowError, hermesTimer, hermesToArray, onDefaultValuesWarehouseTest, onceDefaultValuesWarehouseTest, provideEventHandlers, resetCoreContainer, singleFromObservable, testEventRepositoryIsEmptyOnStart, toRxJsObservable };
//# sourceMappingURL=generic-ui-hermes.mjs.map
