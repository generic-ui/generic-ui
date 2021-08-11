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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTdDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFaEMsWUFBb0IsV0FBOEI7UUFBOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBQ2xELENBQUM7Ozs7O0lBSUQsT0FBTyxDQUFDLElBQXdFO1FBRS9FLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUV4QixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QjtTQUNEO2FBQU0sSUFBSSxJQUFJLFlBQVksV0FBVyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7SUFDRixDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLFNBQXFDO1FBQ3pELFNBQVMsQ0FBQyxTQUFTLEVBQUU7YUFDakIsT0FBTzs7OztRQUFDLENBQUMsY0FBMkMsRUFBRSxFQUFFO1lBQ3hELElBQUksQ0FBQyxPQUFPLENBQ1gsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUM5QixDQUFDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBK0I7UUFFbkQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLHNDQUFzQztZQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxFQUFFO1lBQ3BDLG9EQUFvRDtZQUVwRCxzQ0FBc0M7WUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssdUJBQXVCLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQTVDRCxVQUFVOzs7O1lBTkYsaUJBQWlCOzs7Ozs7O0lBU2IsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWV2ZW50JztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdHJlYW0nO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuL2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50UHVibGlzaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50U3RyZWFtOiBEb21haW5FdmVudFN0cmVhbSkge1xuXHR9XG5cblx0cHVibGlzaChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogdm9pZDtcblx0cHVibGlzaChldmVudHM6IFJlYWRvbmx5QXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pik6IHZvaWQ7XG5cdHB1Ymxpc2goYXJnczogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+IHwgUmVhZG9ubHlBcnJheTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+KTogdm9pZCB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXG5cdFx0XHRmb3IgKGxldCBhcmcgb2YgYXJncykge1xuXHRcdFx0XHR0aGlzLnB1Ymxpc2hFdmVudChhcmcpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoYXJncyBpbnN0YW5jZW9mIERvbWFpbkV2ZW50KSB7XG5cdFx0XHR0aGlzLnB1Ymxpc2hFdmVudChhcmdzKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+KTogdm9pZCB7XG5cdFx0YWdncmVnYXRlLmdldEV2ZW50cygpXG5cdFx0XHRcdCAuZm9yRWFjaCgoYWdncmVnYXRlRXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHRcdCB0aGlzLnB1Ymxpc2goXG5cdFx0XHRcdFx0XHQgYWdncmVnYXRlRXZlbnQudG9Eb21haW5FdmVudCgpXG5cdFx0XHRcdFx0ICk7XG5cdFx0XHRcdCB9KTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEV2ZW50KGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiB2b2lkIHtcblxuXHRcdGlmICghZXZlbnQpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2V2ZW50fSBpcyBub3QgZGVmaW5lZGApO1xuXHRcdH1cblxuXHRcdGlmICghKGV2ZW50IGluc3RhbmNlb2YgRG9tYWluRXZlbnQpKSB7XG5cdFx0XHQvLyB0aHJvdyBuZXcgRXJyb3IoYCR7ZXZlbnR9IGlzIG5vdCBhIERvbWFpbkV2ZW50YCk7XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2V2ZW50fSBpcyBub3QgYSBEb21haW5FdmVudGApO1xuXHRcdH1cblxuXHRcdHRoaXMuZXZlbnRTdHJlYW0ubmV4dChldmVudCk7XG5cdH1cbn1cbiJdfQ==