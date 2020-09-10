/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricDialogService } from './fabric-dialog.service';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { DialogComponent } from '../common/dialog.component';
import { FabricDialogThemeService } from './fabric-dialog-theme.service';
var FabricDialogComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricDialogComponent, _super);
    function FabricDialogComponent(componentFactoryResolver, changeDetectorRef, elRef, themeService, renderer, theme, dialogService) {
        var _this = _super.call(this, elRef, renderer, theme) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elRef = elRef;
        _this.themeService = themeService;
        _this.dialogService = dialogService;
        return _this;
    }
    /**
     * @return {?}
     */
    FabricDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.themeService
            .onTheme()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            _this.addTheme(theme);
        }));
    };
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
                    template: "<div class=\"gui-dialog-blanket\"></div>\n<div (click)=\"clickOutside($event)\"\n\t class=\"gui-dialog-wrapper\">\n\t<div class=\"gui-dialog-content\">\n\t\t<ng-template #container></ng-template>\n\t\t<gui-close-icon (click)=\"closeDialog()\"></gui-close-icon>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-dialog-blanket{background:rgba(0,0,0,.32);position:fixed;height:100%;width:100%;left:0;top:0;pointer-events:none;z-index:1000}.gui-dialog-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;position:fixed;height:100%;width:100%;left:0;top:0;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;pointer-events:auto;z-index:1000}.gui-dialog-wrapper .gui-dialog-content{background-color:#fff;max-width:400px;position:relative;border-radius:4px;box-shadow:0 3px 7px #999;-webkit-animation:.1s ease-in display-dialog;animation:.1s ease-in display-dialog;padding:24px}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-title{color:#333;font-size:20px;margin:0 0 16px}@-webkit-keyframes display-dialog{from{transform:scale(0)}to{transform:scale(1)}}@keyframes display-dialog{from{transform:scale(0)}to{transform:scale(1)}}", ".gui-dark .gui-dialog-wrapper .gui-dialog-content{background:#424242;color:#bdbdbd;box-shadow:0 1px 2px #424242}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after,.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before{background:#bdbdbd}"]
                }] }
    ];
    /** @nocollapse */
    FabricDialogComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FabricDialogThemeService },
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
    FabricDialogComponent.prototype.themeService;
    /**
     * @type {?}
     * @private
     */
    FabricDialogComponent.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJtb2RhbC9kaWFsb2cvZmFicmljLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUVOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RTtJQVMyQyxpREFBZTtJQU96RCwrQkFBNkIsd0JBQWtELEVBQzNELGlCQUFvQyxFQUNwQyxLQUFpQixFQUNqQixZQUFzQyxFQUN2RCxRQUFtQixFQUNDLEtBQVksRUFDZ0MsYUFBa0M7UUFOckcsWUFPQyxrQkFBTSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxTQUM3QjtRQVI0Qiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFHUyxtQkFBYSxHQUFiLGFBQWEsQ0FBcUI7O0lBRXJHLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5BLElBQUksQ0FBQyxZQUFZO2FBQ2YsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxLQUFZO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCw0Q0FBWTs7OztJQUFaLFVBQWEsS0FBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzNCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0RBQWtCOzs7OztJQUExQixVQUEyQixLQUFVOztZQUM5QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUM7UUFFdEYsSUFBSSxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7Ozs7OztJQUVPLHFEQUFxQjs7Ozs7SUFBN0IsVUFBOEIsU0FBNEM7O1lBQ25FLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFFekYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkEvREQsU0FBUyxTQUFDO29CQUNWLG9TQUE2QztvQkFLN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDckM7Ozs7Z0JBM0JBLHdCQUF3QjtnQkFGeEIsaUJBQWlCO2dCQUdqQixVQUFVO2dCQWdCRix3QkFBd0I7Z0JBWmhDLFNBQVM7Z0JBUUQsS0FBSyx1QkEyQlQsTUFBTSxTQUFDLFVBQVU7Z0JBNUJiLG1CQUFtQix1QkE2QnZCLE1BQU0sU0FBQyxVQUFVOzs7d0JBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixFQUFDOzs7NEJBWC9DLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUFzRGxFLDRCQUFDO0NBQUEsQUFqRUQsQ0FTMkMsZUFBZSxHQXdEekQ7U0F4RFkscUJBQXFCOzs7SUFFakMsMENBQzRCOztJQUU1QixzREFBeUQ7Ozs7O0lBRTdDLHlEQUFtRTs7Ozs7SUFDNUUsa0RBQXFEOzs7OztJQUNyRCxzQ0FBa0M7Ozs7O0lBQ2xDLDZDQUF1RDs7Ozs7SUFHdkQsOENBQWtHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0RWxlbWVudFJlZixcblx0Zm9yd2FyZFJlZixcblx0SW5qZWN0LFxuXHRPbkluaXQsXG5cdFJlbmRlcmVyMixcblx0VHlwZSxcblx0Vmlld0NoaWxkLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IHRoZW1lVG9rZW4gfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUudG9rZW4nO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2RpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2ZhYnJpYy5uZXN0ZWQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dUaGVtZVNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kaWFsb2ctdGhlbWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1kaWFsb2cubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtZGlhbG9nLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RpYWxvZ0NvbXBvbmVudCBleHRlbmRzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuXHRkaWFsb2dOZXN0ZWRDb21wb25lbnQ6IFR5cGU8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0aGVtZVNlcnZpY2U6IEZhYnJpY0RpYWxvZ1RoZW1lU2VydmljZSxcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0QEluamVjdCh0aGVtZVRva2VuKSB0aGVtZTogVGhlbWUsXG5cdFx0XHRcdEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBGYWJyaWNEaWFsb2dTZXJ2aWNlKSkgcHJpdmF0ZSByZWFkb25seSBkaWFsb2dTZXJ2aWNlOiBGYWJyaWNEaWFsb2dTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoZWxSZWYsIHJlbmRlcmVyLCB0aGVtZSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnRoZW1lU2VydmljZVxuXHRcdFx0Lm9uVGhlbWUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHRoZW1lOiBUaGVtZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmFkZFRoZW1lKHRoZW1lKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuY3JlYXRlTmVzdGVkQ29tcG9uZW50KHRoaXMuZGlhbG9nTmVzdGVkQ29tcG9uZW50KTtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR0aGlzLmFkZFRoZW1lKCk7XG5cdH1cblxuXHRjbG9zZURpYWxvZygpIHtcblx0XHR0aGlzLmRpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdGNsaWNrT3V0c2lkZShldmVudDogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJDbGlja2VkKGV2ZW50KSkge1xuXHRcdFx0dGhpcy5kaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGRpYWxvZ0NvbnRlbnRSZWYgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS1kaWFsb2ctY29udGVudCcpO1xuXG5cdFx0aWYgKGRpYWxvZ0NvbnRlbnRSZWYpIHtcblx0XHRcdHJldHVybiAhZGlhbG9nQ29udGVudFJlZi5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTmVzdGVkQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+KTogdm9pZCB7XG5cdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdH1cblxufVxuIl19