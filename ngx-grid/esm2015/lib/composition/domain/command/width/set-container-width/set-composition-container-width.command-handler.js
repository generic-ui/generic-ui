/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition-event.converter';
import { SetCompositionContainerWidthCommand } from './set-composition-container-width.command';
export class SetCompositionContainerWidthCommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     * @param {?} compositionEventConverter
     */
    constructor(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetCompositionContainerWidthCommand;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL3NldC1jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGguY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBa0Msb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUtoRyxNQUFNLE9BQU8sMENBQTBDOzs7Ozs7SUFFdEQsWUFBNkIsOEJBQThELEVBQzlFLG9CQUEwQyxFQUM1Qyx5QkFBb0Q7UUFGbEMsbUNBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUM5RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFDL0QsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLG1DQUFtQyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxXQUFpQyxFQUFFLE9BQTRDOztjQUV4RixLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUVoQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBK0IsRUFBRSxPQUE0QztRQUNoRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsbUJBQUEsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUF5QixDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsZUFBc0M7O2NBRTlELFlBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUU1RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pELENBQUM7OztZQTVCRCxVQUFVOzs7O1lBTkYsOEJBQThCO1lBRkUsb0JBQW9CO1lBR3BELHlCQUF5Qjs7Ozs7OztJQVFyQixvRkFBK0U7Ozs7O0lBQ3hGLDBFQUFvRDs7Ozs7SUFDcEQsK0VBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudENvbnZlcnRlciB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLWV2ZW50LmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZCB9IGZyb20gJy4vc2V0LWNvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGUsIFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkV2ZW50Q29udmVydGVyOiBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoY29tcG9zaXRpb246IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgd2lkdGggPSBjb21tYW5kLmdldFdpZHRoKCk7XG5cblx0XHRjb21wb3NpdGlvbi5zZXRDb250YWluZXJXaWR0aCh3aWR0aCk7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoQWdncmVnYXRlRXZlbnRzKGFnZ3JlZ2F0ZS5nZXRFdmVudHMoKSBhcyBBcnJheTxBZ2dyZWdhdGVFdmVudD4pO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoQWdncmVnYXRlRXZlbnRzKGFnZ3JlZ2F0ZUV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ+KTogdm9pZCB7XG5cblx0XHRjb25zdCBkb21haW5FdmVudHMgPSB0aGlzLmNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIuY29udmVydChhZ2dyZWdhdGVFdmVudHMpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50cyk7XG5cdH1cblxufVxuIl19