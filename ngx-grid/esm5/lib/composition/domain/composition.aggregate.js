/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateRoot } from '@generic-ui/hermes';
import { CompositionContainerWidthCalculator } from './width/composition-container-width.calculator';
import { CompositionWidthSetAggregateEvent } from './width/set-width/composition-width-set.aggregate-event';
import { CompositionContainerWidthSetAggregateEvent } from './width/set-container-width/composition-container-width-set.aggregate-event';
import { CompositionResizeWidthSetAggregateEvent } from './width/resize-width/composition-resize-width-set.aggregate-event';
import { CompositionColumnSetEnabledAggregateEvent } from './column/set-enabled/composition.column-set-enabled.aggregate-event';
import { ActiveColumnContainer } from './column/active/active-column.container';
import { ActiveColumnEntityConverter } from './column/active/active-column.entity-converter';
import { CompositionColumnMovedLeftAggregateEvent } from './column/move/left/composition.column-moved-left.aggregate-event';
import { CompositionColumnMovedRightAggregateEvent } from './column/move/right/composition.column-moved-right.aggregate-event';
import { ColumnsSetAggregateEvent } from './column/set-columns/columns-set.aggregate-event';
var CompositionAggregate = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionAggregate, _super);
    function CompositionAggregate(id, columnFactory, columnsParams, width, resizeWidth) {
        if (columnsParams === void 0) { columnsParams = []; }
        var _this = _super.call(this, id, 'CompositionAggregate') || this;
        _this.allColumns = [];
        _this.resizeWidthEnabled = true;
        _this.activeColumnEntityConverter = new ActiveColumnEntityConverter();
        /** @type {?} */
        var columnConfigs = columnsParams.map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) { return param.getColumn(); }));
        _this.baseParams = columnsParams;
        _this.baseColumns = columnConfigs;
        _this.columnFactory = columnFactory;
        _this.width = width;
        _this.allColumns = _this.columnFactory.create(columnsParams);
        /** @type {?} */
        var activeColumns = _this.activeColumnEntityConverter.convertMany(_this.getEnabledColumns());
        _this.activeColumnContainer = new ActiveColumnContainer(_this.getId(), activeColumns, width, columnConfigs);
        if (resizeWidth !== undefined && resizeWidth !== null) {
            _this.resizeWidthEnabled = resizeWidth;
        }
        return _this;
    }
    // REMOVE
    // REMOVE
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.getColumns = 
    // REMOVE
    /**
     * @return {?}
     */
    function () {
        return this.allColumns;
    };
    // REMOVE
    // REMOVE
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.getActiveColumns = 
    // REMOVE
    /**
     * @return {?}
     */
    function () {
        return this.activeColumnContainer.getColumns();
    };
    // make private
    // make private
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.getWidth = 
    // make private
    /**
     * @return {?}
     */
    function () {
        if (this.resizeWidthEnabled) {
            return this.containerInDOMWidth;
        }
        else {
            return this.width;
        }
    };
    // REMOVE
    // REMOVE
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.isResizeEnabled = 
    // REMOVE
    /**
     * @return {?}
     */
    function () {
        return this.resizeWidthEnabled;
    };
    // REMOVE
    // REMOVE
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.isReady = 
    // REMOVE
    /**
     * @return {?}
     */
    function () {
        return !!this.getWidth() && this.getActiveColumns().length > 0;
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
        this.allColumns = this.columnFactory.create(params);
        /** @type {?} */
        var columnConfigs = params.map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) { return param.getColumn(); }));
        /** @type {?} */
        var activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, columnConfigs);
        this.addEvent(new ColumnsSetAggregateEvent(this.getId()));
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
    /**
     * @param {?} sortParams
     * @return {?}
     */
    CompositionAggregate.prototype.changeSort = /**
     * @param {?} sortParams
     * @return {?}
     */
    function (sortParams) {
        this.addEvent(this.activeColumnContainer.changeSort(sortParams));
    };
    // DELEGATE
    // DELEGATE
    /**
     * @param {?} columnId
     * @param {?} enabled
     * @return {?}
     */
    CompositionAggregate.prototype.enableColumn = 
    // DELEGATE
    /**
     * @param {?} columnId
     * @param {?} enabled
     * @return {?}
     */
    function (columnId, enabled) {
        /** @type {?} */
        var enabledIndex = -1;
        this.allColumns.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) {
            if (column.getId().getId() === columnId.getId()) {
                /** @type {?} */
                var prevState = column.isEnabled();
                column.setEnabled(enabled);
                if (prevState !== enabled) {
                    enabledIndex = index;
                }
            }
        }));
        if (enabledIndex > 0) {
            if (enabled) {
                // convert
                /** @type {?} */
                var columnToAdd = this.activeColumnEntityConverter.convert(this.allColumns[enabledIndex]);
                this.activeColumnContainer.addColumn(columnToAdd, enabledIndex);
            }
            else {
                this.activeColumnContainer.removeColumn(enabledIndex);
            }
        }
        this.recalculateColumns();
        this.addEvent(new CompositionColumnSetEnabledAggregateEvent(this.getId(), this.getActiveColumns()));
    };
    /**
     * @param {?} columnId
     * @return {?}
     */
    CompositionAggregate.prototype.moveLeft = /**
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        /** @type {?} */
        var columnIndex = this.findColumnIndex(columnId);
        /** @type {?} */
        var nextLeft;
        /** @type {?} */
        var nextLeftIndex = -1;
        for (var i = columnIndex - 1; i >= 0; i -= 1) {
            /** @type {?} */
            var leftColumn = this.allColumns[i];
            if (leftColumn.isEnabled()) {
                nextLeft = leftColumn;
                nextLeftIndex = i;
                break;
            }
        }
        if (nextLeft && nextLeftIndex >= 0 && columnIndex >= 0) {
            /** @type {?} */
            var column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextLeft;
            this.allColumns[nextLeftIndex] = column;
        }
        this.activeColumnContainer.moveLeft(columnId);
        this.addEvent(new CompositionColumnMovedLeftAggregateEvent(this.getId(), this.getActiveColumns()));
    };
    /**
     * @param {?} columnId
     * @return {?}
     */
    CompositionAggregate.prototype.moveRight = /**
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        /** @type {?} */
        var columnIndex = this.findColumnIndex(columnId);
        /** @type {?} */
        var nextRight;
        /** @type {?} */
        var nextRightIndex = -1;
        for (var i = columnIndex + 1; i < this.allColumns.length; i += 1) {
            /** @type {?} */
            var rightColumn = this.allColumns[i];
            if (rightColumn.isEnabled()) {
                nextRight = rightColumn;
                nextRightIndex = i;
                break;
            }
        }
        if (nextRight && nextRightIndex >= 0 && columnIndex >= 0) {
            /** @type {?} */
            var column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextRight;
            this.allColumns[nextRightIndex] = column;
        }
        this.activeColumnContainer.moveRight(columnId);
        this.addEvent(new CompositionColumnMovedRightAggregateEvent(this.getId(), this.getActiveColumns()));
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
        /** @type {?} */
        var activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, activeColumns.map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.getColumnConfig(); })));
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
        var calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
        /** @type {?} */
        var minWidth = calculator.calculateMinWidth(this.activeColumnContainer.getColumnWidths());
        if (minWidth > width) {
            this.width = minWidth;
        }
        else {
            this.width = width;
        }
        this.activeColumnContainer.setWidth(this.getWidth());
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
        var calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
        /** @type {?} */
        var minWidth = calculator.calculateMinWidth(this.activeColumnContainer.getColumnWidths());
        if (minWidth > containerWidth) {
            this.containerInDOMWidth = minWidth;
        }
        else {
            this.containerInDOMWidth = containerWidth;
        }
        this.activeColumnContainer.setWidth(this.getWidth());
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
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionResizeWidthSetAggregateEvent(this.getId()));
    };
    // REMOVE -> move to allColumnsContainer
    // REMOVE -> move to allColumnsContainer
    /**
     * @private
     * @return {?}
     */
    CompositionAggregate.prototype.getEnabledColumns = 
    // REMOVE -> move to allColumnsContainer
    /**
     * @private
     * @return {?}
     */
    function () {
        return this.allColumns.filter((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.isEnabled(); }));
    };
    /**
     * @private
     * @param {?} columnId
     * @return {?}
     */
    CompositionAggregate.prototype.findColumnIndex = /**
     * @private
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        return this.allColumns.findIndex((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return column.getId().equals(columnId); }));
    };
    /**
     * @private
     * @return {?}
     */
    CompositionAggregate.prototype.getMinColumnWidth = /**
     * @private
     * @return {?}
     */
    function () {
        return this.activeColumnContainer.getMinColumnWidth();
    };
    return CompositionAggregate;
}(AggregateRoot));
export { CompositionAggregate };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.allColumns;
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
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.containerInDOMWidth;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.resizeWidthEnabled;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.columnFactory;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.activeColumnContainer;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.activeColumnEntityConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBZSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9oRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUN6SSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUU1SCxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUNoSSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVoRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUM1SCxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMvSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUk1RjtJQUEwQyxnREFBNEI7SUF1QnJFLDhCQUFZLEVBQWUsRUFDeEIsYUFBa0MsRUFDbEMsYUFBdUMsRUFDdkMsS0FBYyxFQUNkLFdBQXFCO1FBRnJCLDhCQUFBLEVBQUEsa0JBQXVDO1FBRjFDLFlBS0Msa0JBQU0sRUFBRSxFQUFFLHNCQUFzQixDQUFDLFNBcUJqQztRQS9DTyxnQkFBVSxHQUF3QixFQUFFLENBQUM7UUFhckMsd0JBQWtCLEdBQVksSUFBSSxDQUFDO1FBTTFCLGlDQUEyQixHQUFnQyxJ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UkQsQ0FBMEMsYUFBYSxHQThSdEQ7Ozs7Ozs7SUE1UkEsMENBQTZDOzs7OztJQUU3QywyQ0FBa0Q7Ozs7O0lBRWxELDBDQUFpRDs7Ozs7O0lBS2pELHFDQUFzQjs7Ozs7SUFFdEIsbURBQW9DOzs7OztJQUVwQyxrREFBMkM7Ozs7O0lBRTNDLDZDQUFvRDs7Ozs7SUFFcEQscURBQThEOzs7OztJQUU5RCwyREFBOEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkVudGl0eUZhY3RvcnkgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgQ2hhbmdlU29ydFBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NvcnQvY2hhbmdlLXNvcnQucGFyYW1zJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yIH0gZnJvbSAnLi93aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGguY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC13aWR0aC9jb21wb3NpdGlvbi13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3dpZHRoL3Jlc2l6ZS13aWR0aC9jb21wb3NpdGlvbi1yZXNpemUtd2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY29sdW1uL3NldC1lbmFibGVkL2NvbXBvc2l0aW9uLmNvbHVtbi1zZXQtZW5hYmxlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uQ29udGFpbmVyIH0gZnJvbSAnLi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uY29udGFpbmVyJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIgfSBmcm9tICcuL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHktY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLWxlZnQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vbW92ZS9yaWdodC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtcmlnaHQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbHVtbnNTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbnMtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxDb21wb3NpdGlvbklkPiB7XG5cblx0cHJpdmF0ZSBhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSByZWFkb25seSBiYXNlQ29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJhc2VQYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz47XG5cblx0LyoqXG5cdCAqIFZhbHVlIHRha2VuIGZyb20gdXNlciBjb25maWcgW3dpZHRoXVxuXHQgKi9cblx0cHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuXG5cdHByaXZhdGUgY29udGFpbmVySW5ET01XaWR0aDogbnVtYmVyO1xuXG5cdHByaXZhdGUgcmVzaXplV2lkdGhFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkZhY3Rvcnk6IENvbHVtbkVudGl0eUZhY3Rvcnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5Db250YWluZXI6IEFjdGl2ZUNvbHVtbkNvbnRhaW5lcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlcjogQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyID0gbmV3IEFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0Y29sdW1uRmFjdG9yeTogQ29sdW1uRW50aXR5RmFjdG9yeSxcblx0XHRcdFx0Y29sdW1uc1BhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPiA9IFtdLFxuXHRcdFx0XHR3aWR0aD86IG51bWJlcixcblx0XHRcdFx0cmVzaXplV2lkdGg/OiBib29sZWFuKSB7XG5cdFx0c3VwZXIoaWQsICdDb21wb3NpdGlvbkFnZ3JlZ2F0ZScpO1xuXG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IGNvbHVtbnNQYXJhbXMubWFwKChwYXJhbSkgPT4gcGFyYW0uZ2V0Q29sdW1uKCkpO1xuXG5cdFx0dGhpcy5iYXNlUGFyYW1zID0gY29sdW1uc1BhcmFtcztcblx0XHR0aGlzLmJhc2VDb2x1bW5zID0gY29sdW1uQ29uZmlncztcblxuXHRcdHRoaXMuY29sdW1uRmFjdG9yeSA9IGNvbHVtbkZhY3Rvcnk7XG5cblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cblx0XHR0aGlzLmFsbENvbHVtbnMgPSB0aGlzLmNvbHVtbkZhY3RvcnkuY3JlYXRlKGNvbHVtbnNQYXJhbXMpO1xuXG5cdFx0Y29uc3QgYWN0aXZlQ29sdW1ucyA9IHRoaXMuYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyLmNvbnZlcnRNYW55KHRoaXMuZ2V0RW5hYmxlZENvbHVtbnMoKSk7XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lciA9IG5ldyBBY3RpdmVDb2x1bW5Db250YWluZXIodGhpcy5nZXRJZCgpLCBhY3RpdmVDb2x1bW5zLCB3aWR0aCwgY29sdW1uQ29uZmlncyk7XG5cblx0XHRpZiAocmVzaXplV2lkdGggIT09IHVuZGVmaW5lZCAmJiByZXNpemVXaWR0aCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5yZXNpemVXaWR0aEVuYWJsZWQgPSByZXNpemVXaWR0aDtcblx0XHR9XG5cblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnM7XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0Z2V0QWN0aXZlQ29sdW1ucygpOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuZ2V0Q29sdW1ucygpO1xuXHR9XG5cblx0Ly8gbWFrZSBwcml2YXRlXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cblx0XHRpZiAodGhpcy5yZXNpemVXaWR0aEVuYWJsZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lckluRE9NV2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRpc1Jlc2l6ZUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVzaXplV2lkdGhFbmFibGVkO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGlzUmVhZHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhdGhpcy5nZXRXaWR0aCgpICYmIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRzZXRDb2x1bW5zKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IHZvaWQge1xuXG5cdFx0dGhpcy5hbGxDb2x1bW5zID0gdGhpcy5jb2x1bW5GYWN0b3J5LmNyZWF0ZShwYXJhbXMpO1xuXG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IHBhcmFtcy5tYXAoKHBhcmFtOiBDb2x1bW5QYXJhbXMpID0+IHBhcmFtLmdldENvbHVtbigpKTtcblxuXHRcdGNvbnN0IGFjdGl2ZUNvbHVtbnMgPSB0aGlzLmFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlci5jb252ZXJ0TWFueSh0aGlzLmdldEVuYWJsZWRDb2x1bW5zKCkpO1xuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0Q29sdW1ucyhhY3RpdmVDb2x1bW5zLCBjb2x1bW5Db25maWdzKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbHVtbnNTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxuXG5cdHNldENvbnRhaW5lcldpZHRoKGNvbnRhaW5lcldpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2V0Q29udGFpbmVyV2lkdGhXaXRoRXZlbnQoY29udGFpbmVyV2lkdGgpO1xuXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNldFdpZHRoV2l0aEV2ZW50KHdpZHRoKTtcblxuXHRcdHRoaXMuc2V0UmVzaXplV2lkdGhXaXRoRXZlbnQoZmFsc2UpO1xuXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcblx0fVxuXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGVuYWJsZWQpO1xuXHR9XG5cblx0Y2hhbmdlU29ydChzb3J0UGFyYW1zOiBBcnJheTxDaGFuZ2VTb3J0UGFyYW1zPik6IHZvaWQge1xuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5jaGFuZ2VTb3J0KHNvcnRQYXJhbXMpXG5cdFx0KTtcblx0fVxuXG5cdC8vIERFTEVHQVRFXG5cdGVuYWJsZUNvbHVtbihjb2x1bW5JZDogQ29sdW1uSWQsIGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblxuXHRcdGxldCBlbmFibGVkSW5kZXggPSAtMTtcblxuXHRcdHRoaXMuYWxsQ29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkVudGl0eSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0aWYgKGNvbHVtbi5nZXRJZCgpLmdldElkKCkgPT09IGNvbHVtbklkLmdldElkKCkpIHtcblxuXHRcdFx0XHRjb25zdCBwcmV2U3RhdGUgPSBjb2x1bW4uaXNFbmFibGVkKCk7XG5cblx0XHRcdFx0Y29sdW1uLnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cblx0XHRcdFx0aWYgKHByZXZTdGF0ZSAhPT0gZW5hYmxlZCkge1xuXHRcdFx0XHRcdGVuYWJsZWRJbmRleCA9IGluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoZW5hYmxlZEluZGV4ID4gMCkge1xuXG5cdFx0XHRpZiAoZW5hYmxlZCkge1xuXG5cdFx0XHRcdC8vIGNvbnZlcnRcblx0XHRcdFx0Y29uc3QgY29sdW1uVG9BZGQgPSB0aGlzLmFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlci5jb252ZXJ0KHRoaXMuYWxsQ29sdW1uc1tlbmFibGVkSW5kZXhdKTtcblxuXHRcdFx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5hZGRDb2x1bW4oY29sdW1uVG9BZGQsIGVuYWJsZWRJbmRleCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5yZW1vdmVDb2x1bW4oZW5hYmxlZEluZGV4KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnJlY2FsY3VsYXRlQ29sdW1ucygpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpKVxuXHRcdCk7XG5cdH1cblxuXHRtb3ZlTGVmdChjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbHVtbkluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoY29sdW1uSWQpO1xuXG5cdFx0bGV0IG5leHRMZWZ0LFxuXHRcdFx0bmV4dExlZnRJbmRleCA9IC0xO1xuXG5cdFx0Zm9yIChsZXQgaSA9IGNvbHVtbkluZGV4IC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcblxuXHRcdFx0Y29uc3QgbGVmdENvbHVtbiA9IHRoaXMuYWxsQ29sdW1uc1tpXTtcblxuXHRcdFx0aWYgKGxlZnRDb2x1bW4uaXNFbmFibGVkKCkpIHtcblxuXHRcdFx0XHRuZXh0TGVmdCA9IGxlZnRDb2x1bW47XG5cdFx0XHRcdG5leHRMZWZ0SW5kZXggPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobmV4dExlZnQgJiYgbmV4dExlZnRJbmRleCA+PSAwICYmIGNvbHVtbkluZGV4ID49IDApIHtcblxuXHRcdFx0bGV0IGNvbHVtbiA9IHRoaXMuYWxsQ29sdW1uc1tjb2x1bW5JbmRleF07XG5cblx0XHRcdHRoaXMuYWxsQ29sdW1uc1tjb2x1bW5JbmRleF0gPSBuZXh0TGVmdDtcblx0XHRcdHRoaXMuYWxsQ29sdW1uc1tuZXh0TGVmdEluZGV4XSA9IGNvbHVtbjtcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5tb3ZlTGVmdChjb2x1bW5JZCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKSlcblx0XHQpO1xuXHR9XG5cblx0bW92ZVJpZ2h0KGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29sdW1uSW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChjb2x1bW5JZCk7XG5cblx0XHRsZXQgbmV4dFJpZ2h0LFxuXHRcdFx0bmV4dFJpZ2h0SW5kZXggPSAtMTtcblxuXHRcdGZvciAobGV0IGkgPSBjb2x1bW5JbmRleCArIDE7IGkgPCB0aGlzLmFsbENvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0Y29uc3QgcmlnaHRDb2x1bW4gPSB0aGlzLmFsbENvbHVtbnNbaV07XG5cblx0XHRcdGlmIChyaWdodENvbHVtbi5pc0VuYWJsZWQoKSkge1xuXG5cdFx0XHRcdG5leHRSaWdodCA9IHJpZ2h0Q29sdW1uO1xuXHRcdFx0XHRuZXh0UmlnaHRJbmRleCA9IGk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChuZXh0UmlnaHQgJiYgbmV4dFJpZ2h0SW5kZXggPj0gMCAmJiBjb2x1bW5JbmRleCA+PSAwKSB7XG5cblx0XHRcdGxldCBjb2x1bW4gPSB0aGlzLmFsbENvbHVtbnNbY29sdW1uSW5kZXhdO1xuXG5cdFx0XHR0aGlzLmFsbENvbHVtbnNbY29sdW1uSW5kZXhdID0gbmV4dFJpZ2h0O1xuXHRcdFx0dGhpcy5hbGxDb2x1bW5zW25leHRSaWdodEluZGV4XSA9IGNvbHVtbjtcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5tb3ZlUmlnaHQoY29sdW1uSWQpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpKVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlQ29sdW1ucygpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFjdGl2ZUNvbHVtbnMgPSB0aGlzLmFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlci5jb252ZXJ0TWFueSh0aGlzLmdldEVuYWJsZWRDb2x1bW5zKCkpO1xuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0Q29sdW1ucyhhY3RpdmVDb2x1bW5zLCBhY3RpdmVDb2x1bW5zLm1hcChjID0+IGMuZ2V0Q29sdW1uQ29uZmlnKCkpKTtcblx0fVxuXG5cdC8vIFRPRE8gUmVmYWN0b3Jcblx0cHJpdmF0ZSBzZXRXaWR0aFdpdGhFdmVudCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBjYWxjdWxhdG9yID0gbmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yKHRoaXMuZ2V0TWluQ29sdW1uV2lkdGgoKSk7XG5cblx0XHRjb25zdCBtaW5XaWR0aCA9IGNhbGN1bGF0b3IuY2FsY3VsYXRlTWluV2lkdGgodGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuZ2V0Q29sdW1uV2lkdGhzKCkpO1xuXG5cdFx0aWYgKG1pbldpZHRoID4gd2lkdGgpIHtcblx0XHRcdHRoaXMud2lkdGggPSBtaW5XaWR0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldFdpZHRoKHRoaXMuZ2V0V2lkdGgoKSk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb21wb3NpdGlvbldpZHRoU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpKSk7XG5cdH1cblxuXHQvLyBUT0RPIFJlZmFjdG9yXG5cdHByaXZhdGUgc2V0Q29udGFpbmVyV2lkdGhXaXRoRXZlbnQoY29udGFpbmVyV2lkdGg6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgY2FsY3VsYXRvciA9IG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvcih0aGlzLmdldE1pbkNvbHVtbldpZHRoKCkpO1xuXG5cdFx0Y29uc3QgbWluV2lkdGggPSBjYWxjdWxhdG9yLmNhbGN1bGF0ZU1pbldpZHRoKHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmdldENvbHVtbldpZHRocygpKTtcblxuXHRcdGlmIChtaW5XaWR0aCA+IGNvbnRhaW5lcldpZHRoKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lckluRE9NV2lkdGggPSBtaW5XaWR0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb250YWluZXJJbkRPTVdpZHRoID0gY29udGFpbmVyV2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0V2lkdGgodGhpcy5nZXRXaWR0aCgpKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIGNvbnRhaW5lcldpZHRoKSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0V2lkdGgodGhpcy5nZXRXaWR0aCgpKTtcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpKSk7XG5cdH1cblxuXHQvLyBSRU1PVkUgLT4gbW92ZSB0byBhbGxDb2x1bW5zQ29udGFpbmVyXG5cdHByaXZhdGUgZ2V0RW5hYmxlZENvbHVtbnMoKTogQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucy5maWx0ZXIoYyA9PiBjLmlzRW5hYmxlZCgpKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZENvbHVtbkluZGV4KGNvbHVtbklkOiBDb2x1bW5JZCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucy5maW5kSW5kZXgoKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiBjb2x1bW4uZ2V0SWQoKS5lcXVhbHMoY29sdW1uSWQpKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0TWluQ29sdW1uV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuZ2V0TWluQ29sdW1uV2lkdGgoKTtcblx0fVxufVxuIl19