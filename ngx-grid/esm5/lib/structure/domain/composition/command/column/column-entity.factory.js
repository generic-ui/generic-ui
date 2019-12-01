/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ColumnEntity } from './column.entity';
import { ViewEntity } from './view.entity';
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
        var column = params.getColumn();
        /** @type {?} */
        var field = params.getField();
        /** @type {?} */
        var columnEntity = new ColumnEntity(field);
        if (column.header !== undefined) {
            columnEntity.header = column.header;
        }
        if (column.view !== undefined) {
            columnEntity.setView(new ViewEntity(column.view));
        }
        if (column.width !== undefined) {
            columnEntity.width = this.convertWidth(column.width);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFBQTtJQWtEQSxDQUFDOzs7OztJQTdDQSxvQ0FBTTs7OztJQUFOLFVBQU8sSUFBd0M7UUFFOUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sMENBQVk7Ozs7O0lBQXBCLFVBQXFCLE1BQW9COztZQUVsQyxNQUFNLEdBQWlCLE1BQU0sQ0FBQyxTQUFTLEVBQUU7O1lBQzlDLEtBQUssR0FBZ0IsTUFBTSxDQUFDLFFBQVEsRUFBRTs7WUFFbkMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQztRQUUxQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ2hDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNwQztRQUVELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDOUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDL0IsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyRDtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLDJDQUFhOzs7OztJQUFyQixVQUFzQixPQUE0QjtRQUFsRCxpQkFTQzs7WUFQSSxjQUFjLEdBQUcsbUJBQUEsRUFBRSxFQUF1QjtRQUU5QyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBb0I7WUFDcEMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTywwQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBc0I7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQWpERCxVQUFVOztJQWtEWCwwQkFBQztDQUFBLEFBbERELElBa0RDO1NBakRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2x1bW5FbnRpdHlGYWN0b3J5IHtcblxuXHRjcmVhdGUocGFyYW1zOiBDb2x1bW5QYXJhbXMpOiBDb2x1bW5FbnRpdHk7XG5cdGNyZWF0ZShwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiBBcnJheTxDb2x1bW5FbnRpdHk+O1xuXHRjcmVhdGUoZGF0YTogQ29sdW1uUGFyYW1zIHwgQXJyYXk8Q29sdW1uUGFyYW1zPik6IENvbHVtbkVudGl0eSB8IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUNvbHVtbnMoZGF0YSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUNvbHVtbihkYXRhKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbHVtbihwYXJhbXM6IENvbHVtblBhcmFtcyk6IENvbHVtbkVudGl0eSB7XG5cblx0XHRjb25zdCBjb2x1bW46IENvbHVtbkNvbmZpZyA9IHBhcmFtcy5nZXRDb2x1bW4oKSxcblx0XHRcdGZpZWxkOiBDb2x1bW5GaWVsZCA9IHBhcmFtcy5nZXRGaWVsZCgpO1xuXG5cdFx0bGV0IGNvbHVtbkVudGl0eSA9IG5ldyBDb2x1bW5FbnRpdHkoZmllbGQpO1xuXG5cdFx0aWYgKGNvbHVtbi5oZWFkZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uRW50aXR5LmhlYWRlciA9IGNvbHVtbi5oZWFkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtbi52aWV3ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbHVtbkVudGl0eS5zZXRWaWV3KG5ldyBWaWV3RW50aXR5KGNvbHVtbi52aWV3KSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtbi53aWR0aCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb2x1bW5FbnRpdHkud2lkdGggPSB0aGlzLmNvbnZlcnRXaWR0aChjb2x1bW4ud2lkdGgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5FbnRpdHk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXG5cdFx0bGV0IGNvbHVtbkVudGl0aWVzID0gW10gYXMgQXJyYXk8Q29sdW1uRW50aXR5PjtcblxuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5QYXJhbXMpID0+IHtcblx0XHRcdGNvbHVtbkVudGl0aWVzLnB1c2godGhpcy5jcmVhdGVDb2x1bW4oY29sdW1uKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29sdW1uRW50aXRpZXM7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRXaWR0aCh3aWR0aDogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gK3dpZHRoO1xuXHR9XG59XG4iXX0=