/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../core/domain/summaries/summaries.type';
export class NumberDataField extends DataField {
    /**
     * @param {?} accessor
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(accessor, matchers, summariesConfig) {
        super(accessor, DataType.NUMBER, matchers, summariesConfig);
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
        return `${item}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWRhdGEtZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vY29yZS9maWVsZC9kYXRhL3R5cGUvbnVtYmVyLWRhdGEtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFLdkYsTUFBTSxPQUFPLGVBQWdCLFNBQVEsU0FBaUI7Ozs7OztJQUVyRCxZQUFZLFFBQWEsRUFDdEIsUUFBdUIsRUFDdkIsZUFBdUM7UUFDekMsS0FBSyxDQUNKLFFBQVEsRUFDUixRQUFRLENBQUMsTUFBTSxFQUNmLFFBQVEsRUFDUixlQUFlLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNyQixPQUFPLENBQUMsQ0FBQztRQUNULCtCQUErQjtRQUMvQiw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsMkJBQTJCO1FBQzNCLHlCQUF5QjtJQUMxQixDQUFDOzs7O0lBRUQsdUJBQXVCO1FBQ3RCLE9BQU8sYUFBYSxDQUFDLEtBQUs7WUFDekIsYUFBYSxDQUFDLFFBQVE7WUFDdEIsYUFBYSxDQUFDLEdBQUc7WUFDakIsYUFBYSxDQUFDLEdBQUc7WUFDakIsYUFBYSxDQUFDLEdBQUc7WUFDakIsYUFBYSxDQUFDLE9BQU87WUFDckIsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBc0IsRUFBRSxZQUFvQjtRQUNsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxNQUFjLEVBQUUsTUFBYzs7Y0FFNUIsVUFBVSxHQUFHLENBQUMsTUFBTTs7Y0FDekIsVUFBVSxHQUFHLENBQUMsTUFBTTtRQUVyQixPQUFPLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWEsRUFBRSxZQUFvQjtRQUN6QyxPQUFPLEtBQUssR0FBRyxZQUFZLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQXNCLEVBQUUsS0FBYTtRQUMzQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQVk7UUFDM0IsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFGaWVsZCB9IGZyb20gJy4uL2RhdGEtZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3VtbWFyaWVzL3N1bW1hcmllcy50eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJEYXRhRmllbGQgZXh0ZW5kcyBEYXRhRmllbGQ8bnVtYmVyPiB7XG5cblx0Y29uc3RydWN0b3IoYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5OVU1CRVIsXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBOdW1iZXJEYXRhRmllbGQge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdFN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuU1VNIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuTUlOIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuTUFYIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuQVZFUkFHRSB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLk1FRElBTjtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlU3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuRElTVElOQ1QgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5TVU0gfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5NSU4gfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5NQVggfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5BVkVSQUdFIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuTUVESUFOO1xuXHR9XG5cblx0c2VhcmNoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c29ydChudW1PbmU6IG51bWJlciwgbnVtVHdvOiBudW1iZXIpOiBudW1iZXIge1xuXG5cdFx0Y29uc3Qgc3VyZU51bU9uZSA9ICtudW1PbmUsXG5cdFx0XHRzdXJlTnVtVHdvID0gK251bVR3bztcblxuXHRcdHJldHVybiBzdXJlTnVtT25lIC0gc3VyZU51bVR3bztcblx0fVxuXG5cdGZpbHRlcih2YWx1ZTogbnVtYmVyLCBmaWx0ZXJQaHJhc2U6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB2YWx1ZSA+IGZpbHRlclBocmFzZTtcblx0fVxuXG5cdGVxdWFscyhpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCB2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoaXRlbSkgPT09IHZhbHVlO1xuXHR9XG5cblx0Z2V0RGlzcGxheVZhbHVlKGl0ZW06IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGAke2l0ZW19YDtcblx0fVxuXG59XG4iXX0=