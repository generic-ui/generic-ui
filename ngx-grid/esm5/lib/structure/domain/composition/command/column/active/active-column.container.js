/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ColumnWidthCollection } from '../column-width/column-width-collection';
import { SortStatus } from '../sort/sort-status';
import { CompositionChangeSortStatusAggregateEvent } from '../sort/composition-change-sort-status.aggregate-event';
var ActiveColumnContainer = /** @class */ (function () {
    function ActiveColumnContainer(compositionId, columns, gridWidth, columnConfigs) {
        if (columns === void 0) { columns = []; }
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
    // REMOVE
    /**
     * @return {?}
     */
    ActiveColumnContainer.prototype.getColumns = 
    // REMOVE
    /**
     * @return {?}
     */
    function () {
        return this.columns;
    };
    /**
     * @param {?} width
     * @return {?}
     */
    ActiveColumnContainer.prototype.setWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.columnWidthCollection.setWidth(width);
    };
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    ActiveColumnContainer.prototype.addColumn = /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    function (column, index) {
        this.columns.splice(index, 0, column);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ActiveColumnContainer.prototype.removeColumn = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.columns.splice(index, 1);
    };
    /**
     * @param {?} columns
     * @param {?} columnConfigs
     * @return {?}
     */
    ActiveColumnContainer.prototype.setColumns = /**
     * @param {?} columns
     * @param {?} columnConfigs
     * @return {?}
     */
    function (columns, columnConfigs) {
        this.columns = columns;
        this.columnWidthCollection.setColumns(columnConfigs);
        /** @type {?} */
        var updatedWidths = this.columnWidthCollection.getWidths();
        this.columns.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) {
            column.setWidth(updatedWidths[index]);
        }));
        // TODO
        //this.addEvent(new ColumnsSetAggregateEvent(this.getId(), columns));
    };
    /**
     * @param {?} sortParams
     * @return {?}
     */
    ActiveColumnContainer.prototype.changeSort = /**
     * @param {?} sortParams
     * @return {?}
     */
    function (sortParams) {
        var e_1, _a;
        this.columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            column.setSortStatus(SortStatus.NONE);
        }));
        var _loop_1 = function (param) {
            /** @type {?} */
            var fieldId = param.fieldId;
            /** @type {?} */
            var direction = param.direction;
            /** @type {?} */
            var sortStatus = direction ? SortStatus.ASC : SortStatus.DESC;
            /** @type {?} */
            var columns = this_1.columns.filter((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                return column.getField().getId().getId() === fieldId.getId();
            }));
            if (columns.length > 0) {
                columns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    column.setSortStatus(sortStatus);
                }));
            }
        };
        var this_1 = this;
        try {
            for (var sortParams_1 = tslib_1.__values(sortParams), sortParams_1_1 = sortParams_1.next(); !sortParams_1_1.done; sortParams_1_1 = sortParams_1.next()) {
                var param = sortParams_1_1.value;
                _loop_1(param);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sortParams_1_1 && !sortParams_1_1.done && (_a = sortParams_1.return)) _a.call(sortParams_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return new CompositionChangeSortStatusAggregateEvent(this.getCompositionId());
    };
    /**
     * @private
     * @return {?}
     */
    ActiveColumnContainer.prototype.getCompositionId = /**
     * @private
     * @return {?}
     */
    function () {
        return this.compositionId;
    };
    return ActiveColumnContainer;
}());
export { ActiveColumnContainer };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBR2hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUVuSDtJQVlDLCtCQUFvQixhQUE0QixFQUM3QyxPQUF1QyxFQUN2QyxTQUFrQixFQUNsQixhQUFtQztRQUZuQyx3QkFBQSxFQUFBLFlBQXVDO1FBRHRCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBVi9CLHFCQUFnQixHQUFHLEVBQUUsQ0FBQzs7Ozs7UUFRL0IsMEJBQXFCLEdBQTBCLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFNdkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxTQUFTLElBQUksYUFBYSxFQUFFO1lBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDeEc7SUFDRixDQUFDO0lBRUQsU0FBUzs7Ozs7SUFDVCwwQ0FBVTs7Ozs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELHdDQUFROzs7O0lBQVIsVUFBUyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7O0lBRUQseUNBQVM7Ozs7O0lBQVQsVUFBVSxNQUEwQixFQUFFLEtBQWE7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELDRDQUFZOzs7O0lBQVosVUFBYSxLQUFhO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCwwQ0FBVTs7Ozs7SUFBVixVQUFXLE9BQWtDLEVBQUUsYUFBa0M7UUFFaEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7WUFFL0MsYUFBYSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUU7UUFFNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsTUFBMEIsRUFBRSxLQUFhO1lBQzlELE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPO1FBQ1AscUVBQXFFO0lBQ3RFLENBQUM7Ozs7O0lBRUQsMENBQVU7Ozs7SUFBVixVQUFXLFVBQW1DOztRQUU3QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE1BQTBCO1lBQy9DLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUFDO2dDQUVNLEtBQUs7O2dCQUVQLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTzs7Z0JBQzVCLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUzs7Z0JBQzNCLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJOztnQkFFcEQsT0FBTyxHQUFHLE9BQUssT0FBTyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFDLE1BQTBCO2dCQUM5RCxPQUFPLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUQsQ0FBQyxFQUFDO1lBRUYsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQyxNQUEwQjtvQkFFMUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxFQUFDLENBQUM7YUFDSDs7OztZQWZGLEtBQWtCLElBQUEsZUFBQSxpQkFBQSxVQUFVLENBQUEsc0NBQUE7Z0JBQXZCLElBQUksS0FBSyx1QkFBQTt3QkFBTCxLQUFLO2FBZ0JiOzs7Ozs7Ozs7UUFFRCxPQUFPLElBQUkseUNBQXlDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7OztJQUVPLGdEQUFnQjs7OztJQUF4QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRUYsNEJBQUM7QUFBRCxDQUFDLEFBdkZELElBdUZDOzs7Ozs7O0lBckZBLGlEQUF1Qzs7Ozs7SUFFdkMsd0NBQTJDOzs7Ozs7O0lBTTNDLHNEQUF3Rzs7Ozs7SUFFNUYsOENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbldpZHRoQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuLi9zb3J0L2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBTb3J0U3RhdHVzIH0gZnJvbSAnLi4vc29ydC9zb3J0LXN0YXR1cyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgQWN0aXZlQ29sdW1uQ29udGFpbmVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IE1JTl9DT0xVTU5fV0lEVEggPSA1MDtcblxuXHRwcml2YXRlIGNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT47XG5cblx0LyoqXG5cdCAqIENvbHVtbnMgdGFrZW4gZnJvbSB1c2VyIGNvbmZpZy5cblx0ICogVGhpcyBzaG91bGQgbm90IGJlIG1vZGlmaWVkIGFuZCBpdCBzaG91bGQgYmUgdXNlZCBhcyBhIHJlZmVyZW5jZSBwb2ludC5cblx0ICovXG5cdHByaXZhdGUgY29sdW1uV2lkdGhDb2xsZWN0aW9uOiBDb2x1bW5XaWR0aENvbGxlY3Rpb24gPSBuZXcgQ29sdW1uV2lkdGhDb2xsZWN0aW9uKHRoaXMuTUlOX0NPTFVNTl9XSURUSCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+ID0gW10sXG5cdFx0XHRcdGdyaWRXaWR0aD86IG51bWJlcixcblx0XHRcdFx0Y29sdW1uQ29uZmlncz86IEFycmF5PENvbHVtbkNvbmZpZz4pIHtcblx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXG5cdFx0aWYgKGdyaWRXaWR0aCAmJiBjb2x1bW5Db25maWdzKSB7XG5cdFx0XHR0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbiA9IG5ldyBDb2x1bW5XaWR0aENvbGxlY3Rpb24odGhpcy5NSU5fQ09MVU1OX1dJRFRILCBjb2x1bW5Db25maWdzLCBncmlkV2lkdGgpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRnZXRDb2x1bW5zKCk6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uc2V0V2lkdGgod2lkdGgpO1xuXHR9XG5cblx0YWRkQ29sdW1uKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5zLnNwbGljZShpbmRleCwgMCwgY29sdW1uKTtcblx0fVxuXG5cdHJlbW92ZUNvbHVtbihpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5zLnNwbGljZShpbmRleCwgMSk7XG5cdH1cblxuXHRzZXRDb2x1bW5zKGNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4sIGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4pIHtcblxuXHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cblx0XHR0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5zZXRDb2x1bW5zKGNvbHVtbkNvbmZpZ3MpO1xuXG5cdFx0Y29uc3QgdXBkYXRlZFdpZHRocyA9IHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLmdldFdpZHRocygpO1xuXG5cdFx0dGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRjb2x1bW4uc2V0V2lkdGgodXBkYXRlZFdpZHRoc1tpbmRleF0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gVE9ET1xuXHRcdC8vdGhpcy5hZGRFdmVudChuZXcgQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgY29sdW1ucykpO1xuXHR9XG5cblx0Y2hhbmdlU29ydChzb3J0UGFyYW1zOiBBcnJheTxDaGFuZ2VTb3J0UGFyYW1zPik6IEFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRcdHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSkgPT4ge1xuXHRcdFx0Y29sdW1uLnNldFNvcnRTdGF0dXMoU29ydFN0YXR1cy5OT05FKTtcblx0XHR9KTtcblxuXHRcdGZvciAobGV0IHBhcmFtIG9mIHNvcnRQYXJhbXMpIHtcblxuXHRcdFx0Y29uc3QgZmllbGRJZCA9IHBhcmFtLmZpZWxkSWQsXG5cdFx0XHRcdGRpcmVjdGlvbiA9IHBhcmFtLmRpcmVjdGlvbixcblx0XHRcdFx0c29ydFN0YXR1cyA9IGRpcmVjdGlvbiA/IFNvcnRTdGF0dXMuQVNDIDogU29ydFN0YXR1cy5ERVNDO1xuXG5cdFx0XHRjb25zdCBjb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpID0+IHtcblx0XHRcdFx0cmV0dXJuIGNvbHVtbi5nZXRGaWVsZCgpLmdldElkKCkuZ2V0SWQoKSA9PT0gZmllbGRJZC5nZXRJZCgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChjb2x1bW5zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSkgPT4ge1xuXG5cdFx0XHRcdFx0Y29sdW1uLnNldFNvcnRTdGF0dXMoc29ydFN0YXR1cyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQWdncmVnYXRlRXZlbnQodGhpcy5nZXRDb21wb3NpdGlvbklkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDb21wb3NpdGlvbklkKCk6IENvbXBvc2l0aW9uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uSWQ7XG5cdH1cblxufVxuIl19