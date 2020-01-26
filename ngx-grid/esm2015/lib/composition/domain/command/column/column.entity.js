/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from '../../cell-view';
import { SortStatus } from './sort/sort-status';
import { ViewEntity } from './view.entity';
export class ColumnEntity {
    /**
     * @param {?} columnId
     * @param {?} columnField
     * @param {?} columnConfig
     * @param {?=} header
     * @param {?=} view
     * @param {?=} width
     */
    constructor(columnId, columnField, columnConfig, header, view, width) {
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
    getColumnConfig() {
        return this.columnConfig;
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
    isEnabled() {
        return this.enabled;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setEnabled(enabled) {
        this.enabled = enabled;
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
     * @param {?} view
     * @return {?}
     */
    setView(view) {
        this.view = view;
    }
    /**
     * @return {?}
     */
    getView() {
        return this.view;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsTUFBTSxPQUFPLFlBQVk7Ozs7Ozs7OztJQXFCeEIsWUFBWSxRQUFrQixFQUMzQixXQUF3QixFQUN4QixZQUEwQixFQUMxQixNQUFnQyxFQUNoQyxJQUFpQixFQUNqQixLQUFjO1FBbEJqQixlQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQU9yQixZQUFPLEdBQVksSUFBSSxDQUFDO1FBSXhCLFNBQUksR0FBZSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFReEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFFakMsSUFBSSxNQUFNLEVBQUU7WUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUNyQjtRQUVELElBQUksSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDakI7UUFFRCxJQUFJLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ25CO0lBRUYsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFrQjtRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxJQUFnQjtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0NBRUQ7OztJQTNGQSxnQ0FBbUI7O0lBRW5CLG1DQUF5Qjs7SUFFekIsOEJBQWlDOztJQUVqQyxrQ0FBNkI7O0lBRzdCLDZCQUFlOztJQUVmLGdDQUFtQjs7Ozs7SUFFbkIsK0JBQWdDOzs7OztJQUVoQyxvQ0FBbUM7Ozs7O0lBRW5DLDRCQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIEhlYWRlclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBTb3J0U3RhdHVzIH0gZnJvbSAnLi9zb3J0L3NvcnQtc3RhdHVzJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuXG5leHBvcnQgY2xhc3MgQ29sdW1uRW50aXR5IHtcblxuXHRjb2x1bW5JZDogQ29sdW1uSWQ7XG5cblx0Y29sdW1uRmllbGQ6IENvbHVtbkZpZWxkO1xuXG5cdGhlYWRlcj86IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlO1xuXG5cdHNvcnRTdGF0dXMgPSBTb3J0U3RhdHVzLk5PTkU7XG5cblx0Ly8gUkVNT1ZFXG5cdHdpZHRoPzogbnVtYmVyO1xuXG5cdHNvcnRhYmxlPzogYm9vbGVhbjtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWc7XG5cblx0cHJpdmF0ZSB2aWV3OiBWaWV3RW50aXR5ID0gbmV3IFZpZXdFbnRpdHkoQ2VsbFZpZXcuVEVYVCk7XG5cblx0Y29uc3RydWN0b3IoY29sdW1uSWQ6IENvbHVtbklkLFxuXHRcdFx0XHRjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQsXG5cdFx0XHRcdGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnLFxuXHRcdFx0XHRoZWFkZXI/OiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSxcblx0XHRcdFx0dmlldz86IFZpZXdFbnRpdHksXG5cdFx0XHRcdHdpZHRoPzogbnVtYmVyKSB7XG5cdFx0dGhpcy5jb2x1bW5JZCA9IGNvbHVtbklkO1xuXHRcdHRoaXMuY29sdW1uRmllbGQgPSBjb2x1bW5GaWVsZDtcblx0XHR0aGlzLmNvbHVtbkNvbmZpZyA9IGNvbHVtbkNvbmZpZztcblxuXHRcdGlmIChoZWFkZXIpIHtcblx0XHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHRcdH1cblxuXHRcdGlmICh2aWV3KSB7XG5cdFx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXHRcdH1cblxuXHRcdGlmICh3aWR0aCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdH1cblxuXHR9XG5cblx0Z2V0Q29sdW1uQ29uZmlnKCk6IENvbHVtbkNvbmZpZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uQ29uZmlnO1xuXHR9XG5cblx0Z2V0Q29sdW1uSWQoKTogQ29sdW1uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbklkO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0Z2V0RmllbGQoKTogQ29sdW1uRmllbGQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkO1xuXHR9XG5cblx0Z2V0SGVhZGVyKCk6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRle1xuXHRcdHJldHVybiB0aGlzLmhlYWRlcjtcblx0fVxuXG5cdGdldERhdGFUeXBlKCk6IERhdGFUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5GaWVsZC5nZXREYXRhVHlwZSgpO1xuXHR9XG5cblx0Z2V0Q2VsbFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiB0aGlzLnZpZXcuZ2V0Q2VsbFZpZXcoKTtcblx0fVxuXG5cdGdldFRlbXBsYXRlRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LmdldFRlbXBsYXRlRnVuY3Rpb24oKTtcblx0fVxuXG5cdHNldFNvcnRTdGF0dXMoc3RhdHVzOiBTb3J0U3RhdHVzKTogdm9pZCB7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gc3RhdHVzO1xuXHR9XG5cblx0c2V0Vmlldyh2aWV3OiBWaWV3RW50aXR5KTogdm9pZCB7XG5cdFx0dGhpcy52aWV3ID0gdmlldztcblx0fVxuXG5cdGdldFZpZXcoKTogVmlld0VudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMudmlldztcblx0fVxuXG59XG4iXX0=