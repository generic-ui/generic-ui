/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetVerticalScrollEnabledCommand } from './set-vertical-scroll-enabled.command';
import { VerticalScrollEnabledSetEvent } from './vertical-scroll-enabled-set.event';
var SetVerticalScrollEnabledCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetVerticalScrollEnabledCommandHandler, _super);
    function SetVerticalScrollEnabledCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetVerticalScrollEnabledCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetVerticalScrollEnabledCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var enabled = command.enabled;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var formation = structure.getVerticalFormation();
        formation.setEnabled(enabled);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new VerticalScrollEnabledSetEvent(structureId));
    };
    SetVerticalScrollEnabledCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetVerticalScrollEnabledCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetVerticalScrollEnabledCommandHandler;
}(CommandHandler));
export { SetVerticalScrollEnabledCommandHandler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC12ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJcEY7SUFDNEQsa0VBQWtDO0lBRTdGLGdEQUE2Qiw0QkFBMEQsRUFDMUUsb0JBQTBDO1FBRHZELFlBRUMsa0JBQU0sK0JBQStCLENBQUMsU0FDdEM7UUFINEIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUMxRSwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCOztJQUV2RCxDQUFDOzs7OztJQUVELHVEQUFNOzs7O0lBQU4sVUFBTyxPQUF3Qzs7WUFFeEMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztZQUN0QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87O1lBRXBCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7WUFFbEUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRTtRQUVsRCxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLDZCQUE2QixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBTkYsNEJBQTRCO2dCQURaLG9CQUFvQjs7SUErQjdDLDZDQUFDO0NBQUEsQUF4QkQsQ0FDNEQsY0FBYyxHQXVCekU7U0F2Qlksc0NBQXNDOzs7Ozs7SUFFdEMsOEVBQTJFOzs7OztJQUNwRixzRUFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZCB9IGZyb20gJy4vc2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQnO1xuaW1wb3J0IHsgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuL3ZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByb3RlY3RlZCBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZCxcblx0XHRcdGVuYWJsZWQgPSBjb21tYW5kLmVuYWJsZWQ7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRjb25zdCBmb3JtYXRpb24gPSBzdHJ1Y3R1cmUuZ2V0VmVydGljYWxGb3JtYXRpb24oKTtcblxuXHRcdGZvcm1hdGlvbi5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG59XG4iXX0=