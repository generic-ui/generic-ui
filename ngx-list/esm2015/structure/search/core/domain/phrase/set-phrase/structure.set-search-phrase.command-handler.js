/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSearchPhraseCommand } from './set-search-phrase.command';
import { SearchPhraseSetDomainEvent } from './search-phrase-set.domain-event';
import { SourceDomainEventPublisher } from '../../../../../source/core/domain/source.domain-event.publisher';
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
    handle(aggregate, command) {
        /** @type {?} */
        const phrase = command.getPhrase();
        aggregate.addSearchPhrase(phrase);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publish(aggregate, command) {
        /** @type {?} */
        const phrase = command.getPhrase();
        /** @type {?} */
        const initial = command.isInitial();
        this.domainEventPublisher.publish(new SearchPhraseSetDomainEvent(command.getAggregateId(), phrase, initial));
        this.structureSourceDomainEventPublisher.publish(aggregate.getEvents());
    }
}
StructureSetSearchPhraseCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSetSearchPhraseCommandHandler.ctorParameters = () => [
    { type: SourceDomainEventPublisher },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9jb3JlL2RvbWFpbi9waHJhc2Uvc2V0LXBocmFzZS9zdHJ1Y3R1cmUuc2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUs3RyxNQUFNLE9BQU8sc0NBQXNDOzs7OztJQUVsRCxZQUE2QixtQ0FBK0QsRUFDeEUsb0JBQTBDO1FBRGpDLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBNEI7UUFDeEUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFNBQTZCLEVBQUUsT0FBK0I7O2NBRTlELE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRWxDLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLFNBQTZCLEVBQUUsT0FBK0I7O2NBRS9ELE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFOztjQUNqQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUU5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksMEJBQTBCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdHLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7O1lBekJELFVBQVU7Ozs7WUFKRiwwQkFBMEI7WUFKRyxvQkFBb0I7Ozs7Ozs7SUFXN0MscUZBQWdGOzs7OztJQUN6RixzRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRTZWFyY2hQaHJhc2VDb21tYW5kIH0gZnJvbSAnLi9zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kJztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi9zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTZXRTZWFyY2hQaHJhc2VDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcjogU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldFNlYXJjaFBocmFzZUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0U2VhcmNoUGhyYXNlQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0U2VhcmNoUGhyYXNlQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgcGhyYXNlID0gY29tbWFuZC5nZXRQaHJhc2UoKTtcblxuXHRcdGFnZ3JlZ2F0ZS5hZGRTZWFyY2hQaHJhc2UocGhyYXNlKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNlYXJjaFBocmFzZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBocmFzZSA9IGNvbW1hbmQuZ2V0UGhyYXNlKCksXG5cdFx0XHRpbml0aWFsID0gY29tbWFuZC5pc0luaXRpYWwoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLCBwaHJhc2UsIGluaXRpYWwpKTtcblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goYWdncmVnYXRlLmdldEV2ZW50cygpKTtcblx0fVxuXG59XG4iXX0=