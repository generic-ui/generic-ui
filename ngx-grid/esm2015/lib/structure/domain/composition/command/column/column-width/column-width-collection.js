/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnWidth } from './column-width';
import { CompositionContainerWidthCalculator } from '../../width/composition-container-width.calculator';
import { CompositionWidthCalculator } from '../../width/composition-width.calculator';
export class ColumnWidthCollection {
    /**
     * @param {?} MIN_COLUMN_WIDTH
     * @param {?=} columns
     * @param {?=} width
     */
    constructor(MIN_COLUMN_WIDTH, columns = [], width = 100) {
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.baseColumnWidths = columns.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => new ColumnWidth(column.width)));
        this.columnWidths = columns.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => new ColumnWidth(column.width)));
        this.setContainerWidth(width);
        this.calculate();
    }
    /**
     * @return {?}
     */
    getColumns() {
        return this.baseColumnWidths;
    }
    /**
     * @return {?}
     */
    getColumnsWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getWidths() {
        return this.columnWidths.map((/**
         * @param {?} c
         * @return {?}
         */
        c => c.getWidth()));
    }
    /**
     * @return {?}
     */
    getMinWidth() {
        /** @type {?} */
        const calculator = new CompositionContainerWidthCalculator(this.MIN_COLUMN_WIDTH);
        return calculator.calculateMinWidth(this.columnWidths);
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.setContainerWidth(width);
        this.calculate();
    }
    /**
     * @param {?} columnConfigs
     * @return {?}
     */
    setColumns(columnConfigs) {
        this.baseColumnWidths = columnConfigs.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => new ColumnWidth(column.width)));
        this.columnWidths = columnConfigs.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => new ColumnWidth(column.width)));
        this.calculate();
    }
    /**
     * @private
     * @return {?}
     */
    calculate() {
        if (this.baseColumnWidths && this.width) {
            /** @type {?} */
            const calculator = new CompositionWidthCalculator(this.baseColumnWidths, this.width, this.MIN_COLUMN_WIDTH);
            this.columnWidths = calculator.calculate();
        }
    }
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    setContainerWidth(width) {
        if (this.getMinWidth() > width) {
            this.width = this.getMinWidth();
        }
        else {
            this.width = width;
        }
        this.calculate();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.baseColumnWidths;
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.columnWidths;
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.width;
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.MIN_COLUMN_WIDTH;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXdpZHRoLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgtY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBR3RGLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQVFqQyxZQUE2QixnQkFBd0IsRUFDbEQsVUFBK0IsRUFBRSxFQUNqQyxRQUFnQixHQUFHO1FBRk8scUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO1FBR3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxXQUFXOztjQUNKLFVBQVUsR0FBRyxJQUFJLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUVqRixPQUFPLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUVyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLGFBQWtDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsR0FBRzs7OztRQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsR0FBRzs7OztRQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFFL0YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRU8sU0FBUztRQUVoQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOztrQkFFbEMsVUFBVSxHQUFHLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRTNHLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzNDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8saUJBQWlCLENBQUMsS0FBYTtRQUN0QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7YUFBTTtZQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ25CO1FBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDRDs7Ozs7O0lBbkVBLGlEQUE2Qzs7Ozs7SUFFN0MsNkNBQXlDOzs7OztJQUV6QyxzQ0FBc0I7Ozs7O0lBRVYsaURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uV2lkdGggfSBmcm9tICcuL2NvbHVtbi13aWR0aCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yIH0gZnJvbSAnLi4vLi4vd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aENhbGN1bGF0b3IgfSBmcm9tICcuLi8uLi93aWR0aC9jb21wb3NpdGlvbi13aWR0aC5jYWxjdWxhdG9yJztcblxuXG5leHBvcnQgY2xhc3MgQ29sdW1uV2lkdGhDb2xsZWN0aW9uIHtcblxuXHRwcml2YXRlIGJhc2VDb2x1bW5XaWR0aHM6IEFycmF5PENvbHVtbldpZHRoPjtcblxuXHRwcml2YXRlIGNvbHVtbldpZHRoczogQXJyYXk8Q29sdW1uV2lkdGg+O1xuXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IE1JTl9DT0xVTU5fV0lEVEg6IG51bWJlcixcblx0XHRcdFx0Y29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IFtdLFxuXHRcdFx0XHR3aWR0aDogbnVtYmVyID0gMTAwKSB7XG5cdFx0dGhpcy5iYXNlQ29sdW1uV2lkdGhzID0gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiBuZXcgQ29sdW1uV2lkdGgoY29sdW1uLndpZHRoKSk7XG5cdFx0dGhpcy5jb2x1bW5XaWR0aHMgPSBjb2x1bW5zLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IG5ldyBDb2x1bW5XaWR0aChjb2x1bW4ud2lkdGgpKTtcblxuXHRcdHRoaXMuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxuXG5cdGdldENvbHVtbnMoKTogQXJyYXk8Q29sdW1uV2lkdGg+IHtcblx0XHRyZXR1cm4gdGhpcy5iYXNlQ29sdW1uV2lkdGhzO1xuXHR9XG5cblx0Z2V0Q29sdW1uc1dpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRXaWR0aHMoKTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uV2lkdGhzLm1hcChjID0+IGMuZ2V0V2lkdGgoKSk7XG5cdH1cblxuXHRnZXRNaW5XaWR0aCgpOiBudW1iZXIge1xuXHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IodGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblxuXHRcdHJldHVybiBjYWxjdWxhdG9yLmNhbGN1bGF0ZU1pbldpZHRoKHRoaXMuY29sdW1uV2lkdGhzKTtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRzZXRDb2x1bW5zKGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4pOiB2b2lkIHtcblx0XHR0aGlzLmJhc2VDb2x1bW5XaWR0aHMgPSBjb2x1bW5Db25maWdzLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IG5ldyBDb2x1bW5XaWR0aChjb2x1bW4ud2lkdGgpKTtcblx0XHR0aGlzLmNvbHVtbldpZHRocyA9IGNvbHVtbkNvbmZpZ3MubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4gbmV3IENvbHVtbldpZHRoKGNvbHVtbi53aWR0aCkpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuYmFzZUNvbHVtbldpZHRocyAmJiB0aGlzLndpZHRoKSB7XG5cblx0XHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25XaWR0aENhbGN1bGF0b3IodGhpcy5iYXNlQ29sdW1uV2lkdGhzLCB0aGlzLndpZHRoLCB0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXG5cdFx0XHR0aGlzLmNvbHVtbldpZHRocyA9IGNhbGN1bGF0b3IuY2FsY3VsYXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZ2V0TWluV2lkdGgoKSA+IHdpZHRoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gdGhpcy5nZXRNaW5XaWR0aCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxufVxuIl19