/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Aggregate, AggregateId, RootAggregate } from '@generic-ui/hermes';
import { ColumnWidthCollection } from './column/column-width/column-width-collection';
import { ColumnEntityFactory } from './column/column-entity.factory';
import { ColumnsSetAggregateEvent } from './column/set-columns/columns-set.aggregate-event';
import { CompositionContainerWidthCalculator } from './width/composition-container-width.calculator';
import { CompositionWidthSetAggregateEvent } from './width/set-width/composition-width-set.aggregate-event';
import { CompositionContainerWidthSetAggregateEvent } from './width/set-container-width/composition-container-width-set.aggregate-event';
import { CompositionResizeWidthSetAggregateEvent } from './width/resize-width/composition-resize-width-set.aggregate-event';
import { CompositionColumnSetEnabledAggregateEvent } from './column/set-enabled/composition.column-set-enabled.aggregate-event';
import { ActiveColumnContainer } from './column/active/active-column.container';
import { ActiveColumnEntityConverter } from './column/active/active-column.entity-converter';
let CompositionAggregate = class CompositionAggregate extends Aggregate {
    /**
     * @param {?} id
     * @param {?=} columnsParams
     * @param {?=} width
     * @param {?=} resizeWidth
     */
    constructor(id, columnsParams = [], width, resizeWidth) {
        super(id);
        this.MIN_COLUMN_WIDTH = 50;
        /**
         * Columns taken from user config.
         * This should not be modified and it should be used as a reference point.
         */
        this.columnWidthCollection = new ColumnWidthCollection(this.MIN_COLUMN_WIDTH);
        this.allColumns = [];
        this.resizeWidthEnabled = true;
        /**
         * Autowired
         */
        this.columnFactory = new ColumnEntityFactory();
        // = new ActiveColumnContainer();
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
        // this.activeColumns = this.columnFactory.create(columnsParams);
        /** @type {?} */
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer = new ActiveColumnContainer(this.getId(), activeColumns, width, columnConfigs);
        // this.columnWidthCollection = new ColumnWidthCollection(this.MIN_COLUMN_WIDTH, columnConfigs, width);
        if (resizeWidth !== undefined && resizeWidth !== null) {
            this.resizeWidthEnabled = resizeWidth;
        }
    }
    // REMOVE
    /**
     * @return {?}
     */
    getColumns() {
        // return this.activeColumns;
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
        this.columnWidthCollection.setColumns(columnConfigs);
        /** @type {?} */
        const newColumns = this.columnFactory.create(params);
        /** @type {?} */
        const widths = this.columnWidthCollection.getWidths();
        this.updateColumnsWidths(newColumns, widths);
        this.setActiveColumnsWithEvent(newColumns);
        /** @type {?} */
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, columnConfigs);
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
        this.columnWidthCollection.setWidth(this.getWidth());
        /** @type {?} */
        const newColumns = [...this.getActiveColumns()];
        // REFAC
        // this.columnWidthCollection.setColumns(newColumns.map(c => c.getColumnConfig()));
        //
        // const widths = this.columnWidthCollection.getWidths();
        //
        // this.updateColumnsWidths(newColumns, widths);
        //
        // this.setActiveColumnsWithEvent(newColumns);
    }
    /**
     * @private
     * @param {?} columns
     * @param {?} widths
     * @return {?}
     */
    updateColumnsWidths(columns, widths) {
        columns.forEach((/**
         * @param {?} columnEntity
         * @param {?} index
         * @return {?}
         */
        (columnEntity, index) => {
            columnEntity.width = widths[index];
        }));
    }
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    setActiveColumnsWithEvent(columns) {
        // REFAC
        // this.activeColumns = columns;
        this.addEvent(new ColumnsSetAggregateEvent(this.getId(), columns));
    }
    // TODO Refactor
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    setWidthWithEvent(width) {
        /** @type {?} */
        const calculator = new CompositionContainerWidthCalculator(this.MIN_COLUMN_WIDTH);
        /** @type {?} */
        const minWidth = calculator.calculateMinWidth(this.columnWidthCollection.getColumns());
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
        const calculator = new CompositionContainerWidthCalculator(this.MIN_COLUMN_WIDTH);
        /** @type {?} */
        const minWidth = calculator.calculateMinWidth(this.columnWidthCollection.getColumns());
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
    CompositionAggregate.prototype.MIN_COLUMN_WIDTH;
    /**
     * Columns taken from user config.
     * This should not be modified and it should be used as a reference point.
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.columnWidthCollection;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.allColumns;
    /**
     * Collection of columns which are used in the composition.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBSXRGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBQ3pJLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBRTVILE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWhGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0lBSWhGLG9CQUFvQixTQUFwQixvQkFBcUIsU0FBUSxTQUFTOzs7Ozs7O0lBdUNsRCxZQUFZLEVBQWUsRUFDeEIsZ0JBQXFDLEVBQUUsRUFDdkMsS0FBYyxFQUNkLFdBQXFCO1FBQ3ZCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQXpDTSxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7Ozs7O1FBTS9CLDBCQUFxQixHQUEwQixJQUFJLHFCQUFx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eyBBZ2dyZWdhdGUsIEFnZ3JlZ2F0ZUlkLCBSb290QWdncmVnYXRlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uV2lkdGhDb2xsZWN0aW9uIH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aC1jb2xsZWN0aW9uJztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkVudGl0eUZhY3RvcnkgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgQ2hhbmdlU29ydFBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NvcnQvY2hhbmdlLXNvcnQucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbnNTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbnMtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvciB9IGZyb20gJy4vd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9yZXNpemUtd2lkdGgvY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkNvbnRhaW5lciB9IGZyb20gJy4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmNvbnRhaW5lcic7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5LWNvbnZlcnRlcic7XG5cblxuQFJvb3RBZ2dyZWdhdGVcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSBleHRlbmRzIEFnZ3JlZ2F0ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBNSU5fQ09MVU1OX1dJRFRIID0gNTA7XG5cblx0LyoqXG5cdCAqIENvbHVtbnMgdGFrZW4gZnJvbSB1c2VyIGNvbmZpZy5cblx0ICogVGhpcyBzaG91bGQgbm90IGJlIG1vZGlmaWVkIGFuZCBpdCBzaG91bGQgYmUgdXNlZCBhcyBhIHJlZmVyZW5jZSBwb2ludC5cblx0ICovXG5cdHByaXZhdGUgY29sdW1uV2lkdGhDb2xsZWN0aW9uOiBDb2x1bW5XaWR0aENvbGxlY3Rpb24gPSBuZXcgQ29sdW1uV2lkdGhDb2xsZWN0aW9uKHRoaXMuTUlOX0NPTFVNTl9XSURUSCk7XG5cblx0cHJpdmF0ZSBhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+ID0gW107XG5cblx0LyoqXG5cdCAqIENvbGxlY3Rpb24gb2YgY29sdW1ucyB3aGljaCBhcmUgdXNlZCBpbiB0aGUgY29tcG9zaXRpb24uXG5cdCAqL1xuXHRcdC8vIHByaXZhdGUgYWN0aXZlQ29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYmFzZUNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XG5cblx0cHJpdmF0ZSByZWFkb25seSBiYXNlUGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+O1xuXG5cdC8qKlxuXHQgKiBWYWx1ZSB0YWtlbiBmcm9tIHVzZXIgY29uZmlnIFt3aWR0aF1cblx0ICovXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIGNvbnRhaW5lckluRE9NV2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIHJlc2l6ZVdpZHRoRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0LyoqXG5cdCAqIEF1dG93aXJlZFxuXHQgKi9cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5GYWN0b3J5OiBDb2x1bW5FbnRpdHlGYWN0b3J5ID0gbmV3IENvbHVtbkVudGl0eUZhY3RvcnkoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbkNvbnRhaW5lcjogQWN0aXZlQ29sdW1uQ29udGFpbmVyOyAvLyA9IG5ldyBBY3RpdmVDb2x1bW5Db250YWluZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlcjogQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyID0gbmV3IEFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0Y29sdW1uc1BhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPiA9IFtdLFxuXHRcdFx0XHR3aWR0aD86IG51bWJlcixcblx0XHRcdFx0cmVzaXplV2lkdGg/OiBib29sZWFuKSB7XG5cdFx0c3VwZXIoaWQpO1xuXG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IGNvbHVtbnNQYXJhbXMubWFwKChwYXJhbSkgPT4gcGFyYW0uZ2V0Q29sdW1uKCkpO1xuXG5cdFx0dGhpcy5iYXNlUGFyYW1zID0gY29sdW1uc1BhcmFtcztcblx0XHR0aGlzLmJhc2VDb2x1bW5zID0gY29sdW1uQ29uZmlncztcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cblx0XHR0aGlzLmFsbENvbHVtbnMgPSB0aGlzLmNvbHVtbkZhY3RvcnkuY3JlYXRlKGNvbHVtbnNQYXJhbXMpO1xuXHRcdC8vIHRoaXMuYWN0aXZlQ29sdW1ucyA9IHRoaXMuY29sdW1uRmFjdG9yeS5jcmVhdGUoY29sdW1uc1BhcmFtcyk7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydE1hbnkodGhpcy5nZXRFbmFibGVkQ29sdW1ucygpKTtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyID0gbmV3IEFjdGl2ZUNvbHVtbkNvbnRhaW5lcih0aGlzLmdldElkKCksIGFjdGl2ZUNvbHVtbnMsIHdpZHRoLCBjb2x1bW5Db25maWdzKTtcblxuXHRcdC8vIHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uID0gbmV3IENvbHVtbldpZHRoQ29sbGVjdGlvbih0aGlzLk1JTl9DT0xVTU5fV0lEVEgsIGNvbHVtbkNvbmZpZ3MsIHdpZHRoKTtcblxuXHRcdGlmIChyZXNpemVXaWR0aCAhPT0gdW5kZWZpbmVkICYmIHJlc2l6ZVdpZHRoICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZCA9IHJlc2l6ZVdpZHRoO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXHRcdC8vIHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbnM7XG5cblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGdldEFjdGl2ZUNvbHVtbnMoKTogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmdldENvbHVtbnMoKTtcblx0fVxuXG5cdC8vIG1ha2UgcHJpdmF0ZVxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXG5cdFx0aWYgKHRoaXMucmVzaXplV2lkdGhFbmFibGVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb250YWluZXJJbkRPTVdpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0XHR9XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0aXNSZXNpemVFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZDtcblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRpc1JlYWR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMuZ2V0V2lkdGgoKSAmJiB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKS5sZW5ndGggPiAwO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiB2b2lkIHtcblxuXHRcdHRoaXMuYWxsQ29sdW1ucyA9IHRoaXMuY29sdW1uRmFjdG9yeS5jcmVhdGUocGFyYW1zKTtcblxuXHRcdGNvbnN0IGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBwYXJhbXMubWFwKChwYXJhbTogQ29sdW1uUGFyYW1zKSA9PiBwYXJhbS5nZXRDb2x1bW4oKSk7XG5cblx0XHR0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5zZXRDb2x1bW5zKGNvbHVtbkNvbmZpZ3MpO1xuXG5cdFx0Y29uc3QgbmV3Q29sdW1ucyA9IHRoaXMuY29sdW1uRmFjdG9yeS5jcmVhdGUocGFyYW1zKSxcblx0XHRcdHdpZHRocyA9IHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLmdldFdpZHRocygpO1xuXG5cdFx0dGhpcy51cGRhdGVDb2x1bW5zV2lkdGhzKG5ld0NvbHVtbnMsIHdpZHRocyk7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUNvbHVtbnNXaXRoRXZlbnQobmV3Q29sdW1ucyk7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydE1hbnkodGhpcy5nZXRFbmFibGVkQ29sdW1ucygpKTtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldENvbHVtbnMoYWN0aXZlQ29sdW1ucywgY29sdW1uQ29uZmlncyk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aChjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHR0aGlzLnNldENvbnRhaW5lcldpZHRoV2l0aEV2ZW50KGNvbnRhaW5lcldpZHRoKTtcblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRXaWR0aFdpdGhFdmVudCh3aWR0aCk7XG5cblx0XHR0aGlzLnNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGZhbHNlKTtcblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRzZXRSZXNpemVXaWR0aChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRSZXNpemVXaWR0aFdpdGhFdmVudChlbmFibGVkKTtcblx0fVxuXG5cdGNoYW5nZVNvcnQoc29ydFBhcmFtczogQXJyYXk8Q2hhbmdlU29ydFBhcmFtcz4pOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuY2hhbmdlU29ydChzb3J0UGFyYW1zKVxuXHRcdCk7XG5cdH1cblxuXHQvLyBERUxFR0FURVxuXHRlbmFibGVDb2x1bW4oY29sdW1uSWQ6IENvbHVtbklkLCBlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cblx0XHRsZXQgZW5hYmxlZEluZGV4ID0gLTE7XG5cblx0XHR0aGlzLmFsbENvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5FbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGlmIChjb2x1bW4uZ2V0Q29sdW1uSWQoKS5nZXRJZCgpID09PSBjb2x1bW5JZC5nZXRJZCgpKSB7XG5cblx0XHRcdFx0Y29uc3QgcHJldlN0YXRlID0gY29sdW1uLmlzRW5hYmxlZCgpO1xuXG5cdFx0XHRcdGNvbHVtbi5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXG5cdFx0XHRcdGlmIChwcmV2U3RhdGUgIT09IGVuYWJsZWQpIHtcblx0XHRcdFx0XHRlbmFibGVkSW5kZXggPSBpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKGVuYWJsZWRJbmRleCA+IDApIHtcblxuXHRcdFx0aWYgKGVuYWJsZWQpIHtcblxuXHRcdFx0XHQvLyBjb252ZXJ0XG5cdFx0XHRcdGNvbnN0IGNvbHVtblRvQWRkID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydCh0aGlzLmFsbENvbHVtbnNbZW5hYmxlZEluZGV4XSk7XG5cblx0XHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuYWRkQ29sdW1uKGNvbHVtblRvQWRkLCBlbmFibGVkSW5kZXgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIucmVtb3ZlQ29sdW1uKGVuYWJsZWRJbmRleCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWNhbGN1bGF0ZUNvbHVtbnMoKTogdm9pZCB7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydE1hbnkodGhpcy5nZXRFbmFibGVkQ29sdW1ucygpKTtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldENvbHVtbnMoYWN0aXZlQ29sdW1ucywgYWN0aXZlQ29sdW1ucy5tYXAoYyA9PiBjLmdldENvbmZpZygpKSk7XG5cblx0XHR0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5zZXRXaWR0aCh0aGlzLmdldFdpZHRoKCkpO1xuXG5cdFx0Y29uc3QgbmV3Q29sdW1ucyA9IFsuLi50aGlzLmdldEFjdGl2ZUNvbHVtbnMoKV07XG5cblx0XHQvLyBSRUZBQ1xuXHRcdC8vIHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLnNldENvbHVtbnMobmV3Q29sdW1ucy5tYXAoYyA9PiBjLmdldENvbHVtbkNvbmZpZygpKSk7XG5cdFx0Ly9cblx0XHQvLyBjb25zdCB3aWR0aHMgPSB0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5nZXRXaWR0aHMoKTtcblx0XHQvL1xuXHRcdC8vIHRoaXMudXBkYXRlQ29sdW1uc1dpZHRocyhuZXdDb2x1bW5zLCB3aWR0aHMpO1xuXHRcdC8vXG5cdFx0Ly8gdGhpcy5zZXRBY3RpdmVDb2x1bW5zV2l0aEV2ZW50KG5ld0NvbHVtbnMpO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVDb2x1bW5zV2lkdGhzKGNvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4sIHdpZHRoczogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uRW50aXR5OiBDb2x1bW5FbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGNvbHVtbkVudGl0eS53aWR0aCA9IHdpZHRoc1tpbmRleF07XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHNldEFjdGl2ZUNvbHVtbnNXaXRoRXZlbnQoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IHZvaWQge1xuXHRcdC8vIFJFRkFDXG5cdFx0Ly8gdGhpcy5hY3RpdmVDb2x1bW5zID0gY29sdW1ucztcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBjb2x1bW5zKSk7XG5cdH1cblxuXHQvLyBUT0RPIFJlZmFjdG9yXG5cdHByaXZhdGUgc2V0V2lkdGhXaXRoRXZlbnQod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgY2FsY3VsYXRvciA9IG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvcih0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXG5cdFx0Y29uc3QgbWluV2lkdGggPSBjYWxjdWxhdG9yLmNhbGN1bGF0ZU1pbldpZHRoKHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLmdldENvbHVtbnMoKSk7XG5cblx0XHRpZiAobWluV2lkdGggPiB3aWR0aCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IG1pbldpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0V2lkdGgodGhpcy5nZXRXaWR0aCgpKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxuXG5cdC8vIFRPRE8gUmVmYWN0b3Jcblx0cHJpdmF0ZSBzZXRDb250YWluZXJXaWR0aFdpdGhFdmVudChjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBjYWxjdWxhdG9yID0gbmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yKHRoaXMuTUlOX0NPTFVNTl9XSURUSCk7XG5cblx0XHRjb25zdCBtaW5XaWR0aCA9IGNhbGN1bGF0b3IuY2FsY3VsYXRlTWluV2lkdGgodGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uZ2V0Q29sdW1ucygpKTtcblxuXHRcdGlmIChtaW5XaWR0aCA+IGNvbnRhaW5lcldpZHRoKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lckluRE9NV2lkdGggPSBtaW5XaWR0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb250YWluZXJJbkRPTVdpZHRoID0gY29udGFpbmVyV2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0V2lkdGgodGhpcy5nZXRXaWR0aCgpKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIGNvbnRhaW5lcldpZHRoKSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0V2lkdGgodGhpcy5nZXRXaWR0aCgpKTtcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpKSk7XG5cdH1cblxuXHQvLyBSRU1PVkUgLT4gbW92ZSB0byBhbGxDb2x1bW5zQ29udGFpbmVyXG5cdHByaXZhdGUgZ2V0RW5hYmxlZENvbHVtbnMoKTogQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucy5maWx0ZXIoYyA9PiBjLmlzRW5hYmxlZCgpKTtcblx0fVxuXG5cdC8vIGNsb25lKCk6IENvbXBvc2l0aW9uQWdncmVnYXRlIHtcblx0Ly9cblx0Ly8gXHRjb25zdCBhY3RpdmVDb2x1bW5zID0gWy4uLnRoaXMuYWN0aXZlQ29sdW1uc10sXG5cdC8vIFx0XHRhbGxDb2x1bW5zID0gWy4uLnRoaXMuYWxsQ29sdW1uc107XG5cdC8vXG5cdC8vIFx0bGV0IGNvbXBvc2l0aW9uID0gbmV3IENvbXBvc2l0aW9uQWdncmVnYXRlKFxuXHQvLyBcdFx0dGhpcy5nZXRJZCgpLFxuXHQvLyBcdFx0dGhpcy5iYXNlUGFyYW1zLFxuXHQvLyBcdFx0dGhpcy53aWR0aCxcblx0Ly8gXHRcdHRoaXMucmVzaXplV2lkdGhFbmFibGVkXG5cdC8vIFx0KTtcblx0Ly9cblx0Ly8gXHRjb21wb3NpdGlvbi5jb250YWluZXJJbkRPTVdpZHRoID0gdGhpcy5jb250YWluZXJJbkRPTVdpZHRoO1xuXHQvLyBcdGNvbXBvc2l0aW9uLmFjdGl2ZUNvbHVtbnMgPSBhY3RpdmVDb2x1bW5zO1xuXHQvLyBcdGNvbXBvc2l0aW9uLmFsbENvbHVtbnMgPSBhbGxDb2x1bW5zO1xuXHQvLyBcdGNvbXBvc2l0aW9uLmNvbHVtbldpZHRoQ29sbGVjdGlvbiA9IHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uO1xuXHQvL1xuXHQvLyBcdHJldHVybiBjb21wb3NpdGlvbjtcblx0Ly8gfVxufVxuIl19