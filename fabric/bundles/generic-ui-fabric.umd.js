(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@generic-ui/fabric', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs/operators', 'rxjs'], factory) :
    (global = global || self, factory((global['generic-ui'] = global['generic-ui'] || {}, global['generic-ui'].fabric = {}), global.ng.core, global.ng.common, global.ng.forms, global.rxjs.operators, global.rxjs));
}(this, (function (exports, core, common, forms, operators, rxjs) { 'use strict';

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
    /** @enum {string} */
    var Theme = {
        FABRIC: 'FABRIC',
        MATERIAL: 'MATERIAL',
        GENERIC: 'GENERIC',
        LIGHT: 'LIGHT',
        DARK: 'DARK',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var Indicator = /** @class */ (function () {
        function Indicator(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.outline = false;
            this.PRIMARY_CLASS_NAME = 'gui-primary';
            this.SECONDARY_CLASS_NAME = 'gui-secondary';
            this.OUTLINE_CLASS_NAME = 'gui-outline';
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        Indicator.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.primary) {
                if (this.primary) {
                    this.addClass(this.PRIMARY_CLASS_NAME);
                }
                else {
                    this.removeClass(this.PRIMARY_CLASS_NAME);
                }
            }
            if (changes.secondary) {
                if (this.secondary) {
                    this.addClass(this.SECONDARY_CLASS_NAME);
                }
                else {
                    this.removeClass(this.SECONDARY_CLASS_NAME);
                }
            }
            if (changes.outline) {
                if (this.outline) {
                    this.addClass(this.OUTLINE_CLASS_NAME);
                }
                else {
                    this.removeClass(this.OUTLINE_CLASS_NAME);
                }
            }
        };
        /**
         * @protected
         * @param {?} className
         * @return {?}
         */
        Indicator.prototype.addClass = /**
         * @protected
         * @param {?} className
         * @return {?}
         */
        function (className) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        };
        /**
         * @protected
         * @param {?} className
         * @return {?}
         */
        Indicator.prototype.removeClass = /**
         * @protected
         * @param {?} className
         * @return {?}
         */
        function (className) {
            this.renderer.removeClass(this.elementRef.nativeElement, className);
        };
        Indicator.propDecorators = {
            primary: [{ type: core.Input }],
            secondary: [{ type: core.Input }],
            outline: [{ type: core.Input }]
        };
        return Indicator;
    }());
    if (false) {
        /** @type {?} */
        Indicator.prototype.primary;
        /** @type {?} */
        Indicator.prototype.secondary;
        /** @type {?} */
        Indicator.prototype.outline;
        /**
         * @type {?}
         * @private
         */
        Indicator.prototype.PRIMARY_CLASS_NAME;
        /**
         * @type {?}
         * @private
         */
        Indicator.prototype.SECONDARY_CLASS_NAME;
        /**
         * @type {?}
         * @private
         */
        Indicator.prototype.OUTLINE_CLASS_NAME;
        /**
         * @type {?}
         * @protected
         */
        Indicator.prototype.elementRef;
        /**
         * @type {?}
         * @protected
         */
        Indicator.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricBadgeComponent = /** @class */ (function (_super) {
        __extends(FabricBadgeComponent, _super);
        function FabricBadgeComponent(elementRef, renderer) {
            return _super.call(this, elementRef, renderer) || this;
        }
        FabricBadgeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-badge',
                        template: "<ng-content></ng-content>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-badge]': 'true'
                        },
                        styles: [".gui-badge{background:#e6e6e6;border-radius:4px;color:#595959;display:inline-block;font-family:Arial;font-size:12px;font-weight:700;margin:0 0 0 2px;padding:4px 9.6px;position:relative;-ms-transform:translateX(-70%) translateY(-80%);transform:translateX(-70%) translateY(-80%);z-index:1}.gui-badge.gui-primary{background:#2185d0;color:#fff}.gui-badge.gui-primary.gui-outline{color:#2185d0}.gui-badge.gui-primary:hover{background:#1e77ba}.gui-badge.gui-primary:active{background:#1a69a4;color:#fff}.gui-badge.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-badge.gui-primary.gui-badge{background:#439de1}.gui-badge.gui-secondary{background:#3cb371;color:#fff}.gui-badge.gui-secondary.gui-outline{color:#3cb371}.gui-badge.gui-secondary.gui-button:hover{background:#36a065}.gui-badge.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-badge.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-badge.gui-secondary.gui-badge{background:#5ac88b}.gui-badge.gui-outline{background:0 0;color:#999;border:1px solid #d6d6d6}.gui-badge.gui-outline.gui-button:hover{background:#ccc;color:#fff}.gui-badge.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-badge.gui-outline.gui-badge{background:#fff}.gui-badge.gui-outline.gui-primary{border-color:#439de1}.gui-badge.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-badge.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#6fb4e8;color:#6fb4e8}.gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-badge.gui-outline.gui-secondary{border-color:#5ac88b}.gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#80d5a6;color:#80d5a6}.gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}", ".gui-material .gui-badge{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}.gui-material .gui-badge.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-badge.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-badge.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-badge.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-badge.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-badge.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-badge.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-badge.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-badge.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-badge.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-badge.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-badge.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-badge.gui-outline{background:0 0;color:#3949ab;border-color:#5262c5}.gui-material .gui-badge.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-badge.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-badge.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-badge.gui-outline.gui-badge{background:#fff}.gui-material .gui-badge.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-badge.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}", ".gui-dark .gui-badge{background:#333;color:#bdbdbd}.gui-dark .gui-badge.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-badge.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-badge.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-badge.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-badge.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-badge.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-badge.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-badge.gui-outline{background:0 0;color:#bdbdbd;border:1px solid #616161}.gui-dark .gui-badge.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-badge.gui-outline.gui-badge{background:#121212}.gui-dark .gui-badge.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#f0def3;color:#f0def3}.gui-dark .gui-badge.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-badge.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}"]
                    }] }
        ];
        /** @nocollapse */
        FabricBadgeComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return FabricBadgeComponent;
    }(Indicator));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricBadgeModule = /** @class */ (function () {
        function FabricBadgeModule() {
        }
        FabricBadgeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricBadgeComponent
                        ],
                        exports: [
                            FabricBadgeComponent
                        ]
                    },] }
        ];
        return FabricBadgeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricButtonComponent = /** @class */ (function (_super) {
        __extends(FabricButtonComponent, _super);
        function FabricButtonComponent(elementRef, renderer) {
            var _this = _super.call(this, elementRef, renderer) || this;
            _this.link = false;
            _this.text = false;
            return _this;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FabricButtonComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            if (changes.link) {
                if (this.link) {
                    this.addClass('gui-link');
                }
                else {
                    this.removeClass('gui-link');
                }
            }
            if (changes.text) {
                if (this.text) {
                    this.addClass('gui-text');
                }
                else {
                    this.removeClass('gui-text');
                }
            }
        };
        FabricButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'button[gui-button], a[gui-button]',
                        template: "<ng-content></ng-content>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-button]': 'true'
                        },
                        styles: [".gui-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-align:start;align-items:flex-start;background:#e6e6e6;border-radius:4px;border-style:none;box-sizing:border-box;color:#595959;cursor:pointer;display:inline-block;font-family:Arial;font-size:13.3333px;letter-spacing:normal;outline:0;padding:10px 20px;text-align:center;text-indent:0;text-rendering:auto;text-shadow:none;text-transform:none;transition:background .2s;word-spacing:normal;-webkit-writing-mode:horizontal-tb!important;-ms-writing-mode:lr-tb!important;writing-mode:horizontal-tb!important}.gui-button.gui-outline:focus{box-shadow:0 0 0 2px #d6d6d6}.gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #439de1}.gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #5ac88b}.gui-button.gui-primary{background:#2185d0;color:#fff}.gui-button.gui-primary.gui-outline{color:#2185d0}.gui-button.gui-primary:hover{background:#1e77ba}.gui-button.gui-primary:active{background:#1a69a4;color:#fff}.gui-button.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-button.gui-primary.gui-badge{background:#439de1}.gui-button.gui-secondary{background:#3cb371;color:#fff}.gui-button.gui-secondary.gui-outline{color:#3cb371}.gui-button.gui-secondary.gui-button:hover{background:#36a065}.gui-button.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-button.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-button.gui-secondary.gui-badge{background:#5ac88b}.gui-button.gui-link{background:0 0;border:0;color:#2185d0}.gui-button.gui-link:hover{background:0 0;color:#1e77ba;text-decoration:underline}.gui-button.gui-link:focus{text-decoration:underline}.gui-button.gui-outline{background:0 0;color:#999;border:1px solid #d6d6d6}.gui-button.gui-outline.gui-button:hover{background:#ccc;color:#fff}.gui-button.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-button.gui-outline.gui-badge{background:#fff}.gui-button.gui-outline.gui-primary{border-color:#439de1}.gui-button.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-button.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#6fb4e8;color:#6fb4e8}.gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-button.gui-outline.gui-secondary{border-color:#5ac88b}.gui-button.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-button.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#80d5a6;color:#80d5a6}.gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}.gui-button.gui-text{background:0 0;border:0}.gui-button.gui-text:focus,.gui-button.gui-text:hover{background:#e6e6e6}.gui-button.gui-text.gui-primary{color:#2185d0}.gui-button.gui-text.gui-primary:focus,.gui-button.gui-text.gui-primary:hover{background:#2185d0;color:#fff}.gui-button.gui-text.gui-secondary{color:#3cb371}.gui-button.gui-text.gui-secondary:focus,.gui-button.gui-text.gui-secondary:hover{background:#3cb371;color:#fff}.gui-button.gui-text.gui-button:disabled{background:0 0}.gui-button.gui-text.gui-button:disabled .gui-text-disabled{display:inline-block}.gui-button:hover{background:#ccc;color:#333}.gui-button:active{background:#999;color:#333}.gui-button:disabled{color:#ccc;cursor:default;pointer-events:none}", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-button.gui-outline:focus{box-shadow:0 0 0 2px #616161}.gui-dark .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #ce93d8}.gui-dark .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #80cbc4}.gui-dark .gui-button.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-button.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-button.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-button.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-button.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-button.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-button.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-button.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-button.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-button.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-button.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-button.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-button.gui-link{background:0 0;border:0;color:#2185d0}.gui-dark .gui-button.gui-link:hover{background:0 0;color:#1e77ba;text-decoration:underline}.gui-dark .gui-button.gui-link:focus{text-decoration:underline}.gui-dark .gui-button.gui-outline{background:0 0;color:#bdbdbd;border:1px solid #616161}.gui-dark .gui-button.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-button.gui-outline.gui-badge{background:#121212}.gui-dark .gui-button.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#f0def3;color:#f0def3}.gui-dark .gui-button.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-button.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-button.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}.gui-dark .gui-button:hover{background:#616161}.gui-dark .gui-button:active{background:#212121}.gui-dark .gui-button:disabled{opacity:.36}", ".gui-light .gui-button{background:#f6f5f4;border-color:#d8d7d6;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light .gui-button.gui-link{background:0 0;border:0;color:#2185d0}.gui-light .gui-button.gui-link:hover{background:0 0;color:#1e77ba;text-decoration:underline}.gui-light .gui-button.gui-link:focus{text-decoration:underline}.gui-light .gui-button:hover{background:#ecebeb}.gui-light .gui-button:active{background:#f6f5f4}.gui-light .gui-button:disabled{opacity:.5}", ".gui-material .gui-button{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-button.gui-outline:focus{box-shadow:0 0 0 1px #5262c5}.gui-material .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 1px #6200ee}.gui-material .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 1px #0097a7}.gui-material .gui-button.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-button.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-button.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-button.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-button.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-button.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-button.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-button.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-button.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-button.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-button.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-button.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-button.gui-link{background:0 0;border:0;color:#3949ab}.gui-material .gui-button.gui-link:hover{color:#4051bf}.gui-material .gui-button.gui-outline{background:0 0;color:#3949ab;border-color:#5262c5}.gui-material .gui-button.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-button.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-button.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-button.gui-outline.gui-badge{background:#fff}.gui-material .gui-button.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-button.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}.gui-material .gui-button:hover{background:#5262c5}.gui-material .gui-button:active{background:#4051bf}.gui-material .gui-button:disabled{background:#c5cae9;color:#7885d2}"]
                    }] }
        ];
        /** @nocollapse */
        FabricButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        FabricButtonComponent.propDecorators = {
            link: [{ type: core.Input }],
            text: [{ type: core.Input }]
        };
        return FabricButtonComponent;
    }(Indicator));
    if (false) {
        /** @type {?} */
        FabricButtonComponent.prototype.link;
        /** @type {?} */
        FabricButtonComponent.prototype.text;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricButtonModule = /** @class */ (function () {
        function FabricButtonModule() {
        }
        FabricButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricButtonComponent
                        ],
                        exports: [
                            FabricButtonComponent
                        ]
                    },] }
        ];
        return FabricButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricButtonGroupComponent = /** @class */ (function () {
        function FabricButtonGroupComponent() {
        }
        FabricButtonGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-button-group',
                        template: "<ng-content></ng-content>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-button-group]': 'true'
                        },
                        styles: [".gui-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-button-group .gui-button{border-radius:0}.gui-button-group .gui-button:not(:last-child){border-right:none;margin:0}.gui-button-group .gui-button:last-child{border-radius:0 4px 4px 0}.gui-button-group .gui-button:first-child{border-radius:4px 0 0 4px}.gui-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}"]
                    }] }
        ];
        return FabricButtonGroupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricButtonGroupModule = /** @class */ (function () {
        function FabricButtonGroupModule() {
        }
        FabricButtonGroupModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricButtonGroupComponent
                        ],
                        exports: [
                            FabricButtonGroupComponent
                        ]
                    },] }
        ];
        return FabricButtonGroupModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricCardComponent = /** @class */ (function () {
        function FabricCardComponent() {
            this.contentBlock = [];
        }
        /**
         * @return {?}
         */
        FabricCardComponent.prototype.isTitleEnabled = /**
         * @return {?}
         */
        function () {
            return !!this.title;
        };
        /**
         * @return {?}
         */
        FabricCardComponent.prototype.isImgEnabled = /**
         * @return {?}
         */
        function () {
            return !!this.image;
        };
        /**
         * @return {?}
         */
        FabricCardComponent.prototype.isContentBlockEnabled = /**
         * @return {?}
         */
        function () {
            return !!this.contentBlock;
        };
        FabricCardComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-card',
                        template: "<div class=\"gui-card-body\">\n\n\t<div class=\"gui-card-image-wrapper\">\n\t\t<img [ngClass]=\"{'gui-card-img': isImgEnabled()}\"\n\t\t\t alt=\"{{alt}}\" src=\"{{image}}\"/>\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-title': isTitleEnabled()}\">\n\t\t{{title}}\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-content-block': isContentBlockEnabled()}\">\n\t\t<div\n\t\t\t*ngFor=\"let block of contentBlock\"\n\t\t\t[ngClass]=\"{'gui-card-content-block-item': isContentBlockEnabled()}\">\n\t\t\t{{block}}\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-card]': 'true'
                        },
                        styles: [".gui-card .gui-card-img{border-radius:4px 4px 0 0;height:auto;margin:0 0 12px;width:350px}.gui-card .gui-card-body{background:#fff;border-radius:4px;box-shadow:0 1px 3px #999;box-sizing:border-box;font-family:Roboto,'Helvetica Neue',sans-serif;font-size:14px;margin:0;padding:0 0 20px;transition:transform .3s ease-in-out;width:350px}.gui-card .gui-card-body:hover{box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)}.gui-card .gui-card-body .gui-card-title{font-size:20px;font-weight:700;margin:0 0 12px;padding:0 20px}.gui-card .gui-card-body .gui-card-content-block{margin:0 0 12px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{padding:12px 20px;border-top:1px solid #d6d6d6}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom:1px solid #d6d6d6}.gui-card .gui-card-body .gui-content{padding:0 20px}", ".gui-material .gui-card .gui-card-body{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-card .gui-card-body{background:#121212;border-color:#616161;color:#bdbdbd}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#616161}.gui-dark .gui-content-block .gui-card-content-block{border-color:#616161}"]
                    }] }
        ];
        FabricCardComponent.propDecorators = {
            title: [{ type: core.Input }],
            image: [{ type: core.Input }],
            alt: [{ type: core.Input }],
            contentBlock: [{ type: core.Input }]
        };
        return FabricCardComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricCardComponent.prototype.title;
        /** @type {?} */
        FabricCardComponent.prototype.image;
        /** @type {?} */
        FabricCardComponent.prototype.alt;
        /** @type {?} */
        FabricCardComponent.prototype.contentBlock;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricCardModule = /** @class */ (function () {
        function FabricCardModule() {
        }
        FabricCardModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricCardComponent
                        ],
                        exports: [
                            FabricCardComponent
                        ]
                    },] }
        ];
        return FabricCardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricCheckboxComponent = /** @class */ (function () {
        function FabricCheckboxComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.disabled = false;
            this.readonly = false;
            this.indeterminate = false;
            this.changed = new core.EventEmitter();
            this.checked = false;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FabricCheckboxComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.checked = this.inputChecked;
            if (changes.disabled) {
                if (this.disabled) {
                    this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
                }
                else {
                    this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
                }
            }
            if (changes.readonly) {
                if (this.readonly) {
                    this.renderer.addClass(this.elementRef.nativeElement, 'gui-readonly');
                }
                else {
                    this.renderer.removeClass(this.elementRef.nativeElement, 'gui-readonly');
                }
            }
            if (changes.indeterminate) {
                if (this.inputRef) {
                    if (this.indeterminate) {
                        this.inputRef.nativeElement.indeterminate = true;
                    }
                    else {
                        this.inputRef.nativeElement.indeterminate = false;
                        this.inputRef.nativeElement.checked = this.checked;
                    }
                }
            }
        };
        /**
         * @return {?}
         */
        FabricCheckboxComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.inputRef.nativeElement.indeterminate = this.indeterminate;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        FabricCheckboxComponent.prototype.check = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.stopPropagation();
            this.checked = !this.checked;
            this.changed.emit(this.checked);
        };
        FabricCheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-checkbox',
                        template: "<label>\n\t<input #input\n\t\t   (click)=\"check($event)\"\n\t\t   [checked]=\"checked\"\n\t\t   [disabled]=\"disabled\"\n\t\t   [name]=\"name\"\n\t\t   type=\"checkbox\">\n\t<span class=\"gui-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-checkbox]': 'true'
                        },
                        styles: [".gui-checkbox{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:24px;padding-left:32px;position:relative}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{height:0;opacity:0;position:absolute;width:0}.gui-checkbox .gui-checkmark{border-radius:4px;box-sizing:content-box;height:20px;left:0;position:absolute;width:20px;border:2px solid #575757}.gui-checkbox input:checked+.gui-checkmark{border-color:#575757}.gui-checkbox.gui-disabled.gui-checkbox{color:#ccc;pointer-events:none}.gui-checkbox.gui-readonly.gui-checkbox{pointer-events:none}.gui-checkbox .gui-checkmark::after{content:' ';display:none;left:6px;position:absolute;-ms-transform:rotate(45deg);transform:rotate(45deg);border-color:#575757;border-style:solid;border-width:0 3.2px 3.2px 0;height:12px;width:5.2px}.gui-checkbox input:checked+.gui-checkmark::after{box-sizing:content-box;display:block}.gui-checkbox input:indeterminate+.gui-checkmark::after{display:block;height:10px;left:9px;top:4px;-ms-transform:rotate(90deg);transform:rotate(90deg);width:0}", ".gui-material .gui-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox label:hover .gui-checkmark{border-color:#575757}.gui-material .gui-checkbox .gui-checkmark{border-color:#999}.gui-material .gui-checkbox input:checked+.gui-checkmark{background:#3949ab;border-color:#3949ab}.gui-material .gui-checkbox .gui-checkmark::after{border-color:#fff}.gui-material .gui-checkbox.gui-indeterminate .gui-checkmark{background:#3949ab;border-color:#3949ab}", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark,.gui-dark .gui-checkbox .gui-checkmark::after,.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox.gui-disabled.gui-checkbox{opacity:.36}"]
                    }] }
        ];
        /** @nocollapse */
        FabricCheckboxComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        FabricCheckboxComponent.propDecorators = {
            inputRef: [{ type: core.ViewChild, args: ['input', { static: false },] }],
            name: [{ type: core.Input }],
            inputChecked: [{ type: core.Input, args: ['checked',] }],
            disabled: [{ type: core.Input }],
            readonly: [{ type: core.Input }],
            indeterminate: [{ type: core.Input }],
            changed: [{ type: core.Output }]
        };
        return FabricCheckboxComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricCheckboxComponent.prototype.inputRef;
        /** @type {?} */
        FabricCheckboxComponent.prototype.name;
        /** @type {?} */
        FabricCheckboxComponent.prototype.inputChecked;
        /** @type {?} */
        FabricCheckboxComponent.prototype.disabled;
        /** @type {?} */
        FabricCheckboxComponent.prototype.readonly;
        /** @type {?} */
        FabricCheckboxComponent.prototype.indeterminate;
        /** @type {?} */
        FabricCheckboxComponent.prototype.changed;
        /** @type {?} */
        FabricCheckboxComponent.prototype.checked;
        /**
         * @type {?}
         * @private
         */
        FabricCheckboxComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        FabricCheckboxComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricCheckboxModule = /** @class */ (function () {
        function FabricCheckboxModule() {
        }
        FabricCheckboxModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricCheckboxComponent
                        ],
                        exports: [
                            FabricCheckboxComponent
                        ]
                    },] }
        ];
        return FabricCheckboxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricChipComponent = /** @class */ (function (_super) {
        __extends(FabricChipComponent, _super);
        function FabricChipComponent(elementRef, renderer) {
            return _super.call(this, elementRef, renderer) || this;
        }
        FabricChipComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-chip',
                        template: "<ng-content></ng-content>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-chip]': 'true'
                        },
                        styles: [".gui-chip{background:#e6e6e6;border-radius:4px;box-sizing:border-box;color:#595959;display:inline-block;font-family:Arial;font-size:14px;font-weight:700;margin:0 2px;padding:9.6px 12px}.gui-chip.gui-primary{background:#2185d0;color:#fff}.gui-chip.gui-primary.gui-outline{color:#2185d0}.gui-chip.gui-primary:hover{background:#1e77ba}.gui-chip.gui-primary:active{background:#1a69a4;color:#fff}.gui-chip.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-chip.gui-primary.gui-badge{background:#439de1}.gui-chip.gui-secondary{background:#3cb371;color:#fff}.gui-chip.gui-secondary.gui-outline{color:#3cb371}.gui-chip.gui-secondary.gui-button:hover{background:#36a065}.gui-chip.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-chip.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-chip.gui-secondary.gui-badge{background:#5ac88b}.gui-chip.gui-outline{background:0 0;color:#999;border:1px solid #d6d6d6}.gui-chip.gui-outline.gui-button:hover{background:#ccc;color:#fff}.gui-chip.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-chip.gui-outline.gui-badge{background:#fff}.gui-chip.gui-outline.gui-primary{border-color:#439de1}.gui-chip.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-chip.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#6fb4e8;color:#6fb4e8}.gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-chip.gui-outline.gui-secondary{border-color:#5ac88b}.gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#80d5a6;color:#80d5a6}.gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}", ".gui-material .gui-chip{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-chip.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-chip.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-chip.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-chip.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-chip.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-chip.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-chip.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-chip.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-chip.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-chip.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-chip.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-chip.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-chip.gui-outline{background:0 0;color:#3949ab;border-color:#5262c5}.gui-material .gui-chip.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-chip.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-chip.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-chip.gui-outline.gui-badge{background:#fff}.gui-material .gui-chip.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-chip.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}", ".gui-dark .gui-chip{background:#333;color:#bdbdbd}.gui-dark .gui-chip.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-chip.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-chip.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-chip.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-chip.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-chip.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-chip.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-chip.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-chip.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-chip.gui-outline{background:0 0;color:#bdbdbd;border:1px solid #616161}.gui-dark .gui-chip.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-chip.gui-outline.gui-badge{background:#121212}.gui-dark .gui-chip.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#f0def3;color:#f0def3}.gui-dark .gui-chip.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-chip.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}", ".gui-light .gui-chip{background:#f6f5f4;color:#333;border:1px solid #333}"]
                    }] }
        ];
        /** @nocollapse */
        FabricChipComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return FabricChipComponent;
    }(Indicator));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricChipModule = /** @class */ (function () {
        function FabricChipModule() {
        }
        FabricChipModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricChipComponent
                        ],
                        exports: [
                            FabricChipComponent
                        ]
                    },] }
        ];
        return FabricChipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerService = /** @class */ (function () {
        function FabricDatePickerService() {
            this.selectedDate = new Date();
            this.selectedDate$ = new rxjs.BehaviorSubject(this.selectedDate);
        }
        /**
         * @return {?}
         */
        FabricDatePickerService.prototype.observeSelectedDate = /**
         * @return {?}
         */
        function () {
            return this.selectedDate$.asObservable();
        };
        /**
         * @param {?} date
         * @return {?}
         */
        FabricDatePickerService.prototype.dateSelected = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this.selectedDate = new Date(date.getTime());
            this.setSelectedDateTime();
            this.selectedDate$.next(this.selectedDate);
        };
        /**
         * @param {?} timeValues
         * @param {?} date
         * @return {?}
         */
        FabricDatePickerService.prototype.changeTime = /**
         * @param {?} timeValues
         * @param {?} date
         * @return {?}
         */
        function (timeValues, date) {
            this.selectedTime = timeValues;
            if (!this.selectedDate) {
                this.selectedDate = date;
            }
            this.setSelectedDateTime();
        };
        /**
         * @return {?}
         */
        FabricDatePickerService.prototype.next = /**
         * @return {?}
         */
        function () {
            this.dateSelected(this.selectedDate);
        };
        /**
         * @private
         * @return {?}
         */
        FabricDatePickerService.prototype.setSelectedDateTime = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.selectedTime) {
                this.selectedDate.setHours(this.selectedTime.hours);
                this.selectedDate.setMinutes(this.selectedTime.minutes);
                this.selectedDate.setSeconds(this.selectedTime.seconds);
            }
        };
        FabricDatePickerService.decorators = [
            { type: core.Injectable }
        ];
        return FabricDatePickerService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerService.prototype.selectedDate;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerService.prototype.selectedTime;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerService.prototype.selectedDate$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerWeeks = /** @class */ (function () {
        function FabricDatePickerWeeks() {
        }
        /**
         * @param {?} year
         * @param {?} month
         * @return {?}
         */
        FabricDatePickerWeeks.prototype.getDaysInMonths = /**
         * @param {?} year
         * @param {?} month
         * @return {?}
         */
        function (year, month) {
            this.resetWeeks();
            /** @type {?} */
            var numberOfDaysInMonth = (new Date(year, month + 1, 0)).getDate();
            for (var i = 1; i <= numberOfDaysInMonth; i++) {
                this.createWeeks(new Date(year, month, i));
            }
            return this.weeks;
        };
        /**
         * @private
         * @param {?} date
         * @return {?}
         */
        FabricDatePickerWeeks.prototype.createWeeks = /**
         * @private
         * @param {?} date
         * @return {?}
         */
        function (date) {
            /** @type {?} */
            var day = date.getDate();
            if (this.weeks[0].length === 0 && day === 1) {
                this.createWeek(date, this.weeks[0]);
            }
            if (this.weeks[1].length === 0 && day > this.getLastDayNumber(this.weeks[0])) {
                this.createWeek(this.getLastDayDate(this.weeks[0]), this.weeks[1]);
            }
            if (this.weeks[2].length === 0 && day > this.getLastDayNumber(this.weeks[1])) {
                this.createWeek(this.getLastDayDate(this.weeks[1]), this.weeks[2]);
            }
            if (this.weeks[3].length === 0 && day > this.getLastDayNumber(this.weeks[2])) {
                this.createWeek(this.getLastDayDate(this.weeks[2]), this.weeks[3]);
            }
            if (this.weeks[4].length === 0 && day >= this.getLastDayNumber(this.weeks[3])) {
                this.createWeek(this.getLastDayDate(this.weeks[3]), this.weeks[4]);
            }
            if (this.weeks[5].length === 0 && day >= this.getLastDayNumber(this.weeks[4])) {
                this.createWeek(this.getLastDayDate(this.weeks[4]), this.weeks[5]);
            }
            this.weeks = [this.weeks[0], this.weeks[1], this.weeks[2], this.weeks[3], this.weeks[4], this.weeks[5]];
        };
        /**
         * @private
         * @param {?} date
         * @param {?} week
         * @return {?}
         */
        FabricDatePickerWeeks.prototype.createWeek = /**
         * @private
         * @param {?} date
         * @param {?} week
         * @return {?}
         */
        function (date, week) {
            for (var i = 1; i <= 7; i++) {
                /** @type {?} */
                var isFirstDaySunday = date.getDay() === 0 && this.weeks[0].length === 0;
                /** @type {?} */
                var day = void 0;
                if (isFirstDaySunday) {
                    day = date.getDate() - 6;
                }
                else {
                    day = date.getDate() - date.getDay() + i;
                }
                /** @type {?} */
                var dayOfWeek = new Date(date.setDate(day));
                if (week.length < 7) {
                    week.push(dayOfWeek);
                }
            }
        };
        /**
         * @private
         * @param {?} week
         * @return {?}
         */
        FabricDatePickerWeeks.prototype.getLastDayNumber = /**
         * @private
         * @param {?} week
         * @return {?}
         */
        function (week) {
            if (week.length === 7) {
                return week[week.length - 1].getDate();
            }
        };
        /**
         * @private
         * @param {?} week
         * @return {?}
         */
        FabricDatePickerWeeks.prototype.getLastDayDate = /**
         * @private
         * @param {?} week
         * @return {?}
         */
        function (week) {
            /** @type {?} */
            var lastDay = week[week.length - 1].getDate();
            return new Date(week[week.length - 1].setDate(lastDay));
        };
        /**
         * @private
         * @return {?}
         */
        FabricDatePickerWeeks.prototype.resetWeeks = /**
         * @private
         * @return {?}
         */
        function () {
            this.weeks = [];
            this.weeks[0] = [];
            this.weeks[1] = [];
            this.weeks[2] = [];
            this.weeks[3] = [];
            this.weeks[4] = [];
            this.weeks[5] = [];
        };
        FabricDatePickerWeeks.decorators = [
            { type: core.Injectable }
        ];
        return FabricDatePickerWeeks;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerWeeks.prototype.weeks;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerYears = /** @class */ (function () {
        function FabricDatePickerYears() {
            this.inc = 10;
        }
        /**
         * @param {?} selectedYear
         * @return {?}
         */
        FabricDatePickerYears.prototype.getYears = /**
         * @param {?} selectedYear
         * @return {?}
         */
        function (selectedYear) {
            this.minYear = selectedYear - 50;
            this.maxYear = selectedYear + 50;
            /** @type {?} */
            var yearsRange = this.maxYear - this.minYear;
            /** @type {?} */
            var years = [];
            /** @type {?} */
            var rows = [];
            years = this.createYearsPool(this.minYear, yearsRange, years);
            rows = this.divideYearsPool(years, rows);
            return this.rowsForDisplay = this.createRowsForDisplay(rows, selectedYear);
        };
        /**
         * @param {?} year
         * @return {?}
         */
        FabricDatePickerYears.prototype.prevYearRange = /**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            if (!this.selectedYear) {
                this.selectedYear = year;
            }
            if (this.selectedYear > this.minYear) {
                this.selectedYear -= this.inc;
            }
            if (this.selectedYear > this.minYear) {
                return this.getYears(this.selectedYear);
            }
            else {
                return this.rowsForDisplay;
            }
        };
        /**
         * @param {?} year
         * @return {?}
         */
        FabricDatePickerYears.prototype.nextYearRange = /**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            if (!this.selectedYear) {
                this.selectedYear = year;
            }
            if (this.selectedYear < this.maxYear) {
                this.selectedYear += this.inc;
            }
            if (this.selectedYear < this.maxYear) {
                return this.getYears(this.selectedYear);
            }
            else {
                return this.rowsForDisplay;
            }
        };
        /**
         * @private
         * @param {?} minYear
         * @param {?} yearsRange
         * @param {?} years
         * @return {?}
         */
        FabricDatePickerYears.prototype.createYearsPool = /**
         * @private
         * @param {?} minYear
         * @param {?} yearsRange
         * @param {?} years
         * @return {?}
         */
        function (minYear, yearsRange, years) {
            for (var i = 0; i <= yearsRange; i++) {
                years.push(minYear + i);
            }
            return years;
        };
        /**
         * @private
         * @param {?} years
         * @param {?} rows
         * @return {?}
         */
        FabricDatePickerYears.prototype.divideYearsPool = /**
         * @private
         * @param {?} years
         * @param {?} rows
         * @return {?}
         */
        function (years, rows) {
            for (var i = 0; i < years.length; i += 5) {
                rows.push(years.slice(i, i + 5));
            }
            return rows;
        };
        /**
         * @private
         * @param {?} rows
         * @param {?} selectedYear
         * @return {?}
         */
        FabricDatePickerYears.prototype.createRowsForDisplay = /**
         * @private
         * @param {?} rows
         * @param {?} selectedYear
         * @return {?}
         */
        function (rows, selectedYear) {
            if (selectedYear >= this.minYear || selectedYear <= this.maxYear) {
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i].indexOf(selectedYear) > -1) {
                        if (!rows[i - 1]) {
                            return [rows[i], rows[i + 1], rows[i + 2], rows[i + 3], rows[i + 4]];
                        }
                        if (!rows[i - 2]) {
                            return [rows[i - 1], rows[i], rows[i + 1], rows[i + 2], rows[i + 3]];
                        }
                        if (!rows[i + 1]) {
                            return [rows[i - 4], rows[i - 3], rows[i - 2], rows[i - 1], rows[i]];
                        }
                        if (!rows[i + 2]) {
                            return [rows[i - 3], rows[i - 2], rows[i - 1], rows[i], rows[i + 1]];
                        }
                        return this.rowsForDisplay = [rows[i - 2], rows[i - 1], rows[i], rows[i + 1], rows[i + 2]];
                    }
                }
            }
        };
        FabricDatePickerYears.decorators = [
            { type: core.Injectable }
        ];
        return FabricDatePickerYears;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerYears.prototype.rowsForDisplay;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerYears.prototype.minYear;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerYears.prototype.maxYear;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerYears.prototype.selectedYear;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerYears.prototype.inc;
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
    FabricReactive = /** @class */ (function () {
        function FabricReactive() {
            this.unsubscribe$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        FabricReactive.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.unsubscribe();
        };
        /**
         * @protected
         * @return {?}
         */
        FabricReactive.prototype.unsubscribe = /**
         * @protected
         * @return {?}
         */
        function () {
            if (this.unsubscribe$.isStopped) {
                return;
            }
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        };
        /**
         * @protected
         * @return {?}
         */
        FabricReactive.prototype.takeUntil = /**
         * @protected
         * @return {?}
         */
        function () {
            return operators.takeUntil(this.unsubscribe$);
        };
        return FabricReactive;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricReactive.prototype.unsubscribe$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var FabricCalendarView = {
        DAYS: 0,
        MONTHS: 1,
        YEARS: 2,
    };
    FabricCalendarView[FabricCalendarView.DAYS] = 'DAYS';
    FabricCalendarView[FabricCalendarView.MONTHS] = 'MONTHS';
    FabricCalendarView[FabricCalendarView.YEARS] = 'YEARS';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerCalendarViewService = /** @class */ (function () {
        function FabricDatePickerCalendarViewService() {
            this.activeView$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        FabricDatePickerCalendarViewService.prototype.onActiveView = /**
         * @return {?}
         */
        function () {
            return this.activeView$.asObservable();
        };
        /**
         * @param {?} viewName
         * @return {?}
         */
        FabricDatePickerCalendarViewService.prototype.switchView = /**
         * @param {?} viewName
         * @return {?}
         */
        function (viewName) {
            this.activeView$.next(viewName);
        };
        FabricDatePickerCalendarViewService.decorators = [
            { type: core.Injectable }
        ];
        return FabricDatePickerCalendarViewService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerCalendarViewService.prototype.activeView$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerCalendarService = /** @class */ (function () {
        function FabricDatePickerCalendarService() {
            this.activeMonth$ = new rxjs.Subject();
            this.activeYear$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        FabricDatePickerCalendarService.prototype.onActiveMonth = /**
         * @return {?}
         */
        function () {
            return this.activeMonth$.asObservable();
        };
        /**
         * @return {?}
         */
        FabricDatePickerCalendarService.prototype.onActiveYear = /**
         * @return {?}
         */
        function () {
            return this.activeYear$.asObservable();
        };
        /**
         * @param {?} year
         * @param {?} month
         * @return {?}
         */
        FabricDatePickerCalendarService.prototype.nextMonth = /**
         * @param {?} year
         * @param {?} month
         * @return {?}
         */
        function (year, month) {
            if (month === 11) {
                this.activeYear$.next(year + 1);
                this.selectMonth(0);
            }
            else {
                this.selectMonth(month + 1);
            }
        };
        /**
         * @param {?} year
         * @param {?} month
         * @return {?}
         */
        FabricDatePickerCalendarService.prototype.prevMonth = /**
         * @param {?} year
         * @param {?} month
         * @return {?}
         */
        function (year, month) {
            if (month === 0) {
                this.activeYear$.next(year - 1);
                this.selectMonth(11);
            }
            else {
                this.selectMonth(month - 1);
            }
        };
        /**
         * @param {?} year
         * @return {?}
         */
        FabricDatePickerCalendarService.prototype.selectYear = /**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            this.activeYear$.next(year);
        };
        /**
         * @param {?} month
         * @return {?}
         */
        FabricDatePickerCalendarService.prototype.selectMonth = /**
         * @param {?} month
         * @return {?}
         */
        function (month) {
            this.activeMonth$.next(month);
        };
        FabricDatePickerCalendarService.decorators = [
            { type: core.Injectable }
        ];
        return FabricDatePickerCalendarService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerCalendarService.prototype.activeMonth$;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerCalendarService.prototype.activeYear$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerYearsService = /** @class */ (function () {
        function FabricDatePickerYearsService() {
            this.years$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        FabricDatePickerYearsService.prototype.onYears = /**
         * @return {?}
         */
        function () {
            return this.years$.asObservable();
        };
        /**
         * @param {?} years
         * @return {?}
         */
        FabricDatePickerYearsService.prototype.next = /**
         * @param {?} years
         * @return {?}
         */
        function (years) {
            this.years$.next(years);
        };
        FabricDatePickerYearsService.decorators = [
            { type: core.Injectable }
        ];
        return FabricDatePickerYearsService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerYearsService.prototype.years$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var FabricDatePickerComposition = {
        NONE: 0,
        DATE_PICKER: 1,
        TIME_PICKER: 2,
        TIME_PICKER_HOURS: 4,
        TIME_PICKER_MINUTES: 8,
        TIME_PICKER_SECONDS: 16,
        TIME_PICKER_MERIDIAN: 32,
        ALL: 63,
    };
    FabricDatePickerComposition[FabricDatePickerComposition.NONE] = 'NONE';
    FabricDatePickerComposition[FabricDatePickerComposition.DATE_PICKER] = 'DATE_PICKER';
    FabricDatePickerComposition[FabricDatePickerComposition.TIME_PICKER] = 'TIME_PICKER';
    FabricDatePickerComposition[FabricDatePickerComposition.TIME_PICKER_HOURS] = 'TIME_PICKER_HOURS';
    FabricDatePickerComposition[FabricDatePickerComposition.TIME_PICKER_MINUTES] = 'TIME_PICKER_MINUTES';
    FabricDatePickerComposition[FabricDatePickerComposition.TIME_PICKER_SECONDS] = 'TIME_PICKER_SECONDS';
    FabricDatePickerComposition[FabricDatePickerComposition.TIME_PICKER_MERIDIAN] = 'TIME_PICKER_MERIDIAN';
    FabricDatePickerComposition[FabricDatePickerComposition.ALL] = 'ALL';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerCompositionService = /** @class */ (function () {
        function FabricDatePickerCompositionService() {
            this.datePickerFormat$ = new rxjs.BehaviorSubject(FabricDatePickerComposition.DATE_PICKER);
        }
        /**
         * @return {?}
         */
        FabricDatePickerCompositionService.prototype.onComposition = /**
         * @return {?}
         */
        function () {
            return this.datePickerFormat$.asObservable();
        };
        /**
         * @param {?} datePipeOptions
         * @return {?}
         */
        FabricDatePickerCompositionService.prototype.next = /**
         * @param {?} datePipeOptions
         * @return {?}
         */
        function (datePipeOptions) {
            this.datePickerFormat$.next(this.getComposition(datePipeOptions));
        };
        /**
         * @private
         * @param {?} datePipeOptions
         * @return {?}
         */
        FabricDatePickerCompositionService.prototype.getComposition = /**
         * @private
         * @param {?} datePipeOptions
         * @return {?}
         */
        function (datePipeOptions) {
            /** @type {?} */
            var removeDoubles = datePipeOptions.split(':').join(' ');
            /** @type {?} */
            var removeDash = removeDoubles.split('/').join(' ');
            /** @type {?} */
            var removeDot = removeDash.split('.').join(' ');
            /** @type {?} */
            var removeComa = removeDot.split(',').join(' ');
            /** @type {?} */
            var formatArray = removeComa.split(' ');
            /** @type {?} */
            var composition;
            formatArray.forEach((/**
             * @param {?} formatItem
             * @return {?}
             */
            function (formatItem) {
                /** @type {?} */
                var isDays = formatItem.toLowerCase().includes('d');
                /** @type {?} */
                var isMonths = formatItem.includes('M');
                /** @type {?} */
                var isYears = formatItem.toLowerCase().includes('y');
                /** @type {?} */
                var showHours = formatItem.toLowerCase().includes('h');
                /** @type {?} */
                var showMinutes = formatItem.includes('m');
                /** @type {?} */
                var showSeconds = formatItem.toLowerCase().includes('s');
                /** @type {?} */
                var isMeridian = formatItem.includes('h');
                /** @type {?} */
                var showDatePicker = isDays || isMonths || isYears;
                /** @type {?} */
                var showTimePicker = showHours || showMinutes || showSeconds;
                if (showDatePicker) {
                    composition = composition | FabricDatePickerComposition.DATE_PICKER;
                }
                if (showTimePicker) {
                    composition = composition | FabricDatePickerComposition.TIME_PICKER;
                }
                if (isMeridian) {
                    composition = composition | FabricDatePickerComposition.TIME_PICKER_MERIDIAN;
                }
                if (showHours) {
                    composition = composition | FabricDatePickerComposition.TIME_PICKER_HOURS;
                }
                if (showMinutes) {
                    composition = composition | FabricDatePickerComposition.TIME_PICKER_MINUTES;
                }
                if (showSeconds) {
                    composition = composition | FabricDatePickerComposition.TIME_PICKER_SECONDS;
                }
            }));
            return composition;
        };
        FabricDatePickerCompositionService.decorators = [
            { type: core.Injectable }
        ];
        return FabricDatePickerCompositionService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerCompositionService.prototype.datePickerFormat$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerCalendarComponent = /** @class */ (function (_super) {
        __extends(FabricDatePickerCalendarComponent, _super);
        function FabricDatePickerCalendarComponent(datePickerService, datePickerFormatService, datePickerWeeks, datePickerYears, datePickerYearsService, calendarService, calendarViewService, changeDetectorRef) {
            var _this = _super.call(this) || this;
            _this.datePickerService = datePickerService;
            _this.datePickerFormatService = datePickerFormatService;
            _this.datePickerWeeks = datePickerWeeks;
            _this.datePickerYears = datePickerYears;
            _this.datePickerYearsService = datePickerYearsService;
            _this.calendarService = calendarService;
            _this.calendarViewService = calendarViewService;
            _this.changeDetectorRef = changeDetectorRef;
            _this.FabricDatePickerComposition = FabricDatePickerComposition;
            _this.FabricCalendarView = FabricCalendarView;
            _this.fabricCalendarView = FabricCalendarView.DAYS;
            return _this;
        }
        /**
         * @return {?}
         */
        FabricDatePickerCalendarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.datePickerFormatService
                .onComposition()
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} datePickerComposition
             * @return {?}
             */
            function (datePickerComposition) {
                _this.datePickerComposition = datePickerComposition;
            }));
            this.calendarService
                .onActiveMonth()
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} month
             * @return {?}
             */
            function (month) {
                _this.activeMonth = month;
                _this.calculateDatePickerData();
                _this.changeDetectorRef.detectChanges();
            }));
            this.calendarService
                .onActiveYear()
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} year
             * @return {?}
             */
            function (year) {
                _this.activeYear = year;
                _this.calculateDatePickerData();
                _this.changeDetectorRef.detectChanges();
            }));
            this.datePickerService
                .observeSelectedDate()
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                _this.selectedDate = date;
                _this.activeYear = date.getFullYear();
                _this.activeMonth = date.getMonth();
            }));
            this.datePickerYearsService
                .onYears()
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} years
             * @return {?}
             */
            function (years) {
                _this.years = years;
                _this.changeDetectorRef.detectChanges();
            }));
            this.calendarViewService
                .onActiveView()
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} fabricCalendarView
             * @return {?}
             */
            function (fabricCalendarView) {
                _this.fabricCalendarView = fabricCalendarView;
                _this.changeDetectorRef.detectChanges();
            }));
            this.calculateDatePickerData();
        };
        /**
         * @return {?}
         */
        FabricDatePickerCalendarComponent.prototype.getCalendarView = /**
         * @return {?}
         */
        function () {
            if (event) {
                event.stopPropagation();
            }
            return this.fabricCalendarView;
        };
        /**
         * @param {?} activeComposition
         * @param {?} checkedComposition
         * @return {?}
         */
        FabricDatePickerCalendarComponent.prototype.isVisible = /**
         * @param {?} activeComposition
         * @param {?} checkedComposition
         * @return {?}
         */
        function (activeComposition, checkedComposition) {
            return !!(activeComposition & checkedComposition);
        };
        /**
         * @private
         * @return {?}
         */
        FabricDatePickerCalendarComponent.prototype.calculateDatePickerData = /**
         * @private
         * @return {?}
         */
        function () {
            this.weeks = this.datePickerWeeks.getDaysInMonths(this.activeYear, this.activeMonth);
            this.years = this.datePickerYears.getYears(this.activeYear);
        };
        FabricDatePickerCalendarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-date-picker-toggle',
                        template: "<ng-container *ngIf=\"isVisible(datePickerComposition, FabricDatePickerComposition.DATE_PICKER)\">\n\n\t<gui-date-picker-view-panel [activeMonth]=\"activeMonth\"\n\t\t\t\t\t\t\t\t[activeYear]=\"activeYear\"\n\t\t\t\t\t\t\t\t[fabricCalendarView]=\"fabricCalendarView\"\n\t\t\t\t\t\t\t\t[selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t[years]=\"years\">\n\t</gui-date-picker-view-panel>\n\n\t<ng-container [ngSwitch]=\"getCalendarView()\">\n\n\t\t<gui-date-picker-days-view *ngSwitchCase=\"FabricCalendarView.DAYS\"\n\t\t\t\t\t\t\t\t   [activeMonth]=\"activeMonth\"\n\t\t\t\t\t\t\t\t   [selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t   [weeks]=\"weeks\">\n\t\t</gui-date-picker-days-view>\n\n\t\t<gui-date-picker-months-view *ngSwitchCase=\"FabricCalendarView.MONTHS\"\n\t\t\t\t\t\t\t\t\t [activeYear]=\"activeYear\"\n\t\t\t\t\t\t\t\t\t [selectedDate]=\"selectedDate\">\n\t\t</gui-date-picker-months-view>\n\n\n\t\t<gui-date-picker-years-view *ngSwitchCase=\"FabricCalendarView.YEARS\"\n\t\t\t\t\t\t\t\t\t[selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t\t[years]=\"years\">\n\t\t</gui-date-picker-years-view>\n\n\t</ng-container>\n\n</ng-container>\n\n<gui-time-picker *ngIf=\"isVisible(datePickerComposition, FabricDatePickerComposition.TIME_PICKER)\"\n\t\t\t\t [datePickerComposition]=\"datePickerComposition\"\n\t\t\t\t [selectedDate]=\"selectedDate\"></gui-time-picker>\n",
                        host: {
                            '[class.gui-date-picker-calendar]': 'true'
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}@use 'common/variables';.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:-ms-grid;display:grid}@use 'common/variables';.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}@use 'common/variables';.gui-grid-cols-1{-ms-grid-columns:(minmax(0,1fr))[1];grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{-ms-grid-columns:(minmax(0,1fr))[2];grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{-ms-grid-columns:(minmax(0,1fr))[3];grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{-ms-grid-columns:(minmax(0,1fr))[4];grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{-ms-grid-columns:(minmax(0,1fr))[5];grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{-ms-grid-columns:(minmax(0,1fr))[6];grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{-ms-grid-columns:(minmax(0,1fr))[7];grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{-ms-grid-columns:(minmax(0,1fr))[8];grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{-ms-grid-columns:(minmax(0,1fr))[9];grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{-ms-grid-rows:(minmax(0,1fr))[1];grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{-ms-grid-rows:(minmax(0,1fr))[2];grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{-ms-grid-rows:(minmax(0,1fr))[3];grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{-ms-grid-rows:(minmax(0,1fr))[4];grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{-ms-grid-rows:(minmax(0,1fr))[5];grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{-ms-grid-rows:(minmax(0,1fr))[6];grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{-ms-grid-rows:(minmax(0,1fr))[7];grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{-ms-grid-rows:(minmax(0,1fr))[8];grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{-ms-grid-rows:(minmax(0,1fr))[9];grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}@use 'common/variables';.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}@use 'common/variables';.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-date-picker-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;font-family:Roboto,'Helvetica Neue',sans-serif;border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 0 12px;width:268px}.gui-date-picker-header{font-size:13px;font-weight:400;text-align:center;border-top:1px solid #999}.gui-date-picker-cell{border-radius:4px;padding:2px 4px;position:relative;text-align:center;font-size:13px;z-index:0;border:1px solid transparent}.gui-date-picker-cell::before{border:1px solid #999;border-radius:50%;box-sizing:border-box;content:\"\";display:none;height:36px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:36px;z-index:-1}.gui-date-picker-cell::after{background:0 0;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:32px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:32px;z-index:-1}.gui-date-picker-cell:hover::after{background:#e6e6e6}.gui-date-picker-day{color:#333;cursor:pointer;opacity:.2}.gui-date-picker-day.gui-date-picker-selected-month{opacity:1}.gui-date-picker-month,.gui-date-picker-year{cursor:pointer}.gui-date-picker-year{font-size:13px}.gui-date-picker-day.gui-date-picker-current-day::before,.gui-date-picker-month.gui-date-picker-current-month::before,.gui-date-picker-year.gui-date-picker-current-year::before{display:block}.gui-date-picker-day.gui-date-picker-selected-day{pointer-events:none}.gui-date-picker-day.gui-date-picker-selected-day,.gui-date-picker-month.gui-date-picker-selected-month,.gui-date-picker-year.gui-date-picker-selected-year{color:#fff}.gui-date-picker-day.gui-date-picker-selected-day::after,.gui-date-picker-month.gui-date-picker-selected-month::after,.gui-date-picker-year.gui-date-picker-selected-year::after{background:#2185d0}.gui-date-picker-arrows{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:32px}.gui-date-picker-view-padding{padding:0 8px}.gui-date-picker-view-border-top{border-top:1px solid #999}gui-time-picker{border-top:1px solid #999;margin:6px 0 0;padding:12px 0 2.66667px}gui-time-picker form{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}gui-time-picker.only-time-picker{border-top:none}.gui-time-picker-button-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-right:8px}.gui-time-picker-button-wrapper .gui-button{font-size:12px}.gui-time-picker-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 8px;position:relative}.gui-time-picker-item input{box-sizing:border-box;max-width:24px;text-align:center}.gui-time-picker-item input::-webkit-inner-spin-button,.gui-time-picker-item input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.gui-time-picker-item input[type=number]{-moz-appearance:textfield}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(1){margin-bottom:2px}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(2){margin-top:6px}.gui-date-picker-view-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:16px 18px}.gui-date-picker-view-panel .gui-date-picker-view-panel-date{cursor:pointer;font-size:14px;font-weight:700;margin:0;pointer-events:auto}.gui-date-picker-arrow{position:relative;z-index:0}.gui-date-picker-arrow:hover::after{background:#e6e6e6;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:24px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:24px;z-index:-1}"]
                    }] }
        ];
        /** @nocollapse */
        FabricDatePickerCalendarComponent.ctorParameters = function () { return [
            { type: FabricDatePickerService },
            { type: FabricDatePickerCompositionService },
            { type: FabricDatePickerWeeks },
            { type: FabricDatePickerYears },
            { type: FabricDatePickerYearsService },
            { type: FabricDatePickerCalendarService },
            { type: FabricDatePickerCalendarViewService },
            { type: core.ChangeDetectorRef }
        ]; };
        return FabricDatePickerCalendarComponent;
    }(FabricReactive));
    if (false) {
        /**
         * Cells representing days in weeks of the active month.
         * @type {?}
         */
        FabricDatePickerCalendarComponent.prototype.weeks;
        /**
         * Year cells displayed in years view.
         * @type {?}
         */
        FabricDatePickerCalendarComponent.prototype.years;
        /** @type {?} */
        FabricDatePickerCalendarComponent.prototype.selectedDate;
        /** @type {?} */
        FabricDatePickerCalendarComponent.prototype.activeMonth;
        /** @type {?} */
        FabricDatePickerCalendarComponent.prototype.activeYear;
        /** @type {?} */
        FabricDatePickerCalendarComponent.prototype.datePickerComposition;
        /** @type {?} */
        FabricDatePickerCalendarComponent.prototype.FabricDatePickerComposition;
        /** @type {?} */
        FabricDatePickerCalendarComponent.prototype.FabricCalendarView;
        /** @type {?} */
        FabricDatePickerCalendarComponent.prototype.fabricCalendarView;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerCalendarComponent.prototype.datePickerService;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerCalendarComponent.prototype.datePickerFormatService;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerCalendarComponent.prototype.datePickerWeeks;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerCalendarComponent.prototype.datePickerYears;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerCalendarComponent.prototype.datePickerYearsService;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerCalendarComponent.prototype.calendarService;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerCalendarComponent.prototype.calendarViewService;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerCalendarComponent.prototype.changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var FabricPlacement = {
        TOP: 1,
        BOTTOM: 2,
        BEFORE: 3,
        AFTER: 4,
    };
    FabricPlacement[FabricPlacement.TOP] = 'TOP';
    FabricPlacement[FabricPlacement.BOTTOM] = 'BOTTOM';
    FabricPlacement[FabricPlacement.BEFORE] = 'BEFORE';
    FabricPlacement[FabricPlacement.AFTER] = 'AFTER';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */
    FabricGeometry = /** @class */ (function () {
        function FabricGeometry(elementRef, containerClassName) {
            this.elementRef = elementRef;
            this.containerClassName = containerClassName;
        }
        /**
         * @protected
         * @return {?}
         */
        FabricGeometry.prototype.getHeight = /**
         * @protected
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement.querySelector("." + this.containerClassName).offsetHeight;
        };
        /**
         * @protected
         * @return {?}
         */
        FabricGeometry.prototype.getWidth = /**
         * @protected
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement.querySelector("." + this.containerClassName).offsetWidth;
        };
        return FabricGeometry;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricGeometry.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        FabricGeometry.prototype.containerClassName;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */
    FabricCords = /** @class */ (function (_super) {
        __extends(FabricCords, _super);
        function FabricCords(window, invokerElementRef, invokedElementRef, containerClassName, placement, offset) {
            var _this = _super.call(this, invokedElementRef, containerClassName) || this;
            _this.calculateCords(window, invokerElementRef, placement, offset);
            return _this;
        }
        /**
         * @return {?}
         */
        FabricCords.prototype.getVerticalPosition = /**
         * @return {?}
         */
        function () {
            return this.verticalPosition;
        };
        /**
         * @return {?}
         */
        FabricCords.prototype.getHorizontalPosition = /**
         * @return {?}
         */
        function () {
            return this.horizontalPosition;
        };
        /**
         * @private
         * @param {?} window
         * @param {?} invokerElementRef
         * @param {?} placement
         * @param {?} offset
         * @return {?}
         */
        FabricCords.prototype.calculateCords = /**
         * @private
         * @param {?} window
         * @param {?} invokerElementRef
         * @param {?} placement
         * @param {?} offset
         * @return {?}
         */
        function (window, invokerElementRef, placement, offset) {
            /** @type {?} */
            var elementRect = invokerElementRef.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var elementBottom = window.pageYOffset + elementRect.bottom;
            /** @type {?} */
            var elementLeft = window.pageXOffset + elementRect.left;
            /** @type {?} */
            var elementRight = window.pageXOffset + elementRect.right;
            /** @type {?} */
            var elementTop = window.pageYOffset + elementRect.top;
            /** @type {?} */
            var topCords = elementTop + offset - this.getHeight();
            switch (placement) {
                case FabricPlacement.BOTTOM:
                    this.horizontalPosition = elementLeft;
                    this.verticalPosition = elementBottom + offset;
                    break;
                case FabricPlacement.TOP:
                    this.horizontalPosition = elementLeft;
                    this.verticalPosition = topCords;
                    break;
                case FabricPlacement.BEFORE:
                    this.horizontalPosition = elementRight + offset - this.getWidth();
                    this.verticalPosition = elementBottom;
                    break;
                case FabricPlacement.AFTER:
                    this.horizontalPosition = elementLeft + offset;
                    this.verticalPosition = elementBottom;
                    break;
                default:
                    this.horizontalPosition = elementLeft;
                    this.verticalPosition = elementBottom + offset;
            }
            this.calculateDirection(invokerElementRef, window, topCords);
        };
        /**
         * @private
         * @param {?} invokerElementRef
         * @param {?} window
         * @param {?} topCords
         * @return {?}
         */
        FabricCords.prototype.calculateDirection = /**
         * @private
         * @param {?} invokerElementRef
         * @param {?} window
         * @param {?} topCords
         * @return {?}
         */
        function (invokerElementRef, window, topCords) {
            /** @type {?} */
            var windowHeightWithOffset = window.innerHeight + window.pageYOffset;
            /** @type {?} */
            var windowWidthWithOffset = window.innerWidth + window.pageXOffset;
            /** @type {?} */
            var invokerElementWidth = invokerElementRef.nativeElement.offsetWidth;
            /** @type {?} */
            var invokedElementHeight = this.getHeight();
            /** @type {?} */
            var invokedElementWidth = this.getWidth();
            /** @type {?} */
            var invokedElementDoesNotFitHorizontally = (windowWidthWithOffset - this.horizontalPosition - invokedElementWidth) < 0;
            /** @type {?} */
            var invokedElementDoesNotFitVertically = (windowHeightWithOffset - this.verticalPosition - invokedElementHeight) < 0;
            if (invokedElementDoesNotFitHorizontally) {
                this.horizontalPosition -= invokedElementWidth - invokerElementWidth;
            }
            if (invokedElementDoesNotFitVertically) {
                this.verticalPosition = topCords;
            }
        };
        return FabricCords;
    }(FabricGeometry));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricCords.prototype.verticalPosition;
        /**
         * @type {?}
         * @private
         */
        FabricCords.prototype.horizontalPosition;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InlineDialogCords = /** @class */ (function (_super) {
        __extends(InlineDialogCords, _super);
        function InlineDialogCords(invokerElementRef, invokedElementRef, window, placement, inlineDialogOffset) {
            if (inlineDialogOffset === void 0) { inlineDialogOffset = InlineDialogCords.defaultInlineDialogOffset; }
            var _this = _super.call(this, window, invokerElementRef, invokedElementRef, 'gui-inline-dialog-wrapper', placement, inlineDialogOffset) || this;
            _this.invokerElementRef = invokerElementRef;
            _this.invokedElementRef = invokedElementRef;
            _this.window = window;
            _this.placement = placement;
            _this.inlineDialogOffset = inlineDialogOffset;
            return _this;
        }
        InlineDialogCords.defaultInlineDialogOffset = 8;
        return InlineDialogCords;
    }(FabricCords));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        InlineDialogCords.defaultInlineDialogOffset;
        /**
         * @type {?}
         * @private
         */
        InlineDialogCords.prototype.invokerElementRef;
        /**
         * @type {?}
         * @private
         */
        InlineDialogCords.prototype.invokedElementRef;
        /**
         * @type {?}
         * @private
         */
        InlineDialogCords.prototype.window;
        /**
         * @type {?}
         * @private
         */
        InlineDialogCords.prototype.placement;
        /**
         * @type {?}
         * @private
         */
        InlineDialogCords.prototype.inlineDialogOffset;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InlineDialogGeometryService = /** @class */ (function () {
        function InlineDialogGeometryService(platformId) {
            this.platformId = platformId;
            this.inlineDialogState$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        InlineDialogGeometryService.prototype.observeInlineDialogCords = /**
         * @return {?}
         */
        function () {
            return this.inlineDialogState$.asObservable();
        };
        /**
         * @param {?} inlineDialogRef
         * @return {?}
         */
        InlineDialogGeometryService.prototype.changeGeometry = /**
         * @param {?} inlineDialogRef
         * @return {?}
         */
        function (inlineDialogRef) {
            this.inlineDialogGeometry = inlineDialogRef;
        };
        /**
         * @param {?} invokerElementRef
         * @param {?=} placement
         * @param {?=} offset
         * @return {?}
         */
        InlineDialogGeometryService.prototype.getInlineDialogCords = /**
         * @param {?} invokerElementRef
         * @param {?=} placement
         * @param {?=} offset
         * @return {?}
         */
        function (invokerElementRef, placement, offset) {
            if (common.isPlatformBrowser(this.platformId)) {
                /** @type {?} */
                var inlineDialogCords = new InlineDialogCords(invokerElementRef, this.inlineDialogGeometry, window, placement, offset);
                this.inlineDialogState$.next(inlineDialogCords);
            }
        };
        InlineDialogGeometryService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        InlineDialogGeometryService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        return InlineDialogGeometryService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        InlineDialogGeometryService.prototype.inlineDialogGeometry;
        /**
         * @type {?}
         * @private
         */
        InlineDialogGeometryService.prototype.inlineDialogState$;
        /**
         * @type {?}
         * @private
         */
        InlineDialogGeometryService.prototype.platformId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var themeToken = new core.InjectionToken('Theme token');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var FabricThemedComponent = /** @class */ (function (_super) {
        __extends(FabricThemedComponent, _super);
        function FabricThemedComponent(elementRef, renderer, themeService) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            _this.themeService = themeService;
            return _this;
        }
        /**
         * @return {?}
         */
        FabricThemedComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.themeService
                .onTheme()
                .pipe(operators.distinctUntilChanged(), this.takeUntil())
                .subscribe((/**
             * @param {?} theme
             * @return {?}
             */
            function (theme) {
                _this.addTheme(theme);
            }));
        };
        /**
         * @protected
         * @param {?} theme
         * @return {?}
         */
        FabricThemedComponent.prototype.addTheme = /**
         * @protected
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            this.removeThemes();
            /** @type {?} */
            var cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme.toLowerCase();
            this.renderer.addClass(this.elementRef.nativeElement, cssClass);
        };
        /**
         * @protected
         * @return {?}
         */
        FabricThemedComponent.prototype.removeThemes = /**
         * @protected
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var themes = Object.keys(Theme)
                .map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return Theme[key].toLowerCase(); }))
                .filter((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return !Number.isInteger(val); }));
            themes.forEach((/**
             * @param {?} theme
             * @return {?}
             */
            function (theme) {
                /** @type {?} */
                var cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme;
                _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
            }));
        };
        /**
         * @protected
         * @return {?}
         */
        FabricThemedComponent.prototype.getElementRef = /**
         * @protected
         * @return {?}
         */
        function () {
            return this.elementRef;
        };
        /**
         * @protected
         * @return {?}
         */
        FabricThemedComponent.prototype.getRenderer = /**
         * @protected
         * @return {?}
         */
        function () {
            return this.renderer;
        };
        FabricThemedComponent.CSS_CLASS_PREFIX = 'gui-';
        return FabricThemedComponent;
    }(FabricReactive));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricThemedComponent.CSS_CLASS_PREFIX;
        /**
         * @type {?}
         * @private
         */
        FabricThemedComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        FabricThemedComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        FabricThemedComponent.prototype.themeService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricModalThemeService = /** @class */ (function () {
        function FabricModalThemeService() {
            this.fabricTheme$ = new rxjs.BehaviorSubject(Theme.FABRIC);
        }
        /**
         * @return {?}
         */
        FabricModalThemeService.prototype.onTheme = /**
         * @return {?}
         */
        function () {
            return this.fabricTheme$.asObservable();
        };
        /**
         * @param {?} theme
         * @return {?}
         */
        FabricModalThemeService.prototype.changeTheme = /**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            /** @type {?} */
            var fabricTheme = typeof theme === 'string' ? this.convertToTheme(theme) : theme;
            this.fabricTheme$.next(fabricTheme);
        };
        /**
         * @param {?} theme
         * @return {?}
         */
        FabricModalThemeService.prototype.convertToTheme = /**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            switch (theme.toLowerCase()) {
                case 'fabric':
                    return Theme.FABRIC;
                case 'material':
                    return Theme.MATERIAL;
                case 'generic':
                    return Theme.GENERIC;
                case 'light':
                    return Theme.LIGHT;
                case 'dark':
                    return Theme.DARK;
                default:
                    return Theme.FABRIC;
            }
        };
        FabricModalThemeService.decorators = [
            { type: core.Injectable }
        ];
        return FabricModalThemeService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricModalThemeService.prototype.fabricTheme$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricInlineDialogComponent = /** @class */ (function (_super) {
        __extends(FabricInlineDialogComponent, _super);
        function FabricInlineDialogComponent(componentFactoryResolver, changeDetectorRef, inlineDialogService, elRef, inlineDialogGeometryService, renderer, themeService, theme) {
            var _this = _super.call(this, elRef, renderer, themeService) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.changeDetectorRef = changeDetectorRef;
            _this.inlineDialogService = inlineDialogService;
            _this.elRef = elRef;
            _this.inlineDialogGeometryService = inlineDialogGeometryService;
            return _this;
        }
        /**
         * @return {?}
         */
        FabricInlineDialogComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.inlineDialogGeometryService
                .observeInlineDialogCords()
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} inlineDialogCords
             * @return {?}
             */
            function (inlineDialogCords) {
                _this.dialogTopAttribute = inlineDialogCords.getVerticalPosition();
                _this.dialogLeftAttribute = inlineDialogCords.getHorizontalPosition();
                _this.changeDetectorRef.detectChanges();
            }));
        };
        /**
         * @return {?}
         */
        FabricInlineDialogComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngAfterViewInit.call(this);
            this.createNestedComponent(this.inlineDialogNestedComponent);
            this.inlineDialogGeometryService.changeGeometry(this.elRef);
            this.changeDetectorRef.detectChanges();
        };
        /**
         * @return {?}
         */
        FabricInlineDialogComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.unsubscribe();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        FabricInlineDialogComponent.prototype.clickOutside = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.isContainerClicked(event)) {
                this.inlineDialogService.close();
            }
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        FabricInlineDialogComponent.prototype.isContainerClicked = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return !this.elRef.nativeElement.contains(event.target);
        };
        /**
         * @private
         * @param {?} component
         * @return {?}
         */
        FabricInlineDialogComponent.prototype.createNestedComponent = /**
         * @private
         * @param {?} component
         * @return {?}
         */
        function (component) {
            /** @type {?} */
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            if (this.inlineDialogNestedInjector) {
                this.container.createComponent(componentFactory, null, this.inlineDialogNestedInjector);
            }
            else {
                this.container.createComponent(componentFactory);
            }
            this.changeDetectorRef.detectChanges();
        };
        FabricInlineDialogComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div [ngClass]=\"customClass\"\n\t [style.left.px]=\"dialogLeftAttribute\"\n\t [style.top.px]=\"dialogTopAttribute\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".gui-inline-dialog-wrapper{box-sizing:border-box;position:absolute;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 7px #999;box-sizing:border-box;display:block;max-width:400px;z-index:1000}", ".gui-dark .gui-inline-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}"]
                    }] }
        ];
        /** @nocollapse */
        FabricInlineDialogComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.ChangeDetectorRef },
            { type: FabricInlineDialogService, decorators: [{ type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return FabricInlineDialogService; })),] }] },
            { type: core.ElementRef },
            { type: InlineDialogGeometryService },
            { type: core.Renderer2 },
            { type: FabricModalThemeService },
            { type: Theme, decorators: [{ type: core.Inject, args: [themeToken,] }] }
        ]; };
        FabricInlineDialogComponent.propDecorators = {
            container: [{ type: core.ViewChild, args: ['container', { read: core.ViewContainerRef, static: false },] }]
        };
        return FabricInlineDialogComponent;
    }(FabricThemedComponent));
    if (false) {
        /** @type {?} */
        FabricInlineDialogComponent.prototype.container;
        /** @type {?} */
        FabricInlineDialogComponent.prototype.customClass;
        /** @type {?} */
        FabricInlineDialogComponent.prototype.inlineDialogNestedComponent;
        /** @type {?} */
        FabricInlineDialogComponent.prototype.inlineDialogNestedInjector;
        /** @type {?} */
        FabricInlineDialogComponent.prototype.dialogTopAttribute;
        /** @type {?} */
        FabricInlineDialogComponent.prototype.dialogLeftAttribute;
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogComponent.prototype.componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogComponent.prototype.changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogComponent.prototype.inlineDialogService;
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogComponent.prototype.elRef;
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogComponent.prototype.inlineDialogGeometryService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricInlineDialogService = /** @class */ (function () {
        function FabricInlineDialogService(componentFactoryResolver, applicationRef, injector, document, inlineDialogGeometryService) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.applicationRef = applicationRef;
            this.injector = injector;
            this.document = document;
            this.inlineDialogGeometryService = inlineDialogGeometryService;
            this.inlineDialogRef = null;
            this.opened = false;
            this.opened$ = new rxjs.BehaviorSubject(false);
            this.unsub$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        FabricInlineDialogService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.removeInlineDialog();
        };
        /**
         * @param {?} element
         * @param {?} component
         * @param {?=} config
         * @return {?}
         */
        FabricInlineDialogService.prototype.open = /**
         * @param {?} element
         * @param {?} component
         * @param {?=} config
         * @return {?}
         */
        function (element, component, config) {
            if (event) {
                event.stopPropagation();
            }
            if (!this.inlineDialogRef) {
                /** @type {?} */
                var parentInjector = this.injector;
                /** @type {?} */
                var placement = FabricPlacement.BOTTOM;
                /** @type {?} */
                var offset = 0;
                /** @type {?} */
                var theme = Theme.FABRIC;
                /** @type {?} */
                var customClass = void 0;
                if (config && config.injector) {
                    parentInjector = config.injector;
                }
                if (config && config.placement) {
                    placement = config.placement;
                }
                if (config && config.offset) {
                    offset = config.offset;
                }
                if (config && config.theme) {
                    theme = config.theme;
                }
                if (config && config.customClass) {
                    customClass = config.customClass;
                }
                /** @type {?} */
                var injector = core.Injector.create({
                    providers: [{
                            provide: themeToken,
                            useValue: theme
                        }],
                    parent: parentInjector
                });
                this.setOpened(true);
                this.appendInlineDialogToElement(component, injector, customClass);
                this.inlineDialogGeometryService.getInlineDialogCords(element, placement, offset);
                this.closeOnEscKey();
            }
            else {
                this.close();
            }
        };
        /**
         * @return {?}
         */
        FabricInlineDialogService.prototype.close = /**
         * @return {?}
         */
        function () {
            this.removeInlineDialog();
            this.unsub$.next();
            this.unsub$.complete();
            this.setOpened(false);
        };
        /**
         * @return {?}
         */
        FabricInlineDialogService.prototype.isOpened = /**
         * @return {?}
         */
        function () {
            return this.opened;
        };
        /**
         * @return {?}
         */
        FabricInlineDialogService.prototype.onOpened = /**
         * @return {?}
         */
        function () {
            return this.opened$.asObservable();
        };
        /**
         * @private
         * @param {?} component
         * @param {?} injector
         * @param {?} customClass
         * @return {?}
         */
        FabricInlineDialogService.prototype.appendInlineDialogToElement = /**
         * @private
         * @param {?} component
         * @param {?} injector
         * @param {?} customClass
         * @return {?}
         */
        function (component, injector, customClass) {
            /** @type {?} */
            var componentRef = this.componentFactoryResolver
                .resolveComponentFactory(FabricInlineDialogComponent)
                .create(injector);
            componentRef.instance.customClass = customClass;
            componentRef.instance.inlineDialogNestedComponent = component;
            componentRef.changeDetectorRef.detectChanges();
            this.applicationRef.attachView(componentRef.hostView);
            /** @type {?} */
            var domDialogElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
                .rootNodes[0]));
            this.document.body.appendChild(domDialogElement);
            this.inlineDialogRef = componentRef;
        };
        /**
         * @private
         * @return {?}
         */
        FabricInlineDialogService.prototype.removeInlineDialog = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.inlineDialogRef) {
                this.applicationRef.detachView(this.inlineDialogRef.hostView);
                this.inlineDialogRef.destroy();
                this.inlineDialogRef = null;
            }
        };
        /**
         * @private
         * @param {?} opened
         * @return {?}
         */
        FabricInlineDialogService.prototype.setOpened = /**
         * @private
         * @param {?} opened
         * @return {?}
         */
        function (opened) {
            this.opened = opened;
            this.opened$.next(this.opened);
        };
        /**
         * @private
         * @return {?}
         */
        FabricInlineDialogService.prototype.closeOnEscKey = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var close$ = rxjs.fromEvent(this.document, 'keyup');
            close$
                .pipe(operators.filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return key.code === 'Escape'; })), operators.takeUntil(this.unsub$))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.close(); }));
        };
        FabricInlineDialogService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FabricInlineDialogService.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.ApplicationRef },
            { type: core.Injector },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: InlineDialogGeometryService }
        ]; };
        return FabricInlineDialogService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogService.prototype.inlineDialogRef;
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogService.prototype.opened;
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogService.prototype.opened$;
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogService.prototype.unsub$;
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogService.prototype.componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogService.prototype.applicationRef;
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogService.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogService.prototype.document;
        /**
         * @type {?}
         * @private
         */
        FabricInlineDialogService.prototype.inlineDialogGeometryService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerInlineDialogService = /** @class */ (function () {
        function FabricDatePickerInlineDialogService(fabricInlineDialogService) {
            this.fabricInlineDialogService = fabricInlineDialogService;
        }
        /**
         * @param {?} element
         * @param {?} component
         * @param {?=} datePickerThem
         * @return {?}
         */
        FabricDatePickerInlineDialogService.prototype.open = /**
         * @param {?} element
         * @param {?} component
         * @param {?=} datePickerThem
         * @return {?}
         */
        function (element, component, datePickerThem) {
            /** @type {?} */
            var theme = Theme.FABRIC;
            if (datePickerThem) {
                theme = datePickerThem;
            }
            this.fabricInlineDialogService.open(element, component, { placement: FabricPlacement.BOTTOM, offset: 0, theme: theme });
        };
        /**
         * @return {?}
         */
        FabricDatePickerInlineDialogService.prototype.close = /**
         * @return {?}
         */
        function () {
            this.fabricInlineDialogService.close();
        };
        /**
         * @return {?}
         */
        FabricDatePickerInlineDialogService.prototype.isOpened = /**
         * @return {?}
         */
        function () {
            return this.fabricInlineDialogService.isOpened();
        };
        /**
         * @return {?}
         */
        FabricDatePickerInlineDialogService.prototype.onOpened = /**
         * @return {?}
         */
        function () {
            return this.fabricInlineDialogService.onOpened();
        };
        FabricDatePickerInlineDialogService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FabricDatePickerInlineDialogService.ctorParameters = function () { return [
            { type: FabricInlineDialogService }
        ]; };
        return FabricDatePickerInlineDialogService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerInlineDialogService.prototype.fabricInlineDialogService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerComponent = /** @class */ (function (_super) {
        __extends(FabricDatePickerComponent, _super);
        function FabricDatePickerComponent(fabricDatePickerInlineDialogService, datePickerService, datePickerCompositionService, formBuilder, changeDetectorRef) {
            var _this = _super.call(this) || this;
            _this.fabricDatePickerInlineDialogService = fabricDatePickerInlineDialogService;
            _this.datePickerService = datePickerService;
            _this.datePickerCompositionService = datePickerCompositionService;
            _this.formBuilder = formBuilder;
            _this.changeDetectorRef = changeDetectorRef;
            _this.openDialog = false;
            _this.onlyDialog = false;
            _this.datePipeOptions = 'dd/MM/yyyy';
            _this.dateSelected = new core.EventEmitter();
            _this.dialogOpened = new core.EventEmitter();
            _this.datePickerForm = formBuilder.group({
                'date': ['']
            });
            return _this;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FabricDatePickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.selectDate) {
                this.datePickerService.dateSelected(this.selectDate);
            }
            if (changes.onlyDialog) {
                this.inputDisabled = this.onlyDialog ? 'disabled' : ''; // todo !== null ??
            }
            if (changes.datePipeOptions) {
                this.datePickerCompositionService.next(this.datePipeOptions);
            }
        };
        /**
         * @return {?}
         */
        FabricDatePickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.datePickerService
                .observeSelectedDate()
                .pipe(operators.take(1), this.takeUntil())
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                _this.pickedDate = date;
                _this.emitSelectedDate(date);
            }));
            this.datePickerService
                .observeSelectedDate()
                .pipe(operators.skip(1), this.takeUntil())
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                _this.pickedDate = date;
                _this.emitSelectedDate(date);
                _this.changeDetectorRef.detectChanges();
                _this.closeDatePicker();
            }));
            this.fabricDatePickerInlineDialogService
                .onOpened()
                .pipe(operators.skip(1), this.takeUntil())
                .subscribe((/**
             * @param {?} opened
             * @return {?}
             */
            function (opened) {
                _this.dialogOpened.emit(opened);
            }));
            this.observeDayChanges();
        };
        /**
         * @return {?}
         */
        FabricDatePickerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (this.openDialog) {
                this.openDatePicker();
            }
        };
        /**
         * @return {?}
         */
        FabricDatePickerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnDestroy.call(this);
            this.fabricDatePickerInlineDialogService.close();
        };
        /**
         * @return {?}
         */
        FabricDatePickerComponent.prototype.openDatePicker = /**
         * @return {?}
         */
        function () {
            if (!this.parentElement) {
                this.parentElement = this.datePickerRef;
            }
            this.fabricDatePickerInlineDialogService
                .open(this.parentElement, FabricDatePickerCalendarComponent, this.theme);
        };
        /**
         * @return {?}
         */
        FabricDatePickerComponent.prototype.closeDatePicker = /**
         * @return {?}
         */
        function () {
            this.fabricDatePickerInlineDialogService.close();
        };
        /**
         * @private
         * @param {?} date
         * @return {?}
         */
        FabricDatePickerComponent.prototype.emitSelectedDate = /**
         * @private
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this.dateSelected.emit(date);
        };
        /**
         * @private
         * @return {?}
         */
        FabricDatePickerComponent.prototype.observeDayChanges = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.datePickerForm
                .controls['date']
                .valueChanges
                .pipe(operators.distinctUntilChanged(), operators.debounceTime(1500), operators.map((/**
             * @param {?} day
             * @return {?}
             */
            function (day) { return _this.parse(day); })), this.takeUntil())
                .subscribe((/**
             * @param {?} day
             * @return {?}
             */
            function (day) {
                _this.datePickerService.dateSelected(day);
            }));
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        FabricDatePickerComponent.prototype.parse = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if ((typeof value === 'string') && (value.includes('/'))) {
                /** @type {?} */
                var str = value.split('/');
                /** @type {?} */
                var dateValues = this.getDateValues(str);
                /** @type {?} */
                var dateHasAllValues = dateValues && dateValues.length === 3;
                if (dateHasAllValues) {
                    return new Date(dateValues[0], dateValues[1], dateValues[2]);
                }
                else {
                    return this.pickedDate;
                }
            }
            else {
                return this.pickedDate;
            }
        };
        /**
         * @private
         * @param {?} dateValues
         * @return {?}
         */
        FabricDatePickerComponent.prototype.getDateValues = /**
         * @private
         * @param {?} dateValues
         * @return {?}
         */
        function (dateValues) {
            if (this.datePipeOptions.includes('/')) {
                /** @type {?} */
                var dateFormatParts = this.datePipeOptions.toLowerCase().split('/');
                /** @type {?} */
                var year_1;
                /** @type {?} */
                var month_1;
                /** @type {?} */
                var day_1;
                dateFormatParts.forEach((/**
                 * @param {?} datePart
                 * @param {?} i
                 * @return {?}
                 */
                function (datePart, i) {
                    if (datePart.includes('d')) {
                        day_1 = +dateValues[i];
                    }
                    if (datePart.includes('m')) {
                        month_1 = +dateValues[i] - 1;
                    }
                    if (datePart.includes('y')) {
                        year_1 = +dateValues[i];
                    }
                }));
                return [year_1, month_1, day_1];
            }
        };
        FabricDatePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-date-picker',
                        template: "<div #datePicker\n\t class=\"gui-date-picker\">\n\n\t<form [formGroup]=\"datePickerForm\">\n\n\t\t<input [attr.disabled]=\"inputDisabled\"\n\t\t\t   [name]=name\n\t\t\t   [value]=\"pickedDate | date: datePipeOptions\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input\n\t\t\t   readonly>\n\t</form>\n\n\t<gui-date-picker-icon (click)=\"openDatePicker()\"\n\t\t\t\t\t\t  class=\"gui-date-picker-icon\">\n\t</gui-date-picker-icon>\n\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".gui-date-picker{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;position:relative}.gui-date-picker input,.gui-date-picker-calendar input{background:0 0;border-radius:0;border-width:0 0 1px;font-family:Arial;font-size:14px;padding:4px}.gui-date-picker input:disabled,.gui-date-picker-calendar input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon,.gui-date-picker-calendar .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}", ".gui-dark .gui-input{background:0 0;color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-arrow-icon:hover::after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell:hover::after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year{color:#333}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day::after,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month::after,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year::after{background:#dfb8e6}", ".gui-material .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day::after,.gui-material .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month::after,.gui-material .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year::after{background:#6200ee}"]
                    }] }
        ];
        /** @nocollapse */
        FabricDatePickerComponent.ctorParameters = function () { return [
            { type: FabricDatePickerInlineDialogService },
            { type: FabricDatePickerService },
            { type: FabricDatePickerCompositionService },
            { type: forms.FormBuilder },
            { type: core.ChangeDetectorRef }
        ]; };
        FabricDatePickerComponent.propDecorators = {
            datePickerRef: [{ type: core.ViewChild, args: ['datePicker', { static: false },] }],
            parentElement: [{ type: core.Input }],
            theme: [{ type: core.Input }],
            selectDate: [{ type: core.Input }],
            name: [{ type: core.Input }],
            openDialog: [{ type: core.Input }],
            onlyDialog: [{ type: core.Input }],
            datePipeOptions: [{ type: core.Input }],
            dateSelected: [{ type: core.Output }],
            dialogOpened: [{ type: core.Output }]
        };
        return FabricDatePickerComponent;
    }(FabricReactive));
    if (false) {
        /** @type {?} */
        FabricDatePickerComponent.prototype.datePickerRef;
        /** @type {?} */
        FabricDatePickerComponent.prototype.parentElement;
        /** @type {?} */
        FabricDatePickerComponent.prototype.theme;
        /** @type {?} */
        FabricDatePickerComponent.prototype.selectDate;
        /** @type {?} */
        FabricDatePickerComponent.prototype.name;
        /** @type {?} */
        FabricDatePickerComponent.prototype.openDialog;
        /** @type {?} */
        FabricDatePickerComponent.prototype.onlyDialog;
        /** @type {?} */
        FabricDatePickerComponent.prototype.datePipeOptions;
        /** @type {?} */
        FabricDatePickerComponent.prototype.dateSelected;
        /** @type {?} */
        FabricDatePickerComponent.prototype.dialogOpened;
        /** @type {?} */
        FabricDatePickerComponent.prototype.datePickerForm;
        /** @type {?} */
        FabricDatePickerComponent.prototype.pickedDate;
        /** @type {?} */
        FabricDatePickerComponent.prototype.inputDisabled;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerComponent.prototype.fabricDatePickerInlineDialogService;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerComponent.prototype.datePickerService;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerComponent.prototype.datePickerCompositionService;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerComponent.prototype.formBuilder;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerComponent.prototype.changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricInlineDialogModule = /** @class */ (function () {
        function FabricInlineDialogModule() {
        }
        FabricInlineDialogModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricInlineDialogComponent
                        ],
                        providers: [
                            FabricInlineDialogService,
                            InlineDialogGeometryService
                        ],
                        entryComponents: [
                            FabricInlineDialogComponent
                        ]
                    },] }
        ];
        return FabricInlineDialogModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricInputComponent = /** @class */ (function () {
        function FabricInputComponent() {
        }
        FabricInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'input[gui-input]',
                        template: "\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-input]': 'true'
                        },
                        styles: [".gui-input{background:#fff;border-radius:4px;color:#333;font:14px Arial;margin:0;max-width:100%;outline:0;padding:8px 12px;text-align:left;transition:border-color .3s ease-in-out;border:1px solid #d6d6d6}.gui-input:hover{border-color:#999}.gui-input:focus{border-color:#6fb4e8}.gui-input:disabled{color:#ccc;cursor:default;pointer-events:none}.gui-input:disabled::-webkit-input-placeholder{color:#ccc}.gui-input:disabled::-moz-placeholder{color:#ccc}.gui-input:disabled:-ms-input-placeholder{color:#ccc}.gui-input:disabled::-ms-input-placeholder{color:#ccc}.gui-input:disabled::placeholder{color:#ccc}", ".gui-material .gui-input{border-color:#ccc;border-radius:0;border-style:solid;border-width:0 0 1px;font-family:Roboto,\"Helvetica Neue\",sans-serif;padding-left:0;transition:border-color .3s ease-in-out}.gui-material .gui-input:focus,.gui-material .gui-input:not(:placeholder-shown){border-color:#6200ee}", ".gui-dark .gui-input{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-input:hover{border-color:#757575}.gui-dark .gui-input:focus{border-color:#ce93d8}.gui-dark .gui-input:disabled{opacity:.36}"]
                    }] }
        ];
        return FabricInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricInputModule = /** @class */ (function () {
        function FabricInputModule() {
        }
        FabricInputModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricInputComponent
                        ],
                        exports: [
                            FabricInputComponent
                        ]
                    },] }
        ];
        return FabricInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var FabricCalendarCardView = {
        NEXT: 0,
        PREV: 1,
    };
    FabricCalendarCardView[FabricCalendarCardView.NEXT] = 'NEXT';
    FabricCalendarCardView[FabricCalendarCardView.PREV] = 'PREV';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var Direction = {
        TOP: -90,
        BOTTOM: 90,
        LEFT: 180,
        RIGHT: 0,
    };
    Direction[Direction.TOP] = 'TOP';
    Direction[Direction.BOTTOM] = 'BOTTOM';
    Direction[Direction.LEFT] = 'LEFT';
    Direction[Direction.RIGHT] = 'RIGHT';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerViewPanelComponent = /** @class */ (function () {
        function FabricDatePickerViewPanelComponent(calendarViewService, calendarService, datePickerYearsService, datePickerYears) {
            this.calendarViewService = calendarViewService;
            this.calendarService = calendarService;
            this.datePickerYearsService = datePickerYearsService;
            this.datePickerYears = datePickerYears;
            this.Direction = Direction;
            this.FabricCalendarCardView = FabricCalendarCardView;
        }
        /**
         * @return {?}
         */
        FabricDatePickerViewPanelComponent.prototype.getDisplayedDate = /**
         * @return {?}
         */
        function () {
            switch (this.fabricCalendarView) {
                case FabricCalendarView.DAYS:
                    return months[this.activeMonth] + " " + this.activeYear;
                case FabricCalendarView.MONTHS:
                    return months[this.activeMonth] + " " + this.activeYear;
                case FabricCalendarView.YEARS:
                    return "" + this.getDisplayedYearRange();
                default:
                    return '';
            }
        };
        /**
         * @return {?}
         */
        FabricDatePickerViewPanelComponent.prototype.switchCalendarView = /**
         * @return {?}
         */
        function () {
            switch (this.fabricCalendarView) {
                case FabricCalendarView.DAYS:
                    this.calendarViewService.switchView(FabricCalendarView.YEARS);
                    break;
                case FabricCalendarView.MONTHS:
                    this.calendarViewService.switchView(FabricCalendarView.DAYS);
                    break;
                case FabricCalendarView.YEARS:
                    this.calendarViewService.switchView(FabricCalendarView.DAYS);
                    break;
                default:
                    break;
            }
        };
        /**
         * @param {?} cardView
         * @return {?}
         */
        FabricDatePickerViewPanelComponent.prototype.switchCard = /**
         * @param {?} cardView
         * @return {?}
         */
        function (cardView) {
            /** @type {?} */
            var next = cardView === FabricCalendarCardView.NEXT;
            /** @type {?} */
            var inc = next ? 1 : -1;
            /** @type {?} */
            var selectedYear = this.activeYear + inc;
            /** @type {?} */
            var years = next ?
                this.datePickerYears.nextYearRange(this.activeYear)
                : this.datePickerYears.prevYearRange(this.activeYear);
            switch (this.fabricCalendarView) {
                case FabricCalendarView.DAYS:
                    this.handleMonthChange(next);
                    break;
                case FabricCalendarView.MONTHS:
                    this.calendarService.selectYear(selectedYear);
                    break;
                case FabricCalendarView.YEARS:
                    this.datePickerYearsService.next(years);
                    break;
                default:
                    break;
            }
        };
        /**
         * @return {?}
         */
        FabricDatePickerViewPanelComponent.prototype.getDisplayedYearRange = /**
         * @return {?}
         */
        function () {
            return this.years[0][0].toString() + '-' + this.years[4][this.years[4].length - 1].toString();
        };
        /**
         * @private
         * @param {?} next
         * @return {?}
         */
        FabricDatePickerViewPanelComponent.prototype.handleMonthChange = /**
         * @private
         * @param {?} next
         * @return {?}
         */
        function (next) {
            if (next) {
                this.calendarService.nextMonth(this.activeYear, this.activeMonth);
            }
            else {
                this.calendarService.prevMonth(this.activeYear, this.activeMonth);
            }
        };
        FabricDatePickerViewPanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-date-picker-view-panel',
                        template: "\n\t\t<div class=\"gui-date-picker-view-panel\">\n\n\t\t\t<div (click)=\"switchCalendarView()\"\n\t\t\t\t class=\"gui-date-picker-view-panel-date\">\n\t\t\t\t{{getDisplayedDate()}}\n\t\t\t</div>\n\n\t\t\t<div class=\"gui-date-picker-arrows\">\n\t\t\t\t<gui-arrow-icon [direction]=\"Direction.LEFT\"\n\t\t\t\t\t\t\t\t(click)=\"switchCard(FabricCalendarCardView.PREV)\"\n\t\t\t\t\t\t\t\tclass=\"gui-date-picker-arrow\">\n\t\t\t\t</gui-arrow-icon>\n\n\t\t\t\t<gui-arrow-icon [direction]=\"Direction.RIGHT\"\n\t\t\t\t\t\t\t\t(click)=\"switchCard(FabricCalendarCardView.NEXT)\"\n\t\t\t\t\t\t\t\tclass=\"gui-date-picker-arrow\">\n\t\t\t\t</gui-arrow-icon>\n\t\t\t</div>\n\n\t\t</div>\n\t",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        FabricDatePickerViewPanelComponent.ctorParameters = function () { return [
            { type: FabricDatePickerCalendarViewService },
            { type: FabricDatePickerCalendarService },
            { type: FabricDatePickerYearsService },
            { type: FabricDatePickerYears }
        ]; };
        FabricDatePickerViewPanelComponent.propDecorators = {
            fabricCalendarView: [{ type: core.Input }],
            selectedDate: [{ type: core.Input }],
            activeMonth: [{ type: core.Input }],
            activeYear: [{ type: core.Input }],
            years: [{ type: core.Input }]
        };
        return FabricDatePickerViewPanelComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricDatePickerViewPanelComponent.prototype.fabricCalendarView;
        /** @type {?} */
        FabricDatePickerViewPanelComponent.prototype.selectedDate;
        /** @type {?} */
        FabricDatePickerViewPanelComponent.prototype.activeMonth;
        /** @type {?} */
        FabricDatePickerViewPanelComponent.prototype.activeYear;
        /** @type {?} */
        FabricDatePickerViewPanelComponent.prototype.years;
        /** @type {?} */
        FabricDatePickerViewPanelComponent.prototype.Direction;
        /** @type {?} */
        FabricDatePickerViewPanelComponent.prototype.FabricCalendarCardView;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerViewPanelComponent.prototype.calendarViewService;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerViewPanelComponent.prototype.calendarService;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerViewPanelComponent.prototype.datePickerYearsService;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerViewPanelComponent.prototype.datePickerYears;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricTimeValues = /** @class */ (function () {
        function FabricTimeValues(hours, minutes, seconds) {
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
        return FabricTimeValues;
    }());
    if (false) {
        /** @type {?} */
        FabricTimeValues.prototype.hours;
        /** @type {?} */
        FabricTimeValues.prototype.minutes;
        /** @type {?} */
        FabricTimeValues.prototype.seconds;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricTimePickerComponent = /** @class */ (function (_super) {
        __extends(FabricTimePickerComponent, _super);
        function FabricTimePickerComponent(formBuilder, datePickerService) {
            var _this = _super.call(this) || this;
            _this.formBuilder = formBuilder;
            _this.datePickerService = datePickerService;
            _this.steps = 1;
            _this.Direction = Direction;
            _this.FabricDatePickerComposition = FabricDatePickerComposition;
            _this.form = _this.formBuilder.group({
                hours: [''],
                minutes: [''],
                seconds: ['']
            });
            return _this;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FabricTimePickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.selectedDate) {
                if (this.selectedDate) {
                }
            }
        };
        /**
         * @return {?}
         */
        FabricTimePickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)) {
                this.form
                    .controls['hours']
                    .valueChanges
                    .pipe(this.takeUntil())
                    .subscribe((/**
                 * @param {?} hour
                 * @return {?}
                 */
                function (hour) {
                    /** @type {?} */
                    var minHour = _this.isMeridian() ? 1 : 0;
                    /** @type {?} */
                    var maxHour = _this.isMeridian() ? 12 : 23;
                    if (hour > maxHour || hour < minHour) {
                        _this.form.controls['hours'].setValue(minHour);
                    }
                    _this.changeSelectedDate();
                }));
            }
            if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)) {
                this.form
                    .controls['minutes']
                    .valueChanges
                    .pipe(this.takeUntil())
                    .subscribe((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    _this.controlFormItemValue(value, 'minutes', 'hours');
                    _this.changeSelectedDate();
                }));
            }
            if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)) {
                this.form
                    .controls['seconds']
                    .valueChanges
                    .pipe(this.takeUntil())
                    .subscribe((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    _this.controlFormItemValue(value, 'seconds', 'minutes');
                    _this.changeSelectedDate();
                }));
            }
            this.setTimeFromSelectedDate();
        };
        /**
         * @param {?} formControlName
         * @param {?} steps
         * @return {?}
         */
        FabricTimePickerComponent.prototype.changeTimeItem = /**
         * @param {?} formControlName
         * @param {?} steps
         * @return {?}
         */
        function (formControlName, steps) {
            /** @type {?} */
            var value = this.form.controls[formControlName].value + steps;
            this.form.controls[formControlName].setValue(value);
        };
        /**
         * @return {?}
         */
        FabricTimePickerComponent.prototype.changeSelectedDateTime = /**
         * @return {?}
         */
        function () {
            this.datePickerService.next();
        };
        /**
         * @param {?} activeComposition
         * @param {?} checkedComposition
         * @return {?}
         */
        FabricTimePickerComponent.prototype.isActive = /**
         * @param {?} activeComposition
         * @param {?} checkedComposition
         * @return {?}
         */
        function (activeComposition, checkedComposition) {
            return !!(activeComposition & checkedComposition);
        };
        /**
         * @return {?}
         */
        FabricTimePickerComponent.prototype.isMeridian = /**
         * @return {?}
         */
        function () {
            return this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MERIDIAN);
        };
        /**
         * @return {?}
         */
        FabricTimePickerComponent.prototype.isOnlyTimePicker = /**
         * @return {?}
         */
        function () {
            return !(this.datePickerComposition & FabricDatePickerComposition.DATE_PICKER);
        };
        /**
         * @private
         * @return {?}
         */
        FabricTimePickerComponent.prototype.changeSelectedDate = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hours = this.form.controls['hours'].value;
            /** @type {?} */
            var minutes = this.form.controls['minutes'].value;
            /** @type {?} */
            var seconds = this.form.controls['seconds'].value;
            /** @type {?} */
            var timeValues = new FabricTimeValues(hours, minutes, seconds);
            this.datePickerService.changeTime(timeValues, this.selectedDate);
        };
        /**
         * @private
         * @param {?} value
         * @param {?} observedFormControlName
         * @param {?} incFormControlName
         * @return {?}
         */
        FabricTimePickerComponent.prototype.controlFormItemValue = /**
         * @private
         * @param {?} value
         * @param {?} observedFormControlName
         * @param {?} incFormControlName
         * @return {?}
         */
        function (value, observedFormControlName, incFormControlName) {
            if (value > 59) {
                /** @type {?} */
                var timeItemValue = this.form.controls[incFormControlName].value;
                /** @type {?} */
                var incTimeItemValue = timeItemValue + 1;
                this.form.controls[incFormControlName].setValue(incTimeItemValue);
                this.form.controls[observedFormControlName].setValue(0);
            }
            else if (value < 0) {
                this.form.controls[observedFormControlName].setValue(0);
            }
        };
        /**
         * @private
         * @return {?}
         */
        FabricTimePickerComponent.prototype.setTimeFromSelectedDate = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hours = this.selectedDate.getHours();
            /** @type {?} */
            var minutes = this.selectedDate.getMinutes();
            /** @type {?} */
            var seconds = this.selectedDate.getSeconds();
            this.form.controls['hours'].setValue(hours);
            this.form.controls['minutes'].setValue(minutes);
            this.form.controls['seconds'].setValue(seconds);
        };
        FabricTimePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-time-picker',
                        template: "<form [formGroup]=\"form\">\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"hours\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"minutes\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"seconds\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n</form>\n\n<div (click)=\"changeSelectedDateTime()\"\n\t class=\"gui-time-picker-button-wrapper\">\n\t<button [outline]=\"true\" gui-button>\n\t\tOk\n\t</button>\n</div>\n",
                        host: {
                            '[class.only-time-picker]': 'isOnlyTimePicker()'
                        },
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        FabricTimePickerComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: FabricDatePickerService }
        ]; };
        FabricTimePickerComponent.propDecorators = {
            selectedDate: [{ type: core.Input }],
            datePickerComposition: [{ type: core.Input }]
        };
        return FabricTimePickerComponent;
    }(FabricReactive));
    if (false) {
        /** @type {?} */
        FabricTimePickerComponent.prototype.selectedDate;
        /** @type {?} */
        FabricTimePickerComponent.prototype.datePickerComposition;
        /** @type {?} */
        FabricTimePickerComponent.prototype.steps;
        /** @type {?} */
        FabricTimePickerComponent.prototype.form;
        /** @type {?} */
        FabricTimePickerComponent.prototype.Direction;
        /** @type {?} */
        FabricTimePickerComponent.prototype.FabricDatePickerComposition;
        /**
         * @type {?}
         * @private
         */
        FabricTimePickerComponent.prototype.formBuilder;
        /**
         * @type {?}
         * @private
         */
        FabricTimePickerComponent.prototype.datePickerService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricArrowIconComponent = /** @class */ (function () {
        function FabricArrowIconComponent() {
            this.direction = Direction.RIGHT;
        }
        FabricArrowIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-arrow-icon',
                        template: "<svg [style.transform]=\"'rotate(' + direction + 'deg)'\"\n\t height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path d=\"M.75.75,5.02,5.02.75,9.29\"\n\t\t  fill=\"none\"\n\t\t  stroke-linecap=\"round\"\n\t\t  stroke-linejoin=\"round\"\n\t\t  stroke-width=\"1.5\"\n\t\t  transform=\"translate(0.311 0.311)\"/>\n</svg>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-arrow-icon]': 'true',
                            '[class.gui-icon]': 'true'
                        },
                        styles: [".gui-arrow-icon{cursor:pointer}.gui-arrow-icon svg path{stroke:#aaa;transition:stroke .2s ease-in-out}.gui-arrow-icon:hover svg path{stroke:#464646}"]
                    }] }
        ];
        FabricArrowIconComponent.propDecorators = {
            direction: [{ type: core.Input }]
        };
        return FabricArrowIconComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricArrowIconComponent.prototype.direction;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricArrowIconModule = /** @class */ (function () {
        function FabricArrowIconModule() {
        }
        FabricArrowIconModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricArrowIconComponent
                        ],
                        exports: [
                            FabricArrowIconComponent
                        ]
                    },] }
        ];
        return FabricArrowIconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DatePickerIconComponent = /** @class */ (function () {
        function DatePickerIconComponent() {
        }
        DatePickerIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-date-picker-icon',
                        template: "<svg height=\"9.82\" viewBox=\"0 0 8.76 9.82\" width=\"8.76\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path\n\t\td=\"M401.41,308.63l-.46.15h-.15a.34.34,0,0,1-.08-.67l.68-.22a1.539,1.539,0,0,1,.38-.07h0a.39.39,0,0,1,.39.39V312a.38.38,0,0,1-.39.39.39.39,0,0,1-.39-.39Z\"\n\t\tfill=\"#8c8b8b\" transform=\"translate(-397.19 -304.36)\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(0.64 9.32)\" x1=\"7.39\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(0.64 2.16)\" x1=\"7.39\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(0.5 0.5)\" y2=\"8.82\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(3.09 0.5)\" y2=\"1.66\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(5.68 0.5)\" y2=\"1.66\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(8.26 0.5)\" y2=\"8.82\"/>\n</svg>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-date-picker-icon]': 'true'
                        },
                        styles: [".gui-date-picker-icon svg{height:16px;width:16px}.gui-date-picker-icon svg line,.gui-date-picker-icon svg path{transition:.3s ease-in-out}.gui-date-picker-icon svg line{stroke:#aaa}.gui-date-picker-icon svg path{fill:#aaa}.gui-date-picker-icon svg:hover line{stroke:#464646}.gui-date-picker-icon svg:hover path{fill:#464646}", ".gui-dark .gui-date-picker-icon svg line{stroke:#bdbdbd}.gui-dark .gui-date-picker-icon svg path{fill:#bdbdbd}.gui-dark .gui-date-picker-icon svg:hover line{stroke:#616161}.gui-dark .gui-date-picker-icon svg:hover path{fill:#616161}"]
                    }] }
        ];
        return DatePickerIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DatePickerIconModule = /** @class */ (function () {
        function DatePickerIconModule() {
        }
        DatePickerIconModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            DatePickerIconComponent
                        ],
                        exports: [
                            DatePickerIconComponent
                        ]
                    },] }
        ];
        return DatePickerIconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var monthsPerQuarters = [
        [{ nr: 0, name: 'Jan' }, { nr: 1, name: 'Feb' }, { nr: 2, name: 'Mar' }],
        [{ nr: 3, name: 'Apr' }, { nr: 4, name: 'May' }, { nr: 5, name: 'Jun' }],
        [{ nr: 6, name: 'Jul' }, { nr: 7, name: 'Aug' }, { nr: 8, name: 'Sep' }],
        [{ nr: 9, name: 'Oct' }, { nr: 10, name: 'Nov' }, { nr: 11, name: 'Dec' }]
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDateUtils = /** @class */ (function () {
        function FabricDateUtils() {
        }
        /**
         * @param {?} firstDay
         * @param {?} secondDate
         * @return {?}
         */
        FabricDateUtils.areDatesSame = /**
         * @param {?} firstDay
         * @param {?} secondDate
         * @return {?}
         */
        function (firstDay, secondDate) {
            return firstDay.getDate() === secondDate.getDate() &&
                firstDay.getMonth() === secondDate.getMonth() &&
                firstDay.getFullYear() === secondDate.getFullYear();
        };
        /**
         * @param {?} date
         * @param {?} month
         * @param {?} year
         * @return {?}
         */
        FabricDateUtils.isMonth = /**
         * @param {?} date
         * @param {?} month
         * @param {?} year
         * @return {?}
         */
        function (date, month, year) {
            return date.getMonth() === month &&
                date.getFullYear() === year;
        };
        return FabricDateUtils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerMonthsViewComponent = /** @class */ (function () {
        function FabricDatePickerMonthsViewComponent(calendarService, calendarViewService) {
            this.calendarService = calendarService;
            this.calendarViewService = calendarViewService;
            this.currentDay = new Date();
            this.monthsPerQuarters = monthsPerQuarters;
        }
        /**
         * @param {?} date
         * @param {?} month
         * @return {?}
         */
        FabricDatePickerMonthsViewComponent.prototype.isMonth = /**
         * @param {?} date
         * @param {?} month
         * @return {?}
         */
        function (date, month) {
            return FabricDateUtils.isMonth(date, month, this.activeYear);
        };
        /**
         * @param {?} month
         * @return {?}
         */
        FabricDatePickerMonthsViewComponent.prototype.selectMonth = /**
         * @param {?} month
         * @return {?}
         */
        function (month) {
            this.calendarService.selectMonth(month);
            this.calendarViewService.switchView(FabricCalendarView.DAYS);
        };
        FabricDatePickerMonthsViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-date-picker-months-view',
                        template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let quarter of monthsPerQuarters\"\n\t\t class=\"gui-display-grid gui-grid-cols-3\">\n\t\t<div (click)=\"selectMonth(month.nr)\"\n\t\t\t *ngFor=\"let month of quarter\"\n\t\t\t [class.gui-date-picker-current-month]=\"isMonth(currentDay, month.nr)\"\n\t\t\t [class.gui-date-picker-selected-month]=\"isMonth(selectedDate, month.nr)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-month\">\n\t\t\t{{month.name}}\n\t\t</div>\n\t</div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        FabricDatePickerMonthsViewComponent.ctorParameters = function () { return [
            { type: FabricDatePickerCalendarService },
            { type: FabricDatePickerCalendarViewService }
        ]; };
        FabricDatePickerMonthsViewComponent.propDecorators = {
            selectedDate: [{ type: core.Input }],
            activeYear: [{ type: core.Input }]
        };
        return FabricDatePickerMonthsViewComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricDatePickerMonthsViewComponent.prototype.selectedDate;
        /** @type {?} */
        FabricDatePickerMonthsViewComponent.prototype.activeYear;
        /** @type {?} */
        FabricDatePickerMonthsViewComponent.prototype.currentDay;
        /** @type {?} */
        FabricDatePickerMonthsViewComponent.prototype.monthsPerQuarters;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerMonthsViewComponent.prototype.calendarService;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerMonthsViewComponent.prototype.calendarViewService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerYearsComponent = /** @class */ (function () {
        function FabricDatePickerYearsComponent(calendarService, calendarViewService) {
            this.calendarService = calendarService;
            this.calendarViewService = calendarViewService;
            this.currentDay = new Date();
        }
        /**
         * @param {?} year
         * @return {?}
         */
        FabricDatePickerYearsComponent.prototype.selectYear = /**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            this.calendarService.selectYear(year);
            this.calendarViewService.switchView(FabricCalendarView.MONTHS);
        };
        /**
         * @param {?} date
         * @param {?} year
         * @return {?}
         */
        FabricDatePickerYearsComponent.prototype.isYear = /**
         * @param {?} date
         * @param {?} year
         * @return {?}
         */
        function (date, year) {
            if (date) {
                return date.getFullYear() === year;
            }
        };
        FabricDatePickerYearsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-date-picker-years-view',
                        template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let yearsChunk of years\"\n\t\t class=\"gui-display-grid gui-grid-cols-5\">\n\t\t<div (click)=\"selectYear(year)\"\n\t\t\t *ngFor=\"let year of yearsChunk\"\n\t\t\t [class.gui-date-picker-current-year]=\"isYear(currentDay, year)\"\n\t\t\t [class.gui-date-picker-selected-year]=\"isYear(selectedDate, year)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-year\">\n\t\t\t{{year}}\n\t\t</div>\n\t</div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        FabricDatePickerYearsComponent.ctorParameters = function () { return [
            { type: FabricDatePickerCalendarService },
            { type: FabricDatePickerCalendarViewService }
        ]; };
        FabricDatePickerYearsComponent.propDecorators = {
            selectedDate: [{ type: core.Input }],
            years: [{ type: core.Input }]
        };
        return FabricDatePickerYearsComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricDatePickerYearsComponent.prototype.selectedDate;
        /** @type {?} */
        FabricDatePickerYearsComponent.prototype.years;
        /** @type {?} */
        FabricDatePickerYearsComponent.prototype.currentDay;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerYearsComponent.prototype.calendarService;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerYearsComponent.prototype.calendarViewService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var daysOfTheWeek = [
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa',
        'Su'
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDatePickerDaysViewComponent = /** @class */ (function () {
        function FabricDatePickerDaysViewComponent(datePickerService) {
            this.datePickerService = datePickerService;
            this.daysOfTheWeek = daysOfTheWeek;
            this.currentDay = new Date();
        }
        /**
         * @param {?} date
         * @return {?}
         */
        FabricDatePickerDaysViewComponent.prototype.selectDate = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this.datePickerService.dateSelected(date);
        };
        /**
         * @param {?} comparedDate
         * @param {?} date
         * @return {?}
         */
        FabricDatePickerDaysViewComponent.prototype.isDate = /**
         * @param {?} comparedDate
         * @param {?} date
         * @return {?}
         */
        function (comparedDate, date) {
            return FabricDateUtils.areDatesSame(comparedDate, date);
        };
        /**
         * @param {?} month
         * @return {?}
         */
        FabricDatePickerDaysViewComponent.prototype.displayMonthDays = /**
         * @param {?} month
         * @return {?}
         */
        function (month) {
            return month === this.activeMonth;
        };
        FabricDatePickerDaysViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-date-picker-days-view',
                        template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6\">\n\n\t<div class=\"gui-display-grid gui-grid-cols-7 gui-py-4 gui-date-picker-header\">\n\t\t<div *ngFor=\"let dayOfTheWeek of daysOfTheWeek\">{{dayOfTheWeek}}</div>\n\t</div>\n\n\t<div *ngFor=\"let week of weeks\"\n\t\t class=\"gui-display-grid gui-grid-cols-7\">\n\n\t\t<div (click)=\"selectDate(day)\"\n\t\t\t *ngFor=\"let day of week\"\n\t\t\t [class.gui-date-picker-current-day]=\"isDate(currentDay, day)\"\n\t\t\t [class.gui-date-picker-selected-day]=\"isDate(selectedDate, day)\"\n\t\t\t [class.gui-date-picker-selected-month]=\"displayMonthDays(day.getMonth())\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-day\">\n\t\t\t{{day.getDate()}}\n\t\t</div>\n\n\t</div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        FabricDatePickerDaysViewComponent.ctorParameters = function () { return [
            { type: FabricDatePickerService }
        ]; };
        FabricDatePickerDaysViewComponent.propDecorators = {
            selectedDate: [{ type: core.Input }],
            activeMonth: [{ type: core.Input }],
            weeks: [{ type: core.Input }]
        };
        return FabricDatePickerDaysViewComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricDatePickerDaysViewComponent.prototype.selectedDate;
        /** @type {?} */
        FabricDatePickerDaysViewComponent.prototype.activeMonth;
        /** @type {?} */
        FabricDatePickerDaysViewComponent.prototype.weeks;
        /** @type {?} */
        FabricDatePickerDaysViewComponent.prototype.daysOfTheWeek;
        /** @type {?} */
        FabricDatePickerDaysViewComponent.prototype.currentDay;
        /**
         * @type {?}
         * @private
         */
        FabricDatePickerDaysViewComponent.prototype.datePickerService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var icons = [
        DatePickerIconModule,
        FabricArrowIconModule
    ];
    var FabricDatePickerModule = /** @class */ (function () {
        function FabricDatePickerModule() {
        }
        FabricDatePickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread([
                            common.CommonModule,
                            FabricInlineDialogModule,
                            forms.ReactiveFormsModule,
                            FabricInputModule,
                            FabricButtonModule
                        ], icons),
                        declarations: [
                            FabricDatePickerCalendarComponent,
                            FabricDatePickerComponent,
                            FabricDatePickerDaysViewComponent,
                            FabricDatePickerMonthsViewComponent,
                            FabricDatePickerYearsComponent,
                            FabricDatePickerViewPanelComponent,
                            FabricTimePickerComponent
                        ],
                        exports: [
                            FabricDatePickerCalendarComponent,
                            FabricDatePickerComponent
                        ],
                        entryComponents: [
                            FabricDatePickerCalendarComponent
                        ],
                        providers: [
                            FabricDatePickerService,
                            FabricDatePickerCompositionService,
                            FabricDatePickerCalendarService,
                            FabricDatePickerCalendarViewService,
                            FabricDatePickerYearsService,
                            FabricDatePickerWeeks,
                            FabricDatePickerYears,
                            FabricDatePickerInlineDialogService
                        ]
                    },] }
        ];
        return FabricDatePickerModule;
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
    DialogService = /** @class */ (function (_super) {
        __extends(DialogService, _super);
        function DialogService() {
            return _super.call(this) || this;
        }
        return DialogService;
    }(FabricReactive));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDrawerService = /** @class */ (function (_super) {
        __extends(FabricDrawerService, _super);
        function FabricDrawerService(componentFactoryResolver, applicationRef, injector, document) {
            var _this = _super.call(this) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.applicationRef = applicationRef;
            _this.injector = injector;
            _this.document = document;
            _this.drawerRef = null;
            return _this;
        }
        /**
         * @return {?}
         */
        FabricDrawerService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.removeDrawer();
            _super.prototype.ngOnDestroy.call(this);
        };
        /**
         * @param {?} element
         * @param {?} component
         * @param {?=} config
         * @return {?}
         */
        FabricDrawerService.prototype.open = /**
         * @param {?} element
         * @param {?} component
         * @param {?=} config
         * @return {?}
         */
        function (element, component, config) {
            if (event) {
                event.stopPropagation();
            }
            if (!this.drawerRef) {
                /** @type {?} */
                var theme = Theme.FABRIC;
                /** @type {?} */
                var parentInjector = this.injector;
                /** @type {?} */
                var closeOnClickOutside = false;
                if (config && config.theme) {
                    theme = config.theme;
                }
                if (config && config.injector) {
                    parentInjector = config.injector;
                }
                if (config && config.closeOnClickOutside) {
                    closeOnClickOutside = config.closeOnClickOutside;
                }
                /** @type {?} */
                var injector = core.Injector.create({
                    providers: [{
                            provide: themeToken,
                            useValue: theme
                        }],
                    parent: parentInjector
                });
                this.createAndAppend(element, component, injector, closeOnClickOutside);
                this.closeOnEscKey();
            }
        };
        /**
         * @return {?}
         */
        FabricDrawerService.prototype.close = /**
         * @return {?}
         */
        function () {
            this.removeDrawer();
        };
        /**
         * @private
         * @return {?}
         */
        FabricDrawerService.prototype.closeOnEscKey = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var close$ = rxjs.fromEvent(this.document, 'keyup');
            close$
                .pipe(operators.filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return key.code === 'Escape'; })), this.takeUntil())
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.close(); }));
        };
        /**
         * @private
         * @param {?} element
         * @param {?} component
         * @param {?} injector
         * @param {?} closeOnClickOutside
         * @return {?}
         */
        FabricDrawerService.prototype.createAndAppend = /**
         * @private
         * @param {?} element
         * @param {?} component
         * @param {?} injector
         * @param {?} closeOnClickOutside
         * @return {?}
         */
        function (element, component, injector, closeOnClickOutside) {
            /** @type {?} */
            var componentRef = this.componentFactoryResolver
                .resolveComponentFactory(FabricDrawerComponent)
                .create(injector);
            componentRef.instance.dialogNestedComponent = component;
            componentRef.instance.closeOnClickOutside = closeOnClickOutside;
            componentRef.changeDetectorRef.detectChanges();
            this.applicationRef.attachView(componentRef.hostView);
            /** @type {?} */
            var domDrawerElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
                .rootNodes[0]));
            element.nativeElement.appendChild(domDrawerElement);
            this.drawerRef = componentRef;
        };
        /**
         * @private
         * @return {?}
         */
        FabricDrawerService.prototype.removeDrawer = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.drawerRef) {
                this.applicationRef.detachView(this.drawerRef.hostView);
                this.drawerRef.destroy();
                this.drawerRef = null;
            }
        };
        FabricDrawerService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FabricDrawerService.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.ApplicationRef },
            { type: core.Injector },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        return FabricDrawerService;
    }(DialogService));
    if (false) {
        /** @type {?} */
        FabricDrawerService.prototype.drawerRef;
        /**
         * @type {?}
         * @private
         */
        FabricDrawerService.prototype.componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        FabricDrawerService.prototype.applicationRef;
        /**
         * @type {?}
         * @private
         */
        FabricDrawerService.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        FabricDrawerService.prototype.document;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDrawerComponent = /** @class */ (function (_super) {
        __extends(FabricDrawerComponent, _super);
        function FabricDrawerComponent(componentFactoryResolver, changeDetectorRef, elRef, dialogService, themeModalService, renderer) {
            var _this = _super.call(this, elRef, renderer, themeModalService) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.changeDetectorRef = changeDetectorRef;
            _this.elRef = elRef;
            _this.dialogService = dialogService;
            _this.closeOnClickOutside = false;
            return _this;
        }
        /**
         * @return {?}
         */
        FabricDrawerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngAfterViewInit.call(this);
            this.createNestedComponent(this.dialogNestedComponent);
        };
        /**
         * @return {?}
         */
        FabricDrawerComponent.prototype.closeDrawer = /**
         * @return {?}
         */
        function () {
            this.dialogService.close();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        FabricDrawerComponent.prototype.clickOutside = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.closeOnClickOutside) {
                if (this.isContainerClicked(event)) {
                    this.closeDrawer();
                }
            }
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        FabricDrawerComponent.prototype.isContainerClicked = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var dialogContentRef = this.elRef.nativeElement.querySelector('.gui-drawer-content');
            if (dialogContentRef) {
                return !dialogContentRef.contains(event.target);
            }
        };
        /**
         * @private
         * @param {?} component
         * @return {?}
         */
        FabricDrawerComponent.prototype.createNestedComponent = /**
         * @private
         * @param {?} component
         * @return {?}
         */
        function (component) {
            /** @type {?} */
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.container.createComponent(componentFactory);
            this.changeDetectorRef.detectChanges();
        };
        FabricDrawerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div (document:click)=\"clickOutside($event)\"\n\t class=\"gui-drawer-wrapper\">\n\t<div class=\"gui-drawer-content\">\n\t\t<gui-close-icon (click)=\"closeDrawer()\"></gui-close-icon>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;height:100%;position:absolute;right:0;top:0;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;box-shadow:-3px 0 4px 0 #ccc;height:100%;max-width:400px;position:relative}"]
                    }] }
        ];
        /** @nocollapse */
        FabricDrawerComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: FabricDrawerService },
            { type: FabricModalThemeService },
            { type: core.Renderer2 }
        ]; };
        FabricDrawerComponent.propDecorators = {
            container: [{ type: core.ViewChild, args: ['container', { read: core.ViewContainerRef, static: false },] }],
            closeOnClickOutside: [{ type: core.Input }]
        };
        return FabricDrawerComponent;
    }(FabricThemedComponent));
    if (false) {
        /** @type {?} */
        FabricDrawerComponent.prototype.container;
        /** @type {?} */
        FabricDrawerComponent.prototype.closeOnClickOutside;
        /** @type {?} */
        FabricDrawerComponent.prototype.dialogNestedComponent;
        /**
         * @type {?}
         * @private
         */
        FabricDrawerComponent.prototype.componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        FabricDrawerComponent.prototype.changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        FabricDrawerComponent.prototype.elRef;
        /**
         * @type {?}
         * @private
         */
        FabricDrawerComponent.prototype.dialogService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var selector = 'gui-close-icon';
    var FabricCloseIconComponent = /** @class */ (function () {
        function FabricCloseIconComponent() {
        }
        FabricCloseIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: selector,
                        template: "\n\t\t<span class=\"gui-close-icon\"></span>\n\t",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-close-icon-wrapper]': 'true'
                        },
                        styles: [".gui-close-icon-wrapper .gui-close-icon{cursor:pointer;height:16px;position:absolute;right:8px;top:8px;width:16px}.gui-close-icon-wrapper .gui-close-icon::after,.gui-close-icon-wrapper .gui-close-icon::before{background-color:#aaa;content:' ';height:16px;left:7px;position:absolute;width:2px}.gui-close-icon-wrapper .gui-close-icon::before{-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-close-icon-wrapper .gui-close-icon::after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.gui-close-icon-wrapper .gui-close-icon:hover::after,.gui-close-icon-wrapper .gui-close-icon:hover::before{background-color:#464646}"]
                    }] }
        ];
        return FabricCloseIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricCloseIconModule = /** @class */ (function () {
        function FabricCloseIconModule() {
        }
        FabricCloseIconModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricCloseIconComponent
                        ],
                        exports: [
                            FabricCloseIconComponent
                        ]
                    },] }
        ];
        return FabricCloseIconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDrawerModule = /** @class */ (function () {
        function FabricDrawerModule() {
        }
        FabricDrawerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            FabricCloseIconModule
                        ],
                        declarations: [
                            FabricDrawerComponent
                        ],
                        providers: [
                            FabricDrawerService
                        ],
                        entryComponents: [
                            FabricDrawerComponent
                        ]
                    },] }
        ];
        return FabricDrawerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Geometry = /** @class */ (function () {
        function Geometry(container, menu, windowSize) {
            this.container = container;
            this.menu = menu;
            this.windowSize = windowSize;
            this.calculate(this.menu, this.windowSize);
        }
        /**
         * @return {?}
         */
        Geometry.prototype.getContainerHeight = /**
         * @return {?}
         */
        function () {
            return this.containerHeight;
        };
        /**
         * @return {?}
         */
        Geometry.prototype.getContainerWidth = /**
         * @return {?}
         */
        function () {
            return this.containerWidth;
        };
        /**
         * @return {?}
         */
        Geometry.prototype.canOpenDownward = /**
         * @return {?}
         */
        function () {
            return this.availableBottomSpace > 0;
        };
        /**
         * @return {?}
         */
        Geometry.prototype.canOpenUpward = /**
         * @return {?}
         */
        function () {
            return this.availableTopSpace > 0;
        };
        /**
         * @private
         * @param {?} menu
         * @param {?} windowSize
         * @return {?}
         */
        Geometry.prototype.calculate = /**
         * @private
         * @param {?} menu
         * @param {?} windowSize
         * @return {?}
         */
        function (menu, windowSize) {
            /** @type {?} */
            var containerEl = this.container.nativeElement;
            /** @type {?} */
            var menuHeight = menu.nativeElement.offsetHeight;
            /** @type {?} */
            var rectBottom = containerEl.getBoundingClientRect().bottom;
            this.containerHeight = containerEl.offsetHeight;
            this.containerWidth = containerEl.offsetWidth;
            this.availableBottomSpace = windowSize - rectBottom - menuHeight;
            this.availableTopSpace = rectBottom - menuHeight - this.containerHeight;
        };
        return Geometry;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        Geometry.prototype.containerHeight;
        /**
         * @type {?}
         * @private
         */
        Geometry.prototype.containerWidth;
        /**
         * @type {?}
         * @private
         */
        Geometry.prototype.availableBottomSpace;
        /**
         * @type {?}
         * @private
         */
        Geometry.prototype.availableTopSpace;
        /**
         * @type {?}
         * @private
         */
        Geometry.prototype.container;
        /**
         * @type {?}
         * @private
         */
        Geometry.prototype.menu;
        /**
         * @type {?}
         * @private
         */
        Geometry.prototype.windowSize;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GeometryService = /** @class */ (function () {
        function GeometryService() {
            this.geometryResults$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        GeometryService.prototype.watchGeometry = /**
         * @return {?}
         */
        function () {
            return this.geometryResults$.asObservable();
        };
        /**
         * @param {?} container
         * @param {?} menu
         * @param {?} windowSize
         * @return {?}
         */
        GeometryService.prototype.changeGeometry = /**
         * @param {?} container
         * @param {?} menu
         * @param {?} windowSize
         * @return {?}
         */
        function (container, menu, windowSize) {
            /** @type {?} */
            var geometry = new Geometry(container, menu, windowSize);
            this.geometryResults$.next(geometry);
        };
        GeometryService.decorators = [
            { type: core.Injectable }
        ];
        return GeometryService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        GeometryService.prototype.geometryResults$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var Placement = {
        Right: 0,
        Left: 1,
    };
    Placement[Placement.Right] = 'Right';
    Placement[Placement.Left] = 'Left';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDropdownComponent = /** @class */ (function (_super) {
        __extends(FabricDropdownComponent, _super);
        function FabricDropdownComponent(platformId, elementRef, renderer, changeDetectorRef, geometryService) {
            var _this = _super.call(this) || this;
            _this.platformId = platformId;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            _this.changeDetectorRef = changeDetectorRef;
            _this.geometryService = geometryService;
            _this.disabled = false;
            _this.dropdownText = 'Dropdown';
            _this.arrow = true;
            _this.width = 120;
            _this.showOnHover = false;
            _this.isArrowEnabled = _this.arrow;
            _this.arrowDirection = Direction.BOTTOM;
            _this.open = false;
            _this.topBorderWidth = 1;
            _this.onResize();
            return _this;
        }
        /**
         * @return {?}
         */
        FabricDropdownComponent.prototype.onResize = /**
         * @return {?}
         */
        function () {
            if (common.isPlatformBrowser(this.platformId)) {
                this.windowSize = window.innerHeight;
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        FabricDropdownComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.placement) {
                this.changePlacement();
            }
            if (changes.arrow) {
                this.isArrowEnabled = this.arrow;
            }
        };
        /**
         * @return {?}
         */
        FabricDropdownComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.geometryService
                .watchGeometry()
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} geometry
             * @return {?}
             */
            function (geometry) {
                _this.containerHeight = geometry.getContainerHeight();
                _this.containerWidth = geometry.getContainerWidth();
                _this.canOpenUpward = geometry.canOpenUpward();
                _this.canOpenDownward = geometry.canOpenDownward();
            }));
        };
        /**
         * @param {?} event
         * @return {?}
         */
        FabricDropdownComponent.prototype.tryToOpen = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.isContainerDisabled(event)) {
                event.stopPropagation();
            }
            else {
                this.openMenu(!this.open);
                this.changeDetectorRef.detectChanges();
            }
        };
        /**
         * @return {?}
         */
        FabricDropdownComponent.prototype.tryToOpenOnHover = /**
         * @return {?}
         */
        function () {
            if (this.showOnHover) {
                this.openMenu(!this.open);
                this.changeDetectorRef.detectChanges();
            }
        };
        /**
         * @return {?}
         */
        FabricDropdownComponent.prototype.hideOnHover = /**
         * @return {?}
         */
        function () {
            if (this.showOnHover) {
                this.hideItems();
                this.open = false;
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        FabricDropdownComponent.prototype.clickOutside = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.isContainerClicked(event)) {
                this.openMenu(false);
            }
        };
        /**
         * @return {?}
         */
        FabricDropdownComponent.prototype.isDirectionLeft = /**
         * @return {?}
         */
        function () {
            return this.isArrowEnabled && this.arrowDirection === Direction.LEFT;
        };
        /**
         * @private
         * @param {?} opened
         * @return {?}
         */
        FabricDropdownComponent.prototype.openMenu = /**
         * @private
         * @param {?} opened
         * @return {?}
         */
        function (opened) {
            this.open = opened;
            if (this.open) {
                this.showItems();
            }
            else {
                this.hideItems();
            }
        };
        /**
         * @private
         * @return {?}
         */
        FabricDropdownComponent.prototype.showItems = /**
         * @private
         * @return {?}
         */
        function () {
            this.addClass(this.elementRef.nativeElement, 'gui-menu-opened');
            this.geometryService.changeGeometry(this.containerRef, this.dropdownMenuRef, this.windowSize);
            if (this.canOpenDownward || !this.canOpenUpward) {
                this.openDownward();
            }
            else {
                this.openUpward();
            }
            if (this.placement === Placement.Right) {
                this.openRight();
            }
            if (this.placement === Placement.Left) {
                this.openLeft();
            }
        };
        /**
         * @private
         * @return {?}
         */
        FabricDropdownComponent.prototype.openDownward = /**
         * @private
         * @return {?}
         */
        function () {
            this.topPosition = null;
            this.bottomPosition = this.containerHeight;
        };
        /**
         * @private
         * @return {?}
         */
        FabricDropdownComponent.prototype.openUpward = /**
         * @private
         * @return {?}
         */
        function () {
            this.bottomPosition = null;
            this.topPosition = this.containerHeight;
        };
        /**
         * @private
         * @return {?}
         */
        FabricDropdownComponent.prototype.openRight = /**
         * @private
         * @return {?}
         */
        function () {
            this.bottomPosition = -this.topBorderWidth;
            this.topPosition = null;
            this.horizontalPosition = this.containerWidth;
        };
        /**
         * @private
         * @return {?}
         */
        FabricDropdownComponent.prototype.openLeft = /**
         * @private
         * @return {?}
         */
        function () {
            this.bottomPosition = -this.topBorderWidth;
            this.topPosition = null;
            this.horizontalPosition = -(this.containerWidth + 1);
        };
        /**
         * @private
         * @return {?}
         */
        FabricDropdownComponent.prototype.changePlacement = /**
         * @private
         * @return {?}
         */
        function () {
            switch (this.placement) {
                case Placement.Right: {
                    this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
                    this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
                    this.arrowDirection = Direction.RIGHT;
                    break;
                }
                case Placement.Left: {
                    this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
                    this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
                    this.arrowDirection = Direction.LEFT;
                    break;
                }
                default:
                    break;
            }
        };
        /**
         * @private
         * @return {?}
         */
        FabricDropdownComponent.prototype.hideItems = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var itemsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-menu-opened');
            if (itemsElHasOpenClass) {
                this.removeClass(this.elementRef.nativeElement, 'gui-menu-opened');
            }
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        FabricDropdownComponent.prototype.isContainerClicked = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return !this.elementRef.nativeElement.contains(event.target);
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        FabricDropdownComponent.prototype.isContainerDisabled = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.target.classList.contains('gui-disabled');
        };
        /**
         * @private
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        FabricDropdownComponent.prototype.addClass = /**
         * @private
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        function (element, name) {
            this.renderer.addClass(element, name);
        };
        /**
         * @private
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        FabricDropdownComponent.prototype.removeClass = /**
         * @private
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        function (element, name) {
            this.renderer.removeClass(element, name);
        };
        FabricDropdownComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-dropdown',
                        template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t (mouseenter)=\"tryToOpenOnHover()\"\n\t (mouseleave)=\"hideOnHover()\"\n\t [class.gui-arrow-left]=\"isDirectionLeft()\"\n\t [class.gui-disabled]=\"disabled\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-dropdown-container\">\n\n\t<div class=\"gui-dropdown-text\">{{dropdownText}}</div>\n\n\t<div *ngIf=\"isArrowEnabled\"\n\t\t[class.gui-dropdown-arrow]=\"isArrowEnabled\">\n\t\t<gui-arrow-icon [direction]=\"arrowDirection\"></gui-arrow-icon>\n\t</div>\n\n\t<div #dropdownMenu\n\t\t [style.bottom.px]=\"topPosition\"\n\t\t [style.left.px]=\"horizontalPosition\"\n\t\t [style.top.px]=\"bottomPosition\"\n\t\t class=\"gui-dropdown-menu\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-dropdown]': 'true'
                        },
                        providers: [
                            GeometryService
                        ],
                        styles: [".gui-dropdown .gui-dropdown-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-radius:4px;box-sizing:border-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 12px;position:relative;width:auto;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container:hover .gui-arrow-icon svg path{stroke:#464646}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{cursor:pointer;position:absolute;right:12px;top:8px}.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{background:inherit;border-radius:4px;box-sizing:border-box;display:none;left:-1px;overflow:hidden;position:absolute;width:inherit;z-index:2;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{list-style-type:none;padding:8px 12px;width:inherit}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#ccc}.gui-dropdown .gui-dropdown-container.gui-arrow-left{padding:8px 12px 8px 32px}.gui-dropdown .gui-dropdown-container.gui-arrow-left .gui-dropdown-arrow{left:12px;right:initial}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow svg path{stroke:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#616161}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}"]
                    }] }
        ];
        /** @nocollapse */
        FabricDropdownComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: GeometryService }
        ]; };
        FabricDropdownComponent.propDecorators = {
            dropdownMenuRef: [{ type: core.ViewChild, args: ['dropdownMenu', { static: true },] }],
            containerRef: [{ type: core.ViewChild, args: ['container', { static: true },] }],
            onResize: [{ type: core.HostListener, args: ['window:resize',] }],
            disabled: [{ type: core.Input }],
            dropdownText: [{ type: core.Input }],
            arrow: [{ type: core.Input }],
            placement: [{ type: core.Input }],
            width: [{ type: core.Input }],
            showOnHover: [{ type: core.Input }]
        };
        return FabricDropdownComponent;
    }(FabricReactive));
    if (false) {
        /** @type {?} */
        FabricDropdownComponent.prototype.dropdownMenuRef;
        /** @type {?} */
        FabricDropdownComponent.prototype.containerRef;
        /** @type {?} */
        FabricDropdownComponent.prototype.disabled;
        /** @type {?} */
        FabricDropdownComponent.prototype.dropdownText;
        /** @type {?} */
        FabricDropdownComponent.prototype.arrow;
        /** @type {?} */
        FabricDropdownComponent.prototype.placement;
        /** @type {?} */
        FabricDropdownComponent.prototype.width;
        /** @type {?} */
        FabricDropdownComponent.prototype.showOnHover;
        /** @type {?} */
        FabricDropdownComponent.prototype.isArrowEnabled;
        /** @type {?} */
        FabricDropdownComponent.prototype.containerWidth;
        /** @type {?} */
        FabricDropdownComponent.prototype.containerHeight;
        /** @type {?} */
        FabricDropdownComponent.prototype.windowSize;
        /** @type {?} */
        FabricDropdownComponent.prototype.horizontalPosition;
        /** @type {?} */
        FabricDropdownComponent.prototype.bottomPosition;
        /** @type {?} */
        FabricDropdownComponent.prototype.topPosition;
        /** @type {?} */
        FabricDropdownComponent.prototype.arrowDirection;
        /**
         * @type {?}
         * @private
         */
        FabricDropdownComponent.prototype.canOpenDownward;
        /**
         * @type {?}
         * @private
         */
        FabricDropdownComponent.prototype.canOpenUpward;
        /**
         * @type {?}
         * @private
         */
        FabricDropdownComponent.prototype.open;
        /**
         * @type {?}
         * @private
         */
        FabricDropdownComponent.prototype.topBorderWidth;
        /**
         * @type {?}
         * @private
         */
        FabricDropdownComponent.prototype.platformId;
        /**
         * @type {?}
         * @private
         */
        FabricDropdownComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        FabricDropdownComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        FabricDropdownComponent.prototype.changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        FabricDropdownComponent.prototype.geometryService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownItemComponent = /** @class */ (function () {
        function DropdownItemComponent() {
        }
        DropdownItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-dropdown-item',
                        template: "<div class=\"gui-item\">\n\t<ng-content></ng-content>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return DropdownItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDropdownModule = /** @class */ (function () {
        function FabricDropdownModule() {
        }
        FabricDropdownModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            FabricArrowIconModule
                        ],
                        declarations: [
                            FabricDropdownComponent,
                            DropdownItemComponent
                        ],
                        exports: [
                            FabricDropdownComponent,
                            DropdownItemComponent
                        ]
                    },] }
        ];
        return FabricDropdownModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDialogService = /** @class */ (function () {
        function FabricDialogService(componentFactoryResolver, applicationRef, injector, document) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.applicationRef = applicationRef;
            this.injector = injector;
            this.document = document;
            this.dialogRef = null;
            this.unsub$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        FabricDialogService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.removeDialog();
        };
        /**
         * @param {?} component
         * @param {?=} config
         * @return {?}
         */
        FabricDialogService.prototype.open = /**
         * @param {?} component
         * @param {?=} config
         * @return {?}
         */
        function (component, config) {
            if (!this.dialogRef) {
                /** @type {?} */
                var theme = Theme.FABRIC;
                /** @type {?} */
                var parentInjector = this.injector;
                if (config && config.theme) {
                    theme = config.theme;
                }
                if (config && config.injector) {
                    parentInjector = config.injector;
                }
                /** @type {?} */
                var injector = core.Injector.create({
                    providers: [{
                            provide: themeToken,
                            useValue: theme
                        }],
                    parent: parentInjector
                });
                this.createAndAppend(component, injector);
                this.closeOnEscKey();
            }
        };
        /**
         * @return {?}
         */
        FabricDialogService.prototype.close = /**
         * @return {?}
         */
        function () {
            this.removeDialog();
            this.unsub$.next();
            this.unsub$.complete();
        };
        /**
         * @private
         * @return {?}
         */
        FabricDialogService.prototype.closeOnEscKey = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var close$ = rxjs.fromEvent(this.document, 'keyup');
            close$
                .pipe(operators.filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return key.code === 'Escape'; })), operators.takeUntil(this.unsub$))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.close(); }));
        };
        /**
         * @private
         * @param {?} component
         * @param {?} injector
         * @return {?}
         */
        FabricDialogService.prototype.createAndAppend = /**
         * @private
         * @param {?} component
         * @param {?} injector
         * @return {?}
         */
        function (component, injector) {
            /** @type {?} */
            var componentRef = this.componentFactoryResolver
                .resolveComponentFactory(FabricDialogComponent)
                .create(injector);
            componentRef.instance.dialogNestedComponent = component;
            componentRef.changeDetectorRef.detectChanges();
            this.applicationRef.attachView(componentRef.hostView);
            /** @type {?} */
            var domDialogElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
                .rootNodes[0]));
            this.document.body.appendChild(domDialogElement);
            this.dialogRef = componentRef;
        };
        /**
         * @private
         * @return {?}
         */
        FabricDialogService.prototype.removeDialog = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.dialogRef) {
                this.applicationRef.detachView(this.dialogRef.hostView);
                this.dialogRef.destroy();
                this.dialogRef = null;
            }
        };
        FabricDialogService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FabricDialogService.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.ApplicationRef },
            { type: core.Injector },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        return FabricDialogService;
    }());
    if (false) {
        /** @type {?} */
        FabricDialogService.prototype.dialogRef;
        /**
         * @type {?}
         * @private
         */
        FabricDialogService.prototype.unsub$;
        /**
         * @type {?}
         * @private
         */
        FabricDialogService.prototype.componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        FabricDialogService.prototype.applicationRef;
        /**
         * @type {?}
         * @private
         */
        FabricDialogService.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        FabricDialogService.prototype.document;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDialogComponent = /** @class */ (function (_super) {
        __extends(FabricDialogComponent, _super);
        function FabricDialogComponent(componentFactoryResolver, changeDetectorRef, elRef, themeModalService, renderer, dialogService) {
            var _this = _super.call(this, elRef, renderer, themeModalService) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.changeDetectorRef = changeDetectorRef;
            _this.elRef = elRef;
            _this.dialogService = dialogService;
            return _this;
        }
        /**
         * @return {?}
         */
        FabricDialogComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngAfterViewInit.call(this);
            this.createNestedComponent(this.dialogNestedComponent);
        };
        /**
         * @return {?}
         */
        FabricDialogComponent.prototype.closeDialog = /**
         * @return {?}
         */
        function () {
            this.dialogService.close();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        FabricDialogComponent.prototype.clickOutside = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.isContainerClicked(event)) {
                this.dialogService.close();
            }
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        FabricDialogComponent.prototype.isContainerClicked = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var dialogContentRef = this.elRef.nativeElement.querySelector('.gui-dialog-content');
            if (dialogContentRef) {
                return !dialogContentRef.contains(event.target);
            }
        };
        /**
         * @private
         * @param {?} component
         * @return {?}
         */
        FabricDialogComponent.prototype.createNestedComponent = /**
         * @private
         * @param {?} component
         * @return {?}
         */
        function (component) {
            /** @type {?} */
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.container.createComponent(componentFactory);
            this.changeDetectorRef.detectChanges();
        };
        FabricDialogComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-fabric-dialog',
                        template: "<div class=\"gui-dialog-blanket\"></div>\n<div (click)=\"clickOutside($event)\"\n\t class=\"gui-dialog-wrapper\">\n\t<div class=\"gui-dialog-content\">\n\t\t<ng-template #container></ng-template>\n\t\t<gui-close-icon (click)=\"closeDialog()\"></gui-close-icon>\n\t</div>\n</div>\n",
                        host: {
                            '[class.gui-fabric-dialog]': 'true'
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}@use 'common/variables';.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:-ms-grid;display:grid}@use 'common/variables';.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}@use 'common/variables';.gui-grid-cols-1{-ms-grid-columns:(minmax(0,1fr))[1];grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{-ms-grid-columns:(minmax(0,1fr))[2];grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{-ms-grid-columns:(minmax(0,1fr))[3];grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{-ms-grid-columns:(minmax(0,1fr))[4];grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{-ms-grid-columns:(minmax(0,1fr))[5];grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{-ms-grid-columns:(minmax(0,1fr))[6];grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{-ms-grid-columns:(minmax(0,1fr))[7];grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{-ms-grid-columns:(minmax(0,1fr))[8];grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{-ms-grid-columns:(minmax(0,1fr))[9];grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{-ms-grid-rows:(minmax(0,1fr))[1];grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{-ms-grid-rows:(minmax(0,1fr))[2];grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{-ms-grid-rows:(minmax(0,1fr))[3];grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{-ms-grid-rows:(minmax(0,1fr))[4];grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{-ms-grid-rows:(minmax(0,1fr))[5];grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{-ms-grid-rows:(minmax(0,1fr))[6];grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{-ms-grid-rows:(minmax(0,1fr))[7];grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{-ms-grid-rows:(minmax(0,1fr))[8];grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{-ms-grid-rows:(minmax(0,1fr))[9];grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}@use 'common/variables';.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}@use 'common/variables';.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-fabric-dialog *,.gui-fabric-dialog ::after,.gui-fabric-dialog ::before{box-sizing:border-box}.gui-fabric-dialog input{font-size:13px;outline:0}.gui-dialog-blanket{background:rgba(0,0,0,.32);height:100%;left:0;pointer-events:none;position:fixed;top:0;width:100%;z-index:1000}.gui-dialog-wrapper{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;font-family:Arial;height:100%;-ms-flex-pack:center;justify-content:center;left:0;pointer-events:auto;position:fixed;top:0;width:100%;z-index:1000}.gui-dialog-wrapper .gui-dialog-content{-webkit-animation:.1s ease-in display-dialog;animation:.1s ease-in display-dialog;background-color:#fff;border-radius:4px;box-shadow:0 3px 7px #999;max-width:400px;padding:24px;position:relative}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-title{color:#333;font-size:20px;margin:0 0 16px}@-webkit-keyframes display-dialog{from{transform:scale(0)}to{transform:scale(1)}}@keyframes display-dialog{from{transform:scale(0)}to{transform:scale(1)}}", ".gui-dark .gui-dialog-wrapper .gui-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close::after,.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close::before{background:#bdbdbd}"]
                    }] }
        ];
        /** @nocollapse */
        FabricDialogComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: FabricModalThemeService },
            { type: core.Renderer2 },
            { type: FabricDialogService, decorators: [{ type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return FabricDialogService; })),] }] }
        ]; };
        FabricDialogComponent.propDecorators = {
            container: [{ type: core.ViewChild, args: ['container', { read: core.ViewContainerRef, static: false },] }]
        };
        return FabricDialogComponent;
    }(FabricThemedComponent));
    if (false) {
        /** @type {?} */
        FabricDialogComponent.prototype.container;
        /** @type {?} */
        FabricDialogComponent.prototype.dialogNestedComponent;
        /**
         * @type {?}
         * @private
         */
        FabricDialogComponent.prototype.componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        FabricDialogComponent.prototype.changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        FabricDialogComponent.prototype.elRef;
        /**
         * @type {?}
         * @private
         */
        FabricDialogComponent.prototype.dialogService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDialogThemeService = /** @class */ (function () {
        function FabricDialogThemeService() {
            this.theme$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        FabricDialogThemeService.prototype.onTheme = /**
         * @return {?}
         */
        function () {
            return this.theme$.asObservable();
        };
        /**
         * @param {?} theme
         * @return {?}
         */
        FabricDialogThemeService.prototype.nextTheme = /**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            this.theme$.next(this.toTheme(theme));
        };
        /**
         * @private
         * @param {?} theme
         * @return {?}
         */
        FabricDialogThemeService.prototype.toTheme = /**
         * @private
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            switch (theme.toLowerCase()) {
                case 'fabric':
                    return Theme.FABRIC;
                case 'material':
                    return Theme.MATERIAL;
                case 'generic':
                    return Theme.GENERIC;
                case 'light':
                    return Theme.LIGHT;
                case 'dark':
                    return Theme.DARK;
                default:
                    return Theme.FABRIC;
            }
        };
        FabricDialogThemeService.decorators = [
            { type: core.Injectable }
        ];
        return FabricDialogThemeService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricDialogThemeService.prototype.theme$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricDialogModule = /** @class */ (function () {
        function FabricDialogModule() {
        }
        FabricDialogModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            FabricCloseIconModule
                        ],
                        declarations: [
                            FabricDialogComponent
                        ],
                        providers: [
                            FabricDialogService,
                            FabricDialogThemeService
                        ],
                        entryComponents: [
                            FabricDialogComponent
                        ]
                    },] }
        ];
        return FabricDialogModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricProgressBarComponent = /** @class */ (function () {
        function FabricProgressBarComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FabricProgressBarComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.primary) {
                if (this.primary) {
                    this.addClass('gui-primary');
                }
                else {
                    this.removeClass('gui-primary');
                }
            }
            if (changes.secondary) {
                if (this.secondary) {
                    this.addClass('gui-secondary');
                }
                else {
                    this.removeClass('gui-secondary');
                }
            }
        };
        /**
         * @private
         * @param {?} className
         * @return {?}
         */
        FabricProgressBarComponent.prototype.addClass = /**
         * @private
         * @param {?} className
         * @return {?}
         */
        function (className) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        };
        /**
         * @private
         * @param {?} className
         * @return {?}
         */
        FabricProgressBarComponent.prototype.removeClass = /**
         * @private
         * @param {?} className
         * @return {?}
         */
        function (className) {
            this.renderer.removeClass(this.elementRef.nativeElement, className);
        };
        FabricProgressBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-progress-bar',
                        template: "<div\n\t[style.height.px]=\"height\"\n\t[style.text-align]=\"textAlign\"\n\t[style.width.px]=\"width\"\n\tclass=\"gui-progress-bar\">\n\t<div\n\t\t[style.background]=\"color\"\n\t\t[style.width.%]=\"progress\"\n\t\tclass=\"gui-progress\">\n\t\t<span\n\t\t\t[style.top]=\"textTop\"\n\t\t\tclass=\"gui-progress-text\">\n\t\t\t<ng-content></ng-content>\n\t\t</span>\n\t</div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-progress]': 'true'
                        },
                        styles: [".gui-progress-bar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;font-family:Arial;height:18px;margin-bottom:10px;text-align:center;border:1px solid #d6d6d6}.gui-progress-bar .gui-progress{background:#999;border-bottom:inherit;height:inherit;width:0}.gui-primary .gui-progress-bar .gui-progress.gui-progress{background:#2185d0}.gui-secondary .gui-progress-bar .gui-progress.gui-progress{background:#3cb371}.gui-progress-bar .gui-progress-text{position:relative}", ".gui-material .gui-progress-bar{border-color:#5262c5;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-progress{background:#3949ab}.gui-material .gui-progress.gui-primary .gui-progress{background:#6200ee}.gui-material .gui-progress.gui-primary .gui-progress-bar{border-color:#6200ee}.gui-material .gui-progress.gui-secondary .gui-progress{background:#0097a7}.gui-material .gui-progress.gui-secondary .gui-progress-bar{border-color:#0097a7}", ".gui-dark .gui-progress-bar{border-color:#616161;color:#bdbdbd}.gui-dark .gui-progress{background:#424242}.gui-dark .gui-progress.gui-primary .gui-progress{background:#ce93d8}.gui-dark .gui-progress.gui-primary .gui-progress-bar{border-color:#ce93d8;color:#212121}.gui-dark .gui-progress.gui-secondary .gui-progress{background:#80cbc4}.gui-dark .gui-progress.gui-secondary .gui-progress-bar{border-color:#80cbc4;color:#212121}"]
                    }] }
        ];
        /** @nocollapse */
        FabricProgressBarComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        FabricProgressBarComponent.propDecorators = {
            progress: [{ type: core.Input }],
            color: [{ type: core.Input }],
            height: [{ type: core.Input }],
            width: [{ type: core.Input }],
            textTop: [{ type: core.Input }],
            textAlign: [{ type: core.Input }],
            primary: [{ type: core.Input }],
            secondary: [{ type: core.Input }]
        };
        return FabricProgressBarComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricProgressBarComponent.prototype.progress;
        /** @type {?} */
        FabricProgressBarComponent.prototype.color;
        /** @type {?} */
        FabricProgressBarComponent.prototype.height;
        /** @type {?} */
        FabricProgressBarComponent.prototype.width;
        /** @type {?} */
        FabricProgressBarComponent.prototype.textTop;
        /** @type {?} */
        FabricProgressBarComponent.prototype.textAlign;
        /** @type {?} */
        FabricProgressBarComponent.prototype.primary;
        /** @type {?} */
        FabricProgressBarComponent.prototype.secondary;
        /**
         * @type {?}
         * @private
         */
        FabricProgressBarComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        FabricProgressBarComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricProgressBarModule = /** @class */ (function () {
        function FabricProgressBarModule() {
        }
        FabricProgressBarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricProgressBarComponent
                        ],
                        exports: [
                            FabricProgressBarComponent
                        ]
                    },] }
        ];
        return FabricProgressBarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var AbstractSpinner = /** @class */ (function () {
        function AbstractSpinner(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.width = 5;
            this.diameter = 90;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        AbstractSpinner.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.calculateCircle();
            if (changes.primary) {
                if (this.primary) {
                    this.addClass('gui-primary');
                }
                else {
                    this.removeClass('gui-primary');
                }
            }
            if (changes.secondary) {
                if (this.secondary) {
                    this.addClass('gui-secondary');
                }
                else {
                    this.removeClass('gui-secondary');
                }
            }
        };
        /**
         * @return {?}
         */
        AbstractSpinner.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.calculateCircle();
        };
        /**
         * @private
         * @return {?}
         */
        AbstractSpinner.prototype.calculateCircle = /**
         * @private
         * @return {?}
         */
        function () {
            this.circumference = this.calculateCircumference(this.diameter);
            this.r = this.calculateR(this.diameter);
            this.croppedCircle = this.calculateDashes(this.circumference);
            this.circleSize = this.calculateSize(this.diameter, this.width);
        };
        /**
         * @private
         * @param {?} diameter
         * @return {?}
         */
        AbstractSpinner.prototype.calculateCircumference = /**
         * @private
         * @param {?} diameter
         * @return {?}
         */
        function (diameter) {
            return diameter * Math.PI;
        };
        /**
         * @private
         * @param {?} diameter
         * @return {?}
         */
        AbstractSpinner.prototype.calculateR = /**
         * @private
         * @param {?} diameter
         * @return {?}
         */
        function (diameter) {
            return diameter / 2;
        };
        /**
         * @private
         * @param {?} circumference
         * @return {?}
         */
        AbstractSpinner.prototype.calculateDashes = /**
         * @private
         * @param {?} circumference
         * @return {?}
         */
        function (circumference) {
            return circumference * 0.25;
        };
        /**
         * @private
         * @param {?} diameter
         * @param {?} width
         * @return {?}
         */
        AbstractSpinner.prototype.calculateSize = /**
         * @private
         * @param {?} diameter
         * @param {?} width
         * @return {?}
         */
        function (diameter, width) {
            return diameter + width;
        };
        /**
         * @protected
         * @param {?} className
         * @return {?}
         */
        AbstractSpinner.prototype.addClass = /**
         * @protected
         * @param {?} className
         * @return {?}
         */
        function (className) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        };
        /**
         * @protected
         * @param {?} className
         * @return {?}
         */
        AbstractSpinner.prototype.removeClass = /**
         * @protected
         * @param {?} className
         * @return {?}
         */
        function (className) {
            this.renderer.removeClass(this.elementRef.nativeElement, className);
        };
        AbstractSpinner.propDecorators = {
            width: [{ type: core.Input }],
            diameter: [{ type: core.Input }],
            primary: [{ type: core.Input }],
            secondary: [{ type: core.Input }]
        };
        return AbstractSpinner;
    }());
    if (false) {
        /** @type {?} */
        AbstractSpinner.prototype.width;
        /** @type {?} */
        AbstractSpinner.prototype.diameter;
        /** @type {?} */
        AbstractSpinner.prototype.primary;
        /** @type {?} */
        AbstractSpinner.prototype.secondary;
        /** @type {?} */
        AbstractSpinner.prototype.r;
        /** @type {?} */
        AbstractSpinner.prototype.circumference;
        /** @type {?} */
        AbstractSpinner.prototype.croppedCircle;
        /** @type {?} */
        AbstractSpinner.prototype.circleSize;
        /**
         * @type {?}
         * @protected
         */
        AbstractSpinner.prototype.elementRef;
        /**
         * @type {?}
         * @protected
         */
        AbstractSpinner.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var SpinnerMode = {
        Spin: 0,
    };
    SpinnerMode[SpinnerMode.Spin] = 'Spin';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricProgressSpinnerComponent = /** @class */ (function (_super) {
        __extends(FabricProgressSpinnerComponent, _super);
        function FabricProgressSpinnerComponent(elementRef, renderer) {
            var _this = _super.call(this, elementRef, renderer) || this;
            _this.value = 0;
            _this.animationsDisabled = true;
            _this.secondCircleDisabled = true;
            return _this;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FabricProgressSpinnerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.calculateValuePercentage(this.circumference, this.value);
            if (this.mode === SpinnerMode.Spin) {
                this.animationsDisabled = false;
                this.secondCircleDisabled = false;
                this.value = 0;
                this.circumference = this.croppedCircle;
            }
            if (this.animationsDisabled) {
                this.addClass('gui-animations-disabled');
            }
            else {
                this.removeClass('gui-animations-disabled');
            }
            if (this.secondCircleDisabled) {
                this.addClass('gui-second-circle-disabled');
            }
            else {
                this.removeClass('gui-second-circle-disabled');
            }
        };
        /**
         * @return {?}
         */
        FabricProgressSpinnerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.calculateValuePercentage(this.circumference, this.value);
        };
        /**
         * @protected
         * @param {?} circumference
         * @param {?} value
         * @return {?}
         */
        FabricProgressSpinnerComponent.prototype.calculateValuePercentage = /**
         * @protected
         * @param {?} circumference
         * @param {?} value
         * @return {?}
         */
        function (circumference, value) {
            this.valuePercentage = circumference - (value * circumference / 100);
        };
        FabricProgressSpinnerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-progress-spinner',
                        template: "<div\n\t[style.height.px]=\"circleSize\"\n\t[style.width.px]=\"circleSize\"\n\tclass=\"gui-progress-spinner\">\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"circumference\"\n\t\t\t[style.stroke-dashoffset]=\"valuePercentage\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".gui-progress-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-progress-spinner circle{fill:transparent;stroke:#999}.gui-progress-spinner svg{position:absolute}.gui-progress-spinner .circle-inner{animation:2s linear infinite reverse forwards gui-spin-reverse}.gui-progress-spinner .circle-outer{-webkit-animation:2s linear infinite forwards gui-spin;animation:2s linear infinite forwards gui-spin}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner .circle-outer,.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner.gui-progress-spinner{-webkit-animation:none;animation:none}.gui-second-circle-disabled .gui-progress-spinner.gui-progress-spinner .circle-inner{opacity:0}.gui-primary .gui-progress-spinner.gui-progress-spinner circle{stroke:#2185d0}.gui-secondary .gui-progress-spinner.gui-progress-spinner circle{stroke:#3cb371}", ".gui-material .gui-progress-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-progress-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-progress-spinner circle{stroke:#0097a7}", ".gui-dark .gui-progress-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-progress-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-progress-spinner circle{stroke:#80cbc4}"]
                    }] }
        ];
        /** @nocollapse */
        FabricProgressSpinnerComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        FabricProgressSpinnerComponent.propDecorators = {
            value: [{ type: core.Input }],
            mode: [{ type: core.Input }],
            color: [{ type: core.Input }]
        };
        return FabricProgressSpinnerComponent;
    }(AbstractSpinner));
    if (false) {
        /** @type {?} */
        FabricProgressSpinnerComponent.prototype.value;
        /** @type {?} */
        FabricProgressSpinnerComponent.prototype.mode;
        /** @type {?} */
        FabricProgressSpinnerComponent.prototype.color;
        /** @type {?} */
        FabricProgressSpinnerComponent.prototype.animationsDisabled;
        /** @type {?} */
        FabricProgressSpinnerComponent.prototype.secondCircleDisabled;
        /** @type {?} */
        FabricProgressSpinnerComponent.prototype.valuePercentage;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricProgressSpinnerModule = /** @class */ (function () {
        function FabricProgressSpinnerModule() {
        }
        FabricProgressSpinnerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricProgressSpinnerComponent
                        ],
                        exports: [
                            FabricProgressSpinnerComponent
                        ]
                    },] }
        ];
        return FabricProgressSpinnerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricRadioButtonComponent = /** @class */ (function () {
        function FabricRadioButtonComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.checked = false;
            this.changed = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        FabricRadioButtonComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            if (this.disabled) {
                this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
            }
        };
        /**
         * @return {?}
         */
        FabricRadioButtonComponent.prototype.check = /**
         * @return {?}
         */
        function () {
            this.checked = true;
            this.changed.emit(this.checked);
        };
        FabricRadioButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-radio-button',
                        template: "<label>\n\t<input\n\t\t(click)=\"check()\"\n\t\t[checked]=checked\n\t\t[disabled]=disabled\n\t\t[name]=name\n\t\ttype=\"radio\">\n\t<span class=\"gui-radio-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-radio-button]': 'true'
                        },
                        styles: [".gui-radio-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;font:14px/18px Arial;padding-left:32px;position:relative}.gui-radio-button label{cursor:pointer}.gui-radio-button label:hover .gui-radio-checkmark{border-color:#999}.gui-radio-button input{height:0;opacity:0;position:absolute;width:0}.gui-radio-button .gui-radio-checkmark{border-radius:50%;box-sizing:content-box;height:16px;left:0;position:absolute;width:16px;border:1px solid #d6d6d6}.gui-radio-button input:checked+.gui-radio-checkmark{border-color:#999}.gui-radio-button input:focus+.gui-radio-checkmark{border-color:#6fb4e8}.gui-radio-button.gui-disabled.gui-radio-button{color:#ccc;pointer-events:none}.gui-radio-button .gui-radio-checkmark::after{content:'';display:none;position:absolute;background:#333;border-radius:50%;height:16px;-ms-transform:scale(.5);transform:scale(.5);width:16px}.gui-radio-button input:checked+.gui-radio-checkmark::after{box-sizing:content-box;display:block}", ".gui-material .gui-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-radio-button{color:#bdbdbd}.gui-dark .gui-radio-button .gui-radio-checkmark,.gui-dark .gui-radio-button input:checked+.gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:focus+.gui-radio-checkmark{border-color:#ce93d8}.gui-dark .gui-radio-button .gui-radio-checkmark::after{background:#878787}.gui-dark .gui-radio-button.gui-disabled.gui-radio-button{opacity:.36}"]
                    }] }
        ];
        /** @nocollapse */
        FabricRadioButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        FabricRadioButtonComponent.propDecorators = {
            name: [{ type: core.Input }],
            checked: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            changed: [{ type: core.Output }]
        };
        return FabricRadioButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricRadioButtonComponent.prototype.name;
        /** @type {?} */
        FabricRadioButtonComponent.prototype.checked;
        /** @type {?} */
        FabricRadioButtonComponent.prototype.disabled;
        /** @type {?} */
        FabricRadioButtonComponent.prototype.changed;
        /**
         * @type {?}
         * @private
         */
        FabricRadioButtonComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        FabricRadioButtonComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricRadioButtonModule = /** @class */ (function () {
        function FabricRadioButtonModule() {
        }
        FabricRadioButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricRadioButtonComponent
                        ],
                        exports: [
                            FabricRadioButtonComponent
                        ]
                    },] }
        ];
        return FabricRadioButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricRadioGroupComponent = /** @class */ (function () {
        function FabricRadioGroupComponent() {
        }
        FabricRadioGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-radio-group',
                        template: "<ng-content></ng-content>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-radio-group]': 'true'
                        },
                        styles: [".gui-radio-group .gui-radio-button{display:block;margin-bottom:10px}"]
                    }] }
        ];
        return FabricRadioGroupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricRadioGroupModule = /** @class */ (function () {
        function FabricRadioGroupModule() {
        }
        FabricRadioGroupModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricRadioGroupComponent
                        ],
                        exports: [
                            FabricRadioGroupComponent
                        ]
                    },] }
        ];
        return FabricRadioGroupModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricNotification = /** @class */ (function () {
        function FabricNotification(description, index, timer, position) {
            this.description = description;
            this.index = index;
            this.timer = timer;
            this.position = position;
        }
        return FabricNotification;
    }());
    if (false) {
        /** @type {?} */
        FabricNotification.prototype.description;
        /** @type {?} */
        FabricNotification.prototype.index;
        /** @type {?} */
        FabricNotification.prototype.timer;
        /** @type {?} */
        FabricNotification.prototype.position;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var FabricNotificationPosition = {
        TOP_RIGHT: 0,
        TOP_LEFT: 1,
        BOTTOM_RIGHT: 2,
        BOTTOM_LEFT: 3,
    };
    FabricNotificationPosition[FabricNotificationPosition.TOP_RIGHT] = 'TOP_RIGHT';
    FabricNotificationPosition[FabricNotificationPosition.TOP_LEFT] = 'TOP_LEFT';
    FabricNotificationPosition[FabricNotificationPosition.BOTTOM_RIGHT] = 'BOTTOM_RIGHT';
    FabricNotificationPosition[FabricNotificationPosition.BOTTOM_LEFT] = 'BOTTOM_LEFT';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricNotificationComponent = /** @class */ (function () {
        function FabricNotificationComponent(renderer) {
            this.renderer = renderer;
            this.onNotificationClose = new core.EventEmitter();
            this.unsub$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        FabricNotificationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.notification.timer.enabled) {
                rxjs.timer(this.notification.timer.duration)
                    .pipe(operators.takeUntil(this.unsub$))
                    .subscribe((/**
                 * @return {?}
                 */
                function () { return _this.closeNotification(); }));
            }
        };
        /**
         * @return {?}
         */
        FabricNotificationComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.unsub$.next();
            this.unsub$.complete();
        };
        /**
         * @return {?}
         */
        FabricNotificationComponent.prototype.closeNotification = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.addCloseAnimation();
            rxjs.timer(200)
                .pipe(operators.takeUntil(this.unsub$))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.onNotificationClose.emit(_this.notification); }));
        };
        /**
         * @return {?}
         */
        FabricNotificationComponent.prototype.addCloseAnimation = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var notificationEl = this.notificationRef.nativeElement;
            this.renderer.addClass(notificationEl, 'gui-notification-active');
        };
        /**
         * @return {?}
         */
        FabricNotificationComponent.prototype.isRightSide = /**
         * @return {?}
         */
        function () {
            return this.notification.position === FabricNotificationPosition.TOP_RIGHT
                || this.notification.position === FabricNotificationPosition.BOTTOM_RIGHT;
        };
        FabricNotificationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-notification',
                        template: "\n\t\t<div #guiNotification\n\t\t\t [class.gui-notification-right-side]=\"isRightSide()\"\n\t\t\t [class.gui-notification-left-side]=\"!isRightSide()\"\n\t\t\t class=\"gui-notification\">\n\t\t\t<gui-close-icon (click)=\"closeNotification()\"></gui-close-icon>\n\t\t\t{{notification.description}}\n\t\t</div>\n\t",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        FabricNotificationComponent.ctorParameters = function () { return [
            { type: core.Renderer2 }
        ]; };
        FabricNotificationComponent.propDecorators = {
            notificationRef: [{ type: core.ViewChild, args: ['guiNotification', { static: false },] }],
            notification: [{ type: core.Input }],
            onNotificationClose: [{ type: core.Output }]
        };
        return FabricNotificationComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricNotificationComponent.prototype.notificationRef;
        /** @type {?} */
        FabricNotificationComponent.prototype.notification;
        /** @type {?} */
        FabricNotificationComponent.prototype.onNotificationClose;
        /**
         * @type {?}
         * @private
         */
        FabricNotificationComponent.prototype.unsub$;
        /**
         * @type {?}
         * @private
         */
        FabricNotificationComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var FabricModal = /** @class */ (function (_super) {
        __extends(FabricModal, _super);
        function FabricModal(componentFactoryResolver, applicationRef, injector, document) {
            var _this = _super.call(this) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.applicationRef = applicationRef;
            _this.injector = injector;
            _this.document = document;
            _this.componentRef = null;
            return _this;
        }
        /**
         * @return {?}
         */
        FabricModal.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.removeComponent();
        };
        /**
         * @param {?=} injector
         * @return {?}
         */
        FabricModal.prototype.createAndAppend = /**
         * @param {?=} injector
         * @return {?}
         */
        function (injector) {
            /** @type {?} */
            var componentInjector = injector ? injector : this.injector;
            /** @type {?} */
            var componentRef = this.componentFactoryResolver
                .resolveComponentFactory(this.getComponent())
                .create(componentInjector);
            componentRef.changeDetectorRef.detectChanges();
            this.applicationRef.attachView(componentRef.hostView);
            /** @type {?} */
            var domModalElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
                .rootNodes[0]));
            this.document.body.appendChild(domModalElement);
            this.componentRef = componentRef;
        };
        /**
         * @return {?}
         */
        FabricModal.prototype.removeComponent = /**
         * @return {?}
         */
        function () {
            if (this.componentRef) {
                this.applicationRef.detachView(this.componentRef.hostView);
                this.componentRef.destroy();
                this.componentRef = null;
            }
        };
        /**
         * @return {?}
         */
        FabricModal.prototype.getComponentRef = /**
         * @return {?}
         */
        function () {
            return this.componentRef;
        };
        /**
         * @return {?}
         */
        FabricModal.prototype.getInjector = /**
         * @return {?}
         */
        function () {
            return this.injector;
        };
        /**
         * @return {?}
         */
        FabricModal.prototype.getDocument = /**
         * @return {?}
         */
        function () {
            return this.document;
        };
        /** @nocollapse */
        FabricModal.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.ApplicationRef },
            { type: core.Injector },
            { type: Document, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        return FabricModal;
    }(FabricReactive));
    if (false) {
        /** @type {?} */
        FabricModal.prototype.componentRef;
        /**
         * @type {?}
         * @private
         */
        FabricModal.prototype.componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        FabricModal.prototype.applicationRef;
        /**
         * @type {?}
         * @private
         */
        FabricModal.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        FabricModal.prototype.document;
        /**
         * @abstract
         * @return {?}
         */
        FabricModal.prototype.getComponent = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricNotificationService = /** @class */ (function (_super) {
        __extends(FabricNotificationService, _super);
        function FabricNotificationService(componentFactoryResolver, applicationRef, injector, document) {
            var _this = _super.call(this, componentFactoryResolver, applicationRef, injector, document) || this;
            _this.notificationIndex = 0;
            _this.unsub$ = new rxjs.Subject();
            return _this;
        }
        /**
         * @return {?}
         */
        FabricNotificationService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.removeNotificationContainer();
        };
        /**
         * @return {?}
         */
        FabricNotificationService.prototype.getComponent = /**
         * @return {?}
         */
        function () {
            return FabricNotificationsOverlayComponent;
        };
        /**
         * @param {?} notification
         * @param {?=} config
         * @return {?}
         */
        FabricNotificationService.prototype.open = /**
         * @param {?} notification
         * @param {?=} config
         * @return {?}
         */
        function (notification, config) {
            /** @type {?} */
            var position = FabricNotificationPosition.TOP_RIGHT;
            if (config && config.position) {
                position = config.position;
            }
            this.createFabricNotification(notification, config, position);
            if (!this.getComponentRef()) {
                /** @type {?} */
                var theme = Theme.FABRIC;
                /** @type {?} */
                var parentInjector = this.getInjector();
                if (config && config.theme) {
                    theme = config.theme;
                }
                if (config && config.injector) {
                    parentInjector = config.injector;
                }
                /** @type {?} */
                var injector = core.Injector.create({
                    providers: [{
                            provide: themeToken,
                            useValue: theme
                        }],
                    parent: parentInjector
                });
                this.createAndAppend(injector);
                this.pushNotification(position);
            }
            else {
                this.pushNotification(position);
            }
        };
        /**
         * @return {?}
         */
        FabricNotificationService.prototype.close = /**
         * @return {?}
         */
        function () {
            this.removeNotificationContainer();
            this.unsub$.next();
            this.unsub$.complete();
        };
        /**
         * @private
         * @return {?}
         */
        FabricNotificationService.prototype.removeNotificationContainer = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.getComponentRef()) {
                this.removeComponent();
                this.notificationIndex = 0;
                this.fabricNotification = null;
            }
        };
        /**
         * @private
         * @param {?} description
         * @param {?} config
         * @param {?} position
         * @return {?}
         */
        FabricNotificationService.prototype.createFabricNotification = /**
         * @private
         * @param {?} description
         * @param {?} config
         * @param {?} position
         * @return {?}
         */
        function (description, config, position) {
            /** @type {?} */
            var duration = FabricNotificationService.DEFAULT_DURATION;
            /** @type {?} */
            var enabled = true;
            if (config && config.timer) {
                duration = config.timer.duration;
                if (config.timer.extendTimer) {
                    duration = config.timer.duration * (this.notificationIndex + 1);
                }
                if (config.timer.enabled !== undefined) {
                    enabled = config.timer.enabled;
                }
            }
            this.fabricNotification = new FabricNotification(description, this.notificationIndex, { duration: duration, enabled: enabled }, position);
            this.notificationIndex += 1;
        };
        /**
         * @private
         * @param {?} position
         * @return {?}
         */
        FabricNotificationService.prototype.pushNotification = /**
         * @private
         * @param {?} position
         * @return {?}
         */
        function (position) {
            switch (position) {
                case FabricNotificationPosition.TOP_RIGHT:
                    this.getComponentRef().instance.notificationsTopRight =
                        this.getComponentRef().instance.notificationsTopRight.concat(this.fabricNotification);
                    break;
                case FabricNotificationPosition.TOP_LEFT:
                    this.getComponentRef().instance.notificationsTopLeft =
                        this.getComponentRef().instance.notificationsTopLeft.concat(this.fabricNotification);
                    break;
                case FabricNotificationPosition.BOTTOM_RIGHT:
                    this.getComponentRef().instance.notificationsBottomRight =
                        this.getComponentRef().instance.notificationsBottomRight.concat(this.fabricNotification);
                    break;
                case FabricNotificationPosition.BOTTOM_LEFT:
                    this.getComponentRef().instance.notificationsBottomLeft =
                        this.getComponentRef().instance.notificationsBottomLeft.concat(this.fabricNotification);
                    break;
                default:
                    break;
            }
            this.getComponentRef().instance.detectChanges();
        };
        FabricNotificationService.DEFAULT_DURATION = 4000;
        FabricNotificationService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FabricNotificationService.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.ApplicationRef },
            { type: core.Injector },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        return FabricNotificationService;
    }(FabricModal));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricNotificationService.DEFAULT_DURATION;
        /** @type {?} */
        FabricNotificationService.prototype.fabricNotification;
        /** @type {?} */
        FabricNotificationService.prototype.notificationIndex;
        /**
         * @type {?}
         * @private
         */
        FabricNotificationService.prototype.unsub$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricNotificationsOverlayComponent = /** @class */ (function (_super) {
        __extends(FabricNotificationsOverlayComponent, _super);
        function FabricNotificationsOverlayComponent(changeDetectorRef, componentFactoryResolver, elRef, renderer, themeService, theme, notificationsService) {
            var _this = _super.call(this, elRef, renderer, themeService) || this;
            _this.changeDetectorRef = changeDetectorRef;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.elRef = elRef;
            _this.notificationsService = notificationsService;
            _this.notificationsTopRight = [];
            _this.notificationsTopLeft = [];
            _this.notificationsBottomRight = [];
            _this.notificationsBottomLeft = [];
            _this.FabricNotificationPosition = FabricNotificationPosition;
            return _this;
        }
        /**
         * @param {?} selectedNotification
         * @return {?}
         */
        FabricNotificationsOverlayComponent.prototype.removeNotification = /**
         * @param {?} selectedNotification
         * @return {?}
         */
        function (selectedNotification) {
            switch (selectedNotification.position) {
                case FabricNotificationPosition.TOP_RIGHT:
                    this.notificationsTopRight = this.notificationsTopRight
                        .filter((/**
                     * @param {?} notification
                     * @return {?}
                     */
                    function (notification) { return notification.index !== selectedNotification.index; }));
                    break;
                case FabricNotificationPosition.TOP_LEFT:
                    this.notificationsTopLeft = this.notificationsTopLeft
                        .filter((/**
                     * @param {?} notification
                     * @return {?}
                     */
                    function (notification) { return notification.index !== selectedNotification.index; }));
                    break;
                case FabricNotificationPosition.BOTTOM_RIGHT:
                    this.notificationsBottomRight = this.notificationsBottomRight
                        .filter((/**
                     * @param {?} notification
                     * @return {?}
                     */
                    function (notification) { return notification.index !== selectedNotification.index; }));
                    break;
                case FabricNotificationPosition.BOTTOM_LEFT:
                    this.notificationsBottomLeft = this.notificationsBottomLeft
                        .filter((/**
                     * @param {?} notification
                     * @return {?}
                     */
                    function (notification) { return notification.index !== selectedNotification.index; }));
                    break;
                default:
                    break;
            }
            this.detectChanges();
            this.checkNotificationsLength();
        };
        /**
         * @return {?}
         */
        FabricNotificationsOverlayComponent.prototype.detectChanges = /**
         * @return {?}
         */
        function () {
            this.changeDetectorRef.detectChanges();
        };
        /**
         * @return {?}
         */
        FabricNotificationsOverlayComponent.prototype.checkNotificationsLength = /**
         * @return {?}
         */
        function () {
            if (this.notificationsTopRight.length === 0
                && this.notificationsTopLeft.length === 0
                && this.notificationsBottomRight.length === 0
                && this.notificationsBottomLeft.length === 0) {
                this.notificationsService.close();
            }
        };
        /**
         * @param {?} container
         * @return {?}
         */
        FabricNotificationsOverlayComponent.prototype.isContainerNotEmpty = /**
         * @param {?} container
         * @return {?}
         */
        function (container) {
            return container && container.length > 0;
        };
        FabricNotificationsOverlayComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<gui-notifications-container (onNotificationClose)=\"removeNotification($event)\"\n\t\t\t\t\t\t\t *ngIf=\"isContainerNotEmpty(notificationsTopRight)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsTopRight\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.TOP_RIGHT\"></gui-notifications-container>\n\n<gui-notifications-container (onNotificationClose)=\"removeNotification($event)\"\n\t\t\t\t\t\t\t *ngIf=\"isContainerNotEmpty(notificationsTopLeft)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsTopLeft\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.TOP_LEFT\"></gui-notifications-container>\n\n<gui-notifications-container (onNotificationClose)=\"removeNotification($event)\"\n\t\t\t\t\t\t\t *ngIf=\"isContainerNotEmpty(notificationsBottomRight)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsBottomRight\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.BOTTOM_RIGHT\"></gui-notifications-container>\n\n<gui-notifications-container (onNotificationClose)=\"removeNotification($event)\"\n\t\t\t\t\t\t\t *ngIf=\"isContainerNotEmpty(notificationsBottomLeft)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsBottomLeft\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.BOTTOM_LEFT\"></gui-notifications-container>\n",
                        host: {
                            '[class.gui-notifications-overlay]': 'true'
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".gui-notifications-overlay{-ms-flex-align:center;align-items:center;font-family:Arial;-ms-flex-pack:center;justify-content:center;max-width:400px;position:fixed;z-index:1000}.gui-notifications-overlay gui-notifications-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:fixed}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-left{left:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-right{right:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-left{bottom:0;left:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-right{bottom:0;right:0}.gui-notifications-overlay .gui-notification{background:#fff;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);display:block;margin:16px;padding:32px;position:relative}.gui-notifications-overlay .gui-notification.gui-notification-right-side{-webkit-animation:.1s forwards loadNotificationRightSide;animation:.1s forwards loadNotificationRightSide}.gui-notifications-overlay .gui-notification.gui-notification-left-side{-webkit-animation:.1s forwards loadNotificationLeftSide;animation:.1s forwards loadNotificationLeftSide}@-webkit-keyframes loadNotificationRightSide{0%{transform:translateX(50%)}100%{transform:translateX(0)}}@keyframes loadNotificationRightSide{0%{transform:translateX(50%)}100%{transform:translateX(0)}}@-webkit-keyframes loadNotificationLeftSide{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}@keyframes loadNotificationLeftSide{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-right-side{-webkit-animation:.2s forwards closeNotificationRightSide;animation:.2s forwards closeNotificationRightSide}@-webkit-keyframes closeNotificationRightSide{0%{transform:translateX(0)}100%{transform:translateX(100%)}}@keyframes closeNotificationRightSide{0%{transform:translateX(0)}100%{transform:translateX(100%)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-left-side{-webkit-animation:.2s forwards closeNotificationLeftSide;animation:.2s forwards closeNotificationLeftSide}@-webkit-keyframes closeNotificationLeftSide{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}@keyframes closeNotificationLeftSide{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}", ".gui-dark .gui-notification{background:#424242}", ".gui-material .gui-notification{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}"]
                    }] }
        ];
        /** @nocollapse */
        FabricNotificationsOverlayComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ComponentFactoryResolver },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: FabricModalThemeService },
            { type: Theme, decorators: [{ type: core.Inject, args: [themeToken,] }] },
            { type: FabricNotificationService, decorators: [{ type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return FabricNotificationService; })),] }] }
        ]; };
        return FabricNotificationsOverlayComponent;
    }(FabricThemedComponent));
    if (false) {
        /** @type {?} */
        FabricNotificationsOverlayComponent.prototype.notificationsTopRight;
        /** @type {?} */
        FabricNotificationsOverlayComponent.prototype.notificationsTopLeft;
        /** @type {?} */
        FabricNotificationsOverlayComponent.prototype.notificationsBottomRight;
        /** @type {?} */
        FabricNotificationsOverlayComponent.prototype.notificationsBottomLeft;
        /** @type {?} */
        FabricNotificationsOverlayComponent.prototype.FabricNotificationPosition;
        /**
         * @type {?}
         * @private
         */
        FabricNotificationsOverlayComponent.prototype.changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        FabricNotificationsOverlayComponent.prototype.componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        FabricNotificationsOverlayComponent.prototype.elRef;
        /**
         * @type {?}
         * @private
         */
        FabricNotificationsOverlayComponent.prototype.notificationsService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricNotificationsContainerComponent = /** @class */ (function () {
        function FabricNotificationsContainerComponent() {
            this.onNotificationClose = new core.EventEmitter();
            this.FabricNotificationPosition = FabricNotificationPosition;
        }
        /**
         * @param {?} selectedNotification
         * @return {?}
         */
        FabricNotificationsContainerComponent.prototype.emitClosedNotification = /**
         * @param {?} selectedNotification
         * @return {?}
         */
        function (selectedNotification) {
            this.onNotificationClose.emit(selectedNotification);
        };
        /**
         * @param {?} fabricNotificationPosition
         * @return {?}
         */
        FabricNotificationsContainerComponent.prototype.isPosition = /**
         * @param {?} fabricNotificationPosition
         * @return {?}
         */
        function (fabricNotificationPosition) {
            return this.position === fabricNotificationPosition;
        };
        FabricNotificationsContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-notifications-container',
                        template: "\n\t\t<gui-notification *ngFor=\"let notification of notifications\"\n\t\t\t\t\t\t  [notification]=\"notification\"\n\t\t\t\t\t\t  (onNotificationClose)=\"emitClosedNotification($event)\">\n\t\t</gui-notification>\n\t",
                        host: {
                            '[class.gui-notifications-top-right]': 'isPosition(FabricNotificationPosition.TOP_RIGHT)',
                            '[class.gui-notifications-top-left]': 'isPosition(FabricNotificationPosition.TOP_LEFT)',
                            '[class.gui-notifications-bottom-right]': 'isPosition(FabricNotificationPosition.BOTTOM_RIGHT)',
                            '[class.gui-notifications-bottom-left]': 'isPosition(FabricNotificationPosition.BOTTOM_LEFT)'
                        },
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        FabricNotificationsContainerComponent.propDecorators = {
            notifications: [{ type: core.Input }],
            position: [{ type: core.Input }],
            onNotificationClose: [{ type: core.Output }]
        };
        return FabricNotificationsContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricNotificationsContainerComponent.prototype.notifications;
        /** @type {?} */
        FabricNotificationsContainerComponent.prototype.position;
        /** @type {?} */
        FabricNotificationsContainerComponent.prototype.onNotificationClose;
        /** @type {?} */
        FabricNotificationsContainerComponent.prototype.FabricNotificationPosition;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricNotificationModule = /** @class */ (function () {
        function FabricNotificationModule() {
        }
        FabricNotificationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            FabricCloseIconModule
                        ],
                        declarations: [
                            FabricNotificationsOverlayComponent,
                            FabricNotificationsContainerComponent,
                            FabricNotificationComponent
                        ],
                        providers: [
                            FabricNotificationService
                        ],
                        entryComponents: [
                            FabricNotificationsOverlayComponent,
                            FabricNotificationComponent
                        ]
                    },] }
        ];
        return FabricNotificationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricMessageService = /** @class */ (function (_super) {
        __extends(FabricMessageService, _super);
        function FabricMessageService(componentFactoryResolver, applicationRef, injector, document) {
            return _super.call(this, componentFactoryResolver, applicationRef, injector, document) || this;
        }
        /**
         * @return {?}
         */
        FabricMessageService.prototype.getComponent = /**
         * @return {?}
         */
        function () {
            return FabricMessageComponent;
        };
        /**
         * @param {?} text
         * @return {?}
         */
        FabricMessageService.prototype.open = /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            this.createAndAppend();
            this.getComponentRef().instance.text = text;
            this.getComponentRef().instance.detectChanges();
        };
        /**
         * @return {?}
         */
        FabricMessageService.prototype.close = /**
         * @return {?}
         */
        function () {
            this.removeComponent();
        };
        FabricMessageService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FabricMessageService.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.ApplicationRef },
            { type: core.Injector },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        return FabricMessageService;
    }(FabricModal));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricMessageComponent = /** @class */ (function () {
        function FabricMessageComponent(messageService, changeDetectorRef) {
            this.messageService = messageService;
            this.changeDetectorRef = changeDetectorRef;
        }
        /**
         * @return {?}
         */
        FabricMessageComponent.prototype.detectChanges = /**
         * @return {?}
         */
        function () {
            this.changeDetectorRef.detectChanges();
        };
        /**
         * @return {?}
         */
        FabricMessageComponent.prototype.close = /**
         * @return {?}
         */
        function () {
            this.messageService.close();
        };
        FabricMessageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-message',
                        template: "\n\t\t<div class=\" gui-message\">\n\t\t\t{{text}}\n\t\t\t<button (click)=\"close()\">X</button>\n\t\t</div>\n\t",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".gui-message{left:50%;position:fixed;top:50%}"]
                    }] }
        ];
        /** @nocollapse */
        FabricMessageComponent.ctorParameters = function () { return [
            { type: FabricMessageService },
            { type: core.ChangeDetectorRef }
        ]; };
        return FabricMessageComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricMessageComponent.prototype.text;
        /**
         * @type {?}
         * @private
         */
        FabricMessageComponent.prototype.messageService;
        /**
         * @type {?}
         * @private
         */
        FabricMessageComponent.prototype.changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricMessageModule = /** @class */ (function () {
        function FabricMessageModule() {
        }
        FabricMessageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricMessageComponent
                        ],
                        entryComponents: [
                            FabricMessageComponent
                        ],
                        providers: [
                            FabricMessageService
                        ]
                    },] }
        ];
        return FabricMessageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricTabComponent = /** @class */ (function (_super) {
        __extends(FabricTabComponent, _super);
        function FabricTabComponent(renderer, changeDetectorRef, platformId) {
            var _this = _super.call(this) || this;
            _this.renderer = renderer;
            _this.changeDetectorRef = changeDetectorRef;
            _this.platformId = platformId;
            _this.Direction = Direction;
            _this.listPosition = 0;
            _this.menuListWidth = 0;
            _this.scrollAmount = 60;
            _this.ACTIVE_TAB_CLASS_NAME = 'gui-active';
            return _this;
        }
        /**
         * @return {?}
         */
        FabricTabComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.toggleTab(this.active);
            this.calculateMenuWidth();
            this.showMenuArrows();
            this.checkIfMenuFitsOnResize();
        };
        /**
         * @param {?} tab
         * @return {?}
         */
        FabricTabComponent.prototype.toggleTab = /**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            this.removeActive();
            this.setActive(tab);
        };
        /**
         * @param {?} item
         * @return {?}
         */
        FabricTabComponent.prototype.isSvg = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return typeof item === 'object';
        };
        /**
         * @param {?} item
         * @return {?}
         */
        FabricTabComponent.prototype.getTabName = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return typeof item === 'object' ? item.name : item;
        };
        /**
         * @param {?} scrollRightClicked
         * @return {?}
         */
        FabricTabComponent.prototype.scrollTabList = /**
         * @param {?} scrollRightClicked
         * @return {?}
         */
        function (scrollRightClicked) {
            /** @type {?} */
            var listWidth = this.tabRef.nativeElement.querySelector('.gui-tab-menu-list').offsetWidth;
            /** @type {?} */
            var menuOverflow = this.menuListWidth - listWidth;
            if (scrollRightClicked && menuOverflow > this.listPosition) {
                this.listPosition += this.scrollAmount;
            }
            else if (!scrollRightClicked && this.listPosition > 0) {
                this.listPosition -= this.scrollAmount;
            }
            this.tabRef.nativeElement.querySelector('.' + 'gui-tab-menu-list').scrollLeft = this.listPosition;
        };
        /**
         * @private
         * @param {?} tab
         * @return {?}
         */
        FabricTabComponent.prototype.setActive = /**
         * @private
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            if (typeof tab === 'object') {
                tab = tab.name;
            }
            /** @type {?} */
            var navMenuTabEl = this.tabRef.nativeElement.querySelector('[data-tab="' + tab + '"]');
            /** @type {?} */
            var navTabItemEl = this.tabItemRef.nativeElement.querySelector('[data-tab="' + tab + '"]');
            this.addClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
            this.addClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
        };
        /**
         * @private
         * @return {?}
         */
        FabricTabComponent.prototype.removeActive = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var navMenuTabEl = this.tabRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME);
            /** @type {?} */
            var navTabItemEl = this.tabItemRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME);
            this.removeClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
            this.removeClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
        };
        /**
         * @private
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        FabricTabComponent.prototype.addClass = /**
         * @private
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        function (element, name) {
            if (element) {
                this.renderer.addClass(element, name);
            }
        };
        /**
         * @private
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        FabricTabComponent.prototype.removeClass = /**
         * @private
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        function (element, name) {
            if (element) {
                this.renderer.removeClass(element, name);
            }
        };
        /**
         * @private
         * @return {?}
         */
        FabricTabComponent.prototype.checkIfMenuFitsOnResize = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                rxjs.fromEvent(window, 'resize')
                    .pipe(this.takeUntil())
                    .subscribe((/**
                 * @return {?}
                 */
                function () { return _this.showMenuArrows(); }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        FabricTabComponent.prototype.calculateMenuWidth = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.menuListWidth = 0;
            this.tabMenuList
                .forEach((/**
             * @param {?} listItem
             * @return {?}
             */
            function (listItem) {
                _this.menuListWidth += listItem.nativeElement.offsetWidth;
            }));
        };
        /**
         * @private
         * @return {?}
         */
        FabricTabComponent.prototype.showMenuArrows = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var menuWidth = this.tabRef.nativeElement.querySelector('.gui-tab-menu').offsetWidth;
            this.scrollActive = menuWidth < this.menuListWidth;
            this.changeDetectorRef.detectChanges();
        };
        FabricTabComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-tab',
                        template: "<div #tab>\n\n\t<div class=\"gui-tab-menu\">\n\n\t\t<div (click)=\"scrollTabList(false)\"\n\t\t\t *ngIf=\"scrollActive\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon [direction]=\"Direction.LEFT\"></gui-arrow-icon>\n\t\t</div>\n\n\t\t<div class=\"gui-tab-menu-list\">\n\t\t\t<div #tabMenuList\n\t\t\t\t (click)=\"toggleTab(tab)\"\n\t\t\t\t *ngFor=\"let tab of menu\"\n\t\t\t\t [attr.data-tab]=\"getTabName(tab)\"\n\t\t\t\t class=\"gui-tab-menu-item\">\n\t\t\t\t<span *ngIf=\"!isSvg(tab)\">{{tab}}</span>\n\t\t\t\t<ng-container *ngIf=\"isSvg(tab)\">\n\t\t\t\t\t<gui-svg-template [svg]=\"tab.svg\"></gui-svg-template>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div (click)=\"scrollTabList(true)\"\n\t\t\t *ngIf=\"scrollActive\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon></gui-arrow-icon>\n\t\t</div>\n\n\t</div>\n\n\t<div #tabItem\n\t\t class=\"gui-tab-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-tab]': 'true'
                        },
                        styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fff;border-radius:0 0 4px 4px;padding:12px;border:1px solid #d6d6d6}.gui-tab .gui-tab-menu{display:-ms-flexbox;display:flex;margin-bottom:-1px}.gui-tab .gui-tab-menu .gui-tab-menu-list{border-radius:4px 4px 0 0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden}.gui-tab .gui-tab-menu .gui-tab-menu-item{background:#fafafa;border-radius:4px 4px 0 0;box-sizing:border-box;cursor:pointer;display:inline-block;height:34px;margin-right:2px;padding:8px 16px;position:relative;text-align:center;white-space:nowrap;border:1px solid #d6d6d6}.gui-tab .gui-tab-menu .gui-tab-menu-item:nth-last-child(1){margin-right:0}.gui-tab .gui-tab-menu .gui-tab-menu-item svg{height:16px;width:16px}.gui-tab .gui-tab-menu .gui-tab-menu-item svg path{fill:#aaa}.gui-tab .gui-tab-menu .scroll-button{background:0 0;box-sizing:border-box;color:#ccc;cursor:pointer;font-weight:700;height:34px;padding:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-menu .scroll-button:hover svg path{stroke:#464646}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fff;border-color:#d6d6d6 #d6d6d6 #fff;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;color:#2185d0}.gui-tab .gui-active.gui-tab-menu-item svg path{fill:#2185d0}.gui-tab .gui-active.gui-tab-item{display:block}", ".gui-material .gui-tab{font:14px Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{background:#616161;border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent;color:#ce93d8}"]
                    }] }
        ];
        /** @nocollapse */
        FabricTabComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        FabricTabComponent.propDecorators = {
            tabRef: [{ type: core.ViewChild, args: ['tab', { static: false },] }],
            tabItemRef: [{ type: core.ViewChild, args: ['tabItem', { static: false },] }],
            tabMenuList: [{ type: core.ViewChildren, args: ['tabMenuList',] }],
            menu: [{ type: core.Input }],
            active: [{ type: core.Input }],
            scrollActive: [{ type: core.Input }]
        };
        return FabricTabComponent;
    }(FabricReactive));
    if (false) {
        /** @type {?} */
        FabricTabComponent.prototype.tabRef;
        /** @type {?} */
        FabricTabComponent.prototype.tabItemRef;
        /** @type {?} */
        FabricTabComponent.prototype.tabMenuList;
        /** @type {?} */
        FabricTabComponent.prototype.menu;
        /** @type {?} */
        FabricTabComponent.prototype.active;
        /** @type {?} */
        FabricTabComponent.prototype.scrollActive;
        /** @type {?} */
        FabricTabComponent.prototype.Direction;
        /**
         * @type {?}
         * @private
         */
        FabricTabComponent.prototype.listPosition;
        /**
         * @type {?}
         * @private
         */
        FabricTabComponent.prototype.menuListWidth;
        /**
         * @type {?}
         * @private
         */
        FabricTabComponent.prototype.scrollAmount;
        /**
         * @type {?}
         * @private
         */
        FabricTabComponent.prototype.ACTIVE_TAB_CLASS_NAME;
        /**
         * @type {?}
         * @private
         */
        FabricTabComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        FabricTabComponent.prototype.changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        FabricTabComponent.prototype.platformId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TabItemComponent = /** @class */ (function () {
        function TabItemComponent() {
        }
        TabItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-tab-item',
                        template: "<div [attr.data-tab]=\"tab\"\n\t class=\"gui-tab-item\">\n\t<ng-content></ng-content>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        TabItemComponent.propDecorators = {
            tab: [{ type: core.Input }]
        };
        return TabItemComponent;
    }());
    if (false) {
        /** @type {?} */
        TabItemComponent.prototype.tab;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricSvgTemplate = /** @class */ (function () {
        function FabricSvgTemplate() {
        }
        // todo sanitize
        // todo sanitize
        /**
         * @return {?}
         */
        FabricSvgTemplate.prototype.ngAfterViewInit = 
        // todo sanitize
        /**
         * @return {?}
         */
        function () {
            this.svgRef.nativeElement.innerHTML = this.svg;
        };
        FabricSvgTemplate.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-svg-template',
                        template: "\n\t\t<div #svgEl></div>\n\t",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        FabricSvgTemplate.propDecorators = {
            svgRef: [{ type: core.ViewChild, args: ['svgEl', { static: false },] }],
            svg: [{ type: core.Input }]
        };
        return FabricSvgTemplate;
    }());
    if (false) {
        /** @type {?} */
        FabricSvgTemplate.prototype.svgRef;
        /** @type {?} */
        FabricSvgTemplate.prototype.svg;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricSvgTemplateModule = /** @class */ (function () {
        function FabricSvgTemplateModule() {
        }
        FabricSvgTemplateModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricSvgTemplate
                        ],
                        exports: [
                            FabricSvgTemplate
                        ]
                    },] }
        ];
        return FabricSvgTemplateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricTabModule = /** @class */ (function () {
        function FabricTabModule() {
        }
        FabricTabModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            FabricArrowIconModule,
                            FabricSvgTemplateModule
                        ],
                        declarations: [
                            FabricTabComponent,
                            TabItemComponent
                        ],
                        exports: [
                            FabricTabComponent,
                            TabItemComponent
                        ]
                    },] }
        ];
        return FabricTabModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricTooltipComponent = /** @class */ (function () {
        function FabricTooltipComponent(elementRef) {
            this.elementRef = elementRef;
        }
        /**
         * @return {?}
         */
        FabricTooltipComponent.prototype.correctPosition = /**
         * @return {?}
         */
        function () {
            this.top -= this.elementRef.nativeElement.offsetHeight;
        };
        FabricTooltipComponent.decorators = [
            { type: core.Component, args: [{
                        template: "\n\t\t{{text}}\n\t",
                        host: {
                            '[class.gui-tooltip]': 'true',
                            '[style.left.px]': 'left',
                            '[style.top.px]': 'top'
                        },
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".gui-tooltip{background:rgba(0,0,0,.8);border-radius:4px;border-style:solid;border-width:0;box-sizing:border-box;color:#fff;display:block;font:400 14px Arial;padding:8px 12px;position:absolute;-ms-transform:translateX(-50%);transform:translateX(-50%);vertical-align:middle;z-index:10}.gui-tooltip::after{border-color:#333 transparent transparent;border-style:solid;border-width:5px;content:'';left:50%;margin-left:-5px;position:absolute;top:100%}"]
                    }] }
        ];
        /** @nocollapse */
        FabricTooltipComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return FabricTooltipComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricTooltipComponent.prototype.text;
        /** @type {?} */
        FabricTooltipComponent.prototype.left;
        /** @type {?} */
        FabricTooltipComponent.prototype.top;
        /**
         * @type {?}
         * @private
         */
        FabricTooltipComponent.prototype.elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricTooltipDirective = /** @class */ (function (_super) {
        __extends(FabricTooltipDirective, _super);
        function FabricTooltipDirective(componentFactoryResolver, injector, elementRef, applicationRef, document, platformId) {
            var _this = _super.call(this) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.injector = injector;
            _this.elementRef = elementRef;
            _this.applicationRef = applicationRef;
            _this.document = document;
            _this.platformId = platformId;
            _this.text = '';
            _this.tooltipRef = null;
            return _this;
        }
        /**
         * @return {?}
         */
        FabricTooltipDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var open$ = rxjs.fromEvent(this.elementRef.nativeElement, 'mouseenter');
            /** @type {?} */
            var close$ = rxjs.fromEvent(this.elementRef.nativeElement, 'mouseleave');
            open$
                .pipe(this.takeUntil())
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.show(); }));
            close$
                .pipe(this.takeUntil())
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (_this.tooltipRef) {
                    _this.hide();
                }
            }));
        };
        /**
         * @private
         * @return {?}
         */
        FabricTooltipDirective.prototype.show = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var tooltipRef = this.componentFactoryResolver
                .resolveComponentFactory(FabricTooltipComponent)
                .create(this.injector);
            tooltipRef.instance.text = this.text;
            tooltipRef.changeDetectorRef.detectChanges();
            /** @type {?} */
            var domElement = (/** @type {?} */ (((/** @type {?} */ (tooltipRef.hostView)))
                .rootNodes[0]));
            this.document.body.appendChild(domElement);
            this.tooltipRef = tooltipRef;
            this.calculateCords();
            this.tooltipRef.instance.correctPosition();
            this.tooltipRef.changeDetectorRef.detectChanges();
        };
        /**
         * @private
         * @return {?}
         */
        FabricTooltipDirective.prototype.hide = /**
         * @private
         * @return {?}
         */
        function () {
            this.applicationRef.detachView(this.tooltipRef.hostView);
            this.tooltipRef.destroy();
            this.tooltipRef = null;
        };
        /**
         * @private
         * @return {?}
         */
        FabricTooltipDirective.prototype.calculateCords = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var elementRef = this.elementRef.nativeElement;
            /** @type {?} */
            var elementRect = elementRef.getBoundingClientRect();
            /** @type {?} */
            var elementBottom = elementRect.bottom;
            /** @type {?} */
            var elementLeft = elementRect.left;
            if (common.isPlatformBrowser(this.platformId)) {
                this.tooltipTopPosition =
                    elementBottom + window.scrollY
                        - elementRef.offsetHeight
                        - FabricTooltipDirective.tooltipOffset;
                this.tooltipLeftPosition = window.scrollX + elementLeft + elementRef.offsetWidth / 2;
                this.tooltipRef.instance.top = this.tooltipTopPosition;
                this.tooltipRef.instance.left = this.tooltipLeftPosition;
                this.tooltipRef.changeDetectorRef.detectChanges();
            }
        };
        FabricTooltipDirective.tooltipOffset = 8;
        FabricTooltipDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[gui-tooltip]',
                        exportAs: 'guiTooltip'
                    },] }
        ];
        /** @nocollapse */
        FabricTooltipDirective.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.Injector },
            { type: core.ElementRef },
            { type: core.ApplicationRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        FabricTooltipDirective.propDecorators = {
            text: [{ type: core.Input, args: ['gui-tooltip',] }]
        };
        return FabricTooltipDirective;
    }(FabricReactive));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricTooltipDirective.tooltipOffset;
        /** @type {?} */
        FabricTooltipDirective.prototype.text;
        /** @type {?} */
        FabricTooltipDirective.prototype.tooltipRef;
        /** @type {?} */
        FabricTooltipDirective.prototype.tooltipTopPosition;
        /** @type {?} */
        FabricTooltipDirective.prototype.tooltipLeftPosition;
        /**
         * @type {?}
         * @private
         */
        FabricTooltipDirective.prototype.componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        FabricTooltipDirective.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        FabricTooltipDirective.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        FabricTooltipDirective.prototype.applicationRef;
        /**
         * @type {?}
         * @private
         */
        FabricTooltipDirective.prototype.document;
        /**
         * @type {?}
         * @private
         */
        FabricTooltipDirective.prototype.platformId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricTooltipModule = /** @class */ (function () {
        function FabricTooltipModule() {
        }
        FabricTooltipModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [
                            FabricTooltipDirective,
                            FabricTooltipComponent
                        ],
                        exports: [
                            FabricTooltipDirective,
                            FabricTooltipComponent
                        ],
                        entryComponents: [
                            FabricTooltipComponent
                        ]
                    },] }
        ];
        return FabricTooltipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectOptionsCords = /** @class */ (function () {
        function SelectOptionsCords(element, selectContainerGeometry, window) {
            this.element = element;
            this.selectContainerGeometry = selectContainerGeometry;
            this.window = window;
            this.calculateCords(element, selectContainerGeometry);
        }
        /**
         * @return {?}
         */
        SelectOptionsCords.prototype.getVerticalPosition = /**
         * @return {?}
         */
        function () {
            return this.verticalPosition;
        };
        /**
         * @return {?}
         */
        SelectOptionsCords.prototype.getHorizontalPosition = /**
         * @return {?}
         */
        function () {
            return this.horizontalPosition;
        };
        /**
         * @return {?}
         */
        SelectOptionsCords.prototype.getCanOpenUpward = /**
         * @return {?}
         */
        function () {
            return this.canOpenUpward;
        };
        /**
         * @private
         * @param {?} element
         * @param {?} selectOptionsGeometry
         * @return {?}
         */
        SelectOptionsCords.prototype.calculateCords = /**
         * @private
         * @param {?} element
         * @param {?} selectOptionsGeometry
         * @return {?}
         */
        function (element, selectOptionsGeometry) {
            /** @type {?} */
            var elementRect = element.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var elementBottom = this.window.pageYOffset + elementRect.bottom;
            /** @type {?} */
            var elementLeft = this.window.pageXOffset + elementRect.left;
            this.horizontalPosition = elementLeft;
            this.verticalPosition = elementBottom - SelectOptionsCords.BORDER_WIDTH;
            this.calculateDirection(selectOptionsGeometry, element);
        };
        /**
         * @private
         * @param {?} selectOptionsGeometry
         * @param {?} element
         * @return {?}
         */
        SelectOptionsCords.prototype.calculateDirection = /**
         * @private
         * @param {?} selectOptionsGeometry
         * @param {?} element
         * @return {?}
         */
        function (selectOptionsGeometry, element) {
            /** @type {?} */
            var windowHeight = this.window.innerHeight + this.window.pageYOffset;
            /** @type {?} */
            var elementHeight = element.nativeElement.offsetHeight;
            /** @type {?} */
            var selectOptionsHeight = selectOptionsGeometry.getHeight();
            /** @type {?} */
            var selectOptionsDoesNotFitVertically = (windowHeight - this.verticalPosition - selectOptionsHeight) < 0;
            if (selectOptionsDoesNotFitVertically) {
                this.canOpenUpward = true;
                this.verticalPosition -= selectOptionsHeight + elementHeight - SelectOptionsCords.BORDER_WIDTH;
            }
        };
        SelectOptionsCords.BORDER_WIDTH = 1;
        return SelectOptionsCords;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SelectOptionsCords.BORDER_WIDTH;
        /**
         * @type {?}
         * @private
         */
        SelectOptionsCords.prototype.verticalPosition;
        /**
         * @type {?}
         * @private
         */
        SelectOptionsCords.prototype.horizontalPosition;
        /**
         * @type {?}
         * @private
         */
        SelectOptionsCords.prototype.canOpenUpward;
        /**
         * @type {?}
         * @private
         */
        SelectOptionsCords.prototype.element;
        /**
         * @type {?}
         * @private
         */
        SelectOptionsCords.prototype.selectContainerGeometry;
        /**
         * @type {?}
         * @private
         */
        SelectOptionsCords.prototype.window;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectOptionsGeometry = /** @class */ (function () {
        function SelectOptionsGeometry(selectOptionsGeometry) {
            this.selectOptionsGeometry = selectOptionsGeometry;
        }
        /**
         * @return {?}
         */
        SelectOptionsGeometry.prototype.getHeight = /**
         * @return {?}
         */
        function () {
            return this.selectOptionsGeometry.nativeElement.querySelector('.gui-options-list').offsetHeight;
        };
        /**
         * @return {?}
         */
        SelectOptionsGeometry.prototype.getWidth = /**
         * @return {?}
         */
        function () {
            return this.selectOptionsGeometry.nativeElement.querySelector('.gui-options-list').offsetWidth;
        };
        return SelectOptionsGeometry;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SelectOptionsGeometry.prototype.selectOptionsGeometry;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectOptionsGeometryService = /** @class */ (function () {
        function SelectOptionsGeometryService(platformId) {
            this.platformId = platformId;
            this.selectOptionsCords$ = new rxjs.ReplaySubject(1);
        }
        /**
         * @return {?}
         */
        SelectOptionsGeometryService.prototype.onSelectOptionsCords = /**
         * @return {?}
         */
        function () {
            return this.selectOptionsCords$.asObservable();
        };
        /**
         * @param {?} selectContainerRef
         * @return {?}
         */
        SelectOptionsGeometryService.prototype.setGeometry = /**
         * @param {?} selectContainerRef
         * @return {?}
         */
        function (selectContainerRef) {
            this.selectContainerGeometry = new SelectOptionsGeometry(selectContainerRef);
        };
        /**
         * @param {?} element
         * @return {?}
         */
        SelectOptionsGeometryService.prototype.nextCords = /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (common.isPlatformBrowser(this.platformId)) {
                /** @type {?} */
                var selectOptionsCords = new SelectOptionsCords(element, this.selectContainerGeometry, window);
                this.selectOptionsCords$.next(selectOptionsCords);
            }
        };
        SelectOptionsGeometryService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SelectOptionsGeometryService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        return SelectOptionsGeometryService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SelectOptionsGeometryService.prototype.selectContainerGeometry;
        /**
         * @type {?}
         * @private
         */
        SelectOptionsGeometryService.prototype.selectOptionsCords$;
        /**
         * @type {?}
         * @private
         */
        SelectOptionsGeometryService.prototype.platformId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricSelectedOptionsRepository = /** @class */ (function () {
        function FabricSelectedOptionsRepository() {
            this.selectedOption$ = new rxjs.ReplaySubject(1);
        }
        /**
         * @return {?}
         */
        FabricSelectedOptionsRepository.prototype.onSelectedOption = /**
         * @return {?}
         */
        function () {
            return this.selectedOption$.asObservable();
        };
        /**
         * @param {?} option
         * @return {?}
         */
        FabricSelectedOptionsRepository.prototype.next = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            this.selectedOption$.next(option);
        };
        FabricSelectedOptionsRepository.decorators = [
            { type: core.Injectable }
        ];
        return FabricSelectedOptionsRepository;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FabricSelectedOptionsRepository.prototype.selectedOption$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricSelectOptionsComponent = /** @class */ (function (_super) {
        __extends(FabricSelectOptionsComponent, _super);
        function FabricSelectOptionsComponent(selectOptionsGeometryService, selectService, changeDetectorRef, elementRef, renderer, themeService) {
            var _this = _super.call(this, elementRef, renderer, themeService) || this;
            _this.selectOptionsGeometryService = selectOptionsGeometryService;
            _this.selectService = selectService;
            _this.changeDetectorRef = changeDetectorRef;
            _this.options = [];
            _this.width = 100;
            return _this;
        }
        /**
         * @return {?}
         */
        FabricSelectOptionsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.selectOptionsGeometryService
                .onSelectOptionsCords()
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} cords
             * @return {?}
             */
            function (cords) {
                _this.optionsContainerTopAttribute = cords.getVerticalPosition();
                _this.optionsContainerLeftAttribute = cords.getHorizontalPosition();
                _this.canOpenUpward = cords.getCanOpenUpward();
                _this.changeDetectorRef.detectChanges();
            }));
            this.selectService
                .onSelectedOption()
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} selectedOption
             * @return {?}
             */
            function (selectedOption) {
                _this.selectedOption = selectedOption;
                _this.changeDetectorRef.detectChanges();
            }));
        };
        /**
         * @return {?}
         */
        FabricSelectOptionsComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngAfterViewInit.call(this);
            this.initOpenAnimation();
        };
        /**
         * @return {?}
         */
        FabricSelectOptionsComponent.prototype.getElementRef = /**
         * @return {?}
         */
        function () {
            return _super.prototype.getElementRef.call(this);
        };
        /**
         * @return {?}
         */
        FabricSelectOptionsComponent.prototype.detectChanges = /**
         * @return {?}
         */
        function () {
            this.changeDetectorRef.detectChanges();
        };
        /**
         * @param {?} option
         * @return {?}
         */
        FabricSelectOptionsComponent.prototype.selectOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            this.selectService.next(option);
        };
        /**
         * @param {?} option
         * @return {?}
         */
        FabricSelectOptionsComponent.prototype.isOptionSelected = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return this.selectedOption && option.name === this.selectedOption.name;
        };
        /**
         * @param {?} option
         * @return {?}
         */
        FabricSelectOptionsComponent.prototype.getOptionValue = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.value ? option.value : option.name;
        };
        /**
         * @return {?}
         */
        FabricSelectOptionsComponent.prototype.initOpenAnimation = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var optionsEl = this.optionListRef.nativeElement;
            this.getRenderer().addClass(optionsEl, 'gui-options-opened');
        };
        FabricSelectOptionsComponent.decorators = [
            { type: core.Component, args: [{
                        template: "\n\t\t<div #optionList\n\t\t\t [class.gui-upward]=\"canOpenUpward\"\n\t\t\t [class.gui-downward]=\"!canOpenUpward\"\n\t\t\t [style.left.px]=\"optionsContainerLeftAttribute\"\n\t\t\t [style.top.px]=\"optionsContainerTopAttribute\"\n\t\t\t class=\"gui-options-list\">\n\n\t\t\t<div *ngFor=\"let option of options\"\n\t\t\t\t [class.gui-option-selected]=\"isOptionSelected(option)\"\n\t\t\t\t [style.width.px]=\"width\"\n\t\t\t\t (click)=\"selectOption(option)\"\n\t\t\t\t class=\"gui-option\">\n\t\t\t\t{{getOptionValue(option)}}\n\t\t\t</div>\n\t\t</div>\n\t",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        FabricSelectOptionsComponent.ctorParameters = function () { return [
            { type: SelectOptionsGeometryService },
            { type: FabricSelectedOptionsRepository },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: FabricModalThemeService }
        ]; };
        FabricSelectOptionsComponent.propDecorators = {
            optionListRef: [{ type: core.ViewChild, args: ['optionList', { static: false },] }]
        };
        return FabricSelectOptionsComponent;
    }(FabricThemedComponent));
    if (false) {
        /** @type {?} */
        FabricSelectOptionsComponent.prototype.optionListRef;
        /** @type {?} */
        FabricSelectOptionsComponent.prototype.options;
        /** @type {?} */
        FabricSelectOptionsComponent.prototype.optionsContainerLeftAttribute;
        /** @type {?} */
        FabricSelectOptionsComponent.prototype.optionsContainerTopAttribute;
        /** @type {?} */
        FabricSelectOptionsComponent.prototype.width;
        /** @type {?} */
        FabricSelectOptionsComponent.prototype.selectedOption;
        /** @type {?} */
        FabricSelectOptionsComponent.prototype.canOpenUpward;
        /**
         * @type {?}
         * @private
         */
        FabricSelectOptionsComponent.prototype.selectOptionsGeometryService;
        /**
         * @type {?}
         * @private
         */
        FabricSelectOptionsComponent.prototype.selectService;
        /**
         * @type {?}
         * @private
         */
        FabricSelectOptionsComponent.prototype.changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectOptionModalService = /** @class */ (function (_super) {
        __extends(SelectOptionModalService, _super);
        function SelectOptionModalService(selectOptionsGeometryService, componentFactoryResolver, applicationRef, injector, document) {
            var _this = _super.call(this, componentFactoryResolver, applicationRef, injector, document) || this;
            _this.selectOptionsGeometryService = selectOptionsGeometryService;
            return _this;
        }
        /**
         * @return {?}
         */
        SelectOptionModalService.prototype.getComponent = /**
         * @return {?}
         */
        function () {
            return FabricSelectOptionsComponent;
        };
        /**
         * @param {?} options
         * @param {?} width
         * @return {?}
         */
        SelectOptionModalService.prototype.open = /**
         * @param {?} options
         * @param {?} width
         * @return {?}
         */
        function (options, width) {
            this.createAndAppend();
            this.getComponentRef().instance.options = options;
            this.getComponentRef().instance.width = width;
            this.getComponentRef().instance.detectChanges();
            this.selectOptionsGeometryService.setGeometry(this.getComponentRef().instance.getElementRef());
            this.getComponentRef().instance.detectChanges();
        };
        /**
         * @return {?}
         */
        SelectOptionModalService.prototype.closeOptions = /**
         * @return {?}
         */
        function () {
            this.removeComponent();
        };
        SelectOptionModalService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SelectOptionModalService.ctorParameters = function () { return [
            { type: SelectOptionsGeometryService },
            { type: core.ComponentFactoryResolver },
            { type: core.ApplicationRef },
            { type: core.Injector },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        return SelectOptionModalService;
    }(FabricModal));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SelectOptionModalService.prototype.selectOptionsGeometryService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricSelectComponent = /** @class */ (function (_super) {
        __extends(FabricSelectComponent, _super);
        function FabricSelectComponent(selectService, selectOptionsGeometryService, selectOptionModalService, changeDetectorRef, platformId, elementRef, renderer) {
            var _this = _super.call(this) || this;
            _this.selectService = selectService;
            _this.selectOptionsGeometryService = selectOptionsGeometryService;
            _this.selectOptionModalService = selectOptionModalService;
            _this.changeDetectorRef = changeDetectorRef;
            _this.platformId = platformId;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            _this.options = [];
            _this.placeholder = '...';
            _this.width = 100;
            _this.disabled = false;
            _this.optionChanged = new core.EventEmitter();
            _this.doNotEmitValues = false;
            _this.opened = false;
            return _this;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FabricSelectComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.placeholder) {
                this.containerText = this.placeholder;
            }
            if (changes.selected) {
                if (this.selected) {
                    this.tryToSelect(this.selected);
                }
            }
        };
        /**
         * @return {?}
         */
        FabricSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.selectService
                .onSelectedOption()
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} selectedOption
             * @return {?}
             */
            function (selectedOption) {
                _this.emitSelectedOption(selectedOption);
                _this.selectedOption = selectedOption;
                _this.containerText = selectedOption.value;
                _this.doNotEmitValues = false;
                _this.changeDetectorRef.detectChanges();
            }));
            this.selectOptionsGeometryService
                .onSelectOptionsCords()
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} cords
             * @return {?}
             */
            function (cords) {
                if (cords.getCanOpenUpward()) {
                    _this.openUpward();
                }
                else {
                    _this.openDownward();
                }
            }));
        };
        /**
         * @param {?} event
         * @return {?}
         */
        FabricSelectComponent.prototype.tryToOpen = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.isContainerDisabled(event)) {
                event.stopPropagation();
            }
            else {
                this.open(this.options, this.width);
                this.toggleOptions(!this.opened);
                this.changeDetectorRef.detectChanges();
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        FabricSelectComponent.prototype.clickOutside = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.isContainerClicked(event)) {
                this.toggleOptions(false);
            }
        };
        /**
         * @param {?} opened
         * @return {?}
         */
        FabricSelectComponent.prototype.toggleOptions = /**
         * @param {?} opened
         * @return {?}
         */
        function (opened) {
            this.opened = opened;
            this.maintainOptionsListPosition();
            if (!this.opened) {
                this.closeOptions();
            }
        };
        /**
         * @param {?} option
         * @return {?}
         */
        FabricSelectComponent.prototype.isOptionSelected = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return this.selectedOption && option.name === this.selectedOption.name;
        };
        /**
         * @param {?} option
         * @return {?}
         */
        FabricSelectComponent.prototype.getOptionValue = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (option) {
                return option.value ? option.value : option.name;
            }
        };
        /**
         * @private
         * @param {?} options
         * @param {?} width
         * @return {?}
         */
        FabricSelectComponent.prototype.open = /**
         * @private
         * @param {?} options
         * @param {?} width
         * @return {?}
         */
        function (options, width) {
            this.closeSelect();
            this.selectOptionModalService.open(options, width);
            this.selectOptionsGeometryService.nextCords(this.containerRef);
        };
        /**
         * @private
         * @param {?} option
         * @return {?}
         */
        FabricSelectComponent.prototype.tryToSelect = /**
         * @private
         * @param {?} option
         * @return {?}
         */
        function (option) {
            /** @type {?} */
            var canSelect = this.selectedOption ? option.name !== this.selectedOption.name : true;
            if (canSelect) {
                this.doNotEmitValues = true;
                this.selectService.next(option);
                this.selectedOption = option;
                this.containerText = this.getOptionValue(option);
            }
        };
        /**
         * @private
         * @return {?}
         */
        FabricSelectComponent.prototype.maintainOptionsListPosition = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                if (this.opened) {
                    this.scrollListenerFn = this.renderer.listen('window', 'scroll', (/**
                     * @return {?}
                     */
                    function () {
                        _this.selectOptionsGeometryService.nextCords(_this.containerRef);
                    }));
                }
                else {
                    if (this.scrollListenerFn) {
                        this.scrollListenerFn();
                    }
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        FabricSelectComponent.prototype.closeSelect = /**
         * @private
         * @return {?}
         */
        function () {
            this.selectOptionModalService.closeOptions();
        };
        /**
         * @private
         * @param {?} option
         * @return {?}
         */
        FabricSelectComponent.prototype.emitSelectedOption = /**
         * @private
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (!this.doNotEmitValues) {
                if (!this.isOptionSelected(option)) {
                    this.optionChanged.emit(option);
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        FabricSelectComponent.prototype.openDownward = /**
         * @private
         * @return {?}
         */
        function () {
            this.addClass('gui-options-opened');
            this.addClass('gui-downward');
            this.removeClass('gui-upward');
        };
        /**
         * @private
         * @return {?}
         */
        FabricSelectComponent.prototype.openUpward = /**
         * @private
         * @return {?}
         */
        function () {
            this.addClass('gui-options-opened');
            this.addClass('gui-upward');
            this.removeClass('gui-downward');
        };
        /**
         * @private
         * @return {?}
         */
        FabricSelectComponent.prototype.closeOptions = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var optionsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-options-opened');
            if (optionsElHasOpenClass) {
                this.removeClass('gui-options-opened');
                this.closeSelect();
            }
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        FabricSelectComponent.prototype.isContainerClicked = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return !this.elementRef.nativeElement.contains(event.target);
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        FabricSelectComponent.prototype.isContainerDisabled = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.target.classList.contains('gui-disabled');
        };
        /**
         * @private
         * @param {?} className
         * @return {?}
         */
        FabricSelectComponent.prototype.addClass = /**
         * @private
         * @param {?} className
         * @return {?}
         */
        function (className) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        };
        /**
         * @private
         * @param {?} className
         * @return {?}
         */
        FabricSelectComponent.prototype.removeClass = /**
         * @private
         * @param {?} className
         * @return {?}
         */
        function (className) {
            this.renderer.removeClass(this.elementRef.nativeElement, className);
        };
        FabricSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-select',
                        template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t [class.gui-disabled]=\"disabled\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-select-container\">\n\n\t<div class=\"gui-select-value\">\n\t\t{{containerText}}\n\t</div>\n\n\t<span class=\"gui-select-arrow\"></span>\n\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-select]': 'true'
                        },
                        providers: [
                            FabricSelectedOptionsRepository,
                            SelectOptionsGeometryService,
                            SelectOptionModalService
                        ],
                        styles: [".gui-select .gui-select-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-radius:4px;box-sizing:content-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative;border:1px solid #d6d6d6}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent;height:0;margin:8px;position:absolute;right:5px;top:5px;width:0}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8 #6fb4e8 transparent;border-radius:4px 4px 0 0;border-width:1px}.gui-select.gui-downward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-downward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:1px 0 0}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959;bottom:5px;left:5px;top:auto}.gui-select.gui-upward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-upward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:0 0 1px;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#ccc transparent transparent}.gui-select .initAnimationDisabled.gui-options-list{display:none}.gui-options-list{background:#fff;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px;overflow:hidden;padding:0;position:absolute;z-index:1000}.gui-options-list .gui-option{box-sizing:content-box;cursor:pointer;font-size:14px;list-style-type:none;padding:8px 24px 8px 12px}.gui-options-list .gui-option:hover{background:#dcdcdc}.gui-options-list .gui-option-selected{background:#e6e6e6;font-weight:700}.gui-options-list.gui-upward{-webkit-animation:.2s forwards loadUpward;animation:.2s forwards loadUpward;border-radius:4px 4px 0 0;border:1px solid #6fb4e8}@-webkit-keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}100%{transform:translateY(0) scaleY(1)}}@keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}100%{transform:translateY(0) scaleY(1)}}.gui-options-list.gui-downward{-webkit-animation:.2s forwards loadDownward;animation:.2s forwards loadDownward;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px}@-webkit-keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}100%{transform:translateY(0) scaleY(1)}}@keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}100%{transform:translateY(0) scaleY(1)}}", ".gui-material .gui-options-list .gui-option,.gui-material .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8}.gui-dark .gui-select .gui-disabled{opacity:.36}.gui-dark .gui-options-list{border-color:#ce93d8}.gui-dark .gui-options-list .gui-option{background:#424242;border-color:#757575;color:#bdbdbd}.gui-dark .gui-options-list .gui-option:hover{background:#616161}.gui-dark .gui-options-list .gui-option-selected{background:#757575}", ".gui-light .gui-select .gui-select-container{background:#fff;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light .gui-options-list .gui-option:hover{background:#f6f6f5}"]
                    }] }
        ];
        /** @nocollapse */
        FabricSelectComponent.ctorParameters = function () { return [
            { type: FabricSelectedOptionsRepository },
            { type: SelectOptionsGeometryService },
            { type: SelectOptionModalService },
            { type: core.ChangeDetectorRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        FabricSelectComponent.propDecorators = {
            containerRef: [{ type: core.ViewChild, args: ['container', { static: false },] }],
            options: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            selected: [{ type: core.Input }],
            width: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            optionChanged: [{ type: core.Output }]
        };
        return FabricSelectComponent;
    }(FabricReactive));
    if (false) {
        /** @type {?} */
        FabricSelectComponent.prototype.containerRef;
        /** @type {?} */
        FabricSelectComponent.prototype.options;
        /** @type {?} */
        FabricSelectComponent.prototype.placeholder;
        /** @type {?} */
        FabricSelectComponent.prototype.selected;
        /** @type {?} */
        FabricSelectComponent.prototype.width;
        /** @type {?} */
        FabricSelectComponent.prototype.disabled;
        /** @type {?} */
        FabricSelectComponent.prototype.optionChanged;
        /** @type {?} */
        FabricSelectComponent.prototype.selectedOption;
        /** @type {?} */
        FabricSelectComponent.prototype.containerText;
        /**
         * @type {?}
         * @private
         */
        FabricSelectComponent.prototype.scrollListenerFn;
        /**
         * @type {?}
         * @private
         */
        FabricSelectComponent.prototype.doNotEmitValues;
        /**
         * @type {?}
         * @private
         */
        FabricSelectComponent.prototype.opened;
        /**
         * @type {?}
         * @private
         */
        FabricSelectComponent.prototype.selectService;
        /**
         * @type {?}
         * @private
         */
        FabricSelectComponent.prototype.selectOptionsGeometryService;
        /**
         * @type {?}
         * @private
         */
        FabricSelectComponent.prototype.selectOptionModalService;
        /**
         * @type {?}
         * @private
         */
        FabricSelectComponent.prototype.changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        FabricSelectComponent.prototype.platformId;
        /**
         * @type {?}
         * @private
         */
        FabricSelectComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        FabricSelectComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricSelectModule = /** @class */ (function () {
        function FabricSelectModule() {
        }
        FabricSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricSelectComponent,
                            FabricSelectOptionsComponent
                        ],
                        exports: [
                            FabricSelectComponent
                        ],
                        entryComponents: [
                            FabricSelectOptionsComponent
                        ]
                    },] }
        ];
        return FabricSelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricSliderComponent = /** @class */ (function () {
        function FabricSliderComponent() {
            this.changed = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        FabricSliderComponent.prototype.toggle = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.stopPropagation();
            this.toggled = !this.toggled;
            this.changed.emit(this.toggled);
        };
        FabricSliderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-slider',
                        template: "<div (click)=\"toggle($event)\"\n\t class=\"gui-slider\">\n\t<span [class.is-toggled]=\"toggled\"\n\t\t  class=\"gui-slider-indicator\"></span>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".gui-slider{background:#ccc;border-radius:4px;cursor:pointer;display:block;height:12px;position:relative;width:32px}.gui-slider .gui-slider-indicator{background:#2185d0;border-radius:50%;box-sizing:border-box;height:16px;overflow:hidden;position:absolute;top:-2px;-ms-transform:translateX(-5.33333px);transform:translateX(-5.33333px);transition:.2s ease-in-out;width:16px}.gui-slider .gui-slider-indicator.is-toggled{-ms-transform:translateX(calc(100% + 16px / 3));transform:translateX(calc(100% + 16px / 3))}", ".gui-dark .gui-slider{background:#424242}.gui-dark .gui-slider .gui-slider-indicator{background:#ce93d8}", ".gui-material .gui-slider .gui-slider-indicator{background:#6200ee}"]
                    }] }
        ];
        FabricSliderComponent.propDecorators = {
            toggled: [{ type: core.Input }],
            changed: [{ type: core.Output }]
        };
        return FabricSliderComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricSliderComponent.prototype.toggled;
        /** @type {?} */
        FabricSliderComponent.prototype.changed;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricSliderModule = /** @class */ (function () {
        function FabricSliderModule() {
        }
        FabricSliderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricSliderComponent
                        ],
                        exports: [
                            FabricSliderComponent
                        ]
                    },] }
        ];
        return FabricSliderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricSpinnerComponent = /** @class */ (function (_super) {
        __extends(FabricSpinnerComponent, _super);
        function FabricSpinnerComponent(elementRef, renderer) {
            return _super.call(this, elementRef, renderer) || this;
        }
        /**
         * @return {?}
         */
        FabricSpinnerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnInit.call(this);
        };
        FabricSpinnerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-spinner',
                        template: "<div\n\t[style.height.px]=\"circleSize\"\n\t[style.width.px]=\"circleSize\"\n\tclass=\"gui-spinner\">\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
                        host: {
                            '[class.gui-spinner]': 'true'
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["@-webkit-keyframes gui-spin{from{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@keyframes gui-spin{from{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@-webkit-keyframes gui-spin-reverse{from{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}@keyframes gui-spin-reverse{from{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}.gui-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-spinner circle{fill:transparent;stroke:#999}.gui-spinner svg{position:absolute}.gui-spinner .circle-inner{animation:2s linear infinite reverse forwards gui-spin-reverse}.gui-spinner .circle-outer{-webkit-animation:2s linear infinite forwards gui-spin;animation:2s linear infinite forwards gui-spin}.gui-primary .gui-spinner.gui-spinner circle{stroke:#2185d0}.gui-secondary .gui-spinner.gui-spinner circle{stroke:#3cb371}", ".gui-material .gui-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-spinner circle{stroke:#0097a7}", ".gui-dark .gui-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-spinner circle{stroke:#80cbc4}"]
                    }] }
        ];
        /** @nocollapse */
        FabricSpinnerComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        FabricSpinnerComponent.propDecorators = {
            color: [{ type: core.Input }]
        };
        return FabricSpinnerComponent;
    }(AbstractSpinner));
    if (false) {
        /** @type {?} */
        FabricSpinnerComponent.prototype.color;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricSpinnerModule = /** @class */ (function () {
        function FabricSpinnerModule() {
        }
        FabricSpinnerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricSpinnerComponent
                        ],
                        exports: [
                            FabricSpinnerComponent
                        ]
                    },] }
        ];
        return FabricSpinnerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToggleButtonGroupService = /** @class */ (function () {
        function ToggleButtonGroupService() {
            this.toggleButtonId$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        ToggleButtonGroupService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.toggleButtonId$.next();
            this.toggleButtonId$.complete();
        };
        /**
         * @return {?}
         */
        ToggleButtonGroupService.prototype.observeToggledButton = /**
         * @return {?}
         */
        function () {
            return this.toggleButtonId$.asObservable();
        };
        /**
         * @param {?} id
         * @return {?}
         */
        ToggleButtonGroupService.prototype.toggleButton = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this.toggleButtonId$.next(id);
        };
        ToggleButtonGroupService.decorators = [
            { type: core.Injectable }
        ];
        return ToggleButtonGroupService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ToggleButtonGroupService.prototype.toggleButtonId$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricToggleButtonComponent = /** @class */ (function (_super) {
        __extends(FabricToggleButtonComponent, _super);
        function FabricToggleButtonComponent(elementRef, renderer, toggleButtonGroupService) {
            var _this = _super.call(this, elementRef, renderer) || this;
            _this.toggleButtonGroupService = toggleButtonGroupService;
            _this.checked = false;
            _this.disabled = false;
            _this.changed = new core.EventEmitter();
            _this.buttonChecked = false;
            _this.buttonId = Math.floor(Math.random() * 1000000);
            _this.generateButtonId();
            return _this;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FabricToggleButtonComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.checked) {
                this.setButtonChecked(this.checked);
            }
            if (changes.disabled) {
                this.toggleDisabledCssClass();
            }
        };
        /**
         * @return {?}
         */
        FabricToggleButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.observeToggleButtonGroup();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        FabricToggleButtonComponent.prototype.tryToToggle = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.target.disabled) {
                e.stopPropagation();
            }
            else {
                this.toggle();
            }
        };
        /**
         * @return {?}
         */
        FabricToggleButtonComponent.prototype.toggle = /**
         * @return {?}
         */
        function () {
            this.toggleButtonChecked();
            this.changed.emit(this.buttonChecked);
        };
        /**
         * @private
         * @return {?}
         */
        FabricToggleButtonComponent.prototype.toggleButtonChecked = /**
         * @private
         * @return {?}
         */
        function () {
            this.setButtonChecked(!this.buttonChecked);
        };
        /**
         * @private
         * @param {?} checked
         * @return {?}
         */
        FabricToggleButtonComponent.prototype.setButtonChecked = /**
         * @private
         * @param {?} checked
         * @return {?}
         */
        function (checked) {
            this.buttonChecked = checked;
            if (this.toggleButtonGroupService !== null) {
                this.toggleButtonGroupService.toggleButton(this.buttonId);
            }
            if (this.buttonChecked) {
                this.addClass('gui-checked');
            }
            else {
                this.removeClass('gui-checked');
            }
        };
        /**
         * @private
         * @return {?}
         */
        FabricToggleButtonComponent.prototype.observeToggleButtonGroup = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.toggleButtonGroupService !== null) {
                this.toggleButtonGroupService.observeToggledButton().subscribe((/**
                 * @param {?} id
                 * @return {?}
                 */
                function (id) {
                    if (id !== _this.buttonId) {
                        _this.buttonChecked = !_this.buttonChecked;
                        _this.removeClass('gui-checked');
                    }
                    else {
                        _this.buttonChecked = true;
                    }
                    _this.changed.emit(_this.buttonChecked);
                }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        FabricToggleButtonComponent.prototype.generateButtonId = /**
         * @private
         * @return {?}
         */
        function () {
            return this.buttonId;
        };
        /**
         * @private
         * @return {?}
         */
        FabricToggleButtonComponent.prototype.toggleDisabledCssClass = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.disabled) {
                this.addClass('gui-disabled');
            }
            else {
                this.removeClass('gui-disabled');
            }
        };
        FabricToggleButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-button-toggle',
                        template: "<button (click)=\"tryToToggle($event)\"\n\t\t[disabled]=\"disabled\"\n\t\t[outline]=\"outline\"\n\t\t[primary]=\"primary\"\n\t\t[secondary]=\"secondary\"\n\t\tgui-button>\n\t<ng-content></ng-content>\n</button>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-button-toggle]': 'true'
                        },
                        styles: [".gui-checked .gui-button{background:#e6e6e6;box-shadow:inset 0 10px 0 -5px #999;color:#333}.gui-checked .gui-button:hover{background:#ccc}.gui-checked .gui-button:active{background:#999}.gui-checked .gui-button.gui-outline{background:0 0;box-shadow:0 0 0 2px #d6d6d6}.gui-checked .gui-button.gui-outline.gui-primary{background:0 0;box-shadow:0 0 0 2px #439de1;color:#2185d0}.gui-checked .gui-button.gui-outline.gui-primary:hover{color:#fff}.gui-checked .gui-button.gui-outline.gui-secondary{background:0 0;box-shadow:0 0 0 2px #5ac88b;color:#3cb371}.gui-checked .gui-button.gui-outline.gui-secondary:hover{color:#fff}.gui-checked .gui-button.gui-primary{background:#2185d0;box-shadow:inset 0 10px 0 -5px #175b8e;color:#fff}.gui-checked .gui-button.gui-secondary{background:#3cb371;box-shadow:inset 0 10px 0 -5px #2b8152;color:#fff}.gui-disabled{pointer-events:none}", ".gui-material .gui-button{background:#3949ab;color:#fff}.gui-material .gui-checked .gui-button{background:#3949ab;box-shadow:inset 0 10px 0 -5px #7885d2;color:#fff}.gui-material .gui-checked .gui-button:hover{background:#5262c5}.gui-material .gui-checked .gui-button:active{background:#4051bf}.gui-material .gui-checked .gui-button.gui-outline{background:#c5cae9;box-shadow:0 0 0 1px #5262c5;color:#3949ab}.gui-material .gui-checked .gui-button.gui-outline.gui-primary{background:#d1c4e9;box-shadow:0 0 0 1px #6200ee;color:#6200ee}.gui-material .gui-checked .gui-button.gui-outline.gui-secondary{background:#b2ebf2;box-shadow:0 0 0 1px #0097a7;color:#0097a7}.gui-material .gui-checked .gui-button.gui-primary{background:#6200ee;box-shadow:inset 0 10px 0 -5px #d1c4e9;color:#fff}.gui-material .gui-checked .gui-button.gui-secondary{background:#0097a7;box-shadow:inset 0 10px 0 -5px #b2ebf2;color:#fff}", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-checked .gui-button{color:#bdbdbd}.gui-dark .gui-checked .gui-button:hover{background:#616161}.gui-dark .gui-checked .gui-button:active{background:#212121}.gui-dark .gui-checked .gui-button.gui-outline{background:#2e2e2e;box-shadow:0 0 0 1px #616161;color:#bdbdbd}.gui-dark .gui-checked .gui-button.gui-outline.gui-primary{background:#b55bc4;box-shadow:0 0 0 1px #ce93d8;color:#212121}.gui-dark .gui-checked .gui-button.gui-outline.gui-secondary{background:#26a69a;box-shadow:0 0 0 1px #80cbc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-primary{background:#ce93d8;box-shadow:inset 0 10px 0 -5px #b55bc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-secondary{background:#80cbc4;box-shadow:inset 0 10px 0 -5px #26a69a;color:#212121}"]
                    }] }
        ];
        /** @nocollapse */
        FabricToggleButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: ToggleButtonGroupService, decorators: [{ type: core.Optional }] }
        ]; };
        FabricToggleButtonComponent.propDecorators = {
            checked: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            changed: [{ type: core.Output }]
        };
        return FabricToggleButtonComponent;
    }(Indicator));
    if (false) {
        /** @type {?} */
        FabricToggleButtonComponent.prototype.checked;
        /** @type {?} */
        FabricToggleButtonComponent.prototype.disabled;
        /** @type {?} */
        FabricToggleButtonComponent.prototype.changed;
        /**
         * @type {?}
         * @private
         */
        FabricToggleButtonComponent.prototype.buttonChecked;
        /**
         * @type {?}
         * @private
         */
        FabricToggleButtonComponent.prototype.buttonId;
        /**
         * @type {?}
         * @private
         */
        FabricToggleButtonComponent.prototype.toggleButtonGroupService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricToggleButtonModule = /** @class */ (function () {
        function FabricToggleButtonModule() {
        }
        FabricToggleButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            FabricButtonModule
                        ],
                        declarations: [
                            FabricToggleButtonComponent
                        ],
                        exports: [
                            FabricToggleButtonComponent,
                            FabricButtonModule
                        ]
                    },] }
        ];
        return FabricToggleButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricToggleButtonGroupComponent = /** @class */ (function () {
        function FabricToggleButtonGroupComponent() {
        }
        FabricToggleButtonGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-toggle-button-group',
                        template: "<ng-content></ng-content>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-toggle-button-group]': 'true'
                        },
                        providers: [ToggleButtonGroupService],
                        styles: [".gui-toggle-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-toggle-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-toggle-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-toggle-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-toggle-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}"]
                    }] }
        ];
        return FabricToggleButtonGroupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricToggleButtonGroupModule = /** @class */ (function () {
        function FabricToggleButtonGroupModule() {
        }
        FabricToggleButtonGroupModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            FabricToggleButtonGroupComponent
                        ],
                        exports: [
                            FabricToggleButtonGroupComponent
                        ]
                    },] }
        ];
        return FabricToggleButtonGroupModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricRatingComponent = /** @class */ (function () {
        function FabricRatingComponent() {
            this.rating = 3;
            this.onRatingChange = new core.EventEmitter();
            this.stars = [];
            this.previewRating = 0;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FabricRatingComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.starsLength) {
                if (this.starsLength) {
                    this.createStarsArray(this.starsLength);
                }
            }
        };
        /**
         * @return {?}
         */
        FabricRatingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.stars.length === 0) {
                this.createStarsArray(5);
            }
        };
        /**
         * @param {?} starNumber
         * @param {?} rating
         * @return {?}
         */
        FabricRatingComponent.prototype.isRating = /**
         * @param {?} starNumber
         * @param {?} rating
         * @return {?}
         */
        function (starNumber, rating) {
            return !(rating >= starNumber);
        };
        /**
         * @param {?} star
         * @return {?}
         */
        FabricRatingComponent.prototype.changeRating = /**
         * @param {?} star
         * @return {?}
         */
        function (star) {
            this.rating = star;
            this.onRatingChange.emit(star);
        };
        /**
         * @param {?} star
         * @return {?}
         */
        FabricRatingComponent.prototype.changePreviewRating = /**
         * @param {?} star
         * @return {?}
         */
        function (star) {
            this.previewRating = star + 1;
        };
        /**
         * @param {?} length
         * @return {?}
         */
        FabricRatingComponent.prototype.createStarsArray = /**
         * @param {?} length
         * @return {?}
         */
        function (length) {
            for (var i = 1; i <= length; i++) {
                this.stars.push(i);
            }
        };
        FabricRatingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-rating',
                        template: "<div class=\"gui-rating-container\">\n\t<gui-star-icon (click)=\"changeRating(star)\"\n\t\t\t\t   (mouseenter)=\"changePreviewRating(star)\"\n\t\t\t\t   (mouseleave)=\"changePreviewRating(0)\"\n\t\t\t\t   *ngFor=\"let star of stars\"\n\t\t\t\t   [class.star-icon-gray]=\"isRating(star, rating)\"\n\t\t\t\t   [class.star-icon-hover]=\"isRating(previewRating, star)\">\n\t</gui-star-icon>\n</div>\n",
                        host: {
                            '[class.gui-rating]': 'true'
                        },
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".gui-rating .gui-star-icon{cursor:pointer;padding-right:8px}.gui-rating .gui-star-icon svg{height:24px;width:24px}.gui-rating .gui-star-icon svg path{transition:fill .3s ease-in-out}.gui-rating .gui-rating-container{display:-ms-flexbox;display:flex}.gui-rating .gui-rating-container .star-icon-gray svg path{fill:#dedede}.gui-rating .gui-rating-container .star-icon-hover svg path{fill:#fc0}"]
                    }] }
        ];
        FabricRatingComponent.propDecorators = {
            starsLength: [{ type: core.Input }],
            rating: [{ type: core.Input }],
            onRatingChange: [{ type: core.Output }]
        };
        return FabricRatingComponent;
    }());
    if (false) {
        /** @type {?} */
        FabricRatingComponent.prototype.starsLength;
        /** @type {?} */
        FabricRatingComponent.prototype.rating;
        /** @type {?} */
        FabricRatingComponent.prototype.onRatingChange;
        /** @type {?} */
        FabricRatingComponent.prototype.stars;
        /** @type {?} */
        FabricRatingComponent.prototype.previewRating;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StarIconComponent = /** @class */ (function () {
        function StarIconComponent() {
        }
        StarIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gui-star-icon',
                        template: "\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34.542\" height=\"32.852\" viewBox=\"0 0 34.542 32.852\">\n\t\t\t<path data-name=\"Path 572\"\n\t\t\t\t  d=\"M-121.168-469.432l5.337,10.814,11.934,1.734-8.636,8.418,2.039,11.886-10.674-5.612-10.674,5.612,2.039-11.886-8.636-8.418,11.934-1.734Z\"\n\t\t\t\t  transform=\"translate(138.44 469.432)\" fill=\"#ffe623\" fill-rule=\"evenodd\"/>\n\t\t</svg>\n\t",
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.gui-star-icon]': 'true'
                        }
                    }] }
        ];
        return StarIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StarIconModule = /** @class */ (function () {
        function StarIconModule() {
        }
        StarIconModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            StarIconComponent
                        ],
                        exports: [
                            StarIconComponent
                        ]
                    },] }
        ];
        return StarIconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabricRatingModule = /** @class */ (function () {
        function FabricRatingModule() {
        }
        FabricRatingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            StarIconModule
                        ],
                        declarations: [
                            FabricRatingComponent
                        ],
                        exports: [
                            FabricRatingComponent
                        ]
                    },] }
        ];
        return FabricRatingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var modules = [
        FabricBadgeModule,
        FabricButtonModule,
        FabricButtonGroupModule,
        FabricCardModule,
        FabricCheckboxModule,
        FabricChipModule,
        FabricDatePickerModule,
        FabricDrawerModule,
        FabricDropdownModule,
        FabricDialogModule,
        FabricInlineDialogModule,
        FabricRadioButtonModule,
        FabricRadioGroupModule,
        FabricRatingModule,
        FabricNotificationModule,
        FabricMessageModule,
        FabricTabModule,
        FabricTooltipModule,
        FabricProgressBarModule,
        FabricProgressSpinnerModule,
        FabricSelectModule,
        FabricSliderModule,
        FabricSpinnerModule,
        FabricToggleButtonModule,
        FabricToggleButtonGroupModule,
        FabricInputModule
    ];
    var FabricModule = /** @class */ (function () {
        function FabricModule() {
        }
        FabricModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread([
                            common.CommonModule
                        ], modules),
                        exports: __spread(modules),
                        providers: [
                            FabricModalThemeService
                        ]
                    },] }
        ];
        return FabricModule;
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
    FabricNestedDialogComponent = /** @class */ (function () {
        function FabricNestedDialogComponent() {
        }
        return FabricNestedDialogComponent;
    }());

    exports.FabricBadgeModule = FabricBadgeModule;
    exports.FabricButtonComponent = FabricButtonComponent;
    exports.FabricButtonGroupModule = FabricButtonGroupModule;
    exports.FabricButtonModule = FabricButtonModule;
    exports.FabricCardModule = FabricCardModule;
    exports.FabricCheckboxComponent = FabricCheckboxComponent;
    exports.FabricCheckboxModule = FabricCheckboxModule;
    exports.FabricChipComponent = FabricChipComponent;
    exports.FabricChipModule = FabricChipModule;
    exports.FabricDatePickerModule = FabricDatePickerModule;
    exports.FabricDialogModule = FabricDialogModule;
    exports.FabricDialogService = FabricDialogService;
    exports.FabricDialogThemeService = FabricDialogThemeService;
    exports.FabricDrawerModule = FabricDrawerModule;
    exports.FabricDrawerService = FabricDrawerService;
    exports.FabricDropdownModule = FabricDropdownModule;
    exports.FabricInlineDialogModule = FabricInlineDialogModule;
    exports.FabricInlineDialogService = FabricInlineDialogService;
    exports.FabricInputComponent = FabricInputComponent;
    exports.FabricInputModule = FabricInputModule;
    exports.FabricMessageModule = FabricMessageModule;
    exports.FabricMessageService = FabricMessageService;
    exports.FabricModalThemeService = FabricModalThemeService;
    exports.FabricModule = FabricModule;
    exports.FabricNestedDialogComponent = FabricNestedDialogComponent;
    exports.FabricNotificationModule = FabricNotificationModule;
    exports.FabricNotificationPosition = FabricNotificationPosition;
    exports.FabricNotificationService = FabricNotificationService;
    exports.FabricPlacement = FabricPlacement;
    exports.FabricProgressBarModule = FabricProgressBarModule;
    exports.FabricProgressSpinnerModule = FabricProgressSpinnerModule;
    exports.FabricRadioButtonModule = FabricRadioButtonModule;
    exports.FabricRadioGroupModule = FabricRadioGroupModule;
    exports.FabricRatingModule = FabricRatingModule;
    exports.FabricSelectModule = FabricSelectModule;
    exports.FabricSliderModule = FabricSliderModule;
    exports.FabricSpinnerModule = FabricSpinnerModule;
    exports.FabricTabModule = FabricTabModule;
    exports.FabricToggleButtonGroupModule = FabricToggleButtonGroupModule;
    exports.FabricToggleButtonModule = FabricToggleButtonModule;
    exports.FabricTooltipModule = FabricTooltipModule;
    exports.Placement = Placement;
    exports.SpinnerMode = SpinnerMode;
    exports.Theme = Theme;
    exports.ɵa = FabricBadgeComponent;
    exports.ɵb = Indicator;
    exports.ɵba = FabricDatePickerViewPanelComponent;
    exports.ɵbb = FabricTimePickerComponent;
    exports.ɵbc = FabricCloseIconModule;
    exports.ɵbd = selector;
    exports.ɵbe = FabricCloseIconComponent;
    exports.ɵbf = FabricDrawerComponent;
    exports.ɵbg = DialogService;
    exports.ɵbh = FabricDropdownComponent;
    exports.ɵbi = GeometryService;
    exports.ɵbj = DropdownItemComponent;
    exports.ɵbk = FabricDialogComponent;
    exports.ɵbl = FabricRadioButtonComponent;
    exports.ɵbm = FabricRadioGroupComponent;
    exports.ɵbn = StarIconModule;
    exports.ɵbo = StarIconComponent;
    exports.ɵbp = FabricRatingComponent;
    exports.ɵbq = FabricNotificationsOverlayComponent;
    exports.ɵbr = FabricModal;
    exports.ɵbs = FabricNotificationsContainerComponent;
    exports.ɵbt = FabricNotificationComponent;
    exports.ɵbu = FabricMessageComponent;
    exports.ɵbv = FabricSvgTemplateModule;
    exports.ɵbw = FabricSvgTemplate;
    exports.ɵbx = FabricTabComponent;
    exports.ɵby = TabItemComponent;
    exports.ɵbz = FabricTooltipDirective;
    exports.ɵc = FabricButtonGroupComponent;
    exports.ɵca = FabricTooltipComponent;
    exports.ɵcb = FabricProgressBarComponent;
    exports.ɵcc = FabricProgressSpinnerComponent;
    exports.ɵcd = AbstractSpinner;
    exports.ɵce = FabricSelectComponent;
    exports.ɵcf = FabricSelectedOptionsRepository;
    exports.ɵcg = SelectOptionsGeometryService;
    exports.ɵch = SelectOptionModalService;
    exports.ɵci = FabricSelectOptionsComponent;
    exports.ɵcj = FabricSliderComponent;
    exports.ɵck = FabricSpinnerComponent;
    exports.ɵcl = FabricToggleButtonComponent;
    exports.ɵcm = ToggleButtonGroupService;
    exports.ɵcn = FabricToggleButtonGroupComponent;
    exports.ɵd = FabricCardComponent;
    exports.ɵe = FabricInlineDialogComponent;
    exports.ɵf = FabricThemedComponent;
    exports.ɵg = FabricReactive;
    exports.ɵh = InlineDialogGeometryService;
    exports.ɵi = themeToken;
    exports.ɵj = DatePickerIconModule;
    exports.ɵk = DatePickerIconComponent;
    exports.ɵl = FabricArrowIconModule;
    exports.ɵm = FabricArrowIconComponent;
    exports.ɵn = FabricDatePickerCalendarComponent;
    exports.ɵo = FabricDatePickerService;
    exports.ɵp = FabricDatePickerCompositionService;
    exports.ɵq = FabricDatePickerWeeks;
    exports.ɵr = FabricDatePickerYears;
    exports.ɵs = FabricDatePickerYearsService;
    exports.ɵt = FabricDatePickerCalendarService;
    exports.ɵu = FabricDatePickerCalendarViewService;
    exports.ɵv = FabricDatePickerComponent;
    exports.ɵw = FabricDatePickerInlineDialogService;
    exports.ɵx = FabricDatePickerDaysViewComponent;
    exports.ɵy = FabricDatePickerMonthsViewComponent;
    exports.ɵz = FabricDatePickerYearsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=generic-ui-fabric.umd.js.map
