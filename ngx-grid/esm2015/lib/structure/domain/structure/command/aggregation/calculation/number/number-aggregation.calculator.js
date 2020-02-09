/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregationCalculator } from '../aggregation.calculator';
import { NumberAggregatedValues } from './number-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
import { AggregationType } from '../../aggregation.type';
export class NumberAggregationCalculator extends AggregationCalculator {
    constructor() {
        super();
        this.sum = new Map();
        this.min = new Map();
        this.max = new Map();
        this.average = new Map();
        this.median = new Map();
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    forDataType(dataType) {
        return dataType === DataType.NUMBER;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prepare(field) {
        /** @type {?} */
        const key = field.getKey();
        this.sum.set(key, 0);
        this.min.set(key, Number.MAX_SAFE_INTEGER);
        this.max.set(key, 0);
    }
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    postCalculate(field, items) {
        /** @type {?} */
        const key = field.getKey();
        if (field.isAggregation(AggregationType.AVERAGE)) {
            this.average.set(key, this.sum.get(key) / items.length);
        }
        if (field.isAggregation(AggregationType.MEDIAN)) {
            this.median.set(key, field.getValue(items[Math.floor(items.length / 2)]));
        }
    }
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    aggregate(field, value) {
        /** @type {?} */
        const numberValue = +value;
        /** @type {?} */
        const key = field.getKey();
        /** @type {?} */
        const sumForField = this.sum.get(key);
        /** @type {?} */
        const minForField = this.min.get(key);
        /** @type {?} */
        const maxForField = this.max.get(key);
        if (field.isAggregation(AggregationType.SUM) || field.isAggregation(AggregationType.AVERAGE)) {
            this.sum.set(key, sumForField + numberValue);
        }
        if (field.isAggregation(AggregationType.MIN)) {
            if (minForField > numberValue) {
                this.min.set(key, numberValue);
            }
        }
        if (field.isAggregation(AggregationType.MAX)) {
            if (maxForField < numberValue) {
                this.max.set(key, numberValue);
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
        /** @type {?} */
        const sum = field.isAggregation(AggregationType.SUM) ? this.sum.get(key) : undefined;
        /** @type {?} */
        const min = field.isAggregation(AggregationType.MIN) ? this.min.get(key) : undefined;
        /** @type {?} */
        const max = field.isAggregation(AggregationType.MAX) ? this.max.get(key) : undefined;
        /** @type {?} */
        const average = field.isAggregation(AggregationType.AVERAGE) ? this.average.get(key) : undefined;
        /** @type {?} */
        const median = field.isAggregation(AggregationType.MEDIAN) ? this.median.get(key) : undefined;
        return new NumberAggregatedValues(sum, min, max, average, median);
    }
}
NumberAggregationCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NumberAggregationCalculator.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.sum;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.min;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.max;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.average;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.median;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBS3pELE1BQU0sT0FBTywyQkFBNEIsU0FBUSxxQkFBcUQ7SUFRckc7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQVBRLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNoQyxRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDaEMsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2hDLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNwQyxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFJcEQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFZOztjQUViLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBRTFCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFD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QUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Y0FDOUUsT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Y0FDMUYsTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUV4RixPQUFPLElBQUksc0JBQXNCLENBQ2hDLEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILE9BQU8sRUFDUCxNQUFNLENBQ04sQ0FBQztJQUNILENBQUM7OztZQWpGRCxVQUFVOzs7Ozs7Ozs7SUFHViwwQ0FBaUQ7Ozs7O0lBQ2pELDBDQUFpRDs7Ozs7SUFDakQsMENBQWlEOzs7OztJQUNqRCw4Q0FBcUQ7Ozs7O0lBQ3JELDZDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciB9IGZyb20gJy4uL2FnZ3JlZ2F0aW9uLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgTnVtYmVyQWdncmVnYXRlZFZhbHVlcyB9IGZyb20gJy4vbnVtYmVyLWFnZ3JlZ2F0ZWQudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGlvbi50eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnVtYmVyQWdncmVnYXRpb25DYWxjdWxhdG9yIGV4dGVuZHMgQWdncmVnYXRpb25DYWxjdWxhdG9yPG51bWJlciwgTnVtYmVyQWdncmVnYXRlZFZhbHVlcz4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3VtID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBtaW4gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IG1heCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgYXZlcmFnZSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgbWVkaWFuID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5OVU1CRVI7XG5cdH1cblxuXHRwcmVwYXJlKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHR0aGlzLnN1bS5zZXQoa2V5LCAwKTtcblx0XHR0aGlzLm1pbi5zZXQoa2V5LCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUik7XG5cdFx0dGhpcy5tYXguc2V0KGtleSwgMCk7XG5cdH1cblxuXHRwb3N0Q2FsY3VsYXRlKGZpZWxkOiBGaWVsZCwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5BVkVSQUdFKSkge1xuXHRcdFx0dGhpcy5hdmVyYWdlLnNldChrZXksIHRoaXMuc3VtLmdldChrZXkpIC8gaXRlbXMubGVuZ3RoKTtcblx0XHR9XG5cblx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuTUVESUFOKSkge1xuXHRcdFx0dGhpcy5tZWRpYW4uc2V0KGtleSwgZmllbGQuZ2V0VmFsdWUoaXRlbXNbTWF0aC5mbG9vcihpdGVtcy5sZW5ndGggLyAyKV0pKTtcblx0XHR9XG5cdH1cblxuXHRhZ2dyZWdhdGUoZmllbGQ6IEZpZWxkLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBudW1iZXJWYWx1ZSA9ICt2YWx1ZSxcblx0XHRcdGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0c3VtRm9yRmllbGQgPSB0aGlzLnN1bS5nZXQoa2V5KSxcblx0XHRcdG1pbkZvckZpZWxkID0gdGhpcy5taW4uZ2V0KGtleSksXG5cdFx0XHRtYXhGb3JGaWVsZCA9IHRoaXMubWF4LmdldChrZXkpO1xuXG5cdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLlNVTSkgfHwgZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuQVZFUkFHRSkpIHtcblx0XHRcdHRoaXMuc3VtLnNldChrZXksIHN1bUZvckZpZWxkICsgbnVtYmVyVmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5NSU4pKSB7XG5cdFx0XHRpZiAobWluRm9yRmllbGQgPiBudW1iZXJWYWx1ZSkge1xuXHRcdFx0XHR0aGlzLm1pbi5zZXQoa2V5LCBudW1iZXJWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLk1BWCkpIHtcblx0XHRcdGlmIChtYXhGb3JGaWVsZCA8IG51bWJlclZhbHVlKSB7XG5cdFx0XHRcdHRoaXMubWF4LnNldChrZXksIG51bWJlclZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQpOiBOdW1iZXJBZ2dyZWdhdGVkVmFsdWVzIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0c3VtID0gZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuU1VNKSA/IHRoaXMuc3VtLmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0bWluID0gZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuTUlOKSA/IHRoaXMubWluLmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0bWF4ID0gZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuTUFYKSA/IHRoaXMubWF4LmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0YXZlcmFnZSA9IGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLkFWRVJBR0UpID8gdGhpcy5hdmVyYWdlLmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0bWVkaWFuID0gZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuTUVESUFOKSA/IHRoaXMubWVkaWFuLmdldChrZXkpIDogdW5kZWZpbmVkO1xuXG5cdFx0cmV0dXJuIG5ldyBOdW1iZXJBZ2dyZWdhdGVkVmFsdWVzKFxuXHRcdFx0c3VtLFxuXHRcdFx0bWluLFxuXHRcdFx0bWF4LFxuXHRcdFx0YXZlcmFnZSxcblx0XHRcdG1lZGlhblxuXHRcdCk7XG5cdH1cblxufVxuIl19