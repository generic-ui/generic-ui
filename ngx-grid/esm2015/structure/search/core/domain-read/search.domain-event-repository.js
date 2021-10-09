/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEventBus, hermesFilter, hermesMap } from '@generic-ui/hermes';
import { SearchPhraseSetDomainEvent } from '../domain/phrase/set-phrase/search-phrase-set.domain-event';
import { Injectable } from '@angular/core';
import { SearchEventRepository } from '../api/search.event-repository';
export class SearchDomainEventRepository extends SearchEventRepository {
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
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.isInitial() === false)), hermesMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getPhrase())), hermesFilter((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => phrase !== null)));
    }
}
SearchDomainEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchDomainEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvZG9tYWluLXJlYWQvc2VhcmNoLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFFL0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDeEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUd2RSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEscUJBQXFCOzs7O0lBRXJFLFlBQVksY0FBOEI7UUFDekMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQXFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsMEJBQTBCLENBQUM7YUFDdEQsSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxDQUFDLEtBQWlDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxLQUFLLEVBQUMsRUFDaEYsU0FBUzs7OztRQUFDLENBQUMsS0FBaUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFDLEVBQ25FLFlBQVk7Ozs7UUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksRUFBQyxDQUNqRCxDQUFDO0lBQ1IsQ0FBQzs7O1lBZEQsVUFBVTs7OztZQU5GLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudEJ1cywgaGVybWVzRmlsdGVyLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi9kb21haW4vcGhyYXNlL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uL2FwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hEb21haW5FdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBTZWFyY2hFdmVudFJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uU2VhcmNoUGhyYXNlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc3RydWN0dXJlSWQsIFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKGV2ZW50OiBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCkgPT4gZXZlbnQuaXNJbml0aWFsKCkgPT09IGZhbHNlKSxcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGV2ZW50OiBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCkgPT4gZXZlbnQuZ2V0UGhyYXNlKCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigocGhyYXNlOiBzdHJpbmcpID0+IHBocmFzZSAhPT0gbnVsbClcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIl19