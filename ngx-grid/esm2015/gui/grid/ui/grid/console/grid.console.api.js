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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb25zb2xlLmFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvdWkvZ3JpZC9jb25zb2xlL2dyaWQuY29uc29sZS5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLG9DQUtDOzs7Ozs7SUFIQSx3RUFBOEM7O0FBSy9DLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBRWxDLFlBQTZCLGFBQTRCLEVBQ3JDLFdBQWdCO1FBRFAsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDckMsZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFBRyxDQUFDLENBQUMsY0FBYzs7Ozs7SUFFdkQsT0FBTzs7Y0FFQSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWE7UUFFcEMsT0FBTzs7Ozs7WUFDTixxQkFBcUIsQ0FBQyxPQUFnQjtnQkFDckMsU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7Z0JBQ3BDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMzQixDQUFDO1NBQ0QsQ0FBQTtJQUVGLENBQUM7Q0FFRDs7Ozs7O0lBaEJZLCtDQUE2Qzs7Ozs7SUFDdEQsNkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL2dyaWQuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBHcmlkQ29uc29sZUFwaSB7XG5cblx0Y2hhbmdlQ29sdW1uSGVhZGVyVG9wKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cbn1cblxuZXhwb3J0IGNsYXNzIEdyaWRDb25zb2xlQXBpUHJvdmlkZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZ3JpZENvbXBvbmVudDogR3JpZENvbXBvbmVudCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogYW55KSB7fSAvLyBTdHJ1Y3R1cmVJZFxuXG5cdHByb3ZpZGUoKTogR3JpZENvbnNvbGVBcGkge1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5ncmlkQ29tcG9uZW50O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoYW5nZUNvbHVtbkhlYWRlclRvcChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGNvbXBvbmVudC5jb2x1bW5IZWFkZXJUb3AgPSBlbmFibGVkO1xuXHRcdFx0XHRjb21wb25lbnQuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==