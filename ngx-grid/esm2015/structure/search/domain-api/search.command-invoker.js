/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { structureGlobalId } from '../../core/domain-api/structure.global-id';
import { SearchDispatcher } from '../domain/search.dispatcher';
export class SearchCommandInvoker {
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
SearchCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchCommandInvoker.ctorParameters = () => [
    { type: SearchDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchCommandInvoker.prototype.searchDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJL0QsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUVoQyxZQUE2QixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMvRCxDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxNQUFvQixFQUFFLGNBQTJCLGlCQUFpQjtRQUNwRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7OztZQVpELFVBQVU7Ozs7WUFIRixnQkFBZ0I7Ozs7Ozs7SUFNWixnREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRJbnZva2VyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9zZWFyY2guZGlzcGF0Y2hlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoRGlzcGF0Y2hlcjogU2VhcmNoRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZzogU2VhcmNoQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRGlzcGF0Y2hlci5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hEaXNwYXRjaGVyLnNlYXJjaChwaHJhc2UsIHN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19