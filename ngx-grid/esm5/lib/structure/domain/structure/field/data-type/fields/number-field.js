/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from '../field';
import { DataType } from '../data-type';
import { AggregationType } from '../../../aggregation/aggregation.type';
var NumberField = /** @class */ (function (_super) {
    tslib_1.__extends(NumberField, _super);
    function NumberField(id, accessor, matchers, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.NUMBER, matchers, aggregationConfig) || this;
    }
    /**
     * @return {?}
     */
    NumberField.prototype.getField = /**
     * @return {?}
     */
    function () {
        return this;
    };
    /**
     * @return {?}
     */
    NumberField.prototype.assignDefaultAggregations = /**
     * @return {?}
     */
    function () {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT |
        // 	AggregationType.SUM |
        // 	AggregationType.MIN |
        // 	AggregationType.MAX |
        // 	AggregationType.AVERAGE |
        // 	AggregationType.MEDIAN;
    };
    /**
     * @return {?}
     */
    NumberField.prototype.assignPossibleAggregations = /**
     * @return {?}
     */
    function () {
        return AggregationType.COUNT |
            AggregationType.DISTINCT |
            AggregationType.SUM |
            AggregationType.MIN |
            AggregationType.MAX |
            AggregationType.AVERAGE |
            AggregationType.MEDIAN;
    };
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    NumberField.prototype.search = /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    function (item, searchPhrase) {
        return false;
    };
    /**
     * @param {?} numOne
     * @param {?} numTwo
     * @return {?}
     */
    NumberField.prototype.sort = /**
     * @param {?} numOne
     * @param {?} numTwo
     * @return {?}
     */
    function (numOne, numTwo) {
        /** @type {?} */
        var sureNumOne = +numOne;
        /** @type {?} */
        var sureNumTwo = +numTwo;
        return sureNumOne - sureNumTwo;
    };
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    NumberField.prototype.filter = /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    function (value, filterPhrase) {
        return value > filterPhrase;
    };
    return NumberField;
}(Field));
export { NumberField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2ZpZWxkcy9udW1iZXItZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBS3hFO0lBQWlDLHVDQUFhO0lBQzdDLHFCQUFZLEVBQVcsRUFDcEIsUUFBYSxFQUNiLFFBQXVCLEVBQ3ZCLGlCQUEyQztlQUM3QyxrQkFBTSxFQUFFLEVBQ1AsUUFBUSxFQUNSLFFBQVEsQ0FBQyxNQUFNLEVBQ2YsUUFBUSxFQUNSLGlCQUFpQixDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCwrQ0FBeUI7OztJQUF6QjtRQUNDLE9BQU8sQ0FBQyxDQUFDO1FBQ1QsaUNBQWlDO1FBQ2pDLDhCQUE4QjtRQUM5Qix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qiw2QkFBNkI7UUFDN0IsMkJBQTJCO0lBQzVCLENBQUM7Ozs7SUFFRCxnREFBMEI7OztJQUExQjtRQUNDLE9BQU8sZUFBZSxDQUFDLEtBQUs7WUFDM0IsZUFBZSxDQUFDLFFBQVE7WUFDeEIsZUFBZSxDQUFDLEdBQUc7WUFDbkIsZUFBZSxDQUFDLEdBQUc7WUFDbkIsZUFBZSxDQUFDLEdBQUc7WUFDbkIsZUFBZSxDQUFDLE9BQU87WUFDdkIsZUFBZSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCw0QkFBTTs7Ozs7SUFBTixVQUFPLElBQXNCLEVBQUUsWUFBb0I7UUFDbEQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCwwQkFBSTs7Ozs7SUFBSixVQUFLLE1BQWMsRUFBRSxNQUFjOztZQUU1QixVQUFVLEdBQUcsQ0FBQyxNQUFNOztZQUN6QixVQUFVLEdBQUcsQ0FBQyxNQUFNO1FBRXJCLE9BQU8sVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFRCw0QkFBTTs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxZQUFvQjtRQUN6QyxPQUFPLEtBQUssR0FBRyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVGLGtCQUFDO0FBQUQsQ0FBQyxBQXJERCxDQUFpQyxLQUFLLEdBcURyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tYWdncmVnYXRpb24uY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZGF0YS10eXBlJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgTnVtYmVyRmllbGQgZXh0ZW5kcyBGaWVsZDxudW1iZXI+IHtcblx0Y29uc3RydWN0b3IoaWQ6IEZpZWxkSWQsXG5cdFx0XHRcdGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZz86IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKSB7XG5cdFx0c3VwZXIoaWQsXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdERhdGFUeXBlLk5VTUJFUixcblx0XHRcdG1hdGNoZXJzLFxuXHRcdFx0YWdncmVnYXRpb25Db25maWcpO1xuXHR9XG5cblx0Z2V0RmllbGQoKTogTnVtYmVyRmllbGQge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdEFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQ09VTlQgfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLkRJU1RJTkNUIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5TVU0gfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLk1JTiB8XG5cdFx0Ly8gXHRBZ2dyZWdhdGlvblR5cGUuTUFYIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5BVkVSQUdFIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5NRURJQU47XG5cdH1cblxuXHRhc3NpZ25Qb3NzaWJsZUFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGUge1xuXHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQ09VTlQgfFxuXHRcdFx0QWdncmVnYXRpb25UeXBlLkRJU1RJTkNUIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5TVU0gfFxuXHRcdFx0QWdncmVnYXRpb25UeXBlLk1JTiB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuTUFYIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5BVkVSQUdFIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5NRURJQU47XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzb3J0KG51bU9uZTogbnVtYmVyLCBudW1Ud286IG51bWJlcik6IG51bWJlciB7XG5cblx0XHRjb25zdCBzdXJlTnVtT25lID0gK251bU9uZSxcblx0XHRcdHN1cmVOdW1Ud28gPSArbnVtVHdvO1xuXG5cdFx0cmV0dXJuIHN1cmVOdW1PbmUgLSBzdXJlTnVtVHdvO1xuXHR9XG5cblx0ZmlsdGVyKHZhbHVlOiBudW1iZXIsIGZpbHRlclBocmFzZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHZhbHVlID4gZmlsdGVyUGhyYXNlO1xuXHR9XG5cbn1cbiJdfQ==