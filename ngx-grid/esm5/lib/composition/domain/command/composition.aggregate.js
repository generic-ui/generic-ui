/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Aggregate, AggregateId, RootAggregate } from '@generic-ui/hermes';
import { ColumnEntityFactory } from './column/column-entity.factory';
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
    function CompositionAggregate(id, columnsParams, width, resizeWidth) {
        if (columnsParams === void 0) { columnsParams = []; }
        var _this = _super.call(this, id, 'CompositionAggregate') || this;
        _this.allColumns = [];
        _this.resizeWidthEnabled = true;
        /**
         * Autowired
         */
        _this.columnFactory = new ColumnEntityFactory();
        _this.activeColumnEntityConverter = new ActiveColumnEntityConverter();
        /** @type {?} */
        var columnConfigs = columnsParams.map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) { return param.getColumn(); }));
        _this.baseParams = columnsParams;
        _this.baseColumns = columnConfigs;
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
            if (column.getColumnId().getId() === columnId.getId()) {
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
        function (c) { return c.getConfig(); })));
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
        function (column) { return column.getColumnId().equals(columnId); }));
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
    CompositionAggregate.ctorParameters = function () { return [
        { type: AggregateId },
        { type: Array },
        { type: Number },
        { type: Boolean }
    ]; };
    CompositionAggregate = tslib_1.__decorate([
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
     * Value taken from user config [width]/tree-content.assert.ts
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
     * Autowired
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29tcG9zaXRpb24uYWdncmVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDNUcsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDekksT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFFNUgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDaEksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFaEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDN0YsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDNUgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDL0gsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7O0lBSWxELGdEQUFTO0lBMkJsRCw4QkFBWSxFQUFlLEVBQ3hCLGFBQXVDLEVBQ3ZDLEtBQWMsRUFDZCxXQUFxQjtRQUZyQiw4QkFBQSxFQUFBLGtCQUF1QztRQUQxQyxZQUlDLGtCQUFNLEVBQUUsRUFBRSxzQkFBc0IsQ0FBQyxTQWtCakM7UUEvQ08sZ0JBQVUsR0FBd0IsRUFB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cUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZELENBQUM7O2dCQWxRZSxXQUFXO2dCQUNULEtBQUs7Ozs7SUE1Qlgsb0JBQW9CO1FBRGhDLGFBQWE7aURBNEJHLFdBQVc7WUFDVCxLQUFLO09BNUJYLG9CQUFvQixDQThSaEM7SUFBRCwyQkFBQztDQUFBLENBOVJ5QyxTQUFTLEdBOFJsRDtTQTlSWSxvQkFBb0I7Ozs7OztJQUVoQywwQ0FBNkM7Ozs7O0lBRTdDLDJDQUFrRDs7Ozs7SUFFbEQsMENBQWlEOzs7Ozs7SUFNakQscUNBQXNCOzs7OztJQUV0QixtREFBb0M7Ozs7O0lBRXBDLGtEQUEyQzs7Ozs7O0lBSzNDLDZDQUFnRjs7Ozs7SUFFaEYscURBQThEOzs7OztJQUU5RCwyREFBOEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGUsIEFnZ3JlZ2F0ZUlkLCBSb290QWdncmVnYXRlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBDaGFuZ2VTb3J0UGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4vc29ydC9jaGFuZ2Utc29ydC5wYXJhbXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IgfSBmcm9tICcuL3dpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jYWxjdWxhdG9yJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LXdpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5Db250YWluZXIgfSBmcm9tICcuL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5jb250YWluZXInO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlciB9IGZyb20gJy4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtbGVmdC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1yaWdodC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1ucy1zZXQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5AUm9vdEFnZ3JlZ2F0ZVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlIHtcblxuXHRwcml2YXRlIGFsbENvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4gPSBbXTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJhc2VDb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYmFzZVBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPjtcblxuXHQvKipcblx0ICogVmFsdWUgdGFrZW4gZnJvbSB1c2VyIGNvbmZpZyBbd2lkdGhdL3RyZWUtY29udGVudC5hc3NlcnQudHNcblxuXHQgKi9cblx0cHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuXG5cdHByaXZhdGUgY29udGFpbmVySW5ET01XaWR0aDogbnVtYmVyO1xuXG5cdHByaXZhdGUgcmVzaXplV2lkdGhFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHQvKipcblx0ICogQXV0b3dpcmVkXG5cdCAqL1xuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkZhY3Rvcnk6IENvbHVtbkVudGl0eUZhY3RvcnkgPSBuZXcgQ29sdW1uRW50aXR5RmFjdG9yeSgpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uQ29udGFpbmVyOiBBY3RpdmVDb2x1bW5Db250YWluZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXI6IEFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlciA9IG5ldyBBY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIoKTtcblxuXHRjb25zdHJ1Y3RvcihpZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdGNvbHVtbnNQYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4gPSBbXSxcblx0XHRcdFx0d2lkdGg/OiBudW1iZXIsXG5cdFx0XHRcdHJlc2l6ZVdpZHRoPzogYm9vbGVhbikge1xuXHRcdHN1cGVyKGlkLCAnQ29tcG9zaXRpb25BZ2dyZWdhdGUnKTtcblxuXHRcdGNvbnN0IGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBjb2x1bW5zUGFyYW1zLm1hcCgocGFyYW0pID0+IHBhcmFtLmdldENvbHVtbigpKTtcblxuXHRcdHRoaXMuYmFzZVBhcmFtcyA9IGNvbHVtbnNQYXJhbXM7XG5cdFx0dGhpcy5iYXNlQ29sdW1ucyA9IGNvbHVtbkNvbmZpZ3M7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXG5cdFx0dGhpcy5hbGxDb2x1bW5zID0gdGhpcy5jb2x1bW5GYWN0b3J5LmNyZWF0ZShjb2x1bW5zUGFyYW1zKTtcblxuXHRcdGNvbnN0IGFjdGl2ZUNvbHVtbnMgPSB0aGlzLmFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlci5jb252ZXJ0TWFueSh0aGlzLmdldEVuYWJsZWRDb2x1bW5zKCkpO1xuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIgPSBuZXcgQWN0aXZlQ29sdW1uQ29udGFpbmVyKHRoaXMuZ2V0SWQoKSwgYWN0aXZlQ29sdW1ucywgd2lkdGgsIGNvbHVtbkNvbmZpZ3MpO1xuXG5cdFx0aWYgKHJlc2l6ZVdpZHRoICE9PSB1bmRlZmluZWQgJiYgcmVzaXplV2lkdGggIT09IG51bGwpIHtcblx0XHRcdHRoaXMucmVzaXplV2lkdGhFbmFibGVkID0gcmVzaXplV2lkdGg7XG5cdFx0fVxuXG5cdH1cblxuXHQvLyBSRU1PVkVcblx0Z2V0Q29sdW1ucygpOiBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGdldEFjdGl2ZUNvbHVtbnMoKTogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmdldENvbHVtbnMoKTtcblx0fVxuXG5cdC8vIG1ha2UgcHJpdmF0ZVxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXG5cdFx0aWYgKHRoaXMucmVzaXplV2lkdGhFbmFibGVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb250YWluZXJJbkRPTVdpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0XHR9XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0aXNSZXNpemVFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZDtcblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRpc1JlYWR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMuZ2V0V2lkdGgoKSAmJiB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKS5sZW5ndGggPiAwO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiB2b2lkIHtcblxuXHRcdHRoaXMuYWxsQ29sdW1ucyA9IHRoaXMuY29sdW1uRmFjdG9yeS5jcmVhdGUocGFyYW1zKTtcblxuXHRcdGNvbnN0IGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBwYXJhbXMubWFwKChwYXJhbTogQ29sdW1uUGFyYW1zKSA9PiBwYXJhbS5nZXRDb2x1bW4oKSk7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydE1hbnkodGhpcy5nZXRFbmFibGVkQ29sdW1ucygpKTtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldENvbHVtbnMoYWN0aXZlQ29sdW1ucywgY29sdW1uQ29uZmlncyk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpKSk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aChjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHR0aGlzLnNldENvbnRhaW5lcldpZHRoV2l0aEV2ZW50KGNvbnRhaW5lcldpZHRoKTtcblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRXaWR0aFdpdGhFdmVudCh3aWR0aCk7XG5cblx0XHR0aGlzLnNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGZhbHNlKTtcblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRzZXRSZXNpemVXaWR0aChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRSZXNpemVXaWR0aFdpdGhFdmVudChlbmFibGVkKTtcblx0fVxuXG5cdGNoYW5nZVNvcnQoc29ydFBhcmFtczogQXJyYXk8Q2hhbmdlU29ydFBhcmFtcz4pOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuY2hhbmdlU29ydChzb3J0UGFyYW1zKVxuXHRcdCk7XG5cdH1cblxuXHQvLyBERUxFR0FURVxuXHRlbmFibGVDb2x1bW4oY29sdW1uSWQ6IENvbHVtbklkLCBlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cblx0XHRsZXQgZW5hYmxlZEluZGV4ID0gLTE7XG5cblx0XHR0aGlzLmFsbENvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5FbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGlmIChjb2x1bW4uZ2V0Q29sdW1uSWQoKS5nZXRJZCgpID09PSBjb2x1bW5JZC5nZXRJZCgpKSB7XG5cblx0XHRcdFx0Y29uc3QgcHJldlN0YXRlID0gY29sdW1uLmlzRW5hYmxlZCgpO1xuXG5cdFx0XHRcdGNvbHVtbi5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXG5cdFx0XHRcdGlmIChwcmV2U3RhdGUgIT09IGVuYWJsZWQpIHtcblx0XHRcdFx0XHRlbmFibGVkSW5kZXggPSBpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKGVuYWJsZWRJbmRleCA+IDApIHtcblxuXHRcdFx0aWYgKGVuYWJsZWQpIHtcblxuXHRcdFx0XHQvLyBjb252ZXJ0XG5cdFx0XHRcdGNvbnN0IGNvbHVtblRvQWRkID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydCh0aGlzLmFsbENvbHVtbnNbZW5hYmxlZEluZGV4XSk7XG5cblx0XHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuYWRkQ29sdW1uKGNvbHVtblRvQWRkLCBlbmFibGVkSW5kZXgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIucmVtb3ZlQ29sdW1uKGVuYWJsZWRJbmRleCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKSlcblx0XHQpO1xuXHR9XG5cblx0bW92ZUxlZnQoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb2x1bW5JbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGNvbHVtbklkKTtcblxuXHRcdGxldCBuZXh0TGVmdCxcblx0XHRcdG5leHRMZWZ0SW5kZXggPSAtMTtcblxuXHRcdGZvciAobGV0IGkgPSBjb2x1bW5JbmRleCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG5cblx0XHRcdGNvbnN0IGxlZnRDb2x1bW4gPSB0aGlzLmFsbENvbHVtbnNbaV07XG5cblx0XHRcdGlmIChsZWZ0Q29sdW1uLmlzRW5hYmxlZCgpKSB7XG5cblx0XHRcdFx0bmV4dExlZnQgPSBsZWZ0Q29sdW1uO1xuXHRcdFx0XHRuZXh0TGVmdEluZGV4ID0gaTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG5leHRMZWZ0ICYmIG5leHRMZWZ0SW5kZXggPj0gMCAmJiBjb2x1bW5JbmRleCA+PSAwKSB7XG5cblx0XHRcdGxldCBjb2x1bW4gPSB0aGlzLmFsbENvbHVtbnNbY29sdW1uSW5kZXhdO1xuXG5cdFx0XHR0aGlzLmFsbENvbHVtbnNbY29sdW1uSW5kZXhdID0gbmV4dExlZnQ7XG5cdFx0XHR0aGlzLmFsbENvbHVtbnNbbmV4dExlZnRJbmRleF0gPSBjb2x1bW47XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIubW92ZUxlZnQoY29sdW1uSWQpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5nZXRBY3RpdmVDb2x1bW5zKCkpXG5cdFx0KTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbHVtbkluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoY29sdW1uSWQpO1xuXG5cdFx0bGV0IG5leHRSaWdodCxcblx0XHRcdG5leHRSaWdodEluZGV4ID0gLTE7XG5cblx0XHRmb3IgKGxldCBpID0gY29sdW1uSW5kZXggKyAxOyBpIDwgdGhpcy5hbGxDb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IHJpZ2h0Q29sdW1uID0gdGhpcy5hbGxDb2x1bW5zW2ldO1xuXG5cdFx0XHRpZiAocmlnaHRDb2x1bW4uaXNFbmFibGVkKCkpIHtcblxuXHRcdFx0XHRuZXh0UmlnaHQgPSByaWdodENvbHVtbjtcblx0XHRcdFx0bmV4dFJpZ2h0SW5kZXggPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobmV4dFJpZ2h0ICYmIG5leHRSaWdodEluZGV4ID49IDAgJiYgY29sdW1uSW5kZXggPj0gMCkge1xuXG5cdFx0XHRsZXQgY29sdW1uID0gdGhpcy5hbGxDb2x1bW5zW2NvbHVtbkluZGV4XTtcblxuXHRcdFx0dGhpcy5hbGxDb2x1bW5zW2NvbHVtbkluZGV4XSA9IG5leHRSaWdodDtcblx0XHRcdHRoaXMuYWxsQ29sdW1uc1tuZXh0UmlnaHRJbmRleF0gPSBjb2x1bW47XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIubW92ZVJpZ2h0KGNvbHVtbklkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWNhbGN1bGF0ZUNvbHVtbnMoKTogdm9pZCB7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydE1hbnkodGhpcy5nZXRFbmFibGVkQ29sdW1ucygpKTtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldENvbHVtbnMoYWN0aXZlQ29sdW1ucywgYWN0aXZlQ29sdW1ucy5tYXAoYyA9PiBjLmdldENvbmZpZygpKSk7XG5cdH1cblxuXHQvLyBUT0RPIFJlZmFjdG9yXG5cdHByaXZhdGUgc2V0V2lkdGhXaXRoRXZlbnQod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgY2FsY3VsYXRvciA9IG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvcih0aGlzLmdldE1pbkNvbHVtbldpZHRoKCkpO1xuXG5cdFx0Y29uc3QgbWluV2lkdGggPSBjYWxjdWxhdG9yLmNhbGN1bGF0ZU1pbldpZHRoKHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmdldENvbHVtbldpZHRocygpKTtcblxuXHRcdGlmIChtaW5XaWR0aCA+IHdpZHRoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gbWluV2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRXaWR0aCh0aGlzLmdldFdpZHRoKCkpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29tcG9zaXRpb25XaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSkpO1xuXHR9XG5cblx0Ly8gVE9ETyBSZWZhY3RvclxuXHRwcml2YXRlIHNldENvbnRhaW5lcldpZHRoV2l0aEV2ZW50KGNvbnRhaW5lcldpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IodGhpcy5nZXRNaW5Db2x1bW5XaWR0aCgpKTtcblxuXHRcdGNvbnN0IG1pbldpZHRoID0gY2FsY3VsYXRvci5jYWxjdWxhdGVNaW5XaWR0aCh0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRDb2x1bW5XaWR0aHMoKSk7XG5cblx0XHRpZiAobWluV2lkdGggPiBjb250YWluZXJXaWR0aCkge1xuXHRcdFx0dGhpcy5jb250YWluZXJJbkRPTVdpZHRoID0gbWluV2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29udGFpbmVySW5ET01XaWR0aCA9IGNvbnRhaW5lcldpZHRoO1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldFdpZHRoKHRoaXMuZ2V0V2lkdGgoKSk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBjb250YWluZXJXaWR0aCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRSZXNpemVXaWR0aFdpdGhFdmVudChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5yZXNpemVXaWR0aEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldFdpZHRoKHRoaXMuZ2V0V2lkdGgoKSk7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSkpO1xuXHR9XG5cblx0Ly8gUkVNT1ZFIC0+IG1vdmUgdG8gYWxsQ29sdW1uc0NvbnRhaW5lclxuXHRwcml2YXRlIGdldEVuYWJsZWRDb2x1bW5zKCk6IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnMuZmlsdGVyKGMgPT4gYy5pc0VuYWJsZWQoKSk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRDb2x1bW5JbmRleChjb2x1bW5JZDogQ29sdW1uSWQpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnMuZmluZEluZGV4KChjb2x1bW46IENvbHVtbkVudGl0eSkgPT4gY29sdW1uLmdldENvbHVtbklkKCkuZXF1YWxzKGNvbHVtbklkKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldE1pbkNvbHVtbldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmdldE1pbkNvbHVtbldpZHRoKCk7XG5cdH1cbn1cbiJdfQ==