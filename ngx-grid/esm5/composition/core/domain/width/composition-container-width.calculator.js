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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL3dpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jYWxjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQUVDLDZDQUE2QixnQkFBd0I7UUFBeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO0lBQ3JELENBQUM7Ozs7O0lBRUQsK0RBQWlCOzs7O0lBQWpCLFVBQWtCLFlBQWdDO1FBRTNDLElBQUEsd0NBQXFFLEVBQW5FLGdDQUFhLEVBQUUsOEJBQW9EOzs7WUFHdkUsR0FBRyxHQUFHLENBQUM7UUFDWCxhQUFhLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsQ0FBQztZQUN2QixHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO1FBRUgsR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBRW5ELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQzs7Ozs7O0lBRU8sOERBQWdCOzs7OztJQUF4QixVQUF5QixPQUEyQjtRQUFwRCxpQkFTQzs7WUFQSSxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFdBQXdCLElBQUssT0FBQSxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsRUFBNUUsQ0FBNEUsRUFBQzs7WUFDN0ksWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBN0ksQ0FBNkksRUFBQztRQUUzTSxPQUFPO1lBQ04sYUFBYSxFQUFFLGFBQWE7WUFDNUIsWUFBWSxFQUFFLFlBQVk7U0FDMUIsQ0FBQztJQUNILENBQUM7SUFDRiwwQ0FBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7Ozs7Ozs7SUE1QlksK0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uV2lkdGggfSBmcm9tICcuLi9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBNSU5fQ09MVU1OX1dJRFRIOiBudW1iZXIpIHtcblx0fVxuXG5cdGNhbGN1bGF0ZU1pbldpZHRoKGNvbHVtbldpZHRoczogQXJyYXk8Q29sdW1uV2lkdGg+KTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IHsgc3RhdGljQ29sdW1ucywgZmx1aWRDb2x1bW5zIH0gPSB0aGlzLnNlZ3JlZ2F0ZUNvbHVtbnMoY29sdW1uV2lkdGhzKTtcblxuXHRcdC8vIFRPRE8gcmVkdWNlXG5cdFx0bGV0IHN1bSA9IDA7XG5cdFx0c3RhdGljQ29sdW1ucy5mb3JFYWNoKChjKSA9PiB7XG5cdFx0XHRzdW0gKz0gYy5nZXRXaWR0aCgpO1xuXHRcdH0pO1xuXG5cdFx0c3VtICs9IGZsdWlkQ29sdW1ucy5sZW5ndGggKiB0aGlzLk1JTl9DT0xVTU5fV0lEVEg7XG5cblx0XHRyZXR1cm4gc3VtO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWdyZWdhdGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPik6IHsgc3RhdGljQ29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+LCBmbHVpZENvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPiB9IHtcblxuXHRcdGxldCBzdGF0aWNDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoKGNvbHVtbldpZHRoOiBDb2x1bW5XaWR0aCkgPT4gY29sdW1uV2lkdGguaXNUeXBlTnVtYmVyKCkgJiYgY29sdW1uV2lkdGguZ2V0V2lkdGgoKSA+IHRoaXMuTUlOX0NPTFVNTl9XSURUSCksXG5cdFx0XHRmbHVpZENvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcigoY29sdW1uV2lkdGg6IENvbHVtbldpZHRoKSA9PiBjb2x1bW5XaWR0aC5pc1R5cGVBdXRvKCkgfHwgY29sdW1uV2lkdGguaXNUeXBlUGVyY2VudGFnZSgpIHx8IChjb2x1bW5XaWR0aC5pc1R5cGVOdW1iZXIoKSAmJiBjb2x1bW5XaWR0aC5nZXRXaWR0aCgpIDw9IHRoaXMuTUlOX0NPTFVNTl9XSURUSCkpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXRpY0NvbHVtbnM6IHN0YXRpY0NvbHVtbnMsXG5cdFx0XHRmbHVpZENvbHVtbnM6IGZsdWlkQ29sdW1uc1xuXHRcdH07XG5cdH1cbn1cbiJdfQ==