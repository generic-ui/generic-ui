/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortOrder } from '../../command/column/sort/sort-order';
import { ColumnAlign } from '../../column-align';
// Basically header template
var 
// Basically header template
CellTemplateWithContext = /** @class */ (function () {
    function CellTemplateWithContext(viewTemplate, editTemplate, context, width, fieldId, columnId, sortStatus, enabled, sortable, align) {
        this.viewTemplate = viewTemplate;
        this.editTemplate = editTemplate;
        this.context = context;
        this.width = width;
        this.fieldId = fieldId;
        this.columnId = columnId;
        this.sortStatus = sortStatus;
        this.enabled = enabled;
        this.sortable = sortable;
        this.align = align;
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
    /**
     * @return {?}
     */
    CellTemplateWithContext.prototype.isAlignLeft = /**
     * @return {?}
     */
    function () {
        return this.align === ColumnAlign.LEFT;
    };
    /**
     * @return {?}
     */
    CellTemplateWithContext.prototype.isAlignCenter = /**
     * @return {?}
     */
    function () {
        return this.align === ColumnAlign.CENTER;
    };
    /**
     * @return {?}
     */
    CellTemplateWithContext.prototype.isAlignRight = /**
     * @return {?}
     */
    function () {
        return this.align === ColumnAlign.RIGHT;
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
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.align;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUdqRDs7O0lBRUMsaUNBQW1CLFlBQThCLEVBQ3ZDLFlBQThCLEVBRTlCLE9BQW9CLEVBQ3BCLEtBQWEsRUFDSCxPQUFnQixFQUNoQixRQUFrQixFQUNsQixVQUFxQixFQUNyQixPQUFnQixFQUNoQixRQUFpQixFQUNqQixLQUFrQjtRQVZuQixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDdkMsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBRTlCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNILFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFhO0lBQ3RDLENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDRDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsK0NBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCwrQ0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDJDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCw0Q0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELDJDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELCtDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCw4Q0FBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBRUYsOEJBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDOzs7OztJQXpEWSwrQ0FBcUM7O0lBQzlDLCtDQUFxQzs7SUFFckMsMENBQTJCOztJQUMzQix3Q0FBb0I7Ozs7O0lBQ3BCLDBDQUFpQzs7Ozs7SUFDakMsMkNBQW1DOzs7OztJQUNuQyw2Q0FBc0M7Ozs7O0lBQ3RDLDBDQUFpQzs7Ozs7SUFDakMsMkNBQWtDOzs7OztJQUNsQyx3Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsQ29udGV4dCB9IGZyb20gJy4vY2VsbC1jb250ZXh0JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi9jb2x1bW4tYWxpZ24nO1xuXG4vLyBCYXNpY2FsbHkgaGVhZGVyIHRlbXBsYXRlXG5leHBvcnQgY2xhc3MgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG5cdFx0XHRcdHB1YmxpYyBlZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG5cdFx0XHRcdC8vIHB1YmxpYyBlZGl0Q29udGV4dDogYW55LFxuXHRcdFx0XHRwdWJsaWMgY29udGV4dDogQ2VsbENvbnRleHQsXG5cdFx0XHRcdHB1YmxpYyB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWQ6IEZpZWxkSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uSWQ6IENvbHVtbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRTdGF0dXM6IFNvcnRPcmRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRhYmxlOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFsaWduOiBDb2x1bW5BbGlnbikge1xuXHR9XG5cblx0Z2V0Q29sdW1uSWQoKTogQ29sdW1uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbklkO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0U29ydFN0YXR1cygpOiBTb3J0T3JkZXIge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXM7XG5cdH1cblxuXHRpc1NvcnRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRhYmxlO1xuXHR9XG5cblx0aXNBc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5BU0M7XG5cdH1cblxuXHRpc0Rlc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5ERVNDO1xuXHR9XG5cblx0aXNOb1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLk5PTkU7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGlzQWxpZ25MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduID09PSBDb2x1bW5BbGlnbi5MRUZUO1xuXHR9XG5cblx0aXNBbGlnbkNlbnRlcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gQ29sdW1uQWxpZ24uQ0VOVEVSO1xuXHR9XG5cblx0aXNBbGlnblJpZ2h0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduID09PSBDb2x1bW5BbGlnbi5SSUdIVDtcblx0fVxuXG59XG4iXX0=