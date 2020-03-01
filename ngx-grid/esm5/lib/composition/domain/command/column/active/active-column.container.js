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
        return new CompositionChangeSortStatusAggregateEvent(this.getCompositionId());
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
        function (c) { return c.getColumnId().equals(columnId); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBSW5IO0lBWUMsK0JBQW9CLGFBQTRCLEVBQzdDLE9BQXVDLEVBQ3ZDLFNBQWtCLEVBQ2xCLGFBQW1DO1FBRm5DLHdCQUFBLEVBQUEsWUFBdUM7UUFEdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFWL0IscUJBQWdCLEdBQUcsRUFBRSxDQUFDOzs7OztRQVEvQiwwQkFBcUIsR0FBMEIsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQU12RyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLFNBQVMsSUFBSSxhQUFhLEVBQUU7WUFDL0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN4RztJQUNGLENBQUM7Ozs7SUFFRCwrQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsU0FBUzs7Ozs7SUFDVCwwQ0FBVTs7Ozs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELHdDQUFROzs7O0lBQVIsVUFBUyxL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QyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRU8sb0NBQUk7Ozs7OztJQUFaLFVBQWEsU0FBaUIsRUFBRSxPQUFlO1FBRTlDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0UsT0FBTztTQUNQOztZQUVLLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUV0QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRU8saURBQWlCOzs7OztJQUF6QixVQUEwQixLQUFhO1FBQ3RDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLGdEQUFnQjs7OztJQUF4QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFTywrQ0FBZTs7Ozs7SUFBdkIsVUFBd0IsUUFBa0I7UUFDekMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQWhDLENBQWdDLEVBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUYsNEJBQUM7QUFBRCxDQUFDLEFBaklELElBaUlDOzs7Ozs7O0lBL0hBLGlEQUF1Qzs7Ozs7SUFFdkMsd0NBQTJDOzs7Ozs7O0lBTTNDLHNEQUF3Rzs7Ozs7SUFFNUYsOENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbldpZHRoQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuLi9zb3J0L2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0FnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbldpZHRoIH0gZnJvbSAnLi4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aCc7XG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVDb2x1bW5Db250YWluZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgTUlOX0NPTFVNTl9XSURUSCA9IDUwO1xuXG5cdHByaXZhdGUgY29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PjtcblxuXHQvKipcblx0ICogQ29sdW1ucyB0YWtlbiBmcm9tIHVzZXIgY29uZmlnLlxuXHQgKiBUaGlzIHNob3VsZCBub3QgYmUgbW9kaWZpZWQgYW5kIGl0IHNob3VsZCBiZSB1c2VkIGFzIGEgcmVmZXJlbmNlIHBvaW50LlxuXHQgKi9cblx0cHJpdmF0ZSBjb2x1bW5XaWR0aENvbGxlY3Rpb246IENvbHVtbldpZHRoQ29sbGVjdGlvbiA9IG5ldyBDb2x1bW5XaWR0aENvbGxlY3Rpb24odGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdGNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4gPSBbXSxcblx0XHRcdFx0Z3JpZFdpZHRoPzogbnVtYmVyLFxuXHRcdFx0XHRjb2x1bW5Db25maWdzPzogQXJyYXk8Q29sdW1uQ29uZmlnPikge1xuXHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cblx0XHRpZiAoZ3JpZFdpZHRoICYmIGNvbHVtbkNvbmZpZ3MpIHtcblx0XHRcdHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uID0gbmV3IENvbHVtbldpZHRoQ29sbGVjdGlvbih0aGlzLk1JTl9DT0xVTU5fV0lEVEgsIGNvbHVtbkNvbmZpZ3MsIGdyaWRXaWR0aCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q29sdW1uV2lkdGhzKCk6IEFycmF5PENvbHVtbldpZHRoPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLmdldENvbHVtbldpZHRocygpO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGdldENvbHVtbnMoKTogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucztcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5zZXRXaWR0aCh3aWR0aCk7XG5cdH1cblxuXHRhZGRDb2x1bW4oY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHksIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnMuc3BsaWNlKGluZGV4LCAwLCBjb2x1bW4pO1xuXHR9XG5cblx0cmVtb3ZlQ29sdW1uKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdHNldENvbHVtbnMoY29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiwgY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPikge1xuXG5cdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblxuXHRcdHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLnNldENvbHVtbnMoY29sdW1uQ29uZmlncyk7XG5cblx0XHRjb25zdCB1cGRhdGVkV2lkdGhzID0gdGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uZ2V0V2lkdGhzKCk7XG5cblx0XHR0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGNvbHVtbi5zZXRXaWR0aCh1cGRhdGVkV2lkdGhzW2luZGV4XSk7XG5cdFx0fSk7XG5cblx0XHQvLyBUT0RPXG5cdFx0Ly90aGlzLmFkZEV2ZW50KG5ldyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBjb2x1bW5zKSk7XG5cdH1cblxuXHRjaGFuZ2VTb3J0KHNvcnRQYXJhbXM6IEFycmF5PENoYW5nZVNvcnRQYXJhbXM+KTogQWdncmVnYXRlRXZlbnQge1xuXG5cdFx0dGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KSA9PiB7XG5cdFx0XHRjb2x1bW4uc2V0U29ydFN0YXR1cyhTb3J0T3JkZXIuTk9ORSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGxldCBwYXJhbSBvZiBzb3J0UGFyYW1zKSB7XG5cblx0XHRcdGNvbnN0IGZpZWxkSWQgPSBwYXJhbS5maWVsZElkLFxuXHRcdFx0XHRkaXJlY3Rpb24gPSBwYXJhbS5kaXJlY3Rpb24sXG5cdFx0XHRcdHNvcnRTdGF0dXMgPSBkaXJlY3Rpb24gPyBTb3J0T3JkZXIuQVNDIDogU29ydE9yZGVyLkRFU0M7XG5cblx0XHRcdGNvbnN0IGNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY29sdW1uLmdldEZpZWxkKCkuZ2V0SWQoKS5nZXRJZCgpID09PSBmaWVsZElkLmdldElkKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGNvbHVtbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KSA9PiB7XG5cblx0XHRcdFx0XHRjb2x1bW4uc2V0U29ydFN0YXR1cyhzb3J0U3RhdHVzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNBZ2dyZWdhdGVFdmVudCh0aGlzLmdldENvbXBvc2l0aW9uSWQoKSk7XG5cdH1cblxuXHRtb3ZlTGVmdChjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoY29sdW1uSWQpO1xuXG5cdFx0dGhpcy5tb3ZlKGluZGV4LCBpbmRleCAtIDEpO1xuXHR9XG5cblx0bW92ZVJpZ2h0KGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChjb2x1bW5JZCk7XG5cblx0XHR0aGlzLm1vdmUoaW5kZXgsIGluZGV4ICsgMSk7XG5cdH1cblxuXHRnZXRNaW5Db2x1bW5XaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLk1JTl9DT0xVTU5fV0lEVEg7XG5cdH1cblxuXHRwcml2YXRlIG1vdmUoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnZhbGlkYXRlTW92ZUluZGV4KGZyb21JbmRleCkgfHwgIXRoaXMudmFsaWRhdGVNb3ZlSW5kZXgodG9JbmRleCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjb2x1bW4gPSB0aGlzLmNvbHVtbnNbZnJvbUluZGV4XTtcblxuXHRcdHRoaXMuY29sdW1uc1tmcm9tSW5kZXhdID0gdGhpcy5jb2x1bW5zW3RvSW5kZXhdO1xuXHRcdHRoaXMuY29sdW1uc1t0b0luZGV4XSA9IGNvbHVtbjtcblx0fVxuXG5cdHByaXZhdGUgdmFsaWRhdGVNb3ZlSW5kZXgoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBpbmRleCA+PSAwO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDb21wb3NpdGlvbklkKCk6IENvbXBvc2l0aW9uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uSWQ7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRDb2x1bW5JbmRleChjb2x1bW5JZDogQ29sdW1uSWQpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnMuZmluZEluZGV4KGMgPT4gYy5nZXRDb2x1bW5JZCgpLmVxdWFscyhjb2x1bW5JZCkpO1xuXHR9XG5cbn1cbiJdfQ==