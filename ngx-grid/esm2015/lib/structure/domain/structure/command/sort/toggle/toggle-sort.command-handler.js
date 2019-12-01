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
                direction: sorter.getDirection(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNvcnQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L3RvZ2dsZS90b2dnbGUtc29ydC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFlLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUkxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUl4RCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7SUFFM0QsWUFBNkIsNEJBQTBELEVBQzVFLG9CQUEwQztRQUNwRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUZHLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDNUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUVyRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUEwQjs7Y0FFMUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztjQUN0QyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFOztjQUMxQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRTs7Y0FFekIsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOztjQUVsRSxPQUFPLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFFN0MsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxXQUF3QixFQUFFLGFBQTRCLEVBQUUsT0FBZ0IsRUFBRSxPQUErQjs7Y0FFbkgsVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUF1QixFQUFFLEVBQUU7WUFDMUQsT0FBTztnQkFDTixTQUFTLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRTtnQkFDaEMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDbEMsQ0FBQztRQUNILENBQUMsRUFBQztRQUVGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQzs7O1lBakNELFVBQVU7Ozs7WUFSRiw0QkFBNEI7WUFEQyxvQkFBb0I7Ozs7Ozs7SUFZN0MsZ0VBQTJFOzs7OztJQUNwRix3REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFRvZ2dsZVNvcnRDb21tYW5kIH0gZnJvbSAnLi90b2dnbGUtc29ydC5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvcnRlciB9IGZyb20gJy4uL3N0cnVjdHVyZS5zb3J0ZXInO1xuaW1wb3J0IHsgU29ydFRvZ2dsZWRFdmVudCB9IGZyb20gJy4vc29ydC10b2dnbGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9nZ2xlU29ydENvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihUb2dnbGVTb3J0Q29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogVG9nZ2xlU29ydENvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0Y29tcG9zaXRpb25JZCA9IGNvbW1hbmQuZ2V0Q29tcG9zaXRpb25JZCgpLFxuXHRcdFx0ZmllbGRJZCA9IGNvbW1hbmQuZ2V0RmllbGRJZCgpO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0Y29uc3Qgc29ydGVycyA9IHN0cnVjdHVyZS50b2dnbGVTb3J0KGZpZWxkSWQpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblxuXHRcdHRoaXMucHVibGlzaFNvcnRFdmVudChhZ2dyZWdhdGVJZCwgY29tcG9zaXRpb25JZCwgZmllbGRJZCwgc29ydGVycyk7XG5cdH1cblxuXHRwdWJsaXNoU29ydEV2ZW50KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgZmllbGRJZDogRmllbGRJZCwgc29ydGVyczogQXJyYXk8U3RydWN0dXJlU29ydGVyPik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZGlyZWN0aW9ucyA9IHNvcnRlcnMubWFwKChzb3J0ZXI6IFN0cnVjdHVyZVNvcnRlcikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGlyZWN0aW9uOiBzb3J0ZXIuZ2V0RGlyZWN0aW9uKCksXG5cdFx0XHRcdGZpZWxkSWQ6IHNvcnRlci5nZXRGaWVsZCgpLmdldElkKClcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFNvcnRUb2dnbGVkRXZlbnQoYWdncmVnYXRlSWQsIGNvbXBvc2l0aW9uSWQsIGRpcmVjdGlvbnMpKTtcblx0fVxuXG59XG4iXX0=