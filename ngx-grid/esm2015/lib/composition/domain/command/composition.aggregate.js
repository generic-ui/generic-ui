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
let CompositionAggregate = class CompositionAggregate extends Aggregate {
    /**
     * @param {?} id
     * @param {?=} columnsParams
     * @param {?=} width
     * @param {?=} resizeWidth
     */
    constructor(id, columnsParams = [], width, resizeWidth) {
        super(id, 'CompositionAggregate');
        this.allColumns = [];
        this.resizeWidthEnabled = true;
        /**
         * Autowired
         */
        this.columnFactory = new ColumnEntityFactory();
        this.activeColumnEntityConverter = new ActiveColumnEntityConverter();
        /** @type {?} */
        const columnConfigs = columnsParams.map((/**
         * @param {?} param
         * @return {?}
         */
        (param) => param.getColumn()));
        this.baseParams = columnsParams;
        this.baseColumns = columnConfigs;
        this.width = width;
        this.allColumns = this.columnFactory.create(columnsParams);
        /** @type {?} */
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer = new ActiveColumnContainer(this.getId(), activeColumns, width, columnConfigs);
        if (resizeWidth !== undefined && resizeWidth !== null) {
            this.resizeWidthEnabled = resizeWidth;
        }
    }
    // REMOVE
    /**
     * @return {?}
     */
    getColumns() {
        return this.allColumns;
    }
    // REMOVE
    /**
     * @return {?}
     */
    getActiveColumns() {
        return this.activeColumnContainer.getColumns();
    }
    // make private
    /**
     * @return {?}
     */
    getWidth() {
        if (this.resizeWidthEnabled) {
            return this.containerInDOMWidth;
        }
        else {
            return this.width;
        }
    }
    // REMOVE
    /**
     * @return {?}
     */
    isResizeEnabled() {
        return this.resizeWidthEnabled;
    }
    // REMOVE
    /**
     * @return {?}
     */
    isReady() {
        return !!this.getWidth() && this.getActiveColumns().length > 0;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    setColumns(params) {
        this.allColumns = this.columnFactory.create(params);
        /** @type {?} */
        const columnConfigs = params.map((/**
         * @param {?} param
         * @return {?}
         */
        (param) => param.getColumn()));
        /** @type {?} */
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, columnConfigs);
        this.addEvent(new ColumnsSetAggregateEvent(this.getId()));
    }
    /**
     * @param {?} containerWidth
     * @return {?}
     */
    setContainerWidth(containerWidth) {
        this.setContainerWidthWithEvent(containerWidth);
        this.recalculateColumns();
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.setWidthWithEvent(width);
        this.setResizeWidthWithEvent(false);
        this.recalculateColumns();
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setResizeWidth(enabled) {
        this.setResizeWidthWithEvent(enabled);
    }
    /**
     * @param {?} sortParams
     * @return {?}
     */
    changeSort(sortParams) {
        this.addEvent(this.activeColumnContainer.changeSort(sortParams));
    }
    // DELEGATE
    /**
     * @param {?} columnId
     * @param {?} enabled
     * @return {?}
     */
    enableColumn(columnId, enabled) {
        /** @type {?} */
        let enabledIndex = -1;
        this.allColumns.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
            if (column.getColumnId().getId() === columnId.getId()) {
                /** @type {?} */
                const prevState = column.isEnabled();
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
                const columnToAdd = this.activeColumnEntityConverter.convert(this.allColumns[enabledIndex]);
                this.activeColumnContainer.addColumn(columnToAdd, enabledIndex);
            }
            else {
                this.activeColumnContainer.removeColumn(enabledIndex);
            }
        }
        this.recalculateColumns();
        this.addEvent(new CompositionColumnSetEnabledAggregateEvent(this.getId(), this.getActiveColumns()));
    }
    /**
     * @param {?} columnId
     * @return {?}
     */
    moveLeft(columnId) {
        /** @type {?} */
        const columnIndex = this.findColumnIndex(columnId);
        /** @type {?} */
        let nextLeft;
        /** @type {?} */
        let nextLeftIndex = -1;
        for (let i = columnIndex - 1; i >= 0; i -= 1) {
            /** @type {?} */
            const leftColumn = this.allColumns[i];
            if (leftColumn.isEnabled()) {
                nextLeft = leftColumn;
                nextLeftIndex = i;
                break;
            }
        }
        if (nextLeft && nextLeftIndex >= 0 && columnIndex >= 0) {
            /** @type {?} */
            let column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextLeft;
            this.allColumns[nextLeftIndex] = column;
        }
        this.activeColumnContainer.moveLeft(columnId);
        this.addEvent(new CompositionColumnMovedLeftAggregateEvent(this.getId(), this.getActiveColumns()));
    }
    /**
     * @param {?} columnId
     * @return {?}
     */
    moveRight(columnId) {
        /** @type {?} */
        const columnIndex = this.findColumnIndex(columnId);
        /** @type {?} */
        let nextRight;
        /** @type {?} */
        let nextRightIndex = -1;
        for (let i = columnIndex + 1; i < this.allColumns.length; i += 1) {
            /** @type {?} */
            const rightColumn = this.allColumns[i];
            if (rightColumn.isEnabled()) {
                nextRight = rightColumn;
                nextRightIndex = i;
                break;
            }
        }
        if (nextRight && nextRightIndex >= 0 && columnIndex >= 0) {
            /** @type {?} */
            let column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextRight;
            this.allColumns[nextRightIndex] = column;
        }
        this.activeColumnContainer.moveRight(columnId);
        this.addEvent(new CompositionColumnMovedRightAggregateEvent(this.getId(), this.getActiveColumns()));
    }
    /**
     * @private
     * @return {?}
     */
    recalculateColumns() {
        /** @type {?} */
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, activeColumns.map((/**
         * @param {?} c
         * @return {?}
         */
        c => c.getConfig())));
    }
    // TODO Refactor
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    setWidthWithEvent(width) {
        /** @type {?} */
        const calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
        /** @type {?} */
        const minWidth = calculator.calculateMinWidth(this.activeColumnContainer.getColumnWidths());
        if (minWidth > width) {
            this.width = minWidth;
        }
        else {
            this.width = width;
        }
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionWidthSetAggregateEvent(this.getId()));
    }
    // TODO Refactor
    /**
     * @private
     * @param {?} containerWidth
     * @return {?}
     */
    setContainerWidthWithEvent(containerWidth) {
        /** @type {?} */
        const calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
        /** @type {?} */
        const minWidth = calculator.calculateMinWidth(this.activeColumnContainer.getColumnWidths());
        if (minWidth > containerWidth) {
            this.containerInDOMWidth = minWidth;
        }
        else {
            this.containerInDOMWidth = containerWidth;
        }
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionContainerWidthSetAggregateEvent(this.getId(), containerWidth));
    }
    /**
     * @private
     * @param {?} enabled
     * @return {?}
     */
    setResizeWidthWithEvent(enabled) {
        this.resizeWidthEnabled = enabled;
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionResizeWidthSetAggregateEvent(this.getId()));
    }
    // REMOVE -> move to allColumnsContainer
    /**
     * @private
     * @return {?}
     */
    getEnabledColumns() {
        return this.allColumns.filter((/**
         * @param {?} c
         * @return {?}
         */
        c => c.isEnabled()));
    }
    /**
     * @private
     * @param {?} columnId
     * @return {?}
     */
    findColumnIndex(columnId) {
        return this.allColumns.findIndex((/**
         * @param {?} column
         * @return {?}
         */
        (column) => column.getColumnId().equals(columnId)));
    }
    /**
     * @private
     * @return {?}
     */
    getMinColumnWidth() {
        return this.activeColumnContainer.getMinColumnWidth();
    }
};
CompositionAggregate.ctorParameters = () => [
    { type: AggregateId },
    { type: Array },
    { type: Number },
    { type: Boolean }
];
CompositionAggregate = tslib_1.__decorate([
    RootAggregate,
    tslib_1.__metadata("design:paramtypes", [AggregateId,
        Array, Number, Boolean])
], CompositionAggregate);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29tcG9zaXRpb24uYWdncmVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDNUcsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDekksT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFFNUgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDaEksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFaEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDN0YsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDNUgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDL0gsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7SUFJL0Usb0JBQW9CLFNBQXBCLG9CQUFxQixTQUFRLFNBQVM7Ozs7Ozs7SUEyQmxELFlBQVksRUFBZSxFQUN4QixnQkFBcUMsRUFBRSxFQUN2QyxLQUFjLEVBQ2QsV0FBcUI7UUFDdkIsS0FBSyxDQUFDLEVBQUUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBN0IzQixlQUFVLEdB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IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZSwgQWdncmVnYXRlSWQsIFJvb3RBZ2dyZWdhdGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLWVudGl0eS5mYWN0b3J5JztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuL2NvbHVtbi9zb3J0L2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvciB9IGZyb20gJy4vd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9yZXNpemUtd2lkdGgvY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkNvbnRhaW5lciB9IGZyb20gJy4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmNvbnRhaW5lcic7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vbW92ZS9sZWZ0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1sZWZ0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLXJpZ2h0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW5zLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbkBSb290QWdncmVnYXRlXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25BZ2dyZWdhdGUgZXh0ZW5kcyBBZ2dyZWdhdGUge1xuXG5cdHByaXZhdGUgYWxsQ29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYmFzZUNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XG5cblx0cHJpdmF0ZSByZWFkb25seSBiYXNlUGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+O1xuXG5cdC8qKlxuXHQgKiBWYWx1ZSB0YWtlbiBmcm9tIHVzZXIgY29uZmlnIFt3aWR0aF0vdHJlZS1jb250ZW50LmFzc2VydC50c1xuXG5cdCAqL1xuXHRwcml2YXRlIHdpZHRoOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBjb250YWluZXJJbkRPTVdpZHRoOiBudW1iZXI7XG5cblx0cHJpdmF0ZSByZXNpemVXaWR0aEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdC8qKlxuXHQgKiBBdXRvd2lyZWRcblx0ICovXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRmFjdG9yeTogQ29sdW1uRW50aXR5RmFjdG9yeSA9IG5ldyBDb2x1bW5FbnRpdHlGYWN0b3J5KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5Db250YWluZXI6IEFjdGl2ZUNvbHVtbkNvbnRhaW5lcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlcjogQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyID0gbmV3IEFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0Y29sdW1uc1BhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPiA9IFtdLFxuXHRcdFx0XHR3aWR0aD86IG51bWJlcixcblx0XHRcdFx0cmVzaXplV2lkdGg/OiBib29sZWFuKSB7XG5cdFx0c3VwZXIoaWQsICdDb21wb3NpdGlvbkFnZ3JlZ2F0ZScpO1xuXG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IGNvbHVtbnNQYXJhbXMubWFwKChwYXJhbSkgPT4gcGFyYW0uZ2V0Q29sdW1uKCkpO1xuXG5cdFx0dGhpcy5iYXNlUGFyYW1zID0gY29sdW1uc1BhcmFtcztcblx0XHR0aGlzLmJhc2VDb2x1bW5zID0gY29sdW1uQ29uZmlncztcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cblx0XHR0aGlzLmFsbENvbHVtbnMgPSB0aGlzLmNvbHVtbkZhY3RvcnkuY3JlYXRlKGNvbHVtbnNQYXJhbXMpO1xuXG5cdFx0Y29uc3QgYWN0aXZlQ29sdW1ucyA9IHRoaXMuYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyLmNvbnZlcnRNYW55KHRoaXMuZ2V0RW5hYmxlZENvbHVtbnMoKSk7XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lciA9IG5ldyBBY3RpdmVDb2x1bW5Db250YWluZXIodGhpcy5nZXRJZCgpLCBhY3RpdmVDb2x1bW5zLCB3aWR0aCwgY29sdW1uQ29uZmlncyk7XG5cblx0XHRpZiAocmVzaXplV2lkdGggIT09IHVuZGVmaW5lZCAmJiByZXNpemVXaWR0aCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5yZXNpemVXaWR0aEVuYWJsZWQgPSByZXNpemVXaWR0aDtcblx0XHR9XG5cblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnM7XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0Z2V0QWN0aXZlQ29sdW1ucygpOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuZ2V0Q29sdW1ucygpO1xuXHR9XG5cblx0Ly8gbWFrZSBwcml2YXRlXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cblx0XHRpZiAodGhpcy5yZXNpemVXaWR0aEVuYWJsZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lckluRE9NV2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRpc1Jlc2l6ZUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVzaXplV2lkdGhFbmFibGVkO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGlzUmVhZHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhdGhpcy5nZXRXaWR0aCgpICYmIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRzZXRDb2x1bW5zKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IHZvaWQge1xuXG5cdFx0dGhpcy5hbGxDb2x1bW5zID0gdGhpcy5jb2x1bW5GYWN0b3J5LmNyZWF0ZShwYXJhbXMpO1xuXG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IHBhcmFtcy5tYXAoKHBhcmFtOiBDb2x1bW5QYXJhbXMpID0+IHBhcmFtLmdldENvbHVtbigpKTtcblxuXHRcdGNvbnN0IGFjdGl2ZUNvbHVtbnMgPSB0aGlzLmFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlci5jb252ZXJ0TWFueSh0aGlzLmdldEVuYWJsZWRDb2x1bW5zKCkpO1xuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0Q29sdW1ucyhhY3RpdmVDb2x1bW5zLCBjb2x1bW5Db25maWdzKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbHVtbnNTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxuXG5cdHNldENvbnRhaW5lcldpZHRoKGNvbnRhaW5lcldpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2V0Q29udGFpbmVyV2lkdGhXaXRoRXZlbnQoY29udGFpbmVyV2lkdGgpO1xuXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNldFdpZHRoV2l0aEV2ZW50KHdpZHRoKTtcblxuXHRcdHRoaXMuc2V0UmVzaXplV2lkdGhXaXRoRXZlbnQoZmFsc2UpO1xuXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcblx0fVxuXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGVuYWJsZWQpO1xuXHR9XG5cblx0Y2hhbmdlU29ydChzb3J0UGFyYW1zOiBBcnJheTxDaGFuZ2VTb3J0UGFyYW1zPik6IHZvaWQge1xuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5jaGFuZ2VTb3J0KHNvcnRQYXJhbXMpXG5cdFx0KTtcblx0fVxuXG5cdC8vIERFTEVHQVRFXG5cdGVuYWJsZUNvbHVtbihjb2x1bW5JZDogQ29sdW1uSWQsIGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblxuXHRcdGxldCBlbmFibGVkSW5kZXggPSAtMTtcblxuXHRcdHRoaXMuYWxsQ29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkVudGl0eSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0aWYgKGNvbHVtbi5nZXRDb2x1bW5JZCgpLmdldElkKCkgPT09IGNvbHVtbklkLmdldElkKCkpIHtcblxuXHRcdFx0XHRjb25zdCBwcmV2U3RhdGUgPSBjb2x1bW4uaXNFbmFibGVkKCk7XG5cblx0XHRcdFx0Y29sdW1uLnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cblx0XHRcdFx0aWYgKHByZXZTdGF0ZSAhPT0gZW5hYmxlZCkge1xuXHRcdFx0XHRcdGVuYWJsZWRJbmRleCA9IGluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoZW5hYmxlZEluZGV4ID4gMCkge1xuXG5cdFx0XHRpZiAoZW5hYmxlZCkge1xuXG5cdFx0XHRcdC8vIGNvbnZlcnRcblx0XHRcdFx0Y29uc3QgY29sdW1uVG9BZGQgPSB0aGlzLmFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlci5jb252ZXJ0KHRoaXMuYWxsQ29sdW1uc1tlbmFibGVkSW5kZXhdKTtcblxuXHRcdFx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5hZGRDb2x1bW4oY29sdW1uVG9BZGQsIGVuYWJsZWRJbmRleCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5yZW1vdmVDb2x1bW4oZW5hYmxlZEluZGV4KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnJlY2FsY3VsYXRlQ29sdW1ucygpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpKVxuXHRcdCk7XG5cdH1cblxuXHRtb3ZlTGVmdChjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbHVtbkluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoY29sdW1uSWQpO1xuXG5cdFx0bGV0IG5leHRMZWZ0LFxuXHRcdFx0bmV4dExlZnRJbmRleCA9IC0xO1xuXG5cdFx0Zm9yIChsZXQgaSA9IGNvbHVtbkluZGV4IC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcblxuXHRcdFx0Y29uc3QgbGVmdENvbHVtbiA9IHRoaXMuYWxsQ29sdW1uc1tpXTtcblxuXHRcdFx0aWYgKGxlZnRDb2x1bW4uaXNFbmFibGVkKCkpIHtcblxuXHRcdFx0XHRuZXh0TGVmdCA9IGxlZnRDb2x1bW47XG5cdFx0XHRcdG5leHRMZWZ0SW5kZXggPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobmV4dExlZnQgJiYgbmV4dExlZnRJbmRleCA+PSAwICYmIGNvbHVtbkluZGV4ID49IDApIHtcblxuXHRcdFx0bGV0IGNvbHVtbiA9IHRoaXMuYWxsQ29sdW1uc1tjb2x1bW5JbmRleF07XG5cblx0XHRcdHRoaXMuYWxsQ29sdW1uc1tjb2x1bW5JbmRleF0gPSBuZXh0TGVmdDtcblx0XHRcdHRoaXMuYWxsQ29sdW1uc1tuZXh0TGVmdEluZGV4XSA9IGNvbHVtbjtcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5tb3ZlTGVmdChjb2x1bW5JZCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKSlcblx0XHQpO1xuXHR9XG5cblx0bW92ZVJpZ2h0KGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29sdW1uSW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChjb2x1bW5JZCk7XG5cblx0XHRsZXQgbmV4dFJpZ2h0LFxuXHRcdFx0bmV4dFJpZ2h0SW5kZXggPSAtMTtcblxuXHRcdGZvciAobGV0IGkgPSBjb2x1bW5JbmRleCArIDE7IGkgPCB0aGlzLmFsbENvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0Y29uc3QgcmlnaHRDb2x1bW4gPSB0aGlzLmFsbENvbHVtbnNbaV07XG5cblx0XHRcdGlmIChyaWdodENvbHVtbi5pc0VuYWJsZWQoKSkge1xuXG5cdFx0XHRcdG5leHRSaWdodCA9IHJpZ2h0Q29sdW1uO1xuXHRcdFx0XHRuZXh0UmlnaHRJbmRleCA9IGk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChuZXh0UmlnaHQgJiYgbmV4dFJpZ2h0SW5kZXggPj0gMCAmJiBjb2x1bW5JbmRleCA+PSAwKSB7XG5cblx0XHRcdGxldCBjb2x1bW4gPSB0aGlzLmFsbENvbHVtbnNbY29sdW1uSW5kZXhdO1xuXG5cdFx0XHR0aGlzLmFsbENvbHVtbnNbY29sdW1uSW5kZXhdID0gbmV4dFJpZ2h0O1xuXHRcdFx0dGhpcy5hbGxDb2x1bW5zW25leHRSaWdodEluZGV4XSA9IGNvbHVtbjtcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5tb3ZlUmlnaHQoY29sdW1uSWQpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpKVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlQ29sdW1ucygpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFjdGl2ZUNvbHVtbnMgPSB0aGlzLmFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlci5jb252ZXJ0TWFueSh0aGlzLmdldEVuYWJsZWRDb2x1bW5zKCkpO1xuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0Q29sdW1ucyhhY3RpdmVDb2x1bW5zLCBhY3RpdmVDb2x1bW5zLm1hcChjID0+IGMuZ2V0Q29uZmlnKCkpKTtcblx0fVxuXG5cdC8vIFRPRE8gUmVmYWN0b3Jcblx0cHJpdmF0ZSBzZXRXaWR0aFdpdGhFdmVudCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBjYWxjdWxhdG9yID0gbmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yKHRoaXMuZ2V0TWluQ29sdW1uV2lkdGgoKSk7XG5cblx0XHRjb25zdCBtaW5XaWR0aCA9IGNhbGN1bGF0b3IuY2FsY3VsYXRlTWluV2lkdGgodGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuZ2V0Q29sdW1uV2lkdGhzKCkpO1xuXG5cdFx0aWYgKG1pbldpZHRoID4gd2lkdGgpIHtcblx0XHRcdHRoaXMud2lkdGggPSBtaW5XaWR0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldFdpZHRoKHRoaXMuZ2V0V2lkdGgoKSk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb21wb3NpdGlvbldpZHRoU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpKSk7XG5cdH1cblxuXHQvLyBUT0RPIFJlZmFjdG9yXG5cdHByaXZhdGUgc2V0Q29udGFpbmVyV2lkdGhXaXRoRXZlbnQoY29udGFpbmVyV2lkdGg6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgY2FsY3VsYXRvciA9IG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvcih0aGlzLmdldE1pbkNvbHVtbldpZHRoKCkpO1xuXG5cdFx0Y29uc3QgbWluV2lkdGggPSBjYWxjdWxhdG9yLmNhbGN1bGF0ZU1pbldpZHRoKHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmdldENvbHVtbldpZHRocygpKTtcblxuXHRcdGlmIChtaW5XaWR0aCA+IGNvbnRhaW5lcldpZHRoKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lckluRE9NV2lkdGggPSBtaW5XaWR0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb250YWluZXJJbkRPTVdpZHRoID0gY29udGFpbmVyV2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0V2lkdGgodGhpcy5nZXRXaWR0aCgpKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIGNvbnRhaW5lcldpZHRoKSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0V2lkdGgodGhpcy5nZXRXaWR0aCgpKTtcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpKSk7XG5cdH1cblxuXHQvLyBSRU1PVkUgLT4gbW92ZSB0byBhbGxDb2x1bW5zQ29udGFpbmVyXG5cdHByaXZhdGUgZ2V0RW5hYmxlZENvbHVtbnMoKTogQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucy5maWx0ZXIoYyA9PiBjLmlzRW5hYmxlZCgpKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZENvbHVtbkluZGV4KGNvbHVtbklkOiBDb2x1bW5JZCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucy5maW5kSW5kZXgoKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiBjb2x1bW4uZ2V0Q29sdW1uSWQoKS5lcXVhbHMoY29sdW1uSWQpKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0TWluQ29sdW1uV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuZ2V0TWluQ29sdW1uV2lkdGgoKTtcblx0fVxufVxuIl19