/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RandomStringGenerator } from '@generic-ui/hermes';
import { ColumnEntity } from './column.entity';
import { ViewEntity } from './view.entity';
import { ColumnId } from './column.id';
import { ColumnPresentationConverter } from './presentation/column.presentation.converter';
export class ColumnEntityFactory {
    /**
     * @param {?} columnPresentationConverter
     */
    constructor(columnPresentationConverter) {
        this.columnPresentationConverter = columnPresentationConverter;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    create(data) {
        if (Array.isArray(data)) {
            return this.createColumns(data);
        }
        else {
            return this.createColumn(data);
        }
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    createColumn(params) {
        /** @type {?} */
        let columnConfig = params.getColumn();
        /** @type {?} */
        let field = params.getField();
        /** @type {?} */
        let width = this.convertWidth(columnConfig.width) || undefined;
        /** @type {?} */
        let view;
        /** @type {?} */
        let enabled;
        /** @type {?} */
        let dataType = field.getDataType();
        if (columnConfig.view !== undefined) {
            view = new ViewEntity(columnConfig.view);
        }
        if (columnConfig.enabled !== undefined) {
            enabled = columnConfig.enabled;
        }
        else {
            enabled = true;
        }
        /** @type {?} */
        const presentation = this.getPresentation(dataType);
        /** @type {?} */
        let columnEntity = new ColumnEntity(new ColumnId(RandomStringGenerator.generate()), field, columnConfig, enabled, presentation, undefined, columnConfig.align, view, width);
        if (columnConfig.header !== undefined) {
            columnEntity.setHeader(columnConfig.header);
        }
        return columnEntity;
    }
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    createColumns(columns) {
        /** @type {?} */
        let columnEntities = (/** @type {?} */ ([]));
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            columnEntities.push(this.createColumn(column));
        }));
        return columnEntities;
    }
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    convertWidth(width) {
        return +width;
    }
    /**
     * @private
     * @param {?} dataType
     * @return {?}
     */
    getPresentation(dataType) {
        return this.columnPresentationConverter.convert(dataType);
    }
}
ColumnEntityFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ColumnEntityFactory.ctorParameters = () => [
    { type: ColumnPresentationConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnEntityFactory.prototype.columnPresentationConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3ZDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBSTNGLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFFL0IsWUFBNkIsMkJBQXdEO1FBQXhELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFDckYsQ0FBQzs7Ozs7SUFJRCxNQUFNLENBQUMsSUFBd0M7UUFFOUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLE1BQW9COztZQUVwQyxZQUFZLEdBQWlCLE1BQU0sQ0FBQyxTQUFTLEVBQUU7O1lBQ2xELEtBQUssR0FBZ0IsTUFBTSxDQUFDLFFBQVEsRUFBRTs7WUFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVM7O1lBQzFELElBQUk7O1lBQ0osT0FBTzs7WUFDUCxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRTtRQUUvQixJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BDLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ3ZDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDO1NBQy9CO2FBQU07WUFDTixPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ2Y7O2NBRUssWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDOztZQUUvQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQ2xDLElBQUksUUFBUSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQzlDLEtBQUssRUFDTCxZQUFZLEVBQ1osT0FBTyxFQUNQLFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxDQUFDLEtBQUssRUFDbEIsSUFBSSxFQUNKLEtBQUssQ0FDTDtRQUVELElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDdEMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsT0FBNEI7O1lBRTdDLGNBQWMsR0FBRyxtQkFBQSxFQUFFLEVBQXVCO1FBRTlDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUU7WUFDeEMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBc0I7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxRQUFrQjtRQUV6QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7O1lBM0VELFVBQVU7Ozs7WUFIRiwyQkFBMkI7Ozs7Ozs7SUFNdkIsMERBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuL3ByZXNlbnRhdGlvbi9jb2x1bW4ucHJlc2VudGF0aW9uLmNvbnZlcnRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtbkVudGl0eUZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyOiBDb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIpIHtcblx0fVxuXG5cdGNyZWF0ZShwYXJhbXM6IENvbHVtblBhcmFtcyk6IENvbHVtbkVudGl0eTtcblx0Y3JlYXRlKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IEFycmF5PENvbHVtbkVudGl0eT47XG5cdGNyZWF0ZShkYXRhOiBDb2x1bW5QYXJhbXMgfCBBcnJheTxDb2x1bW5QYXJhbXM+KTogQ29sdW1uRW50aXR5IHwgQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlQ29sdW1ucyhkYXRhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlQ29sdW1uKGRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ29sdW1uKHBhcmFtczogQ29sdW1uUGFyYW1zKTogQ29sdW1uRW50aXR5IHtcblxuXHRcdGxldCBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyA9IHBhcmFtcy5nZXRDb2x1bW4oKSxcblx0XHRcdGZpZWxkOiBDb2x1bW5GaWVsZCA9IHBhcmFtcy5nZXRGaWVsZCgpLFxuXHRcdFx0d2lkdGggPSB0aGlzLmNvbnZlcnRXaWR0aChjb2x1bW5Db25maWcud2lkdGgpIHx8IHVuZGVmaW5lZCxcblx0XHRcdHZpZXcsXG5cdFx0XHRlbmFibGVkLFxuXHRcdFx0ZGF0YVR5cGUgPSBmaWVsZC5nZXREYXRhVHlwZSgpO1xuXG5cdFx0aWYgKGNvbHVtbkNvbmZpZy52aWV3ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZpZXcgPSBuZXcgVmlld0VudGl0eShjb2x1bW5Db25maWcudmlldyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtbkNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGVuYWJsZWQgPSBjb2x1bW5Db25maWcuZW5hYmxlZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW5hYmxlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcHJlc2VudGF0aW9uID0gdGhpcy5nZXRQcmVzZW50YXRpb24oZGF0YVR5cGUpO1xuXG5cdFx0bGV0IGNvbHVtbkVudGl0eSA9IG5ldyBDb2x1bW5FbnRpdHkoXG5cdFx0XHRuZXcgQ29sdW1uSWQoUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCkpLFxuXHRcdFx0ZmllbGQsXG5cdFx0XHRjb2x1bW5Db25maWcsXG5cdFx0XHRlbmFibGVkLFxuXHRcdFx0cHJlc2VudGF0aW9uLFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0Y29sdW1uQ29uZmlnLmFsaWduLFxuXHRcdFx0dmlldyxcblx0XHRcdHdpZHRoXG5cdFx0KTtcblxuXHRcdGlmIChjb2x1bW5Db25maWcuaGVhZGVyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbHVtbkVudGl0eS5zZXRIZWFkZXIoY29sdW1uQ29uZmlnLmhlYWRlcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbkVudGl0eTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cblx0XHRsZXQgY29sdW1uRW50aXRpZXMgPSBbXSBhcyBBcnJheTxDb2x1bW5FbnRpdHk+O1xuXG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtblBhcmFtcykgPT4ge1xuXHRcdFx0Y29sdW1uRW50aXRpZXMucHVzaCh0aGlzLmNyZWF0ZUNvbHVtbihjb2x1bW4pKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBjb2x1bW5FbnRpdGllcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFdpZHRoKHdpZHRoOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiArd2lkdGg7XG5cdH1cblxuXHRwcml2YXRlIGdldFByZXNlbnRhdGlvbihkYXRhVHlwZTogRGF0YVR5cGUpOiBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyLmNvbnZlcnQoZGF0YVR5cGUpO1xuXHR9XG59XG4iXX0=