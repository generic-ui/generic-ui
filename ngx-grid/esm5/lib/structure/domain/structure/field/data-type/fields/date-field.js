/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from '../field';
import { DataType } from '../data-type';
import { AggregationType } from '../../../aggregation/aggregation.type';
var DateField = /** @class */ (function (_super) {
    tslib_1.__extends(DateField, _super);
    function DateField(id, accessor, matchers, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.DATE, matchers, aggregationConfig) || this;
    }
    /**
     * @return {?}
     */
    DateField.prototype.assignDefaultAggregations = /**
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
    DateField.prototype.assignPossibleAggregations = /**
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
    DateField.prototype.search = /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    function (item, searchPhrase) {
        return false;
    };
    /**
     * @param {?} dateOne
     * @param {?} dateTwo
     * @return {?}
     */
    DateField.prototype.sort = /**
     * @param {?} dateOne
     * @param {?} dateTwo
     * @return {?}
     */
    function (dateOne, dateTwo) {
        return (/** @type {?} */ (dateOne)) - ((/** @type {?} */ (dateTwo)));
    };
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    DateField.prototype.filter = /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    function (value, filterPhrase) {
        return false;
    };
    return DateField;
}(Field));
export { DateField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZHMvZGF0ZS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFLeEU7SUFBK0IscUNBQVc7SUFFekMsbUJBQVksRUFBVyxFQUNwQixRQUFhLEVBQ2IsUUFBdUIsRUFDdkIsaUJBQTJDO2VBQzdDLGtCQUFNLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxDQUFDLElBQUksRUFDYixRQUFRLEVBQ1IsaUJBQWlCLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDZDQUF5Qjs7O0lBQXpCO1FBQ0MsT0FBTyxDQUFDLENBQUM7UUFDVCxpQ0FBaUM7UUFDakMsNkJBQTZCO0lBQzlCLENBQUM7Ozs7SUFFRCw4Q0FBMEI7OztJQUExQjtRQUNDLE9BQU8sZUFBZSxDQUFDLEtBQUs7WUFDM0IsZUFBZSxDQUFDLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFRCwwQkFBTTs7Ozs7SUFBTixVQUFPLElBQXNCLEVBQUUsWUFBb0I7UUFDbEQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCx3QkFBSTs7Ozs7SUFBSixVQUFLLE9BQWEsRUFBRSxPQUFhO1FBQ2hDLE9BQU8sbUJBQUEsT0FBTyxFQUFPLEdBQUcsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUVELDBCQUFNOzs7OztJQUFOLFVBQU8sS0FBVyxFQUFFLFlBQWtCO1FBQ3JDLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0FBQyxBQXBDRCxDQUErQixLQUFLLEdBb0NuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tYWdncmVnYXRpb24uY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZGF0YS10eXBlJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgRGF0ZUZpZWxkIGV4dGVuZHMgRmllbGQ8RGF0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBGaWVsZElkLFxuXHRcdFx0XHRhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRtYXRjaGVyczogRmllbGRNYXRjaGVycyxcblx0XHRcdFx0YWdncmVnYXRpb25Db25maWc/OiBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZykge1xuXHRcdHN1cGVyKGlkLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5EQVRFLFxuXHRcdFx0bWF0Y2hlcnMsXG5cdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZyk7XG5cdH1cblxuXHRhc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZSB7XG5cdFx0cmV0dXJuIDA7XG5cdFx0Ly8gcmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5DT1VOVCB8XG5cdFx0Ly8gXHRBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1Q7XG5cdH1cblxuXHRhc3NpZ25Qb3NzaWJsZUFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGUge1xuXHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQ09VTlQgfFxuXHRcdFx0QWdncmVnYXRpb25UeXBlLkRJU1RJTkNUO1xuXHR9XG5cblx0c2VhcmNoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c29ydChkYXRlT25lOiBEYXRlLCBkYXRlVHdvOiBEYXRlKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZGF0ZU9uZSBhcyBhbnkgLSAoZGF0ZVR3byBhcyBhbnkpO1xuXHR9XG5cblx0ZmlsdGVyKHZhbHVlOiBEYXRlLCBmaWx0ZXJQaHJhc2U6IERhdGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxufVxuIl19