/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { SearchPhraseSetDomainEvent } from '../domain/set-phrase/search-phrase-set.domain-event';
export class SearchEventRepository extends EventRepository {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super(domainEventBus);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSearchPhrase(structureId) {
        return this.onEvent(structureId, SearchPhraseSetDomainEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.isInitial() === false)), map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getPhrase())), filter((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => phrase !== null)));
    }
}
SearchEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFLakcsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGVBQXNEOzs7O0lBRWhHLFlBQVksY0FBOEI7UUFDekMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQXFDO1FBRW5ELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsMEJBQTBCLENBQUM7YUFDdEQsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEtBQWlDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxLQUFLLEVBQUMsRUFDMUUsR0FBRzs7OztRQUFDLENBQUMsS0FBaUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFDLEVBQzdELE1BQU07Ozs7UUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksRUFBQyxDQUMzQyxDQUFDO0lBQ1IsQ0FBQzs7O1lBZkQsVUFBVTs7OztZQVBGLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hFdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8U3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLCBTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uU2VhcmNoUGhyYXNlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChzdHJ1Y3R1cmVJZCwgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KSA9PiBldmVudC5pc0luaXRpYWwoKSA9PT0gZmFsc2UpLFxuXHRcdFx0XHRcdCAgIG1hcCgoZXZlbnQ6IFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KSA9PiBldmVudC5nZXRQaHJhc2UoKSksXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChwaHJhc2U6IHN0cmluZykgPT4gcGhyYXNlICE9PSBudWxsKVxuXHRcdFx0XHQgICApO1xuXHR9XG59XG4iXX0=