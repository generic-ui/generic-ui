/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortStatus } from '../sort/sort-status';
import { CellView } from '../../../cell-view';
import { ViewEntity } from '../view.entity';
var ActiveColumnEntity = /** @class */ (function () {
    function ActiveColumnEntity(columnId, columnField, header, view, config) {
        this.sortStatus = SortStatus.NONE;
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
        return this.config;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUM7SUFnQkMsNEJBQVksUUFBa0IsRUFDM0IsV0FBd0IsRUFDeEIsTUFBK0IsRUFDL0IsSUFBZ0IsRUFDaEIsTUFBb0I7UUFkZixlQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQU03QixTQUFJLEdBQWUsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBU3hELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBRS9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxzQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDBDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsc0NBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsZ0RBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELDBDQUFhOzs7O0lBQWIsVUFBYyxNQUFrQjtRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELHFDQUFROzs7O0lBQVIsVUFBUyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRix5QkFBQztBQUFELENBQUMsQUF6RUQsSUF5RUM7Ozs7Ozs7SUF2RUEsc0NBQTJCOzs7OztJQUUzQix5Q0FBaUM7Ozs7O0lBRWpDLHdDQUFxQzs7Ozs7SUFFckMsbUNBQXNCOzs7OztJQUV0QixvQ0FBd0M7Ozs7O0lBRXhDLGtDQUF5RDs7Ozs7SUFFekQsb0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uL3NvcnQvc29ydC1zdGF0dXMnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi92aWV3LmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNvbHVtbkVudGl0eSB7XG5cblx0cHJpdmF0ZSBjb2x1bW5JZDogQ29sdW1uSWQ7XG5cblx0cHJpdmF0ZSBjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0cHJpdmF0ZSBzb3J0U3RhdHVzID0gU29ydFN0YXR1cy5OT05FO1xuXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0cHJpdmF0ZSB2aWV3OiBWaWV3RW50aXR5ID0gbmV3IFZpZXdFbnRpdHkoQ2VsbFZpZXcuVEVYVCk7XG5cblx0cHJpdmF0ZSBjb25maWc6IENvbHVtbkNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0aGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSxcblx0XHRcdFx0dmlldzogVmlld0VudGl0eSxcblx0XHRcdFx0Y29uZmlnOiBDb2x1bW5Db25maWcpIHtcblx0XHR0aGlzLmNvbHVtbklkID0gY29sdW1uSWQ7XG5cdFx0dGhpcy5jb2x1bW5GaWVsZCA9IGNvbHVtbkZpZWxkO1xuXG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0dGhpcy52aWV3ID0gdmlldztcblxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHR9XG5cblx0Z2V0Q29uZmlnKCk6IENvbHVtbkNvbmZpZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnO1xuXHR9XG5cblx0Z2V0U29ydFN0YXR1cygpOiBTb3J0U3RhdHVzIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzO1xuXHR9XG5cblx0Z2V0RmllbGQoKTogQ29sdW1uRmllbGQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldENvbHVtbklkKCk6IENvbHVtbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5JZDtcblx0fVxuXG5cdGdldEhlYWRlcigpOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZXtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXI7XG5cdH1cblxuXHRnZXREYXRhVHlwZSgpOiBEYXRhVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRmllbGQuZ2V0RGF0YVR5cGUoKTtcblx0fVxuXG5cdGdldENlbGxWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LmdldENlbGxWaWV3KCk7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCk7XG5cdH1cblxuXHRzZXRTb3J0U3RhdHVzKHN0YXR1czogU29ydFN0YXR1cyk6IHZvaWQge1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHN0YXR1cztcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdH1cbn1cbiJdfQ==