/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RandomStringGenerator } from '@generic-ui/hermes';
import { ColumnEntity } from './column.entity';
import { ViewEntity } from './view.entity';
import { ColumnId } from '../../api/column/column.id';
import { ColumnPresentationConverter } from './presentation/column.presentation.converter';
export class ColumnEntityFactory {
    /**
     * @param {?} columnPresentationConverter
     */
    constructor(columnPresentationConverter) {
        this.columnPresentationConverter = columnPresentationConverter;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    create(source) {
        if (Array.isArray(source)) {
            return this.createColumns(source);
        }
        else {
            return this.createColumn(source);
        }
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    createColumn(params) {
        /** @type {?} */
        const columnConfig = params.getColumn();
        /** @type {?} */
        const field = params.getField();
        /** @type {?} */
        const dataType = field.getDataType();
        /** @type {?} */
        const width = this.convertWidth(columnConfig.width) || undefined;
        /** @type {?} */
        let view;
        /** @type {?} */
        let enabled;
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
        const columnEntity = new ColumnEntity(new ColumnId(RandomStringGenerator.generate()), field, columnConfig, enabled, presentation, undefined, columnConfig.align, view, width);
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
        const columnEntities = (/** @type {?} */ ([]));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vY29sdW1uLWVudGl0eS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUd0RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUkzRixNQUFNLE9BQU8sbUJBQW1COzs7O0lBRS9CLFlBQTZCLDJCQUF3RDtRQUF4RCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO0lBQ3JGLENBQUM7Ozs7O0lBSUQsTUFBTSxDQUFDLE1BQTBDO1FBRWhELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQztJQUNGLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxNQUFvQjs7Y0FFbEMsWUFBWSxHQUFpQixNQUFNLENBQUMsU0FBUyxFQUFFOztjQUNwRCxLQUFLLEdBQWdCLE1BQU0sQ0FBQyxRQUFRLEVBQUU7O2NBQ3RDLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFOztjQUM5QixLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUzs7WUFFdkQsSUFBZ0I7O1lBQ25CLE9BQWdCO1FBRWpCLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDdkMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7U0FDL0I7YUFBTTtZQUNOLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDZjs7Y0FFSyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7O2NBRTdDLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FDcEMsSUFBSSxRQUFRLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFDOUMsS0FBSyxFQUNMLFlBQVksRUFDWixPQUFPLEVBQ1AsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLENBQUMsS0FBSyxFQUNsQixJQUFJLEVBQ0osS0FBSyxDQUNMO1FBRUQsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN0QyxZQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QztRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxPQUE0Qjs7Y0FFM0MsY0FBYyxHQUFHLG1CQUFBLEVBQUUsRUFBdUI7UUFFaEQsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRTtZQUN4QyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxLQUFzQjtRQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLFFBQWtCO1FBRXpDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUE1RUQsVUFBVTs7OztZQUhGLDJCQUEyQjs7Ozs7OztJQU12QiwwREFBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi8uLi9hcGkvY29sdW1uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL3ByZXNlbnRhdGlvbi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlciB9IGZyb20gJy4vcHJlc2VudGF0aW9uL2NvbHVtbi5wcmVzZW50YXRpb24uY29udmVydGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sdW1uRW50aXR5RmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXI6IENvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlcikge1xuXHR9XG5cblx0Y3JlYXRlKHBhcmFtczogQ29sdW1uUGFyYW1zKTogQ29sdW1uRW50aXR5O1xuXHRjcmVhdGUocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogQXJyYXk8Q29sdW1uRW50aXR5Pjtcblx0Y3JlYXRlKHNvdXJjZTogQ29sdW1uUGFyYW1zIHwgQXJyYXk8Q29sdW1uUGFyYW1zPik6IENvbHVtbkVudGl0eSB8IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlQ29sdW1ucyhzb3VyY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVDb2x1bW4oc291cmNlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbHVtbihwYXJhbXM6IENvbHVtblBhcmFtcyk6IENvbHVtbkVudGl0eSB7XG5cblx0XHRjb25zdCBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyA9IHBhcmFtcy5nZXRDb2x1bW4oKSxcblx0XHRcdGZpZWxkOiBDb2x1bW5GaWVsZCA9IHBhcmFtcy5nZXRGaWVsZCgpLFxuXHRcdFx0ZGF0YVR5cGUgPSBmaWVsZC5nZXREYXRhVHlwZSgpLFxuXHRcdFx0d2lkdGggPSB0aGlzLmNvbnZlcnRXaWR0aChjb2x1bW5Db25maWcud2lkdGgpIHx8IHVuZGVmaW5lZDtcblxuXHRcdGxldCB2aWV3OiBWaWV3RW50aXR5LFxuXHRcdFx0ZW5hYmxlZDogYm9vbGVhbjtcblxuXHRcdGlmIChjb2x1bW5Db25maWcudmlldyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2aWV3ID0gbmV3IFZpZXdFbnRpdHkoY29sdW1uQ29uZmlnLnZpZXcpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5Db25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRlbmFibGVkID0gY29sdW1uQ29uZmlnLmVuYWJsZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVuYWJsZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHByZXNlbnRhdGlvbiA9IHRoaXMuZ2V0UHJlc2VudGF0aW9uKGRhdGFUeXBlKTtcblxuXHRcdGNvbnN0IGNvbHVtbkVudGl0eSA9IG5ldyBDb2x1bW5FbnRpdHkoXG5cdFx0XHRuZXcgQ29sdW1uSWQoUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCkpLFxuXHRcdFx0ZmllbGQsXG5cdFx0XHRjb2x1bW5Db25maWcsXG5cdFx0XHRlbmFibGVkLFxuXHRcdFx0cHJlc2VudGF0aW9uLFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0Y29sdW1uQ29uZmlnLmFsaWduLFxuXHRcdFx0dmlldyxcblx0XHRcdHdpZHRoXG5cdFx0KTtcblxuXHRcdGlmIChjb2x1bW5Db25maWcuaGVhZGVyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbHVtbkVudGl0eS5zZXRIZWFkZXIoY29sdW1uQ29uZmlnLmhlYWRlcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbkVudGl0eTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cblx0XHRjb25zdCBjb2x1bW5FbnRpdGllcyA9IFtdIGFzIEFycmF5PENvbHVtbkVudGl0eT47XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uUGFyYW1zKSA9PiB7XG5cdFx0XHRjb2x1bW5FbnRpdGllcy5wdXNoKHRoaXMuY3JlYXRlQ29sdW1uKGNvbHVtbikpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkVudGl0aWVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0V2lkdGgod2lkdGg6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuICt3aWR0aDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0UHJlc2VudGF0aW9uKGRhdGFUeXBlOiBEYXRhVHlwZSk6IENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIuY29udmVydChkYXRhVHlwZSk7XG5cdH1cbn1cbiJdfQ==