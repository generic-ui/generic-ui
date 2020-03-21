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
    return NumberField;
}(Field));
export { NumberField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZmllbGRzL251bWJlci1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFJeEU7SUFBaUMsdUNBQUs7SUFFckMscUJBQVksRUFBVyxFQUNwQixRQUFhLEVBQ2IsUUFBdUIsRUFDdkIsaUJBQTJDO2VBQzdDLGtCQUFNLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxDQUFDLE1BQU0sRUFDZixRQUFRLEVBQ1IsaUJBQWlCLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELCtDQUF5Qjs7O0lBQXpCO1FBQ0MsT0FBTyxDQUFDLENBQUM7UUFDVCxpQ0FBaUM7UUFDakMsOEJBQThCO1FBQzlCLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QiwyQkFBMkI7SUFDNUIsQ0FBQzs7OztJQUVELGdEQUEwQjs7O0lBQTFCO1FBQ0MsT0FBTyxlQUFlLENBQUMsS0FBSztZQUMzQixlQUFlLENBQUMsUUFBUTtZQUN4QixlQUFlLENBQUMsR0FBRztZQUNuQixlQUFlLENBQUMsR0FBRztZQUNuQixlQUFlLENBQUMsR0FBRztZQUNuQixlQUFlLENBQUMsT0FBTztZQUN2QixlQUFlLENBQUMsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRixrQkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBaUMsS0FBSyxHQWtDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4tYWdncmVnYXRpb24uY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZGF0YS10eXBlJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuXG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJGaWVsZCBleHRlbmRzIEZpZWxkIHtcblxuXHRjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0YWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnPzogQ29sdW1uQWdncmVnYXRpb25Db25maWcpIHtcblx0XHRzdXBlcihpZCxcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0RGF0YVR5cGUuTlVNQkVSLFxuXHRcdFx0bWF0Y2hlcnMsXG5cdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZyk7XG5cdH1cblxuXHRhc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZSB7XG5cdFx0cmV0dXJuIDA7XG5cdFx0Ly8gcmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5DT1VOVCB8XG5cdFx0Ly8gXHRBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1QgfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLlNVTSB8XG5cdFx0Ly8gXHRBZ2dyZWdhdGlvblR5cGUuTUlOIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5NQVggfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLkFWRVJBR0UgfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLk1FRElBTjtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZSB7XG5cdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5DT1VOVCB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1QgfFxuXHRcdFx0QWdncmVnYXRpb25UeXBlLlNVTSB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuTUlOIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5NQVggfFxuXHRcdFx0QWdncmVnYXRpb25UeXBlLkFWRVJBR0UgfFxuXHRcdFx0QWdncmVnYXRpb25UeXBlLk1FRElBTjtcblx0fVxuXG59XG4iXX0=