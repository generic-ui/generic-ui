/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregatedValues } from '../aggregated.values';
export class NumberAggregatedValues extends AggregatedValues {
    /**
     * @param {?} sum
     * @param {?} min
     * @param {?} max
     * @param {?} average
     * @param {?} median
     */
    constructor(sum, min, max, average, median) {
        super();
        this.sum = this.setValueWithPrecision(sum);
        this.min = this.setValueWithPrecision(min);
        this.max = this.setValueWithPrecision(max);
        this.average = this.setValueWithPrecision(average);
        this.median = this.setValueWithPrecision(median);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setValueWithPrecision(value) {
        if (!value && value !== 0) {
            return null;
        }
        if (value === 0) {
            return 0;
        }
        return +((value).toFixed(2));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWFnZ3JlZ2F0ZWQudmFsdWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9jYWxjdWxhdGlvbi9udW1iZXIvbnVtYmVyLWFnZ3JlZ2F0ZWQudmFsdWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCOzs7Ozs7OztJQVEzRCxZQUFZLEdBQVcsRUFDcEIsR0FBVyxFQUNYLEdBQVcsRUFDWCxPQUFlLEVBQ2YsTUFBYztRQUNoQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLEtBQWE7UUFDMUMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFFRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxDQUFDLENBQUM7U0FDVDtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUVEOzs7SUEvQkEscUNBQTRCOztJQUM1QixxQ0FBNEI7O0lBQzVCLHFDQUE0Qjs7SUFDNUIseUNBQWdDOztJQUNoQyx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVkVmFsdWVzIH0gZnJvbSAnLi4vYWdncmVnYXRlZC52YWx1ZXMnO1xuXG5leHBvcnQgY2xhc3MgTnVtYmVyQWdncmVnYXRlZFZhbHVlcyBleHRlbmRzIEFnZ3JlZ2F0ZWRWYWx1ZXN7XG5cblx0cHVibGljIHJlYWRvbmx5IHN1bTogbnVtYmVyO1xuXHRwdWJsaWMgcmVhZG9ubHkgbWluOiBudW1iZXI7XG5cdHB1YmxpYyByZWFkb25seSBtYXg6IG51bWJlcjtcblx0cHVibGljIHJlYWRvbmx5IGF2ZXJhZ2U6IG51bWJlcjtcblx0cHVibGljIHJlYWRvbmx5IG1lZGlhbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHN1bTogbnVtYmVyLFxuXHRcdFx0XHRtaW46IG51bWJlcixcblx0XHRcdFx0bWF4OiBudW1iZXIsXG5cdFx0XHRcdGF2ZXJhZ2U6IG51bWJlcixcblx0XHRcdFx0bWVkaWFuOiBudW1iZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3VtID0gdGhpcy5zZXRWYWx1ZVdpdGhQcmVjaXNpb24oc3VtKTtcblx0XHR0aGlzLm1pbiA9IHRoaXMuc2V0VmFsdWVXaXRoUHJlY2lzaW9uKG1pbik7XG5cdFx0dGhpcy5tYXggPSB0aGlzLnNldFZhbHVlV2l0aFByZWNpc2lvbihtYXgpO1xuXHRcdHRoaXMuYXZlcmFnZSA9IHRoaXMuc2V0VmFsdWVXaXRoUHJlY2lzaW9uKGF2ZXJhZ2UpO1xuXHRcdHRoaXMubWVkaWFuID0gdGhpcy5zZXRWYWx1ZVdpdGhQcmVjaXNpb24obWVkaWFuKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0VmFsdWVXaXRoUHJlY2lzaW9uKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICsoKHZhbHVlKS50b0ZpeGVkKDIpKTtcblx0fVxuXG59XG4iXX0=