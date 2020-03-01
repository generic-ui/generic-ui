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
        if (columnConfig.enabled !== undefined) {
            columnEntity.setEnabled(columnConfig.enabled);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3ZDO0lBQUE7SUEwREEsQ0FBQzs7Ozs7SUFyREEsb0NBQU07Ozs7SUFBTixVQUFPLElBQXdDO1FBRTlDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7OztJQUVPLDBDQUFZOzs7OztJQUFwQixVQUFxQixNQUFvQjs7WUFFbEMsWUFBWSxHQUFpQixNQUFNLENBQUMsU0FBUyxFQUFFOztZQUNwRCxLQUFLLEdBQWdCLE1BQU0sQ0FBQyxRQUFRLEVBQUU7O1lBRW5DLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FDbEMsSUFBSSxRQUFRLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFDOUMsS0FBSyxFQUNMLFlBQVksQ0FDWjtRQUVELElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDdkMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUM7UUFFRCxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3RDLFlBQVksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztTQUMxQztRQUVELElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN4RDtRQUVELElBQUksWUFBWSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDckMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRDtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLDJDQUFhOzs7OztJQUFyQixVQUFzQixPQUE0QjtRQUFsRCxpQkFTQzs7WUFQSSxjQUFjLEdBQUcsbUJBQUEsRUFBRSxFQUF1QjtRQUU5QyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBb0I7WUFDcEMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTywwQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBc0I7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQXpERCxVQUFVOztJQTBEWCwwQkFBQztDQUFBLEFBMURELElBMERDO1NBekRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtbkVudGl0eUZhY3Rvcnkge1xuXG5cdGNyZWF0ZShwYXJhbXM6IENvbHVtblBhcmFtcyk6IENvbHVtbkVudGl0eTtcblx0Y3JlYXRlKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IEFycmF5PENvbHVtbkVudGl0eT47XG5cdGNyZWF0ZShkYXRhOiBDb2x1bW5QYXJhbXMgfCBBcnJheTxDb2x1bW5QYXJhbXM+KTogQ29sdW1uRW50aXR5IHwgQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlQ29sdW1ucyhkYXRhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlQ29sdW1uKGRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ29sdW1uKHBhcmFtczogQ29sdW1uUGFyYW1zKTogQ29sdW1uRW50aXR5IHtcblxuXHRcdGNvbnN0IGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnID0gcGFyYW1zLmdldENvbHVtbigpLFxuXHRcdFx0ZmllbGQ6IENvbHVtbkZpZWxkID0gcGFyYW1zLmdldEZpZWxkKCk7XG5cblx0XHRsZXQgY29sdW1uRW50aXR5ID0gbmV3IENvbHVtbkVudGl0eShcblx0XHRcdG5ldyBDb2x1bW5JZChSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSksXG5cdFx0XHRmaWVsZCxcblx0XHRcdGNvbHVtbkNvbmZpZ1xuXHRcdCk7XG5cblx0XHRpZiAoY29sdW1uQ29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uRW50aXR5LnNldEVuYWJsZWQoY29sdW1uQ29uZmlnLmVuYWJsZWQpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5Db25maWcuaGVhZGVyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbHVtbkVudGl0eS5oZWFkZXIgPSBjb2x1bW5Db25maWcuaGVhZGVyO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5Db25maWcudmlldyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb2x1bW5FbnRpdHkuc2V0VmlldyhuZXcgVmlld0VudGl0eShjb2x1bW5Db25maWcudmlldykpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5Db25maWcud2lkdGggIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uRW50aXR5LndpZHRoID0gdGhpcy5jb252ZXJ0V2lkdGgoY29sdW1uQ29uZmlnLndpZHRoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uRW50aXR5O1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtblBhcmFtcz4pOiBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblxuXHRcdGxldCBjb2x1bW5FbnRpdGllcyA9IFtdIGFzIEFycmF5PENvbHVtbkVudGl0eT47XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uUGFyYW1zKSA9PiB7XG5cdFx0XHRjb2x1bW5FbnRpdGllcy5wdXNoKHRoaXMuY3JlYXRlQ29sdW1uKGNvbHVtbikpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkVudGl0aWVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0V2lkdGgod2lkdGg6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuICt3aWR0aDtcblx0fVxufVxuIl19