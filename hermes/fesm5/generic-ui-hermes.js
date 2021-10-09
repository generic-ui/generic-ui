import { Injectable, Inject, PLATFORM_ID, InjectionToken, NgModule, Optional as Optional$1, Injector } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { __extends, __values, __spread } from 'tslib';
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
var  /**
 * @abstract
 * @template M
 */
Logger = /** @class */ (function () {
    function Logger() {
    }
    /**
     * @param {?} domainName
     * @return {?}
     */
    Logger.prototype.setDomain = /**
     * @param {?} domainName
     * @return {?}
     */
    function (domainName) {
        this.domainName = domainName;
    };
    /**
     * @param {?} message
     * @return {?}
     */
    Logger.prototype.log = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (this.shouldPrint(message)) {
            this.print(message);
        }
    };
    /**
     * @protected
     * @param {?} message
     * @return {?}
     */
    Logger.prototype.shouldPrint = /**
     * @protected
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (!this.domainName) {
            return true;
        }
        /** @type {?} */
        var log = message.toString();
        return log.includes(this.domainName);
    };
    return Logger;
}());
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
var  /**
 * @abstract
 */
CommandLogger = /** @class */ (function (_super) {
    __extends(CommandLogger, _super);
    function CommandLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CommandLogger;
}(Logger));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
DomainEventLogger = /** @class */ (function (_super) {
    __extends(DomainEventLogger, _super);
    function DomainEventLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DomainEventLogger;
}(Logger));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var hermesApi = 'hermesApi';
var HermesApi = /** @class */ (function () {
    function HermesApi(platformId, commandLogger, eventLogger) {
        this.platformId = platformId;
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var api = (/**
             * @param {?} api
             * @return {?}
             */
            function (api) {
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
    HermesApi.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HermesApi.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: CommandLogger },
        { type: DomainEventLogger }
    ]; };
    return HermesApi;
}());
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
    var winRef = windowObject ? windowObject : window;
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
    var winRef = windowObject ? windowObject : window;
    delete winRef[hermesApi].domain;
    winRef[hermesApi].loggers = false;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DOMAIN_EVENT_HANDLERS = 'HERMES - DOMAIN_EVENT_HANDLERS_TOKEN';

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
    function (handler) {
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
var HermesSubscription = /** @class */ (function () {
    function HermesSubscription(finalize, isClosed) {
        this.closed = false;
        this.finalize = (/**
         * @return {?}
         */
        function () {
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
    HermesSubscription.prototype.unsubscribe = /**
     * @return {?}
     */
    function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.finalize();
    };
    /**
     * @return {?}
     */
    HermesSubscription.prototype.getFinalize = /**
     * @return {?}
     */
    function () {
        return this.finalize;
    };
    return HermesSubscription;
}());
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
var /**
 * @template T
 */
HermesSubscriber = /** @class */ (function () {
    function HermesSubscriber(config) {
        this.finalize = (/**
         * @return {?}
         */
        function () {
        });
        this.completed = false;
        this.closed = false;
        this.observer = config;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    HermesSubscriber.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isCompleted()) {
            return;
        }
        if (this.observer && this.observer.next) {
            this.observer.next(value);
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    HermesSubscriber.prototype.error = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (this.completed) {
            return;
        }
        if (this.observer && this.observer.error) {
            this.observer.error(error);
        }
        this.unsubscribe();
    };
    /**
     * @return {?}
     */
    HermesSubscriber.prototype.complete = /**
     * @return {?}
     */
    function () {
        if (this.completed) {
            return;
        }
        this.completed = true;
        if (this.observer && this.observer.complete) {
            this.observer.complete();
        }
        this.unsubscribe();
    };
    /**
     * @return {?}
     */
    HermesSubscriber.prototype.unsubscribe = /**
     * @return {?}
     */
    function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.completed = true;
        this.finalize();
    };
    /**
     * @param {?} finalize
     * @return {?}
     */
    HermesSubscriber.prototype.setFinalize = /**
     * @param {?} finalize
     * @return {?}
     */
    function (finalize) {
        if (finalize && typeof finalize === 'function') {
            this.finalize = finalize;
        }
        else {
        }
    };
    /**
     * @protected
     * @return {?}
     */
    HermesSubscriber.prototype.isCompleted = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.completed;
    };
    /**
     * @protected
     * @return {?}
     */
    HermesSubscriber.prototype.isClosed = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.closed;
    };
    /**
     * @protected
     * @return {?}
     */
    HermesSubscriber.prototype.getObserver = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.observer;
    };
    return HermesSubscriber;
}());
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
var  /**
 * @template T
 */
