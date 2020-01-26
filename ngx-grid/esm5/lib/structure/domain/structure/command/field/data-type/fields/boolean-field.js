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
    function BooleanField(id, accessor, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.BOOLEAN, aggregationConfig) || this;
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
    return BooleanField;
}(Field));
export { BooleanField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkcy9ib29sZWFuLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUdqQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUd4RTtJQUFrQyx3Q0FBSztJQUV0QyxzQkFBWSxFQUFXLEVBQ3BCLFFBQWEsRUFDYixpQkFBMkM7ZUFDN0Msa0JBQU0sRUFBRSxFQUNQLFFBQVEsRUFDUixRQUFRLENBQUMsT0FBTyxFQUNoQixpQkFBaUIsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsZ0RBQXlCOzs7SUFBekI7UUFDQyxPQUFPLENBQUMsQ0FBQztRQUNULGlDQUFpQztRQUNqQyw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCLDBCQUEwQjtJQUMzQixDQUFDOzs7O0lBRUQsaURBQTBCOzs7SUFBMUI7UUFDQyxPQUFPLGVBQWUsQ0FBQyxLQUFLO1lBQzNCLGVBQWUsQ0FBQyxRQUFRO1lBQ3hCLGVBQWUsQ0FBQyxNQUFNO1lBQ3RCLGVBQWUsQ0FBQyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVGLG1CQUFDO0FBQUQsQ0FBQyxBQTFCRCxDQUFrQyxLQUFLLEdBMEJ0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi1hZ2dyZWdhdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vYWdncmVnYXRpb24vYWdncmVnYXRpb24udHlwZSc7XG5cblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5GaWVsZCBleHRlbmRzIEZpZWxkIHtcblxuXHRjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0YWNjZXNzb3I6IGFueSxcblx0XHRcdFx0YWdncmVnYXRpb25Db25maWc/OiBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZykge1xuXHRcdHN1cGVyKGlkLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5CT09MRUFOLFxuXHRcdFx0YWdncmVnYXRpb25Db25maWcpO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdEFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQ09VTlQgfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLkRJU1RJTkNUIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5UUlVUSFkgfFxuXHRcdC8vIFx0QWdncmVnYXRpb25UeXBlLkZBTFNZO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlIHtcblx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkNPVU5UIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVCB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuVFJVVEhZIHxcblx0XHRcdEFnZ3JlZ2F0aW9uVHlwZS5GQUxTWTtcblx0fVxuXG59XG4iXX0=