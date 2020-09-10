/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ColumnDefinitionFactory } from './definition/column-definition.factory';
import { CompositionReadModeRoot } from './composition.read-mode-root';
var CompositionReadModelRootConverter = /** @class */ (function () {
    function CompositionReadModelRootConverter(columnDefinitionFactory) {
        this.columnDefinitionFactory = columnDefinitionFactory;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    CompositionReadModelRootConverter.prototype.convert = /**
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
        var aggregateId = aggregate.getId();
        return new CompositionReadModeRoot(aggregateId.toReadModelRootId(), ready, allColumnDefs, activeColumnDefs, width, resizeWidth);
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    CompositionReadModelRootConverter.prototype.convertToColumnDef = /**
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
    CompositionReadModelRootConverter.prototype.convertActiveColumnsToColumnDef = /**
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
    CompositionReadModelRootConverter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionReadModelRootConverter.ctorParameters = function () { return [
        { type: ColumnDefinitionFactory }
    ]; };
    return CompositionReadModelRootConverter;
}());
export { CompositionReadModelRootConverter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionReadModelRootConverter.prototype.columnDefinitionFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFakYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFNdkU7SUFHQywyQ0FBb0IsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFDcEUsQ0FBQzs7Ozs7SUFFRCxtREFBTzs7OztJQUFQLFVBQVEsU0FBK0I7O1lBRWhDLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFOztZQUNoQyxVQUFVLEdBQXdCLFNBQVMsQ0FBQyxVQUFVLEVBQUU7O1lBQ3hELGFBQWEsR0FBOEIsU0FBUyxDQUFDLGdCQUFnQixFQUFFOztZQUN2RSxhQUFhLEdBQTRCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7O1lBQzVFLGdCQUFnQixHQUE0QixJQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxDQUFDOztZQUMvRixLQUFLLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRTs7WUFDNUIsV0FBVyxHQUFHLFNBQVMsQ0FBQyxlQUFlLEVBQUU7O1lBQ3pDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFO1FBRWhDLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNqSSxDQUFDOzs7Ozs7SUFFTyw4REFBa0I7Ozs7O0lBQTFCLFVBQTJCLE9BQTRCO1FBQXZELGlCQVlDOztZQVZNLFVBQVUsR0FBNEIsRUFBRTtRQUU5QyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBb0I7O2dCQUU5QixTQUFTLEdBQUcsS0FBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFN0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLDJFQUErQjs7Ozs7SUFBdkMsVUFBd0MsYUFBd0M7UUFBaEYsaUJBWUM7O1lBVk0sVUFBVSxHQUE0QixFQUFFO1FBRTlDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxNQUEwQjs7Z0JBRTFDLFNBQVMsR0FBRyxLQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUU3RCxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Z0JBOUNELFVBQVU7Ozs7Z0JBUkYsdUJBQXVCOztJQXdEaEMsd0NBQUM7Q0FBQSxBQWhERCxJQWdEQztTQS9DWSxpQ0FBaUM7Ozs7OztJQUVqQyxvRUFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25GYWN0b3J5IH0gZnJvbSAnLi9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVSb290IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5yZWFkLW1vZGUtcm9vdCc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdENvbnZlcnRlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb2x1bW5EZWZpbml0aW9uRmFjdG9yeTogQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkpIHtcblx0fVxuXG5cdGNvbnZlcnQoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSk6IENvbXBvc2l0aW9uUmVhZE1vZGVSb290IHtcblxuXHRcdGNvbnN0IHJlYWR5ID0gYWdncmVnYXRlLmlzUmVhZHkoKSxcblx0XHRcdGFsbENvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4gPSBhZ2dyZWdhdGUuZ2V0Q29sdW1ucygpLFxuXHRcdFx0YWN0aXZlQ29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiA9IGFnZ3JlZ2F0ZS5nZXRBY3RpdmVDb2x1bW5zKCksXG5cdFx0XHRhbGxDb2x1bW5EZWZzOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiA9IHRoaXMuY29udmVydFRvQ29sdW1uRGVmKGFsbENvbHVtbnMpLFxuXHRcdFx0YWN0aXZlQ29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSB0aGlzLmNvbnZlcnRBY3RpdmVDb2x1bW5zVG9Db2x1bW5EZWYoYWN0aXZlQ29sdW1ucyksXG5cdFx0XHR3aWR0aCA9IGFnZ3JlZ2F0ZS5nZXRXaWR0aCgpLFxuXHRcdFx0cmVzaXplV2lkdGggPSBhZ2dyZWdhdGUuaXNSZXNpemVFbmFibGVkKCksXG5cdFx0XHRhZ2dyZWdhdGVJZCA9IGFnZ3JlZ2F0ZS5nZXRJZCgpO1xuXG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvblJlYWRNb2RlUm9vdChhZ2dyZWdhdGVJZC50b1JlYWRNb2RlbFJvb3RJZCgpLCByZWFkeSwgYWxsQ29sdW1uRGVmcywgYWN0aXZlQ29sdW1uRGVmcywgd2lkdGgsIHJlc2l6ZVdpZHRoKTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFRvQ29sdW1uRGVmKGNvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4pOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cblx0XHRjb25zdCBjb2x1bW5EZWZzOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiA9IFtdO1xuXG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkVudGl0eSkgPT4ge1xuXG5cdFx0XHRjb25zdCBjb2x1bW5EZWYgPSB0aGlzLmNvbHVtbkRlZmluaXRpb25GYWN0b3J5LmNyZWF0ZShjb2x1bW4pO1xuXG5cdFx0XHRjb2x1bW5EZWZzLnB1c2goY29sdW1uRGVmKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBjb2x1bW5EZWZzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0QWN0aXZlQ29sdW1uc1RvQ29sdW1uRGVmKGFjdGl2ZUNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4pOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cblx0XHRjb25zdCBjb2x1bW5EZWZzOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiA9IFtdO1xuXG5cdFx0YWN0aXZlQ29sdW1ucy5mb3JFYWNoKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSkgPT4ge1xuXG5cdFx0XHRjb25zdCBjb2x1bW5EZWYgPSB0aGlzLmNvbHVtbkRlZmluaXRpb25GYWN0b3J5LmNyZWF0ZShjb2x1bW4pO1xuXG5cdFx0XHRjb2x1bW5EZWZzLnB1c2goY29sdW1uRGVmKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBjb2x1bW5EZWZzO1xuXHR9XG5cbn1cbiJdfQ==