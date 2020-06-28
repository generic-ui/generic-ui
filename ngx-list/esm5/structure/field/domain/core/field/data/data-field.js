/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseDataField } from './base-data-field';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
DataField = /** @class */ (function (_super) {
    tslib_1.__extends(DataField, _super);
    function DataField(accessor, dataType, matchers, summariesConfig) {
        var _this = _super.call(this, accessor, dataType, matchers) || this;
        _this.summariesEnabled = true;
        _this.possibleSummaries = _this.assignPossibleSummaries();
        _this.assignSummaries(summariesConfig);
        return _this;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    DataField.prototype.isSummaries = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (!this.isSummariesEnabled()) {
            return false;
        }
        return !!(this.summariesTypes & type);
    };
    /**
     * @return {?}
     */
    DataField.prototype.isSummariesEnabled = /**
     * @return {?}
     */
    function () {
        return this.summariesEnabled;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    DataField.prototype.setSummariesEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.summariesEnabled = enabled;
    };
    /**
     * @private
     * @param {?} summariesConfig
     * @return {?}
     */
    DataField.prototype.assignSummaries = /**
     * @private
     * @param {?} summariesConfig
     * @return {?}
     */
    function (summariesConfig) {
        var _this = this;
        if (!!summariesConfig && Object.keys(summariesConfig).length !== 0) {
            if (summariesConfig.enabled) {
                this.summariesEnabled = !!summariesConfig.enabled;
            }
            if (summariesConfig.summariesTypes) {
                this.summariesTypes = 0;
                summariesConfig.summariesTypes.forEach((/**
                 * @param {?} t
                 * @return {?}
                 */
                function (t) {
                    _this.summariesTypes |= t;
                }));
            }
            else {
                this.summariesTypes = this.assignDefaultSummaries();
            }
        }
        else {
            this.summariesTypes = this.assignDefaultSummaries();
        }
    };
    return DataField;
}(BaseDataField));
/**
 * @abstract
 * @template T
 */
