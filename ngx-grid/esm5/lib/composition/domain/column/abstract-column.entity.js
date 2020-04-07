/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Entity } from '@generic-ui/hermes';
import { ColumnAlign } from './column-align';
import { ViewEntity } from './view.entity';
import { DataType } from '../../../structure/domain/structure/field/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vYWJzdHJhY3QtY29sdW1uLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUs1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sK0RBQStELENBQUM7Ozs7QUFJekY7Ozs7SUFBbUQsZ0RBQWdCO0lBZ0JsRSw4QkFBc0IsUUFBa0IsRUFDakMsV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsWUFBZ0MsRUFDaEMsTUFBZ0MsRUFDaEMsS0FBbUIsRUFDbkIsSUFBaUIsRUFDakIsS0FBYztRQVByQixZQVFDLGtCQUFNLFFBQVEsQ0FBQyxTQW9CZjtRQW5CQSxLQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUVqQyxLQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFL0QsSUFBSSxNQUFNLEVBQUU7WUFDWCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUNyQjtRQUVELElBQUksSUFBSSxFQUFFO1lBQ1QsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDakI7UUFFRCxJQUFJLEtBQUssRUFBRTtZQUNWLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ25CO1FBRUQsS0FBSSxDQUFD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RyxXQUFXLENBQUMsS0FBSyxDQUFDO1NBQy9CO2FBQU07WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDOUI7SUFDRixDQUFDO0lBRUYsMkJBQUM7QUFBRCxDQUFDLEFBdklELENBQW1ELE1BQU0sR0F1SXhEOzs7Ozs7Ozs7O0lBcklBLDJDQUFpQzs7Ozs7SUFFakMsc0NBQXlDOzs7OztJQUV6QyxxQ0FBdUI7Ozs7O0lBRXZCLHFDQUE2Qjs7Ozs7SUFFN0IsNENBQW1DOzs7OztJQUVuQyxvQ0FBMkI7Ozs7O0lBRTNCLDRDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIEhlYWRlclRlbXBsYXRlIH0gZnJvbSAnLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENvbHVtbkVudGl0eSBleHRlbmRzIEVudGl0eTxDb2x1bW5JZD4ge1xuXG5cdHByaXZhdGUgY29sdW1uRmllbGQ6IENvbHVtbkZpZWxkO1xuXG5cdHByaXZhdGUgaGVhZGVyPzogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0cHJpdmF0ZSB3aWR0aD86IG51bWJlcjtcblxuXHRwcm90ZWN0ZWQgYWxpZ246IENvbHVtbkFsaWduO1xuXG5cdHByaXZhdGUgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWc7XG5cblx0cHJvdGVjdGVkIHZpZXc6IFZpZXdFbnRpdHk7XG5cblx0cHJvdGVjdGVkIHByZXNlbnRhdGlvbjogQ29sdW1uUHJlc2VudGF0aW9uO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdFx0XHQgIGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0XHRcdCAgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcsXG5cdFx0XHRcdFx0XHQgIHByZXNlbnRhdGlvbjogQ29sdW1uUHJlc2VudGF0aW9uLFxuXHRcdFx0XHRcdFx0ICBoZWFkZXI/OiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSxcblx0XHRcdFx0XHRcdCAgYWxpZ24/OiBDb2x1bW5BbGlnbixcblx0XHRcdFx0XHRcdCAgdmlldz86IFZpZXdFbnRpdHksXG5cdFx0XHRcdFx0XHQgIHdpZHRoPzogbnVtYmVyKSB7XG5cdFx0c3VwZXIoY29sdW1uSWQpO1xuXHRcdHRoaXMuY29sdW1uRmllbGQgPSBjb2x1bW5GaWVsZDtcblx0XHR0aGlzLmNvbHVtbkNvbmZpZyA9IGNvbHVtbkNvbmZpZztcblx0XHR0aGlzLnByZXNlbnRhdGlvbiA9IHByZXNlbnRhdGlvbjtcblxuXHRcdHRoaXMudmlldyA9IFZpZXdFbnRpdHkuZnJvbURhdGFUeXBlKGNvbHVtbkZpZWxkLmdldERhdGFUeXBlKCkpO1xuXG5cdFx0aWYgKGhlYWRlcikge1xuXHRcdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKHZpZXcpIHtcblx0XHRcdHRoaXMudmlldyA9IHZpZXc7XG5cdFx0fVxuXG5cdFx0aWYgKHdpZHRoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRJbml0aWFsQWxpZ24oY29sdW1uRmllbGQsIGFsaWduKTtcblx0fVxuXG5cdGdldFByZXNlbnRhdGlvbigpOiBDb2x1bW5QcmVzZW50YXRpb24ge1xuXHRcdHJldHVybiB0aGlzLnByZXNlbnRhdGlvbjtcblx0fVxuXG5cdGdldENvbHVtbkNvbmZpZygpOiBDb2x1bW5Db25maWcge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkNvbmZpZztcblx0fVxuXG5cdGdldEZpZWxkKCk6IENvbHVtbkZpZWxkIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5GaWVsZDtcblx0fVxuXG5cdGdldEhlYWRlcigpOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkLmdldERhdGFUeXBlKCk7XG5cdH1cblxuXHRnZXRDZWxsVmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRDZWxsVmlldygpO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZpZXcuZ2V0VGVtcGxhdGVGdW5jdGlvbigpO1xuXHR9XG5cblx0c2V0Vmlldyh2aWV3OiBWaWV3RW50aXR5KTogdm9pZCB7XG5cdFx0dGhpcy52aWV3ID0gdmlldztcblx0fVxuXG5cdHNldEhlYWRlcihoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdH1cblxuXHRnZXRWaWV3KCk6IFZpZXdFbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLnZpZXc7XG5cdH1cblxuXHRnZXRBbGlnbigpOiBDb2x1bW5BbGlnbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ247XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldFNvcnRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGNvbmZpZyA9IHRoaXMuY29sdW1uQ29uZmlnO1xuXG5cdFx0aWYgKGNvbmZpZy5zb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNvcnRpbmcgIT09IG51bGwpIHtcblxuXHRcdFx0aWYgKGNvbmZpZy5zb3J0aW5nLmVuYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc29ydGluZy5lbmFibGVkID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbmZpZy5zb3J0aW5nLmVuYWJsZWQ7XG5cdFx0fVxuXHR9XG5cblx0aXNDZWxsRWRpdGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgY29uZmlnID0gdGhpcy5jb2x1bW5Db25maWc7XG5cblx0XHRpZiAoY29uZmlnLmNlbGxFZGl0aW5nICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmNlbGxFZGl0aW5nICE9PSBudWxsKSB7XG5cblx0XHRcdGlmIChjb25maWcuY2VsbEVkaXRpbmcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5jZWxsRWRpdGluZy5lbmFibGVkID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbmZpZy5jZWxsRWRpdGluZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRJbml0aWFsQWxpZ24oY29sdW1uRmllbGQ6IENvbHVtbkZpZWxkLCBhbGlnbj86IENvbHVtbkFsaWduKTogdm9pZCB7XG5cblx0XHRpZiAoYWxpZ24gIT09IHVuZGVmaW5lZCAmJiBhbGlnbiAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5hbGlnbiA9IGFsaWduO1xuXHRcdH0gZWxzZSBpZiAoY29sdW1uRmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHR0aGlzLmFsaWduID0gQ29sdW1uQWxpZ24uUklHSFQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWxpZ24gPSBDb2x1bW5BbGlnbi5MRUZUO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=