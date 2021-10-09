/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainObject } from '@generic-ui/hermes';
import { VerticalRange } from './vertical-range';
import { VerticalFormationContainerHeight } from './container/vertical-formation.container-height';
import { StructureId } from '../../../core/api/structure.id';
import { ScrollBarPositionSetAggregateEvent } from './scroll-bar/scroll-bar-position-set.aggregate-event';
var VerticalFormation = /** @class */ (function () {
    function VerticalFormation(structureId, enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        if (enabled === void 0) { enabled = false; }
        if (viewportHeight === void 0) { viewportHeight = 0; }
        if (sourceSize === void 0) { sourceSize = 0; }
        if (scrollPosition === void 0) { scrollPosition = 0; }
        this.structureId = structureId;
        this.enabled = enabled;
        this.rowHeight = VerticalFormation_1.ROW_HEIGHT;
        this.hiddenItemsTop = VerticalFormation_1.HIDDEN_ITEMS_TOP;
        this.hiddenItemsBottom = VerticalFormation_1.HIDDEN_ITEMS_BOTTOM;
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
    VerticalFormation_1 = VerticalFormation;
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
        var end = (viewportPositionIndex + itemsInViewport + this.hiddenItemsBottom);
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
     * @param {?} index
     * @return {?}
     */
    VerticalFormation.prototype.scrollToIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index >= this.sourceSize) {
            index = this.sourceSize;
        }
        if (index < -1) {
            index = 0;
        }
        /** @type {?} */
        var position = index * this.rowHeight;
        return new ScrollBarPositionSetAggregateEvent(this.structureId, position);
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
    var VerticalFormation_1;
    VerticalFormation.ROW_HEIGHT = 42;
    VerticalFormation.HIDDEN_ITEMS_TOP = 5;
    VerticalFormation.HIDDEN_ITEMS_BOTTOM = 2;
    VerticalFormation.ctorParameters = function () { return [
        { type: StructureId },
        { type: Boolean },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number }
    ]; };
    VerticalFormation = VerticalFormation_1 = tslib_1.__decorate([
        DomainObject,
        tslib_1.__metadata("design:paramtypes", [StructureId, Boolean, Number, Number, Number, Number, Number, Number])
    ], VerticalFormation);
    return VerticalFormation;
}());
export { VerticalFormation };
if (false) {
    /** @type {?} */
    VerticalFormation.ROW_HEIGHT;
    /** @type {?} */
    VerticalFormation.HIDDEN_ITEMS_TOP;
    /** @type {?} */
    VerticalFormation.HIDDEN_ITEMS_BOTTOM;
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
    VerticalFormation.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFJbkcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOztJQTZCekcsMkJBQW9CLFdBQXdCLEVBQ2pDLE9BQXdCLEVBQ2hDLGNBQTBCLEVBQzFCLFVBQXNCLEVBQ3RCLGNBQTBCLEVBQzFCLFNBQWtCLEVBQ2xCLGNBQXVCLEVBQ3ZCLGlCQUEwQjtRQU5sQix3QkFBQSxFQUFBLGVBQXdCO1FBQ2hDLCtCQUFBLEVBQUEsa0JBQTBCO1FBQzFCLDJCQUFBLEVBQUEsY0FBc0I7UUFDdEIsK0JBQUEsRUFBQSxrQkFBMEI7UUFKVCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQWpCM0IsY0FBUyxHQUFXLG1CQUFpQixDQUFDLFVBQVUsQ0FBQztRQUVqRCxtQkFBYyxHQUFXLG1CQUFpQixDQUFDLGdCQUFnQixDQUFDO1FBRTVELHNCQUFpQixHQUFXLG1CQUFpQixDQUFDLG1CQUFtQixDQUFDO1FBRWxFLGNBQVMsR0FBcUMsSUFBSSxnQ0FBZ0MsRUFBRSxDQUFDO1FBa0I1RixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJ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Ozs7Ozs7O0lBekJoQyxpQkFBaUI7UUFEN0IsWUFBWTtpREEwQnFCLFdBQVc7T0F6QmhDLGlCQUFpQixDQXlMN0I7SUFBRCx3QkFBQztDQUFBLElBQUE7U0F6TFksaUJBQWlCOzs7SUFFN0IsNkJBQWdDOztJQUVoQyxtQ0FBcUM7O0lBRXJDLHNDQUF3Qzs7Ozs7SUFHeEMsc0NBQXlEOzs7OztJQUV6RCwyQ0FBb0U7Ozs7O0lBRXBFLDhDQUEwRTs7Ozs7SUFFMUUsc0NBQTZGOzs7OztJQUU3RiwyQ0FBK0I7Ozs7O0lBRS9CLGtDQUE2Qjs7Ozs7SUFFN0IsdUNBQTJCOzs7OztJQUUzQixtQ0FBdUI7Ozs7O0lBRVgsd0NBQWdDOzs7OztJQUN6QyxvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5PYmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbFJhbmdlIH0gZnJvbSAnLi92ZXJ0aWNhbC1yYW5nZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnRhaW5lckhlaWdodCB9IGZyb20gJy4vY29udGFpbmVyL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb250YWluZXItaGVpZ2h0JztcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTY3JvbGxCYXJQb3NpdGlvblNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9zY3JvbGwtYmFyL3Njcm9sbC1iYXItcG9zaXRpb24tc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuQERvbWFpbk9iamVjdFxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uIHtcblxuXHRzdGF0aWMgcmVhZG9ubHkgUk9XX0hFSUdIVCA9IDQyO1xuXG5cdHN0YXRpYyByZWFkb25seSBISURERU5fSVRFTVNfVE9QID0gNTtcblxuXHRzdGF0aWMgcmVhZG9ubHkgSElEREVOX0lURU1TX0JPVFRPTSA9IDI7XG5cblxuXHRwcml2YXRlIHJvd0hlaWdodDogbnVtYmVyID0gVmVydGljYWxGb3JtYXRpb24uUk9XX0hFSUdIVDtcblxuXHRwcml2YXRlIGhpZGRlbkl0ZW1zVG9wOiBudW1iZXIgPSBWZXJ0aWNhbEZvcm1hdGlvbi5ISURERU5fSVRFTVNfVE9QO1xuXG5cdHByaXZhdGUgaGlkZGVuSXRlbXNCb3R0b206IG51bWJlciA9IFZlcnRpY2FsRm9ybWF0aW9uLkhJRERFTl9JVEVNU19CT1RUT007XG5cblx0cHJpdmF0ZSBjb250YWluZXI6IFZlcnRpY2FsRm9ybWF0aW9uQ29udGFpbmVySGVpZ2h0ID0gbmV3IFZlcnRpY2FsRm9ybWF0aW9uQ29udGFpbmVySGVpZ2h0KCk7XG5cblx0cHJpdmF0ZSBzY3JvbGxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgcmFuZ2U6IFZlcnRpY2FsUmFuZ2U7XG5cblx0cHJpdmF0ZSBzb3VyY2VTaXplOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIgPSAwLFxuXHRcdFx0XHRzb3VyY2VTaXplOiBudW1iZXIgPSAwLFxuXHRcdFx0XHRzY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gMCxcblx0XHRcdFx0cm93SGVpZ2h0PzogbnVtYmVyLFxuXHRcdFx0XHRoaWRkZW5JdGVtc1RvcD86IG51bWJlcixcblx0XHRcdFx0aGlkZGVuSXRlbXNCb3R0b20/OiBudW1iZXIpIHtcblx0XHR0aGlzLnNvdXJjZVNpemUgPSBzb3VyY2VTaXplO1xuXHRcdHRoaXMuY29udGFpbmVyLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQpO1xuXHRcdHRoaXMuY29udGFpbmVyLnNldENvbnRhaW5lckhlaWdodCh2aWV3cG9ydEhlaWdodCk7XG5cblx0XHR0aGlzLnNjcm9sbFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb247XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihyb3dIZWlnaHQpKSB7XG5cdFx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHR9XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihoaWRkZW5JdGVtc1RvcCkpIHtcblx0XHRcdHRoaXMuaGlkZGVuSXRlbXNUb3AgPSBoaWRkZW5JdGVtc1RvcDtcblx0XHR9XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihoaWRkZW5JdGVtc0JvdHRvbSkpIHtcblx0XHRcdHRoaXMuaGlkZGVuSXRlbXNCb3R0b20gPSBoaWRkZW5JdGVtc0JvdHRvbTtcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZCAmJlxuXHRcdFx0dGhpcy5jb250YWluZXIuZ2V0SGVpZ2h0KCkgPiAwICYmXG5cdFx0XHR0aGlzLnNvdXJjZVNpemUgPiAwO1xuXHR9XG5cblx0Z2V0Vmlld1BvcnRIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXIuZ2V0VmlzaWJsZUNvbnRhaW5lckhlaWdodCgpO1xuXHR9XG5cblx0Z2V0U291cmNlSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLmdldFNvdXJjZUhlaWdodCgpO1xuXHR9XG5cblx0Z2V0Um93SGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucm93SGVpZ2h0O1xuXHR9XG5cblx0Z2V0UmFuZ2UoKTogVmVydGljYWxSYW5nZSB7XG5cdFx0cmV0dXJuIHRoaXMucmFuZ2U7XG5cdH1cblxuXHRnZXRUb3BNYXJnaW4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5yYW5nZS5nZXRTdGFydCgpICogdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxuXHRjYWxjdWxhdGVSYW5nZSgpOiBhbnkge1xuXG5cdFx0aWYgKHRoaXMuY2FsY0Z1bGxIZWlnaHQoKSA8PSB0aGlzLmNvbnRhaW5lci5nZXRIZWlnaHQoKSkge1xuXHRcdFx0dGhpcy5yYW5nZSA9IG5ldyBWZXJ0aWNhbFJhbmdlKDAsIHRoaXMuc291cmNlU2l6ZSwgMCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXRlbXNJblZpZXdwb3J0ID0gTWF0aC5jZWlsKHRoaXMuY29udGFpbmVyLmdldEhlaWdodCgpIC8gdGhpcy5yb3dIZWlnaHQpLFxuXHRcdFx0dmlld3BvcnRQb3NpdGlvbkluZGV4ID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbFBvc2l0aW9uIC8gdGhpcy5yb3dIZWlnaHQpO1xuXG5cdFx0bGV0IGVuZCA9ICh2aWV3cG9ydFBvc2l0aW9uSW5kZXggKyBpdGVtc0luVmlld3BvcnQgKyB0aGlzLmhpZGRlbkl0ZW1zQm90dG9tKTtcblxuXHRcdGxldCB0b3BNYXJnaW4gPSB2aWV3cG9ydFBvc2l0aW9uSW5kZXg7XG5cblx0XHRpZiAodG9wTWFyZ2luICsgaXRlbXNJblZpZXdwb3J0ID49IHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0dG9wTWFyZ2luID0gdGhpcy5zb3VyY2VTaXplIC0gaXRlbXNJblZpZXdwb3J0O1xuXHRcdH1cblxuXHRcdGxldCBzdGFydCA9IE1hdGgubWF4KHZpZXdwb3J0UG9zaXRpb25JbmRleCAtIHRoaXMuaGlkZGVuSXRlbXNUb3AsIDApO1xuXG5cdFx0aWYgKGVuZCA+IHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0ZW5kID0gdGhpcy5zb3VyY2VTaXplO1xuXHRcdFx0c3RhcnQgPSBlbmQgLSBpdGVtc0luVmlld3BvcnQ7XG5cdFx0fVxuXG5cdFx0Ly8gZW5kIC0gaXRlbXNJblZpZXdwb3J0O1xuXG5cdFx0dGhpcy5yYW5nZSA9IG5ldyBWZXJ0aWNhbFJhbmdlKHN0YXJ0LCBlbmQsIHRvcE1hcmdpbik7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhcnQsXG5cdFx0XHRlbmQsXG5cdFx0XHR0b3BNYXJnaW5cblx0XHR9O1xuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblxuXHRcdC8vIFRPRE8gZGlzcGF0Y2ggYWdncmVnYXRlIGV2ZW50XG5cdFx0aWYgKHRoaXMuZW5hYmxlZCAmJiAhdGhpcy5jb250YWluZXIuaXNDb250YWluZXJIZWlnaHRQcm9wZXJGb3JWaXJ0dWFsU2Nyb2xsKCkpIHtcblx0XHRcdHRoaXMubG9nZ2VyLndhcm4oJ0hlaWdodCBuZWVkcyB0byBiZSBzcGVjaWZpZWQgaW4gb3JkZXIgZm9yIHZpcnR1YWwgc2Nyb2xsIHRvIHdvcmsuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0U291cmNlU2l6ZShzb3VyY2VTaXplOiBudW1iZXIgPSAwKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VTaXplID0gc291cmNlU2l6ZTtcblxuXHRcdHRoaXMuY29udGFpbmVyLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0VG9wSGlkZGVuSXRlbXNDb3VudChjb3VudDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oaWRkZW5JdGVtc1RvcCA9IGNvdW50O1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldEJvdHRvbUhpZGRlbkl0ZW1zQ291bnQoY291bnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGlkZGVuSXRlbXNCb3R0b20gPSBjb3VudDtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxQb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNjcm9sbFRvSW5kZXgoaW5kZXg6IG51bWJlcik6IFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRcdGlmIChpbmRleCA+PSB0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdGluZGV4ID0gdGhpcy5zb3VyY2VTaXplO1xuXHRcdH1cblxuXHRcdGlmIChpbmRleCA8IC0xKSB7XG5cdFx0XHRpbmRleCA9IDA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcG9zaXRpb24gPSBpbmRleCAqIHRoaXMucm93SGVpZ2h0O1xuXG5cdFx0cmV0dXJuIG5ldyBTY3JvbGxCYXJQb3NpdGlvblNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuc3RydWN0dXJlSWQsIHBvc2l0aW9uKTtcblx0fVxuXG5cdHNldFZpZXdwb3J0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb250YWluZXIuc2V0Q29udGFpbmVySGVpZ2h0KGhlaWdodCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0Um93SGVpZ2h0KHJvd0hlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5yb3dIZWlnaHQgPSByb3dIZWlnaHQ7XG5cdFx0dGhpcy5jb250YWluZXIuc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZVNpemUgKiB0aGlzLnJvd0hlaWdodCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0TG9nZ2VyKGxvZ2dlcjogTG9nZ2VyKTogdm9pZCB7XG5cdFx0dGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cdH1cblxuXHQvLyBUT0RPIFJFTU9WRVxuXHRjYWxjRnVsbEhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemUgKiB0aGlzLnJvd0hlaWdodDtcblx0fVxuXG59XG4iXX0=