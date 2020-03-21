/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortOrder } from './sort/sort-order';
import { AbstractColumnEntity } from './abstract-column.entity';
export class ColumnEntity extends AbstractColumnEntity {
    /**
     * @param {?} columnId
     * @param {?} columnField
     * @param {?} columnConfig
     * @param {?=} header
     * @param {?=} align
     * @param {?=} view
     * @param {?=} width
     */
    constructor(columnId, columnField, columnConfig, header, align, view, width) {
        super(columnId, columnField, columnConfig, header, align, view, width);
        this.sortOrder = SortOrder.NONE;
        this.enabled = true;
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
     * @param {?} status
     * @return {?}
     */
    setSortStatus(status) {
        this.sortOrder = status;
    }
}
if (false) {
    /** @type {?} */
    ColumnEntity.prototype.sortOrder;
    /** @type {?} */
    ColumnEntity.prototype.sortable;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHaEUsTUFBTSxPQUFPLFlBQWEsU0FBUSxvQkFBb0I7Ozs7Ozs7Ozs7SUFRckQsWUFBWSxRQUFrQixFQUMzQixXQUF3QixFQUN4QixZQUEwQixFQUMxQixNQUFnQyxFQUNoQyxLQUFtQixFQUNuQixJQUFpQixFQUNqQixLQUFjO1FBQ2hCLEtBQUssQ0FDSixRQUFRLEVBQ1IsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLElBQUksRUFDSixLQUFLLENBQ0wsQ0FBQztRQXJCSCxjQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUluQixZQUFPLEdBQVksSUFBSSxDQUFDO0lBa0JoQyxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFpQjtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUQ7OztJQXBDQSxpQ0FBMkI7O0lBRTNCLGdDQUFtQjs7Ozs7SUFFbkIsK0JBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZCB9IGZyb20gJy4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IEFic3RyYWN0Q29sdW1uRW50aXR5IH0gZnJvbSAnLi9hYnN0cmFjdC1jb2x1bW4uZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgQ29sdW1uRW50aXR5IGV4dGVuZHMgQWJzdHJhY3RDb2x1bW5FbnRpdHkge1xuXG5cdHNvcnRPcmRlciA9IFNvcnRPcmRlci5OT05FO1xuXG5cdHNvcnRhYmxlPzogYm9vbGVhbjtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKGNvbHVtbklkOiBDb2x1bW5JZCxcblx0XHRcdFx0Y29sdW1uRmllbGQ6IENvbHVtbkZpZWxkLFxuXHRcdFx0XHRjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyxcblx0XHRcdFx0aGVhZGVyPzogc3RyaW5nIHwgSGVhZGVyVGVtcGxhdGUsXG5cdFx0XHRcdGFsaWduPzogQ29sdW1uQWxpZ24sXG5cdFx0XHRcdHZpZXc/OiBWaWV3RW50aXR5LFxuXHRcdFx0XHR3aWR0aD86IG51bWJlcikge1xuXHRcdHN1cGVyKFxuXHRcdFx0Y29sdW1uSWQsXG5cdFx0XHRjb2x1bW5GaWVsZCxcblx0XHRcdGNvbHVtbkNvbmZpZyxcblx0XHRcdGhlYWRlcixcblx0XHRcdGFsaWduLFxuXHRcdFx0dmlldyxcblx0XHRcdHdpZHRoXG5cdFx0KTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHNldFNvcnRTdGF0dXMoc3RhdHVzOiBTb3J0T3JkZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRPcmRlciA9IHN0YXR1cztcblx0fVxuXG59XG4iXX0=