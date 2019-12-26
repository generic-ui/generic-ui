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
        const columns = aggregate.getColumns();
        /** @type {?} */
        const columnDefs = this.convertColumnsToColumnDef(columns);
        /** @type {?} */
        const width = aggregate.getWidth();
        /** @type {?} */
        const resizeWidth = aggregate.isResizeEnabled();
        /** @type {?} */
        const id = aggregate.getId();
        return new Composition(id, ready, columnDefs, width, resizeWidth);
    }
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    convertColumnsToColumnDef(columns) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTWpELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFaEMsWUFBb0IsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFBRyxDQUFDOzs7OztJQUV4RSxPQUFPLENBQUMsU0FBK0I7O2NBRWhDLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFOztjQUNoQyxPQUFPLEdBQXdCLFNBQVMsQ0FBQyxVQUFVLEVBQUU7O2NBQ3JELFVBQVUsR0FBNEIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQzs7Y0FDN0UsS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUU7O2NBQzVCLFdBQVcsR0FBRyxTQUFTLENBQUMsZUFBZSxFQUFFOztjQUN6QyxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRTtRQUV2QixPQUFPLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFTyx5QkFBeUIsQ0FBQyxPQUE0Qjs7Y0FFdkQsVUFBVSxHQUE0QixFQUFFO1FBRTlDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUU7O2tCQUVsQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFN0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7OztZQTdCRCxVQUFVOzs7O1lBUEYsdUJBQXVCOzs7Ozs7O0lBVW5CLHVEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkgfSBmcm9tICcuL3JlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbiB9IGZyb20gJy4vcmVhZC9jb21wb3NpdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbW1hbmQvY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uRGVmaW5pdGlvbkZhY3Rvcnk6IENvbHVtbkRlZmluaXRpb25GYWN0b3J5KSB7fVxuXG5cdGNvbnZlcnQoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSk6IENvbXBvc2l0aW9uIHtcblxuXHRcdGNvbnN0IHJlYWR5ID0gYWdncmVnYXRlLmlzUmVhZHkoKSxcblx0XHRcdGNvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4gPSBhZ2dyZWdhdGUuZ2V0Q29sdW1ucygpLFxuXHRcdFx0Y29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSB0aGlzLmNvbnZlcnRDb2x1bW5zVG9Db2x1bW5EZWYoY29sdW1ucyksXG5cdFx0XHR3aWR0aCA9IGFnZ3JlZ2F0ZS5nZXRXaWR0aCgpLFxuXHRcdFx0cmVzaXplV2lkdGggPSBhZ2dyZWdhdGUuaXNSZXNpemVFbmFibGVkKCksXG5cdFx0XHRpZCA9IGFnZ3JlZ2F0ZS5nZXRJZCgpO1xuXG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbihpZCwgcmVhZHksIGNvbHVtbkRlZnMsIHdpZHRoLCByZXNpemVXaWR0aCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW5zVG9Db2x1bW5EZWYoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblxuXHRcdGNvbnN0IGNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gW107XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkRlZiA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbkZhY3RvcnkuY3JlYXRlKGNvbHVtbik7XG5cblx0XHRcdGNvbHVtbkRlZnMucHVzaChjb2x1bW5EZWYpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZnM7XG5cdH1cblxufVxuIl19