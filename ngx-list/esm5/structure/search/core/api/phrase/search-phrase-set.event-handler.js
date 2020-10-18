/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchPhraseRepository } from './search-phrase.repository';
import { SearchPhraseSetDomainEvent } from '../../domain/set-phrase/search-phrase-set.domain-event';
var SearchPhraseSetEventHandler = /** @class */ (function () {
    function SearchPhraseSetEventHandler(structureSearchPhraseRepository) {
        this.structureSearchPhraseRepository = structureSearchPhraseRepository;
    }
    /**
     * @return {?}
     */
    SearchPhraseSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return SearchPhraseSetDomainEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SearchPhraseSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('SearchPhraseSetDomainEvent')) {
            this.structureSearchPhraseRepository.setPhrase(event.getPhrase(), event.getAggregateId());
        }
    };
    SearchPhraseSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchPhraseSetEventHandler.ctorParameters = function () { return [
        { type: SearchPhraseRepository }
    ]; };
    return SearchPhraseSetEventHandler;
}());
export { SearchPhraseSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPhraseSetEventHandler.prototype.structureSearchPhraseRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9jb3JlL2FwaS9waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUlwRztJQUdDLHFDQUFvQiwrQkFBdUQ7UUFBdkQsb0NBQStCLEdBQS9CLCtCQUErQixDQUF3QjtJQUMzRSxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQ0MsT0FBTywwQkFBMEIsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELDRDQUFNOzs7O0lBQU4sVUFBTyxLQUFpQztRQUV2QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsK0JBQStCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUMxRjtJQUVGLENBQUM7O2dCQWhCRCxVQUFVOzs7O2dCQUxGLHNCQUFzQjs7SUF1Qi9CLGtDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksMkJBQTJCOzs7Ozs7SUFFM0Isc0VBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuL3NlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zZXQtcGhyYXNlL3NlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBocmFzZVNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnk6IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudD4ge1xuXHRcdHJldHVybiBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCcpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkuc2V0UGhyYXNlKGV2ZW50LmdldFBocmFzZSgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=