/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnWidthType } from '../column/column-width/column-width-type';
export class CompositionWidthCalculator {
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} MIN_COLUMN_WIDTH
     */
    constructor(source, width, MIN_COLUMN_WIDTH) {
        this.source = source;
        this.width = width;
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.columns = this.source.map((/**
         * @param {?} c
         * @return {?}
         */
        (c) => c.clone()));
    }
    /**
     * @return {?}
     */
    calculate() {
        /** @type {?} */
        let width = this.width;
        /** @type {?} */
        let columns = [...this.columns];
        // adjust min value
        this.adjustMinimalWidth(columns);
        // remove number columns
        /** @type {?} */
        let newColumns = [];
        columns.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
            if (column.isTypeNumber()) {
                width -= column.getWidth();
            }
            else {
                newColumns.push(column);
            }
        }));
        columns = newColumns;
        // split even auto columns
        if (columns.length !== 0) {
            /** @type {?} */
            const evenWidth = width / columns.length;
            columns.forEach((/**
             * @param {?} column
             * @param {?} index
             * @return {?}
             */
            (column, index) => {
                column.setWidth(evenWidth);
            }));
        }
        // adjust number columns
        // let numberColumns = this.columns.filter((columnWidth: ColumnWidth) => columnWidth.isTypeNumber());
        //
        // // sort by min values
        // numberColumns.sort((columnOne: ColumnWidth, columnTwo: ColumnWidth) => {
        // 	return columnOne.getWidth() - columnTwo.getWidth();
        // });
        //
        // numberColumns.forEach(() => {
        // });
        // this.adjustMinimalWidth(ColumnWidthType.NUMBER);
        //
        // this.adjustPercentageWidth();
        //
        // this.adjustAutoWidth();
        return this.columns;
    }
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    adjustMinimalWidth(columns) {
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            if (column.isTypeNumber()) {
                if (column.getWidth() < this.MIN_COLUMN_WIDTH) {
                    column.setWidthAndType(this.MIN_COLUMN_WIDTH);
                }
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    adjustPercentageWidth() {
        /** @type {?} */
        const percentageColumns = this.columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        (columnWidth) => columnWidth.isTypePercentage()));
        for (let column of this.columns) {
            if (column.getColumnType() === ColumnWidthType.PERCENTAGE) {
                column.setWidth(this.width * column.getWidth() * 0.01);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    adjustAutoWidth() {
        /** @type {?} */
        let leftWidth = this.width;
        /** @type {?} */
        let autoColumns = [];
        for (let i = 0; i < this.columns.length; i += 1) {
            /** @type {?} */
            let column = this.columns[i];
            if (column.getColumnType() !== ColumnWidthType.AUTO) {
                leftWidth -= column.getWidth();
            }
            else {
                autoColumns.push(column);
            }
        }
        if (autoColumns.length > 0) {
            /** @type {?} */
            const splitWidth = leftWidth / autoColumns.length;
            for (let column of autoColumns) {
                column.setWidth(splitWidth);
            }
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.source;
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.width;
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.MIN_COLUMN_WIDTH;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4vd2lkdGgvY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTNFLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQUl0QyxZQUFvQixNQUEwQixFQUNuQyxLQUFhLEVBQ0osZ0JBQXdCO1FBRnhCLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQ25DLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDSixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELFNBQVM7O1lBRUosS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLOztZQUNyQixPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFNUIsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7O1lBRzdCLFVBQVUsR0FBdUIsRUFBRTtRQUV2QyxPQUFPLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLE1BQW1CLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDdEQsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0JBQzFCLEtBQUssSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDM0I7aUJBQU07Z0JBQ04sVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4QjtRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUVyQiwwQkFBMEI7UUFDMUIsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs7a0JBRW5CLFNBQVMsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU07WUFFeEMsT0FBTyxDQUFDLE9BQU87Ozs7O1lBQUMsQ0FBQyxNQUFtQixFQUFFLEtBQWEsRUFBRSxFQUFFO2dCQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsRUFBQyxDQUFDO1NBQ0g7UUFFRCx3QkFBd0I7UUFDeEIscUdBQXFHO1FBQ3JHLEVBQUU7UUFDRix3QkFBd0I7UUFDeEIsMkVBQTJFO1FBQzNFLHVEQUF1RDtRQUN2RCxNQUFNO1FBQ04sRUFBRTtRQUNGLGdDQUFnQztRQUNoQyxNQUFNO1FBRU4sbURBQW1EO1FBQ25ELEVBQUU7UUFDRixnQ0FBZ0M7UUFDaEMsRUFBRTtRQUNGLDBCQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsT0FBMkI7UUFDckQsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQW1CLEVBQUUsRUFBRTtZQUN2QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUM5QyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUM5QzthQUNEO1FBQ0YsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLHFCQUFxQjs7Y0FFdEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxXQUF3QixFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBQztRQUUzRyxLQUFLLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEMsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssZUFBZSxDQUFDLFVBQVUsRUFBRTtnQkFDMUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUN2RDtTQUNEO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxlQUFlOztZQUVsQixTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUs7O1lBQ3pCLFdBQVcsR0FBRyxFQUFFO1FBRWpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFFNUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRTVCLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLGVBQWUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3BELFNBQVMsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDL0I7aUJBQU07Z0JBQ04sV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6QjtTQUNEO1FBRUQsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7a0JBQ3JCLFVBQVUsR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDLE1BQU07WUFFakQsS0FBSyxJQUFJLE1BQU0sSUFBSSxXQUFXLEVBQUU7Z0JBQy9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDNUI7U0FDRDtJQUNGLENBQUM7Q0FFRDs7Ozs7O0lBekdBLDZDQUE2Qzs7Ozs7SUFFakMsNENBQWtDOzs7OztJQUMzQywyQ0FBcUI7Ozs7O0lBQ3JCLHNEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbldpZHRoIH0gZnJvbSAnLi4vY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgnO1xuaW1wb3J0IHsgQ29sdW1uV2lkdGhUeXBlIH0gZnJvbSAnLi4vY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbldpZHRoQ2FsY3VsYXRvciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzb3VyY2U6IEFycmF5PENvbHVtbldpZHRoPixcblx0XHRcdFx0cHJpdmF0ZSB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IE1JTl9DT0xVTU5fV0lEVEg6IG51bWJlcikge1xuXHRcdHRoaXMuY29sdW1ucyA9IHRoaXMuc291cmNlLm1hcCgoYykgPT4gYy5jbG9uZSgpKTtcblx0fVxuXG5cdGNhbGN1bGF0ZSgpOiBBcnJheTxDb2x1bW5XaWR0aD4ge1xuXG5cdFx0bGV0IHdpZHRoID0gdGhpcy53aWR0aCxcblx0XHRcdGNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zXTtcblxuXHRcdC8vIGFkanVzdCBtaW4gdmFsdWVcblx0XHR0aGlzLmFkanVzdE1pbmltYWxXaWR0aChjb2x1bW5zKTtcblxuXHRcdC8vIHJlbW92ZSBudW1iZXIgY29sdW1uc1xuXHRcdGxldCBuZXdDb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD4gPSBbXTtcblxuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5XaWR0aCwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0aWYgKGNvbHVtbi5pc1R5cGVOdW1iZXIoKSkge1xuXHRcdFx0XHR3aWR0aCAtPSBjb2x1bW4uZ2V0V2lkdGgoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld0NvbHVtbnMucHVzaChjb2x1bW4pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Y29sdW1ucyA9IG5ld0NvbHVtbnM7XG5cblx0XHQvLyBzcGxpdCBldmVuIGF1dG8gY29sdW1uc1xuXHRcdGlmIChjb2x1bW5zLmxlbmd0aCAhPT0gMCkge1xuXG5cdFx0XHRjb25zdCBldmVuV2lkdGggPSB3aWR0aCAvIGNvbHVtbnMubGVuZ3RoO1xuXG5cdFx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uV2lkdGgsIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0Y29sdW1uLnNldFdpZHRoKGV2ZW5XaWR0aCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBhZGp1c3QgbnVtYmVyIGNvbHVtbnNcblx0XHQvLyBsZXQgbnVtYmVyQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbldpZHRoOiBDb2x1bW5XaWR0aCkgPT4gY29sdW1uV2lkdGguaXNUeXBlTnVtYmVyKCkpO1xuXHRcdC8vXG5cdFx0Ly8gLy8gc29ydCBieSBtaW4gdmFsdWVzXG5cdFx0Ly8gbnVtYmVyQ29sdW1ucy5zb3J0KChjb2x1bW5PbmU6IENvbHVtbldpZHRoLCBjb2x1bW5Ud286IENvbHVtbldpZHRoKSA9PiB7XG5cdFx0Ly8gXHRyZXR1cm4gY29sdW1uT25lLmdldFdpZHRoKCkgLSBjb2x1bW5Ud28uZ2V0V2lkdGgoKTtcblx0XHQvLyB9KTtcblx0XHQvL1xuXHRcdC8vIG51bWJlckNvbHVtbnMuZm9yRWFjaCgoKSA9PiB7XG5cdFx0Ly8gfSk7XG5cblx0XHQvLyB0aGlzLmFkanVzdE1pbmltYWxXaWR0aChDb2x1bW5XaWR0aFR5cGUuTlVNQkVSKTtcblx0XHQvL1xuXHRcdC8vIHRoaXMuYWRqdXN0UGVyY2VudGFnZVdpZHRoKCk7XG5cdFx0Ly9cblx0XHQvLyB0aGlzLmFkanVzdEF1dG9XaWR0aCgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucztcblx0fVxuXG5cdHByaXZhdGUgYWRqdXN0TWluaW1hbFdpZHRoKGNvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPik6IHZvaWQge1xuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5XaWR0aCkgPT4ge1xuXHRcdFx0aWYgKGNvbHVtbi5pc1R5cGVOdW1iZXIoKSkge1xuXHRcdFx0XHRpZiAoY29sdW1uLmdldFdpZHRoKCkgPCB0aGlzLk1JTl9DT0xVTU5fV0lEVEgpIHtcblx0XHRcdFx0XHRjb2x1bW4uc2V0V2lkdGhBbmRUeXBlKHRoaXMuTUlOX0NPTFVNTl9XSURUSCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgYWRqdXN0UGVyY2VudGFnZVdpZHRoKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgcGVyY2VudGFnZUNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGgpID0+IGNvbHVtbldpZHRoLmlzVHlwZVBlcmNlbnRhZ2UoKSk7XG5cblx0XHRmb3IgKGxldCBjb2x1bW4gb2YgdGhpcy5jb2x1bW5zKSB7XG5cdFx0XHRpZiAoY29sdW1uLmdldENvbHVtblR5cGUoKSA9PT0gQ29sdW1uV2lkdGhUeXBlLlBFUkNFTlRBR0UpIHtcblx0XHRcdFx0Y29sdW1uLnNldFdpZHRoKHRoaXMud2lkdGggKiBjb2x1bW4uZ2V0V2lkdGgoKSAqIDAuMDEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYWRqdXN0QXV0b1dpZHRoKCk6IHZvaWQge1xuXG5cdFx0bGV0IGxlZnRXaWR0aCA9IHRoaXMud2lkdGgsXG5cdFx0XHRhdXRvQ29sdW1ucyA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0bGV0IGNvbHVtbiA9IHRoaXMuY29sdW1uc1tpXTtcblxuXHRcdFx0aWYgKGNvbHVtbi5nZXRDb2x1bW5UeXBlKCkgIT09IENvbHVtbldpZHRoVHlwZS5BVVRPKSB7XG5cdFx0XHRcdGxlZnRXaWR0aCAtPSBjb2x1bW4uZ2V0V2lkdGgoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGF1dG9Db2x1bW5zLnB1c2goY29sdW1uKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoYXV0b0NvbHVtbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3Qgc3BsaXRXaWR0aCA9IGxlZnRXaWR0aCAvIGF1dG9Db2x1bW5zLmxlbmd0aDtcblxuXHRcdFx0Zm9yIChsZXQgY29sdW1uIG9mIGF1dG9Db2x1bW5zKSB7XG5cdFx0XHRcdGNvbHVtbi5zZXRXaWR0aChzcGxpdFdpZHRoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19