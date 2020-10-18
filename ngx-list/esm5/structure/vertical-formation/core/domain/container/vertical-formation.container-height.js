/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainObject, Optional } from '@generic-ui/hermes';
var VerticalFormationContainerHeight = /** @class */ (function () {
    function VerticalFormationContainerHeight() {
        this.containerHeight = Optional.empty();
    }
    /**
     * @return {?}
     */
    VerticalFormationContainerHeight.prototype.isContainerHeightProperForVirtualScroll = /**
     * @return {?}
     */
    function () {
        if (this.containerHeight.isPresent()) {
            return this.containerHeight.getValueOrNullOrThrowError() > 0;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    VerticalFormationContainerHeight.prototype.getVisibleContainerHeight = /**
     * @return {?}
     */
    function () {
        return this.getHeight();
    };
    /**
     * @return {?}
     */
    VerticalFormationContainerHeight.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        if (this.containerHeight.isPresent()) {
            return this.getContainerHeight();
        }
        return this.sourceHeight;
    };
    /**
     * @return {?}
     */
    VerticalFormationContainerHeight.prototype.getSourceHeight = /**
     * @return {?}
     */
    function () {
        return this.sourceHeight;
    };
    /**
     * @param {?} height
     * @return {?}
     */
    VerticalFormationContainerHeight.prototype.setContainerHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        if (height >= 0) {
            this.containerHeight = Optional.of(height);
        }
    };
    /**
     * @param {?} height
     * @return {?}
     */
    VerticalFormationContainerHeight.prototype.setSourceSize = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.sourceHeight = height;
    };
    /**
     * @private
     * @return {?}
     */
    VerticalFormationContainerHeight.prototype.getContainerHeight = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.containerHeight.getValueOrNullOrThrowError() > this.sourceHeight) {
            return this.sourceHeight;
        }
        else {
            return this.containerHeight.getValueOrNullOrThrowError();
        }
    };
    VerticalFormationContainerHeight = tslib_1.__decorate([
        DomainObject
    ], VerticalFormationContainerHeight);
    return VerticalFormationContainerHeight;
}());
export { VerticalFormationContainerHeight };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationContainerHeight.prototype.containerHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationContainerHeight.prototype.sourceHeight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmNvbnRhaW5lci1oZWlnaHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vY29udGFpbmVyL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb250YWluZXItaGVpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFFNUQ7UUFHUyxvQkFBZSxHQUFxQixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFnRDlELENBQUM7Ozs7SUE1Q0Esa0ZBQXVDOzs7SUFBdkM7UUFDQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDTixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7OztJQUVELG9FQUF5Qjs7O0lBQXpCO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELG9EQUFTOzs7SUFBVDtRQUVDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCwwREFBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCw2REFBa0I7Ozs7SUFBbEIsVUFBbUIsTUFBYztRQUVoQyxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCx3REFBYTs7OztJQUFiLFVBQWMsTUFBYztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUM1QixDQUFDOzs7OztJQUVPLDZEQUFrQjs7OztJQUExQjtRQUVDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3pCO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztTQUN6RDtJQUNGLENBQUM7SUFqRFcsZ0NBQWdDO1FBRDVDLFlBQVk7T0FDQSxnQ0FBZ0MsQ0FrRDVDO0lBQUQsdUNBQUM7Q0FBQSxJQUFBO1NBbERZLGdDQUFnQzs7Ozs7O0lBRTVDLDJEQUE2RDs7Ozs7SUFFN0Qsd0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluT2JqZWN0LCBPcHRpb25hbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBEb21haW5PYmplY3RcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnRhaW5lckhlaWdodCB7XG5cblx0cHJpdmF0ZSBjb250YWluZXJIZWlnaHQ6IE9wdGlvbmFsPG51bWJlcj4gPSBPcHRpb25hbC5lbXB0eSgpO1xuXG5cdHByaXZhdGUgc291cmNlSGVpZ2h0OiBudW1iZXI7XG5cblx0aXNDb250YWluZXJIZWlnaHRQcm9wZXJGb3JWaXJ0dWFsU2Nyb2xsKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmNvbnRhaW5lckhlaWdodC5pc1ByZXNlbnQoKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVySGVpZ2h0LmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCkgPiAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Z2V0VmlzaWJsZUNvbnRhaW5lckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmdldEhlaWdodCgpO1xuXHR9XG5cblx0Z2V0SGVpZ2h0KCk6IG51bWJlciB7XG5cblx0XHRpZiAodGhpcy5jb250YWluZXJIZWlnaHQuaXNQcmVzZW50KCkpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldENvbnRhaW5lckhlaWdodCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDtcblx0fVxuXG5cdGdldFNvdXJjZUhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDtcblx0fVxuXG5cdHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0aWYgKGhlaWdodCA+PSAwKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lckhlaWdodCA9IE9wdGlvbmFsLm9mKGhlaWdodCk7XG5cdFx0fVxuXHR9XG5cblx0c2V0U291cmNlU2l6ZShoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlSGVpZ2h0ID0gaGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDb250YWluZXJIZWlnaHQoKTogbnVtYmVyIHtcblxuXHRcdGlmICh0aGlzLmNvbnRhaW5lckhlaWdodC5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpID4gdGhpcy5zb3VyY2VIZWlnaHQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVySGVpZ2h0LmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=