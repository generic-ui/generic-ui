/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { ToggleSortCommand } from './toggle-sort.command';
import { SortToggledEvent } from './sort-toggled.event';
export class ToggleSortCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        super(ToggleSortCommand);
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const aggregateId = command.structureId;
        /** @type {?} */
        const compositionId = command.getCompositionId();
        /** @type {?} */
        const fieldId = command.getFieldId();
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(aggregateId);
        /** @type {?} */
        const sorters = structure.toggleSort(fieldId);
        this.structureAggregateRepository.save(structure);
        this.publishSortEvent(aggregateId, compositionId, fieldId, sorters);
    }
    /**
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sorters
     * @return {?}
     */
    publishSortEvent(aggregateId, compositionId, fieldId, sorters) {
        /** @type {?} */
        const directions = sorters.map((/**
         * @param {?} sorter
         * @return {?}
         */
        (sorter) => {
            return {
                direction: sorter.hasDirection(),
                fieldId: sorter.getField().getId()
            };
        }));
        this.domainEventPublisher.publish(new SortToggledEvent(aggregateId, compositionId, directions));
    }
}
ToggleSortCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ToggleSortCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNvcnQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L3RvZ2dsZS90b2dnbGUtc29ydC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFlLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUkxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUt4RCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBa0M7Ozs7O0lBRS9FLFlBQTZCLDRCQUEwRCxFQUM1RSxvQkFBMEM7UUFDcEQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFGRyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzVFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFFckQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBMEI7O2NBRTFCLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7Y0FDdEMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTs7Y0FDMUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O2NBRXpCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7Y0FFbEUsT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBRTdDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsV0FBd0IsRUFBRSxhQUE0QixFQUFFLE9BQWdCLEVBQUUsT0FBK0I7O2NBRW5ILFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFO1lBQzFELE9BQU87Z0JBQ04sU0FBUyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hDLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFO2FBQ2xDLENBQUM7UUFDSCxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7OztZQWpDRCxVQUFVOzs7O1lBVEYsNEJBQTRCO1lBREMsb0JBQW9COzs7Ozs7O0lBYTdDLGdFQUEyRTs7Ozs7SUFDcEYsd0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBUb2dnbGVTb3J0Q29tbWFuZCB9IGZyb20gJy4vdG9nZ2xlLXNvcnQuY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi4vc3RydWN0dXJlLnNvcnRlcic7XG5pbXBvcnQgeyBTb3J0VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi9zb3J0LXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVNvcnRDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihUb2dnbGVTb3J0Q29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogVG9nZ2xlU29ydENvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0Y29tcG9zaXRpb25JZCA9IGNvbW1hbmQuZ2V0Q29tcG9zaXRpb25JZCgpLFxuXHRcdFx0ZmllbGRJZCA9IGNvbW1hbmQuZ2V0RmllbGRJZCgpO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0Y29uc3Qgc29ydGVycyA9IHN0cnVjdHVyZS50b2dnbGVTb3J0KGZpZWxkSWQpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblxuXHRcdHRoaXMucHVibGlzaFNvcnRFdmVudChhZ2dyZWdhdGVJZCwgY29tcG9zaXRpb25JZCwgZmllbGRJZCwgc29ydGVycyk7XG5cdH1cblxuXHRwdWJsaXNoU29ydEV2ZW50KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgZmllbGRJZDogRmllbGRJZCwgc29ydGVyczogQXJyYXk8U3RydWN0dXJlU29ydGVyPik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZGlyZWN0aW9ucyA9IHNvcnRlcnMubWFwKChzb3J0ZXI6IFN0cnVjdHVyZVNvcnRlcikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGlyZWN0aW9uOiBzb3J0ZXIuaGFzRGlyZWN0aW9uKCksXG5cdFx0XHRcdGZpZWxkSWQ6IHNvcnRlci5nZXRGaWVsZCgpLmdldElkKClcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFNvcnRUb2dnbGVkRXZlbnQoYWdncmVnYXRlSWQsIGNvbXBvc2l0aW9uSWQsIGRpcmVjdGlvbnMpKTtcblx0fVxuXG59XG4iXX0=