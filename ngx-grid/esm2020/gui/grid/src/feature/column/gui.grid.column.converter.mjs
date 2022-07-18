import { GuiGridColumnTypeConverter } from './gui.grid.column-type.converter';
import { GuiGridColumnSummariesConverter } from './summaries/gui.grid.column-summaries.converter';
import { GuiGridColumnViewConverter } from './gui.grid.column-view.converter';
import { GuiGridColumnSortingConverter } from './sorting/gui.grid.column-sorting.converter';
import { GuiGridColumnCellEditingConverter } from './cell-editing/gui.grid.column-cell-editing.converter';
import { GuiGridColumnAlignConverter } from './align/gui.grid.column-align.converter';
import { CellView } from '../../../../../core/composition/src/domain/column/cell-view';
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
        if (guiColumn.cssClasses !== undefined && guiColumn.cssClasses !== null) {
            columnConfig.cssClasses = guiColumn.cssClasses;
        }
        if (guiColumn.styles !== undefined && guiColumn.styles !== null) {
            columnConfig.styles = guiColumn.styles;
        }
        if (guiColumn.templateRef !== undefined && guiColumn.templateRef !== null) {
            columnConfig.templateRef = guiColumn.templateRef;
            columnConfig.view = CellView.NG_TEMPLATE;
        }
        return columnConfig;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvc3JjL2ZlYXR1cmUvY29sdW1uL2d1aS5ncmlkLmNvbHVtbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDMUcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBR3ZGLE1BQU0sT0FBTyxzQkFBc0I7SUFBbkM7UUFFa0Isd0JBQW1CLEdBQUcsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO1FBRXZELDZCQUF3QixHQUFHLElBQUksK0JBQStCLEVBQUUsQ0FBQztRQUVqRSx3QkFBbUIsR0FBRyxJQUFJLDBCQUEwQixFQUFFLENBQUM7UUFFdkQsMkJBQXNCLEdBQUcsSUFBSSw2QkFBNkIsRUFBRSxDQUFDO1FBRTdELCtCQUEwQixHQUFHLElBQUksaUNBQWlDLEVBQUUsQ0FBQztRQUVyRSx5QkFBb0IsR0FBRyxJQUFJLDJCQUEyQixFQUFFLENBQUM7SUFnRzNFLENBQUM7SUE5RkEsT0FBTyxDQUFDLE9BQTBDO1FBRWpELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBRTdCLElBQUssTUFBeUIsQ0FB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QWlCLENBQUMsV0FBVyxDQUFDO1lBQzFELFlBQVksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUN6QztRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUNvbHVtbiwgR3VpTXVsdGlDb2x1bW4gfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgTXVsdGlDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uVHlwZUNvbnZlcnRlciB9IGZyb20gJy4vZ3VpLmdyaWQuY29sdW1uLXR5cGUuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIgfSBmcm9tICcuL3N1bW1hcmllcy9ndWkuZ3JpZC5jb2x1bW4tc3VtbWFyaWVzLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uVmlld0NvbnZlcnRlciB9IGZyb20gJy4vZ3VpLmdyaWQuY29sdW1uLXZpZXcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5Tb3J0aW5nQ29udmVydGVyIH0gZnJvbSAnLi9zb3J0aW5nL2d1aS5ncmlkLmNvbHVtbi1zb3J0aW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL2NlbGwtZWRpdGluZy9ndWkuZ3JpZC5jb2x1bW4tY2VsbC1lZGl0aW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQWxpZ25Db252ZXJ0ZXIgfSBmcm9tICcuL2FsaWduL2d1aS5ncmlkLmNvbHVtbi1hbGlnbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9kb21haW4vY29sdW1uL2NlbGwtdmlldyc7XG5cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRDb2x1bW5Db252ZXJ0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uVHlwZUNvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uVHlwZUNvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uU3VtbWFyaWVzQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblZpZXdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtblZpZXdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblNvcnRpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtblNvcnRpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkNlbGxFZGl0aW5nQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQWxpZ25Db252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtbkFsaWduQ29udmVydGVyKCk7XG5cblx0Y29udmVydChjb25maWdzOiBBcnJheTxHdWlDb2x1bW4gfCBHdWlNdWx0aUNvbHVtbj4pOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4ge1xuXG5cdFx0cmV0dXJuIGNvbmZpZ3MubWFwKChjb25maWcpID0+IHtcblxuXHRcdFx0aWYgKChjb25maWcgYXMgR3VpTXVsdGlDb2x1bW4pLmNvbHVtbnMgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRcdGNvbnN0IGNvbHVtbnMgPSAoKGNvbmZpZyBhcyBHdWlNdWx0aUNvbHVtbikuY29sdW1ucykubWFwKChjKSA9PiB0aGlzLmNvbnZlcnRDb2x1bW4oYykpO1xuXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aGVhZGVyOiBjb25maWcuaGVhZGVyLFxuXHRcdFx0XHRcdGNvbHVtbnM6IGNvbHVtbnNcblx0XHRcdFx0fTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29udmVydENvbHVtbihjb25maWcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1uKGd1aUNvbHVtbjogR3VpQ29sdW1uKTogQ29sdW1uQ29uZmlnIHtcblx0XHRjb25zdCBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyA9IHt9O1xuXG5cdFx0aWYgKGd1aUNvbHVtbi5uYW1lICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLm5hbWUgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5uYW1lID0gZ3VpQ29sdW1uLm5hbWU7XG5cdFx0fSBlbHNlIGlmIChndWlDb2x1bW4uZmllbGQgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uZmllbGQgIT09IG51bGwpIHtcblx0XHRcdGlmICh0eXBlb2YgZ3VpQ29sdW1uLmZpZWxkID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRjb2x1bW5Db25maWcubmFtZSA9IGd1aUNvbHVtbi5maWVsZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnR5cGUgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4udHlwZSAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnR5cGUgPSB0aGlzLmNvbHVtblR5cGVDb252ZXJ0ZXIuY29udmVydFR5cGUoZ3VpQ29sdW1uLnR5cGUpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uaGVhZGVyICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmhlYWRlciAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmhlYWRlciA9IGd1aUNvbHVtbi5oZWFkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5lbmFibGVkID0gZ3VpQ29sdW1uLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5maWVsZCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5maWVsZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmZpZWxkID0gZ3VpQ29sdW1uLmZpZWxkO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4ud2lkdGggIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4ud2lkdGggIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy53aWR0aCA9IGd1aUNvbHVtbi53aWR0aDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmFsaWduICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmFsaWduICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuYWxpZ24gPSB0aGlzLmNvbHVtbkFsaWduQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLmFsaWduKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnZpZXcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4udmlldyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnZpZXcgPSB0aGlzLmNvbHVtblZpZXdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4udmlldyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5zdW1tYXJpZXMgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uc3VtbWFyaWVzICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuc3VtbWFyaWVzID0gdGhpcy5jb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uc3VtbWFyaWVzKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uc29ydGluZyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnNvcnRpbmcgPSB0aGlzLmNvbHVtblNvcnRpbmdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uc29ydGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5jZWxsRWRpdGluZyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5jZWxsRWRpdGluZyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmNlbGxFZGl0aW5nID0gdGhpcy5jb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5jZWxsRWRpdGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5mb3JtYXR0ZXIgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uZm9ybWF0dGVyICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuZm9ybWF0dGVyID0gZ3VpQ29sdW1uLmZvcm1hdHRlcjtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLm1hdGNoZXIgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4ubWF0Y2hlciAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLm1hdGNoZXIgPSBndWlDb2x1bW4ubWF0Y2hlcjtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmNzc0NsYXNzZXMgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uY3NzQ2xhc3NlcyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmNzc0NsYXNzZXMgPSBndWlDb2x1bW4uY3NzQ2xhc3Nlcztcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnN0eWxlcyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5zdHlsZXMgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5zdHlsZXMgPSBndWlDb2x1bW4uc3R5bGVzO1xuXHRcdH1cblxuXHRcdGlmICgoZ3VpQ29sdW1uIGFzIGFueSkudGVtcGxhdGVSZWYgIT09IHVuZGVmaW5lZCAmJiAoZ3VpQ29sdW1uIGFzIGFueSkudGVtcGxhdGVSZWYgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy50ZW1wbGF0ZVJlZiA9IChndWlDb2x1bW4gYXMgYW55KS50ZW1wbGF0ZVJlZjtcblx0XHRcdGNvbHVtbkNvbmZpZy52aWV3ID0gQ2VsbFZpZXcuTkdfVEVNUExBVEU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbkNvbmZpZztcblx0fVxuXG59XG4iXX0=