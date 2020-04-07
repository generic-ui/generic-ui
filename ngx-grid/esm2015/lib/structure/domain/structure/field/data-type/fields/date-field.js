/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from '../field';
import { DataType } from '../data-type';
import { AggregationType } from '../../../aggregation/aggregation.type';
export class DateField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?} matchers
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, matchers, aggregationConfig) {
        super(id, accessor, DataType.DATE, matchers, aggregationConfig);
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
        return false;
    }
    /**
     * @param {?} dateOne
     * @param {?} dateTwo
     * @return {?}
     */
    sort(dateOne, dateTwo) {
        return (/** @type {?} */ (dateOne)) - ((/** @type {?} */ (dateTwo)));
    }
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    filter(value, filterPhrase) {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZHMvZGF0ZS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUdqQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUt4RSxNQUFNLE9BQU8sU0FBVSxTQUFRLEtBQVc7Ozs7Ozs7SUFFekMsWUFBWSxFQUFXLEVBQ3BCLFFBQWEsRUFDYixRQUF1QixFQUN2QixpQkFBMkM7UUFDN0MsS0FBSyxDQUFDLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxDQUFDLElBQUksRUFDYixRQUFRLEVBQ1IsaUJBQWlCLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQseUJBQXlCO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDO1FBQ1QsaUNBQWlDO1FBQ2pDLDZCQUE2QjtJQUM5QixDQUFDOzs7O0lBRUQsMEJBQTBCO1FBQ3pCLE9BQU8sZUFBZSxDQUFDLEtBQUs7WUFDM0IsZUFBZSxDQUFDLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBc0IsRUFBRSxZQUFvQjtRQUNsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxPQUFhLEVBQUUsT0FBYTtRQUNoQyxPQUFPLG1CQUFBLE9BQU8sRUFBTyxHQUFHLENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBVyxFQUFFLFlBQWtCO1FBQ3JDLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uQWdncmVnYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1hZ2dyZWdhdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vYWdncmVnYXRpb24vYWdncmVnYXRpb24udHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBEYXRlRmllbGQgZXh0ZW5kcyBGaWVsZDxEYXRlPiB7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEZpZWxkSWQsXG5cdFx0XHRcdGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZz86IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKSB7XG5cdFx0c3VwZXIoaWQsXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdERhdGFUeXBlLkRBVEUsXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnKTtcblx0fVxuXG5cdGFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gQWdncmVnYXRpb25UeXBlLkNPVU5UIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZSB7XG5cdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5DT1VOVCB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1Q7XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzb3J0KGRhdGVPbmU6IERhdGUsIGRhdGVUd286IERhdGUpOiBudW1iZXIge1xuXHRcdHJldHVybiBkYXRlT25lIGFzIGFueSAtIChkYXRlVHdvIGFzIGFueSk7XG5cdH1cblxuXHRmaWx0ZXIodmFsdWU6IERhdGUsIGZpbHRlclBocmFzZTogRGF0ZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG59XG4iXX0=