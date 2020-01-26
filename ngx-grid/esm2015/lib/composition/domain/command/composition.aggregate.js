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
        super(id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29tcG9zaXRpb24uYWdncmVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDNUcsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDekksT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFFNUgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDaEksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFaEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDN0YsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDNUgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDL0gsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7SUFJL0Usb0JBQW9CLFNBQXBCLG9CQUFxQixTQUFRLFNBQVM7Ozs7Ozs7SUEyQmxELFlBQVksRUFBZSxFQUN4QixnQkFBcUMsRUFBRSxFQUN2QyxLQUFjLEVBQ2QsV0FBcUI7UUFDdkIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBN0JILGVBQVUsR0FBd0IsRUFBRSxDQUFD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QWdncmVnYXRlLCBBZ2dyZWdhdGVJZCwgUm9vdEFnZ3JlZ2F0ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkVudGl0eUZhY3RvcnkgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgQ2hhbmdlU29ydFBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NvcnQvY2hhbmdlLXNvcnQucGFyYW1zJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yIH0gZnJvbSAnLi93aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGguY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC13aWR0aC9jb21wb3NpdGlvbi13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3dpZHRoL3Jlc2l6ZS13aWR0aC9jb21wb3NpdGlvbi1yZXNpemUtd2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY29sdW1uL3NldC1lbmFibGVkL2NvbXBvc2l0aW9uLmNvbHVtbi1zZXQtZW5hYmxlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uQ29udGFpbmVyIH0gZnJvbSAnLi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uY29udGFpbmVyJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIgfSBmcm9tICcuL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHktY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLWxlZnQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vbW92ZS9yaWdodC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtcmlnaHQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbHVtbnNTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbnMtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuQFJvb3RBZ2dyZWdhdGVcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSBleHRlbmRzIEFnZ3JlZ2F0ZSB7XG5cblx0cHJpdmF0ZSBhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSByZWFkb25seSBiYXNlQ29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJhc2VQYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz47XG5cblx0LyoqXG5cdCAqIFZhbHVlIHRha2VuIGZyb20gdXNlciBjb25maWcgW3dpZHRoXS90cmVlLWNvbnRlbnQuYXNzZXJ0LnRzXG5cblx0ICovXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIGNvbnRhaW5lckluRE9NV2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIHJlc2l6ZVdpZHRoRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0LyoqXG5cdCAqIEF1dG93aXJlZFxuXHQgKi9cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5GYWN0b3J5OiBDb2x1bW5FbnRpdHlGYWN0b3J5ID0gbmV3IENvbHVtbkVudGl0eUZhY3RvcnkoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbkNvbnRhaW5lcjogQWN0aXZlQ29sdW1uQ29udGFpbmVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyOiBBY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIgPSBuZXcgQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyKCk7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRjb2x1bW5zUGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+ID0gW10sXG5cdFx0XHRcdHdpZHRoPzogbnVtYmVyLFxuXHRcdFx0XHRyZXNpemVXaWR0aD86IGJvb2xlYW4pIHtcblx0XHRzdXBlcihpZCk7XG5cblx0XHRjb25zdCBjb2x1bW5Db25maWdzOiBBcnJheTxDb2x1bW5Db25maWc+ID0gY29sdW1uc1BhcmFtcy5tYXAoKHBhcmFtKSA9PiBwYXJhbS5nZXRDb2x1bW4oKSk7XG5cblx0XHR0aGlzLmJhc2VQYXJhbXMgPSBjb2x1bW5zUGFyYW1zO1xuXHRcdHRoaXMuYmFzZUNvbHVtbnMgPSBjb2x1bW5Db25maWdzO1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblxuXHRcdHRoaXMuYWxsQ29sdW1ucyA9IHRoaXMuY29sdW1uRmFjdG9yeS5jcmVhdGUoY29sdW1uc1BhcmFtcyk7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydE1hbnkodGhpcy5nZXRFbmFibGVkQ29sdW1ucygpKTtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyID0gbmV3IEFjdGl2ZUNvbHVtbkNvbnRhaW5lcih0aGlzLmdldElkKCksIGFjdGl2ZUNvbHVtbnMsIHdpZHRoLCBjb2x1bW5Db25maWdzKTtcblxuXHRcdGlmIChyZXNpemVXaWR0aCAhPT0gdW5kZWZpbmVkICYmIHJlc2l6ZVdpZHRoICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZCA9IHJlc2l6ZVdpZHRoO1xuXHRcdH1cblxuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGdldENvbHVtbnMoKTogQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucztcblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRnZXRBY3RpdmVDb2x1bW5zKCk6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRDb2x1bW5zKCk7XG5cdH1cblxuXHQvLyBtYWtlIHByaXZhdGVcblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblxuXHRcdGlmICh0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVySW5ET01XaWR0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGlzUmVzaXplRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZXNpemVXaWR0aEVuYWJsZWQ7XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0aXNSZWFkeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISF0aGlzLmdldFdpZHRoKCkgJiYgdGhpcy5nZXRBY3RpdmVDb2x1bW5zKCkubGVuZ3RoID4gMDtcblx0fVxuXG5cdHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogdm9pZCB7XG5cblx0XHR0aGlzLmFsbENvbHVtbnMgPSB0aGlzLmNvbHVtbkZhY3RvcnkuY3JlYXRlKHBhcmFtcyk7XG5cblx0XHRjb25zdCBjb2x1bW5Db25maWdzOiBBcnJheTxDb2x1bW5Db25maWc+ID0gcGFyYW1zLm1hcCgocGFyYW06IENvbHVtblBhcmFtcykgPT4gcGFyYW0uZ2V0Q29sdW1uKCkpO1xuXG5cdFx0Y29uc3QgYWN0aXZlQ29sdW1ucyA9IHRoaXMuYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyLmNvbnZlcnRNYW55KHRoaXMuZ2V0RW5hYmxlZENvbHVtbnMoKSk7XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRDb2x1bW5zKGFjdGl2ZUNvbHVtbnMsIGNvbHVtbkNvbmZpZ3MpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSkpO1xuXHR9XG5cblx0c2V0Q29udGFpbmVyV2lkdGgoY29udGFpbmVyV2lkdGg6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0dGhpcy5zZXRDb250YWluZXJXaWR0aFdpdGhFdmVudChjb250YWluZXJXaWR0aCk7XG5cblx0XHR0aGlzLnJlY2FsY3VsYXRlQ29sdW1ucygpO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc2V0V2lkdGhXaXRoRXZlbnQod2lkdGgpO1xuXG5cdFx0dGhpcy5zZXRSZXNpemVXaWR0aFdpdGhFdmVudChmYWxzZSk7XG5cblx0XHR0aGlzLnJlY2FsY3VsYXRlQ29sdW1ucygpO1xuXHR9XG5cblx0c2V0UmVzaXplV2lkdGgoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc2V0UmVzaXplV2lkdGhXaXRoRXZlbnQoZW5hYmxlZCk7XG5cdH1cblxuXHRjaGFuZ2VTb3J0KHNvcnRQYXJhbXM6IEFycmF5PENoYW5nZVNvcnRQYXJhbXM+KTogdm9pZCB7XG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmNoYW5nZVNvcnQoc29ydFBhcmFtcylcblx0XHQpO1xuXHR9XG5cblx0Ly8gREVMRUdBVEVcblx0ZW5hYmxlQ29sdW1uKGNvbHVtbklkOiBDb2x1bW5JZCwgZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXG5cdFx0bGV0IGVuYWJsZWRJbmRleCA9IC0xO1xuXG5cdFx0dGhpcy5hbGxDb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uRW50aXR5LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRpZiAoY29sdW1uLmdldENvbHVtbklkKCkuZ2V0SWQoKSA9PT0gY29sdW1uSWQuZ2V0SWQoKSkge1xuXG5cdFx0XHRcdGNvbnN0IHByZXZTdGF0ZSA9IGNvbHVtbi5pc0VuYWJsZWQoKTtcblxuXHRcdFx0XHRjb2x1bW4uc2V0RW5hYmxlZChlbmFibGVkKTtcblxuXHRcdFx0XHRpZiAocHJldlN0YXRlICE9PSBlbmFibGVkKSB7XG5cdFx0XHRcdFx0ZW5hYmxlZEluZGV4ID0gaW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmIChlbmFibGVkSW5kZXggPiAwKSB7XG5cblx0XHRcdGlmIChlbmFibGVkKSB7XG5cblx0XHRcdFx0Ly8gY29udmVydFxuXHRcdFx0XHRjb25zdCBjb2x1bW5Ub0FkZCA9IHRoaXMuYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyLmNvbnZlcnQodGhpcy5hbGxDb2x1bW5zW2VuYWJsZWRJbmRleF0pO1xuXG5cdFx0XHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmFkZENvbHVtbihjb2x1bW5Ub0FkZCwgZW5hYmxlZEluZGV4KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnJlbW92ZUNvbHVtbihlbmFibGVkSW5kZXgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5nZXRBY3RpdmVDb2x1bW5zKCkpXG5cdFx0KTtcblx0fVxuXG5cdG1vdmVMZWZ0KGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29sdW1uSW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChjb2x1bW5JZCk7XG5cblx0XHRsZXQgbmV4dExlZnQsXG5cdFx0XHRuZXh0TGVmdEluZGV4ID0gLTE7XG5cblx0XHRmb3IgKGxldCBpID0gY29sdW1uSW5kZXggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuXG5cdFx0XHRjb25zdCBsZWZ0Q29sdW1uID0gdGhpcy5hbGxDb2x1bW5zW2ldO1xuXG5cdFx0XHRpZiAobGVmdENvbHVtbi5pc0VuYWJsZWQoKSkge1xuXG5cdFx0XHRcdG5leHRMZWZ0ID0gbGVmdENvbHVtbjtcblx0XHRcdFx0bmV4dExlZnRJbmRleCA9IGk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChuZXh0TGVmdCAmJiBuZXh0TGVmdEluZGV4ID49IDAgJiYgY29sdW1uSW5kZXggPj0gMCkge1xuXG5cdFx0XHRsZXQgY29sdW1uID0gdGhpcy5hbGxDb2x1bW5zW2NvbHVtbkluZGV4XTtcblxuXHRcdFx0dGhpcy5hbGxDb2x1bW5zW2NvbHVtbkluZGV4XSA9IG5leHRMZWZ0O1xuXHRcdFx0dGhpcy5hbGxDb2x1bW5zW25leHRMZWZ0SW5kZXhdID0gY29sdW1uO1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLm1vdmVMZWZ0KGNvbHVtbklkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpKVxuXHRcdCk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb2x1bW5JbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGNvbHVtbklkKTtcblxuXHRcdGxldCBuZXh0UmlnaHQsXG5cdFx0XHRuZXh0UmlnaHRJbmRleCA9IC0xO1xuXG5cdFx0Zm9yIChsZXQgaSA9IGNvbHVtbkluZGV4ICsgMTsgaSA8IHRoaXMuYWxsQ29sdW1ucy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCByaWdodENvbHVtbiA9IHRoaXMuYWxsQ29sdW1uc1tpXTtcblxuXHRcdFx0aWYgKHJpZ2h0Q29sdW1uLmlzRW5hYmxlZCgpKSB7XG5cblx0XHRcdFx0bmV4dFJpZ2h0ID0gcmlnaHRDb2x1bW47XG5cdFx0XHRcdG5leHRSaWdodEluZGV4ID0gaTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG5leHRSaWdodCAmJiBuZXh0UmlnaHRJbmRleCA+PSAwICYmIGNvbHVtbkluZGV4ID49IDApIHtcblxuXHRcdFx0bGV0IGNvbHVtbiA9IHRoaXMuYWxsQ29sdW1uc1tjb2x1bW5JbmRleF07XG5cblx0XHRcdHRoaXMuYWxsQ29sdW1uc1tjb2x1bW5JbmRleF0gPSBuZXh0UmlnaHQ7XG5cdFx0XHR0aGlzLmFsbENvbHVtbnNbbmV4dFJpZ2h0SW5kZXhdID0gY29sdW1uO1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLm1vdmVSaWdodChjb2x1bW5JZCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5nZXRBY3RpdmVDb2x1bW5zKCkpXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVDb2x1bW5zKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWN0aXZlQ29sdW1ucyA9IHRoaXMuYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyLmNvbnZlcnRNYW55KHRoaXMuZ2V0RW5hYmxlZENvbHVtbnMoKSk7XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRDb2x1bW5zKGFjdGl2ZUNvbHVtbnMsIGFjdGl2ZUNvbHVtbnMubWFwKGMgPT4gYy5nZXRDb25maWcoKSkpO1xuXHR9XG5cblx0Ly8gVE9ETyBSZWZhY3RvclxuXHRwcml2YXRlIHNldFdpZHRoV2l0aEV2ZW50KHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IodGhpcy5nZXRNaW5Db2x1bW5XaWR0aCgpKTtcblxuXHRcdGNvbnN0IG1pbldpZHRoID0gY2FsY3VsYXRvci5jYWxjdWxhdGVNaW5XaWR0aCh0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRDb2x1bW5XaWR0aHMoKSk7XG5cblx0XHRpZiAobWluV2lkdGggPiB3aWR0aCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IG1pbldpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0V2lkdGgodGhpcy5nZXRXaWR0aCgpKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxuXG5cdC8vIFRPRE8gUmVmYWN0b3Jcblx0cHJpdmF0ZSBzZXRDb250YWluZXJXaWR0aFdpdGhFdmVudChjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBjYWxjdWxhdG9yID0gbmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yKHRoaXMuZ2V0TWluQ29sdW1uV2lkdGgoKSk7XG5cblx0XHRjb25zdCBtaW5XaWR0aCA9IGNhbGN1bGF0b3IuY2FsY3VsYXRlTWluV2lkdGgodGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuZ2V0Q29sdW1uV2lkdGhzKCkpO1xuXG5cdFx0aWYgKG1pbldpZHRoID4gY29udGFpbmVyV2lkdGgpIHtcblx0XHRcdHRoaXMuY29udGFpbmVySW5ET01XaWR0aCA9IG1pbldpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lckluRE9NV2lkdGggPSBjb250YWluZXJXaWR0aDtcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRXaWR0aCh0aGlzLmdldFdpZHRoKCkpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgY29udGFpbmVyV2lkdGgpKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0UmVzaXplV2lkdGhXaXRoRXZlbnQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMucmVzaXplV2lkdGhFbmFibGVkID0gZW5hYmxlZDtcblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRXaWR0aCh0aGlzLmdldFdpZHRoKCkpO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxuXG5cdC8vIFJFTU9WRSAtPiBtb3ZlIHRvIGFsbENvbHVtbnNDb250YWluZXJcblx0cHJpdmF0ZSBnZXRFbmFibGVkQ29sdW1ucygpOiBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zLmZpbHRlcihjID0+IGMuaXNFbmFibGVkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kQ29sdW1uSW5kZXgoY29sdW1uSWQ6IENvbHVtbklkKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zLmZpbmRJbmRleCgoY29sdW1uOiBDb2x1bW5FbnRpdHkpID0+IGNvbHVtbi5nZXRDb2x1bW5JZCgpLmVxdWFscyhjb2x1bW5JZCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRNaW5Db2x1bW5XaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRNaW5Db2x1bW5XaWR0aCgpO1xuXHR9XG59XG4iXX0=