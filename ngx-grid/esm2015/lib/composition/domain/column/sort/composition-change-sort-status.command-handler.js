/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionChangeSortStatusCommand } from './composition-change-sort-status.command';
import { CompositionChangeSortStatusEvent } from './composition-change-sort-status.event';
export class CompositionChangeSortStatusCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return CompositionChangeSortStatusCommand;
    }
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(composition, command) {
        /** @type {?} */
        const compositionId = command.getAggregateId();
        /** @type {?} */
        const columns = composition.getActiveColumns();
        this.domainEventPublisher.publish(new CompositionChangeSortStatusEvent(compositionId, columns));
    }
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    handleAggregate(composition, command) {
        /** @type {?} */
        const sortParams = command.getSortParams();
        composition.changeSort(sortParams);
    }
}
CompositionChangeSortStatusCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionChangeSortStatusCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBa0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUsxRixNQUFNLE9BQU8seUNBQXlDOzs7O0lBRXJELFlBQTZCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3ZFLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxrQ0FBa0MsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxXQUFpQyxFQUFFLE9BQTJDOztjQUUzRixhQUFhLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRTs7Y0FDN0MsT0FBTyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtRQUV6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksZ0NBQWdDLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQWlDLEVBQUUsT0FBMkM7O2NBRXZGLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxFQUFFO1FBRTFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBdkJELFVBQVU7Ozs7WUFOYyxvQkFBb0I7Ozs7Ozs7SUFTaEMseUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCB9IGZyb20gJy4vY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGUsIENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBUeXBlPENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQ+IHtcblx0XHRyZXR1cm4gQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoY29tcG9zaXRpb246IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb21wb3NpdGlvbklkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0Y29sdW1ucyA9IGNvbXBvc2l0aW9uLmdldEFjdGl2ZUNvbHVtbnMoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQoY29tcG9zaXRpb25JZCwgY29sdW1ucykpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc29ydFBhcmFtcyA9IGNvbW1hbmQuZ2V0U29ydFBhcmFtcygpO1xuXG5cdFx0Y29tcG9zaXRpb24uY2hhbmdlU29ydChzb3J0UGFyYW1zKTtcblx0fVxuXG59XG4iXX0=