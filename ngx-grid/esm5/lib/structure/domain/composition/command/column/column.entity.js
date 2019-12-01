/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from '../../cell-view';
import { SortStatus } from '../sort/sort-status';
import { ViewEntity } from './view.entity';
var ColumnEntity = /** @class */ (function () {
    function ColumnEntity(columnField, header, view, width) {
        this.sortStatus = SortStatus.NONE;
        this.view = new ViewEntity(CellView.TEXT);
        this.columnField = columnField;
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
    ColumnEntity.prototype.view;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vY29sdW1uLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDO0lBZ0JDLHNCQUFZLFdBQXdCLEVBQ2pDLE1BQWdDLEVBQ2hDLElBQWlCLEVBQ2pCLEtBQWM7UUFYakIsZUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFNckIsU0FBSSxHQUFlLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQU14RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUUvQixJQUFJLE1BQU0sRUFBRTtZQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUVELElBQUksS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbkI7SUFFRixDQUFDOzs7O0lBRUQsK0JBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxnQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELGtDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsa0NBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCwwQ0FBbUI7OztJQUFuQjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsb0NBQWE7Ozs7SUFBYixVQUFjLE1BQWtCO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsOEJBQU87Ozs7SUFBUCxVQUFRLElBQWdCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRixtQkFBQztBQUFELENBQUMsQUFoRUQsSUFnRUM7Ozs7SUE5REEsZ0NBQW1COztJQUVuQixtQ0FBeUI7O0lBRXpCLDhCQUFpQzs7SUFFakMsa0NBQTZCOztJQUU3Qiw2QkFBZTs7SUFFZixnQ0FBbUI7Ozs7O0lBRW5CLDRCQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uL3NvcnQvc29ydC1zdGF0dXMnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuXG5leHBvcnQgY2xhc3MgQ29sdW1uRW50aXR5IHtcblxuXHRjb2x1bW5JZDogQ29sdW1uSWQ7XG5cblx0Y29sdW1uRmllbGQ6IENvbHVtbkZpZWxkO1xuXG5cdGhlYWRlcj86IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlO1xuXG5cdHNvcnRTdGF0dXMgPSBTb3J0U3RhdHVzLk5PTkU7XG5cblx0d2lkdGg/OiBudW1iZXI7XG5cblx0c29ydGFibGU/OiBib29sZWFuO1xuXG5cdHByaXZhdGUgdmlldzogVmlld0VudGl0eSA9IG5ldyBWaWV3RW50aXR5KENlbGxWaWV3LlRFWFQpO1xuXG5cdGNvbnN0cnVjdG9yKGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0aGVhZGVyPzogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUsXG5cdFx0XHRcdHZpZXc/OiBWaWV3RW50aXR5LFxuXHRcdFx0XHR3aWR0aD86IG51bWJlcikge1xuXHRcdHRoaXMuY29sdW1uRmllbGQgPSBjb2x1bW5GaWVsZDtcblxuXHRcdGlmIChoZWFkZXIpIHtcblx0XHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuXHRcdH1cblxuXHRcdGlmICh2aWV3KSB7XG5cdFx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXHRcdH1cblxuXHRcdGlmICh3aWR0aCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdH1cblxuXHR9XG5cblx0Z2V0RmllbGQoKTogQ29sdW1uRmllbGQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkZpZWxkO1xuXHR9XG5cblx0Z2V0SGVhZGVyKCk6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRle1xuXHRcdHJldHVybiB0aGlzLmhlYWRlcjtcblx0fVxuXG5cdGdldERhdGFUeXBlKCk6IERhdGFUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5GaWVsZC5nZXREYXRhVHlwZSgpO1xuXHR9XG5cblx0Z2V0Q2VsbFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiB0aGlzLnZpZXcuZ2V0Q2VsbFZpZXcoKTtcblx0fVxuXG5cdGdldFRlbXBsYXRlRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LmdldFRlbXBsYXRlRnVuY3Rpb24oKTtcblx0fVxuXG5cdHNldFNvcnRTdGF0dXMoc3RhdHVzOiBTb3J0U3RhdHVzKTogdm9pZCB7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gc3RhdHVzO1xuXHR9XG5cblx0c2V0Vmlldyh2aWV3OiBWaWV3RW50aXR5KTogdm9pZCB7XG5cdFx0dGhpcy52aWV3ID0gdmlldztcblx0fVxuXG59XG4iXX0=