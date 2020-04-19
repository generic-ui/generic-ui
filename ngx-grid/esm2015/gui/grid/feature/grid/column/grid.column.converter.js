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
export class GridColumnConverter {
    constructor() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvY29sdW1uL2dyaWQuY29sdW1uLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbkcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHL0UsTUFBTSxPQUFPLG1CQUFtQjtJQUFoQztRQUVrQix3QkFBbUIsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFFcEQsNkJBQXdCLEdBQUcsSUFBSSw0QkFBNEIsRUFBRSxDQUFDO1FBRTlELHdCQUFtQixHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztRQUVwRCwyQkFBc0IsR0FBRyxJQUFJLDBCQUEwQixFQUFFLENBQUM7UUFFMUQsK0JBQTBCLEdBQUcsSUFBSSw4QkFBOEIsRUFBRSxDQUFDO1FBRWxFLHlCQUFvQixHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQztJQXdEeEUsQ0FBQzs7Ozs7SUF0REEsT0FBTyxDQUFDLE1BQXdCO1FBQy9CLE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxTQUFvQjs7WUFDckMsWUFBWSxHQUFpQixFQUFFO1FBRW5DLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDNUQsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6RTtRQUVELElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDaEUsWUFBWSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsRSxZQUFZLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7U0FDekM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQzlELFlBQVksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztTQUNyQztRQUVELElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDOUQsWUFBWSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUM5RCxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hFO1FBRUQsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUM1RCxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JFO1FBRUQsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUN0RSxZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BGO1FBRUQsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsRSxZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlFO1FBRUQsSUFBSSxTQUFTLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUMxRSxZQUFZLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzFGO1FBRUQsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsRSxZQUFZLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7U0FDekM7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0NBRUQ7Ozs7OztJQWxFQSxrREFBcUU7Ozs7O0lBRXJFLHVEQUErRTs7Ozs7SUFFL0Usa0RBQXFFOzs7OztJQUVyRSxxREFBMkU7Ozs7O0lBRTNFLHlEQUFtRjs7Ozs7SUFFbkYsbURBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvZ3JpZC5hcGknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5cbmltcG9ydCB7IEdyaWRDb2x1bW5UeXBlQ29udmVydGVyIH0gZnJvbSAnLi9ncmlkLmNvbHVtbi10eXBlLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHcmlkQ29sdW1uU3VtbWFyaWVzQ29udmVydGVyIH0gZnJvbSAnLi9zdW1tYXJpZXMvZ3JpZC5jb2x1bW4tc3VtbWFyaWVzLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHcmlkQ29sdW1uVmlld0NvbnZlcnRlciB9IGZyb20gJy4vZ3JpZC5jb2x1bW4tdmlldy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZENvbHVtblNvcnRpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3NvcnRpbmcvZ3JpZC5jb2x1bW4tc29ydGluZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZENvbHVtbkNlbGxFZGl0aW5nQ29udmVydGVyIH0gZnJvbSAnLi9jZWxsLWVkaXRpbmcvZ3JpZC5jb2x1bW4tY2VsbC1lZGl0aW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHcmlkQ29sdW1uQWxpZ25Db252ZXJ0ZXIgfSBmcm9tICcuL2FsaWduL2dyaWQuY29sdW1uLWFsaWduLmNvbnZlcnRlcic7XG5cblxuZXhwb3J0IGNsYXNzIEdyaWRDb2x1bW5Db252ZXJ0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uVHlwZUNvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uVHlwZUNvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uU3VtbWFyaWVzQ29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblZpZXdDb252ZXJ0ZXIgPSBuZXcgR3JpZENvbHVtblZpZXdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblNvcnRpbmdDb252ZXJ0ZXIgPSBuZXcgR3JpZENvbHVtblNvcnRpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkNlbGxFZGl0aW5nQ29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQWxpZ25Db252ZXJ0ZXIgPSBuZXcgR3JpZENvbHVtbkFsaWduQ29udmVydGVyKCk7XG5cblx0Y29udmVydChjb25maWc6IEFycmF5PEd1aUNvbHVtbj4pOiBBcnJheTxDb2x1bW5Db25maWc+IHtcblx0XHRyZXR1cm4gY29uZmlnLm1hcCgoYykgPT4gdGhpcy5jb252ZXJ0Q29sdW1uKGMpKTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydENvbHVtbihndWlDb2x1bW46IEd1aUNvbHVtbik6IENvbHVtbkNvbmZpZyB7XG5cdFx0bGV0IGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnID0ge307XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnR5cGUgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4udHlwZSAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnR5cGUgPSB0aGlzLmNvbHVtblR5cGVDb252ZXJ0ZXIuY29udmVydFR5cGUoZ3VpQ29sdW1uLnR5cGUpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uaGVhZGVyICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmhlYWRlciAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmhlYWRlciA9IGd1aUNvbHVtbi5oZWFkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5lbmFibGVkID0gZ3VpQ29sdW1uLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5maWVsZCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5maWVsZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmZpZWxkID0gZ3VpQ29sdW1uLmZpZWxkO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4ud2lkdGggIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4ud2lkdGggIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy53aWR0aCA9IGd1aUNvbHVtbi53aWR0aDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmFsaWduICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmFsaWduICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuYWxpZ24gPSB0aGlzLmNvbHVtbkFsaWduQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLmFsaWduKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnZpZXcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4udmlldyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnZpZXcgPSB0aGlzLmNvbHVtblZpZXdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4udmlldyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5zdW1tYXJpZXMgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uc3VtbWFyaWVzICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuc3VtbWFyaWVzID0gdGhpcy5jb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uc3VtbWFyaWVzKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uc29ydGluZyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnNvcnRpbmcgPSB0aGlzLmNvbHVtblNvcnRpbmdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uc29ydGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5jZWxsRWRpdGluZyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5jZWxsRWRpdGluZyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmNlbGxFZGl0aW5nID0gdGhpcy5jb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5jZWxsRWRpdGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5tYXRjaGVyICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLm1hdGNoZXIgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5tYXRjaGVyID0gZ3VpQ29sdW1uLm1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbkNvbmZpZztcblx0fVxuXG59XG4iXX0=