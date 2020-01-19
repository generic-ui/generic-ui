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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk3QyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRWhDLFlBQW9CLFdBQThCO1FBQTlCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUNsRCxDQUFDOzs7OztJQUlELE9BQU8sQ0FBQyxJQUE4QztRQUVyRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFeEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkI7U0FDRDthQUFNLElBQUksSUFBSSxZQUFZLFdBQVcsRUFBRTtZQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsc0JBQXNCLENBQUMsY0FBOEIsRUFBRSxPQUFnQjtRQUV0RSxPQUFPO1FBQ1AscUZBQXFGO1FBQ3JGLEVBQUU7UUFDRixvRkFBb0Y7UUFFcEYsMkJBQTJCO0lBQzVCLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxLQUFrQjtRQUV0QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssaUJBQWlCLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsRUFBRTtZQUNwQyxvREFBb0Q7WUFFcEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssdUJBQXVCLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQTNDRCxVQUFVOzs7O1lBSkYsaUJBQWlCOzs7Ozs7O0lBT2IsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29tbWFuZC9hZ2dyZWdhdGUtZXZlbnQnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudFN0cmVhbSB9IGZyb20gJy4vZG9tYWluLWV2ZW50LnN0cmVhbSc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRQdWJsaXNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRTdHJlYW06IERvbWFpbkV2ZW50U3RyZWFtKSB7XG5cdH1cblxuXHRwdWJsaXNoKGV2ZW50OiBEb21haW5FdmVudCk6IHZvaWQ7XG5cdHB1Ymxpc2goZXZlbnRzOiBSZWFkb25seUFycmF5PERvbWFpbkV2ZW50Pik6IHZvaWQ7XG5cdHB1Ymxpc2goYXJnczogRG9tYWluRXZlbnQgfCBSZWFkb25seUFycmF5PERvbWFpbkV2ZW50Pik6IHZvaWQge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblxuXHRcdFx0Zm9yIChsZXQgYXJnIG9mIGFyZ3MpIHtcblx0XHRcdFx0dGhpcy5wdWJsaXNoRXZlbnQoYXJnKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGFyZ3MgaW5zdGFuY2VvZiBEb21haW5FdmVudCkge1xuXHRcdFx0dGhpcy5wdWJsaXNoRXZlbnQoYXJncyk7XG5cdFx0fVxuXHR9XG5cblx0ZGlzcGF0Y2hBZ2dyZWdhdGVFdmVudChhZ2dyZWdhdGVFdmVudDogQWdncmVnYXRlRXZlbnQsIGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdC8vIFRPRE9cblx0XHQvLyBjb25zdCBkb21haW5FdmVudE5hbWUgPSBhZ2dyZWdhdGVFdmVudC5nZXREb21haW5FdmVudE5hbWUoKSBhcyB0eXBlb2YgRG9tYWluRXZlbnQ7XG5cdFx0Ly9cblx0XHQvLyBjb25zdCBkb21haW5FdmVudDogRG9tYWluRXZlbnQgPSBuZXcgKGRvbWFpbkV2ZW50TmFtZSkoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdC8vIHRoaXMuZXZlbnRTdHJlYW0ubmV4dCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRXZlbnQoZXZlbnQ6IERvbWFpbkV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoIWV2ZW50KSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2V2ZW50fSBpcyBub3QgZGVmaW5lZGApO1xuXHRcdH1cblxuXHRcdGlmICghKGV2ZW50IGluc3RhbmNlb2YgRG9tYWluRXZlbnQpKSB7XG5cdFx0XHQvLyB0aHJvdyBuZXcgRXJyb3IoYCR7ZXZlbnR9IGlzIG5vdCBhIERvbWFpbkV2ZW50YCk7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoYCR7ZXZlbnR9IGlzIG5vdCBhIERvbWFpbkV2ZW50YCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5ldmVudFN0cmVhbS5uZXh0KGV2ZW50KTtcblx0fVxufVxuIl19