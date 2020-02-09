/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregationCalculator } from '../aggregation.calculator';
import { BooleanAggregatedValues } from './boolean-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
import { AggregationType } from '../../aggregation.type';
export class BooleanAggregationCalculator extends AggregationCalculator {
    constructor() {
        super();
        this.truthy = new Map();
        this.falsy = new Map();
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    forDataType(dataType) {
        return dataType === DataType.BOOLEAN;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prepare(field) {
        /** @type {?} */
        const key = field.getKey();
        if (field.isAggregation(AggregationType.TRUTHY)) {
            this.truthy.set(key, 0);
        }
        if (field.isAggregation(AggregationType.FALSY)) {
            this.falsy.set(key, 0);
        }
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
        /** @type {?} */
        const booleanValue = value;
        /** @type {?} */
        const // (value as any === 'true'),
        key = field.getKey();
        /** @type {?} */
        const truthyForField = this.truthy.get(key);
        /** @type {?} */
        const falsyForField = this.falsy.get(key);
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
    }
    /**
     * @param {?} field
     * @return {?}
     */
    generateAggregatedValues(field) {
        /** @type {?} */
        const key = field.getKey();
        return new BooleanAggregatedValues(this.truthy.get(key), this.falsy.get(key));
    }
}
BooleanAggregationCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BooleanAggregationCalculator.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9jYWxjdWxhdGlvbi9ib29sZWFuL2Jvb2xlYW4tYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBS3pELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxxQkFBdUQ7SUFLeEc7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQUpRLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNuQyxVQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFJbkQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFZOztjQUViLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBRTFCLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkI7SUFDRixDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBWSxFQUFFLEtBQThCO0lBQzFELENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFZLEVBQUUsS0FBYzs7Y0FFL0IsWUFBWSxHQUFHLEtBQUs7O2NBQUUsNkJBQTZCO1FBQ3hELEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFOztjQUNwQixjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDOztjQUNyQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBRXBDLElBQUksWUFBWSxFQUFFO1lBQ2pCLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDekM7U0FDRDthQUFNO1lBQ04sSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNEO0lBRUYsQ0FBQzs7Ozs7SUFFRCx3QkFBd0IsQ0FBQyxLQUFZOztjQUU5QixHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUUxQixPQUFPLElBQUksdUJBQXVCLENBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDbkIsQ0FBQztJQUNILENBQUM7OztZQXpERCxVQUFVOzs7Ozs7Ozs7SUFHViw4Q0FBb0Q7Ozs7O0lBQ3BELDZDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRpb25DYWxjdWxhdG9yIH0gZnJvbSAnLi4vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBCb29sZWFuQWdncmVnYXRlZFZhbHVlcyB9IGZyb20gJy4vYm9vbGVhbi1hZ2dyZWdhdGVkLnZhbHVlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRpb24udHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5BZ2dyZWdhdGlvbkNhbGN1bGF0b3IgZXh0ZW5kcyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8Ym9vbGVhbiwgQm9vbGVhbkFnZ3JlZ2F0ZWRWYWx1ZXM+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRydXRoeSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgZmFsc3kgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF0YVR5cGUgPT09IERhdGFUeXBlLkJPT0xFQU47XG5cdH1cblxuXHRwcmVwYXJlKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuVFJVVEhZKSkge1xuXHRcdFx0dGhpcy50cnV0aHkuc2V0KGtleSwgMCk7XG5cdFx0fVxuXG5cdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLkZBTFNZKSkge1xuXHRcdFx0dGhpcy5mYWxzeS5zZXQoa2V5LCAwKTtcblx0XHR9XG5cdH1cblxuXHRwb3N0Q2FsY3VsYXRlKGZpZWxkOiBGaWVsZCwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cdH1cblxuXHRhZ2dyZWdhdGUoZmllbGQ6IEZpZWxkLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXG5cdFx0Y29uc3QgYm9vbGVhblZhbHVlID0gdmFsdWUsIC8vICh2YWx1ZSBhcyBhbnkgPT09ICd0cnVlJyksXG5cdFx0XHRrZXkgPSBmaWVsZC5nZXRLZXkoKSxcblx0XHRcdHRydXRoeUZvckZpZWxkID0gdGhpcy50cnV0aHkuZ2V0KGtleSksXG5cdFx0XHRmYWxzeUZvckZpZWxkID0gdGhpcy5mYWxzeS5nZXQoa2V5KTtcblxuXHRcdGlmIChib29sZWFuVmFsdWUpIHtcblx0XHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5UUlVUSFkpKSB7XG5cdFx0XHRcdHRoaXMudHJ1dGh5LnNldChrZXksIHRydXRoeUZvckZpZWxkICsgMSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5GQUxTWSkpIHtcblx0XHRcdFx0dGhpcy5mYWxzeS5zZXQoa2V5LCBmYWxzeUZvckZpZWxkICsgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkKTogQm9vbGVhbkFnZ3JlZ2F0ZWRWYWx1ZXMge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHRyZXR1cm4gbmV3IEJvb2xlYW5BZ2dyZWdhdGVkVmFsdWVzKFxuXHRcdFx0dGhpcy50cnV0aHkuZ2V0KGtleSksXG5cdFx0XHR0aGlzLmZhbHN5LmdldChrZXkpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=