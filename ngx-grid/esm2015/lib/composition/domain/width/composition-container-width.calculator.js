/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class CompositionContainerWidthCalculator {
    /**
     * @param {?} MIN_COLUMN_WIDTH
     */
    constructor(MIN_COLUMN_WIDTH) {
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
    }
    /**
     * @param {?} columnWidths
     * @return {?}
     */
    calculateMinWidth(columnWidths) {
        const { staticColumns, fluidColumns } = this.segregateColumns(columnWidths);
        // TODO reduce
        /** @type {?} */
        let sum = 0;
        staticColumns.forEach((/**
         * @param {?} c
         * @return {?}
         */
        (c) => {
            sum += c.getWidth();
        }));
        sum += fluidColumns.length * this.MIN_COLUMN_WIDTH;
        return sum;
    }
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    segregateColumns(columns) {
        /** @type {?} */
        let staticColumns = columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        (columnWidth) => columnWidth.isTypeNumber() && columnWidth.getWidth() > this.MIN_COLUMN_WIDTH));
        /** @type {?} */
        let fluidColumns = columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        (columnWidth) => columnWidth.isTypeAuto() || columnWidth.isTypePercentage() || (columnWidth.isTypeNumber() && columnWidth.getWidth() <= this.MIN_COLUMN_WIDTH)));
        return {
            staticColumns: staticColumns,
            fluidColumns: fluidColumns
        };
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionContainerWidthCalculator.prototype.MIN_COLUMN_WIDTH;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU0sT0FBTyxtQ0FBbUM7Ozs7SUFFL0MsWUFBNkIsZ0JBQXdCO1FBQXhCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtJQUNyRCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLFlBQWdDO2NBRTNDLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7OztZQUd2RSxHQUFHLEdBQUcsQ0FBQztRQUNYLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMzQixHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO1FBRUgsR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBRW5ELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsT0FBMkI7O1lBRS9DLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUM7O1lBQzdJLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBQztRQUUzTSxPQUFPO1lBQ04sYUFBYSxFQUFFLGFBQWE7WUFDNUIsWUFBWSxFQUFFLFlBQVk7U0FDMUIsQ0FBQztJQUNILENBQUM7Q0FDRDs7Ozs7O0lBNUJZLCtEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbldpZHRoIH0gZnJvbSAnLi4vY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3Ige1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgTUlOX0NPTFVNTl9XSURUSDogbnVtYmVyKSB7XG5cdH1cblxuXHRjYWxjdWxhdGVNaW5XaWR0aChjb2x1bW5XaWR0aHM6IEFycmF5PENvbHVtbldpZHRoPik6IG51bWJlciB7XG5cblx0XHRjb25zdCB7IHN0YXRpY0NvbHVtbnMsIGZsdWlkQ29sdW1ucyB9ID0gdGhpcy5zZWdyZWdhdGVDb2x1bW5zKGNvbHVtbldpZHRocyk7XG5cblx0XHQvLyBUT0RPIHJlZHVjZVxuXHRcdGxldCBzdW0gPSAwO1xuXHRcdHN0YXRpY0NvbHVtbnMuZm9yRWFjaCgoYykgPT4ge1xuXHRcdFx0c3VtICs9IGMuZ2V0V2lkdGgoKTtcblx0XHR9KTtcblxuXHRcdHN1bSArPSBmbHVpZENvbHVtbnMubGVuZ3RoICogdGhpcy5NSU5fQ09MVU1OX1dJRFRIO1xuXG5cdFx0cmV0dXJuIHN1bTtcblx0fVxuXG5cdHByaXZhdGUgc2VncmVnYXRlQ29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD4pOiB7IHN0YXRpY0NvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPiwgZmx1aWRDb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD4gfSB7XG5cblx0XHRsZXQgc3RhdGljQ29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKChjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGgpID0+IGNvbHVtbldpZHRoLmlzVHlwZU51bWJlcigpICYmIGNvbHVtbldpZHRoLmdldFdpZHRoKCkgPiB0aGlzLk1JTl9DT0xVTU5fV0lEVEgpLFxuXHRcdFx0Zmx1aWRDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoKGNvbHVtbldpZHRoOiBDb2x1bW5XaWR0aCkgPT4gY29sdW1uV2lkdGguaXNUeXBlQXV0bygpIHx8IGNvbHVtbldpZHRoLmlzVHlwZVBlcmNlbnRhZ2UoKSB8fCAoY29sdW1uV2lkdGguaXNUeXBlTnVtYmVyKCkgJiYgY29sdW1uV2lkdGguZ2V0V2lkdGgoKSA8PSB0aGlzLk1JTl9DT0xVTU5fV0lEVEgpKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0aWNDb2x1bW5zOiBzdGF0aWNDb2x1bW5zLFxuXHRcdFx0Zmx1aWRDb2x1bW5zOiBmbHVpZENvbHVtbnNcblx0XHR9O1xuXHR9XG59XG4iXX0=