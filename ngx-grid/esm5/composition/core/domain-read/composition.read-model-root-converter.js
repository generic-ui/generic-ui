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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWpGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTXZFO0lBR0MsMkNBQW9CLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQ3BFLENBQUM7Ozs7O0lBRUQsbURBQU87Ozs7SUFBUCxVQUFRLFNBQStCOztZQUVoQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRTs7WUFDaEMsVUFBVSxHQUF3QixTQUFTLENBQUMsVUFBVSxFQUFFOztZQUN4RCxhQUFhLEdBQThCLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTs7WUFDdkUsYUFBYSxHQUE0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDOztZQUM1RSxnQkFBZ0IsR0FBNEIsSUFBSSxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQzs7WUFDL0YsS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUU7O1lBQzVCLFdBQVcsR0FBRyxTQUFTLENBQUMsZUFBZSxFQUFFOztZQUN6QyxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRTtRQUVoQyxPQUFPLElBQUksdUJBQXVCLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDakksQ0FBQzs7Ozs7O0lBRU8sOERBQWtCOzs7OztJQUExQixVQUEyQixPQUE0QjtRQUF2RCxpQkFZQzs7WUFWTSxVQUFVLEdBQTRCLEVBQUU7UUFFOUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE1BQW9COztnQkFFOUIsU0FBUyxHQUFHLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRTdELFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFTywyRUFBK0I7Ozs7O0lBQXZDLFVBQXdDLGFBQXdDO1FBQWhGLGlCQVlDOztZQVZNLFVBQVUsR0FBNEIsRUFBRTtRQUU5QyxhQUFhLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBMEI7O2dCQUUxQyxTQUFTLEdBQUcsS0FBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFN0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7O2dCQTlDRCxVQUFVOzs7O2dCQVJGLHVCQUF1Qjs7SUF3RGhDLHdDQUFDO0NBQUEsQUFoREQsSUFnREM7U0EvQ1ksaUNBQWlDOzs7Ozs7SUFFakMsb0VBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSB9IGZyb20gJy4vZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCB9IGZyb20gJy4vY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QnO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uRGVmaW5pdGlvbkZhY3Rvcnk6IENvbHVtbkRlZmluaXRpb25GYWN0b3J5KSB7XG5cdH1cblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUpOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCB7XG5cblx0XHRjb25zdCByZWFkeSA9IGFnZ3JlZ2F0ZS5pc1JlYWR5KCksXG5cdFx0XHRhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+ID0gYWdncmVnYXRlLmdldENvbHVtbnMoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4gPSBhZ2dyZWdhdGUuZ2V0QWN0aXZlQ29sdW1ucygpLFxuXHRcdFx0YWxsQ29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSB0aGlzLmNvbnZlcnRUb0NvbHVtbkRlZihhbGxDb2x1bW5zKSxcblx0XHRcdGFjdGl2ZUNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gdGhpcy5jb252ZXJ0QWN0aXZlQ29sdW1uc1RvQ29sdW1uRGVmKGFjdGl2ZUNvbHVtbnMpLFxuXHRcdFx0d2lkdGggPSBhZ2dyZWdhdGUuZ2V0V2lkdGgoKSxcblx0XHRcdHJlc2l6ZVdpZHRoID0gYWdncmVnYXRlLmlzUmVzaXplRW5hYmxlZCgpLFxuXHRcdFx0YWdncmVnYXRlSWQgPSBhZ2dyZWdhdGUuZ2V0SWQoKTtcblxuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QoYWdncmVnYXRlSWQudG9SZWFkTW9kZWxSb290SWQoKSwgcmVhZHksIGFsbENvbHVtbkRlZnMsIGFjdGl2ZUNvbHVtbkRlZnMsIHdpZHRoLCByZXNpemVXaWR0aCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUb0NvbHVtbkRlZihjb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+KTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXG5cdFx0Y29uc3QgY29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSBbXTtcblxuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5FbnRpdHkpID0+IHtcblxuXHRcdFx0Y29uc3QgY29sdW1uRGVmID0gdGhpcy5jb2x1bW5EZWZpbml0aW9uRmFjdG9yeS5jcmVhdGUoY29sdW1uKTtcblxuXHRcdFx0Y29sdW1uRGVmcy5wdXNoKGNvbHVtbkRlZik7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEFjdGl2ZUNvbHVtbnNUb0NvbHVtbkRlZihhY3RpdmVDb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+KTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXG5cdFx0Y29uc3QgY29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSBbXTtcblxuXHRcdGFjdGl2ZUNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpID0+IHtcblxuXHRcdFx0Y29uc3QgY29sdW1uRGVmID0gdGhpcy5jb2x1bW5EZWZpbml0aW9uRmFjdG9yeS5jcmVhdGUoY29sdW1uKTtcblxuXHRcdFx0Y29sdW1uRGVmcy5wdXNoKGNvbHVtbkRlZik7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmcztcblx0fVxuXG59XG4iXX0=