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
     * @return {?}
     */
    prepare(field) {
    }
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    postCalculate(field, items) {
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
}
StringAggregationCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StringAggregationCalculator.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL2NhbGN1bGF0aW9uL3N0cmluZy9zdHJpbmctYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFNOUQsTUFBTSxPQUFPLDJCQUE0QixTQUFRLHFCQUFxRDtJQUVyRztRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFZO0lBQ3BCLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxLQUFZLEVBQUUsS0FBOEI7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQVksRUFBRSxLQUFhO0lBQ3JDLENBQUM7Ozs7O0lBRUQsd0JBQXdCLENBQUMsS0FBWTtRQUNwQyxPQUFPLElBQUksc0JBQXNCLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7WUF0QkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciB9IGZyb20gJy4uL2FnZ3JlZ2F0aW9uLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgU3RyaW5nQWdncmVnYXRlZFZhbHVlcyB9IGZyb20gJy4vc3RyaW5nLWFnZ3JlZ2F0ZWQudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cmluZ0FnZ3JlZ2F0aW9uQ2FsY3VsYXRvciBleHRlbmRzIEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvcjxzdHJpbmcsIFN0cmluZ0FnZ3JlZ2F0ZWRWYWx1ZXM+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5TVFJJTkc7XG5cdH1cblxuXHRwcmVwYXJlKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXHR9XG5cblx0cG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQsIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHR9XG5cblx0Z2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBGaWVsZCk6IFN0cmluZ0FnZ3JlZ2F0ZWRWYWx1ZXMge1xuXHRcdHJldHVybiBuZXcgU3RyaW5nQWdncmVnYXRlZFZhbHVlcygpO1xuXHR9XG5cbn1cbiJdfQ==