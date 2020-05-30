/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSearchPhraseCommand } from './set-search-phrase.command';
import { SearchPhraseSetDomainEvent } from './search-phrase-set.domain-event';
import { StructureSourceDomainEventPublisher } from '../../../../lib/structure/domain/source/structure.source.domain-event.publisher';
export class StructureSetSearchPhraseCommandHandler {
    /**
     * @param {?} structureSourceDomainEventPublisher
     * @param {?} domainEventPublisher
     */
    constructor(structureSourceDomainEventPublisher, domainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetSearchPhraseCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const phrase = command.getPhrase();
        /** @type {?} */
        const initial = command.isInitial();
        this.domainEventPublisher.publish(new SearchPhraseSetDomainEvent(command.getAggregateId(), phrase, initial));
        this.structureSourceDomainEventPublisher.publish(aggregate.getEvents());
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const phrase = command.getPhrase();
        aggregate.addSearchPhrase(phrase);
    }
}
StructureSetSearchPhraseCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSetSearchPhraseCommandHandler.ctorParameters = () => [
    { type: StructureSourceDomainEventPublisher },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetSearchPhraseCommandHandler.prototype.structureSourceDomainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    StructureSetSearchPhraseCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9kb21haW4vc2V0LXBocmFzZS9zdHJ1Y3R1cmUuc2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBa0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUt0SSxNQUFNLE9BQU8sc0NBQXNDOzs7OztJQUVsRCxZQUE2QixtQ0FBd0UsRUFDakYsb0JBQTBDO1FBRGpDLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDakYseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBNkIsRUFBRSxPQUErQjs7Y0FFM0UsTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7O2NBQ2pDLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRTlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsU0FBNkIsRUFBRSxPQUErQjs7Y0FFdkUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFbEMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUF6QkQsVUFBVTs7OztZQUpGLG1DQUFtQztZQUpuQixvQkFBb0I7Ozs7Ozs7SUFXaEMscUZBQXlGOzs7OztJQUNsRyxzRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldFNlYXJjaFBocmFzZUNvbW1hbmQgfSBmcm9tICcuL3NldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuL3NlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9zdHJ1Y3R1cmUuc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0U2VhcmNoUGhyYXNlQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXI6IFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBUeXBlPFNldFNlYXJjaFBocmFzZUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0U2VhcmNoUGhyYXNlQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNlYXJjaFBocmFzZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBocmFzZSA9IGNvbW1hbmQuZ2V0UGhyYXNlKCksXG5cdFx0XHRpbml0aWFsID0gY29tbWFuZC5pc0luaXRpYWwoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLCBwaHJhc2UsIGluaXRpYWwpKTtcblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goYWdncmVnYXRlLmdldEV2ZW50cygpKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0U2VhcmNoUGhyYXNlQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgcGhyYXNlID0gY29tbWFuZC5nZXRQaHJhc2UoKTtcblxuXHRcdGFnZ3JlZ2F0ZS5hZGRTZWFyY2hQaHJhc2UocGhyYXNlKTtcblx0fVxuXG59XG4iXX0=