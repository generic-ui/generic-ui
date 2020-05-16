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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi9tb2RlL3NlbGVjdG9yL3RvZ2dsZS1saXN0LXZpZXctc2VsZWN0b3IuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBMkIsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUlwRjtJQUdDLDhDQUE2QixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUN2RSxDQUFDOzs7O0lBRUQseURBQVU7OztJQUFWO1FBQ0MsT0FBTyw2QkFBNkIsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFRCxrRUFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTRCLEVBQUUsT0FBZ0I7UUFDakUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVELDhEQUFlOzs7OztJQUFmLFVBQWdCLGlCQUFvQyxFQUFFLE9BQXNDOztZQUVyRixPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRTtRQUVwQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFuQkQsVUFBVTs7OztnQkFOdUIsb0JBQW9COztJQTJCdEQsMkNBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxvQ0FBb0M7Ozs7OztJQUVwQyxvRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmQsIENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kIH0gZnJvbSAnLi90b2dnbGUtbGlzdC12aWV3LXNlbGVjdG9yLmNvbW1hbmQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9saXN0LXZpZXcuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8TGlzdFZpZXdBZ2dyZWdhdGUsIFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogVHlwZTxUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZD4ge1xuXHRcdHJldHVybiBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBMaXN0Vmlld0FnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShsaXN0Vmlld0FnZ3JlZ2F0ZTogTGlzdFZpZXdBZ2dyZWdhdGUsIGNvbW1hbmQ6IFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gY29tbWFuZC5pc2VFbmFibGVkKCk7XG5cblx0XHRsaXN0Vmlld0FnZ3JlZ2F0ZS50b2dnbGVNb2RlU2VsZWN0b3IoZW5hYmxlZCk7XG5cdH1cblxufVxuIl19