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
export class GridConsoleApiProvider {
    /**
     * @param {?} gridComponent
     * @param {?} structureId
     */
    constructor(gridComponent, structureId) {
        this.gridComponent = gridComponent;
        this.structureId = structureId;
    } // StructureId
    // StructureId
    /**
     * @return {?}
     */
    provide() {
        /** @type {?} */
        const component = this.gridComponent;
        return {
            /**
             * @param {?} enabled
             * @return {?}
             */
            changeColumnHeaderTop(enabled) {
                component.columnHeaderTop = enabled;
                component.detectChanges();
            }
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29uc29sZS5hcGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9jb25zb2xlL2d1aS5ncmlkLmNvbnNvbGUuYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSx1Q0FLQzs7Ozs7O0lBSEEsMkVBQThDOztBQUsvQyxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUVsQyxZQUE2QixhQUErQixFQUN4QyxXQUFnQjtRQURQLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztJQUNwQyxDQUFDLENBQUMsY0FBYzs7Ozs7SUFFaEIsT0FBTzs7Y0FFQSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWE7UUFFcEMsT0FBTzs7Ozs7WUFDTixxQkFBcUIsQ0FBQyxPQUFnQjtnQkFDckMsU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7Z0JBQ3BDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMzQixDQUFDO1NBQ0QsQ0FBQztJQUVILENBQUM7Q0FFRDs7Ozs7O0lBakJZLCtDQUFnRDs7Ozs7SUFDekQsNkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL2d1aS5ncmlkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpR3JpZENvbnNvbGVBcGkge1xuXG5cdGNoYW5nZUNvbHVtbkhlYWRlclRvcChlbmFibGVkOiBib29sZWFuKTogdm9pZDtcblxuXG59XG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29uc29sZUFwaVByb3ZpZGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGdyaWRDb21wb25lbnQ6IEd1aUdyaWRDb21wb25lbnQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IGFueSkge1xuXHR9IC8vIFN0cnVjdHVyZUlkXG5cblx0cHJvdmlkZSgpOiBHdWlHcmlkQ29uc29sZUFwaSB7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLmdyaWRDb21wb25lbnQ7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlQ29sdW1uSGVhZGVyVG9wKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdFx0Y29tcG9uZW50LmNvbHVtbkhlYWRlclRvcCA9IGVuYWJsZWQ7XG5cdFx0XHRcdGNvbXBvbmVudC5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHR9XG5cbn1cbiJdfQ==