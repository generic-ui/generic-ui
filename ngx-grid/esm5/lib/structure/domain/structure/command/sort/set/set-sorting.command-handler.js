/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetSortingCommand } from './set-sorting.command';
import { SortingSetEvent } from './sorting-set.event';
var SetSortingCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetSortingCommandHandler, _super);
    function SetSortingCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetSortingCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetSortingCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var sortingConfig = command.getSortingConfig();
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.setSortingConfig(sortingConfig);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new SortingSetEvent(structureId));
    };
    SetSortingCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSortingCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetSortingCommandHandler;
}(CommandHandler));
export { SetSortingCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSortingCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetSortingCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnRpbmcuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L3NldC9zZXQtc29ydGluZy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXREO0lBQzhDLG9EQUFjO0lBRTNELGtDQUE2Qiw0QkFBMEQsRUFDNUUsb0JBQTBDO1FBRHJELFlBRUMsa0JBQU0saUJBQWlCLENBQUMsU0FDeEI7UUFINEIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUM1RSwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCOztJQUVyRCxDQUFDOzs7OztJQUVELHlDQUFNOzs7O0lBQU4sVUFBTyxPQUEwQjs7WUFFMUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztZQUN0QyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFOztZQUVyQyxTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFeEUsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O2dCQXBCRCxVQUFVOzs7O2dCQU5GLDRCQUE0QjtnQkFEWixvQkFBb0I7O0lBNkI3QywrQkFBQztDQUFBLEFBdEJELENBQzhDLGNBQWMsR0FxQjNEO1NBckJZLHdCQUF3Qjs7Ozs7O0lBRXhCLGdFQUEyRTs7Ozs7SUFDcEYsd0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNldFNvcnRpbmdDb21tYW5kIH0gZnJvbSAnLi9zZXQtc29ydGluZy5jb21tYW5kJztcbmltcG9ydCB7IFNvcnRpbmdTZXRFdmVudCB9IGZyb20gJy4vc29ydGluZy1zZXQuZXZlbnQnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFNvcnRpbmdDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoU2V0U29ydGluZ0NvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFNldFNvcnRpbmdDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZCxcblx0XHRcdHNvcnRpbmdDb25maWcgPSBjb21tYW5kLmdldFNvcnRpbmdDb25maWcoKTtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKTtcblxuXHRcdHN0cnVjdHVyZS5zZXRTb3J0aW5nQ29uZmlnKHNvcnRpbmdDb25maWcpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU29ydGluZ1NldEV2ZW50KHN0cnVjdHVyZUlkKSk7XG5cdH1cblxufVxuIl19