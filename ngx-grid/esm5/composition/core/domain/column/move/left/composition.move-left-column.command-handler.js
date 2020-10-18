/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../../composition.event-converter';
import { CompositionMoveLeftColumnCommand } from './composition.move-left-column.command';
var CompositionMoveLeftColumnCommandHandler = /** @class */ (function () {
    function CompositionMoveLeftColumnCommandHandler(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @return {?}
     */
    CompositionMoveLeftColumnCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return CompositionMoveLeftColumnCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    CompositionMoveLeftColumnCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.publishEvents(aggregate, command);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    CompositionMoveLeftColumnCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var columnId = command.getColumnId();
        aggregate.moveLeft(columnId);
    };
    /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    CompositionMoveLeftColumnCommandHandler.prototype.publishEvents = /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    function (composition, command) {
        /** @type {?} */
        var events = (/** @type {?} */ (composition.getEvents()));
        /** @type {?} */
        var domainEvents = this.compositionEventConverter.convert(events);
        if (domainEvents && domainEvents.length > 0) {
            this.domainEventPublisher.publish(domainEvents);
        }
    };
    CompositionMoveLeftColumnCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionMoveLeftColumnCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: DomainEventPublisher },
        { type: CompositionEventConverter }
    ]; };
    return CompositionMoveLeftColumnCommandHandler;
}());
export { CompositionMoveLeftColumnCommandHandler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQyxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRzFGO0lBR0MsaURBQTZCLDhCQUE4RCxFQUM5RSxvQkFBMEMsRUFDNUMseUJBQW9EO1FBRmxDLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDOUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1Qyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQy9ELENBQUM7Ozs7SUFFRCw0REFBVTs7O0lBQVY7UUFDQyxPQUFPLGdDQUFnQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVELHFFQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBK0IsRUFBRSxPQUF5QztRQUM3RixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFFRCxpRUFBZTs7Ozs7SUFBZixVQUFnQixTQUErQixFQUFFLE9BQXlDOztZQUVuRixRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTtRQUV0QyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7SUFFTywrREFBYTs7Ozs7O0lBQXJCLFVBQXNCLFdBQWlDLEVBQUUsT0FBeUM7O1lBRTNGLE1BQU0sR0FBRyxtQkFBQSxXQUFXLENBQUMsU0FBUyxFQUFFLEVBQXdDOztZQUV4RSxZQUFZLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFbkUsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7O2dCQWhDRCxVQUFVOzs7O2dCQU5GLDhCQUE4QjtnQkFGZSxvQkFBb0I7Z0JBR2pFLHlCQUF5Qjs7SUFzQ2xDLDhDQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FoQ1ksdUNBQXVDOzs7Ozs7SUFFdkMsaUZBQStFOzs7OztJQUN4Rix1RUFBb0Q7Ozs7O0lBQ3BELDRFQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24uZXZlbnQtY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5tb3ZlLWxlZnQtY29sdW1uLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcm90ZWN0ZWQgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXI6IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8Q29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRXZlbnRzKGFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbHVtbklkID0gY29tbWFuZC5nZXRDb2x1bW5JZCgpO1xuXG5cdFx0YWdncmVnYXRlLm1vdmVMZWZ0KGNvbHVtbklkKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEV2ZW50cyhjb21wb3NpdGlvbjogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBldmVudHMgPSBjb21wb3NpdGlvbi5nZXRFdmVudHMoKSBhcyBBcnJheTxBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPj47XG5cblx0XHRjb25zdCBkb21haW5FdmVudHMgPSB0aGlzLmNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIuY29udmVydChldmVudHMpO1xuXG5cdFx0aWYgKGRvbWFpbkV2ZW50cyAmJiBkb21haW5FdmVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50cyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=