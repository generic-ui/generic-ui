/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSortingCommand } from './set-sorting.command';
import { SortingSetEvent } from './sorting-set.event';
var SetSortingCommandHandler = /** @class */ (function () {
    function SetSortingCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetSortingCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetSortingCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetSortingCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new SortingSetEvent(command.getAggregateId()));
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetSortingCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var sortingConfig = command.getSortingConfig();
        aggregate.setSortingConfig(sortingConfig);
    };
    SetSortingCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSortingCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetSortingCommandHandler;
}());
export { SetSortingCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSortingCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnRpbmcuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9kb21haW4vc2V0LWNvbmZpZy9zZXQtc29ydGluZy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFrQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUl0RDtJQUdDLGtDQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsNkNBQVU7OztJQUFWO1FBQ0MsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFRCxzREFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBMEI7UUFDNUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7OztJQUVELGtEQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBMEI7O1lBRWxFLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7UUFFaEQsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQW5CRCxVQUFVOzs7O2dCQU5jLG9CQUFvQjs7SUEyQjdDLCtCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksd0JBQXdCOzs7Ozs7SUFFeEIsd0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2V0U29ydGluZ0NvbW1hbmQgfSBmcm9tICcuL3NldC1zb3J0aW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgU29ydGluZ1NldEV2ZW50IH0gZnJvbSAnLi9zb3J0aW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFNvcnRpbmdDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0U29ydGluZ0NvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBUeXBlPFNldFNvcnRpbmdDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFNvcnRpbmdDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0U29ydGluZ0NvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFNvcnRpbmdTZXRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0U29ydGluZ0NvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHNvcnRpbmdDb25maWcgPSBjb21tYW5kLmdldFNvcnRpbmdDb25maWcoKTtcblxuXHRcdGFnZ3JlZ2F0ZS5zZXRTb3J0aW5nQ29uZmlnKHNvcnRpbmdDb25maWcpO1xuXHR9XG5cbn1cbiJdfQ==