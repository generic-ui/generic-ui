/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiGridColumnTypeConverter } from './gui.grid.column-type.converter';
import { GuiGridColumnSummariesConverter } from './summaries/gui.grid.column-summaries.converter';
import { GuiGridColumnViewConverter } from './gui.grid.column-view.converter';
import { GuiGridColumnSortingConverter } from './sorting/gui.grid.column-sorting.converter';
import { GuiGridColumnCellEditingConverter } from './cell-editing/gui.grid.column-cell-editing.converter';
import { GuiGridColumnAlignConverter } from './align/gui.grid.column-align.converter';
var GuiGridColumnConverter = /** @class */ (function () {
    function GuiGridColumnConverter() {
        this.columnTypeConverter = new GuiGridColumnTypeConverter();
        this.columnSummariesConverter = new GuiGridColumnSummariesConverter();
        this.columnViewConverter = new GuiGridColumnViewConverter();
        this.columnSortingConverter = new GuiGridColumnSortingConverter();
        this.columnCellEditingConverter = new GuiGridColumnCellEditingConverter();
        this.columnAlignConverter = new GuiGridColumnAlignConverter();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    GuiGridColumnConverter.prototype.convert = /**
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
    GuiGridColumnConverter.prototype.convertColumn = /**
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
    return GuiGridColumnConverter;
}());
export { GuiGridColumnConverter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiGridColumnConverter.prototype.columnTypeConverter;
    /**
     * @type {?}
     * @private
     */
    GuiGridColumnConverter.prototype.columnSummariesConverter;
    /**
     * @type {?}
     * @private
     */
    GuiGridColumnConverter.prototype.columnViewConverter;
    /**
     * @type {?}
     * @private
     */
    GuiGridColumnConverter.prototype.columnSortingConverter;
    /**
     * @type {?}
     * @private
     */
    GuiGridColumnConverter.prototype.columnCellEditingConverter;
    /**
     * @type {?}
     * @private
     */
    GuiGridColumnConverter.prototype.columnAlignConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9ndWkuZ3JpZC5jb2x1bW4uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUd0RjtJQUFBO1FBRWtCLHdCQUFtQixHQUFHLElBQUksMEJBQTBCLEVBQUUsQ0FBQztRQUV2RCw2QkFBd0IsR0FBRyxJQUFJLCtCQUErQixFQUFFLENBQUM7UUFFakUsd0JBQW1CLEdBQUcsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO1FBRXZELDJCQUFzQixHQUFHLElBQUksNkJBQTZCLEVBQUUsQ0FBQztRQUU3RCwrQkFBMEIsR0FBRyxJQUFJLGlDQUFpQyxFQUFFLENBQUM7UUFFckUseUJBQW9CLEdBQUcsSUFBSSwyQkFBMkIsRUFBRSxDQUFDO0lBd0QzRSxDQUFDOzs7OztJQXREQSx3Q0FBTzs7OztJQUFQLFVBQVEsTUFBd0I7UUFBaEMsaUJBRUM7UUFEQSxPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFyQixDQUFxQixFQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBRU8sOENB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ImltcG9ydCB7IEd1aUNvbHVtbiB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi5jb25maWcnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uVHlwZUNvbnZlcnRlciB9IGZyb20gJy4vZ3VpLmdyaWQuY29sdW1uLXR5cGUuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIgfSBmcm9tICcuL3N1bW1hcmllcy9ndWkuZ3JpZC5jb2x1bW4tc3VtbWFyaWVzLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uVmlld0NvbnZlcnRlciB9IGZyb20gJy4vZ3VpLmdyaWQuY29sdW1uLXZpZXcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5Tb3J0aW5nQ29udmVydGVyIH0gZnJvbSAnLi9zb3J0aW5nL2d1aS5ncmlkLmNvbHVtbi1zb3J0aW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL2NlbGwtZWRpdGluZy9ndWkuZ3JpZC5jb2x1bW4tY2VsbC1lZGl0aW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQWxpZ25Db252ZXJ0ZXIgfSBmcm9tICcuL2FsaWduL2d1aS5ncmlkLmNvbHVtbi1hbGlnbi5jb252ZXJ0ZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkQ29sdW1uQ29udmVydGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblR5cGVDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtblR5cGVDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblN1bW1hcmllc0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uU3VtbWFyaWVzQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5WaWV3Q29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5WaWV3Q29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5Tb3J0aW5nQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5Tb3J0aW5nQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkFsaWduQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5BbGlnbkNvbnZlcnRlcigpO1xuXG5cdGNvbnZlcnQoY29uZmlnOiBBcnJheTxHdWlDb2x1bW4+KTogQXJyYXk8Q29sdW1uQ29uZmlnPiB7XG5cdFx0cmV0dXJuIGNvbmZpZy5tYXAoKGMpID0+IHRoaXMuY29udmVydENvbHVtbihjKSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW4oZ3VpQ29sdW1uOiBHdWlDb2x1bW4pOiBDb2x1bW5Db25maWcge1xuXHRcdGxldCBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyA9IHt9O1xuXG5cdFx0aWYgKGd1aUNvbHVtbi50eXBlICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnR5cGUgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy50eXBlID0gdGhpcy5jb2x1bW5UeXBlQ29udmVydGVyLmNvbnZlcnRUeXBlKGd1aUNvbHVtbi50eXBlKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmhlYWRlciAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5oZWFkZXIgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5oZWFkZXIgPSBndWlDb2x1bW4uaGVhZGVyO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuZW5hYmxlZCA9IGd1aUNvbHVtbi5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uZmllbGQgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uZmllbGQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5maWVsZCA9IGd1aUNvbHVtbi5maWVsZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLndpZHRoICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLndpZHRoICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcud2lkdGggPSBndWlDb2x1bW4ud2lkdGg7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5hbGlnbiAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5hbGlnbiAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmFsaWduID0gdGhpcy5jb2x1bW5BbGlnbkNvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5hbGlnbik7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi52aWV3ICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnZpZXcgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy52aWV3ID0gdGhpcy5jb2x1bW5WaWV3Q29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLnZpZXcpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uc3VtbWFyaWVzICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnN1bW1hcmllcyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnN1bW1hcmllcyA9IHRoaXMuY29sdW1uU3VtbWFyaWVzQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLnN1bW1hcmllcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5zb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnNvcnRpbmcgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5zb3J0aW5nID0gdGhpcy5jb2x1bW5Tb3J0aW5nQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLnNvcnRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uY2VsbEVkaXRpbmcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uY2VsbEVkaXRpbmcgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5jZWxsRWRpdGluZyA9IHRoaXMuY29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uY2VsbEVkaXRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4ubWF0Y2hlciAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5tYXRjaGVyICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcubWF0Y2hlciA9IGd1aUNvbHVtbi5tYXRjaGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5Db25maWc7XG5cdH1cblxufVxuIl19