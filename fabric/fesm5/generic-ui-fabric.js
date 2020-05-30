import { __extends, __spread } from 'tslib';
import { Input, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Renderer2, NgModule, EventEmitter, Output, Injectable, ChangeDetectorRef, Inject, PLATFORM_ID, InjectionToken, ComponentFactoryResolver, forwardRef, ViewChild, ViewContainerRef, Injector, ApplicationRef, HostListener, ViewChildren, Directive, Optional } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subject, BehaviorSubject, fromEvent, Observable, of } from 'rxjs';
import { takeUntil, filter, take, distinctUntilChanged, skip, map, throttleTime } from 'rxjs/operators';
import * as elementResizeDetectorMaker_ from 'element-resize-detector';

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
        primary: [{ type: Input }],
        secondary: [{ type: Input }],
        outline: [{ type: Input }]
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
        { type: Component, args: [{
                    selector: 'gui-badge',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-badge]': 'true'
                    },
                    styles: [".gui-badge{background:#e6e6e6;border-radius:4px;color:#595959;display:inline-block;font-family:Arial;font-size:12px;font-weight:700;margin:0 0 0 2px;padding:4px 9.6px;position:relative;-ms-transform:translateX(-70%) translateY(-80%);transform:translateX(-70%) translateY(-80%);z-index:1}.gui-badge.gui-primary{background:#2185d0;color:#fff}.gui-badge.gui-primary.gui-outline{color:#2185d0}.gui-badge.gui-primary:hover{background:#1e77ba}.gui-badge.gui-primary:active{background:#1a69a4;color:#fff}.gui-badge.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-badge.gui-primary.gui-badge{background:#439de1}.gui-badge.gui-secondary{background:#3cb371;color:#fff}.gui-badge.gui-secondary.gui-outline{color:#3cb371}.gui-badge.gui-secondary.gui-button:hover{background:#36a065}.gui-badge.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-badge.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-badge.gui-secondary.gui-badge{background:#5ac88b}.gui-badge.gui-outline{color:#999;background:0 0;border:1px solid #d6d6d6}.gui-badge.gui-outline.gui-button:hover{color:#fff;background:#ccc}.gui-badge.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-badge.gui-outline.gui-badge{background:#fff}.gui-badge.gui-outline.gui-primary{border-color:#439de1}.gui-badge.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-badge.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#6fb4e8;color:#6fb4e8}.gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-badge.gui-outline.gui-secondary{border-color:#5ac88b}.gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#80d5a6;color:#80d5a6}.gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}", ".gui-material .gui-badge{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}.gui-material .gui-badge.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-badge.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-badge.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-badge.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-badge.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-badge.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-badge.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-badge.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-badge.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-badge.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-badge.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-badge.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-badge.gui-outline{color:#3949ab;background:0 0;border-color:#5262c5}.gui-material .gui-badge.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-badge.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-badge.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-badge.gui-outline.gui-badge{background:#fff}.gui-material .gui-badge.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-badge.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}", ".gui-dark .gui-badge{background:#333;color:#bdbdbd}.gui-dark .gui-badge.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-badge.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-badge.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-badge.gui-primary.gui-button:disabled{background:#ce93d8;opacity:.5;color:#212121}.gui-dark .gui-badge.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-badge.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-badge.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-badge.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-button:disabled{background:#80cbc4;opacity:.5;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-badge.gui-outline{color:#bdbdbd;background:0 0;border:1px solid #616161}.gui-dark .gui-badge.gui-outline.gui-button:hover{color:#bdbdbd;background:#616161}.gui-dark .gui-badge.gui-outline.gui-badge{background:#121212}.gui-dark .gui-badge.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#f0def3;color:#f0def3}.gui-dark .gui-badge.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-badge.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}"]
                }] }
    ];
    /** @nocollapse */
    FabricBadgeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
    };
    FabricButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'button[gui-button], a[gui-button]',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-button]': 'true'
                    },
                    styles: [".gui-button{-webkit-writing-mode:horizontal-tb!important;-ms-flex-align:start;align-items:flex-start;background:#e6e6e6;box-sizing:border-box;border-style:none;border-radius:4px;color:#595959;cursor:pointer;display:inline-block;font-family:Arial;font-size:13.3333px;outline:0;padding:10px 20px;transition:background .2s;text-align:center;text-rendering:auto;text-transform:none;text-indent:0;text-shadow:none;letter-spacing:normal;word-spacing:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-button:hover{background:#ccc;color:#333}.gui-button:active{background:#999;color:#333}.gui-button:disabled{color:#ccc;cursor:default;pointer-events:none}.gui-button.gui-outline:focus{box-shadow:0 0 0 2px #d6d6d6}.gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #439de1}.gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #5ac88b}.gui-button.gui-primary{background:#2185d0;color:#fff}.gui-button.gui-primary.gui-outline{color:#2185d0}.gui-button.gui-primary:hover{background:#1e77ba}.gui-button.gui-primary:active{background:#1a69a4;color:#fff}.gui-button.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-button.gui-primary.gui-badge{background:#439de1}.gui-button.gui-secondary{background:#3cb371;color:#fff}.gui-button.gui-secondary.gui-outline{color:#3cb371}.gui-button.gui-secondary.gui-button:hover{background:#36a065}.gui-button.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-button.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-button.gui-secondary.gui-badge{background:#5ac88b}.gui-button.gui-link{background:0 0;border:0;color:#2185d0}.gui-button.gui-link:hover{background:0 0;color:#1e77ba;text-decoration:underline}.gui-button.gui-link:focus{text-decoration:underline}.gui-button.gui-outline{color:#999;background:0 0;border:1px solid #d6d6d6}.gui-button.gui-outline.gui-button:hover{color:#fff;background:#ccc}.gui-button.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-button.gui-outline.gui-badge{background:#fff}.gui-button.gui-outline.gui-primary{border-color:#439de1}.gui-button.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-button.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#6fb4e8;color:#6fb4e8}.gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-button.gui-outline.gui-secondary{border-color:#5ac88b}.gui-button.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-button.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#80d5a6;color:#80d5a6}.gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-button:hover{background:#616161}.gui-dark .gui-button:active{background:#212121}.gui-dark .gui-button:disabled{opacity:.36}.gui-dark .gui-button.gui-outline:focus{box-shadow:0 0 0 2px #616161}.gui-dark .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #ce93d8}.gui-dark .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #80cbc4}.gui-dark .gui-button.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-button.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-button.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-button.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-button.gui-primary.gui-button:disabled{background:#ce93d8;opacity:.5;color:#212121}.gui-dark .gui-button.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-button.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-button.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-button.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-button.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-button.gui-secondary.gui-button:disabled{background:#80cbc4;opacity:.5;color:#212121}.gui-dark .gui-button.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-button.gui-link{background:0 0;border:0;color:#2185d0}.gui-dark .gui-button.gui-link:hover{background:0 0;color:#1e77ba;text-decoration:underline}.gui-dark .gui-button.gui-link:focus{text-decoration:underline}.gui-dark .gui-button.gui-outline{color:#bdbdbd;background:0 0;border:1px solid #616161}.gui-dark .gui-button.gui-outline.gui-button:hover{color:#bdbdbd;background:#616161}.gui-dark .gui-button.gui-outline.gui-badge{background:#121212}.gui-dark .gui-button.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#f0def3;color:#f0def3}.gui-dark .gui-button.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-button.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-button.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}", ".gui-light .gui-button{background:#f6f5f4;border-color:#d8d7d6;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light .gui-button:hover{background:#ecebeb}.gui-light .gui-button:active{background:#f6f5f4}.gui-light .gui-button:disabled{opacity:.5}.gui-light .gui-button.gui-link{background:0 0;border:0;color:#2185d0}.gui-light .gui-button.gui-link:hover{background:0 0;color:#1e77ba;text-decoration:underline}.gui-light .gui-button.gui-link:focus{text-decoration:underline}", ".gui-material .gui-button{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-button:hover{background:#5262c5}.gui-material .gui-button:active{background:#4051bf}.gui-material .gui-button:disabled{background:#c5cae9;color:#7885d2}.gui-material .gui-button.gui-outline:focus{box-shadow:0 0 0 1px #5262c5}.gui-material .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 1px #6200ee}.gui-material .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 1px #0097a7}.gui-material .gui-button.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-button.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-button.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-button.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-button.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-button.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-button.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-button.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-button.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-button.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-button.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-button.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-button.gui-link{background:0 0;border:0;color:#3949ab}.gui-material .gui-button.gui-link:hover{color:#4051bf}.gui-material .gui-button.gui-outline{color:#3949ab;background:0 0;border-color:#5262c5}.gui-material .gui-button.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-button.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-button.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-button.gui-outline.gui-badge{background:#fff}.gui-material .gui-button.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-button.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}"]
                }] }
    ];
    /** @nocollapse */
    FabricButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricButtonComponent.propDecorators = {
        link: [{ type: Input }]
    };
    return FabricButtonComponent;
}(Indicator));
if (false) {
    /** @type {?} */
    FabricButtonComponent.prototype.link;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricButtonModule = /** @class */ (function () {
    function FabricButtonModule() {
    }
    FabricButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
        { type: Component, args: [{
                    selector: 'gui-button-group',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
        { type: Component, args: [{
                    selector: 'gui-card',
                    template: "<div class=\"gui-card-body\">\n\n\t<div class=\"gui-card-image-wrapper\">\n\t\t<img [ngClass]=\"{'gui-card-img': isImgEnabled()}\"\n\t\t\t alt=\"{{alt}}\" src=\"{{image}}\"/>\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-title': isTitleEnabled()}\">\n\t\t{{title}}\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-content-block': isContentBlockEnabled()}\">\n\t\t<div\n\t\t\t*ngFor=\"let block of contentBlock\"\n\t\t\t[ngClass]=\"{'gui-card-content-block-item': isContentBlockEnabled()}\">\n\t\t\t{{block}}\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-card]': 'true'
                    },
                    styles: [".gui-card .gui-card-img{margin:0 0 12px;border-radius:4px 4px 0 0;width:350px;height:auto}.gui-card .gui-card-body{box-sizing:border-box;background:#fff;border-radius:4px;width:350px;margin:0;padding:0 0 20px;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;transition:transform .3s ease-in-out;box-shadow:0 1px 3px #999}.gui-card .gui-card-body:hover{box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)}.gui-card .gui-card-body .gui-card-title{font-size:20px;font-weight:700;margin:0 0 12px;padding:0 20px}.gui-card .gui-card-body .gui-card-content-block{margin:0 0 12px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{padding:12px 20px;border-top:1px solid #d6d6d6}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom:1px solid #d6d6d6}.gui-card .gui-card-body .gui-content{padding:0 20px}", ".gui-material .gui-card .gui-card-body{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-card .gui-card-body{background:#121212;color:#bdbdbd;border-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#616161}.gui-dark .gui-content-block .gui-card-content-block{border-color:#616161}"]
                }] }
    ];
    FabricCardComponent.propDecorators = {
        title: [{ type: Input }],
        image: [{ type: Input }],
        alt: [{ type: Input }],
        contentBlock: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
        this.checked = false;
        this.disabled = false;
        this.readonly = false;
        this.changed = new EventEmitter();
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
    };
    /**
     * @return {?}
     */
    FabricCheckboxComponent.prototype.check = /**
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
        this.changed.emit(this.checked);
    };
    FabricCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-checkbox',
                    template: "<label>\n\t<input\n\t\t(click)=\"check()\"\n\t\t[checked]=\"checked\"\n\t\t[disabled]=\"disabled\"\n\t\t[name]=\"name\"\n\t\ttype=\"checkbox\">\n\t<span class=\"gui-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-checkbox]': 'true'
                    },
                    styles: [".gui-checkbox{display:inline-block;line-height:24px;padding-left:32px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{position:absolute;opacity:0;height:0;width:0}.gui-checkbox .gui-checkmark{box-sizing:content-box;border-radius:4px;position:absolute;left:0;height:20px;width:20px;border:2px solid #575757}.gui-checkbox input:checked+.gui-checkmark{border-color:#575757}.gui-checkbox.gui-disabled.gui-checkbox{color:#ccc;pointer-events:none}.gui-checkbox.gui-readonly.gui-checkbox{pointer-events:none}.gui-checkbox .gui-checkmark:after{content:\" \";display:none;position:absolute;left:6px;-ms-transform:rotate(45deg);transform:rotate(45deg);border-color:#575757;border-style:solid;border-width:0 3.2px 3.2px 0;width:5.2px;height:12px}.gui-checkbox input:checked+.gui-checkmark:after{box-sizing:content-box;display:block}", ".gui-material .gui-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox label:hover .gui-checkmark{border-color:#575757}.gui-material .gui-checkbox .gui-checkmark{border-color:#999}.gui-material .gui-checkbox input:checked+.gui-checkmark{border-color:#3949ab;background:#3949ab}.gui-material .gui-checkbox .gui-checkmark:after{border-color:#fff}", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark,.gui-dark .gui-checkbox .gui-checkmark:after,.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox.gui-disabled.gui-checkbox{opacity:.36}"]
                }] }
    ];
    /** @nocollapse */
    FabricCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricCheckboxComponent.propDecorators = {
        name: [{ type: Input }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        readonly: [{ type: Input }],
        changed: [{ type: Output }]
    };
    return FabricCheckboxComponent;
}());
if (false) {
    /** @type {?} */
    FabricCheckboxComponent.prototype.name;
    /** @type {?} */
    FabricCheckboxComponent.prototype.checked;
    /** @type {?} */
    FabricCheckboxComponent.prototype.disabled;
    /** @type {?} */
    FabricCheckboxComponent.prototype.readonly;
    /** @type {?} */
    FabricCheckboxComponent.prototype.changed;
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
        { type: Component, args: [{
                    selector: 'gui-chip',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-chip]': 'true'
                    },
                    styles: [".gui-chip{box-sizing:border-box;background:#e6e6e6;border-radius:4px;color:#595959;display:inline-block;font-family:Arial;font-size:14px;font-weight:700;margin:0 2px;padding:9.6px 12px}.gui-chip.gui-primary{background:#2185d0;color:#fff}.gui-chip.gui-primary.gui-outline{color:#2185d0}.gui-chip.gui-primary:hover{background:#1e77ba}.gui-chip.gui-primary:active{background:#1a69a4;color:#fff}.gui-chip.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-chip.gui-primary.gui-badge{background:#439de1}.gui-chip.gui-secondary{background:#3cb371;color:#fff}.gui-chip.gui-secondary.gui-outline{color:#3cb371}.gui-chip.gui-secondary.gui-button:hover{background:#36a065}.gui-chip.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-chip.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-chip.gui-secondary.gui-badge{background:#5ac88b}.gui-chip.gui-outline{color:#999;background:0 0;border:1px solid #d6d6d6}.gui-chip.gui-outline.gui-button:hover{color:#fff;background:#ccc}.gui-chip.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-chip.gui-outline.gui-badge{background:#fff}.gui-chip.gui-outline.gui-primary{border-color:#439de1}.gui-chip.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-chip.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#6fb4e8;color:#6fb4e8}.gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-chip.gui-outline.gui-secondary{border-color:#5ac88b}.gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#80d5a6;color:#80d5a6}.gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}", ".gui-material .gui-chip{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-chip.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-chip.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-chip.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-chip.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-chip.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-chip.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-chip.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-chip.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-chip.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-chip.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-chip.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-chip.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-chip.gui-outline{color:#3949ab;background:0 0;border-color:#5262c5}.gui-material .gui-chip.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-chip.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-chip.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-chip.gui-outline.gui-badge{background:#fff}.gui-material .gui-chip.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-chip.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}", ".gui-dark .gui-chip{background:#333;color:#bdbdbd}.gui-dark .gui-chip.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-chip.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-chip.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-chip.gui-primary.gui-button:disabled{background:#ce93d8;opacity:.5;color:#212121}.gui-dark .gui-chip.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-chip.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-chip.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-chip.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-button:disabled{background:#80cbc4;opacity:.5;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-chip.gui-outline{color:#bdbdbd;background:0 0;border:1px solid #616161}.gui-dark .gui-chip.gui-outline.gui-button:hover{color:#bdbdbd;background:#616161}.gui-dark .gui-chip.gui-outline.gui-badge{background:#121212}.gui-dark .gui-chip.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#f0def3;color:#f0def3}.gui-dark .gui-chip.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-chip.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}", ".gui-light .gui-chip{background:#f6f5f4;color:#333;border:1px solid #333}"]
                }] }
    ];
    /** @nocollapse */
    FabricChipComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
/** @type {?} */
var quarters = [
    [{
            nr: 0,
            name: 'Jan'
        }, {
            nr: 1,
            name: 'Feb'
        }, {
            nr: 2,
            name: 'Mar'
        }],
    [{
            nr: 3,
            name: 'Apr'
        }, {
            nr: 4,
            name: 'May'
        }, {
            nr: 5,
            name: 'Jun'
        }],
    [{
            nr: 6,
            name: 'Jul'
        }, {
            nr: 7,
            name: 'Aug'
        }, {
            nr: 8,
            name: 'Sep'
        }],
    [{
            nr: 9,
            name: 'Oct'
        }, {
            nr: 10,
            name: 'Nov'
        }, {
            nr: 11,
            name: 'Dec'
        }]
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricDatePickerService = /** @class */ (function () {
    function FabricDatePickerService() {
        this.dateMonth$ = new Subject();
        this.dateYear$ = new Subject();
        this.initialDate = new Date();
        this.selectedDate$ = new BehaviorSubject(this.initialDate);
    }
    /**
     * @return {?}
     */
    FabricDatePickerService.prototype.observeDateMonth = /**
     * @return {?}
     */
    function () {
        return this.dateMonth$.asObservable();
    };
    /**
     * @return {?}
     */
    FabricDatePickerService.prototype.observeDateYear = /**
     * @return {?}
     */
    function () {
        return this.dateYear$.asObservable();
    };
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
        this.selectedDate$.next(this.selectedDate);
    };
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerService.prototype.nextMonth = /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (month === 11) {
            this.dateYear$.next(year + 1);
            this.dateMonth$.next(0);
        }
        else {
            this.dateMonth$.next(month + 1);
        }
    };
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerService.prototype.prevMonth = /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (month === 0) {
            this.dateYear$.next(year - 1);
            this.dateMonth$.next(11);
        }
        else {
            this.dateMonth$.next(month - 1);
        }
    };
    FabricDatePickerService.decorators = [
        { type: Injectable }
    ];
    return FabricDatePickerService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.dateMonth$;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.dateYear$;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.initialDate;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.selectedDate;
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
        { type: Injectable }
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
        this.year = new Date().getFullYear();
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
     * @return {?}
     */
    FabricDatePickerYears.prototype.prevYearRange = /**
     * @return {?}
     */
    function () {
        if (this.year > this.minYear) {
            this.year -= this.inc;
        }
        if (this.year > this.minYear) {
            return this.getYears(this.year);
        }
        else {
            return this.rowsForDisplay;
        }
    };
    /**
     * @return {?}
     */
    FabricDatePickerYears.prototype.nextYearRange = /**
     * @return {?}
     */
    function () {
        if (this.year < this.maxYear) {
            this.year += this.inc;
        }
        if (this.year < this.maxYear) {
            return this.getYears(this.year);
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
        { type: Injectable }
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
    FabricDatePickerYears.prototype.year;
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
var FabricDatePickerCalendarComponent = /** @class */ (function () {
    function FabricDatePickerCalendarComponent(datePickerService, datePickerWeeks, datePickerYears, changeDetectorRef) {
        this.datePickerService = datePickerService;
        this.datePickerWeeks = datePickerWeeks;
        this.datePickerYears = datePickerYears;
        this.changeDetectorRef = changeDetectorRef;
        this.currentDay = new Date();
        this.daysOfTheWeek = daysOfTheWeek;
        this.quarters = quarters;
        this.selectedMonth = new Date().getMonth() + 1;
        this.enableMonthSelection = false;
        this.enableYearSelection = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.minYear || changes.maxYear) {
            this.years = this.datePickerYears.getYears(this.selectedYear);
        }
        if (changes.selectDate) {
            this.calculateDatePickerData();
        }
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.monthSubscription =
            this.datePickerService.observeDateMonth().subscribe((/**
             * @param {?} month
             * @return {?}
             */
            function (month) { return _this.selectedMonth = month; }));
        this.yearSubscription =
            this.datePickerService.observeDateYear().subscribe((/**
             * @param {?} year
             * @return {?}
             */
            function (year) { return _this.selectedYear = year; }));
        this.selectedDateSubscription =
            this.datePickerService.observeSelectedDate().subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                _this.selectDate = date;
                _this.selectedYear = date.getFullYear();
                _this.selectedMonth = date.getMonth();
            }));
        this.calculateDatePickerData();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.monthSubscription.unsubscribe();
        this.yearSubscription.unsubscribe();
        this.selectedDateSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.calculateDatePickerData = /**
     * @return {?}
     */
    function () {
        this.selectedMonthName = months[this.selectedMonth];
        this.weeks = this.datePickerWeeks.getDaysInMonths(this.selectedYear, this.selectedMonth);
        this.years = this.datePickerYears.getYears(this.selectedYear);
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.prevCard = /**
     * @return {?}
     */
    function () {
        if (!this.enableMonthSelection && !this.enableYearSelection) {
            this.datePickerService.prevMonth(this.selectedYear, this.selectedMonth);
            this.calculateDatePickerData();
        }
        if (this.enableMonthSelection && this.selectedYear) {
            this.selectedYear = this.selectedYear - 1;
        }
        if (this.enableYearSelection) {
            this.years = this.datePickerYears.prevYearRange();
        }
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.nextCard = /**
     * @return {?}
     */
    function () {
        if (!this.enableMonthSelection && !this.enableYearSelection) {
            this.datePickerService.nextMonth(this.selectedYear, this.selectedMonth);
            this.calculateDatePickerData();
        }
        if (this.enableMonthSelection && this.selectedYear) {
            this.selectedYear = this.selectedYear + 1;
        }
        if (this.enableYearSelection) {
            this.years = this.datePickerYears.nextYearRange();
        }
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.onSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectDate = date;
        this.changeDetectorRef.detectChanges();
        this.datePickerService.dateSelected(date);
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.switchViewedList = /**
     * @return {?}
     */
    function () {
        if (event) {
            event.stopPropagation();
        }
        if (this.enableMonthSelection) {
            return 'monthList';
        }
        if (this.enableYearSelection) {
            return 'yearsList';
        }
        if (!this.enableMonthSelection && !this.enableYearSelection) {
            return 'daysList';
        }
    };
    /**
     * @param {?} day
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.displayMonthDays = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return day === this.selectedMonth;
    };
    /**
     * @param {?} day
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isDateSelected = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        if (this.selectDate) {
            return day.getDate() === this.selectDate.getDate() &&
                day.getMonth() === this.selectDate.getMonth() &&
                day.getFullYear() === this.selectDate.getFullYear();
        }
    };
    /**
     * @param {?} day
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isCurrentDay = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return day.getDate() === this.currentDay.getDate() &&
            day.getMonth() === this.currentDay.getMonth() &&
            day.getFullYear() === this.currentDay.getFullYear();
    };
    /**
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isCurrentMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        return month === this.currentDay.getMonth() &&
            this.selectedYear === this.currentDay.getFullYear();
    };
    /**
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isSelectedMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        if (this.selectDate) {
            return this.selectDate.getMonth() === month &&
                this.selectDate.getFullYear() === this.selectedYear;
        }
    };
    /**
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isYearSelected = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        if (this.selectDate) {
            return year === this.selectedYear;
        }
    };
    /**
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isCurrentYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        return this.currentDay.getFullYear() === year;
    };
    /**
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.selectYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.selectedYear = year;
        this.enableYearSelection = false;
        this.enableMonthSelection = true;
        this.calculateDatePickerData();
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.selectMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.selectedMonth = month;
        this.enableMonthSelection = false;
        this.calculateDatePickerData();
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.showMonthsList = /**
     * @return {?}
     */
    function () {
        this.enableMonthSelection = !this.enableMonthSelection;
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.showYearsList = /**
     * @return {?}
     */
    function () {
        this.enableMonthSelection = false;
        this.enableYearSelection = !this.enableYearSelection;
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.getDisplayedYearRange = /**
     * @return {?}
     */
    function () {
        return this.years[0][0].toString() + '-' + this.years[4][this.years[4].length - 1].toString();
    };
    FabricDatePickerCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-date-picker-toggle',
                    template: "<div class=\"gui-date-picker-container\">\n\t<div [ngSwitch]=\"switchViewedList()\">\n\n\t\t<div *ngSwitchCase=\"'daysList'\">\n\t\t\t<div class=\"gui-date-picker-interface\">\n\n\t\t\t\t<div (click)=\"showMonthsList()\"\n\t\t\t\t\t class=\"gui-date-picker-interface-date\">\n\t\t\t\t\t{{selectedMonthName}} {{selectedYear}}\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"prevCard()\"><</button>\n\t\t\t\t\t<button (click)=\"nextCard()\">></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<th *ngFor=\"let dayOfTheWeek of daysOfTheWeek\">\n\t\t\t\t\t\t<span>{{dayOfTheWeek}}</span>\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr *ngFor=\"let week of weeks\">\n\n\t\t\t\t\t<td *ngFor=\"let day of week\"\n\t\t\t\t\t\t[class.gui-date-picker-current-day]=\"isCurrentDay(day)\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-day]=\"isDateSelected(day)\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-month]=\"displayMonthDays(day.getMonth())\"\n\t\t\t\t\t\tclass=\"gui-date-picker-day\">\n\t\t\t\t<span (click)=\"onSelect(day)\">\n\t\t\t\t\t{{day.getDate()}}\n\t\t\t\t</span>\n\t\t\t\t\t</td>\n\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<div *ngSwitchCase=\"'monthList'\">\n\t\t\t<div class=\"gui-date-picker-interface\">\n\n\t\t\t\t<div (click)=\"showYearsList()\" class=\"gui-date-picker-interface-date\">\n\t\t\t\t\t{{selectedYear}}\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"prevCard()\"><</button>\n\t\t\t\t\t<button (click)=\"nextCard()\">></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<table>\n\t\t\t\t<tr *ngFor=\"let quarter of quarters\">\n\t\t\t\t\t<td (click)=\"selectMonth(month.nr)\"\n\t\t\t\t\t\t*ngFor=\"let month of quarter\"\n\t\t\t\t\t\t[class.gui-date-picker-current-month]=\"isCurrentMonth(month.nr)\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-month]=\"isSelectedMonth(month.nr)\"\n\t\t\t\t\t\tclass=\"gui-date-picker-month\">\n\t\t\t\t<span>\n\t\t\t\t\t{{month.name}}\n\t\t\t\t</span>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<div *ngSwitchCase=\"'yearsList'\">\n\t\t\t<div class=\"gui-date-picker-interface\">\n\n\t\t\t\t<div class=\"gui-date-picker-interface-date gui-date-picker-no-pointer\">{{getDisplayedYearRange()}}</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"prevCard()\"><</button>\n\t\t\t\t\t<button (click)=\"nextCard()\">></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<table>\n\t\t\t\t<tr *ngFor=\"let yearsChunk of years\">\n\t\t\t\t\t<td (click)=\"selectYear(year)\"\n\t\t\t\t\t\t*ngFor=\"let year of yearsChunk\"\n\t\t\t\t\t\t[class.gui-date-picker-current-year]=\"isCurrentYear(year)\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-year]=\"isYearSelected(year)\"\n\t\t\t\t\t\tclass=\"gui-date-picker-year\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t{{year}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-date-picker-calendar]': 'true'
                    },
                    styles: [".gui-date-picker-calendar{box-sizing:border-box;font-family:Roboto,\"Helvetica Neue\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-date-picker-calendar .gui-date-picker-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-radius:4px;width:250px;padding:0 0 12px}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:24px 18px}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface .gui-date-picker-interface-date{margin:0;font-size:18px;font-weight:700;cursor:pointer;pointer-events:auto}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface .gui-date-picker-no-pointer{cursor:auto}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface button{background:0 0;border:none;font-size:18px;margin-left:12px;cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table{height:250px;width:250px}.gui-date-picker-calendar .gui-date-picker-container table th{font-size:16px;text-align:center}.gui-date-picker-calendar .gui-date-picker-container table td:first-child,.gui-date-picker-calendar .gui-date-picker-container table th:first-child{padding-left:12px}.gui-date-picker-calendar .gui-date-picker-container table td:last-child,.gui-date-picker-calendar .gui-date-picker-container table th:last-child{padding-right:12px}.gui-date-picker-calendar .gui-date-picker-container table td{font-size:16px;height:31px;width:31px;text-align:center;position:relative}.gui-date-picker-calendar .gui-date-picker-container table td span{border-radius:4px;padding:2px 4px;border:1px solid transparent}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day span{display:none;pointer-events:none}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year{cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year span{font-size:13px}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-month span{display:block;pointer-events:auto;cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-current-day span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-current-month span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-current-year span{background:#c7e2f6}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-day span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-selected-month span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-selected-year span{border:1px solid #1a69a4}"]
                }] }
    ];
    /** @nocollapse */
    FabricDatePickerCalendarComponent.ctorParameters = function () { return [
        { type: FabricDatePickerService },
        { type: FabricDatePickerWeeks },
        { type: FabricDatePickerYears },
        { type: ChangeDetectorRef }
    ]; };
    return FabricDatePickerCalendarComponent;
}());
if (false) {
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.currentDay;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.daysOfTheWeek;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.weeks;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.quarters;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.years;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectDate;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectedMonth;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectedMonthName;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectedYear;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.selectedDateSubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.monthSubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.yearSubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.enableMonthSelection;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.enableYearSelection;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerService;
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
    FabricDatePickerCalendarComponent.prototype.changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InlineDialogGeometry = /** @class */ (function () {
    function InlineDialogGeometry(inlineDialogRef) {
        this.inlineDialogRef = inlineDialogRef;
    }
    /**
     * @return {?}
     */
    InlineDialogGeometry.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        return this.inlineDialogRef.nativeElement.querySelector('.gui-inline-dialog-wrapper').offsetHeight;
    };
    /**
     * @return {?}
     */
    InlineDialogGeometry.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.inlineDialogRef.nativeElement.querySelector('.gui-inline-dialog-wrapper').offsetWidth;
    };
    return InlineDialogGeometry;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    InlineDialogGeometry.prototype.inlineDialogRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var InlineDialogPlacement = {
    Bottom: 1,
    Top: 2,
    Right: 3,
    Left: 4,
};
InlineDialogPlacement[InlineDialogPlacement.Bottom] = 'Bottom';
InlineDialogPlacement[InlineDialogPlacement.Top] = 'Top';
InlineDialogPlacement[InlineDialogPlacement.Right] = 'Right';
InlineDialogPlacement[InlineDialogPlacement.Left] = 'Left';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InlineDialogCords = /** @class */ (function () {
    function InlineDialogCords(element, inlineDialogGeometry, window, placement, inlineDialogOffset) {
        if (inlineDialogOffset === void 0) { inlineDialogOffset = InlineDialogCords.defaultInlineDialogOffset; }
        this.element = element;
        this.inlineDialogGeometry = inlineDialogGeometry;
        this.window = window;
        this.placement = placement;
        this.inlineDialogOffset = inlineDialogOffset;
        this.calculateCords(element, inlineDialogGeometry);
    }
    /**
     * @return {?}
     */
    InlineDialogCords.prototype.getVerticalPosition = /**
     * @return {?}
     */
    function () {
        return this.verticalPosition;
    };
    /**
     * @return {?}
     */
    InlineDialogCords.prototype.getHorizontalPosition = /**
     * @return {?}
     */
    function () {
        return this.horizontalPosition;
    };
    /**
     * @private
     * @param {?} element
     * @param {?} inlineDialogGeometry
     * @return {?}
     */
    InlineDialogCords.prototype.calculateCords = /**
     * @private
     * @param {?} element
     * @param {?} inlineDialogGeometry
     * @return {?}
     */
    function (element, inlineDialogGeometry) {
        /** @type {?} */
        var elementRect = element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var elementBottom = this.window.pageYOffset + elementRect.bottom;
        /** @type {?} */
        var elementLeft = this.window.pageXOffset + elementRect.left;
        /** @type {?} */
        var elementRight = this.window.pageXOffset + elementRect.right;
        /** @type {?} */
        var elementTop = this.window.pageYOffset + elementRect.top;
        switch (this.placement) {
            case InlineDialogPlacement.Bottom:
                this.horizontalPosition = elementLeft;
                this.verticalPosition = elementBottom + this.inlineDialogOffset;
                break;
            case InlineDialogPlacement.Top:
                this.horizontalPosition = elementLeft;
                this.verticalPosition = elementTop + this.inlineDialogOffset;
                break;
            case InlineDialogPlacement.Right:
                this.horizontalPosition = elementRight + this.inlineDialogOffset;
                this.verticalPosition = elementTop;
                break;
            case InlineDialogPlacement.Left:
                this.horizontalPosition = elementLeft + this.inlineDialogOffset;
                this.verticalPosition = elementTop;
                break;
            default:
                this.horizontalPosition = elementLeft;
                this.verticalPosition = elementBottom + this.inlineDialogOffset;
        }
        this.calculateDirection(inlineDialogGeometry, element);
    };
    /**
     * @private
     * @param {?} inlineDialogGeometry
     * @param {?} element
     * @return {?}
     */
    InlineDialogCords.prototype.calculateDirection = /**
     * @private
     * @param {?} inlineDialogGeometry
     * @param {?} element
     * @return {?}
     */
    function (inlineDialogGeometry, element) {
        /** @type {?} */
        var windowHeight = this.window.innerHeight + this.window.pageYOffset;
        /** @type {?} */
        var windowWidth = this.window.innerWidth + this.window.pageXOffset;
        /** @type {?} */
        var elementHeight = element.nativeElement.offsetHeight;
        /** @type {?} */
        var elementWidth = element.nativeElement.offsetWidth;
        /** @type {?} */
        var inlineDialogHeight = inlineDialogGeometry.getHeight();
        /** @type {?} */
        var inlineDialogWidth = inlineDialogGeometry.getWidth();
        /** @type {?} */
        var inlineDialogDoesNotFitHorizontally = (windowWidth - this.horizontalPosition - inlineDialogWidth) < 0;
        /** @type {?} */
        var inlineDialogDoesNotFitVertically = (windowHeight - this.verticalPosition - inlineDialogHeight) < 0;
        if (inlineDialogDoesNotFitHorizontally) {
            this.horizontalPosition -= inlineDialogWidth - elementWidth;
        }
        if (inlineDialogDoesNotFitVertically) {
            this.verticalPosition -= inlineDialogHeight - elementHeight;
        }
    };
    InlineDialogCords.defaultInlineDialogOffset = 8;
    return InlineDialogCords;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.defaultInlineDialogOffset;
    /** @type {?} */
    InlineDialogCords.prototype.verticalPosition;
    /** @type {?} */
    InlineDialogCords.prototype.horizontalPosition;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.element;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.inlineDialogGeometry;
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
        this.inlineDialogState$ = new Subject();
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
        this.inlineDialogGeometry = new InlineDialogGeometry(inlineDialogRef);
    };
    /**
     * @param {?} element
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    InlineDialogGeometryService.prototype.getInlineDialogCords = /**
     * @param {?} element
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    function (element, placement, offset) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var inlineDialogCords = new InlineDialogCords(element, this.inlineDialogGeometry, window, placement, offset);
            this.inlineDialogState$.next(inlineDialogCords);
        }
    };
    InlineDialogGeometryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InlineDialogGeometryService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
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
/**
 * @abstract
 */
var  /**
 * @abstract
 */
FabricReactive = /** @class */ (function () {
    function FabricReactive() {
        this.unsubscribe$ = new Subject();
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
        return takeUntil(this.unsubscribe$);
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
/**
 * @abstract
 */
var DialogComponent = /** @class */ (function (_super) {
    __extends(DialogComponent, _super);
    function DialogComponent(elementRef, renderer, theme) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.theme = theme;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    DialogComponent.prototype.addTheme = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cssClass = DialogComponent.CSS_CLASS_PREFIX + this.theme.toLowerCase();
        this.renderer.addClass(this.elementRef.nativeElement, cssClass);
    };
    DialogComponent.CSS_CLASS_PREFIX = 'gui-';
    return DialogComponent;
}(FabricReactive));
if (false) {
    /**
     * @type {?}
     * @private
     */
    DialogComponent.CSS_CLASS_PREFIX;
    /**
     * @type {?}
     * @private
     */
    DialogComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DialogComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    DialogComponent.prototype.theme;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var themeToken = new InjectionToken('Theme token');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricInlineDialogComponent = /** @class */ (function (_super) {
    __extends(FabricInlineDialogComponent, _super);
    function FabricInlineDialogComponent(componentFactoryResolver, changeDetectorRef, inlineDialogService, elRef, renderer, theme, inlineDialogGeometryService) {
        var _this = _super.call(this, elRef, renderer, theme) || this;
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
        this.createNestedComponent(this.inlineDialogNestedComponent);
        this.inlineDialogGeometryService.changeGeometry(this.elRef);
        this.addTheme();
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
        { type: Component, args: [{
                    template: "<div [style.left.px]=\"dialogLeftAttribute\"\n\t [style.top.px]=\"dialogTopAttribute\"\n\t [ngClass]=\"customClass\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-inline-dialog-wrapper{position:absolute;box-sizing:border-box;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{box-sizing:border-box;background-color:#fff;max-width:400px;box-shadow:0 3px 7px #999;border-radius:4px;z-index:1000;display:block}", ".gui-dark .gui-inline-dialog-content{background:#424242;color:#bdbdbd;box-shadow:0 1px 2px #424242}"]
                }] }
    ];
    /** @nocollapse */
    FabricInlineDialogComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: FabricInlineDialogService, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return FabricInlineDialogService; })),] }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: Theme, decorators: [{ type: Inject, args: [themeToken,] }] },
        { type: InlineDialogGeometryService }
    ]; };
    FabricInlineDialogComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }]
    };
    return FabricInlineDialogComponent;
}(DialogComponent));
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
        this.opened$ = new BehaviorSubject(false);
        this.unsub$ = new Subject();
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
            var placement = InlineDialogPlacement.Top;
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
            var injector = Injector.create({
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
     * @param {?=} customClass
     * @return {?}
     */
    FabricInlineDialogService.prototype.appendInlineDialogToElement = /**
     * @private
     * @param {?} component
     * @param {?} injector
     * @param {?=} customClass
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
        var close$ = fromEvent(this.document, 'keyup');
        close$
            .pipe(filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key.code === 'Escape'; })), takeUntil(this.unsub$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.close(); }));
    };
    FabricInlineDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricInlineDialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
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
     * @param {?=} injector
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    FabricDatePickerInlineDialogService.prototype.open = /**
     * @param {?} element
     * @param {?} component
     * @param {?=} injector
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    function (element, component, injector, placement, offset) {
        this.fabricInlineDialogService.open(element, component, { placement: InlineDialogPlacement.Bottom, offset: 0 });
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
        { type: Injectable }
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
var FabricDatePickerComponent = /** @class */ (function () {
    function FabricDatePickerComponent(fabricDatePickerInlineDialogService, datePickerService, formBuilder, changeDetectorRef) {
        this.fabricDatePickerInlineDialogService = fabricDatePickerInlineDialogService;
        this.datePickerService = datePickerService;
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.openDialog = false;
        this.onlyDialog = false;
        this.dateSelected = new EventEmitter();
        this.dialogOpened = new EventEmitter();
        this.unsub$ = new Subject();
        this.datePickerForm = formBuilder.group({
            'date': ['']
        });
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
        if (changes.onlyDialog !== null) {
            this.inputDisabled = this.onlyDialog ? 'disabled' : '';
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
        this.datePickerSubscription =
            this.datePickerService
                .observeSelectedDate()
                .pipe(take(1), distinctUntilChanged(), takeUntil(this.unsub$))
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                _this.pickedDate = date;
                _this.dateSelected.emit(date);
            }));
        this.datePickerService
            .observeSelectedDate()
            .pipe(skip(1), takeUntil(this.unsub$))
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            _this.pickedDate = date;
            _this.dateSelected.emit(date);
            _this.changeDetectorRef.detectChanges();
            _this.fabricDatePickerInlineDialogService.close();
        }));
        this.fabricDatePickerInlineDialogService
            .onOpened()
            .pipe(skip(1), takeUntil(this.unsub$))
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
        this.datePickerSubscription.unsubscribe();
        this.datePickerDaySubscription.unsubscribe();
        this.unsub$.next();
        this.unsub$.complete();
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
        this.fabricDatePickerInlineDialogService.open(this.parentElement, FabricDatePickerCalendarComponent);
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
        this.datePickerDaySubscription =
            this.datePickerForm
                .controls['date']
                .valueChanges
                .pipe(distinctUntilChanged(), 
            // debounceTime(1000),
            map((/**
             * @param {?} day
             * @return {?}
             */
            function (day) { return _this.parse(day); })), takeUntil(this.unsub$))
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
            var year = +str[2];
            /** @type {?} */
            var month = +str[1] - 1;
            /** @type {?} */
            var date = +str[0];
            return new Date(year, month, date);
        }
        else {
            return this.pickedDate;
        }
    };
    FabricDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-date-picker',
                    template: "<div #datePicker class=\"gui-date-picker\">\n\t<form [formGroup]=\"datePickerForm\">\n\t\t<input [attr.disabled]=\"inputDisabled\"\n\t\t\t   [name]=name\n\t\t\t   [value]=\"pickedDate | date: 'dd/MM/yyyy'\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input>\n\t</form>\n\t<div (click)=\"openDatePicker()\" class=\"gui-date-picker-icon\"></div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-date-picker{display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center}.gui-date-picker input{background:0 0;font-family:Arial;font-size:14px;padding:4px;border-radius:0;border-width:0 0 1px}.gui-date-picker input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABHSURBVDhPY0AGERER/6FMnABdDSOIIEYjNrBixQpGJiibbECxAWBAjhdgegbeCygGgJwFw1AhgmA0FgaDARRnJiiTXMDAAABL+xpWANMN2gAAAABJRU5ErkJggg==);position:absolute;right:0;height:16px;width:16px;cursor:pointer;opacity:.8}.gui-date-picker .gui-date-picker-icon:hover{opacity:1}", ".gui-dark .gui-input{background:0 0}.gui-dark .gui-date-picker-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACNSURBVDhPY0AGe/fu/Q9l4gToahhBBC6NbOzsDP//szDcuP6Qwcxcg+HtmzdQGQhwdnZmZIKysYJfP38xCPBzM1hZ6zL8+PEDKooK8BrAwPCf4fXrVwyvXr5g+PrlC1QMCyDG7+gApoeACwgD6hoAchYMQ4UIgoH3AhgMo1ggB+DNTIQAKDNBmeQCBgYAklU89fLLqHkAAAAASUVORK5CYII=)}.gui-dark .gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface button{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-day span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-selected-month span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-selected-year span{border-color:#ce93d8}.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-current-day span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-current-month span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-current-year span{background:#757575}"]
                }] }
    ];
    /** @nocollapse */
    FabricDatePickerComponent.ctorParameters = function () { return [
        { type: FabricDatePickerInlineDialogService },
        { type: FabricDatePickerService },
        { type: FormBuilder },
        { type: ChangeDetectorRef }
    ]; };
    FabricDatePickerComponent.propDecorators = {
        datePickerRef: [{ type: ViewChild, args: ['datePicker', { static: false },] }],
        parentElement: [{ type: Input }],
        selectDate: [{ type: Input }],
        name: [{ type: Input }],
        openDialog: [{ type: Input }],
        onlyDialog: [{ type: Input }],
        dateSelected: [{ type: Output }],
        dialogOpened: [{ type: Output }]
    };
    return FabricDatePickerComponent;
}());
if (false) {
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerRef;
    /** @type {?} */
    FabricDatePickerComponent.prototype.parentElement;
    /** @type {?} */
    FabricDatePickerComponent.prototype.selectDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.name;
    /** @type {?} */
    FabricDatePickerComponent.prototype.openDialog;
    /** @type {?} */
    FabricDatePickerComponent.prototype.onlyDialog;
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
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerSubscription;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerDaySubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.unsub$;
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
        { type: Component, args: [{
                    selector: 'input[gui-input]',
                    template: "\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-input]': 'true'
                    },
                    styles: [".gui-input{background:#fff;border-radius:4px;color:#333;font:14px Arial;margin:0;max-width:100%;outline:0;padding:8px 12px;text-align:left;border:1px solid #d6d6d6}.gui-input:hover{border-color:#999}.gui-input:focus{border-color:#6fb4e8}.gui-input:disabled{color:#ccc;cursor:default;pointer-events:none}.gui-input:disabled::-webkit-input-placeholder{color:#ccc}.gui-input:disabled::-moz-placeholder{color:#ccc}.gui-input:disabled:-ms-input-placeholder{color:#ccc}.gui-input:disabled::-ms-input-placeholder{color:#ccc}.gui-input:disabled::placeholder{color:#ccc}", ".gui-material .gui-input{font-family:Roboto,\"Helvetica Neue\",sans-serif;border-style:solid;border-width:0 0 1px;border-color:#ccc;border-radius:0;padding-left:0;transition:border-color .3s ease-in-out}.gui-material .gui-input:focus,.gui-material .gui-input:not(:placeholder-shown){border-color:#6200ee}", ".gui-dark .gui-input{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-input:hover{border-color:#757575}.gui-dark .gui-input:focus{border-color:#ce93d8}.gui-dark .gui-input:disabled{opacity:.36}"]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
var FabricDatePickerModule = /** @class */ (function () {
    function FabricDatePickerModule() {
    }
    FabricDatePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricInlineDialogModule,
                        ReactiveFormsModule,
                        FabricInputModule
                    ],
                    declarations: [
                        FabricDatePickerCalendarComponent,
                        FabricDatePickerComponent
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
var  /**
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
            var injector = Injector.create({
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
        var close$ = fromEvent(this.document, 'keyup');
        close$
            .pipe(filter((/**
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
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricDrawerService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
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
    function FabricDrawerComponent(componentFactoryResolver, changeDetectorRef, elRef, dialogService, renderer, theme) {
        var _this = _super.call(this, elRef, renderer, theme) || this;
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
        this.createNestedComponent(this.dialogNestedComponent);
        this.changeDetectorRef.detectChanges();
        this.addTheme();
    };
    /**
     * @return {?}
     */
    FabricDrawerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
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
    };
    FabricDrawerComponent.decorators = [
        { type: Component, args: [{
                    template: "<div (document:click)=\"clickOutside($event)\"\n\t class=\"gui-drawer-wrapper\">\n\t<div\n\t\tclass=\"gui-drawer-content\">\n<gui-close-icon (click)=\"closeDrawer()\"></gui-close-icon>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;position:absolute;height:100%;right:0;top:0;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;max-width:400px;height:100%;position:relative;box-shadow:-3px 0 4px 0 #ccc}"]
                }] }
    ];
    /** @nocollapse */
    FabricDrawerComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FabricDrawerService },
        { type: Renderer2 },
        { type: Theme, decorators: [{ type: Inject, args: [themeToken,] }] }
    ]; };
    FabricDrawerComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }],
        closeOnClickOutside: [{ type: Input }]
    };
    return FabricDrawerComponent;
}(DialogComponent));
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
        { type: Component, args: [{
                    selector: selector,
                    template: "\n\t\t<span class=\"gui-close-icon\"></span>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-close-icon-wrapper]': 'true'
                    },
                    styles: [".gui-close-icon-wrapper .gui-close-icon{position:absolute;cursor:pointer;right:8px;top:8px;width:16px;height:16px}.gui-close-icon-wrapper .gui-close-icon::after,.gui-close-icon-wrapper .gui-close-icon::before{position:absolute;left:7px;content:' ';height:16px;width:2px;background-color:#aaa}.gui-close-icon-wrapper .gui-close-icon::before{-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-close-icon-wrapper .gui-close-icon::after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.gui-close-icon-wrapper .gui-close-icon:hover::after,.gui-close-icon-wrapper .gui-close-icon:hover::before{background-color:#464646}"]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
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
        this.geometryResults$ = new Subject();
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
        { type: Injectable }
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
var FabricDropdownComponent = /** @class */ (function () {
    function FabricDropdownComponent(platformId, elementRef, renderer, changeDetectorRef, geometryService) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.geometryService = geometryService;
        this.disabled = false;
        this.dropdownText = 'Dropdown';
        this.arrow = true;
        this.width = 120;
        this.showOnHover = false;
        this.isArrowEnabled = this.arrow;
        this.open = false;
        this.topBorderWidth = 1;
        this.onResize();
    }
    /**
     * @return {?}
     */
    FabricDropdownComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
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
        this.observeGeometry();
    };
    /**
     * @return {?}
     */
    FabricDropdownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
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
    FabricDropdownComponent.prototype.observeGeometry = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription =
            this.geometryService
                .watchGeometry()
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
        if (this.placement === Placement.Right) {
            this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
            this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
        }
        else {
            this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
            this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
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
        { type: Component, args: [{
                    selector: 'gui-dropdown',
                    template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t (mouseenter)=\"tryToOpenOnHover()\"\n\t (mouseleave)=\"hideOnHover()\"\n\t [ngClass]=\"{'gui-disabled': disabled}\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-dropdown-container\">\n\t<div class=\"gui-dropdown-text\">{{dropdownText}}</div>\n\t<div [class.gui-dropdown-arrow]=\"isArrowEnabled\">\n\t\t<gui-arrow-icon></gui-arrow-icon>\n\t</div>\n\t<div #dropdownMenu\n\t\t [style.bottom.px]=\"topPosition\"\n\t\t [style.left.px]=\"horizontalPosition\"\n\t\t [style.top.px]=\"bottomPosition\"\n\t\t class=\"gui-dropdown-menu\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-dropdown]': 'true'
                    },
                    providers: [
                        GeometryService
                    ],
                    styles: [".gui-dropdown .gui-dropdown-container{background:#fff;box-sizing:border-box;border-radius:4px;cursor:pointer;color:#333;display:inline-block;font:14px Arial;padding:8px 32px 8px 12px;position:relative;width:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow svg path{stroke:#464646}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{position:absolute;cursor:pointer;top:8px;right:12px}.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{box-sizing:border-box;background:inherit;display:none;left:-1px;overflow:hidden;width:inherit;position:absolute;z-index:2;border-radius:4px;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{padding:8px 32px 8px 12px;width:inherit;list-style-type:none}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#ccc}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow svg path{stroke:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#616161}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}"]
                }] }
    ];
    /** @nocollapse */
    FabricDropdownComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: GeometryService }
    ]; };
    FabricDropdownComponent.propDecorators = {
        dropdownMenuRef: [{ type: ViewChild, args: ['dropdownMenu', { static: true },] }],
        containerRef: [{ type: ViewChild, args: ['container', { static: true },] }],
        onResize: [{ type: HostListener, args: ['window:resize',] }],
        disabled: [{ type: Input }],
        dropdownText: [{ type: Input }],
        arrow: [{ type: Input }],
        placement: [{ type: Input }],
        width: [{ type: Input }],
        showOnHover: [{ type: Input }]
    };
    return FabricDropdownComponent;
}());
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
    FabricDropdownComponent.prototype.subscription;
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
        { type: Component, args: [{
                    selector: 'gui-dropdown-item',
                    template: "<div class=\"gui-item\">\n\t<ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return DropdownItemComponent;
}());

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
var FabricArrowIconComponent = /** @class */ (function () {
    function FabricArrowIconComponent() {
        this.direction = Direction.RIGHT;
    }
    FabricArrowIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-arrow-icon',
                    template: "\n\t\t<div [style.transform]=\"'rotate(' + direction + 'deg)'\">\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"6.081\" height=\"10.661\" viewBox=\"0 0 6.081 10.661\">\n\t\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\"\n\t\t\t\t\t  transform=\"translate(0.311 0.311)\"\n\t\t\t\t\t  fill=\"none\"\n\t\t\t\t\t  stroke-linecap=\"round\"\n\t\t\t\t\t  stroke-linejoin=\"round\"\n\t\t\t\t\t  stroke-width=\"1.5\"/>\n\t\t\t</svg>\n\t\t</div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-arrow-icon]': 'true',
                        '[class.gui-icon]': 'true'
                    },
                    styles: [".gui-arrow-icon{cursor:pointer}.gui-arrow-icon svg path{stroke:#aaa}.gui-arrow-icon:hover svg path{stroke:#464646}"]
                }] }
    ];
    FabricArrowIconComponent.propDecorators = {
        direction: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
var FabricDropdownModule = /** @class */ (function () {
    function FabricDropdownModule() {
    }
    FabricDropdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
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
        this.unsub$ = new Subject();
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
            var injector = Injector.create({
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
        var close$ = fromEvent(this.document, 'keyup');
        close$
            .pipe(filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key.code === 'Escape'; })), takeUntil(this.unsub$))
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
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricDialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
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
    function FabricDialogComponent(componentFactoryResolver, changeDetectorRef, elRef, renderer, theme, dialogService) {
        var _this = _super.call(this, elRef, renderer, theme) || this;
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
        this.createNestedComponent(this.dialogNestedComponent);
        this.changeDetectorRef.detectChanges();
        this.addTheme();
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
    };
    FabricDialogComponent.decorators = [
        { type: Component, args: [{
                    template: "<div class=\"gui-dialog-blanket\"></div>\n<div (click)=\"clickOutside($event)\"\n\t class=\"gui-dialog-wrapper\">\n\t<div class=\"gui-dialog-content\">\n\t\t<ng-template #container></ng-template>\n\t\t<gui-close-icon (click)=\"closeDialog()\"></gui-close-icon>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-dialog-blanket{background:rgba(0,0,0,.32);position:fixed;height:100%;width:100%;left:0;top:0;pointer-events:none;z-index:1000}.gui-dialog-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;position:fixed;height:100%;width:100%;left:0;top:0;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;pointer-events:auto;z-index:1000}.gui-dialog-wrapper .gui-dialog-content{background-color:#fff;max-width:400px;position:relative;border-radius:4px;box-shadow:0 3px 7px #999;-webkit-animation:.1s ease-in display-dialog;animation:.1s ease-in display-dialog;padding:24px}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-title{color:#333;font-size:20px;margin:0 0 16px}@-webkit-keyframes display-dialog{from{transform:scale(0)}to{transform:scale(1)}}@keyframes display-dialog{from{transform:scale(0)}to{transform:scale(1)}}", ".gui-dark .gui-dialog-wrapper .gui-dialog-content{background:#424242;color:#bdbdbd;box-shadow:0 1px 2px #424242}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after,.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before{background:#bdbdbd}"]
                }] }
    ];
    /** @nocollapse */
    FabricDialogComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: Theme, decorators: [{ type: Inject, args: [themeToken,] }] },
        { type: FabricDialogService, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return FabricDialogService; })),] }] }
    ]; };
    FabricDialogComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }]
    };
    return FabricDialogComponent;
}(DialogComponent));
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
var FabricDialogModule = /** @class */ (function () {
    function FabricDialogModule() {
    }
    FabricDialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricCloseIconModule
                    ],
                    declarations: [
                        FabricDialogComponent
                    ],
                    providers: [
                        FabricDialogService
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
        { type: Component, args: [{
                    selector: 'gui-progress-bar',
                    template: "<div\n\t[style.height.px]=\"height\"\n\t[style.text-align]=\"textAlign\"\n\t[style.width.px]=\"width\"\n\tclass=\"gui-progress-bar\">\n\t<div\n\t\t[style.background]=\"color\"\n\t\t[style.width.%]=\"progress\"\n\t\tclass=\"gui-progress\">\n\t\t<span\n\t\t\t[style.top]=\"textTop\"\n\t\t\tclass=\"gui-progress-text\">\n\t\t\t<ng-content></ng-content>\n\t\t</span>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-progress]': 'true'
                    },
                    styles: [".gui-progress-bar{display:block;font-family:Arial;height:18px;margin-bottom:10px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d6d6d6}.gui-progress-bar .gui-progress{background:#999;border-bottom:inherit;height:inherit;width:0}.gui-primary .gui-progress-bar .gui-progress.gui-progress{background:#2185d0}.gui-secondary .gui-progress-bar .gui-progress.gui-progress{background:#3cb371}.gui-progress-bar .gui-progress-text{position:relative}", ".gui-material .gui-progress-bar{border-color:#5262c5;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-progress{background:#3949ab}.gui-material .gui-progress.gui-primary .gui-progress{background:#6200ee}.gui-material .gui-progress.gui-primary .gui-progress-bar{border-color:#6200ee}.gui-material .gui-progress.gui-secondary .gui-progress{background:#0097a7}.gui-material .gui-progress.gui-secondary .gui-progress-bar{border-color:#0097a7}", ".gui-dark .gui-progress-bar{border-color:#616161;color:#bdbdbd}.gui-dark .gui-progress{background:#424242}.gui-dark .gui-progress.gui-primary .gui-progress{background:#ce93d8}.gui-dark .gui-progress.gui-primary .gui-progress-bar{border-color:#ce93d8;color:#212121}.gui-dark .gui-progress.gui-secondary .gui-progress{background:#80cbc4}.gui-dark .gui-progress.gui-secondary .gui-progress-bar{border-color:#80cbc4;color:#212121}"]
                }] }
    ];
    /** @nocollapse */
    FabricProgressBarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricProgressBarComponent.propDecorators = {
        progress: [{ type: Input }],
        color: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        textTop: [{ type: Input }],
        textAlign: [{ type: Input }],
        primary: [{ type: Input }],
        secondary: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
        width: [{ type: Input }],
        diameter: [{ type: Input }],
        primary: [{ type: Input }],
        secondary: [{ type: Input }]
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
        { type: Component, args: [{
                    selector: 'gui-progress-spinner',
                    template: "<div\n\t[style.height.px]=\"circleSize\"\n\t[style.width.px]=\"circleSize\"\n\tclass=\"gui-progress-spinner\">\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"circumference\"\n\t\t\t[style.stroke-dashoffset]=\"valuePercentage\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-progress-spinner{display:inline-block;position:relative;margin:4px;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-progress-spinner circle{fill:transparent;stroke:#999}.gui-progress-spinner svg{position:absolute}.gui-progress-spinner .circle-inner{animation:2s linear infinite reverse forwards gui-spin-reverse}.gui-progress-spinner .circle-outer{-webkit-animation:2s linear infinite forwards gui-spin;animation:2s linear infinite forwards gui-spin}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner .circle-outer,.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner.gui-progress-spinner{-webkit-animation:none;animation:none}.gui-second-circle-disabled .gui-progress-spinner.gui-progress-spinner .circle-inner{opacity:0}.gui-primary .gui-progress-spinner.gui-progress-spinner circle{stroke:#2185d0}.gui-secondary .gui-progress-spinner.gui-progress-spinner circle{stroke:#3cb371}", ".gui-material .gui-progress-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-progress-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-progress-spinner circle{stroke:#0097a7}", ".gui-dark .gui-progress-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-progress-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-progress-spinner circle{stroke:#80cbc4}"]
                }] }
    ];
    /** @nocollapse */
    FabricProgressSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricProgressSpinnerComponent.propDecorators = {
        value: [{ type: Input }],
        mode: [{ type: Input }],
        color: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
        this.changed = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'gui-radio-button',
                    template: "<label>\n\t<input\n\t\t(click)=\"check()\"\n\t\t[checked]=checked\n\t\t[disabled]=disabled\n\t\t[name]=name\n\t\ttype=\"radio\">\n\t<span class=\"gui-radio-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-radio-button]': 'true'
                    },
                    styles: [".gui-radio-button{display:inline-block;font:14px/18px Arial;padding-left:32px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-radio-button label{cursor:pointer}.gui-radio-button label:hover .gui-radio-checkmark{border-color:#999}.gui-radio-button input{position:absolute;opacity:0;height:0;width:0}.gui-radio-button .gui-radio-checkmark{box-sizing:content-box;border-radius:50%;position:absolute;left:0;height:16px;width:16px;border:1px solid #d6d6d6}.gui-radio-button input:checked+.gui-radio-checkmark{border-color:#999}.gui-radio-button input:focus+.gui-radio-checkmark{border-color:#6fb4e8}.gui-radio-button.gui-disabled.gui-radio-button{color:#ccc;pointer-events:none}.gui-radio-button .gui-radio-checkmark:after{content:\"\";position:absolute;display:none;background:#333;border-radius:50%;width:16px;height:16px;-ms-transform:scale(.5);transform:scale(.5)}.gui-radio-button input:checked+.gui-radio-checkmark:after{box-sizing:content-box;display:block}", ".gui-material .gui-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-radio-button{color:#bdbdbd}.gui-dark .gui-radio-button .gui-radio-checkmark,.gui-dark .gui-radio-button input:checked+.gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:focus+.gui-radio-checkmark{border-color:#ce93d8}.gui-dark .gui-radio-button .gui-radio-checkmark:after{background:#878787}.gui-dark .gui-radio-button.gui-disabled.gui-radio-button{opacity:.36}"]
                }] }
    ];
    /** @nocollapse */
    FabricRadioButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricRadioButtonComponent.propDecorators = {
        name: [{ type: Input }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        changed: [{ type: Output }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
        { type: Component, args: [{
                    selector: 'gui-radio-group',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-radio-group]': 'true'
                    },
                    styles: [".gui-radio-group .gui-radio-button{margin-bottom:10px;display:block}"]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
        if (isPlatformBrowser(this.platformId)) {
            fromEvent(window, 'resize')
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
        { type: Component, args: [{
                    selector: 'gui-tab',
                    template: "<div #tab>\n\n\t<div class=\"gui-tab-menu\">\n\n\t\t<div (click)=\"scrollTabList(false)\"\n\t\t\t *ngIf=\"scrollActive\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon [direction]=\"Direction.LEFT\"></gui-arrow-icon>\n\t\t</div>\n\n\t\t<div class=\"gui-tab-menu-list\">\n\t\t\t<div #tabMenuList\n\t\t\t\t (click)=\"toggleTab(tab)\"\n\t\t\t\t *ngFor=\"let tab of menu\"\n\t\t\t\t [attr.data-tab]=\"tab\"\n\t\t\t\t class=\"gui-tab-menu-item\">\n\t\t\t\t{{tab}}\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div (click)=\"scrollTabList(true)\"\n\t\t\t *ngIf=\"scrollActive\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon></gui-arrow-icon>\n\t\t</div>\n\n\t</div>\n\n\t<div #tabitem\n\t\t class=\"gui-tab-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-tab]': 'true'
                    },
                    styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fff;border-radius:0 0 4px 4px;padding:12px;border:1px solid #d6d6d6}.gui-tab .gui-tab-menu{display:-ms-flexbox;display:flex;margin-bottom:-1px}.gui-tab .gui-tab-menu .gui-tab-menu-list{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden;border-radius:4px 4px 0 0}.gui-tab .gui-tab-menu .gui-tab-menu-item{background:#fafafa;box-sizing:border-box;position:relative;border-radius:4px 4px 0 0;cursor:pointer;display:inline-block;height:34px;margin-right:2px;padding:8px 16px;text-align:center;white-space:nowrap;border:1px solid #d6d6d6}.gui-tab .gui-tab-menu .gui-tab-menu-item:nth-last-child(1){margin-right:0}.gui-tab .gui-tab-menu .scroll-button{box-sizing:border-box;color:#ccc;background:0 0;height:34px;font-weight:700;padding:8px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-menu .scroll-button:hover svg path{stroke:#464646}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fff;border-color:#d6d6d6 #d6d6d6 #fff;border-style:solid;border-width:1px;border-radius:4px 4px 0 0;color:#2185d0}.gui-tab .gui-active.gui-tab-item{display:block}", ".gui-material .gui-tab{font:14px Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{background:#616161;border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent;color:#ce93d8}"]
                }] }
    ];
    /** @nocollapse */
    FabricTabComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    FabricTabComponent.propDecorators = {
        tabRef: [{ type: ViewChild, args: ['tab', { static: false },] }],
        tabItemRef: [{ type: ViewChild, args: ['tabitem', { static: false },] }],
        tabMenuList: [{ type: ViewChildren, args: ['tabMenuList',] }],
        menu: [{ type: Input }],
        active: [{ type: Input }],
        scrollActive: [{ type: Input }]
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
        { type: Component, args: [{
                    selector: 'gui-tab-item',
                    template: "<div [attr.data-tab]=\"tab\"\n\t class=\"gui-tab-item\">\n\t<ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    TabItemComponent.propDecorators = {
        tab: [{ type: Input }]
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
var FabricTabModule = /** @class */ (function () {
    function FabricTabModule() {
    }
    FabricTabModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricArrowIconModule
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
    function FabricTooltipComponent() {
    }
    FabricTooltipComponent.decorators = [
        { type: Component, args: [{
                    template: "{{text}}",
                    host: {
                        '[class.gui-tooltip]': 'true',
                        '[style.left.px]': 'left',
                        '[style.top.px]': 'top'
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".gui-tooltip{position:absolute;display:block;background:rgba(0,0,0,.8);border-style:solid;border-width:0;border-radius:4px;box-sizing:border-box;color:#fff;font:400 14px Arial;vertical-align:middle;padding:8px 12px;-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:10}.gui-tooltip:after{content:'';position:absolute;border-style:solid;border-width:5px;border-color:#333 transparent transparent;margin-left:-5px;top:100%;left:50%}"]
                }] }
    ];
    return FabricTooltipComponent;
}());
if (false) {
    /** @type {?} */
    FabricTooltipComponent.prototype.text;
    /** @type {?} */
    FabricTooltipComponent.prototype.left;
    /** @type {?} */
    FabricTooltipComponent.prototype.top;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricTooltipDirective = /** @class */ (function () {
    function FabricTooltipDirective(componentFactoryResolver, injector, elementRef, applicationRef, document, platformId) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.elementRef = elementRef;
        this.applicationRef = applicationRef;
        this.document = document;
        this.platformId = platformId;
        this.text = '';
        this.tooltipRef = null;
        this.destroy$ = new Subject();
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
        var open$ = fromEvent(this.elementRef.nativeElement, 'mouseenter');
        /** @type {?} */
        var close$ = fromEvent(this.elementRef.nativeElement, 'mouseleave');
        open$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.show(); }));
        close$
            .pipe(takeUntil(this.destroy$))
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
     * @return {?}
     */
    FabricTooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
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
        this.calculateCords();
        tooltipRef.instance.text = this.text;
        tooltipRef.instance.top = this.tooltipTopPosition;
        tooltipRef.instance.left = this.tooltipLeftPosition;
        tooltipRef.changeDetectorRef.detectChanges();
        /** @type {?} */
        var domElement = (/** @type {?} */ (((/** @type {?} */ (tooltipRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domElement);
        this.tooltipRef = tooltipRef;
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
        if (isPlatformBrowser(this.platformId)) {
            this.tooltipTopPosition =
                elementBottom + window.scrollY
                    - elementRef.offsetHeight
                    - FabricTooltipDirective.tooltipHeight
                    - FabricTooltipDirective.tooltipOffset;
            this.tooltipLeftPosition = window.scrollX + elementLeft + elementRef.offsetWidth / 2;
        }
    };
    FabricTooltipDirective.tooltipHeight = 32;
    FabricTooltipDirective.tooltipOffset = 8;
    FabricTooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gui-tooltip]',
                    exportAs: 'guiTooltip'
                },] }
    ];
    /** @nocollapse */
    FabricTooltipDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: ElementRef },
        { type: ApplicationRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    FabricTooltipDirective.propDecorators = {
        text: [{ type: Input, args: ['gui-tooltip',] }]
    };
    return FabricTooltipDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricTooltipDirective.tooltipHeight;
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
    FabricTooltipDirective.prototype.destroy$;
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
        { type: NgModule, args: [{
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
var FabricSelectComponent = /** @class */ (function () {
    function FabricSelectComponent(platformId, elementRef, renderer, changeDetectorRef) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.options = [];
        this.width = 100;
        this.disabled = false;
        this.optionChanged = new EventEmitter();
        this.initAnimationDisabled = true;
        this.open = false;
        this.SELECTED_OPTION_CLASS_NAME = 'gui-selected-option';
        this.onResize();
    }
    /**
     * @return {?}
     */
    FabricSelectComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.windowSize = window.innerHeight;
        }
    };
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
            this.selectedOption = this.placeholder;
        }
        else if (this.placeholder === undefined) {
            this.selectedOption = '...';
        }
        if (changes.selected) {
            this.tryToSelect(this.selected);
        }
    };
    /**
     * @return {?}
     */
    FabricSelectComponent.prototype.calculateDirection = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var containerEl = this.containerRef.nativeElement;
        /** @type {?} */
        var containerHeight = containerEl.offsetHeight;
        /** @type {?} */
        var rectBottom = containerEl.getBoundingClientRect().bottom;
        /** @type {?} */
        var optionsHeight = containerHeight * this.options.length;
        /** @type {?} */
        var availableBottomSpace = this.windowSize - rectBottom - optionsHeight;
        /** @type {?} */
        var availableTopSpace = rectBottom - optionsHeight - containerHeight;
        this.canOpenUpward = availableTopSpace > 0;
        this.canOpenDownward = availableBottomSpace > 0;
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
            this.toggleOptions(!this.open);
            this.initAnimationDisabled = false;
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
        this.open = opened;
        if (this.open) {
            this.openOptions();
        }
        else {
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
        return option === this.selectedOption;
    };
    /**
     * @param {?} option
     * @param {?} optionIndex
     * @return {?}
     */
    FabricSelectComponent.prototype.onSelect = /**
     * @param {?} option
     * @param {?} optionIndex
     * @return {?}
     */
    function (option, optionIndex) {
        this.emitSelectedOption(option);
        this.selectedOption = option;
        this.removeSelectedOption();
        this.setSelectedOption(optionIndex);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    FabricSelectComponent.prototype.tryToSelect = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (this.options.indexOf(option) !== -1) {
            this.selectedOption = option;
        }
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
        if (!this.isOptionSelected(option)) {
            this.optionChanged.emit(option);
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.openOptions = /**
     * @private
     * @return {?}
     */
    function () {
        this.calculateDirection();
        if (this.canOpenDownward || !this.canOpenUpward) {
            this.openDownward();
        }
        else {
            this.openUpward();
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
        }
        if (!optionsElHasOpenClass) {
            this.initAnimationDisabled = true;
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
     * @param {?} optionIndex
     * @return {?}
     */
    FabricSelectComponent.prototype.setSelectedOption = /**
     * @private
     * @param {?} optionIndex
     * @return {?}
     */
    function (optionIndex) {
        /** @type {?} */
        var optionEl = this.optionListRef.nativeElement.querySelector('[data-option-index="' + optionIndex, '"]');
        this.renderer.addClass(optionEl, this.SELECTED_OPTION_CLASS_NAME);
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.removeSelectedOption = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedOptionEl = this.optionListRef.nativeElement.querySelector('.' + this.SELECTED_OPTION_CLASS_NAME);
        if (selectedOptionEl) {
            this.renderer.removeClass(selectedOptionEl, this.SELECTED_OPTION_CLASS_NAME);
        }
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
        { type: Component, args: [{
                    selector: 'gui-select',
                    template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t [ngClass]=\"{'gui-disabled': disabled}\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-select-container\">\n\n\t<div class=\"gui-select-value\">\n\t\t{{selectedOption}}\n\t</div>\n\n\t<span class=\"gui-select-arrow\"></span>\n\n\t<div #optionlist\n\t\t [ngClass]=\"{initAnimationDisabled: initAnimationDisabled}\"\n\t\t class=\"gui-options\">\n\n\t\t<div (click)=\"onSelect(option, optionIndex)\"\n\t\t\t *ngFor=\"let option of options; let optionIndex=index\"\n\t\t\t [attr.data-option-index]=\"optionIndex\"\n\t\t\t [class.gui-selected-option]=\"isOptionSelected(option)\"\n\t\t\t [style.width.px]=\"width\"\n\t\t\t class=\"gui-option\">\n\t\t\t{{option}}\n\t\t</div>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-select]': 'true'
                    },
                    styles: [".gui-select .gui-select-container{box-sizing:content-box;background:#fff;border-radius:4px;cursor:pointer;color:#333;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d6d6d6}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent;position:absolute;top:5px;right:5px;margin:8px;width:0;height:0}.gui-select .gui-select-container .gui-options{background:inherit;left:-1px;margin:8px 0 0;overflow:hidden;padding:0;position:absolute;z-index:2;-webkit-animation:.1s forwards close;animation:.1s forwards close}.gui-select .gui-select-container .gui-options .gui-option{box-sizing:content-box;padding:8px 24px 8px 12px;list-style-type:none}.gui-select .gui-select-container .gui-options .gui-option:hover{background:#dcdcdc}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8;border-radius:4px 4px 0 0}.gui-select.gui-options-opened .gui-options{-webkit-animation:.2s forwards load;animation:.2s forwards load}.gui-select.gui-downward .gui-options{border-color:#6fb4e8;border-style:solid;border-width:1px;border-top:none;border-radius:0 0 4px 4px}.gui-select.gui-downward .gui-option{border-style:solid;border-width:1px 0 0;border-color:#e6e6e6}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959;top:auto;left:5px;bottom:5px}.gui-select.gui-upward .gui-options{border-color:#6fb4e8;border-style:solid;border-width:1px;border-top:none;border-radius:0 0 4px 4px}.gui-select.gui-upward .gui-option{border-style:solid;border-width:0 0 1px;border-color:#e6e6e6;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-selected-option{background:#e6e6e6;font-weight:700}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#ccc transparent transparent}.gui-select .initAnimationDisabled.gui-options{display:none}@-webkit-keyframes load{0%{transform:translateY(-50%) scaleY(0)}100%{transform:translateY(0) scaleY(1)}}@keyframes load{0%{transform:translateY(-50%) scaleY(0)}100%{transform:translateY(0) scaleY(1)}}@-webkit-keyframes close{0%{transform:translateY(0) scaleY(1)}100%{transform:translateY(-50%) scaleY(0)}}@keyframes close{0%{transform:translateY(0) scaleY(1)}100%{transform:translateY(-50%) scaleY(0)}}", ".gui-material .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent}.gui-dark .gui-select .gui-select-container .gui-options{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-options .gui-option{border-color:#757575}.gui-dark .gui-select .gui-select-container .gui-options .gui-option:hover{background:#616161}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8}.gui-dark .gui-select .gui-selected-option{background:#757575}.gui-dark .gui-select .gui-disabled{opacity:.36}", ".gui-light .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;background:#fff;color:#333}.gui-light .gui-select .gui-select-container .gui-options .gui-option:hover{background:#f6f6f5}"]
                }] }
    ];
    /** @nocollapse */
    FabricSelectComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    FabricSelectComponent.propDecorators = {
        optionListRef: [{ type: ViewChild, args: ['optionlist', { static: false },] }],
        containerRef: [{ type: ViewChild, args: ['container', { static: false },] }],
        onResize: [{ type: HostListener, args: ['window:resize',] }],
        options: [{ type: Input }],
        placeholder: [{ type: Input }],
        selected: [{ type: Input }],
        width: [{ type: Input }],
        disabled: [{ type: Input }],
        optionChanged: [{ type: Output }]
    };
    return FabricSelectComponent;
}());
if (false) {
    /** @type {?} */
    FabricSelectComponent.prototype.optionListRef;
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
    FabricSelectComponent.prototype.initAnimationDisabled;
    /** @type {?} */
    FabricSelectComponent.prototype.windowSize;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.canOpenDownward;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.canOpenUpward;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.open;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.SELECTED_OPTION_CLASS_NAME;
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
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricSelectModule = /** @class */ (function () {
    function FabricSelectModule() {
    }
    FabricSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricSelectComponent
                    ],
                    exports: [
                        FabricSelectComponent
                    ]
                },] }
    ];
    return FabricSelectModule;
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
        { type: Component, args: [{
                    selector: 'gui-spinner',
                    template: "<div\n\t[style.height.px]=\"circleSize\"\n\t[style.width.px]=\"circleSize\"\n\tclass=\"gui-spinner\">\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["@-webkit-keyframes gui-spin{from{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@keyframes gui-spin{from{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@-webkit-keyframes gui-spin-reverse{from{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}@keyframes gui-spin-reverse{from{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}.gui-spinner{display:inline-block;position:relative;margin:4px;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-spinner circle{fill:transparent;stroke:#999}.gui-spinner svg{position:absolute}.gui-spinner .circle-inner{animation:2s linear infinite reverse forwards gui-spin-reverse}.gui-spinner .circle-outer{-webkit-animation:2s linear infinite forwards gui-spin;animation:2s linear infinite forwards gui-spin}.gui-primary .gui-spinner.gui-spinner circle{stroke:#2185d0}.gui-secondary .gui-spinner.gui-spinner circle{stroke:#3cb371}", ".gui-material .gui-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-spinner circle{stroke:#0097a7}", ".gui-dark .gui-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-spinner circle{stroke:#80cbc4}"]
                }] }
    ];
    /** @nocollapse */
    FabricSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricSpinnerComponent.propDecorators = {
        color: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
        this.toggleButtonId$ = new Subject();
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
        { type: Injectable }
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
        _this.changed = new EventEmitter();
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
                if (id != _this.buttonId) {
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
        { type: Component, args: [{
                    selector: 'gui-button-toggle',
                    template: "<button (click)=\"tryToToggle($event)\"\n\t\t[disabled]=\"disabled\"\n\t\t[outline]=\"outline\"\n\t\t[primary]=\"primary\"\n\t\t[secondary]=\"secondary\"\n\t\tgui-button>\n\t<ng-content></ng-content>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-button-toggle]': 'true'
                    },
                    styles: [".gui-checked .gui-button{background:#e6e6e6;box-shadow:inset 0 10px 0 -5px #999;color:#333}.gui-checked .gui-button:hover{background:#ccc}.gui-checked .gui-button:active{background:#999}.gui-checked .gui-button.gui-outline{background:0 0;box-shadow:0 0 0 2px #d6d6d6}.gui-checked .gui-button.gui-outline.gui-primary{background:0 0;box-shadow:0 0 0 2px #439de1;color:#2185d0}.gui-checked .gui-button.gui-outline.gui-primary:hover{color:#fff}.gui-checked .gui-button.gui-outline.gui-secondary{background:0 0;box-shadow:0 0 0 2px #5ac88b;color:#3cb371}.gui-checked .gui-button.gui-outline.gui-secondary:hover{color:#fff}.gui-checked .gui-button.gui-primary{background:#2185d0;box-shadow:inset 0 10px 0 -5px #175b8e;color:#fff}.gui-checked .gui-button.gui-secondary{background:#3cb371;box-shadow:inset 0 10px 0 -5px #2b8152;color:#fff}.gui-disabled{pointer-events:none}", ".gui-material .gui-button{background:#3949ab;color:#fff}.gui-material .gui-checked .gui-button{background:#3949ab;box-shadow:inset 0 10px 0 -5px #7885d2;color:#fff}.gui-material .gui-checked .gui-button:hover{background:#5262c5}.gui-material .gui-checked .gui-button:active{background:#4051bf}.gui-material .gui-checked .gui-button.gui-outline{background:#c5cae9;box-shadow:0 0 0 1px #5262c5;color:#3949ab}.gui-material .gui-checked .gui-button.gui-outline.gui-primary{background:#d1c4e9;box-shadow:0 0 0 1px #6200ee;color:#6200ee}.gui-material .gui-checked .gui-button.gui-outline.gui-secondary{background:#b2ebf2;box-shadow:0 0 0 1px #0097a7;color:#0097a7}.gui-material .gui-checked .gui-button.gui-primary{background:#6200ee;box-shadow:inset 0 10px 0 -5px #d1c4e9;color:#fff}.gui-material .gui-checked .gui-button.gui-secondary{background:#0097a7;box-shadow:inset 0 10px 0 -5px #b2ebf2;color:#fff}", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-checked .gui-button{color:#bdbdbd}.gui-dark .gui-checked .gui-button:hover{background:#616161}.gui-dark .gui-checked .gui-button:active{background:#212121}.gui-dark .gui-checked .gui-button.gui-outline{background:#2e2e2e;box-shadow:0 0 0 1px #616161;color:#bdbdbd}.gui-dark .gui-checked .gui-button.gui-outline.gui-primary{background:#b55bc4;box-shadow:0 0 0 1px #ce93d8;color:#212121}.gui-dark .gui-checked .gui-button.gui-outline.gui-secondary{background:#26a69a;box-shadow:0 0 0 1px #80cbc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-primary{background:#ce93d8;box-shadow:inset 0 10px 0 -5px #b55bc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-secondary{background:#80cbc4;box-shadow:inset 0 10px 0 -5px #26a69a;color:#212121}"]
                }] }
    ];
    /** @nocollapse */
    FabricToggleButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ToggleButtonGroupService, decorators: [{ type: Optional }] }
    ]; };
    FabricToggleButtonComponent.propDecorators = {
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        changed: [{ type: Output }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
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
        { type: Component, args: [{
                    selector: 'gui-toggle-button-group',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
/** @type {?} */
var elementResizeDetectorMaker = elementResizeDetectorMaker_;
var ResizeDetector = /** @class */ (function () {
    function ResizeDetector(platformId) {
        this.platformId = platformId;
        this.throttleTime = 25;
        this.unsubscribe$ = new Subject();
        if (isPlatformBrowser(this.platformId)) {
            this.elementResizeDetector = elementResizeDetectorMaker({
                strategy: 'scroll'
            });
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    ResizeDetector.prototype.observe = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var producer = (/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                _this.elementResizeDetector.listenTo(element, (/**
                 * @param {?} htmlElement
                 * @return {?}
                 */
                function (htmlElement) {
                    observer.next(htmlElement);
                }));
            });
            /** @type {?} */
            var source$ = new Observable(producer);
            return source$.pipe(throttleTime(this.throttleTime), filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return f !== undefined; })), takeUntil(this.unsubscribe$));
        }
        return of(element);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    ResizeDetector.prototype.destroy = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this.elementResizeDetector) {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
            this.elementResizeDetector.uninstall(element);
        }
    };
    ResizeDetector.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ResizeDetector.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return ResizeDetector;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ResizeDetector.prototype.throttleTime;
    /**
     * @type {?}
     * @private
     */
    ResizeDetector.prototype.elementResizeDetector;
    /**
     * @type {?}
     * @private
     */
    ResizeDetector.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    ResizeDetector.prototype.platformId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResizeDetectorModule = /** @class */ (function () {
    function ResizeDetectorModule() {
    }
    ResizeDetectorModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        ResizeDetector
                    ]
                },] }
    ];
    return ResizeDetectorModule;
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
    FabricTabModule,
    FabricTooltipModule,
    FabricProgressBarModule,
    FabricProgressSpinnerModule,
    FabricSelectModule,
    FabricSpinnerModule,
    FabricToggleButtonModule,
    FabricToggleButtonGroupModule,
    FabricInputModule,
    ResizeDetectorModule
];
var FabricModule = /** @class */ (function () {
    function FabricModule() {
    }
    FabricModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread([
                        CommonModule
                    ], modules),
                    exports: __spread(modules),
                    providers: []
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
var  /**
 * @abstract
 */
FabricNestedDialogComponent = /** @class */ (function () {
    function FabricNestedDialogComponent() {
    }
    return FabricNestedDialogComponent;
}());

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

export { FabricBadgeModule, FabricButtonComponent, FabricButtonGroupModule, FabricButtonModule, FabricCardModule, FabricCheckboxComponent, FabricCheckboxModule, FabricChipComponent, FabricChipModule, FabricDatePickerModule, FabricDialogModule, FabricDialogService, FabricDrawerModule, FabricDrawerService, FabricDropdownModule, FabricInlineDialogModule, FabricInlineDialogService, FabricInputComponent, FabricInputModule, FabricModule, FabricNestedDialogComponent, FabricProgressBarModule, FabricProgressSpinnerModule, FabricRadioButtonModule, FabricRadioGroupModule, FabricSelectModule, FabricSpinnerModule, FabricTabModule, FabricToggleButtonGroupModule, FabricToggleButtonModule, FabricTooltipModule, InlineDialogPlacement, Placement, ResizeDetector, ResizeDetectorModule, SpinnerMode, Theme, FabricBadgeComponent as ɵa, Indicator as ɵb, FabricRadioButtonComponent as ɵba, FabricRadioGroupComponent as ɵbb, FabricTabComponent as ɵbc, TabItemComponent as ɵbd, FabricTooltipDirective as ɵbe, FabricTooltipComponent as ɵbf, FabricProgressBarComponent as ɵbg, FabricProgressSpinnerComponent as ɵbh, AbstractSpinner as ɵbi, FabricSelectComponent as ɵbj, FabricSpinnerComponent as ɵbk, FabricToggleButtonComponent as ɵbl, ToggleButtonGroupService as ɵbm, FabricToggleButtonGroupComponent as ɵbn, FabricButtonGroupComponent as ɵc, FabricCardComponent as ɵd, FabricInlineDialogComponent as ɵe, DialogComponent as ɵf, FabricReactive as ɵg, InlineDialogGeometryService as ɵh, themeToken as ɵi, FabricDatePickerCalendarComponent as ɵj, FabricDatePickerService as ɵk, FabricDatePickerWeeks as ɵl, FabricDatePickerYears as ɵm, FabricDatePickerComponent as ɵn, FabricDatePickerInlineDialogService as ɵo, FabricCloseIconModule as ɵp, selector as ɵq, FabricCloseIconComponent as ɵr, FabricDrawerComponent as ɵs, DialogService as ɵt, FabricArrowIconModule as ɵu, FabricArrowIconComponent as ɵv, FabricDropdownComponent as ɵw, GeometryService as ɵx, DropdownItemComponent as ɵy, FabricDialogComponent as ɵz };
//# sourceMappingURL=generic-ui-fabric.js.map
