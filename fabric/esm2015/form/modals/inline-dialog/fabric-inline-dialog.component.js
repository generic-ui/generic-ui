/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
export class FabricInlineDialogComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} changeDetectorRef
     * @param {?} inlineDialogService
     * @param {?} elementRef
     */
    constructor(componentFactoryResolver, changeDetectorRef, inlineDialogService, elementRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.inlineDialogService = inlineDialogService;
        this.elementRef = elementRef;
        this.spaceBetweenElementAndInlineDialog = 8;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inlineDialogCordsSubscription =
            this.inlineDialogService.observeInlineDialogCords()
                .subscribe((/**
             * @param {?} inlineDialogCords
             * @return {?}
             */
            (inlineDialogCords) => {
                this.dialogTopAttribute = inlineDialogCords.getVerticalPosition() + this.spaceBetweenElementAndInlineDialog;
                this.dialogLeftAttribute = inlineDialogCords.getHorizontalPosition();
            }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.inlineDialogCordsSubscription) {
            this.inlineDialogCordsSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.createNestedComponent(this.inlineDialogNestedComponent);
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickOutside(event) {
        if (this.isContainerClicked(event)) {
            this.inlineDialogService.close();
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    isContainerClicked(event) {
        return !this.elementRef.nativeElement.contains(event.target);
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
    }
}
FabricInlineDialogComponent.decorators = [
    { type: Component, args: [{
                template: "<div [style.top.px]=\"dialogTopAttribute\"\n\t [style.left.px]=\"dialogLeftAttribute\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-inline-dialog-wrapper{position:absolute}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fefdfc;max-width:400px;box-shadow:0 3px 7px #999;border-radius:4px;z-index:1000;display:block}", ".gui-dark .gui-inline-dialog-content{background:#424242;color:#bdbdbd;box-shadow:0 1px 2px #424242}"]
            }] }
];
/** @nocollapse */
FabricInlineDialogComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: FabricInlineDialogService, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => FabricInlineDialogService)),] }] },
    { type: ElementRef }
];
FabricInlineDialogComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9tb2RhbHMvaW5saW5lLWRpYWxvZy9mYWJyaWMtaW5saW5lLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTixpQkFBaUIsRUFDakIsU0FBUyxFQUNULHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsVUFBVSxFQUNWLE1BQU0sRUFHTixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQVkzRSxNQUFNLE9BQU8sMkJBQTJCOzs7Ozs7O0lBY3ZDLFlBQW9CLHdCQUFrRCxFQUMzRCxpQkFBb0MsRUFDaUIsbUJBQThDLEVBQ25HLFVBQXNCO1FBSGIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2lCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBMkI7UUFDbkcsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUxoQix1Q0FBa0MsR0FBVyxDQUFDLENBQUM7SUFNaEUsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsNkJBQTZCO1lBQ2pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx3QkFBd0IsRUFBRTtpQkFDakQsU0FBUzs7OztZQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLEdBQUcsSUFBSSxDQUFDLGtDQUFrQyxDQUFDO2dCQUM1RyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUN0RSxDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsNkJBQTZCLEVBQUU7WUFDdkMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2pDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsS0FBVTtRQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxTQUFvQjs7Y0FDM0MsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztRQUV6RixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQTlERCxTQUFTLFNBQUM7Z0JBQ1YsZ1RBQWtEO2dCQUtsRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDckM7Ozs7WUFyQkEsd0JBQXdCO1lBRnhCLGlCQUFpQjtZQVlULHlCQUF5Qix1QkE0QjdCLE1BQU0sU0FBQyxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLEVBQUM7WUFyQ3RELFVBQVU7Ozt3QkF1QlQsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBQWpFLGdEQUM0Qjs7SUFFNUIsa0VBQXVDOztJQUV2Qyx5REFBMkI7O0lBQzNCLDBEQUE0Qjs7Ozs7SUFFNUIsb0VBQW9EOzs7OztJQUVwRCx5RUFBZ0U7Ozs7O0lBRXBELCtEQUEwRDs7Ozs7SUFDbkUsd0RBQTRDOzs7OztJQUM1QywwREFBMkc7Ozs7O0lBQzNHLGlEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0RWxlbWVudFJlZixcblx0Zm9yd2FyZFJlZixcblx0SW5qZWN0LFxuXHRPbkluaXQsXG5cdFR5cGUsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1pbmxpbmUtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWlubGluZS1kaWFsb2cubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtaW5saW5lLWRpYWxvZy5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0lubGluZURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuXHRpbmxpbmVEaWFsb2dOZXN0ZWRDb21wb25lbnQ6IFR5cGU8YW55PjtcblxuXHRkaWFsb2dUb3BBdHRyaWJ1dGU6IG51bWJlcjtcblx0ZGlhbG9nTGVmdEF0dHJpYnV0ZTogbnVtYmVyO1xuXG5cdHByaXZhdGUgaW5saW5lRGlhbG9nQ29yZHNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNwYWNlQmV0d2VlbkVsZW1lbnRBbmRJbmxpbmVEaWFsb2c6IG51bWJlciA9IDg7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlKSkgcHJpdmF0ZSBpbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuaW5saW5lRGlhbG9nQ29yZHNTdWJzY3JpcHRpb24gPVxuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLm9ic2VydmVJbmxpbmVEaWFsb2dDb3JkcygpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKGlubGluZURpYWxvZ0NvcmRzKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5kaWFsb2dUb3BBdHRyaWJ1dGUgPSBpbmxpbmVEaWFsb2dDb3Jkcy5nZXRWZXJ0aWNhbFBvc2l0aW9uKCkgKyB0aGlzLnNwYWNlQmV0d2VlbkVsZW1lbnRBbmRJbmxpbmVEaWFsb2c7XG5cdFx0XHRcdFx0dGhpcy5kaWFsb2dMZWZ0QXR0cmlidXRlID0gaW5saW5lRGlhbG9nQ29yZHMuZ2V0SG9yaXpvbnRhbFBvc2l0aW9uKCk7XG5cdFx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuaW5saW5lRGlhbG9nQ29yZHNTdWJzY3JpcHRpb24pIHtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nQ29yZHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR9XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5jcmVhdGVOZXN0ZWRDb21wb25lbnQodGhpcy5pbmxpbmVEaWFsb2dOZXN0ZWRDb21wb25lbnQpO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0Y2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzQ29udGFpbmVyQ2xpY2tlZChldmVudDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVOZXN0ZWRDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPGFueT4pOiB2b2lkIHtcblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblxuXHRcdHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblx0fVxufVxuIl19