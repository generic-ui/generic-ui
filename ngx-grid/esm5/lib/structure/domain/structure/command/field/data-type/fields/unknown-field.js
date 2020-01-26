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
    function UnknownField(id, accessor, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.UNKNOWN, aggregationConfig) || this;
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
    return UnknownField;
}(Field));
export { UnknownField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkcy91bmtub3duLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUdqQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUd4RTtJQUFrQyx3Q0FBSztJQUV0QyxzQkFBWSxFQUFXLEVBQ3BCLFFBQWEsRUFDYixpQkFBMkM7ZUFDN0Msa0JBQU0sRUFBRSxFQUNQLFFBQVEsRUFDUixRQUFRLENBQUMsT0FBTyxFQUNoQixpQkFBaUIsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsZ0RBQXlCOzs7SUFBekI7UUFDQyxPQUFPLENBQUMsQ0FBQztRQUNULGlDQUFpQztRQUNqQyw2QkFBNkI7SUFDOUIsQ0FBQzs7OztJQUVELGlEQUEwQjs7O0lBQTFCO1FBQ0MsT0FBTyxlQUFlLENBQUMsS0FBSztZQUMzQixlQUFlLENBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRixtQkFBQztBQUFELENBQUMsQUF0QkQsQ0FBa0MsS0FBSyxHQXNCdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4tYWdncmVnYXRpb24uY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZGF0YS10eXBlJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBVbmtub3duRmllbGQgZXh0ZW5kcyBGaWVsZCB7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEZpZWxkSWQsXG5cdFx0XHRcdGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnPzogQ29sdW1uQWdncmVnYXRpb25Db25maWcpIHtcblx0XHRzdXBlcihpZCxcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0RGF0YVR5cGUuVU5LTk9XTixcblx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnKTtcblx0fVxuXG5cdGFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gQWdncmVnYXRpb25UeXBlLkNPVU5UIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZSB7XG5cdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5DT1VOVCB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1Q7XG5cdH1cblxufVxuIl19