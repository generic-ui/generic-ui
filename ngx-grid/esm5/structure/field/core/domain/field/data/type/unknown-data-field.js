/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../summaries/core/domain/summaries.type';
var UnknownDataField = /** @class */ (function (_super) {
    tslib_1.__extends(UnknownDataField, _super);
    function UnknownDataField(accessor, matchers, summariesConfig) {
        return _super.call(this, accessor, DataType.UNKNOWN, matchers, summariesConfig) || this;
    }
    /**
     * @return {?}
     */
    UnknownDataField.prototype.assignDefaultSummaries = /**
     * @return {?}
     */
    function () {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    };
    /**
     * @return {?}
     */
    UnknownDataField.prototype.assignPossibleSummaries = /**
     * @return {?}
     */
    function () {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    };
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    UnknownDataField.prototype.search = /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    function (item, searchPhrase) {
        return false;
    };
    /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    UnknownDataField.prototype.sort = /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    function (one, two) {
        return 0;
    };
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    UnknownDataField.prototype.filter = /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    function (value, filterPhrase) {
        return false;
    };
    /**
     * @param {?} item
     * @param {?} value
     * @return {?}
     */
    UnknownDataField.prototype.equals = /**
     * @param {?} item
     * @param {?} value
     * @return {?}
     */
    function (item, value) {
        return false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    UnknownDataField.prototype.getDisplayValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item;
    };
    return UnknownDataField;
}(DataField));
export { UnknownDataField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1kYXRhLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS90eXBlL3Vua25vd24tZGF0YS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFLdkY7SUFBc0MsNENBQWM7SUFFbkQsMEJBQVksUUFBYSxFQUN0QixRQUF1QixFQUN2QixlQUF1QztlQUN6QyxrQkFDQyxRQUFRLEVBQ1IsUUFBUSxDQUFDLE9BQU8sRUFDaEIsUUFBUSxFQUNSLGVBQWUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsaURBQXNCOzs7SUFBdEI7UUFDQyxPQUFPLENBQUMsQ0FBQztRQUNULCtCQUErQjtRQUMvQiwyQkFBMkI7SUFDNUIsQ0FBQzs7OztJQUVELGtEQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxhQUFhLENBQUMsS0FBSztZQUN6QixhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELGlDQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxZQUFvQjtRQUNsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELCtCQUFJOzs7OztJQUFKLFVBQUssR0FBUSxFQUFFLEdBQVE7UUFDdEIsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDOzs7Ozs7SUFFRCxpQ0FBTTs7Ozs7SUFBTixVQUFPLEtBQVUsRUFBRSxZQUFpQjtRQUNuQyxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELGlDQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxLQUFVO1FBQ3hDLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLElBQVM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUYsdUJBQUM7QUFBRCxDQUFDLEFBM0NELENBQXNDLFNBQVMsR0EyQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YUZpZWxkIH0gZnJvbSAnLi4vZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb2x1bW4vY29sdW1uLXN1bW1hcmllcy5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBVbmtub3duRGF0YUZpZWxkIGV4dGVuZHMgRGF0YUZpZWxkPGFueT4ge1xuXG5cdGNvbnN0cnVjdG9yKGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRzdW1tYXJpZXNDb25maWc/OiBDb2x1bW5TdW1tYXJpZXNDb25maWcpIHtcblx0XHRzdXBlcihcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0RGF0YVR5cGUuVU5LTk9XTixcblx0XHRcdG1hdGNoZXJzLFxuXHRcdFx0c3VtbWFyaWVzQ29uZmlnKTtcblx0fVxuXG5cdGFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIDA7XG5cdFx0Ly8gcmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlU3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuRElTVElOQ1Q7XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzb3J0KG9uZTogYW55LCB0d286IGFueSk6IG51bWJlciB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRmaWx0ZXIodmFsdWU6IGFueSwgZmlsdGVyUGhyYXNlOiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRlcXVhbHMoaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgdmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGdldERpc3BsYXlWYWx1ZShpdGVtOiBhbnkpOiBzdHJpbmcge1xuXHRcdHJldHVybiBpdGVtO1xuXHR9XG5cbn1cbiJdfQ==