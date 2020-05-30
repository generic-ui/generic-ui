/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSearchPhraseCommand } from './set-search-phrase.command';
import { SearchPhraseSetDomainEvent } from './search-phrase-set.domain-event';
import { StructureSourceDomainEventPublisher } from '../../../../lib/structure/domain/source/structure.source.domain-event.publisher';
var StructureSetSearchPhraseCommandHandler = /** @class */ (function () {
    function StructureSetSearchPhraseCommandHandler(structureSourceDomainEventPublisher, domainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    StructureSetSearchPhraseCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetSearchPhraseCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureSetSearchPhraseCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var phrase = command.getPhrase();
        /** @type {?} */
        var initial = command.isInitial();
        this.domainEventPublisher.publish(new SearchPhraseSetDomainEvent(command.getAggregateId(), phrase, initial));
        this.structureSourceDomainEventPublisher.publish(aggregate.getEvents());
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureSetSearchPhraseCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var phrase = command.getPhrase();
        aggregate.addSearchPhrase(phrase);
    };
    StructureSetSearchPhraseCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetSearchPhraseCommandHandler.ctorParameters = function () { return [
        { type: StructureSourceDomainEventPublisher },
        { type: DomainEventPublisher }
    ]; };
    return StructureSetSearchPhraseCommandHandler;
}());
export { StructureSetSearchPhraseCommandHandler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9kb21haW4vc2V0LXBocmFzZS9zdHJ1Y3R1cmUuc2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBa0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUl0STtJQUdDLGdEQUE2QixtQ0FBd0UsRUFDakYsb0JBQTBDO1FBRGpDLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDakYseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsMkRBQVU7OztJQUFWO1FBQ0MsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCxvRUFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBK0I7O1lBRTNFLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFOztZQUNqQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUU5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksMEJBQTBCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdHLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7O0lBRUQsZ0VBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBNkIsRUFBRSxPQUErQjs7WUFFdkUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFbEMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkF6QkQsVUFBVTs7OztnQkFKRixtQ0FBbUM7Z0JBSm5CLG9CQUFvQjs7SUFtQzdDLDZDQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksc0NBQXNDOzs7Ozs7SUFFdEMscUZBQXlGOzs7OztJQUNsRyxzRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldFNlYXJjaFBocmFzZUNvbW1hbmQgfSBmcm9tICcuL3NldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuL3NlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9zdHJ1Y3R1cmUuc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0U2VhcmNoUGhyYXNlQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXI6IFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBUeXBlPFNldFNlYXJjaFBocmFzZUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0U2VhcmNoUGhyYXNlQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNlYXJjaFBocmFzZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBocmFzZSA9IGNvbW1hbmQuZ2V0UGhyYXNlKCksXG5cdFx0XHRpbml0aWFsID0gY29tbWFuZC5pc0luaXRpYWwoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLCBwaHJhc2UsIGluaXRpYWwpKTtcblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goYWdncmVnYXRlLmdldEV2ZW50cygpKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0U2VhcmNoUGhyYXNlQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgcGhyYXNlID0gY29tbWFuZC5nZXRQaHJhc2UoKTtcblxuXHRcdGFnZ3JlZ2F0ZS5hZGRTZWFyY2hQaHJhc2UocGhyYXNlKTtcblx0fVxuXG59XG4iXX0=