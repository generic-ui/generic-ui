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
    CompositionMoveLeftColumnCommandHandler.prototype.handle = /**
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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    CompositionMoveLeftColumnCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.publishEvents(aggregate, command);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQyxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRzFGO0lBR0MsaURBQTZCLDhCQUE4RCxFQUM5RSxvQkFBMEMsRUFDNUMseUJBQW9EO1FBRmxDLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDOUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1Qyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQy9ELENBQUM7Ozs7SUFFRCw0REFBVTs7O0lBQVY7UUFDQyxPQUFPLGdDQUFnQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVELHdEQUFNOzs7OztJQUFOLFVBQU8sU0FBK0IsRUFBRSxPQUF5Qzs7WUFFMUUsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUU7UUFFdEMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCx5REFBTzs7Ozs7SUFBUCxVQUFRLFNBQStCLEVBQUUsT0FBeUM7UUFDakYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7OztJQUVPLCtEQUFhOzs7Ozs7SUFBckIsVUFBc0IsV0FBaUMsRUFBRSxPQUF5Qzs7WUFFM0YsTUFBTSxHQUFHLG1CQUFBLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBd0M7O1lBRXhFLFlBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUVuRSxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0YsQ0FBQzs7Z0JBaENELFVBQVU7Ozs7Z0JBTkYsOEJBQThCO2dCQUZlLG9CQUFvQjtnQkFHakUseUJBQXlCOztJQXNDbEMsOENBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWhDWSx1Q0FBdUM7Ozs7OztJQUV2QyxpRkFBK0U7Ozs7O0lBQ3hGLHVFQUFvRDs7Ozs7SUFDcEQsNEVBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi5ldmVudC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLm1vdmUtbGVmdC1jb2x1bW4uY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBpL2NvbXBvc2l0aW9uLmlkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPENvbXBvc2l0aW9uQWdncmVnYXRlLCBDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByb3RlY3RlZCBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25FdmVudENvbnZlcnRlcjogQ29tcG9zaXRpb25FdmVudENvbnZlcnRlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZD4ge1xuXHRcdHJldHVybiBDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29sdW1uSWQgPSBjb21tYW5kLmdldENvbHVtbklkKCk7XG5cblx0XHRhZ2dyZWdhdGUubW92ZUxlZnQoY29sdW1uSWQpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEV2ZW50cyhhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRXZlbnRzKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGV2ZW50cyA9IGNvbXBvc2l0aW9uLmdldEV2ZW50cygpIGFzIEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+PjtcblxuXHRcdGNvbnN0IGRvbWFpbkV2ZW50cyA9IHRoaXMuY29tcG9zaXRpb25FdmVudENvbnZlcnRlci5jb252ZXJ0KGV2ZW50cyk7XG5cblx0XHRpZiAoZG9tYWluRXZlbnRzICYmIGRvbWFpbkV2ZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnRzKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==