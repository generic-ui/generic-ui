/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ColumnDefinitionFactory } from './read/definition/column-definition.factory';
import { Composition } from './read/composition';
var CompositionConverter = /** @class */ (function () {
    function CompositionConverter(columnDefinitionFactory) {
        this.columnDefinitionFactory = columnDefinitionFactory;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    CompositionConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        /** @type {?} */
        var ready = aggregate.isReady();
        /** @type {?} */
        var allColumns = aggregate.getColumns();
        /** @type {?} */
        var activeColumns = aggregate.getActiveColumns();
        /** @type {?} */
        var allColumnDefs = this.convertToColumnDef(allColumns);
        /** @type {?} */
        var activeColumnDefs = this.convertActiveColumnsToColumnDef(activeColumns);
        /** @type {?} */
        var width = aggregate.getWidth();
        /** @type {?} */
        var resizeWidth = aggregate.isResizeEnabled();
        /** @type {?} */
        var id = aggregate.getId();
        return new Composition(id, ready, allColumnDefs, activeColumnDefs, width, resizeWidth);
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    CompositionConverter.prototype.convertToColumnDef = /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        /** @type {?} */
        var columnDefs = [];
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            /** @type {?} */
            var columnDef = _this.columnDefinitionFactory.create(column);
            columnDefs.push(columnDef);
        }));
        return columnDefs;
    };
    /**
     * @private
     * @param {?} activeColumns
     * @return {?}
     */
    CompositionConverter.prototype.convertActiveColumnsToColumnDef = /**
     * @private
     * @param {?} activeColumns
     * @return {?}
     */
    function (activeColumns) {
        var _this = this;
        /** @type {?} */
        var columnDefs = [];
        activeColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            /** @type {?} */
            var columnDef = _this.columnDefinitionFactory.create(column);
            columnDefs.push(columnDef);
        }));
        return columnDefs;
    };
    CompositionConverter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionConverter.ctorParameters = function () { return [
        { type: ColumnDefinitionFactory }
    ]; };
    return CompositionConverter;
}());
export { CompositionConverter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionConverter.prototype.columnDefinitionFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTWpEO0lBR0MsOEJBQW9CLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQUcsQ0FBQzs7Ozs7SUFFeEUsc0NBQU87Ozs7SUFBUCxVQUFRLFNBQStCOztZQUVoQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRTs7WUFDaEMsVUFBVSxHQUF3QixTQUFTLENBQUMsVUFBVSxFQUFFOztZQUN4RCxhQUFhLEdBQThCLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTs7WUFDdkUsYUFBYSxHQUE0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDOztZQUM1RSxnQkFBZ0IsR0FBNEIsSUFBSSxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQzs7WUFDL0YsS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUU7O1lBQzVCLFdBQVcsR0FBRyxTQUFTLENBQUMsZUFBZSxFQUFFOztZQUN6QyxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRTtRQUV2QixPQUFPLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4RixDQUFDOzs7Ozs7SUFFTyxpREFBa0I7Ozs7O0lBQTFCLFVBQTJCLE9BQTRCO1FBQXZELGlCQVlDOztZQVZNLFVBQVUsR0FBNEIsRUFBRTtRQUU5QyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBb0I7O2dCQUU5QixTQUFTLEdBQUcsS0FBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFN0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLDhEQUErQjs7Ozs7SUFBdkMsVUFBd0MsYUFBd0M7UUFBaEYsaUJBWUM7O1lBVk0sVUFBVSxHQUE0QixFQUFFO1FBRTlDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxNQUEwQjs7Z0JBRTFDLFNBQVMsR0FBRyxLQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUU3RCxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Z0JBN0NELFVBQVU7Ozs7Z0JBUkYsdUJBQXVCOztJQXVEaEMsMkJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQTlDWSxvQkFBb0I7Ozs7OztJQUVwQix1REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25GYWN0b3J5IH0gZnJvbSAnLi9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4vY29tbWFuZC9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb24gfSBmcm9tICcuL3JlYWQvY29tcG9zaXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL3JlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbW1hbmQvY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ29udmVydGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbHVtbkRlZmluaXRpb25GYWN0b3J5OiBDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSkge31cblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUpOiBDb21wb3NpdGlvbiB7XG5cblx0XHRjb25zdCByZWFkeSA9IGFnZ3JlZ2F0ZS5pc1JlYWR5KCksXG5cdFx0XHRhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+ID0gYWdncmVnYXRlLmdldENvbHVtbnMoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4gPSBhZ2dyZWdhdGUuZ2V0QWN0aXZlQ29sdW1ucygpLFxuXHRcdFx0YWxsQ29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSB0aGlzLmNvbnZlcnRUb0NvbHVtbkRlZihhbGxDb2x1bW5zKSxcblx0XHRcdGFjdGl2ZUNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gdGhpcy5jb252ZXJ0QWN0aXZlQ29sdW1uc1RvQ29sdW1uRGVmKGFjdGl2ZUNvbHVtbnMpLFxuXHRcdFx0d2lkdGggPSBhZ2dyZWdhdGUuZ2V0V2lkdGgoKSxcblx0XHRcdHJlc2l6ZVdpZHRoID0gYWdncmVnYXRlLmlzUmVzaXplRW5hYmxlZCgpLFxuXHRcdFx0aWQgPSBhZ2dyZWdhdGUuZ2V0SWQoKTtcblxuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb24oaWQsIHJlYWR5LCBhbGxDb2x1bW5EZWZzLCBhY3RpdmVDb2x1bW5EZWZzLCB3aWR0aCwgcmVzaXplV2lkdGgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VG9Db2x1bW5EZWYoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblxuXHRcdGNvbnN0IGNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gW107XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkRlZiA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbkZhY3RvcnkuY3JlYXRlKGNvbHVtbik7XG5cblx0XHRcdGNvbHVtbkRlZnMucHVzaChjb2x1bW5EZWYpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZnM7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRBY3RpdmVDb2x1bW5zVG9Db2x1bW5EZWYoYWN0aXZlQ29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblxuXHRcdGNvbnN0IGNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gW107XG5cblx0XHRhY3RpdmVDb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkRlZiA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbkZhY3RvcnkuY3JlYXRlKGNvbHVtbik7XG5cblx0XHRcdGNvbHVtbkRlZnMucHVzaChjb2x1bW5EZWYpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZnM7XG5cdH1cblxufVxuIl19