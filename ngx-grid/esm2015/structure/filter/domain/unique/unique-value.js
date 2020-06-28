/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class UniqueValue {
    /**
     * @param {?} id
     * @param {?} value
     * @param {?} displayValue
     * @param {?} enabled
     */
    constructor(id, value, displayValue, enabled) {
        this.id = id;
        this.value = value;
        this.displayValue = displayValue;
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id;
    }
    /**
     * @return {?}
     */
    getValue() {
        return this.value;
    }
    /**
     * @return {?}
     */
    getDisplayValue() {
        return this.displayValue;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return !this.enabled;
    }
    /**
     * @return {?}
     */
    select() {
        this.enabled = true;
    }
    /**
     * @return {?}
     */
    unselect() {
        this.enabled = false;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi91bmlxdWUvdW5pcXVlLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQVV2QixZQUNDLEVBQWlCLEVBQ2pCLEtBQVUsRUFDVixZQUFvQixFQUNwQixPQUFnQjtRQUVoQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Q0FDRDs7Ozs7O0lBL0NBLHlCQUFtQzs7Ozs7SUFFbkMsNEJBQW1COzs7OztJQUVuQixtQ0FBNkI7Ozs7O0lBRTdCLDhCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVuaXF1ZVZhbHVlSWQgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS1pZCc7XG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVWYWx1ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZDogVW5pcXVlVmFsdWVJZDtcblxuXHRwcml2YXRlIHZhbHVlOiBhbnk7XG5cblx0cHJpdmF0ZSBkaXNwbGF5VmFsdWU6IHN0cmluZztcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0aWQ6IFVuaXF1ZVZhbHVlSWQsXG5cdFx0dmFsdWU6IGFueSxcblx0XHRkaXNwbGF5VmFsdWU6IHN0cmluZyxcblx0XHRlbmFibGVkOiBib29sZWFuXG5cdCkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5kaXNwbGF5VmFsdWUgPSBkaXNwbGF5VmFsdWU7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdGdldElkKCk6IFVuaXF1ZVZhbHVlSWQge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0Z2V0VmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG5cdGdldERpc3BsYXlWYWx1ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmRpc3BsYXlWYWx1ZTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0aXNEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdHNlbGVjdCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHR9XG5cblx0dW5zZWxlY3QoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZmFsc2U7XG5cdH1cbn1cbiJdfQ==