/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommandLogger } from '../domain/command/command.logger';
import { DomainEventLogger } from '../domain/event/domain-event.logger';
/** @type {?} */
export var hermesApi = 'hermesApi';
var HermesApi = /** @class */ (function () {
    function HermesApi(platformId, commandLogger, eventLogger) {
        this.platformId = platformId;
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
        if (isPlatformBrowser(this.platformId)) {
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
                    },
                    /**
                     * @param {?} domainName
                     * @return {?}
                     */
                    set domain(domainName) {
                        if (domainName) {
                            api.commandLogger.setDomain(domainName);
                            api.eventLogger.setDomain(domainName);
                        }
                    }
                };
            });
            window[hermesApi] = api(this);
            window[hermesApi].loggers = false;
        }
    }
    HermesApi.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HermesApi.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
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
    HermesApi.prototype.platformId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInVpLWFwaS9oZXJtZXMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQUl4RSxNQUFNLEtBQU8sU0FBUyxHQUFHLFdBQVc7QUFFcEM7SUFHQyxtQkFBeUMsVUFBa0IsRUFDaEQsYUFBNEIsRUFDNUIsV0FBOEI7UUFGQSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2hELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUV4QyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7Z0JBRWpDLEdBQUc7Ozs7WUFBRyxVQUFDLEdBQWM7Z0JBQzFCLE9BQU87Ozs7O29CQUNOLElBQUksT0FBTyxDQUFDLE9BQWdCO3dCQUMzQixJQUFJLE9BQU8sRUFBRTs0QkFDWixHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUMxQixHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO3lCQUN4Qjs2QkFBTTs0QkFDTixHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUN6QixHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUN2QjtvQkFDRixDQUFDOzs7OztvQkFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFrQjt3QkFDNUIsSUFBSSxVQUFVLEVBQUU7NEJBQ2YsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQ3hDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUN0QztvQkFDRixDQUFDO2lCQUNELENBQUM7WUFDSCxDQUFDLENBQUE7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ2xDO0lBQ0YsQ0FBQzs7Z0JBakNELFVBQVU7Ozs7Z0JBRzJDLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXO2dCQVZ2QixhQUFhO2dCQUNiLGlCQUFpQjs7SUF3QzFCLGdCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0FqQ1ksU0FBUzs7Ozs7O0lBRVQsK0JBQStDOzs7OztJQUN4RCxrQ0FBb0M7Ozs7O0lBQ3BDLGdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5sb2dnZXInO1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcblxuZXhwb3J0IGNvbnN0IGhlcm1lc0FwaSA9ICdoZXJtZXNBcGknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVybWVzQXBpIHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcblx0XHRcdFx0cHJpdmF0ZSBjb21tYW5kTG9nZ2VyOiBDb21tYW5kTG9nZ2VyLFxuXHRcdFx0XHRwcml2YXRlIGV2ZW50TG9nZ2VyOiBEb21haW5FdmVudExvZ2dlcikge1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblxuXHRcdFx0Y29uc3QgYXBpID0gKGFwaTogSGVybWVzQXBpKSA9PiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0c2V0IGxvZ2dlcnMoZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdFx0XHRcdFx0aWYgKGVuYWJsZWQpIHtcblx0XHRcdFx0XHRcdFx0YXBpLmNvbW1hbmRMb2dnZXIuc3RhcnQoKTtcblx0XHRcdFx0XHRcdFx0YXBpLmV2ZW50TG9nZ2VyLnN0YXJ0KCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRhcGkuY29tbWFuZExvZ2dlci5zdG9wKCk7XG5cdFx0XHRcdFx0XHRcdGFwaS5ldmVudExvZ2dlci5zdG9wKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZXQgZG9tYWluKGRvbWFpbk5hbWU6IHN0cmluZykge1xuXHRcdFx0XHRcdFx0aWYgKGRvbWFpbk5hbWUpIHtcblx0XHRcdFx0XHRcdFx0YXBpLmNvbW1hbmRMb2dnZXIuc2V0RG9tYWluKGRvbWFpbk5hbWUpO1xuXHRcdFx0XHRcdFx0XHRhcGkuZXZlbnRMb2dnZXIuc2V0RG9tYWluKGRvbWFpbk5hbWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH07XG5cblx0XHRcdHdpbmRvd1toZXJtZXNBcGldID0gYXBpKHRoaXMpO1xuXG5cdFx0XHR3aW5kb3dbaGVybWVzQXBpXS5sb2dnZXJzID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XG4iXX0=