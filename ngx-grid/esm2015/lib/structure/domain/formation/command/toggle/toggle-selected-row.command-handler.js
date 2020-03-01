/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { ToggleSelectedRowCommand } from './toggle-selected-row.command';
import { SelectedRowToggledEvent } from './selected-row-toggled.event';
export class ToggleSelectedRowCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        super(ToggleSelectedRowCommand, SelectedRowToggledEvent, domainEventPublisher);
        this.structureAggregateRepository = structureAggregateRepository;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const selectedRow = command.selectedRow;
        /** @type {?} */
        const structureId = command.getAggregateId();
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        if (!structure) {
            console.error(`There is no aggregate 'Structure' for aggregateId: ${structureId}`);
            return;
        }
        /** @type {?} */
        const formation = structure.getFormation();
        formation.toggleRow(selectedRow);
        this.structureAggregateRepository.save(structure);
    }
}
ToggleSelectedRowCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ToggleSelectedRowCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSelectedRowCommandHandler.prototype.structureAggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL3RvZ2dsZS90b2dnbGUtc2VsZWN0ZWQtcm93LmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBQzNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBS3ZFLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxjQUFrQzs7Ozs7SUFFdEYsWUFBb0IsNEJBQTBELEVBQzNFLG9CQUEwQztRQUM1QyxLQUFLLENBQUMsd0JBQXdCLEVBQzdCLHVCQUF1QixFQUN2QixvQkFBb0IsQ0FBQyxDQUFDO1FBSkosaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUs5RSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFpQzs7Y0FFakMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztjQUN0QyxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRTs7Y0FFakMsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRXhFLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLHNEQUFzRCxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ25GLE9BQU87U0FDUDs7Y0FFSyxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRTtRQUUxQyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7O1lBM0JELFVBQVU7Ozs7WUFORiw0QkFBNEI7WUFEWixvQkFBb0I7Ozs7Ozs7SUFVaEMsdUVBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZCB9IGZyb20gJy4vdG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kJztcbmltcG9ydCB7IFNlbGVjdGVkUm93VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi9zZWxlY3RlZC1yb3ctdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kLFxuXHRcdFx0U2VsZWN0ZWRSb3dUb2dnbGVkRXZlbnQsXG5cdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHNlbGVjdGVkUm93ID0gY29tbWFuZC5zZWxlY3RlZFJvdyxcblx0XHRcdHN0cnVjdHVyZUlkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpO1xuXG5cdFx0aWYgKCFzdHJ1Y3R1cmUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYFRoZXJlIGlzIG5vIGFnZ3JlZ2F0ZSAnU3RydWN0dXJlJyBmb3IgYWdncmVnYXRlSWQ6ICR7c3RydWN0dXJlSWR9YCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZm9ybWF0aW9uID0gc3RydWN0dXJlLmdldEZvcm1hdGlvbigpO1xuXG5cdFx0Zm9ybWF0aW9uLnRvZ2dsZVJvdyhzZWxlY3RlZFJvdyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXHR9XG5cbn1cbiJdfQ==