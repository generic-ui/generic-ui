/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
var FabricInlineDialogComponent = /** @class */ (function () {
    function FabricInlineDialogComponent(componentFactoryResolver, changeDetectorRef, inlineDialogService, elementRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.inlineDialogService = inlineDialogService;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    FabricInlineDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.inlineDialogCordsSubscription =
            this.inlineDialogService
                .observeInlineDialogCords()
                .subscribe((/**
             * @param {?} inlineDialogCords
             * @return {?}
             */
            function (inlineDialogCords) {
                _this.dialogTopAttribute = inlineDialogCords.getVerticalPosition();
                _this.dialogLeftAttribute = inlineDialogCords.getHorizontalPosition();
                _this.changeDetectorRef.detectChanges();
            }));
    };
    /**
     * @return {?}
     */
    FabricInlineDialogComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.createNestedComponent(this.inlineDialogNestedComponent);
    };
    /**
     * @return {?}
     */
    FabricInlineDialogComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.inlineDialogCordsSubscription) {
            this.inlineDialogCordsSubscription.unsubscribe();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabricInlineDialogComponent.prototype.clickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isContainerClicked(event)) {
            this.inlineDialogService.close();
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FabricInlineDialogComponent.prototype.isContainerClicked = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return !this.elementRef.nativeElement.contains(event.target);
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    FabricInlineDialogComponent.prototype.createNestedComponent = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        if (this.inlineDialogNestedInjector) {
            this.container.createComponent(componentFactory, null, this.inlineDialogNestedInjector);
        }
        else {
            this.container.createComponent(componentFactory);
        }
    };
    FabricInlineDialogComponent.decorators = [
        { type: Component, args: [{
                    template: "<div [style.left.px]=\"dialogLeftAttribute\"\n\t [style.top.px]=\"dialogTopAttribute\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-inline-dialog-wrapper{position:absolute;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fff;max-width:400px;box-shadow:0 3px 7px #999;border-radius:4px;z-index:1000;display:block}", ".gui-dark .gui-inline-dialog-content{background:#424242;color:#bdbdbd;box-shadow:0 1px 2px #424242}"]
                }] }
    ];
    /** @nocollapse */
    FabricInlineDialogComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: FabricInlineDialogService, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return FabricInlineDialogService; })),] }] },
        { type: ElementRef }
    ]; };
    FabricInlineDialogComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }]
    };
    return FabricInlineDialogComponent;
}());
export { FabricInlineDialogComponent };
if (false) {
    /** @type {?} */
    FabricInlineDialogComponent.prototype.container;
    /** @type {?} */
    FabricInlineDialogComponent.prototype.inlineDialogNestedComponent;
    /** @type {?} */
    FabricInlineDialogComponent.prototype.inlineDialogNestedInjector;
    /** @type {?} */
    FabricInlineDialogComponent.prototype.dialogTopAttribute;
    /** @type {?} */
    FabricInlineDialogComponent.prototype.dialogLeftAttribute;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.inlineDialogCordsSubscription;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.inlineDialogService;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibGF5b3V0L2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUtOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSTNFO0lBd0JDLHFDQUFvQix3QkFBa0QsRUFDM0QsaUJBQW9DLEVBQ2lCLG1CQUE4QyxFQUNuRyxVQUFzQjtRQUhiLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0Qsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNpQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTJCO1FBQ25HLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDakMsQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLDZCQUE2QjtZQUNqQyxJQUFJLENBQUMsbUJBQW1CO2lCQUN0Qix3QkFBd0IsRUFBRTtpQkFDMUIsU0FBUzs7OztZQUFDLFVBQUMsaUJBQWlCO2dCQUM1QixLQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDbEUsS0FBSSxDQUFDLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQ3JFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxxREFBZTs7O0lBQWY7UUFDQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUVELGlEQUFXOzs7SUFBWDtRQUNDLElBQUksSUFBSSxDQUFDLDZCQUE2QixFQUFFO1lBQ3ZDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqRDtJQUNGLENBQUM7Ozs7O0lBRUQsa0RBQVk7Ozs7SUFBWixVQUFhLEtBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2pDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sd0RBQWtCOzs7OztJQUExQixVQUEyQixLQUFVO1FBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUVPLDJEQUFxQjs7Ozs7SUFBN0IsVUFBOEIsU0FBb0I7O1lBQzNDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFFekYsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ3hGO2FBQU07WUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ2pEO0lBRUYsQ0FBQzs7Z0JBdEVELFNBQVMsU0FBQztvQkFDVixnVEFBa0Q7b0JBS2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3JDOzs7O2dCQXhCQSx3QkFBd0I7Z0JBRnhCLGlCQUFpQjtnQkFjVCx5QkFBeUIsdUJBOEI3QixNQUFNLFNBQUMsVUFBVTs7O3dCQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsRUFBQztnQkF6Q3RELFVBQVU7Ozs0QkEwQlQsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQTREbEUsa0NBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQTlEWSwyQkFBMkI7OztJQUV2QyxnREFDNEI7O0lBRTVCLGtFQUF1Qzs7SUFFdkMsaUVBQXFDOztJQUVyQyx5REFBMkI7O0lBQzNCLDBEQUE0Qjs7Ozs7SUFFNUIsb0VBQW9EOzs7OztJQUd4QywrREFBMEQ7Ozs7O0lBQ25FLHdEQUE0Qzs7Ozs7SUFDNUMsMERBQTJHOzs7OztJQUMzRyxpREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRFbGVtZW50UmVmLFxuXHRmb3J3YXJkUmVmLFxuXHRJbmplY3QsXG5cdEluamVjdG9yLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0VHlwZSxcblx0Vmlld0NoaWxkLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlVXJsOiAnZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0lubGluZURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogZmFsc2UgfSlcblx0Y29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG5cdGlubGluZURpYWxvZ05lc3RlZENvbXBvbmVudDogVHlwZTxhbnk+O1xuXG5cdGlubGluZURpYWxvZ05lc3RlZEluamVjdG9yOiBJbmplY3RvcjtcblxuXHRkaWFsb2dUb3BBdHRyaWJ1dGU6IG51bWJlcjtcblx0ZGlhbG9nTGVmdEF0dHJpYnV0ZTogbnVtYmVyO1xuXG5cdHByaXZhdGUgaW5saW5lRGlhbG9nQ29yZHNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRmFicmljSW5saW5lRGlhbG9nU2VydmljZSkpIHByaXZhdGUgaW5saW5lRGlhbG9nU2VydmljZTogRmFicmljSW5saW5lRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmlubGluZURpYWxvZ0NvcmRzU3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU2VydmljZVxuXHRcdFx0XHQub2JzZXJ2ZUlubGluZURpYWxvZ0NvcmRzKClcblx0XHRcdFx0LnN1YnNjcmliZSgoaW5saW5lRGlhbG9nQ29yZHMpID0+IHtcblx0XHRcdFx0XHR0aGlzLmRpYWxvZ1RvcEF0dHJpYnV0ZSA9IGlubGluZURpYWxvZ0NvcmRzLmdldFZlcnRpY2FsUG9zaXRpb24oKTtcblx0XHRcdFx0XHR0aGlzLmRpYWxvZ0xlZnRBdHRyaWJ1dGUgPSBpbmxpbmVEaWFsb2dDb3Jkcy5nZXRIb3Jpem9udGFsUG9zaXRpb24oKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5jcmVhdGVOZXN0ZWRDb21wb25lbnQodGhpcy5pbmxpbmVEaWFsb2dOZXN0ZWRDb21wb25lbnQpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuaW5saW5lRGlhbG9nQ29yZHNTdWJzY3JpcHRpb24pIHtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nQ29yZHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR9XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJDbGlja2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU5lc3RlZENvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Pik6IHZvaWQge1xuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXG5cdFx0aWYgKHRoaXMuaW5saW5lRGlhbG9nTmVzdGVkSW5qZWN0b3IpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5LCBudWxsLCB0aGlzLmlubGluZURpYWxvZ05lc3RlZEluamVjdG9yKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=