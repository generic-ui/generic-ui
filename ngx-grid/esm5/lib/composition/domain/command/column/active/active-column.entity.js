/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortOrder } from '../sort/sort-order';
import { CellView } from '../../../cell-view';
import { ViewEntity } from '../view.entity';
var ActiveColumnEntity = /** @class */ (function () {
    function ActiveColumnEntity(columnId, columnField, header, view, config) {
        this.sortStatus = SortOrder.NONE;
        this.view = new ViewEntity(CellView.TEXT);
        this.columnId = columnId;
        this.columnField = columnField;
        this.header = header;
        this.view = view;
        this.config = config;
    }
    /**
     * @return {?}
     */
    ActiveColumnEntity.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.config || {};
    };
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
     * @return {?}
     */
    ActiveColumnEntity.prototype.getField = /**
     * @return {?}
     */
    function () {
        return this.columnField;
    };
    /**
     * @return {?}
     */
    ActiveColumnEntity.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    ActiveColumnEntity.prototype.getColumnId = /**
     * @return {?}
     */
    function () {
        return this.columnId;
    };
    /**
     * @return {?}
     */
    ActiveColumnEntity.prototype.getHeader = /**
     * @return {?}
     */
    function () {
        return this.header;
    };
    /**
     * @return {?}
     */
    ActiveColumnEntity.prototype.getDataType = /**
     * @return {?}
     */
    function () {
        return this.columnField.getDataType();
    };
    /**
     * @return {?}
     */
    ActiveColumnEntity.prototype.getView = /**
     * @return {?}
     */
    function () {
        return this.view;
    };
    /**
     * @return {?}
     */
    ActiveColumnEntity.prototype.getCellView = /**
     * @return {?}
     */
    function () {
        return this.view.getCellView();
    };
    /**
     * @return {?}
     */
    ActiveColumnEntity.prototype.getTemplateFunction = /**
     * @return {?}
     */
    function () {
        return this.view.getTemplateFunction();
    };
    /**
     * @return {?}
     */
    ActiveColumnEntity.prototype.getSortingEnabled = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = this.getConfig();
        if (config.sorting !== undefined && config.sorting !== null) {
            if (config.sorting.enabled === undefined || config.sorting.enabled === null) {
                return true;
            }
            return config.sorting.enabled;
        }
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
    /**
     * @param {?} width
     * @return {?}
     */
    ActiveColumnEntity.prototype.setWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.width = width;
    };
    return ActiveColumnEntity;
}());
export { ActiveColumnEntity };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.columnField;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.width;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.header;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.view;
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc1QztJQWdCQyw0QkFBWSxRQUFrQixFQUMzQixXQUF3QixFQUN4QixNQUErQixFQUMvQixJQUFnQixFQUNoQixNQUFvQjtRQWRmLGVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBTTVCLFNBQUksR0FBZSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFTeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELHNDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELDBDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsc0NBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELG9DQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxnREFBbUI7OztJQUFuQjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCw4Q0FBaUI7OztJQUFqQjs7WUFDTyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUUvQixJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBRTVELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDNUUsT0FBTyxJQUFJLENBQUM7YUFDWjtZQUNELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDOUI7SUFDRixDQUFDOzs7OztJQUVELDBDQUFhOzs7O0lBQWIsVUFBYyxNQUFpQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELHFDQUFROzs7O0lBQVIsVUFBUyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRix5QkFBQztBQUFELENBQUMsQUF6RkQsSUF5RkM7Ozs7Ozs7SUF2RkEsc0NBQTJCOzs7OztJQUUzQix5Q0FBaUM7Ozs7O0lBRWpDLHdDQUFvQzs7Ozs7SUFFcEMsbUNBQXNCOzs7OztJQUV0QixvQ0FBd0M7Ozs7O0lBRXhDLGtDQUF5RDs7Ozs7SUFFekQsb0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi92aWV3LmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNvbHVtbkVudGl0eSB7XG5cblx0cHJpdmF0ZSBjb2x1bW5JZDogQ29sdW1uSWQ7XG5cblx0cHJpdmF0ZSBjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0cHJpdmF0ZSBzb3J0U3RhdHVzID0gU29ydE9yZGVyLk5PTkU7XG5cblx0cHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuXG5cdHByaXZhdGUgaGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZTtcblxuXHRwcml2YXRlIHZpZXc6IFZpZXdFbnRpdHkgPSBuZXcgVmlld0VudGl0eShDZWxsVmlldy5URVhUKTtcblxuXHRwcml2YXRlIGNvbmZpZzogQ29sdW1uQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKGNvbHVtbklkOiBDb2x1bW5JZCxcblx0XHRcdFx0Y29sdW1uRmllbGQ6IENvbHVtbkZpZWxkLFxuXHRcdFx0XHRoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHR2aWV3OiBWaWV3RW50aXR5LFxuXHRcdFx0XHRjb25maWc6IENvbHVtbkNvbmZpZykge1xuXHRcdHRoaXMuY29sdW1uSWQgPSBjb2x1bW5JZDtcblx0XHR0aGlzLmNvbHVtbkZpZWxkID0gY29sdW1uRmllbGQ7XG5cblx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdH1cblxuXHRnZXRDb25maWcoKTogQ29sdW1uQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcgfHwge307XG5cdH1cblxuXHRnZXRTb3J0U3RhdHVzKCk6IFNvcnRPcmRlciB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cztcblx0fVxuXG5cdGdldEZpZWxkKCk6IENvbHVtbkZpZWxkIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5GaWVsZDtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRDb2x1bW5JZCgpOiBDb2x1bW5JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uSWQ7XG5cdH1cblxuXHRnZXRIZWFkZXIoKTogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlcjtcblx0fVxuXG5cdGdldERhdGFUeXBlKCk6IERhdGFUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5GaWVsZC5nZXREYXRhVHlwZSgpO1xuXHR9XG5cblx0Z2V0VmlldygpOiBWaWV3RW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3O1xuXHR9XG5cblx0Z2V0Q2VsbFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiB0aGlzLnZpZXcuZ2V0Q2VsbFZpZXcoKTtcblx0fVxuXG5cdGdldFRlbXBsYXRlRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LmdldFRlbXBsYXRlRnVuY3Rpb24oKTtcblx0fVxuXG5cdGdldFNvcnRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG5cblx0XHRpZiAoY29uZmlnLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc29ydGluZyAhPT0gbnVsbCkge1xuXG5cdFx0XHRpZiAoY29uZmlnLnNvcnRpbmcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zb3J0aW5nLmVuYWJsZWQgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29uZmlnLnNvcnRpbmcuZW5hYmxlZDtcblx0XHR9XG5cdH1cblxuXHRzZXRTb3J0U3RhdHVzKHN0YXR1czogU29ydE9yZGVyKTogdm9pZCB7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gc3RhdHVzO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0fVxufVxuIl19