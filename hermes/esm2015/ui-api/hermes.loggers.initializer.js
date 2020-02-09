/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomainEventLogger } from '../domain/event/domain-event.logger';
import { CommandLogger } from '../domain/command/command.logger';
export class HermesLoggersInitializer {
    /**
     * @param {?} platformId
     * @param {?} commandLogger
     * @param {?} eventLogger
     */
    constructor(platformId, commandLogger, eventLogger) {
        this.platformId = platformId;
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
    }
    /**
     * @return {?}
     */
    start() {
        this.loggersStart();
    }
    /**
     * @return {?}
     */
    stop() {
        this.loggersStop();
    }
    /**
     * @private
     * @return {?}
     */
    loggersStart() {
        if (isPlatformBrowser(this.platformId)) {
            this.commandLogger.start();
            this.eventLogger.start();
        }
    }
    /**
     * @private
     * @return {?}
     */
    loggersStop() {
        if (isPlatformBrowser(this.platformId)) {
            this.commandLogger.stop();
            this.eventLogger.stop();
        }
    }
}
HermesLoggersInitializer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HermesLoggersInitializer.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: CommandLogger },
    { type: DomainEventLogger }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesLoggersInitializer.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    HermesLoggersInitializer.prototype.commandLogger;
    /**
     * @type {?}
     * @private
     */
    HermesLoggersInitializer.prototype.eventLogger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmxvZ2dlcnMuaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJ1aS1hcGkvaGVybWVzLmxvZ2dlcnMuaW5pdGlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFJakUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBRXBDLFlBQXlDLFVBQWUsRUFDN0MsYUFBNEIsRUFDNUIsV0FBOEI7UUFGQSxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUN6QyxDQUFDOzs7O0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsSUFBSTtRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLFlBQVk7UUFDbkIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxXQUFXO1FBQ2xCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QjtJQUNGLENBQUM7OztZQTVCRCxVQUFVOzs7OzRDQUdHLE1BQU0sU0FBQyxXQUFXO1lBTnZCLGFBQWE7WUFEYixpQkFBaUI7Ozs7Ozs7SUFPYiw4Q0FBNEM7Ozs7O0lBQ3JELGlEQUFvQzs7Ozs7SUFDcEMsK0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplciB7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgY29tbWFuZExvZ2dlcjogQ29tbWFuZExvZ2dlcixcblx0XHRcdFx0cHJpdmF0ZSBldmVudExvZ2dlcjogRG9tYWluRXZlbnRMb2dnZXIpIHtcblx0fVxuXG5cdHN0YXJ0KCk6IHZvaWQge1xuXHRcdHRoaXMubG9nZ2Vyc1N0YXJ0KCk7XG5cdH1cblxuXHRzdG9wKCk6IHZvaWQge1xuXHRcdHRoaXMubG9nZ2Vyc1N0b3AoKTtcblx0fVxuXG5cdHByaXZhdGUgbG9nZ2Vyc1N0YXJ0KCk6IHZvaWQge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLmNvbW1hbmRMb2dnZXIuc3RhcnQoKTtcblx0XHRcdHRoaXMuZXZlbnRMb2dnZXIuc3RhcnQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGxvZ2dlcnNTdG9wKCk6IHZvaWQge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLmNvbW1hbmRMb2dnZXIuc3RvcCgpO1xuXHRcdFx0dGhpcy5ldmVudExvZ2dlci5zdG9wKCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==