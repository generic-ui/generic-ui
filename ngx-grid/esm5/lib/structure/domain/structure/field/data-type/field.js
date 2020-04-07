/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseField } from './base.field';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
Field = /** @class */ (function (_super) {
    tslib_1.__extends(Field, _super);
    function Field(id, accessor, dataType, matchers, aggregationConfig) {
        var _this = _super.call(this, id, accessor, dataType, matchers) || this;
        _this.aggregationEnabled = true;
        _this.possibleAggregations = _this.assignPossibleAggregations();
        _this.assignAggregations(aggregationConfig);
        return _this;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    Field.prototype.isAggregation = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (!this.isAggregationEnabled()) {
            return false;
        }
        return !!(this.aggregations & type);
    };
    /**
     * @return {?}
     */
    Field.prototype.isAggregationEnabled = /**
     * @return {?}
     */
    function () {
        return this.aggregationEnabled;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    Field.prototype.setAggregationEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.aggregationEnabled = enabled;
    };
    /**
     * @private
     * @param {?} aggregationConfig
     * @return {?}
     */
    Field.prototype.assignAggregations = /**
     * @private
     * @param {?} aggregationConfig
     * @return {?}
     */
    function (aggregationConfig) {
        var _this = this;
        if (!!aggregationConfig && Object.keys(aggregationConfig).length !== 0) {
            if (aggregationConfig.enabled) {
                this.aggregationEnabled = !!aggregationConfig.enabled;
            }
            if (aggregationConfig.aggregationTypes) {
                this.aggregations = 0;
                aggregationConfig.aggregationTypes.forEach((/**
                 * @param {?} t
                 * @return {?}
                 */
                function (t) {
                    _this.aggregations |= t;
                }));
            }
            else {
                this.aggregations = this.assignDefaultAggregations();
            }
        }
        else {
            this.aggregations = this.assignDefaultAggregations();
        }
    };
    return Field;
}(BaseField));
/**
 * @abstract
 * @template T
 */
