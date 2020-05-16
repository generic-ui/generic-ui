/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const CellValueType = {
    TEXT: 0,
    HTML: 1,
};
export { CellValueType };
CellValueType[CellValueType.TEXT] = 'TEXT';
CellValueType[CellValueType.HTML] = 'HTML';
export class CellValue {
    /**
     * @param {?} value
     * @param {?} type
     */
    constructor(value, type) {
        this.value = value;
        this.type = type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static text(value) {
        return new CellValue(value, CellValueType.TEXT);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static HTML(value) {
        return new CellValue(value, CellValueType.HTML);
    }
}
if (false) {
    /** @type {?} */
    CellValue.prototype.value;
    /** @type {?} */
    CellValue.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQ0MsT0FBSTtJQUNKLE9BQUk7Ozs7O0FBR0wsTUFBTSxPQUFPLFNBQVM7Ozs7O0lBRXJCLFlBQW1CLEtBQVUsRUFDVixJQUFtQjtRQURuQixVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ1YsU0FBSSxHQUFKLElBQUksQ0FBZTtJQUN0QyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBVTtRQUNyQixPQUFPLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQVU7UUFDckIsT0FBTyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FFRDs7O0lBWlksMEJBQWlCOztJQUMxQix5QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBDZWxsVmFsdWVUeXBlIHtcblx0VEVYVCxcblx0SFRNTFxufVxuXG5leHBvcnQgY2xhc3MgQ2VsbFZhbHVlIHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IGFueSxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IHR5cGU6IENlbGxWYWx1ZVR5cGUpIHtcblx0fVxuXG5cdHN0YXRpYyB0ZXh0KHZhbHVlOiBhbnkpOiBDZWxsVmFsdWUge1xuXHRcdHJldHVybiBuZXcgQ2VsbFZhbHVlKHZhbHVlLCBDZWxsVmFsdWVUeXBlLlRFWFQpO1xuXHR9XG5cblx0c3RhdGljIEhUTUwodmFsdWU6IGFueSk6IENlbGxWYWx1ZSB7XG5cdFx0cmV0dXJuIG5ldyBDZWxsVmFsdWUodmFsdWUsIENlbGxWYWx1ZVR5cGUuSFRNTCk7XG5cdH1cblxufVxuIl19