/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RandomStringGenerator } from '@generic-ui/hermes';
import { ColumnEntity } from './column.entity';
import { ViewEntity } from './view.entity';
import { ColumnId } from './column.id';
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
        const columnConfig = params.getColumn();
        /** @type {?} */
        const field = params.getField();
        /** @type {?} */
        let columnEntity = new ColumnEntity(new ColumnId(RandomStringGenerator.generate()), field, columnConfig);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXZDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBSS9CLE1BQU0sQ0FBQyxJQUF3QztRQUU5QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7SUFDRixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsTUFBb0I7O2NBRWxDLFlBQVksR0FBaUIsTUFBTSxDQUFDLFNBQVMsRUFBRTs7Y0FDcEQsS0FBSyxHQUFnQixNQUFNLENBQUMsUUFBUSxFQUFFOztZQUVuQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQ2xDLElBQUksUUFBUSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQzlDLEtBQUssRUFDTCxZQUFZLENBQ1o7UUFFRCxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3RDLFlBQVksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztTQUMxQztRQUVELElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN4RDtRQUVELElBQUksWUFBWSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDckMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRDtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxPQUE0Qjs7WUFFN0MsY0FBYyxHQUFHLG1CQUFBLEVBQUUsRUFBdUI7UUFFOUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRTtZQUN4QyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxLQUFzQjtRQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBckRELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi9jb2x1bW4uaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2x1bW5FbnRpdHlGYWN0b3J5IHtcblxuXHRjcmVhdGUocGFyYW1zOiBDb2x1bW5QYXJhbXMpOiBDb2x1bW5FbnRpdHk7XG5cdGNyZWF0ZShwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiBBcnJheTxDb2x1bW5FbnRpdHk+O1xuXHRjcmVhdGUoZGF0YTogQ29sdW1uUGFyYW1zIHwgQXJyYXk8Q29sdW1uUGFyYW1zPik6IENvbHVtbkVudGl0eSB8IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUNvbHVtbnMoZGF0YSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUNvbHVtbihkYXRhKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbHVtbihwYXJhbXM6IENvbHVtblBhcmFtcyk6IENvbHVtbkVudGl0eSB7XG5cblx0XHRjb25zdCBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyA9IHBhcmFtcy5nZXRDb2x1bW4oKSxcblx0XHRcdGZpZWxkOiBDb2x1bW5GaWVsZCA9IHBhcmFtcy5nZXRGaWVsZCgpO1xuXG5cdFx0bGV0IGNvbHVtbkVudGl0eSA9IG5ldyBDb2x1bW5FbnRpdHkoXG5cdFx0XHRuZXcgQ29sdW1uSWQoUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCkpLFxuXHRcdFx0ZmllbGQsXG5cdFx0XHRjb2x1bW5Db25maWdcblx0XHQpO1xuXG5cdFx0aWYgKGNvbHVtbkNvbmZpZy5oZWFkZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uRW50aXR5LmhlYWRlciA9IGNvbHVtbkNvbmZpZy5oZWFkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtbkNvbmZpZy52aWV3ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbHVtbkVudGl0eS5zZXRWaWV3KG5ldyBWaWV3RW50aXR5KGNvbHVtbkNvbmZpZy52aWV3KSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtbkNvbmZpZy53aWR0aCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb2x1bW5FbnRpdHkud2lkdGggPSB0aGlzLmNvbnZlcnRXaWR0aChjb2x1bW5Db25maWcud2lkdGgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5FbnRpdHk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXG5cdFx0bGV0IGNvbHVtbkVudGl0aWVzID0gW10gYXMgQXJyYXk8Q29sdW1uRW50aXR5PjtcblxuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5QYXJhbXMpID0+IHtcblx0XHRcdGNvbHVtbkVudGl0aWVzLnB1c2godGhpcy5jcmVhdGVDb2x1bW4oY29sdW1uKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29sdW1uRW50aXRpZXM7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRXaWR0aCh3aWR0aDogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gK3dpZHRoO1xuXHR9XG59XG4iXX0=