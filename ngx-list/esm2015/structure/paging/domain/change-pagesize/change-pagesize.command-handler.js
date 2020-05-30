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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9kb21haW4vY2hhbmdlLXBhZ2VzaXplL2NoYW5nZS1wYWdlc2l6ZS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFrQyxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBTWhFLE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFFeEMsWUFBc0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDaEUsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLFNBQTZCLEVBQUUsT0FBOEI7O2NBRTFFLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFO1FBRTdDLENBQUMsbUJBQUEsZUFBZSxFQUFPLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFrQyxFQUFFLEVBQUU7WUFDdkUsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRELFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsa0JBQXNDLEVBQUUsT0FBOEI7O2NBRS9FLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFO1FBRXRDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsTUFBa0QsRUFBRSxPQUE4QjtRQUVoSCxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQzs7Ozs7OztJQUVPLHFCQUFxQixDQUFDLEtBQWtDLEVBQUUsT0FBOEI7UUFFL0YsUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDeEIsS0FBSywyQkFBMkI7O3NCQUV6QixnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFFdkUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUVwRCxNQUFNO1lBRVAsS0FBSywrQkFBK0I7O3NCQUU3QixvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFFL0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUV4RCxNQUFNO1lBRVA7Z0JBQ0MsTUFBTTtTQUNQO0lBQ0YsQ0FBQzs7O1lBM0RELFVBQVU7Ozs7WUFUOEIsb0JBQW9COzs7Ozs7O0lBWWhELDREQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENoYW5nZVBhZ2VzaXplQ29tbWFuZCB9IGZyb20gJy4vY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQnO1xuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uL3BhZ2UvcGFnZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9wYWdlc2l6ZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFnZXNpemVDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgQ2hhbmdlUGFnZXNpemVDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBUeXBlPENoYW5nZVBhZ2VzaXplQ29tbWFuZD4ge1xuXHRcdHJldHVybiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUV2ZW50cyA9IGFnZ3JlZ2F0ZS5nZXRFdmVudHMoKTtcblxuXHRcdChhZ2dyZWdhdGVFdmVudHMgYXMgYW55KS5mb3JFYWNoKChldmVudDogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiB7XG5cdFx0XHQoZXZlbnQgYXMgYW55KS5hZ2dyZWdhdGVJZCA9IGFnZ3JlZ2F0ZS5nZXRJZCgpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5wdWJsaXNoQWdncmVnYXRlRXZlbnRzKGFnZ3JlZ2F0ZUV2ZW50cywgY29tbWFuZCk7XG5cblx0XHRhZ2dyZWdhdGUuY2xlYXJFdmVudHMoKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmVBZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBwYWdlU2l6ZSA9IGNvbW1hbmQuZ2V0UGFnZVNpemUoKTtcblxuXHRcdHN0cnVjdHVyZUFnZ3JlZ2F0ZS5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoZXZlbnRzOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4sIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XG5cdFx0XHR0aGlzLnB1Ymxpc2hBZ2dyZWdhdGVFdmVudChldmVudCwgY29tbWFuZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoQWdncmVnYXRlRXZlbnQoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiwgY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRzd2l0Y2ggKGV2ZW50LmdldFR5cGUoKSkge1xuXHRcdFx0Y2FzZSAnUGFnZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCc6XG5cblx0XHRcdFx0Y29uc3QgcGFnZUNoYW5nZWRFdmVudCA9IG5ldyBQYWdlQ2hhbmdlZEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKHBhZ2VDaGFuZ2VkRXZlbnQpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCc6XG5cblx0XHRcdFx0Y29uc3QgcGFnZXNpemVDaGFuZ2VkRXZlbnQgPSBuZXcgUGFnZXNpemVDaGFuZ2VkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gocGFnZXNpemVDaGFuZ2VkRXZlbnQpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn1cbiJdfQ==