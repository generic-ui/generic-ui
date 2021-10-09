/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventStream } from './domain-event.stream';
import { HermesObservable } from '../../../common/stream/observable/hermes.observable';
import { hermesFilter } from '../../../common/stream/operator/hermes.filter';
/**
 * @template E
 */
var DomainEventBus = /** @class */ (function (_super) {
    tslib_1.__extends(DomainEventBus, _super);
    function DomainEventBus(eventStream) {
        var _this = _super.call(this) || this;
        _this.eventStream = eventStream;
        return _this;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    DomainEventBus.prototype.subscribe = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        return this.eventStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
    };
    /**
     * @template E2
     * @param {...?} events
     * @return {?}
     */
    DomainEventBus.prototype.ofEvent = /**
     * @template E2
     * @param {...?} events
     * @return {?}
     */
    function () {
        var _this = this;
        var events = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            events[_i] = arguments[_i];
        }
        return ((/** @type {?} */ (this)))
            .eventStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} domainEvent
         * @return {?}
         */
        function (domainEvent) {
            return events.some((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var eventInstance = _this.createEventInstance(event);
                return eventInstance.equalsByType(domainEvent);
            }));
        })));
    };
    /**
     * @template E2
     * @param {...?} handlers
     * @return {?}
     */
    DomainEventBus.prototype.ofEventHandler = /**
     * @template E2
     * @param {...?} handlers
     * @return {?}
     */
    function () {
        var handlers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            handlers[_i] = arguments[_i];
        }
        return ((/** @type {?} */ (this)))
            .eventStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) { return handler.forEvents([event]); }));
        })));
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DomainEventBus.prototype.createEventInstance = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var argumentLength = event.constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new (((/** @type {?} */ (event))).bind.apply(((/** @type {?} */ (event))), tslib_1.__spread([void 0], args)))());
    };
    DomainEventBus.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DomainEventBus.ctorParameters = function () { return [
        { type: DomainEventStream }
    ]; };
    return DomainEventBus;
}(HermesObservable));
export { DomainEventBus };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventBus.prototype.eventStream;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmJ1cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7OztBQUk3RTtJQUNrRSwwQ0FBbUI7SUFFcEYsd0JBQTZCLFdBQThCO1FBQTNELFlBQ0MsaUJBQU8sU0FDUDtRQUY0QixpQkFBVyxHQUFYLFdBQVcsQ0FBbUI7O0lBRTNELENBQUM7Ozs7O0lBVUQsa0NBQVM7Ozs7SUFBVCxVQUNDLEdBQVE7UUFHUixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7Ozs7O0lBRUQsZ0NBQU87Ozs7O0lBQVA7UUFBQSxpQkFZQztRQVpxQixnQkFBb0M7YUFBcEMsVUFBb0MsRUFBcEMscUJBQW9DLEVBQXBDLElBQW9DO1lBQXBDLDJCQUFvQzs7UUFDekQsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBdUIsQ0FBQzthQUNsQyxXQUFXO2FBQ1gsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxVQUFDLFdBQXFDO1lBQ2xELE9BQU8sTUFBTSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLEtBQXlCOztvQkFDdEMsYUFBYSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JELE9BQU8sYUFBYSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoRCxDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCx1Q0FBYzs7Ozs7SUFBZDtRQUE2QixrQkFBaUY7YUFBakYsVUFBaUYsRUFBakYscUJBQWlGLEVBQWpGLElBQWlGO1lBQWpGLDZCQUFpRjs7UUFDN0csT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBdUIsQ0FBQzthQUNsQyxXQUFXO2FBQ1gsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxVQUFDLEtBQStCO1lBQzVDLE9BQU8sUUFBUSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLE9BQXNFLElBQUssT0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1FBQzlILENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyw0Q0FBbUI7Ozs7O0lBQTNCLFVBQTRCLEtBQXlCOztZQUM5QyxJQUFJLEdBQWdCLEVBQUU7O1lBQzNCLGNBQWMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU07UUFFMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXhDLE9BQU8sTUFBSyxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLFlBQWQsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyw2QkFBSSxJQUFJLE1BQUUsQ0FBQztJQUN0QyxDQUFDOztnQkF0REQsVUFBVTs7OztnQkFSRixpQkFBaUI7O0lBZ0UxQixxQkFBQztDQUFBLEFBeERELENBQ2tFLGdCQUFnQixHQXVEakY7U0F2RFksY0FBYzs7Ozs7O0lBRWQscUNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuc3RyZWFtJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXJJbXBsIH0gZnJvbSAnLi9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBoZXJtZXNGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5maWx0ZXInO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9zdWJzY3JpcHRpb24vaGVybWVzLnN1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL3N1YnNjcmliZXIvaGVybWVzLnN1YnNjcmliZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRCdXM8RSA9IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4gZXh0ZW5kcyBIZXJtZXNPYnNlcnZhYmxlPEU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGV2ZW50U3RyZWFtOiBEb21haW5FdmVudFN0cmVhbSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdWJzY3JpYmUoXG5cdFx0bmV4dD86ICh2YWx1ZTogRSkgPT4gdm9pZCxcblx0XHRlcnJvcj86IChlcnJvcjogYW55KSA9PiB2b2lkLFxuXHRcdGNvbXBsZXRlPzogKCkgPT4gdm9pZFxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cdHN1YnNjcmliZShcblx0XHRzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPEU+XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdGFyZzogYW55XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbiB7XG5cblx0XHRyZXR1cm4gdGhpcy5ldmVudFN0cmVhbS50b09ic2VydmFibGUoKS5zdWJzY3JpYmUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG5cdH1cblxuXHRvZkV2ZW50PEUyIGV4dGVuZHMgRT4oLi4uZXZlbnRzOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+KTogSGVybWVzT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgRG9tYWluRXZlbnRCdXM8YW55Pilcblx0XHRcdC5ldmVudFN0cmVhbVxuXHRcdFx0LnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKChkb21haW5FdmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGV2ZW50cy5zb21lKChldmVudDogdHlwZW9mIERvbWFpbkV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBldmVudEluc3RhbmNlID0gdGhpcy5jcmVhdGVFdmVudEluc3RhbmNlKGV2ZW50KTtcblx0XHRcdFx0XHRcdHJldHVybiBldmVudEluc3RhbmNlLmVxdWFsc0J5VHlwZShkb21haW5FdmVudCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0b2ZFdmVudEhhbmRsZXI8RTIgZXh0ZW5kcyBFPiguLi5oYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pj4pOiBhbnkge1xuXHRcdHJldHVybiAodGhpcyBhcyBEb21haW5FdmVudEJ1czxhbnk+KVxuXHRcdFx0LmV2ZW50U3RyZWFtXG5cdFx0XHQudG9PYnNlcnZhYmxlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRoZXJtZXNGaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PikgPT4gaGFuZGxlci5mb3JFdmVudHMoW2V2ZW50XSkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRXZlbnRJbnN0YW5jZShldmVudDogdHlwZW9mIERvbWFpbkV2ZW50KTogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+IHtcblx0XHRjb25zdCBhcmdzOiBBcnJheTx2b2lkPiA9IFtdLFxuXHRcdFx0YXJndW1lbnRMZW5ndGggPSBldmVudC5jb25zdHJ1Y3Rvci5sZW5ndGg7XG5cblx0XHRhcmdzLmZpbGwodW5kZWZpbmVkLCAwLCBhcmd1bWVudExlbmd0aCk7XG5cblx0XHRyZXR1cm4gKG5ldyAoZXZlbnQgYXMgYW55KSguLi5hcmdzKSk7XG5cdH1cblxufVxuIl19