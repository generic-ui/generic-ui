/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchingRepository } from './enabled/searching.repository';
import { structureGlobalId } from '../../core/domain-api/structure.global-id';
import { SearchPhraseRepository } from './phrase/search-phrase.repository';
export class SearchWarehouse {
    /**
     * @param {?} structureSearchingRepository
     * @param {?} searchPhraseRepository
     */
    constructor(structureSearchingRepository, searchPhraseRepository) {
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
SearchWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchWarehouse.ctorParameters = () => [
    { type: SearchingRepository },
    { type: SearchPhraseRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchWarehouse.prototype.structureSearchingRepository;
    /**
     * @type {?}
     * @private
     */
    SearchWarehouse.prototype.searchPhraseRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFJM0UsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBRTNCLFlBQTZCLDRCQUFpRCxFQUMxRCxzQkFBOEM7UUFEckMsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUFxQjtRQUMxRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBQ2xFLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLGNBQTJCLGlCQUFpQjtRQUMzRCxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxjQUEyQixpQkFBaUI7UUFDcEQsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7OztZQWJELFVBQVU7Ozs7WUFORixtQkFBbUI7WUFHbkIsc0JBQXNCOzs7Ozs7O0lBTWxCLHVEQUFrRTs7Ozs7SUFDM0UsaURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi9lbmFibGVkL3NlYXJjaGluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4tYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4vcGhyYXNlL3NlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaFdhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5OiBTZWFyY2hpbmdSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFBocmFzZVJlcG9zaXRvcnk6IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uU2VhcmNoRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnkub25TZWFyY2hpbmdFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uUGhyYXNlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWFyY2hQaHJhc2VSZXBvc2l0b3J5Lm9uUGhyYXNlKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=