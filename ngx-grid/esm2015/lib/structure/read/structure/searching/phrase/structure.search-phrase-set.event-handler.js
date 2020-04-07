/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSearchPhraseRepository } from './structure.search-phrase.repository';
import { StructureSearchPhraseSetDomainEvent } from '../../../../domain/structure/search/set-phrase/structure.search-phrase-set.domain-event';
export class StructureSearchPhraseSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureSearchPhraseRepository
     */
    constructor(structureSearchPhraseRepository) {
        super();
        this.structureSearchPhraseRepository = structureSearchPhraseRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof StructureSearchPhraseSetDomainEvent) {
            this.structureSearchPhraseRepository.setPhrase(event.getPhrase(), event.getAggregateId());
        }
    }
}
StructureSearchPhraseSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSearchPhraseSetEventHandler.ctorParameters = () => [
    { type: StructureSearchPhraseRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchPhraseSetEventHandler.prototype.structureSearchPhraseRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1waHJhc2Utc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUvc2VhcmNoaW5nL3BocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQztBQUk5SSxNQUFNLE9BQU8sb0NBQXFDLFNBQVEsa0JBQWtCOzs7O0lBRTNFLFlBQW9CLCtCQUFnRTtRQUNuRixLQUFLLEVBQUUsQ0FBQztRQURXLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7SUFFcEYsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBMEM7UUFFaEQsSUFBSSxLQUFLLFlBQVksbUNBQW1DLEVBQUU7WUFDekQsSUFBSSxDQUFDLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDMUY7SUFFRixDQUFDOzs7WUFiRCxVQUFVOzs7O1lBSkYsK0JBQStCOzs7Ozs7O0lBTzNCLCtFQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4vc3RydWN0dXJlLnNlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc2VhcmNoL3NldC1waHJhc2Uvc3RydWN0dXJlLnNlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkuc2V0UGhyYXNlKGV2ZW50LmdldFBocmFzZSgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=