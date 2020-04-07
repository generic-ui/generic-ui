/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainObject, Optional } from '@generic-ui/hermes';
let VerticalFormationContainerHeight = class VerticalFormationContainerHeight {
    constructor() {
        this.containerHeight = Optional.empty();
    }
    /**
     * @return {?}
     */
    isContainerHeightProperForVirtualScroll() {
        if (this.containerHeight.isPresent()) {
            return this.containerHeight.getValueOrNullOrThrowError() > 0;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    getHeight() {
        if (this.containerHeight.isPresent()) {
            return this.getContainerHeight();
        }
        return this.sourceHeight;
    }
    /**
     * @return {?}
     */
    getSourceHeight() {
        return this.sourceHeight;
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setContainerHeight(height) {
        if (height >= 0) {
            this.containerHeight = Optional.of(height);
        }
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setSourceSize(height) {
        this.sourceHeight = height;
    }
    /**
     * @private
     * @return {?}
     */
    getContainerHeight() {
        if (this.containerHeight.getValueOrNullOrThrowError() > this.sourceHeight) {
            return this.sourceHeight;
        }
        else {
            return this.containerHeight.getValueOrNullOrThrowError();
        }
    }
};
VerticalFormationContainerHeight = tslib_1.__decorate([
    DomainObject
], VerticalFormationContainerHeight);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmNvbnRhaW5lci1oZWlnaHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29udGFpbmVyL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb250YWluZXItaGVpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztJQUcvQyxnQ0FBZ0MsU0FBaEMsZ0NBQWdDO0lBRDdDO1FBR1Msb0JBQWUsR0FBcUIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBNEM5RCxDQUFDOzs7O0lBeENBLHVDQUF1QztRQUN0QyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDTixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7OztJQUVELFNBQVM7UUFFUixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUNqQztRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLE1BQWM7UUFFaEMsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQWM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyxrQkFBa0I7UUFFekIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMxRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDekI7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1NBQ3pEO0lBQ0YsQ0FBQztDQUNELENBQUE7QUE5Q1ksZ0NBQWdDO0lBRDVDLFlBQVk7R0FDQSxnQ0FBZ0MsQ0E4QzVDO1NBOUNZLGdDQUFnQzs7Ozs7O0lBRTVDLDJEQUE2RDs7Ozs7SUFFN0Qsd0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluT2JqZWN0LCBPcHRpb25hbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBEb21haW5PYmplY3RcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnRhaW5lckhlaWdodCB7XG5cblx0cHJpdmF0ZSBjb250YWluZXJIZWlnaHQ6IE9wdGlvbmFsPG51bWJlcj4gPSBPcHRpb25hbC5lbXB0eSgpO1xuXG5cdHByaXZhdGUgc291cmNlSGVpZ2h0OiBudW1iZXI7XG5cblx0aXNDb250YWluZXJIZWlnaHRQcm9wZXJGb3JWaXJ0dWFsU2Nyb2xsKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmNvbnRhaW5lckhlaWdodC5pc1ByZXNlbnQoKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVySGVpZ2h0LmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCkgPiAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Z2V0SGVpZ2h0KCk6IG51bWJlciB7XG5cblx0XHRpZiAodGhpcy5jb250YWluZXJIZWlnaHQuaXNQcmVzZW50KCkpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldENvbnRhaW5lckhlaWdodCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDtcblx0fVxuXG5cdGdldFNvdXJjZUhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDtcblx0fVxuXG5cdHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0aWYgKGhlaWdodCA+PSAwKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lckhlaWdodCA9IE9wdGlvbmFsLm9mKGhlaWdodCk7XG5cdFx0fVxuXHR9XG5cblx0c2V0U291cmNlU2l6ZShoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlSGVpZ2h0ID0gaGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDb250YWluZXJIZWlnaHQoKTogbnVtYmVyIHtcblxuXHRcdGlmICh0aGlzLmNvbnRhaW5lckhlaWdodC5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpID4gdGhpcy5zb3VyY2VIZWlnaHQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVySGVpZ2h0LmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=