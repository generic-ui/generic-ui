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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkcy9ib29sZWFuLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUdqQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUt4RTtJQUFrQyx3Q0FBYztJQUUvQyxzQkFBWSxFQUFXLEVBQ3BCLFFBQWEsRUFDYixRQUF1QixFQUN2QixpQkFBMkM7ZUFDN0Msa0JBQU0sRUFBRSxFQUNQLFFBQVEsRUFDUixRQUFRLENBQUMsT0FBTyxFQUNoQixRQUFRLEVBQ1IsaUJBQWlCLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELGdEQUF5Qjs7O0lBQXpCO1FBQ0MsT0FBTyxDQUFDLENBQUM7UUFDVCxpQ0FBaUM7UUFDakMsOEJBQThCO1FBQzlCLDRCQUE0QjtRQUM1QiwwQkFBMEI7SUFDM0IsQ0FBQzs7OztJQUVELGlEQUEwQjs7O0lBQTFCO1FBQ0MsT0FBTyxlQUFlLENBQUMsS0FBSztZQUMzQixlQUFlLENBQUMsUUFBUTtZQUN4QixlQUFlLENBQUMsTUFBTTtZQUN0QixlQUFlLENBQUMsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVELDZCQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxZQUFvQjtRQUNsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELDJCQUFJOzs7OztJQUFKLFVBQUssVUFBbUIsRUFBRSxVQUFtQjs7WUFFdEMsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVOztZQUMvQixXQUFXLEdBQUcsQ0FBQyxDQUFDLFVBQVU7UUFFM0IsT0FBTyxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRUQsNkJBQU07Ozs7O0lBQU4sVUFBTyxLQUFjLEVBQUUsWUFBcUI7UUFDM0MsT0FBTyxLQUFLLEtBQUssWUFBWSxDQUFDO0lBQy9CLENBQUM7SUFFRixtQkFBQztBQUFELENBQUMsQUE1Q0QsQ0FBa0MsS0FBSyxHQTRDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4tYWdncmVnYXRpb24uY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZGF0YS10eXBlJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBCb29sZWFuRmllbGQgZXh0ZW5kcyBGaWVsZDxib29sZWFuPiB7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEZpZWxkSWQsXG5cdFx0XHRcdGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZz86IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKSB7XG5cdFx0c3VwZXIoaWQsXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdERhdGFUeXBlLkJPT0xFQU4sXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnKTtcblx0fVxuXG5cdGFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gQWdncmVnYXRpb25UeXBlLkNPVU5UIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVCB8XG5cdFx0Ly8gXHRBZ2dyZWdhdGlvblR5cGUuVFJVVEhZIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5GQUxTWTtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZSB7XG5cdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5DT1VOVCB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1QgfFxuXHRcdFx0QWdncmVnYXRpb25UeXBlLlRSVVRIWSB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuRkFMU1k7XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzb3J0KGJvb2xlYW5PbmU6IGJvb2xlYW4sIGJvb2xlYW5Ud286IGJvb2xlYW4pOiBudW1iZXIge1xuXG5cdFx0Y29uc3Qgc3VyZUJvb2xPbmUgPSAhIWJvb2xlYW5PbmUsXG5cdFx0XHRzdXJlQm9vbFR3byA9ICEhYm9vbGVhblR3bztcblxuXHRcdHJldHVybiAoc3VyZUJvb2xPbmUgPT09IHN1cmVCb29sVHdvKSA/IDAgOiBzdXJlQm9vbFR3byA/IC0xIDogMTtcblx0fVxuXG5cdGZpbHRlcih2YWx1ZTogYm9vbGVhbiwgZmlsdGVyUGhyYXNlOiBib29sZWFuKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHZhbHVlID09PSBmaWx0ZXJQaHJhc2U7XG5cdH1cblxufVxuIl19