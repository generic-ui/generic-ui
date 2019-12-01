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
    function (field, items) { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9jYWxjdWxhdGlvbi9ib29sZWFuL2Jvb2xlYW4tYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUt6RDtJQUNrRCx3REFBdUQ7SUFLeEc7UUFBQSxZQUNDLGlCQUFPLFNBQ1A7UUFMZ0IsWUFBTSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ25DLFdBQUssR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQzs7SUFJbkQsQ0FBQzs7Ozs7SUFFRCxrREFBVzs7OztJQUFYLFVBQVksUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFRCxnREFBUzs7Ozs7SUFBVCxVQUFVLEtBQVksRUFBRSxLQUFjOztZQUUvQixZQUFZLEdBQUcsS0FBSzs7WUFBRSw2QkFBNkI7UUFDeEQsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O1lBQ3BCLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7O1lBQ3JDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFFcEMsSUFBSSxZQUFZLEVBQUU7WUFDakIsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN6QztTQUNEO2FBQU07WUFDTixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Q7SUFFRixDQUFDOzs7OztJQUVELCtEQUF3Qjs7OztJQUF4QixVQUF5QixLQUFZOztZQUU5QixHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUUxQixPQUFPLElBQUksdUJBQXVCLENBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDbkIsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsOENBQU87Ozs7SUFBUCxVQUFRLEtBQVk7O1lBRWIsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFFMUIsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEI7UUFFRCxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2QjtJQUNGLENBQUM7Ozs7OztJQUVELG9EQUFhOzs7OztJQUFiLFVBQWMsS0FBWSxFQUFFLEtBQThCLElBQVMsQ0FBQzs7Z0JBeERwRSxVQUFVOzs7O0lBMERYLG1DQUFDO0NBQUEsQUExREQsQ0FDa0QscUJBQXFCLEdBeUR0RTtTQXpEWSw0QkFBNEI7Ozs7OztJQUV4Qyw4Q0FBb0Q7Ozs7O0lBQ3BELDZDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRpb25DYWxjdWxhdG9yIH0gZnJvbSAnLi4vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBCb29sZWFuQWdncmVnYXRlZFZhbHVlcyB9IGZyb20gJy4vYm9vbGVhbi1hZ2dyZWdhdGVkLnZhbHVlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRpb24udHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQm9vbGVhbkFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciBleHRlbmRzIEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvcjxib29sZWFuLCBCb29sZWFuQWdncmVnYXRlZFZhbHVlcz4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdHJ1dGh5ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBmYWxzeSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkYXRhVHlwZSA9PT0gRGF0YVR5cGUuQk9PTEVBTjtcblx0fVxuXG5cdGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cblx0XHRjb25zdCBib29sZWFuVmFsdWUgPSB2YWx1ZSwgLy8gKHZhbHVlIGFzIGFueSA9PT0gJ3RydWUnKSxcblx0XHRcdGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0dHJ1dGh5Rm9yRmllbGQgPSB0aGlzLnRydXRoeS5nZXQoa2V5KSxcblx0XHRcdGZhbHN5Rm9yRmllbGQgPSB0aGlzLmZhbHN5LmdldChrZXkpO1xuXG5cdFx0aWYgKGJvb2xlYW5WYWx1ZSkge1xuXHRcdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLlRSVVRIWSkpIHtcblx0XHRcdFx0dGhpcy50cnV0aHkuc2V0KGtleSwgdHJ1dGh5Rm9yRmllbGQgKyAxKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLkZBTFNZKSkge1xuXHRcdFx0XHR0aGlzLmZhbHN5LnNldChrZXksIGZhbHN5Rm9yRmllbGQgKyAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQpOiBCb29sZWFuQWdncmVnYXRlZFZhbHVlcyB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdHJldHVybiBuZXcgQm9vbGVhbkFnZ3JlZ2F0ZWRWYWx1ZXMoXG5cdFx0XHR0aGlzLnRydXRoeS5nZXQoa2V5KSxcblx0XHRcdHRoaXMuZmFsc3kuZ2V0KGtleSlcblx0XHQpO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLlRSVVRIWSkpIHtcblx0XHRcdHRoaXMudHJ1dGh5LnNldChrZXksIDApO1xuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5GQUxTWSkpIHtcblx0XHRcdHRoaXMuZmFsc3kuc2V0KGtleSwgMCk7XG5cdFx0fVxuXHR9XG5cblx0cG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQsIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge31cblxufVxuIl19