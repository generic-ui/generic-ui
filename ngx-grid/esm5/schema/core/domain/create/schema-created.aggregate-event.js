/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SchemaCreatedEvent } from './schema-created.event';
import { SchemaAggregateEvent } from '../schema.aggregate-event';
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
}(SchemaAggregateEvent));
export { SchemaCreatedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvY29yZS9kb21haW4vY3JlYXRlL3NjaGVtYS1jcmVhdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpFO0lBQWlELHVEQUFvQjtJQUVwRSxxQ0FBWSxXQUFxQjtlQUNoQyxrQkFBTSxXQUFXLEVBQUUsNkJBQTZCLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELG1EQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0Ysa0NBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBaUQsb0JBQW9CLEdBU3BFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2FwaS9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi9zY2hlbWEtY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL3NjaGVtYS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgU2NoZW1hQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTY2hlbWFJZCkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnU2NoZW1hQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFNjaGVtYUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTY2hlbWFDcmVhdGVkRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0fVxufVxuIl19