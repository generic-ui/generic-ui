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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1oZWlnaHQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvc2V0LXJvdy1oZWlnaHQuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNEO0lBQ2dELHNEQUFjO0lBRTdELG9DQUE2Qiw0QkFBMEQsRUFDMUUsb0JBQTBDO1FBRHZELFlBRUMsa0JBQU0sbUJBQW1CLENBQUMsU0FDMUI7UUFINEIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUMxRSwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCOztJQUV2RCxDQUFDOzs7OztJQUVELDJDQUFNOzs7O0lBQU4sVUFBTyxPQUE0Qjs7WUFFNUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztZQUN0QyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVM7O1lBRXhCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7WUFFbEUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRTtRQUVsRCxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBTEYsNEJBQTRCO2dCQUZaLG9CQUFvQjs7SUErQjdDLGlDQUFDO0NBQUEsQUF4QkQsQ0FDZ0QsY0FBYyxHQXVCN0Q7U0F2QlksMEJBQTBCOzs7Ozs7SUFFMUIsa0VBQTJFOzs7OztJQUNwRiwwREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZXRSb3dIZWlnaHRDb21tYW5kIH0gZnJvbSAnLi9zZXQtcm93LWhlaWdodC5jb21tYW5kJztcbmltcG9ydCB7IFJvd0hlaWdodFNldEV2ZW50IH0gZnJvbSAnLi9yb3ctaGVpZ2h0LXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFJvd0hlaWdodENvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFNldFJvd0hlaWdodENvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFNldFJvd0hlaWdodENvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0cm93SGVpZ2h0ID0gY29tbWFuZC5yb3dIZWlnaHQ7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRjb25zdCBmb3JtYXRpb24gPSBzdHJ1Y3R1cmUuZ2V0VmVydGljYWxGb3JtYXRpb24oKTtcblxuXHRcdGZvcm1hdGlvbi5zZXRSb3dIZWlnaHQocm93SGVpZ2h0KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFJvd0hlaWdodFNldEV2ZW50KHN0cnVjdHVyZUlkKSk7XG5cdH1cblxufVxuIl19