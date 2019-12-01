/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventPublisher, CommandHandler } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition-event.converter';
import { SetColumnsCommand } from './set-columns.command';
var SetColumnsCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetColumnsCommandHandler, _super);
    function SetColumnsCommandHandler(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        var _this = _super.call(this, SetColumnsCommand) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        _this.compositionEventConverter = compositionEventConverter;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetColumnsCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.getAggregateId();
        /** @type {?} */
        var setColumnsParams = command.getParams();
        /** @type {?} */
        var composition = this.compositionAggregateRepository.getById(aggregateId);
        composition.setColumns(setColumnsParams);
        this.compositionAggregateRepository.save(composition);
        this.publishEvents(composition, command);
    };
    /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    SetColumnsCommandHandler.prototype.publishEvents = /**
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
        this.domainEventPublisher.publish(domainEvents);
    };
    SetColumnsCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetColumnsCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: DomainEventPublisher },
        { type: CompositionEventConverter }
    ]; };
    return SetColumnsCommandHandler;
}(CommandHandler));
export { SetColumnsCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    SetColumnsCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommandHandler.prototype.compositionEventConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbHVtbnMuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zZXQtY29sdW1ucy9zZXQtY29sdW1ucy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBVyxvQkFBb0IsRUFBRSxjQUFjLEVBQW1DLE1BQU0sb0JBQW9CLENBQUM7QUFFcEgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJMUQ7SUFDOEMsb0RBQWM7SUFFM0Qsa0NBQTZCLDhCQUE4RCxFQUM5RSxvQkFBMEMsRUFDNUMseUJBQW9EO1FBRi9ELFlBR0Msa0JBQU0saUJBQWlCLENBQUMsU0FDeEI7UUFKNEIsb0NBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUM5RSwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVDLCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7O0lBRS9ELENBQUM7Ozs7O0lBRUQseUNBQU07Ozs7SUFBTixVQUFPLE9BQTBCOztZQUUxQixXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRTs7WUFDM0MsZ0JBQWdCLEdBQXdCLE9BQU8sQ0FBQyxTQUFTLEVBQUU7O1lBRXRELFdBQVcsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUU1RSxXQUFXLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7O0lBRU8sZ0RBQWE7Ozs7OztJQUFyQixVQUFzQixXQUFpQyxFQUFFLE9BQWdCOztZQUVsRSxNQUFNLEdBQUcsbUJBQUEsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUF5Qjs7WUFFekQsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRW5FLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Z0JBOUJELFVBQVU7Ozs7Z0JBUkYsOEJBQThCO2dCQUZyQixvQkFBb0I7Z0JBRzdCLHlCQUF5Qjs7SUFzQ2xDLCtCQUFDO0NBQUEsQUEvQkQsQ0FDOEMsY0FBYyxHQThCM0Q7U0E5Qlksd0JBQXdCOzs7Ozs7SUFFeEIsa0VBQStFOzs7OztJQUN4Rix3REFBb0Q7Ozs7O0lBQ3BELDZEQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZCwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIENvbW1hbmRIYW5kbGVyLCBFeGVjdXRlUmVzcG9uc2UsIEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudENvbnZlcnRlciB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLWV2ZW50LmNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5cbmltcG9ydCB7IFNldENvbHVtbnNDb21tYW5kIH0gZnJvbSAnLi9zZXQtY29sdW1ucy5jb21tYW5kJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uLnBhcmFtcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldENvbHVtbnNDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcm90ZWN0ZWQgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXI6IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIpIHtcblx0XHRzdXBlcihTZXRDb2x1bW5zQ29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogU2V0Q29sdW1uc0NvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHRzZXRDb2x1bW5zUGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+ID0gY29tbWFuZC5nZXRQYXJhbXMoKTtcblxuXHRcdGNvbnN0IGNvbXBvc2l0aW9uID0gdGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRjb21wb3NpdGlvbi5zZXRDb2x1bW5zKHNldENvbHVtbnNQYXJhbXMpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShjb21wb3NpdGlvbik7XG5cblx0XHR0aGlzLnB1Ymxpc2hFdmVudHMoY29tcG9zaXRpb24sIGNvbW1hbmQpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRXZlbnRzKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZXZlbnRzID0gY29tcG9zaXRpb24uZ2V0RXZlbnRzKCkgYXMgQXJyYXk8QWdncmVnYXRlRXZlbnQ+O1xuXG5cdFx0Y29uc3QgZG9tYWluRXZlbnRzID0gdGhpcy5jb21wb3NpdGlvbkV2ZW50Q29udmVydGVyLmNvbnZlcnQoZXZlbnRzKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudHMpO1xuXHR9XG59XG4iXX0=