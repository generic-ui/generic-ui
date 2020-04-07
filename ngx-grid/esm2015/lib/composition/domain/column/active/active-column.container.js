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
        return new CompositionChangeSortStatusAggregateEvent(this.getCompositionId());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBSW5ILE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7SUFZakMsWUFBb0IsYUFBNEIsRUFDN0MsVUFBcUMsRUFBRSxFQUN2QyxTQUFrQixFQUNsQixhQUFtQztRQUhsQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVYvQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7Ozs7O1FBUS9CLDBCQUFxQixHQUEwQixJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBTXZHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksU0FBUyxJQUFJLGFBQWEsRUFBRTtZQUMvQixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3hHO0lBQ0YsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUdELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFD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LENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0UsT0FBTztTQUNQOztjQUVLLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUV0QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRU8saUJBQWlCLENBQUMsS0FBYTtRQUN0QyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTyxnQkFBZ0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxRQUFrQjtRQUN6QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDO0lBQ2hFLENBQUM7Q0FFRDs7Ozs7O0lBL0hBLGlEQUF1Qzs7Ozs7SUFFdkMsd0NBQTJDOzs7Ozs7O0lBTTNDLHNEQUF3Rzs7Ozs7SUFFNUYsOENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbldpZHRoQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuLi9zb3J0L2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0FnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbldpZHRoIH0gZnJvbSAnLi4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aCc7XG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVDb2x1bW5Db250YWluZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgTUlOX0NPTFVNTl9XSURUSCA9IDUwO1xuXG5cdHByaXZhdGUgY29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PjtcblxuXHQvKipcblx0ICogQ29sdW1ucyB0YWtlbiBmcm9tIHVzZXIgY29uZmlnLlxuXHQgKiBUaGlzIHNob3VsZCBub3QgYmUgbW9kaWZpZWQgYW5kIGl0IHNob3VsZCBiZSB1c2VkIGFzIGEgcmVmZXJlbmNlIHBvaW50LlxuXHQgKi9cblx0cHJpdmF0ZSBjb2x1bW5XaWR0aENvbGxlY3Rpb246IENvbHVtbldpZHRoQ29sbGVjdGlvbiA9IG5ldyBDb2x1bW5XaWR0aENvbGxlY3Rpb24odGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdGNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4gPSBbXSxcblx0XHRcdFx0Z3JpZFdpZHRoPzogbnVtYmVyLFxuXHRcdFx0XHRjb2x1bW5Db25maWdzPzogQXJyYXk8Q29sdW1uQ29uZmlnPikge1xuXHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cblx0XHRpZiAoZ3JpZFdpZHRoICYmIGNvbHVtbkNvbmZpZ3MpIHtcblx0XHRcdHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uID0gbmV3IENvbHVtbldpZHRoQ29sbGVjdGlvbih0aGlzLk1JTl9DT0xVTU5fV0lEVEgsIGNvbHVtbkNvbmZpZ3MsIGdyaWRXaWR0aCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q29sdW1uV2lkdGhzKCk6IEFycmF5PENvbHVtbldpZHRoPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLmdldENvbHVtbldpZHRocygpO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGdldENvbHVtbnMoKTogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucztcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5zZXRXaWR0aCh3aWR0aCk7XG5cdH1cblxuXHRhZGRDb2x1bW4oY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHksIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnMuc3BsaWNlKGluZGV4LCAwLCBjb2x1bW4pO1xuXHR9XG5cblx0cmVtb3ZlQ29sdW1uKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdHNldENvbHVtbnMoY29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiwgY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPikge1xuXG5cdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblxuXHRcdHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLnNldENvbHVtbnMoY29sdW1uQ29uZmlncyk7XG5cblx0XHRjb25zdCB1cGRhdGVkV2lkdGhzID0gdGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uZ2V0V2lkdGhzKCk7XG5cblx0XHR0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGNvbHVtbi5zZXRXaWR0aCh1cGRhdGVkV2lkdGhzW2luZGV4XSk7XG5cdFx0fSk7XG5cblx0XHQvLyBUT0RPXG5cdFx0Ly90aGlzLmFkZEV2ZW50KG5ldyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBjb2x1bW5zKSk7XG5cdH1cblxuXHRjaGFuZ2VTb3J0KHNvcnRQYXJhbXM6IEFycmF5PENoYW5nZVNvcnRQYXJhbXM+KTogQWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXG5cdFx0dGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KSA9PiB7XG5cdFx0XHRjb2x1bW4uc2V0U29ydFN0YXR1cyhTb3J0T3JkZXIuTk9ORSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGxldCBwYXJhbSBvZiBzb3J0UGFyYW1zKSB7XG5cblx0XHRcdGNvbnN0IGZpZWxkSWQgPSBwYXJhbS5maWVsZElkLFxuXHRcdFx0XHRkaXJlY3Rpb24gPSBwYXJhbS5kaXJlY3Rpb24sXG5cdFx0XHRcdHNvcnRTdGF0dXMgPSBkaXJlY3Rpb24gPyBTb3J0T3JkZXIuQVNDIDogU29ydE9yZGVyLkRFU0M7XG5cblx0XHRcdGNvbnN0IGNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY29sdW1uLmdldEZpZWxkKCkuZ2V0SWQoKS5nZXRJZCgpID09PSBmaWVsZElkLmdldElkKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGNvbHVtbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KSA9PiB7XG5cblx0XHRcdFx0XHRjb2x1bW4uc2V0U29ydFN0YXR1cyhzb3J0U3RhdHVzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNBZ2dyZWdhdGVFdmVudCh0aGlzLmdldENvbXBvc2l0aW9uSWQoKSk7XG5cdH1cblxuXHRtb3ZlTGVmdChjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoY29sdW1uSWQpO1xuXG5cdFx0dGhpcy5tb3ZlKGluZGV4LCBpbmRleCAtIDEpO1xuXHR9XG5cblx0bW92ZVJpZ2h0KGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChjb2x1bW5JZCk7XG5cblx0XHR0aGlzLm1vdmUoaW5kZXgsIGluZGV4ICsgMSk7XG5cdH1cblxuXHRnZXRNaW5Db2x1bW5XaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLk1JTl9DT0xVTU5fV0lEVEg7XG5cdH1cblxuXHRwcml2YXRlIG1vdmUoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnZhbGlkYXRlTW92ZUluZGV4KGZyb21JbmRleCkgfHwgIXRoaXMudmFsaWRhdGVNb3ZlSW5kZXgodG9JbmRleCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjb2x1bW4gPSB0aGlzLmNvbHVtbnNbZnJvbUluZGV4XTtcblxuXHRcdHRoaXMuY29sdW1uc1tmcm9tSW5kZXhdID0gdGhpcy5jb2x1bW5zW3RvSW5kZXhdO1xuXHRcdHRoaXMuY29sdW1uc1t0b0luZGV4XSA9IGNvbHVtbjtcblx0fVxuXG5cdHByaXZhdGUgdmFsaWRhdGVNb3ZlSW5kZXgoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBpbmRleCA+PSAwO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDb21wb3NpdGlvbklkKCk6IENvbXBvc2l0aW9uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uSWQ7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRDb2x1bW5JbmRleChjb2x1bW5JZDogQ29sdW1uSWQpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnMuZmluZEluZGV4KGMgPT4gYy5nZXRJZCgpLmVxdWFscyhjb2x1bW5JZCkpO1xuXHR9XG5cbn1cbiJdfQ==