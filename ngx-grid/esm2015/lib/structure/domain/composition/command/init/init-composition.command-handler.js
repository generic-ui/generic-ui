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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1jb21wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvaW5pdC9pbml0LWNvbXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSXBFLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxjQUFjOzs7Ozs7SUFFaEUsWUFBNkIsOEJBQThELEVBQ3ZFLDJCQUF3RCxFQUN6RSxvQkFBMEM7UUFDNUMsS0FBSyxDQUFDLHNCQUFzQixFQUMzQixzQkFBc0IsRUFDdEIsb0JBQW9CLENBQUMsQ0FBQztRQUxLLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDdkUsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtJQUs1RSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUErQjs7Y0FFL0IsV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhOztjQUVuQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUVqRixJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDaEUsQ0FBQzs7O1lBbEJELFVBQVU7Ozs7WUFORiw4QkFBOEI7WUFDOUIsMkJBQTJCO1lBSFgsb0JBQW9COzs7Ozs7O0lBV2hDLHVFQUErRTs7Ozs7SUFDeEYsb0VBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEluaXRDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuL2luaXQtY29tcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkluaXRlZEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi1pbml0ZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbml0Q29tcG9zaXRpb25Db21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlRmFjdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihJbml0Q29tcG9zaXRpb25Db21tYW5kLFxuXHRcdFx0Q29tcG9zaXRpb25Jbml0ZWRFdmVudCxcblx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBJbml0Q29tcG9zaXRpb25Db21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gY29tbWFuZC5jb21wb3NpdGlvbklkO1xuXG5cdFx0Y29uc3QgY29tcG9zaXRpb25BZ2dyZWdhdGUgPSB0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlRmFjdG9yeS5jcmVhdGUoYWdncmVnYXRlSWQpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShjb21wb3NpdGlvbkFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19