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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUd2QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUkzRixNQUFNLE9BQU8sbUJBQW1COzs7O0lBRS9CLFlBQTZCLDJCQUF3RDtRQUF4RCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO0lBQ3JGLENBQUM7Ozs7O0lBSUQsTUFBTSxDQUFDLElBQXdDO1FBRTlDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxNQUFvQjs7WUFFcEMsWUFBWSxHQUFpQixNQUFNLENBQUMsU0FBUyxFQUFFOztZQUNsRCxLQUFLLEdBQWdCLE1BQU0sQ0FBQyxRQUFRLEVBQUU7O1lBQ3RDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTOztZQUMxRCxJQUFJOztZQUNKLE9BQU87O1lBQ1AsUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUU7UUFFL0IsSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNwQyxJQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxZQUFZLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUN2QyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQztTQUMvQjthQUFNO1lBQ04sT0FBTyxHQUFHLElBQUksQ0FBQztTQUNmOztjQUVLLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQzs7WUFFL0MsWUFBWSxHQUFHLElBQUksWUFBWSxDQUNsQyxJQUFJLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUM5QyxLQUFLLEVBQ0wsWUFBWSxFQUNaLE9BQU8sRUFDUCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksQ0FBQyxLQUFLLEVBQ2xCLElBQUksRUFDSixLQUFLLENBQ0w7UUFFRCxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3RDLFlBQVksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLE9BQTRCOztZQUU3QyxjQUFjLEdBQUcsbUJBQUEsRUFBRSxFQUF1QjtRQUU5QyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFO1lBQ3hDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEtBQXNCO1FBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsUUFBa0I7UUFFekMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQTNFRCxVQUFVOzs7O1lBSEYsMkJBQTJCOzs7Ozs7O0lBTXZCLDBEQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi92aWV3LmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uLmlkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL3ByZXNlbnRhdGlvbi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlciB9IGZyb20gJy4vcHJlc2VudGF0aW9uL2NvbHVtbi5wcmVzZW50YXRpb24uY29udmVydGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sdW1uRW50aXR5RmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXI6IENvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlcikge1xuXHR9XG5cblx0Y3JlYXRlKHBhcmFtczogQ29sdW1uUGFyYW1zKTogQ29sdW1uRW50aXR5O1xuXHRjcmVhdGUocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogQXJyYXk8Q29sdW1uRW50aXR5Pjtcblx0Y3JlYXRlKGRhdGE6IENvbHVtblBhcmFtcyB8IEFycmF5PENvbHVtblBhcmFtcz4pOiBDb2x1bW5FbnRpdHkgfCBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVDb2x1bW5zKGRhdGEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVDb2x1bW4oZGF0YSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb2x1bW4ocGFyYW1zOiBDb2x1bW5QYXJhbXMpOiBDb2x1bW5FbnRpdHkge1xuXG5cdFx0bGV0IGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnID0gcGFyYW1zLmdldENvbHVtbigpLFxuXHRcdFx0ZmllbGQ6IENvbHVtbkZpZWxkID0gcGFyYW1zLmdldEZpZWxkKCksXG5cdFx0XHR3aWR0aCA9IHRoaXMuY29udmVydFdpZHRoKGNvbHVtbkNvbmZpZy53aWR0aCkgfHwgdW5kZWZpbmVkLFxuXHRcdFx0dmlldyxcblx0XHRcdGVuYWJsZWQsXG5cdFx0XHRkYXRhVHlwZSA9IGZpZWxkLmdldERhdGFUeXBlKCk7XG5cblx0XHRpZiAoY29sdW1uQ29uZmlnLnZpZXcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmlldyA9IG5ldyBWaWV3RW50aXR5KGNvbHVtbkNvbmZpZy52aWV3KTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uQ29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZW5hYmxlZCA9IGNvbHVtbkNvbmZpZy5lbmFibGVkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbmFibGVkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBwcmVzZW50YXRpb24gPSB0aGlzLmdldFByZXNlbnRhdGlvbihkYXRhVHlwZSk7XG5cblx0XHRsZXQgY29sdW1uRW50aXR5ID0gbmV3IENvbHVtbkVudGl0eShcblx0XHRcdG5ldyBDb2x1bW5JZChSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSksXG5cdFx0XHRmaWVsZCxcblx0XHRcdGNvbHVtbkNvbmZpZyxcblx0XHRcdGVuYWJsZWQsXG5cdFx0XHRwcmVzZW50YXRpb24sXG5cdFx0XHR1bmRlZmluZWQsXG5cdFx0XHRjb2x1bW5Db25maWcuYWxpZ24sXG5cdFx0XHR2aWV3LFxuXHRcdFx0d2lkdGhcblx0XHQpO1xuXG5cdFx0aWYgKGNvbHVtbkNvbmZpZy5oZWFkZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uRW50aXR5LnNldEhlYWRlcihjb2x1bW5Db25maWcuaGVhZGVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uRW50aXR5O1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtblBhcmFtcz4pOiBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblxuXHRcdGxldCBjb2x1bW5FbnRpdGllcyA9IFtdIGFzIEFycmF5PENvbHVtbkVudGl0eT47XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uUGFyYW1zKSA9PiB7XG5cdFx0XHRjb2x1bW5FbnRpdGllcy5wdXNoKHRoaXMuY3JlYXRlQ29sdW1uKGNvbHVtbikpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkVudGl0aWVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0V2lkdGgod2lkdGg6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuICt3aWR0aDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0UHJlc2VudGF0aW9uKGRhdGFUeXBlOiBEYXRhVHlwZSk6IENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIuY29udmVydChkYXRhVHlwZSk7XG5cdH1cbn1cbiJdfQ==