/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionContainerWidthCalculator = /** @class */ (function () {
    function CompositionContainerWidthCalculator(MIN_COLUMN_WIDTH) {
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
    }
    /**
     * @param {?} columnWidths
     * @return {?}
     */
    CompositionContainerWidthCalculator.prototype.calculateMinWidth = /**
     * @param {?} columnWidths
     * @return {?}
     */
    function (columnWidths) {
        var _a = this.segregateColumns(columnWidths), staticColumns = _a.staticColumns, fluidColumns = _a.fluidColumns;
        // TODO reduce
        /** @type {?} */
        var sum = 0;
        staticColumns.forEach((/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            sum += c.getWidth();
        }));
        sum += fluidColumns.length * this.MIN_COLUMN_WIDTH;
        return sum;
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    CompositionContainerWidthCalculator.prototype.segregateColumns = /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        /** @type {?} */
        var staticColumns = columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        function (columnWidth) { return columnWidth.isTypeNumber() && columnWidth.getWidth() > _this.MIN_COLUMN_WIDTH; }));
        /** @type {?} */
        var fluidColumns = columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        function (columnWidth) { return columnWidth.isTypeAuto() || columnWidth.isTypePercentage() || (columnWidth.isTypeNumber() && columnWidth.getWidth() <= _this.MIN_COLUMN_WIDTH); }));
        return {
            staticColumns: staticColumns,
            fluidColumns: fluidColumns
        };
    };
    return CompositionContainerWidthCalculator;
}());
export { CompositionContainerWidthCalculator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionContainerWidthCalculator.prototype.MIN_COLUMN_WIDTH;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBRUMsNkNBQTZCLGdCQUF3QjtRQUF4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7SUFDckQsQ0FBQzs7Ozs7SUFFRCwrREFBaUI7Ozs7SUFBakIsVUFBa0IsWUFBZ0M7UUFFM0MsSUFBQSx3Q0FBcUUsRUFBbkUsZ0NBQWEsRUFBRSw4QkFBb0Q7OztZQUd2RSxHQUFHLEdBQUcsQ0FBQztRQUNYLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxDQUFDO1lBQ3ZCLEdBQUcsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7UUFFSCxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFbkQsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDOzs7Ozs7SUFFTyw4REFBZ0I7Ozs7O0lBQXhCLFVBQXlCLE9BQTJCO1FBQXBELGlCQVNDOztZQVBJLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsV0FBd0IsSUFBSyxPQUFBLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixFQUE1RSxDQUE0RSxFQUFDOztZQUM3SSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFdBQXdCLElBQUssT0FBQSxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksV0FBVyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUE3SSxDQUE2SSxFQUFDO1FBRTNNLE9BQU87WUFDTixhQUFhLEVBQUUsYUFBYTtZQUM1QixZQUFZLEVBQUUsWUFBWTtTQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUNGLDBDQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQzs7Ozs7OztJQTVCWSwrREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5XaWR0aCB9IGZyb20gJy4uL2NvbHVtbi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoJztcblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IE1JTl9DT0xVTU5fV0lEVEg6IG51bWJlcikge1xuXHR9XG5cblx0Y2FsY3VsYXRlTWluV2lkdGgoY29sdW1uV2lkdGhzOiBBcnJheTxDb2x1bW5XaWR0aD4pOiBudW1iZXIge1xuXG5cdFx0Y29uc3QgeyBzdGF0aWNDb2x1bW5zLCBmbHVpZENvbHVtbnMgfSA9IHRoaXMuc2VncmVnYXRlQ29sdW1ucyhjb2x1bW5XaWR0aHMpO1xuXG5cdFx0Ly8gVE9ETyByZWR1Y2Vcblx0XHRsZXQgc3VtID0gMDtcblx0XHRzdGF0aWNDb2x1bW5zLmZvckVhY2goKGMpID0+IHtcblx0XHRcdHN1bSArPSBjLmdldFdpZHRoKCk7XG5cdFx0fSk7XG5cblx0XHRzdW0gKz0gZmx1aWRDb2x1bW5zLmxlbmd0aCAqIHRoaXMuTUlOX0NPTFVNTl9XSURUSDtcblxuXHRcdHJldHVybiBzdW07XG5cdH1cblxuXHRwcml2YXRlIHNlZ3JlZ2F0ZUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+KTogeyBzdGF0aWNDb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD4sIGZsdWlkQ29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+IH0ge1xuXG5cdFx0bGV0IHN0YXRpY0NvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcigoY29sdW1uV2lkdGg6IENvbHVtbldpZHRoKSA9PiBjb2x1bW5XaWR0aC5pc1R5cGVOdW1iZXIoKSAmJiBjb2x1bW5XaWR0aC5nZXRXaWR0aCgpID4gdGhpcy5NSU5fQ09MVU1OX1dJRFRIKSxcblx0XHRcdGZsdWlkQ29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKChjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGgpID0+IGNvbHVtbldpZHRoLmlzVHlwZUF1dG8oKSB8fCBjb2x1bW5XaWR0aC5pc1R5cGVQZXJjZW50YWdlKCkgfHwgKGNvbHVtbldpZHRoLmlzVHlwZU51bWJlcigpICYmIGNvbHVtbldpZHRoLmdldFdpZHRoKCkgPD0gdGhpcy5NSU5fQ09MVU1OX1dJRFRIKSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdGljQ29sdW1uczogc3RhdGljQ29sdW1ucyxcblx0XHRcdGZsdWlkQ29sdW1uczogZmx1aWRDb2x1bW5zXG5cdFx0fTtcblx0fVxufVxuIl19