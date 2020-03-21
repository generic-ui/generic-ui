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
var /**
 * @abstract
 */
AbstractColumnEntity = /** @class */ (function () {
    function AbstractColumnEntity(columnId, columnField, columnConfig, header, align, view, width) {
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
    AbstractColumnEntity.prototype.getColumnConfig = /**
     * @return {?}
     */
    function () {
        return this.columnConfig;
    };
    /**
     * @return {?}
     */
    AbstractColumnEntity.prototype.getColumnId = /**
     * @return {?}
     */
    function () {
        return this.columnId;
    };
    /**
     * @return {?}
     */
    AbstractColumnEntity.prototype.getField = /**
     * @return {?}
     */
    function () {
        return this.columnField;
    };
    /**
     * @return {?}
     */
    AbstractColumnEntity.prototype.getHeader = /**
     * @return {?}
     */
    function () {
        return this.header;
    };
    /**
     * @return {?}
     */
    AbstractColumnEntity.prototype.getDataType = /**
     * @return {?}
     */
    function () {
        return this.columnField.getDataType();
    };
    /**
     * @return {?}
     */
    AbstractColumnEntity.prototype.getCellView = /**
     * @return {?}
     */
    function () {
        return this.view.getCellView();
    };
    /**
     * @return {?}
     */
    AbstractColumnEntity.prototype.getTemplateFunction = /**
     * @return {?}
     */
    function () {
        return this.view.getTemplateFunction();
    };
    /**
     * @param {?} view
     * @return {?}
     */
    AbstractColumnEntity.prototype.setView = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        this.view = view;
    };
    /**
     * @param {?} header
     * @return {?}
     */
    AbstractColumnEntity.prototype.setHeader = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        this.header = header;
    };
    /**
     * @return {?}
     */
    AbstractColumnEntity.prototype.getView = /**
     * @return {?}
     */
    function () {
        return this.view;
    };
    /**
     * @return {?}
     */
    AbstractColumnEntity.prototype.getAlign = /**
     * @return {?}
     */
    function () {
        return this.align;
    };
    /**
     * @param {?} width
     * @return {?}
     */
    AbstractColumnEntity.prototype.setWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.width = width;
    };
    /**
     * @return {?}
     */
    AbstractColumnEntity.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    AbstractColumnEntity.prototype.getSortingEnabled = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = this.columnConfig;
        if (config.sorting !== undefined && config.sorting !== null) {
            if (config.sorting.enabled === undefined || config.sorting.enabled === null) {
                return true;
            }
            return config.sorting.enabled;
        }
    };
    /**
     * @return {?}
     */
    AbstractColumnEntity.prototype.isCellEditingEnabled = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = this.columnConfig;
        if (config.cellEditing !== undefined && config.cellEditing !== null) {
            if (config.cellEditing.enabled === undefined || config.cellEditing.enabled === null) {
                return true;
            }
            return config.cellEditing.enabled;
        }
        return true;
    };
    /**
     * @private
     * @param {?} columnField
     * @param {?=} align
     * @return {?}
     */
    AbstractColumnEntity.prototype.setInitialAlign = /**
     * @private
     * @param {?} columnField
     * @param {?=} align
     * @return {?}
     */
    function (columnField, align) {
        if (align !== undefined && align !== null) {
            this.align = align;
        }
        else if (columnField.getDataType() === DataType.NUMBER) {
            this.align = ColumnAlign.RIGHT;
        }
        else {
            this.align = ColumnAlign.LEFT;
        }
    };
    return AbstractColumnEntity;
}());
/**
 * @abstract
 */
