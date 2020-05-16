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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmxvZ2dlcnMuaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4tYXBpL2hlcm1lcy5sb2dnZXJzLmluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBSWpFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQUVwQyxZQUF5QyxVQUFlLEVBQzdDLGFBQTRCLEVBQzVCLFdBQThCO1FBRkEsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFDekMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELElBQUk7UUFDSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ25CLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN6QjtJQUNGLENBQUM7Ozs7O0lBRU8sV0FBVztRQUNsQixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDeEI7SUFDRixDQUFDOzs7WUE1QkQsVUFBVTs7Ozs0Q0FHRyxNQUFNLFNBQUMsV0FBVztZQU52QixhQUFhO1lBRGIsaUJBQWlCOzs7Ozs7O0lBT2IsOENBQTRDOzs7OztJQUNyRCxpREFBb0M7Ozs7O0lBQ3BDLCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5sb2dnZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIGNvbW1hbmRMb2dnZXI6IENvbW1hbmRMb2dnZXIsXG5cdFx0XHRcdHByaXZhdGUgZXZlbnRMb2dnZXI6IERvbWFpbkV2ZW50TG9nZ2VyKSB7XG5cdH1cblxuXHRzdGFydCgpOiB2b2lkIHtcblx0XHR0aGlzLmxvZ2dlcnNTdGFydCgpO1xuXHR9XG5cblx0c3RvcCgpOiB2b2lkIHtcblx0XHR0aGlzLmxvZ2dlcnNTdG9wKCk7XG5cdH1cblxuXHRwcml2YXRlIGxvZ2dlcnNTdGFydCgpOiB2b2lkIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5jb21tYW5kTG9nZ2VyLnN0YXJ0KCk7XG5cdFx0XHR0aGlzLmV2ZW50TG9nZ2VyLnN0YXJ0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBsb2dnZXJzU3RvcCgpOiB2b2lkIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5jb21tYW5kTG9nZ2VyLnN0b3AoKTtcblx0XHRcdHRoaXMuZXZlbnRMb2dnZXIuc3RvcCgpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=