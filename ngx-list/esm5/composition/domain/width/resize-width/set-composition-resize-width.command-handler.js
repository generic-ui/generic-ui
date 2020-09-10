/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetCompositionResizeWidthCommand } from './set-composition-resize-width.command';
import { CompositionResizeWidthSetEvent } from './composition-resize-width-set.event';
var SetCompositionResizeWidthCommandHandler = /** @class */ (function () {
    function SetCompositionResizeWidthCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetCompositionResizeWidthCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetCompositionResizeWidthCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetCompositionResizeWidthCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new CompositionResizeWidthSetEvent(command.getAggregateId()));
    };
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    SetCompositionResizeWidthCommandHandler.prototype.handleAggregate = /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    function (composition, command) {
        /** @type {?} */
        var enabled = command.getEnabled();
        composition.setResizeWidth(enabled);
    };
    SetCompositionResizeWidthCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetCompositionResizeWidthCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetCompositionResizeWidthCommandHandler;
}());
export { SetCompositionResizeWidthCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionResizeWidthCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi93aWR0aC9yZXNpemUtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBSXRGO0lBR0MsaURBQTZCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3ZFLENBQUM7Ozs7SUFFRCw0REFBVTs7O0lBQVY7UUFDQyxPQUFPLGdDQUFnQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVELHFFQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBK0IsRUFBRSxPQUF5QztRQUM3RixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksOEJBQThCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDOzs7Ozs7SUFFRCxpRUFBZTs7Ozs7SUFBZixVQUFnQixXQUFpQyxFQUFFLE9BQXlDOztZQUVyRixPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRTtRQUVwQyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O2dCQW5CRCxVQUFVOzs7O2dCQVAyQixvQkFBb0I7O0lBNEIxRCw4Q0FBQztDQUFBLEFBckJELElBcUJDO1NBcEJZLHVDQUF1Qzs7Ozs7O0lBRXZDLHVFQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kIH0gZnJvbSAnLi9zZXQtY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi1yZXNpemUtd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGUsIFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoY29tcG9zaXRpb246IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZW5hYmxlZCA9IGNvbW1hbmQuZ2V0RW5hYmxlZCgpO1xuXG5cdFx0Y29tcG9zaXRpb24uc2V0UmVzaXplV2lkdGgoZW5hYmxlZCk7XG5cdH1cblxufVxuIl19