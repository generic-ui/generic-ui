/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition-event.converter';
import { SetCompositionContainerWidthCommand } from './set-composition-container-width.command';
export class SetCompositionContainerWidthCommandHandler extends CommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     * @param {?} compositionEventConverter
     */
    constructor(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        super(SetCompositionContainerWidthCommand, null, null, compositionAggregateRepository);
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    handleAggregate(composition, command) {
        /** @type {?} */
        const width = command.getWidth();
        composition.setContainerWidth(width);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.publishAggregateEvents((/** @type {?} */ (aggregate.getEvents())));
    }
    /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    publishAggregateEvents(aggregateEvents) {
        /** @type {?} */
        const domainEvents = this.compositionEventConverter.convert(aggregateEvents);
        this.domainEventPublisher.publish(domainEvents);
    }
}
SetCompositionContainerWidthCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetCompositionContainerWidthCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher },
    { type: CompositionEventConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionContainerWidthCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    SetCompositionContainerWidthCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    SetCompositionContainerWidthCommandHandler.prototype.compositionEventConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL3NldC1jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGguY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBa0IsY0FBYyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFNaEcsTUFBTSxPQUFPLDBDQUEyQyxTQUFRLGNBQW9DOzs7Ozs7SUFFbkcsWUFBNkIsOEJBQThELEVBQzlFLG9CQUEwQyxFQUM1Qyx5QkFBb0Q7UUFDOUQsS0FBSyxDQUFDLG1DQUFtQyxFQUN4QyxJQUFJLEVBQ0osSUFBSSxFQUNKLDhCQUE4QixDQUFDLENBQUM7UUFOTCxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQzlFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDNUMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUsvRCxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsV0FBaUMsRUFBRSxPQUE0Qzs7Y0FFeEYsS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUU7UUFFaEMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLFNBQStCLEVBQUUsT0FBMEM7UUFDOUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDLG1CQUFBLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBeUIsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7OztJQUVPLHNCQUFzQixDQUFDLGVBQXNDOztjQUU5RCxZQUFZLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFFNUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUE1QkQsVUFBVTs7OztZQVBGLDhCQUE4QjtZQUZFLG9CQUFvQjtZQUdwRCx5QkFBeUI7Ozs7Ozs7SUFTckIsb0ZBQStFOzs7OztJQUN4RiwwRUFBb0Q7Ozs7O0lBQ3BELCtFQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi1ldmVudC5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQgfSBmcm9tICcuL3NldC1jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGguY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlcjxDb21wb3NpdGlvbkFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByb3RlY3RlZCBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25FdmVudENvbnZlcnRlcjogQ29tcG9zaXRpb25FdmVudENvbnZlcnRlcikge1xuXHRcdHN1cGVyKFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kLFxuXHRcdFx0bnVsbCxcblx0XHRcdG51bGwsXG5cdFx0XHRjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHdpZHRoID0gY29tbWFuZC5nZXRXaWR0aCgpO1xuXG5cdFx0Y29tcG9zaXRpb24uc2V0Q29udGFpbmVyV2lkdGgod2lkdGgpO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoYWdncmVnYXRlLmdldEV2ZW50cygpIGFzIEFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pik7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoYWdncmVnYXRlRXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudD4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGRvbWFpbkV2ZW50cyA9IHRoaXMuY29tcG9zaXRpb25FdmVudENvbnZlcnRlci5jb252ZXJ0KGFnZ3JlZ2F0ZUV2ZW50cyk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnRzKTtcblx0fVxuXG59XG4iXX0=