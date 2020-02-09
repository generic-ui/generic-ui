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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUV0RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNakQ7SUFHQyw4QkFBb0IsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFDcEUsQ0FBQzs7Ozs7SUFFRCxzQ0FBTzs7OztJQUFQLFVBQVEsU0FBK0I7O1lBRWhDLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFOztZQUNoQyxVQUFVLEdBQXdCLFNBQVMsQ0FBQyxVQUFVLEVBQUU7O1lBQ3hELGFBQWEsR0FBOEIsU0FBUyxDQUFDLGdCQUFnQixFQUFFOztZQUN2RSxhQUFhLEdBQTRCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7O1lBQzVFLGdCQUFnQixHQUE0QixJQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxDQUFDOztZQUMvRixLQUFLLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRTs7WUFDNUIsV0FBVyxHQUFHLFNBQVMsQ0FBQyxlQUFlLEVBQUU7O1lBQ3pDLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFO1FBRXZCLE9BQU8sSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7Ozs7OztJQUVPLGlEQUFrQjs7Ozs7SUFBMUIsVUFBMkIsT0FBNEI7UUFBdkQsaUJBWUM7O1lBVk0sVUFBVSxHQUE0QixFQUFFO1FBRTlDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxNQUFvQjs7Z0JBRTlCLFNBQVMsR0FBRyxLQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUU3RCxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRU8sOERBQStCOzs7OztJQUF2QyxVQUF3QyxhQUF3QztRQUFoRixpQkFZQzs7WUFWTSxVQUFVLEdBQTRCLEVBQUU7UUFFOUMsYUFBYSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE1BQTBCOztnQkFFMUMsU0FBUyxHQUFHLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRTdELFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOztnQkE5Q0QsVUFBVTs7OztnQkFSRix1QkFBdUI7O0lBd0RoQywyQkFBQztDQUFBLEFBaERELElBZ0RDO1NBL0NZLG9CQUFvQjs7Ozs7O0lBRXBCLHVEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkgfSBmcm9tICcuL3JlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbiB9IGZyb20gJy4vcmVhZC9jb21wb3NpdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbW1hbmQvY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4vY29tbWFuZC9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uRGVmaW5pdGlvbkZhY3Rvcnk6IENvbHVtbkRlZmluaXRpb25GYWN0b3J5KSB7XG5cdH1cblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUpOiBDb21wb3NpdGlvbiB7XG5cblx0XHRjb25zdCByZWFkeSA9IGFnZ3JlZ2F0ZS5pc1JlYWR5KCksXG5cdFx0XHRhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+ID0gYWdncmVnYXRlLmdldENvbHVtbnMoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4gPSBhZ2dyZWdhdGUuZ2V0QWN0aXZlQ29sdW1ucygpLFxuXHRcdFx0YWxsQ29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSB0aGlzLmNvbnZlcnRUb0NvbHVtbkRlZihhbGxDb2x1bW5zKSxcblx0XHRcdGFjdGl2ZUNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gdGhpcy5jb252ZXJ0QWN0aXZlQ29sdW1uc1RvQ29sdW1uRGVmKGFjdGl2ZUNvbHVtbnMpLFxuXHRcdFx0d2lkdGggPSBhZ2dyZWdhdGUuZ2V0V2lkdGgoKSxcblx0XHRcdHJlc2l6ZVdpZHRoID0gYWdncmVnYXRlLmlzUmVzaXplRW5hYmxlZCgpLFxuXHRcdFx0aWQgPSBhZ2dyZWdhdGUuZ2V0SWQoKTtcblxuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb24oaWQsIHJlYWR5LCBhbGxDb2x1bW5EZWZzLCBhY3RpdmVDb2x1bW5EZWZzLCB3aWR0aCwgcmVzaXplV2lkdGgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VG9Db2x1bW5EZWYoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblxuXHRcdGNvbnN0IGNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gW107XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkRlZiA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbkZhY3RvcnkuY3JlYXRlKGNvbHVtbik7XG5cblx0XHRcdGNvbHVtbkRlZnMucHVzaChjb2x1bW5EZWYpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZnM7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRBY3RpdmVDb2x1bW5zVG9Db2x1bW5EZWYoYWN0aXZlQ29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblxuXHRcdGNvbnN0IGNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gW107XG5cblx0XHRhY3RpdmVDb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkRlZiA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbkZhY3RvcnkuY3JlYXRlKGNvbHVtbik7XG5cblx0XHRcdGNvbHVtbkRlZnMucHVzaChjb2x1bW5EZWYpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZnM7XG5cdH1cblxufVxuIl19