/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateRoot, KeyMap } from '@generic-ui/hermes';
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
import { CompositionCreatedAggregateEvent } from './create/composition-created.aggregate-event';
import { emptyGroup } from './group/empty-group';
var CompositionAggregate = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionAggregate, _super);
    function CompositionAggregate(id, columnFactory, groupFactory, columnsParams, width, resizeWidth) {
        if (columnsParams === void 0) { columnsParams = []; }
        var _this = _super.call(this, id, 'CompositionAggregate') || this;
        _this.allColumns = [];
        _this.resizeWidthEnabled = true;
        _this.activeColumnEntityConverter = new ActiveColumnEntityConverter();
        _this.groups = new KeyMap();
        _this.columnNameToGroupId = new Map();
        /** @type {?} */
        var columnConfigs = columnsParams.map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) { return param.getColumn(); }));
        _this.baseParams = columnsParams;
        _this.baseColumns = columnConfigs;
        _this.columnFactory = columnFactory;
        _this.groupFactory = groupFactory;
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
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.createEvent = /**
     * @return {?}
     */
    function () {
        return CompositionCreatedAggregateEvent;
    };
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
     * @param {?} configs
     * @return {?}
     */
    CompositionAggregate.prototype.setGroups = /**
     * @param {?} configs
     * @return {?}
     */
    function (configs) {
        var _this = this;
        var _loop_1 = function (i) {
            /** @type {?} */
            var config = configs[i];
            if (((/** @type {?} */ (config))).columns !== undefined) {
                /** @type {?} */
                var group_1 = this_1.groupFactory.create(config);
                this_1.groups.set(group_1.id, group_1);
                ((/** @type {?} */ (config))).columns.forEach((/**
                 * @param {?} c
                 * @param {?} index
                 * @return {?}
                 */
                function (c, index) {
                    _this.columnNameToGroupId.set((/** @type {?} */ (c.header)), group_1.id);
                }));
            }
            else {
                this_1.columnNameToGroupId.set((/** @type {?} */ (config.header)), emptyGroup.id);
            }
        };
        var this_1 = this;
        for (var i = 0; i < configs.length; i += 1) {
            _loop_1(i);
        }
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
    CompositionAggregate.prototype.groupFactory;
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
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.groups;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.columnNameToGroupId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXNDLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU8vRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUN6SSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUU1SCxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUNoSSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVoRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUM1SCxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMvSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUU1RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUloRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHakQ7SUFBMEMsZ0RBQTRCO0lBNkJyRSw4QkFBWSxFQUFpQixFQUMxQixhQUFrQyxFQUNsQyxZQUFxQyxFQUNyQyxhQUF1QyxFQUN2QyxLQUFjLEVBQ2QsV0FBcUI7UUFGckIsOEJBQUEsRUFBQSxrQkFBdUM7UUFIMUMsWUFN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TyxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBQ0YsMkJBQUM7QUFBRCxDQUFDLEFBaFVELENBQTBDLGFBQWEsR0FnVXREOzs7Ozs7O0lBOVRBLDBDQUE2Qzs7Ozs7SUFFN0MsMkNBQWtEOzs7OztJQUVsRCwwQ0FBaUQ7Ozs7OztJQUtqRCxxQ0FBc0I7Ozs7O0lBRXRCLG1EQUFvQzs7Ozs7SUFFcEMsa0RBQTJDOzs7OztJQUUzQyw2Q0FBb0Q7Ozs7O0lBRXBELDRDQUF1RDs7Ozs7SUFFdkQscURBQThEOzs7OztJQUU5RCwyREFBOEc7Ozs7O0lBRTlHLHNDQUErRDs7Ozs7SUFFL0QsbURBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIEFnZ3JlZ2F0ZUV2ZW50VHlwZSwgQWdncmVnYXRlUm9vdCwgS2V5TWFwIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBDaGFuZ2VTb3J0UGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4vc29ydC9jaGFuZ2Utc29ydC5wYXJhbXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IgfSBmcm9tICcuL3dpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jYWxjdWxhdG9yJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LXdpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vYXBpL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkNvbnRhaW5lciB9IGZyb20gJy4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmNvbnRhaW5lcic7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vbW92ZS9sZWZ0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1sZWZ0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLXJpZ2h0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW5zLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNyZWF0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY3JlYXRlL2NvbXBvc2l0aW9uLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEdyb3VwSWQgfSBmcm9tICcuLi9hcGkvZ3JvdXAvZ3JvdXAuaWQnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi9hcGkvZ3JvdXAvZ3JvdXAnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Hcm91cEZhY3RvcnkgfSBmcm9tICcuL2dyb3VwL2NvbXBvc2l0aW9uLmdyb3VwLmZhY3RvcnknO1xuaW1wb3J0IHsgZW1wdHlHcm91cCB9IGZyb20gJy4vZ3JvdXAvZW1wdHktZ3JvdXAnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8Q29tcG9zaXRpb25JZD4ge1xuXG5cdHByaXZhdGUgYWxsQ29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYmFzZUNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XG5cblx0cHJpdmF0ZSByZWFkb25seSBiYXNlUGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+O1xuXG5cdC8qKlxuXHQgKiBWYWx1ZSB0YWtlbiBmcm9tIHVzZXIgY29uZmlnIFt3aWR0aF1cblx0ICovXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIGNvbnRhaW5lckluRE9NV2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIHJlc2l6ZVdpZHRoRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5GYWN0b3J5OiBDb2x1bW5FbnRpdHlGYWN0b3J5O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JvdXBGYWN0b3J5OiBDb21wb3NpdGlvbkdyb3VwRmFjdG9yeTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbkNvbnRhaW5lcjogQWN0aXZlQ29sdW1uQ29udGFpbmVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyOiBBY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIgPSBuZXcgQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncm91cHM6IEtleU1hcDxHcm91cElkLCBHcm91cD4gPSBuZXcgS2V5TWFwKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5OYW1lVG9Hcm91cElkOiBNYXA8c3RyaW5nLCBHcm91cElkPiA9IG5ldyBNYXAoKTtcblxuXHRjb25zdHJ1Y3RvcihpZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29sdW1uRmFjdG9yeTogQ29sdW1uRW50aXR5RmFjdG9yeSxcblx0XHRcdFx0Z3JvdXBGYWN0b3J5OiBDb21wb3NpdGlvbkdyb3VwRmFjdG9yeSxcblx0XHRcdFx0Y29sdW1uc1BhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPiA9IFtdLFxuXHRcdFx0XHR3aWR0aD86IG51bWJlcixcblx0XHRcdFx0cmVzaXplV2lkdGg/OiBib29sZWFuKSB7XG5cdFx0c3VwZXIoaWQsICdDb21wb3NpdGlvbkFnZ3JlZ2F0ZScpO1xuXG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IGNvbHVtbnNQYXJhbXMubWFwKChwYXJhbSkgPT4gcGFyYW0uZ2V0Q29sdW1uKCkpO1xuXG5cdFx0dGhpcy5iYXNlUGFyYW1zID0gY29sdW1uc1BhcmFtcztcblx0XHR0aGlzLmJhc2VDb2x1bW5zID0gY29sdW1uQ29uZmlncztcblxuXHRcdHRoaXMuY29sdW1uRmFjdG9yeSA9IGNvbHVtbkZhY3Rvcnk7XG5cdFx0dGhpcy5ncm91cEZhY3RvcnkgPSBncm91cEZhY3Rvcnk7XG5cblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cblx0XHR0aGlzLmFsbENvbHVtbnMgPSB0aGlzLmNvbHVtbkZhY3RvcnkuY3JlYXRlKGNvbHVtbnNQYXJhbXMpO1xuXG5cdFx0Y29uc3QgYWN0aXZlQ29sdW1ucyA9IHRoaXMuYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyLmNvbnZlcnRNYW55KHRoaXMuZ2V0RW5hYmxlZENvbHVtbnMoKSk7XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lciA9IG5ldyBBY3RpdmVDb2x1bW5Db250YWluZXIodGhpcy5nZXRJZCgpLCBhY3RpdmVDb2x1bW5zLCB3aWR0aCwgY29sdW1uQ29uZmlncyk7XG5cblx0XHRpZiAocmVzaXplV2lkdGggIT09IHVuZGVmaW5lZCAmJiByZXNpemVXaWR0aCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5yZXNpemVXaWR0aEVuYWJsZWQgPSByZXNpemVXaWR0aDtcblx0XHR9XG5cblx0fVxuXG5cdGNyZWF0ZUV2ZW50KCk6IEFnZ3JlZ2F0ZUV2ZW50VHlwZTxBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPj4ge1xuXHRcdHJldHVybiBDb21wb3NpdGlvbkNyZWF0ZWRBZ2dyZWdhdGVFdmVudDtcblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnM7XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0Z2V0QWN0aXZlQ29sdW1ucygpOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuZ2V0Q29sdW1ucygpO1xuXHR9XG5cblx0Ly8gbWFrZSBwcml2YXRlXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cblx0XHRpZiAodGhpcy5yZXNpemVXaWR0aEVuYWJsZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lckluRE9NV2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRpc1Jlc2l6ZUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVzaXplV2lkdGhFbmFibGVkO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGlzUmVhZHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhdGhpcy5nZXRXaWR0aCgpICYmIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRzZXRHcm91cHMoY29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+KTogdm9pZCB7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZ3MubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0Y29uc3QgY29uZmlnID0gY29uZmlnc1tpXTtcblxuXHRcdFx0aWYgKChjb25maWcgYXMgTXVsdGlDb2x1bW5Db25maWcpLmNvbHVtbnMgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRcdGNvbnN0IGdyb3VwID0gdGhpcy5ncm91cEZhY3RvcnkuY3JlYXRlKGNvbmZpZyk7XG5cblx0XHRcdFx0dGhpcy5ncm91cHMuc2V0KGdyb3VwLmlkLCBncm91cCk7XG5cblx0XHRcdFx0KGNvbmZpZyBhcyBNdWx0aUNvbHVtbkNvbmZpZykuY29sdW1ucy5mb3JFYWNoKChjOiBDb2x1bW5Db25maWcsIGluZGV4OiBudW1iZXIpID0+IHtcblxuXHRcdFx0XHRcdHRoaXMuY29sdW1uTmFtZVRvR3JvdXBJZC5zZXQoYy5oZWFkZXIgYXMgc3RyaW5nLCBncm91cC5pZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jb2x1bW5OYW1lVG9Hcm91cElkLnNldChjb25maWcuaGVhZGVyIGFzIHN0cmluZywgZW1wdHlHcm91cC5pZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiB2b2lkIHtcblxuXHRcdHRoaXMuYWxsQ29sdW1ucyA9IHRoaXMuY29sdW1uRmFjdG9yeS5jcmVhdGUocGFyYW1zKTtcblxuXHRcdGNvbnN0IGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBwYXJhbXMubWFwKChwYXJhbTogQ29sdW1uUGFyYW1zKSA9PiBwYXJhbS5nZXRDb2x1bW4oKSk7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydE1hbnkodGhpcy5nZXRFbmFibGVkQ29sdW1ucygpKTtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldENvbHVtbnMoYWN0aXZlQ29sdW1ucywgY29sdW1uQ29uZmlncyk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpKSk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aChjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHR0aGlzLnNldENvbnRhaW5lcldpZHRoV2l0aEV2ZW50KGNvbnRhaW5lcldpZHRoKTtcblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRXaWR0aFdpdGhFdmVudCh3aWR0aCk7XG5cblx0XHR0aGlzLnNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGZhbHNlKTtcblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRzZXRSZXNpemVXaWR0aChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRSZXNpemVXaWR0aFdpdGhFdmVudChlbmFibGVkKTtcblx0fVxuXG5cdGNoYW5nZVNvcnQoc29ydFBhcmFtczogQXJyYXk8Q2hhbmdlU29ydFBhcmFtcz4pOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuY2hhbmdlU29ydChzb3J0UGFyYW1zKVxuXHRcdCk7XG5cdH1cblxuXHQvLyBERUxFR0FURVxuXHRlbmFibGVDb2x1bW4oY29sdW1uSWQ6IENvbHVtbklkLCBlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cblx0XHRsZXQgZW5hYmxlZEluZGV4ID0gLTE7XG5cblx0XHR0aGlzLmFsbENvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5FbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGlmIChjb2x1bW4uZ2V0SWQoKS5nZXRJZCgpID09PSBjb2x1bW5JZC5nZXRJZCgpKSB7XG5cblx0XHRcdFx0Y29uc3QgcHJldlN0YXRlID0gY29sdW1uLmlzRW5hYmxlZCgpO1xuXG5cdFx0XHRcdGNvbHVtbi5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXG5cdFx0XHRcdGlmIChwcmV2U3RhdGUgIT09IGVuYWJsZWQpIHtcblx0XHRcdFx0XHRlbmFibGVkSW5kZXggPSBpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKGVuYWJsZWRJbmRleCA+IDApIHtcblxuXHRcdFx0aWYgKGVuYWJsZWQpIHtcblxuXHRcdFx0XHQvLyBjb252ZXJ0XG5cdFx0XHRcdGNvbnN0IGNvbHVtblRvQWRkID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydCh0aGlzLmFsbENvbHVtbnNbZW5hYmxlZEluZGV4XSk7XG5cblx0XHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuYWRkQ29sdW1uKGNvbHVtblRvQWRkLCBlbmFibGVkSW5kZXgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIucmVtb3ZlQ29sdW1uKGVuYWJsZWRJbmRleCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKSlcblx0XHQpO1xuXHR9XG5cblx0bW92ZUxlZnQoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb2x1bW5JbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGNvbHVtbklkKTtcblxuXHRcdGxldCBuZXh0TGVmdCxcblx0XHRcdG5leHRMZWZ0SW5kZXggPSAtMTtcblxuXHRcdGZvciAobGV0IGkgPSBjb2x1bW5JbmRleCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG5cblx0XHRcdGNvbnN0IGxlZnRDb2x1bW4gPSB0aGlzLmFsbENvbHVtbnNbaV07XG5cblx0XHRcdGlmIChsZWZ0Q29sdW1uLmlzRW5hYmxlZCgpKSB7XG5cblx0XHRcdFx0bmV4dExlZnQgPSBsZWZ0Q29sdW1uO1xuXHRcdFx0XHRuZXh0TGVmdEluZGV4ID0gaTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG5leHRMZWZ0ICYmIG5leHRMZWZ0SW5kZXggPj0gMCAmJiBjb2x1bW5JbmRleCA+PSAwKSB7XG5cblx0XHRcdGxldCBjb2x1bW4gPSB0aGlzLmFsbENvbHVtbnNbY29sdW1uSW5kZXhdO1xuXG5cdFx0XHR0aGlzLmFsbENvbHVtbnNbY29sdW1uSW5kZXhdID0gbmV4dExlZnQ7XG5cdFx0XHR0aGlzLmFsbENvbHVtbnNbbmV4dExlZnRJbmRleF0gPSBjb2x1bW47XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIubW92ZUxlZnQoY29sdW1uSWQpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5nZXRBY3RpdmVDb2x1bW5zKCkpXG5cdFx0KTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbHVtbkluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoY29sdW1uSWQpO1xuXG5cdFx0bGV0IG5leHRSaWdodCxcblx0XHRcdG5leHRSaWdodEluZGV4ID0gLTE7XG5cblx0XHRmb3IgKGxldCBpID0gY29sdW1uSW5kZXggKyAxOyBpIDwgdGhpcy5hbGxDb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IHJpZ2h0Q29sdW1uID0gdGhpcy5hbGxDb2x1bW5zW2ldO1xuXG5cdFx0XHRpZiAocmlnaHRDb2x1bW4uaXNFbmFibGVkKCkpIHtcblxuXHRcdFx0XHRuZXh0UmlnaHQgPSByaWdodENvbHVtbjtcblx0XHRcdFx0bmV4dFJpZ2h0SW5kZXggPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobmV4dFJpZ2h0ICYmIG5leHRSaWdodEluZGV4ID49IDAgJiYgY29sdW1uSW5kZXggPj0gMCkge1xuXG5cdFx0XHRsZXQgY29sdW1uID0gdGhpcy5hbGxDb2x1bW5zW2NvbHVtbkluZGV4XTtcblxuXHRcdFx0dGhpcy5hbGxDb2x1bW5zW2NvbHVtbkluZGV4XSA9IG5leHRSaWdodDtcblx0XHRcdHRoaXMuYWxsQ29sdW1uc1tuZXh0UmlnaHRJbmRleF0gPSBjb2x1bW47XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIubW92ZVJpZ2h0KGNvbHVtbklkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWNhbGN1bGF0ZUNvbHVtbnMoKTogdm9pZCB7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydE1hbnkodGhpcy5nZXRFbmFibGVkQ29sdW1ucygpKTtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldENvbHVtbnMoYWN0aXZlQ29sdW1ucywgYWN0aXZlQ29sdW1ucy5tYXAoYyA9PiBjLmdldENvbHVtbkNvbmZpZygpKSk7XG5cdH1cblxuXHQvLyBUT0RPIFJlZmFjdG9yXG5cdHByaXZhdGUgc2V0V2lkdGhXaXRoRXZlbnQod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgY2FsY3VsYXRvciA9IG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvcih0aGlzLmdldE1pbkNvbHVtbldpZHRoKCkpO1xuXG5cdFx0Y29uc3QgbWluV2lkdGggPSBjYWxjdWxhdG9yLmNhbGN1bGF0ZU1pbldpZHRoKHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmdldENvbHVtbldpZHRocygpKTtcblxuXHRcdGlmIChtaW5XaWR0aCA+IHdpZHRoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gbWluV2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRXaWR0aCh0aGlzLmdldFdpZHRoKCkpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29tcG9zaXRpb25XaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSkpO1xuXHR9XG5cblx0Ly8gVE9ETyBSZWZhY3RvclxuXHRwcml2YXRlIHNldENvbnRhaW5lcldpZHRoV2l0aEV2ZW50KGNvbnRhaW5lcldpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IodGhpcy5nZXRNaW5Db2x1bW5XaWR0aCgpKTtcblxuXHRcdGNvbnN0IG1pbldpZHRoID0gY2FsY3VsYXRvci5jYWxjdWxhdGVNaW5XaWR0aCh0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRDb2x1bW5XaWR0aHMoKSk7XG5cblx0XHRpZiAobWluV2lkdGggPiBjb250YWluZXJXaWR0aCkge1xuXHRcdFx0dGhpcy5jb250YWluZXJJbkRPTVdpZHRoID0gbWluV2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29udGFpbmVySW5ET01XaWR0aCA9IGNvbnRhaW5lcldpZHRoO1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldFdpZHRoKHRoaXMuZ2V0V2lkdGgoKSk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBjb250YWluZXJXaWR0aCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRSZXNpemVXaWR0aFdpdGhFdmVudChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5yZXNpemVXaWR0aEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldFdpZHRoKHRoaXMuZ2V0V2lkdGgoKSk7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSkpO1xuXHR9XG5cblx0Ly8gUkVNT1ZFIC0+IG1vdmUgdG8gYWxsQ29sdW1uc0NvbnRhaW5lclxuXHRwcml2YXRlIGdldEVuYWJsZWRDb2x1bW5zKCk6IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnMuZmlsdGVyKGMgPT4gYy5pc0VuYWJsZWQoKSk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRDb2x1bW5JbmRleChjb2x1bW5JZDogQ29sdW1uSWQpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnMuZmluZEluZGV4KChjb2x1bW46IENvbHVtbkVudGl0eSkgPT4gY29sdW1uLmdldElkKCkuZXF1YWxzKGNvbHVtbklkKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldE1pbkNvbHVtbldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmdldE1pbkNvbHVtbldpZHRoKCk7XG5cdH1cbn1cbiJdfQ==