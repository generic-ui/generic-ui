/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { ChangePagesizeCommand } from './change-pagesize.command';
import { PageChangedEvent } from '../page/page-changed.event';
import { PagesizeChangedEvent } from './pagesize-changed.event';
export class ChangePagesizeCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return ChangePagesizeCommand;
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
        aggregate.clearEvents();
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
            case 'StructurePreparedEntitiesSetAggregateEvent':
                this.domainEventPublisher.publish(event.toDomainEvent());
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
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ChangePagesizeCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9jb3JlL2RvbWFpbi9jaGFuZ2UtcGFnZXNpemUvY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStDLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNaEUsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQUV4QyxZQUFzQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNoRSxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLGtCQUFzQyxFQUFFLE9BQThCOztjQUUvRSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTtRQUV0QyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBNkIsRUFBRSxPQUE4Qjs7Y0FFMUUsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFFN0MsQ0FBQyxtQkFBQSxlQUFlLEVBQU8sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEtBQWtDLEVBQUUsRUFBRTtZQUN2RSxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEQsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxNQUFrRCxFQUFFLE9BQThCO1FBRWhILEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDOzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsS0FBa0MsRUFBRSxPQUE4QjtRQUUvRixRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN4QixLQUFLLDJCQUEyQjs7c0JBRXpCLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV2RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBRXBELE1BQU07WUFFUCxLQUFLLCtCQUErQjs7c0JBRTdCLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUUvRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBRXhELE1BQU07WUFFUCxLQUFLLDRDQUE0QztnQkFFaEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztnQkFFekQsTUFBTTtZQUVQO2dCQUNDLE1BQU07U0FDUDtJQUNGLENBQUM7OztZQWpFRCxVQUFVOzs7O1lBVDJDLG9CQUFvQjs7Ozs7OztJQVk3RCw0REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ2hhbmdlUGFnZXNpemVDb21tYW5kIH0gZnJvbSAnLi9jaGFuZ2UtcGFnZXNpemUuY29tbWFuZCc7XG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vcGFnZS9wYWdlLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYW5nZVBhZ2VzaXplQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIENoYW5nZVBhZ2VzaXplQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8Q2hhbmdlUGFnZXNpemVDb21tYW5kPiB7XG5cdFx0cmV0dXJuIENoYW5nZVBhZ2VzaXplQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmVBZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBwYWdlU2l6ZSA9IGNvbW1hbmQuZ2V0UGFnZVNpemUoKTtcblxuXHRcdHN0cnVjdHVyZUFnZ3JlZ2F0ZS5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUV2ZW50cyA9IGFnZ3JlZ2F0ZS5nZXRFdmVudHMoKTtcblxuXHRcdChhZ2dyZWdhdGVFdmVudHMgYXMgYW55KS5mb3JFYWNoKChldmVudDogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiB7XG5cdFx0XHQoZXZlbnQgYXMgYW55KS5hZ2dyZWdhdGVJZCA9IGFnZ3JlZ2F0ZS5nZXRJZCgpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5wdWJsaXNoQWdncmVnYXRlRXZlbnRzKGFnZ3JlZ2F0ZUV2ZW50cywgY29tbWFuZCk7XG5cblx0XHRhZ2dyZWdhdGUuY2xlYXJFdmVudHMoKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEFnZ3JlZ2F0ZUV2ZW50cyhldmVudHM6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiwgY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRmb3IgKGxldCBldmVudCBvZiBldmVudHMpIHtcblx0XHRcdHRoaXMucHVibGlzaEFnZ3JlZ2F0ZUV2ZW50KGV2ZW50LCBjb21tYW5kKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudChldmVudDogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+LCBjb21tYW5kOiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdHN3aXRjaCAoZXZlbnQuZ2V0VHlwZSgpKSB7XG5cdFx0XHRjYXNlICdQYWdlQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50JzpcblxuXHRcdFx0XHRjb25zdCBwYWdlQ2hhbmdlZEV2ZW50ID0gbmV3IFBhZ2VDaGFuZ2VkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gocGFnZUNoYW5nZWRFdmVudCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1BhZ2VzaXplQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50JzpcblxuXHRcdFx0XHRjb25zdCBwYWdlc2l6ZUNoYW5nZWRFdmVudCA9IG5ldyBQYWdlc2l6ZUNoYW5nZWRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChwYWdlc2l6ZUNoYW5nZWRFdmVudCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1N0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCc6XG5cblx0XHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGV2ZW50LnRvRG9tYWluRXZlbnQoKSk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufVxuIl19