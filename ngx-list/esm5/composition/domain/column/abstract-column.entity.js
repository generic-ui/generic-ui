/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Entity } from '@generic-ui/hermes';
import { ColumnAlign } from './column-align';
import { ViewEntity } from './view.entity';
import { DataType } from '../../../structure/field/domain/core/field/data/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9hYnN0cmFjdC1jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyREFBMkQsQ0FBQzs7OztBQUlyRjs7OztJQUFtRCxnREFBZ0I7SUFnQmxFLDhCQUFzQixRQUFrQixFQUNqQyxXQUF3QixFQUN4QixZQUEwQixFQUMxQixZQUFnQyxFQUNoQyxNQUFnQyxFQUNoQyxLQUFtQixFQUNuQixJQUFpQixFQUNqQixLQUFjO1FBUHJCLFlBUUMsa0JBQU0sUUFBUSxDQUFDLFNBb0JmO1FBbkJBLEtBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBRWpDLEtBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUUvRCxJQUFJLE1BQU0sRUFBRTtZQUNYLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDVCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUVELElBQUksS0FBSyxFQUFFO1lBQ1YsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbkI7UUFFRCxLQUFJLENBQUMsZUFB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QVcsQ0FBQyxLQUFLLENBQUM7U0FDL0I7YUFBTTtZQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztTQUM5QjtJQUNGLENBQUM7SUFFRiwyQkFBQztBQUFELENBQUMsQUF2SUQsQ0FBbUQsTUFBTSxHQXVJeEQ7Ozs7Ozs7Ozs7SUFySUEsMkNBQWlDOzs7OztJQUVqQyxzQ0FBeUM7Ozs7O0lBRXpDLHFDQUF1Qjs7Ozs7SUFFdkIscUNBQTZCOzs7OztJQUU3Qiw0Q0FBbUM7Ozs7O0lBRW5DLG9DQUEyQjs7Ozs7SUFFM0IsNENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi92aWV3LmVudGl0eSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vY29yZS9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4vY2VsbC12aWV3JztcbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4vcHJlc2VudGF0aW9uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RDb2x1bW5FbnRpdHkgZXh0ZW5kcyBFbnRpdHk8Q29sdW1uSWQ+IHtcblxuXHRwcml2YXRlIGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZDtcblxuXHRwcml2YXRlIGhlYWRlcj86IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlO1xuXG5cdHByaXZhdGUgd2lkdGg/OiBudW1iZXI7XG5cblx0cHJvdGVjdGVkIGFsaWduOiBDb2x1bW5BbGlnbjtcblxuXHRwcml2YXRlIGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnO1xuXG5cdHByb3RlY3RlZCB2aWV3OiBWaWV3RW50aXR5O1xuXG5cdHByb3RlY3RlZCBwcmVzZW50YXRpb246IENvbHVtblByZXNlbnRhdGlvbjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoY29sdW1uSWQ6IENvbHVtbklkLFxuXHRcdFx0XHRcdFx0ICBjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQsXG5cdFx0XHRcdFx0XHQgIGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnLFxuXHRcdFx0XHRcdFx0ICBwcmVzZW50YXRpb246IENvbHVtblByZXNlbnRhdGlvbixcblx0XHRcdFx0XHRcdCAgaGVhZGVyPzogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUsXG5cdFx0XHRcdFx0XHQgIGFsaWduPzogQ29sdW1uQWxpZ24sXG5cdFx0XHRcdFx0XHQgIHZpZXc/OiBWaWV3RW50aXR5LFxuXHRcdFx0XHRcdFx0ICB3aWR0aD86IG51bWJlcikge1xuXHRcdHN1cGVyKGNvbHVtbklkKTtcblx0XHR0aGlzLmNvbHVtbkZpZWxkID0gY29sdW1uRmllbGQ7XG5cdFx0dGhpcy5jb2x1bW5Db25maWcgPSBjb2x1bW5Db25maWc7XG5cdFx0dGhpcy5wcmVzZW50YXRpb24gPSBwcmVzZW50YXRpb247XG5cblx0XHR0aGlzLnZpZXcgPSBWaWV3RW50aXR5LmZyb21EYXRhVHlwZShjb2x1bW5GaWVsZC5nZXREYXRhVHlwZSgpKTtcblxuXHRcdGlmIChoZWFkZXIpIHtcblx0XHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHRcdH1cblxuXHRcdGlmICh2aWV3KSB7XG5cdFx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXHRcdH1cblxuXHRcdGlmICh3aWR0aCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0SW5pdGlhbEFsaWduKGNvbHVtbkZpZWxkLCBhbGlnbik7XG5cdH1cblxuXHRnZXRQcmVzZW50YXRpb24oKTogQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5wcmVzZW50YXRpb247XG5cdH1cblxuXHRnZXRDb2x1bW5Db25maWcoKTogQ29sdW1uQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5Db25maWc7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBDb2x1bW5GaWVsZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRmllbGQ7XG5cdH1cblxuXHRnZXRIZWFkZXIoKTogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlcjtcblx0fVxuXG5cdGdldERhdGFUeXBlKCk6IERhdGFUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5GaWVsZC5nZXREYXRhVHlwZSgpO1xuXHR9XG5cblx0Z2V0Q2VsbFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiB0aGlzLnZpZXcuZ2V0Q2VsbFZpZXcoKTtcblx0fVxuXG5cdGdldFRlbXBsYXRlRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LmdldFRlbXBsYXRlRnVuY3Rpb24oKTtcblx0fVxuXG5cdHNldFZpZXcodmlldzogVmlld0VudGl0eSk6IHZvaWQge1xuXHRcdHRoaXMudmlldyA9IHZpZXc7XG5cdH1cblxuXHRzZXRIZWFkZXIoaGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHR9XG5cblx0Z2V0VmlldygpOiBWaWV3RW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3O1xuXHR9XG5cblx0Z2V0QWxpZ24oKTogQ29sdW1uQWxpZ24ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRTb3J0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRjb25zdCBjb25maWcgPSB0aGlzLmNvbHVtbkNvbmZpZztcblxuXHRcdGlmIChjb25maWcuc29ydGluZyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zb3J0aW5nICE9PSBudWxsKSB7XG5cblx0XHRcdGlmIChjb25maWcuc29ydGluZy5lbmFibGVkID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnNvcnRpbmcuZW5hYmxlZCA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjb25maWcuc29ydGluZy5lbmFibGVkO1xuXHRcdH1cblx0fVxuXG5cdGlzQ2VsbEVkaXRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGNvbmZpZyA9IHRoaXMuY29sdW1uQ29uZmlnO1xuXG5cdFx0aWYgKGNvbmZpZy5jZWxsRWRpdGluZyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5jZWxsRWRpdGluZyAhPT0gbnVsbCkge1xuXG5cdFx0XHRpZiAoY29uZmlnLmNlbGxFZGl0aW5nLmVuYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBjb25maWcuY2VsbEVkaXRpbmcuZW5hYmxlZCA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjb25maWcuY2VsbEVkaXRpbmcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgc2V0SW5pdGlhbEFsaWduKGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCwgYWxpZ24/OiBDb2x1bW5BbGlnbik6IHZvaWQge1xuXG5cdFx0aWYgKGFsaWduICE9PSB1bmRlZmluZWQgJiYgYWxpZ24gIT09IG51bGwpIHtcblx0XHRcdHRoaXMuYWxpZ24gPSBhbGlnbjtcblx0XHR9IGVsc2UgaWYgKGNvbHVtbkZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0dGhpcy5hbGlnbiA9IENvbHVtbkFsaWduLlJJR0hUO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFsaWduID0gQ29sdW1uQWxpZ24uTEVGVDtcblx0XHR9XG5cdH1cblxufVxuIl19