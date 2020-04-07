/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
export class StructurePreparedEntitiesSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} preparedItems
     */
    constructor(aggregateId, preparedItems) {
        super(aggregateId, 'StructurePreparedEntitiesSetAggregateEvent');
        this.preparedItems = preparedItems;
    }
    /**
     * @return {?}
     */
    getPreparedItems() {
        return this.preparedItems;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedEntitiesSetAggregateEvent.prototype.preparedItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtZW50aXRpZXMtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBTWpFLE1BQU0sT0FBTywwQ0FBMkMsU0FBUSxjQUEyQjs7Ozs7SUFFMUYsWUFBWSxXQUF3QixFQUNoQixhQUFzQztRQUN6RCxLQUFLLENBQUMsV0FBVyxFQUFFLDRDQUE0QyxDQUFDLENBQUM7UUFEOUMsa0JBQWEsR0FBYixhQUFhLENBQXlCO0lBRTFELENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztDQUVEOzs7Ozs7SUFSRyxtRUFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHByZXBhcmVkSXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdGdldFByZXBhcmVkSXRlbXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnByZXBhcmVkSXRlbXM7XG5cdH1cblxufVxuIl19