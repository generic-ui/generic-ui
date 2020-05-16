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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQ0MsT0FBSTtJQUNKLE9BQUk7Ozs7O0FBR0w7SUFFQyxtQkFBbUIsS0FBVSxFQUNWLElBQW1CO1FBRG5CLFVBQUssR0FBTCxLQUFLLENBQUs7UUFDVixTQUFJLEdBQUosSUFBSSxDQUFlO0lBQ3RDLENBQUM7Ozs7O0lBRU0sY0FBSTs7OztJQUFYLFVBQVksS0FBVTtRQUNyQixPQUFPLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFTSxjQUFJOzs7O0lBQVgsVUFBWSxLQUFVO1FBQ3JCLE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUYsZ0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7OztJQVpZLDBCQUFpQjs7SUFDMUIseUJBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ2VsbFZhbHVlVHlwZSB7XG5cdFRFWFQsXG5cdEhUTUxcbn1cblxuZXhwb3J0IGNsYXNzIENlbGxWYWx1ZSB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHZhbHVlOiBhbnksXG5cdFx0XHRcdHB1YmxpYyByZWFkb25seSB0eXBlOiBDZWxsVmFsdWVUeXBlKSB7XG5cdH1cblxuXHRzdGF0aWMgdGV4dCh2YWx1ZTogYW55KTogQ2VsbFZhbHVlIHtcblx0XHRyZXR1cm4gbmV3IENlbGxWYWx1ZSh2YWx1ZSwgQ2VsbFZhbHVlVHlwZS5URVhUKTtcblx0fVxuXG5cdHN0YXRpYyBIVE1MKHZhbHVlOiBhbnkpOiBDZWxsVmFsdWUge1xuXHRcdHJldHVybiBuZXcgQ2VsbFZhbHVlKHZhbHVlLCBDZWxsVmFsdWVUeXBlLkhUTUwpO1xuXHR9XG5cbn1cbiJdfQ==