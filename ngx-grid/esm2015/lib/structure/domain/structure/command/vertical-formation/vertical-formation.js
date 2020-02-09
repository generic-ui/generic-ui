/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { VerticalRange } from './vertical-range';
export class VerticalFormation {
    /**
     * @param {?=} enabled
     * @param {?=} viewportHeight
     * @param {?=} sourceSize
     * @param {?=} scrollPosition
     * @param {?=} rowHeight
     * @param {?=} hiddenItemsTop
     * @param {?=} hiddenItemsBottom
     */
    constructor(enabled = false, viewportHeight = 0, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        this.enabled = enabled;
        this.rowHeight = 30;
        this.hiddenItemsTop = 0;
        this.hiddenItemsBottom = 1;
        this.viewportHeight = viewportHeight;
        this.sourceSize = sourceSize;
        this.scrollPosition = scrollPosition;
        if (Number.isInteger(rowHeight)) {
            this.rowHeight = rowHeight;
        }
        if (Number.isInteger(hiddenItemsTop)) {
            this.hiddenItemsTop = hiddenItemsTop;
        }
        if (Number.isInteger(hiddenItemsBottom)) {
            this.hiddenItemsBottom = hiddenItemsBottom;
        }
        this.calculateRange();
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled &&
            this.viewportHeight > 0 &&
            this.sourceSize > 0;
    }
    /**
     * @return {?}
     */
    getRowHeight() {
        return this.rowHeight;
    }
    /**
     * @return {?}
     */
    getRange() {
        return this.range;
    }
    /**
     * @return {?}
     */
    getTopMargin() {
        return this.range.getStart() * this.rowHeight;
    }
    /**
     * @return {?}
     */
    calculateRange() {
        if (this.calcFullHeight() <= this.viewportHeight) {
            this.range = new VerticalRange(0, this.sourceSize);
            return;
        }
        /** @type {?} */
        const itemsInViewport = Math.floor(this.viewportHeight / this.rowHeight);
        /** @type {?} */
        const hiddenElements = Math.floor(this.scrollPosition / this.rowHeight);
        /** @type {?} */
        const topMargin = Math.abs(hiddenElements - this.hiddenItemsTop) * this.rowHeight;
        /** @type {?} */
        let start = (hiddenElements - this.hiddenItemsTop);
        /** @type {?} */
        const viewportElements = Math.ceil(this.viewportHeight / this.rowHeight);
        /** @type {?} */
        let end = start + viewportElements + this.hiddenItemsBottom;
        if (end > this.sourceSize) {
            end = this.sourceSize;
            start = end - itemsInViewport;
        }
        this.range = new VerticalRange(start, end);
        return {
            start,
            end,
            topMargin
        };
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setEnabled(enabled) {
        this.enabled = enabled;
        // TODO dispatch aggregate event
        if (this.enabled && this.viewportHeight === 0) {
            this.logger.warn('Height needs to be specified in order for virtual scroll to work.');
        }
        this.calculateRange();
    }
    /**
     * @param {?=} sourceSize
     * @return {?}
     */
    setSourceSize(sourceSize = 0) {
        this.sourceSize = sourceSize;
        this.calculateRange();
    }
    /**
     * @param {?} count
     * @return {?}
     */
    setTopHiddenItemsCount(count) {
        this.hiddenItemsTop = count;
        this.calculateRange();
    }
    /**
     * @param {?} count
     * @return {?}
     */
    setBottomHiddenItemsCount(count) {
        this.hiddenItemsBottom = count;
        this.calculateRange();
    }
    /**
     * @param {?} scrollPosition
     * @return {?}
     */
    setScrollPosition(scrollPosition) {
        this.scrollPosition = scrollPosition;
        this.calculateRange();
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setViewportHeight(height) {
        this.viewportHeight = height;
        this.calculateRange();
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setRowHeight(height) {
        this.rowHeight = height;
        this.calculateRange();
    }
    /**
     * @param {?} logger
     * @return {?}
     */
    setLogger(logger) {
        this.logger = logger;
    }
    /**
     * @return {?}
     */
    calcFullHeight() {
        return this.sourceSize * this.rowHeight;
    }
    /**
     * @return {?}
     */
    getViewPortHeight() {
        return this.viewportHeight;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.rowHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.hiddenItemsTop;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.hiddenItemsBottom;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.viewportHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.scrollPosition;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.range;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.sourceSize;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7OztJQWtCN0IsWUFBb0IsVUFBbUIsS0FBSyxFQUN6QyxpQkFBeUIsQ0FBQyxFQUMxQixhQUFxQixDQUFDLEVBQ3RCLGlCQUF5QixDQUFDLEVBQzFCLFNBQWtCLEVBQ2xCLGNBQXVCLEVBQ3ZCLGlCQUEwQjtRQU5ULFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBaEJwQyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXZCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQW1CN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFFckMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLGNBQWMs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QWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBYztRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBYztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Q0FDRDs7Ozs7O0lBbEpBLHNDQUErQjs7Ozs7SUFFL0IsMkNBQTJCOzs7OztJQUUzQiw4Q0FBOEI7Ozs7O0lBRTlCLDJDQUErQjs7Ozs7SUFFL0IsMkNBQStCOzs7OztJQUUvQixrQ0FBNkI7Ozs7O0lBRTdCLHVDQUEyQjs7Ozs7SUFFM0IsbUNBQXVCOzs7OztJQUVYLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZlcnRpY2FsUmFuZ2UgfSBmcm9tICcuL3ZlcnRpY2FsLXJhbmdlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlcic7XG5cbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbiB7XG5cblx0cHJpdmF0ZSByb3dIZWlnaHQ6IG51bWJlciA9IDMwO1xuXG5cdHByaXZhdGUgaGlkZGVuSXRlbXNUb3AgPSAwO1xuXG5cdHByaXZhdGUgaGlkZGVuSXRlbXNCb3R0b20gPSAxO1xuXG5cdHByaXZhdGUgdmlld3BvcnRIZWlnaHQ6IG51bWJlcjtcblxuXHRwcml2YXRlIHNjcm9sbFBvc2l0aW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSByYW5nZTogVmVydGljYWxSYW5nZTtcblxuXHRwcml2YXRlIHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRwcml2YXRlIGxvZ2dlcjogTG9nZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHR2aWV3cG9ydEhlaWdodDogbnVtYmVyID0gMCxcblx0XHRcdFx0c291cmNlU2l6ZTogbnVtYmVyID0gMCxcblx0XHRcdFx0c2Nyb2xsUG9zaXRpb246IG51bWJlciA9IDAsXG5cdFx0XHRcdHJvd0hlaWdodD86IG51bWJlcixcblx0XHRcdFx0aGlkZGVuSXRlbXNUb3A/OiBudW1iZXIsXG5cdFx0XHRcdGhpZGRlbkl0ZW1zQm90dG9tPzogbnVtYmVyKSB7XG5cdFx0dGhpcy52aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0SGVpZ2h0O1xuXHRcdHRoaXMuc291cmNlU2l6ZSA9IHNvdXJjZVNpemU7XG5cdFx0dGhpcy5zY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuXG5cdFx0aWYgKE51bWJlci5pc0ludGVnZXIocm93SGVpZ2h0KSkge1xuXHRcdFx0dGhpcy5yb3dIZWlnaHQgPSByb3dIZWlnaHQ7XG5cdFx0fVxuXG5cdFx0aWYgKE51bWJlci5pc0ludGVnZXIoaGlkZGVuSXRlbXNUb3ApKSB7XG5cdFx0XHR0aGlzLmhpZGRlbkl0ZW1zVG9wID0gaGlkZGVuSXRlbXNUb3A7XG5cdFx0fVxuXG5cdFx0aWYgKE51bWJlci5pc0ludGVnZXIoaGlkZGVuSXRlbXNCb3R0b20pKSB7XG5cdFx0XHR0aGlzLmhpZGRlbkl0ZW1zQm90dG9tID0gaGlkZGVuSXRlbXNCb3R0b207XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZCAmJlxuXHRcdFx0dGhpcy52aWV3cG9ydEhlaWdodCA+IDAgJiZcblx0XHRcdHRoaXMuc291cmNlU2l6ZSA+IDA7XG5cdH1cblxuXHRnZXRSb3dIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxuXHRnZXRSYW5nZSgpOiBWZXJ0aWNhbFJhbmdlIHtcblx0XHRyZXR1cm4gdGhpcy5yYW5nZTtcblx0fVxuXG5cdGdldFRvcE1hcmdpbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJhbmdlLmdldFN0YXJ0KCkgKiB0aGlzLnJvd0hlaWdodDtcblx0fVxuXG5cdGNhbGN1bGF0ZVJhbmdlKCk6IGFueSB7XG5cblx0XHRpZiAodGhpcy5jYWxjRnVsbEhlaWdodCgpIDw9IHRoaXMudmlld3BvcnRIZWlnaHQpIHtcblx0XHRcdHRoaXMucmFuZ2UgPSBuZXcgVmVydGljYWxSYW5nZSgwLCB0aGlzLnNvdXJjZVNpemUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGl0ZW1zSW5WaWV3cG9ydCA9IE1hdGguZmxvb3IodGhpcy52aWV3cG9ydEhlaWdodCAvIHRoaXMucm93SGVpZ2h0KTtcblxuXHRcdGNvbnN0IGhpZGRlbkVsZW1lbnRzID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbFBvc2l0aW9uIC8gdGhpcy5yb3dIZWlnaHQpO1xuXG5cdFx0Y29uc3QgdG9wTWFyZ2luID0gTWF0aC5hYnMoaGlkZGVuRWxlbWVudHMgLSB0aGlzLmhpZGRlbkl0ZW1zVG9wKSAqIHRoaXMucm93SGVpZ2h0O1xuXG5cdFx0bGV0IHN0YXJ0ID0gKGhpZGRlbkVsZW1lbnRzIC0gdGhpcy5oaWRkZW5JdGVtc1RvcCk7XG5cblx0XHRjb25zdCB2aWV3cG9ydEVsZW1lbnRzID0gTWF0aC5jZWlsKHRoaXMudmlld3BvcnRIZWlnaHQgLyB0aGlzLnJvd0hlaWdodCk7XG5cblx0XHRsZXQgZW5kID0gc3RhcnQgKyB2aWV3cG9ydEVsZW1lbnRzICsgdGhpcy5oaWRkZW5JdGVtc0JvdHRvbTtcblxuXHRcdGlmIChlbmQgPiB0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdGVuZCA9IHRoaXMuc291cmNlU2l6ZTtcblx0XHRcdHN0YXJ0ID0gZW5kIC0gaXRlbXNJblZpZXdwb3J0O1xuXHRcdH1cblxuXHRcdHRoaXMucmFuZ2UgPSBuZXcgVmVydGljYWxSYW5nZShzdGFydCwgZW5kKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRzdGFydCxcblx0XHRcdGVuZCxcblx0XHRcdHRvcE1hcmdpblxuXHRcdH07XG5cdH1cblxuXHRzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXG5cdFx0Ly8gVE9ETyBkaXNwYXRjaCBhZ2dyZWdhdGUgZXZlbnRcblx0XHRpZiAodGhpcy5lbmFibGVkICYmIHRoaXMudmlld3BvcnRIZWlnaHQgPT09IDApIHtcblx0XHRcdHRoaXMubG9nZ2VyLndhcm4oJ0hlaWdodCBuZWVkcyB0byBiZSBzcGVjaWZpZWQgaW4gb3JkZXIgZm9yIHZpcnR1YWwgc2Nyb2xsIHRvIHdvcmsuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0U291cmNlU2l6ZShzb3VyY2VTaXplOiBudW1iZXIgPSAwKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VTaXplID0gc291cmNlU2l6ZTtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRUb3BIaWRkZW5JdGVtc0NvdW50KGNvdW50OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhpZGRlbkl0ZW1zVG9wID0gY291bnQ7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0Qm90dG9tSGlkZGVuSXRlbXNDb3VudChjb3VudDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oaWRkZW5JdGVtc0JvdHRvbSA9IGNvdW50O1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFNjcm9sbFBvc2l0aW9uKHNjcm9sbFBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNjcm9sbFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb247XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0Vmlld3BvcnRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFJvd0hlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucm93SGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldExvZ2dlcihsb2dnZXI6IExvZ2dlcik6IHZvaWQge1xuXHRcdHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuXHR9XG5cblx0Y2FsY0Z1bGxIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxuXHRnZXRWaWV3UG9ydEhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZpZXdwb3J0SGVpZ2h0O1xuXHR9XG59XG4iXX0=