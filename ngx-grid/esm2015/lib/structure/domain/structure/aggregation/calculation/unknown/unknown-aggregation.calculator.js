/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregationCalculator } from '../aggregation.calculator';
import { UnknownAggregatedValues } from './unknown-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
export class UnknownAggregationCalculator extends AggregationCalculator {
    constructor() {
        super();
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    forDataType(dataType) {
        return dataType === DataType.UNKNOWN;
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
        return new UnknownAggregatedValues();
    }
}
UnknownAggregationCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UnknownAggregationCalculator.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vY2FsY3VsYXRpb24vdW5rbm93bi91bmtub3duLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTTlELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxxQkFBbUQ7SUFFcEc7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBaUI7SUFDekIsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWlCLEVBQUUsS0FBOEI7SUFDL0QsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWlCLEVBQUUsS0FBVTtJQUN2QyxDQUFDOzs7OztJQUVELHdCQUF3QixDQUFDLEtBQWlCO1FBQ3pDLE9BQU8sSUFBSSx1QkFBdUIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7OztZQXRCRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25DYWxjdWxhdG9yIH0gZnJvbSAnLi4vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBVbmtub3duQWdncmVnYXRlZFZhbHVlcyB9IGZyb20gJy4vdW5rbm93bi1hZ2dyZWdhdGVkLnZhbHVlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVW5rbm93bkFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciBleHRlbmRzIEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvcjxhbnksIFVua25vd25BZ2dyZWdhdGVkVmFsdWVzPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkYXRhVHlwZSA9PT0gRGF0YVR5cGUuVU5LTk9XTjtcblx0fVxuXG5cdHByZXBhcmUoZmllbGQ6IEZpZWxkPGFueT4pOiB2b2lkIHtcblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkPGFueT4sIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZDxhbnk+LCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkPGFueT4pOiBVbmtub3duQWdncmVnYXRlZFZhbHVlcyB7XG5cdFx0cmV0dXJuIG5ldyBVbmtub3duQWdncmVnYXRlZFZhbHVlcygpO1xuXHR9XG5cbn1cbiJdfQ==