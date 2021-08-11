/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FabricPlacement } from './fabric-placement';
import { FabricGeometry } from './fabric-geometry';
/**
 * @abstract
 */
export class FabricCords extends FabricGeometry {
    /**
     * @protected
     * @param {?} window
     * @param {?} invokerElementRef
     * @param {?} invokedElementRef
     * @param {?} containerClassName
     * @param {?} placement
     * @param {?=} offset
     */
    constructor(window, invokerElementRef, invokedElementRef, containerClassName, placement, offset) {
        super(invokedElementRef, containerClassName);
        this.calculateCords(window, invokerElementRef, placement, offset);
    }
    /**
     * @return {?}
     */
    getVerticalPosition() {
        return this.verticalPosition;
    }
    /**
     * @return {?}
     */
    getHorizontalPosition() {
        return this.horizontalPosition;
    }
    /**
     * @private
     * @param {?} window
     * @param {?} invokerElementRef
     * @param {?} placement
     * @param {?} offset
     * @return {?}
     */
    calculateCords(window, invokerElementRef, placement, offset) {
        /** @type {?} */
        const elementRect = invokerElementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const elementBottom = window.pageYOffset + elementRect.bottom;
        /** @type {?} */
        const elementLeft = window.pageXOffset + elementRect.left;
        /** @type {?} */
        const elementRight = window.pageXOffset + elementRect.right;
        /** @type {?} */
        const elementTop = window.pageYOffset + elementRect.top;
        /** @type {?} */
        const topCords = elementTop + offset - this.getHeight();
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
    }
    /**
     * @private
     * @param {?} invokerElementRef
     * @param {?} window
     * @param {?} topCords
     * @return {?}
     */
    calculateDirection(invokerElementRef, window, topCords) {
        /** @type {?} */
        const windowHeightWithOffset = window.innerHeight + window.pageYOffset;
        /** @type {?} */
        const windowWidthWithOffset = window.innerWidth + window.pageXOffset;
        /** @type {?} */
        const invokerElementWidth = invokerElementRef.nativeElement.offsetWidth;
        /** @type {?} */
        const invokedElementHeight = this.getHeight();
        /** @type {?} */
        const invokedElementWidth = this.getWidth();
        /** @type {?} */
        const invokedElementDoesNotFitHorizontally = (windowWidthWithOffset - this.horizontalPosition - invokedElementWidth) < 0;
        /** @type {?} */
        const invokedElementDoesNotFitVertically = (windowHeightWithOffset - this.verticalPosition - invokedElementHeight) < 0;
        if (invokedElementDoesNotFitHorizontally) {
            this.horizontalPosition -= invokedElementWidth - invokerElementWidth;
        }
        if (invokedElementDoesNotFitVertically) {
            this.verticalPosition = topCords;
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWNvcmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiY29tbW9uL21vZGFsL2NvcmRzL2ZhYnJpYy1jb3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVuRCxNQUFNLE9BQWdCLFdBQVksU0FBUSxjQUFjOzs7Ozs7Ozs7O0lBTXZELFlBQXNCLE1BQWMsRUFDN0IsaUJBQTZCLEVBQzdCLGlCQUE2QixFQUM3QixrQkFBMEIsRUFDMUIsU0FBMEIsRUFDMUIsTUFBZTtRQUNyQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQscUJBQXFCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7OztJQUVPLGNBQWMsQ0FBQyxNQUFjLEVBQzdCLGlCQUE2QixFQUM3QixTQUEwQixFQUMxQixNQUFjOztjQUVmLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O2NBQzFFLGFBQWEsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNOztjQUN2RCxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSTs7Y0FDbkQsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUs7O2NBQ3JELFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHOztjQUNqRCxRQUFRLEdBQUcsVUFBVSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBRWxELFFBQVEsU0FBUyxFQUFFO1lBRWxCLEtBQUssZUFBZSxDQUFDLE1BQU07Z0JBQzFCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLEdBQUcsTUFBTSxDQUFDO2dCQUMvQyxNQUFNO1lBRVAsS0FBSyxlQUFlLENBQUMsR0FBRztnQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztnQkFDakMsTUFBTTtZQUVQLEtBQUssZUFBZSxDQUFDLE1BQU07Z0JBQzFCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQztnQkFDdEMsTUFBTTtZQUVQLEtBQUssZUFBZSxDQUFDLEtBQUs7Z0JBQ3pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLEdBQUcsTUFBTSxDQUFDO2dCQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDO2dCQUN0QyxNQUFNO1lBRVA7Z0JBQ0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsR0FBRyxNQUFNLENBQUM7U0FDaEQ7UUFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsaUJBQTZCLEVBQUUsTUFBYyxFQUFFLFFBQWdCOztjQUNuRixzQkFBc0IsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXOztjQUNyRSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFXOztjQUM5RCxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsV0FBVzs7Y0FDakUsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTs7Y0FDdkMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTs7Y0FFaEMsb0NBQW9DLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsbUJBQW1CLENBQUMsR0FBRyxDQUFDOztjQUN2SCxrQ0FBa0MsR0FBRyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7UUFFakgsSUFBSSxvQ0FBb0MsRUFBRTtZQUN6QyxJQUFJLENBQUMsa0JBQWtCLElBQUksbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7U0FDckU7UUFFRCxJQUFJLGtDQUFrQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7U0FDakM7SUFDRixDQUFDO0NBQ0Q7Ozs7OztJQWxGQSx1Q0FBaUM7Ozs7O0lBRWpDLHlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY1BsYWNlbWVudCB9IGZyb20gJy4vZmFicmljLXBsYWNlbWVudCc7XG5pbXBvcnQgeyBGYWJyaWNHZW9tZXRyeSB9IGZyb20gJy4vZmFicmljLWdlb21ldHJ5JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhYnJpY0NvcmRzIGV4dGVuZHMgRmFicmljR2VvbWV0cnkge1xuXG5cdHByaXZhdGUgdmVydGljYWxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgaG9yaXpvbnRhbFBvc2l0aW9uOiBudW1iZXI7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHdpbmRvdzogV2luZG93LFxuXHRcdFx0XHRcdFx0ICBpbnZva2VyRWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0XHRcdCAgaW52b2tlZEVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0XHQgIGNvbnRhaW5lckNsYXNzTmFtZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ICBwbGFjZW1lbnQ6IEZhYnJpY1BsYWNlbWVudCxcblx0XHRcdFx0XHRcdCAgb2Zmc2V0PzogbnVtYmVyKSB7XG5cdFx0c3VwZXIoaW52b2tlZEVsZW1lbnRSZWYsIGNvbnRhaW5lckNsYXNzTmFtZSk7XG5cdFx0dGhpcy5jYWxjdWxhdGVDb3Jkcyh3aW5kb3csIGludm9rZXJFbGVtZW50UmVmLCBwbGFjZW1lbnQsIG9mZnNldCk7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxQb3NpdGlvbjtcblx0fVxuXG5cdGdldEhvcml6b250YWxQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhvcml6b250YWxQb3NpdGlvbjtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQ29yZHMod2luZG93OiBXaW5kb3csXG5cdFx0XHRcdFx0XHQgICBpbnZva2VyRWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0XHRcdCAgIHBsYWNlbWVudDogRmFicmljUGxhY2VtZW50LFxuXHRcdFx0XHRcdFx0ICAgb2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGVsZW1lbnRSZWN0ID0gaW52b2tlckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHRcdGVsZW1lbnRCb3R0b20gPSB3aW5kb3cucGFnZVlPZmZzZXQgKyBlbGVtZW50UmVjdC5ib3R0b20sXG5cdFx0XHRlbGVtZW50TGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCArIGVsZW1lbnRSZWN0LmxlZnQsXG5cdFx0XHRlbGVtZW50UmlnaHQgPSB3aW5kb3cucGFnZVhPZmZzZXQgKyBlbGVtZW50UmVjdC5yaWdodCxcblx0XHRcdGVsZW1lbnRUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgKyBlbGVtZW50UmVjdC50b3AsXG5cdFx0XHR0b3BDb3JkcyA9IGVsZW1lbnRUb3AgKyBvZmZzZXQgLSB0aGlzLmdldEhlaWdodCgpO1xuXG5cdFx0c3dpdGNoIChwbGFjZW1lbnQpIHtcblxuXHRcdFx0Y2FzZSBGYWJyaWNQbGFjZW1lbnQuQk9UVE9NOlxuXHRcdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IGVsZW1lbnRMZWZ0O1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBlbGVtZW50Qm90dG9tICsgb2Zmc2V0O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNQbGFjZW1lbnQuVE9QOlxuXHRcdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IGVsZW1lbnRMZWZ0O1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSB0b3BDb3Jkcztcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljUGxhY2VtZW50LkJFRk9SRTpcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBlbGVtZW50UmlnaHQgKyBvZmZzZXQgLSB0aGlzLmdldFdpZHRoKCk7XG5cdFx0XHRcdHRoaXMudmVydGljYWxQb3NpdGlvbiA9IGVsZW1lbnRCb3R0b207XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY1BsYWNlbWVudC5BRlRFUjpcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBlbGVtZW50TGVmdCArIG9mZnNldDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudEJvdHRvbTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQgOlxuXHRcdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IGVsZW1lbnRMZWZ0O1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBlbGVtZW50Qm90dG9tICsgb2Zmc2V0O1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlRGlyZWN0aW9uKGludm9rZXJFbGVtZW50UmVmLCB3aW5kb3csIHRvcENvcmRzKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlRGlyZWN0aW9uKGludm9rZXJFbGVtZW50UmVmOiBFbGVtZW50UmVmLCB3aW5kb3c6IFdpbmRvdywgdG9wQ29yZHM6IG51bWJlcik6IHZvaWQge1xuXHRcdGNvbnN0IHdpbmRvd0hlaWdodFdpdGhPZmZzZXQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG5cdFx0XHR3aW5kb3dXaWR0aFdpdGhPZmZzZXQgPSB3aW5kb3cuaW5uZXJXaWR0aCArIHdpbmRvdy5wYWdlWE9mZnNldCxcblx0XHRcdGludm9rZXJFbGVtZW50V2lkdGggPSBpbnZva2VyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxuXHRcdFx0aW52b2tlZEVsZW1lbnRIZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuXHRcdFx0aW52b2tlZEVsZW1lbnRXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcblxuXHRcdGNvbnN0IGludm9rZWRFbGVtZW50RG9lc05vdEZpdEhvcml6b250YWxseSA9ICh3aW5kb3dXaWR0aFdpdGhPZmZzZXQgLSB0aGlzLmhvcml6b250YWxQb3NpdGlvbiAtIGludm9rZWRFbGVtZW50V2lkdGgpIDwgMCxcblx0XHRcdGludm9rZWRFbGVtZW50RG9lc05vdEZpdFZlcnRpY2FsbHkgPSAod2luZG93SGVpZ2h0V2l0aE9mZnNldCAtIHRoaXMudmVydGljYWxQb3NpdGlvbiAtIGludm9rZWRFbGVtZW50SGVpZ2h0KSA8IDA7XG5cblx0XHRpZiAoaW52b2tlZEVsZW1lbnREb2VzTm90Rml0SG9yaXpvbnRhbGx5KSB7XG5cdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiAtPSBpbnZva2VkRWxlbWVudFdpZHRoIC0gaW52b2tlckVsZW1lbnRXaWR0aDtcblx0XHR9XG5cblx0XHRpZiAoaW52b2tlZEVsZW1lbnREb2VzTm90Rml0VmVydGljYWxseSkge1xuXHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gdG9wQ29yZHM7XG5cdFx0fVxuXHR9XG59XG4iXX0=