/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from '../../cell-view';
import { SortOrder } from './sort/sort-order';
import { ViewEntity } from './view.entity';
var ColumnEntity = /** @class */ (function () {
    function ColumnEntity(columnId, columnField, columnConfig, header, view, width) {
        this.sortOrder = SortOrder.NONE;
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
        this.sortOrder = status;
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
    /**
     * @return {?}
     */
    ColumnEntity.prototype.getSortingEnabled = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = this.columnConfig;
        if (config.sorting !== undefined && config.sorting !== null) {
            if (config.sorting.enabled === undefined || config.sorting.enabled === null) {
                return true;
            }
            return config.sorting.enabled;
        }
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
    ColumnEntity.prototype.sortOrder;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0M7SUFxQkMsc0JBQVksUUFBa0IsRUFDM0IsV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsTUFBZ0MsRUFDaEMsSUFBaUIsRUFDakIsS0FBYztRQWxCakIsY0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFPbkIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUl4QixTQUFJLEdBQWUsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBUXhELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBRWpDLElBQUksTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDckI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjtJQUVGLENBQUM7Ozs7SUFFRCxzQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGtDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsZ0NBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsaUNBQVU7Ozs7SUFBVixVQUFXLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCwrQkFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGdDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsa0NBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxrQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDBDQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxvQ0FBYTs7OztJQUFiLFVBQWMsTUFBaUI7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCw4QkFBTzs7OztJQUFQLFVBQVEsSUFBZ0I7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELDhCQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsd0NBQWlCOzs7SUFBakI7O1lBQ08sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZO1FBRWhDLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFFNUQsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUM1RSxPQUFPLElBQUksQ0FBQzthQUNaO1lBQ0QsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUM5QjtJQUNGLENBQUM7SUFFRixtQkFBQztBQUFELENBQUMsQUF6R0QsSUF5R0M7Ozs7SUF2R0EsZ0NBQW1COztJQUVuQixtQ0FBeUI7O0lBRXpCLDhCQUFpQzs7SUFFakMsaUNBQTJCOztJQUczQiw2QkFBZTs7SUFFZixnQ0FBbUI7Ozs7O0lBRW5CLCtCQUFnQzs7Ozs7SUFFaEMsb0NBQW1DOzs7OztJQUVuQyw0QkFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5FbnRpdHkge1xuXG5cdGNvbHVtbklkOiBDb2x1bW5JZDtcblxuXHRjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0aGVhZGVyPzogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0c29ydE9yZGVyID0gU29ydE9yZGVyLk5PTkU7XG5cblx0Ly8gUkVNT1ZFXG5cdHdpZHRoPzogbnVtYmVyO1xuXG5cdHNvcnRhYmxlPzogYm9vbGVhbjtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWc7XG5cblx0cHJpdmF0ZSB2aWV3OiBWaWV3RW50aXR5ID0gbmV3IFZpZXdFbnRpdHkoQ2VsbFZpZXcuVEVYVCk7XG5cblx0Y29uc3RydWN0b3IoY29sdW1uSWQ6IENvbHVtbklkLFxuXHRcdFx0XHRjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQsXG5cdFx0XHRcdGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnLFxuXHRcdFx0XHRoZWFkZXI/OiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSxcblx0XHRcdFx0dmlldz86IFZpZXdFbnRpdHksXG5cdFx0XHRcdHdpZHRoPzogbnVtYmVyKSB7XG5cdFx0dGhpcy5jb2x1bW5JZCA9IGNvbHVtbklkO1xuXHRcdHRoaXMuY29sdW1uRmllbGQgPSBjb2x1bW5GaWVsZDtcblx0XHR0aGlzLmNvbHVtbkNvbmZpZyA9IGNvbHVtbkNvbmZpZztcblxuXHRcdGlmIChoZWFkZXIpIHtcblx0XHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHRcdH1cblxuXHRcdGlmICh2aWV3KSB7XG5cdFx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXHRcdH1cblxuXHRcdGlmICh3aWR0aCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdH1cblxuXHR9XG5cblx0Z2V0Q29sdW1uQ29uZmlnKCk6IENvbHVtbkNvbmZpZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uQ29uZmlnO1xuXHR9XG5cblx0Z2V0Q29sdW1uSWQoKTogQ29sdW1uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbklkO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0Z2V0RmllbGQoKTogQ29sdW1uRmllbGQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkO1xuXHR9XG5cblx0Z2V0SGVhZGVyKCk6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXI7XG5cdH1cblxuXHRnZXREYXRhVHlwZSgpOiBEYXRhVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRmllbGQuZ2V0RGF0YVR5cGUoKTtcblx0fVxuXG5cdGdldENlbGxWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LmdldENlbGxWaWV3KCk7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCk7XG5cdH1cblxuXHRzZXRTb3J0U3RhdHVzKHN0YXR1czogU29ydE9yZGVyKTogdm9pZCB7XG5cdFx0dGhpcy5zb3J0T3JkZXIgPSBzdGF0dXM7XG5cdH1cblxuXHRzZXRWaWV3KHZpZXc6IFZpZXdFbnRpdHkpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXHR9XG5cblx0Z2V0VmlldygpOiBWaWV3RW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3O1xuXHR9XG5cblx0Z2V0U29ydGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgY29uZmlnID0gdGhpcy5jb2x1bW5Db25maWc7XG5cblx0XHRpZiAoY29uZmlnLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc29ydGluZyAhPT0gbnVsbCkge1xuXG5cdFx0XHRpZiAoY29uZmlnLnNvcnRpbmcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zb3J0aW5nLmVuYWJsZWQgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29uZmlnLnNvcnRpbmcuZW5hYmxlZDtcblx0XHR9XG5cdH1cblxufVxuIl19