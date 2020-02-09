/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function GridConsoleApi() { }
if (false) {
    /**
     * @param {?} enabled
     * @return {?}
     */
    GridConsoleApi.prototype.changeColumnHeaderTop = function (enabled) { };
}
var GridConsoleApiProvider = /** @class */ (function () {
    function GridConsoleApiProvider(gridComponent, structureId) {
        this.gridComponent = gridComponent;
        this.structureId = structureId;
    } // StructureId
    // StructureId
    /**
     * @return {?}
     */
    GridConsoleApiProvider.prototype.provide = 
    // StructureId
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var component = this.gridComponent;
        return {
            changeColumnHeaderTop: /**
             * @param {?} enabled
             * @return {?}
             */
            function (enabled) {
                component.columnHeaderTop = enabled;
                component.detectChanges();
            }
        };
    };
    return GridConsoleApiProvider;
}());
export { GridConsoleApiProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridConsoleApiProvider.prototype.gridComponent;
    /**
     * @type {?}
     * @private
     */
    GridConsoleApiProvider.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb25zb2xlLmFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvdWkvZ3JpZC9jb25zb2xlL2dyaWQuY29uc29sZS5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLG9DQUtDOzs7Ozs7SUFIQSx3RUFBOEM7O0FBSy9DO0lBRUMsZ0NBQTZCLGFBQTRCLEVBQ3JDLFdBQWdCO1FBRFAsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDckMsZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDcEMsQ0FBQyxDQUFDLGNBQWM7Ozs7O0lBRWhCLHdDQUFPOzs7OztJQUFQOztZQUVPLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYTtRQUVwQyxPQUFPO1lBQ04scUJBQXFCOzs7O1lBQXJCLFVBQXNCLE9BQWdCO2dCQUNyQyxTQUFTLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztnQkFDcEMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzNCLENBQUM7U0FDRCxDQUFDO0lBRUgsQ0FBQztJQUVGLDZCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQzs7Ozs7OztJQWpCWSwrQ0FBNkM7Ozs7O0lBQ3RELDZDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWRDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JpZENvbnNvbGVBcGkge1xuXG5cdGNoYW5nZUNvbHVtbkhlYWRlclRvcChlbmFibGVkOiBib29sZWFuKTogdm9pZDtcblxuXG59XG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29uc29sZUFwaVByb3ZpZGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGdyaWRDb21wb25lbnQ6IEdyaWRDb21wb25lbnQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IGFueSkge1xuXHR9IC8vIFN0cnVjdHVyZUlkXG5cblx0cHJvdmlkZSgpOiBHcmlkQ29uc29sZUFwaSB7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLmdyaWRDb21wb25lbnQ7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlQ29sdW1uSGVhZGVyVG9wKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdFx0Y29tcG9uZW50LmNvbHVtbkhlYWRlclRvcCA9IGVuYWJsZWQ7XG5cdFx0XHRcdGNvbXBvbmVudC5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHR9XG5cbn1cbiJdfQ==