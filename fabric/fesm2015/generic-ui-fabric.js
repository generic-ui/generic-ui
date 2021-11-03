import * as i0 from '@angular/core';
import { Directive, Input, Component, ChangeDetectionStrategy, ViewEncapsulation, NgModule, EventEmitter, ViewChild, Output, Injectable, InjectionToken, PLATFORM_ID, Inject, forwardRef, ViewContainerRef, Injector, HostListener, ViewChildren, Optional } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import * as i1$1 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { takeUntil, distinctUntilChanged, filter, take, skip, debounceTime, map } from 'rxjs/operators';
import { Subject, BehaviorSubject, fromEvent, timer, ReplaySubject } from 'rxjs';

var Theme;
(function (Theme) {
    Theme["FABRIC"] = "FABRIC";
    Theme["MATERIAL"] = "MATERIAL";
    Theme["GENERIC"] = "GENERIC";
    Theme["LIGHT"] = "LIGHT";
    Theme["DARK"] = "DARK";
})(Theme || (Theme = {}));

class Indicator {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.outline = false;
        this.PRIMARY_CLASS_NAME = 'gui-primary';
        this.SECONDARY_CLASS_NAME = 'gui-secondary';
        this.OUTLINE_CLASS_NAME = 'gui-outline';
    }
    ngOnChanges(changes) {
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
    }
    addClass(className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }
    removeClass(className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }
}
Indicator.ɵfac = function Indicator_Factory(t) { return new (t || Indicator)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
Indicator.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: Indicator, inputs: { primary: "primary", secondary: "secondary", outline: "outline" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Indicator, [{
        type: Directive
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { primary: [{
            type: Input
        }], secondary: [{
            type: Input
        }], outline: [{
            type: Input
        }] }); })();

const _c0$n = ["*"];
class FabricBadgeComponent extends Indicator {
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
    }
}
FabricBadgeComponent.ɵfac = function FabricBadgeComponent_Factory(t) { return new (t || FabricBadgeComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricBadgeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricBadgeComponent, selectors: [["gui-badge"]], hostVars: 2, hostBindings: function FabricBadgeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-badge", true);
    } }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$n, decls: 1, vars: 0, template: function FabricBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: [".gui-badge{background:#e6e6e6;border-radius:4px;color:#595959;display:inline-block;font-family:Arial;font-size:12px;font-weight:bold;margin:0 0 0 2px;padding:4px 9.6px;position:relative;-ms-transform:translateX(-70%) translateY(-80%);transform:translate(-70%) translateY(-80%);z-index:1}.gui-badge.gui-primary{background:#2185d0;color:#fff}.gui-badge.gui-primary.gui-outline{color:#2185d0}.gui-badge.gui-primary:hover{background:#1e77ba}.gui-badge.gui-primary:active{background:#1a69a4;color:#fff}.gui-badge.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-badge.gui-primary.gui-badge{background:#439de1}.gui-badge.gui-secondary{background:#3cb371;color:#fff}.gui-badge.gui-secondary.gui-outline{color:#3cb371}.gui-badge.gui-secondary.gui-button:hover{background:#36a065}.gui-badge.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-badge.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-badge.gui-secondary.gui-badge{background:#5ac88b}.gui-badge.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-badge.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-badge.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-badge.gui-outline.gui-badge{background:#fff}.gui-badge.gui-outline.gui-primary{border-color:#439de1}.gui-badge.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-badge.gui-outline.gui-secondary{border-color:#5ac88b}.gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}\n", ".gui-material .gui-badge{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}.gui-material .gui-badge.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-badge.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-badge.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-badge.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-badge.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-badge.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-badge.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-badge.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-badge.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-badge.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-badge.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-badge.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-badge.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-badge.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-badge.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-badge.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-badge.gui-outline.gui-badge{background:#fff}.gui-material .gui-badge.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-badge.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}\n", ".gui-dark .gui-badge{background:#333;color:#bdbdbd}.gui-dark .gui-badge.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-badge.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-badge.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-badge.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-badge.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-badge.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-badge.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-badge.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-badge.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-badge.gui-outline.gui-badge{background:#121212}.gui-dark .gui-badge.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-badge.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-badge.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricBadgeComponent, [{
        type: Component,
        args: [{
                selector: 'gui-badge',
                templateUrl: 'badge.component.html',
                styleUrls: [
                    './badge.ngx.scss',
                    './themes/badge.material.ngx.scss',
                    './themes/badge.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-badge]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();

class FabricBadgeModule {
}
FabricBadgeModule.ɵfac = function FabricBadgeModule_Factory(t) { return new (t || FabricBadgeModule)(); };
FabricBadgeModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricBadgeModule });
FabricBadgeModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricBadgeModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricBadgeComponent
                ],
                exports: [
                    FabricBadgeComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricBadgeModule, { declarations: [FabricBadgeComponent], imports: [CommonModule], exports: [FabricBadgeComponent] }); })();

const _c0$m = ["gui-button", ""];
const _c1$4 = ["*"];
class FabricButtonComponent extends Indicator {
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.link = false;
        this.text = false;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
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
    }
}
FabricButtonComponent.ɵfac = function FabricButtonComponent_Factory(t) { return new (t || FabricButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricButtonComponent, selectors: [["button", "gui-button", ""], ["a", "gui-button", ""]], hostVars: 2, hostBindings: function FabricButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-button", true);
    } }, inputs: { link: "link", text: "text" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0$m, ngContentSelectors: _c1$4, decls: 1, vars: 0, template: function FabricButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: [".gui-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-align:start;align-items:flex-start;background:#e6e6e6;border-radius:4px;border-style:none;box-sizing:border-box;color:#595959;cursor:pointer;display:inline-block;font-family:Arial;font-size:13.3333px;letter-spacing:normal;outline:none;padding:10px 20px;text-align:center;text-indent:0;text-rendering:auto;text-shadow:none;text-transform:none;transition:background .2s;word-spacing:normal;-ms-writing-mode:lr-tb!important;writing-mode:horizontal-tb!important}.gui-button.gui-outline:focus{box-shadow:0 0 0 2px #d6d6d6}.gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #439de1}.gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #5ac88b}.gui-button.gui-primary{background:#2185d0;color:#fff}.gui-button.gui-primary.gui-outline{color:#2185d0}.gui-button.gui-primary:hover{background:#1e77ba}.gui-button.gui-primary:active{background:#1a69a4;color:#fff}.gui-button.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-button.gui-primary.gui-badge{background:#439de1}.gui-button.gui-secondary{background:#3cb371;color:#fff}.gui-button.gui-secondary.gui-outline{color:#3cb371}.gui-button.gui-secondary.gui-button:hover{background:#36a065}.gui-button.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-button.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-button.gui-secondary.gui-badge{background:#5ac88b}.gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-button.gui-link:focus{text-decoration:underline}.gui-button.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-button.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-button.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-button.gui-outline.gui-badge{background:#fff}.gui-button.gui-outline.gui-primary{border-color:#439de1}.gui-button.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-button.gui-outline.gui-secondary{border-color:#5ac88b}.gui-button.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}.gui-button.gui-text{background:transparent;border:0}.gui-button.gui-text:hover{background:#e6e6e6}.gui-button.gui-text:focus{background:#e6e6e6}.gui-button.gui-text.gui-primary{color:#2185d0}.gui-button.gui-text.gui-primary:hover{background:#2185d0;color:#fff}.gui-button.gui-text.gui-primary:focus{background:#2185d0;color:#fff}.gui-button.gui-text.gui-secondary{color:#3cb371}.gui-button.gui-text.gui-secondary:hover{background:#3cb371;color:#fff}.gui-button.gui-text.gui-secondary:focus{background:#3cb371;color:#fff}.gui-button.gui-text.gui-button:disabled{background:transparent}.gui-button.gui-text.gui-button:disabled .gui-text-disabled{display:inline-block}.gui-button:hover{background:#cccccc;color:#333}.gui-button:active{background:#999;color:#333}.gui-button:disabled{color:#ccc;cursor:default;pointer-events:none}\n", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-button.gui-outline:focus{box-shadow:0 0 0 2px #616161}.gui-dark .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #ce93d8}.gui-dark .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #80cbc4}.gui-dark .gui-button.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-button.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-button.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-button.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-button.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-button.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-button.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-button.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-button.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-button.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-button.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-button.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-dark .gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-dark .gui-button.gui-link:focus{text-decoration:underline}.gui-dark .gui-button.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-button.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-button.gui-outline.gui-badge{background:#121212}.gui-dark .gui-button.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-button.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-button.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-button.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}.gui-dark .gui-button:hover{background:#616161}.gui-dark .gui-button:active{background:#212121}.gui-dark .gui-button:disabled{opacity:.36}\n", ".gui-light .gui-button{background:#f6f5f4;border-color:#d8d7d6;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light .gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-light .gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-light .gui-button.gui-link:focus{text-decoration:underline}.gui-light .gui-button:hover{background:#ecebeb}.gui-light .gui-button:active{background:#f6f5f4}.gui-light .gui-button:disabled{opacity:.5}\n", ".gui-material .gui-button{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-button.gui-outline:focus{box-shadow:0 0 0 1px #5262c5}.gui-material .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 1px #6200ee}.gui-material .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 1px #0097a7}.gui-material .gui-button.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-button.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-button.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-button.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-button.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-button.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-button.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-button.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-button.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-button.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-button.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-button.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-button.gui-link{background:transparent;border:0;color:#3949ab}.gui-material .gui-button.gui-link:hover{color:#4051bf}.gui-material .gui-button.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-button.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-button.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-button.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-button.gui-outline.gui-badge{background:#fff}.gui-material .gui-button.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-button.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}.gui-material .gui-button:hover{background:#5262c5}.gui-material .gui-button:active{background:#4051bf}.gui-material .gui-button:disabled{background:#c5cae9;color:#7885d2}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricButtonComponent, [{
        type: Component,
        args: [{
                selector: 'button[gui-button], a[gui-button]',
                templateUrl: './button.component.html',
                styleUrls: [
                    './button.ngx.scss',
                    './themes/button.dark.ngx.scss',
                    './themes/button.light.ngx.scss',
                    './themes/button.material.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-button]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { link: [{
            type: Input
        }], text: [{
            type: Input
        }] }); })();

class FabricButtonModule {
}
FabricButtonModule.ɵfac = function FabricButtonModule_Factory(t) { return new (t || FabricButtonModule)(); };
FabricButtonModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricButtonModule });
FabricButtonModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricButtonComponent
                ],
                exports: [
                    FabricButtonComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricButtonModule, { declarations: [FabricButtonComponent], imports: [CommonModule], exports: [FabricButtonComponent] }); })();

const _c0$l = ["*"];
class FabricButtonGroupComponent {
}
FabricButtonGroupComponent.ɵfac = function FabricButtonGroupComponent_Factory(t) { return new (t || FabricButtonGroupComponent)(); };
FabricButtonGroupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricButtonGroupComponent, selectors: [["gui-button-group"]], hostVars: 2, hostBindings: function FabricButtonGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-button-group", true);
    } }, ngContentSelectors: _c0$l, decls: 1, vars: 0, template: function FabricButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: [".gui-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-button-group .gui-button{border-radius:0}.gui-button-group .gui-button:not(:last-child){border-right:none;margin:0}.gui-button-group .gui-button:last-child{border-radius:0 4px 4px 0}.gui-button-group .gui-button:first-child{border-radius:4px 0 0 4px}.gui-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricButtonGroupComponent, [{
        type: Component,
        args: [{
                selector: 'gui-button-group',
                templateUrl: './button-group.component.html',
                styleUrls: [
                    './button-group.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-button-group]': 'true'
                }
            }]
    }], null, null); })();

class FabricButtonGroupModule {
}
FabricButtonGroupModule.ɵfac = function FabricButtonGroupModule_Factory(t) { return new (t || FabricButtonGroupModule)(); };
FabricButtonGroupModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricButtonGroupModule });
FabricButtonGroupModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricButtonGroupModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricButtonGroupComponent
                ],
                exports: [
                    FabricButtonGroupComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricButtonGroupModule, { declarations: [FabricButtonGroupComponent], imports: [CommonModule], exports: [FabricButtonGroupComponent] }); })();

const _c0$k = function (a0) { return { "gui-card-content-block-item": a0 }; };
function FabricCardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const block_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0$k, ctx_r0.isContentBlockEnabled()));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", block_r1, " ");
} }
const _c1$3 = function (a0) { return { "gui-card-img": a0 }; };
const _c2$2 = function (a0) { return { "gui-card-title": a0 }; };
const _c3$1 = function (a0) { return { "gui-card-content-block": a0 }; };
const _c4 = ["*"];
class FabricCardComponent {
    constructor() {
        this.contentBlock = [];
    }
    isTitleEnabled() {
        return !!this.title;
    }
    isImgEnabled() {
        return !!this.image;
    }
    isContentBlockEnabled() {
        return !!this.contentBlock;
    }
}
FabricCardComponent.ɵfac = function FabricCardComponent_Factory(t) { return new (t || FabricCardComponent)(); };
FabricCardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricCardComponent, selectors: [["gui-card"]], hostVars: 2, hostBindings: function FabricCardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-card", true);
    } }, inputs: { title: "title", image: "image", alt: "alt", contentBlock: "contentBlock" }, ngContentSelectors: _c4, decls: 9, vars: 13, consts: [[1, "gui-card-body"], [1, "gui-card-image-wrapper"], [3, "ngClass", "alt", "src"], [3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "gui-content"]], template: function FabricCardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵtemplate(6, FabricCardComponent_div_6_Template, 2, 4, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵprojection(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("alt", ctx.alt);
        i0.ɵɵpropertyInterpolate("src", ctx.image, i0.ɵɵsanitizeUrl);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1$3, ctx.isImgEnabled()));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c2$2, ctx.isTitleEnabled()));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c3$1, ctx.isContentBlockEnabled()));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.contentBlock);
    } }, directives: [i1.NgClass, i1.NgForOf], styles: [".gui-card .gui-card-img{border-radius:4px 4px 0 0;height:auto;margin:0 0 12px;width:350px}.gui-card .gui-card-body{background:#fff;border-radius:4px;box-shadow:0 1px 3px #999;box-sizing:border-box;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;margin:0;padding:0 0 20px;transition:transform .3s ease-in-out;width:350px}.gui-card .gui-card-body:hover{box-shadow:0 3px 6px -4px rgba(0,0,0,.122),0 6px 16px rgba(0,0,0,.078),0 9px 28px 8px rgba(0,0,0,.051)}.gui-card .gui-card-body .gui-card-title{font-size:20px;font-weight:bold;margin:0 0 12px;padding:0 20px}.gui-card .gui-card-body .gui-card-content-block{margin:0 0 12px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#d6d6d6;border-top-style:solid;border-top-width:1px;padding:12px 20px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#d6d6d6;border-bottom-style:solid;border-bottom-width:1px}.gui-card .gui-card-body .gui-content{padding:0 20px}\n", ".gui-material .gui-card .gui-card-body{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-card .gui-card-body{background:#121212;border-color:#616161;color:#bdbdbd}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#616161}.gui-dark .gui-content-block .gui-card-content-block{border-color:#616161}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricCardComponent, [{
        type: Component,
        args: [{
                selector: 'gui-card',
                templateUrl: './card.component.html',
                styleUrls: [
                    './card.ngx.scss',
                    './themes/card.material.ngx.scss',
                    './themes/card.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-card]': 'true'
                }
            }]
    }], null, { title: [{
            type: Input
        }], image: [{
            type: Input
        }], alt: [{
            type: Input
        }], contentBlock: [{
            type: Input
        }] }); })();

class FabricCardModule {
}
FabricCardModule.ɵfac = function FabricCardModule_Factory(t) { return new (t || FabricCardModule)(); };
FabricCardModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricCardModule });
FabricCardModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricCardModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricCardComponent
                ],
                exports: [
                    FabricCardComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricCardModule, { declarations: [FabricCardComponent], imports: [CommonModule], exports: [FabricCardComponent] }); })();

const _c0$j = ["input"];
const _c1$2 = ["*"];
class FabricCheckboxComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.disabled = false;
        this.readonly = false;
        this.indeterminate = false;
        this.changed = new EventEmitter();
        this.checked = false;
    }
    ngOnChanges(changes) {
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
    }
    ngAfterViewInit() {
        this.inputRef.nativeElement.indeterminate = this.indeterminate;
    }
    check(event) {
        event.stopPropagation();
        this.checked = !this.checked;
        this.changed.emit(this.checked);
    }
}
FabricCheckboxComponent.ɵfac = function FabricCheckboxComponent_Factory(t) { return new (t || FabricCheckboxComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricCheckboxComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricCheckboxComponent, selectors: [["gui-checkbox"]], viewQuery: function FabricCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$j, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputRef = _t.first);
    } }, hostVars: 2, hostBindings: function FabricCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-checkbox", true);
    } }, inputs: { name: "name", inputChecked: ["checked", "inputChecked"], disabled: "disabled", readonly: "readonly", indeterminate: "indeterminate" }, outputs: { changed: "changed" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1$2, decls: 5, vars: 3, consts: [["type", "checkbox", 3, "checked", "disabled", "name", "click"], ["input", ""], [1, "gui-checkmark"]], template: function FabricCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "label");
        i0.ɵɵelementStart(1, "input", 0, 1);
        i0.ɵɵlistener("click", function FabricCheckboxComponent_Template_input_click_1_listener($event) { return ctx.check($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "span", 2);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled)("name", ctx.name);
    } }, styles: [".gui-checkbox{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:24px;padding-left:32px;position:relative}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{height:0;opacity:0;position:absolute;width:0}.gui-checkbox .gui-checkmark{border-color:#575757;border-radius:4px;border-style:solid;border-width:2px;box-sizing:content-box;height:20px;left:0;position:absolute;width:20px}.gui-checkbox input:checked+.gui-checkmark{border-color:#575757}.gui-checkbox.gui-disabled.gui-checkbox{color:#ccc;pointer-events:none}.gui-checkbox.gui-readonly.gui-checkbox{pointer-events:none}.gui-checkbox .gui-checkmark:after{content:\" \";display:none;left:6px;position:absolute;-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-checkbox input:checked+.gui-checkmark:after{box-sizing:content-box;display:block}.gui-checkbox .gui-checkmark:after{border-color:#575757;border-style:solid;border-width:0 3.2px 3.2px 0;height:12px;width:5.2px}.gui-checkbox input:indeterminate+.gui-checkmark:after{display:block;height:10px;left:9px;top:4px;-ms-transform:rotate(90deg);transform:rotate(90deg);width:0}\n", ".gui-material .gui-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox label:hover .gui-checkmark{border-color:#575757}.gui-material .gui-checkbox .gui-checkmark{border-color:#999}.gui-material .gui-checkbox input:checked+.gui-checkmark{background:#3949ab;border-color:#3949ab}.gui-material .gui-checkbox .gui-checkmark:after{border-color:#fff}.gui-material .gui-checkbox.gui-indeterminate .gui-checkmark{background:#3949ab;border-color:#3949ab}\n", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox .gui-checkmark:after{border-color:#878787}.gui-dark .gui-checkbox.gui-disabled.gui-checkbox{opacity:.36}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'gui-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: [
                    './checkbox.ngx.scss',
                    './themes/checkbox.material.ngx.scss',
                    './themes/checkbox.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-checkbox]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { inputRef: [{
            type: ViewChild,
            args: ['input', { static: false }]
        }], name: [{
            type: Input
        }], inputChecked: [{
            type: Input,
            args: ['checked']
        }], disabled: [{
            type: Input
        }], readonly: [{
            type: Input
        }], indeterminate: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();

class FabricCheckboxModule {
}
FabricCheckboxModule.ɵfac = function FabricCheckboxModule_Factory(t) { return new (t || FabricCheckboxModule)(); };
FabricCheckboxModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricCheckboxModule });
FabricCheckboxModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricCheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricCheckboxComponent
                ],
                exports: [
                    FabricCheckboxComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricCheckboxModule, { declarations: [FabricCheckboxComponent], imports: [CommonModule], exports: [FabricCheckboxComponent] }); })();

const _c0$i = ["*"];
class FabricChipComponent extends Indicator {
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
    }
}
FabricChipComponent.ɵfac = function FabricChipComponent_Factory(t) { return new (t || FabricChipComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricChipComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricChipComponent, selectors: [["gui-chip"]], hostVars: 2, hostBindings: function FabricChipComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-chip", true);
    } }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$i, decls: 1, vars: 0, template: function FabricChipComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: [".gui-chip{background:#e6e6e6;border-radius:4px;box-sizing:border-box;color:#595959;display:inline-block;font-family:Arial;font-size:14px;font-weight:bold;margin:0 2px;padding:9.6px 12px}.gui-chip.gui-primary{background:#2185d0;color:#fff}.gui-chip.gui-primary.gui-outline{color:#2185d0}.gui-chip.gui-primary:hover{background:#1e77ba}.gui-chip.gui-primary:active{background:#1a69a4;color:#fff}.gui-chip.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-chip.gui-primary.gui-badge{background:#439de1}.gui-chip.gui-secondary{background:#3cb371;color:#fff}.gui-chip.gui-secondary.gui-outline{color:#3cb371}.gui-chip.gui-secondary.gui-button:hover{background:#36a065}.gui-chip.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-chip.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-chip.gui-secondary.gui-badge{background:#5ac88b}.gui-chip.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-chip.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-chip.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-chip.gui-outline.gui-badge{background:#fff}.gui-chip.gui-outline.gui-primary{border-color:#439de1}.gui-chip.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-chip.gui-outline.gui-secondary{border-color:#5ac88b}.gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}\n", ".gui-material .gui-chip{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-chip.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-chip.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-chip.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-chip.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-chip.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-chip.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-chip.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-chip.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-chip.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-chip.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-chip.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-chip.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-chip.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-chip.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-chip.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-chip.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-chip.gui-outline.gui-badge{background:#fff}.gui-material .gui-chip.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-chip.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}\n", ".gui-dark .gui-chip{background:#333;color:#bdbdbd}.gui-dark .gui-chip.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-chip.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-chip.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-chip.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-chip.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-chip.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-chip.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-chip.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-chip.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-chip.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-chip.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-chip.gui-outline.gui-badge{background:#121212}.gui-dark .gui-chip.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-chip.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-chip.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}\n", ".gui-light .gui-chip{background:#f6f5f4;border-color:#333;border-style:solid;border-width:1px;color:#333}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricChipComponent, [{
        type: Component,
        args: [{
                selector: 'gui-chip',
                templateUrl: 'chip.component.html',
                styleUrls: [
                    './chip.ngx.scss',
                    './themes/chip.material.ngx.scss',
                    './themes/chip.dark.ngx.scss',
                    './themes/chip.light.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-chip]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();

class FabricChipModule {
}
FabricChipModule.ɵfac = function FabricChipModule_Factory(t) { return new (t || FabricChipModule)(); };
FabricChipModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricChipModule });
FabricChipModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricChipModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricChipComponent
                ],
                exports: [
                    FabricChipComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricChipModule, { declarations: [FabricChipComponent], imports: [CommonModule], exports: [FabricChipComponent] }); })();

class FabricReactive {
    constructor() {
        this.unsubscribe$ = new Subject();
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    unsubscribe() {
        if (this.unsubscribe$.isStopped) {
            return;
        }
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    takeUntil() {
        return takeUntil(this.unsubscribe$);
    }
}
FabricReactive.ɵfac = function FabricReactive_Factory(t) { return new (t || FabricReactive)(); };
FabricReactive.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FabricReactive });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricReactive, [{
        type: Directive
    }], function () { return []; }, null); })();

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

class FabricDatePickerService {
    constructor() {
        this.selectedDate = new Date();
        this.selectedDate$ = new BehaviorSubject(this.selectedDate);
    }
    observeSelectedDate() {
        return this.selectedDate$.asObservable();
    }
    dateSelected(date) {
        this.selectedDate = new Date(date.getTime());
        this.setSelectedDateTime();
        this.selectedDate$.next(this.selectedDate);
    }
    changeTime(timeValues, date) {
        this.selectedTime = timeValues;
        if (!this.selectedDate) {
            this.selectedDate = date;
        }
        this.setSelectedDateTime();
    }
    next() {
        this.dateSelected(this.selectedDate);
    }
    setSelectedDateTime() {
        if (this.selectedTime) {
            this.selectedDate.setHours(this.selectedTime.hours);
            this.selectedDate.setMinutes(this.selectedTime.minutes);
            this.selectedDate.setSeconds(this.selectedTime.seconds);
        }
    }
}
FabricDatePickerService.ɵfac = function FabricDatePickerService_Factory(t) { return new (t || FabricDatePickerService)(); };
FabricDatePickerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDatePickerService, factory: FabricDatePickerService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerService, [{
        type: Injectable
    }], null, null); })();

