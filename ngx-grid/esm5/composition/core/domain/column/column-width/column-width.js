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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXdpZHRoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREO0lBUUMscUJBQVksS0FBdUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxtQ0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELHNDQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELGdDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxrQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxDQUFDLE1BQU0sQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELDhCQUFROzs7O0lBQVIsVUFBUyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQscUNBQWU7Ozs7SUFBZixVQUFnQixLQUFzQjtRQUVyQyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO1lBRTlELElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBRXBCO2FBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBRXBDLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQztZQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUVuRDthQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUV0QyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO2FBQU07WUFFTixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7OztJQUVELDJCQUFLOzs7SUFBTDtRQUNDLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVPLGtDQUFZOzs7OztJQUFwQixVQUFxQixLQUFzQjtRQUMxQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUM7SUFDckUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNLLHdDQUFrQjs7Ozs7O0lBQTFCLFVBQTJCLEtBQWE7UUFDdkMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVPLG9DQUFjOzs7OztJQUF0QixVQUF1QixLQUFzQjs7WUFDdEMsYUFBYSxHQUFHLENBQUMsS0FBSztRQUU1QixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQWpGRCxJQWlGQzs7Ozs7OztJQS9FQSwrQkFBa0M7Ozs7O0lBRWxDLGdDQUFtQzs7Ozs7SUFFbkMsNEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uV2lkdGhUeXBlIH0gZnJvbSAnLi9jb2x1bW4td2lkdGgtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5XaWR0aCB7XG5cblx0cHJpdmF0ZSB0ZW1wbGF0ZTogQ29sdW1uV2lkdGhUeXBlO1xuXG5cdHByaXZhdGUgYmFzZVdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG5cblx0cHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5iYXNlV2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLnNldFdpZHRoQW5kVHlwZSh3aWR0aCk7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0Q29sdW1uVHlwZSgpOiBDb2x1bW5XaWR0aFR5cGUge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlO1xuXHR9XG5cblx0aXNUeXBlUGVyY2VudGFnZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZSA9PT0gQ29sdW1uV2lkdGhUeXBlLlBFUkNFTlRBR0U7XG5cdH1cblxuXHRpc1R5cGVBdXRvKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlID09PSBDb2x1bW5XaWR0aFR5cGUuQVVUTztcblx0fVxuXG5cdGlzVHlwZU51bWJlcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZSA9PT0gQ29sdW1uV2lkdGhUeXBlLk5VTUJFUjtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdH1cblxuXHRzZXRXaWR0aEFuZFR5cGUod2lkdGg6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKHdpZHRoID09PSB1bmRlZmluZWQgfHwgd2lkdGggPT09IG51bGwgfHwgd2lkdGggPT09ICdhdXRvJykge1xuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gQ29sdW1uV2lkdGhUeXBlLkFVVE87XG5cdFx0XHR0aGlzLnNldFdpZHRoKG51bGwpO1xuXG5cdFx0fSBlbHNlIGlmICh0aGlzLmlzUGVyY2VudGFnZSh3aWR0aCkpIHtcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IENvbHVtbldpZHRoVHlwZS5QRVJDRU5UQUdFO1xuXHRcdFx0dGhpcy5zZXRXaWR0aCh0aGlzLnBlcmNlbnRhZ2VUb051bWJlcignJyArIHdpZHRoKSk7XG5cblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNTdHJpbmdOdW1iZXIod2lkdGgpKSB7XG5cblx0XHRcdHRoaXMudGVtcGxhdGUgPSBDb2x1bW5XaWR0aFR5cGUuTlVNQkVSO1xuXHRcdFx0dGhpcy5zZXRXaWR0aCgrd2lkdGgpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHRoaXMudGVtcGxhdGUgPSBDb2x1bW5XaWR0aFR5cGUuTlVNQkVSO1xuXHRcdFx0dGhpcy5zZXRXaWR0aCgrd2lkdGgpO1xuXHRcdH1cblx0fVxuXG5cdGNsb25lKCk6IENvbHVtbldpZHRoIHtcblx0XHRyZXR1cm4gbmV3IENvbHVtbldpZHRoKHRoaXMuYmFzZVdpZHRoKTtcblx0fVxuXG5cdHByaXZhdGUgaXNQZXJjZW50YWdlKHdpZHRoOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHlwZW9mIHdpZHRoID09PSAnc3RyaW5nJyAmJiB3aWR0aFt3aWR0aC5sZW5ndGggLSAxXSA9PT0gJyUnO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdpZHRoIG5lZWRzIHRvIGJlIGluIGZvcm1hdCAnODklJ1xuXHQgKiBAcGFyYW0gd2lkdGhcblx0ICovXG5cdHByaXZhdGUgcGVyY2VudGFnZVRvTnVtYmVyKHdpZHRoOiBzdHJpbmcpOiBudW1iZXIge1xuXHRcdHJldHVybiArKHdpZHRoLnNsaWNlKDAsIC0xKSk7XG5cdH1cblxuXHRwcml2YXRlIGlzU3RyaW5nTnVtYmVyKHdpZHRoOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRjb25zdCB3aWR0aEFzTnVtYmVyID0gK3dpZHRoO1xuXG5cdFx0cmV0dXJuIE51bWJlci5pc05hTih3aWR0aEFzTnVtYmVyKTtcblx0fVxufVxuIl19