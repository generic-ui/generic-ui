(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@generic-ui/hermes', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["generic-ui"] = global["generic-ui"] || {}, global["generic-ui"].hermes = {}), global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators));
})(this, (function (exports, i0, common, rxjs, operators) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                if (e.indexOf(p[i]) < 0)
                    t[p[i]] = s[p[i]];
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (!exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.prototype.setDomain = function (domainName) {
            this.domainName = domainName;
        };
        Logger.prototype.log = function (message) {
            if (this.shouldPrint(message)) {
                this.print(message);
            }
        };
        Logger.prototype.shouldPrint = function (message) {
            if (!this.domainName) {
                return true;
            }
            var log = message.toString();
            return log.includes(this.domainName);
        };
        return Logger;
    }());

    var CommandLogger = /** @class */ (function (_super) {
        __extends(CommandLogger, _super);
        function CommandLogger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CommandLogger;
    }(Logger));

    var DomainEventLogger = /** @class */ (function (_super) {
        __extends(DomainEventLogger, _super);
        function DomainEventLogger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DomainEventLogger;
    }(Logger));

    var hermesApi = 'hermesApi';
    var HermesApi = /** @class */ (function () {
        function HermesApi(platformId, commandLogger, eventLogger) {
            this.platformId = platformId;
            this.commandLogger = commandLogger;
            this.eventLogger = eventLogger;
            if (common.isPlatformBrowser(this.platformId)) {
                var api = function (api) {
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
        return HermesApi;
    }());
    HermesApi.ɵfac = function HermesApi_Factory(t) { return new (t || HermesApi)(i0__namespace.ɵɵinject(i0.PLATFORM_ID), i0__namespace.ɵɵinject(CommandLogger), i0__namespace.ɵɵinject(DomainEventLogger)); };
    HermesApi.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: HermesApi, factory: HermesApi.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HermesApi, [{
                type: i0.Injectable
            }], function () {
            return [{ type: Object, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }, { type: CommandLogger }, { type: DomainEventLogger }];
        }, null);
    })();

    function enableHermesLoggers(domainName, windowObject) {
        var winRef = windowObject ? windowObject : window;
        if (domainName) {
            winRef[hermesApi].domain = domainName;
        }
        winRef[hermesApi].loggers = true;
    }
    function disableHermesLoggers(windowObject) {
        var winRef = windowObject ? windowObject : window;
        delete winRef[hermesApi].domain;
        winRef[hermesApi].loggers = false;
    }

    var DOMAIN_EVENT_HANDLERS = 'HERMES - DOMAIN_EVENT_HANDLERS_TOKEN';

    function provideEventHandlers(handlers) {
        return handlers.map(function (handler) {
            return {
                provide: DOMAIN_EVENT_HANDLERS,
                useClass: handler,
                multi: true
            };
        });
    }

    var HermesSubscription = /** @class */ (function () {
        function HermesSubscription(finalize, isClosed) {
            this.closed = false;
            this.finalize = function () {
            };
            if (finalize !== undefined && finalize !== null &&
                typeof finalize === 'function') {
                this.finalize = finalize;
            }
            if (isClosed !== undefined && isClosed !== null) {
                this.closed = isClosed;
            }
        }
        HermesSubscription.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.closed = true;
            this.finalize();
        };
        HermesSubscription.prototype.getFinalize = function () {
            return this.finalize;
        };
        return HermesSubscription;
    }());

    var HermesSubscriber = /** @class */ (function () {
        function HermesSubscriber(config) {
            this.finalize = function () {
            };
            this.completed = false;
            this.closed = false;
            this.observer = config;
        }
        HermesSubscriber.prototype.next = function (value) {
            if (this.isCompleted()) {
                return;
            }
            if (this.observer && this.observer.next) {
                this.observer.next(value);
            }
        };
        HermesSubscriber.prototype.error = function (error) {
            if (this.completed) {
                return;
            }
            if (this.observer && this.observer.error) {
                this.observer.error(error);
            }
            this.unsubscribe();
        };
        HermesSubscriber.prototype.complete = function () {
            if (this.completed) {
                return;
            }
            this.completed = true;
            if (this.observer && this.observer.complete) {
                this.observer.complete();
            }
            this.unsubscribe();
        };
        HermesSubscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.closed = true;
            this.completed = true;
            this.finalize();
        };
        HermesSubscriber.prototype.setFinalize = function (finalize) {
            if (finalize && typeof finalize === 'function') {
                this.finalize = finalize;
            }
            else {
            }
        };
        HermesSubscriber.prototype.isCompleted = function () {
            return this.completed;
        };
        HermesSubscriber.prototype.isClosed = function () {
            return this.closed;
        };
        HermesSubscriber.prototype.getObserver = function () {
            return this.observer;
        };
        return HermesSubscriber;
    }());

    var HermesObservable = /** @class */ (function () {
        function HermesObservable(generator) {
            this.generatorFn = generator;
        }
        HermesObservable.prototype.pipe = function () {
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
        HermesObservable.prototype.innerPipe = function (operation, stream$) {
            return (function (input) {
                return operation(input);
            })(stream$);
        };
        HermesObservable.prototype.subscribe = function (arg) {
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
        HermesObservable.prototype.createSubscriber = function (next, error, complete) {
            return new HermesSubscriber({
                next: next,
                error: error,
                complete: complete
            });
        };
        HermesObservable.prototype.getSubscription = function () {
            return new HermesSubscription(this.generatorFinalize);
        };
        HermesObservable.prototype.isObserver = function (observer) {
            return typeof observer === 'object';
        };
        return HermesObservable;
    }());

    function hermesEmptySubscription() {
        return new HermesSubscription(function () {
        }, true);
    }

    var HermesSubject = /** @class */ (function (_super) {
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
        HermesSubject.prototype.next = function (value) {
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
        HermesSubject.prototype.error = function (error) {
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
        HermesSubject.prototype.complete = function () {
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
        HermesSubject.prototype.subscribe = function (arg) {
            this.verifyNotClosed();
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
        HermesSubject.prototype.unsubscribe = function () {
            this.isCompleted = true;
            this.isClosed = true;
            this.subscribers.length = 0;
        };
        HermesSubject.prototype.toObservable = function () {
            var _this = this;
            return new HermesObservable(function (observer) {
                var subscription = _this.subscribe(function (v) { return observer.next(v); }, function (error) { return observer.error(error); }, function () { return observer.complete(); });
                return function () { return subscription.unsubscribe(); };
            });
        };
        HermesSubject.prototype.verifyNotClosed = function () {
            if (this.isClosed) {
                throw new Error('Observable already closed');
            }
        };
        return HermesSubject;
    }(HermesObservable));

    var CommandStream = /** @class */ (function (_super) {
        __extends(CommandStream, _super);
        function CommandStream() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CommandStream;
    }(HermesSubject));
    CommandStream.ɵfac = /*@__PURE__*/ function () { var ɵCommandStream_BaseFactory; return function CommandStream_Factory(t) { return (ɵCommandStream_BaseFactory || (ɵCommandStream_BaseFactory = i0__namespace.ɵɵgetInheritedFactory(CommandStream)))(t || CommandStream); }; }();
    CommandStream.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: CommandStream, factory: CommandStream.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CommandStream, [{
                type: i0.Injectable
            }], null, null);
    })();

    var CommandDispatcher = /** @class */ (function () {
        function CommandDispatcher(commandStream) {
            this.commandStream = commandStream;
        }
        CommandDispatcher.prototype.dispatch = function (command) {
            this.commandStream.next(command);
        };
        return CommandDispatcher;
    }());
    CommandDispatcher.ɵfac = function CommandDispatcher_Factory(t) { return new (t || CommandDispatcher)(i0__namespace.ɵɵinject(CommandStream)); };
    CommandDispatcher.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: CommandDispatcher, factory: CommandDispatcher.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CommandDispatcher, [{
                type: i0.Injectable
            }], function () { return [{ type: CommandStream }]; }, null);
    })();

    var RandomStringGenerator = /** @class */ (function () {
        function RandomStringGenerator() {
        }
        RandomStringGenerator.generate = function () {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + ("" + RandomStringGenerator.index++);
        };
        return RandomStringGenerator;
    }());
    RandomStringGenerator.index = 0;
    RandomStringGenerator.ɵfac = function RandomStringGenerator_Factory(t) { return new (t || RandomStringGenerator)(); };
    RandomStringGenerator.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: RandomStringGenerator, factory: RandomStringGenerator.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(RandomStringGenerator, [{
                type: i0.Injectable
            }], null, null);
    })();

    var Message = /** @class */ (function () {
        function Message(aggregateId, messageType, messageId) {
            if (messageId === void 0) { messageId = RandomStringGenerator.generate(); }
            this.aggregateId = aggregateId;
            this.messageType = messageType;
            this.messageId = messageId;
        }
        Message.prototype.getMessageType = function () {
            return this.messageType;
        };
        Message.prototype.getAggregateId = function () {
            return this.aggregateId;
        };
        Message.prototype.getMessageId = function () {
            return this.messageId;
        };
        Message.prototype.toString = function () {
            return this.messageType;
        };
        Message.prototype.equalsByType = function (message) {
            return this.getMessageType() === message.getMessageType();
        };
        Message.prototype.equals = function (message) {
            return (this.getMessageType() === message.getMessageType()) && (this.messageId === message.messageId);
        };
        Message.prototype.ofMessageType = function (arg) {
            var _this = this;
            if (Array.isArray(arg)) {
                var found = arg.find(function (messageType) { return _this.isMessageType(messageType); });
                return !!found;
            }
            else {
                return this.isMessageType(arg);
            }
        };
        Message.prototype.isMessageType = function (messageType) {
            return this.getMessageType() === messageType;
        };
        return Message;
    }());

    var Command = /** @class */ (function (_super) {
        __extends(Command, _super);
        function Command() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Command;
    }(Message));

    var MessageType = Function;

    var CommandType = MessageType;

    var AggregateFactory = /** @class */ (function () {
        function AggregateFactory() {
        }
        return AggregateFactory;
    }());

    var FILTERED_COMMAND_STREAM = new i0.InjectionToken('FILTERED_COMMAND_STREAM');

    function subscriberForOperator(observer, next, complete) {
        var nextFn = next ? next : function (v) {
            observer.next(v);
        }, completeFn = complete ? complete : function () {
            observer.complete();
        };
        return new HermesSubscriber({
            next: nextFn,
            error: function (e) { return observer.error(e); },
            complete: completeFn
        });
    }
    function subscriberFromObserver(observer) {
        return new HermesSubscriber({
            next: function (v) { return observer.next(v); },
            error: function (e) { return observer.error(e); },
            complete: function () { return observer.complete(); }
        });
    }

    function hermesFilter(operation) {
        return function (source) {
            return new HermesObservable(function (observer) {
                var subscriber = subscriberForOperator(observer, function (value) {
                    if (operation(value)) {
                        observer.next(value);
                    }
                });
                return source.subscribe(subscriber).getFinalize();
            });
        };
    }

    var CommandBus = /** @class */ (function (_super) {
        __extends(CommandBus, _super);
        function CommandBus(commandsStream) {
            var _this = _super.call(this) || this;
            _this.commandsStream = commandsStream;
            return _this;
        }
        CommandBus.prototype.subscribe = function (arg) {
            return this.commandsStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
        };
        CommandBus.prototype.ofCommand = function () {
            var commandTypes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                commandTypes[_i] = arguments[_i];
            }
            return this
                .commandsStream
                .toObservable()
                .pipe(hermesFilter(function (command) {
                return commandTypes.some(function (commandType) { return command.ofMessageType(commandType); });
            }));
        };
        CommandBus.prototype.ofCommandHandler = function () {
            var handlers = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                handlers[_i] = arguments[_i];
            }
            return this
                .commandsStream
                .toObservable()
                .pipe(hermesFilter(function (command) {
                return handlers.some(function (handler) {
                    return handler.forCommand(command);
                });
            }));
        };
        CommandBus.prototype.ofCreateAggregateHandler = function () {
            var handlers = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                handlers[_i] = arguments[_i];
            }
            return this
                .commandsStream
                .toObservable()
                .pipe(hermesFilter(function (command) {
                return handlers.some(function (handler) {
                    return handler.forCommand(command);
                });
            }));
        };
        CommandBus.prototype.ofNullHandler = function (handlers, aggregateCommandHandlers) {
            return this
                .commandsStream
                .toObservable()
                .pipe(hermesFilter(function (command) {
                if (!handlers && !aggregateCommandHandlers) {
                    return true;
                }
                var foundHandlerForCommand = true;
                if (handlers) {
                    foundHandlerForCommand =
                        !handlers.some(function (handler) {
                            return handler.forCommand(command);
                        });
                }
                if (aggregateCommandHandlers) {
                    foundHandlerForCommand = foundHandlerForCommand &&
                        !aggregateCommandHandlers.some(function (handler) {
                            return handler.forCommand(command);
                        });
                }
                return foundHandlerForCommand;
            }));
        };
        return CommandBus;
    }(HermesObservable));
    CommandBus.ɵfac = function CommandBus_Factory(t) { return new (t || CommandBus)(i0__namespace.ɵɵinject(FILTERED_COMMAND_STREAM)); };
    CommandBus.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: CommandBus, factory: CommandBus.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CommandBus, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CommandStream, decorators: [{
                            type: i0.Inject,
                            args: [FILTERED_COMMAND_STREAM]
                        }] }];
        }, null);
    })();

    var AggregateEvent = /** @class */ (function () {
        function AggregateEvent(aggregateId, type) {
            this.aggregateId = aggregateId;
            this.type = type;
        }
        AggregateEvent.prototype.getAggregateId = function () {
            return this.aggregateId;
        };
        AggregateEvent.prototype.getType = function () {
            return this.type;
        };
        AggregateEvent.prototype.equals = function (event) {
            return this.equalsByType(event) &&
                this.getAggregateId().equals(event.getAggregateId());
        };
        AggregateEvent.prototype.equalsByType = function (event) {
            return this.getType() === event.getType();
        };
        return AggregateEvent;
    }());

    var AggregateEventType = MessageType;

    var AggregateRepository = /** @class */ (function () {
        function AggregateRepository() {
        }
        return AggregateRepository;
    }());

    var AggregateStore = /** @class */ (function () {
        function AggregateStore() {
        }
        return AggregateStore;
    }());

    var AggregateStoreRegister = /** @class */ (function () {
        function AggregateStoreRegister() {
            this.stores = [];
        }
        AggregateStoreRegister.prototype.register = function (store) {
            this.stores.push(store);
        };
        AggregateStoreRegister.prototype.captureAggregatesSnapshot = function (aggregateId) {
            if (!aggregateId) {
                return {};
            }
            var aggregates = {};
            this.stores.forEach(function (store) {
                var aggregate = store.findById(aggregateId);
                if (aggregate) {
                    var aggregateName = aggregate.constructor.name;
                    aggregates[aggregateName] = aggregate;
                }
            });
            return this.cloneAggregates(aggregates);
        };
        AggregateStoreRegister.prototype.cloneAggregates = function (aggregates) {
            // return JSON.parse(JSON.stringify(aggregates));
            return aggregates;
        };
        return AggregateStoreRegister;
    }());

    var AggregateRoot = /** @class */ (function () {
        function AggregateRoot(aggregateId, type) {
            this.type = type;
            this.aggregateId = aggregateId;
            this.events = [];
        }
        AggregateRoot.prototype.getId = function () {
            return this.aggregateId;
        };
        AggregateRoot.prototype.getType = function () {
            return this.type;
        };
        AggregateRoot.prototype.getEvents = function () {
            return this.events;
        };
        AggregateRoot.prototype.addEvent = function (args) {
            var e_1, _a;
            if (Array.isArray(args)) {
                try {
                    for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                        var event = args_1_1.value;
                        this.events.push(event);
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
                this.events.push(args);
            }
        };
        AggregateRoot.prototype.clearEvents = function () {
            this.events.length = 0;
        };
        AggregateRoot.prototype.equals = function (aggregate) {
            return aggregate.getId().toString() === this.getId().toString();
        };
        return AggregateRoot;
    }());

    var HermesId = /** @class */ (function () {
        function HermesId(uid) {
            this.uid = uid;
        }
        HermesId.prototype.getId = function () {
            return this.uid;
        };
        HermesId.prototype.equals = function (hermesId) {
            return this.uid === hermesId.getId();
        };
        return HermesId;
    }());

    var AggregateId = /** @class */ (function (_super) {
        __extends(AggregateId, _super);
        function AggregateId(uid) {
            return _super.call(this, uid) || this;
        }
        AggregateId.prototype.toString = function () {
            return _super.prototype.getId.call(this);
        };
        return AggregateId;
    }(HermesId));

    var DomainEvent = /** @class */ (function (_super) {
        __extends(DomainEvent, _super);
        function DomainEvent(aggregateId, payload, messageType) {
            var _this = _super.call(this, aggregateId, messageType) || this;
            _this.payload = payload;
            return _this;
        }
        DomainEvent.prototype.isSameType = function (event) {
            return this.constructor.name === event.constructor.name;
        };
        DomainEvent.prototype.getPayload = function () {
            return this.payload;
        };
        return DomainEvent;
    }(Message));

    function hermesOf() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new HermesObservable(function (observer) {
            args.forEach(function (value) {
                observer.next(value);
            });
            observer.complete();
        });
    }

    function hermesEmpty() {
        return new HermesObservable(function (observer) {
            observer.complete();
        });
    }

    function hermesTake(valuesNumber) {
        return function (source) {
            if (valuesNumber === 0) {
                return hermesEmpty();
            }
            return new HermesObservable(function (observer) {
                var index = 0;
                var subscriber = new HermesSubscriber({
                    next: function (v) {
                    },
                    error: function (e) { return observer.error(e); },
                    complete: function () { return observer.complete(); }
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
                var subscription = source.subscribe(subscriber);
                return subscription.getFinalize();
            });
        };
    }

    var DomainEventStore = /** @class */ (function () {
        function DomainEventStore() {
            this.domainEvents = [];
            this.domainEvents$ = new HermesSubject();
        }
        DomainEventStore.prototype.next = function (event) {
            this.domainEvents.push(event);
            this.domainEvents$.next(event);
        };
        DomainEventStore.prototype.findEventByType = function (eventType) {
            var events = this.getEvents();
            return events.reverse()
                .find(function (event) {
                return event.constructor.name === eventType;
            });
        };
        /**
         * First tries to event event in the history,
         * than method waits for future occurrences of the event.
         */
        DomainEventStore.prototype.waitForEvent = function (eventType) {
            // find in a history
            var event = this.findEventByType(eventType);
            if (event) {
                return hermesOf(event);
            }
            // wait for future occurrence
            return this.waitForNextEventOccurrence(eventType);
        };
        DomainEventStore.prototype.waitForNextEventOccurrence = function (arg) {
            var eventType;
            if (arg instanceof DomainEvent) {
                eventType = arg.constructor.name;
            }
            else if (typeof arg === 'string') {
                eventType = arg;
            }
            else {
                return new HermesObservable(function (observer) {
                    observer.error(new Error('Unsupported argument type.'));
                });
                // return throwError(new Error('Unsupported argument type.'));
            }
            return this.domainEvents$
                .toObservable()
                .pipe(hermesFilter(function (event) { return event.constructor.name === eventType; }), hermesTake(1));
        };
        DomainEventStore.prototype.getEvents = function () {
            return this.domainEvents;
        };
        return DomainEventStore;
    }());
    DomainEventStore.ɵfac = function DomainEventStore_Factory(t) { return new (t || DomainEventStore)(); };
    DomainEventStore.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: DomainEventStore, factory: DomainEventStore.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DomainEventStore, [{
                type: i0.Injectable
            }], null, null);
    })();

    var DomainEventStream = /** @class */ (function (_super) {
        __extends(DomainEventStream, _super);
        function DomainEventStream(eventStore) {
            var _this = _super.call(this) || this;
            _this.eventStore = eventStore;
            return _this;
        }
        DomainEventStream.prototype.next = function (event) {
            _super.prototype.next.call(this, event);
            this.eventStore.next(event);
        };
        return DomainEventStream;
    }(HermesSubject));
    DomainEventStream.ɵfac = function DomainEventStream_Factory(t) { return new (t || DomainEventStream)(i0__namespace.ɵɵinject(DomainEventStore)); };
    DomainEventStream.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: DomainEventStream, factory: DomainEventStream.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DomainEventStream, [{
                type: i0.Injectable
            }], function () { return [{ type: DomainEventStore }]; }, null);
    })();

    var DomainEventPublisher = /** @class */ (function () {
        function DomainEventPublisher(eventStream) {
            this.eventStream = eventStream;
        }
        DomainEventPublisher.prototype.publish = function (args) {
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
        DomainEventPublisher.prototype.publishFromAggregate = function (aggregate) {
            var _this = this;
            aggregate.getEvents()
                .forEach(function (aggregateEvent) {
                _this.publish(aggregateEvent.toDomainEvent());
            });
        };
        DomainEventPublisher.prototype.publishEvent = function (event) {
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
        return DomainEventPublisher;
    }());
    DomainEventPublisher.ɵfac = function DomainEventPublisher_Factory(t) { return new (t || DomainEventPublisher)(i0__namespace.ɵɵinject(DomainEventStream)); };
    DomainEventPublisher.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: DomainEventPublisher, factory: DomainEventPublisher.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DomainEventPublisher, [{
                type: i0.Injectable
            }], function () { return [{ type: DomainEventStream }]; }, null);
    })();

    var DomainEventBus = /** @class */ (function (_super) {
        __extends(DomainEventBus, _super);
        function DomainEventBus(eventStream) {
            var _this = _super.call(this) || this;
            _this.eventStream = eventStream;
            return _this;
        }
        DomainEventBus.prototype.subscribe = function (arg) {
            return this.eventStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
        };
        DomainEventBus.prototype.ofEvents = function (events) {
            var _this = this;
            return this
                .eventStream
                .toObservable()
                .pipe(hermesFilter(function (domainEvent) {
                return events.some(function (event) {
                    var eventInstance = _this.createEventInstance(event);
                    return eventInstance.equalsByType(domainEvent);
                });
            }));
        };
        DomainEventBus.prototype.ofEventHandlers = function (handlers) {
            return this
                .eventStream
                .toObservable()
                .pipe(hermesFilter(function (event) {
                return handlers.some(function (handler) { return handler.forEvents([event]); });
            }));
        };
        DomainEventBus.prototype.createEventInstance = function (event) {
            var args = [], argumentLength = event.constructor.length;
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
        };
        return DomainEventBus;
    }(HermesObservable));
    DomainEventBus.ɵfac = function DomainEventBus_Factory(t) { return new (t || DomainEventBus)(i0__namespace.ɵɵinject(DomainEventStream)); };
    DomainEventBus.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: DomainEventBus, factory: DomainEventBus.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DomainEventBus, [{
                type: i0.Injectable
            }], function () { return [{ type: DomainEventStream }]; }, null);
    })();

    var DomainEventType = MessageType;

    function hermesTakeUntil(notifier) {
        return function (source) {
            return new HermesObservable(function (observer) {
                var subscriber = subscriberFromObserver(observer);
                var notifierSubscriber = new HermesSubscriber({
                    next: function () { return subscriber.complete(); }
                });
                notifier.subscribe(notifierSubscriber);
                var subscription = source.subscribe(subscriber);
                return subscription.getFinalize();
            });
        };
    }

    function toRxJsObservable(source$) {
        return new rxjs.Observable(function (observer) {
            var subscription = source$.subscribe(function (value) { return observer.next(value); }, function (error) { return observer.error(error); }, function () { return observer.complete(); });
            return function () { return subscription.unsubscribe(); };
        });
    }

    var Reactive = /** @class */ (function () {
        function Reactive() {
            this.hermesUnsubscribe$ = new HermesSubject();
        }
        Reactive.prototype.ngOnDestroy = function () {
            this.hermesUnsubscribe();
        };
        Reactive.prototype.takeUntil = function () {
            return operators.takeUntil(toRxJsObservable(this.hermesUnsubscribe$));
        };
        Reactive.prototype.hermesUnsubscribe = function () {
            this.hermesUnsubscribe$.next();
            this.hermesUnsubscribe$.complete();
        };
        Reactive.prototype.hermesTakeUntil = function () {
            return hermesTakeUntil(this.hermesUnsubscribe$);
        };
        Reactive.prototype.isNotStopped = function () {
            return !this.hermesUnsubscribe$.isCompleted;
        };
        return Reactive;
    }());
    Reactive.ɵfac = function Reactive_Factory(t) { return new (t || Reactive)(); };
    Reactive.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: Reactive, factory: Reactive.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(Reactive, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    var ReactiveService = /** @class */ (function (_super) {
        __extends(ReactiveService, _super);
        function ReactiveService() {
            return _super.call(this) || this;
        }
        ReactiveService.prototype.ngOnDestroy = function () {
            this.hermesUnsubscribe();
        };
        return ReactiveService;
    }(Reactive));
    ReactiveService.ɵfac = function ReactiveService_Factory(t) { return new (t || ReactiveService)(); };
    ReactiveService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ReactiveService, factory: ReactiveService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ReactiveService, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    var Optional = /** @class */ (function () {
        function Optional(value) {
            if (Optional.isValueEmpty(value)) {
                this.value = null;
            }
            else {
                this.value = value;
            }
            return this;
        }
        Optional.empty = function () {
            return new Optional(null);
        };
        Optional.of = function (value) {
            return new Optional(value);
        };
        Optional.isValueEmpty = function (value) {
            return typeof value === 'undefined' || value === null;
        };
        Optional.prototype.isEmpty = function () {
            return Optional.isValueEmpty(this.value);
        };
        Optional.prototype.isPresent = function () {
            return !this.isEmpty();
        };
        Optional.prototype.filter = function (filterer) {
            if (this.isPresent() && filterer(this.value)) {
                return this;
            }
            return Optional.empty();
        };
        Optional.prototype.forEach = function (callback) {
            if (this.isPresent()) {
                callback(this.value);
            }
        };
        Optional.prototype.map = function (mapper) {
            if (this.isPresent()) {
                return new Optional(mapper(this.value));
            }
            return Optional.empty();
        };
        /**
         * @deprecated
         */
        Optional.prototype.getValueOrNullOrThrowError = function () {
            return this.value;
        };
        Optional.prototype.getOrThrow = function () {
            if (this.isEmpty()) {
                throw new Error('Called getOrThrow on an empty Optional');
            }
            return this.value;
        };
        Optional.prototype.getOrElse = function (other) {
            if (this.isPresent()) {
                return this.value;
            }
            return other();
        };
        Optional.prototype.ifPresent = function (method) {
            if (this.isPresent()) {
                method(this.value);
            }
        };
        Optional.prototype.ifEmpty = function (method) {
            if (this.isEmpty()) {
                method();
            }
        };
        Optional.prototype.orElse = function (other) {
            if (this.isPresent()) {
                return this;
            }
            return other();
        };
        return Optional;
    }());

    var KeyMap = /** @class */ (function () {
        function KeyMap() {
            this.keys = new Map();
            this.values = new WeakMap();
        }
        KeyMap.prototype.get = function (key) {
            var internalKey = this.getInternalKey(key);
            if (internalKey !== undefined) {
                return Optional.of(this.values.get(internalKey));
            }
            else {
                return Optional.empty();
            }
        };
        KeyMap.prototype.has = function (key) {
            var internalKey = this.getInternalKey(key);
            return this.values.has(internalKey);
        };
        KeyMap.prototype.set = function (key, value) {
            this.keys.set(key.toString(), key);
            this.values.set(key, value);
        };
        KeyMap.prototype.size = function () {
            return this.keys.size;
        };
        KeyMap.prototype.remove = function (key) {
            if (this.hasInternalKey(key)) {
                this.keys.delete(key.toString());
                this.values.delete(key);
            }
        };
        KeyMap.prototype.removeAll = function () {
            var _this = this;
            this.keys.forEach(function (value) {
                _this.values.delete(value);
            });
            this.keys.clear();
        };
        KeyMap.prototype.getInternalKey = function (key) {
            return this.keys.get(key.toString());
        };
        KeyMap.prototype.hasInternalKey = function (key) {
            return this.keys.has(key.toString());
        };
        return KeyMap;
    }());

    function hermesMap(convert) {
        return function (source) {
            return new HermesObservable(function (observer) {
                var index = 0;
                var subscriber = subscriberForOperator(observer, function (value) {
                    observer.next(convert(value, index++));
                });
                return source.subscribe(subscriber).getFinalize();
            });
        };
    }

    function hermesDistinctUntilChanged(compareFn) {
        var compare = compareFn ? compareFn : defaultCompareFn;
        return function (source) {
            return new HermesObservable(function (observer) {
                var previousValue = null;
                var subscriber = subscriberForOperator(observer, function (value) {
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

    var HermesBehaviorSubject = /** @class */ (function (_super) {
        __extends(HermesBehaviorSubject, _super);
        function HermesBehaviorSubject(defaultValue) {
            var _this = _super.call(this) || this;
            _this.lastValue = defaultValue;
            return _this;
        }
        HermesBehaviorSubject.prototype.next = function (value) {
            this.lastValue = value;
            _super.prototype.next.call(this, value);
        };
        HermesBehaviorSubject.prototype.subscribe = function (arg) {
            var subscription = _super.prototype.subscribe.call(this, arguments[0], arguments[1], arguments[2]);
            _super.prototype.next.call(this, this.lastValue);
            return subscription;
        };
        return HermesBehaviorSubject;
    }(HermesSubject));

    var HermesReplaySubject = /** @class */ (function (_super) {
        __extends(HermesReplaySubject, _super);
        function HermesReplaySubject(bufferSize) {
            if (bufferSize === void 0) { bufferSize = 1; }
            var _this = _super.call(this) || this;
            _this.bufferSize = bufferSize;
            _this.values = [];
            return _this;
        }
        HermesReplaySubject.prototype.next = function (value) {
            this.values.push(value);
            if (this.bufferSize < this.values.length) {
                this.values.shift();
            }
            _super.prototype.next.call(this, value);
        };
        HermesReplaySubject.prototype.subscribe = function (arg) {
            var e_1, _a;
            var subscriber;
            if (arg instanceof HermesSubscriber) {
                subscriber = arg;
            }
            else {
                subscriber = this.createSubscriber(arguments[0], arguments[1], arguments[2]);
            }
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

    var HermesArchiveSubject = /** @class */ (function (_super) {
        __extends(HermesArchiveSubject, _super);
        function HermesArchiveSubject() {
            return _super.call(this) || this;
        }
        HermesArchiveSubject.of = function (value) {
            if (value !== undefined) {
                return new HermesBehaviorSubject(value);
            }
            else {
                return new HermesReplaySubject(1);
            }
        };
        return HermesArchiveSubject;
    }(HermesSubject));

    var KeyArchive = /** @class */ (function (_super) {
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
        KeyArchive.prototype.on = function (key) {
            var _this = this;
            this.tryToInitDefault(key);
            return this.archive$
                .toObservable()
                .pipe(hermesFilter(function () { return _this.isNotStopped(); }), hermesMap(function (map) {
                return map.get(key);
            }), hermesFilter(function (value) { return value.isPresent(); }), hermesMap(function (value) { return value.getValueOrNullOrThrowError(); }), hermesDistinctUntilChanged(this.equals), this.hermesTakeUntil());
        };
        KeyArchive.prototype.once = function (key) {
            return this.on(key)
                .pipe(hermesTake(1));
        };
        KeyArchive.prototype.get = function (key) {
            this.tryToInitDefault(key);
            return this.archive.get(key);
        };
        KeyArchive.prototype.next = function (key, value) {
            this.archive.set(key, value);
            this.archive$.next(this.archive);
        };
        KeyArchive.prototype.equals = function (a, b) {
            return a === b;
        };
        KeyArchive.prototype.createDefaultValue = function (defaultValue) {
            return defaultValue;
        };
        KeyArchive.prototype.tryToInitDefault = function (key) {
            var _this = this;
            this.defaultValue
                .ifPresent(function (value) {
                if (!_this.archive.has(key)) {
                    _this.next(key, value);
                }
            });
        };
        return KeyArchive;
    }(ReactiveService));

    var AggregateArchive = /** @class */ (function (_super) {
        __extends(AggregateArchive, _super);
        function AggregateArchive(defaultValue) {
            return _super.call(this, defaultValue) || this;
        }
        return AggregateArchive;
    }(KeyArchive));

    var EventDrivenRepository = /** @class */ (function (_super) {
        __extends(EventDrivenRepository, _super);
        function EventDrivenRepository(defaultValues) {
            return _super.call(this, defaultValues) || this;
        }
        EventDrivenRepository.prototype.handle = function (event) {
            this.next(event.getAggregateId(), event.getPayload());
        };
        return EventDrivenRepository;
    }(AggregateArchive));

    var ReadModelEntity = /** @class */ (function () {
        function ReadModelEntity(gui) {
            this.entityId = gui;
        }
        ReadModelEntity.prototype.getId = function () {
            return this.entityId;
        };
        return ReadModelEntity;
    }());

    var ReadModelEntityId = /** @class */ (function () {
        function ReadModelEntityId(uid) {
            this.uid = uid;
        }
        ReadModelEntityId.prototype.toString = function () {
            return this.uid;
        };
        ReadModelEntityId.prototype.getId = function () {
            return this.uid;
        };
        ReadModelEntityId.prototype.equals = function (entityId) {
            return this.uid === entityId.getId();
        };
        return ReadModelEntityId;
    }());

    var ReadModelRoot = /** @class */ (function () {
        function ReadModelRoot(gui) {
            this.rootId = gui;
        }
        ReadModelRoot.prototype.getId = function () {
            return this.rootId;
        };
        return ReadModelRoot;
    }());

    var ReadModelRootId = /** @class */ (function () {
        function ReadModelRootId(uid) {
            this.uid = uid;
        }
        ReadModelRootId.prototype.toString = function () {
            return this.uid;
        };
        ReadModelRootId.prototype.getId = function () {
            return this.uid;
        };
        ReadModelRootId.prototype.equals = function (entityId) {
            return this.uid === entityId.getId();
        };
        return ReadModelRootId;
    }());

    var ReadModelRootRepository = /** @class */ (function (_super) {
        __extends(ReadModelRootRepository, _super);
        function ReadModelRootRepository(domainEventBus) {
            var _this = _super.call(this) || this;
            domainEventBus
                .ofEvents(_this.forEvents())
                .pipe(_this.hermesTakeUntil())
                .subscribe(function (event) {
                try {
                    _this.subscribe(event);
                }
                catch (e) {
                    // eslint-disable-next-line no-console
                    console.error(e);
                }
            });
            return _this;
        }
        return ReadModelRootRepository;
    }(Reactive));

    var ReadModelStore = /** @class */ (function () {
        function ReadModelStore() {
        }
        return ReadModelStore;
    }());

    var EventRepository = /** @class */ (function (_super) {
        __extends(EventRepository, _super);
        function EventRepository(domainEventBus) {
            var _this = _super.call(this) || this;
            _this.domainEventBus = domainEventBus;
            return _this;
        }
        EventRepository.prototype.onEvent = function (aggregateId, eventType) {
            return this.domainEventBus
                .ofEvents([
                eventType
            ])
                .pipe(hermesFilter(function (event) { return event.getAggregateId().toString() === aggregateId.toString(); }));
        };
        return EventRepository;
    }(ReactiveService));

    var Entity = /** @class */ (function () {
        function Entity(id) {
            this.entityId = id;
        }
        Entity.prototype.getId = function () {
            return this.entityId;
        };
        Entity.prototype.equals = function (entity) {
            return this.entityId.equals(entity.getId());
        };
        return Entity;
    }());

    var EntityId = /** @class */ (function (_super) {
        __extends(EntityId, _super);
        function EntityId() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityId;
    }(HermesId));

    function ValueObject(target) {
    }
    function DomainObject(target) {
    }
    function ReadModelObject(target) {
    }

    var DomainModule = /** @class */ (function () {
        function DomainModule() {
        }
        return DomainModule;
    }());
    DomainModule.ɵfac = function DomainModule_Factory(t) { return new (t || DomainModule)(); };
    DomainModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: DomainModule });
    DomainModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({});
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DomainModule, [{
                type: i0.NgModule
            }], function () { return []; }, null);
    })();

    var ApiModule = /** @class */ (function () {
        function ApiModule() {
        }
        return ApiModule;
    }());
    ApiModule.ɵfac = function ApiModule_Factory(t) { return new (t || ApiModule)(); };
    ApiModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ApiModule });
    ApiModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({});
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ApiModule, [{
                type: i0.NgModule
            }], null, null);
    })();

    var FeatureModule = /** @class */ (function () {
        function FeatureModule() {
        }
        return FeatureModule;
    }());
    FeatureModule.ɵfac = function FeatureModule_Factory(t) { return new (t || FeatureModule)(); };
    FeatureModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FeatureModule });
    FeatureModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({});
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FeatureModule, [{
                type: i0.NgModule
            }], null, null);
    })();

    function hermesNever() {
        return new HermesObservable(function (observer) {
        });
    }

    function hermesInterval(interval) {
        var counter = 0;
        return new HermesObservable(function (observer) {
            var id = setInterval(function () {
                observer.next(counter++);
            }, interval);
            return function () {
                clearInterval(id);
                observer.complete();
            };
        });
    }

    function hermesTimer(time) {
        return new HermesObservable(function (observer) {
            var id = setTimeout(function () {
                observer.next(0);
            }, time);
            return function () {
                clearTimeout(id);
                observer.complete();
            };
        });
    }

    function hermesFromEvent(element, type) {
        return new HermesObservable(function (observer) {
            var listener = function (event) {
                observer.next(event);
            };
            element.addEventListener(type, listener);
            return function () {
                element.removeEventListener(type, listener);
            };
        });
    }

    var HermesSingleSubscriber = /** @class */ (function (_super) {
        __extends(HermesSingleSubscriber, _super);
        function HermesSingleSubscriber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HermesSingleSubscriber.prototype.next = function (value) {
            if (this.isCompleted()) {
                return;
            }
            var observer = this.getObserver();
            if (observer && observer.next) {
                observer.next(value);
                this.complete();
            }
        };
        return HermesSingleSubscriber;
    }(HermesSubscriber));

    var HermesSingle = /** @class */ (function (_super) {
        __extends(HermesSingle, _super);
        function HermesSingle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HermesSingle.prototype.createSubscriber = function (next, error, complete) {
            return new HermesSingleSubscriber({
                next: next,
                error: error,
                complete: complete
            });
        };
        return HermesSingle;
    }(HermesObservable));

    function singleFromObservable(source) {
        return new HermesSingle(function (observer) {
            var subscriber = new HermesSubscriber({
                next: function (value) { return observer.next(value); },
                error: function (error) { return observer.error(error); },
                complete: function () {
                }
            });
            var subscription = source.subscribe(subscriber);
            return subscription.getFinalize();
        });
    }

    function hermesThrowError(error) {
        return new HermesObservable(function (observer) {
            observer.error(error);
        });
    }

    function hermesSkip(valuesNumber) {
        return function (source) {
            return new HermesObservable(function (observer) {
                var index = 0;
                var subscriber = subscriberForOperator(observer, function (value) {
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
        return function (source) {
            return new HermesObservable(function (observer) {
                var isOuterCompleted = false;
                var innerSubscriber = null;
                var tryToComplete = function () {
                    if (isOuterCompleted && !innerSubscriber) {
                        observer.complete();
                    }
                };
                var outerSubscriber = subscriberForOperator(observer, function (v) {
                    if (innerSubscriber) {
                        innerSubscriber.unsubscribe();
                    }
                    var subscriber = new HermesSubscriber({
                        next: function (v2) { return observer.next(v2); },
                        error: function (e) { return observer.error(e); },
                        complete: function () {
                            innerSubscriber = null;
                            tryToComplete();
                        }
                    });
                    innerSubscriber = subscriber;
                    var innerSubscription = operation(v).subscribe(subscriber);
                    return innerSubscription.getFinalize();
                }, function () {
                    isOuterCompleted = true;
                    tryToComplete();
                });
                return source.subscribe(outerSubscriber).getFinalize();
            });
        };
    }

    function hermesTap(operation) {
        return function (source) {
            return new HermesObservable(function (observer) {
                var subscriber = subscriberForOperator(observer, function (value) {
                    operation(value);
                    observer.next(value);
                });
                return source.subscribe(subscriber).getFinalize();
            });
        };
    }

    function hermesToArray() {
        return function (source) {
            return new HermesObservable(function (observer) {
                var values = [];
                var subscriber = subscriberForOperator(observer, function (value) {
                    values.push(value);
                }, function () {
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
        return new HermesObservable(function (observer) {
            var subscription = source$.subscribe(function (value) { return observer.next(value); }, function (error) { return observer.error(error); }, function () { return observer.complete(); });
            return function () { return subscription.unsubscribe(); };
        });
    }

    var Archive = /** @class */ (function () {
        function Archive(value) {
            this.archive$ = HermesArchiveSubject.of(value);
        }
        Archive.prototype.on = function () {
            return this.archive$
                .toObservable()
                .pipe(hermesDistinctUntilChanged(this.compare));
        };
        Archive.prototype.next = function (value) {
            this.archive$.next(value);
        };
        Archive.prototype.compare = function (one, two) {
            return one === two;
        };
        return Archive;
    }());

    var PersistAnemia = /** @class */ (function () {
        function PersistAnemia(uid) {
            this.readModelRootId = uid;
        }
        PersistAnemia.prototype.getReadModelRootId = function () {
            return this.readModelRootId;
        };
        PersistAnemia.prototype.getId = function () {
            return this.getReadModelRootId().toString();
        };
        return PersistAnemia;
    }());

    var PersistStateStore = /** @class */ (function () {
        function PersistStateStore() {
            this.state = new Map();
        }
        PersistStateStore.prototype.set = function (anemia) {
            this.state.set(anemia.getId(), anemia);
        };
        PersistStateStore.prototype.setMany = function (anemias) {
            var _this = this;
            anemias.forEach(function (anemia) {
                _this.set(anemia);
            });
        };
        PersistStateStore.prototype.get = function (aggregateId) {
            return Optional.of(this.state.get(aggregateId.toString()));
        };
        PersistStateStore.prototype.getAll = function () {
            return Array.from(this.state.values());
        };
        PersistStateStore.prototype.clear = function () {
            this.state.clear();
        };
        return PersistStateStore;
    }());

    var PersistReadModelStore = /** @class */ (function (_super) {
        __extends(PersistReadModelStore, _super);
        function PersistReadModelStore(stateStore) {
            var _this = _super.call(this) || this;
            _this.stateStore = stateStore;
            return _this;
        }
        PersistReadModelStore.prototype.getById = function (aggregateId) {
            return this.getValue(aggregateId);
        };
        PersistReadModelStore.prototype.getAll = function () {
            return this.getAllValues();
        };
        PersistReadModelStore.prototype.getAllValues = function () {
            var _this = this;
            return this.stateStore
                .getAll()
                .map(function (anemia) { return _this.toReadModel(anemia); });
        };
        PersistReadModelStore.prototype.getValue = function (aggregateId) {
            var optAnemia = this.stateStore.get(aggregateId);
            return optAnemia.map(this.toReadModel);
        };
        return PersistReadModelStore;
    }(ReadModelStore));

    var PersistAggregateStore = /** @class */ (function (_super) {
        __extends(PersistAggregateStore, _super);
        function PersistAggregateStore(stateStore, aggregateStoreRegister) {
            var _this = _super.call(this) || this;
            _this.stateStore = stateStore;
            _this.aggregateStoreRegister = aggregateStoreRegister;
            _this.aggregateStoreRegister.register(_this);
            return _this;
        }
        PersistAggregateStore.prototype.save = function (aggregate) {
            this.saveValue(aggregate);
        };
        PersistAggregateStore.prototype.findById = function (aggregateId) {
            return this.getValue(aggregateId);
        };
        PersistAggregateStore.prototype.saveValue = function (aggregate) {
            var anemia = this.toAnemia(aggregate);
            this.stateStore.set(anemia);
        };
        PersistAggregateStore.prototype.getValue = function (aggregateId) {
            var optAnemia = this.stateStore.get(aggregateId);
            return optAnemia.map(this.fromAnemia);
        };
        return PersistAggregateStore;
    }(AggregateStore));

    var InMemoryAggregateStore = /** @class */ (function (_super) {
        __extends(InMemoryAggregateStore, _super);
        function InMemoryAggregateStore(inMemoryStore, aggregateStoreRegister) {
            var _this = _super.call(this) || this;
            _this.inMemoryStore = inMemoryStore;
            _this.aggregateStoreRegister = aggregateStoreRegister;
            _this.aggregateStoreRegister.register(_this);
            return _this;
        }
        InMemoryAggregateStore.prototype.save = function (arg) {
            var _this = this;
            if (Array.isArray(arg)) {
                arg.forEach(function (aggregate) {
                    _this.inMemoryStore.set(aggregate);
                });
            }
            else {
                var aggregate = arg;
                this.inMemoryStore.set(aggregate);
            }
        };
        InMemoryAggregateStore.prototype.findById = function (aggregateId) {
            var optAggregate = this.inMemoryStore.get(aggregateId);
            optAggregate.ifPresent(function (a) { return a.clearEvents(); });
            return optAggregate;
        };
        InMemoryAggregateStore.prototype.remove = function (aggregateId) {
            this.inMemoryStore.delete(aggregateId);
        };
        return InMemoryAggregateStore;
    }(AggregateStore));

    var InMemoryReadModelStore = /** @class */ (function (_super) {
        __extends(InMemoryReadModelStore, _super);
        function InMemoryReadModelStore(inMemoryStore) {
            var _this = _super.call(this) || this;
            _this.inMemoryStore = inMemoryStore;
            return _this;
        }
        InMemoryReadModelStore.prototype.getById = function (aggregateId) {
            return this.getValue(aggregateId);
        };
        InMemoryReadModelStore.prototype.getValue = function (aggregateId) {
            var optAggregate = this.inMemoryStore.get(aggregateId);
            return optAggregate.map(this.toReadModel.bind(this));
        };
        return InMemoryReadModelStore;
    }(ReadModelStore));

    var InMemoryStore = /** @class */ (function () {
        function InMemoryStore() {
            this.state = new Map();
        }
        InMemoryStore.prototype.set = function (aggregate) {
            this.state.set(aggregate.getId().toString(), aggregate);
        };
        InMemoryStore.prototype.setMany = function (aggregates) {
            var _this = this;
            aggregates.forEach(function (aggregate) {
                _this.set(aggregate);
            });
        };
        InMemoryStore.prototype.get = function (aggregateId) {
            return Optional.of(this.state.get(aggregateId.toString()));
        };
        InMemoryStore.prototype.getAll = function () {
            return Array.from(this.state.values()).map(function (v) { return Optional.of(v); });
        };
        InMemoryStore.prototype.has = function (aggregateId) {
            return this.state.has(aggregateId.toString());
        };
        InMemoryStore.prototype.delete = function (aggregateId) {
            this.state.delete(aggregateId.toString());
        };
        InMemoryStore.prototype.clear = function () {
            this.state.clear();
        };
        return InMemoryStore;
    }());

    var COMMAND_LOGGER_ENABLED = 'GUI - COMMAND_LOGGER_ENABLED';
    var EVENT_LOGGER_ENABLED = 'GUI - EVENT_LOGGER_ENABLED';

    var ConsoleCommandLogger = /** @class */ (function (_super) {
        __extends(ConsoleCommandLogger, _super);
        function ConsoleCommandLogger(commandBus) {
            var _this = _super.call(this) || this;
            _this.enabled = false;
            _this.unsubscribe$ = new HermesSubject();
            commandBus
                .pipe(hermesFilter(function () { return _this.enabled; }), hermesTakeUntil(_this.unsubscribe$))
                .subscribe(function (command) {
                _this.log(command);
            });
            return _this;
        }
        ConsoleCommandLogger.prototype.ngOnDestroy = function () {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        };
        ConsoleCommandLogger.prototype.start = function () {
            this.enabled = true;
        };
        ConsoleCommandLogger.prototype.stop = function () {
            this.enabled = false;
        };
        ConsoleCommandLogger.prototype.print = function (command) {
            // eslint-disable-next-line no-console
            console.log(command.toString(), command);
        };
        return ConsoleCommandLogger;
    }(CommandLogger));
    ConsoleCommandLogger.ɵfac = function ConsoleCommandLogger_Factory(t) { return new (t || ConsoleCommandLogger)(i0__namespace.ɵɵinject(CommandBus)); };
    ConsoleCommandLogger.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ConsoleCommandLogger, factory: ConsoleCommandLogger.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ConsoleCommandLogger, [{
                type: i0.Injectable
            }], function () { return [{ type: CommandBus }]; }, null);
    })();

    var NoopCommandLogger = /** @class */ (function (_super) {
        __extends(NoopCommandLogger, _super);
        function NoopCommandLogger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NoopCommandLogger.prototype.start = function () {
        };
        NoopCommandLogger.prototype.stop = function () {
        };
        NoopCommandLogger.prototype.print = function (command) {
        };
        return NoopCommandLogger;
    }(CommandLogger));

    var ConsoleEventLogger = /** @class */ (function (_super) {
        __extends(ConsoleEventLogger, _super);
        function ConsoleEventLogger(eventBus, aggregateStoreRegister) {
            var _this = _super.call(this) || this;
            _this.aggregateStoreRegister = aggregateStoreRegister;
            _this.enabled = false;
            _this.unsubscribe$ = new HermesSubject();
            eventBus
                .pipe(hermesFilter(function () { return _this.enabled; }), hermesTakeUntil(_this.unsubscribe$))
                .subscribe(function (domainEvent) {
                _this.log(domainEvent);
            });
            return _this;
        }
        ConsoleEventLogger.prototype.ngOnDestroy = function () {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        };
        ConsoleEventLogger.prototype.start = function () {
            this.enabled = true;
        };
        ConsoleEventLogger.prototype.stop = function () {
            this.enabled = false;
        };
        ConsoleEventLogger.prototype.print = function (domainEvent) {
            var aggregateId = domainEvent.getAggregateId(), aggregates = this.aggregateStoreRegister.captureAggregatesSnapshot(aggregateId);
            // eslint-disable-next-line no-console
            console.log(domainEvent.toString(), domainEvent, aggregates);
        };
        return ConsoleEventLogger;
    }(DomainEventLogger));
    ConsoleEventLogger.ɵfac = function ConsoleEventLogger_Factory(t) { return new (t || ConsoleEventLogger)(i0__namespace.ɵɵinject(DomainEventBus), i0__namespace.ɵɵinject(AggregateStoreRegister)); };
    ConsoleEventLogger.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ConsoleEventLogger, factory: ConsoleEventLogger.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ConsoleEventLogger, [{
                type: i0.Injectable
            }], function () { return [{ type: DomainEventBus }, { type: AggregateStoreRegister }]; }, null);
    })();

    var NoopEventLogger = /** @class */ (function (_super) {
        __extends(NoopEventLogger, _super);
        function NoopEventLogger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NoopEventLogger.prototype.start = function () {
        };
        NoopEventLogger.prototype.stop = function () {
        };
        NoopEventLogger.prototype.print = function (event) {
        };
        return NoopEventLogger;
    }(DomainEventLogger));

    var HermesLoggersInitializer = /** @class */ (function () {
        function HermesLoggersInitializer(platformId, commandLogger, eventLogger) {
            this.platformId = platformId;
            this.commandLogger = commandLogger;
            this.eventLogger = eventLogger;
        }
        HermesLoggersInitializer.prototype.start = function () {
            this.loggersStart();
        };
        HermesLoggersInitializer.prototype.stop = function () {
            this.loggersStop();
        };
        HermesLoggersInitializer.prototype.loggersStart = function () {
            if (common.isPlatformBrowser(this.platformId)) {
                this.commandLogger.start();
                this.eventLogger.start();
            }
        };
        HermesLoggersInitializer.prototype.loggersStop = function () {
            if (common.isPlatformBrowser(this.platformId)) {
                this.commandLogger.stop();
                this.eventLogger.stop();
            }
        };
        return HermesLoggersInitializer;
    }());
    HermesLoggersInitializer.ɵfac = function HermesLoggersInitializer_Factory(t) { return new (t || HermesLoggersInitializer)(i0__namespace.ɵɵinject(i0.PLATFORM_ID), i0__namespace.ɵɵinject(CommandLogger), i0__namespace.ɵɵinject(DomainEventLogger)); };
    HermesLoggersInitializer.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: HermesLoggersInitializer, factory: HermesLoggersInitializer.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HermesLoggersInitializer, [{
                type: i0.Injectable
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }, { type: CommandLogger }, { type: DomainEventLogger }];
        }, null);
    })();

    function createAggregateCommandHandlerFactory(createAggregateCommandHandler, factoryArchive, aggregateRepositoryArchive, aggregateName, domainEventPublisher) {
        return new CreateAggregateCommandHandlerImpl(createAggregateCommandHandler, factoryArchive, aggregateRepositoryArchive, aggregateName, domainEventPublisher);
    }
    var CreateAggregateCommandHandlerImpl = /** @class */ (function () {
        function CreateAggregateCommandHandlerImpl(createAggregateCommandHandler, aggregateFactoryArchive, aggregateRepositoryArchive, aggregateType, domainEventPublisher) {
            this.createAggregateCommandHandler = createAggregateCommandHandler;
            this.aggregateFactoryArchive = aggregateFactoryArchive;
            this.aggregateRepositoryArchive = aggregateRepositoryArchive;
            this.aggregateType = aggregateType;
            this.domainEventPublisher = domainEventPublisher;
            this.commandType = this.createCommandInstance().getMessageType();
        }
        CreateAggregateCommandHandlerImpl.prototype.handleCommand = function (command) {
            var _this = this;
            var aggregateId = command.getAggregateId();
            var optFactory = this.aggregateFactoryArchive.get(this.aggregateType);
            optFactory.ifPresent(function (factory) {
                var aggregate = factory.create(aggregateId);
                var type = aggregate.getType(), createCommandConstructor = aggregate.createEvent();
                var createCommand = new createCommandConstructor(aggregateId, type);
                aggregate.addEvent(createCommand);
                var optRepository = _this.aggregateRepositoryArchive.get(_this.aggregateType);
                optRepository.ifPresent(function (repo) {
                    repo.save(aggregate);
                    _this.domainEventPublisher.publishFromAggregate(aggregate);
                });
            });
        };
        CreateAggregateCommandHandlerImpl.prototype.forCommand = function (command) {
            return this.commandType === command.getMessageType();
        };
        CreateAggregateCommandHandlerImpl.prototype.createCommandInstance = function () {
            var args = [], argumentLength = this.createAggregateCommandHandler.forCommand().constructor.length;
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
        };
        return CreateAggregateCommandHandlerImpl;
    }());

    /**
     * ngc for grid package for some reasons doesn't allow to use injection token
     */
    var CREATE_AGGREGATE_COMMAND_HANDLERS = 'HERMES - CREATE_AGGREGATE_COMMAND_HANDLERS';

    var AggregateFactoryArchive = /** @class */ (function () {
        function AggregateFactoryArchive() {
            this.map = new Map();
        }
        AggregateFactoryArchive.prototype.add = function (key, factory) {
            this.map.set(key, factory);
        };
        AggregateFactoryArchive.prototype.get = function (key) {
            return Optional.of(this.map.get(key));
        };
        AggregateFactoryArchive.prototype.has = function (key) {
            return this.map.has(key);
        };
        return AggregateFactoryArchive;
    }());
    var AggregateRepositoryArchive = /** @class */ (function () {
        function AggregateRepositoryArchive() {
            this.map = new Map();
        }
        AggregateRepositoryArchive.prototype.add = function (key, repository) {
            this.map.set(key, repository);
        };
        AggregateRepositoryArchive.prototype.get = function (key) {
            return Optional.of(this.map.get(key));
        };
        AggregateRepositoryArchive.prototype.has = function (key) {
            return this.map.has(key);
        };
        return AggregateRepositoryArchive;
    }());

    var aggregateDefinitionToken = 'Hermes - aggregateDefinitionToken';

    var HermesDomainModule = /** @class */ (function () {
        function HermesDomainModule() {
        }
        HermesDomainModule.prototype.ngOnDestroy = function () {
        };
        return HermesDomainModule;
    }());
    HermesDomainModule.ɵfac = function HermesDomainModule_Factory(t) { return new (t || HermesDomainModule)(); };
    HermesDomainModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: HermesDomainModule });
    HermesDomainModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({});
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HermesDomainModule, [{
                type: i0.NgModule,
                args: [{}]
            }], null, null);
    })();

    var COMMAND_HANDLERS = 'HERMES - COMMAND_HANDLERS_TOKEN';

    function commandHandlerFactory(commandHandler, aggregateRepositoryArchive, aggregateName) {
        return new CommandHandlerImpl(commandHandler, aggregateRepositoryArchive, aggregateName);
    }
    var CommandHandlerImpl = /** @class */ (function () {
        function CommandHandlerImpl(commandHandler, aggregateRepositoryArchive, aggregateType) {
            this.commandHandler = commandHandler;
            this.aggregateRepositoryArchive = aggregateRepositoryArchive;
            this.aggregateType = aggregateType;
            this.commandType = this.createCommandInstance().getMessageType();
        }
        CommandHandlerImpl.prototype.publishDomainEvents = function (aggregate, command) {
            this.commandHandler.publish(aggregate, command);
        };
        CommandHandlerImpl.prototype.handleCommand = function (command) {
            var _this = this;
            var aggregateId = command.getAggregateId();
            var optRepository = this.aggregateRepositoryArchive.get(this.aggregateType);
            optRepository.ifPresent(function (repo) {
                var optAggregate = repo.findById(aggregateId);
                optAggregate.ifPresent(function (aggregate) {
                    _this.commandHandler.handle(aggregate, command);
                    _this.publishDomainEvents(aggregate, command);
                });
            });
        };
        CommandHandlerImpl.prototype.forCommand = function (command) {
            return this.commandType === command.getMessageType();
        };
        CommandHandlerImpl.prototype.createCommandInstance = function () {
            var args = [], argumentLength = this.commandHandler.forCommand().constructor.length;
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
        };
        return CommandHandlerImpl;
    }());

    function domainEventHandlerFactory(domainEventHandler) {
        return new DomainEventHandlerImpl(domainEventHandler, [domainEventHandler.forEvent()]);
    }
    function multiDomainEventHandlerFactory(domainEventHandler) {
        return new DomainEventHandlerImpl(domainEventHandler, domainEventHandler.forEvents());
    }
    var DomainEventHandlerImpl = /** @class */ (function () {
        function DomainEventHandlerImpl(domainEventHandler, events) {
            this.domainEventHandler = domainEventHandler;
            this.events = events;
            this.eventTypes = this.createDomainEventTypes();
        }
        DomainEventHandlerImpl.prototype.handleEvent = function (event) {
            this.domainEventHandler.handle(event);
        };
        DomainEventHandlerImpl.prototype.forEvents = function (events) {
            var _this = this;
            return events.some(function (event) {
                return _this.eventTypes.some(function (type) {
                    return type === event.getMessageType();
                });
            });
        };
        DomainEventHandlerImpl.prototype.createDomainEventTypes = function () {
            var e_1, _a;
            var types = [];
            try {
                for (var _b = __values(this.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var event = _c.value;
                    var instance = this.createDomainEventInstance(event);
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
        DomainEventHandlerImpl.prototype.createDomainEventInstance = function (eventType) {
            var args = [], argumentLength = eventType.constructor.length;
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
        };
        return DomainEventHandlerImpl;
    }());

    var DomainEventHandlerInitializer = /** @class */ (function (_super) {
        __extends(DomainEventHandlerInitializer, _super);
        function DomainEventHandlerInitializer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DomainEventHandlerInitializer.prototype.init = function (eventHandlers, domainEventBus) {
            var _this = this;
            if (eventHandlers) {
                var set_1 = new Set();
                var filteredHandlers_1 = [];
                eventHandlers.filter(function (handler) {
                    if (!set_1.has(handler.domainEventHandler)) {
                        set_1.add(handler.domainEventHandler);
                        filteredHandlers_1.push(handler);
                    }
                });
                filteredHandlers_1.forEach(function (handler) {
                    domainEventBus
                        .ofEventHandlers([handler])
                        .pipe(_this.hermesTakeUntil())
                        .subscribe(function (event) {
                        handler.handleEvent(event);
                    });
                });
                // console.log('Registered event handlers:', filteredHandlers.length)
                // console.log('Registered event handlers:', filteredHandlers)
            }
        };
        return DomainEventHandlerInitializer;
    }(Reactive));

    var CommandHandlerInitializer = /** @class */ (function (_super) {
        __extends(CommandHandlerInitializer, _super);
        function CommandHandlerInitializer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CommandHandlerInitializer.prototype.register = function (commandHandlers, commandBus) {
            var _this = this;
            if (commandHandlers) {
                var set_1 = new Set();
                var filteredHandlers_1 = [];
                commandHandlers.filter(function (handler) {
                    if (!set_1.has(handler.commandHandler)) {
                        set_1.add(handler.commandHandler);
                        filteredHandlers_1.push(handler);
                    }
                });
                filteredHandlers_1.forEach(function (handler) {
                    commandBus
                        .ofCommandHandler(handler)
                        .pipe(_this.hermesTakeUntil())
                        .subscribe(function (command) {
                        handler.handleCommand(command);
                    });
                });
                // console.log('Registered command handlers:' + filteredHandlers.length);
                // console.log('Registered command handlers:', filteredHandlers);
            }
        };
        CommandHandlerInitializer.prototype.registerAggregateCommandHandlers = function (aggregateCommandHandlers, commandBus) {
            var _this = this;
            if (aggregateCommandHandlers) {
                var set_2 = new Set();
                var filteredHandlers_2 = [];
                aggregateCommandHandlers.filter(function (handler) {
                    if (!set_2.has(handler.createAggregateCommandHandler)) {
                        set_2.add(handler.createAggregateCommandHandler);
                        filteredHandlers_2.push(handler);
                    }
                });
                filteredHandlers_2.forEach(function (handler) {
                    commandBus
                        .ofCreateAggregateHandler(handler)
                        .pipe(_this.hermesTakeUntil())
                        .subscribe(function (command) {
                        handler.handleCommand(command);
                    });
                });
                // console.log('Registered create command handlers:' + filteredHandlers.length);
                // console.log('Registered create command handlers:', filteredHandlers);
            }
        };
        return CommandHandlerInitializer;
    }(Reactive));

    var AggregateDefinitionInitializer = /** @class */ (function () {
        function AggregateDefinitionInitializer() {
        }
        AggregateDefinitionInitializer.prototype.register = function (definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive) {
            if (definedAggregate) {
                var set_1 = new Set();
                var filteredDefinitions_1 = [];
                definedAggregate.filter(function (def) {
                    if (!set_1.has(def.key)) {
                        set_1.add(def.key);
                        filteredDefinitions_1.push(def);
                    }
                });
                filteredDefinitions_1.forEach(function (def) {
                    var factory = injector.get(def.factory), repository = injector.get(def.repository);
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
        };
        return AggregateDefinitionInitializer;
    }());

    var providers = [
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
        HermesBaseModule.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
            this.hermesLoggersInitializer.stop();
            this.commandHandlerInitializer.ngOnDestroy();
            this.domainEventHandlerInitializer.ngOnDestroy();
        };
        HermesBaseModule.prototype.checkNullCommand = function (commandBus, commandHandlers, aggregateCommandHandlers) {
            commandBus
                .ofNullHandler(commandHandlers, aggregateCommandHandlers)
                .pipe(this.hermesTakeUntil())
                .subscribe(function (command) {
                // eslint-disable-next-line no-console
                console.error("Command " + command.toString() + " was not intercepted by any CommandHandler.");
            });
        };
        HermesBaseModule.prototype.checkCommandHandlerIsCollection = function (commandHandlers) {
            if (commandHandlers && !Array.isArray(commandHandlers)) {
                // eslint-disable-next-line no-console
                console.warn('You might provided commandHandler without specifying "multi: true".');
            }
        };
        HermesBaseModule.prototype.checkDomainEventHandlerIsCollection = function (eventHandlers) {
            if (eventHandlers && !Array.isArray(eventHandlers)) {
                // eslint-disable-next-line no-console
                console.warn('You might provided eventHandler without specifying "multi: true".');
            }
        };
        return HermesBaseModule;
    }(Reactive));
    HermesBaseModule.ɵfac = function HermesBaseModule_Factory(t) { return new (t || HermesBaseModule)(i0__namespace.ɵɵinject(DOMAIN_EVENT_HANDLERS, 8), i0__namespace.ɵɵinject(CREATE_AGGREGATE_COMMAND_HANDLERS, 8), i0__namespace.ɵɵinject(COMMAND_HANDLERS, 8), i0__namespace.ɵɵinject(aggregateDefinitionToken, 8), i0__namespace.ɵɵinject(i0__namespace.Injector), i0__namespace.ɵɵinject(AggregateFactoryArchive), i0__namespace.ɵɵinject(AggregateRepositoryArchive), i0__namespace.ɵɵinject(CommandBus), i0__namespace.ɵɵinject(DomainEventBus), i0__namespace.ɵɵinject(HermesLoggersInitializer), i0__namespace.ɵɵinject(HermesApi)); };
    HermesBaseModule.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: HermesBaseModule, factory: HermesBaseModule.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HermesBaseModule, [{
                type: i0.Injectable
            }], function () {
            return [{ type: Array, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [DOMAIN_EVENT_HANDLERS]
                        }] }, { type: Array, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [CREATE_AGGREGATE_COMMAND_HANDLERS]
                        }] }, { type: Array, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [COMMAND_HANDLERS]
                        }] }, { type: Array, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [aggregateDefinitionToken]
                        }] }, { type: i0__namespace.Injector }, { type: AggregateFactoryArchive }, { type: AggregateRepositoryArchive }, { type: CommandBus }, { type: DomainEventBus }, { type: HermesLoggersInitializer }, { type: HermesApi }];
        }, null);
    })();
    var HermesModule = /** @class */ (function (_super) {
        __extends(HermesModule, _super);
        function HermesModule(eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) {
            return _super.call(this, eventHandlers, aggregateCommandHandlers, commandHandlers, definedAggregate, injector, aggregateFactoryArchive, aggregateRepositoryArchive, commandBus, domainEventBus, hermesLoggersInitializer, hermesApi) || this;
        }
        HermesModule.defineAggregate = function (aggregateKey, factory, repository, createCommandHandler, commandHandlers, domainEventHandlers) {
            if (commandHandlers === void 0) { commandHandlers = []; }
            if (domainEventHandlers === void 0) { domainEventHandlers = []; }
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
        };
        HermesModule.withConfig = function (config) {
            if (config === void 0) { config = { loggers: false }; }
            return {
                ngModule: HermesModule,
                providers: providers
            };
        };
        HermesModule.registerCommandHandler = function (commandHandlerType, aggregateName) {
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
        HermesModule.registerDomainEventHandler = function (domainEventHandlerType) {
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
        HermesModule.registerMultiDomainEventHandler = function (domainEventHandlerType) {
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
        HermesModule.registerCreateCommandHandler = function (createCommandHandlerType, aggregateName) {
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
        return HermesModule;
    }(HermesBaseModule));
    HermesModule.ɵfac = function HermesModule_Factory(t) { return new (t || HermesModule)(i0__namespace.ɵɵinject(DOMAIN_EVENT_HANDLERS, 8), i0__namespace.ɵɵinject(CREATE_AGGREGATE_COMMAND_HANDLERS, 8), i0__namespace.ɵɵinject(COMMAND_HANDLERS, 8), i0__namespace.ɵɵinject(aggregateDefinitionToken, 8), i0__namespace.ɵɵinject(i0__namespace.Injector), i0__namespace.ɵɵinject(AggregateFactoryArchive), i0__namespace.ɵɵinject(AggregateRepositoryArchive), i0__namespace.ɵɵinject(CommandBus), i0__namespace.ɵɵinject(DomainEventBus), i0__namespace.ɵɵinject(HermesLoggersInitializer), i0__namespace.ɵɵinject(HermesApi)); };
    HermesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: HermesModule });
    HermesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: providers, imports: [[
                common.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HermesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            common.CommonModule
                        ],
                        providers: providers
                    }]
            }], function () {
            return [{ type: Array, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [DOMAIN_EVENT_HANDLERS]
                        }] }, { type: Array, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [CREATE_AGGREGATE_COMMAND_HANDLERS]
                        }] }, { type: Array, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [COMMAND_HANDLERS]
                        }] }, { type: Array, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [aggregateDefinitionToken]
                        }] }, { type: i0__namespace.Injector }, { type: AggregateFactoryArchive }, { type: AggregateRepositoryArchive }, { type: CommandBus }, { type: DomainEventBus }, { type: HermesLoggersInitializer }, { type: HermesApi }];
        }, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(HermesModule, { imports: [common.CommonModule] }); })();

    function assertDomainEvents(actualEvents, expectedEvents) {
        var e_1, _a;
        expect(actualEvents.length).toEqual(expectedEvents.length);
        var _loop_1 = function (actualEvent) {
            var expectedEvent = expectedEvents.find(function (event) {
                return event.equalsByType(actualEvent);
            });
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
    function assertAggregateEvents(actualEvents, expectedEvents) {
        var e_2, _a;
        expect(actualEvents.length).toEqual(expectedEvents.length, 'Aggregate events');
        var _loop_2 = function (actualEvent) {
            var expectedEvent = expectedEvents.find(function (event) {
                return event.equals(actualEvent);
            });
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
    function testEventRepositoryIsEmptyOnStart(createStream, desc) {
        it('should be no ' + desc + ' events on start', function () {
            expect.assertions(3);
            // given
            var nextFn = jest.fn(), errorFn = jest.fn(), completeFn = jest.fn();
            // when
            createStream()
                .subscribe(function () { return nextFn(); }, function (err) { return errorFn(err); }, function () { return completeFn(); });
            // then
            expect(nextFn).not.toHaveBeenCalled();
            expect(errorFn).not.toHaveBeenCalled();
            expect(completeFn).not.toHaveBeenCalled();
        });
    }
    function testWarehouseDefaultValueOnStart(createStream, defaultValue, desc) {
        it('should have default value ' + desc, function () {
            expect.assertions(4);
            // given
            var nextFn = jest.fn(), errorFn = jest.fn(), completeFn = jest.fn();
            // when
            createStream()
                .subscribe(function (value) { return nextFn(value); }, function (err) { return errorFn(err); }, function () { return completeFn(); });
            // then
            expect(nextFn).toHaveBeenCalledWith(defaultValue);
            expect(nextFn).toHaveBeenCalledTimes(1);
            expect(errorFn).not.toHaveBeenCalled();
            expect(completeFn).not.toHaveBeenCalled();
        });
    }
    function testWarehouseDefaultValueOnStartOnce(createStream, defaultValue, desc) {
        it('should have default value ' + desc, function () {
            expect.assertions(4);
            // given
            var nextFn = jest.fn(), errorFn = jest.fn(), completeFn = jest.fn();
            // when
            createStream()
                .subscribe(function (value) { return nextFn(value); }, function (err) { return errorFn(err); }, function () { return completeFn(); });
            // then
            expect(nextFn).toHaveBeenCalledWith(defaultValue);
            expect(nextFn).toHaveBeenCalledTimes(1);
            expect(errorFn).not.toHaveBeenCalled();
            expect(completeFn).toHaveBeenCalledTimes(1);
        });
    }

    var CreateAggregateCommand = /** @class */ (function (_super) {
        __extends(CreateAggregateCommand, _super);
        function CreateAggregateCommand(aggregateId, type) {
            return _super.call(this, aggregateId, type) || this;
        }
        return CreateAggregateCommand;
    }(Command));

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AggregateArchive = AggregateArchive;
    exports.AggregateEvent = AggregateEvent;
    exports.AggregateEventType = AggregateEventType;
    exports.AggregateFactory = AggregateFactory;
    exports.AggregateId = AggregateId;
    exports.AggregateRepository = AggregateRepository;
    exports.AggregateRoot = AggregateRoot;
    exports.AggregateStore = AggregateStore;
    exports.AggregateStoreRegister = AggregateStoreRegister;
    exports.ApiModule = ApiModule;
    exports.Archive = Archive;
    exports.COMMAND_LOGGER_ENABLED = COMMAND_LOGGER_ENABLED;
    exports.Command = Command;
    exports.CommandBus = CommandBus;
    exports.CommandDispatcher = CommandDispatcher;
    exports.CommandLogger = CommandLogger;
    exports.CommandStream = CommandStream;
    exports.CommandType = CommandType;
    exports.CreateAggregateCommand = CreateAggregateCommand;
    exports.DomainEvent = DomainEvent;
    exports.DomainEventBus = DomainEventBus;
    exports.DomainEventLogger = DomainEventLogger;
    exports.DomainEventPublisher = DomainEventPublisher;
    exports.DomainEventStream = DomainEventStream;
    exports.DomainEventType = DomainEventType;
    exports.DomainModule = DomainModule;
    exports.DomainObject = DomainObject;
    exports.EVENT_LOGGER_ENABLED = EVENT_LOGGER_ENABLED;
    exports.Entity = Entity;
    exports.EntityId = EntityId;
    exports.EventDrivenRepository = EventDrivenRepository;
    exports.EventRepository = EventRepository;
    exports.FeatureModule = FeatureModule;
    exports.HermesApi = HermesApi;
    exports.HermesArchiveSubject = HermesArchiveSubject;
    exports.HermesBehaviorSubject = HermesBehaviorSubject;
    exports.HermesDomainModule = HermesDomainModule;
    exports.HermesId = HermesId;
    exports.HermesModule = HermesModule;
    exports.HermesObservable = HermesObservable;
    exports.HermesReplaySubject = HermesReplaySubject;
    exports.HermesSingle = HermesSingle;
    exports.HermesSubject = HermesSubject;
    exports.HermesSubscription = HermesSubscription;
    exports.InMemoryAggregateStore = InMemoryAggregateStore;
    exports.InMemoryReadModelStore = InMemoryReadModelStore;
    exports.InMemoryStore = InMemoryStore;
    exports.KeyMap = KeyMap;
    exports.Optional = Optional;
    exports.PersistAggregateStore = PersistAggregateStore;
    exports.PersistAnemia = PersistAnemia;
    exports.PersistReadModelStore = PersistReadModelStore;
    exports.PersistStateStore = PersistStateStore;
    exports.RandomStringGenerator = RandomStringGenerator;
    exports.Reactive = Reactive;
    exports.ReactiveService = ReactiveService;
    exports.ReadModelEntity = ReadModelEntity;
    exports.ReadModelEntityId = ReadModelEntityId;
    exports.ReadModelObject = ReadModelObject;
    exports.ReadModelRoot = ReadModelRoot;
    exports.ReadModelRootId = ReadModelRootId;
    exports.ReadModelRootRepository = ReadModelRootRepository;
    exports.ReadModelStore = ReadModelStore;
    exports.ValueObject = ValueObject;
    exports.assertAggregateEvents = assertAggregateEvents;
    exports.assertDomainEvents = assertDomainEvents;
    exports.disableHermesLoggers = disableHermesLoggers;
    exports.enableHermesLoggers = enableHermesLoggers;
    exports.fromRxJsObservable = fromRxJsObservable;
    exports.hermesDistinctUntilChanged = hermesDistinctUntilChanged;
    exports.hermesEmpty = hermesEmpty;
    exports.hermesFilter = hermesFilter;
    exports.hermesFromEvent = hermesFromEvent;
    exports.hermesInterval = hermesInterval;
    exports.hermesMap = hermesMap;
    exports.hermesNever = hermesNever;
    exports.hermesOf = hermesOf;
    exports.hermesSkip = hermesSkip;
    exports.hermesSwitchMap = hermesSwitchMap;
    exports.hermesTake = hermesTake;
    exports.hermesTakeUntil = hermesTakeUntil;
    exports.hermesTap = hermesTap;
    exports.hermesThrowError = hermesThrowError;
    exports.hermesTimer = hermesTimer;
    exports.hermesToArray = hermesToArray;
    exports.provideEventHandlers = provideEventHandlers;
    exports.singleFromObservable = singleFromObservable;
    exports.testEventRepositoryIsEmptyOnStart = testEventRepositoryIsEmptyOnStart;
    exports.testWarehouseDefaultValueOnStart = testWarehouseDefaultValueOnStart;
    exports.testWarehouseDefaultValueOnStartOnce = testWarehouseDefaultValueOnStartOnce;
    exports.toRxJsObservable = toRxJsObservable;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=generic-ui-hermes.umd.js.map