HermesObservable = /** @class */ (function () {
    function HermesObservable(generator) {
        this.generatorFn = generator;
    }
    /**
     * @template T, R
     * @param {...?} operations
     * @return {?}
     */
    HermesObservable.prototype.pipe = /**
     * @template T, R
     * @param {...?} operations
     * @return {?}
     */
    function () {
        var e_1, _a;
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        this.source = this;
        try {
            for (var operations_1 = __values(operations), operations_1_1 = operations_1.next(); !operations_1_1.done; operations_1_1 = operations_1.next()) {
                var operation = operations_1_1.value;
                this.source = this.innerPipe(operation, this.source);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (operations_1_1 && !operations_1_1.done && (_a = operations_1.return)) _a.call(operations_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.source;
    };
    /**
     * @private
     * @template T, R
     * @param {?} operation
     * @param {?} stream$
     * @return {?}
     */
    HermesObservable.prototype.innerPipe = /**
     * @private
     * @template T, R
     * @param {?} operation
     * @param {?} stream$
     * @return {?}
     */
    function (operation, stream$) {
        return ((/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            return operation(input);
        }))(stream$);
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    HermesObservable.prototype.subscribe = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        /** @type {?} */
        var subscriber;
        if (arg instanceof HermesSubscriber) {
            subscriber = arg;
        }
        else if (arg !== null && this.isObserver(arg)) {
            var next = arg.next, error = arg.error, complete = arg.complete;
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
    };
    /**
     * @protected
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    HermesObservable.prototype.createSubscriber = /**
     * @protected
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    function (next, error, complete) {
        return new HermesSubscriber({
            next: next,
            error: error,
            complete: complete
        });
    };
    /**
     * @protected
     * @return {?}
     */
    HermesObservable.prototype.getSubscription = /**
     * @protected
     * @return {?}
     */
    function () {
        return new HermesSubscription(this.generatorFinalize);
    };
    /**
     * @private
     * @param {?} observer
     * @return {?}
     */
    HermesObservable.prototype.isObserver = /**
     * @private
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        return typeof observer === 'object';
    };
    return HermesObservable;
}());
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
    function () {
    }), true);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
HermesSubject = /** @class */ (function (_super) {
    __extends(HermesSubject, _super);
    function HermesSubject() {
        var _this = _super.call(this) || this;
        /**
         * After error
         */
        _this.thrownError = null;
        /**
         * After complete
         */
        _this.isCompleted = false;
        /**
         * After unsubscribe
         */
        _this.isClosed = false;
        _this.subscribers = [];
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    HermesSubject.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var e_1, _a;
        this.verifyNotClosed();
        if (this.isCompleted || this.thrownError !== null) {
            return;
        }
        try {
            for (var _b = __values(this.subscribers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var subs = _c.value;
                subs.next(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    HermesSubject.prototype.error = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        var e_2, _a;
        this.verifyNotClosed();
        if (this.isCompleted) {
            return;
        }
        this.thrownError = error;
        try {
            for (var _b = __values(this.subscribers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var subs = _c.value;
                subs.error(error);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.subscribers.length = 0;
    };
    /**
     * @return {?}
     */
    HermesSubject.prototype.complete = /**
     * @return {?}
     */
    function () {
        var e_3, _a;
        this.verifyNotClosed();
        if (this.isCompleted) {
            return;
        }
        this.isCompleted = true;
        try {
            for (var _b = __values(this.subscribers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var subs = _c.value;
                subs.complete();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.subscribers.length = 0;
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    HermesSubject.prototype.subscribe = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        this.verifyNotClosed();
        /** @type {?} */
        var subscriber;
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
    };
    /**
     * @return {?}
     */
    HermesSubject.prototype.unsubscribe = /**
     * @return {?}
     */
    function () {
        this.isCompleted = true;
        this.isClosed = true;
        this.subscribers.length = 0;
    };
    /**
     * @return {?}
     */
    HermesSubject.prototype.toObservable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var subscription = _this.subscribe((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return observer.next(v); }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return observer.error(error); }), (/**
             * @return {?}
             */
            function () { return observer.complete(); }));
            return (/**
             * @return {?}
             */
            function () { return subscription.unsubscribe(); });
        }));
    };
    /**
     * @private
     * @return {?}
     */
    HermesSubject.prototype.verifyNotClosed = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isClosed) {
            throw new Error('Observable already closed');
        }
    };
    return HermesSubject;
}(HermesObservable));
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
var CommandStream = /** @class */ (function (_super) {
    __extends(CommandStream, _super);
    function CommandStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandStream.decorators = [
        { type: Injectable }
    ];
    return CommandStream;
}(HermesSubject));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommandDispatcher = /** @class */ (function () {
    function CommandDispatcher(commandStream) {
        this.commandStream = commandStream;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    CommandDispatcher.prototype.dispatch = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        this.commandStream.next(command);
    };
    CommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CommandDispatcher.ctorParameters = function () { return [
        { type: CommandStream }
    ]; };
    return CommandDispatcher;
}());
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
var RandomStringGenerator = /** @class */ (function () {
    function RandomStringGenerator() {
    }
    /**
     * @return {?}
     */
    RandomStringGenerator.generate = /**
     * @return {?}
     */
    function () {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + ("" + RandomStringGenerator.index++);
    };
    RandomStringGenerator.index = 0;
    RandomStringGenerator.decorators = [
        { type: Injectable }
    ];
    return RandomStringGenerator;
}());
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
var  /**
 * @abstract
 * @template I
 */
Message = /** @class */ (function () {
    function Message(aggregateId, messageType, messageId) {
        if (messageId === void 0) { messageId = RandomStringGenerator.generate(); }
        this.aggregateId = aggregateId;
        this.messageType = messageType;
        this.messageId = messageId;
    }
    /**
     * @return {?}
     */
    Message.prototype.getMessageType = /**
     * @return {?}
     */
    function () {
        return this.messageType;
    };
    /**
     * @return {?}
     */
    Message.prototype.getAggregateId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId;
    };
    /**
     * @return {?}
     */
    Message.prototype.getMessageId = /**
     * @return {?}
     */
    function () {
        return this.messageId;
    };
    /**
     * @return {?}
     */
    Message.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.messageType;
    };
    /**
     * @param {?} message
     * @return {?}
     */
    Message.prototype.equalsByType = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        return this.getMessageType() === message.getMessageType();
    };
    /**
     * @param {?} message
     * @return {?}
     */
    Message.prototype.equals = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        return (this.getMessageType() === message.getMessageType()) && (this.messageId === message.messageId);
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    Message.prototype.ofMessageType = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        var _this = this;
        if (Array.isArray(arg)) {
            /** @type {?} */
            var found = arg.find((/**
             * @param {?} messageType
             * @return {?}
             */
            function (messageType) { return _this.isMessageType(messageType); }));
            return !!found;
        }
        else {
            return this.isMessageType(arg);
        }
    };
    /**
     * @private
     * @param {?} messageType
     * @return {?}
     */
    Message.prototype.isMessageType = /**
     * @private
     * @param {?} messageType
     * @return {?}
     */
    function (messageType) {
        return this.getMessageType() === messageType;
    };
    return Message;
}());
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
var  /**
 * @abstract
 * @template I
 */
Command = /** @class */ (function (_super) {
    __extends(Command, _super);
    function Command() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Command;
}(Message));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MessageType = Function;
// WARNING: interface has both a type and a value, skipping emit

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CommandType = MessageType;
// WARNING: interface has both a type and a value, skipping emit

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, A
 */
var  /**
 * @abstract
 * @template I, A
 */
AggregateFactory = /** @class */ (function () {
    function AggregateFactory() {
    }
    return AggregateFactory;
}());
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
var FILTERED_COMMAND_STREAM = new InjectionToken('FILTERED_COMMAND_STREAM');

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
    var nextFn = next ? next : (/**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        observer.next(v);
    });
    /** @type {?} */
    var completeFn = complete ? complete : (/**
     * @return {?}
     */
    function () {
        observer.complete();
    });
    return new HermesSubscriber({
        next: nextFn,
        error: (/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return observer.error(e); }),
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
        function (v) { return observer.next(v); }),
        error: (/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return observer.error(e); }),
        complete: (/**
         * @return {?}
         */
        function () { return observer.complete(); })
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
    function (source) {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
var CommandBus = /** @class */ (function (_super) {
    __extends(CommandBus, _super);
    function CommandBus(commandsStream) {
        var _this = _super.call(this) || this;
        _this.commandsStream = commandsStream;
        return _this;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    CommandBus.prototype.subscribe = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        return this.commandsStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
    };
    /**
     * @template C2
     * @param {...?} commandTypes
     * @return {?}
     */
    CommandBus.prototype.ofCommand = /**
     * @template C2
     * @param {...?} commandTypes
     * @return {?}
     */
    function () {
        var commandTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            commandTypes[_i] = arguments[_i];
        }
        return ((/** @type {?} */ (this)))
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            return commandTypes.some((/**
             * @param {?} commandType
             * @return {?}
             */
            function (commandType) { return command.ofMessageType(commandType); }));
        })));
    };
    /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    CommandBus.prototype.ofCommandHandler = /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    function () {
        var handlers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            handlers[_i] = arguments[_i];
        }
        return ((/** @type {?} */ (this)))
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                return handler.forCommand(command);
            }));
        })));
    };
    /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    CommandBus.prototype.ofCreateAggregateHandler = /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    function () {
        var handlers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            handlers[_i] = arguments[_i];
        }
        return ((/** @type {?} */ (this)))
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                return handler.forCommand(command);
            }));
        })));
    };
    /**
     * @template C2
     * @param {?} handlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    CommandBus.prototype.ofNullHandler = /**
     * @template C2
     * @param {?} handlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    function (handlers, aggregateCommandHandlers) {
        return ((/** @type {?} */ (this)))
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            if (!handlers && !aggregateCommandHandlers) {
                return true;
            }
            /** @type {?} */
            var foundHandlerForCommand = true;
            if (handlers) {
                foundHandlerForCommand =
                    !handlers.some((/**
                     * @param {?} handler
                     * @return {?}
                     */
                    function (handler) {
                        return handler.forCommand(command);
                    }));
            }
            if (aggregateCommandHandlers) {
                foundHandlerForCommand = foundHandlerForCommand &&
                    !aggregateCommandHandlers.some((/**
                     * @param {?} handler
                     * @return {?}
                     */
                    function (handler) {
                        return handler.forCommand(command);
                    }));
            }
            return foundHandlerForCommand;
        })));
    };
    CommandBus.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CommandBus.ctorParameters = function () { return [
        { type: CommandStream, decorators: [{ type: Inject, args: [FILTERED_COMMAND_STREAM,] }] }
    ]; };
    return CommandBus;
}(HermesObservable));
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
var  /**
 * @abstract
 * @template T
 */
AggregateEvent = /** @class */ (function () {
    function AggregateEvent(aggregateId, type) {
        this.aggregateId = aggregateId;
        this.type = type;
    }
    /**
     * @return {?}
     */
    AggregateEvent.prototype.getAggregateId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId;
    };
    /**
     * @return {?}
     */
    AggregateEvent.prototype.getType = /**
     * @return {?}
     */
    function () {
        return this.type;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AggregateEvent.prototype.equals = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.equalsByType(event) &&
            this.getAggregateId().equals(event.getAggregateId());
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AggregateEvent.prototype.equalsByType = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.getType() === event.getType();
    };
    return AggregateEvent;
}());
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
var AggregateEventType = MessageType;
// WARNING: interface has both a type and a value, skipping emit

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, A
 */
var  /**
 * @abstract
 * @template I, A
 */
AggregateRepository = /** @class */ (function () {
    function AggregateRepository() {
    }
    return AggregateRepository;
}());
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
var  /**
 * @abstract
 * @template I, S
 */
AggregateStore = /** @class */ (function () {
    function AggregateStore() {
    }
    return AggregateStore;
}());
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
var AggregateStoreRegister = /** @class */ (function () {
    function AggregateStoreRegister() {
        this.stores = [];
    }
    /**
     * @param {?} store
     * @return {?}
     */
    AggregateStoreRegister.prototype.register = /**
     * @param {?} store
     * @return {?}
     */
    function (store) {
        this.stores.push(store);
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    AggregateStoreRegister.prototype.captureAggregatesSnapshot = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        if (!aggregateId) {
            return {};
        }
        /** @type {?} */
        var aggregates = {};
        this.stores.forEach((/**
         * @param {?} store
         * @return {?}
         */
        function (store) {
            /** @type {?} */
            var aggregate = store.findById(aggregateId);
            if (aggregate) {
                /** @type {?} */
                var aggregateName = aggregate.constructor.name;
                aggregates[aggregateName] = aggregate;
            }
        }));
        return this.cloneAggregates(aggregates);
    };
    /**
     * @private
     * @param {?} aggregates
     * @return {?}
     */
    AggregateStoreRegister.prototype.cloneAggregates = /**
     * @private
     * @param {?} aggregates
     * @return {?}
     */
    function (aggregates) {
        // return JSON.parse(JSON.stringify(aggregates));
        return aggregates;
    };
    return AggregateStoreRegister;
}());
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
var  /**
 * @abstract
 * @template I
 */
AggregateRoot = /** @class */ (function () {
    function AggregateRoot(aggregateId, type) {
        this.type = type;
        this.aggregateId = aggregateId;
        this.events = [];
    }
    /**
     * @return {?}
     */
    AggregateRoot.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId;
    };
    /**
     * @return {?}
     */
    AggregateRoot.prototype.getType = /**
     * @return {?}
     */
    function () {
        return this.type;
    };
    /**
     * @return {?}
     */
    AggregateRoot.prototype.getEvents = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.events));
    };
    /**
     * @param {?} args
     * @return {?}
     */
    AggregateRoot.prototype.addEvent = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var e_1, _a;
        if (Array.isArray(args)) {
            try {
                for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                    var event_1 = args_1_1.value;
                    this.events.push(event_1);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            this.events.push((/** @type {?} */ (args)));
        }
    };
    /**
     * @return {?}
     */
    AggregateRoot.prototype.clearEvents = /**
     * @return {?}
     */
    function () {
        this.events.length = 0;
    };
    /**
     * @param {?} aggregate
     * @return {?}
     */
    AggregateRoot.prototype.equals = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        return aggregate.getId().toString() === this.getId().toString();
    };
    return AggregateRoot;
}());
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
var  /**
 * @abstract
 * @template T
 */
HermesId = /** @class */ (function () {
    function HermesId(uid) {
        this.uid = uid;
    }
    /**
     * @return {?}
     */
    HermesId.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.uid;
    };
    /**
     * @param {?} hermesId
     * @return {?}
     */
    HermesId.prototype.equals = /**
     * @param {?} hermesId
     * @return {?}
     */
    function (hermesId) {
        return this.uid === hermesId.getId();
    };
    return HermesId;
}());
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
var  /**
 * @abstract
 */
