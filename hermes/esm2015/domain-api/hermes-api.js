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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi1hcGkvaGVybWVzLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFJeEUsTUFBTSxPQUFPLFNBQVMsR0FBRyxXQUFXO0FBR3BDLE1BQU0sT0FBTyxTQUFTOzs7Ozs7SUFFckIsWUFBeUMsVUFBa0IsRUFDaEQsYUFBNEIsRUFDNUIsV0FBOEI7UUFGQSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2hELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUV4QyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7a0JBRWpDLEdBQUc7Ozs7WUFBRyxDQUFDLEdBQWMsRUFBRSxFQUFFO2dCQUM5QixPQUFPOzs7OztvQkFDTixJQUFJLE9BQU8sQ0FBQyxPQUFnQjt3QkFDM0IsSUFBSSxPQUFPLEVBQUU7NEJBQ1osR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDMUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt5QkFDeEI7NkJBQU07NEJBQ04sR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDekIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt5QkFDdkI7b0JBQ0YsQ0FBQzs7Ozs7b0JBQ0QsSUFBSSxNQUFNLENBQUMsVUFBa0I7d0JBQzVCLElBQUksVUFBVSxFQUFFOzRCQUNmLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUN4QyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQzt5QkFDdEM7b0JBQ0YsQ0FBQztpQkFDRCxDQUFDO1lBQ0gsQ0FBQyxDQUFBO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU5QixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUNsQztJQUNGLENBQUM7OztZQWpDRCxVQUFVOzs7O1lBRzJDLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXO1lBVnZCLGFBQWE7WUFDYixpQkFBaUI7Ozs7Ozs7SUFTYiwrQkFBK0M7Ozs7O0lBQ3hELGtDQUFvQzs7Ozs7SUFDcEMsZ0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5sb2dnZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5cbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xuXG5leHBvcnQgY29uc3QgaGVybWVzQXBpID0gJ2hlcm1lc0FwaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZXJtZXNBcGkge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuXHRcdFx0XHRwcml2YXRlIGNvbW1hbmRMb2dnZXI6IENvbW1hbmRMb2dnZXIsXG5cdFx0XHRcdHByaXZhdGUgZXZlbnRMb2dnZXI6IERvbWFpbkV2ZW50TG9nZ2VyKSB7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXG5cdFx0XHRjb25zdCBhcGkgPSAoYXBpOiBIZXJtZXNBcGkpID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRzZXQgbG9nZ2VycyhlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0XHRcdFx0XHRpZiAoZW5hYmxlZCkge1xuXHRcdFx0XHRcdFx0XHRhcGkuY29tbWFuZExvZ2dlci5zdGFydCgpO1xuXHRcdFx0XHRcdFx0XHRhcGkuZXZlbnRMb2dnZXIuc3RhcnQoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGFwaS5jb21tYW5kTG9nZ2VyLnN0b3AoKTtcblx0XHRcdFx0XHRcdFx0YXBpLmV2ZW50TG9nZ2VyLnN0b3AoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNldCBkb21haW4oZG9tYWluTmFtZTogc3RyaW5nKSB7XG5cdFx0XHRcdFx0XHRpZiAoZG9tYWluTmFtZSkge1xuXHRcdFx0XHRcdFx0XHRhcGkuY29tbWFuZExvZ2dlci5zZXREb21haW4oZG9tYWluTmFtZSk7XG5cdFx0XHRcdFx0XHRcdGFwaS5ldmVudExvZ2dlci5zZXREb21haW4oZG9tYWluTmFtZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblxuXHRcdFx0d2luZG93W2hlcm1lc0FwaV0gPSBhcGkodGhpcyk7XG5cblx0XHRcdHdpbmRvd1toZXJtZXNBcGldLmxvZ2dlcnMgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==