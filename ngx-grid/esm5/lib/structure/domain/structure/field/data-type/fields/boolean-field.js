/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from '../field';
import { DataType } from '../data-type';
import { AggregationType } from '../../../aggregation/aggregation.type';
var BooleanField = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanField, _super);
    function BooleanField(id, accessor, matchers, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.BOOLEAN, matchers, aggregationConfig) || this;
    }
    /**
     * @return {?}
     */
    BooleanField.prototype.assignDefaultAggregations = /**
     * @return {?}
     */
    function () {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT |
        // 	AggregationType.TRUTHY |
        // 	AggregationType.FALSY;
    };
    /**
     * @return {?}
     */
    BooleanField.prototype.assignPossibleAggregations = /**
     * @return {?}
     */
    function () {
        return AggregationType.COUNT |
            AggregationType.DISTINCT |
            AggregationType.TRUTHY |
            AggregationType.FALSY;
    };
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    BooleanField.prototype.search = /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    function (item, searchPhrase) {
        return false;
    };
    /**
     * @param {?} booleanOne
     * @param {?} booleanTwo
     * @return {?}
     */
    BooleanField.prototype.sort = /**
     * @param {?} booleanOne
     * @param {?} booleanTwo
     * @return {?}
     */
    function (booleanOne, booleanTwo) {
        /** @type {?} */
        var sureBoolOne = !!booleanOne;
        /** @type {?} */
        var sureBoolTwo = !!booleanTwo;
        return (sureBoolOne === sureBoolTwo) ? 0 : sureBoolTwo ? -1 : 1;
    };
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    BooleanField.prototype.filter = /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    function (value, filterPhrase) {
        return value === filterPhrase;
    };
    return BooleanField;
}(Field));
export { BooleanField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZHMvYm9vbGVhbi1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFLeEU7SUFBa0Msd0NBQWM7SUFFL0Msc0JBQVksRUFBVyxFQUNwQixRQUFhLEVBQ2IsUUFBdUIsRUFDdkIsaUJBQTJDO2VBQzdDLGtCQUFNLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxDQUFDLE9BQU8sRUFDaEIsUUFBUSxFQUNSLGlCQUFpQixDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxnREFBeUI7OztJQUF6QjtRQUNDLE9BQU8sQ0FBQyxDQUFDO1FBQ1QsaUNBQWlDO1FBQ2pDLDhCQUE4QjtRQUM5Qiw0QkFBNEI7UUFDNUIsMEJBQTBCO0lBQzNCLENBQUM7Ozs7SUFFRCxpREFBMEI7OztJQUExQjtRQUNDLE9BQU8sZUFBZSxDQUFDLEtBQUs7WUFDM0IsZUFBZSxDQUFDLFFBQVE7WUFDeEIsZUFBZSxDQUFDLE1BQU07WUFDdEIsZUFBZSxDQUFDLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFFRCw2QkFBTTs7Ozs7SUFBTixVQUFPLElBQXNCLEVBQUUsWUFBb0I7UUFDbEQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCwyQkFBSTs7Ozs7SUFBSixVQUFLLFVBQW1CLEVBQUUsVUFBbUI7O1lBRXRDLFdBQVcsR0FBRyxDQUFDLENBQUMsVUFBVTs7WUFDL0IsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVO1FBRTNCLE9BQU8sQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQUVELDZCQUFNOzs7OztJQUFOLFVBQU8sS0FBYyxFQUFFLFlBQXFCO1FBQzNDLE9BQU8sS0FBSyxLQUFLLFlBQVksQ0FBQztJQUMvQixDQUFDO0lBRUYsbUJBQUM7QUFBRCxDQUFDLEFBNUNELENBQWtDLEtBQUssR0E0Q3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uQWdncmVnYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1hZ2dyZWdhdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vYWdncmVnYXRpb24vYWdncmVnYXRpb24udHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBCb29sZWFuRmllbGQgZXh0ZW5kcyBGaWVsZDxib29sZWFuPiB7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEZpZWxkSWQsXG5cdFx0XHRcdGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZz86IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKSB7XG5cdFx0c3VwZXIoaWQsXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdERhdGFUeXBlLkJPT0xFQU4sXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnKTtcblx0fVxuXG5cdGFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gQWdncmVnYXRpb25UeXBlLkNPVU5UIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVCB8XG5cdFx0Ly8gXHRBZ2dyZWdhdGlvblR5cGUuVFJVVEhZIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5GQUxTWTtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZSB7XG5cdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5DT1VOVCB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1QgfFxuXHRcdFx0QWdncmVnYXRpb25UeXBlLlRSVVRIWSB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuRkFMU1k7XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzb3J0KGJvb2xlYW5PbmU6IGJvb2xlYW4sIGJvb2xlYW5Ud286IGJvb2xlYW4pOiBudW1iZXIge1xuXG5cdFx0Y29uc3Qgc3VyZUJvb2xPbmUgPSAhIWJvb2xlYW5PbmUsXG5cdFx0XHRzdXJlQm9vbFR3byA9ICEhYm9vbGVhblR3bztcblxuXHRcdHJldHVybiAoc3VyZUJvb2xPbmUgPT09IHN1cmVCb29sVHdvKSA/IDAgOiBzdXJlQm9vbFR3byA/IC0xIDogMTtcblx0fVxuXG5cdGZpbHRlcih2YWx1ZTogYm9vbGVhbiwgZmlsdGVyUGhyYXNlOiBib29sZWFuKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHZhbHVlID09PSBmaWx0ZXJQaHJhc2U7XG5cdH1cblxufVxuIl19