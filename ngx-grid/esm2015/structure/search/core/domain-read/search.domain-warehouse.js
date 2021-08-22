/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SearchingRepository } from '../api/enabled/searching.repository';
import { SearchPhraseRepository } from '../api/phrase/search-phrase.repository';
import { structureGlobalId } from '../../../core/api/structure.global-id';
import { Injectable } from '@angular/core';
import { SearchWarehouse } from '../api/search.warehouse';
export class SearchDomainWarehouse extends SearchWarehouse {
    /**
     * @param {?} structureSearchingRepository
     * @param {?} searchPhraseRepository
     */
    constructor(structureSearchingRepository, searchPhraseRepository) {
        super();
        this.structureSearchingRepository = structureSearchingRepository;
        this.searchPhraseRepository = searchPhraseRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSearchEnabled(structureId = structureGlobalId) {
        return this.structureSearchingRepository.onSearchingEnabled(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onPhrase(structureId = structureGlobalId) {
        return this.searchPhraseRepository.onPhrase(structureId);
    }
}
SearchDomainWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchDomainWarehouse.ctorParameters = () => [
    { type: SearchingRepository },
    { type: SearchPhraseRepository }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9kb21haW4tcmVhZC9zZWFyY2guZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFJMUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGVBQWU7Ozs7O0lBRXpELFlBQTZCLDRCQUFpRCxFQUMxRCxzQkFBOEM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFGb0IsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUFxQjtRQUMxRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBRWxFLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLGNBQTJCLGlCQUFpQjtRQUMzRCxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxjQUEyQixpQkFBaUI7UUFDcEQsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7OztZQWRELFVBQVU7Ozs7WUFURixtQkFBbUI7WUFDbkIsc0JBQXNCOzs7Ozs7O0lBV2xCLDZEQUFrRTs7Ozs7SUFDM0UsdURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uL2FwaS9lbmFibGVkL3NlYXJjaGluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9hcGkvcGhyYXNlL3NlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hEb21haW5XYXJlaG91c2UgZXh0ZW5kcyBTZWFyY2hXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeTogU2VhcmNoaW5nUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hQaHJhc2VSZXBvc2l0b3J5OiBTZWFyY2hQaHJhc2VSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uU2VhcmNoRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnkub25TZWFyY2hpbmdFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uUGhyYXNlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWFyY2hQaHJhc2VSZXBvc2l0b3J5Lm9uUGhyYXNlKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=