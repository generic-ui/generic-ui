import { Injectable, InjectionToken, Inject, PLATFORM_ID, NgModule, Optional } from '@angular/core';
import { Subject, isObservable, Observable, of, throwError, ReplaySubject } from 'rxjs';
import { take, filter, first, map, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { isPlatformBrowser, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * ngc for grid package for some reasons doesn't allow to use injection token
 * @type {?}
 */
const COMMAND_HANDLERS = 'HERMES - COMMAND_HANDLERS';

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
    constructor() {
        for (let i = 0; i < 256; i++) {
            RandomStringGenerator.byteToHex[i] = (i + 0x100).toString(16).substr(1);
            RandomStringGenerator.hexToByte[RandomStringGenerator.byteToHex[i]] = i;
        }
    }
    /**
     * @return {?}
     */
    static generate() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    /**
     * @return {?}
     */
    static getUuidV4() {
        /** @type {?} */
        const result = this.getRandomFromMathRandom();
        result[6] = (result[6] & 0x0f) | 0x40;
        result[8] = (result[8] & 0x3f) | 0x80;
        return result;
    }
    /**
     * @param {?} buf
     * @param {?=} offset
     * @return {?}
     */
    static uuidToString(buf, offset = 0) {
        /** @type {?} */
        let i = offset;
        /** @type {?} */
        let bth = this.byteToHex;
        return bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]];
    }
    /**
     * @return {?}
     */
    static getRandomFromMathRandom() {
        /** @type {?} */
        let result = new Array(16);
        /** @type {?} */
        let r = 0;
        for (let i = 0; i < 16; i++) {
            if ((i & 0x03) === 0) {
                r = Math.random() * 0x100000000;
            }
            result[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }
        return (/** @type {?} */ (result));
    }
}
RandomStringGenerator.byteToHex = [];
RandomStringGenerator.hexToByte = {};
RandomStringGenerator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RandomStringGenerator.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    RandomStringGenerator.byteToHex;
    /** @type {?} */
    RandomStringGenerator.hexToByte;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
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
    /** @type {?} */
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
 */
