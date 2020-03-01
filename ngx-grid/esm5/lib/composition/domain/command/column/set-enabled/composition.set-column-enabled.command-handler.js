/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition-event.converter';
import { CompositionSetColumnEnabledCommand } from './composition.set-column-enabled.command';
var CompositionSetColumnEnabledCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionSetColumnEnabledCommandHandler, _super);
    function CompositionSetColumnEnabledCommandHandler(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        var _this = _super.call(this, CompositionSetColumnEnabledCommand, null, null, compositionAggregateRepository) || this;
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
    CompositionSetColumnEnabledCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var columnId = command.getColumnId();
        /** @type {?} */
        var enabled = command.isEnabled();
        aggregate.enableColumn(columnId, enabled);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    CompositionSetColumnEnabledCommandHandler.prototype.publishDomainEvents = /**
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
    CompositionSetColumnEnabledCommandHandler.prototype.publishEvents = /**
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
    CompositionSetColumnEnabledCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionSetColumnEnabledCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: DomainEventPublisher },
        { type: CompositionEventConverter }
    ]; };
    return CompositionSetColumnEnabledCommandHandler;
}(CommandHandler));
export { CompositionSetColumnEnabledCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionSetColumnEnabledCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    CompositionSetColumnEnabledCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    CompositionSetColumnEnabledCommandHandler.prototype.compositionEventConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5zZXQtY29sdW1uLWVuYWJsZWQuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQTJCLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5HLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRzlGO0lBQytELHFFQUFvQztJQUVsRyxtREFBNkIsOEJBQThELEVBQzlFLG9CQUEwQyxFQUM1Qyx5QkFBb0Q7UUFGL0QsWUFHQyxrQkFBTSxrQ0FBa0MsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLDhCQUE4QixDQUFDLFNBQ3JGO1FBSjRCLG9DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDOUUsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1QywrQkFBeUIsR0FBekIseUJBQXlCLENBQTJCOztJQUUvRCxDQUFDOzs7Ozs7SUFFRCxtRUFBZTs7Ozs7SUFBZixVQUFnQixTQUErQixFQUFFLE9BQTJDOztZQUVyRixRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTs7WUFDckMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFOUIsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRUQsdUVBQW1COzs7OztJQUFuQixVQUFvQixTQUErQixFQUFFLE9BQWdCO1FBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7SUFFTyxpRUFBYTs7Ozs7O0lBQXJCLFVBQXNCLFdBQWlDLEVBQUUsT0FBZ0I7O1lBRWxFLE1BQU0sR0FBRyxtQkFBQSxXQUFXLENBQUMsU0FBUyxFQUFFLEVBQXlCOztZQUV6RCxZQUFZLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFbkUsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7O2dCQTlCRCxVQUFVOzs7O2dCQU5GLDhCQUE4QjtnQkFGVyxvQkFBb0I7Z0JBRzdELHlCQUF5Qjs7SUFvQ2xDLGdEQUFDO0NBQUEsQUEvQkQsQ0FDK0QsY0FBYyxHQThCNUU7U0E5QlkseUNBQXlDOzs7Ozs7SUFFekMsbUZBQStFOzs7OztJQUN4Rix5RUFBb0Q7Ozs7O0lBQ3BELDhFQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIENvbW1hbmQsIENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi1ldmVudC5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZCB9IGZyb20gJy4vY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyPENvbXBvc2l0aW9uQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkV2ZW50Q29udmVydGVyOiBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyKSB7XG5cdFx0c3VwZXIoQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZCwgbnVsbCwgbnVsbCwgY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5KTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb2x1bW5JZCA9IGNvbW1hbmQuZ2V0Q29sdW1uSWQoKSxcblx0XHRcdGVuYWJsZWQgPSBjb21tYW5kLmlzRW5hYmxlZCgpO1xuXG5cdFx0YWdncmVnYXRlLmVuYWJsZUNvbHVtbihjb2x1bW5JZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFdmVudHMoYWdncmVnYXRlLCBjb21tYW5kKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEV2ZW50cyhjb21wb3NpdGlvbjogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGV2ZW50cyA9IGNvbXBvc2l0aW9uLmdldEV2ZW50cygpIGFzIEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PjtcblxuXHRcdGNvbnN0IGRvbWFpbkV2ZW50cyA9IHRoaXMuY29tcG9zaXRpb25FdmVudENvbnZlcnRlci5jb252ZXJ0KGV2ZW50cyk7XG5cblx0XHRpZiAoZG9tYWluRXZlbnRzICYmIGRvbWFpbkV2ZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnRzKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==