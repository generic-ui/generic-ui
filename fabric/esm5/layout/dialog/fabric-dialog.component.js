/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricDialogService } from './fabric-dialog.service';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { DialogComponent } from '../../common/dialog/dialog.component';
var FabricDialogComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricDialogComponent, _super);
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
                    template: "<div class=\"gui-dialog-blanket\"></div>\n<div (click)=\"clickOutside($event)\"\n\t class=\"gui-dialog-wrapper\">\n\t<div class=\"gui-dialog-content\">\n\t\t<a (click)=\"closeDialog()\" class=\"gui-dialog-close\"></a>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-dialog-blanket{background:rgba(0,0,0,.32);position:fixed;height:100%;width:100%;left:0;top:0;pointer-events:none;z-index:1000}.gui-dialog-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Arial;position:fixed;height:100%;width:100%;left:0;top:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:auto;z-index:1000}.gui-dialog-wrapper .gui-dialog-content{background-color:#fff;max-width:400px;position:relative;border-radius:4px;box-shadow:0 3px 7px #999;-webkit-animation:.1s ease-in display-dialog;animation:.1s ease-in display-dialog;padding:24px}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-title{color:#333;font-size:20px;margin:0 0 16px}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close{position:absolute;cursor:pointer;right:8px;top:8px;width:16px;height:16px;opacity:.4}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:hover{opacity:.8}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after,.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before{position:absolute;left:7px;content:' ';height:16px;width:2px;background-color:#333}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}@-webkit-keyframes display-dialog{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes display-dialog{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}", ".gui-dark .gui-dialog-wrapper .gui-dialog-content{background:#424242;color:#bdbdbd;box-shadow:0 1px 2px #424242}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after,.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before{background:#bdbdbd}"]
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
export { FabricDialogComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJsYXlvdXQvZGlhbG9nL2ZhYnJpYy1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdkU7SUFTMkMsaURBQWU7SUFPekQsK0JBQTZCLHdCQUFrRCxFQUMzRCxpQkFBb0MsRUFDcEMsS0FBaUIsRUFDbEMsUUFBbUIsRUFDQyxLQUFZLEVBQ2dDLGFBQWtDO1FBTHJHLFlBTUMsa0JBQU0sS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FDN0I7UUFQNEIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCx1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFdBQUssR0FBTCxLQUFLLENBQVk7UUFHOEIsbUJBQWEsR0FBYixhQUFhLENBQXFCOztJQUVyRyxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCw0Q0FBWTs7OztJQUFaLFVBQWEsS0FBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzNCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0RBQWtCOzs7OztJQUExQixVQUEyQixLQUFVOztZQUM5QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUM7UUFFdEYsSUFBSSxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7Ozs7OztJQUVPLHFEQUFxQjs7Ozs7SUFBN0IsVUFBOEIsU0FBb0I7O1lBQzNDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFFekYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkFyREQsU0FBUyxTQUFDO29CQUNWLHFTQUE2QztvQkFLN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDckM7Ozs7Z0JBeEJBLHdCQUF3QjtnQkFGeEIsaUJBQWlCO2dCQUdqQixVQUFVO2dCQUdWLFNBQVM7Z0JBUUQsS0FBSyx1QkF3QlQsTUFBTSxTQUFDLFVBQVU7Z0JBekJiLG1CQUFtQix1QkEwQnZCLE1BQU0sU0FBQyxVQUFVOzs7d0JBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixFQUFDOzs7NEJBVi9DLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUE0Q2xFLDRCQUFDO0NBQUEsQUF2REQsQ0FTMkMsZUFBZSxHQThDekQ7U0E5Q1kscUJBQXFCOzs7SUFFakMsMENBQzRCOztJQUU1QixzREFBaUM7Ozs7O0lBRXJCLHlEQUFtRTs7Ozs7SUFDNUUsa0RBQXFEOzs7OztJQUNyRCxzQ0FBa0M7Ozs7O0lBR2xDLDhDQUFrRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdEVsZW1lbnRSZWYsXG5cdGZvcndhcmRSZWYsXG5cdEluamVjdCxcblx0UmVuZGVyZXIyLFxuXHRUeXBlLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgdGhlbWVUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZS50b2tlbic7XG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGVVcmw6ICcuL2ZhYnJpYy1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9mYWJyaWMtZGlhbG9nLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLWRpYWxvZy5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEaWFsb2dDb21wb25lbnQgZXh0ZW5kcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogZmFsc2UgfSlcblx0Y29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG5cdGRpYWxvZ05lc3RlZENvbXBvbmVudDogVHlwZTxhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRyZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRASW5qZWN0KHRoZW1lVG9rZW4pIHRoZW1lOiBUaGVtZSxcblx0XHRcdFx0QEluamVjdChmb3J3YXJkUmVmKCgpID0+IEZhYnJpY0RpYWxvZ1NlcnZpY2UpKSBwcml2YXRlIHJlYWRvbmx5IGRpYWxvZ1NlcnZpY2U6IEZhYnJpY0RpYWxvZ1NlcnZpY2UpIHtcblx0XHRzdXBlcihlbFJlZiwgcmVuZGVyZXIsIHRoZW1lKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmNyZWF0ZU5lc3RlZENvbXBvbmVudCh0aGlzLmRpYWxvZ05lc3RlZENvbXBvbmVudCk7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0dGhpcy5hZGRUaGVtZSgpO1xuXHR9XG5cblx0Y2xvc2VEaWFsb2coKSB7XG5cdFx0dGhpcy5kaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMuZGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJDbGlja2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRjb25zdCBkaWFsb2dDb250ZW50UmVmID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWktZGlhbG9nLWNvbnRlbnQnKTtcblxuXHRcdGlmIChkaWFsb2dDb250ZW50UmVmKSB7XG5cdFx0XHRyZXR1cm4gIWRpYWxvZ0NvbnRlbnRSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU5lc3RlZENvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Pik6IHZvaWQge1xuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXG5cdFx0dGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXHR9XG5cbn1cbiJdfQ==