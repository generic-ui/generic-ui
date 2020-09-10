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
    getVisibleContainerHeight() {
        return this.getHeight();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmNvbnRhaW5lci1oZWlnaHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24vY29udGFpbmVyL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb250YWluZXItaGVpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztJQUcvQyxnQ0FBZ0MsU0FBaEMsZ0NBQWdDO0lBRDdDO1FBR1Msb0JBQWUsR0FBcUIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBZ0Q5RCxDQUFDOzs7O0lBNUNBLHVDQUF1QztRQUN0QyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDTixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7OztJQUVELHlCQUF5QjtRQUN4QixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsU0FBUztRQUVSLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsTUFBYztRQUVoQyxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBYztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUM1QixDQUFDOzs7OztJQUVPLGtCQUFrQjtRQUV6QixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN6QjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLDBCQUEwQixFQUFFLENBQUM7U0FDekQ7SUFDRixDQUFDO0NBQ0QsQ0FBQTtBQWxEWSxnQ0FBZ0M7SUFENUMsWUFBWTtHQUNBLGdDQUFnQyxDQWtENUM7U0FsRFksZ0NBQWdDOzs7Ozs7SUFFNUMsMkRBQTZEOzs7OztJQUU3RCx3REFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5PYmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQERvbWFpbk9iamVjdFxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uQ29udGFpbmVySGVpZ2h0IHtcblxuXHRwcml2YXRlIGNvbnRhaW5lckhlaWdodDogT3B0aW9uYWw8bnVtYmVyPiA9IE9wdGlvbmFsLmVtcHR5KCk7XG5cblx0cHJpdmF0ZSBzb3VyY2VIZWlnaHQ6IG51bWJlcjtcblxuXHRpc0NvbnRhaW5lckhlaWdodFByb3BlckZvclZpcnR1YWxTY3JvbGwoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuY29udGFpbmVySGVpZ2h0LmlzUHJlc2VudCgpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb250YWluZXJIZWlnaHQuZ2V0VmFsdWVPck51bGxPclRocm93RXJyb3IoKSA+IDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRnZXRWaXNpYmxlQ29udGFpbmVySGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0SGVpZ2h0KCk7XG5cdH1cblxuXHRnZXRIZWlnaHQoKTogbnVtYmVyIHtcblxuXHRcdGlmICh0aGlzLmNvbnRhaW5lckhlaWdodC5pc1ByZXNlbnQoKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVySGVpZ2h0KCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuc291cmNlSGVpZ2h0O1xuXHR9XG5cblx0Z2V0U291cmNlSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlSGVpZ2h0O1xuXHR9XG5cblx0c2V0Q29udGFpbmVySGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRpZiAoaGVpZ2h0ID49IDApIHtcblx0XHRcdHRoaXMuY29udGFpbmVySGVpZ2h0ID0gT3B0aW9uYWwub2YoaGVpZ2h0KTtcblx0XHR9XG5cdH1cblxuXHRzZXRTb3VyY2VTaXplKGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VIZWlnaHQgPSBoZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIGdldENvbnRhaW5lckhlaWdodCgpOiBudW1iZXIge1xuXG5cdFx0aWYgKHRoaXMuY29udGFpbmVySGVpZ2h0LmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCkgPiB0aGlzLnNvdXJjZUhlaWdodCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc291cmNlSGVpZ2h0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb250YWluZXJIZWlnaHQuZ2V0VmFsdWVPck51bGxPclRocm93RXJyb3IoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==