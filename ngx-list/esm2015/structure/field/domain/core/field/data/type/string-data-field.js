/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../core/domain/summaries/summaries.type';
export class StringDataField extends DataField {
    /**
     * @param {?} accessor
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(accessor, matchers, summariesConfig) {
        super(accessor, DataType.STRING, matchers, summariesConfig);
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
    /**
     * @param {?} item
     * @param {?} value
     * @return {?}
     */
    equals(item, value) {
        return this.getValue(item) === value;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getDisplayValue(item) {
        return item;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWRhdGEtZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vY29yZS9maWVsZC9kYXRhL3R5cGUvc3RyaW5nLWRhdGEtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUd4QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFLdkYsTUFBTSxPQUFPLGVBQWdCLFNBQVEsU0FBaUI7Ozs7OztJQUVyRCxZQUFZLFFBQWEsRUFDdEIsUUFBdUIsRUFDdkIsZUFBdUM7UUFDekMsS0FBSyxDQUNKLFFBQVEsRUFDUixRQUFRLENBQUMsTUFBTSxFQUNmLFFBQVEsRUFDUixlQUFlLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO1FBQ1QsK0JBQStCO1FBQy9CLDJCQUEyQjtJQUM1QixDQUFDOzs7O0lBRUQsdUJBQXVCO1FBQ3RCLE9BQU8sYUFBYSxDQUFDLEtBQUs7WUFDekIsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBc0IsRUFBRSxZQUFvQjs7Y0FDNUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1FBRXZDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzlCLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwRTthQUFNO1lBQ04sT0FBTyxLQUFLLENBQUM7U0FDYjtJQUNGLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxNQUFjLEVBQUUsTUFBYzs7Y0FDNUIsVUFBVSxHQUFHLEVBQUUsR0FBRyxNQUFNOztjQUM3QixVQUFVLEdBQUcsRUFBRSxHQUFHLE1BQU07UUFFekIsT0FBTyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxLQUFhLEVBQUUsWUFBb0I7UUFDekMsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxJQUFzQixFQUFFLEtBQWE7UUFDM0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxJQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YUZpZWxkIH0gZnJvbSAnLi4vZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdW1tYXJpZXMvc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgU3RyaW5nRGF0YUZpZWxkIGV4dGVuZHMgRGF0YUZpZWxkPHN0cmluZz4ge1xuXG5cdGNvbnN0cnVjdG9yKGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRzdW1tYXJpZXNDb25maWc/OiBDb2x1bW5TdW1tYXJpZXNDb25maWcpIHtcblx0XHRzdXBlcihcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0RGF0YVR5cGUuU1RSSU5HLFxuXHRcdFx0bWF0Y2hlcnMsXG5cdFx0XHRzdW1tYXJpZXNDb25maWcpO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdFN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRTZWFyY2hWYWx1ZShpdGVtKTtcblxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFBocmFzZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c29ydChzdHJPbmU6IHN0cmluZywgc3RyVHdvOiBzdHJpbmcpOiBudW1iZXIge1xuXHRcdGNvbnN0IHN1cmVTdHJPbmUgPSAnJyArIHN0ck9uZSxcblx0XHRcdHN1cmVTdHJUd28gPSAnJyArIHN0clR3bztcblxuXHRcdHJldHVybiBzdXJlU3RyT25lLmxvY2FsZUNvbXBhcmUoc3VyZVN0clR3byk7XG5cdH1cblxuXHRmaWx0ZXIodmFsdWU6IHN0cmluZywgZmlsdGVyUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclBocmFzZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuXHR9XG5cblx0ZXF1YWxzKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZShpdGVtKSA9PT0gdmFsdWU7XG5cdH1cblxuXHRnZXREaXNwbGF5VmFsdWUoaXRlbTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gaXRlbTtcblx0fVxuXG59XG4iXX0=