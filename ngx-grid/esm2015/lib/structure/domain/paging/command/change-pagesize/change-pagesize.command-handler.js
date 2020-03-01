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
        super(ChangePagesizeCommand, null, null, structureAggregateRepository);
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} structureAggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structureAggregate, command) {
        /** @type {?} */
        const pageSize = command.getPageSize();
        structureAggregate.changePageSize(pageSize);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const aggregateEvents = aggregate.getEvents();
        ((/** @type {?} */ (aggregateEvents))).forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            ((/** @type {?} */ (event))).aggregateId = aggregate.getId();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL2NvbW1hbmQvY2hhbmdlLXBhZ2VzaXplL2NoYW5nZS1wYWdlc2l6ZS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFrQixjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDM0csT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDekcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPaEUsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGNBQWtDOzs7OztJQUVuRixZQUFvQiw0QkFBMEQsRUFDakUsb0JBQTBDO1FBQ3RELEtBQUssQ0FBQyxxQkFBcUIsRUFDMUIsSUFBSSxFQUNKLElBQUksRUFDSiw0QkFBNEIsQ0FBQyxDQUFDO1FBTFosaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUNqRSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBS3ZELENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxrQkFBc0MsRUFBRSxPQUE4Qjs7Y0FFL0UsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUU7UUFFdEMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLFNBQTZCLEVBQUUsT0FBOEI7O2NBRTFFLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFO1FBRTdDLENBQUMsbUJBQUEsZUFBZSxFQUFPLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDMUQsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxNQUFxQyxFQUFFLE9BQThCO1FBRW5HLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDOzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsS0FBcUIsRUFBRSxPQUE4QjtRQUVsRixRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN4QixLQUFLLDJCQUEyQjs7c0JBRXpCLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV2RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBRXBELE1BQU07WUFFUCxLQUFLLCtCQUErQjs7c0JBRTdCLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUUvRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBRXhELE1BQU07WUFFUDtnQkFDQyxNQUFNO1NBQ1A7SUFDRixDQUFDOzs7WUExREQsVUFBVTs7OztZQVRGLDRCQUE0QjtZQURJLG9CQUFvQjs7Ozs7OztJQWFoRCxvRUFBa0U7Ozs7O0lBQzNFLDREQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ2hhbmdlUGFnZXNpemVDb21tYW5kIH0gZnJvbSAnLi9jaGFuZ2UtcGFnZXNpemUuY29tbWFuZCc7XG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vcGFnZS9wYWdlLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTZXRQYWdpbmdDb21tYW5kIH0gZnJvbSAnLi4vc2V0L3NldC1wYWdpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBQYWdpbmdTZXRFdmVudCB9IGZyb20gJy4uL3NldC9wYWdpbmctc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFnZXNpemVDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKENoYW5nZVBhZ2VzaXplQ29tbWFuZCxcblx0XHRcdG51bGwsXG5cdFx0XHRudWxsLFxuXHRcdFx0c3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc3RydWN0dXJlQWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgcGFnZVNpemUgPSBjb21tYW5kLmdldFBhZ2VTaXplKCk7XG5cblx0XHRzdHJ1Y3R1cmVBZ2dyZWdhdGUuY2hhbmdlUGFnZVNpemUocGFnZVNpemUpO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVFdmVudHMgPSBhZ2dyZWdhdGUuZ2V0RXZlbnRzKCk7XG5cblx0XHQoYWdncmVnYXRlRXZlbnRzIGFzIGFueSkuZm9yRWFjaCgoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50KSA9PiB7XG5cdFx0XHQoZXZlbnQgYXMgYW55KS5hZ2dyZWdhdGVJZCA9IGFnZ3JlZ2F0ZS5nZXRJZCgpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5wdWJsaXNoQWdncmVnYXRlRXZlbnRzKGFnZ3JlZ2F0ZUV2ZW50cywgY29tbWFuZCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoZXZlbnRzOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiwgY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRmb3IgKGxldCBldmVudCBvZiBldmVudHMpIHtcblx0XHRcdHRoaXMucHVibGlzaEFnZ3JlZ2F0ZUV2ZW50KGV2ZW50LCBjb21tYW5kKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudChldmVudDogQWdncmVnYXRlRXZlbnQsIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0c3dpdGNoIChldmVudC5nZXRUeXBlKCkpIHtcblx0XHRcdGNhc2UgJ1BhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQnOlxuXG5cdFx0XHRcdGNvbnN0IHBhZ2VDaGFuZ2VkRXZlbnQgPSBuZXcgUGFnZUNoYW5nZWRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChwYWdlQ2hhbmdlZEV2ZW50KTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQnOlxuXG5cdFx0XHRcdGNvbnN0IHBhZ2VzaXplQ2hhbmdlZEV2ZW50ID0gbmV3IFBhZ2VzaXplQ2hhbmdlZEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKHBhZ2VzaXplQ2hhbmdlZEV2ZW50KTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59XG4iXX0=