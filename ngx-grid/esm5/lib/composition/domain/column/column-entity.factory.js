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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUd2QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUczRjtJQUdDLDZCQUE2QiwyQkFBd0Q7UUFBeEQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtJQUNyRixDQUFDOzs7OztJQUlELG9DQUFNOzs7O0lBQU4sVUFBTyxJQUF3QztRQUU5QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7SUFDRixDQUFDOzs7Ozs7SUFFTywwQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsTUFBb0I7O1lBRXBDLFlBQVksR0FBaUIsTUFBTSxDQUFDLFNBQVMsRUFBRTs7WUFDbEQsS0FBSyxHQUFnQixNQUFNLENBQUMsUUFBUSxFQUFFOztZQUN0QyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUzs7WUFDMUQsSUFBSTs7WUFDSixPQUFPOztZQUNQLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFO1FBRS9CLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDdkMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7U0FDL0I7YUFBTTtZQUNOLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDZjs7WUFFSyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7O1lBRS9DLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FDbEMsSUFBSSxRQUFRLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFDOUMsS0FBSyxFQUNMLFlBQVksRUFDWixPQUFPLEVBQ1AsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLENBQUMsS0FBSyxFQUNsQixJQUFJLEVBQ0osS0FBSyxDQUNMO1FBRUQsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN0QyxZQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QztRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLDJDQUFhOzs7OztJQUFyQixVQUFzQixPQUE0QjtRQUFsRCxpQkFTQzs7WUFQSSxjQUFjLEdBQUcsbUJBQUEsRUFBRSxFQUF1QjtRQUU5QyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBb0I7WUFDcEMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTywwQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBc0I7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVPLDZDQUFlOzs7OztJQUF2QixVQUF3QixRQUFrQjtRQUV6QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0JBM0VELFVBQVU7Ozs7Z0JBSEYsMkJBQTJCOztJQStFcEMsMEJBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQTNFWSxtQkFBbUI7Ozs7OztJQUVuQiwwREFBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL3ByZXNlbnRhdGlvbi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlciB9IGZyb20gJy4vcHJlc2VudGF0aW9uL2NvbHVtbi5wcmVzZW50YXRpb24uY29udmVydGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sdW1uRW50aXR5RmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXI6IENvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlcikge1xuXHR9XG5cblx0Y3JlYXRlKHBhcmFtczogQ29sdW1uUGFyYW1zKTogQ29sdW1uRW50aXR5O1xuXHRjcmVhdGUocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogQXJyYXk8Q29sdW1uRW50aXR5Pjtcblx0Y3JlYXRlKGRhdGE6IENvbHVtblBhcmFtcyB8IEFycmF5PENvbHVtblBhcmFtcz4pOiBDb2x1bW5FbnRpdHkgfCBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVDb2x1bW5zKGRhdGEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVDb2x1bW4oZGF0YSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb2x1bW4ocGFyYW1zOiBDb2x1bW5QYXJhbXMpOiBDb2x1bW5FbnRpdHkge1xuXG5cdFx0bGV0IGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnID0gcGFyYW1zLmdldENvbHVtbigpLFxuXHRcdFx0ZmllbGQ6IENvbHVtbkZpZWxkID0gcGFyYW1zLmdldEZpZWxkKCksXG5cdFx0XHR3aWR0aCA9IHRoaXMuY29udmVydFdpZHRoKGNvbHVtbkNvbmZpZy53aWR0aCkgfHwgdW5kZWZpbmVkLFxuXHRcdFx0dmlldyxcblx0XHRcdGVuYWJsZWQsXG5cdFx0XHRkYXRhVHlwZSA9IGZpZWxkLmdldERhdGFUeXBlKCk7XG5cblx0XHRpZiAoY29sdW1uQ29uZmlnLnZpZXcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmlldyA9IG5ldyBWaWV3RW50aXR5KGNvbHVtbkNvbmZpZy52aWV3KTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uQ29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZW5hYmxlZCA9IGNvbHVtbkNvbmZpZy5lbmFibGVkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbmFibGVkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBwcmVzZW50YXRpb24gPSB0aGlzLmdldFByZXNlbnRhdGlvbihkYXRhVHlwZSk7XG5cblx0XHRsZXQgY29sdW1uRW50aXR5ID0gbmV3IENvbHVtbkVudGl0eShcblx0XHRcdG5ldyBDb2x1bW5JZChSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSksXG5cdFx0XHRmaWVsZCxcblx0XHRcdGNvbHVtbkNvbmZpZyxcblx0XHRcdGVuYWJsZWQsXG5cdFx0XHRwcmVzZW50YXRpb24sXG5cdFx0XHR1bmRlZmluZWQsXG5cdFx0XHRjb2x1bW5Db25maWcuYWxpZ24sXG5cdFx0XHR2aWV3LFxuXHRcdFx0d2lkdGhcblx0XHQpO1xuXG5cdFx0aWYgKGNvbHVtbkNvbmZpZy5oZWFkZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uRW50aXR5LnNldEhlYWRlcihjb2x1bW5Db25maWcuaGVhZGVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uRW50aXR5O1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtblBhcmFtcz4pOiBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblxuXHRcdGxldCBjb2x1bW5FbnRpdGllcyA9IFtdIGFzIEFycmF5PENvbHVtbkVudGl0eT47XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uUGFyYW1zKSA9PiB7XG5cdFx0XHRjb2x1bW5FbnRpdGllcy5wdXNoKHRoaXMuY3JlYXRlQ29sdW1uKGNvbHVtbikpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkVudGl0aWVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0V2lkdGgod2lkdGg6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuICt3aWR0aDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0UHJlc2VudGF0aW9uKGRhdGFUeXBlOiBEYXRhVHlwZSk6IENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIuY29udmVydChkYXRhVHlwZSk7XG5cdH1cbn1cbiJdfQ==