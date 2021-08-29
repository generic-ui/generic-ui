/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigFilterCommand } from './set-config-filter.command';
import { ConfigFilterSetEvent } from './config-filter-set.event';
var SetConfigFilterCommandHandler = /** @class */ (function () {
    function SetConfigFilterCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetConfigFilterCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetConfigFilterCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetConfigFilterCommandHandler.prototype.handle = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var filterConfig = command.getConfig();
        aggregate.setFilterConfig(filterConfig);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetConfigFilterCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var filterConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigFilterSetEvent(command.getAggregateId(), filterConfig.enabled));
    };
    SetConfigFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetConfigFilterCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetConfigFilterCommandHandler;
}());
export { SetConfigFilterCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetConfigFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL2NvbmZpZy9zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSWpFO0lBR0MsdUNBQTZCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3ZFLENBQUM7Ozs7SUFFRCxrREFBVTs7O0lBQVY7UUFDQyxPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVELDhDQUFNOzs7OztJQUFOLFVBQU8sU0FBNkIsRUFBRSxPQUErQjs7WUFFOUQsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFeEMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFRCwrQ0FBTzs7Ozs7SUFBUCxVQUFRLFNBQTZCLEVBQUUsT0FBK0I7O1lBRS9ELFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRXhDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0csQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBTjJCLG9CQUFvQjs7SUE4QjFELG9DQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlksNkJBQTZCOzs7Ozs7SUFFN0IsNkRBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNldENvbmZpZ0ZpbHRlckNvbW1hbmQgfSBmcm9tICcuL3NldC1jb25maWctZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29uZmlnRmlsdGVyU2V0RXZlbnQgfSBmcm9tICcuL2NvbmZpZy1maWx0ZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRDb25maWdGaWx0ZXJDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0Q29uZmlnRmlsdGVyQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldENvbmZpZ0ZpbHRlckNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0Q29uZmlnRmlsdGVyQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Q29uZmlnRmlsdGVyQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmlsdGVyQ29uZmlnID0gY29tbWFuZC5nZXRDb25maWcoKTtcblxuXHRcdGFnZ3JlZ2F0ZS5zZXRGaWx0ZXJDb25maWcoZmlsdGVyQ29uZmlnKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbmZpZ0ZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpbHRlckNvbmZpZyA9IGNvbW1hbmQuZ2V0Q29uZmlnKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IENvbmZpZ0ZpbHRlclNldEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSwgZmlsdGVyQ29uZmlnLmVuYWJsZWQpKTtcblx0fVxuXG59XG4iXX0=