/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { structureGlobalId } from '../../../lib/structure/domain-api/structure.global-id';
import { SearchDispatcher } from '../domain/search.dispatcher';
export class SearchCommandDispatcher {
    /**
     * @param {?} searchDispatcher
     */
    constructor(searchDispatcher) {
        this.searchDispatcher = searchDispatcher;
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSearchingConfig(config, structureId = structureGlobalId) {
        this.searchDispatcher.setSearchingConfig(config, structureId);
    }
    /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    search(phrase, structureId = structureGlobalId) {
        this.searchDispatcher.search(phrase, structureId);
    }
}
SearchCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchCommandDispatcher.ctorParameters = () => [
    { type: SearchDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchCommandDispatcher.prototype.searchDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJL0QsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUVuQyxZQUE2QixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMvRCxDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxNQUFvQixFQUFFLGNBQTJCLGlCQUFpQjtRQUNwRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7OztZQVpELFVBQVU7Ozs7WUFIRixnQkFBZ0I7Ozs7Ozs7SUFNWixtREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaERpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vc2VhcmNoLmRpc3BhdGNoZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzZWFyY2hEaXNwYXRjaGVyOiBTZWFyY2hEaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hEaXNwYXRjaGVyLnNldFNlYXJjaGluZ0NvbmZpZyhjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaERpc3BhdGNoZXIuc2VhcmNoKHBocmFzZSwgc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=