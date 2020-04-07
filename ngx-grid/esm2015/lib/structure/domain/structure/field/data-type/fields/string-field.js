/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from '../field';
import { DataType } from '../data-type';
import { AggregationType } from '../../../aggregation/aggregation.type';
export class StringField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?} matchers
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, matchers, aggregationConfig) {
        super(id, accessor, DataType.STRING, matchers, aggregationConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultAggregations() {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT;
    }
    /**
     * @return {?}
     */
    assignPossibleAggregations() {
        return AggregationType.COUNT |
            AggregationType.DISTINCT;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2ZpZWxkcy9zdHJpbmctZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFLeEUsTUFBTSxPQUFPLFdBQVksU0FBUSxLQUFhOzs7Ozs7O0lBRTdDLFlBQVksRUFBVyxFQUNwQixRQUFhLEVBQ2IsUUFBdUIsRUFDdkIsaUJBQTJDO1FBQzdDLEtBQUssQ0FBQyxFQUFFLEVBQ1AsUUFBUSxFQUNSLFFBQVEsQ0FBQyxNQUFNLEVBQ2YsUUFBUSxFQUNSLGlCQUFpQixDQUFDLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHlCQUF5QjtRQUN4QixPQUFPLENBQUMsQ0FBQztRQUNULGlDQUFpQztRQUNqQyw2QkFBNkI7SUFDOUIsQ0FBQzs7OztJQUVELDBCQUEwQjtRQUN6QixPQUFPLGVBQWUsQ0FBQyxLQUFLO1lBQzNCLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQXNCLEVBQUUsWUFBb0I7O2NBQzVDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztRQUV2QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNOLE9BQU8sS0FBSyxDQUFDO1NBQ2I7SUFDRixDQUFDOzs7Ozs7SUFFRCxJQUFJLENBQUMsTUFBYyxFQUFFLE1BQWM7O2NBQzVCLFVBQVUsR0FBRyxFQUFFLEdBQUcsTUFBTTs7Y0FDN0IsVUFBVSxHQUFHLEVBQUUsR0FBRyxNQUFNO1FBRXpCLE9BQU8sVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBYSxFQUFFLFlBQW9CO1FBQ3pDLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLWFnZ3JlZ2F0aW9uLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi50eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cmluZ0ZpZWxkIGV4dGVuZHMgRmllbGQ8c3RyaW5nPiB7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEZpZWxkSWQsXG5cdFx0XHRcdGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZz86IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKSB7XG5cdFx0c3VwZXIoaWQsXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdERhdGFUeXBlLlNUUklORyxcblx0XHRcdG1hdGNoZXJzLFxuXHRcdFx0YWdncmVnYXRpb25Db25maWcpO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdEFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQ09VTlQgfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLkRJU1RJTkNUO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlIHtcblx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkNPVU5UIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRTZWFyY2hWYWx1ZShpdGVtKTtcblxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFBocmFzZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c29ydChzdHJPbmU6IHN0cmluZywgc3RyVHdvOiBzdHJpbmcpOiBudW1iZXIge1xuXHRcdGNvbnN0IHN1cmVTdHJPbmUgPSAnJyArIHN0ck9uZSxcblx0XHRcdHN1cmVTdHJUd28gPSAnJyArIHN0clR3bztcblxuXHRcdHJldHVybiBzdXJlU3RyT25lLmxvY2FsZUNvbXBhcmUoc3VyZVN0clR3byk7XG5cdH1cblxuXHRmaWx0ZXIodmFsdWU6IHN0cmluZywgZmlsdGVyUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclBocmFzZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuXHR9XG5cbn1cbiJdfQ==