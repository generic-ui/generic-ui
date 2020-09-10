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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBSW5IO0lBWUMsK0JBQW9CLGFBQTRCLEVBQzdDLE9BQXVDLEVBQ3ZDLFNBQWtCLEVBQ2xCLGFBQW1DO1FBRm5DLHdCQUFBLEVBQUEsWUFBdUM7UUFEdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFWL0IscUJBQWdCLEdBQUcsRUFBRSxDQUFDOzs7OztRQVEvQiwwQkFBcUIsR0FBMEIsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQU12RyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLFNBQVMsSUFBSSxhQUFhLEVBQUU7WUFDL0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN4RztJQUNGLENBQUM7Ozs7SUFFRCwrQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsU0FBUzs7Ozs7SUFDVCwwQ0FBVTs7Ozs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELHdDQUFROzs7O0lBQVIsVUFBUyxLQUFhO1FBQ3JCLElB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SUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7SUFFTyxvQ0FBSTs7Ozs7O0lBQVosVUFBYSxTQUFpQixFQUFFLE9BQWU7UUFFOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzRSxPQUFPO1NBQ1A7O1lBRUssTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBRXRDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFTyxpREFBaUI7Ozs7O0lBQXpCLFVBQTBCLEtBQWE7UUFDdEMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU8sZ0RBQWdCOzs7O0lBQXhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVPLCtDQUFlOzs7OztJQUF2QixVQUF3QixRQUFrQjtRQUN6QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRiw0QkFBQztBQUFELENBQUMsQUFqSUQsSUFpSUM7Ozs7Ozs7SUEvSEEsaURBQXVDOzs7OztJQUV2Qyx3Q0FBMkM7Ozs7Ozs7SUFNM0Msc0RBQXdHOzs7OztJQUU1Riw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4vYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uV2lkdGhDb2xsZWN0aW9uIH0gZnJvbSAnLi4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aC1jb2xsZWN0aW9uJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ2hhbmdlU29ydFBhcmFtcyB9IGZyb20gJy4uL3NvcnQvY2hhbmdlLXNvcnQucGFyYW1zJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uV2lkdGggfSBmcm9tICcuLi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoJztcblxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNvbHVtbkNvbnRhaW5lciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBNSU5fQ09MVU1OX1dJRFRIID0gNTA7XG5cblx0cHJpdmF0ZSBjb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+O1xuXG5cdC8qKlxuXHQgKiBDb2x1bW5zIHRha2VuIGZyb20gdXNlciBjb25maWcuXG5cdCAqIFRoaXMgc2hvdWxkIG5vdCBiZSBtb2RpZmllZCBhbmQgaXQgc2hvdWxkIGJlIHVzZWQgYXMgYSByZWZlcmVuY2UgcG9pbnQuXG5cdCAqL1xuXHRwcml2YXRlIGNvbHVtbldpZHRoQ29sbGVjdGlvbjogQ29sdW1uV2lkdGhDb2xsZWN0aW9uID0gbmV3IENvbHVtbldpZHRoQ29sbGVjdGlvbih0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiA9IFtdLFxuXHRcdFx0XHRncmlkV2lkdGg/OiBudW1iZXIsXG5cdFx0XHRcdGNvbHVtbkNvbmZpZ3M/OiBBcnJheTxDb2x1bW5Db25maWc+KSB7XG5cdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblxuXHRcdGlmIChncmlkV2lkdGggJiYgY29sdW1uQ29uZmlncykge1xuXHRcdFx0dGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24gPSBuZXcgQ29sdW1uV2lkdGhDb2xsZWN0aW9uKHRoaXMuTUlOX0NPTFVNTl9XSURUSCwgY29sdW1uQ29uZmlncywgZ3JpZFdpZHRoKTtcblx0XHR9XG5cdH1cblxuXHRnZXRDb2x1bW5XaWR0aHMoKTogQXJyYXk8Q29sdW1uV2lkdGg+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uZ2V0Q29sdW1uV2lkdGhzKCk7XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0Z2V0Q29sdW1ucygpOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLnNldFdpZHRoKHdpZHRoKTtcblx0fVxuXG5cdGFkZENvbHVtbihjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1ucy5zcGxpY2UoaW5kZXgsIDAsIGNvbHVtbik7XG5cdH1cblxuXHRyZW1vdmVDb2x1bW4oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1ucy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+LCBjb2x1bW5Db25maWdzOiBBcnJheTxDb2x1bW5Db25maWc+KSB7XG5cblx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXG5cdFx0dGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uc2V0Q29sdW1ucyhjb2x1bW5Db25maWdzKTtcblxuXHRcdGNvbnN0IHVwZGF0ZWRXaWR0aHMgPSB0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5nZXRXaWR0aHMoKTtcblxuXHRcdHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0Y29sdW1uLnNldFdpZHRoKHVwZGF0ZWRXaWR0aHNbaW5kZXhdKTtcblx0XHR9KTtcblxuXHRcdC8vIFRPRE9cblx0XHQvL3RoaXMuYWRkRXZlbnQobmV3IENvbHVtbnNTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIGNvbHVtbnMpKTtcblx0fVxuXG5cdGNoYW5nZVNvcnQoc29ydFBhcmFtczogQXJyYXk8Q2hhbmdlU29ydFBhcmFtcz4pOiBBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPiB7XG5cblx0XHR0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpID0+IHtcblx0XHRcdGNvbHVtbi5zZXRTb3J0U3RhdHVzKFNvcnRPcmRlci5OT05FKTtcblx0XHR9KTtcblxuXHRcdGZvciAobGV0IHBhcmFtIG9mIHNvcnRQYXJhbXMpIHtcblxuXHRcdFx0Y29uc3QgZmllbGRJZCA9IHBhcmFtLmZpZWxkSWQsXG5cdFx0XHRcdGRpcmVjdGlvbiA9IHBhcmFtLmRpcmVjdGlvbixcblx0XHRcdFx0c29ydFN0YXR1cyA9IGRpcmVjdGlvbiA/IFNvcnRPcmRlci5BU0MgOiBTb3J0T3JkZXIuREVTQztcblxuXHRcdFx0Y29uc3QgY29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KSA9PiB7XG5cdFx0XHRcdHJldHVybiBjb2x1bW4uZ2V0RmllbGQoKS5nZXRJZCgpLmdldElkKCkgPT09IGZpZWxkSWQuZ2V0SWQoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoY29sdW1ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpID0+IHtcblxuXHRcdFx0XHRcdGNvbHVtbi5zZXRTb3J0U3RhdHVzKHNvcnRTdGF0dXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0FnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0Q29tcG9zaXRpb25JZCgpLCB0aGlzLmNvbHVtbnMpO1xuXHR9XG5cblx0bW92ZUxlZnQoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGNvbHVtbklkKTtcblxuXHRcdHRoaXMubW92ZShpbmRleCwgaW5kZXggLSAxKTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoY29sdW1uSWQpO1xuXG5cdFx0dGhpcy5tb3ZlKGluZGV4LCBpbmRleCArIDEpO1xuXHR9XG5cblx0Z2V0TWluQ29sdW1uV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5NSU5fQ09MVU1OX1dJRFRIO1xuXHR9XG5cblx0cHJpdmF0ZSBtb3ZlKGZyb21JbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy52YWxpZGF0ZU1vdmVJbmRleChmcm9tSW5kZXgpIHx8ICF0aGlzLnZhbGlkYXRlTW92ZUluZGV4KHRvSW5kZXgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29sdW1uID0gdGhpcy5jb2x1bW5zW2Zyb21JbmRleF07XG5cblx0XHR0aGlzLmNvbHVtbnNbZnJvbUluZGV4XSA9IHRoaXMuY29sdW1uc1t0b0luZGV4XTtcblx0XHR0aGlzLmNvbHVtbnNbdG9JbmRleF0gPSBjb2x1bW47XG5cdH1cblxuXHRwcml2YXRlIHZhbGlkYXRlTW92ZUluZGV4KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gaW5kZXggPj0gMDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q29tcG9zaXRpb25JZCgpOiBDb21wb3NpdGlvbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbklkO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kQ29sdW1uSW5kZXgoY29sdW1uSWQ6IENvbHVtbklkKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zLmZpbmRJbmRleChjID0+IGMuZ2V0SWQoKS5lcXVhbHMoY29sdW1uSWQpKTtcblx0fVxuXG59XG4iXX0=