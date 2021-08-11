/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class SelectOptionsCords {
    /**
     * @param {?} element
     * @param {?} selectContainerGeometry
     * @param {?} window
     */
    constructor(element, selectContainerGeometry, window) {
        this.element = element;
        this.selectContainerGeometry = selectContainerGeometry;
        this.window = window;
        this.calculateCords(element, selectContainerGeometry);
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
     * @return {?}
     */
    getCanOpenUpward() {
        return this.canOpenUpward;
    }
    /**
     * @private
     * @param {?} element
     * @param {?} selectOptionsGeometry
     * @return {?}
     */
    calculateCords(element, selectOptionsGeometry) {
        /** @type {?} */
        const elementRect = element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const elementBottom = this.window.pageYOffset + elementRect.bottom;
        /** @type {?} */
        const elementLeft = this.window.pageXOffset + elementRect.left;
        this.horizontalPosition = elementLeft;
        this.verticalPosition = elementBottom - SelectOptionsCords.BORDER_WIDTH;
        this.calculateDirection(selectOptionsGeometry, element);
    }
    /**
     * @private
     * @param {?} selectOptionsGeometry
     * @param {?} element
     * @return {?}
     */
    calculateDirection(selectOptionsGeometry, element) {
        /** @type {?} */
        const windowHeight = this.window.innerHeight + this.window.pageYOffset;
        /** @type {?} */
        const elementHeight = element.nativeElement.offsetHeight;
        /** @type {?} */
        const selectOptionsHeight = selectOptionsGeometry.getHeight();
        /** @type {?} */
        const selectOptionsDoesNotFitVertically = (windowHeight - this.verticalPosition - selectOptionsHeight) < 0;
        if (selectOptionsDoesNotFitVertically) {
            this.canOpenUpward = true;
            this.verticalPosition -= selectOptionsHeight + elementHeight - SelectOptionsCords.BORDER_WIDTH;
        }
    }
}
SelectOptionsCords.BORDER_WIDTH = 1;
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.BORDER_WIDTH;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.prototype.verticalPosition;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.prototype.horizontalPosition;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.prototype.canOpenUpward;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.prototype.element;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.prototype.selectContainerGeometry;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.prototype.window;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMuY29yZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL3NlbGVjdC9vcHRpb25zL3NlbGVjdC1vcHRpb25zLmNvcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFTOUIsWUFBNkIsT0FBbUIsRUFDNUIsdUJBQThDLEVBQzlDLE1BQWM7UUFGTCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQzVCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBdUI7UUFDOUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7SUFFTyxjQUFjLENBQUMsT0FBbUIsRUFBRSxxQkFBNEM7O2NBRWpGLFdBQVcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFOztjQUNoRSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU07O2NBQzVELFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSTtRQUV6RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMscUJBQTRDLEVBQUUsT0FBbUI7O2NBQ3JGLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7O2NBQ3JFLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVk7O2NBQ2xELG1CQUFtQixHQUFHLHFCQUFxQixDQUFDLFNBQVMsRUFBRTs7Y0FFbEQsaUNBQWlDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLEdBQUcsQ0FBQztRQUUxRyxJQUFJLGlDQUFpQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxtQkFBbUIsR0FBRyxhQUFhLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDO1NBQy9GO0lBQ0YsQ0FBQzs7QUFoRHVCLCtCQUFZLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7SUFBekMsZ0NBQXlDOzs7OztJQUV6Qyw4Q0FBaUM7Ozs7O0lBRWpDLGdEQUFtQzs7Ozs7SUFFbkMsMkNBQStCOzs7OztJQUVuQixxQ0FBb0M7Ozs7O0lBQzdDLHFEQUErRDs7Ozs7SUFDL0Qsb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZWN0T3B0aW9uc0dlb21ldHJ5IH0gZnJvbSAnLi9zZWxlY3QtZ2VvbWV0cnknO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0T3B0aW9uc0NvcmRzIHtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQk9SREVSX1dJRFRIID0gMTtcblxuXHRwcml2YXRlIHZlcnRpY2FsUG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIGhvcml6b250YWxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgY2FuT3BlblVwd2FyZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0Q29udGFpbmVyR2VvbWV0cnk6IFNlbGVjdE9wdGlvbnNHZW9tZXRyeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB3aW5kb3c6IFdpbmRvdykge1xuXHRcdHRoaXMuY2FsY3VsYXRlQ29yZHMoZWxlbWVudCwgc2VsZWN0Q29udGFpbmVyR2VvbWV0cnkpO1xuXHR9XG5cblx0Z2V0VmVydGljYWxQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsUG9zaXRpb247XG5cdH1cblxuXHRnZXRIb3Jpem9udGFsUG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5ob3Jpem9udGFsUG9zaXRpb247XG5cdH1cblxuXHRnZXRDYW5PcGVuVXB3YXJkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNhbk9wZW5VcHdhcmQ7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNvcmRzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHNlbGVjdE9wdGlvbnNHZW9tZXRyeTogU2VsZWN0T3B0aW9uc0dlb21ldHJ5KTogdm9pZCB7XG5cblx0XHRjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHRcdGVsZW1lbnRCb3R0b20gPSB0aGlzLndpbmRvdy5wYWdlWU9mZnNldCArIGVsZW1lbnRSZWN0LmJvdHRvbSxcblx0XHRcdGVsZW1lbnRMZWZ0ID0gdGhpcy53aW5kb3cucGFnZVhPZmZzZXQgKyBlbGVtZW50UmVjdC5sZWZ0O1xuXG5cdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBlbGVtZW50TGVmdDtcblx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBlbGVtZW50Qm90dG9tIC0gU2VsZWN0T3B0aW9uc0NvcmRzLkJPUkRFUl9XSURUSDtcblx0XHR0aGlzLmNhbGN1bGF0ZURpcmVjdGlvbihzZWxlY3RPcHRpb25zR2VvbWV0cnksIGVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVEaXJlY3Rpb24oc2VsZWN0T3B0aW9uc0dlb21ldHJ5OiBTZWxlY3RPcHRpb25zR2VvbWV0cnksIGVsZW1lbnQ6IEVsZW1lbnRSZWYpOiB2b2lkIHtcblx0XHRjb25zdCB3aW5kb3dIZWlnaHQgPSB0aGlzLndpbmRvdy5pbm5lckhlaWdodCArIHRoaXMud2luZG93LnBhZ2VZT2Zmc2V0LFxuXHRcdFx0ZWxlbWVudEhlaWdodCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXG5cdFx0XHRzZWxlY3RPcHRpb25zSGVpZ2h0ID0gc2VsZWN0T3B0aW9uc0dlb21ldHJ5LmdldEhlaWdodCgpO1xuXG5cdFx0Y29uc3Qgc2VsZWN0T3B0aW9uc0RvZXNOb3RGaXRWZXJ0aWNhbGx5ID0gKHdpbmRvd0hlaWdodCAtIHRoaXMudmVydGljYWxQb3NpdGlvbiAtIHNlbGVjdE9wdGlvbnNIZWlnaHQpIDwgMDtcblxuXHRcdGlmIChzZWxlY3RPcHRpb25zRG9lc05vdEZpdFZlcnRpY2FsbHkpIHtcblx0XHRcdHRoaXMuY2FuT3BlblVwd2FyZCA9IHRydWU7XG5cdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gLT0gc2VsZWN0T3B0aW9uc0hlaWdodCArIGVsZW1lbnRIZWlnaHQgLSBTZWxlY3RPcHRpb25zQ29yZHMuQk9SREVSX1dJRFRIO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=