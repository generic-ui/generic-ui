/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class VerticalFormationReadModel {
    /**
     * @param {?} enabled
     * @param {?} topMargin
     * @param {?} containerHeight
     * @param {?} viewportHeight
     * @param {?} rowHeight
     */
    constructor(enabled, topMargin, containerHeight, viewportHeight, rowHeight) {
        this.enabled = enabled;
        this.topMargin = topMargin;
        this.containerHeight = containerHeight;
        this.viewportHeight = viewportHeight;
        this.rowHeight = rowHeight;
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
    getTopMargin() {
        return this.topMargin;
    }
    /**
     * @return {?}
     */
    getContainerHeight() {
        return this.containerHeight;
    }
    /**
     * @return {?}
     */
    getViewPortHeight() {
        return this.viewportHeight;
    }
    /**
     * @return {?}
     */
    getRowHeight() {
        return this.rowHeight;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.topMargin;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.containerHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.viewportHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.rowHeight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9yZWFkL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVhZC1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7Ozs7SUFFdEMsWUFBNkIsT0FBZ0IsRUFDekIsU0FBaUIsRUFDakIsZUFBdUIsRUFDdkIsY0FBc0IsRUFDdEIsU0FBaUI7UUFKUixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ3pCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQVE7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQVE7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtJQUNyQyxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0NBRUQ7Ozs7OztJQTNCWSw2Q0FBaUM7Ozs7O0lBQzFDLCtDQUFrQzs7Ozs7SUFDbEMscURBQXdDOzs7OztJQUN4QyxvREFBdUM7Ozs7O0lBQ3ZDLCtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRvcE1hcmdpbjogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lckhlaWdodDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93SGVpZ2h0OiBudW1iZXIpIHtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0Z2V0VG9wTWFyZ2luKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudG9wTWFyZ2luO1xuXHR9XG5cblx0Z2V0Q29udGFpbmVySGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG5cblx0Z2V0Vmlld1BvcnRIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52aWV3cG9ydEhlaWdodDtcblx0fVxuXG5cdGdldFJvd0hlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJvd0hlaWdodDtcblx0fVxuXG59XG4iXX0=