import { RandomStringGenerator } from '@generic-ui/hermes';
import { ColumnEntity } from './column.entity';
import { ViewEntity } from './view.entity';
import { ColumnId } from '../../api/column/column.id';
import { ColumnPresentationConverter } from './presentation/column.presentation.converter';
export class ColumnEntityFactory {
    columnPresentationConverter;
    constructor(columnPresentationConverter) {
        this.columnPresentationConverter = columnPresentationConverter;
    }
    static services = [ColumnPresentationConverter];
    create(source) {
        if (Array.isArray(source)) {
            return this.createColumns(source);
        }
        else {
            return this.createColumn(source);
        }
    }
    createColumn(params) {
        const columnConfig = params.getColumn(), field = params.getField(), dataType = field.getDataType(), width = this.convertWidth(columnConfig.width) || undefined;
        let view, enabled;
        if (columnConfig.view !== undefined) {
            view = new ViewEntity(columnConfig.view);
        }
        if (columnConfig.enabled !== undefined) {
            enabled = columnConfig.enabled;
        }
        else {
            enabled = true;
        }
        const presentation = this.getPresentation(dataType);
        const columnEntity = new ColumnEntity(new ColumnId(RandomStringGenerator.generate()), field, columnConfig, enabled, presentation, undefined, columnConfig.align, view, width);
        if (columnConfig.header !== undefined) {
            columnEntity.setHeader(columnConfig.header);
        }
        return columnEntity;
    }
    createColumns(columns) {
        const columnEntities = [];
        columns.forEach((column) => {
            columnEntities.push(this.createColumn(column));
        });
        return columnEntities;
    }
    convertWidth(width) {
        return +width;
    }
    getPresentation(dataType) {
        return this.columnPresentationConverter.convert(dataType);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL2NvbXBvc2l0aW9uL3NyYy9kb21haW4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHdEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFHM0YsTUFBTSxPQUFPLG1CQUFtQjtJQUVGO0lBQTdCLFlBQTZCLDJCQUF3RDtRQUF4RCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO0lBQ3JGLENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUl6RCxNQUFNLENBQUMsTUFBMEM7UUFFaEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO0lBQ0YsQ0FBQztJQUVPLFlBQVksQ0FBQyxNQUFvQjtRQUV4QyxNQUFNLFlBQVksR0FBaUIsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUNwRCxLQUFLLEdBQWdCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFDdEMsUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQztRQUU1RCxJQUFJLElBQWdCLEVBQ25CLE9BQWdCLENBQUM7UUFFbEIsSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNwQyxJQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxZQUFZLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUN2QyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQztTQUMvQjthQUFNO1lBQ04sT0FBTyxHQUFHLElBQUksQ0FBQztTQUNmO1FBRUQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwRCxNQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FDcEMsSUFBSSxRQUFRLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFDOUMsS0FBSyxFQUNMLFlBQVksRUFDWixPQUFPLEVBQ1AsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLENBQUMsS0FBSyxFQUNsQixJQUFJLEVBQ0osS0FBSyxDQUNMLENBQUM7UUFFRixJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3RDLFlBQVksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxPQUE0QjtRQUVqRCxNQUFNLGNBQWMsR0FBRyxFQUF5QixDQUFDO1FBRWpELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUU7WUFDeEMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQXNCO1FBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU8sZUFBZSxDQUFDLFFBQWtCO1FBRXpDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi4vLi4vY29yZS9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi8uLi9hcGkvY29sdW1uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4vcHJlc2VudGF0aW9uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbi5jb252ZXJ0ZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5FbnRpdHlGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlcjogQ29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyKSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbQ29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyXTtcblxuXHRjcmVhdGUocGFyYW1zOiBDb2x1bW5QYXJhbXMpOiBDb2x1bW5FbnRpdHk7XG5cdGNyZWF0ZShwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiBBcnJheTxDb2x1bW5FbnRpdHk+O1xuXHRjcmVhdGUoc291cmNlOiBDb2x1bW5QYXJhbXMgfCBBcnJheTxDb2x1bW5QYXJhbXM+KTogQ29sdW1uRW50aXR5IHwgQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVDb2x1bW5zKHNvdXJjZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUNvbHVtbihzb3VyY2UpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ29sdW1uKHBhcmFtczogQ29sdW1uUGFyYW1zKTogQ29sdW1uRW50aXR5IHtcblxuXHRcdGNvbnN0IGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnID0gcGFyYW1zLmdldENvbHVtbigpLFxuXHRcdFx0ZmllbGQ6IENvbHVtbkZpZWxkID0gcGFyYW1zLmdldEZpZWxkKCksXG5cdFx0XHRkYXRhVHlwZSA9IGZpZWxkLmdldERhdGFUeXBlKCksXG5cdFx0XHR3aWR0aCA9IHRoaXMuY29udmVydFdpZHRoKGNvbHVtbkNvbmZpZy53aWR0aCkgfHwgdW5kZWZpbmVkO1xuXG5cdFx0bGV0IHZpZXc6IFZpZXdFbnRpdHksXG5cdFx0XHRlbmFibGVkOiBib29sZWFuO1xuXG5cdFx0aWYgKGNvbHVtbkNvbmZpZy52aWV3ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZpZXcgPSBuZXcgVmlld0VudGl0eShjb2x1bW5Db25maWcudmlldyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtbkNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGVuYWJsZWQgPSBjb2x1bW5Db25maWcuZW5hYmxlZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW5hYmxlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcHJlc2VudGF0aW9uID0gdGhpcy5nZXRQcmVzZW50YXRpb24oZGF0YVR5cGUpO1xuXG5cdFx0Y29uc3QgY29sdW1uRW50aXR5ID0gbmV3IENvbHVtbkVudGl0eShcblx0XHRcdG5ldyBDb2x1bW5JZChSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSksXG5cdFx0XHRmaWVsZCxcblx0XHRcdGNvbHVtbkNvbmZpZyxcblx0XHRcdGVuYWJsZWQsXG5cdFx0XHRwcmVzZW50YXRpb24sXG5cdFx0XHR1bmRlZmluZWQsXG5cdFx0XHRjb2x1bW5Db25maWcuYWxpZ24sXG5cdFx0XHR2aWV3LFxuXHRcdFx0d2lkdGhcblx0XHQpO1xuXG5cdFx0aWYgKGNvbHVtbkNvbmZpZy5oZWFkZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uRW50aXR5LnNldEhlYWRlcihjb2x1bW5Db25maWcuaGVhZGVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uRW50aXR5O1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtblBhcmFtcz4pOiBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblxuXHRcdGNvbnN0IGNvbHVtbkVudGl0aWVzID0gW10gYXMgQXJyYXk8Q29sdW1uRW50aXR5PjtcblxuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5QYXJhbXMpID0+IHtcblx0XHRcdGNvbHVtbkVudGl0aWVzLnB1c2godGhpcy5jcmVhdGVDb2x1bW4oY29sdW1uKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29sdW1uRW50aXRpZXM7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRXaWR0aCh3aWR0aDogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gK3dpZHRoO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRQcmVzZW50YXRpb24oZGF0YVR5cGU6IERhdGFUeXBlKTogQ29sdW1uUHJlc2VudGF0aW9uIHtcblxuXHRcdHJldHVybiB0aGlzLmNvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlci5jb252ZXJ0KGRhdGFUeXBlKTtcblx0fVxufVxuIl19