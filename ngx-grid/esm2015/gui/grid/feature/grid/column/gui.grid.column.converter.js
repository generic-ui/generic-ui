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
    convert(configs) {
        return configs.map((config) => {
            if (config.columns !== undefined) {
                const columns = (config.columns).map((c) => this.convertColumn(c));
                return {
                    header: config.header,
                    columns: columns
                };
            }
            else {
                return this.convertColumn(config);
            }
        });
    }
    convertColumn(guiColumn) {
        const columnConfig = {};
        if (guiColumn.name !== undefined && guiColumn.name !== null) {
            columnConfig.name = guiColumn.name;
        }
        else if (guiColumn.field !== undefined && guiColumn.field !== null) {
            if (typeof guiColumn.field === 'string') {
                columnConfig.name = guiColumn.field;
            }
        }
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
        if (guiColumn.templateRef !== undefined && guiColumn.templateRef !== null) {
            columnConfig.templateRef = guiColumn.templateRef;
            columnConfig.view = CellView.NG_TEMPLATE;
        }
        return columnConfig;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9ndWkuZ3JpZC5jb2x1bW4uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUduRixNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBRWtCLHdCQUFtQixHQUFHLElBQUksMEJBQTBCLEVBQUUsQ0FBQztRQUV2RCw2QkFBd0IsR0FBRyxJQUFJLCtCQUErQixFQUFFLENBQUM7UUFFakUsd0JBQW1CLEdBQUcsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO1FBRXZELDJCQUFzQixHQUFHLElBQUksNkJBQTZCLEVBQUUsQ0FBQztRQUU3RCwrQkFBMEIsR0FBRyxJQUFJLGlDQUFpQyxFQUFFLENBQUM7UUFFckUseUJBQW9CLEdBQUcsSUFBSSwyQkFBMkIsRUFBRSxDQUFDO0lBd0YzRSxDQUFDO0lBdEZBLE9BQU8sQ0FBQyxPQUEwQztRQUVqRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUU3QixJQUFLLE1BQXlCLENB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SUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsRSxZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlFO1FBRUQsSUFBSSxTQUFTLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUMxRSxZQUFZLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzFGO1FBRUQsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUN0RSxZQUFZLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7U0FDN0M7UUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUN6QztRQUVELElBQUssU0FBaUIsQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFLLFNBQWlCLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUM1RixZQUFZLENBQUMsV0FBVyxHQUFJLFNBQWlCLENBQUMsV0FBVyxDQUFDO1lBQzFELFlBQVksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUN6QztRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUNvbHVtbiwgR3VpTXVsdGlDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgTXVsdGlDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5cbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5UeXBlQ29udmVydGVyIH0gZnJvbSAnLi9ndWkuZ3JpZC5jb2x1bW4tdHlwZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZENvbHVtblN1bW1hcmllc0NvbnZlcnRlciB9IGZyb20gJy4vc3VtbWFyaWVzL2d1aS5ncmlkLmNvbHVtbi1zdW1tYXJpZXMuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5WaWV3Q29udmVydGVyIH0gZnJvbSAnLi9ndWkuZ3JpZC5jb2x1bW4tdmlldy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZENvbHVtblNvcnRpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3NvcnRpbmcvZ3VpLmdyaWQuY29sdW1uLXNvcnRpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlciB9IGZyb20gJy4vY2VsbC1lZGl0aW5nL2d1aS5ncmlkLmNvbHVtbi1jZWxsLWVkaXRpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5BbGlnbkNvbnZlcnRlciB9IGZyb20gJy4vYWxpZ24vZ3VpLmdyaWQuY29sdW1uLWFsaWduLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkQ29sdW1uQ29udmVydGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblR5cGVDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtblR5cGVDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblN1bW1hcmllc0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uU3VtbWFyaWVzQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5WaWV3Q29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5WaWV3Q29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5Tb3J0aW5nQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5Tb3J0aW5nQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkFsaWduQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5BbGlnbkNvbnZlcnRlcigpO1xuXG5cdGNvbnZlcnQoY29uZmlnczogQXJyYXk8R3VpQ29sdW1uIHwgR3VpTXVsdGlDb2x1bW4+KTogQXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+IHtcblxuXHRcdHJldHVybiBjb25maWdzLm1hcCgoY29uZmlnKSA9PiB7XG5cblx0XHRcdGlmICgoY29uZmlnIGFzIEd1aU11bHRpQ29sdW1uKS5jb2x1bW5zICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0XHRjb25zdCBjb2x1bW5zID0gKChjb25maWcgYXMgR3VpTXVsdGlDb2x1bW4pLmNvbHVtbnMpLm1hcCgoYykgPT4gdGhpcy5jb252ZXJ0Q29sdW1uKGMpKTtcblxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGhlYWRlcjogY29uZmlnLmhlYWRlcixcblx0XHRcdFx0XHRjb2x1bW5zOiBjb2x1bW5zXG5cdFx0XHRcdH07XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRDb2x1bW4oY29uZmlnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydENvbHVtbihndWlDb2x1bW46IEd1aUNvbHVtbik6IENvbHVtbkNvbmZpZyB7XG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcgPSB7fTtcblxuXHRcdGlmIChndWlDb2x1bW4ubmFtZSAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5uYW1lICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcubmFtZSA9IGd1aUNvbHVtbi5uYW1lO1xuXHRcdH0gZWxzZSBpZiAoZ3VpQ29sdW1uLmZpZWxkICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmZpZWxkICE9PSBudWxsKSB7XG5cdFx0XHRpZiAodHlwZW9mIGd1aUNvbHVtbi5maWVsZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Y29sdW1uQ29uZmlnLm5hbWUgPSBndWlDb2x1bW4uZmllbGQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi50eXBlICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnR5cGUgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy50eXBlID0gdGhpcy5jb2x1bW5UeXBlQ29udmVydGVyLmNvbnZlcnRUeXBlKGd1aUNvbHVtbi50eXBlKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmhlYWRlciAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5oZWFkZXIgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5oZWFkZXIgPSBndWlDb2x1bW4uaGVhZGVyO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuZW5hYmxlZCA9IGd1aUNvbHVtbi5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uZmllbGQgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uZmllbGQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5maWVsZCA9IGd1aUNvbHVtbi5maWVsZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLndpZHRoICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLndpZHRoICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcud2lkdGggPSBndWlDb2x1bW4ud2lkdGg7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5hbGlnbiAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5hbGlnbiAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmFsaWduID0gdGhpcy5jb2x1bW5BbGlnbkNvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5hbGlnbik7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi52aWV3ICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnZpZXcgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy52aWV3ID0gdGhpcy5jb2x1bW5WaWV3Q29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLnZpZXcpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uc3VtbWFyaWVzICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnN1bW1hcmllcyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnN1bW1hcmllcyA9IHRoaXMuY29sdW1uU3VtbWFyaWVzQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLnN1bW1hcmllcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5zb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnNvcnRpbmcgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5zb3J0aW5nID0gdGhpcy5jb2x1bW5Tb3J0aW5nQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLnNvcnRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uY2VsbEVkaXRpbmcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uY2VsbEVkaXRpbmcgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5jZWxsRWRpdGluZyA9IHRoaXMuY29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uY2VsbEVkaXRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uZm9ybWF0dGVyICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmZvcm1hdHRlciAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmZvcm1hdHRlciA9IGd1aUNvbHVtbi5mb3JtYXR0ZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5tYXRjaGVyICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLm1hdGNoZXIgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5tYXRjaGVyID0gZ3VpQ29sdW1uLm1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0aWYgKChndWlDb2x1bW4gYXMgYW55KS50ZW1wbGF0ZVJlZiAhPT0gdW5kZWZpbmVkICYmIChndWlDb2x1bW4gYXMgYW55KS50ZW1wbGF0ZVJlZiAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnRlbXBsYXRlUmVmID0gKGd1aUNvbHVtbiBhcyBhbnkpLnRlbXBsYXRlUmVmO1xuXHRcdFx0Y29sdW1uQ29uZmlnLnZpZXcgPSBDZWxsVmlldy5OR19URU1QTEFURTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uQ29uZmlnO1xuXHR9XG5cbn1cbiJdfQ==