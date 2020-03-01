/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetSortOrderCommand } from './set-sort-order.command';
import { SortOrderSetEvent } from './sort-order-set.event';
export class SetSortOrderCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        super(SetSortOrderCommand);
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const structureId = command.getAggregateId();
        /** @type {?} */
        const compositionId = command.getCompositionId();
        /** @type {?} */
        const fieldId = command.getFieldId();
        /** @type {?} */
        const sortOrder = command.getSortOrder();
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        const sorters = structure.setSortOrder(fieldId, sortOrder);
        this.structureAggregateRepository.save(structure);
        this.publishSortEvent(structureId, compositionId, fieldId, sorters);
    }
    /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnQtb3JkZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L29yZGVyL3NldC1zb3J0LW9yZGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQWUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRXhHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBUTNELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxjQUFrQzs7Ozs7SUFFakYsWUFBNkIsNEJBQTBELEVBQzVFLG9CQUEwQztRQUNwRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUZDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDNUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUVyRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUE0Qjs7Y0FFNUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUU7O2NBQzNDLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7O2NBQzFDLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFOztjQUM5QixTQUFTLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRTs7Y0FFN0IsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOztjQUVsRSxPQUFPLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBRTFELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsV0FBd0IsRUFBRSxhQUE0QixFQUFFLE9BQWdCLEVBQUUsT0FBK0I7O2NBRW5ILFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFO1lBQzFELE9BQU87Z0JBQ04sU0FBUyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hDLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFO2FBQ2xDLENBQUM7UUFDSCxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7OztZQWxDRCxVQUFVOzs7O1lBVEYsNEJBQTRCO1lBRkMsb0JBQW9COzs7Ozs7O0lBYzdDLGtFQUEyRTs7Ozs7SUFDcEYsMERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNldFNvcnRPcmRlckNvbW1hbmQgfSBmcm9tICcuL3NldC1zb3J0LW9yZGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU29ydE9yZGVyU2V0RXZlbnQgfSBmcm9tICcuL3NvcnQtb3JkZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3J0ZXIgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuc29ydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRTb3J0T3JkZXJDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTZXRTb3J0T3JkZXJDb21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTZXRTb3J0T3JkZXJDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0Y29tcG9zaXRpb25JZCA9IGNvbW1hbmQuZ2V0Q29tcG9zaXRpb25JZCgpLFxuXHRcdFx0ZmllbGRJZCA9IGNvbW1hbmQuZ2V0RmllbGRJZCgpLFxuXHRcdFx0c29ydE9yZGVyID0gY29tbWFuZC5nZXRTb3J0T3JkZXIoKTtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKTtcblxuXHRcdGNvbnN0IHNvcnRlcnMgPSBzdHJ1Y3R1cmUuc2V0U29ydE9yZGVyKGZpZWxkSWQsIHNvcnRPcmRlcik7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXG5cdFx0dGhpcy5wdWJsaXNoU29ydEV2ZW50KHN0cnVjdHVyZUlkLCBjb21wb3NpdGlvbklkLCBmaWVsZElkLCBzb3J0ZXJzKTtcblx0fVxuXG5cdHB1Ymxpc2hTb3J0RXZlbnQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBmaWVsZElkOiBGaWVsZElkLCBzb3J0ZXJzOiBBcnJheTxTdHJ1Y3R1cmVTb3J0ZXI+KTogdm9pZCB7XG5cblx0XHRjb25zdCBkaXJlY3Rpb25zID0gc29ydGVycy5tYXAoKHNvcnRlcjogU3RydWN0dXJlU29ydGVyKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkaXJlY3Rpb246IHNvcnRlci5oYXNEaXJlY3Rpb24oKSxcblx0XHRcdFx0ZmllbGRJZDogc29ydGVyLmdldEZpZWxkKCkuZ2V0SWQoKVxuXHRcdFx0fTtcblx0XHR9KTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU29ydE9yZGVyU2V0RXZlbnQoYWdncmVnYXRlSWQsIGNvbXBvc2l0aW9uSWQsIGRpcmVjdGlvbnMpKTtcblx0fVxuXG5cbn1cbiJdfQ==