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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmJ1cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBTTFELE1BQU0sT0FBTyxjQUE2QyxTQUFRLFVBQWE7Ozs7SUFFOUUsWUFBWSxXQUErQjtRQUMxQyxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksV0FBVyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1NBQzFCO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFJLFFBQXdCOztjQUN6QixVQUFVLEdBQUcsSUFBSSxjQUFjLEVBQUs7UUFDMUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekIsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFlLEdBQUcsTUFBaUM7UUFDekQsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBdUIsQ0FBQzthQUNsQyxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsV0FBcUMsRUFBRSxFQUFFO1lBQ2hELE9BQU8sTUFBTSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTs7c0JBQzFDLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO2dCQUNyRCxPQUFPLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFlLEdBQUcsUUFBOEU7UUFDN0csT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBdUIsQ0FBQzthQUNsQyxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFO1lBQzFDLE9BQU8sUUFBUSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE9BQXNFLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDOUgsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLEtBQXlCOztjQUM5QyxJQUFJLEdBQWdCLEVBQUU7O2NBQzNCLGNBQWMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU07UUFFMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXhDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBOUNELFVBQVU7Ozs7WUFMRixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuc3RyZWFtJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlckltcGwgfSBmcm9tICcuL2hhbmRsZXIvZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50QnVzPEUgPSBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IGV4dGVuZHMgT2JzZXJ2YWJsZTxFPiB7XG5cblx0Y29uc3RydWN0b3IoZXZlbnRTdHJlYW0/OiBEb21haW5FdmVudFN0cmVhbSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRpZiAoZXZlbnRTdHJlYW0pIHtcblx0XHRcdHRoaXMuc291cmNlID0gZXZlbnRTdHJlYW07XG5cdFx0fVxuXHR9XG5cblx0bGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8RSwgUj4pOiBPYnNlcnZhYmxlPFI+IHtcblx0XHRjb25zdCBvYnNlcnZhYmxlID0gbmV3IERvbWFpbkV2ZW50QnVzPFI+KCk7XG5cdFx0b2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuXHRcdG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0XHRyZXR1cm4gb2JzZXJ2YWJsZTtcblx0fVxuXG5cdG9mRXZlbnQ8RTIgZXh0ZW5kcyBFPiguLi5ldmVudHM6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD4pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiAodGhpcyBhcyBEb21haW5FdmVudEJ1czxhbnk+KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoZG9tYWluRXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBldmVudHMuc29tZSgoZXZlbnQ6IHR5cGVvZiBEb21haW5FdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgZXZlbnRJbnN0YW5jZSA9IHRoaXMuY3JlYXRlRXZlbnRJbnN0YW5jZShldmVudCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXZlbnRJbnN0YW5jZS5lcXVhbHNCeVR5cGUoZG9tYWluRXZlbnQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdG9mRXZlbnRIYW5kbGVyPEUyIGV4dGVuZHMgRT4oLi4uaGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8QWdncmVnYXRlSWQsIERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgRG9tYWluRXZlbnRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PikgPT4gaGFuZGxlci5mb3JFdmVudHMoW2V2ZW50XSkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRXZlbnRJbnN0YW5jZShldmVudDogdHlwZW9mIERvbWFpbkV2ZW50KTogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+IHtcblx0XHRjb25zdCBhcmdzOiBBcnJheTx2b2lkPiA9IFtdLFxuXHRcdFx0YXJndW1lbnRMZW5ndGggPSBldmVudC5jb25zdHJ1Y3Rvci5sZW5ndGg7XG5cblx0XHRhcmdzLmZpbGwodW5kZWZpbmVkLCAwLCBhcmd1bWVudExlbmd0aCk7XG5cblx0XHRyZXR1cm4gKG5ldyAoZXZlbnQgYXMgYW55KSguLi5hcmdzKSk7XG5cdH1cblxufVxuIl19