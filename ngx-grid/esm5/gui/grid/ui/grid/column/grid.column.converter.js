/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GridColumnTypeConverter } from './grid.column-type.converter';
import { GridColumnSummariesConverter } from './summaries/grid.column-summaries.converter';
import { GridColumnViewConverter } from './grid.column-view.converter';
import { GridColumnSortingConverter } from './sorting/grid.column-sorting.converter';
import { GridColumnCellEditingConverter } from './cell-editing/grid.column-cell-editing.converter';
import { GridColumnAlignConverter } from './align/grid.column-align.converter';
var GridColumnConverter = /** @class */ (function () {
    function GridColumnConverter() {
        this.columnTypeConverter = new GridColumnTypeConverter();
        this.columnSummariesConverter = new GridColumnSummariesConverter();
        this.columnViewConverter = new GridColumnViewConverter();
        this.columnSortingConverter = new GridColumnSortingConverter();
        this.columnCellEditingConverter = new GridColumnCellEditingConverter();
        this.columnAlignConverter = new GridColumnAlignConverter();
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
        if (guiColumn.align !== undefined && guiColumn.align !== null) {
            columnConfig.align = this.columnAlignConverter.convert(guiColumn.align);
        }
        if (guiColumn.view !== undefined && guiColumn.view !== null) {
            columnConfig.view = this.columnViewConverter.convert(guiColumn.view);
        }
        if (guiColumn.summaries !== undefined && guiColumn.summaries !== null) {
            columnConfig.summaries = this.columnSummariesConverter.convert(guiColumn.summaries);
        }
        if (guiColumn.sorting !== undefined && guiColumn.sorting !== null) {
            columnConfig.sorting = this.columnSortingConverter.convert(guiColumn.sorting);
        }
        if (guiColumn.cellEditing !== undefined && guiColumn.cellEditing !== null) {
            columnConfig.cellEditing = this.columnCellEditingConverter.convert(guiColumn.cellEditing);
        }
        if (guiColumn.matcher !== undefined && guiColumn.matcher !== null) {
            columnConfig.matcher = guiColumn.matcher;
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
    GridColumnConverter.prototype.columnSummariesConverter;
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
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnCellEditingConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnAlignConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbHVtbi9ncmlkLmNvbHVtbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRy9FO0lBQUE7UUFFa0Isd0JBQW1CLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBRXBELDZCQUF3QixHQUFHLElBQUksNEJBQTRCLEVBQUUsQ0FBQztRQUU5RCx3QkFBbUIsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFFcEQsMkJBQXNCLEdBQUcsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO1FBRTFELCtCQUEwQixHQUFHLElBQUksOEJBQThCLEVBQUUsQ0FBQztRQUVsRSx5QkFBb0IsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7SUF3RHhFLENBQUM7Ozs7O0lBdERBLHFDQUFPOzs7O0lBQVAsVUFBUSxNQUF3QjtRQUFoQyxpQkFFQztRQURBLE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLEVBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFFTywyQ0FBYTs7Ozs7SUFBckIs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Q29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL2dyaWQuYXBpJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi5jb25maWcnO1xuXG5pbXBvcnQgeyBHcmlkQ29sdW1uVHlwZUNvbnZlcnRlciB9IGZyb20gJy4vZ3JpZC5jb2x1bW4tdHlwZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZENvbHVtblN1bW1hcmllc0NvbnZlcnRlciB9IGZyb20gJy4vc3VtbWFyaWVzL2dyaWQuY29sdW1uLXN1bW1hcmllcy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZENvbHVtblZpZXdDb252ZXJ0ZXIgfSBmcm9tICcuL2dyaWQuY29sdW1uLXZpZXcuY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRDb2x1bW5Tb3J0aW5nQ29udmVydGVyIH0gZnJvbSAnLi9zb3J0aW5nL2dyaWQuY29sdW1uLXNvcnRpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRDb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlciB9IGZyb20gJy4vY2VsbC1lZGl0aW5nL2dyaWQuY29sdW1uLWNlbGwtZWRpdGluZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZENvbHVtbkFsaWduQ29udmVydGVyIH0gZnJvbSAnLi9hbGlnbi9ncmlkLmNvbHVtbi1hbGlnbi5jb252ZXJ0ZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uQ29udmVydGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblR5cGVDb252ZXJ0ZXIgPSBuZXcgR3JpZENvbHVtblR5cGVDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblN1bW1hcmllc0NvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uU3VtbWFyaWVzQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5WaWV3Q29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5WaWV3Q29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5Tb3J0aW5nQ29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5Tb3J0aW5nQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkFsaWduQ29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5BbGlnbkNvbnZlcnRlcigpO1xuXG5cdGNvbnZlcnQoY29uZmlnOiBBcnJheTxHdWlDb2x1bW4+KTogQXJyYXk8Q29sdW1uQ29uZmlnPiB7XG5cdFx0cmV0dXJuIGNvbmZpZy5tYXAoKGMpID0+IHRoaXMuY29udmVydENvbHVtbihjKSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW4oZ3VpQ29sdW1uOiBHdWlDb2x1bW4pOiBDb2x1bW5Db25maWcge1xuXHRcdGxldCBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyA9IHt9O1xuXG5cdFx0aWYgKGd1aUNvbHVtbi50eXBlICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnR5cGUgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy50eXBlID0gdGhpcy5jb2x1bW5UeXBlQ29udmVydGVyLmNvbnZlcnRUeXBlKGd1aUNvbHVtbi50eXBlKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmhlYWRlciAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5oZWFkZXIgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5oZWFkZXIgPSBndWlDb2x1bW4uaGVhZGVyO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuZW5hYmxlZCA9IGd1aUNvbHVtbi5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uZmllbGQgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uZmllbGQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5maWVsZCA9IGd1aUNvbHVtbi5maWVsZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLndpZHRoICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLndpZHRoICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcud2lkdGggPSBndWlDb2x1bW4ud2lkdGg7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5hbGlnbiAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5hbGlnbiAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmFsaWduID0gdGhpcy5jb2x1bW5BbGlnbkNvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5hbGlnbik7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi52aWV3ICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnZpZXcgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy52aWV3ID0gdGhpcy5jb2x1bW5WaWV3Q29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLnZpZXcpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uc3VtbWFyaWVzICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnN1bW1hcmllcyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnN1bW1hcmllcyA9IHRoaXMuY29sdW1uU3VtbWFyaWVzQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLnN1bW1hcmllcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5zb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnNvcnRpbmcgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5zb3J0aW5nID0gdGhpcy5jb2x1bW5Tb3J0aW5nQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLnNvcnRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uY2VsbEVkaXRpbmcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uY2VsbEVkaXRpbmcgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5jZWxsRWRpdGluZyA9IHRoaXMuY29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uY2VsbEVkaXRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4ubWF0Y2hlciAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5tYXRjaGVyICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcubWF0Y2hlciA9IGd1aUNvbHVtbi5tYXRjaGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5Db25maWc7XG5cdH1cblxufVxuIl19