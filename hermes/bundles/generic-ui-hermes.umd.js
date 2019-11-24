(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@generic-ui/hermes', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global['generic-ui'] = global['generic-ui'] || {}, global['generic-ui'].hermes = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, rxjs, operators, common) { 'use strict';

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
     * ngc for grid package for some reasons doesn't allow to use injection token
     * @type {?}
     */
    var COMMAND_HANDLERS = 'HERMES - COMMAND_HANDLERS';

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
    // tslint:disable:no-bitwise
    /**
     * @return {?}
     */
    function getRandomFromMathRandom() {
        /** @type {?} */
        var result = new Array(16);
        /** @type {?} */
        var r = 0;
        for (var i = 0; i < 16; i++) {
            if ((i & 0x03) === 0) {
                r = Math.random() * 0x100000000;
            }
            result[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }
        return (/** @type {?} */ (result));
    }
    /**
     * @return {?}
     */
    function getRandomFunction() {
        // tslint:disable-next-line:no-string-literal
        /** @type {?} */
        var browserCrypto = window.crypto || ((/** @type {?} */ (window['msCrypto'])));
        if (browserCrypto && browserCrypto.getRandomValues) {
            // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
            //
            // Moderately fast, high quality
            try {
                return (/**
                 * @return {?}
                 */
                function getRandomFromCryptoRandom() {
                    /** @type {?} */
                    var result = new Uint8Array(16);
                    browserCrypto.getRandomValues(result);
                    return (/** @type {?} */ (result));
                });
            }
            catch (e) { /* fallback*/
            }
        }
        // Math.random()-based (RNG)
        //
        // If all else fails, use Math.random().  It's fast, but is of unspecified
        // quality.
        return getRandomFromMathRandom;
    }
    /** @type {?} */
    var getRandom = getRandomFunction();
    var ByteHexMappings = /** @class */ (function () {
        function ByteHexMappings() {
            this.byteToHex = [];
            this.hexToByte = {};
            for (var i = 0; i < 256; i++) {
                this.byteToHex[i] = (i + 0x100).toString(16).substr(1);
                this.hexToByte[this.byteToHex[i]] = i;
            }
        }
        return ByteHexMappings;
    }());
    if (false) {
        /** @type {?} */
        ByteHexMappings.prototype.byteToHex;
        /** @type {?} */
        ByteHexMappings.prototype.hexToByte;
    }
    /** @type {?} */
    var byteHexMappings = new ByteHexMappings();
    /**
     * @return {?}
     */
    function getUuidV4() {
        /** @type {?} */
        var result = getRandom();
        // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
        result[6] = (result[6] & 0x0f) | 0x40;
        result[8] = (result[8] & 0x3f) | 0x80;
        return result;
    }
    /**
     * @param {?} buf
     * @param {?=} offset
     * @return {?}
     */
    function uuidToString(buf, offset) {
        if (offset === void 0) { offset = 0; }
        /** @type {?} */
        var i = offset;
        /** @type {?} */
        var bth = byteHexMappings.byteToHex;
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
    function getUuidV4String() {
        return uuidToString(getUuidV4());
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
    Message = /** @class */ (function () {
        function Message(aggregateId, messageType) {
            this.aggregateId = aggregateId;
            this.messageType = messageType;
            this.messageId = getUuidV4String();
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
        Message.prototype.messageId;
        /** @type {?} */
        Message.prototype.aggregateId;
        /**
         * @type {?}
         * @protected
         */
        Message.prototype.messageType;
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
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    CommandHandler = /** @class */ (function () {
        function CommandHandler(command, // any is required when inherited Command has more arguments than Command
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
        CommandHandler.prototype.forCommand = /**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            return this.commandType === command.getMessageType();
        };
        /**
         * @param {?} command
         * @return {?}
         */
        CommandHandler.prototype.handleCommand = /**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            var _this = this;
            /** @type {?} */
            var result = this.handle(command);
            if (rxjs.isObservable(result)) {
                ((/** @type {?} */ (result)))
                    .pipe(operators.take(1))
                    .subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    // trigger event
                    _this.dispatchEvent(command, res);
                }));
            }
            else {
                this.dispatchEvent(command, (/** @type {?} */ (result)));
            }
        };
        /**
         * @private
         * @param {?} command
         * @param {?=} result
         * @return {?}
         */
        CommandHandler.prototype.dispatchEvent = /**
         * @private
         * @param {?} command
         * @param {?=} result
         * @return {?}
         */
        function (command, result) {
            if (this.domainEvent && this.eventPublisher) {
                /** @type {?} */
                var aggregateId = command.aggregateId;
                /** @type {?} */
                var event_1 = new ((/** @type {?} */ (this.domainEvent)))(aggregateId);
                event_1.setRequestCommand(command);
                if (result) {
                    event_1.setPayload(result);
                }
                this.eventPublisher.publish(event_1);
            }
        };
        /**
         * @private
         * @return {?}
         */
        CommandHandler.prototype.createCommandInstance = /**
         * @private
         * @return {?}
         */
        function () {
            var _a;
            /** @type {?} */
            var args = [];
            /** @type {?} */
            var argumentLength = this.command.constructor.length;
            args.fill(undefined, 0, argumentLength);
            return (new ((_a = ((/** @type {?} */ (this.command)))).bind.apply(_a, __spread([void 0], args)))());
        };
        return CommandHandler;
    }());
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
        CommandBus.prototype.ofHandler = /**
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
         * @return {?}
         */
        CommandBus.prototype.ofNullHandler = /**
         * @template C2
         * @param {?} handlers
         * @return {?}
         */
        function (handlers) {
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
     */
    var   /**
     * @abstract
     */
    CommandLogger = /** @class */ (function () {
        function CommandLogger() {
        }
        return CommandLogger;
    }());
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
    var   /**
     * @abstract
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
     */
    var   /**
     * @abstract
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
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template S
     */
    var   /**
     * @abstract
     * @template S
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
     */
    var   /**
     * @abstract
     */
    Aggregate = /** @class */ (function () {
        function Aggregate(aggregateId) {
            this.aggregateId = aggregateId;
            this.events = [];
        }
        /**
         * @return {?}
         */
        Aggregate.prototype.getId = /**
         * @return {?}
         */
        function () {
            return this.aggregateId;
        };
        /**
         * @return {?}
         */
        Aggregate.prototype.getEvents = /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.events));
        };
        /**
         * @param {?} event
         * @return {?}
         */
        Aggregate.prototype.addEvent = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.events.push(event);
        };
        /**
         * @return {?}
         */
        Aggregate.prototype.clearEvents = /**
         * @return {?}
         */
        function () {
            this.events.length = 0;
        };
        return Aggregate;
    }());
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
    var AggregateId = /** @class */ (function () {
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
     */
    var   /**
     * @abstract
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
         * @param {?} aggregateEvent
         * @param {?} command
         * @return {?}
         */
        DomainEventPublisher.prototype.dispatchAggregateEvent = /**
         * @param {?} aggregateEvent
         * @param {?} command
         * @return {?}
         */
        function (aggregateEvent, command) {
            // TODO
            // const domainEventName = aggregateEvent.getDomainEventName() as typeof DomainEvent;
            //
            // const domainEvent: DomainEvent = new (domainEventName)(command.getAggregateId());
            // this.eventStream.next();
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
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    DomainEventHandler = /** @class */ (function () {
        function DomainEventHandler() {
        }
        return DomainEventHandler;
    }());
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
    var   /**
     * @abstract
     */
    DomainEventLogger = /** @class */ (function () {
        function DomainEventLogger() {
        }
        return DomainEventLogger;
    }());
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
    /** @type {?} */
    var DOMAIN_EVENT_HANDLERS = 'DOMAIN_EVENT_HANDLERS';

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
    ReadModel = /** @class */ (function () {
        function ReadModel(gui) {
            this.aggregateId = gui;
        }
        /**
         * @return {?}
         */
        ReadModel.prototype.getId = /**
         * @return {?}
         */
        function () {
            return this.aggregateId;
        };
        return ReadModel;
    }());
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
    var   /**
     * @abstract
     * @template Q
     */
    ReadModelStore = /** @class */ (function () {
        function ReadModelStore() {
        }
        return ReadModelStore;
    }());
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
    var   /**
     * @abstract
     * @template T
     */
    ReactiveAggregateArchive = /** @class */ (function () {
        function ReactiveAggregateArchive() {
            this.archive = new Map();
            this.archive$ = new rxjs.ReplaySubject();
        }
        /**
         * @param {?} aggregateId
         * @param {?} value
         * @return {?}
         */
        ReactiveAggregateArchive.prototype.set = /**
         * @param {?} aggregateId
         * @param {?} value
         * @return {?}
         */
        function (aggregateId, value) {
            this.archive.set(aggregateId.toString(), value);
            this.archive$.next(this.archive);
        };
        /**
         * @param {?} aggregateId
         * @return {?}
         */
        ReactiveAggregateArchive.prototype.select = /**
         * @param {?} aggregateId
         * @return {?}
         */
        function (aggregateId) {
            return this.archive$
                .asObservable()
                .pipe(operators.map((/**
             * @param {?} map
             * @return {?}
             */
            function (map) {
                return map.get(aggregateId.toString());
            })), operators.distinctUntilChanged());
        };
        return ReactiveAggregateArchive;
    }());
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
    var hermesApi = 'hermesApi';
    var HermesApi = /** @class */ (function () {
        function HermesApi(commandLogger, eventLogger) {
            this.commandLogger = commandLogger;
            this.eventLogger = eventLogger;
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
                    }
                };
            });
            window[hermesApi] = api(this);
            window[hermesApi].loggers = false;
        }
        HermesApi.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        HermesApi.ctorParameters = function () { return [
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
        function (handler) {
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
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    PersistAnemia = /** @class */ (function () {
        function PersistAnemia(uid) {
            this.aggregateId = uid;
        }
        /**
         * @return {?}
         */
        PersistAnemia.prototype.getAggregateId = /**
         * @return {?}
         */
        function () {
            return this.aggregateId;
        };
        /**
         * @return {?}
         */
        PersistAnemia.prototype.getId = /**
         * @return {?}
         */
        function () {
            return this.aggregateId.toString();
        };
        return PersistAnemia;
    }());
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
    var   /**
     * Rename
     * @abstract
     * @template A
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
            return this.state.get(aggregateId.toString());
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
     * @template T, S
     */
    var   /**
     * @abstract
     * @template T, S
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
            /** @type {?} */
            var anemias = this.stateStore.getAll();
            return anemias.map((/**
             * @param {?} anemia
             * @return {?}
             */
            function (anemia) { return _this.fromAnemia(anemia); }));
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
            var anemia = this.stateStore.get(aggregateId);
            if (anemia) {
                return this.fromAnemia(anemia);
            }
            else {
                return null;
            }
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
    var   /**
     * @abstract
     * @template T, S
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
            var anemia = this.stateStore.get(aggregateId);
            if (anemia) {
                return this.fromAnemia(anemia);
            }
            else {
                return null;
            }
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
     * @template T
     */
    var   /**
     * @abstract
     * @template T
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
            return this.inMemoryStore.get(aggregateId);
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
     * @template T, S
     */
    var   /**
     * @abstract
     * @template T, S
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
         * @return {?}
         */
        InMemoryReadModelStore.prototype.getAll = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.inMemoryStore.getAll()
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
            var aggregate = this.inMemoryStore.get(aggregateId);
            if (aggregate) {
                return this.toReadModel(aggregate);
            }
            else {
                return null;
            }
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
     * @template S
     */
    var   /**
     * @abstract
     * @template S
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
            return this.state.get(aggregateId.toString());
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
         * @param {?} command
         * @return {?}
         */
        ConsoleCommandLogger.prototype.log = /**
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
         * @param {?} command
         * @return {?}
         */
        NoopCommandLogger.prototype.log = /**
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
         * @param {?} domainEvent
         * @return {?}
         */
        ConsoleEventLogger.prototype.log = /**
         * @param {?} domainEvent
         * @return {?}
         */
        function (domainEvent) {
            /** @type {?} */
            var aggregateId = domainEvent.aggregateId;
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
        NoopEventLogger.prototype.log = /**
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
    /** @type {?} */
    var hermesProviders = [
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
        ConsoleEventLogger
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
    var HermesModule = /** @class */ (function () {
        function HermesModule(commandHandlers, eventHandlers, commandBus, domainEventBus, commandLogger, eventLogger, hermesApi) {
            var _this = this;
            this.commandLogger = commandLogger;
            this.eventLogger = eventLogger;
            this.hermesApi = hermesApi;
            this.unsubscribe$ = new rxjs.Subject();
            this.loggersStart();
            this.checkNullCommand(commandBus, commandHandlers);
            this.checkCommandHandlerIsCollection(commandHandlers);
            if (commandHandlers) {
                commandHandlers.forEach((/**
                 * @param {?} handler
                 * @return {?}
                 */
                function (handler) {
                    commandBus
                        .ofHandler(handler)
                        .pipe(operators.takeUntil(_this.unsubscribe$))
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
                domainEventBus
                    .pipe(operators.takeUntil(this.unsubscribe$))
                    .subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    eventHandlers.forEach((/**
                     * @param {?} handler
                     * @return {?}
                     */
                    function (handler) {
                        handler.handle(event);
                    }));
                }));
            }
        }
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
         * @return {?}
         */
        HermesModule.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
            this.loggersStop();
        };
        /**
         * @private
         * @return {?}
         */
        HermesModule.prototype.loggersStart = /**
         * @private
         * @return {?}
         */
        function () {
            this.commandLogger.start();
            this.eventLogger.start();
        };
        /**
         * @private
         * @return {?}
         */
        HermesModule.prototype.loggersStop = /**
         * @private
         * @return {?}
         */
        function () {
            this.commandLogger.stop();
            this.eventLogger.stop();
        };
        /**
         * @private
         * @param {?} commandBus
         * @param {?} commandHandlers
         * @return {?}
         */
        HermesModule.prototype.checkNullCommand = /**
         * @private
         * @param {?} commandBus
         * @param {?} commandHandlers
         * @return {?}
         */
        function (commandBus, commandHandlers) {
            commandBus
                .ofNullHandler(commandHandlers)
                .pipe(operators.takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @param {?} command
             * @return {?}
             */
            function (command) {
                console.log("Command " + command.toString() + " was not intercepted by any CommandHandler.");
            }));
        };
        /**
         * @private
         * @param {?} commandHandlers
         * @return {?}
         */
        HermesModule.prototype.checkCommandHandlerIsCollection = /**
         * @private
         * @param {?} commandHandlers
         * @return {?}
         */
        function (commandHandlers) {
            if (commandHandlers && !Array.isArray(commandHandlers)) {
                console.log("You might provided commandHandler without specifying \"multi: true\".");
            }
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
            { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [COMMAND_HANDLERS,] }] },
            { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [DOMAIN_EVENT_HANDLERS,] }] },
            { type: CommandBus },
            { type: DomainEventBus },
            { type: CommandLogger },
            { type: DomainEventLogger },
            { type: HermesApi }
        ]; };
        return HermesModule;
    }());
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

    exports.Aggregate = Aggregate;
    exports.AggregateEvent = AggregateEvent;
    exports.AggregateId = AggregateId;
    exports.AggregateStore = AggregateStore;
    exports.AggregateStoreRegister = AggregateStoreRegister;
    exports.COMMAND_HANDLERS = COMMAND_HANDLERS;
    exports.COMMAND_LOGGER_ENABLED = COMMAND_LOGGER_ENABLED;
    exports.Command = Command;
    exports.CommandBus = CommandBus;
    exports.CommandDispatcher = CommandDispatcher;
    exports.CommandHandler = CommandHandler;
    exports.CommandLogger = CommandLogger;
    exports.CommandStream = CommandStream;
    exports.DOMAIN_EVENT_HANDLERS = DOMAIN_EVENT_HANDLERS;
    exports.DomainEvent = DomainEvent;
    exports.DomainEventBus = DomainEventBus;
    exports.DomainEventHandler = DomainEventHandler;
    exports.DomainEventLogger = DomainEventLogger;
    exports.DomainEventPayload = DomainEventPayload;
    exports.DomainEventPublisher = DomainEventPublisher;
    exports.DomainEventStatus = DomainEventStatus;
    exports.DomainEventStream = DomainEventStream;
    exports.EVENT_LOGGER_ENABLED = EVENT_LOGGER_ENABLED;
    exports.HermesApi = HermesApi;
    exports.HermesModule = HermesModule;
    exports.InMemoryAggregateStore = InMemoryAggregateStore;
    exports.InMemoryReadModelStore = InMemoryReadModelStore;
    exports.InMemoryStore = InMemoryStore;
    exports.PersistAggregateStore = PersistAggregateStore;
    exports.PersistAnemia = PersistAnemia;
    exports.PersistReadModelStore = PersistReadModelStore;
    exports.PersistStateStore = PersistStateStore;
    exports.ReactiveAggregateArchive = ReactiveAggregateArchive;
    exports.ReadModel = ReadModel;
    exports.ReadModelStore = ReadModelStore;
    exports.ReplayCommandDispatcher = ReplayCommandDispatcher;
    exports.StatusResponse = StatusResponse;
    exports.assertAggregateEvents = assertAggregateEvents;
    exports.assertDomainEvents = assertDomainEvents;
    exports.disableHermesLoggers = disableHermesLoggers;
    exports.enableHermesLoggers = enableHermesLoggers;
    exports.getUuidV4String = getUuidV4String;
    exports.provideCommandHandlers = provideCommandHandlers;
    exports.provideEventHandlers = provideEventHandlers;
    exports.ɵa = getUuidV4;
    exports.ɵb = uuidToString;
    exports.ɵc = commandLoggerFactory;
    exports.ɵd = eventLoggerFactory;
    exports.ɵe = Message;
    exports.ɵf = DomainEventStore;
    exports.ɵg = FILTERED_COMMAND_STREAM;
    exports.ɵh = ConsoleCommandLogger;
    exports.ɵi = NoopCommandLogger;
    exports.ɵj = ConsoleEventLogger;
    exports.ɵk = NoopEventLogger;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=generic-ui-hermes.umd.js.map
