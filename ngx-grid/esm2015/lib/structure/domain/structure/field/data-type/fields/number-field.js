/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from '../field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../summaries/summaries.type';
export class NumberField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(id, accessor, matchers, summariesConfig) {
        super(id, accessor, DataType.NUMBER, matchers, summariesConfig);
    }
    /**
     * @return {?}
     */
    getField() {
        return this;
    }
    /**
     * @return {?}
     */
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT |
        // 	SummariesType.SUM |
        // 	SummariesType.MIN |
        // 	SummariesType.MAX |
        // 	SummariesType.AVERAGE |
        // 	SummariesType.MEDIAN;
    }
    /**
     * @return {?}
     */
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT |
            SummariesType.SUM |
            SummariesType.MIN |
            SummariesType.MAX |
            SummariesType.AVERAGE |
            SummariesType.MEDIAN;
    }
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    search(item, searchPhrase) {
        return false;
    }
    /**
     * @param {?} numOne
     * @param {?} numTwo
     * @return {?}
     */
    sort(numOne, numTwo) {
        /** @type {?} */
        const sureNumOne = +numOne;
        /** @type {?} */
        const sureNumTwo = +numTwo;
        return sureNumOne - sureNumTwo;
    }
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    filter(value, filterPhrase) {
        return value > filterPhrase;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2ZpZWxkcy9udW1iZXItZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLbEUsTUFBTSxPQUFPLFdBQVksU0FBUSxLQUFhOzs7Ozs7O0lBQzdDLFlBQVksRUFBVyxFQUNwQixRQUFhLEVBQ2IsUUFBdUIsRUFDdkIsZUFBdUM7UUFDekMsS0FBSyxDQUFDLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxDQUFDLE1BQU0sRUFDZixRQUFRLEVBQ1IsZUFBZSxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDckIsT0FBTyxDQUFDLENBQUM7UUFDVCwrQkFBK0I7UUFDL0IsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtRQUMzQix5QkFBeUI7SUFDMUIsQ0FBQzs7OztJQUVELHVCQUF1QjtRQUN0QixPQUFPLGFBQWEsQ0FBQyxLQUFLO1lBQ3pCLGFBQWEsQ0FBQyxRQUFRO1lBQ3RCLGFBQWEsQ0FBQyxHQUFHO1lBQ2pCLGFBQWEsQ0FBQyxHQUFHO1lBQ2pCLGFBQWEsQ0FBQyxHQUFHO1lBQ2pCLGFBQWEsQ0FBQyxPQUFPO1lBQ3JCLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQXNCLEVBQUUsWUFBb0I7UUFDbEQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCxJQUFJLENBQUMsTUFBYyxFQUFFLE1BQWM7O2NBRTVCLFVBQVUsR0FBRyxDQUFDLE1BQU07O2NBQ3pCLFVBQVUsR0FBRyxDQUFDLE1BQU07UUFFckIsT0FBTyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxLQUFhLEVBQUUsWUFBb0I7UUFDekMsT0FBTyxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQzdCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtblN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLXN1bW1hcmllcy5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uL3N1bW1hcmllcy9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJGaWVsZCBleHRlbmRzIEZpZWxkPG51bWJlcj4ge1xuXHRjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0YWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKGlkLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5OVU1CRVIsXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBOdW1iZXJGaWVsZCB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuRElTVElOQ1QgfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5TVU0gfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5NSU4gfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5NQVggfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5BVkVSQUdFIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuTUVESUFOO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVCB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLlNVTSB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLk1JTiB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLk1BWCB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLkFWRVJBR0UgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5NRURJQU47XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzb3J0KG51bU9uZTogbnVtYmVyLCBudW1Ud286IG51bWJlcik6IG51bWJlciB7XG5cblx0XHRjb25zdCBzdXJlTnVtT25lID0gK251bU9uZSxcblx0XHRcdHN1cmVOdW1Ud28gPSArbnVtVHdvO1xuXG5cdFx0cmV0dXJuIHN1cmVOdW1PbmUgLSBzdXJlTnVtVHdvO1xuXHR9XG5cblx0ZmlsdGVyKHZhbHVlOiBudW1iZXIsIGZpbHRlclBocmFzZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHZhbHVlID4gZmlsdGVyUGhyYXNlO1xuXHR9XG5cbn1cbiJdfQ==