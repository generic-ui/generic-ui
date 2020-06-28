/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Entity } from '@generic-ui/hermes';
import { ColumnAlign } from './column-align';
import { ViewEntity } from './view.entity';
import { DataType } from '../../../../structure/field/domain/core/field/data/data-type';
/**
 * @abstract
 */
var /**
 * @abstract
 */
AbstractColumnEntity = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractColumnEntity, _super);
    function AbstractColumnEntity(columnId, columnField, columnConfig, presentation, header, align, view, width) {
        var _this = _super.call(this, columnId) || this;
        _this.columnField = columnField;
        _this.columnConfig = columnConfig;
        _this.presentation = presentation;
        _this.view = ViewEntity.fromDataType(columnField.getDataType());
        if (header) {
            _this.header = header;
        }
        if (view) {
            _this.view = view;
        }
        if (width) {
            _this.width = width;
        }
        _this.setInitialAlign(columnField, align);
        return _this;
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
}(Entity));
/**
 * @abstract
 */
export { AbstractColumnEntity };
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vYWJzdHJhY3QtY29sdW1uLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUs1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOERBQThELENBQUM7Ozs7QUFJeEY7Ozs7SUFBbUQsZ0RBQWdCO0lBZ0JsRSw4QkFBc0IsUUFBa0IsRUFDakMsV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsWUFBZ0MsRUFDaEMsTUFBZ0MsRUFDaEMsS0FBbUIsRUFDbkIsSUFBaUIsRUFDakIsS0FBYztRQVByQixZQVFDLGtCQUFNLFFBQVEsQ0FBQyxTQW9CZjtRQW5CQSxLQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUVqQyxLQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFL0QsSUFBSSxNQUFNLEVBQUU7WUFDWCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUNyQjtRQUVELElBQUksSUFBSSxFQUFFO1lBQ1QsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDakI7UUFFRCxJQUFJLEtBQUssRUFBRTtZQUNWLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ25CO1FBRUQsS0FBSSxDQUFD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RyxXQUFXLENBQUMsS0FBSyxDQUFDO1NBQy9CO2FBQU07WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDOUI7SUFDRixDQUFDO0lBRUYsMkJBQUM7QUFBRCxDQUFDLEFBdklELENBQW1ELE1BQU0sR0F1SXhEOzs7Ozs7Ozs7O0lBcklBLDJDQUFpQzs7Ozs7SUFFakMsc0NBQXlDOzs7OztJQUV6QyxxQ0FBdUI7Ozs7O0lBRXZCLHFDQUE2Qjs7Ozs7SUFFN0IsNENBQW1DOzs7OztJQUVuQyxvQ0FBMkI7Ozs7O0lBRTNCLDRDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIEhlYWRlclRlbXBsYXRlIH0gZnJvbSAnLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL3ByZXNlbnRhdGlvbi9jb2x1bW4ucHJlc2VudGF0aW9uJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Q29sdW1uRW50aXR5IGV4dGVuZHMgRW50aXR5PENvbHVtbklkPiB7XG5cblx0cHJpdmF0ZSBjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0cHJpdmF0ZSBoZWFkZXI/OiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZTtcblxuXHRwcml2YXRlIHdpZHRoPzogbnVtYmVyO1xuXG5cdHByb3RlY3RlZCBhbGlnbjogQ29sdW1uQWxpZ247XG5cblx0cHJpdmF0ZSBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZztcblxuXHRwcm90ZWN0ZWQgdmlldzogVmlld0VudGl0eTtcblxuXHRwcm90ZWN0ZWQgcHJlc2VudGF0aW9uOiBDb2x1bW5QcmVzZW50YXRpb247XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNvbHVtbklkOiBDb2x1bW5JZCxcblx0XHRcdFx0XHRcdCAgY29sdW1uRmllbGQ6IENvbHVtbkZpZWxkLFxuXHRcdFx0XHRcdFx0ICBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyxcblx0XHRcdFx0XHRcdCAgcHJlc2VudGF0aW9uOiBDb2x1bW5QcmVzZW50YXRpb24sXG5cdFx0XHRcdFx0XHQgIGhlYWRlcj86IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHRcdFx0ICBhbGlnbj86IENvbHVtbkFsaWduLFxuXHRcdFx0XHRcdFx0ICB2aWV3PzogVmlld0VudGl0eSxcblx0XHRcdFx0XHRcdCAgd2lkdGg/OiBudW1iZXIpIHtcblx0XHRzdXBlcihjb2x1bW5JZCk7XG5cdFx0dGhpcy5jb2x1bW5GaWVsZCA9IGNvbHVtbkZpZWxkO1xuXHRcdHRoaXMuY29sdW1uQ29uZmlnID0gY29sdW1uQ29uZmlnO1xuXHRcdHRoaXMucHJlc2VudGF0aW9uID0gcHJlc2VudGF0aW9uO1xuXG5cdFx0dGhpcy52aWV3ID0gVmlld0VudGl0eS5mcm9tRGF0YVR5cGUoY29sdW1uRmllbGQuZ2V0RGF0YVR5cGUoKSk7XG5cblx0XHRpZiAoaGVhZGVyKSB7XG5cdFx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0XHR9XG5cblx0XHRpZiAodmlldykge1xuXHRcdFx0dGhpcy52aWV3ID0gdmlldztcblx0XHR9XG5cblx0XHRpZiAod2lkdGgpIHtcblx0XHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR9XG5cblx0XHR0aGlzLnNldEluaXRpYWxBbGlnbihjb2x1bW5GaWVsZCwgYWxpZ24pO1xuXHR9XG5cblx0Z2V0UHJlc2VudGF0aW9uKCk6IENvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMucHJlc2VudGF0aW9uO1xuXHR9XG5cblx0Z2V0Q29sdW1uQ29uZmlnKCk6IENvbHVtbkNvbmZpZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uQ29uZmlnO1xuXHR9XG5cblx0Z2V0RmllbGQoKTogQ29sdW1uRmllbGQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkO1xuXHR9XG5cblx0Z2V0SGVhZGVyKCk6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXI7XG5cdH1cblxuXHRnZXREYXRhVHlwZSgpOiBEYXRhVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRmllbGQuZ2V0RGF0YVR5cGUoKTtcblx0fVxuXG5cdGdldENlbGxWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LmdldENlbGxWaWV3KCk7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCk7XG5cdH1cblxuXHRzZXRWaWV3KHZpZXc6IFZpZXdFbnRpdHkpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXHR9XG5cblx0c2V0SGVhZGVyKGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0fVxuXG5cdGdldFZpZXcoKTogVmlld0VudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMudmlldztcblx0fVxuXG5cdGdldEFsaWduKCk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbjtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0U29ydGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgY29uZmlnID0gdGhpcy5jb2x1bW5Db25maWc7XG5cblx0XHRpZiAoY29uZmlnLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc29ydGluZyAhPT0gbnVsbCkge1xuXG5cdFx0XHRpZiAoY29uZmlnLnNvcnRpbmcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zb3J0aW5nLmVuYWJsZWQgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29uZmlnLnNvcnRpbmcuZW5hYmxlZDtcblx0XHR9XG5cdH1cblxuXHRpc0NlbGxFZGl0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRjb25zdCBjb25maWcgPSB0aGlzLmNvbHVtbkNvbmZpZztcblxuXHRcdGlmIChjb25maWcuY2VsbEVkaXRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuY2VsbEVkaXRpbmcgIT09IG51bGwpIHtcblxuXHRcdFx0aWYgKGNvbmZpZy5jZWxsRWRpdGluZy5lbmFibGVkID09PSB1bmRlZmluZWQgfHwgY29uZmlnLmNlbGxFZGl0aW5nLmVuYWJsZWQgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29uZmlnLmNlbGxFZGl0aW5nLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwcml2YXRlIHNldEluaXRpYWxBbGlnbihjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQsIGFsaWduPzogQ29sdW1uQWxpZ24pOiB2b2lkIHtcblxuXHRcdGlmIChhbGlnbiAhPT0gdW5kZWZpbmVkICYmIGFsaWduICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmFsaWduID0gYWxpZ247XG5cdFx0fSBlbHNlIGlmIChjb2x1bW5GaWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHRoaXMuYWxpZ24gPSBDb2x1bW5BbGlnbi5SSUdIVDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hbGlnbiA9IENvbHVtbkFsaWduLkxFRlQ7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==