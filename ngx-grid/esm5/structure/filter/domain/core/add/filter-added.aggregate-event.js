/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { ActiveFiltersSetEvent } from '../active-filters-set.event';
var FilterAddedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterAddedAggregateEvent, _super);
    function FilterAddedAggregateEvent(aggregateId, activeFilters) {
        var _this = _super.call(this, aggregateId, 'FilterAddedEvent') || this;
        _this.activeFilters = activeFilters;
        return _this;
    }
    /**
     * @return {?}
     */
    FilterAddedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new ActiveFiltersSetEvent(this.getAggregateId(), this.activeFilters);
    };
    return FilterAddedAggregateEvent;
}(AggregateEvent));
export { FilterAddedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterAddedAggregateEvent.prototype.activeFilters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWFkZGVkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4vY29yZS9hZGQvZmlsdGVyLWFkZGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUtqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUdwRTtJQUErQyxxREFBMkI7SUFFekUsbUNBQVksV0FBd0IsRUFDaEIsYUFBbUQ7UUFEdkUsWUFFQyxrQkFBTSxXQUFXLEVBQUUsa0JBQWtCLENBQUMsU0FDdEM7UUFGbUIsbUJBQWEsR0FBYixhQUFhLENBQXNDOztJQUV2RSxDQUFDOzs7O0lBRUQsaURBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLHFCQUFxQixDQUMvQixJQUFJLENBQUMsY0FBYyxFQUFFLEVBQ3JCLElBQUksQ0FBQyxhQUFhLENBQ2xCLENBQUM7SUFDSCxDQUFDO0lBRUYsZ0NBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBK0MsY0FBYyxHQWM1RDs7Ozs7OztJQVhHLGtEQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlckFkZGVkRXZlbnQgfSBmcm9tICcuL2ZpbHRlci1hZGRlZC5ldmVudCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyc1NldEV2ZW50IH0gZnJvbSAnLi4vYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgRmlsdGVyQWRkZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUZpbHRlcnM6IFJlYWRvbmx5QXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnRmlsdGVyQWRkZWRFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgQWN0aXZlRmlsdGVyc1NldEV2ZW50KFxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0dGhpcy5hY3RpdmVGaWx0ZXJzXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=