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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vZGF0YS10eXBlL2ZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQUV6QyxNQUFNLE9BQWdCLEtBQVMsU0FBUSxTQUFTOzs7Ozs7Ozs7SUFRL0MsWUFBc0IsRUFBVyxFQUMxQixRQUFhLEVBQ2IsUUFBa0IsRUFDbEIsUUFBdUIsRUFDdkIsZUFBdUM7UUFDN0MsS0FBSyxDQUFDLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsQ0FBQyxDQUFDO1FBZEoscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBZ0J4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFFeEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQVlELFdBQVcsQ0FBQyxJQUFtQjtRQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsT0FBZ0I7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsZUFBc0M7UUFFN0QsSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUVuRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzthQUNsRDtZQUVELElBQUksZUFBZSxDQUFDLGNBQWMsRUFBRTtnQkFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLGVBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTzs7OztnQkFBQyxDQUFDLENBQU0sRUFBRSxFQUFFO29CQUNqRCxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxFQUFDLENBQUM7YUFDSDtpQkFBTTtnQkFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQ3BEO1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDcEQ7SUFDRixDQUFDO0NBQ0Q7Ozs7OztJQXRFQSxpQ0FBeUM7Ozs7O0lBRXpDLCtCQUFzQzs7Ozs7SUFFdEMsa0NBQWtEOzs7OztJQWlCbEQseURBQWlEOzs7OztJQUVqRCwwREFBa0Q7Ozs7Ozs7SUFFbEQsMkRBQXVFOzs7Ozs7O0lBRXZFLCtDQUFzQzs7Ozs7OztJQUV0Qyw0REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N1bW1hcmllcy9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBCYXNlRmllbGQgfSBmcm9tICcuL2Jhc2UuZmllbGQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmllbGQ8VD4gZXh0ZW5kcyBCYXNlRmllbGQge1xuXG5cdHByaXZhdGUgc3VtbWFyaWVzRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBzdW1tYXJpZXNUeXBlczogU3VtbWFyaWVzVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBvc3NpYmxlU3VtbWFyaWVzOiBTdW1tYXJpZXNUeXBlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0XHRcdCAgYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0XHRcdCAgZGF0YVR5cGU6IERhdGFUeXBlLFxuXHRcdFx0XHRcdFx0ICBtYXRjaGVyczogRmllbGRNYXRjaGVycyxcblx0XHRcdFx0XHRcdCAgc3VtbWFyaWVzQ29uZmlnPzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnKSB7XG5cdFx0c3VwZXIoaWQsXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdGRhdGFUeXBlLFxuXHRcdFx0bWF0Y2hlcnMpO1xuXG5cdFx0dGhpcy5wb3NzaWJsZVN1bW1hcmllcyA9IHRoaXMuYXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTtcblxuXHRcdHRoaXMuYXNzaWduU3VtbWFyaWVzKHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRhYnN0cmFjdCBhc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGU7XG5cblx0YWJzdHJhY3QgYXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZTtcblxuXHRhYnN0cmFjdCBzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuO1xuXG5cdGFic3RyYWN0IHNvcnQob25lOiBULCB0d286IFQpOiBudW1iZXI7XG5cblx0YWJzdHJhY3QgZmlsdGVyKHZhbHVlOiBULCBmaWx0ZXJQaHJhc2U6IFQpOiBib29sZWFuO1xuXG5cdGlzU3VtbWFyaWVzKHR5cGU6IFN1bW1hcmllc1R5cGUpOiBib29sZWFuIHtcblxuXHRcdGlmICghdGhpcy5pc1N1bW1hcmllc0VuYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiAhISh0aGlzLnN1bW1hcmllc1R5cGVzICYgdHlwZSk7XG5cdH1cblxuXHRpc1N1bW1hcmllc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3VtbWFyaWVzRW5hYmxlZDtcblx0fVxuXG5cdHNldFN1bW1hcmllc0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc3VtbWFyaWVzRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnblN1bW1hcmllcyhzdW1tYXJpZXNDb25maWc6IENvbHVtblN1bW1hcmllc0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0aWYgKCEhc3VtbWFyaWVzQ29uZmlnICYmIE9iamVjdC5rZXlzKHN1bW1hcmllc0NvbmZpZykubGVuZ3RoICE9PSAwKSB7XG5cblx0XHRcdGlmIChzdW1tYXJpZXNDb25maWcuZW5hYmxlZCkge1xuXHRcdFx0XHR0aGlzLnN1bW1hcmllc0VuYWJsZWQgPSAhIXN1bW1hcmllc0NvbmZpZy5lbmFibGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzKSB7XG5cblx0XHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyA9IDA7XG5cblx0XHRcdFx0c3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzLmZvckVhY2goKHQ6IGFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgfD0gdDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN1bW1hcmllc1R5cGVzID0gdGhpcy5hc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgPSB0aGlzLmFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==