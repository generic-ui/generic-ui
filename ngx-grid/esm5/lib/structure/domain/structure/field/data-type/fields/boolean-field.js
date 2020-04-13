/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from '../field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../summaries/summaries.type';
var BooleanField = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanField, _super);
    function BooleanField(id, accessor, matchers, summariesConfig) {
        return _super.call(this, id, accessor, DataType.BOOLEAN, matchers, summariesConfig) || this;
    }
    /**
     * @return {?}
     */
    BooleanField.prototype.assignDefaultSummaries = /**
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
    BooleanField.prototype.assignPossibleSummaries = /**
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
    BooleanField.prototype.search = /**
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
    BooleanField.prototype.sort = /**
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
    BooleanField.prototype.filter = /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    function (value, filterPhrase) {
        return value === filterPhrase;
    };
    return BooleanField;
}(Field));
export { BooleanField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZHMvYm9vbGVhbi1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLbEU7SUFBa0Msd0NBQWM7SUFFL0Msc0JBQVksRUFBVyxFQUNwQixRQUFhLEVBQ2IsUUFBdUIsRUFDdkIsZUFBdUM7ZUFDekMsa0JBQU0sRUFBRSxFQUNQLFFBQVEsRUFDUixRQUFRLENBQUMsT0FBTyxFQUNoQixRQUFRLEVBQ1IsZUFBZSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCw2Q0FBc0I7OztJQUF0QjtRQUNDLE9BQU8sQ0FBQyxDQUFDO1FBQ1QsK0JBQStCO1FBQy9CLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsd0JBQXdCO0lBQ3pCLENBQUM7Ozs7SUFFRCw4Q0FBdUI7OztJQUF2QjtRQUNDLE9BQU8sYUFBYSxDQUFDLEtBQUs7WUFDekIsYUFBYSxDQUFDLFFBQVE7WUFDdEIsYUFBYSxDQUFDLE1BQU07WUFDcEIsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFFRCw2QkFBTTs7Ozs7SUFBTixVQUFPLElBQXNCLEVBQUUsWUFBb0I7UUFDbEQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCwyQkFBSTs7Ozs7SUFBSixVQUFLLFVBQW1CLEVBQUUsVUFBbUI7O1lBRXRDLFdBQVcsR0FBRyxDQUFDLENBQUMsVUFBVTs7WUFDL0IsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVO1FBRTNCLE9BQU8sQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQUVELDZCQUFNOzs7OztJQUFOLFVBQU8sS0FBYyxFQUFFLFlBQXFCO1FBQzNDLE9BQU8sS0FBSyxLQUFLLFlBQVksQ0FBQztJQUMvQixDQUFDO0lBRUYsbUJBQUM7QUFBRCxDQUFDLEFBNUNELENBQWtDLEtBQUssR0E0Q3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc3VtbWFyaWVzL3N1bW1hcmllcy50eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5GaWVsZCBleHRlbmRzIEZpZWxkPGJvb2xlYW4+IHtcblxuXHRjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0YWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKGlkLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5CT09MRUFOLFxuXHRcdFx0bWF0Y2hlcnMsXG5cdFx0XHRzdW1tYXJpZXNDb25maWcpO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdFN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuVFJVVEhZIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuRkFMU1k7XG5cdH1cblxuXHRhc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuVFJVVEhZIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuRkFMU1k7XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzb3J0KGJvb2xlYW5PbmU6IGJvb2xlYW4sIGJvb2xlYW5Ud286IGJvb2xlYW4pOiBudW1iZXIge1xuXG5cdFx0Y29uc3Qgc3VyZUJvb2xPbmUgPSAhIWJvb2xlYW5PbmUsXG5cdFx0XHRzdXJlQm9vbFR3byA9ICEhYm9vbGVhblR3bztcblxuXHRcdHJldHVybiAoc3VyZUJvb2xPbmUgPT09IHN1cmVCb29sVHdvKSA/IDAgOiBzdXJlQm9vbFR3byA/IC0xIDogMTtcblx0fVxuXG5cdGZpbHRlcih2YWx1ZTogYm9vbGVhbiwgZmlsdGVyUGhyYXNlOiBib29sZWFuKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHZhbHVlID09PSBmaWx0ZXJQaHJhc2U7XG5cdH1cblxufVxuIl19