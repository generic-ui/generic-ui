/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetSortOrderCommand } from './set-sort-order.command';
import { SortOrderSetEvent } from './sort-order-set.event';
var SetSortOrderCommandHandler = /** @class */ (function () {
    function SetSortOrderCommandHandler(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetSortOrderCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetSortOrderCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetSortOrderCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    SetSortOrderCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var structureId = command.getAggregateId();
        /** @type {?} */
        var compositionId = command.getCompositionId();
        /** @type {?} */
        var fieldId = command.getFieldId();
        /** @type {?} */
        var sortOrder = command.getSortOrder();
        /** @type {?} */
        var sorters = structure.setSortOrder(fieldId, sortOrder);
        this.publishSortEvent(structureId, compositionId, fieldId, sorters);
    };
    /**
     * @private
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sorters
     * @return {?}
     */
    SetSortOrderCommandHandler.prototype.publishSortEvent = /**
     * @private
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
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnQtb3JkZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc29ydC9vcmRlci9zZXQtc29ydC1vcmRlci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTzNEO0lBR0Msb0NBQTZCLDRCQUEwRCxFQUM1RSxvQkFBMEM7UUFEeEIsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUM1RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3JELENBQUM7Ozs7SUFFRCwrQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVELHdEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNkIsRUFBRSxPQUE0QjtJQUMvRSxDQUFDOzs7Ozs7SUFFRCxvREFBZTs7Ozs7SUFBZixVQUFnQixTQUE2QixFQUFFLE9BQTRCOztZQUVwRSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRTs7WUFDM0MsYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTs7WUFDMUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O1lBQzlCLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFOztZQUU3QixPQUFPLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBRTFELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7Ozs7SUFFTyxxREFBZ0I7Ozs7Ozs7O0lBQXhCLFVBQXlCLFdBQXdCLEVBQUUsYUFBNEIsRUFBRSxPQUFnQixFQUFFLE9BQStCOztZQUUzSCxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQXVCO1lBQ3RELE9BQU87Z0JBQ04sU0FBUyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hDLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFO2FBQ2xDLENBQUM7UUFDSCxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7O2dCQXBDRCxVQUFVOzs7O2dCQVRGLDRCQUE0QjtnQkFGQyxvQkFBb0I7O0lBaUQxRCxpQ0FBQztDQUFBLEFBdENELElBc0NDO1NBckNZLDBCQUEwQjs7Ozs7O0lBRTFCLGtFQUEyRTs7Ozs7SUFDcEYsMERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZXRTb3J0T3JkZXJDb21tYW5kIH0gZnJvbSAnLi9zZXQtc29ydC1vcmRlci5jb21tYW5kJztcbmltcG9ydCB7IFNvcnRPcmRlclNldEV2ZW50IH0gZnJvbSAnLi9zb3J0LW9yZGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi4vc3RydWN0dXJlLnNvcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0U29ydE9yZGVyQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldFNvcnRPcmRlckNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U2V0U29ydE9yZGVyQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRTb3J0T3JkZXJDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0U29ydE9yZGVyQ29tbWFuZCk6IHZvaWQge1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRTb3J0T3JkZXJDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdGNvbXBvc2l0aW9uSWQgPSBjb21tYW5kLmdldENvbXBvc2l0aW9uSWQoKSxcblx0XHRcdGZpZWxkSWQgPSBjb21tYW5kLmdldEZpZWxkSWQoKSxcblx0XHRcdHNvcnRPcmRlciA9IGNvbW1hbmQuZ2V0U29ydE9yZGVyKCk7XG5cblx0XHRjb25zdCBzb3J0ZXJzID0gc3RydWN0dXJlLnNldFNvcnRPcmRlcihmaWVsZElkLCBzb3J0T3JkZXIpO1xuXG5cdFx0dGhpcy5wdWJsaXNoU29ydEV2ZW50KHN0cnVjdHVyZUlkLCBjb21wb3NpdGlvbklkLCBmaWVsZElkLCBzb3J0ZXJzKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaFNvcnRFdmVudChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIGZpZWxkSWQ6IEZpZWxkSWQsIHNvcnRlcnM6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGRpcmVjdGlvbnMgPSBzb3J0ZXJzLm1hcCgoc29ydGVyOiBTdHJ1Y3R1cmVTb3J0ZXIpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRpcmVjdGlvbjogc29ydGVyLmhhc0RpcmVjdGlvbigpLFxuXHRcdFx0XHRmaWVsZElkOiBzb3J0ZXIuZ2V0RmllbGQoKS5nZXRJZCgpXG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTb3J0T3JkZXJTZXRFdmVudChhZ2dyZWdhdGVJZCwgY29tcG9zaXRpb25JZCwgZGlyZWN0aW9ucykpO1xuXHR9XG5cbn1cbiJdfQ==