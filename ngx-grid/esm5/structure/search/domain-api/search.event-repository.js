/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { SearchPhraseSetDomainEvent } from '../domain/set-phrase/search-phrase-set.domain-event';
var SearchEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SearchEventRepository, _super);
    function SearchEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
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
        return this.onEvent(structureId, SearchPhraseSetDomainEvent)
            .pipe(filter((/**
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
}(EventRepository));
export { SearchEventRepository };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBSWpHO0lBQzJDLGlEQUFzRDtJQUVoRywrQkFBWSxjQUE4QjtlQUN6QyxrQkFBTSxjQUFjLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCw4Q0FBYzs7OztJQUFkLFVBQWUsV0FBcUM7UUFFbkQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSwwQkFBMEIsQ0FBQzthQUN0RCxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBaUMsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxLQUFLLEVBQTNCLENBQTJCLEVBQUMsRUFDMUUsR0FBRzs7OztRQUFDLFVBQUMsS0FBaUMsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBakIsQ0FBaUIsRUFBQyxFQUM3RCxNQUFNOzs7O1FBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxNQUFNLEtBQUssSUFBSSxFQUFmLENBQWUsRUFBQyxDQUMzQyxDQUFDO0lBQ1IsQ0FBQzs7Z0JBZkQsVUFBVTs7OztnQkFQRixjQUFjOztJQXVCdkIsNEJBQUM7Q0FBQSxBQWhCRCxDQUMyQyxlQUFlLEdBZXpEO1NBZlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzLCBFdmVudFJlcG9zaXRvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi9zZXQtcGhyYXNlL3NlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCwgU3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cdH1cblxuXHRvblNlYXJjaFBocmFzZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc3RydWN0dXJlSWQsIFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCkgPT4gZXZlbnQuaXNJbml0aWFsKCkgPT09IGZhbHNlKSxcblx0XHRcdFx0XHQgICBtYXAoKGV2ZW50OiBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCkgPT4gZXZlbnQuZ2V0UGhyYXNlKCkpLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigocGhyYXNlOiBzdHJpbmcpID0+IHBocmFzZSAhPT0gbnVsbClcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIl19