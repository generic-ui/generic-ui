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
        const staticColumns = columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        (columnWidth) => columnWidth.isTypeNumber() && columnWidth.getWidth() > this.MIN_COLUMN_WIDTH));
        /** @type {?} */
        const fluidColumns = columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        (columnWidth) => {
            return columnWidth.isTypeAuto() ||
                columnWidth.isTypePercentage() ||
                (columnWidth.isTypeNumber() && columnWidth.getWidth() <= this.MIN_COLUMN_WIDTH);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL3dpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jYWxjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8sbUNBQW1DOzs7O0lBRS9DLFlBQTZCLGdCQUF3QjtRQUF4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7SUFDckQsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxZQUFnQztjQUUzQyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDOzs7WUFHdkUsR0FBRyxHQUFHLENBQUM7UUFDWCxhQUFhLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztRQUVILEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUVuRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUFDLE9BQTJCOztjQUU3QyxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLFdBQXdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFDOztjQUMvSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLFdBQXdCLEVBQUUsRUFBRTtZQUMxRCxPQUFPLFdBQVcsQ0FBQyxVQUFVLEVBQUU7Z0JBQzlCLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDOUIsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xGLENBQUMsRUFBQztRQUVILE9BQU87WUFDTixhQUFhLEVBQUUsYUFBYTtZQUM1QixZQUFZLEVBQUUsWUFBWTtTQUMxQixDQUFDO0lBQ0gsQ0FBQztDQUNEOzs7Ozs7SUFoQ1ksK0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uV2lkdGggfSBmcm9tICcuLi9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBNSU5fQ09MVU1OX1dJRFRIOiBudW1iZXIpIHtcblx0fVxuXG5cdGNhbGN1bGF0ZU1pbldpZHRoKGNvbHVtbldpZHRoczogQXJyYXk8Q29sdW1uV2lkdGg+KTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IHsgc3RhdGljQ29sdW1ucywgZmx1aWRDb2x1bW5zIH0gPSB0aGlzLnNlZ3JlZ2F0ZUNvbHVtbnMoY29sdW1uV2lkdGhzKTtcblxuXHRcdC8vIFRPRE8gcmVkdWNlXG5cdFx0bGV0IHN1bSA9IDA7XG5cdFx0c3RhdGljQ29sdW1ucy5mb3JFYWNoKChjKSA9PiB7XG5cdFx0XHRzdW0gKz0gYy5nZXRXaWR0aCgpO1xuXHRcdH0pO1xuXG5cdFx0c3VtICs9IGZsdWlkQ29sdW1ucy5sZW5ndGggKiB0aGlzLk1JTl9DT0xVTU5fV0lEVEg7XG5cblx0XHRyZXR1cm4gc3VtO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWdyZWdhdGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPik6IHsgc3RhdGljQ29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+LCBmbHVpZENvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPiB9IHtcblxuXHRcdGNvbnN0IHN0YXRpY0NvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcigoY29sdW1uV2lkdGg6IENvbHVtbldpZHRoKSA9PiBjb2x1bW5XaWR0aC5pc1R5cGVOdW1iZXIoKSAmJiBjb2x1bW5XaWR0aC5nZXRXaWR0aCgpID4gdGhpcy5NSU5fQ09MVU1OX1dJRFRIKSxcblx0XHRcdGZsdWlkQ29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKChjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGNvbHVtbldpZHRoLmlzVHlwZUF1dG8oKSB8fFxuXHRcdFx0XHRcdGNvbHVtbldpZHRoLmlzVHlwZVBlcmNlbnRhZ2UoKSB8fFxuXHRcdFx0XHRcdChjb2x1bW5XaWR0aC5pc1R5cGVOdW1iZXIoKSAmJiBjb2x1bW5XaWR0aC5nZXRXaWR0aCgpIDw9IHRoaXMuTUlOX0NPTFVNTl9XSURUSCk7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0aWNDb2x1bW5zOiBzdGF0aWNDb2x1bW5zLFxuXHRcdFx0Zmx1aWRDb2x1bW5zOiBmbHVpZENvbHVtbnNcblx0XHR9O1xuXHR9XG59XG4iXX0=