/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseField } from './base.field';
/**
 * @abstract
 * @template T
 */
export class Field extends BaseField {
    /**
     * @protected
     * @param {?} id
     * @param {?} accessor
     * @param {?} dataType
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(id, accessor, dataType, matchers, summariesConfig) {
        super(id, accessor, dataType, matchers);
        this.summariesEnabled = true;
        this.possibleSummaries = this.assignPossibleSummaries();
        this.assignSummaries(summariesConfig);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isSummaries(type) {
        if (!this.isSummariesEnabled()) {
            return false;
        }
        return !!(this.summariesTypes & type);
    }
    /**
     * @return {?}
     */
    isSummariesEnabled() {
        return this.summariesEnabled;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setSummariesEnabled(enabled) {
        this.summariesEnabled = enabled;
    }
    /**
     * @private
     * @param {?} summariesConfig
     * @return {?}
     */
    assignSummaries(summariesConfig) {
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
                (t) => {
                    this.summariesTypes |= t;
                }));
            }
            else {
                this.summariesTypes = this.assignDefaultSummaries();
            }
        }
        else {
            this.summariesTypes = this.assignDefaultSummaries();
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Field.prototype.summariesEnabled;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.summariesTypes;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.possibleSummaries;
    /**
     * @abstract
     * @return {?}
     */
    Field.prototype.assignDefaultSummaries = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Field.prototype.assignPossibleSummaries = function () { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBRXpDLE1BQU0sT0FBZ0IsS0FBUyxTQUFRLFNBQVM7Ozs7Ozs7OztJQVEvQyxZQUFzQixFQUFXLEVBQzFCLFFBQWEsRUFDYixRQUFrQixFQUNsQixRQUF1QixFQUN2QixlQUF1QztRQUM3QyxLQUFLLENBQUMsRUFBRSxFQUNQLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxDQUFDLENBQUM7UUFkSixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFnQnhDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUV4RCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBWUQsV0FBVyxDQUFDLElBQW1CO1FBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtZQUMvQixPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxPQUFnQjtRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxlQUFzQztRQUU3RCxJQUFJLENBQUMsQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBRW5FLElBQUksZUFBZSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO2FBQ2xEO1lBRUQsSUFBSSxlQUFlLENBQUMsY0FBYyxFQUFFO2dCQUVuQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztnQkFFeEIsZUFBZSxDQUFDLGNBQWMsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7b0JBQ2pELElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO2dCQUMxQixDQUFDLEVBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDcEQ7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUNwRDtJQUNGLENBQUM7Q0FDRDs7Ozs7O0lBdEVBLGlDQUF5Qzs7Ozs7SUFFekMsK0JBQXNDOzs7OztJQUV0QyxrQ0FBa0Q7Ozs7O0lBaUJsRCx5REFBaUQ7Ozs7O0lBRWpELDBEQUFrRDs7Ozs7OztJQUVsRCwyREFBdUU7Ozs7Ozs7SUFFdkUsK0NBQXNDOzs7Ozs7O0lBRXRDLDREQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2ZpZWxkLmlkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi9zdW1tYXJpZXMvc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBCYXNlRmllbGQgfSBmcm9tICcuL2Jhc2UuZmllbGQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmllbGQ8VD4gZXh0ZW5kcyBCYXNlRmllbGQge1xuXG5cdHByaXZhdGUgc3VtbWFyaWVzRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBzdW1tYXJpZXNUeXBlczogU3VtbWFyaWVzVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBvc3NpYmxlU3VtbWFyaWVzOiBTdW1tYXJpZXNUeXBlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0XHRcdCAgYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0XHRcdCAgZGF0YVR5cGU6IERhdGFUeXBlLFxuXHRcdFx0XHRcdFx0ICBtYXRjaGVyczogRmllbGRNYXRjaGVycyxcblx0XHRcdFx0XHRcdCAgc3VtbWFyaWVzQ29uZmlnPzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnKSB7XG5cdFx0c3VwZXIoaWQsXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdGRhdGFUeXBlLFxuXHRcdFx0bWF0Y2hlcnMpO1xuXG5cdFx0dGhpcy5wb3NzaWJsZVN1bW1hcmllcyA9IHRoaXMuYXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTtcblxuXHRcdHRoaXMuYXNzaWduU3VtbWFyaWVzKHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRhYnN0cmFjdCBhc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGU7XG5cblx0YWJzdHJhY3QgYXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZTtcblxuXHRhYnN0cmFjdCBzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuO1xuXG5cdGFic3RyYWN0IHNvcnQob25lOiBULCB0d286IFQpOiBudW1iZXI7XG5cblx0YWJzdHJhY3QgZmlsdGVyKHZhbHVlOiBULCBmaWx0ZXJQaHJhc2U6IFQpOiBib29sZWFuO1xuXG5cdGlzU3VtbWFyaWVzKHR5cGU6IFN1bW1hcmllc1R5cGUpOiBib29sZWFuIHtcblxuXHRcdGlmICghdGhpcy5pc1N1bW1hcmllc0VuYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiAhISh0aGlzLnN1bW1hcmllc1R5cGVzICYgdHlwZSk7XG5cdH1cblxuXHRpc1N1bW1hcmllc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3VtbWFyaWVzRW5hYmxlZDtcblx0fVxuXG5cdHNldFN1bW1hcmllc0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc3VtbWFyaWVzRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnblN1bW1hcmllcyhzdW1tYXJpZXNDb25maWc6IENvbHVtblN1bW1hcmllc0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0aWYgKCEhc3VtbWFyaWVzQ29uZmlnICYmIE9iamVjdC5rZXlzKHN1bW1hcmllc0NvbmZpZykubGVuZ3RoICE9PSAwKSB7XG5cblx0XHRcdGlmIChzdW1tYXJpZXNDb25maWcuZW5hYmxlZCkge1xuXHRcdFx0XHR0aGlzLnN1bW1hcmllc0VuYWJsZWQgPSAhIXN1bW1hcmllc0NvbmZpZy5lbmFibGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzKSB7XG5cblx0XHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyA9IDA7XG5cblx0XHRcdFx0c3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzLmZvckVhY2goKHQ6IGFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgfD0gdDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN1bW1hcmllc1R5cGVzID0gdGhpcy5hc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgPSB0aGlzLmFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==