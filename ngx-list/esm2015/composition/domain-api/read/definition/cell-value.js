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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC12YWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFDQyxPQUFJO0lBQ0osT0FBSTs7Ozs7QUFHTCxNQUFNLE9BQU8sU0FBUzs7Ozs7SUFFckIsWUFBbUIsS0FBVSxFQUNWLElBQW1CO1FBRG5CLFVBQUssR0FBTCxLQUFLLENBQUs7UUFDVixTQUFJLEdBQUosSUFBSSxDQUFlO0lBQ3RDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFVO1FBQ3JCLE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBVTtRQUNyQixPQUFPLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUVEOzs7SUFaWSwwQkFBaUI7O0lBQzFCLHlCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIENlbGxWYWx1ZVR5cGUge1xuXHRURVhULFxuXHRIVE1MXG59XG5cbmV4cG9ydCBjbGFzcyBDZWxsVmFsdWUge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogYW55LFxuXHRcdFx0XHRwdWJsaWMgcmVhZG9ubHkgdHlwZTogQ2VsbFZhbHVlVHlwZSkge1xuXHR9XG5cblx0c3RhdGljIHRleHQodmFsdWU6IGFueSk6IENlbGxWYWx1ZSB7XG5cdFx0cmV0dXJuIG5ldyBDZWxsVmFsdWUodmFsdWUsIENlbGxWYWx1ZVR5cGUuVEVYVCk7XG5cdH1cblxuXHRzdGF0aWMgSFRNTCh2YWx1ZTogYW55KTogQ2VsbFZhbHVlIHtcblx0XHRyZXR1cm4gbmV3IENlbGxWYWx1ZSh2YWx1ZSwgQ2VsbFZhbHVlVHlwZS5IVE1MKTtcblx0fVxuXG59XG4iXX0=