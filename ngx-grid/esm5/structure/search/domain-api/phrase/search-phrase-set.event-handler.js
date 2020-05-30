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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3BocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBSWpELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBSXBHO0lBR0MscUNBQW9CLCtCQUF1RDtRQUF2RCxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQXdCO0lBQzNFLENBQUM7Ozs7SUFFRCw4Q0FBUTs7O0lBQVI7UUFDQyxPQUFPLDBCQUEwQixDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsNENBQU07Ozs7SUFBTixVQUFPLEtBQWlDO1FBRXZDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQzFGO0lBRUYsQ0FBQzs7Z0JBaEJELFVBQVU7Ozs7Z0JBTEYsc0JBQXNCOztJQXVCL0Isa0NBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSwyQkFBMkI7Ozs7OztJQUUzQixzRUFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuL3NlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zZXQtcGhyYXNlL3NlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBocmFzZVNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnk6IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IFR5cGU8U2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQ+IHtcblx0XHRyZXR1cm4gU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQnKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5LnNldFBocmFzZShldmVudC5nZXRQaHJhc2UoKSwgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19