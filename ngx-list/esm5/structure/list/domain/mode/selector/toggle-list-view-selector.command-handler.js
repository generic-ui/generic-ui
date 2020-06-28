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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi9tb2RlL3NlbGVjdG9yL3RvZ2dsZS1saXN0LXZpZXctc2VsZWN0b3IuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBd0Msb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUlwRjtJQUdDLDhDQUE2QixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUN2RSxDQUFDOzs7O0lBRUQseURBQVU7OztJQUFWO1FBQ0MsT0FBTyw2QkFBNkIsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFRCxrRUFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTRCLEVBQUUsT0FBZ0I7UUFDakUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVELDhEQUFlOzs7OztJQUFmLFVBQWdCLGlCQUFvQyxFQUFFLE9BQXNDOztZQUVyRixPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRTtRQUVwQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFuQkQsVUFBVTs7OztnQkFOb0Msb0JBQW9COztJQTJCbkUsMkNBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxvQ0FBb0M7Ozs7OztJQUVwQyxvRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmQsIENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZCB9IGZyb20gJy4vdG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vbGlzdC12aWV3LmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPExpc3RWaWV3QWdncmVnYXRlLCBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IExpc3RWaWV3QWdncmVnYXRlLCBjb21tYW5kOiBDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGxpc3RWaWV3QWdncmVnYXRlOiBMaXN0Vmlld0FnZ3JlZ2F0ZSwgY29tbWFuZDogVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGVuYWJsZWQgPSBjb21tYW5kLmlzZUVuYWJsZWQoKTtcblxuXHRcdGxpc3RWaWV3QWdncmVnYXRlLnRvZ2dsZU1vZGVTZWxlY3RvcihlbmFibGVkKTtcblx0fVxuXG59XG4iXX0=