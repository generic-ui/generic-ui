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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2RhdGEvZGF0YS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQU9sRCxNQUFNLE9BQWdCLFNBQWEsU0FBUSxhQUFhOzs7Ozs7OztJQVF2RCxZQUFzQixRQUFhLEVBQzVCLFFBQWtCLEVBQ2xCLFFBQXVCLEVBQ3ZCLGVBQXVDO1FBQzdDLEtBQUssQ0FBQyxRQUFRLEVBQ2IsUUFBUSxFQUNSLFFBQVEsQ0FDUixDQUFDO1FBYksscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBZXhDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUV4RCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBZ0JELFdBQVcsQ0FBQyxJQUFtQjtRQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsT0FBZ0I7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsZUFBc0M7UUFFN0QsSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUVuRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzthQUNsRDtZQUVELElBQUksZUFBZSxDQUFDLGNBQWMsRUFBRTtnQkFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLGVBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTzs7OztnQkFBQyxDQUFDLENBQU0sRUFBRSxFQUFFO29CQUNqRCxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxFQUFDLENBQUM7YUFDSDtpQkFBTTtnQkFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQ3BEO1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDcEQ7SUFDRixDQUFDO0NBQ0Q7Ozs7OztJQXpFQSxxQ0FBeUM7Ozs7O0lBRXpDLG1DQUFzQzs7Ozs7SUFFdEMsc0NBQWtEOzs7OztJQWdCbEQsNkRBQWlEOzs7OztJQUVqRCw4REFBa0Q7Ozs7Ozs7SUFFbEQsK0RBQXVFOzs7Ozs7O0lBRXZFLG1EQUFzQzs7Ozs7OztJQUV0QyxnRUFBb0Q7Ozs7Ozs7SUFFcEQsd0RBQTJEOzs7Ozs7SUFFM0QsMERBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBCYXNlRGF0YUZpZWxkIH0gZnJvbSAnLi9iYXNlLWRhdGEtZmllbGQnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3N1bW1hcmllcy50eXBlJztcbmltcG9ydCB7IENvbHVtblN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1zdW1tYXJpZXMuY29uZmlnJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0YUZpZWxkPFQ+IGV4dGVuZHMgQmFzZURhdGFGaWVsZCB7XG5cblx0cHJpdmF0ZSBzdW1tYXJpZXNFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIHN1bW1hcmllc1R5cGVzOiBTdW1tYXJpZXNUeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcG9zc2libGVTdW1tYXJpZXM6IFN1bW1hcmllc1R5cGU7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdFx0XHQgIGRhdGFUeXBlOiBEYXRhVHlwZSxcblx0XHRcdFx0XHRcdCAgbWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdFx0XHQgIHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKGFjY2Vzc29yLFxuXHRcdFx0ZGF0YVR5cGUsXG5cdFx0XHRtYXRjaGVyc1xuXHRcdCk7XG5cblx0XHR0aGlzLnBvc3NpYmxlU3VtbWFyaWVzID0gdGhpcy5hc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpO1xuXG5cdFx0dGhpcy5hc3NpZ25TdW1tYXJpZXMoc3VtbWFyaWVzQ29uZmlnKTtcblx0fVxuXG5cdGFic3RyYWN0IGFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZTtcblxuXHRhYnN0cmFjdCBhc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlO1xuXG5cdGFic3RyYWN0IHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW47XG5cblx0YWJzdHJhY3Qgc29ydChvbmU6IFQsIHR3bzogVCk6IG51bWJlcjtcblxuXHRhYnN0cmFjdCBmaWx0ZXIodmFsdWU6IFQsIGZpbHRlclBocmFzZTogVCk6IGJvb2xlYW47XG5cblx0YWJzdHJhY3QgZXF1YWxzKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHZhbHVlOiBUKTogYm9vbGVhbjtcblxuXHRhYnN0cmFjdCBnZXREaXNwbGF5VmFsdWUoaXRlbTogVCk6IHN0cmluZztcblxuXHRpc1N1bW1hcmllcyh0eXBlOiBTdW1tYXJpZXNUeXBlKTogYm9vbGVhbiB7XG5cblx0XHRpZiAoIXRoaXMuaXNTdW1tYXJpZXNFbmFibGVkKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gISEodGhpcy5zdW1tYXJpZXNUeXBlcyAmIHR5cGUpO1xuXHR9XG5cblx0aXNTdW1tYXJpZXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN1bW1hcmllc0VuYWJsZWQ7XG5cdH1cblxuXHRzZXRTdW1tYXJpZXNFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnN1bW1hcmllc0VuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25TdW1tYXJpZXMoc3VtbWFyaWVzQ29uZmlnOiBDb2x1bW5TdW1tYXJpZXNDb25maWcpOiB2b2lkIHtcblxuXHRcdGlmICghIXN1bW1hcmllc0NvbmZpZyAmJiBPYmplY3Qua2V5cyhzdW1tYXJpZXNDb25maWcpLmxlbmd0aCAhPT0gMCkge1xuXG5cdFx0XHRpZiAoc3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5zdW1tYXJpZXNFbmFibGVkID0gISFzdW1tYXJpZXNDb25maWcuZW5hYmxlZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcykge1xuXG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgPSAwO1xuXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcy5mb3JFYWNoKCh0OiBhbnkpID0+IHtcblx0XHRcdFx0XHR0aGlzLnN1bW1hcmllc1R5cGVzIHw9IHQ7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyA9IHRoaXMuYXNzaWduRGVmYXVsdFN1bW1hcmllcygpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN1bW1hcmllc1R5cGVzID0gdGhpcy5hc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=