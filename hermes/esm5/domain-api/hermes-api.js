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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi1hcGkvaGVybWVzLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFJeEUsTUFBTSxLQUFPLFNBQVMsR0FBRyxXQUFXO0FBRXBDO0lBR0MsbUJBQXlDLFVBQWtCLEVBQ2hELGFBQTRCLEVBQzVCLFdBQThCO1FBRkEsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNoRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFFeEMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7O2dCQUVqQyxHQUFHOzs7O1lBQUcsVUFBQyxHQUFjO2dCQUMxQixPQUFPOzs7OztvQkFDTixJQUFJLE9BQU8sQ0FBQyxPQUFnQjt3QkFDM0IsSUFBSSxPQUFPLEVBQUU7NEJBQ1osR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDMUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt5QkFDeEI7NkJBQU07NEJBQ04sR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDekIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt5QkFDdkI7b0JBQ0YsQ0FBQzs7Ozs7b0JBQ0QsSUFBSSxNQUFNLENBQUMsVUFBa0I7d0JBQzVCLElBQUksVUFBVSxFQUFFOzRCQUNmLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUN4QyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQzt5QkFDdEM7b0JBQ0YsQ0FBQztpQkFDRCxDQUFDO1lBQ0gsQ0FBQyxDQUFBO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU5QixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUNsQztJQUNGLENBQUM7O2dCQWpDRCxVQUFVOzs7O2dCQUcyQyxNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVztnQkFWdkIsYUFBYTtnQkFDYixpQkFBaUI7O0lBd0MxQixnQkFBQztDQUFBLEFBbENELElBa0NDO1NBakNZLFNBQVM7Ozs7OztJQUVULCtCQUErQzs7Ozs7SUFDeEQsa0NBQW9DOzs7OztJQUNwQyxnQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQubG9nZ2VyJztcblxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBjb25zdCBoZXJtZXNBcGkgPSAnaGVybWVzQXBpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlcm1lc0FwaSB7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG5cdFx0XHRcdHByaXZhdGUgY29tbWFuZExvZ2dlcjogQ29tbWFuZExvZ2dlcixcblx0XHRcdFx0cHJpdmF0ZSBldmVudExvZ2dlcjogRG9tYWluRXZlbnRMb2dnZXIpIHtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cblx0XHRcdGNvbnN0IGFwaSA9IChhcGk6IEhlcm1lc0FwaSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHNldCBsb2dnZXJzKGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRcdFx0XHRcdGlmIChlbmFibGVkKSB7XG5cdFx0XHRcdFx0XHRcdGFwaS5jb21tYW5kTG9nZ2VyLnN0YXJ0KCk7XG5cdFx0XHRcdFx0XHRcdGFwaS5ldmVudExvZ2dlci5zdGFydCgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0YXBpLmNvbW1hbmRMb2dnZXIuc3RvcCgpO1xuXHRcdFx0XHRcdFx0XHRhcGkuZXZlbnRMb2dnZXIuc3RvcCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2V0IGRvbWFpbihkb21haW5OYW1lOiBzdHJpbmcpIHtcblx0XHRcdFx0XHRcdGlmIChkb21haW5OYW1lKSB7XG5cdFx0XHRcdFx0XHRcdGFwaS5jb21tYW5kTG9nZ2VyLnNldERvbWFpbihkb21haW5OYW1lKTtcblx0XHRcdFx0XHRcdFx0YXBpLmV2ZW50TG9nZ2VyLnNldERvbWFpbihkb21haW5OYW1lKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXG5cdFx0XHR3aW5kb3dbaGVybWVzQXBpXSA9IGFwaSh0aGlzKTtcblxuXHRcdFx0d2luZG93W2hlcm1lc0FwaV0ubG9nZ2VycyA9IGZhbHNlO1xuXHRcdH1cblx0fVxufVxuIl19