class FabricDatePickerCompositionService {
    constructor() {
        this.datePickerFormat$ = new BehaviorSubject(FabricDatePickerComposition.DATE_PICKER);
    }
    onComposition() {
        return this.datePickerFormat$.asObservable();
    }
    next(datePipeOptions) {
        this.datePickerFormat$.next(this.getComposition(datePipeOptions));
    }
    getComposition(datePipeOptions) {
        const removeDoubles = datePipeOptions.split(':').join(' '), removeDash = removeDoubles.split('/').join(' '), removeDot = removeDash.split('.').join(' '), removeComa = removeDot.split(',').join(' '), formatArray = removeComa.split(' ');
        let composition;
        formatArray.forEach((formatItem) => {
            const isDays = formatItem.toLowerCase().includes('d'), isMonths = formatItem.includes('M'), isYears = formatItem.toLowerCase().includes('y'), showHours = formatItem.toLowerCase().includes('h'), showMinutes = formatItem.includes('m'), showSeconds = formatItem.toLowerCase().includes('s'), isMeridian = formatItem.includes('h'), showDatePicker = isDays || isMonths || isYears, showTimePicker = showHours || showMinutes || showSeconds;
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
    }
}
FabricDatePickerCompositionService.ɵfac = function FabricDatePickerCompositionService_Factory(t) { return new (t || FabricDatePickerCompositionService)(); };
FabricDatePickerCompositionService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDatePickerCompositionService, factory: FabricDatePickerCompositionService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerCompositionService, [{
        type: Injectable
    }], null, null); })();

class FabricDatePickerWeeks {
    getDaysInMonths(year, month) {
        this.resetWeeks();
        const numberOfDaysInMonth = (new Date(year, month + 1, 0)).getDate();
        for (let i = 1; i <= numberOfDaysInMonth; i++) {
            this.createWeeks(new Date(year, month, i));
        }
        return this.weeks;
    }
    createWeeks(date) {
        const day = date.getDate();
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
    }
    createWeek(date, week) {
        for (let i = 1; i <= 7; i++) {
            const isFirstDaySunday = date.getDay() === 0 && this.weeks[0].length === 0;
            let day;
            if (isFirstDaySunday) {
                day = date.getDate() - 6;
            }
            else {
                day = date.getDate() - date.getDay() + i;
            }
            const dayOfWeek = new Date(date.setDate(day));
            if (week.length < 7) {
                week.push(dayOfWeek);
            }
        }
    }
    getLastDayNumber(week) {
        if (week.length === 7) {
            return week[week.length - 1].getDate();
        }
        return 0;
    }
    getLastDayDate(week) {
        const lastDay = week[week.length - 1].getDate();
        return new Date(week[week.length - 1].setDate(lastDay));
    }
    resetWeeks() {
        this.weeks = [];
        this.weeks[0] = [];
        this.weeks[1] = [];
        this.weeks[2] = [];
        this.weeks[3] = [];
        this.weeks[4] = [];
        this.weeks[5] = [];
    }
}
FabricDatePickerWeeks.ɵfac = function FabricDatePickerWeeks_Factory(t) { return new (t || FabricDatePickerWeeks)(); };
FabricDatePickerWeeks.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDatePickerWeeks, factory: FabricDatePickerWeeks.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerWeeks, [{
        type: Injectable
    }], null, null); })();

class FabricDatePickerYears {
    constructor() {
        this.inc = 10;
    }
    getYears(selectedYear) {
        this.minYear = selectedYear - 50;
        this.maxYear = selectedYear + 50;
        const yearsRange = this.maxYear - this.minYear;
        let years = [], rows = [];
        years = this.createYearsPool(this.minYear, yearsRange, years);
        rows = this.divideYearsPool(years, rows);
        return this.rowsForDisplay = this.createRowsForDisplay(rows, selectedYear);
    }
    prevYearRange(year) {
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
    }
    nextYearRange(year) {
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
    }
    createYearsPool(minYear, yearsRange, years) {
        for (let i = 0; i <= yearsRange; i++) {
            years.push(minYear + i);
        }
        return years;
    }
    divideYearsPool(years, rows) {
        for (let i = 0; i < years.length; i += 5) {
            rows.push(years.slice(i, i + 5));
        }
        return rows;
    }
    createRowsForDisplay(rows, selectedYear) {
        if (selectedYear >= this.minYear || selectedYear <= this.maxYear) {
            for (let i = 0; i < rows.length; i++) {
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
    }
}
FabricDatePickerYears.ɵfac = function FabricDatePickerYears_Factory(t) { return new (t || FabricDatePickerYears)(); };
FabricDatePickerYears.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDatePickerYears, factory: FabricDatePickerYears.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerYears, [{
        type: Injectable
    }], null, null); })();

class FabricDatePickerYearsService {
    constructor() {
        this.years$ = new Subject();
    }
    onYears() {
        return this.years$.asObservable();
    }
    next(years) {
        this.years$.next(years);
    }
}
FabricDatePickerYearsService.ɵfac = function FabricDatePickerYearsService_Factory(t) { return new (t || FabricDatePickerYearsService)(); };
FabricDatePickerYearsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDatePickerYearsService, factory: FabricDatePickerYearsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerYearsService, [{
        type: Injectable
    }], null, null); })();

class FabricDatePickerCalendarService {
    constructor() {
        this.activeMonth$ = new Subject();
        this.activeYear$ = new Subject();
    }
    onActiveMonth() {
        return this.activeMonth$.asObservable();
    }
    onActiveYear() {
        return this.activeYear$.asObservable();
    }
    nextMonth(year, month) {
        if (month === 11) {
            this.activeYear$.next(year + 1);
            this.selectMonth(0);
        }
        else {
            this.selectMonth(month + 1);
        }
    }
    prevMonth(year, month) {
        if (month === 0) {
            this.activeYear$.next(year - 1);
            this.selectMonth(11);
        }
        else {
            this.selectMonth(month - 1);
        }
    }
    selectYear(year) {
        this.activeYear$.next(year);
    }
    selectMonth(month) {
        this.activeMonth$.next(month);
    }
}
FabricDatePickerCalendarService.ɵfac = function FabricDatePickerCalendarService_Factory(t) { return new (t || FabricDatePickerCalendarService)(); };
FabricDatePickerCalendarService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDatePickerCalendarService, factory: FabricDatePickerCalendarService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerCalendarService, [{
        type: Injectable
    }], null, null); })();

class FabricDatePickerCalendarViewService {
    constructor() {
        this.activeView$ = new Subject();
    }
    onActiveView() {
        return this.activeView$.asObservable();
    }
    switchView(viewName) {
        this.activeView$.next(viewName);
    }
}
FabricDatePickerCalendarViewService.ɵfac = function FabricDatePickerCalendarViewService_Factory(t) { return new (t || FabricDatePickerCalendarViewService)(); };
FabricDatePickerCalendarViewService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDatePickerCalendarViewService, factory: FabricDatePickerCalendarViewService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerCalendarViewService, [{
        type: Injectable
    }], null, null); })();

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

const months = [
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

class FabricArrowIconComponent {
    constructor() {
        this.direction = Direction.RIGHT;
    }
}
FabricArrowIconComponent.ɵfac = function FabricArrowIconComponent_Factory(t) { return new (t || FabricArrowIconComponent)(); };
FabricArrowIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricArrowIconComponent, selectors: [["gui-arrow-icon"]], hostVars: 4, hostBindings: function FabricArrowIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-arrow-icon", true)("gui-icon", true);
    } }, inputs: { direction: "direction" }, decls: 2, vars: 2, consts: [["height", "10.661", "viewBox", "0 0 6.081 10.661", "width", "6.081", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M.75.75,5.02,5.02.75,9.29", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "transform", "translate(0.311 0.311)"]], template: function FabricArrowIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 0);
        i0.ɵɵelement(1, "path", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("transform", "rotate(" + ctx.direction + "deg)");
    } }, styles: [".gui-arrow-icon{cursor:pointer}.gui-arrow-icon svg path{stroke:#aaa;transition:stroke .2s ease-in-out}.gui-arrow-icon:hover svg path{stroke:#464646}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricArrowIconComponent, [{
        type: Component,
        args: [{
                selector: 'gui-arrow-icon',
                templateUrl: 'fabric-arrow-icon.component.html',
                styleUrls: ['./fabric-arrow-icon.ngx.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-arrow-icon]': 'true',
                    '[class.gui-icon]': 'true'
                }
            }]
    }], null, { direction: [{
            type: Input
        }] }); })();

