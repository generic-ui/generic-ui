/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventStore } from './domain-event.store';
import { HermesSubject } from '../../../common/stream/observable/hermes.subject';
export class DomainEventStream extends HermesSubject {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0cmVhbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdHJlYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSWpGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUF1Qzs7OztJQUU3RSxZQUE2QixVQUE0QjtRQUN4RCxLQUFLLEVBQUUsQ0FBQztRQURvQixlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUV6RCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUErQjtRQUNuQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQVZELFVBQVU7Ozs7WUFMRixnQkFBZ0I7Ozs7Ozs7SUFRWix1Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdG9yZSB9IGZyb20gJy4vZG9tYWluLWV2ZW50LnN0b3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5zdWJqZWN0JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRTdHJlYW0gZXh0ZW5kcyBIZXJtZXNTdWJqZWN0PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZXZlbnRTdG9yZTogRG9tYWluRXZlbnRTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZXh0KGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiB2b2lkIHtcblx0XHRzdXBlci5uZXh0KGV2ZW50KTtcblx0XHR0aGlzLmV2ZW50U3RvcmUubmV4dChldmVudCk7XG5cdH1cbn1cbiJdfQ==