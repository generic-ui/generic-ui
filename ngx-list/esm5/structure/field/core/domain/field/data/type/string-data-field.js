/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../summaries/core/domain/summaries.type';
var StringDataField = /** @class */ (function (_super) {
    tslib_1.__extends(StringDataField, _super);
    function StringDataField(accessor, matchers, summariesConfig) {
        return _super.call(this, accessor, DataType.STRING, matchers, summariesConfig) || this;
    }
    /**
     * @return {?}
     */
    StringDataField.prototype.assignDefaultSummaries = /**
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
    StringDataField.prototype.assignPossibleSummaries = /**
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
    StringDataField.prototype.search = /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    function (item, searchPhrase) {
        /** @type {?} */
        var value = this.getSearchValue(item);
        if (typeof value === 'string') {
            return value.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} strOne
     * @param {?} strTwo
     * @return {?}
     */
    StringDataField.prototype.sort = /**
     * @param {?} strOne
     * @param {?} strTwo
     * @return {?}
     */
    function (strOne, strTwo) {
        /** @type {?} */
        var sureStrOne = '' + strOne;
        /** @type {?} */
        var sureStrTwo = '' + strTwo;
        return sureStrOne.localeCompare(sureStrTwo);
    };
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    StringDataField.prototype.filter = /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    function (value, filterPhrase) {
        return value.toLowerCase().indexOf(filterPhrase.toLowerCase()) > -1;
    };
    /**
     * @param {?} item
     * @param {?} value
     * @return {?}
     */
    StringDataField.prototype.equals = /**
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
    StringDataField.prototype.getDisplayValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item;
    };
    return StringDataField;
}(DataField));
export { StringDataField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWRhdGEtZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9kYXRhL3R5cGUvc3RyaW5nLWRhdGEtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBS3ZGO0lBQXFDLDJDQUFpQjtJQUVyRCx5QkFBWSxRQUFhLEVBQ3RCLFFBQXVCLEVBQ3ZCLGVBQXVDO2VBQ3pDLGtCQUNDLFFBQVEsRUFDUixRQUFRLENBQUMsTUFBTSxFQUNmLFFBQVEsRUFDUixlQUFlLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGdEQUFzQjs7O0lBQXRCO1FBQ0MsT0FBTyxDQUFDLENBQUM7UUFDVCwrQkFBK0I7UUFDL0IsMkJBQTJCO0lBQzVCLENBQUM7Ozs7SUFFRCxpREFBdUI7OztJQUF2QjtRQUNDLE9BQU8sYUFBYSxDQUFDLEtBQUs7WUFDekIsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCxnQ0FBTTs7Ozs7SUFBTixVQUFPLElBQXNCLEVBQUUsWUFBb0I7O1lBQzVDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztRQUV2QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNOLE9BQU8sS0FBSyxDQUFDO1NBQ2I7SUFDRixDQUFDOzs7Ozs7SUFFRCw4QkFBSTs7Ozs7SUFBSixVQUFLLE1BQWMsRUFBRSxNQUFjOztZQUM1QixVQUFVLEdBQUcsRUFBRSxHQUFHLE1BQU07O1lBQzdCLFVBQVUsR0FBRyxFQUFFLEdBQUcsTUFBTTtRQUV6QixPQUFPLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRUQsZ0NBQU07Ozs7O0lBQU4sVUFBTyxLQUFhLEVBQUUsWUFBb0I7UUFDekMsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7OztJQUVELGdDQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxLQUFhO1FBQzNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCx5Q0FBZTs7OztJQUFmLFVBQWdCLElBQVk7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUYsc0JBQUM7QUFBRCxDQUFDLEFBcERELENBQXFDLFNBQVMsR0FvRDdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YUZpZWxkIH0gZnJvbSAnLi4vZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi1zdW1tYXJpZXMuY29uZmlnJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cmluZ0RhdGFGaWVsZCBleHRlbmRzIERhdGFGaWVsZDxzdHJpbmc+IHtcblxuXHRjb25zdHJ1Y3RvcihhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRtYXRjaGVyczogRmllbGRNYXRjaGVycyxcblx0XHRcdFx0c3VtbWFyaWVzQ29uZmlnPzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdERhdGFUeXBlLlNUUklORyxcblx0XHRcdG1hdGNoZXJzLFxuXHRcdFx0c3VtbWFyaWVzQ29uZmlnKTtcblx0fVxuXG5cdGFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIDA7XG5cdFx0Ly8gcmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlU3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuRElTVElOQ1Q7XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0U2VhcmNoVmFsdWUoaXRlbSk7XG5cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hQaHJhc2UudG9Mb3dlckNhc2UoKSkgPiAtMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHNvcnQoc3RyT25lOiBzdHJpbmcsIHN0clR3bzogc3RyaW5nKTogbnVtYmVyIHtcblx0XHRjb25zdCBzdXJlU3RyT25lID0gJycgKyBzdHJPbmUsXG5cdFx0XHRzdXJlU3RyVHdvID0gJycgKyBzdHJUd287XG5cblx0XHRyZXR1cm4gc3VyZVN0ck9uZS5sb2NhbGVDb21wYXJlKHN1cmVTdHJUd28pO1xuXHR9XG5cblx0ZmlsdGVyKHZhbHVlOiBzdHJpbmcsIGZpbHRlclBocmFzZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJQaHJhc2UudG9Mb3dlckNhc2UoKSkgPiAtMTtcblx0fVxuXG5cdGVxdWFscyhpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoaXRlbSkgPT09IHZhbHVlO1xuXHR9XG5cblx0Z2V0RGlzcGxheVZhbHVlKGl0ZW06IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGl0ZW07XG5cdH1cblxufVxuIl19