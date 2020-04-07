/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainObject } from '@generic-ui/hermes';
import { VerticalRange } from './vertical-range';
import { VerticalFormationContainerHeight } from './container/vertical-formation.container-height';
var VerticalFormation = /** @class */ (function () {
    function VerticalFormation(enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        if (enabled === void 0) { enabled = false; }
        if (viewportHeight === void 0) { viewportHeight = 0; }
        if (sourceSize === void 0) { sourceSize = 0; }
        if (scrollPosition === void 0) { scrollPosition = 0; }
        this.enabled = enabled;
        this.rowHeight = 42;
        this.hiddenItemsTop = 0;
        this.hiddenItemsBottom = 1;
        this.container = new VerticalFormationContainerHeight();
        this.sourceSize = sourceSize;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.container.setContainerHeight(viewportHeight);
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
            this.container.getHeight() > 0 &&
            this.sourceSize > 0;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getViewPortHeight = /**
     * @return {?}
     */
    function () {
        return this.container.getHeight();
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getSourceHeight = /**
     * @return {?}
     */
    function () {
        return this.container.getSourceHeight();
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
        if (this.calcFullHeight() <= this.container.getHeight()) {
            this.range = new VerticalRange(0, this.sourceSize);
            return;
        }
        /** @type {?} */
        var itemsInViewport = Math.floor(this.container.getHeight() / this.rowHeight);
        /** @type {?} */
        var hiddenElements = Math.floor(this.scrollPosition / this.rowHeight);
        /** @type {?} */
        var topMargin = Math.abs(hiddenElements - this.hiddenItemsTop) * this.rowHeight;
        /** @type {?} */
        var start = (hiddenElements - this.hiddenItemsTop);
        /** @type {?} */
        var viewportElements = Math.ceil(this.container.getHeight() / this.rowHeight);
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
        if (this.enabled && !this.container.isContainerHeightProperForVirtualScroll()) {
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
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
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
        this.container.setContainerHeight(height);
        this.calculateRange();
    };
    /**
     * @param {?} rowHeight
     * @return {?}
     */
    VerticalFormation.prototype.setRowHeight = /**
     * @param {?} rowHeight
     * @return {?}
     */
    function (rowHeight) {
        this.rowHeight = rowHeight;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
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
    // TODO REMOVE
    // TODO REMOVE
    /**
     * @return {?}
     */
    VerticalFormation.prototype.calcFullHeight = 
    // TODO REMOVE
    /**
     * @return {?}
     */
    function () {
        return this.sourceSize * this.rowHeight;
    };
    VerticalFormation.ctorParameters = function () { return [
        { type: Boolean },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number }
    ]; };
    VerticalFormation = tslib_1.__decorate([
        DomainObject,
        tslib_1.__metadata("design:paramtypes", [Boolean, Number, Number, Number, Number, Number, Number])
    ], VerticalFormation);
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
    VerticalFormation.prototype.container;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saURBQWlELENBQUM7O0lBdUJsRywyQkFBb0IsT0FBd0IsRUFDekMsY0FBMEIsRUFDMUIsVUFBc0IsRUFDdEIsY0FBMEIsRUFDMUIsU0FBa0IsRUFDbEIsY0FBdUIsRUFDdkIsaUJBQTBCO1FBTlQsd0JBQUEsRUFBQSxlQUF3QjtRQUN6QywrQkFBQSxFQUFBLGtCQUEwQjtRQUMxQiwyQkFBQSxFQUFBLGNBQXNCO1FBQ3RCLCtCQUFBLEVBQUEsa0JBQTBCO1FBSFQsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFoQnBDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFFbkIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLGNBQVMsR0FBcUMsSUFBSSxnQ0FBZ0MsRUFBRSxDQUFDO1FBaUI1RixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBRXJDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FB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QUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxxQ0FBUzs7OztJQUFULFVBQVUsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBRUQsY0FBYzs7Ozs7SUFDZCwwQ0FBYzs7Ozs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3pDLENBQUM7Ozs7Ozs7Ozs7SUE3SlcsaUJBQWlCO1FBRDdCLFlBQVk7O09BQ0EsaUJBQWlCLENBK0o3QjtJQUFELHdCQUFDO0NBQUEsSUFBQTtTQS9KWSxpQkFBaUI7Ozs7OztJQUU3QixzQ0FBK0I7Ozs7O0lBRS9CLDJDQUEyQjs7Ozs7SUFFM0IsOENBQThCOzs7OztJQUU5QixzQ0FBNkY7Ozs7O0lBRTdGLDJDQUErQjs7Ozs7SUFFL0Isa0NBQTZCOzs7OztJQUU3Qix1Q0FBMkI7Ozs7O0lBRTNCLG1DQUF1Qjs7Ozs7SUFFWCxvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5PYmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbFJhbmdlIH0gZnJvbSAnLi92ZXJ0aWNhbC1yYW5nZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnRhaW5lckhlaWdodCB9IGZyb20gJy4vY29udGFpbmVyL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb250YWluZXItaGVpZ2h0JztcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyJztcblxuQERvbWFpbk9iamVjdFxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uIHtcblxuXHRwcml2YXRlIHJvd0hlaWdodDogbnVtYmVyID0gNDI7XG5cblx0cHJpdmF0ZSBoaWRkZW5JdGVtc1RvcCA9IDA7XG5cblx0cHJpdmF0ZSBoaWRkZW5JdGVtc0JvdHRvbSA9IDE7XG5cblx0cHJpdmF0ZSBjb250YWluZXI6IFZlcnRpY2FsRm9ybWF0aW9uQ29udGFpbmVySGVpZ2h0ID0gbmV3IFZlcnRpY2FsRm9ybWF0aW9uQ29udGFpbmVySGVpZ2h0KCk7XG5cblx0cHJpdmF0ZSBzY3JvbGxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgcmFuZ2U6IFZlcnRpY2FsUmFuZ2U7XG5cblx0cHJpdmF0ZSBzb3VyY2VTaXplOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0dmlld3BvcnRIZWlnaHQ6IG51bWJlciA9IDAsXG5cdFx0XHRcdHNvdXJjZVNpemU6IG51bWJlciA9IDAsXG5cdFx0XHRcdHNjcm9sbFBvc2l0aW9uOiBudW1iZXIgPSAwLFxuXHRcdFx0XHRyb3dIZWlnaHQ/OiBudW1iZXIsXG5cdFx0XHRcdGhpZGRlbkl0ZW1zVG9wPzogbnVtYmVyLFxuXHRcdFx0XHRoaWRkZW5JdGVtc0JvdHRvbT86IG51bWJlcikge1xuXHRcdHRoaXMuc291cmNlU2l6ZSA9IHNvdXJjZVNpemU7XG5cdFx0dGhpcy5jb250YWluZXIuc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZVNpemUgKiB0aGlzLnJvd0hlaWdodCk7XG5cdFx0dGhpcy5jb250YWluZXIuc2V0Q29udGFpbmVySGVpZ2h0KHZpZXdwb3J0SGVpZ2h0KTtcblxuXHRcdHRoaXMuc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbjtcblxuXHRcdGlmIChOdW1iZXIuaXNJbnRlZ2VyKHJvd0hlaWdodCkpIHtcblx0XHRcdHRoaXMucm93SGVpZ2h0ID0gcm93SGVpZ2h0O1xuXHRcdH1cblxuXHRcdGlmIChOdW1iZXIuaXNJbnRlZ2VyKGhpZGRlbkl0ZW1zVG9wKSkge1xuXHRcdFx0dGhpcy5oaWRkZW5JdGVtc1RvcCA9IGhpZGRlbkl0ZW1zVG9wO1xuXHRcdH1cblxuXHRcdGlmIChOdW1iZXIuaXNJbnRlZ2VyKGhpZGRlbkl0ZW1zQm90dG9tKSkge1xuXHRcdFx0dGhpcy5oaWRkZW5JdGVtc0JvdHRvbSA9IGhpZGRlbkl0ZW1zQm90dG9tO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkICYmXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5nZXRIZWlnaHQoKSA+IDAgJiZcblx0XHRcdHRoaXMuc291cmNlU2l6ZSA+IDA7XG5cdH1cblxuXHRnZXRWaWV3UG9ydEhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5nZXRIZWlnaHQoKTtcblx0fVxuXG5cdGdldFNvdXJjZUhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5nZXRTb3VyY2VIZWlnaHQoKTtcblx0fVxuXG5cdGdldFJvd0hlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJvd0hlaWdodDtcblx0fVxuXG5cdGdldFJhbmdlKCk6IFZlcnRpY2FsUmFuZ2Uge1xuXHRcdHJldHVybiB0aGlzLnJhbmdlO1xuXHR9XG5cblx0Z2V0VG9wTWFyZ2luKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucmFuZ2UuZ2V0U3RhcnQoKSAqIHRoaXMucm93SGVpZ2h0O1xuXHR9XG5cblx0Y2FsY3VsYXRlUmFuZ2UoKTogYW55IHtcblxuXHRcdGlmICh0aGlzLmNhbGNGdWxsSGVpZ2h0KCkgPD0gdGhpcy5jb250YWluZXIuZ2V0SGVpZ2h0KCkpIHtcblx0XHRcdHRoaXMucmFuZ2UgPSBuZXcgVmVydGljYWxSYW5nZSgwLCB0aGlzLnNvdXJjZVNpemUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGl0ZW1zSW5WaWV3cG9ydCA9IE1hdGguZmxvb3IodGhpcy5jb250YWluZXIuZ2V0SGVpZ2h0KCkgLyB0aGlzLnJvd0hlaWdodCk7XG5cblx0XHRjb25zdCBoaWRkZW5FbGVtZW50cyA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGxQb3NpdGlvbiAvIHRoaXMucm93SGVpZ2h0KTtcblxuXHRcdGNvbnN0IHRvcE1hcmdpbiA9IE1hdGguYWJzKGhpZGRlbkVsZW1lbnRzIC0gdGhpcy5oaWRkZW5JdGVtc1RvcCkgKiB0aGlzLnJvd0hlaWdodDtcblxuXHRcdGxldCBzdGFydCA9IChoaWRkZW5FbGVtZW50cyAtIHRoaXMuaGlkZGVuSXRlbXNUb3ApO1xuXG5cdFx0Y29uc3Qgdmlld3BvcnRFbGVtZW50cyA9IE1hdGguY2VpbCh0aGlzLmNvbnRhaW5lci5nZXRIZWlnaHQoKSAvIHRoaXMucm93SGVpZ2h0KTtcblxuXHRcdGxldCBlbmQgPSBzdGFydCArIHZpZXdwb3J0RWxlbWVudHMgKyB0aGlzLmhpZGRlbkl0ZW1zQm90dG9tO1xuXG5cdFx0aWYgKGVuZCA+IHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0ZW5kID0gdGhpcy5zb3VyY2VTaXplO1xuXHRcdFx0c3RhcnQgPSBlbmQgLSBpdGVtc0luVmlld3BvcnQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5yYW5nZSA9IG5ldyBWZXJ0aWNhbFJhbmdlKHN0YXJ0LCBlbmQpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXJ0LFxuXHRcdFx0ZW5kLFxuXHRcdFx0dG9wTWFyZ2luXG5cdFx0fTtcblx0fVxuXG5cdHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cblx0XHQvLyBUT0RPIGRpc3BhdGNoIGFnZ3JlZ2F0ZSBldmVudFxuXHRcdGlmICh0aGlzLmVuYWJsZWQgJiYgIXRoaXMuY29udGFpbmVyLmlzQ29udGFpbmVySGVpZ2h0UHJvcGVyRm9yVmlydHVhbFNjcm9sbCgpKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci53YXJuKCdIZWlnaHQgbmVlZHMgdG8gYmUgc3BlY2lmaWVkIGluIG9yZGVyIGZvciB2aXJ0dWFsIHNjcm9sbCB0byB3b3JrLicpO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFNvdXJjZVNpemUoc291cmNlU2l6ZTogbnVtYmVyID0gMCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlU2l6ZSA9IHNvdXJjZVNpemU7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlU2l6ZSAqIHRoaXMucm93SGVpZ2h0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFRvcEhpZGRlbkl0ZW1zQ291bnQoY291bnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGlkZGVuSXRlbXNUb3AgPSBjb3VudDtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRCb3R0b21IaWRkZW5JdGVtc0NvdW50KGNvdW50OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhpZGRlbkl0ZW1zQm90dG9tID0gY291bnQ7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsUG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbjtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRWaWV3cG9ydEhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29udGFpbmVyLnNldENvbnRhaW5lckhlaWdodChoZWlnaHQpO1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFJvd0hlaWdodChyb3dIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucm93SGVpZ2h0ID0gcm93SGVpZ2h0O1xuXHRcdHRoaXMuY29udGFpbmVyLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQpO1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldExvZ2dlcihsb2dnZXI6IExvZ2dlcik6IHZvaWQge1xuXHRcdHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuXHR9XG5cblx0Ly8gVE9ETyBSRU1PVkVcblx0Y2FsY0Z1bGxIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxufVxuIl19