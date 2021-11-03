import { ChangeDetectionStrategy, Component, Inject, Input, PLATFORM_ID, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Direction } from '../../common/icons/arrow-icon/direction';
import { fromEvent } from 'rxjs';
import { FabricReactive } from '../../common/fabric-reactive';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../common/icons/arrow-icon/fabric-arrow-icon.component";
import * as i3 from "../../common/svg-template/fabric-svg-template";
const _c0 = ["tab"];
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
export class FabricTabComponent extends FabricReactive {
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
        i0.ɵɵviewQuery(_c0, 5);
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
    } }, directives: [i1.NgIf, i1.NgForOf, i2.FabricArrowIconComponent, i3.FabricSvgTemplate], styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fff;border-color:#d6d6d6;border-radius:0 0 4px 4px;border-style:solid;border-width:1px;padding:12px}.gui-tab .gui-tab-menu{display:-ms-flexbox;display:flex;margin-bottom:-1px}.gui-tab .gui-tab-menu .gui-tab-menu-list{border-radius:4px 4px 0 0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden}.gui-tab .gui-tab-menu .gui-tab-menu-item{background:#fafafa;border-color:#d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;box-sizing:border-box;cursor:pointer;display:inline-block;height:34px;margin-right:2px;padding:8px 16px;position:relative;text-align:center;white-space:nowrap}.gui-tab .gui-tab-menu .gui-tab-menu-item:nth-last-child(1){margin-right:0}.gui-tab .gui-tab-menu .gui-tab-menu-item svg{height:16px;width:16px}.gui-tab .gui-tab-menu .gui-tab-menu-item svg path{fill:#aaa}.gui-tab .gui-tab-menu .scroll-button{background:transparent;box-sizing:border-box;color:#ccc;cursor:pointer;font-weight:bold;height:34px;padding:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-menu .scroll-button:hover svg path{stroke:#464646}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fff;border-color:#d6d6d6 #d6d6d6 #fff #d6d6d6;border-radius:4px 4px 0 0;border-style:solid;border-width:1px;color:#2185d0}.gui-tab .gui-active.gui-tab-menu-item svg path{fill:#2185d0}.gui-tab .gui-active.gui-tab-item{display:block}\n", ".gui-material .gui-tab{font:14px Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{background:#616161;border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent #616161;color:#ce93d8}\n"], encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9sYXlvdXQvdGFiL3RhYi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbGF5b3V0L3RhYi90YWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsTUFBTSxFQUNOLEtBQUssRUFDTCxXQUFXLEVBR1gsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7O0lDZGxELDhCQUV3QjtJQUZuQixpTEFBdUIsS0FBSyxLQUFFO0lBR2xDLG9DQUE4RDtJQUMvRCxpQkFBTTs7O0lBRFcsZUFBNEI7SUFBNUIsaURBQTRCOzs7SUFTM0MsNEJBQTBCO0lBQUEsWUFBTztJQUFBLGlCQUFPOzs7SUFBZCxlQUFPO0lBQVAsNEJBQU87OztJQUNqQyw2QkFBaUM7SUFDaEMsdUNBQXFEO0lBQ3RELDBCQUFlOzs7SUFESSxlQUFlO0lBQWYsZ0NBQWU7Ozs7SUFQbkMsa0NBSTRCO0lBSDFCLHFQQUF3QjtJQUl6Qiw0RUFBd0M7SUFDeEMsNEZBRWU7SUFDaEIsaUJBQU07Ozs7SUFOSixxREFBaUM7SUFFM0IsZUFBaUI7SUFBakIsNENBQWlCO0lBQ1QsZUFBZ0I7SUFBaEIsMkNBQWdCOzs7O0lBTWpDLDhCQUV3QjtJQUZu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QUl2QyxXQUFXO2tCQURWLFlBQVk7bUJBQUMsYUFBYTtZQUkzQixJQUFJO2tCQURILEtBQUs7WUFJTixNQUFNO2tCQURMLEtBQUs7WUFJTixZQUFZO2tCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0UExBVEZPUk1fSUQsXG5cdFF1ZXJ5TGlzdCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdDaGlsZHJlbixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9kaXJlY3Rpb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR3VpVGFiSXRlbSB9IGZyb20gJy4vZmFicmljLXRhYi1pdGVtJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXRhYicsXG5cdHRlbXBsYXRlVXJsOiAnLi90YWIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi90YWIubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy90YWIubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy90YWIuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS10YWJdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljVGFiQ29tcG9uZW50IGV4dGVuZHMgRmFicmljUmVhY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRAVmlld0NoaWxkKCd0YWInLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0dGFiUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBWaWV3Q2hpbGQoJ3RhYkl0ZW0nLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0dGFiSXRlbVJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkcmVuKCd0YWJNZW51TGlzdCcpXG5cdHRhYk1lbnVMaXN0OiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cblx0QElucHV0KClcblx0bWVudTogQXJyYXk8c3RyaW5nIHwgR3VpVGFiSXRlbT47XG5cblx0QElucHV0KClcblx0YWN0aXZlOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0c2Nyb2xsQWN0aXZlOiBib29sZWFuO1xuXG5cdERpcmVjdGlvbiA9IERpcmVjdGlvbjtcblxuXHRwcml2YXRlIGxpc3RQb3NpdGlvbjogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBtZW51TGlzdFdpZHRoOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHJlYWRvbmx5IHNjcm9sbEFtb3VudCA9IDYwO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgQUNUSVZFX1RBQl9DTEFTU19OQU1FID0gJ2d1aS1hY3RpdmUnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnRvZ2dsZVRhYih0aGlzLmFjdGl2ZSk7XG5cdFx0dGhpcy5jYWxjdWxhdGVNZW51V2lkdGgoKTtcblx0XHR0aGlzLnNob3dNZW51QXJyb3dzKCk7XG5cdFx0dGhpcy5jaGVja0lmTWVudUZpdHNPblJlc2l6ZSgpO1xuXHR9XG5cblx0dG9nZ2xlVGFiKHRhYjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVBY3RpdmUoKTtcblx0XHR0aGlzLnNldEFjdGl2ZSh0YWIpO1xuXHR9XG5cblx0aXNTdmcoaXRlbTogc3RyaW5nIHwgR3VpVGFiSXRlbSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCc7XG5cdH1cblxuXHRnZXRUYWJOYW1lKGl0ZW06IHN0cmluZyB8IEd1aVRhYkl0ZW0pOiBzdHJpbmcge1xuXHRcdHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgPyBpdGVtLm5hbWUgOiBpdGVtO1xuXHR9XG5cblx0c2Nyb2xsVGFiTGlzdChzY3JvbGxSaWdodENsaWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRjb25zdCBsaXN0V2lkdGggPSB0aGlzLnRhYlJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWktdGFiLW1lbnUtbGlzdCcpLm9mZnNldFdpZHRoLFxuXHRcdFx0bWVudU92ZXJmbG93ID0gdGhpcy5tZW51TGlzdFdpZHRoIC0gbGlzdFdpZHRoO1xuXG5cdFx0aWYgKHNjcm9sbFJpZ2h0Q2xpY2tlZCAmJiBtZW51T3ZlcmZsb3cgPiB0aGlzLmxpc3RQb3NpdGlvbikge1xuXHRcdFx0dGhpcy5saXN0UG9zaXRpb24gKz0gdGhpcy5zY3JvbGxBbW91bnQ7XG5cdFx0fSBlbHNlIGlmICghc2Nyb2xsUmlnaHRDbGlja2VkICYmIHRoaXMubGlzdFBvc2l0aW9uID4gMCkge1xuXHRcdFx0dGhpcy5saXN0UG9zaXRpb24gLT0gdGhpcy5zY3JvbGxBbW91bnQ7XG5cdFx0fVxuXG5cdFx0dGhpcy50YWJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArICdndWktdGFiLW1lbnUtbGlzdCcpLnNjcm9sbExlZnQgPSB0aGlzLmxpc3RQb3NpdGlvbjtcblx0fVxuXG5cdHByaXZhdGUgc2V0QWN0aXZlKHRhYjogc3RyaW5nIHwgR3VpVGFiSXRlbSk6IHZvaWQge1xuXHRcdGlmICh0eXBlb2YgdGFiID09PSAnb2JqZWN0Jykge1xuXHRcdFx0dGFiID0gdGFiLm5hbWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmF2TWVudVRhYkVsID0gdGhpcy50YWJSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YWI9XCInICsgdGFiICsgJ1wiXScpLFxuXHRcdFx0bmF2VGFiSXRlbUVsID0gdGhpcy50YWJJdGVtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFiPVwiJyArIHRhYiArICdcIl0nKTtcblxuXHRcdHRoaXMuYWRkQ2xhc3MobmF2TWVudVRhYkVsLCB0aGlzLkFDVElWRV9UQUJfQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy5hZGRDbGFzcyhuYXZUYWJJdGVtRWwsIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQWN0aXZlKCk6IHZvaWQge1xuXHRcdGNvbnN0IG5hdk1lbnVUYWJFbCA9IHRoaXMudGFiUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkFDVElWRV9UQUJfQ0xBU1NfTkFNRSksXG5cdFx0XHRuYXZUYWJJdGVtRWwgPSB0aGlzLnRhYkl0ZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMucmVtb3ZlQ2xhc3MobmF2TWVudVRhYkVsLCB0aGlzLkFDVElWRV9UQUJfQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy5yZW1vdmVDbGFzcyhuYXZUYWJJdGVtRWwsIHRoaXMuQUNUSVZFX1RBQl9DTEFTU19OQU1FKTtcblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcpIHtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuYW1lKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGVsZW1lbnQ6IGFueSwgbmFtZTogc3RyaW5nKSB7XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgbmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0lmTWVudUZpdHNPblJlc2l6ZSgpOiB2b2lkIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXG5cdFx0XHRmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgoKSA9PiB0aGlzLnNob3dNZW51QXJyb3dzKCkpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlTWVudVdpZHRoKCk6IHZvaWQge1xuXHRcdHRoaXMubWVudUxpc3RXaWR0aCA9IDA7XG5cdFx0dGhpcy50YWJNZW51TGlzdFxuXHRcdFx0LmZvckVhY2goKGxpc3RJdGVtOiBFbGVtZW50UmVmKSA9PiB7XG5cdFx0XHRcdHRoaXMubWVudUxpc3RXaWR0aCArPSBsaXN0SXRlbS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHNob3dNZW51QXJyb3dzKCk6IHZvaWQge1xuXHRcdGNvbnN0IG1lbnVXaWR0aCA9IHRoaXMudGFiUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS10YWItbWVudScpLm9mZnNldFdpZHRoO1xuXG5cdFx0dGhpcy5zY3JvbGxBY3RpdmUgPSBtZW51V2lkdGggPCB0aGlzLm1lbnVMaXN0V2lkdGg7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxufVxuIiwiPGRpdiAjdGFiPlxuXG5cdDxkaXYgY2xhc3M9XCJndWktdGFiLW1lbnVcIj5cblxuXHRcdDxkaXYgKGNsaWNrKT1cInNjcm9sbFRhYkxpc3QoZmFsc2UpXCJcblx0XHRcdCAqbmdJZj1cInNjcm9sbEFjdGl2ZVwiXG5cdFx0XHQgY2xhc3M9XCJzY3JvbGwtYnV0dG9uXCI+XG5cdFx0XHQ8Z3VpLWFycm93LWljb24gW2RpcmVjdGlvbl09XCJEaXJlY3Rpb24uTEVGVFwiPjwvZ3VpLWFycm93LWljb24+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXRhYi1tZW51LWxpc3RcIj5cblx0XHRcdDxkaXYgI3RhYk1lbnVMaXN0XG5cdFx0XHRcdCAoY2xpY2spPVwidG9nZ2xlVGFiKHRhYilcIlxuXHRcdFx0XHQgKm5nRm9yPVwibGV0IHRhYiBvZiBtZW51XCJcblx0XHRcdFx0IFthdHRyLmRhdGEtdGFiXT1cImdldFRhYk5hbWUodGFiKVwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS10YWItbWVudS1pdGVtXCI+XG5cdFx0XHRcdDxzcGFuICpuZ0lmPVwiIWlzU3ZnKHRhYilcIj57e3RhYn19PC9zcGFuPlxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiaXNTdmcodGFiKVwiPlxuXHRcdFx0XHRcdDxndWktc3ZnLXRlbXBsYXRlIFtzdmddPVwidGFiLnN2Z1wiPjwvZ3VpLXN2Zy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgKGNsaWNrKT1cInNjcm9sbFRhYkxpc3QodHJ1ZSlcIlxuXHRcdFx0ICpuZ0lmPVwic2Nyb2xsQWN0aXZlXCJcblx0XHRcdCBjbGFzcz1cInNjcm9sbC1idXR0b25cIj5cblx0XHRcdDxndWktYXJyb3ctaWNvbj48L2d1aS1hcnJvdy1pY29uPlxuXHRcdDwvZGl2PlxuXG5cdDwvZGl2PlxuXG5cdDxkaXYgI3RhYkl0ZW1cblx0XHQgY2xhc3M9XCJndWktdGFiLWNvbnRlbnRcIj5cblx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdDwvZGl2PlxuPC9kaXY+XG4iXX0=