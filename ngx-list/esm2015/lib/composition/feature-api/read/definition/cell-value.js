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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2ZlYXR1cmUtYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNDLE9BQUk7SUFDSixPQUFJOzs7OztBQUdMLE1BQU0sT0FBTyxTQUFTOzs7OztJQUVyQixZQUFtQixLQUFVLEVBQ1YsSUFBbUI7UUFEbkIsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUNWLFNBQUksR0FBSixJQUFJLENBQWU7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQVU7UUFDckIsT0FBTyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFVO1FBQ3JCLE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBRUQ7OztJQVpZLDBCQUFpQjs7SUFDMUIseUJBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ2VsbFZhbHVlVHlwZSB7XG5cdFRFWFQsXG5cdEhUTUxcbn1cblxuZXhwb3J0IGNsYXNzIENlbGxWYWx1ZSB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHZhbHVlOiBhbnksXG5cdFx0XHRcdHB1YmxpYyByZWFkb25seSB0eXBlOiBDZWxsVmFsdWVUeXBlKSB7XG5cdH1cblxuXHRzdGF0aWMgdGV4dCh2YWx1ZTogYW55KTogQ2VsbFZhbHVlIHtcblx0XHRyZXR1cm4gbmV3IENlbGxWYWx1ZSh2YWx1ZSwgQ2VsbFZhbHVlVHlwZS5URVhUKTtcblx0fVxuXG5cdHN0YXRpYyBIVE1MKHZhbHVlOiBhbnkpOiBDZWxsVmFsdWUge1xuXHRcdHJldHVybiBuZXcgQ2VsbFZhbHVlKHZhbHVlLCBDZWxsVmFsdWVUeXBlLkhUTUwpO1xuXHR9XG5cbn1cbiJdfQ==