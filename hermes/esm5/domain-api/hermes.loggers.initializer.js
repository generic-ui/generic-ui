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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmxvZ2dlcnMuaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4tYXBpL2hlcm1lcy5sb2dnZXJzLmluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR2pFO0lBR0Msa0NBQXlDLFVBQWUsRUFDN0MsYUFBNEIsRUFDNUIsV0FBOEI7UUFGQSxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUN6QyxDQUFDOzs7O0lBRUQsd0NBQUs7OztJQUFMO1FBQ0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCx1Q0FBSTs7O0lBQUo7UUFDQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTywrQ0FBWTs7OztJQUFwQjtRQUNDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN6QjtJQUNGLENBQUM7Ozs7O0lBRU8sOENBQVc7Ozs7SUFBbkI7UUFDQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDeEI7SUFDRixDQUFDOztnQkE1QkQsVUFBVTs7OztnREFHRyxNQUFNLFNBQUMsV0FBVztnQkFOdkIsYUFBYTtnQkFEYixpQkFBaUI7O0lBa0MxQiwrQkFBQztDQUFBLEFBOUJELElBOEJDO1NBN0JZLHdCQUF3Qjs7Ozs7O0lBRXhCLDhDQUE0Qzs7Ozs7SUFDckQsaURBQW9DOzs7OztJQUNwQywrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQubG9nZ2VyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyIHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSBjb21tYW5kTG9nZ2VyOiBDb21tYW5kTG9nZ2VyLFxuXHRcdFx0XHRwcml2YXRlIGV2ZW50TG9nZ2VyOiBEb21haW5FdmVudExvZ2dlcikge1xuXHR9XG5cblx0c3RhcnQoKTogdm9pZCB7XG5cdFx0dGhpcy5sb2dnZXJzU3RhcnQoKTtcblx0fVxuXG5cdHN0b3AoKTogdm9pZCB7XG5cdFx0dGhpcy5sb2dnZXJzU3RvcCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBsb2dnZXJzU3RhcnQoKTogdm9pZCB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMuY29tbWFuZExvZ2dlci5zdGFydCgpO1xuXHRcdFx0dGhpcy5ldmVudExvZ2dlci5zdGFydCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgbG9nZ2Vyc1N0b3AoKTogdm9pZCB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMuY29tbWFuZExvZ2dlci5zdG9wKCk7XG5cdFx0XHR0aGlzLmV2ZW50TG9nZ2VyLnN0b3AoKTtcblx0XHR9XG5cdH1cblxufVxuIl19