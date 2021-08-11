/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetScrollPositionCommand } from './set-scroll-position.command';
import { ScrollPositionSetEvent } from './scroll-position-set.event';
var SetScrollPositionCommandHandler = /** @class */ (function () {
    function SetScrollPositionCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetScrollPositionCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetScrollPositionCommand;
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    SetScrollPositionCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var position = command.getPosition();
        structure.setScrollPosition(position);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetScrollPositionCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new ScrollPositionSetEvent(command.getAggregateId()));
    };
    SetScrollPositionCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetScrollPositionCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetScrollPositionCommandHandler;
}());
export { SetScrollPositionCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetScrollPositionCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjcm9sbC1wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2Nyb2xsLXBvc2l0aW9uL3NldC1zY3JvbGwtcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUlyRTtJQUdDLHlDQUE2QixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUN2RSxDQUFDOzs7O0lBRUQsb0RBQVU7OztJQUFWO1FBQ0MsT0FBTyx3QkFBd0IsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFRCx5REFBZTs7Ozs7SUFBZixVQUFnQixTQUE2QixFQUFFLE9BQWlDOztZQUV6RSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTtRQUV0QyxTQUFTLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRUQsNkRBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQWlDO1FBQ25GLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7O2dCQW5CRCxVQUFVOzs7O2dCQU4yQixvQkFBb0I7O0lBMkIxRCxzQ0FBQztDQUFBLEFBckJELElBcUJDO1NBcEJZLCtCQUErQjs7Ozs7O0lBRS9CLCtEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuL3NldC1zY3JvbGwtcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBTY3JvbGxQb3NpdGlvblNldEV2ZW50IH0gZnJvbSAnLi9zY3JvbGwtcG9zaXRpb24tc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBvc2l0aW9uID0gY29tbWFuZC5nZXRQb3NpdGlvbigpO1xuXG5cdFx0c3RydWN0dXJlLnNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uKTtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNjcm9sbFBvc2l0aW9uQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU2Nyb2xsUG9zaXRpb25TZXRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxuXG59XG4iXX0=