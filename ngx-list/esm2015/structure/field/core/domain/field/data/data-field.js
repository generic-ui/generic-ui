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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQU9sRCxNQUFNLE9BQWdCLFNBQWEsU0FBUSxhQUFhOzs7Ozs7OztJQVF2RCxZQUFzQixRQUFhLEVBQzVCLFFBQWtCLEVBQ2xCLFFBQXVCLEVBQ3ZCLGVBQXVDO1FBQzdDLEtBQUssQ0FBQyxRQUFRLEVBQ2IsUUFBUSxFQUNSLFFBQVEsQ0FDUixDQUFDO1FBYksscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBZXhDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUV4RCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBZ0JELFdBQVcsQ0FBQyxJQUFtQjtRQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsT0FBZ0I7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsZUFBc0M7UUFFN0QsSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUVuRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzthQUNsRDtZQUVELElBQUksZUFBZSxDQUFDLGNBQWMsRUFBRTtnQkFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLGVBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTzs7OztnQkFBQyxDQUFDLENBQU0sRUFBRSxFQUFFO29CQUNqRCxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxFQUFDLENBQUM7YUFDSDtpQkFBTTtnQkFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQ3BEO1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDcEQ7SUFDRixDQUFDO0NBQ0Q7Ozs7OztJQXpFQSxxQ0FBeUM7Ozs7O0lBRXpDLG1DQUFzQzs7Ozs7SUFFdEMsc0NBQWtEOzs7OztJQWdCbEQsNkRBQWlEOzs7OztJQUVqRCw4REFBa0Q7Ozs7Ozs7SUFFbEQsK0RBQXVFOzs7Ozs7O0lBRXZFLG1EQUFzQzs7Ozs7OztJQUV0QyxnRUFBb0Q7Ozs7Ozs7SUFFcEQsd0RBQTJEOzs7Ozs7SUFFM0QsMERBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBCYXNlRGF0YUZpZWxkIH0gZnJvbSAnLi9iYXNlLWRhdGEtZmllbGQnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb2x1bW4vY29sdW1uLXN1bW1hcmllcy5jb25maWcnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRhRmllbGQ8VD4gZXh0ZW5kcyBCYXNlRGF0YUZpZWxkIHtcblxuXHRwcml2YXRlIHN1bW1hcmllc0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgc3VtbWFyaWVzVHlwZXM6IFN1bW1hcmllc1R5cGU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwb3NzaWJsZVN1bW1hcmllczogU3VtbWFyaWVzVHlwZTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0XHRcdCAgZGF0YVR5cGU6IERhdGFUeXBlLFxuXHRcdFx0XHRcdFx0ICBtYXRjaGVyczogRmllbGRNYXRjaGVycyxcblx0XHRcdFx0XHRcdCAgc3VtbWFyaWVzQ29uZmlnPzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnKSB7XG5cdFx0c3VwZXIoYWNjZXNzb3IsXG5cdFx0XHRkYXRhVHlwZSxcblx0XHRcdG1hdGNoZXJzXG5cdFx0KTtcblxuXHRcdHRoaXMucG9zc2libGVTdW1tYXJpZXMgPSB0aGlzLmFzc2lnblBvc3NpYmxlU3VtbWFyaWVzKCk7XG5cblx0XHR0aGlzLmFzc2lnblN1bW1hcmllcyhzdW1tYXJpZXNDb25maWcpO1xuXHR9XG5cblx0YWJzdHJhY3QgYXNzaWduRGVmYXVsdFN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlO1xuXG5cdGFic3RyYWN0IGFzc2lnblBvc3NpYmxlU3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGU7XG5cblx0YWJzdHJhY3Qgc2VhcmNoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbjtcblxuXHRhYnN0cmFjdCBzb3J0KG9uZTogVCwgdHdvOiBUKTogbnVtYmVyO1xuXG5cdGFic3RyYWN0IGZpbHRlcih2YWx1ZTogVCwgZmlsdGVyUGhyYXNlOiBUKTogYm9vbGVhbjtcblxuXHRhYnN0cmFjdCBlcXVhbHMoaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgdmFsdWU6IFQpOiBib29sZWFuO1xuXG5cdGFic3RyYWN0IGdldERpc3BsYXlWYWx1ZShpdGVtOiBUKTogc3RyaW5nO1xuXG5cdGlzU3VtbWFyaWVzKHR5cGU6IFN1bW1hcmllc1R5cGUpOiBib29sZWFuIHtcblxuXHRcdGlmICghdGhpcy5pc1N1bW1hcmllc0VuYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiAhISh0aGlzLnN1bW1hcmllc1R5cGVzICYgdHlwZSk7XG5cdH1cblxuXHRpc1N1bW1hcmllc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3VtbWFyaWVzRW5hYmxlZDtcblx0fVxuXG5cdHNldFN1bW1hcmllc0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc3VtbWFyaWVzRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnblN1bW1hcmllcyhzdW1tYXJpZXNDb25maWc6IENvbHVtblN1bW1hcmllc0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0aWYgKCEhc3VtbWFyaWVzQ29uZmlnICYmIE9iamVjdC5rZXlzKHN1bW1hcmllc0NvbmZpZykubGVuZ3RoICE9PSAwKSB7XG5cblx0XHRcdGlmIChzdW1tYXJpZXNDb25maWcuZW5hYmxlZCkge1xuXHRcdFx0XHR0aGlzLnN1bW1hcmllc0VuYWJsZWQgPSAhIXN1bW1hcmllc0NvbmZpZy5lbmFibGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzKSB7XG5cblx0XHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyA9IDA7XG5cblx0XHRcdFx0c3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzLmZvckVhY2goKHQ6IGFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgfD0gdDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN1bW1hcmllc1R5cGVzID0gdGhpcy5hc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgPSB0aGlzLmFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==