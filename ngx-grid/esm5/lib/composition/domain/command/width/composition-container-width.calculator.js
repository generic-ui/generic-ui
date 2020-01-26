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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC93aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGguY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFFQyw2Q0FBNkIsZ0JBQXdCO1FBQXhCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtJQUNyRCxDQUFDOzs7OztJQUVELCtEQUFpQjs7OztJQUFqQixVQUFrQixZQUFnQztRQUUzQyxJQUFBLHdDQUFxRSxFQUFuRSxnQ0FBYSxFQUFFLDhCQUFvRDs7O1lBR3ZFLEdBQUcsR0FBRyxDQUFDO1FBQ1gsYUFBYSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLENBQUM7WUFDdkIsR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztRQUVILEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUVuRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7Ozs7OztJQUVPLDhEQUFnQjs7Ozs7SUFBeEIsVUFBeUIsT0FBMkI7UUFBcEQsaUJBU0M7O1lBUEksYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLEVBQTVFLENBQTRFLEVBQUM7O1lBQzdJLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsV0FBd0IsSUFBSyxPQUFBLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksS0FBSSxDQUFDLGdCQUFnQixDQUFDLEVBQTdJLENBQTZJLEVBQUM7UUFFM00sT0FBTztZQUNOLGFBQWEsRUFBRSxhQUFhO1lBQzVCLFlBQVksRUFBRSxZQUFZO1NBQzFCLENBQUM7SUFDSCxDQUFDO0lBQ0YsMENBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDOzs7Ozs7O0lBNUJZLCtEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbldpZHRoIH0gZnJvbSAnLi4vY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3Ige1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgTUlOX0NPTFVNTl9XSURUSDogbnVtYmVyKSB7XG5cdH1cblxuXHRjYWxjdWxhdGVNaW5XaWR0aChjb2x1bW5XaWR0aHM6IEFycmF5PENvbHVtbldpZHRoPik6IG51bWJlciB7XG5cblx0XHRjb25zdCB7IHN0YXRpY0NvbHVtbnMsIGZsdWlkQ29sdW1ucyB9ID0gdGhpcy5zZWdyZWdhdGVDb2x1bW5zKGNvbHVtbldpZHRocyk7XG5cblx0XHQvLyBUT0RPIHJlZHVjZVxuXHRcdGxldCBzdW0gPSAwO1xuXHRcdHN0YXRpY0NvbHVtbnMuZm9yRWFjaCgoYykgPT4ge1xuXHRcdFx0c3VtICs9IGMuZ2V0V2lkdGgoKTtcblx0XHR9KTtcblxuXHRcdHN1bSArPSBmbHVpZENvbHVtbnMubGVuZ3RoICogdGhpcy5NSU5fQ09MVU1OX1dJRFRIO1xuXG5cdFx0cmV0dXJuIHN1bTtcblx0fVxuXG5cdHByaXZhdGUgc2VncmVnYXRlQ29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD4pOiB7IHN0YXRpY0NvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPiwgZmx1aWRDb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD4gfSB7XG5cblx0XHRsZXQgc3RhdGljQ29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKChjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGgpID0+IGNvbHVtbldpZHRoLmlzVHlwZU51bWJlcigpICYmIGNvbHVtbldpZHRoLmdldFdpZHRoKCkgPiB0aGlzLk1JTl9DT0xVTU5fV0lEVEgpLFxuXHRcdFx0Zmx1aWRDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoKGNvbHVtbldpZHRoOiBDb2x1bW5XaWR0aCkgPT4gY29sdW1uV2lkdGguaXNUeXBlQXV0bygpIHx8IGNvbHVtbldpZHRoLmlzVHlwZVBlcmNlbnRhZ2UoKSB8fCAoY29sdW1uV2lkdGguaXNUeXBlTnVtYmVyKCkgJiYgY29sdW1uV2lkdGguZ2V0V2lkdGgoKSA8PSB0aGlzLk1JTl9DT0xVTU5fV0lEVEgpKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0aWNDb2x1bW5zOiBzdGF0aWNDb2x1bW5zLFxuXHRcdFx0Zmx1aWRDb2x1bW5zOiBmbHVpZENvbHVtbnNcblx0XHR9O1xuXHR9XG59XG4iXX0=