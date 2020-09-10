/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchPhraseRepository } from './search-phrase.repository';
import { SearchPhraseSetDomainEvent } from '../../domain/set-phrase/search-phrase-set.domain-event';
export class SearchPhraseSetEventHandler {
    /**
     * @param {?} structureSearchPhraseRepository
     */
    constructor(structureSearchPhraseRepository) {
        this.structureSearchPhraseRepository = structureSearchPhraseRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return SearchPhraseSetDomainEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('SearchPhraseSetDomainEvent')) {
            this.structureSearchPhraseRepository.setPhrase(event.getPhrase(), event.getAggregateId());
        }
    }
}
SearchPhraseSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchPhraseSetEventHandler.ctorParameters = () => [
    { type: SearchPhraseRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPhraseSetEventHandler.prototype.structureSearchPhraseRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3BocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBS3BHLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFFdkMsWUFBb0IsK0JBQXVEO1FBQXZELG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBd0I7SUFDM0UsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLDBCQUEwQixDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWlDO1FBRXZDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQzFGO0lBRUYsQ0FBQzs7O1lBaEJELFVBQVU7Ozs7WUFMRixzQkFBc0I7Ozs7Ozs7SUFRbEIsc0VBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuL3NlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zZXQtcGhyYXNlL3NlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBocmFzZVNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnk6IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudD4ge1xuXHRcdHJldHVybiBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCcpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkuc2V0UGhyYXNlKGV2ZW50LmdldFBocmFzZSgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=