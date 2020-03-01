/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../../composition-event.converter';
import { CompositionMoveLeftColumnCommand } from './composition.move-left-column.command';
var CompositionMoveLeftColumnCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionMoveLeftColumnCommandHandler, _super);
    function CompositionMoveLeftColumnCommandHandler(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        var _this = _super.call(this, CompositionMoveLeftColumnCommand, null, null, compositionAggregateRepository) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        _this.compositionEventConverter = compositionEventConverter;
        return _this;
    }
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
}(CommandHandler));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vbW92ZS9sZWZ0L2NvbXBvc2l0aW9uLm1vdmUtbGVmdC1jb2x1bW4uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQTJCLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5HLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTFGO0lBQzZELG1FQUFvQztJQUVoRyxpREFBNkIsOEJBQThELEVBQzlFLG9CQUEwQyxFQUM1Qyx5QkFBb0Q7UUFGL0QsWUFHQyxrQkFBTSxnQ0FBZ0MsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLDhCQUE4QixDQUFDLFNBQ25GO1FBSjRCLG9DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDOUUsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1QywrQkFBeUIsR0FBekIseUJBQXlCLENBQTJCOztJQUUvRCxDQUFDOzs7Ozs7SUFFRCxpRUFBZTs7Ozs7SUFBZixVQUFnQixTQUErQixFQUFFLE9BQXlDOztZQUVuRixRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTtRQUV0QyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELHFFQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBK0IsRUFBRSxPQUFnQjtRQUNwRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7O0lBRU8sK0RBQWE7Ozs7OztJQUFyQixVQUFzQixXQUFpQyxFQUFFLE9BQWdCOztZQUVsRSxNQUFNLEdBQUcsbUJBQUEsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUF5Qjs7WUFFekQsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRW5FLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEQ7SUFDRixDQUFDOztnQkE3QkQsVUFBVTs7OztnQkFMRiw4QkFBOEI7Z0JBRlcsb0JBQW9CO2dCQUc3RCx5QkFBeUI7O0lBa0NsQyw4Q0FBQztDQUFBLEFBOUJELENBQzZELGNBQWMsR0E2QjFFO1NBN0JZLHVDQUF1Qzs7Ozs7O0lBRXZDLGlGQUErRTs7Ozs7SUFDeEYsdUVBQW9EOzs7OztJQUNwRCw0RUFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBDb21tYW5kLCBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24tZXZlbnQuY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5tb3ZlLWxlZnQtY29sdW1uLmNvbW1hbmQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcm90ZWN0ZWQgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXI6IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIpIHtcblx0XHRzdXBlcihDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZCwgbnVsbCwgbnVsbCwgY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5KTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29sdW1uSWQgPSBjb21tYW5kLmdldENvbHVtbklkKCk7XG5cblx0XHRhZ2dyZWdhdGUubW92ZUxlZnQoY29sdW1uSWQpO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRXZlbnRzKGFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFdmVudHMoY29tcG9zaXRpb246IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBldmVudHMgPSBjb21wb3NpdGlvbi5nZXRFdmVudHMoKSBhcyBBcnJheTxBZ2dyZWdhdGVFdmVudD47XG5cblx0XHRjb25zdCBkb21haW5FdmVudHMgPSB0aGlzLmNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIuY29udmVydChldmVudHMpO1xuXG5cdFx0aWYgKGRvbWFpbkV2ZW50cyAmJiBkb21haW5FdmVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50cyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=