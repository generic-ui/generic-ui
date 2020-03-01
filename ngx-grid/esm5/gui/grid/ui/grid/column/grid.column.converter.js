/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GridColumnTypeConverter } from './grid.column-type.converter';
import { GridColumnAggregationConverter } from './aggregation/grid.column-aggregation.converter';
import { GridColumnViewConverter } from './grid.column-view.converter';
import { GridColumnSortingConverter } from './sorting/grid.column-sorting.converter';
var GridColumnConverter = /** @class */ (function () {
    function GridColumnConverter() {
        this.columnTypeConverter = new GridColumnTypeConverter();
        this.columnAggregationConverter = new GridColumnAggregationConverter();
        this.columnViewConverter = new GridColumnViewConverter();
        this.columnSortingConverter = new GridColumnSortingConverter();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    GridColumnConverter.prototype.convert = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return config.map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return _this.convertColumn(c); }));
    };
    /**
     * @private
     * @param {?} guiColumn
     * @return {?}
     */
    GridColumnConverter.prototype.convertColumn = /**
     * @private
     * @param {?} guiColumn
     * @return {?}
     */
    function (guiColumn) {
        /** @type {?} */
        var columnConfig = {};
        if (guiColumn.type !== undefined && guiColumn.type !== null) {
            columnConfig.type = this.columnTypeConverter.convertType(guiColumn.type);
        }
        if (guiColumn.header !== undefined && guiColumn.header !== null) {
            columnConfig.header = guiColumn.header;
        }
        if (guiColumn.enabled !== undefined && guiColumn.enabled !== null) {
            columnConfig.enabled = guiColumn.enabled;
        }
        if (guiColumn.field !== undefined && guiColumn.field !== null) {
            columnConfig.field = guiColumn.field;
        }
        if (guiColumn.width !== undefined && guiColumn.width !== null) {
            columnConfig.width = guiColumn.width;
        }
        if (guiColumn.view !== undefined && guiColumn.view !== null) {
            columnConfig.view = this.columnViewConverter.convert(guiColumn.view);
        }
        if (guiColumn.aggregation !== undefined && guiColumn.aggregation !== null) {
            columnConfig.aggregation = this.columnAggregationConverter.convert(guiColumn.aggregation);
        }
        if (guiColumn.sorting !== undefined && guiColumn.sorting !== null) {
            columnConfig.sorting = this.columnSortingConverter.convert(guiColumn.sorting);
        }
        return columnConfig;
    };
    return GridColumnConverter;
}());
export { GridColumnConverter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnTypeConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnAggregationConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnViewConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnSortingConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbHVtbi9ncmlkLmNvbHVtbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBR3JGO0lBQUE7UUFFa0Isd0JBQW1CLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBRXBELCtCQUEwQixHQUFHLElBQUksOEJBQThCLEVBQUUsQ0FBQztRQUVsRSx3QkFBbUIsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFFcEQsMkJBQXNCLEdBQUcsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO0lBNEM1RSxDQUFDOzs7OztJQTFDQSxxQ0FBTzs7OztJQUFQLFVBQVEsTUFBd0I7UUFBaEMsaUJBRUM7UUFEQSxPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFyQixDQUFxQixFQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBRU8sMkNBQWE7Ozs7O0lBQXJCLFVBQXNCLFNBQW9COztZQUNyQyxZQUFZLEdBQWlCLEVBQUU7UUFFbkMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUM1RCxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUNoRSxZQUFZLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7U0FDdkM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUN6QztRQUVELElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDOUQsWUFBWSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUM5RCxZQUFZLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDckM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQzVELFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckU7UUFFRCxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQzFFLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUY7UUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUU7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0lBRUYsMEJBQUM7QUFBRCxDQUFDLEFBcERELElBb0RDOzs7Ozs7O0lBbERBLGtEQUFxRTs7Ozs7SUFFckUseURBQW1GOzs7OztJQUVuRixrREFBcUU7Ozs7O0lBRXJFLHFEQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUNvbHVtbiB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi5jb25maWcnO1xuXG5pbXBvcnQgeyBHcmlkQ29sdW1uVHlwZUNvbnZlcnRlciB9IGZyb20gJy4vZ3JpZC5jb2x1bW4tdHlwZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZENvbHVtbkFnZ3JlZ2F0aW9uQ29udmVydGVyIH0gZnJvbSAnLi9hZ2dyZWdhdGlvbi9ncmlkLmNvbHVtbi1hZ2dyZWdhdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZENvbHVtblZpZXdDb252ZXJ0ZXIgfSBmcm9tICcuL2dyaWQuY29sdW1uLXZpZXcuY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRDb2x1bW5Tb3J0aW5nQ29udmVydGVyIH0gZnJvbSAnLi9zb3J0aW5nL2dyaWQuY29sdW1uLXNvcnRpbmcuY29udmVydGVyJztcblxuXG5leHBvcnQgY2xhc3MgR3JpZENvbHVtbkNvbnZlcnRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5UeXBlQ29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5UeXBlQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5BZ2dyZWdhdGlvbkNvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uQWdncmVnYXRpb25Db252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblZpZXdDb252ZXJ0ZXIgPSBuZXcgR3JpZENvbHVtblZpZXdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblNvcnRpbmdDb252ZXJ0ZXIgPSBuZXcgR3JpZENvbHVtblNvcnRpbmdDb252ZXJ0ZXIoKTtcblxuXHRjb252ZXJ0KGNvbmZpZzogQXJyYXk8R3VpQ29sdW1uPik6IEFycmF5PENvbHVtbkNvbmZpZz4ge1xuXHRcdHJldHVybiBjb25maWcubWFwKChjKSA9PiB0aGlzLmNvbnZlcnRDb2x1bW4oYykpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1uKGd1aUNvbHVtbjogR3VpQ29sdW1uKTogQ29sdW1uQ29uZmlnIHtcblx0XHRsZXQgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcgPSB7fTtcblxuXHRcdGlmIChndWlDb2x1bW4udHlwZSAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi50eXBlICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcudHlwZSA9IHRoaXMuY29sdW1uVHlwZUNvbnZlcnRlci5jb252ZXJ0VHlwZShndWlDb2x1bW4udHlwZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5oZWFkZXIgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uaGVhZGVyICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuaGVhZGVyID0gZ3VpQ29sdW1uLmhlYWRlcjtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmVuYWJsZWQgPSBndWlDb2x1bW4uZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmZpZWxkICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmZpZWxkICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuZmllbGQgPSBndWlDb2x1bW4uZmllbGQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi53aWR0aCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi53aWR0aCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLndpZHRoID0gZ3VpQ29sdW1uLndpZHRoO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4udmlldyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi52aWV3ICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcudmlldyA9IHRoaXMuY29sdW1uVmlld0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi52aWV3KTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmFnZ3JlZ2F0aW9uICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmFnZ3JlZ2F0aW9uICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuYWdncmVnYXRpb24gPSB0aGlzLmNvbHVtbkFnZ3JlZ2F0aW9uQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLmFnZ3JlZ2F0aW9uKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uc29ydGluZyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnNvcnRpbmcgPSB0aGlzLmNvbHVtblNvcnRpbmdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uc29ydGluZyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbkNvbmZpZztcblx0fVxuXG59XG4iXX0=