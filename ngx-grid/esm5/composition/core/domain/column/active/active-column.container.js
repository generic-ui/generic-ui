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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUdoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFJbkg7SUFZQywrQkFBb0IsYUFBNEIsRUFDN0MsT0FBdUMsRUFDdkMsU0FBa0IsRUFDbEIsYUFBbUM7UUFGbkMsd0JBQUEsRUFBQSxZQUF1QztRQUR0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVYvQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7Ozs7O1FBUS9CLDBCQUFxQixHQUEwQixJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBTXZHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksU0FBUyxJQUFJLGFBQWEsRUFBRTtZQUMvQixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3hHO0lBQ0YsQ0FBQzs7OztJQUVELCtDQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxTQUFTOzs7OztJQUNULDBDQUFVOzs7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDckIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCx5Q0FBUzs7Ozs7SUFBVCxVQUFVLE1BQTBCLEVBQUUsS0FBYTtRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsNENBQVk7Ozs7SUFBWixVQUFhLEtBQWE7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVELDBDQUFVOzs7OztJQUFWLFVBQVcsT0FBa0MsRUFBRSxhQUFrQztRQUVoRixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztZQUUvQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRTtRQUU1RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxNQUEwQixFQUFFLEtBQWE7WUFDOUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU87UUFDUCxzRUFBc0U7SUFDdkUsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsVUFBbUM7O1FBRTdDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBMEI7WUFDL0MsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7Z0NBRVEsS0FBSzs7Z0JBRVQsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPOztnQkFDNUIsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTOztnQkFDM0IsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUk7O2dCQUVsRCxPQUFPLEdBQUcsT0FBSyxPQUFPLENBQUMsTUFBTTs7OztZQUFDLFVBQUMsTUFBMEI7Z0JBQzlELE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5RCxDQUFDLEVBQUM7WUFFRixJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixPQUFPLENBQUMsT0FBTzs7OztnQkFBQyxVQUFDLE1BQTBCO29CQUUxQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLEVBQUMsQ0FBQzthQUNIOzs7O1lBZkYsS0FBb0IsSUFBQSxlQUFBLGlCQUFBLFVBQVUsQ0FBQSxzQ0FBQTtnQkFBekIsSUFBTSxLQUFLLHVCQUFBO3dCQUFMLEtBQUs7YUFnQmY7Ozs7Ozs7OztRQUVELE9BQU8sSUFBSSx5Q0FBeUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7Ozs7SUFFRCx3Q0FBUTs7OztJQUFSLFVBQVMsUUFBa0I7O1lBRXBCLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUU1QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCx5Q0FBUzs7OztJQUFULFVBQVUsUUFBa0I7O1lBRXJCLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUU1QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELGlEQUFpQjs7O0lBQWpCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7OztJQUVPLG9DQUFJOzs7Ozs7SUFBWixVQUFhLFNBQWlCLEVBQUUsT0FBZTtRQUU5QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNFLE9BQU87U0FDUDs7WUFFSyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFFdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVPLGlEQUFpQjs7Ozs7SUFBekIsVUFBMEIsS0FBYTtRQUN0QyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTyxnREFBZ0I7Ozs7SUFBeEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRU8sK0NBQWU7Ozs7O0lBQXZCLFVBQXdCLFFBQWtCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUExQixDQUEwQixFQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVGLDRCQUFDO0FBQUQsQ0FBQyxBQWpJRCxJQWlJQzs7Ozs7OztJQS9IQSxpREFBdUM7Ozs7O0lBRXZDLHdDQUEyQzs7Ozs7OztJQU0zQyxzREFBd0c7Ozs7O0lBRTVGLDhDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5XaWR0aENvbGxlY3Rpb24gfSBmcm9tICcuLi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoLWNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuLi9zb3J0L2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbldpZHRoIH0gZnJvbSAnLi4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aCc7XG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVDb2x1bW5Db250YWluZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgTUlOX0NPTFVNTl9XSURUSCA9IDUwO1xuXG5cdHByaXZhdGUgY29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PjtcblxuXHQvKipcblx0ICogQ29sdW1ucyB0YWtlbiBmcm9tIHVzZXIgY29uZmlnLlxuXHQgKiBUaGlzIHNob3VsZCBub3QgYmUgbW9kaWZpZWQgYW5kIGl0IHNob3VsZCBiZSB1c2VkIGFzIGEgcmVmZXJlbmNlIHBvaW50LlxuXHQgKi9cblx0cHJpdmF0ZSBjb2x1bW5XaWR0aENvbGxlY3Rpb246IENvbHVtbldpZHRoQ29sbGVjdGlvbiA9IG5ldyBDb2x1bW5XaWR0aENvbGxlY3Rpb24odGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdGNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4gPSBbXSxcblx0XHRcdFx0Z3JpZFdpZHRoPzogbnVtYmVyLFxuXHRcdFx0XHRjb2x1bW5Db25maWdzPzogQXJyYXk8Q29sdW1uQ29uZmlnPikge1xuXHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cblx0XHRpZiAoZ3JpZFdpZHRoICYmIGNvbHVtbkNvbmZpZ3MpIHtcblx0XHRcdHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uID0gbmV3IENvbHVtbldpZHRoQ29sbGVjdGlvbih0aGlzLk1JTl9DT0xVTU5fV0lEVEgsIGNvbHVtbkNvbmZpZ3MsIGdyaWRXaWR0aCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q29sdW1uV2lkdGhzKCk6IEFycmF5PENvbHVtbldpZHRoPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLmdldENvbHVtbldpZHRocygpO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGdldENvbHVtbnMoKTogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucztcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5zZXRXaWR0aCh3aWR0aCk7XG5cdH1cblxuXHRhZGRDb2x1bW4oY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHksIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnMuc3BsaWNlKGluZGV4LCAwLCBjb2x1bW4pO1xuXHR9XG5cblx0cmVtb3ZlQ29sdW1uKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdHNldENvbHVtbnMoY29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiwgY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPikge1xuXG5cdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblxuXHRcdHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLnNldENvbHVtbnMoY29sdW1uQ29uZmlncyk7XG5cblx0XHRjb25zdCB1cGRhdGVkV2lkdGhzID0gdGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uZ2V0V2lkdGhzKCk7XG5cblx0XHR0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGNvbHVtbi5zZXRXaWR0aCh1cGRhdGVkV2lkdGhzW2luZGV4XSk7XG5cdFx0fSk7XG5cblx0XHQvLyBUT0RPXG5cdFx0Ly8gdGhpcy5hZGRFdmVudChuZXcgQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgY29sdW1ucykpO1xuXHR9XG5cblx0Y2hhbmdlU29ydChzb3J0UGFyYW1zOiBBcnJheTxDaGFuZ2VTb3J0UGFyYW1zPik6IEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblxuXHRcdHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSkgPT4ge1xuXHRcdFx0Y29sdW1uLnNldFNvcnRTdGF0dXMoU29ydE9yZGVyLk5PTkUpO1xuXHRcdH0pO1xuXG5cdFx0Zm9yIChjb25zdCBwYXJhbSBvZiBzb3J0UGFyYW1zKSB7XG5cblx0XHRcdGNvbnN0IGZpZWxkSWQgPSBwYXJhbS5maWVsZElkLFxuXHRcdFx0XHRkaXJlY3Rpb24gPSBwYXJhbS5kaXJlY3Rpb24sXG5cdFx0XHRcdHNvcnRTdGF0dXMgPSBkaXJlY3Rpb24gPyBTb3J0T3JkZXIuQVNDIDogU29ydE9yZGVyLkRFU0M7XG5cblx0XHRcdGNvbnN0IGNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY29sdW1uLmdldEZpZWxkKCkuZ2V0SWQoKS5nZXRJZCgpID09PSBmaWVsZElkLmdldElkKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGNvbHVtbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KSA9PiB7XG5cblx0XHRcdFx0XHRjb2x1bW4uc2V0U29ydFN0YXR1cyhzb3J0U3RhdHVzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNBZ2dyZWdhdGVFdmVudCh0aGlzLmdldENvbXBvc2l0aW9uSWQoKSwgdGhpcy5jb2x1bW5zKTtcblx0fVxuXG5cdG1vdmVMZWZ0KGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChjb2x1bW5JZCk7XG5cblx0XHR0aGlzLm1vdmUoaW5kZXgsIGluZGV4IC0gMSk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGNvbHVtbklkKTtcblxuXHRcdHRoaXMubW92ZShpbmRleCwgaW5kZXggKyAxKTtcblx0fVxuXG5cdGdldE1pbkNvbHVtbldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuTUlOX0NPTFVNTl9XSURUSDtcblx0fVxuXG5cdHByaXZhdGUgbW92ZShmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMudmFsaWRhdGVNb3ZlSW5kZXgoZnJvbUluZGV4KSB8fCAhdGhpcy52YWxpZGF0ZU1vdmVJbmRleCh0b0luZGV4KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbHVtbiA9IHRoaXMuY29sdW1uc1tmcm9tSW5kZXhdO1xuXG5cdFx0dGhpcy5jb2x1bW5zW2Zyb21JbmRleF0gPSB0aGlzLmNvbHVtbnNbdG9JbmRleF07XG5cdFx0dGhpcy5jb2x1bW5zW3RvSW5kZXhdID0gY29sdW1uO1xuXHR9XG5cblx0cHJpdmF0ZSB2YWxpZGF0ZU1vdmVJbmRleChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGluZGV4ID49IDA7XG5cdH1cblxuXHRwcml2YXRlIGdldENvbXBvc2l0aW9uSWQoKTogQ29tcG9zaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25JZDtcblx0fVxuXG5cdHByaXZhdGUgZmluZENvbHVtbkluZGV4KGNvbHVtbklkOiBDb2x1bW5JZCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucy5maW5kSW5kZXgoYyA9PiBjLmdldElkKCkuZXF1YWxzKGNvbHVtbklkKSk7XG5cdH1cblxufVxuIl19