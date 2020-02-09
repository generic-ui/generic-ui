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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmxvZ2dlcnMuaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJ1aS1hcGkvaGVybWVzLmxvZ2dlcnMuaW5pdGlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHakU7SUFHQyxrQ0FBeUMsVUFBZSxFQUM3QyxhQUE0QixFQUM1QixXQUE4QjtRQUZBLGVBQVUsR0FBVixVQUFVLENBQUs7UUFDN0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBQ3pDLENBQUM7Ozs7SUFFRCx3Q0FBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHVDQUFJOzs7SUFBSjtRQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLCtDQUFZOzs7O0lBQXBCO1FBQ0MsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7Ozs7SUFFTyw4Q0FBVzs7OztJQUFuQjtRQUNDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QjtJQUNGLENBQUM7O2dCQTVCRCxVQUFVOzs7O2dEQUdHLE1BQU0sU0FBQyxXQUFXO2dCQU52QixhQUFhO2dCQURiLGlCQUFpQjs7SUFrQzFCLCtCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E3Qlksd0JBQXdCOzs7Ozs7SUFFeEIsOENBQTRDOzs7OztJQUNyRCxpREFBb0M7Ozs7O0lBQ3BDLCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5sb2dnZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIGNvbW1hbmRMb2dnZXI6IENvbW1hbmRMb2dnZXIsXG5cdFx0XHRcdHByaXZhdGUgZXZlbnRMb2dnZXI6IERvbWFpbkV2ZW50TG9nZ2VyKSB7XG5cdH1cblxuXHRzdGFydCgpOiB2b2lkIHtcblx0XHR0aGlzLmxvZ2dlcnNTdGFydCgpO1xuXHR9XG5cblx0c3RvcCgpOiB2b2lkIHtcblx0XHR0aGlzLmxvZ2dlcnNTdG9wKCk7XG5cdH1cblxuXHRwcml2YXRlIGxvZ2dlcnNTdGFydCgpOiB2b2lkIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5jb21tYW5kTG9nZ2VyLnN0YXJ0KCk7XG5cdFx0XHR0aGlzLmV2ZW50TG9nZ2VyLnN0YXJ0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBsb2dnZXJzU3RvcCgpOiB2b2lkIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5jb21tYW5kTG9nZ2VyLnN0b3AoKTtcblx0XHRcdHRoaXMuZXZlbnRMb2dnZXIuc3RvcCgpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=