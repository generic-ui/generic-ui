/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FabricPlacement } from './fabric-placement';
import { FabricGeometry } from './fabric-geometry';
/**
 * @abstract
 */
var /**
 * @abstract
 */
FabricCords = /** @class */ (function (_super) {
    tslib_1.__extends(FabricCords, _super);
    function FabricCords(window, invokerElementRef, invokedElementRef, containerClassName, placement, offset) {
        var _this = _super.call(this, invokedElementRef, containerClassName) || this;
        _this.calculateCords(window, invokerElementRef, placement, offset);
        return _this;
    }
    /**
     * @return {?}
     */
    FabricCords.prototype.getVerticalPosition = /**
     * @return {?}
     */
    function () {
        return this.verticalPosition;
    };
    /**
     * @return {?}
     */
    FabricCords.prototype.getHorizontalPosition = /**
     * @return {?}
     */
    function () {
        return this.horizontalPosition;
    };
    /**
     * @private
     * @param {?} window
     * @param {?} invokerElementRef
     * @param {?} placement
     * @param {?} offset
     * @return {?}
     */
    FabricCords.prototype.calculateCords = /**
     * @private
     * @param {?} window
     * @param {?} invokerElementRef
     * @param {?} placement
     * @param {?} offset
     * @return {?}
     */
    function (window, invokerElementRef, placement, offset) {
        /** @type {?} */
        var elementRect = invokerElementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var elementBottom = window.pageYOffset + elementRect.bottom;
        /** @type {?} */
        var elementLeft = window.pageXOffset + elementRect.left;
        /** @type {?} */
        var elementRight = window.pageXOffset + elementRect.right;
        /** @type {?} */
        var elementTop = window.pageYOffset + elementRect.top;
        /** @type {?} */
        var topCords = elementTop + offset - this.getHeight();
        switch (placement) {
            case FabricPlacement.BOTTOM:
                this.horizontalPosition = elementLeft;
                this.verticalPosition = elementBottom + offset;
                break;
            case FabricPlacement.TOP:
                this.horizontalPosition = elementLeft;
                this.verticalPosition = topCords;
                break;
            case FabricPlacement.BEFORE:
                this.horizontalPosition = elementRight + offset - this.getWidth();
                this.verticalPosition = elementBottom;
                break;
            case FabricPlacement.AFTER:
                this.horizontalPosition = elementLeft + offset;
                this.verticalPosition = elementBottom;
                break;
            default:
                this.horizontalPosition = elementLeft;
                this.verticalPosition = elementBottom + offset;
        }
        this.calculateDirection(invokerElementRef, window, topCords);
    };
    /**
     * @private
     * @param {?} invokerElementRef
     * @param {?} window
     * @param {?} topCords
     * @return {?}
     */
    FabricCords.prototype.calculateDirection = /**
     * @private
     * @param {?} invokerElementRef
     * @param {?} window
     * @param {?} topCords
     * @return {?}
     */
    function (invokerElementRef, window, topCords) {
        /** @type {?} */
        var windowHeightWithOffset = window.innerHeight + window.pageYOffset;
        /** @type {?} */
        var windowWidthWithOffset = window.innerWidth + window.pageXOffset;
        /** @type {?} */
        var invokerElementWidth = invokerElementRef.nativeElement.offsetWidth;
        /** @type {?} */
        var invokedElementHeight = this.getHeight();
        /** @type {?} */
        var invokedElementWidth = this.getWidth();
        /** @type {?} */
        var invokedElementDoesNotFitHorizontally = (windowWidthWithOffset - this.horizontalPosition - invokedElementWidth) < 0;
        /** @type {?} */
        var invokedElementDoesNotFitVertically = (windowHeightWithOffset - this.verticalPosition - invokedElementHeight) < 0;
        if (invokedElementDoesNotFitHorizontally) {
            this.horizontalPosition -= invokedElementWidth - invokerElementWidth;
        }
        if (invokedElementDoesNotFitVertically) {
            this.verticalPosition = topCords;
        }
    };
    return FabricCords;
}(FabricGeometry));
/**
 * @abstract
 */
