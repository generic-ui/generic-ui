/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionChangeSortStatusCommand } from './composition-change-sort-status.command';
import { CompositionChangeSortStatusEvent } from './composition-change-sort-status.event';
export class CompositionChangeSortStatusCommandHandler extends CommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(compositionAggregateRepository, domainEventPublisher) {
        super(CompositionChangeSortStatusCommand);
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const compositionId = command.getCompositionId();
        /** @type {?} */
        const sortParams = command.getSortParams();
        /** @type {?} */
        const composition = this.compositionAggregateRepository.getById(compositionId);
        /** @type {?} */
        const aggregateEvent = composition.changeSort(sortParams);
        this.compositionAggregateRepository.save(composition);
        /** @type {?} */
        const columns = composition.getActiveColumns();
        this.domainEventPublisher.publish(new CompositionChangeSortStatusEvent(compositionId, columns));
    }
}
CompositionChangeSortStatusCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionChangeSortStatusCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    CompositionChangeSortStatusCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFJMUYsTUFBTSxPQUFPLHlDQUEwQyxTQUFRLGNBQWM7Ozs7O0lBRTVFLFlBQTZCLDhCQUE4RCxFQUM5RSxvQkFBMEM7UUFDdEQsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFGZCxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQzlFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFFdkQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBMkM7O2NBRTNDLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7O2NBQy9DLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxFQUFFOztjQUUvQixXQUFXLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7O2NBRXhFLGNBQWMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUV6RCxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztjQUVoRCxPQUFPLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixFQUFFO1FBRTlDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQ0FBZ0MsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDOzs7WUF0QkQsVUFBVTs7OztZQU5GLDhCQUE4QjtZQUZkLG9CQUFvQjs7Ozs7OztJQVdoQyxtRkFBK0U7Ozs7O0lBQ3hGLHlFQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24tZXZlbnQuY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcm90ZWN0ZWQgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBjb21wb3NpdGlvbklkID0gY29tbWFuZC5nZXRDb21wb3NpdGlvbklkKCksXG5cdFx0XHRzb3J0UGFyYW1zID0gY29tbWFuZC5nZXRTb3J0UGFyYW1zKCk7XG5cblx0XHRjb25zdCBjb21wb3NpdGlvbiA9IHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoY29tcG9zaXRpb25JZCk7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVFdmVudCA9IGNvbXBvc2l0aW9uLmNoYW5nZVNvcnQoc29ydFBhcmFtcyk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKGNvbXBvc2l0aW9uKTtcblxuXHRcdGNvbnN0IGNvbHVtbnMgPSBjb21wb3NpdGlvbi5nZXRBY3RpdmVDb2x1bW5zKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50KGNvbXBvc2l0aW9uSWQsIGNvbHVtbnMpKTtcblx0fVxuXG59XG4iXX0=