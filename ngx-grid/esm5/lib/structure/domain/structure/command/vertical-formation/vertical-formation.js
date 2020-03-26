/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { VerticalRange } from './vertical-range';
var VerticalFormation = /** @class */ (function () {
    function VerticalFormation(enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        if (enabled === void 0) { enabled = false; }
        if (viewportHeight === void 0) { viewportHeight = 0; }
        if (sourceSize === void 0) { sourceSize = 0; }
        if (scrollPosition === void 0) { scrollPosition = 0; }
        this.enabled = enabled;
        this.rowHeight = 32;
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
    VerticalFormation.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled &&
            this.viewportHeight > 0 &&
            this.sourceSize > 0;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getRowHeight = /**
     * @return {?}
     */
    function () {
        return this.rowHeight;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getRange = /**
     * @return {?}
     */
    function () {
        return this.range;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getTopMargin = /**
     * @return {?}
     */
    function () {
        return this.range.getStart() * this.rowHeight;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.calculateRange = /**
     * @return {?}
     */
    function () {
        if (this.calcFullHeight() <= this.viewportHeight) {
            this.range = new VerticalRange(0, this.sourceSize);
            return;
        }
        /** @type {?} */
        var itemsInViewport = Math.floor(this.viewportHeight / this.rowHeight);
        /** @type {?} */
        var hiddenElements = Math.floor(this.scrollPosition / this.rowHeight);
        /** @type {?} */
        var topMargin = Math.abs(hiddenElements - this.hiddenItemsTop) * this.rowHeight;
        /** @type {?} */
        var start = (hiddenElements - this.hiddenItemsTop);
        /** @type {?} */
        var viewportElements = Math.ceil(this.viewportHeight / this.rowHeight);
        /** @type {?} */
        var end = start + viewportElements + this.hiddenItemsBottom;
        if (end > this.sourceSize) {
            end = this.sourceSize;
            start = end - itemsInViewport;
        }
        this.range = new VerticalRange(start, end);
        return {
            start: start,
            end: end,
            topMargin: topMargin
        };
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    VerticalFormation.prototype.setEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.enabled = enabled;
        // TODO dispatch aggregate event
        if (this.enabled && this.viewportHeight === 0) {
            this.logger.warn('Height needs to be specified in order for virtual scroll to work.');
        }
        this.calculateRange();
    };
    /**
     * @param {?=} sourceSize
     * @return {?}
     */
    VerticalFormation.prototype.setSourceSize = /**
     * @param {?=} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        if (sourceSize === void 0) { sourceSize = 0; }
        this.sourceSize = sourceSize;
        this.calculateRange();
    };
    /**
     * @param {?} count
     * @return {?}
     */
    VerticalFormation.prototype.setTopHiddenItemsCount = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        this.hiddenItemsTop = count;
        this.calculateRange();
    };
    /**
     * @param {?} count
     * @return {?}
     */
    VerticalFormation.prototype.setBottomHiddenItemsCount = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        this.hiddenItemsBottom = count;
        this.calculateRange();
    };
    /**
     * @param {?} scrollPosition
     * @return {?}
     */
    VerticalFormation.prototype.setScrollPosition = /**
     * @param {?} scrollPosition
     * @return {?}
     */
    function (scrollPosition) {
        this.scrollPosition = scrollPosition;
        this.calculateRange();
    };
    /**
     * @param {?} height
     * @return {?}
     */
    VerticalFormation.prototype.setViewportHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.viewportHeight = height;
        this.calculateRange();
    };
    /**
     * @param {?} height
     * @return {?}
     */
    VerticalFormation.prototype.setRowHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.rowHeight = height;
        this.calculateRange();
    };
    /**
     * @param {?} logger
     * @return {?}
     */
    VerticalFormation.prototype.setLogger = /**
     * @param {?} logger
     * @return {?}
     */
    function (logger) {
        this.logger = logger;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.calcFullHeight = /**
     * @return {?}
     */
    function () {
        return this.sourceSize * this.rowHeight;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getViewPortHeight = /**
     * @return {?}
     */
    function () {
        return this.viewportHeight;
    };
    return VerticalFormation;
}());
export { VerticalFormation };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQ7SUFrQkMsMkJBQW9CLE9BQXdCLEVBQ3pDLGNBQTBCLEVBQzFCLFVBQXNCLEVBQ3RCLGNBQTBCLEVBQzFCLFNBQWtCLEVBQ2xCLGNBQXVCLEVBQ3ZCLGlCQUEwQjtRQU5ULHdCQUFBLEVBQUEsZUFBd0I7UUFDekMsK0JBQUEsRUFBQSxrQkFBMEI7UUFDMUIsMkJBQUEsRUFBQSxjQUFzQjtRQUN0QiwrQkFBQSxFQUFBLGtCQUEwQjtRQUhULFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBaEJwQyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXZCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQW1CN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFFckMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGlCQUFp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LElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLGNBQXNCO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELDZDQUFpQjs7OztJQUFqQixVQUFrQixNQUFjO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHdDQUFZOzs7O0lBQVosVUFBYSxNQUFjO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHFDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCwwQ0FBYzs7O0lBQWQ7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsNkNBQWlCOzs7SUFBakI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0FBQyxBQXBKRCxJQW9KQzs7Ozs7OztJQWxKQSxzQ0FBK0I7Ozs7O0lBRS9CLDJDQUEyQjs7Ozs7SUFFM0IsOENBQThCOzs7OztJQUU5QiwyQ0FBK0I7Ozs7O0lBRS9CLDJDQUErQjs7Ozs7SUFFL0Isa0NBQTZCOzs7OztJQUU3Qix1Q0FBMkI7Ozs7O0lBRTNCLG1DQUF1Qjs7Ozs7SUFFWCxvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZXJ0aWNhbFJhbmdlIH0gZnJvbSAnLi92ZXJ0aWNhbC1yYW5nZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb24ge1xuXG5cdHByaXZhdGUgcm93SGVpZ2h0OiBudW1iZXIgPSAzMjtcblxuXHRwcml2YXRlIGhpZGRlbkl0ZW1zVG9wID0gMDtcblxuXHRwcml2YXRlIGhpZGRlbkl0ZW1zQm90dG9tID0gMTtcblxuXHRwcml2YXRlIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXI7XG5cblx0cHJpdmF0ZSBzY3JvbGxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgcmFuZ2U6IFZlcnRpY2FsUmFuZ2U7XG5cblx0cHJpdmF0ZSBzb3VyY2VTaXplOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0dmlld3BvcnRIZWlnaHQ6IG51bWJlciA9IDAsXG5cdFx0XHRcdHNvdXJjZVNpemU6IG51bWJlciA9IDAsXG5cdFx0XHRcdHNjcm9sbFBvc2l0aW9uOiBudW1iZXIgPSAwLFxuXHRcdFx0XHRyb3dIZWlnaHQ/OiBudW1iZXIsXG5cdFx0XHRcdGhpZGRlbkl0ZW1zVG9wPzogbnVtYmVyLFxuXHRcdFx0XHRoaWRkZW5JdGVtc0JvdHRvbT86IG51bWJlcikge1xuXHRcdHRoaXMudmlld3BvcnRIZWlnaHQgPSB2aWV3cG9ydEhlaWdodDtcblx0XHR0aGlzLnNvdXJjZVNpemUgPSBzb3VyY2VTaXplO1xuXHRcdHRoaXMuc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbjtcblxuXHRcdGlmIChOdW1iZXIuaXNJbnRlZ2VyKHJvd0hlaWdodCkpIHtcblx0XHRcdHRoaXMucm93SGVpZ2h0ID0gcm93SGVpZ2h0O1xuXHRcdH1cblxuXHRcdGlmIChOdW1iZXIuaXNJbnRlZ2VyKGhpZGRlbkl0ZW1zVG9wKSkge1xuXHRcdFx0dGhpcy5oaWRkZW5JdGVtc1RvcCA9IGhpZGRlbkl0ZW1zVG9wO1xuXHRcdH1cblxuXHRcdGlmIChOdW1iZXIuaXNJbnRlZ2VyKGhpZGRlbkl0ZW1zQm90dG9tKSkge1xuXHRcdFx0dGhpcy5oaWRkZW5JdGVtc0JvdHRvbSA9IGhpZGRlbkl0ZW1zQm90dG9tO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQgJiZcblx0XHRcdHRoaXMudmlld3BvcnRIZWlnaHQgPiAwICYmXG5cdFx0XHR0aGlzLnNvdXJjZVNpemUgPiAwO1xuXHR9XG5cblx0Z2V0Um93SGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucm93SGVpZ2h0O1xuXHR9XG5cblx0Z2V0UmFuZ2UoKTogVmVydGljYWxSYW5nZSB7XG5cdFx0cmV0dXJuIHRoaXMucmFuZ2U7XG5cdH1cblxuXHRnZXRUb3BNYXJnaW4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5yYW5nZS5nZXRTdGFydCgpICogdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxuXHRjYWxjdWxhdGVSYW5nZSgpOiBhbnkge1xuXG5cdFx0aWYgKHRoaXMuY2FsY0Z1bGxIZWlnaHQoKSA8PSB0aGlzLnZpZXdwb3J0SGVpZ2h0KSB7XG5cdFx0XHR0aGlzLnJhbmdlID0gbmV3IFZlcnRpY2FsUmFuZ2UoMCwgdGhpcy5zb3VyY2VTaXplKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpdGVtc0luVmlld3BvcnQgPSBNYXRoLmZsb29yKHRoaXMudmlld3BvcnRIZWlnaHQgLyB0aGlzLnJvd0hlaWdodCk7XG5cblx0XHRjb25zdCBoaWRkZW5FbGVtZW50cyA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGxQb3NpdGlvbiAvIHRoaXMucm93SGVpZ2h0KTtcblxuXHRcdGNvbnN0IHRvcE1hcmdpbiA9IE1hdGguYWJzKGhpZGRlbkVsZW1lbnRzIC0gdGhpcy5oaWRkZW5JdGVtc1RvcCkgKiB0aGlzLnJvd0hlaWdodDtcblxuXHRcdGxldCBzdGFydCA9IChoaWRkZW5FbGVtZW50cyAtIHRoaXMuaGlkZGVuSXRlbXNUb3ApO1xuXG5cdFx0Y29uc3Qgdmlld3BvcnRFbGVtZW50cyA9IE1hdGguY2VpbCh0aGlzLnZpZXdwb3J0SGVpZ2h0IC8gdGhpcy5yb3dIZWlnaHQpO1xuXG5cdFx0bGV0IGVuZCA9IHN0YXJ0ICsgdmlld3BvcnRFbGVtZW50cyArIHRoaXMuaGlkZGVuSXRlbXNCb3R0b207XG5cblx0XHRpZiAoZW5kID4gdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRlbmQgPSB0aGlzLnNvdXJjZVNpemU7XG5cdFx0XHRzdGFydCA9IGVuZCAtIGl0ZW1zSW5WaWV3cG9ydDtcblx0XHR9XG5cblx0XHR0aGlzLnJhbmdlID0gbmV3IFZlcnRpY2FsUmFuZ2Uoc3RhcnQsIGVuZCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhcnQsXG5cdFx0XHRlbmQsXG5cdFx0XHR0b3BNYXJnaW5cblx0XHR9O1xuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblxuXHRcdC8vIFRPRE8gZGlzcGF0Y2ggYWdncmVnYXRlIGV2ZW50XG5cdFx0aWYgKHRoaXMuZW5hYmxlZCAmJiB0aGlzLnZpZXdwb3J0SGVpZ2h0ID09PSAwKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci53YXJuKCdIZWlnaHQgbmVlZHMgdG8gYmUgc3BlY2lmaWVkIGluIG9yZGVyIGZvciB2aXJ0dWFsIHNjcm9sbCB0byB3b3JrLicpO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFNvdXJjZVNpemUoc291cmNlU2l6ZTogbnVtYmVyID0gMCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlU2l6ZSA9IHNvdXJjZVNpemU7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0VG9wSGlkZGVuSXRlbXNDb3VudChjb3VudDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oaWRkZW5JdGVtc1RvcCA9IGNvdW50O1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldEJvdHRvbUhpZGRlbkl0ZW1zQ291bnQoY291bnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGlkZGVuSXRlbXNCb3R0b20gPSBjb3VudDtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxQb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFZpZXdwb3J0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy52aWV3cG9ydEhlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRSb3dIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJvd0hlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRMb2dnZXIobG9nZ2VyOiBMb2dnZXIpOiB2b2lkIHtcblx0XHR0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcblx0fVxuXG5cdGNhbGNGdWxsSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZSAqIHRoaXMucm93SGVpZ2h0O1xuXHR9XG5cblx0Z2V0Vmlld1BvcnRIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52aWV3cG9ydEhlaWdodDtcblx0fVxufVxuIl19