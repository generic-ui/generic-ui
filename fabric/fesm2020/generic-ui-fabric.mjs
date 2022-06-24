import * as i0 from '@angular/core';
import { Directive, Input, Component, ChangeDetectionStrategy, ViewEncapsulation, NgModule, EventEmitter, ElementRef, ViewChild, Output, Injectable, InjectionToken, PLATFORM_ID, Inject, forwardRef, ViewContainerRef, Injector, HostListener, ViewChildren, Optional } from '@angular/core';
import * as i3 from '@angular/common';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import * as i1 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { takeUntil, distinctUntilChanged, filter, skip, take, debounceTime, map } from 'rxjs/operators';
import { Subject, BehaviorSubject, timer, fromEvent, ReplaySubject } from 'rxjs';

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
        this.primary = false;
        this.secondary = false;
        this.outline = false;
    }
    ngOnChanges(changes) {
        if (changes['primary']) {
            if (this.primary) {
                this.addClass(Indicator.PRIMARY_CLASS_NAME);
            }
            else {
                this.removeClass(Indicator.PRIMARY_CLASS_NAME);
            }
        }
        if (changes['secondary']) {
            if (this.secondary) {
                this.addClass(Indicator.SECONDARY_CLASS_NAME);
            }
            else {
                this.removeClass(Indicator.SECONDARY_CLASS_NAME);
            }
        }
        if (changes['outline']) {
            if (this.outline) {
                this.addClass(Indicator.OUTLINE_CLASS_NAME);
            }
            else {
                this.removeClass(Indicator.OUTLINE_CLASS_NAME);
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
Indicator.PRIMARY_CLASS_NAME = 'gui-primary';
Indicator.SECONDARY_CLASS_NAME = 'gui-secondary';
Indicator.OUTLINE_CLASS_NAME = 'gui-outline';
Indicator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: Indicator, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
Indicator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: Indicator, inputs: { primary: "primary", secondary: "secondary", outline: "outline" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: Indicator, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { primary: [{
                type: Input
            }], secondary: [{
                type: Input
            }], outline: [{
                type: Input
            }] } });

class FabricBadgeComponent extends Indicator {
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
    }
}
FabricBadgeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricBadgeComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FabricBadgeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricBadgeComponent, selector: "gui-badge", host: { properties: { "class.gui-badge": "true" } }, usesInheritance: true, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [".gui-badge{background:#e6e6e6;border-radius:4px;color:#595959;display:inline-block;font-family:Arial;font-size:12px;font-weight:700;margin:0 0 0 2px;padding:4px 9.6px;position:relative;-ms-transform:translateX(-70%) translateY(-80%);transform:translate(-70%) translateY(-80%);z-index:1}.gui-badge.gui-primary{background:#2185d0;color:#fff}.gui-badge.gui-primary.gui-outline{color:#2185d0}.gui-badge.gui-primary:hover:not(.gui-chip,.gui-badge){background:#1e77ba}.gui-badge.gui-primary:active{background:#1a69a4;color:#fff}.gui-badge.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-badge.gui-primary.gui-badge{background:#439de1}.gui-badge.gui-secondary{background:#3cb371;color:#fff}.gui-badge.gui-secondary.gui-outline{color:#3cb371}.gui-badge.gui-secondary.gui-button:hover{background:#36a065}.gui-badge.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-badge.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-badge.gui-secondary.gui-badge{background:#5ac88b}.gui-badge.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-badge.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-badge.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-badge.gui-outline.gui-badge{background:#fff}.gui-badge.gui-outline.gui-primary{border-color:#439de1}.gui-badge.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-badge.gui-outline.gui-secondary{border-color:#5ac88b}.gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}\n", ".gui-material .gui-badge{background:#3949ab;color:#fff;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500}.gui-material .gui-badge.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-badge.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-badge.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-badge.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-badge.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-badge.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-badge.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-badge.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-badge.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-badge.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-badge.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-badge.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-badge.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-badge.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-badge.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-badge.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-badge.gui-outline.gui-badge{background:#fff}.gui-material .gui-badge.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-badge.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}\n", ".gui-dark .gui-badge{background:#333;color:#bdbdbd}.gui-dark .gui-badge.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-badge.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-badge.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-badge.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-badge.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-badge.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-badge.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-badge.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-badge.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-badge.gui-outline.gui-badge{background:#121212}.gui-dark .gui-badge.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-badge.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-badge.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricBadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-badge', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-badge]': 'true'
                    }, template: "<ng-content></ng-content>\n", styles: [".gui-badge{background:#e6e6e6;border-radius:4px;color:#595959;display:inline-block;font-family:Arial;font-size:12px;font-weight:700;margin:0 0 0 2px;padding:4px 9.6px;position:relative;-ms-transform:translateX(-70%) translateY(-80%);transform:translate(-70%) translateY(-80%);z-index:1}.gui-badge.gui-primary{background:#2185d0;color:#fff}.gui-badge.gui-primary.gui-outline{color:#2185d0}.gui-badge.gui-primary:hover:not(.gui-chip,.gui-badge){background:#1e77ba}.gui-badge.gui-primary:active{background:#1a69a4;color:#fff}.gui-badge.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-badge.gui-primary.gui-badge{background:#439de1}.gui-badge.gui-secondary{background:#3cb371;color:#fff}.gui-badge.gui-secondary.gui-outline{color:#3cb371}.gui-badge.gui-secondary.gui-button:hover{background:#36a065}.gui-badge.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-badge.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-badge.gui-secondary.gui-badge{background:#5ac88b}.gui-badge.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-badge.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-badge.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-badge.gui-outline.gui-badge{background:#fff}.gui-badge.gui-outline.gui-primary{border-color:#439de1}.gui-badge.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-badge.gui-outline.gui-secondary{border-color:#5ac88b}.gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}\n", ".gui-material .gui-badge{background:#3949ab;color:#fff;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500}.gui-material .gui-badge.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-badge.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-badge.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-badge.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-badge.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-badge.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-badge.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-badge.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-badge.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-badge.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-badge.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-badge.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-badge.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-badge.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-badge.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-badge.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-badge.gui-outline.gui-badge{background:#fff}.gui-material .gui-badge.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-badge.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}\n", ".gui-dark .gui-badge{background:#333;color:#bdbdbd}.gui-dark .gui-badge.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-badge.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-badge.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-badge.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-badge.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-badge.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-badge.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-badge.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-badge.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-badge.gui-outline.gui-badge{background:#121212}.gui-dark .gui-badge.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-badge.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-badge.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class FabricBadgeModule {
}
FabricBadgeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricBadgeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricBadgeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricBadgeModule, declarations: [FabricBadgeComponent], imports: [CommonModule], exports: [FabricBadgeComponent] });
FabricBadgeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricBadgeModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricBadgeModule, decorators: [{
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
        }] });

class FabricButtonComponent extends Indicator {
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.link = false;
        this.text = false;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes['link']) {
            if (this.link) {
                this.addClass('gui-link');
            }
            else {
                this.removeClass('gui-link');
            }
        }
        if (changes['text']) {
            if (this.text) {
                this.addClass('gui-text');
            }
            else {
                this.removeClass('gui-text');
            }
        }
    }
}
FabricButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FabricButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: { link: "link", text: "text" }, host: { properties: { "class.gui-button": "true" } }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [".gui-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-align:start;align-items:flex-start;background:#e6e6e6;border-radius:4px;border-style:none;box-sizing:border-box;color:#595959;cursor:pointer;display:inline-block;font-family:Arial;font-size:13.3333px;letter-spacing:normal;outline:none;padding:10px 20px;text-align:center;text-indent:0;text-rendering:auto;text-shadow:none;text-transform:none;transition:background .2s;word-spacing:normal;-ms-writing-mode:lr-tb!important;writing-mode:horizontal-tb!important}.gui-button.gui-outline:focus{box-shadow:0 0 0 2px #d6d6d6}.gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #439de1}.gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #5ac88b}.gui-button.gui-primary{background:#2185d0;color:#fff}.gui-button.gui-primary.gui-outline{color:#2185d0}.gui-button.gui-primary:hover:not(.gui-chip,.gui-badge){background:#1e77ba}.gui-button.gui-primary:active{background:#1a69a4;color:#fff}.gui-button.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-button.gui-primary.gui-badge{background:#439de1}.gui-button.gui-secondary{background:#3cb371;color:#fff}.gui-button.gui-secondary.gui-outline{color:#3cb371}.gui-button.gui-secondary.gui-button:hover{background:#36a065}.gui-button.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-button.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-button.gui-secondary.gui-badge{background:#5ac88b}.gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-button.gui-link:focus{text-decoration:underline}.gui-button.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-button.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-button.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-button.gui-outline.gui-badge{background:#fff}.gui-button.gui-outline.gui-primary{border-color:#439de1}.gui-button.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-button.gui-outline.gui-secondary{border-color:#5ac88b}.gui-button.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}.gui-button.gui-text{background:transparent;border:0}.gui-button.gui-text:hover{background:#e6e6e6}.gui-button.gui-text:focus{background:#e6e6e6}.gui-button.gui-text.gui-primary{color:#2185d0}.gui-button.gui-text.gui-primary:hover{background:#2185d0;color:#fff}.gui-button.gui-text.gui-primary:focus{background:#2185d0;color:#fff}.gui-button.gui-text.gui-secondary{color:#3cb371}.gui-button.gui-text.gui-secondary:hover{background:#3cb371;color:#fff}.gui-button.gui-text.gui-secondary:focus{background:#3cb371;color:#fff}.gui-button.gui-text.gui-button:disabled{background:transparent}.gui-button.gui-text.gui-button:disabled .gui-text-disabled{display:inline-block}.gui-button:hover{background:#cccccc;color:#333}.gui-button:active{background:#999;color:#333}.gui-button:disabled{color:#ccc;cursor:default;pointer-events:none}\n", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-button.gui-outline:focus{box-shadow:0 0 0 2px #616161}.gui-dark .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #ce93d8}.gui-dark .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #80cbc4}.gui-dark .gui-button.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-button.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-button.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-button.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-button.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-button.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-button.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-button.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-button.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-button.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-button.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-button.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-dark .gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-dark .gui-button.gui-link:focus{text-decoration:underline}.gui-dark .gui-button.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-button.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-button.gui-outline.gui-badge{background:#121212}.gui-dark .gui-button.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-button.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-button.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-button.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}.gui-dark .gui-button:hover{background:#616161}.gui-dark .gui-button:active{background:#212121}.gui-dark .gui-button:disabled{opacity:.36}\n", ".gui-light .gui-button{background:#f6f5f4;border-color:#d8d7d6;color:#333;font-family:Roboto,Helvetica Neue,sans-serif}.gui-light .gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-light .gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-light .gui-button.gui-link:focus{text-decoration:underline}.gui-light .gui-button:hover{background:#ecebeb}.gui-light .gui-button:active{background:#f6f5f4}.gui-light .gui-button:disabled{opacity:.5}\n", ".gui-material .gui-button{background:#3949ab;color:#fff;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-button.gui-outline:focus{box-shadow:0 0 0 1px #5262c5}.gui-material .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 1px #6200ee}.gui-material .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 1px #0097a7}.gui-material .gui-button.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-button.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-button.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-button.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-button.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-button.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-button.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-button.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-button.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-button.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-button.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-button.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-button.gui-link{background:transparent;border:0;color:#3949ab}.gui-material .gui-button.gui-link:hover{color:#4051bf}.gui-material .gui-button.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-button.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-button.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-button.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-button.gui-outline.gui-badge{background:#fff}.gui-material .gui-button.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-button.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}.gui-material .gui-button:hover{background:#5262c5}.gui-material .gui-button:active{background:#4051bf}.gui-material .gui-button:disabled{background:#c5cae9;color:#7885d2}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'button[gui-button], a[gui-button]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-button]': 'true'
                    }, template: "<ng-content></ng-content>\n", styles: [".gui-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-align:start;align-items:flex-start;background:#e6e6e6;border-radius:4px;border-style:none;box-sizing:border-box;color:#595959;cursor:pointer;display:inline-block;font-family:Arial;font-size:13.3333px;letter-spacing:normal;outline:none;padding:10px 20px;text-align:center;text-indent:0;text-rendering:auto;text-shadow:none;text-transform:none;transition:background .2s;word-spacing:normal;-ms-writing-mode:lr-tb!important;writing-mode:horizontal-tb!important}.gui-button.gui-outline:focus{box-shadow:0 0 0 2px #d6d6d6}.gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #439de1}.gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #5ac88b}.gui-button.gui-primary{background:#2185d0;color:#fff}.gui-button.gui-primary.gui-outline{color:#2185d0}.gui-button.gui-primary:hover:not(.gui-chip,.gui-badge){background:#1e77ba}.gui-button.gui-primary:active{background:#1a69a4;color:#fff}.gui-button.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-button.gui-primary.gui-badge{background:#439de1}.gui-button.gui-secondary{background:#3cb371;color:#fff}.gui-button.gui-secondary.gui-outline{color:#3cb371}.gui-button.gui-secondary.gui-button:hover{background:#36a065}.gui-button.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-button.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-button.gui-secondary.gui-badge{background:#5ac88b}.gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-button.gui-link:focus{text-decoration:underline}.gui-button.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-button.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-button.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-button.gui-outline.gui-badge{background:#fff}.gui-button.gui-outline.gui-primary{border-color:#439de1}.gui-button.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-button.gui-outline.gui-secondary{border-color:#5ac88b}.gui-button.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}.gui-button.gui-text{background:transparent;border:0}.gui-button.gui-text:hover{background:#e6e6e6}.gui-button.gui-text:focus{background:#e6e6e6}.gui-button.gui-text.gui-primary{color:#2185d0}.gui-button.gui-text.gui-primary:hover{background:#2185d0;color:#fff}.gui-button.gui-text.gui-primary:focus{background:#2185d0;color:#fff}.gui-button.gui-text.gui-secondary{color:#3cb371}.gui-button.gui-text.gui-secondary:hover{background:#3cb371;color:#fff}.gui-button.gui-text.gui-secondary:focus{background:#3cb371;color:#fff}.gui-button.gui-text.gui-button:disabled{background:transparent}.gui-button.gui-text.gui-button:disabled .gui-text-disabled{display:inline-block}.gui-button:hover{background:#cccccc;color:#333}.gui-button:active{background:#999;color:#333}.gui-button:disabled{color:#ccc;cursor:default;pointer-events:none}\n", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-button.gui-outline:focus{box-shadow:0 0 0 2px #616161}.gui-dark .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #ce93d8}.gui-dark .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #80cbc4}.gui-dark .gui-button.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-button.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-button.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-button.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-button.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-button.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-button.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-button.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-button.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-button.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-button.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-button.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-dark .gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-dark .gui-button.gui-link:focus{text-decoration:underline}.gui-dark .gui-button.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-button.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-button.gui-outline.gui-badge{background:#121212}.gui-dark .gui-button.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-button.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-button.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-button.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}.gui-dark .gui-button:hover{background:#616161}.gui-dark .gui-button:active{background:#212121}.gui-dark .gui-button:disabled{opacity:.36}\n", ".gui-light .gui-button{background:#f6f5f4;border-color:#d8d7d6;color:#333;font-family:Roboto,Helvetica Neue,sans-serif}.gui-light .gui-button.gui-link{background:transparent;border:0;color:#2185d0}.gui-light .gui-button.gui-link:hover{background:none;color:#1e77ba;text-decoration:underline}.gui-light .gui-button.gui-link:focus{text-decoration:underline}.gui-light .gui-button:hover{background:#ecebeb}.gui-light .gui-button:active{background:#f6f5f4}.gui-light .gui-button:disabled{opacity:.5}\n", ".gui-material .gui-button{background:#3949ab;color:#fff;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-button.gui-outline:focus{box-shadow:0 0 0 1px #5262c5}.gui-material .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 1px #6200ee}.gui-material .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 1px #0097a7}.gui-material .gui-button.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-button.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-button.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-button.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-button.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-button.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-button.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-button.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-button.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-button.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-button.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-button.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-button.gui-link{background:transparent;border:0;color:#3949ab}.gui-material .gui-button.gui-link:hover{color:#4051bf}.gui-material .gui-button.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-button.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-button.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-button.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-button.gui-outline.gui-badge{background:#fff}.gui-material .gui-button.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-button.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}.gui-material .gui-button:hover{background:#5262c5}.gui-material .gui-button:active{background:#4051bf}.gui-material .gui-button:disabled{background:#c5cae9;color:#7885d2}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { link: [{
                type: Input
            }], text: [{
                type: Input
            }] } });

class FabricButtonModule {
}
FabricButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricButtonModule, declarations: [FabricButtonComponent], imports: [CommonModule], exports: [FabricButtonComponent] });
FabricButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricButtonModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricButtonModule, decorators: [{
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
        }] });

class FabricButtonGroupComponent {
}
FabricButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricButtonGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricButtonGroupComponent, selector: "gui-button-group", host: { properties: { "class.gui-button-group": "true" } }, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [".gui-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-button-group .gui-button{border-radius:0}.gui-button-group .gui-button:not(:last-child){border-right:none;margin:0}.gui-button-group .gui-button:last-child{border-radius:0 4px 4px 0}.gui-button-group .gui-button:first-child{border-radius:4px 0 0 4px}.gui-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricButtonGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-button-group', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-button-group]': 'true'
                    }, template: "<ng-content></ng-content>\n", styles: [".gui-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-button-group .gui-button{border-radius:0}.gui-button-group .gui-button:not(:last-child){border-right:none;margin:0}.gui-button-group .gui-button:last-child{border-radius:0 4px 4px 0}.gui-button-group .gui-button:first-child{border-radius:4px 0 0 4px}.gui-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}\n"] }]
        }] });

class FabricButtonGroupModule {
}
FabricButtonGroupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricButtonGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricButtonGroupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricButtonGroupModule, declarations: [FabricButtonGroupComponent], imports: [CommonModule], exports: [FabricButtonGroupComponent] });
FabricButtonGroupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricButtonGroupModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricButtonGroupModule, decorators: [{
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
        }] });

class FabricCardComponent {
    constructor() {
        this.title = '';
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
FabricCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricCardComponent, selector: "gui-card", inputs: { title: "title", image: "image", alt: "alt", contentBlock: "contentBlock" }, host: { properties: { "class.gui-card": "true" } }, ngImport: i0, template: "<div class=\"gui-card-body\">\n\n\t<div class=\"gui-card-image-wrapper\">\n\t\t<img [ngClass]=\"{'gui-card-img': isImgEnabled()}\"\n\t\t\t alt=\"{{alt}}\" src=\"{{image}}\"/>\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-title': isTitleEnabled()}\">\n\t\t{{title}}\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-content-block': isContentBlockEnabled()}\">\n\t\t<div\n\t\t\t*ngFor=\"let block of contentBlock\"\n\t\t\t[ngClass]=\"{'gui-card-content-block-item': isContentBlockEnabled()}\">\n\t\t\t{{block}}\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n", styles: [".gui-card .gui-card-img{border-radius:4px 4px 0 0;height:auto;margin:0 0 12px;width:350px}.gui-card .gui-card-body{background:#fff;border-radius:4px;box-shadow:0 1px 3px #999;box-sizing:border-box;font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;margin:0;padding:0 0 20px;transition:transform .3s ease-in-out;width:350px}.gui-card .gui-card-body:hover{box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d}.gui-card .gui-card-body .gui-card-title{font-size:20px;font-weight:700;margin:0 0 12px;padding:0 20px}.gui-card .gui-card-body .gui-card-content-block{margin:0 0 12px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#d6d6d6;border-top-style:solid;border-top-width:1px;padding:12px 20px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#d6d6d6;border-bottom-style:solid;border-bottom-width:1px}.gui-card .gui-card-body .gui-content{padding:0 20px}\n", ".gui-material .gui-card .gui-card-body{font-family:Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-card .gui-card-body{background:#121212;border-color:#616161;color:#bdbdbd}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#616161}.gui-dark .gui-content-block .gui-card-content-block{border-color:#616161}\n"], directives: [{ type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-card', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-card]': 'true'
                    }, template: "<div class=\"gui-card-body\">\n\n\t<div class=\"gui-card-image-wrapper\">\n\t\t<img [ngClass]=\"{'gui-card-img': isImgEnabled()}\"\n\t\t\t alt=\"{{alt}}\" src=\"{{image}}\"/>\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-title': isTitleEnabled()}\">\n\t\t{{title}}\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-content-block': isContentBlockEnabled()}\">\n\t\t<div\n\t\t\t*ngFor=\"let block of contentBlock\"\n\t\t\t[ngClass]=\"{'gui-card-content-block-item': isContentBlockEnabled()}\">\n\t\t\t{{block}}\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n", styles: [".gui-card .gui-card-img{border-radius:4px 4px 0 0;height:auto;margin:0 0 12px;width:350px}.gui-card .gui-card-body{background:#fff;border-radius:4px;box-shadow:0 1px 3px #999;box-sizing:border-box;font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;margin:0;padding:0 0 20px;transition:transform .3s ease-in-out;width:350px}.gui-card .gui-card-body:hover{box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d}.gui-card .gui-card-body .gui-card-title{font-size:20px;font-weight:700;margin:0 0 12px;padding:0 20px}.gui-card .gui-card-body .gui-card-content-block{margin:0 0 12px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#d6d6d6;border-top-style:solid;border-top-width:1px;padding:12px 20px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#d6d6d6;border-bottom-style:solid;border-bottom-width:1px}.gui-card .gui-card-body .gui-content{padding:0 20px}\n", ".gui-material .gui-card .gui-card-body{font-family:Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-card .gui-card-body{background:#121212;border-color:#616161;color:#bdbdbd}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#616161}.gui-dark .gui-content-block .gui-card-content-block{border-color:#616161}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], image: [{
                type: Input
            }], alt: [{
                type: Input
            }], contentBlock: [{
                type: Input
            }] } });

class FabricCardModule {
}
FabricCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCardModule, declarations: [FabricCardComponent], imports: [CommonModule], exports: [FabricCardComponent] });
FabricCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCardModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCardModule, decorators: [{
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
        }] });

class FabricCheckboxComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.name = '';
        this.inputChecked = false;
        this.disabled = false;
        this.readonly = false;
        this.indeterminate = false;
        this.changed = new EventEmitter();
        this.checked = false;
    }
    ngOnChanges(changes) {
        this.checked = this.inputChecked;
        if (changes['disabled']) {
            if (this.disabled) {
                this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
            }
        }
        if (changes['readonly']) {
            if (this.readonly) {
                this.renderer.addClass(this.elementRef.nativeElement, 'gui-readonly');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'gui-readonly');
            }
        }
        if (changes['indeterminate']) {
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
        if (this.inputRef) {
            this.inputRef.nativeElement.indeterminate = this.indeterminate;
        }
    }
    check(event) {
        event.stopPropagation();
        this.checked = !this.checked;
        this.changed.emit(this.checked);
    }
}
FabricCheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCheckboxComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FabricCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricCheckboxComponent, selector: "gui-checkbox", inputs: { name: "name", inputChecked: ["checked", "inputChecked"], disabled: "disabled", readonly: "readonly", indeterminate: "indeterminate" }, outputs: { changed: "changed" }, host: { properties: { "class.gui-checkbox": "true" } }, viewQueries: [{ propertyName: "inputRef", first: true, predicate: ["input"], descendants: true, read: ElementRef }], usesOnChanges: true, ngImport: i0, template: "<label>\n\t<input #input\n\t\t   (click)=\"check($event)\"\n\t\t   [checked]=\"checked\"\n\t\t   [disabled]=\"disabled\"\n\t\t   [attr.name]=\"name\"\n\t\t   type=\"checkbox\">\n\t<span class=\"gui-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n", styles: [".gui-checkbox{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:24px;padding-left:32px;position:relative}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{height:0;opacity:0;position:absolute;width:0}.gui-checkbox .gui-checkmark{border-color:#575757;border-radius:4px;border-style:solid;border-width:2px;box-sizing:content-box;height:20px;left:0;position:absolute;width:20px}.gui-checkbox input:checked+.gui-checkmark{border-color:#575757}.gui-checkbox.gui-disabled.gui-checkbox{color:#ccc;pointer-events:none}.gui-checkbox.gui-readonly.gui-checkbox{pointer-events:none}.gui-checkbox .gui-checkmark:after{content:\" \";display:none;left:6px;position:absolute;-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-checkbox input:checked+.gui-checkmark:after{box-sizing:content-box;display:block}.gui-checkbox .gui-checkmark:after{border-color:#575757;border-style:solid;border-width:0 3.2px 3.2px 0;height:12px;width:5.2px}.gui-checkbox input:indeterminate+.gui-checkmark:after{display:block;height:10px;left:9px;top:4px;-ms-transform:rotate(90deg);transform:rotate(90deg);width:0}\n", ".gui-material .gui-checkbox{font-family:Roboto,Helvetica Neue,sans-serif}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox label:hover .gui-checkmark{border-color:#575757}.gui-material .gui-checkbox .gui-checkmark{border-color:#999}.gui-material .gui-checkbox input:checked+.gui-checkmark{background:#3949ab;border-color:#3949ab}.gui-material .gui-checkbox .gui-checkmark:after{border-color:#fff}.gui-material .gui-checkbox.gui-indeterminate .gui-checkmark{background:#3949ab;border-color:#3949ab}\n", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox .gui-checkmark:after{border-color:#878787}.gui-dark .gui-checkbox.gui-disabled.gui-checkbox{opacity:.36}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-checkbox]': 'true'
                    }, template: "<label>\n\t<input #input\n\t\t   (click)=\"check($event)\"\n\t\t   [checked]=\"checked\"\n\t\t   [disabled]=\"disabled\"\n\t\t   [attr.name]=\"name\"\n\t\t   type=\"checkbox\">\n\t<span class=\"gui-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n", styles: [".gui-checkbox{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:24px;padding-left:32px;position:relative}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{height:0;opacity:0;position:absolute;width:0}.gui-checkbox .gui-checkmark{border-color:#575757;border-radius:4px;border-style:solid;border-width:2px;box-sizing:content-box;height:20px;left:0;position:absolute;width:20px}.gui-checkbox input:checked+.gui-checkmark{border-color:#575757}.gui-checkbox.gui-disabled.gui-checkbox{color:#ccc;pointer-events:none}.gui-checkbox.gui-readonly.gui-checkbox{pointer-events:none}.gui-checkbox .gui-checkmark:after{content:\" \";display:none;left:6px;position:absolute;-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-checkbox input:checked+.gui-checkmark:after{box-sizing:content-box;display:block}.gui-checkbox .gui-checkmark:after{border-color:#575757;border-style:solid;border-width:0 3.2px 3.2px 0;height:12px;width:5.2px}.gui-checkbox input:indeterminate+.gui-checkmark:after{display:block;height:10px;left:9px;top:4px;-ms-transform:rotate(90deg);transform:rotate(90deg);width:0}\n", ".gui-material .gui-checkbox{font-family:Roboto,Helvetica Neue,sans-serif}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox label:hover .gui-checkmark{border-color:#575757}.gui-material .gui-checkbox .gui-checkmark{border-color:#999}.gui-material .gui-checkbox input:checked+.gui-checkmark{background:#3949ab;border-color:#3949ab}.gui-material .gui-checkbox .gui-checkmark:after{border-color:#fff}.gui-material .gui-checkbox.gui-indeterminate .gui-checkmark{background:#3949ab;border-color:#3949ab}\n", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox .gui-checkmark:after{border-color:#878787}.gui-dark .gui-checkbox.gui-disabled.gui-checkbox{opacity:.36}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { inputRef: [{
                type: ViewChild,
                args: ['input', { read: ElementRef, static: false }]
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
            }] } });

class FabricCheckboxModule {
}
FabricCheckboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricCheckboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCheckboxModule, declarations: [FabricCheckboxComponent], imports: [CommonModule], exports: [FabricCheckboxComponent] });
FabricCheckboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCheckboxModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCheckboxModule, decorators: [{
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
        }] });

class FabricChipComponent extends Indicator {
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
    }
}
FabricChipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricChipComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FabricChipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricChipComponent, selector: "gui-chip", host: { properties: { "class.gui-chip": "true" } }, usesInheritance: true, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [".gui-chip{background:#e6e6e6;border-radius:4px;box-sizing:border-box;color:#595959;display:inline-block;font-family:Arial;font-size:14px;font-weight:700;margin:0 2px;padding:9.6px 12px}.gui-chip.gui-primary{background:#2185d0;color:#fff}.gui-chip.gui-primary.gui-outline{color:#2185d0}.gui-chip.gui-primary:hover:not(.gui-chip,.gui-badge){background:#1e77ba}.gui-chip.gui-primary:active{background:#1a69a4;color:#fff}.gui-chip.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-chip.gui-primary.gui-badge{background:#439de1}.gui-chip.gui-secondary{background:#3cb371;color:#fff}.gui-chip.gui-secondary.gui-outline{color:#3cb371}.gui-chip.gui-secondary.gui-button:hover{background:#36a065}.gui-chip.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-chip.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-chip.gui-secondary.gui-badge{background:#5ac88b}.gui-chip.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-chip.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-chip.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-chip.gui-outline.gui-badge{background:#fff}.gui-chip.gui-outline.gui-primary{border-color:#439de1}.gui-chip.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-chip.gui-outline.gui-secondary{border-color:#5ac88b}.gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}\n", ".gui-material .gui-chip{background:#3949ab;color:#fff;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-chip.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-chip.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-chip.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-chip.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-chip.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-chip.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-chip.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-chip.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-chip.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-chip.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-chip.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-chip.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-chip.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-chip.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-chip.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-chip.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-chip.gui-outline.gui-badge{background:#fff}.gui-material .gui-chip.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-chip.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}\n", ".gui-dark .gui-chip{background:#333;color:#bdbdbd}.gui-dark .gui-chip.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-chip.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-chip.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-chip.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-chip.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-chip.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-chip.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-chip.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-chip.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-chip.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-chip.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-chip.gui-outline.gui-badge{background:#121212}.gui-dark .gui-chip.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-chip.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-chip.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}\n", ".gui-light .gui-chip{background:#f6f5f4;border-color:#333;border-style:solid;border-width:1px;color:#333}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricChipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-chip', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-chip]': 'true'
                    }, template: "<ng-content></ng-content>\n", styles: [".gui-chip{background:#e6e6e6;border-radius:4px;box-sizing:border-box;color:#595959;display:inline-block;font-family:Arial;font-size:14px;font-weight:700;margin:0 2px;padding:9.6px 12px}.gui-chip.gui-primary{background:#2185d0;color:#fff}.gui-chip.gui-primary.gui-outline{color:#2185d0}.gui-chip.gui-primary:hover:not(.gui-chip,.gui-badge){background:#1e77ba}.gui-chip.gui-primary:active{background:#1a69a4;color:#fff}.gui-chip.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-chip.gui-primary.gui-badge{background:#439de1}.gui-chip.gui-secondary{background:#3cb371;color:#fff}.gui-chip.gui-secondary.gui-outline{color:#3cb371}.gui-chip.gui-secondary.gui-button:hover{background:#36a065}.gui-chip.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-chip.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-chip.gui-secondary.gui-badge{background:#5ac88b}.gui-chip.gui-outline{background:transparent;color:#999;border-color:#d6d6d6;border-style:solid;border-width:1px}.gui-chip.gui-outline.gui-button:hover{background:#cccccc;color:#fff}.gui-chip.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-chip.gui-outline.gui-badge{background:#fff}.gui-chip.gui-outline.gui-primary{border-color:#439de1}.gui-chip.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#6fb4e8;color:#6fb4e8}.gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-chip.gui-outline.gui-secondary{border-color:#5ac88b}.gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#80d5a6;color:#80d5a6}.gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}\n", ".gui-material .gui-chip{background:#3949ab;color:#fff;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-chip.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-chip.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-chip.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-chip.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-chip.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-chip.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-chip.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-chip.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-chip.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-chip.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-chip.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-chip.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-chip.gui-outline{background:transparent;color:#3949ab;border-color:#5262c5}.gui-material .gui-chip.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-chip.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-chip.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-chip.gui-outline.gui-badge{background:#fff}.gui-material .gui-chip.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-chip.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}\n", ".gui-dark .gui-chip{background:#333;color:#bdbdbd}.gui-dark .gui-chip.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-chip.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-chip.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-chip.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-chip.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-chip.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-chip.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-chip.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-chip.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-chip.gui-outline{background:transparent;color:#bdbdbd;border-color:#616161;border-style:solid;border-width:1px}.gui-dark .gui-chip.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-chip.gui-outline.gui-badge{background:#121212}.gui-dark .gui-chip.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:transparent;border-color:#f0def3;color:#f0def3}.gui-dark .gui-chip.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-chip.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:transparent;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}\n", ".gui-light .gui-chip{background:#f6f5f4;border-color:#333;border-style:solid;border-width:1px;color:#333}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class FabricChipModule {
}
FabricChipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricChipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricChipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricChipModule, declarations: [FabricChipComponent], imports: [CommonModule], exports: [FabricChipComponent] });
FabricChipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricChipModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricChipModule, decorators: [{
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
        }] });

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
}
FabricReactive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricReactive, deps: [], target: i0.ɵɵFactoryTarget.Directive });
FabricReactive.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: FabricReactive, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricReactive, decorators: [{
            type: Directive
        }], ctorParameters: function () { return []; } });

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

const FabricDatePickerDefaultActiveMonth = new Date().getMonth();
const FabricDatePickerDefaultActiveYear = new Date().getFullYear();

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
FabricDatePickerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricDatePickerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerService, decorators: [{
            type: Injectable
        }] });

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
        let composition = FabricDatePickerComposition.NONE;
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
FabricDatePickerCompositionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerCompositionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricDatePickerCompositionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerCompositionService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerCompositionService, decorators: [{
            type: Injectable
        }] });

class FabricDatePickerWeeks {
    constructor() {
        this.weeks = [];
    }
    getDaysInMonths(year, month) {
        this.resetWeeks();
        const numberOfDaysInMonth = (new Date(year, month + 1, 0)).getDate();
        for (let i = 1; i <= numberOfDaysInMonth; i++) {
            this.createWeeks(new Date(year, month, i));
        }
        return this.weeks;
    }
    createWeeks(date) {
        const day = date.getDate(), maxWeekNumber = 6;
        for (let i = 0; i < maxWeekNumber; i++) {
            if (day === 1) {
                this.addDaysToWeek(i, date);
            }
            else if (this.canAddDaysToWeek(i, day)) {
                this.addDaysToWeek(i, this.getLastDayDate(this.weeks[i - 1]));
            }
        }
        this.weeks = [this.weeks[0], this.weeks[1], this.weeks[2], this.weeks[3], this.weeks[4], this.weeks[5]];
    }
    addDaysToWeek(weekNumber, date) {
        const week = this.weeks[weekNumber];
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
    canAddDaysToWeek(weekNumber, day) {
        return this.weeks[weekNumber].length === 0
            && this.weeks[weekNumber - 1].length === 7
            && day > this.getLastDayNumber(this.weeks[weekNumber - 1]);
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
FabricDatePickerWeeks.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerWeeks, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricDatePickerWeeks.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerWeeks });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerWeeks, decorators: [{
            type: Injectable
        }] });

class FabricDatePickerYears {
    constructor() {
        this.rowsForDisplay = [];
        this.minYear = 0;
        this.maxYear = 0;
        this.selectedYear = 0;
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
FabricDatePickerYears.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerYears, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricDatePickerYears.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerYears });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerYears, decorators: [{
            type: Injectable
        }] });

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
FabricDatePickerYearsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerYearsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricDatePickerYearsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerYearsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerYearsService, decorators: [{
            type: Injectable
        }] });

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
FabricDatePickerCalendarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerCalendarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricDatePickerCalendarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerCalendarService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerCalendarService, decorators: [{
            type: Injectable
        }] });

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
FabricDatePickerCalendarViewService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerCalendarViewService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricDatePickerCalendarViewService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerCalendarViewService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerCalendarViewService, decorators: [{
            type: Injectable
        }] });

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
FabricArrowIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricArrowIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricArrowIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricArrowIconComponent, selector: "gui-arrow-icon", inputs: { direction: "direction" }, host: { properties: { "class.gui-arrow-icon": "true", "class.gui-icon": "true" } }, ngImport: i0, template: "<svg [style.transform]=\"'rotate(' + direction + 'deg)'\"\n\t height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path d=\"M.75.75,5.02,5.02.75,9.29\"\n\t\t  fill=\"none\"\n\t\t  stroke-linecap=\"round\"\n\t\t  stroke-linejoin=\"round\"\n\t\t  stroke-width=\"1.5\"\n\t\t  transform=\"translate(0.311 0.311)\"/>\n</svg>\n", styles: [".gui-arrow-icon{cursor:pointer}.gui-arrow-icon svg path{stroke:#aaa;transition:stroke .2s ease-in-out}.gui-arrow-icon:hover svg path{stroke:#464646}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricArrowIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-arrow-icon', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-arrow-icon]': 'true',
                        '[class.gui-icon]': 'true'
                    }, template: "<svg [style.transform]=\"'rotate(' + direction + 'deg)'\"\n\t height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path d=\"M.75.75,5.02,5.02.75,9.29\"\n\t\t  fill=\"none\"\n\t\t  stroke-linecap=\"round\"\n\t\t  stroke-linejoin=\"round\"\n\t\t  stroke-width=\"1.5\"\n\t\t  transform=\"translate(0.311 0.311)\"/>\n</svg>\n", styles: [".gui-arrow-icon{cursor:pointer}.gui-arrow-icon svg path{stroke:#aaa;transition:stroke .2s ease-in-out}.gui-arrow-icon:hover svg path{stroke:#464646}\n"] }]
        }], propDecorators: { direction: [{
                type: Input
            }] } });

class FabricDatePickerViewPanelComponent {
    constructor(calendarViewService, calendarService, datePickerYearsService, datePickerYears) {
        this.calendarViewService = calendarViewService;
        this.calendarService = calendarService;
        this.datePickerYearsService = datePickerYearsService;
        this.datePickerYears = datePickerYears;
        this.fabricCalendarView = FabricCalendarView.DAYS;
        this.activeMonth = FabricDatePickerDefaultActiveMonth;
        this.activeYear = FabricDatePickerDefaultActiveYear;
        this.years = [];
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
FabricDatePickerViewPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerViewPanelComponent, deps: [{ token: FabricDatePickerCalendarViewService }, { token: FabricDatePickerCalendarService }, { token: FabricDatePickerYearsService }, { token: FabricDatePickerYears }], target: i0.ɵɵFactoryTarget.Component });
FabricDatePickerViewPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricDatePickerViewPanelComponent, selector: "gui-date-picker-view-panel", inputs: { fabricCalendarView: "fabricCalendarView", selectedDate: "selectedDate", activeMonth: "activeMonth", activeYear: "activeYear", years: "years" }, ngImport: i0, template: `
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
	`, isInline: true, components: [{ type: FabricArrowIconComponent, selector: "gui-arrow-icon", inputs: ["direction"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerViewPanelComponent, decorators: [{
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
        }], ctorParameters: function () { return [{ type: FabricDatePickerCalendarViewService }, { type: FabricDatePickerCalendarService }, { type: FabricDatePickerYearsService }, { type: FabricDatePickerYears }]; }, propDecorators: { fabricCalendarView: [{
                type: Input
            }], selectedDate: [{
                type: Input
            }], activeMonth: [{
                type: Input
            }], activeYear: [{
                type: Input
            }], years: [{
                type: Input
            }] } });

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
        return firstDay && secondDate &&
            firstDay.getDate() === secondDate.getDate() &&
            firstDay.getMonth() === secondDate.getMonth() &&
            firstDay.getFullYear() === secondDate.getFullYear();
    }
    static isMonth(date, month, year) {
        return date.getMonth() === month &&
            date.getFullYear() === year;
    }
}

class FabricDatePickerDaysViewComponent {
    constructor(datePickerService) {
        this.datePickerService = datePickerService;
        this.activeMonth = FabricDatePickerDefaultActiveMonth;
        this.weeks = [];
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
FabricDatePickerDaysViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerDaysViewComponent, deps: [{ token: FabricDatePickerService }], target: i0.ɵɵFactoryTarget.Component });
FabricDatePickerDaysViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricDatePickerDaysViewComponent, selector: "gui-date-picker-days-view", inputs: { selectedDate: "selectedDate", activeMonth: "activeMonth", weeks: "weeks" }, ngImport: i0, template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6\">\n\n\t<div class=\"gui-display-grid gui-grid-cols-7 gui-py-4 gui-date-picker-header\">\n\t\t<div *ngFor=\"let dayOfTheWeek of daysOfTheWeek\">{{dayOfTheWeek}}</div>\n\t</div>\n\n\t<div *ngFor=\"let week of weeks\"\n\t\t class=\"gui-display-grid gui-grid-cols-7\">\n\n\t\t<div (click)=\"selectDate(day)\"\n\t\t\t *ngFor=\"let day of week\"\n\t\t\t [class.gui-date-picker-current-day]=\"isDate(currentDay, day)\"\n\t\t\t [class.gui-date-picker-selected-day]=\"isDate(selectedDate, day)\"\n\t\t\t [class.gui-date-picker-selected-month]=\"displayMonthDays(day.getMonth())\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-day\">\n\t\t\t{{day.getDate()}}\n\t\t</div>\n\n\t</div>\n</div>\n", directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerDaysViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-date-picker-days-view', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6\">\n\n\t<div class=\"gui-display-grid gui-grid-cols-7 gui-py-4 gui-date-picker-header\">\n\t\t<div *ngFor=\"let dayOfTheWeek of daysOfTheWeek\">{{dayOfTheWeek}}</div>\n\t</div>\n\n\t<div *ngFor=\"let week of weeks\"\n\t\t class=\"gui-display-grid gui-grid-cols-7\">\n\n\t\t<div (click)=\"selectDate(day)\"\n\t\t\t *ngFor=\"let day of week\"\n\t\t\t [class.gui-date-picker-current-day]=\"isDate(currentDay, day)\"\n\t\t\t [class.gui-date-picker-selected-day]=\"isDate(selectedDate, day)\"\n\t\t\t [class.gui-date-picker-selected-month]=\"displayMonthDays(day.getMonth())\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-day\">\n\t\t\t{{day.getDate()}}\n\t\t</div>\n\n\t</div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: FabricDatePickerService }]; }, propDecorators: { selectedDate: [{
                type: Input
            }], activeMonth: [{
                type: Input
            }], weeks: [{
                type: Input
            }] } });

const monthsPerQuarters = [
    [{ nr: 0, name: 'Jan' }, { nr: 1, name: 'Feb' }, { nr: 2, name: 'Mar' }],
    [{ nr: 3, name: 'Apr' }, { nr: 4, name: 'May' }, { nr: 5, name: 'Jun' }],
    [{ nr: 6, name: 'Jul' }, { nr: 7, name: 'Aug' }, { nr: 8, name: 'Sep' }],
    [{ nr: 9, name: 'Oct' }, { nr: 10, name: 'Nov' }, { nr: 11, name: 'Dec' }]
];

class FabricDatePickerMonthsViewComponent {
    constructor(calendarService, calendarViewService) {
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.activeYear = FabricDatePickerDefaultActiveYear;
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
FabricDatePickerMonthsViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerMonthsViewComponent, deps: [{ token: FabricDatePickerCalendarService }, { token: FabricDatePickerCalendarViewService }], target: i0.ɵɵFactoryTarget.Component });
FabricDatePickerMonthsViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricDatePickerMonthsViewComponent, selector: "gui-date-picker-months-view", inputs: { selectedDate: "selectedDate", activeYear: "activeYear" }, ngImport: i0, template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let quarter of monthsPerQuarters\"\n\t\t class=\"gui-display-grid gui-grid-cols-3\">\n\t\t<div (click)=\"selectMonth(month.nr)\"\n\t\t\t *ngFor=\"let month of quarter\"\n\t\t\t [class.gui-date-picker-current-month]=\"isMonth(currentDay, month.nr)\"\n\t\t\t [class.gui-date-picker-selected-month]=\"isMonth(selectedDate, month.nr)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-month\">\n\t\t\t{{month.name}}\n\t\t</div>\n\t</div>\n</div>\n", directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerMonthsViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-date-picker-months-view', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let quarter of monthsPerQuarters\"\n\t\t class=\"gui-display-grid gui-grid-cols-3\">\n\t\t<div (click)=\"selectMonth(month.nr)\"\n\t\t\t *ngFor=\"let month of quarter\"\n\t\t\t [class.gui-date-picker-current-month]=\"isMonth(currentDay, month.nr)\"\n\t\t\t [class.gui-date-picker-selected-month]=\"isMonth(selectedDate, month.nr)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-month\">\n\t\t\t{{month.name}}\n\t\t</div>\n\t</div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: FabricDatePickerCalendarService }, { type: FabricDatePickerCalendarViewService }]; }, propDecorators: { selectedDate: [{
                type: Input
            }], activeYear: [{
                type: Input
            }] } });

class FabricDatePickerYearsComponent {
    constructor(calendarService, calendarViewService) {
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.years = [];
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
FabricDatePickerYearsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerYearsComponent, deps: [{ token: FabricDatePickerCalendarService }, { token: FabricDatePickerCalendarViewService }], target: i0.ɵɵFactoryTarget.Component });
FabricDatePickerYearsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricDatePickerYearsComponent, selector: "gui-date-picker-years-view", inputs: { selectedDate: "selectedDate", years: "years" }, ngImport: i0, template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let yearsChunk of years\"\n\t\t class=\"gui-display-grid gui-grid-cols-5\">\n\t\t<div (click)=\"selectYear(year)\"\n\t\t\t *ngFor=\"let year of yearsChunk\"\n\t\t\t [class.gui-date-picker-current-year]=\"isYear(currentDay, year)\"\n\t\t\t [class.gui-date-picker-selected-year]=\"isYear(selectedDate, year)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-year\">\n\t\t\t{{year}}\n\t\t</div>\n\t</div>\n</div>\n", directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerYearsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-date-picker-years-view', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let yearsChunk of years\"\n\t\t class=\"gui-display-grid gui-grid-cols-5\">\n\t\t<div (click)=\"selectYear(year)\"\n\t\t\t *ngFor=\"let year of yearsChunk\"\n\t\t\t [class.gui-date-picker-current-year]=\"isYear(currentDay, year)\"\n\t\t\t [class.gui-date-picker-selected-year]=\"isYear(selectedDate, year)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-year\">\n\t\t\t{{year}}\n\t\t</div>\n\t</div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: FabricDatePickerCalendarService }, { type: FabricDatePickerCalendarViewService }]; }, propDecorators: { selectedDate: [{
                type: Input
            }], years: [{
                type: Input
            }] } });

class FabricTimeValues {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}

class FabricInputComponent {
}
FabricInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricInputComponent, selector: "input[gui-input]", host: { properties: { "class.gui-input": "true" } }, ngImport: i0, template: "\n", styles: [".gui-input{background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;color:#333;font:14px Arial;margin:0;max-width:100%;outline:0;padding:8px 12px;text-align:left;transition:border-color .3s ease-in-out}.gui-input:hover{border-color:#999}.gui-input:focus{border-color:#6fb4e8}.gui-input:disabled{color:#ccc;cursor:default;pointer-events:none}.gui-input:disabled::-moz-placeholder{color:#ccc}.gui-input:disabled:-ms-input-placeholder{color:#ccc}.gui-input:disabled::placeholder{color:#ccc}\n", ".gui-material .gui-input{border-color:#ccc;border-radius:0;border-style:solid;border-width:0 0 1px 0;font-family:Roboto,Helvetica Neue,sans-serif;padding-left:0;transition:border-color .3s ease-in-out}.gui-material .gui-input:not(:-moz-placeholder-shown){border-color:#6200ee}.gui-material .gui-input:not(:-ms-input-placeholder){border-color:#6200ee}.gui-material .gui-input:not(:placeholder-shown){border-color:#6200ee}.gui-material .gui-input:focus{border-color:#6200ee}\n", ".gui-dark .gui-input{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-input:hover{border-color:#757575}.gui-dark .gui-input:focus{border-color:#ce93d8}.gui-dark .gui-input:disabled{opacity:.36}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input[gui-input]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-input]': 'true'
                    }, template: "\n", styles: [".gui-input{background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;color:#333;font:14px Arial;margin:0;max-width:100%;outline:0;padding:8px 12px;text-align:left;transition:border-color .3s ease-in-out}.gui-input:hover{border-color:#999}.gui-input:focus{border-color:#6fb4e8}.gui-input:disabled{color:#ccc;cursor:default;pointer-events:none}.gui-input:disabled::-moz-placeholder{color:#ccc}.gui-input:disabled:-ms-input-placeholder{color:#ccc}.gui-input:disabled::placeholder{color:#ccc}\n", ".gui-material .gui-input{border-color:#ccc;border-radius:0;border-style:solid;border-width:0 0 1px 0;font-family:Roboto,Helvetica Neue,sans-serif;padding-left:0;transition:border-color .3s ease-in-out}.gui-material .gui-input:not(:-moz-placeholder-shown){border-color:#6200ee}.gui-material .gui-input:not(:-ms-input-placeholder){border-color:#6200ee}.gui-material .gui-input:not(:placeholder-shown){border-color:#6200ee}.gui-material .gui-input:focus{border-color:#6200ee}\n", ".gui-dark .gui-input{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-input:hover{border-color:#757575}.gui-dark .gui-input:focus{border-color:#ce93d8}.gui-dark .gui-input:disabled{opacity:.36}\n"] }]
        }] });

class FabricTimePickerComponent extends FabricReactive {
    constructor(formBuilder, datePickerService) {
        super();
        this.formBuilder = formBuilder;
        this.datePickerService = datePickerService;
        this.datePickerComposition = FabricDatePickerComposition.NONE;
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
        if (changes['selectedDate']) {
            if (this.selectedDate) {
            }
        }
    }
    ngOnInit() {
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)) {
            this.form
                .controls['hours']
                .valueChanges
                .pipe(takeUntil(this.unsubscribe$))
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
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((value) => {
                this.controlFormItemValue(value, 'minutes', 'hours');
                this.changeSelectedDate();
            });
        }
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)) {
            this.form
                .controls['seconds']
                .valueChanges
                .pipe(takeUntil(this.unsubscribe$))
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
        if (this.selectedDate) {
            const hours = this.form.controls['hours'].value, minutes = this.form.controls['minutes'].value, seconds = this.form.controls['seconds'].value, timeValues = new FabricTimeValues(hours, minutes, seconds);
            this.datePickerService.changeTime(timeValues, this.selectedDate);
        }
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
        if (this.selectedDate) {
            const hours = this.selectedDate.getHours(), minutes = this.selectedDate.getMinutes(), seconds = this.selectedDate.getSeconds();
            this.form.controls['hours'].setValue(hours);
            this.form.controls['minutes'].setValue(minutes);
            this.form.controls['seconds'].setValue(seconds);
        }
    }
}
FabricTimePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTimePickerComponent, deps: [{ token: i1.FormBuilder }, { token: FabricDatePickerService }], target: i0.ɵɵFactoryTarget.Component });
FabricTimePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricTimePickerComponent, selector: "gui-time-picker", inputs: { selectedDate: "selectedDate", datePickerComposition: "datePickerComposition" }, host: { properties: { "class.only-time-picker": "isOnlyTimePicker()" } }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<form [formGroup]=\"form\">\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"hours\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"minutes\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"seconds\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n</form>\n\n<div (click)=\"changeSelectedDateTime()\"\n\t class=\"gui-time-picker-button-wrapper\">\n\t<button [outline]=\"true\" gui-button>\n\t\tOk\n\t</button>\n</div>\n", components: [{ type: FabricArrowIconComponent, selector: "gui-arrow-icon", inputs: ["direction"] }, { type: FabricInputComponent, selector: "input[gui-input]" }, { type: FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTimePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-time-picker', host: {
                        '[class.only-time-picker]': 'isOnlyTimePicker()'
                    }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<form [formGroup]=\"form\">\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"hours\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"minutes\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"seconds\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n</form>\n\n<div (click)=\"changeSelectedDateTime()\"\n\t class=\"gui-time-picker-button-wrapper\">\n\t<button [outline]=\"true\" gui-button>\n\t\tOk\n\t</button>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: FabricDatePickerService }]; }, propDecorators: { selectedDate: [{
                type: Input
            }], datePickerComposition: [{
                type: Input
            }] } });

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
        /** Cells representing days in weeks of the active month. */
        this.weeks = [];
        /** Year cells displayed in years view. */
        this.years = [];
        this.activeMonth = FabricDatePickerDefaultActiveMonth;
        this.activeYear = FabricDatePickerDefaultActiveYear;
        this.datePickerComposition = FabricDatePickerComposition.NONE;
        this.FabricDatePickerComposition = FabricDatePickerComposition;
        this.FabricCalendarView = FabricCalendarView;
        this.fabricCalendarView = FabricCalendarView.DAYS;
    }
    ngOnInit() {
        this.datePickerFormatService
            .onComposition()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((datePickerComposition) => {
            this.datePickerComposition = datePickerComposition;
        });
        this.calendarService
            .onActiveMonth()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((month) => {
            this.activeMonth = month;
            this.calculateDatePickerData();
            this.changeDetectorRef.detectChanges();
        });
        this.calendarService
            .onActiveYear()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((year) => {
            this.activeYear = year;
            this.calculateDatePickerData();
            this.changeDetectorRef.detectChanges();
        });
        this.datePickerService
            .observeSelectedDate()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((date) => {
            this.selectedDate = date;
            this.activeYear = date.getFullYear();
            this.activeMonth = date.getMonth();
        });
        this.datePickerYearsService
            .onYears()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((years) => {
            this.years = years;
            this.changeDetectorRef.detectChanges();
        });
        this.calendarViewService
            .onActiveView()
            .pipe(takeUntil(this.unsubscribe$))
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
FabricDatePickerCalendarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerCalendarComponent, deps: [{ token: FabricDatePickerService }, { token: FabricDatePickerCompositionService }, { token: FabricDatePickerWeeks }, { token: FabricDatePickerYears }, { token: FabricDatePickerYearsService }, { token: FabricDatePickerCalendarService }, { token: FabricDatePickerCalendarViewService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
FabricDatePickerCalendarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricDatePickerCalendarComponent, selector: "gui-date-picker-toggle", host: { properties: { "class.gui-date-picker-calendar": "true" } }, usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"isVisible(datePickerComposition, FabricDatePickerComposition.DATE_PICKER)\">\n\n\t<gui-date-picker-view-panel [activeMonth]=\"activeMonth\"\n\t\t\t\t\t\t\t\t[activeYear]=\"activeYear\"\n\t\t\t\t\t\t\t\t[fabricCalendarView]=\"fabricCalendarView\"\n\t\t\t\t\t\t\t\t[selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t[years]=\"years\">\n\t</gui-date-picker-view-panel>\n\n\t<ng-container [ngSwitch]=\"getCalendarView()\">\n\n\t\t<gui-date-picker-days-view *ngSwitchCase=\"FabricCalendarView.DAYS\"\n\t\t\t\t\t\t\t\t   [activeMonth]=\"activeMonth\"\n\t\t\t\t\t\t\t\t   [selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t   [weeks]=\"weeks\">\n\t\t</gui-date-picker-days-view>\n\n\t\t<gui-date-picker-months-view *ngSwitchCase=\"FabricCalendarView.MONTHS\"\n\t\t\t\t\t\t\t\t\t [activeYear]=\"activeYear\"\n\t\t\t\t\t\t\t\t\t [selectedDate]=\"selectedDate\">\n\t\t</gui-date-picker-months-view>\n\n\n\t\t<gui-date-picker-years-view *ngSwitchCase=\"FabricCalendarView.YEARS\"\n\t\t\t\t\t\t\t\t\t[selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t\t[years]=\"years\">\n\t\t</gui-date-picker-years-view>\n\n\t</ng-container>\n\n</ng-container>\n\n<gui-time-picker *ngIf=\"isVisible(datePickerComposition, FabricDatePickerComposition.TIME_PICKER)\"\n\t\t\t\t [datePickerComposition]=\"datePickerComposition\"\n\t\t\t\t [selectedDate]=\"selectedDate\"></gui-time-picker>\n", styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-10{grid-row-gap:16px}.gui-grid-rows-gap-13{grid-row-gap:22px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-10{grid-column-gap:16px}.gui-grid-cols-gap-13{grid-column-gap:22px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.-gui-m-0{margin:0}.-gui-mx-0{margin-left:0;margin-right:0}.-gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.-gui-m-1{margin:-1px}.-gui-mx-1{margin-left:-1px;margin-right:-1px}.-gui-my-1{margin-bottom:-1px;margin-top:-1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.-gui-m-2{margin:-2px}.-gui-mx-2{margin-left:-2px;margin-right:-2px}.-gui-my-2{margin-bottom:-2px;margin-top:-2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.-gui-m-3{margin:-3px}.-gui-mx-3{margin-left:-3px;margin-right:-3px}.-gui-my-3{margin-bottom:-3px;margin-top:-3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.-gui-m-4{margin:-4px}.-gui-mx-4{margin-left:-4px;margin-right:-4px}.-gui-my-4{margin-bottom:-4px;margin-top:-4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.-gui-m-5{margin:-6px}.-gui-mx-5{margin-left:-6px;margin-right:-6px}.-gui-my-5{margin-bottom:-6px;margin-top:-6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.-gui-m-6{margin:-8px}.-gui-mx-6{margin-left:-8px;margin-right:-8px}.-gui-my-6{margin-bottom:-8px;margin-top:-8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.-gui-m-7{margin:-10px}.-gui-mx-7{margin-left:-10px;margin-right:-10px}.-gui-my-7{margin-bottom:-10px;margin-top:-10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.-gui-m-8{margin:-12px}.-gui-mx-8{margin-left:-12px;margin-right:-12px}.-gui-my-8{margin-bottom:-12px;margin-top:-12px}.gui-m-10{margin:16px}.gui-mx-10{margin-left:16px;margin-right:16px}.gui-my-10{margin-bottom:16px;margin-top:16px}.-gui-m-10{margin:-16px}.-gui-mx-10{margin-left:-16px;margin-right:-16px}.-gui-my-10{margin-bottom:-16px;margin-top:-16px}.gui-m-13{margin:22px}.gui-mx-13{margin-left:22px;margin-right:22px}.gui-my-13{margin-bottom:22px;margin-top:22px}.-gui-m-13{margin:-22px}.-gui-mx-13{margin-left:-22px;margin-right:-22px}.-gui-my-13{margin-bottom:-22px;margin-top:-22px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.-gui-m-23{margin:-42px}.-gui-mx-23{margin-left:-42px;margin-right:-42px}.-gui-my-23{margin-bottom:-42px;margin-top:-42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-ml-6{margin-left:8px}.gui-mt-0{margin-top:0}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-10{padding:16px}.gui-px-10{padding-left:16px;padding-right:16px}.gui-py-10{padding-bottom:16px;padding-top:16px}.gui-p-13{padding:22px}.gui-px-13{padding-left:22px;padding-right:22px}.gui-py-13{padding-bottom:22px;padding-top:22px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pb-12{padding-bottom:20px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-12{padding-top:20px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-text-center{text-align:center}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-date-picker-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;font-family:Roboto,Helvetica Neue,sans-serif;border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 0 12px;width:268px}.gui-date-picker-header{font-size:13px;font-weight:400;text-align:center;border-top:1px solid #999}.gui-date-picker-cell{border-radius:4px;border-color:transparent;border-style:solid;border-width:1px;padding:2px 4px;position:relative;text-align:center;font-size:13px;z-index:0}.gui-date-picker-cell:before{border:1px solid #999;border-radius:50%;box-sizing:border-box;content:\"\";display:none;height:36px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:36px;z-index:-1}.gui-date-picker-cell:after{background:transparent;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:32px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:32px;z-index:-1}.gui-date-picker-cell:hover:after{background:#e6e6e6}.gui-date-picker-day{color:#333;cursor:pointer;opacity:.2}.gui-date-picker-day.gui-date-picker-selected-month{opacity:1}.gui-date-picker-month,.gui-date-picker-year{cursor:pointer}.gui-date-picker-year{font-size:13px}.gui-date-picker-day.gui-date-picker-current-day:before,.gui-date-picker-month.gui-date-picker-current-month:before,.gui-date-picker-year.gui-date-picker-current-year:before{display:block}.gui-date-picker-day.gui-date-picker-selected-day{pointer-events:none}.gui-date-picker-day.gui-date-picker-selected-day,.gui-date-picker-month.gui-date-picker-selected-month,.gui-date-picker-year.gui-date-picker-selected-year{color:#fff}.gui-date-picker-day.gui-date-picker-selected-day:after,.gui-date-picker-month.gui-date-picker-selected-month:after,.gui-date-picker-year.gui-date-picker-selected-year:after{background:#2185d0}.gui-date-picker-arrows{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:32px}.gui-date-picker-view-padding{padding:0 8px}.gui-date-picker-view-border-top{border-top:1px solid #999}gui-time-picker{border-top:1px solid #999;margin:6px 0 0;padding:12px 0 2.6666666667px}gui-time-picker form{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}gui-time-picker.only-time-picker{border-top:none}.gui-time-picker-button-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-right:8px}.gui-time-picker-button-wrapper .gui-button{font-size:12px}.gui-time-picker-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 8px;position:relative}.gui-time-picker-item input{box-sizing:border-box;max-width:24px;text-align:center}.gui-time-picker-item input::-webkit-outer-spin-button,.gui-time-picker-item input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.gui-time-picker-item input[type=number]{-moz-appearance:textfield}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(1){margin-bottom:2px}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(2){margin-top:6px}.gui-date-picker-view-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:16px 18px}.gui-date-picker-view-panel .gui-date-picker-view-panel-date{cursor:pointer;font-size:14px;font-weight:700;margin:0;pointer-events:auto}.gui-date-picker-arrow{position:relative;z-index:0}.gui-date-picker-arrow:hover:after{background:#e6e6e6;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:24px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:24px;z-index:-1}\n"], components: [{ type: FabricDatePickerViewPanelComponent, selector: "gui-date-picker-view-panel", inputs: ["fabricCalendarView", "selectedDate", "activeMonth", "activeYear", "years"] }, { type: FabricDatePickerDaysViewComponent, selector: "gui-date-picker-days-view", inputs: ["selectedDate", "activeMonth", "weeks"] }, { type: FabricDatePickerMonthsViewComponent, selector: "gui-date-picker-months-view", inputs: ["selectedDate", "activeYear"] }, { type: FabricDatePickerYearsComponent, selector: "gui-date-picker-years-view", inputs: ["selectedDate", "years"] }, { type: FabricTimePickerComponent, selector: "gui-time-picker", inputs: ["selectedDate", "datePickerComposition"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i3.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerCalendarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-date-picker-toggle', host: {
                        '[class.gui-date-picker-calendar]': 'true'
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"isVisible(datePickerComposition, FabricDatePickerComposition.DATE_PICKER)\">\n\n\t<gui-date-picker-view-panel [activeMonth]=\"activeMonth\"\n\t\t\t\t\t\t\t\t[activeYear]=\"activeYear\"\n\t\t\t\t\t\t\t\t[fabricCalendarView]=\"fabricCalendarView\"\n\t\t\t\t\t\t\t\t[selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t[years]=\"years\">\n\t</gui-date-picker-view-panel>\n\n\t<ng-container [ngSwitch]=\"getCalendarView()\">\n\n\t\t<gui-date-picker-days-view *ngSwitchCase=\"FabricCalendarView.DAYS\"\n\t\t\t\t\t\t\t\t   [activeMonth]=\"activeMonth\"\n\t\t\t\t\t\t\t\t   [selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t   [weeks]=\"weeks\">\n\t\t</gui-date-picker-days-view>\n\n\t\t<gui-date-picker-months-view *ngSwitchCase=\"FabricCalendarView.MONTHS\"\n\t\t\t\t\t\t\t\t\t [activeYear]=\"activeYear\"\n\t\t\t\t\t\t\t\t\t [selectedDate]=\"selectedDate\">\n\t\t</gui-date-picker-months-view>\n\n\n\t\t<gui-date-picker-years-view *ngSwitchCase=\"FabricCalendarView.YEARS\"\n\t\t\t\t\t\t\t\t\t[selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t\t[years]=\"years\">\n\t\t</gui-date-picker-years-view>\n\n\t</ng-container>\n\n</ng-container>\n\n<gui-time-picker *ngIf=\"isVisible(datePickerComposition, FabricDatePickerComposition.TIME_PICKER)\"\n\t\t\t\t [datePickerComposition]=\"datePickerComposition\"\n\t\t\t\t [selectedDate]=\"selectedDate\"></gui-time-picker>\n", styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-10{grid-row-gap:16px}.gui-grid-rows-gap-13{grid-row-gap:22px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-10{grid-column-gap:16px}.gui-grid-cols-gap-13{grid-column-gap:22px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.-gui-m-0{margin:0}.-gui-mx-0{margin-left:0;margin-right:0}.-gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.-gui-m-1{margin:-1px}.-gui-mx-1{margin-left:-1px;margin-right:-1px}.-gui-my-1{margin-bottom:-1px;margin-top:-1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.-gui-m-2{margin:-2px}.-gui-mx-2{margin-left:-2px;margin-right:-2px}.-gui-my-2{margin-bottom:-2px;margin-top:-2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.-gui-m-3{margin:-3px}.-gui-mx-3{margin-left:-3px;margin-right:-3px}.-gui-my-3{margin-bottom:-3px;margin-top:-3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.-gui-m-4{margin:-4px}.-gui-mx-4{margin-left:-4px;margin-right:-4px}.-gui-my-4{margin-bottom:-4px;margin-top:-4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.-gui-m-5{margin:-6px}.-gui-mx-5{margin-left:-6px;margin-right:-6px}.-gui-my-5{margin-bottom:-6px;margin-top:-6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.-gui-m-6{margin:-8px}.-gui-mx-6{margin-left:-8px;margin-right:-8px}.-gui-my-6{margin-bottom:-8px;margin-top:-8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.-gui-m-7{margin:-10px}.-gui-mx-7{margin-left:-10px;margin-right:-10px}.-gui-my-7{margin-bottom:-10px;margin-top:-10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.-gui-m-8{margin:-12px}.-gui-mx-8{margin-left:-12px;margin-right:-12px}.-gui-my-8{margin-bottom:-12px;margin-top:-12px}.gui-m-10{margin:16px}.gui-mx-10{margin-left:16px;margin-right:16px}.gui-my-10{margin-bottom:16px;margin-top:16px}.-gui-m-10{margin:-16px}.-gui-mx-10{margin-left:-16px;margin-right:-16px}.-gui-my-10{margin-bottom:-16px;margin-top:-16px}.gui-m-13{margin:22px}.gui-mx-13{margin-left:22px;margin-right:22px}.gui-my-13{margin-bottom:22px;margin-top:22px}.-gui-m-13{margin:-22px}.-gui-mx-13{margin-left:-22px;margin-right:-22px}.-gui-my-13{margin-bottom:-22px;margin-top:-22px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.-gui-m-23{margin:-42px}.-gui-mx-23{margin-left:-42px;margin-right:-42px}.-gui-my-23{margin-bottom:-42px;margin-top:-42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-ml-6{margin-left:8px}.gui-mt-0{margin-top:0}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-10{padding:16px}.gui-px-10{padding-left:16px;padding-right:16px}.gui-py-10{padding-bottom:16px;padding-top:16px}.gui-p-13{padding:22px}.gui-px-13{padding-left:22px;padding-right:22px}.gui-py-13{padding-bottom:22px;padding-top:22px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pb-12{padding-bottom:20px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-12{padding-top:20px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-text-center{text-align:center}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-date-picker-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;font-family:Roboto,Helvetica Neue,sans-serif;border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 0 12px;width:268px}.gui-date-picker-header{font-size:13px;font-weight:400;text-align:center;border-top:1px solid #999}.gui-date-picker-cell{border-radius:4px;border-color:transparent;border-style:solid;border-width:1px;padding:2px 4px;position:relative;text-align:center;font-size:13px;z-index:0}.gui-date-picker-cell:before{border:1px solid #999;border-radius:50%;box-sizing:border-box;content:\"\";display:none;height:36px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:36px;z-index:-1}.gui-date-picker-cell:after{background:transparent;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:32px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:32px;z-index:-1}.gui-date-picker-cell:hover:after{background:#e6e6e6}.gui-date-picker-day{color:#333;cursor:pointer;opacity:.2}.gui-date-picker-day.gui-date-picker-selected-month{opacity:1}.gui-date-picker-month,.gui-date-picker-year{cursor:pointer}.gui-date-picker-year{font-size:13px}.gui-date-picker-day.gui-date-picker-current-day:before,.gui-date-picker-month.gui-date-picker-current-month:before,.gui-date-picker-year.gui-date-picker-current-year:before{display:block}.gui-date-picker-day.gui-date-picker-selected-day{pointer-events:none}.gui-date-picker-day.gui-date-picker-selected-day,.gui-date-picker-month.gui-date-picker-selected-month,.gui-date-picker-year.gui-date-picker-selected-year{color:#fff}.gui-date-picker-day.gui-date-picker-selected-day:after,.gui-date-picker-month.gui-date-picker-selected-month:after,.gui-date-picker-year.gui-date-picker-selected-year:after{background:#2185d0}.gui-date-picker-arrows{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:32px}.gui-date-picker-view-padding{padding:0 8px}.gui-date-picker-view-border-top{border-top:1px solid #999}gui-time-picker{border-top:1px solid #999;margin:6px 0 0;padding:12px 0 2.6666666667px}gui-time-picker form{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}gui-time-picker.only-time-picker{border-top:none}.gui-time-picker-button-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-right:8px}.gui-time-picker-button-wrapper .gui-button{font-size:12px}.gui-time-picker-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 8px;position:relative}.gui-time-picker-item input{box-sizing:border-box;max-width:24px;text-align:center}.gui-time-picker-item input::-webkit-outer-spin-button,.gui-time-picker-item input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.gui-time-picker-item input[type=number]{-moz-appearance:textfield}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(1){margin-bottom:2px}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(2){margin-top:6px}.gui-date-picker-view-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:16px 18px}.gui-date-picker-view-panel .gui-date-picker-view-panel-date{cursor:pointer;font-size:14px;font-weight:700;margin:0;pointer-events:auto}.gui-date-picker-arrow{position:relative;z-index:0}.gui-date-picker-arrow:hover:after{background:#e6e6e6;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:24px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%);width:24px;z-index:-1}\n"] }]
        }], ctorParameters: function () { return [{ type: FabricDatePickerService }, { type: FabricDatePickerCompositionService }, { type: FabricDatePickerWeeks }, { type: FabricDatePickerYears }, { type: FabricDatePickerYearsService }, { type: FabricDatePickerCalendarService }, { type: FabricDatePickerCalendarViewService }, { type: i0.ChangeDetectorRef }]; } });

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
FabricModalThemeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricModalThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricModalThemeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricModalThemeService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricModalThemeService, decorators: [{
            type: Injectable
        }] });

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
            .pipe(distinctUntilChanged(), takeUntil(this.unsubscribe$))
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
FabricThemedComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricThemedComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: FabricModalThemeService }], target: i0.ɵɵFactoryTarget.Directive });
FabricThemedComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: FabricThemedComponent, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricThemedComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: FabricModalThemeService }]; } });

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
        this.verticalPosition = 0;
        this.horizontalPosition = 0;
        this.calculateCords(window, invokerElementRef, offset, placement);
    }
    getVerticalPosition() {
        return this.verticalPosition;
    }
    getHorizontalPosition() {
        return this.horizontalPosition;
    }
    calculateCords(window, invokerElementRef, offset, placement) {
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
InlineDialogGeometryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: InlineDialogGeometryService, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
InlineDialogGeometryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: InlineDialogGeometryService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: InlineDialogGeometryService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });

class FabricInlineDialogComponent extends FabricThemedComponent {
    constructor(componentFactoryResolver, changeDetectorRef, inlineDialogService, elRef, inlineDialogGeometryService, renderer, themeService, theme) {
        super(elRef, renderer, themeService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.inlineDialogService = inlineDialogService;
        this.elRef = elRef;
        this.inlineDialogGeometryService = inlineDialogGeometryService;
        this.customClass = '';
        this.visible = false;
        this.width = '400px';
    }
    ngOnInit() {
        this.inlineDialogGeometryService
            .observeInlineDialogCords()
            .pipe(takeUntil(this.unsubscribe$))
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
        timer(0)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            this.visible = true;
            this.changeDetectorRef.detectChanges();
        });
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
        if (this.container && component) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            if (this.inlineDialogNestedInjector) {
                this.container.createComponent(componentFactory, undefined, this.inlineDialogNestedInjector);
            }
            else {
                this.container.createComponent(componentFactory);
            }
            this.changeDetectorRef.detectChanges();
        }
    }
}
FabricInlineDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInlineDialogComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ChangeDetectorRef }, { token: forwardRef(() => FabricInlineDialogService) }, { token: i0.ElementRef }, { token: InlineDialogGeometryService }, { token: i0.Renderer2 }, { token: FabricModalThemeService }, { token: themeToken }], target: i0.ɵɵFactoryTarget.Component });
FabricInlineDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricInlineDialogComponent, selector: "ng-component", viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }], usesInheritance: true, ngImport: i0, template: "<div [ngClass]=\"customClass\"\n\t [style.left.px]=\"dialogLeftAttribute\"\n\t [style.top.px]=\"dialogTopAttribute\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t [class.gui-inline-dialog-visible]=\"visible\"\n\t\t [style.max-width]=\"width\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n", styles: [".gui-inline-dialog-wrapper{box-sizing:border-box;position:absolute;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d;box-sizing:border-box;display:block;z-index:1000;opacity:0;transition:opacity .2s ease-in-out}.gui-inline-dialog-wrapper .gui-inline-dialog-content.gui-inline-dialog-visible{opacity:1}\n", ".gui-dark .gui-inline-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"], directives: [{ type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInlineDialogComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div [ngClass]=\"customClass\"\n\t [style.left.px]=\"dialogLeftAttribute\"\n\t [style.top.px]=\"dialogTopAttribute\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t [class.gui-inline-dialog-visible]=\"visible\"\n\t\t [style.max-width]=\"width\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n", styles: [".gui-inline-dialog-wrapper{box-sizing:border-box;position:absolute;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d;box-sizing:border-box;display:block;z-index:1000;opacity:0;transition:opacity .2s ease-in-out}.gui-inline-dialog-wrapper .gui-inline-dialog-content.gui-inline-dialog-visible{opacity:1}\n", ".gui-dark .gui-inline-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }, { type: FabricInlineDialogService, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => FabricInlineDialogService)]
                }] }, { type: i0.ElementRef }, { type: InlineDialogGeometryService }, { type: i0.Renderer2 }, { type: FabricModalThemeService }, { type: Theme, decorators: [{
                    type: Inject,
                    args: [themeToken]
                }] }]; }, propDecorators: { container: [{
                type: ViewChild,
                args: ['container', { read: ViewContainerRef, static: false }]
            }] } });

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
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.removeInlineDialog();
    }
    open(element, component, config) {
        if (event) {
            event.stopPropagation();
        }
        if (!this.inlineDialogRef) {
            let parentInjector = this.injector, placement = FabricPlacement.BOTTOM, offset = 0, theme = Theme.FABRIC, customClass = '';
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
        this.destroy$.next(undefined);
        this.destroy$.complete();
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
        if (customClass) {
            componentRef.instance.customClass = customClass;
        }
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
            .pipe(filter((key) => key.code === 'Escape'), takeUntil(this.destroy$))
            .subscribe(() => this.close());
    }
}
FabricInlineDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInlineDialogService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }, { token: InlineDialogGeometryService }], target: i0.ɵɵFactoryTarget.Injectable });
FabricInlineDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInlineDialogService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInlineDialogService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: InlineDialogGeometryService }]; } });

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
FabricDatePickerInlineDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerInlineDialogService, deps: [{ token: FabricInlineDialogService }], target: i0.ɵɵFactoryTarget.Injectable });
FabricDatePickerInlineDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerInlineDialogService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerInlineDialogService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: FabricInlineDialogService }]; } });

class DatePickerIconComponent {
}
DatePickerIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DatePickerIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatePickerIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DatePickerIconComponent, selector: "gui-date-picker-icon", host: { properties: { "class.gui-date-picker-icon": "true" } }, ngImport: i0, template: "<svg height=\"9.82\" viewBox=\"0 0 8.76 9.82\" width=\"8.76\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path\n\t\td=\"M401.41,308.63l-.46.15h-.15a.34.34,0,0,1-.08-.67l.68-.22a1.539,1.539,0,0,1,.38-.07h0a.39.39,0,0,1,.39.39V312a.38.38,0,0,1-.39.39.39.39,0,0,1-.39-.39Z\"\n\t\tfill=\"#8c8b8b\" transform=\"translate(-397.19 -304.36)\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(0.64 9.32)\" x1=\"7.39\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(0.64 2.16)\" x1=\"7.39\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(0.5 0.5)\" y2=\"8.82\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(3.09 0.5)\" y2=\"1.66\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(5.68 0.5)\" y2=\"1.66\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(8.26 0.5)\" y2=\"8.82\"/>\n</svg>\n", styles: [".gui-date-picker-icon svg{height:16px;width:16px}.gui-date-picker-icon svg line,.gui-date-picker-icon svg path{transition:all .3s ease-in-out}.gui-date-picker-icon svg line{stroke:#aaa}.gui-date-picker-icon svg path{fill:#aaa}.gui-date-picker-icon svg:hover line{stroke:#464646}.gui-date-picker-icon svg:hover path{fill:#464646}\n", ".gui-dark .gui-date-picker-icon svg line{stroke:#bdbdbd}.gui-dark .gui-date-picker-icon svg path{fill:#bdbdbd}.gui-dark .gui-date-picker-icon svg:hover line{stroke:#616161}.gui-dark .gui-date-picker-icon svg:hover path{fill:#616161}\n"], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DatePickerIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-date-picker-icon', encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-date-picker-icon]': 'true'
                    }, template: "<svg height=\"9.82\" viewBox=\"0 0 8.76 9.82\" width=\"8.76\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path\n\t\td=\"M401.41,308.63l-.46.15h-.15a.34.34,0,0,1-.08-.67l.68-.22a1.539,1.539,0,0,1,.38-.07h0a.39.39,0,0,1,.39.39V312a.38.38,0,0,1-.39.39.39.39,0,0,1-.39-.39Z\"\n\t\tfill=\"#8c8b8b\" transform=\"translate(-397.19 -304.36)\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(0.64 9.32)\" x1=\"7.39\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(0.64 2.16)\" x1=\"7.39\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(0.5 0.5)\" y2=\"8.82\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(3.09 0.5)\" y2=\"1.66\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(5.68 0.5)\" y2=\"1.66\"/>\n\t<line fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"\n\t\t  transform=\"translate(8.26 0.5)\" y2=\"8.82\"/>\n</svg>\n", styles: [".gui-date-picker-icon svg{height:16px;width:16px}.gui-date-picker-icon svg line,.gui-date-picker-icon svg path{transition:all .3s ease-in-out}.gui-date-picker-icon svg line{stroke:#aaa}.gui-date-picker-icon svg path{fill:#aaa}.gui-date-picker-icon svg:hover line{stroke:#464646}.gui-date-picker-icon svg:hover path{fill:#464646}\n", ".gui-dark .gui-date-picker-icon svg line{stroke:#bdbdbd}.gui-dark .gui-date-picker-icon svg path{fill:#bdbdbd}.gui-dark .gui-date-picker-icon svg:hover line{stroke:#616161}.gui-dark .gui-date-picker-icon svg:hover path{fill:#616161}\n"] }]
        }] });

class FabricDatePickerComponent extends FabricReactive {
    constructor(fabricDatePickerInlineDialogService, datePickerService, datePickerCompositionService, formBuilder, changeDetectorRef) {
        super();
        this.fabricDatePickerInlineDialogService = fabricDatePickerInlineDialogService;
        this.datePickerService = datePickerService;
        this.datePickerCompositionService = datePickerCompositionService;
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.name = '';
        this.openDialog = false;
        this.onlyDialog = false;
        this.datePipeOptions = 'dd/MM/yyyy';
        this.dateSelected = new EventEmitter();
        this.dialogOpened = new EventEmitter();
        this.pickedDate = new Date();
        this.inputDisabled = '';
        this.datePickerForm = formBuilder.group({
            date: ['']
        });
    }
    ngOnChanges(changes) {
        if (changes['selectDate']) {
            if (this.selectDate) {
                if (!this.pickedDate || !FabricDateUtils.areDatesSame(this.selectDate, this.pickedDate)) {
                    this.datePickerService.dateSelected(this.selectDate);
                }
            }
        }
        if (changes['onlyDialog']) {
            this.inputDisabled = this.onlyDialog ? 'disabled' : '';
        }
        if (changes['datePipeOptions']) {
            this.datePickerCompositionService.next(this.datePipeOptions);
        }
    }
    ngOnInit() {
        this.datePickerService
            .observeSelectedDate()
            .pipe(skip(1), takeUntil(this.unsubscribe$))
            .subscribe((date) => {
            this.pickedDate = date;
            this.emitSelectedDate(date);
            this.changeDetectorRef.detectChanges();
            this.closeDatePicker();
        });
        this.fabricDatePickerInlineDialogService
            .onOpened()
            .pipe(skip(1), takeUntil(this.unsubscribe$))
            .subscribe((opened) => {
            this.dialogOpened.emit(opened);
        });
        // this.observeDayChanges();
    }
    ngAfterViewInit() {
        this.datePickerService
            .observeSelectedDate()
            .pipe(take(1), takeUntil(this.unsubscribe$))
            .subscribe((date) => {
            this.pickedDate = date;
            this.emitSelectedDate(date);
            this.changeDetectorRef.detectChanges();
        });
        if (this.openDialog) {
            this.openDatePicker();
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.fabricDatePickerInlineDialogService.close();
    }
    openDatePicker() {
        const shouldUseDatePickerRef = !this.parentElement && this.datePickerRef, parentElement = shouldUseDatePickerRef ? this.datePickerRef : this.parentElement;
        if (parentElement) {
            this.fabricDatePickerInlineDialogService
                .open(parentElement, FabricDatePickerCalendarComponent, this.theme);
        }
    }
    closeDatePicker() {
        this.fabricDatePickerInlineDialogService.close();
    }
    emitSelectedDate(date) {
        this.dateSelected.emit(date);
    }
    observeDayChanges() {
        // currently disabled
        this.datePickerForm
            .controls['date']
            .valueChanges
            .pipe(distinctUntilChanged(), debounceTime(1500), map((day) => this.parse(day)), takeUntil(this.unsubscribe$))
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
            let year = 0, month = 0, day = 0;
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
FabricDatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerComponent, deps: [{ token: FabricDatePickerInlineDialogService }, { token: FabricDatePickerService }, { token: FabricDatePickerCompositionService }, { token: i1.FormBuilder }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
FabricDatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricDatePickerComponent, selector: "gui-date-picker", inputs: { parentElement: "parentElement", theme: "theme", selectDate: "selectDate", name: "name", openDialog: "openDialog", onlyDialog: "onlyDialog", datePipeOptions: "datePipeOptions" }, outputs: { dateSelected: "dateSelected", dialogOpened: "dialogOpened" }, viewQueries: [{ propertyName: "datePickerRef", first: true, predicate: ["datePicker"], descendants: true, read: ElementRef }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div #datePicker\n\t class=\"gui-date-picker\">\n\n\t<form [formGroup]=\"datePickerForm\">\n\n\t\t<input [attr.disabled]=\"inputDisabled\"\n\t\t\t   [name]=name\n\t\t\t   [value]=\"pickedDate | date: datePipeOptions\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input\n\t\t\t   readonly>\n\t</form>\n\n\t<gui-date-picker-icon (click)=\"openDatePicker()\"\n\t\t\t\t\t\t  class=\"gui-date-picker-icon\">\n\t</gui-date-picker-icon>\n\n</div>\n", styles: [".gui-date-picker{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;position:relative}.gui-date-picker .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}.gui-date-picker input,.gui-date-picker-calendar input{background:transparent;border-radius:0;border-width:0 0 1px 0;font-family:Arial;font-size:14px;padding:4px}.gui-date-picker input:disabled,.gui-date-picker-calendar input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon,.gui-date-picker-calendar .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}\n", ".gui-dark .gui-input{background:transparent;color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-arrow-icon:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year{color:#333}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#dfb8e6}\n", ".gui-material .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-material .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-material .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#6200ee}\n"], components: [{ type: FabricInputComponent, selector: "input[gui-input]" }, { type: DatePickerIconComponent, selector: "gui-date-picker-icon" }], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "date": i3.DatePipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-date-picker', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div #datePicker\n\t class=\"gui-date-picker\">\n\n\t<form [formGroup]=\"datePickerForm\">\n\n\t\t<input [attr.disabled]=\"inputDisabled\"\n\t\t\t   [name]=name\n\t\t\t   [value]=\"pickedDate | date: datePipeOptions\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input\n\t\t\t   readonly>\n\t</form>\n\n\t<gui-date-picker-icon (click)=\"openDatePicker()\"\n\t\t\t\t\t\t  class=\"gui-date-picker-icon\">\n\t</gui-date-picker-icon>\n\n</div>\n", styles: [".gui-date-picker{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;position:relative}.gui-date-picker .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}.gui-date-picker input,.gui-date-picker-calendar input{background:transparent;border-radius:0;border-width:0 0 1px 0;font-family:Arial;font-size:14px;padding:4px}.gui-date-picker input:disabled,.gui-date-picker-calendar input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon,.gui-date-picker-calendar .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}\n", ".gui-dark .gui-input{background:transparent;color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-arrow-icon:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell:hover:after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year{color:#333}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#dfb8e6}\n", ".gui-material .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day:after,.gui-material .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month:after,.gui-material .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year:after{background:#6200ee}\n"] }]
        }], ctorParameters: function () { return [{ type: FabricDatePickerInlineDialogService }, { type: FabricDatePickerService }, { type: FabricDatePickerCompositionService }, { type: i1.FormBuilder }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { datePickerRef: [{
                type: ViewChild,
                args: ['datePicker', { read: ElementRef, static: false }]
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
            }] } });

class FabricInlineDialogModule {
}
FabricInlineDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInlineDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricInlineDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInlineDialogModule, declarations: [FabricInlineDialogComponent], imports: [CommonModule] });
FabricInlineDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInlineDialogModule, providers: [
        FabricInlineDialogService,
        InlineDialogGeometryService
    ], imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInlineDialogModule, decorators: [{
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
        }] });

class FabricInputModule {
}
FabricInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInputModule, declarations: [FabricInputComponent], imports: [CommonModule], exports: [FabricInputComponent] });
FabricInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInputModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInputModule, decorators: [{
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
        }] });

class FabricArrowIconModule {
}
FabricArrowIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricArrowIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricArrowIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricArrowIconModule, declarations: [FabricArrowIconComponent], imports: [CommonModule], exports: [FabricArrowIconComponent] });
FabricArrowIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricArrowIconModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricArrowIconModule, decorators: [{
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
        }] });

class DatePickerIconModule {
}
DatePickerIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DatePickerIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DatePickerIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DatePickerIconModule, declarations: [DatePickerIconComponent], imports: [CommonModule], exports: [DatePickerIconComponent] });
DatePickerIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DatePickerIconModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DatePickerIconModule, decorators: [{
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
        }] });

class FabricDatePickerModule {
}
FabricDatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricDatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerModule, declarations: [FabricDatePickerCalendarComponent,
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
        FabricDatePickerComponent] });
FabricDatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerModule, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDatePickerModule, decorators: [{
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
        }] });

class FabricModal extends FabricReactive {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.componentRef = 'destroyed';
    }
    ngOnDestroy() {
        this.removeComponent();
    }
    createAndAppend(config) {
        const componentInjector = config?.injector ? config.injector : this.injector;
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(this.getComponent())
            .create(componentInjector);
        this.applicationRef.attachView(this.componentRef.hostView);
        const domModalElement = this.componentRef.hostView
            .rootNodes[0];
        this.getElement(config?.appendToElement).appendChild(domModalElement);
        if (config?.afterCompCreation) {
            config?.afterCompCreation();
        }
        this.componentRef.changeDetectorRef.detectChanges();
    }
    removeComponent() {
        if (this.componentRef !== 'destroyed') {
            this.applicationRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = 'destroyed';
            this.unsubscribe();
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
    onCloseOnEsc() {
        const close$ = fromEvent(this.getDocument(), 'keyup');
        return close$
            .pipe(filter((key) => key.code === 'Escape'), takeUntil(this.unsubscribe$));
    }
    isComponentCreated() {
        return this.componentRef !== 'destroyed';
    }
    getElement(el) {
        return el ? el.nativeElement : this.document.body;
    }
}
FabricModal.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricModal, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Directive });
FabricModal.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: FabricModal, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricModal, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });

class FabricDrawerService extends FabricModal {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
        /** To prevent multiple timers **/
        this.inProgress = false;
    }
    getComponent() {
        return FabricDrawerComponent;
    }
    open(config) {
        if (event) {
            event.stopPropagation();
        }
        if (this.isComponentCreated() && config?.preventReopeningDrawer) {
            return;
        }
        if (this.isComponentCreated() && !this.inProgress && !config?.preventReopeningDrawer) {
            this.waitAndCreateNewDrawer(config);
        }
        else {
            this.createDrawer(config);
        }
    }
    close() {
        if (this.isComponentCreated()) {
            const componentRef = this.getComponentRef();
            componentRef.instance.visible = false;
            componentRef.instance.detectChanges();
            timer(300)
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(() => {
                this.removeComponent();
                this.inProgress = false;
            });
        }
    }
    createDrawer(config) {
        if (this.isComponentCreated()) {
            this.removeComponent();
        }
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
        this.createAndAppend({
            injector: injector,
            afterCompCreation: () => this.applyInstanceVars(config),
            appendToElement: config?.appendToElement
        });
        this.closeOnEscKey();
    }
    waitAndCreateNewDrawer(config) {
        this.inProgress = true;
        this.close();
        timer(400)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            this.createDrawer(config);
        });
    }
    applyInstanceVars(config) {
        if (this.isComponentCreated()) {
            const componentRef = this.getComponentRef();
            if (config?.width) {
                componentRef.instance.width = config.width;
            }
            if (config?.closeOnClickOutside) {
                componentRef.instance.closeOnClickOutside = config.closeOnClickOutside;
            }
            componentRef.instance.dialogNestedComponent = config?.component;
            componentRef.instance.isFixed = !config?.appendToElement;
        }
    }
    closeOnEscKey() {
        this.onCloseOnEsc()
            .subscribe(() => this.close());
    }
}
FabricDrawerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDrawerService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
FabricDrawerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDrawerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDrawerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });

const selector = 'gui-close-icon';
class FabricCloseIconComponent {
}
FabricCloseIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCloseIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricCloseIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricCloseIconComponent, selector: "gui-close-icon", host: { properties: { "class.gui-close-icon-wrapper": "true" } }, ngImport: i0, template: `
		<span class="gui-close-icon"></span>
	`, isInline: true, styles: [".gui-close-icon-wrapper .gui-close-icon{cursor:pointer;height:16px;position:absolute;right:8px;top:8px;width:16px}.gui-close-icon-wrapper .gui-close-icon:before,.gui-close-icon-wrapper .gui-close-icon:after{background-color:#aaa;content:\" \";height:16px;left:7px;position:absolute;width:2px}.gui-close-icon-wrapper .gui-close-icon:before{-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-close-icon-wrapper .gui-close-icon:after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.gui-close-icon-wrapper .gui-close-icon:hover:before,.gui-close-icon-wrapper .gui-close-icon:hover:after{background-color:#464646}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCloseIconComponent, decorators: [{
            type: Component,
            args: [{ selector: selector, template: `
		<span class="gui-close-icon"></span>
	`, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-close-icon-wrapper]': 'true'
                    }, styles: [".gui-close-icon-wrapper .gui-close-icon{cursor:pointer;height:16px;position:absolute;right:8px;top:8px;width:16px}.gui-close-icon-wrapper .gui-close-icon:before,.gui-close-icon-wrapper .gui-close-icon:after{background-color:#aaa;content:\" \";height:16px;left:7px;position:absolute;width:2px}.gui-close-icon-wrapper .gui-close-icon:before{-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-close-icon-wrapper .gui-close-icon:after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.gui-close-icon-wrapper .gui-close-icon:hover:before,.gui-close-icon-wrapper .gui-close-icon:hover:after{background-color:#464646}\n"] }]
        }] });

class FabricDrawerComponent extends FabricThemedComponent {
    constructor(componentFactoryResolver, changeDetectorRef, elRef, dialogService, themeModalService, renderer) {
        super(elRef, renderer, themeModalService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        this.dialogService = dialogService;
        this.width = '400px';
        this.closeOnClickOutside = false;
        this.visible = false;
        this.isFixed = false;
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.createNestedComponent();
        timer(50)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            this.visible = true;
            this.changeDetectorRef.detectChanges();
        });
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
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    isContainerClicked(event) {
        const dialogContentRef = this.elRef.nativeElement.querySelector('.gui-drawer-content');
        if (dialogContentRef) {
            return !dialogContentRef.contains(event.target);
        }
        return false;
    }
    createNestedComponent() {
        if (this.container) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dialogNestedComponent);
            this.container.createComponent(componentFactory);
            this.changeDetectorRef.detectChanges();
        }
    }
}
FabricDrawerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDrawerComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: FabricDrawerService }, { token: FabricModalThemeService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FabricDrawerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricDrawerComponent, selector: "ng-component", viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }], usesInheritance: true, ngImport: i0, template: "<div (document:click)=\"clickOutside($event)\"\n\t [class.gui-drawer-visible]=\"visible\"\n\t [class.gui-drawer-fixed]=\"isFixed\"\n\t [style.max-width]=\"width\"\n\t class=\"gui-drawer-wrapper\">\n\t<div\n\t\t class=\"gui-drawer-content\">\n\t\t<gui-close-icon (click)=\"closeDrawer()\"></gui-close-icon>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n", styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;height:100%;width:auto;position:absolute;padding-left:50px;right:0;top:0;overflow:hidden;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;height:100%;position:relative;margin-left:auto;-ms-transform:translateX(100%);transform:translate(100%);transition:all .3s ease-in-out}.gui-drawer-wrapper.gui-drawer-visible .gui-drawer-content{-ms-transform:translateX(0);transform:translate(0);box-shadow:-6px 0 16px -8px #00000014,-9px 0 28px #0000000d,-12px 0 48px 16px #00000008}.gui-drawer-wrapper.gui-drawer-fixed{position:fixed;height:100vh}\n", ".gui-dark .gui-drawer-wrapper .gui-drawer-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"], components: [{ type: FabricCloseIconComponent, selector: "gui-close-icon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDrawerComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div (document:click)=\"clickOutside($event)\"\n\t [class.gui-drawer-visible]=\"visible\"\n\t [class.gui-drawer-fixed]=\"isFixed\"\n\t [style.max-width]=\"width\"\n\t class=\"gui-drawer-wrapper\">\n\t<div\n\t\t class=\"gui-drawer-content\">\n\t\t<gui-close-icon (click)=\"closeDrawer()\"></gui-close-icon>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n", styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;height:100%;width:auto;position:absolute;padding-left:50px;right:0;top:0;overflow:hidden;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;height:100%;position:relative;margin-left:auto;-ms-transform:translateX(100%);transform:translate(100%);transition:all .3s ease-in-out}.gui-drawer-wrapper.gui-drawer-visible .gui-drawer-content{-ms-transform:translateX(0);transform:translate(0);box-shadow:-6px 0 16px -8px #00000014,-9px 0 28px #0000000d,-12px 0 48px 16px #00000008}.gui-drawer-wrapper.gui-drawer-fixed{position:fixed;height:100vh}\n", ".gui-dark .gui-drawer-wrapper .gui-drawer-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: FabricDrawerService }, { type: FabricModalThemeService }, { type: i0.Renderer2 }]; }, propDecorators: { container: [{
                type: ViewChild,
                args: ['container', { read: ViewContainerRef, static: false }]
            }] } });

class FabricCloseIconModule {
}
FabricCloseIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCloseIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricCloseIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCloseIconModule, declarations: [FabricCloseIconComponent], imports: [CommonModule], exports: [FabricCloseIconComponent] });
FabricCloseIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCloseIconModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricCloseIconModule, decorators: [{
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
        }] });

class FabricDrawerModule {
}
FabricDrawerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricDrawerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDrawerModule, declarations: [FabricDrawerComponent], imports: [CommonModule,
        FabricCloseIconModule] });
FabricDrawerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDrawerModule, providers: [
        FabricDrawerService
    ], imports: [[
            CommonModule,
            FabricCloseIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDrawerModule, decorators: [{
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
        }] });

class Geometry {
    constructor(container, menu, windowSize) {
        this.container = container;
        this.menu = menu;
        this.windowSize = windowSize;
        this.containerHeight = 0;
        this.containerWidth = 0;
        this.availableBottomSpace = 0;
        this.availableTopSpace = 0;
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
GeometryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GeometryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GeometryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GeometryService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GeometryService, decorators: [{
            type: Injectable
        }] });

