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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2NvbHVtbi5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUloRTtJQUFrQyx3Q0FBb0I7SUFRckQsc0JBQVksUUFBa0IsRUFDM0IsV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsT0FBZ0IsRUFDaEIsWUFBZ0MsRUFDaEMsTUFBK0IsRUFDL0IsS0FBa0IsRUFDbEIsSUFBZ0IsRUFDaEIsS0FBYTtRQVJoQixZQVNDLGtCQUNDLFFBQVEsRUFDUixXQUFXLEVBQ1gsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLElBQUksRUFDSixLQUFLLENBQ0wsU0FXRDtRQWpDTyxnQkFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQXNCL0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFEOztJQUNGLENBQUM7Ozs7SUFFRCxnQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxpQ0FBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELG9DQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELG9DQUFhOzs7O0lBQWIsVUFBYyxNQUFpQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRUYsbUJBQUM7QUFBRCxDQUFDLEFBdkRELENBQWtDLG9CQUFvQixHQXVEckQ7Ozs7SUFyREEsZ0NBQW1COzs7OztJQUVuQixrQ0FBb0M7Ozs7O0lBRXBDLCtCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIEhlYWRlclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQWJzdHJhY3RDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2Fic3RyYWN0LWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbic7XG5cblxuZXhwb3J0IGNsYXNzIENvbHVtbkVudGl0eSBleHRlbmRzIEFic3RyYWN0Q29sdW1uRW50aXR5IHtcblxuXHRzb3J0YWJsZT86IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBzb3J0U3RhdHVzID0gU29ydE9yZGVyLk5PTkU7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0Y29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcsXG5cdFx0XHRcdGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByZXNlbnRhdGlvbjogQ29sdW1uUHJlc2VudGF0aW9uLFxuXHRcdFx0XHRoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHRhbGlnbjogQ29sdW1uQWxpZ24sXG5cdFx0XHRcdHZpZXc6IFZpZXdFbnRpdHksXG5cdFx0XHRcdHdpZHRoOiBudW1iZXIpIHtcblx0XHRzdXBlcihcblx0XHRcdGNvbHVtbklkLFxuXHRcdFx0Y29sdW1uRmllbGQsXG5cdFx0XHRjb2x1bW5Db25maWcsXG5cdFx0XHRwcmVzZW50YXRpb24sXG5cdFx0XHRoZWFkZXIsXG5cdFx0XHRhbGlnbixcblx0XHRcdHZpZXcsXG5cdFx0XHR3aWR0aFxuXHRcdCk7XG5cblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXG5cdFx0aWYgKHZpZXcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy52aWV3ID0gbmV3IFZpZXdFbnRpdHkodGhpcy5wcmVzZW50YXRpb24uZ2V0RGVmYXVsdFZpZXcoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKGFsaWduID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuYWxpZ24gPSB0aGlzLnByZXNlbnRhdGlvbi5nZXREZWZhdWx0QWxpZ24odGhpcy52aWV3KTtcblx0XHR9XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRnZXRTb3J0U3RhdHVzKCk6IFNvcnRPcmRlciB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cztcblx0fVxuXG5cdHNldFNvcnRTdGF0dXMoc3RhdHVzOiBTb3J0T3JkZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRTdGF0dXMgPSBzdGF0dXM7XG5cdH1cblxufVxuIl19