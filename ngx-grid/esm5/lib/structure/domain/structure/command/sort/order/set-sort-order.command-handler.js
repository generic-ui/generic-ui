/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetSortOrderCommand } from './set-sort-order.command';
import { SortOrderSetEvent } from './sort-order-set.event';
var SetSortOrderCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetSortOrderCommandHandler, _super);
    function SetSortOrderCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetSortOrderCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetSortOrderCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.getAggregateId();
        /** @type {?} */
        var compositionId = command.getCompositionId();
        /** @type {?} */
        var fieldId = command.getFieldId();
        /** @type {?} */
        var sortOrder = command.getSortOrder();
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var sorters = structure.setSortOrder(fieldId, sortOrder);
        this.structureAggregateRepository.save(structure);
        this.publishSortEvent(structureId, compositionId, fieldId, sorters);
    };
    /**
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sorters
     * @return {?}
     */
    SetSortOrderCommandHandler.prototype.publishSortEvent = /**
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sorters
     * @return {?}
     */
    function (aggregateId, compositionId, fieldId, sorters) {
        /** @type {?} */
        var directions = sorters.map((/**
         * @param {?} sorter
         * @return {?}
         */
        function (sorter) {
            return {
                direction: sorter.hasDirection(),
                fieldId: sorter.getField().getId()
            };
        }));
        this.domainEventPublisher.publish(new SortOrderSetEvent(aggregateId, compositionId, directions));
    };
    SetSortOrderCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSortOrderCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetSortOrderCommandHandler;
}(CommandHandler));
export { SetSortOrderCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnQtb3JkZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L29yZGVyL3NldC1zb3J0LW9yZGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFlLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU0zRDtJQUNnRCxzREFBYztJQUU3RCxvQ0FBNkIsNEJBQTBELEVBQzVFLG9CQUEwQztRQURyRCxZQUVDLGtCQUFNLG1CQUFtQixDQUFDLFNBQzFCO1FBSDRCLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDNUUsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjs7SUFFckQsQ0FBQzs7Ozs7SUFFRCwyQ0FBTTs7OztJQUFOLFVBQU8sT0FBNEI7O1lBRTVCLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFOztZQUMzQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFOztZQUMxQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRTs7WUFDOUIsU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUU7O1lBRTdCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7WUFFbEUsT0FBTyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUUxRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7OztJQUVELHFEQUFnQjs7Ozs7OztJQUFoQixVQUFpQixXQUF3QixFQUFFLGFBQTRCLEVBQUUsT0FBZ0IsRUFBRSxPQUErQjs7WUFFbkgsVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUF1QjtZQUN0RCxPQUFPO2dCQUNOLFNBQVMsRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFO2dCQUNoQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNsQyxDQUFDO1FBQ0gsQ0FBQyxFQUFDO1FBRUYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsRyxDQUFDOztnQkFsQ0QsVUFBVTs7OztnQkFSRiw0QkFBNEI7Z0JBRkMsb0JBQW9COztJQStDMUQsaUNBQUM7Q0FBQSxBQXJDRCxDQUNnRCxjQUFjLEdBb0M3RDtTQXBDWSwwQkFBMEI7Ozs7OztJQUUxQixrRUFBMkU7Ozs7O0lBQ3BGLDBEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQsIENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZXRTb3J0T3JkZXJDb21tYW5kIH0gZnJvbSAnLi9zZXQtc29ydC1vcmRlci5jb21tYW5kJztcbmltcG9ydCB7IFNvcnRPcmRlclNldEV2ZW50IH0gZnJvbSAnLi9zb3J0LW9yZGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi4vc3RydWN0dXJlLnNvcnRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFNvcnRPcmRlckNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTZXRTb3J0T3JkZXJDb21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTZXRTb3J0T3JkZXJDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0Y29tcG9zaXRpb25JZCA9IGNvbW1hbmQuZ2V0Q29tcG9zaXRpb25JZCgpLFxuXHRcdFx0ZmllbGRJZCA9IGNvbW1hbmQuZ2V0RmllbGRJZCgpLFxuXHRcdFx0c29ydE9yZGVyID0gY29tbWFuZC5nZXRTb3J0T3JkZXIoKTtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKTtcblxuXHRcdGNvbnN0IHNvcnRlcnMgPSBzdHJ1Y3R1cmUuc2V0U29ydE9yZGVyKGZpZWxkSWQsIHNvcnRPcmRlcik7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXG5cdFx0dGhpcy5wdWJsaXNoU29ydEV2ZW50KHN0cnVjdHVyZUlkLCBjb21wb3NpdGlvbklkLCBmaWVsZElkLCBzb3J0ZXJzKTtcblx0fVxuXG5cdHB1Ymxpc2hTb3J0RXZlbnQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBmaWVsZElkOiBGaWVsZElkLCBzb3J0ZXJzOiBBcnJheTxTdHJ1Y3R1cmVTb3J0ZXI+KTogdm9pZCB7XG5cblx0XHRjb25zdCBkaXJlY3Rpb25zID0gc29ydGVycy5tYXAoKHNvcnRlcjogU3RydWN0dXJlU29ydGVyKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkaXJlY3Rpb246IHNvcnRlci5oYXNEaXJlY3Rpb24oKSxcblx0XHRcdFx0ZmllbGRJZDogc29ydGVyLmdldEZpZWxkKCkuZ2V0SWQoKVxuXHRcdFx0fTtcblx0XHR9KTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU29ydE9yZGVyU2V0RXZlbnQoYWdncmVnYXRlSWQsIGNvbXBvc2l0aW9uSWQsIGRpcmVjdGlvbnMpKTtcblx0fVxuXG5cbn1cbiJdfQ==