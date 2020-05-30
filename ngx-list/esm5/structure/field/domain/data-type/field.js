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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vZGF0YS10eXBlL2ZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFFekM7Ozs7O0lBQXVDLGlDQUFTO0lBUS9DLGVBQXNCLEVBQVcsRUFDMUIsUUFBYSxFQUNiLFFBQWtCLEVBQ2xCLFFBQXVCLEVBQ3ZCLGVBQXVDO1FBSjlDLFlBS0Msa0JBQU0sRUFBRSxFQUNQLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxDQUFDLFNBS1Y7UUFuQk8sc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBZ0J4QyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFFeEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7SUFDdkMsQ0FBQzs7Ozs7SUFZRCwyQkFBVzs7OztJQUFYLFVBQVksSUFBbUI7UUFFOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQy9CLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELGtDQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxtQ0FBbUI7Ozs7SUFBbkIsVUFBb0IsT0FBZ0I7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFTywrQkFBZTs7Ozs7SUFBdkIsVUFBd0IsZUFBc0M7UUFBOUQsaUJBcUJDO1FBbkJBLElBQUksQ0FBQyxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFFbkUsSUFBSSxlQUFlLENBQUMsT0FBTyxFQUFFO2dCQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7YUFDbEQ7WUFFRCxJQUFJLGVBQWUsQ0FBQyxjQUFjLEVBQUU7Z0JBRW5DLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUV4QixlQUFlLENBQUMsY0FBYyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQyxDQUFNO29CQUM3QyxLQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxFQUFDLENBQUM7YUFDSDtpQkFBTTtnQkFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQ3BEO1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDcEQ7SUFDRixDQUFDO0lBQ0YsWUFBQztBQUFELENBQUMsQUF4RUQsQ0FBdUMsU0FBUyxHQXdFL0M7Ozs7Ozs7Ozs7O0lBdEVBLGlDQUF5Qzs7Ozs7SUFFekMsK0JBQXNDOzs7OztJQUV0QyxrQ0FBa0Q7Ozs7O0lBaUJsRCx5REFBaUQ7Ozs7O0lBRWpELDBEQUFrRDs7Ozs7OztJQUVsRCwyREFBdUU7Ozs7Ozs7SUFFdkUsK0NBQXNDOzs7Ozs7O0lBRXRDLDREQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2ZpZWxkLmlkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3N1bW1hcmllcy50eXBlJztcbmltcG9ydCB7IENvbHVtblN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1zdW1tYXJpZXMuY29uZmlnJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IEJhc2VGaWVsZCB9IGZyb20gJy4vYmFzZS5maWVsZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZDxUPiBleHRlbmRzIEJhc2VGaWVsZCB7XG5cblx0cHJpdmF0ZSBzdW1tYXJpZXNFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIHN1bW1hcmllc1R5cGVzOiBTdW1tYXJpZXNUeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcG9zc2libGVTdW1tYXJpZXM6IFN1bW1hcmllc1R5cGU7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGlkOiBGaWVsZElkLFxuXHRcdFx0XHRcdFx0ICBhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRcdFx0ICBkYXRhVHlwZTogRGF0YVR5cGUsXG5cdFx0XHRcdFx0XHQgIG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRcdFx0ICBzdW1tYXJpZXNDb25maWc/OiBDb2x1bW5TdW1tYXJpZXNDb25maWcpIHtcblx0XHRzdXBlcihpZCxcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0ZGF0YVR5cGUsXG5cdFx0XHRtYXRjaGVycyk7XG5cblx0XHR0aGlzLnBvc3NpYmxlU3VtbWFyaWVzID0gdGhpcy5hc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpO1xuXG5cdFx0dGhpcy5hc3NpZ25TdW1tYXJpZXMoc3VtbWFyaWVzQ29uZmlnKTtcblx0fVxuXG5cdGFic3RyYWN0IGFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZTtcblxuXHRhYnN0cmFjdCBhc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlO1xuXG5cdGFic3RyYWN0IHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW47XG5cblx0YWJzdHJhY3Qgc29ydChvbmU6IFQsIHR3bzogVCk6IG51bWJlcjtcblxuXHRhYnN0cmFjdCBmaWx0ZXIodmFsdWU6IFQsIGZpbHRlclBocmFzZTogVCk6IGJvb2xlYW47XG5cblx0aXNTdW1tYXJpZXModHlwZTogU3VtbWFyaWVzVHlwZSk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKCF0aGlzLmlzU3VtbWFyaWVzRW5hYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICEhKHRoaXMuc3VtbWFyaWVzVHlwZXMgJiB0eXBlKTtcblx0fVxuXG5cdGlzU3VtbWFyaWVzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdW1tYXJpZXNFbmFibGVkO1xuXHR9XG5cblx0c2V0U3VtbWFyaWVzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zdW1tYXJpZXNFbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduU3VtbWFyaWVzKHN1bW1hcmllc0NvbmZpZzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAoISFzdW1tYXJpZXNDb25maWcgJiYgT2JqZWN0LmtleXMoc3VtbWFyaWVzQ29uZmlnKS5sZW5ndGggIT09IDApIHtcblxuXHRcdFx0aWYgKHN1bW1hcmllc0NvbmZpZy5lbmFibGVkKSB7XG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzRW5hYmxlZCA9ICEhc3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMpIHtcblxuXHRcdFx0XHR0aGlzLnN1bW1hcmllc1R5cGVzID0gMDtcblxuXHRcdFx0XHRzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMuZm9yRWFjaCgodDogYW55KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyB8PSB0O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzVHlwZXMgPSB0aGlzLmFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdW1tYXJpZXNUeXBlcyA9IHRoaXMuYXNzaWduRGVmYXVsdFN1bW1hcmllcygpO1xuXHRcdH1cblx0fVxufVxuIl19