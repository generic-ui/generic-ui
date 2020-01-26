/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortStatus } from '../../command/column/sort/sort-status';
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
     */
    constructor(viewTemplate, editTemplate, context, width, fieldId, columnId, sortStatus, enabled) {
        this.viewTemplate = viewTemplate;
        this.editTemplate = editTemplate;
        this.context = context;
        this.width = width;
        this.fieldId = fieldId;
        this.columnId = columnId;
        this.sortStatus = sortStatus;
        this.enabled = enabled;
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
    isAscSort() {
        return this.sortStatus === SortStatus.ASC;
    }
    /**
     * @return {?}
     */
    isDescSort() {
        return this.sortStatus === SortStatus.DESC;
    }
    /**
     * @return {?}
     */
    isNoSort() {
        return this.sortStatus === SortStatus.NONE;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFJbkUsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7Ozs7SUFFbkMsWUFBbUIsWUFBOEIsRUFDdkMsWUFBOEIsRUFFOUIsT0FBb0IsRUFDcEIsS0FBYSxFQUNILE9BQWdCLEVBQ2hCLFFBQWtCLEVBQ2xCLFVBQXNCLEVBQ3RCLE9BQWdCO1FBUmpCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUN2QyxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFFOUIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ0gsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUNwQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsR0FBRyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0NBQ0Q7OztJQXRDWSwrQ0FBcUM7O0lBQzlDLCtDQUFxQzs7SUFFckMsMENBQTJCOztJQUMzQix3Q0FBb0I7Ozs7O0lBQ3BCLDBDQUFpQzs7Ozs7SUFDakMsMkNBQW1DOzs7OztJQUNuQyw2Q0FBdUM7Ozs7O0lBQ3ZDLDBDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxDb250ZXh0IH0gZnJvbSAnLi9jZWxsLWNvbnRleHQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IFNvcnRTdGF0dXMgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi9zb3J0L3NvcnQtc3RhdHVzJztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vY29sdW1uLmlkJztcblxuXG5leHBvcnQgY2xhc3MgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG5cdFx0XHRcdHB1YmxpYyBlZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG5cdFx0XHRcdC8vIHB1YmxpYyBlZGl0Q29udGV4dDogYW55LFxuXHRcdFx0XHRwdWJsaWMgY29udGV4dDogQ2VsbENvbnRleHQsXG5cdFx0XHRcdHB1YmxpYyB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWQ6IEZpZWxkSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uSWQ6IENvbHVtbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRTdGF0dXM6IFNvcnRTdGF0dXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbikge1xuXHR9XG5cblx0Z2V0Q29sdW1uSWQoKTogQ29sdW1uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbklkO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0U29ydFN0YXR1cygpOiBTb3J0U3RhdHVzIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzO1xuXHR9XG5cblx0aXNBc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRTdGF0dXMuQVNDO1xuXHR9XG5cblx0aXNEZXNjU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0U3RhdHVzLkRFU0M7XG5cdH1cblxuXHRpc05vU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0U3RhdHVzLk5PTkU7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxufVxuIl19