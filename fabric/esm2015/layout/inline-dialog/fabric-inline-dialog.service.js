/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricInlineDialogComponent } from './fabric-inline-dialog.component';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { BehaviorSubject } from 'rxjs';
export class FabricInlineDialogService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} applicationRef
     * @param {?} injector
     * @param {?} document
     * @param {?} inlineDialogGeometryService
     */
    constructor(componentFactoryResolver, applicationRef, injector, document, inlineDialogGeometryService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.inlineDialogGeometryService = inlineDialogGeometryService;
        this.inlineDialogRef = null;
        this.opened = false;
        this.opened$ = new BehaviorSubject(false);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeInlineDialog();
    }
    /**
     * @param {?} element
     * @param {?} component
     * @param {?=} injector
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    open(element, component, injector, placement, offset) {
        if (event) {
            event.stopPropagation();
        }
        if (!this.inlineDialogRef) {
            this.setOpened(true);
            this.appendInlineDialogToElement(component, injector);
            this.inlineDialogGeometryService.getInlineDialogCords(element, placement, offset);
        }
        else {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.removeInlineDialog();
        this.setOpened(false);
    }
    /**
     * @return {?}
     */
    isOpened() {
        return this.opened;
    }
    /**
     * @return {?}
     */
    onOpened() {
        return this.opened$.asObservable();
    }
    /**
     * @private
     * @param {?} component
     * @param {?=} injector
     * @return {?}
     */
    appendInlineDialogToElement(component, injector) {
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricInlineDialogComponent)
            .create(this.injector);
        componentRef.instance.inlineDialogNestedComponent = component;
        if (injector) {
            componentRef.instance.inlineDialogNestedInjector = injector;
        }
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domDialogElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domDialogElement);
        this.inlineDialogRef = componentRef;
    }
    /**
     * @private
     * @return {?}
     */
    removeInlineDialog() {
        if (this.inlineDialogRef) {
            this.applicationRef.detachView(this.inlineDialogRef.hostView);
            this.inlineDialogRef.destroy();
            this.inlineDialogRef = null;
        }
    }
    /**
     * @private
     * @param {?} opened
     * @return {?}
     */
    setOpened(opened) {
        this.opened = opened;
        this.opened$.next(this.opened);
    }
}
FabricInlineDialogService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FabricInlineDialogService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: InlineDialogGeometryService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.inlineDialogRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.opened;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.opened$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixjQUFjLEVBQ2Qsd0JBQXdCLEVBSXhCLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUdSLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBSW5ELE1BQU0sT0FBTyx5QkFBeUI7Ozs7Ozs7O0lBUXJDLFlBQW9CLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWEsRUFDL0IsMkJBQXdEO1FBSi9DLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFWM0Qsb0JBQWUsR0FBc0IsSUFBSSxDQUFDO1FBRTFDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixZQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFPN0MsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7Ozs7SUFFRCxJQUFJLENBQUMsT0FBbUIsRUFBRSxTQUFvQixFQUFFLFFBQW1CLEVBQUUsU0FBaUMsRUFBRSxNQUFlO1FBRXRILElBQUksS0FBSyxFQUFFO1lBQ1YsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsMkJBQTJCLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2xGO2FBQU07WUFDTixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDYjtJQUNGLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7O0lBRU8sMkJBQTJCLENBQUMsU0FBYyxFQUFFLFFBQW1COztjQUVoRSxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUMxQyx1QkFBdUIsQ0FBQywyQkFBMkIsQ0FBQzthQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUU3QixZQUFZLENBQUMsUUFBUSxDQUFDLDJCQUEyQixHQUFHLFNBQVMsQ0FBQztRQUU5RCxJQUFJLFFBQVEsRUFBRTtZQUNiLFlBQVksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLEdBQUcsUUFBUSxDQUFDO1NBQzVEO1FBRUQsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRS9DLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Y0FFaEQsZ0JBQWdCLEdBQUcsbUJBQUEsQ0FBQyxtQkFBQSxZQUFZLENBQUMsUUFBUSxFQUF3QixDQUFDO2FBQ3RFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUU3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVPLGtCQUFrQjtRQUN6QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLE1BQWU7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQW5GRCxVQUFVOzs7O1lBakJWLHdCQUF3QjtZQUR4QixjQUFjO1lBT2QsUUFBUTs0Q0F1QkosTUFBTSxTQUFDLFFBQVE7WUFoQlgsMkJBQTJCOzs7Ozs7O0lBT25DLG9EQUFrRDs7Ozs7SUFFbEQsMkNBQXVCOzs7OztJQUV2Qiw0Q0FBNkM7Ozs7O0lBRWpDLDZEQUEwRDs7Ozs7SUFDbkUsbURBQXNDOzs7OztJQUN0Qyw2Q0FBMEI7Ozs7O0lBQzFCLDZDQUF1Qzs7Ozs7SUFDdkMsZ0VBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QXBwbGljYXRpb25SZWYsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0Q29tcG9uZW50UmVmLFxuXHRFbGVtZW50UmVmLFxuXHRFbWJlZGRlZFZpZXdSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0YWJsZSxcblx0SW5qZWN0b3IsXG5cdE9uRGVzdHJveSxcblx0VHlwZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IElubGluZURpYWxvZ1BsYWNlbWVudCB9IGZyb20gJy4vcGxhY2VtZW50JztcbmltcG9ydCB7IElubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZSB9IGZyb20gJy4vZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dSZWY6IENvbXBvbmVudFJlZjxhbnk+ID0gbnVsbDtcblxuXHRwcml2YXRlIG9wZW5lZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgb3BlbmVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuXHRcdFx0XHRwcml2YXRlIGlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZTogSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlKSB7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnJlbW92ZUlubGluZURpYWxvZygpO1xuXHR9XG5cblx0b3BlbihlbGVtZW50OiBFbGVtZW50UmVmLCBjb21wb25lbnQ6IFR5cGU8YW55PiwgaW5qZWN0b3I/OiBJbmplY3RvciwgcGxhY2VtZW50PzogSW5saW5lRGlhbG9nUGxhY2VtZW50LCBvZmZzZXQ/OiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmlubGluZURpYWxvZ1JlZikge1xuXHRcdFx0dGhpcy5zZXRPcGVuZWQodHJ1ZSk7XG5cdFx0XHR0aGlzLmFwcGVuZElubGluZURpYWxvZ1RvRWxlbWVudChjb21wb25lbnQsIGluamVjdG9yKTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlLmdldElubGluZURpYWxvZ0NvcmRzKGVsZW1lbnQsIHBsYWNlbWVudCwgb2Zmc2V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdGNsb3NlKCk6IHZvaWQge1xuXHRcdHRoaXMucmVtb3ZlSW5saW5lRGlhbG9nKCk7XG5cdFx0dGhpcy5zZXRPcGVuZWQoZmFsc2UpO1xuXHR9XG5cblx0aXNPcGVuZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMub3BlbmVkO1xuXHR9XG5cblx0b25PcGVuZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMub3BlbmVkJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdHByaXZhdGUgYXBwZW5kSW5saW5lRGlhbG9nVG9FbGVtZW50KGNvbXBvbmVudDogYW55LCBpbmplY3Rvcj86IEluamVjdG9yKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHRcdCAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHRcdCAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG5cdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmlubGluZURpYWxvZ05lc3RlZENvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuXHRcdGlmIChpbmplY3Rvcikge1xuXHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmlubGluZURpYWxvZ05lc3RlZEluamVjdG9yID0gaW5qZWN0b3I7XG5cdFx0fVxuXG5cdFx0Y29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tRGlhbG9nRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbURpYWxvZ0VsZW1lbnQpO1xuXG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUlubGluZURpYWxvZygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmxpbmVEaWFsb2dSZWYpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLmlubGluZURpYWxvZ1JlZi5ob3N0Vmlldyk7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1JlZi5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1JlZiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRPcGVuZWQob3BlbmVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5vcGVuZWQgPSBvcGVuZWQ7XG5cdFx0dGhpcy5vcGVuZWQkLm5leHQodGhpcy5vcGVuZWQpO1xuXHR9XG5cbn1cbiJdfQ==