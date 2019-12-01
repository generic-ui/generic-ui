/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from '../../cell-view';
import { SortStatus } from '../sort/sort-status';
import { ViewEntity } from './view.entity';
export class ColumnEntity {
    /**
     * @param {?} columnField
     * @param {?=} header
     * @param {?=} view
     * @param {?=} width
     */
    constructor(columnField, header, view, width) {
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
    ColumnEntity.prototype.view;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vY29sdW1uLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE1BQU0sT0FBTyxZQUFZOzs7Ozs7O0lBZ0J4QixZQUFZLFdBQXdCLEVBQ2pDLE1BQWdDLEVBQ2hDLElBQWlCLEVBQ2pCLEtBQWM7UUFYakIsZUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFNckIsU0FBSSxHQUFlLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQU14RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUUvQixJQUFJLE1BQU0sRUFBRTtZQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUVELElBQUksS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbkI7SUFFRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQWtCO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQWdCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Q0FFRDs7O0lBOURBLGdDQUFtQjs7SUFFbkIsbUNBQXlCOztJQUV6Qiw4QkFBaUM7O0lBRWpDLGtDQUE2Qjs7SUFFN0IsNkJBQWU7O0lBRWYsZ0NBQW1COzs7OztJQUVuQiw0QkFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFNvcnRTdGF0dXMgfSBmcm9tICcuLi9zb3J0L3NvcnQtc3RhdHVzJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5cblxuZXhwb3J0IGNsYXNzIENvbHVtbkVudGl0eSB7XG5cblx0Y29sdW1uSWQ6IENvbHVtbklkO1xuXG5cdGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZDtcblxuXHRoZWFkZXI/OiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZTtcblxuXHRzb3J0U3RhdHVzID0gU29ydFN0YXR1cy5OT05FO1xuXG5cdHdpZHRoPzogbnVtYmVyO1xuXG5cdHNvcnRhYmxlPzogYm9vbGVhbjtcblxuXHRwcml2YXRlIHZpZXc6IFZpZXdFbnRpdHkgPSBuZXcgVmlld0VudGl0eShDZWxsVmlldy5URVhUKTtcblxuXHRjb25zdHJ1Y3Rvcihjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQsXG5cdFx0XHRcdGhlYWRlcj86IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHR2aWV3PzogVmlld0VudGl0eSxcblx0XHRcdFx0d2lkdGg/OiBudW1iZXIpIHtcblx0XHR0aGlzLmNvbHVtbkZpZWxkID0gY29sdW1uRmllbGQ7XG5cblx0XHRpZiAoaGVhZGVyKSB7XG5cdFx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0XHR9XG5cblx0XHRpZiAodmlldykge1xuXHRcdFx0dGhpcy52aWV3ID0gdmlldztcblx0XHR9XG5cblx0XHRpZiAod2lkdGgpIHtcblx0XHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR9XG5cblx0fVxuXG5cdGdldEZpZWxkKCk6IENvbHVtbkZpZWxkIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5GaWVsZDtcblx0fVxuXG5cdGdldEhlYWRlcigpOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZXtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXI7XG5cdH1cblxuXHRnZXREYXRhVHlwZSgpOiBEYXRhVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRmllbGQuZ2V0RGF0YVR5cGUoKTtcblx0fVxuXG5cdGdldENlbGxWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LmdldENlbGxWaWV3KCk7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCk7XG5cdH1cblxuXHRzZXRTb3J0U3RhdHVzKHN0YXR1czogU29ydFN0YXR1cyk6IHZvaWQge1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHN0YXR1cztcblx0fVxuXG5cdHNldFZpZXcodmlldzogVmlld0VudGl0eSk6IHZvaWQge1xuXHRcdHRoaXMudmlldyA9IHZpZXc7XG5cdH1cblxufVxuIl19