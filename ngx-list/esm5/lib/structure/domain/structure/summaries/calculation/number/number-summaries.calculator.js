/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { NumberSummarizedValues } from './number-summarized.values';
import { DataType } from '../../../../../../../structure/field/domain/core/field/data/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXN1bW1hcmllcy5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFLckQ7SUFDK0MscURBQW1EO0lBUWpHO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBUmdCLFNBQUcsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNoQyxTQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDaEMsU0FBRyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2hDLGFBQU8sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNwQyxZQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7O0lBSXBELENBQUM7Ozs7O0lBRUQsK0NBQVc7Ozs7SUFBWCxVQUFZLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCwyQ0FBTzs7OztJQUFQLFVBQVEsS0FBWTs7WUFFYixHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUUxQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENB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LENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7O1lBQzFFLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7O1lBQ3RGLE1BQU0sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFFcEYsT0FBTyxJQUFJLHNCQUFzQixDQUNoQyxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxPQUFPLEVBQ1AsTUFBTSxDQUNOLENBQUM7SUFDSCxDQUFDOztnQkFqRkQsVUFBVTs7OztJQW1GWCxnQ0FBQztDQUFBLEFBbkZELENBQytDLG1CQUFtQixHQWtGakU7U0FsRlkseUJBQXlCOzs7Ozs7SUFFckMsd0NBQWlEOzs7OztJQUNqRCx3Q0FBaUQ7Ozs7O0lBQ2pELHdDQUFpRDs7Ozs7SUFDakQsNENBQXFEOzs7OztJQUNyRCwyQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi9zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBOdW1iZXJTdW1tYXJpemVkVmFsdWVzIH0gZnJvbSAnLi9udW1iZXItc3VtbWFyaXplZC52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uL3N1bW1hcmllcy50eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnVtYmVyU3VtbWFyaWVzQ2FsY3VsYXRvciBleHRlbmRzIFN1bW1hcmllc0NhbGN1bGF0b3I8bnVtYmVyLCBOdW1iZXJTdW1tYXJpemVkVmFsdWVzPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdW0gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IG1pbiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgbWF4ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBhdmVyYWdlID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBtZWRpYW4gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF0YVR5cGUgPT09IERhdGFUeXBlLk5VTUJFUjtcblx0fVxuXG5cdHByZXBhcmUoZmllbGQ6IEZpZWxkKTogdm9pZCB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdHRoaXMuc3VtLnNldChrZXksIDApO1xuXHRcdHRoaXMubWluLnNldChrZXksIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKTtcblx0XHR0aGlzLm1heC5zZXQoa2V5LCAwKTtcblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkLCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuQVZFUkFHRSkpIHtcblx0XHRcdHRoaXMuYXZlcmFnZS5zZXQoa2V5LCB0aGlzLnN1bS5nZXQoa2V5KSAvIGl0ZW1zLmxlbmd0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuTUVESUFOKSkge1xuXHRcdFx0dGhpcy5tZWRpYW4uc2V0KGtleSwgZmllbGQuZ2V0VmFsdWUoaXRlbXNbTWF0aC5mbG9vcihpdGVtcy5sZW5ndGggLyAyKV0pKTtcblx0XHR9XG5cdH1cblxuXHRhZ2dyZWdhdGUoZmllbGQ6IEZpZWxkLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBudW1iZXJWYWx1ZSA9ICt2YWx1ZSxcblx0XHRcdGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0c3VtRm9yRmllbGQgPSB0aGlzLnN1bS5nZXQoa2V5KSxcblx0XHRcdG1pbkZvckZpZWxkID0gdGhpcy5taW4uZ2V0KGtleSksXG5cdFx0XHRtYXhGb3JGaWVsZCA9IHRoaXMubWF4LmdldChrZXkpO1xuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuU1VNKSB8fCBmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkFWRVJBR0UpKSB7XG5cdFx0XHR0aGlzLnN1bS5zZXQoa2V5LCBzdW1Gb3JGaWVsZCArIG51bWJlclZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5NSU4pKSB7XG5cdFx0XHRpZiAobWluRm9yRmllbGQgPiBudW1iZXJWYWx1ZSkge1xuXHRcdFx0XHR0aGlzLm1pbi5zZXQoa2V5LCBudW1iZXJWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuTUFYKSkge1xuXHRcdFx0aWYgKG1heEZvckZpZWxkIDwgbnVtYmVyVmFsdWUpIHtcblx0XHRcdFx0dGhpcy5tYXguc2V0KGtleSwgbnVtYmVyVmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0Z2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBGaWVsZCk6IE51bWJlclN1bW1hcml6ZWRWYWx1ZXMge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCksXG5cdFx0XHRzdW0gPSBmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLlNVTSkgPyB0aGlzLnN1bS5nZXQoa2V5KSA6IHVuZGVmaW5lZCxcblx0XHRcdG1pbiA9IGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuTUlOKSA/IHRoaXMubWluLmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0bWF4ID0gZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5NQVgpID8gdGhpcy5tYXguZ2V0KGtleSkgOiB1bmRlZmluZWQsXG5cdFx0XHRhdmVyYWdlID0gZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5BVkVSQUdFKSA/IHRoaXMuYXZlcmFnZS5nZXQoa2V5KSA6IHVuZGVmaW5lZCxcblx0XHRcdG1lZGlhbiA9IGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuTUVESUFOKSA/IHRoaXMubWVkaWFuLmdldChrZXkpIDogdW5kZWZpbmVkO1xuXG5cdFx0cmV0dXJuIG5ldyBOdW1iZXJTdW1tYXJpemVkVmFsdWVzKFxuXHRcdFx0c3VtLFxuXHRcdFx0bWluLFxuXHRcdFx0bWF4LFxuXHRcdFx0YXZlcmFnZSxcblx0XHRcdG1lZGlhblxuXHRcdCk7XG5cdH1cblxufVxuIl19