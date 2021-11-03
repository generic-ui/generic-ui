import { Injectable } from '@angular/core';
import { NextPageCommand } from './next-page.command';
import { NextPageEvent } from './next-page.event';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
export class NextPageCommandHandler {
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    forCommand() {
        return NextPageCommand;
    }
    handle(aggregate, command) {
        // missing implementation
        aggregate.nextPage();
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new NextPageEvent(command.getAggregateId()));
    }
}
NextPageCommandHandler.ɵfac = function NextPageCommandHandler_Factory(t) { return new (t || NextPageCommandHandler)(i0.ɵɵinject(i1.DomainEventPublisher)); };
NextPageCommandHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NextPageCommandHandler, factory: NextPageCommandHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NextPageCommandHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.DomainEventPublisher }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV4dC1wYWdlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3BhZ2luZy9jb3JlL2RvbWFpbi9uZXh0LXBhZ2UvbmV4dC1wYWdlLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQUtsRCxNQUFNLE9BQU8sc0JBQXNCO0lBRWxDLFlBQTZCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3ZFLENBQUM7SUFFRCxVQUFVO1FBQ1QsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUE2QixFQUFFLE9BQXdCO1FBRTdELHlCQUF5QjtRQUN6QixTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUE2QixFQUFFLE9BQXdCO1FBQzlELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDOzs0RkFqQlcsc0JBQXNCOzRFQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBOZXh0UGFnZUNvbW1hbmQgfSBmcm9tICcuL25leHQtcGFnZS5jb21tYW5kJztcbmltcG9ydCB7IE5leHRQYWdlRXZlbnQgfSBmcm9tICcuL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV4dFBhZ2VDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgTmV4dFBhZ2VDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8TmV4dFBhZ2VDb21tYW5kPiB7XG5cdFx0cmV0dXJuIE5leHRQYWdlQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogTmV4dFBhZ2VDb21tYW5kKTogdm9pZCB7XG5cblx0XHQvLyBtaXNzaW5nIGltcGxlbWVudGF0aW9uXG5cdFx0YWdncmVnYXRlLm5leHRQYWdlKCk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBOZXh0UGFnZUNvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IE5leHRQYWdlRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxufVxuIl19