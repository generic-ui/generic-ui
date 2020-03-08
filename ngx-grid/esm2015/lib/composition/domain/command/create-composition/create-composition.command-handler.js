/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../composition.aggregate-repository';
import { CreateCompositionCommand } from './create-composition.command';
import { CompositionCreatedEvent } from './composition-created.event';
export class CreateCompositionCommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(compositionAggregateRepository, domainEventPublisher) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionCreatedEvent(command.getAggregateId()));
    }
    /**
     * @return {?}
     */
    getAggregateRepository() {
        return this.compositionAggregateRepository;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return CreateCompositionCommand;
    }
}
CreateCompositionCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CreateCompositionCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CreateCompositionCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    CreateCompositionCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvbXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NyZWF0ZS1jb21wb3NpdGlvbi9jcmVhdGUtY29tcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBZ0Qsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUt0RSxNQUFNLE9BQU8sK0JBQStCOzs7OztJQUUzQyxZQUE2Qiw4QkFBOEQsRUFDdkUsb0JBQTBDO1FBRGpDLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDdkUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxTQUErQixFQUFFLE9BQWlDO1FBQ3JGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDckIsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLHdCQUF3QixDQUFDO0lBQ2pDLENBQUM7OztZQWpCRCxVQUFVOzs7O1lBTkYsOEJBQThCO1lBRmdCLG9CQUFvQjs7Ozs7OztJQVc5RCx5RUFBK0U7Ozs7O0lBQ3hGLCtEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlUmVwb3NpdG9yeSwgQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi9jcmVhdGUtY29tcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNyZWF0ZWRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24tY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBDb21wb3NpdGlvbkNyZWF0ZWRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxuXG5cdGdldEFnZ3JlZ2F0ZVJlcG9zaXRvcnkoKTogQWdncmVnYXRlUmVwb3NpdG9yeTxDb21wb3NpdGlvbkFnZ3JlZ2F0ZT4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogVHlwZTxDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kO1xuXHR9XG59XG4iXX0=