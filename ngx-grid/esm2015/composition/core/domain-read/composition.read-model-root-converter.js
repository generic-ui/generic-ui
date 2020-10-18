/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ColumnDefinitionFactory } from './definition/column-definition.factory';
import { CompositionReadModeRoot } from './composition.read-mode-root';
export class CompositionReadModelRootConverter {
    /**
     * @param {?} columnDefinitionFactory
     */
    constructor(columnDefinitionFactory) {
        this.columnDefinitionFactory = columnDefinitionFactory;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    convert(aggregate) {
        /** @type {?} */
        const ready = aggregate.isReady();
        /** @type {?} */
        const allColumns = aggregate.getColumns();
        /** @type {?} */
        const activeColumns = aggregate.getActiveColumns();
        /** @type {?} */
        const allColumnDefs = this.convertToColumnDef(allColumns);
        /** @type {?} */
        const activeColumnDefs = this.convertActiveColumnsToColumnDef(activeColumns);
        /** @type {?} */
        const width = aggregate.getWidth();
        /** @type {?} */
        const resizeWidth = aggregate.isResizeEnabled();
        /** @type {?} */
        const aggregateId = aggregate.getId();
        return new CompositionReadModeRoot(aggregateId.toReadModelRootId(), ready, allColumnDefs, activeColumnDefs, width, resizeWidth);
    }
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    convertToColumnDef(columns) {
        /** @type {?} */
        const columnDefs = [];
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            const columnDef = this.columnDefinitionFactory.create(column);
            columnDefs.push(columnDef);
        }));
        return columnDefs;
    }
    /**
     * @private
     * @param {?} activeColumns
     * @return {?}
     */
    convertActiveColumnsToColumnDef(activeColumns) {
        /** @type {?} */
        const columnDefs = [];
        activeColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            const columnDef = this.columnDefinitionFactory.create(column);
            columnDefs.push(columnDef);
        }));
        return columnDefs;
    }
}
CompositionReadModelRootConverter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionReadModelRootConverter.ctorParameters = () => [
    { type: ColumnDefinitionFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionReadModelRootConverter.prototype.columnDefinitionFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWpGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBT3ZFLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7SUFFN0MsWUFBb0IsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFDcEUsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsU0FBK0I7O2NBRWhDLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFOztjQUNoQyxVQUFVLEdBQXdCLFNBQVMsQ0FBQyxVQUFVLEVBQUU7O2NBQ3hELGFBQWEsR0FBOEIsU0FBUyxDQUFDLGdCQUFnQixFQUFFOztjQUN2RSxhQUFhLEdBQTRCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7O2NBQzVFLGdCQUFnQixHQUE0QixJQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxDQUFDOztjQUMvRixLQUFLLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRTs7Y0FDNUIsV0FBVyxHQUFHLFNBQVMsQ0FBQyxlQUFlLEVBQUU7O2NBQ3pDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFO1FBRWhDLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNqSSxDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxPQUE0Qjs7Y0FFaEQsVUFBVSxHQUE0QixFQUFFO1FBRTlDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUU7O2tCQUVsQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFN0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLCtCQUErQixDQUFDLGFBQXdDOztjQUV6RSxVQUFVLEdBQTRCLEVBQUU7UUFFOUMsYUFBYSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQTBCLEVBQUUsRUFBRTs7a0JBRTlDLFNBQVMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUU3RCxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7O1lBOUNELFVBQVU7Ozs7WUFSRix1QkFBdUI7Ozs7Ozs7SUFXbkIsb0VBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSB9IGZyb20gJy4vZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCB9IGZyb20gJy4vY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QnO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uRGVmaW5pdGlvbkZhY3Rvcnk6IENvbHVtbkRlZmluaXRpb25GYWN0b3J5KSB7XG5cdH1cblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUpOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCB7XG5cblx0XHRjb25zdCByZWFkeSA9IGFnZ3JlZ2F0ZS5pc1JlYWR5KCksXG5cdFx0XHRhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+ID0gYWdncmVnYXRlLmdldENvbHVtbnMoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4gPSBhZ2dyZWdhdGUuZ2V0QWN0aXZlQ29sdW1ucygpLFxuXHRcdFx0YWxsQ29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSB0aGlzLmNvbnZlcnRUb0NvbHVtbkRlZihhbGxDb2x1bW5zKSxcblx0XHRcdGFjdGl2ZUNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gdGhpcy5jb252ZXJ0QWN0aXZlQ29sdW1uc1RvQ29sdW1uRGVmKGFjdGl2ZUNvbHVtbnMpLFxuXHRcdFx0d2lkdGggPSBhZ2dyZWdhdGUuZ2V0V2lkdGgoKSxcblx0XHRcdHJlc2l6ZVdpZHRoID0gYWdncmVnYXRlLmlzUmVzaXplRW5hYmxlZCgpLFxuXHRcdFx0YWdncmVnYXRlSWQgPSBhZ2dyZWdhdGUuZ2V0SWQoKTtcblxuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QoYWdncmVnYXRlSWQudG9SZWFkTW9kZWxSb290SWQoKSwgcmVhZHksIGFsbENvbHVtbkRlZnMsIGFjdGl2ZUNvbHVtbkRlZnMsIHdpZHRoLCByZXNpemVXaWR0aCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUb0NvbHVtbkRlZihjb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+KTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXG5cdFx0Y29uc3QgY29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSBbXTtcblxuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5FbnRpdHkpID0+IHtcblxuXHRcdFx0Y29uc3QgY29sdW1uRGVmID0gdGhpcy5jb2x1bW5EZWZpbml0aW9uRmFjdG9yeS5jcmVhdGUoY29sdW1uKTtcblxuXHRcdFx0Y29sdW1uRGVmcy5wdXNoKGNvbHVtbkRlZik7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEFjdGl2ZUNvbHVtbnNUb0NvbHVtbkRlZihhY3RpdmVDb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+KTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXG5cdFx0Y29uc3QgY29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSBbXTtcblxuXHRcdGFjdGl2ZUNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpID0+IHtcblxuXHRcdFx0Y29uc3QgY29sdW1uRGVmID0gdGhpcy5jb2x1bW5EZWZpbml0aW9uRmFjdG9yeS5jcmVhdGUoY29sdW1uKTtcblxuXHRcdFx0Y29sdW1uRGVmcy5wdXNoKGNvbHVtbkRlZik7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmcztcblx0fVxuXG59XG4iXX0=