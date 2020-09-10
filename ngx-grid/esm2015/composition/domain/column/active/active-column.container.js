/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnWidthCollection } from '../column-width/column-width-collection';
import { SortOrder } from '../sort/sort-order';
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
    /**
     * @return {?}
     */
    getColumnWidths() {
        return this.columnWidthCollection.getColumnWidths();
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
            column.setSortStatus(SortOrder.NONE);
        }));
        for (let param of sortParams) {
            /** @type {?} */
            const fieldId = param.fieldId;
            /** @type {?} */
            const direction = param.direction;
            /** @type {?} */
            const sortStatus = direction ? SortOrder.ASC : SortOrder.DESC;
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
        return new CompositionChangeSortStatusAggregateEvent(this.getCompositionId(), this.columns);
    }
    /**
     * @param {?} columnId
     * @return {?}
     */
    moveLeft(columnId) {
        /** @type {?} */
        const index = this.findColumnIndex(columnId);
        this.move(index, index - 1);
    }
    /**
     * @param {?} columnId
     * @return {?}
     */
    moveRight(columnId) {
        /** @type {?} */
        const index = this.findColumnIndex(columnId);
        this.move(index, index + 1);
    }
    /**
     * @return {?}
     */
    getMinColumnWidth() {
        return this.MIN_COLUMN_WIDTH;
    }
    /**
     * @private
     * @param {?} fromIndex
     * @param {?} toIndex
     * @return {?}
     */
    move(fromIndex, toIndex) {
        if (!this.validateMoveIndex(fromIndex) || !this.validateMoveIndex(toIndex)) {
            return;
        }
        /** @type {?} */
        const column = this.columns[fromIndex];
        this.columns[fromIndex] = this.columns[toIndex];
        this.columns[toIndex] = column;
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    validateMoveIndex(index) {
        return index >= 0;
    }
    /**
     * @private
     * @return {?}
     */
    getCompositionId() {
        return this.compositionId;
    }
    /**
     * @private
     * @param {?} columnId
     * @return {?}
     */
    findColumnIndex(columnId) {
        return this.columns.findIndex((/**
         * @param {?} c
         * @return {?}
         */
        c => c.getId().equals(columnId)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUdoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFJbkgsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7OztJQVlqQyxZQUFvQixhQUE0QixFQUM3QyxVQUFxQyxFQUFFLEVBQ3ZDLFNBQWtCLEVBQ2xCLGFBQW1DO1FBSGxCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBVi9CLHFCQUFnQixHQUFHLEVBQUUsQ0FBQzs7Ozs7UUFRL0IsMEJBQXFCLEdBQTBCLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFNdkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxTQUFTLElBQUksYUFBYSxFQUFFO1lBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDeEc7SUFDRixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBR0QsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsS0FB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QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNFLE9BQU87U0FDUDs7Y0FFSyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFFdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVPLGlCQUFpQixDQUFDLEtBQWE7UUFDdEMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsUUFBa0I7UUFDekMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQztJQUNoRSxDQUFDO0NBRUQ7Ozs7OztJQS9IQSxpREFBdUM7Ozs7O0lBRXZDLHdDQUEyQzs7Ozs7OztJQU0zQyxzREFBd0c7Ozs7O0lBRTVGLDhDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5XaWR0aENvbGxlY3Rpb24gfSBmcm9tICcuLi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoLWNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDaGFuZ2VTb3J0UGFyYW1zIH0gZnJvbSAnLi4vc29ydC9jaGFuZ2Utc29ydC5wYXJhbXMnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5XaWR0aCB9IGZyb20gJy4uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgnO1xuXG5leHBvcnQgY2xhc3MgQWN0aXZlQ29sdW1uQ29udGFpbmVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IE1JTl9DT0xVTU5fV0lEVEggPSA1MDtcblxuXHRwcml2YXRlIGNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT47XG5cblx0LyoqXG5cdCAqIENvbHVtbnMgdGFrZW4gZnJvbSB1c2VyIGNvbmZpZy5cblx0ICogVGhpcyBzaG91bGQgbm90IGJlIG1vZGlmaWVkIGFuZCBpdCBzaG91bGQgYmUgdXNlZCBhcyBhIHJlZmVyZW5jZSBwb2ludC5cblx0ICovXG5cdHByaXZhdGUgY29sdW1uV2lkdGhDb2xsZWN0aW9uOiBDb2x1bW5XaWR0aENvbGxlY3Rpb24gPSBuZXcgQ29sdW1uV2lkdGhDb2xsZWN0aW9uKHRoaXMuTUlOX0NPTFVNTl9XSURUSCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+ID0gW10sXG5cdFx0XHRcdGdyaWRXaWR0aD86IG51bWJlcixcblx0XHRcdFx0Y29sdW1uQ29uZmlncz86IEFycmF5PENvbHVtbkNvbmZpZz4pIHtcblx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXG5cdFx0aWYgKGdyaWRXaWR0aCAmJiBjb2x1bW5Db25maWdzKSB7XG5cdFx0XHR0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbiA9IG5ldyBDb2x1bW5XaWR0aENvbGxlY3Rpb24odGhpcy5NSU5fQ09MVU1OX1dJRFRILCBjb2x1bW5Db25maWdzLCBncmlkV2lkdGgpO1xuXHRcdH1cblx0fVxuXG5cdGdldENvbHVtbldpZHRocygpOiBBcnJheTxDb2x1bW5XaWR0aD4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5nZXRDb2x1bW5XaWR0aHMoKTtcblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRnZXRDb2x1bW5zKCk6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uc2V0V2lkdGgod2lkdGgpO1xuXHR9XG5cblx0YWRkQ29sdW1uKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5zLnNwbGljZShpbmRleCwgMCwgY29sdW1uKTtcblx0fVxuXG5cdHJlbW92ZUNvbHVtbihpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5zLnNwbGljZShpbmRleCwgMSk7XG5cdH1cblxuXHRzZXRDb2x1bW5zKGNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4sIGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4pIHtcblxuXHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cblx0XHR0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5zZXRDb2x1bW5zKGNvbHVtbkNvbmZpZ3MpO1xuXG5cdFx0Y29uc3QgdXBkYXRlZFdpZHRocyA9IHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLmdldFdpZHRocygpO1xuXG5cdFx0dGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRjb2x1bW4uc2V0V2lkdGgodXBkYXRlZFdpZHRoc1tpbmRleF0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gVE9ET1xuXHRcdC8vdGhpcy5hZGRFdmVudChuZXcgQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgY29sdW1ucykpO1xuXHR9XG5cblx0Y2hhbmdlU29ydChzb3J0UGFyYW1zOiBBcnJheTxDaGFuZ2VTb3J0UGFyYW1zPik6IEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblxuXHRcdHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSkgPT4ge1xuXHRcdFx0Y29sdW1uLnNldFNvcnRTdGF0dXMoU29ydE9yZGVyLk5PTkUpO1xuXHRcdH0pO1xuXG5cdFx0Zm9yIChsZXQgcGFyYW0gb2Ygc29ydFBhcmFtcykge1xuXG5cdFx0XHRjb25zdCBmaWVsZElkID0gcGFyYW0uZmllbGRJZCxcblx0XHRcdFx0ZGlyZWN0aW9uID0gcGFyYW0uZGlyZWN0aW9uLFxuXHRcdFx0XHRzb3J0U3RhdHVzID0gZGlyZWN0aW9uID8gU29ydE9yZGVyLkFTQyA6IFNvcnRPcmRlci5ERVNDO1xuXG5cdFx0XHRjb25zdCBjb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpID0+IHtcblx0XHRcdFx0cmV0dXJuIGNvbHVtbi5nZXRGaWVsZCgpLmdldElkKCkuZ2V0SWQoKSA9PT0gZmllbGRJZC5nZXRJZCgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChjb2x1bW5zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSkgPT4ge1xuXG5cdFx0XHRcdFx0Y29sdW1uLnNldFNvcnRTdGF0dXMoc29ydFN0YXR1cyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQWdncmVnYXRlRXZlbnQodGhpcy5nZXRDb21wb3NpdGlvbklkKCksIHRoaXMuY29sdW1ucyk7XG5cdH1cblxuXHRtb3ZlTGVmdChjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoY29sdW1uSWQpO1xuXG5cdFx0dGhpcy5tb3ZlKGluZGV4LCBpbmRleCAtIDEpO1xuXHR9XG5cblx0bW92ZVJpZ2h0KGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChjb2x1bW5JZCk7XG5cblx0XHR0aGlzLm1vdmUoaW5kZXgsIGluZGV4ICsgMSk7XG5cdH1cblxuXHRnZXRNaW5Db2x1bW5XaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLk1JTl9DT0xVTU5fV0lEVEg7XG5cdH1cblxuXHRwcml2YXRlIG1vdmUoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnZhbGlkYXRlTW92ZUluZGV4KGZyb21JbmRleCkgfHwgIXRoaXMudmFsaWRhdGVNb3ZlSW5kZXgodG9JbmRleCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjb2x1bW4gPSB0aGlzLmNvbHVtbnNbZnJvbUluZGV4XTtcblxuXHRcdHRoaXMuY29sdW1uc1tmcm9tSW5kZXhdID0gdGhpcy5jb2x1bW5zW3RvSW5kZXhdO1xuXHRcdHRoaXMuY29sdW1uc1t0b0luZGV4XSA9IGNvbHVtbjtcblx0fVxuXG5cdHByaXZhdGUgdmFsaWRhdGVNb3ZlSW5kZXgoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBpbmRleCA+PSAwO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDb21wb3NpdGlvbklkKCk6IENvbXBvc2l0aW9uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uSWQ7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRDb2x1bW5JbmRleChjb2x1bW5JZDogQ29sdW1uSWQpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnMuZmluZEluZGV4KGMgPT4gYy5nZXRJZCgpLmVxdWFscyhjb2x1bW5JZCkpO1xuXHR9XG5cbn1cbiJdfQ==