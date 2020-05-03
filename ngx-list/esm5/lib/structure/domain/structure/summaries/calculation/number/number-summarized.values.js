/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SummariesValues } from '../summaries.values';
var NumberSummarizedValues = /** @class */ (function (_super) {
    tslib_1.__extends(NumberSummarizedValues, _super);
    function NumberSummarizedValues(sum, min, max, average, median) {
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
    NumberSummarizedValues.prototype.setValueWithPrecision = /**
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
    return NumberSummarizedValues;
}(SummariesValues));
export { NumberSummarizedValues };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXN1bW1hcml6ZWQudmFsdWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItc3VtbWFyaXplZC52YWx1ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQ7SUFBNEMsa0RBQWU7SUFRMUQsZ0NBQVksR0FBVyxFQUNwQixHQUFXLEVBQ1gsR0FBVyxFQUNYLE9BQWUsRUFDZixNQUFjO1FBSmpCLFlBS0MsaUJBQU8sU0FNUDtRQUxBLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQUNsRCxDQUFDOzs7Ozs7SUFFTyxzREFBcUI7Ozs7O0lBQTdCLFVBQThCLEtBQWE7UUFDMUMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFFRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxDQUFDLENBQUM7U0FDVDtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVGLDZCQUFDO0FBQUQsQ0FBQyxBQWpDRCxDQUE0QyxlQUFlLEdBaUMxRDs7OztJQS9CQSxxQ0FBNEI7O0lBQzVCLHFDQUE0Qjs7SUFDNUIscUNBQTRCOztJQUM1Qix5Q0FBZ0M7O0lBQ2hDLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1bW1hcmllc1ZhbHVlcyB9IGZyb20gJy4uL3N1bW1hcmllcy52YWx1ZXMnO1xuXG5leHBvcnQgY2xhc3MgTnVtYmVyU3VtbWFyaXplZFZhbHVlcyBleHRlbmRzIFN1bW1hcmllc1ZhbHVlcyB7XG5cblx0cHVibGljIHJlYWRvbmx5IHN1bTogbnVtYmVyO1xuXHRwdWJsaWMgcmVhZG9ubHkgbWluOiBudW1iZXI7XG5cdHB1YmxpYyByZWFkb25seSBtYXg6IG51bWJlcjtcblx0cHVibGljIHJlYWRvbmx5IGF2ZXJhZ2U6IG51bWJlcjtcblx0cHVibGljIHJlYWRvbmx5IG1lZGlhbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHN1bTogbnVtYmVyLFxuXHRcdFx0XHRtaW46IG51bWJlcixcblx0XHRcdFx0bWF4OiBudW1iZXIsXG5cdFx0XHRcdGF2ZXJhZ2U6IG51bWJlcixcblx0XHRcdFx0bWVkaWFuOiBudW1iZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3VtID0gdGhpcy5zZXRWYWx1ZVdpdGhQcmVjaXNpb24oc3VtKTtcblx0XHR0aGlzLm1pbiA9IHRoaXMuc2V0VmFsdWVXaXRoUHJlY2lzaW9uKG1pbik7XG5cdFx0dGhpcy5tYXggPSB0aGlzLnNldFZhbHVlV2l0aFByZWNpc2lvbihtYXgpO1xuXHRcdHRoaXMuYXZlcmFnZSA9IHRoaXMuc2V0VmFsdWVXaXRoUHJlY2lzaW9uKGF2ZXJhZ2UpO1xuXHRcdHRoaXMubWVkaWFuID0gdGhpcy5zZXRWYWx1ZVdpdGhQcmVjaXNpb24obWVkaWFuKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0VmFsdWVXaXRoUHJlY2lzaW9uKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICsoKHZhbHVlKS50b0ZpeGVkKDIpKTtcblx0fVxuXG59XG4iXX0=