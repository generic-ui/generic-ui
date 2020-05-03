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
    function Field(id, accessor, dataType, matchers, summariesConfig) {
        var _this = _super.call(this, id, accessor, dataType, matchers) || this;
        _this.summariesEnabled = true;
        _this.possibleSummaries = _this.assignPossibleSummaries();
        _this.assignSummaries(summariesConfig);
        return _this;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    Field.prototype.isSummaries = /**
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
    Field.prototype.isSummariesEnabled = /**
     * @return {?}
     */
    function () {
        return this.summariesEnabled;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    Field.prototype.setSummariesEnabled = /**
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
    Field.prototype.assignSummaries = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQUV6Qzs7Ozs7SUFBdUMsaUNBQVM7SUFRL0MsZUFBc0IsRUFBVyxFQUMxQixRQUFhLEVBQ2IsUUFBa0IsRUFDbEIsUUFBdUIsRUFDdkIsZUFBdUM7UUFKOUMsWUFLQyxrQkFBTSxFQUFFLEVBQ1AsUUFBUSxFQUNSLFFBQVEsRUFDUixRQUFRLENBQUMsU0FLVjtRQW5CTyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFnQnhDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUV4RCxLQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDOztJQUN2QyxDQUFDOzs7OztJQVlELDJCQUFXOzs7O0lBQVgsVUFBWSxJQUFtQjtRQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsa0NBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELG1DQUFtQjs7OztJQUFuQixVQUFvQixPQUFnQjtRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVPLCtCQUFlOzs7OztJQUF2QixVQUF3QixlQUFzQztRQUE5RCxpQkFxQkM7UUFuQkEsSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUVuRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzthQUNsRDtZQUVELElBQUksZUFBZSxDQUFDLGNBQWMsRUFBRTtnQkFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLGVBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTzs7OztnQkFBQyxVQUFDLENBQU07b0JBQzdDLEtBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO2dCQUMxQixDQUFDLEVBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDcEQ7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUNwRDtJQUNGLENBQUM7SUFDRixZQUFDO0FBQUQsQ0FBQyxBQXhFRCxDQUF1QyxTQUFTLEdBd0UvQzs7Ozs7Ozs7Ozs7SUF0RUEsaUNBQXlDOzs7OztJQUV6QywrQkFBc0M7Ozs7O0lBRXRDLGtDQUFrRDs7Ozs7SUFpQmxELHlEQUFpRDs7Ozs7SUFFakQsMERBQWtEOzs7Ozs7O0lBRWxELDJEQUF1RTs7Ozs7OztJQUV2RSwrQ0FBc0M7Ozs7Ozs7SUFFdEMsNERBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZmllbGQuaWQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uL3N1bW1hcmllcy9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1zdW1tYXJpZXMuY29uZmlnJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IEJhc2VGaWVsZCB9IGZyb20gJy4vYmFzZS5maWVsZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZDxUPiBleHRlbmRzIEJhc2VGaWVsZCB7XG5cblx0cHJpdmF0ZSBzdW1tYXJpZXNFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIHN1bW1hcmllc1R5cGVzOiBTdW1tYXJpZXNUeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcG9zc2libGVTdW1tYXJpZXM6IFN1bW1hcmllc1R5cGU7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGlkOiBGaWVsZElkLFxuXHRcdFx0XHRcdFx0ICBhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRcdFx0ICBkYXRhVHlwZTogRGF0YVR5cGUsXG5cdFx0XHRcdFx0XHQgIG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRcdFx0ICBzdW1tYXJpZXNDb25maWc/OiBDb2x1bW5TdW1tYXJpZXNDb25maWcpIHtcblx0XHRzdXBlcihpZCxcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0ZGF0YVR5cGUsXG5cdFx0XHRtYXRjaGVycyk7XG5cblx0XHR0aGlzLnBvc3NpYmxlU3VtbWFyaWVzID0gdGhpcy5hc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpO1xuXG5cdFx0dGhpcy5hc3NpZ25TdW1tYXJpZXMoc3VtbWFyaWVzQ29uZmlnKTtcblx0fVxuXG5cdGFic3RyYWN0IGFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZTtcblxuXHRhYnN0cmFjdCBhc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlO1xuXG5cdGFic3RyYWN0IHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW47XG5cblx0YWJzdHJhY3Qgc29ydChvbmU6IFQsIHR3bzogVCk6IG51bWJlcjtcblxuXHRhYnN0cmFjdCBmaWx0ZXIodmFsdWU6IFQsIGZpbHRlclBocmFzZTogVCk6IGJvb2xlYW47XG5cblx0aXNTdW1tYXJpZXModHlwZTogU3VtbWFyaWVzVHlwZSk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKCF0aGlzLmlzU3VtbWFyaWVzRW5hYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICEhKHRoaXMuc3VtbWFyaWVzVHlwZXMgJiB0eXBlKTtcblx0fVxuXG5cdGlzU3VtbWFyaWVzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdW1tYXJpZXNFbmFibGVkO1xuXHR9XG5cblx0c2V0U3VtbWFyaWVzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zdW1tYXJpZXNFbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduU3VtbWFyaWVzKHN1bW1hcmllc0NvbmZpZzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAoISFzdW1tYXJpZXNDb25maWcgJiYgT2JqZWN0LmtleXMoc3VtbWFyaWVzQ29uZmlnKS5sZW5ndGggIT09IDApIHtcblxuXHRcdFx0aWYgKHN1bW1hcmllc0NvbmZpZy5lbmFibGVkKSB7XG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzRW5hYmxlZCA9ICEhc3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMpIHtcblxuXHRcdFx0XHR0aGlzLnN1bW1hcmllc1R5cGVzID0gMDtcblxuXHRcdFx0XHRzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMuZm9yRWFjaCgodDogYW55KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyB8PSB0O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgPSB0aGlzLmFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyA9IHRoaXMuYXNzaWduRGVmYXVsdFN1bW1hcmllcygpO1xuXHRcdH1cblx0fVxufVxuIl19