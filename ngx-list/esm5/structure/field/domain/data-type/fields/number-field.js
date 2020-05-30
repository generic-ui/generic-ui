/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from '../field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../lib/structure/domain/structure/summaries/summaries.type';
var NumberField = /** @class */ (function (_super) {
    tslib_1.__extends(NumberField, _super);
    function NumberField(id, accessor, matchers, summariesConfig) {
        return _super.call(this, id, accessor, DataType.NUMBER, matchers, summariesConfig) || this;
    }
    /**
     * @return {?}
     */
    NumberField.prototype.getField = /**
     * @return {?}
     */
    function () {
        return this;
    };
    /**
     * @return {?}
     */
    NumberField.prototype.assignDefaultSummaries = /**
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
    NumberField.prototype.assignPossibleSummaries = /**
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
    NumberField.prototype.search = /**
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
    NumberField.prototype.sort = /**
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
    NumberField.prototype.filter = /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    function (value, filterPhrase) {
        return value > filterPhrase;
    };
    return NumberField;
}(Field));
export { NumberField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS9maWVsZHMvbnVtYmVyLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUdqQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUt2RztJQUFpQyx1Q0FBYTtJQUM3QyxxQkFBWSxFQUFXLEVBQ3BCLFFBQWEsRUFDYixRQUF1QixFQUN2QixlQUF1QztlQUN6QyxrQkFBTSxFQUFFLEVBQ1AsUUFBUSxFQUNSLFFBQVEsQ0FBQyxNQUFNLEVBQ2YsUUFBUSxFQUNSLGVBQWUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7O0lBRUQsNENBQXNCOzs7SUFBdEI7UUFDQyxPQUFPLENBQUMsQ0FBQztRQUNULCtCQUErQjtRQUMvQiw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsMkJBQTJCO1FBQzNCLHlCQUF5QjtJQUMxQixDQUFDOzs7O0lBRUQsNkNBQXVCOzs7SUFBdkI7UUFDQyxPQUFPLGFBQWEsQ0FBQyxLQUFLO1lBQ3pCLGFBQWEsQ0FBQyxRQUFRO1lBQ3RCLGFBQWEsQ0FBQyxHQUFHO1lBQ2pCLGFBQWEsQ0FBQyxHQUFHO1lBQ2pCLGFBQWEsQ0FBQyxHQUFHO1lBQ2pCLGFBQWEsQ0FBQyxPQUFPO1lBQ3JCLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRUQsNEJBQU07Ozs7O0lBQU4sVUFBTyxJQUFzQixFQUFFLFlBQW9CO1FBQ2xELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRUQsMEJBQUk7Ozs7O0lBQUosVUFBSyxNQUFjLEVBQUUsTUFBYzs7WUFFNUIsVUFBVSxHQUFHLENBQUMsTUFBTTs7WUFDekIsVUFBVSxHQUFHLENBQUMsTUFBTTtRQUVyQixPQUFPLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsNEJBQU07Ozs7O0lBQU4sVUFBTyxLQUFhLEVBQUUsWUFBb0I7UUFDekMsT0FBTyxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFFRixrQkFBQztBQUFELENBQUMsQUFyREQsQ0FBaUMsS0FBSyxHQXFEckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N1bW1hcmllcy9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJGaWVsZCBleHRlbmRzIEZpZWxkPG51bWJlcj4ge1xuXHRjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0YWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKGlkLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5OVU1CRVIsXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBOdW1iZXJGaWVsZCB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuRElTVElOQ1QgfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5TVU0gfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5NSU4gfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5NQVggfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5BVkVSQUdFIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuTUVESUFOO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVCB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLlNVTSB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLk1JTiB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLk1BWCB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLkFWRVJBR0UgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5NRURJQU47XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzb3J0KG51bU9uZTogbnVtYmVyLCBudW1Ud286IG51bWJlcik6IG51bWJlciB7XG5cblx0XHRjb25zdCBzdXJlTnVtT25lID0gK251bU9uZSxcblx0XHRcdHN1cmVOdW1Ud28gPSArbnVtVHdvO1xuXG5cdFx0cmV0dXJuIHN1cmVOdW1PbmUgLSBzdXJlTnVtVHdvO1xuXHR9XG5cblx0ZmlsdGVyKHZhbHVlOiBudW1iZXIsIGZpbHRlclBocmFzZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHZhbHVlID4gZmlsdGVyUGhyYXNlO1xuXHR9XG5cbn1cbiJdfQ==