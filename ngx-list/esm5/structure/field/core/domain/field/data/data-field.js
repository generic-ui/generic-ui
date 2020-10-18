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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFPbEQ7Ozs7O0lBQTJDLHFDQUFhO0lBUXZELG1CQUFzQixRQUFhLEVBQzVCLFFBQWtCLEVBQ2xCLFFBQXVCLEVBQ3ZCLGVBQXVDO1FBSDlDLFlBSUMsa0JBQU0sUUFBUSxFQUNiLFFBQVEsRUFDUixRQUFRLENBQ1IsU0FLRDtRQWxCTyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFleEMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRXhELEtBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7O0lBQ3ZDLENBQUM7Ozs7O0lBZ0JELCtCQUFXOzs7O0lBQVgsVUFBWSxJQUFtQjtRQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsc0NBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHVDQUFtQjs7OztJQUFuQixVQUFvQixPQUFnQjtRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVPLG1DQUFlOzs7OztJQUF2QixVQUF3QixlQUFzQztRQUE5RCxpQkFxQkM7UUFuQkEsSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUVuRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzthQUNsRDtZQUVELElBQUksZUFBZSxDQUFDLGNBQWMsRUFBRTtnQkFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLGVBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTzs7OztnQkFBQyxVQUFDLENBQU07b0JBQzdDLEtBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO2dCQUMxQixDQUFDLEVBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDcEQ7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUNwRDtJQUNGLENBQUM7SUFDRixnQkFBQztBQUFELENBQUMsQUEzRUQsQ0FBMkMsYUFBYSxHQTJFdkQ7Ozs7Ozs7Ozs7O0lBekVBLHFDQUF5Qzs7Ozs7SUFFekMsbUNBQXNDOzs7OztJQUV0QyxzQ0FBa0Q7Ozs7O0lBZ0JsRCw2REFBaUQ7Ozs7O0lBRWpELDhEQUFrRDs7Ozs7OztJQUVsRCwrREFBdUU7Ozs7Ozs7SUFFdkUsbURBQXNDOzs7Ozs7O0lBRXRDLGdFQUFvRDs7Ozs7OztJQUVwRCx3REFBMkQ7Ozs7OztJQUUzRCwwREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IEJhc2VEYXRhRmllbGQgfSBmcm9tICcuL2Jhc2UtZGF0YS1maWVsZCc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3VtbWFyaWVzL2NvcmUvZG9tYWluL3N1bW1hcmllcy50eXBlJztcbmltcG9ydCB7IENvbHVtblN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERhdGFGaWVsZDxUPiBleHRlbmRzIEJhc2VEYXRhRmllbGQge1xuXG5cdHByaXZhdGUgc3VtbWFyaWVzRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBzdW1tYXJpZXNUeXBlczogU3VtbWFyaWVzVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBvc3NpYmxlU3VtbWFyaWVzOiBTdW1tYXJpZXNUeXBlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRcdFx0ICBkYXRhVHlwZTogRGF0YVR5cGUsXG5cdFx0XHRcdFx0XHQgIG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRcdFx0ICBzdW1tYXJpZXNDb25maWc/OiBDb2x1bW5TdW1tYXJpZXNDb25maWcpIHtcblx0XHRzdXBlcihhY2Nlc3Nvcixcblx0XHRcdGRhdGFUeXBlLFxuXHRcdFx0bWF0Y2hlcnNcblx0XHQpO1xuXG5cdFx0dGhpcy5wb3NzaWJsZVN1bW1hcmllcyA9IHRoaXMuYXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTtcblxuXHRcdHRoaXMuYXNzaWduU3VtbWFyaWVzKHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRhYnN0cmFjdCBhc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGU7XG5cblx0YWJzdHJhY3QgYXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZTtcblxuXHRhYnN0cmFjdCBzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuO1xuXG5cdGFic3RyYWN0IHNvcnQob25lOiBULCB0d286IFQpOiBudW1iZXI7XG5cblx0YWJzdHJhY3QgZmlsdGVyKHZhbHVlOiBULCBmaWx0ZXJQaHJhc2U6IFQpOiBib29sZWFuO1xuXG5cdGFic3RyYWN0IGVxdWFscyhpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCB2YWx1ZTogVCk6IGJvb2xlYW47XG5cblx0YWJzdHJhY3QgZ2V0RGlzcGxheVZhbHVlKGl0ZW06IFQpOiBzdHJpbmc7XG5cblx0aXNTdW1tYXJpZXModHlwZTogU3VtbWFyaWVzVHlwZSk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKCF0aGlzLmlzU3VtbWFyaWVzRW5hYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICEhKHRoaXMuc3VtbWFyaWVzVHlwZXMgJiB0eXBlKTtcblx0fVxuXG5cdGlzU3VtbWFyaWVzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdW1tYXJpZXNFbmFibGVkO1xuXHR9XG5cblx0c2V0U3VtbWFyaWVzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zdW1tYXJpZXNFbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduU3VtbWFyaWVzKHN1bW1hcmllc0NvbmZpZzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAoISFzdW1tYXJpZXNDb25maWcgJiYgT2JqZWN0LmtleXMoc3VtbWFyaWVzQ29uZmlnKS5sZW5ndGggIT09IDApIHtcblxuXHRcdFx0aWYgKHN1bW1hcmllc0NvbmZpZy5lbmFibGVkKSB7XG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzRW5hYmxlZCA9ICEhc3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMpIHtcblxuXHRcdFx0XHR0aGlzLnN1bW1hcmllc1R5cGVzID0gMDtcblxuXHRcdFx0XHRzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMuZm9yRWFjaCgodDogYW55KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyB8PSB0O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgPSB0aGlzLmFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyA9IHRoaXMuYXNzaWduRGVmYXVsdFN1bW1hcmllcygpO1xuXHRcdH1cblx0fVxufVxuIl19