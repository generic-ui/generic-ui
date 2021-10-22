/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../../composition.event-converter';
import { CompositionMoveLeftColumnCommand } from './composition.move-left-column.command';
export class CompositionMoveLeftColumnCommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     * @param {?} compositionEventConverter
     */
    constructor(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return CompositionMoveLeftColumnCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handle(aggregate, command) {
        /** @type {?} */
        const columnId = command.getColumnId();
        aggregate.moveLeft(columnId);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publish(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    publishEvents(composition, command) {
        /** @type {?} */
        const events = (/** @type {?} */ (composition.getEvents()));
        /** @type {?} */
        const domainEvents = this.compositionEventConverter.convert(events);
        if (domainEvents && domainEvents.length > 0) {
            this.domainEventPublisher.publish(domainEvents);
        }
    }
}
CompositionMoveLeftColumnCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionMoveLeftColumnCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher },
    { type: CompositionEventConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionMoveLeftColumnCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    CompositionMoveLeftColumnCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    CompositionMoveLeftColumnCommandHandler.prototype.compositionEventConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQyxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSTFGLE1BQU0sT0FBTyx1Q0FBdUM7Ozs7OztJQUVuRCxZQUE2Qiw4QkFBOEQsRUFDOUUsb0JBQTBDLEVBQzVDLHlCQUFvRDtRQUZsQyxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQzlFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDNUMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUMvRCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sZ0NBQWdDLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFNBQStCLEVBQUUsT0FBeUM7O2NBRTFFLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFO1FBRXRDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLFNBQStCLEVBQUUsT0FBeUM7UUFDakYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7OztJQUVPLGFBQWEsQ0FBQyxXQUFpQyxFQUFFLE9BQXlDOztjQUUzRixNQUFNLEdBQUcsbUJBQUEsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUF3Qzs7Y0FFeEUsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRW5FLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEQ7SUFDRixDQUFDOzs7WUFoQ0QsVUFBVTs7OztZQU5GLDhCQUE4QjtZQUZlLG9CQUFvQjtZQUdqRSx5QkFBeUI7Ozs7Ozs7SUFRckIsaUZBQStFOzs7OztJQUN4Rix1RUFBb0Q7Ozs7O0lBQ3BELDRFQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24uZXZlbnQtY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5tb3ZlLWxlZnQtY29sdW1uLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcm90ZWN0ZWQgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXI6IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8Q29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbHVtbklkID0gY29tbWFuZC5nZXRDb2x1bW5JZCgpO1xuXG5cdFx0YWdncmVnYXRlLm1vdmVMZWZ0KGNvbHVtbklkKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFdmVudHMoYWdncmVnYXRlLCBjb21tYW5kKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEV2ZW50cyhjb21wb3NpdGlvbjogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBldmVudHMgPSBjb21wb3NpdGlvbi5nZXRFdmVudHMoKSBhcyBBcnJheTxBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPj47XG5cblx0XHRjb25zdCBkb21haW5FdmVudHMgPSB0aGlzLmNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIuY29udmVydChldmVudHMpO1xuXG5cdFx0aWYgKGRvbWFpbkV2ZW50cyAmJiBkb21haW5FdmVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50cyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=