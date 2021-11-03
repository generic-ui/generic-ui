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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9ndWkuZ3JpZC5jb2x1bW4uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUduRixNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBRWtCLHdCQUFtQixHQUFHLElBQUksMEJBQTBCLEVBQUUsQ0FBQztRQUV2RCw2QkFBd0IsR0FBRyxJQUFJLCtCQUErQixFQUFFLENBQUM7UUFFakUsd0JBQW1CLEdBQUcsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO1FBRXZELDJCQUFzQixHQUFHLElBQUksNkJBQTZCLEVBQUUsQ0FBQztRQUU3RCwrQkFBMEIsR0FBRyxJQUFJLGlDQUFpQyxFQUFFLENBQUM7UUFFckUseUJBQW9CLEdBQUcsSUFBSSwyQkFBMkIsRUFBRSxDQUFDO0lBZ0YzRSxDQUFDO0lBOUVBLE9BQU8sQ0FBQyxPQUEwQztRQUVqRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUU3QixJQUFLLE1BQXlCLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFFckQsTUFBTSxPQUFPLEdBQUcsQ0FBRSxNQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV2RixPQUFPO29CQUNOLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtvQkFDckIsT0FBTyxFQUFFLE9BQU87aUJBQ2hCLENBQUM7YUFFRjtpQkFBTTtnQkFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTyxhQUFhLENBQUMsU0FBb0I7UUFDekMsTUFBTSxZQUFZLEdBQWlCLEVBQUUsQ0FBQztRQUV0QyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQzVELFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekU7UUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ2hFLFlBQVksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUN2QztRQUVELElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEUsWUFBWSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUM5RCxZQUFZLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDckM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQzlELFlBQVksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztTQUNyQztRQUVELElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDOUQsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4RTtRQUVELElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDNUQsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyRTtRQUVELElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEUsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwRjtRQUVELElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEUsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5RTtRQUVELElBQUksU0FBUyxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDMUUsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMxRjtRQUVELElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEUsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsRSxZQUFZLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7U0FDekM7UUFFRCxJQUFLLFNBQWlCLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSyxTQUFpQixDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDNUYsWUFBWSxDQUFDLFdBQVcsR0FBSSxTQUFpQixDQUFDLFdBQVcsQ0FBQztZQUMxRCxZQUFZLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7U0FDekM7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlDb2x1bW4sIEd1aU11bHRpQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uVHlwZUNvbnZlcnRlciB9IGZyb20gJy4vZ3VpLmdyaWQuY29sdW1uLXR5cGUuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIgfSBmcm9tICcuL3N1bW1hcmllcy9ndWkuZ3JpZC5jb2x1bW4tc3VtbWFyaWVzLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uVmlld0NvbnZlcnRlciB9IGZyb20gJy4vZ3VpLmdyaWQuY29sdW1uLXZpZXcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5Tb3J0aW5nQ29udmVydGVyIH0gZnJvbSAnLi9zb3J0aW5nL2d1aS5ncmlkLmNvbHVtbi1zb3J0aW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL2NlbGwtZWRpdGluZy9ndWkuZ3JpZC5jb2x1bW4tY2VsbC1lZGl0aW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQWxpZ25Db252ZXJ0ZXIgfSBmcm9tICcuL2FsaWduL2d1aS5ncmlkLmNvbHVtbi1hbGlnbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcblxuXG5leHBvcnQgY2xhc3MgR3VpR3JpZENvbHVtbkNvbnZlcnRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5UeXBlQ29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5UeXBlQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtblN1bW1hcmllc0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uVmlld0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uVmlld0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uU29ydGluZ0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uU29ydGluZ0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtbkNlbGxFZGl0aW5nQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5BbGlnbkNvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uQWxpZ25Db252ZXJ0ZXIoKTtcblxuXHRjb252ZXJ0KGNvbmZpZ3M6IEFycmF5PEd1aUNvbHVtbiB8IEd1aU11bHRpQ29sdW1uPik6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPiB7XG5cblx0XHRyZXR1cm4gY29uZmlncy5tYXAoKGNvbmZpZykgPT4ge1xuXG5cdFx0XHRpZiAoKGNvbmZpZyBhcyBHdWlNdWx0aUNvbHVtbikuY29sdW1ucyAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdFx0Y29uc3QgY29sdW1ucyA9ICgoY29uZmlnIGFzIEd1aU11bHRpQ29sdW1uKS5jb2x1bW5zKS5tYXAoKGMpID0+IHRoaXMuY29udmVydENvbHVtbihjKSk7XG5cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRoZWFkZXI6IGNvbmZpZy5oZWFkZXIsXG5cdFx0XHRcdFx0Y29sdW1uczogY29sdW1uc1xuXHRcdFx0XHR9O1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0Q29sdW1uKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW4oZ3VpQ29sdW1uOiBHdWlDb2x1bW4pOiBDb2x1bW5Db25maWcge1xuXHRcdGNvbnN0IGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnID0ge307XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnR5cGUgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4udHlwZSAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnR5cGUgPSB0aGlzLmNvbHVtblR5cGVDb252ZXJ0ZXIuY29udmVydFR5cGUoZ3VpQ29sdW1uLnR5cGUpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uaGVhZGVyICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmhlYWRlciAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmhlYWRlciA9IGd1aUNvbHVtbi5oZWFkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5lbmFibGVkID0gZ3VpQ29sdW1uLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5maWVsZCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5maWVsZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmZpZWxkID0gZ3VpQ29sdW1uLmZpZWxkO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4ud2lkdGggIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4ud2lkdGggIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy53aWR0aCA9IGd1aUNvbHVtbi53aWR0aDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmFsaWduICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmFsaWduICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuYWxpZ24gPSB0aGlzLmNvbHVtbkFsaWduQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLmFsaWduKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnZpZXcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4udmlldyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnZpZXcgPSB0aGlzLmNvbHVtblZpZXdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4udmlldyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5zdW1tYXJpZXMgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uc3VtbWFyaWVzICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuc3VtbWFyaWVzID0gdGhpcy5jb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uc3VtbWFyaWVzKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uc29ydGluZyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLnNvcnRpbmcgPSB0aGlzLmNvbHVtblNvcnRpbmdDb252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uc29ydGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5jZWxsRWRpdGluZyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5jZWxsRWRpdGluZyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmNlbGxFZGl0aW5nID0gdGhpcy5jb2x1bW5DZWxsRWRpdGluZ0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5jZWxsRWRpdGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5mb3JtYXR0ZXIgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uZm9ybWF0dGVyICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuZm9ybWF0dGVyID0gZ3VpQ29sdW1uLmZvcm1hdHRlcjtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLm1hdGNoZXIgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4ubWF0Y2hlciAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLm1hdGNoZXIgPSBndWlDb2x1bW4ubWF0Y2hlcjtcblx0XHR9XG5cblx0XHRpZiAoKGd1aUNvbHVtbiBhcyBhbnkpLnRlbXBsYXRlUmVmICE9PSB1bmRlZmluZWQgJiYgKGd1aUNvbHVtbiBhcyBhbnkpLnRlbXBsYXRlUmVmICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcudGVtcGxhdGVSZWYgPSAoZ3VpQ29sdW1uIGFzIGFueSkudGVtcGxhdGVSZWY7XG5cdFx0XHRjb2x1bW5Db25maWcudmlldyA9IENlbGxWaWV3Lk5HX1RFTVBMQVRFO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5Db25maWc7XG5cdH1cblxufVxuIl19