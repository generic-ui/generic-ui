/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionChangeSortStatusCommand } from './composition-change-sort-status.command';
import { CompositionChangeSortStatusEvent } from './composition-change-sort-status.event';
var CompositionChangeSortStatusCommandHandler = /** @class */ (function () {
    function CompositionChangeSortStatusCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    CompositionChangeSortStatusCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return CompositionChangeSortStatusCommand;
    };
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    CompositionChangeSortStatusCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    function (composition, command) {
        /** @type {?} */
        var compositionId = command.getAggregateId();
        /** @type {?} */
        var columns = composition.getActiveColumns();
        this.domainEventPublisher.publish(new CompositionChangeSortStatusEvent(compositionId, columns));
    };
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    CompositionChangeSortStatusCommandHandler.prototype.handleAggregate = /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    function (composition, command) {
        /** @type {?} */
        var sortParams = command.getSortParams();
        composition.changeSort(sortParams);
    };
    CompositionChangeSortStatusCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionChangeSortStatusCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return CompositionChangeSortStatusCommandHandler;
}());
export { CompositionChangeSortStatusCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFJMUY7SUFHQyxtREFBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELDhEQUFVOzs7SUFBVjtRQUNDLE9BQU8sa0NBQWtDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRUQsdUVBQW1COzs7OztJQUFuQixVQUFvQixXQUFpQyxFQUFFLE9BQTJDOztZQUUzRixhQUFhLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRTs7WUFDN0MsT0FBTyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtRQUV6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksZ0NBQWdDLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQzs7Ozs7O0lBRUQsbUVBQWU7Ozs7O0lBQWYsVUFBZ0IsV0FBaUMsRUFBRSxPQUEyQzs7WUFFdkYsVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUU7UUFFMUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkF2QkQsVUFBVTs7OztnQkFOMkIsb0JBQW9COztJQStCMUQsZ0RBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXhCWSx5Q0FBeUM7Ozs7OztJQUV6Qyx5RUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCB9IGZyb20gJy4vY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGUsIENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kPiB7XG5cdFx0cmV0dXJuIENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29tcG9zaXRpb25JZCA9IGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdGNvbHVtbnMgPSBjb21wb3NpdGlvbi5nZXRBY3RpdmVDb2x1bW5zKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50KGNvbXBvc2l0aW9uSWQsIGNvbHVtbnMpKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShjb21wb3NpdGlvbjogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHNvcnRQYXJhbXMgPSBjb21tYW5kLmdldFNvcnRQYXJhbXMoKTtcblxuXHRcdGNvbXBvc2l0aW9uLmNoYW5nZVNvcnQoc29ydFBhcmFtcyk7XG5cdH1cblxufVxuIl19