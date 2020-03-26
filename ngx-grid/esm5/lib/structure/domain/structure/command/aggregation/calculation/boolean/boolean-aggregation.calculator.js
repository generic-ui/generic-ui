/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregationCalculator } from '../aggregation.calculator';
import { BooleanAggregatedValues } from './boolean-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
import { AggregationType } from '../../aggregation.type';
var BooleanAggregationCalculator = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanAggregationCalculator, _super);
    function BooleanAggregationCalculator() {
        var _this = _super.call(this) || this;
        _this.truthy = new Map();
        _this.falsy = new Map();
        return _this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    BooleanAggregationCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.BOOLEAN;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    BooleanAggregationCalculator.prototype.prepare = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var key = field.getKey();
        if (field.isAggregation(AggregationType.TRUTHY)) {
            this.truthy.set(key, 0);
        }
        if (field.isAggregation(AggregationType.FALSY)) {
            this.falsy.set(key, 0);
        }
    };
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    BooleanAggregationCalculator.prototype.postCalculate = /**
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
    BooleanAggregationCalculator.prototype.aggregate = /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
        /** @type {?} */
        var booleanValue = value;
        /** @type {?} */
        var // (value as any === 'true'),
        key = field.getKey();
        /** @type {?} */
        var truthyForField = this.truthy.get(key);
        /** @type {?} */
        var falsyForField = this.falsy.get(key);
        if (booleanValue) {
            if (field.isAggregation(AggregationType.TRUTHY)) {
                this.truthy.set(key, truthyForField + 1);
            }
        }
        else {
            if (field.isAggregation(AggregationType.FALSY)) {
                this.falsy.set(key, falsyForField + 1);
            }
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    BooleanAggregationCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var key = field.getKey();
        return new BooleanAggregatedValues(this.truthy.get(key), this.falsy.get(key));
    };
    BooleanAggregationCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BooleanAggregationCalculator.ctorParameters = function () { return []; };
    return BooleanAggregationCalculator;
}(AggregationCalculator));
export { BooleanAggregationCalculator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanAggregationCalculator.prototype.truthy;
    /**
     * @type {?}
     * @private
     */
    BooleanAggregationCalculator.prototype.falsy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9jYWxjdWxhdGlvbi9ib29sZWFuL2Jvb2xlYW4tYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUl6RDtJQUNrRCx3REFBdUQ7SUFLeEc7UUFBQSxZQUNDLGlCQUFPLFNBQ1A7UUFMZ0IsWUFBTSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ25DLFdBQUssR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQzs7SUFJbkQsQ0FBQzs7Ozs7SUFFRCxrREFBVzs7OztJQUFYLFVBQVksUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELDhDQUFPOzs7O0lBQVAsVUFBUSxLQUFxQjs7WUFFdEIsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFFMUIsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEI7UUFFRCxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2QjtJQUNGLENBQUM7Ozs7OztJQUVELG9EQUFhOzs7OztJQUFiLFVBQWMsS0FBcUIsRUFBRSxLQUE4QjtJQUNuRSxDQUFDOzs7Ozs7SUFFRCxnREFBUzs7Ozs7SUFBVCxVQUFVLEtBQXFCLEVBQUUsS0FBYzs7WUFFeEMsWUFBWSxHQUFHLEtBQUs7O1lBQUUsNkJBQTZCO1FBQ3hELEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFOztZQUNwQixjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDOztZQUNyQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBRXBDLElBQUksWUFBWSxFQUFFO1lBQ2pCLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDekM7U0FDRDthQUFNO1lBQ04sSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNEO0lBRUYsQ0FBQzs7Ozs7SUFFRCwrREFBd0I7Ozs7SUFBeEIsVUFBeUIsS0FBcUI7O1lBRXZDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBRTFCLE9BQU8sSUFBSSx1QkFBdUIsQ0FDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUNuQixDQUFDO0lBQ0gsQ0FBQzs7Z0JBekRELFVBQVU7Ozs7SUEyRFgsbUNBQUM7Q0FBQSxBQTNERCxDQUNrRCxxQkFBcUIsR0EwRHRFO1NBMURZLDRCQUE0Qjs7Ozs7O0lBRXhDLDhDQUFvRDs7Ozs7SUFDcEQsNkNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3IgfSBmcm9tICcuLi9hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yJztcbmltcG9ydCB7IEJvb2xlYW5BZ2dyZWdhdGVkVmFsdWVzIH0gZnJvbSAnLi9ib29sZWFuLWFnZ3JlZ2F0ZWQudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGlvbi50eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQm9vbGVhbkFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciBleHRlbmRzIEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvcjxib29sZWFuLCBCb29sZWFuQWdncmVnYXRlZFZhbHVlcz4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdHJ1dGh5ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBmYWxzeSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkYXRhVHlwZSA9PT0gRGF0YVR5cGUuQk9PTEVBTjtcblx0fVxuXG5cdHByZXBhcmUoZmllbGQ6IEZpZWxkPGJvb2xlYW4+KTogdm9pZCB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5UUlVUSFkpKSB7XG5cdFx0XHR0aGlzLnRydXRoeS5zZXQoa2V5LCAwKTtcblx0XHR9XG5cblx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuRkFMU1kpKSB7XG5cdFx0XHR0aGlzLmZhbHN5LnNldChrZXksIDApO1xuXHRcdH1cblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkPGJvb2xlYW4+LCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblx0fVxuXG5cdGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQ8Ym9vbGVhbj4sIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cblx0XHRjb25zdCBib29sZWFuVmFsdWUgPSB2YWx1ZSwgLy8gKHZhbHVlIGFzIGFueSA9PT0gJ3RydWUnKSxcblx0XHRcdGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0dHJ1dGh5Rm9yRmllbGQgPSB0aGlzLnRydXRoeS5nZXQoa2V5KSxcblx0XHRcdGZhbHN5Rm9yRmllbGQgPSB0aGlzLmZhbHN5LmdldChrZXkpO1xuXG5cdFx0aWYgKGJvb2xlYW5WYWx1ZSkge1xuXHRcdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLlRSVVRIWSkpIHtcblx0XHRcdFx0dGhpcy50cnV0aHkuc2V0KGtleSwgdHJ1dGh5Rm9yRmllbGQgKyAxKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLkZBTFNZKSkge1xuXHRcdFx0XHR0aGlzLmZhbHN5LnNldChrZXksIGZhbHN5Rm9yRmllbGQgKyAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQ8Ym9vbGVhbj4pOiBCb29sZWFuQWdncmVnYXRlZFZhbHVlcyB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdHJldHVybiBuZXcgQm9vbGVhbkFnZ3JlZ2F0ZWRWYWx1ZXMoXG5cdFx0XHR0aGlzLnRydXRoeS5nZXQoa2V5KSxcblx0XHRcdHRoaXMuZmFsc3kuZ2V0KGtleSlcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==