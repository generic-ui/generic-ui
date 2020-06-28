/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { FilterTypesInitedEvent } from './filter-types-inited.event';
export class FilterTypesInitedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} structureId
     * @param {?} filterTypes
     */
    constructor(structureId, filterTypes) {
        super(structureId, 'FilterTypesInitedAggregateEvent');
        this.filterTypes = filterTypes;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new FilterTypesInitedEvent(this.getAggregateId(), this.filterTypes);
    }
    /**
     * @return {?}
     */
    getFilterTypes() {
        return this.filterTypes;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterTypesInitedAggregateEvent.prototype.filterTypes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGVzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluL3R5cGUvaW5pdC9maWx0ZXItdHlwZXMtaW5pdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBSWpFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3JFLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxjQUEyQjs7Ozs7SUFFL0UsWUFBWSxXQUF3QixFQUNoQixXQUFvRDtRQUN2RSxLQUFLLENBQUMsV0FBVyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFEbkMsZ0JBQVcsR0FBWCxXQUFXLENBQXlDO0lBRXhFLENBQUM7Ozs7SUFFRCxhQUFhO1FBRVosT0FBTyxJQUFJLHNCQUFzQixDQUNoQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQ3JCLElBQUksQ0FBQyxXQUFXLENBQ2hCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDO0NBQ0Q7Ozs7OztJQWZHLHNEQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3R5cGUvZmlsdGVyLXR5cGUucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50IH0gZnJvbSAnLi9maWx0ZXItdHlwZXMtaW5pdGVkLmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgRmlsdGVyVHlwZXNJbml0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVzOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPj4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ0ZpbHRlclR5cGVzSW5pdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRcdHJldHVybiBuZXcgRmlsdGVyVHlwZXNJbml0ZWRFdmVudChcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdHRoaXMuZmlsdGVyVHlwZXNcblx0XHQpO1xuXHR9XG5cblx0Z2V0RmlsdGVyVHlwZXMoKTogTWFwPHN0cmluZywgQXJyYXk8RmlsdGVyVHlwZVJlYWRNb2RlbD4+IHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJUeXBlcztcblx0fVxufVxuIl19