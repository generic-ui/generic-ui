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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc1QztJQWdCQyw0QkFBWSxRQUFrQixFQUMzQixXQUF3QixFQUN4QixNQUErQixFQUMvQixJQUFnQixFQUNoQixNQUFvQjtRQWRmLGVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBTTdCLFNBQUksR0FBZSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFTeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELHNDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsMENBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxzQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsb0NBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELGdEQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCwwQ0FBYTs7OztJQUFiLFVBQWMsTUFBa0I7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxxQ0FBUTs7OztJQUFSLFVBQVMsS0FBYTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQUFDLEFBN0VELElBNkVDOzs7Ozs7O0lBM0VBLHNDQUEyQjs7Ozs7SUFFM0IseUNBQWlDOzs7OztJQUVqQyx3Q0FBcUM7Ozs7O0lBRXJDLG1DQUFzQjs7Ozs7SUFFdEIsb0NBQXdDOzs7OztJQUV4QyxrQ0FBeUQ7Ozs7O0lBRXpELG9DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRTdGF0dXMgfSBmcm9tICcuLi9zb3J0L3NvcnQtc3RhdHVzJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi92aWV3LmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNvbHVtbkVudGl0eSB7XG5cblx0cHJpdmF0ZSBjb2x1bW5JZDogQ29sdW1uSWQ7XG5cblx0cHJpdmF0ZSBjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0cHJpdmF0ZSBzb3J0U3RhdHVzID0gU29ydFN0YXR1cy5OT05FO1xuXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0cHJpdmF0ZSB2aWV3OiBWaWV3RW50aXR5ID0gbmV3IFZpZXdFbnRpdHkoQ2VsbFZpZXcuVEVYVCk7XG5cblx0cHJpdmF0ZSBjb25maWc6IENvbHVtbkNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0aGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSxcblx0XHRcdFx0dmlldzogVmlld0VudGl0eSxcblx0XHRcdFx0Y29uZmlnOiBDb2x1bW5Db25maWcpIHtcblx0XHR0aGlzLmNvbHVtbklkID0gY29sdW1uSWQ7XG5cdFx0dGhpcy5jb2x1bW5GaWVsZCA9IGNvbHVtbkZpZWxkO1xuXG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0dGhpcy52aWV3ID0gdmlldztcblxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHR9XG5cblx0Z2V0Q29uZmlnKCk6IENvbHVtbkNvbmZpZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnO1xuXHR9XG5cblx0Z2V0U29ydFN0YXR1cygpOiBTb3J0U3RhdHVzIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzO1xuXHR9XG5cblx0Z2V0RmllbGQoKTogQ29sdW1uRmllbGQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldENvbHVtbklkKCk6IENvbHVtbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5JZDtcblx0fVxuXG5cdGdldEhlYWRlcigpOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkLmdldERhdGFUeXBlKCk7XG5cdH1cblxuXHRnZXRWaWV3KCk6IFZpZXdFbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLnZpZXc7XG5cdH1cblxuXHRnZXRDZWxsVmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRDZWxsVmlldygpO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZpZXcuZ2V0VGVtcGxhdGVGdW5jdGlvbigpO1xuXHR9XG5cblx0c2V0U29ydFN0YXR1cyhzdGF0dXM6IFNvcnRTdGF0dXMpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRTdGF0dXMgPSBzdGF0dXM7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHR9XG59XG4iXX0=