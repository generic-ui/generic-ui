/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandLogger } from '../domain/command/command.logger';
import { DomainEventLogger } from '../domain/event/domain-event.logger';
/** @type {?} */
export const hermesApi = 'hermesApi';
export class HermesApi {
    /**
     * @param {?} commandLogger
     * @param {?} eventLogger
     */
    constructor(commandLogger, eventLogger) {
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
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
HermesApi.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HermesApi.ctorParameters = () => [
    { type: CommandLogger },
    { type: DomainEventLogger }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImFwaS9oZXJtZXMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFJeEUsTUFBTSxPQUFPLFNBQVMsR0FBRyxXQUFXO0FBR3BDLE1BQU0sT0FBTyxTQUFTOzs7OztJQUVyQixZQUFvQixhQUE0QixFQUNyQyxXQUE4QjtRQURyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7O2NBQ2xDLEdBQUc7Ozs7UUFBRyxDQUFDLEdBQWMsRUFBRSxFQUFFO1lBQzlCLE9BQU87Ozs7O2dCQUNOLElBQUksT0FBTyxDQUFDLE9BQWdCO29CQUMzQixJQUFJLE9BQU8sRUFBRTt3QkFDWixHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUMxQixHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUN4Qjt5QkFBTTt3QkFDTixHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUN6QixHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUN2QjtnQkFDRixDQUFDO2FBQ0QsQ0FBQztRQUNILENBQUMsQ0FBQTtRQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7O1lBdEJELFVBQVU7Ozs7WUFQRixhQUFhO1lBQ2IsaUJBQWlCOzs7Ozs7O0lBU2Isa0NBQW9DOzs7OztJQUM3QyxnQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQubG9nZ2VyJztcblxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBjb25zdCBoZXJtZXNBcGkgPSAnaGVybWVzQXBpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlcm1lc0FwaSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21tYW5kTG9nZ2VyOiBDb21tYW5kTG9nZ2VyLFxuXHRcdFx0XHRwcml2YXRlIGV2ZW50TG9nZ2VyOiBEb21haW5FdmVudExvZ2dlcikge1xuXHRcdGNvbnN0IGFwaSA9IChhcGk6IEhlcm1lc0FwaSkgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c2V0IGxvZ2dlcnMoZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdFx0XHRcdGlmIChlbmFibGVkKSB7XG5cdFx0XHRcdFx0XHRhcGkuY29tbWFuZExvZ2dlci5zdGFydCgpO1xuXHRcdFx0XHRcdFx0YXBpLmV2ZW50TG9nZ2VyLnN0YXJ0KCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGFwaS5jb21tYW5kTG9nZ2VyLnN0b3AoKTtcblx0XHRcdFx0XHRcdGFwaS5ldmVudExvZ2dlci5zdG9wKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH07XG5cblx0XHR3aW5kb3dbaGVybWVzQXBpXSA9IGFwaSh0aGlzKTtcblxuXHRcdHdpbmRvd1toZXJtZXNBcGldLmxvZ2dlcnMgPSBmYWxzZTtcblx0fVxufVxuIl19