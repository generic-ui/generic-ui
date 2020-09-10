/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SummariesValues } from '../summaries.values';
export class NumberSummarizedValues extends SummariesValues {
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
    NumberSummarizedValues.prototype.sum;
    /** @type {?} */
    NumberSummarizedValues.prototype.min;
    /** @type {?} */
    NumberSummarizedValues.prototype.max;
    /** @type {?} */
    NumberSummarizedValues.prototype.average;
    /** @type {?} */
    NumberSummarizedValues.prototype.median;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXN1bW1hcml6ZWQudmFsdWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9kb21haW4vc3VtbWFyaWVzL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItc3VtbWFyaXplZC52YWx1ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZUFBZTs7Ozs7Ozs7SUFRMUQsWUFBWSxHQUFXLEVBQ3BCLEdBQVcsRUFDWCxHQUFXLEVBQ1gsT0FBZSxFQUNmLE1BQWM7UUFDaEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxLQUFhO1FBQzFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQztTQUNaO1FBRUQsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FFRDs7O0lBL0JBLHFDQUE0Qjs7SUFDNUIscUNBQTRCOztJQUM1QixxQ0FBNEI7O0lBQzVCLHlDQUFnQzs7SUFDaEMsd0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VtbWFyaWVzVmFsdWVzIH0gZnJvbSAnLi4vc3VtbWFyaWVzLnZhbHVlcyc7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJTdW1tYXJpemVkVmFsdWVzIGV4dGVuZHMgU3VtbWFyaWVzVmFsdWVzIHtcblxuXHRwdWJsaWMgcmVhZG9ubHkgc3VtOiBudW1iZXI7XG5cdHB1YmxpYyByZWFkb25seSBtaW46IG51bWJlcjtcblx0cHVibGljIHJlYWRvbmx5IG1heDogbnVtYmVyO1xuXHRwdWJsaWMgcmVhZG9ubHkgYXZlcmFnZTogbnVtYmVyO1xuXHRwdWJsaWMgcmVhZG9ubHkgbWVkaWFuOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3Ioc3VtOiBudW1iZXIsXG5cdFx0XHRcdG1pbjogbnVtYmVyLFxuXHRcdFx0XHRtYXg6IG51bWJlcixcblx0XHRcdFx0YXZlcmFnZTogbnVtYmVyLFxuXHRcdFx0XHRtZWRpYW46IG51bWJlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdW0gPSB0aGlzLnNldFZhbHVlV2l0aFByZWNpc2lvbihzdW0pO1xuXHRcdHRoaXMubWluID0gdGhpcy5zZXRWYWx1ZVdpdGhQcmVjaXNpb24obWluKTtcblx0XHR0aGlzLm1heCA9IHRoaXMuc2V0VmFsdWVXaXRoUHJlY2lzaW9uKG1heCk7XG5cdFx0dGhpcy5hdmVyYWdlID0gdGhpcy5zZXRWYWx1ZVdpdGhQcmVjaXNpb24oYXZlcmFnZSk7XG5cdFx0dGhpcy5tZWRpYW4gPSB0aGlzLnNldFZhbHVlV2l0aFByZWNpc2lvbihtZWRpYW4pO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRWYWx1ZVdpdGhQcmVjaXNpb24odmFsdWU6IG51bWJlcik6IG51bWJlciB7XG5cdFx0aWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gKygodmFsdWUpLnRvRml4ZWQoMikpO1xuXHR9XG5cbn1cbiJdfQ==