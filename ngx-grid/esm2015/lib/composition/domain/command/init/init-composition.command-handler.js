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
        super(InitCompositionCommand, null, null, compositionAggregateRepository);
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.compositionAggregateFactory = compositionAggregateFactory;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handleEmptyAggregate(command) {
        /** @type {?} */
        const aggregateId = command.getAggregateId();
        /** @type {?} */
        const compositionAggregate = this.compositionAggregateFactory.create(aggregateId);
        this.compositionAggregateRepository.save(compositionAggregate);
        this.publishDomainEvents(compositionAggregate, command);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionInitedEvent(command.getAggregateId()));
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
    /**
     * @type {?}
     * @private
     */
    InitCompositionCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1jb21wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9pbml0L2luaXQtY29tcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUtwRSxNQUFNLE9BQU8sNkJBQThCLFNBQVEsY0FBb0M7Ozs7OztJQUV0RixZQUE2Qiw4QkFBOEQsRUFDdkUsMkJBQXdELEVBQ3hELG9CQUEwQztRQUM3RCxLQUFLLENBQUMsc0JBQXNCLEVBQzNCLElBQUksRUFDSixJQUFJLEVBQ0osOEJBQThCLENBQUMsQ0FBQztRQU5MLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDdkUsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUN4RCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBSzlELENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsT0FBK0I7O2NBRTdDLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFOztjQUV0QyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUVqRixJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLFNBQStCLEVBQUUsT0FBK0I7UUFDbkYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7O1lBekJELFVBQVU7Ozs7WUFQRiw4QkFBOEI7WUFDOUIsMkJBQTJCO1lBSFgsb0JBQW9COzs7Ozs7O0lBWWhDLHVFQUErRTs7Ozs7SUFDeEYsb0VBQXlFOzs7OztJQUN6RSw2REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEluaXRDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuL2luaXQtY29tcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkluaXRlZEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbml0Q29tcG9zaXRpb25Db21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyPENvbXBvc2l0aW9uQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3Rvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihJbml0Q29tcG9zaXRpb25Db21tYW5kLFxuXHRcdFx0bnVsbCxcblx0XHRcdG51bGwsXG5cdFx0XHRjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkpO1xuXHR9XG5cblx0aGFuZGxlRW1wdHlBZ2dyZWdhdGUoY29tbWFuZDogSW5pdENvbXBvc2l0aW9uQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRjb25zdCBjb21wb3NpdGlvbkFnZ3JlZ2F0ZSA9IHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZShhZ2dyZWdhdGVJZCk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKGNvbXBvc2l0aW9uQWdncmVnYXRlKTtcblxuXHRcdHRoaXMucHVibGlzaERvbWFpbkV2ZW50cyhjb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IEluaXRDb21wb3NpdGlvbkNvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IENvbXBvc2l0aW9uSW5pdGVkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxufVxuIl19