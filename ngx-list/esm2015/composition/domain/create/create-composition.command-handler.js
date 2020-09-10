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
     * @return {?}
     */
    forCommand() {
        return CreateCompositionCommand;
    }
    /**
     * @return {?}
     */
    getAggregateRepository() {
        return this.compositionAggregateRepository;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionCreatedEvent(command.getAggregateId()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvbXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL2NyZWF0ZS9jcmVhdGUtY29tcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBbUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzSCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU10RSxNQUFNLE9BQU8sK0JBQStCOzs7OztJQUUzQyxZQUE2Qiw4QkFBOEQsRUFDdkUsb0JBQTBDO1FBRGpDLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDdkUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sd0JBQXdCLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNyQixPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxTQUErQixFQUFFLE9BQWlDO1FBQ3JGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7OztZQWpCRCxVQUFVOzs7O1lBUEYsOEJBQThCO1lBRm1DLG9CQUFvQjs7Ozs7OztJQVlqRix5RUFBK0U7Ozs7O0lBQ3hGLCtEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlUmVwb3NpdG9yeSwgQ29tbWFuZFR5cGUsIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4vY3JlYXRlLWNvbXBvc2l0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DcmVhdGVkRXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPENvbXBvc2l0aW9uQWdncmVnYXRlLCBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kO1xuXHR9XG5cblx0Z2V0QWdncmVnYXRlUmVwb3NpdG9yeSgpOiBBZ2dyZWdhdGVSZXBvc2l0b3J5PENvbXBvc2l0aW9uSWQsIENvbXBvc2l0aW9uQWdncmVnYXRlPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5O1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IENvbXBvc2l0aW9uQ3JlYXRlZEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSkpO1xuXHR9XG59XG4iXX0=