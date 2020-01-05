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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvdG9nZ2xlL3N0cnVjdHVyZS50b2dnbGUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWpGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBSS9FLE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSxjQUFjOzs7OztJQUV0RSxZQUE2Qiw0QkFBMEQsRUFDNUUsb0JBQTBDO1FBQ3BELEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRlIsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUM1RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBRXJELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQXFDOztjQUVyQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O2NBQ3RDLE9BQU8sR0FBWSxPQUFPLENBQUMsT0FBTzs7Y0FDbEMsZUFBZSxHQUFXLE9BQU8sQ0FBQyxnQkFBZ0I7O2NBQ2xELFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7Y0FFNUIsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRXhFLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7OztZQXRCRCxVQUFVOzs7O1lBTkYsNEJBQTRCO1lBRlosb0JBQW9COzs7Ozs7O0lBV2hDLDJFQUEyRTs7Ozs7SUFDcEYsbUVBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4vc3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlclRvZ2dsZWRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmZpbHRlci10b2dnbGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0ZmllbGRJZDogRmllbGRJZCA9IGNvbW1hbmQuZmllbGRJZCxcblx0XHRcdGV4dGVybmFsRmllbGRJZDogc3RyaW5nID0gY29tbWFuZC5leHRlcm5hbEZpbHRlcklkLFxuXHRcdFx0ZmlsdGVyVmFsdWUgPSBjb21tYW5kLmZpbHRlclZhbHVlO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpO1xuXG5cdFx0c3RydWN0dXJlLnRvZ2dsZUZpbHRlcihmaWVsZElkLCBleHRlcm5hbEZpZWxkSWQsIGZpbHRlclZhbHVlKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFN0cnVjdHVyZUZpbHRlclRvZ2dsZWRFdmVudChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cbn1cbiJdfQ==