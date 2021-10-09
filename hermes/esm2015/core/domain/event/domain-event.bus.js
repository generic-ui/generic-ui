/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventStream } from './domain-event.stream';
import { HermesObservable } from '../../../common/stream/observable/hermes.observable';
import { hermesFilter } from '../../../common/stream/operator/hermes.filter';
/**
 * @template E
 */
export class DomainEventBus extends HermesObservable {
    /**
     * @param {?} eventStream
     */
    constructor(eventStream) {
        super();
        this.eventStream = eventStream;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    subscribe(arg) {
        return this.eventStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
    }
    /**
     * @template E2
     * @param {...?} events
     * @return {?}
     */
    ofEvent(...events) {
        return ((/** @type {?} */ (this)))
            .eventStream
            .toObservable()
            .pipe(hermesFilter((/**
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
            .eventStream
            .toObservable()
            .pipe(hermesFilter((/**
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventBus.prototype.eventStream;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmJ1cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7O0FBSzdFLE1BQU0sT0FBTyxjQUE2QyxTQUFRLGdCQUFtQjs7OztJQUVwRixZQUE2QixXQUE4QjtRQUMxRCxLQUFLLEVBQUUsQ0FBQztRQURvQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFFM0QsQ0FBQzs7Ozs7SUFVRCxTQUFTLENBQ1IsR0FBUTtRQUdSLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQWUsR0FBRyxNQUFpQztRQUN6RCxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUF1QixDQUFDO2FBQ2xDLFdBQVc7YUFDWCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osWUFBWTs7OztRQUFDLENBQUMsV0FBcUMsRUFBRSxFQUFFO1lBQ3RELE9BQU8sTUFBTSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTs7c0JBQzFDLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO2dCQUNyRCxPQUFPLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFlLEdBQUcsUUFBOEU7UUFDN0csT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBdUIsQ0FBQzthQUNsQyxXQUFXO2FBQ1gsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxDQUFDLEtBQStCLEVBQUUsRUFBRTtZQUNoRCxPQUFPLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxPQUFzRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQzlILENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxLQUF5Qjs7Y0FDOUMsSUFBSSxHQUFnQixFQUFFOztjQUMzQixjQUFjLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBRTFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4QyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQXRERCxVQUFVOzs7O1lBUkYsaUJBQWlCOzs7Ozs7O0lBV2IscUNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuc3RyZWFtJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXJJbXBsIH0gZnJvbSAnLi9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBoZXJtZXNGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5maWx0ZXInO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9zdWJzY3JpcHRpb24vaGVybWVzLnN1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL3N1YnNjcmliZXIvaGVybWVzLnN1YnNjcmliZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRCdXM8RSA9IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4gZXh0ZW5kcyBIZXJtZXNPYnNlcnZhYmxlPEU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGV2ZW50U3RyZWFtOiBEb21haW5FdmVudFN0cmVhbSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdWJzY3JpYmUoXG5cdFx0bmV4dD86ICh2YWx1ZTogRSkgPT4gdm9pZCxcblx0XHRlcnJvcj86IChlcnJvcjogYW55KSA9PiB2b2lkLFxuXHRcdGNvbXBsZXRlPzogKCkgPT4gdm9pZFxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cdHN1YnNjcmliZShcblx0XHRzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPEU+XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdGFyZzogYW55XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbiB7XG5cblx0XHRyZXR1cm4gdGhpcy5ldmVudFN0cmVhbS50b09ic2VydmFibGUoKS5zdWJzY3JpYmUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG5cdH1cblxuXHRvZkV2ZW50PEUyIGV4dGVuZHMgRT4oLi4uZXZlbnRzOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+KTogSGVybWVzT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgRG9tYWluRXZlbnRCdXM8YW55Pilcblx0XHRcdC5ldmVudFN0cmVhbVxuXHRcdFx0LnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKChkb21haW5FdmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGV2ZW50cy5zb21lKChldmVudDogdHlwZW9mIERvbWFpbkV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBldmVudEluc3RhbmNlID0gdGhpcy5jcmVhdGVFdmVudEluc3RhbmNlKGV2ZW50KTtcblx0XHRcdFx0XHRcdHJldHVybiBldmVudEluc3RhbmNlLmVxdWFsc0J5VHlwZShkb21haW5FdmVudCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0b2ZFdmVudEhhbmRsZXI8RTIgZXh0ZW5kcyBFPiguLi5oYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pj4pOiBhbnkge1xuXHRcdHJldHVybiAodGhpcyBhcyBEb21haW5FdmVudEJ1czxhbnk+KVxuXHRcdFx0LmV2ZW50U3RyZWFtXG5cdFx0XHQudG9PYnNlcnZhYmxlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRoZXJtZXNGaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PikgPT4gaGFuZGxlci5mb3JFdmVudHMoW2V2ZW50XSkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRXZlbnRJbnN0YW5jZShldmVudDogdHlwZW9mIERvbWFpbkV2ZW50KTogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+IHtcblx0XHRjb25zdCBhcmdzOiBBcnJheTx2b2lkPiA9IFtdLFxuXHRcdFx0YXJndW1lbnRMZW5ndGggPSBldmVudC5jb25zdHJ1Y3Rvci5sZW5ndGg7XG5cblx0XHRhcmdzLmZpbGwodW5kZWZpbmVkLCAwLCBhcmd1bWVudExlbmd0aCk7XG5cblx0XHRyZXR1cm4gKG5ldyAoZXZlbnQgYXMgYW55KSguLi5hcmdzKSk7XG5cdH1cblxufVxuIl19