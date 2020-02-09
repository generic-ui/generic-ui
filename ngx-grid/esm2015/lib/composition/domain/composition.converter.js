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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUV0RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPakQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUVoQyxZQUFvQix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUNwRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxTQUErQjs7Y0FFaEMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUU7O2NBQ2hDLFVBQVUsR0FBd0IsU0FBUyxDQUFDLFVBQVUsRUFBRTs7Y0FDeEQsYUFBYSxHQUE4QixTQUFTLENBQUMsZ0JBQWdCLEVBQUU7O2NBQ3ZFLGFBQWEsR0FBNEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQzs7Y0FDNUUsZ0JBQWdCLEdBQTRCLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxhQUFhLENBQUM7O2NBQy9GLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFOztjQUM1QixXQUFXLEdBQUcsU0FBUyxDQUFDLGVBQWUsRUFBRTs7Y0FDekMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFFdkIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsT0FBNEI7O2NBRWhELFVBQVUsR0FBNEIsRUFBRTtRQUU5QyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFOztrQkFFbEMsU0FBUyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRTdELFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFTywrQkFBK0IsQ0FBQyxhQUF3Qzs7Y0FFekUsVUFBVSxHQUE0QixFQUFFO1FBRTlDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUEwQixFQUFFLEVBQUU7O2tCQUU5QyxTQUFTLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFN0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7OztZQTlDRCxVQUFVOzs7O1lBUkYsdUJBQXVCOzs7Ozs7O0lBV25CLHVEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkgfSBmcm9tICcuL3JlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbiB9IGZyb20gJy4vcmVhZC9jb21wb3NpdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbW1hbmQvY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4vY29tbWFuZC9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uRGVmaW5pdGlvbkZhY3Rvcnk6IENvbHVtbkRlZmluaXRpb25GYWN0b3J5KSB7XG5cdH1cblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUpOiBDb21wb3NpdGlvbiB7XG5cblx0XHRjb25zdCByZWFkeSA9IGFnZ3JlZ2F0ZS5pc1JlYWR5KCksXG5cdFx0XHRhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+ID0gYWdncmVnYXRlLmdldENvbHVtbnMoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4gPSBhZ2dyZWdhdGUuZ2V0QWN0aXZlQ29sdW1ucygpLFxuXHRcdFx0YWxsQ29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSB0aGlzLmNvbnZlcnRUb0NvbHVtbkRlZihhbGxDb2x1bW5zKSxcblx0XHRcdGFjdGl2ZUNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gdGhpcy5jb252ZXJ0QWN0aXZlQ29sdW1uc1RvQ29sdW1uRGVmKGFjdGl2ZUNvbHVtbnMpLFxuXHRcdFx0d2lkdGggPSBhZ2dyZWdhdGUuZ2V0V2lkdGgoKSxcblx0XHRcdHJlc2l6ZVdpZHRoID0gYWdncmVnYXRlLmlzUmVzaXplRW5hYmxlZCgpLFxuXHRcdFx0aWQgPSBhZ2dyZWdhdGUuZ2V0SWQoKTtcblxuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb24oaWQsIHJlYWR5LCBhbGxDb2x1bW5EZWZzLCBhY3RpdmVDb2x1bW5EZWZzLCB3aWR0aCwgcmVzaXplV2lkdGgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VG9Db2x1bW5EZWYoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblxuXHRcdGNvbnN0IGNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gW107XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkRlZiA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbkZhY3RvcnkuY3JlYXRlKGNvbHVtbik7XG5cblx0XHRcdGNvbHVtbkRlZnMucHVzaChjb2x1bW5EZWYpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZnM7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRBY3RpdmVDb2x1bW5zVG9Db2x1bW5EZWYoYWN0aXZlQ29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblxuXHRcdGNvbnN0IGNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gW107XG5cblx0XHRhY3RpdmVDb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkRlZiA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbkZhY3RvcnkuY3JlYXRlKGNvbHVtbik7XG5cblx0XHRcdGNvbHVtbkRlZnMucHVzaChjb2x1bW5EZWYpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZnM7XG5cdH1cblxufVxuIl19