var Placement;
(function (Placement) {
    Placement[Placement["Right"] = 0] = "Right";
    Placement[Placement["Left"] = 1] = "Left";
})(Placement || (Placement = {}));

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
        this.isArrowEnabled = true;
        this.width = 120;
        this.showOnHover = false;
        this.containerWidth = 0;
        this.containerHeight = 0;
        this.windowSize = 0;
        this.horizontalPosition = 0;
        this.bottomPosition = 0;
        this.topPosition = 0;
        this.arrowDirection = Direction.BOTTOM;
        this.canOpenDownward = false;
        this.canOpenUpward = false;
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
        if (changes['placement']) {
            this.changePlacement();
        }
    }
    ngOnInit() {
        this.geometryService
            .watchGeometry()
            .pipe(takeUntil(this.unsubscribe$))
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
        if (this.containerRef && this.dropdownMenuRef) {
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
        if (!this.dropdownMenuRef) {
            return;
        }
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
FabricDropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDropdownComponent, deps: [{ token: PLATFORM_ID }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: GeometryService }], target: i0.ɵɵFactoryTarget.Component });
FabricDropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricDropdownComponent, selector: "gui-dropdown", inputs: { disabled: "disabled", dropdownText: "dropdownText", isArrowEnabled: "isArrowEnabled", placement: "placement", width: "width", showOnHover: "showOnHover" }, host: { listeners: { "window:resize": "onResize()" }, properties: { "class.gui-dropdown": "true" } }, providers: [
        GeometryService
    ], viewQueries: [{ propertyName: "dropdownMenuRef", first: true, predicate: ["dropdownMenu"], descendants: true, read: ElementRef, static: true }, { propertyName: "containerRef", first: true, predicate: ["container"], descendants: true, read: ElementRef, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div #container\n\t [class.gui-arrow-left]=\"isDirectionLeft()\"\n\t [class.gui-disabled]=\"disabled\"\n\t [style.width.px]=\"width\"\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t (mouseenter)=\"tryToOpenOnHover()\"\n\t (mouseleave)=\"hideOnHover()\"\n\t class=\"gui-dropdown-container\">\n\n\t<div class=\"gui-dropdown-text\">{{dropdownText}}</div>\n\n\t<div *ngIf=\"isArrowEnabled\"\n\t\t [class.gui-dropdown-arrow]=\"isArrowEnabled\">\n\t\t<gui-arrow-icon [direction]=\"arrowDirection\"></gui-arrow-icon>\n\t</div>\n\n\t<div #dropdownMenu\n\t\t [style.bottom.px]=\"topPosition\"\n\t\t [style.left.px]=\"horizontalPosition\"\n\t\t [style.top.px]=\"bottomPosition\"\n\t\t class=\"gui-dropdown-menu\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n", styles: [".gui-dropdown .gui-dropdown-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 12px;position:relative;width:auto}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container:hover .gui-arrow-icon svg path{stroke:#464646}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{cursor:pointer;position:absolute;right:12px;top:8px}.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{background:inherit;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;display:none;left:-1px;overflow:hidden;position:absolute;width:inherit;z-index:2}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{list-style-type:none;padding:8px 12px;width:inherit}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#cccccc}.gui-dropdown .gui-dropdown-container.gui-arrow-left{padding:8px 12px 8px 32px}.gui-dropdown .gui-dropdown-container.gui-arrow-left .gui-dropdown-arrow{left:12px;right:auto;right:initial}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}\n", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow svg path{stroke:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#616161}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}\n"], components: [{ type: FabricArrowIconComponent, selector: "gui-arrow-icon", inputs: ["direction"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-dropdown', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-dropdown]': 'true'
                    }, providers: [
                        GeometryService
                    ], template: "<div #container\n\t [class.gui-arrow-left]=\"isDirectionLeft()\"\n\t [class.gui-disabled]=\"disabled\"\n\t [style.width.px]=\"width\"\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t (mouseenter)=\"tryToOpenOnHover()\"\n\t (mouseleave)=\"hideOnHover()\"\n\t class=\"gui-dropdown-container\">\n\n\t<div class=\"gui-dropdown-text\">{{dropdownText}}</div>\n\n\t<div *ngIf=\"isArrowEnabled\"\n\t\t [class.gui-dropdown-arrow]=\"isArrowEnabled\">\n\t\t<gui-arrow-icon [direction]=\"arrowDirection\"></gui-arrow-icon>\n\t</div>\n\n\t<div #dropdownMenu\n\t\t [style.bottom.px]=\"topPosition\"\n\t\t [style.left.px]=\"horizontalPosition\"\n\t\t [style.top.px]=\"bottomPosition\"\n\t\t class=\"gui-dropdown-menu\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n", styles: [".gui-dropdown .gui-dropdown-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 12px;position:relative;width:auto}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container:hover .gui-arrow-icon svg path{stroke:#464646}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{cursor:pointer;position:absolute;right:12px;top:8px}.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{background:inherit;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;display:none;left:-1px;overflow:hidden;position:absolute;width:inherit;z-index:2}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{list-style-type:none;padding:8px 12px;width:inherit}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#cccccc}.gui-dropdown .gui-dropdown-container.gui-arrow-left{padding:8px 12px 8px 32px}.gui-dropdown .gui-dropdown-container.gui-arrow-left .gui-dropdown-arrow{left:12px;right:auto;right:initial}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}\n", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow svg path{stroke:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#616161}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: GeometryService }]; }, propDecorators: { dropdownMenuRef: [{
                type: ViewChild,
                args: ['dropdownMenu', { read: ElementRef, static: true }]
            }], containerRef: [{
                type: ViewChild,
                args: ['container', { read: ElementRef, static: true }]
            }], onResize: [{
                type: HostListener,
                args: ['window:resize']
            }], disabled: [{
                type: Input
            }], dropdownText: [{
                type: Input
            }], isArrowEnabled: [{
                type: Input
            }], placement: [{
                type: Input
            }], width: [{
                type: Input
            }], showOnHover: [{
                type: Input
            }] } });

class DropdownItemComponent {
}
DropdownItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DropdownItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DropdownItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DropdownItemComponent, selector: "gui-dropdown-item", ngImport: i0, template: "<div class=\"gui-item\">\n\t<ng-content></ng-content>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DropdownItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-dropdown-item', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"gui-item\">\n\t<ng-content></ng-content>\n</div>\n" }]
        }] });

class FabricDropdownModule {
}
FabricDropdownModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricDropdownModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDropdownModule, declarations: [FabricDropdownComponent,
        DropdownItemComponent], imports: [CommonModule,
        FabricArrowIconModule], exports: [FabricDropdownComponent,
        DropdownItemComponent] });
FabricDropdownModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDropdownModule, imports: [[
            CommonModule,
            FabricArrowIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDropdownModule, decorators: [{
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
        }] });

class FabricDialogService extends FabricModal {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
    }
    getComponent() {
        return FabricDialogComponent;
    }
    open(config) {
        if (this.isComponentCreated()) {
            return;
        }
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
        this.createAndAppend({
            afterCompCreation: () => this.afterComponentCreation(config),
            injector
        });
        this.closeOnEscKey();
    }
    close() {
        if (this.isComponentCreated()) {
            const componentRef = this.getComponentRef();
            componentRef.instance.visible = false;
            componentRef.instance.detectChanges();
            timer(400)
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(() => {
                this.removeComponent();
            });
        }
    }
    closeOnEscKey() {
        this.onCloseOnEsc()
            .subscribe(() => this.close());
    }
    afterComponentCreation(config) {
        if (this.isComponentCreated()) {
            const componentRef = this.getComponentRef();
            componentRef.instance.dialogNestedComponent = config.component;
            if (config?.width) {
                componentRef.instance.width = config.width;
            }
            if (config?.height) {
                componentRef.instance.height = config.height;
            }
            componentRef.instance.setTransformOrigin(event);
        }
    }
}
FabricDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
FabricDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });

class FabricDialogComponent extends FabricThemedComponent {
    constructor(componentFactoryResolver, changeDetectorRef, elRef, platformId, themeModalService, renderer, dialogService) {
        super(elRef, renderer, themeModalService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        this.platformId = platformId;
        this.dialogService = dialogService;
        this.visible = false;
        this.width = '400px';
        this.height = '90vh';
        this.triggerPosition = '';
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.createNestedComponent();
        timer(0)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            this.visible = true;
            this.detectChanges();
        });
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    closeDialog() {
        this.dialogService.close();
    }
    clickOutside(event) {
        if (this.isContainerClicked(event)) {
            this.dialogService.close();
        }
    }
    setTransformOrigin(event) {
        if (isPlatformBrowser(this.platformId) && event) {
            const x = (event.clientX - (window.innerWidth / 2)), y = (event.clientY - (window.innerHeight / 2));
            this.triggerPosition = `${x}px ${y}px`;
        }
    }
    isContainerClicked(event) {
        const dialogContentRef = this.elRef.nativeElement.querySelector('.gui-dialog-content');
        if (dialogContentRef) {
            return !dialogContentRef.contains(event.target);
        }
        return false;
    }
    createNestedComponent() {
        if (this.dialogNestedComponent && this.container) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dialogNestedComponent);
            this.container.createComponent(componentFactory);
            this.detectChanges();
        }
    }
}
FabricDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: PLATFORM_ID }, { token: FabricModalThemeService }, { token: i0.Renderer2 }, { token: forwardRef(() => FabricDialogService) }], target: i0.ɵɵFactoryTarget.Component });
FabricDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricDialogComponent, selector: "gui-fabric-dialog", host: { properties: { "class.gui-fabric-dialog": "true" } }, viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }], usesInheritance: true, ngImport: i0, template: "<div class=\"gui-dialog-blanket\"></div>\n<div (click)=\"clickOutside($event)\"\n\t class=\"gui-dialog-wrapper\">\n\t<div [class.gui-dialog-visible]=\"visible\"\n\t\t [style.transform-origin]=\"triggerPosition\"\n\t\t [style.max-width]=\"width\"\n\t\t [style.max-height]=\"height\"\n\t\t class=\"gui-dialog-content\">\n\t\t<ng-template #container></ng-template>\n\t\t<gui-close-icon (click)=\"closeDialog()\"></gui-close-icon>\n\t</div>\n</div>\n", styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-10{grid-row-gap:16px}.gui-grid-rows-gap-13{grid-row-gap:22px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-10{grid-column-gap:16px}.gui-grid-cols-gap-13{grid-column-gap:22px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.-gui-m-0{margin:0}.-gui-mx-0{margin-left:0;margin-right:0}.-gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.-gui-m-1{margin:-1px}.-gui-mx-1{margin-left:-1px;margin-right:-1px}.-gui-my-1{margin-bottom:-1px;margin-top:-1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.-gui-m-2{margin:-2px}.-gui-mx-2{margin-left:-2px;margin-right:-2px}.-gui-my-2{margin-bottom:-2px;margin-top:-2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.-gui-m-3{margin:-3px}.-gui-mx-3{margin-left:-3px;margin-right:-3px}.-gui-my-3{margin-bottom:-3px;margin-top:-3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.-gui-m-4{margin:-4px}.-gui-mx-4{margin-left:-4px;margin-right:-4px}.-gui-my-4{margin-bottom:-4px;margin-top:-4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.-gui-m-5{margin:-6px}.-gui-mx-5{margin-left:-6px;margin-right:-6px}.-gui-my-5{margin-bottom:-6px;margin-top:-6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.-gui-m-6{margin:-8px}.-gui-mx-6{margin-left:-8px;margin-right:-8px}.-gui-my-6{margin-bottom:-8px;margin-top:-8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.-gui-m-7{margin:-10px}.-gui-mx-7{margin-left:-10px;margin-right:-10px}.-gui-my-7{margin-bottom:-10px;margin-top:-10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.-gui-m-8{margin:-12px}.-gui-mx-8{margin-left:-12px;margin-right:-12px}.-gui-my-8{margin-bottom:-12px;margin-top:-12px}.gui-m-10{margin:16px}.gui-mx-10{margin-left:16px;margin-right:16px}.gui-my-10{margin-bottom:16px;margin-top:16px}.-gui-m-10{margin:-16px}.-gui-mx-10{margin-left:-16px;margin-right:-16px}.-gui-my-10{margin-bottom:-16px;margin-top:-16px}.gui-m-13{margin:22px}.gui-mx-13{margin-left:22px;margin-right:22px}.gui-my-13{margin-bottom:22px;margin-top:22px}.-gui-m-13{margin:-22px}.-gui-mx-13{margin-left:-22px;margin-right:-22px}.-gui-my-13{margin-bottom:-22px;margin-top:-22px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.-gui-m-23{margin:-42px}.-gui-mx-23{margin-left:-42px;margin-right:-42px}.-gui-my-23{margin-bottom:-42px;margin-top:-42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-ml-6{margin-left:8px}.gui-mt-0{margin-top:0}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-10{padding:16px}.gui-px-10{padding-left:16px;padding-right:16px}.gui-py-10{padding-bottom:16px;padding-top:16px}.gui-p-13{padding:22px}.gui-px-13{padding-left:22px;padding-right:22px}.gui-py-13{padding-bottom:22px;padding-top:22px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pb-12{padding-bottom:20px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-12{padding-top:20px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-text-center{text-align:center}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-fabric-dialog *,.gui-fabric-dialog *:after,.gui-fabric-dialog *:before{box-sizing:border-box}.gui-fabric-dialog input{font-size:13px;outline:0}.gui-dialog-blanket{background:rgba(0,0,0,.32);height:100%;left:0;pointer-events:none;position:fixed;top:0;width:100%;z-index:1000}.gui-dialog-wrapper{font-family:Arial;height:100%;width:100%;position:fixed;pointer-events:auto;left:0;top:0;z-index:1000}.gui-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 7px #999;padding:24px 16px;position:fixed;left:50%;top:50%;transform:scale3d(0,0,0) translate(-50%) translateY(-50%);opacity:0;transition:all .4s;overflow:auto;z-index:1000}.gui-dialog-content.gui-dialog-visible{transform:scaleZ(1) translate(-50%) translateY(-50%);opacity:1}\n", ".gui-dark .gui-dialog-wrapper .gui-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before,.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after{background:#bdbdbd}\n"], components: [{ type: FabricCloseIconComponent, selector: "gui-close-icon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-fabric-dialog', host: {
                        '[class.gui-fabric-dialog]': 'true'
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"gui-dialog-blanket\"></div>\n<div (click)=\"clickOutside($event)\"\n\t class=\"gui-dialog-wrapper\">\n\t<div [class.gui-dialog-visible]=\"visible\"\n\t\t [style.transform-origin]=\"triggerPosition\"\n\t\t [style.max-width]=\"width\"\n\t\t [style.max-height]=\"height\"\n\t\t class=\"gui-dialog-content\">\n\t\t<ng-template #container></ng-template>\n\t\t<gui-close-icon (click)=\"closeDialog()\"></gui-close-icon>\n\t</div>\n</div>\n", styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-10{grid-row-gap:16px}.gui-grid-rows-gap-13{grid-row-gap:22px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-10{grid-column-gap:16px}.gui-grid-cols-gap-13{grid-column-gap:22px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.-gui-m-0{margin:0}.-gui-mx-0{margin-left:0;margin-right:0}.-gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.-gui-m-1{margin:-1px}.-gui-mx-1{margin-left:-1px;margin-right:-1px}.-gui-my-1{margin-bottom:-1px;margin-top:-1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.-gui-m-2{margin:-2px}.-gui-mx-2{margin-left:-2px;margin-right:-2px}.-gui-my-2{margin-bottom:-2px;margin-top:-2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.-gui-m-3{margin:-3px}.-gui-mx-3{margin-left:-3px;margin-right:-3px}.-gui-my-3{margin-bottom:-3px;margin-top:-3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.-gui-m-4{margin:-4px}.-gui-mx-4{margin-left:-4px;margin-right:-4px}.-gui-my-4{margin-bottom:-4px;margin-top:-4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.-gui-m-5{margin:-6px}.-gui-mx-5{margin-left:-6px;margin-right:-6px}.-gui-my-5{margin-bottom:-6px;margin-top:-6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.-gui-m-6{margin:-8px}.-gui-mx-6{margin-left:-8px;margin-right:-8px}.-gui-my-6{margin-bottom:-8px;margin-top:-8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.-gui-m-7{margin:-10px}.-gui-mx-7{margin-left:-10px;margin-right:-10px}.-gui-my-7{margin-bottom:-10px;margin-top:-10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.-gui-m-8{margin:-12px}.-gui-mx-8{margin-left:-12px;margin-right:-12px}.-gui-my-8{margin-bottom:-12px;margin-top:-12px}.gui-m-10{margin:16px}.gui-mx-10{margin-left:16px;margin-right:16px}.gui-my-10{margin-bottom:16px;margin-top:16px}.-gui-m-10{margin:-16px}.-gui-mx-10{margin-left:-16px;margin-right:-16px}.-gui-my-10{margin-bottom:-16px;margin-top:-16px}.gui-m-13{margin:22px}.gui-mx-13{margin-left:22px;margin-right:22px}.gui-my-13{margin-bottom:22px;margin-top:22px}.-gui-m-13{margin:-22px}.-gui-mx-13{margin-left:-22px;margin-right:-22px}.-gui-my-13{margin-bottom:-22px;margin-top:-22px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.-gui-m-23{margin:-42px}.-gui-mx-23{margin-left:-42px;margin-right:-42px}.-gui-my-23{margin-bottom:-42px;margin-top:-42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-ml-6{margin-left:8px}.gui-mt-0{margin-top:0}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-10{padding:16px}.gui-px-10{padding-left:16px;padding-right:16px}.gui-py-10{padding-bottom:16px;padding-top:16px}.gui-p-13{padding:22px}.gui-px-13{padding-left:22px;padding-right:22px}.gui-py-13{padding-bottom:22px;padding-top:22px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pb-12{padding-bottom:20px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-12{padding-top:20px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-text-center{text-align:center}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-fabric-dialog *,.gui-fabric-dialog *:after,.gui-fabric-dialog *:before{box-sizing:border-box}.gui-fabric-dialog input{font-size:13px;outline:0}.gui-dialog-blanket{background:rgba(0,0,0,.32);height:100%;left:0;pointer-events:none;position:fixed;top:0;width:100%;z-index:1000}.gui-dialog-wrapper{font-family:Arial;height:100%;width:100%;position:fixed;pointer-events:auto;left:0;top:0;z-index:1000}.gui-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 7px #999;padding:24px 16px;position:fixed;left:50%;top:50%;transform:scale3d(0,0,0) translate(-50%) translateY(-50%);opacity:0;transition:all .4s;overflow:auto;z-index:1000}.gui-dialog-content.gui-dialog-visible{transform:scaleZ(1) translate(-50%) translateY(-50%);opacity:1}\n", ".gui-dark .gui-dialog-wrapper .gui-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before,.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after{background:#bdbdbd}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: FabricModalThemeService }, { type: i0.Renderer2 }, { type: FabricDialogService, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => FabricDialogService)]
                }] }]; }, propDecorators: { container: [{
                type: ViewChild,
                args: ['container', { read: ViewContainerRef, static: false }]
            }] } });

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
FabricDialogThemeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricDialogThemeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogThemeService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogThemeService, decorators: [{
            type: Injectable
        }] });

class FabricDialogModule {
}
FabricDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogModule, declarations: [FabricDialogComponent], imports: [CommonModule,
        FabricCloseIconModule] });
FabricDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogModule, providers: [
        FabricDialogService,
        FabricDialogThemeService
    ], imports: [[
            CommonModule,
            FabricCloseIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogModule, decorators: [{
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
        }] });

class FabricProgressBarComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.progress = 0;
        this.textTop = '';
        this.textAlign = '';
        this.primary = false;
        this.secondary = false;
    }
    ngOnChanges(changes) {
        if (changes['primary']) {
            if (this.primary) {
                this.addClass('gui-primary');
            }
            else {
                this.removeClass('gui-primary');
            }
        }
        if (changes['secondary']) {
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
FabricProgressBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricProgressBarComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FabricProgressBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricProgressBarComponent, selector: "gui-progress-bar", inputs: { progress: "progress", color: "color", height: "height", width: "width", textTop: "textTop", textAlign: "textAlign", primary: "primary", secondary: "secondary" }, host: { properties: { "class.gui-progress": "true" } }, usesOnChanges: true, ngImport: i0, template: "<div\n\t[style.height.px]=\"height\"\n\t[style.text-align]=\"textAlign\"\n\t[style.width.px]=\"width\"\n\tclass=\"gui-progress-bar\">\n\t<div\n\t\t[style.background]=\"color\"\n\t\t[style.width.%]=\"progress\"\n\t\tclass=\"gui-progress\">\n\t\t<span\n\t\t\t[style.top]=\"textTop\"\n\t\t\tclass=\"gui-progress-text\">\n\t\t\t<ng-content></ng-content>\n\t\t</span>\n\t</div>\n</div>\n", styles: [".gui-progress-bar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-color:#d6d6d6;border-style:solid;border-width:1px;display:block;font-family:Arial;height:18px;margin-bottom:10px;text-align:center}.gui-progress-bar .gui-progress{background:#999;border-bottom:inherit;height:inherit;width:0}.gui-primary .gui-progress-bar .gui-progress.gui-progress{background:#2185d0}.gui-secondary .gui-progress-bar .gui-progress.gui-progress{background:#3cb371}.gui-progress-bar .gui-progress-text{position:relative}\n", ".gui-material .gui-progress-bar{border-color:#5262c5;color:#fff;font-family:Roboto,Helvetica Neue,sans-serif}.gui-material .gui-progress{background:#3949ab}.gui-material .gui-progress.gui-primary .gui-progress{background:#6200ee}.gui-material .gui-progress.gui-primary .gui-progress-bar{border-color:#6200ee}.gui-material .gui-progress.gui-secondary .gui-progress{background:#0097a7}.gui-material .gui-progress.gui-secondary .gui-progress-bar{border-color:#0097a7}\n", ".gui-dark .gui-progress-bar{border-color:#616161;color:#bdbdbd}.gui-dark .gui-progress{background:#424242}.gui-dark .gui-progress.gui-primary .gui-progress{background:#ce93d8}.gui-dark .gui-progress.gui-primary .gui-progress-bar{border-color:#ce93d8;color:#212121}.gui-dark .gui-progress.gui-secondary .gui-progress{background:#80cbc4}.gui-dark .gui-progress.gui-secondary .gui-progress-bar{border-color:#80cbc4;color:#212121}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricProgressBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-progress-bar', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-progress]': 'true'
                    }, template: "<div\n\t[style.height.px]=\"height\"\n\t[style.text-align]=\"textAlign\"\n\t[style.width.px]=\"width\"\n\tclass=\"gui-progress-bar\">\n\t<div\n\t\t[style.background]=\"color\"\n\t\t[style.width.%]=\"progress\"\n\t\tclass=\"gui-progress\">\n\t\t<span\n\t\t\t[style.top]=\"textTop\"\n\t\t\tclass=\"gui-progress-text\">\n\t\t\t<ng-content></ng-content>\n\t\t</span>\n\t</div>\n</div>\n", styles: [".gui-progress-bar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-color:#d6d6d6;border-style:solid;border-width:1px;display:block;font-family:Arial;height:18px;margin-bottom:10px;text-align:center}.gui-progress-bar .gui-progress{background:#999;border-bottom:inherit;height:inherit;width:0}.gui-primary .gui-progress-bar .gui-progress.gui-progress{background:#2185d0}.gui-secondary .gui-progress-bar .gui-progress.gui-progress{background:#3cb371}.gui-progress-bar .gui-progress-text{position:relative}\n", ".gui-material .gui-progress-bar{border-color:#5262c5;color:#fff;font-family:Roboto,Helvetica Neue,sans-serif}.gui-material .gui-progress{background:#3949ab}.gui-material .gui-progress.gui-primary .gui-progress{background:#6200ee}.gui-material .gui-progress.gui-primary .gui-progress-bar{border-color:#6200ee}.gui-material .gui-progress.gui-secondary .gui-progress{background:#0097a7}.gui-material .gui-progress.gui-secondary .gui-progress-bar{border-color:#0097a7}\n", ".gui-dark .gui-progress-bar{border-color:#616161;color:#bdbdbd}.gui-dark .gui-progress{background:#424242}.gui-dark .gui-progress.gui-primary .gui-progress{background:#ce93d8}.gui-dark .gui-progress.gui-primary .gui-progress-bar{border-color:#ce93d8;color:#212121}.gui-dark .gui-progress.gui-secondary .gui-progress{background:#80cbc4}.gui-dark .gui-progress.gui-secondary .gui-progress-bar{border-color:#80cbc4;color:#212121}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { progress: [{
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
            }] } });

class FabricProgressBarModule {
}
FabricProgressBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricProgressBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricProgressBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricProgressBarModule, declarations: [FabricProgressBarComponent], imports: [CommonModule], exports: [FabricProgressBarComponent] });
FabricProgressBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricProgressBarModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricProgressBarModule, decorators: [{
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
        }] });

class AbstractSpinner {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.width = 5;
        this.diameter = 90;
        this.primary = false;
        this.secondary = false;
        this.r = 0;
        this.circumference = 0;
        this.croppedCircle = 0;
        this.circleSize = 0;
    }
    ngOnChanges(changes) {
        this.calculateCircle();
        if (changes['primary']) {
            if (this.primary) {
                this.addClass('gui-primary');
            }
            else {
                this.removeClass('gui-primary');
            }
        }
        if (changes['secondary']) {
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
AbstractSpinner.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AbstractSpinner, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
AbstractSpinner.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: AbstractSpinner, inputs: { width: "width", diameter: "diameter", primary: "primary", secondary: "secondary" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AbstractSpinner, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { width: [{
                type: Input
            }], diameter: [{
                type: Input
            }], primary: [{
                type: Input
            }], secondary: [{
                type: Input
            }] } });

var SpinnerMode;
(function (SpinnerMode) {
    SpinnerMode[SpinnerMode["NoSpin"] = 0] = "NoSpin";
    SpinnerMode[SpinnerMode["Spin"] = 1] = "Spin";
})(SpinnerMode || (SpinnerMode = {}));

class FabricProgressSpinnerComponent extends AbstractSpinner {
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.value = 0;
        this.mode = SpinnerMode.NoSpin;
        this.animationsDisabled = true;
        this.secondCircleDisabled = true;
        this.valuePercentage = 0;
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
FabricProgressSpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricProgressSpinnerComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FabricProgressSpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricProgressSpinnerComponent, selector: "gui-progress-spinner", inputs: { value: "value", mode: "mode", color: "color" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div\n\t[style.height.px]=\"circleSize\"\n\t[style.width.px]=\"circleSize\"\n\tclass=\"gui-progress-spinner\">\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"circumference\"\n\t\t\t[style.stroke-dashoffset]=\"valuePercentage\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n", styles: [".gui-progress-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-progress-spinner circle{fill:transparent;stroke:#999}.gui-progress-spinner svg{position:absolute}.gui-progress-spinner .circle-inner{animation:gui-spin-reverse 2s infinite linear forwards reverse}.gui-progress-spinner .circle-outer{-webkit-animation:gui-spin 2s infinite linear forwards;animation:gui-spin 2s infinite linear forwards}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner .circle-outer,.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner.gui-progress-spinner{-webkit-animation:none;animation:none}.gui-second-circle-disabled .gui-progress-spinner.gui-progress-spinner .circle-inner{opacity:0}.gui-primary .gui-progress-spinner.gui-progress-spinner circle{stroke:#2185d0}.gui-secondary .gui-progress-spinner.gui-progress-spinner circle{stroke:#3cb371}\n", ".gui-material .gui-progress-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-progress-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-progress-spinner circle{stroke:#0097a7}\n", ".gui-dark .gui-progress-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-progress-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-progress-spinner circle{stroke:#80cbc4}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricProgressSpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-progress-spinner', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div\n\t[style.height.px]=\"circleSize\"\n\t[style.width.px]=\"circleSize\"\n\tclass=\"gui-progress-spinner\">\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"circumference\"\n\t\t\t[style.stroke-dashoffset]=\"valuePercentage\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n", styles: [".gui-progress-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-progress-spinner circle{fill:transparent;stroke:#999}.gui-progress-spinner svg{position:absolute}.gui-progress-spinner .circle-inner{animation:gui-spin-reverse 2s infinite linear forwards reverse}.gui-progress-spinner .circle-outer{-webkit-animation:gui-spin 2s infinite linear forwards;animation:gui-spin 2s infinite linear forwards}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner .circle-outer,.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner.gui-progress-spinner{-webkit-animation:none;animation:none}.gui-second-circle-disabled .gui-progress-spinner.gui-progress-spinner .circle-inner{opacity:0}.gui-primary .gui-progress-spinner.gui-progress-spinner circle{stroke:#2185d0}.gui-secondary .gui-progress-spinner.gui-progress-spinner circle{stroke:#3cb371}\n", ".gui-material .gui-progress-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-progress-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-progress-spinner circle{stroke:#0097a7}\n", ".gui-dark .gui-progress-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-progress-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-progress-spinner circle{stroke:#80cbc4}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { value: [{
                type: Input
            }], mode: [{
                type: Input
            }], color: [{
                type: Input
            }] } });

class FabricProgressSpinnerModule {
}
FabricProgressSpinnerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricProgressSpinnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricProgressSpinnerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricProgressSpinnerModule, declarations: [FabricProgressSpinnerComponent], imports: [CommonModule], exports: [FabricProgressSpinnerComponent] });
FabricProgressSpinnerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricProgressSpinnerModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricProgressSpinnerModule, decorators: [{
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
        }] });

class FabricRadioButtonComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.name = '';
        this.checked = false;
        this.disabled = false;
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
FabricRadioButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRadioButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FabricRadioButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricRadioButtonComponent, selector: "gui-radio-button", inputs: { name: "name", checked: "checked", disabled: "disabled" }, outputs: { changed: "changed" }, host: { properties: { "class.gui-radio-button": "true" } }, usesOnChanges: true, ngImport: i0, template: "<label>\n\t<input\n\t\t(click)=\"check()\"\n\t\t[checked]=\"checked\"\n\t\t[disabled]=\"disabled\"\n\t\t[attr.name]=\"name\"\n\t\ttype=\"radio\">\n\t<span class=\"gui-radio-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n", styles: [".gui-radio-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;font:14px Arial;line-height:18px;padding-left:32px;position:relative}.gui-radio-button label{cursor:pointer}.gui-radio-button label:hover .gui-radio-checkmark{border-color:#999}.gui-radio-button input{height:0;opacity:0;position:absolute;width:0}.gui-radio-button .gui-radio-checkmark{border-color:#d6d6d6;border-radius:50%;border-style:solid;border-width:1px;box-sizing:content-box;height:16px;left:0;position:absolute;width:16px}.gui-radio-button input:checked+.gui-radio-checkmark{border-color:#999}.gui-radio-button input:focus+.gui-radio-checkmark{border-color:#6fb4e8}.gui-radio-button.gui-disabled.gui-radio-button{color:#ccc;pointer-events:none}.gui-radio-button .gui-radio-checkmark:after{content:\"\";display:none;position:absolute}.gui-radio-button input:checked+.gui-radio-checkmark:after{box-sizing:content-box;display:block}.gui-radio-button .gui-radio-checkmark:after{background:#333;border-radius:50%;height:16px;-ms-transform:scale(.5);transform:scale(.5);width:16px}\n", ".gui-material .gui-radio-button{font-family:Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-radio-button{color:#bdbdbd}.gui-dark .gui-radio-button .gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:checked+.gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:focus+.gui-radio-checkmark{border-color:#ce93d8}.gui-dark .gui-radio-button .gui-radio-checkmark:after{background:#878787}.gui-dark .gui-radio-button.gui-disabled.gui-radio-button{opacity:.36}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-radio-button', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-radio-button]': 'true'
                    }, template: "<label>\n\t<input\n\t\t(click)=\"check()\"\n\t\t[checked]=\"checked\"\n\t\t[disabled]=\"disabled\"\n\t\t[attr.name]=\"name\"\n\t\ttype=\"radio\">\n\t<span class=\"gui-radio-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n", styles: [".gui-radio-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;font:14px Arial;line-height:18px;padding-left:32px;position:relative}.gui-radio-button label{cursor:pointer}.gui-radio-button label:hover .gui-radio-checkmark{border-color:#999}.gui-radio-button input{height:0;opacity:0;position:absolute;width:0}.gui-radio-button .gui-radio-checkmark{border-color:#d6d6d6;border-radius:50%;border-style:solid;border-width:1px;box-sizing:content-box;height:16px;left:0;position:absolute;width:16px}.gui-radio-button input:checked+.gui-radio-checkmark{border-color:#999}.gui-radio-button input:focus+.gui-radio-checkmark{border-color:#6fb4e8}.gui-radio-button.gui-disabled.gui-radio-button{color:#ccc;pointer-events:none}.gui-radio-button .gui-radio-checkmark:after{content:\"\";display:none;position:absolute}.gui-radio-button input:checked+.gui-radio-checkmark:after{box-sizing:content-box;display:block}.gui-radio-button .gui-radio-checkmark:after{background:#333;border-radius:50%;height:16px;-ms-transform:scale(.5);transform:scale(.5);width:16px}\n", ".gui-material .gui-radio-button{font-family:Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-radio-button{color:#bdbdbd}.gui-dark .gui-radio-button .gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:checked+.gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:focus+.gui-radio-checkmark{border-color:#ce93d8}.gui-dark .gui-radio-button .gui-radio-checkmark:after{background:#878787}.gui-dark .gui-radio-button.gui-disabled.gui-radio-button{opacity:.36}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { name: [{
                type: Input
            }], checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });

class FabricRadioButtonModule {
}
FabricRadioButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRadioButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricRadioButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRadioButtonModule, declarations: [FabricRadioButtonComponent], imports: [CommonModule], exports: [FabricRadioButtonComponent] });
FabricRadioButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRadioButtonModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRadioButtonModule, decorators: [{
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
        }] });

