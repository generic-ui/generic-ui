/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregationCalculator } from '../aggregation.calculator';
import { StringAggregatedValues } from './string-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
export class StringAggregationCalculator extends AggregationCalculator {
    constructor() {
        super();
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    forDataType(dataType) {
        return dataType === DataType.STRING;
    }
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    aggregate(field, value) {
    }
    /**
     * @param {?} field
     * @return {?}
     */
    generateAggregatedValues(field) {
        return new StringAggregatedValues();
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prepare(field) {
    }
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    postCalculate(field, items) { }
}
StringAggregationCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StringAggregationCalculator.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL2NhbGN1bGF0aW9uL3N0cmluZy9zdHJpbmctYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFPOUQsTUFBTSxPQUFPLDJCQUE0QixTQUFRLHFCQUFxRDtJQUVyRztRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBWSxFQUFFLEtBQWE7SUFDckMsQ0FBQzs7Ozs7SUFFRCx3QkFBd0IsQ0FBQyxLQUFZO1FBQ3BDLE9BQU8sSUFBSSxzQkFBc0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQVk7SUFDcEIsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQVksRUFBRSxLQUE4QixJQUFTLENBQUM7OztZQXJCcEUsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciB9IGZyb20gJy4uL2FnZ3JlZ2F0aW9uLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgU3RyaW5nQWdncmVnYXRlZFZhbHVlcyB9IGZyb20gJy4vc3RyaW5nLWFnZ3JlZ2F0ZWQudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RyaW5nQWdncmVnYXRpb25DYWxjdWxhdG9yIGV4dGVuZHMgQWdncmVnYXRpb25DYWxjdWxhdG9yPHN0cmluZywgU3RyaW5nQWdncmVnYXRlZFZhbHVlcz4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF0YVR5cGUgPT09IERhdGFUeXBlLlNUUklORztcblx0fVxuXG5cdGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0fVxuXG5cdGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQpOiBTdHJpbmdBZ2dyZWdhdGVkVmFsdWVzIHtcblx0XHRyZXR1cm4gbmV3IFN0cmluZ0FnZ3JlZ2F0ZWRWYWx1ZXMoKTtcblx0fVxuXG5cdHByZXBhcmUoZmllbGQ6IEZpZWxkKTogdm9pZCB7XG5cdH1cblxuXHRwb3N0Q2FsY3VsYXRlKGZpZWxkOiBGaWVsZCwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7fVxuXG59XG4iXX0=