import { Injectable, Inject, PLATFORM_ID, InjectionToken, NgModule, Optional as Optional$1, Injector } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

class DomainEventLogger extends Logger {
}

const hermesApi = 'hermesApi';
class HermesApi {
    constructor(platformId, commandLogger, eventLogger) {
        this.platformId = platformId;
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
        if (isPlatformBrowser(this.platformId)) {
            const api = (api) => {
                return {
                    set loggers(enabled) {
                        if (enabled) {
                            api.commandLogger.start();
                            api.eventLogger.start();
                        }
                        else {
                            api.commandLogger.stop();
                            api.eventLogger.stop();
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
}
HermesApi.decorators = [
    { type: Injectable }
];
HermesApi.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: CommandLogger },
    { type: DomainEventLogger }
];

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

class HermesSubscription {
    constructor(finalize, isClosed) {
        this.closed = false;
        this.finalize = () => {
        };
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
    innerPipe(operation, stream$) {
        return ((input) => {
            return operation(input);
        })(stream$);
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

class CommandStream extends HermesSubject {
}
CommandStream.decorators = [
    { type: Injectable }
];

class CommandDispatcher {
    constructor(commandStream) {
        this.commandStream = commandStream;
    }
    dispatch(command) {
        this.commandStream.next(command);
    }
}
CommandDispatcher.decorators = [
    { type: Injectable }
];
CommandDispatcher.ctorParameters = () => [
    { type: CommandStream }
];

class RandomStringGenerator {
    static generate() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + `${RandomStringGenerator.index++}`;
    }
}
RandomStringGenerator.index = 0;
RandomStringGenerator.decorators = [
    { type: Injectable }
];

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

class Command extends Message {
}

const MessageType = Function;

const CommandType = MessageType;

class AggregateFactory {
}

const FILTERED_COMMAND_STREAM = new InjectionToken('FILTERED_COMMAND_STREAM');

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

class CommandBus extends HermesObservable {
    constructor(commandsStream) {
        super();
        this.commandsStream = commandsStream;
    }
    subscribe(arg) {
        return this.commandsStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
    }
    ofCommand(...commandTypes) {
        return this
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((command) => {
            return commandTypes.some((commandType) => command.ofMessageType(commandType));
        }));
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
CommandBus.decorators = [
    { type: Injectable }
];
CommandBus.ctorParameters = () => [
    { type: CommandStream, decorators: [{ type: Inject, args: [FILTERED_COMMAND_STREAM,] }] }
];

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
                next: (v) => {
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
     * First tries to event event in the history,
     * than method waits for future occurrences of the event.
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
DomainEventStore.decorators = [
    { type: Injectable }
];

class DomainEventStream extends HermesSubject {
    constructor(eventStore) {
        super();
        this.eventStore = eventStore;
    }
    next(event) {
        super.next(event);
        this.eventStore.next(event);
    }
}
DomainEventStream.decorators = [
    { type: Injectable }
];
DomainEventStream.ctorParameters = () => [
    { type: DomainEventStore }
];

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
        else if (args instanceof DomainEvent) {
            this.publishEvent(args);
        }
    }
    publishFromAggregate(aggregate) {
        aggregate.getEvents()
            .forEach((aggregateEvent) => {
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
DomainEventPublisher.decorators = [
    { type: Injectable }
];
DomainEventPublisher.ctorParameters = () => [
    { type: DomainEventStream }
];

class DomainEventBus extends HermesObservable {
    constructor(eventStream) {
        super();
        this.eventStream = eventStream;
    }
    subscribe(arg) {
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
DomainEventBus.decorators = [
    { type: Injectable }
];
DomainEventBus.ctorParameters = () => [
    { type: DomainEventStream }
];

const DomainEventType = MessageType;

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
Reactive.decorators = [
    { type: Injectable }
];
Reactive.ctorParameters = () => [];

class ReactiveService extends Reactive {
    constructor() {
        super();
    }
    ngOnDestroy() {
        this.hermesUnsubscribe();
    }
}
ReactiveService.decorators = [
    { type: Injectable }
];
ReactiveService.ctorParameters = () => [];

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

class KeyMap {
    constructor() {
        this.keys = new Map();
        this.values = new WeakMap();
    }
    get(key) {
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
    subscribe(arg) {
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
    subscribe(arg) {
        let subscriber;
        if (arg instanceof HermesSubscriber) {
            subscriber = arg;
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
    static of(value) {
        if (value !== undefined) {
            return new HermesBehaviorSubject(value);
        }
        else {
            return new HermesReplaySubject(1);
        }
    }
    constructor() {
        super();
    }
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
            return map.get(key);
        }), hermesFilter((value) => value.isPresent()), hermesMap((value) => value.getValueOrNullOrThrowError()), hermesDistinctUntilChanged(this.equals), this.hermesTakeUntil());
    }
    once(key) {
        return this.on(key)
            .pipe(hermesTake(1));
    }
    get(key) {
        this.tryToInitDefault(key);
        return this.archive.get(key);
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
    constructor(domainEventBus) {
        super();
        domainEventBus
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
    constructor(domainEventBus) {
        super();
        this.domainEventBus = domainEventBus;
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

function ValueObject(target) {
}
function DomainObject(target) {
}
function ReadModelObject(target) {
}

class DomainModule {
    constructor() {
    }
}
DomainModule.decorators = [
    { type: NgModule }
];
DomainModule.ctorParameters = () => [];

class ApiModule {
}
ApiModule.decorators = [
    { type: NgModule }
];

class FeatureModule {
}
FeatureModule.decorators = [
    { type: NgModule }
];

function hermesNever() {
    return new HermesObservable((observer) => {
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
    constructor(stateStore, aggregateStoreRegister) {
        super();
        this.stateStore = stateStore;
        this.aggregateStoreRegister = aggregateStoreRegister;
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
    constructor(inMemoryStore, aggregateStoreRegister) {
        super();
        this.inMemoryStore = inMemoryStore;
        this.aggregateStoreRegister = aggregateStoreRegister;
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

const COMMAND_LOGGER_ENABLED = 'GUI - COMMAND_LOGGER_ENABLED';
const EVENT_LOGGER_ENABLED = 'GUI - EVENT_LOGGER_ENABLED';

class ConsoleCommandLogger extends CommandLogger {
    constructor(commandBus) {
        super();
        this.enabled = false;
        this.unsubscribe$ = new HermesSubject();
        commandBus
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
ConsoleCommandLogger.decorators = [
    { type: Injectable }
];
ConsoleCommandLogger.ctorParameters = () => [
    { type: CommandBus }
];

class NoopCommandLogger extends CommandLogger {
    start() {
    }
    stop() {
    }
    print(command) {
    }
}

class ConsoleEventLogger extends DomainEventLogger {
    constructor(eventBus, aggregateStoreRegister) {
        super();
        this.aggregateStoreRegister = aggregateStoreRegister;
        this.enabled = false;
        this.unsubscribe$ = new HermesSubject();
        eventBus
            .pipe(hermesFilter(() => this.enabled), hermesTakeUntil(this.unsubscribe$))
            .subscribe((domainEvent) => {
            this.log(domainEvent);
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
    print(domainEvent) {
        const aggregateId = domainEvent.getAggregateId(), aggregates = this.aggregateStoreRegister.captureAggregatesSnapshot(aggregateId);
        // eslint-disable-next-line no-console
        console.log(domainEvent.toString(), domainEvent, aggregates);
    }
}
ConsoleEventLogger.decorators = [
    { type: Injectable }
];
ConsoleEventLogger.ctorParameters = () => [
    { type: DomainEventBus },
    { type: AggregateStoreRegister }
];

class NoopEventLogger extends DomainEventLogger {
    start() {
    }
    stop() {
    }
    print(event) {
    }
}

class HermesLoggersInitializer {
    constructor(platformId, commandLogger, eventLogger) {
        this.platformId = platformId;
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
    }
    start() {
        this.loggersStart();
    }
    stop() {
        this.loggersStop();
    }
    loggersStart() {
        if (isPlatformBrowser(this.platformId)) {
            this.commandLogger.start();
            this.eventLogger.start();
        }
    }
    loggersStop() {
        if (isPlatformBrowser(this.platformId)) {
            this.commandLogger.stop();
            this.eventLogger.stop();
        }
    }
}
HermesLoggersInitializer.decorators = [
    { type: Injectable }
];
HermesLoggersInitializer.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: CommandLogger },
    { type: DomainEventLogger }
];

function createAggregateCommandHandlerFactory(createAggregateCommandHandler, factoryArchive, aggregateRepositoryArchive, aggregateName, domainEventPublisher) {
    return new CreateAggregateCommandHandlerImpl(createAggregateCommandHandler, factoryArchive, aggregateRepositoryArchive, aggregateName, domainEventPublisher);
}
class CreateAggregateCommandHandlerImpl {
    constructor(createAggregateCommandHandler, aggregateFactoryArchive, aggregateRepositoryArchive, aggregateType, domainEventPublisher) {
        this.createAggregateCommandHandler = createAggregateCommandHandler;
        this.aggregateFactoryArchive = aggregateFactoryArchive;
        this.aggregateRepositoryArchive = aggregateRepositoryArchive;
        this.aggregateType = aggregateType;
        this.domainEventPublisher = domainEventPublisher;
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

const aggregateDefinitionToken = 'Hermes - aggregateDefinitionToken';

class HermesDomainModule {
    ngOnDestroy() {
    }
}
HermesDomainModule.decorators = [
    { type: NgModule, args: [{},] }
];

const COMMAND_HANDLERS = 'HERMES - COMMAND_HANDLERS_TOKEN';

function commandHandlerFactory(commandHandler, aggregateRepositoryArchive, aggregateName) {
    return new CommandHandlerImpl(commandHandler, aggregateRepositoryArchive, aggregateName);
}
class CommandHandlerImpl {
    constructor(commandHandler, aggregateRepositoryArchive, aggregateType) {
        this.commandHandler = commandHandler;
        this.aggregateRepositoryArchive = aggregateRepositoryArchive;
        this.aggregateType = aggregateType;
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

class DomainEventHandlerInitializer extends Reactive {
    init(eventHandlers, domainEventBus) {
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
                domainEventBus
                    .ofEventHandlers([handler])
                    .pipe(this.hermesTakeUntil())
                    .subscribe((event) => {
                    handler.handleEvent(event);
                });
            });
            // console.log('Registered event handlers:', filteredHandlers.length)
            // console.log('Registered event handlers:', filteredHandlers)
        }
    }
}

class CommandHandlerInitializer extends Reactive {
    register(commandHandlers, commandBus) {
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
                commandBus
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
    registerAggregateCommandHandlers(aggregateCommandHandlers, commandBus) {
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
                commandBus
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

class AggregateDefinitionInitializer {
    register(definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive) {
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
                const factory = injector.get(def.factory), repository = injector.get(def.repository);
                if (!aggregateFactoryArchive.has(def.key)) {
                    aggregateFactoryArchive.add(def.key, factory);
                }
                if (!aggregateRepositoryArchive.has(def.key)) {
                    aggregateRepositoryArchive.add(def.key, repository);
                }
            });
            // console.log('Registered aggregate definition:' + filteredDefinitions.length);
            // console.log('Registered aggregate definition:', filteredDefinitions);
        }
    }
}

const providers = [
    { provide: EVENT_LOGGER_ENABLED, useValue: true },
    { provide: COMMAND_LOGGER_ENABLED, useValue: true },
    { provide: CommandLogger, useFactory: commandLoggerFactory, deps: [COMMAND_LOGGER_ENABLED, ConsoleCommandLogger, NoopCommandLogger] },
    { provide: DomainEventLogger, useFactory: eventLoggerFactory, deps: [EVENT_LOGGER_ENABLED, ConsoleEventLogger, NoopEventLogger] },
    ConsoleCommandLogger,
    NoopCommandLogger,
    NoopEventLogger,
    ConsoleEventLogger,
    HermesLoggersInitializer,
    AggregateFactoryArchive,
    AggregateRepositoryArchive,
    RandomStringGenerator,
    { provide: FILTERED_COMMAND_STREAM, useExisting: CommandStream },
    CommandBus,
    CommandStream,
    CommandDispatcher,
    AggregateStoreRegister,
    DomainEventBus,
    DomainEventStream,
    DomainEventPublisher,
    DomainEventStore,
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
    constructor(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        super();
        this.hermesLoggersInitializer = hermesLoggersInitializer;
        this.hermesApi = hermesApi;
        this.aggregateDefinitionInitializer = new AggregateDefinitionInitializer();
        this.commandHandlerInitializer = new CommandHandlerInitializer();
        this.domainEventHandlerInitializer = new DomainEventHandlerInitializer();
        this.hermesLoggersInitializer.start();
        this.checkNullCommand(commandBus, commandHandlers, aggregateCommandHandlers);
        this.checkCommandHandlerIsCollection(commandHandlers);
        this.checkDomainEventHandlerIsCollection(eventHandlers);
        this.aggregateDefinitionInitializer.register(definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive);
        this.commandHandlerInitializer.register(commandHandlers, commandBus);
        this.commandHandlerInitializer.registerAggregateCommandHandlers(aggregateCommandHandlers, commandBus);
        this.domainEventHandlerInitializer.init(eventHandlers, domainEventBus);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.hermesLoggersInitializer.stop();
        this.commandHandlerInitializer.ngOnDestroy();
        this.domainEventHandlerInitializer.ngOnDestroy();
    }
    checkNullCommand(commandBus, commandHandlers, aggregateCommandHandlers) {
        commandBus
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
HermesBaseModule.decorators = [
    { type: Injectable }
];
HermesBaseModule.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional$1 }, { type: Inject, args: [DOMAIN_EVENT_HANDLERS,] }] },
    { type: Array, decorators: [{ type: Optional$1 }, { type: Inject, args: [CREATE_AGGREGATE_COMMAND_HANDLERS,] }] },
    { type: Array, decorators: [{ type: Optional$1 }, { type: Inject, args: [COMMAND_HANDLERS,] }] },
    { type: Array, decorators: [{ type: Optional$1 }, { type: Inject, args: [aggregateDefinitionToken,] }] },
    { type: Injector },
    { type: AggregateFactoryArchive },
    { type: AggregateRepositoryArchive },
    { type: CommandBus },
    { type: DomainEventBus },
    { type: HermesLoggersInitializer },
    { type: HermesApi }
];
class HermesModule extends HermesBaseModule {
    constructor(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        super(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi);
    }
    static defineAggregate(aggregateKey, factory, repository, createCommandHandler, commandHandlers = [], domainEventHandlers = []) {
        return {
            ngModule: HermesDomainModule,
            providers: [{
                    provide: aggregateDefinitionToken,
                    multi: true,
                    useValue: {
                        key: aggregateKey,
                        factory: factory,
                        repository: repository
                    }
                }, {
                    provide: aggregateKey,
                    useValue: aggregateKey
                },
                factory,
                repository,
                HermesModule.registerCreateCommandHandler(createCommandHandler, aggregateKey),
                commandHandlers,
                domainEventHandlers
            ]
        };
    }
    static withConfig(config = { loggers: false }) {
        return {
            ngModule: HermesModule,
            providers: providers
        };
    }
    static registerCommandHandler(commandHandlerType, aggregateName) {
        return [
            {
                provide: commandHandlerType,
                useClass: commandHandlerType
            }, {
                provide: COMMAND_HANDLERS,
                useFactory: commandHandlerFactory,
                multi: true,
                deps: [
                    commandHandlerType,
                    AggregateRepositoryArchive,
                    aggregateName
                ]
            }
        ];
    }
    static registerDomainEventHandler(domainEventHandlerType) {
        return [
            {
                provide: domainEventHandlerType,
                useClass: domainEventHandlerType
            }, {
                provide: DOMAIN_EVENT_HANDLERS,
                useFactory: domainEventHandlerFactory,
                multi: true,
                deps: [
                    domainEventHandlerType
                ]
            }
        ];
    }
    static registerMultiDomainEventHandler(domainEventHandlerType) {
        return [
            {
                provide: domainEventHandlerType,
                useClass: domainEventHandlerType
            }, {
                provide: DOMAIN_EVENT_HANDLERS,
                useFactory: multiDomainEventHandlerFactory,
                multi: true,
                deps: [
                    domainEventHandlerType
                ]
            }
        ];
    }
    static registerCreateCommandHandler(createCommandHandlerType, aggregateName) {
        return [
            {
                provide: createCommandHandlerType,
                useClass: createCommandHandlerType
            }, {
                provide: CREATE_AGGREGATE_COMMAND_HANDLERS,
                useFactory: createAggregateCommandHandlerFactory,
                multi: true,
                deps: [
                    createCommandHandlerType,
                    AggregateFactoryArchive,
                    AggregateRepositoryArchive,
                    aggregateName,
                    DomainEventPublisher
                ]
            }
        ];
    }
}
HermesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: providers
            },] }
];
HermesModule.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional$1 }, { type: Inject, args: [DOMAIN_EVENT_HANDLERS,] }] },
    { type: Array, decorators: [{ type: Optional$1 }, { type: Inject, args: [CREATE_AGGREGATE_COMMAND_HANDLERS,] }] },
    { type: Array, decorators: [{ type: Optional$1 }, { type: Inject, args: [COMMAND_HANDLERS,] }] },
    { type: Array, decorators: [{ type: Optional$1 }, { type: Inject, args: [aggregateDefinitionToken,] }] },
    { type: Injector },
    { type: AggregateFactoryArchive },
    { type: AggregateRepositoryArchive },
    { type: CommandBus },
    { type: DomainEventBus },
    { type: HermesLoggersInitializer },
    { type: HermesApi }
];

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
function testWarehouseDefaultValueOnStart(createStream, defaultValue, desc) {
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
function testWarehouseDefaultValueOnStartOnce(createStream, defaultValue, desc) {
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

class CreateAggregateCommand extends Command {
    constructor(aggregateId, type) {
        super(aggregateId, type);
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { AggregateArchive, AggregateEvent, AggregateEventType, AggregateFactory, AggregateId, AggregateRepository, AggregateRoot, AggregateStore, AggregateStoreRegister, ApiModule, Archive, COMMAND_LOGGER_ENABLED, Command, CommandBus, CommandDispatcher, CommandLogger, CommandStream, CommandType, CreateAggregateCommand, DomainEvent, DomainEventBus, DomainEventLogger, DomainEventPublisher, DomainEventStream, DomainEventType, DomainModule, DomainObject, EVENT_LOGGER_ENABLED, Entity, EntityId, EventDrivenRepository, EventRepository, FeatureModule, HermesApi, HermesArchiveSubject, HermesBehaviorSubject, HermesDomainModule, HermesId, HermesModule, HermesObservable, HermesReplaySubject, HermesSingle, HermesSubject, HermesSubscription, InMemoryAggregateStore, InMemoryReadModelStore, InMemoryStore, KeyMap, Optional, PersistAggregateStore, PersistAnemia, PersistReadModelStore, PersistStateStore, RandomStringGenerator, Reactive, ReactiveService, ReadModelEntity, ReadModelEntityId, ReadModelObject, ReadModelRoot, ReadModelRootId, ReadModelRootRepository, ReadModelStore, ValueObject, assertAggregateEvents, assertDomainEvents, disableHermesLoggers, enableHermesLoggers, fromRxJsObservable, hermesDistinctUntilChanged, hermesEmpty, hermesFilter, hermesFromEvent, hermesInterval, hermesMap, hermesNever, hermesOf, hermesSkip, hermesSwitchMap, hermesTake, hermesTakeUntil, hermesTap, hermesThrowError, hermesTimer, hermesToArray, provideEventHandlers, singleFromObservable, testEventRepositoryIsEmptyOnStart, testWarehouseDefaultValueOnStart, testWarehouseDefaultValueOnStartOnce, toRxJsObservable, commandLoggerFactory as ɵa, eventLoggerFactory as ɵb, CreateAggregateCommandHandlerImpl as ɵba, HermesBaseModule as ɵc, Logger as ɵd, Message as ɵe, FILTERED_COMMAND_STREAM as ɵf, DomainEventStore as ɵg, KeyArchive as ɵh, DOMAIN_EVENT_HANDLERS as ɵi, CREATE_AGGREGATE_COMMAND_HANDLERS as ɵj, COMMAND_HANDLERS as ɵk, aggregateDefinitionToken as ɵl, AggregateFactoryArchive as ɵn, AggregateRepositoryArchive as ɵo, HermesLoggersInitializer as ɵp, ConsoleCommandLogger as ɵq, NoopCommandLogger as ɵr, ConsoleEventLogger as ɵs, NoopEventLogger as ɵt, commandHandlerFactory as ɵu, CommandHandlerImpl as ɵv, domainEventHandlerFactory as ɵw, multiDomainEventHandlerFactory as ɵx, DomainEventHandlerImpl as ɵy, createAggregateCommandHandlerFactory as ɵz };
//# sourceMappingURL=generic-ui-hermes.js.map
