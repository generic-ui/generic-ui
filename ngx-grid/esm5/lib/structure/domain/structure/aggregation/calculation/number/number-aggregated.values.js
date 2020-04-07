/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregatedValues } from '../aggregated.values';
var NumberAggregatedValues = /** @class */ (function (_super) {
    tslib_1.__extends(NumberAggregatedValues, _super);
    function NumberAggregatedValues(sum, min, max, average, median) {
        var _this = _super.call(this) || this;
        _this.sum = _this.setValueWithPrecision(sum);
        _this.min = _this.setValueWithPrecision(min);
        _this.max = _this.setValueWithPrecision(max);
        _this.average = _this.setValueWithPrecision(average);
        _this.median = _this.setValueWithPrecision(median);
        return _this;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NumberAggregatedValues.prototype.setValueWithPrecision = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value && value !== 0) {
            return null;
        }
        if (value === 0) {
            return 0;
        }
        return +((value).toFixed(2));
    };
    return NumberAggregatedValues;
}(AggregatedValues));
export { NumberAggregatedValues };
if (false) {
    /** @type {?} */
    NumberAggregatedValues.prototype.sum;
    /** @type {?} */
    NumberAggregatedValues.prototype.min;
    /** @type {?} */
    NumberAggregatedValues.prototype.max;
    /** @type {?} */
    NumberAggregatedValues.prototype.average;
    /** @type {?} */
    NumberAggregatedValues.prototype.median;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWFnZ3JlZ2F0ZWQudmFsdWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vY2FsY3VsYXRpb24vbnVtYmVyL251bWJlci1hZ2dyZWdhdGVkLnZhbHVlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEO0lBQTRDLGtEQUFnQjtJQVEzRCxnQ0FBWSxHQUFXLEVBQ3BCLEdBQVcsRUFDWCxHQUFXLEVBQ1gsT0FBZSxFQUNmLE1BQWM7UUFKakIsWUFLQyxpQkFBTyxTQU1QO1FBTEEsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBQ2xELENBQUM7Ozs7OztJQUVPLHNEQUFxQjs7Ozs7SUFBN0IsVUFBOEIsS0FBYTtRQUMxQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUVELElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLENBQUMsQ0FBQztTQUNUO1FBRUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUYsNkJBQUM7QUFBRCxDQUFDLEFBakNELENBQTRDLGdCQUFnQixHQWlDM0Q7Ozs7SUEvQkEscUNBQTRCOztJQUM1QixxQ0FBNEI7O0lBQzVCLHFDQUE0Qjs7SUFDNUIseUNBQWdDOztJQUNoQyx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVkVmFsdWVzIH0gZnJvbSAnLi4vYWdncmVnYXRlZC52YWx1ZXMnO1xuXG5leHBvcnQgY2xhc3MgTnVtYmVyQWdncmVnYXRlZFZhbHVlcyBleHRlbmRzIEFnZ3JlZ2F0ZWRWYWx1ZXMge1xuXG5cdHB1YmxpYyByZWFkb25seSBzdW06IG51bWJlcjtcblx0cHVibGljIHJlYWRvbmx5IG1pbjogbnVtYmVyO1xuXHRwdWJsaWMgcmVhZG9ubHkgbWF4OiBudW1iZXI7XG5cdHB1YmxpYyByZWFkb25seSBhdmVyYWdlOiBudW1iZXI7XG5cdHB1YmxpYyByZWFkb25seSBtZWRpYW46IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihzdW06IG51bWJlcixcblx0XHRcdFx0bWluOiBudW1iZXIsXG5cdFx0XHRcdG1heDogbnVtYmVyLFxuXHRcdFx0XHRhdmVyYWdlOiBudW1iZXIsXG5cdFx0XHRcdG1lZGlhbjogbnVtYmVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN1bSA9IHRoaXMuc2V0VmFsdWVXaXRoUHJlY2lzaW9uKHN1bSk7XG5cdFx0dGhpcy5taW4gPSB0aGlzLnNldFZhbHVlV2l0aFByZWNpc2lvbihtaW4pO1xuXHRcdHRoaXMubWF4ID0gdGhpcy5zZXRWYWx1ZVdpdGhQcmVjaXNpb24obWF4KTtcblx0XHR0aGlzLmF2ZXJhZ2UgPSB0aGlzLnNldFZhbHVlV2l0aFByZWNpc2lvbihhdmVyYWdlKTtcblx0XHR0aGlzLm1lZGlhbiA9IHRoaXMuc2V0VmFsdWVXaXRoUHJlY2lzaW9uKG1lZGlhbik7XG5cdH1cblxuXHRwcml2YXRlIHNldFZhbHVlV2l0aFByZWNpc2lvbih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiArKCh2YWx1ZSkudG9GaXhlZCgyKSk7XG5cdH1cblxufVxuIl19