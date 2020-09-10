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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXdpZHRoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RDtJQVFDLHFCQUFZLEtBQXVCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELDhCQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsbUNBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxzQ0FBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCxnQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxDQUFDLElBQUksQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsa0NBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLGVBQWUsQ0FBQyxNQUFNLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCw4QkFBUTs7OztJQUFSLFVBQVMsS0FBYTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELHFDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBc0I7UUFFckMsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtZQUU5RCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUVwQjthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUVwQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUM7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FFbkQ7YUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjthQUFNO1lBRU4sSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNGLENBQUM7Ozs7SUFFRCwyQkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFFTyxrQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBc0I7UUFDMUMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSyx3Q0FBa0I7Ozs7OztJQUExQixVQUEyQixLQUFhO1FBQ3ZDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFTyxvQ0FBYzs7Ozs7SUFBdEIsVUFBdUIsS0FBc0I7O1lBQ3RDLGFBQWEsR0FBRyxDQUFDLEtBQUs7UUFFNUIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUFqRkQsSUFpRkM7Ozs7Ozs7SUEvRUEsK0JBQWtDOzs7OztJQUVsQyxnQ0FBbUM7Ozs7O0lBRW5DLDRCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbldpZHRoVHlwZSB9IGZyb20gJy4vY29sdW1uLXdpZHRoLXR5cGUnO1xuXG5leHBvcnQgY2xhc3MgQ29sdW1uV2lkdGgge1xuXG5cdHByaXZhdGUgdGVtcGxhdGU6IENvbHVtbldpZHRoVHlwZTtcblxuXHRwcml2YXRlIGJhc2VXaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcih3aWR0aD86IG51bWJlciB8IHN0cmluZykge1xuXHRcdHRoaXMuYmFzZVdpZHRoID0gd2lkdGg7XG5cdFx0dGhpcy5zZXRXaWR0aEFuZFR5cGUod2lkdGgpO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldENvbHVtblR5cGUoKTogQ29sdW1uV2lkdGhUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZTtcblx0fVxuXG5cdGlzVHlwZVBlcmNlbnRhZ2UoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGUgPT09IENvbHVtbldpZHRoVHlwZS5QRVJDRU5UQUdFO1xuXHR9XG5cblx0aXNUeXBlQXV0bygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZSA9PT0gQ29sdW1uV2lkdGhUeXBlLkFVVE87XG5cdH1cblxuXHRpc1R5cGVOdW1iZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGUgPT09IENvbHVtbldpZHRoVHlwZS5OVU1CRVI7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHR9XG5cblx0c2V0V2lkdGhBbmRUeXBlKHdpZHRoOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGlmICh3aWR0aCA9PT0gdW5kZWZpbmVkIHx8IHdpZHRoID09PSBudWxsIHx8IHdpZHRoID09PSAnYXV0bycpIHtcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IENvbHVtbldpZHRoVHlwZS5BVVRPO1xuXHRcdFx0dGhpcy5zZXRXaWR0aChudWxsKTtcblxuXHRcdH0gZWxzZSBpZiAodGhpcy5pc1BlcmNlbnRhZ2Uod2lkdGgpKSB7XG5cblx0XHRcdHRoaXMudGVtcGxhdGUgPSBDb2x1bW5XaWR0aFR5cGUuUEVSQ0VOVEFHRTtcblx0XHRcdHRoaXMuc2V0V2lkdGgodGhpcy5wZXJjZW50YWdlVG9OdW1iZXIoJycgKyB3aWR0aCkpO1xuXG5cdFx0fSBlbHNlIGlmICh0aGlzLmlzU3RyaW5nTnVtYmVyKHdpZHRoKSkge1xuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gQ29sdW1uV2lkdGhUeXBlLk5VTUJFUjtcblx0XHRcdHRoaXMuc2V0V2lkdGgoK3dpZHRoKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gQ29sdW1uV2lkdGhUeXBlLk5VTUJFUjtcblx0XHRcdHRoaXMuc2V0V2lkdGgoK3dpZHRoKTtcblx0XHR9XG5cdH1cblxuXHRjbG9uZSgpOiBDb2x1bW5XaWR0aCB7XG5cdFx0cmV0dXJuIG5ldyBDb2x1bW5XaWR0aCh0aGlzLmJhc2VXaWR0aCk7XG5cdH1cblxuXHRwcml2YXRlIGlzUGVyY2VudGFnZSh3aWR0aDogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHR5cGVvZiB3aWR0aCA9PT0gJ3N0cmluZycgJiYgd2lkdGhbd2lkdGgubGVuZ3RoIC0gMV0gPT09ICclJztcblx0fVxuXG5cdC8qKlxuXHQgKiBXaWR0aCBuZWVkcyB0byBiZSBpbiBmb3JtYXQgJzg5JSdcblx0ICogQHBhcmFtIHdpZHRoXG5cdCAqL1xuXHRwcml2YXRlIHBlcmNlbnRhZ2VUb051bWJlcih3aWR0aDogc3RyaW5nKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gKyh3aWR0aC5zbGljZSgwLCAtMSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc1N0cmluZ051bWJlcih3aWR0aDogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0Y29uc3Qgd2lkdGhBc051bWJlciA9ICt3aWR0aDtcblxuXHRcdHJldHVybiBOdW1iZXIuaXNOYU4od2lkdGhBc051bWJlcik7XG5cdH1cbn1cbiJdfQ==