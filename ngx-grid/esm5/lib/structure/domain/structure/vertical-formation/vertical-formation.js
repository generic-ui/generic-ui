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
        this.hiddenItemsTop = 5;
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
        return this.container.getVisibleContainerHeight();
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
            this.range = new VerticalRange(0, this.sourceSize, 0);
            return;
        }
        /** @type {?} */
        var itemsInViewport = Math.ceil(this.container.getHeight() / this.rowHeight);
        /** @type {?} */
        var viewportPositionIndex = Math.floor(this.scrollPosition / this.rowHeight);
        /** @type {?} */
        var end = viewportPositionIndex + itemsInViewport;
        /** @type {?} */
        var topMargin = viewportPositionIndex;
        if (topMargin + itemsInViewport >= this.sourceSize) {
            topMargin = this.sourceSize - itemsInViewport;
        }
        /** @type {?} */
        var start = Math.max(viewportPositionIndex - this.hiddenItemsTop, 0);
        if (end > this.sourceSize) {
            end = this.sourceSize;
            start = end - itemsInViewport;
        }
        // end - itemsInViewport;
        this.range = new VerticalRange(start, end, topMargin);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saURBQWlELENBQUM7O0lBd0JsRywyQkFBb0IsT0FBd0IsRUFDekMsY0FBMEIsRUFDMUIsVUFBc0IsRUFDdEIsY0FBMEIsRUFDMUIsU0FBa0IsRUFDbEIsY0FBdUIsRUFDdkIsaUJBQTBCO1FBTlQsd0JBQUEsRUFBQSxlQUF3QjtRQUN6QywrQkFBQSxFQUFBLGtCQUEwQjtRQUMxQiwyQkFBQSxFQUFBLGNBQXNCO1FBQ3RCLCtCQUFBLEVBQUEsa0JBQTBCO1FBSFQsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFoQnBDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFFM0Isc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLGNBQVMsR0FBcUMsSUFBSSxnQ0FBZ0MsRUFBRSxDQUFDO1FBaUI1RixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBRXJDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FB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O1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHFDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxjQUFjOzs7OztJQUNkLDBDQUFjOzs7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDekMsQ0FBQzs7Ozs7Ozs7OztJQWhLVyxpQkFBaUI7UUFEN0IsWUFBWTs7T0FDQSxpQkFBaUIsQ0FrSzdCO0lBQUQsd0JBQUM7Q0FBQSxJQUFBO1NBbEtZLGlCQUFpQjs7Ozs7O0lBRTdCLHNDQUErQjs7Ozs7SUFFL0IsMkNBQW1DOzs7OztJQUVuQyw4Q0FBc0M7Ozs7O0lBRXRDLHNDQUE2Rjs7Ozs7SUFFN0YsMkNBQStCOzs7OztJQUUvQixrQ0FBNkI7Ozs7O0lBRTdCLHVDQUEyQjs7Ozs7SUFFM0IsbUNBQXVCOzs7OztJQUVYLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbk9iamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFZlcnRpY2FsUmFuZ2UgfSBmcm9tICcuL3ZlcnRpY2FsLXJhbmdlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uQ29udGFpbmVySGVpZ2h0IH0gZnJvbSAnLi9jb250YWluZXIvdmVydGljYWwtZm9ybWF0aW9uLmNvbnRhaW5lci1oZWlnaHQnO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXInO1xuXG5cbkBEb21haW5PYmplY3RcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbiB7XG5cblx0cHJpdmF0ZSByb3dIZWlnaHQ6IG51bWJlciA9IDQyO1xuXG5cdHByaXZhdGUgaGlkZGVuSXRlbXNUb3A6IG51bWJlciA9IDU7XG5cblx0cHJpdmF0ZSBoaWRkZW5JdGVtc0JvdHRvbTogbnVtYmVyID0gMTtcblxuXHRwcml2YXRlIGNvbnRhaW5lcjogVmVydGljYWxGb3JtYXRpb25Db250YWluZXJIZWlnaHQgPSBuZXcgVmVydGljYWxGb3JtYXRpb25Db250YWluZXJIZWlnaHQoKTtcblxuXHRwcml2YXRlIHNjcm9sbFBvc2l0aW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSByYW5nZTogVmVydGljYWxSYW5nZTtcblxuXHRwcml2YXRlIHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRwcml2YXRlIGxvZ2dlcjogTG9nZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHR2aWV3cG9ydEhlaWdodDogbnVtYmVyID0gMCxcblx0XHRcdFx0c291cmNlU2l6ZTogbnVtYmVyID0gMCxcblx0XHRcdFx0c2Nyb2xsUG9zaXRpb246IG51bWJlciA9IDAsXG5cdFx0XHRcdHJvd0hlaWdodD86IG51bWJlcixcblx0XHRcdFx0aGlkZGVuSXRlbXNUb3A/OiBudW1iZXIsXG5cdFx0XHRcdGhpZGRlbkl0ZW1zQm90dG9tPzogbnVtYmVyKSB7XG5cdFx0dGhpcy5zb3VyY2VTaXplID0gc291cmNlU2l6ZTtcblx0XHR0aGlzLmNvbnRhaW5lci5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlU2l6ZSAqIHRoaXMucm93SGVpZ2h0KTtcblx0XHR0aGlzLmNvbnRhaW5lci5zZXRDb250YWluZXJIZWlnaHQodmlld3BvcnRIZWlnaHQpO1xuXG5cdFx0dGhpcy5zY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuXG5cdFx0aWYgKE51bWJlci5pc0ludGVnZXIocm93SGVpZ2h0KSkge1xuXHRcdFx0dGhpcy5yb3dIZWlnaHQgPSByb3dIZWlnaHQ7XG5cdFx0fVxuXG5cdFx0aWYgKE51bWJlci5pc0ludGVnZXIoaGlkZGVuSXRlbXNUb3ApKSB7XG5cdFx0XHR0aGlzLmhpZGRlbkl0ZW1zVG9wID0gaGlkZGVuSXRlbXNUb3A7XG5cdFx0fVxuXG5cdFx0aWYgKE51bWJlci5pc0ludGVnZXIoaGlkZGVuSXRlbXNCb3R0b20pKSB7XG5cdFx0XHR0aGlzLmhpZGRlbkl0ZW1zQm90dG9tID0gaGlkZGVuSXRlbXNCb3R0b207XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQgJiZcblx0XHRcdHRoaXMuY29udGFpbmVyLmdldEhlaWdodCgpID4gMCAmJlxuXHRcdFx0dGhpcy5zb3VyY2VTaXplID4gMDtcblx0fVxuXG5cdGdldFZpZXdQb3J0SGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLmdldFZpc2libGVDb250YWluZXJIZWlnaHQoKTtcblx0fVxuXG5cdGdldFNvdXJjZUhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5nZXRTb3VyY2VIZWlnaHQoKTtcblx0fVxuXG5cdGdldFJvd0hlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJvd0hlaWdodDtcblx0fVxuXG5cdGdldFJhbmdlKCk6IFZlcnRpY2FsUmFuZ2Uge1xuXHRcdHJldHVybiB0aGlzLnJhbmdlO1xuXHR9XG5cblx0Z2V0VG9wTWFyZ2luKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucmFuZ2UuZ2V0U3RhcnQoKSAqIHRoaXMucm93SGVpZ2h0O1xuXHR9XG5cblx0Y2FsY3VsYXRlUmFuZ2UoKTogYW55IHtcblxuXHRcdGlmICh0aGlzLmNhbGNGdWxsSGVpZ2h0KCkgPD0gdGhpcy5jb250YWluZXIuZ2V0SGVpZ2h0KCkpIHtcblx0XHRcdHRoaXMucmFuZ2UgPSBuZXcgVmVydGljYWxSYW5nZSgwLCB0aGlzLnNvdXJjZVNpemUsIDApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGl0ZW1zSW5WaWV3cG9ydCA9IE1hdGguY2VpbCh0aGlzLmNvbnRhaW5lci5nZXRIZWlnaHQoKSAvIHRoaXMucm93SGVpZ2h0KSxcblx0XHRcdHZpZXdwb3J0UG9zaXRpb25JbmRleCA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGxQb3NpdGlvbiAvIHRoaXMucm93SGVpZ2h0KTtcblxuXHRcdGxldCBlbmQgPSB2aWV3cG9ydFBvc2l0aW9uSW5kZXggKyBpdGVtc0luVmlld3BvcnQ7XG5cblx0XHRsZXQgdG9wTWFyZ2luID0gdmlld3BvcnRQb3NpdGlvbkluZGV4O1xuXG5cdFx0aWYgKHRvcE1hcmdpbiArIGl0ZW1zSW5WaWV3cG9ydCA+PSB0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdHRvcE1hcmdpbiA9IHRoaXMuc291cmNlU2l6ZSAtIGl0ZW1zSW5WaWV3cG9ydDtcblx0XHR9XG5cblx0XHRsZXQgc3RhcnQgPSBNYXRoLm1heCh2aWV3cG9ydFBvc2l0aW9uSW5kZXggLSB0aGlzLmhpZGRlbkl0ZW1zVG9wLCAwKTtcblxuXHRcdGlmIChlbmQgPiB0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdGVuZCA9IHRoaXMuc291cmNlU2l6ZTtcblx0XHRcdHN0YXJ0ID0gZW5kIC0gaXRlbXNJblZpZXdwb3J0O1xuXHRcdH1cblxuXHRcdC8vIGVuZCAtIGl0ZW1zSW5WaWV3cG9ydDtcblxuXHRcdHRoaXMucmFuZ2UgPSBuZXcgVmVydGljYWxSYW5nZShzdGFydCwgZW5kLCB0b3BNYXJnaW4pO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXJ0LFxuXHRcdFx0ZW5kLFxuXHRcdFx0dG9wTWFyZ2luXG5cdFx0fTtcblx0fVxuXG5cdHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cblx0XHQvLyBUT0RPIGRpc3BhdGNoIGFnZ3JlZ2F0ZSBldmVudFxuXHRcdGlmICh0aGlzLmVuYWJsZWQgJiYgIXRoaXMuY29udGFpbmVyLmlzQ29udGFpbmVySGVpZ2h0UHJvcGVyRm9yVmlydHVhbFNjcm9sbCgpKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci53YXJuKCdIZWlnaHQgbmVlZHMgdG8gYmUgc3BlY2lmaWVkIGluIG9yZGVyIGZvciB2aXJ0dWFsIHNjcm9sbCB0byB3b3JrLicpO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFNvdXJjZVNpemUoc291cmNlU2l6ZTogbnVtYmVyID0gMCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlU2l6ZSA9IHNvdXJjZVNpemU7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlU2l6ZSAqIHRoaXMucm93SGVpZ2h0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFRvcEhpZGRlbkl0ZW1zQ291bnQoY291bnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGlkZGVuSXRlbXNUb3AgPSBjb3VudDtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRCb3R0b21IaWRkZW5JdGVtc0NvdW50KGNvdW50OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhpZGRlbkl0ZW1zQm90dG9tID0gY291bnQ7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsUG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbjtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRWaWV3cG9ydEhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29udGFpbmVyLnNldENvbnRhaW5lckhlaWdodChoZWlnaHQpO1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFJvd0hlaWdodChyb3dIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucm93SGVpZ2h0ID0gcm93SGVpZ2h0O1xuXHRcdHRoaXMuY29udGFpbmVyLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQpO1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldExvZ2dlcihsb2dnZXI6IExvZ2dlcik6IHZvaWQge1xuXHRcdHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuXHR9XG5cblx0Ly8gVE9ETyBSRU1PVkVcblx0Y2FsY0Z1bGxIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxufVxuIl19