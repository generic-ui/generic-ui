/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { SchemaCreatedEvent } from './schema-created.event';
var SchemaCreatedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaCreatedAggregateEvent, _super);
    function SchemaCreatedAggregateEvent(aggregateId) {
        return _super.call(this, aggregateId, 'SchemaCreatedAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    SchemaCreatedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new SchemaCreatedEvent(this.getAggregateId());
    };
    return SchemaCreatedAggregateEvent;
}(AggregateEvent));
export { SchemaCreatedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvZG9tYWluL2NyZWF0ZS9zY2hlbWEtY3JlYXRlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7SUFBaUQsdURBQXdCO0lBRXhFLHFDQUFZLFdBQXFCO2VBQ2hDLGtCQUFNLFdBQVcsRUFBRSw2QkFBNkIsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsbURBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRixrQ0FBQztBQUFELENBQUMsQUFURCxDQUFpRCxjQUFjLEdBUzlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi9zY2hlbWEtY3JlYXRlZC5ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFDcmVhdGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxTY2hlbWFJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTY2hlbWFJZCkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnU2NoZW1hQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFNjaGVtYUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTY2hlbWFDcmVhdGVkRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0fVxufVxuIl19