/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnQtb3JkZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc29ydC9vcmRlci9zZXQtc29ydC1vcmRlci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBUTNELE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBRXRDLFlBQTZCLDRCQUEwRCxFQUM1RSxvQkFBMEM7UUFEeEIsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUM1RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3JELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxTQUE2QixFQUFFLE9BQTRCO0lBQy9FLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxTQUE2QixFQUFFLE9BQTRCOztjQUVwRSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRTs7Y0FDM0MsYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTs7Y0FDMUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O2NBQzlCLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFOztjQUU3QixPQUFPLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBRTFELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxXQUF3QixFQUFFLGFBQTRCLEVBQUUsT0FBZ0IsRUFBRSxPQUErQjs7Y0FFM0gsVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUF1QixFQUFFLEVBQUU7WUFDMUQsT0FBTztnQkFDTixTQUFTLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRTtnQkFDaEMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDbEMsQ0FBQztRQUNILENBQUMsRUFBQztRQUVGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7O1lBcENELFVBQVU7Ozs7WUFURiw0QkFBNEI7WUFGQyxvQkFBb0I7Ozs7Ozs7SUFjN0Msa0VBQTJFOzs7OztJQUNwRiwwREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNldFNvcnRPcmRlckNvbW1hbmQgfSBmcm9tICcuL3NldC1zb3J0LW9yZGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU29ydE9yZGVyU2V0RXZlbnQgfSBmcm9tICcuL3NvcnQtb3JkZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3J0ZXIgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuc29ydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRTb3J0T3JkZXJDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0U29ydE9yZGVyQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogVHlwZTxTZXRTb3J0T3JkZXJDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFNvcnRPcmRlckNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRTb3J0T3JkZXJDb21tYW5kKTogdm9pZCB7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc3RydWN0dXJlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNvcnRPcmRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0Y29tcG9zaXRpb25JZCA9IGNvbW1hbmQuZ2V0Q29tcG9zaXRpb25JZCgpLFxuXHRcdFx0ZmllbGRJZCA9IGNvbW1hbmQuZ2V0RmllbGRJZCgpLFxuXHRcdFx0c29ydE9yZGVyID0gY29tbWFuZC5nZXRTb3J0T3JkZXIoKTtcblxuXHRcdGNvbnN0IHNvcnRlcnMgPSBzdHJ1Y3R1cmUuc2V0U29ydE9yZGVyKGZpZWxkSWQsIHNvcnRPcmRlcik7XG5cblx0XHR0aGlzLnB1Ymxpc2hTb3J0RXZlbnQoc3RydWN0dXJlSWQsIGNvbXBvc2l0aW9uSWQsIGZpZWxkSWQsIHNvcnRlcnMpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoU29ydEV2ZW50KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgZmllbGRJZDogRmllbGRJZCwgc29ydGVyczogQXJyYXk8U3RydWN0dXJlU29ydGVyPik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZGlyZWN0aW9ucyA9IHNvcnRlcnMubWFwKChzb3J0ZXI6IFN0cnVjdHVyZVNvcnRlcikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGlyZWN0aW9uOiBzb3J0ZXIuaGFzRGlyZWN0aW9uKCksXG5cdFx0XHRcdGZpZWxkSWQ6IHNvcnRlci5nZXRGaWVsZCgpLmdldElkKClcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFNvcnRPcmRlclNldEV2ZW50KGFnZ3JlZ2F0ZUlkLCBjb21wb3NpdGlvbklkLCBkaXJlY3Rpb25zKSk7XG5cdH1cblxufVxuIl19