class CommandHandler {
    /**
     * @protected
     * @param {?} command
     * @param {?=} domainEvent
     * @param {?=} eventPublisher
     */
    constructor(command, // any is required when inherited Command has more arguments than Command
    domainEvent, eventPublisher) {
        this.command = command;
        this.domainEvent = domainEvent;
        this.eventPublisher = eventPublisher;
        this.commandType = this.createCommandInstance().getMessageType();
    }
    /**
     * @param {?} command
     * @return {?}
     */
    forCommand(command) {
        return this.commandType === command.getMessageType();
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handleCommand(command) {
        /** @type {?} */
        const result = this.handle(command);
        if (isObservable(result)) {
            ((/** @type {?} */ (result)))
                .pipe(take(1))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                // trigger event
                this.dispatchEvent(command, res);
            }));
        }
        else {
            this.dispatchEvent(command, (/** @type {?} */ (result)));
        }
    }
    /**
     * @private
     * @param {?} command
     * @param {?=} result
     * @return {?}
     */
    dispatchEvent(command, result) {
        if (this.domainEvent && this.eventPublisher) {
            /** @type {?} */
            let aggregateId = command.aggregateId;
            /** @type {?} */
            const event = new ((/** @type {?} */ (this.domainEvent)))(aggregateId);
            event.setRequestCommand(command);
            if (result) {
                event.setPayload(result);
            }
            this.eventPublisher.publish(event);
        }
    }
    /**
     * @private
     * @return {?}
     */
    createCommandInstance() {
        /** @type {?} */
        const args = [];
        /** @type {?} */
        const argumentLength = this.command.constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((/** @type {?} */ (this.command)))(...args));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandHandler.prototype.commandType;
    /**
     * @type {?}
     * @private
     */
    CommandHandler.prototype.command;
    /**
     * @type {?}
     * @private
     */
    CommandHandler.prototype.domainEvent;
    /**
     * @type {?}
     * @protected
     */
    CommandHandler.prototype.eventPublisher;
    /**
     * @abstract
     * @param {?} command
     * @return {?}
     */
    CommandHandler.prototype.handle = function (command) { };
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
    ofHandler(...handlers) {
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
     * @return {?}
     */
    ofNullHandler(handlers) {
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
 */
class CommandLogger {
}
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    CommandLogger.prototype.start = function () { };
    /**
     * @abstract
     * @return {?}
     */
    CommandLogger.prototype.stop = function () { };
    /**
     * @abstract
     * @param {?} command
     * @return {?}
     */
    CommandLogger.prototype.log = function (command) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template S
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
 */
class Aggregate {
    /**
     * @protected
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
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
    getEvents() {
        return (/** @type {?} */ (this.events));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    addEvent(event) {
        this.events.push(event);
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
    Aggregate.prototype.aggregateId;
    /**
     * @type {?}
     * @private
     */
    Aggregate.prototype.events;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AggregateId {
    /**
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
     * @param {?} aggregateEvent
     * @param {?} command
     * @return {?}
     */
    dispatchAggregateEvent(aggregateEvent, command) {
        // TODO
        // const domainEventName = aggregateEvent.getDomainEventName() as typeof DomainEvent;
        //
        // const domainEvent: DomainEvent = new (domainEventName)(command.getAggregateId());
        // this.eventStream.next();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    publishEvent(event) {
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
/**
 * @abstract
 */
class DomainEventHandler {
}
if (false) {
    /**
     * @abstract
     * @param {?} event
     * @return {?}
     */
    DomainEventHandler.prototype.handle = function (event) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class DomainEventLogger {
}
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    DomainEventLogger.prototype.start = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DomainEventLogger.prototype.stop = function () { };
    /**
     * @abstract
     * @param {?} event
     * @return {?}
     */
    DomainEventLogger.prototype.log = function (event) { };
}

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
/** @type {?} */
const DOMAIN_EVENT_HANDLERS = 'DOMAIN_EVENT_HANDLERS';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ReadModel {
    /**
     * @protected
     * @param {?} gui
     */
    constructor(gui) {
        this.aggregateId = gui;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.aggregateId;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReadModel.prototype.aggregateId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template Q
 */
class ReadModelStore {
}
if (false) {
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    ReadModelStore.prototype.getById = function (aggregateId) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class ReactiveAggregateArchive {
    /**
     * @protected
     */
    constructor() {
        this.archive = new Map();
        this.archive$ = new ReplaySubject();
    }
    /**
     * @param {?} aggregateId
     * @param {?} value
     * @return {?}
     */
    set(aggregateId, value) {
        this.archive.set(aggregateId.toString(), value);
        this.archive$.next(this.archive);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    select(aggregateId) {
        return this.archive$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(aggregateId.toString());
        })), distinctUntilChanged());
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReactiveAggregateArchive.prototype.archive;
    /**
     * @type {?}
     * @private
     */
    ReactiveAggregateArchive.prototype.archive$;
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
 * @return {?}
 */
function enableHermesLoggers() {
    window[hermesApi].loggers = true;
}
/**
 * @return {?}
 */
function disableHermesLoggers() {
    window[hermesApi].loggers = false;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} handlers
 * @return {?}
 */
function provideCommandHandlers(handlers) {
    return (/** @type {?} */ (handlers.map((/**
     * @param {?} handler
     * @return {?}
     */
    (handler) => {
        return {
            provide: COMMAND_HANDLERS,
            useClass: handler,
            multi: true
        };
    }))));
}
/**
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
/**
 * @abstract
 */
class PersistAnemia {
    /**
     * @protected
     * @param {?} uid
     */
    constructor(uid) {
        this.aggregateId = uid;
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
    getId() {
        return this.aggregateId.toString();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersistAnemia.prototype.aggregateId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Rename
 * @abstract
 * @template A
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
        return this.state.get(aggregateId.toString());
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
 * @template T, S
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
        /** @type {?} */
        const anemias = this.stateStore.getAll();
        return anemias.map((/**
         * @param {?} anemia
         * @return {?}
         */
        (anemia) => this.fromAnemia(anemia)));
    }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    getValue(aggregateId) {
        /** @type {?} */
        const anemia = this.stateStore.get(aggregateId);
        if (anemia) {
            return this.fromAnemia(anemia);
        }
        else {
            return null;
        }
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
    PersistReadModelStore.prototype.fromAnemia = function (anemia) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T, S
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
        const anemia = this.stateStore.get(aggregateId);
        if (anemia) {
            return this.fromAnemia(anemia);
        }
        else {
            return null;
        }
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
 * @template T
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
        return this.inMemoryStore.get(aggregateId);
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
 * @template T, S
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
        return this.getValue(aggregateId);
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.inMemoryStore.getAll()
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
        const aggregate = this.inMemoryStore.get(aggregateId);
        if (aggregate) {
            return this.toReadModel(aggregate);
        }
        else {
            return null;
        }
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
 * @template S
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
        return this.state.get(aggregateId.toString());
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
     * @param {?} command
     * @return {?}
     */
    log(command) {
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
     * @param {?} command
     * @return {?}
     */
    log(command) {
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
     * @param {?} domainEvent
     * @return {?}
     */
    log(domainEvent) {
        /** @type {?} */
        const aggregateId = domainEvent.aggregateId;
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
    log(event) {
    }
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
class HermesModule {
    /**
     * @param {?} commandHandlers
     * @param {?} eventHandlers
     * @param {?} commandBus
     * @param {?} domainEventBus
     * @param {?} commandLogger
     * @param {?} eventLogger
     * @param {?} hermesApi
     */
    constructor(commandHandlers, eventHandlers, commandBus, domainEventBus, commandLogger, eventLogger, hermesApi) {
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
        this.hermesApi = hermesApi;
        this.unsubscribe$ = new Subject();
        this.loggersStart();
        this.checkNullCommand(commandBus, commandHandlers);
        this.checkCommandHandlerIsCollection(commandHandlers);
        if (commandHandlers) {
            commandHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                commandBus
                    .ofHandler(handler)
                    .pipe(takeUntil(this.unsubscribe$))
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
            domainEventBus
                .pipe(takeUntil(this.unsubscribe$))
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
                    handler.handle(event);
                }));
            }));
        }
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
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.loggersStop();
    }
    /**
     * @private
     * @return {?}
     */
    loggersStart() {
        this.commandLogger.start();
        this.eventLogger.start();
    }
    /**
     * @private
     * @return {?}
     */
    loggersStop() {
        this.commandLogger.stop();
        this.eventLogger.stop();
    }
    /**
     * @private
     * @param {?} commandBus
     * @param {?} commandHandlers
     * @return {?}
     */
    checkNullCommand(commandBus, commandHandlers) {
        commandBus
            .ofNullHandler(commandHandlers)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            console.log(`Command ${command.toString()} was not intercepted by any CommandHandler.`);
        }));
    }
    /**
     * @private
     * @param {?} commandHandlers
     * @return {?}
     */
    checkCommandHandlerIsCollection(commandHandlers) {
        if (commandHandlers && !Array.isArray(commandHandlers)) {
            console.log(`You might provided commandHandler without specifying "multi: true".`);
        }
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
/** @nocollapse */
HermesModule.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [COMMAND_HANDLERS,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [DOMAIN_EVENT_HANDLERS,] }] },
    { type: CommandBus },
    { type: DomainEventBus },
    { type: CommandLogger },
    { type: DomainEventLogger },
    { type: HermesApi }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesModule.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    HermesModule.prototype.commandLogger;
    /**
     * @type {?}
     * @private
     */
    HermesModule.prototype.eventLogger;
    /**
     * @type {?}
     * @private
     */
    HermesModule.prototype.hermesApi;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Aggregate, AggregateEvent, AggregateId, AggregateStore, AggregateStoreRegister, COMMAND_HANDLERS, COMMAND_LOGGER_ENABLED, Command, CommandBus, CommandDispatcher, CommandHandler, CommandLogger, CommandStream, DOMAIN_EVENT_HANDLERS, DomainEvent, DomainEventBus, DomainEventHandler, DomainEventLogger, DomainEventPayload, DomainEventPublisher, DomainEventStatus, DomainEventStream, EVENT_LOGGER_ENABLED, HermesApi, HermesModule, InMemoryAggregateStore, InMemoryReadModelStore, InMemoryStore, PersistAggregateStore, PersistAnemia, PersistReadModelStore, PersistStateStore, RandomStringGenerator, ReactiveAggregateArchive, ReadModel, ReadModelStore, ReplayCommandDispatcher, StatusResponse, assertAggregateEvents, assertDomainEvents, disableHermesLoggers, enableHermesLoggers, provideCommandHandlers, provideEventHandlers, commandLoggerFactory as ɵa, eventLoggerFactory as ɵb, Message as ɵc, DomainEventStore as ɵd, FILTERED_COMMAND_STREAM as ɵe, ConsoleCommandLogger as ɵf, NoopCommandLogger as ɵg, ConsoleEventLogger as ɵh, NoopEventLogger as ɵi };
//# sourceMappingURL=generic-ui-hermes.js.map
