/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RandomStringGenerator } from '@generic-ui/hermes';
import { ColumnEntity } from './column.entity';
import { ViewEntity } from './view.entity';
import { ColumnId } from './column.id';
var ColumnEntityFactory = /** @class */ (function () {
    function ColumnEntityFactory() {
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
        var columnEntity = new ColumnEntity(new ColumnId(RandomStringGenerator.generate()), field, columnConfig);
        if (columnConfig.header !== undefined) {
            columnEntity.header = columnConfig.header;
        }
        if (columnConfig.view !== undefined) {
            columnEntity.setView(new ViewEntity(columnConfig.view));
        }
        if (columnConfig.width !== undefined) {
            columnEntity.width = this.convertWidth(columnConfig.width);
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
    ColumnEntityFactory.decorators = [
        { type: Injectable }
    ];
    return ColumnEntityFactory;
}());
export { ColumnEntityFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3ZDO0lBQUE7SUFzREEsQ0FBQzs7Ozs7SUFqREEsb0NBQU07Ozs7SUFBTixVQUFPLElBQXdDO1FBRTlDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7OztJQUVPLDBDQUFZOzs7OztJQUFwQixVQUFxQixNQUFvQjs7WUFFbEMsWUFBWSxHQUFpQixNQUFNLENBQUMsU0FBUyxFQUFFOztZQUNwRCxLQUFLLEdBQWdCLE1BQU0sQ0FBQyxRQUFRLEVBQUU7O1lBRW5DLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FDbEMsSUFBSSxRQUFRLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFDOUMsS0FBSyxFQUNMLFlBQVksQ0FDWjtRQUVELElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDdEMsWUFBWSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1NBQzFDO1FBRUQsSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNwQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxZQUFZLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUNyQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNEO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU8sMkNBQWE7Ozs7O0lBQXJCLFVBQXNCLE9BQTRCO1FBQWxELGlCQVNDOztZQVBJLGNBQWMsR0FBRyxtQkFBQSxFQUFFLEVBQXVCO1FBRTlDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxNQUFvQjtZQUNwQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVPLDBDQUFZOzs7OztJQUFwQixVQUFxQixLQUFzQjtRQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBckRELFVBQVU7O0lBc0RYLDBCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FyRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi92aWV3LmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sdW1uRW50aXR5RmFjdG9yeSB7XG5cblx0Y3JlYXRlKHBhcmFtczogQ29sdW1uUGFyYW1zKTogQ29sdW1uRW50aXR5O1xuXHRjcmVhdGUocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogQXJyYXk8Q29sdW1uRW50aXR5Pjtcblx0Y3JlYXRlKGRhdGE6IENvbHVtblBhcmFtcyB8IEFycmF5PENvbHVtblBhcmFtcz4pOiBDb2x1bW5FbnRpdHkgfCBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVDb2x1bW5zKGRhdGEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVDb2x1bW4oZGF0YSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb2x1bW4ocGFyYW1zOiBDb2x1bW5QYXJhbXMpOiBDb2x1bW5FbnRpdHkge1xuXG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcgPSBwYXJhbXMuZ2V0Q29sdW1uKCksXG5cdFx0XHRmaWVsZDogQ29sdW1uRmllbGQgPSBwYXJhbXMuZ2V0RmllbGQoKTtcblxuXHRcdGxldCBjb2x1bW5FbnRpdHkgPSBuZXcgQ29sdW1uRW50aXR5KFxuXHRcdFx0bmV3IENvbHVtbklkKFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSxcblx0XHRcdGZpZWxkLFxuXHRcdFx0Y29sdW1uQ29uZmlnXG5cdFx0KTtcblxuXHRcdGlmIChjb2x1bW5Db25maWcuaGVhZGVyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbHVtbkVudGl0eS5oZWFkZXIgPSBjb2x1bW5Db25maWcuaGVhZGVyO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5Db25maWcudmlldyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb2x1bW5FbnRpdHkuc2V0VmlldyhuZXcgVmlld0VudGl0eShjb2x1bW5Db25maWcudmlldykpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5Db25maWcud2lkdGggIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uRW50aXR5LndpZHRoID0gdGhpcy5jb252ZXJ0V2lkdGgoY29sdW1uQ29uZmlnLndpZHRoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uRW50aXR5O1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtblBhcmFtcz4pOiBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblxuXHRcdGxldCBjb2x1bW5FbnRpdGllcyA9IFtdIGFzIEFycmF5PENvbHVtbkVudGl0eT47XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uUGFyYW1zKSA9PiB7XG5cdFx0XHRjb2x1bW5FbnRpdGllcy5wdXNoKHRoaXMuY3JlYXRlQ29sdW1uKGNvbHVtbikpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkVudGl0aWVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0V2lkdGgod2lkdGg6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuICt3aWR0aDtcblx0fVxufVxuIl19