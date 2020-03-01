/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricInlineDialogComponent } from './fabric-inline-dialog.component';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
var FabricInlineDialogService = /** @class */ (function () {
    function FabricInlineDialogService(componentFactoryResolver, applicationRef, injector, document, inlineDialogGeometryService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.inlineDialogGeometryService = inlineDialogGeometryService;
        this.inlineDialogRef = null;
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
     * @param {?=} injector
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    FabricInlineDialogService.prototype.open = /**
     * @param {?} element
     * @param {?} component
     * @param {?=} injector
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    function (element, component, injector, placement, offset) {
        event.stopPropagation();
        if (!this.inlineDialogRef) {
            this.appendInlineDialogToElement(component, injector);
            this.inlineDialogGeometryService.getInlineDialogCords(element, placement, offset);
        }
        else {
            this.close();
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
     * @private
     * @param {?} component
     * @param {?=} injector
     * @return {?}
     */
    FabricInlineDialogService.prototype.appendInlineDialogToElement = /**
     * @private
     * @param {?} component
     * @param {?=} injector
     * @return {?}
     */
    function (component, injector) {
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricInlineDialogComponent)
            .create(this.injector);
        componentRef.instance.inlineDialogNestedComponent = component;
        if (injector) {
            componentRef.instance.inlineDialogNestedInjector = injector;
        }
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
    FabricInlineDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricInlineDialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: InlineDialogGeometryService }
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
    FabricInlineDialogService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.inlineDialogGeometryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixjQUFjLEVBQ2Qsd0JBQXdCLEVBSXhCLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUlSLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUd0RjtJQUtDLG1DQUFvQix3QkFBa0QsRUFDM0QsY0FBOEIsRUFDOUIsUUFBa0IsRUFDQSxRQUFhLEVBQy9CLDJCQUF3RDtRQUovQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0EsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBTm5FLG9CQUFlLEdBQXNCLElBQUksQ0FBQztJQU8xQyxDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7Ozs7O0lBRUQsd0NBQUk7Ozs7Ozs7O0lBQUosVUFBSyxPQUFtQixFQUFFLFNBQW9CLEVBQUUsUUFBbUIsRUFBRSxTQUFpQyxFQUFFLE1BQWU7UUFDdEgsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzFCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbEY7YUFBTTtZQUNOLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7OztJQUVELHlDQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7SUFFTywrREFBMkI7Ozs7OztJQUFuQyxVQUFvQyxTQUFjLEVBQUUsUUFBbUI7O1lBRWhFLFlBQVksR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQzFDLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDO2FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTdCLFlBQVksQ0FBQyxRQUFRLENBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUFDO1FBRTlELElBQUksUUFBUSxFQUFFO1lBQ2IsWUFBWSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsR0FBRyxRQUFRLENBQUM7U0FDNUQ7UUFFRCxZQUFZLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUVoRCxnQkFBZ0IsR0FBRyxtQkFBQSxDQUFDLG1CQUFBLFlBQVksQ0FBQyxRQUFRLEVBQXdCLENBQUM7YUFDdEUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFlO1FBRTdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRU8sc0RBQWtCOzs7O0lBQTFCO1FBQ0MsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNGLENBQUM7O2dCQTVERCxVQUFVOzs7O2dCQWpCVix3QkFBd0I7Z0JBRHhCLGNBQWM7Z0JBT2QsUUFBUTtnREFtQkosTUFBTSxTQUFDLFFBQVE7Z0JBWFgsMkJBQTJCOztJQWlFcEMsZ0NBQUM7Q0FBQSxBQTlERCxJQThEQztTQTdEWSx5QkFBeUI7OztJQUVyQyxvREFBMEM7Ozs7O0lBRTlCLDZEQUEwRDs7Ozs7SUFDbkUsbURBQXNDOzs7OztJQUN0Qyw2Q0FBMEI7Ozs7O0lBQzFCLDZDQUF1Qzs7Ozs7SUFDdkMsZ0VBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QXBwbGljYXRpb25SZWYsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0Q29tcG9uZW50UmVmLFxuXHRFbGVtZW50UmVmLFxuXHRFbWJlZGRlZFZpZXdSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0YWJsZSxcblx0SW5qZWN0b3IsXG5cdE9uRGVzdHJveSxcblx0UExBVEZPUk1fSUQsXG5cdFR5cGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dQbGFjZW1lbnQgfSBmcm9tICcuL3BsYWNlbWVudCc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLWdlb21ldHJ5LnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRpbmxpbmVEaWFsb2dSZWY6IENvbXBvbmVudFJlZjxhbnk+ID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2U6IElubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZSkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVJbmxpbmVEaWFsb2coKTtcblx0fVxuXG5cdG9wZW4oZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50OiBUeXBlPGFueT4sIGluamVjdG9yPzogSW5qZWN0b3IsIHBsYWNlbWVudD86IElubGluZURpYWxvZ1BsYWNlbWVudCwgb2Zmc2V0PzogbnVtYmVyKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKCF0aGlzLmlubGluZURpYWxvZ1JlZikge1xuXHRcdFx0dGhpcy5hcHBlbmRJbmxpbmVEaWFsb2dUb0VsZW1lbnQoY29tcG9uZW50LCBpbmplY3Rvcik7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZS5nZXRJbmxpbmVEaWFsb2dDb3JkcyhlbGVtZW50LCBwbGFjZW1lbnQsIG9mZnNldCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZUlubGluZURpYWxvZygpO1xuXHR9XG5cblx0cHJpdmF0ZSBhcHBlbmRJbmxpbmVEaWFsb2dUb0VsZW1lbnQoY29tcG9uZW50OiBhbnksIGluamVjdG9yPzogSW5qZWN0b3IpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdFx0IC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnQpXG5cdFx0XHRcdFx0XHRcdFx0IC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cblx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UuaW5saW5lRGlhbG9nTmVzdGVkQ29tcG9uZW50ID0gY29tcG9uZW50O1xuXG5cdFx0aWYgKGluamVjdG9yKSB7XG5cdFx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UuaW5saW5lRGlhbG9nTmVzdGVkSW5qZWN0b3IgPSBpbmplY3Rvcjtcblx0XHR9XG5cblx0XHRjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cblx0XHRjb25zdCBkb21EaWFsb2dFbGVtZW50ID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pilcblx0XHRcdC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHR0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRGlhbG9nRWxlbWVudCk7XG5cblx0XHR0aGlzLmlubGluZURpYWxvZ1JlZiA9IGNvbXBvbmVudFJlZjtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlSW5saW5lRGlhbG9nKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlubGluZURpYWxvZ1JlZikge1xuXHRcdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KHRoaXMuaW5saW5lRGlhbG9nUmVmLmhvc3RWaWV3KTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nUmVmLmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nUmVmID0gbnVsbDtcblx0XHR9XG5cdH1cblxufVxuIl19