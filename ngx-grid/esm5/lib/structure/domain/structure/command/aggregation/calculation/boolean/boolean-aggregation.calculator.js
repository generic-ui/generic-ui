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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9jYWxjdWxhdGlvbi9ib29sZWFuL2Jvb2xlYW4tYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUl6RDtJQUNrRCx3REFBdUQ7SUFLeEc7UUFBQSxZQUNDLGlCQUFPLFNBQ1A7UUFMZ0IsWUFBTSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ25DLFdBQUssR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQzs7SUFJbkQsQ0FBQzs7Ozs7SUFFRCxrREFBVzs7OztJQUFYLFVBQVksUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELDhDQUFPOzs7O0lBQVAsVUFBUSxLQUFZOztZQUViLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBRTFCLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkI7SUFDRixDQUFDOzs7Ozs7SUFFRCxvREFBYTs7Ozs7SUFBYixVQUFjLEtBQVksRUFBRSxLQUE4QjtJQUMxRCxDQUFDOzs7Ozs7SUFFRCxnREFBUzs7Ozs7SUFBVCxVQUFVLEtBQVksRUFBRSxLQUFjOztZQUUvQixZQUFZLEdBQUcsS0FBSzs7WUFBRSw2QkFBNkI7UUFDeEQsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O1lBQ3BCLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7O1lBQ3JDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFFcEMsSUFBSSxZQUFZLEVBQUU7WUFDakIsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN6QztTQUNEO2FBQU07WUFDTixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Q7SUFFRixDQUFDOzs7OztJQUVELCtEQUF3Qjs7OztJQUF4QixVQUF5QixLQUFZOztZQUU5QixHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUUxQixPQUFPLElBQUksdUJBQXVCLENBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDbkIsQ0FBQztJQUNILENBQUM7O2dCQXpERCxVQUFVOzs7O0lBMkRYLG1DQUFDO0NBQUEsQUEzREQsQ0FDa0QscUJBQXFCLEdBMER0RTtTQTFEWSw0QkFBNEI7Ozs7OztJQUV4Qyw4Q0FBb0Q7Ozs7O0lBQ3BELDZDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRpb25DYWxjdWxhdG9yIH0gZnJvbSAnLi4vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBCb29sZWFuQWdncmVnYXRlZFZhbHVlcyB9IGZyb20gJy4vYm9vbGVhbi1hZ2dyZWdhdGVkLnZhbHVlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRpb24udHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5BZ2dyZWdhdGlvbkNhbGN1bGF0b3IgZXh0ZW5kcyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8Ym9vbGVhbiwgQm9vbGVhbkFnZ3JlZ2F0ZWRWYWx1ZXM+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRydXRoeSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgZmFsc3kgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF0YVR5cGUgPT09IERhdGFUeXBlLkJPT0xFQU47XG5cdH1cblxuXHRwcmVwYXJlKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuVFJVVEhZKSkge1xuXHRcdFx0dGhpcy50cnV0aHkuc2V0KGtleSwgMCk7XG5cdFx0fVxuXG5cdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLkZBTFNZKSkge1xuXHRcdFx0dGhpcy5mYWxzeS5zZXQoa2V5LCAwKTtcblx0XHR9XG5cdH1cblxuXHRwb3N0Q2FsY3VsYXRlKGZpZWxkOiBGaWVsZCwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cdH1cblxuXHRhZ2dyZWdhdGUoZmllbGQ6IEZpZWxkLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXG5cdFx0Y29uc3QgYm9vbGVhblZhbHVlID0gdmFsdWUsIC8vICh2YWx1ZSBhcyBhbnkgPT09ICd0cnVlJyksXG5cdFx0XHRrZXkgPSBmaWVsZC5nZXRLZXkoKSxcblx0XHRcdHRydXRoeUZvckZpZWxkID0gdGhpcy50cnV0aHkuZ2V0KGtleSksXG5cdFx0XHRmYWxzeUZvckZpZWxkID0gdGhpcy5mYWxzeS5nZXQoa2V5KTtcblxuXHRcdGlmIChib29sZWFuVmFsdWUpIHtcblx0XHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5UUlVUSFkpKSB7XG5cdFx0XHRcdHRoaXMudHJ1dGh5LnNldChrZXksIHRydXRoeUZvckZpZWxkICsgMSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5GQUxTWSkpIHtcblx0XHRcdFx0dGhpcy5mYWxzeS5zZXQoa2V5LCBmYWxzeUZvckZpZWxkICsgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkKTogQm9vbGVhbkFnZ3JlZ2F0ZWRWYWx1ZXMge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHRyZXR1cm4gbmV3IEJvb2xlYW5BZ2dyZWdhdGVkVmFsdWVzKFxuXHRcdFx0dGhpcy50cnV0aHkuZ2V0KGtleSksXG5cdFx0XHR0aGlzLmZhbHN5LmdldChrZXkpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=