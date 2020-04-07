/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { SetCompositionWidthCommand } from './set-composition-width.command';
import { CompositionWidthSetEvent } from './composition-width-set.event';
var SetCompositionWidthCommandHandler = /** @class */ (function () {
    function SetCompositionWidthCommandHandler(compositionAggregateRepository, domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetCompositionWidthCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetCompositionWidthCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetCompositionWidthCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new CompositionWidthSetEvent(command.getAggregateId()));
    };
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    SetCompositionWidthCommandHandler.prototype.handleAggregate = /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    function (composition, command) {
        /** @type {?} */
        var width = command.getWidth();
        composition.setWidth(width);
    };
    SetCompositionWidthCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetCompositionWidthCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetCompositionWidthCommandHandler;
}());
export { SetCompositionWidthCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionWidthCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi93aWR0aC9zZXQtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWtCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHekU7SUFHQywyQ0FBWSw4QkFBOEQsRUFDdEQsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELHNEQUFVOzs7SUFBVjtRQUNDLE9BQU8sMEJBQTBCLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRUQsK0RBQW1COzs7OztJQUFuQixVQUFvQixTQUErQixFQUFFLE9BQW1DO1FBQ3ZGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7Ozs7OztJQUVELDJEQUFlOzs7OztJQUFmLFVBQWdCLFdBQWlDLEVBQUUsT0FBbUM7O1lBRS9FLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFO1FBRWhDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBcEJELFVBQVU7Ozs7Z0JBTEYsOEJBQThCO2dCQUZkLG9CQUFvQjs7SUE2QjdDLHdDQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksaUNBQWlDOzs7Ozs7SUFHMUMsaUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZCB9IGZyb20gJy4vc2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGUsIFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IoY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoY29tcG9zaXRpb246IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgd2lkdGggPSBjb21tYW5kLmdldFdpZHRoKCk7XG5cblx0XHRjb21wb3NpdGlvbi5zZXRXaWR0aCh3aWR0aCk7XG5cdH1cblxufVxuIl19