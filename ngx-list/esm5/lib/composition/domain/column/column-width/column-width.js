/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnWidthType } from './column-width-type';
var ColumnWidth = /** @class */ (function () {
    function ColumnWidth(width) {
        this.baseWidth = width;
        this.setWidthAndType(width);
    }
    /**
     * @return {?}
     */
    ColumnWidth.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    ColumnWidth.prototype.getColumnType = /**
     * @return {?}
     */
    function () {
        return this.template;
    };
    /**
     * @return {?}
     */
    ColumnWidth.prototype.isTypePercentage = /**
     * @return {?}
     */
    function () {
        return this.template === ColumnWidthType.PERCENTAGE;
    };
    /**
     * @return {?}
     */
    ColumnWidth.prototype.isTypeAuto = /**
     * @return {?}
     */
    function () {
        return this.template === ColumnWidthType.AUTO;
    };
    /**
     * @return {?}
     */
    ColumnWidth.prototype.isTypeNumber = /**
     * @return {?}
     */
    function () {
        return this.template === ColumnWidthType.NUMBER;
    };
    /**
     * @param {?} width
     * @return {?}
     */
    ColumnWidth.prototype.setWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.width = width;
    };
    /**
     * @param {?} width
     * @return {?}
     */
    ColumnWidth.prototype.setWidthAndType = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        if (width === undefined || width === null || width === 'auto') {
            this.template = ColumnWidthType.AUTO;
            this.setWidth(null);
        }
        else if (this.isPercentage(width)) {
            this.template = ColumnWidthType.PERCENTAGE;
            this.setWidth(this.percentageToNumber('' + width));
        }
        else if (this.isStringNumber(width)) {
            this.template = ColumnWidthType.NUMBER;
            this.setWidth(+width);
        }
        else {
            this.template = ColumnWidthType.NUMBER;
            this.setWidth(+width);
        }
    };
    /**
     * @return {?}
     */
    ColumnWidth.prototype.clone = /**
     * @return {?}
     */
    function () {
        return new ColumnWidth(this.baseWidth);
    };
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    ColumnWidth.prototype.isPercentage = /**
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        return typeof width === 'string' && width[width.length - 1] === '%';
    };
    /**
     * Width needs to be in format '89%'
     * @param width
     */
    /**
     * Width needs to be in format '89%'
     * @private
     * @param {?} width
     * @return {?}
     */
    ColumnWidth.prototype.percentageToNumber = /**
     * Width needs to be in format '89%'
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        return +(width.slice(0, -1));
    };
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    ColumnWidth.prototype.isStringNumber = /**
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        /** @type {?} */
        var widthAsNumber = +width;
        return Number.isNaN(widthAsNumber);
    };
    return ColumnWidth;
}());
export { ColumnWidth };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnWidth.prototype.template;
    /**
     * @type {?}
     * @private
     */
    ColumnWidth.prototype.baseWidth;
    /**
     * @type {?}
     * @private
     */
    ColumnWidth.prototype.width;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXdpZHRoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQ7SUFRQyxxQkFBWSxLQUF1QjtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELG1DQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsc0NBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsZ0NBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLGVBQWUsQ0FBQyxJQUFJLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELGtDQUFZOzs7SUFBWjtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxlQUFlLENBQUMsTUFBTSxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsOEJBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxxQ0FBZTs7OztJQUFmLFVBQWdCLEtBQXNCO1FBRXJDLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLEVBQUU7WUFFOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FFcEI7YUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFDO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBRW5EO2FBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBRXRDLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7YUFBTTtZQUVOLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDRixDQUFDOzs7O0lBRUQsMkJBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRU8sa0NBQVk7Ozs7O0lBQXBCLFVBQXFCLEtBQXNCO1FBQzFDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0ssd0NBQWtCOzs7Ozs7SUFBMUIsVUFBMkIsS0FBYTtRQUN2QyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8sb0NBQWM7Ozs7O0lBQXRCLFVBQXVCLEtBQXNCOztZQUN0QyxhQUFhLEdBQUcsQ0FBQyxLQUFLO1FBRTVCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBakZELElBaUZDOzs7Ozs7O0lBL0VBLCtCQUFrQzs7Ozs7SUFFbEMsZ0NBQW1DOzs7OztJQUVuQyw0QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5XaWR0aFR5cGUgfSBmcm9tICcuL2NvbHVtbi13aWR0aC10eXBlJztcblxuZXhwb3J0IGNsYXNzIENvbHVtbldpZHRoIHtcblxuXHRwcml2YXRlIHRlbXBsYXRlOiBDb2x1bW5XaWR0aFR5cGU7XG5cblx0cHJpdmF0ZSBiYXNlV2lkdGg6IG51bWJlciB8IHN0cmluZztcblxuXHRwcml2YXRlIHdpZHRoOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3Iod2lkdGg/OiBudW1iZXIgfCBzdHJpbmcpIHtcblx0XHR0aGlzLmJhc2VXaWR0aCA9IHdpZHRoO1xuXHRcdHRoaXMuc2V0V2lkdGhBbmRUeXBlKHdpZHRoKTtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRDb2x1bW5UeXBlKCk6IENvbHVtbldpZHRoVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGU7XG5cdH1cblxuXHRpc1R5cGVQZXJjZW50YWdlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlID09PSBDb2x1bW5XaWR0aFR5cGUuUEVSQ0VOVEFHRTtcblx0fVxuXG5cdGlzVHlwZUF1dG8oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGUgPT09IENvbHVtbldpZHRoVHlwZS5BVVRPO1xuXHR9XG5cblx0aXNUeXBlTnVtYmVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlID09PSBDb2x1bW5XaWR0aFR5cGUuTlVNQkVSO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0fVxuXG5cdHNldFdpZHRoQW5kVHlwZSh3aWR0aDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAod2lkdGggPT09IHVuZGVmaW5lZCB8fCB3aWR0aCA9PT0gbnVsbCB8fCB3aWR0aCA9PT0gJ2F1dG8nKSB7XG5cblx0XHRcdHRoaXMudGVtcGxhdGUgPSBDb2x1bW5XaWR0aFR5cGUuQVVUTztcblx0XHRcdHRoaXMuc2V0V2lkdGgobnVsbCk7XG5cblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNQZXJjZW50YWdlKHdpZHRoKSkge1xuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gQ29sdW1uV2lkdGhUeXBlLlBFUkNFTlRBR0U7XG5cdFx0XHR0aGlzLnNldFdpZHRoKHRoaXMucGVyY2VudGFnZVRvTnVtYmVyKCcnICsgd2lkdGgpKTtcblxuXHRcdH0gZWxzZSBpZiAodGhpcy5pc1N0cmluZ051bWJlcih3aWR0aCkpIHtcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IENvbHVtbldpZHRoVHlwZS5OVU1CRVI7XG5cdFx0XHR0aGlzLnNldFdpZHRoKCt3aWR0aCk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IENvbHVtbldpZHRoVHlwZS5OVU1CRVI7XG5cdFx0XHR0aGlzLnNldFdpZHRoKCt3aWR0aCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvbmUoKTogQ29sdW1uV2lkdGgge1xuXHRcdHJldHVybiBuZXcgQ29sdW1uV2lkdGgodGhpcy5iYXNlV2lkdGgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc1BlcmNlbnRhZ2Uod2lkdGg6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0eXBlb2Ygd2lkdGggPT09ICdzdHJpbmcnICYmIHdpZHRoW3dpZHRoLmxlbmd0aCAtIDFdID09PSAnJSc7XG5cdH1cblxuXHQvKipcblx0ICogV2lkdGggbmVlZHMgdG8gYmUgaW4gZm9ybWF0ICc4OSUnXG5cdCAqIEBwYXJhbSB3aWR0aFxuXHQgKi9cblx0cHJpdmF0ZSBwZXJjZW50YWdlVG9OdW1iZXIod2lkdGg6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0cmV0dXJuICsod2lkdGguc2xpY2UoMCwgLTEpKTtcblx0fVxuXG5cdHByaXZhdGUgaXNTdHJpbmdOdW1iZXIod2lkdGg6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IHdpZHRoQXNOdW1iZXIgPSArd2lkdGg7XG5cblx0XHRyZXR1cm4gTnVtYmVyLmlzTmFOKHdpZHRoQXNOdW1iZXIpO1xuXHR9XG59XG4iXX0=