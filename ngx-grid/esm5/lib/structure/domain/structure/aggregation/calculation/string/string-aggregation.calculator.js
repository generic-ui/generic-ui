/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregationCalculator } from '../aggregation.calculator';
import { StringAggregatedValues } from './string-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
var StringAggregationCalculator = /** @class */ (function (_super) {
    tslib_1.__extends(StringAggregationCalculator, _super);
    function StringAggregationCalculator() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    StringAggregationCalculator.prototype.forDataType = /**
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
    StringAggregationCalculator.prototype.prepare = /**
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
    StringAggregationCalculator.prototype.postCalculate = /**
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
    StringAggregationCalculator.prototype.aggregate = /**
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
    StringAggregationCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new StringAggregatedValues();
    };
    StringAggregationCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StringAggregationCalculator.ctorParameters = function () { return []; };
    return StringAggregationCalculator;
}(AggregationCalculator));
export { StringAggregationCalculator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9hZ2dyZWdhdGlvbi9jYWxjdWxhdGlvbi9zdHJpbmcvc3RyaW5nLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUs5RDtJQUNpRCx1REFBcUQ7SUFFckc7ZUFDQyxpQkFBTztJQUNSLENBQUM7Ozs7O0lBRUQsaURBQVc7Ozs7SUFBWCxVQUFZLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCw2Q0FBTzs7OztJQUFQLFVBQVEsS0FBb0I7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsbURBQWE7Ozs7O0lBQWIsVUFBYyxLQUFvQixFQUFFLEtBQThCO0lBQ2xFLENBQUM7Ozs7OztJQUVELCtDQUFTOzs7OztJQUFULFVBQVUsS0FBb0IsRUFBRSxLQUFhO0lBQzdDLENBQUM7Ozs7O0lBRUQsOERBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQW9CO1FBQzVDLE9BQU8sSUFBSSxzQkFBc0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7O2dCQXRCRCxVQUFVOzs7O0lBd0JYLGtDQUFDO0NBQUEsQUF4QkQsQ0FDaUQscUJBQXFCLEdBdUJyRTtTQXZCWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3IgfSBmcm9tICcuLi9hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFN0cmluZ0FnZ3JlZ2F0ZWRWYWx1ZXMgfSBmcm9tICcuL3N0cmluZy1hZ2dyZWdhdGVkLnZhbHVlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RyaW5nQWdncmVnYXRpb25DYWxjdWxhdG9yIGV4dGVuZHMgQWdncmVnYXRpb25DYWxjdWxhdG9yPHN0cmluZywgU3RyaW5nQWdncmVnYXRlZFZhbHVlcz4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF0YVR5cGUgPT09IERhdGFUeXBlLlNUUklORztcblx0fVxuXG5cdHByZXBhcmUoZmllbGQ6IEZpZWxkPHN0cmluZz4pOiB2b2lkIHtcblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkPHN0cmluZz4sIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZDxzdHJpbmc+LCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkPHN0cmluZz4pOiBTdHJpbmdBZ2dyZWdhdGVkVmFsdWVzIHtcblx0XHRyZXR1cm4gbmV3IFN0cmluZ0FnZ3JlZ2F0ZWRWYWx1ZXMoKTtcblx0fVxuXG59XG4iXX0=