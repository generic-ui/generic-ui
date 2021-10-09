/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ActiveFiltersSetEvent } from '../active-filters-set.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
export class FilterAddedAggregateEvent extends StructureAggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} activeFilters
     */
    constructor(aggregateId, activeFilters) {
        super(aggregateId, 'FilterAddedEvent');
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
    FilterAddedAggregateEvent.prototype.activeFilters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWFkZGVkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi9jb3JlL2FkZC9maWx0ZXItYWRkZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUcvRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsdUJBQXVCOzs7OztJQUVyRSxZQUFZLFdBQXdCLEVBQ2hCLGFBQW1EO1FBQ3RFLEtBQUssQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQURwQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0M7SUFFdkUsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUkscUJBQXFCLENBQy9CLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FDbEIsQ0FBQztJQUNILENBQUM7Q0FFRDs7Ozs7O0lBWEcsa0RBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJBZGRlZEV2ZW50IH0gZnJvbSAnLi9maWx0ZXItYWRkZWQuZXZlbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyc1NldEV2ZW50IH0gZnJvbSAnLi4vYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlckFkZGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUZpbHRlcnM6IFJlYWRvbmx5QXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnRmlsdGVyQWRkZWRFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgQWN0aXZlRmlsdGVyc1NldEV2ZW50KFxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0dGhpcy5hY3RpdmVGaWx0ZXJzXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=