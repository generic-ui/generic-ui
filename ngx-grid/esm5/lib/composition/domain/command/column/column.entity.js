/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from '../../cell-view';
import { SortStatus } from './sort/sort-status';
import { ViewEntity } from './view.entity';
var ColumnEntity = /** @class */ (function () {
    function ColumnEntity(columnId, columnField, columnConfig, header, view, width) {
        this.sortStatus = SortStatus.NONE;
        this.enabled = true;
        this.view = new ViewEntity(CellView.TEXT);
        this.columnId = columnId;
        this.columnField = columnField;
        this.columnConfig = columnConfig;
        if (header) {
            this.header = header;
        }
        if (view) {
            this.view = view;
        }
        if (width) {
            this.width = width;
        }
    }
    /**
     * @return {?}
     */
    ColumnEntity.prototype.getColumnConfig = /**
     * @return {?}
     */
    function () {
        return this.columnConfig;
    };
    /**
     * @return {?}
     */
    ColumnEntity.prototype.getColumnId = /**
     * @return {?}
     */
    function () {
        return this.columnId;
    };
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
    ColumnEntity.prototype.getField = /**
     * @return {?}
     */
    function () {
        return this.columnField;
    };
    /**
     * @return {?}
     */
    ColumnEntity.prototype.getHeader = /**
     * @return {?}
     */
    function () {
        return this.header;
    };
    /**
     * @return {?}
     */
    ColumnEntity.prototype.getDataType = /**
     * @return {?}
     */
    function () {
        return this.columnField.getDataType();
    };
    /**
     * @return {?}
     */
    ColumnEntity.prototype.getCellView = /**
     * @return {?}
     */
    function () {
        return this.view.getCellView();
    };
    /**
     * @return {?}
     */
    ColumnEntity.prototype.getTemplateFunction = /**
     * @return {?}
     */
    function () {
        return this.view.getTemplateFunction();
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
    /**
     * @param {?} view
     * @return {?}
     */
    ColumnEntity.prototype.setView = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        this.view = view;
    };
    /**
     * @return {?}
     */
    ColumnEntity.prototype.getView = /**
     * @return {?}
     */
    function () {
        return this.view;
    };
    return ColumnEntity;
}());
export { ColumnEntity };
if (false) {
    /** @type {?} */
    ColumnEntity.prototype.columnId;
    /** @type {?} */
    ColumnEntity.prototype.columnField;
    /** @type {?} */
    ColumnEntity.prototype.header;
    /** @type {?} */
    ColumnEntity.prototype.sortStatus;
    /** @type {?} */
    ColumnEntity.prototype.width;
    /** @type {?} */
    ColumnEntity.prototype.sortable;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.columnConfig;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.view;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0M7SUFxQkMsc0JBQVksUUFBa0IsRUFDM0IsV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsTUFBZ0MsRUFDaEMsSUFBaUIsRUFDakIsS0FBYztRQWxCakIsZUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFPckIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUl4QixTQUFJLEdBQWUsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBUXhELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBRWpDLElBQUksTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDckI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjtJQUVGLENBQUM7Ozs7SUFFRCxzQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGtDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsZ0NBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsaUNBQVU7Ozs7SUFBVixVQUFXLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCwrQkFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGdDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsa0NBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxrQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDBDQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxvQ0FBYTs7OztJQUFiLFVBQWMsTUFBa0I7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCw4QkFBTzs7OztJQUFQLFVBQVEsSUFBZ0I7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELDhCQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0lBRUYsbUJBQUM7QUFBRCxDQUFDLEFBN0ZELElBNkZDOzs7O0lBM0ZBLGdDQUFtQjs7SUFFbkIsbUNBQXlCOztJQUV6Qiw4QkFBaUM7O0lBRWpDLGtDQUE2Qjs7SUFHN0IsNkJBQWU7O0lBRWYsZ0NBQW1COzs7OztJQUVuQiwrQkFBZ0M7Ozs7O0lBRWhDLG9DQUFtQzs7Ozs7SUFFbkMsNEJBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFNvcnRTdGF0dXMgfSBmcm9tICcuL3NvcnQvc29ydC1zdGF0dXMnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5FbnRpdHkge1xuXG5cdGNvbHVtbklkOiBDb2x1bW5JZDtcblxuXHRjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0aGVhZGVyPzogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0c29ydFN0YXR1cyA9IFNvcnRTdGF0dXMuTk9ORTtcblxuXHQvLyBSRU1PVkVcblx0d2lkdGg/OiBudW1iZXI7XG5cblx0c29ydGFibGU/OiBib29sZWFuO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZztcblxuXHRwcml2YXRlIHZpZXc6IFZpZXdFbnRpdHkgPSBuZXcgVmlld0VudGl0eShDZWxsVmlldy5URVhUKTtcblxuXHRjb25zdHJ1Y3Rvcihjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0Y29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcsXG5cdFx0XHRcdGhlYWRlcj86IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHR2aWV3PzogVmlld0VudGl0eSxcblx0XHRcdFx0d2lkdGg/OiBudW1iZXIpIHtcblx0XHR0aGlzLmNvbHVtbklkID0gY29sdW1uSWQ7XG5cdFx0dGhpcy5jb2x1bW5GaWVsZCA9IGNvbHVtbkZpZWxkO1xuXHRcdHRoaXMuY29sdW1uQ29uZmlnID0gY29sdW1uQ29uZmlnO1xuXG5cdFx0aWYgKGhlYWRlcikge1xuXHRcdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKHZpZXcpIHtcblx0XHRcdHRoaXMudmlldyA9IHZpZXc7XG5cdFx0fVxuXG5cdFx0aWYgKHdpZHRoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdH1cblxuXHRnZXRDb2x1bW5Db25maWcoKTogQ29sdW1uQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5Db25maWc7XG5cdH1cblxuXHRnZXRDb2x1bW5JZCgpOiBDb2x1bW5JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uSWQ7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBDb2x1bW5GaWVsZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRmllbGQ7XG5cdH1cblxuXHRnZXRIZWFkZXIoKTogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGV7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkLmdldERhdGFUeXBlKCk7XG5cdH1cblxuXHRnZXRDZWxsVmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRDZWxsVmlldygpO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZpZXcuZ2V0VGVtcGxhdGVGdW5jdGlvbigpO1xuXHR9XG5cblx0c2V0U29ydFN0YXR1cyhzdGF0dXM6IFNvcnRTdGF0dXMpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRTdGF0dXMgPSBzdGF0dXM7XG5cdH1cblxuXHRzZXRWaWV3KHZpZXc6IFZpZXdFbnRpdHkpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXHR9XG5cblx0Z2V0VmlldygpOiBWaWV3RW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3O1xuXHR9XG5cbn1cbiJdfQ==