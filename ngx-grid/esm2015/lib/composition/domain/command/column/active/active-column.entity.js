/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortStatus } from '../sort/sort-status';
import { CellView } from '../../../cell-view';
import { ViewEntity } from '../view.entity';
export class ActiveColumnEntity {
    /**
     * @param {?} columnId
     * @param {?} columnField
     * @param {?} header
     * @param {?} view
     * @param {?} config
     */
    constructor(columnId, columnField, header, view, config) {
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
    getConfig() {
        return this.config;
    }
    /**
     * @return {?}
     */
    getSortStatus() {
        return this.sortStatus;
    }
    /**
     * @return {?}
     */
    getField() {
        return this.columnField;
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getColumnId() {
        return this.columnId;
    }
    /**
     * @return {?}
     */
    getHeader() {
        return this.header;
    }
    /**
     * @return {?}
     */
    getDataType() {
        return this.columnField.getDataType();
    }
    /**
     * @return {?}
     */
    getCellView() {
        return this.view.getCellView();
    }
    /**
     * @return {?}
     */
    getTemplateFunction() {
        return this.view.getTemplateFunction();
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setSortStatus(status) {
        this.sortStatus = status;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.width = width;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc1QyxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7OztJQWdCOUIsWUFBWSxRQUFrQixFQUMzQixXQUF3QixFQUN4QixNQUErQixFQUMvQixJQUFnQixFQUNoQixNQUFvQjtRQWRmLGVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBTTdCLFNBQUksR0FBZSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFTeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFrQjtRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Q0FDRDs7Ozs7O0lBdkVBLHNDQUEyQjs7Ozs7SUFFM0IseUNBQWlDOzs7OztJQUVqQyx3Q0FBcUM7Ozs7O0lBRXJDLG1DQUFzQjs7Ozs7SUFFdEIsb0NBQXdDOzs7OztJQUV4QyxrQ0FBeUQ7Ozs7O0lBRXpELG9DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRTdGF0dXMgfSBmcm9tICcuLi9zb3J0L3NvcnQtc3RhdHVzJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi92aWV3LmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNvbHVtbkVudGl0eSB7XG5cblx0cHJpdmF0ZSBjb2x1bW5JZDogQ29sdW1uSWQ7XG5cblx0cHJpdmF0ZSBjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0cHJpdmF0ZSBzb3J0U3RhdHVzID0gU29ydFN0YXR1cy5OT05FO1xuXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0cHJpdmF0ZSB2aWV3OiBWaWV3RW50aXR5ID0gbmV3IFZpZXdFbnRpdHkoQ2VsbFZpZXcuVEVYVCk7XG5cblx0cHJpdmF0ZSBjb25maWc6IENvbHVtbkNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0aGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSxcblx0XHRcdFx0dmlldzogVmlld0VudGl0eSxcblx0XHRcdFx0Y29uZmlnOiBDb2x1bW5Db25maWcpIHtcblx0XHR0aGlzLmNvbHVtbklkID0gY29sdW1uSWQ7XG5cdFx0dGhpcy5jb2x1bW5GaWVsZCA9IGNvbHVtbkZpZWxkO1xuXG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0dGhpcy52aWV3ID0gdmlldztcblxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHR9XG5cblx0Z2V0Q29uZmlnKCk6IENvbHVtbkNvbmZpZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnO1xuXHR9XG5cblx0Z2V0U29ydFN0YXR1cygpOiBTb3J0U3RhdHVzIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzO1xuXHR9XG5cblx0Z2V0RmllbGQoKTogQ29sdW1uRmllbGQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldENvbHVtbklkKCk6IENvbHVtbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5JZDtcblx0fVxuXG5cdGdldEhlYWRlcigpOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkLmdldERhdGFUeXBlKCk7XG5cdH1cblxuXHRnZXRDZWxsVmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRDZWxsVmlldygpO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZpZXcuZ2V0VGVtcGxhdGVGdW5jdGlvbigpO1xuXHR9XG5cblx0c2V0U29ydFN0YXR1cyhzdGF0dXM6IFNvcnRTdGF0dXMpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRTdGF0dXMgPSBzdGF0dXM7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHR9XG59XG4iXX0=