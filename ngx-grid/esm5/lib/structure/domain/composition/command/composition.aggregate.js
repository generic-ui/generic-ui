/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Aggregate, AggregateId, RootAggregate } from '@generic-ui/hermes';
import { ColumnWidthCollection } from './column/column-width/column-width-collection';
import { ColumnEntityFactory } from './column/column-entity.factory';
import { SortStatus } from './sort/sort-status';
import { ColumnsSetAggregateEvent } from './column/set-columns/columns-set.aggregate-event';
import { CompositionContainerWidthCalculator } from './width/composition-container-width.calculator';
import { CompositionWidthSetAggregateEvent } from './width/set-width/composition-width-set.aggregate-event';
import { CompositionContainerWidthSetAggregateEvent } from './width/set-container-width/composition-container-width-set.aggregate-event';
import { CompositionResizeWidthSetAggregateEvent } from './width/resize-width/composition-resize-width-set.aggregate-event';
var CompositionAggregate = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionAggregate, _super);
    function CompositionAggregate(id, columnsParams, width, resizeWidth) {
        if (columnsParams === void 0) { columnsParams = []; }
        var _this = _super.call(this, id) || this;
        _this.MIN_COLUMN_WIDTH = 50;
        /**
         * Columns taken from user config.
         * This should not be modified and it should be used as a reference point.
         */
        _this.columnWidthCollection = new ColumnWidthCollection(_this.MIN_COLUMN_WIDTH);
        /**
         * Collection of columns which are used in the composition.
         */
        _this.activeColumns = [];
        _this.resizeWidthEnabled = true;
        /**
         * Autowired
         */
        _this.columnFactory = new ColumnEntityFactory();
        /** @type {?} */
        var columns = columnsParams.map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) { return param.getColumn(); }));
        _this.baseParams = columnsParams;
        _this.baseColumns = columns;
        _this.width = width;
        _this.activeColumns = _this.columnFactory.create(columnsParams);
        _this.columnWidthCollection = new ColumnWidthCollection(_this.MIN_COLUMN_WIDTH, columns, width);
        if (resizeWidth !== undefined && resizeWidth !== null) {
            _this.resizeWidthEnabled = resizeWidth;
        }
        return _this;
    }
    CompositionAggregate_1 = CompositionAggregate;
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.getColumns = /**
     * @return {?}
     */
    function () {
        return this.activeColumns;
    };
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        if (this.resizeWidthEnabled) {
            return this.containerWidth;
        }
        else {
            return this.width;
        }
    };
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.isResizeEnabled = /**
     * @return {?}
     */
    function () {
        return this.resizeWidthEnabled;
    };
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.isReady = /**
     * @return {?}
     */
    function () {
        return !!this.getWidth() && this.activeColumns.length > 0;
    };
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.clone = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activeColumns = tslib_1.__spread(this.activeColumns);
        /** @type {?} */
        var composition = new CompositionAggregate_1(this.getId(), this.baseParams, this.width, this.resizeWidthEnabled);
        composition.containerWidth = this.containerWidth;
        composition.activeColumns = activeColumns;
        composition.columnWidthCollection = this.columnWidthCollection;
        return composition;
    };
    /**
     * @param {?} params
     * @return {?}
     */
    CompositionAggregate.prototype.setColumns = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var columns = params.map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) { return param.getColumn(); }));
        this.columnWidthCollection.setColumns(columns);
        /** @type {?} */
        var newColumns = this.columnFactory.create(params);
        /** @type {?} */
        var widths = this.columnWidthCollection.getWidths();
        this.updateColumnsWidths(newColumns, widths);
        this.setActiveColumnsWithEvent(newColumns);
    };
    /**
     * @param {?} containerWidth
     * @return {?}
     */
    CompositionAggregate.prototype.setContainerWidth = /**
     * @param {?} containerWidth
     * @return {?}
     */
    function (containerWidth) {
        this.setContainerWidthWithEvent(containerWidth);
        this.recalculateColumns();
    };
    /**
     * @param {?} width
     * @return {?}
     */
    CompositionAggregate.prototype.setWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.setWidthWithEvent(width);
        this.setResizeWidthWithEvent(false);
        this.recalculateColumns();
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    CompositionAggregate.prototype.setResizeWidth = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.setResizeWidthWithEvent(enabled);
    };
    // TODO Aggregate events
    // TODO Aggregate events
    /**
     * @param {?} sortParams
     * @return {?}
     */
    CompositionAggregate.prototype.changeSort = 
    // TODO Aggregate events
    /**
     * @param {?} sortParams
     * @return {?}
     */
    function (sortParams) {
        var e_1, _a;
        this.activeColumns.forEach((/**
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
            var columns = this_1.activeColumns.filter((/**
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
    };
    /**
     * @private
     * @return {?}
     */
    CompositionAggregate.prototype.recalculateColumns = /**
     * @private
     * @return {?}
     */
    function () {
        this.columnWidthCollection.setWidth(this.getWidth());
        /** @type {?} */
        var newColumns = tslib_1.__spread(this.activeColumns);
        /** @type {?} */
        var widths = this.columnWidthCollection.getWidths();
        this.updateColumnsWidths(newColumns, widths);
        this.setActiveColumnsWithEvent(newColumns);
    };
    /**
     * @private
     * @param {?} columns
     * @param {?} widths
     * @return {?}
     */
    CompositionAggregate.prototype.updateColumnsWidths = /**
     * @private
     * @param {?} columns
     * @param {?} widths
     * @return {?}
     */
    function (columns, widths) {
        columns.forEach((/**
         * @param {?} columnEntity
         * @param {?} index
         * @return {?}
         */
        function (columnEntity, index) {
            columnEntity.width = widths[index];
        }));
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    CompositionAggregate.prototype.setActiveColumnsWithEvent = /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        this.activeColumns = columns;
        this.addEvent(new ColumnsSetAggregateEvent(this.getId(), columns));
    };
    // TODO Refactor
    // TODO Refactor
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    CompositionAggregate.prototype.setWidthWithEvent = 
    // TODO Refactor
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        /** @type {?} */
        var calculator = new CompositionContainerWidthCalculator(this.MIN_COLUMN_WIDTH);
        /** @type {?} */
        var minWidth = calculator.calculateMinWidth(this.columnWidthCollection.getColumns());
        if (minWidth > width) {
            this.width = minWidth;
        }
        else {
            this.width = width;
        }
        this.addEvent(new CompositionWidthSetAggregateEvent(this.getId()));
    };
    // TODO Refactor
    // TODO Refactor
    /**
     * @private
     * @param {?} containerWidth
     * @return {?}
     */
    CompositionAggregate.prototype.setContainerWidthWithEvent = 
    // TODO Refactor
    /**
     * @private
     * @param {?} containerWidth
     * @return {?}
     */
    function (containerWidth) {
        /** @type {?} */
        var calculator = new CompositionContainerWidthCalculator(this.MIN_COLUMN_WIDTH);
        /** @type {?} */
        var minWidth = calculator.calculateMinWidth(this.columnWidthCollection.getColumns());
        if (minWidth > containerWidth) {
            this.containerWidth = minWidth;
        }
        else {
            this.containerWidth = containerWidth;
        }
        this.addEvent(new CompositionContainerWidthSetAggregateEvent(this.getId(), containerWidth));
    };
    /**
     * @private
     * @param {?} enabled
     * @return {?}
     */
    CompositionAggregate.prototype.setResizeWidthWithEvent = /**
     * @private
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.resizeWidthEnabled = enabled;
        this.addEvent(new CompositionResizeWidthSetAggregateEvent(this.getId()));
    };
    var CompositionAggregate_1;
    CompositionAggregate.ctorParameters = function () { return [
        { type: AggregateId },
        { type: Array },
        { type: Number },
        { type: Boolean }
    ]; };
    CompositionAggregate = CompositionAggregate_1 = tslib_1.__decorate([
        RootAggregate,
        tslib_1.__metadata("design:paramtypes", [AggregateId,
            Array, Number, Boolean])
    ], CompositionAggregate);
    return CompositionAggregate;
}(Aggregate));
export { CompositionAggregate };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.MIN_COLUMN_WIDTH;
    /**
     * Columns taken from user config.
     * This should not be modified and it should be used as a reference point.
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.columnWidthCollection;
    /**
     * Collection of columns which are used in the composition.
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.activeColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.baseColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.baseParams;
    /**
     * Value taken from user config [width]
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.width;
    /**
     * DOM element's width
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.containerWidth;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.resizeWidthEnabled;
    /**
     * Autowired
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.columnFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBSXRGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUN6SSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQzs7SUFJbEYsZ0RBQVM7SUFvQ2xELDhCQUFZLEVBQWUsRUFDeEIsYUFBdUMsRUFDdkMsS0FBYyxFQUNkLFdBQXFCO1FBRnJCLDhCQUFBLEVBQUEsa0JBQXVDO1FBRDFDLFlBSUMsa0JBQU0sRUFBRSxDQUFDLFNBY1Q7UUFwRGdCLHNCQUFnQixHQUFHLEVBQUUsQ0FBQzs7Ozs7UUFNL0IsMkJBQXFCLEdBQTBCLElBQUkscUJBQXFCLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Ozs7UUFLaEcsbUJBQWEsR0FBd0IsRUFBRSxDQUFDO1FBZ0J4Qyx3QkFBa0IsR0FBWSxJQUFJLENBQUM7Ozs7UUFL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TnlDLFNBQVMsR0FxTmxEO1NBck5ZLG9CQUFvQjs7Ozs7O0lBRWhDLGdEQUF1Qzs7Ozs7OztJQU12QyxxREFBd0c7Ozs7OztJQUt4Ryw2Q0FBZ0Q7Ozs7O0lBRWhELDJDQUFrRDs7Ozs7SUFFbEQsMENBQWlEOzs7Ozs7SUFLakQscUNBQXNCOzs7Ozs7SUFLdEIsOENBQStCOzs7OztJQUUvQixrREFBMkM7Ozs7OztJQUszQyw2Q0FBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGUsIEFnZ3JlZ2F0ZUlkLCBSb290QWdncmVnYXRlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uV2lkdGhDb2xsZWN0aW9uIH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aC1jb2xsZWN0aW9uJztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkVudGl0eUZhY3RvcnkgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgQ2hhbmdlU29ydFBhcmFtcyB9IGZyb20gJy4vc29ydC9jaGFuZ2Utc29ydC5wYXJhbXMnO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4vc29ydC9zb3J0LXN0YXR1cyc7XG5pbXBvcnQgeyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW5zLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IgfSBmcm9tICcuL3dpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jYWxjdWxhdG9yJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LXdpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5AUm9vdEFnZ3JlZ2F0ZVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IE1JTl9DT0xVTU5fV0lEVEggPSA1MDtcblxuXHQvKipcblx0ICogQ29sdW1ucyB0YWtlbiBmcm9tIHVzZXIgY29uZmlnLlxuXHQgKiBUaGlzIHNob3VsZCBub3QgYmUgbW9kaWZpZWQgYW5kIGl0IHNob3VsZCBiZSB1c2VkIGFzIGEgcmVmZXJlbmNlIHBvaW50LlxuXHQgKi9cblx0cHJpdmF0ZSBjb2x1bW5XaWR0aENvbGxlY3Rpb246IENvbHVtbldpZHRoQ29sbGVjdGlvbiA9IG5ldyBDb2x1bW5XaWR0aENvbGxlY3Rpb24odGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblxuXHQvKipcblx0ICogQ29sbGVjdGlvbiBvZiBjb2x1bW5zIHdoaWNoIGFyZSB1c2VkIGluIHRoZSBjb21wb3NpdGlvbi5cblx0ICovXG5cdHByaXZhdGUgYWN0aXZlQ29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYmFzZUNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XG5cblx0cHJpdmF0ZSByZWFkb25seSBiYXNlUGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+O1xuXG5cdC8qKlxuXHQgKiBWYWx1ZSB0YWtlbiBmcm9tIHVzZXIgY29uZmlnIFt3aWR0aF1cblx0ICovXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHQvKipcblx0ICogRE9NIGVsZW1lbnQncyB3aWR0aFxuXHQgKi9cblx0cHJpdmF0ZSBjb250YWluZXJXaWR0aDogbnVtYmVyO1xuXG5cdHByaXZhdGUgcmVzaXplV2lkdGhFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHQvKipcblx0ICogQXV0b3dpcmVkXG5cdCAqL1xuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkZhY3Rvcnk6IENvbHVtbkVudGl0eUZhY3RvcnkgPSBuZXcgQ29sdW1uRW50aXR5RmFjdG9yeSgpO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0Y29sdW1uc1BhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPiA9IFtdLFxuXHRcdFx0XHR3aWR0aD86IG51bWJlcixcblx0XHRcdFx0cmVzaXplV2lkdGg/OiBib29sZWFuKSB7XG5cdFx0c3VwZXIoaWQpO1xuXG5cdFx0Y29uc3QgY29sdW1ucyA9IGNvbHVtbnNQYXJhbXMubWFwKChwYXJhbSkgPT4gcGFyYW0uZ2V0Q29sdW1uKCkpO1xuXG5cdFx0dGhpcy5iYXNlUGFyYW1zID0gY29sdW1uc1BhcmFtcztcblx0XHR0aGlzLmJhc2VDb2x1bW5zID0gY29sdW1ucztcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbnMgPSB0aGlzLmNvbHVtbkZhY3RvcnkuY3JlYXRlKGNvbHVtbnNQYXJhbXMpO1xuXHRcdHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uID0gbmV3IENvbHVtbldpZHRoQ29sbGVjdGlvbih0aGlzLk1JTl9DT0xVTU5fV0lEVEgsIGNvbHVtbnMsIHdpZHRoKTtcblxuXHRcdGlmIChyZXNpemVXaWR0aCAhPT0gdW5kZWZpbmVkICYmIHJlc2l6ZVdpZHRoICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZCA9IHJlc2l6ZVdpZHRoO1xuXHRcdH1cblx0fVxuXG5cdGdldENvbHVtbnMoKTogQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1ucztcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cblx0XHRpZiAodGhpcy5yZXNpemVXaWR0aEVuYWJsZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lcldpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0XHR9XG5cdH1cblxuXHRpc1Jlc2l6ZUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVzaXplV2lkdGhFbmFibGVkO1xuXHR9XG5cblx0aXNSZWFkeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISF0aGlzLmdldFdpZHRoKCkgJiYgdGhpcy5hY3RpdmVDb2x1bW5zLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRjbG9uZSgpOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gWy4uLnRoaXMuYWN0aXZlQ29sdW1uc107XG5cblx0XHRsZXQgY29tcG9zaXRpb24gPSBuZXcgQ29tcG9zaXRpb25BZ2dyZWdhdGUoXG5cdFx0XHR0aGlzLmdldElkKCksXG5cdFx0XHR0aGlzLmJhc2VQYXJhbXMsXG5cdFx0XHR0aGlzLndpZHRoLFxuXHRcdFx0dGhpcy5yZXNpemVXaWR0aEVuYWJsZWRcblx0XHQpO1xuXG5cdFx0Y29tcG9zaXRpb24uY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lcldpZHRoO1xuXHRcdGNvbXBvc2l0aW9uLmFjdGl2ZUNvbHVtbnMgPSBhY3RpdmVDb2x1bW5zO1xuXHRcdGNvbXBvc2l0aW9uLmNvbHVtbldpZHRoQ29sbGVjdGlvbiA9IHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uO1xuXG5cdFx0cmV0dXJuIGNvbXBvc2l0aW9uO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBwYXJhbXMubWFwKChwYXJhbTogQ29sdW1uUGFyYW1zKSA9PiBwYXJhbS5nZXRDb2x1bW4oKSk7XG5cblx0XHR0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5zZXRDb2x1bW5zKGNvbHVtbnMpO1xuXG5cdFx0Y29uc3QgbmV3Q29sdW1ucyA9IHRoaXMuY29sdW1uRmFjdG9yeS5jcmVhdGUocGFyYW1zKSxcblx0XHRcdHdpZHRocyA9IHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLmdldFdpZHRocygpO1xuXG5cdFx0dGhpcy51cGRhdGVDb2x1bW5zV2lkdGhzKG5ld0NvbHVtbnMsIHdpZHRocyk7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUNvbHVtbnNXaXRoRXZlbnQobmV3Q29sdW1ucyk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aChjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHR0aGlzLnNldENvbnRhaW5lcldpZHRoV2l0aEV2ZW50KGNvbnRhaW5lcldpZHRoKTtcblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRXaWR0aFdpdGhFdmVudCh3aWR0aCk7XG5cblx0XHR0aGlzLnNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGZhbHNlKTtcblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRzZXRSZXNpemVXaWR0aChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRSZXNpemVXaWR0aFdpdGhFdmVudChlbmFibGVkKTtcblx0fVxuXG5cdC8vIFRPRE8gQWdncmVnYXRlIGV2ZW50c1xuXHRjaGFuZ2VTb3J0KHNvcnRQYXJhbXM6IEFycmF5PENoYW5nZVNvcnRQYXJhbXM+KTogdm9pZCB7XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5FbnRpdHkpID0+IHtcblx0XHRcdGNvbHVtbi5zZXRTb3J0U3RhdHVzKFNvcnRTdGF0dXMuTk9ORSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGxldCBwYXJhbSBvZiBzb3J0UGFyYW1zKSB7XG5cblx0XHRcdGNvbnN0IGZpZWxkSWQgPSBwYXJhbS5maWVsZElkLFxuXHRcdFx0XHRkaXJlY3Rpb24gPSBwYXJhbS5kaXJlY3Rpb24sXG5cdFx0XHRcdHNvcnRTdGF0dXMgPSBkaXJlY3Rpb24gPyBTb3J0U3RhdHVzLkFTQyA6IFNvcnRTdGF0dXMuREVTQztcblxuXHRcdFx0Y29uc3QgY29sdW1ucyA9IHRoaXMuYWN0aXZlQ29sdW1ucy5maWx0ZXIoKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiB7XG5cdFx0XHRcdHJldHVybiBjb2x1bW4uZ2V0RmllbGQoKS5nZXRJZCgpLmdldElkKCkgPT09IGZpZWxkSWQuZ2V0SWQoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoY29sdW1ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5FbnRpdHkpID0+IHtcblxuXHRcdFx0XHRcdGNvbHVtbi5zZXRTb3J0U3RhdHVzKHNvcnRTdGF0dXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlQ29sdW1ucygpOiB2b2lkIHtcblxuXHRcdHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLnNldFdpZHRoKHRoaXMuZ2V0V2lkdGgoKSk7XG5cblx0XHRjb25zdCBuZXdDb2x1bW5zID0gWy4uLnRoaXMuYWN0aXZlQ29sdW1uc10sXG5cdFx0XHR3aWR0aHMgPSB0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5nZXRXaWR0aHMoKTtcblxuXHRcdHRoaXMudXBkYXRlQ29sdW1uc1dpZHRocyhuZXdDb2x1bW5zLCB3aWR0aHMpO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVDb2x1bW5zV2l0aEV2ZW50KG5ld0NvbHVtbnMpO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVDb2x1bW5zV2lkdGhzKGNvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4sIHdpZHRoczogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uRW50aXR5OiBDb2x1bW5FbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGNvbHVtbkVudGl0eS53aWR0aCA9IHdpZHRoc1tpbmRleF07XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHNldEFjdGl2ZUNvbHVtbnNXaXRoRXZlbnQoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IHZvaWQge1xuXHRcdHRoaXMuYWN0aXZlQ29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgY29sdW1ucykpO1xuXHR9XG5cblx0Ly8gVE9ETyBSZWZhY3RvclxuXHRwcml2YXRlIHNldFdpZHRoV2l0aEV2ZW50KHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IodGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblxuXHRcdGNvbnN0IG1pbldpZHRoID0gY2FsY3VsYXRvci5jYWxjdWxhdGVNaW5XaWR0aCh0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5nZXRDb2x1bW5zKCkpO1xuXG5cdFx0aWYgKG1pbldpZHRoID4gd2lkdGgpIHtcblx0XHRcdHRoaXMud2lkdGggPSBtaW5XaWR0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdH1cblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxuXG5cdC8vIFRPRE8gUmVmYWN0b3Jcblx0cHJpdmF0ZSBzZXRDb250YWluZXJXaWR0aFdpdGhFdmVudChjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBjYWxjdWxhdG9yID0gbmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yKHRoaXMuTUlOX0NPTFVNTl9XSURUSCk7XG5cblx0XHRjb25zdCBtaW5XaWR0aCA9IGNhbGN1bGF0b3IuY2FsY3VsYXRlTWluV2lkdGgodGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uZ2V0Q29sdW1ucygpKTtcblxuXHRcdGlmIChtaW5XaWR0aCA+IGNvbnRhaW5lcldpZHRoKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lcldpZHRoID0gbWluV2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29udGFpbmVyV2lkdGggPSBjb250YWluZXJXaWR0aDtcblx0XHR9XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBjb250YWluZXJXaWR0aCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRSZXNpemVXaWR0aFdpdGhFdmVudChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5yZXNpemVXaWR0aEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxufVxuIl19