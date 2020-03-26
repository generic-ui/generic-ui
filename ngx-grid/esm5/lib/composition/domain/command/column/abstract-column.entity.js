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
    function AbstractColumnEntity(columnId, columnField, columnConfig, presentation, header, align, view, width) {
        this.columnId = columnId;
        this.columnField = columnField;
        this.columnConfig = columnConfig;
        this.presentation = presentation;
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
    AbstractColumnEntity.prototype.getPresentation = /**
     * @return {?}
     */
    function () {
        return this.presentation;
    };
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
     * @protected
     */
    AbstractColumnEntity.prototype.align;
    /**
     * @type {?}
     * @private
     */
    AbstractColumnEntity.prototype.columnConfig;
    /**
     * @type {?}
     * @protected
     */
    AbstractColumnEntity.prototype.view;
    /**
     * @type {?}
     * @protected
     */
    AbstractColumnEntity.prototype.presentation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9hYnN0cmFjdC1jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEVBQTBFLENBQUM7Ozs7QUFJcEc7Ozs7SUFrQkMsOEJBQXNCLFFBQWtCLEVBQ2pDLFdBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLFlBQWdDLEVBQ2hDLE1BQWdDLEVBQ2hDLEtBQW1CLEVBQ25CLElBQWlCLEVBQ2pCLEtBQWM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFFakMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELElBQUksTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDckI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7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LENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDL0I7YUFBTTtZQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztTQUM5QjtJQUNGLENBQUM7SUFFRiwyQkFBQztBQUFELENBQUMsQUE3SUQsSUE2SUM7Ozs7Ozs7Ozs7SUEzSUEsd0NBQW9DOzs7OztJQUVwQywyQ0FBaUM7Ozs7O0lBRWpDLHNDQUF5Qzs7Ozs7SUFFekMscUNBQXVCOzs7OztJQUV2QixxQ0FBNkI7Ozs7O0lBRTdCLDRDQUFtQzs7Ozs7SUFFbkMsb0NBQTJCOzs7OztJQUUzQiw0Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENvbHVtbkVudGl0eSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5JZDogQ29sdW1uSWQ7XG5cblx0cHJpdmF0ZSBjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0cHJpdmF0ZSBoZWFkZXI/OiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZTtcblxuXHRwcml2YXRlIHdpZHRoPzogbnVtYmVyO1xuXG5cdHByb3RlY3RlZCBhbGlnbjogQ29sdW1uQWxpZ247XG5cblx0cHJpdmF0ZSBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZztcblxuXHRwcm90ZWN0ZWQgdmlldzogVmlld0VudGl0eTtcblxuXHRwcm90ZWN0ZWQgcHJlc2VudGF0aW9uOiBDb2x1bW5QcmVzZW50YXRpb247XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNvbHVtbklkOiBDb2x1bW5JZCxcblx0XHRcdFx0XHRcdCAgY29sdW1uRmllbGQ6IENvbHVtbkZpZWxkLFxuXHRcdFx0XHRcdFx0ICBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyxcblx0XHRcdFx0XHRcdCAgcHJlc2VudGF0aW9uOiBDb2x1bW5QcmVzZW50YXRpb24sXG5cdFx0XHRcdFx0XHQgIGhlYWRlcj86IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHRcdFx0ICBhbGlnbj86IENvbHVtbkFsaWduLFxuXHRcdFx0XHRcdFx0ICB2aWV3PzogVmlld0VudGl0eSxcblx0XHRcdFx0XHRcdCAgd2lkdGg/OiBudW1iZXIpIHtcblx0XHR0aGlzLmNvbHVtbklkID0gY29sdW1uSWQ7XG5cdFx0dGhpcy5jb2x1bW5GaWVsZCA9IGNvbHVtbkZpZWxkO1xuXHRcdHRoaXMuY29sdW1uQ29uZmlnID0gY29sdW1uQ29uZmlnO1xuXHRcdHRoaXMucHJlc2VudGF0aW9uID0gcHJlc2VudGF0aW9uO1xuXG5cdFx0dGhpcy52aWV3ID0gVmlld0VudGl0eS5mcm9tRGF0YVR5cGUoY29sdW1uRmllbGQuZ2V0RGF0YVR5cGUoKSk7XG5cblx0XHRpZiAoaGVhZGVyKSB7XG5cdFx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0XHR9XG5cblx0XHRpZiAodmlldykge1xuXHRcdFx0dGhpcy52aWV3ID0gdmlldztcblx0XHR9XG5cblx0XHRpZiAod2lkdGgpIHtcblx0XHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR9XG5cblx0XHR0aGlzLnNldEluaXRpYWxBbGlnbihjb2x1bW5GaWVsZCwgYWxpZ24pO1xuXHR9XG5cblx0Z2V0UHJlc2VudGF0aW9uKCk6IENvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMucHJlc2VudGF0aW9uO1xuXHR9XG5cblx0Z2V0Q29sdW1uQ29uZmlnKCk6IENvbHVtbkNvbmZpZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uQ29uZmlnO1xuXHR9XG5cblx0Z2V0Q29sdW1uSWQoKTogQ29sdW1uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbklkO1xuXHR9XG5cblx0Z2V0RmllbGQoKTogQ29sdW1uRmllbGQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkO1xuXHR9XG5cblx0Z2V0SGVhZGVyKCk6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXI7XG5cdH1cblxuXHRnZXREYXRhVHlwZSgpOiBEYXRhVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRmllbGQuZ2V0RGF0YVR5cGUoKTtcblx0fVxuXG5cdGdldENlbGxWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LmdldENlbGxWaWV3KCk7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCk7XG5cdH1cblxuXHRzZXRWaWV3KHZpZXc6IFZpZXdFbnRpdHkpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXHR9XG5cblx0c2V0SGVhZGVyKGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0fVxuXG5cdGdldFZpZXcoKTogVmlld0VudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMudmlldztcblx0fVxuXG5cdGdldEFsaWduKCk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbjtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0U29ydGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgY29uZmlnID0gdGhpcy5jb2x1bW5Db25maWc7XG5cblx0XHRpZiAoY29uZmlnLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc29ydGluZyAhPT0gbnVsbCkge1xuXG5cdFx0XHRpZiAoY29uZmlnLnNvcnRpbmcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zb3J0aW5nLmVuYWJsZWQgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29uZmlnLnNvcnRpbmcuZW5hYmxlZDtcblx0XHR9XG5cdH1cblxuXHRpc0NlbGxFZGl0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRjb25zdCBjb25maWcgPSB0aGlzLmNvbHVtbkNvbmZpZztcblxuXHRcdGlmIChjb25maWcuY2VsbEVkaXRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuY2VsbEVkaXRpbmcgIT09IG51bGwpIHtcblxuXHRcdFx0aWYgKGNvbmZpZy5jZWxsRWRpdGluZy5lbmFibGVkID09PSB1bmRlZmluZWQgfHwgY29uZmlnLmNlbGxFZGl0aW5nLmVuYWJsZWQgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29uZmlnLmNlbGxFZGl0aW5nLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwcml2YXRlIHNldEluaXRpYWxBbGlnbihjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQsIGFsaWduPzogQ29sdW1uQWxpZ24pOiB2b2lkIHtcblxuXHRcdGlmIChhbGlnbiAhPT0gdW5kZWZpbmVkICYmIGFsaWduICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmFsaWduID0gYWxpZ247XG5cdFx0fSBlbHNlIGlmIChjb2x1bW5GaWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHRoaXMuYWxpZ24gPSBDb2x1bW5BbGlnbi5SSUdIVDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hbGlnbiA9IENvbHVtbkFsaWduLkxFRlQ7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==