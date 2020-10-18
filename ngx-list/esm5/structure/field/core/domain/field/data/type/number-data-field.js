/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../summaries/core/domain/summaries.type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWRhdGEtZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9kYXRhL3R5cGUvbnVtYmVyLWRhdGEtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBS3ZGO0lBQXFDLDJDQUFpQjtJQUVyRCx5QkFBWSxRQUFhLEVBQ3RCLFFBQXVCLEVBQ3ZCLGVBQXVDO2VBQ3pDLGtCQUNDLFFBQVEsRUFDUixRQUFRLENBQUMsTUFBTSxFQUNmLFFBQVEsRUFDUixlQUFlLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELGdEQUFzQjs7O0lBQXRCO1FBQ0MsT0FBTyxDQUFDLENBQUM7UUFDVCwrQkFBK0I7UUFDL0IsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtRQUMzQix5QkFBeUI7SUFDMUIsQ0FBQzs7OztJQUVELGlEQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxhQUFhLENBQUMsS0FBSztZQUN6QixhQUFhLENBQUMsUUFBUTtZQUN0QixhQUFhLENBQUMsR0FBRztZQUNqQixhQUFhLENBQUMsR0FBRztZQUNqQixhQUFhLENBQUMsR0FBRztZQUNqQixhQUFhLENBQUMsT0FBTztZQUNyQixhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVELGdDQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxZQUFvQjtRQUNsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELDhCQUFJOzs7OztJQUFKLFVBQUssTUFBYyxFQUFFLE1BQWM7O1lBRTVCLFVBQVUsR0FBRyxDQUFDLE1BQU07O1lBQ3pCLFVBQVUsR0FBRyxDQUFDLE1BQU07UUFFckIsT0FBTyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVELGdDQUFNOzs7OztJQUFOLFVBQU8sS0FBYSxFQUFFLFlBQW9CO1FBQ3pDLE9BQU8sS0FBSyxHQUFHLFlBQVksQ0FBQztJQUM3QixDQUFDOzs7Ozs7SUFFRCxnQ0FBTTs7Ozs7SUFBTixVQUFPLElBQXNCLEVBQUUsS0FBYTtRQUMzQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQseUNBQWU7Ozs7SUFBZixVQUFnQixJQUFZO1FBQzNCLE9BQU8sS0FBRyxJQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVGLHNCQUFDO0FBQUQsQ0FBQyxBQTdERCxDQUFxQyxTQUFTLEdBNkQ3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFGaWVsZCB9IGZyb20gJy4uL2RhdGEtZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi1zdW1tYXJpZXMuY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZGF0YS10eXBlJztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgTnVtYmVyRGF0YUZpZWxkIGV4dGVuZHMgRGF0YUZpZWxkPG51bWJlcj4ge1xuXG5cdGNvbnN0cnVjdG9yKGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRzdW1tYXJpZXNDb25maWc/OiBDb2x1bW5TdW1tYXJpZXNDb25maWcpIHtcblx0XHRzdXBlcihcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0RGF0YVR5cGUuTlVNQkVSLFxuXHRcdFx0bWF0Y2hlcnMsXG5cdFx0XHRzdW1tYXJpZXNDb25maWcpO1xuXHR9XG5cblx0Z2V0RmllbGQoKTogTnVtYmVyRGF0YUZpZWxkIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIDA7XG5cdFx0Ly8gcmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVCB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLlNVTSB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLk1JTiB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLk1BWCB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLkFWRVJBR0UgfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5NRURJQU47XG5cdH1cblxuXHRhc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuU1VNIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuTUlOIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuTUFYIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuQVZFUkFHRSB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLk1FRElBTjtcblx0fVxuXG5cdHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHNvcnQobnVtT25lOiBudW1iZXIsIG51bVR3bzogbnVtYmVyKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IHN1cmVOdW1PbmUgPSArbnVtT25lLFxuXHRcdFx0c3VyZU51bVR3byA9ICtudW1Ud287XG5cblx0XHRyZXR1cm4gc3VyZU51bU9uZSAtIHN1cmVOdW1Ud287XG5cdH1cblxuXHRmaWx0ZXIodmFsdWU6IG51bWJlciwgZmlsdGVyUGhyYXNlOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdmFsdWUgPiBmaWx0ZXJQaHJhc2U7XG5cdH1cblxuXHRlcXVhbHMoaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgdmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGl0ZW0pID09PSB2YWx1ZTtcblx0fVxuXG5cdGdldERpc3BsYXlWYWx1ZShpdGVtOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgJHtpdGVtfWA7XG5cdH1cblxufVxuIl19