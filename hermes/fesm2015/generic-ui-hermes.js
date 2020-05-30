import { Injectable, Inject, PLATFORM_ID, InjectionToken, NgModule, Optional as Optional$1, Injector } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Subject, Observable, of, throwError, BehaviorSubject, ReplaySubject } from 'rxjs';
import { filter, first, map, takeUntil, take, distinctUntilChanged } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template M
 */
class Logger {
    /**
     * @param {?} domainName
     * @return {?}
     */
    setDomain(domainName) {
        this.domainName = domainName;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    log(message) {
        if (this.shouldPrint(message)) {
            this.print(message);
        }
    }
    /**
     * @protected
     * @param {?} message
     * @return {?}
     */
    shouldPrint(message) {
        if (!this.domainName) {
            return true;
        }
        /** @type {?} */
        const log = message.toString();
        return log.includes(this.domainName);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Logger.prototype.domainName;
    /**
     * @abstract
     * @return {?}
     */
    Logger.prototype.start = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Logger.prototype.stop = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} message
     * @return {?}
     */
    Logger.prototype.print = function (message) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CommandLogger extends Logger {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class DomainEventLogger extends Logger {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const hermesApi = 'hermesApi';
class HermesApi {
    /**
     * @param {?} platformId
     * @param {?} commandLogger
     * @param {?} eventLogger
     */
    constructor(platformId, commandLogger, eventLogger) {
        this.platformId = platformId;
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const api = (/**
             * @param {?} api
             * @return {?}
             */
            (api) => {
                return {
                    /**
                     * @param {?} enabled
                     * @return {?}
                     */
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
                    /**
                     * @param {?} domainName
                     * @return {?}
                     */
                    set domain(domainName) {
                        if (domainName) {
                            api.commandLogger.setDomain(domainName);
                            api.eventLogger.setDomain(domainName);
                        }
                    }
                };
            });
            window[hermesApi] = api(this);
            window[hermesApi].loggers = false;
        }
    }
}
HermesApi.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HermesApi.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: CommandLogger },
    { type: DomainEventLogger }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesApi.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    HermesApi.prototype.commandLogger;
    /**
     * @type {?}
     * @private
     */
    HermesApi.prototype.eventLogger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} domainName
 * @return {?}
 */
function enableHermesLoggers(domainName) {
    if (domainName) {
        window[hermesApi].domain = domainName;
    }
    window[hermesApi].loggers = true;
}
/**
 * @return {?}
 */
function disableHermesLoggers() {
    delete window[hermesApi].domain;
    window[hermesApi].loggers = false;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DOMAIN_EVENT_HANDLERS = 'HERMES - DOMAIN_EVENT_HANDLERS_TOKEN';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, E
 * @param {?} handlers
 * @return {?}
 */
function provideEventHandlers(handlers) {
    return (/** @type {?} */ (handlers.map((/**
     * @param {?} handler
     * @return {?}
     */
    (handler) => {
        return {
            provide: DOMAIN_EVENT_HANDLERS,
            useClass: handler,
            multi: true
        };
    }))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommandStream extends Subject {
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        super.next(value);
    }
}
CommandStream.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommandDispatcher {
    /**
     * @param {?} commandStream
     */
    constructor(commandStream) {
        this.commandStream = commandStream;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    dispatch(command) {
        this.commandStream.next(command);
    }
}
CommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CommandDispatcher.ctorParameters = () => [
    { type: CommandStream }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandDispatcher.prototype.commandStream;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RandomStringGenerator {
    /**
     * @return {?}
     */
    static generate() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + `${RandomStringGenerator.index++}`;
    }
}
RandomStringGenerator.index = 0;
RandomStringGenerator.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    RandomStringGenerator.index;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I
 */
class Message {
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} messageType
     * @param {?=} messageId
     */
    constructor(aggregateId, messageType, messageId = RandomStringGenerator.generate()) {
        this.aggregateId = aggregateId;
        this.messageType = messageType;
        this.messageId = messageId;
    }
    /**
     * @return {?}
     */
    getMessageType() {
        return this.messageType;
    }
    /**
     * @return {?}
     */
    getAggregateId() {
        return this.aggregateId;
    }
    /**
     * @return {?}
     */
    getMessageId() {
        return this.messageId;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.messageType;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    equalsByType(message) {
        return this.getMessageType() === message.getMessageType();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    equals(message) {
        return (this.getMessageType() === message.getMessageType()) && (this.messageId === message.messageId);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    ofMessageType(arg) {
        if (Array.isArray(arg)) {
            /** @type {?} */
            let found = arg.find((/**
             * @param {?} messageType
             * @return {?}
             */
            (messageType) => this.isMessageType(messageType)));
            return !!found;
        }
        else {
            return this.isMessageType(arg);
        }
    }
    /**
     * @private
     * @param {?} messageType
     * @return {?}
     */
    isMessageType(messageType) {
        return this.getMessageType() === messageType;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Message.prototype.aggregateId;
    /**
     * @type {?}
     * @protected
     */
    Message.prototype.messageType;
    /**
     * @type {?}
     * @private
     */
    Message.prototype.messageId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Command extends Message {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, A
 */
class AggregateFactory {
}
if (false) {
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    AggregateFactory.prototype.create = function (aggregateId) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FILTERED_COMMAND_STREAM = new InjectionToken('FILTERED_COMMAND_STREAM');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template C
 */
class CommandBus extends Observable {
    /**
     * @param {?=} commandsStream
     */
    constructor(commandsStream) {
        super();
        if (commandsStream) {
            this.source = commandsStream;
        }
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    lift(operator) {
        /** @type {?} */
        const observable = new CommandBus();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    /**
     * @template C2
     * @param {...?} commandTypes
     * @return {?}
     */
    ofCommand(...commandTypes) {
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            return commandTypes.some((/**
             * @param {?} commandType
             * @return {?}
             */
            (commandType) => command.ofMessageType(commandType)));
        })));
    }
    /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    ofCommandHandler(...handlers) {
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => handler.forCommand(command)));
        })));
    }
    /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    ofCreateAggregateHandler(...handlers) {
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => handler.forCommand(command)));
        })));
    }
    /**
     * @template C2
     * @param {?} handlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    ofNullHandler(handlers, aggregateCommandHandlers) {
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            if (!handlers) {
                return true;
            }
            return !handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => handler.forCommand(command))) &&
                !aggregateCommandHandlers.some((/**
                 * @param {?} handler
                 * @return {?}
                 */
                (handler) => handler.forCommand(command)));
        })));
    }
}
CommandBus.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CommandBus.ctorParameters = () => [
    { type: Subject, decorators: [{ type: Inject, args: [FILTERED_COMMAND_STREAM,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I
 */
class ReplayCommandDispatcher {
    /**
     * @protected
     * @param {?} dispatcher
     * @param {?} bus
     */
    constructor(dispatcher, bus) {
        this.dispatcher = dispatcher;
        this.bus = bus;
        this.unsubscribe$ = new Subject();
        this.subscriptions = [];
    }
    /**
     * @param {?} command
     * @return {?}
     */
    dispatch(command) {
        this.dispatcher.dispatch(command);
        return command.getMessageId();
    }
    /**
     * @param {?} command
     * @return {?}
     */
    dispatchAndWait(command) {
        /** @type {?} */
        const response$ = this.bus
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.fromCommand(command))), first(), map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.mapEventToResponse(event);
        })), takeUntil(this.unsubscribe$));
        /** @type {?} */
        const subscription = setTimeout((/**
         * @return {?}
         */
        () => {
            this.dispatcher.dispatch(command);
        }));
        this.subscriptions.push(subscription);
        return response$;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.subscriptions.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        (handle) => {
            clearTimeout(handle);
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReplayCommandDispatcher.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    ReplayCommandDispatcher.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    ReplayCommandDispatcher.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    ReplayCommandDispatcher.prototype.bus;
    /**
     * @abstract
     * @protected
     * @param {?} event
     * @return {?}
     */
    ReplayCommandDispatcher.prototype.mapEventToResponse = function (event) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class AggregateEvent {
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} type
     */
    constructor(aggregateId, type) {
        this.aggregateId = aggregateId;
        this.type = type;
    }
    /**
     * @return {?}
     */
    getAggregateId() {
        return this.aggregateId;
    }
    /**
     * @return {?}
     */
    getType() {
        return this.type;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    equals(event) {
        return this.equalsByType(event) &&
            this.getAggregateId().equals(event.getAggregateId());
    }
    /**
     * @param {?} event
     * @return {?}
     */
    equalsByType(event) {
        return this.getType() === event.getType();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateEvent.prototype.aggregateId;
    /**
     * @type {?}
     * @private
     */
    AggregateEvent.prototype.type;
    /**
     * @abstract
     * @return {?}
     */
    AggregateEvent.prototype.toDomainEvent = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, A
 */
class AggregateRepository {
}
if (false) {
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    AggregateRepository.prototype.getById = function (aggregateId) { };
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    AggregateRepository.prototype.save = function (aggregate) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, S
 */
class AggregateStore {
}
if (false) {
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    AggregateStore.prototype.save = function (aggregate) { };
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    AggregateStore.prototype.getById = function (aggregateId) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AggregateStoreRegister {
    constructor() {
        this.stores = [];
    }
    /**
     * @param {?} store
     * @return {?}
     */
    register(store) {
        this.stores.push(store);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    captureAggregatesSnapshot(aggregateId) {
        if (!aggregateId) {
            return {};
        }
        /** @type {?} */
        let aggregates = {};
        this.stores.forEach((/**
         * @param {?} store
         * @return {?}
         */
        (store) => {
            /** @type {?} */
            const aggregate = store.getById(aggregateId);
            if (aggregate) {
                /** @type {?} */
                let aggregateName = aggregate.constructor.name;
                aggregates[aggregateName] = aggregate;
            }
        }));
        return this.cloneAggregates(aggregates);
    }
    /**
     * @private
     * @param {?} aggregates
     * @return {?}
     */
    cloneAggregates(aggregates) {
        return JSON.parse(JSON.stringify(aggregates));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateStoreRegister.prototype.stores;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I
 */
class AggregateRoot {
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} type
     */
    constructor(aggregateId, type) {
        this.type = type;
        this.aggregateId = aggregateId;
        this.events = [];
    }
    /**
     * @return {?}
     */
    getId() {
        return this.aggregateId;
    }
    /**
     * @return {?}
     */
    getType() {
        return this.type;
    }
    /**
     * @return {?}
     */
    getEvents() {
        return (/** @type {?} */ (this.events));
    }
    /**
     * @param {?} args
     * @return {?}
     */
    addEvent(args) {
        if (Array.isArray(args)) {
            for (let event of args) {
                this.events.push(event);
            }
        }
        else {
            this.events.push((/** @type {?} */ (args)));
        }
    }
    /**
     * @return {?}
     */
    clearEvents() {
        this.events.length = 0;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateRoot.prototype.aggregateId;
    /**
     * @type {?}
     * @private
     */
    AggregateRoot.prototype.events;
    /**
     * @type {?}
     * @private
     */
    AggregateRoot.prototype.type;
    /**
     * @abstract
     * @return {?}
     */
    AggregateRoot.prototype.createEvent = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AggregateId {
    /**
     * @protected
     * @param {?} uid
     */
    constructor(uid) {
        this.uid = uid;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.uid;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.uid;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    equals(aggregateId) {
        return this.uid === aggregateId.getId();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateId.prototype.uid;
    /**
     * @abstract
     * @return {?}
     */
    AggregateId.prototype.toReadModelRootId = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const DomainEventStatus = {
    SUCCESS: 0,
    FAILURE: 1,
};
DomainEventStatus[DomainEventStatus.SUCCESS] = 'SUCCESS';
DomainEventStatus[DomainEventStatus.FAILURE] = 'FAILURE';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class StatusResponse {
    /**
     * @protected
     * @param {?} status
     * @param {?=} payload
     */
    constructor(status, payload) {
        this.status = status;
        this.payload = payload;
    }
    /**
     * @return {?}
     */
    getStatus() {
        return this.status;
    }
    /**
     * @return {?}
     */
    getPayload() {
        return this.payload;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StatusResponse.prototype.status;
    /**
     * @type {?}
     * @private
     */
    StatusResponse.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I
 */
class DomainEvent extends Message {
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} messageType
     * @param {?=} payload
     */
    constructor(aggregateId, messageType, payload) {
        super(aggregateId, messageType);
        this.payload = payload;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    isSameType(event) {
        return this.constructor.name === event.constructor.name;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    setRequestCommand(command) {
        this.requestCommandId = command.getMessageId();
    }
    /**
     * @param {?} command
     * @return {?}
     */
    fromCommand(command) {
        return command.getMessageId() === this.requestCommandId;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    setPayload(payload) {
        this.payload = payload;
    }
    /**
     * @return {?}
     */
    getPayload() {
        return this.payload;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEvent.prototype.requestCommandId;
    /**
     * @type {?}
     * @private
     */
    DomainEvent.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DomainEventStore {
    constructor() {
        this.domainEvents = [];
        this.domainEvents$ = new Subject();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    next(event) {
        this.domainEvents.push(event);
        this.domainEvents$.next(event);
    }
    /**
     * @param {?} eventType
     * @return {?}
     */
    findEventByType(eventType) {
        /** @type {?} */
        const events = this.getEvents();
        return events.reverse()
            .find((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event.constructor.name === eventType;
        }));
    }
    /**
     * First tries to event event in the history,
     * than method waits for future occurrences of the event.
     * @param {?} eventType
     * @return {?}
     */
    waitForEvent(eventType) {
        // find in a history
        /** @type {?} */
        const event = this.findEventByType(eventType);
        if (event) {
            return of(event);
        }
        // wait for future occurrence
        return this.waitForNextEventOccurrence(eventType);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    waitForNextEventOccurrence(arg) {
        /** @type {?} */
        let eventType;
        if (arg instanceof DomainEvent) {
            eventType = arg.constructor.name;
        }
        else if (typeof arg === 'string') {
            eventType = arg;
        }
        else {
            return throwError(new Error('Unsupported argument type.'));
        }
        return this.domainEvents$
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.constructor.name === eventType)), take(1));
    }
    /**
     * @private
     * @return {?}
     */
    getEvents() {
        return this.domainEvents;
    }
}
DomainEventStore.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventStore.prototype.domainEvents;
    /**
     * @type {?}
     * @private
     */
    DomainEventStore.prototype.domainEvents$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DomainEventStream extends Subject {
    /**
     * @param {?} eventStore
     */
    constructor(eventStore) {
        super();
        this.eventStore = eventStore;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    next(event) {
        super.next(event);
        this.eventStore.next(event);
    }
}
DomainEventStream.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DomainEventStream.ctorParameters = () => [
    { type: DomainEventStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventStream.prototype.eventStore;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DomainEventPublisher {
    /**
     * @param {?} eventStream
     */
    constructor(eventStream) {
        this.eventStream = eventStream;
    }
    /**
     * @param {?} args
     * @return {?}
     */
    publish(args) {
        if (Array.isArray(args)) {
            for (let arg of args) {
                this.publishEvent(arg);
            }
        }
        else if (args instanceof DomainEvent) {
            this.publishEvent(args);
        }
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    publishFromAggregate(aggregate) {
        aggregate.getEvents()
            .forEach((/**
         * @param {?} aggregateEvent
         * @return {?}
         */
        (aggregateEvent) => {
            this.publish(aggregateEvent.toDomainEvent());
        }));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    publishEvent(event) {
        if (!event) {
            console.error(`${event} is not defined`);
        }
        if (!(event instanceof DomainEvent)) {
            // throw new Error(`${event} is not a DomainEvent`);
            console.error(`${event} is not a DomainEvent`);
        }
        this.eventStream.next(event);
    }
}
DomainEventPublisher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DomainEventPublisher.ctorParameters = () => [
    { type: DomainEventStream }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventPublisher.prototype.eventStream;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template E
 */
class DomainEventBus extends Observable {
    /**
     * @param {?=} eventStream
     */
    constructor(eventStream) {
        super();
        if (eventStream) {
            this.source = eventStream;
        }
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    lift(operator) {
        /** @type {?} */
        const observable = new DomainEventBus();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    /**
     * @template E2
     * @param {...?} events
     * @return {?}
     */
    ofEvent(...events) {
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} domainEvent
         * @return {?}
         */
        (domainEvent) => {
            return events.some((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                /** @type {?} */
                const eventInstance = this.createEventInstance(event);
                return eventInstance.equalsByType(domainEvent);
            }));
        })));
    }
    /**
     * @template E2
     * @param {...?} handlers
     * @return {?}
     */
    ofEventHandler(...handlers) {
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => handler.forEvents([event])));
        })));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    createEventInstance(event) {
        /** @type {?} */
        const args = [];
        /** @type {?} */
        const argumentLength = event.constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((/** @type {?} */ (event)))(...args));
    }
}
DomainEventBus.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DomainEventBus.ctorParameters = () => [
    { type: DomainEventStream }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DomainEventPayload {
    /**
     * @param {?} value
     */
    constructor(value) {
        this.value = value;
    }
    /**
     * @return {?}
     */
    getValue() {
        return this.value;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventPayload.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class ReadModelEntity {
    /**
     * @protected
     * @param {?} gui
     */
    constructor(gui) {
        this.entityId = gui;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.entityId;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReadModelEntity.prototype.entityId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReadModelEntityId {
    /**
     * @protected
     * @param {?} uid
     */
    constructor(uid) {
        this.uid = uid;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.uid;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.uid;
    }
    /**
     * @param {?} entityId
     * @return {?}
     */
    equals(entityId) {
        return this.uid === entityId.getId();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReadModelEntityId.prototype.uid;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class ReadModelRoot {
    /**
     * @protected
     * @param {?} gui
     */
    constructor(gui) {
        this.rootId = gui;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.rootId;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReadModelRoot.prototype.rootId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ReadModelRootId {
    /**
     * @protected
     * @param {?} uid
     */
    constructor(uid) {
        this.uid = uid;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.uid;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.uid;
    }
    /**
     * @param {?} entityId
     * @return {?}
     */
    equals(entityId) {
        return this.uid === entityId.getId();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReadModelRootId.prototype.uid;
    /**
     * @abstract
     * @return {?}
     */
    ReadModelRootId.prototype.toAggregateId = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class Reactive {
    /**
     * @protected
     */
    constructor() {
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe();
    }
    /**
     * @protected
     * @return {?}
     */
    unsubscribe() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @protected
     * @return {?}
     */
    takeUntil() {
        return takeUntil(this.unsubscribe$);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Reactive.prototype.unsubscribe$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I
 */
class ReadModelRootRepository extends Reactive {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super();
        domainEventBus
            .ofEvent(...this.forEvents())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            try {
                this.subscribe(event);
            }
            catch (e) {
                console.error(e);
            }
        }));
    }
}
if (false) {
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    ReadModelRootRepository.prototype.forEvents = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} event
     * @return {?}
     */
    ReadModelRootRepository.prototype.subscribe = function (event) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, R
 */
class ReadModelStore {
}
if (false) {
    /**
     * @abstract
     * @param {?} readModelRootId
     * @return {?}
     */
    ReadModelStore.prototype.getById = function (readModelRootId) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template R, I
 */
class EventRepository {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} eventType
     * @return {?}
     */
    onEvent(aggregateId, eventType) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (eventType)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === aggregateId.toString())));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventRepository.prototype.domainEventBus;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class Entity {
    /**
     * @protected
     * @param {?} id
     */
    constructor(id) {
        this.entityId = id;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.entityId;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    equals(entity) {
        return this.entityId.equals(entity.getId());
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Entity.prototype.entityId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class EntityId {
    /**
     * @protected
     * @param {?} uid
     */
    constructor(uid) {
        this.uid = uid;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.uid;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.uid;
    }
    /**
     * @param {?} entityId
     * @return {?}
     */
    equals(entityId) {
        return this.uid === entityId.getId();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    EntityId.prototype.uid;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @return {?}
 */
function ValueObject(target) {
}
/**
 * @param {?} target
 * @return {?}
 */
function DomainObject(target) {
}
/**
 * @param {?} target
 * @return {?}
 */
function ReadModelObject(target) {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class DomainModule {
    /**
     * @protected
     */
    constructor() {
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ApiModule {
    /**
     * @protected
     */
    constructor() {
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class FeatureModule {
    /**
     * @protected
     */
    constructor() {
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ReactiveService extends Reactive {
    /**
     * @protected
     */
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DefaultAggregateValues() { }
if (false) {
    /** @type {?} */
    DefaultAggregateValues.prototype.aggregateId;
    /** @type {?} */
    DefaultAggregateValues.prototype.value;
}
/**
 * @abstract
 * @template T
 */
class AggregateArchive extends ReactiveService {
    /**
     * @protected
     * @param {?=} defaultValue
     */
    constructor(defaultValue) {
        super();
        this.archive = new Map();
        this.initArchive(defaultValue);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    on(aggregateId) {
        return this.archive$
            .asObservable()
            .pipe(this.takeUntil(), map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(aggregateId.toString());
        })), distinctUntilChanged());
    }
    /**
     * @param {?} aggregateId
     * @param {?} value
     * @return {?}
     */
    next(aggregateId, value) {
        this.archive.set(aggregateId.toString(), value);
        this.archive$.next(this.archive);
    }
    /**
     * @private
     * @param {?=} defaultValue
     * @return {?}
     */
    initArchive(defaultValue) {
        if (defaultValue) {
            this.archive.set(defaultValue.aggregateId.toString(), defaultValue.value);
            this.archive$ = new BehaviorSubject(this.archive);
        }
        else {
            this.archive$ = new ReplaySubject(1);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateArchive.prototype.archive;
    /**
     * @type {?}
     * @private
     */
    AggregateArchive.prototype.archive$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class Archive {
    /**
     * @protected
     * @param {?=} value
     */
    constructor(value) {
        if (value) {
            this.archive$ = new BehaviorSubject(value);
        }
        else {
            this.archive$ = new ReplaySubject(1);
        }
    }
    /**
     * @return {?}
     */
    onValue() {
        return this.archive$.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        this.archive$.next(value);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Archive.prototype.archive$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class Optional {
    /**
     * @private
     * @param {?} value
     */
    constructor(value) {
        if (!Optional.isEmpty(value) && Optional.isEmpty(value)) {
            return Optional.empty();
        }
        this.value = value;
        return this;
    }
    /**
     * @return {?}
     */
    static empty() {
        return new Optional(null);
    }
    /**
     * @template U
     * @param {?} value
     * @return {?}
     */
    static of(value) {
        return new Optional(value);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    static isEmpty(value) {
        return typeof value === 'undefined' || value === null;
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return Optional.isEmpty(this.value);
    }
    /**
     * @return {?}
     */
    isPresent() {
        return !this.isEmpty();
    }
    /**
     * @param {?} filterer
     * @return {?}
     */
    filter(filterer) {
        if (this.isPresent() && filterer(this.value)) {
            return this;
        }
        return Optional.empty();
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    forEach(callback) {
        if (this.isPresent()) {
            callback(this.value);
        }
    }
    /**
     * @template U
     * @param {?} mapper
     * @return {?}
     */
    map(mapper) {
        if (this.isPresent()) {
            return new Optional(mapper(this.value));
        }
        return Optional.empty();
    }
    /**
     * @deprecated
     * @return {?}
     */
    getValueOrNullOrThrowError() {
        return this.value;
    }
    /**
     * @return {?}
     */
    getOrThrow() {
        if (this.isEmpty()) {
            throw new Error('Called getOrThrow on an empty Optional');
        }
        return this.value;
    }
    /**
     * @template U
     * @param {?} other
     * @return {?}
     */
    getOrElse(other) {
        if (this.isPresent()) {
            return this.value;
        }
        return other();
    }
    /**
     * @param {?} method
     * @return {?}
     */
    ifPresent(method) {
        if (this.isPresent()) {
            method(this.value);
        }
    }
    /**
     * @param {?} method
     * @return {?}
     */
    ifEmpty(method) {
        if (this.isEmpty()) {
            method();
        }
    }
    /**
     * @template U
     * @param {?} other
     * @return {?}
     */
    orElse(other) {
        if (this.isPresent()) {
            return this;
        }
        return other();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Optional.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I
 */
class PersistAnemia {
    /**
     * @protected
     * @param {?} uid
     */
    constructor(uid) {
        this.readModelRootId = uid;
    }
    /**
     * @return {?}
     */
    getReadModelRootId() {
        return this.readModelRootId;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.getReadModelRootId().toString();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersistAnemia.prototype.readModelRootId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, A
 */
class PersistStateStore {
    constructor() {
        this.state = new Map();
    }
    /**
     * @param {?} anemia
     * @return {?}
     */
    set(anemia) {
        this.state.set(anemia.getId(), anemia);
    }
    /**
     * @param {?} anemias
     * @return {?}
     */
    setMany(anemias) {
        anemias.forEach((/**
         * @param {?} anemia
         * @return {?}
         */
        (anemia) => {
            this.set(anemia);
        }));
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    get(aggregateId) {
        return Optional.of(this.state.get(aggregateId.toString()));
    }
    /**
     * @return {?}
     */
    getAll() {
        return Array.from(this.state.values());
    }
    /**
     * @return {?}
     */
    clear() {
        this.state.clear();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersistStateStore.prototype.state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, R, A
 */
class PersistReadModelStore extends ReadModelStore {
    /**
     * @protected
     * @param {?} stateStore
     */
    constructor(stateStore) {
        super();
        this.stateStore = stateStore;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        return this.getValue(aggregateId);
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.getAllValues();
    }
    /**
     * @private
     * @return {?}
     */
    getAllValues() {
        return this.stateStore
            .getAll()
            .map((/**
         * @param {?} anemia
         * @return {?}
         */
        (anemia) => this.toReadModel(anemia)));
    }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    getValue(aggregateId) {
        /** @type {?} */
        const optAnemia = this.stateStore.get(aggregateId);
        return optAnemia.map(this.toReadModel);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersistReadModelStore.prototype.stateStore;
    /**
     * @abstract
     * @param {?} anemia
     * @return {?}
     */
    PersistReadModelStore.prototype.toReadModel = function (anemia) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, D, A
 */
class PersistAggregateStore extends AggregateStore {
    /**
     * @protected
     * @param {?} stateStore
     * @param {?} aggregateStoreRegister
     */
    constructor(stateStore, aggregateStoreRegister) {
        super();
        this.stateStore = stateStore;
        this.aggregateStoreRegister = aggregateStoreRegister;
        this.aggregateStoreRegister.register(this);
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    save(aggregate) {
        this.saveValue(aggregate);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        return this.getValue(aggregateId);
    }
    /**
     * @private
     * @param {?} aggregate
     * @return {?}
     */
    saveValue(aggregate) {
        /** @type {?} */
        const anemia = this.toAnemia(aggregate);
        this.stateStore.set(anemia);
    }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    getValue(aggregateId) {
        /** @type {?} */
        const optAnemia = this.stateStore.get(aggregateId);
        return optAnemia.map(this.fromAnemia);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersistAggregateStore.prototype.stateStore;
    /**
     * @type {?}
     * @private
     */
    PersistAggregateStore.prototype.aggregateStoreRegister;
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    PersistAggregateStore.prototype.toAnemia = function (aggregate) { };
    /**
     * @abstract
     * @param {?} anemia
     * @return {?}
     */
    PersistAggregateStore.prototype.fromAnemia = function (anemia) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, T
 */
class InMemoryAggregateStore extends AggregateStore {
    /**
     * @protected
     * @param {?} inMemoryStore
     * @param {?} aggregateStoreRegister
     */
    constructor(inMemoryStore, aggregateStoreRegister) {
        super();
        this.inMemoryStore = inMemoryStore;
        this.aggregateStoreRegister = aggregateStoreRegister;
        this.aggregateStoreRegister.register(this);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    save(arg) {
        if (Array.isArray(arg)) {
            arg.forEach((/**
             * @param {?} aggregate
             * @return {?}
             */
            (aggregate) => {
                this.inMemoryStore.set(aggregate);
            }));
        }
        else {
            /** @type {?} */
            const aggregate = arg;
            this.inMemoryStore.set(aggregate);
        }
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        /** @type {?} */
        const optAggregate = this.inMemoryStore.get(aggregateId);
        optAggregate.ifPresent((/**
         * @param {?} a
         * @return {?}
         */
        (a) => a.clearEvents()));
        return optAggregate;
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.inMemoryStore.getAll();
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    remove(aggregateId) {
        this.inMemoryStore.delete(aggregateId);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryAggregateStore.prototype.inMemoryStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryAggregateStore.prototype.aggregateStoreRegister;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, R, B, A
 */
class InMemoryReadModelStore extends ReadModelStore {
    /**
     * @protected
     * @param {?} inMemoryStore
     */
    constructor(inMemoryStore) {
        super();
        this.inMemoryStore = inMemoryStore;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        // const aggregateId = readModelRootId.toAggregateId() as B; // TODO remove as
        return this.getValue(aggregateId);
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.inMemoryStore
            .getAll()
            .map((/**
         * @param {?} aggregate
         * @return {?}
         */
        (aggregate) => this.toReadModel(aggregate)));
    }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    getValue(aggregateId) {
        /** @type {?} */
        const optAggregate = this.inMemoryStore.get(aggregateId);
        return optAggregate.map(this.toReadModel.bind(this));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryReadModelStore.prototype.inMemoryStore;
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryReadModelStore.prototype.toReadModel = function (aggregate) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, S
 */
class InMemoryStore {
    constructor() {
        this.state = new Map();
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    set(aggregate) {
        this.state.set(aggregate.getId().toString(), aggregate);
    }
    /**
     * @param {?} aggregates
     * @return {?}
     */
    setMany(aggregates) {
        aggregates.forEach((/**
         * @param {?} aggregate
         * @return {?}
         */
        (aggregate) => {
            this.set(aggregate);
        }));
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    get(aggregateId) {
        return Optional.of(this.state.get(aggregateId.toString()));
    }
    /**
     * @return {?}
     */
    getAll() {
        return Array.from(this.state.values());
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    has(aggregateId) {
        return this.state.has(aggregateId.toString());
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    delete(aggregateId) {
        this.state.delete(aggregateId.toString());
    }
    /**
     * @return {?}
     */
    clear() {
        this.state.clear();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStore.prototype.state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMMAND_LOGGER_ENABLED = 'GUI - COMMAND_LOGGER_ENABLED';
/** @type {?} */
const EVENT_LOGGER_ENABLED = 'GUI - EVENT_LOGGER_ENABLED';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConsoleCommandLogger extends CommandLogger {
    /**
     * @param {?} commandBus
     */
    constructor(commandBus) {
        super();
        this.enabled = false;
        this.unsubscribe$ = new Subject();
        commandBus
            .pipe(filter((/**
         * @return {?}
         */
        () => this.enabled)), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            this.log(command);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @return {?}
     */
    start() {
        this.enabled = true;
    }
    /**
     * @return {?}
     */
    stop() {
        this.enabled = false;
    }
    /**
     * @protected
     * @param {?} command
     * @return {?}
     */
    print(command) {
        console.log(command.toString(), command);
    }
}
ConsoleCommandLogger.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConsoleCommandLogger.ctorParameters = () => [
    { type: CommandBus }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConsoleCommandLogger.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    ConsoleCommandLogger.prototype.unsubscribe$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NoopCommandLogger extends CommandLogger {
    /**
     * @return {?}
     */
    start() {
    }
    /**
     * @return {?}
     */
    stop() {
    }
    /**
     * @protected
     * @param {?} command
     * @return {?}
     */
    print(command) {
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConsoleEventLogger extends DomainEventLogger {
    /**
     * @param {?} eventBus
     * @param {?} aggregateStoreRegister
     */
    constructor(eventBus, aggregateStoreRegister) {
        super();
        this.aggregateStoreRegister = aggregateStoreRegister;
        this.enabled = false;
        this.unsubscribe$ = new Subject();
        eventBus
            .pipe(filter((/**
         * @return {?}
         */
        () => this.enabled)), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} domainEvent
         * @return {?}
         */
        (domainEvent) => {
            this.log(domainEvent);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @return {?}
     */
    start() {
        this.enabled = true;
    }
    /**
     * @return {?}
     */
    stop() {
        this.enabled = false;
    }
    /**
     * @protected
     * @param {?} domainEvent
     * @return {?}
     */
    print(domainEvent) {
        /** @type {?} */
        const aggregateId = domainEvent.getAggregateId();
        /** @type {?} */
        const aggregates = this.aggregateStoreRegister.captureAggregatesSnapshot(aggregateId);
        console.log(domainEvent.toString(), domainEvent, aggregates);
    }
}
ConsoleEventLogger.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConsoleEventLogger.ctorParameters = () => [
    { type: DomainEventBus },
    { type: AggregateStoreRegister }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConsoleEventLogger.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    ConsoleEventLogger.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    ConsoleEventLogger.prototype.aggregateStoreRegister;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NoopEventLogger extends DomainEventLogger {
    /**
     * @return {?}
     */
    start() {
    }
    /**
     * @return {?}
     */
    stop() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    print(event) {
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HermesLoggersInitializer {
    /**
     * @param {?} platformId
     * @param {?} commandLogger
     * @param {?} eventLogger
     */
    constructor(platformId, commandLogger, eventLogger) {
        this.platformId = platformId;
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
    }
    /**
     * @return {?}
     */
    start() {
        this.loggersStart();
    }
    /**
     * @return {?}
     */
    stop() {
        this.loggersStop();
    }
    /**
     * @private
     * @return {?}
     */
    loggersStart() {
        if (isPlatformBrowser(this.platformId)) {
            this.commandLogger.start();
            this.eventLogger.start();
        }
    }
    /**
     * @private
     * @return {?}
     */
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
/** @nocollapse */
HermesLoggersInitializer.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: CommandLogger },
    { type: DomainEventLogger }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesLoggersInitializer.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    HermesLoggersInitializer.prototype.commandLogger;
    /**
     * @type {?}
     * @private
     */
    HermesLoggersInitializer.prototype.eventLogger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, A, C
 * @param {?} createAggregateCommandHandler
 * @param {?} factoryArchive
 * @param {?} aggregateRepositoryArchive
 * @param {?} aggregateName
 * @param {?} domainEventPublisher
 * @return {?}
 */
function createAggregateCommandHandlerFactory(createAggregateCommandHandler, factoryArchive, aggregateRepositoryArchive, aggregateName, domainEventPublisher) {
    return new CreateAggregateCommandHandlerImpl(createAggregateCommandHandler, factoryArchive, aggregateRepositoryArchive, aggregateName, domainEventPublisher);
}
/**
 * @template I, A, C
 */
class CreateAggregateCommandHandlerImpl {
    /**
     * @param {?} createAggregateCommandHandler
     * @param {?} aggregateFactoryArchive
     * @param {?} aggregateRepositoryArchive
     * @param {?} aggregateType
     * @param {?} domainEventPublisher
     */
    constructor(createAggregateCommandHandler, aggregateFactoryArchive, aggregateRepositoryArchive, aggregateType, domainEventPublisher) {
        this.createAggregateCommandHandler = createAggregateCommandHandler;
        this.aggregateFactoryArchive = aggregateFactoryArchive;
        this.aggregateRepositoryArchive = aggregateRepositoryArchive;
        this.aggregateType = aggregateType;
        this.domainEventPublisher = domainEventPublisher;
        this.commandType = this.createCommandInstance().getMessageType();
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handleCommand(command) {
        /** @type {?} */
        const aggregateId = (/** @type {?} */ (command.getAggregateId()));
        /** @type {?} */
        const optFactory = this.aggregateFactoryArchive.get(this.aggregateType);
        optFactory.ifPresent((/**
         * @param {?} factory
         * @return {?}
         */
        (factory) => {
            /** @type {?} */
            const aggregate = factory.create(aggregateId);
            /** @type {?} */
            const type = aggregate.getType();
            /** @type {?} */
            const createCommandConstructor = aggregate.createEvent();
            /** @type {?} */
            const createCommand = new createCommandConstructor(aggregateId, type);
            aggregate.addEvent(createCommand);
            /** @type {?} */
            const optRepository = this.aggregateRepositoryArchive.get(this.aggregateType);
            optRepository.ifPresent((/**
             * @param {?} repo
             * @return {?}
             */
            (repo) => {
                repo.save(aggregate);
                this.domainEventPublisher.publishFromAggregate(aggregate);
            }));
        }));
    }
    /**
     * @param {?} command
     * @return {?}
     */
    forCommand(command) {
        return this.commandType === command.getMessageType();
    }
    /**
     * @private
     * @return {?}
     */
    createCommandInstance() {
        /** @type {?} */
        const args = [];
        /** @type {?} */
        const argumentLength = this.createAggregateCommandHandler.forCommand().constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((/** @type {?} */ (this.createAggregateCommandHandler.forCommand())))(...args));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CreateAggregateCommandHandlerImpl.prototype.commandType;
    /**
     * @type {?}
     * @private
     */
    CreateAggregateCommandHandlerImpl.prototype.createAggregateCommandHandler;
    /**
     * @type {?}
     * @private
     */
    CreateAggregateCommandHandlerImpl.prototype.aggregateFactoryArchive;
    /**
     * @type {?}
     * @private
     */
    CreateAggregateCommandHandlerImpl.prototype.aggregateRepositoryArchive;
    /**
     * @type {?}
     * @private
     */
    CreateAggregateCommandHandlerImpl.prototype.aggregateType;
    /**
     * @type {?}
     * @private
     */
    CreateAggregateCommandHandlerImpl.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * ngc for grid package for some reasons doesn't allow to use injection token
 * @type {?}
 */
const CREATE_AGGREGATE_COMMAND_HANDLERS = 'HERMES - CREATE_AGGREGATE_COMMAND_HANDLERS';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, A
 */
class AggregateFactoryArchive {
    constructor() {
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @param {?} factory
     * @return {?}
     */
    add(key, factory) {
        this.map.set(key, factory);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return Optional.of(this.map.get(key));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateFactoryArchive.prototype.map;
}
/**
 * @template I, A
 */
class AggregateRepositoryArchive {
    constructor() {
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @param {?} repository
     * @return {?}
     */
    add(key, repository) {
        this.map.set(key, repository);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return Optional.of(this.map.get(key));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateRepositoryArchive.prototype.map;
}
/**
 * @record
 * @template I, A, C
 */
function AggregateConfig() { }
if (false) {
    /** @type {?} */
    AggregateConfig.prototype.repository;
    /** @type {?} */
    AggregateConfig.prototype.factory;
    /** @type {?} */
    AggregateConfig.prototype.key;
    /** @type {?} */
    AggregateConfig.prototype.createHandler;
    /** @type {?} */
    AggregateConfig.prototype.commandHandlers;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const aggregateDefinitionToken = 'Hermes - aggregateDefinitionToken';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HermesDomainModule {
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
HermesDomainModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMMAND_HANDLERS = 'HERMES - COMMAND_HANDLERS_TOKEN';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, A, C
 * @param {?} commandHandler
 * @param {?} aggregateRepositoryArchive
 * @param {?} aggregateName
 * @return {?}
 */
function commandHandlerFactory(commandHandler, aggregateRepositoryArchive, aggregateName) {
    return new CommandHandlerImpl(commandHandler, aggregateRepositoryArchive, aggregateName);
}
/**
 * @template I, A, C
 */
class CommandHandlerImpl {
    /**
     * @param {?} commandHandler
     * @param {?} aggregateRepositoryArchive
     * @param {?} aggregateType
     */
    constructor(commandHandler, aggregateRepositoryArchive, aggregateType) {
        this.commandHandler = commandHandler;
        this.aggregateRepositoryArchive = aggregateRepositoryArchive;
        this.aggregateType = aggregateType;
        this.commandType = this.createCommandInstance().getMessageType();
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.commandHandler.publishDomainEvents(aggregate, command);
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handleCommand(command) {
        /** @type {?} */
        const aggregateId = (/** @type {?} */ (command.getAggregateId()));
        /** @type {?} */
        const optRepository = this.aggregateRepositoryArchive.get(this.aggregateType);
        optRepository.ifPresent((/**
         * @param {?} repo
         * @return {?}
         */
        (repo) => {
            /** @type {?} */
            const optAggregate = repo.getById(aggregateId);
            optAggregate.ifPresent((/**
             * @param {?} aggregate
             * @return {?}
             */
            (aggregate) => {
                this.commandHandler.handleAggregate(aggregate, command);
                this.publishDomainEvents(aggregate, command);
            }));
        }));
    }
    /**
     * @param {?} command
     * @return {?}
     */
    forCommand(command) {
        return this.commandType === command.getMessageType();
    }
    /**
     * @private
     * @return {?}
     */
    createCommandInstance() {
        /** @type {?} */
        const args = [];
        /** @type {?} */
        const argumentLength = this.commandHandler.forCommand().constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((/** @type {?} */ (this.commandHandler.forCommand())))(...args));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandHandlerImpl.prototype.commandType;
    /**
     * @type {?}
     * @private
     */
    CommandHandlerImpl.prototype.commandHandler;
    /**
     * @type {?}
     * @private
     */
    CommandHandlerImpl.prototype.aggregateRepositoryArchive;
    /**
     * @type {?}
     * @private
     */
    CommandHandlerImpl.prototype.aggregateType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, E
 * @param {?} domainEventHandler
 * @return {?}
 */
function domainEventHandlerFactory(domainEventHandler) {
    return new DomainEventHandlerImpl(domainEventHandler, [domainEventHandler.forEvent()]);
}
/**
 * @template I, E
 * @param {?} domainEventHandler
 * @return {?}
 */
function multiDomainEventHandlerFactory(domainEventHandler) {
    return new DomainEventHandlerImpl(domainEventHandler, domainEventHandler.forEvents());
}
/**
 * @template I, E
 */
class DomainEventHandlerImpl {
    /**
     * @param {?} domainEventHandler
     * @param {?} events
     */
    constructor(domainEventHandler, events) {
        this.domainEventHandler = domainEventHandler;
        this.events = events;
        this.eventTypes = this.createDomainEventTypes();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleEvent(event) {
        this.domainEventHandler.handle(event);
    }
    /**
     * @param {?} events
     * @return {?}
     */
    forEvents(events) {
        return events.some((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.eventTypes.some((/**
             * @param {?} type
             * @return {?}
             */
            (type) => {
                return type === event.getMessageType();
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    createDomainEventTypes() {
        /** @type {?} */
        let types = [];
        for (let event of this.events) {
            /** @type {?} */
            let instance = this.createDomainEventInstance(event);
            types.push(instance.getMessageType());
        }
        return types;
    }
    /**
     * @private
     * @param {?} eventType
     * @return {?}
     */
    createDomainEventInstance(eventType) {
        /** @type {?} */
        const args = [];
        /** @type {?} */
        const argumentLength = eventType.constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((/** @type {?} */ (eventType)))(...args));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventHandlerImpl.prototype.eventTypes;
    /**
     * @type {?}
     * @private
     */
    DomainEventHandlerImpl.prototype.domainEventHandler;
    /**
     * @type {?}
     * @private
     */
    DomainEventHandlerImpl.prototype.events;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const hermesProviders = [
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
/** @type {?} */
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
    ...hermesProviders
];
/**
 * @param {?} enabled
 * @param {?} consoleCommandLogger
 * @param {?} noopCommandLogger
 * @return {?}
 */
function commandLoggerFactory(enabled, consoleCommandLogger, noopCommandLogger) {
    if (enabled) {
        return consoleCommandLogger;
    }
    else {
        return noopCommandLogger;
    }
}
/**
 * @param {?} enabled
 * @param {?} consoleEventLogger
 * @param {?} noopEventLogger
 * @return {?}
 */
function eventLoggerFactory(enabled, consoleEventLogger, noopEventLogger) {
    if (enabled) {
        return consoleEventLogger;
    }
    else {
        return noopEventLogger;
    }
}
/**
 * @template I, A, C, E
 */
class HermesBaseModule extends Reactive {
    /**
     * @param {?} eventHandlers
     * @param {?} aggregateCommandHandlers
     * @param {?} commandHandlers
     * @param {?} definedAggregate
     * @param {?} injector
     * @param {?} aggregateFactoryArchive
     * @param {?} aggregateRepositoryArchive
     * @param {?} commandBus
     * @param {?} domainEventBus
     * @param {?} hermesLoggersInitializer
     * @param {?} hermesApi
     */
    constructor(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        super();
        this.hermesLoggersInitializer = hermesLoggersInitializer;
        this.hermesApi = hermesApi;
        this.hermesLoggersInitializer.start();
        this.checkNullCommand(commandBus, commandHandlers, aggregateCommandHandlers);
        this.checkCommandHandlerIsCollection(commandHandlers);
        this.checkDomainEventHandlerIsCollection(eventHandlers);
        if (definedAggregate) {
            definedAggregate.forEach((/**
             * @param {?} def
             * @return {?}
             */
            (def) => {
                /** @type {?} */
                const factory = injector.get(def.factory);
                /** @type {?} */
                const repository = injector.get(def.repository);
                aggregateFactoryArchive.add(def.key, factory);
                aggregateRepositoryArchive.add(def.key, repository);
            }));
        }
        if (aggregateCommandHandlers) {
            aggregateCommandHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                commandBus
                    .ofCreateAggregateHandler(handler)
                    .pipe(this.takeUntil())
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                (command) => {
                    handler.handleCommand(command);
                }));
            }));
        }
        if (commandHandlers) {
            commandHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                commandBus
                    .ofCommandHandler(handler)
                    .pipe(this.takeUntil())
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                (command) => {
                    handler.handleCommand(command);
                }));
            }));
        }
        if (eventHandlers) {
            eventHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                domainEventBus
                    .ofEventHandler(handler)
                    .pipe(this.takeUntil())
                    .subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    handler.handleEvent(event);
                }));
            }));
            domainEventBus
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                eventHandlers.forEach((/**
                 * @param {?} handler
                 * @return {?}
                 */
                (handler) => {
                    handler.handleEvent(event);
                }));
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this.hermesLoggersInitializer.stop();
    }
    /**
     * @private
     * @param {?} commandBus
     * @param {?} commandHandlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    checkNullCommand(commandBus, commandHandlers, aggregateCommandHandlers) {
        commandBus
            .ofNullHandler(commandHandlers, aggregateCommandHandlers)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            console.error(`Command ${command.toString()} was not intercepted by any CommandHandler.`);
        }));
    }
    /**
     * @private
     * @param {?} commandHandlers
     * @return {?}
     */
    checkCommandHandlerIsCollection(commandHandlers) {
        if (commandHandlers && !Array.isArray(commandHandlers)) {
            console.warn(`You might provided commandHandler without specifying "multi: true".`);
        }
    }
    /**
     * @private
     * @param {?} eventHandlers
     * @return {?}
     */
    checkDomainEventHandlerIsCollection(eventHandlers) {
        if (eventHandlers && !Array.isArray(eventHandlers)) {
            console.warn(`You might provided eventHandler without specifying "multi: true".`);
        }
    }
}
/** @nocollapse */
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesBaseModule.prototype.hermesLoggersInitializer;
    /**
     * @type {?}
     * @private
     */
    HermesBaseModule.prototype.hermesApi;
}
class HermesModule extends HermesBaseModule {
    /**
     * @template I, A, C
     * @param {?} aggregateKey
     * @param {?} factory
     * @param {?} repository
     * @param {?} createHandler
     * @param {?=} commandHandlers
     * @param {?=} domainEventHandlers
     * @return {?}
     */
    static defineAggregate(aggregateKey, factory, repository, createHandler, commandHandlers = [], domainEventHandlers = []) {
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
                ...HermesModule.registerCreateCommandHandler(createHandler, aggregateKey),
                ...commandHandlers,
                ...domainEventHandlers
            ]
        };
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config = { loggers: false }) {
        return {
            ngModule: HermesModule,
            providers: providers
        };
    }
    /**
     * @template I, A, C
     * @param {?} commandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
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
    /**
     * @template I, E
     * @param {?} domainEventHandlerType
     * @return {?}
     */
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
    /**
     * @template I, E
     * @param {?} domainEventHandlerType
     * @return {?}
     */
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
    /**
     * @private
     * @template I, A, C
     * @param {?} createCommandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I
 * @param {?} actualEvents
 * @param {?} expectedEvents
 * @return {?}
 */
function assertDomainEvents(actualEvents, expectedEvents) {
    expect(actualEvents.length).toEqual(expectedEvents.length);
    for (let actualEvent of actualEvents) {
        /** @type {?} */
        const expectedEvent = expectedEvents.find((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event.equalsByType(actualEvent);
        }));
        expect(expectedEvent).toBeDefined();
        expect(actualEvent.equalsByType(expectedEvent)).toBeTruthy('Event type should be equal');
        // expect(actualEvent.aggregateId).toEqual(expectedEvent.aggregateId, 'Events aggregateId should be the same');
        expect(actualEvent.getPayload()).toEqual(expectedEvent.getPayload(), 'Events payload should be the same');
    }
}
/**
 * @template T
 * @param {?} actualEvents
 * @param {?} expectedEvents
 * @return {?}
 */
function assertAggregateEvents(actualEvents, expectedEvents) {
    expect(actualEvents.length).toEqual(expectedEvents.length, 'Aggregate events');
    for (let actualEvent of actualEvents) {
        /** @type {?} */
        const expectedEvent = expectedEvents.find((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event.equals(actualEvent);
        }));
        expect(expectedEvent).toBeDefined();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CreateAggregateCommand extends Command {
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} type
     */
    constructor(aggregateId, type) {
        super(aggregateId, type);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AggregateArchive, AggregateEvent, AggregateFactory, AggregateId, AggregateRepository, AggregateRoot, AggregateStore, AggregateStoreRegister, ApiModule, Archive, COMMAND_LOGGER_ENABLED, Command, CommandBus, CommandDispatcher, CommandLogger, CommandStream, CreateAggregateCommand, DomainEvent, DomainEventBus, DomainEventLogger, DomainEventPayload, DomainEventPublisher, DomainEventStatus, DomainEventStream, DomainModule, DomainObject, EVENT_LOGGER_ENABLED, Entity, EntityId, EventRepository, FeatureModule, HermesApi, HermesModule, InMemoryAggregateStore, InMemoryReadModelStore, InMemoryStore, Optional, PersistAggregateStore, PersistAnemia, PersistReadModelStore, PersistStateStore, RandomStringGenerator, Reactive, ReadModelEntity, ReadModelEntityId, ReadModelObject, ReadModelRoot, ReadModelRootId, ReadModelRootRepository, ReadModelStore, ReplayCommandDispatcher, StatusResponse, ValueObject, assertAggregateEvents, assertDomainEvents, disableHermesLoggers, enableHermesLoggers, provideEventHandlers, commandLoggerFactory as ɵa, eventLoggerFactory as ɵb, createAggregateCommandHandlerFactory as ɵba, CreateAggregateCommandHandlerImpl as ɵbb, HermesBaseModule as ɵc, Logger as ɵd, Message as ɵe, FILTERED_COMMAND_STREAM as ɵf, DomainEventStore as ɵg, ReactiveService as ɵh, DOMAIN_EVENT_HANDLERS as ɵi, CREATE_AGGREGATE_COMMAND_HANDLERS as ɵj, COMMAND_HANDLERS as ɵk, aggregateDefinitionToken as ɵl, AggregateFactoryArchive as ɵn, AggregateRepositoryArchive as ɵo, HermesLoggersInitializer as ɵp, ConsoleCommandLogger as ɵq, NoopCommandLogger as ɵr, ConsoleEventLogger as ɵs, NoopEventLogger as ɵt, HermesDomainModule as ɵu, commandHandlerFactory as ɵv, CommandHandlerImpl as ɵw, domainEventHandlerFactory as ɵx, multiDomainEventHandlerFactory as ɵy, DomainEventHandlerImpl as ɵz };
//# sourceMappingURL=generic-ui-hermes.js.map
