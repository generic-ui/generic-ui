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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTXpELE1BQU0sT0FBTywyQkFBNEIsU0FBUSxxQkFBcUQ7SUFRckc7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQVBRLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNoQyxRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDaEMsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2hDLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNwQyxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFJcEQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBWSxFQUFFLEtBQWE7O2NBRTlCLFdBQVcsR0FBRyxDQUFDLEtBQUs7O2NBQ3pCLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFOztjQUNwQixXQUFX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RyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBRTFCLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RDtRQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRTtJQUNGLENBQUM7OztZQWpGRCxVQUFVOzs7Ozs7Ozs7SUFHViwwQ0FBaUQ7Ozs7O0lBQ2pELDBDQUFpRDs7Ozs7SUFDakQsMENBQWlEOzs7OztJQUNqRCw4Q0FBcUQ7Ozs7O0lBQ3JELDZDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciB9IGZyb20gJy4uL2FnZ3JlZ2F0aW9uLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgTnVtYmVyQWdncmVnYXRlZFZhbHVlcyB9IGZyb20gJy4vbnVtYmVyLWFnZ3JlZ2F0ZWQudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGlvbi50eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOdW1iZXJBZ2dyZWdhdGlvbkNhbGN1bGF0b3IgZXh0ZW5kcyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8bnVtYmVyLCBOdW1iZXJBZ2dyZWdhdGVkVmFsdWVzPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdW0gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IG1pbiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgbWF4ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBhdmVyYWdlID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBtZWRpYW4gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF0YVR5cGUgPT09IERhdGFUeXBlLk5VTUJFUjtcblx0fVxuXG5cdGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IG51bWJlclZhbHVlID0gK3ZhbHVlLFxuXHRcdFx0a2V5ID0gZmllbGQuZ2V0S2V5KCksXG5cdFx0XHRzdW1Gb3JGaWVsZCA9IHRoaXMuc3VtLmdldChrZXkpLFxuXHRcdFx0bWluRm9yRmllbGQgPSB0aGlzLm1pbi5nZXQoa2V5KSxcblx0XHRcdG1heEZvckZpZWxkID0gdGhpcy5tYXguZ2V0KGtleSk7XG5cblx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuU1VNKSB8fCBmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5BVkVSQUdFKSkge1xuXHRcdFx0dGhpcy5zdW0uc2V0KGtleSwgc3VtRm9yRmllbGQgKyBudW1iZXJWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLk1JTikpIHtcblx0XHRcdGlmIChtaW5Gb3JGaWVsZCA+IG51bWJlclZhbHVlKSB7XG5cdFx0XHRcdHRoaXMubWluLnNldChrZXksIG51bWJlclZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuTUFYKSkge1xuXHRcdFx0aWYgKG1heEZvckZpZWxkIDwgbnVtYmVyVmFsdWUpIHtcblx0XHRcdFx0dGhpcy5tYXguc2V0KGtleSwgbnVtYmVyVmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0Z2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBGaWVsZCk6IE51bWJlckFnZ3JlZ2F0ZWRWYWx1ZXMge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCksXG5cdFx0XHRzdW0gPSBmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5TVU0pID8gdGhpcy5zdW0uZ2V0KGtleSkgOiB1bmRlZmluZWQsXG5cdFx0XHRtaW4gPSBmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5NSU4pID8gdGhpcy5taW4uZ2V0KGtleSkgOiB1bmRlZmluZWQsXG5cdFx0XHRtYXggPSBmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5NQVgpID8gdGhpcy5tYXguZ2V0KGtleSkgOiB1bmRlZmluZWQsXG5cdFx0XHRhdmVyYWdlID0gZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuQVZFUkFHRSkgPyB0aGlzLmF2ZXJhZ2UuZ2V0KGtleSkgOiB1bmRlZmluZWQsXG5cdFx0XHRtZWRpYW4gPSBmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5NRURJQU4pID8gdGhpcy5tZWRpYW4uZ2V0KGtleSkgOiB1bmRlZmluZWQ7XG5cblx0XHRyZXR1cm4gbmV3IE51bWJlckFnZ3JlZ2F0ZWRWYWx1ZXMoXG5cdFx0XHRzdW0sXG5cdFx0XHRtaW4sXG5cdFx0XHRtYXgsXG5cdFx0XHRhdmVyYWdlLFxuXHRcdFx0bWVkaWFuXG5cdFx0KTtcblx0fVxuXG5cdHByZXBhcmUoZmllbGQ6IEZpZWxkKTogdm9pZCB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdHRoaXMuc3VtLnNldChrZXksIDApO1xuXHRcdHRoaXMubWluLnNldChrZXksIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKTtcblx0XHR0aGlzLm1heC5zZXQoa2V5LCAwKTtcblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkLCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLkFWRVJBR0UpKSB7XG5cdFx0XHR0aGlzLmF2ZXJhZ2Uuc2V0KGtleSwgdGhpcy5zdW0uZ2V0KGtleSkgLyBpdGVtcy5sZW5ndGgpO1xuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5NRURJQU4pKSB7XG5cdFx0XHR0aGlzLm1lZGlhbi5zZXQoa2V5LCBmaWVsZC5nZXRWYWx1ZShpdGVtc1tNYXRoLmZsb29yKGl0ZW1zLmxlbmd0aCAvIDIpXSkpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=