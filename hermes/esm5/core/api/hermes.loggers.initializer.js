/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomainEventLogger } from '../domain/event/domain-event.logger';
import { CommandLogger } from '../domain/command/command.logger';
var HermesLoggersInitializer = /** @class */ (function () {
    function HermesLoggersInitializer(platformId, commandLogger, eventLogger) {
        this.platformId = platformId;
        this.commandLogger = commandLogger;
        this.eventLogger = eventLogger;
    }
    /**
     * @return {?}
     */
    HermesLoggersInitializer.prototype.start = /**
     * @return {?}
     */
    function () {
        this.loggersStart();
    };
    /**
     * @return {?}
     */
    HermesLoggersInitializer.prototype.stop = /**
     * @return {?}
     */
    function () {
        this.loggersStop();
    };
    /**
     * @private
     * @return {?}
     */
    HermesLoggersInitializer.prototype.loggersStart = /**
     * @private
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.commandLogger.start();
            this.eventLogger.start();
        }
    };
    /**
     * @private
     * @return {?}
     */
    HermesLoggersInitializer.prototype.loggersStop = /**
     * @private
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.commandLogger.stop();
            this.eventLogger.stop();
        }
    };
    HermesLoggersInitializer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HermesLoggersInitializer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: CommandLogger },
        { type: DomainEventLogger }
    ]; };
    return HermesLoggersInitializer;
}());
export { HermesLoggersInitializer };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmxvZ2dlcnMuaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2FwaS9oZXJtZXMubG9nZ2Vycy5pbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUdqRTtJQUdDLGtDQUF5QyxVQUFlLEVBQzdDLGFBQTRCLEVBQzVCLFdBQThCO1FBRkEsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFDekMsQ0FBQzs7OztJQUVELHdDQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsdUNBQUk7OztJQUFKO1FBQ0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU8sK0NBQVk7Ozs7SUFBcEI7UUFDQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekI7SUFDRixDQUFDOzs7OztJQUVPLDhDQUFXOzs7O0lBQW5CO1FBQ0MsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQzs7Z0JBNUJELFVBQVU7Ozs7Z0RBR0csTUFBTSxTQUFDLFdBQVc7Z0JBTnZCLGFBQWE7Z0JBRGIsaUJBQWlCOztJQWtDMUIsK0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTdCWSx3QkFBd0I7Ozs7OztJQUV4Qiw4Q0FBNEM7Ozs7O0lBQ3JELGlEQUFvQzs7Ozs7SUFDcEMsK0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IENvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21tYW5kLmxvZ2dlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplciB7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgY29tbWFuZExvZ2dlcjogQ29tbWFuZExvZ2dlcixcblx0XHRcdFx0cHJpdmF0ZSBldmVudExvZ2dlcjogRG9tYWluRXZlbnRMb2dnZXIpIHtcblx0fVxuXG5cdHN0YXJ0KCk6IHZvaWQge1xuXHRcdHRoaXMubG9nZ2Vyc1N0YXJ0KCk7XG5cdH1cblxuXHRzdG9wKCk6IHZvaWQge1xuXHRcdHRoaXMubG9nZ2Vyc1N0b3AoKTtcblx0fVxuXG5cdHByaXZhdGUgbG9nZ2Vyc1N0YXJ0KCk6IHZvaWQge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLmNvbW1hbmRMb2dnZXIuc3RhcnQoKTtcblx0XHRcdHRoaXMuZXZlbnRMb2dnZXIuc3RhcnQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGxvZ2dlcnNTdG9wKCk6IHZvaWQge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLmNvbW1hbmRMb2dnZXIuc3RvcCgpO1xuXHRcdFx0dGhpcy5ldmVudExvZ2dlci5zdG9wKCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==