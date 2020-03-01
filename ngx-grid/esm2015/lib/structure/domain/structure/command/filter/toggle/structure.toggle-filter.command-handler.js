/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureToggleFilterCommand } from './structure.toggle-filter.command';
import { StructureFilterToggledEvent } from './structure.filter-toggled.event';
export class StructureToggleFilterCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        super(StructureToggleFilterCommand);
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
        const fieldId = command.fieldId;
        /** @type {?} */
        const externalFieldId = command.externalFilterId;
        /** @type {?} */
        const filterValue = command.filterValue;
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        structure.toggleFilter(fieldId, externalFieldId, filterValue);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureFilterToggledEvent(structureId));
    }
}
StructureToggleFilterCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureToggleFilterCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvdG9nZ2xlL3N0cnVjdHVyZS50b2dnbGUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWpGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBSy9FLE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSxjQUFrQzs7Ozs7SUFFMUYsWUFBNkIsNEJBQTBELEVBQzVFLG9CQUEwQztRQUNwRCxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUZSLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDNUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUVyRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFxQzs7Y0FFckMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztjQUN0QyxPQUFPLEdBQVksT0FBTyxDQUFDLE9BQU87O2NBQ2xDLGVBQWUsR0FBVyxPQUFPLENBQUMsZ0JBQWdCOztjQUNsRCxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O2NBRTVCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV4RSxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksMkJBQTJCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7WUF0QkQsVUFBVTs7OztZQVBGLDRCQUE0QjtZQUZaLG9CQUFvQjs7Ozs7OztJQVloQywyRUFBMkU7Ozs7O0lBQ3BGLG1FQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuL3N0cnVjdHVyZS50b2dnbGUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJUb2dnbGVkRXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5maWx0ZXItdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGNvbW1hbmQuc3RydWN0dXJlSWQsXG5cdFx0XHRmaWVsZElkOiBGaWVsZElkID0gY29tbWFuZC5maWVsZElkLFxuXHRcdFx0ZXh0ZXJuYWxGaWVsZElkOiBzdHJpbmcgPSBjb21tYW5kLmV4dGVybmFsRmlsdGVySWQsXG5cdFx0XHRmaWx0ZXJWYWx1ZSA9IGNvbW1hbmQuZmlsdGVyVmFsdWU7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRzdHJ1Y3R1cmUudG9nZ2xlRmlsdGVyKGZpZWxkSWQsIGV4dGVybmFsRmllbGRJZCwgZmlsdGVyVmFsdWUpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU3RydWN0dXJlRmlsdGVyVG9nZ2xlZEV2ZW50KHN0cnVjdHVyZUlkKSk7XG5cdH1cblxufVxuIl19