export { FabricCords };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricCords.prototype.verticalPosition;
    /**
     * @type {?}
     * @private
     */
    FabricCords.prototype.horizontalPosition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWNvcmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiY29tbW9uL21vZGFsL2NvcmRzL2ZhYnJpYy1jb3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFbkQ7Ozs7SUFBMEMsdUNBQWM7SUFNdkQscUJBQXNCLE1BQWMsRUFDN0IsaUJBQTZCLEVBQzdCLGlCQUE2QixFQUM3QixrQkFBMEIsRUFDMUIsU0FBMEIsRUFDMUIsTUFBZTtRQUx0QixZQU1DLGtCQUFNLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLFNBRTVDO1FBREEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztJQUNuRSxDQUFDOzs7O0lBRUQseUNBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsMkNBQXFCOzs7SUFBckI7UUFDQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7Ozs7SUFFTyxvQ0FBYzs7Ozs7Ozs7SUFBdEIsVUFBdUIsTUFBYyxFQUM3QixpQkFBNkIsRUFDN0IsU0FBMEIsRUFDMUIsTUFBYzs7WUFFZixXQUFXLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFOztZQUMxRSxhQUFhLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTTs7WUFDdkQsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUk7O1lBQ25ELFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLOztZQUNyRCxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRzs7WUFDakQsUUFBUSxHQUFHLFVBQVUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUVsRCxRQUFRLFNBQVMsRUFBRTtZQUVsQixLQUFLLGVBQWUsQ0FBQyxNQUFNO2dCQUMxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxHQUFHLE1BQU0sQ0FBQztnQkFDL0MsTUFBTTtZQUVQLEtBQUssZUFBZSxDQUFDLEdBQUc7Z0JBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7Z0JBQ2pDLE1BQU07WUFFUCxLQUFLLGVBQWUsQ0FBQyxNQUFNO2dCQUMxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsWUFBWSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7Z0JBQ3RDLE1BQU07WUFFUCxLQUFLLGVBQWUsQ0FBQyxLQUFLO2dCQUN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxHQUFHLE1BQU0sQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQztnQkFDdEMsTUFBTTtZQUVQO2dCQUNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLEdBQUcsTUFBTSxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7OztJQUVPLHdDQUFrQjs7Ozs7OztJQUExQixVQUEyQixpQkFBNkIsRUFBRSxNQUFjLEVBQUUsUUFBZ0I7O1lBQ25GLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVc7O1lBQ3JFLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVc7O1lBQzlELG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxXQUFXOztZQUNqRSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFOztZQUN2QyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFOztZQUVoQyxvQ0FBb0MsR0FBRyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLENBQUM7O1lBQ3ZILGtDQUFrQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztRQUVqSCxJQUFJLG9DQUFvQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztTQUNyRTtRQUVELElBQUksa0NBQWtDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztTQUNqQztJQUNGLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUFwRkQsQ0FBMEMsY0FBYyxHQW9GdkQ7Ozs7Ozs7Ozs7SUFsRkEsdUNBQWlDOzs7OztJQUVqQyx5Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNQbGFjZW1lbnQgfSBmcm9tICcuL2ZhYnJpYy1wbGFjZW1lbnQnO1xuaW1wb3J0IHsgRmFicmljR2VvbWV0cnkgfSBmcm9tICcuL2ZhYnJpYy1nZW9tZXRyeSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWJyaWNDb3JkcyBleHRlbmRzIEZhYnJpY0dlb21ldHJ5IHtcblxuXHRwcml2YXRlIHZlcnRpY2FsUG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIGhvcml6b250YWxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih3aW5kb3c6IFdpbmRvdyxcblx0XHRcdFx0XHRcdCAgaW52b2tlckVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0XHQgIGludm9rZWRFbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRcdFx0ICBjb250YWluZXJDbGFzc05hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdCAgcGxhY2VtZW50OiBGYWJyaWNQbGFjZW1lbnQsXG5cdFx0XHRcdFx0XHQgIG9mZnNldD86IG51bWJlcikge1xuXHRcdHN1cGVyKGludm9rZWRFbGVtZW50UmVmLCBjb250YWluZXJDbGFzc05hbWUpO1xuXHRcdHRoaXMuY2FsY3VsYXRlQ29yZHMod2luZG93LCBpbnZva2VyRWxlbWVudFJlZiwgcGxhY2VtZW50LCBvZmZzZXQpO1xuXHR9XG5cblx0Z2V0VmVydGljYWxQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsUG9zaXRpb247XG5cdH1cblxuXHRnZXRIb3Jpem9udGFsUG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5ob3Jpem9udGFsUG9zaXRpb247XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNvcmRzKHdpbmRvdzogV2luZG93LFxuXHRcdFx0XHRcdFx0ICAgaW52b2tlckVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0XHQgICBwbGFjZW1lbnQ6IEZhYnJpY1BsYWNlbWVudCxcblx0XHRcdFx0XHRcdCAgIG9mZnNldDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBlbGVtZW50UmVjdCA9IGludm9rZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRlbGVtZW50Qm90dG9tID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgZWxlbWVudFJlY3QuYm90dG9tLFxuXHRcdFx0ZWxlbWVudExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgKyBlbGVtZW50UmVjdC5sZWZ0LFxuXHRcdFx0ZWxlbWVudFJpZ2h0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICsgZWxlbWVudFJlY3QucmlnaHQsXG5cdFx0XHRlbGVtZW50VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgZWxlbWVudFJlY3QudG9wLFxuXHRcdFx0dG9wQ29yZHMgPSBlbGVtZW50VG9wICsgb2Zmc2V0IC0gdGhpcy5nZXRIZWlnaHQoKTtcblxuXHRcdHN3aXRjaCAocGxhY2VtZW50KSB7XG5cblx0XHRcdGNhc2UgRmFicmljUGxhY2VtZW50LkJPVFRPTTpcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBlbGVtZW50TGVmdDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudEJvdHRvbSArIG9mZnNldDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljUGxhY2VtZW50LlRPUDpcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBlbGVtZW50TGVmdDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gdG9wQ29yZHM7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY1BsYWNlbWVudC5CRUZPUkU6XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gZWxlbWVudFJpZ2h0ICsgb2Zmc2V0IC0gdGhpcy5nZXRXaWR0aCgpO1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBlbGVtZW50Qm90dG9tO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNQbGFjZW1lbnQuQUZURVI6XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gZWxlbWVudExlZnQgKyBvZmZzZXQ7XG5cdFx0XHRcdHRoaXMudmVydGljYWxQb3NpdGlvbiA9IGVsZW1lbnRCb3R0b207XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0IDpcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBlbGVtZW50TGVmdDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudEJvdHRvbSArIG9mZnNldDtcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZURpcmVjdGlvbihpbnZva2VyRWxlbWVudFJlZiwgd2luZG93LCB0b3BDb3Jkcyk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZURpcmVjdGlvbihpbnZva2VyRWxlbWVudFJlZjogRWxlbWVudFJlZiwgd2luZG93OiBXaW5kb3csIHRvcENvcmRzOiBudW1iZXIpOiB2b2lkIHtcblx0XHRjb25zdCB3aW5kb3dIZWlnaHRXaXRoT2Zmc2V0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnBhZ2VZT2Zmc2V0LFxuXHRcdFx0d2luZG93V2lkdGhXaXRoT2Zmc2V0ID0gd2luZG93LmlubmVyV2lkdGggKyB3aW5kb3cucGFnZVhPZmZzZXQsXG5cdFx0XHRpbnZva2VyRWxlbWVudFdpZHRoID0gaW52b2tlckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCxcblx0XHRcdGludm9rZWRFbGVtZW50SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcblx0XHRcdGludm9rZWRFbGVtZW50V2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG5cblx0XHRjb25zdCBpbnZva2VkRWxlbWVudERvZXNOb3RGaXRIb3Jpem9udGFsbHkgPSAod2luZG93V2lkdGhXaXRoT2Zmc2V0IC0gdGhpcy5ob3Jpem9udGFsUG9zaXRpb24gLSBpbnZva2VkRWxlbWVudFdpZHRoKSA8IDAsXG5cdFx0XHRpbnZva2VkRWxlbWVudERvZXNOb3RGaXRWZXJ0aWNhbGx5ID0gKHdpbmRvd0hlaWdodFdpdGhPZmZzZXQgLSB0aGlzLnZlcnRpY2FsUG9zaXRpb24gLSBpbnZva2VkRWxlbWVudEhlaWdodCkgPCAwO1xuXG5cdFx0aWYgKGludm9rZWRFbGVtZW50RG9lc05vdEZpdEhvcml6b250YWxseSkge1xuXHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gLT0gaW52b2tlZEVsZW1lbnRXaWR0aCAtIGludm9rZXJFbGVtZW50V2lkdGg7XG5cdFx0fVxuXG5cdFx0aWYgKGludm9rZWRFbGVtZW50RG9lc05vdEZpdFZlcnRpY2FsbHkpIHtcblx0XHRcdHRoaXMudmVydGljYWxQb3NpdGlvbiA9IHRvcENvcmRzO1xuXHRcdH1cblx0fVxufVxuIl19