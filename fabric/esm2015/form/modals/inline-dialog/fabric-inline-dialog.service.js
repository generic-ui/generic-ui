/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { InlineDialogCords } from './inline-dialog-cords';
import { FabricInlineDialogComponent } from './fabric-inline-dialog.component';
export class FabricInlineDialogService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} applicationRef
     * @param {?} injector
     * @param {?} platformId
     * @param {?} document
     */
    constructor(componentFactoryResolver, applicationRef, injector, platformId, document) {
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
    ngOnDestroy() {
        this.removeInlineDialog();
    }
    /**
     * @param {?} element
     * @param {?} component
     * @return {?}
     */
    open(element, component) {
        event.stopPropagation();
        if (!this.inlineDialogRef) {
            this.appendInlineDialogToElement(component);
            this.getInlineDialogCords(element);
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.removeInlineDialog();
    }
    /**
     * @return {?}
     */
    observeInlineDialogCords() {
        return this.inlineDialogState$.asObservable();
    }
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    appendInlineDialogToElement(component) {
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricInlineDialogComponent)
            .create(this.injector);
        componentRef.instance.inlineDialogNestedComponent = component;
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
     * @param {?} element
     * @return {?}
     */
    getInlineDialogCords(element) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const inlineDialogCords = new InlineDialogCords(element, window.pageXOffset, window.pageYOffset);
            this.inlineDialogState$.next(inlineDialogCords);
        }
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
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vbW9kYWxzL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLGNBQWMsRUFDZCx3QkFBd0IsRUFJeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBRVIsV0FBVyxFQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBSS9FLE1BQU0sT0FBTyx5QkFBeUI7Ozs7Ozs7O0lBTXJDLFlBQW9CLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNHLFVBQWUsRUFDbEIsUUFBYTtRQUp0Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0csZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBUjFDLG9CQUFlLEdBQXNCLElBQUksQ0FBQztRQUVsQyx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztJQU85RCxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxPQUFtQixFQUFFLFNBQW9CO1FBQzdDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUMxQixJQUFJLENBQUMsMkJBQTJCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0lBQ0YsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsd0JBQXdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7OztJQUVPLDJCQUEyQixDQUFDLFNBQWM7O2NBQzNDLFlBQVksR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQzFDLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDO2FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTdCLFlBQVksQ0FBQyxRQUFRLENBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUFDO1FBQzlELFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUvQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7O2NBRWhELGdCQUFnQixHQUFHLG1CQUFBLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQzthQUN0RSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFFN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTyxrQkFBa0I7UUFDekIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNGLENBQUM7Ozs7OztJQUVPLG9CQUFvQixDQUFDLE9BQW1CO1FBRS9DLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztrQkFDakMsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDO1lBRWhHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7OztZQW5FRCxVQUFVOzs7O1lBbEJWLHdCQUF3QjtZQUR4QixjQUFjO1lBT2QsUUFBUTs0Q0FzQkosTUFBTSxTQUFDLFdBQVc7NENBQ2xCLE1BQU0sU0FBQyxRQUFROzs7O0lBUm5CLG9EQUEwQzs7Ozs7SUFFMUMsdURBQThEOzs7OztJQUVsRCw2REFBMEQ7Ozs7O0lBQ25FLG1EQUFzQzs7Ozs7SUFDdEMsNkNBQTBCOzs7OztJQUMxQiwrQ0FBNEM7Ozs7O0lBQzVDLDZDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFwcGxpY2F0aW9uUmVmLFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdENvbXBvbmVudFJlZixcblx0RWxlbWVudFJlZixcblx0RW1iZWRkZWRWaWV3UmVmLFxuXHRJbmplY3QsXG5cdEluamVjdGFibGUsXG5cdEluamVjdG9yLFxuXHRPbkRlc3Ryb3ksXG5cdFBMQVRGT1JNX0lELFxuXHRUeXBlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSW5saW5lRGlhbG9nQ29yZHMgfSBmcm9tICcuL2lubGluZS1kaWFsb2ctY29yZHMnO1xuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy5jb21wb25lbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRpbmxpbmVEaWFsb2dSZWY6IENvbXBvbmVudFJlZjxhbnk+ID0gbnVsbDtcblxuXHRwcml2YXRlIGlubGluZURpYWxvZ1N0YXRlJCA9IG5ldyBTdWJqZWN0PElubGluZURpYWxvZ0NvcmRzPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVJbmxpbmVEaWFsb2coKTtcblx0fVxuXG5cdG9wZW4oZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50OiBUeXBlPGFueT4pOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAoIXRoaXMuaW5saW5lRGlhbG9nUmVmKSB7XG5cdFx0XHR0aGlzLmFwcGVuZElubGluZURpYWxvZ1RvRWxlbWVudChjb21wb25lbnQpO1xuXHRcdFx0dGhpcy5nZXRJbmxpbmVEaWFsb2dDb3JkcyhlbGVtZW50KTtcblx0XHR9XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZUlubGluZURpYWxvZygpO1xuXHR9XG5cblx0b2JzZXJ2ZUlubGluZURpYWxvZ0NvcmRzKCk6IE9ic2VydmFibGU8SW5saW5lRGlhbG9nQ29yZHM+IHtcblx0XHRyZXR1cm4gdGhpcy5pbmxpbmVEaWFsb2dTdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRwcml2YXRlIGFwcGVuZElubGluZURpYWxvZ1RvRWxlbWVudChjb21wb25lbnQ6IGFueSk6IHZvaWQge1xuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdFx0IC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnQpXG5cdFx0XHRcdFx0XHRcdFx0IC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cblx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UuaW5saW5lRGlhbG9nTmVzdGVkQ29tcG9uZW50ID0gY29tcG9uZW50O1xuXHRcdGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cblx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuXHRcdGNvbnN0IGRvbURpYWxvZ0VsZW1lbnQgPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuXHRcdFx0LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuXHRcdHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21EaWFsb2dFbGVtZW50KTtcblxuXHRcdHRoaXMuaW5saW5lRGlhbG9nUmVmID0gY29tcG9uZW50UmVmO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVJbmxpbmVEaWFsb2coKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5saW5lRGlhbG9nUmVmKSB7XG5cdFx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy5pbmxpbmVEaWFsb2dSZWYuaG9zdFZpZXcpO1xuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dSZWYuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dSZWYgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0SW5saW5lRGlhbG9nQ29yZHMoZWxlbWVudDogRWxlbWVudFJlZik6IHZvaWQge1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGlubGluZURpYWxvZ0NvcmRzID0gbmV3IElubGluZURpYWxvZ0NvcmRzKGVsZW1lbnQsIHdpbmRvdy5wYWdlWE9mZnNldCwgd2luZG93LnBhZ2VZT2Zmc2V0KTtcblxuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dTdGF0ZSQubmV4dChpbmxpbmVEaWFsb2dDb3Jkcyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=