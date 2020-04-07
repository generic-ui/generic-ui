/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from '../field';
import { DataType } from '../data-type';
import { AggregationType } from '../../../aggregation/aggregation.type';
export class BooleanField extends Field {
    /**
     * @param {?} id
     * @param {?} accessor
     * @param {?} matchers
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, matchers, aggregationConfig) {
        super(id, accessor, DataType.BOOLEAN, matchers, aggregationConfig);
    }
    /**
     * @return {?}
     */
    assignDefaultAggregations() {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT |
        // 	AggregationType.TRUTHY |
        // 	AggregationType.FALSY;
    }
    /**
     * @return {?}
     */
    assignPossibleAggregations() {
        return AggregationType.COUNT |
            AggregationType.DISTINCT |
            AggregationType.TRUTHY |
            AggregationType.FALSY;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZHMvYm9vbGVhbi1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUdqQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUt4RSxNQUFNLE9BQU8sWUFBYSxTQUFRLEtBQWM7Ozs7Ozs7SUFFL0MsWUFBWSxFQUFXLEVBQ3BCLFFBQWEsRUFDYixRQUF1QixFQUN2QixpQkFBMkM7UUFDN0MsS0FBSyxDQUFDLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxDQUFDLE9BQU8sRUFDaEIsUUFBUSxFQUNSLGlCQUFpQixDQUFDLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHlCQUF5QjtRQUN4QixPQUFPLENBQUMsQ0FBQztRQUNULGlDQUFpQztRQUNqQyw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCLDBCQUEwQjtJQUMzQixDQUFDOzs7O0lBRUQsMEJBQTBCO1FBQ3pCLE9BQU8sZUFBZSxDQUFDLEtBQUs7WUFDM0IsZUFBZSxDQUFDLFFBQVE7WUFDeEIsZUFBZSxDQUFDLE1BQU07WUFDdEIsZUFBZSxDQUFDLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBc0IsRUFBRSxZQUFvQjtRQUNsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxVQUFtQixFQUFFLFVBQW1COztjQUV0QyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFVBQVU7O2NBQy9CLFdBQVcsR0FBRyxDQUFDLENBQUMsVUFBVTtRQUUzQixPQUFPLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBYyxFQUFFLFlBQXFCO1FBQzNDLE9BQU8sS0FBSyxLQUFLLFlBQVksQ0FBQztJQUMvQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLWFnZ3JlZ2F0aW9uLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi50eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5GaWVsZCBleHRlbmRzIEZpZWxkPGJvb2xlYW4+IHtcblxuXHRjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0YWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnPzogQ29sdW1uQWdncmVnYXRpb25Db25maWcpIHtcblx0XHRzdXBlcihpZCxcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0RGF0YVR5cGUuQk9PTEVBTixcblx0XHRcdG1hdGNoZXJzLFxuXHRcdFx0YWdncmVnYXRpb25Db25maWcpO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdEFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQ09VTlQgfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLkRJU1RJTkNUIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5UUlVUSFkgfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLkZBTFNZO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlIHtcblx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkNPVU5UIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVCB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuVFJVVEhZIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5GQUxTWTtcblx0fVxuXG5cdHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHNvcnQoYm9vbGVhbk9uZTogYm9vbGVhbiwgYm9vbGVhblR3bzogYm9vbGVhbik6IG51bWJlciB7XG5cblx0XHRjb25zdCBzdXJlQm9vbE9uZSA9ICEhYm9vbGVhbk9uZSxcblx0XHRcdHN1cmVCb29sVHdvID0gISFib29sZWFuVHdvO1xuXG5cdFx0cmV0dXJuIChzdXJlQm9vbE9uZSA9PT0gc3VyZUJvb2xUd28pID8gMCA6IHN1cmVCb29sVHdvID8gLTEgOiAxO1xuXHR9XG5cblx0ZmlsdGVyKHZhbHVlOiBib29sZWFuLCBmaWx0ZXJQaHJhc2U6IGJvb2xlYW4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdmFsdWUgPT09IGZpbHRlclBocmFzZTtcblx0fVxuXG59XG4iXX0=