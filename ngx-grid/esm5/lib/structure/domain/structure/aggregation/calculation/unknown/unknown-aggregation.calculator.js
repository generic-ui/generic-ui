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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vY2FsY3VsYXRpb24vdW5rbm93bi91bmtub3duLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUs5RDtJQUNrRCx3REFBbUQ7SUFFcEc7ZUFDQyxpQkFBTztJQUNSLENBQUM7Ozs7O0lBRUQsa0RBQVc7Ozs7SUFBWCxVQUFZLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCw4Q0FBTzs7OztJQUFQLFVBQVEsS0FBaUI7SUFDekIsQ0FBQzs7Ozs7O0lBRUQsb0RBQWE7Ozs7O0lBQWIsVUFBYyxLQUFpQixFQUFFLEtBQThCO0lBQy9ELENBQUM7Ozs7OztJQUVELGdEQUFTOzs7OztJQUFULFVBQVUsS0FBaUIsRUFBRSxLQUFVO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsK0RBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQWlCO1FBQ3pDLE9BQU8sSUFBSSx1QkFBdUIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7O2dCQXRCRCxVQUFVOzs7O0lBd0JYLG1DQUFDO0NBQUEsQUF4QkQsQ0FDa0QscUJBQXFCLEdBdUJ0RTtTQXZCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3IgfSBmcm9tICcuLi9hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFVua25vd25BZ2dyZWdhdGVkVmFsdWVzIH0gZnJvbSAnLi91bmtub3duLWFnZ3JlZ2F0ZWQudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVbmtub3duQWdncmVnYXRpb25DYWxjdWxhdG9yIGV4dGVuZHMgQWdncmVnYXRpb25DYWxjdWxhdG9yPGFueSwgVW5rbm93bkFnZ3JlZ2F0ZWRWYWx1ZXM+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5VTktOT1dOO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQ8YW55Pik6IHZvaWQge1xuXHR9XG5cblx0cG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQ8YW55PiwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cdH1cblxuXHRhZ2dyZWdhdGUoZmllbGQ6IEZpZWxkPGFueT4sIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0fVxuXG5cdGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQ8YW55Pik6IFVua25vd25BZ2dyZWdhdGVkVmFsdWVzIHtcblx0XHRyZXR1cm4gbmV3IFVua25vd25BZ2dyZWdhdGVkVmFsdWVzKCk7XG5cdH1cblxufVxuIl19