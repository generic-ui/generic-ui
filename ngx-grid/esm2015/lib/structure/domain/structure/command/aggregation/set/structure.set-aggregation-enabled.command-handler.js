/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureAggregateFactory } from '../../structure.aggregate-factory';
import { StructureSourceDomainEventPublisher } from '../../../../source/command/structure.source.domain-event.publisher';
import { StructureSetAggregationEnabledCommand } from './structure.set-aggregation-enabled.command';
import { StructureAggregationEnabledSetEvent } from './structure.aggregation-enabled-set.event';
export class StructureSetAggregationEnabledCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} structureAggregateFactory
     * @param {?} structureSourceDomainEventPublisher
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, structureAggregateFactory, structureSourceDomainEventPublisher, domainEventPublisher) {
        super(StructureSetAggregationEnabledCommand);
        this.structureAggregateRepository = structureAggregateRepository;
        this.structureAggregateFactory = structureAggregateFactory;
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
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
        const enabled = command.enabled;
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        const aggregateEvents = structure.setAggregationEnabled(enabled);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureAggregationEnabledSetEvent(structureId, enabled));
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    }
}
StructureSetAggregationEnabledCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSetAggregationEnabledCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: StructureAggregateFactory },
    { type: StructureSourceDomainEventPublisher },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.structureAggregateFactory;
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.structureSourceDomainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1hZ2dyZWdhdGlvbi1lbmFibGVkLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvYWdncmVnYXRpb24vc2V0L3N0cnVjdHVyZS5zZXQtYWdncmVnYXRpb24tZW5hYmxlZC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUN6SCxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUloRyxNQUFNLE9BQU8sNENBQTZDLFNBQVEsY0FBYzs7Ozs7OztJQUUvRSxZQUE2Qiw0QkFBMEQsRUFDbkUseUJBQW9ELEVBQ3BELG1DQUF3RSxFQUNqRixvQkFBMEM7UUFDcEQsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFKakIsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUNuRSw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDakYseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUVyRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUE4Qzs7Y0FFOUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztjQUN0QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87O2NBRXBCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7Y0FFbEUsZUFBZSxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUM7UUFFaEUsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksbUNBQW1DLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7WUF2QkQsVUFBVTs7OztZQVBGLDRCQUE0QjtZQUM1Qix5QkFBeUI7WUFDekIsbUNBQW1DO1lBSG5CLG9CQUFvQjs7Ozs7OztJQVdoQyxvRkFBMkU7Ozs7O0lBQ3BGLGlGQUFxRTs7Ozs7SUFDckUsMkZBQXlGOzs7OztJQUN6Riw0RUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL3N0cnVjdHVyZS5zb3VyY2UuZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRBZ2dyZWdhdGlvbkVuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc2V0LWFnZ3JlZ2F0aW9uLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkVuYWJsZWRTZXRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLWVuYWJsZWQtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2V0QWdncmVnYXRpb25FbmFibGVkQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3Rvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXI6IFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0ZW5hYmxlZCA9IGNvbW1hbmQuZW5hYmxlZDtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKTtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUV2ZW50cyA9IHN0cnVjdHVyZS5zZXRBZ2dyZWdhdGlvbkVuYWJsZWQoZW5hYmxlZCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkVuYWJsZWRTZXRFdmVudChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHRcdHRoaXMuc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChhZ2dyZWdhdGVFdmVudHMpO1xuXHR9XG5cbn1cbiJdfQ==