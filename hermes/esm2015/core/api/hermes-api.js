/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvYXBpL2hlcm1lcy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBSXhFLE1BQU0sT0FBTyxTQUFTLEdBQUcsV0FBVztBQUdwQyxNQUFNLE9BQU8sU0FBUzs7Ozs7O0lBRXJCLFlBQXlDLFVBQWtCLEVBQ2hELGFBQTRCLEVBQzVCLFdBQThCO1FBRkEsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNoRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFFeEMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7O2tCQUVqQyxHQUFHOzs7O1lBQUcsQ0FBQyxHQUFjLEVBQUUsRUFBRTtnQkFDOUIsT0FBTzs7Ozs7b0JBQ04sSUFBSSxPQUFPLENBQUMsT0FBZ0I7d0JBQzNCLElBQUksT0FBTyxFQUFFOzRCQUNaLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQzFCLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7eUJBQ3hCOzZCQUFNOzRCQUNOLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7NEJBQ3pCLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7eUJBQ3ZCO29CQUNGLENBQUM7Ozs7O29CQUNELElBQUksTUFBTSxDQUFDLFVBQWtCO3dCQUM1QixJQUFJLFVBQVUsRUFBRTs0QkFDZixHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDeEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7eUJBQ3RDO29CQUNGLENBQUM7aUJBQ0QsQ0FBQztZQUNILENBQUMsQ0FBQTtZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDbEM7SUFDRixDQUFDOzs7WUFqQ0QsVUFBVTs7OztZQUcyQyxNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVztZQVZ2QixhQUFhO1lBQ2IsaUJBQWlCOzs7Ozs7O0lBU2IsK0JBQStDOzs7OztJQUN4RCxrQ0FBb0M7Ozs7O0lBQ3BDLGdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5sb2dnZXInO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xuXG5leHBvcnQgY29uc3QgaGVybWVzQXBpID0gJ2hlcm1lc0FwaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZXJtZXNBcGkge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuXHRcdFx0XHRwcml2YXRlIGNvbW1hbmRMb2dnZXI6IENvbW1hbmRMb2dnZXIsXG5cdFx0XHRcdHByaXZhdGUgZXZlbnRMb2dnZXI6IERvbWFpbkV2ZW50TG9nZ2VyKSB7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXG5cdFx0XHRjb25zdCBhcGkgPSAoYXBpOiBIZXJtZXNBcGkpID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRzZXQgbG9nZ2VycyhlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0XHRcdFx0XHRpZiAoZW5hYmxlZCkge1xuXHRcdFx0XHRcdFx0XHRhcGkuY29tbWFuZExvZ2dlci5zdGFydCgpO1xuXHRcdFx0XHRcdFx0XHRhcGkuZXZlbnRMb2dnZXIuc3RhcnQoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGFwaS5jb21tYW5kTG9nZ2VyLnN0b3AoKTtcblx0XHRcdFx0XHRcdFx0YXBpLmV2ZW50TG9nZ2VyLnN0b3AoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNldCBkb21haW4oZG9tYWluTmFtZTogc3RyaW5nKSB7XG5cdFx0XHRcdFx0XHRpZiAoZG9tYWluTmFtZSkge1xuXHRcdFx0XHRcdFx0XHRhcGkuY29tbWFuZExvZ2dlci5zZXREb21haW4oZG9tYWluTmFtZSk7XG5cdFx0XHRcdFx0XHRcdGFwaS5ldmVudExvZ2dlci5zZXREb21haW4oZG9tYWluTmFtZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblxuXHRcdFx0d2luZG93W2hlcm1lc0FwaV0gPSBhcGkodGhpcyk7XG5cblx0XHRcdHdpbmRvd1toZXJtZXNBcGldLmxvZ2dlcnMgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==