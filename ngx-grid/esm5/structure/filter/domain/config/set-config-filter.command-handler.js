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
    SetConfigFilterCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var filterConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigFilterSetEvent(command.getAggregateId(), filterConfig.enabled));
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetConfigFilterCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var filterConfig = command.getConfig();
        aggregate.setFilterConfig(filterConfig);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi9jb25maWcvc2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlqRTtJQUdDLHVDQUE2QixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUN2RSxDQUFDOzs7O0lBRUQsa0RBQVU7OztJQUFWO1FBQ0MsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCwyREFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBK0I7O1lBRTNFLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRXhDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0csQ0FBQzs7Ozs7O0lBRUQsdURBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBNkIsRUFBRSxPQUErQjs7WUFFdkUsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFeEMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkF0QkQsVUFBVTs7OztnQkFOMkIsb0JBQW9COztJQThCMUQsb0NBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSw2QkFBNkI7Ozs7OztJQUU3Qiw2REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2V0Q29uZmlnRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4vc2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBDb25maWdGaWx0ZXJTZXRFdmVudCB9IGZyb20gJy4vY29uZmlnLWZpbHRlci1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldENvbmZpZ0ZpbHRlckNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTZXRDb25maWdGaWx0ZXJDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2V0Q29uZmlnRmlsdGVyQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRDb25maWdGaWx0ZXJDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Q29uZmlnRmlsdGVyQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmlsdGVyQ29uZmlnID0gY29tbWFuZC5nZXRDb25maWcoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgQ29uZmlnRmlsdGVyU2V0RXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLCBmaWx0ZXJDb25maWcuZW5hYmxlZCkpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb25maWdGaWx0ZXJDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJDb25maWcgPSBjb21tYW5kLmdldENvbmZpZygpO1xuXG5cdFx0YWdncmVnYXRlLnNldEZpbHRlckNvbmZpZyhmaWx0ZXJDb25maWcpO1xuXHR9XG5cbn1cbiJdfQ==