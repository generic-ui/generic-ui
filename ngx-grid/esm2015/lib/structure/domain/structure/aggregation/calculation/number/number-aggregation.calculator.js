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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9hZ2dyZWdhdGlvbi9jYWxjdWxhdGlvbi9udW1iZXIvbnVtYmVyLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUt6RCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEscUJBQXFEO0lBUXJHO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFQUSxRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDaEMsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2hDLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNoQyxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDcEMsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0lBSXBELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBb0I7O2NBRXJCLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBRTFCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMs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LENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Y0FDOUUsT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Y0FDMUYsTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUV4RixPQUFPLElBQUksc0JBQXNCLENBQ2hDLEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILE9BQU8sRUFDUCxNQUFNLENBQ04sQ0FBQztJQUNILENBQUM7OztZQWpGRCxVQUFVOzs7Ozs7Ozs7SUFHViwwQ0FBaUQ7Ozs7O0lBQ2pELDBDQUFpRDs7Ozs7SUFDakQsMENBQWlEOzs7OztJQUNqRCw4Q0FBcUQ7Ozs7O0lBQ3JELDZDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciB9IGZyb20gJy4uL2FnZ3JlZ2F0aW9uLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgTnVtYmVyQWdncmVnYXRlZFZhbHVlcyB9IGZyb20gJy4vbnVtYmVyLWFnZ3JlZ2F0ZWQudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGlvbi50eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE51bWJlckFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciBleHRlbmRzIEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvcjxudW1iZXIsIE51bWJlckFnZ3JlZ2F0ZWRWYWx1ZXM+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1bSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgbWluID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBtYXggPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IGF2ZXJhZ2UgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IG1lZGlhbiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkYXRhVHlwZSA9PT0gRGF0YVR5cGUuTlVNQkVSO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQ8bnVtYmVyPik6IHZvaWQge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHR0aGlzLnN1bS5zZXQoa2V5LCAwKTtcblx0XHR0aGlzLm1pbi5zZXQoa2V5LCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUik7XG5cdFx0dGhpcy5tYXguc2V0KGtleSwgMCk7XG5cdH1cblxuXHRwb3N0Q2FsY3VsYXRlKGZpZWxkOiBGaWVsZDxudW1iZXI+LCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLkFWRVJBR0UpKSB7XG5cdFx0XHR0aGlzLmF2ZXJhZ2Uuc2V0KGtleSwgdGhpcy5zdW0uZ2V0KGtleSkgLyBpdGVtcy5sZW5ndGgpO1xuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5NRURJQU4pKSB7XG5cdFx0XHR0aGlzLm1lZGlhbi5zZXQoa2V5LCBmaWVsZC5nZXRWYWx1ZShpdGVtc1tNYXRoLmZsb29yKGl0ZW1zLmxlbmd0aCAvIDIpXSkpO1xuXHRcdH1cblx0fVxuXG5cdGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQ8bnVtYmVyPiwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgbnVtYmVyVmFsdWUgPSArdmFsdWUsXG5cdFx0XHRrZXkgPSBmaWVsZC5nZXRLZXkoKSxcblx0XHRcdHN1bUZvckZpZWxkID0gdGhpcy5zdW0uZ2V0KGtleSksXG5cdFx0XHRtaW5Gb3JGaWVsZCA9IHRoaXMubWluLmdldChrZXkpLFxuXHRcdFx0bWF4Rm9yRmllbGQgPSB0aGlzLm1heC5nZXQoa2V5KTtcblxuXHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5TVU0pIHx8IGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLkFWRVJBR0UpKSB7XG5cdFx0XHR0aGlzLnN1bS5zZXQoa2V5LCBzdW1Gb3JGaWVsZCArIG51bWJlclZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuTUlOKSkge1xuXHRcdFx0aWYgKG1pbkZvckZpZWxkID4gbnVtYmVyVmFsdWUpIHtcblx0XHRcdFx0dGhpcy5taW4uc2V0KGtleSwgbnVtYmVyVmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5NQVgpKSB7XG5cdFx0XHRpZiAobWF4Rm9yRmllbGQgPCBudW1iZXJWYWx1ZSkge1xuXHRcdFx0XHR0aGlzLm1heC5zZXQoa2V5LCBudW1iZXJWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkPG51bWJlcj4pOiBOdW1iZXJBZ2dyZWdhdGVkVmFsdWVzIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0c3VtID0gZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuU1VNKSA/IHRoaXMuc3VtLmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0bWluID0gZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuTUlOKSA/IHRoaXMubWluLmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0bWF4ID0gZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuTUFYKSA/IHRoaXMubWF4LmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0YXZlcmFnZSA9IGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLkFWRVJBR0UpID8gdGhpcy5hdmVyYWdlLmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0bWVkaWFuID0gZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuTUVESUFOKSA/IHRoaXMubWVkaWFuLmdldChrZXkpIDogdW5kZWZpbmVkO1xuXG5cdFx0cmV0dXJuIG5ldyBOdW1iZXJBZ2dyZWdhdGVkVmFsdWVzKFxuXHRcdFx0c3VtLFxuXHRcdFx0bWluLFxuXHRcdFx0bWF4LFxuXHRcdFx0YXZlcmFnZSxcblx0XHRcdG1lZGlhblxuXHRcdCk7XG5cdH1cblxufVxuIl19