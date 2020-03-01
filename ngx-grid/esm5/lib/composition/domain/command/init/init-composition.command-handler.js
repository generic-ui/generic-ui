/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../composition.aggregate-repository';
import { CompositionAggregateFactory } from '../composition.aggregate-factory';
import { InitCompositionCommand } from './init-composition.command';
import { CompositionInitedEvent } from './composition-inited.event';
var InitCompositionCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(InitCompositionCommandHandler, _super);
    function InitCompositionCommandHandler(compositionAggregateRepository, compositionAggregateFactory, domainEventPublisher) {
        var _this = _super.call(this, InitCompositionCommand, null, null, compositionAggregateRepository) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.compositionAggregateFactory = compositionAggregateFactory;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    InitCompositionCommandHandler.prototype.handleEmptyAggregate = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.getAggregateId();
        /** @type {?} */
        var compositionAggregate = this.compositionAggregateFactory.create(aggregateId);
        this.compositionAggregateRepository.save(compositionAggregate);
        this.publishDomainEvents(compositionAggregate, command);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    InitCompositionCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new CompositionInitedEvent(command.getAggregateId()));
    };
    InitCompositionCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InitCompositionCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: CompositionAggregateFactory },
        { type: DomainEventPublisher }
    ]; };
    return InitCompositionCommandHandler;
}(CommandHandler));
export { InitCompositionCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitCompositionCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    InitCompositionCommandHandler.prototype.compositionAggregateFactory;
    /**
     * @type {?}
     * @private
     */
    InitCompositionCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1jb21wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9pbml0L2luaXQtY29tcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJcEU7SUFDbUQseURBQW9DO0lBRXRGLHVDQUE2Qiw4QkFBOEQsRUFDdkUsMkJBQXdELEVBQ3hELG9CQUEwQztRQUY5RCxZQUdDLGtCQUFNLHNCQUFzQixFQUMzQixJQUFJLEVBQ0osSUFBSSxFQUNKLDhCQUE4QixDQUFDLFNBQ2hDO1FBUDRCLG9DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDdkUsaUNBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUN4RCwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCOztJQUs5RCxDQUFDOzs7OztJQUVELDREQUFvQjs7OztJQUFwQixVQUFxQixPQUErQjs7WUFFN0MsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUU7O1lBRXRDLG9CQUFvQixHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRWpGLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRUQsMkRBQW1COzs7OztJQUFuQixVQUFvQixTQUErQixFQUFFLE9BQStCO1FBQ25GLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7O2dCQXpCRCxVQUFVOzs7O2dCQVBGLDhCQUE4QjtnQkFDOUIsMkJBQTJCO2dCQUhYLG9CQUFvQjs7SUFvQzdDLG9DQUFDO0NBQUEsQUEzQkQsQ0FDbUQsY0FBYyxHQTBCaEU7U0ExQlksNkJBQTZCOzs7Ozs7SUFFN0IsdUVBQStFOzs7OztJQUN4RixvRUFBeUU7Ozs7O0lBQ3pFLDZEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW5pdENvbXBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4vaW5pdC1jb21wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSW5pdGVkRXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluaXRDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlRmFjdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKEluaXRDb21wb3NpdGlvbkNvbW1hbmQsXG5cdFx0XHRudWxsLFxuXHRcdFx0bnVsbCxcblx0XHRcdGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRoYW5kbGVFbXB0eUFnZ3JlZ2F0ZShjb21tYW5kOiBJbml0Q29tcG9zaXRpb25Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdGNvbnN0IGNvbXBvc2l0aW9uQWdncmVnYXRlID0gdGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoY29tcG9zaXRpb25BZ2dyZWdhdGUpO1xuXG5cdFx0dGhpcy5wdWJsaXNoRG9tYWluRXZlbnRzKGNvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kKTtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogSW5pdENvbXBvc2l0aW9uQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgQ29tcG9zaXRpb25Jbml0ZWRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxuXG59XG4iXX0=