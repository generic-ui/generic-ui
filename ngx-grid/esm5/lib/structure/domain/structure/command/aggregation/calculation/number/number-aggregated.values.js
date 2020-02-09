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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWFnZ3JlZ2F0ZWQudmFsdWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9jYWxjdWxhdGlvbi9udW1iZXIvbnVtYmVyLWFnZ3JlZ2F0ZWQudmFsdWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7SUFBNEMsa0RBQWdCO0lBUTNELGdDQUFZLEdBQVcsRUFDcEIsR0FBVyxFQUNYLEdBQVcsRUFDWCxPQUFlLEVBQ2YsTUFBYztRQUpqQixZQUtDLGlCQUFPLFNBTVA7UUFMQSxLQUFJLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxLQUFJLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxLQUFJLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFDbEQsQ0FBQzs7Ozs7O0lBRU8sc0RBQXFCOzs7OztJQUE3QixVQUE4QixLQUFhO1FBQzFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQztTQUNaO1FBRUQsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRiw2QkFBQztBQUFELENBQUMsQUFqQ0QsQ0FBNEMsZ0JBQWdCLEdBaUMzRDs7OztJQS9CQSxxQ0FBNEI7O0lBQzVCLHFDQUE0Qjs7SUFDNUIscUNBQTRCOztJQUM1Qix5Q0FBZ0M7O0lBQ2hDLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZWRWYWx1ZXMgfSBmcm9tICcuLi9hZ2dyZWdhdGVkLnZhbHVlcyc7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJBZ2dyZWdhdGVkVmFsdWVzIGV4dGVuZHMgQWdncmVnYXRlZFZhbHVlcyB7XG5cblx0cHVibGljIHJlYWRvbmx5IHN1bTogbnVtYmVyO1xuXHRwdWJsaWMgcmVhZG9ubHkgbWluOiBudW1iZXI7XG5cdHB1YmxpYyByZWFkb25seSBtYXg6IG51bWJlcjtcblx0cHVibGljIHJlYWRvbmx5IGF2ZXJhZ2U6IG51bWJlcjtcblx0cHVibGljIHJlYWRvbmx5IG1lZGlhbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHN1bTogbnVtYmVyLFxuXHRcdFx0XHRtaW46IG51bWJlcixcblx0XHRcdFx0bWF4OiBudW1iZXIsXG5cdFx0XHRcdGF2ZXJhZ2U6IG51bWJlcixcblx0XHRcdFx0bWVkaWFuOiBudW1iZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3VtID0gdGhpcy5zZXRWYWx1ZVdpdGhQcmVjaXNpb24oc3VtKTtcblx0XHR0aGlzLm1pbiA9IHRoaXMuc2V0VmFsdWVXaXRoUHJlY2lzaW9uKG1pbik7XG5cdFx0dGhpcy5tYXggPSB0aGlzLnNldFZhbHVlV2l0aFByZWNpc2lvbihtYXgpO1xuXHRcdHRoaXMuYXZlcmFnZSA9IHRoaXMuc2V0VmFsdWVXaXRoUHJlY2lzaW9uKGF2ZXJhZ2UpO1xuXHRcdHRoaXMubWVkaWFuID0gdGhpcy5zZXRWYWx1ZVdpdGhQcmVjaXNpb24obWVkaWFuKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0VmFsdWVXaXRoUHJlY2lzaW9uKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICsoKHZhbHVlKS50b0ZpeGVkKDIpKTtcblx0fVxuXG59XG4iXX0=