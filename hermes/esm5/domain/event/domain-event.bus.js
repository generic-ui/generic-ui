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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmJ1cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUkxRDtJQUNrRSwwQ0FBYTtJQUU5RSx3QkFBWSxXQUErQjtRQUEzQyxZQUNDLGlCQUFPLFNBS1A7UUFIQSxJQUFJLFdBQVcsRUFBRTtZQUNoQixLQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztTQUMxQjs7SUFDRixDQUFDOzs7Ozs7SUFFRCw2QkFBSTs7Ozs7SUFBSixVQUFRLFFBQXdCOztZQUN6QixVQUFVLEdBQUcsSUFBSSxjQUFjLEVBQUs7UUFDMUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekIsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsZ0NBQU87Ozs7O0lBQVA7UUFBQSxpQkFVQztRQVZxQixnQkFBb0M7YUFBcEMsVUFBb0MsRUFBcEMscUJBQW9DLEVBQXBDLElBQW9DO1lBQXBDLDJCQUFvQzs7UUFDekQsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBdUIsQ0FBQzthQUNsQyxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsV0FBcUM7WUFDNUMsT0FBTyxNQUFNLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsS0FBeUI7O29CQUN0QyxhQUFhLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztnQkFDckQsT0FBTyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hELENBQUMsRUFBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLDRDQUFtQjs7Ozs7SUFBM0IsVUFBNEIsS0FBeUI7O1lBQzlDLElBQUksR0FBZ0IsRUFBRTs7WUFDM0IsY0FBYyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUUxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEMsT0FBTyxNQUFLLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUMsWUFBZCxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLDZCQUFJLElBQUksTUFBRSxDQUFDO0lBQ3RDLENBQUM7O2dCQXJDRCxVQUFVOzs7O2dCQUpGLGlCQUFpQjs7SUEyQzFCLHFCQUFDO0NBQUEsQUF2Q0QsQ0FDa0UsVUFBVSxHQXNDM0U7U0F0Q1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9hZ2dyZWdhdGUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudEJ1czxFID0gRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiBleHRlbmRzIE9ic2VydmFibGU8RT4ge1xuXG5cdGNvbnN0cnVjdG9yKGV2ZW50U3RyZWFtPzogRG9tYWluRXZlbnRTdHJlYW0pIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0aWYgKGV2ZW50U3RyZWFtKSB7XG5cdFx0XHR0aGlzLnNvdXJjZSA9IGV2ZW50U3RyZWFtO1xuXHRcdH1cblx0fVxuXG5cdGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPEUsIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBEb21haW5FdmVudEJ1czxSPigpO1xuXHRcdG9ic2VydmFibGUuc291cmNlID0gdGhpcztcblx0XHRvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0cmV0dXJuIG9ic2VydmFibGU7XG5cdH1cblxuXHRvZkV2ZW50PEUyIGV4dGVuZHMgRT4oLi4uZXZlbnRzOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgRG9tYWluRXZlbnRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGRvbWFpbkV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZXZlbnRzLnNvbWUoKGV2ZW50OiB0eXBlb2YgRG9tYWluRXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGV2ZW50SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUV2ZW50SW5zdGFuY2UoZXZlbnQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV2ZW50SW5zdGFuY2UuZXF1YWxzQnlUeXBlKGRvbWFpbkV2ZW50KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUV2ZW50SW5zdGFuY2UoZXZlbnQ6IHR5cGVvZiBEb21haW5FdmVudCk6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPiB7XG5cdFx0Y29uc3QgYXJnczogQXJyYXk8dm9pZD4gPSBbXSxcblx0XHRcdGFyZ3VtZW50TGVuZ3RoID0gZXZlbnQuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0cmV0dXJuIChuZXcgKGV2ZW50IGFzIGFueSkoLi4uYXJncykpO1xuXHR9XG5cbn1cbiJdfQ==