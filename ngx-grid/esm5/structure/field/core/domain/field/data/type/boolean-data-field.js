/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../summaries/core/domain/summaries.type';
var BooleanDataField = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanDataField, _super);
    function BooleanDataField(accessor, matchers, summariesConfig) {
        return _super.call(this, accessor, DataType.BOOLEAN, matchers, summariesConfig) || this;
    }
    /**
     * @return {?}
     */
    BooleanDataField.prototype.assignDefaultSummaries = /**
     * @return {?}
     */
    function () {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT |
        // 	SummariesType.TRUTHY |
        // 	SummariesType.FALSY;
    };
    /**
     * @return {?}
     */
    BooleanDataField.prototype.assignPossibleSummaries = /**
     * @return {?}
     */
    function () {
        return SummariesType.COUNT |
            SummariesType.DISTINCT |
            SummariesType.TRUTHY |
            SummariesType.FALSY;
    };
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    BooleanDataField.prototype.search = /**
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
    BooleanDataField.prototype.sort = /**
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
    BooleanDataField.prototype.filter = /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    function (value, filterPhrase) {
        return value === filterPhrase;
    };
    /**
     * @param {?} item
     * @param {?} value
     * @return {?}
     */
    BooleanDataField.prototype.equals = /**
     * @param {?} item
     * @param {?} value
     * @return {?}
     */
    function (item, value) {
        return this.getValue(item) === value;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    BooleanDataField.prototype.getDisplayValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item ? 'True' : 'False';
    };
    return BooleanDataField;
}(DataField));
export { BooleanDataField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1kYXRhLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS90eXBlL2Jvb2xlYW4tZGF0YS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFLdkY7SUFBc0MsNENBQWtCO0lBRXZELDBCQUFZLFFBQWEsRUFDdEIsUUFBdUIsRUFDdkIsZUFBdUM7ZUFDekMsa0JBQ0MsUUFBUSxFQUNSLFFBQVEsQ0FBQyxPQUFPLEVBQ2hCLFFBQVEsRUFDUixlQUFlLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGlEQUFzQjs7O0lBQXRCO1FBQ0MsT0FBTyxDQUFDLENBQUM7UUFDVCwrQkFBK0I7UUFDL0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQix3QkFBd0I7SUFDekIsQ0FBQzs7OztJQUVELGtEQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxhQUFhLENBQUMsS0FBSztZQUN6QixhQUFhLENBQUMsUUFBUTtZQUN0QixhQUFhLENBQUMsTUFBTTtZQUNwQixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVELGlDQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxZQUFvQjtRQUNsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELCtCQUFJOzs7OztJQUFKLFVBQUssVUFBbUIsRUFBRSxVQUFtQjs7WUFFdEMsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVOztZQUMvQixXQUFXLEdBQUcsQ0FBQyxDQUFDLFVBQVU7UUFFM0IsT0FBTyxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRUQsaUNBQU07Ozs7O0lBQU4sVUFBTyxLQUFjLEVBQUUsWUFBcUI7UUFDM0MsT0FBTyxLQUFLLEtBQUssWUFBWSxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVELGlDQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxLQUFjO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLElBQWE7UUFDNUIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFRix1QkFBQztBQUFELENBQUMsQUFuREQsQ0FBc0MsU0FBUyxHQW1EOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhRmllbGQgfSBmcm9tICcuLi9kYXRhLWZpZWxkJztcbmltcG9ydCB7IENvbHVtblN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3VtbWFyaWVzL2NvcmUvZG9tYWluL3N1bW1hcmllcy50eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5EYXRhRmllbGQgZXh0ZW5kcyBEYXRhRmllbGQ8Ym9vbGVhbj4ge1xuXG5cdGNvbnN0cnVjdG9yKGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRzdW1tYXJpZXNDb25maWc/OiBDb2x1bW5TdW1tYXJpZXNDb25maWcpIHtcblx0XHRzdXBlcihcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0RGF0YVR5cGUuQk9PTEVBTixcblx0XHRcdG1hdGNoZXJzLFxuXHRcdFx0c3VtbWFyaWVzQ29uZmlnKTtcblx0fVxuXG5cdGFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIDA7XG5cdFx0Ly8gcmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVCB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLlRSVVRIWSB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLkZBTFNZO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVCB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLlRSVVRIWSB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLkZBTFNZO1xuXHR9XG5cblx0c2VhcmNoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c29ydChib29sZWFuT25lOiBib29sZWFuLCBib29sZWFuVHdvOiBib29sZWFuKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IHN1cmVCb29sT25lID0gISFib29sZWFuT25lLFxuXHRcdFx0c3VyZUJvb2xUd28gPSAhIWJvb2xlYW5Ud287XG5cblx0XHRyZXR1cm4gKHN1cmVCb29sT25lID09PSBzdXJlQm9vbFR3bykgPyAwIDogc3VyZUJvb2xUd28gPyAtMSA6IDE7XG5cdH1cblxuXHRmaWx0ZXIodmFsdWU6IGJvb2xlYW4sIGZpbHRlclBocmFzZTogYm9vbGVhbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB2YWx1ZSA9PT0gZmlsdGVyUGhyYXNlO1xuXHR9XG5cblx0ZXF1YWxzKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHZhbHVlOiBib29sZWFuKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoaXRlbSkgPT09IHZhbHVlO1xuXHR9XG5cblx0Z2V0RGlzcGxheVZhbHVlKGl0ZW06IGJvb2xlYW4pOiBzdHJpbmcge1xuXHRcdHJldHVybiBpdGVtID8gJ1RydWUnIDogJ0ZhbHNlJztcblx0fVxuXG59XG4iXX0=