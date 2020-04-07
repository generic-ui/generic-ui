/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregationCalculator } from '../aggregation.calculator';
import { DateAggregatedValues } from './date-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
var DateAggregationCalculator = /** @class */ (function (_super) {
    tslib_1.__extends(DateAggregationCalculator, _super);
    function DateAggregationCalculator() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    DateAggregationCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.DATE;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    DateAggregationCalculator.prototype.prepare = /**
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
    DateAggregationCalculator.prototype.postCalculate = /**
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
    DateAggregationCalculator.prototype.aggregate = /**
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
    DateAggregationCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new DateAggregatedValues();
    };
    DateAggregationCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DateAggregationCalculator.ctorParameters = function () { return []; };
    return DateAggregationCalculator;
}(AggregationCalculator));
export { DateAggregationCalculator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vY2FsY3VsYXRpb24vZGF0ZS9kYXRlLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUs5RDtJQUMrQyxxREFBaUQ7SUFFL0Y7ZUFDQyxpQkFBTztJQUNSLENBQUM7Ozs7O0lBRUQsK0NBQVc7Ozs7SUFBWCxVQUFZLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCwyQ0FBTzs7OztJQUFQLFVBQVEsS0FBa0I7SUFDMUIsQ0FBQzs7Ozs7O0lBRUQsaURBQWE7Ozs7O0lBQWIsVUFBYyxLQUFrQixFQUFFLEtBQThCO0lBQ2hFLENBQUM7Ozs7OztJQUVELDZDQUFTOzs7OztJQUFULFVBQVUsS0FBa0IsRUFBRSxLQUFXO0lBQ3pDLENBQUM7Ozs7O0lBRUQsNERBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQWtCO1FBQzFDLE9BQU8sSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0lBQ25DLENBQUM7O2dCQXRCRCxVQUFVOzs7O0lBd0JYLGdDQUFDO0NBQUEsQUF4QkQsQ0FDK0MscUJBQXFCLEdBdUJuRTtTQXZCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciB9IGZyb20gJy4uL2FnZ3JlZ2F0aW9uLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgRGF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMgfSBmcm9tICcuL2RhdGUtYWdncmVnYXRlZC52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVBZ2dyZWdhdGlvbkNhbGN1bGF0b3IgZXh0ZW5kcyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8RGF0ZSwgRGF0ZUFnZ3JlZ2F0ZWRWYWx1ZXM+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5EQVRFO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQ8RGF0ZT4pOiB2b2lkIHtcblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkPERhdGU+LCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblx0fVxuXG5cdGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQ8RGF0ZT4sIHZhbHVlOiBEYXRlKTogdm9pZCB7XG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkPERhdGU+KTogRGF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMge1xuXHRcdHJldHVybiBuZXcgRGF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoKTtcblx0fVxuXG59XG4iXX0=