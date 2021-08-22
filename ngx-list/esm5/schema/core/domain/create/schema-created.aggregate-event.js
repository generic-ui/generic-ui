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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvY29yZS9kb21haW4vY3JlYXRlL3NjaGVtYS1jcmVhdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpFO0lBQWlELHVEQUFvQjtJQUVwRSxxQ0FBWSxXQUFxQjtlQUNoQyxrQkFBTSxXQUFXLEVBQUUsNkJBQTZCLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELG1EQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0Ysa0NBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBaUQsb0JBQW9CLEdBU3BFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFDcmVhdGVkRXZlbnQgfSBmcm9tICcuL3NjaGVtYS1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vc2NoZW1hLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFDcmVhdGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTY2hlbWFBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFNjaGVtYUlkKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTY2hlbWFDcmVhdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U2NoZW1hSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYUNyZWF0ZWRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG59XG4iXX0=