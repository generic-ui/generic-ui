import { ChangeDetectionStrategy, Component, HostListener, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GeometryService } from './geometry.service';
import { Placement } from './placement';
import { FabricReactive } from '../../common/fabric-reactive';
import { Direction } from '../../common/icons/arrow-icon/direction';
import * as i0 from "@angular/core";
import * as i1 from "./geometry.service";
import * as i2 from "@angular/common";
import * as i3 from "../../common/icons/arrow-icon/fabric-arrow-icon.component";
const _c0 = ["dropdownMenu"];
const _c1 = ["container"];
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
const _c2 = ["*"];
export class FabricDropdownComponent extends FabricReactive {
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
FabricDropdownComponent.ɵfac = function FabricDropdownComponent_Factory(t) { return new (t || FabricDropdownComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.GeometryService)); };
FabricDropdownComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDropdownComponent, selectors: [["gui-dropdown"]], viewQuery: function FabricDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 7);
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
        ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 8, vars: 14, consts: [[1, "gui-dropdown-container", 3, "click", "mouseenter", "mouseleave"], ["container", ""], [1, "gui-dropdown-text"], [3, "gui-dropdown-arrow", 4, "ngIf"], [1, "gui-dropdown-menu"], ["dropdownMenu", ""], [3, "direction"]], template: function FabricDropdownComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i2.NgIf, i3.FabricArrowIconComponent], styles: [".gui-dropdown .gui-dropdown-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;color:#333;cursor:pointer;display:inline-block;font:14px Arial;padding:8px 12px;position:relative;width:auto}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container:hover .gui-arrow-icon svg path{stroke:#464646}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{cursor:pointer;position:absolute;right:12px;top:8px}.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{background:inherit;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;box-sizing:border-box;display:none;left:-1px;overflow:hidden;position:absolute;width:inherit;z-index:2}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{list-style-type:none;padding:8px 12px;width:inherit}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#cccccc}.gui-dropdown .gui-dropdown-container.gui-arrow-left{padding:8px 12px 8px 32px}.gui-dropdown .gui-dropdown-container.gui-arrow-left .gui-dropdown-arrow{left:12px;right:auto;right:initial}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}\n", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container:hover .gui-dropdown-arrow svg path{stroke:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#616161}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}\n"], encapsulation: 2, changeDetection: 0 });
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
            }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.GeometryService }]; }, { dropdownMenuRef: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL25hdmlnYXRpb24vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL25hdmlnYXRpb24vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsV0FBVyxFQUdYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7SUNYbkUsMkJBQzZDO0lBQzVDLG9DQUE4RDtJQUMvRCxpQkFBTTs7O0lBRkwsMkRBQTJDO0lBQzNCLGVBQTRCO0lBQTVCLGlEQUE0Qjs7O0FENkI5QyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsY0FBYztJQXlEMUQsWUFBa0QsVUFBZSxFQUM3QyxVQUFzQixFQUN0QixRQUFtQixFQUNuQixpQkFBb0MsRUFDcEMsZUFBZ0M7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFMeUMsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIs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LHlDQUFvQjtRQU14QixlQUErQjtRQUEvQiwrQ0FBK0Isc0NBQUEsaUNBQUE7O3VGRHlCckIsdUJBQXVCO2NBakJuQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRTtvQkFDVixxQkFBcUI7b0JBQ3JCLHFDQUFxQztvQkFDckMsaUNBQWlDO2lCQUNqQztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDTCxzQkFBc0IsRUFBRSxNQUFNO2lCQUM5QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsZUFBZTtpQkFDZjthQUNEOztzQkEwRGEsTUFBTTt1QkFBQyxXQUFXO3VJQXREL0IsZUFBZTtrQkFEZCxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFJM0MsWUFBWTtrQkFEWCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFJeEMsUUFBUTtrQkFEUCxZQUFZO21CQUFDLGVBQWU7WUFRN0IsUUFBUTtrQkFEUCxLQUFLO1lBSU4sWUFBWTtrQkFEWCxLQUFLO1lBSU4sS0FBSztrQkFESixLQUFLO1lBSU4sU0FBUztrQkFEUixLQUFLO1lBSU4sS0FBSztrQkFESixLQUFLO1lBSU4sV0FBVztrQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEhvc3RMaXN0ZW5lcixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRPbkluaXQsXG5cdFBMQVRGT1JNX0lELFxuXHRSZW5kZXJlcjIsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEdlb21ldHJ5U2VydmljZSB9IGZyb20gJy4vZ2VvbWV0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknO1xuXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tICcuL3BsYWNlbWVudCc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Fycm93LWljb24vZGlyZWN0aW9uJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZHJvcGRvd24nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9kcm9wZG93bi5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2Ryb3Bkb3duLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZHJvcGRvd24uZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1kcm9wZG93bl0nOiAndHJ1ZSdcblx0fSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R2VvbWV0cnlTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCdkcm9wZG93bk1lbnUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRkcm9wZG93bk1lbnVSZWY6IEVsZW1lbnRSZWY7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSlcblx0Y29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuXHRvblJlc2l6ZSgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy53aW5kb3dTaXplID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdH1cblx0fVxuXG5cdEBJbnB1dCgpXG5cdGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0ZHJvcGRvd25UZXh0OiBzdHJpbmcgPSAnRHJvcGRvd24nO1xuXG5cdEBJbnB1dCgpXG5cdGFycm93OiBib29sZWFuID0gdHJ1ZTtcblxuXHRASW5wdXQoKVxuXHRwbGFjZW1lbnQ6IFBsYWNlbWVudDtcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyID0gMTIwO1xuXG5cdEBJbnB1dCgpXG5cdHNob3dPbkhvdmVyOiBib29sZWFuID0gZmFsc2U7XG5cblx0aXNBcnJvd0VuYWJsZWQ6IGJvb2xlYW4gPSB0aGlzLmFycm93O1xuXG5cdGNvbnRhaW5lcldpZHRoOiBudW1iZXI7XG5cblx0Y29udGFpbmVySGVpZ2h0OiBudW1iZXI7XG5cblx0d2luZG93U2l6ZTogbnVtYmVyO1xuXG5cdGhvcml6b250YWxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdGJvdHRvbVBvc2l0aW9uOiBudW1iZXI7XG5cblx0dG9wUG9zaXRpb246IG51bWJlcjtcblxuXHRhcnJvd0RpcmVjdGlvbjogRGlyZWN0aW9uID0gRGlyZWN0aW9uLkJPVFRPTTtcblxuXHRwcml2YXRlIGNhbk9wZW5Eb3dud2FyZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIGNhbk9wZW5VcHdhcmQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSB0b3BCb3JkZXJXaWR0aDogbnVtYmVyID0gMTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdlb21ldHJ5U2VydmljZTogR2VvbWV0cnlTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMucGxhY2VtZW50KSB7XG5cdFx0XHR0aGlzLmNoYW5nZVBsYWNlbWVudCgpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmFycm93KSB7XG5cdFx0XHR0aGlzLmlzQXJyb3dFbmFibGVkID0gdGhpcy5hcnJvdztcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmdlb21ldHJ5U2VydmljZVxuXHRcdFx0LndhdGNoR2VvbWV0cnkoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGdlb21ldHJ5OiBHZW9tZXRyeSkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lckhlaWdodCA9IGdlb21ldHJ5LmdldENvbnRhaW5lckhlaWdodCgpO1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lcldpZHRoID0gZ2VvbWV0cnkuZ2V0Q29udGFpbmVyV2lkdGgoKTtcblx0XHRcdFx0dGhpcy5jYW5PcGVuVXB3YXJkID0gZ2VvbWV0cnkuY2FuT3BlblVwd2FyZCgpO1xuXHRcdFx0XHR0aGlzLmNhbk9wZW5Eb3dud2FyZCA9IGdlb21ldHJ5LmNhbk9wZW5Eb3dud2FyZCgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0cnlUb09wZW4oZXZlbnQ6IGFueSk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJEaXNhYmxlZChldmVudCkpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW5NZW51KCF0aGlzLm9wZW4pO1xuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0dHJ5VG9PcGVuT25Ib3ZlcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zaG93T25Ib3Zlcikge1xuXHRcdFx0dGhpcy5vcGVuTWVudSghdGhpcy5vcGVuKTtcblx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG5cdGhpZGVPbkhvdmVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnNob3dPbkhvdmVyKSB7XG5cdFx0XHR0aGlzLmhpZGVJdGVtcygpO1xuXHRcdFx0dGhpcy5vcGVuID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Y2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLm9wZW5NZW51KGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRpc0RpcmVjdGlvbkxlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNBcnJvd0VuYWJsZWQgJiYgdGhpcy5hcnJvd0RpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxFRlQ7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5NZW51KG9wZW5lZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMub3BlbiA9IG9wZW5lZDtcblxuXHRcdGlmICh0aGlzLm9wZW4pIHtcblx0XHRcdHRoaXMuc2hvd0l0ZW1zKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaGlkZUl0ZW1zKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzaG93SXRlbXMoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1tZW51LW9wZW5lZCcpO1xuXHRcdHRoaXMuZ2VvbWV0cnlTZXJ2aWNlLmNoYW5nZUdlb21ldHJ5KHRoaXMuY29udGFpbmVyUmVmLCB0aGlzLmRyb3Bkb3duTWVudVJlZiwgdGhpcy53aW5kb3dTaXplKTtcblxuXHRcdGlmICh0aGlzLmNhbk9wZW5Eb3dud2FyZCB8fCAhdGhpcy5jYW5PcGVuVXB3YXJkKSB7XG5cdFx0XHR0aGlzLm9wZW5Eb3dud2FyZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW5VcHdhcmQoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wbGFjZW1lbnQgPT09IFBsYWNlbWVudC5SaWdodCkge1xuXHRcdFx0dGhpcy5vcGVuUmlnaHQoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wbGFjZW1lbnQgPT09IFBsYWNlbWVudC5MZWZ0KSB7XG5cdFx0XHR0aGlzLm9wZW5MZWZ0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvcGVuRG93bndhcmQoKTogdm9pZCB7XG5cdFx0dGhpcy50b3BQb3NpdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5ib3R0b21Qb3NpdGlvbiA9IHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBvcGVuVXB3YXJkKCk6IHZvaWQge1xuXHRcdHRoaXMuYm90dG9tUG9zaXRpb24gPSBudWxsO1xuXHRcdHRoaXMudG9wUG9zaXRpb24gPSB0aGlzLmNvbnRhaW5lckhlaWdodDtcblx0fVxuXG5cdHByaXZhdGUgb3BlblJpZ2h0KCk6IHZvaWQge1xuXHRcdHRoaXMuYm90dG9tUG9zaXRpb24gPSAtdGhpcy50b3BCb3JkZXJXaWR0aDtcblx0XHR0aGlzLnRvcFBvc2l0aW9uID0gbnVsbDtcblx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IHRoaXMuY29udGFpbmVyV2lkdGg7XG5cdH1cblxuXHRwcml2YXRlIG9wZW5MZWZ0KCk6IHZvaWQge1xuXHRcdHRoaXMuYm90dG9tUG9zaXRpb24gPSAtdGhpcy50b3BCb3JkZXJXaWR0aDtcblx0XHR0aGlzLnRvcFBvc2l0aW9uID0gbnVsbDtcblx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IC0odGhpcy5jb250YWluZXJXaWR0aCArIDEpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGFuZ2VQbGFjZW1lbnQoKTogdm9pZCB7XG5cblx0XHRzd2l0Y2ggKHRoaXMucGxhY2VtZW50KSB7XG5cblx0XHRcdGNhc2UgUGxhY2VtZW50LlJpZ2h0OiB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5kcm9wZG93bk1lbnVSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kcm9wZG93bi1sZWZ0Jyk7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5kcm9wZG93bk1lbnVSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kcm9wZG93bi1yaWdodCcpO1xuXHRcdFx0XHR0aGlzLmFycm93RGlyZWN0aW9uID0gRGlyZWN0aW9uLlJJR0hUO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBQbGFjZW1lbnQuTGVmdDoge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKHRoaXMuZHJvcGRvd25NZW51UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZHJvcGRvd24tcmlnaHQnKTtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLmRyb3Bkb3duTWVudVJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRyb3Bkb3duLWxlZnQnKTtcblx0XHRcdFx0dGhpcy5hcnJvd0RpcmVjdGlvbiA9IERpcmVjdGlvbi5MRUZUO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBoaWRlSXRlbXMoKTogdm9pZCB7XG5cdFx0Y29uc3QgaXRlbXNFbEhhc09wZW5DbGFzcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZ3VpLW1lbnUtb3BlbmVkJyk7XG5cblx0XHRpZiAoaXRlbXNFbEhhc09wZW5DbGFzcykge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1tZW51LW9wZW5lZCcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJDbGlja2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyRGlzYWJsZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdndWktZGlzYWJsZWQnKTtcblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoZWxlbWVudDogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuYW1lKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQ2xhc3MoZWxlbWVudDogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBuYW1lKTtcblx0fVxufVxuIiwiPGRpdiAjY29udGFpbmVyXG5cdCAoY2xpY2spPVwidHJ5VG9PcGVuKCRldmVudClcIlxuXHQgKGRvY3VtZW50OmNsaWNrKT1cImNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcblx0IChtb3VzZWVudGVyKT1cInRyeVRvT3Blbk9uSG92ZXIoKVwiXG5cdCAobW91c2VsZWF2ZSk9XCJoaWRlT25Ib3ZlcigpXCJcblx0IFtjbGFzcy5ndWktYXJyb3ctbGVmdF09XCJpc0RpcmVjdGlvbkxlZnQoKVwiXG5cdCBbY2xhc3MuZ3VpLWRpc2FibGVkXT1cImRpc2FibGVkXCJcblx0IFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiXG5cdCBjbGFzcz1cImd1aS1kcm9wZG93bi1jb250YWluZXJcIj5cblxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLWRyb3Bkb3duLXRleHRcIj57e2Ryb3Bkb3duVGV4dH19PC9kaXY+XG5cblx0PGRpdiAqbmdJZj1cImlzQXJyb3dFbmFibGVkXCJcblx0XHRbY2xhc3MuZ3VpLWRyb3Bkb3duLWFycm93XT1cImlzQXJyb3dFbmFibGVkXCI+XG5cdFx0PGd1aS1hcnJvdy1pY29uIFtkaXJlY3Rpb25dPVwiYXJyb3dEaXJlY3Rpb25cIj48L2d1aS1hcnJvdy1pY29uPlxuXHQ8L2Rpdj5cblxuXHQ8ZGl2ICNkcm9wZG93bk1lbnVcblx0XHQgW3N0eWxlLmJvdHRvbS5weF09XCJ0b3BQb3NpdGlvblwiXG5cdFx0IFtzdHlsZS5sZWZ0LnB4XT1cImhvcml6b250YWxQb3NpdGlvblwiXG5cdFx0IFtzdHlsZS50b3AucHhdPVwiYm90dG9tUG9zaXRpb25cIlxuXHRcdCBjbGFzcz1cImd1aS1kcm9wZG93bi1tZW51XCI+XG5cdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuIl19