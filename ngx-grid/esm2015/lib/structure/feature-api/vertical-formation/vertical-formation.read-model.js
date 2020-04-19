/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelObject } from '@generic-ui/hermes';
let VerticalFormationReadModel = class VerticalFormationReadModel {
    /**
     * @param {?} enabled
     * @param {?} topMargin
     * @param {?} sourceHeight
     * @param {?} viewportHeight
     * @param {?} rowHeight
     */
    constructor(enabled, topMargin, sourceHeight, viewportHeight, rowHeight) {
        this.enabled = enabled;
        this.topMargin = topMargin;
        this.sourceHeight = sourceHeight;
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
        return this.topMargin; //  * this.rowHeight;
    }
    /**
     * @return {?}
     */
    getSourceHeight() {
        return this.sourceHeight;
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
};
VerticalFormationReadModel.ctorParameters = () => [
    { type: Boolean },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number }
];
VerticalFormationReadModel = tslib_1.__decorate([
    ReadModelObject,
    tslib_1.__metadata("design:paramtypes", [Boolean, Number, Number, Number, Number])
], VerticalFormationReadModel);
export { VerticalFormationReadModel };
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
    VerticalFormationReadModel.prototype.sourceHeight;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0lBSXhDLDBCQUEwQixTQUExQiwwQkFBMEI7Ozs7Ozs7O0lBRXRDLFlBQTZCLE9BQWdCLEVBQ3pCLFNBQWlCLEVBQ2pCLFlBQW9CLEVBQ3BCLGNBQXNCLEVBQ3RCLFNBQWlCO1FBSlIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQ3BCLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQVE7SUFDckMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxxQkFBcUI7SUFDN0MsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztDQUVELENBQUE7Ozs7Ozs7O0FBN0JZLDBCQUEwQjtJQUR0QyxlQUFlOztHQUNILDBCQUEwQixDQTZCdEM7U0E3QlksMEJBQTBCOzs7Ozs7SUFFMUIsNkNBQWlDOzs7OztJQUMxQywrQ0FBa0M7Ozs7O0lBQ2xDLGtEQUFxQzs7Ozs7SUFDckMsb0RBQXVDOzs7OztJQUN2QywrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxPYmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBSZWFkTW9kZWxPYmplY3RcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRvcE1hcmdpbjogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUhlaWdodDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93SGVpZ2h0OiBudW1iZXIpIHtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0Z2V0VG9wTWFyZ2luKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudG9wTWFyZ2luOyAvLyAgKiB0aGlzLnJvd0hlaWdodDtcblx0fVxuXG5cdGdldFNvdXJjZUhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDtcblx0fVxuXG5cdGdldFZpZXdQb3J0SGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmlld3BvcnRIZWlnaHQ7XG5cdH1cblxuXHRnZXRSb3dIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxufVxuIl19