/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortOrder } from '../../command/column/sort/sort-order';
// Basically header template
export class CellTemplateWithContext {
    /**
     * @param {?} viewTemplate
     * @param {?} editTemplate
     * @param {?} context
     * @param {?} width
     * @param {?} fieldId
     * @param {?} columnId
     * @param {?} sortStatus
     * @param {?} enabled
     * @param {?} sortable
     */
    constructor(viewTemplate, editTemplate, context, width, fieldId, columnId, sortStatus, enabled, sortable) {
        this.viewTemplate = viewTemplate;
        this.editTemplate = editTemplate;
        this.context = context;
        this.width = width;
        this.fieldId = fieldId;
        this.columnId = columnId;
        this.sortStatus = sortStatus;
        this.enabled = enabled;
        this.sortable = sortable;
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
    CellTemplateWithContext.prototype.columnId;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBSWpFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7Ozs7Ozs7OztJQUVuQyxZQUFtQixZQUE4QixFQUN2QyxZQUE4QixFQUU5QixPQUFvQixFQUNwQixLQUFhLEVBQ0gsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsVUFBcUIsRUFDckIsT0FBZ0IsRUFDaEIsUUFBaUI7UUFUbEIsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQ3ZDLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUU5QixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3BCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDSCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVM7SUFDckMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUNEOzs7SUEzQ1ksK0NBQXFDOztJQUM5QywrQ0FBcUM7O0lBRXJDLDBDQUEyQjs7SUFDM0Isd0NBQW9COzs7OztJQUNwQiwwQ0FBaUM7Ozs7O0lBQ2pDLDJDQUFtQzs7Ozs7SUFDbkMsNkNBQXNDOzs7OztJQUN0QywwQ0FBaUM7Ozs7O0lBQ2pDLDJDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxDb250ZXh0IH0gZnJvbSAnLi9jZWxsLWNvbnRleHQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2NvbHVtbi5pZCc7XG5cbi8vIEJhc2ljYWxseSBoZWFkZXIgdGVtcGxhdGVcbmV4cG9ydCBjbGFzcyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHZpZXdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pixcblx0XHRcdFx0cHVibGljIGVkaXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pixcblx0XHRcdFx0Ly8gcHVibGljIGVkaXRDb250ZXh0OiBhbnksXG5cdFx0XHRcdHB1YmxpYyBjb250ZXh0OiBDZWxsQ29udGV4dCxcblx0XHRcdFx0cHVibGljIHdpZHRoOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydFN0YXR1czogU29ydE9yZGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydGFibGU6IGJvb2xlYW4pIHtcblx0fVxuXG5cdGdldENvbHVtbklkKCk6IENvbHVtbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5JZDtcblx0fVxuXG5cdGdldEZpZWxkSWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRJZDtcblx0fVxuXG5cdGdldFNvcnRTdGF0dXMoKTogU29ydE9yZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzO1xuXHR9XG5cblx0aXNTb3J0RW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0YWJsZTtcblx0fVxuXG5cdGlzQXNjU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0T3JkZXIuQVNDO1xuXHR9XG5cblx0aXNEZXNjU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0T3JkZXIuREVTQztcblx0fVxuXG5cdGlzTm9Tb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5OT05FO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cbn1cbiJdfQ==