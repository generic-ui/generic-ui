/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ActiveFiltersSetEvent } from '../active-filters-set.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
var FilterRemovedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterRemovedAggregateEvent, _super);
    function FilterRemovedAggregateEvent(aggregateId, activeFilters) {
        var _this = _super.call(this, aggregateId, 'FilterRemovedAggregateEvent') || this;
        _this.activeFilters = activeFilters;
        return _this;
    }
    /**
     * @return {?}
     */
    FilterRemovedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new ActiveFiltersSetEvent(this.getAggregateId(), this.activeFilters);
    };
    return FilterRemovedAggregateEvent;
}(StructureAggregateEvent));
export { FilterRemovedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterRemovedAggregateEvent.prototype.activeFilters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXJlbW92ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL2NvcmUvcmVtb3ZlL2ZpbHRlci1yZW1vdmVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXBFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRy9GO0lBQWlELHVEQUF1QjtJQUV2RSxxQ0FBWSxXQUF3QixFQUNoQixhQUFtRDtRQUR2RSxZQUVDLGtCQUFNLFdBQVcsRUFBRSw2QkFBNkIsQ0FBQyxTQUNqRDtRQUZtQixtQkFBYSxHQUFiLGFBQWEsQ0FBc0M7O0lBRXZFLENBQUM7Ozs7SUFFRCxtREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUkscUJBQXFCLENBQy9CLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FDbEIsQ0FBQztJQUNILENBQUM7SUFFRixrQ0FBQztBQUFELENBQUMsQUFkRCxDQUFpRCx1QkFBdUIsR0FjdkU7Ozs7Ozs7SUFYRyxvREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlcnNTZXRFdmVudCB9IGZyb20gJy4uL2FjdGl2ZS1maWx0ZXJzLXNldC5ldmVudCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJSZW1vdmVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUZpbHRlcnM6IFJlYWRvbmx5QXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnRmlsdGVyUmVtb3ZlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQoXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHR0aGlzLmFjdGl2ZUZpbHRlcnNcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==