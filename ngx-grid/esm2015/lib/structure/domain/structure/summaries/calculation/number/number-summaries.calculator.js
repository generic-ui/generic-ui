/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { NumberSummarizedValues } from './number-summarized.values';
import { DataType } from '../../../../../../../structure/field/domain/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXN1bW1hcmllcy5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRTNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUtyRCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsbUJBQW1EO0lBUWpHO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFQUSxRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDaEMsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2hDLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNoQyxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDcEMsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0lBSXBELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBb0I7O2NBRXJCLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBRTFCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztR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R0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Y0FDMUUsT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Y0FDdEYsTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUVwRixPQUFPLElBQUksc0JBQXNCLENBQ2hDLEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILE9BQU8sRUFDUCxNQUFNLENBQ04sQ0FBQztJQUNILENBQUM7OztZQWpGRCxVQUFVOzs7Ozs7Ozs7SUFHVix3Q0FBaUQ7Ozs7O0lBQ2pELHdDQUFpRDs7Ozs7SUFDakQsd0NBQWlEOzs7OztJQUNqRCw0Q0FBcUQ7Ozs7O0lBQ3JELDJDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi9zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBOdW1iZXJTdW1tYXJpemVkVmFsdWVzIH0gZnJvbSAnLi9udW1iZXItc3VtbWFyaXplZC52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnVtYmVyU3VtbWFyaWVzQ2FsY3VsYXRvciBleHRlbmRzIFN1bW1hcmllc0NhbGN1bGF0b3I8bnVtYmVyLCBOdW1iZXJTdW1tYXJpemVkVmFsdWVzPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdW0gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IG1pbiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgbWF4ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBhdmVyYWdlID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBtZWRpYW4gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF0YVR5cGUgPT09IERhdGFUeXBlLk5VTUJFUjtcblx0fVxuXG5cdHByZXBhcmUoZmllbGQ6IEZpZWxkPG51bWJlcj4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0dGhpcy5zdW0uc2V0KGtleSwgMCk7XG5cdFx0dGhpcy5taW4uc2V0KGtleSwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpO1xuXHRcdHRoaXMubWF4LnNldChrZXksIDApO1xuXHR9XG5cblx0cG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQ8bnVtYmVyPiwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkFWRVJBR0UpKSB7XG5cdFx0XHR0aGlzLmF2ZXJhZ2Uuc2V0KGtleSwgdGhpcy5zdW0uZ2V0KGtleSkgLyBpdGVtcy5sZW5ndGgpO1xuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1FRElBTikpIHtcblx0XHRcdHRoaXMubWVkaWFuLnNldChrZXksIGZpZWxkLmdldFZhbHVlKGl0ZW1zW01hdGguZmxvb3IoaXRlbXMubGVuZ3RoIC8gMildKSk7XG5cdFx0fVxuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZDxudW1iZXI+LCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBudW1iZXJWYWx1ZSA9ICt2YWx1ZSxcblx0XHRcdGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0c3VtRm9yRmllbGQgPSB0aGlzLnN1bS5nZXQoa2V5KSxcblx0XHRcdG1pbkZvckZpZWxkID0gdGhpcy5taW4uZ2V0KGtleSksXG5cdFx0XHRtYXhGb3JGaWVsZCA9IHRoaXMubWF4LmdldChrZXkpO1xuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuU1VNKSB8fCBmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkFWRVJBR0UpKSB7XG5cdFx0XHR0aGlzLnN1bS5zZXQoa2V5LCBzdW1Gb3JGaWVsZCArIG51bWJlclZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5NSU4pKSB7XG5cdFx0XHRpZiAobWluRm9yRmllbGQgPiBudW1iZXJWYWx1ZSkge1xuXHRcdFx0XHR0aGlzLm1pbi5zZXQoa2V5LCBudW1iZXJWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuTUFYKSkge1xuXHRcdFx0aWYgKG1heEZvckZpZWxkIDwgbnVtYmVyVmFsdWUpIHtcblx0XHRcdFx0dGhpcy5tYXguc2V0KGtleSwgbnVtYmVyVmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0Z2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBGaWVsZDxudW1iZXI+KTogTnVtYmVyU3VtbWFyaXplZFZhbHVlcyB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKSxcblx0XHRcdHN1bSA9IGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuU1VNKSA/IHRoaXMuc3VtLmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0bWluID0gZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5NSU4pID8gdGhpcy5taW4uZ2V0KGtleSkgOiB1bmRlZmluZWQsXG5cdFx0XHRtYXggPSBmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1BWCkgPyB0aGlzLm1heC5nZXQoa2V5KSA6IHVuZGVmaW5lZCxcblx0XHRcdGF2ZXJhZ2UgPSBmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkFWRVJBR0UpID8gdGhpcy5hdmVyYWdlLmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0bWVkaWFuID0gZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5NRURJQU4pID8gdGhpcy5tZWRpYW4uZ2V0KGtleSkgOiB1bmRlZmluZWQ7XG5cblx0XHRyZXR1cm4gbmV3IE51bWJlclN1bW1hcml6ZWRWYWx1ZXMoXG5cdFx0XHRzdW0sXG5cdFx0XHRtaW4sXG5cdFx0XHRtYXgsXG5cdFx0XHRhdmVyYWdlLFxuXHRcdFx0bWVkaWFuXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=