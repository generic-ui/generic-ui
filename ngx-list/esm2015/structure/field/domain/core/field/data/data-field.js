/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseDataField } from './base-data-field';
/**
 * @abstract
 * @template T
 */
export class DataField extends BaseDataField {
    /**
     * @protected
     * @param {?} accessor
     * @param {?} dataType
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(accessor, dataType, matchers, summariesConfig) {
        super(accessor, dataType, matchers);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2RhdGEvZGF0YS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQU9sRCxNQUFNLE9BQWdCLFNBQWEsU0FBUSxhQUFhOzs7Ozs7OztJQVF2RCxZQUFzQixRQUFhLEVBQzVCLFFBQWtCLEVBQ2xCLFFBQXVCLEVBQ3ZCLGVBQXVDO1FBQzdDLEtBQUssQ0FBQyxRQUFRLEVBQ2IsUUFBUSxFQUNSLFFBQVEsQ0FDUixDQUFDO1FBYksscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBZXhDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUV4RCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBZ0JELFdBQVcsQ0FBQyxJQUFtQjtRQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsT0FBZ0I7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsZUFBc0M7UUFFN0QsSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUVuRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzthQUNsRDtZQUVELElBQUksZUFBZSxDQUFDLGNBQWMsRUFBRTtnQkFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLGVBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTzs7OztnQkFBQyxDQUFDLENBQU0sRUFBRSxFQUFFO29CQUNqRCxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxFQUFDLENBQUM7YUFDSDtpQkFBTTtnQkFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQ3BEO1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDcEQ7SUFDRixDQUFDO0NBQ0Q7Ozs7OztJQXpFQSxxQ0FBeUM7Ozs7O0lBRXpDLG1DQUFzQzs7Ozs7SUFFdEMsc0NBQWtEOzs7OztJQWdCbEQsNkRBQWlEOzs7OztJQUVqRCw4REFBa0Q7Ozs7Ozs7SUFFbEQsK0RBQXVFOzs7Ozs7O0lBRXZFLG1EQUFzQzs7Ozs7OztJQUV0QyxnRUFBb0Q7Ozs7Ozs7SUFFcEQsd0RBQTJEOzs7Ozs7SUFFM0QsMERBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBCYXNlRGF0YUZpZWxkIH0gZnJvbSAnLi9iYXNlLWRhdGEtZmllbGQnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdW1tYXJpZXMvc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERhdGFGaWVsZDxUPiBleHRlbmRzIEJhc2VEYXRhRmllbGQge1xuXG5cdHByaXZhdGUgc3VtbWFyaWVzRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBzdW1tYXJpZXNUeXBlczogU3VtbWFyaWVzVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBvc3NpYmxlU3VtbWFyaWVzOiBTdW1tYXJpZXNUeXBlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRcdFx0ICBkYXRhVHlwZTogRGF0YVR5cGUsXG5cdFx0XHRcdFx0XHQgIG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRcdFx0ICBzdW1tYXJpZXNDb25maWc/OiBDb2x1bW5TdW1tYXJpZXNDb25maWcpIHtcblx0XHRzdXBlcihhY2Nlc3Nvcixcblx0XHRcdGRhdGFUeXBlLFxuXHRcdFx0bWF0Y2hlcnNcblx0XHQpO1xuXG5cdFx0dGhpcy5wb3NzaWJsZVN1bW1hcmllcyA9IHRoaXMuYXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTtcblxuXHRcdHRoaXMuYXNzaWduU3VtbWFyaWVzKHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRhYnN0cmFjdCBhc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGU7XG5cblx0YWJzdHJhY3QgYXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZTtcblxuXHRhYnN0cmFjdCBzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuO1xuXG5cdGFic3RyYWN0IHNvcnQob25lOiBULCB0d286IFQpOiBudW1iZXI7XG5cblx0YWJzdHJhY3QgZmlsdGVyKHZhbHVlOiBULCBmaWx0ZXJQaHJhc2U6IFQpOiBib29sZWFuO1xuXG5cdGFic3RyYWN0IGVxdWFscyhpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCB2YWx1ZTogVCk6IGJvb2xlYW47XG5cblx0YWJzdHJhY3QgZ2V0RGlzcGxheVZhbHVlKGl0ZW06IFQpOiBzdHJpbmc7XG5cblx0aXNTdW1tYXJpZXModHlwZTogU3VtbWFyaWVzVHlwZSk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKCF0aGlzLmlzU3VtbWFyaWVzRW5hYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICEhKHRoaXMuc3VtbWFyaWVzVHlwZXMgJiB0eXBlKTtcblx0fVxuXG5cdGlzU3VtbWFyaWVzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdW1tYXJpZXNFbmFibGVkO1xuXHR9XG5cblx0c2V0U3VtbWFyaWVzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zdW1tYXJpZXNFbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduU3VtbWFyaWVzKHN1bW1hcmllc0NvbmZpZzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAoISFzdW1tYXJpZXNDb25maWcgJiYgT2JqZWN0LmtleXMoc3VtbWFyaWVzQ29uZmlnKS5sZW5ndGggIT09IDApIHtcblxuXHRcdFx0aWYgKHN1bW1hcmllc0NvbmZpZy5lbmFibGVkKSB7XG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzRW5hYmxlZCA9ICEhc3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMpIHtcblxuXHRcdFx0XHR0aGlzLnN1bW1hcmllc1R5cGVzID0gMDtcblxuXHRcdFx0XHRzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMuZm9yRWFjaCgodDogYW55KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyB8PSB0O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgPSB0aGlzLmFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyA9IHRoaXMuYXNzaWduRGVmYXVsdFN1bW1hcmllcygpO1xuXHRcdH1cblx0fVxufVxuIl19