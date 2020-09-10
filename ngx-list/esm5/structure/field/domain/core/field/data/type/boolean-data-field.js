/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../core/domain/summaries/summaries.type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1kYXRhLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZGF0YS90eXBlL2Jvb2xlYW4tZGF0YS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFLdkY7SUFBc0MsNENBQWtCO0lBRXZELDBCQUFZLFFBQWEsRUFDdEIsUUFBdUIsRUFDdkIsZUFBdUM7ZUFDekMsa0JBQ0MsUUFBUSxFQUNSLFFBQVEsQ0FBQyxPQUFPLEVBQ2hCLFFBQVEsRUFDUixlQUFlLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGlEQUFzQjs7O0lBQXRCO1FBQ0MsT0FBTyxDQUFDLENBQUM7UUFDVCwrQkFBK0I7UUFDL0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQix3QkFBd0I7SUFDekIsQ0FBQzs7OztJQUVELGtEQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxhQUFhLENBQUMsS0FBSztZQUN6QixhQUFhLENBQUMsUUFBUTtZQUN0QixhQUFhLENBQUMsTUFBTTtZQUNwQixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVELGlDQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxZQUFvQjtRQUNsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELCtCQUFJOzs7OztJQUFKLFVBQUssVUFBbUIsRUFBRSxVQUFtQjs7WUFFdEMsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVOztZQUMvQixXQUFXLEdBQUcsQ0FBQyxDQUFDLFVBQVU7UUFFM0IsT0FBTyxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRUQsaUNBQU07Ozs7O0lBQU4sVUFBTyxLQUFjLEVBQUUsWUFBcUI7UUFDM0MsT0FBTyxLQUFLLEtBQUssWUFBWSxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVELGlDQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxLQUFjO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLElBQWE7UUFDNUIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFRix1QkFBQztBQUFELENBQUMsQUFuREQsQ0FBc0MsU0FBUyxHQW1EOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhRmllbGQgfSBmcm9tICcuLi9kYXRhLWZpZWxkJztcbmltcG9ydCB7IENvbHVtblN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLXN1bW1hcmllcy5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N1bW1hcmllcy9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgQm9vbGVhbkRhdGFGaWVsZCBleHRlbmRzIERhdGFGaWVsZDxib29sZWFuPiB7XG5cblx0Y29uc3RydWN0b3IoYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5CT09MRUFOLFxuXHRcdFx0bWF0Y2hlcnMsXG5cdFx0XHRzdW1tYXJpZXNDb25maWcpO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdFN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuVFJVVEhZIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuRkFMU1k7XG5cdH1cblxuXHRhc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuVFJVVEhZIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuRkFMU1k7XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzb3J0KGJvb2xlYW5PbmU6IGJvb2xlYW4sIGJvb2xlYW5Ud286IGJvb2xlYW4pOiBudW1iZXIge1xuXG5cdFx0Y29uc3Qgc3VyZUJvb2xPbmUgPSAhIWJvb2xlYW5PbmUsXG5cdFx0XHRzdXJlQm9vbFR3byA9ICEhYm9vbGVhblR3bztcblxuXHRcdHJldHVybiAoc3VyZUJvb2xPbmUgPT09IHN1cmVCb29sVHdvKSA/IDAgOiBzdXJlQm9vbFR3byA/IC0xIDogMTtcblx0fVxuXG5cdGZpbHRlcih2YWx1ZTogYm9vbGVhbiwgZmlsdGVyUGhyYXNlOiBib29sZWFuKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHZhbHVlID09PSBmaWx0ZXJQaHJhc2U7XG5cdH1cblxuXHRlcXVhbHMoaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgdmFsdWU6IGJvb2xlYW4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZShpdGVtKSA9PT0gdmFsdWU7XG5cdH1cblxuXHRnZXREaXNwbGF5VmFsdWUoaXRlbTogYm9vbGVhbik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGl0ZW0gPyAnVHJ1ZScgOiAnRmFsc2UnO1xuXHR9XG5cbn1cbiJdfQ==