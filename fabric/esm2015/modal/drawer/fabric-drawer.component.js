/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, Input, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricDrawerService } from './fabric-drawer.service';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../themes/fabric-modal-theme.service';
export class FabricDrawerComponent extends FabricThemedComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} changeDetectorRef
     * @param {?} elRef
     * @param {?} dialogService
     * @param {?} themeModalService
     * @param {?} renderer
     */
    constructor(componentFactoryResolver, changeDetectorRef, elRef, dialogService, themeModalService, renderer) {
        super(elRef, renderer, themeModalService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        this.dialogService = dialogService;
        this.closeOnClickOutside = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.createNestedComponent(this.dialogNestedComponent);
    }
    /**
     * @return {?}
     */
    closeDrawer() {
        this.dialogService.close();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickOutside(event) {
        if (this.closeOnClickOutside) {
            if (this.isContainerClicked(event)) {
                this.closeDrawer();
            }
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    isContainerClicked(event) {
        /** @type {?} */
        const dialogContentRef = this.elRef.nativeElement.querySelector('.gui-drawer-content');
        if (dialogContentRef) {
            return !dialogContentRef.contains(event.target);
        }
    }
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    createNestedComponent(component) {
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container.createComponent(componentFactory);
        this.changeDetectorRef.detectChanges();
    }
}
FabricDrawerComponent.decorators = [
    { type: Component, args: [{
                template: "<div (document:click)=\"clickOutside($event)\"\n\t class=\"gui-drawer-wrapper\">\n\t<div class=\"gui-drawer-content\">\n\t\t<gui-close-icon (click)=\"closeDrawer()\"></gui-close-icon>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;height:100%;position:absolute;right:0;top:0;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;box-shadow:-3px 0 4px 0 #ccc;height:100%;max-width:400px;position:relative}"]
            }] }
];
/** @nocollapse */
FabricDrawerComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: FabricDrawerService },
    { type: FabricModalThemeService },
    { type: Renderer2 }
];
FabricDrawerComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }],
    closeOnClickOutside: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJtb2RhbC9kcmF3ZXIvZmFicmljLWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFRbEYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHFCQUFxQjs7Ozs7Ozs7O0lBVS9ELFlBQTZCLHdCQUFrRCxFQUMzRCxpQkFBb0MsRUFDcEMsS0FBaUIsRUFDakIsYUFBa0MsRUFDbkQsaUJBQTBDLEVBQzFDLFFBQW1CO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFOZCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFQdEQsd0JBQW1CLEdBQVksS0FBSyxDQUFDO0lBV3JDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ25CO1NBQ0Q7SUFDRixDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxLQUFVOztjQUM5QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUM7UUFFdEYsSUFBSSxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLFNBQTRDOztjQUNuRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO1FBRXpGLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7OztZQXZERCxTQUFTLFNBQUM7Z0JBQ1YsbVFBQTZDO2dCQUU3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3JDOzs7O1lBbkJBLHdCQUF3QjtZQUZ4QixpQkFBaUI7WUFHakIsVUFBVTtZQVNGLG1CQUFtQjtZQUVuQix1QkFBdUI7WUFUL0IsU0FBUzs7O3dCQW1CUixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7a0NBR2hFLEtBQUs7Ozs7SUFITiwwQ0FDNEI7O0lBRTVCLG9EQUNxQzs7SUFFckMsc0RBQXlEOzs7OztJQUU3Qyx5REFBbUU7Ozs7O0lBQzVFLGtEQUFxRDs7Ozs7SUFDckQsc0NBQWtDOzs7OztJQUNsQyw4Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRFbGVtZW50UmVmLFxuXHRJbnB1dCxcblx0UmVuZGVyZXIyLFxuXHRUeXBlLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2ZhYnJpYy5uZXN0ZWQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEcmF3ZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZHJhd2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljVGhlbWVkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2ZhYnJpYy10aGVtZWQtY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGhlbWVzL2ZhYnJpYy1tb2RhbC10aGVtZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZmFicmljLWRyYXdlci5uZ3guc2NzcyddLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEcmF3ZXJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNUaGVtZWRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogZmFsc2UgfSlcblx0Y29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG5cdEBJbnB1dCgpXG5cdGNsb3NlT25DbGlja091dHNpZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRkaWFsb2dOZXN0ZWRDb21wb25lbnQ6IFR5cGU8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkaWFsb2dTZXJ2aWNlOiBGYWJyaWNEcmF3ZXJTZXJ2aWNlLFxuXHRcdFx0XHR0aGVtZU1vZGFsU2VydmljZTogRmFicmljTW9kYWxUaGVtZVNlcnZpY2UsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0XHRzdXBlcihlbFJlZiwgcmVuZGVyZXIsIHRoZW1lTW9kYWxTZXJ2aWNlKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHR0aGlzLmNyZWF0ZU5lc3RlZENvbXBvbmVudCh0aGlzLmRpYWxvZ05lc3RlZENvbXBvbmVudCk7XG5cdH1cblxuXHRjbG9zZURyYXdlcigpIHtcblx0XHR0aGlzLmRpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdGNsaWNrT3V0c2lkZShldmVudDogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNDb250YWluZXJDbGlja2VkKGV2ZW50KSkge1xuXHRcdFx0XHR0aGlzLmNsb3NlRHJhd2VyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGRpYWxvZ0NvbnRlbnRSZWYgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS1kcmF3ZXItY29udGVudCcpO1xuXG5cdFx0aWYgKGRpYWxvZ0NvbnRlbnRSZWYpIHtcblx0XHRcdHJldHVybiAhZGlhbG9nQ29udGVudFJlZi5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTmVzdGVkQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+KTogdm9pZCB7XG5cdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxufVxuIl19