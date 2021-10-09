/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEventBus, hermesFilter, hermesMap } from '@generic-ui/hermes';
import { SearchPhraseSetDomainEvent } from '../domain/phrase/set-phrase/search-phrase-set.domain-event';
import { Injectable } from '@angular/core';
import { SearchEventRepository } from '../api/search.event-repository';
var SearchDomainEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SearchDomainEventRepository, _super);
    function SearchDomainEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    SearchDomainEventRepository.prototype.onSearchPhrase = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onEvent(structureId, SearchPhraseSetDomainEvent)
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.isInitial() === false; })), hermesMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getPhrase(); })), hermesFilter((/**
         * @param {?} phrase
         * @return {?}
         */
        function (phrase) { return phrase !== null; })));
    };
    SearchDomainEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchDomainEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return SearchDomainEventRepository;
}(SearchEventRepository));
export { SearchDomainEventRepository };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvZG9tYWluLXJlYWQvc2VhcmNoLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBRS9GLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdkU7SUFDaUQsdURBQXFCO0lBRXJFLHFDQUFZLGNBQThCO2VBQ3pDLGtCQUFNLGNBQWMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELG9EQUFjOzs7O0lBQWQsVUFBZSxXQUFxQztRQUNuRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLDBCQUEwQixDQUFDO2FBQ3RELElBQUksQ0FDSixZQUFZOzs7O1FBQUMsVUFBQyxLQUFpQyxJQUFLLE9BQUEsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLEtBQUssRUFBM0IsQ0FBMkIsRUFBQyxFQUNoRixTQUFTOzs7O1FBQUMsVUFBQyxLQUFpQyxJQUFLLE9BQUEsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFqQixDQUFpQixFQUFDLEVBQ25FLFlBQVk7Ozs7UUFBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sS0FBSyxJQUFJLEVBQWYsQ0FBZSxFQUFDLENBQ2pELENBQUM7SUFDUixDQUFDOztnQkFkRCxVQUFVOzs7O2dCQU5GLGNBQWM7O0lBcUJ2QixrQ0FBQztDQUFBLEFBZkQsQ0FDaUQscUJBQXFCLEdBY3JFO1NBZFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIGhlcm1lc0ZpbHRlciwgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3BocmFzZS9zZXQtcGhyYXNlL3NlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi9hcGkvc2VhcmNoLmV2ZW50LXJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoRG9tYWluRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cdH1cblxuXHRvblNlYXJjaFBocmFzZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KHN0cnVjdHVyZUlkLCBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKChldmVudDogU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQpID0+IGV2ZW50LmlzSW5pdGlhbCgpID09PSBmYWxzZSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChldmVudDogU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQpID0+IGV2ZW50LmdldFBocmFzZSgpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKHBocmFzZTogc3RyaW5nKSA9PiBwaHJhc2UgIT09IG51bGwpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==