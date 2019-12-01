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
    function NumberField(id, accessor, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.NUMBER, aggregationConfig) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZmllbGRzL251bWJlci1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHeEU7SUFBaUMsdUNBQUs7SUFFckMscUJBQVksRUFBVyxFQUNwQixRQUFhLEVBQ2IsaUJBQTJDO2VBQzdDLGtCQUFNLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxDQUFDLE1BQU0sRUFDZixpQkFBaUIsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsK0NBQXlCOzs7SUFBekI7UUFDQyxPQUFPLENBQUMsQ0FBQztRQUNULGlDQUFpQztRQUNqQyw4QkFBOEI7UUFDOUIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLDJCQUEyQjtJQUM1QixDQUFDOzs7O0lBRUQsZ0RBQTBCOzs7SUFBMUI7UUFDQyxPQUFPLGVBQWUsQ0FBQyxLQUFLO1lBQzNCLGVBQWUsQ0FBQyxRQUFRO1lBQ3hCLGVBQWUsQ0FBQyxHQUFHO1lBQ25CLGVBQWUsQ0FBQyxHQUFHO1lBQ25CLGVBQWUsQ0FBQyxHQUFHO1lBQ25CLGVBQWUsQ0FBQyxPQUFPO1lBQ3ZCLGVBQWUsQ0FBQyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVGLGtCQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUFpQyxLQUFLLEdBZ0NyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29sdW1uLWFnZ3JlZ2F0aW9uLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi50eXBlJztcblxuXG5leHBvcnQgY2xhc3MgTnVtYmVyRmllbGQgZXh0ZW5kcyBGaWVsZCB7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEZpZWxkSWQsXG5cdFx0XHRcdGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnPzogQ29sdW1uQWdncmVnYXRpb25Db25maWcpIHtcblx0XHRzdXBlcihpZCxcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0RGF0YVR5cGUuTlVNQkVSLFxuXHRcdFx0YWdncmVnYXRpb25Db25maWcpO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdEFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQ09VTlQgfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLkRJU1RJTkNUIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5TVU0gfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLk1JTiB8XG5cdFx0Ly8gXHRBZ2dyZWdhdGlvblR5cGUuTUFYIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5BVkVSQUdFIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5NRURJQU47XG5cdH1cblxuXHRhc3NpZ25Qb3NzaWJsZUFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGUge1xuXHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQ09VTlQgfFxuXHRcdFx0QWdncmVnYXRpb25UeXBlLkRJU1RJTkNUIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5TVU0gfFxuXHRcdFx0QWdncmVnYXRpb25UeXBlLk1JTiB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuTUFYIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5BVkVSQUdFIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5NRURJQU47XG5cdH1cblxufVxuIl19