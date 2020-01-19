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
     * @param {?} aggregateEvent
     * @param {?} command
     * @return {?}
     */
    DomainEventPublisher.prototype.dispatchAggregateEvent = /**
     * @param {?} aggregateEvent
     * @param {?} command
     * @return {?}
     */
    function (aggregateEvent, command) {
        // TODO
        // const domainEventName = aggregateEvent.getDomainEventName() as typeof DomainEvent;
        //
        // const domainEvent: DomainEvent = new (domainEventName)(command.getAggregateId());
        // this.eventStream.next();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0M7SUFHQyw4QkFBb0IsV0FBOEI7UUFBOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBQ2xELENBQUM7Ozs7O0lBSUQsc0NBQU87Ozs7SUFBUCxVQUFRLElBQThDOztRQUVyRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUV4QixLQUFnQixJQUFBLFNBQUEsaUJBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO29CQUFqQixJQUFJLEdBQUcsaUJBQUE7b0JBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdkI7Ozs7Ozs7OztTQUNEO2FBQU0sSUFBSSxJQUFJLFlBQVksV0FBVyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7SUFDRixDQUFDOzs7Ozs7SUFFRCxxREFBc0I7Ozs7O0lBQXRCLFVBQXVCLGNBQThCLEVBQUUsT0FBZ0I7UUFFdEUsT0FBTztRQUNQLHFGQUFxRjtRQUNyRixFQUFFO1FBQ0Ysb0ZBQW9GO1FBRXBGLDJCQUEyQjtJQUM1QixDQUFDOzs7Ozs7SUFFTywyQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBa0I7UUFFdEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUksS0FBSyxvQkFBaUIsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxFQUFFO1lBQ3BDLG9EQUFvRDtZQUVwRCxPQUFPLENBQUMsS0FBSyxDQUFJLEtBQUssMEJBQXVCLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQTNDRCxVQUFVOzs7O2dCQUpGLGlCQUFpQjs7SUFnRDFCLDJCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0EzQ1ksb0JBQW9COzs7Ozs7SUFFcEIsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29tbWFuZC9hZ2dyZWdhdGUtZXZlbnQnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudFN0cmVhbSB9IGZyb20gJy4vZG9tYWluLWV2ZW50LnN0cmVhbSc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRQdWJsaXNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRTdHJlYW06IERvbWFpbkV2ZW50U3RyZWFtKSB7XG5cdH1cblxuXHRwdWJsaXNoKGV2ZW50OiBEb21haW5FdmVudCk6IHZvaWQ7XG5cdHB1Ymxpc2goZXZlbnRzOiBSZWFkb25seUFycmF5PERvbWFpbkV2ZW50Pik6IHZvaWQ7XG5cdHB1Ymxpc2goYXJnczogRG9tYWluRXZlbnQgfCBSZWFkb25seUFycmF5PERvbWFpbkV2ZW50Pik6IHZvaWQge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblxuXHRcdFx0Zm9yIChsZXQgYXJnIG9mIGFyZ3MpIHtcblx0XHRcdFx0dGhpcy5wdWJsaXNoRXZlbnQoYXJnKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGFyZ3MgaW5zdGFuY2VvZiBEb21haW5FdmVudCkge1xuXHRcdFx0dGhpcy5wdWJsaXNoRXZlbnQoYXJncyk7XG5cdFx0fVxuXHR9XG5cblx0ZGlzcGF0Y2hBZ2dyZWdhdGVFdmVudChhZ2dyZWdhdGVFdmVudDogQWdncmVnYXRlRXZlbnQsIGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdC8vIFRPRE9cblx0XHQvLyBjb25zdCBkb21haW5FdmVudE5hbWUgPSBhZ2dyZWdhdGVFdmVudC5nZXREb21haW5FdmVudE5hbWUoKSBhcyB0eXBlb2YgRG9tYWluRXZlbnQ7XG5cdFx0Ly9cblx0XHQvLyBjb25zdCBkb21haW5FdmVudDogRG9tYWluRXZlbnQgPSBuZXcgKGRvbWFpbkV2ZW50TmFtZSkoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdC8vIHRoaXMuZXZlbnRTdHJlYW0ubmV4dCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRXZlbnQoZXZlbnQ6IERvbWFpbkV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoIWV2ZW50KSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2V2ZW50fSBpcyBub3QgZGVmaW5lZGApO1xuXHRcdH1cblxuXHRcdGlmICghKGV2ZW50IGluc3RhbmNlb2YgRG9tYWluRXZlbnQpKSB7XG5cdFx0XHQvLyB0aHJvdyBuZXcgRXJyb3IoYCR7ZXZlbnR9IGlzIG5vdCBhIERvbWFpbkV2ZW50YCk7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoYCR7ZXZlbnR9IGlzIG5vdCBhIERvbWFpbkV2ZW50YCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5ldmVudFN0cmVhbS5uZXh0KGV2ZW50KTtcblx0fVxufVxuIl19