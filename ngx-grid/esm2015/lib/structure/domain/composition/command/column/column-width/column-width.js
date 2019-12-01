/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnWidthType } from './column-width-type';
export class ColumnWidth {
    /**
     * @param {?=} width
     */
    constructor(width) {
        this.baseWidth = width;
        this.setWidthAndType(width);
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getColumnType() {
        return this.template;
    }
    /**
     * @return {?}
     */
    isTypePercentage() {
        return this.template === ColumnWidthType.PERCENTAGE;
    }
    /**
     * @return {?}
     */
    isTypeAuto() {
        return this.template === ColumnWidthType.AUTO;
    }
    /**
     * @return {?}
     */
    isTypeNumber() {
        return this.template === ColumnWidthType.NUMBER;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.width = width;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidthAndType(width) {
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
    }
    /**
     * @return {?}
     */
    clone() {
        return new ColumnWidth(this.baseWidth);
    }
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    isPercentage(width) {
        return typeof width === 'string' && width[width.length - 1] === '%';
    }
    /**
     * Width needs to be in format '89%'
     * @private
     * @param {?} width
     * @return {?}
     */
    percentageToNumber(width) {
        return +(width.slice(0, -1));
    }
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    isStringNumber(width) {
        /** @type {?} */
        const widthAsNumber = +width;
        return Number.isNaN(widthAsNumber);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXdpZHRoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsTUFBTSxPQUFPLFdBQVc7Ozs7SUFRdkIsWUFBWSxLQUF1QjtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLGVBQWUsQ0FBQyxNQUFNLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFzQjtRQUVyQyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO1lBRTlELElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBRXBCO2FBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBRXBDLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQztZQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUVuRDthQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUV0QyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO2FBQU07WUFFTixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBc0I7UUFDMUMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQ3JFLENBQUM7Ozs7Ozs7SUFNTyxrQkFBa0IsQ0FBQyxLQUFhO1FBQ3ZDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsS0FBc0I7O2NBQ3RDLGFBQWEsR0FBRyxDQUFDLEtBQUs7UUFFNUIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRDs7Ozs7O0lBL0VBLCtCQUFrQzs7Ozs7SUFFbEMsZ0NBQW1DOzs7OztJQUVuQyw0QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5XaWR0aFR5cGUgfSBmcm9tICcuL2NvbHVtbi13aWR0aC10eXBlJztcblxuZXhwb3J0IGNsYXNzIENvbHVtbldpZHRoIHtcblxuXHRwcml2YXRlIHRlbXBsYXRlOiBDb2x1bW5XaWR0aFR5cGU7XG5cblx0cHJpdmF0ZSBiYXNlV2lkdGg6IG51bWJlciB8IHN0cmluZztcblxuXHRwcml2YXRlIHdpZHRoOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3Iod2lkdGg/OiBudW1iZXIgfCBzdHJpbmcpIHtcblx0XHR0aGlzLmJhc2VXaWR0aCA9IHdpZHRoO1xuXHRcdHRoaXMuc2V0V2lkdGhBbmRUeXBlKHdpZHRoKTtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRDb2x1bW5UeXBlKCk6IENvbHVtbldpZHRoVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGU7XG5cdH1cblxuXHRpc1R5cGVQZXJjZW50YWdlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlID09PSBDb2x1bW5XaWR0aFR5cGUuUEVSQ0VOVEFHRTtcblx0fVxuXG5cdGlzVHlwZUF1dG8oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGUgPT09IENvbHVtbldpZHRoVHlwZS5BVVRPO1xuXHR9XG5cblx0aXNUeXBlTnVtYmVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlID09PSBDb2x1bW5XaWR0aFR5cGUuTlVNQkVSO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0fVxuXG5cdHNldFdpZHRoQW5kVHlwZSh3aWR0aDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAod2lkdGggPT09IHVuZGVmaW5lZCB8fCB3aWR0aCA9PT0gbnVsbCB8fCB3aWR0aCA9PT0gJ2F1dG8nKSB7XG5cblx0XHRcdHRoaXMudGVtcGxhdGUgPSBDb2x1bW5XaWR0aFR5cGUuQVVUTztcblx0XHRcdHRoaXMuc2V0V2lkdGgobnVsbCk7XG5cblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNQZXJjZW50YWdlKHdpZHRoKSkge1xuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gQ29sdW1uV2lkdGhUeXBlLlBFUkNFTlRBR0U7XG5cdFx0XHR0aGlzLnNldFdpZHRoKHRoaXMucGVyY2VudGFnZVRvTnVtYmVyKCcnICsgd2lkdGgpKTtcblxuXHRcdH0gZWxzZSBpZiAodGhpcy5pc1N0cmluZ051bWJlcih3aWR0aCkpIHtcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IENvbHVtbldpZHRoVHlwZS5OVU1CRVI7XG5cdFx0XHR0aGlzLnNldFdpZHRoKCt3aWR0aCk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IENvbHVtbldpZHRoVHlwZS5OVU1CRVI7XG5cdFx0XHR0aGlzLnNldFdpZHRoKCt3aWR0aCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvbmUoKTogQ29sdW1uV2lkdGgge1xuXHRcdHJldHVybiBuZXcgQ29sdW1uV2lkdGgodGhpcy5iYXNlV2lkdGgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc1BlcmNlbnRhZ2Uod2lkdGg6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0eXBlb2Ygd2lkdGggPT09ICdzdHJpbmcnICYmIHdpZHRoW3dpZHRoLmxlbmd0aCAtIDFdID09PSAnJSc7XG5cdH1cblxuXHQvKipcblx0ICogV2lkdGggbmVlZHMgdG8gYmUgaW4gZm9ybWF0ICc4OSUnXG5cdCAqIEBwYXJhbSB3aWR0aFxuXHQgKi9cblx0cHJpdmF0ZSBwZXJjZW50YWdlVG9OdW1iZXIod2lkdGg6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0cmV0dXJuICsod2lkdGguc2xpY2UoMCwgLTEpKTtcblx0fVxuXG5cdHByaXZhdGUgaXNTdHJpbmdOdW1iZXIod2lkdGg6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IHdpZHRoQXNOdW1iZXIgPSArd2lkdGg7XG5cblx0XHRyZXR1cm4gTnVtYmVyLmlzTmFOKHdpZHRoQXNOdW1iZXIpO1xuXHR9XG59XG4iXX0=