/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
export class StructureAggregationsChangedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} aggregatedValues
     */
    constructor(aggregateId, aggregatedValues) {
        super(aggregateId, 'StructureAggregationsChangedAggregateEvent');
        this.aggregatedValues = aggregatedValues;
    }
    /**
     * @return {?}
     */
    getAggregations() {
        return this.aggregatedValues;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationsChangedAggregateEvent.prototype.aggregatedValues;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9ucy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9ucy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBS2pFLE1BQU0sT0FBTywwQ0FBMkMsU0FBUSxjQUFjOzs7OztJQUU3RSxZQUFZLFdBQXdCLEVBQ2hCLGdCQUErQztRQUNsRSxLQUFLLENBQUMsV0FBVyxFQUFFLDRDQUE0QyxDQUFDLENBQUM7UUFEOUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUErQjtJQUVuRSxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Q0FDRDs7Ozs7O0lBUEcsc0VBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZWRWYWx1ZXMgfSBmcm9tICcuL2NhbGN1bGF0aW9uL2FnZ3JlZ2F0ZWQudmFsdWVzJztcblxuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZWRWYWx1ZXM6IE1hcDxzdHJpbmcsIEFnZ3JlZ2F0ZWRWYWx1ZXM+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdGdldEFnZ3JlZ2F0aW9ucygpOiBNYXA8c3RyaW5nLCBBZ2dyZWdhdGVkVmFsdWVzPiB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRlZFZhbHVlcztcblx0fVxufVxuIl19