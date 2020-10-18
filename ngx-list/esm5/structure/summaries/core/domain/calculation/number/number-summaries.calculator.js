/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { NumberSummarizedValues } from './number-summarized.values';
import { DataType } from '../../../../../field/core/domain/field/data/data-type';
import { SummariesType } from '../../summaries.type';
var NumberSummariesCalculator = /** @class */ (function (_super) {
    tslib_1.__extends(NumberSummariesCalculator, _super);
    function NumberSummariesCalculator() {
        var _this = _super.call(this) || this;
        _this.sum = new Map();
        _this.min = new Map();
        _this.max = new Map();
        _this.average = new Map();
        _this.median = new Map();
        return _this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    NumberSummariesCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.NUMBER;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    NumberSummariesCalculator.prototype.prepare = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var key = field.getKey();
        this.sum.set(key, 0);
        this.min.set(key, Number.MAX_SAFE_INTEGER);
        this.max.set(key, 0);
    };
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    NumberSummariesCalculator.prototype.postCalculate = /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    function (field, items) {
        /** @type {?} */
        var key = field.getKey();
        if (field.isSummaries(SummariesType.AVERAGE)) {
            this.average.set(key, this.sum.get(key) / items.length);
        }
        if (field.isSummaries(SummariesType.MEDIAN)) {
            this.median.set(key, field.getValue(items[Math.floor(items.length / 2)]));
        }
    };
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    NumberSummariesCalculator.prototype.aggregate = /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
        /** @type {?} */
        var numberValue = +value;
        /** @type {?} */
        var key = field.getKey();
        /** @type {?} */
        var sumForField = this.sum.get(key);
        /** @type {?} */
        var minForField = this.min.get(key);
        /** @type {?} */
        var maxForField = this.max.get(key);
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
    };
    /**
     * @param {?} field
     * @return {?}
     */
    NumberSummariesCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var key = field.getKey();
        /** @type {?} */
        var sum = field.isSummaries(SummariesType.SUM) ? this.sum.get(key) : undefined;
        /** @type {?} */
        var min = field.isSummaries(SummariesType.MIN) ? this.min.get(key) : undefined;
        /** @type {?} */
        var max = field.isSummaries(SummariesType.MAX) ? this.max.get(key) : undefined;
        /** @type {?} */
        var average = field.isSummaries(SummariesType.AVERAGE) ? this.average.get(key) : undefined;
        /** @type {?} */
        var median = field.isSummaries(SummariesType.MEDIAN) ? this.median.get(key) : undefined;
        return new NumberSummarizedValues(sum, min, max, average, median);
    };
    NumberSummariesCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NumberSummariesCalculator.ctorParameters = function () { return []; };
    return NumberSummariesCalculator;
}(SummariesCalculator));
export { NumberSummariesCalculator };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXN1bW1hcmllcy5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFLckQ7SUFDK0MscURBQW1EO0lBUWpHO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBUmdCLFNBQUcsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNoQyxTQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDaEMsU0FBRyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2hDLGFBQU8sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNwQyxZQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7O0lBSXBELENBQUM7Ozs7O0lBRUQsK0NBQVc7Ozs7SUFBWCxVQUFZLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCwyQ0FBTzs7OztJQUFQLFVBQVEsS0FBWTs7WUFFYixHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUUxQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckIs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QyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7O1lBQzFFLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7O1lBQ3RGLE1BQU0sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFFcEYsT0FBTyxJQUFJLHNCQUFzQixDQUNoQyxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxPQUFPLEVBQ1AsTUFBTSxDQUNOLENBQUM7SUFDSCxDQUFDOztnQkFqRkQsVUFBVTs7OztJQW1GWCxnQ0FBQztDQUFBLEFBbkZELENBQytDLG1CQUFtQixHQWtGakU7U0FsRlkseUJBQXlCOzs7Ozs7SUFFckMsd0NBQWlEOzs7OztJQUNqRCx3Q0FBaUQ7Ozs7O0lBQ2pELHdDQUFpRDs7Ozs7SUFDakQsNENBQXFEOzs7OztJQUNyRCwyQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi9zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBOdW1iZXJTdW1tYXJpemVkVmFsdWVzIH0gZnJvbSAnLi9udW1iZXItc3VtbWFyaXplZC52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOdW1iZXJTdW1tYXJpZXNDYWxjdWxhdG9yIGV4dGVuZHMgU3VtbWFyaWVzQ2FsY3VsYXRvcjxudW1iZXIsIE51bWJlclN1bW1hcml6ZWRWYWx1ZXM+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1bSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgbWluID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBtYXggPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IGF2ZXJhZ2UgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IG1lZGlhbiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkYXRhVHlwZSA9PT0gRGF0YVR5cGUuTlVNQkVSO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0dGhpcy5zdW0uc2V0KGtleSwgMCk7XG5cdFx0dGhpcy5taW4uc2V0KGtleSwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpO1xuXHRcdHRoaXMubWF4LnNldChrZXksIDApO1xuXHR9XG5cblx0cG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQsIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5BVkVSQUdFKSkge1xuXHRcdFx0dGhpcy5hdmVyYWdlLnNldChrZXksIHRoaXMuc3VtLmdldChrZXkpIC8gaXRlbXMubGVuZ3RoKTtcblx0XHR9XG5cblx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5NRURJQU4pKSB7XG5cdFx0XHR0aGlzLm1lZGlhbi5zZXQoa2V5LCBmaWVsZC5nZXRWYWx1ZShpdGVtc1tNYXRoLmZsb29yKGl0ZW1zLmxlbmd0aCAvIDIpXSkpO1xuXHRcdH1cblx0fVxuXG5cdGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IG51bWJlclZhbHVlID0gK3ZhbHVlLFxuXHRcdFx0a2V5ID0gZmllbGQuZ2V0S2V5KCksXG5cdFx0XHRzdW1Gb3JGaWVsZCA9IHRoaXMuc3VtLmdldChrZXkpLFxuXHRcdFx0bWluRm9yRmllbGQgPSB0aGlzLm1pbi5nZXQoa2V5KSxcblx0XHRcdG1heEZvckZpZWxkID0gdGhpcy5tYXguZ2V0KGtleSk7XG5cblx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5TVU0pIHx8IGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuQVZFUkFHRSkpIHtcblx0XHRcdHRoaXMuc3VtLnNldChrZXksIHN1bUZvckZpZWxkICsgbnVtYmVyVmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1JTikpIHtcblx0XHRcdGlmIChtaW5Gb3JGaWVsZCA+IG51bWJlclZhbHVlKSB7XG5cdFx0XHRcdHRoaXMubWluLnNldChrZXksIG51bWJlclZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5NQVgpKSB7XG5cdFx0XHRpZiAobWF4Rm9yRmllbGQgPCBudW1iZXJWYWx1ZSkge1xuXHRcdFx0XHR0aGlzLm1heC5zZXQoa2V5LCBudW1iZXJWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkKTogTnVtYmVyU3VtbWFyaXplZFZhbHVlcyB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKSxcblx0XHRcdHN1bSA9IGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuU1VNKSA/IHRoaXMuc3VtLmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0bWluID0gZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5NSU4pID8gdGhpcy5taW4uZ2V0KGtleSkgOiB1bmRlZmluZWQsXG5cdFx0XHRtYXggPSBmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1BWCkgPyB0aGlzLm1heC5nZXQoa2V5KSA6IHVuZGVmaW5lZCxcblx0XHRcdGF2ZXJhZ2UgPSBmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkFWRVJBR0UpID8gdGhpcy5hdmVyYWdlLmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0bWVkaWFuID0gZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5NRURJQU4pID8gdGhpcy5tZWRpYW4uZ2V0KGtleSkgOiB1bmRlZmluZWQ7XG5cblx0XHRyZXR1cm4gbmV3IE51bWJlclN1bW1hcml6ZWRWYWx1ZXMoXG5cdFx0XHRzdW0sXG5cdFx0XHRtaW4sXG5cdFx0XHRtYXgsXG5cdFx0XHRhdmVyYWdlLFxuXHRcdFx0bWVkaWFuXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=