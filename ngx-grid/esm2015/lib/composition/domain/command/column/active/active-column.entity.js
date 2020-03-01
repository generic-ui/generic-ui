/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortOrder } from '../sort/sort-order';
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
    getConfig() {
        return this.config || {};
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
    getView() {
        return this.view;
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
     * @return {?}
     */
    getSortingEnabled() {
        /** @type {?} */
        const config = this.getConfig();
        if (config.sorting !== undefined && config.sorting !== null) {
            if (config.sorting.enabled === undefined || config.sorting.enabled === null) {
                return true;
            }
            return config.sorting.enabled;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc1QyxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7OztJQWdCOUIsWUFBWSxRQUFrQixFQUMzQixXQUF3QixFQUN4QixNQUErQixFQUMvQixJQUFnQixFQUNoQixNQUFvQjtRQWRmLGVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBTTVCLFNBQUksR0FBZSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFTeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELGlCQUFpQjs7Y0FDVixNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUUvQixJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBRTVELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDNUUsT0FBTyxJQUFJLENBQUM7YUFDWjtZQUNELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDOUI7SUFDRixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFpQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Q0FDRDs7Ozs7O0lBdkZBLHNDQUEyQjs7Ozs7SUFFM0IseUNBQWlDOzs7OztJQUVqQyx3Q0FBb0M7Ozs7O0lBRXBDLG1DQUFzQjs7Ozs7SUFFdEIsb0NBQXdDOzs7OztJQUV4QyxrQ0FBeUQ7Ozs7O0lBRXpELG9DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIEhlYWRlclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uLy4uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi4vdmlldy5lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVDb2x1bW5FbnRpdHkge1xuXG5cdHByaXZhdGUgY29sdW1uSWQ6IENvbHVtbklkO1xuXG5cdHByaXZhdGUgY29sdW1uRmllbGQ6IENvbHVtbkZpZWxkO1xuXG5cdHByaXZhdGUgc29ydFN0YXR1cyA9IFNvcnRPcmRlci5OT05FO1xuXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0cHJpdmF0ZSB2aWV3OiBWaWV3RW50aXR5ID0gbmV3IFZpZXdFbnRpdHkoQ2VsbFZpZXcuVEVYVCk7XG5cblx0cHJpdmF0ZSBjb25maWc6IENvbHVtbkNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0aGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSxcblx0XHRcdFx0dmlldzogVmlld0VudGl0eSxcblx0XHRcdFx0Y29uZmlnOiBDb2x1bW5Db25maWcpIHtcblx0XHR0aGlzLmNvbHVtbklkID0gY29sdW1uSWQ7XG5cdFx0dGhpcy5jb2x1bW5GaWVsZCA9IGNvbHVtbkZpZWxkO1xuXG5cdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0dGhpcy52aWV3ID0gdmlldztcblxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHR9XG5cblx0Z2V0Q29uZmlnKCk6IENvbHVtbkNvbmZpZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnIHx8IHt9O1xuXHR9XG5cblx0Z2V0U29ydFN0YXR1cygpOiBTb3J0T3JkZXIge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXM7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBDb2x1bW5GaWVsZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRmllbGQ7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0Q29sdW1uSWQoKTogQ29sdW1uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbklkO1xuXHR9XG5cblx0Z2V0SGVhZGVyKCk6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXI7XG5cdH1cblxuXHRnZXREYXRhVHlwZSgpOiBEYXRhVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRmllbGQuZ2V0RGF0YVR5cGUoKTtcblx0fVxuXG5cdGdldFZpZXcoKTogVmlld0VudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMudmlldztcblx0fVxuXG5cdGdldENlbGxWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LmdldENlbGxWaWV3KCk7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCk7XG5cdH1cblxuXHRnZXRTb3J0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRjb25zdCBjb25maWcgPSB0aGlzLmdldENvbmZpZygpO1xuXG5cdFx0aWYgKGNvbmZpZy5zb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNvcnRpbmcgIT09IG51bGwpIHtcblxuXHRcdFx0aWYgKGNvbmZpZy5zb3J0aW5nLmVuYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc29ydGluZy5lbmFibGVkID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbmZpZy5zb3J0aW5nLmVuYWJsZWQ7XG5cdFx0fVxuXHR9XG5cblx0c2V0U29ydFN0YXR1cyhzdGF0dXM6IFNvcnRPcmRlcik6IHZvaWQge1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHN0YXR1cztcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdH1cbn1cbiJdfQ==