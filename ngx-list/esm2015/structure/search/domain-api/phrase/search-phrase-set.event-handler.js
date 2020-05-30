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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3BocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBSWpELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBS3BHLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFFdkMsWUFBb0IsK0JBQXVEO1FBQXZELG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBd0I7SUFDM0UsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLDBCQUEwQixDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWlDO1FBRXZDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQzFGO0lBRUYsQ0FBQzs7O1lBaEJELFVBQVU7Ozs7WUFMRixzQkFBc0I7Ozs7Ozs7SUFRbEIsc0VBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi9zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vc2V0LXBocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hQaHJhc2VTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5OiBTZWFyY2hQaHJhc2VSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBUeXBlPFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50PiB7XG5cdFx0cmV0dXJuIFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1NlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50JykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeS5zZXRQaHJhc2UoZXZlbnQuZ2V0UGhyYXNlKCksIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==