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
export class GuiGridColumnConverter {
    constructor() {
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
    convert(configs) {
        return configs.map((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            if (((/** @type {?} */ (config))).columns !== undefined) {
                /** @type {?} */
                const columns = (((/** @type {?} */ (config))).columns).map((/**
                 * @param {?} c
                 * @return {?}
                 */
                (c) => this.convertColumn(c)));
                return {
                    header: config.header,
                    columns: columns
                };
            }
            else {
                return this.convertColumn(config);
            }
        }));
    }
    /**
     * @private
     * @param {?} guiColumn
     * @return {?}
     */
    convertColumn(guiColumn) {
        /** @type {?} */
        let columnConfig = {};
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
        return columnConfig;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9ndWkuZ3JpZC5jb2x1bW4uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUd0RixNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBRWtCLHdCQUFtQixHQUFHLElBQUksMEJBQTBCLEVBQUUsQ0FBQztRQUV2RCw2QkFBd0IsR0FBRyxJQUFJLCtCQUErQixFQUFFLENBQUM7UUFFakUsd0JBQW1CLEdBQUcsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO1FBRXZELDJCQUFzQixHQUFHLElBQUksNkJBQTZCLEVBQUUsQ0FBQztRQUU3RCwrQkFBMEIsR0FBRyxJQUFJLGlDQUFpQyxFQUFFLENBQUM7UUFFckUseUJBQW9CLEdBQUcsSUFBSSwyQkFBMkIsRUFBRSxDQUFDO0lBMkUzRSxDQUFDOzs7OztJQXpFQSxPQUFPLENBQUMsT0FBMEM7UUFFakQsT0FBTyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFFN0IsSUFBSSxDQUFDLG1CQUFBLE1BQU0sRUFBa0IsQ0FBQyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7O3NCQUUvQyxPQUFPLEdB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LFNBQVMsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3RFLFlBQVksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztTQUM3QztRQUVELElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEUsWUFBWSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1NBQ3pDO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztDQUVEOzs7Ozs7SUFyRkEscURBQXdFOzs7OztJQUV4RSwwREFBa0Y7Ozs7O0lBRWxGLHFEQUF3RTs7Ozs7SUFFeEUsd0RBQThFOzs7OztJQUU5RSw0REFBc0Y7Ozs7O0lBRXRGLHNEQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUNvbHVtbiwgR3VpTXVsdGlDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgTXVsdGlDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5cbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5UeXBlQ29udmVydGVyIH0gZnJvbSAnLi9ndWkuZ3JpZC5jb2x1bW4tdHlwZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZENvbHVtblN1bW1hcmllc0NvbnZlcnRlciB9IGZyb20gJy4vc3VtbWFyaWVzL2d1aS5ncmlkLmNvbHVtbi1zdW1tYXJpZXMuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5WaWV3Q29udmVydGVyIH0gZnJvbSAnLi9ndWkuZ3JpZC5jb2x1bW4tdmlldy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZENvbHVtblNvcnRpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3NvcnRpbmcvZ3VpLmdyaWQuY29sdW1uLXNvcnRpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlciB9IGZyb20gJy4vY2VsbC1lZGl0aW5nL2d1aS5ncmlkLmNvbHVtbi1jZWxsLWVkaXRpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5BbGlnbkNvbnZlcnRlciB9IGZyb20gJy4vYWxpZ24vZ3VpLmdyaWQuY29sdW1uLWFsaWduLmNvbnZlcnRlcic7XG5cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRDb2x1bW5Db252ZXJ0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uVHlwZUNvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uVHlwZUNvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uU3VtbWFyaWVzQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblZpZXdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtblZpZXdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblNvcnRpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtblNvcnRpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkNlbGxFZGl0aW5nQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQWxpZ25Db252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtbkFsaWduQ29udmVydGVyKCk7XG5cblx0Y29udmVydChjb25maWdzOiBBcnJheTxHdWlDb2x1bW4gfCBHdWlNdWx0aUNvbHVtbj4pOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4ge1xuXG5cdFx0cmV0dXJuIGNvbmZpZ3MubWFwKChjb25maWcpID0+IHtcblxuXHRcdFx0aWYgKChjb25maWcgYXMgR3VpTXVsdGlDb2x1bW4pLmNvbHVtbnMgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRcdGNvbnN0IGNvbHVtbnMgPSAoKGNvbmZpZyBhcyBHdWlNdWx0aUNvbHVtbikuY29sdW1ucykubWFwKChjKSA9PiB0aGlzLmNvbnZlcnRDb2x1bW4oYykpO1xuXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aGVhZGVyOiBjb25maWcuaGVhZGVyLFxuXHRcdFx0XHRcdGNvbHVtbnM6IGNvbHVtbnNcblx0XHRcdFx0fTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29udmVydENvbHVtbihjb25maWcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1uKGd1aUNvbHVtbjogR3VpQ29sdW1uKTogQ29sdW1uQ29uZmlnIHtcblx0XHRsZXQgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcgPSB7fTtcblxuXHRcdGlmIChndWlDb2x1bW4udHlwZSAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi50eXBlICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcudHlwZSA9IHRoaXMuY29sdW1uVHlwZUNvbnZlcnRlci5jb252ZXJ0VHlwZShndWlDb2x1bW4udHlwZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5oZWFkZXIgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uaGVhZGVyICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuaGVhZGVyID0gZ3VpQ29sdW1uLmhlYWRlcjtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmVuYWJsZWQgPSBndWlDb2x1bW4uZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmZpZWxkICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmZpZWxkICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuZmllbGQgPSBndWlDb2x1bW4uZmllbGQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi53aWR0aCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi53aWR0aCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLndpZHRoID0gZ3VpQ29sdW1uLndpZHRoO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uYWxpZ24gIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uYWxpZ24gIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5hbGlnbiA9IHRoaXMuY29sdW1uQWxpZ25Db252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uYWxpZ24pO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4udmlldyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi52aWV3ICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcudmlldyA9IHRoaXMuY29sdW1uVmlld0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi52aWV3KTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnN1bW1hcmllcyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5zdW1tYXJpZXMgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5zdW1tYXJpZXMgPSB0aGlzLmNvbHVtblN1bW1hcmllc0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5zdW1tYXJpZXMpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uc29ydGluZyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5zb3J0aW5nICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuc29ydGluZyA9IHRoaXMuY29sdW1uU29ydGluZ0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5zb3J0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmNlbGxFZGl0aW5nICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmNlbGxFZGl0aW5nICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuY2VsbEVkaXRpbmcgPSB0aGlzLmNvbHVtbkNlbGxFZGl0aW5nQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLmNlbGxFZGl0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmZvcm1hdHRlciAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5mb3JtYXR0ZXIgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5mb3JtYXR0ZXIgPSBndWlDb2x1bW4uZm9ybWF0dGVyO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4ubWF0Y2hlciAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5tYXRjaGVyICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcubWF0Y2hlciA9IGd1aUNvbHVtbi5tYXRjaGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5Db25maWc7XG5cdH1cblxufVxuIl19