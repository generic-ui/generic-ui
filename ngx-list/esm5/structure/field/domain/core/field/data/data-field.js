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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2RhdGEvZGF0YS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFPbEQ7Ozs7O0lBQTJDLHFDQUFhO0lBUXZELG1CQUFzQixRQUFhLEVBQzVCLFFBQWtCLEVBQ2xCLFFBQXVCLEVBQ3ZCLGVBQXVDO1FBSDlDLFlBSUMsa0JBQU0sUUFBUSxFQUNiLFFBQVEsRUFDUixRQUFRLENBQ1IsU0FLRDtRQWxCTyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFleEMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRXhELEtBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7O0lBQ3ZDLENBQUM7Ozs7O0lBZ0JELCtCQUFXOzs7O0lBQVgsVUFBWSxJQUFtQjtRQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsc0NBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHVDQUFtQjs7OztJQUFuQixVQUFvQixPQUFnQjtRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVPLG1DQUFlOzs7OztJQUF2QixVQUF3QixlQUFzQztRQUE5RCxpQkFxQkM7UUFuQkEsSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUVuRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzthQUNsRDtZQUVELElBQUksZUFBZSxDQUFDLGNBQWMsRUFBRTtnQkFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLGVBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTzs7OztnQkFBQyxVQUFDLENBQU07b0JBQzdDLEtBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO2dCQUMxQixDQUFDLEVBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDcEQ7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUNwRDtJQUNGLENBQUM7SUFDRixnQkFBQztBQUFELENBQUMsQUEzRUQsQ0FBMkMsYUFBYSxHQTJFdkQ7Ozs7Ozs7Ozs7O0lBekVBLHFDQUF5Qzs7Ozs7SUFFekMsbUNBQXNDOzs7OztJQUV0QyxzQ0FBa0Q7Ozs7O0lBZ0JsRCw2REFBaUQ7Ozs7O0lBRWpELDhEQUFrRDs7Ozs7OztJQUVsRCwrREFBdUU7Ozs7Ozs7SUFFdkUsbURBQXNDOzs7Ozs7O0lBRXRDLGdFQUFvRDs7Ozs7OztJQUVwRCx3REFBMkQ7Ozs7OztJQUUzRCwwREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IEJhc2VEYXRhRmllbGQgfSBmcm9tICcuL2Jhc2UtZGF0YS1maWVsZCc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N1bW1hcmllcy9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1zdW1tYXJpZXMuY29uZmlnJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0YUZpZWxkPFQ+IGV4dGVuZHMgQmFzZURhdGFGaWVsZCB7XG5cblx0cHJpdmF0ZSBzdW1tYXJpZXNFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIHN1bW1hcmllc1R5cGVzOiBTdW1tYXJpZXNUeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcG9zc2libGVTdW1tYXJpZXM6IFN1bW1hcmllc1R5cGU7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdFx0XHQgIGRhdGFUeXBlOiBEYXRhVHlwZSxcblx0XHRcdFx0XHRcdCAgbWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdFx0XHQgIHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKGFjY2Vzc29yLFxuXHRcdFx0ZGF0YVR5cGUsXG5cdFx0XHRtYXRjaGVyc1xuXHRcdCk7XG5cblx0XHR0aGlzLnBvc3NpYmxlU3VtbWFyaWVzID0gdGhpcy5hc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpO1xuXG5cdFx0dGhpcy5hc3NpZ25TdW1tYXJpZXMoc3VtbWFyaWVzQ29uZmlnKTtcblx0fVxuXG5cdGFic3RyYWN0IGFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZTtcblxuXHRhYnN0cmFjdCBhc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlO1xuXG5cdGFic3RyYWN0IHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW47XG5cblx0YWJzdHJhY3Qgc29ydChvbmU6IFQsIHR3bzogVCk6IG51bWJlcjtcblxuXHRhYnN0cmFjdCBmaWx0ZXIodmFsdWU6IFQsIGZpbHRlclBocmFzZTogVCk6IGJvb2xlYW47XG5cblx0YWJzdHJhY3QgZXF1YWxzKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHZhbHVlOiBUKTogYm9vbGVhbjtcblxuXHRhYnN0cmFjdCBnZXREaXNwbGF5VmFsdWUoaXRlbTogVCk6IHN0cmluZztcblxuXHRpc1N1bW1hcmllcyh0eXBlOiBTdW1tYXJpZXNUeXBlKTogYm9vbGVhbiB7XG5cblx0XHRpZiAoIXRoaXMuaXNTdW1tYXJpZXNFbmFibGVkKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gISEodGhpcy5zdW1tYXJpZXNUeXBlcyAmIHR5cGUpO1xuXHR9XG5cblx0aXNTdW1tYXJpZXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN1bW1hcmllc0VuYWJsZWQ7XG5cdH1cblxuXHRzZXRTdW1tYXJpZXNFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnN1bW1hcmllc0VuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25TdW1tYXJpZXMoc3VtbWFyaWVzQ29uZmlnOiBDb2x1bW5TdW1tYXJpZXNDb25maWcpOiB2b2lkIHtcblxuXHRcdGlmICghIXN1bW1hcmllc0NvbmZpZyAmJiBPYmplY3Qua2V5cyhzdW1tYXJpZXNDb25maWcpLmxlbmd0aCAhPT0gMCkge1xuXG5cdFx0XHRpZiAoc3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5zdW1tYXJpZXNFbmFibGVkID0gISFzdW1tYXJpZXNDb25maWcuZW5hYmxlZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcykge1xuXG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgPSAwO1xuXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcy5mb3JFYWNoKCh0OiBhbnkpID0+IHtcblx0XHRcdFx0XHR0aGlzLnN1bW1hcmllc1R5cGVzIHw9IHQ7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyA9IHRoaXMuYXNzaWduRGVmYXVsdFN1bW1hcmllcygpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN1bW1hcmllc1R5cGVzID0gdGhpcy5hc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=