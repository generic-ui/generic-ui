/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricDialogComponent } from './fabric-dialog.component';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
var FabricDialogService = /** @class */ (function () {
    function FabricDialogService(componentFactoryResolver, applicationRef, injector, document) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.dialogRef = null;
        this.destroy$ = new Subject();
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
     * @param {?=} injector
     * @return {?}
     */
    FabricDialogService.prototype.open = /**
     * @param {?} component
     * @param {?=} injector
     * @return {?}
     */
    function (component, injector) {
        if (!this.dialogRef) {
            this.createAndAppend(component, injector);
            this.closeOnEscKey();
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
     * @return {?}
     */
    FabricDialogService.prototype.closeOnEscKey = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var close$ = fromEvent(this.document, 'keyup');
        close$
            .pipe(filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key.code === 'Escape'; })), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.close(); }));
    };
    /**
     * @private
     * @param {?} component
     * @param {?=} injector
     * @return {?}
     */
    FabricDialogService.prototype.createAndAppend = /**
     * @private
     * @param {?} component
     * @param {?=} injector
     * @return {?}
     */
    function (component, injector) {
        /** @type {?} */
        var compInjector = injector || this.injector;
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricDialogComponent)
            .create(compInjector);
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
        if (this.dialogRef) {
            this.applicationRef.detachView(this.dialogRef.hostView);
            this.dialogRef.destroy();
            this.dialogRef = null;
            this.destroy$.next();
            this.destroy$.complete();
        }
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
    FabricDialogService.prototype.destroy$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibGF5b3V0L2RpYWxvZy9mYWJyaWMtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQWlDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUN2SixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRDtJQU9DLDZCQUFvQix3QkFBa0QsRUFDM0QsY0FBOEIsRUFDOUIsUUFBa0IsRUFDQSxRQUFhO1FBSHRCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBUDFDLGNBQVMsR0FBc0IsSUFBSSxDQUFDO1FBRW5CLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBTTFDLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRUQsa0NBQUk7Ozs7O0lBQUosVUFBSyxTQUFvQixFQUFFLFFBQW1CO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUNyQjtJQUNGLENBQUM7Ozs7SUFFRCxtQ0FBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTywyQ0FBYTs7OztJQUFyQjtRQUFBLGlCQVFDOztZQVBNLE1BQU0sR0FBRyxTQUFTLENBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7UUFFckQsTUFBTTthQUNKLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBckIsQ0FBcUIsRUFBQyxFQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3pCLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxFQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7OztJQUVPLDZDQUFlOzs7Ozs7SUFBdkIsVUFBd0IsU0FBYyxFQUFFLFFBQW1COztZQUVwRCxZQUFZLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFROztZQUV4QyxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUMxQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQzthQUM5QyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBRTVCLFlBQVksQ0FBQyxRQUFRLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO1FBQ3hELFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUvQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBRWhELGdCQUFnQixHQUFHLG1CQUFBLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQzthQUN0RSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFFN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFTywwQ0FBWTs7OztJQUFwQjtRQUNDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7Z0JBbkVELFVBQVU7Ozs7Z0JBUGMsd0JBQXdCO2dCQUF4QyxjQUFjO2dCQUErRSxRQUFRO2dEQWlCekcsTUFBTSxTQUFDLFFBQVE7O0lBMkRwQiwwQkFBQztDQUFBLEFBckVELElBcUVDO1NBcEVZLG1CQUFtQjs7O0lBRS9CLHdDQUFvQzs7Ozs7SUFFcEMsdUNBQTBDOzs7OztJQUU5Qix1REFBMEQ7Ozs7O0lBQ25FLDZDQUFzQzs7Ozs7SUFDdEMsdUNBQTBCOzs7OztJQUMxQix1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RpYWxvZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdGRpYWxvZ1JlZjogQ29tcG9uZW50UmVmPGFueT4gPSBudWxsO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnJlbW92ZURpYWxvZygpO1xuXHR9XG5cblx0b3Blbihjb21wb25lbnQ6IFR5cGU8YW55PiwgaW5qZWN0b3I/OiBJbmplY3Rvcik6IHZvaWQge1xuXHRcdGlmICghdGhpcy5kaWFsb2dSZWYpIHtcblx0XHRcdHRoaXMuY3JlYXRlQW5kQXBwZW5kKGNvbXBvbmVudCwgaW5qZWN0b3IpO1xuXHRcdFx0dGhpcy5jbG9zZU9uRXNjS2V5KCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVEaWFsb2coKTtcblx0fVxuXG5cdHByaXZhdGUgY2xvc2VPbkVzY0tleSgpOiB2b2lkIHtcblx0XHRjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQ8YW55Pih0aGlzLmRvY3VtZW50LCAna2V5dXAnKTtcblxuXHRcdGNsb3NlJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoa2V5KSA9PiBrZXkuY29kZSA9PT0gJ0VzY2FwZScpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUFuZEFwcGVuZChjb21wb25lbnQ6IGFueSwgaW5qZWN0b3I/OiBJbmplY3Rvcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29tcEluamVjdG9yID0gaW5qZWN0b3IgfHwgdGhpcy5pbmplY3RvcjtcblxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdFx0IC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShGYWJyaWNEaWFsb2dDb21wb25lbnQpXG5cdFx0XHRcdFx0XHRcdFx0IC5jcmVhdGUoY29tcEluamVjdG9yKTtcblxuXHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kaWFsb2dOZXN0ZWRDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cdFx0Y29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tRGlhbG9nRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbURpYWxvZ0VsZW1lbnQpO1xuXG5cdFx0dGhpcy5kaWFsb2dSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZURpYWxvZygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5kaWFsb2dSZWYpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLmRpYWxvZ1JlZi5ob3N0Vmlldyk7XG5cdFx0XHR0aGlzLmRpYWxvZ1JlZi5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmRpYWxvZ1JlZiA9IG51bGw7XG5cdFx0XHR0aGlzLmRlc3Ryb3kkLm5leHQoKTtcblx0XHRcdHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcblx0XHR9XG5cdH1cblxufVxuIl19