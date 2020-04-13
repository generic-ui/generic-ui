/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { BooleanSummarizedValues } from './boolean-summarized.values';
import { DataType } from '../../../field/data-type/data-type';
import { SummariesType } from '../../summaries.type';
var BooleanSummariesCalculator = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanSummariesCalculator, _super);
    function BooleanSummariesCalculator() {
        var _this = _super.call(this) || this;
        _this.truthy = new Map();
        _this.falsy = new Map();
        return _this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    BooleanSummariesCalculator.prototype.forDataType = /**
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
    BooleanSummariesCalculator.prototype.prepare = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var key = field.getKey();
        if (field.isSummaries(SummariesType.TRUTHY)) {
            this.truthy.set(key, 0);
        }
        if (field.isSummaries(SummariesType.FALSY)) {
            this.falsy.set(key, 0);
        }
    };
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    BooleanSummariesCalculator.prototype.postCalculate = /**
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
    BooleanSummariesCalculator.prototype.aggregate = /**
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
            if (field.isSummaries(SummariesType.TRUTHY)) {
                this.truthy.set(key, truthyForField + 1);
            }
        }
        else {
            if (field.isSummaries(SummariesType.FALSY)) {
                this.falsy.set(key, falsyForField + 1);
            }
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    BooleanSummariesCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var key = field.getKey();
        return new BooleanSummarizedValues(this.truthy.get(key), this.falsy.get(key));
    };
    BooleanSummariesCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BooleanSummariesCalculator.ctorParameters = function () { return []; };
    return BooleanSummariesCalculator;
}(SummariesCalculator));
export { BooleanSummariesCalculator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanSummariesCalculator.prototype.truthy;
    /**
     * @type {?}
     * @private
     */
    BooleanSummariesCalculator.prototype.falsy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1zdW1tYXJpZXMuY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N1bW1hcmllcy9jYWxjdWxhdGlvbi9ib29sZWFuL2Jvb2xlYW4tc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJckQ7SUFDZ0Qsc0RBQXFEO0lBS3BHO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTGdCLFlBQU0sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNuQyxXQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7O0lBSW5ELENBQUM7Ozs7O0lBRUQsZ0RBQVc7Ozs7SUFBWCxVQUFZLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCw0Q0FBTzs7OztJQUFQLFVBQVEsS0FBcUI7O1lBRXRCLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBRTFCLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkI7SUFDRixDQUFDOzs7Ozs7SUFFRCxrREFBYTs7Ozs7SUFBYixVQUFjLEtBQXFCLEVBQUUsS0FBOEI7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsOENBQVM7Ozs7O0lBQVQsVUFBVSxLQUFxQixFQUFFLEtBQWM7O1lBRXhDLFlBQVksR0FBRyxLQUFLOztZQUFFLDZCQUE2QjtRQUN4RCxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTs7WUFDcEIsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7WUFDckMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUVwQyxJQUFJLFlBQVksRUFBRTtZQUNqQixJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3pDO1NBQ0Q7YUFBTTtZQUNOLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkM7U0FDRDtJQUVGLENBQUM7Ozs7O0lBRUQsNkRBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQXFCOztZQUV2QyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUUxQixPQUFPLElBQUksdUJBQXVCLENBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDbkIsQ0FBQztJQUNILENBQUM7O2dCQXpERCxVQUFVOzs7O0lBMkRYLGlDQUFDO0NBQUEsQUEzREQsQ0FDZ0QsbUJBQW1CLEdBMERsRTtTQTFEWSwwQkFBMEI7Ozs7OztJQUV0Qyw0Q0FBb0Q7Ozs7O0lBQ3BELDJDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4uL3N1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IEJvb2xlYW5TdW1tYXJpemVkVmFsdWVzIH0gZnJvbSAnLi9ib29sZWFuLXN1bW1hcml6ZWQudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQm9vbGVhblN1bW1hcmllc0NhbGN1bGF0b3IgZXh0ZW5kcyBTdW1tYXJpZXNDYWxjdWxhdG9yPGJvb2xlYW4sIEJvb2xlYW5TdW1tYXJpemVkVmFsdWVzPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB0cnV0aHkgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IGZhbHN5ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5CT09MRUFOO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQ8Ym9vbGVhbj4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuVFJVVEhZKSkge1xuXHRcdFx0dGhpcy50cnV0aHkuc2V0KGtleSwgMCk7XG5cdFx0fVxuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuRkFMU1kpKSB7XG5cdFx0XHR0aGlzLmZhbHN5LnNldChrZXksIDApO1xuXHRcdH1cblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkPGJvb2xlYW4+LCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblx0fVxuXG5cdGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQ8Ym9vbGVhbj4sIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cblx0XHRjb25zdCBib29sZWFuVmFsdWUgPSB2YWx1ZSwgLy8gKHZhbHVlIGFzIGFueSA9PT0gJ3RydWUnKSxcblx0XHRcdGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0dHJ1dGh5Rm9yRmllbGQgPSB0aGlzLnRydXRoeS5nZXQoa2V5KSxcblx0XHRcdGZhbHN5Rm9yRmllbGQgPSB0aGlzLmZhbHN5LmdldChrZXkpO1xuXG5cdFx0aWYgKGJvb2xlYW5WYWx1ZSkge1xuXHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuVFJVVEhZKSkge1xuXHRcdFx0XHR0aGlzLnRydXRoeS5zZXQoa2V5LCB0cnV0aHlGb3JGaWVsZCArIDEpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5GQUxTWSkpIHtcblx0XHRcdFx0dGhpcy5mYWxzeS5zZXQoa2V5LCBmYWxzeUZvckZpZWxkICsgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkPGJvb2xlYW4+KTogQm9vbGVhblN1bW1hcml6ZWRWYWx1ZXMge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHRyZXR1cm4gbmV3IEJvb2xlYW5TdW1tYXJpemVkVmFsdWVzKFxuXHRcdFx0dGhpcy50cnV0aHkuZ2V0KGtleSksXG5cdFx0XHR0aGlzLmZhbHN5LmdldChrZXkpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=