class FabricRadioGroupComponent {
}
FabricRadioGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRadioGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricRadioGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricRadioGroupComponent, selector: "gui-radio-group", host: { properties: { "class.gui-radio-group": "true" } }, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [".gui-radio-group .gui-radio-button{display:block;margin-bottom:10px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRadioGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-radio-group', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-radio-group]': 'true'
                    }, template: "<ng-content></ng-content>\n", styles: [".gui-radio-group .gui-radio-button{display:block;margin-bottom:10px}\n"] }]
        }] });

class FabricRadioGroupModule {
}
FabricRadioGroupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRadioGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricRadioGroupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRadioGroupModule, declarations: [FabricRadioGroupComponent], imports: [CommonModule], exports: [FabricRadioGroupComponent] });
FabricRadioGroupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRadioGroupModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRadioGroupModule, decorators: [{
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
        }] });

var FabricNotificationPosition;
(function (FabricNotificationPosition) {
    FabricNotificationPosition[FabricNotificationPosition["TOP_RIGHT"] = 0] = "TOP_RIGHT";
    FabricNotificationPosition[FabricNotificationPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
    FabricNotificationPosition[FabricNotificationPosition["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
    FabricNotificationPosition[FabricNotificationPosition["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
})(FabricNotificationPosition || (FabricNotificationPosition = {}));

class FabricNotificationComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.onNotificationClose = new EventEmitter();
        this.unsub$ = new Subject();
    }
    ngOnInit() {
        if (this.notification?.timer.enabled) {
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
        if (this.notificationRef) {
            const notificationEl = this.notificationRef.nativeElement;
            this.renderer.addClass(notificationEl, 'gui-notification-active');
        }
    }
    isRightSide() {
        return this.notification?.position === FabricNotificationPosition.TOP_RIGHT
            || this.notification?.position === FabricNotificationPosition.BOTTOM_RIGHT;
    }
}
FabricNotificationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FabricNotificationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricNotificationComponent, selector: "gui-notification", inputs: { notification: "notification" }, outputs: { onNotificationClose: "onNotificationClose" }, viewQueries: [{ propertyName: "notificationRef", first: true, predicate: ["guiNotification"], descendants: true, read: ElementRef }], ngImport: i0, template: `
		<div #guiNotification
			 [class.gui-notification-right-side]="isRightSide()"
			 [class.gui-notification-left-side]="!isRightSide()"
			 class="gui-notification">
			<gui-close-icon (click)="closeNotification()"></gui-close-icon>
			{{notification.description}}
		</div>
	`, isInline: true, components: [{ type: FabricCloseIconComponent, selector: "gui-close-icon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationComponent, decorators: [{
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
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { notificationRef: [{
                type: ViewChild,
                args: ['guiNotification', { read: ElementRef, static: false }]
            }], notification: [{
                type: Input
            }], onNotificationClose: [{
                type: Output
            }] } });

class FabricNotification {
    constructor(description, index, timer, position) {
        this.description = description;
        this.index = index;
        this.timer = timer;
        this.position = position;
    }
}

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
        this.createFabricNotification(notification, position, config);
        if (!this.isComponentCreated()) {
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
            this.createAndAppend({ injector });
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
        if (this.isComponentCreated()) {
            this.removeComponent();
            this.notificationIndex = 0;
        }
    }
    createFabricNotification(description, position, config) {
        let duration = FabricNotificationService.DEFAULT_DURATION, enabled = true;
        if (config && config.timer) {
            if (config.timer.duration) {
                duration = config.timer.duration;
                if (config.timer.extendTimer) {
                    duration = config.timer.duration * (this.notificationIndex + 1);
                }
            }
            if (config.timer.enabled !== undefined) {
                enabled = config.timer.enabled;
            }
        }
        this.fabricNotification = new FabricNotification(description, this.notificationIndex, { duration, enabled }, position);
        this.notificationIndex += 1;
    }
    pushNotification(position) {
        if (!this.fabricNotification || !this.isComponentCreated()) {
            return;
        }
        const componentRef = this.getComponentRef();
        switch (position) {
            case FabricNotificationPosition.TOP_RIGHT:
                componentRef.instance.notificationsTopRight =
                    componentRef.instance.notificationsTopRight.concat(this.fabricNotification);
                break;
            case FabricNotificationPosition.TOP_LEFT:
                componentRef.instance.notificationsTopLeft =
                    componentRef.instance.notificationsTopLeft.concat(this.fabricNotification);
                break;
            case FabricNotificationPosition.BOTTOM_RIGHT:
                componentRef.instance.notificationsBottomRight =
                    componentRef.instance.notificationsBottomRight.concat(this.fabricNotification);
                break;
            case FabricNotificationPosition.BOTTOM_LEFT:
                componentRef.instance.notificationsBottomLeft =
                    componentRef.instance.notificationsBottomLeft.concat(this.fabricNotification);
                break;
            default:
                break;
        }
        componentRef.instance.detectChanges();
    }
}
FabricNotificationService.DEFAULT_DURATION = 4000;
FabricNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
FabricNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });

class FabricNotificationsContainerComponent {
    constructor() {
        this.notifications = [];
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
FabricNotificationsContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationsContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricNotificationsContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricNotificationsContainerComponent, selector: "gui-notifications-container", inputs: { notifications: "notifications", position: "position" }, outputs: { onNotificationClose: "onNotificationClose" }, host: { properties: { "class.gui-notifications-top-right": "isPosition(FabricNotificationPosition.TOP_RIGHT)", "class.gui-notifications-top-left": "isPosition(FabricNotificationPosition.TOP_LEFT)", "class.gui-notifications-bottom-right": "isPosition(FabricNotificationPosition.BOTTOM_RIGHT)", "class.gui-notifications-bottom-left": "isPosition(FabricNotificationPosition.BOTTOM_LEFT)" } }, ngImport: i0, template: `
		<gui-notification *ngFor="let notification of notifications"
						  [notification]="notification"
						  (onNotificationClose)="emitClosedNotification($event)">
		</gui-notification>
	`, isInline: true, components: [{ type: FabricNotificationComponent, selector: "gui-notification", inputs: ["notification"], outputs: ["onNotificationClose"] }], directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationsContainerComponent, decorators: [{
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
        }], propDecorators: { notifications: [{
                type: Input
            }], position: [{
                type: Input
            }], onNotificationClose: [{
                type: Output
            }] } });

class FabricNotificationsOverlayComponent extends FabricThemedComponent {
    constructor(changeDetectorRef, componentFactoryResolver, elRef, renderer, themeService, theme, notificationsService) {
        super(elRef, renderer, themeService);
        this.changeDetectorRef = changeDetectorRef;
        this.componentFactoryResolver = componentFactoryResolver;
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
FabricNotificationsOverlayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationsOverlayComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ComponentFactoryResolver }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: FabricModalThemeService }, { token: themeToken }, { token: forwardRef(() => FabricNotificationService) }], target: i0.ɵɵFactoryTarget.Component });
FabricNotificationsOverlayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricNotificationsOverlayComponent, selector: "ng-component", host: { properties: { "class.gui-notifications-overlay": "true" } }, usesInheritance: true, ngImport: i0, template: "<gui-notifications-container *ngIf=\"isContainerNotEmpty(notificationsTopRight)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsTopRight\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.TOP_RIGHT\"\n\t\t\t\t\t\t\t (onNotificationClose)=\"removeNotification($event)\"></gui-notifications-container>\n\n<gui-notifications-container *ngIf=\"isContainerNotEmpty(notificationsTopLeft)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsTopLeft\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.TOP_LEFT\"\n\t\t\t\t\t\t\t (onNotificationClose)=\"removeNotification($event)\"></gui-notifications-container>\n\n<gui-notifications-container *ngIf=\"isContainerNotEmpty(notificationsBottomRight)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsBottomRight\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.BOTTOM_RIGHT\"\n\t\t\t\t\t\t\t (onNotificationClose)=\"removeNotification($event)\"></gui-notifications-container>\n\n<gui-notifications-container *ngIf=\"isContainerNotEmpty(notificationsBottomLeft)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsBottomLeft\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.BOTTOM_LEFT\"\n\t\t\t\t\t\t\t (onNotificationClose)=\"removeNotification($event)\"></gui-notifications-container>\n", styles: [".gui-notifications-overlay{-ms-flex-align:center;align-items:center;font-family:Arial;-ms-flex-pack:center;justify-content:center;max-width:400px;position:fixed;z-index:1000}.gui-notifications-overlay gui-notifications-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:fixed}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-left{left:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-right{right:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-left{bottom:0;left:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-right{bottom:0;right:0}.gui-notifications-overlay .gui-notification{background:#fff;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d;display:block;margin:16px;padding:32px;position:relative}.gui-notifications-overlay .gui-notification.gui-notification-right-side{-webkit-animation:loadNotificationRightSide .1s forwards;animation:loadNotificationRightSide .1s forwards}.gui-notifications-overlay .gui-notification.gui-notification-left-side{-webkit-animation:loadNotificationLeftSide .1s forwards;animation:loadNotificationLeftSide .1s forwards}@-webkit-keyframes loadNotificationRightSide{0%{transform:translate(50%)}to{transform:translate(0)}}@keyframes loadNotificationRightSide{0%{transform:translate(50%)}to{transform:translate(0)}}@-webkit-keyframes loadNotificationLeftSide{0%{transform:translate(-50%)}to{transform:translate(0)}}@keyframes loadNotificationLeftSide{0%{transform:translate(-50%)}to{transform:translate(0)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-right-side{-webkit-animation:closeNotificationRightSide .2s forwards;animation:closeNotificationRightSide .2s forwards}@-webkit-keyframes closeNotificationRightSide{0%{transform:translate(0)}to{transform:translate(100%)}}@keyframes closeNotificationRightSide{0%{transform:translate(0)}to{transform:translate(100%)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-left-side{-webkit-animation:closeNotificationLeftSide .2s forwards;animation:closeNotificationLeftSide .2s forwards}@-webkit-keyframes closeNotificationLeftSide{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes closeNotificationLeftSide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n", ".gui-dark .gui-notification{background:#424242}\n", ".gui-material .gui-notification{background:#3949ab;color:#fff;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500}\n"], components: [{ type: FabricNotificationsContainerComponent, selector: "gui-notifications-container", inputs: ["notifications", "position"], outputs: ["onNotificationClose"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationsOverlayComponent, decorators: [{
            type: Component,
            args: [{ host: {
                        '[class.gui-notifications-overlay]': 'true'
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-notifications-container *ngIf=\"isContainerNotEmpty(notificationsTopRight)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsTopRight\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.TOP_RIGHT\"\n\t\t\t\t\t\t\t (onNotificationClose)=\"removeNotification($event)\"></gui-notifications-container>\n\n<gui-notifications-container *ngIf=\"isContainerNotEmpty(notificationsTopLeft)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsTopLeft\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.TOP_LEFT\"\n\t\t\t\t\t\t\t (onNotificationClose)=\"removeNotification($event)\"></gui-notifications-container>\n\n<gui-notifications-container *ngIf=\"isContainerNotEmpty(notificationsBottomRight)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsBottomRight\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.BOTTOM_RIGHT\"\n\t\t\t\t\t\t\t (onNotificationClose)=\"removeNotification($event)\"></gui-notifications-container>\n\n<gui-notifications-container *ngIf=\"isContainerNotEmpty(notificationsBottomLeft)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsBottomLeft\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.BOTTOM_LEFT\"\n\t\t\t\t\t\t\t (onNotificationClose)=\"removeNotification($event)\"></gui-notifications-container>\n", styles: [".gui-notifications-overlay{-ms-flex-align:center;align-items:center;font-family:Arial;-ms-flex-pack:center;justify-content:center;max-width:400px;position:fixed;z-index:1000}.gui-notifications-overlay gui-notifications-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:fixed}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-left{left:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-right{right:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-left{bottom:0;left:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-right{bottom:0;right:0}.gui-notifications-overlay .gui-notification{background:#fff;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d;display:block;margin:16px;padding:32px;position:relative}.gui-notifications-overlay .gui-notification.gui-notification-right-side{-webkit-animation:loadNotificationRightSide .1s forwards;animation:loadNotificationRightSide .1s forwards}.gui-notifications-overlay .gui-notification.gui-notification-left-side{-webkit-animation:loadNotificationLeftSide .1s forwards;animation:loadNotificationLeftSide .1s forwards}@-webkit-keyframes loadNotificationRightSide{0%{transform:translate(50%)}to{transform:translate(0)}}@keyframes loadNotificationRightSide{0%{transform:translate(50%)}to{transform:translate(0)}}@-webkit-keyframes loadNotificationLeftSide{0%{transform:translate(-50%)}to{transform:translate(0)}}@keyframes loadNotificationLeftSide{0%{transform:translate(-50%)}to{transform:translate(0)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-right-side{-webkit-animation:closeNotificationRightSide .2s forwards;animation:closeNotificationRightSide .2s forwards}@-webkit-keyframes closeNotificationRightSide{0%{transform:translate(0)}to{transform:translate(100%)}}@keyframes closeNotificationRightSide{0%{transform:translate(0)}to{transform:translate(100%)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-left-side{-webkit-animation:closeNotificationLeftSide .2s forwards;animation:closeNotificationLeftSide .2s forwards}@-webkit-keyframes closeNotificationLeftSide{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes closeNotificationLeftSide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n", ".gui-dark .gui-notification{background:#424242}\n", ".gui-material .gui-notification{background:#3949ab;color:#fff;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: FabricModalThemeService }, { type: Theme, decorators: [{
                    type: Inject,
                    args: [themeToken]
                }] }, { type: FabricNotificationService, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => FabricNotificationService)]
                }] }]; } });

class FabricNotificationModule {
}
FabricNotificationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricNotificationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationModule, declarations: [FabricNotificationsOverlayComponent,
        FabricNotificationsContainerComponent,
        FabricNotificationComponent], imports: [CommonModule,
        FabricCloseIconModule] });
FabricNotificationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationModule, providers: [
        FabricNotificationService
    ], imports: [[
            CommonModule,
            FabricCloseIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationModule, decorators: [{
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
        }] });

class FabricMessageService extends FabricModal {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
    }
    getComponent() {
        return FabricMessageComponent;
    }
    open(text) {
        this.createAndAppend({
            afterCompCreation: () => this.afterCompCreation(text)
        });
    }
    close() {
        this.removeComponent();
    }
    afterCompCreation(text) {
        if (this.isComponentCreated()) {
            const componentRef = this.getComponentRef();
            componentRef.instance.text = text;
            componentRef.instance.detectChanges();
        }
    }
}
FabricMessageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricMessageService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
FabricMessageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricMessageService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricMessageService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });

