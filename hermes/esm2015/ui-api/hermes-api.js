/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommandLogger } from '../domain/command/command.logger';
import { DomainEventLogger } from '../domain/event/domain-event.logger';
/** @type {?} */
export const hermesApi = 'hermesApi';
export class HermesApi {
    /**
     * @param {?} platformId
     * @param {?} commandLogger
     * @param {?} eventLogger
     */
    constructor(platformId, commandLogger, eventLogger) {
        this.platformId = platformId;
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const api = (/**
             * @param {?} api
             * @return {?}
             */
            (api) => {
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
    }
}
HermesApi.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HermesApi.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: CommandLogger },
    { type: DomainEventLogger }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInVpLWFwaS9oZXJtZXMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQUl4RSxNQUFNLE9BQU8sU0FBUyxHQUFHLFdBQVc7QUFHcEMsTUFBTSxPQUFPLFNBQVM7Ozs7OztJQUVyQixZQUF5QyxVQUFrQixFQUNoRCxhQUE0QixFQUM1QixXQUE4QjtRQUZBLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDaEQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBRXhDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztrQkFFakMsR0FBRzs7OztZQUFHLENBQUMsR0FBYyxFQUFFLEVBQUU7Z0JBQzlCLE9BQU87Ozs7O29CQUNOLElBQUksT0FBTyxDQUFDLE9BQWdCO3dCQUMzQixJQUFJLE9BQU8sRUFBRTs0QkFDWixHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUMxQixHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO3lCQUN4Qjs2QkFBTTs0QkFDTixHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUN6QixHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUN2QjtvQkFDRixDQUFDO2lCQUNELENBQUM7WUFDSCxDQUFDLENBQUE7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ2xDO0lBQ0YsQ0FBQzs7O1lBM0JELFVBQVU7Ozs7WUFHMkMsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7WUFWdkIsYUFBYTtZQUNiLGlCQUFpQjs7Ozs7OztJQVNiLCtCQUErQzs7Ozs7SUFDeEQsa0NBQW9DOzs7OztJQUNwQyxnQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQubG9nZ2VyJztcblxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBjb25zdCBoZXJtZXNBcGkgPSAnaGVybWVzQXBpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlcm1lc0FwaSB7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG5cdFx0XHRcdHByaXZhdGUgY29tbWFuZExvZ2dlcjogQ29tbWFuZExvZ2dlcixcblx0XHRcdFx0cHJpdmF0ZSBldmVudExvZ2dlcjogRG9tYWluRXZlbnRMb2dnZXIpIHtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cblx0XHRcdGNvbnN0IGFwaSA9IChhcGk6IEhlcm1lc0FwaSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHNldCBsb2dnZXJzKGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRcdFx0XHRcdGlmIChlbmFibGVkKSB7XG5cdFx0XHRcdFx0XHRcdGFwaS5jb21tYW5kTG9nZ2VyLnN0YXJ0KCk7XG5cdFx0XHRcdFx0XHRcdGFwaS5ldmVudExvZ2dlci5zdGFydCgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0YXBpLmNvbW1hbmRMb2dnZXIuc3RvcCgpO1xuXHRcdFx0XHRcdFx0XHRhcGkuZXZlbnRMb2dnZXIuc3RvcCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH07XG5cblx0XHRcdHdpbmRvd1toZXJtZXNBcGldID0gYXBpKHRoaXMpO1xuXG5cdFx0XHR3aW5kb3dbaGVybWVzQXBpXS5sb2dnZXJzID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XG4iXX0=