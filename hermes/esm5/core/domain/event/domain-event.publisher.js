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
            // eslint-disable-next-line no-console
            console.error(event + " is not defined");
        }
        if (!(event instanceof DomainEvent)) {
            // throw new Error(`${event} is not a DomainEvent`);
            // eslint-disable-next-line no-console
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUs3QztJQUdDLDhCQUFvQixXQUE4QjtRQUE5QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFDbEQsQ0FBQzs7Ozs7SUFJRCxzQ0FBTzs7OztJQUFQLFVBQVEsSUFBd0U7O1FBRS9FLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBRXhCLEtBQWdCLElBQUEsU0FBQSxpQkFBQSxJQUFJLENBQUEsMEJBQUEsNENBQUU7b0JBQWpCLElBQUksR0FBRyxpQkFBQTtvQkFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN2Qjs7Ozs7Ozs7O1NBQ0Q7YUFBTSxJQUFJLElBQUksWUFBWSxXQUFXLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNGLENBQUM7Ozs7O0lBRUQsbURBQW9COzs7O0lBQXBCLFVBQXFCLFNBQXFDO1FBQTFELGlCQU9DO1FBTkEsU0FBUyxDQUFDLFNBQVMsRUFBRTthQUNqQixPQUFPOzs7O1FBQUMsVUFBQyxjQUEyQztZQUNwRCxLQUFJLENBQUMsT0FBTyxDQUNYLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FDOUIsQ0FBQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBRU8sMkNBQVk7Ozs7O0lBQXBCLFVBQXFCLEtBQStCO1FBRW5ELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxzQ0FBc0M7WUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBSSxLQUFLLG9CQUFpQixDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLEVBQUU7WUFDcEMsb0RBQW9EO1lBRXBELHNDQUFzQztZQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFJLEtBQUssMEJBQXVCLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQTVDRCxVQUFVOzs7O2dCQU5GLGlCQUFpQjs7SUFtRDFCLDJCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0E1Q1ksb0JBQW9COzs7Ozs7SUFFcEIsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWV2ZW50JztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdHJlYW0nO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuL2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50UHVibGlzaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50U3RyZWFtOiBEb21haW5FdmVudFN0cmVhbSkge1xuXHR9XG5cblx0cHVibGlzaChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogdm9pZDtcblx0cHVibGlzaChldmVudHM6IFJlYWRvbmx5QXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pik6IHZvaWQ7XG5cdHB1Ymxpc2goYXJnczogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+IHwgUmVhZG9ubHlBcnJheTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+KTogdm9pZCB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXG5cdFx0XHRmb3IgKGxldCBhcmcgb2YgYXJncykge1xuXHRcdFx0XHR0aGlzLnB1Ymxpc2hFdmVudChhcmcpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoYXJncyBpbnN0YW5jZW9mIERvbWFpbkV2ZW50KSB7XG5cdFx0XHR0aGlzLnB1Ymxpc2hFdmVudChhcmdzKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+KTogdm9pZCB7XG5cdFx0YWdncmVnYXRlLmdldEV2ZW50cygpXG5cdFx0XHRcdCAuZm9yRWFjaCgoYWdncmVnYXRlRXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHRcdCB0aGlzLnB1Ymxpc2goXG5cdFx0XHRcdFx0XHQgYWdncmVnYXRlRXZlbnQudG9Eb21haW5FdmVudCgpXG5cdFx0XHRcdFx0ICk7XG5cdFx0XHRcdCB9KTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEV2ZW50KGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiB2b2lkIHtcblxuXHRcdGlmICghZXZlbnQpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2V2ZW50fSBpcyBub3QgZGVmaW5lZGApO1xuXHRcdH1cblxuXHRcdGlmICghKGV2ZW50IGluc3RhbmNlb2YgRG9tYWluRXZlbnQpKSB7XG5cdFx0XHQvLyB0aHJvdyBuZXcgRXJyb3IoYCR7ZXZlbnR9IGlzIG5vdCBhIERvbWFpbkV2ZW50YCk7XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2V2ZW50fSBpcyBub3QgYSBEb21haW5FdmVudGApO1xuXHRcdH1cblxuXHRcdHRoaXMuZXZlbnRTdHJlYW0ubmV4dChldmVudCk7XG5cdH1cbn1cbiJdfQ==