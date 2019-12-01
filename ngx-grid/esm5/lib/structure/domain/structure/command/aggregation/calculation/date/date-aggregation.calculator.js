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
    DateAggregationCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DateAggregationCalculator.ctorParameters = function () { return []; };
    return DateAggregationCalculator;
}(AggregationCalculator));
export { DateAggregationCalculator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9jYWxjdWxhdGlvbi9kYXRlL2RhdGUtYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTTlEO0lBQytDLHFEQUFpRDtJQUUvRjtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7Ozs7SUFFRCwrQ0FBVzs7OztJQUFYLFVBQVksUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFRCw2Q0FBUzs7Ozs7SUFBVCxVQUFVLEtBQVksRUFBRSxLQUFXO0lBQ25DLENBQUM7Ozs7O0lBRUQsNERBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQVk7UUFDcEMsT0FBTyxJQUFJLG9CQUFvQixFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCwyQ0FBTzs7OztJQUFQLFVBQVEsS0FBWTtJQUNwQixDQUFDOzs7Ozs7SUFFRCxpREFBYTs7Ozs7SUFBYixVQUFjLEtBQVksRUFBRSxLQUE4QjtJQUMxRCxDQUFDOztnQkF0QkQsVUFBVTs7OztJQXdCWCxnQ0FBQztDQUFBLEFBeEJELENBQytDLHFCQUFxQixHQXVCbkU7U0F2QlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25DYWxjdWxhdG9yIH0gZnJvbSAnLi4vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBEYXRlQWdncmVnYXRlZFZhbHVlcyB9IGZyb20gJy4vZGF0ZS1hZ2dyZWdhdGVkLnZhbHVlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVBZ2dyZWdhdGlvbkNhbGN1bGF0b3IgZXh0ZW5kcyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8RGF0ZSwgRGF0ZUFnZ3JlZ2F0ZWRWYWx1ZXM+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5EQVRFO1xuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IERhdGUpOiB2b2lkIHtcblx0fVxuXG5cdGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQpOiBEYXRlQWdncmVnYXRlZFZhbHVlcyB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlQWdncmVnYXRlZFZhbHVlcygpO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQpOiB2b2lkIHtcblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkLCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblx0fVxuXG59XG4iXX0=