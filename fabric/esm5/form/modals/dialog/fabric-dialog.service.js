/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricDialogComponent } from './fabric-dialog.component';
var FabricDialogService = /** @class */ (function () {
    function FabricDialogService(componentFactoryResolver, applicationRef, injector, document) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.dialogRef = null;
    }
    /**
     * @return {?}
     */
    FabricDialogService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeDialog();
    };
    /**
     * @param {?} component
     * @return {?}
     */
    FabricDialogService.prototype.open = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        if (!this.dialogRef) {
            this.appendDialogToBody(component);
        }
    };
    /**
     * @return {?}
     */
    FabricDialogService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removeDialog();
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    FabricDialogService.prototype.appendDialogToBody = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricDialogComponent)
            .create(this.injector);
        componentRef.instance.dialogNestedComponent = component;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domDialogElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domDialogElement);
        this.dialogRef = componentRef;
    };
    /**
     * @private
     * @return {?}
     */
    FabricDialogService.prototype.removeDialog = /**
     * @private
     * @return {?}
     */
    function () {
        this.applicationRef.detachView(this.dialogRef.hostView);
        this.dialogRef.destroy();
        this.dialogRef = null;
    };
    FabricDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricDialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return FabricDialogService;
}());
export { FabricDialogService };
if (false) {
    /** @type {?} */
    FabricDialogService.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    FabricDialogService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricDialogService.prototype.applicationRef;
    /**
     * @type {?}
     * @private
     */
    FabricDialogService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    FabricDialogService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9tb2RhbHMvZGlhbG9nL2ZhYnJpYy1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQWlDLFVBQVUsRUFBRSxRQUFRLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZKLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQUtDLDZCQUFvQix3QkFBa0QsRUFDM0QsY0FBOEIsRUFDOUIsUUFBa0IsRUFDQSxRQUFhO1FBSHRCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBTDFDLGNBQVMsR0FBc0IsSUFBSSxDQUFDO0lBTXBDLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxrQ0FBSTs7OztJQUFKLFVBQUssU0FBb0I7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ25DO0lBQ0YsQ0FBQzs7OztJQUVELG1DQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTyxnREFBa0I7Ozs7O0lBQTFCLFVBQTJCLFNBQWM7O1lBQ2xDLFlBQVksR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQzFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDO2FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTdCLFlBQVksQ0FBQyxRQUFRLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO1FBQ3hELFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUvQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBRWhELGdCQUFnQixHQUFHLG1CQUFBLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQzthQUN0RSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFFN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFTywwQ0FBWTs7OztJQUFwQjtRQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOztnQkEvQ0QsVUFBVTs7OztnQkFMc0Isd0JBQXdCO2dCQUF4QyxjQUFjO2dCQUF1RSxRQUFRO2dEQWF6RyxNQUFNLFNBQUMsUUFBUTs7SUF5Q3BCLDBCQUFDO0NBQUEsQUFqREQsSUFpREM7U0FoRFksbUJBQW1COzs7SUFFL0Isd0NBQW9DOzs7OztJQUV4Qix1REFBMEQ7Ozs7O0lBQ25FLDZDQUFzQzs7Ozs7SUFDdEMsdUNBQTBCOzs7OztJQUMxQix1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWRpYWxvZy5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGlhbG9nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0ZGlhbG9nUmVmOiBDb21wb25lbnRSZWY8YW55PiA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucmVtb3ZlRGlhbG9nKCk7XG5cdH1cblxuXHRvcGVuKGNvbXBvbmVudDogVHlwZTxhbnk+KTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmRpYWxvZ1JlZikge1xuXHRcdFx0dGhpcy5hcHBlbmREaWFsb2dUb0JvZHkoY29tcG9uZW50KTtcblx0XHR9XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZURpYWxvZygpO1xuXHR9XG5cblx0cHJpdmF0ZSBhcHBlbmREaWFsb2dUb0JvZHkoY29tcG9uZW50OiBhbnkpOiB2b2lkIHtcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHRcdCAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljRGlhbG9nQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHRcdCAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG5cdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmRpYWxvZ05lc3RlZENvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0XHRjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cblx0XHRjb25zdCBkb21EaWFsb2dFbGVtZW50ID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pilcblx0XHRcdC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHR0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRGlhbG9nRWxlbWVudCk7XG5cblx0XHR0aGlzLmRpYWxvZ1JlZiA9IGNvbXBvbmVudFJlZjtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlRGlhbG9nKCk6IHZvaWQge1xuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLmRpYWxvZ1JlZi5ob3N0Vmlldyk7XG5cdFx0dGhpcy5kaWFsb2dSZWYuZGVzdHJveSgpO1xuXHRcdHRoaXMuZGlhbG9nUmVmID0gbnVsbDtcblx0fVxuXG59XG4iXX0=