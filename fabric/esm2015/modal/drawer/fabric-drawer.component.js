import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import * as i0 from "@angular/core";
import * as i1 from "./fabric-drawer.service";
import * as i2 from "../../themes/fabric-modal-theme.service";
import * as i3 from "../../common/icons/close-icon/fabric-close-icon.component";
const _c0 = ["container"];
function FabricDrawerComponent_ng_template_3_Template(rf, ctx) { }
export class FabricDrawerComponent extends FabricThemedComponent {
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
FabricDrawerComponent.ɵfac = function FabricDrawerComponent_Factory(t) { return new (t || FabricDrawerComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FabricDrawerService), i0.ɵɵdirectiveInject(i2.FabricModalThemeService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricDrawerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDrawerComponent, selectors: [["ng-component"]], viewQuery: function FabricDrawerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ViewContainerRef);
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
    } }, directives: [i3.FabricCloseIconComponent], styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;height:100%;position:absolute;right:0;top:0;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;box-shadow:-3px 0 4px #ccc;height:100%;max-width:400px;position:relative}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDrawerComponent, [{
        type: Component,
        args: [{
                templateUrl: './fabric-drawer.component.html',
                styleUrls: ['./fabric-drawer.ngx.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.FabricDrawerService }, { type: i2.FabricModalThemeService }, { type: i0.Renderer2 }]; }, { container: [{
            type: ViewChild,
            args: ['container', { read: ViewContainerRef, static: false }]
        }], closeOnClickOutside: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvZHJhd2VyL2ZhYnJpYy1kcmF3ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2RyYXdlci9mYWJyaWMtZHJhd2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFFdkIsU0FBUyxFQUdULEtBQUssRUFHTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7OztBQVNuRixNQUFNLE9BQU8scUJBQXNCLFNBQVEscUJBQXFCO0lBVS9ELFlBQTZCLHdCQUFrRCxFQUMzRCxpQkFBb0MsRUFDcEMsS0FBaUIsRUFDakIsYUFBa0MsRUFDbkQsaUJBQTBDLEVBQzFDLFFBQW1CO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFOZCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFQdEQsd0JBQW1CLEdBQVksS0FBSyxDQUFDO0lBV3JDLENBQUM7SUFFRCxlQUFlO1FBQ2QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3RCLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkI7U0FDRDtJQUNGLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxLQUFVO1FBQ3BDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFdkYsSUFBSSxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVPLHFCQUFxQixDQUFDLFNBQTRDO1FBQ3pFLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTFGLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7OzBGQW5EVyxxQkFBcUI7d0VBQXJCLHFCQUFxQjsrQkFFRCxnQkFBZ0I7Ozs7O1FDM0JqRCw4QkFDNkI7UUFEeEIscUdBQWtCLHdCQUFvQixpQ0FBQztRQUUzQyw4QkFBZ0M7UUFDL0IseUNBQXdDO1FBQXhCLDBHQUFTLGlCQUFhLElBQUM7UUFBQyxpQkFBaUI7UUFDekQsdUhBQXNDO1FBQ3ZDLGlCQUFNO1FBQ1AsaUJBQU07O3VGRG1CTyxxQkFBcUI7Y0FOakMsU0FBUztlQUFDO2dCQUNWLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUN2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7b09BSUEsU0FBUztrQkFEUixTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBSWpFLG1CQUFtQjtrQkFEbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdEVsZW1lbnRSZWYsXG5cdElucHV0LFxuXHRSZW5kZXJlcjIsXG5cdFR5cGUsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vZmFicmljLm5lc3RlZC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RyYXdlclNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kcmF3ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNUaGVtZWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLXRoZW1lZC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGVVcmw6ICcuL2ZhYnJpYy1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9mYWJyaWMtZHJhd2VyLm5neC5zY3NzJ10sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RyYXdlckNvbXBvbmVudCBleHRlbmRzIEZhYnJpY1RoZW1lZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiBmYWxzZSB9KVxuXHRjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cblx0QElucHV0KClcblx0Y2xvc2VPbkNsaWNrT3V0c2lkZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGRpYWxvZ05lc3RlZENvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRpYWxvZ1NlcnZpY2U6IEZhYnJpY0RyYXdlclNlcnZpY2UsXG5cdFx0XHRcdHRoZW1lTW9kYWxTZXJ2aWNlOiBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSxcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHRcdHN1cGVyKGVsUmVmLCByZW5kZXJlciwgdGhlbWVNb2RhbFNlcnZpY2UpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXHRcdHRoaXMuY3JlYXRlTmVzdGVkQ29tcG9uZW50KHRoaXMuZGlhbG9nTmVzdGVkQ29tcG9uZW50KTtcblx0fVxuXG5cdGNsb3NlRHJhd2VyKCkge1xuXHRcdHRoaXMuZGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0Y2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlKSB7XG5cdFx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQpKSB7XG5cdFx0XHRcdHRoaXMuY2xvc2VEcmF3ZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyQ2xpY2tlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgZGlhbG9nQ29udGVudFJlZiA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3VpLWRyYXdlci1jb250ZW50Jyk7XG5cblx0XHRpZiAoZGlhbG9nQ29udGVudFJlZikge1xuXHRcdFx0cmV0dXJuICFkaWFsb2dDb250ZW50UmVmLmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVOZXN0ZWRDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4pOiB2b2lkIHtcblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblxuXHRcdHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG59XG4iLCI8ZGl2IChkb2N1bWVudDpjbGljayk9XCJjbGlja091dHNpZGUoJGV2ZW50KVwiXG5cdCBjbGFzcz1cImd1aS1kcmF3ZXItd3JhcHBlclwiPlxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLWRyYXdlci1jb250ZW50XCI+XG5cdFx0PGd1aS1jbG9zZS1pY29uIChjbGljayk9XCJjbG9zZURyYXdlcigpXCI+PC9ndWktY2xvc2UtaWNvbj5cblx0XHQ8bmctdGVtcGxhdGUgI2NvbnRhaW5lcj48L25nLXRlbXBsYXRlPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuIl19