/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DomainEventStore } from './domain-event.store';
export class DomainEventStream extends Subject {
    /**
     * @param {?} eventStore
     */
    constructor(eventStore) {
        super();
        this.eventStore = eventStore;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    next(event) {
        super.next(event);
        this.eventStore.next(event);
    }
}
DomainEventStream.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DomainEventStream.ctorParameters = () => [
    { type: DomainEventStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventStream.prototype.eventStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0cmVhbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RyZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFLeEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLE9BQWlDOzs7O0lBRXZFLFlBQW9CLFVBQTRCO1FBQy9DLEtBQUssRUFBRSxDQUFDO1FBRFcsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7SUFFaEQsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBK0I7UUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFWRCxVQUFVOzs7O1lBSkYsZ0JBQWdCOzs7Ozs7O0lBT1osdUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RvcmUgfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50U3RyZWFtIGV4dGVuZHMgU3ViamVjdDxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50U3RvcmU6IERvbWFpbkV2ZW50U3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmV4dChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogdm9pZCB7XG5cdFx0c3VwZXIubmV4dChldmVudCk7XG5cdFx0dGhpcy5ldmVudFN0b3JlLm5leHQoZXZlbnQpO1xuXHR9XG59XG4iXX0=