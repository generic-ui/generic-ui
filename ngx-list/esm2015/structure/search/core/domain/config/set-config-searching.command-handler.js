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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvZG9tYWluL2NvbmZpZy9zZXQtY29uZmlnLXNlYXJjaGluZy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBS3ZFLE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7SUFFNUMsWUFBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLHlCQUF5QixDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLFNBQTZCLEVBQUUsT0FBa0M7O2NBRTlFLGVBQWUsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRTNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbkgsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLFNBQTZCLEVBQUUsT0FBa0M7O2NBRTFFLGVBQWUsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRTNDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUF0QkQsVUFBVTs7OztZQVAyQixvQkFBb0I7Ozs7Ozs7SUFVN0MsZ0VBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZCB9IGZyb20gJy4vc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBDb25maWdTZWFyY2hpbmdTZXRFdmVudCB9IGZyb20gJy4vY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc2VhcmNoaW5nQ29uZmlnID0gY29tbWFuZC5nZXRDb25maWcoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLCBzZWFyY2hpbmdDb25maWcuZW5hYmxlZCkpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBzZWFyY2hpbmdDb25maWcgPSBjb21tYW5kLmdldENvbmZpZygpO1xuXG5cdFx0YWdncmVnYXRlLnNldFNlYXJjaGluZ0NvbmZpZyhzZWFyY2hpbmdDb25maWcpO1xuXHR9XG5cbn1cbiJdfQ==