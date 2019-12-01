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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1jb21wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvaW5pdC9pbml0LWNvbXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUdwRTtJQUNtRCx5REFBYztJQUVoRSx1Q0FBNkIsOEJBQThELEVBQ3ZFLDJCQUF3RCxFQUN6RSxvQkFBMEM7UUFGN0MsWUFHQyxrQkFBTSxzQkFBc0IsRUFDM0Isc0JBQXNCLEVBQ3RCLG9CQUFvQixDQUFDLFNBQ3RCO1FBTjRCLG9DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDdkUsaUNBQTJCLEdBQTNCLDJCQUEyQixDQUE2Qjs7SUFLNUUsQ0FBQzs7Ozs7SUFFRCw4Q0FBTTs7OztJQUFOLFVBQU8sT0FBK0I7O1lBRS9CLFdBQVcsR0FBRyxPQUFPLENBQUMsYUFBYTs7WUFFbkMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFFakYsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O2dCQWxCRCxVQUFVOzs7O2dCQU5GLDhCQUE4QjtnQkFDOUIsMkJBQTJCO2dCQUhYLG9CQUFvQjs7SUE0QjdDLG9DQUFDO0NBQUEsQUFwQkQsQ0FDbUQsY0FBYyxHQW1CaEU7U0FuQlksNkJBQTZCOzs7Ozs7SUFFN0IsdUVBQStFOzs7OztJQUN4RixvRUFBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW5pdENvbXBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4vaW5pdC1jb21wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSW5pdGVkRXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWluaXRlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluaXRDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5OiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKEluaXRDb21wb3NpdGlvbkNvbW1hbmQsXG5cdFx0XHRDb21wb3NpdGlvbkluaXRlZEV2ZW50LFxuXHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IEluaXRDb21wb3NpdGlvbkNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLmNvbXBvc2l0aW9uSWQ7XG5cblx0XHRjb25zdCBjb21wb3NpdGlvbkFnZ3JlZ2F0ZSA9IHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZShhZ2dyZWdhdGVJZCk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKGNvbXBvc2l0aW9uQWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=