class FabricDatePickerViewPanelComponent {
    constructor(calendarViewService, calendarService, datePickerYearsService, datePickerYears) {
        this.calendarViewService = calendarViewService;
        this.calendarService = calendarService;
        this.datePickerYearsService = datePickerYearsService;
        this.datePickerYears = datePickerYears;
        this.Direction = Direction;
        this.FabricCalendarCardView = FabricCalendarCardView;
    }
    getDisplayedDate() {
        switch (this.fabricCalendarView) {
            case FabricCalendarView.DAYS:
                return `${months[this.activeMonth]} ${this.activeYear}`;
            case FabricCalendarView.MONTHS:
                return `${months[this.activeMonth]} ${this.activeYear}`;
            case FabricCalendarView.YEARS:
                return `${this.getDisplayedYearRange()}`;
            default:
                return '';
        }
    }
    switchCalendarView() {
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
    }
    switchCard(cardView) {
        const next = cardView === FabricCalendarCardView.NEXT, inc = next ? 1 : -1, selectedYear = this.activeYear + inc, years = next ?
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
    }
    getDisplayedYearRange() {
        return this.years[0][0].toString() + '-' + this.years[4][this.years[4].length - 1].toString();
    }
    handleMonthChange(next) {
        if (next) {
            this.calendarService.nextMonth(this.activeYear, this.activeMonth);
        }
        else {
            this.calendarService.prevMonth(this.activeYear, this.activeMonth);
        }
    }
}
FabricDatePickerViewPanelComponent.ɵfac = function FabricDatePickerViewPanelComponent_Factory(t) { return new (t || FabricDatePickerViewPanelComponent)(i0.ɵɵdirectiveInject(FabricDatePickerCalendarViewService), i0.ɵɵdirectiveInject(FabricDatePickerCalendarService), i0.ɵɵdirectiveInject(FabricDatePickerYearsService), i0.ɵɵdirectiveInject(FabricDatePickerYears)); };
FabricDatePickerViewPanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDatePickerViewPanelComponent, selectors: [["gui-date-picker-view-panel"]], inputs: { fabricCalendarView: "fabricCalendarView", selectedDate: "selectedDate", activeMonth: "activeMonth", activeYear: "activeYear", years: "years" }, decls: 6, vars: 3, consts: [[1, "gui-date-picker-view-panel"], [1, "gui-date-picker-view-panel-date", 3, "click"], [1, "gui-date-picker-arrows"], [1, "gui-date-picker-arrow", 3, "direction", "click"]], template: function FabricDatePickerViewPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function FabricDatePickerViewPanelComponent_Template_div_click_1_listener() { return ctx.switchCalendarView(); });
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "gui-arrow-icon", 3);
        i0.ɵɵlistener("click", function FabricDatePickerViewPanelComponent_Template_gui_arrow_icon_click_4_listener() { return ctx.switchCard(ctx.FabricCalendarCardView.PREV); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "gui-arrow-icon", 3);
        i0.ɵɵlistener("click", function FabricDatePickerViewPanelComponent_Template_gui_arrow_icon_click_5_listener() { return ctx.switchCard(ctx.FabricCalendarCardView.NEXT); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.getDisplayedDate(), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("direction", ctx.Direction.LEFT);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("direction", ctx.Direction.RIGHT);
    } }, directives: [FabricArrowIconComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerViewPanelComponent, [{
        type: Component,
        args: [{
                selector: 'gui-date-picker-view-panel',
                template: `
		<div class="gui-date-picker-view-panel">

			<div (click)="switchCalendarView()"
				 class="gui-date-picker-view-panel-date">
				{{getDisplayedDate()}}
			</div>

			<div class="gui-date-picker-arrows">
				<gui-arrow-icon [direction]="Direction.LEFT"
								(click)="switchCard(FabricCalendarCardView.PREV)"
								class="gui-date-picker-arrow">
				</gui-arrow-icon>

				<gui-arrow-icon [direction]="Direction.RIGHT"
								(click)="switchCard(FabricCalendarCardView.NEXT)"
								class="gui-date-picker-arrow">
				</gui-arrow-icon>
			</div>

		</div>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: FabricDatePickerCalendarViewService }, { type: FabricDatePickerCalendarService }, { type: FabricDatePickerYearsService }, { type: FabricDatePickerYears }]; }, { fabricCalendarView: [{
            type: Input
        }], selectedDate: [{
            type: Input
        }], activeMonth: [{
            type: Input
        }], activeYear: [{
            type: Input
        }], years: [{
            type: Input
        }] }); })();

const daysOfTheWeek = [
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su'
];

class FabricDateUtils {
    static areDatesSame(firstDay, secondDate) {
        return firstDay.getDate() === secondDate.getDate() &&
            firstDay.getMonth() === secondDate.getMonth() &&
            firstDay.getFullYear() === secondDate.getFullYear();
    }
    static isMonth(date, month, year) {
        return date.getMonth() === month &&
            date.getFullYear() === year;
    }
}

function FabricDatePickerDaysViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dayOfTheWeek_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(dayOfTheWeek_r2);
} }
function FabricDatePickerDaysViewComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function FabricDatePickerDaysViewComponent_div_3_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const day_r5 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.selectDate(day_r5); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("gui-date-picker-current-day", ctx_r4.isDate(ctx_r4.currentDay, day_r5))("gui-date-picker-selected-day", ctx_r4.isDate(ctx_r4.selectedDate, day_r5))("gui-date-picker-selected-month", ctx_r4.displayMonthDays(day_r5.getMonth()));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", day_r5.getDate(), " ");
} }
function FabricDatePickerDaysViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, FabricDatePickerDaysViewComponent_div_3_div_1_Template, 2, 7, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const week_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", week_r3);
} }
class FabricDatePickerDaysViewComponent {
    constructor(datePickerService) {
        this.datePickerService = datePickerService;
        this.daysOfTheWeek = daysOfTheWeek;
        this.currentDay = new Date();
    }
    selectDate(date) {
        this.datePickerService.dateSelected(date);
    }
    isDate(comparedDate, date) {
        return FabricDateUtils.areDatesSame(comparedDate, date);
    }
    displayMonthDays(month) {
        return month === this.activeMonth;
    }
}
FabricDatePickerDaysViewComponent.ɵfac = function FabricDatePickerDaysViewComponent_Factory(t) { return new (t || FabricDatePickerDaysViewComponent)(i0.ɵɵdirectiveInject(FabricDatePickerService)); };
FabricDatePickerDaysViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDatePickerDaysViewComponent, selectors: [["gui-date-picker-days-view"]], inputs: { selectedDate: "selectedDate", activeMonth: "activeMonth", weeks: "weeks" }, decls: 4, vars: 2, consts: [[1, "gui-display-grid", "gui-grid-rows-gap-8", "gui-py-6"], [1, "gui-display-grid", "gui-grid-cols-7", "gui-py-4", "gui-date-picker-header"], [4, "ngFor", "ngForOf"], ["class", "gui-display-grid gui-grid-cols-7", 4, "ngFor", "ngForOf"], [1, "gui-display-grid", "gui-grid-cols-7"], ["class", "gui-date-picker-cell gui-date-picker-day", 3, "gui-date-picker-current-day", "gui-date-picker-selected-day", "gui-date-picker-selected-month", "click", 4, "ngFor", "ngForOf"], [1, "gui-date-picker-cell", "gui-date-picker-day", 3, "click"]], template: function FabricDatePickerDaysViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, FabricDatePickerDaysViewComponent_div_2_Template, 2, 1, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, FabricDatePickerDaysViewComponent_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.daysOfTheWeek);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.weeks);
    } }, directives: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerDaysViewComponent, [{
        type: Component,
        args: [{
                selector: 'gui-date-picker-days-view',
                templateUrl: 'fabric-date-picker-days-view.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: FabricDatePickerService }]; }, { selectedDate: [{
            type: Input
        }], activeMonth: [{
            type: Input
        }], weeks: [{
            type: Input
        }] }); })();

const monthsPerQuarters = [
    [{ nr: 0, name: 'Jan' }, { nr: 1, name: 'Feb' }, { nr: 2, name: 'Mar' }],
    [{ nr: 3, name: 'Apr' }, { nr: 4, name: 'May' }, { nr: 5, name: 'Jun' }],
    [{ nr: 6, name: 'Jul' }, { nr: 7, name: 'Aug' }, { nr: 8, name: 'Sep' }],
    [{ nr: 9, name: 'Oct' }, { nr: 10, name: 'Nov' }, { nr: 11, name: 'Dec' }]
];

function FabricDatePickerMonthsViewComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function FabricDatePickerMonthsViewComponent_div_1_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const month_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.selectMonth(month_r3.nr); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("gui-date-picker-current-month", ctx_r2.isMonth(ctx_r2.currentDay, month_r3.nr))("gui-date-picker-selected-month", ctx_r2.isMonth(ctx_r2.selectedDate, month_r3.nr));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", month_r3.name, " ");
} }
function FabricDatePickerMonthsViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, FabricDatePickerMonthsViewComponent_div_1_div_1_Template, 2, 5, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const quarter_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", quarter_r1);
} }
class FabricDatePickerMonthsViewComponent {
    constructor(calendarService, calendarViewService) {
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.currentDay = new Date();
        this.monthsPerQuarters = monthsPerQuarters;
    }
    isMonth(date, month) {
        return FabricDateUtils.isMonth(date, month, this.activeYear);
    }
    selectMonth(month) {
        this.calendarService.selectMonth(month);
        this.calendarViewService.switchView(FabricCalendarView.DAYS);
    }
}
FabricDatePickerMonthsViewComponent.ɵfac = function FabricDatePickerMonthsViewComponent_Factory(t) { return new (t || FabricDatePickerMonthsViewComponent)(i0.ɵɵdirectiveInject(FabricDatePickerCalendarService), i0.ɵɵdirectiveInject(FabricDatePickerCalendarViewService)); };
FabricDatePickerMonthsViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDatePickerMonthsViewComponent, selectors: [["gui-date-picker-months-view"]], inputs: { selectedDate: "selectedDate", activeYear: "activeYear" }, decls: 2, vars: 1, consts: [[1, "gui-display-grid", "gui-grid-rows-gap-8", "gui-py-6", "gui-date-picker-view-border-top"], ["class", "gui-display-grid gui-grid-cols-3", 4, "ngFor", "ngForOf"], [1, "gui-display-grid", "gui-grid-cols-3"], ["class", "gui-date-picker-cell gui-date-picker-month", 3, "gui-date-picker-current-month", "gui-date-picker-selected-month", "click", 4, "ngFor", "ngForOf"], [1, "gui-date-picker-cell", "gui-date-picker-month", 3, "click"]], template: function FabricDatePickerMonthsViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, FabricDatePickerMonthsViewComponent_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.monthsPerQuarters);
    } }, directives: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerMonthsViewComponent, [{
        type: Component,
        args: [{
                selector: 'gui-date-picker-months-view',
                templateUrl: 'fabric-date-picker-months-view.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: FabricDatePickerCalendarService }, { type: FabricDatePickerCalendarViewService }]; }, { selectedDate: [{
            type: Input
        }], activeYear: [{
            type: Input
        }] }); })();

function FabricDatePickerYearsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function FabricDatePickerYearsComponent_div_1_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const year_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.selectYear(year_r3); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const year_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("gui-date-picker-current-year", ctx_r2.isYear(ctx_r2.currentDay, year_r3))("gui-date-picker-selected-year", ctx_r2.isYear(ctx_r2.selectedDate, year_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", year_r3, " ");
} }
function FabricDatePickerYearsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, FabricDatePickerYearsComponent_div_1_div_1_Template, 2, 5, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const yearsChunk_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", yearsChunk_r1);
} }
class FabricDatePickerYearsComponent {
    constructor(calendarService, calendarViewService) {
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.currentDay = new Date();
    }
    selectYear(year) {
        this.calendarService.selectYear(year);
        this.calendarViewService.switchView(FabricCalendarView.MONTHS);
    }
    isYear(date, year) {
        if (date) {
            return date.getFullYear() === year;
        }
        return false;
    }
}
FabricDatePickerYearsComponent.ɵfac = function FabricDatePickerYearsComponent_Factory(t) { return new (t || FabricDatePickerYearsComponent)(i0.ɵɵdirectiveInject(FabricDatePickerCalendarService), i0.ɵɵdirectiveInject(FabricDatePickerCalendarViewService)); };
FabricDatePickerYearsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDatePickerYearsComponent, selectors: [["gui-date-picker-years-view"]], inputs: { selectedDate: "selectedDate", years: "years" }, decls: 2, vars: 1, consts: [[1, "gui-display-grid", "gui-grid-rows-gap-8", "gui-py-6", "gui-date-picker-view-border-top"], ["class", "gui-display-grid gui-grid-cols-5", 4, "ngFor", "ngForOf"], [1, "gui-display-grid", "gui-grid-cols-5"], ["class", "gui-date-picker-cell gui-date-picker-year", 3, "gui-date-picker-current-year", "gui-date-picker-selected-year", "click", 4, "ngFor", "ngForOf"], [1, "gui-date-picker-cell", "gui-date-picker-year", 3, "click"]], template: function FabricDatePickerYearsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, FabricDatePickerYearsComponent_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.years);
    } }, directives: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerYearsComponent, [{
        type: Component,
        args: [{
                selector: 'gui-date-picker-years-view',
                templateUrl: 'fabric-date-picker-years.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: FabricDatePickerCalendarService }, { type: FabricDatePickerCalendarViewService }]; }, { selectedDate: [{
            type: Input
        }], years: [{
            type: Input
        }] }); })();

class FabricTimeValues {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}

const _c0$h = ["gui-input", ""];
class FabricInputComponent {
}
FabricInputComponent.ɵfac = function FabricInputComponent_Factory(t) { return new (t || FabricInputComponent)(); };
FabricInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricInputComponent, selectors: [["input", "gui-input", ""]], hostVars: 2, hostBindings: function FabricInputComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-input", true);
    } }, attrs: _c0$h, decls: 0, vars: 0, template: function FabricInputComponent_Template(rf, ctx) { }, styles: [".gui-input{background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;color:#333;font:14px Arial;margin:0;max-width:100%;outline:0;padding:8px 12px;text-align:left;transition:border-color .3s ease-in-out}.gui-input:hover{border-color:#999}.gui-input:focus{border-color:#6fb4e8}.gui-input:disabled{color:#ccc;cursor:default;pointer-events:none}.gui-input:disabled::-moz-placeholder{color:#ccc}.gui-input:disabled:-ms-input-placeholder{color:#ccc}.gui-input:disabled::placeholder{color:#ccc}\n", ".gui-material .gui-input{border-color:#ccc;border-radius:0;border-style:solid;border-width:0 0 1px 0;font-family:Roboto,\"Helvetica Neue\",sans-serif;padding-left:0;transition:border-color .3s ease-in-out}.gui-material .gui-input:not(:-moz-placeholder-shown){border-color:#6200ee}.gui-material .gui-input:not(:-ms-input-placeholder){border-color:#6200ee}.gui-material .gui-input:not(:placeholder-shown){border-color:#6200ee}.gui-material .gui-input:focus{border-color:#6200ee}\n", ".gui-dark .gui-input{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-input:hover{border-color:#757575}.gui-dark .gui-input:focus{border-color:#ce93d8}.gui-dark .gui-input:disabled{opacity:.36}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricInputComponent, [{
        type: Component,
        args: [{
                selector: 'input[gui-input]',
                templateUrl: './input.component.html',
                styleUrls: [
                    './input.ngx.scss',
                    './themes/input.material.ngx.scss',
                    './themes/input.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-input]': 'true'
                }
            }]
    }], null, null); })();

function FabricTimePickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "gui-arrow-icon", 5);
    i0.ɵɵlistener("click", function FabricTimePickerComponent_div_1_Template_gui_arrow_icon_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.changeTimeItem("hours", ctx_r3.steps); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "input", 6);
    i0.ɵɵelementStart(3, "gui-arrow-icon", 5);
    i0.ɵɵlistener("click", function FabricTimePickerComponent_div_1_Template_gui_arrow_icon_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.changeTimeItem("hours", -ctx_r5.steps); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("direction", ctx_r0.Direction.TOP);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("direction", ctx_r0.Direction.BOTTOM);
} }
function FabricTimePickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "gui-arrow-icon", 5);
    i0.ɵɵlistener("click", function FabricTimePickerComponent_div_2_Template_gui_arrow_icon_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.changeTimeItem("minutes", ctx_r6.steps); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "input", 7);
    i0.ɵɵelementStart(3, "gui-arrow-icon", 5);
    i0.ɵɵlistener("click", function FabricTimePickerComponent_div_2_Template_gui_arrow_icon_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.changeTimeItem("minutes", -ctx_r8.steps); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("direction", ctx_r1.Direction.TOP);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("direction", ctx_r1.Direction.BOTTOM);
} }
function FabricTimePickerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "gui-arrow-icon", 5);
    i0.ɵɵlistener("click", function FabricTimePickerComponent_div_3_Template_gui_arrow_icon_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.changeTimeItem("seconds", ctx_r9.steps); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "input", 8);
    i0.ɵɵelementStart(3, "gui-arrow-icon", 5);
    i0.ɵɵlistener("click", function FabricTimePickerComponent_div_3_Template_gui_arrow_icon_click_3_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.changeTimeItem("seconds", -ctx_r11.steps); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("direction", ctx_r2.Direction.TOP);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("direction", ctx_r2.Direction.BOTTOM);
} }
class FabricTimePickerComponent extends FabricReactive {
    constructor(formBuilder, datePickerService) {
        super();
        this.formBuilder = formBuilder;
        this.datePickerService = datePickerService;
        this.steps = 1;
        this.Direction = Direction;
        this.FabricDatePickerComposition = FabricDatePickerComposition;
        this.form = this.formBuilder.group({
            hours: [''],
            minutes: [''],
            seconds: ['']
        });
    }
    ngOnChanges(changes) {
        if (changes.selectedDate) {
            if (this.selectedDate) {
            }
        }
    }
    ngOnInit() {
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)) {
            this.form
                .controls['hours']
                .valueChanges
                .pipe(this.takeUntil())
                .subscribe((hour) => {
                const minHour = this.isMeridian() ? 1 : 0, maxHour = this.isMeridian() ? 12 : 23;
                if (hour > maxHour || hour < minHour) {
                    this.form.controls['hours'].setValue(minHour);
                }
                this.changeSelectedDate();
            });
        }
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)) {
            this.form
                .controls['minutes']
                .valueChanges
                .pipe(this.takeUntil())
                .subscribe((value) => {
                this.controlFormItemValue(value, 'minutes', 'hours');
                this.changeSelectedDate();
            });
        }
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)) {
            this.form
                .controls['seconds']
                .valueChanges
                .pipe(this.takeUntil())
                .subscribe((value) => {
                this.controlFormItemValue(value, 'seconds', 'minutes');
                this.changeSelectedDate();
            });
        }
        this.setTimeFromSelectedDate();
    }
    changeTimeItem(formControlName, steps) {
        const value = this.form.controls[formControlName].value + steps;
        this.form.controls[formControlName].setValue(value);
    }
    changeSelectedDateTime() {
        this.datePickerService.next();
    }
    isActive(activeComposition, checkedComposition) {
        return !!(activeComposition & checkedComposition);
    }
    isMeridian() {
        return this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MERIDIAN);
    }
    isOnlyTimePicker() {
        return !(this.datePickerComposition & FabricDatePickerComposition.DATE_PICKER);
    }
    changeSelectedDate() {
        const hours = this.form.controls['hours'].value, minutes = this.form.controls['minutes'].value, seconds = this.form.controls['seconds'].value, timeValues = new FabricTimeValues(hours, minutes, seconds);
        this.datePickerService.changeTime(timeValues, this.selectedDate);
    }
    controlFormItemValue(value, observedFormControlName, incFormControlName) {
        if (value > 59) {
            const timeItemValue = this.form.controls[incFormControlName].value, incTimeItemValue = timeItemValue + 1;
            this.form.controls[incFormControlName].setValue(incTimeItemValue);
            this.form.controls[observedFormControlName].setValue(0o0);
        }
        else if (value < 0) {
            this.form.controls[observedFormControlName].setValue(0);
        }
    }
    setTimeFromSelectedDate() {
        const hours = this.selectedDate.getHours(), minutes = this.selectedDate.getMinutes(), seconds = this.selectedDate.getSeconds();
        this.form.controls['hours'].setValue(hours);
        this.form.controls['minutes'].setValue(minutes);
        this.form.controls['seconds'].setValue(seconds);
    }
}
FabricTimePickerComponent.ɵfac = function FabricTimePickerComponent_Factory(t) { return new (t || FabricTimePickerComponent)(i0.ɵɵdirectiveInject(i1$1.FormBuilder), i0.ɵɵdirectiveInject(FabricDatePickerService)); };
FabricTimePickerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricTimePickerComponent, selectors: [["gui-time-picker"]], hostVars: 2, hostBindings: function FabricTimePickerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("only-time-picker", ctx.isOnlyTimePicker());
    } }, inputs: { selectedDate: "selectedDate", datePickerComposition: "datePickerComposition" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["class", "gui-time-picker-item", 4, "ngIf"], [1, "gui-time-picker-button-wrapper", 3, "click"], ["gui-button", "", 3, "outline"], [1, "gui-time-picker-item"], [1, "gui-date-picker-arrow", 3, "direction", "click"], ["formControlName", "hours", "gui-input", "", "maxlength", "2"], ["formControlName", "minutes", "gui-input", "", "maxlength", "2", "type", "number"], ["formControlName", "seconds", "gui-input", "", "maxlength", "2", "type", "number"]], template: function FabricTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵtemplate(1, FabricTimePickerComponent_div_1_Template, 4, 2, "div", 1);
        i0.ɵɵtemplate(2, FabricTimePickerComponent_div_2_Template, 4, 2, "div", 1);
        i0.ɵɵtemplate(3, FabricTimePickerComponent_div_3_Template, 4, 2, "div", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵlistener("click", function FabricTimePickerComponent_Template_div_click_4_listener() { return ctx.changeSelectedDateTime(); });
        i0.ɵɵelementStart(5, "button", 3);
        i0.ɵɵtext(6, " Ok ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isActive(ctx.datePickerComposition, ctx.FabricDatePickerComposition.TIME_PICKER_HOURS));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isActive(ctx.datePickerComposition, ctx.FabricDatePickerComposition.TIME_PICKER_MINUTES));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isActive(ctx.datePickerComposition, ctx.FabricDatePickerComposition.TIME_PICKER_SECONDS));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("outline", true);
    } }, directives: [i1$1.ɵNgNoValidate, i1$1.NgControlStatusGroup, i1$1.FormGroupDirective, i1.NgIf, FabricButtonComponent, FabricArrowIconComponent, i1$1.DefaultValueAccessor, FabricInputComponent, i1$1.NgControlStatus, i1$1.FormControlName, i1$1.MaxLengthValidator, i1$1.NumberValueAccessor], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricTimePickerComponent, [{
        type: Component,
        args: [{
                selector: 'gui-time-picker',
                templateUrl: './fabric-time-picker.component.html',
                host: {
                    '[class.only-time-picker]': 'isOnlyTimePicker()'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1$1.FormBuilder }, { type: FabricDatePickerService }]; }, { selectedDate: [{
            type: Input
        }], datePickerComposition: [{
            type: Input
        }] }); })();

function FabricDatePickerCalendarComponent_ng_container_0_gui_date_picker_days_view_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-date-picker-days-view", 7);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("activeMonth", ctx_r2.activeMonth)("selectedDate", ctx_r2.selectedDate)("weeks", ctx_r2.weeks);
} }
function FabricDatePickerCalendarComponent_ng_container_0_gui_date_picker_months_view_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-date-picker-months-view", 8);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("activeYear", ctx_r3.activeYear)("selectedDate", ctx_r3.selectedDate);
} }
function FabricDatePickerCalendarComponent_ng_container_0_gui_date_picker_years_view_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-date-picker-years-view", 9);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("selectedDate", ctx_r4.selectedDate)("years", ctx_r4.years);
} }
function FabricDatePickerCalendarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "gui-date-picker-view-panel", 2);
    i0.ɵɵelementContainerStart(2, 3);
    i0.ɵɵtemplate(3, FabricDatePickerCalendarComponent_ng_container_0_gui_date_picker_days_view_3_Template, 1, 3, "gui-date-picker-days-view", 4);
    i0.ɵɵtemplate(4, FabricDatePickerCalendarComponent_ng_container_0_gui_date_picker_months_view_4_Template, 1, 2, "gui-date-picker-months-view", 5);
    i0.ɵɵtemplate(5, FabricDatePickerCalendarComponent_ng_container_0_gui_date_picker_years_view_5_Template, 1, 2, "gui-date-picker-years-view", 6);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("activeMonth", ctx_r0.activeMonth)("activeYear", ctx_r0.activeYear)("fabricCalendarView", ctx_r0.fabricCalendarView)("selectedDate", ctx_r0.selectedDate)("years", ctx_r0.years);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r0.getCalendarView());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r0.FabricCalendarView.DAYS);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r0.FabricCalendarView.MONTHS);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r0.FabricCalendarView.YEARS);
} }
function FabricDatePickerCalendarComponent_gui_time_picker_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-time-picker", 10);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("datePickerComposition", ctx_r1.datePickerComposition)("selectedDate", ctx_r1.selectedDate);
} }
class FabricDatePickerCalendarComponent extends FabricReactive {
    constructor(datePickerService, datePickerFormatService, datePickerWeeks, datePickerYears, datePickerYearsService, calendarService, calendarViewService, changeDetectorRef) {
        super();
        this.datePickerService = datePickerService;
        this.datePickerFormatService = datePickerFormatService;
        this.datePickerWeeks = datePickerWeeks;
        this.datePickerYears = datePickerYears;
        this.datePickerYearsService = datePickerYearsService;
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.changeDetectorRef = changeDetectorRef;
        this.FabricDatePickerComposition = FabricDatePickerComposition;
        this.FabricCalendarView = FabricCalendarView;
        this.fabricCalendarView = FabricCalendarView.DAYS;
    }
    ngOnInit() {
        this.datePickerFormatService
            .onComposition()
            .pipe(this.takeUntil())
            .subscribe((datePickerComposition) => {
            this.datePickerComposition = datePickerComposition;
        });
        this.calendarService
            .onActiveMonth()
            .pipe(this.takeUntil())
            .subscribe((month) => {
            this.activeMonth = month;
            this.calculateDatePickerData();
            this.changeDetectorRef.detectChanges();
        });
        this.calendarService
            .onActiveYear()
            .pipe(this.takeUntil())
            .subscribe((year) => {
            this.activeYear = year;
            this.calculateDatePickerData();
            this.changeDetectorRef.detectChanges();
        });
        this.datePickerService
            .observeSelectedDate()
            .pipe(this.takeUntil())
            .subscribe((date) => {
            this.selectedDate = date;
            this.activeYear = date.getFullYear();
            this.activeMonth = date.getMonth();
        });
        this.datePickerYearsService
            .onYears()
            .pipe(this.takeUntil())
            .subscribe((years) => {
            this.years = years;
            this.changeDetectorRef.detectChanges();
        });
        this.calendarViewService
            .onActiveView()
            .pipe(this.takeUntil())
            .subscribe((fabricCalendarView) => {
            this.fabricCalendarView = fabricCalendarView;
            this.changeDetectorRef.detectChanges();
        });
        this.calculateDatePickerData();
    }
    getCalendarView() {
        if (event) {
            event.stopPropagation();
        }
        return this.fabricCalendarView;
    }
    isVisible(activeComposition, checkedComposition) {
        return !!(activeComposition & checkedComposition);
    }
    calculateDatePickerData() {
        this.weeks = this.datePickerWeeks.getDaysInMonths(this.activeYear, this.activeMonth);
        this.years = this.datePickerYears.getYears(this.activeYear);
    }
}
FabricDatePickerCalendarComponent.ɵfac = function FabricDatePickerCalendarComponent_Factory(t) { return new (t || FabricDatePickerCalendarComponent)(i0.ɵɵdirectiveInject(FabricDatePickerService), i0.ɵɵdirectiveInject(FabricDatePickerCompositionService), i0.ɵɵdirectiveInject(FabricDatePickerWeeks), i0.ɵɵdirectiveInject(FabricDatePickerYears), i0.ɵɵdirectiveInject(FabricDatePickerYearsService), i0.ɵɵdirectiveInject(FabricDatePickerCalendarService), i0.ɵɵdirectiveInject(FabricDatePickerCalendarViewService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
FabricDatePickerCalendarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDatePickerCalendarComponent, selectors: [["gui-date-picker-toggle"]], hostVars: 2, hostBindings: function FabricDatePickerCalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-date-picker-calendar", true);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "datePickerComposition", "selectedDate", 4, "ngIf"], [3, "activeMonth", "activeYear", "fabricCalendarView", "selectedDate", "years"], [3, "ngSwitch"], [3, "activeMonth", "selectedDate", "weeks", 4, "ngSwitchCase"], [3, "activeYear", "selectedDate", 4, "ngSwitchCase"], [3, "selectedDate", "years", 4, "ngSwitchCase"], [3, "activeMonth", "selectedDate", "weeks"], [3, "activeYear", "selectedDate"], [3, "selectedDate", "years"], [3, "datePickerComposition", "selectedDate"]], template: function FabricDatePickerCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FabricDatePickerCalendarComponent_ng_container_0_Template, 6, 9, "ng-container", 0);
        i0.ɵɵtemplate(1, FabricDatePickerCalendarComponent_gui_time_picker_1_Template, 1, 2, "gui-time-picker", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isVisible(ctx.datePickerComposition, ctx.FabricDatePickerComposition.DATE_PICKER));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isVisible(ctx.datePickerComposition, ctx.FabricDatePickerComposition.TIME_PICKER));
    } }, directives: [i1.NgIf, FabricDatePickerViewPanelComponent, i1.NgSwitch, i1.NgSwitchCase, FabricDatePickerDaysViewComponent, FabricDatePickerMonthsViewComponent, FabricDatePickerYearsComponent, FabricTimePickerComponent], styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}@use \"common/variables\";.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-date-picker-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;font-family:Roboto,\"Helvetica Neue\",sans-serif;border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 0 12px;width:268px}.gui-date-picker-header{font-size:13px;font-weight:normal;text-align:center;border-top:1px solid #999}.gui-date-picker-cell{border-radius:4px;border-color:transparent;border-style:solid;border-width:1px;padding:2px 4px;position:relative;text-align:center;font-size:13px;z-index:0}.gui-date-picker-cell:before{border:1px solid #999;border-radius:50%;box-sizing:border-box;content:\"\";display:none;height:36px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:36px;z-index:-1}.gui-date-picker-cell:after{background:transparent;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:32px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:32px;z-index:-1}.gui-date-picker-cell:hover:after{background:#e6e6e6}.gui-date-picker-day{color:#333;cursor:pointer;opacity:.2}.gui-date-picker-day.gui-date-picker-selected-month{opacity:1}.gui-date-picker-month,.gui-date-picker-year{cursor:pointer}.gui-date-picker-year{font-size:13px}.gui-date-picker-day.gui-date-picker-current-day:before,.gui-date-picker-month.gui-date-picker-current-month:before,.gui-date-picker-year.gui-date-picker-current-year:before{display:block}.gui-date-picker-day.gui-date-picker-selected-day{pointer-events:none}.gui-date-picker-day.gui-date-picker-selected-day,.gui-date-picker-month.gui-date-picker-selected-month,.gui-date-picker-year.gui-date-picker-selected-year{color:#fff}.gui-date-picker-day.gui-date-picker-selected-day:after,.gui-date-picker-month.gui-date-picker-selected-month:after,.gui-date-picker-year.gui-date-picker-selected-year:after{background:#2185d0}.gui-date-picker-arrows{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:32px}.gui-date-picker-view-padding{padding:0 8px}.gui-date-picker-view-border-top{border-top:1px solid #999}gui-time-picker{border-top:1px solid #999;margin:6px 0 0;padding:12px 0 2.66667px}gui-time-picker form{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}gui-time-picker.only-time-picker{border-top:none}.gui-time-picker-button-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-right:8px}.gui-time-picker-button-wrapper .gui-button{font-size:12px}.gui-time-picker-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 8px;position:relative}.gui-time-picker-item input{box-sizing:border-box;max-width:24px;text-align:center}.gui-time-picker-item input::-webkit-outer-spin-button,.gui-time-picker-item input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.gui-time-picker-item input[type=number]{-moz-appearance:textfield}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(1){margin-bottom:2px}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(2){margin-top:6px}.gui-date-picker-view-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:16px 18px}.gui-date-picker-view-panel .gui-date-picker-view-panel-date{cursor:pointer;font-size:14px;font-weight:bold;margin:0;pointer-events:auto}.gui-date-picker-arrow{position:relative;z-index:0}.gui-date-picker-arrow:hover:after{background:#e6e6e6;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:24px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:24px;z-index:-1}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerCalendarComponent, [{
        type: Component,
        args: [{
                selector: 'gui-date-picker-toggle',
                templateUrl: 'fabric-date-picker-calendar.component.html',
                styleUrls: [
                    './fabric-date-picker-calendar.ngx.scss'
                ],
                host: {
                    '[class.gui-date-picker-calendar]': 'true'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: FabricDatePickerService }, { type: FabricDatePickerCompositionService }, { type: FabricDatePickerWeeks }, { type: FabricDatePickerYears }, { type: FabricDatePickerYearsService }, { type: FabricDatePickerCalendarService }, { type: FabricDatePickerCalendarViewService }, { type: i0.ChangeDetectorRef }]; }, null); })();

var FabricPlacement;
(function (FabricPlacement) {
    FabricPlacement[FabricPlacement["TOP"] = 1] = "TOP";
    FabricPlacement[FabricPlacement["BOTTOM"] = 2] = "BOTTOM";
    FabricPlacement[FabricPlacement["BEFORE"] = 3] = "BEFORE";
    FabricPlacement[FabricPlacement["AFTER"] = 4] = "AFTER";
})(FabricPlacement || (FabricPlacement = {}));

const themeToken = new InjectionToken('Theme token');

class FabricModalThemeService {
    constructor() {
        this.fabricTheme$ = new BehaviorSubject(Theme.FABRIC);
    }
    onTheme() {
        return this.fabricTheme$.asObservable();
    }
    changeTheme(theme) {
        const fabricTheme = typeof theme === 'string' ? this.convertToTheme(theme) : theme;
        this.fabricTheme$.next(fabricTheme);
    }
    convertToTheme(theme) {
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
    }
}
FabricModalThemeService.ɵfac = function FabricModalThemeService_Factory(t) { return new (t || FabricModalThemeService)(); };
FabricModalThemeService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricModalThemeService, factory: FabricModalThemeService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricModalThemeService, [{
        type: Injectable
    }], null, null); })();

class FabricThemedComponent extends FabricReactive {
    constructor(elementRef, renderer, themeService) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.themeService = themeService;
    }
    ngAfterViewInit() {
        this.themeService
            .onTheme()
            .pipe(distinctUntilChanged(), this.takeUntil())
            .subscribe((theme) => {
            this.addTheme(theme);
        });
    }
    addTheme(theme) {
        this.removeThemes();
        const cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme.toLowerCase();
        this.renderer.addClass(this.elementRef.nativeElement, cssClass);
    }
    removeThemes() {
        const themes = Object.keys(Theme)
            .map((key) => Theme[key].toLowerCase())
            .filter((val) => !Number.isInteger(val));
        themes.forEach((theme) => {
            const cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme;
            this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
        });
    }
    getElementRef() {
        return this.elementRef;
    }
    getRenderer() {
        return this.renderer;
    }
}
FabricThemedComponent.CSS_CLASS_PREFIX = 'gui-';
FabricThemedComponent.ɵfac = function FabricThemedComponent_Factory(t) { return new (t || FabricThemedComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(FabricModalThemeService)); };
FabricThemedComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FabricThemedComponent, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricThemedComponent, [{
        type: Directive
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: FabricModalThemeService }]; }, null); })();

class FabricGeometry {
    constructor(elementRef, containerClassName) {
        this.elementRef = elementRef;
        this.containerClassName = containerClassName;
    }
    getHeight() {
        return this.elementRef.nativeElement.querySelector(`.${this.containerClassName}`).offsetHeight;
    }
    getWidth() {
        return this.elementRef.nativeElement.querySelector(`.${this.containerClassName}`).offsetWidth;
    }
}

class FabricCords extends FabricGeometry {
    constructor(window, invokerElementRef, invokedElementRef, containerClassName, placement, offset) {
        super(invokedElementRef, containerClassName);
        this.calculateCords(window, invokerElementRef, placement, offset);
    }
    getVerticalPosition() {
        return this.verticalPosition;
    }
    getHorizontalPosition() {
        return this.horizontalPosition;
    }
    calculateCords(window, invokerElementRef, placement, offset) {
        const elementRect = invokerElementRef.nativeElement.getBoundingClientRect(), elementBottom = window.pageYOffset + elementRect.bottom, elementLeft = window.pageXOffset + elementRect.left, elementRight = window.pageXOffset + elementRect.right, elementTop = window.pageYOffset + elementRect.top, topCords = elementTop + offset - this.getHeight();
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
    }
    calculateDirection(invokerElementRef, window, topCords) {
        const windowHeightWithOffset = window.innerHeight + window.pageYOffset, windowWidthWithOffset = window.innerWidth + window.pageXOffset, invokerElementWidth = invokerElementRef.nativeElement.offsetWidth, invokedElementHeight = this.getHeight(), invokedElementWidth = this.getWidth();
        const invokedElementDoesNotFitHorizontally = (windowWidthWithOffset - this.horizontalPosition - invokedElementWidth) < 0, invokedElementDoesNotFitVertically = (windowHeightWithOffset - this.verticalPosition - invokedElementHeight) < 0;
        if (invokedElementDoesNotFitHorizontally) {
            this.horizontalPosition -= invokedElementWidth - invokerElementWidth;
        }
        if (invokedElementDoesNotFitVertically) {
            this.verticalPosition = topCords;
        }
    }
}

class InlineDialogCords extends FabricCords {
    constructor(invokerElementRef, invokedElementRef, window, placement, inlineDialogOffset = InlineDialogCords.defaultInlineDialogOffset) {
        super(window, invokerElementRef, invokedElementRef, 'gui-inline-dialog-wrapper', placement, inlineDialogOffset);
        this.invokerElementRef = invokerElementRef;
        this.invokedElementRef = invokedElementRef;
        this.window = window;
        this.placement = placement;
        this.inlineDialogOffset = inlineDialogOffset;
    }
}
InlineDialogCords.defaultInlineDialogOffset = 8;

class InlineDialogGeometryService {
    constructor(platformId) {
        this.platformId = platformId;
        this.inlineDialogState$ = new Subject();
    }
    observeInlineDialogCords() {
        return this.inlineDialogState$.asObservable();
    }
    changeGeometry(inlineDialogRef) {
        this.inlineDialogGeometry = inlineDialogRef;
    }
    getInlineDialogCords(invokerElementRef, placement, offset) {
        if (isPlatformBrowser(this.platformId)) {
            const inlineDialogCords = new InlineDialogCords(invokerElementRef, this.inlineDialogGeometry, window, placement, offset);
            this.inlineDialogState$.next(inlineDialogCords);
        }
    }
}
InlineDialogGeometryService.ɵfac = function InlineDialogGeometryService_Factory(t) { return new (t || InlineDialogGeometryService)(i0.ɵɵinject(PLATFORM_ID)); };
InlineDialogGeometryService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InlineDialogGeometryService, factory: InlineDialogGeometryService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InlineDialogGeometryService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();

const _c0$g = ["container"];
function FabricInlineDialogComponent_ng_template_2_Template(rf, ctx) { }
class FabricInlineDialogComponent extends FabricThemedComponent {
    constructor(componentFactoryResolver, changeDetectorRef, inlineDialogService, elRef, inlineDialogGeometryService, renderer, themeService, theme) {
        super(elRef, renderer, themeService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.inlineDialogService = inlineDialogService;
        this.elRef = elRef;
        this.inlineDialogGeometryService = inlineDialogGeometryService;
    }
    ngOnInit() {
        this.inlineDialogGeometryService
            .observeInlineDialogCords()
            .pipe(this.takeUntil())
            .subscribe((inlineDialogCords) => {
            this.dialogTopAttribute = inlineDialogCords.getVerticalPosition();
            this.dialogLeftAttribute = inlineDialogCords.getHorizontalPosition();
            this.changeDetectorRef.detectChanges();
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.createNestedComponent(this.inlineDialogNestedComponent);
        this.inlineDialogGeometryService.changeGeometry(this.elRef);
        this.changeDetectorRef.detectChanges();
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    clickOutside(event) {
        if (this.isContainerClicked(event)) {
            this.inlineDialogService.close();
        }
    }
    isContainerClicked(event) {
        return !this.elRef.nativeElement.contains(event.target);
    }
    createNestedComponent(component) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        if (this.inlineDialogNestedInjector) {
            this.container.createComponent(componentFactory, null, this.inlineDialogNestedInjector);
        }
        else {
            this.container.createComponent(componentFactory);
        }
        this.changeDetectorRef.detectChanges();
    }
}
FabricInlineDialogComponent.ɵfac = function FabricInlineDialogComponent_Factory(t) { return new (t || FabricInlineDialogComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(forwardRef(() => FabricInlineDialogService)), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(InlineDialogGeometryService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(FabricModalThemeService), i0.ɵɵdirectiveInject(themeToken)); };
FabricInlineDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricInlineDialogComponent, selectors: [["ng-component"]], viewQuery: function FabricInlineDialogComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$g, 5, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 5, consts: [[1, "gui-inline-dialog-wrapper", 3, "ngClass"], [1, "gui-inline-dialog-content", 3, "click"], ["container", ""]], template: function FabricInlineDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function FabricInlineDialogComponent_Template_div_click_1_listener($event) { return ctx.clickOutside($event); }, false, i0.ɵɵresolveDocument);
        i0.ɵɵtemplate(2, FabricInlineDialogComponent_ng_template_2_Template, 0, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("left", ctx.dialogLeftAttribute, "px")("top", ctx.dialogTopAttribute, "px");
        i0.ɵɵproperty("ngClass", ctx.customClass);
    } }, directives: [i1.NgClass], styles: [".gui-inline-dialog-wrapper{box-sizing:border-box;position:absolute;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 7px #999;box-sizing:border-box;display:block;max-width:400px;z-index:1000}\n", ".gui-dark .gui-inline-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricInlineDialogComponent, [{
        type: Component,
        args: [{
                templateUrl: 'fabric-inline-dialog.component.html',
                styleUrls: [
                    './fabric-inline-dialog.ngx.scss',
                    './themes/fabric-inline-dialog.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }, { type: FabricInlineDialogService, decorators: [{
                type: Inject,
                args: [forwardRef(() => FabricInlineDialogService)]
            }] }, { type: i0.ElementRef }, { type: InlineDialogGeometryService }, { type: i0.Renderer2 }, { type: FabricModalThemeService }, { type: Theme, decorators: [{
                type: Inject,
                args: [themeToken]
            }] }]; }, { container: [{
            type: ViewChild,
            args: ['container', { read: ViewContainerRef, static: false }]
        }] }); })();

class FabricInlineDialogService {
    constructor(componentFactoryResolver, applicationRef, injector, document, inlineDialogGeometryService) {
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
    ngOnDestroy() {
        this.removeInlineDialog();
    }
    open(element, component, config) {
        if (event) {
            event.stopPropagation();
        }
        if (!this.inlineDialogRef) {
            let parentInjector = this.injector, placement = FabricPlacement.BOTTOM, offset = 0, theme = Theme.FABRIC, customClass;
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
            const injector = Injector.create({
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
    }
    close() {
        this.removeInlineDialog();
        this.unsub$.next();
        this.unsub$.complete();
        this.setOpened(false);
    }
    isOpened() {
        return this.opened;
    }
    onOpened() {
        return this.opened$.asObservable();
    }
    appendInlineDialogToElement(component, injector, customClass) {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricInlineDialogComponent)
            .create(injector);
        componentRef.instance.customClass = customClass;
        componentRef.instance.inlineDialogNestedComponent = component;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        const domDialogElement = componentRef.hostView
            .rootNodes[0];
        this.document.body.appendChild(domDialogElement);
        this.inlineDialogRef = componentRef;
    }
    removeInlineDialog() {
        if (this.inlineDialogRef) {
            this.applicationRef.detachView(this.inlineDialogRef.hostView);
            this.inlineDialogRef.destroy();
            this.inlineDialogRef = null;
        }
    }
    setOpened(opened) {
        this.opened = opened;
        this.opened$.next(this.opened);
    }
    closeOnEscKey() {
        const close$ = fromEvent(this.document, 'keyup');
        close$
            .pipe(filter((key) => key.code === 'Escape'), takeUntil(this.unsub$))
            .subscribe(() => this.close());
    }
}
FabricInlineDialogService.ɵfac = function FabricInlineDialogService_Factory(t) { return new (t || FabricInlineDialogService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(InlineDialogGeometryService)); };
FabricInlineDialogService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricInlineDialogService, factory: FabricInlineDialogService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricInlineDialogService, [{
        type: Injectable
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: InlineDialogGeometryService }]; }, null); })();

class FabricDatePickerInlineDialogService {
    constructor(fabricInlineDialogService) {
        this.fabricInlineDialogService = fabricInlineDialogService;
    }
    open(element, component, datePickerThem) {
        let theme = Theme.FABRIC;
        if (datePickerThem) {
            theme = datePickerThem;
        }
        this.fabricInlineDialogService.open(element, component, { placement: FabricPlacement.BOTTOM, offset: 0, theme });
    }
    close() {
        this.fabricInlineDialogService.close();
    }
    isOpened() {
        return this.fabricInlineDialogService.isOpened();
    }
    onOpened() {
        return this.fabricInlineDialogService.onOpened();
    }
}
FabricDatePickerInlineDialogService.ɵfac = function FabricDatePickerInlineDialogService_Factory(t) { return new (t || FabricDatePickerInlineDialogService)(i0.ɵɵinject(FabricInlineDialogService)); };
FabricDatePickerInlineDialogService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDatePickerInlineDialogService, factory: FabricDatePickerInlineDialogService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerInlineDialogService, [{
        type: Injectable
    }], function () { return [{ type: FabricInlineDialogService }]; }, null); })();

class DatePickerIconComponent {
}
DatePickerIconComponent.ɵfac = function DatePickerIconComponent_Factory(t) { return new (t || DatePickerIconComponent)(); };
DatePickerIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DatePickerIconComponent, selectors: [["gui-date-picker-icon"]], hostVars: 2, hostBindings: function DatePickerIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-date-picker-icon", true);
    } }, decls: 8, vars: 0, consts: [["height", "9.82", "viewBox", "0 0 8.76 9.82", "width", "8.76", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M401.41,308.63l-.46.15h-.15a.34.34,0,0,1-.08-.67l.68-.22a1.539,1.539,0,0,1,.38-.07h0a.39.39,0,0,1,.39.39V312a.38.38,0,0,1-.39.39.39.39,0,0,1-.39-.39Z", "fill", "#8c8b8b", "transform", "translate(-397.19 -304.36)"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "transform", "translate(0.64 9.32)", "x1", "7.39"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "transform", "translate(0.64 2.16)", "x1", "7.39"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "transform", "translate(0.5 0.5)", "y2", "8.82"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "transform", "translate(3.09 0.5)", "y2", "1.66"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "transform", "translate(5.68 0.5)", "y2", "1.66"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "transform", "translate(8.26 0.5)", "y2", "8.82"]], template: function DatePickerIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 0);
        i0.ɵɵelement(1, "path", 1);
        i0.ɵɵelement(2, "line", 2);
        i0.ɵɵelement(3, "line", 3);
        i0.ɵɵelement(4, "line", 4);
        i0.ɵɵelement(5, "line", 5);
        i0.ɵɵelement(6, "line", 6);
        i0.ɵɵelement(7, "line", 7);
        i0.ɵɵelementEnd();
    } }, styles: [".gui-date-picker-icon svg{height:16px;width:16px}.gui-date-picker-icon svg line,.gui-date-picker-icon svg path{transition:all .3s ease-in-out}.gui-date-picker-icon svg line{stroke:#aaa}.gui-date-picker-icon svg path{fill:#aaa}.gui-date-picker-icon svg:hover line{stroke:#464646}.gui-date-picker-icon svg:hover path{fill:#464646}\n", ".gui-dark .gui-date-picker-icon svg line{stroke:#bdbdbd}.gui-dark .gui-date-picker-icon svg path{fill:#bdbdbd}.gui-dark .gui-date-picker-icon svg:hover line{stroke:#616161}.gui-dark .gui-date-picker-icon svg:hover path{fill:#616161}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatePickerIconComponent, [{
        type: Component,
        args: [{
                selector: 'gui-date-picker-icon',
                templateUrl: './date-picker-icon.component.html',
                encapsulation: ViewEncapsulation.None,
                styleUrls: [
                    './date-picker-icon.ngx.scss',
                    './themes/date-picker-icon.dark.ngx.scss'
                ],
                host: {
                    '[class.gui-date-picker-icon]': 'true'
                }
            }]
    }], null, null); })();

const _c0$f = ["datePicker"];
class FabricDatePickerComponent extends FabricReactive {
    constructor(fabricDatePickerInlineDialogService, datePickerService, datePickerCompositionService, formBuilder, changeDetectorRef) {
        super();
        this.fabricDatePickerInlineDialogService = fabricDatePickerInlineDialogService;
        this.datePickerService = datePickerService;
        this.datePickerCompositionService = datePickerCompositionService;
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.openDialog = false;
        this.onlyDialog = false;
        this.datePipeOptions = 'dd/MM/yyyy';
        this.dateSelected = new EventEmitter();
        this.dialogOpened = new EventEmitter();
        this.datePickerForm = formBuilder.group({
            'date': ['']
        });
    }
    ngOnChanges(changes) {
        if (changes.selectDate) {
            this.datePickerService.dateSelected(this.selectDate);
        }
        if (changes.onlyDialog) {
            this.inputDisabled = this.onlyDialog ? 'disabled' : ''; // todo !== null ??
        }
        if (changes.datePipeOptions) {
            this.datePickerCompositionService.next(this.datePipeOptions);
        }
    }
    ngOnInit() {
        this.datePickerService
            .observeSelectedDate()
            .pipe(take(1), this.takeUntil())
            .subscribe((date) => {
            this.pickedDate = date;
            this.emitSelectedDate(date);
        });
        this.datePickerService
            .observeSelectedDate()
            .pipe(skip(1), this.takeUntil())
            .subscribe((date) => {
            this.pickedDate = date;
            this.emitSelectedDate(date);
            this.changeDetectorRef.detectChanges();
            this.closeDatePicker();
        });
        this.fabricDatePickerInlineDialogService
            .onOpened()
            .pipe(skip(1), this.takeUntil())
            .subscribe((opened) => {
            this.dialogOpened.emit(opened);
        });
        this.observeDayChanges();
    }
    ngAfterViewInit() {
        if (this.openDialog) {
            this.openDatePicker();
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.fabricDatePickerInlineDialogService.close();
    }
    openDatePicker() {
        if (!this.parentElement) {
            this.parentElement = this.datePickerRef;
        }
        this.fabricDatePickerInlineDialogService
            .open(this.parentElement, FabricDatePickerCalendarComponent, this.theme);
    }
    closeDatePicker() {
        this.fabricDatePickerInlineDialogService.close();
    }
    emitSelectedDate(date) {
        this.dateSelected.emit(date);
    }
    observeDayChanges() {
        this.datePickerForm
            .controls['date']
            .valueChanges
            .pipe(distinctUntilChanged(), debounceTime(1500), map((day) => this.parse(day)), this.takeUntil())
            .subscribe((day) => {
            this.datePickerService.dateSelected(day);
        });
    }
    parse(value) {
        if ((typeof value === 'string') && (value.includes('/'))) {
            const str = value.split('/');
            const dateValues = this.getDateValues(str), dateHasAllValues = dateValues && dateValues.length === 3;
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
    }
    getDateValues(dateValues) {
        if (this.datePipeOptions.includes('/')) {
            const dateFormatParts = this.datePipeOptions.toLowerCase().split('/');
            let year, month, day;
            dateFormatParts.forEach((datePart, i) => {
                if (datePart.includes('d')) {
                    day = +dateValues[i];
                }
                if (datePart.includes('m')) {
                    month = +dateValues[i] - 1;
                }
                if (datePart.includes('y')) {
                    year = +dateValues[i];
                }
            });
            return [year, month, day];
        }
        return [];
    }
}
FabricDatePickerComponent.ɵfac = function FabricDatePickerComponent_Factory(t) { return new (t || FabricDatePickerComponent)(i0.ɵɵdirectiveInject(FabricDatePickerInlineDialogService), i0.ɵɵdirectiveInject(FabricDatePickerService), i0.ɵɵdirectiveInject(FabricDatePickerCompositionService), i0.ɵɵdirectiveInject(i1$1.FormBuilder), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
FabricDatePickerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDatePickerComponent, selectors: [["gui-date-picker"]], viewQuery: function FabricDatePickerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$f, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datePickerRef = _t.first);
    } }, inputs: { parentElement: "parentElement", theme: "theme", selectDate: "selectDate", name: "name", openDialog: "openDialog", onlyDialog: "onlyDialog", datePipeOptions: "datePipeOptions" }, outputs: { dateSelected: "dateSelected", dialogOpened: "dialogOpened" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 6, vars: 7, consts: [[1, "gui-date-picker"], ["datePicker", ""], [3, "formGroup"], ["formControlName", "date", "gui-input", "", "readonly", "", 1, "gui-date-picker-input", 3, "name", "value"], [1, "gui-date-picker-icon", 3, "click"]], template: function FabricDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "form", 2);
        i0.ɵɵelement(3, "input", 3);
        i0.ɵɵpipe(4, "date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "gui-date-picker-icon", 4);
        i0.ɵɵlistener("click", function FabricDatePickerComponent_Template_gui_date_picker_icon_click_5_listener() { return ctx.openDatePicker(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formGroup", ctx.datePickerForm);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("name", ctx.name)("value", i0.ɵɵpipeBind2(4, 4, ctx.pickedDate, ctx.datePipeOptions));
        i0.ɵɵattribute("disabled", ctx.inputDisabled);
    } }, directives: [i1$1.ɵNgNoValidate, i1$1.NgControlStatusGroup, i1$1.FormGroupDirective, i1$1.DefaultValueAccessor, FabricInputComponent, i1$1.NgControlStatus, i1$1.FormControlName, DatePickerIconComponent], pipes: [i1.DatePipe], styles: [".gui-date-picker{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;position:relative}.gui-date-picker .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}.gui-date-picker input,.gui-date-picker-calendar input{background:transparent;border-radius:0;border-width:0 0 1px 0;font-family:Arial;font-size:14px;padding:4px}.gui-date-picker input:disabled,.gui-date-picker-calendar input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon,.gui-date-picker-calendar .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}\n", ".gui-dark .gui-input{background:transparent;color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-arrow-icon:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year{color:#333}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#dfb8e6}\n", ".gui-material .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-material .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-material .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#6200ee}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerComponent, [{
        type: Component,
        args: [{
                selector: 'gui-date-picker',
                templateUrl: './fabric-date-picker.component.html',
                styleUrls: [
                    './fabric-date-picker.ngx.scss',
                    './themes/fabric-date-picker.dark.ngx.scss',
                    './themes/fabric-date-picker.material.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: FabricDatePickerInlineDialogService }, { type: FabricDatePickerService }, { type: FabricDatePickerCompositionService }, { type: i1$1.FormBuilder }, { type: i0.ChangeDetectorRef }]; }, { datePickerRef: [{
            type: ViewChild,
            args: ['datePicker', { static: false }]
        }], parentElement: [{
            type: Input
        }], theme: [{
            type: Input
        }], selectDate: [{
            type: Input
        }], name: [{
            type: Input
        }], openDialog: [{
            type: Input
        }], onlyDialog: [{
            type: Input
        }], datePipeOptions: [{
            type: Input
        }], dateSelected: [{
            type: Output
        }], dialogOpened: [{
            type: Output
        }] }); })();

class FabricInlineDialogModule {
}
FabricInlineDialogModule.ɵfac = function FabricInlineDialogModule_Factory(t) { return new (t || FabricInlineDialogModule)(); };
FabricInlineDialogModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricInlineDialogModule });
FabricInlineDialogModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FabricInlineDialogService,
        InlineDialogGeometryService
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricInlineDialogModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricInlineDialogModule, { declarations: [FabricInlineDialogComponent], imports: [CommonModule] }); })();

class FabricInputModule {
}
FabricInputModule.ɵfac = function FabricInputModule_Factory(t) { return new (t || FabricInputModule)(); };
FabricInputModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricInputModule });
FabricInputModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricInputModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricInputComponent
                ],
                exports: [
                    FabricInputComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricInputModule, { declarations: [FabricInputComponent], imports: [CommonModule], exports: [FabricInputComponent] }); })();

class FabricArrowIconModule {
}
FabricArrowIconModule.ɵfac = function FabricArrowIconModule_Factory(t) { return new (t || FabricArrowIconModule)(); };
FabricArrowIconModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricArrowIconModule });
FabricArrowIconModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricArrowIconModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricArrowIconComponent
                ],
                exports: [
                    FabricArrowIconComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricArrowIconModule, { declarations: [FabricArrowIconComponent], imports: [CommonModule], exports: [FabricArrowIconComponent] }); })();

class DatePickerIconModule {
}
DatePickerIconModule.ɵfac = function DatePickerIconModule_Factory(t) { return new (t || DatePickerIconModule)(); };
DatePickerIconModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DatePickerIconModule });
DatePickerIconModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatePickerIconModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    DatePickerIconComponent
                ],
                exports: [
                    DatePickerIconComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DatePickerIconModule, { declarations: [DatePickerIconComponent], imports: [CommonModule], exports: [DatePickerIconComponent] }); })();

class FabricDatePickerModule {
}
FabricDatePickerModule.ɵfac = function FabricDatePickerModule_Factory(t) { return new (t || FabricDatePickerModule)(); };
FabricDatePickerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricDatePickerModule });
FabricDatePickerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FabricDatePickerService,
        FabricDatePickerCompositionService,
        FabricDatePickerCalendarService,
        FabricDatePickerCalendarViewService,
        FabricDatePickerYearsService,
        FabricDatePickerWeeks,
        FabricDatePickerYears,
        FabricDatePickerInlineDialogService
    ], imports: [[
            CommonModule,
            FabricInlineDialogModule,
            ReactiveFormsModule,
            FabricInputModule,
            FabricButtonModule,
            DatePickerIconModule,
            FabricArrowIconModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FabricInlineDialogModule,
                    ReactiveFormsModule,
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricDatePickerModule, { declarations: [FabricDatePickerCalendarComponent,
        FabricDatePickerComponent,
        FabricDatePickerDaysViewComponent,
        FabricDatePickerMonthsViewComponent,
        FabricDatePickerYearsComponent,
        FabricDatePickerViewPanelComponent,
        FabricTimePickerComponent], imports: [CommonModule,
        FabricInlineDialogModule,
        ReactiveFormsModule,
        FabricInputModule,
        FabricButtonModule,
        DatePickerIconModule,
        FabricArrowIconModule], exports: [FabricDatePickerCalendarComponent,
        FabricDatePickerComponent] }); })();

class DialogService extends FabricReactive {
    constructor() {
        super();
    }
}

class FabricDrawerService extends DialogService {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.drawerRef = null;
    }
    ngOnDestroy() {
        this.removeDrawer();
        super.ngOnDestroy();
    }
    open(element, component, config) {
        if (event) {
            event.stopPropagation();
        }
        if (!this.drawerRef) {
            let theme = Theme.FABRIC, parentInjector = this.injector, closeOnClickOutside = false;
            if (config && config.theme) {
                theme = config.theme;
            }
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            if (config && config.closeOnClickOutside) {
                closeOnClickOutside = config.closeOnClickOutside;
            }
            const injector = Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.createAndAppend(element, component, injector, closeOnClickOutside);
            this.closeOnEscKey();
        }
    }
    close() {
        this.removeDrawer();
    }
    closeOnEscKey() {
        const close$ = fromEvent(this.document, 'keyup');
        close$
            .pipe(filter((key) => key.code === 'Escape'), this.takeUntil())
            .subscribe(() => this.close());
    }
    createAndAppend(element, component, injector, closeOnClickOutside) {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricDrawerComponent)
            .create(injector);
        componentRef.instance.dialogNestedComponent = component;
        componentRef.instance.closeOnClickOutside = closeOnClickOutside;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        const domDrawerElement = componentRef.hostView
            .rootNodes[0];
        element.nativeElement.appendChild(domDrawerElement);
        this.drawerRef = componentRef;
    }
    removeDrawer() {
        if (this.drawerRef) {
            this.applicationRef.detachView(this.drawerRef.hostView);
            this.drawerRef.destroy();
            this.drawerRef = null;
        }
    }
}
FabricDrawerService.ɵfac = function FabricDrawerService_Factory(t) { return new (t || FabricDrawerService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(DOCUMENT)); };
FabricDrawerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDrawerService, factory: FabricDrawerService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDrawerService, [{
        type: Injectable
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

const selector = 'gui-close-icon';
class FabricCloseIconComponent {
}
FabricCloseIconComponent.ɵfac = function FabricCloseIconComponent_Factory(t) { return new (t || FabricCloseIconComponent)(); };
FabricCloseIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricCloseIconComponent, selectors: [["gui-close-icon"]], hostVars: 2, hostBindings: function FabricCloseIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-close-icon-wrapper", true);
    } }, decls: 1, vars: 0, consts: [[1, "gui-close-icon"]], template: function FabricCloseIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", 0);
    } }, styles: [".gui-close-icon-wrapper .gui-close-icon{cursor:pointer;height:16px;position:absolute;right:8px;top:8px;width:16px}.gui-close-icon-wrapper .gui-close-icon:before,.gui-close-icon-wrapper .gui-close-icon:after{background-color:#aaa;content:\" \";height:16px;left:7px;position:absolute;width:2px}.gui-close-icon-wrapper .gui-close-icon:before{-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-close-icon-wrapper .gui-close-icon:after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.gui-close-icon-wrapper .gui-close-icon:hover:before,.gui-close-icon-wrapper .gui-close-icon:hover:after{background-color:#464646}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricCloseIconComponent, [{
        type: Component,
        args: [{
                selector: selector,
                template: `
		<span class="gui-close-icon"></span>
	`,
                styleUrls: ['./fabric-close-icon.ngx.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-close-icon-wrapper]': 'true'
                }
            }]
    }], null, null); })();

const _c0$e = ["container"];
function FabricDrawerComponent_ng_template_3_Template(rf, ctx) { }
class FabricDrawerComponent extends FabricThemedComponent {
    constructor(componentFactoryResolver, changeDetectorRef, elRef, dialogService, themeModalService, renderer) {
        super(elRef, renderer, themeModalService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        this.dialogService = dialogService;
        this.closeOnClickOutside = false;
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.createNestedComponent(this.dialogNestedComponent);
    }
    closeDrawer() {
        this.dialogService.close();
    }
    clickOutside(event) {
        if (this.closeOnClickOutside) {
            if (this.isContainerClicked(event)) {
                this.closeDrawer();
            }
        }
    }
    isContainerClicked(event) {
        const dialogContentRef = this.elRef.nativeElement.querySelector('.gui-drawer-content');
        if (dialogContentRef) {
            return !dialogContentRef.contains(event.target);
        }
        return false;
    }
    createNestedComponent(component) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container.createComponent(componentFactory);
        this.changeDetectorRef.detectChanges();
    }
}
FabricDrawerComponent.ɵfac = function FabricDrawerComponent_Factory(t) { return new (t || FabricDrawerComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(FabricDrawerService), i0.ɵɵdirectiveInject(FabricModalThemeService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricDrawerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDrawerComponent, selectors: [["ng-component"]], viewQuery: function FabricDrawerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$e, 5, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, inputs: { closeOnClickOutside: "closeOnClickOutside" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 0, consts: [[1, "gui-drawer-wrapper", 3, "click"], [1, "gui-drawer-content"], [3, "click"], ["container", ""]], template: function FabricDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function FabricDrawerComponent_Template_div_click_0_listener($event) { return ctx.clickOutside($event); }, false, i0.ɵɵresolveDocument);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "gui-close-icon", 2);
        i0.ɵɵlistener("click", function FabricDrawerComponent_Template_gui_close_icon_click_2_listener() { return ctx.closeDrawer(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, FabricDrawerComponent_ng_template_3_Template, 0, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [FabricCloseIconComponent], styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;height:100%;position:absolute;right:0;top:0;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;box-shadow:-3px 0 4px #ccc;height:100%;max-width:400px;position:relative}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDrawerComponent, [{
        type: Component,
        args: [{
                templateUrl: './fabric-drawer.component.html',
                styleUrls: ['./fabric-drawer.ngx.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: FabricDrawerService }, { type: FabricModalThemeService }, { type: i0.Renderer2 }]; }, { container: [{
            type: ViewChild,
            args: ['container', { read: ViewContainerRef, static: false }]
        }], closeOnClickOutside: [{
            type: Input
        }] }); })();

class FabricCloseIconModule {
}
FabricCloseIconModule.ɵfac = function FabricCloseIconModule_Factory(t) { return new (t || FabricCloseIconModule)(); };
FabricCloseIconModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricCloseIconModule });
FabricCloseIconModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricCloseIconModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricCloseIconComponent
                ],
                exports: [
                    FabricCloseIconComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricCloseIconModule, { declarations: [FabricCloseIconComponent], imports: [CommonModule], exports: [FabricCloseIconComponent] }); })();

class FabricDrawerModule {
}
FabricDrawerModule.ɵfac = function FabricDrawerModule_Factory(t) { return new (t || FabricDrawerModule)(); };
FabricDrawerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricDrawerModule });
FabricDrawerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FabricDrawerService
    ], imports: [[
            CommonModule,
            FabricCloseIconModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDrawerModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricDrawerModule, { declarations: [FabricDrawerComponent], imports: [CommonModule,
        FabricCloseIconModule] }); })();

class Geometry {
    constructor(container, menu, windowSize) {
        this.container = container;
        this.menu = menu;
        this.windowSize = windowSize;
        this.calculate(this.menu, this.windowSize);
    }
    getContainerHeight() {
        return this.containerHeight;
    }
    getContainerWidth() {
        return this.containerWidth;
    }
    canOpenDownward() {
        return this.availableBottomSpace > 0;
    }
    canOpenUpward() {
        return this.availableTopSpace > 0;
    }
    calculate(menu, windowSize) {
        const containerEl = this.container.nativeElement, menuHeight = menu.nativeElement.offsetHeight, rectBottom = containerEl.getBoundingClientRect().bottom;
        this.containerHeight = containerEl.offsetHeight;
        this.containerWidth = containerEl.offsetWidth;
        this.availableBottomSpace = windowSize - rectBottom - menuHeight;
        this.availableTopSpace = rectBottom - menuHeight - this.containerHeight;
    }
}

class GeometryService {
    constructor() {
        this.geometryResults$ = new Subject();
    }
    watchGeometry() {
        return this.geometryResults$.asObservable();
    }
    changeGeometry(container, menu, windowSize) {
        const geometry = new Geometry(container, menu, windowSize);
        this.geometryResults$.next(geometry);
    }
}
GeometryService.ɵfac = function GeometryService_Factory(t) { return new (t || GeometryService)(); };
GeometryService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GeometryService, factory: GeometryService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GeometryService, [{
        type: Injectable
    }], null, null); })();

var Placement;
(function (Placement) {
    Placement[Placement["Right"] = 0] = "Right";
    Placement[Placement["Left"] = 1] = "Left";
})(Placement || (Placement = {}));

const _c0$d = ["dropdownMenu"];
const _c1$1 = ["container"];
function FabricDropdownComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "gui-arrow-icon", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("gui-dropdown-arrow", ctx_r1.isArrowEnabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("direction", ctx_r1.arrowDirection);
} }
const _c2$1 = ["*"];
class FabricDropdownComponent extends FabricReactive {
    constructor(platformId, elementRef, renderer, changeDetectorRef, geometryService) {
        super();
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
        this.arrowDirection = Direction.BOTTOM;
        this.open = false;
        this.topBorderWidth = 1;
        this.onResize();
    }
    onResize() {
        if (isPlatformBrowser(this.platformId)) {
            this.windowSize = window.innerHeight;
        }
    }
    ngOnChanges(changes) {
        if (changes.placement) {
            this.changePlacement();
        }
        if (changes.arrow) {
            this.isArrowEnabled = this.arrow;
        }
    }
    ngOnInit() {
        this.geometryService
            .watchGeometry()
            .pipe(this.takeUntil())
            .subscribe((geometry) => {
            this.containerHeight = geometry.getContainerHeight();
            this.containerWidth = geometry.getContainerWidth();
            this.canOpenUpward = geometry.canOpenUpward();
            this.canOpenDownward = geometry.canOpenDownward();
        });
    }
    tryToOpen(event) {
        if (this.isContainerDisabled(event)) {
            event.stopPropagation();
        }
        else {
            this.openMenu(!this.open);
            this.changeDetectorRef.detectChanges();
        }
    }
    tryToOpenOnHover() {
        if (this.showOnHover) {
            this.openMenu(!this.open);
            this.changeDetectorRef.detectChanges();
        }
    }
    hideOnHover() {
        if (this.showOnHover) {
            this.hideItems();
            this.open = false;
        }
    }
    clickOutside(event) {
        if (this.isContainerClicked(event)) {
            this.openMenu(false);
        }
    }
    isDirectionLeft() {
        return this.isArrowEnabled && this.arrowDirection === Direction.LEFT;
    }
    openMenu(opened) {
        this.open = opened;
        if (this.open) {
            this.showItems();
        }
        else {
            this.hideItems();
        }
    }
    showItems() {
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
    }
    openDownward() {
        this.topPosition = null;
        this.bottomPosition = this.containerHeight;
    }
    openUpward() {
        this.bottomPosition = null;
        this.topPosition = this.containerHeight;
    }
    openRight() {
        this.bottomPosition = -this.topBorderWidth;
        this.topPosition = null;
        this.horizontalPosition = this.containerWidth;
    }
    openLeft() {
        this.bottomPosition = -this.topBorderWidth;
        this.topPosition = null;
        this.horizontalPosition = -(this.containerWidth + 1);
    }
    changePlacement() {
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
    }
    hideItems() {
        const itemsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-menu-opened');
        if (itemsElHasOpenClass) {
            this.removeClass(this.elementRef.nativeElement, 'gui-menu-opened');
        }
    }
    isContainerClicked(event) {
        return !this.elementRef.nativeElement.contains(event.target);
    }
    isContainerDisabled(event) {
        return event.target.classList.contains('gui-disabled');
    }
    addClass(element, name) {
        this.renderer.addClass(element, name);
    }
    removeClass(element, name) {
        this.renderer.removeClass(element, name);
    }
}
FabricDropdownComponent.ɵfac = function FabricDropdownComponent_Factory(t) { return new (t || FabricDropdownComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(GeometryService)); };
FabricDropdownComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDropdownComponent, selectors: [["gui-dropdown"]], viewQuery: function FabricDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$d, 7);
        i0.ɵɵviewQuery(_c1$1, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownMenuRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    } }, hostVars: 2, hostBindings: function FabricDropdownComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function FabricDropdownComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, i0.ɵɵresolveWindow);
    } if (rf & 2) {
        i0.ɵɵclassProp("gui-dropdown", true);
    } }, inputs: { disabled: "disabled", dropdownText: "dropdownText", arrow: "arrow", placement: "placement", width: "width", showOnHover: "showOnHover" }, features: [i0.ɵɵProvidersFeature([
            GeometryService
        ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2$1, decls: 8, vars: 14, consts: [[1, "gui-dropdown-container", 3, "click", "mouseenter", "mouseleave"], ["container", ""], [1, "gui-dropdown-text"], [3, "gui-dropdown-arrow", 4, "ngIf"], [1, "gui-dropdown-menu"], ["dropdownMenu", ""], [3, "direction"]], template: function FabricDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("click", function FabricDropdownComponent_Template_div_click_0_listener($event) { return ctx.tryToOpen($event); })("click", function FabricDropdownComponent_Template_div_click_0_listener($event) { return ctx.clickOutside($event); }, false, i0.ɵɵresolveDocument)("mouseenter", function FabricDropdownComponent_Template_div_mouseenter_0_listener() { return ctx.tryToOpenOnHover(); })("mouseleave", function FabricDropdownComponent_Template_div_mouseleave_0_listener() { return ctx.hideOnHover(); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, FabricDropdownComponent_div_4_Template, 2, 3, "div", 3);
        i0.ɵɵelementStart(5, "div", 4, 5);
        i0.ɵɵprojection(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.width, "px");
        i0.ɵɵclassProp("gui-arrow-left", ctx.isDirectionLeft())("gui-disabled", ctx.disabled);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.dropdownText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isArrowEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("bottom", ctx.topPosition, "px")("left", ctx.horizontalPosition, "px")("top", ctx.bottomPosition, "px");
    } }, directives: [i1.NgIf, FabricArrowIconComponent], styles: [".gui-dropdown .gui-dropdown-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 12px;position:relative;width:auto}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container:hover .gui-arrow-icon svg path{stroke:#464646}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{cursor:pointer;position:absolute;right:12px;top:8px}.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{background:inherit;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;display:none;left:-1px;overflow:hidden;position:absolute;width:inherit;z-index:2}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{list-style-type:none;padding:8px 12px;width:inherit}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#cccccc}.gui-dropdown .gui-dropdown-container.gui-arrow-left{padding:8px 12px 8px 32px}.gui-dropdown .gui-dropdown-container.gui-arrow-left .gui-dropdown-arrow{left:12px;right:auto;right:initial}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}\n", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow svg path{stroke:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#616161}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'gui-dropdown',
                templateUrl: './dropdown.component.html',
                styleUrls: [
                    './dropdown.ngx.scss',
                    './themes/dropdown.material.ngx.scss',
                    './themes/dropdown.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-dropdown]': 'true'
                },
                providers: [
                    GeometryService
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: GeometryService }]; }, { dropdownMenuRef: [{
            type: ViewChild,
            args: ['dropdownMenu', { static: true }]
        }], containerRef: [{
            type: ViewChild,
            args: ['container', { static: true }]
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }], disabled: [{
            type: Input
        }], dropdownText: [{
            type: Input
        }], arrow: [{
            type: Input
        }], placement: [{
            type: Input
        }], width: [{
            type: Input
        }], showOnHover: [{
            type: Input
        }] }); })();

const _c0$c = ["*"];
class DropdownItemComponent {
}
DropdownItemComponent.ɵfac = function DropdownItemComponent_Factory(t) { return new (t || DropdownItemComponent)(); };
DropdownItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownItemComponent, selectors: [["gui-dropdown-item"]], ngContentSelectors: _c0$c, decls: 2, vars: 0, consts: [[1, "gui-item"]], template: function DropdownItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownItemComponent, [{
        type: Component,
        args: [{
                selector: 'gui-dropdown-item',
                templateUrl: './dropdown-item.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], null, null); })();

class FabricDropdownModule {
}
FabricDropdownModule.ɵfac = function FabricDropdownModule_Factory(t) { return new (t || FabricDropdownModule)(); };
FabricDropdownModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricDropdownModule });
FabricDropdownModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FabricArrowIconModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDropdownModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricDropdownModule, { declarations: [FabricDropdownComponent,
        DropdownItemComponent], imports: [CommonModule,
        FabricArrowIconModule], exports: [FabricDropdownComponent,
        DropdownItemComponent] }); })();

class FabricDialogService {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.dialogRef = null;
        this.unsub$ = new Subject();
    }
    ngOnDestroy() {
        this.removeDialog();
    }
    open(component, config) {
        if (!this.dialogRef) {
            let theme = Theme.FABRIC, parentInjector = this.injector;
            if (config && config.theme) {
                theme = config.theme;
            }
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            const injector = Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.createAndAppend(component, injector);
            this.closeOnEscKey();
        }
    }
    close() {
        this.removeDialog();
        this.unsub$.next();
        this.unsub$.complete();
    }
    closeOnEscKey() {
        const close$ = fromEvent(this.document, 'keyup');
        close$
            .pipe(filter((key) => key.code === 'Escape'), takeUntil(this.unsub$))
            .subscribe(() => this.close());
    }
    createAndAppend(component, injector) {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricDialogComponent)
            .create(injector);
        componentRef.instance.dialogNestedComponent = component;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        const domDialogElement = componentRef.hostView
            .rootNodes[0];
        this.document.body.appendChild(domDialogElement);
        this.dialogRef = componentRef;
    }
    removeDialog() {
        if (this.dialogRef) {
            this.applicationRef.detachView(this.dialogRef.hostView);
            this.dialogRef.destroy();
            this.dialogRef = null;
        }
    }
}
FabricDialogService.ɵfac = function FabricDialogService_Factory(t) { return new (t || FabricDialogService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(DOCUMENT)); };
FabricDialogService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDialogService, factory: FabricDialogService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDialogService, [{
        type: Injectable
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

const _c0$b = ["container"];
function FabricDialogComponent_ng_template_3_Template(rf, ctx) { }
class FabricDialogComponent extends FabricThemedComponent {
    constructor(componentFactoryResolver, changeDetectorRef, elRef, themeModalService, renderer, dialogService) {
        super(elRef, renderer, themeModalService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        this.dialogService = dialogService;
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.createNestedComponent(this.dialogNestedComponent);
    }
    closeDialog() {
        this.dialogService.close();
    }
    clickOutside(event) {
        if (this.isContainerClicked(event)) {
            this.dialogService.close();
        }
    }
    isContainerClicked(event) {
        const dialogContentRef = this.elRef.nativeElement.querySelector('.gui-dialog-content');
        if (dialogContentRef) {
            return !dialogContentRef.contains(event.target);
        }
        return false;
    }
    createNestedComponent(component) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container.createComponent(componentFactory);
        this.changeDetectorRef.detectChanges();
    }
}
FabricDialogComponent.ɵfac = function FabricDialogComponent_Factory(t) { return new (t || FabricDialogComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(FabricModalThemeService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(forwardRef(() => FabricDialogService))); };
FabricDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDialogComponent, selectors: [["gui-fabric-dialog"]], viewQuery: function FabricDialogComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$b, 5, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, hostVars: 2, hostBindings: function FabricDialogComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-fabric-dialog", true);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 0, consts: [[1, "gui-dialog-blanket"], [1, "gui-dialog-wrapper", 3, "click"], [1, "gui-dialog-content"], ["container", ""], [3, "click"]], template: function FabricDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function FabricDialogComponent_Template_div_click_1_listener($event) { return ctx.clickOutside($event); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, FabricDialogComponent_ng_template_3_Template, 0, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(5, "gui-close-icon", 4);
        i0.ɵɵlistener("click", function FabricDialogComponent_Template_gui_close_icon_click_5_listener() { return ctx.closeDialog(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [FabricCloseIconComponent], styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}@use \"common/variables\";.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-fabric-dialog *,.gui-fabric-dialog *:after,.gui-fabric-dialog *:before{box-sizing:border-box}.gui-fabric-dialog input{font-size:13px;outline:0}.gui-dialog-blanket{background:rgba(0,0,0,.32);height:100%;left:0;pointer-events:none;position:fixed;top:0;width:100%;z-index:1000}.gui-dialog-wrapper{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;font-family:Arial;height:100%;-ms-flex-pack:center;justify-content:center;left:0;pointer-events:auto;position:fixed;top:0;width:100%;z-index:1000}.gui-dialog-wrapper .gui-dialog-content{-webkit-animation:display-dialog .1s ease-in;animation:display-dialog .1s ease-in;background-color:#fff;border-radius:4px;box-shadow:0 3px 7px #999;max-width:400px;padding:24px;position:relative}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-title{color:#333;font-size:20px;margin:0 0 16px}@-webkit-keyframes display-dialog{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes display-dialog{0%{transform:scale(0)}to{transform:scale(1)}}\n", ".gui-dark .gui-dialog-wrapper .gui-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before,.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after{background:#bdbdbd}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDialogComponent, [{
        type: Component,
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
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: FabricModalThemeService }, { type: i0.Renderer2 }, { type: FabricDialogService, decorators: [{
                type: Inject,
                args: [forwardRef(() => FabricDialogService)]
            }] }]; }, { container: [{
            type: ViewChild,
            args: ['container', { read: ViewContainerRef, static: false }]
        }] }); })();

class FabricDialogThemeService {
    constructor() {
        this.theme$ = new Subject();
    }
    onTheme() {
        return this.theme$.asObservable();
    }
    nextTheme(theme) {
        this.theme$.next(this.toTheme(theme));
    }
    toTheme(theme) {
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
    }
}
FabricDialogThemeService.ɵfac = function FabricDialogThemeService_Factory(t) { return new (t || FabricDialogThemeService)(); };
FabricDialogThemeService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDialogThemeService, factory: FabricDialogThemeService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDialogThemeService, [{
        type: Injectable
    }], null, null); })();

class FabricDialogModule {
}
FabricDialogModule.ɵfac = function FabricDialogModule_Factory(t) { return new (t || FabricDialogModule)(); };
FabricDialogModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricDialogModule });
FabricDialogModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FabricDialogService,
        FabricDialogThemeService
    ], imports: [[
            CommonModule,
            FabricCloseIconModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDialogModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricDialogModule, { declarations: [FabricDialogComponent], imports: [CommonModule,
        FabricCloseIconModule] }); })();

const _c0$a = ["*"];
class FabricProgressBarComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngOnChanges(changes) {
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
    }
    addClass(className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }
    removeClass(className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }
}
FabricProgressBarComponent.ɵfac = function FabricProgressBarComponent_Factory(t) { return new (t || FabricProgressBarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricProgressBarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricProgressBarComponent, selectors: [["gui-progress-bar"]], hostVars: 2, hostBindings: function FabricProgressBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-progress", true);
    } }, inputs: { progress: "progress", color: "color", height: "height", width: "width", textTop: "textTop", textAlign: "textAlign", primary: "primary", secondary: "secondary" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$a, decls: 4, vars: 12, consts: [[1, "gui-progress-bar"], [1, "gui-progress"], [1, "gui-progress-text"]], template: function FabricProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.height, "px")("text-align", ctx.textAlign)("width", ctx.width, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("background", ctx.color)("width", ctx.progress, "%");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("top", ctx.textTop);
    } }, styles: [".gui-progress-bar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-color:#d6d6d6;border-style:solid;border-width:1px;display:block;font-family:Arial;height:18px;margin-bottom:10px;text-align:center}.gui-progress-bar .gui-progress{background:#999;border-bottom:inherit;height:inherit;width:0}.gui-primary .gui-progress-bar .gui-progress.gui-progress{background:#2185d0}.gui-secondary .gui-progress-bar .gui-progress.gui-progress{background:#3cb371}.gui-progress-bar .gui-progress-text{position:relative}\n", ".gui-material .gui-progress-bar{border-color:#5262c5;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-progress{background:#3949ab}.gui-material .gui-progress.gui-primary .gui-progress{background:#6200ee}.gui-material .gui-progress.gui-primary .gui-progress-bar{border-color:#6200ee}.gui-material .gui-progress.gui-secondary .gui-progress{background:#0097a7}.gui-material .gui-progress.gui-secondary .gui-progress-bar{border-color:#0097a7}\n", ".gui-dark .gui-progress-bar{border-color:#616161;color:#bdbdbd}.gui-dark .gui-progress{background:#424242}.gui-dark .gui-progress.gui-primary .gui-progress{background:#ce93d8}.gui-dark .gui-progress.gui-primary .gui-progress-bar{border-color:#ce93d8;color:#212121}.gui-dark .gui-progress.gui-secondary .gui-progress{background:#80cbc4}.gui-dark .gui-progress.gui-secondary .gui-progress-bar{border-color:#80cbc4;color:#212121}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricProgressBarComponent, [{
        type: Component,
        args: [{
                selector: 'gui-progress-bar',
                templateUrl: 'progress-bar.component.html',
                styleUrls: [
                    './progress-bar.ngx.scss',
                    './themes/progress-bar.material.ngx.scss',
                    './themes/progress-bar.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-progress]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { progress: [{
            type: Input
        }], color: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], textTop: [{
            type: Input
        }], textAlign: [{
            type: Input
        }], primary: [{
            type: Input
        }], secondary: [{
            type: Input
        }] }); })();

class FabricProgressBarModule {
}
FabricProgressBarModule.ɵfac = function FabricProgressBarModule_Factory(t) { return new (t || FabricProgressBarModule)(); };
FabricProgressBarModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricProgressBarModule });
FabricProgressBarModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricProgressBarModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricProgressBarComponent
                ],
                exports: [
                    FabricProgressBarComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricProgressBarModule, { declarations: [FabricProgressBarComponent], imports: [CommonModule], exports: [FabricProgressBarComponent] }); })();

class AbstractSpinner {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.width = 5;
        this.diameter = 90;
    }
    ngOnChanges(changes) {
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
    }
    ngOnInit() {
        this.calculateCircle();
    }
    calculateCircle() {
        this.circumference = this.calculateCircumference(this.diameter);
        this.r = this.calculateR(this.diameter);
        this.croppedCircle = this.calculateDashes(this.circumference);
        this.circleSize = this.calculateSize(this.diameter, this.width);
    }
    calculateCircumference(diameter) {
        return diameter * Math.PI;
    }
    calculateR(diameter) {
        return diameter / 2;
    }
    calculateDashes(circumference) {
        return circumference * 0.25;
    }
    calculateSize(diameter, width) {
        return diameter + width;
    }
    addClass(className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }
    removeClass(className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }
}
AbstractSpinner.ɵfac = function AbstractSpinner_Factory(t) { return new (t || AbstractSpinner)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
AbstractSpinner.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AbstractSpinner, inputs: { width: "width", diameter: "diameter", primary: "primary", secondary: "secondary" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractSpinner, [{
        type: Directive
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { width: [{
            type: Input
        }], diameter: [{
            type: Input
        }], primary: [{
            type: Input
        }], secondary: [{
            type: Input
        }] }); })();

var SpinnerMode;
(function (SpinnerMode) {
    SpinnerMode[SpinnerMode["Spin"] = 0] = "Spin";
})(SpinnerMode || (SpinnerMode = {}));

class FabricProgressSpinnerComponent extends AbstractSpinner {
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.value = 0;
        this.animationsDisabled = true;
        this.secondCircleDisabled = true;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
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
    }
    ngOnInit() {
        this.calculateValuePercentage(this.circumference, this.value);
    }
    calculateValuePercentage(circumference, value) {
        this.valuePercentage = circumference - (value * circumference / 100);
    }
}
FabricProgressSpinnerComponent.ɵfac = function FabricProgressSpinnerComponent_Factory(t) { return new (t || FabricProgressSpinnerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricProgressSpinnerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricProgressSpinnerComponent, selectors: [["gui-progress-spinner"]], inputs: { value: "value", mode: "mode", color: "color" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 5, vars: 30, consts: [[1, "gui-progress-spinner"], [1, "circle-outer"], ["cx", "50%", "cy", "50%"], [1, "circle-inner"]], template: function FabricProgressSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "circle", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "svg", 3);
        i0.ɵɵelement(4, "circle", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("stroke-dasharray", ctx.circumference)("stroke-dashoffset", ctx.valuePercentage)("stroke-width", ctx.width)("stroke", ctx.color);
        i0.ɵɵattribute("r", ctx.r);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("stroke-dasharray", ctx.croppedCircle)("stroke-dashoffset", ctx.circumference)("stroke-width", ctx.width)("stroke", ctx.color);
        i0.ɵɵattribute("r", ctx.r);
    } }, styles: [".gui-progress-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-progress-spinner circle{fill:transparent;stroke:#999}.gui-progress-spinner svg{position:absolute}.gui-progress-spinner .circle-inner{animation:gui-spin-reverse 2s infinite linear forwards reverse}.gui-progress-spinner .circle-outer{-webkit-animation:gui-spin 2s infinite linear forwards;animation:gui-spin 2s infinite linear forwards}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner .circle-outer{-webkit-animation:none;animation:none}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner.gui-progress-spinner{-webkit-animation:none;animation:none}.gui-second-circle-disabled .gui-progress-spinner.gui-progress-spinner .circle-inner{opacity:0}.gui-primary .gui-progress-spinner.gui-progress-spinner circle{stroke:#2185d0}.gui-secondary .gui-progress-spinner.gui-progress-spinner circle{stroke:#3cb371}\n", ".gui-material .gui-progress-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-progress-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-progress-spinner circle{stroke:#0097a7}\n", ".gui-dark .gui-progress-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-progress-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-progress-spinner circle{stroke:#80cbc4}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricProgressSpinnerComponent, [{
        type: Component,
        args: [{
                selector: 'gui-progress-spinner',
                templateUrl: './progress-spinner.component.html',
                styleUrls: [
                    './progress-spinner.ngx.scss',
                    './themes/progress-spinner.material.ngx.scss',
                    './themes/progress-spinner.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { value: [{
            type: Input
        }], mode: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();

class FabricProgressSpinnerModule {
}
FabricProgressSpinnerModule.ɵfac = function FabricProgressSpinnerModule_Factory(t) { return new (t || FabricProgressSpinnerModule)(); };
FabricProgressSpinnerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricProgressSpinnerModule });
FabricProgressSpinnerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricProgressSpinnerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricProgressSpinnerComponent
                ],
                exports: [
                    FabricProgressSpinnerComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricProgressSpinnerModule, { declarations: [FabricProgressSpinnerComponent], imports: [CommonModule], exports: [FabricProgressSpinnerComponent] }); })();

const _c0$9 = ["*"];
class FabricRadioButtonComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.checked = false;
        this.changed = new EventEmitter();
    }
    ngOnChanges() {
        if (this.disabled) {
            this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
        }
    }
    check() {
        this.checked = true;
        this.changed.emit(this.checked);
    }
}
FabricRadioButtonComponent.ɵfac = function FabricRadioButtonComponent_Factory(t) { return new (t || FabricRadioButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricRadioButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricRadioButtonComponent, selectors: [["gui-radio-button"]], hostVars: 2, hostBindings: function FabricRadioButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-radio-button", true);
    } }, inputs: { name: "name", checked: "checked", disabled: "disabled" }, outputs: { changed: "changed" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$9, decls: 4, vars: 3, consts: [["type", "radio", 3, "checked", "disabled", "name", "click"], [1, "gui-radio-checkmark"]], template: function FabricRadioButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "label");
        i0.ɵɵelementStart(1, "input", 0);
        i0.ɵɵlistener("click", function FabricRadioButtonComponent_Template_input_click_1_listener() { return ctx.check(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(2, "span", 1);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled)("name", ctx.name);
    } }, styles: [".gui-radio-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;font:14px Arial;line-height:18px;padding-left:32px;position:relative}.gui-radio-button label{cursor:pointer}.gui-radio-button label:hover .gui-radio-checkmark{border-color:#999}.gui-radio-button input{height:0;opacity:0;position:absolute;width:0}.gui-radio-button .gui-radio-checkmark{border-color:#d6d6d6;border-radius:50%;border-style:solid;border-width:1px;box-sizing:content-box;height:16px;left:0;position:absolute;width:16px}.gui-radio-button input:checked+.gui-radio-checkmark{border-color:#999}.gui-radio-button input:focus+.gui-radio-checkmark{border-color:#6fb4e8}.gui-radio-button.gui-disabled.gui-radio-button{color:#ccc;pointer-events:none}.gui-radio-button .gui-radio-checkmark:after{content:\"\";display:none;position:absolute}.gui-radio-button input:checked+.gui-radio-checkmark:after{box-sizing:content-box;display:block}.gui-radio-button .gui-radio-checkmark:after{background:#333;border-radius:50%;height:16px;-ms-transform:scale(.5);transform:scale(.5);width:16px}\n", ".gui-material .gui-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-radio-button{color:#bdbdbd}.gui-dark .gui-radio-button .gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:checked+.gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:focus+.gui-radio-checkmark{border-color:#ce93d8}.gui-dark .gui-radio-button .gui-radio-checkmark:after{background:#878787}.gui-dark .gui-radio-button.gui-disabled.gui-radio-button{opacity:.36}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricRadioButtonComponent, [{
        type: Component,
        args: [{
                selector: 'gui-radio-button',
                templateUrl: './radio-button.component.html',
                styleUrls: [
                    './radio-button.ngx.scss',
                    './themes/radio-button.material.ngx.scss',
                    './themes/radio-button.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-radio-button]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { name: [{
            type: Input
        }], checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();

class FabricRadioButtonModule {
}
FabricRadioButtonModule.ɵfac = function FabricRadioButtonModule_Factory(t) { return new (t || FabricRadioButtonModule)(); };
FabricRadioButtonModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricRadioButtonModule });
FabricRadioButtonModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricRadioButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricRadioButtonComponent
                ],
                exports: [
                    FabricRadioButtonComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricRadioButtonModule, { declarations: [FabricRadioButtonComponent], imports: [CommonModule], exports: [FabricRadioButtonComponent] }); })();

const _c0$8 = ["*"];
class FabricRadioGroupComponent {
}
FabricRadioGroupComponent.ɵfac = function FabricRadioGroupComponent_Factory(t) { return new (t || FabricRadioGroupComponent)(); };
FabricRadioGroupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricRadioGroupComponent, selectors: [["gui-radio-group"]], hostVars: 2, hostBindings: function FabricRadioGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-radio-group", true);
    } }, ngContentSelectors: _c0$8, decls: 1, vars: 0, template: function FabricRadioGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: [".gui-radio-group .gui-radio-button{display:block;margin-bottom:10px}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricRadioGroupComponent, [{
        type: Component,
        args: [{
                selector: 'gui-radio-group',
                templateUrl: './radio-group.component.html',
                styleUrls: [
                    './radio-group.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-radio-group]': 'true'
                }
            }]
    }], null, null); })();

class FabricRadioGroupModule {
}
FabricRadioGroupModule.ɵfac = function FabricRadioGroupModule_Factory(t) { return new (t || FabricRadioGroupModule)(); };
FabricRadioGroupModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricRadioGroupModule });
FabricRadioGroupModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricRadioGroupModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricRadioGroupComponent
                ],
                exports: [
                    FabricRadioGroupComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricRadioGroupModule, { declarations: [FabricRadioGroupComponent], imports: [CommonModule], exports: [FabricRadioGroupComponent] }); })();

var FabricNotificationPosition;
(function (FabricNotificationPosition) {
    FabricNotificationPosition[FabricNotificationPosition["TOP_RIGHT"] = 0] = "TOP_RIGHT";
    FabricNotificationPosition[FabricNotificationPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
    FabricNotificationPosition[FabricNotificationPosition["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
    FabricNotificationPosition[FabricNotificationPosition["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
})(FabricNotificationPosition || (FabricNotificationPosition = {}));

const _c0$7 = ["guiNotification"];
class FabricNotificationComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.onNotificationClose = new EventEmitter();
        this.unsub$ = new Subject();
    }
    ngOnInit() {
        if (this.notification.timer.enabled) {
            timer(this.notification.timer.duration)
                .pipe(takeUntil(this.unsub$))
                .subscribe(() => this.closeNotification());
        }
    }
    ngOnDestroy() {
        this.unsub$.next();
        this.unsub$.complete();
    }
    closeNotification() {
        this.addCloseAnimation();
        timer(200)
            .pipe(takeUntil(this.unsub$))
            .subscribe(() => this.onNotificationClose.emit(this.notification));
    }
    addCloseAnimation() {
        const notificationEl = this.notificationRef.nativeElement;
        this.renderer.addClass(notificationEl, 'gui-notification-active');
    }
    isRightSide() {
        return this.notification.position === FabricNotificationPosition.TOP_RIGHT
            || this.notification.position === FabricNotificationPosition.BOTTOM_RIGHT;
    }
}
FabricNotificationComponent.ɵfac = function FabricNotificationComponent_Factory(t) { return new (t || FabricNotificationComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricNotificationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricNotificationComponent, selectors: [["gui-notification"]], viewQuery: function FabricNotificationComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$7, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.notificationRef = _t.first);
    } }, inputs: { notification: "notification" }, outputs: { onNotificationClose: "onNotificationClose" }, decls: 4, vars: 5, consts: [[1, "gui-notification"], ["guiNotification", ""], [3, "click"]], template: function FabricNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "gui-close-icon", 2);
        i0.ɵɵlistener("click", function FabricNotificationComponent_Template_gui_close_icon_click_2_listener() { return ctx.closeNotification(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("gui-notification-right-side", ctx.isRightSide())("gui-notification-left-side", !ctx.isRightSide());
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.notification.description, " ");
    } }, directives: [FabricCloseIconComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricNotificationComponent, [{
        type: Component,
        args: [{
                selector: 'gui-notification',
                template: `
		<div #guiNotification
			 [class.gui-notification-right-side]="isRightSide()"
			 [class.gui-notification-left-side]="!isRightSide()"
			 class="gui-notification">
			<gui-close-icon (click)="closeNotification()"></gui-close-icon>
			{{notification.description}}
		</div>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.Renderer2 }]; }, { notificationRef: [{
            type: ViewChild,
            args: ['guiNotification', { static: false }]
        }], notification: [{
            type: Input
        }], onNotificationClose: [{
            type: Output
        }] }); })();

