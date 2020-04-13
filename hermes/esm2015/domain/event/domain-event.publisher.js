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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU03QyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRWhDLFlBQW9CLFdBQThCO1FBQTlCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUNsRCxDQUFDOzs7OztJQUlELE9BQU8sQ0FBQyxJQUF3RTtRQUUvRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFeEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkI7U0FDRDthQUFNLElBQUksSUFBSSxZQUFZLFdBQVcsRUFBRTtZQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxTQUFxQztRQUN6RCxTQUFTLENBQUMsU0FBUyxFQUFFO2FBQ2pCLE9BQU87Ozs7UUFBQyxDQUFDLGNBQTJDLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsT0FBTyxDQUNYLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FDOUIsQ0FBQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEtBQStCO1FBRW5ELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxFQUFFO1lBQ3BDLG9EQUFvRDtZQUVwRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyx1QkFBdUIsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBMUNELFVBQVU7Ozs7WUFORixpQkFBaUI7Ozs7Ozs7SUFTYiwyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudCc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuc3RyZWFtJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRQdWJsaXNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRTdHJlYW06IERvbWFpbkV2ZW50U3RyZWFtKSB7XG5cdH1cblxuXHRwdWJsaXNoKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiB2b2lkO1xuXHRwdWJsaXNoKGV2ZW50czogUmVhZG9ubHlBcnJheTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+KTogdm9pZDtcblx0cHVibGlzaChhcmdzOiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4gfCBSZWFkb25seUFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4pOiB2b2lkIHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cblx0XHRcdGZvciAobGV0IGFyZyBvZiBhcmdzKSB7XG5cdFx0XHRcdHRoaXMucHVibGlzaEV2ZW50KGFyZyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChhcmdzIGluc3RhbmNlb2YgRG9tYWluRXZlbnQpIHtcblx0XHRcdHRoaXMucHVibGlzaEV2ZW50KGFyZ3MpO1xuXHRcdH1cblx0fVxuXG5cdHB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZTogQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4pOiB2b2lkIHtcblx0XHRhZ2dyZWdhdGUuZ2V0RXZlbnRzKClcblx0XHRcdFx0IC5mb3JFYWNoKChhZ2dyZWdhdGVFdmVudDogQWdncmVnYXRlRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0IHRoaXMucHVibGlzaChcblx0XHRcdFx0XHRcdCBhZ2dyZWdhdGVFdmVudC50b0RvbWFpbkV2ZW50KClcblx0XHRcdFx0XHQgKTtcblx0XHRcdFx0IH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRXZlbnQoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXG5cdFx0aWYgKCFldmVudCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgJHtldmVudH0gaXMgbm90IGRlZmluZWRgKTtcblx0XHR9XG5cblx0XHRpZiAoIShldmVudCBpbnN0YW5jZW9mIERvbWFpbkV2ZW50KSkge1xuXHRcdFx0Ly8gdGhyb3cgbmV3IEVycm9yKGAke2V2ZW50fSBpcyBub3QgYSBEb21haW5FdmVudGApO1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2V2ZW50fSBpcyBub3QgYSBEb21haW5FdmVudGApO1xuXHRcdH1cblxuXHRcdHRoaXMuZXZlbnRTdHJlYW0ubmV4dChldmVudCk7XG5cdH1cbn1cbiJdfQ==