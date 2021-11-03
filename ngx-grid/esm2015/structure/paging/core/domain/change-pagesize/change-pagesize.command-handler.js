import { Injectable } from '@angular/core';
import { ChangePagesizeCommand } from './change-pagesize.command';
import { PageChangedEvent } from '../page/page-changed.event';
import { PagesizeChangedEvent } from './pagesize-changed.event';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
export class ChangePagesizeCommandHandler {
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    forCommand() {
        return ChangePagesizeCommand;
    }
    handle(structureAggregate, command) {
        const pageSize = command.getPageSize();
        structureAggregate.changePageSize(pageSize);
    }
    publish(aggregate, command) {
        const aggregateEvents = aggregate.getEvents();
        aggregateEvents.forEach((event) => {
            event.aggregateId = aggregate.getId();
        });
        this.publishAggregateEvents(aggregateEvents, command);
        aggregate.clearEvents();
    }
    publishAggregateEvents(events, command) {
        for (const event of events) {
            this.publishAggregateEvent(event, command);
        }
    }
    publishAggregateEvent(event, command) {
        switch (event.getType()) {
            case 'PageChangedAggregateEvent':
                const pageChangedEvent = new PageChangedEvent(command.getAggregateId());
                this.domainEventPublisher.publish(pageChangedEvent);
                break;
            case 'PagesizeChangedAggregateEvent':
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
ChangePagesizeCommandHandler.ɵfac = function ChangePagesizeCommandHandler_Factory(t) { return new (t || ChangePagesizeCommandHandler)(i0.ɵɵinject(i1.DomainEventPublisher)); };
ChangePagesizeCommandHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ChangePagesizeCommandHandler, factory: ChangePagesizeCommandHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePagesizeCommandHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.DomainEventPublisher }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3BhZ2luZy9jb3JlL2RvbWFpbi9jaGFuZ2UtcGFnZXNpemUvY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFNaEUsTUFBTSxPQUFPLDRCQUE0QjtJQUV4QyxZQUFzQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNoRSxDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxrQkFBc0MsRUFBRSxPQUE4QjtRQUU1RSxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFdkMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxPQUFPLENBQUMsU0FBNkIsRUFBRSxPQUE4QjtRQUVwRSxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFN0MsZUFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFrQyxFQUFFLEVBQUU7WUFDdEUsS0FBYSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRELFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sc0JBQXNCLENBQUMsTUFBa0QsRUFBRSxPQUE4QjtRQUVoSCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQztJQUVPLHFCQUFxQixDQUFDLEtBQWtDLEVBQUUsT0FBOEI7UUFFL0YsUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDeEIsS0FBSywyQkFBMkI7Z0JBRS9CLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztnQkFFeEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUVwRCxNQUFNO1lBRVAsS0FBSywrQkFBK0I7Z0JBRW5DLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztnQkFFaEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUV4RCxNQUFNO1lBRVAsS0FBSyw0Q0FBNEM7Z0JBRWhELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7Z0JBRXpELE1BQU07WUFFUDtnQkFDQyxNQUFNO1NBQ1A7SUFDRixDQUFDOzt3R0FoRVcsNEJBQTRCO2tGQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCO3VGQUE1Qiw0QkFBNEI7Y0FEeEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQgfSBmcm9tICcuL2NoYW5nZS1wYWdlc2l6ZS5jb21tYW5kJztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4vcGFnZXNpemUtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFnZXNpemVDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgQ2hhbmdlUGFnZXNpemVDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gQ2hhbmdlUGFnZXNpemVDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlKHN0cnVjdHVyZUFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBhZ2VTaXplID0gY29tbWFuZC5nZXRQYWdlU2l6ZSgpO1xuXG5cdFx0c3RydWN0dXJlQWdncmVnYXRlLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlRXZlbnRzID0gYWdncmVnYXRlLmdldEV2ZW50cygpO1xuXG5cdFx0KGFnZ3JlZ2F0ZUV2ZW50cyBhcyBhbnkpLmZvckVhY2goKGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblx0XHRcdChldmVudCBhcyBhbnkpLmFnZ3JlZ2F0ZUlkID0gYWdncmVnYXRlLmdldElkKCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoYWdncmVnYXRlRXZlbnRzLCBjb21tYW5kKTtcblxuXHRcdGFnZ3JlZ2F0ZS5jbGVhckV2ZW50cygpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoQWdncmVnYXRlRXZlbnRzKGV2ZW50czogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+LCBjb21tYW5kOiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XG5cdFx0XHR0aGlzLnB1Ymxpc2hBZ2dyZWdhdGVFdmVudChldmVudCwgY29tbWFuZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoQWdncmVnYXRlRXZlbnQoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiwgY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRzd2l0Y2ggKGV2ZW50LmdldFR5cGUoKSkge1xuXHRcdFx0Y2FzZSAnUGFnZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCc6XG5cblx0XHRcdFx0Y29uc3QgcGFnZUNoYW5nZWRFdmVudCA9IG5ldyBQYWdlQ2hhbmdlZEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKHBhZ2VDaGFuZ2VkRXZlbnQpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCc6XG5cblx0XHRcdFx0Y29uc3QgcGFnZXNpemVDaGFuZ2VkRXZlbnQgPSBuZXcgUGFnZXNpemVDaGFuZ2VkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gocGFnZXNpemVDaGFuZ2VkRXZlbnQpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQnOlxuXG5cdFx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChldmVudC50b0RvbWFpbkV2ZW50KCkpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn1cbiJdfQ==