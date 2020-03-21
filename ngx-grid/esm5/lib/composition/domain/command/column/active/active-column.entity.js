/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SortOrder } from '../sort/sort-order';
import { AbstractColumnEntity } from '../abstract-column.entity';
var ActiveColumnEntity = /** @class */ (function (_super) {
    tslib_1.__extends(ActiveColumnEntity, _super);
    function ActiveColumnEntity(columnId, columnField, header, align, view, config) {
        var _this = _super.call(this, columnId, columnField, config, header, align, view, undefined) || this;
        _this.sortStatus = SortOrder.NONE;
        return _this;
    }
    /**
     * @return {?}
     */
    ActiveColumnEntity.prototype.getSortStatus = /**
     * @return {?}
     */
    function () {
        return this.sortStatus;
    };
    /**
     * @param {?} status
     * @return {?}
     */
    ActiveColumnEntity.prototype.setSortStatus = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.sortStatus = status;
    };
    return ActiveColumnEntity;
}(AbstractColumnEntity));
export { ActiveColumnEntity };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.sortStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBUS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR2pFO0lBQXdDLDhDQUFvQjtJQUkzRCw0QkFBWSxRQUFrQixFQUMzQixXQUF3QixFQUN4QixNQUErQixFQUMvQixLQUFrQixFQUNsQixJQUFnQixFQUNoQixNQUFvQjtRQUx2QixZQU1DLGtCQUNDLFFBQVEsRUFDUixXQUFXLEVBQ1gsTUFBTSxFQUNOLE1BQU0sRUFDTixLQUFLLEVBQ0wsSUFBSSxFQUNKLFNBQVMsQ0FDVCxTQUNEO1FBakJPLGdCQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQzs7SUFpQnBDLENBQUM7Ozs7SUFFRCwwQ0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCwwQ0FBYTs7OztJQUFiLFVBQWMsTUFBaUI7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVGLHlCQUFDO0FBQUQsQ0FBQyxBQTdCRCxDQUF3QyxvQkFBb0IsR0E2QjNEOzs7Ozs7O0lBM0JBLHdDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIEhlYWRlclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uLy4uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQWJzdHJhY3RDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi9hYnN0cmFjdC1jb2x1bW4uZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgQWN0aXZlQ29sdW1uRW50aXR5IGV4dGVuZHMgQWJzdHJhY3RDb2x1bW5FbnRpdHkge1xuXG5cdHByaXZhdGUgc29ydFN0YXR1cyA9IFNvcnRPcmRlci5OT05FO1xuXG5cdGNvbnN0cnVjdG9yKGNvbHVtbklkOiBDb2x1bW5JZCxcblx0XHRcdFx0Y29sdW1uRmllbGQ6IENvbHVtbkZpZWxkLFxuXHRcdFx0XHRoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHRhbGlnbjogQ29sdW1uQWxpZ24sXG5cdFx0XHRcdHZpZXc6IFZpZXdFbnRpdHksXG5cdFx0XHRcdGNvbmZpZzogQ29sdW1uQ29uZmlnKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRjb2x1bW5JZCxcblx0XHRcdGNvbHVtbkZpZWxkLFxuXHRcdFx0Y29uZmlnLFxuXHRcdFx0aGVhZGVyLFxuXHRcdFx0YWxpZ24sXG5cdFx0XHR2aWV3LFxuXHRcdFx0dW5kZWZpbmVkXG5cdFx0KTtcblx0fVxuXG5cdGdldFNvcnRTdGF0dXMoKTogU29ydE9yZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzO1xuXHR9XG5cblx0c2V0U29ydFN0YXR1cyhzdGF0dXM6IFNvcnRPcmRlcik6IHZvaWQge1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHN0YXR1cztcblx0fVxuXG59XG4iXX0=