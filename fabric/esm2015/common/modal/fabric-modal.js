/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricReactive } from '../fabric-reactive';
/**
 * @abstract
 * @template T
 */
export class FabricModal extends FabricReactive {
    /**
     * @protected
     * @param {?} componentFactoryResolver
     * @param {?} applicationRef
     * @param {?} injector
     * @param {?} document
     */
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super();
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
     * @param {?=} injector
     * @return {?}
     */
    createAndAppend(injector) {
        /** @type {?} */
        let componentInjector = injector ? injector : this.injector;
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(this.getComponent())
            .create(componentInjector);
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domModalElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domModalElement);
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
    /**
     * @return {?}
     */
    getInjector() {
        return this.injector;
    }
    /**
     * @return {?}
     */
    getDocument() {
        return this.document;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiY29tbW9uL21vZGFsL2ZhYnJpYy1tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBaUMsTUFBTSxFQUFFLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDM0ksT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFFcEQsTUFBTSxPQUFnQixXQUFlLFNBQVEsY0FBYzs7Ozs7Ozs7SUFJMUQsWUFBdUMsd0JBQWtELEVBQ2pFLGNBQThCLEVBQzlCLFFBQWtCLEVBQ0EsUUFBa0I7UUFDM0QsS0FBSyxFQUFFLENBQUM7UUFKOEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNqRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNBLGFBQVEsR0FBUixRQUFRLENBQVU7UUFMNUQsaUJBQVksR0FBb0IsSUFBSSxDQUFDO0lBT3JDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBSUQsZUFBZSxDQUFDLFFBQW1COztZQUM5QixpQkFBaUIsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7O2NBRXJELFlBQVksR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQzFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUM1QyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFFakMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRS9DLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Y0FFaEQsZUFBZSxHQUFHLG1CQUFBLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQzthQUNyRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFFN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7WUExRHVCLHdCQUF3QjtZQUF4QyxjQUFjO1lBQW1FLFFBQVE7WUFXN0MsUUFBUSx1QkFBcEQsTUFBTSxTQUFDLFFBQVE7Ozs7SUFMdkIsbUNBQXFDOzs7OztJQUVmLCtDQUFtRTs7Ozs7SUFDbEYscUNBQStDOzs7OztJQUMvQywrQkFBbUM7Ozs7O0lBQ25DLCtCQUFxRDs7Ozs7SUFRNUQscURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdCwgSW5qZWN0b3IsIE9uRGVzdHJveSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi9mYWJyaWMtcmVhY3RpdmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFicmljTW9kYWw8VD4gZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0Y29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD4gPSBudWxsO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdFx0XHQgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgcmVhZG9ubHkgZG9jdW1lbnQ6IERvY3VtZW50KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucmVtb3ZlQ29tcG9uZW50KCk7XG5cdH1cblxuXHRhYnN0cmFjdCBnZXRDb21wb25lbnQoKTogVHlwZTxUPlxuXG5cdGNyZWF0ZUFuZEFwcGVuZChpbmplY3Rvcj86IEluamVjdG9yKTogdm9pZCB7XG5cdFx0bGV0IGNvbXBvbmVudEluamVjdG9yID0gaW5qZWN0b3IgPyBpbmplY3RvciA6IHRoaXMuaW5qZWN0b3I7XG5cblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHRcdCAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5nZXRDb21wb25lbnQoKSlcblx0XHRcdFx0XHRcdFx0XHQgLmNyZWF0ZShjb21wb25lbnRJbmplY3Rvcik7XG5cblx0XHRjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cblx0XHRjb25zdCBkb21Nb2RhbEVsZW1lbnQgPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuXHRcdFx0LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuXHRcdHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21Nb2RhbEVsZW1lbnQpO1xuXG5cdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRyZW1vdmVDb21wb25lbnQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXHRcdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5jb21wb25lbnRSZWYgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdGdldENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8VD4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudFJlZjtcblx0fVxuXG5cdGdldEluamVjdG9yKCk6IEluamVjdG9yIHtcblx0XHRyZXR1cm4gdGhpcy5pbmplY3Rvcjtcblx0fVxuXG5cdGdldERvY3VtZW50KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZG9jdW1lbnQ7XG5cdH1cbn1cbiJdfQ==