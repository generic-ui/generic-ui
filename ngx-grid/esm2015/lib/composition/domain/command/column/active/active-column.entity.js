/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortOrder } from '../sort/sort-order';
import { AbstractColumnEntity } from '../abstract-column.entity';
export class ActiveColumnEntity extends AbstractColumnEntity {
    /**
     * @param {?} columnId
     * @param {?} columnField
     * @param {?} header
     * @param {?} align
     * @param {?} view
     * @param {?} config
     */
    constructor(columnId, columnField, header, align, view, config) {
        super(columnId, columnField, config, header, align, view, undefined);
        this.sortStatus = SortOrder.NONE;
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
    /**
     * @type {?}
     * @private
     */
    ActiveColumnEntity.prototype.sortStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHakUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLG9CQUFvQjs7Ozs7Ozs7O0lBSTNELFlBQVksUUFBa0IsRUFDM0IsV0FBd0IsRUFDeEIsTUFBK0IsRUFDL0IsS0FBa0IsRUFDbEIsSUFBZ0IsRUFDaEIsTUFBb0I7UUFDdEIsS0FBSyxDQUNKLFFBQVEsRUFDUixXQUFXLEVBQ1gsTUFBTSxFQUNOLE1BQU0sRUFDTixLQUFLLEVBQ0wsSUFBSSxFQUNKLFNBQVMsQ0FDVCxDQUFDO1FBaEJLLGVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBaUJwQyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFpQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0NBRUQ7Ozs7OztJQTNCQSx3Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4uL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IEFic3RyYWN0Q29sdW1uRW50aXR5IH0gZnJvbSAnLi4vYWJzdHJhY3QtY29sdW1uLmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNvbHVtbkVudGl0eSBleHRlbmRzIEFic3RyYWN0Q29sdW1uRW50aXR5IHtcblxuXHRwcml2YXRlIHNvcnRTdGF0dXMgPSBTb3J0T3JkZXIuTk9ORTtcblxuXHRjb25zdHJ1Y3Rvcihjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdGNvbHVtbkZpZWxkOiBDb2x1bW5GaWVsZCxcblx0XHRcdFx0aGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSxcblx0XHRcdFx0YWxpZ246IENvbHVtbkFsaWduLFxuXHRcdFx0XHR2aWV3OiBWaWV3RW50aXR5LFxuXHRcdFx0XHRjb25maWc6IENvbHVtbkNvbmZpZykge1xuXHRcdHN1cGVyKFxuXHRcdFx0Y29sdW1uSWQsXG5cdFx0XHRjb2x1bW5GaWVsZCxcblx0XHRcdGNvbmZpZyxcblx0XHRcdGhlYWRlcixcblx0XHRcdGFsaWduLFxuXHRcdFx0dmlldyxcblx0XHRcdHVuZGVmaW5lZFxuXHRcdCk7XG5cdH1cblxuXHRnZXRTb3J0U3RhdHVzKCk6IFNvcnRPcmRlciB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cztcblx0fVxuXG5cdHNldFNvcnRTdGF0dXMoc3RhdHVzOiBTb3J0T3JkZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRTdGF0dXMgPSBzdGF0dXM7XG5cdH1cblxufVxuIl19