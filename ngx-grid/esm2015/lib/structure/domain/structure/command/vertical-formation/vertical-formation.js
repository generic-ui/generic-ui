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
        this.hiddenItemsBottom = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7OztJQWtCN0IsWUFBb0IsVUFBbUIsS0FBSyxFQUN6QyxpQkFBeUIsQ0FBQyxFQUMxQixhQUFxQixDQUFDLEVBQ3RCLGlCQUF5QixDQUFDLEVBQzFCLFNBQWtCLEVBQ2xCLGNBQXVCLEVBQ3ZCLGlCQUEwQjtRQU5ULFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBaEJwQyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXZCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQW1CN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFFckMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLGNBQWMs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QixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBYztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQztDQUNEOzs7Ozs7SUE3SUEsc0NBQStCOzs7OztJQUUvQiwyQ0FBMkI7Ozs7O0lBRTNCLDhDQUE4Qjs7Ozs7SUFFOUIsMkNBQStCOzs7OztJQUUvQiwyQ0FBK0I7Ozs7O0lBRS9CLGtDQUE2Qjs7Ozs7SUFFN0IsdUNBQTJCOzs7OztJQUUzQixtQ0FBdUI7Ozs7O0lBRVgsb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVydGljYWxSYW5nZSB9IGZyb20gJy4vdmVydGljYWwtcmFuZ2UnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uIHtcblxuXHRwcml2YXRlIHJvd0hlaWdodDogbnVtYmVyID0gMzA7XG5cblx0cHJpdmF0ZSBoaWRkZW5JdGVtc1RvcCA9IDA7XG5cblx0cHJpdmF0ZSBoaWRkZW5JdGVtc0JvdHRvbSA9IDA7XG5cblx0cHJpdmF0ZSB2aWV3cG9ydEhlaWdodDogbnVtYmVyO1xuXG5cdHByaXZhdGUgc2Nyb2xsUG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIHJhbmdlOiBWZXJ0aWNhbFJhbmdlO1xuXG5cdHByaXZhdGUgc291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdHByaXZhdGUgbG9nZ2VyOiBMb2dnZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIgPSAwLFxuXHRcdFx0XHRzb3VyY2VTaXplOiBudW1iZXIgPSAwLFxuXHRcdFx0XHRzY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gMCxcblx0XHRcdFx0cm93SGVpZ2h0PzogbnVtYmVyLFxuXHRcdFx0XHRoaWRkZW5JdGVtc1RvcD86IG51bWJlcixcblx0XHRcdFx0aGlkZGVuSXRlbXNCb3R0b20/OiBudW1iZXIpIHtcblx0XHR0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gdmlld3BvcnRIZWlnaHQ7XG5cdFx0dGhpcy5zb3VyY2VTaXplID0gc291cmNlU2l6ZTtcblx0XHR0aGlzLnNjcm9sbFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb247XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihyb3dIZWlnaHQpKSB7XG5cdFx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHR9XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihoaWRkZW5JdGVtc1RvcCkpIHtcblx0XHRcdHRoaXMuaGlkZGVuSXRlbXNUb3AgPSBoaWRkZW5JdGVtc1RvcDtcblx0XHR9XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihoaWRkZW5JdGVtc0JvdHRvbSkpIHtcblx0XHRcdHRoaXMuaGlkZGVuSXRlbXNCb3R0b20gPSBoaWRkZW5JdGVtc0JvdHRvbTtcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkICYmXG5cdFx0XHR0aGlzLnZpZXdwb3J0SGVpZ2h0ID4gMCAmJlxuXHRcdFx0dGhpcy5zb3VyY2VTaXplID4gMDtcblx0fVxuXG5cdGdldFJhbmdlKCk6IFZlcnRpY2FsUmFuZ2Uge1xuXHRcdHJldHVybiB0aGlzLnJhbmdlO1xuXHR9XG5cblx0Z2V0VG9wTWFyZ2luKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucmFuZ2UuZ2V0U3RhcnQoKSAqIHRoaXMucm93SGVpZ2h0O1xuXHR9XG5cblx0Y2FsY3VsYXRlUmFuZ2UoKTogYW55IHtcblxuXHRcdGlmICh0aGlzLmNhbGNGdWxsSGVpZ2h0KCkgPD0gdGhpcy52aWV3cG9ydEhlaWdodCkge1xuXHRcdFx0dGhpcy5yYW5nZSA9IG5ldyBWZXJ0aWNhbFJhbmdlKDAsIHRoaXMuc291cmNlU2l6ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXRlbXNJblZpZXdwb3J0ID0gTWF0aC5mbG9vcih0aGlzLnZpZXdwb3J0SGVpZ2h0IC8gdGhpcy5yb3dIZWlnaHQpO1xuXG5cdFx0Y29uc3QgaGlkZGVuRWxlbWVudHMgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsUG9zaXRpb24gLyB0aGlzLnJvd0hlaWdodCk7XG5cblx0XHRjb25zdCB0b3BNYXJnaW4gPSBNYXRoLmFicyhoaWRkZW5FbGVtZW50cyAtIHRoaXMuaGlkZGVuSXRlbXNUb3ApICogdGhpcy5yb3dIZWlnaHQ7XG5cblx0XHRsZXQgc3RhcnQgPSAoaGlkZGVuRWxlbWVudHMgLSB0aGlzLmhpZGRlbkl0ZW1zVG9wKTtcblxuXHRcdGNvbnN0IHZpZXdwb3J0RWxlbWVudHMgPSBNYXRoLmNlaWwodGhpcy52aWV3cG9ydEhlaWdodCAvIHRoaXMucm93SGVpZ2h0KTtcblxuXHRcdGxldCBlbmQgPSBzdGFydCArIHZpZXdwb3J0RWxlbWVudHMgKyB0aGlzLmhpZGRlbkl0ZW1zQm90dG9tO1xuXG5cdFx0aWYgKGVuZCA+IHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0ZW5kID0gdGhpcy5zb3VyY2VTaXplO1xuXHRcdFx0c3RhcnQgPSBlbmQgLSBpdGVtc0luVmlld3BvcnQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5yYW5nZSA9IG5ldyBWZXJ0aWNhbFJhbmdlKHN0YXJ0LCBlbmQpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXJ0LFxuXHRcdFx0ZW5kLFxuXHRcdFx0dG9wTWFyZ2luXG5cdFx0fTtcblx0fVxuXG5cdHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cblx0XHQvLyBUT0RPIGRpc3BhdGNoIGFnZ3JlZ2F0ZSBldmVudFxuXHRcdGlmICh0aGlzLmVuYWJsZWQgJiYgdGhpcy52aWV3cG9ydEhlaWdodCA9PT0gMCkge1xuXHRcdFx0dGhpcy5sb2dnZXIud2FybignSGVpZ2h0IG5lZWRzIHRvIGJlIHNwZWNpZmllZCBpbiBvcmRlciBmb3IgdmlydHVhbCBzY3JvbGwgdG8gd29yay4nKTtcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRTb3VyY2VTaXplKHNvdXJjZVNpemU6IG51bWJlciA9IDApOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZVNpemUgPSBzb3VyY2VTaXplO1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFRvcEhpZGRlbkl0ZW1zQ291bnQoY291bnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGlkZGVuSXRlbXNUb3AgPSBjb3VudDtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRCb3R0b21IaWRkZW5JdGVtc0NvdW50KGNvdW50OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhpZGRlbkl0ZW1zQm90dG9tID0gY291bnQ7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsUG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbjtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRWaWV3cG9ydEhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmlld3BvcnRIZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0Um93SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5yb3dIZWlnaHQgPSBoZWlnaHQ7XG5cdH1cblxuXHRzZXRMb2dnZXIobG9nZ2VyOiBMb2dnZXIpOiB2b2lkIHtcblx0XHR0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcblx0fVxuXG5cdGNhbGNGdWxsSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZSAqIHRoaXMucm93SGVpZ2h0O1xuXHR9XG5cblx0Z2V0Vmlld1BvcnRIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52aWV3cG9ydEhlaWdodDtcblx0fVxufVxuIl19