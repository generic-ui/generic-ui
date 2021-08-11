/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, Input, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricDrawerService } from './fabric-drawer.service';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../themes/fabric-modal-theme.service';
var FabricDrawerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricDrawerComponent, _super);
    function FabricDrawerComponent(componentFactoryResolver, changeDetectorRef, elRef, dialogService, themeModalService, renderer) {
        var _this = _super.call(this, elRef, renderer, themeModalService) || this;
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
        _super.prototype.ngAfterViewInit.call(this);
        this.createNestedComponent(this.dialogNestedComponent);
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
        this.changeDetectorRef.detectChanges();
    };
    FabricDrawerComponent.decorators = [
        { type: Component, args: [{
                    template: "<div (document:click)=\"clickOutside($event)\"\n\t class=\"gui-drawer-wrapper\">\n\t<div class=\"gui-drawer-content\">\n\t\t<gui-close-icon (click)=\"closeDrawer()\"></gui-close-icon>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;height:100%;position:absolute;right:0;top:0;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;box-shadow:-3px 0 4px 0 #ccc;height:100%;max-width:400px;position:relative}"]
                }] }
    ];
    /** @nocollapse */
    FabricDrawerComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FabricDrawerService },
        { type: FabricModalThemeService },
        { type: Renderer2 }
    ]; };
    FabricDrawerComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }],
        closeOnClickOutside: [{ type: Input }]
    };
    return FabricDrawerComponent;
}(FabricThemedComponent));
export { FabricDrawerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJtb2RhbC9kcmF3ZXIvZmFicmljLWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxFQUVULFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWxGO0lBTTJDLGlEQUFxQjtJQVUvRCwrQkFBNkIsd0JBQWtELEVBQzNELGlCQUFvQyxFQUNwQyxLQUFpQixFQUNqQixhQUFrQyxFQUNuRCxpQkFBMEMsRUFDMUMsUUFBbUI7UUFMdEIsWUFNQyxrQkFBTSxLQUFLLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixDQUFDLFNBQ3pDO1FBUDRCLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLG1CQUFhLEdBQWIsYUFBYSxDQUFxQjtRQVB0RCx5QkFBbUIsR0FBWSxLQUFLLENBQUM7O0lBV3JDLENBQUM7Ozs7SUFFRCwrQ0FBZTs7O0lBQWY7UUFDQyxpQkFBTSxlQUFlLFdBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCw0Q0FBWTs7OztJQUFaLFVBQWEsS0FBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ25CO1NBQ0Q7SUFDRixDQUFDOzs7Ozs7SUFFTyxrREFBa0I7Ozs7O0lBQTFCLFVBQTJCLEtBQVU7O1lBQzlCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUV0RixJQUFJLGdCQUFnQixFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hEO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8scURBQXFCOzs7OztJQUE3QixVQUE4QixTQUE0Qzs7WUFDbkUsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztRQUV6RixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDOztnQkF2REQsU0FBUyxTQUFDO29CQUNWLG1RQUE2QztvQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDckM7Ozs7Z0JBbkJBLHdCQUF3QjtnQkFGeEIsaUJBQWlCO2dCQUdqQixVQUFVO2dCQVNGLG1CQUFtQjtnQkFFbkIsdUJBQXVCO2dCQVQvQixTQUFTOzs7NEJBbUJSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtzQ0FHaEUsS0FBSzs7SUE4Q1AsNEJBQUM7Q0FBQSxBQXpERCxDQU0yQyxxQkFBcUIsR0FtRC9EO1NBbkRZLHFCQUFxQjs7O0lBRWpDLDBDQUM0Qjs7SUFFNUIsb0RBQ3FDOztJQUVyQyxzREFBeUQ7Ozs7O0lBRTdDLHlEQUFtRTs7Ozs7SUFDNUUsa0RBQXFEOzs7OztJQUNyRCxzQ0FBa0M7Ozs7O0lBQ2xDLDhDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdEVsZW1lbnRSZWYsXG5cdElucHV0LFxuXHRSZW5kZXJlcjIsXG5cdFR5cGUsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vZmFicmljLm5lc3RlZC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RyYXdlclNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kcmF3ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNUaGVtZWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLXRoZW1lZC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGVVcmw6ICcuL2ZhYnJpYy1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9mYWJyaWMtZHJhd2VyLm5neC5zY3NzJ10sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RyYXdlckNvbXBvbmVudCBleHRlbmRzIEZhYnJpY1RoZW1lZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiBmYWxzZSB9KVxuXHRjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cblx0QElucHV0KClcblx0Y2xvc2VPbkNsaWNrT3V0c2lkZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGRpYWxvZ05lc3RlZENvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRpYWxvZ1NlcnZpY2U6IEZhYnJpY0RyYXdlclNlcnZpY2UsXG5cdFx0XHRcdHRoZW1lTW9kYWxTZXJ2aWNlOiBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSxcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHRcdHN1cGVyKGVsUmVmLCByZW5kZXJlciwgdGhlbWVNb2RhbFNlcnZpY2UpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXHRcdHRoaXMuY3JlYXRlTmVzdGVkQ29tcG9uZW50KHRoaXMuZGlhbG9nTmVzdGVkQ29tcG9uZW50KTtcblx0fVxuXG5cdGNsb3NlRHJhd2VyKCkge1xuXHRcdHRoaXMuZGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0Y2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlKSB7XG5cdFx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQpKSB7XG5cdFx0XHRcdHRoaXMuY2xvc2VEcmF3ZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyQ2xpY2tlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgZGlhbG9nQ29udGVudFJlZiA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3VpLWRyYXdlci1jb250ZW50Jyk7XG5cblx0XHRpZiAoZGlhbG9nQ29udGVudFJlZikge1xuXHRcdFx0cmV0dXJuICFkaWFsb2dDb250ZW50UmVmLmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVOZXN0ZWRDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4pOiB2b2lkIHtcblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblxuXHRcdHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG59XG4iXX0=