class FabricMessageComponent {
    constructor(messageService, changeDetectorRef) {
        this.messageService = messageService;
        this.changeDetectorRef = changeDetectorRef;
        this.text = '';
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    close() {
        this.messageService.close();
    }
}
FabricMessageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricMessageComponent, deps: [{ token: FabricMessageService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
FabricMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricMessageComponent, selector: "gui-message", ngImport: i0, template: `
		<div class="gui-message">
			{{text}}
			<button (click)="close()">X</button>
		</div>
	`, isInline: true, styles: [".gui-message{left:50%;position:fixed;top:50%}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-message', template: `
		<div class="gui-message">
			{{text}}
			<button (click)="close()">X</button>
		</div>
	`, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".gui-message{left:50%;position:fixed;top:50%}\n"] }]
        }], ctorParameters: function () { return [{ type: FabricMessageService }, { type: i0.ChangeDetectorRef }]; } });

class FabricMessageModule {
}
FabricMessageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricMessageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricMessageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricMessageModule, declarations: [FabricMessageComponent], imports: [CommonModule] });
FabricMessageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricMessageModule, providers: [
        FabricMessageService
    ], imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricMessageModule, decorators: [{
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
        }] });

class FabricSvgTemplate {
    constructor() {
        this.svg = '';
    }
    // todo sanitize
    ngAfterViewInit() {
        if (this.svgRef) {
            this.svgRef.nativeElement.innerHTML = this.svg;
        }
    }
}
FabricSvgTemplate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSvgTemplate, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricSvgTemplate.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricSvgTemplate, selector: "gui-svg-template", inputs: { svg: "svg" }, viewQueries: [{ propertyName: "svgRef", first: true, predicate: ["svgEl"], descendants: true, read: ElementRef }], ngImport: i0, template: `
		<div #svgEl></div>
	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSvgTemplate, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-svg-template',
                    template: `
		<div #svgEl></div>
	`,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], propDecorators: { svgRef: [{
                type: ViewChild,
                args: ['svgEl', { read: ElementRef, static: false }]
            }], svg: [{
                type: Input
            }] } });

class FabricTabComponent extends FabricReactive {
    constructor(renderer, changeDetectorRef, platformId) {
        super();
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.platformId = platformId;
        this.menu = [];
        this.active = '';
        this.scrollActive = false;
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
        if (this.tabRef) {
            const listWidth = this.tabRef.nativeElement.querySelector('.gui-tab-menu-list').offsetWidth, menuOverflow = this.menuListWidth - listWidth;
            if (scrollRightClicked && menuOverflow > this.listPosition) {
                this.listPosition += this.scrollAmount;
            }
            else if (!scrollRightClicked && this.listPosition > 0) {
                this.listPosition -= this.scrollAmount;
            }
            this.tabRef.nativeElement.querySelector('.' + 'gui-tab-menu-list').scrollLeft = this.listPosition;
        }
    }
    setActive(tab) {
        if (this.tabRef && this.tabItemRef) {
            if (typeof tab === 'object') {
                tab = tab.name;
            }
            const navMenuTabEl = this.tabRef.nativeElement.querySelector('[data-tab="' + tab + '"]'), navTabItemEl = this.tabItemRef.nativeElement.querySelector('[data-tab="' + tab + '"]');
            this.addClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
            this.addClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
        }
    }
    removeActive() {
        if (this.tabRef && this.tabItemRef) {
            const navMenuTabEl = this.tabRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME), navTabItemEl = this.tabItemRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME);
            this.removeClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
            this.removeClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
        }
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
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(() => this.showMenuArrows());
        }
    }
    calculateMenuWidth() {
        if (this.tabMenuList) {
            this.menuListWidth = 0;
            this.tabMenuList
                .forEach((listItem) => {
                this.menuListWidth += listItem.nativeElement.offsetWidth;
            });
        }
    }
    showMenuArrows() {
        if (this.tabRef) {
            const menuWidth = this.tabRef.nativeElement.querySelector('.gui-tab-menu').offsetWidth;
            this.scrollActive = menuWidth < this.menuListWidth;
            this.changeDetectorRef.detectChanges();
        }
    }
}
FabricTabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTabComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Component });
FabricTabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricTabComponent, selector: "gui-tab", inputs: { menu: "menu", active: "active", scrollActive: "scrollActive" }, host: { properties: { "class.gui-tab": "true" } }, viewQueries: [{ propertyName: "tabRef", first: true, predicate: ["tab"], descendants: true, read: ElementRef }, { propertyName: "tabItemRef", first: true, predicate: ["tabItem"], descendants: true, read: ElementRef }, { propertyName: "tabMenuList", predicate: ["tabMenuList"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<div #tab>\n\n\t<div class=\"gui-tab-menu\">\n\n\t\t<div *ngIf=\"scrollActive\"\n\t\t\t (click)=\"scrollTabList(false)\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon [direction]=\"Direction.LEFT\"></gui-arrow-icon>\n\t\t</div>\n\n\t\t<div class=\"gui-tab-menu-list\">\n\t\t\t<div #tabMenuList\n\t\t\t\t (click)=\"toggleTab(tab)\"\n\t\t\t\t *ngFor=\"let tab of menu\"\n\t\t\t\t [attr.data-tab]=\"getTabName(tab)\"\n\t\t\t\t class=\"gui-tab-menu-item\">\n\t\t\t\t<span *ngIf=\"!isSvg(tab)\">{{tab}}</span>\n\t\t\t\t<ng-container *ngIf=\"isSvg(tab)\">\n\t\t\t\t\t<gui-svg-template [svg]=\"tab.svg\"></gui-svg-template>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"scrollActive\"\n\t\t\t (click)=\"scrollTabList(true)\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon></gui-arrow-icon>\n\t\t</div>\n\n\t</div>\n\n\t<div #tabItem\n\t\t class=\"gui-tab-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n", styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fff;border-color:#d6d6d6;border-radius:0 0 4px 4px;border-style:solid;border-width:1px;padding:12px}.gui-tab .gui-tab-menu{display:-ms-flexbox;display:flex;margin-bottom:-1px}.gui-tab .gui-tab-menu .gui-tab-menu-list{border-radius:4px 4px 0 0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden}.gui-tab .gui-tab-menu .gui-tab-menu-item{background:#fafafa;border-color:#d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;box-sizing:border-box;cursor:pointer;display:inline-block;height:34px;margin-right:2px;padding:8px 16px;position:relative;text-align:center;white-space:nowrap}.gui-tab .gui-tab-menu .gui-tab-menu-item:nth-last-child(1){margin-right:0}.gui-tab .gui-tab-menu .gui-tab-menu-item svg{height:16px;width:16px}.gui-tab .gui-tab-menu .gui-tab-menu-item svg path{fill:#aaa}.gui-tab .gui-tab-menu .scroll-button{background:transparent;box-sizing:border-box;color:#ccc;cursor:pointer;font-weight:700;height:34px;padding:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-menu .scroll-button:hover svg path{stroke:#464646}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fff;border-color:#d6d6d6 #d6d6d6 #fff #d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;color:#2185d0}.gui-tab .gui-active.gui-tab-menu-item svg path{fill:#2185d0}.gui-tab .gui-active.gui-tab-item{display:block}\n", ".gui-material .gui-tab{font:14px Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{background:#616161;border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent #616161;color:#ce93d8}\n"], components: [{ type: FabricArrowIconComponent, selector: "gui-arrow-icon", inputs: ["direction"] }, { type: FabricSvgTemplate, selector: "gui-svg-template", inputs: ["svg"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-tab', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-tab]': 'true'
                    }, template: "<div #tab>\n\n\t<div class=\"gui-tab-menu\">\n\n\t\t<div *ngIf=\"scrollActive\"\n\t\t\t (click)=\"scrollTabList(false)\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon [direction]=\"Direction.LEFT\"></gui-arrow-icon>\n\t\t</div>\n\n\t\t<div class=\"gui-tab-menu-list\">\n\t\t\t<div #tabMenuList\n\t\t\t\t (click)=\"toggleTab(tab)\"\n\t\t\t\t *ngFor=\"let tab of menu\"\n\t\t\t\t [attr.data-tab]=\"getTabName(tab)\"\n\t\t\t\t class=\"gui-tab-menu-item\">\n\t\t\t\t<span *ngIf=\"!isSvg(tab)\">{{tab}}</span>\n\t\t\t\t<ng-container *ngIf=\"isSvg(tab)\">\n\t\t\t\t\t<gui-svg-template [svg]=\"tab.svg\"></gui-svg-template>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"scrollActive\"\n\t\t\t (click)=\"scrollTabList(true)\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<gui-arrow-icon></gui-arrow-icon>\n\t\t</div>\n\n\t</div>\n\n\t<div #tabItem\n\t\t class=\"gui-tab-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n", styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fff;border-color:#d6d6d6;border-radius:0 0 4px 4px;border-style:solid;border-width:1px;padding:12px}.gui-tab .gui-tab-menu{display:-ms-flexbox;display:flex;margin-bottom:-1px}.gui-tab .gui-tab-menu .gui-tab-menu-list{border-radius:4px 4px 0 0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden}.gui-tab .gui-tab-menu .gui-tab-menu-item{background:#fafafa;border-color:#d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;box-sizing:border-box;cursor:pointer;display:inline-block;height:34px;margin-right:2px;padding:8px 16px;position:relative;text-align:center;white-space:nowrap}.gui-tab .gui-tab-menu .gui-tab-menu-item:nth-last-child(1){margin-right:0}.gui-tab .gui-tab-menu .gui-tab-menu-item svg{height:16px;width:16px}.gui-tab .gui-tab-menu .gui-tab-menu-item svg path{fill:#aaa}.gui-tab .gui-tab-menu .scroll-button{background:transparent;box-sizing:border-box;color:#ccc;cursor:pointer;font-weight:700;height:34px;padding:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-menu .scroll-button:hover svg path{stroke:#464646}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fff;border-color:#d6d6d6 #d6d6d6 #fff #d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;color:#2185d0}.gui-tab .gui-active.gui-tab-menu-item svg path{fill:#2185d0}.gui-tab .gui-active.gui-tab-item{display:block}\n", ".gui-material .gui-tab{font:14px Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{background:#616161;border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent #616161;color:#ce93d8}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { tabRef: [{
                type: ViewChild,
                args: ['tab', { read: ElementRef, static: false }]
            }], tabItemRef: [{
                type: ViewChild,
                args: ['tabItem', { read: ElementRef, static: false }]
            }], tabMenuList: [{
                type: ViewChildren,
                args: ['tabMenuList', { read: ElementRef }]
            }], menu: [{
                type: Input
            }], active: [{
                type: Input
            }], scrollActive: [{
                type: Input
            }] } });

class TabItemComponent {
    constructor() {
        this.tab = '';
    }
}
TabItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TabItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TabItemComponent, selector: "gui-tab-item", inputs: { tab: "tab" }, ngImport: i0, template: "<div [attr.data-tab]=\"tab\"\n\t class=\"gui-tab-item\">\n\t<ng-content></ng-content>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TabItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-tab-item', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div [attr.data-tab]=\"tab\"\n\t class=\"gui-tab-item\">\n\t<ng-content></ng-content>\n</div>\n" }]
        }], propDecorators: { tab: [{
                type: Input
            }] } });

class FabricSvgTemplateModule {
}
FabricSvgTemplateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSvgTemplateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricSvgTemplateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSvgTemplateModule, declarations: [FabricSvgTemplate], imports: [CommonModule], exports: [FabricSvgTemplate] });
FabricSvgTemplateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSvgTemplateModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSvgTemplateModule, decorators: [{
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
        }] });

class FabricTabModule {
}
FabricTabModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricTabModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTabModule, declarations: [FabricTabComponent,
        TabItemComponent], imports: [CommonModule,
        FabricArrowIconModule,
        FabricSvgTemplateModule], exports: [FabricTabComponent,
        TabItemComponent] });
FabricTabModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTabModule, imports: [[
            CommonModule,
            FabricArrowIconModule,
            FabricSvgTemplateModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTabModule, decorators: [{
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
        }] });

class FabricTooltipComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.text = '';
        this.left = 0;
        this.top = 0;
    }
    correctPosition() {
        this.top -= this.elementRef.nativeElement.offsetHeight;
    }
}
FabricTooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTooltipComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
FabricTooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricTooltipComponent, selector: "ng-component", host: { properties: { "class.gui-tooltip": "true", "style.left.px": "left", "style.top.px": "top" } }, ngImport: i0, template: `
		{{text}}
	`, isInline: true, styles: [".gui-tooltip{background:rgba(0,0,0,.8);border-radius:4px;border-style:solid;border-width:0;box-sizing:border-box;color:#fff;display:block;font:14px Arial;font-weight:400;padding:8px 12px;position:absolute;-ms-transform:translateX(-50%);transform:translate(-50%);vertical-align:middle;z-index:10}.gui-tooltip:after{border-color:#333 transparent transparent transparent;border-style:solid;border-width:5px;content:\"\";left:50%;margin-left:-5px;position:absolute;top:100%}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTooltipComponent, decorators: [{
            type: Component,
            args: [{ template: `
		{{text}}
	`, host: {
                        '[class.gui-tooltip]': 'true',
                        '[style.left.px]': 'left',
                        '[style.top.px]': 'top'
                    }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".gui-tooltip{background:rgba(0,0,0,.8);border-radius:4px;border-style:solid;border-width:0;box-sizing:border-box;color:#fff;display:block;font:14px Arial;font-weight:400;padding:8px 12px;position:absolute;-ms-transform:translateX(-50%);transform:translate(-50%);vertical-align:middle;z-index:10}.gui-tooltip:after{border-color:#333 transparent transparent transparent;border-style:solid;border-width:5px;content:\"\";left:50%;margin-left:-5px;position:absolute;top:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });

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
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => this.show());
        close$
            .pipe(takeUntil(this.unsubscribe$))
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
        if (this.tooltipRef) {
            this.applicationRef.detachView(this.tooltipRef.hostView);
            this.tooltipRef.destroy();
            this.tooltipRef = null;
        }
    }
    calculateCords() {
        if (this.tooltipRef) {
            const elementRef = this.elementRef.nativeElement, elementRect = elementRef.getBoundingClientRect(), elementBottom = elementRect.bottom, elementLeft = elementRect.left;
            if (isPlatformBrowser(this.platformId)) {
                this.tooltipTopPosition =
                    elementBottom + window.scrollY
                        - elementRef.offsetHeight
                        - FabricTooltipDirective.tooltipOffset;
                this.tooltipLeftPosition = window.scrollX + elementLeft + elementRef.offsetWidth / 2;
                if (this.tooltipTopPosition) {
                    this.tooltipRef.instance.top = this.tooltipTopPosition;
                }
                if (this.tooltipLeftPosition) {
                    this.tooltipRef.instance.left = this.tooltipLeftPosition;
                }
                this.tooltipRef.changeDetectorRef.detectChanges();
            }
        }
    }
}
FabricTooltipDirective.tooltipOffset = 8;
FabricTooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTooltipDirective, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.Injector }, { token: i0.ElementRef }, { token: i0.ApplicationRef }, { token: DOCUMENT }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
FabricTooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: FabricTooltipDirective, selector: "[gui-tooltip]", inputs: { text: ["gui-tooltip", "text"] }, exportAs: ["guiTooltip"], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[gui-tooltip]',
                    exportAs: 'guiTooltip'
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.Injector }, { type: i0.ElementRef }, { type: i0.ApplicationRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { text: [{
                type: Input,
                args: ['gui-tooltip']
            }] } });

class FabricTooltipModule {
}
FabricTooltipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricTooltipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTooltipModule, declarations: [FabricTooltipDirective,
        FabricTooltipComponent], exports: [FabricTooltipDirective,
        FabricTooltipComponent] });
FabricTooltipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTooltipModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTooltipModule, decorators: [{
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
        }] });

class SelectOptionsCords {
    constructor(element, selectContainerGeometry, window) {
        this.element = element;
        this.selectContainerGeometry = selectContainerGeometry;
        this.window = window;
        this.verticalPosition = 0;
        this.horizontalPosition = 0;
        this.canOpenUpward = false;
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
        if (isPlatformBrowser(this.platformId) && this.selectContainerGeometry) {
            const selectOptionsCords = new SelectOptionsCords(element, this.selectContainerGeometry, window);
            this.selectOptionsCords$.next(selectOptionsCords);
        }
    }
}
SelectOptionsGeometryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectOptionsGeometryService, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
SelectOptionsGeometryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectOptionsGeometryService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectOptionsGeometryService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });

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
FabricSelectedOptionsRepository.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSelectedOptionsRepository, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricSelectedOptionsRepository.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSelectedOptionsRepository });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSelectedOptionsRepository, decorators: [{
            type: Injectable
        }] });

class FabricSelectOptionsComponent extends FabricThemedComponent {
    constructor(selectOptionsGeometryService, selectService, changeDetectorRef, elementRef, renderer, themeService) {
        super(elementRef, renderer, themeService);
        this.selectOptionsGeometryService = selectOptionsGeometryService;
        this.selectService = selectService;
        this.changeDetectorRef = changeDetectorRef;
        this.options = [];
        this.optionsContainerLeftAttribute = 0;
        this.optionsContainerTopAttribute = 0;
        this.width = 100;
        this.canOpenUpward = false;
    }
    ngOnInit() {
        this.selectOptionsGeometryService
            .onSelectOptionsCords()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((cords) => {
            this.optionsContainerTopAttribute = cords.getVerticalPosition();
            this.optionsContainerLeftAttribute = cords.getHorizontalPosition();
            this.canOpenUpward = cords.getCanOpenUpward();
            this.changeDetectorRef.detectChanges();
        });
        this.selectService
            .onSelectedOption()
            .pipe(takeUntil(this.unsubscribe$))
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
        return this.selectedOption?.name === option.name;
    }
    getOptionValue(option) {
        return option.value ? option.value : option.name;
    }
    initOpenAnimation() {
        if (this.optionListRef) {
            const optionsEl = this.optionListRef.nativeElement;
            this.getRenderer().addClass(optionsEl, 'gui-options-opened');
        }
    }
}
FabricSelectOptionsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSelectOptionsComponent, deps: [{ token: SelectOptionsGeometryService }, { token: FabricSelectedOptionsRepository }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: FabricModalThemeService }], target: i0.ɵɵFactoryTarget.Component });
FabricSelectOptionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricSelectOptionsComponent, selector: "ng-component", viewQueries: [{ propertyName: "optionListRef", first: true, predicate: ["optionList"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: `
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
	`, isInline: true, directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSelectOptionsComponent, decorators: [{
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
        }], ctorParameters: function () { return [{ type: SelectOptionsGeometryService }, { type: FabricSelectedOptionsRepository }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: FabricModalThemeService }]; }, propDecorators: { optionListRef: [{
                type: ViewChild,
                args: ['optionList', { read: ElementRef, static: false }]
            }] } });

class SelectOptionModalService extends FabricModal {
    constructor(selectOptionsGeometryService, componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
        this.selectOptionsGeometryService = selectOptionsGeometryService;
    }
    getComponent() {
        return FabricSelectOptionsComponent;
    }
    open(options, width) {
        this.createAndAppend({
            afterCompCreation: () => this.afterCompCreation(options, width)
        });
    }
    closeOptions() {
        this.removeComponent();
    }
    afterCompCreation(options, width) {
        if (this.isComponentCreated()) {
            const componentRef = this.getComponentRef();
            componentRef.instance.options = options;
            componentRef.instance.width = width;
            componentRef.instance.detectChanges();
            this.selectOptionsGeometryService.setGeometry(componentRef.instance.getElementRef());
            componentRef.instance.detectChanges();
        }
    }
}
SelectOptionModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectOptionModalService, deps: [{ token: SelectOptionsGeometryService }, { token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
SelectOptionModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectOptionModalService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectOptionModalService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: SelectOptionsGeometryService }, { type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });

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
        if (changes['placeholder']) {
            this.containerText = this.placeholder;
        }
        if (changes['selected']) {
            if (this.selected) {
                this.tryToSelect(this.selected);
            }
        }
    }
    ngOnInit() {
        this.selectService
            .onSelectedOption()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((selectedOption) => {
            this.emitSelectedOption(selectedOption);
            this.selectedOption = selectedOption;
            this.containerText = selectedOption.value ?? '';
            this.doNotEmitValues = false;
            this.changeDetectorRef.detectChanges();
        });
        this.selectOptionsGeometryService
            .onSelectOptionsCords()
            .pipe(takeUntil(this.unsubscribe$))
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
        return this.selectedOption?.name === option.name;
    }
    getOptionValue(option) {
        if (option) {
            return option.value ? option.value : option.name;
        }
        return '';
    }
    open(options, width) {
        if (this.containerRef) {
            this.closeSelect();
            this.selectOptionModalService.open(options, width);
            this.selectOptionsGeometryService.nextCords(this.containerRef);
        }
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
                    if (this.containerRef) {
                        this.selectOptionsGeometryService.nextCords(this.containerRef);
                    }
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
FabricSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSelectComponent, deps: [{ token: FabricSelectedOptionsRepository }, { token: SelectOptionsGeometryService }, { token: SelectOptionModalService }, { token: i0.ChangeDetectorRef }, { token: PLATFORM_ID }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FabricSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricSelectComponent, selector: "gui-select", inputs: { options: "options", placeholder: "placeholder", selected: "selected", width: "width", disabled: "disabled" }, outputs: { optionChanged: "optionChanged" }, host: { properties: { "class.gui-select": "true" } }, providers: [
        FabricSelectedOptionsRepository,
        SelectOptionsGeometryService,
        SelectOptionModalService
    ], viewQueries: [{ propertyName: "containerRef", first: true, predicate: ["container"], descendants: true, read: ElementRef }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t [class.gui-disabled]=\"disabled\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-select-container\">\n\n\t<div class=\"gui-select-value\">\n\t\t{{containerText}}\n\t</div>\n\n\t<span class=\"gui-select-arrow\"></span>\n\n</div>\n", styles: [".gui-select .gui-select-container{min-height:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:content-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent transparent;height:0;margin:8px;position:absolute;right:5px;top:5px;width:0}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8 #6fb4e8 transparent #6fb4e8;border-radius:4px 4px 0 0;border-width:1px}.gui-select.gui-downward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-downward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:1px 0 0 0}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959 transparent;bottom:5px;left:5px;top:auto}.gui-select.gui-upward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-upward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:0 0 1px 0;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#cccccc transparent transparent transparent}.gui-select .initAnimationDisabled.gui-options-list{display:none}.gui-options-list{background:#fff;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px;overflow:hidden;padding:0;position:absolute;z-index:1000}.gui-options-list .gui-option{box-sizing:content-box;cursor:pointer;font-size:14px;list-style-type:none;padding:8px 24px 8px 12px}.gui-options-list .gui-option:hover{background:#dcdcdc}.gui-options-list .gui-option-selected{background:#e6e6e6;font-weight:700}.gui-options-list.gui-upward{-webkit-animation:loadUpward .2s forwards;animation:loadUpward .2s forwards;border-bottom:none;border-color:#6fb4e8;border-radius:4px 4px 0 0;border-style:solid;border-width:1px}@-webkit-keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}.gui-options-list.gui-downward{-webkit-animation:loadDownward .2s forwards;animation:loadDownward .2s forwards;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px}@-webkit-keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}\n", ".gui-material .gui-select .gui-select-container,.gui-material .gui-options-list .gui-option{font-family:Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent transparent}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8 transparent}.gui-dark .gui-select .gui-disabled{opacity:.36}.gui-dark .gui-options-list{border-color:#ce93d8}.gui-dark .gui-options-list .gui-option{background:#424242;border-color:#757575;color:#bdbdbd}.gui-dark .gui-options-list .gui-option:hover{background:#616161}.gui-dark .gui-options-list .gui-option-selected{background:#757575}\n", ".gui-light .gui-select .gui-select-container{background:#fff;color:#333;font-family:Roboto,Helvetica Neue,sans-serif}.gui-light .gui-options-list .gui-option:hover{background:#f6f6f5}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-select', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-select]': 'true'
                    }, providers: [
                        FabricSelectedOptionsRepository,
                        SelectOptionsGeometryService,
                        SelectOptionModalService
                    ], template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t [class.gui-disabled]=\"disabled\"\n\t [style.width.px]=\"width\"\n\t class=\"gui-select-container\">\n\n\t<div class=\"gui-select-value\">\n\t\t{{containerText}}\n\t</div>\n\n\t<span class=\"gui-select-arrow\"></span>\n\n</div>\n", styles: [".gui-select .gui-select-container{min-height:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:content-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent transparent;height:0;margin:8px;position:absolute;right:5px;top:5px;width:0}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8 #6fb4e8 transparent #6fb4e8;border-radius:4px 4px 0 0;border-width:1px}.gui-select.gui-downward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-downward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:1px 0 0 0}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959 transparent;bottom:5px;left:5px;top:auto}.gui-select.gui-upward .gui-options-list{border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-top:none;border-width:1px}.gui-select.gui-upward .gui-option{border-color:#e6e6e6;border-style:solid;border-width:0 0 1px 0;-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#cccccc transparent transparent transparent}.gui-select .initAnimationDisabled.gui-options-list{display:none}.gui-options-list{background:#fff;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px;overflow:hidden;padding:0;position:absolute;z-index:1000}.gui-options-list .gui-option{box-sizing:content-box;cursor:pointer;font-size:14px;list-style-type:none;padding:8px 24px 8px 12px}.gui-options-list .gui-option:hover{background:#dcdcdc}.gui-options-list .gui-option-selected{background:#e6e6e6;font-weight:700}.gui-options-list.gui-upward{-webkit-animation:loadUpward .2s forwards;animation:loadUpward .2s forwards;border-bottom:none;border-color:#6fb4e8;border-radius:4px 4px 0 0;border-style:solid;border-width:1px}@-webkit-keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadUpward{0%{transform:translateY(50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}.gui-options-list.gui-downward{-webkit-animation:loadDownward .2s forwards;animation:loadDownward .2s forwards;border-color:#6fb4e8;border-radius:0 0 4px 4px;border-style:solid;border-width:0 1px 1px 1px}@-webkit-keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}@keyframes loadDownward{0%{transform:translateY(-50%) scaleY(0)}to{transform:translateY(0) scaleY(1)}}\n", ".gui-material .gui-select .gui-select-container,.gui-material .gui-options-list .gui-option{font-family:Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent transparent}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8 transparent}.gui-dark .gui-select .gui-disabled{opacity:.36}.gui-dark .gui-options-list{border-color:#ce93d8}.gui-dark .gui-options-list .gui-option{background:#424242;border-color:#757575;color:#bdbdbd}.gui-dark .gui-options-list .gui-option:hover{background:#616161}.gui-dark .gui-options-list .gui-option-selected{background:#757575}\n", ".gui-light .gui-select .gui-select-container{background:#fff;color:#333;font-family:Roboto,Helvetica Neue,sans-serif}.gui-light .gui-options-list .gui-option:hover{background:#f6f6f5}\n"] }]
        }], ctorParameters: function () { return [{ type: FabricSelectedOptionsRepository }, { type: SelectOptionsGeometryService }, { type: SelectOptionModalService }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { containerRef: [{
                type: ViewChild,
                args: ['container', { read: ElementRef, static: false }]
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
            }] } });

class FabricSelectModule {
}
FabricSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSelectModule, declarations: [FabricSelectComponent,
        FabricSelectOptionsComponent], imports: [CommonModule], exports: [FabricSelectComponent] });
FabricSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSelectModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSelectModule, decorators: [{
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
        }] });

class FabricSliderComponent {
    constructor() {
        this.toggled = false;
        this.changed = new EventEmitter();
    }
    toggle(event) {
        event.stopPropagation();
        this.toggled = !this.toggled;
        this.changed.emit(this.toggled);
    }
}
FabricSliderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricSliderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricSliderComponent, selector: "gui-slider", inputs: { toggled: "toggled" }, outputs: { changed: "changed" }, ngImport: i0, template: "<div (click)=\"toggle($event)\"\n\t class=\"gui-slider\">\n\t<span [class.is-toggled]=\"toggled\"\n\t\t  class=\"gui-slider-indicator\"></span>\n</div>\n", styles: [".gui-slider{background:#cccccc;border-radius:4px;cursor:pointer;display:block;height:12px;position:relative;width:32px}.gui-slider .gui-slider-indicator{background:#2185d0;border-radius:50%;box-sizing:border-box;height:16px;overflow:hidden;position:absolute;top:-2px;-ms-transform:translateX(-5.3333333333px);transform:translate(-5.3333333333px);transition:all .2s ease-in-out;width:16px}.gui-slider .gui-slider-indicator.is-toggled{-ms-transform:translateX(calc(100% + 16px / 3));transform:translate(calc(100% + 16px / 3))}\n", ".gui-dark .gui-slider{background:#424242}.gui-dark .gui-slider .gui-slider-indicator{background:#ce93d8}\n", ".gui-material .gui-slider .gui-slider-indicator{background:#6200ee}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-slider', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div (click)=\"toggle($event)\"\n\t class=\"gui-slider\">\n\t<span [class.is-toggled]=\"toggled\"\n\t\t  class=\"gui-slider-indicator\"></span>\n</div>\n", styles: [".gui-slider{background:#cccccc;border-radius:4px;cursor:pointer;display:block;height:12px;position:relative;width:32px}.gui-slider .gui-slider-indicator{background:#2185d0;border-radius:50%;box-sizing:border-box;height:16px;overflow:hidden;position:absolute;top:-2px;-ms-transform:translateX(-5.3333333333px);transform:translate(-5.3333333333px);transition:all .2s ease-in-out;width:16px}.gui-slider .gui-slider-indicator.is-toggled{-ms-transform:translateX(calc(100% + 16px / 3));transform:translate(calc(100% + 16px / 3))}\n", ".gui-dark .gui-slider{background:#424242}.gui-dark .gui-slider .gui-slider-indicator{background:#ce93d8}\n", ".gui-material .gui-slider .gui-slider-indicator{background:#6200ee}\n"] }]
        }], propDecorators: { toggled: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });

class FabricSliderModule {
}
FabricSliderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSliderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricSliderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSliderModule, declarations: [FabricSliderComponent], imports: [CommonModule], exports: [FabricSliderComponent] });
FabricSliderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSliderModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSliderModule, decorators: [{
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
        }] });

class FabricSpinnerComponent extends AbstractSpinner {
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.color = '';
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
FabricSpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSpinnerComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FabricSpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricSpinnerComponent, selector: "gui-spinner", inputs: { color: "color" }, host: { properties: { "class.gui-spinner": "true" } }, usesInheritance: true, ngImport: i0, template: "<div\n\t[style.height.px]=\"circleSize\"\n\t[style.width.px]=\"circleSize\"\n\tclass=\"gui-spinner\">\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n", styles: ["@-webkit-keyframes gui-spin{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@keyframes gui-spin{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@-webkit-keyframes gui-spin-reverse{0%{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}@keyframes gui-spin-reverse{0%{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}.gui-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-spinner circle{fill:transparent;stroke:#999}.gui-spinner svg{position:absolute}.gui-spinner .circle-inner{animation:gui-spin-reverse 2s infinite linear forwards reverse}.gui-spinner .circle-outer{-webkit-animation:gui-spin 2s infinite linear forwards;animation:gui-spin 2s infinite linear forwards}.gui-primary .gui-spinner.gui-spinner circle{stroke:#2185d0}.gui-secondary .gui-spinner.gui-spinner circle{stroke:#3cb371}\n", ".gui-material .gui-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-spinner circle{stroke:#0097a7}\n", ".gui-dark .gui-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-spinner circle{stroke:#80cbc4}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-spinner', host: {
                        '[class.gui-spinner]': 'true'
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div\n\t[style.height.px]=\"circleSize\"\n\t[style.width.px]=\"circleSize\"\n\tclass=\"gui-spinner\">\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n", styles: ["@-webkit-keyframes gui-spin{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@keyframes gui-spin{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@-webkit-keyframes gui-spin-reverse{0%{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}@keyframes gui-spin-reverse{0%{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}.gui-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-spinner circle{fill:transparent;stroke:#999}.gui-spinner svg{position:absolute}.gui-spinner .circle-inner{animation:gui-spin-reverse 2s infinite linear forwards reverse}.gui-spinner .circle-outer{-webkit-animation:gui-spin 2s infinite linear forwards;animation:gui-spin 2s infinite linear forwards}.gui-primary .gui-spinner.gui-spinner circle{stroke:#2185d0}.gui-secondary .gui-spinner.gui-spinner circle{stroke:#3cb371}\n", ".gui-material .gui-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-spinner circle{stroke:#0097a7}\n", ".gui-dark .gui-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-spinner circle{stroke:#80cbc4}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { color: [{
                type: Input
            }] } });

class FabricSpinnerModule {
}
FabricSpinnerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSpinnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricSpinnerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSpinnerModule, declarations: [FabricSpinnerComponent], imports: [CommonModule], exports: [FabricSpinnerComponent] });
FabricSpinnerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSpinnerModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSpinnerModule, decorators: [{
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
        }] });

class ToggleButtonGroupService {
    constructor() {
        this.toggleButtonId$ = new Subject();
    }
    ngOnDestroy() {
        // this.toggleButtonId$.next();
        this.toggleButtonId$.complete();
    }
    observeToggledButton() {
        return this.toggleButtonId$.asObservable();
    }
    toggleButton(id) {
        this.toggleButtonId$.next(id);
    }
}
ToggleButtonGroupService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ToggleButtonGroupService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ToggleButtonGroupService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ToggleButtonGroupService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ToggleButtonGroupService, decorators: [{
            type: Injectable
        }] });

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
        if (changes['checked']) {
            this.setButtonChecked(this.checked);
        }
        if (changes['disabled']) {
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
FabricToggleButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: ToggleButtonGroupService, optional: true }], target: i0.ɵɵFactoryTarget.Component });
FabricToggleButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricToggleButtonComponent, selector: "gui-button-toggle", inputs: { checked: "checked", disabled: "disabled" }, outputs: { changed: "changed" }, host: { properties: { "class.gui-button-toggle": "true" } }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<button (click)=\"tryToToggle($event)\"\n\t\t[disabled]=\"disabled\"\n\t\t[outline]=\"outline\"\n\t\t[primary]=\"primary\"\n\t\t[secondary]=\"secondary\"\n\t\tgui-button>\n\t<ng-content></ng-content>\n</button>\n", styles: [".gui-checked .gui-button{background:#e6e6e6;box-shadow:inset 0 10px 0 -5px #999;color:#333}.gui-checked .gui-button:hover{background:#cccccc}.gui-checked .gui-button:active{background:#999}.gui-checked .gui-button.gui-outline{background:transparent;box-shadow:0 0 0 2px #d6d6d6}.gui-checked .gui-button.gui-outline.gui-primary{background:transparent;box-shadow:0 0 0 2px #439de1;color:#2185d0}.gui-checked .gui-button.gui-outline.gui-primary:hover{color:#fff}.gui-checked .gui-button.gui-outline.gui-secondary{background:transparent;box-shadow:0 0 0 2px #5ac88b;color:#3cb371}.gui-checked .gui-button.gui-outline.gui-secondary:hover{color:#fff}.gui-checked .gui-button.gui-primary{background:#2185d0;box-shadow:inset 0 10px 0 -5px #175b8e;color:#fff}.gui-checked .gui-button.gui-secondary{background:#3cb371;box-shadow:inset 0 10px 0 -5px #2b8152;color:#fff}.gui-disabled{pointer-events:none}\n", ".gui-material .gui-button{background:#3949ab;color:#fff}.gui-material .gui-checked .gui-button{background:#3949ab;box-shadow:inset 0 10px 0 -5px #7885d2;color:#fff}.gui-material .gui-checked .gui-button:hover{background:#5262c5}.gui-material .gui-checked .gui-button:active{background:#4051bf}.gui-material .gui-checked .gui-button.gui-outline{background:#c5cae9;box-shadow:0 0 0 1px #5262c5;color:#3949ab}.gui-material .gui-checked .gui-button.gui-outline.gui-primary{background:#d1c4e9;box-shadow:0 0 0 1px #6200ee;color:#6200ee}.gui-material .gui-checked .gui-button.gui-outline.gui-secondary{background:#b2ebf2;box-shadow:0 0 0 1px #0097a7;color:#0097a7}.gui-material .gui-checked .gui-button.gui-primary{background:#6200ee;box-shadow:inset 0 10px 0 -5px #d1c4e9;color:#fff}.gui-material .gui-checked .gui-button.gui-secondary{background:#0097a7;box-shadow:inset 0 10px 0 -5px #b2ebf2;color:#fff}\n", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-checked .gui-button{color:#bdbdbd}.gui-dark .gui-checked .gui-button:hover{background:#616161}.gui-dark .gui-checked .gui-button:active{background:#212121}.gui-dark .gui-checked .gui-button.gui-outline{background:#2e2e2e;box-shadow:0 0 0 1px #616161;color:#bdbdbd}.gui-dark .gui-checked .gui-button.gui-outline.gui-primary{background:#b55bc4;box-shadow:0 0 0 1px #ce93d8;color:#212121}.gui-dark .gui-checked .gui-button.gui-outline.gui-secondary{background:#26a69a;box-shadow:0 0 0 1px #80cbc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-primary{background:#ce93d8;box-shadow:inset 0 10px 0 -5px #b55bc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-secondary{background:#80cbc4;box-shadow:inset 0 10px 0 -5px #26a69a;color:#212121}\n"], components: [{ type: FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-button-toggle', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-button-toggle]': 'true'
                    }, template: "<button (click)=\"tryToToggle($event)\"\n\t\t[disabled]=\"disabled\"\n\t\t[outline]=\"outline\"\n\t\t[primary]=\"primary\"\n\t\t[secondary]=\"secondary\"\n\t\tgui-button>\n\t<ng-content></ng-content>\n</button>\n", styles: [".gui-checked .gui-button{background:#e6e6e6;box-shadow:inset 0 10px 0 -5px #999;color:#333}.gui-checked .gui-button:hover{background:#cccccc}.gui-checked .gui-button:active{background:#999}.gui-checked .gui-button.gui-outline{background:transparent;box-shadow:0 0 0 2px #d6d6d6}.gui-checked .gui-button.gui-outline.gui-primary{background:transparent;box-shadow:0 0 0 2px #439de1;color:#2185d0}.gui-checked .gui-button.gui-outline.gui-primary:hover{color:#fff}.gui-checked .gui-button.gui-outline.gui-secondary{background:transparent;box-shadow:0 0 0 2px #5ac88b;color:#3cb371}.gui-checked .gui-button.gui-outline.gui-secondary:hover{color:#fff}.gui-checked .gui-button.gui-primary{background:#2185d0;box-shadow:inset 0 10px 0 -5px #175b8e;color:#fff}.gui-checked .gui-button.gui-secondary{background:#3cb371;box-shadow:inset 0 10px 0 -5px #2b8152;color:#fff}.gui-disabled{pointer-events:none}\n", ".gui-material .gui-button{background:#3949ab;color:#fff}.gui-material .gui-checked .gui-button{background:#3949ab;box-shadow:inset 0 10px 0 -5px #7885d2;color:#fff}.gui-material .gui-checked .gui-button:hover{background:#5262c5}.gui-material .gui-checked .gui-button:active{background:#4051bf}.gui-material .gui-checked .gui-button.gui-outline{background:#c5cae9;box-shadow:0 0 0 1px #5262c5;color:#3949ab}.gui-material .gui-checked .gui-button.gui-outline.gui-primary{background:#d1c4e9;box-shadow:0 0 0 1px #6200ee;color:#6200ee}.gui-material .gui-checked .gui-button.gui-outline.gui-secondary{background:#b2ebf2;box-shadow:0 0 0 1px #0097a7;color:#0097a7}.gui-material .gui-checked .gui-button.gui-primary{background:#6200ee;box-shadow:inset 0 10px 0 -5px #d1c4e9;color:#fff}.gui-material .gui-checked .gui-button.gui-secondary{background:#0097a7;box-shadow:inset 0 10px 0 -5px #b2ebf2;color:#fff}\n", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-checked .gui-button{color:#bdbdbd}.gui-dark .gui-checked .gui-button:hover{background:#616161}.gui-dark .gui-checked .gui-button:active{background:#212121}.gui-dark .gui-checked .gui-button.gui-outline{background:#2e2e2e;box-shadow:0 0 0 1px #616161;color:#bdbdbd}.gui-dark .gui-checked .gui-button.gui-outline.gui-primary{background:#b55bc4;box-shadow:0 0 0 1px #ce93d8;color:#212121}.gui-dark .gui-checked .gui-button.gui-outline.gui-secondary{background:#26a69a;box-shadow:0 0 0 1px #80cbc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-primary{background:#ce93d8;box-shadow:inset 0 10px 0 -5px #b55bc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-secondary{background:#80cbc4;box-shadow:inset 0 10px 0 -5px #26a69a;color:#212121}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: ToggleButtonGroupService, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });

class FabricToggleButtonModule {
}
FabricToggleButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricToggleButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonModule, declarations: [FabricToggleButtonComponent], imports: [CommonModule,
        FabricButtonModule], exports: [FabricToggleButtonComponent,
        FabricButtonModule] });
FabricToggleButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonModule, imports: [[
            CommonModule,
            FabricButtonModule
        ], FabricButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonModule, decorators: [{
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
        }] });

class FabricToggleButtonGroupComponent {
}
FabricToggleButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricToggleButtonGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricToggleButtonGroupComponent, selector: "gui-toggle-button-group", host: { properties: { "class.gui-toggle-button-group": "true" } }, providers: [ToggleButtonGroupService], ngImport: i0, template: "<ng-content></ng-content>\n", styles: [".gui-toggle-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-toggle-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-toggle-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-toggle-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-toggle-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-toggle-button-group', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-toggle-button-group]': 'true'
                    }, providers: [ToggleButtonGroupService], template: "<ng-content></ng-content>\n", styles: [".gui-toggle-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-toggle-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-toggle-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-toggle-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-toggle-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}\n"] }]
        }] });

class FabricToggleButtonGroupModule {
}
FabricToggleButtonGroupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricToggleButtonGroupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonGroupModule, declarations: [FabricToggleButtonGroupComponent], imports: [CommonModule], exports: [FabricToggleButtonGroupComponent] });
FabricToggleButtonGroupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonGroupModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonGroupModule, decorators: [{
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
        }] });

class StarIconComponent {
}
StarIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StarIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StarIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: StarIconComponent, selector: "gui-star-icon", host: { properties: { "class.gui-star-icon": "true" } }, ngImport: i0, template: `
		<svg xmlns="http://www.w3.org/2000/svg" width="34.542" height="32.852" viewBox="0 0 34.542 32.852">
			<path data-name="Path 572"
				  d="M-121.168-469.432l5.337,10.814,11.934,1.734-8.636,8.418,2.039,11.886-10.674-5.612-10.674,5.612,2.039-11.886-8.636-8.418,11.934-1.734Z"
				  transform="translate(138.44 469.432)" fill="#ffe623" fill-rule="evenodd"/>
		</svg>
	`, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StarIconComponent, decorators: [{
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
        }] });

class FabricRatingComponent {
    constructor() {
        this.starsLength = 5;
        this.rating = 3;
        this.onRatingChange = new EventEmitter();
        this.stars = [];
        this.previewRating = 0;
    }
    ngOnChanges(changes) {
        if (changes['starsLength']) {
            this.createStarsArray(this.starsLength);
        }
    }
    ngOnInit() {
        this.createStarsArray(this.starsLength);
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
        if (length) {
            for (let i = 1; i <= length; i++) {
                this.stars.push(i);
            }
        }
    }
}
FabricRatingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricRatingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricRatingComponent, selector: "gui-rating", inputs: { starsLength: "starsLength", rating: "rating" }, outputs: { onRatingChange: "onRatingChange" }, host: { properties: { "class.gui-rating": "true" } }, usesOnChanges: true, ngImport: i0, template: "<div class=\"gui-rating-container\">\n\t<gui-star-icon (click)=\"changeRating(star)\"\n\t\t\t\t   (mouseenter)=\"changePreviewRating(star)\"\n\t\t\t\t   (mouseleave)=\"changePreviewRating(0)\"\n\t\t\t\t   *ngFor=\"let star of stars\"\n\t\t\t\t   [class.star-icon-gray]=\"isRating(star, rating)\"\n\t\t\t\t   [class.star-icon-hover]=\"isRating(previewRating, star)\">\n\t</gui-star-icon>\n</div>\n", styles: [".gui-rating .gui-star-icon{cursor:pointer;padding-right:8px}.gui-rating .gui-star-icon svg{height:24px;width:24px}.gui-rating .gui-star-icon svg path{transition:fill .3s ease-in-out}.gui-rating .gui-rating-container{display:-ms-flexbox;display:flex}.gui-rating .gui-rating-container .star-icon-gray svg path{fill:#dedede}.gui-rating .gui-rating-container .star-icon-hover svg path{fill:#fc0}\n"], components: [{ type: StarIconComponent, selector: "gui-star-icon" }], directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-rating', host: {
                        '[class.gui-rating]': 'true'
                    }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"gui-rating-container\">\n\t<gui-star-icon (click)=\"changeRating(star)\"\n\t\t\t\t   (mouseenter)=\"changePreviewRating(star)\"\n\t\t\t\t   (mouseleave)=\"changePreviewRating(0)\"\n\t\t\t\t   *ngFor=\"let star of stars\"\n\t\t\t\t   [class.star-icon-gray]=\"isRating(star, rating)\"\n\t\t\t\t   [class.star-icon-hover]=\"isRating(previewRating, star)\">\n\t</gui-star-icon>\n</div>\n", styles: [".gui-rating .gui-star-icon{cursor:pointer;padding-right:8px}.gui-rating .gui-star-icon svg{height:24px;width:24px}.gui-rating .gui-star-icon svg path{transition:fill .3s ease-in-out}.gui-rating .gui-rating-container{display:-ms-flexbox;display:flex}.gui-rating .gui-rating-container .star-icon-gray svg path{fill:#dedede}.gui-rating .gui-rating-container .star-icon-hover svg path{fill:#fc0}\n"] }]
        }], propDecorators: { starsLength: [{
                type: Input
            }], rating: [{
                type: Input
            }], onRatingChange: [{
                type: Output
            }] } });

class StarIconModule {
}
StarIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StarIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StarIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StarIconModule, declarations: [StarIconComponent], imports: [CommonModule], exports: [StarIconComponent] });
StarIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StarIconModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StarIconModule, decorators: [{
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
        }] });

class FabricRatingModule {
}
FabricRatingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRatingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricRatingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRatingModule, declarations: [FabricRatingComponent], imports: [CommonModule,
        StarIconModule], exports: [FabricRatingComponent] });
FabricRatingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRatingModule, imports: [[
            CommonModule,
            StarIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricRatingModule, decorators: [{
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
        }] });

class FabricModule {
}
FabricModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricModule, imports: [CommonModule,
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
FabricModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricModule, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricModule, decorators: [{
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
        }] });

class FabricNestedDialogComponent {
    constructor() {
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { DropdownItemComponent, FabricBadgeComponent, FabricBadgeModule, FabricButtonComponent, FabricButtonGroupComponent, FabricButtonGroupModule, FabricButtonModule, FabricCardComponent, FabricCardModule, FabricCheckboxComponent, FabricCheckboxModule, FabricChipComponent, FabricChipModule, FabricDatePickerCalendarComponent, FabricDatePickerComponent, FabricDatePickerModule, FabricDialogModule, FabricDialogService, FabricDialogThemeService, FabricDrawerModule, FabricDrawerService, FabricDropdownComponent, FabricDropdownModule, FabricInlineDialogModule, FabricInlineDialogService, FabricInputComponent, FabricInputModule, FabricMessageModule, FabricMessageService, FabricModalThemeService, FabricModule, FabricNestedDialogComponent, FabricNotificationModule, FabricNotificationPosition, FabricNotificationService, FabricPlacement, FabricProgressBarComponent, FabricProgressBarModule, FabricProgressSpinnerComponent, FabricProgressSpinnerModule, FabricRadioButtonComponent, FabricRadioButtonModule, FabricRadioGroupComponent, FabricRadioGroupModule, FabricRatingComponent, FabricRatingModule, FabricSelectComponent, FabricSelectModule, FabricSliderComponent, FabricSliderModule, FabricSpinnerComponent, FabricSpinnerModule, FabricTabComponent, FabricTabModule, FabricToggleButtonComponent, FabricToggleButtonGroupComponent, FabricToggleButtonGroupModule, FabricToggleButtonModule, FabricTooltipComponent, FabricTooltipDirective, FabricTooltipModule, Placement, SpinnerMode, TabItemComponent, Theme };
//# sourceMappingURL=generic-ui-fabric.mjs.map
