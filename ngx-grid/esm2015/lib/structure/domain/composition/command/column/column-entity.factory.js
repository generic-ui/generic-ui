/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ColumnEntity } from './column.entity';
import { ViewEntity } from './view.entity';
export class ColumnEntityFactory {
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
        const column = params.getColumn();
        /** @type {?} */
        const field = params.getField();
        /** @type {?} */
        let columnEntity = new ColumnEntity(field);
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
}
ColumnEntityFactory.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFJL0IsTUFBTSxDQUFDLElBQXdDO1FBRTlDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxNQUFvQjs7Y0FFbEMsTUFBTSxHQUFpQixNQUFNLENBQUMsU0FBUyxFQUFFOztjQUM5QyxLQUFLLEdBQWdCLE1BQU0sQ0FBQyxRQUFRLEVBQUU7O1lBRW5DLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFFMUMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUNoQyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDcEM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzlCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQy9CLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckQ7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsT0FBNEI7O1lBRTdDLGNBQWMsR0FBRyxtQkFBQSxFQUFFLEVBQXVCO1FBRTlDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUU7WUFDeEMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBc0I7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQWpERCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi92aWV3LmVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtbkVudGl0eUZhY3Rvcnkge1xuXG5cdGNyZWF0ZShwYXJhbXM6IENvbHVtblBhcmFtcyk6IENvbHVtbkVudGl0eTtcblx0Y3JlYXRlKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IEFycmF5PENvbHVtbkVudGl0eT47XG5cdGNyZWF0ZShkYXRhOiBDb2x1bW5QYXJhbXMgfCBBcnJheTxDb2x1bW5QYXJhbXM+KTogQ29sdW1uRW50aXR5IHwgQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlQ29sdW1ucyhkYXRhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlQ29sdW1uKGRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ29sdW1uKHBhcmFtczogQ29sdW1uUGFyYW1zKTogQ29sdW1uRW50aXR5IHtcblxuXHRcdGNvbnN0IGNvbHVtbjogQ29sdW1uQ29uZmlnID0gcGFyYW1zLmdldENvbHVtbigpLFxuXHRcdFx0ZmllbGQ6IENvbHVtbkZpZWxkID0gcGFyYW1zLmdldEZpZWxkKCk7XG5cblx0XHRsZXQgY29sdW1uRW50aXR5ID0gbmV3IENvbHVtbkVudGl0eShmaWVsZCk7XG5cblx0XHRpZiAoY29sdW1uLmhlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb2x1bW5FbnRpdHkuaGVhZGVyID0gY29sdW1uLmhlYWRlcjtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uLnZpZXcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uRW50aXR5LnNldFZpZXcobmV3IFZpZXdFbnRpdHkoY29sdW1uLnZpZXcpKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uLndpZHRoICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbHVtbkVudGl0eS53aWR0aCA9IHRoaXMuY29udmVydFdpZHRoKGNvbHVtbi53aWR0aCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbkVudGl0eTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cblx0XHRsZXQgY29sdW1uRW50aXRpZXMgPSBbXSBhcyBBcnJheTxDb2x1bW5FbnRpdHk+O1xuXG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtblBhcmFtcykgPT4ge1xuXHRcdFx0Y29sdW1uRW50aXRpZXMucHVzaCh0aGlzLmNyZWF0ZUNvbHVtbihjb2x1bW4pKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBjb2x1bW5FbnRpdGllcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFdpZHRoKHdpZHRoOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiArd2lkdGg7XG5cdH1cbn1cbiJdfQ==