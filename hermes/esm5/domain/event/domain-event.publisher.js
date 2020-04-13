/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventStream } from './domain-event.stream';
import { DomainEvent } from './domain-event';
var DomainEventPublisher = /** @class */ (function () {
    function DomainEventPublisher(eventStream) {
        this.eventStream = eventStream;
    }
    /**
     * @param {?} args
     * @return {?}
     */
    DomainEventPublisher.prototype.publish = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var e_1, _a;
        if (Array.isArray(args)) {
            try {
                for (var args_1 = tslib_1.__values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                    var arg = args_1_1.value;
                    this.publishEvent(arg);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else if (args instanceof DomainEvent) {
            this.publishEvent(args);
        }
    };
    /**
     * @param {?} aggregate
     * @return {?}
     */
    DomainEventPublisher.prototype.publishFromAggregate = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        var _this = this;
        aggregate.getEvents()
            .forEach((/**
         * @param {?} aggregateEvent
         * @return {?}
         */
        function (aggregateEvent) {
            _this.publish(aggregateEvent.toDomainEvent());
        }));
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DomainEventPublisher.prototype.publishEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!event) {
            console.error(event + " is not defined");
        }
        if (!(event instanceof DomainEvent)) {
            // throw new Error(`${event} is not a DomainEvent`);
            console.error(event + " is not a DomainEvent");
        }
        this.eventStream.next(event);
    };
    DomainEventPublisher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DomainEventPublisher.ctorParameters = function () { return [
        { type: DomainEventStream }
    ]; };
    return DomainEventPublisher;
}());
export { DomainEventPublisher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventPublisher.prototype.eventStream;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLN0M7SUFHQyw4QkFBb0IsV0FBOEI7UUFBOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBQ2xELENBQUM7Ozs7O0lBSUQsc0NBQU87Ozs7SUFBUCxVQUFRLElBQXdFOztRQUUvRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUV4QixLQUFnQixJQUFBLFNBQUEsaUJBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO29CQUFqQixJQUFJLEdBQUcsaUJBQUE7b0JBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdkI7Ozs7Ozs7OztTQUNEO2FBQU0sSUFBSSxJQUFJLFlBQVksV0FBVyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7SUFDRixDQUFDOzs7OztJQUVELG1EQUFvQjs7OztJQUFwQixVQUFxQixTQUFxQztRQUExRCxpQkFPQztRQU5BLFNBQVMsQ0FBQyxTQUFTLEVBQUU7YUFDakIsT0FBTzs7OztRQUFDLFVBQUMsY0FBMkM7WUFDcEQsS0FBSSxDQUFDLE9BQU8sQ0FDWCxjQUFjLENBQUMsYUFBYSxFQUFFLENBQzlCLENBQUM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUVPLDJDQUFZOzs7OztJQUFwQixVQUFxQixLQUErQjtRQUVuRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBSSxLQUFLLG9CQUFpQixDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLEVBQUU7WUFDcEMsb0RBQW9EO1lBRXBELE9BQU8sQ0FBQyxLQUFLLENBQUksS0FBSywwQkFBdUIsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBMUNELFVBQVU7Ozs7Z0JBTkYsaUJBQWlCOztJQWlEMUIsMkJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQTFDWSxvQkFBb0I7Ozs7OztJQUVwQiwyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudCc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuc3RyZWFtJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRQdWJsaXNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRTdHJlYW06IERvbWFpbkV2ZW50U3RyZWFtKSB7XG5cdH1cblxuXHRwdWJsaXNoKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiB2b2lkO1xuXHRwdWJsaXNoKGV2ZW50czogUmVhZG9ubHlBcnJheTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+KTogdm9pZDtcblx0cHVibGlzaChhcmdzOiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4gfCBSZWFkb25seUFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4pOiB2b2lkIHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cblx0XHRcdGZvciAobGV0IGFyZyBvZiBhcmdzKSB7XG5cdFx0XHRcdHRoaXMucHVibGlzaEV2ZW50KGFyZyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChhcmdzIGluc3RhbmNlb2YgRG9tYWluRXZlbnQpIHtcblx0XHRcdHRoaXMucHVibGlzaEV2ZW50KGFyZ3MpO1xuXHRcdH1cblx0fVxuXG5cdHB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZTogQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4pOiB2b2lkIHtcblx0XHRhZ2dyZWdhdGUuZ2V0RXZlbnRzKClcblx0XHRcdFx0IC5mb3JFYWNoKChhZ2dyZWdhdGVFdmVudDogQWdncmVnYXRlRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0IHRoaXMucHVibGlzaChcblx0XHRcdFx0XHRcdCBhZ2dyZWdhdGVFdmVudC50b0RvbWFpbkV2ZW50KClcblx0XHRcdFx0XHQgKTtcblx0XHRcdFx0IH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRXZlbnQoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXG5cdFx0aWYgKCFldmVudCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgJHtldmVudH0gaXMgbm90IGRlZmluZWRgKTtcblx0XHR9XG5cblx0XHRpZiAoIShldmVudCBpbnN0YW5jZW9mIERvbWFpbkV2ZW50KSkge1xuXHRcdFx0Ly8gdGhyb3cgbmV3IEVycm9yKGAke2V2ZW50fSBpcyBub3QgYSBEb21haW5FdmVudGApO1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2V2ZW50fSBpcyBub3QgYSBEb21haW5FdmVudGApO1xuXHRcdH1cblxuXHRcdHRoaXMuZXZlbnRTdHJlYW0ubmV4dChldmVudCk7XG5cdH1cbn1cbiJdfQ==