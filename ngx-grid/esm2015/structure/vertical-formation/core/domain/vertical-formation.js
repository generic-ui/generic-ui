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
let VerticalFormation = class VerticalFormation {
    /**
     * @param {?} structureId
     * @param {?=} enabled
     * @param {?=} viewportHeight
     * @param {?=} sourceSize
     * @param {?=} scrollPosition
     * @param {?=} rowHeight
     * @param {?=} hiddenItemsTop
     * @param {?=} hiddenItemsBottom
     */
    constructor(structureId, enabled = false, viewportHeight = 0, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        this.structureId = structureId;
        this.enabled = enabled;
        this.rowHeight = 42;
        this.hiddenItemsTop = 5;
        this.hiddenItemsBottom = 2;
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
    isEnabled() {
        return this.enabled &&
            this.container.getHeight() > 0 &&
            this.sourceSize > 0;
    }
    /**
     * @return {?}
     */
    getViewPortHeight() {
        return this.container.getVisibleContainerHeight();
    }
    /**
     * @return {?}
     */
    getSourceHeight() {
        return this.container.getSourceHeight();
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
        if (this.calcFullHeight() <= this.container.getHeight()) {
            this.range = new VerticalRange(0, this.sourceSize, 0);
            return;
        }
        /** @type {?} */
        const itemsInViewport = Math.ceil(this.container.getHeight() / this.rowHeight);
        /** @type {?} */
        const viewportPositionIndex = Math.floor(this.scrollPosition / this.rowHeight);
        /** @type {?} */
        let end = (viewportPositionIndex + itemsInViewport + this.hiddenItemsBottom);
        /** @type {?} */
        let topMargin = viewportPositionIndex;
        if (topMargin + itemsInViewport >= this.sourceSize) {
            topMargin = this.sourceSize - itemsInViewport;
        }
        /** @type {?} */
        let start = Math.max(viewportPositionIndex - this.hiddenItemsTop, 0);
        if (end > this.sourceSize) {
            end = this.sourceSize;
            start = end - itemsInViewport;
        }
        // end - itemsInViewport;
        this.range = new VerticalRange(start, end, topMargin);
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
        if (this.enabled && !this.container.isContainerHeightProperForVirtualScroll()) {
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
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
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
     * @param {?} index
     * @return {?}
     */
    scrollToIndex(index) {
        if (index >= this.sourceSize) {
            index = this.sourceSize;
        }
        if (index < -1) {
            index = 0;
        }
        /** @type {?} */
        const position = index * this.rowHeight;
        return new ScrollBarPositionSetAggregateEvent(this.structureId, position);
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setViewportHeight(height) {
        this.container.setContainerHeight(height);
        this.calculateRange();
    }
    /**
     * @param {?} rowHeight
     * @return {?}
     */
    setRowHeight(rowHeight) {
        this.rowHeight = rowHeight;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.calculateRange();
    }
    /**
     * @param {?} logger
     * @return {?}
     */
    setLogger(logger) {
        this.logger = logger;
    }
    // TODO REMOVE
    /**
     * @return {?}
     */
    calcFullHeight() {
        return this.sourceSize * this.rowHeight;
    }
};
VerticalFormation.ctorParameters = () => [
    { type: StructureId },
    { type: Boolean },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number }
];
VerticalFormation = tslib_1.__decorate([
    DomainObject,
    tslib_1.__metadata("design:paramtypes", [StructureId, Boolean, Number, Number, Number, Number, Number, Number])
], VerticalFormation);
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
    VerticalFormation.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFJbkcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0lBSTdGLGlCQUFpQixTQUFqQixpQkFBaUI7Ozs7Ozs7Ozs7O0lBa0I3QixZQUFvQixXQUF3QixFQUNqQyxVQUFtQixLQUFLLEVBQ2hDLGlCQUF5QixDQUFDLEVBQzFCLGFBQXFCLENBQUMsRUFDdEIsaUJBQXlCLENBQUMsRUFDMUIsU0FBa0IsRUFDbEIsY0FBdUIsRUFDdkIsaUJBQTBCO1FBUFQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFqQjNCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFFM0Isc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLGNBQVMsR0FBcUMsSUFBSSxnQ0FBZ0MsRUFBRSxDQUFDO1FBa0I1RixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFD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LElBQUksa0NBQWtDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLE1BQWM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsU0FBaUI7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFHRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDekMsQ0FBQztDQUVELENBQUE7O1lBaEtpQyxXQUFXOzs7Ozs7Ozs7QUFsQmhDLGlCQUFpQjtJQUQ3QixZQUFZOzZDQW1CcUIsV0FBVztHQWxCaEMsaUJBQWlCLENBa0w3QjtTQWxMWSxpQkFBaUI7Ozs7OztJQUU3QixzQ0FBK0I7Ozs7O0lBRS9CLDJDQUFtQzs7Ozs7SUFFbkMsOENBQXNDOzs7OztJQUV0QyxzQ0FBNkY7Ozs7O0lBRTdGLDJDQUErQjs7Ozs7SUFFL0Isa0NBQTZCOzs7OztJQUU3Qix1Q0FBMkI7Ozs7O0lBRTNCLG1DQUF1Qjs7Ozs7SUFFWCx3Q0FBZ0M7Ozs7O0lBQ3pDLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbk9iamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFZlcnRpY2FsUmFuZ2UgfSBmcm9tICcuL3ZlcnRpY2FsLXJhbmdlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uQ29udGFpbmVySGVpZ2h0IH0gZnJvbSAnLi9jb250YWluZXIvdmVydGljYWwtZm9ybWF0aW9uLmNvbnRhaW5lci1oZWlnaHQnO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNjcm9sbEJhclBvc2l0aW9uU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3Njcm9sbC1iYXIvc2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5ARG9tYWluT2JqZWN0XG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb24ge1xuXG5cdHByaXZhdGUgcm93SGVpZ2h0OiBudW1iZXIgPSA0MjtcblxuXHRwcml2YXRlIGhpZGRlbkl0ZW1zVG9wOiBudW1iZXIgPSA1O1xuXG5cdHByaXZhdGUgaGlkZGVuSXRlbXNCb3R0b206IG51bWJlciA9IDI7XG5cblx0cHJpdmF0ZSBjb250YWluZXI6IFZlcnRpY2FsRm9ybWF0aW9uQ29udGFpbmVySGVpZ2h0ID0gbmV3IFZlcnRpY2FsRm9ybWF0aW9uQ29udGFpbmVySGVpZ2h0KCk7XG5cblx0cHJpdmF0ZSBzY3JvbGxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgcmFuZ2U6IFZlcnRpY2FsUmFuZ2U7XG5cblx0cHJpdmF0ZSBzb3VyY2VTaXplOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIgPSAwLFxuXHRcdFx0XHRzb3VyY2VTaXplOiBudW1iZXIgPSAwLFxuXHRcdFx0XHRzY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gMCxcblx0XHRcdFx0cm93SGVpZ2h0PzogbnVtYmVyLFxuXHRcdFx0XHRoaWRkZW5JdGVtc1RvcD86IG51bWJlcixcblx0XHRcdFx0aGlkZGVuSXRlbXNCb3R0b20/OiBudW1iZXIpIHtcblx0XHR0aGlzLnNvdXJjZVNpemUgPSBzb3VyY2VTaXplO1xuXHRcdHRoaXMuY29udGFpbmVyLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQpO1xuXHRcdHRoaXMuY29udGFpbmVyLnNldENvbnRhaW5lckhlaWdodCh2aWV3cG9ydEhlaWdodCk7XG5cblx0XHR0aGlzLnNjcm9sbFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb247XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihyb3dIZWlnaHQpKSB7XG5cdFx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHR9XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihoaWRkZW5JdGVtc1RvcCkpIHtcblx0XHRcdHRoaXMuaGlkZGVuSXRlbXNUb3AgPSBoaWRkZW5JdGVtc1RvcDtcblx0XHR9XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihoaWRkZW5JdGVtc0JvdHRvbSkpIHtcblx0XHRcdHRoaXMuaGlkZGVuSXRlbXNCb3R0b20gPSBoaWRkZW5JdGVtc0JvdHRvbTtcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZCAmJlxuXHRcdFx0dGhpcy5jb250YWluZXIuZ2V0SGVpZ2h0KCkgPiAwICYmXG5cdFx0XHR0aGlzLnNvdXJjZVNpemUgPiAwO1xuXHR9XG5cblx0Z2V0Vmlld1BvcnRIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXIuZ2V0VmlzaWJsZUNvbnRhaW5lckhlaWdodCgpO1xuXHR9XG5cblx0Z2V0U291cmNlSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLmdldFNvdXJjZUhlaWdodCgpO1xuXHR9XG5cblx0Z2V0Um93SGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucm93SGVpZ2h0O1xuXHR9XG5cblx0Z2V0UmFuZ2UoKTogVmVydGljYWxSYW5nZSB7XG5cdFx0cmV0dXJuIHRoaXMucmFuZ2U7XG5cdH1cblxuXHRnZXRUb3BNYXJnaW4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5yYW5nZS5nZXRTdGFydCgpICogdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxuXHRjYWxjdWxhdGVSYW5nZSgpOiBhbnkge1xuXG5cdFx0aWYgKHRoaXMuY2FsY0Z1bGxIZWlnaHQoKSA8PSB0aGlzLmNvbnRhaW5lci5nZXRIZWlnaHQoKSkge1xuXHRcdFx0dGhpcy5yYW5nZSA9IG5ldyBWZXJ0aWNhbFJhbmdlKDAsIHRoaXMuc291cmNlU2l6ZSwgMCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXRlbXNJblZpZXdwb3J0ID0gTWF0aC5jZWlsKHRoaXMuY29udGFpbmVyLmdldEhlaWdodCgpIC8gdGhpcy5yb3dIZWlnaHQpLFxuXHRcdFx0dmlld3BvcnRQb3NpdGlvbkluZGV4ID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbFBvc2l0aW9uIC8gdGhpcy5yb3dIZWlnaHQpO1xuXG5cdFx0bGV0IGVuZCA9ICh2aWV3cG9ydFBvc2l0aW9uSW5kZXggKyBpdGVtc0luVmlld3BvcnQgKyB0aGlzLmhpZGRlbkl0ZW1zQm90dG9tKTtcblxuXHRcdGxldCB0b3BNYXJnaW4gPSB2aWV3cG9ydFBvc2l0aW9uSW5kZXg7XG5cblx0XHRpZiAodG9wTWFyZ2luICsgaXRlbXNJblZpZXdwb3J0ID49IHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0dG9wTWFyZ2luID0gdGhpcy5zb3VyY2VTaXplIC0gaXRlbXNJblZpZXdwb3J0O1xuXHRcdH1cblxuXHRcdGxldCBzdGFydCA9IE1hdGgubWF4KHZpZXdwb3J0UG9zaXRpb25JbmRleCAtIHRoaXMuaGlkZGVuSXRlbXNUb3AsIDApO1xuXG5cdFx0aWYgKGVuZCA+IHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0ZW5kID0gdGhpcy5zb3VyY2VTaXplO1xuXHRcdFx0c3RhcnQgPSBlbmQgLSBpdGVtc0luVmlld3BvcnQ7XG5cdFx0fVxuXG5cdFx0Ly8gZW5kIC0gaXRlbXNJblZpZXdwb3J0O1xuXG5cdFx0dGhpcy5yYW5nZSA9IG5ldyBWZXJ0aWNhbFJhbmdlKHN0YXJ0LCBlbmQsIHRvcE1hcmdpbik7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhcnQsXG5cdFx0XHRlbmQsXG5cdFx0XHR0b3BNYXJnaW5cblx0XHR9O1xuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblxuXHRcdC8vIFRPRE8gZGlzcGF0Y2ggYWdncmVnYXRlIGV2ZW50XG5cdFx0aWYgKHRoaXMuZW5hYmxlZCAmJiAhdGhpcy5jb250YWluZXIuaXNDb250YWluZXJIZWlnaHRQcm9wZXJGb3JWaXJ0dWFsU2Nyb2xsKCkpIHtcblx0XHRcdHRoaXMubG9nZ2VyLndhcm4oJ0hlaWdodCBuZWVkcyB0byBiZSBzcGVjaWZpZWQgaW4gb3JkZXIgZm9yIHZpcnR1YWwgc2Nyb2xsIHRvIHdvcmsuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0U291cmNlU2l6ZShzb3VyY2VTaXplOiBudW1iZXIgPSAwKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VTaXplID0gc291cmNlU2l6ZTtcblxuXHRcdHRoaXMuY29udGFpbmVyLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0VG9wSGlkZGVuSXRlbXNDb3VudChjb3VudDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oaWRkZW5JdGVtc1RvcCA9IGNvdW50O1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldEJvdHRvbUhpZGRlbkl0ZW1zQ291bnQoY291bnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGlkZGVuSXRlbXNCb3R0b20gPSBjb3VudDtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxQb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNjcm9sbFRvSW5kZXgoaW5kZXg6IG51bWJlcik6IFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRcdGlmIChpbmRleCA+PSB0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdGluZGV4ID0gdGhpcy5zb3VyY2VTaXplO1xuXHRcdH1cblxuXHRcdGlmIChpbmRleCA8IC0xKSB7XG5cdFx0XHRpbmRleCA9IDA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcG9zaXRpb24gPSBpbmRleCAqIHRoaXMucm93SGVpZ2h0O1xuXG5cdFx0cmV0dXJuIG5ldyBTY3JvbGxCYXJQb3NpdGlvblNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuc3RydWN0dXJlSWQsIHBvc2l0aW9uKTtcblx0fVxuXG5cdHNldFZpZXdwb3J0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb250YWluZXIuc2V0Q29udGFpbmVySGVpZ2h0KGhlaWdodCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0Um93SGVpZ2h0KHJvd0hlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5yb3dIZWlnaHQgPSByb3dIZWlnaHQ7XG5cdFx0dGhpcy5jb250YWluZXIuc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZVNpemUgKiB0aGlzLnJvd0hlaWdodCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0TG9nZ2VyKGxvZ2dlcjogTG9nZ2VyKTogdm9pZCB7XG5cdFx0dGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cdH1cblxuXHQvLyBUT0RPIFJFTU9WRVxuXHRjYWxjRnVsbEhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemUgKiB0aGlzLnJvd0hlaWdodDtcblx0fVxuXG59XG4iXX0=