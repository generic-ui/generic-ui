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
     * @template E2
     * @param {...?} handlers
     * @return {?}
     */
    ofEventHandler(...handlers) {
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => handler.forEvents([event])));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmJ1cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFNMUQsTUFBTSxPQUFPLGNBQTZDLFNBQVEsVUFBYTs7OztJQUU5RSxZQUFZLFdBQStCO1FBQzFDLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxXQUFXLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7U0FDMUI7SUFDRixDQUFDOzs7Ozs7SUFFRCxJQUFJLENBQUksUUFBd0I7O2NBQ3pCLFVBQVUsR0FBRyxJQUFJLGNBQWMsRUFBSztRQUMxQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN6QixVQUFVLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMvQixPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQWUsR0FBRyxNQUFpQztRQUN6RCxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUF1QixDQUFDO2FBQ2xDLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxXQUFxQyxFQUFFLEVBQUU7WUFDaEQsT0FBTyxNQUFNLENBQUMsSUFBSTs7OztZQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFOztzQkFDMUMsYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JELE9BQU8sYUFBYSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoRCxDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQWUsR0FBRyxRQUE4RTtRQUM3RyxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUF1QixDQUFDO2FBQ2xDLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUU7WUFDMUMsT0FBTyxRQUFRLENBQUMsSUFBSTs7OztZQUFDLENBQUMsT0FBc0UsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUM5SCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsS0FBeUI7O2NBQzlDLElBQUksR0FBZ0IsRUFBRTs7Y0FDM0IsY0FBYyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUUxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUE5Q0QsVUFBVTs7OztZQUxGLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlckltcGwgfSBmcm9tICcuL2hhbmRsZXIvZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50QnVzPEUgPSBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IGV4dGVuZHMgT2JzZXJ2YWJsZTxFPiB7XG5cblx0Y29uc3RydWN0b3IoZXZlbnRTdHJlYW0/OiBEb21haW5FdmVudFN0cmVhbSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRpZiAoZXZlbnRTdHJlYW0pIHtcblx0XHRcdHRoaXMuc291cmNlID0gZXZlbnRTdHJlYW07XG5cdFx0fVxuXHR9XG5cblx0bGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8RSwgUj4pOiBPYnNlcnZhYmxlPFI+IHtcblx0XHRjb25zdCBvYnNlcnZhYmxlID0gbmV3IERvbWFpbkV2ZW50QnVzPFI+KCk7XG5cdFx0b2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuXHRcdG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0XHRyZXR1cm4gb2JzZXJ2YWJsZTtcblx0fVxuXG5cdG9mRXZlbnQ8RTIgZXh0ZW5kcyBFPiguLi5ldmVudHM6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD4pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiAodGhpcyBhcyBEb21haW5FdmVudEJ1czxhbnk+KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoZG9tYWluRXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBldmVudHMuc29tZSgoZXZlbnQ6IHR5cGVvZiBEb21haW5FdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgZXZlbnRJbnN0YW5jZSA9IHRoaXMuY3JlYXRlRXZlbnRJbnN0YW5jZShldmVudCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXZlbnRJbnN0YW5jZS5lcXVhbHNCeVR5cGUoZG9tYWluRXZlbnQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdG9mRXZlbnRIYW5kbGVyPEUyIGV4dGVuZHMgRT4oLi4uaGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8QWdncmVnYXRlSWQsIERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgRG9tYWluRXZlbnRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PikgPT4gaGFuZGxlci5mb3JFdmVudHMoW2V2ZW50XSkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRXZlbnRJbnN0YW5jZShldmVudDogdHlwZW9mIERvbWFpbkV2ZW50KTogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+IHtcblx0XHRjb25zdCBhcmdzOiBBcnJheTx2b2lkPiA9IFtdLFxuXHRcdFx0YXJndW1lbnRMZW5ndGggPSBldmVudC5jb25zdHJ1Y3Rvci5sZW5ndGg7XG5cblx0XHRhcmdzLmZpbGwodW5kZWZpbmVkLCAwLCBhcmd1bWVudExlbmd0aCk7XG5cblx0XHRyZXR1cm4gKG5ldyAoZXZlbnQgYXMgYW55KSguLi5hcmdzKSk7XG5cdH1cblxufVxuIl19