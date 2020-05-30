/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from '../field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../lib/structure/domain/structure/summaries/summaries.type';
var UnknownField = /** @class */ (function (_super) {
    tslib_1.__extends(UnknownField, _super);
    function UnknownField(id, accessor, matchers, summariesConfig) {
        return _super.call(this, id, accessor, DataType.UNKNOWN, matchers, summariesConfig) || this;
    }
    /**
     * @return {?}
     */
    UnknownField.prototype.assignDefaultSummaries = /**
     * @return {?}
     */
    function () {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    };
    /**
     * @return {?}
     */
    UnknownField.prototype.assignPossibleSummaries = /**
     * @return {?}
     */
    function () {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    };
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    UnknownField.prototype.search = /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    function (item, searchPhrase) {
        return false;
    };
    /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    UnknownField.prototype.sort = /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    function (one, two) {
        return 0;
    };
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    UnknownField.prototype.filter = /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    function (value, filterPhrase) {
        return false;
    };
    return UnknownField;
}(Field));
export { UnknownField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvZmllbGRzL3Vua25vd24tZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBS3ZHO0lBQWtDLHdDQUFVO0lBRTNDLHNCQUFZLEVBQVcsRUFDcEIsUUFBYSxFQUNiLFFBQXVCLEVBQ3ZCLGVBQXVDO2VBQ3pDLGtCQUFNLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxDQUFDLE9BQU8sRUFDaEIsUUFBUSxFQUNSLGVBQWUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsNkNBQXNCOzs7SUFBdEI7UUFDQyxPQUFPLENBQUMsQ0FBQztRQUNULCtCQUErQjtRQUMvQiwyQkFBMkI7SUFDNUIsQ0FBQzs7OztJQUVELDhDQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxhQUFhLENBQUMsS0FBSztZQUN6QixhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELDZCQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxZQUFvQjtRQUNsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELDJCQUFJOzs7OztJQUFKLFVBQUssR0FBUSxFQUFFLEdBQVE7UUFDdEIsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDOzs7Ozs7SUFFRCw2QkFBTTs7Ozs7SUFBTixVQUFPLEtBQVUsRUFBRSxZQUFpQjtRQUNuQyxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRixtQkFBQztBQUFELENBQUMsQUFwQ0QsQ0FBa0MsS0FBSyxHQW9DdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N1bW1hcmllcy9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBVbmtub3duRmllbGQgZXh0ZW5kcyBGaWVsZDxhbnk+IHtcblxuXHRjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0YWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKGlkLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5VTktOT1dOLFxuXHRcdFx0bWF0Y2hlcnMsXG5cdFx0XHRzdW1tYXJpZXNDb25maWcpO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdFN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHNvcnQob25lOiBhbnksIHR3bzogYW55KTogbnVtYmVyIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGZpbHRlcih2YWx1ZTogYW55LCBmaWx0ZXJQaHJhc2U6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG59XG4iXX0=