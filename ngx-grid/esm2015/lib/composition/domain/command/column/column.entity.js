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
        if (align === undefined) {
            this.align = this.presentation.getDefaultAlign();
        }
        if (view === undefined) {
            this.view = new ViewEntity(this.presentation.getDefaultView());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUloRSxNQUFNLE9BQU8sWUFBYSxTQUFRLG9CQUFvQjs7Ozs7Ozs7Ozs7O0lBUXJELFlBQVksUUFBa0IsRUFDM0IsV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsT0FBZ0IsRUFDaEIsWUFBZ0MsRUFDaEMsTUFBK0IsRUFDL0IsS0FBa0IsRUFDbEIsSUFBZ0IsRUFDaEIsS0FBYTtRQUNmLEtBQUssQ0FDSixRQUFRLEVBQ1IsV0FBVyxFQUNYLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxJQUFJLEVBQ0osS0FBSyxDQUNMLENBQUM7UUF0QkssZUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFFNUIsWUFBTyxHQUFZLElBQUksQ0FBQztRQXNCL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNqRDtRQUVELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUMvRDtJQUNGLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQWlCO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7Q0FFRDs7O0lBckRBLGdDQUFtQjs7Ozs7SUFFbkIsa0NBQW9DOzs7OztJQUVwQywrQkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQWJzdHJhY3RDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2Fic3RyYWN0LWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbic7XG5cblxuZXhwb3J0IGNsYXNzIENvbHVtbkVudGl0eSBleHRlbmRzIEFic3RyYWN0Q29sdW1uRW50aXR5IHtcblxuXHRzb3J0YWJsZT86IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBzb3J0U3RhdHVzID0gU29ydE9yZGVyLk5PTkU7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0Y29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcsXG5cdFx0XHRcdGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByZXNlbnRhdGlvbjogQ29sdW1uUHJlc2VudGF0aW9uLFxuXHRcdFx0XHRoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHRhbGlnbjogQ29sdW1uQWxpZ24sXG5cdFx0XHRcdHZpZXc6IFZpZXdFbnRpdHksXG5cdFx0XHRcdHdpZHRoOiBudW1iZXIpIHtcblx0XHRzdXBlcihcblx0XHRcdGNvbHVtbklkLFxuXHRcdFx0Y29sdW1uRmllbGQsXG5cdFx0XHRjb2x1bW5Db25maWcsXG5cdFx0XHRwcmVzZW50YXRpb24sXG5cdFx0XHRoZWFkZXIsXG5cdFx0XHRhbGlnbixcblx0XHRcdHZpZXcsXG5cdFx0XHR3aWR0aFxuXHRcdCk7XG5cblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXG5cdFx0aWYgKGFsaWduID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuYWxpZ24gPSB0aGlzLnByZXNlbnRhdGlvbi5nZXREZWZhdWx0QWxpZ24oKTtcblx0XHR9XG5cblx0XHRpZiAodmlldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnZpZXcgPSBuZXcgVmlld0VudGl0eSh0aGlzLnByZXNlbnRhdGlvbi5nZXREZWZhdWx0VmlldygpKTtcblx0XHR9XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRnZXRTb3J0U3RhdHVzKCk6IFNvcnRPcmRlciB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cztcblx0fVxuXG5cdHNldFNvcnRTdGF0dXMoc3RhdHVzOiBTb3J0T3JkZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRTdGF0dXMgPSBzdGF0dXM7XG5cdH1cblxufVxuIl19