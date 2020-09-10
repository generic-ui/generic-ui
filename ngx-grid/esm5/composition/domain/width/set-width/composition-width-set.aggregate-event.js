/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionWidthSetEvent } from './composition-width-set.event';
var CompositionWidthSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionWidthSetAggregateEvent, _super);
    function CompositionWidthSetAggregateEvent(aggregateId) {
        return _super.call(this, aggregateId, 'CompositionWidthSetAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    CompositionWidthSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new CompositionWidthSetEvent(this.getAggregateId());
    };
    return CompositionWidthSetAggregateEvent;
}(AggregateEvent));
export { CompositionWidthSetAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24td2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL3dpZHRoL3NldC13aWR0aC9jb21wb3NpdGlvbi13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBNEIsTUFBTSxvQkFBb0IsQ0FBQztBQUc5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RTtJQUF1RCw2REFBNkI7SUFFbkYsMkNBQVksV0FBd0I7ZUFDbkMsa0JBQU0sV0FBVyxFQUFFLG1DQUFtQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCx5REFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVGLHdDQUFDO0FBQUQsQ0FBQyxBQVZELENBQXVELGNBQWMsR0FVcEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24td2lkdGgtc2V0LmV2ZW50JztcblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0NvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxDb21wb3NpdGlvbklkPiB7XG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG59XG4iXX0=