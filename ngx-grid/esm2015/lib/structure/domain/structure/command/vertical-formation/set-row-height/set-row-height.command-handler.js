/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetRowHeightCommand } from './set-row-height.command';
import { RowHeightSetEvent } from './row-height-set.event';
export class SetRowHeightCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        super(SetRowHeightCommand);
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
        const rowHeight = command.rowHeight;
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        const formation = structure.getVerticalFormation();
        formation.setRowHeight(rowHeight);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new RowHeightSetEvent(structureId));
    }
}
SetRowHeightCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetRowHeightCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowHeightCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    SetRowHeightCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1oZWlnaHQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvc2V0LXJvdy1oZWlnaHQuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFJM0QsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGNBQWM7Ozs7O0lBRTdELFlBQTZCLDRCQUEwRCxFQUMxRSxvQkFBMEM7UUFDdEQsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFGQyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzFFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFFdkQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBNEI7O2NBRTVCLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7Y0FDdEMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTOztjQUV4QixTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7O2NBRWxFLFNBQVMsR0FBRyxTQUFTLENBQUMsb0JBQW9CLEVBQUU7UUFFbEQsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7OztZQXRCRCxVQUFVOzs7O1lBTEYsNEJBQTRCO1lBRlosb0JBQW9COzs7Ozs7O0lBVWhDLGtFQUEyRTs7Ozs7SUFDcEYsMERBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0Q29tbWFuZCB9IGZyb20gJy4vc2V0LXJvdy1oZWlnaHQuY29tbWFuZCc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4vcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRSb3dIZWlnaHRDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByb3RlY3RlZCBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTZXRSb3dIZWlnaHRDb21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTZXRSb3dIZWlnaHRDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZCxcblx0XHRcdHJvd0hlaWdodCA9IGNvbW1hbmQucm93SGVpZ2h0O1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpO1xuXG5cdFx0Y29uc3QgZm9ybWF0aW9uID0gc3RydWN0dXJlLmdldFZlcnRpY2FsRm9ybWF0aW9uKCk7XG5cblx0XHRmb3JtYXRpb24uc2V0Um93SGVpZ2h0KHJvd0hlaWdodCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBSb3dIZWlnaHRTZXRFdmVudChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cbn1cbiJdfQ==