/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigSearchingCommand } from './set-config-searching.command';
import { ConfigSearchingSetEvent } from './config-searching-set.event';
export class SetConfigSearchingCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetConfigSearchingCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const searchingConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigSearchingSetEvent(command.getAggregateId(), searchingConfig.enabled));
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const searchingConfig = command.getConfig();
        aggregate.setSearchingConfig(searchingConfig);
    }
}
SetConfigSearchingCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetConfigSearchingCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetConfigSearchingCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi9jb25maWcvc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUt2RSxNQUFNLE9BQU8sZ0NBQWdDOzs7O0lBRTVDLFlBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzlELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxTQUE2QixFQUFFLE9BQWtDOztjQUU5RSxlQUFlLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUUzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksdUJBQXVCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25ILENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxTQUE2QixFQUFFLE9BQWtDOztjQUUxRSxlQUFlLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUUzQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBdEJELFVBQVU7Ozs7WUFQMkIsb0JBQW9COzs7Ozs7O0lBVTdDLGdFQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQgfSBmcm9tICcuL3NldC1jb25maWctc2VhcmNoaW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQgfSBmcm9tICcuL2NvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHNlYXJjaGluZ0NvbmZpZyA9IGNvbW1hbmQuZ2V0Q29uZmlnKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSwgc2VhcmNoaW5nQ29uZmlnLmVuYWJsZWQpKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc2VhcmNoaW5nQ29uZmlnID0gY29tbWFuZC5nZXRDb25maWcoKTtcblxuXHRcdGFnZ3JlZ2F0ZS5zZXRTZWFyY2hpbmdDb25maWcoc2VhcmNoaW5nQ29uZmlnKTtcblx0fVxuXG59XG4iXX0=