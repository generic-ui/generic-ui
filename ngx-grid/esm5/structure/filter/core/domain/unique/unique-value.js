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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bmlxdWUtdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBVUMscUJBQ0MsRUFBaUIsRUFDakIsS0FBVSxFQUNWLFlBQW9CLEVBQ3BCLE9BQWdCO1FBRWhCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELDJCQUFLOzs7SUFBTDtRQUNDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxxQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELCtCQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsZ0NBQVU7OztJQUFWO1FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDRCQUFNOzs7SUFBTjtRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBakRELElBaURDOzs7Ozs7O0lBL0NBLHlCQUFtQzs7Ozs7SUFFbkMsNEJBQW1COzs7OztJQUVuQixtQ0FBNkI7Ozs7O0lBRTdCLDhCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVuaXF1ZVZhbHVlSWQgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS1pZCc7XG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVWYWx1ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZDogVW5pcXVlVmFsdWVJZDtcblxuXHRwcml2YXRlIHZhbHVlOiBhbnk7XG5cblx0cHJpdmF0ZSBkaXNwbGF5VmFsdWU6IHN0cmluZztcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0aWQ6IFVuaXF1ZVZhbHVlSWQsXG5cdFx0dmFsdWU6IGFueSxcblx0XHRkaXNwbGF5VmFsdWU6IHN0cmluZyxcblx0XHRlbmFibGVkOiBib29sZWFuXG5cdCkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5kaXNwbGF5VmFsdWUgPSBkaXNwbGF5VmFsdWU7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdGdldElkKCk6IFVuaXF1ZVZhbHVlSWQge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0Z2V0VmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG5cdGdldERpc3BsYXlWYWx1ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmRpc3BsYXlWYWx1ZTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0aXNEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdHNlbGVjdCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHR9XG5cblx0dW5zZWxlY3QoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZmFsc2U7XG5cdH1cbn1cbiJdfQ==