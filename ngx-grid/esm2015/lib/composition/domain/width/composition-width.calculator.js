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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi93aWR0aC9jb21wb3NpdGlvbi13aWR0aC5jYWxjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFM0UsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBSXRDLFlBQW9CLE1BQTBCLEVBQ25DLEtBQWEsRUFDSixnQkFBd0I7UUFGeEIsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFDbkMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNKLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsU0FBUzs7WUFFSixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7O1lBQ3JCLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU1QixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7WUFHN0IsVUFBVSxHQUF1QixFQUFFO1FBRXZDLE9BQU8sQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsTUFBbUIsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUN0RCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDMUIsS0FBSyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTixVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hCO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBRXJCLDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztrQkFFbkIsU0FBUyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTTtZQUV4QyxPQUFPLENBQUMsT0FBTzs7Ozs7WUFBQyxDQUFDLE1BQW1CLEVBQUUsS0FBYSxFQUFFLEVBQUU7Z0JBQ3RELE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxFQUFDLENBQUM7U0FDSDtRQUVELHdCQUF3QjtRQUN4QixxR0FBcUc7UUFDckcsRUFBRTtRQUNGLHdCQUF3QjtRQUN4QiwyRUFBMkU7UUFDM0UsdURBQXVEO1FBQ3ZELE1BQU07UUFDTixFQUFFO1FBQ0YsZ0NBQWdDO1FBQ2hDLE1BQU07UUFFTixtREFBbUQ7UUFDbkQsRUFBRTtRQUNGLGdDQUFnQztRQUNoQyxFQUFFO1FBQ0YsMEJBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxPQUEyQjtRQUNyRCxPQUFPLENBQUMsT0FBTzs7OztRQUFDLENBQUMsTUFBbUIsRUFBRSxFQUFFO1lBQ3ZDLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUMxQixJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzlDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQzlDO2FBQ0Q7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU8scUJBQXFCOztjQUV0QixpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLFdBQXdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDO1FBRTNHLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxlQUFlLENBQUMsVUFBVSxFQUFFO2dCQUMxRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Q7SUFDRixDQUFDOzs7OztJQUVPLGVBQWU7O1lBRWxCLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSzs7WUFDekIsV0FBVyxHQUFHLEVBQUU7UUFFakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUU1QyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFNUIsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssZUFBZSxDQUFDLElBQUksRUFBRTtnQkFDcEQsU0FBUyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Q7UUFFRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztrQkFDckIsVUFBVSxHQUFHLFNBQVMsR0FBRyxXQUFXLENBQUMsTUFBTTtZQUVqRCxLQUFLLElBQUksTUFBTSxJQUFJLFdBQVcsRUFBRTtnQkFDL0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM1QjtTQUNEO0lBQ0YsQ0FBQztDQUVEOzs7Ozs7SUF6R0EsNkNBQTZDOzs7OztJQUVqQyw0Q0FBa0M7Ozs7O0lBQzNDLDJDQUFxQjs7Ozs7SUFDckIsc0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uV2lkdGggfSBmcm9tICcuLi9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aCc7XG5pbXBvcnQgeyBDb2x1bW5XaWR0aFR5cGUgfSBmcm9tICcuLi9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aC10eXBlJztcblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uV2lkdGhDYWxjdWxhdG9yIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNvdXJjZTogQXJyYXk8Q29sdW1uV2lkdGg+LFxuXHRcdFx0XHRwcml2YXRlIHdpZHRoOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgTUlOX0NPTFVNTl9XSURUSDogbnVtYmVyKSB7XG5cdFx0dGhpcy5jb2x1bW5zID0gdGhpcy5zb3VyY2UubWFwKChjKSA9PiBjLmNsb25lKCkpO1xuXHR9XG5cblx0Y2FsY3VsYXRlKCk6IEFycmF5PENvbHVtbldpZHRoPiB7XG5cblx0XHRsZXQgd2lkdGggPSB0aGlzLndpZHRoLFxuXHRcdFx0Y29sdW1ucyA9IFsuLi50aGlzLmNvbHVtbnNdO1xuXG5cdFx0Ly8gYWRqdXN0IG1pbiB2YWx1ZVxuXHRcdHRoaXMuYWRqdXN0TWluaW1hbFdpZHRoKGNvbHVtbnMpO1xuXG5cdFx0Ly8gcmVtb3ZlIG51bWJlciBjb2x1bW5zXG5cdFx0bGV0IG5ld0NvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPiA9IFtdO1xuXG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbldpZHRoLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRpZiAoY29sdW1uLmlzVHlwZU51bWJlcigpKSB7XG5cdFx0XHRcdHdpZHRoIC09IGNvbHVtbi5nZXRXaWR0aCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV3Q29sdW1ucy5wdXNoKGNvbHVtbik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRjb2x1bW5zID0gbmV3Q29sdW1ucztcblxuXHRcdC8vIHNwbGl0IGV2ZW4gYXV0byBjb2x1bW5zXG5cdFx0aWYgKGNvbHVtbnMubGVuZ3RoICE9PSAwKSB7XG5cblx0XHRcdGNvbnN0IGV2ZW5XaWR0aCA9IHdpZHRoIC8gY29sdW1ucy5sZW5ndGg7XG5cblx0XHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5XaWR0aCwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRjb2x1bW4uc2V0V2lkdGgoZXZlbldpZHRoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIGFkanVzdCBudW1iZXIgY29sdW1uc1xuXHRcdC8vIGxldCBudW1iZXJDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uV2lkdGg6IENvbHVtbldpZHRoKSA9PiBjb2x1bW5XaWR0aC5pc1R5cGVOdW1iZXIoKSk7XG5cdFx0Ly9cblx0XHQvLyAvLyBzb3J0IGJ5IG1pbiB2YWx1ZXNcblx0XHQvLyBudW1iZXJDb2x1bW5zLnNvcnQoKGNvbHVtbk9uZTogQ29sdW1uV2lkdGgsIGNvbHVtblR3bzogQ29sdW1uV2lkdGgpID0+IHtcblx0XHQvLyBcdHJldHVybiBjb2x1bW5PbmUuZ2V0V2lkdGgoKSAtIGNvbHVtblR3by5nZXRXaWR0aCgpO1xuXHRcdC8vIH0pO1xuXHRcdC8vXG5cdFx0Ly8gbnVtYmVyQ29sdW1ucy5mb3JFYWNoKCgpID0+IHtcblx0XHQvLyB9KTtcblxuXHRcdC8vIHRoaXMuYWRqdXN0TWluaW1hbFdpZHRoKENvbHVtbldpZHRoVHlwZS5OVU1CRVIpO1xuXHRcdC8vXG5cdFx0Ly8gdGhpcy5hZGp1c3RQZXJjZW50YWdlV2lkdGgoKTtcblx0XHQvL1xuXHRcdC8vIHRoaXMuYWRqdXN0QXV0b1dpZHRoKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGp1c3RNaW5pbWFsV2lkdGgoY29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+KTogdm9pZCB7XG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbldpZHRoKSA9PiB7XG5cdFx0XHRpZiAoY29sdW1uLmlzVHlwZU51bWJlcigpKSB7XG5cdFx0XHRcdGlmIChjb2x1bW4uZ2V0V2lkdGgoKSA8IHRoaXMuTUlOX0NPTFVNTl9XSURUSCkge1xuXHRcdFx0XHRcdGNvbHVtbi5zZXRXaWR0aEFuZFR5cGUodGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGp1c3RQZXJjZW50YWdlV2lkdGgoKTogdm9pZCB7XG5cblx0XHRjb25zdCBwZXJjZW50YWdlQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbldpZHRoOiBDb2x1bW5XaWR0aCkgPT4gY29sdW1uV2lkdGguaXNUeXBlUGVyY2VudGFnZSgpKTtcblxuXHRcdGZvciAobGV0IGNvbHVtbiBvZiB0aGlzLmNvbHVtbnMpIHtcblx0XHRcdGlmIChjb2x1bW4uZ2V0Q29sdW1uVHlwZSgpID09PSBDb2x1bW5XaWR0aFR5cGUuUEVSQ0VOVEFHRSkge1xuXHRcdFx0XHRjb2x1bW4uc2V0V2lkdGgodGhpcy53aWR0aCAqIGNvbHVtbi5nZXRXaWR0aCgpICogMC4wMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGp1c3RBdXRvV2lkdGgoKTogdm9pZCB7XG5cblx0XHRsZXQgbGVmdFdpZHRoID0gdGhpcy53aWR0aCxcblx0XHRcdGF1dG9Db2x1bW5zID0gW107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRsZXQgY29sdW1uID0gdGhpcy5jb2x1bW5zW2ldO1xuXG5cdFx0XHRpZiAoY29sdW1uLmdldENvbHVtblR5cGUoKSAhPT0gQ29sdW1uV2lkdGhUeXBlLkFVVE8pIHtcblx0XHRcdFx0bGVmdFdpZHRoIC09IGNvbHVtbi5nZXRXaWR0aCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXV0b0NvbHVtbnMucHVzaChjb2x1bW4pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChhdXRvQ29sdW1ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBzcGxpdFdpZHRoID0gbGVmdFdpZHRoIC8gYXV0b0NvbHVtbnMubGVuZ3RoO1xuXG5cdFx0XHRmb3IgKGxldCBjb2x1bW4gb2YgYXV0b0NvbHVtbnMpIHtcblx0XHRcdFx0Y29sdW1uLnNldFdpZHRoKHNwbGl0V2lkdGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0=