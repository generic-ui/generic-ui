/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnWidthCollection } from '../column-width/column-width-collection';
import { SortStatus } from '../sort/sort-status';
import { CompositionChangeSortStatusAggregateEvent } from '../sort/composition-change-sort-status.aggregate-event';
export class ActiveColumnContainer {
    /**
     * @param {?} compositionId
     * @param {?=} columns
     * @param {?=} gridWidth
     * @param {?=} columnConfigs
     */
    constructor(compositionId, columns = [], gridWidth, columnConfigs) {
        this.compositionId = compositionId;
        this.MIN_COLUMN_WIDTH = 50;
        /**
         * Columns taken from user config.
         * This should not be modified and it should be used as a reference point.
         */
        this.columnWidthCollection = new ColumnWidthCollection(this.MIN_COLUMN_WIDTH);
        this.columns = columns;
        if (gridWidth && columnConfigs) {
            this.columnWidthCollection = new ColumnWidthCollection(this.MIN_COLUMN_WIDTH, columnConfigs, gridWidth);
        }
    }
    // REMOVE
    /**
     * @return {?}
     */
    getColumns() {
        return this.columns;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.columnWidthCollection.setWidth(width);
    }
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    addColumn(column, index) {
        this.columns.splice(index, 0, column);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeColumn(index) {
        this.columns.splice(index, 1);
    }
    /**
     * @param {?} columns
     * @param {?} columnConfigs
     * @return {?}
     */
    setColumns(columns, columnConfigs) {
        this.columns = columns;
        this.columnWidthCollection.setColumns(columnConfigs);
        /** @type {?} */
        const updatedWidths = this.columnWidthCollection.getWidths();
        this.columns.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
            column.setWidth(updatedWidths[index]);
        }));
        // TODO
        //this.addEvent(new ColumnsSetAggregateEvent(this.getId(), columns));
    }
    /**
     * @param {?} sortParams
     * @return {?}
     */
    changeSort(sortParams) {
        this.columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            column.setSortStatus(SortStatus.NONE);
        }));
        for (let param of sortParams) {
            /** @type {?} */
            const fieldId = param.fieldId;
            /** @type {?} */
            const direction = param.direction;
            /** @type {?} */
            const sortStatus = direction ? SortStatus.ASC : SortStatus.DESC;
            /** @type {?} */
            const columns = this.columns.filter((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                return column.getField().getId().getId() === fieldId.getId();
            }));
            if (columns.length > 0) {
                columns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    column.setSortStatus(sortStatus);
                }));
            }
        }
        return new CompositionChangeSortStatusAggregateEvent(this.getCompositionId());
    }
    /**
     * @private
     * @return {?}
     */
    getCompositionId() {
        return this.compositionId;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveColumnContainer.prototype.MIN_COLUMN_WIDTH;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnContainer.prototype.columns;
    /**
     * Columns taken from user config.
     * This should not be modified and it should be used as a reference point.
     * @type {?}
     * @private
     */
    ActiveColumnContainer.prototype.columnWidthCollection;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnContainer.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHaEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpELE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRW5ILE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7SUFZakMsWUFBb0IsYUFBNEIsRUFDN0MsVUFBcUMsRUFBRSxFQUN2QyxTQUFrQixFQUNsQixhQUFtQztRQUhsQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVYvQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7Ozs7O1FBUS9CLDBCQUFxQixHQUEwQixJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBTXZHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksU0FBUyxJQUFJLGFBQWEsRUFBRTtZQUMvQixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3hHO0lBQ0YsQ0FBQzs7Ozs7SUFHRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBMEIsRUFBRSxLQUFhO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWtDLEVBQUUsYUFBa0M7UUFFaEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Y0FFL0MsYUFBYSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUU7UUFFNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsTUFBMEIsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUNsRSxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTztRQUNQLHFFQUFxRTtJQUN0RSxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxVQUFtQztRQUU3QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQTBCLEVBQUUsRUFBRTtZQUNuRCxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsQ0FBQztRQUVILEtBQUssSUFBSSxLQUFLLElBQUksVUFBVSxFQUFFOztrQkFFdkIsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPOztrQkFDNUIsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTOztrQkFDM0IsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUk7O2tCQUVwRCxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxNQUEwQixFQUFFLEVBQUU7Z0JBQ2xFLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5RCxDQUFDLEVBQUM7WUFFRixJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixPQUFPLENBQUMsT0FBTzs7OztnQkFBQyxDQUFDLE1BQTBCLEVBQUUsRUFBRTtvQkFFOUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxFQUFDLENBQUM7YUFDSDtTQUNEO1FBRUQsT0FBTyxJQUFJLHlDQUF5QyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7SUFFTyxnQkFBZ0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Q0FFRDs7Ozs7O0lBckZBLGlEQUF1Qzs7Ozs7SUFFdkMsd0NBQTJDOzs7Ozs7O0lBTTNDLHNEQUF3Rzs7Ozs7SUFFNUYsOENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbldpZHRoQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuLi9zb3J0L2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBTb3J0U3RhdHVzIH0gZnJvbSAnLi4vc29ydC9zb3J0LXN0YXR1cyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgQWN0aXZlQ29sdW1uQ29udGFpbmVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IE1JTl9DT0xVTU5fV0lEVEggPSA1MDtcblxuXHRwcml2YXRlIGNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT47XG5cblx0LyoqXG5cdCAqIENvbHVtbnMgdGFrZW4gZnJvbSB1c2VyIGNvbmZpZy5cblx0ICogVGhpcyBzaG91bGQgbm90IGJlIG1vZGlmaWVkIGFuZCBpdCBzaG91bGQgYmUgdXNlZCBhcyBhIHJlZmVyZW5jZSBwb2ludC5cblx0ICovXG5cdHByaXZhdGUgY29sdW1uV2lkdGhDb2xsZWN0aW9uOiBDb2x1bW5XaWR0aENvbGxlY3Rpb24gPSBuZXcgQ29sdW1uV2lkdGhDb2xsZWN0aW9uKHRoaXMuTUlOX0NPTFVNTl9XSURUSCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+ID0gW10sXG5cdFx0XHRcdGdyaWRXaWR0aD86IG51bWJlcixcblx0XHRcdFx0Y29sdW1uQ29uZmlncz86IEFycmF5PENvbHVtbkNvbmZpZz4pIHtcblx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXG5cdFx0aWYgKGdyaWRXaWR0aCAmJiBjb2x1bW5Db25maWdzKSB7XG5cdFx0XHR0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbiA9IG5ldyBDb2x1bW5XaWR0aENvbGxlY3Rpb24odGhpcy5NSU5fQ09MVU1OX1dJRFRILCBjb2x1bW5Db25maWdzLCBncmlkV2lkdGgpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRnZXRDb2x1bW5zKCk6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uc2V0V2lkdGgod2lkdGgpO1xuXHR9XG5cblx0YWRkQ29sdW1uKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5zLnNwbGljZShpbmRleCwgMCwgY29sdW1uKTtcblx0fVxuXG5cdHJlbW92ZUNvbHVtbihpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5zLnNwbGljZShpbmRleCwgMSk7XG5cdH1cblxuXHRzZXRDb2x1bW5zKGNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4sIGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4pIHtcblxuXHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cblx0XHR0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5zZXRDb2x1bW5zKGNvbHVtbkNvbmZpZ3MpO1xuXG5cdFx0Y29uc3QgdXBkYXRlZFdpZHRocyA9IHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLmdldFdpZHRocygpO1xuXG5cdFx0dGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRjb2x1bW4uc2V0V2lkdGgodXBkYXRlZFdpZHRoc1tpbmRleF0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gVE9ET1xuXHRcdC8vdGhpcy5hZGRFdmVudChuZXcgQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgY29sdW1ucykpO1xuXHR9XG5cblx0Y2hhbmdlU29ydChzb3J0UGFyYW1zOiBBcnJheTxDaGFuZ2VTb3J0UGFyYW1zPik6IEFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRcdHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSkgPT4ge1xuXHRcdFx0Y29sdW1uLnNldFNvcnRTdGF0dXMoU29ydFN0YXR1cy5OT05FKTtcblx0XHR9KTtcblxuXHRcdGZvciAobGV0IHBhcmFtIG9mIHNvcnRQYXJhbXMpIHtcblxuXHRcdFx0Y29uc3QgZmllbGRJZCA9IHBhcmFtLmZpZWxkSWQsXG5cdFx0XHRcdGRpcmVjdGlvbiA9IHBhcmFtLmRpcmVjdGlvbixcblx0XHRcdFx0c29ydFN0YXR1cyA9IGRpcmVjdGlvbiA/IFNvcnRTdGF0dXMuQVNDIDogU29ydFN0YXR1cy5ERVNDO1xuXG5cdFx0XHRjb25zdCBjb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpID0+IHtcblx0XHRcdFx0cmV0dXJuIGNvbHVtbi5nZXRGaWVsZCgpLmdldElkKCkuZ2V0SWQoKSA9PT0gZmllbGRJZC5nZXRJZCgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChjb2x1bW5zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSkgPT4ge1xuXG5cdFx0XHRcdFx0Y29sdW1uLnNldFNvcnRTdGF0dXMoc29ydFN0YXR1cyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQWdncmVnYXRlRXZlbnQodGhpcy5nZXRDb21wb3NpdGlvbklkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDb21wb3NpdGlvbklkKCk6IENvbXBvc2l0aW9uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uSWQ7XG5cdH1cblxufVxuIl19