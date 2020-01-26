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
        var _this = _super.call(this, InitCompositionCommand, CompositionInitedEvent, domainEventPublisher) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.compositionAggregateFactory = compositionAggregateFactory;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    InitCompositionCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.compositionId;
        /** @type {?} */
        var compositionAggregate = this.compositionAggregateFactory.create(aggregateId);
        this.compositionAggregateRepository.save(compositionAggregate);
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1jb21wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9pbml0L2luaXQtY29tcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3BFO0lBQ21ELHlEQUFjO0lBRWhFLHVDQUE2Qiw4QkFBOEQsRUFDdkUsMkJBQXdELEVBQ3pFLG9CQUEwQztRQUY3QyxZQUdDLGtCQUFNLHNCQUFzQixFQUMzQixzQkFBc0IsRUFDdEIsb0JBQW9CLENBQUMsU0FDdEI7UUFONEIsb0NBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUN2RSxpQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCOztJQUs1RSxDQUFDOzs7OztJQUVELDhDQUFNOzs7O0lBQU4sVUFBTyxPQUErQjs7WUFFL0IsV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhOztZQUVuQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUVqRixJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Z0JBbEJELFVBQVU7Ozs7Z0JBTkYsOEJBQThCO2dCQUM5QiwyQkFBMkI7Z0JBSFgsb0JBQW9COztJQTRCN0Msb0NBQUM7Q0FBQSxBQXBCRCxDQUNtRCxjQUFjLEdBbUJoRTtTQW5CWSw2QkFBNkI7Ozs7OztJQUU3Qix1RUFBK0U7Ozs7O0lBQ3hGLG9FQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBJbml0Q29tcG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi9pbml0LWNvbXBvc2l0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Jbml0ZWRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24taW5pdGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5pdENvbXBvc2l0aW9uQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3Rvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoSW5pdENvbXBvc2l0aW9uQ29tbWFuZCxcblx0XHRcdENvbXBvc2l0aW9uSW5pdGVkRXZlbnQsXG5cdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogSW5pdENvbXBvc2l0aW9uQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGNvbW1hbmQuY29tcG9zaXRpb25JZDtcblxuXHRcdGNvbnN0IGNvbXBvc2l0aW9uQWdncmVnYXRlID0gdGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoY29tcG9zaXRpb25BZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==