export { AbstractColumnEntity };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9hYnN0cmFjdC1jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEVBQTBFLENBQUM7Ozs7QUFHcEc7Ozs7SUFnQkMsOEJBQXNCLFFBQWtCLEVBQ2pDLFdBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLE1BQWdDLEVBQ2hDLEtBQW1CLEVBQ25CLElBQWlCLEVBQ2pCLEtBQWM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFFakMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELElBQUksTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDckI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENB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RUYsMkJBQUM7QUFBRCxDQUFDLEFBcklELElBcUlDOzs7Ozs7Ozs7O0lBbklBLHdDQUFvQzs7Ozs7SUFFcEMsMkNBQWlDOzs7OztJQUVqQyxzQ0FBeUM7Ozs7O0lBRXpDLHFDQUF1Qjs7Ozs7SUFFdkIscUNBQTJCOzs7OztJQUUzQiw0Q0FBbUM7Ozs7O0lBRW5DLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIEhlYWRlclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi92aWV3LmVudGl0eSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENvbHVtbkVudGl0eSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5JZDogQ29sdW1uSWQ7XG5cblx0cHJpdmF0ZSBjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0cHJpdmF0ZSBoZWFkZXI/OiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZTtcblxuXHRwcml2YXRlIHdpZHRoPzogbnVtYmVyO1xuXG5cdHByaXZhdGUgYWxpZ246IENvbHVtbkFsaWduO1xuXG5cdHByaXZhdGUgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWc7XG5cblx0cHJpdmF0ZSB2aWV3OiBWaWV3RW50aXR5O1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdFx0XHQgIGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0XHRcdCAgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcsXG5cdFx0XHRcdFx0XHQgIGhlYWRlcj86IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHRcdFx0ICBhbGlnbj86IENvbHVtbkFsaWduLFxuXHRcdFx0XHRcdFx0ICB2aWV3PzogVmlld0VudGl0eSxcblx0XHRcdFx0XHRcdCAgd2lkdGg/OiBudW1iZXIpIHtcblx0XHR0aGlzLmNvbHVtbklkID0gY29sdW1uSWQ7XG5cdFx0dGhpcy5jb2x1bW5GaWVsZCA9IGNvbHVtbkZpZWxkO1xuXHRcdHRoaXMuY29sdW1uQ29uZmlnID0gY29sdW1uQ29uZmlnO1xuXG5cdFx0dGhpcy52aWV3ID0gVmlld0VudGl0eS5mcm9tRGF0YVR5cGUoY29sdW1uRmllbGQuZ2V0RGF0YVR5cGUoKSk7XG5cblx0XHRpZiAoaGVhZGVyKSB7XG5cdFx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0XHR9XG5cblx0XHRpZiAodmlldykge1xuXHRcdFx0dGhpcy52aWV3ID0gdmlldztcblx0XHR9XG5cblx0XHRpZiAod2lkdGgpIHtcblx0XHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR9XG5cblx0XHR0aGlzLnNldEluaXRpYWxBbGlnbihjb2x1bW5GaWVsZCwgYWxpZ24pO1xuXHR9XG5cblx0Z2V0Q29sdW1uQ29uZmlnKCk6IENvbHVtbkNvbmZpZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uQ29uZmlnO1xuXHR9XG5cblx0Z2V0Q29sdW1uSWQoKTogQ29sdW1uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbklkO1xuXHR9XG5cblx0Z2V0RmllbGQoKTogQ29sdW1uRmllbGQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkO1xuXHR9XG5cblx0Z2V0SGVhZGVyKCk6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXI7XG5cdH1cblxuXHRnZXREYXRhVHlwZSgpOiBEYXRhVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRmllbGQuZ2V0RGF0YVR5cGUoKTtcblx0fVxuXG5cdGdldENlbGxWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LmdldENlbGxWaWV3KCk7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCk7XG5cdH1cblxuXHRzZXRWaWV3KHZpZXc6IFZpZXdFbnRpdHkpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXHR9XG5cblx0c2V0SGVhZGVyKGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0fVxuXG5cdGdldFZpZXcoKTogVmlld0VudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMudmlldztcblx0fVxuXG5cdGdldEFsaWduKCk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbjtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0U29ydGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgY29uZmlnID0gdGhpcy5jb2x1bW5Db25maWc7XG5cblx0XHRpZiAoY29uZmlnLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc29ydGluZyAhPT0gbnVsbCkge1xuXG5cdFx0XHRpZiAoY29uZmlnLnNvcnRpbmcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zb3J0aW5nLmVuYWJsZWQgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29uZmlnLnNvcnRpbmcuZW5hYmxlZDtcblx0XHR9XG5cdH1cblxuXHRpc0NlbGxFZGl0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRjb25zdCBjb25maWcgPSB0aGlzLmNvbHVtbkNvbmZpZztcblxuXHRcdGlmIChjb25maWcuY2VsbEVkaXRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuY2VsbEVkaXRpbmcgIT09IG51bGwpIHtcblxuXHRcdFx0aWYgKGNvbmZpZy5jZWxsRWRpdGluZy5lbmFibGVkID09PSB1bmRlZmluZWQgfHwgY29uZmlnLmNlbGxFZGl0aW5nLmVuYWJsZWQgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29uZmlnLmNlbGxFZGl0aW5nLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwcml2YXRlIHNldEluaXRpYWxBbGlnbihjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQsIGFsaWduPzogQ29sdW1uQWxpZ24pOiB2b2lkIHtcblxuXHRcdGlmIChhbGlnbiAhPT0gdW5kZWZpbmVkICYmIGFsaWduICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmFsaWduID0gYWxpZ247XG5cdFx0fSBlbHNlIGlmIChjb2x1bW5GaWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHRoaXMuYWxpZ24gPSBDb2x1bW5BbGlnbi5SSUdIVDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hbGlnbiA9IENvbHVtbkFsaWduLkxFRlQ7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==