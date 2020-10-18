/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { ToggleListViewSelectorCommand } from './toggle-list-view-selector.command';
var ToggleListViewSelectorCommandHandler = /** @class */ (function () {
    function ToggleListViewSelectorCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    ToggleListViewSelectorCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return ToggleListViewSelectorCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    ToggleListViewSelectorCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    /**
     * @param {?} listViewAggregate
     * @param {?} command
     * @return {?}
     */
    ToggleListViewSelectorCommandHandler.prototype.handleAggregate = /**
     * @param {?} listViewAggregate
     * @param {?} command
     * @return {?}
     */
    function (listViewAggregate, command) {
        /** @type {?} */
        var enabled = command.iseEnabled();
        listViewAggregate.toggleModeSelector(enabled);
    };
    ToggleListViewSelectorCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToggleListViewSelectorCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return ToggleListViewSelectorCommandHandler;
}());
export { ToggleListViewSelectorCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleListViewSelectorCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvZG9tYWluL21vZGUvc2VsZWN0b3IvdG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBS3BGO0lBR0MsOENBQTZCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3ZFLENBQUM7Ozs7SUFFRCx5REFBVTs7O0lBQVY7UUFDQyxPQUFPLDZCQUE2QixDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVELGtFQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNEIsRUFBRSxPQUF3QjtRQUN6RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsOERBQWU7Ozs7O0lBQWYsVUFBZ0IsaUJBQW9DLEVBQUUsT0FBc0M7O1lBRXJGLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFO1FBRXBDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQW5CRCxVQUFVOzs7O2dCQVAyQixvQkFBb0I7O0lBNEIxRCwyQ0FBQztDQUFBLEFBckJELElBcUJDO1NBcEJZLG9DQUFvQzs7Ozs7O0lBRXBDLG9FQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kIH0gZnJvbSAnLi90b2dnbGUtbGlzdC12aWV3LXNlbGVjdG9yLmNvbW1hbmQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9saXN0LXZpZXcuYWdncmVnYXRlJztcbmltcG9ydCB7IExpc3RWaWV3Q29tbWFuZCB9IGZyb20gJy4uLy4uL2xpc3Qtdmlldy5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8TGlzdFZpZXdBZ2dyZWdhdGUsIFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8VG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogTGlzdFZpZXdBZ2dyZWdhdGUsIGNvbW1hbmQ6IExpc3RWaWV3Q29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShsaXN0Vmlld0FnZ3JlZ2F0ZTogTGlzdFZpZXdBZ2dyZWdhdGUsIGNvbW1hbmQ6IFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gY29tbWFuZC5pc2VFbmFibGVkKCk7XG5cblx0XHRsaXN0Vmlld0FnZ3JlZ2F0ZS50b2dnbGVNb2RlU2VsZWN0b3IoZW5hYmxlZCk7XG5cdH1cblxufVxuIl19