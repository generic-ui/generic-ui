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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBRXpDOzs7OztJQUF1QyxpQ0FBUztJQVEvQyxlQUFzQixFQUFXLEVBQzFCLFFBQWEsRUFDYixRQUFrQixFQUNsQixRQUF1QixFQUN2QixpQkFBMkM7UUFKbEQsWUFLQyxrQkFBTSxFQUFFLEVBQ1AsUUFBUSxFQUNSLFFBQVEsRUFDUixRQUFRLENBQUMsU0FLVjtRQW5CTyx3QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFnQjFDLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUU5RCxLQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7SUFDNUMsQ0FBQzs7Ozs7SUFZRCw2QkFBYTs7OztJQUFiLFVBQWMsSUFBcUI7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1lBQ2pDLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELG9DQUFvQjs7O0lBQXBCO1FBQ0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxxQ0FBcUI7Ozs7SUFBckIsVUFBc0IsT0FBZ0I7UUFDckMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFTyxrQ0FBa0I7Ozs7O0lBQTFCLFVBQTJCLGlCQUEwQztRQUFyRSxpQkFxQkM7UUFuQkEsSUFBSSxDQUFDLENBQUMsaUJBQWlCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFFdkUsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO2FBQ3REO1lBRUQsSUFBSSxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFFdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBRXRCLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQyxDQUFDO29CQUM1QyxLQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxFQUFDLENBQUM7YUFDSDtpQkFBTTtnQkFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2FBQ3JEO1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7U0FDckQ7SUFDRixDQUFDO0lBQ0YsWUFBQztBQUFELENBQUMsQUF4RUQsQ0FBdUMsU0FBUyxHQXdFL0M7Ozs7Ozs7Ozs7O0lBdEVBLG1DQUEyQzs7Ozs7SUFFM0MsNkJBQXNDOzs7OztJQUV0QyxxQ0FBdUQ7Ozs7O0lBaUJ2RCw0REFBc0Q7Ozs7O0lBRXRELDZEQUF1RDs7Ozs7OztJQUV2RCwyREFBdUU7Ozs7Ozs7SUFFdkUsK0NBQXNDOzs7Ozs7O0lBRXRDLDREQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2ZpZWxkLmlkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRpb24vYWdncmVnYXRpb24udHlwZSc7XG5pbXBvcnQgeyBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4tYWdncmVnYXRpb24uY29uZmlnJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IEJhc2VGaWVsZCB9IGZyb20gJy4vYmFzZS5maWVsZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZDxUPiBleHRlbmRzIEJhc2VGaWVsZCB7XG5cblx0cHJpdmF0ZSBhZ2dyZWdhdGlvbkVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgYWdncmVnYXRpb25zOiBBZ2dyZWdhdGlvblR5cGU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwb3NzaWJsZUFnZ3JlZ2F0aW9uczogQWdncmVnYXRpb25UeXBlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0XHRcdCAgYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0XHRcdCAgZGF0YVR5cGU6IERhdGFUeXBlLFxuXHRcdFx0XHRcdFx0ICBtYXRjaGVyczogRmllbGRNYXRjaGVycyxcblx0XHRcdFx0XHRcdCAgYWdncmVnYXRpb25Db25maWc/OiBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZykge1xuXHRcdHN1cGVyKGlkLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHRkYXRhVHlwZSxcblx0XHRcdG1hdGNoZXJzKTtcblxuXHRcdHRoaXMucG9zc2libGVBZ2dyZWdhdGlvbnMgPSB0aGlzLmFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk7XG5cblx0XHR0aGlzLmFzc2lnbkFnZ3JlZ2F0aW9ucyhhZ2dyZWdhdGlvbkNvbmZpZyk7XG5cdH1cblxuXHRhYnN0cmFjdCBhc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZTtcblxuXHRhYnN0cmFjdCBhc3NpZ25Qb3NzaWJsZUFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGU7XG5cblx0YWJzdHJhY3Qgc2VhcmNoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbjtcblxuXHRhYnN0cmFjdCBzb3J0KG9uZTogVCwgdHdvOiBUKTogbnVtYmVyO1xuXG5cdGFic3RyYWN0IGZpbHRlcih2YWx1ZTogVCwgZmlsdGVyUGhyYXNlOiBUKTogYm9vbGVhbjtcblxuXHRpc0FnZ3JlZ2F0aW9uKHR5cGU6IEFnZ3JlZ2F0aW9uVHlwZSk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKCF0aGlzLmlzQWdncmVnYXRpb25FbmFibGVkKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gISEodGhpcy5hZ2dyZWdhdGlvbnMgJiB0eXBlKTtcblx0fVxuXG5cdGlzQWdncmVnYXRpb25FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFnZ3JlZ2F0aW9uRW5hYmxlZDtcblx0fVxuXG5cdHNldEFnZ3JlZ2F0aW9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5hZ2dyZWdhdGlvbkVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25BZ2dyZWdhdGlvbnMoYWdncmVnYXRpb25Db25maWc6IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAoISFhZ2dyZWdhdGlvbkNvbmZpZyAmJiBPYmplY3Qua2V5cyhhZ2dyZWdhdGlvbkNvbmZpZykubGVuZ3RoICE9PSAwKSB7XG5cblx0XHRcdGlmIChhZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkKSB7XG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25FbmFibGVkID0gISFhZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYWdncmVnYXRpb25Db25maWcuYWdncmVnYXRpb25UeXBlcykge1xuXG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gMDtcblxuXHRcdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzLmZvckVhY2goKHQpID0+IHtcblx0XHRcdFx0XHR0aGlzLmFnZ3JlZ2F0aW9ucyB8PSB0O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gdGhpcy5hc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gdGhpcy5hc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=