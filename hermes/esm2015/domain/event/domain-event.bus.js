/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DomainEventStream } from './domain-event.stream';
/**
 * @template E
 */
export class DomainEventBus extends Observable {
    /**
     * @param {?=} eventStream
     */
    constructor(eventStream) {
        super();
        if (eventStream) {
            this.source = eventStream;
        }
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    lift(operator) {
        /** @type {?} */
        const observable = new DomainEventBus();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    /**
     * @template E2
     * @param {...?} events
     * @return {?}
     */
    ofEvent(...events) {
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} domainEvent
         * @return {?}
         */
        (domainEvent) => {
            return events.some((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                /** @type {?} */
                const eventInstance = this.createEventInstance(event);
                return eventInstance.equalsByType(domainEvent);
            }));
        })));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    createEventInstance(event) {
        /** @type {?} */
        const args = [];
        /** @type {?} */
        const argumentLength = event.constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((/** @type {?} */ (event)))(...args));
    }
}
DomainEventBus.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DomainEventBus.ctorParameters = () => [
    { type: DomainEventStream }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmJ1cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBSzFELE1BQU0sT0FBTyxjQUE2QyxTQUFRLFVBQWE7Ozs7SUFFOUUsWUFBWSxXQUErQjtRQUMxQyxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksV0FBVyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1NBQzFCO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFJLFFBQXdCOztjQUN6QixVQUFVLEdBQUcsSUFBSSxjQUFjLEVBQUs7UUFDMUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekIsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFlLEdBQUcsTUFBaUM7UUFDekQsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBdUIsQ0FBQzthQUNsQyxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsV0FBcUMsRUFBRSxFQUFFO1lBQ2hELE9BQU8sTUFBTSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTs7c0JBQzFDLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO2dCQUNyRCxPQUFPLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsS0FBeUI7O2NBQzlDLElBQUksR0FBZ0IsRUFBRTs7Y0FDM0IsY0FBYyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUUxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFyQ0QsVUFBVTs7OztZQUpGLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9hZ2dyZWdhdGUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudEJ1czxFID0gRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiBleHRlbmRzIE9ic2VydmFibGU8RT4ge1xuXG5cdGNvbnN0cnVjdG9yKGV2ZW50U3RyZWFtPzogRG9tYWluRXZlbnRTdHJlYW0pIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0aWYgKGV2ZW50U3RyZWFtKSB7XG5cdFx0XHR0aGlzLnNvdXJjZSA9IGV2ZW50U3RyZWFtO1xuXHRcdH1cblx0fVxuXG5cdGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPEUsIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBEb21haW5FdmVudEJ1czxSPigpO1xuXHRcdG9ic2VydmFibGUuc291cmNlID0gdGhpcztcblx0XHRvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0cmV0dXJuIG9ic2VydmFibGU7XG5cdH1cblxuXHRvZkV2ZW50PEUyIGV4dGVuZHMgRT4oLi4uZXZlbnRzOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgRG9tYWluRXZlbnRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGRvbWFpbkV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZXZlbnRzLnNvbWUoKGV2ZW50OiB0eXBlb2YgRG9tYWluRXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGV2ZW50SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUV2ZW50SW5zdGFuY2UoZXZlbnQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV2ZW50SW5zdGFuY2UuZXF1YWxzQnlUeXBlKGRvbWFpbkV2ZW50KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUV2ZW50SW5zdGFuY2UoZXZlbnQ6IHR5cGVvZiBEb21haW5FdmVudCk6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPiB7XG5cdFx0Y29uc3QgYXJnczogQXJyYXk8dm9pZD4gPSBbXSxcblx0XHRcdGFyZ3VtZW50TGVuZ3RoID0gZXZlbnQuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0cmV0dXJuIChuZXcgKGV2ZW50IGFzIGFueSkoLi4uYXJncykpO1xuXHR9XG5cbn1cbiJdfQ==