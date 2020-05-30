/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { SearchPhraseSetDomainEvent } from '../domain/set-phrase/search-phrase-set.domain-event';
var SearchEventRepository = /** @class */ (function () {
    function SearchEventRepository(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    SearchEventRepository.prototype.onSearchPhrase = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (SearchPhraseSetDomainEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toString(); })), filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.isInitial() === false; })), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getPhrase(); })), filter((/**
         * @param {?} phrase
         * @return {?}
         */
        function (phrase) { return phrase !== null; })));
    };
    SearchEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return SearchEventRepository;
}());
export { SearchEventRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchEventRepository.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUdqRztJQUdDLCtCQUE2QixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDM0QsQ0FBQzs7Ozs7SUFFRCw4Q0FBYzs7OztJQUFkLFVBQWUsV0FBd0I7UUFFdEMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsbUJBQUEsMEJBQTBCLEVBQU8sQ0FDakM7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBK0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQTVELENBQTRELEVBQUMsRUFDekcsTUFBTTs7OztRQUFDLFVBQUMsS0FBaUMsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxLQUFLLEVBQTNCLENBQTJCLEVBQUMsRUFDMUUsR0FBRzs7OztRQUFDLFVBQUMsS0FBaUMsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBakIsQ0FBaUIsRUFBQyxFQUM3RCxNQUFNOzs7O1FBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxNQUFNLEtBQUssSUFBSSxFQUFmLENBQWUsRUFBQyxDQUMzQyxDQUFDO0lBQ1IsQ0FBQzs7Z0JBbEJELFVBQVU7Ozs7Z0JBTlcsY0FBYzs7SUF5QnBDLDRCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlkscUJBQXFCOzs7Ozs7SUFFckIsK0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHR9XG5cblx0b25TZWFyY2hQaHJhc2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IGFzIGFueVxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCkgPT4gZXZlbnQuaXNJbml0aWFsKCkgPT09IGZhbHNlKSxcblx0XHRcdFx0XHQgICBtYXAoKGV2ZW50OiBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCkgPT4gZXZlbnQuZ2V0UGhyYXNlKCkpLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigocGhyYXNlOiBzdHJpbmcpID0+IHBocmFzZSAhPT0gbnVsbClcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIl19