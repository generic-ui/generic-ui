/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { StructureCreatedEvent } from './structure-created.event';
var StructureCreatedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureCreatedAggregateEvent, _super);
    function StructureCreatedAggregateEvent(aggregateId) {
        return _super.call(this, aggregateId, 'StructureCreatedAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    StructureCreatedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new StructureCreatedEvent(this.getAggregateId());
    };
    return StructureCreatedAggregateEvent;
}(AggregateEvent));
export { StructureCreatedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9kb21haW4vY3JlYXRlLXN0cnVjdHVyZS9zdHJ1Y3R1cmUtY3JlYXRlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHbEU7SUFBb0QsMERBQTJCO0lBRTlFLHdDQUFZLFdBQXdCO2VBQ25DLGtCQUFNLFdBQVcsRUFBRSxnQ0FBZ0MsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsc0RBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRixxQ0FBQztBQUFELENBQUMsQUFURCxDQUFvRCxjQUFjLEdBU2pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtY3JlYXRlZC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNyZWF0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTdHJ1Y3R1cmVDcmVhdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG59XG4iXX0=