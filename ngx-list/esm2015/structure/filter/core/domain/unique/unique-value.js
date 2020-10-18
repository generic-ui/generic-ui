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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bmlxdWUtdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBVXZCLFlBQ0MsRUFBaUIsRUFDakIsS0FBVSxFQUNWLFlBQW9CLEVBQ3BCLE9BQWdCO1FBRWhCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztDQUNEOzs7Ozs7SUEvQ0EseUJBQW1DOzs7OztJQUVuQyw0QkFBbUI7Ozs7O0lBRW5CLG1DQUE2Qjs7Ozs7SUFFN0IsOEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVW5pcXVlVmFsdWVJZCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLWlkJztcblxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbHVlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBVbmlxdWVWYWx1ZUlkO1xuXG5cdHByaXZhdGUgdmFsdWU6IGFueTtcblxuXHRwcml2YXRlIGRpc3BsYXlWYWx1ZTogc3RyaW5nO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRpZDogVW5pcXVlVmFsdWVJZCxcblx0XHR2YWx1ZTogYW55LFxuXHRcdGRpc3BsYXlWYWx1ZTogc3RyaW5nLFxuXHRcdGVuYWJsZWQ6IGJvb2xlYW5cblx0KSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmRpc3BsYXlWYWx1ZSA9IGRpc3BsYXlWYWx1ZTtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0Z2V0SWQoKTogVW5pcXVlVmFsdWVJZCB7XG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH1cblxuXHRnZXRWYWx1ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cblx0Z2V0RGlzcGxheVZhbHVlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZGlzcGxheVZhbHVlO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0c2VsZWN0KCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdH1cblxuXHR1bnNlbGVjdCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0fVxufVxuIl19