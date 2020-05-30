/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from '../field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../lib/structure/domain/structure/summaries/summaries.type';
export class BooleanField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?} matchers
     * @param {?=} summariesConfig
     */
    constructor(id, accessor, matchers, summariesConfig) {
        super(id, accessor, DataType.BOOLEAN, matchers, summariesConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT |
        // 	SummariesType.TRUTHY |
        // 	SummariesType.FALSY;
    }
    /**
     * @return {?}
     */
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT |
            SummariesType.TRUTHY |
            SummariesType.FALSY;
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
     * @param {?} booleanOne
     * @param {?} booleanTwo
     * @return {?}
     */
    sort(booleanOne, booleanTwo) {
        /** @type {?} */
        const sureBoolOne = !!booleanOne;
        /** @type {?} */
        const sureBoolTwo = !!booleanTwo;
        return (sureBoolOne === sureBoolTwo) ? 0 : sureBoolTwo ? -1 : 1;
    }
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    filter(value, filterPhrase) {
        return value === filterPhrase;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvZmllbGRzL2Jvb2xlYW4tZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFLdkcsTUFBTSxPQUFPLFlBQWEsU0FBUSxLQUFjOzs7Ozs7O0lBRS9DLFlBQVksRUFBVyxFQUNwQixRQUFhLEVBQ2IsUUFBdUIsRUFDdkIsZUFBdUM7UUFDekMsS0FBSyxDQUFDLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxDQUFDLE9BQU8sRUFDaEIsUUFBUSxFQUNSLGVBQWUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDckIsT0FBTyxDQUFDLENBQUM7UUFDVCwrQkFBK0I7UUFDL0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQix3QkFBd0I7SUFDekIsQ0FBQzs7OztJQUVELHVCQUF1QjtRQUN0QixPQUFPLGFBQWEsQ0FBQyxLQUFLO1lBQ3pCLGFBQWEsQ0FBQyxRQUFRO1lBQ3RCLGFBQWEsQ0FBQyxNQUFNO1lBQ3BCLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQXNCLEVBQUUsWUFBb0I7UUFDbEQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCxJQUFJLENBQUMsVUFBbUIsRUFBRSxVQUFtQjs7Y0FFdEMsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVOztjQUMvQixXQUFXLEdBQUcsQ0FBQyxDQUFDLFVBQVU7UUFFM0IsT0FBTyxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWMsRUFBRSxZQUFxQjtRQUMzQyxPQUFPLEtBQUssS0FBSyxZQUFZLENBQUM7SUFDL0IsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLXN1bW1hcmllcy5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgQm9vbGVhbkZpZWxkIGV4dGVuZHMgRmllbGQ8Ym9vbGVhbj4ge1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBGaWVsZElkLFxuXHRcdFx0XHRhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRtYXRjaGVyczogRmllbGRNYXRjaGVycyxcblx0XHRcdFx0c3VtbWFyaWVzQ29uZmlnPzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnKSB7XG5cdFx0c3VwZXIoaWQsXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdERhdGFUeXBlLkJPT0xFQU4sXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRhc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuRElTVElOQ1QgfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5UUlVUSFkgfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5GQUxTWTtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlU3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuRElTVElOQ1QgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5UUlVUSFkgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5GQUxTWTtcblx0fVxuXG5cdHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHNvcnQoYm9vbGVhbk9uZTogYm9vbGVhbiwgYm9vbGVhblR3bzogYm9vbGVhbik6IG51bWJlciB7XG5cblx0XHRjb25zdCBzdXJlQm9vbE9uZSA9ICEhYm9vbGVhbk9uZSxcblx0XHRcdHN1cmVCb29sVHdvID0gISFib29sZWFuVHdvO1xuXG5cdFx0cmV0dXJuIChzdXJlQm9vbE9uZSA9PT0gc3VyZUJvb2xUd28pID8gMCA6IHN1cmVCb29sVHdvID8gLTEgOiAxO1xuXHR9XG5cblx0ZmlsdGVyKHZhbHVlOiBib29sZWFuLCBmaWx0ZXJQaHJhc2U6IGJvb2xlYW4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdmFsdWUgPT09IGZpbHRlclBocmFzZTtcblx0fVxuXG59XG4iXX0=