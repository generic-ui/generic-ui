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
     * @param {?} aggregate
     * @return {?}
     */
    publishFromAggregate(aggregate) {
        aggregate.getEvents()
            .forEach((/**
         * @param {?} aggregateEvent
         * @return {?}
         */
        (aggregateEvent) => {
            this.publish(aggregateEvent.toDomainEvent());
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTdDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFaEMsWUFBb0IsV0FBOEI7UUFBOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBQ2xELENBQUM7Ozs7O0lBSUQsT0FBTyxDQUFDLElBQXdFO1FBRS9FLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUV4QixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QjtTQUNEO2FBQU0sSUFBSSxJQUFJLFlBQVksV0FBVyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7SUFDRixDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLFNBQXFDO1FBQ3pELFNBQVMsQ0FBQyxTQUFTLEVBQUU7YUFDakIsT0FBTzs7OztRQUFDLENBQUMsY0FBMkMsRUFBRSxFQUFFO1lBQ3hELElBQUksQ0FBQyxPQUFPLENBQ1gsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUM5QixDQUFDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBK0I7UUFFbkQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLGlCQUFpQixDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLEVBQUU7WUFDcEMsb0RBQW9EO1lBRXBELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLHVCQUF1QixDQUFDLENBQUM7U0FDL0M7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUExQ0QsVUFBVTs7OztZQU5GLGlCQUFpQjs7Ozs7OztJQVNiLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudCc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuc3RyZWFtJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudFB1Ymxpc2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBldmVudFN0cmVhbTogRG9tYWluRXZlbnRTdHJlYW0pIHtcblx0fVxuXG5cdHB1Ymxpc2goZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IHZvaWQ7XG5cdHB1Ymxpc2goZXZlbnRzOiBSZWFkb25seUFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4pOiB2b2lkO1xuXHRwdWJsaXNoKGFyZ3M6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPiB8IFJlYWRvbmx5QXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pik6IHZvaWQge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblxuXHRcdFx0Zm9yIChsZXQgYXJnIG9mIGFyZ3MpIHtcblx0XHRcdFx0dGhpcy5wdWJsaXNoRXZlbnQoYXJnKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGFyZ3MgaW5zdGFuY2VvZiBEb21haW5FdmVudCkge1xuXHRcdFx0dGhpcy5wdWJsaXNoRXZlbnQoYXJncyk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlOiBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXHRcdGFnZ3JlZ2F0ZS5nZXRFdmVudHMoKVxuXHRcdFx0XHQgLmZvckVhY2goKGFnZ3JlZ2F0ZUV2ZW50OiBBZ2dyZWdhdGVFdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHQgdGhpcy5wdWJsaXNoKFxuXHRcdFx0XHRcdFx0IGFnZ3JlZ2F0ZUV2ZW50LnRvRG9tYWluRXZlbnQoKVxuXHRcdFx0XHRcdCApO1xuXHRcdFx0XHQgfSk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFdmVudChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogdm9pZCB7XG5cblx0XHRpZiAoIWV2ZW50KSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2V2ZW50fSBpcyBub3QgZGVmaW5lZGApO1xuXHRcdH1cblxuXHRcdGlmICghKGV2ZW50IGluc3RhbmNlb2YgRG9tYWluRXZlbnQpKSB7XG5cdFx0XHQvLyB0aHJvdyBuZXcgRXJyb3IoYCR7ZXZlbnR9IGlzIG5vdCBhIERvbWFpbkV2ZW50YCk7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoYCR7ZXZlbnR9IGlzIG5vdCBhIERvbWFpbkV2ZW50YCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5ldmVudFN0cmVhbS5uZXh0KGV2ZW50KTtcblx0fVxufVxuIl19