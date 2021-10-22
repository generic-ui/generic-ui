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
import { CellView } from '../../../../../composition/core/domain/column/cell-view';
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
     * @param {?} configs
     * @return {?}
     */
    GuiGridColumnConverter.prototype.convert = /**
     * @param {?} configs
     * @return {?}
     */
    function (configs) {
        var _this = this;
        return configs.map((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            if (((/** @type {?} */ (config))).columns !== undefined) {
                /** @type {?} */
                var columns = (((/** @type {?} */ (config))).columns).map((/**
                 * @param {?} c
                 * @return {?}
                 */
                function (c) { return _this.convertColumn(c); }));
                return {
                    header: config.header,
                    columns: columns
                };
            }
            else {
                return _this.convertColumn(config);
            }
        }));
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
        if (guiColumn.formatter !== undefined && guiColumn.formatter !== null) {
            columnConfig.formatter = guiColumn.formatter;
        }
        if (guiColumn.matcher !== undefined && guiColumn.matcher !== null) {
            columnConfig.matcher = guiColumn.matcher;
        }
        if (((/** @type {?} */ (guiColumn))).templateRef !== undefined && ((/** @type {?} */ (guiColumn))).templateRef !== null) {
            columnConfig.templateRef = ((/** @type {?} */ (guiColumn))).templateRef;
            columnConfig.view = CellView.NG_TEMPLATE;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9ndWkuZ3JpZC5jb2x1bW4uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFHbkY7SUFBQTtRQUVrQix3QkFBbUIsR0FBRyxJQUFJLDBCQUEwQixFQUFFLENBQUM7UUFFdkQsNkJBQXdCLEdBQUcsSUFBSSwrQkFBK0IsRUFBRSxDQUFDO1FBRWpFLHdCQUFtQixHQUFHLElBQUksMEJBQTBCLEVBQUUsQ0FBQztRQUV2RCwyQkFBc0IsR0FBRyxJQUFJLDZCQUE2QixFQUFFLENBQUM7UUFFN0QsK0JBQTBCLEdBQUcsSUFBSSxpQ0FBaUMsRUFBRSxDQUFDO1FBRXJFLHlCQUFvQixHQUFHLElBQUksMkJBQTJCLEVBQUUsQ0FBQztJQWdGM0UsQ0FBQzs7Ozs7SUE5RUEsd0NBQU87Ozs7SUFBUCxVQUFRLE9BQTBDO1FBQWxELGlCQWlCQztRQWZBLE9BQU8sT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQU07WUFFekIsSUFBSSxDQUFDLG1CQUFBLE1BQU0sRUFBa0IsQ0FBQyxDQUFD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Q0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzFGO1FBRUQsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUN0RSxZQUFZLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7U0FDN0M7UUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxtQkFBQSxTQUFTLEVBQU8sQ0FBQyxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksQ0FBQyxtQkFBQSxTQUFTLEVBQU8sQ0FBQyxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDNUYsWUFBWSxDQUFDLFdBQVcsR0FBRyxDQUFDLG1CQUFBLFNBQVMsRUFBTyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQzFELFlBQVksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUN6QztRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7SUFFRiw2QkFBQztBQUFELENBQUMsQUE1RkQsSUE0RkM7Ozs7Ozs7SUExRkEscURBQXdFOzs7OztJQUV4RSwwREFBa0Y7Ozs7O0lBRWxGLHFEQUF3RTs7Ozs7SUFFeEUsd0RBQThFOzs7OztJQUU5RSw0REFBc0Y7Ozs7O0lBRXRGLHNEQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUNvbHVtbiwgR3VpTXVsdGlDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgTXVsdGlDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5cbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5UeXBlQ29udmVydGVyIH0gZnJvbSAnLi9ndWkuZ3JpZC5jb2x1bW4tdHlwZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZENvbHVtblN1bW1hcmllc0NvbnZlcnRlciB9IGZyb20gJy4vc3VtbWFyaWVzL2d1aS5ncmlkLmNvbHVtbi1zdW1tYXJpZXMuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5WaWV3Q29udmVydGVyIH0gZnJvbSAnLi9ndWkuZ3JpZC5jb2x1bW4tdmlldy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZENvbHVtblNvcnRpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3NvcnRpbmcvZ3VpLmdyaWQuY29sdW1uLXNvcnRpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlciB9IGZyb20gJy4vY2VsbC1lZGl0aW5nL2d1aS5ncmlkLmNvbHVtbi1jZWxsLWVkaXRpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5BbGlnbkNvbnZlcnRlciB9IGZyb20gJy4vYWxpZ24vZ3VpLmdyaWQuY29sdW1uLWFsaWduLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkQ29sdW1uQ29udmVydGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblR5cGVDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtblR5cGVDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblN1bW1hcmllc0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uU3VtbWFyaWVzQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5WaWV3Q29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5WaWV3Q29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5Tb3J0aW5nQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5Tb3J0aW5nQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkFsaWduQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5BbGlnbkNvbnZlcnRlcigpO1xuXG5cdGNvbnZlcnQoY29uZmlnczogQXJyYXk8R3VpQ29sdW1uIHwgR3VpTXVsdGlDb2x1bW4+KTogQXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+IHtcblxuXHRcdHJldHVybiBjb25maWdzLm1hcCgoY29uZmlnKSA9PiB7XG5cblx0XHRcdGlmICgoY29uZmlnIGFzIEd1aU11bHRpQ29sdW1uKS5jb2x1bW5zICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0XHRjb25zdCBjb2x1bW5zID0gKChjb25maWcgYXMgR3VpTXVsdGlDb2x1bW4pLmNvbHVtbnMpLm1hcCgoYykgPT4gdGhpcy5jb252ZXJ0Q29sdW1uKGMpKTtcblxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGhlYWRlcjogY29uZmlnLmhlYWRlcixcblx0XHRcdFx0XHRjb2x1bW5zOiBjb2x1bW5zXG5cdFx0XHRcdH07XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRDb2x1bW4oY29uZmlnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydENvbHVtbihndWlDb2x1bW46IEd1aUNvbHVtbik6IENvbHVtbkNvbmZpZyB7XG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcgPSB7fTtcblxuXHRcdGlmIChndWlDb2x1bW4udHlwZSAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi50eXBlICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcudHlwZSA9IHRoaXMuY29sdW1uVHlwZUNvbnZlcnRlci5jb252ZXJ0VHlwZShndWlDb2x1bW4udHlwZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5oZWFkZXIgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uaGVhZGVyICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuaGVhZGVyID0gZ3VpQ29sdW1uLmhlYWRlcjtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmVuYWJsZWQgPSBndWlDb2x1bW4uZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmZpZWxkICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmZpZWxkICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuZmllbGQgPSBndWlDb2x1bW4uZmllbGQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi53aWR0aCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi53aWR0aCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLndpZHRoID0gZ3VpQ29sdW1uLndpZHRoO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uYWxpZ24gIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uYWxpZ24gIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5hbGlnbiA9IHRoaXMuY29sdW1uQWxpZ25Db252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uYWxpZ24pO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4udmlldyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi52aWV3ICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcudmlldyA9IHRoaXMuY29sdW1uVmlld0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi52aWV3KTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnN1bW1hcmllcyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5zdW1tYXJpZXMgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5zdW1tYXJpZXMgPSB0aGlzLmNvbHVtblN1bW1hcmllc0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5zdW1tYXJpZXMpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uc29ydGluZyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5zb3J0aW5nICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuc29ydGluZyA9IHRoaXMuY29sdW1uU29ydGluZ0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5zb3J0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmNlbGxFZGl0aW5nICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmNlbGxFZGl0aW5nICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuY2VsbEVkaXRpbmcgPSB0aGlzLmNvbHVtbkNlbGxFZGl0aW5nQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLmNlbGxFZGl0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmZvcm1hdHRlciAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5mb3JtYXR0ZXIgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5mb3JtYXR0ZXIgPSBndWlDb2x1bW4uZm9ybWF0dGVyO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4ubWF0Y2hlciAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5tYXRjaGVyICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcubWF0Y2hlciA9IGd1aUNvbHVtbi5tYXRjaGVyO1xuXHRcdH1cblxuXHRcdGlmICgoZ3VpQ29sdW1uIGFzIGFueSkudGVtcGxhdGVSZWYgIT09IHVuZGVmaW5lZCAmJiAoZ3VpQ29sdW1uIGFzIGFueSkudGVtcGxhdGVSZWYgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy50ZW1wbGF0ZVJlZiA9IChndWlDb2x1bW4gYXMgYW55KS50ZW1wbGF0ZVJlZjtcblx0XHRcdGNvbHVtbkNvbmZpZy52aWV3ID0gQ2VsbFZpZXcuTkdfVEVNUExBVEU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbkNvbmZpZztcblx0fVxuXG59XG4iXX0=