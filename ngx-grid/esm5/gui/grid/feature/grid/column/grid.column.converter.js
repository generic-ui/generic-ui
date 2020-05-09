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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvY29sdW1uL2dyaWQuY29sdW1uLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbkcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHL0U7SUFBQTtRQUVrQix3QkFBbUIsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFFcEQsNkJBQXdCLEdBQUcsSUFBSSw0QkFBNEIsRUFBRSxDQUFDO1FBRTlELHdCQUFtQixHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztRQUVwRCwyQkFBc0IsR0FBRyxJQUFJLDBCQUEwQixFQUFFLENBQUM7UUFFMUQsK0JBQTBCLEdBQUcsSUFBSSw4QkFBOEIsRUFBRSxDQUFDO1FBRWxFLHlCQUFvQixHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQztJQXdEeEUsQ0FBQzs7Ozs7SUF0REEscUNBQU87Ozs7SUFBUCxVQUFRLE1BQXdCO1FBQWhDLGlCQUVDO1FBREEsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBckIsQ0FBcUIsRUFBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVPLDJDQUFhOzs7OztJ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eyBHdWlDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2dyaWQuYXBpJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi5jb25maWcnO1xuXG5pbXBvcnQgeyBHcmlkQ29sdW1uVHlwZUNvbnZlcnRlciB9IGZyb20gJy4vZ3JpZC5jb2x1bW4tdHlwZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZENvbHVtblN1bW1hcmllc0NvbnZlcnRlciB9IGZyb20gJy4vc3VtbWFyaWVzL2dyaWQuY29sdW1uLXN1bW1hcmllcy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZENvbHVtblZpZXdDb252ZXJ0ZXIgfSBmcm9tICcuL2dyaWQuY29sdW1uLXZpZXcuY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRDb2x1bW5Tb3J0aW5nQ29udmVydGVyIH0gZnJvbSAnLi9zb3J0aW5nL2dyaWQuY29sdW1uLXNvcnRpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRDb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlciB9IGZyb20gJy4vY2VsbC1lZGl0aW5nL2dyaWQuY29sdW1uLWNlbGwtZWRpdGluZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZENvbHVtbkFsaWduQ29udmVydGVyIH0gZnJvbSAnLi9hbGlnbi9ncmlkLmNvbHVtbi1hbGlnbi5jb252ZXJ0ZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uQ29udmVydGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblR5cGVDb252ZXJ0ZXIgPSBuZXcgR3JpZENvbHVtblR5cGVDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblN1bW1hcmllc0NvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uU3VtbWFyaWVzQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5WaWV3Q29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5WaWV3Q29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5Tb3J0aW5nQ29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5Tb3J0aW5nQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkFsaWduQ29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5BbGlnbkNvbnZlcnRlcigpO1xuXG5cdGNvbnZlcnQoY29uZmlnOiBBcnJheTxHdWlDb2x1bW4+KTogQXJyYXk8Q29sdW1uQ29uZmlnPiB7XG5cdFx0cmV0dXJuIGNvbmZpZy5tYXAoKGMpID0+IHRoaXMuY29udmVydENvbHVtbihjKSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW4oZ3VpQ29sdW1uOiBHdWlDb2x1bW4pOiBDb2x1bW5Db25maWcge1xuXHRcdGxldCBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyA9IHt9O1xuXG5cdFx0aWYgKGd1aUNvbHVtbi50eXBlICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnR5cGUgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy50eXBlID0gdGhpcy5jb2x1bW5UeXBlQ29udmVydGVyLmNvbnZlcnRUeXBlKGd1aUNvbHVtbi50eXBlKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmhlYWRlciAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5oZWFkZXIgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5oZWFkZXIgPSBndWlDb2x1bW4uaGVhZGVyO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuZW5hYmxlZCA9IGd1aUNvbHVtbi5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uZmllbGQgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uZmllbGQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5maWVsZCA9IGd1aUNvbHVtbi5maWVsZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLndpZHRoICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLndpZHRoICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcud2lkdGggPSBndWlDb2x1bW4ud2lkdGg7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5hbGlnbiAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5hbGlnbiAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmFsaWduID0gdGhpcy5jb2x1bW5BbGlnbkNvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5hbGlnbik7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi52aWV3ICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnZpZXcgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy52aWV3ID0gdGhpcy5jb2x1bW5WaWV3Q29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLnZpZXcpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uc3VtbWFyaWVzICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnN1bW1hcmllcyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnN1bW1hcmllcyA9IHRoaXMuY29sdW1uU3VtbWFyaWVzQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLnN1bW1hcmllcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5zb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnNvcnRpbmcgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5zb3J0aW5nID0gdGhpcy5jb2x1bW5Tb3J0aW5nQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLnNvcnRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uY2VsbEVkaXRpbmcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uY2VsbEVkaXRpbmcgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5jZWxsRWRpdGluZyA9IHRoaXMuY29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uY2VsbEVkaXRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4ubWF0Y2hlciAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5tYXRjaGVyICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcubWF0Y2hlciA9IGd1aUNvbHVtbi5tYXRjaGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5Db25maWc7XG5cdH1cblxufVxuIl19