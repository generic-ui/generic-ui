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
     * @param {?} config
     * @return {?}
     */
    convert(config) {
        return config.map((/**
         * @param {?} c
         * @return {?}
         */
        (c) => this.convertColumn(c)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9ndWkuZ3JpZC5jb2x1bW4uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUd0RixNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBRWtCLHdCQUFtQixHQUFHLElBQUksMEJBQTBCLEVBQUUsQ0FBQztRQUV2RCw2QkFBd0IsR0FBRyxJQUFJLCtCQUErQixFQUFFLENBQUM7UUFFakUsd0JBQW1CLEdBQUcsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO1FBRXZELDJCQUFzQixHQUFHLElBQUksNkJBQTZCLEVBQUUsQ0FBQztRQUU3RCwrQkFBMEIsR0FBRyxJQUFJLGlDQUFpQyxFQUFFLENBQUM7UUFFckUseUJBQW9CLEdBQUcsSUFBSSwyQkFBMkIsRUFBRSxDQUFDO0lBd0QzRSxDQUFDOzs7OztJQXREQSxPQUFPLENBQUMsTUFBd0I7UUFDL0IsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLFNBQW9COztZQUNyQyxZQUFZLEdBQWlCLEVBQUU7UUFFbkMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUM1RCxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUNoRSxZQUFZLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7U0FDdkM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUN6QztRQUVELElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDOUQsWUFBWSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUM5RCxZQUFZLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDckM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQzlELFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEU7UUFFRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQzVELFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckU7UUFFRCxJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3RFLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEY7UUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUU7UUFFRCxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQzFFLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUY7UUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUN6QztRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Q0FFRDs7Ozs7O0lBbEVBLHFEQUF3RTs7Ozs7SUFFeEUsMERBQWtGOzs7OztJQUVsRixxREFBd0U7Ozs7O0lBRXhFLHdEQUE4RTs7Ozs7SUFFOUUsNERBQXNGOzs7OztJQUV0RixzREFBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5cbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5UeXBlQ29udmVydGVyIH0gZnJvbSAnLi9ndWkuZ3JpZC5jb2x1bW4tdHlwZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZENvbHVtblN1bW1hcmllc0NvbnZlcnRlciB9IGZyb20gJy4vc3VtbWFyaWVzL2d1aS5ncmlkLmNvbHVtbi1zdW1tYXJpZXMuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5WaWV3Q29udmVydGVyIH0gZnJvbSAnLi9ndWkuZ3JpZC5jb2x1bW4tdmlldy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZENvbHVtblNvcnRpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3NvcnRpbmcvZ3VpLmdyaWQuY29sdW1uLXNvcnRpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlciB9IGZyb20gJy4vY2VsbC1lZGl0aW5nL2d1aS5ncmlkLmNvbHVtbi1jZWxsLWVkaXRpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5BbGlnbkNvbnZlcnRlciB9IGZyb20gJy4vYWxpZ24vZ3VpLmdyaWQuY29sdW1uLWFsaWduLmNvbnZlcnRlcic7XG5cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRDb2x1bW5Db252ZXJ0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uVHlwZUNvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uVHlwZUNvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uU3VtbWFyaWVzQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblZpZXdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtblZpZXdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblNvcnRpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtblNvcnRpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkNlbGxFZGl0aW5nQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQWxpZ25Db252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtbkFsaWduQ29udmVydGVyKCk7XG5cblx0Y29udmVydChjb25maWc6IEFycmF5PEd1aUNvbHVtbj4pOiBBcnJheTxDb2x1bW5Db25maWc+IHtcblx0XHRyZXR1cm4gY29uZmlnLm1hcCgoYykgPT4gdGhpcy5jb252ZXJ0Q29sdW1uKGMpKTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydENvbHVtbihndWlDb2x1bW46IEd1aUNvbHVtbik6IENvbHVtbkNvbmZpZyB7XG5cdFx0bGV0IGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnID0ge307XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnR5cGUgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4udHlwZSAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnR5cGUgPSB0aGlzLmNvbHVtblR5cGVDb252ZXJ0ZXIuY29udmVydFR5cGUoZ3VpQ29sdW1uLnR5cGUpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uaGVhZGVyICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmhlYWRlciAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmhlYWRlciA9IGd1aUNvbHVtbi5oZWFkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5lbmFibGVkID0gZ3VpQ29sdW1uLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5maWVsZCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5maWVsZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmZpZWxkID0gZ3VpQ29sdW1uLmZpZWxkO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4ud2lkdGggIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4ud2lkdGggIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy53aWR0aCA9IGd1aUNvbHVtbi53aWR0aDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmFsaWduICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmFsaWduICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuYWxpZ24gPSB0aGlzLmNvbHVtbkFsaWduQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLmFsaWduKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnZpZXcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4udmlldyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnZpZXcgPSB0aGlzLmNvbHVtblZpZXdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4udmlldyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5zdW1tYXJpZXMgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uc3VtbWFyaWVzICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuc3VtbWFyaWVzID0gdGhpcy5jb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uc3VtbWFyaWVzKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uc29ydGluZyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnNvcnRpbmcgPSB0aGlzLmNvbHVtblNvcnRpbmdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uc29ydGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5jZWxsRWRpdGluZyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5jZWxsRWRpdGluZyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmNlbGxFZGl0aW5nID0gdGhpcy5jb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5jZWxsRWRpdGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5tYXRjaGVyICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLm1hdGNoZXIgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5tYXRjaGVyID0gZ3VpQ29sdW1uLm1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbkNvbmZpZztcblx0fVxuXG59XG4iXX0=