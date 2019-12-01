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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC12ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJcEY7SUFDNEQsa0VBQWM7SUFFekUsZ0RBQTZCLDRCQUEwRCxFQUMxRSxvQkFBMEM7UUFEdkQsWUFFQyxrQkFBTSwrQkFBK0IsQ0FBQyxTQUN0QztRQUg0QixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzFFLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7O0lBRXZELENBQUM7Ozs7O0lBRUQsdURBQU07Ozs7SUFBTixVQUFPLE9BQXdDOztZQUV4QyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O1lBQ3RDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTzs7WUFFcEIsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOztZQUVsRSxTQUFTLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixFQUFFO1FBRWxELFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksNkJBQTZCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOztnQkF0QkQsVUFBVTs7OztnQkFORiw0QkFBNEI7Z0JBRFosb0JBQW9COztJQStCN0MsNkNBQUM7Q0FBQSxBQXhCRCxDQUM0RCxjQUFjLEdBdUJ6RTtTQXZCWSxzQ0FBc0M7Ozs7OztJQUV0Qyw4RUFBMkU7Ozs7O0lBQ3BGLHNFQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi9zZXQtdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBWZXJ0aWNhbFNjcm9sbEVuYWJsZWRTZXRFdmVudCB9IGZyb20gJy4vdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQtc2V0LmV2ZW50JztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByb3RlY3RlZCBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZCxcblx0XHRcdGVuYWJsZWQgPSBjb21tYW5kLmVuYWJsZWQ7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRjb25zdCBmb3JtYXRpb24gPSBzdHJ1Y3R1cmUuZ2V0VmVydGljYWxGb3JtYXRpb24oKTtcblxuXHRcdGZvcm1hdGlvbi5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG59XG4iXX0=