export { Field };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Field.prototype.aggregationEnabled;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.aggregations;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.possibleAggregations;
    /**
     * @abstract
     * @return {?}
     */
    Field.prototype.assignDefaultAggregations = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Field.prototype.assignPossibleAggregations = function () { };
    /**
     * @abstract
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    Field.prototype.search = function (item, searchPhrase) { };
    /**
     * @abstract
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    Field.prototype.sort = function (one, two) { };
    /**
     * @abstract
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    Field.prototype.filter = function (value, filterPhrase) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQUV6Qzs7Ozs7SUFBdUMsaUNBQVM7SUFRL0MsZUFBc0IsRUFBVyxFQUMxQixRQUFhLEVBQ2IsUUFBa0IsRUFDbEIsUUFBdUIsRUFDdkIsaUJBQTJDO1FBSmxELFlBS0Msa0JBQU0sRUFBRSxFQUNQLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxDQUFDLFNBS1Y7UUFuQk8sd0JBQWtCLEdBQVksSUFBSSxDQUFDO1FBZ0IxQyxLQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFFOUQsS0FBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7O0lBQzVDLENBQUM7Ozs7O0lBWUQsNkJBQWE7Ozs7SUFBYixVQUFjLElBQXFCO1FBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtZQUNqQyxPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxvQ0FBb0I7OztJQUFwQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQscUNBQXFCOzs7O0lBQXJCLFVBQXNCLE9BQWdCO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRU8sa0NBQWtCOzs7OztJQUExQixVQUEyQixpQkFBMEM7UUFBckUsaUJBcUJDO1FBbkJBLElBQUksQ0FBQyxDQUFDLGlCQUFpQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBRXZFLElBQUksaUJBQWlCLENBQUMsT0FBTyxFQUFFO2dCQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQzthQUN0RDtZQUVELElBQUksaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUU7Z0JBRXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUV0QixpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsQ0FBQztvQkFDNUMsS0FBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQzthQUNyRDtTQUNEO2FBQU07WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1NBQ3JEO0lBQ0YsQ0FBQztJQUNGLFlBQUM7QUFBRCxDQUFDLEFBeEVELENBQXVDLFNBQVMsR0F3RS9DOzs7Ozs7Ozs7OztJQXRFQSxtQ0FBMkM7Ozs7O0lBRTNDLDZCQUFzQzs7Ozs7SUFFdEMscUNBQXVEOzs7OztJQWlCdkQsNERBQXNEOzs7OztJQUV0RCw2REFBdUQ7Ozs7Ozs7SUFFdkQsMkRBQXVFOzs7Ozs7O0lBRXZFLCtDQUFzQzs7Ozs7OztJQUV0Qyw0REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi50eXBlJztcbmltcG9ydCB7IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tYWdncmVnYXRpb24uY29uZmlnJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IEJhc2VGaWVsZCB9IGZyb20gJy4vYmFzZS5maWVsZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZDxUPiBleHRlbmRzIEJhc2VGaWVsZCB7XG5cblx0cHJpdmF0ZSBhZ2dyZWdhdGlvbkVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgYWdncmVnYXRpb25zOiBBZ2dyZWdhdGlvblR5cGU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwb3NzaWJsZUFnZ3JlZ2F0aW9uczogQWdncmVnYXRpb25UeXBlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0XHRcdCAgYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0XHRcdCAgZGF0YVR5cGU6IERhdGFUeXBlLFxuXHRcdFx0XHRcdFx0ICBtYXRjaGVyczogRmllbGRNYXRjaGVycyxcblx0XHRcdFx0XHRcdCAgYWdncmVnYXRpb25Db25maWc/OiBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZykge1xuXHRcdHN1cGVyKGlkLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHRkYXRhVHlwZSxcblx0XHRcdG1hdGNoZXJzKTtcblxuXHRcdHRoaXMucG9zc2libGVBZ2dyZWdhdGlvbnMgPSB0aGlzLmFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk7XG5cblx0XHR0aGlzLmFzc2lnbkFnZ3JlZ2F0aW9ucyhhZ2dyZWdhdGlvbkNvbmZpZyk7XG5cdH1cblxuXHRhYnN0cmFjdCBhc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZTtcblxuXHRhYnN0cmFjdCBhc3NpZ25Qb3NzaWJsZUFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGU7XG5cblx0YWJzdHJhY3Qgc2VhcmNoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbjtcblxuXHRhYnN0cmFjdCBzb3J0KG9uZTogVCwgdHdvOiBUKTogbnVtYmVyO1xuXG5cdGFic3RyYWN0IGZpbHRlcih2YWx1ZTogVCwgZmlsdGVyUGhyYXNlOiBUKTogYm9vbGVhbjtcblxuXHRpc0FnZ3JlZ2F0aW9uKHR5cGU6IEFnZ3JlZ2F0aW9uVHlwZSk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKCF0aGlzLmlzQWdncmVnYXRpb25FbmFibGVkKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gISEodGhpcy5hZ2dyZWdhdGlvbnMgJiB0eXBlKTtcblx0fVxuXG5cdGlzQWdncmVnYXRpb25FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFnZ3JlZ2F0aW9uRW5hYmxlZDtcblx0fVxuXG5cdHNldEFnZ3JlZ2F0aW9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5hZ2dyZWdhdGlvbkVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25BZ2dyZWdhdGlvbnMoYWdncmVnYXRpb25Db25maWc6IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAoISFhZ2dyZWdhdGlvbkNvbmZpZyAmJiBPYmplY3Qua2V5cyhhZ2dyZWdhdGlvbkNvbmZpZykubGVuZ3RoICE9PSAwKSB7XG5cblx0XHRcdGlmIChhZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkKSB7XG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25FbmFibGVkID0gISFhZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYWdncmVnYXRpb25Db25maWcuYWdncmVnYXRpb25UeXBlcykge1xuXG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gMDtcblxuXHRcdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzLmZvckVhY2goKHQpID0+IHtcblx0XHRcdFx0XHR0aGlzLmFnZ3JlZ2F0aW9ucyB8PSB0O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gdGhpcy5hc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gdGhpcy5hc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=