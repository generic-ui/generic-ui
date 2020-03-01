/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortOrder } from '../../command/column/sort/sort-order';
// Basically header template
var 
// Basically header template
CellTemplateWithContext = /** @class */ (function () {
    function CellTemplateWithContext(viewTemplate, editTemplate, context, width, fieldId, columnId, sortStatus, enabled, sortable) {
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
    CellTemplateWithContext.prototype.getColumnId = /**
     * @return {?}
     */
    function () {
        return this.columnId;
    };
    /**
     * @return {?}
     */
    CellTemplateWithContext.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @return {?}
     */
    CellTemplateWithContext.prototype.getSortStatus = /**
     * @return {?}
     */
    function () {
        return this.sortStatus;
    };
    /**
     * @return {?}
     */
    CellTemplateWithContext.prototype.isSortEnabled = /**
     * @return {?}
     */
    function () {
        return this.sortable;
    };
    /**
     * @return {?}
     */
    CellTemplateWithContext.prototype.isAscSort = /**
     * @return {?}
     */
    function () {
        return this.sortStatus === SortOrder.ASC;
    };
    /**
     * @return {?}
     */
    CellTemplateWithContext.prototype.isDescSort = /**
     * @return {?}
     */
    function () {
        return this.sortStatus === SortOrder.DESC;
    };
    /**
     * @return {?}
     */
    CellTemplateWithContext.prototype.isNoSort = /**
     * @return {?}
     */
    function () {
        return this.sortStatus === SortOrder.NONE;
    };
    /**
     * @return {?}
     */
    CellTemplateWithContext.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    return CellTemplateWithContext;
}());
// Basically header template
export { CellTemplateWithContext };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBSWpFOzs7SUFFQyxpQ0FBbUIsWUFBOEIsRUFDdkMsWUFBOEIsRUFFOUIsT0FBb0IsRUFDcEIsS0FBYSxFQUNILE9BQWdCLEVBQ2hCLFFBQWtCLEVBQ2xCLFVBQXFCLEVBQ3JCLE9BQWdCLEVBQ2hCLFFBQWlCO1FBVGxCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUN2QyxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFFOUIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ0gsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFTO0lBQ3JDLENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDRDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsK0NBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCwrQ0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDJDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCw0Q0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELDJDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBQ0YsOEJBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDOzs7OztJQTNDWSwrQ0FBcUM7O0lBQzlDLCtDQUFxQzs7SUFFckMsMENBQTJCOztJQUMzQix3Q0FBb0I7Ozs7O0lBQ3BCLDBDQUFpQzs7Ozs7SUFDakMsMkNBQW1DOzs7OztJQUNuQyw2Q0FBc0M7Ozs7O0lBQ3RDLDBDQUFpQzs7Ozs7SUFDakMsMkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbENvbnRleHQgfSBmcm9tICcuL2NlbGwtY29udGV4dCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vY29sdW1uLmlkJztcblxuLy8gQmFzaWNhbGx5IGhlYWRlciB0ZW1wbGF0ZVxuZXhwb3J0IGNsYXNzIENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdmlld1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuXHRcdFx0XHRwdWJsaWMgZWRpdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuXHRcdFx0XHQvLyBwdWJsaWMgZWRpdENvbnRleHQ6IGFueSxcblx0XHRcdFx0cHVibGljIGNvbnRleHQ6IENlbGxDb250ZXh0LFxuXHRcdFx0XHRwdWJsaWMgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbklkOiBDb2x1bW5JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0U3RhdHVzOiBTb3J0T3JkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0YWJsZTogYm9vbGVhbikge1xuXHR9XG5cblx0Z2V0Q29sdW1uSWQoKTogQ29sdW1uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbklkO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0U29ydFN0YXR1cygpOiBTb3J0T3JkZXIge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXM7XG5cdH1cblxuXHRpc1NvcnRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRhYmxlO1xuXHR9XG5cblx0aXNBc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5BU0M7XG5cdH1cblxuXHRpc0Rlc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5ERVNDO1xuXHR9XG5cblx0aXNOb1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLk5PTkU7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxufVxuIl19