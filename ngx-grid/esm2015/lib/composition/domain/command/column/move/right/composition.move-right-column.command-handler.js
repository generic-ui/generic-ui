/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../../composition-event.converter';
import { CompositionMoveRightColumnCommand } from './composition.move-right-column.command';
export class CompositionMoveRightColumnCommandHandler extends CommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     * @param {?} compositionEventConverter
     */
    constructor(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        super(CompositionMoveRightColumnCommand, null, null, compositionAggregateRepository);
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const columnId = command.getColumnId();
        aggregate.moveRight(columnId);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
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
CompositionMoveRightColumnCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionMoveRightColumnCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher },
    { type: CompositionEventConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionMoveRightColumnCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    CompositionMoveRightColumnCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    CompositionMoveRightColumnCommandHandler.prototype.compositionEventConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW92ZS1yaWdodC1jb2x1bW4uY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24ubW92ZS1yaWdodC1jb2x1bW4uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBMkIsY0FBYyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFakYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHNUYsTUFBTSxPQUFPLHdDQUF5QyxTQUFRLGNBQW9DOzs7Ozs7SUFFakcsWUFBNkIsOEJBQThELEVBQzlFLG9CQUEwQyxFQUM1Qyx5QkFBb0Q7UUFDOUQsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUh6RCxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQzlFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDNUMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUUvRCxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsU0FBK0IsRUFBRSxPQUEwQzs7Y0FFcEYsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUU7UUFFdEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxTQUErQixFQUFFLE9BQWdCO1FBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7SUFFTyxhQUFhLENBQUMsV0FBaUMsRUFBRSxPQUFnQjs7Y0FFbEUsTUFBTSxHQUFHLG1CQUFBLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBeUI7O2NBRXpELFlBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUVuRSxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0YsQ0FBQzs7O1lBN0JELFVBQVU7Ozs7WUFMRiw4QkFBOEI7WUFGVyxvQkFBb0I7WUFHN0QseUJBQXlCOzs7Ozs7O0lBT3JCLGtGQUErRTs7Ozs7SUFDeEYsd0VBQW9EOzs7OztJQUNwRCw2RUFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBDb21tYW5kLCBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24tZXZlbnQuY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uTW92ZVJpZ2h0Q29sdW1uQ29tbWFuZCB9IGZyb20gJy4vY29tcG9zaXRpb24ubW92ZS1yaWdodC1jb2x1bW4uY29tbWFuZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbk1vdmVSaWdodENvbHVtbkNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcm90ZWN0ZWQgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXI6IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIpIHtcblx0XHRzdXBlcihDb21wb3NpdGlvbk1vdmVSaWdodENvbHVtbkNvbW1hbmQsIG51bGwsIG51bGwsIGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb2x1bW5JZCA9IGNvbW1hbmQuZ2V0Q29sdW1uSWQoKTtcblxuXHRcdGFnZ3JlZ2F0ZS5tb3ZlUmlnaHQoY29sdW1uSWQpO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRXZlbnRzKGFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFdmVudHMoY29tcG9zaXRpb246IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBldmVudHMgPSBjb21wb3NpdGlvbi5nZXRFdmVudHMoKSBhcyBBcnJheTxBZ2dyZWdhdGVFdmVudD47XG5cblx0XHRjb25zdCBkb21haW5FdmVudHMgPSB0aGlzLmNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIuY29udmVydChldmVudHMpO1xuXG5cdFx0aWYgKGRvbWFpbkV2ZW50cyAmJiBkb21haW5FdmVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50cyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=