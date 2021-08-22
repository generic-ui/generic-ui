/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SelectedRowChangedEvent } from './selected-row-changed.event';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
var SelectedRowChangedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedRowChangedAggregateEvent, _super);
    function SelectedRowChangedAggregateEvent(structureId, selectedRows, allSelected, allUnselected) {
        var _this = _super.call(this, structureId, 'SelectedRowChangedAggregateEvent') || this;
        _this.selectedRows = selectedRows;
        _this.allSelected = allSelected;
        _this.allUnselected = allUnselected;
        return _this;
    }
    /**
     * @return {?}
     */
    SelectedRowChangedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new SelectedRowChangedEvent(this.getAggregateId(), this.selectedRows, this.allSelected, this.allUnselected);
    };
    return SelectedRowChangedAggregateEvent;
}(StructureAggregateEvent));
export { SelectedRowChangedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedAggregateEvent.prototype.selectedRows;
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedAggregateEvent.prototype.allSelected;
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedAggregateEvent.prototype.allUnselected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUU1RjtJQUFzRCw0REFBdUI7SUFFNUUsMENBQVksV0FBd0IsRUFDaEIsWUFBMkIsRUFDM0IsV0FBb0IsRUFDcEIsYUFBc0I7UUFIMUMsWUFJQyxrQkFBTSxXQUFXLEVBQUUsa0NBQWtDLENBQUMsU0FDdEQ7UUFKbUIsa0JBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsaUJBQVcsR0FBWCxXQUFXLENBQVM7UUFDcEIsbUJBQWEsR0FBYixhQUFhLENBQVM7O0lBRTFDLENBQUM7Ozs7SUFFRCx3REFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEgsQ0FBQztJQUNGLHVDQUFDO0FBQUQsQ0FBQyxBQVpELENBQXNELHVCQUF1QixHQVk1RTs7Ozs7OztJQVRHLHdEQUE0Qzs7Ozs7SUFDNUMsdURBQXFDOzs7OztJQUNyQyx5REFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0ZWRSb3dDaGFuZ2VkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGVkUm93czogQXJyYXk8c3RyaW5nPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxTZWxlY3RlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxVbnNlbGVjdGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZWxlY3RlZFJvd0NoYW5nZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLnNlbGVjdGVkUm93cywgdGhpcy5hbGxTZWxlY3RlZCwgdGhpcy5hbGxVbnNlbGVjdGVkKTtcblx0fVxufVxuIl19