/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { ActiveFiltersSetEvent } from '../active-filters-set.event';
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
}(AggregateEvent));
export { FilterRemovedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterRemovedAggregateEvent.prototype.activeFilters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXJlbW92ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi9jb3JlL3JlbW92ZS9maWx0ZXItcmVtb3ZlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJcEU7SUFBaUQsdURBQTJCO0lBRTNFLHFDQUFZLFdBQXdCLEVBQ2hCLGFBQW1EO1FBRHZFLFlBRUMsa0JBQU0sV0FBVyxFQUFFLDZCQUE2QixDQUFDLFNBQ2pEO1FBRm1CLG1CQUFhLEdBQWIsYUFBYSxDQUFzQzs7SUFFdkUsQ0FBQzs7OztJQUVELG1EQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxxQkFBcUIsQ0FDL0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUNyQixJQUFJLENBQUMsYUFBYSxDQUNsQixDQUFDO0lBQ0gsQ0FBQztJQUVGLGtDQUFDO0FBQUQsQ0FBQyxBQWRELENBQWlELGNBQWMsR0FjOUQ7Ozs7Ozs7SUFYRyxvREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQgfSBmcm9tICcuLi9hY3RpdmUtZmlsdGVycy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsJztcblxuXG5leHBvcnQgY2xhc3MgRmlsdGVyUmVtb3ZlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlRmlsdGVyczogUmVhZG9ubHlBcnJheTxBY3RpdmVGaWx0ZXJSZWFkTW9kZWw+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdGaWx0ZXJSZW1vdmVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IEFjdGl2ZUZpbHRlcnNTZXRFdmVudChcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdHRoaXMuYWN0aXZlRmlsdGVyc1xuXHRcdCk7XG5cdH1cblxufVxuIl19