class FabricNotification {
    constructor(description, index, timer, position) {
        this.description = description;
        this.index = index;
        this.timer = timer;
        this.position = position;
    }
}

class FabricModal extends FabricReactive {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.componentRef = null;
    }
    ngOnDestroy() {
        this.removeComponent();
    }
    createAndAppend(injector) {
        const componentInjector = injector ? injector : this.injector;
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(this.getComponent())
            .create(componentInjector);
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        const domModalElement = componentRef.hostView
            .rootNodes[0];
        this.document.body.appendChild(domModalElement);
        this.componentRef = componentRef;
    }
    removeComponent() {
        if (this.componentRef) {
            this.applicationRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
    getComponentRef() {
        return this.componentRef;
    }
    getInjector() {
        return this.injector;
    }
    getDocument() {
        return this.document;
    }
}
FabricModal.ɵfac = function FabricModal_Factory(t) { return new (t || FabricModal)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ApplicationRef), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(DOCUMENT)); };
FabricModal.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FabricModal, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricModal, [{
        type: Directive
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

class FabricNotificationService extends FabricModal {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
        this.notificationIndex = 0;
        this.unsub$ = new Subject();
    }
    ngOnDestroy() {
        this.removeNotificationContainer();
    }
    getComponent() {
        return FabricNotificationsOverlayComponent;
    }
    open(notification, config) {
        let position = FabricNotificationPosition.TOP_RIGHT;
        if (config && config.position) {
            position = config.position;
        }
        this.createFabricNotification(notification, config, position);
        if (!this.getComponentRef()) {
            let theme = Theme.FABRIC, parentInjector = this.getInjector();
            if (config && config.theme) {
                theme = config.theme;
            }
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            const injector = Injector.create({
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
    }
    close() {
        this.removeNotificationContainer();
        this.unsub$.next();
        this.unsub$.complete();
    }
    removeNotificationContainer() {
        if (this.getComponentRef()) {
            this.removeComponent();
            this.notificationIndex = 0;
            this.fabricNotification = null;
        }
    }
    createFabricNotification(description, config, position) {
        let duration = FabricNotificationService.DEFAULT_DURATION, enabled = true;
        if (config && config.timer) {
            duration = config.timer.duration;
            if (config.timer.extendTimer) {
                duration = config.timer.duration * (this.notificationIndex + 1);
            }
            if (config.timer.enabled !== undefined) {
                enabled = config.timer.enabled;
            }
        }
        this.fabricNotification = new FabricNotification(description, this.notificationIndex, { duration, enabled }, position);
        this.notificationIndex += 1;
    }
    pushNotification(position) {
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
    }
}
FabricNotificationService.DEFAULT_DURATION = 4000;
FabricNotificationService.ɵfac = function FabricNotificationService_Factory(t) { return new (t || FabricNotificationService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(DOCUMENT)); };
FabricNotificationService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricNotificationService, factory: FabricNotificationService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricNotificationService, [{
        type: Injectable
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

function FabricNotificationsContainerComponent_gui_notification_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-notification", 1);
    i0.ɵɵlistener("onNotificationClose", function FabricNotificationsContainerComponent_gui_notification_0_Template_gui_notification_onNotificationClose_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.emitClosedNotification($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    i0.ɵɵproperty("notification", notification_r1);
} }
class FabricNotificationsContainerComponent {
    constructor() {
        this.onNotificationClose = new EventEmitter();
        this.FabricNotificationPosition = FabricNotificationPosition;
    }
    emitClosedNotification(selectedNotification) {
        this.onNotificationClose.emit(selectedNotification);
    }
    isPosition(fabricNotificationPosition) {
        return this.position === fabricNotificationPosition;
    }
}
FabricNotificationsContainerComponent.ɵfac = function FabricNotificationsContainerComponent_Factory(t) { return new (t || FabricNotificationsContainerComponent)(); };
FabricNotificationsContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricNotificationsContainerComponent, selectors: [["gui-notifications-container"]], hostVars: 8, hostBindings: function FabricNotificationsContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-notifications-top-right", ctx.isPosition(ctx.FabricNotificationPosition.TOP_RIGHT))("gui-notifications-top-left", ctx.isPosition(ctx.FabricNotificationPosition.TOP_LEFT))("gui-notifications-bottom-right", ctx.isPosition(ctx.FabricNotificationPosition.BOTTOM_RIGHT))("gui-notifications-bottom-left", ctx.isPosition(ctx.FabricNotificationPosition.BOTTOM_LEFT));
    } }, inputs: { notifications: "notifications", position: "position" }, outputs: { onNotificationClose: "onNotificationClose" }, decls: 1, vars: 1, consts: [[3, "notification", "onNotificationClose", 4, "ngFor", "ngForOf"], [3, "notification", "onNotificationClose"]], template: function FabricNotificationsContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FabricNotificationsContainerComponent_gui_notification_0_Template, 1, 1, "gui-notification", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.notifications);
    } }, directives: [i1.NgForOf, FabricNotificationComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricNotificationsContainerComponent, [{
        type: Component,
        args: [{
                selector: 'gui-notifications-container',
                template: `
		<gui-notification *ngFor="let notification of notifications"
						  [notification]="notification"
						  (onNotificationClose)="emitClosedNotification($event)">
		</gui-notification>
	`,
                host: {
                    '[class.gui-notifications-top-right]': 'isPosition(FabricNotificationPosition.TOP_RIGHT)',
                    '[class.gui-notifications-top-left]': 'isPosition(FabricNotificationPosition.TOP_LEFT)',
                    '[class.gui-notifications-bottom-right]': 'isPosition(FabricNotificationPosition.BOTTOM_RIGHT)',
                    '[class.gui-notifications-bottom-left]': 'isPosition(FabricNotificationPosition.BOTTOM_LEFT)'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { notifications: [{
            type: Input
        }], position: [{
            type: Input
        }], onNotificationClose: [{
            type: Output
        }] }); })();

function FabricNotificationsOverlayComponent_gui_notifications_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-notifications-container", 1);
    i0.ɵɵlistener("onNotificationClose", function FabricNotificationsOverlayComponent_gui_notifications_container_0_Template_gui_notifications_container_onNotificationClose_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.removeNotification($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("notifications", ctx_r0.notificationsTopRight)("position", ctx_r0.FabricNotificationPosition.TOP_RIGHT);
} }
function FabricNotificationsOverlayComponent_gui_notifications_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-notifications-container", 1);
    i0.ɵɵlistener("onNotificationClose", function FabricNotificationsOverlayComponent_gui_notifications_container_1_Template_gui_notifications_container_onNotificationClose_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.removeNotification($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("notifications", ctx_r1.notificationsTopLeft)("position", ctx_r1.FabricNotificationPosition.TOP_LEFT);
} }
function FabricNotificationsOverlayComponent_gui_notifications_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-notifications-container", 1);
    i0.ɵɵlistener("onNotificationClose", function FabricNotificationsOverlayComponent_gui_notifications_container_2_Template_gui_notifications_container_onNotificationClose_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.removeNotification($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("notifications", ctx_r2.notificationsBottomRight)("position", ctx_r2.FabricNotificationPosition.BOTTOM_RIGHT);
} }
function FabricNotificationsOverlayComponent_gui_notifications_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-notifications-container", 1);
    i0.ɵɵlistener("onNotificationClose", function FabricNotificationsOverlayComponent_gui_notifications_container_3_Template_gui_notifications_container_onNotificationClose_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.removeNotification($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("notifications", ctx_r3.notificationsBottomLeft)("position", ctx_r3.FabricNotificationPosition.BOTTOM_LEFT);
} }
class FabricNotificationsOverlayComponent extends FabricThemedComponent {
    constructor(changeDetectorRef, componentFactoryResolver, elRef, renderer, themeService, theme, notificationsService) {
        super(elRef, renderer, themeService);
        this.changeDetectorRef = changeDetectorRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.elRef = elRef;
        this.notificationsService = notificationsService;
        this.notificationsTopRight = [];
        this.notificationsTopLeft = [];
        this.notificationsBottomRight = [];
        this.notificationsBottomLeft = [];
        this.FabricNotificationPosition = FabricNotificationPosition;
    }
    removeNotification(selectedNotification) {
        switch (selectedNotification.position) {
            case FabricNotificationPosition.TOP_RIGHT:
                this.notificationsTopRight = this.notificationsTopRight
                    .filter((notification) => notification.index !== selectedNotification.index);
                break;
            case FabricNotificationPosition.TOP_LEFT:
                this.notificationsTopLeft = this.notificationsTopLeft
                    .filter((notification) => notification.index !== selectedNotification.index);
                break;
            case FabricNotificationPosition.BOTTOM_RIGHT:
                this.notificationsBottomRight = this.notificationsBottomRight
                    .filter((notification) => notification.index !== selectedNotification.index);
                break;
            case FabricNotificationPosition.BOTTOM_LEFT:
                this.notificationsBottomLeft = this.notificationsBottomLeft
                    .filter((notification) => notification.index !== selectedNotification.index);
                break;
            default:
                break;
        }
        this.detectChanges();
        this.checkNotificationsLength();
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    checkNotificationsLength() {
        if (this.notificationsTopRight.length === 0
            && this.notificationsTopLeft.length === 0
            && this.notificationsBottomRight.length === 0
            && this.notificationsBottomLeft.length === 0) {
            this.notificationsService.close();
        }
    }
    isContainerNotEmpty(container) {
        return container && container.length > 0;
    }
}
FabricNotificationsOverlayComponent.ɵfac = function FabricNotificationsOverlayComponent_Factory(t) { return new (t || FabricNotificationsOverlayComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(FabricModalThemeService), i0.ɵɵdirectiveInject(themeToken), i0.ɵɵdirectiveInject(forwardRef(() => FabricNotificationService))); };
FabricNotificationsOverlayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricNotificationsOverlayComponent, selectors: [["ng-component"]], hostVars: 2, hostBindings: function FabricNotificationsOverlayComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-notifications-overlay", true);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [[3, "notifications", "position", "onNotificationClose", 4, "ngIf"], [3, "notifications", "position", "onNotificationClose"]], template: function FabricNotificationsOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FabricNotificationsOverlayComponent_gui_notifications_container_0_Template, 1, 2, "gui-notifications-container", 0);
        i0.ɵɵtemplate(1, FabricNotificationsOverlayComponent_gui_notifications_container_1_Template, 1, 2, "gui-notifications-container", 0);
        i0.ɵɵtemplate(2, FabricNotificationsOverlayComponent_gui_notifications_container_2_Template, 1, 2, "gui-notifications-container", 0);
        i0.ɵɵtemplate(3, FabricNotificationsOverlayComponent_gui_notifications_container_3_Template, 1, 2, "gui-notifications-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isContainerNotEmpty(ctx.notificationsTopRight));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isContainerNotEmpty(ctx.notificationsTopLeft));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isContainerNotEmpty(ctx.notificationsBottomRight));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isContainerNotEmpty(ctx.notificationsBottomLeft));
    } }, directives: [i1.NgIf, FabricNotificationsContainerComponent], styles: [".gui-notifications-overlay{-ms-flex-align:center;align-items:center;font-family:Arial;-ms-flex-pack:center;justify-content:center;max-width:400px;position:fixed;z-index:1000}.gui-notifications-overlay gui-notifications-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:fixed}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-left{left:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-right{right:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-left{bottom:0;left:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-right{bottom:0;right:0}.gui-notifications-overlay .gui-notification{background:#fff;box-shadow:0 3px 6px -4px rgba(0,0,0,.122),0 6px 16px rgba(0,0,0,.078),0 9px 28px 8px rgba(0,0,0,.051);display:block;margin:16px;padding:32px;position:relative}.gui-notifications-overlay .gui-notification.gui-notification-right-side{-webkit-animation:loadNotificationRightSide .1s forwards;animation:loadNotificationRightSide .1s forwards}.gui-notifications-overlay .gui-notification.gui-notification-left-side{-webkit-animation:loadNotificationLeftSide .1s forwards;animation:loadNotificationLeftSide .1s forwards}@-webkit-keyframes loadNotificationRightSide{0%{transform:translate(50%)}to{transform:translate(0)}}@keyframes loadNotificationRightSide{0%{transform:translate(50%)}to{transform:translate(0)}}@-webkit-keyframes loadNotificationLeftSide{0%{transform:translate(-50%)}to{transform:translate(0)}}@keyframes loadNotificationLeftSide{0%{transform:translate(-50%)}to{transform:translate(0)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-right-side{-webkit-animation:closeNotificationRightSide .2s forwards;animation:closeNotificationRightSide .2s forwards}@-webkit-keyframes closeNotificationRightSide{0%{transform:translate(0)}to{transform:translate(100%)}}@keyframes closeNotificationRightSide{0%{transform:translate(0)}to{transform:translate(100%)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-left-side{-webkit-animation:closeNotificationLeftSide .2s forwards;animation:closeNotificationLeftSide .2s forwards}@-webkit-keyframes closeNotificationLeftSide{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes closeNotificationLeftSide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n", ".gui-dark .gui-notification{background:#424242}\n", ".gui-material .gui-notification{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricNotificationsOverlayComponent, [{
        type: Component,
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
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: FabricModalThemeService }, { type: Theme, decorators: [{
                type: Inject,
                args: [themeToken]
            }] }, { type: FabricNotificationService, decorators: [{
                type: Inject,
                args: [forwardRef(() => FabricNotificationService)]
            }] }]; }, null); })();

