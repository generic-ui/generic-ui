/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { DateSummarizedValues } from './date-summarized.values';
import { DataType } from '../../../field/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zdW1tYXJpZXMuY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N1bW1hcmllcy9jYWxjdWxhdGlvbi9kYXRlL2RhdGUtc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTTlELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxtQkFBK0M7SUFFM0Y7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBa0I7SUFDMUIsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWtCLEVBQUUsS0FBOEI7SUFDaEUsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWtCLEVBQUUsS0FBVztJQUN6QyxDQUFDOzs7OztJQUVELHdCQUF3QixDQUFDLEtBQWtCO1FBQzFDLE9BQU8sSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQXRCRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi4vc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgRGF0ZVN1bW1hcml6ZWRWYWx1ZXMgfSBmcm9tICcuL2RhdGUtc3VtbWFyaXplZC52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVTdW1tYXJpZXNDYWxjdWxhdG9yIGV4dGVuZHMgU3VtbWFyaWVzQ2FsY3VsYXRvcjxEYXRlLCBEYXRlU3VtbWFyaXplZFZhbHVlcz4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF0YVR5cGUgPT09IERhdGFUeXBlLkRBVEU7XG5cdH1cblxuXHRwcmVwYXJlKGZpZWxkOiBGaWVsZDxEYXRlPik6IHZvaWQge1xuXHR9XG5cblx0cG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQ8RGF0ZT4sIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZDxEYXRlPiwgdmFsdWU6IERhdGUpOiB2b2lkIHtcblx0fVxuXG5cdGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQ8RGF0ZT4pOiBEYXRlU3VtbWFyaXplZFZhbHVlcyB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlU3VtbWFyaXplZFZhbHVlcygpO1xuXHR9XG5cbn1cbiJdfQ==