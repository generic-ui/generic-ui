/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class CompositionAggregate extends AggregateRoot {
    /**
     * @param {?} id
     * @param {?} columnFactory
     * @param {?=} columnsParams
     * @param {?=} width
     * @param {?=} resizeWidth
     */
    constructor(id, columnFactory, columnsParams = [], width, resizeWidth) {
        super(id, 'CompositionAggregate');
        this.allColumns = [];
        this.resizeWidthEnabled = true;
        this.activeColumnEntityConverter = new ActiveColumnEntityConverter();
        /** @type {?} */
        const columnConfigs = columnsParams.map((/**
         * @param {?} param
         * @return {?}
         */
        (param) => param.getColumn()));
        this.baseParams = columnsParams;
        this.baseColumns = columnConfigs;
        this.columnFactory = columnFactory;
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
            if (column.getId().getId() === columnId.getId()) {
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
        c => c.getColumnConfig())));
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
        (column) => column.getId().equals(columnId)));
    }
    /**
     * @private
     * @return {?}
     */
    getMinColumnWidth() {
        return this.activeColumnContainer.getMinColumnWidth();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT2hFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBQ3pJLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBRTVILE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWhGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzVILE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQy9ILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSTVGLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxhQUE0Qjs7Ozs7Ozs7SUF1QnJFLFlBQVksRUFBZSxFQUN4QixhQUFrQyxFQUNsQyxnQkFBcUMsRUFBRSxFQUN2QyxLQUFjLEVBQ2QsV0FBcUI7UUFDdkIsS0FBSyxDQUFDLEVBQUUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBMUIzQixlQUFVLEdBQXdCLEVBQUUsQ0FBQztRQWFyQyx1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFNMUIsZ0NBQTJCLEdBQWdDLElB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QUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVDQUF1QyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Ozs7O0lBR08saUJBQWlCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsUUFBa0I7UUFDekMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQztJQUM3RixDQUFDOzs7OztJQUVPLGlCQUFpQjtRQUN4QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZELENBQUM7Q0FDRDs7Ozs7O0lBNVJBLDBDQUE2Qzs7Ozs7SUFFN0MsMkNBQWtEOzs7OztJQUVsRCwwQ0FBaUQ7Ozs7OztJQUtqRCxxQ0FBc0I7Ozs7O0lBRXRCLG1EQUFvQzs7Ozs7SUFFcEMsa0RBQTJDOzs7OztJQUUzQyw2Q0FBb0Q7Ozs7O0lBRXBELHFEQUE4RDs7Ozs7SUFFOUQsMkRBQThHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLWVudGl0eS5mYWN0b3J5JztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuL2NvbHVtbi9zb3J0L2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvciB9IGZyb20gJy4vd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9yZXNpemUtd2lkdGgvY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkNvbnRhaW5lciB9IGZyb20gJy4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmNvbnRhaW5lcic7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vbW92ZS9sZWZ0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1sZWZ0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLXJpZ2h0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW5zLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4vY29tcG9zaXRpb24uaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8Q29tcG9zaXRpb25JZD4ge1xuXG5cdHByaXZhdGUgYWxsQ29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYmFzZUNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XG5cblx0cHJpdmF0ZSByZWFkb25seSBiYXNlUGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+O1xuXG5cdC8qKlxuXHQgKiBWYWx1ZSB0YWtlbiBmcm9tIHVzZXIgY29uZmlnIFt3aWR0aF1cblx0ICovXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIGNvbnRhaW5lckluRE9NV2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIHJlc2l6ZVdpZHRoRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5GYWN0b3J5OiBDb2x1bW5FbnRpdHlGYWN0b3J5O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uQ29udGFpbmVyOiBBY3RpdmVDb2x1bW5Db250YWluZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXI6IEFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlciA9IG5ldyBBY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIoKTtcblxuXHRjb25zdHJ1Y3RvcihpZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdGNvbHVtbkZhY3Rvcnk6IENvbHVtbkVudGl0eUZhY3RvcnksXG5cdFx0XHRcdGNvbHVtbnNQYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4gPSBbXSxcblx0XHRcdFx0d2lkdGg/OiBudW1iZXIsXG5cdFx0XHRcdHJlc2l6ZVdpZHRoPzogYm9vbGVhbikge1xuXHRcdHN1cGVyKGlkLCAnQ29tcG9zaXRpb25BZ2dyZWdhdGUnKTtcblxuXHRcdGNvbnN0IGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBjb2x1bW5zUGFyYW1zLm1hcCgocGFyYW0pID0+IHBhcmFtLmdldENvbHVtbigpKTtcblxuXHRcdHRoaXMuYmFzZVBhcmFtcyA9IGNvbHVtbnNQYXJhbXM7XG5cdFx0dGhpcy5iYXNlQ29sdW1ucyA9IGNvbHVtbkNvbmZpZ3M7XG5cblx0XHR0aGlzLmNvbHVtbkZhY3RvcnkgPSBjb2x1bW5GYWN0b3J5O1xuXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXG5cdFx0dGhpcy5hbGxDb2x1bW5zID0gdGhpcy5jb2x1bW5GYWN0b3J5LmNyZWF0ZShjb2x1bW5zUGFyYW1zKTtcblxuXHRcdGNvbnN0IGFjdGl2ZUNvbHVtbnMgPSB0aGlzLmFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlci5jb252ZXJ0TWFueSh0aGlzLmdldEVuYWJsZWRDb2x1bW5zKCkpO1xuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIgPSBuZXcgQWN0aXZlQ29sdW1uQ29udGFpbmVyKHRoaXMuZ2V0SWQoKSwgYWN0aXZlQ29sdW1ucywgd2lkdGgsIGNvbHVtbkNvbmZpZ3MpO1xuXG5cdFx0aWYgKHJlc2l6ZVdpZHRoICE9PSB1bmRlZmluZWQgJiYgcmVzaXplV2lkdGggIT09IG51bGwpIHtcblx0XHRcdHRoaXMucmVzaXplV2lkdGhFbmFibGVkID0gcmVzaXplV2lkdGg7XG5cdFx0fVxuXG5cdH1cblxuXHQvLyBSRU1PVkVcblx0Z2V0Q29sdW1ucygpOiBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGdldEFjdGl2ZUNvbHVtbnMoKTogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmdldENvbHVtbnMoKTtcblx0fVxuXG5cdC8vIG1ha2UgcHJpdmF0ZVxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXG5cdFx0aWYgKHRoaXMucmVzaXplV2lkdGhFbmFibGVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb250YWluZXJJbkRPTVdpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0XHR9XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0aXNSZXNpemVFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZDtcblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRpc1JlYWR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMuZ2V0V2lkdGgoKSAmJiB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKS5sZW5ndGggPiAwO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiB2b2lkIHtcblxuXHRcdHRoaXMuYWxsQ29sdW1ucyA9IHRoaXMuY29sdW1uRmFjdG9yeS5jcmVhdGUocGFyYW1zKTtcblxuXHRcdGNvbnN0IGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBwYXJhbXMubWFwKChwYXJhbTogQ29sdW1uUGFyYW1zKSA9PiBwYXJhbS5nZXRDb2x1bW4oKSk7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydE1hbnkodGhpcy5nZXRFbmFibGVkQ29sdW1ucygpKTtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldENvbHVtbnMoYWN0aXZlQ29sdW1ucywgY29sdW1uQ29uZmlncyk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpKSk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aChjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHR0aGlzLnNldENvbnRhaW5lcldpZHRoV2l0aEV2ZW50KGNvbnRhaW5lcldpZHRoKTtcblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRXaWR0aFdpdGhFdmVudCh3aWR0aCk7XG5cblx0XHR0aGlzLnNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGZhbHNlKTtcblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRzZXRSZXNpemVXaWR0aChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRSZXNpemVXaWR0aFdpdGhFdmVudChlbmFibGVkKTtcblx0fVxuXG5cdGNoYW5nZVNvcnQoc29ydFBhcmFtczogQXJyYXk8Q2hhbmdlU29ydFBhcmFtcz4pOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuY2hhbmdlU29ydChzb3J0UGFyYW1zKVxuXHRcdCk7XG5cdH1cblxuXHQvLyBERUxFR0FURVxuXHRlbmFibGVDb2x1bW4oY29sdW1uSWQ6IENvbHVtbklkLCBlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cblx0XHRsZXQgZW5hYmxlZEluZGV4ID0gLTE7XG5cblx0XHR0aGlzLmFsbENvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5FbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGlmIChjb2x1bW4uZ2V0SWQoKS5nZXRJZCgpID09PSBjb2x1bW5JZC5nZXRJZCgpKSB7XG5cblx0XHRcdFx0Y29uc3QgcHJldlN0YXRlID0gY29sdW1uLmlzRW5hYmxlZCgpO1xuXG5cdFx0XHRcdGNvbHVtbi5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXG5cdFx0XHRcdGlmIChwcmV2U3RhdGUgIT09IGVuYWJsZWQpIHtcblx0XHRcdFx0XHRlbmFibGVkSW5kZXggPSBpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKGVuYWJsZWRJbmRleCA+IDApIHtcblxuXHRcdFx0aWYgKGVuYWJsZWQpIHtcblxuXHRcdFx0XHQvLyBjb252ZXJ0XG5cdFx0XHRcdGNvbnN0IGNvbHVtblRvQWRkID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydCh0aGlzLmFsbENvbHVtbnNbZW5hYmxlZEluZGV4XSk7XG5cblx0XHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuYWRkQ29sdW1uKGNvbHVtblRvQWRkLCBlbmFibGVkSW5kZXgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIucmVtb3ZlQ29sdW1uKGVuYWJsZWRJbmRleCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKSlcblx0XHQpO1xuXHR9XG5cblx0bW92ZUxlZnQoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb2x1bW5JbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGNvbHVtbklkKTtcblxuXHRcdGxldCBuZXh0TGVmdCxcblx0XHRcdG5leHRMZWZ0SW5kZXggPSAtMTtcblxuXHRcdGZvciAobGV0IGkgPSBjb2x1bW5JbmRleCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG5cblx0XHRcdGNvbnN0IGxlZnRDb2x1bW4gPSB0aGlzLmFsbENvbHVtbnNbaV07XG5cblx0XHRcdGlmIChsZWZ0Q29sdW1uLmlzRW5hYmxlZCgpKSB7XG5cblx0XHRcdFx0bmV4dExlZnQgPSBsZWZ0Q29sdW1uO1xuXHRcdFx0XHRuZXh0TGVmdEluZGV4ID0gaTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG5leHRMZWZ0ICYmIG5leHRMZWZ0SW5kZXggPj0gMCAmJiBjb2x1bW5JbmRleCA+PSAwKSB7XG5cblx0XHRcdGxldCBjb2x1bW4gPSB0aGlzLmFsbENvbHVtbnNbY29sdW1uSW5kZXhdO1xuXG5cdFx0XHR0aGlzLmFsbENvbHVtbnNbY29sdW1uSW5kZXhdID0gbmV4dExlZnQ7XG5cdFx0XHR0aGlzLmFsbENvbHVtbnNbbmV4dExlZnRJbmRleF0gPSBjb2x1bW47XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIubW92ZUxlZnQoY29sdW1uSWQpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5nZXRBY3RpdmVDb2x1bW5zKCkpXG5cdFx0KTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbHVtbkluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoY29sdW1uSWQpO1xuXG5cdFx0bGV0IG5leHRSaWdodCxcblx0XHRcdG5leHRSaWdodEluZGV4ID0gLTE7XG5cblx0XHRmb3IgKGxldCBpID0gY29sdW1uSW5kZXggKyAxOyBpIDwgdGhpcy5hbGxDb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IHJpZ2h0Q29sdW1uID0gdGhpcy5hbGxDb2x1bW5zW2ldO1xuXG5cdFx0XHRpZiAocmlnaHRDb2x1bW4uaXNFbmFibGVkKCkpIHtcblxuXHRcdFx0XHRuZXh0UmlnaHQgPSByaWdodENvbHVtbjtcblx0XHRcdFx0bmV4dFJpZ2h0SW5kZXggPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobmV4dFJpZ2h0ICYmIG5leHRSaWdodEluZGV4ID49IDAgJiYgY29sdW1uSW5kZXggPj0gMCkge1xuXG5cdFx0XHRsZXQgY29sdW1uID0gdGhpcy5hbGxDb2x1bW5zW2NvbHVtbkluZGV4XTtcblxuXHRcdFx0dGhpcy5hbGxDb2x1bW5zW2NvbHVtbkluZGV4XSA9IG5leHRSaWdodDtcblx0XHRcdHRoaXMuYWxsQ29sdW1uc1tuZXh0UmlnaHRJbmRleF0gPSBjb2x1bW47XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIubW92ZVJpZ2h0KGNvbHVtbklkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWNhbGN1bGF0ZUNvbHVtbnMoKTogdm9pZCB7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydE1hbnkodGhpcy5nZXRFbmFibGVkQ29sdW1ucygpKTtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldENvbHVtbnMoYWN0aXZlQ29sdW1ucywgYWN0aXZlQ29sdW1ucy5tYXAoYyA9PiBjLmdldENvbHVtbkNvbmZpZygpKSk7XG5cdH1cblxuXHQvLyBUT0RPIFJlZmFjdG9yXG5cdHByaXZhdGUgc2V0V2lkdGhXaXRoRXZlbnQod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgY2FsY3VsYXRvciA9IG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvcih0aGlzLmdldE1pbkNvbHVtbldpZHRoKCkpO1xuXG5cdFx0Y29uc3QgbWluV2lkdGggPSBjYWxjdWxhdG9yLmNhbGN1bGF0ZU1pbldpZHRoKHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmdldENvbHVtbldpZHRocygpKTtcblxuXHRcdGlmIChtaW5XaWR0aCA+IHdpZHRoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gbWluV2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRXaWR0aCh0aGlzLmdldFdpZHRoKCkpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29tcG9zaXRpb25XaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSkpO1xuXHR9XG5cblx0Ly8gVE9ETyBSZWZhY3RvclxuXHRwcml2YXRlIHNldENvbnRhaW5lcldpZHRoV2l0aEV2ZW50KGNvbnRhaW5lcldpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IodGhpcy5nZXRNaW5Db2x1bW5XaWR0aCgpKTtcblxuXHRcdGNvbnN0IG1pbldpZHRoID0gY2FsY3VsYXRvci5jYWxjdWxhdGVNaW5XaWR0aCh0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRDb2x1bW5XaWR0aHMoKSk7XG5cblx0XHRpZiAobWluV2lkdGggPiBjb250YWluZXJXaWR0aCkge1xuXHRcdFx0dGhpcy5jb250YWluZXJJbkRPTVdpZHRoID0gbWluV2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29udGFpbmVySW5ET01XaWR0aCA9IGNvbnRhaW5lcldpZHRoO1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldFdpZHRoKHRoaXMuZ2V0V2lkdGgoKSk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBjb250YWluZXJXaWR0aCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRSZXNpemVXaWR0aFdpdGhFdmVudChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5yZXNpemVXaWR0aEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldFdpZHRoKHRoaXMuZ2V0V2lkdGgoKSk7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSkpO1xuXHR9XG5cblx0Ly8gUkVNT1ZFIC0+IG1vdmUgdG8gYWxsQ29sdW1uc0NvbnRhaW5lclxuXHRwcml2YXRlIGdldEVuYWJsZWRDb2x1bW5zKCk6IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnMuZmlsdGVyKGMgPT4gYy5pc0VuYWJsZWQoKSk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRDb2x1bW5JbmRleChjb2x1bW5JZDogQ29sdW1uSWQpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnMuZmluZEluZGV4KChjb2x1bW46IENvbHVtbkVudGl0eSkgPT4gY29sdW1uLmdldElkKCkuZXF1YWxzKGNvbHVtbklkKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldE1pbkNvbHVtbldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmdldE1pbkNvbHVtbldpZHRoKCk7XG5cdH1cbn1cbiJdfQ==