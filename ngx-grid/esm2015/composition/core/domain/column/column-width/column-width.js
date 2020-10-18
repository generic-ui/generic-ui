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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXdpZHRoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE1BQU0sT0FBTyxXQUFXOzs7O0lBUXZCLFlBQVksS0FBdUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxDQUFDLElBQUksQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxlQUFlLENBQUMsTUFBTSxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBc0I7UUFFckMsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtZQUU5RCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUVwQjthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUVwQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUM7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FFbkQ7YUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjthQUFNO1lBRU4sSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNGLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEtBQXNCO1FBQzFDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7O0lBTU8sa0JBQWtCLENBQUMsS0FBYTtRQUN2QyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLEtBQXNCOztjQUN0QyxhQUFhLEdBQUcsQ0FBQyxLQUFLO1FBRTVCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0Q7Ozs7OztJQS9FQSwrQkFBa0M7Ozs7O0lBRWxDLGdDQUFtQzs7Ozs7SUFFbkMsNEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uV2lkdGhUeXBlIH0gZnJvbSAnLi9jb2x1bW4td2lkdGgtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5XaWR0aCB7XG5cblx0cHJpdmF0ZSB0ZW1wbGF0ZTogQ29sdW1uV2lkdGhUeXBlO1xuXG5cdHByaXZhdGUgYmFzZVdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG5cblx0cHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5iYXNlV2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLnNldFdpZHRoQW5kVHlwZSh3aWR0aCk7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0Q29sdW1uVHlwZSgpOiBDb2x1bW5XaWR0aFR5cGUge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlO1xuXHR9XG5cblx0aXNUeXBlUGVyY2VudGFnZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZSA9PT0gQ29sdW1uV2lkdGhUeXBlLlBFUkNFTlRBR0U7XG5cdH1cblxuXHRpc1R5cGVBdXRvKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlID09PSBDb2x1bW5XaWR0aFR5cGUuQVVUTztcblx0fVxuXG5cdGlzVHlwZU51bWJlcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZSA9PT0gQ29sdW1uV2lkdGhUeXBlLk5VTUJFUjtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdH1cblxuXHRzZXRXaWR0aEFuZFR5cGUod2lkdGg6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKHdpZHRoID09PSB1bmRlZmluZWQgfHwgd2lkdGggPT09IG51bGwgfHwgd2lkdGggPT09ICdhdXRvJykge1xuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gQ29sdW1uV2lkdGhUeXBlLkFVVE87XG5cdFx0XHR0aGlzLnNldFdpZHRoKG51bGwpO1xuXG5cdFx0fSBlbHNlIGlmICh0aGlzLmlzUGVyY2VudGFnZSh3aWR0aCkpIHtcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IENvbHVtbldpZHRoVHlwZS5QRVJDRU5UQUdFO1xuXHRcdFx0dGhpcy5zZXRXaWR0aCh0aGlzLnBlcmNlbnRhZ2VUb051bWJlcignJyArIHdpZHRoKSk7XG5cblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNTdHJpbmdOdW1iZXIod2lkdGgpKSB7XG5cblx0XHRcdHRoaXMudGVtcGxhdGUgPSBDb2x1bW5XaWR0aFR5cGUuTlVNQkVSO1xuXHRcdFx0dGhpcy5zZXRXaWR0aCgrd2lkdGgpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHRoaXMudGVtcGxhdGUgPSBDb2x1bW5XaWR0aFR5cGUuTlVNQkVSO1xuXHRcdFx0dGhpcy5zZXRXaWR0aCgrd2lkdGgpO1xuXHRcdH1cblx0fVxuXG5cdGNsb25lKCk6IENvbHVtbldpZHRoIHtcblx0XHRyZXR1cm4gbmV3IENvbHVtbldpZHRoKHRoaXMuYmFzZVdpZHRoKTtcblx0fVxuXG5cdHByaXZhdGUgaXNQZXJjZW50YWdlKHdpZHRoOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHlwZW9mIHdpZHRoID09PSAnc3RyaW5nJyAmJiB3aWR0aFt3aWR0aC5sZW5ndGggLSAxXSA9PT0gJyUnO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdpZHRoIG5lZWRzIHRvIGJlIGluIGZvcm1hdCAnODklJ1xuXHQgKiBAcGFyYW0gd2lkdGhcblx0ICovXG5cdHByaXZhdGUgcGVyY2VudGFnZVRvTnVtYmVyKHdpZHRoOiBzdHJpbmcpOiBudW1iZXIge1xuXHRcdHJldHVybiArKHdpZHRoLnNsaWNlKDAsIC0xKSk7XG5cdH1cblxuXHRwcml2YXRlIGlzU3RyaW5nTnVtYmVyKHdpZHRoOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRjb25zdCB3aWR0aEFzTnVtYmVyID0gK3dpZHRoO1xuXG5cdFx0cmV0dXJuIE51bWJlci5pc05hTih3aWR0aEFzTnVtYmVyKTtcblx0fVxufVxuIl19