/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { UniqueFilterSelectedEvent } from './unique-filter-selected.event';
var UniqueFilterSelectedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(UniqueFilterSelectedAggregateEvent, _super);
    function UniqueFilterSelectedAggregateEvent(aggregateId) {
        return _super.call(this, aggregateId, 'UniqueFilterSelectedAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    UniqueFilterSelectedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new UniqueFilterSelectedEvent(this.getAggregateId());
    };
    return UniqueFilterSelectedAggregateEvent;
}(AggregateEvent));
export { UniqueFilterSelectedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluL3VuaXF1ZS9zZWxlY3QvdW5pcXVlLWZpbHRlci1zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHM0U7SUFBd0QsOERBQTJCO0lBRWxGLDRDQUFZLFdBQXdCO2VBQ25DLGtCQUFNLFdBQVcsRUFBRSxvQ0FBb0MsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQsMERBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLHlCQUF5QixDQUNuQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUYseUNBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBd0QsY0FBYyxHQVlyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQgfSBmcm9tICcuL3VuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVGaWx0ZXJTZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1VuaXF1ZUZpbHRlclNlbGVjdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQoXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKClcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==