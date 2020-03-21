/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SortOrder } from './sort/sort-order';
import { AbstractColumnEntity } from './abstract-column.entity';
var ColumnEntity = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnEntity, _super);
    function ColumnEntity(columnId, columnField, columnConfig, header, align, view, width) {
        var _this = _super.call(this, columnId, columnField, columnConfig, header, align, view, width) || this;
        _this.sortOrder = SortOrder.NONE;
        _this.enabled = true;
        return _this;
    }
    /**
     * @return {?}
     */
    ColumnEntity.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    ColumnEntity.prototype.setEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.enabled = enabled;
    };
    /**
     * @param {?} status
     * @return {?}
     */
    ColumnEntity.prototype.setSortStatus = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.sortOrder = status;
    };
    return ColumnEntity;
}(AbstractColumnEntity));
export { ColumnEntity };
if (false) {
    /** @type {?} */
    ColumnEntity.prototype.sortOrder;
    /** @type {?} */
    ColumnEntity.prototype.sortable;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2hFO0lBQWtDLHdDQUFvQjtJQVFyRCxzQkFBWSxRQUFrQixFQUMzQixXQUF3QixFQUN4QixZQUEwQixFQUMxQixNQUFnQyxFQUNoQyxLQUFtQixFQUNuQixJQUFpQixFQUNqQixLQUFjO1FBTmpCLFlBT0Msa0JBQ0MsUUFBUSxFQUNSLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxJQUFJLEVBQ0osS0FBSyxDQUNMLFNBQ0Q7UUF0QkQsZUFBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFJbkIsYUFBTyxHQUFZLElBQUksQ0FBQzs7SUFrQmhDLENBQUM7Ozs7SUFFRCxnQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxpQ0FBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxvQ0FBYTs7OztJQUFiLFVBQWMsTUFBaUI7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVGLG1CQUFDO0FBQUQsQ0FBQyxBQXRDRCxDQUFrQyxvQkFBb0IsR0FzQ3JEOzs7O0lBcENBLGlDQUEyQjs7SUFFM0IsZ0NBQW1COzs7OztJQUVuQiwrQkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQWJzdHJhY3RDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2Fic3RyYWN0LWNvbHVtbi5lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5FbnRpdHkgZXh0ZW5kcyBBYnN0cmFjdENvbHVtbkVudGl0eSB7XG5cblx0c29ydE9yZGVyID0gU29ydE9yZGVyLk5PTkU7XG5cblx0c29ydGFibGU/OiBib29sZWFuO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoY29sdW1uSWQ6IENvbHVtbklkLFxuXHRcdFx0XHRjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQsXG5cdFx0XHRcdGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnLFxuXHRcdFx0XHRoZWFkZXI/OiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSxcblx0XHRcdFx0YWxpZ24/OiBDb2x1bW5BbGlnbixcblx0XHRcdFx0dmlldz86IFZpZXdFbnRpdHksXG5cdFx0XHRcdHdpZHRoPzogbnVtYmVyKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRjb2x1bW5JZCxcblx0XHRcdGNvbHVtbkZpZWxkLFxuXHRcdFx0Y29sdW1uQ29uZmlnLFxuXHRcdFx0aGVhZGVyLFxuXHRcdFx0YWxpZ24sXG5cdFx0XHR2aWV3LFxuXHRcdFx0d2lkdGhcblx0XHQpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0c2V0U29ydFN0YXR1cyhzdGF0dXM6IFNvcnRPcmRlcik6IHZvaWQge1xuXHRcdHRoaXMuc29ydE9yZGVyID0gc3RhdHVzO1xuXHR9XG5cbn1cbiJdfQ==