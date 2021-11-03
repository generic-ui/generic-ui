(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@generic-ui/fabric', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs/operators', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["generic-ui"] = global["generic-ui"] || {}, global["generic-ui"].fabric = {}), global.ng.core, global.ng.common, global.ng.forms, global.rxjs.operators, global.rxjs));
})(this, (function (exports, i0, i1, i1$1, operators, rxjs) { 'use strict';

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
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);

    exports.Theme = void 0;
    (function (Theme) {
        Theme["FABRIC"] = "FABRIC";
        Theme["MATERIAL"] = "MATERIAL";
        Theme["GENERIC"] = "GENERIC";
        Theme["LIGHT"] = "LIGHT";
        Theme["DARK"] = "DARK";
    })(exports.Theme || (exports.Theme = {}));

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

    var Indicator = /** @class */ (function () {
        function Indicator(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.outline = false;
            this.PRIMARY_CLASS_NAME = 'gui-primary';
            this.SECONDARY_CLASS_NAME = 'gui-secondary';
            this.OUTLINE_CLASS_NAME = 'gui-outline';
        }
        Indicator.prototype.ngOnChanges = function (changes) {
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
        Indicator.prototype.addClass = function (className) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        };
        Indicator.prototype.removeClass = function (className) {
            this.renderer.removeClass(this.elementRef.nativeElement, className);
        };
        return Indicator;
    }());
    Indicator.ɵfac = function Indicator_Factory(t) { return new (t || Indicator)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    Indicator.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: Indicator, inputs: { primary: "primary", secondary: "secondary", outline: "outline" }, features: [i0__namespace.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(Indicator, [{
                type: i0.Directive
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; }, { primary: [{
                    type: i0.Input
                }], secondary: [{
                    type: i0.Input
                }], outline: [{
                    type: i0.Input
                }] });
    })();

    var _c0$n = ["*"];
    var FabricBadgeComponent = /** @class */ (function (_super) {
        __extends(FabricBadgeComponent, _super);
        function FabricBadgeComponent(elementRef, renderer) {
            return _super.call(this, elementRef, renderer) || this;
        }
        return FabricBadgeComponent;
    }(Indicator));
    FabricBadgeComponent.ɵfac = function FabricBadgeComponent_Factory(t) { return new (t || FabricBadgeComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    FabricBadgeComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricBadgeComponent, selectors: [["gui-badge"]], hostVars: 2, hostBindings: function FabricBadgeComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-badge", true);
            }
        }, features: [i0__namespace.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$n, decls: 1, vars: 0, template: function FabricBadgeComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵprojection(0);
            }
        }, styles: [".gui-badge{background:#e6e6e6;border-radius:4px;color:#595959;display:inline-block;font-family:Arial;font-size:12px;font-weight:bold;margin:0 0 0 2px;padding:4px 9.6px;position:relative;-ms-transform:translateX(-70%) translateY(-80%);transform:translate(-70%) translateY(-80%);z-index:1}.gui-badge.gui-primary{background:#2185d0;color:#fff}.gui-badge.gui-primary.gui-outline{color:#2185d0}.gui-badge.gui-primary:hover{background:#1e77ba}.gui-badge.gui-primary:active{background:#1a69a4;color:#fff}.gui-badge.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-badge.gui-primary.gui-badge{background:#439de1}.gui-badge.gui-secondary{background:#3cb371;color:#fff}.gui-badge.gui-secondary.gui-outline{color:#3cb371}.gui-badge.gui-secondary.gui-button:hover{background:#36a065}.gui-badge.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-badge.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-badge.gui-secondary.gui-badge{background:#5ac88b}.gui-badge.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-badge.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-badge.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-badge.gui-outline.gui-badge{background:#fff}.gui-badge.gui-outline.gui-primary{border-color:#439de1}.gui-badge.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-badge.gui-outline.gui-secondary{border-color:#5ac88b}.gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}\n", ".gui-material .gui-badge{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}.gui-material .gui-badge.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-badge.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-badge.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-badge.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-badge.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-badge.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-badge.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-badge.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-badge.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-badge.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-badge.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-badge.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-badge.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-badge.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-badge.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-badge.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-badge.gui-outline.gui-badge{background:#fff}.gui-material .gui-badge.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-badge.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}\n", ".gui-dark .gui-badge{background:#333;color:#bdbdbd}.gui-dark .gui-badge.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-badge.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-badge.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-badge.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-badge.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-badge.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-badge.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-badge.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-badge.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-badge.gui-outline.gui-badge{background:#121212}.gui-dark .gui-badge.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-badge.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-badge.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricBadgeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-badge',
                        templateUrl: 'badge.component.html',
                        styleUrls: [
                            './badge.ngx.scss',
                            './themes/badge.material.ngx.scss',
                            './themes/badge.dark.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-badge]': 'true'
                        }
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; }, null);
    })();

    var FabricBadgeModule = /** @class */ (function () {
        function FabricBadgeModule() {
        }
        return FabricBadgeModule;
    }());
    FabricBadgeModule.ɵfac = function FabricBadgeModule_Factory(t) { return new (t || FabricBadgeModule)(); };
    FabricBadgeModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricBadgeModule });
    FabricBadgeModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricBadgeModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricBadgeComponent
                        ],
                        exports: [
                            FabricBadgeComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricBadgeModule, { declarations: [FabricBadgeComponent], imports: [i1.CommonModule], exports: [FabricBadgeComponent] }); })();

    var _c0$m = ["gui-button", ""];
    var _c1$4 = ["*"];
    var FabricButtonComponent = /** @class */ (function (_super) {
        __extends(FabricButtonComponent, _super);
        function FabricButtonComponent(elementRef, renderer) {
            var _this = _super.call(this, elementRef, renderer) || this;
            _this.link = false;
            _this.text = false;
            return _this;
        }
        FabricButtonComponent.prototype.ngOnChanges = function (changes) {
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
        return FabricButtonComponent;
    }(Indicator));
    FabricButtonComponent.ɵfac = function FabricButtonComponent_Factory(t) { return new (t || FabricButtonComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    FabricButtonComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricButtonComponent, selectors: [["button", "gui-button", ""], ["a", "gui-button", ""]], hostVars: 2, hostBindings: function FabricButtonComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-button", true);
            }
        }, inputs: { link: "link", text: "text" }, features: [i0__namespace.ɵɵInheritDefinitionFeature, i0__namespace.ɵɵNgOnChangesFeature], attrs: _c0$m, ngContentSelectors: _c1$4, decls: 1, vars: 0, template: function FabricButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵprojection(0);
            }
        }, styles: [".gui-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-align:start;align-items:flex-start;background:#e6e6e6;border-radius:4px;border-style:none;box-sizing:border-box;color:#595959;cursor:pointer;display:inline-block;font-family:Arial;font-size:13.3333px;letter-spacing:normal;outline:none;padding:10px 20px;text-align:center;text-indent:0;text-rendering:auto;text-shadow:none;text-transform:none;transition:background .2s;word-spacing:normal;-ms-writing-mode:lr-tb!important;writing-mode:horizontal-tb!important}.gui-button.gui-outline:focus{box-shadow:0 0 0 2px #d6d6d6}.gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #439de1}.gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #5ac88b}.gui-button.gui-primary{background:#2185d0;color:#fff}.gui-button.gui-primary.gui-outline{color:#2185d0}.gui-button.gui-primary:hover{background:#1e77ba}.gui-button.gui-primary:active{background:#1a69a4;color:#fff}.gui-button.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-button.gui-primary.gui-badge{background:#439de1}.gui-button.gui-secondary{background:#3cb371;color:#fff}.gui-button.gui-secondary.gui-outline{color:#3cb371}.gui-button.gui-secondary.gui-button:hover{background:#36a065}.gui-button.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-button.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-button.gui-secondary.gui-badge{background:#5ac88b}.gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-button.gui-link:focus{text-decoration:underline}.gui-button.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-button.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-button.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-button.gui-outline.gui-badge{background:#fff}.gui-button.gui-outline.gui-primary{border-color:#439de1}.gui-button.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-button.gui-outline.gui-secondary{border-color:#5ac88b}.gui-button.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}.gui-button.gui-text{background:transparent;border:0}.gui-button.gui-text:hover{background:#e6e6e6}.gui-button.gui-text:focus{background:#e6e6e6}.gui-button.gui-text.gui-primary{color:#2185d0}.gui-button.gui-text.gui-primary:hover{background:#2185d0;color:#fff}.gui-button.gui-text.gui-primary:focus{background:#2185d0;color:#fff}.gui-button.gui-text.gui-secondary{color:#3cb371}.gui-button.gui-text.gui-secondary:hover{background:#3cb371;color:#fff}.gui-button.gui-text.gui-secondary:focus{background:#3cb371;color:#fff}.gui-button.gui-text.gui-button:disabled{background:transparent}.gui-button.gui-text.gui-button:disabled .gui-text-disabled{display:inline-block}.gui-button:hover{background:#cccccc;color:#333}.gui-button:active{background:#999;color:#333}.gui-button:disabled{color:#ccc;cursor:default;pointer-events:none}\n", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-button.gui-outline:focus{box-shadow:0 0 0 2px #616161}.gui-dark .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #ce93d8}.gui-dark .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #80cbc4}.gui-dark .gui-button.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-button.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-button.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-button.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-button.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-button.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-button.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-button.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-button.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-button.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-button.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-button.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-dark .gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-dark .gui-button.gui-link:focus{text-decoration:underline}.gui-dark .gui-button.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-button.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-button.gui-outline.gui-badge{background:#121212}.gui-dark .gui-button.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-button.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-button.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-button.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}.gui-dark .gui-button:hover{background:#616161}.gui-dark .gui-button:active{background:#212121}.gui-dark .gui-button:disabled{opacity:.36}\n", ".gui-light .gui-button{background:#f6f5f4;border-color:#d8d7d6;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light .gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-light .gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-light .gui-button.gui-link:focus{text-decoration:underline}.gui-light .gui-button:hover{background:#ecebeb}.gui-light .gui-button:active{background:#f6f5f4}.gui-light .gui-button:disabled{opacity:.5}\n", ".gui-material .gui-button{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-button.gui-outline:focus{box-shadow:0 0 0 1px #5262c5}.gui-material .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 1px #6200ee}.gui-material .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 1px #0097a7}.gui-material .gui-button.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-button.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-button.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-button.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-button.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-button.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-button.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-button.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-button.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-button.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-button.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-button.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-button.gui-link{background:transparent;border:0;color:#3949ab}.gui-material .gui-button.gui-link:hover{color:#4051bf}.gui-material .gui-button.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-button.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-button.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-button.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-button.gui-outline.gui-badge{background:#fff}.gui-material .gui-button.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-button.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}.gui-material .gui-button:hover{background:#5262c5}.gui-material .gui-button:active{background:#4051bf}.gui-material .gui-button:disabled{background:#c5cae9;color:#7885d2}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'button[gui-button], a[gui-button]',
                        templateUrl: './button.component.html',
                        styleUrls: [
                            './button.ngx.scss',
                            './themes/button.dark.ngx.scss',
                            './themes/button.light.ngx.scss',
                            './themes/button.material.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-button]': 'true'
                        }
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; }, { link: [{
                    type: i0.Input
                }], text: [{
                    type: i0.Input
                }] });
    })();

    var FabricButtonModule = /** @class */ (function () {
        function FabricButtonModule() {
        }
        return FabricButtonModule;
    }());
    FabricButtonModule.ɵfac = function FabricButtonModule_Factory(t) { return new (t || FabricButtonModule)(); };
    FabricButtonModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricButtonModule });
    FabricButtonModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricButtonModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricButtonComponent
                        ],
                        exports: [
                            FabricButtonComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricButtonModule, { declarations: [FabricButtonComponent], imports: [i1.CommonModule], exports: [FabricButtonComponent] }); })();

    var _c0$l = ["*"];
    var FabricButtonGroupComponent = /** @class */ (function () {
        function FabricButtonGroupComponent() {
        }
        return FabricButtonGroupComponent;
    }());
    FabricButtonGroupComponent.ɵfac = function FabricButtonGroupComponent_Factory(t) { return new (t || FabricButtonGroupComponent)(); };
    FabricButtonGroupComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricButtonGroupComponent, selectors: [["gui-button-group"]], hostVars: 2, hostBindings: function FabricButtonGroupComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-button-group", true);
            }
        }, ngContentSelectors: _c0$l, decls: 1, vars: 0, template: function FabricButtonGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵprojection(0);
            }
        }, styles: [".gui-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-button-group .gui-button{border-radius:0}.gui-button-group .gui-button:not(:last-child){border-right:none;margin:0}.gui-button-group .gui-button:last-child{border-radius:0 4px 4px 0}.gui-button-group .gui-button:first-child{border-radius:4px 0 0 4px}.gui-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricButtonGroupComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-button-group',
                        templateUrl: './button-group.component.html',
                        styleUrls: [
                            './button-group.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-button-group]': 'true'
                        }
                    }]
            }], null, null);
    })();

    var FabricButtonGroupModule = /** @class */ (function () {
        function FabricButtonGroupModule() {
        }
        return FabricButtonGroupModule;
    }());
    FabricButtonGroupModule.ɵfac = function FabricButtonGroupModule_Factory(t) { return new (t || FabricButtonGroupModule)(); };
    FabricButtonGroupModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricButtonGroupModule });
    FabricButtonGroupModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricButtonGroupModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricButtonGroupComponent
                        ],
                        exports: [
                            FabricButtonGroupComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricButtonGroupModule, { declarations: [FabricButtonGroupComponent], imports: [i1.CommonModule], exports: [FabricButtonGroupComponent] }); })();

    var _c0$k = function (a0) { return { "gui-card-content-block-item": a0 }; };
    function FabricCardComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var block_r1 = ctx.$implicit;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(2, _c0$k, ctx_r0.isContentBlockEnabled()));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", block_r1, " ");
        }
    }
    var _c1$3 = function (a0) { return { "gui-card-img": a0 }; };
    var _c2$2 = function (a0) { return { "gui-card-title": a0 }; };
    var _c3$1 = function (a0) { return { "gui-card-content-block": a0 }; };
    var _c4 = ["*"];
    var FabricCardComponent = /** @class */ (function () {
        function FabricCardComponent() {
            this.contentBlock = [];
        }
        FabricCardComponent.prototype.isTitleEnabled = function () {
            return !!this.title;
        };
        FabricCardComponent.prototype.isImgEnabled = function () {
            return !!this.image;
        };
        FabricCardComponent.prototype.isContentBlockEnabled = function () {
            return !!this.contentBlock;
        };
        return FabricCardComponent;
    }());
    FabricCardComponent.ɵfac = function FabricCardComponent_Factory(t) { return new (t || FabricCardComponent)(); };
    FabricCardComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricCardComponent, selectors: [["gui-card"]], hostVars: 2, hostBindings: function FabricCardComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-card", true);
            }
        }, inputs: { title: "title", image: "image", alt: "alt", contentBlock: "contentBlock" }, ngContentSelectors: _c4, decls: 9, vars: 13, consts: [[1, "gui-card-body"], [1, "gui-card-image-wrapper"], [3, "ngClass", "alt", "src"], [3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "gui-content"]], template: function FabricCardComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵelement(2, "img", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "div", 3);
                i0__namespace.ɵɵtext(4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "div", 3);
                i0__namespace.ɵɵtemplate(6, FabricCardComponent_div_6_Template, 2, 4, "div", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "div", 5);
                i0__namespace.ɵɵprojection(8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵpropertyInterpolate("alt", ctx.alt);
                i0__namespace.ɵɵpropertyInterpolate("src", ctx.image, i0__namespace.ɵɵsanitizeUrl);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(7, _c1$3, ctx.isImgEnabled()));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(9, _c2$2, ctx.isTitleEnabled()));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.title, " ");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(11, _c3$1, ctx.isContentBlockEnabled()));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.contentBlock);
            }
        }, directives: [i1__namespace.NgClass, i1__namespace.NgForOf], styles: [".gui-card .gui-card-img{border-radius:4px 4px 0 0;height:auto;margin:0 0 12px;width:350px}.gui-card .gui-card-body{background:#fff;border-radius:4px;box-shadow:0 1px 3px #999;box-sizing:border-box;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;margin:0;padding:0 0 20px;transition:transform .3s ease-in-out;width:350px}.gui-card .gui-card-body:hover{box-shadow:0 3px 6px -4px rgba(0,0,0,.122),0 6px 16px rgba(0,0,0,.078),0 9px 28px 8px rgba(0,0,0,.051)}.gui-card .gui-card-body .gui-card-title{font-size:20px;font-weight:bold;margin:0 0 12px;padding:0 20px}.gui-card .gui-card-body .gui-card-content-block{margin:0 0 12px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#d6d6d6;border-top-style:solid;border-top-width:1px;padding:12px 20px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#d6d6d6;border-bottom-style:solid;border-bottom-width:1px}.gui-card .gui-card-body .gui-content{padding:0 20px}\n", ".gui-material .gui-card .gui-card-body{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-card .gui-card-body{background:#121212;border-color:#616161;color:#bdbdbd}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#616161}.gui-dark .gui-content-block .gui-card-content-block{border-color:#616161}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricCardComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-card',
                        templateUrl: './card.component.html',
                        styleUrls: [
                            './card.ngx.scss',
                            './themes/card.material.ngx.scss',
                            './themes/card.dark.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-card]': 'true'
                        }
                    }]
            }], null, { title: [{
                    type: i0.Input
                }], image: [{
                    type: i0.Input
                }], alt: [{
                    type: i0.Input
                }], contentBlock: [{
                    type: i0.Input
                }] });
    })();

    var FabricCardModule = /** @class */ (function () {
        function FabricCardModule() {
        }
        return FabricCardModule;
    }());
    FabricCardModule.ɵfac = function FabricCardModule_Factory(t) { return new (t || FabricCardModule)(); };
    FabricCardModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricCardModule });
    FabricCardModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricCardModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricCardComponent
                        ],
                        exports: [
                            FabricCardComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricCardModule, { declarations: [FabricCardComponent], imports: [i1.CommonModule], exports: [FabricCardComponent] }); })();

    var _c0$j = ["input"];
    var _c1$2 = ["*"];
    var FabricCheckboxComponent = /** @class */ (function () {
        function FabricCheckboxComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.disabled = false;
            this.readonly = false;
            this.indeterminate = false;
            this.changed = new i0.EventEmitter();
            this.checked = false;
        }
        FabricCheckboxComponent.prototype.ngOnChanges = function (changes) {
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
        FabricCheckboxComponent.prototype.ngAfterViewInit = function () {
            this.inputRef.nativeElement.indeterminate = this.indeterminate;
        };
        FabricCheckboxComponent.prototype.check = function (event) {
            event.stopPropagation();
            this.checked = !this.checked;
            this.changed.emit(this.checked);
        };
        return FabricCheckboxComponent;
    }());
    FabricCheckboxComponent.ɵfac = function FabricCheckboxComponent_Factory(t) { return new (t || FabricCheckboxComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    FabricCheckboxComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricCheckboxComponent, selectors: [["gui-checkbox"]], viewQuery: function FabricCheckboxComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$j, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.inputRef = _t.first);
            }
        }, hostVars: 2, hostBindings: function FabricCheckboxComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-checkbox", true);
            }
        }, inputs: { name: "name", inputChecked: ["checked", "inputChecked"], disabled: "disabled", readonly: "readonly", indeterminate: "indeterminate" }, outputs: { changed: "changed" }, features: [i0__namespace.ɵɵNgOnChangesFeature], ngContentSelectors: _c1$2, decls: 5, vars: 3, consts: [["type", "checkbox", 3, "checked", "disabled", "name", "click"], ["input", ""], [1, "gui-checkmark"]], template: function FabricCheckboxComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "label");
                i0__namespace.ɵɵelementStart(1, "input", 0, 1);
                i0__namespace.ɵɵlistener("click", function FabricCheckboxComponent_Template_input_click_1_listener($event) { return ctx.check($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "span", 2);
                i0__namespace.ɵɵprojection(4);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled)("name", ctx.name);
            }
        }, styles: [".gui-checkbox{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:24px;padding-left:32px;position:relative}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{height:0;opacity:0;position:absolute;width:0}.gui-checkbox .gui-checkmark{border-color:#575757;border-radius:4px;border-style:solid;border-width:2px;box-sizing:content-box;height:20px;left:0;position:absolute;width:20px}.gui-checkbox input:checked+.gui-checkmark{border-color:#575757}.gui-checkbox.gui-disabled.gui-checkbox{color:#ccc;pointer-events:none}.gui-checkbox.gui-readonly.gui-checkbox{pointer-events:none}.gui-checkbox .gui-checkmark:after{content:\" \";display:none;left:6px;position:absolute;-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-checkbox input:checked+.gui-checkmark:after{box-sizing:content-box;display:block}.gui-checkbox .gui-checkmark:after{border-color:#575757;border-style:solid;border-width:0 3.2px 3.2px 0;height:12px;width:5.2px}.gui-checkbox input:indeterminate+.gui-checkmark:after{display:block;height:10px;left:9px;top:4px;-ms-transform:rotate(90deg);transform:rotate(90deg);width:0}\n", ".gui-material .gui-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox label:hover .gui-checkmark{border-color:#575757}.gui-material .gui-checkbox .gui-checkmark{border-color:#999}.gui-material .gui-checkbox input:checked+.gui-checkmark{background:#3949ab;border-color:#3949ab}.gui-material .gui-checkbox .gui-checkmark:after{border-color:#fff}.gui-material .gui-checkbox.gui-indeterminate .gui-checkmark{background:#3949ab;border-color:#3949ab}\n", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox .gui-checkmark:after{border-color:#878787}.gui-dark .gui-checkbox.gui-disabled.gui-checkbox{opacity:.36}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricCheckboxComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-checkbox',
                        templateUrl: './checkbox.component.html',
                        styleUrls: [
                            './checkbox.ngx.scss',
                            './themes/checkbox.material.ngx.scss',
                            './themes/checkbox.dark.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-checkbox]': 'true'
                        }
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; }, { inputRef: [{
                    type: i0.ViewChild,
                    args: ['input', { static: false }]
                }], name: [{
                    type: i0.Input
                }], inputChecked: [{
                    type: i0.Input,
                    args: ['checked']
                }], disabled: [{
                    type: i0.Input
                }], readonly: [{
                    type: i0.Input
                }], indeterminate: [{
                    type: i0.Input
                }], changed: [{
                    type: i0.Output
                }] });
    })();

    var FabricCheckboxModule = /** @class */ (function () {
        function FabricCheckboxModule() {
        }
        return FabricCheckboxModule;
    }());
    FabricCheckboxModule.ɵfac = function FabricCheckboxModule_Factory(t) { return new (t || FabricCheckboxModule)(); };
    FabricCheckboxModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricCheckboxModule });
    FabricCheckboxModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricCheckboxModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricCheckboxComponent
                        ],
                        exports: [
                            FabricCheckboxComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricCheckboxModule, { declarations: [FabricCheckboxComponent], imports: [i1.CommonModule], exports: [FabricCheckboxComponent] }); })();

    var _c0$i = ["*"];
    var FabricChipComponent = /** @class */ (function (_super) {
        __extends(FabricChipComponent, _super);
        function FabricChipComponent(elementRef, renderer) {
            return _super.call(this, elementRef, renderer) || this;
        }
        return FabricChipComponent;
    }(Indicator));
    FabricChipComponent.ɵfac = function FabricChipComponent_Factory(t) { return new (t || FabricChipComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    FabricChipComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricChipComponent, selectors: [["gui-chip"]], hostVars: 2, hostBindings: function FabricChipComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-chip", true);
            }
        }, features: [i0__namespace.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$i, decls: 1, vars: 0, template: function FabricChipComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵprojection(0);
            }
        }, styles: [".gui-chip{background:#e6e6e6;border-radius:4px;box-sizing:border-box;color:#595959;display:inline-block;font-family:Arial;font-size:14px;font-weight:bold;margin:0 2px;padding:9.6px 12px}.gui-chip.gui-primary{background:#2185d0;color:#fff}.gui-chip.gui-primary.gui-outline{color:#2185d0}.gui-chip.gui-primary:hover{background:#1e77ba}.gui-chip.gui-primary:active{background:#1a69a4;color:#fff}.gui-chip.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-chip.gui-primary.gui-badge{background:#439de1}.gui-chip.gui-secondary{background:#3cb371;color:#fff}.gui-chip.gui-secondary.gui-outline{color:#3cb371}.gui-chip.gui-secondary.gui-button:hover{background:#36a065}.gui-chip.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-chip.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-chip.gui-secondary.gui-badge{background:#5ac88b}.gui-chip.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-chip.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-chip.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-chip.gui-outline.gui-badge{background:#fff}.gui-chip.gui-outline.gui-primary{border-color:#439de1}.gui-chip.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-chip.gui-outline.gui-secondary{border-color:#5ac88b}.gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}\n", ".gui-material .gui-chip{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-chip.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-chip.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-chip.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-chip.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-chip.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-chip.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-chip.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-chip.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-chip.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-chip.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-chip.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-chip.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-chip.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-chip.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-chip.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-chip.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-chip.gui-outline.gui-badge{background:#fff}.gui-material .gui-chip.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-chip.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}\n", ".gui-dark .gui-chip{background:#333;color:#bdbdbd}.gui-dark .gui-chip.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-chip.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-chip.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-chip.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-chip.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-chip.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-chip.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-chip.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-chip.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-chip.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-chip.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-chip.gui-outline.gui-badge{background:#121212}.gui-dark .gui-chip.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-chip.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-chip.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}\n", ".gui-light .gui-chip{background:#f6f5f4;border-color:#333;border-style:solid;border-width:1px;color:#333}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricChipComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-chip',
                        templateUrl: 'chip.component.html',
                        styleUrls: [
                            './chip.ngx.scss',
                            './themes/chip.material.ngx.scss',
                            './themes/chip.dark.ngx.scss',
                            './themes/chip.light.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-chip]': 'true'
                        }
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; }, null);
    })();

    var FabricChipModule = /** @class */ (function () {
        function FabricChipModule() {
        }
        return FabricChipModule;
    }());
    FabricChipModule.ɵfac = function FabricChipModule_Factory(t) { return new (t || FabricChipModule)(); };
    FabricChipModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricChipModule });
    FabricChipModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricChipModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricChipComponent
                        ],
                        exports: [
                            FabricChipComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricChipModule, { declarations: [FabricChipComponent], imports: [i1.CommonModule], exports: [FabricChipComponent] }); })();

    var FabricReactive = /** @class */ (function () {
        function FabricReactive() {
            this.unsubscribe$ = new rxjs.Subject();
        }
        FabricReactive.prototype.ngOnDestroy = function () {
            this.unsubscribe();
        };
        FabricReactive.prototype.unsubscribe = function () {
            if (this.unsubscribe$.isStopped) {
                return;
            }
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        };
        FabricReactive.prototype.takeUntil = function () {
            return operators.takeUntil(this.unsubscribe$);
        };
        return FabricReactive;
    }());
    FabricReactive.ɵfac = function FabricReactive_Factory(t) { return new (t || FabricReactive)(); };
    FabricReactive.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: FabricReactive });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricReactive, [{
                type: i0.Directive
            }], function () { return []; }, null);
    })();

    var FabricCalendarView;
    (function (FabricCalendarView) {
        FabricCalendarView[FabricCalendarView["DAYS"] = 0] = "DAYS";
        FabricCalendarView[FabricCalendarView["MONTHS"] = 1] = "MONTHS";
        FabricCalendarView[FabricCalendarView["YEARS"] = 2] = "YEARS";
    })(FabricCalendarView || (FabricCalendarView = {}));

    var FabricDatePickerComposition;
    (function (FabricDatePickerComposition) {
        FabricDatePickerComposition[FabricDatePickerComposition["NONE"] = 0] = "NONE";
        FabricDatePickerComposition[FabricDatePickerComposition["DATE_PICKER"] = 1] = "DATE_PICKER";
        FabricDatePickerComposition[FabricDatePickerComposition["TIME_PICKER"] = 2] = "TIME_PICKER";
        FabricDatePickerComposition[FabricDatePickerComposition["TIME_PICKER_HOURS"] = 4] = "TIME_PICKER_HOURS";
        FabricDatePickerComposition[FabricDatePickerComposition["TIME_PICKER_MINUTES"] = 8] = "TIME_PICKER_MINUTES";
        FabricDatePickerComposition[FabricDatePickerComposition["TIME_PICKER_SECONDS"] = 16] = "TIME_PICKER_SECONDS";
        FabricDatePickerComposition[FabricDatePickerComposition["TIME_PICKER_MERIDIAN"] = 32] = "TIME_PICKER_MERIDIAN";
        FabricDatePickerComposition[FabricDatePickerComposition["ALL"] = 63] = "ALL";
    })(FabricDatePickerComposition || (FabricDatePickerComposition = {}));

    var FabricDatePickerService = /** @class */ (function () {
        function FabricDatePickerService() {
            this.selectedDate = new Date();
            this.selectedDate$ = new rxjs.BehaviorSubject(this.selectedDate);
        }
        FabricDatePickerService.prototype.observeSelectedDate = function () {
            return this.selectedDate$.asObservable();
        };
        FabricDatePickerService.prototype.dateSelected = function (date) {
            this.selectedDate = new Date(date.getTime());
            this.setSelectedDateTime();
            this.selectedDate$.next(this.selectedDate);
        };
        FabricDatePickerService.prototype.changeTime = function (timeValues, date) {
            this.selectedTime = timeValues;
            if (!this.selectedDate) {
                this.selectedDate = date;
            }
            this.setSelectedDateTime();
        };
        FabricDatePickerService.prototype.next = function () {
            this.dateSelected(this.selectedDate);
        };
        FabricDatePickerService.prototype.setSelectedDateTime = function () {
            if (this.selectedTime) {
                this.selectedDate.setHours(this.selectedTime.hours);
                this.selectedDate.setMinutes(this.selectedTime.minutes);
                this.selectedDate.setSeconds(this.selectedTime.seconds);
            }
        };
        return FabricDatePickerService;
    }());
    FabricDatePickerService.ɵfac = function FabricDatePickerService_Factory(t) { return new (t || FabricDatePickerService)(); };
    FabricDatePickerService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricDatePickerService, factory: FabricDatePickerService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FabricDatePickerCompositionService = /** @class */ (function () {
        function FabricDatePickerCompositionService() {
            this.datePickerFormat$ = new rxjs.BehaviorSubject(FabricDatePickerComposition.DATE_PICKER);
        }
        FabricDatePickerCompositionService.prototype.onComposition = function () {
            return this.datePickerFormat$.asObservable();
        };
        FabricDatePickerCompositionService.prototype.next = function (datePipeOptions) {
            this.datePickerFormat$.next(this.getComposition(datePipeOptions));
        };
        FabricDatePickerCompositionService.prototype.getComposition = function (datePipeOptions) {
            var removeDoubles = datePipeOptions.split(':').join(' '), removeDash = removeDoubles.split('/').join(' '), removeDot = removeDash.split('.').join(' '), removeComa = removeDot.split(',').join(' '), formatArray = removeComa.split(' ');
            var composition;
            formatArray.forEach(function (formatItem) {
                var isDays = formatItem.toLowerCase().includes('d'), isMonths = formatItem.includes('M'), isYears = formatItem.toLowerCase().includes('y'), showHours = formatItem.toLowerCase().includes('h'), showMinutes = formatItem.includes('m'), showSeconds = formatItem.toLowerCase().includes('s'), isMeridian = formatItem.includes('h'), showDatePicker = isDays || isMonths || isYears, showTimePicker = showHours || showMinutes || showSeconds;
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
            });
            return composition;
        };
        return FabricDatePickerCompositionService;
    }());
    FabricDatePickerCompositionService.ɵfac = function FabricDatePickerCompositionService_Factory(t) { return new (t || FabricDatePickerCompositionService)(); };
    FabricDatePickerCompositionService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricDatePickerCompositionService, factory: FabricDatePickerCompositionService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerCompositionService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FabricDatePickerWeeks = /** @class */ (function () {
        function FabricDatePickerWeeks() {
        }
        FabricDatePickerWeeks.prototype.getDaysInMonths = function (year, month) {
            this.resetWeeks();
            var numberOfDaysInMonth = (new Date(year, month + 1, 0)).getDate();
            for (var i = 1; i <= numberOfDaysInMonth; i++) {
                this.createWeeks(new Date(year, month, i));
            }
            return this.weeks;
        };
        FabricDatePickerWeeks.prototype.createWeeks = function (date) {
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
        FabricDatePickerWeeks.prototype.createWeek = function (date, week) {
            for (var i = 1; i <= 7; i++) {
                var isFirstDaySunday = date.getDay() === 0 && this.weeks[0].length === 0;
                var day = void 0;
                if (isFirstDaySunday) {
                    day = date.getDate() - 6;
                }
                else {
                    day = date.getDate() - date.getDay() + i;
                }
                var dayOfWeek = new Date(date.setDate(day));
                if (week.length < 7) {
                    week.push(dayOfWeek);
                }
            }
        };
        FabricDatePickerWeeks.prototype.getLastDayNumber = function (week) {
            if (week.length === 7) {
                return week[week.length - 1].getDate();
            }
            return 0;
        };
        FabricDatePickerWeeks.prototype.getLastDayDate = function (week) {
            var lastDay = week[week.length - 1].getDate();
            return new Date(week[week.length - 1].setDate(lastDay));
        };
        FabricDatePickerWeeks.prototype.resetWeeks = function () {
            this.weeks = [];
            this.weeks[0] = [];
            this.weeks[1] = [];
            this.weeks[2] = [];
            this.weeks[3] = [];
            this.weeks[4] = [];
            this.weeks[5] = [];
        };
        return FabricDatePickerWeeks;
    }());
    FabricDatePickerWeeks.ɵfac = function FabricDatePickerWeeks_Factory(t) { return new (t || FabricDatePickerWeeks)(); };
    FabricDatePickerWeeks.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricDatePickerWeeks, factory: FabricDatePickerWeeks.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerWeeks, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FabricDatePickerYears = /** @class */ (function () {
        function FabricDatePickerYears() {
            this.inc = 10;
        }
        FabricDatePickerYears.prototype.getYears = function (selectedYear) {
            this.minYear = selectedYear - 50;
            this.maxYear = selectedYear + 50;
            var yearsRange = this.maxYear - this.minYear;
            var years = [], rows = [];
            years = this.createYearsPool(this.minYear, yearsRange, years);
            rows = this.divideYearsPool(years, rows);
            return this.rowsForDisplay = this.createRowsForDisplay(rows, selectedYear);
        };
        FabricDatePickerYears.prototype.prevYearRange = function (year) {
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
        FabricDatePickerYears.prototype.nextYearRange = function (year) {
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
        FabricDatePickerYears.prototype.createYearsPool = function (minYear, yearsRange, years) {
            for (var i = 0; i <= yearsRange; i++) {
                years.push(minYear + i);
            }
            return years;
        };
        FabricDatePickerYears.prototype.divideYearsPool = function (years, rows) {
            for (var i = 0; i < years.length; i += 5) {
                rows.push(years.slice(i, i + 5));
            }
            return rows;
        };
        FabricDatePickerYears.prototype.createRowsForDisplay = function (rows, selectedYear) {
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
            return [[]];
        };
        return FabricDatePickerYears;
    }());
    FabricDatePickerYears.ɵfac = function FabricDatePickerYears_Factory(t) { return new (t || FabricDatePickerYears)(); };
    FabricDatePickerYears.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricDatePickerYears, factory: FabricDatePickerYears.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerYears, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FabricDatePickerYearsService = /** @class */ (function () {
        function FabricDatePickerYearsService() {
            this.years$ = new rxjs.Subject();
        }
        FabricDatePickerYearsService.prototype.onYears = function () {
            return this.years$.asObservable();
        };
        FabricDatePickerYearsService.prototype.next = function (years) {
            this.years$.next(years);
        };
        return FabricDatePickerYearsService;
    }());
    FabricDatePickerYearsService.ɵfac = function FabricDatePickerYearsService_Factory(t) { return new (t || FabricDatePickerYearsService)(); };
    FabricDatePickerYearsService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricDatePickerYearsService, factory: FabricDatePickerYearsService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerYearsService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FabricDatePickerCalendarService = /** @class */ (function () {
        function FabricDatePickerCalendarService() {
            this.activeMonth$ = new rxjs.Subject();
            this.activeYear$ = new rxjs.Subject();
        }
        FabricDatePickerCalendarService.prototype.onActiveMonth = function () {
            return this.activeMonth$.asObservable();
        };
        FabricDatePickerCalendarService.prototype.onActiveYear = function () {
            return this.activeYear$.asObservable();
        };
        FabricDatePickerCalendarService.prototype.nextMonth = function (year, month) {
            if (month === 11) {
                this.activeYear$.next(year + 1);
                this.selectMonth(0);
            }
            else {
                this.selectMonth(month + 1);
            }
        };
        FabricDatePickerCalendarService.prototype.prevMonth = function (year, month) {
            if (month === 0) {
                this.activeYear$.next(year - 1);
                this.selectMonth(11);
            }
            else {
                this.selectMonth(month - 1);
            }
        };
        FabricDatePickerCalendarService.prototype.selectYear = function (year) {
            this.activeYear$.next(year);
        };
        FabricDatePickerCalendarService.prototype.selectMonth = function (month) {
            this.activeMonth$.next(month);
        };
        return FabricDatePickerCalendarService;
    }());
    FabricDatePickerCalendarService.ɵfac = function FabricDatePickerCalendarService_Factory(t) { return new (t || FabricDatePickerCalendarService)(); };
    FabricDatePickerCalendarService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricDatePickerCalendarService, factory: FabricDatePickerCalendarService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerCalendarService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FabricDatePickerCalendarViewService = /** @class */ (function () {
        function FabricDatePickerCalendarViewService() {
            this.activeView$ = new rxjs.Subject();
        }
        FabricDatePickerCalendarViewService.prototype.onActiveView = function () {
            return this.activeView$.asObservable();
        };
        FabricDatePickerCalendarViewService.prototype.switchView = function (viewName) {
            this.activeView$.next(viewName);
        };
        return FabricDatePickerCalendarViewService;
    }());
    FabricDatePickerCalendarViewService.ɵfac = function FabricDatePickerCalendarViewService_Factory(t) { return new (t || FabricDatePickerCalendarViewService)(); };
    FabricDatePickerCalendarViewService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricDatePickerCalendarViewService, factory: FabricDatePickerCalendarViewService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerCalendarViewService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FabricCalendarCardView;
    (function (FabricCalendarCardView) {
        FabricCalendarCardView[FabricCalendarCardView["NEXT"] = 0] = "NEXT";
        FabricCalendarCardView[FabricCalendarCardView["PREV"] = 1] = "PREV";
    })(FabricCalendarCardView || (FabricCalendarCardView = {}));

    var Direction;
    (function (Direction) {
        Direction[Direction["TOP"] = -90] = "TOP";
        Direction[Direction["BOTTOM"] = 90] = "BOTTOM";
        Direction[Direction["LEFT"] = 180] = "LEFT";
        Direction[Direction["RIGHT"] = 0] = "RIGHT";
    })(Direction || (Direction = {}));

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

    var FabricArrowIconComponent = /** @class */ (function () {
        function FabricArrowIconComponent() {
            this.direction = Direction.RIGHT;
        }
        return FabricArrowIconComponent;
    }());
    FabricArrowIconComponent.ɵfac = function FabricArrowIconComponent_Factory(t) { return new (t || FabricArrowIconComponent)(); };
    FabricArrowIconComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricArrowIconComponent, selectors: [["gui-arrow-icon"]], hostVars: 4, hostBindings: function FabricArrowIconComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-arrow-icon", true)("gui-icon", true);
            }
        }, inputs: { direction: "direction" }, decls: 2, vars: 2, consts: [["height", "10.661", "viewBox", "0 0 6.081 10.661", "width", "6.081", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M.75.75,5.02,5.02.75,9.29", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "transform", "translate(0.311 0.311)"]], template: function FabricArrowIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(0, "svg", 0);
                i0__namespace.ɵɵelement(1, "path", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleProp("transform", "rotate(" + ctx.direction + "deg)");
            }
        }, styles: [".gui-arrow-icon{cursor:pointer}.gui-arrow-icon svg path{stroke:#aaa;transition:stroke .2s ease-in-out}.gui-arrow-icon:hover svg path{stroke:#464646}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricArrowIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-arrow-icon',
                        templateUrl: 'fabric-arrow-icon.component.html',
                        styleUrls: ['./fabric-arrow-icon.ngx.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-arrow-icon]': 'true',
                            '[class.gui-icon]': 'true'
                        }
                    }]
            }], null, { direction: [{
                    type: i0.Input
                }] });
    })();

    var FabricDatePickerViewPanelComponent = /** @class */ (function () {
        function FabricDatePickerViewPanelComponent(calendarViewService, calendarService, datePickerYearsService, datePickerYears) {
            this.calendarViewService = calendarViewService;
            this.calendarService = calendarService;
            this.datePickerYearsService = datePickerYearsService;
            this.datePickerYears = datePickerYears;
            this.Direction = Direction;
            this.FabricCalendarCardView = FabricCalendarCardView;
        }
        FabricDatePickerViewPanelComponent.prototype.getDisplayedDate = function () {
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
        FabricDatePickerViewPanelComponent.prototype.switchCalendarView = function () {
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
        FabricDatePickerViewPanelComponent.prototype.switchCard = function (cardView) {
            var next = cardView === FabricCalendarCardView.NEXT, inc = next ? 1 : -1, selectedYear = this.activeYear + inc, years = next ?
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
        FabricDatePickerViewPanelComponent.prototype.getDisplayedYearRange = function () {
            return this.years[0][0].toString() + '-' + this.years[4][this.years[4].length - 1].toString();
        };
        FabricDatePickerViewPanelComponent.prototype.handleMonthChange = function (next) {
            if (next) {
                this.calendarService.nextMonth(this.activeYear, this.activeMonth);
            }
            else {
                this.calendarService.prevMonth(this.activeYear, this.activeMonth);
            }
        };
        return FabricDatePickerViewPanelComponent;
    }());
    FabricDatePickerViewPanelComponent.ɵfac = function FabricDatePickerViewPanelComponent_Factory(t) { return new (t || FabricDatePickerViewPanelComponent)(i0__namespace.ɵɵdirectiveInject(FabricDatePickerCalendarViewService), i0__namespace.ɵɵdirectiveInject(FabricDatePickerCalendarService), i0__namespace.ɵɵdirectiveInject(FabricDatePickerYearsService), i0__namespace.ɵɵdirectiveInject(FabricDatePickerYears)); };
    FabricDatePickerViewPanelComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricDatePickerViewPanelComponent, selectors: [["gui-date-picker-view-panel"]], inputs: { fabricCalendarView: "fabricCalendarView", selectedDate: "selectedDate", activeMonth: "activeMonth", activeYear: "activeYear", years: "years" }, decls: 6, vars: 3, consts: [[1, "gui-date-picker-view-panel"], [1, "gui-date-picker-view-panel-date", 3, "click"], [1, "gui-date-picker-arrows"], [1, "gui-date-picker-arrow", 3, "direction", "click"]], template: function FabricDatePickerViewPanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵlistener("click", function FabricDatePickerViewPanelComponent_Template_div_click_1_listener() { return ctx.switchCalendarView(); });
                i0__namespace.ɵɵtext(2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "div", 2);
                i0__namespace.ɵɵelementStart(4, "gui-arrow-icon", 3);
                i0__namespace.ɵɵlistener("click", function FabricDatePickerViewPanelComponent_Template_gui_arrow_icon_click_4_listener() { return ctx.switchCard(ctx.FabricCalendarCardView.PREV); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "gui-arrow-icon", 3);
                i0__namespace.ɵɵlistener("click", function FabricDatePickerViewPanelComponent_Template_gui_arrow_icon_click_5_listener() { return ctx.switchCard(ctx.FabricCalendarCardView.NEXT); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.getDisplayedDate(), " ");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("direction", ctx.Direction.LEFT);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("direction", ctx.Direction.RIGHT);
            }
        }, directives: [FabricArrowIconComponent], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerViewPanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-date-picker-view-panel',
                        template: "\n\t\t<div class=\"gui-date-picker-view-panel\">\n\n\t\t\t<div (click)=\"switchCalendarView()\"\n\t\t\t\t class=\"gui-date-picker-view-panel-date\">\n\t\t\t\t{{getDisplayedDate()}}\n\t\t\t</div>\n\n\t\t\t<div class=\"gui-date-picker-arrows\">\n\t\t\t\t<gui-arrow-icon [direction]=\"Direction.LEFT\"\n\t\t\t\t\t\t\t\t(click)=\"switchCard(FabricCalendarCardView.PREV)\"\n\t\t\t\t\t\t\t\tclass=\"gui-date-picker-arrow\">\n\t\t\t\t</gui-arrow-icon>\n\n\t\t\t\t<gui-arrow-icon [direction]=\"Direction.RIGHT\"\n\t\t\t\t\t\t\t\t(click)=\"switchCard(FabricCalendarCardView.NEXT)\"\n\t\t\t\t\t\t\t\tclass=\"gui-date-picker-arrow\">\n\t\t\t\t</gui-arrow-icon>\n\t\t\t</div>\n\n\t\t</div>\n\t",
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: FabricDatePickerCalendarViewService }, { type: FabricDatePickerCalendarService }, { type: FabricDatePickerYearsService }, { type: FabricDatePickerYears }]; }, { fabricCalendarView: [{
                    type: i0.Input
                }], selectedDate: [{
                    type: i0.Input
                }], activeMonth: [{
                    type: i0.Input
                }], activeYear: [{
                    type: i0.Input
                }], years: [{
                    type: i0.Input
                }] });
    })();

    var daysOfTheWeek = [
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa',
        'Su'
    ];

    var FabricDateUtils = /** @class */ (function () {
        function FabricDateUtils() {
        }
        FabricDateUtils.areDatesSame = function (firstDay, secondDate) {
            return firstDay.getDate() === secondDate.getDate() &&
                firstDay.getMonth() === secondDate.getMonth() &&
                firstDay.getFullYear() === secondDate.getFullYear();
        };
        FabricDateUtils.isMonth = function (date, month, year) {
            return date.getMonth() === month &&
                date.getFullYear() === year;
        };
        return FabricDateUtils;
    }());

    function FabricDatePickerDaysViewComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var dayOfTheWeek_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(dayOfTheWeek_r2);
        }
    }
    function FabricDatePickerDaysViewComponent_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 6);
            i0__namespace.ɵɵlistener("click", function FabricDatePickerDaysViewComponent_div_3_div_1_Template_div_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r7_1); var day_r5 = restoredCtx.$implicit; var ctx_r6 = i0__namespace.ɵɵnextContext(2); return ctx_r6.selectDate(day_r5); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r5 = ctx.$implicit;
            var ctx_r4 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵclassProp("gui-date-picker-current-day", ctx_r4.isDate(ctx_r4.currentDay, day_r5))("gui-date-picker-selected-day", ctx_r4.isDate(ctx_r4.selectedDate, day_r5))("gui-date-picker-selected-month", ctx_r4.displayMonthDays(day_r5.getMonth()));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", day_r5.getDate(), " ");
        }
    }
    function FabricDatePickerDaysViewComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 4);
            i0__namespace.ɵɵtemplate(1, FabricDatePickerDaysViewComponent_div_3_div_1_Template, 2, 7, "div", 5);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var week_r3 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", week_r3);
        }
    }
    var FabricDatePickerDaysViewComponent = /** @class */ (function () {
        function FabricDatePickerDaysViewComponent(datePickerService) {
            this.datePickerService = datePickerService;
            this.daysOfTheWeek = daysOfTheWeek;
            this.currentDay = new Date();
        }
        FabricDatePickerDaysViewComponent.prototype.selectDate = function (date) {
            this.datePickerService.dateSelected(date);
        };
        FabricDatePickerDaysViewComponent.prototype.isDate = function (comparedDate, date) {
            return FabricDateUtils.areDatesSame(comparedDate, date);
        };
        FabricDatePickerDaysViewComponent.prototype.displayMonthDays = function (month) {
            return month === this.activeMonth;
        };
        return FabricDatePickerDaysViewComponent;
    }());
    FabricDatePickerDaysViewComponent.ɵfac = function FabricDatePickerDaysViewComponent_Factory(t) { return new (t || FabricDatePickerDaysViewComponent)(i0__namespace.ɵɵdirectiveInject(FabricDatePickerService)); };
    FabricDatePickerDaysViewComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricDatePickerDaysViewComponent, selectors: [["gui-date-picker-days-view"]], inputs: { selectedDate: "selectedDate", activeMonth: "activeMonth", weeks: "weeks" }, decls: 4, vars: 2, consts: [[1, "gui-display-grid", "gui-grid-rows-gap-8", "gui-py-6"], [1, "gui-display-grid", "gui-grid-cols-7", "gui-py-4", "gui-date-picker-header"], [4, "ngFor", "ngForOf"], ["class", "gui-display-grid gui-grid-cols-7", 4, "ngFor", "ngForOf"], [1, "gui-display-grid", "gui-grid-cols-7"], ["class", "gui-date-picker-cell gui-date-picker-day", 3, "gui-date-picker-current-day", "gui-date-picker-selected-day", "gui-date-picker-selected-month", "click", 4, "ngFor", "ngForOf"], [1, "gui-date-picker-cell", "gui-date-picker-day", 3, "click"]], template: function FabricDatePickerDaysViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵtemplate(2, FabricDatePickerDaysViewComponent_div_2_Template, 2, 1, "div", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(3, FabricDatePickerDaysViewComponent_div_3_Template, 2, 1, "div", 3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngForOf", ctx.daysOfTheWeek);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.weeks);
            }
        }, directives: [i1__namespace.NgForOf], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerDaysViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-date-picker-days-view',
                        templateUrl: 'fabric-date-picker-days-view.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: FabricDatePickerService }]; }, { selectedDate: [{
                    type: i0.Input
                }], activeMonth: [{
                    type: i0.Input
                }], weeks: [{
                    type: i0.Input
                }] });
    })();

    var monthsPerQuarters = [
        [{ nr: 0, name: 'Jan' }, { nr: 1, name: 'Feb' }, { nr: 2, name: 'Mar' }],
        [{ nr: 3, name: 'Apr' }, { nr: 4, name: 'May' }, { nr: 5, name: 'Jun' }],
        [{ nr: 6, name: 'Jul' }, { nr: 7, name: 'Aug' }, { nr: 8, name: 'Sep' }],
        [{ nr: 9, name: 'Oct' }, { nr: 10, name: 'Nov' }, { nr: 11, name: 'Dec' }]
    ];

    function FabricDatePickerMonthsViewComponent_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 4);
            i0__namespace.ɵɵlistener("click", function FabricDatePickerMonthsViewComponent_div_1_div_1_Template_div_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r5_1); var month_r3 = restoredCtx.$implicit; var ctx_r4 = i0__namespace.ɵɵnextContext(2); return ctx_r4.selectMonth(month_r3.nr); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var month_r3 = ctx.$implicit;
            var ctx_r2 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵclassProp("gui-date-picker-current-month", ctx_r2.isMonth(ctx_r2.currentDay, month_r3.nr))("gui-date-picker-selected-month", ctx_r2.isMonth(ctx_r2.selectedDate, month_r3.nr));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", month_r3.name, " ");
        }
    }
    function FabricDatePickerMonthsViewComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵtemplate(1, FabricDatePickerMonthsViewComponent_div_1_div_1_Template, 2, 5, "div", 3);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var quarter_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", quarter_r1);
        }
    }
    var FabricDatePickerMonthsViewComponent = /** @class */ (function () {
        function FabricDatePickerMonthsViewComponent(calendarService, calendarViewService) {
            this.calendarService = calendarService;
            this.calendarViewService = calendarViewService;
            this.currentDay = new Date();
            this.monthsPerQuarters = monthsPerQuarters;
        }
        FabricDatePickerMonthsViewComponent.prototype.isMonth = function (date, month) {
            return FabricDateUtils.isMonth(date, month, this.activeYear);
        };
        FabricDatePickerMonthsViewComponent.prototype.selectMonth = function (month) {
            this.calendarService.selectMonth(month);
            this.calendarViewService.switchView(FabricCalendarView.DAYS);
        };
        return FabricDatePickerMonthsViewComponent;
    }());
    FabricDatePickerMonthsViewComponent.ɵfac = function FabricDatePickerMonthsViewComponent_Factory(t) { return new (t || FabricDatePickerMonthsViewComponent)(i0__namespace.ɵɵdirectiveInject(FabricDatePickerCalendarService), i0__namespace.ɵɵdirectiveInject(FabricDatePickerCalendarViewService)); };
    FabricDatePickerMonthsViewComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricDatePickerMonthsViewComponent, selectors: [["gui-date-picker-months-view"]], inputs: { selectedDate: "selectedDate", activeYear: "activeYear" }, decls: 2, vars: 1, consts: [[1, "gui-display-grid", "gui-grid-rows-gap-8", "gui-py-6", "gui-date-picker-view-border-top"], ["class", "gui-display-grid gui-grid-cols-3", 4, "ngFor", "ngForOf"], [1, "gui-display-grid", "gui-grid-cols-3"], ["class", "gui-date-picker-cell gui-date-picker-month", 3, "gui-date-picker-current-month", "gui-date-picker-selected-month", "click", 4, "ngFor", "ngForOf"], [1, "gui-date-picker-cell", "gui-date-picker-month", 3, "click"]], template: function FabricDatePickerMonthsViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, FabricDatePickerMonthsViewComponent_div_1_Template, 2, 1, "div", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.monthsPerQuarters);
            }
        }, directives: [i1__namespace.NgForOf], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerMonthsViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-date-picker-months-view',
                        templateUrl: 'fabric-date-picker-months-view.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: FabricDatePickerCalendarService }, { type: FabricDatePickerCalendarViewService }]; }, { selectedDate: [{
                    type: i0.Input
                }], activeYear: [{
                    type: i0.Input
                }] });
    })();

    function FabricDatePickerYearsComponent_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 4);
            i0__namespace.ɵɵlistener("click", function FabricDatePickerYearsComponent_div_1_div_1_Template_div_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r5_1); var year_r3 = restoredCtx.$implicit; var ctx_r4 = i0__namespace.ɵɵnextContext(2); return ctx_r4.selectYear(year_r3); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var year_r3 = ctx.$implicit;
            var ctx_r2 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵclassProp("gui-date-picker-current-year", ctx_r2.isYear(ctx_r2.currentDay, year_r3))("gui-date-picker-selected-year", ctx_r2.isYear(ctx_r2.selectedDate, year_r3));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", year_r3, " ");
        }
    }
    function FabricDatePickerYearsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵtemplate(1, FabricDatePickerYearsComponent_div_1_div_1_Template, 2, 5, "div", 3);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var yearsChunk_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", yearsChunk_r1);
        }
    }
    var FabricDatePickerYearsComponent = /** @class */ (function () {
        function FabricDatePickerYearsComponent(calendarService, calendarViewService) {
            this.calendarService = calendarService;
            this.calendarViewService = calendarViewService;
            this.currentDay = new Date();
        }
        FabricDatePickerYearsComponent.prototype.selectYear = function (year) {
            this.calendarService.selectYear(year);
            this.calendarViewService.switchView(FabricCalendarView.MONTHS);
        };
        FabricDatePickerYearsComponent.prototype.isYear = function (date, year) {
            if (date) {
                return date.getFullYear() === year;
            }
            return false;
        };
        return FabricDatePickerYearsComponent;
    }());
    FabricDatePickerYearsComponent.ɵfac = function FabricDatePickerYearsComponent_Factory(t) { return new (t || FabricDatePickerYearsComponent)(i0__namespace.ɵɵdirectiveInject(FabricDatePickerCalendarService), i0__namespace.ɵɵdirectiveInject(FabricDatePickerCalendarViewService)); };
    FabricDatePickerYearsComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricDatePickerYearsComponent, selectors: [["gui-date-picker-years-view"]], inputs: { selectedDate: "selectedDate", years: "years" }, decls: 2, vars: 1, consts: [[1, "gui-display-grid", "gui-grid-rows-gap-8", "gui-py-6", "gui-date-picker-view-border-top"], ["class", "gui-display-grid gui-grid-cols-5", 4, "ngFor", "ngForOf"], [1, "gui-display-grid", "gui-grid-cols-5"], ["class", "gui-date-picker-cell gui-date-picker-year", 3, "gui-date-picker-current-year", "gui-date-picker-selected-year", "click", 4, "ngFor", "ngForOf"], [1, "gui-date-picker-cell", "gui-date-picker-year", 3, "click"]], template: function FabricDatePickerYearsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, FabricDatePickerYearsComponent_div_1_Template, 2, 1, "div", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.years);
            }
        }, directives: [i1__namespace.NgForOf], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerYearsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-date-picker-years-view',
                        templateUrl: 'fabric-date-picker-years.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: FabricDatePickerCalendarService }, { type: FabricDatePickerCalendarViewService }]; }, { selectedDate: [{
                    type: i0.Input
                }], years: [{
                    type: i0.Input
                }] });
    })();

    var FabricTimeValues = /** @class */ (function () {
        function FabricTimeValues(hours, minutes, seconds) {
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
        return FabricTimeValues;
    }());

    var _c0$h = ["gui-input", ""];
    var FabricInputComponent = /** @class */ (function () {
        function FabricInputComponent() {
        }
        return FabricInputComponent;
    }());
    FabricInputComponent.ɵfac = function FabricInputComponent_Factory(t) { return new (t || FabricInputComponent)(); };
    FabricInputComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricInputComponent, selectors: [["input", "gui-input", ""]], hostVars: 2, hostBindings: function FabricInputComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-input", true);
            }
        }, attrs: _c0$h, decls: 0, vars: 0, template: function FabricInputComponent_Template(rf, ctx) { }, styles: [".gui-input{background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;color:#333;font:14px Arial;margin:0;max-width:100%;outline:0;padding:8px 12px;text-align:left;transition:border-color .3s ease-in-out}.gui-input:hover{border-color:#999}.gui-input:focus{border-color:#6fb4e8}.gui-input:disabled{color:#ccc;cursor:default;pointer-events:none}.gui-input:disabled::-moz-placeholder{color:#ccc}.gui-input:disabled:-ms-input-placeholder{color:#ccc}.gui-input:disabled::placeholder{color:#ccc}\n", ".gui-material .gui-input{border-color:#ccc;border-radius:0;border-style:solid;border-width:0 0 1px 0;font-family:Roboto,\"Helvetica Neue\",sans-serif;padding-left:0;transition:border-color .3s ease-in-out}.gui-material .gui-input:not(:-moz-placeholder-shown){border-color:#6200ee}.gui-material .gui-input:not(:-ms-input-placeholder){border-color:#6200ee}.gui-material .gui-input:not(:placeholder-shown){border-color:#6200ee}.gui-material .gui-input:focus{border-color:#6200ee}\n", ".gui-dark .gui-input{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-input:hover{border-color:#757575}.gui-dark .gui-input:focus{border-color:#ce93d8}.gui-dark .gui-input:disabled{opacity:.36}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricInputComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'input[gui-input]',
                        templateUrl: './input.component.html',
                        styleUrls: [
                            './input.ngx.scss',
                            './themes/input.material.ngx.scss',
                            './themes/input.dark.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-input]': 'true'
                        }
                    }]
            }], null, null);
    })();

    function FabricTimePickerComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 4);
            i0__namespace.ɵɵelementStart(1, "gui-arrow-icon", 5);
            i0__namespace.ɵɵlistener("click", function FabricTimePickerComponent_div_1_Template_gui_arrow_icon_click_1_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.changeTimeItem("hours", ctx_r3.steps); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(2, "input", 6);
            i0__namespace.ɵɵelementStart(3, "gui-arrow-icon", 5);
            i0__namespace.ɵɵlistener("click", function FabricTimePickerComponent_div_1_Template_gui_arrow_icon_click_3_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.changeTimeItem("hours", -ctx_r5.steps); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("direction", ctx_r0.Direction.TOP);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("direction", ctx_r0.Direction.BOTTOM);
        }
    }
    function FabricTimePickerComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 4);
            i0__namespace.ɵɵelementStart(1, "gui-arrow-icon", 5);
            i0__namespace.ɵɵlistener("click", function FabricTimePickerComponent_div_2_Template_gui_arrow_icon_click_1_listener() { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.changeTimeItem("minutes", ctx_r6.steps); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(2, "input", 7);
            i0__namespace.ɵɵelementStart(3, "gui-arrow-icon", 5);
            i0__namespace.ɵɵlistener("click", function FabricTimePickerComponent_div_2_Template_gui_arrow_icon_click_3_listener() { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r8 = i0__namespace.ɵɵnextContext(); return ctx_r8.changeTimeItem("minutes", -ctx_r8.steps); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("direction", ctx_r1.Direction.TOP);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("direction", ctx_r1.Direction.BOTTOM);
        }
    }
    function FabricTimePickerComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 4);
            i0__namespace.ɵɵelementStart(1, "gui-arrow-icon", 5);
            i0__namespace.ɵɵlistener("click", function FabricTimePickerComponent_div_3_Template_gui_arrow_icon_click_1_listener() { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r9 = i0__namespace.ɵɵnextContext(); return ctx_r9.changeTimeItem("seconds", ctx_r9.steps); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(2, "input", 8);
            i0__namespace.ɵɵelementStart(3, "gui-arrow-icon", 5);
            i0__namespace.ɵɵlistener("click", function FabricTimePickerComponent_div_3_Template_gui_arrow_icon_click_3_listener() { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r11 = i0__namespace.ɵɵnextContext(); return ctx_r11.changeTimeItem("seconds", -ctx_r11.steps); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("direction", ctx_r2.Direction.TOP);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("direction", ctx_r2.Direction.BOTTOM);
        }
    }
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
        FabricTimePickerComponent.prototype.ngOnChanges = function (changes) {
            if (changes.selectedDate) {
                if (this.selectedDate) {
                }
            }
        };
        FabricTimePickerComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)) {
                this.form
                    .controls['hours']
                    .valueChanges
                    .pipe(this.takeUntil())
                    .subscribe(function (hour) {
                    var minHour = _this.isMeridian() ? 1 : 0, maxHour = _this.isMeridian() ? 12 : 23;
                    if (hour > maxHour || hour < minHour) {
                        _this.form.controls['hours'].setValue(minHour);
                    }
                    _this.changeSelectedDate();
                });
            }
            if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)) {
                this.form
                    .controls['minutes']
                    .valueChanges
                    .pipe(this.takeUntil())
                    .subscribe(function (value) {
                    _this.controlFormItemValue(value, 'minutes', 'hours');
                    _this.changeSelectedDate();
                });
            }
            if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)) {
                this.form
                    .controls['seconds']
                    .valueChanges
                    .pipe(this.takeUntil())
                    .subscribe(function (value) {
                    _this.controlFormItemValue(value, 'seconds', 'minutes');
                    _this.changeSelectedDate();
                });
            }
            this.setTimeFromSelectedDate();
        };
        FabricTimePickerComponent.prototype.changeTimeItem = function (formControlName, steps) {
            var value = this.form.controls[formControlName].value + steps;
            this.form.controls[formControlName].setValue(value);
        };
        FabricTimePickerComponent.prototype.changeSelectedDateTime = function () {
            this.datePickerService.next();
        };
        FabricTimePickerComponent.prototype.isActive = function (activeComposition, checkedComposition) {
            return !!(activeComposition & checkedComposition);
        };
        FabricTimePickerComponent.prototype.isMeridian = function () {
            return this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MERIDIAN);
        };
        FabricTimePickerComponent.prototype.isOnlyTimePicker = function () {
            return !(this.datePickerComposition & FabricDatePickerComposition.DATE_PICKER);
        };
        FabricTimePickerComponent.prototype.changeSelectedDate = function () {
            var hours = this.form.controls['hours'].value, minutes = this.form.controls['minutes'].value, seconds = this.form.controls['seconds'].value, timeValues = new FabricTimeValues(hours, minutes, seconds);
            this.datePickerService.changeTime(timeValues, this.selectedDate);
        };
        FabricTimePickerComponent.prototype.controlFormItemValue = function (value, observedFormControlName, incFormControlName) {
            if (value > 59) {
                var timeItemValue = this.form.controls[incFormControlName].value, incTimeItemValue = timeItemValue + 1;
                this.form.controls[incFormControlName].setValue(incTimeItemValue);
                this.form.controls[observedFormControlName].setValue(0);
            }
            else if (value < 0) {
                this.form.controls[observedFormControlName].setValue(0);
            }
        };
        FabricTimePickerComponent.prototype.setTimeFromSelectedDate = function () {
            var hours = this.selectedDate.getHours(), minutes = this.selectedDate.getMinutes(), seconds = this.selectedDate.getSeconds();
            this.form.controls['hours'].setValue(hours);
            this.form.controls['minutes'].setValue(minutes);
            this.form.controls['seconds'].setValue(seconds);
        };
        return FabricTimePickerComponent;
    }(FabricReactive));
    FabricTimePickerComponent.ɵfac = function FabricTimePickerComponent_Factory(t) { return new (t || FabricTimePickerComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.FormBuilder), i0__namespace.ɵɵdirectiveInject(FabricDatePickerService)); };
    FabricTimePickerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricTimePickerComponent, selectors: [["gui-time-picker"]], hostVars: 2, hostBindings: function FabricTimePickerComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("only-time-picker", ctx.isOnlyTimePicker());
            }
        }, inputs: { selectedDate: "selectedDate", datePickerComposition: "datePickerComposition" }, features: [i0__namespace.ɵɵInheritDefinitionFeature, i0__namespace.ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["class", "gui-time-picker-item", 4, "ngIf"], [1, "gui-time-picker-button-wrapper", 3, "click"], ["gui-button", "", 3, "outline"], [1, "gui-time-picker-item"], [1, "gui-date-picker-arrow", 3, "direction", "click"], ["formControlName", "hours", "gui-input", "", "maxlength", "2"], ["formControlName", "minutes", "gui-input", "", "maxlength", "2", "type", "number"], ["formControlName", "seconds", "gui-input", "", "maxlength", "2", "type", "number"]], template: function FabricTimePickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵtemplate(1, FabricTimePickerComponent_div_1_Template, 4, 2, "div", 1);
                i0__namespace.ɵɵtemplate(2, FabricTimePickerComponent_div_2_Template, 4, 2, "div", 1);
                i0__namespace.ɵɵtemplate(3, FabricTimePickerComponent_div_3_Template, 4, 2, "div", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "div", 2);
                i0__namespace.ɵɵlistener("click", function FabricTimePickerComponent_Template_div_click_4_listener() { return ctx.changeSelectedDateTime(); });
                i0__namespace.ɵɵelementStart(5, "button", 3);
                i0__namespace.ɵɵtext(6, " Ok ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("formGroup", ctx.form);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.isActive(ctx.datePickerComposition, ctx.FabricDatePickerComposition.TIME_PICKER_HOURS));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.isActive(ctx.datePickerComposition, ctx.FabricDatePickerComposition.TIME_PICKER_MINUTES));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.isActive(ctx.datePickerComposition, ctx.FabricDatePickerComposition.TIME_PICKER_SECONDS));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("outline", true);
            }
        }, directives: [i1__namespace$1.ɵNgNoValidate, i1__namespace$1.NgControlStatusGroup, i1__namespace$1.FormGroupDirective, i1__namespace.NgIf, FabricButtonComponent, FabricArrowIconComponent, i1__namespace$1.DefaultValueAccessor, FabricInputComponent, i1__namespace$1.NgControlStatus, i1__namespace$1.FormControlName, i1__namespace$1.MaxLengthValidator, i1__namespace$1.NumberValueAccessor], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricTimePickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-time-picker',
                        templateUrl: './fabric-time-picker.component.html',
                        host: {
                            '[class.only-time-picker]': 'isOnlyTimePicker()'
                        },
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i1__namespace$1.FormBuilder }, { type: FabricDatePickerService }]; }, { selectedDate: [{
                    type: i0.Input
                }], datePickerComposition: [{
                    type: i0.Input
                }] });
    })();

    function FabricDatePickerCalendarComponent_ng_container_0_gui_date_picker_days_view_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "gui-date-picker-days-view", 7);
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("activeMonth", ctx_r2.activeMonth)("selectedDate", ctx_r2.selectedDate)("weeks", ctx_r2.weeks);
        }
    }
    function FabricDatePickerCalendarComponent_ng_container_0_gui_date_picker_months_view_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "gui-date-picker-months-view", 8);
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("activeYear", ctx_r3.activeYear)("selectedDate", ctx_r3.selectedDate);
        }
    }
    function FabricDatePickerCalendarComponent_ng_container_0_gui_date_picker_years_view_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "gui-date-picker-years-view", 9);
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("selectedDate", ctx_r4.selectedDate)("years", ctx_r4.years);
        }
    }
    function FabricDatePickerCalendarComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelement(1, "gui-date-picker-view-panel", 2);
            i0__namespace.ɵɵelementContainerStart(2, 3);
            i0__namespace.ɵɵtemplate(3, FabricDatePickerCalendarComponent_ng_container_0_gui_date_picker_days_view_3_Template, 1, 3, "gui-date-picker-days-view", 4);
            i0__namespace.ɵɵtemplate(4, FabricDatePickerCalendarComponent_ng_container_0_gui_date_picker_months_view_4_Template, 1, 2, "gui-date-picker-months-view", 5);
            i0__namespace.ɵɵtemplate(5, FabricDatePickerCalendarComponent_ng_container_0_gui_date_picker_years_view_5_Template, 1, 2, "gui-date-picker-years-view", 6);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("activeMonth", ctx_r0.activeMonth)("activeYear", ctx_r0.activeYear)("fabricCalendarView", ctx_r0.fabricCalendarView)("selectedDate", ctx_r0.selectedDate)("years", ctx_r0.years);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngSwitch", ctx_r0.getCalendarView());
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngSwitchCase", ctx_r0.FabricCalendarView.DAYS);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngSwitchCase", ctx_r0.FabricCalendarView.MONTHS);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngSwitchCase", ctx_r0.FabricCalendarView.YEARS);
        }
    }
    function FabricDatePickerCalendarComponent_gui_time_picker_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "gui-time-picker", 10);
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("datePickerComposition", ctx_r1.datePickerComposition)("selectedDate", ctx_r1.selectedDate);
        }
    }
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
        FabricDatePickerCalendarComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.datePickerFormatService
                .onComposition()
                .pipe(this.takeUntil())
                .subscribe(function (datePickerComposition) {
                _this.datePickerComposition = datePickerComposition;
            });
            this.calendarService
                .onActiveMonth()
                .pipe(this.takeUntil())
                .subscribe(function (month) {
                _this.activeMonth = month;
                _this.calculateDatePickerData();
                _this.changeDetectorRef.detectChanges();
            });
            this.calendarService
                .onActiveYear()
                .pipe(this.takeUntil())
                .subscribe(function (year) {
                _this.activeYear = year;
                _this.calculateDatePickerData();
                _this.changeDetectorRef.detectChanges();
            });
            this.datePickerService
                .observeSelectedDate()
                .pipe(this.takeUntil())
                .subscribe(function (date) {
                _this.selectedDate = date;
                _this.activeYear = date.getFullYear();
                _this.activeMonth = date.getMonth();
            });
            this.datePickerYearsService
                .onYears()
                .pipe(this.takeUntil())
                .subscribe(function (years) {
                _this.years = years;
                _this.changeDetectorRef.detectChanges();
            });
            this.calendarViewService
                .onActiveView()
                .pipe(this.takeUntil())
                .subscribe(function (fabricCalendarView) {
                _this.fabricCalendarView = fabricCalendarView;
                _this.changeDetectorRef.detectChanges();
            });
            this.calculateDatePickerData();
        };
        FabricDatePickerCalendarComponent.prototype.getCalendarView = function () {
            if (event) {
                event.stopPropagation();
            }
            return this.fabricCalendarView;
        };
        FabricDatePickerCalendarComponent.prototype.isVisible = function (activeComposition, checkedComposition) {
            return !!(activeComposition & checkedComposition);
        };
        FabricDatePickerCalendarComponent.prototype.calculateDatePickerData = function () {
            this.weeks = this.datePickerWeeks.getDaysInMonths(this.activeYear, this.activeMonth);
            this.years = this.datePickerYears.getYears(this.activeYear);
        };
        return FabricDatePickerCalendarComponent;
    }(FabricReactive));
    FabricDatePickerCalendarComponent.ɵfac = function FabricDatePickerCalendarComponent_Factory(t) { return new (t || FabricDatePickerCalendarComponent)(i0__namespace.ɵɵdirectiveInject(FabricDatePickerService), i0__namespace.ɵɵdirectiveInject(FabricDatePickerCompositionService), i0__namespace.ɵɵdirectiveInject(FabricDatePickerWeeks), i0__namespace.ɵɵdirectiveInject(FabricDatePickerYears), i0__namespace.ɵɵdirectiveInject(FabricDatePickerYearsService), i0__namespace.ɵɵdirectiveInject(FabricDatePickerCalendarService), i0__namespace.ɵɵdirectiveInject(FabricDatePickerCalendarViewService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    FabricDatePickerCalendarComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricDatePickerCalendarComponent, selectors: [["gui-date-picker-toggle"]], hostVars: 2, hostBindings: function FabricDatePickerCalendarComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-date-picker-calendar", true);
            }
        }, features: [i0__namespace.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "datePickerComposition", "selectedDate", 4, "ngIf"], [3, "activeMonth", "activeYear", "fabricCalendarView", "selectedDate", "years"], [3, "ngSwitch"], [3, "activeMonth", "selectedDate", "weeks", 4, "ngSwitchCase"], [3, "activeYear", "selectedDate", 4, "ngSwitchCase"], [3, "selectedDate", "years", 4, "ngSwitchCase"], [3, "activeMonth", "selectedDate", "weeks"], [3, "activeYear", "selectedDate"], [3, "selectedDate", "years"], [3, "datePickerComposition", "selectedDate"]], template: function FabricDatePickerCalendarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, FabricDatePickerCalendarComponent_ng_container_0_Template, 6, 9, "ng-container", 0);
                i0__namespace.ɵɵtemplate(1, FabricDatePickerCalendarComponent_gui_time_picker_1_Template, 1, 2, "gui-time-picker", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.isVisible(ctx.datePickerComposition, ctx.FabricDatePickerComposition.DATE_PICKER));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.isVisible(ctx.datePickerComposition, ctx.FabricDatePickerComposition.TIME_PICKER));
            }
        }, directives: [i1__namespace.NgIf, FabricDatePickerViewPanelComponent, i1__namespace.NgSwitch, i1__namespace.NgSwitchCase, FabricDatePickerDaysViewComponent, FabricDatePickerMonthsViewComponent, FabricDatePickerYearsComponent, FabricTimePickerComponent], styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}@use \"common/variables\";.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-date-picker-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;font-family:Roboto,\"Helvetica Neue\",sans-serif;border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 0 12px;width:268px}.gui-date-picker-header{font-size:13px;font-weight:normal;text-align:center;border-top:1px solid #999}.gui-date-picker-cell{border-radius:4px;border-color:transparent;border-style:solid;border-width:1px;padding:2px 4px;position:relative;text-align:center;font-size:13px;z-index:0}.gui-date-picker-cell:before{border:1px solid #999;border-radius:50%;box-sizing:border-box;content:\"\";display:none;height:36px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:36px;z-index:-1}.gui-date-picker-cell:after{background:transparent;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:32px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:32px;z-index:-1}.gui-date-picker-cell:hover:after{background:#e6e6e6}.gui-date-picker-day{color:#333;cursor:pointer;opacity:.2}.gui-date-picker-day.gui-date-picker-selected-month{opacity:1}.gui-date-picker-month,.gui-date-picker-year{cursor:pointer}.gui-date-picker-year{font-size:13px}.gui-date-picker-day.gui-date-picker-current-day:before,.gui-date-picker-month.gui-date-picker-current-month:before,.gui-date-picker-year.gui-date-picker-current-year:before{display:block}.gui-date-picker-day.gui-date-picker-selected-day{pointer-events:none}.gui-date-picker-day.gui-date-picker-selected-day,.gui-date-picker-month.gui-date-picker-selected-month,.gui-date-picker-year.gui-date-picker-selected-year{color:#fff}.gui-date-picker-day.gui-date-picker-selected-day:after,.gui-date-picker-month.gui-date-picker-selected-month:after,.gui-date-picker-year.gui-date-picker-selected-year:after{background:#2185d0}.gui-date-picker-arrows{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:32px}.gui-date-picker-view-padding{padding:0 8px}.gui-date-picker-view-border-top{border-top:1px solid #999}gui-time-picker{border-top:1px solid #999;margin:6px 0 0;padding:12px 0 2.66667px}gui-time-picker form{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}gui-time-picker.only-time-picker{border-top:none}.gui-time-picker-button-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-right:8px}.gui-time-picker-button-wrapper .gui-button{font-size:12px}.gui-time-picker-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 8px;position:relative}.gui-time-picker-item input{box-sizing:border-box;max-width:24px;text-align:center}.gui-time-picker-item input::-webkit-outer-spin-button,.gui-time-picker-item input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.gui-time-picker-item input[type=number]{-moz-appearance:textfield}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(1){margin-bottom:2px}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(2){margin-top:6px}.gui-date-picker-view-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:16px 18px}.gui-date-picker-view-panel .gui-date-picker-view-panel-date{cursor:pointer;font-size:14px;font-weight:bold;margin:0;pointer-events:auto}.gui-date-picker-arrow{position:relative;z-index:0}.gui-date-picker-arrow:hover:after{background:#e6e6e6;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:24px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:24px;z-index:-1}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerCalendarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-date-picker-toggle',
                        templateUrl: 'fabric-date-picker-calendar.component.html',
                        styleUrls: [
                            './fabric-date-picker-calendar.ngx.scss'
                        ],
                        host: {
                            '[class.gui-date-picker-calendar]': 'true'
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return [{ type: FabricDatePickerService }, { type: FabricDatePickerCompositionService }, { type: FabricDatePickerWeeks }, { type: FabricDatePickerYears }, { type: FabricDatePickerYearsService }, { type: FabricDatePickerCalendarService }, { type: FabricDatePickerCalendarViewService }, { type: i0__namespace.ChangeDetectorRef }]; }, null);
    })();

    exports.FabricPlacement = void 0;
    (function (FabricPlacement) {
        FabricPlacement[FabricPlacement["TOP"] = 1] = "TOP";
        FabricPlacement[FabricPlacement["BOTTOM"] = 2] = "BOTTOM";
        FabricPlacement[FabricPlacement["BEFORE"] = 3] = "BEFORE";
        FabricPlacement[FabricPlacement["AFTER"] = 4] = "AFTER";
    })(exports.FabricPlacement || (exports.FabricPlacement = {}));

    var themeToken = new i0.InjectionToken('Theme token');

    var FabricModalThemeService = /** @class */ (function () {
        function FabricModalThemeService() {
            this.fabricTheme$ = new rxjs.BehaviorSubject(exports.Theme.FABRIC);
        }
        FabricModalThemeService.prototype.onTheme = function () {
            return this.fabricTheme$.asObservable();
        };
        FabricModalThemeService.prototype.changeTheme = function (theme) {
            var fabricTheme = typeof theme === 'string' ? this.convertToTheme(theme) : theme;
            this.fabricTheme$.next(fabricTheme);
        };
        FabricModalThemeService.prototype.convertToTheme = function (theme) {
            switch (theme.toLowerCase()) {
                case 'fabric':
                    return exports.Theme.FABRIC;
                case 'material':
                    return exports.Theme.MATERIAL;
                case 'generic':
                    return exports.Theme.GENERIC;
                case 'light':
                    return exports.Theme.LIGHT;
                case 'dark':
                    return exports.Theme.DARK;
                default:
                    return exports.Theme.FABRIC;
            }
        };
        return FabricModalThemeService;
    }());
    FabricModalThemeService.ɵfac = function FabricModalThemeService_Factory(t) { return new (t || FabricModalThemeService)(); };
    FabricModalThemeService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricModalThemeService, factory: FabricModalThemeService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricModalThemeService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FabricThemedComponent = /** @class */ (function (_super) {
        __extends(FabricThemedComponent, _super);
        function FabricThemedComponent(elementRef, renderer, themeService) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            _this.themeService = themeService;
            return _this;
        }
        FabricThemedComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.themeService
                .onTheme()
                .pipe(operators.distinctUntilChanged(), this.takeUntil())
                .subscribe(function (theme) {
                _this.addTheme(theme);
            });
        };
        FabricThemedComponent.prototype.addTheme = function (theme) {
            this.removeThemes();
            var cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme.toLowerCase();
            this.renderer.addClass(this.elementRef.nativeElement, cssClass);
        };
        FabricThemedComponent.prototype.removeThemes = function () {
            var _this = this;
            var themes = Object.keys(exports.Theme)
                .map(function (key) { return exports.Theme[key].toLowerCase(); })
                .filter(function (val) { return !Number.isInteger(val); });
            themes.forEach(function (theme) {
                var cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme;
                _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
            });
        };
        FabricThemedComponent.prototype.getElementRef = function () {
            return this.elementRef;
        };
        FabricThemedComponent.prototype.getRenderer = function () {
            return this.renderer;
        };
        return FabricThemedComponent;
    }(FabricReactive));
    FabricThemedComponent.CSS_CLASS_PREFIX = 'gui-';
    FabricThemedComponent.ɵfac = function FabricThemedComponent_Factory(t) { return new (t || FabricThemedComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(FabricModalThemeService)); };
    FabricThemedComponent.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: FabricThemedComponent, features: [i0__namespace.ɵɵInheritDefinitionFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricThemedComponent, [{
                type: i0.Directive
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }, { type: FabricModalThemeService }]; }, null);
    })();

    var FabricGeometry = /** @class */ (function () {
        function FabricGeometry(elementRef, containerClassName) {
            this.elementRef = elementRef;
            this.containerClassName = containerClassName;
        }
        FabricGeometry.prototype.getHeight = function () {
            return this.elementRef.nativeElement.querySelector("." + this.containerClassName).offsetHeight;
        };
        FabricGeometry.prototype.getWidth = function () {
            return this.elementRef.nativeElement.querySelector("." + this.containerClassName).offsetWidth;
        };
        return FabricGeometry;
    }());

    var FabricCords = /** @class */ (function (_super) {
        __extends(FabricCords, _super);
        function FabricCords(window, invokerElementRef, invokedElementRef, containerClassName, placement, offset) {
            var _this = _super.call(this, invokedElementRef, containerClassName) || this;
            _this.calculateCords(window, invokerElementRef, placement, offset);
            return _this;
        }
        FabricCords.prototype.getVerticalPosition = function () {
            return this.verticalPosition;
        };
        FabricCords.prototype.getHorizontalPosition = function () {
            return this.horizontalPosition;
        };
        FabricCords.prototype.calculateCords = function (window, invokerElementRef, placement, offset) {
            var elementRect = invokerElementRef.nativeElement.getBoundingClientRect(), elementBottom = window.pageYOffset + elementRect.bottom, elementLeft = window.pageXOffset + elementRect.left, elementRight = window.pageXOffset + elementRect.right, elementTop = window.pageYOffset + elementRect.top, topCords = elementTop + offset - this.getHeight();
            switch (placement) {
                case exports.FabricPlacement.BOTTOM:
                    this.horizontalPosition = elementLeft;
                    this.verticalPosition = elementBottom + offset;
                    break;
                case exports.FabricPlacement.TOP:
                    this.horizontalPosition = elementLeft;
                    this.verticalPosition = topCords;
                    break;
                case exports.FabricPlacement.BEFORE:
                    this.horizontalPosition = elementRight + offset - this.getWidth();
                    this.verticalPosition = elementBottom;
                    break;
                case exports.FabricPlacement.AFTER:
                    this.horizontalPosition = elementLeft + offset;
                    this.verticalPosition = elementBottom;
                    break;
                default:
                    this.horizontalPosition = elementLeft;
                    this.verticalPosition = elementBottom + offset;
            }
            this.calculateDirection(invokerElementRef, window, topCords);
        };
        FabricCords.prototype.calculateDirection = function (invokerElementRef, window, topCords) {
            var windowHeightWithOffset = window.innerHeight + window.pageYOffset, windowWidthWithOffset = window.innerWidth + window.pageXOffset, invokerElementWidth = invokerElementRef.nativeElement.offsetWidth, invokedElementHeight = this.getHeight(), invokedElementWidth = this.getWidth();
            var invokedElementDoesNotFitHorizontally = (windowWidthWithOffset - this.horizontalPosition - invokedElementWidth) < 0, invokedElementDoesNotFitVertically = (windowHeightWithOffset - this.verticalPosition - invokedElementHeight) < 0;
            if (invokedElementDoesNotFitHorizontally) {
                this.horizontalPosition -= invokedElementWidth - invokerElementWidth;
            }
            if (invokedElementDoesNotFitVertically) {
                this.verticalPosition = topCords;
            }
        };
        return FabricCords;
    }(FabricGeometry));

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
        return InlineDialogCords;
    }(FabricCords));
    InlineDialogCords.defaultInlineDialogOffset = 8;

    var InlineDialogGeometryService = /** @class */ (function () {
        function InlineDialogGeometryService(platformId) {
            this.platformId = platformId;
            this.inlineDialogState$ = new rxjs.Subject();
        }
        InlineDialogGeometryService.prototype.observeInlineDialogCords = function () {
            return this.inlineDialogState$.asObservable();
        };
        InlineDialogGeometryService.prototype.changeGeometry = function (inlineDialogRef) {
            this.inlineDialogGeometry = inlineDialogRef;
        };
        InlineDialogGeometryService.prototype.getInlineDialogCords = function (invokerElementRef, placement, offset) {
            if (i1.isPlatformBrowser(this.platformId)) {
                var inlineDialogCords = new InlineDialogCords(invokerElementRef, this.inlineDialogGeometry, window, placement, offset);
                this.inlineDialogState$.next(inlineDialogCords);
            }
        };
        return InlineDialogGeometryService;
    }());
    InlineDialogGeometryService.ɵfac = function InlineDialogGeometryService_Factory(t) { return new (t || InlineDialogGeometryService)(i0__namespace.ɵɵinject(i0.PLATFORM_ID)); };
    InlineDialogGeometryService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: InlineDialogGeometryService, factory: InlineDialogGeometryService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InlineDialogGeometryService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }];
        }, null);
    })();

    var _c0$g = ["container"];
    function FabricInlineDialogComponent_ng_template_2_Template(rf, ctx) { }
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
        FabricInlineDialogComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.inlineDialogGeometryService
                .observeInlineDialogCords()
                .pipe(this.takeUntil())
                .subscribe(function (inlineDialogCords) {
                _this.dialogTopAttribute = inlineDialogCords.getVerticalPosition();
                _this.dialogLeftAttribute = inlineDialogCords.getHorizontalPosition();
                _this.changeDetectorRef.detectChanges();
            });
        };
        FabricInlineDialogComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
            this.createNestedComponent(this.inlineDialogNestedComponent);
            this.inlineDialogGeometryService.changeGeometry(this.elRef);
            this.changeDetectorRef.detectChanges();
        };
        FabricInlineDialogComponent.prototype.ngOnDestroy = function () {
            this.unsubscribe();
        };
        FabricInlineDialogComponent.prototype.clickOutside = function (event) {
            if (this.isContainerClicked(event)) {
                this.inlineDialogService.close();
            }
        };
        FabricInlineDialogComponent.prototype.isContainerClicked = function (event) {
            return !this.elRef.nativeElement.contains(event.target);
        };
        FabricInlineDialogComponent.prototype.createNestedComponent = function (component) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            if (this.inlineDialogNestedInjector) {
                this.container.createComponent(componentFactory, null, this.inlineDialogNestedInjector);
            }
            else {
                this.container.createComponent(componentFactory);
            }
            this.changeDetectorRef.detectChanges();
        };
        return FabricInlineDialogComponent;
    }(FabricThemedComponent));
    FabricInlineDialogComponent.ɵfac = function FabricInlineDialogComponent_Factory(t) { return new (t || FabricInlineDialogComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0.forwardRef(function () { return FabricInlineDialogService; })), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(InlineDialogGeometryService), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(FabricModalThemeService), i0__namespace.ɵɵdirectiveInject(themeToken)); };
    FabricInlineDialogComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricInlineDialogComponent, selectors: [["ng-component"]], viewQuery: function FabricInlineDialogComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$g, 5, i0.ViewContainerRef);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.container = _t.first);
            }
        }, features: [i0__namespace.ɵɵInheritDefinitionFeature], decls: 4, vars: 5, consts: [[1, "gui-inline-dialog-wrapper", 3, "ngClass"], [1, "gui-inline-dialog-content", 3, "click"], ["container", ""]], template: function FabricInlineDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵlistener("click", function FabricInlineDialogComponent_Template_div_click_1_listener($event) { return ctx.clickOutside($event); }, false, i0__namespace.ɵɵresolveDocument);
                i0__namespace.ɵɵtemplate(2, FabricInlineDialogComponent_ng_template_2_Template, 0, 0, "ng-template", null, 2, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleProp("left", ctx.dialogLeftAttribute, "px")("top", ctx.dialogTopAttribute, "px");
                i0__namespace.ɵɵproperty("ngClass", ctx.customClass);
            }
        }, directives: [i1__namespace.NgClass], styles: [".gui-inline-dialog-wrapper{box-sizing:border-box;position:absolute;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 7px #999;box-sizing:border-box;display:block;max-width:400px;z-index:1000}\n", ".gui-dark .gui-inline-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricInlineDialogComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: 'fabric-inline-dialog.component.html',
                        styleUrls: [
                            './fabric-inline-dialog.ngx.scss',
                            './themes/fabric-inline-dialog.dark.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () {
            return [{ type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.ChangeDetectorRef }, { type: FabricInlineDialogService, decorators: [{
                            type: i0.Inject,
                            args: [i0.forwardRef(function () { return FabricInlineDialogService; })]
                        }] }, { type: i0__namespace.ElementRef }, { type: InlineDialogGeometryService }, { type: i0__namespace.Renderer2 }, { type: FabricModalThemeService }, { type: exports.Theme, decorators: [{
                            type: i0.Inject,
                            args: [themeToken]
                        }] }];
        }, { container: [{
                    type: i0.ViewChild,
                    args: ['container', { read: i0.ViewContainerRef, static: false }]
                }] });
    })();

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
        FabricInlineDialogService.prototype.ngOnDestroy = function () {
            this.removeInlineDialog();
        };
        FabricInlineDialogService.prototype.open = function (element, component, config) {
            if (event) {
                event.stopPropagation();
            }
            if (!this.inlineDialogRef) {
                var parentInjector = this.injector, placement = exports.FabricPlacement.BOTTOM, offset = 0, theme = exports.Theme.FABRIC, customClass = void 0;
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
                var injector = i0.Injector.create({
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
        FabricInlineDialogService.prototype.close = function () {
            this.removeInlineDialog();
            this.unsub$.next();
            this.unsub$.complete();
            this.setOpened(false);
        };
        FabricInlineDialogService.prototype.isOpened = function () {
            return this.opened;
        };
        FabricInlineDialogService.prototype.onOpened = function () {
            return this.opened$.asObservable();
        };
        FabricInlineDialogService.prototype.appendInlineDialogToElement = function (component, injector, customClass) {
            var componentRef = this.componentFactoryResolver
                .resolveComponentFactory(FabricInlineDialogComponent)
                .create(injector);
            componentRef.instance.customClass = customClass;
            componentRef.instance.inlineDialogNestedComponent = component;
            componentRef.changeDetectorRef.detectChanges();
            this.applicationRef.attachView(componentRef.hostView);
            var domDialogElement = componentRef.hostView
                .rootNodes[0];
            this.document.body.appendChild(domDialogElement);
            this.inlineDialogRef = componentRef;
        };
        FabricInlineDialogService.prototype.removeInlineDialog = function () {
            if (this.inlineDialogRef) {
                this.applicationRef.detachView(this.inlineDialogRef.hostView);
                this.inlineDialogRef.destroy();
                this.inlineDialogRef = null;
            }
        };
        FabricInlineDialogService.prototype.setOpened = function (opened) {
            this.opened = opened;
            this.opened$.next(this.opened);
        };
        FabricInlineDialogService.prototype.closeOnEscKey = function () {
            var _this = this;
            var close$ = rxjs.fromEvent(this.document, 'keyup');
            close$
                .pipe(operators.filter(function (key) { return key.code === 'Escape'; }), operators.takeUntil(this.unsub$))
                .subscribe(function () { return _this.close(); });
        };
        return FabricInlineDialogService;
    }());
    FabricInlineDialogService.ɵfac = function FabricInlineDialogService_Factory(t) { return new (t || FabricInlineDialogService)(i0__namespace.ɵɵinject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵinject(i0__namespace.ApplicationRef), i0__namespace.ɵɵinject(i0__namespace.Injector), i0__namespace.ɵɵinject(i1.DOCUMENT), i0__namespace.ɵɵinject(InlineDialogGeometryService)); };
    FabricInlineDialogService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricInlineDialogService, factory: FabricInlineDialogService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricInlineDialogService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.ApplicationRef }, { type: i0__namespace.Injector }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }, { type: InlineDialogGeometryService }];
        }, null);
    })();

    var FabricDatePickerInlineDialogService = /** @class */ (function () {
        function FabricDatePickerInlineDialogService(fabricInlineDialogService) {
            this.fabricInlineDialogService = fabricInlineDialogService;
        }
        FabricDatePickerInlineDialogService.prototype.open = function (element, component, datePickerThem) {
            var theme = exports.Theme.FABRIC;
            if (datePickerThem) {
                theme = datePickerThem;
            }
            this.fabricInlineDialogService.open(element, component, { placement: exports.FabricPlacement.BOTTOM, offset: 0, theme: theme });
        };
        FabricDatePickerInlineDialogService.prototype.close = function () {
            this.fabricInlineDialogService.close();
        };
        FabricDatePickerInlineDialogService.prototype.isOpened = function () {
            return this.fabricInlineDialogService.isOpened();
        };
        FabricDatePickerInlineDialogService.prototype.onOpened = function () {
            return this.fabricInlineDialogService.onOpened();
        };
        return FabricDatePickerInlineDialogService;
    }());
    FabricDatePickerInlineDialogService.ɵfac = function FabricDatePickerInlineDialogService_Factory(t) { return new (t || FabricDatePickerInlineDialogService)(i0__namespace.ɵɵinject(FabricInlineDialogService)); };
    FabricDatePickerInlineDialogService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricDatePickerInlineDialogService, factory: FabricDatePickerInlineDialogService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerInlineDialogService, [{
                type: i0.Injectable
            }], function () { return [{ type: FabricInlineDialogService }]; }, null);
    })();

    var DatePickerIconComponent = /** @class */ (function () {
        function DatePickerIconComponent() {
        }
        return DatePickerIconComponent;
    }());
    DatePickerIconComponent.ɵfac = function DatePickerIconComponent_Factory(t) { return new (t || DatePickerIconComponent)(); };
    DatePickerIconComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatePickerIconComponent, selectors: [["gui-date-picker-icon"]], hostVars: 2, hostBindings: function DatePickerIconComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-date-picker-icon", true);
            }
        }, decls: 8, vars: 0, consts: [["height", "9.82", "viewBox", "0 0 8.76 9.82", "width", "8.76", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M401.41,308.63l-.46.15h-.15a.34.34,0,0,1-.08-.67l.68-.22a1.539,1.539,0,0,1,.38-.07h0a.39.39,0,0,1,.39.39V312a.38.38,0,0,1-.39.39.39.39,0,0,1-.39-.39Z", "fill", "#8c8b8b", "transform", "translate(-397.19 -304.36)"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "transform", "translate(0.64 9.32)", "x1", "7.39"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "transform", "translate(0.64 2.16)", "x1", "7.39"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "transform", "translate(0.5 0.5)", "y2", "8.82"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "transform", "translate(3.09 0.5)", "y2", "1.66"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "transform", "translate(5.68 0.5)", "y2", "1.66"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "transform", "translate(8.26 0.5)", "y2", "8.82"]], template: function DatePickerIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(0, "svg", 0);
                i0__namespace.ɵɵelement(1, "path", 1);
                i0__namespace.ɵɵelement(2, "line", 2);
                i0__namespace.ɵɵelement(3, "line", 3);
                i0__namespace.ɵɵelement(4, "line", 4);
                i0__namespace.ɵɵelement(5, "line", 5);
                i0__namespace.ɵɵelement(6, "line", 6);
                i0__namespace.ɵɵelement(7, "line", 7);
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: [".gui-date-picker-icon svg{height:16px;width:16px}.gui-date-picker-icon svg line,.gui-date-picker-icon svg path{transition:all .3s ease-in-out}.gui-date-picker-icon svg line{stroke:#aaa}.gui-date-picker-icon svg path{fill:#aaa}.gui-date-picker-icon svg:hover line{stroke:#464646}.gui-date-picker-icon svg:hover path{fill:#464646}\n", ".gui-dark .gui-date-picker-icon svg line{stroke:#bdbdbd}.gui-dark .gui-date-picker-icon svg path{fill:#bdbdbd}.gui-dark .gui-date-picker-icon svg:hover line{stroke:#616161}.gui-dark .gui-date-picker-icon svg:hover path{fill:#616161}\n"], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatePickerIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-date-picker-icon',
                        templateUrl: './date-picker-icon.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                        styleUrls: [
                            './date-picker-icon.ngx.scss',
                            './themes/date-picker-icon.dark.ngx.scss'
                        ],
                        host: {
                            '[class.gui-date-picker-icon]': 'true'
                        }
                    }]
            }], null, null);
    })();

    var _c0$f = ["datePicker"];
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
            _this.dateSelected = new i0.EventEmitter();
            _this.dialogOpened = new i0.EventEmitter();
            _this.datePickerForm = formBuilder.group({
                'date': ['']
            });
            return _this;
        }
        FabricDatePickerComponent.prototype.ngOnChanges = function (changes) {
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
        FabricDatePickerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.datePickerService
                .observeSelectedDate()
                .pipe(operators.take(1), this.takeUntil())
                .subscribe(function (date) {
                _this.pickedDate = date;
                _this.emitSelectedDate(date);
            });
            this.datePickerService
                .observeSelectedDate()
                .pipe(operators.skip(1), this.takeUntil())
                .subscribe(function (date) {
                _this.pickedDate = date;
                _this.emitSelectedDate(date);
                _this.changeDetectorRef.detectChanges();
                _this.closeDatePicker();
            });
            this.fabricDatePickerInlineDialogService
                .onOpened()
                .pipe(operators.skip(1), this.takeUntil())
                .subscribe(function (opened) {
                _this.dialogOpened.emit(opened);
            });
            this.observeDayChanges();
        };
        FabricDatePickerComponent.prototype.ngAfterViewInit = function () {
            if (this.openDialog) {
                this.openDatePicker();
            }
        };
        FabricDatePickerComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
            this.fabricDatePickerInlineDialogService.close();
        };
        FabricDatePickerComponent.prototype.openDatePicker = function () {
            if (!this.parentElement) {
                this.parentElement = this.datePickerRef;
            }
            this.fabricDatePickerInlineDialogService
                .open(this.parentElement, FabricDatePickerCalendarComponent, this.theme);
        };
        FabricDatePickerComponent.prototype.closeDatePicker = function () {
            this.fabricDatePickerInlineDialogService.close();
        };
        FabricDatePickerComponent.prototype.emitSelectedDate = function (date) {
            this.dateSelected.emit(date);
        };
        FabricDatePickerComponent.prototype.observeDayChanges = function () {
            var _this = this;
            this.datePickerForm
                .controls['date']
                .valueChanges
                .pipe(operators.distinctUntilChanged(), operators.debounceTime(1500), operators.map(function (day) { return _this.parse(day); }), this.takeUntil())
                .subscribe(function (day) {
                _this.datePickerService.dateSelected(day);
            });
        };
        FabricDatePickerComponent.prototype.parse = function (value) {
            if ((typeof value === 'string') && (value.includes('/'))) {
                var str = value.split('/');
                var dateValues = this.getDateValues(str), dateHasAllValues = dateValues && dateValues.length === 3;
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
        FabricDatePickerComponent.prototype.getDateValues = function (dateValues) {
            if (this.datePipeOptions.includes('/')) {
                var dateFormatParts = this.datePipeOptions.toLowerCase().split('/');
                var year_1, month_1, day_1;
                dateFormatParts.forEach(function (datePart, i) {
                    if (datePart.includes('d')) {
                        day_1 = +dateValues[i];
                    }
                    if (datePart.includes('m')) {
                        month_1 = +dateValues[i] - 1;
                    }
                    if (datePart.includes('y')) {
                        year_1 = +dateValues[i];
                    }
                });
                return [year_1, month_1, day_1];
            }
            return [];
        };
        return FabricDatePickerComponent;
    }(FabricReactive));
    FabricDatePickerComponent.ɵfac = function FabricDatePickerComponent_Factory(t) { return new (t || FabricDatePickerComponent)(i0__namespace.ɵɵdirectiveInject(FabricDatePickerInlineDialogService), i0__namespace.ɵɵdirectiveInject(FabricDatePickerService), i0__namespace.ɵɵdirectiveInject(FabricDatePickerCompositionService), i0__namespace.ɵɵdirectiveInject(i1__namespace$1.FormBuilder), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    FabricDatePickerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricDatePickerComponent, selectors: [["gui-date-picker"]], viewQuery: function FabricDatePickerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$f, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.datePickerRef = _t.first);
            }
        }, inputs: { parentElement: "parentElement", theme: "theme", selectDate: "selectDate", name: "name", openDialog: "openDialog", onlyDialog: "onlyDialog", datePipeOptions: "datePipeOptions" }, outputs: { dateSelected: "dateSelected", dialogOpened: "dialogOpened" }, features: [i0__namespace.ɵɵInheritDefinitionFeature, i0__namespace.ɵɵNgOnChangesFeature], decls: 6, vars: 7, consts: [[1, "gui-date-picker"], ["datePicker", ""], [3, "formGroup"], ["formControlName", "date", "gui-input", "", "readonly", "", 1, "gui-date-picker-input", 3, "name", "value"], [1, "gui-date-picker-icon", 3, "click"]], template: function FabricDatePickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0, 1);
                i0__namespace.ɵɵelementStart(2, "form", 2);
                i0__namespace.ɵɵelement(3, "input", 3);
                i0__namespace.ɵɵpipe(4, "date");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "gui-date-picker-icon", 4);
                i0__namespace.ɵɵlistener("click", function FabricDatePickerComponent_Template_gui_date_picker_icon_click_5_listener() { return ctx.openDatePicker(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("formGroup", ctx.datePickerForm);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("name", ctx.name)("value", i0__namespace.ɵɵpipeBind2(4, 4, ctx.pickedDate, ctx.datePipeOptions));
                i0__namespace.ɵɵattribute("disabled", ctx.inputDisabled);
            }
        }, directives: [i1__namespace$1.ɵNgNoValidate, i1__namespace$1.NgControlStatusGroup, i1__namespace$1.FormGroupDirective, i1__namespace$1.DefaultValueAccessor, FabricInputComponent, i1__namespace$1.NgControlStatus, i1__namespace$1.FormControlName, DatePickerIconComponent], pipes: [i1__namespace.DatePipe], styles: [".gui-date-picker{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;position:relative}.gui-date-picker .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}.gui-date-picker input,.gui-date-picker-calendar input{background:transparent;border-radius:0;border-width:0 0 1px 0;font-family:Arial;font-size:14px;padding:4px}.gui-date-picker input:disabled,.gui-date-picker-calendar input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon,.gui-date-picker-calendar .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}\n", ".gui-dark .gui-input{background:transparent;color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-arrow-icon:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year{color:#333}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#dfb8e6}\n", ".gui-material .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-material .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-material .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#6200ee}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-date-picker',
                        templateUrl: './fabric-date-picker.component.html',
                        styleUrls: [
                            './fabric-date-picker.ngx.scss',
                            './themes/fabric-date-picker.dark.ngx.scss',
                            './themes/fabric-date-picker.material.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return [{ type: FabricDatePickerInlineDialogService }, { type: FabricDatePickerService }, { type: FabricDatePickerCompositionService }, { type: i1__namespace$1.FormBuilder }, { type: i0__namespace.ChangeDetectorRef }]; }, { datePickerRef: [{
                    type: i0.ViewChild,
                    args: ['datePicker', { static: false }]
                }], parentElement: [{
                    type: i0.Input
                }], theme: [{
                    type: i0.Input
                }], selectDate: [{
                    type: i0.Input
                }], name: [{
                    type: i0.Input
                }], openDialog: [{
                    type: i0.Input
                }], onlyDialog: [{
                    type: i0.Input
                }], datePipeOptions: [{
                    type: i0.Input
                }], dateSelected: [{
                    type: i0.Output
                }], dialogOpened: [{
                    type: i0.Output
                }] });
    })();

    var FabricInlineDialogModule = /** @class */ (function () {
        function FabricInlineDialogModule() {
        }
        return FabricInlineDialogModule;
    }());
    FabricInlineDialogModule.ɵfac = function FabricInlineDialogModule_Factory(t) { return new (t || FabricInlineDialogModule)(); };
    FabricInlineDialogModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricInlineDialogModule });
    FabricInlineDialogModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            FabricInlineDialogService,
            InlineDialogGeometryService
        ], imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricInlineDialogModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
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
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricInlineDialogModule, { declarations: [FabricInlineDialogComponent], imports: [i1.CommonModule] }); })();

    var FabricInputModule = /** @class */ (function () {
        function FabricInputModule() {
        }
        return FabricInputModule;
    }());
    FabricInputModule.ɵfac = function FabricInputModule_Factory(t) { return new (t || FabricInputModule)(); };
    FabricInputModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricInputModule });
    FabricInputModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricInputModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricInputComponent
                        ],
                        exports: [
                            FabricInputComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricInputModule, { declarations: [FabricInputComponent], imports: [i1.CommonModule], exports: [FabricInputComponent] }); })();

    var FabricArrowIconModule = /** @class */ (function () {
        function FabricArrowIconModule() {
        }
        return FabricArrowIconModule;
    }());
    FabricArrowIconModule.ɵfac = function FabricArrowIconModule_Factory(t) { return new (t || FabricArrowIconModule)(); };
    FabricArrowIconModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricArrowIconModule });
    FabricArrowIconModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricArrowIconModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricArrowIconComponent
                        ],
                        exports: [
                            FabricArrowIconComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricArrowIconModule, { declarations: [FabricArrowIconComponent], imports: [i1.CommonModule], exports: [FabricArrowIconComponent] }); })();

    var DatePickerIconModule = /** @class */ (function () {
        function DatePickerIconModule() {
        }
        return DatePickerIconModule;
    }());
    DatePickerIconModule.ɵfac = function DatePickerIconModule_Factory(t) { return new (t || DatePickerIconModule)(); };
    DatePickerIconModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: DatePickerIconModule });
    DatePickerIconModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatePickerIconModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            DatePickerIconComponent
                        ],
                        exports: [
                            DatePickerIconComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(DatePickerIconModule, { declarations: [DatePickerIconComponent], imports: [i1.CommonModule], exports: [DatePickerIconComponent] }); })();

    var FabricDatePickerModule = /** @class */ (function () {
        function FabricDatePickerModule() {
        }
        return FabricDatePickerModule;
    }());
    FabricDatePickerModule.ɵfac = function FabricDatePickerModule_Factory(t) { return new (t || FabricDatePickerModule)(); };
    FabricDatePickerModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricDatePickerModule });
    FabricDatePickerModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            FabricDatePickerService,
            FabricDatePickerCompositionService,
            FabricDatePickerCalendarService,
            FabricDatePickerCalendarViewService,
            FabricDatePickerYearsService,
            FabricDatePickerWeeks,
            FabricDatePickerYears,
            FabricDatePickerInlineDialogService
        ], imports: [[
                i1.CommonModule,
                FabricInlineDialogModule,
                i1$1.ReactiveFormsModule,
                FabricInputModule,
                FabricButtonModule,
                DatePickerIconModule,
                FabricArrowIconModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDatePickerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
                            FabricInlineDialogModule,
                            i1$1.ReactiveFormsModule,
                            FabricInputModule,
                            FabricButtonModule,
                            DatePickerIconModule,
                            FabricArrowIconModule
                        ],
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
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricDatePickerModule, { declarations: [FabricDatePickerCalendarComponent,
                FabricDatePickerComponent,
                FabricDatePickerDaysViewComponent,
                FabricDatePickerMonthsViewComponent,
                FabricDatePickerYearsComponent,
                FabricDatePickerViewPanelComponent,
                FabricTimePickerComponent], imports: [i1.CommonModule,
                FabricInlineDialogModule,
                i1$1.ReactiveFormsModule,
                FabricInputModule,
                FabricButtonModule,
                DatePickerIconModule,
                FabricArrowIconModule], exports: [FabricDatePickerCalendarComponent,
                FabricDatePickerComponent] });
    })();

    var DialogService = /** @class */ (function (_super) {
        __extends(DialogService, _super);
        function DialogService() {
            return _super.call(this) || this;
        }
        return DialogService;
    }(FabricReactive));

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
        FabricDrawerService.prototype.ngOnDestroy = function () {
            this.removeDrawer();
            _super.prototype.ngOnDestroy.call(this);
        };
        FabricDrawerService.prototype.open = function (element, component, config) {
            if (event) {
                event.stopPropagation();
            }
            if (!this.drawerRef) {
                var theme = exports.Theme.FABRIC, parentInjector = this.injector, closeOnClickOutside = false;
                if (config && config.theme) {
                    theme = config.theme;
                }
                if (config && config.injector) {
                    parentInjector = config.injector;
                }
                if (config && config.closeOnClickOutside) {
                    closeOnClickOutside = config.closeOnClickOutside;
                }
                var injector = i0.Injector.create({
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
        FabricDrawerService.prototype.close = function () {
            this.removeDrawer();
        };
        FabricDrawerService.prototype.closeOnEscKey = function () {
            var _this = this;
            var close$ = rxjs.fromEvent(this.document, 'keyup');
            close$
                .pipe(operators.filter(function (key) { return key.code === 'Escape'; }), this.takeUntil())
                .subscribe(function () { return _this.close(); });
        };
        FabricDrawerService.prototype.createAndAppend = function (element, component, injector, closeOnClickOutside) {
            var componentRef = this.componentFactoryResolver
                .resolveComponentFactory(FabricDrawerComponent)
                .create(injector);
            componentRef.instance.dialogNestedComponent = component;
            componentRef.instance.closeOnClickOutside = closeOnClickOutside;
            componentRef.changeDetectorRef.detectChanges();
            this.applicationRef.attachView(componentRef.hostView);
            var domDrawerElement = componentRef.hostView
                .rootNodes[0];
            element.nativeElement.appendChild(domDrawerElement);
            this.drawerRef = componentRef;
        };
        FabricDrawerService.prototype.removeDrawer = function () {
            if (this.drawerRef) {
                this.applicationRef.detachView(this.drawerRef.hostView);
                this.drawerRef.destroy();
                this.drawerRef = null;
            }
        };
        return FabricDrawerService;
    }(DialogService));
    FabricDrawerService.ɵfac = function FabricDrawerService_Factory(t) { return new (t || FabricDrawerService)(i0__namespace.ɵɵinject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵinject(i0__namespace.ApplicationRef), i0__namespace.ɵɵinject(i0__namespace.Injector), i0__namespace.ɵɵinject(i1.DOCUMENT)); };
    FabricDrawerService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricDrawerService, factory: FabricDrawerService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDrawerService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.ApplicationRef }, { type: i0__namespace.Injector }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }];
        }, null);
    })();

    var selector = 'gui-close-icon';
    var FabricCloseIconComponent = /** @class */ (function () {
        function FabricCloseIconComponent() {
        }
        return FabricCloseIconComponent;
    }());
    FabricCloseIconComponent.ɵfac = function FabricCloseIconComponent_Factory(t) { return new (t || FabricCloseIconComponent)(); };
    FabricCloseIconComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricCloseIconComponent, selectors: [["gui-close-icon"]], hostVars: 2, hostBindings: function FabricCloseIconComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-close-icon-wrapper", true);
            }
        }, decls: 1, vars: 0, consts: [[1, "gui-close-icon"]], template: function FabricCloseIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "span", 0);
            }
        }, styles: [".gui-close-icon-wrapper .gui-close-icon{cursor:pointer;height:16px;position:absolute;right:8px;top:8px;width:16px}.gui-close-icon-wrapper .gui-close-icon:before,.gui-close-icon-wrapper .gui-close-icon:after{background-color:#aaa;content:\" \";height:16px;left:7px;position:absolute;width:2px}.gui-close-icon-wrapper .gui-close-icon:before{-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-close-icon-wrapper .gui-close-icon:after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.gui-close-icon-wrapper .gui-close-icon:hover:before,.gui-close-icon-wrapper .gui-close-icon:hover:after{background-color:#464646}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricCloseIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: selector,
                        template: "\n\t\t<span class=\"gui-close-icon\"></span>\n\t",
                        styleUrls: ['./fabric-close-icon.ngx.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-close-icon-wrapper]': 'true'
                        }
                    }]
            }], null, null);
    })();

    var _c0$e = ["container"];
    function FabricDrawerComponent_ng_template_3_Template(rf, ctx) { }
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
        FabricDrawerComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
            this.createNestedComponent(this.dialogNestedComponent);
        };
        FabricDrawerComponent.prototype.closeDrawer = function () {
            this.dialogService.close();
        };
        FabricDrawerComponent.prototype.clickOutside = function (event) {
            if (this.closeOnClickOutside) {
                if (this.isContainerClicked(event)) {
                    this.closeDrawer();
                }
            }
        };
        FabricDrawerComponent.prototype.isContainerClicked = function (event) {
            var dialogContentRef = this.elRef.nativeElement.querySelector('.gui-drawer-content');
            if (dialogContentRef) {
                return !dialogContentRef.contains(event.target);
            }
            return false;
        };
        FabricDrawerComponent.prototype.createNestedComponent = function (component) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.container.createComponent(componentFactory);
            this.changeDetectorRef.detectChanges();
        };
        return FabricDrawerComponent;
    }(FabricThemedComponent));
    FabricDrawerComponent.ɵfac = function FabricDrawerComponent_Factory(t) { return new (t || FabricDrawerComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(FabricDrawerService), i0__namespace.ɵɵdirectiveInject(FabricModalThemeService), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    FabricDrawerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricDrawerComponent, selectors: [["ng-component"]], viewQuery: function FabricDrawerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$e, 5, i0.ViewContainerRef);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.container = _t.first);
            }
        }, inputs: { closeOnClickOutside: "closeOnClickOutside" }, features: [i0__namespace.ɵɵInheritDefinitionFeature], decls: 5, vars: 0, consts: [[1, "gui-drawer-wrapper", 3, "click"], [1, "gui-drawer-content"], [3, "click"], ["container", ""]], template: function FabricDrawerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵlistener("click", function FabricDrawerComponent_Template_div_click_0_listener($event) { return ctx.clickOutside($event); }, false, i0__namespace.ɵɵresolveDocument);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵelementStart(2, "gui-close-icon", 2);
                i0__namespace.ɵɵlistener("click", function FabricDrawerComponent_Template_gui_close_icon_click_2_listener() { return ctx.closeDrawer(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(3, FabricDrawerComponent_ng_template_3_Template, 0, 0, "ng-template", null, 3, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [FabricCloseIconComponent], styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;height:100%;position:absolute;right:0;top:0;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;box-shadow:-3px 0 4px #ccc;height:100%;max-width:400px;position:relative}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDrawerComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './fabric-drawer.component.html',
                        styleUrls: ['./fabric-drawer.ngx.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return [{ type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.ChangeDetectorRef }, { type: i0__namespace.ElementRef }, { type: FabricDrawerService }, { type: FabricModalThemeService }, { type: i0__namespace.Renderer2 }]; }, { container: [{
                    type: i0.ViewChild,
                    args: ['container', { read: i0.ViewContainerRef, static: false }]
                }], closeOnClickOutside: [{
                    type: i0.Input
                }] });
    })();

    var FabricCloseIconModule = /** @class */ (function () {
        function FabricCloseIconModule() {
        }
        return FabricCloseIconModule;
    }());
    FabricCloseIconModule.ɵfac = function FabricCloseIconModule_Factory(t) { return new (t || FabricCloseIconModule)(); };
    FabricCloseIconModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricCloseIconModule });
    FabricCloseIconModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricCloseIconModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricCloseIconComponent
                        ],
                        exports: [
                            FabricCloseIconComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricCloseIconModule, { declarations: [FabricCloseIconComponent], imports: [i1.CommonModule], exports: [FabricCloseIconComponent] }); })();

    var FabricDrawerModule = /** @class */ (function () {
        function FabricDrawerModule() {
        }
        return FabricDrawerModule;
    }());
    FabricDrawerModule.ɵfac = function FabricDrawerModule_Factory(t) { return new (t || FabricDrawerModule)(); };
    FabricDrawerModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricDrawerModule });
    FabricDrawerModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            FabricDrawerService
        ], imports: [[
                i1.CommonModule,
                FabricCloseIconModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDrawerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
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
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricDrawerModule, { declarations: [FabricDrawerComponent], imports: [i1.CommonModule,
                FabricCloseIconModule] });
    })();

    var Geometry = /** @class */ (function () {
        function Geometry(container, menu, windowSize) {
            this.container = container;
            this.menu = menu;
            this.windowSize = windowSize;
            this.calculate(this.menu, this.windowSize);
        }
        Geometry.prototype.getContainerHeight = function () {
            return this.containerHeight;
        };
        Geometry.prototype.getContainerWidth = function () {
            return this.containerWidth;
        };
        Geometry.prototype.canOpenDownward = function () {
            return this.availableBottomSpace > 0;
        };
        Geometry.prototype.canOpenUpward = function () {
            return this.availableTopSpace > 0;
        };
        Geometry.prototype.calculate = function (menu, windowSize) {
            var containerEl = this.container.nativeElement, menuHeight = menu.nativeElement.offsetHeight, rectBottom = containerEl.getBoundingClientRect().bottom;
            this.containerHeight = containerEl.offsetHeight;
            this.containerWidth = containerEl.offsetWidth;
            this.availableBottomSpace = windowSize - rectBottom - menuHeight;
            this.availableTopSpace = rectBottom - menuHeight - this.containerHeight;
        };
        return Geometry;
    }());

    var GeometryService = /** @class */ (function () {
        function GeometryService() {
            this.geometryResults$ = new rxjs.Subject();
        }
        GeometryService.prototype.watchGeometry = function () {
            return this.geometryResults$.asObservable();
        };
        GeometryService.prototype.changeGeometry = function (container, menu, windowSize) {
            var geometry = new Geometry(container, menu, windowSize);
            this.geometryResults$.next(geometry);
        };
        return GeometryService;
    }());
    GeometryService.ɵfac = function GeometryService_Factory(t) { return new (t || GeometryService)(); };
    GeometryService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: GeometryService, factory: GeometryService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GeometryService, [{
                type: i0.Injectable
            }], null, null);
    })();

    exports.Placement = void 0;
    (function (Placement) {
        Placement[Placement["Right"] = 0] = "Right";
        Placement[Placement["Left"] = 1] = "Left";
    })(exports.Placement || (exports.Placement = {}));

    var _c0$d = ["dropdownMenu"];
    var _c1$1 = ["container"];
    function FabricDropdownComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelement(1, "gui-arrow-icon", 6);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵclassProp("gui-dropdown-arrow", ctx_r1.isArrowEnabled);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("direction", ctx_r1.arrowDirection);
        }
    }
    var _c2$1 = ["*"];
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
        FabricDropdownComponent.prototype.onResize = function () {
            if (i1.isPlatformBrowser(this.platformId)) {
                this.windowSize = window.innerHeight;
            }
        };
        FabricDropdownComponent.prototype.ngOnChanges = function (changes) {
            if (changes.placement) {
                this.changePlacement();
            }
            if (changes.arrow) {
                this.isArrowEnabled = this.arrow;
            }
        };
        FabricDropdownComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.geometryService
                .watchGeometry()
                .pipe(this.takeUntil())
                .subscribe(function (geometry) {
                _this.containerHeight = geometry.getContainerHeight();
                _this.containerWidth = geometry.getContainerWidth();
                _this.canOpenUpward = geometry.canOpenUpward();
                _this.canOpenDownward = geometry.canOpenDownward();
            });
        };
        FabricDropdownComponent.prototype.tryToOpen = function (event) {
            if (this.isContainerDisabled(event)) {
                event.stopPropagation();
            }
            else {
                this.openMenu(!this.open);
                this.changeDetectorRef.detectChanges();
            }
        };
        FabricDropdownComponent.prototype.tryToOpenOnHover = function () {
            if (this.showOnHover) {
                this.openMenu(!this.open);
                this.changeDetectorRef.detectChanges();
            }
        };
        FabricDropdownComponent.prototype.hideOnHover = function () {
            if (this.showOnHover) {
                this.hideItems();
                this.open = false;
            }
        };
        FabricDropdownComponent.prototype.clickOutside = function (event) {
            if (this.isContainerClicked(event)) {
                this.openMenu(false);
            }
        };
        FabricDropdownComponent.prototype.isDirectionLeft = function () {
            return this.isArrowEnabled && this.arrowDirection === Direction.LEFT;
        };
        FabricDropdownComponent.prototype.openMenu = function (opened) {
            this.open = opened;
            if (this.open) {
                this.showItems();
            }
            else {
                this.hideItems();
            }
        };
        FabricDropdownComponent.prototype.showItems = function () {
            this.addClass(this.elementRef.nativeElement, 'gui-menu-opened');
            this.geometryService.changeGeometry(this.containerRef, this.dropdownMenuRef, this.windowSize);
            if (this.canOpenDownward || !this.canOpenUpward) {
                this.openDownward();
            }
            else {
                this.openUpward();
            }
            if (this.placement === exports.Placement.Right) {
                this.openRight();
            }
            if (this.placement === exports.Placement.Left) {
                this.openLeft();
            }
        };
        FabricDropdownComponent.prototype.openDownward = function () {
            this.topPosition = null;
            this.bottomPosition = this.containerHeight;
        };
        FabricDropdownComponent.prototype.openUpward = function () {
            this.bottomPosition = null;
            this.topPosition = this.containerHeight;
        };
        FabricDropdownComponent.prototype.openRight = function () {
            this.bottomPosition = -this.topBorderWidth;
            this.topPosition = null;
            this.horizontalPosition = this.containerWidth;
        };
        FabricDropdownComponent.prototype.openLeft = function () {
            this.bottomPosition = -this.topBorderWidth;
            this.topPosition = null;
            this.horizontalPosition = -(this.containerWidth + 1);
        };
        FabricDropdownComponent.prototype.changePlacement = function () {
            switch (this.placement) {
                case exports.Placement.Right: {
                    this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
                    this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
                    this.arrowDirection = Direction.RIGHT;
                    break;
                }
                case exports.Placement.Left: {
                    this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
                    this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
                    this.arrowDirection = Direction.LEFT;
                    break;
                }
                default:
                    break;
            }
        };
        FabricDropdownComponent.prototype.hideItems = function () {
            var itemsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-menu-opened');
            if (itemsElHasOpenClass) {
                this.removeClass(this.elementRef.nativeElement, 'gui-menu-opened');
            }
        };
        FabricDropdownComponent.prototype.isContainerClicked = function (event) {
            return !this.elementRef.nativeElement.contains(event.target);
        };
        FabricDropdownComponent.prototype.isContainerDisabled = function (event) {
            return event.target.classList.contains('gui-disabled');
        };
        FabricDropdownComponent.prototype.addClass = function (element, name) {
            this.renderer.addClass(element, name);
        };
        FabricDropdownComponent.prototype.removeClass = function (element, name) {
            this.renderer.removeClass(element, name);
        };
        return FabricDropdownComponent;
    }(FabricReactive));
    FabricDropdownComponent.ɵfac = function FabricDropdownComponent_Factory(t) { return new (t || FabricDropdownComponent)(i0__namespace.ɵɵdirectiveInject(i0.PLATFORM_ID), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(GeometryService)); };
    FabricDropdownComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricDropdownComponent, selectors: [["gui-dropdown"]], viewQuery: function FabricDropdownComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$d, 7);
                i0__namespace.ɵɵviewQuery(_c1$1, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.dropdownMenuRef = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.containerRef = _t.first);
            }
        }, hostVars: 2, hostBindings: function FabricDropdownComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("resize", function FabricDropdownComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, i0__namespace.ɵɵresolveWindow);
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-dropdown", true);
            }
        }, inputs: { disabled: "disabled", dropdownText: "dropdownText", arrow: "arrow", placement: "placement", width: "width", showOnHover: "showOnHover" }, features: [i0__namespace.ɵɵProvidersFeature([
                GeometryService
            ]), i0__namespace.ɵɵInheritDefinitionFeature, i0__namespace.ɵɵNgOnChangesFeature], ngContentSelectors: _c2$1, decls: 8, vars: 14, consts: [[1, "gui-dropdown-container", 3, "click", "mouseenter", "mouseleave"], ["container", ""], [1, "gui-dropdown-text"], [3, "gui-dropdown-arrow", 4, "ngIf"], [1, "gui-dropdown-menu"], ["dropdownMenu", ""], [3, "direction"]], template: function FabricDropdownComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0, 1);
                i0__namespace.ɵɵlistener("click", function FabricDropdownComponent_Template_div_click_0_listener($event) { return ctx.tryToOpen($event); })("click", function FabricDropdownComponent_Template_div_click_0_listener($event) { return ctx.clickOutside($event); }, false, i0__namespace.ɵɵresolveDocument)("mouseenter", function FabricDropdownComponent_Template_div_mouseenter_0_listener() { return ctx.tryToOpenOnHover(); })("mouseleave", function FabricDropdownComponent_Template_div_mouseleave_0_listener() { return ctx.hideOnHover(); });
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(4, FabricDropdownComponent_div_4_Template, 2, 3, "div", 3);
                i0__namespace.ɵɵelementStart(5, "div", 4, 5);
                i0__namespace.ɵɵprojection(7);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleProp("width", ctx.width, "px");
                i0__namespace.ɵɵclassProp("gui-arrow-left", ctx.isDirectionLeft())("gui-disabled", ctx.disabled);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate(ctx.dropdownText);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.isArrowEnabled);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("bottom", ctx.topPosition, "px")("left", ctx.horizontalPosition, "px")("top", ctx.bottomPosition, "px");
            }
        }, directives: [i1__namespace.NgIf, FabricArrowIconComponent], styles: [".gui-dropdown .gui-dropdown-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 12px;position:relative;width:auto}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container:hover .gui-arrow-icon svg path{stroke:#464646}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{cursor:pointer;position:absolute;right:12px;top:8px}.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{background:inherit;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;display:none;left:-1px;overflow:hidden;position:absolute;width:inherit;z-index:2}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{list-style-type:none;padding:8px 12px;width:inherit}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#cccccc}.gui-dropdown .gui-dropdown-container.gui-arrow-left{padding:8px 12px 8px 32px}.gui-dropdown .gui-dropdown-container.gui-arrow-left .gui-dropdown-arrow{left:12px;right:auto;right:initial}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}\n", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow svg path{stroke:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#616161}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDropdownComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-dropdown',
                        templateUrl: './dropdown.component.html',
                        styleUrls: [
                            './dropdown.ngx.scss',
                            './themes/dropdown.material.ngx.scss',
                            './themes/dropdown.dark.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-dropdown]': 'true'
                        },
                        providers: [
                            GeometryService
                        ]
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }, { type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }, { type: i0__namespace.ChangeDetectorRef }, { type: GeometryService }];
        }, { dropdownMenuRef: [{
                    type: i0.ViewChild,
                    args: ['dropdownMenu', { static: true }]
                }], containerRef: [{
                    type: i0.ViewChild,
                    args: ['container', { static: true }]
                }], onResize: [{
                    type: i0.HostListener,
                    args: ['window:resize']
                }], disabled: [{
                    type: i0.Input
                }], dropdownText: [{
                    type: i0.Input
                }], arrow: [{
                    type: i0.Input
                }], placement: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }], showOnHover: [{
                    type: i0.Input
                }] });
    })();

    var _c0$c = ["*"];
    var DropdownItemComponent = /** @class */ (function () {
        function DropdownItemComponent() {
        }
        return DropdownItemComponent;
    }());
    DropdownItemComponent.ɵfac = function DropdownItemComponent_Factory(t) { return new (t || DropdownItemComponent)(); };
    DropdownItemComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DropdownItemComponent, selectors: [["gui-dropdown-item"]], ngContentSelectors: _c0$c, decls: 2, vars: 0, consts: [[1, "gui-item"]], template: function DropdownItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵprojection(1);
                i0__namespace.ɵɵelementEnd();
            }
        }, encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DropdownItemComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-dropdown-item',
                        templateUrl: './dropdown-item.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], null, null);
    })();

    var FabricDropdownModule = /** @class */ (function () {
        function FabricDropdownModule() {
        }
        return FabricDropdownModule;
    }());
    FabricDropdownModule.ɵfac = function FabricDropdownModule_Factory(t) { return new (t || FabricDropdownModule)(); };
    FabricDropdownModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricDropdownModule });
    FabricDropdownModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule,
                FabricArrowIconModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDropdownModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
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
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricDropdownModule, { declarations: [FabricDropdownComponent,
                DropdownItemComponent], imports: [i1.CommonModule,
                FabricArrowIconModule], exports: [FabricDropdownComponent,
                DropdownItemComponent] });
    })();

    var FabricDialogService = /** @class */ (function () {
        function FabricDialogService(componentFactoryResolver, applicationRef, injector, document) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.applicationRef = applicationRef;
            this.injector = injector;
            this.document = document;
            this.dialogRef = null;
            this.unsub$ = new rxjs.Subject();
        }
        FabricDialogService.prototype.ngOnDestroy = function () {
            this.removeDialog();
        };
        FabricDialogService.prototype.open = function (component, config) {
            if (!this.dialogRef) {
                var theme = exports.Theme.FABRIC, parentInjector = this.injector;
                if (config && config.theme) {
                    theme = config.theme;
                }
                if (config && config.injector) {
                    parentInjector = config.injector;
                }
                var injector = i0.Injector.create({
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
        FabricDialogService.prototype.close = function () {
            this.removeDialog();
            this.unsub$.next();
            this.unsub$.complete();
        };
        FabricDialogService.prototype.closeOnEscKey = function () {
            var _this = this;
            var close$ = rxjs.fromEvent(this.document, 'keyup');
            close$
                .pipe(operators.filter(function (key) { return key.code === 'Escape'; }), operators.takeUntil(this.unsub$))
                .subscribe(function () { return _this.close(); });
        };
        FabricDialogService.prototype.createAndAppend = function (component, injector) {
            var componentRef = this.componentFactoryResolver
                .resolveComponentFactory(FabricDialogComponent)
                .create(injector);
            componentRef.instance.dialogNestedComponent = component;
            componentRef.changeDetectorRef.detectChanges();
            this.applicationRef.attachView(componentRef.hostView);
            var domDialogElement = componentRef.hostView
                .rootNodes[0];
            this.document.body.appendChild(domDialogElement);
            this.dialogRef = componentRef;
        };
        FabricDialogService.prototype.removeDialog = function () {
            if (this.dialogRef) {
                this.applicationRef.detachView(this.dialogRef.hostView);
                this.dialogRef.destroy();
                this.dialogRef = null;
            }
        };
        return FabricDialogService;
    }());
    FabricDialogService.ɵfac = function FabricDialogService_Factory(t) { return new (t || FabricDialogService)(i0__namespace.ɵɵinject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵinject(i0__namespace.ApplicationRef), i0__namespace.ɵɵinject(i0__namespace.Injector), i0__namespace.ɵɵinject(i1.DOCUMENT)); };
    FabricDialogService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricDialogService, factory: FabricDialogService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDialogService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.ApplicationRef }, { type: i0__namespace.Injector }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }];
        }, null);
    })();

    var _c0$b = ["container"];
    function FabricDialogComponent_ng_template_3_Template(rf, ctx) { }
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
        FabricDialogComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
            this.createNestedComponent(this.dialogNestedComponent);
        };
        FabricDialogComponent.prototype.closeDialog = function () {
            this.dialogService.close();
        };
        FabricDialogComponent.prototype.clickOutside = function (event) {
            if (this.isContainerClicked(event)) {
                this.dialogService.close();
            }
        };
        FabricDialogComponent.prototype.isContainerClicked = function (event) {
            var dialogContentRef = this.elRef.nativeElement.querySelector('.gui-dialog-content');
            if (dialogContentRef) {
                return !dialogContentRef.contains(event.target);
            }
            return false;
        };
        FabricDialogComponent.prototype.createNestedComponent = function (component) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.container.createComponent(componentFactory);
            this.changeDetectorRef.detectChanges();
        };
        return FabricDialogComponent;
    }(FabricThemedComponent));
    FabricDialogComponent.ɵfac = function FabricDialogComponent_Factory(t) { return new (t || FabricDialogComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(FabricModalThemeService), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(i0.forwardRef(function () { return FabricDialogService; }))); };
    FabricDialogComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricDialogComponent, selectors: [["gui-fabric-dialog"]], viewQuery: function FabricDialogComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$b, 5, i0.ViewContainerRef);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.container = _t.first);
            }
        }, hostVars: 2, hostBindings: function FabricDialogComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-fabric-dialog", true);
            }
        }, features: [i0__namespace.ɵɵInheritDefinitionFeature], decls: 6, vars: 0, consts: [[1, "gui-dialog-blanket"], [1, "gui-dialog-wrapper", 3, "click"], [1, "gui-dialog-content"], ["container", ""], [3, "click"]], template: function FabricDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵlistener("click", function FabricDialogComponent_Template_div_click_1_listener($event) { return ctx.clickOutside($event); });
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵtemplate(3, FabricDialogComponent_ng_template_3_Template, 0, 0, "ng-template", null, 3, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementStart(5, "gui-close-icon", 4);
                i0__namespace.ɵɵlistener("click", function FabricDialogComponent_Template_gui_close_icon_click_5_listener() { return ctx.closeDialog(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [FabricCloseIconComponent], styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}@use \"common/variables\";.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-fabric-dialog *,.gui-fabric-dialog *:after,.gui-fabric-dialog *:before{box-sizing:border-box}.gui-fabric-dialog input{font-size:13px;outline:0}.gui-dialog-blanket{background:rgba(0,0,0,.32);height:100%;left:0;pointer-events:none;position:fixed;top:0;width:100%;z-index:1000}.gui-dialog-wrapper{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;font-family:Arial;height:100%;-ms-flex-pack:center;justify-content:center;left:0;pointer-events:auto;position:fixed;top:0;width:100%;z-index:1000}.gui-dialog-wrapper .gui-dialog-content{-webkit-animation:display-dialog .1s ease-in;animation:display-dialog .1s ease-in;background-color:#fff;border-radius:4px;box-shadow:0 3px 7px #999;max-width:400px;padding:24px;position:relative}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-title{color:#333;font-size:20px;margin:0 0 16px}@-webkit-keyframes display-dialog{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes display-dialog{0%{transform:scale(0)}to{transform:scale(1)}}\n", ".gui-dark .gui-dialog-wrapper .gui-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before,.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after{background:#bdbdbd}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDialogComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-fabric-dialog',
                        templateUrl: './fabric-dialog.component.html',
                        styleUrls: [
                            './fabric-dialog.ngx.scss',
                            './themes/fabric-dialog.dark.ngx.scss'
                        ],
                        host: {
                            '[class.gui-fabric-dialog]': 'true'
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () {
            return [{ type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.ChangeDetectorRef }, { type: i0__namespace.ElementRef }, { type: FabricModalThemeService }, { type: i0__namespace.Renderer2 }, { type: FabricDialogService, decorators: [{
                            type: i0.Inject,
                            args: [i0.forwardRef(function () { return FabricDialogService; })]
                        }] }];
        }, { container: [{
                    type: i0.ViewChild,
                    args: ['container', { read: i0.ViewContainerRef, static: false }]
                }] });
    })();

    var FabricDialogThemeService = /** @class */ (function () {
        function FabricDialogThemeService() {
            this.theme$ = new rxjs.Subject();
        }
        FabricDialogThemeService.prototype.onTheme = function () {
            return this.theme$.asObservable();
        };
        FabricDialogThemeService.prototype.nextTheme = function (theme) {
            this.theme$.next(this.toTheme(theme));
        };
        FabricDialogThemeService.prototype.toTheme = function (theme) {
            switch (theme.toLowerCase()) {
                case 'fabric':
                    return exports.Theme.FABRIC;
                case 'material':
                    return exports.Theme.MATERIAL;
                case 'generic':
                    return exports.Theme.GENERIC;
                case 'light':
                    return exports.Theme.LIGHT;
                case 'dark':
                    return exports.Theme.DARK;
                default:
                    return exports.Theme.FABRIC;
            }
        };
        return FabricDialogThemeService;
    }());
    FabricDialogThemeService.ɵfac = function FabricDialogThemeService_Factory(t) { return new (t || FabricDialogThemeService)(); };
    FabricDialogThemeService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricDialogThemeService, factory: FabricDialogThemeService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDialogThemeService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FabricDialogModule = /** @class */ (function () {
        function FabricDialogModule() {
        }
        return FabricDialogModule;
    }());
    FabricDialogModule.ɵfac = function FabricDialogModule_Factory(t) { return new (t || FabricDialogModule)(); };
    FabricDialogModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricDialogModule });
    FabricDialogModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            FabricDialogService,
            FabricDialogThemeService
        ], imports: [[
                i1.CommonModule,
                FabricCloseIconModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricDialogModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
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
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricDialogModule, { declarations: [FabricDialogComponent], imports: [i1.CommonModule,
                FabricCloseIconModule] });
    })();

    var _c0$a = ["*"];
    var FabricProgressBarComponent = /** @class */ (function () {
        function FabricProgressBarComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
        }
        FabricProgressBarComponent.prototype.ngOnChanges = function (changes) {
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
        FabricProgressBarComponent.prototype.addClass = function (className) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        };
        FabricProgressBarComponent.prototype.removeClass = function (className) {
            this.renderer.removeClass(this.elementRef.nativeElement, className);
        };
        return FabricProgressBarComponent;
    }());
    FabricProgressBarComponent.ɵfac = function FabricProgressBarComponent_Factory(t) { return new (t || FabricProgressBarComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    FabricProgressBarComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricProgressBarComponent, selectors: [["gui-progress-bar"]], hostVars: 2, hostBindings: function FabricProgressBarComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-progress", true);
            }
        }, inputs: { progress: "progress", color: "color", height: "height", width: "width", textTop: "textTop", textAlign: "textAlign", primary: "primary", secondary: "secondary" }, features: [i0__namespace.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$a, decls: 4, vars: 12, consts: [[1, "gui-progress-bar"], [1, "gui-progress"], [1, "gui-progress-text"]], template: function FabricProgressBarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵelementStart(2, "span", 2);
                i0__namespace.ɵɵprojection(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleProp("height", ctx.height, "px")("text-align", ctx.textAlign)("width", ctx.width, "px");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("background", ctx.color)("width", ctx.progress, "%");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("top", ctx.textTop);
            }
        }, styles: [".gui-progress-bar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-color:#d6d6d6;border-style:solid;border-width:1px;display:block;font-family:Arial;height:18px;margin-bottom:10px;text-align:center}.gui-progress-bar .gui-progress{background:#999;border-bottom:inherit;height:inherit;width:0}.gui-primary .gui-progress-bar .gui-progress.gui-progress{background:#2185d0}.gui-secondary .gui-progress-bar .gui-progress.gui-progress{background:#3cb371}.gui-progress-bar .gui-progress-text{position:relative}\n", ".gui-material .gui-progress-bar{border-color:#5262c5;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-progress{background:#3949ab}.gui-material .gui-progress.gui-primary .gui-progress{background:#6200ee}.gui-material .gui-progress.gui-primary .gui-progress-bar{border-color:#6200ee}.gui-material .gui-progress.gui-secondary .gui-progress{background:#0097a7}.gui-material .gui-progress.gui-secondary .gui-progress-bar{border-color:#0097a7}\n", ".gui-dark .gui-progress-bar{border-color:#616161;color:#bdbdbd}.gui-dark .gui-progress{background:#424242}.gui-dark .gui-progress.gui-primary .gui-progress{background:#ce93d8}.gui-dark .gui-progress.gui-primary .gui-progress-bar{border-color:#ce93d8;color:#212121}.gui-dark .gui-progress.gui-secondary .gui-progress{background:#80cbc4}.gui-dark .gui-progress.gui-secondary .gui-progress-bar{border-color:#80cbc4;color:#212121}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricProgressBarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-progress-bar',
                        templateUrl: 'progress-bar.component.html',
                        styleUrls: [
                            './progress-bar.ngx.scss',
                            './themes/progress-bar.material.ngx.scss',
                            './themes/progress-bar.dark.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-progress]': 'true'
                        }
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; }, { progress: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }], textTop: [{
                    type: i0.Input
                }], textAlign: [{
                    type: i0.Input
                }], primary: [{
                    type: i0.Input
                }], secondary: [{
                    type: i0.Input
                }] });
    })();

    var FabricProgressBarModule = /** @class */ (function () {
        function FabricProgressBarModule() {
        }
        return FabricProgressBarModule;
    }());
    FabricProgressBarModule.ɵfac = function FabricProgressBarModule_Factory(t) { return new (t || FabricProgressBarModule)(); };
    FabricProgressBarModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricProgressBarModule });
    FabricProgressBarModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricProgressBarModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricProgressBarComponent
                        ],
                        exports: [
                            FabricProgressBarComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricProgressBarModule, { declarations: [FabricProgressBarComponent], imports: [i1.CommonModule], exports: [FabricProgressBarComponent] }); })();

    var AbstractSpinner = /** @class */ (function () {
        function AbstractSpinner(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.width = 5;
            this.diameter = 90;
        }
        AbstractSpinner.prototype.ngOnChanges = function (changes) {
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
        AbstractSpinner.prototype.ngOnInit = function () {
            this.calculateCircle();
        };
        AbstractSpinner.prototype.calculateCircle = function () {
            this.circumference = this.calculateCircumference(this.diameter);
            this.r = this.calculateR(this.diameter);
            this.croppedCircle = this.calculateDashes(this.circumference);
            this.circleSize = this.calculateSize(this.diameter, this.width);
        };
        AbstractSpinner.prototype.calculateCircumference = function (diameter) {
            return diameter * Math.PI;
        };
        AbstractSpinner.prototype.calculateR = function (diameter) {
            return diameter / 2;
        };
        AbstractSpinner.prototype.calculateDashes = function (circumference) {
            return circumference * 0.25;
        };
        AbstractSpinner.prototype.calculateSize = function (diameter, width) {
            return diameter + width;
        };
        AbstractSpinner.prototype.addClass = function (className) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        };
        AbstractSpinner.prototype.removeClass = function (className) {
            this.renderer.removeClass(this.elementRef.nativeElement, className);
        };
        return AbstractSpinner;
    }());
    AbstractSpinner.ɵfac = function AbstractSpinner_Factory(t) { return new (t || AbstractSpinner)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    AbstractSpinner.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: AbstractSpinner, inputs: { width: "width", diameter: "diameter", primary: "primary", secondary: "secondary" }, features: [i0__namespace.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AbstractSpinner, [{
                type: i0.Directive
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; }, { width: [{
                    type: i0.Input
                }], diameter: [{
                    type: i0.Input
                }], primary: [{
                    type: i0.Input
                }], secondary: [{
                    type: i0.Input
                }] });
    })();

    exports.SpinnerMode = void 0;
    (function (SpinnerMode) {
        SpinnerMode[SpinnerMode["Spin"] = 0] = "Spin";
    })(exports.SpinnerMode || (exports.SpinnerMode = {}));

    var FabricProgressSpinnerComponent = /** @class */ (function (_super) {
        __extends(FabricProgressSpinnerComponent, _super);
        function FabricProgressSpinnerComponent(elementRef, renderer) {
            var _this = _super.call(this, elementRef, renderer) || this;
            _this.value = 0;
            _this.animationsDisabled = true;
            _this.secondCircleDisabled = true;
            return _this;
        }
        FabricProgressSpinnerComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            this.calculateValuePercentage(this.circumference, this.value);
            if (this.mode === exports.SpinnerMode.Spin) {
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
        FabricProgressSpinnerComponent.prototype.ngOnInit = function () {
            this.calculateValuePercentage(this.circumference, this.value);
        };
        FabricProgressSpinnerComponent.prototype.calculateValuePercentage = function (circumference, value) {
            this.valuePercentage = circumference - (value * circumference / 100);
        };
        return FabricProgressSpinnerComponent;
    }(AbstractSpinner));
    FabricProgressSpinnerComponent.ɵfac = function FabricProgressSpinnerComponent_Factory(t) { return new (t || FabricProgressSpinnerComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    FabricProgressSpinnerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricProgressSpinnerComponent, selectors: [["gui-progress-spinner"]], inputs: { value: "value", mode: "mode", color: "color" }, features: [i0__namespace.ɵɵInheritDefinitionFeature, i0__namespace.ɵɵNgOnChangesFeature], decls: 5, vars: 30, consts: [[1, "gui-progress-spinner"], [1, "circle-outer"], ["cx", "50%", "cy", "50%"], [1, "circle-inner"]], template: function FabricProgressSpinnerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "circle", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "svg", 3);
                i0__namespace.ɵɵelement(4, "circle", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("stroke-dasharray", ctx.circumference)("stroke-dashoffset", ctx.valuePercentage)("stroke-width", ctx.width)("stroke", ctx.color);
                i0__namespace.ɵɵattribute("r", ctx.r);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("stroke-dasharray", ctx.croppedCircle)("stroke-dashoffset", ctx.circumference)("stroke-width", ctx.width)("stroke", ctx.color);
                i0__namespace.ɵɵattribute("r", ctx.r);
            }
        }, styles: [".gui-progress-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-progress-spinner circle{fill:transparent;stroke:#999}.gui-progress-spinner svg{position:absolute}.gui-progress-spinner .circle-inner{animation:gui-spin-reverse 2s infinite linear forwards reverse}.gui-progress-spinner .circle-outer{-webkit-animation:gui-spin 2s infinite linear forwards;animation:gui-spin 2s infinite linear forwards}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner .circle-outer{-webkit-animation:none;animation:none}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner.gui-progress-spinner{-webkit-animation:none;animation:none}.gui-second-circle-disabled .gui-progress-spinner.gui-progress-spinner .circle-inner{opacity:0}.gui-primary .gui-progress-spinner.gui-progress-spinner circle{stroke:#2185d0}.gui-secondary .gui-progress-spinner.gui-progress-spinner circle{stroke:#3cb371}\n", ".gui-material .gui-progress-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-progress-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-progress-spinner circle{stroke:#0097a7}\n", ".gui-dark .gui-progress-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-progress-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-progress-spinner circle{stroke:#80cbc4}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricProgressSpinnerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-progress-spinner',
                        templateUrl: './progress-spinner.component.html',
                        styleUrls: [
                            './progress-spinner.ngx.scss',
                            './themes/progress-spinner.material.ngx.scss',
                            './themes/progress-spinner.dark.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; }, { value: [{
                    type: i0.Input
                }], mode: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }] });
    })();

    var FabricProgressSpinnerModule = /** @class */ (function () {
        function FabricProgressSpinnerModule() {
        }
        return FabricProgressSpinnerModule;
    }());
    FabricProgressSpinnerModule.ɵfac = function FabricProgressSpinnerModule_Factory(t) { return new (t || FabricProgressSpinnerModule)(); };
    FabricProgressSpinnerModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricProgressSpinnerModule });
    FabricProgressSpinnerModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricProgressSpinnerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricProgressSpinnerComponent
                        ],
                        exports: [
                            FabricProgressSpinnerComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricProgressSpinnerModule, { declarations: [FabricProgressSpinnerComponent], imports: [i1.CommonModule], exports: [FabricProgressSpinnerComponent] }); })();

    var _c0$9 = ["*"];
    var FabricRadioButtonComponent = /** @class */ (function () {
        function FabricRadioButtonComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.checked = false;
            this.changed = new i0.EventEmitter();
        }
        FabricRadioButtonComponent.prototype.ngOnChanges = function () {
            if (this.disabled) {
                this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
            }
        };
        FabricRadioButtonComponent.prototype.check = function () {
            this.checked = true;
            this.changed.emit(this.checked);
        };
        return FabricRadioButtonComponent;
    }());
    FabricRadioButtonComponent.ɵfac = function FabricRadioButtonComponent_Factory(t) { return new (t || FabricRadioButtonComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    FabricRadioButtonComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricRadioButtonComponent, selectors: [["gui-radio-button"]], hostVars: 2, hostBindings: function FabricRadioButtonComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-radio-button", true);
            }
        }, inputs: { name: "name", checked: "checked", disabled: "disabled" }, outputs: { changed: "changed" }, features: [i0__namespace.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$9, decls: 4, vars: 3, consts: [["type", "radio", 3, "checked", "disabled", "name", "click"], [1, "gui-radio-checkmark"]], template: function FabricRadioButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "label");
                i0__namespace.ɵɵelementStart(1, "input", 0);
                i0__namespace.ɵɵlistener("click", function FabricRadioButtonComponent_Template_input_click_1_listener() { return ctx.check(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(2, "span", 1);
                i0__namespace.ɵɵprojection(3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled)("name", ctx.name);
            }
        }, styles: [".gui-radio-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;font:14px Arial;line-height:18px;padding-left:32px;position:relative}.gui-radio-button label{cursor:pointer}.gui-radio-button label:hover .gui-radio-checkmark{border-color:#999}.gui-radio-button input{height:0;opacity:0;position:absolute;width:0}.gui-radio-button .gui-radio-checkmark{border-color:#d6d6d6;border-radius:50%;border-style:solid;border-width:1px;box-sizing:content-box;height:16px;left:0;position:absolute;width:16px}.gui-radio-button input:checked+.gui-radio-checkmark{border-color:#999}.gui-radio-button input:focus+.gui-radio-checkmark{border-color:#6fb4e8}.gui-radio-button.gui-disabled.gui-radio-button{color:#ccc;pointer-events:none}.gui-radio-button .gui-radio-checkmark:after{content:\"\";display:none;position:absolute}.gui-radio-button input:checked+.gui-radio-checkmark:after{box-sizing:content-box;display:block}.gui-radio-button .gui-radio-checkmark:after{background:#333;border-radius:50%;height:16px;-ms-transform:scale(.5);transform:scale(.5);width:16px}\n", ".gui-material .gui-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-radio-button{color:#bdbdbd}.gui-dark .gui-radio-button .gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:checked+.gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:focus+.gui-radio-checkmark{border-color:#ce93d8}.gui-dark .gui-radio-button .gui-radio-checkmark:after{background:#878787}.gui-dark .gui-radio-button.gui-disabled.gui-radio-button{opacity:.36}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricRadioButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-radio-button',
                        templateUrl: './radio-button.component.html',
                        styleUrls: [
                            './radio-button.ngx.scss',
                            './themes/radio-button.material.ngx.scss',
                            './themes/radio-button.dark.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-radio-button]': 'true'
                        }
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; }, { name: [{
                    type: i0.Input
                }], checked: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], changed: [{
                    type: i0.Output
                }] });
    })();

    var FabricRadioButtonModule = /** @class */ (function () {
        function FabricRadioButtonModule() {
        }
        return FabricRadioButtonModule;
    }());
    FabricRadioButtonModule.ɵfac = function FabricRadioButtonModule_Factory(t) { return new (t || FabricRadioButtonModule)(); };
    FabricRadioButtonModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricRadioButtonModule });
    FabricRadioButtonModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricRadioButtonModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricRadioButtonComponent
                        ],
                        exports: [
                            FabricRadioButtonComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricRadioButtonModule, { declarations: [FabricRadioButtonComponent], imports: [i1.CommonModule], exports: [FabricRadioButtonComponent] }); })();

    var _c0$8 = ["*"];
    var FabricRadioGroupComponent = /** @class */ (function () {
        function FabricRadioGroupComponent() {
        }
        return FabricRadioGroupComponent;
    }());
    FabricRadioGroupComponent.ɵfac = function FabricRadioGroupComponent_Factory(t) { return new (t || FabricRadioGroupComponent)(); };
    FabricRadioGroupComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricRadioGroupComponent, selectors: [["gui-radio-group"]], hostVars: 2, hostBindings: function FabricRadioGroupComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-radio-group", true);
            }
        }, ngContentSelectors: _c0$8, decls: 1, vars: 0, template: function FabricRadioGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵprojection(0);
            }
        }, styles: [".gui-radio-group .gui-radio-button{display:block;margin-bottom:10px}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricRadioGroupComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-radio-group',
                        templateUrl: './radio-group.component.html',
                        styleUrls: [
                            './radio-group.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-radio-group]': 'true'
                        }
                    }]
            }], null, null);
    })();

    var FabricRadioGroupModule = /** @class */ (function () {
        function FabricRadioGroupModule() {
        }
        return FabricRadioGroupModule;
    }());
    FabricRadioGroupModule.ɵfac = function FabricRadioGroupModule_Factory(t) { return new (t || FabricRadioGroupModule)(); };
    FabricRadioGroupModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricRadioGroupModule });
    FabricRadioGroupModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricRadioGroupModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricRadioGroupComponent
                        ],
                        exports: [
                            FabricRadioGroupComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricRadioGroupModule, { declarations: [FabricRadioGroupComponent], imports: [i1.CommonModule], exports: [FabricRadioGroupComponent] }); })();

    exports.FabricNotificationPosition = void 0;
    (function (FabricNotificationPosition) {
        FabricNotificationPosition[FabricNotificationPosition["TOP_RIGHT"] = 0] = "TOP_RIGHT";
        FabricNotificationPosition[FabricNotificationPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
        FabricNotificationPosition[FabricNotificationPosition["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
        FabricNotificationPosition[FabricNotificationPosition["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    })(exports.FabricNotificationPosition || (exports.FabricNotificationPosition = {}));

    var _c0$7 = ["guiNotification"];
    var FabricNotificationComponent = /** @class */ (function () {
        function FabricNotificationComponent(renderer) {
            this.renderer = renderer;
            this.onNotificationClose = new i0.EventEmitter();
            this.unsub$ = new rxjs.Subject();
        }
        FabricNotificationComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.notification.timer.enabled) {
                rxjs.timer(this.notification.timer.duration)
                    .pipe(operators.takeUntil(this.unsub$))
                    .subscribe(function () { return _this.closeNotification(); });
            }
        };
        FabricNotificationComponent.prototype.ngOnDestroy = function () {
            this.unsub$.next();
            this.unsub$.complete();
        };
        FabricNotificationComponent.prototype.closeNotification = function () {
            var _this = this;
            this.addCloseAnimation();
            rxjs.timer(200)
                .pipe(operators.takeUntil(this.unsub$))
                .subscribe(function () { return _this.onNotificationClose.emit(_this.notification); });
        };
        FabricNotificationComponent.prototype.addCloseAnimation = function () {
            var notificationEl = this.notificationRef.nativeElement;
            this.renderer.addClass(notificationEl, 'gui-notification-active');
        };
        FabricNotificationComponent.prototype.isRightSide = function () {
            return this.notification.position === exports.FabricNotificationPosition.TOP_RIGHT
                || this.notification.position === exports.FabricNotificationPosition.BOTTOM_RIGHT;
        };
        return FabricNotificationComponent;
    }());
    FabricNotificationComponent.ɵfac = function FabricNotificationComponent_Factory(t) { return new (t || FabricNotificationComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    FabricNotificationComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricNotificationComponent, selectors: [["gui-notification"]], viewQuery: function FabricNotificationComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$7, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.notificationRef = _t.first);
            }
        }, inputs: { notification: "notification" }, outputs: { onNotificationClose: "onNotificationClose" }, decls: 4, vars: 5, consts: [[1, "gui-notification"], ["guiNotification", ""], [3, "click"]], template: function FabricNotificationComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0, 1);
                i0__namespace.ɵɵelementStart(2, "gui-close-icon", 2);
                i0__namespace.ɵɵlistener("click", function FabricNotificationComponent_Template_gui_close_icon_click_2_listener() { return ctx.closeNotification(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-notification-right-side", ctx.isRightSide())("gui-notification-left-side", !ctx.isRightSide());
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.notification.description, " ");
            }
        }, directives: [FabricCloseIconComponent], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricNotificationComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-notification',
                        template: "\n\t\t<div #guiNotification\n\t\t\t [class.gui-notification-right-side]=\"isRightSide()\"\n\t\t\t [class.gui-notification-left-side]=\"!isRightSide()\"\n\t\t\t class=\"gui-notification\">\n\t\t\t<gui-close-icon (click)=\"closeNotification()\"></gui-close-icon>\n\t\t\t{{notification.description}}\n\t\t</div>\n\t",
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i0__namespace.Renderer2 }]; }, { notificationRef: [{
                    type: i0.ViewChild,
                    args: ['guiNotification', { static: false }]
                }], notification: [{
                    type: i0.Input
                }], onNotificationClose: [{
                    type: i0.Output
                }] });
    })();

    var FabricNotification = /** @class */ (function () {
        function FabricNotification(description, index, timer, position) {
            this.description = description;
            this.index = index;
            this.timer = timer;
            this.position = position;
        }
        return FabricNotification;
    }());

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
        FabricModal.prototype.ngOnDestroy = function () {
            this.removeComponent();
        };
        FabricModal.prototype.createAndAppend = function (injector) {
            var componentInjector = injector ? injector : this.injector;
            var componentRef = this.componentFactoryResolver
                .resolveComponentFactory(this.getComponent())
                .create(componentInjector);
            componentRef.changeDetectorRef.detectChanges();
            this.applicationRef.attachView(componentRef.hostView);
            var domModalElement = componentRef.hostView
                .rootNodes[0];
            this.document.body.appendChild(domModalElement);
            this.componentRef = componentRef;
        };
        FabricModal.prototype.removeComponent = function () {
            if (this.componentRef) {
                this.applicationRef.detachView(this.componentRef.hostView);
                this.componentRef.destroy();
                this.componentRef = null;
            }
        };
        FabricModal.prototype.getComponentRef = function () {
            return this.componentRef;
        };
        FabricModal.prototype.getInjector = function () {
            return this.injector;
        };
        FabricModal.prototype.getDocument = function () {
            return this.document;
        };
        return FabricModal;
    }(FabricReactive));
    FabricModal.ɵfac = function FabricModal_Factory(t) { return new (t || FabricModal)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵdirectiveInject(i0__namespace.ApplicationRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Injector), i0__namespace.ɵɵdirectiveInject(i1.DOCUMENT)); };
    FabricModal.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: FabricModal, features: [i0__namespace.ɵɵInheritDefinitionFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricModal, [{
                type: i0.Directive
            }], function () {
            return [{ type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.ApplicationRef }, { type: i0__namespace.Injector }, { type: Document, decorators: [{
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }];
        }, null);
    })();

    var FabricNotificationService = /** @class */ (function (_super) {
        __extends(FabricNotificationService, _super);
        function FabricNotificationService(componentFactoryResolver, applicationRef, injector, document) {
            var _this = _super.call(this, componentFactoryResolver, applicationRef, injector, document) || this;
            _this.notificationIndex = 0;
            _this.unsub$ = new rxjs.Subject();
            return _this;
        }
        FabricNotificationService.prototype.ngOnDestroy = function () {
            this.removeNotificationContainer();
        };
        FabricNotificationService.prototype.getComponent = function () {
            return FabricNotificationsOverlayComponent;
        };
        FabricNotificationService.prototype.open = function (notification, config) {
            var position = exports.FabricNotificationPosition.TOP_RIGHT;
            if (config && config.position) {
                position = config.position;
            }
            this.createFabricNotification(notification, config, position);
            if (!this.getComponentRef()) {
                var theme = exports.Theme.FABRIC, parentInjector = this.getInjector();
                if (config && config.theme) {
                    theme = config.theme;
                }
                if (config && config.injector) {
                    parentInjector = config.injector;
                }
                var injector = i0.Injector.create({
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
        FabricNotificationService.prototype.close = function () {
            this.removeNotificationContainer();
            this.unsub$.next();
            this.unsub$.complete();
        };
        FabricNotificationService.prototype.removeNotificationContainer = function () {
            if (this.getComponentRef()) {
                this.removeComponent();
                this.notificationIndex = 0;
                this.fabricNotification = null;
            }
        };
        FabricNotificationService.prototype.createFabricNotification = function (description, config, position) {
            var duration = FabricNotificationService.DEFAULT_DURATION, enabled = true;
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
        FabricNotificationService.prototype.pushNotification = function (position) {
            switch (position) {
                case exports.FabricNotificationPosition.TOP_RIGHT:
                    this.getComponentRef().instance.notificationsTopRight =
                        this.getComponentRef().instance.notificationsTopRight.concat(this.fabricNotification);
                    break;
                case exports.FabricNotificationPosition.TOP_LEFT:
                    this.getComponentRef().instance.notificationsTopLeft =
                        this.getComponentRef().instance.notificationsTopLeft.concat(this.fabricNotification);
                    break;
                case exports.FabricNotificationPosition.BOTTOM_RIGHT:
                    this.getComponentRef().instance.notificationsBottomRight =
                        this.getComponentRef().instance.notificationsBottomRight.concat(this.fabricNotification);
                    break;
                case exports.FabricNotificationPosition.BOTTOM_LEFT:
                    this.getComponentRef().instance.notificationsBottomLeft =
                        this.getComponentRef().instance.notificationsBottomLeft.concat(this.fabricNotification);
                    break;
                default:
                    break;
            }
            this.getComponentRef().instance.detectChanges();
        };
        return FabricNotificationService;
    }(FabricModal));
    FabricNotificationService.DEFAULT_DURATION = 4000;
    FabricNotificationService.ɵfac = function FabricNotificationService_Factory(t) { return new (t || FabricNotificationService)(i0__namespace.ɵɵinject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵinject(i0__namespace.ApplicationRef), i0__namespace.ɵɵinject(i0__namespace.Injector), i0__namespace.ɵɵinject(i1.DOCUMENT)); };
    FabricNotificationService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricNotificationService, factory: FabricNotificationService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricNotificationService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.ApplicationRef }, { type: i0__namespace.Injector }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }];
        }, null);
    })();

    function FabricNotificationsContainerComponent_gui_notification_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "gui-notification", 1);
            i0__namespace.ɵɵlistener("onNotificationClose", function FabricNotificationsContainerComponent_gui_notification_0_Template_gui_notification_onNotificationClose_0_listener($event) { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.emitClosedNotification($event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var notification_r1 = ctx.$implicit;
            i0__namespace.ɵɵproperty("notification", notification_r1);
        }
    }
    var FabricNotificationsContainerComponent = /** @class */ (function () {
        function FabricNotificationsContainerComponent() {
            this.onNotificationClose = new i0.EventEmitter();
            this.FabricNotificationPosition = exports.FabricNotificationPosition;
        }
        FabricNotificationsContainerComponent.prototype.emitClosedNotification = function (selectedNotification) {
            this.onNotificationClose.emit(selectedNotification);
        };
        FabricNotificationsContainerComponent.prototype.isPosition = function (fabricNotificationPosition) {
            return this.position === fabricNotificationPosition;
        };
        return FabricNotificationsContainerComponent;
    }());
    FabricNotificationsContainerComponent.ɵfac = function FabricNotificationsContainerComponent_Factory(t) { return new (t || FabricNotificationsContainerComponent)(); };
    FabricNotificationsContainerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricNotificationsContainerComponent, selectors: [["gui-notifications-container"]], hostVars: 8, hostBindings: function FabricNotificationsContainerComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-notifications-top-right", ctx.isPosition(ctx.FabricNotificationPosition.TOP_RIGHT))("gui-notifications-top-left", ctx.isPosition(ctx.FabricNotificationPosition.TOP_LEFT))("gui-notifications-bottom-right", ctx.isPosition(ctx.FabricNotificationPosition.BOTTOM_RIGHT))("gui-notifications-bottom-left", ctx.isPosition(ctx.FabricNotificationPosition.BOTTOM_LEFT));
            }
        }, inputs: { notifications: "notifications", position: "position" }, outputs: { onNotificationClose: "onNotificationClose" }, decls: 1, vars: 1, consts: [[3, "notification", "onNotificationClose", 4, "ngFor", "ngForOf"], [3, "notification", "onNotificationClose"]], template: function FabricNotificationsContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, FabricNotificationsContainerComponent_gui_notification_0_Template, 1, 1, "gui-notification", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngForOf", ctx.notifications);
            }
        }, directives: [i1__namespace.NgForOf, FabricNotificationComponent], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricNotificationsContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-notifications-container',
                        template: "\n\t\t<gui-notification *ngFor=\"let notification of notifications\"\n\t\t\t\t\t\t  [notification]=\"notification\"\n\t\t\t\t\t\t  (onNotificationClose)=\"emitClosedNotification($event)\">\n\t\t</gui-notification>\n\t",
                        host: {
                            '[class.gui-notifications-top-right]': 'isPosition(FabricNotificationPosition.TOP_RIGHT)',
                            '[class.gui-notifications-top-left]': 'isPosition(FabricNotificationPosition.TOP_LEFT)',
                            '[class.gui-notifications-bottom-right]': 'isPosition(FabricNotificationPosition.BOTTOM_RIGHT)',
                            '[class.gui-notifications-bottom-left]': 'isPosition(FabricNotificationPosition.BOTTOM_LEFT)'
                        },
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { notifications: [{
                    type: i0.Input
                }], position: [{
                    type: i0.Input
                }], onNotificationClose: [{
                    type: i0.Output
                }] });
    })();

    function FabricNotificationsOverlayComponent_gui_notifications_container_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "gui-notifications-container", 1);
            i0__namespace.ɵɵlistener("onNotificationClose", function FabricNotificationsOverlayComponent_gui_notifications_container_0_Template_gui_notifications_container_onNotificationClose_0_listener($event) { i0__namespace.ɵɵrestoreView(_r5_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.removeNotification($event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("notifications", ctx_r0.notificationsTopRight)("position", ctx_r0.FabricNotificationPosition.TOP_RIGHT);
        }
    }
    function FabricNotificationsOverlayComponent_gui_notifications_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "gui-notifications-container", 1);
            i0__namespace.ɵɵlistener("onNotificationClose", function FabricNotificationsOverlayComponent_gui_notifications_container_1_Template_gui_notifications_container_onNotificationClose_0_listener($event) { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.removeNotification($event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("notifications", ctx_r1.notificationsTopLeft)("position", ctx_r1.FabricNotificationPosition.TOP_LEFT);
        }
    }
    function FabricNotificationsOverlayComponent_gui_notifications_container_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "gui-notifications-container", 1);
            i0__namespace.ɵɵlistener("onNotificationClose", function FabricNotificationsOverlayComponent_gui_notifications_container_2_Template_gui_notifications_container_onNotificationClose_0_listener($event) { i0__namespace.ɵɵrestoreView(_r9_1); var ctx_r8 = i0__namespace.ɵɵnextContext(); return ctx_r8.removeNotification($event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("notifications", ctx_r2.notificationsBottomRight)("position", ctx_r2.FabricNotificationPosition.BOTTOM_RIGHT);
        }
    }
    function FabricNotificationsOverlayComponent_gui_notifications_container_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "gui-notifications-container", 1);
            i0__namespace.ɵɵlistener("onNotificationClose", function FabricNotificationsOverlayComponent_gui_notifications_container_3_Template_gui_notifications_container_onNotificationClose_0_listener($event) { i0__namespace.ɵɵrestoreView(_r11_1); var ctx_r10 = i0__namespace.ɵɵnextContext(); return ctx_r10.removeNotification($event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("notifications", ctx_r3.notificationsBottomLeft)("position", ctx_r3.FabricNotificationPosition.BOTTOM_LEFT);
        }
    }
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
            _this.FabricNotificationPosition = exports.FabricNotificationPosition;
            return _this;
        }
        FabricNotificationsOverlayComponent.prototype.removeNotification = function (selectedNotification) {
            switch (selectedNotification.position) {
                case exports.FabricNotificationPosition.TOP_RIGHT:
                    this.notificationsTopRight = this.notificationsTopRight
                        .filter(function (notification) { return notification.index !== selectedNotification.index; });
                    break;
                case exports.FabricNotificationPosition.TOP_LEFT:
                    this.notificationsTopLeft = this.notificationsTopLeft
                        .filter(function (notification) { return notification.index !== selectedNotification.index; });
                    break;
                case exports.FabricNotificationPosition.BOTTOM_RIGHT:
                    this.notificationsBottomRight = this.notificationsBottomRight
                        .filter(function (notification) { return notification.index !== selectedNotification.index; });
                    break;
                case exports.FabricNotificationPosition.BOTTOM_LEFT:
                    this.notificationsBottomLeft = this.notificationsBottomLeft
                        .filter(function (notification) { return notification.index !== selectedNotification.index; });
                    break;
                default:
                    break;
            }
            this.detectChanges();
            this.checkNotificationsLength();
        };
        FabricNotificationsOverlayComponent.prototype.detectChanges = function () {
            this.changeDetectorRef.detectChanges();
        };
        FabricNotificationsOverlayComponent.prototype.checkNotificationsLength = function () {
            if (this.notificationsTopRight.length === 0
                && this.notificationsTopLeft.length === 0
                && this.notificationsBottomRight.length === 0
                && this.notificationsBottomLeft.length === 0) {
                this.notificationsService.close();
            }
        };
        FabricNotificationsOverlayComponent.prototype.isContainerNotEmpty = function (container) {
            return container && container.length > 0;
        };
        return FabricNotificationsOverlayComponent;
    }(FabricThemedComponent));
    FabricNotificationsOverlayComponent.ɵfac = function FabricNotificationsOverlayComponent_Factory(t) { return new (t || FabricNotificationsOverlayComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(FabricModalThemeService), i0__namespace.ɵɵdirectiveInject(themeToken), i0__namespace.ɵɵdirectiveInject(i0.forwardRef(function () { return FabricNotificationService; }))); };
    FabricNotificationsOverlayComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricNotificationsOverlayComponent, selectors: [["ng-component"]], hostVars: 2, hostBindings: function FabricNotificationsOverlayComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-notifications-overlay", true);
            }
        }, features: [i0__namespace.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [[3, "notifications", "position", "onNotificationClose", 4, "ngIf"], [3, "notifications", "position", "onNotificationClose"]], template: function FabricNotificationsOverlayComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, FabricNotificationsOverlayComponent_gui_notifications_container_0_Template, 1, 2, "gui-notifications-container", 0);
                i0__namespace.ɵɵtemplate(1, FabricNotificationsOverlayComponent_gui_notifications_container_1_Template, 1, 2, "gui-notifications-container", 0);
                i0__namespace.ɵɵtemplate(2, FabricNotificationsOverlayComponent_gui_notifications_container_2_Template, 1, 2, "gui-notifications-container", 0);
                i0__namespace.ɵɵtemplate(3, FabricNotificationsOverlayComponent_gui_notifications_container_3_Template, 1, 2, "gui-notifications-container", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.isContainerNotEmpty(ctx.notificationsTopRight));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.isContainerNotEmpty(ctx.notificationsTopLeft));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.isContainerNotEmpty(ctx.notificationsBottomRight));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.isContainerNotEmpty(ctx.notificationsBottomLeft));
            }
        }, directives: [i1__namespace.NgIf, FabricNotificationsContainerComponent], styles: [".gui-notifications-overlay{-ms-flex-align:center;align-items:center;font-family:Arial;-ms-flex-pack:center;justify-content:center;max-width:400px;position:fixed;z-index:1000}.gui-notifications-overlay gui-notifications-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:fixed}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-left{left:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-right{right:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-left{bottom:0;left:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-right{bottom:0;right:0}.gui-notifications-overlay .gui-notification{background:#fff;box-shadow:0 3px 6px -4px rgba(0,0,0,.122),0 6px 16px rgba(0,0,0,.078),0 9px 28px 8px rgba(0,0,0,.051);display:block;margin:16px;padding:32px;position:relative}.gui-notifications-overlay .gui-notification.gui-notification-right-side{-webkit-animation:loadNotificationRightSide .1s forwards;animation:loadNotificationRightSide .1s forwards}.gui-notifications-overlay .gui-notification.gui-notification-left-side{-webkit-animation:loadNotificationLeftSide .1s forwards;animation:loadNotificationLeftSide .1s forwards}@-webkit-keyframes loadNotificationRightSide{0%{transform:translate(50%)}to{transform:translate(0)}}@keyframes loadNotificationRightSide{0%{transform:translate(50%)}to{transform:translate(0)}}@-webkit-keyframes loadNotificationLeftSide{0%{transform:translate(-50%)}to{transform:translate(0)}}@keyframes loadNotificationLeftSide{0%{transform:translate(-50%)}to{transform:translate(0)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-right-side{-webkit-animation:closeNotificationRightSide .2s forwards;animation:closeNotificationRightSide .2s forwards}@-webkit-keyframes closeNotificationRightSide{0%{transform:translate(0)}to{transform:translate(100%)}}@keyframes closeNotificationRightSide{0%{transform:translate(0)}to{transform:translate(100%)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-left-side{-webkit-animation:closeNotificationLeftSide .2s forwards;animation:closeNotificationLeftSide .2s forwards}@-webkit-keyframes closeNotificationLeftSide{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes closeNotificationLeftSide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n", ".gui-dark .gui-notification{background:#424242}\n", ".gui-material .gui-notification{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricNotificationsOverlayComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: 'fabric-notifications-overlay.component.html',
                        styleUrls: [
                            './fabric-notification.ngx.scss',
                            './themes/fabric-notification.dark.ngx.scss',
                            './themes/fabric-notification.material.ngx.scss'
                        ],
                        host: {
                            '[class.gui-notifications-overlay]': 'true'
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () {
            return [{ type: i0__namespace.ChangeDetectorRef }, { type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }, { type: FabricModalThemeService }, { type: exports.Theme, decorators: [{
                            type: i0.Inject,
                            args: [themeToken]
                        }] }, { type: FabricNotificationService, decorators: [{
                            type: i0.Inject,
                            args: [i0.forwardRef(function () { return FabricNotificationService; })]
                        }] }];
        }, null);
    })();

    var FabricNotificationModule = /** @class */ (function () {
        function FabricNotificationModule() {
        }
        return FabricNotificationModule;
    }());
    FabricNotificationModule.ɵfac = function FabricNotificationModule_Factory(t) { return new (t || FabricNotificationModule)(); };
    FabricNotificationModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricNotificationModule });
    FabricNotificationModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            FabricNotificationService
        ], imports: [[
                i1.CommonModule,
                FabricCloseIconModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricNotificationModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
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
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricNotificationModule, { declarations: [FabricNotificationsOverlayComponent,
                FabricNotificationsContainerComponent,
                FabricNotificationComponent], imports: [i1.CommonModule,
                FabricCloseIconModule] });
    })();

    var FabricMessageService = /** @class */ (function (_super) {
        __extends(FabricMessageService, _super);
        function FabricMessageService(componentFactoryResolver, applicationRef, injector, document) {
            return _super.call(this, componentFactoryResolver, applicationRef, injector, document) || this;
        }
        FabricMessageService.prototype.getComponent = function () {
            return FabricMessageComponent;
        };
        FabricMessageService.prototype.open = function (text) {
            this.createAndAppend();
            this.getComponentRef().instance.text = text;
            this.getComponentRef().instance.detectChanges();
        };
        FabricMessageService.prototype.close = function () {
            this.removeComponent();
        };
        return FabricMessageService;
    }(FabricModal));
    FabricMessageService.ɵfac = function FabricMessageService_Factory(t) { return new (t || FabricMessageService)(i0__namespace.ɵɵinject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵinject(i0__namespace.ApplicationRef), i0__namespace.ɵɵinject(i0__namespace.Injector), i0__namespace.ɵɵinject(i1.DOCUMENT)); };
    FabricMessageService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricMessageService, factory: FabricMessageService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricMessageService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.ApplicationRef }, { type: i0__namespace.Injector }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }];
        }, null);
    })();

    var FabricMessageComponent = /** @class */ (function () {
        function FabricMessageComponent(messageService, changeDetectorRef) {
            this.messageService = messageService;
            this.changeDetectorRef = changeDetectorRef;
        }
        FabricMessageComponent.prototype.detectChanges = function () {
            this.changeDetectorRef.detectChanges();
        };
        FabricMessageComponent.prototype.close = function () {
            this.messageService.close();
        };
        return FabricMessageComponent;
    }());
    FabricMessageComponent.ɵfac = function FabricMessageComponent_Factory(t) { return new (t || FabricMessageComponent)(i0__namespace.ɵɵdirectiveInject(FabricMessageService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    FabricMessageComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricMessageComponent, selectors: [["gui-message"]], decls: 4, vars: 1, consts: [[1, "gui-message"], [3, "click"]], template: function FabricMessageComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementStart(2, "button", 1);
                i0__namespace.ɵɵlistener("click", function FabricMessageComponent_Template_button_click_2_listener() { return ctx.close(); });
                i0__namespace.ɵɵtext(3, "X");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.text, " ");
            }
        }, styles: [".gui-message{left:50%;position:fixed;top:50%}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricMessageComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-message',
                        template: "\n\t\t<div class=\" gui-message\">\n\t\t\t{{text}}\n\t\t\t<button (click)=\"close()\">X</button>\n\t\t</div>\n\t",
                        styleUrls: [
                            './fabric-message.ngx.scss'
                        ],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: FabricMessageService }, { type: i0__namespace.ChangeDetectorRef }]; }, null);
    })();

    var FabricMessageModule = /** @class */ (function () {
        function FabricMessageModule() {
        }
        return FabricMessageModule;
    }());
    FabricMessageModule.ɵfac = function FabricMessageModule_Factory(t) { return new (t || FabricMessageModule)(); };
    FabricMessageModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricMessageModule });
    FabricMessageModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            FabricMessageService
        ], imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricMessageModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
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
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricMessageModule, { declarations: [FabricMessageComponent], imports: [i1.CommonModule] }); })();

    var _c0$6 = ["svgEl"];
    var FabricSvgTemplate = /** @class */ (function () {
        function FabricSvgTemplate() {
        }
        // todo sanitize
        FabricSvgTemplate.prototype.ngAfterViewInit = function () {
            this.svgRef.nativeElement.innerHTML = this.svg;
        };
        return FabricSvgTemplate;
    }());
    FabricSvgTemplate.ɵfac = function FabricSvgTemplate_Factory(t) { return new (t || FabricSvgTemplate)(); };
    FabricSvgTemplate.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricSvgTemplate, selectors: [["gui-svg-template"]], viewQuery: function FabricSvgTemplate_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$6, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.svgRef = _t.first);
            }
        }, inputs: { svg: "svg" }, decls: 2, vars: 0, consts: [["svgEl", ""]], template: function FabricSvgTemplate_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "div", null, 0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricSvgTemplate, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-svg-template',
                        template: "\n\t\t<div #svgEl></div>\n\t",
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { svgRef: [{
                    type: i0.ViewChild,
                    args: ['svgEl', { static: false }]
                }], svg: [{
                    type: i0.Input
                }] });
    })();

    var _c0$5 = ["tab"];
    var _c1 = ["tabItem"];
    var _c2 = ["tabMenuList"];
    function FabricTabComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 7);
            i0__namespace.ɵɵlistener("click", function FabricTabComponent_div_3_Template_div_click_0_listener() { i0__namespace.ɵɵrestoreView(_r6_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.scrollTabList(false); });
            i0__namespace.ɵɵelement(1, "gui-arrow-icon", 8);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("direction", ctx_r1.Direction.LEFT);
        }
    }
    function FabricTabComponent_div_5_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var tab_r7 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(tab_r7);
        }
    }
    function FabricTabComponent_div_5_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelement(1, "gui-svg-template", 12);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var tab_r7 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("svg", tab_r7.svg);
        }
    }
    function FabricTabComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 9, 10);
            i0__namespace.ɵɵlistener("click", function FabricTabComponent_div_5_Template_div_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r14_1); var tab_r7 = restoredCtx.$implicit; var ctx_r13 = i0__namespace.ɵɵnextContext(); return ctx_r13.toggleTab(tab_r7); });
            i0__namespace.ɵɵtemplate(2, FabricTabComponent_div_5_span_2_Template, 2, 1, "span", 11);
            i0__namespace.ɵɵtemplate(3, FabricTabComponent_div_5_ng_container_3_Template, 2, 1, "ng-container", 11);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var tab_r7 = ctx.$implicit;
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵattribute("data-tab", ctx_r2.getTabName(tab_r7));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r2.isSvg(tab_r7));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.isSvg(tab_r7));
        }
    }
    function FabricTabComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 7);
            i0__namespace.ɵɵlistener("click", function FabricTabComponent_div_6_Template_div_click_0_listener() { i0__namespace.ɵɵrestoreView(_r16_1); var ctx_r15 = i0__namespace.ɵɵnextContext(); return ctx_r15.scrollTabList(true); });
            i0__namespace.ɵɵelement(1, "gui-arrow-icon");
            i0__namespace.ɵɵelementEnd();
        }
    }
    var _c3 = ["*"];
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
        FabricTabComponent.prototype.ngAfterViewInit = function () {
            this.toggleTab(this.active);
            this.calculateMenuWidth();
            this.showMenuArrows();
            this.checkIfMenuFitsOnResize();
        };
        FabricTabComponent.prototype.toggleTab = function (tab) {
            this.removeActive();
            this.setActive(tab);
        };
        FabricTabComponent.prototype.isSvg = function (item) {
            return typeof item === 'object';
        };
        FabricTabComponent.prototype.getTabName = function (item) {
            return typeof item === 'object' ? item.name : item;
        };
        FabricTabComponent.prototype.scrollTabList = function (scrollRightClicked) {
            var listWidth = this.tabRef.nativeElement.querySelector('.gui-tab-menu-list').offsetWidth, menuOverflow = this.menuListWidth - listWidth;
            if (scrollRightClicked && menuOverflow > this.listPosition) {
                this.listPosition += this.scrollAmount;
            }
            else if (!scrollRightClicked && this.listPosition > 0) {
                this.listPosition -= this.scrollAmount;
            }
            this.tabRef.nativeElement.querySelector('.' + 'gui-tab-menu-list').scrollLeft = this.listPosition;
        };
        FabricTabComponent.prototype.setActive = function (tab) {
            if (typeof tab === 'object') {
                tab = tab.name;
            }
            var navMenuTabEl = this.tabRef.nativeElement.querySelector('[data-tab="' + tab + '"]'), navTabItemEl = this.tabItemRef.nativeElement.querySelector('[data-tab="' + tab + '"]');
            this.addClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
            this.addClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
        };
        FabricTabComponent.prototype.removeActive = function () {
            var navMenuTabEl = this.tabRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME), navTabItemEl = this.tabItemRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME);
            this.removeClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
            this.removeClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
        };
        FabricTabComponent.prototype.addClass = function (element, name) {
            if (element) {
                this.renderer.addClass(element, name);
            }
        };
        FabricTabComponent.prototype.removeClass = function (element, name) {
            if (element) {
                this.renderer.removeClass(element, name);
            }
        };
        FabricTabComponent.prototype.checkIfMenuFitsOnResize = function () {
            var _this = this;
            if (i1.isPlatformBrowser(this.platformId)) {
                rxjs.fromEvent(window, 'resize')
                    .pipe(this.takeUntil())
                    .subscribe(function () { return _this.showMenuArrows(); });
            }
        };
        FabricTabComponent.prototype.calculateMenuWidth = function () {
            var _this = this;
            this.menuListWidth = 0;
            this.tabMenuList
                .forEach(function (listItem) {
                _this.menuListWidth += listItem.nativeElement.offsetWidth;
            });
        };
        FabricTabComponent.prototype.showMenuArrows = function () {
            var menuWidth = this.tabRef.nativeElement.querySelector('.gui-tab-menu').offsetWidth;
            this.scrollActive = menuWidth < this.menuListWidth;
            this.changeDetectorRef.detectChanges();
        };
        return FabricTabComponent;
    }(FabricReactive));
    FabricTabComponent.ɵfac = function FabricTabComponent_Factory(t) { return new (t || FabricTabComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0.PLATFORM_ID)); };
    FabricTabComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricTabComponent, selectors: [["gui-tab"]], viewQuery: function FabricTabComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$5, 5);
                i0__namespace.ɵɵviewQuery(_c1, 5);
                i0__namespace.ɵɵviewQuery(_c2, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.tabRef = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.tabItemRef = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.tabMenuList = _t);
            }
        }, hostVars: 2, hostBindings: function FabricTabComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-tab", true);
            }
        }, inputs: { menu: "menu", active: "active", scrollActive: "scrollActive" }, features: [i0__namespace.ɵɵInheritDefinitionFeature], ngContentSelectors: _c3, decls: 10, vars: 3, consts: [["tab", ""], [1, "gui-tab-menu"], ["class", "scroll-button", 3, "click", 4, "ngIf"], [1, "gui-tab-menu-list"], ["class", "gui-tab-menu-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "gui-tab-content"], ["tabItem", ""], [1, "scroll-button", 3, "click"], [3, "direction"], [1, "gui-tab-menu-item", 3, "click"], ["tabMenuList", ""], [4, "ngIf"], [3, "svg"]], template: function FabricTabComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", null, 0);
                i0__namespace.ɵɵelementStart(2, "div", 1);
                i0__namespace.ɵɵtemplate(3, FabricTabComponent_div_3_Template, 2, 1, "div", 2);
                i0__namespace.ɵɵelementStart(4, "div", 3);
                i0__namespace.ɵɵtemplate(5, FabricTabComponent_div_5_Template, 4, 3, "div", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(6, FabricTabComponent_div_6_Template, 2, 0, "div", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "div", 5, 6);
                i0__namespace.ɵɵprojection(9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngIf", ctx.scrollActive);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngForOf", ctx.menu);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.scrollActive);
            }
        }, directives: [i1__namespace.NgIf, i1__namespace.NgForOf, FabricArrowIconComponent, FabricSvgTemplate], styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fff;border-color:#d6d6d6;border-radius:0 0 4px 4px;border-style:solid;border-width:1px;padding:12px}.gui-tab .gui-tab-menu{display:-ms-flexbox;display:flex;margin-bottom:-1px}.gui-tab .gui-tab-menu .gui-tab-menu-list{border-radius:4px 4px 0 0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden}.gui-tab .gui-tab-menu .gui-tab-menu-item{background:#fafafa;border-color:#d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;box-sizing:border-box;cursor:pointer;display:inline-block;height:34px;margin-right:2px;padding:8px 16px;position:relative;text-align:center;white-space:nowrap}.gui-tab .gui-tab-menu .gui-tab-menu-item:nth-last-child(1){margin-right:0}.gui-tab .gui-tab-menu .gui-tab-menu-item svg{height:16px;width:16px}.gui-tab .gui-tab-menu .gui-tab-menu-item svg path{fill:#aaa}.gui-tab .gui-tab-menu .scroll-button{background:transparent;box-sizing:border-box;color:#ccc;cursor:pointer;font-weight:bold;height:34px;padding:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-menu .scroll-button:hover svg path{stroke:#464646}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fff;border-color:#d6d6d6 #d6d6d6 #fff #d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;color:#2185d0}.gui-tab .gui-active.gui-tab-menu-item svg path{fill:#2185d0}.gui-tab .gui-active.gui-tab-item{display:block}\n", ".gui-material .gui-tab{font:14px Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{background:#616161;border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent #616161;color:#ce93d8}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricTabComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-tab',
                        templateUrl: './tab.component.html',
                        styleUrls: [
                            './tab.ngx.scss',
                            './themes/tab.material.ngx.scss',
                            './themes/tab.dark.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-tab]': 'true'
                        }
                    }]
            }], function () {
            return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ChangeDetectorRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }];
        }, { tabRef: [{
                    type: i0.ViewChild,
                    args: ['tab', { static: false }]
                }], tabItemRef: [{
                    type: i0.ViewChild,
                    args: ['tabItem', { static: false }]
                }], tabMenuList: [{
                    type: i0.ViewChildren,
                    args: ['tabMenuList']
                }], menu: [{
                    type: i0.Input
                }], active: [{
                    type: i0.Input
                }], scrollActive: [{
                    type: i0.Input
                }] });
    })();

    var _c0$4 = ["*"];
    var TabItemComponent = /** @class */ (function () {
        function TabItemComponent() {
        }
        return TabItemComponent;
    }());
    TabItemComponent.ɵfac = function TabItemComponent_Factory(t) { return new (t || TabItemComponent)(); };
    TabItemComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabItemComponent, selectors: [["gui-tab-item"]], inputs: { tab: "tab" }, ngContentSelectors: _c0$4, decls: 2, vars: 1, consts: [[1, "gui-tab-item"]], template: function TabItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵprojection(1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵattribute("data-tab", ctx.tab);
            }
        }, encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabItemComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-tab-item',
                        templateUrl: './tab-item.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], null, { tab: [{
                    type: i0.Input
                }] });
    })();

    var FabricSvgTemplateModule = /** @class */ (function () {
        function FabricSvgTemplateModule() {
        }
        return FabricSvgTemplateModule;
    }());
    FabricSvgTemplateModule.ɵfac = function FabricSvgTemplateModule_Factory(t) { return new (t || FabricSvgTemplateModule)(); };
    FabricSvgTemplateModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricSvgTemplateModule });
    FabricSvgTemplateModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricSvgTemplateModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricSvgTemplate
                        ],
                        exports: [
                            FabricSvgTemplate
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricSvgTemplateModule, { declarations: [FabricSvgTemplate], imports: [i1.CommonModule], exports: [FabricSvgTemplate] }); })();

    var FabricTabModule = /** @class */ (function () {
        function FabricTabModule() {
        }
        return FabricTabModule;
    }());
    FabricTabModule.ɵfac = function FabricTabModule_Factory(t) { return new (t || FabricTabModule)(); };
    FabricTabModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricTabModule });
    FabricTabModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule,
                FabricArrowIconModule,
                FabricSvgTemplateModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricTabModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
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
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricTabModule, { declarations: [FabricTabComponent,
                TabItemComponent], imports: [i1.CommonModule,
                FabricArrowIconModule,
                FabricSvgTemplateModule], exports: [FabricTabComponent,
                TabItemComponent] });
    })();

    var FabricTooltipComponent = /** @class */ (function () {
        function FabricTooltipComponent(elementRef) {
            this.elementRef = elementRef;
        }
        FabricTooltipComponent.prototype.correctPosition = function () {
            this.top -= this.elementRef.nativeElement.offsetHeight;
        };
        return FabricTooltipComponent;
    }());
    FabricTooltipComponent.ɵfac = function FabricTooltipComponent_Factory(t) { return new (t || FabricTooltipComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    FabricTooltipComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricTooltipComponent, selectors: [["ng-component"]], hostVars: 6, hostBindings: function FabricTooltipComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵstyleProp("left", ctx.left, "px")("top", ctx.top, "px");
                i0__namespace.ɵɵclassProp("gui-tooltip", true);
            }
        }, decls: 1, vars: 1, template: function FabricTooltipComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtext(0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.text, " ");
            }
        }, styles: [".gui-tooltip{background:rgba(0,0,0,.8);border-radius:4px;border-style:solid;border-width:0;box-sizing:border-box;color:#fff;display:block;font:14px Arial;font-weight:normal;padding:8px 12px;position:absolute;-ms-transform:translateX(-50%);transform:translate(-50%);vertical-align:middle;z-index:10}.gui-tooltip:after{border-color:#333 transparent transparent transparent;border-style:solid;border-width:5px;content:\"\";left:50%;margin-left:-5px;position:absolute;top:100%}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricTooltipComponent, [{
                type: i0.Component,
                args: [{
                        template: "\n\t\t{{text}}\n\t",
                        host: {
                            '[class.gui-tooltip]': 'true',
                            '[style.left.px]': 'left',
                            '[style.top.px]': 'top'
                        },
                        styleUrls: ['./fabric-tooltip.ngx.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }]; }, null);
    })();

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
        FabricTooltipDirective.prototype.ngOnInit = function () {
            var _this = this;
            var open$ = rxjs.fromEvent(this.elementRef.nativeElement, 'mouseenter'), close$ = rxjs.fromEvent(this.elementRef.nativeElement, 'mouseleave');
            open$
                .pipe(this.takeUntil())
                .subscribe(function () { return _this.show(); });
            close$
                .pipe(this.takeUntil())
                .subscribe(function () {
                if (_this.tooltipRef) {
                    _this.hide();
                }
            });
        };
        FabricTooltipDirective.prototype.show = function () {
            var tooltipRef = this.componentFactoryResolver
                .resolveComponentFactory(FabricTooltipComponent)
                .create(this.injector);
            tooltipRef.instance.text = this.text;
            tooltipRef.changeDetectorRef.detectChanges();
            var domElement = tooltipRef.hostView
                .rootNodes[0];
            this.document.body.appendChild(domElement);
            this.tooltipRef = tooltipRef;
            this.calculateCords();
            this.tooltipRef.instance.correctPosition();
            this.tooltipRef.changeDetectorRef.detectChanges();
        };
        FabricTooltipDirective.prototype.hide = function () {
            this.applicationRef.detachView(this.tooltipRef.hostView);
            this.tooltipRef.destroy();
            this.tooltipRef = null;
        };
        FabricTooltipDirective.prototype.calculateCords = function () {
            var elementRef = this.elementRef.nativeElement, elementRect = elementRef.getBoundingClientRect(), elementBottom = elementRect.bottom, elementLeft = elementRect.left;
            if (i1.isPlatformBrowser(this.platformId)) {
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
        return FabricTooltipDirective;
    }(FabricReactive));
    FabricTooltipDirective.tooltipOffset = 8;
    FabricTooltipDirective.ɵfac = function FabricTooltipDirective_Factory(t) { return new (t || FabricTooltipDirective)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵdirectiveInject(i0__namespace.Injector), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.ApplicationRef), i0__namespace.ɵɵdirectiveInject(i1.DOCUMENT), i0__namespace.ɵɵdirectiveInject(i0.PLATFORM_ID)); };
    FabricTooltipDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: FabricTooltipDirective, selectors: [["", "gui-tooltip", ""]], inputs: { text: ["gui-tooltip", "text"] }, exportAs: ["guiTooltip"], features: [i0__namespace.ɵɵInheritDefinitionFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricTooltipDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[gui-tooltip]',
                        exportAs: 'guiTooltip'
                    }]
            }], function () {
            return [{ type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.Injector }, { type: i0__namespace.ElementRef }, { type: i0__namespace.ApplicationRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }];
        }, { text: [{
                    type: i0.Input,
                    args: ['gui-tooltip']
                }] });
    })();

    var FabricTooltipModule = /** @class */ (function () {
        function FabricTooltipModule() {
        }
        return FabricTooltipModule;
    }());
    FabricTooltipModule.ɵfac = function FabricTooltipModule_Factory(t) { return new (t || FabricTooltipModule)(); };
    FabricTooltipModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricTooltipModule });
    FabricTooltipModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricTooltipModule, [{
                type: i0.NgModule,
                args: [{
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
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricTooltipModule, { declarations: [FabricTooltipDirective,
                FabricTooltipComponent], exports: [FabricTooltipDirective,
                FabricTooltipComponent] });
    })();

    var SelectOptionsCords = /** @class */ (function () {
        function SelectOptionsCords(element, selectContainerGeometry, window) {
            this.element = element;
            this.selectContainerGeometry = selectContainerGeometry;
            this.window = window;
            this.calculateCords(element, selectContainerGeometry);
        }
        SelectOptionsCords.prototype.getVerticalPosition = function () {
            return this.verticalPosition;
        };
        SelectOptionsCords.prototype.getHorizontalPosition = function () {
            return this.horizontalPosition;
        };
        SelectOptionsCords.prototype.getCanOpenUpward = function () {
            return this.canOpenUpward;
        };
        SelectOptionsCords.prototype.calculateCords = function (element, selectOptionsGeometry) {
            var elementRect = element.nativeElement.getBoundingClientRect(), elementBottom = this.window.pageYOffset + elementRect.bottom, elementLeft = this.window.pageXOffset + elementRect.left;
            this.horizontalPosition = elementLeft;
            this.verticalPosition = elementBottom - SelectOptionsCords.BORDER_WIDTH;
            this.calculateDirection(selectOptionsGeometry, element);
        };
        SelectOptionsCords.prototype.calculateDirection = function (selectOptionsGeometry, element) {
            var windowHeight = this.window.innerHeight + this.window.pageYOffset, elementHeight = element.nativeElement.offsetHeight, selectOptionsHeight = selectOptionsGeometry.getHeight();
            var selectOptionsDoesNotFitVertically = (windowHeight - this.verticalPosition - selectOptionsHeight) < 0;
            if (selectOptionsDoesNotFitVertically) {
                this.canOpenUpward = true;
                this.verticalPosition -= selectOptionsHeight + elementHeight - SelectOptionsCords.BORDER_WIDTH;
            }
        };
        return SelectOptionsCords;
    }());
    SelectOptionsCords.BORDER_WIDTH = 1;

    var SelectOptionsGeometry = /** @class */ (function () {
        function SelectOptionsGeometry(selectOptionsGeometry) {
            this.selectOptionsGeometry = selectOptionsGeometry;
        }
        SelectOptionsGeometry.prototype.getHeight = function () {
            return this.selectOptionsGeometry.nativeElement.querySelector('.gui-options-list').offsetHeight;
        };
        SelectOptionsGeometry.prototype.getWidth = function () {
            return this.selectOptionsGeometry.nativeElement.querySelector('.gui-options-list').offsetWidth;
        };
        return SelectOptionsGeometry;
    }());

    var SelectOptionsGeometryService = /** @class */ (function () {
        function SelectOptionsGeometryService(platformId) {
            this.platformId = platformId;
            this.selectOptionsCords$ = new rxjs.ReplaySubject(1);
        }
        SelectOptionsGeometryService.prototype.onSelectOptionsCords = function () {
            return this.selectOptionsCords$.asObservable();
        };
        SelectOptionsGeometryService.prototype.setGeometry = function (selectContainerRef) {
            this.selectContainerGeometry = new SelectOptionsGeometry(selectContainerRef);
        };
        SelectOptionsGeometryService.prototype.nextCords = function (element) {
            if (i1.isPlatformBrowser(this.platformId)) {
                var selectOptionsCords = new SelectOptionsCords(element, this.selectContainerGeometry, window);
                this.selectOptionsCords$.next(selectOptionsCords);
            }
        };
        return SelectOptionsGeometryService;
    }());
    SelectOptionsGeometryService.ɵfac = function SelectOptionsGeometryService_Factory(t) { return new (t || SelectOptionsGeometryService)(i0__namespace.ɵɵinject(i0.PLATFORM_ID)); };
    SelectOptionsGeometryService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: SelectOptionsGeometryService, factory: SelectOptionsGeometryService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SelectOptionsGeometryService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }];
        }, null);
    })();

    var FabricSelectedOptionsRepository = /** @class */ (function () {
        function FabricSelectedOptionsRepository() {
            this.selectedOption$ = new rxjs.ReplaySubject(1);
        }
        FabricSelectedOptionsRepository.prototype.onSelectedOption = function () {
            return this.selectedOption$.asObservable();
        };
        FabricSelectedOptionsRepository.prototype.next = function (option) {
            this.selectedOption$.next(option);
        };
        return FabricSelectedOptionsRepository;
    }());
    FabricSelectedOptionsRepository.ɵfac = function FabricSelectedOptionsRepository_Factory(t) { return new (t || FabricSelectedOptionsRepository)(); };
    FabricSelectedOptionsRepository.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FabricSelectedOptionsRepository, factory: FabricSelectedOptionsRepository.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricSelectedOptionsRepository, [{
                type: i0.Injectable
            }], null, null);
    })();

    var _c0$3 = ["optionList"];
    function FabricSelectOptionsComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵlistener("click", function FabricSelectOptionsComponent_div_2_Template_div_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r4_1); var option_r2 = restoredCtx.$implicit; var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.selectOption(option_r2); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r2 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("width", ctx_r1.width, "px");
            i0__namespace.ɵɵclassProp("gui-option-selected", ctx_r1.isOptionSelected(option_r2));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r1.getOptionValue(option_r2), " ");
        }
    }
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
        FabricSelectOptionsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.selectOptionsGeometryService
                .onSelectOptionsCords()
                .pipe(this.takeUntil())
                .subscribe(function (cords) {
                _this.optionsContainerTopAttribute = cords.getVerticalPosition();
                _this.optionsContainerLeftAttribute = cords.getHorizontalPosition();
                _this.canOpenUpward = cords.getCanOpenUpward();
                _this.changeDetectorRef.detectChanges();
            });
            this.selectService
                .onSelectedOption()
                .pipe(this.takeUntil())
                .subscribe(function (selectedOption) {
                _this.selectedOption = selectedOption;
                _this.changeDetectorRef.detectChanges();
            });
        };
        FabricSelectOptionsComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
            this.initOpenAnimation();
        };
        FabricSelectOptionsComponent.prototype.getElementRef = function () {
            return _super.prototype.getElementRef.call(this);
        };
        FabricSelectOptionsComponent.prototype.detectChanges = function () {
            this.changeDetectorRef.detectChanges();
        };
        FabricSelectOptionsComponent.prototype.selectOption = function (option) {
            this.selectService.next(option);
        };
        FabricSelectOptionsComponent.prototype.isOptionSelected = function (option) {
            return this.selectedOption && option.name === this.selectedOption.name;
        };
        FabricSelectOptionsComponent.prototype.getOptionValue = function (option) {
            return option.value ? option.value : option.name;
        };
        FabricSelectOptionsComponent.prototype.initOpenAnimation = function () {
            var optionsEl = this.optionListRef.nativeElement;
            this.getRenderer().addClass(optionsEl, 'gui-options-opened');
        };
        return FabricSelectOptionsComponent;
    }(FabricThemedComponent));
    FabricSelectOptionsComponent.ɵfac = function FabricSelectOptionsComponent_Factory(t) { return new (t || FabricSelectOptionsComponent)(i0__namespace.ɵɵdirectiveInject(SelectOptionsGeometryService), i0__namespace.ɵɵdirectiveInject(FabricSelectedOptionsRepository), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(FabricModalThemeService)); };
    FabricSelectOptionsComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricSelectOptionsComponent, selectors: [["ng-component"]], viewQuery: function FabricSelectOptionsComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$3, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.optionListRef = _t.first);
            }
        }, features: [i0__namespace.ɵɵInheritDefinitionFeature], decls: 3, vars: 9, consts: [[1, "gui-options-list"], ["optionList", ""], ["class", "gui-option", 3, "gui-option-selected", "width", "click", 4, "ngFor", "ngForOf"], [1, "gui-option", 3, "click"]], template: function FabricSelectOptionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0, 1);
                i0__namespace.ɵɵtemplate(2, FabricSelectOptionsComponent_div_2_Template, 2, 5, "div", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleProp("left", ctx.optionsContainerLeftAttribute, "px")("top", ctx.optionsContainerTopAttribute, "px");
                i0__namespace.ɵɵclassProp("gui-upward", ctx.canOpenUpward)("gui-downward", !ctx.canOpenUpward);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngForOf", ctx.options);
            }
        }, directives: [i1__namespace.NgForOf], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricSelectOptionsComponent, [{
                type: i0.Component,
                args: [{
                        template: "\n\t\t<div #optionList\n\t\t\t [class.gui-upward]=\"canOpenUpward\"\n\t\t\t [class.gui-downward]=\"!canOpenUpward\"\n\t\t\t [style.left.px]=\"optionsContainerLeftAttribute\"\n\t\t\t [style.top.px]=\"optionsContainerTopAttribute\"\n\t\t\t class=\"gui-options-list\">\n\n\t\t\t<div *ngFor=\"let option of options\"\n\t\t\t\t [class.gui-option-selected]=\"isOptionSelected(option)\"\n\t\t\t\t [style.width.px]=\"width\"\n\t\t\t\t (click)=\"selectOption(option)\"\n\t\t\t\t class=\"gui-option\">\n\t\t\t\t{{getOptionValue(option)}}\n\t\t\t</div>\n\t\t</div>\n\t",
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: SelectOptionsGeometryService }, { type: FabricSelectedOptionsRepository }, { type: i0__namespace.ChangeDetectorRef }, { type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }, { type: FabricModalThemeService }]; }, { optionListRef: [{
                    type: i0.ViewChild,
                    args: ['optionList', { static: false }]
                }] });
    })();

    var SelectOptionModalService = /** @class */ (function (_super) {
        __extends(SelectOptionModalService, _super);
        function SelectOptionModalService(selectOptionsGeometryService, componentFactoryResolver, applicationRef, injector, document) {
            var _this = _super.call(this, componentFactoryResolver, applicationRef, injector, document) || this;
            _this.selectOptionsGeometryService = selectOptionsGeometryService;
            return _this;
        }
        SelectOptionModalService.prototype.getComponent = function () {
            return FabricSelectOptionsComponent;
        };
        SelectOptionModalService.prototype.open = function (options, width) {
            this.createAndAppend();
            this.getComponentRef().instance.options = options;
            this.getComponentRef().instance.width = width;
            this.getComponentRef().instance.detectChanges();
            this.selectOptionsGeometryService.setGeometry(this.getComponentRef().instance.getElementRef());
            this.getComponentRef().instance.detectChanges();
        };
        SelectOptionModalService.prototype.closeOptions = function () {
            this.removeComponent();
        };
        return SelectOptionModalService;
    }(FabricModal));
    SelectOptionModalService.ɵfac = function SelectOptionModalService_Factory(t) { return new (t || SelectOptionModalService)(i0__namespace.ɵɵinject(SelectOptionsGeometryService), i0__namespace.ɵɵinject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵinject(i0__namespace.ApplicationRef), i0__namespace.ɵɵinject(i0__namespace.Injector), i0__namespace.ɵɵinject(i1.DOCUMENT)); };
    SelectOptionModalService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: SelectOptionModalService, factory: SelectOptionModalService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SelectOptionModalService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: SelectOptionsGeometryService }, { type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.ApplicationRef }, { type: i0__namespace.Injector }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }];
        }, null);
    })();

    var _c0$2 = ["container"];
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
            _this.optionChanged = new i0.EventEmitter();
            _this.doNotEmitValues = false;
            _this.opened = false;
            return _this;
        }
        FabricSelectComponent.prototype.ngOnChanges = function (changes) {
            if (changes.placeholder) {
                this.containerText = this.placeholder;
            }
            if (changes.selected) {
                if (this.selected) {
                    this.tryToSelect(this.selected);
                }
            }
        };
        FabricSelectComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.selectService
                .onSelectedOption()
                .pipe(this.takeUntil())
                .subscribe(function (selectedOption) {
                _this.emitSelectedOption(selectedOption);
                _this.selectedOption = selectedOption;
                _this.containerText = selectedOption.value;
                _this.doNotEmitValues = false;
                _this.changeDetectorRef.detectChanges();
            });
            this.selectOptionsGeometryService
                .onSelectOptionsCords()
                .pipe(this.takeUntil())
                .subscribe(function (cords) {
                if (cords.getCanOpenUpward()) {
                    _this.openUpward();
                }
                else {
                    _this.openDownward();
                }
            });
        };
        FabricSelectComponent.prototype.tryToOpen = function (event) {
            if (this.isContainerDisabled(event)) {
                event.stopPropagation();
            }
            else {
                this.open(this.options, this.width);
                this.toggleOptions(!this.opened);
                this.changeDetectorRef.detectChanges();
            }
        };
        FabricSelectComponent.prototype.clickOutside = function (event) {
            if (this.isContainerClicked(event)) {
                this.toggleOptions(false);
            }
        };
        FabricSelectComponent.prototype.toggleOptions = function (opened) {
            this.opened = opened;
            this.maintainOptionsListPosition();
            if (!this.opened) {
                this.closeOptions();
            }
        };
        FabricSelectComponent.prototype.isOptionSelected = function (option) {
            return this.selectedOption && option.name === this.selectedOption.name;
        };
        FabricSelectComponent.prototype.getOptionValue = function (option) {
            if (option) {
                return option.value ? option.value : option.name;
            }
            return '';
        };
        FabricSelectComponent.prototype.open = function (options, width) {
            this.closeSelect();
            this.selectOptionModalService.open(options, width);
            this.selectOptionsGeometryService.nextCords(this.containerRef);
        };
        FabricSelectComponent.prototype.tryToSelect = function (option) {
            var canSelect = this.selectedOption ? option.name !== this.selectedOption.name : true;
            if (canSelect) {
                this.doNotEmitValues = true;
                this.selectService.next(option);
                this.selectedOption = option;
                this.containerText = this.getOptionValue(option);
            }
        };
        FabricSelectComponent.prototype.maintainOptionsListPosition = function () {
            var _this = this;
            if (i1.isPlatformBrowser(this.platformId)) {
                if (this.opened) {
                    this.scrollListenerFn = this.renderer.listen('window', 'scroll', function () {
                        _this.selectOptionsGeometryService.nextCords(_this.containerRef);
                    });
                }
                else {
                    if (this.scrollListenerFn) {
                        this.scrollListenerFn();
                    }
                }
            }
        };
        FabricSelectComponent.prototype.closeSelect = function () {
            this.selectOptionModalService.closeOptions();
        };
        FabricSelectComponent.prototype.emitSelectedOption = function (option) {
            if (!this.doNotEmitValues) {
                if (!this.isOptionSelected(option)) {
                    this.optionChanged.emit(option);
                }
            }
        };
        FabricSelectComponent.prototype.openDownward = function () {
            this.addClass('gui-options-opened');
            this.addClass('gui-downward');
            this.removeClass('gui-upward');
        };
        FabricSelectComponent.prototype.openUpward = function () {
            this.addClass('gui-options-opened');
            this.addClass('gui-upward');
            this.removeClass('gui-downward');
        };
        FabricSelectComponent.prototype.closeOptions = function () {
            var optionsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-options-opened');
            if (optionsElHasOpenClass) {
                this.removeClass('gui-options-opened');
                this.closeSelect();
            }
        };
        FabricSelectComponent.prototype.isContainerClicked = function (event) {
            return !this.elementRef.nativeElement.contains(event.target);
        };
        FabricSelectComponent.prototype.isContainerDisabled = function (event) {
            return event.target.classList.contains('gui-disabled');
        };
        FabricSelectComponent.prototype.addClass = function (className) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        };
        FabricSelectComponent.prototype.removeClass = function (className) {
            this.renderer.removeClass(this.elementRef.nativeElement, className);
        };
        return FabricSelectComponent;
    }(FabricReactive));
    FabricSelectComponent.ɵfac = function FabricSelectComponent_Factory(t) { return new (t || FabricSelectComponent)(i0__namespace.ɵɵdirectiveInject(FabricSelectedOptionsRepository), i0__namespace.ɵɵdirectiveInject(SelectOptionsGeometryService), i0__namespace.ɵɵdirectiveInject(SelectOptionModalService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0.PLATFORM_ID), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    FabricSelectComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricSelectComponent, selectors: [["gui-select"]], viewQuery: function FabricSelectComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$2, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.containerRef = _t.first);
            }
        }, hostVars: 2, hostBindings: function FabricSelectComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-select", true);
            }
        }, inputs: { options: "options", placeholder: "placeholder", selected: "selected", width: "width", disabled: "disabled" }, outputs: { optionChanged: "optionChanged" }, features: [i0__namespace.ɵɵProvidersFeature([
                FabricSelectedOptionsRepository,
                SelectOptionsGeometryService,
                SelectOptionModalService
            ]), i0__namespace.ɵɵInheritDefinitionFeature, i0__namespace.ɵɵNgOnChangesFeature], decls: 5, vars: 5, consts: [[1, "gui-select-container", 3, "click"], ["container", ""], [1, "gui-select-value"], [1, "gui-select-arrow"]], template: function FabricSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0, 1);
                i0__namespace.ɵɵlistener("click", function FabricSelectComponent_Template_div_click_0_listener($event) { return ctx.tryToOpen($event); })("click", function FabricSelectComponent_Template_div_click_0_listener($event) { return ctx.clickOutside($event); }, false, i0__namespace.ɵɵresolveDocument);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "span", 3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleProp("width", ctx.width, "px");
                i0__namespace.ɵɵclassProp("gui-disabled", ctx.disabled);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.containerText, " ");
            }
        }, styles: [".gui-select .gui-select-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:content-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent transparent;height:0;margin:8px;position:absolute;right:5px;top:5px;width:0}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8 #6fb4e8 transparent #6fb4e8;border-radius:4px 4px 0 0;border-width:1px}.gui-select.gui-downward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-downward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:1px 0 0 0}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959 transparent;bottom:5px;left:5px;top:auto}.gui-select.gui-upward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-upward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:0 0 1px 0;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#cccccc transparent transparent transparent}.gui-select .initAnimationDisabled.gui-options-list{display:none}.gui-options-list{background:#fff;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px;overflow:hidden;padding:0;position:absolute;z-index:1000}.gui-options-list .gui-option{box-sizing:content-box;cursor:pointer;font-size:14px;list-style-type:none;padding:8px 24px 8px 12px}.gui-options-list .gui-option:hover{background:#dcdcdc}.gui-options-list .gui-option-selected{background:#e6e6e6;font-weight:bold}.gui-options-list.gui-upward{-webkit-animation:loadUpward .2s forwards;animation:loadUpward .2s forwards;border-bottom:none;border-color:#6fb4e8;border-radius:4px 4px 0 0;border-style:solid;border-width:1px}@-webkit-keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}.gui-options-list.gui-downward{-webkit-animation:loadDownward .2s forwards;animation:loadDownward .2s forwards;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px}@-webkit-keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}\n", ".gui-material .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-options-list .gui-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent transparent}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8 transparent}.gui-dark .gui-select .gui-disabled{opacity:.36}.gui-dark .gui-options-list{border-color:#ce93d8}.gui-dark .gui-options-list .gui-option{background:#424242;border-color:#757575;color:#bdbdbd}.gui-dark .gui-options-list .gui-option:hover{background:#616161}.gui-dark .gui-options-list .gui-option-selected{background:#757575}\n", ".gui-light .gui-select .gui-select-container{background:#fff;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light .gui-options-list .gui-option:hover{background:#f6f6f5}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricSelectComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-select',
                        templateUrl: './select.component.html',
                        styleUrls: [
                            './select.ngx.scss',
                            './themes/select.material.ngx.scss',
                            './themes/select.dark.ngx.scss',
                            './themes/select.light.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-select]': 'true'
                        },
                        providers: [
                            FabricSelectedOptionsRepository,
                            SelectOptionsGeometryService,
                            SelectOptionModalService
                        ]
                    }]
            }], function () {
            return [{ type: FabricSelectedOptionsRepository }, { type: SelectOptionsGeometryService }, { type: SelectOptionModalService }, { type: i0__namespace.ChangeDetectorRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }, { type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }];
        }, { containerRef: [{
                    type: i0.ViewChild,
                    args: ['container', { static: false }]
                }], options: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], selected: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], optionChanged: [{
                    type: i0.Output
                }] });
    })();

    var FabricSelectModule = /** @class */ (function () {
        function FabricSelectModule() {
        }
        return FabricSelectModule;
    }());
    FabricSelectModule.ɵfac = function FabricSelectModule_Factory(t) { return new (t || FabricSelectModule)(); };
    FabricSelectModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricSelectModule });
    FabricSelectModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricSelectModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
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
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricSelectModule, { declarations: [FabricSelectComponent,
                FabricSelectOptionsComponent], imports: [i1.CommonModule], exports: [FabricSelectComponent] });
    })();

    var FabricSliderComponent = /** @class */ (function () {
        function FabricSliderComponent() {
            this.changed = new i0.EventEmitter();
        }
        FabricSliderComponent.prototype.toggle = function (event) {
            event.stopPropagation();
            this.toggled = !this.toggled;
            this.changed.emit(this.toggled);
        };
        return FabricSliderComponent;
    }());
    FabricSliderComponent.ɵfac = function FabricSliderComponent_Factory(t) { return new (t || FabricSliderComponent)(); };
    FabricSliderComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricSliderComponent, selectors: [["gui-slider"]], inputs: { toggled: "toggled" }, outputs: { changed: "changed" }, decls: 2, vars: 2, consts: [[1, "gui-slider", 3, "click"], [1, "gui-slider-indicator"]], template: function FabricSliderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵlistener("click", function FabricSliderComponent_Template_div_click_0_listener($event) { return ctx.toggle($event); });
                i0__namespace.ɵɵelement(1, "span", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵclassProp("is-toggled", ctx.toggled);
            }
        }, styles: [".gui-slider{background:#cccccc;border-radius:4px;cursor:pointer;display:block;height:12px;position:relative;width:32px}.gui-slider .gui-slider-indicator{background:#2185d0;border-radius:50%;box-sizing:border-box;height:16px;overflow:hidden;position:absolute;top:-2px;-ms-transform:translateX(-5.33333px);transform:translate(-5.33333px);transition:all .2s ease-in-out;width:16px}.gui-slider .gui-slider-indicator.is-toggled{-ms-transform:translateX(calc(100% + 16px / 3));transform:translate(calc(100% + 16px / 3))}\n", ".gui-dark .gui-slider{background:#424242}.gui-dark .gui-slider .gui-slider-indicator{background:#ce93d8}\n", ".gui-material .gui-slider .gui-slider-indicator{background:#6200ee}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricSliderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-slider',
                        templateUrl: './fabric-slider.component.html',
                        styleUrls: [
                            './fabric-slider.ngx.scss',
                            './themes/fabric-slider.dark.ngx.scss',
                            './themes/fabric-slider.material.ngx.scss'
                        ],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { toggled: [{
                    type: i0.Input
                }], changed: [{
                    type: i0.Output
                }] });
    })();

    var FabricSliderModule = /** @class */ (function () {
        function FabricSliderModule() {
        }
        return FabricSliderModule;
    }());
    FabricSliderModule.ɵfac = function FabricSliderModule_Factory(t) { return new (t || FabricSliderModule)(); };
    FabricSliderModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricSliderModule });
    FabricSliderModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricSliderModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricSliderComponent
                        ],
                        exports: [
                            FabricSliderComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricSliderModule, { declarations: [FabricSliderComponent], imports: [i1.CommonModule], exports: [FabricSliderComponent] }); })();

    var FabricSpinnerComponent = /** @class */ (function (_super) {
        __extends(FabricSpinnerComponent, _super);
        function FabricSpinnerComponent(elementRef, renderer) {
            return _super.call(this, elementRef, renderer) || this;
        }
        FabricSpinnerComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
        };
        return FabricSpinnerComponent;
    }(AbstractSpinner));
    FabricSpinnerComponent.ɵfac = function FabricSpinnerComponent_Factory(t) { return new (t || FabricSpinnerComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    FabricSpinnerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricSpinnerComponent, selectors: [["gui-spinner"]], hostVars: 2, hostBindings: function FabricSpinnerComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-spinner", true);
            }
        }, inputs: { color: "color" }, features: [i0__namespace.ɵɵInheritDefinitionFeature], decls: 5, vars: 30, consts: [[1, "gui-spinner"], [1, "circle-outer"], ["cx", "50%", "cy", "50%"], [1, "circle-inner"]], template: function FabricSpinnerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "circle", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "svg", 3);
                i0__namespace.ɵɵelement(4, "circle", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("stroke-dasharray", ctx.croppedCircle)("stroke-dashoffset", ctx.circumference)("stroke-width", ctx.width)("stroke", ctx.color);
                i0__namespace.ɵɵattribute("r", ctx.r);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("stroke-dasharray", ctx.croppedCircle)("stroke-dashoffset", ctx.circumference)("stroke-width", ctx.width)("stroke", ctx.color);
                i0__namespace.ɵɵattribute("r", ctx.r);
            }
        }, styles: ["@-webkit-keyframes gui-spin{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@keyframes gui-spin{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@-webkit-keyframes gui-spin-reverse{0%{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}@keyframes gui-spin-reverse{0%{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}.gui-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-spinner circle{fill:transparent;stroke:#999}.gui-spinner svg{position:absolute}.gui-spinner .circle-inner{animation:gui-spin-reverse 2s infinite linear forwards reverse}.gui-spinner .circle-outer{-webkit-animation:gui-spin 2s infinite linear forwards;animation:gui-spin 2s infinite linear forwards}.gui-primary .gui-spinner.gui-spinner circle{stroke:#2185d0}.gui-secondary .gui-spinner.gui-spinner circle{stroke:#3cb371}\n", ".gui-material .gui-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-spinner circle{stroke:#0097a7}\n", ".gui-dark .gui-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-spinner circle{stroke:#80cbc4}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricSpinnerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-spinner',
                        templateUrl: 'spinner.component.html',
                        styleUrls: [
                            './spinner.ngx.scss',
                            './themes/spinner.material.ngx.scss',
                            './themes/spinner.dark.ngx.scss'
                        ],
                        host: {
                            '[class.gui-spinner]': 'true'
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; }, { color: [{
                    type: i0.Input
                }] });
    })();

    var FabricSpinnerModule = /** @class */ (function () {
        function FabricSpinnerModule() {
        }
        return FabricSpinnerModule;
    }());
    FabricSpinnerModule.ɵfac = function FabricSpinnerModule_Factory(t) { return new (t || FabricSpinnerModule)(); };
    FabricSpinnerModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricSpinnerModule });
    FabricSpinnerModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricSpinnerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricSpinnerComponent
                        ],
                        exports: [
                            FabricSpinnerComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricSpinnerModule, { declarations: [FabricSpinnerComponent], imports: [i1.CommonModule], exports: [FabricSpinnerComponent] }); })();

    var ToggleButtonGroupService = /** @class */ (function () {
        function ToggleButtonGroupService() {
            this.toggleButtonId$ = new rxjs.Subject();
        }
        ToggleButtonGroupService.prototype.ngOnDestroy = function () {
            this.toggleButtonId$.next();
            this.toggleButtonId$.complete();
        };
        ToggleButtonGroupService.prototype.observeToggledButton = function () {
            return this.toggleButtonId$.asObservable();
        };
        ToggleButtonGroupService.prototype.toggleButton = function (id) {
            this.toggleButtonId$.next(id);
        };
        return ToggleButtonGroupService;
    }());
    ToggleButtonGroupService.ɵfac = function ToggleButtonGroupService_Factory(t) { return new (t || ToggleButtonGroupService)(); };
    ToggleButtonGroupService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ToggleButtonGroupService, factory: ToggleButtonGroupService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ToggleButtonGroupService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var _c0$1 = ["*"];
    var FabricToggleButtonComponent = /** @class */ (function (_super) {
        __extends(FabricToggleButtonComponent, _super);
        function FabricToggleButtonComponent(elementRef, renderer, toggleButtonGroupService) {
            var _this = _super.call(this, elementRef, renderer) || this;
            _this.toggleButtonGroupService = toggleButtonGroupService;
            _this.checked = false;
            _this.disabled = false;
            _this.changed = new i0.EventEmitter();
            _this.buttonChecked = false;
            _this.buttonId = Math.floor(Math.random() * 1000000);
            _this.generateButtonId();
            return _this;
        }
        FabricToggleButtonComponent.prototype.ngOnChanges = function (changes) {
            if (changes.checked) {
                this.setButtonChecked(this.checked);
            }
            if (changes.disabled) {
                this.toggleDisabledCssClass();
            }
        };
        FabricToggleButtonComponent.prototype.ngOnInit = function () {
            this.observeToggleButtonGroup();
        };
        FabricToggleButtonComponent.prototype.tryToToggle = function (e) {
            if (e.target.disabled) {
                e.stopPropagation();
            }
            else {
                this.toggle();
            }
        };
        FabricToggleButtonComponent.prototype.toggle = function () {
            this.toggleButtonChecked();
            this.changed.emit(this.buttonChecked);
        };
        FabricToggleButtonComponent.prototype.toggleButtonChecked = function () {
            this.setButtonChecked(!this.buttonChecked);
        };
        FabricToggleButtonComponent.prototype.setButtonChecked = function (checked) {
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
        FabricToggleButtonComponent.prototype.observeToggleButtonGroup = function () {
            var _this = this;
            if (this.toggleButtonGroupService !== null) {
                this.toggleButtonGroupService.observeToggledButton().subscribe(function (id) {
                    if (id !== _this.buttonId) {
                        _this.buttonChecked = !_this.buttonChecked;
                        _this.removeClass('gui-checked');
                    }
                    else {
                        _this.buttonChecked = true;
                    }
                    _this.changed.emit(_this.buttonChecked);
                });
            }
        };
        FabricToggleButtonComponent.prototype.generateButtonId = function () {
            return this.buttonId;
        };
        FabricToggleButtonComponent.prototype.toggleDisabledCssClass = function () {
            if (this.disabled) {
                this.addClass('gui-disabled');
            }
            else {
                this.removeClass('gui-disabled');
            }
        };
        return FabricToggleButtonComponent;
    }(Indicator));
    FabricToggleButtonComponent.ɵfac = function FabricToggleButtonComponent_Factory(t) { return new (t || FabricToggleButtonComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(ToggleButtonGroupService, 8)); };
    FabricToggleButtonComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricToggleButtonComponent, selectors: [["gui-button-toggle"]], hostVars: 2, hostBindings: function FabricToggleButtonComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-button-toggle", true);
            }
        }, inputs: { checked: "checked", disabled: "disabled" }, outputs: { changed: "changed" }, features: [i0__namespace.ɵɵInheritDefinitionFeature, i0__namespace.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$1, decls: 2, vars: 4, consts: [["gui-button", "", 3, "disabled", "outline", "primary", "secondary", "click"]], template: function FabricToggleButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function FabricToggleButtonComponent_Template_button_click_0_listener($event) { return ctx.tryToToggle($event); });
                i0__namespace.ɵɵprojection(1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("disabled", ctx.disabled)("outline", ctx.outline)("primary", ctx.primary)("secondary", ctx.secondary);
            }
        }, directives: [FabricButtonComponent], styles: [".gui-checked .gui-button{background:#e6e6e6;box-shadow:inset 0 10px 0 -5px #999;color:#333}.gui-checked .gui-button:hover{background:#cccccc}.gui-checked .gui-button:active{background:#999}.gui-checked .gui-button.gui-outline{background:transparent;box-shadow:0 0 0 2px #d6d6d6}.gui-checked .gui-button.gui-outline.gui-primary{background:transparent;box-shadow:0 0 0 2px #439de1;color:#2185d0}.gui-checked .gui-button.gui-outline.gui-primary:hover{color:#fff}.gui-checked .gui-button.gui-outline.gui-secondary{background:transparent;box-shadow:0 0 0 2px #5ac88b;color:#3cb371}.gui-checked .gui-button.gui-outline.gui-secondary:hover{color:#fff}.gui-checked .gui-button.gui-primary{background:#2185d0;box-shadow:inset 0 10px 0 -5px #175b8e;color:#fff}.gui-checked .gui-button.gui-secondary{background:#3cb371;box-shadow:inset 0 10px 0 -5px #2b8152;color:#fff}.gui-disabled{pointer-events:none}\n", ".gui-material .gui-button{background:#3949ab;color:#fff}.gui-material .gui-checked .gui-button{background:#3949ab;box-shadow:inset 0 10px 0 -5px #7885d2;color:#fff}.gui-material .gui-checked .gui-button:hover{background:#5262c5}.gui-material .gui-checked .gui-button:active{background:#4051bf}.gui-material .gui-checked .gui-button.gui-outline{background:#c5cae9;box-shadow:0 0 0 1px #5262c5;color:#3949ab}.gui-material .gui-checked .gui-button.gui-outline.gui-primary{background:#d1c4e9;box-shadow:0 0 0 1px #6200ee;color:#6200ee}.gui-material .gui-checked .gui-button.gui-outline.gui-secondary{background:#b2ebf2;box-shadow:0 0 0 1px #0097a7;color:#0097a7}.gui-material .gui-checked .gui-button.gui-primary{background:#6200ee;box-shadow:inset 0 10px 0 -5px #d1c4e9;color:#fff}.gui-material .gui-checked .gui-button.gui-secondary{background:#0097a7;box-shadow:inset 0 10px 0 -5px #b2ebf2;color:#fff}\n", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-checked .gui-button{color:#bdbdbd}.gui-dark .gui-checked .gui-button:hover{background:#616161}.gui-dark .gui-checked .gui-button:active{background:#212121}.gui-dark .gui-checked .gui-button.gui-outline{background:#2e2e2e;box-shadow:0 0 0 1px #616161;color:#bdbdbd}.gui-dark .gui-checked .gui-button.gui-outline.gui-primary{background:#b55bc4;box-shadow:0 0 0 1px #ce93d8;color:#212121}.gui-dark .gui-checked .gui-button.gui-outline.gui-secondary{background:#26a69a;box-shadow:0 0 0 1px #80cbc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-primary{background:#ce93d8;box-shadow:inset 0 10px 0 -5px #b55bc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-secondary{background:#80cbc4;box-shadow:inset 0 10px 0 -5px #26a69a;color:#212121}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricToggleButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-button-toggle',
                        templateUrl: './toggle-button.component.html',
                        styleUrls: [
                            './toggle-button.ngx.scss',
                            './themes/toggle-button.material.ngx.scss',
                            './themes/toggle-button.dark.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-button-toggle]': 'true'
                        }
                    }]
            }], function () {
            return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }, { type: ToggleButtonGroupService, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { checked: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], changed: [{
                    type: i0.Output
                }] });
    })();

    var FabricToggleButtonModule = /** @class */ (function () {
        function FabricToggleButtonModule() {
        }
        return FabricToggleButtonModule;
    }());
    FabricToggleButtonModule.ɵfac = function FabricToggleButtonModule_Factory(t) { return new (t || FabricToggleButtonModule)(); };
    FabricToggleButtonModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricToggleButtonModule });
    FabricToggleButtonModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule,
                FabricButtonModule
            ], FabricButtonModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricToggleButtonModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
                            FabricButtonModule
                        ],
                        declarations: [
                            FabricToggleButtonComponent
                        ],
                        exports: [
                            FabricToggleButtonComponent,
                            FabricButtonModule
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricToggleButtonModule, { declarations: [FabricToggleButtonComponent], imports: [i1.CommonModule,
                FabricButtonModule], exports: [FabricToggleButtonComponent,
                FabricButtonModule] });
    })();

    var _c0 = ["*"];
    var FabricToggleButtonGroupComponent = /** @class */ (function () {
        function FabricToggleButtonGroupComponent() {
        }
        return FabricToggleButtonGroupComponent;
    }());
    FabricToggleButtonGroupComponent.ɵfac = function FabricToggleButtonGroupComponent_Factory(t) { return new (t || FabricToggleButtonGroupComponent)(); };
    FabricToggleButtonGroupComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricToggleButtonGroupComponent, selectors: [["gui-toggle-button-group"]], hostVars: 2, hostBindings: function FabricToggleButtonGroupComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-toggle-button-group", true);
            }
        }, features: [i0__namespace.ɵɵProvidersFeature([ToggleButtonGroupService])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function FabricToggleButtonGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵprojection(0);
            }
        }, styles: [".gui-toggle-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-toggle-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-toggle-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-toggle-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-toggle-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricToggleButtonGroupComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-toggle-button-group',
                        templateUrl: './toggle-button-group.component.html',
                        styleUrls: [
                            './toggle-button-group.ngx.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-toggle-button-group]': 'true'
                        },
                        providers: [ToggleButtonGroupService]
                    }]
            }], null, null);
    })();

    var FabricToggleButtonGroupModule = /** @class */ (function () {
        function FabricToggleButtonGroupModule() {
        }
        return FabricToggleButtonGroupModule;
    }());
    FabricToggleButtonGroupModule.ɵfac = function FabricToggleButtonGroupModule_Factory(t) { return new (t || FabricToggleButtonGroupModule)(); };
    FabricToggleButtonGroupModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricToggleButtonGroupModule });
    FabricToggleButtonGroupModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricToggleButtonGroupModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            FabricToggleButtonGroupComponent
                        ],
                        exports: [
                            FabricToggleButtonGroupComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricToggleButtonGroupModule, { declarations: [FabricToggleButtonGroupComponent], imports: [i1.CommonModule], exports: [FabricToggleButtonGroupComponent] }); })();

    var StarIconComponent = /** @class */ (function () {
        function StarIconComponent() {
        }
        return StarIconComponent;
    }());
    StarIconComponent.ɵfac = function StarIconComponent_Factory(t) { return new (t || StarIconComponent)(); };
    StarIconComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: StarIconComponent, selectors: [["gui-star-icon"]], hostVars: 2, hostBindings: function StarIconComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-star-icon", true);
            }
        }, decls: 2, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "34.542", "height", "32.852", "viewBox", "0 0 34.542 32.852"], ["data-name", "Path 572", "d", "M-121.168-469.432l5.337,10.814,11.934,1.734-8.636,8.418,2.039,11.886-10.674-5.612-10.674,5.612,2.039-11.886-8.636-8.418,11.934-1.734Z", "transform", "translate(138.44 469.432)", "fill", "#ffe623", "fill-rule", "evenodd"]], template: function StarIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(0, "svg", 0);
                i0__namespace.ɵɵelement(1, "path", 1);
                i0__namespace.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StarIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-star-icon',
                        template: "\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34.542\" height=\"32.852\" viewBox=\"0 0 34.542 32.852\">\n\t\t\t<path data-name=\"Path 572\"\n\t\t\t\t  d=\"M-121.168-469.432l5.337,10.814,11.934,1.734-8.636,8.418,2.039,11.886-10.674-5.612-10.674,5.612,2.039-11.886-8.636-8.418,11.934-1.734Z\"\n\t\t\t\t  transform=\"translate(138.44 469.432)\" fill=\"#ffe623\" fill-rule=\"evenodd\"/>\n\t\t</svg>\n\t",
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            '[class.gui-star-icon]': 'true'
                        }
                    }]
            }], null, null);
    })();

    function FabricRatingComponent_gui_star_icon_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "gui-star-icon", 2);
            i0__namespace.ɵɵlistener("click", function FabricRatingComponent_gui_star_icon_1_Template_gui_star_icon_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r3_1); var star_r1 = restoredCtx.$implicit; var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.changeRating(star_r1); })("mouseenter", function FabricRatingComponent_gui_star_icon_1_Template_gui_star_icon_mouseenter_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r3_1); var star_r1 = restoredCtx.$implicit; var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.changePreviewRating(star_r1); })("mouseleave", function FabricRatingComponent_gui_star_icon_1_Template_gui_star_icon_mouseleave_0_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.changePreviewRating(0); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var star_r1 = ctx.$implicit;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵclassProp("star-icon-gray", ctx_r0.isRating(star_r1, ctx_r0.rating))("star-icon-hover", ctx_r0.isRating(ctx_r0.previewRating, star_r1));
        }
    }
    var FabricRatingComponent = /** @class */ (function () {
        function FabricRatingComponent() {
            this.rating = 3;
            this.onRatingChange = new i0.EventEmitter();
            this.stars = [];
            this.previewRating = 0;
        }
        FabricRatingComponent.prototype.ngOnChanges = function (changes) {
            if (changes.starsLength) {
                if (this.starsLength) {
                    this.createStarsArray(this.starsLength);
                }
            }
        };
        FabricRatingComponent.prototype.ngOnInit = function () {
            if (this.stars.length === 0) {
                this.createStarsArray(5);
            }
        };
        FabricRatingComponent.prototype.isRating = function (starNumber, rating) {
            return !(rating >= starNumber);
        };
        FabricRatingComponent.prototype.changeRating = function (star) {
            this.rating = star;
            this.onRatingChange.emit(star);
        };
        FabricRatingComponent.prototype.changePreviewRating = function (star) {
            this.previewRating = star + 1;
        };
        FabricRatingComponent.prototype.createStarsArray = function (length) {
            for (var i = 1; i <= length; i++) {
                this.stars.push(i);
            }
        };
        return FabricRatingComponent;
    }());
    FabricRatingComponent.ɵfac = function FabricRatingComponent_Factory(t) { return new (t || FabricRatingComponent)(); };
    FabricRatingComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FabricRatingComponent, selectors: [["gui-rating"]], hostVars: 2, hostBindings: function FabricRatingComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("gui-rating", true);
            }
        }, inputs: { starsLength: "starsLength", rating: "rating" }, outputs: { onRatingChange: "onRatingChange" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "gui-rating-container"], [3, "star-icon-gray", "star-icon-hover", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter", "mouseleave"]], template: function FabricRatingComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, FabricRatingComponent_gui_star_icon_1_Template, 1, 4, "gui-star-icon", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.stars);
            }
        }, directives: [i1__namespace.NgForOf, StarIconComponent], styles: [".gui-rating .gui-star-icon{cursor:pointer;padding-right:8px}.gui-rating .gui-star-icon svg{height:24px;width:24px}.gui-rating .gui-star-icon svg path{transition:fill .3s ease-in-out}.gui-rating .gui-rating-container{display:-ms-flexbox;display:flex}.gui-rating .gui-rating-container .star-icon-gray svg path{fill:#dedede}.gui-rating .gui-rating-container .star-icon-hover svg path{fill:#fc0}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricRatingComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gui-rating',
                        templateUrl: './fabric-rating.component.html',
                        styleUrls: ['./fabric-rating.ngx.scss'],
                        host: {
                            '[class.gui-rating]': 'true'
                        },
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { starsLength: [{
                    type: i0.Input
                }], rating: [{
                    type: i0.Input
                }], onRatingChange: [{
                    type: i0.Output
                }] });
    })();

    var StarIconModule = /** @class */ (function () {
        function StarIconModule() {
        }
        return StarIconModule;
    }());
    StarIconModule.ɵfac = function StarIconModule_Factory(t) { return new (t || StarIconModule)(); };
    StarIconModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: StarIconModule });
    StarIconModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StarIconModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            StarIconComponent
                        ],
                        exports: [
                            StarIconComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(StarIconModule, { declarations: [StarIconComponent], imports: [i1.CommonModule], exports: [StarIconComponent] }); })();

    var FabricRatingModule = /** @class */ (function () {
        function FabricRatingModule() {
        }
        return FabricRatingModule;
    }());
    FabricRatingModule.ɵfac = function FabricRatingModule_Factory(t) { return new (t || FabricRatingModule)(); };
    FabricRatingModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricRatingModule });
    FabricRatingModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule,
                StarIconModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricRatingModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
                            StarIconModule
                        ],
                        declarations: [
                            FabricRatingComponent
                        ],
                        exports: [
                            FabricRatingComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricRatingModule, { declarations: [FabricRatingComponent], imports: [i1.CommonModule,
                StarIconModule], exports: [FabricRatingComponent] });
    })();

    var FabricModule = /** @class */ (function () {
        function FabricModule() {
        }
        return FabricModule;
    }());
    FabricModule.ɵfac = function FabricModule_Factory(t) { return new (t || FabricModule)(); };
    FabricModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FabricModule });
    FabricModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            FabricModalThemeService
        ], imports: [[
                i1.CommonModule,
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
            ], FabricBadgeModule,
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
            FabricInputModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FabricModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
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
                        ],
                        exports: [
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
                        ],
                        providers: [
                            FabricModalThemeService
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FabricModule, { imports: [i1.CommonModule,
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
                FabricInputModule], exports: [FabricBadgeModule,
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
                FabricInputModule] });
    })();

    var FabricNestedDialogComponent = /** @class */ (function () {
        function FabricNestedDialogComponent() {
        }
        return FabricNestedDialogComponent;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DropdownItemComponent = DropdownItemComponent;
    exports.FabricBadgeComponent = FabricBadgeComponent;
    exports.FabricBadgeModule = FabricBadgeModule;
    exports.FabricButtonComponent = FabricButtonComponent;
    exports.FabricButtonGroupComponent = FabricButtonGroupComponent;
    exports.FabricButtonGroupModule = FabricButtonGroupModule;
    exports.FabricButtonModule = FabricButtonModule;
    exports.FabricCardComponent = FabricCardComponent;
    exports.FabricCardModule = FabricCardModule;
    exports.FabricCheckboxComponent = FabricCheckboxComponent;
    exports.FabricCheckboxModule = FabricCheckboxModule;
    exports.FabricChipComponent = FabricChipComponent;
    exports.FabricChipModule = FabricChipModule;
    exports.FabricDatePickerCalendarComponent = FabricDatePickerCalendarComponent;
    exports.FabricDatePickerComponent = FabricDatePickerComponent;
    exports.FabricDatePickerModule = FabricDatePickerModule;
    exports.FabricDialogModule = FabricDialogModule;
    exports.FabricDialogService = FabricDialogService;
    exports.FabricDialogThemeService = FabricDialogThemeService;
    exports.FabricDrawerModule = FabricDrawerModule;
    exports.FabricDrawerService = FabricDrawerService;
    exports.FabricDropdownComponent = FabricDropdownComponent;
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
    exports.FabricNotificationService = FabricNotificationService;
    exports.FabricProgressBarComponent = FabricProgressBarComponent;
    exports.FabricProgressBarModule = FabricProgressBarModule;
    exports.FabricProgressSpinnerComponent = FabricProgressSpinnerComponent;
    exports.FabricProgressSpinnerModule = FabricProgressSpinnerModule;
    exports.FabricRadioButtonComponent = FabricRadioButtonComponent;
    exports.FabricRadioButtonModule = FabricRadioButtonModule;
    exports.FabricRadioGroupComponent = FabricRadioGroupComponent;
    exports.FabricRadioGroupModule = FabricRadioGroupModule;
    exports.FabricRatingComponent = FabricRatingComponent;
    exports.FabricRatingModule = FabricRatingModule;
    exports.FabricSelectComponent = FabricSelectComponent;
    exports.FabricSelectModule = FabricSelectModule;
    exports.FabricSliderComponent = FabricSliderComponent;
    exports.FabricSliderModule = FabricSliderModule;
    exports.FabricSpinnerComponent = FabricSpinnerComponent;
    exports.FabricSpinnerModule = FabricSpinnerModule;
    exports.FabricTabComponent = FabricTabComponent;
    exports.FabricTabModule = FabricTabModule;
    exports.FabricToggleButtonComponent = FabricToggleButtonComponent;
    exports.FabricToggleButtonGroupComponent = FabricToggleButtonGroupComponent;
    exports.FabricToggleButtonGroupModule = FabricToggleButtonGroupModule;
    exports.FabricToggleButtonModule = FabricToggleButtonModule;
    exports.FabricTooltipComponent = FabricTooltipComponent;
    exports.FabricTooltipDirective = FabricTooltipDirective;
    exports.FabricTooltipModule = FabricTooltipModule;
    exports.TabItemComponent = TabItemComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=generic-ui-fabric.umd.js.map
