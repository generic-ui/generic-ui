/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandLogger } from '../domain/command/command.logger';
import { DomainEventLogger } from '../domain/event/domain-event.logger';
/** @type {?} */
export var hermesApi = 'hermesApi';
var HermesApi = /** @class */ (function () {
    function HermesApi(commandLogger, eventLogger) {
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
        /** @type {?} */
        var api = (/**
         * @param {?} api
         * @return {?}
         */
        function (api) {
            return {
                /**
                 * @param {?} enabled
                 * @return {?}
                 */
                set loggers(enabled) {
                    if (enabled) {
                        api.commandLogger.start();
                        api.eventLogger.start();
                    }
                    else {
                        api.commandLogger.stop();
                        api.eventLogger.stop();
                    }
                }
            };
        });
        window[hermesApi] = api(this);
        window[hermesApi].loggers = false;
    }
    HermesApi.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HermesApi.ctorParameters = function () { return [
        { type: CommandLogger },
        { type: DomainEventLogger }
    ]; };
    return HermesApi;
}());
export { HermesApi };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesApi.prototype.commandLogger;
    /**
     * @type {?}
     * @private
     */
    HermesApi.prototype.eventLogger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImFwaS9oZXJtZXMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFJeEUsTUFBTSxLQUFPLFNBQVMsR0FBRyxXQUFXO0FBRXBDO0lBR0MsbUJBQW9CLGFBQTRCLEVBQ3JDLFdBQThCO1FBRHJCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjs7WUFDbEMsR0FBRzs7OztRQUFHLFVBQUMsR0FBYztZQUMxQixPQUFPOzs7OztnQkFDTixJQUFJLE9BQU8sQ0FBQyxPQUFnQjtvQkFDM0IsSUFBSSxPQUFPLEVBQUU7d0JBQ1osR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDMUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDeEI7eUJBQU07d0JBQ04sR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDekIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDdkI7Z0JBQ0YsQ0FBQzthQUNELENBQUM7UUFDSCxDQUFDLENBQUE7UUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7O2dCQXRCRCxVQUFVOzs7O2dCQVBGLGFBQWE7Z0JBQ2IsaUJBQWlCOztJQTZCMUIsZ0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXRCWSxTQUFTOzs7Ozs7SUFFVCxrQ0FBb0M7Ozs7O0lBQzdDLGdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5sb2dnZXInO1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcblxuZXhwb3J0IGNvbnN0IGhlcm1lc0FwaSA9ICdoZXJtZXNBcGknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVybWVzQXBpIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmRMb2dnZXI6IENvbW1hbmRMb2dnZXIsXG5cdFx0XHRcdHByaXZhdGUgZXZlbnRMb2dnZXI6IERvbWFpbkV2ZW50TG9nZ2VyKSB7XG5cdFx0Y29uc3QgYXBpID0gKGFwaTogSGVybWVzQXBpKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzZXQgbG9nZ2VycyhlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0XHRcdFx0aWYgKGVuYWJsZWQpIHtcblx0XHRcdFx0XHRcdGFwaS5jb21tYW5kTG9nZ2VyLnN0YXJ0KCk7XG5cdFx0XHRcdFx0XHRhcGkuZXZlbnRMb2dnZXIuc3RhcnQoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YXBpLmNvbW1hbmRMb2dnZXIuc3RvcCgpO1xuXHRcdFx0XHRcdFx0YXBpLmV2ZW50TG9nZ2VyLnN0b3AoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fTtcblxuXHRcdHdpbmRvd1toZXJtZXNBcGldID0gYXBpKHRoaXMpO1xuXG5cdFx0d2luZG93W2hlcm1lc0FwaV0ubG9nZ2VycyA9IGZhbHNlO1xuXHR9XG59XG4iXX0=