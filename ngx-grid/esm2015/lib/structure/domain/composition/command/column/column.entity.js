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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vY29sdW1uLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE1BQU0sT0FBTyxZQUFZOzs7Ozs7Ozs7SUFxQnhCLFlBQVksUUFBa0IsRUFDM0IsV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsTUFBZ0MsRUFDaEMsSUFBaUIsRUFDakIsS0FBYztRQWxCakIsZUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFPckIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUl4QixTQUFJLEdBQWUsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBUXhELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBRWpDLElBQUksTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDckI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjtJQUVGLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBa0I7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBZ0I7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQUVEOzs7SUEzRkEsZ0NBQW1COztJQUVuQixtQ0FBeUI7O0lBRXpCLDhCQUFpQzs7SUFFakMsa0NBQTZCOztJQUc3Qiw2QkFBZTs7SUFFZixnQ0FBbUI7Ozs7O0lBRW5CLCtCQUFnQzs7Ozs7SUFFaEMsb0NBQW1DOzs7OztJQUVuQyw0QkFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4vc29ydC9zb3J0LXN0YXR1cyc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi92aWV3LmVudGl0eSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5FbnRpdHkge1xuXG5cdGNvbHVtbklkOiBDb2x1bW5JZDtcblxuXHRjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQ7XG5cblx0aGVhZGVyPzogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGU7XG5cblx0c29ydFN0YXR1cyA9IFNvcnRTdGF0dXMuTk9ORTtcblxuXHQvLyBSRU1PVkVcblx0d2lkdGg/OiBudW1iZXI7XG5cblx0c29ydGFibGU/OiBib29sZWFuO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZztcblxuXHRwcml2YXRlIHZpZXc6IFZpZXdFbnRpdHkgPSBuZXcgVmlld0VudGl0eShDZWxsVmlldy5URVhUKTtcblxuXHRjb25zdHJ1Y3Rvcihjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0Y29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcsXG5cdFx0XHRcdGhlYWRlcj86IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHR2aWV3PzogVmlld0VudGl0eSxcblx0XHRcdFx0d2lkdGg/OiBudW1iZXIpIHtcblx0XHR0aGlzLmNvbHVtbklkID0gY29sdW1uSWQ7XG5cdFx0dGhpcy5jb2x1bW5GaWVsZCA9IGNvbHVtbkZpZWxkO1xuXHRcdHRoaXMuY29sdW1uQ29uZmlnID0gY29sdW1uQ29uZmlnO1xuXG5cdFx0aWYgKGhlYWRlcikge1xuXHRcdFx0dGhpcy5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0fVxuXG5cdFx0aWYgKHZpZXcpIHtcblx0XHRcdHRoaXMudmlldyA9IHZpZXc7XG5cdFx0fVxuXG5cdFx0aWYgKHdpZHRoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdH1cblxuXHRnZXRDb2x1bW5Db25maWcoKTogQ29sdW1uQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5Db25maWc7XG5cdH1cblxuXHRnZXRDb2x1bW5JZCgpOiBDb2x1bW5JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uSWQ7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBDb2x1bW5GaWVsZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRmllbGQ7XG5cdH1cblxuXHRnZXRIZWFkZXIoKTogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGV7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkLmdldERhdGFUeXBlKCk7XG5cdH1cblxuXHRnZXRDZWxsVmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRDZWxsVmlldygpO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZpZXcuZ2V0VGVtcGxhdGVGdW5jdGlvbigpO1xuXHR9XG5cblx0c2V0U29ydFN0YXR1cyhzdGF0dXM6IFNvcnRTdGF0dXMpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRTdGF0dXMgPSBzdGF0dXM7XG5cdH1cblxuXHRzZXRWaWV3KHZpZXc6IFZpZXdFbnRpdHkpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXHR9XG5cblx0Z2V0VmlldygpOiBWaWV3RW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3O1xuXHR9XG5cbn1cbiJdfQ==