class FabricNotificationModule {
}
FabricNotificationModule.ɵfac = function FabricNotificationModule_Factory(t) { return new (t || FabricNotificationModule)(); };
FabricNotificationModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricNotificationModule });
FabricNotificationModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FabricNotificationService
    ], imports: [[
            CommonModule,
            FabricCloseIconModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricNotificationModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricNotificationModule, { declarations: [FabricNotificationsOverlayComponent,
        FabricNotificationsContainerComponent,
        FabricNotificationComponent], imports: [CommonModule,
        FabricCloseIconModule] }); })();

class FabricMessageService extends FabricModal {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
    }
    getComponent() {
        return FabricMessageComponent;
    }
    open(text) {
        this.createAndAppend();
        this.getComponentRef().instance.text = text;
        this.getComponentRef().instance.detectChanges();
    }
    close() {
        this.removeComponent();
    }
}
FabricMessageService.ɵfac = function FabricMessageService_Factory(t) { return new (t || FabricMessageService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(DOCUMENT)); };
FabricMessageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricMessageService, factory: FabricMessageService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricMessageService, [{
        type: Injectable
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

class FabricMessageComponent {
    constructor(messageService, changeDetectorRef) {
        this.messageService = messageService;
        this.changeDetectorRef = changeDetectorRef;
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    close() {
        this.messageService.close();
    }
}
FabricMessageComponent.ɵfac = function FabricMessageComponent_Factory(t) { return new (t || FabricMessageComponent)(i0.ɵɵdirectiveInject(FabricMessageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
FabricMessageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricMessageComponent, selectors: [["gui-message"]], decls: 4, vars: 1, consts: [[1, "gui-message"], [3, "click"]], template: function FabricMessageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵlistener("click", function FabricMessageComponent_Template_button_click_2_listener() { return ctx.close(); });
        i0.ɵɵtext(3, "X");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.text, " ");
    } }, styles: [".gui-message{left:50%;position:fixed;top:50%}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricMessageComponent, [{
        type: Component,
        args: [{
                selector: 'gui-message',
                template: `
		<div class=" gui-message">
			{{text}}
			<button (click)="close()">X</button>
		</div>
	`,
                styleUrls: [
                    './fabric-message.ngx.scss'
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: FabricMessageService }, { type: i0.ChangeDetectorRef }]; }, null); })();

class FabricMessageModule {
}
FabricMessageModule.ɵfac = function FabricMessageModule_Factory(t) { return new (t || FabricMessageModule)(); };
FabricMessageModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricMessageModule });
FabricMessageModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FabricMessageService
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricMessageModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricMessageModule, { declarations: [FabricMessageComponent], imports: [CommonModule] }); })();

