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
var ColumnEntityFactory = /** @class */ (function () {
    function ColumnEntityFactory(columnPresentationConverter) {
        this.columnPresentationConverter = columnPresentationConverter;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    ColumnEntityFactory.prototype.create = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (Array.isArray(data)) {
            return this.createColumns(data);
        }
        else {
            return this.createColumn(data);
        }
    };
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    ColumnEntityFactory.prototype.createColumn = /**
     * @private
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var columnConfig = params.getColumn();
        /** @type {?} */
        var field = params.getField();
        /** @type {?} */
        var width = this.convertWidth(columnConfig.width) || undefined;
        /** @type {?} */
        var view;
        /** @type {?} */
        var enabled;
        /** @type {?} */
        var dataType = field.getDataType();
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
        var presentation = this.getPresentation(dataType);
        /** @type {?} */
        var columnEntity = new ColumnEntity(new ColumnId(RandomStringGenerator.generate()), field, columnConfig, enabled, presentation, undefined, columnConfig.align, view, width);
        if (columnConfig.header !== undefined) {
            columnEntity.setHeader(columnConfig.header);
        }
        return columnEntity;
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    ColumnEntityFactory.prototype.createColumns = /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        /** @type {?} */
        var columnEntities = (/** @type {?} */ ([]));
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            columnEntities.push(_this.createColumn(column));
        }));
        return columnEntities;
    };
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    ColumnEntityFactory.prototype.convertWidth = /**
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        return +width;
    };
    /**
     * @private
     * @param {?} dataType
     * @return {?}
     */
    ColumnEntityFactory.prototype.getPresentation = /**
     * @private
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return this.columnPresentationConverter.convert(dataType);
    };
    ColumnEntityFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ColumnEntityFactory.ctorParameters = function () { return [
        { type: ColumnPresentationConverter }
    ]; };
    return ColumnEntityFactory;
}());
export { ColumnEntityFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnEntityFactory.prototype.columnPresentationConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3ZDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRzNGO0lBR0MsNkJBQTZCLDJCQUF3RDtRQUF4RCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO0lBQ3JGLENBQUM7Ozs7O0lBSUQsb0NBQU07Ozs7SUFBTixVQUFPLElBQXdDO1FBRTlDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7OztJQUVPLDBDQUFZOzs7OztJQUFwQixVQUFxQixNQUFvQjs7WUFFcEMsWUFBWSxHQUFpQixNQUFNLENBQUMsU0FBUyxFQUFFOztZQUNsRCxLQUFLLEdBQWdCLE1BQU0sQ0FBQyxRQUFRLEVBQUU7O1lBQ3RDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTOztZQUMxRCxJQUFJOztZQUNKLE9BQU87O1lBQ1AsUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUU7UUFFL0IsSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNwQyxJQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxZQUFZLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUN2QyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQztTQUMvQjthQUFNO1lBQ04sT0FBTyxHQUFHLElBQUksQ0FBQztTQUNmOztZQUVLLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQzs7WUFFL0MsWUFBWSxHQUFHLElBQUksWUFBWSxDQUNsQyxJQUFJLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUM5QyxLQUFLLEVBQ0wsWUFBWSxFQUNaLE9BQU8sRUFDUCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksQ0FBQyxLQUFLLEVBQ2xCLElBQUksRUFDSixLQUFLLENBQ0w7UUFFRCxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3RDLFlBQVksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU8sMkNBQWE7Ozs7O0lBQXJCLFVBQXNCLE9BQTRCO1FBQWxELGlCQVNDOztZQVBJLGNBQWMsR0FBRyxtQkFBQSxFQUFFLEVBQXVCO1FBRTlDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxNQUFvQjtZQUNwQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVPLDBDQUFZOzs7OztJQUFwQixVQUFxQixLQUFzQjtRQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRU8sNkNBQWU7Ozs7O0lBQXZCLFVBQXdCLFFBQWtCO1FBRXpDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkEzRUQsVUFBVTs7OztnQkFIRiwyQkFBMkI7O0lBK0VwQywwQkFBQztDQUFBLEFBNUVELElBNEVDO1NBM0VZLG1CQUFtQjs7Ozs7O0lBRW5CLDBEQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi92aWV3LmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uLmlkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4vcHJlc2VudGF0aW9uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbi5jb252ZXJ0ZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2x1bW5FbnRpdHlGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlcjogQ29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyKSB7XG5cdH1cblxuXHRjcmVhdGUocGFyYW1zOiBDb2x1bW5QYXJhbXMpOiBDb2x1bW5FbnRpdHk7XG5cdGNyZWF0ZShwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiBBcnJheTxDb2x1bW5FbnRpdHk+O1xuXHRjcmVhdGUoZGF0YTogQ29sdW1uUGFyYW1zIHwgQXJyYXk8Q29sdW1uUGFyYW1zPik6IENvbHVtbkVudGl0eSB8IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUNvbHVtbnMoZGF0YSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUNvbHVtbihkYXRhKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbHVtbihwYXJhbXM6IENvbHVtblBhcmFtcyk6IENvbHVtbkVudGl0eSB7XG5cblx0XHRsZXQgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcgPSBwYXJhbXMuZ2V0Q29sdW1uKCksXG5cdFx0XHRmaWVsZDogQ29sdW1uRmllbGQgPSBwYXJhbXMuZ2V0RmllbGQoKSxcblx0XHRcdHdpZHRoID0gdGhpcy5jb252ZXJ0V2lkdGgoY29sdW1uQ29uZmlnLndpZHRoKSB8fCB1bmRlZmluZWQsXG5cdFx0XHR2aWV3LFxuXHRcdFx0ZW5hYmxlZCxcblx0XHRcdGRhdGFUeXBlID0gZmllbGQuZ2V0RGF0YVR5cGUoKTtcblxuXHRcdGlmIChjb2x1bW5Db25maWcudmlldyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2aWV3ID0gbmV3IFZpZXdFbnRpdHkoY29sdW1uQ29uZmlnLnZpZXcpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5Db25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRlbmFibGVkID0gY29sdW1uQ29uZmlnLmVuYWJsZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVuYWJsZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHByZXNlbnRhdGlvbiA9IHRoaXMuZ2V0UHJlc2VudGF0aW9uKGRhdGFUeXBlKTtcblxuXHRcdGxldCBjb2x1bW5FbnRpdHkgPSBuZXcgQ29sdW1uRW50aXR5KFxuXHRcdFx0bmV3IENvbHVtbklkKFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSxcblx0XHRcdGZpZWxkLFxuXHRcdFx0Y29sdW1uQ29uZmlnLFxuXHRcdFx0ZW5hYmxlZCxcblx0XHRcdHByZXNlbnRhdGlvbixcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdGNvbHVtbkNvbmZpZy5hbGlnbixcblx0XHRcdHZpZXcsXG5cdFx0XHR3aWR0aFxuXHRcdCk7XG5cblx0XHRpZiAoY29sdW1uQ29uZmlnLmhlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb2x1bW5FbnRpdHkuc2V0SGVhZGVyKGNvbHVtbkNvbmZpZy5oZWFkZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5FbnRpdHk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXG5cdFx0bGV0IGNvbHVtbkVudGl0aWVzID0gW10gYXMgQXJyYXk8Q29sdW1uRW50aXR5PjtcblxuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5QYXJhbXMpID0+IHtcblx0XHRcdGNvbHVtbkVudGl0aWVzLnB1c2godGhpcy5jcmVhdGVDb2x1bW4oY29sdW1uKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29sdW1uRW50aXRpZXM7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRXaWR0aCh3aWR0aDogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gK3dpZHRoO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRQcmVzZW50YXRpb24oZGF0YVR5cGU6IERhdGFUeXBlKTogQ29sdW1uUHJlc2VudGF0aW9uIHtcblxuXHRcdHJldHVybiB0aGlzLmNvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlci5jb252ZXJ0KGRhdGFUeXBlKTtcblx0fVxufVxuIl19