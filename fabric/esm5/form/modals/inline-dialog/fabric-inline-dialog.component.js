/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
var FabricInlineDialogComponent = /** @class */ (function () {
    function FabricInlineDialogComponent(componentFactoryResolver, changeDetectorRef, inlineDialogService, elementRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.inlineDialogService = inlineDialogService;
        this.elementRef = elementRef;
        this.spaceBetweenElementAndInlineDialog = 8;
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
            this.inlineDialogService.observeInlineDialogCords()
                .subscribe((/**
             * @param {?} inlineDialogCords
             * @return {?}
             */
            function (inlineDialogCords) {
                _this.dialogTopAttribute = inlineDialogCords.getVerticalPosition() + _this.spaceBetweenElementAndInlineDialog;
                _this.dialogLeftAttribute = inlineDialogCords.getHorizontalPosition();
            }));
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
     * @return {?}
     */
    FabricInlineDialogComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.createNestedComponent(this.inlineDialogNestedComponent);
        this.changeDetectorRef.detectChanges();
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
        this.container.createComponent(componentFactory);
    };
    FabricInlineDialogComponent.decorators = [
        { type: Component, args: [{
                    template: "<div [style.top.px]=\"dialogTopAttribute\"\n\t [style.left.px]=\"dialogLeftAttribute\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-inline-dialog-wrapper{position:absolute}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fefdfc;max-width:400px;box-shadow:0 3px 7px #999;border-radius:4px;z-index:1000;display:block}", ".gui-dark .gui-inline-dialog-content{background:#424242;color:#bdbdbd;box-shadow:0 1px 2px #424242}"]
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
    FabricInlineDialogComponent.prototype.spaceBetweenElementAndInlineDialog;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9tb2RhbHMvaW5saW5lLWRpYWxvZy9mYWJyaWMtaW5saW5lLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTixpQkFBaUIsRUFDakIsU0FBUyxFQUNULHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsVUFBVSxFQUNWLE1BQU0sRUFHTixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUkzRTtJQXNCQyxxQ0FBb0Isd0JBQWtELEVBQzNELGlCQUFvQyxFQUNpQixtQkFBOEMsRUFDbkcsVUFBc0I7UUFIYiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDaUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUEyQjtRQUNuRyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBTGhCLHVDQUFrQyxHQUFXLENBQUMsQ0FBQztJQU1oRSxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFOQSxJQUFJLENBQUMsNkJBQTZCO1lBQ2pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx3QkFBd0IsRUFBRTtpQkFDakQsU0FBUzs7OztZQUFDLFVBQUMsaUJBQWlCO2dCQUM1QixLQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxLQUFJLENBQUMsa0NBQWtDLENBQUM7Z0JBQzVHLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ3RFLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7OztJQUVELGlEQUFXOzs7SUFBWDtRQUNDLElBQUksSUFBSSxDQUFDLDZCQUE2QixFQUFFO1lBQ3ZDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqRDtJQUNGLENBQUM7Ozs7SUFFRCxxREFBZTs7O0lBQWY7UUFDQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsa0RBQVk7Ozs7SUFBWixVQUFhLEtBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2pDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sd0RBQWtCOzs7OztJQUExQixVQUEyQixLQUFVO1FBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUVPLDJEQUFxQjs7Ozs7SUFBN0IsVUFBOEIsU0FBb0I7O1lBQzNDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFFekYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkE5REQsU0FBUyxTQUFDO29CQUNWLGdUQUFrRDtvQkFLbEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUNyQzs7OztnQkFyQkEsd0JBQXdCO2dCQUZ4QixpQkFBaUI7Z0JBWVQseUJBQXlCLHVCQTRCN0IsTUFBTSxTQUFDLFVBQVU7Ozt3QkFBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLEVBQUM7Z0JBckN0RCxVQUFVOzs7NEJBdUJULFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUFxRGxFLGtDQUFDO0NBQUEsQUEvREQsSUErREM7U0F2RFksMkJBQTJCOzs7SUFFdkMsZ0RBQzRCOztJQUU1QixrRUFBdUM7O0lBRXZDLHlEQUEyQjs7SUFDM0IsMERBQTRCOzs7OztJQUU1QixvRUFBb0Q7Ozs7O0lBRXBELHlFQUFnRTs7Ozs7SUFFcEQsK0RBQTBEOzs7OztJQUNuRSx3REFBNEM7Ozs7O0lBQzVDLDBEQUEyRzs7Ozs7SUFDM0csaURBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRFbGVtZW50UmVmLFxuXHRmb3J3YXJkUmVmLFxuXHRJbmplY3QsXG5cdE9uSW5pdCxcblx0VHlwZSxcblx0Vmlld0NoaWxkLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlVXJsOiAnZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogZmFsc2UgfSlcblx0Y29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG5cdGlubGluZURpYWxvZ05lc3RlZENvbXBvbmVudDogVHlwZTxhbnk+O1xuXG5cdGRpYWxvZ1RvcEF0dHJpYnV0ZTogbnVtYmVyO1xuXHRkaWFsb2dMZWZ0QXR0cmlidXRlOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dDb3Jkc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3BhY2VCZXR3ZWVuRWxlbWVudEFuZElubGluZURpYWxvZzogbnVtYmVyID0gODtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0QEluamVjdChmb3J3YXJkUmVmKCgpID0+IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UpKSBwcml2YXRlIGlubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dDb3Jkc1N1YnNjcmlwdGlvbiA9XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1NlcnZpY2Uub2JzZXJ2ZUlubGluZURpYWxvZ0NvcmRzKClcblx0XHRcdFx0LnN1YnNjcmliZSgoaW5saW5lRGlhbG9nQ29yZHMpID0+IHtcblx0XHRcdFx0XHR0aGlzLmRpYWxvZ1RvcEF0dHJpYnV0ZSA9IGlubGluZURpYWxvZ0NvcmRzLmdldFZlcnRpY2FsUG9zaXRpb24oKSArIHRoaXMuc3BhY2VCZXR3ZWVuRWxlbWVudEFuZElubGluZURpYWxvZztcblx0XHRcdFx0XHR0aGlzLmRpYWxvZ0xlZnRBdHRyaWJ1dGUgPSBpbmxpbmVEaWFsb2dDb3Jkcy5nZXRIb3Jpem9udGFsUG9zaXRpb24oKTtcblx0XHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5pbmxpbmVEaWFsb2dDb3Jkc1N1YnNjcmlwdGlvbikge1xuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dDb3Jkc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH1cblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmNyZWF0ZU5lc3RlZENvbXBvbmVudCh0aGlzLmlubGluZURpYWxvZ05lc3RlZENvbXBvbmVudCk7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJDbGlja2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU5lc3RlZENvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Pik6IHZvaWQge1xuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXG5cdFx0dGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXHR9XG59XG4iXX0=