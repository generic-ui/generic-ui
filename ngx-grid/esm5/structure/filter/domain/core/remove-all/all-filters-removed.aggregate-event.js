/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { ActiveFiltersSetEvent } from '../active-filters-set.event';
var AllFiltersRemovedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(AllFiltersRemovedAggregateEvent, _super);
    function AllFiltersRemovedAggregateEvent(aggregateId) {
        return _super.call(this, aggregateId, 'FilterAddedEvent') || this;
    }
    /**
     * @return {?}
     */
    AllFiltersRemovedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new ActiveFiltersSetEvent(this.getAggregateId(), []);
    };
    return AllFiltersRemovedAggregateEvent;
}(AggregateEvent));
export { AllFiltersRemovedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWZpbHRlcnMtcmVtb3ZlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluL2NvcmUvcmVtb3ZlLWFsbC9hbGwtZmlsdGVycy1yZW1vdmVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUdwRTtJQUFxRCwyREFBMkI7SUFFL0UseUNBQVksV0FBd0I7ZUFDbkMsa0JBQU0sV0FBVyxFQUFFLGtCQUFrQixDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCx1REFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUkscUJBQXFCLENBQy9CLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDckIsRUFBRSxDQUNGLENBQUM7SUFDSCxDQUFDO0lBRUYsc0NBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBcUQsY0FBYyxHQWFsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlcnNTZXRFdmVudCB9IGZyb20gJy4uL2FjdGl2ZS1maWx0ZXJzLXNldC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEFsbEZpbHRlcnNSZW1vdmVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnRmlsdGVyQWRkZWRFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgQWN0aXZlRmlsdGVyc1NldEV2ZW50KFxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0W11cblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==