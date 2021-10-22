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
        const columnConfig = {};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9ndWkuZ3JpZC5jb2x1bW4uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFHbkYsTUFBTSxPQUFPLHNCQUFzQjtJQUFuQztRQUVrQix3QkFBbUIsR0FBRyxJQUFJLDBCQUEwQixFQUFFLENBQUM7UUFFdkQsNkJBQXdCLEdBQUcsSUFBSSwrQkFBK0IsRUFBRSxDQUFDO1FBRWpFLHdCQUFtQixHQUFHLElBQUksMEJBQTBCLEVBQUUsQ0FBQztRQUV2RCwyQkFBc0IsR0FBRyxJQUFJLDZCQUE2QixFQUFFLENBQUM7UUFFN0QsK0JBQTBCLEdBQUcsSUFBSSxpQ0FBaUMsRUFBRSxDQUFDO1FBRXJFLHlCQUFvQixHQUFHLElBQUksMkJBQTJCLEVBQUUsQ0FBQztJQWdGM0UsQ0FBQzs7Ozs7SUE5RUEsT0FBTyxDQUFDLE9BQTBDO1FBRWpELE9BQU8sT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBRTdCLElBQUksQ0FBQyxtQkFBQSxNQUFNLEVBQWtCLENB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QUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzFGO1FBRUQsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUN0RSxZQUFZLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7U0FDN0M7UUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxtQkFBQSxTQUFTLEVBQU8sQ0FBQyxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksQ0FBQyxtQkFBQSxTQUFTLEVBQU8sQ0FBQyxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDNUYsWUFBWSxDQUFDLFdBQVcsR0FBRyxDQUFDLG1CQUFBLFNBQVMsRUFBTyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQzFELFlBQVksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUN6QztRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Q0FFRDs7Ozs7O0lBMUZBLHFEQUF3RTs7Ozs7SUFFeEUsMERBQWtGOzs7OztJQUVsRixxREFBd0U7Ozs7O0lBRXhFLHdEQUE4RTs7Ozs7SUFFOUUsNERBQXNGOzs7OztJQUV0RixzREFBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlDb2x1bW4sIEd1aU11bHRpQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uVHlwZUNvbnZlcnRlciB9IGZyb20gJy4vZ3VpLmdyaWQuY29sdW1uLXR5cGUuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIgfSBmcm9tICcuL3N1bW1hcmllcy9ndWkuZ3JpZC5jb2x1bW4tc3VtbWFyaWVzLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uVmlld0NvbnZlcnRlciB9IGZyb20gJy4vZ3VpLmdyaWQuY29sdW1uLXZpZXcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5Tb3J0aW5nQ29udmVydGVyIH0gZnJvbSAnLi9zb3J0aW5nL2d1aS5ncmlkLmNvbHVtbi1zb3J0aW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL2NlbGwtZWRpdGluZy9ndWkuZ3JpZC5jb2x1bW4tY2VsbC1lZGl0aW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQWxpZ25Db252ZXJ0ZXIgfSBmcm9tICcuL2FsaWduL2d1aS5ncmlkLmNvbHVtbi1hbGlnbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcblxuXG5leHBvcnQgY2xhc3MgR3VpR3JpZENvbHVtbkNvbnZlcnRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5UeXBlQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5UeXBlQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtblN1bW1hcmllc0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uVmlld0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uVmlld0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uU29ydGluZ0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uU29ydGluZ0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtbkNlbGxFZGl0aW5nQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5BbGlnbkNvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uQWxpZ25Db252ZXJ0ZXIoKTtcblxuXHRjb252ZXJ0KGNvbmZpZ3M6IEFycmF5PEd1aUNvbHVtbiB8IEd1aU11bHRpQ29sdW1uPik6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPiB7XG5cblx0XHRyZXR1cm4gY29uZmlncy5tYXAoKGNvbmZpZykgPT4ge1xuXG5cdFx0XHRpZiAoKGNvbmZpZyBhcyBHdWlNdWx0aUNvbHVtbikuY29sdW1ucyAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdFx0Y29uc3QgY29sdW1ucyA9ICgoY29uZmlnIGFzIEd1aU11bHRpQ29sdW1uKS5jb2x1bW5zKS5tYXAoKGMpID0+IHRoaXMuY29udmVydENvbHVtbihjKSk7XG5cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRoZWFkZXI6IGNvbmZpZy5oZWFkZXIsXG5cdFx0XHRcdFx0Y29sdW1uczogY29sdW1uc1xuXHRcdFx0XHR9O1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0Q29sdW1uKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW4oZ3VpQ29sdW1uOiBHdWlDb2x1bW4pOiBDb2x1bW5Db25maWcge1xuXHRcdGNvbnN0IGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnID0ge307XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnR5cGUgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4udHlwZSAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnR5cGUgPSB0aGlzLmNvbHVtblR5cGVDb252ZXJ0ZXIuY29udmVydFR5cGUoZ3VpQ29sdW1uLnR5cGUpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uaGVhZGVyICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmhlYWRlciAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmhlYWRlciA9IGd1aUNvbHVtbi5oZWFkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5lbmFibGVkID0gZ3VpQ29sdW1uLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5maWVsZCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5maWVsZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmZpZWxkID0gZ3VpQ29sdW1uLmZpZWxkO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4ud2lkdGggIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4ud2lkdGggIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy53aWR0aCA9IGd1aUNvbHVtbi53aWR0aDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmFsaWduICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmFsaWduICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuYWxpZ24gPSB0aGlzLmNvbHVtbkFsaWduQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLmFsaWduKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnZpZXcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4udmlldyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnZpZXcgPSB0aGlzLmNvbHVtblZpZXdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4udmlldyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5zdW1tYXJpZXMgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uc3VtbWFyaWVzICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuc3VtbWFyaWVzID0gdGhpcy5jb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uc3VtbWFyaWVzKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uc29ydGluZyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnNvcnRpbmcgPSB0aGlzLmNvbHVtblNvcnRpbmdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uc29ydGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5jZWxsRWRpdGluZyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5jZWxsRWRpdGluZyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmNlbGxFZGl0aW5nID0gdGhpcy5jb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5jZWxsRWRpdGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5mb3JtYXR0ZXIgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uZm9ybWF0dGVyICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuZm9ybWF0dGVyID0gZ3VpQ29sdW1uLmZvcm1hdHRlcjtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLm1hdGNoZXIgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4ubWF0Y2hlciAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLm1hdGNoZXIgPSBndWlDb2x1bW4ubWF0Y2hlcjtcblx0XHR9XG5cblx0XHRpZiAoKGd1aUNvbHVtbiBhcyBhbnkpLnRlbXBsYXRlUmVmICE9PSB1bmRlZmluZWQgJiYgKGd1aUNvbHVtbiBhcyBhbnkpLnRlbXBsYXRlUmVmICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcudGVtcGxhdGVSZWYgPSAoZ3VpQ29sdW1uIGFzIGFueSkudGVtcGxhdGVSZWY7XG5cdFx0XHRjb2x1bW5Db25maWcudmlldyA9IENlbGxWaWV3Lk5HX1RFTVBMQVRFO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5Db25maWc7XG5cdH1cblxufVxuIl19