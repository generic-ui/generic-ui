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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUMsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFnQjlCLFlBQVksUUFBa0IsRUFDM0IsV0FBd0IsRUFDeEIsTUFBK0IsRUFDL0IsSUFBZ0IsRUFDaEIsTUFBb0I7UUFkZixlQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQU03QixTQUFJLEdBQWUsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBU3hELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBRS9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBa0I7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0NBQ0Q7Ozs7OztJQXZFQSxzQ0FBMkI7Ozs7O0lBRTNCLHlDQUFpQzs7Ozs7SUFFakMsd0NBQXFDOzs7OztJQUVyQyxtQ0FBc0I7Ozs7O0lBRXRCLG9DQUF3Qzs7Ozs7SUFFeEMsa0NBQXlEOzs7OztJQUV6RCxvQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3J0U3RhdHVzIH0gZnJvbSAnLi4vc29ydC9zb3J0LXN0YXR1cyc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIEhlYWRlclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4uL3ZpZXcuZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgQWN0aXZlQ29sdW1uRW50aXR5IHtcblxuXHRwcml2YXRlIGNvbHVtbklkOiBDb2x1bW5JZDtcblxuXHRwcml2YXRlIGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZDtcblxuXHRwcml2YXRlIHNvcnRTdGF0dXMgPSBTb3J0U3RhdHVzLk5PTkU7XG5cblx0cHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuXG5cdHByaXZhdGUgaGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZTtcblxuXHRwcml2YXRlIHZpZXc6IFZpZXdFbnRpdHkgPSBuZXcgVmlld0VudGl0eShDZWxsVmlldy5URVhUKTtcblxuXHRwcml2YXRlIGNvbmZpZzogQ29sdW1uQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKGNvbHVtbklkOiBDb2x1bW5JZCxcblx0XHRcdFx0Y29sdW1uRmllbGQ6IENvbHVtbkZpZWxkLFxuXHRcdFx0XHRoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHR2aWV3OiBWaWV3RW50aXR5LFxuXHRcdFx0XHRjb25maWc6IENvbHVtbkNvbmZpZykge1xuXHRcdHRoaXMuY29sdW1uSWQgPSBjb2x1bW5JZDtcblx0XHR0aGlzLmNvbHVtbkZpZWxkID0gY29sdW1uRmllbGQ7XG5cblx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0XHR0aGlzLnZpZXcgPSB2aWV3O1xuXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdH1cblxuXHRnZXRDb25maWcoKTogQ29sdW1uQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWc7XG5cdH1cblxuXHRnZXRTb3J0U3RhdHVzKCk6IFNvcnRTdGF0dXMge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXM7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBDb2x1bW5GaWVsZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRmllbGQ7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0Q29sdW1uSWQoKTogQ29sdW1uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbklkO1xuXHR9XG5cblx0Z2V0SGVhZGVyKCk6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRle1xuXHRcdHJldHVybiB0aGlzLmhlYWRlcjtcblx0fVxuXG5cdGdldERhdGFUeXBlKCk6IERhdGFUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5GaWVsZC5nZXREYXRhVHlwZSgpO1xuXHR9XG5cblx0Z2V0Q2VsbFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiB0aGlzLnZpZXcuZ2V0Q2VsbFZpZXcoKTtcblx0fVxuXG5cdGdldFRlbXBsYXRlRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LmdldFRlbXBsYXRlRnVuY3Rpb24oKTtcblx0fVxuXG5cdHNldFNvcnRTdGF0dXMoc3RhdHVzOiBTb3J0U3RhdHVzKTogdm9pZCB7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gc3RhdHVzO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0fVxufVxuIl19