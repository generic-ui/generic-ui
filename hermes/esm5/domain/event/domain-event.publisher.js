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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0M7SUFHQyw4QkFBb0IsV0FBOEI7UUFBOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBQ2xELENBQUM7Ozs7O0lBSUQsc0NBQU87Ozs7SUFBUCxVQUFRLElBQThDOztRQUVyRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUV4QixLQUFnQixJQUFBLFNBQUEsaUJBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO29CQUFqQixJQUFJLEdBQUcsaUJBQUE7b0JBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdkI7Ozs7Ozs7OztTQUNEO2FBQU0sSUFBSSxJQUFJLFlBQVksV0FBVyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7SUFDRixDQUFDOzs7Ozs7SUFFRCxxREFBc0I7Ozs7O0lBQXRCLFVBQXVCLGNBQThCLEVBQUUsT0FBZ0I7UUFFdEUsT0FBTztRQUNQLHFGQUFxRjtRQUNyRixFQUFFO1FBQ0Ysb0ZBQW9GO1FBRXBGLDJCQUEyQjtJQUM1QixDQUFDOzs7Ozs7SUFFTywyQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBa0I7UUFFdEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUksS0FBSyxvQkFBaUIsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxFQUFFO1lBQ3BDLG9EQUFvRDtZQUVwRCxPQUFPLENBQUMsS0FBSyxDQUFJLEtBQUssMEJBQXVCLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQTNDRCxVQUFVOzs7O2dCQUpGLGlCQUFpQjs7SUFnRDFCLDJCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0EzQ1ksb0JBQW9COzs7Ozs7SUFFcEIsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLWV2ZW50JztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdHJlYW0nO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuL2RvbWFpbi1ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50UHVibGlzaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50U3RyZWFtOiBEb21haW5FdmVudFN0cmVhbSkge1xuXHR9XG5cblx0cHVibGlzaChldmVudDogRG9tYWluRXZlbnQpOiB2b2lkO1xuXHRwdWJsaXNoKGV2ZW50czogUmVhZG9ubHlBcnJheTxEb21haW5FdmVudD4pOiB2b2lkO1xuXHRwdWJsaXNoKGFyZ3M6IERvbWFpbkV2ZW50IHwgUmVhZG9ubHlBcnJheTxEb21haW5FdmVudD4pOiB2b2lkIHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cblx0XHRcdGZvciAobGV0IGFyZyBvZiBhcmdzKSB7XG5cdFx0XHRcdHRoaXMucHVibGlzaEV2ZW50KGFyZyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChhcmdzIGluc3RhbmNlb2YgRG9tYWluRXZlbnQpIHtcblx0XHRcdHRoaXMucHVibGlzaEV2ZW50KGFyZ3MpO1xuXHRcdH1cblx0fVxuXG5cdGRpc3BhdGNoQWdncmVnYXRlRXZlbnQoYWdncmVnYXRlRXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50LCBjb21tYW5kOiBDb21tYW5kKTogdm9pZCB7XG5cblx0XHQvLyBUT0RPXG5cdFx0Ly8gY29uc3QgZG9tYWluRXZlbnROYW1lID0gYWdncmVnYXRlRXZlbnQuZ2V0RG9tYWluRXZlbnROYW1lKCkgYXMgdHlwZW9mIERvbWFpbkV2ZW50O1xuXHRcdC8vXG5cdFx0Ly8gY29uc3QgZG9tYWluRXZlbnQ6IERvbWFpbkV2ZW50ID0gbmV3IChkb21haW5FdmVudE5hbWUpKGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHQvLyB0aGlzLmV2ZW50U3RyZWFtLm5leHQoKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEV2ZW50KGV2ZW50OiBEb21haW5FdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKCFldmVudCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgJHtldmVudH0gaXMgbm90IGRlZmluZWRgKTtcblx0XHR9XG5cblx0XHRpZiAoIShldmVudCBpbnN0YW5jZW9mIERvbWFpbkV2ZW50KSkge1xuXHRcdFx0Ly8gdGhyb3cgbmV3IEVycm9yKGAke2V2ZW50fSBpcyBub3QgYSBEb21haW5FdmVudGApO1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2V2ZW50fSBpcyBub3QgYSBEb21haW5FdmVudGApO1xuXHRcdH1cblxuXHRcdHRoaXMuZXZlbnRTdHJlYW0ubmV4dChldmVudCk7XG5cdH1cbn1cbiJdfQ==