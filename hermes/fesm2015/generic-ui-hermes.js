import { Injectable, Inject, PLATFORM_ID, InjectionToken, NgModule, Optional as Optional$1, Injector } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
 * @param {?=} windowObject
 * @return {?}
 */
function enableHermesLoggers(domainName, windowObject) {
    /** @type {?} */
    const winRef = windowObject ? windowObject : window;
    if (domainName) {
        winRef[hermesApi].domain = domainName;
    }
    winRef[hermesApi].loggers = true;
}
/**
 * @param {?=} windowObject
 * @return {?}
 */
function disableHermesLoggers(windowObject) {
    /** @type {?} */
    const winRef = windowObject ? windowObject : window;
    delete winRef[hermesApi].domain;
    winRef[hermesApi].loggers = false;
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
class HermesSubscription {
    /**
     * @param {?=} finalize
     * @param {?=} isClosed
     */
    constructor(finalize, isClosed) {
        this.closed = false;
        this.finalize = (/**
         * @return {?}
         */
        () => {
        });
        if (finalize !== undefined && finalize !== null &&
            typeof finalize === 'function') {
            this.finalize = finalize;
        }
        if (isClosed !== undefined && isClosed !== null) {
            this.closed = isClosed;
        }
    }
    /**
     * @return {?}
     */
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.finalize();
    }
    /**
     * @return {?}
     */
    getFinalize() {
        return this.finalize;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesSubscription.prototype.closed;
    /**
     * @type {?}
     * @private
     */
    HermesSubscription.prototype.finalize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class HermesSubscriber {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.finalize = (/**
         * @return {?}
         */
        () => {
        });
        this.completed = false;
        this.closed = false;
        this.observer = config;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        if (this.isCompleted()) {
            return;
        }
        if (this.observer && this.observer.next) {
            this.observer.next(value);
        }
    }
    /**
     * @param {?} error
     * @return {?}
     */
    error(error) {
        if (this.completed) {
            return;
        }
        if (this.observer && this.observer.error) {
            this.observer.error(error);
        }
        this.unsubscribe();
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.completed = true;
        this.finalize();
    }
    /**
     * @param {?} finalize
     * @return {?}
     */
    setFinalize(finalize) {
        if (finalize && typeof finalize === 'function') {
            this.finalize = finalize;
        }
        else {
        }
    }
    /**
     * @protected
     * @return {?}
     */
    isCompleted() {
        return this.completed;
    }
    /**
     * @protected
     * @return {?}
     */
    isClosed() {
        return this.closed;
    }
    /**
     * @protected
     * @return {?}
     */
    getObserver() {
        return this.observer;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesSubscriber.prototype.observer;
    /**
     * @type {?}
     * @private
     */
    HermesSubscriber.prototype.finalize;
    /**
     * @type {?}
     * @private
     */
    HermesSubscriber.prototype.completed;
    /**
     * @type {?}
     * @private
     */
    HermesSubscriber.prototype.closed;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T, R
 */
function HermesOperatorFunction() { }
/**
 * @template T
 */
class HermesObservable {
    /**
     * @param {?=} generator
     */
    constructor(generator) {
        this.generatorFn = generator;
    }
    /**
     * @template T, R
     * @param {...?} operations
     * @return {?}
     */
    pipe(...operations) {
        this.source = this;
        for (const operation of operations) {
            this.source = this.innerPipe(operation, this.source);
        }
        return this.source;
    }
    /**
     * @private
     * @template T, R
     * @param {?} operation
     * @param {?} stream$
     * @return {?}
     */
    innerPipe(operation, stream$) {
        return ((/**
         * @param {?} input
         * @return {?}
         */
        (input) => {
            return operation(input);
        }))(stream$);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    subscribe(arg) {
        /** @type {?} */
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
    /**
     * @protected
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    createSubscriber(next, error, complete) {
        return new HermesSubscriber({
            next,
            error,
            complete
        });
    }
    /**
     * @protected
     * @return {?}
     */
    getSubscription() {
        return new HermesSubscription(this.generatorFinalize);
    }
    /**
     * @private
     * @param {?} observer
     * @return {?}
     */
    isObserver(observer) {
        return typeof observer === 'object';
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesObservable.prototype.source;
    /**
     * @type {?}
     * @protected
     */
    HermesObservable.prototype.generatorFn;
    /**
     * @type {?}
     * @private
     */
    HermesObservable.prototype.generatorFinalize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function hermesEmptySubscription() {
    return new HermesSubscription((/**
     * @return {?}
     */
    () => {
    }), true);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
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
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        this.verifyNotClosed();
        if (this.isCompleted || this.thrownError !== null) {
            return;
        }
        for (const subs of this.subscribers) {
            subs.next(value);
        }
    }
    /**
     * @param {?} error
     * @return {?}
     */
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
    /**
     * @return {?}
     */
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
    /**
     * @param {?} arg
     * @return {?}
     */
    subscribe(arg) {
        this.verifyNotClosed();
        /** @type {?} */
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
    /**
     * @return {?}
     */
    unsubscribe() {
        this.isCompleted = true;
        this.isClosed = true;
        this.subscribers.length = 0;
    }
    /**
     * @return {?}
     */
    toObservable() {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const subscription = this.subscribe((/**
             * @param {?} v
             * @return {?}
             */
            (v) => observer.next(v)), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => observer.error(error)), (/**
             * @return {?}
             */
            () => observer.complete()));
            return (/**
             * @return {?}
             */
            () => subscription.unsubscribe());
        }));
    }
    /**
     * @private
     * @return {?}
     */
    verifyNotClosed() {
        if (this.isClosed) {
            throw new Error('Observable already closed');
        }
    }
}
if (false) {
    /**
     * After error
     * @type {?}
     * @private
     */
    HermesSubject.prototype.thrownError;
    /**
     * After complete
     * @type {?}
     * @private
     */
    HermesSubject.prototype.isCompleted;
    /**
     * After unsubscribe
     * @type {?}
     * @private
     */
    HermesSubject.prototype.isClosed;
    /**
     * @type {?}
     * @private
     */
    HermesSubject.prototype.subscribers;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommandStream extends HermesSubject {
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
            const found = arg.find((/**
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
/**
 * @abstract
 * @template I
 */
class Command extends Message {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MessageType = Function;
// WARNING: interface has both a type and a value, skipping emit

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CommandType = MessageType;
// WARNING: interface has both a type and a value, skipping emit

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
 * @template T
 * @param {?} observer
 * @param {?=} next
 * @param {?=} complete
 * @return {?}
 */
function subscriberForOperator(observer, next, complete) {
    /** @type {?} */
    let nextFn = next ? next : (/**
     * @param {?} v
     * @return {?}
     */
    (v) => {
        observer.next(v);
    });
    /** @type {?} */
    let completeFn = complete ? complete : (/**
     * @return {?}
     */
    () => {
        observer.complete();
    });
    return new HermesSubscriber({
        next: nextFn,
        error: (/**
         * @param {?} e
         * @return {?}
         */
        (e) => observer.error(e)),
        complete: completeFn
    });
}
/**
 * @template T
 * @param {?} observer
 * @return {?}
 */
function subscriberFromObserver(observer) {
    return new HermesSubscriber({
        next: (/**
         * @param {?} v
         * @return {?}
         */
        (v) => observer.next(v)),
        error: (/**
         * @param {?} e
         * @return {?}
         */
        (e) => observer.error(e)),
        complete: (/**
         * @return {?}
         */
        () => observer.complete())
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} operation
 * @return {?}
 */
function hermesFilter(operation) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            const subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (operation(value)) {
                    observer.next(value);
                }
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template C
 */
class CommandBus extends HermesObservable {
    /**
     * @param {?} commandsStream
     */
    constructor(commandsStream) {
        super();
        this.commandsStream = commandsStream;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    subscribe(arg) {
        return this.commandsStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
    }
    /**
     * @template C2
     * @param {...?} commandTypes
     * @return {?}
     */
    ofCommand(...commandTypes) {
        return ((/** @type {?} */ (this)))
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
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
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                return handler.forCommand(command);
            }));
        })));
    }
    /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    ofCreateAggregateHandler(...handlers) {
        return ((/** @type {?} */ (this)))
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                return handler.forCommand(command);
            }));
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
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            if (!handlers && !aggregateCommandHandlers) {
                return true;
            }
            /** @type {?} */
            let foundHandlerForCommand = true;
            if (handlers) {
                foundHandlerForCommand =
                    !handlers.some((/**
                     * @param {?} handler
                     * @return {?}
                     */
                    (handler) => {
                        return handler.forCommand(command);
                    }));
            }
            if (aggregateCommandHandlers) {
                foundHandlerForCommand = foundHandlerForCommand &&
                    !aggregateCommandHandlers.some((/**
                     * @param {?} handler
                     * @return {?}
                     */
                    (handler) => {
                        return handler.forCommand(command);
                    }));
            }
            return foundHandlerForCommand;
        })));
    }
}
CommandBus.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CommandBus.ctorParameters = () => [
    { type: CommandStream, decorators: [{ type: Inject, args: [FILTERED_COMMAND_STREAM,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandBus.prototype.commandsStream;
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
/** @type {?} */
const AggregateEventType = MessageType;
// WARNING: interface has both a type and a value, skipping emit

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
    AggregateRepository.prototype.findById = function (aggregateId) { };
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
    AggregateStore.prototype.findById = function (aggregateId) { };
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
        const aggregates = {};
        this.stores.forEach((/**
         * @param {?} store
         * @return {?}
         */
        (store) => {
            /** @type {?} */
            const aggregate = store.findById(aggregateId);
            if (aggregate) {
                /** @type {?} */
                const aggregateName = aggregate.constructor.name;
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
        // return JSON.parse(JSON.stringify(aggregates));
        return aggregates;
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
            for (const event of args) {
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
    /**
     * @param {?} aggregate
     * @return {?}
     */
    equals(aggregate) {
        return aggregate.getId().toString() === this.getId().toString();
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
 * @template T
 */
class HermesId {
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
    getId() {
        return this.uid;
    }
    /**
     * @param {?} hermesId
     * @return {?}
     */
    equals(hermesId) {
        return this.uid === hermesId.getId();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesId.prototype.uid;
    /**
     * @abstract
     * @return {?}
     */
    HermesId.prototype.toString = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AggregateId extends HermesId {
    /**
     * @protected
     * @param {?} uid
     */
    constructor(uid) {
        super(uid);
    }
    /**
     * @return {?}
     */
    toString() {
        return super.getId();
    }
}
if (false) {
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
/**
 * @abstract
 * @template I
 */
class DomainEvent extends Message {
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} payload
     * @param {?} messageType
     */
    constructor(aggregateId, payload, messageType) {
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
    DomainEvent.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {...?} args
 * @return {?}
 */
function hermesOf(...args) {
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    observer => {
        args.forEach((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            observer.next(value);
        }));
        observer.complete();
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @return {?}
 */
function hermesEmpty() {
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        observer.complete();
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} valuesNumber
 * @return {?}
 */
function hermesTake(valuesNumber) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        if (valuesNumber === 0) {
            return hermesEmpty();
        }
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            let index = 0;
            /** @type {?} */
            const subscriber = new HermesSubscriber({
                next: (/**
                 * @param {?} v
                 * @return {?}
                 */
                (v) => {
                }),
                error: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => observer.error(e)),
                complete: (/**
                 * @return {?}
                 */
                () => observer.complete())
            });
            ((/** @type {?} */ (subscriber))).observer.next = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                if (index < valuesNumber) {
                    observer.next(v);
                    index++;
                    if (index === valuesNumber) {
                        subscriber.complete();
                    }
                }
            });
            /** @type {?} */
            const subscription = source.subscribe(subscriber);
            return subscription.getFinalize();
        }));
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DomainEventStore {
    constructor() {
        this.domainEvents = [];
        this.domainEvents$ = new HermesSubject();
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
            return hermesOf(event);
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
            return new HermesObservable((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                observer.error(new Error('Unsupported argument type.'));
            }));
            // return throwError(new Error('Unsupported argument type.'));
        }
        return this.domainEvents$
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.constructor.name === eventType)), hermesTake(1));
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
class DomainEventStream extends HermesSubject {
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
            for (const arg of args) {
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
class DomainEventBus extends HermesObservable {
    /**
     * @param {?} eventStream
     */
    constructor(eventStream) {
        super();
        this.eventStream = eventStream;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    subscribe(arg) {
        return this.eventStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
    }
    /**
     * @template E2
     * @param {...?} events
     * @return {?}
     */
    ofEvent(...events) {
        return ((/** @type {?} */ (this)))
            .eventStream
            .toObservable()
            .pipe(hermesFilter((/**
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
            .eventStream
            .toObservable()
            .pipe(hermesFilter((/**
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventBus.prototype.eventStream;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DomainEventType = MessageType;
// WARNING: interface has both a type and a value, skipping emit

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} notifier
 * @return {?}
 */
function hermesTakeUntil(notifier) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            const subscriber = subscriberFromObserver(observer);
            /** @type {?} */
            const notifierSubscriber = new HermesSubscriber({
                next: (/**
                 * @return {?}
                 */
                () => subscriber.complete())
            });
            notifier.subscribe(notifierSubscriber);
            /** @type {?} */
            const subscription = source.subscribe(subscriber);
            return subscription.getFinalize();
        }));
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} source$
 * @return {?}
 */
function toRxJsObservable(source$) {
    return new Observable((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        /** @type {?} */
        const subscription = source$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => observer.next(value)), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => observer.error(error)), (/**
         * @return {?}
         */
        () => observer.complete()));
        return (/**
         * @return {?}
         */
        () => subscription.unsubscribe());
    }));
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
        this.hermesUnsubscribe$ = new HermesSubject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.hermesUnsubscribe();
    }
    /**
     * @protected
     * @template T
     * @return {?}
     */
    takeUntil() {
        return takeUntil(toRxJsObservable(this.hermesUnsubscribe$));
    }
    /**
     * @protected
     * @return {?}
     */
    hermesUnsubscribe() {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    }
    /**
     * @protected
     * @return {?}
     */
    hermesTakeUntil() {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    }
    /**
     * @protected
     * @return {?}
     */
    isNotStopped() {
        return !((/** @type {?} */ (this.hermesUnsubscribe$))).isCompleted;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Reactive.prototype.hermesUnsubscribe$;
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
        this.hermesUnsubscribe();
    }
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
        if (Optional.isValueEmpty(value)) {
            this.value = null;
        }
        else {
            this.value = value;
        }
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
    static isValueEmpty(value) {
        return typeof value === 'undefined' || value === null;
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return Optional.isValueEmpty(this.value);
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
 * @template K, T
 */
class KeyMap {
    constructor() {
        this.keys = new Map();
        this.values = new WeakMap();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        /** @type {?} */
        const internalKey = this.getInternalKey(key);
        if (internalKey !== undefined) {
            return Optional.of(this.values.get(internalKey));
        }
        else {
            return Optional.empty();
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    has(key) {
        /** @type {?} */
        const internalKey = this.getInternalKey(key);
        return this.values.has(internalKey);
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        this.keys.set(key.toString(), key);
        this.values.set(key, value);
    }
    /**
     * @return {?}
     */
    size() {
        return this.keys.size;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        if (this.hasInternalKey(key)) {
            this.keys.delete(key.toString());
            this.values.delete(key);
        }
    }
    /**
     * @return {?}
     */
    removeAll() {
        this.keys.forEach((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.values.delete(value);
        }));
        this.keys.clear();
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    getInternalKey(key) {
        return this.keys.get(key.toString());
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    hasInternalKey(key) {
        return this.keys.has(key.toString());
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    KeyMap.prototype.keys;
    /**
     * @type {?}
     * @private
     */
    KeyMap.prototype.values;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, R
 * @param {?} convert
 * @return {?}
 */
function hermesMap(convert) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let index = 0;
            /** @type {?} */
            const subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                observer.next(convert(value, index++));
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?=} compareFn
 * @return {?}
 */
function hermesDistinctUntilChanged(compareFn) {
    /** @type {?} */
    const compare = compareFn ? compareFn : defaultCompareFn;
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let previousValue = null;
            /** @type {?} */
            const subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (previousValue === null || !compare(previousValue, value)) {
                    previousValue = value;
                    observer.next(value);
                }
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}
/**
 * @template T
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function defaultCompareFn(a, b) {
    return a === b;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class HermesBehaviorSubject extends HermesSubject {
    /**
     * @param {?} defaultValue
     */
    constructor(defaultValue) {
        super();
        this.lastValue = defaultValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        this.lastValue = value;
        super.next(value);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    subscribe(arg) {
        /** @type {?} */
        const subscription = super.subscribe(arguments[0], arguments[1], arguments[2]);
        super.next(this.lastValue);
        return subscription;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesBehaviorSubject.prototype.lastValue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class HermesReplaySubject extends HermesSubject {
    /**
     * @param {?=} bufferSize
     */
    constructor(bufferSize = 1) {
        super();
        this.bufferSize = bufferSize;
        this.values = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        this.values.push(value);
        if (this.bufferSize < this.values.length) {
            this.values.shift();
        }
        super.next(value);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    subscribe(arg) {
        /** @type {?} */
        let subscriber;
        if (arg instanceof HermesSubscriber) {
            subscriber = arg;
        }
        else {
            subscriber = this.createSubscriber(arguments[0], arguments[1], arguments[2]);
        }
        /** @type {?} */
        const subscription = super.subscribe(subscriber);
        for (const value of this.values) {
            subscriber.next(value);
        }
        return subscription;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesReplaySubject.prototype.values;
    /**
     * @type {?}
     * @private
     */
    HermesReplaySubject.prototype.bufferSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class HermesArchiveSubject extends HermesSubject {
    /**
     * @private
     */
    constructor() {
        super();
    }
    /**
     * @template T
     * @param {?=} value
     * @return {?}
     */
    static of(value) {
        if (value !== undefined) {
            return new HermesBehaviorSubject(value);
        }
        else {
            return new HermesReplaySubject(1);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template K, T
 */
class KeyArchive extends ReactiveService {
    /**
     * @protected
     * @param {?=} defaultValue
     */
    constructor(defaultValue) {
        super();
        this.archive = new KeyMap();
        this.defaultValue = Optional.empty();
        this.archive$ = HermesArchiveSubject.of();
        if (defaultValue !== undefined && defaultValue !== null) {
            this.defaultValue = Optional.of(defaultValue);
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    on(key) {
        this.tryToInitDefault(key);
        return this.archive$
            .toObservable()
            .pipe(hermesFilter((/**
         * @return {?}
         */
        () => this.isNotStopped())), hermesMap((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(key);
        })), hermesFilter((/**
         * @param {?} value
         * @return {?}
         */
        (value) => value.isPresent())), hermesMap((/**
         * @param {?} value
         * @return {?}
         */
        (value) => value.getValueOrNullOrThrowError())), hermesDistinctUntilChanged(), this.hermesTakeUntil());
    }
    /**
     * @param {?} key
     * @return {?}
     */
    once(key) {
        return this.on(key)
            .pipe(hermesTake(1));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        this.tryToInitDefault(key);
        return this.archive.get(key);
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    next(key, value) {
        this.archive.set(key, value);
        this.archive$.next(this.archive);
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    tryToInitDefault(key) {
        this.defaultValue
            .ifPresent((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (!this.archive.has(key)) {
                this.next(key, value);
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    KeyArchive.prototype.archive;
    /**
     * @type {?}
     * @private
     */
    KeyArchive.prototype.archive$;
    /**
     * @type {?}
     * @private
     */
    KeyArchive.prototype.defaultValue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class AggregateArchive extends KeyArchive {
    /**
     * @protected
     * @param {?=} defaultValue
     */
    constructor(defaultValue) {
        super(defaultValue);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, E, V
 */
class EventDrivenRepository extends AggregateArchive {
    /**
     * @protected
     * @param {?=} defaultValues
     */
    constructor(defaultValues) {
        super(defaultValues);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        this.next(event.getAggregateId(), event.getPayload());
    }
}
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    EventDrivenRepository.prototype.forEvent = function () { };
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
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            try {
                this.subscribe(event);
            }
            catch (e) {
                // eslint-disable-next-line no-console
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
class EventRepository extends ReactiveService {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super();
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
            .pipe(hermesFilter((/**
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
 * @template T
 */
class EntityId extends HermesId {
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
 * @template T
 * @return {?}
 */
function hermesNever() {
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} interval
 * @return {?}
 */
function hermesInterval(interval) {
    /** @type {?} */
    let counter = 0;
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        /** @type {?} */
        const id = setInterval((/**
         * @return {?}
         */
        () => {
            observer.next(counter++);
        }), interval);
        return (/**
         * @return {?}
         */
        () => {
            clearInterval(id);
            observer.complete();
        });
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} time
 * @return {?}
 */
function hermesTimer(time) {
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        /** @type {?} */
        const id = setTimeout((/**
         * @return {?}
         */
        () => {
            observer.next(0);
        }), time);
        return (/**
         * @return {?}
         */
        () => {
            clearTimeout(id);
            observer.complete();
        });
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @param {?} type
 * @return {?}
 */
function hermesFromEvent(element, type) {
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        /** @type {?} */
        const listener = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            observer.next(event);
        });
        element.addEventListener(type, listener);
        return (/**
         * @return {?}
         */
        () => {
            element.removeEventListener(type, listener);
        });
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class HermesSingleSubscriber extends HermesSubscriber {
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        if (this.isCompleted()) {
            return;
        }
        /** @type {?} */
        const observer = this.getObserver();
        if (observer && observer.next) {
            observer.next(value);
            this.complete();
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class HermesSingle extends HermesObservable {
    /**
     * @protected
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    createSubscriber(next, error, complete) {
        return new HermesSingleSubscriber({
            next,
            error,
            complete
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function singleFromObservable(source) {
    return new HermesSingle((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        /** @type {?} */
        const subscriber = new HermesSubscriber({
            next: (/**
             * @param {?} value
             * @return {?}
             */
            (value) => observer.next(value)),
            error: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => observer.error(error)),
            complete: (/**
             * @return {?}
             */
            () => {
            })
        });
        /** @type {?} */
        const subscription = source.subscribe(subscriber);
        return subscription.getFinalize();
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} error
 * @return {?}
 */
function hermesThrowError(error) {
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    observer => {
        observer.error(error);
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} valuesNumber
 * @return {?}
 */
function hermesSkip(valuesNumber) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            let index = 0;
            /** @type {?} */
            const subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (index >= valuesNumber) {
                    observer.next(value);
                }
                index++;
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, R
 * @param {?} operation
 * @return {?}
 */
function hermesSwitchMap(operation) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let isOuterCompleted = false;
            /** @type {?} */
            let innerSubscriber = null;
            /** @type {?} */
            const tryToComplete = (/**
             * @return {?}
             */
            function () {
                if (isOuterCompleted && !innerSubscriber) {
                    observer.complete();
                }
            });
            /** @type {?} */
            const outerSubscriber = subscriberForOperator(observer, (/**
             * @param {?} v
             * @return {?}
             */
            (v) => {
                if (innerSubscriber) {
                    innerSubscriber.unsubscribe();
                }
                /** @type {?} */
                const subscriber = new HermesSubscriber({
                    next: (/**
                     * @param {?} v2
                     * @return {?}
                     */
                    (v2) => observer.next(v2)),
                    error: (/**
                     * @param {?} e
                     * @return {?}
                     */
                    (e) => observer.error(e)),
                    complete: (/**
                     * @return {?}
                     */
                    () => {
                        innerSubscriber = null;
                        tryToComplete();
                    })
                });
                innerSubscriber = subscriber;
                /** @type {?} */
                const innerSubscription = operation(v).subscribe(subscriber);
                return innerSubscription.getFinalize();
            }), (/**
             * @return {?}
             */
            () => {
                isOuterCompleted = true;
                tryToComplete();
            }));
            return source.subscribe(outerSubscriber).getFinalize();
        }));
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} operation
 * @return {?}
 */
function hermesTap(operation) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            const subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                operation(value);
                observer.next(value);
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @return {?}
 */
function hermesToArray() {
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const values = [];
            /** @type {?} */
            const subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                values.push(value);
            }), (/**
             * @return {?}
             */
            () => {
                if (values.length > 0) {
                    observer.next(values);
                }
                observer.complete();
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} source$
 * @return {?}
 */
function fromRxJsObservable(source$) {
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        /** @type {?} */
        const subscription = source$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => observer.next(value)), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => observer.error(error)), (/**
         * @return {?}
         */
        () => observer.complete()));
        return (/**
         * @return {?}
         */
        () => subscription.unsubscribe());
    }));
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
        this.archive$ = HermesArchiveSubject.of(value);
    }
    /**
     * @return {?}
     */
    on() {
        return this.archive$
            .toObservable()
            .pipe(hermesDistinctUntilChanged(this.compare));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        this.archive$.next(value);
    }
    /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    compare(one, two) {
        return one === two;
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
    findById(aggregateId) {
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
    findById(aggregateId) {
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
        return this.getValue(aggregateId);
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
 * @template I, A
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
        return Array.from(this.state.values()).map((/**
         * @param {?} v
         * @return {?}
         */
        v => Optional.of(v)));
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
        this.unsubscribe$ = new HermesSubject();
        commandBus
            .pipe(hermesFilter((/**
         * @return {?}
         */
        () => this.enabled)), hermesTakeUntil(this.unsubscribe$))
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
        // eslint-disable-next-line no-console
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
        this.unsubscribe$ = new HermesSubject();
        eventBus
            .pipe(hermesFilter((/**
         * @return {?}
         */
        () => this.enabled)), hermesTakeUntil(this.unsubscribe$))
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
        // eslint-disable-next-line no-console
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
    /**
     * @param {?} key
     * @return {?}
     */
    has(key) {
        return this.map.has(key);
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
    /**
     * @param {?} key
     * @return {?}
     */
    has(key) {
        return this.map.has(key);
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
        this.commandHandler.publish(aggregate, command);
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
            const optAggregate = repo.findById(aggregateId);
            optAggregate.ifPresent((/**
             * @param {?} aggregate
             * @return {?}
             */
            (aggregate) => {
                this.commandHandler.handle(aggregate, command);
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
        const types = [];
        for (const event of this.events) {
            /** @type {?} */
            const instance = this.createDomainEventInstance(event);
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
/**
 * @template I, E
 */
class DomainEventHandlerInitializer extends Reactive {
    /**
     * @param {?} eventHandlers
     * @param {?} domainEventBus
     * @return {?}
     */
    init(eventHandlers, domainEventBus) {
        if (eventHandlers) {
            /** @type {?} */
            const set = new Set();
            /** @type {?} */
            const filteredHandlers = [];
            eventHandlers.filter((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                if (!set.has(((/** @type {?} */ (handler))).domainEventHandler)) {
                    set.add(((/** @type {?} */ (handler))).domainEventHandler);
                    filteredHandlers.push(handler);
                }
            }));
            filteredHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                domainEventBus
                    .ofEventHandler(handler)
                    .pipe(this.hermesTakeUntil())
                    .subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    handler.handleEvent(event);
                }));
            }));
            // console.log('Registered event handlers:', filteredHandlers.length)
            // console.log('Registered event handlers:', filteredHandlers)
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, A, C
 */
class CommandHandlerInitializer extends Reactive {
    /**
     * @param {?} commandHandlers
     * @param {?} commandBus
     * @return {?}
     */
    register(commandHandlers, commandBus) {
        if (commandHandlers) {
            /** @type {?} */
            const set = new Set();
            /** @type {?} */
            const filteredHandlers = [];
            commandHandlers.filter((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                if (!set.has(((/** @type {?} */ (handler))).commandHandler)) {
                    set.add(((/** @type {?} */ (handler))).commandHandler);
                    filteredHandlers.push(handler);
                }
            }));
            filteredHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                commandBus
                    .ofCommandHandler(handler)
                    .pipe(this.hermesTakeUntil())
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                (command) => {
                    handler.handleCommand(command);
                }));
            }));
            // console.log('Registered command handlers:' + filteredHandlers.length);
            // console.log('Registered command handlers:', filteredHandlers);
        }
    }
    /**
     * @param {?} aggregateCommandHandlers
     * @param {?} commandBus
     * @return {?}
     */
    registerAggregateCommandHandlers(aggregateCommandHandlers, commandBus) {
        if (aggregateCommandHandlers) {
            /** @type {?} */
            const set = new Set();
            /** @type {?} */
            const filteredHandlers = [];
            aggregateCommandHandlers.filter((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                if (!set.has(((/** @type {?} */ (handler))).createAggregateCommandHandler)) {
                    set.add(((/** @type {?} */ (handler))).createAggregateCommandHandler);
                    filteredHandlers.push(handler);
                }
            }));
            filteredHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                commandBus
                    .ofCreateAggregateHandler(handler)
                    .pipe(this.hermesTakeUntil())
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                (command) => {
                    handler.handleCommand(command);
                }));
            }));
            // console.log('Registered create command handlers:' + filteredHandlers.length);
            // console.log('Registered create command handlers:', filteredHandlers);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, A
 */
class AggregateDefinitionInitializer {
    /**
     * @param {?} definedAggregate
     * @param {?} injector
     * @param {?} aggregateFactoryArchive
     * @param {?} aggregateRepositoryArchive
     * @return {?}
     */
    register(definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive) {
        if (definedAggregate) {
            /** @type {?} */
            const set = new Set();
            /** @type {?} */
            const filteredDefinitions = [];
            definedAggregate.filter((/**
             * @param {?} def
             * @return {?}
             */
            (def) => {
                if (!set.has(def.key)) {
                    set.add(def.key);
                    filteredDefinitions.push(def);
                }
            }));
            filteredDefinitions.forEach((/**
             * @param {?} def
             * @return {?}
             */
            (def) => {
                /** @type {?} */
                const factory = injector.get(def.factory);
                /** @type {?} */
                const repository = injector.get(def.repository);
                if (!aggregateFactoryArchive.has(def.key)) {
                    aggregateFactoryArchive.add(def.key, factory);
                }
                if (!aggregateRepositoryArchive.has(def.key)) {
                    aggregateRepositoryArchive.add(def.key, repository);
                }
            }));
            // console.log('Registered aggregate definition:' + filteredDefinitions.length);
            // console.log('Registered aggregate definition:', filteredDefinitions);
        }
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this.hermesLoggersInitializer.stop();
        this.commandHandlerInitializer.ngOnDestroy();
        this.domainEventHandlerInitializer.ngOnDestroy();
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
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            // eslint-disable-next-line no-console
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
            // eslint-disable-next-line no-console
            console.warn('You might provided commandHandler without specifying "multi: true".');
        }
    }
    /**
     * @private
     * @param {?} eventHandlers
     * @return {?}
     */
    checkDomainEventHandlerIsCollection(eventHandlers) {
        if (eventHandlers && !Array.isArray(eventHandlers)) {
            // eslint-disable-next-line no-console
            console.warn('You might provided eventHandler without specifying "multi: true".');
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
    HermesBaseModule.prototype.aggregateDefinitionInitializer;
    /**
     * @type {?}
     * @private
     */
    HermesBaseModule.prototype.commandHandlerInitializer;
    /**
     * @type {?}
     * @private
     */
    HermesBaseModule.prototype.domainEventHandlerInitializer;
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
        super(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi);
    }
    /**
     * @template I, A, C
     * @param {?} aggregateKey
     * @param {?} factory
     * @param {?} repository
     * @param {?} createCommandHandler
     * @param {?=} commandHandlers
     * @param {?=} domainEventHandlers
     * @return {?}
     */
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
                ...HermesModule.registerCreateCommandHandler(createCommandHandler, aggregateKey),
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
/** @nocollapse */
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
    for (const actualEvent of actualEvents) {
        /** @type {?} */
        const expectedEvent = expectedEvents.find((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event.equalsByType(actualEvent);
        }));
        expect(expectedEvent).toBeDefined();
        expect(actualEvent.equalsByType(expectedEvent)).toBeTruthy();
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
    for (const actualEvent of actualEvents) {
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
 * @template T
 * @param {?} createStream
 * @param {?} desc
 * @return {?}
 */
function testEventRepositoryIsEmptyOnStart(createStream, desc) {
    it('should be no ' + desc + ' events on start', (/**
     * @return {?}
     */
    () => {
        expect.assertions(3);
        // given
        /** @type {?} */
        const nextFn = jest.fn();
        /** @type {?} */
        const errorFn = jest.fn();
        /** @type {?} */
        const completeFn = jest.fn();
        // when
        createStream()
            .subscribe((/**
         * @return {?}
         */
        () => nextFn()), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => errorFn(err)), (/**
         * @return {?}
         */
        () => completeFn()));
        // then
        expect(nextFn).not.toHaveBeenCalled();
        expect(errorFn).not.toHaveBeenCalled();
        expect(completeFn).not.toHaveBeenCalled();
    }));
}
/**
 * @template T
 * @param {?} createStream
 * @param {?} defaultValue
 * @param {?} desc
 * @return {?}
 */
function testWarehouseDefaultValueOnStart(createStream, defaultValue, desc) {
    it('should have default value ' + desc, (/**
     * @return {?}
     */
    () => {
        expect.assertions(4);
        // given
        /** @type {?} */
        const nextFn = jest.fn();
        /** @type {?} */
        const errorFn = jest.fn();
        /** @type {?} */
        const completeFn = jest.fn();
        // when
        createStream()
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => nextFn(value)), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => errorFn(err)), (/**
         * @return {?}
         */
        () => completeFn()));
        // then
        expect(nextFn).toHaveBeenCalledWith(defaultValue);
        expect(nextFn).toHaveBeenCalledTimes(1);
        expect(errorFn).not.toHaveBeenCalled();
        expect(completeFn).not.toHaveBeenCalled();
    }));
}
/**
 * @template T
 * @param {?} createStream
 * @param {?} defaultValue
 * @param {?} desc
 * @return {?}
 */
function testWarehouseDefaultValueOnStartOnce(createStream, defaultValue, desc) {
    it('should have default value ' + desc, (/**
     * @return {?}
     */
    () => {
        expect.assertions(4);
        // given
        /** @type {?} */
        const nextFn = jest.fn();
        /** @type {?} */
        const errorFn = jest.fn();
        /** @type {?} */
        const completeFn = jest.fn();
        // when
        createStream()
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => nextFn(value)), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => errorFn(err)), (/**
         * @return {?}
         */
        () => completeFn()));
        // then
        expect(nextFn).toHaveBeenCalledWith(defaultValue);
        expect(nextFn).toHaveBeenCalledTimes(1);
        expect(errorFn).not.toHaveBeenCalled();
        expect(completeFn).toHaveBeenCalledTimes(1);
    }));
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

export { AggregateArchive, AggregateEvent, AggregateEventType, AggregateFactory, AggregateId, AggregateRepository, AggregateRoot, AggregateStore, AggregateStoreRegister, ApiModule, Archive, COMMAND_LOGGER_ENABLED, Command, CommandBus, CommandDispatcher, CommandLogger, CommandStream, CommandType, CreateAggregateCommand, DomainEvent, DomainEventBus, DomainEventLogger, DomainEventPublisher, DomainEventStream, DomainEventType, DomainModule, DomainObject, EVENT_LOGGER_ENABLED, Entity, EntityId, EventDrivenRepository, EventRepository, FeatureModule, HermesApi, HermesArchiveSubject, HermesBehaviorSubject, HermesId, HermesModule, HermesObservable, HermesReplaySubject, HermesSingle, HermesSubject, HermesSubscription, InMemoryAggregateStore, InMemoryReadModelStore, InMemoryStore, KeyMap, Optional, PersistAggregateStore, PersistAnemia, PersistReadModelStore, PersistStateStore, RandomStringGenerator, Reactive, ReactiveService, ReadModelEntity, ReadModelEntityId, ReadModelObject, ReadModelRoot, ReadModelRootId, ReadModelRootRepository, ReadModelStore, ValueObject, assertAggregateEvents, assertDomainEvents, disableHermesLoggers, enableHermesLoggers, fromRxJsObservable, hermesDistinctUntilChanged, hermesEmpty, hermesFilter, hermesFromEvent, hermesInterval, hermesMap, hermesNever, hermesOf, hermesSkip, hermesSwitchMap, hermesTake, hermesTakeUntil, hermesTap, hermesThrowError, hermesTimer, hermesToArray, provideEventHandlers, singleFromObservable, testEventRepositoryIsEmptyOnStart, testWarehouseDefaultValueOnStart, testWarehouseDefaultValueOnStartOnce, toRxJsObservable, commandLoggerFactory as ɵa, eventLoggerFactory as ɵb, createAggregateCommandHandlerFactory as ɵba, CreateAggregateCommandHandlerImpl as ɵbb, HermesBaseModule as ɵc, Logger as ɵd, Message as ɵe, FILTERED_COMMAND_STREAM as ɵf, DomainEventStore as ɵg, KeyArchive as ɵh, DOMAIN_EVENT_HANDLERS as ɵi, CREATE_AGGREGATE_COMMAND_HANDLERS as ɵj, COMMAND_HANDLERS as ɵk, aggregateDefinitionToken as ɵl, AggregateFactoryArchive as ɵn, AggregateRepositoryArchive as ɵo, HermesLoggersInitializer as ɵp, ConsoleCommandLogger as ɵq, NoopCommandLogger as ɵr, ConsoleEventLogger as ɵs, NoopEventLogger as ɵt, HermesDomainModule as ɵu, commandHandlerFactory as ɵv, CommandHandlerImpl as ɵw, domainEventHandlerFactory as ɵx, multiDomainEventHandlerFactory as ɵy, DomainEventHandlerImpl as ɵz };
//# sourceMappingURL=generic-ui-hermes.js.map
