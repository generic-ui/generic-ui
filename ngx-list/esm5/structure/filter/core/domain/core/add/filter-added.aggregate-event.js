/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ActiveFiltersSetEvent } from '../active-filters-set.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
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
}(StructureAggregateEvent));
export { FilterAddedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterAddedAggregateEvent.prototype.activeFilters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWFkZGVkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi9jb3JlL2FkZC9maWx0ZXItYWRkZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHL0Y7SUFBK0MscURBQXVCO0lBRXJFLG1DQUFZLFdBQXdCLEVBQ2hCLGFBQW1EO1FBRHZFLFlBRUMsa0JBQU0sV0FBVyxFQUFFLGtCQUFrQixDQUFDLFNBQ3RDO1FBRm1CLG1CQUFhLEdBQWIsYUFBYSxDQUFzQzs7SUFFdkUsQ0FBQzs7OztJQUVELGlEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxxQkFBcUIsQ0FDL0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUNyQixJQUFJLENBQUMsYUFBYSxDQUNsQixDQUFDO0lBQ0gsQ0FBQztJQUVGLGdDQUFDO0FBQUQsQ0FBQyxBQWRELENBQStDLHVCQUF1QixHQWNyRTs7Ozs7OztJQVhHLGtEQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQWRkZWRFdmVudCB9IGZyb20gJy4vZmlsdGVyLWFkZGVkLmV2ZW50JztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2FwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlcnNTZXRFdmVudCB9IGZyb20gJy4uL2FjdGl2ZS1maWx0ZXJzLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJBZGRlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVGaWx0ZXJzOiBSZWFkb25seUFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0ZpbHRlckFkZGVkRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IEFjdGl2ZUZpbHRlcnNTZXRFdmVudChcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdHRoaXMuYWN0aXZlRmlsdGVyc1xuXHRcdCk7XG5cdH1cblxufVxuIl19