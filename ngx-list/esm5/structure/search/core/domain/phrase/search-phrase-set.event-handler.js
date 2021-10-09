/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchPhraseArchive } from './search-phrase.archive';
import { SearchPhraseSetDomainEvent } from './set-phrase/search-phrase-set.domain-event';
var SearchPhraseSetEventHandler = /** @class */ (function () {
    function SearchPhraseSetEventHandler(searchPhraseRepository) {
        this.searchPhraseRepository = searchPhraseRepository;
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
            this.searchPhraseRepository.next(event.getAggregateId(), event.getPhrase());
        }
    };
    SearchPhraseSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchPhraseSetEventHandler.ctorParameters = function () { return [
        { type: SearchPhraseArchive }
    ]; };
    return SearchPhraseSetEventHandler;
}());
export { SearchPhraseSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPhraseSetEventHandler.prototype.searchPhraseRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9jb3JlL2RvbWFpbi9waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUl6RjtJQUdDLHFDQUE2QixzQkFBMkM7UUFBM0MsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFxQjtJQUN4RSxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQ0MsT0FBTywwQkFBMEIsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELDRDQUFNOzs7O0lBQU4sVUFBTyxLQUFpQztRQUV2QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUM1RTtJQUNGLENBQUM7O2dCQWZELFVBQVU7Ozs7Z0JBTEYsbUJBQW1COztJQXNCNUIsa0NBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWhCWSwyQkFBMkI7Ozs7OztJQUUzQiw2REFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2VhcmNoUGhyYXNlQXJjaGl2ZSB9IGZyb20gJy4vc2VhcmNoLXBocmFzZS5hcmNoaXZlJztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi9zZXQtcGhyYXNlL3NlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBocmFzZVNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFBocmFzZVJlcG9zaXRvcnk6IFNlYXJjaFBocmFzZUFyY2hpdmUpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudD4ge1xuXHRcdHJldHVybiBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCcpKSB7XG5cdFx0XHR0aGlzLnNlYXJjaFBocmFzZVJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRQaHJhc2UoKSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==