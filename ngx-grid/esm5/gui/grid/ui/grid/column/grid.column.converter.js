/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GridColumnTypeConverter } from './grid.column-type.converter';
import { GridColumnAggregationConverter } from './grid.column-aggregation.converter';
import { GridColumnViewConverter } from './grid.column-view.converter';
var GridColumnConverter = /** @class */ (function () {
    function GridColumnConverter() {
        this.columnTypeConverter = new GridColumnTypeConverter();
        this.columnAggregationConverter = new GridColumnAggregationConverter();
        this.columnViewConverter = new GridColumnViewConverter();
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbHVtbi9ncmlkLmNvbHVtbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3ZFO0lBQUE7UUFFa0Isd0JBQW1CLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBRXBELCtCQUEwQixHQUFHLElBQUksOEJBQThCLEVBQUUsQ0FBQztRQUVsRSx3QkFBbUIsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7SUFvQ3RFLENBQUM7Ozs7O0lBbENBLHFDQUFPOzs7O0lBQVAsVUFBUSxNQUF3QjtRQUFoQyxpQkFFQztRQURBLE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLEVBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFFTywyQ0FBYTs7Ozs7SUFBckIsVUFBc0IsU0FBb0I7O1lBQ3JDLFlBQVksR0FBaUIsRUFBRTtRQUVuQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQzVELFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekU7UUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ2hFLFlBQVksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUN2QztRQUVELElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDOUQsWUFBWSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUM5RCxZQUFZLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDckM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQzVELFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckU7UUFFRCxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQzFFLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUY7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0lBRUYsMEJBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDOzs7Ozs7O0lBeENBLGtEQUFxRTs7Ozs7SUFFckUseURBQW1GOzs7OztJQUVuRixrREFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi8uLi9ncmlkL2FwcC9ncmlkLmFwaSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb2x1bW4uY29uZmlnJztcblxuaW1wb3J0IHsgR3JpZENvbHVtblR5cGVDb252ZXJ0ZXIgfSBmcm9tICcuL2dyaWQuY29sdW1uLXR5cGUuY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRDb2x1bW5BZ2dyZWdhdGlvbkNvbnZlcnRlciB9IGZyb20gJy4vZ3JpZC5jb2x1bW4tYWdncmVnYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRDb2x1bW5WaWV3Q29udmVydGVyIH0gZnJvbSAnLi9ncmlkLmNvbHVtbi12aWV3LmNvbnZlcnRlcic7XG5cblxuZXhwb3J0IGNsYXNzIEdyaWRDb2x1bW5Db252ZXJ0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uVHlwZUNvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uVHlwZUNvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQWdncmVnYXRpb25Db252ZXJ0ZXIgPSBuZXcgR3JpZENvbHVtbkFnZ3JlZ2F0aW9uQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5WaWV3Q29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5WaWV3Q29udmVydGVyKCk7XG5cblx0Y29udmVydChjb25maWc6IEFycmF5PEd1aUNvbHVtbj4pOiBBcnJheTxDb2x1bW5Db25maWc+IHtcblx0XHRyZXR1cm4gY29uZmlnLm1hcCgoYykgPT4gdGhpcy5jb252ZXJ0Q29sdW1uKGMpKTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydENvbHVtbihndWlDb2x1bW46IEd1aUNvbHVtbik6IENvbHVtbkNvbmZpZyB7XG5cdFx0bGV0IGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnID0ge307XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnR5cGUgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4udHlwZSAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnR5cGUgPSB0aGlzLmNvbHVtblR5cGVDb252ZXJ0ZXIuY29udmVydFR5cGUoZ3VpQ29sdW1uLnR5cGUpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uaGVhZGVyICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmhlYWRlciAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmhlYWRlciA9IGd1aUNvbHVtbi5oZWFkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5maWVsZCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5maWVsZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmZpZWxkID0gZ3VpQ29sdW1uLmZpZWxkO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4ud2lkdGggIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4ud2lkdGggIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy53aWR0aCA9IGd1aUNvbHVtbi53aWR0aDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnZpZXcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4udmlldyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnZpZXcgPSB0aGlzLmNvbHVtblZpZXdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4udmlldyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5hZ2dyZWdhdGlvbiAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5hZ2dyZWdhdGlvbiAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmFnZ3JlZ2F0aW9uID0gdGhpcy5jb2x1bW5BZ2dyZWdhdGlvbkNvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5hZ2dyZWdhdGlvbik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbkNvbmZpZztcblx0fVxuXG59XG4iXX0=