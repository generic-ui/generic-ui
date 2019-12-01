/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureSetConfigFilterCommand } from './structure.set-config-filter.command';
import { StructureConfigFilterSetEvent } from './structure.config-filter-set.event';
export class StructureSetConfigFilterCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        super(StructureSetConfigFilterCommand);
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
        const filterConfig = command.getConfig();
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        structure.setFilterConfig(filterConfig);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureConfigFilterSetEvent(structureId, filterConfig.enabled));
    }
}
StructureSetConfigFilterCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSetConfigFilterCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigFilterCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1jb25maWctZmlsdGVyLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL2NvbmZpZy9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJcEYsTUFBTSxPQUFPLHNDQUF1QyxTQUFRLGNBQWM7Ozs7O0lBRXpFLFlBQTZCLDRCQUEwRCxFQUM1RSxvQkFBMEM7UUFDcEQsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFGWCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzVFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFFckQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBd0M7O2NBRXhDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7Y0FDdEMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7O2NBRTdCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV4RSxTQUFTLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLDZCQUE2QixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6RyxDQUFDOzs7WUFwQkQsVUFBVTs7OztZQUxGLDRCQUE0QjtZQUZaLG9CQUFvQjs7Ozs7OztJQVVoQyw4RUFBMkU7Ozs7O0lBQ3BGLHNFQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ0ZpbHRlckNvbW1hbmQgfSBmcm9tICcuL3N0cnVjdHVyZS5zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZXRDb25maWdGaWx0ZXJDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoU3RydWN0dXJlU2V0Q29uZmlnRmlsdGVyQ29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogU3RydWN0dXJlU2V0Q29uZmlnRmlsdGVyQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGNvbW1hbmQuc3RydWN0dXJlSWQsXG5cdFx0XHRmaWx0ZXJDb25maWcgPSBjb21tYW5kLmdldENvbmZpZygpO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpO1xuXG5cdFx0c3RydWN0dXJlLnNldEZpbHRlckNvbmZpZyhmaWx0ZXJDb25maWcpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnQoc3RydWN0dXJlSWQsIGZpbHRlckNvbmZpZy5lbmFibGVkKSk7XG5cdH1cblxufVxuIl19