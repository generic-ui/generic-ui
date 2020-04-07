/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregationCalculator } from '../aggregation.calculator';
import { BooleanAggregatedValues } from './boolean-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
import { AggregationType } from '../../aggregation.type';
var BooleanAggregationCalculator = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanAggregationCalculator, _super);
    function BooleanAggregationCalculator() {
        var _this = _super.call(this) || this;
        _this.truthy = new Map();
        _this.falsy = new Map();
        return _this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    BooleanAggregationCalculator.prototype.forDataType = /**
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
    BooleanAggregationCalculator.prototype.prepare = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var key = field.getKey();
        if (field.isAggregation(AggregationType.TRUTHY)) {
            this.truthy.set(key, 0);
        }
        if (field.isAggregation(AggregationType.FALSY)) {
            this.falsy.set(key, 0);
        }
    };
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    BooleanAggregationCalculator.prototype.postCalculate = /**
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
    BooleanAggregationCalculator.prototype.aggregate = /**
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
            if (field.isAggregation(AggregationType.TRUTHY)) {
                this.truthy.set(key, truthyForField + 1);
            }
        }
        else {
            if (field.isAggregation(AggregationType.FALSY)) {
                this.falsy.set(key, falsyForField + 1);
            }
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    BooleanAggregationCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var key = field.getKey();
        return new BooleanAggregatedValues(this.truthy.get(key), this.falsy.get(key));
    };
    BooleanAggregationCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BooleanAggregationCalculator.ctorParameters = function () { return []; };
    return BooleanAggregationCalculator;
}(AggregationCalculator));
export { BooleanAggregationCalculator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanAggregationCalculator.prototype.truthy;
    /**
     * @type {?}
     * @private
     */
    BooleanAggregationCalculator.prototype.falsy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vY2FsY3VsYXRpb24vYm9vbGVhbi9ib29sZWFuLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFJekQ7SUFDa0Qsd0RBQXVEO0lBS3hHO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTGdCLFlBQU0sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNuQyxXQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7O0lBSW5ELENBQUM7Ozs7O0lBRUQsa0RBQVc7Ozs7SUFBWCxVQUFZLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCw4Q0FBTzs7OztJQUFQLFVBQVEsS0FBcUI7O1lBRXRCLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBRTFCLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkI7SUFDRixDQUFDOzs7Ozs7SUFFRCxvREFBYTs7Ozs7SUFBYixVQUFjLEtBQXFCLEVBQUUsS0FBOEI7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsZ0RBQVM7Ozs7O0lBQVQsVUFBVSxLQUFxQixFQUFFLEtBQWM7O1lBRXhDLFlBQVksR0FBRyxLQUFLOztZQUFFLDZCQUE2QjtRQUN4RCxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTs7WUFDcEIsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7WUFDckMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUVwQyxJQUFJLFlBQVksRUFBRTtZQUNqQixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3pDO1NBQ0Q7YUFBTTtZQUNOLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkM7U0FDRDtJQUVGLENBQUM7Ozs7O0lBRUQsK0RBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQXFCOztZQUV2QyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUUxQixPQUFPLElBQUksdUJBQXVCLENBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDbkIsQ0FBQztJQUNILENBQUM7O2dCQXpERCxVQUFVOzs7O0lBMkRYLG1DQUFDO0NBQUEsQUEzREQsQ0FDa0QscUJBQXFCLEdBMER0RTtTQTFEWSw0QkFBNEI7Ozs7OztJQUV4Qyw4Q0FBb0Q7Ozs7O0lBQ3BELDZDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRpb25DYWxjdWxhdG9yIH0gZnJvbSAnLi4vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBCb29sZWFuQWdncmVnYXRlZFZhbHVlcyB9IGZyb20gJy4vYm9vbGVhbi1hZ2dyZWdhdGVkLnZhbHVlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRpb24udHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCb29sZWFuQWdncmVnYXRpb25DYWxjdWxhdG9yIGV4dGVuZHMgQWdncmVnYXRpb25DYWxjdWxhdG9yPGJvb2xlYW4sIEJvb2xlYW5BZ2dyZWdhdGVkVmFsdWVzPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB0cnV0aHkgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IGZhbHN5ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5CT09MRUFOO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGQ8Ym9vbGVhbj4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLlRSVVRIWSkpIHtcblx0XHRcdHRoaXMudHJ1dGh5LnNldChrZXksIDApO1xuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5GQUxTWSkpIHtcblx0XHRcdHRoaXMuZmFsc3kuc2V0KGtleSwgMCk7XG5cdFx0fVxuXHR9XG5cblx0cG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQ8Ym9vbGVhbj4sIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZDxib29sZWFuPiwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGJvb2xlYW5WYWx1ZSA9IHZhbHVlLCAvLyAodmFsdWUgYXMgYW55ID09PSAndHJ1ZScpLFxuXHRcdFx0a2V5ID0gZmllbGQuZ2V0S2V5KCksXG5cdFx0XHR0cnV0aHlGb3JGaWVsZCA9IHRoaXMudHJ1dGh5LmdldChrZXkpLFxuXHRcdFx0ZmFsc3lGb3JGaWVsZCA9IHRoaXMuZmFsc3kuZ2V0KGtleSk7XG5cblx0XHRpZiAoYm9vbGVhblZhbHVlKSB7XG5cdFx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuVFJVVEhZKSkge1xuXHRcdFx0XHR0aGlzLnRydXRoeS5zZXQoa2V5LCB0cnV0aHlGb3JGaWVsZCArIDEpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuRkFMU1kpKSB7XG5cdFx0XHRcdHRoaXMuZmFsc3kuc2V0KGtleSwgZmFsc3lGb3JGaWVsZCArIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0Z2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBGaWVsZDxib29sZWFuPik6IEJvb2xlYW5BZ2dyZWdhdGVkVmFsdWVzIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0cmV0dXJuIG5ldyBCb29sZWFuQWdncmVnYXRlZFZhbHVlcyhcblx0XHRcdHRoaXMudHJ1dGh5LmdldChrZXkpLFxuXHRcdFx0dGhpcy5mYWxzeS5nZXQoa2V5KVxuXHRcdCk7XG5cdH1cblxufVxuIl19