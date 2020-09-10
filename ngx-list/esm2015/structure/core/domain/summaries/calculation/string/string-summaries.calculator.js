/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { StringSummarizedValues } from './string-summarized.values';
import { DataType } from '../../../../../field/domain/core/field/data/data-type';
export class StringSummariesCalculator extends SummariesCalculator {
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
        return new StringSummarizedValues();
    }
}
StringSummariesCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StringSummariesCalculator.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLXN1bW1hcmllcy5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9kb21haW4vc3VtbWFyaWVzL2NhbGN1bGF0aW9uL3N0cmluZy9zdHJpbmctc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBTWpGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxtQkFBbUQ7SUFFakc7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBWTtJQUNwQixDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBWSxFQUFFLEtBQThCO0lBQzFELENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFZLEVBQUUsS0FBYTtJQUNyQyxDQUFDOzs7OztJQUVELHdCQUF3QixDQUFDLEtBQVk7UUFDcEMsT0FBTyxJQUFJLHNCQUFzQixFQUFFLENBQUM7SUFDckMsQ0FBQzs7O1lBdEJELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi9zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBTdHJpbmdTdW1tYXJpemVkVmFsdWVzIH0gZnJvbSAnLi9zdHJpbmctc3VtbWFyaXplZC52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJpbmdTdW1tYXJpZXNDYWxjdWxhdG9yIGV4dGVuZHMgU3VtbWFyaWVzQ2FsY3VsYXRvcjxzdHJpbmcsIFN0cmluZ1N1bW1hcml6ZWRWYWx1ZXM+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5TVFJJTkc7XG5cdH1cblxuXHRwcmVwYXJlKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXHR9XG5cblx0cG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQsIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHR9XG5cblx0Z2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBGaWVsZCk6IFN0cmluZ1N1bW1hcml6ZWRWYWx1ZXMge1xuXHRcdHJldHVybiBuZXcgU3RyaW5nU3VtbWFyaXplZFZhbHVlcygpO1xuXHR9XG5cbn1cbiJdfQ==