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
     * @param {?=} injector
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    open(element, component, injector, placement, offset) {
        event.stopPropagation();
        if (!this.inlineDialogRef) {
            this.appendInlineDialogToElement(component, injector);
            this.getInlineDialogCords(element, placement, offset);
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
     * @param {?} element
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    getInlineDialogCords(element, placement, offset) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const inlineDialogCords = new InlineDialogCords(element, window.pageXOffset, window.pageYOffset, placement, offset);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixjQUFjLEVBQ2Qsd0JBQXdCLEVBSXhCLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUVSLFdBQVcsRUFFWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUsvRSxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7OztJQU1yQyxZQUFvQix3QkFBa0QsRUFDM0QsY0FBOEIsRUFDOUIsUUFBa0IsRUFDRyxVQUFlLEVBQ2xCLFFBQWE7UUFKdEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNHLGVBQVUsR0FBVixVQUFVLENBQUs7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVIxQyxvQkFBZSxHQUFzQixJQUFJLENBQUM7UUFFbEMsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQXFCLENBQUM7SUFPOUQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7Ozs7SUFFRCxJQUFJLENBQUMsT0FBbUIsRUFBRSxTQUFvQixFQUFFLFFBQW1CLEVBQUUsU0FBaUMsRUFBRSxNQUFlO1FBQ3RILEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUMxQixJQUFJLENBQUMsMkJBQTJCLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDTixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDYjtJQUNGLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHdCQUF3QjtRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7O0lBRU8sMkJBQTJCLENBQUMsU0FBYyxFQUFFLFFBQW1COztjQUVoRSxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUMxQyx1QkFBdUIsQ0FBQywyQkFBMkIsQ0FBQzthQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUU3QixZQUFZLENBQUMsUUFBUSxDQUFDLDJCQUEyQixHQUFHLFNBQVMsQ0FBQztRQUU5RCxJQUFJLFFBQVEsRUFBRTtZQUNiLFlBQVksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLEdBQUcsUUFBUSxDQUFDO1NBQzVEO1FBRUQsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRS9DLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Y0FFaEQsZ0JBQWdCLEdBQUcsbUJBQUEsQ0FBQyxtQkFBQSxZQUFZLENBQUMsUUFBUSxFQUF3QixDQUFDO2FBQ3RFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUU3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVPLGtCQUFrQjtRQUN6QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0YsQ0FBQzs7Ozs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxPQUFtQixFQUFFLFNBQWlDLEVBQUUsTUFBZTtRQUVuRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7a0JBQ2pDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDO1lBRW5ILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7OztZQTNFRCxVQUFVOzs7O1lBbkJWLHdCQUF3QjtZQUR4QixjQUFjO1lBT2QsUUFBUTs0Q0F1QkosTUFBTSxTQUFDLFdBQVc7NENBQ2xCLE1BQU0sU0FBQyxRQUFROzs7O0lBUm5CLG9EQUEwQzs7Ozs7SUFFMUMsdURBQThEOzs7OztJQUVsRCw2REFBMEQ7Ozs7O0lBQ25FLG1EQUFzQzs7Ozs7SUFDdEMsNkNBQTBCOzs7OztJQUMxQiwrQ0FBNEM7Ozs7O0lBQzVDLDZDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFwcGxpY2F0aW9uUmVmLFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdENvbXBvbmVudFJlZixcblx0RWxlbWVudFJlZixcblx0RW1iZWRkZWRWaWV3UmVmLFxuXHRJbmplY3QsXG5cdEluamVjdGFibGUsXG5cdEluamVjdG9yLFxuXHRPbkRlc3Ryb3ksXG5cdFBMQVRGT1JNX0lELFxuXHRUeXBlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSW5saW5lRGlhbG9nQ29yZHMgfSBmcm9tICcuL2lubGluZS1kaWFsb2ctY29yZHMnO1xuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nUGxhY2VtZW50IH0gZnJvbSAnLi9wbGFjZW1lbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRpbmxpbmVEaWFsb2dSZWY6IENvbXBvbmVudFJlZjxhbnk+ID0gbnVsbDtcblxuXHRwcml2YXRlIGlubGluZURpYWxvZ1N0YXRlJCA9IG5ldyBTdWJqZWN0PElubGluZURpYWxvZ0NvcmRzPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVJbmxpbmVEaWFsb2coKTtcblx0fVxuXG5cdG9wZW4oZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50OiBUeXBlPGFueT4sIGluamVjdG9yPzogSW5qZWN0b3IsIHBsYWNlbWVudD86IElubGluZURpYWxvZ1BsYWNlbWVudCwgb2Zmc2V0PzogbnVtYmVyKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKCF0aGlzLmlubGluZURpYWxvZ1JlZikge1xuXHRcdFx0dGhpcy5hcHBlbmRJbmxpbmVEaWFsb2dUb0VsZW1lbnQoY29tcG9uZW50LCBpbmplY3Rvcik7XG5cdFx0XHR0aGlzLmdldElubGluZURpYWxvZ0NvcmRzKGVsZW1lbnQsIHBsYWNlbWVudCwgb2Zmc2V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdGNsb3NlKCk6IHZvaWQge1xuXHRcdHRoaXMucmVtb3ZlSW5saW5lRGlhbG9nKCk7XG5cdH1cblxuXHRvYnNlcnZlSW5saW5lRGlhbG9nQ29yZHMoKTogT2JzZXJ2YWJsZTxJbmxpbmVEaWFsb2dDb3Jkcz4ge1xuXHRcdHJldHVybiB0aGlzLmlubGluZURpYWxvZ1N0YXRlJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdHByaXZhdGUgYXBwZW5kSW5saW5lRGlhbG9nVG9FbGVtZW50KGNvbXBvbmVudDogYW55LCBpbmplY3Rvcj86IEluamVjdG9yKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHRcdCAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHRcdCAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG5cdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmlubGluZURpYWxvZ05lc3RlZENvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuXHRcdGlmIChpbmplY3Rvcikge1xuXHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmlubGluZURpYWxvZ05lc3RlZEluamVjdG9yID0gaW5qZWN0b3I7XG5cdFx0fVxuXG5cdFx0Y29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tRGlhbG9nRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbURpYWxvZ0VsZW1lbnQpO1xuXG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUlubGluZURpYWxvZygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmxpbmVEaWFsb2dSZWYpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLmlubGluZURpYWxvZ1JlZi5ob3N0Vmlldyk7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1JlZi5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1JlZiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXRJbmxpbmVEaWFsb2dDb3JkcyhlbGVtZW50OiBFbGVtZW50UmVmLCBwbGFjZW1lbnQ/OiBJbmxpbmVEaWFsb2dQbGFjZW1lbnQsIG9mZnNldD86IG51bWJlcik6IHZvaWQge1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGlubGluZURpYWxvZ0NvcmRzID0gbmV3IElubGluZURpYWxvZ0NvcmRzKGVsZW1lbnQsIHdpbmRvdy5wYWdlWE9mZnNldCwgd2luZG93LnBhZ2VZT2Zmc2V0LCBwbGFjZW1lbnQsIG9mZnNldCk7XG5cblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU3RhdGUkLm5leHQoaW5saW5lRGlhbG9nQ29yZHMpO1xuXHRcdH1cblx0fVxufVxuIl19