/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionResizeWidthSetEvent } from './composition-resize-width-set.event';
var CompositionResizeWidthSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionResizeWidthSetAggregateEvent, _super);
    function CompositionResizeWidthSetAggregateEvent(compositionId) {
        return _super.call(this, compositionId, 'CompositionResizeWidthSetAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    CompositionResizeWidthSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new CompositionResizeWidthSetEvent(this.getAggregateId());
    };
    return CompositionResizeWidthSetAggregateEvent;
}(AggregateEvent));
export { CompositionResizeWidthSetAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi93aWR0aC9yZXNpemUtd2lkdGgvY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHdEY7SUFBNkQsbUVBQTZCO0lBRXpGLGlEQUFZLGFBQTRCO2VBQ3ZDLGtCQUFNLGFBQWEsRUFBRSx5Q0FBeUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsK0RBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLDhCQUE4QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDRiw4Q0FBQztBQUFELENBQUMsQUFURCxDQUE2RCxjQUFjLEdBUzFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKSB7XG5cdFx0c3VwZXIoY29tcG9zaXRpb25JZCwgJ0NvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxDb21wb3NpdGlvbklkPiB7XG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0fVxufVxuIl19