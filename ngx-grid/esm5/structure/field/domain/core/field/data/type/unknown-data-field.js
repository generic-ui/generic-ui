/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../core/domain/summaries/summaries.type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1kYXRhLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZGF0YS90eXBlL3Vua25vd24tZGF0YS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFLdkY7SUFBc0MsNENBQWM7SUFFbkQsMEJBQVksUUFBYSxFQUN0QixRQUF1QixFQUN2QixlQUF1QztlQUN6QyxrQkFDQyxRQUFRLEVBQ1IsUUFBUSxDQUFDLE9BQU8sRUFDaEIsUUFBUSxFQUNSLGVBQWUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsaURBQXNCOzs7SUFBdEI7UUFDQyxPQUFPLENBQUMsQ0FBQztRQUNULCtCQUErQjtRQUMvQiwyQkFBMkI7SUFDNUIsQ0FBQzs7OztJQUVELGtEQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxhQUFhLENBQUMsS0FBSztZQUN6QixhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELGlDQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxZQUFvQjtRQUNsRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELCtCQUFJOzs7OztJQUFKLFVBQUssR0FBUSxFQUFFLEdBQVE7UUFDdEIsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDOzs7Ozs7SUFFRCxpQ0FBTTs7Ozs7SUFBTixVQUFPLEtBQVUsRUFBRSxZQUFpQjtRQUNuQyxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELGlDQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxLQUFVO1FBQ3hDLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLElBQVM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUYsdUJBQUM7QUFBRCxDQUFDLEFBM0NELENBQXNDLFNBQVMsR0EyQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YUZpZWxkIH0gZnJvbSAnLi4vZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1zdW1tYXJpZXMuY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZGF0YS10eXBlJztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdW1tYXJpZXMvc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIFVua25vd25EYXRhRmllbGQgZXh0ZW5kcyBEYXRhRmllbGQ8YW55PiB7XG5cblx0Y29uc3RydWN0b3IoYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5VTktOT1dOLFxuXHRcdFx0bWF0Y2hlcnMsXG5cdFx0XHRzdW1tYXJpZXNDb25maWcpO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdFN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHNvcnQob25lOiBhbnksIHR3bzogYW55KTogbnVtYmVyIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGZpbHRlcih2YWx1ZTogYW55LCBmaWx0ZXJQaHJhc2U6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGVxdWFscyhpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCB2YWx1ZTogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Z2V0RGlzcGxheVZhbHVlKGl0ZW06IGFueSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGl0ZW07XG5cdH1cblxufVxuIl19