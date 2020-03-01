/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetRowHeightCommand } from './set-row-height.command';
import { RowHeightSetEvent } from './row-height-set.event';
var SetRowHeightCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetRowHeightCommandHandler, _super);
    function SetRowHeightCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetRowHeightCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetRowHeightCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var rowHeight = command.rowHeight;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var formation = structure.getVerticalFormation();
        formation.setRowHeight(rowHeight);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new RowHeightSetEvent(structureId));
    };
    SetRowHeightCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetRowHeightCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetRowHeightCommandHandler;
}(CommandHandler));
export { SetRowHeightCommandHandler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1oZWlnaHQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvc2V0LXJvdy1oZWlnaHQuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSTNEO0lBQ2dELHNEQUFrQztJQUVqRixvQ0FBNkIsNEJBQTBELEVBQzFFLG9CQUEwQztRQUR2RCxZQUVDLGtCQUFNLG1CQUFtQixDQUFDLFNBQzFCO1FBSDRCLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDMUUsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjs7SUFFdkQsQ0FBQzs7Ozs7SUFFRCwyQ0FBTTs7OztJQUFOLFVBQU8sT0FBNEI7O1lBRTVCLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7WUFDdEMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTOztZQUV4QixTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7O1lBRWxFLFNBQVMsR0FBRyxTQUFTLENBQUMsb0JBQW9CLEVBQUU7UUFFbEQsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7O2dCQXRCRCxVQUFVOzs7O2dCQU5GLDRCQUE0QjtnQkFGWixvQkFBb0I7O0lBZ0M3QyxpQ0FBQztDQUFBLEFBeEJELENBQ2dELGNBQWMsR0F1QjdEO1NBdkJZLDBCQUEwQjs7Ozs7O0lBRTFCLGtFQUEyRTs7Ozs7SUFDcEYsMERBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0Q29tbWFuZCB9IGZyb20gJy4vc2V0LXJvdy1oZWlnaHQuY29tbWFuZCc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4vcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFJvd0hlaWdodENvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcm90ZWN0ZWQgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoU2V0Um93SGVpZ2h0Q29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogU2V0Um93SGVpZ2h0Q29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGNvbW1hbmQuc3RydWN0dXJlSWQsXG5cdFx0XHRyb3dIZWlnaHQgPSBjb21tYW5kLnJvd0hlaWdodDtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKTtcblxuXHRcdGNvbnN0IGZvcm1hdGlvbiA9IHN0cnVjdHVyZS5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpO1xuXG5cdFx0Zm9ybWF0aW9uLnNldFJvd0hlaWdodChyb3dIZWlnaHQpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgUm93SGVpZ2h0U2V0RXZlbnQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG59XG4iXX0=