/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventStream } from './domain-event.stream';
import { DomainEvent } from './domain-event';
export class DomainEventPublisher {
    /**
     * @param {?} eventStream
     */
    constructor(eventStream) {
        this.eventStream = eventStream;
    }
    /**
     * @param {?} args
     * @return {?}
     */
    publish(args) {
        if (Array.isArray(args)) {
            for (let arg of args) {
                this.publishEvent(arg);
            }
        }
        else if (args instanceof DomainEvent) {
            this.publishEvent(args);
        }
    }
    /**
     * @param {?} aggregateEvent
     * @param {?} command
     * @return {?}
     */
    dispatchAggregateEvent(aggregateEvent, command) {
        // TODO
        // const domainEventName = aggregateEvent.getDomainEventName() as typeof DomainEvent;
        //
        // const domainEvent: DomainEvent = new (domainEventName)(command.getAggregateId());
        // this.eventStream.next();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    publishEvent(event) {
        if (!event) {
            console.error(`${event} is not defined`);
        }
        if (!(event instanceof DomainEvent)) {
            // throw new Error(`${event} is not a DomainEvent`);
            console.error(`${event} is not a DomainEvent`);
        }
        this.eventStream.next(event);
    }
}
DomainEventPublisher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DomainEventPublisher.ctorParameters = () => [
    { type: DomainEventStream }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventPublisher.prototype.eventStream;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUs3QyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRWhDLFlBQW9CLFdBQThCO1FBQTlCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUNsRCxDQUFDOzs7OztJQUlELE9BQU8sQ0FBQyxJQUE4QztRQUVyRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFeEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkI7U0FDRDthQUFNLElBQUksSUFBSSxZQUFZLFdBQVcsRUFBRTtZQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsc0JBQXNCLENBQUMsY0FBMkMsRUFBRSxPQUFnQjtRQUVuRixPQUFPO1FBQ1AscUZBQXFGO1FBQ3JGLEVBQUU7UUFDRixvRkFBb0Y7UUFFcEYsMkJBQTJCO0lBQzVCLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxLQUFrQjtRQUV0QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssaUJBQWlCLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsRUFBRTtZQUNwQyxvREFBb0Q7WUFFcEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssdUJBQXVCLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQTNDRCxVQUFVOzs7O1lBTEYsaUJBQWlCOzs7Ozs7O0lBUWIsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLWV2ZW50JztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdHJlYW0nO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuL2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50UHVibGlzaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50U3RyZWFtOiBEb21haW5FdmVudFN0cmVhbSkge1xuXHR9XG5cblx0cHVibGlzaChldmVudDogRG9tYWluRXZlbnQpOiB2b2lkO1xuXHRwdWJsaXNoKGV2ZW50czogUmVhZG9ubHlBcnJheTxEb21haW5FdmVudD4pOiB2b2lkO1xuXHRwdWJsaXNoKGFyZ3M6IERvbWFpbkV2ZW50IHwgUmVhZG9ubHlBcnJheTxEb21haW5FdmVudD4pOiB2b2lkIHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cblx0XHRcdGZvciAobGV0IGFyZyBvZiBhcmdzKSB7XG5cdFx0XHRcdHRoaXMucHVibGlzaEV2ZW50KGFyZyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChhcmdzIGluc3RhbmNlb2YgRG9tYWluRXZlbnQpIHtcblx0XHRcdHRoaXMucHVibGlzaEV2ZW50KGFyZ3MpO1xuXHRcdH1cblx0fVxuXG5cdGRpc3BhdGNoQWdncmVnYXRlRXZlbnQoYWdncmVnYXRlRXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PEFnZ3JlZ2F0ZUlkPiwgY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Ly8gVE9ET1xuXHRcdC8vIGNvbnN0IGRvbWFpbkV2ZW50TmFtZSA9IGFnZ3JlZ2F0ZUV2ZW50LmdldERvbWFpbkV2ZW50TmFtZSgpIGFzIHR5cGVvZiBEb21haW5FdmVudDtcblx0XHQvL1xuXHRcdC8vIGNvbnN0IGRvbWFpbkV2ZW50OiBEb21haW5FdmVudCA9IG5ldyAoZG9tYWluRXZlbnROYW1lKShjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0Ly8gdGhpcy5ldmVudFN0cmVhbS5uZXh0KCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFdmVudChldmVudDogRG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmICghZXZlbnQpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYCR7ZXZlbnR9IGlzIG5vdCBkZWZpbmVkYCk7XG5cdFx0fVxuXG5cdFx0aWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBEb21haW5FdmVudCkpIHtcblx0XHRcdC8vIHRocm93IG5ldyBFcnJvcihgJHtldmVudH0gaXMgbm90IGEgRG9tYWluRXZlbnRgKTtcblxuXHRcdFx0Y29uc29sZS5lcnJvcihgJHtldmVudH0gaXMgbm90IGEgRG9tYWluRXZlbnRgKTtcblx0XHR9XG5cblx0XHR0aGlzLmV2ZW50U3RyZWFtLm5leHQoZXZlbnQpO1xuXHR9XG59XG4iXX0=