const _c0$6 = ["svgEl"];
class FabricSvgTemplate {
    // todo sanitize
    ngAfterViewInit() {
        this.svgRef.nativeElement.innerHTML = this.svg;
    }
}
FabricSvgTemplate.ɵfac = function FabricSvgTemplate_Factory(t) { return new (t || FabricSvgTemplate)(); };
FabricSvgTemplate.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricSvgTemplate, selectors: [["gui-svg-template"]], viewQuery: function FabricSvgTemplate_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$6, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.svgRef = _t.first);
    } }, inputs: { svg: "svg" }, decls: 2, vars: 0, consts: [["svgEl", ""]], template: function FabricSvgTemplate_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", null, 0);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSvgTemplate, [{
        type: Component,
        args: [{
                selector: 'gui-svg-template',
                template: `
		<div #svgEl></div>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { svgRef: [{
            type: ViewChild,
            args: ['svgEl', { static: false }]
        }], svg: [{
            type: Input
        }] }); })();

const _c0$5 = ["tab"];
const _c1 = ["tabItem"];
const _c2 = ["tabMenuList"];
function FabricTabComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("click", function FabricTabComponent_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.scrollTabList(false); });
    i0.ɵɵelement(1, "gui-arrow-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("direction", ctx_r1.Direction.LEFT);
} }
function FabricTabComponent_div_5_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tab_r7);
} }
function FabricTabComponent_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "gui-svg-template", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("svg", tab_r7.svg);
} }
function FabricTabComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9, 10);
    i0.ɵɵlistener("click", function FabricTabComponent_div_5_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r14); const tab_r7 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.toggleTab(tab_r7); });
    i0.ɵɵtemplate(2, FabricTabComponent_div_5_span_2_Template, 2, 1, "span", 11);
    i0.ɵɵtemplate(3, FabricTabComponent_div_5_ng_container_3_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-tab", ctx_r2.getTabName(tab_r7));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.isSvg(tab_r7));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.isSvg(tab_r7));
} }
function FabricTabComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("click", function FabricTabComponent_div_6_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.scrollTabList(true); });
    i0.ɵɵelement(1, "gui-arrow-icon");
    i0.ɵɵelementEnd();
} }
const _c3 = ["*"];
class FabricTabComponent extends FabricReactive {
    constructor(renderer, changeDetectorRef, platformId) {
        super();
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.platformId = platformId;
        this.Direction = Direction;
        this.listPosition = 0;
        this.menuListWidth = 0;
        this.scrollAmount = 60;
        this.ACTIVE_TAB_CLASS_NAME = 'gui-active';
    }
    ngAfterViewInit() {
        this.toggleTab(this.active);
        this.calculateMenuWidth();
        this.showMenuArrows();
        this.checkIfMenuFitsOnResize();
    }
    toggleTab(tab) {
        this.removeActive();
        this.setActive(tab);
    }
    isSvg(item) {
        return typeof item === 'object';
    }
    getTabName(item) {
        return typeof item === 'object' ? item.name : item;
    }
    scrollTabList(scrollRightClicked) {
        const listWidth = this.tabRef.nativeElement.querySelector('.gui-tab-menu-list').offsetWidth, menuOverflow = this.menuListWidth - listWidth;
        if (scrollRightClicked && menuOverflow > this.listPosition) {
            this.listPosition += this.scrollAmount;
        }
        else if (!scrollRightClicked && this.listPosition > 0) {
            this.listPosition -= this.scrollAmount;
        }
        this.tabRef.nativeElement.querySelector('.' + 'gui-tab-menu-list').scrollLeft = this.listPosition;
    }
    setActive(tab) {
        if (typeof tab === 'object') {
            tab = tab.name;
        }
        const navMenuTabEl = this.tabRef.nativeElement.querySelector('[data-tab="' + tab + '"]'), navTabItemEl = this.tabItemRef.nativeElement.querySelector('[data-tab="' + tab + '"]');
        this.addClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
        this.addClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
    }
    removeActive() {
        const navMenuTabEl = this.tabRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME), navTabItemEl = this.tabItemRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME);
        this.removeClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
        this.removeClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
    }
    addClass(element, name) {
        if (element) {
            this.renderer.addClass(element, name);
        }
    }
    removeClass(element, name) {
        if (element) {
            this.renderer.removeClass(element, name);
        }
    }
    checkIfMenuFitsOnResize() {
        if (isPlatformBrowser(this.platformId)) {
            fromEvent(window, 'resize')
                .pipe(this.takeUntil())
                .subscribe(() => this.showMenuArrows());
        }
    }
    calculateMenuWidth() {
        this.menuListWidth = 0;
        this.tabMenuList
            .forEach((listItem) => {
            this.menuListWidth += listItem.nativeElement.offsetWidth;
        });
    }
    showMenuArrows() {
        const menuWidth = this.tabRef.nativeElement.querySelector('.gui-tab-menu').offsetWidth;
        this.scrollActive = menuWidth < this.menuListWidth;
        this.changeDetectorRef.detectChanges();
    }
}
FabricTabComponent.ɵfac = function FabricTabComponent_Factory(t) { return new (t || FabricTabComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(PLATFORM_ID)); };
FabricTabComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricTabComponent, selectors: [["gui-tab"]], viewQuery: function FabricTabComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$5, 5);
        i0.ɵɵviewQuery(_c1, 5);
        i0.ɵɵviewQuery(_c2, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabItemRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabMenuList = _t);
    } }, hostVars: 2, hostBindings: function FabricTabComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-tab", true);
    } }, inputs: { menu: "menu", active: "active", scrollActive: "scrollActive" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c3, decls: 10, vars: 3, consts: [["tab", ""], [1, "gui-tab-menu"], ["class", "scroll-button", 3, "click", 4, "ngIf"], [1, "gui-tab-menu-list"], ["class", "gui-tab-menu-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "gui-tab-content"], ["tabItem", ""], [1, "scroll-button", 3, "click"], [3, "direction"], [1, "gui-tab-menu-item", 3, "click"], ["tabMenuList", ""], [4, "ngIf"], [3, "svg"]], template: function FabricTabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", null, 0);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtemplate(3, FabricTabComponent_div_3_Template, 2, 1, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵtemplate(5, FabricTabComponent_div_5_Template, 4, 3, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, FabricTabComponent_div_6_Template, 2, 0, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5, 6);
        i0.ɵɵprojection(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.scrollActive);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.menu);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.scrollActive);
    } }, directives: [i1.NgIf, i1.NgForOf, FabricArrowIconComponent, FabricSvgTemplate], styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fff;border-color:#d6d6d6;border-radius:0 0 4px 4px;border-style:solid;border-width:1px;padding:12px}.gui-tab .gui-tab-menu{display:-ms-flexbox;display:flex;margin-bottom:-1px}.gui-tab .gui-tab-menu .gui-tab-menu-list{border-radius:4px 4px 0 0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden}.gui-tab .gui-tab-menu .gui-tab-menu-item{background:#fafafa;border-color:#d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;box-sizing:border-box;cursor:pointer;display:inline-block;height:34px;margin-right:2px;padding:8px 16px;position:relative;text-align:center;white-space:nowrap}.gui-tab .gui-tab-menu .gui-tab-menu-item:nth-last-child(1){margin-right:0}.gui-tab .gui-tab-menu .gui-tab-menu-item svg{height:16px;width:16px}.gui-tab .gui-tab-menu .gui-tab-menu-item svg path{fill:#aaa}.gui-tab .gui-tab-menu .scroll-button{background:transparent;box-sizing:border-box;color:#ccc;cursor:pointer;font-weight:bold;height:34px;padding:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-menu .scroll-button:hover svg path{stroke:#464646}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fff;border-color:#d6d6d6 #d6d6d6 #fff #d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;color:#2185d0}.gui-tab .gui-active.gui-tab-menu-item svg path{fill:#2185d0}.gui-tab .gui-active.gui-tab-item{display:block}\n", ".gui-material .gui-tab{font:14px Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{background:#616161;border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent #616161;color:#ce93d8}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricTabComponent, [{
        type: Component,
        args: [{
                selector: 'gui-tab',
                templateUrl: './tab.component.html',
                styleUrls: [
                    './tab.ngx.scss',
                    './themes/tab.material.ngx.scss',
                    './themes/tab.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-tab]': 'true'
                }
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { tabRef: [{
            type: ViewChild,
            args: ['tab', { static: false }]
        }], tabItemRef: [{
            type: ViewChild,
            args: ['tabItem', { static: false }]
        }], tabMenuList: [{
            type: ViewChildren,
            args: ['tabMenuList']
        }], menu: [{
            type: Input
        }], active: [{
            type: Input
        }], scrollActive: [{
            type: Input
        }] }); })();

const _c0$4 = ["*"];
class TabItemComponent {
}
TabItemComponent.ɵfac = function TabItemComponent_Factory(t) { return new (t || TabItemComponent)(); };
TabItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabItemComponent, selectors: [["gui-tab-item"]], inputs: { tab: "tab" }, ngContentSelectors: _c0$4, decls: 2, vars: 1, consts: [[1, "gui-tab-item"]], template: function TabItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵattribute("data-tab", ctx.tab);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabItemComponent, [{
        type: Component,
        args: [{
                selector: 'gui-tab-item',
                templateUrl: './tab-item.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], null, { tab: [{
            type: Input
        }] }); })();

class FabricSvgTemplateModule {
}
FabricSvgTemplateModule.ɵfac = function FabricSvgTemplateModule_Factory(t) { return new (t || FabricSvgTemplateModule)(); };
FabricSvgTemplateModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricSvgTemplateModule });
FabricSvgTemplateModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSvgTemplateModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricSvgTemplate
                ],
                exports: [
                    FabricSvgTemplate
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricSvgTemplateModule, { declarations: [FabricSvgTemplate], imports: [CommonModule], exports: [FabricSvgTemplate] }); })();

class FabricTabModule {
}
FabricTabModule.ɵfac = function FabricTabModule_Factory(t) { return new (t || FabricTabModule)(); };
FabricTabModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricTabModule });
FabricTabModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FabricArrowIconModule,
            FabricSvgTemplateModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricTabModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricTabModule, { declarations: [FabricTabComponent,
        TabItemComponent], imports: [CommonModule,
        FabricArrowIconModule,
        FabricSvgTemplateModule], exports: [FabricTabComponent,
        TabItemComponent] }); })();

class FabricTooltipComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    correctPosition() {
        this.top -= this.elementRef.nativeElement.offsetHeight;
    }
}
FabricTooltipComponent.ɵfac = function FabricTooltipComponent_Factory(t) { return new (t || FabricTooltipComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
FabricTooltipComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricTooltipComponent, selectors: [["ng-component"]], hostVars: 6, hostBindings: function FabricTooltipComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("left", ctx.left, "px")("top", ctx.top, "px");
        i0.ɵɵclassProp("gui-tooltip", true);
    } }, decls: 1, vars: 1, template: function FabricTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
    } if (rf & 2) {
        i0.ɵɵtextInterpolate1(" ", ctx.text, " ");
    } }, styles: [".gui-tooltip{background:rgba(0,0,0,.8);border-radius:4px;border-style:solid;border-width:0;box-sizing:border-box;color:#fff;display:block;font:14px Arial;font-weight:normal;padding:8px 12px;position:absolute;-ms-transform:translateX(-50%);transform:translate(-50%);vertical-align:middle;z-index:10}.gui-tooltip:after{border-color:#333 transparent transparent transparent;border-style:solid;border-width:5px;content:\"\";left:50%;margin-left:-5px;position:absolute;top:100%}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricTooltipComponent, [{
        type: Component,
        args: [{
                template: `
		{{text}}
	`,
                host: {
                    '[class.gui-tooltip]': 'true',
                    '[style.left.px]': 'left',
                    '[style.top.px]': 'top'
                },
                styleUrls: ['./fabric-tooltip.ngx.scss'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();

class FabricTooltipDirective extends FabricReactive {
    constructor(componentFactoryResolver, injector, elementRef, applicationRef, document, platformId) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.elementRef = elementRef;
        this.applicationRef = applicationRef;
        this.document = document;
        this.platformId = platformId;
        this.text = '';
        this.tooltipRef = null;
    }
    ngOnInit() {
        const open$ = fromEvent(this.elementRef.nativeElement, 'mouseenter'), close$ = fromEvent(this.elementRef.nativeElement, 'mouseleave');
        open$
            .pipe(this.takeUntil())
            .subscribe(() => this.show());
        close$
            .pipe(this.takeUntil())
            .subscribe(() => {
            if (this.tooltipRef) {
                this.hide();
            }
        });
    }
    show() {
        const tooltipRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricTooltipComponent)
            .create(this.injector);
        tooltipRef.instance.text = this.text;
        tooltipRef.changeDetectorRef.detectChanges();
        const domElement = tooltipRef.hostView
            .rootNodes[0];
        this.document.body.appendChild(domElement);
        this.tooltipRef = tooltipRef;
        this.calculateCords();
        this.tooltipRef.instance.correctPosition();
        this.tooltipRef.changeDetectorRef.detectChanges();
    }
    hide() {
        this.applicationRef.detachView(this.tooltipRef.hostView);
        this.tooltipRef.destroy();
        this.tooltipRef = null;
    }
    calculateCords() {
        const elementRef = this.elementRef.nativeElement, elementRect = elementRef.getBoundingClientRect(), elementBottom = elementRect.bottom, elementLeft = elementRect.left;
        if (isPlatformBrowser(this.platformId)) {
            this.tooltipTopPosition =
                elementBottom + window.scrollY
                    - elementRef.offsetHeight
                    - FabricTooltipDirective.tooltipOffset;
            this.tooltipLeftPosition = window.scrollX + elementLeft + elementRef.offsetWidth / 2;
            this.tooltipRef.instance.top = this.tooltipTopPosition;
            this.tooltipRef.instance.left = this.tooltipLeftPosition;
            this.tooltipRef.changeDetectorRef.detectChanges();
        }
    }
}
FabricTooltipDirective.tooltipOffset = 8;
FabricTooltipDirective.ɵfac = function FabricTooltipDirective_Factory(t) { return new (t || FabricTooltipDirective)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ApplicationRef), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(PLATFORM_ID)); };
FabricTooltipDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FabricTooltipDirective, selectors: [["", "gui-tooltip", ""]], inputs: { text: ["gui-tooltip", "text"] }, exportAs: ["guiTooltip"], features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[gui-tooltip]',
                exportAs: 'guiTooltip'
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.Injector }, { type: i0.ElementRef }, { type: i0.ApplicationRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { text: [{
            type: Input,
            args: ['gui-tooltip']
        }] }); })();

class FabricTooltipModule {
}
FabricTooltipModule.ɵfac = function FabricTooltipModule_Factory(t) { return new (t || FabricTooltipModule)(); };
FabricTooltipModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricTooltipModule });
FabricTooltipModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricTooltipModule, [{
        type: NgModule,
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricTooltipModule, { declarations: [FabricTooltipDirective,
        FabricTooltipComponent], exports: [FabricTooltipDirective,
        FabricTooltipComponent] }); })();

class SelectOptionsCords {
    constructor(element, selectContainerGeometry, window) {
        this.element = element;
        this.selectContainerGeometry = selectContainerGeometry;
        this.window = window;
        this.calculateCords(element, selectContainerGeometry);
    }
    getVerticalPosition() {
        return this.verticalPosition;
    }
    getHorizontalPosition() {
        return this.horizontalPosition;
    }
    getCanOpenUpward() {
        return this.canOpenUpward;
    }
    calculateCords(element, selectOptionsGeometry) {
        const elementRect = element.nativeElement.getBoundingClientRect(), elementBottom = this.window.pageYOffset + elementRect.bottom, elementLeft = this.window.pageXOffset + elementRect.left;
        this.horizontalPosition = elementLeft;
        this.verticalPosition = elementBottom - SelectOptionsCords.BORDER_WIDTH;
        this.calculateDirection(selectOptionsGeometry, element);
    }
    calculateDirection(selectOptionsGeometry, element) {
        const windowHeight = this.window.innerHeight + this.window.pageYOffset, elementHeight = element.nativeElement.offsetHeight, selectOptionsHeight = selectOptionsGeometry.getHeight();
        const selectOptionsDoesNotFitVertically = (windowHeight - this.verticalPosition - selectOptionsHeight) < 0;
        if (selectOptionsDoesNotFitVertically) {
            this.canOpenUpward = true;
            this.verticalPosition -= selectOptionsHeight + elementHeight - SelectOptionsCords.BORDER_WIDTH;
        }
    }
}
SelectOptionsCords.BORDER_WIDTH = 1;

class SelectOptionsGeometry {
    constructor(selectOptionsGeometry) {
        this.selectOptionsGeometry = selectOptionsGeometry;
    }
    getHeight() {
        return this.selectOptionsGeometry.nativeElement.querySelector('.gui-options-list').offsetHeight;
    }
    getWidth() {
        return this.selectOptionsGeometry.nativeElement.querySelector('.gui-options-list').offsetWidth;
    }
}

class SelectOptionsGeometryService {
    constructor(platformId) {
        this.platformId = platformId;
        this.selectOptionsCords$ = new ReplaySubject(1);
    }
    onSelectOptionsCords() {
        return this.selectOptionsCords$.asObservable();
    }
    setGeometry(selectContainerRef) {
        this.selectContainerGeometry = new SelectOptionsGeometry(selectContainerRef);
    }
    nextCords(element) {
        if (isPlatformBrowser(this.platformId)) {
            const selectOptionsCords = new SelectOptionsCords(element, this.selectContainerGeometry, window);
            this.selectOptionsCords$.next(selectOptionsCords);
        }
    }
}
SelectOptionsGeometryService.ɵfac = function SelectOptionsGeometryService_Factory(t) { return new (t || SelectOptionsGeometryService)(i0.ɵɵinject(PLATFORM_ID)); };
SelectOptionsGeometryService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SelectOptionsGeometryService, factory: SelectOptionsGeometryService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectOptionsGeometryService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();

class FabricSelectedOptionsRepository {
    constructor() {
        this.selectedOption$ = new ReplaySubject(1);
    }
    onSelectedOption() {
        return this.selectedOption$.asObservable();
    }
    next(option) {
        this.selectedOption$.next(option);
    }
}
FabricSelectedOptionsRepository.ɵfac = function FabricSelectedOptionsRepository_Factory(t) { return new (t || FabricSelectedOptionsRepository)(); };
FabricSelectedOptionsRepository.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricSelectedOptionsRepository, factory: FabricSelectedOptionsRepository.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSelectedOptionsRepository, [{
        type: Injectable
    }], null, null); })();

const _c0$3 = ["optionList"];
function FabricSelectOptionsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵlistener("click", function FabricSelectOptionsComponent_div_2_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const option_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.selectOption(option_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r1.width, "px");
    i0.ɵɵclassProp("gui-option-selected", ctx_r1.isOptionSelected(option_r2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getOptionValue(option_r2), " ");
} }
class FabricSelectOptionsComponent extends FabricThemedComponent {
    constructor(selectOptionsGeometryService, selectService, changeDetectorRef, elementRef, renderer, themeService) {
        super(elementRef, renderer, themeService);
        this.selectOptionsGeometryService = selectOptionsGeometryService;
        this.selectService = selectService;
        this.changeDetectorRef = changeDetectorRef;
        this.options = [];
        this.width = 100;
    }
    ngOnInit() {
        this.selectOptionsGeometryService
            .onSelectOptionsCords()
            .pipe(this.takeUntil())
            .subscribe((cords) => {
            this.optionsContainerTopAttribute = cords.getVerticalPosition();
            this.optionsContainerLeftAttribute = cords.getHorizontalPosition();
            this.canOpenUpward = cords.getCanOpenUpward();
            this.changeDetectorRef.detectChanges();
        });
        this.selectService
            .onSelectedOption()
            .pipe(this.takeUntil())
            .subscribe((selectedOption) => {
            this.selectedOption = selectedOption;
            this.changeDetectorRef.detectChanges();
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.initOpenAnimation();
    }
    getElementRef() {
        return super.getElementRef();
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    selectOption(option) {
        this.selectService.next(option);
    }
    isOptionSelected(option) {
        return this.selectedOption && option.name === this.selectedOption.name;
    }
    getOptionValue(option) {
        return option.value ? option.value : option.name;
    }
    initOpenAnimation() {
        const optionsEl = this.optionListRef.nativeElement;
        this.getRenderer().addClass(optionsEl, 'gui-options-opened');
    }
}
FabricSelectOptionsComponent.ɵfac = function FabricSelectOptionsComponent_Factory(t) { return new (t || FabricSelectOptionsComponent)(i0.ɵɵdirectiveInject(SelectOptionsGeometryService), i0.ɵɵdirectiveInject(FabricSelectedOptionsRepository), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(FabricModalThemeService)); };
FabricSelectOptionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricSelectOptionsComponent, selectors: [["ng-component"]], viewQuery: function FabricSelectOptionsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$3, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.optionListRef = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 9, consts: [[1, "gui-options-list"], ["optionList", ""], ["class", "gui-option", 3, "gui-option-selected", "width", "click", 4, "ngFor", "ngForOf"], [1, "gui-option", 3, "click"]], template: function FabricSelectOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵtemplate(2, FabricSelectOptionsComponent_div_2_Template, 2, 5, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("left", ctx.optionsContainerLeftAttribute, "px")("top", ctx.optionsContainerTopAttribute, "px");
        i0.ɵɵclassProp("gui-upward", ctx.canOpenUpward)("gui-downward", !ctx.canOpenUpward);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSelectOptionsComponent, [{
        type: Component,
        args: [{
                template: `
		<div #optionList
			 [class.gui-upward]="canOpenUpward"
			 [class.gui-downward]="!canOpenUpward"
			 [style.left.px]="optionsContainerLeftAttribute"
			 [style.top.px]="optionsContainerTopAttribute"
			 class="gui-options-list">

			<div *ngFor="let option of options"
				 [class.gui-option-selected]="isOptionSelected(option)"
				 [style.width.px]="width"
				 (click)="selectOption(option)"
				 class="gui-option">
				{{getOptionValue(option)}}
			</div>
		</div>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: SelectOptionsGeometryService }, { type: FabricSelectedOptionsRepository }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: FabricModalThemeService }]; }, { optionListRef: [{
            type: ViewChild,
            args: ['optionList', { static: false }]
        }] }); })();

