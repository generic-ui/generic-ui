/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../core/domain/structure-aggregate.repository';
import { SetPagingCommand } from './set-paging.command';
import { PagingSetEvent } from './paging-set.event';
var SetPagingCommandHandler = /** @class */ (function () {
    function SetPagingCommandHandler(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetPagingCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetPagingCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetPagingCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new PagingSetEvent(command.getAggregateId()));
    };
    /**
     * @param {?} structureAggregate
     * @param {?} command
     * @return {?}
     */
    SetPagingCommandHandler.prototype.handleAggregate = /**
     * @param {?} structureAggregate
     * @param {?} command
     * @return {?}
     */
    function (structureAggregate, command) {
        /** @type {?} */
        var pagingConfig = command.getPagingConfig();
        structureAggregate.changePaging(pagingConfig);
    };
    SetPagingCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetPagingCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetPagingCommandHandler;
}());
export { SetPagingCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetPagingCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetPagingCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXBhZ2luZy5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvY29yZS9kb21haW4vc2V0L3NldC1wYWdpbmcuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUV0RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJcEQ7SUFHQyxpQ0FBb0IsNEJBQTBELEVBQ25FLG9CQUEwQztRQURqQyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQ25FLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDckQsQ0FBQzs7OztJQUVELDRDQUFVOzs7SUFBVjtRQUNDLE9BQU8sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBRUQscURBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQXlCO1FBQzNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7Ozs7SUFFRCxpREFBZTs7Ozs7SUFBZixVQUFnQixrQkFBc0MsRUFBRSxPQUF5Qjs7WUFFMUUsWUFBWSxHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUU7UUFFOUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQXBCRCxVQUFVOzs7O2dCQVBGLDRCQUE0QjtnQkFGQyxvQkFBb0I7O0lBK0IxRCw4QkFBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLHVCQUF1Qjs7Ozs7O0lBRXZCLCtEQUFrRTs7Ozs7SUFDM0UsdURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IFNldFBhZ2luZ0NvbW1hbmQgfSBmcm9tICcuL3NldC1wYWdpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBQYWdpbmdTZXRFdmVudCB9IGZyb20gJy4vcGFnaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0UGFnaW5nQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldFBhZ2luZ0NvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldFBhZ2luZ0NvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0UGFnaW5nQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFBhZ2luZ0NvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFBhZ2luZ1NldEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSkpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKHN0cnVjdHVyZUFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRQYWdpbmdDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBwYWdpbmdDb25maWcgPSBjb21tYW5kLmdldFBhZ2luZ0NvbmZpZygpO1xuXG5cdFx0c3RydWN0dXJlQWdncmVnYXRlLmNoYW5nZVBhZ2luZyhwYWdpbmdDb25maWcpO1xuXHR9XG5cbn1cbiJdfQ==