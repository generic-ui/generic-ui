/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { SetCompositionWidthCommand } from './set-composition-width.command';
import { CompositionWidthSetEvent } from './composition-width-set.event';
export class SetCompositionWidthCommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(compositionAggregateRepository, domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetCompositionWidthCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionWidthSetEvent(command.getAggregateId()));
    }
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    handleAggregate(composition, command) {
        /** @type {?} */
        const width = command.getWidth();
        composition.setWidth(width);
    }
}
SetCompositionWidthCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetCompositionWidthCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionWidthCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL3dpZHRoL3NldC13aWR0aC9zZXQtY29tcG9zaXRpb24td2lkdGguY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUl6RSxNQUFNLE9BQU8saUNBQWlDOzs7OztJQUU3QyxZQUFZLDhCQUE4RCxFQUN0RCxvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sMEJBQTBCLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBK0IsRUFBRSxPQUFtQztRQUN2RixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksd0JBQXdCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsV0FBaUMsRUFBRSxPQUFtQzs7Y0FFL0UsS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUU7UUFFaEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFwQkQsVUFBVTs7OztZQUxGLDhCQUE4QjtZQUZELG9CQUFvQjs7Ozs7OztJQVd0RCxpRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZCB9IGZyb20gJy4vc2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGUsIFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IoY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSkpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHdpZHRoID0gY29tbWFuZC5nZXRXaWR0aCgpO1xuXG5cdFx0Y29tcG9zaXRpb24uc2V0V2lkdGgod2lkdGgpO1xuXHR9XG5cbn1cbiJdfQ==