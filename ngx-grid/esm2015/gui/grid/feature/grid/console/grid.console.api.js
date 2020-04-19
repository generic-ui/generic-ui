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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb25zb2xlLmFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbnNvbGUvZ3JpZC5jb25zb2xlLmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsb0NBS0M7Ozs7OztJQUhBLHdFQUE4Qzs7QUFLL0MsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFFbEMsWUFBNkIsYUFBNEIsRUFDckMsV0FBZ0I7UUFEUCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztJQUNwQyxDQUFDLENBQUMsY0FBYzs7Ozs7SUFFaEIsT0FBTzs7Y0FFQSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWE7UUFFcEMsT0FBTzs7Ozs7WUFDTixxQkFBcUIsQ0FBQyxPQUFnQjtnQkFDckMsU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7Z0JBQ3BDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMzQixDQUFDO1NBQ0QsQ0FBQztJQUVILENBQUM7Q0FFRDs7Ozs7O0lBakJZLCtDQUE2Qzs7Ozs7SUFDdEQsNkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL2dyaWQuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBHcmlkQ29uc29sZUFwaSB7XG5cblx0Y2hhbmdlQ29sdW1uSGVhZGVyVG9wKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cbn1cblxuZXhwb3J0IGNsYXNzIEdyaWRDb25zb2xlQXBpUHJvdmlkZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZ3JpZENvbXBvbmVudDogR3JpZENvbXBvbmVudCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogYW55KSB7XG5cdH0gLy8gU3RydWN0dXJlSWRcblxuXHRwcm92aWRlKCk6IEdyaWRDb25zb2xlQXBpIHtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZ3JpZENvbXBvbmVudDtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRjaGFuZ2VDb2x1bW5IZWFkZXJUb3AoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0XHRjb21wb25lbnQuY29sdW1uSGVhZGVyVG9wID0gZW5hYmxlZDtcblx0XHRcdFx0Y29tcG9uZW50LmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdH1cblxufVxuIl19