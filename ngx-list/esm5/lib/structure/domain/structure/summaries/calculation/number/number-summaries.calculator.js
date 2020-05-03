/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { NumberSummarizedValues } from './number-summarized.values';
import { DataType } from '../../../field/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXN1bW1hcmllcy5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJckQ7SUFDK0MscURBQW1EO0lBUWpHO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBUmdCLFNBQUcsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNoQyxTQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDaEMsU0FBRyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2hDLGFBQU8sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNwQyxZQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7O0lBSXBELENBQUM7Ozs7O0lBRUQsK0NBQVc7Ozs7SUFBWCxVQUFZLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCwyQ0FBTzs7OztJQUFQLFVBQVEsS0FBb0I7O1lBRXJCLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBRTFCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVELGlEQUFhOzs7OztJQUFiLFVBQWMsS0FBb0IsRUFBRSxLQUE4Qjs7WUFFM0QsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFFMUIsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFFO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsNkNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFvQixFQUFFLEtBQWE7O1lBRXRDLFdBQVcsR0FBRyxDQUFDLEtBQUs7O1lBQ3pCLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFOztZQUNwQixXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDOztZQUMvQixXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDOztZQUMvQixXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBRWhDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQztTQUM3QztRQUVELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekMsSUFBSSxXQUFXLEdBQUcsV0FBVyxFQUFFO2dCQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDL0I7U0FDRDtRQUVELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekMsSUFBSSxXQUFXLEdBQUcsV0FBVyxFQUFFO2dCQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDL0I7U0FDRDtJQUVGLENBQUM7Ozs7O0lBRUQsNERBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQW9COztZQUV0QyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTs7WUFDekIsR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7WUFDMUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7WUFDMUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7WUFDMUUsT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7WUFDdEYsTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUVwRixPQUFPLElBQUksc0JBQXNCLENBQ2hDLEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILE9BQU8sRUFDUCxNQUFNLENBQ04sQ0FBQztJQUNILENBQUM7O2dCQWpGRCxVQUFVOzs7O0lBbUZYLGdDQUFDO0NBQUEsQUFuRkQsQ0FDK0MsbUJBQW1CLEdBa0ZqRTtTQWxGWSx5QkFBeUI7Ozs7OztJQUVyQyx3Q0FBaUQ7Ozs7O0lBQ2pELHdDQUFpRDs7Ozs7SUFDakQsd0NBQWlEOzs7OztJQUNqRCw0Q0FBcUQ7Ozs7O0lBQ3JELDJDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi9zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBOdW1iZXJTdW1tYXJpemVkVmFsdWVzIH0gZnJvbSAnLi9udW1iZXItc3VtbWFyaXplZC52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOdW1iZXJTdW1tYXJpZXNDYWxjdWxhdG9yIGV4dGVuZHMgU3VtbWFyaWVzQ2FsY3VsYXRvcjxudW1iZXIsIE51bWJlclN1bW1hcml6ZWRWYWx1ZXM+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1bSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgbWluID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBtYXggPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IGF2ZXJhZ2UgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IG1lZGlhbiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkYXRhVHlwZSA9PT0gRGF0YVR5cGUuTlVNQkVSO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQ8bnVtYmVyPik6IHZvaWQge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHR0aGlzLnN1bS5zZXQoa2V5LCAwKTtcblx0XHR0aGlzLm1pbi5zZXQoa2V5LCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUik7XG5cdFx0dGhpcy5tYXguc2V0KGtleSwgMCk7XG5cdH1cblxuXHRwb3N0Q2FsY3VsYXRlKGZpZWxkOiBGaWVsZDxudW1iZXI+LCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuQVZFUkFHRSkpIHtcblx0XHRcdHRoaXMuYXZlcmFnZS5zZXQoa2V5LCB0aGlzLnN1bS5nZXQoa2V5KSAvIGl0ZW1zLmxlbmd0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuTUVESUFOKSkge1xuXHRcdFx0dGhpcy5tZWRpYW4uc2V0KGtleSwgZmllbGQuZ2V0VmFsdWUoaXRlbXNbTWF0aC5mbG9vcihpdGVtcy5sZW5ndGggLyAyKV0pKTtcblx0XHR9XG5cdH1cblxuXHRhZ2dyZWdhdGUoZmllbGQ6IEZpZWxkPG51bWJlcj4sIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IG51bWJlclZhbHVlID0gK3ZhbHVlLFxuXHRcdFx0a2V5ID0gZmllbGQuZ2V0S2V5KCksXG5cdFx0XHRzdW1Gb3JGaWVsZCA9IHRoaXMuc3VtLmdldChrZXkpLFxuXHRcdFx0bWluRm9yRmllbGQgPSB0aGlzLm1pbi5nZXQoa2V5KSxcblx0XHRcdG1heEZvckZpZWxkID0gdGhpcy5tYXguZ2V0KGtleSk7XG5cblx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5TVU0pIHx8IGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuQVZFUkFHRSkpIHtcblx0XHRcdHRoaXMuc3VtLnNldChrZXksIHN1bUZvckZpZWxkICsgbnVtYmVyVmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1JTikpIHtcblx0XHRcdGlmIChtaW5Gb3JGaWVsZCA+IG51bWJlclZhbHVlKSB7XG5cdFx0XHRcdHRoaXMubWluLnNldChrZXksIG51bWJlclZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5NQVgpKSB7XG5cdFx0XHRpZiAobWF4Rm9yRmllbGQgPCBudW1iZXJWYWx1ZSkge1xuXHRcdFx0XHR0aGlzLm1heC5zZXQoa2V5LCBudW1iZXJWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkPG51bWJlcj4pOiBOdW1iZXJTdW1tYXJpemVkVmFsdWVzIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0c3VtID0gZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5TVU0pID8gdGhpcy5zdW0uZ2V0KGtleSkgOiB1bmRlZmluZWQsXG5cdFx0XHRtaW4gPSBmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1JTikgPyB0aGlzLm1pbi5nZXQoa2V5KSA6IHVuZGVmaW5lZCxcblx0XHRcdG1heCA9IGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuTUFYKSA/IHRoaXMubWF4LmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0YXZlcmFnZSA9IGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuQVZFUkFHRSkgPyB0aGlzLmF2ZXJhZ2UuZ2V0KGtleSkgOiB1bmRlZmluZWQsXG5cdFx0XHRtZWRpYW4gPSBmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1FRElBTikgPyB0aGlzLm1lZGlhbi5nZXQoa2V5KSA6IHVuZGVmaW5lZDtcblxuXHRcdHJldHVybiBuZXcgTnVtYmVyU3VtbWFyaXplZFZhbHVlcyhcblx0XHRcdHN1bSxcblx0XHRcdG1pbixcblx0XHRcdG1heCxcblx0XHRcdGF2ZXJhZ2UsXG5cdFx0XHRtZWRpYW5cblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==