/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ActiveFiltersSetEvent } from '../active-filters-set.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
export class FilterRemovedAggregateEvent extends StructureAggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} activeFilters
     */
    constructor(aggregateId, activeFilters) {
        super(aggregateId, 'FilterRemovedAggregateEvent');
        this.activeFilters = activeFilters;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new ActiveFiltersSetEvent(this.getAggregateId(), this.activeFilters);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterRemovedAggregateEvent.prototype.activeFilters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXJlbW92ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL2NvcmUvcmVtb3ZlL2ZpbHRlci1yZW1vdmVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHL0YsTUFBTSxPQUFPLDJCQUE0QixTQUFRLHVCQUF1Qjs7Ozs7SUFFdkUsWUFBWSxXQUF3QixFQUNoQixhQUFtRDtRQUN0RSxLQUFLLENBQUMsV0FBVyxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFEL0Isa0JBQWEsR0FBYixhQUFhLENBQXNDO0lBRXZFLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLHFCQUFxQixDQUMvQixJQUFJLENBQUMsY0FBYyxFQUFFLEVBQ3JCLElBQUksQ0FBQyxhQUFhLENBQ2xCLENBQUM7SUFDSCxDQUFDO0NBRUQ7Ozs7OztJQVhHLG9EQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyc1NldEV2ZW50IH0gZnJvbSAnLi4vYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2FwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlclJlbW92ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlRmlsdGVyczogUmVhZG9ubHlBcnJheTxBY3RpdmVGaWx0ZXJSZWFkTW9kZWw+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdGaWx0ZXJSZW1vdmVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IEFjdGl2ZUZpbHRlcnNTZXRFdmVudChcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdHRoaXMuYWN0aXZlRmlsdGVyc1xuXHRcdCk7XG5cdH1cblxufVxuIl19