class SelectOptionModalService extends FabricModal {
    constructor(selectOptionsGeometryService, componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
        this.selectOptionsGeometryService = selectOptionsGeometryService;
    }
    getComponent() {
        return FabricSelectOptionsComponent;
    }
    open(options, width) {
        this.createAndAppend();
        this.getComponentRef().instance.options = options;
        this.getComponentRef().instance.width = width;
        this.getComponentRef().instance.detectChanges();
        this.selectOptionsGeometryService.setGeometry(this.getComponentRef().instance.getElementRef());
        this.getComponentRef().instance.detectChanges();
    }
    closeOptions() {
        this.removeComponent();
    }
}
SelectOptionModalService.ɵfac = function SelectOptionModalService_Factory(t) { return new (t || SelectOptionModalService)(i0.ɵɵinject(SelectOptionsGeometryService), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(DOCUMENT)); };
SelectOptionModalService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SelectOptionModalService, factory: SelectOptionModalService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectOptionModalService, [{
        type: Injectable
    }], function () { return [{ type: SelectOptionsGeometryService }, { type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

const _c0$2 = ["container"];
class FabricSelectComponent extends FabricReactive {
    constructor(selectService, selectOptionsGeometryService, selectOptionModalService, changeDetectorRef, platformId, elementRef, renderer) {
        super();
        this.selectService = selectService;
        this.selectOptionsGeometryService = selectOptionsGeometryService;
        this.selectOptionModalService = selectOptionModalService;
        this.changeDetectorRef = changeDetectorRef;
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.options = [];
        this.placeholder = '...';
        this.width = 100;
        this.disabled = false;
        this.optionChanged = new EventEmitter();
        this.doNotEmitValues = false;
        this.opened = false;
    }
    ngOnChanges(changes) {
        if (changes.placeholder) {
            this.containerText = this.placeholder;
        }
        if (changes.selected) {
            if (this.selected) {
                this.tryToSelect(this.selected);
            }
        }
    }
    ngOnInit() {
        this.selectService
            .onSelectedOption()
            .pipe(this.takeUntil())
            .subscribe((selectedOption) => {
            this.emitSelectedOption(selectedOption);
            this.selectedOption = selectedOption;
            this.containerText = selectedOption.value;
            this.doNotEmitValues = false;
            this.changeDetectorRef.detectChanges();
        });
        this.selectOptionsGeometryService
            .onSelectOptionsCords()
            .pipe(this.takeUntil())
            .subscribe((cords) => {
            if (cords.getCanOpenUpward()) {
                this.openUpward();
            }
            else {
                this.openDownward();
            }
        });
    }
    tryToOpen(event) {
        if (this.isContainerDisabled(event)) {
            event.stopPropagation();
        }
        else {
            this.open(this.options, this.width);
            this.toggleOptions(!this.opened);
            this.changeDetectorRef.detectChanges();
        }
    }
    clickOutside(event) {
        if (this.isContainerClicked(event)) {
            this.toggleOptions(false);
        }
    }
    toggleOptions(opened) {
        this.opened = opened;
        this.maintainOptionsListPosition();
        if (!this.opened) {
            this.closeOptions();
        }
    }
    isOptionSelected(option) {
        return this.selectedOption && option.name === this.selectedOption.name;
    }
    getOptionValue(option) {
        if (option) {
            return option.value ? option.value : option.name;
        }
        return '';
    }
    open(options, width) {
        this.closeSelect();
        this.selectOptionModalService.open(options, width);
        this.selectOptionsGeometryService.nextCords(this.containerRef);
    }
    tryToSelect(option) {
        const canSelect = this.selectedOption ? option.name !== this.selectedOption.name : true;
        if (canSelect) {
            this.doNotEmitValues = true;
            this.selectService.next(option);
            this.selectedOption = option;
            this.containerText = this.getOptionValue(option);
        }
    }
    maintainOptionsListPosition() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.opened) {
                this.scrollListenerFn = this.renderer.listen('window', 'scroll', () => {
                    this.selectOptionsGeometryService.nextCords(this.containerRef);
                });
            }
            else {
                if (this.scrollListenerFn) {
                    this.scrollListenerFn();
                }
            }
        }
    }
    closeSelect() {
        this.selectOptionModalService.closeOptions();
    }
    emitSelectedOption(option) {
        if (!this.doNotEmitValues) {
            if (!this.isOptionSelected(option)) {
                this.optionChanged.emit(option);
            }
        }
    }
    openDownward() {
        this.addClass('gui-options-opened');
        this.addClass('gui-downward');
        this.removeClass('gui-upward');
    }
    openUpward() {
        this.addClass('gui-options-opened');
        this.addClass('gui-upward');
        this.removeClass('gui-downward');
    }
    closeOptions() {
        const optionsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-options-opened');
        if (optionsElHasOpenClass) {
            this.removeClass('gui-options-opened');
            this.closeSelect();
        }
    }
    isContainerClicked(event) {
        return !this.elementRef.nativeElement.contains(event.target);
    }
    isContainerDisabled(event) {
        return event.target.classList.contains('gui-disabled');
    }
    addClass(className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }
    removeClass(className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }
}
FabricSelectComponent.ɵfac = function FabricSelectComponent_Factory(t) { return new (t || FabricSelectComponent)(i0.ɵɵdirectiveInject(FabricSelectedOptionsRepository), i0.ɵɵdirectiveInject(SelectOptionsGeometryService), i0.ɵɵdirectiveInject(SelectOptionModalService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricSelectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricSelectComponent, selectors: [["gui-select"]], viewQuery: function FabricSelectComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$2, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    } }, hostVars: 2, hostBindings: function FabricSelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-select", true);
    } }, inputs: { options: "options", placeholder: "placeholder", selected: "selected", width: "width", disabled: "disabled" }, outputs: { optionChanged: "optionChanged" }, features: [i0.ɵɵProvidersFeature([
            FabricSelectedOptionsRepository,
            SelectOptionsGeometryService,
            SelectOptionModalService
        ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 5, vars: 5, consts: [[1, "gui-select-container", 3, "click"], ["container", ""], [1, "gui-select-value"], [1, "gui-select-arrow"]], template: function FabricSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("click", function FabricSelectComponent_Template_div_click_0_listener($event) { return ctx.tryToOpen($event); })("click", function FabricSelectComponent_Template_div_click_0_listener($event) { return ctx.clickOutside($event); }, false, i0.ɵɵresolveDocument);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "span", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.width, "px");
        i0.ɵɵclassProp("gui-disabled", ctx.disabled);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.containerText, " ");
    } }, styles: [".gui-select .gui-select-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:content-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent transparent;height:0;margin:8px;position:absolute;right:5px;top:5px;width:0}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8 #6fb4e8 transparent #6fb4e8;border-radius:4px 4px 0 0;border-width:1px}.gui-select.gui-downward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-downward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:1px 0 0 0}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959 transparent;bottom:5px;left:5px;top:auto}.gui-select.gui-upward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-upward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:0 0 1px 0;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#cccccc transparent transparent transparent}.gui-select .initAnimationDisabled.gui-options-list{display:none}.gui-options-list{background:#fff;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px;overflow:hidden;padding:0;position:absolute;z-index:1000}.gui-options-list .gui-option{box-sizing:content-box;cursor:pointer;font-size:14px;list-style-type:none;padding:8px 24px 8px 12px}.gui-options-list .gui-option:hover{background:#dcdcdc}.gui-options-list .gui-option-selected{background:#e6e6e6;font-weight:bold}.gui-options-list.gui-upward{-webkit-animation:loadUpward .2s forwards;animation:loadUpward .2s forwards;border-bottom:none;border-color:#6fb4e8;border-radius:4px 4px 0 0;border-style:solid;border-width:1px}@-webkit-keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}.gui-options-list.gui-downward{-webkit-animation:loadDownward .2s forwards;animation:loadDownward .2s forwards;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px}@-webkit-keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}\n", ".gui-material .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-options-list .gui-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent transparent}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8 transparent}.gui-dark .gui-select .gui-disabled{opacity:.36}.gui-dark .gui-options-list{border-color:#ce93d8}.gui-dark .gui-options-list .gui-option{background:#424242;border-color:#757575;color:#bdbdbd}.gui-dark .gui-options-list .gui-option:hover{background:#616161}.gui-dark .gui-options-list .gui-option-selected{background:#757575}\n", ".gui-light .gui-select .gui-select-container{background:#fff;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light .gui-options-list .gui-option:hover{background:#f6f6f5}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSelectComponent, [{
        type: Component,
        args: [{
                selector: 'gui-select',
                templateUrl: './select.component.html',
                styleUrls: [
                    './select.ngx.scss',
                    './themes/select.material.ngx.scss',
                    './themes/select.dark.ngx.scss',
                    './themes/select.light.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-select]': 'true'
                },
                providers: [
                    FabricSelectedOptionsRepository,
                    SelectOptionsGeometryService,
                    SelectOptionModalService
                ]
            }]
    }], function () { return [{ type: FabricSelectedOptionsRepository }, { type: SelectOptionsGeometryService }, { type: SelectOptionModalService }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { containerRef: [{
            type: ViewChild,
            args: ['container', { static: false }]
        }], options: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], selected: [{
            type: Input
        }], width: [{
            type: Input
        }], disabled: [{
            type: Input
        }], optionChanged: [{
            type: Output
        }] }); })();

