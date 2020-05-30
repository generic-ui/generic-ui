/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortOrder } from '../../../domain/column/sort/sort-order';
import { ColumnAlign } from '../../../domain/column/column-align';
// Basically header template
export class CellTemplateWithContext {
    /**
     * @param {?} viewTemplate
     * @param {?} editTemplate
     * @param {?} context
     * @param {?} width
     * @param {?} fieldId
     * @param {?} columnDefinitionId
     * @param {?} sortStatus
     * @param {?} enabled
     * @param {?} sortable
     * @param {?} align
     */
    constructor(viewTemplate, editTemplate, context, width, fieldId, columnDefinitionId, sortStatus, enabled, sortable, align) {
        this.viewTemplate = viewTemplate;
        this.editTemplate = editTemplate;
        this.context = context;
        this.width = width;
        this.fieldId = fieldId;
        this.columnDefinitionId = columnDefinitionId;
        this.sortStatus = sortStatus;
        this.enabled = enabled;
        this.sortable = sortable;
        this.align = align;
    }
    /**
     * @return {?}
     */
    getColumnDefinitionId() {
        return this.columnDefinitionId;
    }
    /**
     * @return {?}
     */
    getFieldId() {
        return this.fieldId;
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
    isSortEnabled() {
        return this.sortable;
    }
    /**
     * @return {?}
     */
    isAscSort() {
        return this.sortStatus === SortOrder.ASC;
    }
    /**
     * @return {?}
     */
    isDescSort() {
        return this.sortStatus === SortOrder.DESC;
    }
    /**
     * @return {?}
     */
    isNoSort() {
        return this.sortStatus === SortOrder.NONE;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
    /**
     * @return {?}
     */
    isAlignLeft() {
        return this.align === ColumnAlign.LEFT;
    }
    /**
     * @return {?}
     */
    isAlignCenter() {
        return this.align === ColumnAlign.CENTER;
    }
    /**
     * @return {?}
     */
    isAlignRight() {
        return this.align === ColumnAlign.RIGHT;
    }
}
if (false) {
    /** @type {?} */
    CellTemplateWithContext.prototype.viewTemplate;
    /** @type {?} */
    CellTemplateWithContext.prototype.editTemplate;
    /** @type {?} */
    CellTemplateWithContext.prototype.context;
    /** @type {?} */
    CellTemplateWithContext.prototype.width;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.columnDefinitionId;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.sortable;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.align;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFJbEUsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7Ozs7OztJQUVuQyxZQUFtQixZQUE4QixFQUN2QyxZQUE4QixFQUU5QixPQUFvQixFQUNwQixLQUFhLEVBQ0gsT0FBZ0IsRUFDaEIsa0JBQXNDLEVBQ3RDLFVBQXFCLEVBQ3JCLE9BQWdCLEVBQ2hCLFFBQWlCLEVBQ2pCLEtBQWtCO1FBVm5CLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUN2QyxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFFOUIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ0gsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFDdEMsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDO0NBRUQ7OztJQXpEWSwrQ0FBcUM7O0lBQzlDLCtDQUFxQzs7SUFFckMsMENBQTJCOztJQUMzQix3Q0FBb0I7Ozs7O0lBQ3BCLDBDQUFpQzs7Ozs7SUFDakMscURBQXVEOzs7OztJQUN2RCw2Q0FBc0M7Ozs7O0lBQ3RDLDBDQUFpQzs7Ozs7SUFDakMsMkNBQWtDOzs7OztJQUNsQyx3Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsQ29udGV4dCB9IGZyb20gJy4vY2VsbC1jb250ZXh0JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25JZCB9IGZyb20gJy4vY29sdW1uLWRlZmluaXRpb24taWQnO1xuXG4vLyBCYXNpY2FsbHkgaGVhZGVyIHRlbXBsYXRlXG5leHBvcnQgY2xhc3MgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG5cdFx0XHRcdHB1YmxpYyBlZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG5cdFx0XHRcdC8vIHB1YmxpYyBlZGl0Q29udGV4dDogYW55LFxuXHRcdFx0XHRwdWJsaWMgY29udGV4dDogQ2VsbENvbnRleHQsXG5cdFx0XHRcdHB1YmxpYyB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWQ6IEZpZWxkSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydFN0YXR1czogU29ydE9yZGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydGFibGU6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxpZ246IENvbHVtbkFsaWduKSB7XG5cdH1cblxuXHRnZXRDb2x1bW5EZWZpbml0aW9uSWQoKTogQ29sdW1uRGVmaW5pdGlvbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5EZWZpbml0aW9uSWQ7XG5cdH1cblxuXHRnZXRGaWVsZElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkSWQ7XG5cdH1cblxuXHRnZXRTb3J0U3RhdHVzKCk6IFNvcnRPcmRlciB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cztcblx0fVxuXG5cdGlzU29ydEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydGFibGU7XG5cdH1cblxuXHRpc0FzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkFTQztcblx0fVxuXG5cdGlzRGVzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkRFU0M7XG5cdH1cblxuXHRpc05vU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0T3JkZXIuTk9ORTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0aXNBbGlnbkxlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLkxFRlQ7XG5cdH1cblxuXHRpc0FsaWduQ2VudGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduID09PSBDb2x1bW5BbGlnbi5DRU5URVI7XG5cdH1cblxuXHRpc0FsaWduUmlnaHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLlJJR0hUO1xuXHR9XG5cbn1cbiJdfQ==