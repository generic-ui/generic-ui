/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Aggregate } from '@generic-ui/hermes';
import { ColumnWidthCollection } from './column/column-width/column-width-collection';
import { ColumnEntityFactory } from './column/column-entity.factory';
import { SortStatus } from './sort/sort-status';
import { ColumnsSetAggregateEvent } from './column/set-columns/columns-set.aggregate-event';
import { CompositionContainerWidthCalculator } from './width/composition-container-width.calculator';
import { CompositionWidthSetAggregateEvent } from './width/set-width/composition-width-set.aggregate-event';
import { CompositionContainerWidthSetAggregateEvent } from './width/set-container-width/composition-container-width-set.aggregate-event';
import { CompositionResizeWidthSetAggregateEvent } from './width/resize-width/composition-resize-width-set.aggregate-event';
export class CompositionAggregate extends Aggregate {
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
        /**
         * Collection of columns which are used in the composition.
         */
        this.activeColumns = [];
        this.resizeWidthEnabled = true;
        /**
         * Autowired
         */
        this.columnFactory = new ColumnEntityFactory();
        /** @type {?} */
        const columns = columnsParams.map((/**
         * @param {?} param
         * @return {?}
         */
        (param) => param.getColumn()));
        this.baseParams = columnsParams;
        this.baseColumns = columns;
        this.width = width;
        this.activeColumns = this.columnFactory.create(columnsParams);
        this.columnWidthCollection = new ColumnWidthCollection(this.MIN_COLUMN_WIDTH, columns, width);
        if (resizeWidth !== undefined && resizeWidth !== null) {
            this.resizeWidthEnabled = resizeWidth;
        }
    }
    /**
     * @return {?}
     */
    getColumns() {
        return this.activeColumns;
    }
    /**
     * @return {?}
     */
    getWidth() {
        if (this.resizeWidthEnabled) {
            return this.containerWidth;
        }
        else {
            return this.width;
        }
    }
    /**
     * @return {?}
     */
    isResizeEnabled() {
        return this.resizeWidthEnabled;
    }
    /**
     * @return {?}
     */
    isReady() {
        return !!this.getWidth() && this.activeColumns.length > 0;
    }
    /**
     * @return {?}
     */
    clone() {
        /** @type {?} */
        const activeColumns = [...this.activeColumns];
        /** @type {?} */
        let composition = new CompositionAggregate(this.getId(), this.baseParams, this.width, this.resizeWidthEnabled);
        composition.containerWidth = this.containerWidth;
        composition.activeColumns = activeColumns;
        composition.columnWidthCollection = this.columnWidthCollection;
        return composition;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    setColumns(params) {
        /** @type {?} */
        const columns = params.map((/**
         * @param {?} param
         * @return {?}
         */
        (param) => param.getColumn()));
        this.columnWidthCollection.setColumns(columns);
        /** @type {?} */
        const newColumns = this.columnFactory.create(params);
        /** @type {?} */
        const widths = this.columnWidthCollection.getWidths();
        this.updateColumnsWidths(newColumns, widths);
        this.setActiveColumnsWithEvent(newColumns);
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
    // TODO Aggregate events
    /**
     * @param {?} sortParams
     * @return {?}
     */
    changeSort(sortParams) {
        this.activeColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            column.setSortStatus(SortStatus.NONE);
        }));
        for (let param of sortParams) {
            /** @type {?} */
            const fieldId = param.fieldId;
            /** @type {?} */
            const direction = param.direction;
            /** @type {?} */
            const sortStatus = direction ? SortStatus.ASC : SortStatus.DESC;
            /** @type {?} */
            const columns = this.activeColumns.filter((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                return column.getField().getId().getId() === fieldId.getId();
            }));
            if (columns.length > 0) {
                columns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    column.setSortStatus(sortStatus);
                }));
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    recalculateColumns() {
        this.columnWidthCollection.setWidth(this.getWidth());
        /** @type {?} */
        const newColumns = [...this.activeColumns];
        /** @type {?} */
        const widths = this.columnWidthCollection.getWidths();
        this.updateColumnsWidths(newColumns, widths);
        this.setActiveColumnsWithEvent(newColumns);
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
        this.activeColumns = columns;
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
            this.containerWidth = minWidth;
        }
        else {
            this.containerWidth = containerWidth;
        }
        this.addEvent(new CompositionContainerWidthSetAggregateEvent(this.getId(), containerWidth));
    }
    /**
     * @private
     * @param {?} enabled
     * @return {?}
     */
    setResizeWidthWithEvent(enabled) {
        this.resizeWidthEnabled = enabled;
        this.addEvent(new CompositionResizeWidthSetAggregateEvent(this.getId()));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBSXRGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUN6SSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUc1SCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsU0FBUzs7Ozs7OztJQW9DbEQsWUFBWSxFQUFlLEVBQ3hCLGdCQUFxQyxFQUFFLEVBQ3ZDLEtBQWMsRUFDZCxXQUFxQjtRQUN2QixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUF0Q00scUJBQWdCLEdBQUcsRUFBRSxDQUFDOzs7OztRQU0vQiwwQkFBcUIsR0FBMEIsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7OztRQUtoRyxrQkFBYSxHQUF3QixFQUFFLENBQUM7UUFnQnhDLHVCQUFrQixHQUFZLElBQUksQ0FBQzs7OztRQUsxQixrQkFBYSxHQUF3QixJ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O0lBQ3BFLENBQUM7Ozs7Ozs7SUFHTywwQkFBMEIsQ0FBQyxjQUFzQjs7Y0FFbEQsVUFBVSxHQUFHLElBQUksbUNBQW1DLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDOztjQUUzRSxRQUFRLEdBQUcsVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV0RixJQUFJLFFBQVEsR0FBRyxjQUFjLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7U0FDL0I7YUFBTTtZQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLDBDQUEwQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Ozs7OztJQUVPLHVCQUF1QixDQUFDLE9BQWdCO1FBQy9DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVDQUF1QyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztDQUNEOzs7Ozs7SUFuTkEsZ0RBQXVDOzs7Ozs7O0lBTXZDLHFEQUF3Rzs7Ozs7O0lBS3hHLDZDQUFnRDs7Ozs7SUFFaEQsMkNBQWtEOzs7OztJQUVsRCwwQ0FBaUQ7Ozs7OztJQUtqRCxxQ0FBc0I7Ozs7OztJQUt0Qiw4Q0FBK0I7Ozs7O0lBRS9CLGtEQUEyQzs7Ozs7O0lBSzNDLDZDQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZSwgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29sdW1uV2lkdGhDb2xsZWN0aW9uIH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aC1jb2xsZWN0aW9uJztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkVudGl0eUZhY3RvcnkgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgQ2hhbmdlU29ydFBhcmFtcyB9IGZyb20gJy4vc29ydC9jaGFuZ2Utc29ydC5wYXJhbXMnO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4vc29ydC9zb3J0LXN0YXR1cyc7XG5pbXBvcnQgeyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW5zLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IgfSBmcm9tICcuL3dpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jYWxjdWxhdG9yJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LXdpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25BZ2dyZWdhdGUgZXh0ZW5kcyBBZ2dyZWdhdGUge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgTUlOX0NPTFVNTl9XSURUSCA9IDUwO1xuXG5cdC8qKlxuXHQgKiBDb2x1bW5zIHRha2VuIGZyb20gdXNlciBjb25maWcuXG5cdCAqIFRoaXMgc2hvdWxkIG5vdCBiZSBtb2RpZmllZCBhbmQgaXQgc2hvdWxkIGJlIHVzZWQgYXMgYSByZWZlcmVuY2UgcG9pbnQuXG5cdCAqL1xuXHRwcml2YXRlIGNvbHVtbldpZHRoQ29sbGVjdGlvbjogQ29sdW1uV2lkdGhDb2xsZWN0aW9uID0gbmV3IENvbHVtbldpZHRoQ29sbGVjdGlvbih0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXG5cdC8qKlxuXHQgKiBDb2xsZWN0aW9uIG9mIGNvbHVtbnMgd2hpY2ggYXJlIHVzZWQgaW4gdGhlIGNvbXBvc2l0aW9uLlxuXHQgKi9cblx0cHJpdmF0ZSBhY3RpdmVDb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSByZWFkb25seSBiYXNlQ29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJhc2VQYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz47XG5cblx0LyoqXG5cdCAqIFZhbHVlIHRha2VuIGZyb20gdXNlciBjb25maWcgW3dpZHRoXVxuXHQgKi9cblx0cHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuXG5cdC8qKlxuXHQgKiBET00gZWxlbWVudCdzIHdpZHRoXG5cdCAqL1xuXHRwcml2YXRlIGNvbnRhaW5lcldpZHRoOiBudW1iZXI7XG5cblx0cHJpdmF0ZSByZXNpemVXaWR0aEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdC8qKlxuXHQgKiBBdXRvd2lyZWRcblx0ICovXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRmFjdG9yeTogQ29sdW1uRW50aXR5RmFjdG9yeSA9IG5ldyBDb2x1bW5FbnRpdHlGYWN0b3J5KCk7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRjb2x1bW5zUGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+ID0gW10sXG5cdFx0XHRcdHdpZHRoPzogbnVtYmVyLFxuXHRcdFx0XHRyZXNpemVXaWR0aD86IGJvb2xlYW4pIHtcblx0XHRzdXBlcihpZCk7XG5cblx0XHRjb25zdCBjb2x1bW5zID0gY29sdW1uc1BhcmFtcy5tYXAoKHBhcmFtKSA9PiBwYXJhbS5nZXRDb2x1bW4oKSk7XG5cblx0XHR0aGlzLmJhc2VQYXJhbXMgPSBjb2x1bW5zUGFyYW1zO1xuXHRcdHRoaXMuYmFzZUNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1ucyA9IHRoaXMuY29sdW1uRmFjdG9yeS5jcmVhdGUoY29sdW1uc1BhcmFtcyk7XG5cdFx0dGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24gPSBuZXcgQ29sdW1uV2lkdGhDb2xsZWN0aW9uKHRoaXMuTUlOX0NPTFVNTl9XSURUSCwgY29sdW1ucywgd2lkdGgpO1xuXG5cdFx0aWYgKHJlc2l6ZVdpZHRoICE9PSB1bmRlZmluZWQgJiYgcmVzaXplV2lkdGggIT09IG51bGwpIHtcblx0XHRcdHRoaXMucmVzaXplV2lkdGhFbmFibGVkID0gcmVzaXplV2lkdGg7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q29sdW1ucygpOiBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5zO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblxuXHRcdGlmICh0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyV2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHRcdH1cblx0fVxuXG5cdGlzUmVzaXplRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZXNpemVXaWR0aEVuYWJsZWQ7XG5cdH1cblxuXHRpc1JlYWR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMuZ2V0V2lkdGgoKSAmJiB0aGlzLmFjdGl2ZUNvbHVtbnMubGVuZ3RoID4gMDtcblx0fVxuXG5cdGNsb25lKCk6IENvbXBvc2l0aW9uQWdncmVnYXRlIHtcblxuXHRcdGNvbnN0IGFjdGl2ZUNvbHVtbnMgPSBbLi4udGhpcy5hY3RpdmVDb2x1bW5zXTtcblxuXHRcdGxldCBjb21wb3NpdGlvbiA9IG5ldyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZShcblx0XHRcdHRoaXMuZ2V0SWQoKSxcblx0XHRcdHRoaXMuYmFzZVBhcmFtcyxcblx0XHRcdHRoaXMud2lkdGgsXG5cdFx0XHR0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZFxuXHRcdCk7XG5cblx0XHRjb21wb3NpdGlvbi5jb250YWluZXJXaWR0aCA9IHRoaXMuY29udGFpbmVyV2lkdGg7XG5cdFx0Y29tcG9zaXRpb24uYWN0aXZlQ29sdW1ucyA9IGFjdGl2ZUNvbHVtbnM7XG5cdFx0Y29tcG9zaXRpb24uY29sdW1uV2lkdGhDb2xsZWN0aW9uID0gdGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb247XG5cblx0XHRyZXR1cm4gY29tcG9zaXRpb247XG5cdH1cblxuXHRzZXRDb2x1bW5zKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IHBhcmFtcy5tYXAoKHBhcmFtOiBDb2x1bW5QYXJhbXMpID0+IHBhcmFtLmdldENvbHVtbigpKTtcblxuXHRcdHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLnNldENvbHVtbnMoY29sdW1ucyk7XG5cblx0XHRjb25zdCBuZXdDb2x1bW5zID0gdGhpcy5jb2x1bW5GYWN0b3J5LmNyZWF0ZShwYXJhbXMpLFxuXHRcdFx0d2lkdGhzID0gdGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uZ2V0V2lkdGhzKCk7XG5cblx0XHR0aGlzLnVwZGF0ZUNvbHVtbnNXaWR0aHMobmV3Q29sdW1ucywgd2lkdGhzKTtcblxuXHRcdHRoaXMuc2V0QWN0aXZlQ29sdW1uc1dpdGhFdmVudChuZXdDb2x1bW5zKTtcblx0fVxuXG5cdHNldENvbnRhaW5lcldpZHRoKGNvbnRhaW5lcldpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2V0Q29udGFpbmVyV2lkdGhXaXRoRXZlbnQoY29udGFpbmVyV2lkdGgpO1xuXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNldFdpZHRoV2l0aEV2ZW50KHdpZHRoKTtcblxuXHRcdHRoaXMuc2V0UmVzaXplV2lkdGhXaXRoRXZlbnQoZmFsc2UpO1xuXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcblx0fVxuXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGVuYWJsZWQpO1xuXHR9XG5cblx0Ly8gVE9ETyBBZ2dyZWdhdGUgZXZlbnRzXG5cdGNoYW5nZVNvcnQoc29ydFBhcmFtczogQXJyYXk8Q2hhbmdlU29ydFBhcmFtcz4pOiB2b2lkIHtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkVudGl0eSkgPT4ge1xuXHRcdFx0Y29sdW1uLnNldFNvcnRTdGF0dXMoU29ydFN0YXR1cy5OT05FKTtcblx0XHR9KTtcblxuXHRcdGZvciAobGV0IHBhcmFtIG9mIHNvcnRQYXJhbXMpIHtcblxuXHRcdFx0Y29uc3QgZmllbGRJZCA9IHBhcmFtLmZpZWxkSWQsXG5cdFx0XHRcdGRpcmVjdGlvbiA9IHBhcmFtLmRpcmVjdGlvbixcblx0XHRcdFx0c29ydFN0YXR1cyA9IGRpcmVjdGlvbiA/IFNvcnRTdGF0dXMuQVNDIDogU29ydFN0YXR1cy5ERVNDO1xuXG5cdFx0XHRjb25zdCBjb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5zLmZpbHRlcigoY29sdW1uOiBDb2x1bW5FbnRpdHkpID0+IHtcblx0XHRcdFx0cmV0dXJuIGNvbHVtbi5nZXRGaWVsZCgpLmdldElkKCkuZ2V0SWQoKSA9PT0gZmllbGRJZC5nZXRJZCgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChjb2x1bW5zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkVudGl0eSkgPT4ge1xuXG5cdFx0XHRcdFx0Y29sdW1uLnNldFNvcnRTdGF0dXMoc29ydFN0YXR1cyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVDb2x1bW5zKCk6IHZvaWQge1xuXG5cdFx0dGhpcy5jb2x1bW5XaWR0aENvbGxlY3Rpb24uc2V0V2lkdGgodGhpcy5nZXRXaWR0aCgpKTtcblxuXHRcdGNvbnN0IG5ld0NvbHVtbnMgPSBbLi4udGhpcy5hY3RpdmVDb2x1bW5zXSxcblx0XHRcdHdpZHRocyA9IHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLmdldFdpZHRocygpO1xuXG5cdFx0dGhpcy51cGRhdGVDb2x1bW5zV2lkdGhzKG5ld0NvbHVtbnMsIHdpZHRocyk7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUNvbHVtbnNXaXRoRXZlbnQobmV3Q29sdW1ucyk7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZUNvbHVtbnNXaWR0aHMoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Piwgd2lkdGhzOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW5FbnRpdHk6IENvbHVtbkVudGl0eSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0Y29sdW1uRW50aXR5LndpZHRoID0gd2lkdGhzW2luZGV4XTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc2V0QWN0aXZlQ29sdW1uc1dpdGhFdmVudChjb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+KTogdm9pZCB7XG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5zID0gY29sdW1ucztcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBjb2x1bW5zKSk7XG5cdH1cblxuXHQvLyBUT0RPIFJlZmFjdG9yXG5cdHByaXZhdGUgc2V0V2lkdGhXaXRoRXZlbnQod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgY2FsY3VsYXRvciA9IG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvcih0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXG5cdFx0Y29uc3QgbWluV2lkdGggPSBjYWxjdWxhdG9yLmNhbGN1bGF0ZU1pbldpZHRoKHRoaXMuY29sdW1uV2lkdGhDb2xsZWN0aW9uLmdldENvbHVtbnMoKSk7XG5cblx0XHRpZiAobWluV2lkdGggPiB3aWR0aCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IG1pbldpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29tcG9zaXRpb25XaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSkpO1xuXHR9XG5cblx0Ly8gVE9ETyBSZWZhY3RvclxuXHRwcml2YXRlIHNldENvbnRhaW5lcldpZHRoV2l0aEV2ZW50KGNvbnRhaW5lcldpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IodGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblxuXHRcdGNvbnN0IG1pbldpZHRoID0gY2FsY3VsYXRvci5jYWxjdWxhdGVNaW5XaWR0aCh0aGlzLmNvbHVtbldpZHRoQ29sbGVjdGlvbi5nZXRDb2x1bW5zKCkpO1xuXG5cdFx0aWYgKG1pbldpZHRoID4gY29udGFpbmVyV2lkdGgpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyV2lkdGggPSBtaW5XaWR0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb250YWluZXJXaWR0aCA9IGNvbnRhaW5lcldpZHRoO1xuXHRcdH1cblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIGNvbnRhaW5lcldpZHRoKSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSkpO1xuXHR9XG59XG4iXX0=