class FabricSelectModule {
}
FabricSelectModule.ɵfac = function FabricSelectModule_Factory(t) { return new (t || FabricSelectModule)(); };
FabricSelectModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricSelectModule });
FabricSelectModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSelectModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricSelectModule, { declarations: [FabricSelectComponent,
        FabricSelectOptionsComponent], imports: [CommonModule], exports: [FabricSelectComponent] }); })();

class FabricSliderComponent {
    constructor() {
        this.changed = new EventEmitter();
    }
    toggle(event) {
        event.stopPropagation();
        this.toggled = !this.toggled;
        this.changed.emit(this.toggled);
    }
}
FabricSliderComponent.ɵfac = function FabricSliderComponent_Factory(t) { return new (t || FabricSliderComponent)(); };
FabricSliderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricSliderComponent, selectors: [["gui-slider"]], inputs: { toggled: "toggled" }, outputs: { changed: "changed" }, decls: 2, vars: 2, consts: [[1, "gui-slider", 3, "click"], [1, "gui-slider-indicator"]], template: function FabricSliderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function FabricSliderComponent_Template_div_click_0_listener($event) { return ctx.toggle($event); });
        i0.ɵɵelement(1, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("is-toggled", ctx.toggled);
    } }, styles: [".gui-slider{background:#cccccc;border-radius:4px;cursor:pointer;display:block;height:12px;position:relative;width:32px}.gui-slider .gui-slider-indicator{background:#2185d0;border-radius:50%;box-sizing:border-box;height:16px;overflow:hidden;position:absolute;top:-2px;-ms-transform:translateX(-5.33333px);transform:translate(-5.33333px);transition:all .2s ease-in-out;width:16px}.gui-slider .gui-slider-indicator.is-toggled{-ms-transform:translateX(calc(100% + 16px / 3));transform:translate(calc(100% + 16px / 3))}\n", ".gui-dark .gui-slider{background:#424242}.gui-dark .gui-slider .gui-slider-indicator{background:#ce93d8}\n", ".gui-material .gui-slider .gui-slider-indicator{background:#6200ee}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSliderComponent, [{
        type: Component,
        args: [{
                selector: 'gui-slider',
                templateUrl: './fabric-slider.component.html',
                styleUrls: [
                    './fabric-slider.ngx.scss',
                    './themes/fabric-slider.dark.ngx.scss',
                    './themes/fabric-slider.material.ngx.scss'
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { toggled: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();

class FabricSliderModule {
}
FabricSliderModule.ɵfac = function FabricSliderModule_Factory(t) { return new (t || FabricSliderModule)(); };
FabricSliderModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricSliderModule });
FabricSliderModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSliderModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricSliderComponent
                ],
                exports: [
                    FabricSliderComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricSliderModule, { declarations: [FabricSliderComponent], imports: [CommonModule], exports: [FabricSliderComponent] }); })();

class FabricSpinnerComponent extends AbstractSpinner {
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
FabricSpinnerComponent.ɵfac = function FabricSpinnerComponent_Factory(t) { return new (t || FabricSpinnerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricSpinnerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricSpinnerComponent, selectors: [["gui-spinner"]], hostVars: 2, hostBindings: function FabricSpinnerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-spinner", true);
    } }, inputs: { color: "color" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 30, consts: [[1, "gui-spinner"], [1, "circle-outer"], ["cx", "50%", "cy", "50%"], [1, "circle-inner"]], template: function FabricSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "circle", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "svg", 3);
        i0.ɵɵelement(4, "circle", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("stroke-dasharray", ctx.croppedCircle)("stroke-dashoffset", ctx.circumference)("stroke-width", ctx.width)("stroke", ctx.color);
        i0.ɵɵattribute("r", ctx.r);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("stroke-dasharray", ctx.croppedCircle)("stroke-dashoffset", ctx.circumference)("stroke-width", ctx.width)("stroke", ctx.color);
        i0.ɵɵattribute("r", ctx.r);
    } }, styles: ["@-webkit-keyframes gui-spin{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@keyframes gui-spin{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@-webkit-keyframes gui-spin-reverse{0%{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}@keyframes gui-spin-reverse{0%{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}.gui-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-spinner circle{fill:transparent;stroke:#999}.gui-spinner svg{position:absolute}.gui-spinner .circle-inner{animation:gui-spin-reverse 2s infinite linear forwards reverse}.gui-spinner .circle-outer{-webkit-animation:gui-spin 2s infinite linear forwards;animation:gui-spin 2s infinite linear forwards}.gui-primary .gui-spinner.gui-spinner circle{stroke:#2185d0}.gui-secondary .gui-spinner.gui-spinner circle{stroke:#3cb371}\n", ".gui-material .gui-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-spinner circle{stroke:#0097a7}\n", ".gui-dark .gui-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-spinner circle{stroke:#80cbc4}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSpinnerComponent, [{
        type: Component,
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
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { color: [{
            type: Input
        }] }); })();

class FabricSpinnerModule {
}
FabricSpinnerModule.ɵfac = function FabricSpinnerModule_Factory(t) { return new (t || FabricSpinnerModule)(); };
FabricSpinnerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricSpinnerModule });
FabricSpinnerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSpinnerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricSpinnerComponent
                ],
                exports: [
                    FabricSpinnerComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricSpinnerModule, { declarations: [FabricSpinnerComponent], imports: [CommonModule], exports: [FabricSpinnerComponent] }); })();

class ToggleButtonGroupService {
    constructor() {
        this.toggleButtonId$ = new Subject();
    }
    ngOnDestroy() {
        this.toggleButtonId$.next();
        this.toggleButtonId$.complete();
    }
    observeToggledButton() {
        return this.toggleButtonId$.asObservable();
    }
    toggleButton(id) {
        this.toggleButtonId$.next(id);
    }
}
ToggleButtonGroupService.ɵfac = function ToggleButtonGroupService_Factory(t) { return new (t || ToggleButtonGroupService)(); };
ToggleButtonGroupService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ToggleButtonGroupService, factory: ToggleButtonGroupService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToggleButtonGroupService, [{
        type: Injectable
    }], null, null); })();

const _c0$1 = ["*"];
class FabricToggleButtonComponent extends Indicator {
    constructor(elementRef, renderer, toggleButtonGroupService) {
        super(elementRef, renderer);
        this.toggleButtonGroupService = toggleButtonGroupService;
        this.checked = false;
        this.disabled = false;
        this.changed = new EventEmitter();
        this.buttonChecked = false;
        this.buttonId = Math.floor(Math.random() * 1000000);
        this.generateButtonId();
    }
    ngOnChanges(changes) {
        if (changes.checked) {
            this.setButtonChecked(this.checked);
        }
        if (changes.disabled) {
            this.toggleDisabledCssClass();
        }
    }
    ngOnInit() {
        this.observeToggleButtonGroup();
    }
    tryToToggle(e) {
        if (e.target.disabled) {
            e.stopPropagation();
        }
        else {
            this.toggle();
        }
    }
    toggle() {
        this.toggleButtonChecked();
        this.changed.emit(this.buttonChecked);
    }
    toggleButtonChecked() {
        this.setButtonChecked(!this.buttonChecked);
    }
    setButtonChecked(checked) {
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
    }
    observeToggleButtonGroup() {
        if (this.toggleButtonGroupService !== null) {
            this.toggleButtonGroupService.observeToggledButton().subscribe(id => {
                if (id !== this.buttonId) {
                    this.buttonChecked = !this.buttonChecked;
                    this.removeClass('gui-checked');
                }
                else {
                    this.buttonChecked = true;
                }
                this.changed.emit(this.buttonChecked);
            });
        }
    }
    generateButtonId() {
        return this.buttonId;
    }
    toggleDisabledCssClass() {
        if (this.disabled) {
            this.addClass('gui-disabled');
        }
        else {
            this.removeClass('gui-disabled');
        }
    }
}
FabricToggleButtonComponent.ɵfac = function FabricToggleButtonComponent_Factory(t) { return new (t || FabricToggleButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(ToggleButtonGroupService, 8)); };
FabricToggleButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricToggleButtonComponent, selectors: [["gui-button-toggle"]], hostVars: 2, hostBindings: function FabricToggleButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-button-toggle", true);
    } }, inputs: { checked: "checked", disabled: "disabled" }, outputs: { changed: "changed" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$1, decls: 2, vars: 4, consts: [["gui-button", "", 3, "disabled", "outline", "primary", "secondary", "click"]], template: function FabricToggleButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function FabricToggleButtonComponent_Template_button_click_0_listener($event) { return ctx.tryToToggle($event); });
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.disabled)("outline", ctx.outline)("primary", ctx.primary)("secondary", ctx.secondary);
    } }, directives: [FabricButtonComponent], styles: [".gui-checked .gui-button{background:#e6e6e6;box-shadow:inset 0 10px 0 -5px #999;color:#333}.gui-checked .gui-button:hover{background:#cccccc}.gui-checked .gui-button:active{background:#999}.gui-checked .gui-button.gui-outline{background:transparent;box-shadow:0 0 0 2px #d6d6d6}.gui-checked .gui-button.gui-outline.gui-primary{background:transparent;box-shadow:0 0 0 2px #439de1;color:#2185d0}.gui-checked .gui-button.gui-outline.gui-primary:hover{color:#fff}.gui-checked .gui-button.gui-outline.gui-secondary{background:transparent;box-shadow:0 0 0 2px #5ac88b;color:#3cb371}.gui-checked .gui-button.gui-outline.gui-secondary:hover{color:#fff}.gui-checked .gui-button.gui-primary{background:#2185d0;box-shadow:inset 0 10px 0 -5px #175b8e;color:#fff}.gui-checked .gui-button.gui-secondary{background:#3cb371;box-shadow:inset 0 10px 0 -5px #2b8152;color:#fff}.gui-disabled{pointer-events:none}\n", ".gui-material .gui-button{background:#3949ab;color:#fff}.gui-material .gui-checked .gui-button{background:#3949ab;box-shadow:inset 0 10px 0 -5px #7885d2;color:#fff}.gui-material .gui-checked .gui-button:hover{background:#5262c5}.gui-material .gui-checked .gui-button:active{background:#4051bf}.gui-material .gui-checked .gui-button.gui-outline{background:#c5cae9;box-shadow:0 0 0 1px #5262c5;color:#3949ab}.gui-material .gui-checked .gui-button.gui-outline.gui-primary{background:#d1c4e9;box-shadow:0 0 0 1px #6200ee;color:#6200ee}.gui-material .gui-checked .gui-button.gui-outline.gui-secondary{background:#b2ebf2;box-shadow:0 0 0 1px #0097a7;color:#0097a7}.gui-material .gui-checked .gui-button.gui-primary{background:#6200ee;box-shadow:inset 0 10px 0 -5px #d1c4e9;color:#fff}.gui-material .gui-checked .gui-button.gui-secondary{background:#0097a7;box-shadow:inset 0 10px 0 -5px #b2ebf2;color:#fff}\n", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-checked .gui-button{color:#bdbdbd}.gui-dark .gui-checked .gui-button:hover{background:#616161}.gui-dark .gui-checked .gui-button:active{background:#212121}.gui-dark .gui-checked .gui-button.gui-outline{background:#2e2e2e;box-shadow:0 0 0 1px #616161;color:#bdbdbd}.gui-dark .gui-checked .gui-button.gui-outline.gui-primary{background:#b55bc4;box-shadow:0 0 0 1px #ce93d8;color:#212121}.gui-dark .gui-checked .gui-button.gui-outline.gui-secondary{background:#26a69a;box-shadow:0 0 0 1px #80cbc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-primary{background:#ce93d8;box-shadow:inset 0 10px 0 -5px #b55bc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-secondary{background:#80cbc4;box-shadow:inset 0 10px 0 -5px #26a69a;color:#212121}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricToggleButtonComponent, [{
        type: Component,
        args: [{
                selector: 'gui-button-toggle',
                templateUrl: './toggle-button.component.html',
                styleUrls: [
                    './toggle-button.ngx.scss',
                    './themes/toggle-button.material.ngx.scss',
                    './themes/toggle-button.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-button-toggle]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: ToggleButtonGroupService, decorators: [{
                type: Optional
            }] }]; }, { checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();

class FabricToggleButtonModule {
}
FabricToggleButtonModule.ɵfac = function FabricToggleButtonModule_Factory(t) { return new (t || FabricToggleButtonModule)(); };
FabricToggleButtonModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricToggleButtonModule });
FabricToggleButtonModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FabricButtonModule
        ], FabricButtonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricToggleButtonModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricToggleButtonModule, { declarations: [FabricToggleButtonComponent], imports: [CommonModule,
        FabricButtonModule], exports: [FabricToggleButtonComponent,
        FabricButtonModule] }); })();

const _c0 = ["*"];
class FabricToggleButtonGroupComponent {
}
FabricToggleButtonGroupComponent.ɵfac = function FabricToggleButtonGroupComponent_Factory(t) { return new (t || FabricToggleButtonGroupComponent)(); };
FabricToggleButtonGroupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricToggleButtonGroupComponent, selectors: [["gui-toggle-button-group"]], hostVars: 2, hostBindings: function FabricToggleButtonGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-toggle-button-group", true);
    } }, features: [i0.ɵɵProvidersFeature([ToggleButtonGroupService])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function FabricToggleButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: [".gui-toggle-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-toggle-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-toggle-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-toggle-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-toggle-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricToggleButtonGroupComponent, [{
        type: Component,
        args: [{
                selector: 'gui-toggle-button-group',
                templateUrl: './toggle-button-group.component.html',
                styleUrls: [
                    './toggle-button-group.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-toggle-button-group]': 'true'
                },
                providers: [ToggleButtonGroupService]
            }]
    }], null, null); })();

class FabricToggleButtonGroupModule {
}
FabricToggleButtonGroupModule.ɵfac = function FabricToggleButtonGroupModule_Factory(t) { return new (t || FabricToggleButtonGroupModule)(); };
FabricToggleButtonGroupModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricToggleButtonGroupModule });
FabricToggleButtonGroupModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricToggleButtonGroupModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricToggleButtonGroupComponent
                ],
                exports: [
                    FabricToggleButtonGroupComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricToggleButtonGroupModule, { declarations: [FabricToggleButtonGroupComponent], imports: [CommonModule], exports: [FabricToggleButtonGroupComponent] }); })();

class StarIconComponent {
}
StarIconComponent.ɵfac = function StarIconComponent_Factory(t) { return new (t || StarIconComponent)(); };
StarIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StarIconComponent, selectors: [["gui-star-icon"]], hostVars: 2, hostBindings: function StarIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-star-icon", true);
    } }, decls: 2, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "34.542", "height", "32.852", "viewBox", "0 0 34.542 32.852"], ["data-name", "Path 572", "d", "M-121.168-469.432l5.337,10.814,11.934,1.734-8.636,8.418,2.039,11.886-10.674-5.612-10.674,5.612,2.039-11.886-8.636-8.418,11.934-1.734Z", "transform", "translate(138.44 469.432)", "fill", "#ffe623", "fill-rule", "evenodd"]], template: function StarIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 0);
        i0.ɵɵelement(1, "path", 1);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StarIconComponent, [{
        type: Component,
        args: [{
                selector: 'gui-star-icon',
                template: `
		<svg xmlns="http://www.w3.org/2000/svg" width="34.542" height="32.852" viewBox="0 0 34.542 32.852">
			<path data-name="Path 572"
				  d="M-121.168-469.432l5.337,10.814,11.934,1.734-8.636,8.418,2.039,11.886-10.674-5.612-10.674,5.612,2.039-11.886-8.636-8.418,11.934-1.734Z"
				  transform="translate(138.44 469.432)" fill="#ffe623" fill-rule="evenodd"/>
		</svg>
	`,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-star-icon]': 'true'
                }
            }]
    }], null, null); })();

function FabricRatingComponent_gui_star_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-star-icon", 2);
    i0.ɵɵlistener("click", function FabricRatingComponent_gui_star_icon_1_Template_gui_star_icon_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const star_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.changeRating(star_r1); })("mouseenter", function FabricRatingComponent_gui_star_icon_1_Template_gui_star_icon_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const star_r1 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.changePreviewRating(star_r1); })("mouseleave", function FabricRatingComponent_gui_star_icon_1_Template_gui_star_icon_mouseleave_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.changePreviewRating(0); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const star_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("star-icon-gray", ctx_r0.isRating(star_r1, ctx_r0.rating))("star-icon-hover", ctx_r0.isRating(ctx_r0.previewRating, star_r1));
} }
class FabricRatingComponent {
    constructor() {
        this.rating = 3;
        this.onRatingChange = new EventEmitter();
        this.stars = [];
        this.previewRating = 0;
    }
    ngOnChanges(changes) {
        if (changes.starsLength) {
            if (this.starsLength) {
                this.createStarsArray(this.starsLength);
            }
        }
    }
    ngOnInit() {
        if (this.stars.length === 0) {
            this.createStarsArray(5);
        }
    }
    isRating(starNumber, rating) {
        return !(rating >= starNumber);
    }
    changeRating(star) {
        this.rating = star;
        this.onRatingChange.emit(star);
    }
    changePreviewRating(star) {
        this.previewRating = star + 1;
    }
    createStarsArray(length) {
        for (let i = 1; i <= length; i++) {
            this.stars.push(i);
        }
    }
}
FabricRatingComponent.ɵfac = function FabricRatingComponent_Factory(t) { return new (t || FabricRatingComponent)(); };
FabricRatingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricRatingComponent, selectors: [["gui-rating"]], hostVars: 2, hostBindings: function FabricRatingComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-rating", true);
    } }, inputs: { starsLength: "starsLength", rating: "rating" }, outputs: { onRatingChange: "onRatingChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "gui-rating-container"], [3, "star-icon-gray", "star-icon-hover", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter", "mouseleave"]], template: function FabricRatingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, FabricRatingComponent_gui_star_icon_1_Template, 1, 4, "gui-star-icon", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.stars);
    } }, directives: [i1.NgForOf, StarIconComponent], styles: [".gui-rating .gui-star-icon{cursor:pointer;padding-right:8px}.gui-rating .gui-star-icon svg{height:24px;width:24px}.gui-rating .gui-star-icon svg path{transition:fill .3s ease-in-out}.gui-rating .gui-rating-container{display:-ms-flexbox;display:flex}.gui-rating .gui-rating-container .star-icon-gray svg path{fill:#dedede}.gui-rating .gui-rating-container .star-icon-hover svg path{fill:#fc0}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricRatingComponent, [{
        type: Component,
        args: [{
                selector: 'gui-rating',
                templateUrl: './fabric-rating.component.html',
                styleUrls: ['./fabric-rating.ngx.scss'],
                host: {
                    '[class.gui-rating]': 'true'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { starsLength: [{
            type: Input
        }], rating: [{
            type: Input
        }], onRatingChange: [{
            type: Output
        }] }); })();

class StarIconModule {
}
StarIconModule.ɵfac = function StarIconModule_Factory(t) { return new (t || StarIconModule)(); };
StarIconModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StarIconModule });
StarIconModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StarIconModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    StarIconComponent
                ],
                exports: [
                    StarIconComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StarIconModule, { declarations: [StarIconComponent], imports: [CommonModule], exports: [StarIconComponent] }); })();

class FabricRatingModule {
}
FabricRatingModule.ɵfac = function FabricRatingModule_Factory(t) { return new (t || FabricRatingModule)(); };
FabricRatingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricRatingModule });
FabricRatingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            StarIconModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricRatingModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    StarIconModule
                ],
                declarations: [
                    FabricRatingComponent
                ],
                exports: [
                    FabricRatingComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricRatingModule, { declarations: [FabricRatingComponent], imports: [CommonModule,
        StarIconModule], exports: [FabricRatingComponent] }); })();

class FabricModule {
}
FabricModule.ɵfac = function FabricModule_Factory(t) { return new (t || FabricModule)(); };
FabricModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricModule });
FabricModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FabricModalThemeService
    ], imports: [[
            CommonModule,
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricModule, { imports: [CommonModule,
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
        FabricInputModule] }); })();

class FabricNestedDialogComponent {
    constructor() {
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { DropdownItemComponent, FabricBadgeComponent, FabricBadgeModule, FabricButtonComponent, FabricButtonGroupComponent, FabricButtonGroupModule, FabricButtonModule, FabricCardComponent, FabricCardModule, FabricCheckboxComponent, FabricCheckboxModule, FabricChipComponent, FabricChipModule, FabricDatePickerCalendarComponent, FabricDatePickerComponent, FabricDatePickerModule, FabricDialogModule, FabricDialogService, FabricDialogThemeService, FabricDrawerModule, FabricDrawerService, FabricDropdownComponent, FabricDropdownModule, FabricInlineDialogModule, FabricInlineDialogService, FabricInputComponent, FabricInputModule, FabricMessageModule, FabricMessageService, FabricModalThemeService, FabricModule, FabricNestedDialogComponent, FabricNotificationModule, FabricNotificationPosition, FabricNotificationService, FabricPlacement, FabricProgressBarComponent, FabricProgressBarModule, FabricProgressSpinnerComponent, FabricProgressSpinnerModule, FabricRadioButtonComponent, FabricRadioButtonModule, FabricRadioGroupComponent, FabricRadioGroupModule, FabricRatingComponent, FabricRatingModule, FabricSelectComponent, FabricSelectModule, FabricSliderComponent, FabricSliderModule, FabricSpinnerComponent, FabricSpinnerModule, FabricTabComponent, FabricTabModule, FabricToggleButtonComponent, FabricToggleButtonGroupComponent, FabricToggleButtonGroupModule, FabricToggleButtonModule, FabricTooltipComponent, FabricTooltipDirective, FabricTooltipModule, Placement, SpinnerMode, TabItemComponent, Theme };
//# sourceMappingURL=generic-ui-fabric.js.map
