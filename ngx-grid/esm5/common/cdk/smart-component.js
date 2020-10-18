/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Reactive } from './reactive';
/**
 * @abstract
 */
var /**
 * @abstract
 */
SmartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SmartComponent, _super);
    function SmartComponent(detector) {
        var _this = _super.call(this) || this;
        _this.detector = detector;
        _this.viewRendered = false;
        return _this;
    }
    /**
     * @return {?}
     */
    SmartComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.viewRendered = true;
    };
    /**
     * @return {?}
     */
    SmartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    SmartComponent.prototype.reRender = /**
     * @return {?}
     */
    function () {
        if (this.isViewRendered()) {
            this.detector.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    SmartComponent.prototype.isViewRendered = /**
     * @return {?}
     */
    function () {
        return this.viewRendered;
    };
    return SmartComponent;
}(Reactive));
/**
 * @abstract
 */
export { SmartComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SmartComponent.prototype.viewRendered;
    /**
     * @type {?}
     * @protected
     */
    SmartComponent.prototype.detector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7QUFFdEM7Ozs7SUFBNkMsMENBQVE7SUFJcEQsd0JBQXlDLFFBQTJCO1FBQXBFLFlBQ0MsaUJBQU8sU0FDUDtRQUZ3QyxjQUFRLEdBQVIsUUFBUSxDQUFtQjtRQUY1RCxrQkFBWSxHQUFZLEtBQUssQ0FBQzs7SUFJdEMsQ0FBQzs7OztJQUVELHdDQUFlOzs7SUFBZjtRQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDQyxpQkFBTSxXQUFXLFdBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0MsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM5QjtJQUNGLENBQUM7Ozs7SUFFRCx1Q0FBYzs7O0lBQWQ7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztJQUVGLHFCQUFDO0FBQUQsQ0FBQyxBQTFCRCxDQUE2QyxRQUFRLEdBMEJwRDs7Ozs7Ozs7OztJQXhCQSxzQ0FBc0M7Ozs7O0lBRWhCLGtDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi9yZWFjdGl2ZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTbWFydENvbXBvbmVudCBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHZpZXdSZW5kZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnZpZXdSZW5kZXJlZCA9IHRydWU7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG5cblx0cmVSZW5kZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNWaWV3UmVuZGVyZWQoKSkge1xuXHRcdFx0dGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNWaWV3UmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmlld1JlbmRlcmVkO1xuXHR9XG5cbn1cbiJdfQ==