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
        return _super.call(this, aggregateId, 'SchemaCreatedEvent') || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc2NoZW1hL2RvbWFpbi9jcmVhdGUvc2NoZW1hLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEO0lBQWlELHVEQUF3QjtJQUV4RSxxQ0FBWSxXQUFxQjtlQUNoQyxrQkFBTSxXQUFXLEVBQUUsb0JBQW9CLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELG1EQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0Ysa0NBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBaUQsY0FBYyxHQVM5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYUNyZWF0ZWRFdmVudCB9IGZyb20gJy4vc2NoZW1hLWNyZWF0ZWQuZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U2NoZW1hSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU2NoZW1hSWQpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1NjaGVtYUNyZWF0ZWRFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTY2hlbWFJZD4ge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hQ3JlYXRlZEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cbn1cbiJdfQ==