AggregateId = /** @class */ (function (_super) {
    __extends(AggregateId, _super);
    function AggregateId(uid) {
        return _super.call(this, uid) || this;
    }
    /**
     * @return {?}
     */
    AggregateId.prototype.toString = /**
     * @return {?}
     */
    function () {
        return _super.prototype.getId.call(this);
    };
    return AggregateId;
}(HermesId));
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
var  /**
 * @abstract
 * @template I
 */
DomainEvent = /** @class */ (function (_super) {
    __extends(DomainEvent, _super);
    function DomainEvent(aggregateId, payload, messageType) {
        var _this = _super.call(this, aggregateId, messageType) || this;
        _this.payload = payload;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DomainEvent.prototype.isSameType = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.constructor.name === event.constructor.name;
    };
    /**
     * @return {?}
     */
    DomainEvent.prototype.getPayload = /**
     * @return {?}
     */
    function () {
        return this.payload;
    };
    return DomainEvent;
}(Message));
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
function hermesOf() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        args.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
    function (observer) {
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
    function (source) {
        if (valuesNumber === 0) {
            return hermesEmpty();
        }
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var index = 0;
            /** @type {?} */
            var subscriber = new HermesSubscriber({
                next: (/**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) {
                }),
                error: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return observer.error(e); }),
                complete: (/**
                 * @return {?}
                 */
                function () { return observer.complete(); })
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
            var subscription = source.subscribe(subscriber);
            return subscription.getFinalize();
        }));
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DomainEventStore = /** @class */ (function () {
    function DomainEventStore() {
        this.domainEvents = [];
        this.domainEvents$ = new HermesSubject();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DomainEventStore.prototype.next = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.domainEvents.push(event);
        this.domainEvents$.next(event);
    };
    /**
     * @param {?} eventType
     * @return {?}
     */
    DomainEventStore.prototype.findEventByType = /**
     * @param {?} eventType
     * @return {?}
     */
    function (eventType) {
        /** @type {?} */
        var events = this.getEvents();
        return events.reverse()
            .find((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.constructor.name === eventType;
        }));
    };
    /**
     * First tries to event event in the history,
     * than method waits for future occurrences of the event.
     */
    /**
     * First tries to event event in the history,
     * than method waits for future occurrences of the event.
     * @param {?} eventType
     * @return {?}
     */
    DomainEventStore.prototype.waitForEvent = /**
     * First tries to event event in the history,
     * than method waits for future occurrences of the event.
     * @param {?} eventType
     * @return {?}
     */
    function (eventType) {
        // find in a history
        /** @type {?} */
        var event = this.findEventByType(eventType);
        if (event) {
            return hermesOf(event);
        }
        // wait for future occurrence
        return this.waitForNextEventOccurrence(eventType);
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    DomainEventStore.prototype.waitForNextEventOccurrence = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        /** @type {?} */
        var eventType;
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
            function (observer) {
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
        function (event) { return event.constructor.name === eventType; })), hermesTake(1));
    };
    /**
     * @private
     * @return {?}
     */
    DomainEventStore.prototype.getEvents = /**
     * @private
     * @return {?}
     */
    function () {
        return this.domainEvents;
    };
    DomainEventStore.decorators = [
        { type: Injectable }
    ];
    return DomainEventStore;
}());
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
var DomainEventStream = /** @class */ (function (_super) {
    __extends(DomainEventStream, _super);
    function DomainEventStream(eventStore) {
        var _this = _super.call(this) || this;
        _this.eventStore = eventStore;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DomainEventStream.prototype.next = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        _super.prototype.next.call(this, event);
        this.eventStore.next(event);
    };
    DomainEventStream.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DomainEventStream.ctorParameters = function () { return [
        { type: DomainEventStore }
    ]; };
    return DomainEventStream;
}(HermesSubject));
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
var DomainEventPublisher = /** @class */ (function () {
    function DomainEventPublisher(eventStream) {
        this.eventStream = eventStream;
    }
    /**
     * @param {?} args
     * @return {?}
     */
    DomainEventPublisher.prototype.publish = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var e_1, _a;
        if (Array.isArray(args)) {
            try {
                for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                    var arg = args_1_1.value;
                    this.publishEvent(arg);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else if (args instanceof DomainEvent) {
            this.publishEvent(args);
        }
    };
    /**
     * @param {?} aggregate
     * @return {?}
     */
    DomainEventPublisher.prototype.publishFromAggregate = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        var _this = this;
        aggregate.getEvents()
            .forEach((/**
         * @param {?} aggregateEvent
         * @return {?}
         */
        function (aggregateEvent) {
            _this.publish(aggregateEvent.toDomainEvent());
        }));
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DomainEventPublisher.prototype.publishEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!event) {
            // eslint-disable-next-line no-console
            console.error(event + " is not defined");
        }
        if (!(event instanceof DomainEvent)) {
            // throw new Error(`${event} is not a DomainEvent`);
            // eslint-disable-next-line no-console
            console.error(event + " is not a DomainEvent");
        }
        this.eventStream.next(event);
    };
    DomainEventPublisher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DomainEventPublisher.ctorParameters = function () { return [
        { type: DomainEventStream }
    ]; };
    return DomainEventPublisher;
}());
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
var DomainEventBus = /** @class */ (function (_super) {
    __extends(DomainEventBus, _super);
    function DomainEventBus(eventStream) {
        var _this = _super.call(this) || this;
        _this.eventStream = eventStream;
        return _this;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    DomainEventBus.prototype.subscribe = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        return this.eventStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
    };
    /**
     * @template E2
     * @param {...?} events
     * @return {?}
     */
    DomainEventBus.prototype.ofEvent = /**
     * @template E2
     * @param {...?} events
     * @return {?}
     */
    function () {
        var _this = this;
        var events = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            events[_i] = arguments[_i];
        }
        return ((/** @type {?} */ (this)))
            .eventStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} domainEvent
         * @return {?}
         */
        function (domainEvent) {
            return events.some((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var eventInstance = _this.createEventInstance(event);
                return eventInstance.equalsByType(domainEvent);
            }));
        })));
    };
    /**
     * @template E2
     * @param {...?} handlers
     * @return {?}
     */
    DomainEventBus.prototype.ofEventHandler = /**
     * @template E2
     * @param {...?} handlers
     * @return {?}
     */
    function () {
        var handlers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            handlers[_i] = arguments[_i];
        }
        return ((/** @type {?} */ (this)))
            .eventStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) { return handler.forEvents([event]); }));
        })));
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DomainEventBus.prototype.createEventInstance = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var argumentLength = event.constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new (((/** @type {?} */ (event))).bind.apply(((/** @type {?} */ (event))), __spread([void 0], args)))());
    };
    DomainEventBus.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DomainEventBus.ctorParameters = function () { return [
        { type: DomainEventStream }
    ]; };
    return DomainEventBus;
}(HermesObservable));
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
var DomainEventType = MessageType;
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
    function (source) {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var subscriber = subscriberFromObserver(observer);
            /** @type {?} */
            var notifierSubscriber = new HermesSubscriber({
                next: (/**
                 * @return {?}
                 */
                function () { return subscriber.complete(); })
            });
            notifier.subscribe(notifierSubscriber);
            /** @type {?} */
            var subscription = source.subscribe(subscriber);
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
    function (observer) {
        /** @type {?} */
        var subscription = source$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return observer.next(value); }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return observer.error(error); }), (/**
         * @return {?}
         */
        function () { return observer.complete(); }));
        return (/**
         * @return {?}
         */
        function () { return subscription.unsubscribe(); });
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
Reactive = /** @class */ (function () {
    function Reactive() {
        this.hermesUnsubscribe$ = new HermesSubject();
    }
    /**
     * @return {?}
     */
    Reactive.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hermesUnsubscribe();
    };
    /**
     * @protected
     * @template T
     * @return {?}
     */
    Reactive.prototype.takeUntil = /**
     * @protected
     * @template T
     * @return {?}
     */
    function () {
        return takeUntil(toRxJsObservable(this.hermesUnsubscribe$));
    };
    /**
     * @protected
     * @return {?}
     */
    Reactive.prototype.hermesUnsubscribe = /**
     * @protected
     * @return {?}
     */
    function () {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    };
    /**
     * @protected
     * @return {?}
     */
    Reactive.prototype.hermesTakeUntil = /**
     * @protected
     * @return {?}
     */
    function () {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    };
    /**
     * @protected
     * @return {?}
     */
    Reactive.prototype.isNotStopped = /**
     * @protected
     * @return {?}
     */
    function () {
        return !((/** @type {?} */ (this.hermesUnsubscribe$))).isCompleted;
    };
    return Reactive;
}());
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
var  /**
 * @abstract
 */
