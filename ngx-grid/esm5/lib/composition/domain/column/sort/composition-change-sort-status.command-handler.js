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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBa0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUkxRjtJQUdDLG1EQUE2QixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUN2RSxDQUFDOzs7O0lBRUQsOERBQVU7OztJQUFWO1FBQ0MsT0FBTyxrQ0FBa0MsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCx1RUFBbUI7Ozs7O0lBQW5CLFVBQW9CLFdBQWlDLEVBQUUsT0FBMkM7O1lBRTNGLGFBQWEsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFOztZQUM3QyxPQUFPLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixFQUFFO1FBRXpDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQ0FBZ0MsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDOzs7Ozs7SUFFRCxtRUFBZTs7Ozs7SUFBZixVQUFnQixXQUFpQyxFQUFFLE9BQTJDOztZQUV2RixVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsRUFBRTtRQUUxQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQXZCRCxVQUFVOzs7O2dCQU5jLG9CQUFvQjs7SUErQjdDLGdEQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F4QlkseUNBQXlDOzs7Ozs7SUFFekMseUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCB9IGZyb20gJy4vY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGUsIENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBUeXBlPENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQ+IHtcblx0XHRyZXR1cm4gQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoY29tcG9zaXRpb246IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb21wb3NpdGlvbklkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0Y29sdW1ucyA9IGNvbXBvc2l0aW9uLmdldEFjdGl2ZUNvbHVtbnMoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQoY29tcG9zaXRpb25JZCwgY29sdW1ucykpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc29ydFBhcmFtcyA9IGNvbW1hbmQuZ2V0U29ydFBhcmFtcygpO1xuXG5cdFx0Y29tcG9zaXRpb24uY2hhbmdlU29ydChzb3J0UGFyYW1zKTtcblx0fVxuXG59XG4iXX0=