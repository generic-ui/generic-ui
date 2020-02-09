/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetVerticalScrollEnabledCommand } from './set-vertical-scroll-enabled.command';
import { VerticalScrollEnabledSetEvent } from './vertical-scroll-enabled-set.event';
export class SetVerticalScrollEnabledCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        super(SetVerticalScrollEnabledCommand);
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
        const enabled = command.enabled;
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        const formation = structure.getVerticalFormation();
        formation.setEnabled(enabled);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new VerticalScrollEnabledSetEvent(structureId));
    }
}
SetVerticalScrollEnabledCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetVerticalScrollEnabledCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetVerticalScrollEnabledCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    SetVerticalScrollEnabledCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC12ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUlwRixNQUFNLE9BQU8sc0NBQXVDLFNBQVEsY0FBYzs7Ozs7SUFFekUsWUFBNkIsNEJBQTBELEVBQzFFLG9CQUEwQztRQUN0RCxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUZYLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDMUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUV2RCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUF3Qzs7Y0FFeEMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztjQUN0QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87O2NBRXBCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7Y0FFbEUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRTtRQUVsRCxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLDZCQUE2QixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7O1lBdEJELFVBQVU7Ozs7WUFMRiw0QkFBNEI7WUFEWixvQkFBb0I7Ozs7Ozs7SUFTaEMsOEVBQTJFOzs7OztJQUNwRixzRUFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZCB9IGZyb20gJy4vc2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQnO1xuaW1wb3J0IHsgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuL3ZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0ZW5hYmxlZCA9IGNvbW1hbmQuZW5hYmxlZDtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKTtcblxuXHRcdGNvbnN0IGZvcm1hdGlvbiA9IHN0cnVjdHVyZS5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpO1xuXG5cdFx0Zm9ybWF0aW9uLnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBWZXJ0aWNhbFNjcm9sbEVuYWJsZWRTZXRFdmVudChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cbn1cbiJdfQ==