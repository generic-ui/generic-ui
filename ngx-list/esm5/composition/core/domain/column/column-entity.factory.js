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
var ColumnEntityFactory = /** @class */ (function () {
    function ColumnEntityFactory(columnPresentationConverter) {
        this.columnPresentationConverter = columnPresentationConverter;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    ColumnEntityFactory.prototype.create = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        if (Array.isArray(source)) {
            return this.createColumns(source);
        }
        else {
            return this.createColumn(source);
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
        var dataType = field.getDataType();
        /** @type {?} */
        var width = this.convertWidth(columnConfig.width) || undefined;
        /** @type {?} */
        var view;
        /** @type {?} */
        var enabled;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vY29sdW1uLWVudGl0eS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUd0RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUczRjtJQUdDLDZCQUE2QiwyQkFBd0Q7UUFBeEQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtJQUNyRixDQUFDOzs7OztJQUlELG9DQUFNOzs7O0lBQU4sVUFBTyxNQUEwQztRQUVoRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakM7SUFDRixDQUFDOzs7Ozs7SUFFTywwQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsTUFBb0I7O1lBRWxDLFlBQVksR0FBaUIsTUFBTSxDQUFDLFNBQVMsRUFBRTs7WUFDcEQsS0FBSyxHQUFnQixNQUFNLENBQUMsUUFBUSxFQUFFOztZQUN0QyxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRTs7WUFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVM7O1lBRXZELElBQWdCOztZQUNuQixPQUFnQjtRQUVqQixJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BDLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ3ZDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDO1NBQy9CO2FBQU07WUFDTixPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ2Y7O1lBRUssWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDOztZQUU3QyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQ3BDLElBQUksUUFBUSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQzlDLEtBQUssRUFDTCxZQUFZLEVBQ1osT0FBTyxFQUNQLFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxDQUFDLEtBQUssRUFDbEIsSUFBSSxFQUNKLEtBQUssQ0FDTDtRQUVELElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDdEMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTywyQ0FBYTs7Ozs7SUFBckIsVUFBc0IsT0FBNEI7UUFBbEQsaUJBU0M7O1lBUE0sY0FBYyxHQUFHLG1CQUFBLEVBQUUsRUFBdUI7UUFFaEQsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE1BQW9CO1lBQ3BDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sMENBQVk7Ozs7O0lBQXBCLFVBQXFCLEtBQXNCO1FBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFTyw2Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsUUFBa0I7UUFFekMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQTVFRCxVQUFVOzs7O2dCQUhGLDJCQUEyQjs7SUFnRnBDLDBCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0E1RVksbUJBQW1COzs7Ozs7SUFFbkIsMERBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuL3ByZXNlbnRhdGlvbi9jb2x1bW4ucHJlc2VudGF0aW9uLmNvbnZlcnRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtbkVudGl0eUZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyOiBDb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIpIHtcblx0fVxuXG5cdGNyZWF0ZShwYXJhbXM6IENvbHVtblBhcmFtcyk6IENvbHVtbkVudGl0eTtcblx0Y3JlYXRlKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IEFycmF5PENvbHVtbkVudGl0eT47XG5cdGNyZWF0ZShzb3VyY2U6IENvbHVtblBhcmFtcyB8IEFycmF5PENvbHVtblBhcmFtcz4pOiBDb2x1bW5FbnRpdHkgfCBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUNvbHVtbnMoc291cmNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlQ29sdW1uKHNvdXJjZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb2x1bW4ocGFyYW1zOiBDb2x1bW5QYXJhbXMpOiBDb2x1bW5FbnRpdHkge1xuXG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcgPSBwYXJhbXMuZ2V0Q29sdW1uKCksXG5cdFx0XHRmaWVsZDogQ29sdW1uRmllbGQgPSBwYXJhbXMuZ2V0RmllbGQoKSxcblx0XHRcdGRhdGFUeXBlID0gZmllbGQuZ2V0RGF0YVR5cGUoKSxcblx0XHRcdHdpZHRoID0gdGhpcy5jb252ZXJ0V2lkdGgoY29sdW1uQ29uZmlnLndpZHRoKSB8fCB1bmRlZmluZWQ7XG5cblx0XHRsZXQgdmlldzogVmlld0VudGl0eSxcblx0XHRcdGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0XHRpZiAoY29sdW1uQ29uZmlnLnZpZXcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmlldyA9IG5ldyBWaWV3RW50aXR5KGNvbHVtbkNvbmZpZy52aWV3KTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uQ29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZW5hYmxlZCA9IGNvbHVtbkNvbmZpZy5lbmFibGVkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbmFibGVkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBwcmVzZW50YXRpb24gPSB0aGlzLmdldFByZXNlbnRhdGlvbihkYXRhVHlwZSk7XG5cblx0XHRjb25zdCBjb2x1bW5FbnRpdHkgPSBuZXcgQ29sdW1uRW50aXR5KFxuXHRcdFx0bmV3IENvbHVtbklkKFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSxcblx0XHRcdGZpZWxkLFxuXHRcdFx0Y29sdW1uQ29uZmlnLFxuXHRcdFx0ZW5hYmxlZCxcblx0XHRcdHByZXNlbnRhdGlvbixcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdGNvbHVtbkNvbmZpZy5hbGlnbixcblx0XHRcdHZpZXcsXG5cdFx0XHR3aWR0aFxuXHRcdCk7XG5cblx0XHRpZiAoY29sdW1uQ29uZmlnLmhlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb2x1bW5FbnRpdHkuc2V0SGVhZGVyKGNvbHVtbkNvbmZpZy5oZWFkZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5FbnRpdHk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXG5cdFx0Y29uc3QgY29sdW1uRW50aXRpZXMgPSBbXSBhcyBBcnJheTxDb2x1bW5FbnRpdHk+O1xuXG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtblBhcmFtcykgPT4ge1xuXHRcdFx0Y29sdW1uRW50aXRpZXMucHVzaCh0aGlzLmNyZWF0ZUNvbHVtbihjb2x1bW4pKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBjb2x1bW5FbnRpdGllcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFdpZHRoKHdpZHRoOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiArd2lkdGg7XG5cdH1cblxuXHRwcml2YXRlIGdldFByZXNlbnRhdGlvbihkYXRhVHlwZTogRGF0YVR5cGUpOiBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyLmNvbnZlcnQoZGF0YVR5cGUpO1xuXHR9XG59XG4iXX0=