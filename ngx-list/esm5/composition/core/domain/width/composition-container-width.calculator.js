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
        function (columnWidth) {
            return columnWidth.isTypeAuto() ||
                columnWidth.isTypePercentage() ||
                (columnWidth.isTypeNumber() && columnWidth.getWidth() <= _this.MIN_COLUMN_WIDTH);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL3dpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jYWxjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQUVDLDZDQUE2QixnQkFBd0I7UUFBeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO0lBQ3JELENBQUM7Ozs7O0lBRUQsK0RBQWlCOzs7O0lBQWpCLFVBQWtCLFlBQWdDO1FBRTNDLElBQUEsd0NBQXFFLEVBQW5FLGdDQUFhLEVBQUUsOEJBQW9EOzs7WUFHdkUsR0FBRyxHQUFHLENBQUM7UUFDWCxhQUFhLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsQ0FBQztZQUN2QixHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO1FBRUgsR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBRW5ELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQzs7Ozs7O0lBRU8sOERBQWdCOzs7OztJQUF4QixVQUF5QixPQUEyQjtRQUFwRCxpQkFhQzs7WUFYTSxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFdBQXdCLElBQUssT0FBQSxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsRUFBNUUsQ0FBNEUsRUFBQzs7WUFDL0ksWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxXQUF3QjtZQUN0RCxPQUFPLFdBQVcsQ0FBQyxVQUFVLEVBQUU7Z0JBQzlCLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDOUIsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xGLENBQUMsRUFBQztRQUVILE9BQU87WUFDTixhQUFhLEVBQUUsYUFBYTtZQUM1QixZQUFZLEVBQUUsWUFBWTtTQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUNGLDBDQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQzs7Ozs7OztJQWhDWSwrREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5XaWR0aCB9IGZyb20gJy4uL2NvbHVtbi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoJztcblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IE1JTl9DT0xVTU5fV0lEVEg6IG51bWJlcikge1xuXHR9XG5cblx0Y2FsY3VsYXRlTWluV2lkdGgoY29sdW1uV2lkdGhzOiBBcnJheTxDb2x1bW5XaWR0aD4pOiBudW1iZXIge1xuXG5cdFx0Y29uc3QgeyBzdGF0aWNDb2x1bW5zLCBmbHVpZENvbHVtbnMgfSA9IHRoaXMuc2VncmVnYXRlQ29sdW1ucyhjb2x1bW5XaWR0aHMpO1xuXG5cdFx0Ly8gVE9ETyByZWR1Y2Vcblx0XHRsZXQgc3VtID0gMDtcblx0XHRzdGF0aWNDb2x1bW5zLmZvckVhY2goKGMpID0+IHtcblx0XHRcdHN1bSArPSBjLmdldFdpZHRoKCk7XG5cdFx0fSk7XG5cblx0XHRzdW0gKz0gZmx1aWRDb2x1bW5zLmxlbmd0aCAqIHRoaXMuTUlOX0NPTFVNTl9XSURUSDtcblxuXHRcdHJldHVybiBzdW07XG5cdH1cblxuXHRwcml2YXRlIHNlZ3JlZ2F0ZUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+KTogeyBzdGF0aWNDb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD4sIGZsdWlkQ29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+IH0ge1xuXG5cdFx0Y29uc3Qgc3RhdGljQ29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKChjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGgpID0+IGNvbHVtbldpZHRoLmlzVHlwZU51bWJlcigpICYmIGNvbHVtbldpZHRoLmdldFdpZHRoKCkgPiB0aGlzLk1JTl9DT0xVTU5fV0lEVEgpLFxuXHRcdFx0Zmx1aWRDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoKGNvbHVtbldpZHRoOiBDb2x1bW5XaWR0aCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY29sdW1uV2lkdGguaXNUeXBlQXV0bygpIHx8XG5cdFx0XHRcdFx0Y29sdW1uV2lkdGguaXNUeXBlUGVyY2VudGFnZSgpIHx8XG5cdFx0XHRcdFx0KGNvbHVtbldpZHRoLmlzVHlwZU51bWJlcigpICYmIGNvbHVtbldpZHRoLmdldFdpZHRoKCkgPD0gdGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXRpY0NvbHVtbnM6IHN0YXRpY0NvbHVtbnMsXG5cdFx0XHRmbHVpZENvbHVtbnM6IGZsdWlkQ29sdW1uc1xuXHRcdH07XG5cdH1cbn1cbiJdfQ==