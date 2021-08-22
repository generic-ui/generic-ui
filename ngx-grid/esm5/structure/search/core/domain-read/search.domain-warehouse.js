/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SearchingRepository } from '../api/enabled/searching.repository';
import { SearchPhraseRepository } from '../api/phrase/search-phrase.repository';
import { structureGlobalId } from '../../../core/api/structure.global-id';
import { Injectable } from '@angular/core';
import { SearchWarehouse } from '../api/search.warehouse';
var SearchDomainWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(SearchDomainWarehouse, _super);
    function SearchDomainWarehouse(structureSearchingRepository, searchPhraseRepository) {
        var _this = _super.call(this) || this;
        _this.structureSearchingRepository = structureSearchingRepository;
        _this.searchPhraseRepository = searchPhraseRepository;
        return _this;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SearchDomainWarehouse.prototype.onSearchEnabled = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structureSearchingRepository.onSearchingEnabled(structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SearchDomainWarehouse.prototype.onPhrase = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.searchPhraseRepository.onPhrase(structureId);
    };
    SearchDomainWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchDomainWarehouse.ctorParameters = function () { return [
        { type: SearchingRepository },
        { type: SearchPhraseRepository }
    ]; };
    return SearchDomainWarehouse;
}(SearchWarehouse));
export { SearchDomainWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchDomainWarehouse.prototype.structureSearchingRepository;
    /**
     * @type {?}
     * @private
     */
    SearchDomainWarehouse.prototype.searchPhraseRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9kb21haW4tcmVhZC9zZWFyY2guZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWhGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzFEO0lBQzJDLGlEQUFlO0lBRXpELCtCQUE2Qiw0QkFBaUQsRUFDMUQsc0JBQThDO1FBRGxFLFlBRUMsaUJBQU8sU0FDUDtRQUg0QixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQXFCO1FBQzFELDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7O0lBRWxFLENBQUM7Ozs7O0lBRUQsK0NBQWU7Ozs7SUFBZixVQUFnQixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMzRCxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVELHdDQUFROzs7O0lBQVIsVUFBUyxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNwRCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBZEQsVUFBVTs7OztnQkFURixtQkFBbUI7Z0JBQ25CLHNCQUFzQjs7SUF3Qi9CLDRCQUFDO0NBQUEsQUFoQkQsQ0FDMkMsZUFBZSxHQWV6RDtTQWZZLHFCQUFxQjs7Ozs7O0lBRXJCLDZEQUFrRTs7Ozs7SUFDM0UsdURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uL2FwaS9lbmFibGVkL3NlYXJjaGluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9hcGkvcGhyYXNlL3NlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hEb21haW5XYXJlaG91c2UgZXh0ZW5kcyBTZWFyY2hXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeTogU2VhcmNoaW5nUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hQaHJhc2VSZXBvc2l0b3J5OiBTZWFyY2hQaHJhc2VSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uU2VhcmNoRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnkub25TZWFyY2hpbmdFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uUGhyYXNlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWFyY2hQaHJhc2VSZXBvc2l0b3J5Lm9uUGhyYXNlKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=