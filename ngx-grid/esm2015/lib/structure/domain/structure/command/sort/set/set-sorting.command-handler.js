/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetSortingCommand } from './set-sorting.command';
import { SortingSetEvent } from './sorting-set.event';
export class SetSortingCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        super(SetSortingCommand);
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const structureId = command.structureId;
        /** @type {?} */
        const sortingConfig = command.getSortingConfig();
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        structure.setSortingConfig(sortingConfig);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new SortingSetEvent(structureId));
    }
}
SetSortingCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetSortingCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSortingCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetSortingCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnRpbmcuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L3NldC9zZXQtc29ydGluZy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLdEQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7Ozs7O0lBRTNELFlBQTZCLDRCQUEwRCxFQUM1RSxvQkFBMEM7UUFDcEQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFGRyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzVFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFFckQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBMEI7O2NBRTFCLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7Y0FDdEMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTs7Y0FFckMsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRXhFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7WUFwQkQsVUFBVTs7OztZQU5GLDRCQUE0QjtZQURaLG9CQUFvQjs7Ozs7OztJQVVoQyxnRUFBMkU7Ozs7O0lBQ3BGLHdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZXRTb3J0aW5nQ29tbWFuZCB9IGZyb20gJy4vc2V0LXNvcnRpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBTb3J0aW5nU2V0RXZlbnQgfSBmcm9tICcuL3NvcnRpbmctc2V0LmV2ZW50JztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRTb3J0aW5nQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFNldFNvcnRpbmdDb21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTZXRTb3J0aW5nQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGNvbW1hbmQuc3RydWN0dXJlSWQsXG5cdFx0XHRzb3J0aW5nQ29uZmlnID0gY29tbWFuZC5nZXRTb3J0aW5nQ29uZmlnKCk7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRzdHJ1Y3R1cmUuc2V0U29ydGluZ0NvbmZpZyhzb3J0aW5nQ29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFNvcnRpbmdTZXRFdmVudChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cbn1cbiJdfQ==