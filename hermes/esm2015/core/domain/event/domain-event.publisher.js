import { Injectable } from '@angular/core';
import { DomainEvent } from './domain-event';
import * as i0 from "@angular/core";
import * as i1 from "./domain-event.stream";
export class DomainEventPublisher {
    constructor(eventStream) {
        this.eventStream = eventStream;
    }
    publish(args) {
        if (Array.isArray(args)) {
            for (const arg of args) {
                this.publishEvent(arg);
            }
        }
        else if (args instanceof DomainEvent) {
            this.publishEvent(args);
        }
    }
    publishFromAggregate(aggregate) {
        aggregate.getEvents()
            .forEach((aggregateEvent) => {
            this.publish(aggregateEvent.toDomainEvent());
        });
    }
    publishEvent(event) {
        if (!event) {
            // eslint-disable-next-line no-console
            console.error(`${event} is not defined`);
        }
        if (!(event instanceof DomainEvent)) {
            // throw new Error(`${event} is not a DomainEvent`);
            // eslint-disable-next-line no-console
            console.error(`${event} is not a DomainEvent`);
        }
        this.eventStream.next(event);
    }
}
DomainEventPublisher.ɵfac = function DomainEventPublisher_Factory(t) { return new (t || DomainEventPublisher)(i0.ɵɵinject(i1.DomainEventStream)); };
DomainEventPublisher.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DomainEventPublisher, factory: DomainEventPublisher.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DomainEventPublisher, [{
        type: Injectable
    }], function () { return [{ type: i1.DomainEventStream }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFNN0MsTUFBTSxPQUFPLG9CQUFvQjtJQUVoQyxZQUE2QixXQUE4QjtRQUE5QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFDM0QsQ0FBQztJQUlELE9BQU8sQ0FBQyxJQUF3RTtRQUUvRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFeEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkI7U0FDRDthQUFNLElBQUksSUFBSSxZQUFZLFdBQVcsRUFBRTtZQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQztJQUVELG9CQUFvQixDQUFDLFNBQXFDO1FBRXpELFNBQVMsQ0FBQyxTQUFTLEVBQUU7YUFDakIsT0FBTyxDQUFDLENBQUMsY0FBMkMsRUFBRSxFQUFFO1lBQ3hELElBQUksQ0FBQyxPQUFPLENBQ1gsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUM5QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQStCO1FBRW5ELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxzQ0FBc0M7WUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssaUJBQWlCLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsRUFBRTtZQUNwQyxvREFBb0Q7WUFFcEQsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLHVCQUF1QixDQUFDLENBQUM7U0FDL0M7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzt3RkE1Q1csb0JBQW9COzBFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FEaEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudCc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuc3RyZWFtJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudFB1Ymxpc2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBldmVudFN0cmVhbTogRG9tYWluRXZlbnRTdHJlYW0pIHtcblx0fVxuXG5cdHB1Ymxpc2goZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IHZvaWQ7XG5cdHB1Ymxpc2goZXZlbnRzOiBSZWFkb25seUFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4pOiB2b2lkO1xuXHRwdWJsaXNoKGFyZ3M6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPiB8IFJlYWRvbmx5QXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pik6IHZvaWQge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblxuXHRcdFx0Zm9yIChjb25zdCBhcmcgb2YgYXJncykge1xuXHRcdFx0XHR0aGlzLnB1Ymxpc2hFdmVudChhcmcpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoYXJncyBpbnN0YW5jZW9mIERvbWFpbkV2ZW50KSB7XG5cdFx0XHR0aGlzLnB1Ymxpc2hFdmVudChhcmdzKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+KTogdm9pZCB7XG5cblx0XHRhZ2dyZWdhdGUuZ2V0RXZlbnRzKClcblx0XHRcdFx0IC5mb3JFYWNoKChhZ2dyZWdhdGVFdmVudDogQWdncmVnYXRlRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0IHRoaXMucHVibGlzaChcblx0XHRcdFx0XHRcdCBhZ2dyZWdhdGVFdmVudC50b0RvbWFpbkV2ZW50KClcblx0XHRcdFx0XHQgKTtcblx0XHRcdFx0IH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRXZlbnQoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXG5cdFx0aWYgKCFldmVudCkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdGNvbnNvbGUuZXJyb3IoYCR7ZXZlbnR9IGlzIG5vdCBkZWZpbmVkYCk7XG5cdFx0fVxuXG5cdFx0aWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBEb21haW5FdmVudCkpIHtcblx0XHRcdC8vIHRocm93IG5ldyBFcnJvcihgJHtldmVudH0gaXMgbm90IGEgRG9tYWluRXZlbnRgKTtcblxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdGNvbnNvbGUuZXJyb3IoYCR7ZXZlbnR9IGlzIG5vdCBhIERvbWFpbkV2ZW50YCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5ldmVudFN0cmVhbS5uZXh0KGV2ZW50KTtcblx0fVxufVxuIl19