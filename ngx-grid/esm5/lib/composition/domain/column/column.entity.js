/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SortOrder } from './sort/sort-order';
import { ViewEntity } from './view.entity';
import { AbstractColumnEntity } from './abstract-column.entity';
var ColumnEntity = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnEntity, _super);
    function ColumnEntity(columnId, columnField, columnConfig, enabled, presentation, header, align, view, width) {
        var _this = _super.call(this, columnId, columnField, columnConfig, presentation, header, align, view, width) || this;
        _this.sortStatus = SortOrder.NONE;
        _this.enabled = true;
        _this.enabled = enabled;
        if (view === undefined) {
            _this.view = new ViewEntity(_this.presentation.getDefaultView());
        }
        if (align === undefined) {
            _this.align = _this.presentation.getDefaultAlign(_this.view);
        }
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
     * @return {?}
     */
    ColumnEntity.prototype.getSortStatus = /**
     * @return {?}
     */
    function () {
        return this.sortStatus;
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
        this.sortStatus = status;
    };
    return ColumnEntity;
}(AbstractColumnEntity));
export { ColumnEntity };
if (false) {
    /** @type {?} */
    ColumnEntity.prototype.sortable;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBSWhFO0lBQWtDLHdDQUFvQjtJQVFyRCxzQkFBWSxRQUFrQixFQUMzQixXQUF3QixFQUN4QixZQUEwQixFQUMxQixPQUFnQixFQUNoQixZQUFnQyxFQUNoQyxNQUErQixFQUMvQixLQUFrQixFQUNsQixJQUFnQixFQUNoQixLQUFhO1FBUmhCLFlBU0Msa0JBQ0MsUUFBUSxFQUNSLFdBQVcsRUFDWCxZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsSUFBSSxFQUNKLEtBQUssQ0FDTCxTQVdEO1FBakNPLGdCQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBc0IvQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdkIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDL0Q7UUFFRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDeEIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUQ7O0lBQ0YsQ0FBQzs7OztJQUVELGdDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGlDQUFVOzs7O0lBQVYsVUFBVyxPQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsb0NBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsb0NBQWE7Ozs7SUFBYixVQUFjLE1BQWlCO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFFRixtQkFBQztBQUFELENBQUMsQUF2REQsQ0FBa0Msb0JBQW9CLEdBdURyRDs7OztJQXJEQSxnQ0FBbUI7Ozs7O0lBRW5CLGtDQUFvQzs7Ozs7SUFFcEMsK0JBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBBYnN0cmFjdENvbHVtbkVudGl0eSB9IGZyb20gJy4vYWJzdHJhY3QtY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL3ByZXNlbnRhdGlvbi9jb2x1bW4ucHJlc2VudGF0aW9uJztcblxuXG5leHBvcnQgY2xhc3MgQ29sdW1uRW50aXR5IGV4dGVuZHMgQWJzdHJhY3RDb2x1bW5FbnRpdHkge1xuXG5cdHNvcnRhYmxlPzogYm9vbGVhbjtcblxuXHRwcml2YXRlIHNvcnRTdGF0dXMgPSBTb3J0T3JkZXIuTk9ORTtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKGNvbHVtbklkOiBDb2x1bW5JZCxcblx0XHRcdFx0Y29sdW1uRmllbGQ6IENvbHVtbkZpZWxkLFxuXHRcdFx0XHRjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyxcblx0XHRcdFx0ZW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJlc2VudGF0aW9uOiBDb2x1bW5QcmVzZW50YXRpb24sXG5cdFx0XHRcdGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUsXG5cdFx0XHRcdGFsaWduOiBDb2x1bW5BbGlnbixcblx0XHRcdFx0dmlldzogVmlld0VudGl0eSxcblx0XHRcdFx0d2lkdGg6IG51bWJlcikge1xuXHRcdHN1cGVyKFxuXHRcdFx0Y29sdW1uSWQsXG5cdFx0XHRjb2x1bW5GaWVsZCxcblx0XHRcdGNvbHVtbkNvbmZpZyxcblx0XHRcdHByZXNlbnRhdGlvbixcblx0XHRcdGhlYWRlcixcblx0XHRcdGFsaWduLFxuXHRcdFx0dmlldyxcblx0XHRcdHdpZHRoXG5cdFx0KTtcblxuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cblx0XHRpZiAodmlldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnZpZXcgPSBuZXcgVmlld0VudGl0eSh0aGlzLnByZXNlbnRhdGlvbi5nZXREZWZhdWx0VmlldygpKTtcblx0XHR9XG5cblx0XHRpZiAoYWxpZ24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5hbGlnbiA9IHRoaXMucHJlc2VudGF0aW9uLmdldERlZmF1bHRBbGlnbih0aGlzLnZpZXcpO1xuXHRcdH1cblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdGdldFNvcnRTdGF0dXMoKTogU29ydE9yZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzO1xuXHR9XG5cblx0c2V0U29ydFN0YXR1cyhzdGF0dXM6IFNvcnRPcmRlcik6IHZvaWQge1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHN0YXR1cztcblx0fVxuXG59XG4iXX0=