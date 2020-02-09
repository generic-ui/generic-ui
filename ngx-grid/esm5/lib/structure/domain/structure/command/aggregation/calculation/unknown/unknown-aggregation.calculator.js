/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregationCalculator } from '../aggregation.calculator';
import { UnknownAggregatedValues } from './unknown-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
var UnknownAggregationCalculator = /** @class */ (function (_super) {
    tslib_1.__extends(UnknownAggregationCalculator, _super);
    function UnknownAggregationCalculator() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    UnknownAggregationCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.UNKNOWN;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    UnknownAggregationCalculator.prototype.prepare = /**
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
    UnknownAggregationCalculator.prototype.postCalculate = /**
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
    UnknownAggregationCalculator.prototype.aggregate = /**
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
    UnknownAggregationCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new UnknownAggregatedValues();
    };
    UnknownAggregationCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UnknownAggregationCalculator.ctorParameters = function () { return []; };
    return UnknownAggregationCalculator;
}(AggregationCalculator));
export { UnknownAggregationCalculator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9jYWxjdWxhdGlvbi91bmtub3duL3Vua25vd24tYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBSzlEO0lBQ2tELHdEQUFtRDtJQUVwRztlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxrREFBVzs7OztJQUFYLFVBQVksUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELDhDQUFPOzs7O0lBQVAsVUFBUSxLQUFZO0lBQ3BCLENBQUM7Ozs7OztJQUVELG9EQUFhOzs7OztJQUFiLFVBQWMsS0FBWSxFQUFFLEtBQThCO0lBQzFELENBQUM7Ozs7OztJQUVELGdEQUFTOzs7OztJQUFULFVBQVUsS0FBWSxFQUFFLEtBQVU7SUFDbEMsQ0FBQzs7Ozs7SUFFRCwrREFBd0I7Ozs7SUFBeEIsVUFBeUIsS0FBWTtRQUNwQyxPQUFPLElBQUksdUJBQXVCLEVBQUUsQ0FBQztJQUN0QyxDQUFDOztnQkF0QkQsVUFBVTs7OztJQXdCWCxtQ0FBQztDQUFBLEFBeEJELENBQ2tELHFCQUFxQixHQXVCdEU7U0F2QlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25DYWxjdWxhdG9yIH0gZnJvbSAnLi4vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBVbmtub3duQWdncmVnYXRlZFZhbHVlcyB9IGZyb20gJy4vdW5rbm93bi1hZ2dyZWdhdGVkLnZhbHVlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVbmtub3duQWdncmVnYXRpb25DYWxjdWxhdG9yIGV4dGVuZHMgQWdncmVnYXRpb25DYWxjdWxhdG9yPGFueSwgVW5rbm93bkFnZ3JlZ2F0ZWRWYWx1ZXM+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5VTktOT1dOO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQpOiB2b2lkIHtcblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkLCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblx0fVxuXG5cdGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0fVxuXG5cdGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQpOiBVbmtub3duQWdncmVnYXRlZFZhbHVlcyB7XG5cdFx0cmV0dXJuIG5ldyBVbmtub3duQWdncmVnYXRlZFZhbHVlcygpO1xuXHR9XG5cbn1cbiJdfQ==