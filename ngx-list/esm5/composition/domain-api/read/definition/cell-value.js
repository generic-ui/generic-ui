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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC12YWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFDQyxPQUFJO0lBQ0osT0FBSTs7Ozs7QUFHTDtJQUVDLG1CQUFtQixLQUFVLEVBQ1YsSUFBbUI7UUFEbkIsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUNWLFNBQUksR0FBSixJQUFJLENBQWU7SUFDdEMsQ0FBQzs7Ozs7SUFFTSxjQUFJOzs7O0lBQVgsVUFBWSxLQUFVO1FBQ3JCLE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVNLGNBQUk7Ozs7SUFBWCxVQUFZLEtBQVU7UUFDckIsT0FBTyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRixnQkFBQztBQUFELENBQUMsQUFkRCxJQWNDOzs7O0lBWlksMEJBQWlCOztJQUMxQix5QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBDZWxsVmFsdWVUeXBlIHtcblx0VEVYVCxcblx0SFRNTFxufVxuXG5leHBvcnQgY2xhc3MgQ2VsbFZhbHVlIHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IGFueSxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IHR5cGU6IENlbGxWYWx1ZVR5cGUpIHtcblx0fVxuXG5cdHN0YXRpYyB0ZXh0KHZhbHVlOiBhbnkpOiBDZWxsVmFsdWUge1xuXHRcdHJldHVybiBuZXcgQ2VsbFZhbHVlKHZhbHVlLCBDZWxsVmFsdWVUeXBlLlRFWFQpO1xuXHR9XG5cblx0c3RhdGljIEhUTUwodmFsdWU6IGFueSk6IENlbGxWYWx1ZSB7XG5cdFx0cmV0dXJuIG5ldyBDZWxsVmFsdWUodmFsdWUsIENlbGxWYWx1ZVR5cGUuSFRNTCk7XG5cdH1cblxufVxuIl19