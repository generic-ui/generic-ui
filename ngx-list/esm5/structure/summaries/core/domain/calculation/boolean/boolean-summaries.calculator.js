/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { BooleanSummarizedValues } from './boolean-summarized.values';
import { DataType } from '../../../../../field/core/domain/field/data/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1zdW1tYXJpZXMuY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9jYWxjdWxhdGlvbi9ib29sZWFuL2Jvb2xlYW4tc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFLckQ7SUFDZ0Qsc0RBQXFEO0lBS3BHO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTGdCLFlBQU0sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNuQyxXQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7O0lBSW5ELENBQUM7Ozs7O0lBRUQsZ0RBQVc7Ozs7SUFBWCxVQUFZLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCw0Q0FBTzs7OztJQUFQLFVBQVEsS0FBWTs7WUFFYixHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUUxQixJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN4QjtRQUVELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsa0RBQWE7Ozs7O0lBQWIsVUFBYyxLQUFZLEVBQUUsS0FBOEI7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQsOENBQVM7Ozs7O0lBQVQsVUFBVSxLQUFZLEVBQUUsS0FBYzs7WUFFL0IsWUFBWSxHQUFHLEtBQUs7O1lBQUUsNkJBQTZCO1FBQ3hELEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFOztZQUNwQixjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDOztZQUNyQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBRXBDLElBQUksWUFBWSxFQUFFO1lBQ2pCLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDekM7U0FDRDthQUFNO1lBQ04sSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNEO0lBRUYsQ0FBQzs7Ozs7SUFFRCw2REFBd0I7Ozs7SUFBeEIsVUFBeUIsS0FBWTs7WUFFOUIsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFFMUIsT0FBTyxJQUFJLHVCQUF1QixDQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQ25CLENBQUM7SUFDSCxDQUFDOztnQkF6REQsVUFBVTs7OztJQTJEWCxpQ0FBQztDQUFBLEFBM0RELENBQ2dELG1CQUFtQixHQTBEbEU7U0ExRFksMEJBQTBCOzs7Ozs7SUFFdEMsNENBQW9EOzs7OztJQUNwRCwyQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi9zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBCb29sZWFuU3VtbWFyaXplZFZhbHVlcyB9IGZyb20gJy4vYm9vbGVhbi1zdW1tYXJpemVkLnZhbHVlcyc7XG5cbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uL3N1bW1hcmllcy50eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQm9vbGVhblN1bW1hcmllc0NhbGN1bGF0b3IgZXh0ZW5kcyBTdW1tYXJpZXNDYWxjdWxhdG9yPGJvb2xlYW4sIEJvb2xlYW5TdW1tYXJpemVkVmFsdWVzPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB0cnV0aHkgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IGZhbHN5ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5CT09MRUFOO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuVFJVVEhZKSkge1xuXHRcdFx0dGhpcy50cnV0aHkuc2V0KGtleSwgMCk7XG5cdFx0fVxuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuRkFMU1kpKSB7XG5cdFx0XHR0aGlzLmZhbHN5LnNldChrZXksIDApO1xuXHRcdH1cblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkLCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblx0fVxuXG5cdGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cblx0XHRjb25zdCBib29sZWFuVmFsdWUgPSB2YWx1ZSwgLy8gKHZhbHVlIGFzIGFueSA9PT0gJ3RydWUnKSxcblx0XHRcdGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0dHJ1dGh5Rm9yRmllbGQgPSB0aGlzLnRydXRoeS5nZXQoa2V5KSxcblx0XHRcdGZhbHN5Rm9yRmllbGQgPSB0aGlzLmZhbHN5LmdldChrZXkpO1xuXG5cdFx0aWYgKGJvb2xlYW5WYWx1ZSkge1xuXHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuVFJVVEhZKSkge1xuXHRcdFx0XHR0aGlzLnRydXRoeS5zZXQoa2V5LCB0cnV0aHlGb3JGaWVsZCArIDEpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5GQUxTWSkpIHtcblx0XHRcdFx0dGhpcy5mYWxzeS5zZXQoa2V5LCBmYWxzeUZvckZpZWxkICsgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkKTogQm9vbGVhblN1bW1hcml6ZWRWYWx1ZXMge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHRyZXR1cm4gbmV3IEJvb2xlYW5TdW1tYXJpemVkVmFsdWVzKFxuXHRcdFx0dGhpcy50cnV0aHkuZ2V0KGtleSksXG5cdFx0XHR0aGlzLmZhbHN5LmdldChrZXkpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=