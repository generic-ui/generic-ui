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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24td2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQTRCLE1BQU0sb0JBQW9CLENBQUM7QUFHOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFekU7SUFBdUQsNkRBQTZCO0lBRW5GLDJDQUFZLFdBQXdCO2VBQ25DLGtCQUFNLFdBQVcsRUFBRSxtQ0FBbUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQseURBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLHdCQUF3QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRix3Q0FBQztBQUFELENBQUMsQUFWRCxDQUF1RCxjQUFjLEdBVXBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbldpZHRoU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdDb21wb3NpdGlvbldpZHRoU2V0QWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cblxufVxuIl19