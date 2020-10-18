/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortOrder } from './sort/sort-order';
import { ViewEntity } from './view.entity';
import { AbstractColumnEntity } from './abstract-column.entity';
export class ColumnEntity extends AbstractColumnEntity {
    /**
     * @param {?} columnId
     * @param {?} columnField
     * @param {?} columnConfig
     * @param {?} enabled
     * @param {?} presentation
     * @param {?} header
     * @param {?} align
     * @param {?} view
     * @param {?} width
     */
    constructor(columnId, columnField, columnConfig, enabled, presentation, header, align, view, width) {
        super(columnId, columnField, columnConfig, presentation, header, align, view, width);
        this.sortStatus = SortOrder.NONE;
        this.enabled = true;
        this.enabled = enabled;
        if (view === undefined) {
            this.view = new ViewEntity(this.presentation.getDefaultView());
        }
        if (align === undefined) {
            this.align = this.presentation.getDefaultAlign(this.view);
        }
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
    getSortStatus() {
        return this.sortStatus;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setSortStatus(status) {
        this.sortStatus = status;
    }
}
if (false) {
    /** @type {?} */
    ColumnEntity.prototype.sortable;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2NvbHVtbi5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBSWhFLE1BQU0sT0FBTyxZQUFhLFNBQVEsb0JBQW9COzs7Ozs7Ozs7Ozs7SUFRckQsWUFBWSxRQUFrQixFQUMzQixXQUF3QixFQUN4QixZQUEwQixFQUMxQixPQUFnQixFQUNoQixZQUFnQyxFQUNoQyxNQUErQixFQUMvQixLQUFrQixFQUNsQixJQUFnQixFQUNoQixLQUFhO1FBQ2YsS0FBSyxDQUNKLFFBQVEsRUFDUixXQUFXLEVBQ1gsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLElBQUksRUFDSixLQUFLLENBQ0wsQ0FBQztRQXRCSyxlQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUU1QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBc0IvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDL0Q7UUFFRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUQ7SUFDRixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFpQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0NBRUQ7OztJQXJEQSxnQ0FBbUI7Ozs7O0lBRW5CLGtDQUFvQzs7Ozs7SUFFcEMsK0JBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi8uLi9hcGkvY29sdW1uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBBYnN0cmFjdENvbHVtbkVudGl0eSB9IGZyb20gJy4vYWJzdHJhY3QtY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL3ByZXNlbnRhdGlvbi9jb2x1bW4ucHJlc2VudGF0aW9uJztcblxuXG5leHBvcnQgY2xhc3MgQ29sdW1uRW50aXR5IGV4dGVuZHMgQWJzdHJhY3RDb2x1bW5FbnRpdHkge1xuXG5cdHNvcnRhYmxlPzogYm9vbGVhbjtcblxuXHRwcml2YXRlIHNvcnRTdGF0dXMgPSBTb3J0T3JkZXIuTk9ORTtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKGNvbHVtbklkOiBDb2x1bW5JZCxcblx0XHRcdFx0Y29sdW1uRmllbGQ6IENvbHVtbkZpZWxkLFxuXHRcdFx0XHRjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyxcblx0XHRcdFx0ZW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJlc2VudGF0aW9uOiBDb2x1bW5QcmVzZW50YXRpb24sXG5cdFx0XHRcdGhlYWRlcjogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUsXG5cdFx0XHRcdGFsaWduOiBDb2x1bW5BbGlnbixcblx0XHRcdFx0dmlldzogVmlld0VudGl0eSxcblx0XHRcdFx0d2lkdGg6IG51bWJlcikge1xuXHRcdHN1cGVyKFxuXHRcdFx0Y29sdW1uSWQsXG5cdFx0XHRjb2x1bW5GaWVsZCxcblx0XHRcdGNvbHVtbkNvbmZpZyxcblx0XHRcdHByZXNlbnRhdGlvbixcblx0XHRcdGhlYWRlcixcblx0XHRcdGFsaWduLFxuXHRcdFx0dmlldyxcblx0XHRcdHdpZHRoXG5cdFx0KTtcblxuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cblx0XHRpZiAodmlldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnZpZXcgPSBuZXcgVmlld0VudGl0eSh0aGlzLnByZXNlbnRhdGlvbi5nZXREZWZhdWx0VmlldygpKTtcblx0XHR9XG5cblx0XHRpZiAoYWxpZ24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5hbGlnbiA9IHRoaXMucHJlc2VudGF0aW9uLmdldERlZmF1bHRBbGlnbih0aGlzLnZpZXcpO1xuXHRcdH1cblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdGdldFNvcnRTdGF0dXMoKTogU29ydE9yZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzO1xuXHR9XG5cblx0c2V0U29ydFN0YXR1cyhzdGF0dXM6IFNvcnRPcmRlcik6IHZvaWQge1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHN0YXR1cztcblx0fVxuXG59XG4iXX0=