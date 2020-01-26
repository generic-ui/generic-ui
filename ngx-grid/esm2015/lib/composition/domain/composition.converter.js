/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ColumnDefinitionFactory } from './read/definition/column-definition.factory';
import { Composition } from './read/composition';
export class CompositionConverter {
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
        const id = aggregate.getId();
        return new Composition(id, ready, allColumnDefs, activeColumnDefs, width, resizeWidth);
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
CompositionConverter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionConverter.ctorParameters = () => [
    { type: ColumnDefinitionFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionConverter.prototype.columnDefinitionFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUV0RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPakQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUVoQyxZQUFvQix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUFHLENBQUM7Ozs7O0lBRXhFLE9BQU8sQ0FBQyxTQUErQjs7Y0FFaEMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUU7O2NBQ2hDLFVBQVUsR0FBd0IsU0FBUyxDQUFDLFVBQVUsRUFBRTs7Y0FDeEQsYUFBYSxHQUE4QixTQUFTLENBQUMsZ0JBQWdCLEVBQUU7O2NBQ3ZFLGFBQWEsR0FBNEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQzs7Y0FDNUUsZ0JBQWdCLEdBQTRCLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxhQUFhLENBQUM7O2NBQy9GLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFOztjQUM1QixXQUFXLEdBQUcsU0FBUyxDQUFDLGVBQWUsRUFBRTs7Y0FDekMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFFdkIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsT0FBNEI7O2NBRWhELFVBQVUsR0FBNEIsRUFBRTtRQUU5QyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFOztrQkFFbEMsU0FBUyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRTdELFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFTywrQkFBK0IsQ0FBQyxhQUF3Qzs7Y0FFekUsVUFBVSxHQUE0QixFQUFFO1FBRTlDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUEwQixFQUFFLEVBQUU7O2tCQUU5QyxTQUFTLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFN0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7OztZQTdDRCxVQUFVOzs7O1lBUkYsdUJBQXVCOzs7Ozs7O0lBV25CLHVEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkgfSBmcm9tICcuL3JlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbiB9IGZyb20gJy4vcmVhZC9jb21wb3NpdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbW1hbmQvY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4vY29tbWFuZC9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uRGVmaW5pdGlvbkZhY3Rvcnk6IENvbHVtbkRlZmluaXRpb25GYWN0b3J5KSB7fVxuXG5cdGNvbnZlcnQoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSk6IENvbXBvc2l0aW9uIHtcblxuXHRcdGNvbnN0IHJlYWR5ID0gYWdncmVnYXRlLmlzUmVhZHkoKSxcblx0XHRcdGFsbENvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4gPSBhZ2dyZWdhdGUuZ2V0Q29sdW1ucygpLFxuXHRcdFx0YWN0aXZlQ29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiA9IGFnZ3JlZ2F0ZS5nZXRBY3RpdmVDb2x1bW5zKCksXG5cdFx0XHRhbGxDb2x1bW5EZWZzOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiA9IHRoaXMuY29udmVydFRvQ29sdW1uRGVmKGFsbENvbHVtbnMpLFxuXHRcdFx0YWN0aXZlQ29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSB0aGlzLmNvbnZlcnRBY3RpdmVDb2x1bW5zVG9Db2x1bW5EZWYoYWN0aXZlQ29sdW1ucyksXG5cdFx0XHR3aWR0aCA9IGFnZ3JlZ2F0ZS5nZXRXaWR0aCgpLFxuXHRcdFx0cmVzaXplV2lkdGggPSBhZ2dyZWdhdGUuaXNSZXNpemVFbmFibGVkKCksXG5cdFx0XHRpZCA9IGFnZ3JlZ2F0ZS5nZXRJZCgpO1xuXG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbihpZCwgcmVhZHksIGFsbENvbHVtbkRlZnMsIGFjdGl2ZUNvbHVtbkRlZnMsIHdpZHRoLCByZXNpemVXaWR0aCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUb0NvbHVtbkRlZihjb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+KTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXG5cdFx0Y29uc3QgY29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSBbXTtcblxuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5FbnRpdHkpID0+IHtcblxuXHRcdFx0Y29uc3QgY29sdW1uRGVmID0gdGhpcy5jb2x1bW5EZWZpbml0aW9uRmFjdG9yeS5jcmVhdGUoY29sdW1uKTtcblxuXHRcdFx0Y29sdW1uRGVmcy5wdXNoKGNvbHVtbkRlZik7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEFjdGl2ZUNvbHVtbnNUb0NvbHVtbkRlZihhY3RpdmVDb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+KTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXG5cdFx0Y29uc3QgY29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSBbXTtcblxuXHRcdGFjdGl2ZUNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpID0+IHtcblxuXHRcdFx0Y29uc3QgY29sdW1uRGVmID0gdGhpcy5jb2x1bW5EZWZpbml0aW9uRmFjdG9yeS5jcmVhdGUoY29sdW1uKTtcblxuXHRcdFx0Y29sdW1uRGVmcy5wdXNoKGNvbHVtbkRlZik7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmcztcblx0fVxuXG59XG4iXX0=