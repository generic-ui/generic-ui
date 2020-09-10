/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
/**
 * @abstract
 * @template T
 */
export class FabricModal {
    /**
     * @protected
     * @param {?} componentFactoryResolver
     * @param {?} applicationRef
     * @param {?} injector
     * @param {?} document
     */
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.componentRef = null;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeComponent();
    }
    /**
     * @return {?}
     */
    createAndAppend() {
        if (this.componentRef) {
            this.removeComponent();
        }
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(this.getComponent())
            .create(this.injector);
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domNotificationContainerElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domNotificationContainerElement);
        this.componentRef = componentRef;
    }
    /**
     * @return {?}
     */
    removeComponent() {
        if (this.componentRef) {
            this.applicationRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
    /**
     * @return {?}
     */
    getComponentRef() {
        return this.componentRef;
    }
}
/** @nocollapse */
FabricModal.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /** @type {?} */
    FabricModal.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    FabricModal.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricModal.prototype.applicationRef;
    /**
     * @type {?}
     * @private
     */
    FabricModal.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    FabricModal.prototype.document;
    /**
     * @abstract
     * @return {?}
     */
    FabricModal.prototype.getComponent = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiY29tbW9uL2ZhYnJpYy1tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBaUMsTUFBTSxFQUFFLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDM0ksT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUUzQyxNQUFNLE9BQWdCLFdBQVc7Ozs7Ozs7O0lBSWhDLFlBQXVDLHdCQUFrRCxFQUNqRSxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWtCO1FBSHJCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDakUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTDVELGlCQUFZLEdBQW9CLElBQUksQ0FBQztJQU1yQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBSUQsZUFBZTtRQUNkLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdkI7O2NBRUssWUFBWSxHQUFHLElBQUksQ0FBQyx3QkFBd0I7YUFDMUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTdCLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUvQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7O2NBRWhELCtCQUErQixHQUFHLG1CQUFBLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQzthQUNyRixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFFN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztZQWxEdUIsd0JBQXdCO1lBQXhDLGNBQWM7WUFBbUUsUUFBUTtZQVU3QyxRQUFRLHVCQUFwRCxNQUFNLFNBQUMsUUFBUTs7OztJQUx2QixtQ0FBcUM7Ozs7O0lBRWYsK0NBQW1FOzs7OztJQUNsRixxQ0FBK0M7Ozs7O0lBQy9DLCtCQUFtQzs7Ozs7SUFDbkMsK0JBQXFEOzs7OztJQU81RCxxREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0LCBJbmplY3RvciwgT25EZXN0cm95LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWJyaWNNb2RhbDxUPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0Y29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD4gPSBudWxsO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdFx0XHQgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgcmVhZG9ubHkgZG9jdW1lbnQ6IERvY3VtZW50KSB7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnJlbW92ZUNvbXBvbmVudCgpO1xuXHR9XG5cblx0YWJzdHJhY3QgZ2V0Q29tcG9uZW50KCk6IFR5cGU8VD5cblxuXHRjcmVhdGVBbmRBcHBlbmQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNvbXBvbmVudCgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdFx0IC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmdldENvbXBvbmVudCgpKVxuXHRcdFx0XHRcdFx0XHRcdCAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG5cdFx0Y29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tTm90aWZpY2F0aW9uQ29udGFpbmVyRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbU5vdGlmaWNhdGlvbkNvbnRhaW5lckVsZW1lbnQpO1xuXG5cdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRyZW1vdmVDb21wb25lbnQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXHRcdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5jb21wb25lbnRSZWYgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdGdldENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8VD4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudFJlZjtcblx0fVxufVxuIl19