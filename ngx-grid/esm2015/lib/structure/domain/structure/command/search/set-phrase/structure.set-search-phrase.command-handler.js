/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureSetSearchPhraseCommand } from './structure.set-search-phrase.command';
import { StructureSearchPhraseSetDomainEvent } from './structure.search-phrase-set.domain-event';
import { StructureSourceDomainEventPublisher } from '../../../../source/command/structure.source.domain-event.publisher';
export class StructureSetSearchPhraseCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} structureSourceDomainEventPublisher
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, structureSourceDomainEventPublisher, domainEventPublisher) {
        super(StructureSetSearchPhraseCommand);
        this.structureAggregateRepository = structureAggregateRepository;
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const structureId = command.structureId;
        /** @type {?} */
        const phrase = command.phrase;
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        structure.addSearchPhrase(phrase);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureSearchPhraseSetDomainEvent(structureId, phrase));
        this.structureSourceDomainEventPublisher.publish(structure.getEvents());
    }
}
StructureSetSearchPhraseCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSetSearchPhraseCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: StructureSourceDomainEventPublisher },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetSearchPhraseCommandHandler.prototype.structureAggregateRepository;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc2VhcmNoL3NldC1waHJhc2Uvc3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBSXpILE1BQU0sT0FBTyxzQ0FBdUMsU0FBUSxjQUFjOzs7Ozs7SUFFekUsWUFBNkIsNEJBQTBELEVBQzVFLG1DQUF3RSxFQUN4RSxvQkFBMEM7UUFDcEQsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFIWCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzVFLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDeEUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUVyRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUF3Qzs7Y0FFeEMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztjQUN0QyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU07O2NBQ3ZCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUVuRSxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLG1DQUFtQyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7O1lBcEJELFVBQVU7Ozs7WUFORiw0QkFBNEI7WUFHNUIsbUNBQW1DO1lBTG5CLG9CQUFvQjs7Ozs7OztJQVdoQyw4RUFBMkU7Ozs7O0lBQ3BGLHFGQUFnRjs7Ozs7SUFDaEYsc0VBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmQgfSBmcm9tICcuL3N0cnVjdHVyZS5zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvc3RydWN0dXJlLnNvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2V0U2VhcmNoUGhyYXNlQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyOiBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZCxcblx0XHRcdHBocmFzZSA9IGNvbW1hbmQucGhyYXNlLFxuXHRcdFx0c3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpO1xuXG5cdFx0c3RydWN0dXJlLmFkZFNlYXJjaFBocmFzZShwaHJhc2UpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KHN0cnVjdHVyZUlkLCBwaHJhc2UpKTtcblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goc3RydWN0dXJlLmdldEV2ZW50cygpKTtcblx0fVxuXG59XG4iXX0=