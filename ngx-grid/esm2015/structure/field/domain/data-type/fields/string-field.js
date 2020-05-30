/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from '../field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../lib/structure/domain/structure/summaries/summaries.type';
export class StringField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(id, accessor, matchers, summariesConfig) {
        super(id, accessor, DataType.STRING, matchers, summariesConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    }
    /**
     * @return {?}
     */
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    }
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    search(item, searchPhrase) {
        /** @type {?} */
        const value = this.getSearchValue(item);
        if (typeof value === 'string') {
            return value.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} strOne
     * @param {?} strTwo
     * @return {?}
     */
    sort(strOne, strTwo) {
        /** @type {?} */
        const sureStrOne = '' + strOne;
        /** @type {?} */
        const sureStrTwo = '' + strTwo;
        return sureStrOne.localeCompare(sureStrTwo);
    }
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    filter(value, filterPhrase) {
        return value.toLowerCase().indexOf(filterPhrase.toLowerCase()) > -1;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS9maWVsZHMvc3RyaW5nLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBS3ZHLE1BQU0sT0FBTyxXQUFZLFNBQVEsS0FBYTs7Ozs7OztJQUU3QyxZQUFZLEVBQVcsRUFDcEIsUUFBYSxFQUNiLFFBQXVCLEVBQ3ZCLGVBQXVDO1FBQ3pDLEtBQUssQ0FBQyxFQUFFLEVBQ1AsUUFBUSxFQUNSLFFBQVEsQ0FBQyxNQUFNLEVBQ2YsUUFBUSxFQUNSLGVBQWUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDckIsT0FBTyxDQUFDLENBQUM7UUFDVCwrQkFBK0I7UUFDL0IsMkJBQTJCO0lBQzVCLENBQUM7Ozs7SUFFRCx1QkFBdUI7UUFDdEIsT0FBTyxhQUFhLENBQUMsS0FBSztZQUN6QixhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxJQUFzQixFQUFFLFlBQW9COztjQUM1QyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFFdkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO2FBQU07WUFDTixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLE1BQWMsRUFBRSxNQUFjOztjQUM1QixVQUFVLEdBQUcsRUFBRSxHQUFHLE1BQU07O2NBQzdCLFVBQVUsR0FBRyxFQUFFLEdBQUcsTUFBTTtRQUV6QixPQUFPLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWEsRUFBRSxZQUFvQjtRQUN6QyxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLXN1bW1hcmllcy5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgU3RyaW5nRmllbGQgZXh0ZW5kcyBGaWVsZDxzdHJpbmc+IHtcblxuXHRjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0YWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKGlkLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5TVFJJTkcsXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRhc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuRElTVElOQ1Q7XG5cdH1cblxuXHRhc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUO1xuXHR9XG5cblx0c2VhcmNoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFNlYXJjaFZhbHVlKGl0ZW0pO1xuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoUGhyYXNlLnRvTG93ZXJDYXNlKCkpID4gLTE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRzb3J0KHN0ck9uZTogc3RyaW5nLCBzdHJUd286IHN0cmluZyk6IG51bWJlciB7XG5cdFx0Y29uc3Qgc3VyZVN0ck9uZSA9ICcnICsgc3RyT25lLFxuXHRcdFx0c3VyZVN0clR3byA9ICcnICsgc3RyVHdvO1xuXG5cdFx0cmV0dXJuIHN1cmVTdHJPbmUubG9jYWxlQ29tcGFyZShzdXJlU3RyVHdvKTtcblx0fVxuXG5cdGZpbHRlcih2YWx1ZTogc3RyaW5nLCBmaWx0ZXJQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyUGhyYXNlLnRvTG93ZXJDYXNlKCkpID4gLTE7XG5cdH1cblxufVxuIl19