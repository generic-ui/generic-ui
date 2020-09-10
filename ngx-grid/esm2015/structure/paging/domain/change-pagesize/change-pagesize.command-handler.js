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
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ChangePagesizeCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9kb21haW4vY2hhbmdlLXBhZ2VzaXplL2NoYW5nZS1wYWdlc2l6ZS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQyxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBTWhFLE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFFeEMsWUFBc0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDaEUsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLFNBQTZCLEVBQUUsT0FBOEI7O2NBRTFFLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFO1FBRTdDLENBQUMsbUJBQUEsZUFBZSxFQUFPLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFrQyxFQUFFLEVBQUU7WUFDdkUsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRELFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsa0JBQXNDLEVBQUUsT0FBOEI7O2NBRS9FLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFO1FBRXRDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsTUFBa0QsRUFBRSxPQUE4QjtRQUVoSCxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQzs7Ozs7OztJQUVPLHFCQUFxQixDQUFDLEtBQWtDLEVBQUUsT0FBOEI7UUFFL0YsUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDeEIsS0FBSywyQkFBMkI7O3NCQUV6QixnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFFdkUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUVwRCxNQUFNO1lBRVAsS0FBSywrQkFBK0I7O3NCQUU3QixvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFFL0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUV4RCxNQUFNO1lBRVA7Z0JBQ0MsTUFBTTtTQUNQO0lBQ0YsQ0FBQzs7O1lBM0RELFVBQVU7Ozs7WUFUMkMsb0JBQW9COzs7Ozs7O0lBWTdELDREQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQgfSBmcm9tICcuL2NoYW5nZS1wYWdlc2l6ZS5jb21tYW5kJztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4vcGFnZXNpemUtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFnZXNpemVDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgQ2hhbmdlUGFnZXNpemVDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gQ2hhbmdlUGFnZXNpemVDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVFdmVudHMgPSBhZ2dyZWdhdGUuZ2V0RXZlbnRzKCk7XG5cblx0XHQoYWdncmVnYXRlRXZlbnRzIGFzIGFueSkuZm9yRWFjaCgoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXHRcdFx0KGV2ZW50IGFzIGFueSkuYWdncmVnYXRlSWQgPSBhZ2dyZWdhdGUuZ2V0SWQoKTtcblx0XHR9KTtcblxuXHRcdHRoaXMucHVibGlzaEFnZ3JlZ2F0ZUV2ZW50cyhhZ2dyZWdhdGVFdmVudHMsIGNvbW1hbmQpO1xuXG5cdFx0YWdncmVnYXRlLmNsZWFyRXZlbnRzKCk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc3RydWN0dXJlQWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgcGFnZVNpemUgPSBjb21tYW5kLmdldFBhZ2VTaXplKCk7XG5cblx0XHRzdHJ1Y3R1cmVBZ2dyZWdhdGUuY2hhbmdlUGFnZVNpemUocGFnZVNpemUpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoQWdncmVnYXRlRXZlbnRzKGV2ZW50czogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+LCBjb21tYW5kOiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGZvciAobGV0IGV2ZW50IG9mIGV2ZW50cykge1xuXHRcdFx0dGhpcy5wdWJsaXNoQWdncmVnYXRlRXZlbnQoZXZlbnQsIGNvbW1hbmQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEFnZ3JlZ2F0ZUV2ZW50KGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4sIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0c3dpdGNoIChldmVudC5nZXRUeXBlKCkpIHtcblx0XHRcdGNhc2UgJ1BhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQnOlxuXG5cdFx0XHRcdGNvbnN0IHBhZ2VDaGFuZ2VkRXZlbnQgPSBuZXcgUGFnZUNoYW5nZWRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChwYWdlQ2hhbmdlZEV2ZW50KTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQnOlxuXG5cdFx0XHRcdGNvbnN0IHBhZ2VzaXplQ2hhbmdlZEV2ZW50ID0gbmV3IFBhZ2VzaXplQ2hhbmdlZEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKHBhZ2VzaXplQ2hhbmdlZEV2ZW50KTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59XG4iXX0=