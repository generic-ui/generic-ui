/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigSearchingCommand } from './set-config-searching.command';
import { ConfigSearchingSetEvent } from './config-searching-set.event';
var SetConfigSearchingCommandHandler = /** @class */ (function () {
    function SetConfigSearchingCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetConfigSearchingCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetConfigSearchingCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetConfigSearchingCommandHandler.prototype.handle = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var searchingConfig = command.getConfig();
        aggregate.setSearchingConfig(searchingConfig);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetConfigSearchingCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var searchingConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigSearchingSetEvent(command.getAggregateId(), searchingConfig.enabled));
    };
    SetConfigSearchingCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetConfigSearchingCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetConfigSearchingCommandHandler;
}());
export { SetConfigSearchingCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetConfigSearchingCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvZG9tYWluL2NvbmZpZy9zZXQtY29uZmlnLXNlYXJjaGluZy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSXZFO0lBR0MsMENBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzlELENBQUM7Ozs7SUFFRCxxREFBVTs7O0lBQVY7UUFDQyxPQUFPLHlCQUF5QixDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVELGlEQUFNOzs7OztJQUFOLFVBQU8sU0FBNkIsRUFBRSxPQUFrQzs7WUFFakUsZUFBZSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFM0MsU0FBUyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7OztJQUVELGtEQUFPOzs7OztJQUFQLFVBQVEsU0FBNkIsRUFBRSxPQUFrQzs7WUFFbEUsZUFBZSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuSCxDQUFDOztnQkF0QkQsVUFBVTs7OztnQkFQMkIsb0JBQW9COztJQStCMUQsdUNBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSxnQ0FBZ0M7Ozs7OztJQUVoQyxnRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kIH0gZnJvbSAnLi9zZXQtY29uZmlnLXNlYXJjaGluZy5jb21tYW5kJztcbmltcG9ydCB7IENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50IH0gZnJvbSAnLi9jb25maWctc2VhcmNoaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHNlYXJjaGluZ0NvbmZpZyA9IGNvbW1hbmQuZ2V0Q29uZmlnKCk7XG5cblx0XHRhZ2dyZWdhdGUuc2V0U2VhcmNoaW5nQ29uZmlnKHNlYXJjaGluZ0NvbmZpZyk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBzZWFyY2hpbmdDb25maWcgPSBjb21tYW5kLmdldENvbmZpZygpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBDb25maWdTZWFyY2hpbmdTZXRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCksIHNlYXJjaGluZ0NvbmZpZy5lbmFibGVkKSk7XG5cdH1cblxufVxuIl19