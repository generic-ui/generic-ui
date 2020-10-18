/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DomainEventStream } from './domain-event.stream';
/**
 * @template E
 */
var DomainEventBus = /** @class */ (function (_super) {
    tslib_1.__extends(DomainEventBus, _super);
    function DomainEventBus(eventStream) {
        var _this = _super.call(this) || this;
        if (eventStream) {
            _this.source = eventStream;
        }
        return _this;
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    DomainEventBus.prototype.lift = /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    function (operator) {
        /** @type {?} */
        var observable = new DomainEventBus();
        observable.source = this;
        observable.operator = operator;
        return observable;
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
            .pipe(filter((/**
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
            .pipe(filter((/**
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
}(Observable));
export { DomainEventBus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmJ1cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBSzFEO0lBQ2tFLDBDQUFhO0lBRTlFLHdCQUFZLFdBQStCO1FBQTNDLFlBQ0MsaUJBQU8sU0FLUDtRQUhBLElBQUksV0FBVyxFQUFFO1lBQ2hCLEtBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1NBQzFCOztJQUNGLENBQUM7Ozs7OztJQUVELDZCQUFJOzs7OztJQUFKLFVBQVEsUUFBd0I7O1lBQ3pCLFVBQVUsR0FBRyxJQUFJLGNBQWMsRUFBSztRQUMxQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN6QixVQUFVLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMvQixPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFRCxnQ0FBTzs7Ozs7SUFBUDtRQUFBLGlCQVVDO1FBVnFCLGdCQUFvQzthQUFwQyxVQUFvQyxFQUFwQyxxQkFBb0MsRUFBcEMsSUFBb0M7WUFBcEMsMkJBQW9DOztRQUN6RCxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUF1QixDQUFDO2FBQ2xDLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxXQUFxQztZQUM1QyxPQUFPLE1BQU0sQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxLQUF5Qjs7b0JBQ3RDLGFBQWEsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO2dCQUNyRCxPQUFPLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsdUNBQWM7Ozs7O0lBQWQ7UUFBNkIsa0JBQWlGO2FBQWpGLFVBQWlGLEVBQWpGLHFCQUFpRixFQUFqRixJQUFpRjtZQUFqRiw2QkFBaUY7O1FBQzdHLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQXVCLENBQUM7YUFDbEMsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEtBQStCO1lBQ3RDLE9BQU8sUUFBUSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLE9BQXNFLElBQUssT0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1FBQzlILENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyw0Q0FBbUI7Ozs7O0lBQTNCLFVBQTRCLEtBQXlCOztZQUM5QyxJQUFJLEdBQWdCLEVBQUU7O1lBQzNCLGNBQWMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU07UUFFMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXhDLE9BQU8sTUFBSyxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLFlBQWQsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyw2QkFBSSxJQUFJLE1BQUUsQ0FBQztJQUN0QyxDQUFDOztnQkE5Q0QsVUFBVTs7OztnQkFMRixpQkFBaUI7O0lBcUQxQixxQkFBQztDQUFBLEFBaERELENBQ2tFLFVBQVUsR0ErQzNFO1NBL0NZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuc3RyZWFtJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXJJbXBsIH0gZnJvbSAnLi9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVyLWltcGwnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudEJ1czxFID0gRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiBleHRlbmRzIE9ic2VydmFibGU8RT4ge1xuXG5cdGNvbnN0cnVjdG9yKGV2ZW50U3RyZWFtPzogRG9tYWluRXZlbnRTdHJlYW0pIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0aWYgKGV2ZW50U3RyZWFtKSB7XG5cdFx0XHR0aGlzLnNvdXJjZSA9IGV2ZW50U3RyZWFtO1xuXHRcdH1cblx0fVxuXG5cdGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPEUsIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBEb21haW5FdmVudEJ1czxSPigpO1xuXHRcdG9ic2VydmFibGUuc291cmNlID0gdGhpcztcblx0XHRvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0cmV0dXJuIG9ic2VydmFibGU7XG5cdH1cblxuXHRvZkV2ZW50PEUyIGV4dGVuZHMgRT4oLi4uZXZlbnRzOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgRG9tYWluRXZlbnRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGRvbWFpbkV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZXZlbnRzLnNvbWUoKGV2ZW50OiB0eXBlb2YgRG9tYWluRXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGV2ZW50SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUV2ZW50SW5zdGFuY2UoZXZlbnQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV2ZW50SW5zdGFuY2UuZXF1YWxzQnlUeXBlKGRvbWFpbkV2ZW50KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRvZkV2ZW50SGFuZGxlcjxFMiBleHRlbmRzIEU+KC4uLmhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+Pik6IGFueSB7XG5cdFx0cmV0dXJuICh0aGlzIGFzIERvbWFpbkV2ZW50QnVzPGFueT4pXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlckltcGw8QWdncmVnYXRlSWQsIERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4pID0+IGhhbmRsZXIuZm9yRXZlbnRzKFtldmVudF0pKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUV2ZW50SW5zdGFuY2UoZXZlbnQ6IHR5cGVvZiBEb21haW5FdmVudCk6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPiB7XG5cdFx0Y29uc3QgYXJnczogQXJyYXk8dm9pZD4gPSBbXSxcblx0XHRcdGFyZ3VtZW50TGVuZ3RoID0gZXZlbnQuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0cmV0dXJuIChuZXcgKGV2ZW50IGFzIGFueSkoLi4uYXJncykpO1xuXHR9XG5cbn1cbiJdfQ==