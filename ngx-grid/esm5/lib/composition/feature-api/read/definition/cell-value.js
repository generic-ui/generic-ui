/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var CellValueType = {
    TEXT: 0,
    HTML: 1,
};
export { CellValueType };
CellValueType[CellValueType.TEXT] = 'TEXT';
CellValueType[CellValueType.HTML] = 'HTML';
var CellValue = /** @class */ (function () {
    function CellValue(value, type) {
        this.value = value;
        this.type = type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CellValue.text = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return new CellValue(value, CellValueType.TEXT);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CellValue.HTML = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return new CellValue(value, CellValueType.HTML);
    };
    return CellValue;
}());
export { CellValue };
if (false) {
    /** @type {?} */
    CellValue.prototype.value;
    /** @type {?} */
    CellValue.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2ZlYXR1cmUtYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNDLE9BQUk7SUFDSixPQUFJOzs7OztBQUdMO0lBRUMsbUJBQW1CLEtBQVUsRUFDVixJQUFtQjtRQURuQixVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ1YsU0FBSSxHQUFKLElBQUksQ0FBZTtJQUN0QyxDQUFDOzs7OztJQUVNLGNBQUk7Ozs7SUFBWCxVQUFZLEtBQVU7UUFDckIsT0FBTyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRU0sY0FBSTs7OztJQUFYLFVBQVksS0FBVTtRQUNyQixPQUFPLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7Ozs7SUFaWSwwQkFBaUI7O0lBQzFCLHlCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIENlbGxWYWx1ZVR5cGUge1xuXHRURVhULFxuXHRIVE1MXG59XG5cbmV4cG9ydCBjbGFzcyBDZWxsVmFsdWUge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogYW55LFxuXHRcdFx0XHRwdWJsaWMgcmVhZG9ubHkgdHlwZTogQ2VsbFZhbHVlVHlwZSkge1xuXHR9XG5cblx0c3RhdGljIHRleHQodmFsdWU6IGFueSk6IENlbGxWYWx1ZSB7XG5cdFx0cmV0dXJuIG5ldyBDZWxsVmFsdWUodmFsdWUsIENlbGxWYWx1ZVR5cGUuVEVYVCk7XG5cdH1cblxuXHRzdGF0aWMgSFRNTCh2YWx1ZTogYW55KTogQ2VsbFZhbHVlIHtcblx0XHRyZXR1cm4gbmV3IENlbGxWYWx1ZSh2YWx1ZSwgQ2VsbFZhbHVlVHlwZS5IVE1MKTtcblx0fVxuXG59XG4iXX0=