/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSortingCommand } from './set-sorting.command';
import { SortingSetEvent } from './sorting-set.event';
export class SetSortingCommandHandler {
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
        return SetSortingCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handle(aggregate, command) {
        /** @type {?} */
        const sortingConfig = command.getSortingConfig();
        aggregate.setSortingConfig(sortingConfig);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new SortingSetEvent(command.getAggregateId()));
    }
}
SetSortingCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetSortingCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSortingCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnRpbmcuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2RvbWFpbi9zZXQtY29uZmlnL3NldC1zb3J0aW5nLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS3RELE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFFcEMsWUFBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxTQUE2QixFQUFFLE9BQTBCOztjQUV6RCxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFO1FBRWhELFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsU0FBNkIsRUFBRSxPQUEwQjtRQUNoRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7O1lBbkJELFVBQVU7Ozs7WUFOMkIsb0JBQW9COzs7Ozs7O0lBUzdDLHdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTZXRTb3J0aW5nQ29tbWFuZCB9IGZyb20gJy4vc2V0LXNvcnRpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBTb3J0aW5nU2V0RXZlbnQgfSBmcm9tICcuL3NvcnRpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRTb3J0aW5nQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldFNvcnRpbmdDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2V0U29ydGluZ0NvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0U29ydGluZ0NvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNvcnRpbmdDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBzb3J0aW5nQ29uZmlnID0gY29tbWFuZC5nZXRTb3J0aW5nQ29uZmlnKCk7XG5cblx0XHRhZ2dyZWdhdGUuc2V0U29ydGluZ0NvbmZpZyhzb3J0aW5nQ29uZmlnKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNvcnRpbmdDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTb3J0aW5nU2V0RXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxufVxuIl19