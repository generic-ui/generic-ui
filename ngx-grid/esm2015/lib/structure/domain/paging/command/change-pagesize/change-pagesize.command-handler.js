/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { ChangePagesizeCommand } from './change-pagesize.command';
import { PageChangedEvent } from '../page/page-changed.event';
import { PagesizeChangedEvent } from './pagesize-changed.event';
export class ChangePagesizeCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        super(ChangePagesizeCommand);
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const newPageSize = (/** @type {?} */ (command.pageSize));
        /** @type {?} */
        const structureId = command.structureId;
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        const aggregateEvents = structure.changePageSize(newPageSize);
        // aggregateEvents => DomainEvents
        // DomainEvent
        // causationId -> aka commandId
        // correlationId -> actual or previous commandId
        // event publisher should take aggregate events
        // and convert them to domain events
        this.structureAggregateRepository.save(structure);
        // TODO
        ((/** @type {?} */ (aggregateEvents))).forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            ((/** @type {?} */ (event))).aggregateId = structureId;
        }));
        this.publishAggregateEvents(aggregateEvents, command);
    }
    /**
     * @private
     * @param {?} events
     * @param {?} command
     * @return {?}
     */
    publishAggregateEvents(events, command) {
        for (let event of events) {
            this.publishAggregateEvent(event, command);
        }
    }
    /**
     * @private
     * @param {?} event
     * @param {?} command
     * @return {?}
     */
    publishAggregateEvent(event, command) {
        switch (event.getType()) {
            case 'PageChangedAggregateEvent':
                /** @type {?} */
                const pageChangedEvent = new PageChangedEvent(command.getAggregateId());
                this.domainEventPublisher.publish(pageChangedEvent);
                break;
            case 'PagesizeChangedAggregateEvent':
                /** @type {?} */
                const pagesizeChangedEvent = new PagesizeChangedEvent(command.getAggregateId());
                this.domainEventPublisher.publish(pagesizeChangedEvent);
                break;
            default:
                break;
        }
    }
}
ChangePagesizeCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ChangePagesizeCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangePagesizeCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    ChangePagesizeCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL2NvbW1hbmQvY2hhbmdlLXBhZ2VzaXplL2NoYW5nZS1wYWdlc2l6ZS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBbUIsb0JBQW9CLEVBQWtCLE1BQU0sb0JBQW9CLENBQUM7QUFDM0csT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDekcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJaEUsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGNBQWM7Ozs7O0lBRS9ELFlBQW9CLDRCQUEwRCxFQUNqRSxvQkFBMEM7UUFDdEQsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFGVixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQ2pFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFFdkQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBOEI7O2NBRTlCLFdBQVcsR0FBRyxtQkFBQSxPQUFPLENBQUMsUUFBUSxFQUFVOztjQUM3QyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O2NBRTVCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7Y0FFbEUsZUFBZSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBRTdELGtDQUFrQztRQUVsQyxjQUFjO1FBQ2QsK0JBQStCO1FBQy9CLGdEQUFnRDtRQUVoRCwrQ0FBK0M7UUFDL0Msb0NBQW9DO1FBRXBDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsT0FBTztRQUNQLENBQUMsbUJBQUEsZUFBZSxFQUFPLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDMUQsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxNQUFxQyxFQUFFLE9BQThCO1FBRW5HLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDOzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsS0FBcUIsRUFBRSxPQUE4QjtRQUVsRixRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN4QixLQUFLLDJCQUEyQjs7c0JBRXpCLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV2RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBRXBELE1BQU07WUFFUCxLQUFLLCtCQUErQjs7c0JBRTdCLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUUvRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBRXhELE1BQU07WUFFUDtnQkFDQyxNQUFNO1NBQ1A7SUFDRixDQUFDOzs7WUFqRUQsVUFBVTs7OztZQU5GLDRCQUE0QjtZQURLLG9CQUFvQjs7Ozs7OztJQVVqRCxvRUFBa0U7Ozs7O0lBQzNFLDREQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIEV4ZWN1dGVSZXNwb25zZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ2hhbmdlUGFnZXNpemVDb21tYW5kIH0gZnJvbSAnLi9jaGFuZ2UtcGFnZXNpemUuY29tbWFuZCc7XG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vcGFnZS9wYWdlLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKENoYW5nZVBhZ2VzaXplQ29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IG5ld1BhZ2VTaXplID0gY29tbWFuZC5wYWdlU2l6ZSBhcyBudW1iZXIsXG5cdFx0XHRzdHJ1Y3R1cmVJZCA9IGNvbW1hbmQuc3RydWN0dXJlSWQ7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVFdmVudHMgPSBzdHJ1Y3R1cmUuY2hhbmdlUGFnZVNpemUobmV3UGFnZVNpemUpO1xuXG5cdFx0Ly8gYWdncmVnYXRlRXZlbnRzID0+IERvbWFpbkV2ZW50c1xuXG5cdFx0Ly8gRG9tYWluRXZlbnRcblx0XHQvLyBjYXVzYXRpb25JZCAtPiBha2EgY29tbWFuZElkXG5cdFx0Ly8gY29ycmVsYXRpb25JZCAtPiBhY3R1YWwgb3IgcHJldmlvdXMgY29tbWFuZElkXG5cblx0XHQvLyBldmVudCBwdWJsaXNoZXIgc2hvdWxkIHRha2UgYWdncmVnYXRlIGV2ZW50c1xuXHRcdC8vIGFuZCBjb252ZXJ0IHRoZW0gdG8gZG9tYWluIGV2ZW50c1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblxuXHRcdC8vIFRPRE9cblx0XHQoYWdncmVnYXRlRXZlbnRzIGFzIGFueSkuZm9yRWFjaCgoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50KSA9PiB7XG5cdFx0XHQoZXZlbnQgYXMgYW55KS5hZ2dyZWdhdGVJZCA9IHN0cnVjdHVyZUlkO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5wdWJsaXNoQWdncmVnYXRlRXZlbnRzKGFnZ3JlZ2F0ZUV2ZW50cywgY29tbWFuZCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoZXZlbnRzOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiwgY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRmb3IgKGxldCBldmVudCBvZiBldmVudHMpIHtcblx0XHRcdHRoaXMucHVibGlzaEFnZ3JlZ2F0ZUV2ZW50KGV2ZW50LCBjb21tYW5kKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudChldmVudDogQWdncmVnYXRlRXZlbnQsIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0c3dpdGNoIChldmVudC5nZXRUeXBlKCkpIHtcblx0XHRcdGNhc2UgJ1BhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQnOlxuXG5cdFx0XHRcdGNvbnN0IHBhZ2VDaGFuZ2VkRXZlbnQgPSBuZXcgUGFnZUNoYW5nZWRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChwYWdlQ2hhbmdlZEV2ZW50KTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQnOlxuXG5cdFx0XHRcdGNvbnN0IHBhZ2VzaXplQ2hhbmdlZEV2ZW50ID0gbmV3IFBhZ2VzaXplQ2hhbmdlZEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKHBhZ2VzaXplQ2hhbmdlZEV2ZW50KTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59XG4iXX0=