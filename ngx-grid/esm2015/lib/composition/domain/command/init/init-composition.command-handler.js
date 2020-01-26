/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../composition.aggregate-repository';
import { CompositionAggregateFactory } from '../composition.aggregate-factory';
import { InitCompositionCommand } from './init-composition.command';
import { CompositionInitedEvent } from './composition-inited.event';
export class InitCompositionCommandHandler extends CommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} compositionAggregateFactory
     * @param {?} domainEventPublisher
     */
    constructor(compositionAggregateRepository, compositionAggregateFactory, domainEventPublisher) {
        super(InitCompositionCommand, CompositionInitedEvent, domainEventPublisher);
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.compositionAggregateFactory = compositionAggregateFactory;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const aggregateId = command.compositionId;
        /** @type {?} */
        const compositionAggregate = this.compositionAggregateFactory.create(aggregateId);
        this.compositionAggregateRepository.save(compositionAggregate);
    }
}
InitCompositionCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InitCompositionCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: CompositionAggregateFactory },
    { type: DomainEventPublisher }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1jb21wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9pbml0L2luaXQtY29tcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJcEUsTUFBTSxPQUFPLDZCQUE4QixTQUFRLGNBQWM7Ozs7OztJQUVoRSxZQUE2Qiw4QkFBOEQsRUFDdkUsMkJBQXdELEVBQ3pFLG9CQUEwQztRQUM1QyxLQUFLLENBQUMsc0JBQXNCLEVBQzNCLHNCQUFzQixFQUN0QixvQkFBb0IsQ0FBQyxDQUFDO1FBTEssbUNBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUN2RSxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO0lBSzVFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQStCOztjQUUvQixXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWE7O2NBRW5DLG9CQUFvQixHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRWpGLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7WUFsQkQsVUFBVTs7OztZQU5GLDhCQUE4QjtZQUM5QiwyQkFBMkI7WUFIWCxvQkFBb0I7Ozs7Ozs7SUFXaEMsdUVBQStFOzs7OztJQUN4RixvRUFBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW5pdENvbXBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4vaW5pdC1jb21wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSW5pdGVkRXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWluaXRlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluaXRDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5OiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKEluaXRDb21wb3NpdGlvbkNvbW1hbmQsXG5cdFx0XHRDb21wb3NpdGlvbkluaXRlZEV2ZW50LFxuXHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IEluaXRDb21wb3NpdGlvbkNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLmNvbXBvc2l0aW9uSWQ7XG5cblx0XHRjb25zdCBjb21wb3NpdGlvbkFnZ3JlZ2F0ZSA9IHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZShhZ2dyZWdhdGVJZCk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKGNvbXBvc2l0aW9uQWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=