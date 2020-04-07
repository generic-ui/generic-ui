/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainObject } from '@generic-ui/hermes';
import { VerticalRange } from './vertical-range';
import { VerticalFormationContainerHeight } from './container/vertical-formation.container-height';
let VerticalFormation = class VerticalFormation {
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
    isEnabled() {
        return this.enabled &&
            this.container.getHeight() > 0 &&
            this.sourceSize > 0;
    }
    /**
     * @return {?}
     */
    getViewPortHeight() {
        return this.container.getHeight();
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
            this.range = new VerticalRange(0, this.sourceSize);
            return;
        }
        /** @type {?} */
        const itemsInViewport = Math.floor(this.container.getHeight() / this.rowHeight);
        /** @type {?} */
        const hiddenElements = Math.floor(this.scrollPosition / this.rowHeight);
        /** @type {?} */
        const topMargin = Math.abs(hiddenElements - this.hiddenItemsTop) * this.rowHeight;
        /** @type {?} */
        let start = (hiddenElements - this.hiddenItemsTop);
        /** @type {?} */
        const viewportElements = Math.ceil(this.container.getHeight() / this.rowHeight);
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
    tslib_1.__metadata("design:paramtypes", [Boolean, Number, Number, Number, Number, Number, Number])
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
    VerticalFormation.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saURBQWlELENBQUM7SUFLdEYsaUJBQWlCLFNBQWpCLGlCQUFpQjs7Ozs7Ozs7OztJQWtCN0IsWUFBb0IsVUFBbUIsS0FBSyxFQUN6QyxpQkFBeUIsQ0FBQyxFQUMxQixhQUFxQixDQUFDLEVBQ3RCLGlCQUF5QixDQUFDLEVBQzFCLFNBQWtCLEVBQ2xCLGNBQXVCLEVBQ3ZCLGlCQUEwQjtRQU5ULFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBaEJwQyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXZCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUV0QixjQUFTLEdBQXFDLElBQUksZ0NBQWdDLEVBQUUsQ0FBQztRQWlCNUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUVyQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDM0I7UUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7U0FDckM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxjQUFjO1FBRWIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkQsT0FBTztTQUNQOztjQUVLLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Y0FFekUsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDOztjQUVqRSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTOztZQUU3RSxLQUFLLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7Y0FFNUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7O1lBRTNFLEdBQUcsR0FBRyxLQUFLLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjtRQUUzRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzFCLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3RCLEtBQUssR0FBRyxHQUFHLEdBQUcsZUFBZSxDQUFDO1NBQzlCO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFM0MsT0FBTztZQUNOLEtBQUs7WUFDTCxHQUFHO1lBQ0gsU0FBUztTQUNULENBQUM7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixnQ0FBZ0M7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1Q0FBdUMsRUFBRSxFQUFFO1lBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7U0FDdEY7UUFFRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsYUFBcUIsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUU3QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxzQkFBc0IsQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHlCQUF5QixDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxjQUFzQjtRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxNQUFjO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFNBQWlCO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBR0QsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3pDLENBQUM7Q0FFRCxDQUFBOzs7Ozs7Ozs7O0FBL0pZLGlCQUFpQjtJQUQ3QixZQUFZOztHQUNBLGlCQUFpQixDQStKN0I7U0EvSlksaUJBQWlCOzs7Ozs7SUFFN0Isc0NBQStCOzs7OztJQUUvQiwyQ0FBMkI7Ozs7O0lBRTNCLDhDQUE4Qjs7Ozs7SUFFOUIsc0NBQTZGOzs7OztJQUU3RiwyQ0FBK0I7Ozs7O0lBRS9CLGtDQUE2Qjs7Ozs7SUFFN0IsdUNBQTJCOzs7OztJQUUzQixtQ0FBdUI7Ozs7O0lBRVgsb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluT2JqZWN0IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVmVydGljYWxSYW5nZSB9IGZyb20gJy4vdmVydGljYWwtcmFuZ2UnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Db250YWluZXJIZWlnaHQgfSBmcm9tICcuL2NvbnRhaW5lci92ZXJ0aWNhbC1mb3JtYXRpb24uY29udGFpbmVyLWhlaWdodCc7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlcic7XG5cbkBEb21haW5PYmplY3RcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbiB7XG5cblx0cHJpdmF0ZSByb3dIZWlnaHQ6IG51bWJlciA9IDQyO1xuXG5cdHByaXZhdGUgaGlkZGVuSXRlbXNUb3AgPSAwO1xuXG5cdHByaXZhdGUgaGlkZGVuSXRlbXNCb3R0b20gPSAxO1xuXG5cdHByaXZhdGUgY29udGFpbmVyOiBWZXJ0aWNhbEZvcm1hdGlvbkNvbnRhaW5lckhlaWdodCA9IG5ldyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnRhaW5lckhlaWdodCgpO1xuXG5cdHByaXZhdGUgc2Nyb2xsUG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIHJhbmdlOiBWZXJ0aWNhbFJhbmdlO1xuXG5cdHByaXZhdGUgc291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdHByaXZhdGUgbG9nZ2VyOiBMb2dnZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIgPSAwLFxuXHRcdFx0XHRzb3VyY2VTaXplOiBudW1iZXIgPSAwLFxuXHRcdFx0XHRzY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gMCxcblx0XHRcdFx0cm93SGVpZ2h0PzogbnVtYmVyLFxuXHRcdFx0XHRoaWRkZW5JdGVtc1RvcD86IG51bWJlcixcblx0XHRcdFx0aGlkZGVuSXRlbXNCb3R0b20/OiBudW1iZXIpIHtcblx0XHR0aGlzLnNvdXJjZVNpemUgPSBzb3VyY2VTaXplO1xuXHRcdHRoaXMuY29udGFpbmVyLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQpO1xuXHRcdHRoaXMuY29udGFpbmVyLnNldENvbnRhaW5lckhlaWdodCh2aWV3cG9ydEhlaWdodCk7XG5cblx0XHR0aGlzLnNjcm9sbFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb247XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihyb3dIZWlnaHQpKSB7XG5cdFx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHR9XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihoaWRkZW5JdGVtc1RvcCkpIHtcblx0XHRcdHRoaXMuaGlkZGVuSXRlbXNUb3AgPSBoaWRkZW5JdGVtc1RvcDtcblx0XHR9XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihoaWRkZW5JdGVtc0JvdHRvbSkpIHtcblx0XHRcdHRoaXMuaGlkZGVuSXRlbXNCb3R0b20gPSBoaWRkZW5JdGVtc0JvdHRvbTtcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZCAmJlxuXHRcdFx0dGhpcy5jb250YWluZXIuZ2V0SGVpZ2h0KCkgPiAwICYmXG5cdFx0XHR0aGlzLnNvdXJjZVNpemUgPiAwO1xuXHR9XG5cblx0Z2V0Vmlld1BvcnRIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXIuZ2V0SGVpZ2h0KCk7XG5cdH1cblxuXHRnZXRTb3VyY2VIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXIuZ2V0U291cmNlSGVpZ2h0KCk7XG5cdH1cblxuXHRnZXRSb3dIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxuXHRnZXRSYW5nZSgpOiBWZXJ0aWNhbFJhbmdlIHtcblx0XHRyZXR1cm4gdGhpcy5yYW5nZTtcblx0fVxuXG5cdGdldFRvcE1hcmdpbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJhbmdlLmdldFN0YXJ0KCkgKiB0aGlzLnJvd0hlaWdodDtcblx0fVxuXG5cdGNhbGN1bGF0ZVJhbmdlKCk6IGFueSB7XG5cblx0XHRpZiAodGhpcy5jYWxjRnVsbEhlaWdodCgpIDw9IHRoaXMuY29udGFpbmVyLmdldEhlaWdodCgpKSB7XG5cdFx0XHR0aGlzLnJhbmdlID0gbmV3IFZlcnRpY2FsUmFuZ2UoMCwgdGhpcy5zb3VyY2VTaXplKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpdGVtc0luVmlld3BvcnQgPSBNYXRoLmZsb29yKHRoaXMuY29udGFpbmVyLmdldEhlaWdodCgpIC8gdGhpcy5yb3dIZWlnaHQpO1xuXG5cdFx0Y29uc3QgaGlkZGVuRWxlbWVudHMgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsUG9zaXRpb24gLyB0aGlzLnJvd0hlaWdodCk7XG5cblx0XHRjb25zdCB0b3BNYXJnaW4gPSBNYXRoLmFicyhoaWRkZW5FbGVtZW50cyAtIHRoaXMuaGlkZGVuSXRlbXNUb3ApICogdGhpcy5yb3dIZWlnaHQ7XG5cblx0XHRsZXQgc3RhcnQgPSAoaGlkZGVuRWxlbWVudHMgLSB0aGlzLmhpZGRlbkl0ZW1zVG9wKTtcblxuXHRcdGNvbnN0IHZpZXdwb3J0RWxlbWVudHMgPSBNYXRoLmNlaWwodGhpcy5jb250YWluZXIuZ2V0SGVpZ2h0KCkgLyB0aGlzLnJvd0hlaWdodCk7XG5cblx0XHRsZXQgZW5kID0gc3RhcnQgKyB2aWV3cG9ydEVsZW1lbnRzICsgdGhpcy5oaWRkZW5JdGVtc0JvdHRvbTtcblxuXHRcdGlmIChlbmQgPiB0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdGVuZCA9IHRoaXMuc291cmNlU2l6ZTtcblx0XHRcdHN0YXJ0ID0gZW5kIC0gaXRlbXNJblZpZXdwb3J0O1xuXHRcdH1cblxuXHRcdHRoaXMucmFuZ2UgPSBuZXcgVmVydGljYWxSYW5nZShzdGFydCwgZW5kKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRzdGFydCxcblx0XHRcdGVuZCxcblx0XHRcdHRvcE1hcmdpblxuXHRcdH07XG5cdH1cblxuXHRzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXG5cdFx0Ly8gVE9ETyBkaXNwYXRjaCBhZ2dyZWdhdGUgZXZlbnRcblx0XHRpZiAodGhpcy5lbmFibGVkICYmICF0aGlzLmNvbnRhaW5lci5pc0NvbnRhaW5lckhlaWdodFByb3BlckZvclZpcnR1YWxTY3JvbGwoKSkge1xuXHRcdFx0dGhpcy5sb2dnZXIud2FybignSGVpZ2h0IG5lZWRzIHRvIGJlIHNwZWNpZmllZCBpbiBvcmRlciBmb3IgdmlydHVhbCBzY3JvbGwgdG8gd29yay4nKTtcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRTb3VyY2VTaXplKHNvdXJjZVNpemU6IG51bWJlciA9IDApOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZVNpemUgPSBzb3VyY2VTaXplO1xuXG5cdFx0dGhpcy5jb250YWluZXIuc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZVNpemUgKiB0aGlzLnJvd0hlaWdodCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRUb3BIaWRkZW5JdGVtc0NvdW50KGNvdW50OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhpZGRlbkl0ZW1zVG9wID0gY291bnQ7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0Qm90dG9tSGlkZGVuSXRlbXNDb3VudChjb3VudDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oaWRkZW5JdGVtc0JvdHRvbSA9IGNvdW50O1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFNjcm9sbFBvc2l0aW9uKHNjcm9sbFBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNjcm9sbFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb247XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0Vmlld3BvcnRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbnRhaW5lci5zZXRDb250YWluZXJIZWlnaHQoaGVpZ2h0KTtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRSb3dIZWlnaHQocm93SGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHR0aGlzLmNvbnRhaW5lci5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlU2l6ZSAqIHRoaXMucm93SGVpZ2h0KTtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRMb2dnZXIobG9nZ2VyOiBMb2dnZXIpOiB2b2lkIHtcblx0XHR0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcblx0fVxuXG5cdC8vIFRPRE8gUkVNT1ZFXG5cdGNhbGNGdWxsSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZSAqIHRoaXMucm93SGVpZ2h0O1xuXHR9XG5cbn1cbiJdfQ==