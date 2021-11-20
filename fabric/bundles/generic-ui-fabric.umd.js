(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs/operators'), require('rxjs'), require('rxjs/')) :
    typeof define === 'function' && define.amd ? define('@generic-ui/fabric', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs/operators', 'rxjs', 'rxjs/'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["generic-ui"] = global["generic-ui"] || {}, global["generic-ui"].fabric = {}), global.ng.core, global.ng.common, global.ng.forms, global.rxjs.operators, global.rxjs, global.rxjs[""]));
})(this, (function (exports, core, common, forms, operators, rxjs, _) { 'use strict';

    exports.Theme = void 0;
    (function (Theme) {
        Theme["FABRIC"] = "FABRIC";
        Theme["MATERIAL"] = "MATERIAL";
        Theme["GENERIC"] = "GENERIC";
        Theme["LIGHT"] = "LIGHT";
        Theme["DARK"] = "DARK";
    })(exports.Theme || (exports.Theme = {}));

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
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
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
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
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
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
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    function __createBinding(o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
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
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
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
    Indicator.decorators = [
        { type: core.Directive }
    ];
    Indicator.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    Indicator.propDecorators = {
        primary: [{ type: core.Input }],
        secondary: [{ type: core.Input }],
        outline: [{ type: core.Input }]
    };

    var FabricBadgeComponent = /** @class */ (function (_super) {
        __extends(FabricBadgeComponent, _super);
        function FabricBadgeComponent(elementRef, renderer) {
            return _super.call(this, elementRef, renderer) || this;
        }
        return FabricBadgeComponent;
    }(Indicator));
    FabricBadgeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-badge',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-badge]': 'true'
                    },
                    styles: [".gui-badge{background:#e6e6e6;border-radius:4px;color:#595959;display:inline-block;font-family:Arial;font-size:12px;font-weight:bold;margin:0 0 0 2px;padding:4px 9.6px;position:relative;-ms-transform:translateX(-70%) translateY(-80%);transform:translate(-70%) translateY(-80%);z-index:1}.gui-badge.gui-primary{background:#2185d0;color:#fff}.gui-badge.gui-primary.gui-outline{color:#2185d0}.gui-badge.gui-primary:hover{background:#1e77ba}.gui-badge.gui-primary:active{background:#1a69a4;color:#fff}.gui-badge.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-badge.gui-primary.gui-badge{background:#439de1}.gui-badge.gui-secondary{background:#3cb371;color:#fff}.gui-badge.gui-secondary.gui-outline{color:#3cb371}.gui-badge.gui-secondary.gui-button:hover{background:#36a065}.gui-badge.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-badge.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-badge.gui-secondary.gui-badge{background:#5ac88b}.gui-badge.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-badge.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-badge.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-badge.gui-outline.gui-badge{background:#fff}.gui-badge.gui-outline.gui-primary{border-color:#439de1}.gui-badge.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-badge.gui-outline.gui-secondary{border-color:#5ac88b}.gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}\n", ".gui-material .gui-badge{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}.gui-material .gui-badge.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-badge.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-badge.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-badge.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-badge.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-badge.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-badge.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-badge.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-badge.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-badge.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-badge.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-badge.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-badge.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-badge.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-badge.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-badge.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-badge.gui-outline.gui-badge{background:#fff}.gui-material .gui-badge.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-badge.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}\n", ".gui-dark .gui-badge{background:#333;color:#bdbdbd}.gui-dark .gui-badge.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-badge.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-badge.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-badge.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-badge.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-badge.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-badge.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-badge.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-badge.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-badge.gui-outline.gui-badge{background:#121212}.gui-dark .gui-badge.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-badge.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-badge.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}\n"]
                },] }
    ];
    FabricBadgeComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };

    var FabricBadgeModule = /** @class */ (function () {
        function FabricBadgeModule() {
        }
        return FabricBadgeModule;
    }());
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
    FabricButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'button[gui-button], a[gui-button]',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-button]': 'true'
                    },
                    styles: [".gui-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-align:start;align-items:flex-start;background:#e6e6e6;border-radius:4px;border-style:none;box-sizing:border-box;color:#595959;cursor:pointer;display:inline-block;font-family:Arial;font-size:13.3333px;letter-spacing:normal;outline:none;padding:10px 20px;text-align:center;text-indent:0;text-rendering:auto;text-shadow:none;text-transform:none;transition:background .2s;word-spacing:normal;-ms-writing-mode:lr-tb!important;writing-mode:horizontal-tb!important}.gui-button.gui-outline:focus{box-shadow:0 0 0 2px #d6d6d6}.gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #439de1}.gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #5ac88b}.gui-button.gui-primary{background:#2185d0;color:#fff}.gui-button.gui-primary.gui-outline{color:#2185d0}.gui-button.gui-primary:hover{background:#1e77ba}.gui-button.gui-primary:active{background:#1a69a4;color:#fff}.gui-button.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-button.gui-primary.gui-badge{background:#439de1}.gui-button.gui-secondary{background:#3cb371;color:#fff}.gui-button.gui-secondary.gui-outline{color:#3cb371}.gui-button.gui-secondary.gui-button:hover{background:#36a065}.gui-button.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-button.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-button.gui-secondary.gui-badge{background:#5ac88b}.gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-button.gui-link:focus{text-decoration:underline}.gui-button.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-button.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-button.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-button.gui-outline.gui-badge{background:#fff}.gui-button.gui-outline.gui-primary{border-color:#439de1}.gui-button.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-button.gui-outline.gui-secondary{border-color:#5ac88b}.gui-button.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}.gui-button.gui-text{background:transparent;border:0}.gui-button.gui-text:hover{background:#e6e6e6}.gui-button.gui-text:focus{background:#e6e6e6}.gui-button.gui-text.gui-primary{color:#2185d0}.gui-button.gui-text.gui-primary:hover{background:#2185d0;color:#fff}.gui-button.gui-text.gui-primary:focus{background:#2185d0;color:#fff}.gui-button.gui-text.gui-secondary{color:#3cb371}.gui-button.gui-text.gui-secondary:hover{background:#3cb371;color:#fff}.gui-button.gui-text.gui-secondary:focus{background:#3cb371;color:#fff}.gui-button.gui-text.gui-button:disabled{background:transparent}.gui-button.gui-text.gui-button:disabled .gui-text-disabled{display:inline-block}.gui-button:hover{background:#cccccc;color:#333}.gui-button:active{background:#999;color:#333}.gui-button:disabled{color:#ccc;cursor:default;pointer-events:none}\n", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-button.gui-outline:focus{box-shadow:0 0 0 2px #616161}.gui-dark .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #ce93d8}.gui-dark .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #80cbc4}.gui-dark .gui-button.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-button.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-button.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-button.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-button.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-button.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-button.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-button.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-button.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-button.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-button.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-button.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-dark .gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-dark .gui-button.gui-link:focus{text-decoration:underline}.gui-dark .gui-button.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-button.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-button.gui-outline.gui-badge{background:#121212}.gui-dark .gui-button.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-button.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-button.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-button.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}.gui-dark .gui-button:hover{background:#616161}.gui-dark .gui-button:active{background:#212121}.gui-dark .gui-button:disabled{opacity:.36}\n", ".gui-light .gui-button{background:#f6f5f4;border-color:#d8d7d6;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light .gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-light .gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-light .gui-button.gui-link:focus{text-decoration:underline}.gui-light .gui-button:hover{background:#ecebeb}.gui-light .gui-button:active{background:#f6f5f4}.gui-light .gui-button:disabled{opacity:.5}\n", ".gui-material .gui-button{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-button.gui-outline:focus{box-shadow:0 0 0 1px #5262c5}.gui-material .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 1px #6200ee}.gui-material .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 1px #0097a7}.gui-material .gui-button.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-button.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-button.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-button.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-button.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-button.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-button.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-button.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-button.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-button.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-button.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-button.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-button.gui-link{background:transparent;border:0;color:#3949ab}.gui-material .gui-button.gui-link:hover{color:#4051bf}.gui-material .gui-button.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-button.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-button.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-button.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-button.gui-outline.gui-badge{background:#fff}.gui-material .gui-button.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-button.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}.gui-material .gui-button:hover{background:#5262c5}.gui-material .gui-button:active{background:#4051bf}.gui-material .gui-button:disabled{background:#c5cae9;color:#7885d2}\n"]
                },] }
    ];
    FabricButtonComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    FabricButtonComponent.propDecorators = {
        link: [{ type: core.Input }],
        text: [{ type: core.Input }]
    };

    var FabricButtonModule = /** @class */ (function () {
        function FabricButtonModule() {
        }
        return FabricButtonModule;
    }());
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

    var FabricButtonGroupComponent = /** @class */ (function () {
        function FabricButtonGroupComponent() {
        }
        return FabricButtonGroupComponent;
    }());
    FabricButtonGroupComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-button-group',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-button-group]': 'true'
                    },
                    styles: [".gui-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-button-group .gui-button{border-radius:0}.gui-button-group .gui-button:not(:last-child){border-right:none;margin:0}.gui-button-group .gui-button:last-child{border-radius:0 4px 4px 0}.gui-button-group .gui-button:first-child{border-radius:4px 0 0 4px}.gui-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}\n"]
                },] }
    ];

    var FabricButtonGroupModule = /** @class */ (function () {
        function FabricButtonGroupModule() {
        }
        return FabricButtonGroupModule;
    }());
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
    FabricCardComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-card',
                    template: "<div class=\"gui-card-body\">\n\n\t<div class=\"gui-card-image-wrapper\">\n\t\t<img [ngClass]=\"{'gui-card-img': isImgEnabled()}\"\n\t\t\t alt=\"{{alt}}\" src=\"{{image}}\"/>\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-title': isTitleEnabled()}\">\n\t\t{{title}}\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-content-block': isContentBlockEnabled()}\">\n\t\t<div\n\t\t\t*ngFor=\"let block of contentBlock\"\n\t\t\t[ngClass]=\"{'gui-card-content-block-item': isContentBlockEnabled()}\">\n\t\t\t{{block}}\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-card]': 'true'
                    },
                    styles: [".gui-card .gui-card-img{border-radius:4px 4px 0 0;height:auto;margin:0 0 12px;width:350px}.gui-card .gui-card-body{background:#fff;border-radius:4px;box-shadow:0 1px 3px #999;box-sizing:border-box;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;margin:0;padding:0 0 20px;transition:transform .3s ease-in-out;width:350px}.gui-card .gui-card-body:hover{box-shadow:0 3px 6px -4px rgba(0,0,0,.122),0 6px 16px rgba(0,0,0,.078),0 9px 28px 8px rgba(0,0,0,.051)}.gui-card .gui-card-body .gui-card-title{font-size:20px;font-weight:bold;margin:0 0 12px;padding:0 20px}.gui-card .gui-card-body .gui-card-content-block{margin:0 0 12px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#d6d6d6;border-top-style:solid;border-top-width:1px;padding:12px 20px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#d6d6d6;border-bottom-style:solid;border-bottom-width:1px}.gui-card .gui-card-body .gui-content{padding:0 20px}\n", ".gui-material .gui-card .gui-card-body{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-card .gui-card-body{background:#121212;border-color:#616161;color:#bdbdbd}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#616161}.gui-dark .gui-content-block .gui-card-content-block{border-color:#616161}\n"]
                },] }
    ];
    FabricCardComponent.propDecorators = {
        title: [{ type: core.Input }],
        image: [{ type: core.Input }],
        alt: [{ type: core.Input }],
        contentBlock: [{ type: core.Input }]
    };

    var FabricCardModule = /** @class */ (function () {
        function FabricCardModule() {
        }
        return FabricCardModule;
    }());
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
    FabricCheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-checkbox',
                    template: "<label>\n\t<input #input\n\t\t   (click)=\"check($event)\"\n\t\t   [checked]=\"checked\"\n\t\t   [disabled]=\"disabled\"\n\t\t   [name]=\"name\"\n\t\t   type=\"checkbox\">\n\t<span class=\"gui-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-checkbox]': 'true'
                    },
                    styles: [".gui-checkbox{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:24px;padding-left:32px;position:relative}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{height:0;opacity:0;position:absolute;width:0}.gui-checkbox .gui-checkmark{border-color:#575757;border-radius:4px;border-style:solid;border-width:2px;box-sizing:content-box;height:20px;left:0;position:absolute;width:20px}.gui-checkbox input:checked+.gui-checkmark{border-color:#575757}.gui-checkbox.gui-disabled.gui-checkbox{color:#ccc;pointer-events:none}.gui-checkbox.gui-readonly.gui-checkbox{pointer-events:none}.gui-checkbox .gui-checkmark:after{content:\" \";display:none;left:6px;position:absolute;-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-checkbox input:checked+.gui-checkmark:after{box-sizing:content-box;display:block}.gui-checkbox .gui-checkmark:after{border-color:#575757;border-style:solid;border-width:0 3.2px 3.2px 0;height:12px;width:5.2px}.gui-checkbox input:indeterminate+.gui-checkmark:after{display:block;height:10px;left:9px;top:4px;-ms-transform:rotate(90deg);transform:rotate(90deg);width:0}\n", ".gui-material .gui-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox label:hover .gui-checkmark{border-color:#575757}.gui-material .gui-checkbox .gui-checkmark{border-color:#999}.gui-material .gui-checkbox input:checked+.gui-checkmark{background:#3949ab;border-color:#3949ab}.gui-material .gui-checkbox .gui-checkmark:after{border-color:#fff}.gui-material .gui-checkbox.gui-indeterminate .gui-checkmark{background:#3949ab;border-color:#3949ab}\n", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox .gui-checkmark:after{border-color:#878787}.gui-dark .gui-checkbox.gui-disabled.gui-checkbox{opacity:.36}\n"]
                },] }
    ];
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

    var FabricCheckboxModule = /** @class */ (function () {
        function FabricCheckboxModule() {
        }
        return FabricCheckboxModule;
    }());
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

    var FabricChipComponent = /** @class */ (function (_super) {
        __extends(FabricChipComponent, _super);
        function FabricChipComponent(elementRef, renderer) {
            return _super.call(this, elementRef, renderer) || this;
        }
        return FabricChipComponent;
    }(Indicator));
    FabricChipComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-chip',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-chip]': 'true'
                    },
                    styles: [".gui-chip{background:#e6e6e6;border-radius:4px;box-sizing:border-box;color:#595959;display:inline-block;font-family:Arial;font-size:14px;font-weight:bold;margin:0 2px;padding:9.6px 12px}.gui-chip.gui-primary{background:#2185d0;color:#fff}.gui-chip.gui-primary.gui-outline{color:#2185d0}.gui-chip.gui-primary:hover{background:#1e77ba}.gui-chip.gui-primary:active{background:#1a69a4;color:#fff}.gui-chip.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-chip.gui-primary.gui-badge{background:#439de1}.gui-chip.gui-secondary{background:#3cb371;color:#fff}.gui-chip.gui-secondary.gui-outline{color:#3cb371}.gui-chip.gui-secondary.gui-button:hover{background:#36a065}.gui-chip.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-chip.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-chip.gui-secondary.gui-badge{background:#5ac88b}.gui-chip.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-chip.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-chip.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-chip.gui-outline.gui-badge{background:#fff}.gui-chip.gui-outline.gui-primary{border-color:#439de1}.gui-chip.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-chip.gui-outline.gui-secondary{border-color:#5ac88b}.gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}\n", ".gui-material .gui-chip{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-chip.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-chip.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-chip.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-chip.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-chip.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-chip.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-chip.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-chip.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-chip.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-chip.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-chip.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-chip.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-chip.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-chip.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-chip.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-chip.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-chip.gui-outline.gui-badge{background:#fff}.gui-material .gui-chip.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-chip.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}\n", ".gui-dark .gui-chip{background:#333;color:#bdbdbd}.gui-dark .gui-chip.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-chip.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-chip.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-chip.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-chip.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-chip.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-chip.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-chip.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-chip.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-chip.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-chip.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-chip.gui-outline.gui-badge{background:#121212}.gui-dark .gui-chip.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-chip.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-chip.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}\n", ".gui-light .gui-chip{background:#f6f5f4;border-color:#333;border-style:solid;border-width:1px;color:#333}\n"]
                },] }
    ];
    FabricChipComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };

    var FabricChipModule = /** @class */ (function () {
        function FabricChipModule() {
        }
        return FabricChipModule;
    }());
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
    FabricDatePickerService.decorators = [
        { type: core.Injectable }
    ];

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
            var day = date.getDate(), maxWeekNumber = 6;
            for (var i = 0; i < maxWeekNumber; i++) {
                if (day === 1) {
                    this.addDaysToWeek(i, date);
                }
                else if (this.canAddDaysToWeek(i, day)) {
                    this.addDaysToWeek(i, this.getLastDayDate(this.weeks[i - 1]));
                }
            }
            this.weeks = [this.weeks[0], this.weeks[1], this.weeks[2], this.weeks[3], this.weeks[4], this.weeks[5]];
        };
        FabricDatePickerWeeks.prototype.addDaysToWeek = function (weekNumber, date) {
            var week = this.weeks[weekNumber];
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
        FabricDatePickerWeeks.prototype.canAddDaysToWeek = function (weekNumber, day) {
            return this.weeks[weekNumber].length === 0
                && this.weeks[weekNumber - 1].length === 7
                && day > this.getLastDayNumber(this.weeks[weekNumber - 1]);
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
    FabricDatePickerWeeks.decorators = [
        { type: core.Injectable }
    ];

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
    FabricDatePickerYears.decorators = [
        { type: core.Injectable }
    ];

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
    FabricReactive.decorators = [
        { type: core.Directive }
    ];
    FabricReactive.ctorParameters = function () { return []; };

    var FabricCalendarView;
    (function (FabricCalendarView) {
        FabricCalendarView[FabricCalendarView["DAYS"] = 0] = "DAYS";
        FabricCalendarView[FabricCalendarView["MONTHS"] = 1] = "MONTHS";
        FabricCalendarView[FabricCalendarView["YEARS"] = 2] = "YEARS";
    })(FabricCalendarView || (FabricCalendarView = {}));

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
    FabricDatePickerCalendarViewService.decorators = [
        { type: core.Injectable }
    ];

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
    FabricDatePickerCalendarService.decorators = [
        { type: core.Injectable }
    ];

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
    FabricDatePickerYearsService.decorators = [
        { type: core.Injectable }
    ];

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
    FabricDatePickerCompositionService.decorators = [
        { type: core.Injectable }
    ];

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
    FabricDatePickerCalendarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-date-picker-toggle',
                    template: "<ng-container *ngIf=\"isVisible(datePickerComposition, FabricDatePickerComposition.DATE_PICKER)\">\n\n\t<gui-date-picker-view-panel [activeMonth]=\"activeMonth\"\n\t\t\t\t\t\t\t\t[activeYear]=\"activeYear\"\n\t\t\t\t\t\t\t\t[fabricCalendarView]=\"fabricCalendarView\"\n\t\t\t\t\t\t\t\t[selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t[years]=\"years\">\n\t</gui-date-picker-view-panel>\n\n\t<ng-container [ngSwitch]=\"getCalendarView()\">\n\n\t\t<gui-date-picker-days-view *ngSwitchCase=\"FabricCalendarView.DAYS\"\n\t\t\t\t\t\t\t\t   [activeMonth]=\"activeMonth\"\n\t\t\t\t\t\t\t\t   [selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t   [weeks]=\"weeks\">\n\t\t</gui-date-picker-days-view>\n\n\t\t<gui-date-picker-months-view *ngSwitchCase=\"FabricCalendarView.MONTHS\"\n\t\t\t\t\t\t\t\t\t [activeYear]=\"activeYear\"\n\t\t\t\t\t\t\t\t\t [selectedDate]=\"selectedDate\">\n\t\t</gui-date-picker-months-view>\n\n\n\t\t<gui-date-picker-years-view *ngSwitchCase=\"FabricCalendarView.YEARS\"\n\t\t\t\t\t\t\t\t\t[selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t\t[years]=\"years\">\n\t\t</gui-date-picker-years-view>\n\n\t</ng-container>\n\n</ng-container>\n\n<gui-time-picker *ngIf=\"isVisible(datePickerComposition, FabricDatePickerComposition.TIME_PICKER)\"\n\t\t\t\t [datePickerComposition]=\"datePickerComposition\"\n\t\t\t\t [selectedDate]=\"selectedDate\"></gui-time-picker>\n",
                    host: {
                        '[class.gui-date-picker-calendar]': 'true'
                    },
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pb-12{padding-bottom:20px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-12{padding-top:20px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-date-picker-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;font-family:Roboto,\"Helvetica Neue\",sans-serif;border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 0 12px;width:268px}.gui-date-picker-header{font-size:13px;font-weight:normal;text-align:center;border-top:1px solid #999}.gui-date-picker-cell{border-radius:4px;border-color:transparent;border-style:solid;border-width:1px;padding:2px 4px;position:relative;text-align:center;font-size:13px;z-index:0}.gui-date-picker-cell:before{border:1px solid #999;border-radius:50%;box-sizing:border-box;content:\"\";display:none;height:36px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:36px;z-index:-1}.gui-date-picker-cell:after{background:transparent;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:32px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:32px;z-index:-1}.gui-date-picker-cell:hover:after{background:#e6e6e6}.gui-date-picker-day{color:#333;cursor:pointer;opacity:.2}.gui-date-picker-day.gui-date-picker-selected-month{opacity:1}.gui-date-picker-month,.gui-date-picker-year{cursor:pointer}.gui-date-picker-year{font-size:13px}.gui-date-picker-day.gui-date-picker-current-day:before,.gui-date-picker-month.gui-date-picker-current-month:before,.gui-date-picker-year.gui-date-picker-current-year:before{display:block}.gui-date-picker-day.gui-date-picker-selected-day{pointer-events:none}.gui-date-picker-day.gui-date-picker-selected-day,.gui-date-picker-month.gui-date-picker-selected-month,.gui-date-picker-year.gui-date-picker-selected-year{color:#fff}.gui-date-picker-day.gui-date-picker-selected-day:after,.gui-date-picker-month.gui-date-picker-selected-month:after,.gui-date-picker-year.gui-date-picker-selected-year:after{background:#2185d0}.gui-date-picker-arrows{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:32px}.gui-date-picker-view-padding{padding:0 8px}.gui-date-picker-view-border-top{border-top:1px solid #999}gui-time-picker{border-top:1px solid #999;margin:6px 0 0;padding:12px 0 2.6666666667px}gui-time-picker form{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}gui-time-picker.only-time-picker{border-top:none}.gui-time-picker-button-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-right:8px}.gui-time-picker-button-wrapper .gui-button{font-size:12px}.gui-time-picker-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 8px;position:relative}.gui-time-picker-item input{box-sizing:border-box;max-width:24px;text-align:center}.gui-time-picker-item input::-webkit-outer-spin-button,.gui-time-picker-item input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.gui-time-picker-item input[type=number]{-moz-appearance:textfield}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(1){margin-bottom:2px}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(2){margin-top:6px}.gui-date-picker-view-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:16px 18px}.gui-date-picker-view-panel .gui-date-picker-view-panel-date{cursor:pointer;font-size:14px;font-weight:bold;margin:0;pointer-events:auto}.gui-date-picker-arrow{position:relative;z-index:0}.gui-date-picker-arrow:hover:after{background:#e6e6e6;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:24px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:24px;z-index:-1}\n"]
                },] }
    ];
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

    exports.FabricPlacement = void 0;
    (function (FabricPlacement) {
        FabricPlacement[FabricPlacement["TOP"] = 1] = "TOP";
        FabricPlacement[FabricPlacement["BOTTOM"] = 2] = "BOTTOM";
        FabricPlacement[FabricPlacement["BEFORE"] = 3] = "BEFORE";
        FabricPlacement[FabricPlacement["AFTER"] = 4] = "AFTER";
    })(exports.FabricPlacement || (exports.FabricPlacement = {}));

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
            if (common.isPlatformBrowser(this.platformId)) {
                var inlineDialogCords = new InlineDialogCords(invokerElementRef, this.inlineDialogGeometry, window, placement, offset);
                this.inlineDialogState$.next(inlineDialogCords);
            }
        };
        return InlineDialogGeometryService;
    }());
    InlineDialogGeometryService.decorators = [
        { type: core.Injectable }
    ];
    InlineDialogGeometryService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
    ]; };

    var themeToken = new core.InjectionToken('Theme token');

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
    FabricModalThemeService.decorators = [
        { type: core.Injectable }
    ];

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
    FabricThemedComponent.decorators = [
        { type: core.Directive }
    ];
    FabricThemedComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: FabricModalThemeService }
    ]; };

    var FabricInlineDialogComponent = /** @class */ (function (_super) {
        __extends(FabricInlineDialogComponent, _super);
        function FabricInlineDialogComponent(componentFactoryResolver, changeDetectorRef, inlineDialogService, elRef, inlineDialogGeometryService, renderer, themeService, theme) {
            var _this = _super.call(this, elRef, renderer, themeService) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.changeDetectorRef = changeDetectorRef;
            _this.inlineDialogService = inlineDialogService;
            _this.elRef = elRef;
            _this.inlineDialogGeometryService = inlineDialogGeometryService;
            _this.width = '400px';
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
            var _this = this;
            _super.prototype.ngAfterViewInit.call(this);
            this.createNestedComponent(this.inlineDialogNestedComponent);
            this.inlineDialogGeometryService.changeGeometry(this.elRef);
            this.changeDetectorRef.detectChanges();
            rxjs.timer(0)
                .pipe(this.takeUntil())
                .subscribe(function () {
                _this.visible = true;
                _this.changeDetectorRef.detectChanges();
            });
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
    FabricInlineDialogComponent.decorators = [
        { type: core.Component, args: [{
                    template: "<div [ngClass]=\"customClass\"\n\t [style.left.px]=\"dialogLeftAttribute\"\n\t [style.top.px]=\"dialogTopAttribute\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t [class.gui-inline-dialog-visible]=\"visible\"\n\t\t [style.max-width]=\"width\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: [".gui-inline-dialog-wrapper{box-sizing:border-box;position:absolute;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 6px -4px rgba(0,0,0,.122),0 6px 16px rgba(0,0,0,.078),0 9px 28px 8px rgba(0,0,0,.051);box-sizing:border-box;display:block;z-index:1000;opacity:0;transition:opacity .2s ease-in-out}.gui-inline-dialog-wrapper .gui-inline-dialog-content.gui-inline-dialog-visible{opacity:1}\n", ".gui-dark .gui-inline-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"]
                },] }
    ];
    FabricInlineDialogComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ChangeDetectorRef },
        { type: FabricInlineDialogService, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return FabricInlineDialogService; }),] }] },
        { type: core.ElementRef },
        { type: InlineDialogGeometryService },
        { type: core.Renderer2 },
        { type: FabricModalThemeService },
        { type: exports.Theme, decorators: [{ type: core.Inject, args: [themeToken,] }] }
    ]; };
    FabricInlineDialogComponent.propDecorators = {
        container: [{ type: core.ViewChild, args: ['container', { read: core.ViewContainerRef, static: false },] }]
    };

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
    FabricInlineDialogService.decorators = [
        { type: core.Injectable }
    ];
    FabricInlineDialogService.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ApplicationRef },
        { type: core.Injector },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: InlineDialogGeometryService }
    ]; };

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
    FabricDatePickerInlineDialogService.decorators = [
        { type: core.Injectable }
    ];
    FabricDatePickerInlineDialogService.ctorParameters = function () { return [
        { type: FabricInlineDialogService }
    ]; };

    var FabricDateUtils = /** @class */ (function () {
        function FabricDateUtils() {
        }
        FabricDateUtils.areDatesSame = function (firstDay, secondDate) {
            return firstDay && secondDate &&
                firstDay.getDate() === secondDate.getDate() &&
                firstDay.getMonth() === secondDate.getMonth() &&
                firstDay.getFullYear() === secondDate.getFullYear();
        };
        FabricDateUtils.isMonth = function (date, month, year) {
            return date.getMonth() === month &&
                date.getFullYear() === year;
        };
        return FabricDateUtils;
    }());

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
                date: ['']
            });
            return _this;
        }
        FabricDatePickerComponent.prototype.ngOnChanges = function (changes) {
            if (changes.selectDate) {
                if (!FabricDateUtils.areDatesSame(this.selectDate, this.pickedDate)) {
                    this.datePickerService.dateSelected(this.selectDate);
                }
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
            // this.observeDayChanges();
        };
        FabricDatePickerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.datePickerService
                .observeSelectedDate()
                .pipe(operators.take(1), this.takeUntil())
                .subscribe(function (date) {
                _this.pickedDate = date;
                _this.emitSelectedDate(date);
                _this.changeDetectorRef.detectChanges();
            });
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
            // currently disabled
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
    FabricDatePickerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-date-picker',
                    template: "<div #datePicker\n\t class=\"gui-date-picker\">\n\n\t<form [formGroup]=\"datePickerForm\">\n\n\t\t<input [attr.disabled]=\"inputDisabled\"\n\t\t\t   [name]=name\n\t\t\t   [value]=\"pickedDate | date: datePipeOptions\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input\n\t\t\t   readonly>\n\t</form>\n\n\t<gui-date-picker-icon (click)=\"openDatePicker()\"\n\t\t\t\t\t\t  class=\"gui-date-picker-icon\">\n\t</gui-date-picker-icon>\n\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: [".gui-date-picker{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;position:relative}.gui-date-picker .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}.gui-date-picker input,.gui-date-picker-calendar input{background:transparent;border-radius:0;border-width:0 0 1px 0;font-family:Arial;font-size:14px;padding:4px}.gui-date-picker input:disabled,.gui-date-picker-calendar input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon,.gui-date-picker-calendar .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}\n", ".gui-dark .gui-input{background:transparent;color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-arrow-icon:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year{color:#333}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#dfb8e6}\n", ".gui-material .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-material .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-material .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#6200ee}\n"]
                },] }
    ];
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

    var FabricInlineDialogModule = /** @class */ (function () {
        function FabricInlineDialogModule() {
        }
        return FabricInlineDialogModule;
    }());
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

    var FabricInputComponent = /** @class */ (function () {
        function FabricInputComponent() {
        }
        return FabricInputComponent;
    }());
    FabricInputComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'input[gui-input]',
                    template: "\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-input]': 'true'
                    },
                    styles: [".gui-input{background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;color:#333;font:14px Arial;margin:0;max-width:100%;outline:0;padding:8px 12px;text-align:left;transition:border-color .3s ease-in-out}.gui-input:hover{border-color:#999}.gui-input:focus{border-color:#6fb4e8}.gui-input:disabled{color:#ccc;cursor:default;pointer-events:none}.gui-input:disabled::-moz-placeholder{color:#ccc}.gui-input:disabled:-ms-input-placeholder{color:#ccc}.gui-input:disabled::placeholder{color:#ccc}\n", ".gui-material .gui-input{border-color:#ccc;border-radius:0;border-style:solid;border-width:0 0 1px 0;font-family:Roboto,\"Helvetica Neue\",sans-serif;padding-left:0;transition:border-color .3s ease-in-out}.gui-material .gui-input:not(:-moz-placeholder-shown){border-color:#6200ee}.gui-material .gui-input:not(:-ms-input-placeholder){border-color:#6200ee}.gui-material .gui-input:not(:placeholder-shown){border-color:#6200ee}.gui-material .gui-input:focus{border-color:#6200ee}\n", ".gui-dark .gui-input{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-input:hover{border-color:#757575}.gui-dark .gui-input:focus{border-color:#ce93d8}.gui-dark .gui-input:disabled{opacity:.36}\n"]
                },] }
    ];

    var FabricInputModule = /** @class */ (function () {
        function FabricInputModule() {
        }
        return FabricInputModule;
    }());
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
    FabricDatePickerViewPanelComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-date-picker-view-panel',
                    template: "\n\t\t<div class=\"gui-date-picker-view-panel\">\n\n\t\t\t<div (click)=\"switchCalendarView()\"\n\t\t\t\t class=\"gui-date-picker-view-panel-date\">\n\t\t\t\t{{getDisplayedDate()}}\n\t\t\t</div>\n\n\t\t\t<div class=\"gui-date-picker-arrows\">\n\t\t\t\t<gui-arrow-icon [direction]=\"Direction.LEFT\"\n\t\t\t\t\t\t\t\t(click)=\"switchCard(FabricCalendarCardView.PREV)\"\n\t\t\t\t\t\t\t\tclass=\"gui-date-picker-arrow\">\n\t\t\t\t</gui-arrow-icon>\n\n\t\t\t\t<gui-arrow-icon [direction]=\"Direction.RIGHT\"\n\t\t\t\t\t\t\t\t(click)=\"switchCard(FabricCalendarCardView.NEXT)\"\n\t\t\t\t\t\t\t\tclass=\"gui-date-picker-arrow\">\n\t\t\t\t</gui-arrow-icon>\n\t\t\t</div>\n\n\t\t</div>\n\t",
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
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

    var FabricTimeValues = /** @class */ (function () {
        function FabricTimeValues(hours, minutes, seconds) {
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
        return FabricTimeValues;
    }());

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
    FabricTimePickerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-time-picker',
                    template: "<form [formGroup]=\"form\">\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"hours\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"minutes\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"seconds\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n</form>\n\n<div (click)=\"changeSelectedDateTime()\"\n\t class=\"gui-time-picker-button-wrapper\">\n\t<button [outline]=\"true\" gui-button>\n\t\tOk\n\t</button>\n</div>\n",
                    host: {
                        '[class.only-time-picker]': 'isOnlyTimePicker()'
                    },
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    FabricTimePickerComponent.ctorParameters = function () { return [
        { type: forms.FormBuilder },
        { type: FabricDatePickerService }
    ]; };
    FabricTimePickerComponent.propDecorators = {
        selectedDate: [{ type: core.Input }],
        datePickerComposition: [{ type: core.Input }]
    };

    var FabricArrowIconComponent = /** @class */ (function () {
        function FabricArrowIconComponent() {
            this.direction = Direction.RIGHT;
        }
        return FabricArrowIconComponent;
    }());
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
                    styles: [".gui-arrow-icon{cursor:pointer}.gui-arrow-icon svg path{stroke:#aaa;transition:stroke .2s ease-in-out}.gui-arrow-icon:hover svg path{stroke:#464646}\n"]
                },] }
    ];
    FabricArrowIconComponent.propDecorators = {
        direction: [{ type: core.Input }]
    };

    var FabricArrowIconModule = /** @class */ (function () {
        function FabricArrowIconModule() {
        }
        return FabricArrowIconModule;
    }());
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

    var DatePickerIconComponent = /** @class */ (function () {
        function DatePickerIconComponent() {
        }
        return DatePickerIconComponent;
    }());
    DatePickerIconComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-date-picker-icon',
                    template: "<svg height=\"9.82\" viewBox=\"0 0 8.76 9.82\" width=\"8.76\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path\n\t\td=\"M401.41,308.63l-.46.15h-.15a.34.34,0,0,1-.08-.67l.68-.22a1.539,1.539,0,0,1,.38-.07h0a.39.39,0,0,1,.39.39V312a.38.38,0,0,1-.39.39.39.39,0,0,1-.39-.39Z\"\n\t\tfill=\"#8c8b8b\" transform=\"translate(-397.19 -304.36)\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(0.64 9.32)\" x1=\"7.39\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(0.64 2.16)\" x1=\"7.39\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(0.5 0.5)\" y2=\"8.82\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(3.09 0.5)\" y2=\"1.66\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(5.68 0.5)\" y2=\"1.66\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(8.26 0.5)\" y2=\"8.82\"/>\n</svg>\n",
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-date-picker-icon]': 'true'
                    },
                    styles: [".gui-date-picker-icon svg{height:16px;width:16px}.gui-date-picker-icon svg line,.gui-date-picker-icon svg path{transition:all .3s ease-in-out}.gui-date-picker-icon svg line{stroke:#aaa}.gui-date-picker-icon svg path{fill:#aaa}.gui-date-picker-icon svg:hover line{stroke:#464646}.gui-date-picker-icon svg:hover path{fill:#464646}\n", ".gui-dark .gui-date-picker-icon svg line{stroke:#bdbdbd}.gui-dark .gui-date-picker-icon svg path{fill:#bdbdbd}.gui-dark .gui-date-picker-icon svg:hover line{stroke:#616161}.gui-dark .gui-date-picker-icon svg:hover path{fill:#616161}\n"]
                },] }
    ];

    var DatePickerIconModule = /** @class */ (function () {
        function DatePickerIconModule() {
        }
        return DatePickerIconModule;
    }());
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

    var monthsPerQuarters = [
        [{ nr: 0, name: 'Jan' }, { nr: 1, name: 'Feb' }, { nr: 2, name: 'Mar' }],
        [{ nr: 3, name: 'Apr' }, { nr: 4, name: 'May' }, { nr: 5, name: 'Jun' }],
        [{ nr: 6, name: 'Jul' }, { nr: 7, name: 'Aug' }, { nr: 8, name: 'Sep' }],
        [{ nr: 9, name: 'Oct' }, { nr: 10, name: 'Nov' }, { nr: 11, name: 'Dec' }]
    ];

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
    FabricDatePickerMonthsViewComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-date-picker-months-view',
                    template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let quarter of monthsPerQuarters\"\n\t\t class=\"gui-display-grid gui-grid-cols-3\">\n\t\t<div (click)=\"selectMonth(month.nr)\"\n\t\t\t *ngFor=\"let month of quarter\"\n\t\t\t [class.gui-date-picker-current-month]=\"isMonth(currentDay, month.nr)\"\n\t\t\t [class.gui-date-picker-selected-month]=\"isMonth(selectedDate, month.nr)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-month\">\n\t\t\t{{month.name}}\n\t\t</div>\n\t</div>\n</div>\n",
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    FabricDatePickerMonthsViewComponent.ctorParameters = function () { return [
        { type: FabricDatePickerCalendarService },
        { type: FabricDatePickerCalendarViewService }
    ]; };
    FabricDatePickerMonthsViewComponent.propDecorators = {
        selectedDate: [{ type: core.Input }],
        activeYear: [{ type: core.Input }]
    };

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
    FabricDatePickerYearsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-date-picker-years-view',
                    template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let yearsChunk of years\"\n\t\t class=\"gui-display-grid gui-grid-cols-5\">\n\t\t<div (click)=\"selectYear(year)\"\n\t\t\t *ngFor=\"let year of yearsChunk\"\n\t\t\t [class.gui-date-picker-current-year]=\"isYear(currentDay, year)\"\n\t\t\t [class.gui-date-picker-selected-year]=\"isYear(selectedDate, year)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-year\">\n\t\t\t{{year}}\n\t\t</div>\n\t</div>\n</div>\n",
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    FabricDatePickerYearsComponent.ctorParameters = function () { return [
        { type: FabricDatePickerCalendarService },
        { type: FabricDatePickerCalendarViewService }
    ]; };
    FabricDatePickerYearsComponent.propDecorators = {
        selectedDate: [{ type: core.Input }],
        years: [{ type: core.Input }]
    };

    var daysOfTheWeek = [
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa',
        'Su'
    ];

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
    FabricDatePickerDaysViewComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-date-picker-days-view',
                    template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6\">\n\n\t<div class=\"gui-display-grid gui-grid-cols-7 gui-py-4 gui-date-picker-header\">\n\t\t<div *ngFor=\"let dayOfTheWeek of daysOfTheWeek\">{{dayOfTheWeek}}</div>\n\t</div>\n\n\t<div *ngFor=\"let week of weeks\"\n\t\t class=\"gui-display-grid gui-grid-cols-7\">\n\n\t\t<div (click)=\"selectDate(day)\"\n\t\t\t *ngFor=\"let day of week\"\n\t\t\t [class.gui-date-picker-current-day]=\"isDate(currentDay, day)\"\n\t\t\t [class.gui-date-picker-selected-day]=\"isDate(selectedDate, day)\"\n\t\t\t [class.gui-date-picker-selected-month]=\"displayMonthDays(day.getMonth())\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-day\">\n\t\t\t{{day.getDate()}}\n\t\t</div>\n\n\t</div>\n</div>\n",
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    FabricDatePickerDaysViewComponent.ctorParameters = function () { return [
        { type: FabricDatePickerService }
    ]; };
    FabricDatePickerDaysViewComponent.propDecorators = {
        selectedDate: [{ type: core.Input }],
        activeMonth: [{ type: core.Input }],
        weeks: [{ type: core.Input }]
    };

    var FabricDatePickerModule = /** @class */ (function () {
        function FabricDatePickerModule() {
        }
        return FabricDatePickerModule;
    }());
    FabricDatePickerModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        FabricInlineDialogModule,
                        forms.ReactiveFormsModule,
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
                },] }
    ];

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
        FabricModal.prototype.createAndAppend = function (config) {
            var componentInjector = (config === null || config === void 0 ? void 0 : config.injector) ? config.injector : this.injector;
            this.componentRef = this.componentFactoryResolver
                .resolveComponentFactory(this.getComponent())
                .create(componentInjector);
            this.applicationRef.attachView(this.componentRef.hostView);
            var domModalElement = this.componentRef.hostView
                .rootNodes[0];
            this.getElement(config === null || config === void 0 ? void 0 : config.appendToElement).appendChild(domModalElement);
            if (config === null || config === void 0 ? void 0 : config.afterCompCreation) {
                config === null || config === void 0 ? void 0 : config.afterCompCreation();
            }
            this.componentRef.changeDetectorRef.detectChanges();
        };
        FabricModal.prototype.removeComponent = function () {
            if (this.componentRef) {
                this.applicationRef.detachView(this.componentRef.hostView);
                this.componentRef.destroy();
                this.componentRef = null;
                this.unsubscribe();
            }
        };
        FabricModal.prototype.getComponentRef = function () {
            return this.componentRef;
        };
        FabricModal.prototype.getComponentInstance = function () {
            return this.getComponentRef().instance;
        };
        FabricModal.prototype.getInjector = function () {
            return this.injector;
        };
        FabricModal.prototype.getDocument = function () {
            return this.document;
        };
        FabricModal.prototype.onCloseOnEsc = function () {
            var close$ = _.fromEvent(this.getDocument(), 'keyup');
            return close$
                .pipe(operators.filter(function (key) { return key.code === 'Escape'; }), this.takeUntil());
        };
        FabricModal.prototype.getElement = function (el) {
            return el ? el.nativeElement : this.document.body;
        };
        return FabricModal;
    }(FabricReactive));
    FabricModal.decorators = [
        { type: core.Directive }
    ];
    FabricModal.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ApplicationRef },
        { type: core.Injector },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
    ]; };

    var FabricDrawerService = /** @class */ (function (_super) {
        __extends(FabricDrawerService, _super);
        function FabricDrawerService(componentFactoryResolver, applicationRef, injector, document) {
            var _this = _super.call(this, componentFactoryResolver, applicationRef, injector, document) || this;
            /** To prevent multiple timers **/
            _this.inProgress = false;
            return _this;
        }
        FabricDrawerService.prototype.getComponent = function () {
            return FabricDrawerComponent;
        };
        FabricDrawerService.prototype.open = function (config) {
            if (event) {
                event.stopPropagation();
            }
            if (this.getComponentRef() && (config === null || config === void 0 ? void 0 : config.preventReopeningDrawer)) {
                return;
            }
            if (this.getComponentRef() && !this.inProgress && !(config === null || config === void 0 ? void 0 : config.preventReopeningDrawer)) {
                this.waitAndCreateNewDrawer(config);
            }
            else {
                this.createDrawer(config);
            }
        };
        FabricDrawerService.prototype.close = function () {
            var _this = this;
            if (this.getComponentRef()) {
                this.getComponentInstance().visible = false;
                this.getComponentInstance().detectChanges();
                rxjs.timer(300)
                    .pipe(this.takeUntil())
                    .subscribe(function () {
                    _this.removeComponent();
                    _this.inProgress = false;
                });
            }
        };
        FabricDrawerService.prototype.createDrawer = function (config) {
            var _this = this;
            if (this.getComponentRef()) {
                this.removeComponent();
            }
            var theme = exports.Theme.FABRIC, parentInjector = this.getInjector();
            if (config && config.theme) {
                theme = config.theme;
            }
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            var injector = core.Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.createAndAppend({
                injector: injector,
                afterCompCreation: function () { return _this.applyInstanceVars(config); },
                appendToElement: config === null || config === void 0 ? void 0 : config.appendToElement
            });
            this.closeOnEscKey();
        };
        FabricDrawerService.prototype.waitAndCreateNewDrawer = function (config) {
            var _this = this;
            this.inProgress = true;
            this.close();
            rxjs.timer(400)
                .pipe(this.takeUntil())
                .subscribe(function () {
                _this.createDrawer(config);
            });
        };
        FabricDrawerService.prototype.applyInstanceVars = function (config) {
            this.getComponentInstance().width = config === null || config === void 0 ? void 0 : config.width;
            this.getComponentInstance().dialogNestedComponent = config === null || config === void 0 ? void 0 : config.component;
            this.getComponentInstance().closeOnClickOutside = config === null || config === void 0 ? void 0 : config.closeOnClickOutside;
            this.getComponentInstance().isFixed = !(config === null || config === void 0 ? void 0 : config.appendToElement);
        };
        FabricDrawerService.prototype.closeOnEscKey = function () {
            var _this = this;
            this.onCloseOnEsc()
                .subscribe(function () { return _this.close(); });
        };
        return FabricDrawerService;
    }(FabricModal));
    FabricDrawerService.decorators = [
        { type: core.Injectable }
    ];
    FabricDrawerService.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ApplicationRef },
        { type: core.Injector },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
    ]; };

    var FabricDrawerComponent = /** @class */ (function (_super) {
        __extends(FabricDrawerComponent, _super);
        function FabricDrawerComponent(componentFactoryResolver, changeDetectorRef, elRef, dialogService, themeModalService, renderer) {
            var _this = _super.call(this, elRef, renderer, themeModalService) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.changeDetectorRef = changeDetectorRef;
            _this.elRef = elRef;
            _this.dialogService = dialogService;
            _this.width = '400px';
            _this.closeOnClickOutside = false;
            _this.visible = false;
            _this.isFixed = false;
            return _this;
        }
        FabricDrawerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            _super.prototype.ngAfterViewInit.call(this);
            this.createNestedComponent();
            rxjs.timer(50)
                .pipe(this.takeUntil())
                .subscribe(function () {
                _this.visible = true;
                _this.changeDetectorRef.detectChanges();
            });
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
        FabricDrawerComponent.prototype.detectChanges = function () {
            this.changeDetectorRef.detectChanges();
        };
        FabricDrawerComponent.prototype.isContainerClicked = function (event) {
            var dialogContentRef = this.elRef.nativeElement.querySelector('.gui-drawer-content');
            if (dialogContentRef) {
                return !dialogContentRef.contains(event.target);
            }
            return false;
        };
        FabricDrawerComponent.prototype.createNestedComponent = function () {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dialogNestedComponent);
            this.container.createComponent(componentFactory);
            this.changeDetectorRef.detectChanges();
        };
        return FabricDrawerComponent;
    }(FabricThemedComponent));
    FabricDrawerComponent.decorators = [
        { type: core.Component, args: [{
                    template: "<div (document:click)=\"clickOutside($event)\"\n\t [class.gui-drawer-visible]=\"visible\"\n\t [class.gui-drawer-fixed]=\"isFixed\"\n\t [style.max-width]=\"width\"\n\t class=\"gui-drawer-wrapper\">\n\t<div\n\t\t class=\"gui-drawer-content\">\n\t\t<gui-close-icon (click)=\"closeDrawer()\"></gui-close-icon>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;height:100%;width:auto;position:absolute;padding-left:50px;right:0;top:0;overflow:hidden;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;height:100%;position:relative;margin-left:auto;-ms-transform:translateX(100%);transform:translate(100%);transition:all .3s ease-in-out}.gui-drawer-wrapper.gui-drawer-visible .gui-drawer-content{-ms-transform:translateX(0);transform:translate(0);box-shadow:-6px 0 16px -8px rgba(0,0,0,.078),-9px 0 28px rgba(0,0,0,.051),-12px 0 48px 16px rgba(0,0,0,.031)}.gui-drawer-wrapper.gui-drawer-fixed{position:fixed;height:100vh}\n", ".gui-dark .gui-drawer-wrapper .gui-drawer-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"]
                },] }
    ];
    FabricDrawerComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef },
        { type: FabricDrawerService },
        { type: FabricModalThemeService },
        { type: core.Renderer2 }
    ]; };
    FabricDrawerComponent.propDecorators = {
        container: [{ type: core.ViewChild, args: ['container', { read: core.ViewContainerRef, static: false },] }]
    };

    var selector = 'gui-close-icon';
    var FabricCloseIconComponent = /** @class */ (function () {
        function FabricCloseIconComponent() {
        }
        return FabricCloseIconComponent;
    }());
    FabricCloseIconComponent.decorators = [
        { type: core.Component, args: [{
                    selector: selector,
                    template: "\n\t\t<span class=\"gui-close-icon\"></span>\n\t",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-close-icon-wrapper]': 'true'
                    },
                    styles: [".gui-close-icon-wrapper .gui-close-icon{cursor:pointer;height:16px;position:absolute;right:8px;top:8px;width:16px}.gui-close-icon-wrapper .gui-close-icon:before,.gui-close-icon-wrapper .gui-close-icon:after{background-color:#aaa;content:\" \";height:16px;left:7px;position:absolute;width:2px}.gui-close-icon-wrapper .gui-close-icon:before{-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-close-icon-wrapper .gui-close-icon:after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.gui-close-icon-wrapper .gui-close-icon:hover:before,.gui-close-icon-wrapper .gui-close-icon:hover:after{background-color:#464646}\n"]
                },] }
    ];

    var FabricCloseIconModule = /** @class */ (function () {
        function FabricCloseIconModule() {
        }
        return FabricCloseIconModule;
    }());
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

    var FabricDrawerModule = /** @class */ (function () {
        function FabricDrawerModule() {
        }
        return FabricDrawerModule;
    }());
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
    GeometryService.decorators = [
        { type: core.Injectable }
    ];

    exports.Placement = void 0;
    (function (Placement) {
        Placement[Placement["Right"] = 0] = "Right";
        Placement[Placement["Left"] = 1] = "Left";
    })(exports.Placement || (exports.Placement = {}));

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
            if (common.isPlatformBrowser(this.platformId)) {
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
    FabricDropdownComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-dropdown',
                    template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t (mouseenter)=\"tryToOpenOnHover()\"\n\t (mouseleave)=\"hideOnHover()\"\n\t [class.gui-arrow-left]=\"isDirectionLeft()\"\n\t [class.gui-disabled]=\"disabled\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-dropdown-container\">\n\n\t<div class=\"gui-dropdown-text\">{{dropdownText}}</div>\n\n\t<div *ngIf=\"isArrowEnabled\"\n\t\t [class.gui-dropdown-arrow]=\"isArrowEnabled\">\n\t\t<gui-arrow-icon [direction]=\"arrowDirection\"></gui-arrow-icon>\n\t</div>\n\n\t<div #dropdownMenu\n\t\t [style.bottom.px]=\"topPosition\"\n\t\t [style.left.px]=\"horizontalPosition\"\n\t\t [style.top.px]=\"bottomPosition\"\n\t\t class=\"gui-dropdown-menu\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-dropdown]': 'true'
                    },
                    providers: [
                        GeometryService
                    ],
                    styles: [".gui-dropdown .gui-dropdown-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 12px;position:relative;width:auto}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container:hover .gui-arrow-icon svg path{stroke:#464646}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{cursor:pointer;position:absolute;right:12px;top:8px}.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{background:inherit;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;display:none;left:-1px;overflow:hidden;position:absolute;width:inherit;z-index:2}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{list-style-type:none;padding:8px 12px;width:inherit}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#cccccc}.gui-dropdown .gui-dropdown-container.gui-arrow-left{padding:8px 12px 8px 32px}.gui-dropdown .gui-dropdown-container.gui-arrow-left .gui-dropdown-arrow{left:12px;right:auto;right:initial}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}\n", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow svg path{stroke:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#616161}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}\n"]
                },] }
    ];
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

    var DropdownItemComponent = /** @class */ (function () {
        function DropdownItemComponent() {
        }
        return DropdownItemComponent;
    }());
    DropdownItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-dropdown-item',
                    template: "<div class=\"gui-item\">\n\t<ng-content></ng-content>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                },] }
    ];

    var FabricDropdownModule = /** @class */ (function () {
        function FabricDropdownModule() {
        }
        return FabricDropdownModule;
    }());
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

    var FabricDialogService = /** @class */ (function (_super) {
        __extends(FabricDialogService, _super);
        function FabricDialogService(componentFactoryResolver, applicationRef, injector, document) {
            return _super.call(this, componentFactoryResolver, applicationRef, injector, document) || this;
        }
        FabricDialogService.prototype.getComponent = function () {
            return FabricDialogComponent;
        };
        FabricDialogService.prototype.open = function (config) {
            var _this = this;
            if (this.getComponentRef()) {
                return;
            }
            var theme = exports.Theme.FABRIC, parentInjector = this.getInjector();
            if (config && config.theme) {
                theme = config.theme;
            }
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            var injector = core.Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.createAndAppend({
                afterCompCreation: function () { return _this.afterComponentCreation(config); },
                injector: injector
            });
            this.closeOnEscKey();
        };
        FabricDialogService.prototype.close = function () {
            var _this = this;
            if (this.getComponentRef()) {
                this.getComponentInstance().visible = false;
                this.getComponentInstance().detectChanges();
                rxjs.timer(400)
                    .pipe(this.takeUntil())
                    .subscribe(function () {
                    _this.removeComponent();
                });
            }
        };
        FabricDialogService.prototype.closeOnEscKey = function () {
            var _this = this;
            this.onCloseOnEsc()
                .subscribe(function () { return _this.close(); });
        };
        FabricDialogService.prototype.afterComponentCreation = function (config) {
            this.getComponentInstance().dialogNestedComponent = config.component;
            this.getComponentInstance().width = config === null || config === void 0 ? void 0 : config.width;
            this.getComponentInstance().height = config === null || config === void 0 ? void 0 : config.height;
            this.getComponentInstance().setTransformOrigin(event);
        };
        return FabricDialogService;
    }(FabricModal));
    FabricDialogService.decorators = [
        { type: core.Injectable }
    ];
    FabricDialogService.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ApplicationRef },
        { type: core.Injector },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
    ]; };

    var FabricDialogComponent = /** @class */ (function (_super) {
        __extends(FabricDialogComponent, _super);
        function FabricDialogComponent(componentFactoryResolver, changeDetectorRef, elRef, platformId, themeModalService, renderer, dialogService) {
            var _this = _super.call(this, elRef, renderer, themeModalService) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.changeDetectorRef = changeDetectorRef;
            _this.elRef = elRef;
            _this.platformId = platformId;
            _this.dialogService = dialogService;
            _this.width = '400px';
            _this.height = '90vh';
            return _this;
        }
        FabricDialogComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            _super.prototype.ngAfterViewInit.call(this);
            this.createNestedComponent();
            rxjs.timer(0)
                .pipe(this.takeUntil())
                .subscribe(function () {
                _this.visible = true;
                _this.detectChanges();
            });
        };
        FabricDialogComponent.prototype.detectChanges = function () {
            this.changeDetectorRef.detectChanges();
        };
        FabricDialogComponent.prototype.closeDialog = function () {
            this.dialogService.close();
        };
        FabricDialogComponent.prototype.clickOutside = function (event) {
            if (this.isContainerClicked(event)) {
                this.dialogService.close();
            }
        };
        FabricDialogComponent.prototype.setTransformOrigin = function (event) {
            if (common.isPlatformBrowser(this.platformId) && event) {
                var x = (event.clientX - (window.innerWidth / 2)), y = (event.clientY - (window.innerHeight / 2));
                this.triggerPosition = x + "px " + y + "px";
            }
        };
        FabricDialogComponent.prototype.isContainerClicked = function (event) {
            var dialogContentRef = this.elRef.nativeElement.querySelector('.gui-dialog-content');
            if (dialogContentRef) {
                return !dialogContentRef.contains(event.target);
            }
            return false;
        };
        FabricDialogComponent.prototype.createNestedComponent = function () {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dialogNestedComponent);
            this.container.createComponent(componentFactory);
            this.detectChanges();
        };
        return FabricDialogComponent;
    }(FabricThemedComponent));
    FabricDialogComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-fabric-dialog',
                    template: "<div class=\"gui-dialog-blanket\"></div>\n<div (click)=\"clickOutside($event)\"\n\t class=\"gui-dialog-wrapper\">\n\t<div [class.gui-dialog-visible]=\"visible\"\n\t\t [style.transform-origin]=\"triggerPosition\"\n\t\t [style.max-width]=\"width\"\n\t\t [style.max-height]=\"height\"\n\t\t class=\"gui-dialog-content\">\n\t\t<ng-template #container></ng-template>\n\t\t<gui-close-icon (click)=\"closeDialog()\"></gui-close-icon>\n\t</div>\n</div>\n",
                    host: {
                        '[class.gui-fabric-dialog]': 'true'
                    },
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pb-12{padding-bottom:20px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-12{padding-top:20px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-fabric-dialog *,.gui-fabric-dialog *:after,.gui-fabric-dialog *:before{box-sizing:border-box}.gui-fabric-dialog input{font-size:13px;outline:0}.gui-dialog-blanket{background:rgba(0,0,0,.32);height:100%;left:0;pointer-events:none;position:fixed;top:0;width:100%;z-index:1000}.gui-dialog-wrapper{font-family:Arial;height:100%;width:100%;position:fixed;pointer-events:auto;left:0;top:0;z-index:1000}.gui-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 7px #999;padding:24px;position:fixed;left:50%;top:50%;transform:scale3d(0,0,0) translate(-50%) translateY(-50%);opacity:0;transition:all .4s;overflow:auto;z-index:1000}.gui-dialog-content.gui-dialog-visible{transform:scale(1) translate(-50%) translateY(-50%);opacity:1}\n", ".gui-dark .gui-dialog-wrapper .gui-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before,.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after{background:#bdbdbd}\n"]
                },] }
    ];
    FabricDialogComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef },
        { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
        { type: FabricModalThemeService },
        { type: core.Renderer2 },
        { type: FabricDialogService, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return FabricDialogService; }),] }] }
    ]; };
    FabricDialogComponent.propDecorators = {
        container: [{ type: core.ViewChild, args: ['container', { read: core.ViewContainerRef, static: false },] }]
    };

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
    FabricDialogThemeService.decorators = [
        { type: core.Injectable }
    ];

    var FabricDialogModule = /** @class */ (function () {
        function FabricDialogModule() {
        }
        return FabricDialogModule;
    }());
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
    FabricProgressBarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-progress-bar',
                    template: "<div\n\t[style.height.px]=\"height\"\n\t[style.text-align]=\"textAlign\"\n\t[style.width.px]=\"width\"\n\tclass=\"gui-progress-bar\">\n\t<div\n\t\t[style.background]=\"color\"\n\t\t[style.width.%]=\"progress\"\n\t\tclass=\"gui-progress\">\n\t\t<span\n\t\t\t[style.top]=\"textTop\"\n\t\t\tclass=\"gui-progress-text\">\n\t\t\t<ng-content></ng-content>\n\t\t</span>\n\t</div>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-progress]': 'true'
                    },
                    styles: [".gui-progress-bar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-color:#d6d6d6;border-style:solid;border-width:1px;display:block;font-family:Arial;height:18px;margin-bottom:10px;text-align:center}.gui-progress-bar .gui-progress{background:#999;border-bottom:inherit;height:inherit;width:0}.gui-primary .gui-progress-bar .gui-progress.gui-progress{background:#2185d0}.gui-secondary .gui-progress-bar .gui-progress.gui-progress{background:#3cb371}.gui-progress-bar .gui-progress-text{position:relative}\n", ".gui-material .gui-progress-bar{border-color:#5262c5;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-progress{background:#3949ab}.gui-material .gui-progress.gui-primary .gui-progress{background:#6200ee}.gui-material .gui-progress.gui-primary .gui-progress-bar{border-color:#6200ee}.gui-material .gui-progress.gui-secondary .gui-progress{background:#0097a7}.gui-material .gui-progress.gui-secondary .gui-progress-bar{border-color:#0097a7}\n", ".gui-dark .gui-progress-bar{border-color:#616161;color:#bdbdbd}.gui-dark .gui-progress{background:#424242}.gui-dark .gui-progress.gui-primary .gui-progress{background:#ce93d8}.gui-dark .gui-progress.gui-primary .gui-progress-bar{border-color:#ce93d8;color:#212121}.gui-dark .gui-progress.gui-secondary .gui-progress{background:#80cbc4}.gui-dark .gui-progress.gui-secondary .gui-progress-bar{border-color:#80cbc4;color:#212121}\n"]
                },] }
    ];
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

    var FabricProgressBarModule = /** @class */ (function () {
        function FabricProgressBarModule() {
        }
        return FabricProgressBarModule;
    }());
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
    AbstractSpinner.decorators = [
        { type: core.Directive }
    ];
    AbstractSpinner.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    AbstractSpinner.propDecorators = {
        width: [{ type: core.Input }],
        diameter: [{ type: core.Input }],
        primary: [{ type: core.Input }],
        secondary: [{ type: core.Input }]
    };

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
    FabricProgressSpinnerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-progress-spinner',
                    template: "<div\n\t[style.height.px]=\"circleSize\"\n\t[style.width.px]=\"circleSize\"\n\tclass=\"gui-progress-spinner\">\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"circumference\"\n\t\t\t[style.stroke-dashoffset]=\"valuePercentage\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: [".gui-progress-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-progress-spinner circle{fill:transparent;stroke:#999}.gui-progress-spinner svg{position:absolute}.gui-progress-spinner .circle-inner{animation:gui-spin-reverse 2s infinite linear forwards reverse}.gui-progress-spinner .circle-outer{-webkit-animation:gui-spin 2s infinite linear forwards;animation:gui-spin 2s infinite linear forwards}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner .circle-outer{-webkit-animation:none;animation:none}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner.gui-progress-spinner{-webkit-animation:none;animation:none}.gui-second-circle-disabled .gui-progress-spinner.gui-progress-spinner .circle-inner{opacity:0}.gui-primary .gui-progress-spinner.gui-progress-spinner circle{stroke:#2185d0}.gui-secondary .gui-progress-spinner.gui-progress-spinner circle{stroke:#3cb371}\n", ".gui-material .gui-progress-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-progress-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-progress-spinner circle{stroke:#0097a7}\n", ".gui-dark .gui-progress-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-progress-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-progress-spinner circle{stroke:#80cbc4}\n"]
                },] }
    ];
    FabricProgressSpinnerComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    FabricProgressSpinnerComponent.propDecorators = {
        value: [{ type: core.Input }],
        mode: [{ type: core.Input }],
        color: [{ type: core.Input }]
    };

    var FabricProgressSpinnerModule = /** @class */ (function () {
        function FabricProgressSpinnerModule() {
        }
        return FabricProgressSpinnerModule;
    }());
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

    var FabricRadioButtonComponent = /** @class */ (function () {
        function FabricRadioButtonComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.checked = false;
            this.changed = new core.EventEmitter();
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
    FabricRadioButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-radio-button',
                    template: "<label>\n\t<input\n\t\t(click)=\"check()\"\n\t\t[checked]=checked\n\t\t[disabled]=disabled\n\t\t[name]=name\n\t\ttype=\"radio\">\n\t<span class=\"gui-radio-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-radio-button]': 'true'
                    },
                    styles: [".gui-radio-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;font:14px Arial;line-height:18px;padding-left:32px;position:relative}.gui-radio-button label{cursor:pointer}.gui-radio-button label:hover .gui-radio-checkmark{border-color:#999}.gui-radio-button input{height:0;opacity:0;position:absolute;width:0}.gui-radio-button .gui-radio-checkmark{border-color:#d6d6d6;border-radius:50%;border-style:solid;border-width:1px;box-sizing:content-box;height:16px;left:0;position:absolute;width:16px}.gui-radio-button input:checked+.gui-radio-checkmark{border-color:#999}.gui-radio-button input:focus+.gui-radio-checkmark{border-color:#6fb4e8}.gui-radio-button.gui-disabled.gui-radio-button{color:#ccc;pointer-events:none}.gui-radio-button .gui-radio-checkmark:after{content:\"\";display:none;position:absolute}.gui-radio-button input:checked+.gui-radio-checkmark:after{box-sizing:content-box;display:block}.gui-radio-button .gui-radio-checkmark:after{background:#333;border-radius:50%;height:16px;-ms-transform:scale(.5);transform:scale(.5);width:16px}\n", ".gui-material .gui-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-radio-button{color:#bdbdbd}.gui-dark .gui-radio-button .gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:checked+.gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:focus+.gui-radio-checkmark{border-color:#ce93d8}.gui-dark .gui-radio-button .gui-radio-checkmark:after{background:#878787}.gui-dark .gui-radio-button.gui-disabled.gui-radio-button{opacity:.36}\n"]
                },] }
    ];
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

    var FabricRadioButtonModule = /** @class */ (function () {
        function FabricRadioButtonModule() {
        }
        return FabricRadioButtonModule;
    }());
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

    var FabricRadioGroupComponent = /** @class */ (function () {
        function FabricRadioGroupComponent() {
        }
        return FabricRadioGroupComponent;
    }());
    FabricRadioGroupComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-radio-group',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-radio-group]': 'true'
                    },
                    styles: [".gui-radio-group .gui-radio-button{display:block;margin-bottom:10px}\n"]
                },] }
    ];

    var FabricRadioGroupModule = /** @class */ (function () {
        function FabricRadioGroupModule() {
        }
        return FabricRadioGroupModule;
    }());
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

    exports.FabricNotificationPosition = void 0;
    (function (FabricNotificationPosition) {
        FabricNotificationPosition[FabricNotificationPosition["TOP_RIGHT"] = 0] = "TOP_RIGHT";
        FabricNotificationPosition[FabricNotificationPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
        FabricNotificationPosition[FabricNotificationPosition["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
        FabricNotificationPosition[FabricNotificationPosition["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    })(exports.FabricNotificationPosition || (exports.FabricNotificationPosition = {}));

    var FabricNotificationComponent = /** @class */ (function () {
        function FabricNotificationComponent(renderer) {
            this.renderer = renderer;
            this.onNotificationClose = new core.EventEmitter();
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
    FabricNotificationComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-notification',
                    template: "\n\t\t<div #guiNotification\n\t\t\t [class.gui-notification-right-side]=\"isRightSide()\"\n\t\t\t [class.gui-notification-left-side]=\"!isRightSide()\"\n\t\t\t class=\"gui-notification\">\n\t\t\t<gui-close-icon (click)=\"closeNotification()\"></gui-close-icon>\n\t\t\t{{notification.description}}\n\t\t</div>\n\t",
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    FabricNotificationComponent.ctorParameters = function () { return [
        { type: core.Renderer2 }
    ]; };
    FabricNotificationComponent.propDecorators = {
        notificationRef: [{ type: core.ViewChild, args: ['guiNotification', { static: false },] }],
        notification: [{ type: core.Input }],
        onNotificationClose: [{ type: core.Output }]
    };

    var FabricNotification = /** @class */ (function () {
        function FabricNotification(description, index, timer, position) {
            this.description = description;
            this.index = index;
            this.timer = timer;
            this.position = position;
        }
        return FabricNotification;
    }());

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
                var injector = core.Injector.create({
                    providers: [{
                            provide: themeToken,
                            useValue: theme
                        }],
                    parent: parentInjector
                });
                this.createAndAppend({ injector: injector });
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
    FabricNotificationService.decorators = [
        { type: core.Injectable }
    ];
    FabricNotificationService.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ApplicationRef },
        { type: core.Injector },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
    ]; };

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
    FabricNotificationsOverlayComponent.decorators = [
        { type: core.Component, args: [{
                    template: "<gui-notifications-container (onNotificationClose)=\"removeNotification($event)\"\n\t\t\t\t\t\t\t *ngIf=\"isContainerNotEmpty(notificationsTopRight)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsTopRight\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.TOP_RIGHT\"></gui-notifications-container>\n\n<gui-notifications-container (onNotificationClose)=\"removeNotification($event)\"\n\t\t\t\t\t\t\t *ngIf=\"isContainerNotEmpty(notificationsTopLeft)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsTopLeft\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.TOP_LEFT\"></gui-notifications-container>\n\n<gui-notifications-container (onNotificationClose)=\"removeNotification($event)\"\n\t\t\t\t\t\t\t *ngIf=\"isContainerNotEmpty(notificationsBottomRight)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsBottomRight\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.BOTTOM_RIGHT\"></gui-notifications-container>\n\n<gui-notifications-container (onNotificationClose)=\"removeNotification($event)\"\n\t\t\t\t\t\t\t *ngIf=\"isContainerNotEmpty(notificationsBottomLeft)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsBottomLeft\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.BOTTOM_LEFT\"></gui-notifications-container>\n",
                    host: {
                        '[class.gui-notifications-overlay]': 'true'
                    },
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: [".gui-notifications-overlay{-ms-flex-align:center;align-items:center;font-family:Arial;-ms-flex-pack:center;justify-content:center;max-width:400px;position:fixed;z-index:1000}.gui-notifications-overlay gui-notifications-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:fixed}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-left{left:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-right{right:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-left{bottom:0;left:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-right{bottom:0;right:0}.gui-notifications-overlay .gui-notification{background:#fff;box-shadow:0 3px 6px -4px rgba(0,0,0,.122),0 6px 16px rgba(0,0,0,.078),0 9px 28px 8px rgba(0,0,0,.051);display:block;margin:16px;padding:32px;position:relative}.gui-notifications-overlay .gui-notification.gui-notification-right-side{-webkit-animation:loadNotificationRightSide .1s forwards;animation:loadNotificationRightSide .1s forwards}.gui-notifications-overlay .gui-notification.gui-notification-left-side{-webkit-animation:loadNotificationLeftSide .1s forwards;animation:loadNotificationLeftSide .1s forwards}@-webkit-keyframes loadNotificationRightSide{0%{transform:translate(50%)}to{transform:translate(0)}}@keyframes loadNotificationRightSide{0%{transform:translate(50%)}to{transform:translate(0)}}@-webkit-keyframes loadNotificationLeftSide{0%{transform:translate(-50%)}to{transform:translate(0)}}@keyframes loadNotificationLeftSide{0%{transform:translate(-50%)}to{transform:translate(0)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-right-side{-webkit-animation:closeNotificationRightSide .2s forwards;animation:closeNotificationRightSide .2s forwards}@-webkit-keyframes closeNotificationRightSide{0%{transform:translate(0)}to{transform:translate(100%)}}@keyframes closeNotificationRightSide{0%{transform:translate(0)}to{transform:translate(100%)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-left-side{-webkit-animation:closeNotificationLeftSide .2s forwards;animation:closeNotificationLeftSide .2s forwards}@-webkit-keyframes closeNotificationLeftSide{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes closeNotificationLeftSide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n", ".gui-dark .gui-notification{background:#424242}\n", ".gui-material .gui-notification{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}\n"]
                },] }
    ];
    FabricNotificationsOverlayComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.ComponentFactoryResolver },
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: FabricModalThemeService },
        { type: exports.Theme, decorators: [{ type: core.Inject, args: [themeToken,] }] },
        { type: FabricNotificationService, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return FabricNotificationService; }),] }] }
    ]; };

    var FabricNotificationsContainerComponent = /** @class */ (function () {
        function FabricNotificationsContainerComponent() {
            this.onNotificationClose = new core.EventEmitter();
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
                },] }
    ];
    FabricNotificationsContainerComponent.propDecorators = {
        notifications: [{ type: core.Input }],
        position: [{ type: core.Input }],
        onNotificationClose: [{ type: core.Output }]
    };

    var FabricNotificationModule = /** @class */ (function () {
        function FabricNotificationModule() {
        }
        return FabricNotificationModule;
    }());
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

    var FabricMessageService = /** @class */ (function (_super) {
        __extends(FabricMessageService, _super);
        function FabricMessageService(componentFactoryResolver, applicationRef, injector, document) {
            return _super.call(this, componentFactoryResolver, applicationRef, injector, document) || this;
        }
        FabricMessageService.prototype.getComponent = function () {
            return FabricMessageComponent;
        };
        FabricMessageService.prototype.open = function (text) {
            var _this = this;
            this.createAndAppend({
                afterCompCreation: function () { return _this.afterCompCreation(text); }
            });
        };
        FabricMessageService.prototype.close = function () {
            this.removeComponent();
        };
        FabricMessageService.prototype.afterCompCreation = function (text) {
            this.getComponentRef().instance.text = text;
            this.getComponentRef().instance.detectChanges();
        };
        return FabricMessageService;
    }(FabricModal));
    FabricMessageService.decorators = [
        { type: core.Injectable }
    ];
    FabricMessageService.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ApplicationRef },
        { type: core.Injector },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
    ]; };

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
    FabricMessageComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-message',
                    template: "\n\t\t<div class=\" gui-message\">\n\t\t\t{{text}}\n\t\t\t<button (click)=\"close()\">X</button>\n\t\t</div>\n\t",
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".gui-message{left:50%;position:fixed;top:50%}\n"]
                },] }
    ];
    FabricMessageComponent.ctorParameters = function () { return [
        { type: FabricMessageService },
        { type: core.ChangeDetectorRef }
    ]; };

    var FabricMessageModule = /** @class */ (function () {
        function FabricMessageModule() {
        }
        return FabricMessageModule;
    }());
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
            if (common.isPlatformBrowser(this.platformId)) {
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
    FabricTabComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-tab',
                    template: "<div #tab>\n\n\t<div class=\"gui-tab-menu\">\n\n\t\t<div (click)=\"scrollTabList(false)\"\n\t\t\t *ngIf=\"scrollActive\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon [direction]=\"Direction.LEFT\"></gui-arrow-icon>\n\t\t</div>\n\n\t\t<div class=\"gui-tab-menu-list\">\n\t\t\t<div #tabMenuList\n\t\t\t\t (click)=\"toggleTab(tab)\"\n\t\t\t\t *ngFor=\"let tab of menu\"\n\t\t\t\t [attr.data-tab]=\"getTabName(tab)\"\n\t\t\t\t class=\"gui-tab-menu-item\">\n\t\t\t\t<span *ngIf=\"!isSvg(tab)\">{{tab}}</span>\n\t\t\t\t<ng-container *ngIf=\"isSvg(tab)\">\n\t\t\t\t\t<gui-svg-template [svg]=\"tab.svg\"></gui-svg-template>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div (click)=\"scrollTabList(true)\"\n\t\t\t *ngIf=\"scrollActive\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon></gui-arrow-icon>\n\t\t</div>\n\n\t</div>\n\n\t<div #tabItem\n\t\t class=\"gui-tab-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-tab]': 'true'
                    },
                    styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fff;border-color:#d6d6d6;border-radius:0 0 4px 4px;border-style:solid;border-width:1px;padding:12px}.gui-tab .gui-tab-menu{display:-ms-flexbox;display:flex;margin-bottom:-1px}.gui-tab .gui-tab-menu .gui-tab-menu-list{border-radius:4px 4px 0 0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden}.gui-tab .gui-tab-menu .gui-tab-menu-item{background:#fafafa;border-color:#d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;box-sizing:border-box;cursor:pointer;display:inline-block;height:34px;margin-right:2px;padding:8px 16px;position:relative;text-align:center;white-space:nowrap}.gui-tab .gui-tab-menu .gui-tab-menu-item:nth-last-child(1){margin-right:0}.gui-tab .gui-tab-menu .gui-tab-menu-item svg{height:16px;width:16px}.gui-tab .gui-tab-menu .gui-tab-menu-item svg path{fill:#aaa}.gui-tab .gui-tab-menu .scroll-button{background:transparent;box-sizing:border-box;color:#ccc;cursor:pointer;font-weight:bold;height:34px;padding:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-menu .scroll-button:hover svg path{stroke:#464646}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fff;border-color:#d6d6d6 #d6d6d6 #fff #d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;color:#2185d0}.gui-tab .gui-active.gui-tab-menu-item svg path{fill:#2185d0}.gui-tab .gui-active.gui-tab-item{display:block}\n", ".gui-material .gui-tab{font:14px Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{background:#616161;border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent #616161;color:#ce93d8}\n"]
                },] }
    ];
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

    var TabItemComponent = /** @class */ (function () {
        function TabItemComponent() {
        }
        return TabItemComponent;
    }());
    TabItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-tab-item',
                    template: "<div [attr.data-tab]=\"tab\"\n\t class=\"gui-tab-item\">\n\t<ng-content></ng-content>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                },] }
    ];
    TabItemComponent.propDecorators = {
        tab: [{ type: core.Input }]
    };

    var FabricSvgTemplate = /** @class */ (function () {
        function FabricSvgTemplate() {
        }
        // todo sanitize
        FabricSvgTemplate.prototype.ngAfterViewInit = function () {
            this.svgRef.nativeElement.innerHTML = this.svg;
        };
        return FabricSvgTemplate;
    }());
    FabricSvgTemplate.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-svg-template',
                    template: "\n\t\t<div #svgEl></div>\n\t",
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    FabricSvgTemplate.propDecorators = {
        svgRef: [{ type: core.ViewChild, args: ['svgEl', { static: false },] }],
        svg: [{ type: core.Input }]
    };

    var FabricSvgTemplateModule = /** @class */ (function () {
        function FabricSvgTemplateModule() {
        }
        return FabricSvgTemplateModule;
    }());
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

    var FabricTabModule = /** @class */ (function () {
        function FabricTabModule() {
        }
        return FabricTabModule;
    }());
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

    var FabricTooltipComponent = /** @class */ (function () {
        function FabricTooltipComponent(elementRef) {
            this.elementRef = elementRef;
        }
        FabricTooltipComponent.prototype.correctPosition = function () {
            this.top -= this.elementRef.nativeElement.offsetHeight;
        };
        return FabricTooltipComponent;
    }());
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
                    styles: [".gui-tooltip{background:rgba(0,0,0,.8);border-radius:4px;border-style:solid;border-width:0;box-sizing:border-box;color:#fff;display:block;font:14px Arial;font-weight:normal;padding:8px 12px;position:absolute;-ms-transform:translateX(-50%);transform:translate(-50%);vertical-align:middle;z-index:10}.gui-tooltip:after{border-color:#333 transparent transparent transparent;border-style:solid;border-width:5px;content:\"\";left:50%;margin-left:-5px;position:absolute;top:100%}\n"]
                },] }
    ];
    FabricTooltipComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };

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
        return FabricTooltipDirective;
    }(FabricReactive));
    FabricTooltipDirective.tooltipOffset = 8;
    FabricTooltipDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[gui-tooltip]',
                    exportAs: 'guiTooltip'
                },] }
    ];
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

    var FabricTooltipModule = /** @class */ (function () {
        function FabricTooltipModule() {
        }
        return FabricTooltipModule;
    }());
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
            if (common.isPlatformBrowser(this.platformId)) {
                var selectOptionsCords = new SelectOptionsCords(element, this.selectContainerGeometry, window);
                this.selectOptionsCords$.next(selectOptionsCords);
            }
        };
        return SelectOptionsGeometryService;
    }());
    SelectOptionsGeometryService.decorators = [
        { type: core.Injectable }
    ];
    SelectOptionsGeometryService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
    ]; };

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
    FabricSelectedOptionsRepository.decorators = [
        { type: core.Injectable }
    ];

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
    FabricSelectOptionsComponent.decorators = [
        { type: core.Component, args: [{
                    template: "\n\t\t<div #optionList\n\t\t\t [class.gui-upward]=\"canOpenUpward\"\n\t\t\t [class.gui-downward]=\"!canOpenUpward\"\n\t\t\t [style.left.px]=\"optionsContainerLeftAttribute\"\n\t\t\t [style.top.px]=\"optionsContainerTopAttribute\"\n\t\t\t class=\"gui-options-list\">\n\n\t\t\t<div *ngFor=\"let option of options\"\n\t\t\t\t [class.gui-option-selected]=\"isOptionSelected(option)\"\n\t\t\t\t [style.width.px]=\"width\"\n\t\t\t\t (click)=\"selectOption(option)\"\n\t\t\t\t class=\"gui-option\">\n\t\t\t\t{{getOptionValue(option)}}\n\t\t\t</div>\n\t\t</div>\n\t",
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
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
            var _this = this;
            this.createAndAppend({
                afterCompCreation: function () { return _this.afterCompCreation(options, width); }
            });
        };
        SelectOptionModalService.prototype.closeOptions = function () {
            this.removeComponent();
        };
        SelectOptionModalService.prototype.afterCompCreation = function (options, width) {
            this.getComponentRef().instance.options = options;
            this.getComponentRef().instance.width = width;
            this.getComponentRef().instance.detectChanges();
            this.selectOptionsGeometryService.setGeometry(this.getComponentRef().instance.getElementRef());
            this.getComponentRef().instance.detectChanges();
        };
        return SelectOptionModalService;
    }(FabricModal));
    SelectOptionModalService.decorators = [
        { type: core.Injectable }
    ];
    SelectOptionModalService.ctorParameters = function () { return [
        { type: SelectOptionsGeometryService },
        { type: core.ComponentFactoryResolver },
        { type: core.ApplicationRef },
        { type: core.Injector },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
    ]; };

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
            if (common.isPlatformBrowser(this.platformId)) {
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
                    styles: [".gui-select .gui-select-container{min-height:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:content-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent transparent;height:0;margin:8px;position:absolute;right:5px;top:5px;width:0}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8 #6fb4e8 transparent #6fb4e8;border-radius:4px 4px 0 0;border-width:1px}.gui-select.gui-downward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-downward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:1px 0 0 0}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959 transparent;bottom:5px;left:5px;top:auto}.gui-select.gui-upward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-upward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:0 0 1px 0;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#cccccc transparent transparent transparent}.gui-select .initAnimationDisabled.gui-options-list{display:none}.gui-options-list{background:#fff;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px;overflow:hidden;padding:0;position:absolute;z-index:1000}.gui-options-list .gui-option{box-sizing:content-box;cursor:pointer;font-size:14px;list-style-type:none;padding:8px 24px 8px 12px}.gui-options-list .gui-option:hover{background:#dcdcdc}.gui-options-list .gui-option-selected{background:#e6e6e6;font-weight:bold}.gui-options-list.gui-upward{-webkit-animation:loadUpward .2s forwards;animation:loadUpward .2s forwards;border-bottom:none;border-color:#6fb4e8;border-radius:4px 4px 0 0;border-style:solid;border-width:1px}@-webkit-keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}.gui-options-list.gui-downward{-webkit-animation:loadDownward .2s forwards;animation:loadDownward .2s forwards;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px}@-webkit-keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}\n", ".gui-material .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-options-list .gui-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent transparent}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8 transparent}.gui-dark .gui-select .gui-disabled{opacity:.36}.gui-dark .gui-options-list{border-color:#ce93d8}.gui-dark .gui-options-list .gui-option{background:#424242;border-color:#757575;color:#bdbdbd}.gui-dark .gui-options-list .gui-option:hover{background:#616161}.gui-dark .gui-options-list .gui-option-selected{background:#757575}\n", ".gui-light .gui-select .gui-select-container{background:#fff;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light .gui-options-list .gui-option:hover{background:#f6f6f5}\n"]
                },] }
    ];
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

    var FabricSelectModule = /** @class */ (function () {
        function FabricSelectModule() {
        }
        return FabricSelectModule;
    }());
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

    var FabricSliderComponent = /** @class */ (function () {
        function FabricSliderComponent() {
            this.changed = new core.EventEmitter();
        }
        FabricSliderComponent.prototype.toggle = function (event) {
            event.stopPropagation();
            this.toggled = !this.toggled;
            this.changed.emit(this.toggled);
        };
        return FabricSliderComponent;
    }());
    FabricSliderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-slider',
                    template: "<div (click)=\"toggle($event)\"\n\t class=\"gui-slider\">\n\t<span [class.is-toggled]=\"toggled\"\n\t\t  class=\"gui-slider-indicator\"></span>\n</div>\n",
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".gui-slider{background:#cccccc;border-radius:4px;cursor:pointer;display:block;height:12px;position:relative;width:32px}.gui-slider .gui-slider-indicator{background:#2185d0;border-radius:50%;box-sizing:border-box;height:16px;overflow:hidden;position:absolute;top:-2px;-ms-transform:translateX(-5.3333333333px);transform:translate(-5.3333333333px);transition:all .2s ease-in-out;width:16px}.gui-slider .gui-slider-indicator.is-toggled{-ms-transform:translateX(calc(100% + 16px / 3));transform:translate(calc(100% + 16px / 3))}\n", ".gui-dark .gui-slider{background:#424242}.gui-dark .gui-slider .gui-slider-indicator{background:#ce93d8}\n", ".gui-material .gui-slider .gui-slider-indicator{background:#6200ee}\n"]
                },] }
    ];
    FabricSliderComponent.propDecorators = {
        toggled: [{ type: core.Input }],
        changed: [{ type: core.Output }]
    };

    var FabricSliderModule = /** @class */ (function () {
        function FabricSliderModule() {
        }
        return FabricSliderModule;
    }());
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
    FabricSpinnerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-spinner',
                    template: "<div\n\t[style.height.px]=\"circleSize\"\n\t[style.width.px]=\"circleSize\"\n\tclass=\"gui-spinner\">\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
                    host: {
                        '[class.gui-spinner]': 'true'
                    },
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: ["@-webkit-keyframes gui-spin{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@keyframes gui-spin{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@-webkit-keyframes gui-spin-reverse{0%{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}@keyframes gui-spin-reverse{0%{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}.gui-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-spinner circle{fill:transparent;stroke:#999}.gui-spinner svg{position:absolute}.gui-spinner .circle-inner{animation:gui-spin-reverse 2s infinite linear forwards reverse}.gui-spinner .circle-outer{-webkit-animation:gui-spin 2s infinite linear forwards;animation:gui-spin 2s infinite linear forwards}.gui-primary .gui-spinner.gui-spinner circle{stroke:#2185d0}.gui-secondary .gui-spinner.gui-spinner circle{stroke:#3cb371}\n", ".gui-material .gui-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-spinner circle{stroke:#0097a7}\n", ".gui-dark .gui-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-spinner circle{stroke:#80cbc4}\n"]
                },] }
    ];
    FabricSpinnerComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    FabricSpinnerComponent.propDecorators = {
        color: [{ type: core.Input }]
    };

    var FabricSpinnerModule = /** @class */ (function () {
        function FabricSpinnerModule() {
        }
        return FabricSpinnerModule;
    }());
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
    ToggleButtonGroupService.decorators = [
        { type: core.Injectable }
    ];

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
    FabricToggleButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-button-toggle',
                    template: "<button (click)=\"tryToToggle($event)\"\n\t\t[disabled]=\"disabled\"\n\t\t[outline]=\"outline\"\n\t\t[primary]=\"primary\"\n\t\t[secondary]=\"secondary\"\n\t\tgui-button>\n\t<ng-content></ng-content>\n</button>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-button-toggle]': 'true'
                    },
                    styles: [".gui-checked .gui-button{background:#e6e6e6;box-shadow:inset 0 10px 0 -5px #999;color:#333}.gui-checked .gui-button:hover{background:#cccccc}.gui-checked .gui-button:active{background:#999}.gui-checked .gui-button.gui-outline{background:transparent;box-shadow:0 0 0 2px #d6d6d6}.gui-checked .gui-button.gui-outline.gui-primary{background:transparent;box-shadow:0 0 0 2px #439de1;color:#2185d0}.gui-checked .gui-button.gui-outline.gui-primary:hover{color:#fff}.gui-checked .gui-button.gui-outline.gui-secondary{background:transparent;box-shadow:0 0 0 2px #5ac88b;color:#3cb371}.gui-checked .gui-button.gui-outline.gui-secondary:hover{color:#fff}.gui-checked .gui-button.gui-primary{background:#2185d0;box-shadow:inset 0 10px 0 -5px #175b8e;color:#fff}.gui-checked .gui-button.gui-secondary{background:#3cb371;box-shadow:inset 0 10px 0 -5px #2b8152;color:#fff}.gui-disabled{pointer-events:none}\n", ".gui-material .gui-button{background:#3949ab;color:#fff}.gui-material .gui-checked .gui-button{background:#3949ab;box-shadow:inset 0 10px 0 -5px #7885d2;color:#fff}.gui-material .gui-checked .gui-button:hover{background:#5262c5}.gui-material .gui-checked .gui-button:active{background:#4051bf}.gui-material .gui-checked .gui-button.gui-outline{background:#c5cae9;box-shadow:0 0 0 1px #5262c5;color:#3949ab}.gui-material .gui-checked .gui-button.gui-outline.gui-primary{background:#d1c4e9;box-shadow:0 0 0 1px #6200ee;color:#6200ee}.gui-material .gui-checked .gui-button.gui-outline.gui-secondary{background:#b2ebf2;box-shadow:0 0 0 1px #0097a7;color:#0097a7}.gui-material .gui-checked .gui-button.gui-primary{background:#6200ee;box-shadow:inset 0 10px 0 -5px #d1c4e9;color:#fff}.gui-material .gui-checked .gui-button.gui-secondary{background:#0097a7;box-shadow:inset 0 10px 0 -5px #b2ebf2;color:#fff}\n", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-checked .gui-button{color:#bdbdbd}.gui-dark .gui-checked .gui-button:hover{background:#616161}.gui-dark .gui-checked .gui-button:active{background:#212121}.gui-dark .gui-checked .gui-button.gui-outline{background:#2e2e2e;box-shadow:0 0 0 1px #616161;color:#bdbdbd}.gui-dark .gui-checked .gui-button.gui-outline.gui-primary{background:#b55bc4;box-shadow:0 0 0 1px #ce93d8;color:#212121}.gui-dark .gui-checked .gui-button.gui-outline.gui-secondary{background:#26a69a;box-shadow:0 0 0 1px #80cbc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-primary{background:#ce93d8;box-shadow:inset 0 10px 0 -5px #b55bc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-secondary{background:#80cbc4;box-shadow:inset 0 10px 0 -5px #26a69a;color:#212121}\n"]
                },] }
    ];
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

    var FabricToggleButtonModule = /** @class */ (function () {
        function FabricToggleButtonModule() {
        }
        return FabricToggleButtonModule;
    }());
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

    var FabricToggleButtonGroupComponent = /** @class */ (function () {
        function FabricToggleButtonGroupComponent() {
        }
        return FabricToggleButtonGroupComponent;
    }());
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
                    styles: [".gui-toggle-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-toggle-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-toggle-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-toggle-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-toggle-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}\n"]
                },] }
    ];

    var FabricToggleButtonGroupModule = /** @class */ (function () {
        function FabricToggleButtonGroupModule() {
        }
        return FabricToggleButtonGroupModule;
    }());
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

    var FabricRatingComponent = /** @class */ (function () {
        function FabricRatingComponent() {
            this.rating = 3;
            this.onRatingChange = new core.EventEmitter();
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
    FabricRatingComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-rating',
                    template: "<div class=\"gui-rating-container\">\n\t<gui-star-icon (click)=\"changeRating(star)\"\n\t\t\t\t   (mouseenter)=\"changePreviewRating(star)\"\n\t\t\t\t   (mouseleave)=\"changePreviewRating(0)\"\n\t\t\t\t   *ngFor=\"let star of stars\"\n\t\t\t\t   [class.star-icon-gray]=\"isRating(star, rating)\"\n\t\t\t\t   [class.star-icon-hover]=\"isRating(previewRating, star)\">\n\t</gui-star-icon>\n</div>\n",
                    host: {
                        '[class.gui-rating]': 'true'
                    },
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".gui-rating .gui-star-icon{cursor:pointer;padding-right:8px}.gui-rating .gui-star-icon svg{height:24px;width:24px}.gui-rating .gui-star-icon svg path{transition:fill .3s ease-in-out}.gui-rating .gui-rating-container{display:-ms-flexbox;display:flex}.gui-rating .gui-rating-container .star-icon-gray svg path{fill:#dedede}.gui-rating .gui-rating-container .star-icon-hover svg path{fill:#fc0}\n"]
                },] }
    ];
    FabricRatingComponent.propDecorators = {
        starsLength: [{ type: core.Input }],
        rating: [{ type: core.Input }],
        onRatingChange: [{ type: core.Output }]
    };

    var StarIconComponent = /** @class */ (function () {
        function StarIconComponent() {
        }
        return StarIconComponent;
    }());
    StarIconComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gui-star-icon',
                    template: "\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34.542\" height=\"32.852\" viewBox=\"0 0 34.542 32.852\">\n\t\t\t<path data-name=\"Path 572\"\n\t\t\t\t  d=\"M-121.168-469.432l5.337,10.814,11.934,1.734-8.636,8.418,2.039,11.886-10.674-5.612-10.674,5.612,2.039-11.886-8.636-8.418,11.934-1.734Z\"\n\t\t\t\t  transform=\"translate(138.44 469.432)\" fill=\"#ffe623\" fill-rule=\"evenodd\"/>\n\t\t</svg>\n\t",
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.gui-star-icon]': 'true'
                    }
                },] }
    ];

    var StarIconModule = /** @class */ (function () {
        function StarIconModule() {
        }
        return StarIconModule;
    }());
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

    var FabricRatingModule = /** @class */ (function () {
        function FabricRatingModule() {
        }
        return FabricRatingModule;
    }());
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

    var FabricModule = /** @class */ (function () {
        function FabricModule() {
        }
        return FabricModule;
    }());
    FabricModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
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
                },] }
    ];

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
    exports["ɵa"] = Indicator;
    exports["ɵb"] = FabricInlineDialogComponent;
    exports["ɵba"] = FabricDrawerComponent;
    exports["ɵbb"] = FabricModal;
    exports["ɵbc"] = GeometryService;
    exports["ɵbd"] = FabricDialogComponent;
    exports["ɵbe"] = StarIconModule;
    exports["ɵbf"] = StarIconComponent;
    exports["ɵbg"] = FabricNotificationsOverlayComponent;
    exports["ɵbh"] = FabricNotificationsContainerComponent;
    exports["ɵbi"] = FabricNotificationComponent;
    exports["ɵbj"] = FabricMessageComponent;
    exports["ɵbk"] = FabricSvgTemplateModule;
    exports["ɵbl"] = FabricSvgTemplate;
    exports["ɵbm"] = AbstractSpinner;
    exports["ɵbn"] = FabricSelectedOptionsRepository;
    exports["ɵbo"] = SelectOptionsGeometryService;
    exports["ɵbp"] = SelectOptionModalService;
    exports["ɵbq"] = FabricSelectOptionsComponent;
    exports["ɵbr"] = ToggleButtonGroupService;
    exports["ɵc"] = FabricThemedComponent;
    exports["ɵd"] = FabricReactive;
    exports["ɵe"] = InlineDialogGeometryService;
    exports["ɵf"] = themeToken;
    exports["ɵg"] = DatePickerIconModule;
    exports["ɵh"] = DatePickerIconComponent;
    exports["ɵi"] = FabricArrowIconModule;
    exports["ɵj"] = FabricArrowIconComponent;
    exports["ɵk"] = FabricDatePickerService;
    exports["ɵl"] = FabricDatePickerCompositionService;
    exports["ɵm"] = FabricDatePickerWeeks;
    exports["ɵn"] = FabricDatePickerYears;
    exports["ɵo"] = FabricDatePickerYearsService;
    exports["ɵp"] = FabricDatePickerCalendarService;
    exports["ɵq"] = FabricDatePickerCalendarViewService;
    exports["ɵr"] = FabricDatePickerInlineDialogService;
    exports["ɵs"] = FabricDatePickerDaysViewComponent;
    exports["ɵt"] = FabricDatePickerMonthsViewComponent;
    exports["ɵu"] = FabricDatePickerYearsComponent;
    exports["ɵv"] = FabricDatePickerViewPanelComponent;
    exports["ɵw"] = FabricTimePickerComponent;
    exports["ɵx"] = FabricCloseIconModule;
    exports["ɵy"] = selector;
    exports["ɵz"] = FabricCloseIconComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=generic-ui-fabric.umd.js.map
