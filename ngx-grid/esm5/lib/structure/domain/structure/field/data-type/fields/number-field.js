/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from '../field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../summaries/summaries.type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2ZpZWxkcy9udW1iZXItZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBS2xFO0lBQWlDLHVDQUFhO0lBQzdDLHFCQUFZLEVBQVcsRUFDcEIsUUFBYSxFQUNiLFFBQXVCLEVBQ3ZCLGVBQXVDO2VBQ3pDLGtCQUFNLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxDQUFDLE1BQU0sRUFDZixRQUFRLEVBQ1IsZUFBZSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCw0Q0FBc0I7OztJQUF0QjtRQUNDLE9BQU8sQ0FBQyxDQUFDO1FBQ1QsK0JBQStCO1FBQy9CLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2QiwyQkFBMkI7UUFDM0IseUJBQXlCO0lBQzFCLENBQUM7Ozs7SUFFRCw2Q0FBdUI7OztJQUF2QjtRQUNDLE9BQU8sYUFBYSxDQUFDLEtBQUs7WUFDekIsYUFBYSxDQUFDLFFBQVE7WUFDdEIsYUFBYSxDQUFDLEdBQUc7WUFDakIsYUFBYSxDQUFDLEdBQUc7WUFDakIsYUFBYSxDQUFDLEdBQUc7WUFDakIsYUFBYSxDQUFDLE9BQU87WUFDckIsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFRCw0QkFBTTs7Ozs7SUFBTixVQUFPLElBQXNCLEVBQUUsWUFBb0I7UUFDbEQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCwwQkFBSTs7Ozs7SUFBSixVQUFLLE1BQWMsRUFBRSxNQUFjOztZQUU1QixVQUFVLEdBQUcsQ0FBQyxNQUFNOztZQUN6QixVQUFVLEdBQUcsQ0FBQyxNQUFNO1FBRXJCLE9BQU8sVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFRCw0QkFBTTs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxZQUFvQjtRQUN6QyxPQUFPLEtBQUssR0FBRyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVGLGtCQUFDO0FBQUQsQ0FBQyxBQXJERCxDQUFpQyxLQUFLLEdBcURyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtblN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLXN1bW1hcmllcy5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uL3N1bW1hcmllcy9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJGaWVsZCBleHRlbmRzIEZpZWxkPG51bWJlcj4ge1xuXHRjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0YWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKGlkLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5OVU1CRVIsXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBOdW1iZXJGaWVsZCB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuRElTVElOQ1QgfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5TVU0gfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5NSU4gfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5NQVggfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5BVkVSQUdFIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuTUVESUFOO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVCB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLlNVTSB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLk1JTiB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLk1BWCB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLkFWRVJBR0UgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5NRURJQU47XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzb3J0KG51bU9uZTogbnVtYmVyLCBudW1Ud286IG51bWJlcik6IG51bWJlciB7XG5cblx0XHRjb25zdCBzdXJlTnVtT25lID0gK251bU9uZSxcblx0XHRcdHN1cmVOdW1Ud28gPSArbnVtVHdvO1xuXG5cdFx0cmV0dXJuIHN1cmVOdW1PbmUgLSBzdXJlTnVtVHdvO1xuXHR9XG5cblx0ZmlsdGVyKHZhbHVlOiBudW1iZXIsIGZpbHRlclBocmFzZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHZhbHVlID4gZmlsdGVyUGhyYXNlO1xuXHR9XG5cbn1cbiJdfQ==