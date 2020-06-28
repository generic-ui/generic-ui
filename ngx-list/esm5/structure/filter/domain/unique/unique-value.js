/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UniqueValue = /** @class */ (function () {
    function UniqueValue(id, value, displayValue, enabled) {
        this.id = id;
        this.value = value;
        this.displayValue = displayValue;
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    UniqueValue.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.id;
    };
    /**
     * @return {?}
     */
    UniqueValue.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.value;
    };
    /**
     * @return {?}
     */
    UniqueValue.prototype.getDisplayValue = /**
     * @return {?}
     */
    function () {
        return this.displayValue;
    };
    /**
     * @return {?}
     */
    UniqueValue.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    /**
     * @return {?}
     */
    UniqueValue.prototype.isDisabled = /**
     * @return {?}
     */
    function () {
        return !this.enabled;
    };
    /**
     * @return {?}
     */
    UniqueValue.prototype.select = /**
     * @return {?}
     */
    function () {
        this.enabled = true;
    };
    /**
     * @return {?}
     */
    UniqueValue.prototype.unselect = /**
     * @return {?}
     */
    function () {
        this.enabled = false;
    };
    return UniqueValue;
}());
export { UniqueValue };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueValue.prototype.id;
    /**
     * @type {?}
     * @private
     */
    UniqueValue.prototype.value;
    /**
     * @type {?}
     * @private
     */
    UniqueValue.prototype.displayValue;
    /**
     * @type {?}
     * @private
     */
    UniqueValue.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi91bmlxdWUvdW5pcXVlLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQVVDLHFCQUNDLEVBQWlCLEVBQ2pCLEtBQVUsRUFDVixZQUFvQixFQUNwQixPQUFnQjtRQUVoQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCwyQkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELDhCQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQscUNBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCwrQkFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELGdDQUFVOzs7SUFBVjtRQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCw0QkFBTTs7O0lBQU47UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQzs7Ozs7OztJQS9DQSx5QkFBbUM7Ozs7O0lBRW5DLDRCQUFtQjs7Ozs7SUFFbkIsbUNBQTZCOzs7OztJQUU3Qiw4QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUtaWQnO1xuXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWUge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWQ6IFVuaXF1ZVZhbHVlSWQ7XG5cblx0cHJpdmF0ZSB2YWx1ZTogYW55O1xuXG5cdHByaXZhdGUgZGlzcGxheVZhbHVlOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGlkOiBVbmlxdWVWYWx1ZUlkLFxuXHRcdHZhbHVlOiBhbnksXG5cdFx0ZGlzcGxheVZhbHVlOiBzdHJpbmcsXG5cdFx0ZW5hYmxlZDogYm9vbGVhblxuXHQpIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuZGlzcGxheVZhbHVlID0gZGlzcGxheVZhbHVlO1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRnZXRJZCgpOiBVbmlxdWVWYWx1ZUlkIHtcblx0XHRyZXR1cm4gdGhpcy5pZDtcblx0fVxuXG5cdGdldFZhbHVlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxuXHRnZXREaXNwbGF5VmFsdWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5kaXNwbGF5VmFsdWU7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICF0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRzZWxlY3QoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0fVxuXG5cdHVuc2VsZWN0KCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXHR9XG59XG4iXX0=