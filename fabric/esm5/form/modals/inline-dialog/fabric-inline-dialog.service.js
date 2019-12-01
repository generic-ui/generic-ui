/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { InlineDialogCords } from './inline-dialog-cords';
import { FabricInlineDialogComponent } from './fabric-inline-dialog.component';
var FabricInlineDialogService = /** @class */ (function () {
    function FabricInlineDialogService(componentFactoryResolver, applicationRef, injector, platformId, document) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.platformId = platformId;
        this.document = document;
        this.inlineDialogRef = null;
        this.inlineDialogState$ = new Subject();
    }
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeInlineDialog();
    };
    /**
     * @param {?} element
     * @param {?} component
     * @return {?}
     */
    FabricInlineDialogService.prototype.open = /**
     * @param {?} element
     * @param {?} component
     * @return {?}
     */
    function (element, component) {
        event.stopPropagation();
        if (!this.inlineDialogRef) {
            this.appendInlineDialogToElement(component);
            this.getInlineDialogCords(element);
        }
    };
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removeInlineDialog();
    };
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.observeInlineDialogCords = /**
     * @return {?}
     */
    function () {
        return this.inlineDialogState$.asObservable();
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    FabricInlineDialogService.prototype.appendInlineDialogToElement = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricInlineDialogComponent)
            .create(this.injector);
        componentRef.instance.inlineDialogNestedComponent = component;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domDialogElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domDialogElement);
        this.inlineDialogRef = componentRef;
    };
    /**
     * @private
     * @return {?}
     */
    FabricInlineDialogService.prototype.removeInlineDialog = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.inlineDialogRef) {
            this.applicationRef.detachView(this.inlineDialogRef.hostView);
            this.inlineDialogRef.destroy();
            this.inlineDialogRef = null;
        }
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    FabricInlineDialogService.prototype.getInlineDialogCords = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var inlineDialogCords = new InlineDialogCords(element, window.pageXOffset, window.pageYOffset);
            this.inlineDialogState$.next(inlineDialogCords);
        }
    };
    FabricInlineDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricInlineDialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return FabricInlineDialogService;
}());
export { FabricInlineDialogService };
if (false) {
    /** @type {?} */
    FabricInlineDialogService.prototype.inlineDialogRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.inlineDialogState$;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.applicationRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vbW9kYWxzL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLGNBQWMsRUFDZCx3QkFBd0IsRUFJeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBRVIsV0FBVyxFQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRy9FO0lBT0MsbUNBQW9CLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNHLFVBQWUsRUFDbEIsUUFBYTtRQUp0Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0csZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBUjFDLG9CQUFlLEdBQXNCLElBQUksQ0FBQztRQUVsQyx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztJQU85RCxDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsd0NBQUk7Ozs7O0lBQUosVUFBSyxPQUFtQixFQUFFLFNBQW9CO1FBQzdDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUMxQixJQUFJLENBQUMsMkJBQTJCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0lBQ0YsQ0FBQzs7OztJQUVELHlDQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCw0REFBd0I7OztJQUF4QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7OztJQUVPLCtEQUEyQjs7Ozs7SUFBbkMsVUFBb0MsU0FBYzs7WUFDM0MsWUFBWSxHQUFHLElBQUksQ0FBQyx3QkFBd0I7YUFDMUMsdUJBQXVCLENBQUMsMkJBQTJCLENBQUM7YUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFN0IsWUFBWSxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUM7UUFDOUQsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRS9DLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFFaEQsZ0JBQWdCLEdBQUcsbUJBQUEsQ0FBQyxtQkFBQSxZQUFZLENBQUMsUUFBUSxFQUF3QixDQUFDO2FBQ3RFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUU3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVPLHNEQUFrQjs7OztJQUExQjtRQUNDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDRixDQUFDOzs7Ozs7SUFFTyx3REFBb0I7Ozs7O0lBQTVCLFVBQTZCLE9BQW1CO1FBRS9DLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztnQkFDakMsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDO1lBRWhHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7O2dCQW5FRCxVQUFVOzs7O2dCQWxCVix3QkFBd0I7Z0JBRHhCLGNBQWM7Z0JBT2QsUUFBUTtnREFzQkosTUFBTSxTQUFDLFdBQVc7Z0RBQ2xCLE1BQU0sU0FBQyxRQUFROztJQXlEcEIsZ0NBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQW5FWSx5QkFBeUI7OztJQUVyQyxvREFBMEM7Ozs7O0lBRTFDLHVEQUE4RDs7Ozs7SUFFbEQsNkRBQTBEOzs7OztJQUNuRSxtREFBc0M7Ozs7O0lBQ3RDLDZDQUEwQjs7Ozs7SUFDMUIsK0NBQTRDOzs7OztJQUM1Qyw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBcHBsaWNhdGlvblJlZixcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRDb21wb25lbnRSZWYsXG5cdEVsZW1lbnRSZWYsXG5cdEVtYmVkZGVkVmlld1JlZixcblx0SW5qZWN0LFxuXHRJbmplY3RhYmxlLFxuXHRJbmplY3Rvcixcblx0T25EZXN0cm95LFxuXHRQTEFURk9STV9JRCxcblx0VHlwZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElubGluZURpYWxvZ0NvcmRzIH0gZnJvbSAnLi9pbmxpbmUtZGlhbG9nLWNvcmRzJztcbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0aW5saW5lRGlhbG9nUmVmOiBDb21wb25lbnRSZWY8YW55PiA9IG51bGw7XG5cblx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dTdGF0ZSQgPSBuZXcgU3ViamVjdDxJbmxpbmVEaWFsb2dDb3Jkcz4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucmVtb3ZlSW5saW5lRGlhbG9nKCk7XG5cdH1cblxuXHRvcGVuKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIGNvbXBvbmVudDogVHlwZTxhbnk+KTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKCF0aGlzLmlubGluZURpYWxvZ1JlZikge1xuXHRcdFx0dGhpcy5hcHBlbmRJbmxpbmVEaWFsb2dUb0VsZW1lbnQoY29tcG9uZW50KTtcblx0XHRcdHRoaXMuZ2V0SW5saW5lRGlhbG9nQ29yZHMoZWxlbWVudCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVJbmxpbmVEaWFsb2coKTtcblx0fVxuXG5cdG9ic2VydmVJbmxpbmVEaWFsb2dDb3JkcygpOiBPYnNlcnZhYmxlPElubGluZURpYWxvZ0NvcmRzPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5saW5lRGlhbG9nU3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBhcHBlbmRJbmxpbmVEaWFsb2dUb0VsZW1lbnQoY29tcG9uZW50OiBhbnkpOiB2b2lkIHtcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHRcdCAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHRcdCAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG5cdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmlubGluZURpYWxvZ05lc3RlZENvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0XHRjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cblx0XHRjb25zdCBkb21EaWFsb2dFbGVtZW50ID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pilcblx0XHRcdC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHR0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRGlhbG9nRWxlbWVudCk7XG5cblx0XHR0aGlzLmlubGluZURpYWxvZ1JlZiA9IGNvbXBvbmVudFJlZjtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlSW5saW5lRGlhbG9nKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlubGluZURpYWxvZ1JlZikge1xuXHRcdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KHRoaXMuaW5saW5lRGlhbG9nUmVmLmhvc3RWaWV3KTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nUmVmLmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nUmVmID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldElubGluZURpYWxvZ0NvcmRzKGVsZW1lbnQ6IEVsZW1lbnRSZWYpOiB2b2lkIHtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRjb25zdCBpbmxpbmVEaWFsb2dDb3JkcyA9IG5ldyBJbmxpbmVEaWFsb2dDb3JkcyhlbGVtZW50LCB3aW5kb3cucGFnZVhPZmZzZXQsIHdpbmRvdy5wYWdlWU9mZnNldCk7XG5cblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU3RhdGUkLm5leHQoaW5saW5lRGlhbG9nQ29yZHMpO1xuXHRcdH1cblx0fVxufVxuIl19