/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ColumnWidthCollection } from '../column-width/column-width-collection';
import { SortOrder } from '../sort/sort-order';
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
    /**
     * @return {?}
     */
    ActiveColumnContainer.prototype.getColumnWidths = /**
     * @return {?}
     */
    function () {
        return this.columnWidthCollection.getColumnWidths();
    };
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
        // this.addEvent(new ColumnsSetAggregateEvent(this.getId(), columns));
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
            column.setSortStatus(SortOrder.NONE);
        }));
        var _loop_1 = function (param) {
            /** @type {?} */
            var fieldId = param.fieldId;
            /** @type {?} */
            var direction = param.direction;
            /** @type {?} */
            var sortStatus = direction ? SortOrder.ASC : SortOrder.DESC;
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
        return new CompositionChangeSortStatusAggregateEvent(this.getCompositionId(), this.columns);
    };
    /**
     * @param {?} columnId
     * @return {?}
     */
    ActiveColumnContainer.prototype.moveLeft = /**
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        /** @type {?} */
        var index = this.findColumnIndex(columnId);
        this.move(index, index - 1);
    };
    /**
     * @param {?} columnId
     * @return {?}
     */
    ActiveColumnContainer.prototype.moveRight = /**
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        /** @type {?} */
        var index = this.findColumnIndex(columnId);
        this.move(index, index + 1);
    };
    /**
     * @return {?}
     */
    ActiveColumnContainer.prototype.getMinColumnWidth = /**
     * @return {?}
     */
    function () {
        return this.MIN_COLUMN_WIDTH;
    };
    /**
     * @private
     * @param {?} fromIndex
     * @param {?} toIndex
     * @return {?}
     */
    ActiveColumnContainer.prototype.move = /**
     * @private
     * @param {?} fromIndex
     * @param {?} toIndex
     * @return {?}
     */
    function (fromIndex, toIndex) {
        if (!this.validateMoveIndex(fromIndex) || !this.validateMoveIndex(toIndex)) {
            return;
        }
        /** @type {?} */
        var column = this.columns[fromIndex];
        this.columns[fromIndex] = this.columns[toIndex];
        this.columns[toIndex] = column;
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    ActiveColumnContainer.prototype.validateMoveIndex = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index >= 0;
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
    /**
     * @private
     * @param {?} columnId
     * @return {?}
     */
    ActiveColumnContainer.prototype.findColumnIndex = /**
     * @private
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        return this.columns.findIndex((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.getId().equals(columnId); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUdoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFJbkg7SUFZQywrQkFBb0IsYUFBNEIsRUFDN0MsT0FBdUMsRUFDdkMsU0FBa0IsRUFDbEIsYUFBbUM7UUFGbkMsd0JBQUEsRUFBQSxZQUF1QztRQUR0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVYvQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7Ozs7O1FBUS9CLDBCQUFxQixHQUEwQixJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBTXZHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksU0FBUyxJQUFJLGFBQWEsRUFBRTtZQUMvQixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3hHO0lBQ0YsQ0FBQzs7OztJQUVELCtDQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxTQUFTOzs7OztJQUNULDBDQUFVOzs7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFD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T0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7OztJQUVPLG9DQUFJOzs7Ozs7SUFBWixVQUFhLFNBQWlCLEVBQUUsT0FBZTtRQUU5QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNFLE9BQU87U0FDUDs7WUFFSyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFFdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVPLGlEQUFpQjs7Ozs7SUFBekIsVUFBMEIsS0FBYTtRQUN0QyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTyxnREFBZ0I7Ozs7SUFBeEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRU8sK0NBQWU7Ozs7O0lBQXZCLFVBQXdCLFFBQWtCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUExQixDQUEwQixFQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVGLDRCQUFDO0FBQUQsQ0FBQyxBQWpJRCxJQWlJQzs7Ozs7OztJQS9IQSxpREFBdUM7Ozs7O0lBRXZDLHdDQUEyQzs7Ozs7OztJQU0zQyxzREFBd0c7Ozs7O0lBRTVGLDhDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5XaWR0aENvbGxlY3Rpb24gfSBmcm9tICcuLi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoLWNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuLi9zb3J0L2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0FnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uV2lkdGggfSBmcm9tICcuLi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoJztcblxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNvbHVtbkNvbnRhaW5lciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBNSU5fQ09MVU1OX1dJRFRIID0gNTA7XG5cblx0cHJpdmF0ZSBjb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+O1xuXG5cdC8qKlxuXHQgKiBDb2x1bW5zIHRha2VuIGZyb20gdXNlciBjb25maWcuXG5cdCAqIFRoaXMgc2hvdWxkIG5vdCBiZSBtb2RpZmllZCBhbmQgaXQgc2hvdWxkIGJlIHVzZWQgYXMgYSByZWZlcmVuY2UgcG9pbnQuXG5cdCAqL1xuXHRwcml2YXRlIGNvbHVtbldpZHRoQ29sbGVjdGlvbjogQ29sdW1uV2lkdGhDb2xsZWN0aW9uID0gbmV3IENvbHVtbldpZHRoQ29sbGVjdGlvbih0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiA9IFtdLFxuXHRcdFx0XHRncmlkV2lkdGg/OiBudW1iZXIsXG5cdFx0XHRcdGNvbHVtbkNvbmZpZ3M/OiBBcnJheTxDb2x1bW5Db25maWc+KSB7XG5cdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblxuXHRcdGlmIChncmlkV2lkdGggJiYgY29sdW1uQ29uZmlncykge1xuXHRcdFx0dGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24gPSBuZXcgQ29sdW1uV2lkdGhDb2xsZWN0aW9uKHRoaXMuTUlOX0NPTFVNTl9XSURUSCwgY29sdW1uQ29uZmlncywgZ3JpZFdpZHRoKTtcblx0XHR9XG5cdH1cblxuXHRnZXRDb2x1bW5XaWR0aHMoKTogQXJyYXk8Q29sdW1uV2lkdGg+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uZ2V0Q29sdW1uV2lkdGhzKCk7XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0Z2V0Q29sdW1ucygpOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLnNldFdpZHRoKHdpZHRoKTtcblx0fVxuXG5cdGFkZENvbHVtbihjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1ucy5zcGxpY2UoaW5kZXgsIDAsIGNvbHVtbik7XG5cdH1cblxuXHRyZW1vdmVDb2x1bW4oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1ucy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+LCBjb2x1bW5Db25maWdzOiBBcnJheTxDb2x1bW5Db25maWc+KSB7XG5cblx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXG5cdFx0dGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uc2V0Q29sdW1ucyhjb2x1bW5Db25maWdzKTtcblxuXHRcdGNvbnN0IHVwZGF0ZWRXaWR0aHMgPSB0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5nZXRXaWR0aHMoKTtcblxuXHRcdHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0Y29sdW1uLnNldFdpZHRoKHVwZGF0ZWRXaWR0aHNbaW5kZXhdKTtcblx0XHR9KTtcblxuXHRcdC8vIFRPRE9cblx0XHQvLyB0aGlzLmFkZEV2ZW50KG5ldyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBjb2x1bW5zKSk7XG5cdH1cblxuXHRjaGFuZ2VTb3J0KHNvcnRQYXJhbXM6IEFycmF5PENoYW5nZVNvcnRQYXJhbXM+KTogQWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXG5cdFx0dGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KSA9PiB7XG5cdFx0XHRjb2x1bW4uc2V0U29ydFN0YXR1cyhTb3J0T3JkZXIuTk9ORSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IHBhcmFtIG9mIHNvcnRQYXJhbXMpIHtcblxuXHRcdFx0Y29uc3QgZmllbGRJZCA9IHBhcmFtLmZpZWxkSWQsXG5cdFx0XHRcdGRpcmVjdGlvbiA9IHBhcmFtLmRpcmVjdGlvbixcblx0XHRcdFx0c29ydFN0YXR1cyA9IGRpcmVjdGlvbiA/IFNvcnRPcmRlci5BU0MgOiBTb3J0T3JkZXIuREVTQztcblxuXHRcdFx0Y29uc3QgY29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KSA9PiB7XG5cdFx0XHRcdHJldHVybiBjb2x1bW4uZ2V0RmllbGQoKS5nZXRJZCgpLmdldElkKCkgPT09IGZpZWxkSWQuZ2V0SWQoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoY29sdW1ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpID0+IHtcblxuXHRcdFx0XHRcdGNvbHVtbi5zZXRTb3J0U3RhdHVzKHNvcnRTdGF0dXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0FnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0Q29tcG9zaXRpb25JZCgpLCB0aGlzLmNvbHVtbnMpO1xuXHR9XG5cblx0bW92ZUxlZnQoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGNvbHVtbklkKTtcblxuXHRcdHRoaXMubW92ZShpbmRleCwgaW5kZXggLSAxKTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoY29sdW1uSWQpO1xuXG5cdFx0dGhpcy5tb3ZlKGluZGV4LCBpbmRleCArIDEpO1xuXHR9XG5cblx0Z2V0TWluQ29sdW1uV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5NSU5fQ09MVU1OX1dJRFRIO1xuXHR9XG5cblx0cHJpdmF0ZSBtb3ZlKGZyb21JbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy52YWxpZGF0ZU1vdmVJbmRleChmcm9tSW5kZXgpIHx8ICF0aGlzLnZhbGlkYXRlTW92ZUluZGV4KHRvSW5kZXgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29sdW1uID0gdGhpcy5jb2x1bW5zW2Zyb21JbmRleF07XG5cblx0XHR0aGlzLmNvbHVtbnNbZnJvbUluZGV4XSA9IHRoaXMuY29sdW1uc1t0b0luZGV4XTtcblx0XHR0aGlzLmNvbHVtbnNbdG9JbmRleF0gPSBjb2x1bW47XG5cdH1cblxuXHRwcml2YXRlIHZhbGlkYXRlTW92ZUluZGV4KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gaW5kZXggPj0gMDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q29tcG9zaXRpb25JZCgpOiBDb21wb3NpdGlvbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbklkO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kQ29sdW1uSW5kZXgoY29sdW1uSWQ6IENvbHVtbklkKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zLmZpbmRJbmRleChjID0+IGMuZ2V0SWQoKS5lcXVhbHMoY29sdW1uSWQpKTtcblx0fVxuXG59XG4iXX0=