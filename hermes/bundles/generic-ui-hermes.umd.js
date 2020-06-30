(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@generic-ui/hermes', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['generic-ui'] = global['generic-ui'] || {}, global['generic-ui'].hermes = {}), global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common, rxjs, operators) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
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
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template M
     */
    var   /**
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
    var   /**
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
    var   /**
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
            if (common.isPlatformBrowser(this.platformId)) {
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        HermesApi.ctorParameters = function () { return [
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
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
    var CommandStream = /** @class */ (function (_super) {
        __extends(CommandStream, _super);
        function CommandStream() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        CommandStream.prototype.next = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _super.prototype.next.call(this, value);
        };
        CommandStream.decorators = [
            { type: core.Injectable }
        ];
        return CommandStream;
    }(rxjs.Subject));

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
            { type: core.Injectable }
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
            { type: core.Injectable }
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
    var   /**
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
    var Command = /** @class */ (function (_super) {
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
    var   /**
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
    var FILTERED_COMMAND_STREAM = new core.InjectionToken('FILTERED_COMMAND_STREAM');

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
            if (commandsStream) {
                _this.source = commandsStream;
            }
            return _this;
        }
        /**
         * @template R
         * @param {?} operator
         * @return {?}
         */
        CommandBus.prototype.lift = /**
         * @template R
         * @param {?} operator
         * @return {?}
         */
        function (operator) {
            /** @type {?} */
            var observable = new CommandBus();
            observable.source = this;
            observable.operator = operator;
            return observable;
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
                .pipe(operators.filter((/**
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
                .pipe(operators.filter((/**
             * @param {?} command
             * @return {?}
             */
            function (command) {
                return handlers.some((/**
                 * @param {?} handler
                 * @return {?}
                 */
                function (handler) { return handler.forCommand(command); }));
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
                .pipe(operators.filter((/**
             * @param {?} command
             * @return {?}
             */
            function (command) {
                return handlers.some((/**
                 * @param {?} handler
                 * @return {?}
                 */
                function (handler) { return handler.forCommand(command); }));
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
                .pipe(operators.filter((/**
             * @param {?} command
             * @return {?}
             */
            function (command) {
                if (!handlers) {
                    return true;
                }
                return !handlers.some((/**
                 * @param {?} handler
                 * @return {?}
                 */
                function (handler) { return handler.forCommand(command); })) &&
                    !aggregateCommandHandlers.some((/**
                     * @param {?} handler
                     * @return {?}
                     */
                    function (handler) { return handler.forCommand(command); }));
            })));
        };
        CommandBus.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        CommandBus.ctorParameters = function () { return [
            { type: rxjs.Subject, decorators: [{ type: core.Inject, args: [FILTERED_COMMAND_STREAM,] }] }
        ]; };
        return CommandBus;
    }(rxjs.Observable));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template I
     */
    var   /**
     * @abstract
     * @template I
     */
    ReplayCommandDispatcher = /** @class */ (function () {
        function ReplayCommandDispatcher(dispatcher, bus) {
            this.dispatcher = dispatcher;
            this.bus = bus;
            this.unsubscribe$ = new rxjs.Subject();
            this.subscriptions = [];
        }
        /**
         * @param {?} command
         * @return {?}
         */
        ReplayCommandDispatcher.prototype.dispatch = /**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            this.dispatcher.dispatch(command);
            return command.getMessageId();
        };
        /**
         * @param {?} command
         * @return {?}
         */
        ReplayCommandDispatcher.prototype.dispatchAndWait = /**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            var _this = this;
            /** @type {?} */
            var response$ = this.bus
                .pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event.fromCommand(command); })), operators.first(), operators.map((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                return _this.mapEventToResponse(event);
            })), operators.takeUntil(this.unsubscribe$));
            /** @type {?} */
            var subscription = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.dispatcher.dispatch(command);
            }));
            this.subscriptions.push(subscription);
            return response$;
        };
        /**
         * @return {?}
         */
        ReplayCommandDispatcher.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
            this.subscriptions.forEach((/**
             * @param {?} handle
             * @return {?}
             */
            function (handle) {
                clearTimeout(handle);
            }));
        };
        return ReplayCommandDispatcher;
    }());
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
    var   /**
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
    var   /**
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
    var   /**
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
        AggregateStore.prototype.getById = function (aggregateId) { };
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
                var aggregate = store.getById(aggregateId);
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
            return JSON.parse(JSON.stringify(aggregates));
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
    var   /**
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
     */
    var   /**
     * @abstract
     */
    AggregateId = /** @class */ (function () {
        function AggregateId(uid) {
            this.uid = uid;
        }
        /**
         * @return {?}
         */
        AggregateId.prototype.toString = /**
         * @return {?}
         */
        function () {
            return this.uid;
        };
        /**
         * @return {?}
         */
        AggregateId.prototype.getId = /**
         * @return {?}
         */
        function () {
            return this.uid;
        };
        /**
         * @param {?} aggregateId
         * @return {?}
         */
        AggregateId.prototype.equals = /**
         * @param {?} aggregateId
         * @return {?}
         */
        function (aggregateId) {
            return this.uid === aggregateId.getId();
        };
        return AggregateId;
    }());
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
    var DomainEventStatus = {
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
    var   /**
     * @abstract
     */
    StatusResponse = /** @class */ (function () {
        function StatusResponse(status, payload) {
            this.status = status;
            this.payload = payload;
        }
        /**
         * @return {?}
         */
        StatusResponse.prototype.getStatus = /**
         * @return {?}
         */
        function () {
            return this.status;
        };
        /**
         * @return {?}
         */
        StatusResponse.prototype.getPayload = /**
         * @return {?}
         */
        function () {
            return this.payload;
        };
        return StatusResponse;
    }());
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
    var   /**
     * @abstract
     * @template I
     */
    DomainEvent = /** @class */ (function (_super) {
        __extends(DomainEvent, _super);
        function DomainEvent(aggregateId, messageType, payload) {
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
         * @param {?} command
         * @return {?}
         */
        DomainEvent.prototype.setRequestCommand = /**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            this.requestCommandId = command.getMessageId();
        };
        /**
         * @param {?} command
         * @return {?}
         */
        DomainEvent.prototype.fromCommand = /**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            return command.getMessageId() === this.requestCommandId;
        };
        /**
         * @param {?} payload
         * @return {?}
         */
        DomainEvent.prototype.setPayload = /**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            this.payload = payload;
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
    var DomainEventStore = /** @class */ (function () {
        function DomainEventStore() {
            this.domainEvents = [];
            this.domainEvents$ = new rxjs.Subject();
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
                return rxjs.of(event);
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
                return rxjs.throwError(new Error('Unsupported argument type.'));
            }
            return this.domainEvents$
                .pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event.constructor.name === eventType; })), operators.take(1));
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
            { type: core.Injectable }
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DomainEventStream.ctorParameters = function () { return [
            { type: DomainEventStore }
        ]; };
        return DomainEventStream;
    }(rxjs.Subject));
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
                console.error(event + " is not defined");
            }
            if (!(event instanceof DomainEvent)) {
                // throw new Error(`${event} is not a DomainEvent`);
                console.error(event + " is not a DomainEvent");
            }
            this.eventStream.next(event);
        };
        DomainEventPublisher.decorators = [
            { type: core.Injectable }
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
            if (eventStream) {
                _this.source = eventStream;
            }
            return _this;
        }
        /**
         * @template R
         * @param {?} operator
         * @return {?}
         */
        DomainEventBus.prototype.lift = /**
         * @template R
         * @param {?} operator
         * @return {?}
         */
        function (operator) {
            /** @type {?} */
            var observable = new DomainEventBus();
            observable.source = this;
            observable.operator = operator;
            return observable;
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
                .pipe(operators.filter((/**
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
                .pipe(operators.filter((/**
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DomainEventBus.ctorParameters = function () { return [
            { type: DomainEventStream }
        ]; };
        return DomainEventBus;
    }(rxjs.Observable));

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
    var DomainEventPayload = /** @class */ (function () {
        function DomainEventPayload(value) {
            this.value = value;
        }
        /**
         * @return {?}
         */
        DomainEventPayload.prototype.getValue = /**
         * @return {?}
         */
        function () {
            return this.value;
        };
        return DomainEventPayload;
    }());
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
    var   /**
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
    var   /**
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
    var   /**
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
     */
    var   /**
     * @abstract
     */
    Reactive = /** @class */ (function () {
        function Reactive() {
            this.unsubscribe$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        Reactive.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.unsubscribe();
        };
        /**
         * @protected
         * @return {?}
         */
        Reactive.prototype.unsubscribe = /**
         * @protected
         * @return {?}
         */
        function () {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        };
        /**
         * @protected
         * @return {?}
         */
        Reactive.prototype.takeUntil = /**
         * @protected
         * @return {?}
         */
        function () {
            return operators.takeUntil(this.unsubscribe$);
        };
        return Reactive;
    }());
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
    var   /**
     * @abstract
     * @template I
     */
    ReadModelRootRepository = /** @class */ (function (_super) {
        __extends(ReadModelRootRepository, _super);
        function ReadModelRootRepository(domainEventBus) {
            var _this = _super.call(this) || this;
            domainEventBus
                .ofEvent.apply(domainEventBus, __spread(_this.forEvents())).pipe(_this.takeUntil())
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                try {
                    _this.subscribe(event);
                }
                catch (e) {
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
    var   /**
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
    var   /**
     * @abstract
     * @template R, I
     */
    EventRepository = /** @class */ (function () {
        function EventRepository(domainEventBus) {
            this.domainEventBus = domainEventBus;
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
                .pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event.getAggregateId().toString() === aggregateId.toString(); })));
        };
        return EventRepository;
    }());
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
    var   /**
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
     */
    var   /**
     * @abstract
     */
    EntityId = /** @class */ (function () {
        function EntityId(uid) {
            this.uid = uid;
        }
        /**
         * @return {?}
         */
        EntityId.prototype.toString = /**
         * @return {?}
         */
        function () {
            return this.uid;
        };
        /**
         * @return {?}
         */
        EntityId.prototype.getId = /**
         * @return {?}
         */
        function () {
            return this.uid;
        };
        /**
         * @param {?} entityId
         * @return {?}
         */
        EntityId.prototype.equals = /**
         * @param {?} entityId
         * @return {?}
         */
        function (entityId) {
            return this.uid === entityId.getId();
        };
        return EntityId;
    }());
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
    var   /**
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
    var   /**
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
    var   /**
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
     * @abstract
     */
    var   /**
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
            this.unsubscribe();
        };
        return ReactiveService;
    }(Reactive));

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
    var   /**
     * @abstract
     * @template T
     */
    AggregateArchive = /** @class */ (function (_super) {
        __extends(AggregateArchive, _super);
        function AggregateArchive(defaultValue) {
            var _this = _super.call(this) || this;
            _this.archive = new Map();
            _this.initArchive(defaultValue);
            return _this;
        }
        /**
         * @param {?} aggregateId
         * @return {?}
         */
        AggregateArchive.prototype.on = /**
         * @param {?} aggregateId
         * @return {?}
         */
        function (aggregateId) {
            return this.archive$
                .asObservable()
                .pipe(this.takeUntil(), operators.map((/**
             * @param {?} map
             * @return {?}
             */
            function (map) {
                return map.get(aggregateId.toString());
            })), operators.filter((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value !== undefined; })), operators.distinctUntilChanged());
        };
        /**
         * @param {?} aggregateId
         * @return {?}
         */
        AggregateArchive.prototype.get = /**
         * @param {?} aggregateId
         * @return {?}
         */
        function (aggregateId) {
            return this.archive.get(aggregateId.toString());
        };
        /**
         * @param {?} aggregateId
         * @param {?} value
         * @return {?}
         */
        AggregateArchive.prototype.next = /**
         * @param {?} aggregateId
         * @param {?} value
         * @return {?}
         */
        function (aggregateId, value) {
            this.archive.set(aggregateId.toString(), value);
            this.archive$.next(this.archive);
        };
        /**
         * @private
         * @param {?=} defaultValue
         * @return {?}
         */
        AggregateArchive.prototype.initArchive = /**
         * @private
         * @param {?=} defaultValue
         * @return {?}
         */
        function (defaultValue) {
            if (defaultValue) {
                this.archive.set(defaultValue.aggregateId.toString(), defaultValue.value);
                this.archive$ = new rxjs.BehaviorSubject(this.archive);
            }
            else {
                this.archive$ = new rxjs.ReplaySubject(1);
            }
        };
        return AggregateArchive;
    }(ReactiveService));
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
    var   /**
     * @abstract
     * @template T
     */
    Archive = /** @class */ (function () {
        function Archive(value) {
            if (value) {
                this.archive$ = new rxjs.BehaviorSubject(value);
            }
            else {
                this.archive$ = new rxjs.ReplaySubject(1);
            }
        }
        /**
         * @return {?}
         */
        Archive.prototype.onValue = /**
         * @return {?}
         */
        function () {
            return this.archive$.asObservable();
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
     * @template T
     */
    var   /**
     * @template T
     */
    Optional = /** @class */ (function () {
        function Optional(value) {
            if (!Optional.isEmpty(value) && Optional.isEmpty(value)) {
                return Optional.empty();
            }
            this.value = value;
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
        Optional.isEmpty = /**
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
            return Optional.isEmpty(this.value);
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
    var   /**
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
            if (internalKey) {
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
            /** @type {?} */
            var internalKey = this.getInternalKey(key);
            this.values.set(internalKey, value);
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
            /** @type {?} */
            var realKey = this.keys.get(key.toString());
            if (!realKey) {
                this.keys.set(key.toString(), key);
                return key;
            }
            else {
                return realKey;
            }
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
     * @abstract
     * @template I
     */
    var   /**
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
    var   /**
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
    var   /**
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
    var   /**
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
        PersistAggregateStore.prototype.getById = /**
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
    var   /**
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
        InMemoryAggregateStore.prototype.getById = /**
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
         * @return {?}
         */
        InMemoryAggregateStore.prototype.getAll = /**
         * @return {?}
         */
        function () {
            return this.inMemoryStore.getAll();
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
    var   /**
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
            // const aggregateId = readModelRootId.toAggregateId() as B; // TODO remove as
            return this.getValue(aggregateId);
        };
        /**
         * @return {?}
         */
        InMemoryReadModelStore.prototype.getAll = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.inMemoryStore
                .getAll()
                .map((/**
             * @param {?} aggregate
             * @return {?}
             */
            function (aggregate) { return _this.toReadModel(aggregate); }));
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
     * @template I, S
     */
    var   /**
     * @abstract
     * @template I, S
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
            return Array.from(this.state.values());
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
            _this.unsubscribe$ = new rxjs.Subject();
            commandBus
                .pipe(operators.filter((/**
             * @return {?}
             */
            function () { return _this.enabled; })), operators.takeUntil(_this.unsubscribe$))
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
            console.log(command.toString(), command);
        };
        ConsoleCommandLogger.decorators = [
            { type: core.Injectable }
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
            _this.unsubscribe$ = new rxjs.Subject();
            eventBus
                .pipe(operators.filter((/**
             * @return {?}
             */
            function () { return _this.enabled; })), operators.takeUntil(_this.unsubscribe$))
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
            console.log(domainEvent.toString(), domainEvent, aggregates);
        };
        ConsoleEventLogger.decorators = [
            { type: core.Injectable }
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
            if (common.isPlatformBrowser(this.platformId)) {
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
            if (common.isPlatformBrowser(this.platformId)) {
                this.commandLogger.stop();
                this.eventLogger.stop();
            }
        };
        HermesLoggersInitializer.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        HermesLoggersInitializer.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
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
    var   /**
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
    var   /**
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
    var   /**
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
            { type: core.NgModule, args: [{},] }
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
    var   /**
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
            this.commandHandler.publishDomainEvents(aggregate, command);
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
                var optAggregate = repo.getById(aggregateId);
                optAggregate.ifPresent((/**
                 * @param {?} aggregate
                 * @return {?}
                 */
                function (aggregate) {
                    _this.commandHandler.handleAggregate(aggregate, command);
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
    var   /**
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
            _this.hermesLoggersInitializer.start();
            _this.checkNullCommand(commandBus, commandHandlers, aggregateCommandHandlers);
            _this.checkCommandHandlerIsCollection(commandHandlers);
            _this.checkDomainEventHandlerIsCollection(eventHandlers);
            if (definedAggregate) {
                definedAggregate.forEach((/**
                 * @param {?} def
                 * @return {?}
                 */
                function (def) {
                    /** @type {?} */
                    var factory = injector.get(def.factory);
                    /** @type {?} */
                    var repository = injector.get(def.repository);
                    aggregateFactoryArchive.add(def.key, factory);
                    aggregateRepositoryArchive.add(def.key, repository);
                }));
            }
            if (aggregateCommandHandlers) {
                aggregateCommandHandlers.forEach((/**
                 * @param {?} handler
                 * @return {?}
                 */
                function (handler) {
                    commandBus
                        .ofCreateAggregateHandler(handler)
                        .pipe(_this.takeUntil())
                        .subscribe((/**
                     * @param {?} command
                     * @return {?}
                     */
                    function (command) {
                        handler.handleCommand(command);
                    }));
                }));
            }
            if (commandHandlers) {
                commandHandlers.forEach((/**
                 * @param {?} handler
                 * @return {?}
                 */
                function (handler) {
                    commandBus
                        .ofCommandHandler(handler)
                        .pipe(_this.takeUntil())
                        .subscribe((/**
                     * @param {?} command
                     * @return {?}
                     */
                    function (command) {
                        handler.handleCommand(command);
                    }));
                }));
            }
            if (eventHandlers) {
                eventHandlers.forEach((/**
                 * @param {?} handler
                 * @return {?}
                 */
                function (handler) {
                    domainEventBus
                        .ofEventHandler(handler)
                        .pipe(_this.takeUntil())
                        .subscribe((/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) {
                        handler.handleEvent(event);
                    }));
                }));
                // domainEventBus
                // 	.pipe(this.takeUntil())
                // 	.subscribe((event: E) => {
                //
                // 		eventHandlers.forEach((handler: DomainEventHandlerImpl<I, E>) => {
                // 			handler.handleEvent(event);
                // 		});
                // 	});
            }
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
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} command
             * @return {?}
             */
            function (command) {
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
                console.warn("You might provided commandHandler without specifying \"multi: true\".");
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
                console.warn("You might provided eventHandler without specifying \"multi: true\".");
            }
        };
        /** @nocollapse */
        HermesBaseModule.ctorParameters = function () { return [
            { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [DOMAIN_EVENT_HANDLERS,] }] },
            { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [CREATE_AGGREGATE_COMMAND_HANDLERS,] }] },
            { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [COMMAND_HANDLERS,] }] },
            { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [aggregateDefinitionToken,] }] },
            { type: core.Injector },
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
         * @param {?} createHandler
         * @param {?=} commandHandlers
         * @param {?=} domainEventHandlers
         * @return {?}
         */
        HermesModule.defineAggregate = /**
         * @template I, A, C
         * @param {?} aggregateKey
         * @param {?} factory
         * @param {?} repository
         * @param {?} createHandler
         * @param {?=} commandHandlers
         * @param {?=} domainEventHandlers
         * @return {?}
         */
        function (aggregateKey, factory, repository, createHandler, commandHandlers, domainEventHandlers) {
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
                    repository], HermesModule.registerCreateCommandHandler(createHandler, aggregateKey), commandHandlers, domainEventHandlers)
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        providers: providers
                    },] }
        ];
        /** @nocollapse */
        HermesModule.ctorParameters = function () { return [
            { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [DOMAIN_EVENT_HANDLERS,] }] },
            { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [CREATE_AGGREGATE_COMMAND_HANDLERS,] }] },
            { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [COMMAND_HANDLERS,] }] },
            { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [aggregateDefinitionToken,] }] },
            { type: core.Injector },
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
            expect(actualEvent.equalsByType(expectedEvent)).toBeTruthy('Event type should be equal');
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
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    CreateAggregateCommand = /** @class */ (function (_super) {
        __extends(CreateAggregateCommand, _super);
        function CreateAggregateCommand(aggregateId, type) {
            return _super.call(this, aggregateId, type) || this;
        }
        return CreateAggregateCommand;
    }(Command));

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
    exports.DomainEventPayload = DomainEventPayload;
    exports.DomainEventPublisher = DomainEventPublisher;
    exports.DomainEventStatus = DomainEventStatus;
    exports.DomainEventStream = DomainEventStream;
    exports.DomainEventType = DomainEventType;
    exports.DomainModule = DomainModule;
    exports.DomainObject = DomainObject;
    exports.EVENT_LOGGER_ENABLED = EVENT_LOGGER_ENABLED;
    exports.Entity = Entity;
    exports.EntityId = EntityId;
    exports.EventRepository = EventRepository;
    exports.FeatureModule = FeatureModule;
    exports.HermesApi = HermesApi;
    exports.HermesModule = HermesModule;
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
    exports.ReadModelEntity = ReadModelEntity;
    exports.ReadModelEntityId = ReadModelEntityId;
    exports.ReadModelObject = ReadModelObject;
    exports.ReadModelRoot = ReadModelRoot;
    exports.ReadModelRootId = ReadModelRootId;
    exports.ReadModelRootRepository = ReadModelRootRepository;
    exports.ReadModelStore = ReadModelStore;
    exports.ReplayCommandDispatcher = ReplayCommandDispatcher;
    exports.StatusResponse = StatusResponse;
    exports.ValueObject = ValueObject;
    exports.assertAggregateEvents = assertAggregateEvents;
    exports.assertDomainEvents = assertDomainEvents;
    exports.disableHermesLoggers = disableHermesLoggers;
    exports.enableHermesLoggers = enableHermesLoggers;
    exports.provideEventHandlers = provideEventHandlers;
    exports.ɵa = commandLoggerFactory;
    exports.ɵb = eventLoggerFactory;
    exports.ɵba = createAggregateCommandHandlerFactory;
    exports.ɵbb = CreateAggregateCommandHandlerImpl;
    exports.ɵc = HermesBaseModule;
    exports.ɵd = Logger;
    exports.ɵe = Message;
    exports.ɵf = FILTERED_COMMAND_STREAM;
    exports.ɵg = DomainEventStore;
    exports.ɵh = ReactiveService;
    exports.ɵi = DOMAIN_EVENT_HANDLERS;
    exports.ɵj = CREATE_AGGREGATE_COMMAND_HANDLERS;
    exports.ɵk = COMMAND_HANDLERS;
    exports.ɵl = aggregateDefinitionToken;
    exports.ɵn = AggregateFactoryArchive;
    exports.ɵo = AggregateRepositoryArchive;
    exports.ɵp = HermesLoggersInitializer;
    exports.ɵq = ConsoleCommandLogger;
    exports.ɵr = NoopCommandLogger;
    exports.ɵs = ConsoleEventLogger;
    exports.ɵt = NoopEventLogger;
    exports.ɵu = HermesDomainModule;
    exports.ɵv = commandHandlerFactory;
    exports.ɵw = CommandHandlerImpl;
    exports.ɵx = domainEventHandlerFactory;
    exports.ɵy = multiDomainEventHandlerFactory;
    exports.ɵz = DomainEventHandlerImpl;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=generic-ui-hermes.umd.js.map
