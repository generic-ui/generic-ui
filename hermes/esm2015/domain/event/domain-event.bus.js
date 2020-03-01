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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmJ1cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBSTFELE1BQU0sT0FBTyxjQUFnQyxTQUFRLFVBQWE7Ozs7SUFFakUsWUFBWSxXQUErQjtRQUMxQyxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksV0FBVyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1NBQzFCO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFJLFFBQXdCOztjQUN6QixVQUFVLEdBQUcsSUFBSSxjQUFjLEVBQUs7UUFDMUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekIsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFlLEdBQUcsTUFBaUM7UUFDekQsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBdUIsQ0FBQzthQUNsQyxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFO1lBQ25DLE9BQU8sTUFBTSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTs7c0JBQzFDLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO2dCQUNyRCxPQUFPLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsS0FBeUI7O2NBQzlDLElBQUksR0FBZ0IsRUFBRTs7Y0FDM0IsY0FBYyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUUxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFyQ0QsVUFBVTs7OztZQUhGLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdHJlYW0nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudEJ1czxFID0gRG9tYWluRXZlbnQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxFPiB7XG5cblx0Y29uc3RydWN0b3IoZXZlbnRTdHJlYW0/OiBEb21haW5FdmVudFN0cmVhbSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRpZiAoZXZlbnRTdHJlYW0pIHtcblx0XHRcdHRoaXMuc291cmNlID0gZXZlbnRTdHJlYW07XG5cdFx0fVxuXHR9XG5cblx0bGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8RSwgUj4pOiBPYnNlcnZhYmxlPFI+IHtcblx0XHRjb25zdCBvYnNlcnZhYmxlID0gbmV3IERvbWFpbkV2ZW50QnVzPFI+KCk7XG5cdFx0b2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuXHRcdG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0XHRyZXR1cm4gb2JzZXJ2YWJsZTtcblx0fVxuXG5cdG9mRXZlbnQ8RTIgZXh0ZW5kcyBFPiguLi5ldmVudHM6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD4pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiAodGhpcyBhcyBEb21haW5FdmVudEJ1czxhbnk+KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoZG9tYWluRXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGV2ZW50cy5zb21lKChldmVudDogdHlwZW9mIERvbWFpbkV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBldmVudEluc3RhbmNlID0gdGhpcy5jcmVhdGVFdmVudEluc3RhbmNlKGV2ZW50KTtcblx0XHRcdFx0XHRcdHJldHVybiBldmVudEluc3RhbmNlLmVxdWFsc0J5VHlwZShkb21haW5FdmVudCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVFdmVudEluc3RhbmNlKGV2ZW50OiB0eXBlb2YgRG9tYWluRXZlbnQpOiBEb21haW5FdmVudCB7XG5cdFx0Y29uc3QgYXJnczogQXJyYXk8dm9pZD4gPSBbXSxcblx0XHRcdGFyZ3VtZW50TGVuZ3RoID0gZXZlbnQuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0cmV0dXJuIChuZXcgKGV2ZW50IGFzIGFueSkoLi4uYXJncykpO1xuXHR9XG5cbn1cbiJdfQ==