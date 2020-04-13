/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { NumberSummarizedValues } from './number-summarized.values';
import { DataType } from '../../../field/data-type/data-type';
import { SummariesType } from '../../summaries.type';
export class NumberSummariesCalculator extends SummariesCalculator {
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
        if (field.isSummaries(SummariesType.AVERAGE)) {
            this.average.set(key, this.sum.get(key) / items.length);
        }
        if (field.isSummaries(SummariesType.MEDIAN)) {
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
        if (field.isSummaries(SummariesType.SUM) || field.isSummaries(SummariesType.AVERAGE)) {
            this.sum.set(key, sumForField + numberValue);
        }
        if (field.isSummaries(SummariesType.MIN)) {
            if (minForField > numberValue) {
                this.min.set(key, numberValue);
            }
        }
        if (field.isSummaries(SummariesType.MAX)) {
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
        const sum = field.isSummaries(SummariesType.SUM) ? this.sum.get(key) : undefined;
        /** @type {?} */
        const min = field.isSummaries(SummariesType.MIN) ? this.min.get(key) : undefined;
        /** @type {?} */
        const max = field.isSummaries(SummariesType.MAX) ? this.max.get(key) : undefined;
        /** @type {?} */
        const average = field.isSummaries(SummariesType.AVERAGE) ? this.average.get(key) : undefined;
        /** @type {?} */
        const median = field.isSummaries(SummariesType.MEDIAN) ? this.median.get(key) : undefined;
        return new NumberSummarizedValues(sum, min, max, average, median);
    }
}
NumberSummariesCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NumberSummariesCalculator.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NumberSummariesCalculator.prototype.sum;
    /**
     * @type {?}
     * @private
     */
    NumberSummariesCalculator.prototype.min;
    /**
     * @type {?}
     * @private
     */
    NumberSummariesCalculator.prototype.max;
    /**
     * @type {?}
     * @private
     */
    NumberSummariesCalculator.prototype.average;
    /**
     * @type {?}
     * @private
     */
    NumberSummariesCalculator.prototype.median;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXN1bW1hcmllcy5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUtyRCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsbUJBQW1EO0lBUWpHO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFQUSxRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDaEMsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2hDLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNoQyxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDcEMsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0lBSXBELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBb0I7O2NBRXJCLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBRTFCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztR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R0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Y0FDMUUsT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Y0FDdEYsTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUVwRixPQUFPLElBQUksc0JBQXNCLENBQ2hDLEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILE9BQU8sRUFDUCxNQUFNLENBQ04sQ0FBQztJQUNILENBQUM7OztZQWpGRCxVQUFVOzs7Ozs7Ozs7SUFHVix3Q0FBaUQ7Ozs7O0lBQ2pELHdDQUFpRDs7Ozs7SUFDakQsd0NBQWlEOzs7OztJQUNqRCw0Q0FBcUQ7Ozs7O0lBQ3JELDJDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi9zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBOdW1iZXJTdW1tYXJpemVkVmFsdWVzIH0gZnJvbSAnLi9udW1iZXItc3VtbWFyaXplZC52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOdW1iZXJTdW1tYXJpZXNDYWxjdWxhdG9yIGV4dGVuZHMgU3VtbWFyaWVzQ2FsY3VsYXRvcjxudW1iZXIsIE51bWJlclN1bW1hcml6ZWRWYWx1ZXM+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1bSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgbWluID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBtYXggPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IGF2ZXJhZ2UgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IG1lZGlhbiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkYXRhVHlwZSA9PT0gRGF0YVR5cGUuTlVNQkVSO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQ8bnVtYmVyPik6IHZvaWQge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHR0aGlzLnN1bS5zZXQoa2V5LCAwKTtcblx0XHR0aGlzLm1pbi5zZXQoa2V5LCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUik7XG5cdFx0dGhpcy5tYXguc2V0KGtleSwgMCk7XG5cdH1cblxuXHRwb3N0Q2FsY3VsYXRlKGZpZWxkOiBGaWVsZDxudW1iZXI+LCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuQVZFUkFHRSkpIHtcblx0XHRcdHRoaXMuYXZlcmFnZS5zZXQoa2V5LCB0aGlzLnN1bS5nZXQoa2V5KSAvIGl0ZW1zLmxlbmd0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuTUVESUFOKSkge1xuXHRcdFx0dGhpcy5tZWRpYW4uc2V0KGtleSwgZmllbGQuZ2V0VmFsdWUoaXRlbXNbTWF0aC5mbG9vcihpdGVtcy5sZW5ndGggLyAyKV0pKTtcblx0XHR9XG5cdH1cblxuXHRhZ2dyZWdhdGUoZmllbGQ6IEZpZWxkPG51bWJlcj4sIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IG51bWJlclZhbHVlID0gK3ZhbHVlLFxuXHRcdFx0a2V5ID0gZmllbGQuZ2V0S2V5KCksXG5cdFx0XHRzdW1Gb3JGaWVsZCA9IHRoaXMuc3VtLmdldChrZXkpLFxuXHRcdFx0bWluRm9yRmllbGQgPSB0aGlzLm1pbi5nZXQoa2V5KSxcblx0XHRcdG1heEZvckZpZWxkID0gdGhpcy5tYXguZ2V0KGtleSk7XG5cblx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5TVU0pIHx8IGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuQVZFUkFHRSkpIHtcblx0XHRcdHRoaXMuc3VtLnNldChrZXksIHN1bUZvckZpZWxkICsgbnVtYmVyVmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1JTikpIHtcblx0XHRcdGlmIChtaW5Gb3JGaWVsZCA+IG51bWJlclZhbHVlKSB7XG5cdFx0XHRcdHRoaXMubWluLnNldChrZXksIG51bWJlclZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5NQVgpKSB7XG5cdFx0XHRpZiAobWF4Rm9yRmllbGQgPCBudW1iZXJWYWx1ZSkge1xuXHRcdFx0XHR0aGlzLm1heC5zZXQoa2V5LCBudW1iZXJWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkPG51bWJlcj4pOiBOdW1iZXJTdW1tYXJpemVkVmFsdWVzIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0c3VtID0gZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5TVU0pID8gdGhpcy5zdW0uZ2V0KGtleSkgOiB1bmRlZmluZWQsXG5cdFx0XHRtaW4gPSBmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1JTikgPyB0aGlzLm1pbi5nZXQoa2V5KSA6IHVuZGVmaW5lZCxcblx0XHRcdG1heCA9IGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuTUFYKSA/IHRoaXMubWF4LmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0YXZlcmFnZSA9IGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuQVZFUkFHRSkgPyB0aGlzLmF2ZXJhZ2UuZ2V0KGtleSkgOiB1bmRlZmluZWQsXG5cdFx0XHRtZWRpYW4gPSBmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1FRElBTikgPyB0aGlzLm1lZGlhbi5nZXQoa2V5KSA6IHVuZGVmaW5lZDtcblxuXHRcdHJldHVybiBuZXcgTnVtYmVyU3VtbWFyaXplZFZhbHVlcyhcblx0XHRcdHN1bSxcblx0XHRcdG1pbixcblx0XHRcdG1heCxcblx0XHRcdGF2ZXJhZ2UsXG5cdFx0XHRtZWRpYW5cblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==