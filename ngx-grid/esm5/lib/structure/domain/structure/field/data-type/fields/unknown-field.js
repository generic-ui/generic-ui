/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from '../field';
import { DataType } from '../data-type';
import { AggregationType } from '../../../aggregation/aggregation.type';
var UnknownField = /** @class */ (function (_super) {
    tslib_1.__extends(UnknownField, _super);
    function UnknownField(id, accessor, matchers, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.UNKNOWN, matchers, aggregationConfig) || this;
    }
    /**
     * @return {?}
     */
    UnknownField.prototype.assignDefaultAggregations = /**
     * @return {?}
     */
    function () {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT;
    };
    /**
     * @return {?}
     */
    UnknownField.prototype.assignPossibleAggregations = /**
     * @return {?}
     */
    function () {
        return AggregationType.COUNT |
            AggregationType.DISTINCT;
    };
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    UnknownField.prototype.search = /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    function (item, searchPhrase) {
        return false;
    };
    /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    UnknownField.prototype.sort = /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    function (one, two) {
        return 0;
    };
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    UnknownField.prototype.filter = /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    function (value, filterPhrase) {
        return false;
    };
    return UnknownField;
}(Field));
export { UnknownField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZHMvdW5rbm93bi1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFLeEU7SUFBa0Msd0NBQVU7SUFFM0Msc0JBQVksRUFBVyxFQUNwQixRQUFhLEVBQ2IsUUFBdUIsRUFDdkIsaUJBQTJDO2VBQzdDLGtCQUFNLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxDQUFDLE9BQU8sRUFDaEIsUUFBUSxFQUNSLGlCQUFpQixDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxnREFBeUI7OztJQUF6QjtRQUNDLE9BQU8sQ0FBQyxDQUFDO1FBQ1QsaUNBQWlDO1FBQ2pDLDZCQUE2QjtJQUM5QixDQUFDOzs7O0lBRUQsaURBQTBCOzs7SUFBMUI7UUFDQyxPQUFPLGVBQWUsQ0FBQyxLQUFLO1lBQzNCLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsNkJBQU07Ozs7O0lBQU4sVUFBTyxJQUFzQixFQUFFLFlBQW9CO1FBQ2xELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRUQsMkJBQUk7Ozs7O0lBQUosVUFBSyxHQUFRLEVBQUUsR0FBUTtRQUN0QixPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7OztJQUVELDZCQUFNOzs7OztJQUFOLFVBQU8sS0FBVSxFQUFFLFlBQWlCO1FBQ25DLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVGLG1CQUFDO0FBQUQsQ0FBQyxBQXBDRCxDQUFrQyxLQUFLLEdBb0N0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tYWdncmVnYXRpb24uY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZGF0YS10eXBlJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgVW5rbm93bkZpZWxkIGV4dGVuZHMgRmllbGQ8YW55PiB7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEZpZWxkSWQsXG5cdFx0XHRcdGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZz86IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKSB7XG5cdFx0c3VwZXIoaWQsXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdERhdGFUeXBlLlVOS05PV04sXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnKTtcblx0fVxuXG5cdGFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gQWdncmVnYXRpb25UeXBlLkNPVU5UIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZSB7XG5cdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5DT1VOVCB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1Q7XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzb3J0KG9uZTogYW55LCB0d286IGFueSk6IG51bWJlciB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRmaWx0ZXIodmFsdWU6IGFueSwgZmlsdGVyUGhyYXNlOiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxufVxuIl19