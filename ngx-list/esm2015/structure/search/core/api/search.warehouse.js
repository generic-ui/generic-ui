/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchingRepository } from './enabled/searching.repository';
import { structureGlobalId } from '../../../core/api/structure.global-id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2gud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBSTNFLE1BQU0sT0FBTyxlQUFlOzs7OztJQUUzQixZQUE2Qiw0QkFBaUQsRUFDMUQsc0JBQThDO1FBRHJDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBcUI7UUFDMUQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUNsRSxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxjQUEyQixpQkFBaUI7UUFDM0QsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsY0FBMkIsaUJBQWlCO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7WUFiRCxVQUFVOzs7O1lBTkYsbUJBQW1CO1lBR25CLHNCQUFzQjs7Ozs7OztJQU1sQix1REFBa0U7Ozs7O0lBQzNFLGlEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgV2FyZWhvdXNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2VhcmNoaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4vZW5hYmxlZC9zZWFyY2hpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4vcGhyYXNlL3NlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaFdhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5OiBTZWFyY2hpbmdSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFBocmFzZVJlcG9zaXRvcnk6IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uU2VhcmNoRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnkub25TZWFyY2hpbmdFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uUGhyYXNlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWFyY2hQaHJhc2VSZXBvc2l0b3J5Lm9uUGhyYXNlKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=