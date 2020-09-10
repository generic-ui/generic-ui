/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../core/domain/summaries/summaries.type';
var NumberDataField = /** @class */ (function (_super) {
    tslib_1.__extends(NumberDataField, _super);
    function NumberDataField(accessor, matchers, summariesConfig) {
        return _super.call(this, accessor, DataType.NUMBER, matchers, summariesConfig) || this;
    }
    /**
     * @return {?}
     */
    NumberDataField.prototype.getField = /**
     * @return {?}
     */
    function () {
        return this;
    };
    /**
     * @return {?}
     */
    NumberDataField.prototype.assignDefaultSummaries = /**
     * @return {?}
     */
    function () {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT |
        // 	SummariesType.SUM |
        // 	SummariesType.MIN |
        // 	SummariesType.MAX |
        // 	SummariesType.AVERAGE |
        // 	SummariesType.MEDIAN;
    };
    /**
     * @return {?}
     */
    NumberDataField.prototype.assignPossibleSummaries = /**
     * @return {?}
     */
    function () {
        return SummariesType.COUNT |
            SummariesType.DISTINCT |
            SummariesType.SUM |
            SummariesType.MIN |
            SummariesType.MAX |
            SummariesType.AVERAGE |
            SummariesType.MEDIAN;
    };
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    NumberDataField.prototype.search = /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    function (item, searchPhrase) {
        return false;
    };
    /**
     * @param {?} numOne
     * @param {?} numTwo
     * @return {?}
     */
    NumberDataField.prototype.sort = /**
     * @param {?} numOne
     * @param {?} numTwo
     * @return {?}
     */
    function (numOne, numTwo) {
        /** @type {?} */
        var sureNumOne = +numOne;
        /** @type {?} */
        var sureNumTwo = +numTwo;
        return sureNumOne - sureNumTwo;
    };
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    NumberDataField.prototype.filter = /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    function (value, filterPhrase) {
        return value > filterPhrase;
    };
    /**
     * @param {?} item
     * @param {?} value
     * @return {?}
     */
    NumberDataField.prototype.equals = /**
     * @param {?} item
     * @param {?} value
     * @return {?}
     */
    function (item, value) {
        return this.getValue(item) === value;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NumberDataField.prototype.getDisplayValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return "" + item;
    };
    return NumberDataField;
}(DataField));
export { NumberDataField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWRhdGEtZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vY29yZS9maWVsZC9kYXRhL3R5cGUvbnVtYmVyLWRhdGEtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBS3ZGO0lBQXFDLDJDQUFpQjtJQUVyRCx5QkFBWSxRQUFhLEVBQ3RCLFFBQXVCLEVBQ3ZCLGVBQXVDO2VBQ3pDLGtCQUNDLFFBQVEsRUFDUixRQUFRLENBQUMsTUFBTSxFQUNmLFFBQVEsRUFDUixlQUFlLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELGdEQUFzQjs7O0lBQXRCO1FBQ0MsT0FBTyxDQUFDLENBQUM7UUFDVCwrQkFBK0I7UUFDL0IsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtRQUMzQix5QkFBeUI7SUFDMUIsQ0FBQzs7OztJQUVELGlEQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxhQUFhLENBQUMsS0FBSztZQUN6QixhQUFhLENBQUMsUUFBUTtZQUN0QixhQUFhLENBQUMsR0FBRztZQUNqQixhQUFhLENBQUMsR0FBRztZQUNqQixhQUFhLENBQUMsR0FBRztZQUNqQixhQUFhLENBQUMsT0FBTztZQUNyQixhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVELGdDQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxZQUFvQjtRQUNsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELDhCQUFJOzs7OztJQUFKLFVBQUssTUFBYyxFQUFFLE1BQWM7O1lBRTVCLFVBQVUsR0FBRyxDQUFDLE1BQU07O1lBQ3pCLFVBQVUsR0FBRyxDQUFDLE1BQU07UUFFckIsT0FBTyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVELGdDQUFNOzs7OztJQUFOLFVBQU8sS0FBYSxFQUFFLFlBQW9CO1FBQ3pDLE9BQU8sS0FBSyxHQUFHLFlBQVksQ0FBQztJQUM3QixDQUFDOzs7Ozs7SUFFRCxnQ0FBTTs7Ozs7SUFBTixVQUFPLElBQXNCLEVBQUUsS0FBYTtRQUMzQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQseUNBQWU7Ozs7SUFBZixVQUFnQixJQUFZO1FBQzNCLE9BQU8sS0FBRyxJQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVGLHNCQUFDO0FBQUQsQ0FBQyxBQTdERCxDQUFxQyxTQUFTLEdBNkQ3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFGaWVsZCB9IGZyb20gJy4uL2RhdGEtZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3VtbWFyaWVzL3N1bW1hcmllcy50eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJEYXRhRmllbGQgZXh0ZW5kcyBEYXRhRmllbGQ8bnVtYmVyPiB7XG5cblx0Y29uc3RydWN0b3IoYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5OVU1CRVIsXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBOdW1iZXJEYXRhRmllbGQge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdFN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuU1VNIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuTUlOIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuTUFYIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuQVZFUkFHRSB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLk1FRElBTjtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlU3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuRElTVElOQ1QgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5TVU0gfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5NSU4gfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5NQVggfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5BVkVSQUdFIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuTUVESUFOO1xuXHR9XG5cblx0c2VhcmNoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c29ydChudW1PbmU6IG51bWJlciwgbnVtVHdvOiBudW1iZXIpOiBudW1iZXIge1xuXG5cdFx0Y29uc3Qgc3VyZU51bU9uZSA9ICtudW1PbmUsXG5cdFx0XHRzdXJlTnVtVHdvID0gK251bVR3bztcblxuXHRcdHJldHVybiBzdXJlTnVtT25lIC0gc3VyZU51bVR3bztcblx0fVxuXG5cdGZpbHRlcih2YWx1ZTogbnVtYmVyLCBmaWx0ZXJQaHJhc2U6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB2YWx1ZSA+IGZpbHRlclBocmFzZTtcblx0fVxuXG5cdGVxdWFscyhpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCB2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoaXRlbSkgPT09IHZhbHVlO1xuXHR9XG5cblx0Z2V0RGlzcGxheVZhbHVlKGl0ZW06IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGAke2l0ZW19YDtcblx0fVxuXG59XG4iXX0=