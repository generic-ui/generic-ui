/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ApplicationRef, ComponentFactoryResolver, Inject, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricReactive } from '../fabric-reactive';
/**
 * @abstract
 * @template T
 */
var FabricModal = /** @class */ (function (_super) {
    tslib_1.__extends(FabricModal, _super);
    function FabricModal(componentFactoryResolver, applicationRef, injector, document) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.applicationRef = applicationRef;
        _this.injector = injector;
        _this.document = document;
        _this.componentRef = null;
        return _this;
    }
    /**
     * @return {?}
     */
    FabricModal.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeComponent();
    };
    /**
     * @param {?=} injector
     * @return {?}
     */
    FabricModal.prototype.createAndAppend = /**
     * @param {?=} injector
     * @return {?}
     */
    function (injector) {
        /** @type {?} */
        var componentInjector = injector ? injector : this.injector;
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(this.getComponent())
            .create(componentInjector);
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domModalElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domModalElement);
        this.componentRef = componentRef;
    };
    /**
     * @return {?}
     */
    FabricModal.prototype.removeComponent = /**
     * @return {?}
     */
    function () {
        if (this.componentRef) {
            this.applicationRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    };
    /**
     * @return {?}
     */
    FabricModal.prototype.getComponentRef = /**
     * @return {?}
     */
    function () {
        return this.componentRef;
    };
    /**
     * @return {?}
     */
    FabricModal.prototype.getInjector = /**
     * @return {?}
     */
    function () {
        return this.injector;
    };
    /**
     * @return {?}
     */
    FabricModal.prototype.getDocument = /**
     * @return {?}
     */
    function () {
        return this.document;
    };
    /** @nocollapse */
    FabricModal.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return FabricModal;
}(FabricReactive));
export { FabricModal };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiY29tbW9uL21vZGFsL2ZhYnJpYy1tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQWlDLE1BQU0sRUFBRSxRQUFRLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQzNJLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBRXBEO0lBQTZDLHVDQUFjO0lBSTFELHFCQUF1Qyx3QkFBa0QsRUFDakUsY0FBOEIsRUFDOUIsUUFBa0IsRUFDQSxRQUFrQjtRQUg1RCxZQUlDLGlCQUFPLFNBQ1A7UUFMc0MsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNqRSxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUNBLGNBQVEsR0FBUixRQUFRLENBQVU7UUFMNUQsa0JBQVksR0FBb0IsSUFBSSxDQUFDOztJQU9yQyxDQUFDOzs7O0lBRUQsaUNBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBSUQscUNBQWU7Ozs7SUFBZixVQUFnQixRQUFtQjs7WUFDNUIsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFROztZQUV2RCxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUMxQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDNUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBRWpDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUvQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBRWhELGVBQWUsR0FBRyxtQkFBQSxDQUFDLG1CQUFBLFlBQVksQ0FBQyxRQUFRLEVBQXdCLENBQUM7YUFDckUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFlO1FBRTdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQscUNBQWU7OztJQUFmO1FBQ0MsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7Ozs7SUFFRCxxQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGlDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsaUNBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7OztnQkExRHVCLHdCQUF3QjtnQkFBeEMsY0FBYztnQkFBbUUsUUFBUTtnQkFXN0MsUUFBUSx1QkFBcEQsTUFBTSxTQUFDLFFBQVE7O0lBZ0R4QixrQkFBQztDQUFBLEFBdkRELENBQTZDLGNBQWMsR0F1RDFEO1NBdkRxQixXQUFXOzs7SUFFaEMsbUNBQXFDOzs7OztJQUVmLCtDQUFtRTs7Ozs7SUFDbEYscUNBQStDOzs7OztJQUMvQywrQkFBbUM7Ozs7O0lBQ25DLCtCQUFxRDs7Ozs7SUFRNUQscURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdCwgSW5qZWN0b3IsIE9uRGVzdHJveSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi9mYWJyaWMtcmVhY3RpdmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFicmljTW9kYWw8VD4gZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0Y29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD4gPSBudWxsO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdFx0XHQgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgcmVhZG9ubHkgZG9jdW1lbnQ6IERvY3VtZW50KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucmVtb3ZlQ29tcG9uZW50KCk7XG5cdH1cblxuXHRhYnN0cmFjdCBnZXRDb21wb25lbnQoKTogVHlwZTxUPlxuXG5cdGNyZWF0ZUFuZEFwcGVuZChpbmplY3Rvcj86IEluamVjdG9yKTogdm9pZCB7XG5cdFx0Y29uc3QgY29tcG9uZW50SW5qZWN0b3IgPSBpbmplY3RvciA/IGluamVjdG9yIDogdGhpcy5pbmplY3RvcjtcblxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdFx0IC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmdldENvbXBvbmVudCgpKVxuXHRcdFx0XHRcdFx0XHRcdCAuY3JlYXRlKGNvbXBvbmVudEluamVjdG9yKTtcblxuXHRcdGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cblx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuXHRcdGNvbnN0IGRvbU1vZGFsRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbU1vZGFsRWxlbWVudCk7XG5cblx0XHR0aGlzLmNvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZjtcblx0fVxuXG5cdHJlbW92ZUNvbXBvbmVudCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cdFx0XHR0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmNvbXBvbmVudFJlZiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50UmVmO1xuXHR9XG5cblx0Z2V0SW5qZWN0b3IoKTogSW5qZWN0b3Ige1xuXHRcdHJldHVybiB0aGlzLmluamVjdG9yO1xuXHR9XG5cblx0Z2V0RG9jdW1lbnQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5kb2N1bWVudDtcblx0fVxufVxuIl19