ReactiveService = /** @class */ (function (_super) {
    __extends(ReactiveService, _super);
    function ReactiveService() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    ReactiveService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hermesUnsubscribe();
    };
    return ReactiveService;
}(Reactive));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
Optional = /** @class */ (function () {
    function Optional(value) {
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
    Optional.empty = /**
     * @return {?}
     */
    function () {
        return new Optional(null);
    };
    /**
     * @template U
     * @param {?} value
     * @return {?}
     */
    Optional.of = /**
     * @template U
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return new Optional(value);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    Optional.isValueEmpty = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'undefined' || value === null;
    };
    /**
     * @return {?}
     */
    Optional.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return Optional.isValueEmpty(this.value);
    };
    /**
     * @return {?}
     */
    Optional.prototype.isPresent = /**
     * @return {?}
     */
    function () {
        return !this.isEmpty();
    };
    /**
     * @param {?} filterer
     * @return {?}
     */
    Optional.prototype.filter = /**
     * @param {?} filterer
     * @return {?}
     */
    function (filterer) {
        if (this.isPresent() && filterer(this.value)) {
            return this;
        }
        return Optional.empty();
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    Optional.prototype.forEach = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        if (this.isPresent()) {
            callback(this.value);
        }
    };
    /**
     * @template U
     * @param {?} mapper
     * @return {?}
     */
    Optional.prototype.map = /**
     * @template U
     * @param {?} mapper
     * @return {?}
     */
    function (mapper) {
        if (this.isPresent()) {
            return new Optional(mapper(this.value));
        }
        return Optional.empty();
    };
    /**
     * @deprecated
     */
    /**
     * @deprecated
     * @return {?}
     */
    Optional.prototype.getValueOrNullOrThrowError = /**
     * @deprecated
     * @return {?}
     */
    function () {
        return this.value;
    };
    /**
     * @return {?}
     */
    Optional.prototype.getOrThrow = /**
     * @return {?}
     */
    function () {
        if (this.isEmpty()) {
            throw new Error('Called getOrThrow on an empty Optional');
        }
        return this.value;
    };
    /**
     * @template U
     * @param {?} other
     * @return {?}
     */
    Optional.prototype.getOrElse = /**
     * @template U
     * @param {?} other
     * @return {?}
     */
    function (other) {
        if (this.isPresent()) {
            return this.value;
        }
        return other();
    };
    /**
     * @param {?} method
     * @return {?}
     */
    Optional.prototype.ifPresent = /**
     * @param {?} method
     * @return {?}
     */
    function (method) {
        if (this.isPresent()) {
            method(this.value);
        }
    };
    /**
     * @param {?} method
     * @return {?}
     */
    Optional.prototype.ifEmpty = /**
     * @param {?} method
     * @return {?}
     */
    function (method) {
        if (this.isEmpty()) {
            method();
        }
    };
    /**
     * @template U
     * @param {?} other
     * @return {?}
     */
    Optional.prototype.orElse = /**
     * @template U
     * @param {?} other
     * @return {?}
     */
    function (other) {
        if (this.isPresent()) {
            return this;
        }
        return other();
    };
    return Optional;
}());
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
var  /**
 * @template K, T
 */
KeyMap = /** @class */ (function () {
    function KeyMap() {
        this.keys = new Map();
        this.values = new WeakMap();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    KeyMap.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var internalKey = this.getInternalKey(key);
        if (internalKey !== undefined) {
            return Optional.of(this.values.get(internalKey));
        }
        else {
            return Optional.empty();
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    KeyMap.prototype.has = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var internalKey = this.getInternalKey(key);
        return this.values.has(internalKey);
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    KeyMap.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.keys.set(key.toString(), key);
        this.values.set(key, value);
    };
    /**
     * @return {?}
     */
    KeyMap.prototype.size = /**
     * @return {?}
     */
    function () {
        return this.keys.size;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    KeyMap.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this.hasInternalKey(key)) {
            this.keys.delete(key.toString());
            this.values.delete(key);
        }
    };
    /**
     * @return {?}
     */
    KeyMap.prototype.removeAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.keys.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.values.delete(value);
        }));
        this.keys.clear();
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    KeyMap.prototype.getInternalKey = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.keys.get(key.toString());
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    KeyMap.prototype.hasInternalKey = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.keys.has(key.toString());
    };
    return KeyMap;
}());
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
    function (source) {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var index = 0;
            /** @type {?} */
            var subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
    var compare = compareFn ? compareFn : defaultCompareFn;
    return (/**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var previousValue = null;
            /** @type {?} */
            var subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
var  /**
 * @template T
 */
HermesBehaviorSubject = /** @class */ (function (_super) {
    __extends(HermesBehaviorSubject, _super);
    function HermesBehaviorSubject(defaultValue) {
        var _this = _super.call(this) || this;
        _this.lastValue = defaultValue;
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    HermesBehaviorSubject.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.lastValue = value;
        _super.prototype.next.call(this, value);
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    HermesBehaviorSubject.prototype.subscribe = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        /** @type {?} */
        var subscription = _super.prototype.subscribe.call(this, arguments[0], arguments[1], arguments[2]);
        _super.prototype.next.call(this, this.lastValue);
        return subscription;
    };
    return HermesBehaviorSubject;
}(HermesSubject));
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
var  /**
 * @template T
 */
HermesReplaySubject = /** @class */ (function (_super) {
    __extends(HermesReplaySubject, _super);
    function HermesReplaySubject(bufferSize) {
        if (bufferSize === void 0) { bufferSize = 1; }
        var _this = _super.call(this) || this;
        _this.bufferSize = bufferSize;
        _this.values = [];
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    HermesReplaySubject.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.values.push(value);
        if (this.bufferSize < this.values.length) {
            this.values.shift();
        }
        _super.prototype.next.call(this, value);
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    HermesReplaySubject.prototype.subscribe = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        var e_1, _a;
        /** @type {?} */
        var subscriber;
        if (arg instanceof HermesSubscriber) {
            subscriber = arg;
        }
        else {
            subscriber = this.createSubscriber(arguments[0], arguments[1], arguments[2]);
        }
        /** @type {?} */
        var subscription = _super.prototype.subscribe.call(this, subscriber);
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                subscriber.next(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return subscription;
    };
    return HermesReplaySubject;
}(HermesSubject));
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
var  /**
 * @template T
 */
HermesArchiveSubject = /** @class */ (function (_super) {
    __extends(HermesArchiveSubject, _super);
    function HermesArchiveSubject() {
        return _super.call(this) || this;
    }
    /**
     * @template T
     * @param {?=} value
     * @return {?}
     */
    HermesArchiveSubject.of = /**
     * @template T
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return new HermesBehaviorSubject(value);
        }
        else {
            return new HermesReplaySubject(1);
        }
    };
    return HermesArchiveSubject;
}(HermesSubject));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template K, T
 */
var  /**
 * @abstract
 * @template K, T
 */
KeyArchive = /** @class */ (function (_super) {
    __extends(KeyArchive, _super);
    function KeyArchive(defaultValue) {
        var _this = _super.call(this) || this;
        _this.archive = new KeyMap();
        _this.defaultValue = Optional.empty();
        _this.archive$ = HermesArchiveSubject.of();
        if (defaultValue !== undefined && defaultValue !== null) {
            _this.defaultValue = Optional.of(defaultValue);
        }
        return _this;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    KeyArchive.prototype.on = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        this.tryToInitDefault(key);
        return this.archive$
            .toObservable()
            .pipe(hermesFilter((/**
         * @return {?}
         */
        function () { return _this.isNotStopped(); })), hermesMap((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(key);
        })), hermesFilter((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value.isPresent(); })), hermesMap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value.getValueOrNullOrThrowError(); })), hermesDistinctUntilChanged(), this.hermesTakeUntil());
    };
    /**
     * @param {?} key
     * @return {?}
     */
    KeyArchive.prototype.once = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.on(key)
            .pipe(hermesTake(1));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    KeyArchive.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.tryToInitDefault(key);
        return this.archive.get(key);
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    KeyArchive.prototype.next = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.archive.set(key, value);
        this.archive$.next(this.archive);
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    KeyArchive.prototype.tryToInitDefault = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        this.defaultValue
            .ifPresent((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!_this.archive.has(key)) {
                _this.next(key, value);
            }
        }));
    };
    return KeyArchive;
}(ReactiveService));
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
var  /**
 * @abstract
 * @template T
 */
AggregateArchive = /** @class */ (function (_super) {
    __extends(AggregateArchive, _super);
    function AggregateArchive(defaultValue) {
        return _super.call(this, defaultValue) || this;
    }
    return AggregateArchive;
}(KeyArchive));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I, E, V
 */
var  /**
 * @abstract
 * @template I, E, V
 */
EventDrivenRepository = /** @class */ (function (_super) {
    __extends(EventDrivenRepository, _super);
    function EventDrivenRepository(defaultValues) {
        return _super.call(this, defaultValues) || this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    EventDrivenRepository.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.next(event.getAggregateId(), event.getPayload());
    };
    return EventDrivenRepository;
}(AggregateArchive));
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
var  /**
 * @abstract
 * @template T
 */
ReadModelEntity = /** @class */ (function () {
    function ReadModelEntity(gui) {
        this.entityId = gui;
    }
    /**
     * @return {?}
     */
    ReadModelEntity.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.entityId;
    };
    return ReadModelEntity;
}());
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
var ReadModelEntityId = /** @class */ (function () {
    function ReadModelEntityId(uid) {
        this.uid = uid;
    }
    /**
     * @return {?}
     */
    ReadModelEntityId.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.uid;
    };
    /**
     * @return {?}
     */
    ReadModelEntityId.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.uid;
    };
    /**
     * @param {?} entityId
     * @return {?}
     */
    ReadModelEntityId.prototype.equals = /**
     * @param {?} entityId
     * @return {?}
     */
    function (entityId) {
        return this.uid === entityId.getId();
    };
    return ReadModelEntityId;
}());
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
var  /**
 * @abstract
 * @template T
 */
ReadModelRoot = /** @class */ (function () {
    function ReadModelRoot(gui) {
        this.rootId = gui;
    }
    /**
     * @return {?}
     */
    ReadModelRoot.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.rootId;
    };
    return ReadModelRoot;
}());
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
var  /**
 * @abstract
 */
ReadModelRootId = /** @class */ (function () {
    function ReadModelRootId(uid) {
        this.uid = uid;
    }
    /**
     * @return {?}
     */
    ReadModelRootId.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.uid;
    };
    /**
     * @return {?}
     */
    ReadModelRootId.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.uid;
    };
    /**
     * @param {?} entityId
     * @return {?}
     */
    ReadModelRootId.prototype.equals = /**
     * @param {?} entityId
     * @return {?}
     */
    function (entityId) {
        return this.uid === entityId.getId();
    };
    return ReadModelRootId;
}());
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
var  /**
 * @abstract
 * @template I
 */
ReadModelRootRepository = /** @class */ (function (_super) {
    __extends(ReadModelRootRepository, _super);
    function ReadModelRootRepository(domainEventBus) {
        var _this = _super.call(this) || this;
        domainEventBus
            .ofEvent.apply(domainEventBus, __spread(_this.forEvents())).pipe(_this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            try {
                _this.subscribe(event);
            }
            catch (e) {
                // eslint-disable-next-line no-console
                console.error(e);
            }
        }));
        return _this;
    }
    return ReadModelRootRepository;
}(Reactive));
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
var  /**
 * @abstract
 * @template I, R
 */
ReadModelStore = /** @class */ (function () {
    function ReadModelStore() {
    }
    return ReadModelStore;
}());
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
var  /**
 * @abstract
 * @template R, I
 */
EventRepository = /** @class */ (function (_super) {
    __extends(EventRepository, _super);
    function EventRepository(domainEventBus) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        return _this;
    }
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} eventType
     * @return {?}
     */
    EventRepository.prototype.onEvent = /**
     * @protected
     * @param {?} aggregateId
     * @param {?} eventType
     * @return {?}
     */
    function (aggregateId, eventType) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (eventType)))
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === aggregateId.toString(); })));
    };
    return EventRepository;
}(ReactiveService));
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
var  /**
 * @abstract
 * @template T
 */
Entity = /** @class */ (function () {
    function Entity(id) {
        this.entityId = id;
    }
    /**
     * @return {?}
     */
    Entity.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.entityId;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    Entity.prototype.equals = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.entityId.equals(entity.getId());
    };
    return Entity;
}());
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
var  /**
 * @abstract
 * @template T
 */
EntityId = /** @class */ (function (_super) {
    __extends(EntityId, _super);
    function EntityId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EntityId;
}(HermesId));

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
var  /**
 * @abstract
 */
