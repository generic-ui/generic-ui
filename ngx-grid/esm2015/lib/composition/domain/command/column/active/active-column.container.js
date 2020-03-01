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
        c => c.getColumnId().equals(columnId)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUdoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFJbkgsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7OztJQVlqQyxZQUFvQixhQUE0QixFQUM3QyxVQUFxQyxFQUFFLEVBQ3ZDLFNBQWtCLEVBQ2xCLGFBQW1DO1FBSGxCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBVi9CLHFCQUFnQixHQUFHLEVBQUUsQ0FBQzs7Ozs7UUFRL0IsMEJBQXFCLEdBQTBCLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFNdkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxTQUFTLElBQUksYUFBYSxFQUFFO1lBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDeEc7SUFDRixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBR0QsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxR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QUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzRSxPQUFPO1NBQ1A7O2NBRUssTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBRXRDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFTyxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3RDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLGdCQUFnQjtRQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLFFBQWtCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUM7SUFDdEUsQ0FBQztDQUVEOzs7Ozs7SUEvSEEsaURBQXVDOzs7OztJQUV2Qyx3Q0FBMkM7Ozs7Ozs7SUFNM0Msc0RBQXdHOzs7OztJQUU1Riw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4vYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uV2lkdGhDb2xsZWN0aW9uIH0gZnJvbSAnLi4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aC1jb2xsZWN0aW9uJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ2hhbmdlU29ydFBhcmFtcyB9IGZyb20gJy4uL3NvcnQvY2hhbmdlLXNvcnQucGFyYW1zJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uV2lkdGggfSBmcm9tICcuLi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoJztcblxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNvbHVtbkNvbnRhaW5lciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBNSU5fQ09MVU1OX1dJRFRIID0gNTA7XG5cblx0cHJpdmF0ZSBjb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+O1xuXG5cdC8qKlxuXHQgKiBDb2x1bW5zIHRha2VuIGZyb20gdXNlciBjb25maWcuXG5cdCAqIFRoaXMgc2hvdWxkIG5vdCBiZSBtb2RpZmllZCBhbmQgaXQgc2hvdWxkIGJlIHVzZWQgYXMgYSByZWZlcmVuY2UgcG9pbnQuXG5cdCAqL1xuXHRwcml2YXRlIGNvbHVtbldpZHRoQ29sbGVjdGlvbjogQ29sdW1uV2lkdGhDb2xsZWN0aW9uID0gbmV3IENvbHVtbldpZHRoQ29sbGVjdGlvbih0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiA9IFtdLFxuXHRcdFx0XHRncmlkV2lkdGg/OiBudW1iZXIsXG5cdFx0XHRcdGNvbHVtbkNvbmZpZ3M/OiBBcnJheTxDb2x1bW5Db25maWc+KSB7XG5cdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblxuXHRcdGlmIChncmlkV2lkdGggJiYgY29sdW1uQ29uZmlncykge1xuXHRcdFx0dGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24gPSBuZXcgQ29sdW1uV2lkdGhDb2xsZWN0aW9uKHRoaXMuTUlOX0NPTFVNTl9XSURUSCwgY29sdW1uQ29uZmlncywgZ3JpZFdpZHRoKTtcblx0XHR9XG5cdH1cblxuXHRnZXRDb2x1bW5XaWR0aHMoKTogQXJyYXk8Q29sdW1uV2lkdGg+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uZ2V0Q29sdW1uV2lkdGhzKCk7XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0Z2V0Q29sdW1ucygpOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLnNldFdpZHRoKHdpZHRoKTtcblx0fVxuXG5cdGFkZENvbHVtbihjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1ucy5zcGxpY2UoaW5kZXgsIDAsIGNvbHVtbik7XG5cdH1cblxuXHRyZW1vdmVDb2x1bW4oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1ucy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+LCBjb2x1bW5Db25maWdzOiBBcnJheTxDb2x1bW5Db25maWc+KSB7XG5cblx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXG5cdFx0dGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uc2V0Q29sdW1ucyhjb2x1bW5Db25maWdzKTtcblxuXHRcdGNvbnN0IHVwZGF0ZWRXaWR0aHMgPSB0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5nZXRXaWR0aHMoKTtcblxuXHRcdHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0Y29sdW1uLnNldFdpZHRoKHVwZGF0ZWRXaWR0aHNbaW5kZXhdKTtcblx0XHR9KTtcblxuXHRcdC8vIFRPRE9cblx0XHQvL3RoaXMuYWRkRXZlbnQobmV3IENvbHVtbnNTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIGNvbHVtbnMpKTtcblx0fVxuXG5cdGNoYW5nZVNvcnQoc29ydFBhcmFtczogQXJyYXk8Q2hhbmdlU29ydFBhcmFtcz4pOiBBZ2dyZWdhdGVFdmVudCB7XG5cblx0XHR0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpID0+IHtcblx0XHRcdGNvbHVtbi5zZXRTb3J0U3RhdHVzKFNvcnRPcmRlci5OT05FKTtcblx0XHR9KTtcblxuXHRcdGZvciAobGV0IHBhcmFtIG9mIHNvcnRQYXJhbXMpIHtcblxuXHRcdFx0Y29uc3QgZmllbGRJZCA9IHBhcmFtLmZpZWxkSWQsXG5cdFx0XHRcdGRpcmVjdGlvbiA9IHBhcmFtLmRpcmVjdGlvbixcblx0XHRcdFx0c29ydFN0YXR1cyA9IGRpcmVjdGlvbiA/IFNvcnRPcmRlci5BU0MgOiBTb3J0T3JkZXIuREVTQztcblxuXHRcdFx0Y29uc3QgY29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KSA9PiB7XG5cdFx0XHRcdHJldHVybiBjb2x1bW4uZ2V0RmllbGQoKS5nZXRJZCgpLmdldElkKCkgPT09IGZpZWxkSWQuZ2V0SWQoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoY29sdW1ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpID0+IHtcblxuXHRcdFx0XHRcdGNvbHVtbi5zZXRTb3J0U3RhdHVzKHNvcnRTdGF0dXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0FnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0Q29tcG9zaXRpb25JZCgpKTtcblx0fVxuXG5cdG1vdmVMZWZ0KGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChjb2x1bW5JZCk7XG5cblx0XHR0aGlzLm1vdmUoaW5kZXgsIGluZGV4IC0gMSk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGNvbHVtbklkKTtcblxuXHRcdHRoaXMubW92ZShpbmRleCwgaW5kZXggKyAxKTtcblx0fVxuXG5cdGdldE1pbkNvbHVtbldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuTUlOX0NPTFVNTl9XSURUSDtcblx0fVxuXG5cdHByaXZhdGUgbW92ZShmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMudmFsaWRhdGVNb3ZlSW5kZXgoZnJvbUluZGV4KSB8fCAhdGhpcy52YWxpZGF0ZU1vdmVJbmRleCh0b0luZGV4KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbHVtbiA9IHRoaXMuY29sdW1uc1tmcm9tSW5kZXhdO1xuXG5cdFx0dGhpcy5jb2x1bW5zW2Zyb21JbmRleF0gPSB0aGlzLmNvbHVtbnNbdG9JbmRleF07XG5cdFx0dGhpcy5jb2x1bW5zW3RvSW5kZXhdID0gY29sdW1uO1xuXHR9XG5cblx0cHJpdmF0ZSB2YWxpZGF0ZU1vdmVJbmRleChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGluZGV4ID49IDA7XG5cdH1cblxuXHRwcml2YXRlIGdldENvbXBvc2l0aW9uSWQoKTogQ29tcG9zaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25JZDtcblx0fVxuXG5cdHByaXZhdGUgZmluZENvbHVtbkluZGV4KGNvbHVtbklkOiBDb2x1bW5JZCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucy5maW5kSW5kZXgoYyA9PiBjLmdldENvbHVtbklkKCkuZXF1YWxzKGNvbHVtbklkKSk7XG5cdH1cblxufVxuIl19