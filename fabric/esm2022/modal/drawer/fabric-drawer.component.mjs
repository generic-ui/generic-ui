import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./fabric-drawer.service";
import * as i2 from "../../themes/fabric-modal-theme.service";
import * as i3 from "../../common/icons/close-icon/fabric-close-icon.component";
export class FabricDrawerComponent extends FabricThemedComponent {
    componentFactoryResolver;
    changeDetectorRef;
    elRef;
    dialogService;
    container;
    width = '400px';
    closeOnClickOutside = false;
    dialogNestedComponent;
    visible = false;
    isFixed = false;
    constructor(componentFactoryResolver, changeDetectorRef, elRef, dialogService, themeModalService, renderer) {
        super(elRef, renderer, themeModalService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        this.dialogService = dialogService;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricDrawerComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.FabricDrawerService }, { token: i2.FabricModalThemeService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FabricDrawerComponent, selector: "ng-component", viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }], usesInheritance: true, ngImport: i0, template: "<div (document:click)=\"clickOutside($event)\"\n\t [class.gui-drawer-fixed]=\"isFixed\"\n\t [class.gui-drawer-visible]=\"visible\"\n\t [style.max-width]=\"width\"\n\t class=\"gui-drawer-wrapper\">\n\t<div\n\t\tclass=\"gui-drawer-content\">\n\t\t<gui-close-icon (click)=\"closeDrawer()\"></gui-close-icon>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n", styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;height:100%;width:auto;position:absolute;padding-left:50px;right:0;top:0;overflow:hidden;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;height:100%;position:relative;margin-left:auto;-ms-transform:translateX(100%);transform:translate(100%);transition:all .3s ease-in-out}.gui-drawer-wrapper.gui-drawer-visible .gui-drawer-content{-ms-transform:translateX(0);transform:translate(0);box-shadow:-6px 0 16px -8px #00000014,-9px 0 28px #0000000d,-12px 0 48px 16px #00000008}.gui-drawer-wrapper.gui-drawer-fixed{position:fixed;height:100vh}\n", ".gui-dark .gui-drawer-wrapper .gui-drawer-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"], dependencies: [{ kind: "component", type: i3.FabricCloseIconComponent, selector: "gui-close-icon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricDrawerComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div (document:click)=\"clickOutside($event)\"\n\t [class.gui-drawer-fixed]=\"isFixed\"\n\t [class.gui-drawer-visible]=\"visible\"\n\t [style.max-width]=\"width\"\n\t class=\"gui-drawer-wrapper\">\n\t<div\n\t\tclass=\"gui-drawer-content\">\n\t\t<gui-close-icon (click)=\"closeDrawer()\"></gui-close-icon>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n", styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;height:100%;width:auto;position:absolute;padding-left:50px;right:0;top:0;overflow:hidden;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;height:100%;position:relative;margin-left:auto;-ms-transform:translateX(100%);transform:translate(100%);transition:all .3s ease-in-out}.gui-drawer-wrapper.gui-drawer-visible .gui-drawer-content{-ms-transform:translateX(0);transform:translate(0);box-shadow:-6px 0 16px -8px #00000014,-9px 0 28px #0000000d,-12px 0 48px 16px #00000008}.gui-drawer-wrapper.gui-drawer-fixed{position:fixed;height:100vh}\n", ".gui-dark .gui-drawer-wrapper .gui-drawer-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.FabricDrawerService }, { type: i2.FabricModalThemeService }, { type: i0.Renderer2 }]; }, propDecorators: { container: [{
                type: ViewChild,
                args: ['container', { read: ViewContainerRef, static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvZHJhd2VyL2ZhYnJpYy1kcmF3ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2RyYXdlci9mYWJyaWMtZHJhd2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFFdkIsU0FBUyxFQUtULFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVczQyxNQUFNLE9BQU8scUJBQXNCLFNBQVEscUJBQXFCO0lBZWxDO0lBQ1Q7SUFDQTtJQUNBO0lBZlgsU0FBUyxDQUFvQjtJQUV0QyxLQUFLLEdBQVcsT0FBTyxDQUFDO0lBRXhCLG1CQUFtQixHQUFZLEtBQUssQ0FBQztJQUVyQyxxQkFBcUIsQ0FBcUM7SUFFMUQsT0FBTyxHQUFZLEtBQUssQ0FBQztJQUV6QixPQUFPLEdBQVksS0FBSyxDQUFDO0lBRXpCLFlBQTZCLHdCQUFrRCxFQUMzRCxpQkFBb0MsRUFDcEMsS0FBaUIsRUFDakIsYUFBa0MsRUFDbkQsaUJBQTBDLEVBQzFDLFFBQW1CO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFOZCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7SUFJdEQsQ0FBQztJQUVELGVBQWU7UUFDZCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFN0IsS0FBSyxDQUFDLEVBQUUsQ0FBQzthQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3RCLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkI7U0FDRDtJQUNGLENBQUM7SUFFRCxhQUFhO1FBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxLQUFVO1FBQ3BDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFdkYsSUFBSSxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVPLHFCQUFxQjtRQUM1QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFFM0csSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdkM7SUFDRixDQUFDO3dHQXRFVyxxQkFBcUI7NEZBQXJCLHFCQUFxQix1SUFFRCxnQkFBZ0Isb0RDL0JqRCxrWEFXQTs7NEZEa0JhLHFCQUFxQjtrQkFUakMsU0FBUztzQ0FNUSx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJO3dRQUs1QixTQUFTO3NCQURqQixTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0RWxlbWVudFJlZixcblx0UmVuZGVyZXIyLFxuXHRUeXBlLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2ZhYnJpYy5uZXN0ZWQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEcmF3ZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZHJhd2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljVGhlbWVkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2ZhYnJpYy10aGVtZWQtY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGhlbWVzL2ZhYnJpYy1tb2RhbC10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLWRyYXdlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1kcmF3ZXIuY29tcG9uZW50LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtZHJhd2VyLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RyYXdlckNvbXBvbmVudCBleHRlbmRzIEZhYnJpY1RoZW1lZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiBmYWxzZSB9KVxuXHRyZWFkb25seSBjb250YWluZXI/OiBWaWV3Q29udGFpbmVyUmVmO1xuXG5cdHdpZHRoOiBzdHJpbmcgPSAnNDAwcHgnO1xuXG5cdGNsb3NlT25DbGlja091dHNpZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRkaWFsb2dOZXN0ZWRDb21wb25lbnQhOiBUeXBlPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD47XG5cblx0dmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGlzRml4ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkaWFsb2dTZXJ2aWNlOiBGYWJyaWNEcmF3ZXJTZXJ2aWNlLFxuXHRcdFx0XHR0aGVtZU1vZGFsU2VydmljZTogRmFicmljTW9kYWxUaGVtZVNlcnZpY2UsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0XHRzdXBlcihlbFJlZiwgcmVuZGVyZXIsIHRoZW1lTW9kYWxTZXJ2aWNlKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblxuXHRcdHRoaXMuY3JlYXRlTmVzdGVkQ29tcG9uZW50KCk7XG5cblx0XHR0aW1lcig1MClcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNsb3NlRHJhd2VyKCk6IHZvaWQge1xuXHRcdHRoaXMuZGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0Y2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlKSB7XG5cdFx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQpKSB7XG5cdFx0XHRcdHRoaXMuY2xvc2VEcmF3ZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGRpYWxvZ0NvbnRlbnRSZWYgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS1kcmF3ZXItY29udGVudCcpO1xuXG5cdFx0aWYgKGRpYWxvZ0NvbnRlbnRSZWYpIHtcblx0XHRcdHJldHVybiAhZGlhbG9nQ29udGVudFJlZi5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTmVzdGVkQ29tcG9uZW50KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmNvbnRhaW5lcikge1xuXHRcdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuZGlhbG9nTmVzdGVkQ29tcG9uZW50KTtcblxuXHRcdFx0dGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cbn1cbiIsIjxkaXYgKGRvY3VtZW50OmNsaWNrKT1cImNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcblx0IFtjbGFzcy5ndWktZHJhd2VyLWZpeGVkXT1cImlzRml4ZWRcIlxuXHQgW2NsYXNzLmd1aS1kcmF3ZXItdmlzaWJsZV09XCJ2aXNpYmxlXCJcblx0IFtzdHlsZS5tYXgtd2lkdGhdPVwid2lkdGhcIlxuXHQgY2xhc3M9XCJndWktZHJhd2VyLXdyYXBwZXJcIj5cblx0PGRpdlxuXHRcdGNsYXNzPVwiZ3VpLWRyYXdlci1jb250ZW50XCI+XG5cdFx0PGd1aS1jbG9zZS1pY29uIChjbGljayk9XCJjbG9zZURyYXdlcigpXCI+PC9ndWktY2xvc2UtaWNvbj5cblx0XHQ8bmctdGVtcGxhdGUgI2NvbnRhaW5lcj48L25nLXRlbXBsYXRlPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuIl19