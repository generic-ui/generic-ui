/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigFilterCommand } from './set-config-filter.command';
import { ConfigFilterSetEvent } from './config-filter-set.event';
export class SetConfigFilterCommandHandler {
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
        return SetConfigFilterCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const filterConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigFilterSetEvent(command.getAggregateId(), filterConfig.enabled));
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const filterConfig = command.getConfig();
        aggregate.setFilterConfig(filterConfig);
    }
}
SetConfigFilterCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetConfigFilterCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetConfigFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL2NvbmZpZy9zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBS2pFLE1BQU0sT0FBTyw2QkFBNkI7Ozs7SUFFekMsWUFBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLFNBQTZCLEVBQUUsT0FBK0I7O2NBRTNFLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRXhDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0csQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLFNBQTZCLEVBQUUsT0FBK0I7O2NBRXZFLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRXhDLFNBQVMsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBdEJELFVBQVU7Ozs7WUFOMkIsb0JBQW9COzs7Ozs7O0lBUzdDLDZEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTZXRDb25maWdGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi9zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IENvbmZpZ0ZpbHRlclNldEV2ZW50IH0gZnJvbSAnLi9jb25maWctZmlsdGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Q29uZmlnRmlsdGVyQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldENvbmZpZ0ZpbHRlckNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRDb25maWdGaWx0ZXJDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldENvbmZpZ0ZpbHRlckNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb25maWdGaWx0ZXJDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJDb25maWcgPSBjb21tYW5kLmdldENvbmZpZygpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBDb25maWdGaWx0ZXJTZXRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCksIGZpbHRlckNvbmZpZy5lbmFibGVkKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbmZpZ0ZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpbHRlckNvbmZpZyA9IGNvbW1hbmQuZ2V0Q29uZmlnKCk7XG5cblx0XHRhZ2dyZWdhdGUuc2V0RmlsdGVyQ29uZmlnKGZpbHRlckNvbmZpZyk7XG5cdH1cblxufVxuIl19