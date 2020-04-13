/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { StringSummarizedValues } from './string-summarized.values';
import { DataType } from '../../../field/data-type/data-type';
var StringSummariesCalculator = /** @class */ (function (_super) {
    tslib_1.__extends(StringSummariesCalculator, _super);
    function StringSummariesCalculator() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    StringSummariesCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.STRING;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StringSummariesCalculator.prototype.prepare = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
    };
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    StringSummariesCalculator.prototype.postCalculate = /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    function (field, items) {
    };
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    StringSummariesCalculator.prototype.aggregate = /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StringSummariesCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new StringSummarizedValues();
    };
    StringSummariesCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StringSummariesCalculator.ctorParameters = function () { return []; };
    return StringSummariesCalculator;
}(SummariesCalculator));
export { StringSummariesCalculator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLXN1bW1hcmllcy5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NhbGN1bGF0aW9uL3N0cmluZy9zdHJpbmctc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUs5RDtJQUMrQyxxREFBbUQ7SUFFakc7ZUFDQyxpQkFBTztJQUNSLENBQUM7Ozs7O0lBRUQsK0NBQVc7Ozs7SUFBWCxVQUFZLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCwyQ0FBTzs7OztJQUFQLFVBQVEsS0FBb0I7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsaURBQWE7Ozs7O0lBQWIsVUFBYyxLQUFvQixFQUFFLEtBQThCO0lBQ2xFLENBQUM7Ozs7OztJQUVELDZDQUFTOzs7OztJQUFULFVBQVUsS0FBb0IsRUFBRSxLQUFhO0lBQzdDLENBQUM7Ozs7O0lBRUQsNERBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQW9CO1FBQzVDLE9BQU8sSUFBSSxzQkFBc0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7O2dCQXRCRCxVQUFVOzs7O0lBd0JYLGdDQUFDO0NBQUEsQUF4QkQsQ0FDK0MsbUJBQW1CLEdBdUJqRTtTQXZCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi4vc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgU3RyaW5nU3VtbWFyaXplZFZhbHVlcyB9IGZyb20gJy4vc3RyaW5nLXN1bW1hcml6ZWQudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJpbmdTdW1tYXJpZXNDYWxjdWxhdG9yIGV4dGVuZHMgU3VtbWFyaWVzQ2FsY3VsYXRvcjxzdHJpbmcsIFN0cmluZ1N1bW1hcml6ZWRWYWx1ZXM+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5TVFJJTkc7XG5cdH1cblxuXHRwcmVwYXJlKGZpZWxkOiBGaWVsZDxzdHJpbmc+KTogdm9pZCB7XG5cdH1cblxuXHRwb3N0Q2FsY3VsYXRlKGZpZWxkOiBGaWVsZDxzdHJpbmc+LCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblx0fVxuXG5cdGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQ8c3RyaW5nPiwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHR9XG5cblx0Z2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBGaWVsZDxzdHJpbmc+KTogU3RyaW5nU3VtbWFyaXplZFZhbHVlcyB7XG5cdFx0cmV0dXJuIG5ldyBTdHJpbmdTdW1tYXJpemVkVmFsdWVzKCk7XG5cdH1cblxufVxuIl19