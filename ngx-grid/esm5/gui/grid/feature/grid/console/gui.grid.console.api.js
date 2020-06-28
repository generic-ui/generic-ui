/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function GuiGridConsoleApi() { }
if (false) {
    /**
     * @param {?} enabled
     * @return {?}
     */
    GuiGridConsoleApi.prototype.changeColumnHeaderTop = function (enabled) { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29uc29sZS5hcGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9jb25zb2xlL2d1aS5ncmlkLmNvbnNvbGUuYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSx1Q0FLQzs7Ozs7O0lBSEEsMkVBQThDOztBQUsvQztJQUVDLGdDQUE2QixhQUErQixFQUN4QyxXQUFnQjtRQURQLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztJQUNwQyxDQUFDLENBQUMsY0FBYzs7Ozs7SUFFaEIsd0NBQU87Ozs7O0lBQVA7O1lBRU8sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhO1FBRXBDLE9BQU87WUFDTixxQkFBcUI7Ozs7WUFBckIsVUFBc0IsT0FBZ0I7Z0JBQ3JDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO2dCQUNwQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDM0IsQ0FBQztTQUNELENBQUM7SUFFSCxDQUFDO0lBRUYsNkJBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDOzs7Ozs7O0lBakJZLCtDQUFnRDs7Ozs7SUFDekQsNkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL2d1aS5ncmlkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpR3JpZENvbnNvbGVBcGkge1xuXG5cdGNoYW5nZUNvbHVtbkhlYWRlclRvcChlbmFibGVkOiBib29sZWFuKTogdm9pZDtcblxuXG59XG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29uc29sZUFwaVByb3ZpZGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGdyaWRDb21wb25lbnQ6IEd1aUdyaWRDb21wb25lbnQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IGFueSkge1xuXHR9IC8vIFN0cnVjdHVyZUlkXG5cblx0cHJvdmlkZSgpOiBHdWlHcmlkQ29uc29sZUFwaSB7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLmdyaWRDb21wb25lbnQ7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlQ29sdW1uSGVhZGVyVG9wKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdFx0Y29tcG9uZW50LmNvbHVtbkhlYWRlclRvcCA9IGVuYWJsZWQ7XG5cdFx0XHRcdGNvbXBvbmVudC5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHR9XG5cbn1cbiJdfQ==