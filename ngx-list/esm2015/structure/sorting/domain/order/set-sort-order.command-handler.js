/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../core/domain/structure-aggregate.repository';
import { SetSortOrderCommand } from './set-sort-order.command';
import { SortOrderSetEvent } from './sort-order-set.event';
export class SetSortOrderCommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetSortOrderCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const structureId = command.getAggregateId();
        /** @type {?} */
        const compositionId = command.getCompositionId();
        /** @type {?} */
        const fieldId = command.getFieldId();
        /** @type {?} */
        const sortOrder = command.getSortOrder();
        /** @type {?} */
        const sorters = structure.setSortOrder(fieldId, sortOrder);
        this.publishSortEvent(structureId, compositionId, fieldId, sorters);
    }
    /**
     * @private
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sorters
     * @return {?}
     */
    publishSortEvent(aggregateId, compositionId, fieldId, sorters) {
        /** @type {?} */
        const directions = sorters.map((/**
         * @param {?} sorter
         * @return {?}
         */
        (sorter) => {
            return {
                direction: sorter.hasDirection(),
                fieldId: sorter.getField().getId()
            };
        }));
        this.domainEventPublisher.publish(new SortOrderSetEvent(aggregateId, compositionId, directions));
    }
}
SetSortOrderCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetSortOrderCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnQtb3JkZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9kb21haW4vb3JkZXIvc2V0LXNvcnQtb3JkZXIuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBNEMsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVEzRCxNQUFNLE9BQU8sMEJBQTBCOzs7OztJQUV0QyxZQUE2Qiw0QkFBMEQsRUFDNUUsb0JBQTBDO1FBRHhCLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDNUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNyRCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBNkIsRUFBRSxPQUE0QjtJQUMvRSxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsU0FBNkIsRUFBRSxPQUE0Qjs7Y0FFcEUsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUU7O2NBQzNDLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7O2NBQzFDLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFOztjQUM5QixTQUFTLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRTs7Y0FFN0IsT0FBTyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUUxRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsV0FBd0IsRUFBRSxhQUE0QixFQUFFLE9BQWdCLEVBQUUsT0FBK0I7O2NBRTNILFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFO1lBQzFELE9BQU87Z0JBQ04sU0FBUyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hDLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFO2FBQ2xDLENBQUM7UUFDSCxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7OztZQXBDRCxVQUFVOzs7O1lBVEYsNEJBQTRCO1lBRmMsb0JBQW9COzs7Ozs7O0lBYzFELGtFQUEyRTs7Ozs7SUFDcEYsMERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2V0U29ydE9yZGVyQ29tbWFuZCB9IGZyb20gJy4vc2V0LXNvcnQtb3JkZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXJTZXRFdmVudCB9IGZyb20gJy4vc29ydC1vcmRlci1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi4vc3RydWN0dXJlLnNvcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0U29ydE9yZGVyQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldFNvcnRPcmRlckNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldFNvcnRPcmRlckNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0U29ydE9yZGVyQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNvcnRPcmRlckNvbW1hbmQpOiB2b2lkIHtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0U29ydE9yZGVyQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHRjb21wb3NpdGlvbklkID0gY29tbWFuZC5nZXRDb21wb3NpdGlvbklkKCksXG5cdFx0XHRmaWVsZElkID0gY29tbWFuZC5nZXRGaWVsZElkKCksXG5cdFx0XHRzb3J0T3JkZXIgPSBjb21tYW5kLmdldFNvcnRPcmRlcigpO1xuXG5cdFx0Y29uc3Qgc29ydGVycyA9IHN0cnVjdHVyZS5zZXRTb3J0T3JkZXIoZmllbGRJZCwgc29ydE9yZGVyKTtcblxuXHRcdHRoaXMucHVibGlzaFNvcnRFdmVudChzdHJ1Y3R1cmVJZCwgY29tcG9zaXRpb25JZCwgZmllbGRJZCwgc29ydGVycyk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hTb3J0RXZlbnQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBmaWVsZElkOiBGaWVsZElkLCBzb3J0ZXJzOiBBcnJheTxTdHJ1Y3R1cmVTb3J0ZXI+KTogdm9pZCB7XG5cblx0XHRjb25zdCBkaXJlY3Rpb25zID0gc29ydGVycy5tYXAoKHNvcnRlcjogU3RydWN0dXJlU29ydGVyKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkaXJlY3Rpb246IHNvcnRlci5oYXNEaXJlY3Rpb24oKSxcblx0XHRcdFx0ZmllbGRJZDogc29ydGVyLmdldEZpZWxkKCkuZ2V0SWQoKVxuXHRcdFx0fTtcblx0XHR9KTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU29ydE9yZGVyU2V0RXZlbnQoYWdncmVnYXRlSWQsIGNvbXBvc2l0aW9uSWQsIGRpcmVjdGlvbnMpKTtcblx0fVxuXG59XG4iXX0=