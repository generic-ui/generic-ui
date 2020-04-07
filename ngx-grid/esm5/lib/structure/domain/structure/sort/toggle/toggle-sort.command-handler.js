/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { ToggleSortCommand } from './toggle-sort.command';
import { SortToggledEvent } from './sort-toggled.event';
var ToggleSortCommandHandler = /** @class */ (function () {
    function ToggleSortCommandHandler(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    ToggleSortCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return ToggleSortCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    ToggleSortCommandHandler.prototype.publishDomainEvents = /**
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
    ToggleSortCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var aggregateId = command.getAggregateId();
        /** @type {?} */
        var compositionId = command.getCompositionId();
        /** @type {?} */
        var fieldId = command.getFieldId();
        /** @type {?} */
        var sorters = structure.toggleSort(fieldId);
        this.publishSortEvent(aggregateId, compositionId, fieldId, sorters);
    };
    /**
     * @private
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sorters
     * @return {?}
     */
    ToggleSortCommandHandler.prototype.publishSortEvent = /**
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
        this.domainEventPublisher.publish(new SortToggledEvent(aggregateId, compositionId, directions));
    };
    ToggleSortCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToggleSortCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return ToggleSortCommandHandler;
}());
export { ToggleSortCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNvcnQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc29ydC90b2dnbGUvdG9nZ2xlLXNvcnQuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUkxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUl4RDtJQUdDLGtDQUE2Qiw0QkFBMEQsRUFDNUUsb0JBQTBDO1FBRHhCLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDNUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNyRCxDQUFDOzs7O0lBRUQsNkNBQVU7OztJQUFWO1FBQ0MsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFRCxzREFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBMEI7SUFDN0UsQ0FBQzs7Ozs7O0lBRUQsa0RBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBNkIsRUFBRSxPQUEwQjs7WUFFbEUsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUU7O1lBQzNDLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7O1lBQzFDLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFOztZQUV6QixPQUFPLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFFN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7Ozs7OztJQUVPLG1EQUFnQjs7Ozs7Ozs7SUFBeEIsVUFBeUIsV0FBd0IsRUFBRSxhQUE0QixFQUFFLE9BQWdCLEVBQUUsT0FBK0I7O1lBRTNILFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsTUFBdUI7WUFDdEQsT0FBTztnQkFDTixTQUFTLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRTtnQkFDaEMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDbEMsQ0FBQztRQUNILENBQUMsRUFBQztRQUVGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQzs7Z0JBbkNELFVBQVU7Ozs7Z0JBVEYsNEJBQTRCO2dCQUZDLG9CQUFvQjs7SUFnRDFELCtCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FwQ1ksd0JBQXdCOzs7Ozs7SUFFeEIsZ0VBQTJFOzs7OztJQUNwRix3REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFRvZ2dsZVNvcnRDb21tYW5kIH0gZnJvbSAnLi90b2dnbGUtc29ydC5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3J0ZXIgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuc29ydGVyJztcbmltcG9ydCB7IFNvcnRUb2dnbGVkRXZlbnQgfSBmcm9tICcuL3NvcnQtdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9nZ2xlU29ydENvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBUb2dnbGVTb3J0Q29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogVHlwZTxUb2dnbGVTb3J0Q29tbWFuZD4ge1xuXHRcdHJldHVybiBUb2dnbGVTb3J0Q29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFRvZ2dsZVNvcnRDb21tYW5kKTogdm9pZCB7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc3RydWN0dXJlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFRvZ2dsZVNvcnRDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdGNvbXBvc2l0aW9uSWQgPSBjb21tYW5kLmdldENvbXBvc2l0aW9uSWQoKSxcblx0XHRcdGZpZWxkSWQgPSBjb21tYW5kLmdldEZpZWxkSWQoKTtcblxuXHRcdGNvbnN0IHNvcnRlcnMgPSBzdHJ1Y3R1cmUudG9nZ2xlU29ydChmaWVsZElkKTtcblxuXHRcdHRoaXMucHVibGlzaFNvcnRFdmVudChhZ2dyZWdhdGVJZCwgY29tcG9zaXRpb25JZCwgZmllbGRJZCwgc29ydGVycyk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hTb3J0RXZlbnQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBmaWVsZElkOiBGaWVsZElkLCBzb3J0ZXJzOiBBcnJheTxTdHJ1Y3R1cmVTb3J0ZXI+KTogdm9pZCB7XG5cblx0XHRjb25zdCBkaXJlY3Rpb25zID0gc29ydGVycy5tYXAoKHNvcnRlcjogU3RydWN0dXJlU29ydGVyKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkaXJlY3Rpb246IHNvcnRlci5oYXNEaXJlY3Rpb24oKSxcblx0XHRcdFx0ZmllbGRJZDogc29ydGVyLmdldEZpZWxkKCkuZ2V0SWQoKVxuXHRcdFx0fTtcblx0XHR9KTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU29ydFRvZ2dsZWRFdmVudChhZ2dyZWdhdGVJZCwgY29tcG9zaXRpb25JZCwgZGlyZWN0aW9ucykpO1xuXHR9XG5cbn1cbiJdfQ==