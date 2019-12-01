/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from '../field';
import { DataType } from '../data-type';
import { AggregationType } from '../../../aggregation/aggregation.type';
var StringField = /** @class */ (function (_super) {
    tslib_1.__extends(StringField, _super);
    function StringField(id, accessor, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.STRING, aggregationConfig) || this;
    }
    /**
     * @return {?}
     */
    StringField.prototype.assignDefaultAggregations = /**
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
    StringField.prototype.assignPossibleAggregations = /**
     * @return {?}
     */
    function () {
        return AggregationType.COUNT |
            AggregationType.DISTINCT;
    };
    return StringField;
}(Field));
export { StringField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZmllbGRzL3N0cmluZy1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHeEU7SUFBaUMsdUNBQUs7SUFFckMscUJBQVksRUFBVyxFQUNwQixRQUFhLEVBQ2IsaUJBQTJDO2VBQzdDLGtCQUFNLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxDQUFDLE1BQU0sRUFDZixpQkFBaUIsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsK0NBQXlCOzs7SUFBekI7UUFDQyxPQUFPLENBQUMsQ0FBQztRQUNULGlDQUFpQztRQUNqQyw2QkFBNkI7SUFDOUIsQ0FBQzs7OztJQUVELGdEQUEwQjs7O0lBQTFCO1FBQ0MsT0FBTyxlQUFlLENBQUMsS0FBSztZQUMzQixlQUFlLENBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRixrQkFBQztBQUFELENBQUMsQUF0QkQsQ0FBaUMsS0FBSyxHQXNCckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbHVtbi1hZ2dyZWdhdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vYWdncmVnYXRpb24vYWdncmVnYXRpb24udHlwZSc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cmluZ0ZpZWxkIGV4dGVuZHMgRmllbGQge1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBGaWVsZElkLFxuXHRcdFx0XHRhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZz86IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKSB7XG5cdFx0c3VwZXIoaWQsXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdERhdGFUeXBlLlNUUklORyxcblx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnKTtcblx0fVxuXG5cdGFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gQWdncmVnYXRpb25UeXBlLkNPVU5UIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZSB7XG5cdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5DT1VOVCB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1Q7XG5cdH1cblxufVxuIl19