DomainModule = /** @class */ (function () {
    function DomainModule() {
    }
    return DomainModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    return ApiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
FeatureModule = /** @class */ (function () {
    function FeatureModule() {
    }
    return FeatureModule;
}());

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
    function (observer) {
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
    var counter = 0;
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        /** @type {?} */
        var id = setInterval((/**
         * @return {?}
         */
        function () {
            observer.next(counter++);
        }), interval);
        return (/**
         * @return {?}
         */
        function () {
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
    function (observer) {
        /** @type {?} */
        var id = setTimeout((/**
         * @return {?}
         */
        function () {
            observer.next(0);
        }), time);
        return (/**
         * @return {?}
         */
        function () {
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
    function (observer) {
        /** @type {?} */
        var listener = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            observer.next(event);
        });
        element.addEventListener(type, listener);
        return (/**
         * @return {?}
         */
        function () {
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
var /**
 * @template T
 */
HermesSingleSubscriber = /** @class */ (function (_super) {
    __extends(HermesSingleSubscriber, _super);
    function HermesSingleSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    HermesSingleSubscriber.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isCompleted()) {
            return;
        }
        /** @type {?} */
        var observer = this.getObserver();
        if (observer && observer.next) {
            observer.next(value);
            this.complete();
        }
    };
    return HermesSingleSubscriber;
}(HermesSubscriber));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
HermesSingle = /** @class */ (function (_super) {
    __extends(HermesSingle, _super);
    function HermesSingle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    HermesSingle.prototype.createSubscriber = /**
     * @protected
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    function (next, error, complete) {
        return new HermesSingleSubscriber({
            next: next,
            error: error,
            complete: complete
        });
    };
    return HermesSingle;
}(HermesObservable));

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
    function (observer) {
        /** @type {?} */
        var subscriber = new HermesSubscriber({
            next: (/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return observer.next(value); }),
            error: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return observer.error(error); }),
            complete: (/**
             * @return {?}
             */
            function () {
            })
        });
        /** @type {?} */
        var subscription = source.subscribe(subscriber);
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
    function (observer) {
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
    function (source) {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var index = 0;
            /** @type {?} */
            var subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
    function (source) {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var isOuterCompleted = false;
            /** @type {?} */
            var innerSubscriber = null;
            /** @type {?} */
            var tryToComplete = (/**
             * @return {?}
             */
            function () {
                if (isOuterCompleted && !innerSubscriber) {
                    observer.complete();
                }
            });
            /** @type {?} */
            var outerSubscriber = subscriberForOperator(observer, (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                if (innerSubscriber) {
                    innerSubscriber.unsubscribe();
                }
                /** @type {?} */
                var subscriber = new HermesSubscriber({
                    next: (/**
                     * @param {?} v2
                     * @return {?}
                     */
                    function (v2) { return observer.next(v2); }),
                    error: (/**
                     * @param {?} e
                     * @return {?}
                     */
                    function (e) { return observer.error(e); }),
                    complete: (/**
                     * @return {?}
                     */
                    function () {
                        innerSubscriber = null;
                        tryToComplete();
                    })
                });
                innerSubscriber = subscriber;
                /** @type {?} */
                var innerSubscription = operation(v).subscribe(subscriber);
                return innerSubscription.getFinalize();
            }), (/**
             * @return {?}
             */
            function () {
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
    function (source) {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
    function (source) {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var values = [];
            /** @type {?} */
            var subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                values.push(value);
            }), (/**
             * @return {?}
             */
            function () {
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
    function (observer) {
        /** @type {?} */
        var subscription = source$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return observer.next(value); }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return observer.error(error); }), (/**
         * @return {?}
         */
        function () { return observer.complete(); }));
        return (/**
         * @return {?}
         */
        function () { return subscription.unsubscribe(); });
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
var  /**
 * @abstract
 * @template T
 */
Archive = /** @class */ (function () {
    function Archive(value) {
        this.archive$ = HermesArchiveSubject.of(value);
    }
    /**
     * @return {?}
     */
    Archive.prototype.on = /**
     * @return {?}
     */
    function () {
        return this.archive$
            .toObservable()
            .pipe(hermesDistinctUntilChanged(this.compare));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Archive.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.archive$.next(value);
    };
    /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    Archive.prototype.compare = /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    function (one, two) {
        return one === two;
    };
    return Archive;
}());
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
var  /**
 * @abstract
 * @template I
 */
PersistAnemia = /** @class */ (function () {
    function PersistAnemia(uid) {
        this.readModelRootId = uid;
    }
    /**
     * @return {?}
     */
    PersistAnemia.prototype.getReadModelRootId = /**
     * @return {?}
     */
    function () {
        return this.readModelRootId;
    };
    /**
     * @return {?}
     */
    PersistAnemia.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.getReadModelRootId().toString();
    };
    return PersistAnemia;
}());
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
var  /**
 * @abstract
 * @template I, A
 */
PersistStateStore = /** @class */ (function () {
    function PersistStateStore() {
        this.state = new Map();
    }
    /**
     * @param {?} anemia
     * @return {?}
     */
    PersistStateStore.prototype.set = /**
     * @param {?} anemia
     * @return {?}
     */
    function (anemia) {
        this.state.set(anemia.getId(), anemia);
    };
    /**
     * @param {?} anemias
     * @return {?}
     */
    PersistStateStore.prototype.setMany = /**
     * @param {?} anemias
     * @return {?}
     */
    function (anemias) {
        var _this = this;
        anemias.forEach((/**
         * @param {?} anemia
         * @return {?}
         */
        function (anemia) {
            _this.set(anemia);
        }));
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    PersistStateStore.prototype.get = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return Optional.of(this.state.get(aggregateId.toString()));
    };
    /**
     * @return {?}
     */
    PersistStateStore.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return Array.from(this.state.values());
    };
    /**
     * @return {?}
     */
    PersistStateStore.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.state.clear();
    };
    return PersistStateStore;
}());
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
var  /**
 * @abstract
 * @template I, R, A
 */
PersistReadModelStore = /** @class */ (function (_super) {
    __extends(PersistReadModelStore, _super);
    function PersistReadModelStore(stateStore) {
        var _this = _super.call(this) || this;
        _this.stateStore = stateStore;
        return _this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    PersistReadModelStore.prototype.getById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.getValue(aggregateId);
    };
    /**
     * @return {?}
     */
    PersistReadModelStore.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this.getAllValues();
    };
    /**
     * @private
     * @return {?}
     */
    PersistReadModelStore.prototype.getAllValues = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.stateStore
            .getAll()
            .map((/**
         * @param {?} anemia
         * @return {?}
         */
        function (anemia) { return _this.toReadModel(anemia); }));
    };
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    PersistReadModelStore.prototype.getValue = /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        /** @type {?} */
        var optAnemia = this.stateStore.get(aggregateId);
        return optAnemia.map(this.toReadModel);
    };
    return PersistReadModelStore;
}(ReadModelStore));
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
var  /**
 * @abstract
 * @template I, D, A
 */
PersistAggregateStore = /** @class */ (function (_super) {
    __extends(PersistAggregateStore, _super);
    function PersistAggregateStore(stateStore, aggregateStoreRegister) {
        var _this = _super.call(this) || this;
        _this.stateStore = stateStore;
        _this.aggregateStoreRegister = aggregateStoreRegister;
        _this.aggregateStoreRegister.register(_this);
        return _this;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    PersistAggregateStore.prototype.save = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        this.saveValue(aggregate);
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    PersistAggregateStore.prototype.findById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.getValue(aggregateId);
    };
    /**
     * @private
     * @param {?} aggregate
     * @return {?}
     */
    PersistAggregateStore.prototype.saveValue = /**
     * @private
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        /** @type {?} */
        var anemia = this.toAnemia(aggregate);
        this.stateStore.set(anemia);
    };
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    PersistAggregateStore.prototype.getValue = /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        /** @type {?} */
        var optAnemia = this.stateStore.get(aggregateId);
        return optAnemia.map(this.fromAnemia);
    };
    return PersistAggregateStore;
}(AggregateStore));
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
var  /**
 * @abstract
 * @template I, T
 */
InMemoryAggregateStore = /** @class */ (function (_super) {
    __extends(InMemoryAggregateStore, _super);
    function InMemoryAggregateStore(inMemoryStore, aggregateStoreRegister) {
        var _this = _super.call(this) || this;
        _this.inMemoryStore = inMemoryStore;
        _this.aggregateStoreRegister = aggregateStoreRegister;
        _this.aggregateStoreRegister.register(_this);
        return _this;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    InMemoryAggregateStore.prototype.save = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        var _this = this;
        if (Array.isArray(arg)) {
            arg.forEach((/**
             * @param {?} aggregate
             * @return {?}
             */
            function (aggregate) {
                _this.inMemoryStore.set(aggregate);
            }));
        }
        else {
            /** @type {?} */
            var aggregate = arg;
            this.inMemoryStore.set(aggregate);
        }
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryAggregateStore.prototype.findById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        /** @type {?} */
        var optAggregate = this.inMemoryStore.get(aggregateId);
        optAggregate.ifPresent((/**
         * @param {?} a
         * @return {?}
         */
        function (a) { return a.clearEvents(); }));
        return optAggregate;
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryAggregateStore.prototype.remove = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        this.inMemoryStore.delete(aggregateId);
    };
    return InMemoryAggregateStore;
}(AggregateStore));
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
var  /**
 * @abstract
 * @template I, R, B, A
 */
InMemoryReadModelStore = /** @class */ (function (_super) {
    __extends(InMemoryReadModelStore, _super);
    function InMemoryReadModelStore(inMemoryStore) {
        var _this = _super.call(this) || this;
        _this.inMemoryStore = inMemoryStore;
        return _this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryReadModelStore.prototype.getById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.getValue(aggregateId);
    };
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryReadModelStore.prototype.getValue = /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        /** @type {?} */
        var optAggregate = this.inMemoryStore.get(aggregateId);
        return optAggregate.map(this.toReadModel.bind(this));
    };
    return InMemoryReadModelStore;
}(ReadModelStore));
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
var  /**
 * @abstract
 * @template I, A
 */
InMemoryStore = /** @class */ (function () {
    function InMemoryStore() {
        this.state = new Map();
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryStore.prototype.set = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        this.state.set(aggregate.getId().toString(), aggregate);
    };
    /**
     * @param {?} aggregates
     * @return {?}
     */
    InMemoryStore.prototype.setMany = /**
     * @param {?} aggregates
     * @return {?}
     */
    function (aggregates) {
        var _this = this;
        aggregates.forEach((/**
         * @param {?} aggregate
         * @return {?}
         */
        function (aggregate) {
            _this.set(aggregate);
        }));
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryStore.prototype.get = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return Optional.of(this.state.get(aggregateId.toString()));
    };
    /**
     * @return {?}
     */
    InMemoryStore.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return Array.from(this.state.values()).map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return Optional.of(v); }));
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryStore.prototype.has = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.state.has(aggregateId.toString());
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryStore.prototype.delete = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        this.state.delete(aggregateId.toString());
    };
    /**
     * @return {?}
     */
    InMemoryStore.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.state.clear();
    };
    return InMemoryStore;
}());
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
var COMMAND_LOGGER_ENABLED = 'GUI - COMMAND_LOGGER_ENABLED';
/** @type {?} */
var EVENT_LOGGER_ENABLED = 'GUI - EVENT_LOGGER_ENABLED';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConsoleCommandLogger = /** @class */ (function (_super) {
    __extends(ConsoleCommandLogger, _super);
    function ConsoleCommandLogger(commandBus) {
        var _this = _super.call(this) || this;
        _this.enabled = false;
        _this.unsubscribe$ = new HermesSubject();
        commandBus
            .pipe(hermesFilter((/**
         * @return {?}
         */
        function () { return _this.enabled; })), hermesTakeUntil(_this.unsubscribe$))
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            _this.log(command);
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    ConsoleCommandLogger.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @return {?}
     */
    ConsoleCommandLogger.prototype.start = /**
     * @return {?}
     */
    function () {
        this.enabled = true;
    };
    /**
     * @return {?}
     */
    ConsoleCommandLogger.prototype.stop = /**
     * @return {?}
     */
    function () {
        this.enabled = false;
    };
    /**
     * @protected
     * @param {?} command
     * @return {?}
     */
    ConsoleCommandLogger.prototype.print = /**
     * @protected
     * @param {?} command
     * @return {?}
     */
    function (command) {
        // eslint-disable-next-line no-console
        console.log(command.toString(), command);
    };
    ConsoleCommandLogger.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConsoleCommandLogger.ctorParameters = function () { return [
        { type: CommandBus }
    ]; };
    return ConsoleCommandLogger;
}(CommandLogger));
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
var NoopCommandLogger = /** @class */ (function (_super) {
    __extends(NoopCommandLogger, _super);
    function NoopCommandLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    NoopCommandLogger.prototype.start = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    NoopCommandLogger.prototype.stop = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @protected
     * @param {?} command
     * @return {?}
     */
    NoopCommandLogger.prototype.print = /**
     * @protected
     * @param {?} command
     * @return {?}
     */
    function (command) {
    };
    return NoopCommandLogger;
}(CommandLogger));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConsoleEventLogger = /** @class */ (function (_super) {
    __extends(ConsoleEventLogger, _super);
    function ConsoleEventLogger(eventBus, aggregateStoreRegister) {
        var _this = _super.call(this) || this;
        _this.aggregateStoreRegister = aggregateStoreRegister;
        _this.enabled = false;
        _this.unsubscribe$ = new HermesSubject();
        eventBus
            .pipe(hermesFilter((/**
         * @return {?}
         */
        function () { return _this.enabled; })), hermesTakeUntil(_this.unsubscribe$))
            .subscribe((/**
         * @param {?} domainEvent
         * @return {?}
         */
        function (domainEvent) {
            _this.log(domainEvent);
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    ConsoleEventLogger.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @return {?}
     */
    ConsoleEventLogger.prototype.start = /**
     * @return {?}
     */
    function () {
        this.enabled = true;
    };
    /**
     * @return {?}
     */
    ConsoleEventLogger.prototype.stop = /**
     * @return {?}
     */
    function () {
        this.enabled = false;
    };
    /**
     * @protected
     * @param {?} domainEvent
     * @return {?}
     */
    ConsoleEventLogger.prototype.print = /**
     * @protected
     * @param {?} domainEvent
     * @return {?}
     */
    function (domainEvent) {
        /** @type {?} */
        var aggregateId = domainEvent.getAggregateId();
        /** @type {?} */
        var aggregates = this.aggregateStoreRegister.captureAggregatesSnapshot(aggregateId);
        // eslint-disable-next-line no-console
        console.log(domainEvent.toString(), domainEvent, aggregates);
    };
    ConsoleEventLogger.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConsoleEventLogger.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: AggregateStoreRegister }
    ]; };
    return ConsoleEventLogger;
}(DomainEventLogger));
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
var NoopEventLogger = /** @class */ (function (_super) {
    __extends(NoopEventLogger, _super);
    function NoopEventLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    NoopEventLogger.prototype.start = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    NoopEventLogger.prototype.stop = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NoopEventLogger.prototype.print = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
    };
    return NoopEventLogger;
}(DomainEventLogger));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HermesLoggersInitializer = /** @class */ (function () {
    function HermesLoggersInitializer(platformId, commandLogger, eventLogger) {
        this.platformId = platformId;
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
    }
    /**
     * @return {?}
     */
    HermesLoggersInitializer.prototype.start = /**
     * @return {?}
     */
    function () {
        this.loggersStart();
    };
    /**
     * @return {?}
     */
    HermesLoggersInitializer.prototype.stop = /**
     * @return {?}
     */
    function () {
        this.loggersStop();
    };
    /**
     * @private
     * @return {?}
     */
    HermesLoggersInitializer.prototype.loggersStart = /**
     * @private
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.commandLogger.start();
            this.eventLogger.start();
        }
    };
    /**
     * @private
     * @return {?}
     */
    HermesLoggersInitializer.prototype.loggersStop = /**
     * @private
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.commandLogger.stop();
            this.eventLogger.stop();
        }
    };
    HermesLoggersInitializer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HermesLoggersInitializer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: CommandLogger },
        { type: DomainEventLogger }
    ]; };
    return HermesLoggersInitializer;
}());
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
var  /**
 * @template I, A, C
 */
CreateAggregateCommandHandlerImpl = /** @class */ (function () {
    function CreateAggregateCommandHandlerImpl(createAggregateCommandHandler, aggregateFactoryArchive, aggregateRepositoryArchive, aggregateType, domainEventPublisher) {
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
    CreateAggregateCommandHandlerImpl.prototype.handleCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        var _this = this;
        /** @type {?} */
        var aggregateId = (/** @type {?} */ (command.getAggregateId()));
        /** @type {?} */
        var optFactory = this.aggregateFactoryArchive.get(this.aggregateType);
        optFactory.ifPresent((/**
         * @param {?} factory
         * @return {?}
         */
        function (factory) {
            /** @type {?} */
            var aggregate = factory.create(aggregateId);
            /** @type {?} */
            var type = aggregate.getType();
            /** @type {?} */
            var createCommandConstructor = aggregate.createEvent();
            /** @type {?} */
            var createCommand = new createCommandConstructor(aggregateId, type);
            aggregate.addEvent(createCommand);
            /** @type {?} */
            var optRepository = _this.aggregateRepositoryArchive.get(_this.aggregateType);
            optRepository.ifPresent((/**
             * @param {?} repo
             * @return {?}
             */
            function (repo) {
                repo.save(aggregate);
                _this.domainEventPublisher.publishFromAggregate(aggregate);
            }));
        }));
    };
    /**
     * @param {?} command
     * @return {?}
     */
    CreateAggregateCommandHandlerImpl.prototype.forCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        return this.commandType === command.getMessageType();
    };
    /**
     * @private
     * @return {?}
     */
    CreateAggregateCommandHandlerImpl.prototype.createCommandInstance = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var argumentLength = this.createAggregateCommandHandler.forCommand().constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((_a = ((/** @type {?} */ (this.createAggregateCommandHandler.forCommand())))).bind.apply(_a, __spread([void 0], args)))());
    };
    return CreateAggregateCommandHandlerImpl;
}());
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
var CREATE_AGGREGATE_COMMAND_HANDLERS = 'HERMES - CREATE_AGGREGATE_COMMAND_HANDLERS';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, A
 */
var  /**
 * @template I, A
 */
AggregateFactoryArchive = /** @class */ (function () {
    function AggregateFactoryArchive() {
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @param {?} factory
     * @return {?}
     */
    AggregateFactoryArchive.prototype.add = /**
     * @param {?} key
     * @param {?} factory
     * @return {?}
     */
    function (key, factory) {
        this.map.set(key, factory);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    AggregateFactoryArchive.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return Optional.of(this.map.get(key));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    AggregateFactoryArchive.prototype.has = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.map.has(key);
    };
    return AggregateFactoryArchive;
}());
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
var  /**
 * @template I, A
 */
AggregateRepositoryArchive = /** @class */ (function () {
    function AggregateRepositoryArchive() {
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @param {?} repository
     * @return {?}
     */
    AggregateRepositoryArchive.prototype.add = /**
     * @param {?} key
     * @param {?} repository
     * @return {?}
     */
    function (key, repository) {
        this.map.set(key, repository);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    AggregateRepositoryArchive.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return Optional.of(this.map.get(key));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    AggregateRepositoryArchive.prototype.has = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.map.has(key);
    };
    return AggregateRepositoryArchive;
}());
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
var aggregateDefinitionToken = 'Hermes - aggregateDefinitionToken';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HermesDomainModule = /** @class */ (function () {
    function HermesDomainModule() {
    }
    /**
     * @return {?}
     */
    HermesDomainModule.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    HermesDomainModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return HermesDomainModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMMAND_HANDLERS = 'HERMES - COMMAND_HANDLERS_TOKEN';

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
var  /**
 * @template I, A, C
 */
CommandHandlerImpl = /** @class */ (function () {
    function CommandHandlerImpl(commandHandler, aggregateRepositoryArchive, aggregateType) {
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
    CommandHandlerImpl.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.commandHandler.publish(aggregate, command);
    };
    /**
     * @param {?} command
     * @return {?}
     */
    CommandHandlerImpl.prototype.handleCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        var _this = this;
        /** @type {?} */
        var aggregateId = (/** @type {?} */ (command.getAggregateId()));
        /** @type {?} */
        var optRepository = this.aggregateRepositoryArchive.get(this.aggregateType);
        optRepository.ifPresent((/**
         * @param {?} repo
         * @return {?}
         */
        function (repo) {
            /** @type {?} */
            var optAggregate = repo.findById(aggregateId);
            optAggregate.ifPresent((/**
             * @param {?} aggregate
             * @return {?}
             */
            function (aggregate) {
                _this.commandHandler.handle(aggregate, command);
                _this.publishDomainEvents(aggregate, command);
            }));
        }));
    };
    /**
     * @param {?} command
     * @return {?}
     */
    CommandHandlerImpl.prototype.forCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        return this.commandType === command.getMessageType();
    };
    /**
     * @private
     * @return {?}
     */
    CommandHandlerImpl.prototype.createCommandInstance = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var argumentLength = this.commandHandler.forCommand().constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((_a = ((/** @type {?} */ (this.commandHandler.forCommand())))).bind.apply(_a, __spread([void 0], args)))());
    };
    return CommandHandlerImpl;
}());
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
var  /**
 * @template I, E
 */
DomainEventHandlerImpl = /** @class */ (function () {
    function DomainEventHandlerImpl(domainEventHandler, events) {
        this.domainEventHandler = domainEventHandler;
        this.events = events;
        this.eventTypes = this.createDomainEventTypes();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DomainEventHandlerImpl.prototype.handleEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.domainEventHandler.handle(event);
    };
    /**
     * @param {?} events
     * @return {?}
     */
    DomainEventHandlerImpl.prototype.forEvents = /**
     * @param {?} events
     * @return {?}
     */
    function (events) {
        var _this = this;
        return events.some((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.eventTypes.some((/**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                return type === event.getMessageType();
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    DomainEventHandlerImpl.prototype.createDomainEventTypes = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var types = [];
        try {
            for (var _b = __values(this.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                var event_1 = _c.value;
                /** @type {?} */
                var instance = this.createDomainEventInstance(event_1);
                types.push(instance.getMessageType());
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return types;
    };
    /**
     * @private
     * @param {?} eventType
     * @return {?}
     */
    DomainEventHandlerImpl.prototype.createDomainEventInstance = /**
     * @private
     * @param {?} eventType
     * @return {?}
     */
    function (eventType) {
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var argumentLength = eventType.constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new (((/** @type {?} */ (eventType))).bind.apply(((/** @type {?} */ (eventType))), __spread([void 0], args)))());
    };
    return DomainEventHandlerImpl;
}());
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
var /**
 * @template I, E
 */
DomainEventHandlerInitializer = /** @class */ (function (_super) {
    __extends(DomainEventHandlerInitializer, _super);
    function DomainEventHandlerInitializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} eventHandlers
     * @param {?} domainEventBus
     * @return {?}
     */
    DomainEventHandlerInitializer.prototype.init = /**
     * @param {?} eventHandlers
     * @param {?} domainEventBus
     * @return {?}
     */
    function (eventHandlers, domainEventBus) {
        var _this = this;
        if (eventHandlers) {
            /** @type {?} */
            var set_1 = new Set();
            /** @type {?} */
            var filteredHandlers_1 = [];
            eventHandlers.filter((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                if (!set_1.has(((/** @type {?} */ (handler))).domainEventHandler)) {
                    set_1.add(((/** @type {?} */ (handler))).domainEventHandler);
                    filteredHandlers_1.push(handler);
                }
            }));
            filteredHandlers_1.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                domainEventBus
                    .ofEventHandler(handler)
                    .pipe(_this.hermesTakeUntil())
                    .subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    handler.handleEvent(event);
                }));
            }));
            // console.log('Registered event handlers:', filteredHandlers.length)
            // console.log('Registered event handlers:', filteredHandlers)
        }
    };
    return DomainEventHandlerInitializer;
}(Reactive));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, A, C
 */
var /**
 * @template I, A, C
 */
CommandHandlerInitializer = /** @class */ (function (_super) {
    __extends(CommandHandlerInitializer, _super);
    function CommandHandlerInitializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} commandHandlers
     * @param {?} commandBus
     * @return {?}
     */
    CommandHandlerInitializer.prototype.register = /**
     * @param {?} commandHandlers
     * @param {?} commandBus
     * @return {?}
     */
    function (commandHandlers, commandBus) {
        var _this = this;
        if (commandHandlers) {
            /** @type {?} */
            var set_1 = new Set();
            /** @type {?} */
            var filteredHandlers_1 = [];
            commandHandlers.filter((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                if (!set_1.has(((/** @type {?} */ (handler))).commandHandler)) {
                    set_1.add(((/** @type {?} */ (handler))).commandHandler);
                    filteredHandlers_1.push(handler);
                }
            }));
            filteredHandlers_1.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                commandBus
                    .ofCommandHandler(handler)
                    .pipe(_this.hermesTakeUntil())
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                function (command) {
                    handler.handleCommand(command);
                }));
            }));
            // console.log('Registered command handlers:' + filteredHandlers.length);
            // console.log('Registered command handlers:', filteredHandlers);
        }
    };
    /**
     * @param {?} aggregateCommandHandlers
     * @param {?} commandBus
     * @return {?}
     */
    CommandHandlerInitializer.prototype.registerAggregateCommandHandlers = /**
     * @param {?} aggregateCommandHandlers
     * @param {?} commandBus
     * @return {?}
     */
    function (aggregateCommandHandlers, commandBus) {
        var _this = this;
        if (aggregateCommandHandlers) {
            /** @type {?} */
            var set_2 = new Set();
            /** @type {?} */
            var filteredHandlers_2 = [];
            aggregateCommandHandlers.filter((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                if (!set_2.has(((/** @type {?} */ (handler))).createAggregateCommandHandler)) {
                    set_2.add(((/** @type {?} */ (handler))).createAggregateCommandHandler);
                    filteredHandlers_2.push(handler);
                }
            }));
            filteredHandlers_2.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                commandBus
                    .ofCreateAggregateHandler(handler)
                    .pipe(_this.hermesTakeUntil())
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                function (command) {
                    handler.handleCommand(command);
                }));
            }));
            // console.log('Registered create command handlers:' + filteredHandlers.length);
            // console.log('Registered create command handlers:', filteredHandlers);
        }
    };
    return CommandHandlerInitializer;
}(Reactive));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, A
 */
var /**
 * @template I, A
 */
