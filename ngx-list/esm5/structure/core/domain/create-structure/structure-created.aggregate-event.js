/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureCreatedEvent } from './structure-created.event';
import { StructureAggregateEvent } from '../structure.aggregate-event';
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
}(StructureAggregateEvent));
export { StructureCreatedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9kb21haW4vY3JlYXRlLXN0cnVjdHVyZS9zdHJ1Y3R1cmUtY3JlYXRlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUd2RTtJQUFvRCwwREFBdUI7SUFFMUUsd0NBQVksV0FBd0I7ZUFDbkMsa0JBQU0sV0FBVyxFQUFFLGdDQUFnQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCxzREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNGLHFDQUFDO0FBQUQsQ0FBQyxBQVRELENBQW9ELHVCQUF1QixHQVMxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnU3RydWN0dXJlQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0fVxufVxuIl19