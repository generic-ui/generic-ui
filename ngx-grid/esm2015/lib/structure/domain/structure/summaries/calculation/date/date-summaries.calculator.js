/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { DateSummarizedValues } from './date-summarized.values';
import { DataType } from '../../../../../../../structure/field/domain/data-type/data-type';
export class DateSummariesCalculator extends SummariesCalculator {
    constructor() {
        super();
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    forDataType(dataType) {
        return dataType === DataType.DATE;
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
        return new DateSummarizedValues();
    }
}
DateSummariesCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DateSummariesCalculator.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zdW1tYXJpZXMuY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N1bW1hcmllcy9jYWxjdWxhdGlvbi9kYXRlL2RhdGUtc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBTTNGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxtQkFBK0M7SUFFM0Y7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBa0I7SUFDMUIsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWtCLEVBQUUsS0FBOEI7SUFDaEUsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWtCLEVBQUUsS0FBVztJQUN6QyxDQUFDOzs7OztJQUVELHdCQUF3QixDQUFDLEtBQWtCO1FBQzFDLE9BQU8sSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQXRCRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi4vc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgRGF0ZVN1bW1hcml6ZWRWYWx1ZXMgfSBmcm9tICcuL2RhdGUtc3VtbWFyaXplZC52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlU3VtbWFyaWVzQ2FsY3VsYXRvciBleHRlbmRzIFN1bW1hcmllc0NhbGN1bGF0b3I8RGF0ZSwgRGF0ZVN1bW1hcml6ZWRWYWx1ZXM+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5EQVRFO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQ8RGF0ZT4pOiB2b2lkIHtcblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkPERhdGU+LCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblx0fVxuXG5cdGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQ8RGF0ZT4sIHZhbHVlOiBEYXRlKTogdm9pZCB7XG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkPERhdGU+KTogRGF0ZVN1bW1hcml6ZWRWYWx1ZXMge1xuXHRcdHJldHVybiBuZXcgRGF0ZVN1bW1hcml6ZWRWYWx1ZXMoKTtcblx0fVxuXG59XG4iXX0=