export { DataField };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataField.prototype.summariesEnabled;
    /**
     * @type {?}
     * @private
     */
    DataField.prototype.summariesTypes;
    /**
     * @type {?}
     * @private
     */
    DataField.prototype.possibleSummaries;
    /**
     * @abstract
     * @return {?}
     */
    DataField.prototype.assignDefaultSummaries = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DataField.prototype.assignPossibleSummaries = function () { };
    /**
     * @abstract
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    DataField.prototype.search = function (item, searchPhrase) { };
    /**
     * @abstract
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    DataField.prototype.sort = function (one, two) { };
    /**
     * @abstract
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    DataField.prototype.filter = function (value, filterPhrase) { };
    /**
     * @abstract
     * @param {?} item
     * @param {?} value
     * @return {?}
     */
    DataField.prototype.equals = function (item, value) { };
    /**
     * @abstract
     * @param {?} item
     * @return {?}
     */
    DataField.prototype.getDisplayValue = function (item) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2RhdGEvZGF0YS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFPbEQ7Ozs7O0lBQTJDLHFDQUFhO0lBUXZELG1CQUFzQixRQUFhLEVBQzVCLFFBQWtCLEVBQ2xCLFFBQXVCLEVBQ3ZCLGVBQXVDO1FBSDlDLFlBSUMsa0JBQU0sUUFBUSxFQUNiLFFBQVEsRUFDUixRQUFRLENBQ1IsU0FLRDtRQWxCTyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFleEMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRXhELEtBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7O0lBQ3ZDLENBQUM7Ozs7O0lBZ0JELCtCQUFXOzs7O0lBQVgsVUFBWSxJQUFtQjtRQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsc0NBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHVDQUFtQjs7OztJQUFuQixVQUFvQixPQUFnQjtRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVPLG1DQUFlOzs7OztJQUF2QixVQUF3QixlQUFzQztRQUE5RCxpQkFxQkM7UUFuQkEsSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUVuRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzthQUNsRDtZQUVELElBQUksZUFBZSxDQUFDLGNBQWMsRUFBRTtnQkFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLGVBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTzs7OztnQkFBQyxVQUFDLENBQU07b0JBQzdDLEtBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO2dCQUMxQixDQUFDLEVBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDcEQ7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUNwRDtJQUNGLENBQUM7SUFDRixnQkFBQztBQUFELENBQUMsQUEzRUQsQ0FBMkMsYUFBYSxHQTJFdkQ7Ozs7Ozs7Ozs7O0lBekVBLHFDQUF5Qzs7Ozs7SUFFekMsbUNBQXNDOzs7OztJQUV0QyxzQ0FBa0Q7Ozs7O0lBZ0JsRCw2REFBaUQ7Ozs7O0lBRWpELDhEQUFrRDs7Ozs7OztJQUVsRCwrREFBdUU7Ozs7Ozs7SUFFdkUsbURBQXNDOzs7Ozs7O0lBRXRDLGdFQUFvRDs7Ozs7OztJQUVwRCx3REFBMkQ7Ozs7OztJQUUzRCwwREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IEJhc2VEYXRhRmllbGQgfSBmcm9tICcuL2Jhc2UtZGF0YS1maWVsZCc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLXN1bW1hcmllcy5jb25maWcnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRhRmllbGQ8VD4gZXh0ZW5kcyBCYXNlRGF0YUZpZWxkIHtcblxuXHRwcml2YXRlIHN1bW1hcmllc0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgc3VtbWFyaWVzVHlwZXM6IFN1bW1hcmllc1R5cGU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwb3NzaWJsZVN1bW1hcmllczogU3VtbWFyaWVzVHlwZTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0XHRcdCAgZGF0YVR5cGU6IERhdGFUeXBlLFxuXHRcdFx0XHRcdFx0ICBtYXRjaGVyczogRmllbGRNYXRjaGVycyxcblx0XHRcdFx0XHRcdCAgc3VtbWFyaWVzQ29uZmlnPzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnKSB7XG5cdFx0c3VwZXIoYWNjZXNzb3IsXG5cdFx0XHRkYXRhVHlwZSxcblx0XHRcdG1hdGNoZXJzXG5cdFx0KTtcblxuXHRcdHRoaXMucG9zc2libGVTdW1tYXJpZXMgPSB0aGlzLmFzc2lnblBvc3NpYmxlU3VtbWFyaWVzKCk7XG5cblx0XHR0aGlzLmFzc2lnblN1bW1hcmllcyhzdW1tYXJpZXNDb25maWcpO1xuXHR9XG5cblx0YWJzdHJhY3QgYXNzaWduRGVmYXVsdFN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlO1xuXG5cdGFic3RyYWN0IGFzc2lnblBvc3NpYmxlU3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGU7XG5cblx0YWJzdHJhY3Qgc2VhcmNoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbjtcblxuXHRhYnN0cmFjdCBzb3J0KG9uZTogVCwgdHdvOiBUKTogbnVtYmVyO1xuXG5cdGFic3RyYWN0IGZpbHRlcih2YWx1ZTogVCwgZmlsdGVyUGhyYXNlOiBUKTogYm9vbGVhbjtcblxuXHRhYnN0cmFjdCBlcXVhbHMoaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgdmFsdWU6IFQpOiBib29sZWFuO1xuXG5cdGFic3RyYWN0IGdldERpc3BsYXlWYWx1ZShpdGVtOiBUKTogc3RyaW5nO1xuXG5cdGlzU3VtbWFyaWVzKHR5cGU6IFN1bW1hcmllc1R5cGUpOiBib29sZWFuIHtcblxuXHRcdGlmICghdGhpcy5pc1N1bW1hcmllc0VuYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiAhISh0aGlzLnN1bW1hcmllc1R5cGVzICYgdHlwZSk7XG5cdH1cblxuXHRpc1N1bW1hcmllc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3VtbWFyaWVzRW5hYmxlZDtcblx0fVxuXG5cdHNldFN1bW1hcmllc0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc3VtbWFyaWVzRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnblN1bW1hcmllcyhzdW1tYXJpZXNDb25maWc6IENvbHVtblN1bW1hcmllc0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0aWYgKCEhc3VtbWFyaWVzQ29uZmlnICYmIE9iamVjdC5rZXlzKHN1bW1hcmllc0NvbmZpZykubGVuZ3RoICE9PSAwKSB7XG5cblx0XHRcdGlmIChzdW1tYXJpZXNDb25maWcuZW5hYmxlZCkge1xuXHRcdFx0XHR0aGlzLnN1bW1hcmllc0VuYWJsZWQgPSAhIXN1bW1hcmllc0NvbmZpZy5lbmFibGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzKSB7XG5cblx0XHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyA9IDA7XG5cblx0XHRcdFx0c3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzLmZvckVhY2goKHQ6IGFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgfD0gdDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN1bW1hcmllc1R5cGVzID0gdGhpcy5hc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgPSB0aGlzLmFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==