/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricDialogService } from './fabric-dialog.service';
var FabricDialogComponent = /** @class */ (function () {
    function FabricDialogComponent(componentFactoryResolver, changeDetectorRef, elementRef, dialogService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.dialogService = dialogService;
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
        var dialogContentRef = this.elementRef.nativeElement.querySelector('.gui-dialog-content');
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
        { type: FabricDialogService, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return FabricDialogService; })),] }] }
    ]; };
    FabricDialogComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }]
    };
    return FabricDialogComponent;
}());
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
    FabricDialogComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricDialogComponent.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJsYXlvdXQvZGlhbG9nL2ZhYnJpYy1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUVOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlEO0lBZ0JDLCtCQUFvQix3QkFBa0QsRUFDM0QsaUJBQW9DLEVBQ3BDLFVBQXNCLEVBQ3lCLGFBQWtDO1FBSHhFLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0Qsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3lCLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtJQUM1RixDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELDRDQUFZOzs7O0lBQVosVUFBYSxLQUFVO1FBQ3RCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0I7SUFDRixDQUFDOzs7Ozs7SUFFTyxrREFBa0I7Ozs7O0lBQTFCLFVBQTJCLEtBQVU7O1lBQzlCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUUzRixJQUFJLGdCQUFnQixFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hEO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8scURBQXFCOzs7OztJQUE3QixVQUE4QixTQUFvQjs7WUFDM0MsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztRQUV6RixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2dCQWpERCxTQUFTLFNBQUM7b0JBQ1YscVNBQTZDO29CQUs3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUNyQzs7OztnQkFwQkEsd0JBQXdCO2dCQUZ4QixpQkFBaUI7Z0JBR2pCLFVBQVU7Z0JBU0YsbUJBQW1CLHVCQXFCdkIsTUFBTSxTQUFDLFVBQVU7Ozt3QkFBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLEVBQUM7Ozs0QkFSL0MsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQXVDbEUsNEJBQUM7Q0FBQSxBQWxERCxJQWtEQztTQXpDWSxxQkFBcUI7OztJQUVqQywwQ0FDNEI7O0lBRTVCLHNEQUFpQzs7Ozs7SUFFckIseURBQTBEOzs7OztJQUNuRSxrREFBNEM7Ozs7O0lBQzVDLDJDQUE4Qjs7Ozs7SUFDOUIsOENBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0RWxlbWVudFJlZixcblx0Zm9yd2FyZFJlZixcblx0SW5qZWN0LFxuXHRUeXBlLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGlhbG9nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGVVcmw6ICcuL2ZhYnJpYy1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9mYWJyaWMtZGlhbG9nLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLWRpYWxvZy5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogZmFsc2UgfSlcblx0Y29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG5cdGRpYWxvZ05lc3RlZENvbXBvbmVudDogVHlwZTxhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBGYWJyaWNEaWFsb2dTZXJ2aWNlKSkgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBGYWJyaWNEaWFsb2dTZXJ2aWNlKSB7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5jcmVhdGVOZXN0ZWRDb21wb25lbnQodGhpcy5kaWFsb2dOZXN0ZWRDb21wb25lbnQpO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0Y2xvc2VEaWFsb2coKSB7XG5cdFx0dGhpcy5kaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMuZGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJDbGlja2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRjb25zdCBkaWFsb2dDb250ZW50UmVmID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS1kaWFsb2ctY29udGVudCcpO1xuXG5cdFx0aWYgKGRpYWxvZ0NvbnRlbnRSZWYpIHtcblx0XHRcdHJldHVybiAhZGlhbG9nQ29udGVudFJlZi5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTmVzdGVkQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxhbnk+KTogdm9pZCB7XG5cdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdH1cbn1cbiJdfQ==