AggregateDefinitionInitializer = /** @class */ (function () {
    function AggregateDefinitionInitializer() {
    }
    /**
     * @param {?} definedAggregate
     * @param {?} injector
     * @param {?} aggregateFactoryArchive
     * @param {?} aggregateRepositoryArchive
     * @return {?}
     */
    AggregateDefinitionInitializer.prototype.register = /**
     * @param {?} definedAggregate
     * @param {?} injector
     * @param {?} aggregateFactoryArchive
     * @param {?} aggregateRepositoryArchive
     * @return {?}
     */
    function (definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive) {
        if (definedAggregate) {
            /** @type {?} */
            var set_1 = new Set();
            /** @type {?} */
            var filteredDefinitions_1 = [];
            definedAggregate.filter((/**
             * @param {?} def
             * @return {?}
             */
            function (def) {
                if (!set_1.has(def.key)) {
                    set_1.add(def.key);
                    filteredDefinitions_1.push(def);
                }
            }));
            filteredDefinitions_1.forEach((/**
             * @param {?} def
             * @return {?}
             */
            function (def) {
                /** @type {?} */
                var factory = injector.get(def.factory);
                /** @type {?} */
                var repository = injector.get(def.repository);
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
    };
    return AggregateDefinitionInitializer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var hermesProviders = [
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
var providers = __spread([
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
    AggregateRepositoryArchive
], hermesProviders);
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
var HermesBaseModule = /** @class */ (function (_super) {
    __extends(HermesBaseModule, _super);
    function HermesBaseModule(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        var _this = _super.call(this) || this;
        _this.hermesLoggersInitializer = hermesLoggersInitializer;
        _this.hermesApi = hermesApi;
        _this.aggregateDefinitionInitializer = new AggregateDefinitionInitializer();
        _this.commandHandlerInitializer = new CommandHandlerInitializer();
        _this.domainEventHandlerInitializer = new DomainEventHandlerInitializer();
        _this.hermesLoggersInitializer.start();
        _this.checkNullCommand(commandBus, commandHandlers, aggregateCommandHandlers);
        _this.checkCommandHandlerIsCollection(commandHandlers);
        _this.checkDomainEventHandlerIsCollection(eventHandlers);
        _this.aggregateDefinitionInitializer.register(definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive);
        _this.commandHandlerInitializer.register(commandHandlers, commandBus);
        _this.commandHandlerInitializer.registerAggregateCommandHandlers(aggregateCommandHandlers, commandBus);
        _this.domainEventHandlerInitializer.init(eventHandlers, domainEventBus);
        return _this;
    }
    /**
     * @return {?}
     */
    HermesBaseModule.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this.hermesLoggersInitializer.stop();
        this.commandHandlerInitializer.ngOnDestroy();
        this.domainEventHandlerInitializer.ngOnDestroy();
    };
    /**
     * @private
     * @param {?} commandBus
     * @param {?} commandHandlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    HermesBaseModule.prototype.checkNullCommand = /**
     * @private
     * @param {?} commandBus
     * @param {?} commandHandlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    function (commandBus, commandHandlers, aggregateCommandHandlers) {
        commandBus
            .ofNullHandler(commandHandlers, aggregateCommandHandlers)
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            // eslint-disable-next-line no-console
            console.error("Command " + command.toString() + " was not intercepted by any CommandHandler.");
        }));
    };
    /**
     * @private
     * @param {?} commandHandlers
     * @return {?}
     */
    HermesBaseModule.prototype.checkCommandHandlerIsCollection = /**
     * @private
     * @param {?} commandHandlers
     * @return {?}
     */
    function (commandHandlers) {
        if (commandHandlers && !Array.isArray(commandHandlers)) {
            // eslint-disable-next-line no-console
            console.warn('You might provided commandHandler without specifying "multi: true".');
        }
    };
    /**
     * @private
     * @param {?} eventHandlers
     * @return {?}
     */
    HermesBaseModule.prototype.checkDomainEventHandlerIsCollection = /**
     * @private
     * @param {?} eventHandlers
     * @return {?}
     */
    function (eventHandlers) {
        if (eventHandlers && !Array.isArray(eventHandlers)) {
            // eslint-disable-next-line no-console
            console.warn('You might provided eventHandler without specifying "multi: true".');
        }
    };
    /** @nocollapse */
    HermesBaseModule.ctorParameters = function () { return [
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
    ]; };
    return HermesBaseModule;
}(Reactive));
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
var HermesModule = /** @class */ (function (_super) {
    __extends(HermesModule, _super);
    function HermesModule(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
        return _super.call(this, eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) || this;
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
    HermesModule.defineAggregate = /**
     * @template I, A, C
     * @param {?} aggregateKey
     * @param {?} factory
     * @param {?} repository
     * @param {?} createCommandHandler
     * @param {?=} commandHandlers
     * @param {?=} domainEventHandlers
     * @return {?}
     */
    function (aggregateKey, factory, repository, createCommandHandler, commandHandlers, domainEventHandlers) {
        if (commandHandlers === void 0) { commandHandlers = []; }
        if (domainEventHandlers === void 0) { domainEventHandlers = []; }
        return {
            ngModule: HermesDomainModule,
            providers: __spread([{
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
                repository], HermesModule.registerCreateCommandHandler(createCommandHandler, aggregateKey), commandHandlers, domainEventHandlers)
        };
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    HermesModule.withConfig = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = { loggers: false }; }
        return {
            ngModule: HermesModule,
            providers: providers
        };
    };
    /**
     * @template I, A, C
     * @param {?} commandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
    HermesModule.registerCommandHandler = /**
     * @template I, A, C
     * @param {?} commandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
    function (commandHandlerType, aggregateName) {
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
    };
    /**
     * @template I, E
     * @param {?} domainEventHandlerType
     * @return {?}
     */
    HermesModule.registerDomainEventHandler = /**
     * @template I, E
     * @param {?} domainEventHandlerType
     * @return {?}
     */
    function (domainEventHandlerType) {
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
    };
    /**
     * @template I, E
     * @param {?} domainEventHandlerType
     * @return {?}
     */
    HermesModule.registerMultiDomainEventHandler = /**
     * @template I, E
     * @param {?} domainEventHandlerType
     * @return {?}
     */
    function (domainEventHandlerType) {
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
    };
    /**
     * @private
     * @template I, A, C
     * @param {?} createCommandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
    HermesModule.registerCreateCommandHandler = /**
     * @private
     * @template I, A, C
     * @param {?} createCommandHandlerType
     * @param {?} aggregateName
     * @return {?}
     */
    function (createCommandHandlerType, aggregateName) {
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
    };
    HermesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: providers
                },] }
    ];
    /** @nocollapse */
    HermesModule.ctorParameters = function () { return [
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
    ]; };
    return HermesModule;
}(HermesBaseModule));

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
    var e_1, _a;
    expect(actualEvents.length).toEqual(expectedEvents.length);
    var _loop_1 = function (actualEvent) {
        /** @type {?} */
        var expectedEvent = expectedEvents.find((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.equalsByType(actualEvent);
        }));
        expect(expectedEvent).toBeDefined();
        expect(actualEvent.equalsByType(expectedEvent)).toBeTruthy();
        // expect(actualEvent.aggregateId).toEqual(expectedEvent.aggregateId, 'Events aggregateId should be the same');
        expect(actualEvent.getPayload()).toEqual(expectedEvent.getPayload(), 'Events payload should be the same');
    };
    try {
        for (var actualEvents_1 = __values(actualEvents), actualEvents_1_1 = actualEvents_1.next(); !actualEvents_1_1.done; actualEvents_1_1 = actualEvents_1.next()) {
            var actualEvent = actualEvents_1_1.value;
            _loop_1(actualEvent);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (actualEvents_1_1 && !actualEvents_1_1.done && (_a = actualEvents_1.return)) _a.call(actualEvents_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/**
 * @template T
 * @param {?} actualEvents
 * @param {?} expectedEvents
 * @return {?}
 */
function assertAggregateEvents(actualEvents, expectedEvents) {
    var e_2, _a;
    expect(actualEvents.length).toEqual(expectedEvents.length, 'Aggregate events');
    var _loop_2 = function (actualEvent) {
        /** @type {?} */
        var expectedEvent = expectedEvents.find((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.equals(actualEvent);
        }));
        expect(expectedEvent).toBeDefined();
    };
    try {
        for (var actualEvents_2 = __values(actualEvents), actualEvents_2_1 = actualEvents_2.next(); !actualEvents_2_1.done; actualEvents_2_1 = actualEvents_2.next()) {
            var actualEvent = actualEvents_2_1.value;
            _loop_2(actualEvent);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (actualEvents_2_1 && !actualEvents_2_1.done && (_a = actualEvents_2.return)) _a.call(actualEvents_2);
        }
        finally { if (e_2) throw e_2.error; }
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
    function () {
        expect.assertions(3);
        // given
        /** @type {?} */
        var nextFn = jest.fn();
        /** @type {?} */
        var errorFn = jest.fn();
        /** @type {?} */
        var completeFn = jest.fn();
        // when
        createStream()
            .subscribe((/**
         * @return {?}
         */
        function () { return nextFn(); }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return errorFn(err); }), (/**
         * @return {?}
         */
        function () { return completeFn(); }));
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
    function () {
        expect.assertions(4);
        // given
        /** @type {?} */
        var nextFn = jest.fn();
        /** @type {?} */
        var errorFn = jest.fn();
        /** @type {?} */
        var completeFn = jest.fn();
        // when
        createStream()
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return nextFn(value); }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return errorFn(err); }), (/**
         * @return {?}
         */
        function () { return completeFn(); }));
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
    function () {
        expect.assertions(4);
        // given
        /** @type {?} */
        var nextFn = jest.fn();
        /** @type {?} */
        var errorFn = jest.fn();
        /** @type {?} */
        var completeFn = jest.fn();
        // when
        createStream()
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return nextFn(value); }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return errorFn(err); }), (/**
         * @return {?}
         */
        function () { return completeFn(); }));
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
var  /**
 * @abstract
 */
CreateAggregateCommand = /** @class */ (function (_super) {
    __extends(CreateAggregateCommand, _super);
    function CreateAggregateCommand(aggregateId, type) {
        return _super.call(this, aggregateId, type) || this;
    }
    return CreateAggregateCommand;
}(Command));

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
