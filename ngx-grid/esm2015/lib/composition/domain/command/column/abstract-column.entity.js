/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnAlign } from '../../column-align';
import { ViewEntity } from './view.entity';
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
/**
 * @abstract
 */
export class AbstractColumnEntity {
    /**
     * @protected
     * @param {?} columnId
     * @param {?} columnField
     * @param {?} columnConfig
     * @param {?=} header
     * @param {?=} align
     * @param {?=} view
     * @param {?=} width
     */
    constructor(columnId, columnField, columnConfig, header, align, view, width) {
        this.columnId = columnId;
        this.columnField = columnField;
        this.columnConfig = columnConfig;
        this.view = ViewEntity.fromDataType(columnField.getDataType());
        if (header) {
            this.header = header;
        }
        if (view) {
            this.view = view;
        }
        if (width) {
            this.width = width;
        }
        this.setInitialAlign(columnField, align);
    }
    /**
     * @return {?}
     */
    getColumnConfig() {
        return this.columnConfig;
    }
    /**
     * @return {?}
     */
    getColumnId() {
        return this.columnId;
    }
    /**
     * @return {?}
     */
    getField() {
        return this.columnField;
    }
    /**
     * @return {?}
     */
    getHeader() {
        return this.header;
    }
    /**
     * @return {?}
     */
    getDataType() {
        return this.columnField.getDataType();
    }
    /**
     * @return {?}
     */
    getCellView() {
        return this.view.getCellView();
    }
    /**
     * @return {?}
     */
    getTemplateFunction() {
        return this.view.getTemplateFunction();
    }
    /**
     * @param {?} view
     * @return {?}
     */
    setView(view) {
        this.view = view;
    }
    /**
     * @param {?} header
     * @return {?}
     */
    setHeader(header) {
        this.header = header;
    }
    /**
     * @return {?}
     */
    getView() {
        return this.view;
    }
    /**
     * @return {?}
     */
    getAlign() {
        return this.align;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.width = width;
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getSortingEnabled() {
        /** @type {?} */
        const config = this.columnConfig;
        if (config.sorting !== undefined && config.sorting !== null) {
            if (config.sorting.enabled === undefined || config.sorting.enabled === null) {
                return true;
            }
            return config.sorting.enabled;
        }
    }
    /**
     * @return {?}
     */
    isCellEditingEnabled() {
        /** @type {?} */
        const config = this.columnConfig;
        if (config.cellEditing !== undefined && config.cellEditing !== null) {
            if (config.cellEditing.enabled === undefined || config.cellEditing.enabled === null) {
                return true;
            }
            return config.cellEditing.enabled;
        }
        return true;
    }
    /**
     * @private
     * @param {?} columnField
     * @param {?=} align
     * @return {?}
     */
    setInitialAlign(columnField, align) {
        if (align !== undefined && align !== null) {
            this.align = align;
        }
        else if (columnField.getDataType() === DataType.NUMBER) {
            this.align = ColumnAlign.RIGHT;
        }
        else {
            this.align = ColumnAlign.LEFT;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.columnField;
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.header;
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.width;
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.align;
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.columnConfig;
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.view;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9hYnN0cmFjdC1jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEVBQTBFLENBQUM7Ozs7QUFHcEcsTUFBTSxPQUFnQixvQkFBb0I7Ozs7Ozs7Ozs7O0lBZ0J6QyxZQUFzQixRQUFrQixFQUNqQyxXQUF3QixFQUN4QixZQUEwQixFQUMxQixNQUFnQyxFQUNoQyxLQUFtQixFQUNuQixJQUFpQixFQUNqQixLQUFjO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBRWpDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUUvRCxJQUFJLE1BQU0sRUFBRTtZQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUVELElBQUksS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8s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SUFFbkMsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Q29sdW1uRW50aXR5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbklkOiBDb2x1bW5JZDtcblxuXHRwcml2YXRlIGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZDtcblxuXHRwcml2YXRlIGhlYWRlcj86IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlO1xuXG5cdHByaXZhdGUgd2lkdGg/OiBudW1iZXI7XG5cblx0cHJpdmF0ZSBhbGlnbjogQ29sdW1uQWxpZ247XG5cblx0cHJpdmF0ZSBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZztcblxuXHRwcml2YXRlIHZpZXc6IFZpZXdFbnRpdHk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNvbHVtbklkOiBDb2x1bW5JZCxcblx0XHRcdFx0XHRcdCAgY29sdW1uRmllbGQ6IENvbHVtbkZpZWxkLFxuXHRcdFx0XHRcdFx0ICBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyxcblx0XHRcdFx0XHRcdCAgaGVhZGVyPzogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUsXG5cdFx0XHRcdFx0XHQgIGFsaWduPzogQ29sdW1uQWxpZ24sXG5cdFx0XHRcdFx0XHQgIHZpZXc/OiBWaWV3RW50aXR5LFxuXHRcdFx0XHRcdFx0ICB3aWR0aD86IG51bWJlcikge1xuXHRcdHRoaXMuY29sdW1uSWQgPSBjb2x1bW5JZDtcblx0XHR0aGlzLmNvbHVtbkZpZWxkID0gY29sdW1uRmllbGQ7XG5cdFx0dGhpcy5jb2x1bW5Db25maWcgPSBjb2x1bW5Db25maWc7XG5cblx0XHR0aGlzLnZpZXcgPSBWaWV3RW50aXR5LmZyb21EYXRhVHlwZShjb2x1bW5GaWVsZC5nZXREYXRhVHlwZSgpKTtcblxuXHRcdGlmIChoZWFkZXIpIHtcblx0XHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHRcdH1cblxuXHRcdGlmICh2aWV3KSB7XG5cdFx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXHRcdH1cblxuXHRcdGlmICh3aWR0aCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0SW5pdGlhbEFsaWduKGNvbHVtbkZpZWxkLCBhbGlnbik7XG5cdH1cblxuXHRnZXRDb2x1bW5Db25maWcoKTogQ29sdW1uQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5Db25maWc7XG5cdH1cblxuXHRnZXRDb2x1bW5JZCgpOiBDb2x1bW5JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uSWQ7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBDb2x1bW5GaWVsZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRmllbGQ7XG5cdH1cblxuXHRnZXRIZWFkZXIoKTogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlcjtcblx0fVxuXG5cdGdldERhdGFUeXBlKCk6IERhdGFUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5GaWVsZC5nZXREYXRhVHlwZSgpO1xuXHR9XG5cblx0Z2V0Q2VsbFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiB0aGlzLnZpZXcuZ2V0Q2VsbFZpZXcoKTtcblx0fVxuXG5cdGdldFRlbXBsYXRlRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LmdldFRlbXBsYXRlRnVuY3Rpb24oKTtcblx0fVxuXG5cdHNldFZpZXcodmlldzogVmlld0VudGl0eSk6IHZvaWQge1xuXHRcdHRoaXMudmlldyA9IHZpZXc7XG5cdH1cblxuXHRzZXRIZWFkZXIoaGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHR9XG5cblx0Z2V0VmlldygpOiBWaWV3RW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3O1xuXHR9XG5cblx0Z2V0QWxpZ24oKTogQ29sdW1uQWxpZ24ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRTb3J0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRjb25zdCBjb25maWcgPSB0aGlzLmNvbHVtbkNvbmZpZztcblxuXHRcdGlmIChjb25maWcuc29ydGluZyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zb3J0aW5nICE9PSBudWxsKSB7XG5cblx0XHRcdGlmIChjb25maWcuc29ydGluZy5lbmFibGVkID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnNvcnRpbmcuZW5hYmxlZCA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjb25maWcuc29ydGluZy5lbmFibGVkO1xuXHRcdH1cblx0fVxuXG5cdGlzQ2VsbEVkaXRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGNvbmZpZyA9IHRoaXMuY29sdW1uQ29uZmlnO1xuXG5cdFx0aWYgKGNvbmZpZy5jZWxsRWRpdGluZyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5jZWxsRWRpdGluZyAhPT0gbnVsbCkge1xuXG5cdFx0XHRpZiAoY29uZmlnLmNlbGxFZGl0aW5nLmVuYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBjb25maWcuY2VsbEVkaXRpbmcuZW5hYmxlZCA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjb25maWcuY2VsbEVkaXRpbmcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgc2V0SW5pdGlhbEFsaWduKGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCwgYWxpZ24/OiBDb2x1bW5BbGlnbik6IHZvaWQge1xuXG5cdFx0aWYgKGFsaWduICE9PSB1bmRlZmluZWQgJiYgYWxpZ24gIT09IG51bGwpIHtcblx0XHRcdHRoaXMuYWxpZ24gPSBhbGlnbjtcblx0XHR9IGVsc2UgaWYgKGNvbHVtbkZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0dGhpcy5hbGlnbiA9IENvbHVtbkFsaWduLlJJR0hUO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFsaWduID0gQ29sdW1uQWxpZ24uTEVGVDtcblx0XHR9XG5cdH1cblxufVxuIl19