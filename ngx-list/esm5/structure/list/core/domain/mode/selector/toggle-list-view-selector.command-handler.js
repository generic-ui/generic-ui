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
    ToggleListViewSelectorCommandHandler.prototype.publish = /**
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
    ToggleListViewSelectorCommandHandler.prototype.handle = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvZG9tYWluL21vZGUvc2VsZWN0b3IvdG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBS3BGO0lBR0MsOENBQTZCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3ZFLENBQUM7Ozs7SUFFRCx5REFBVTs7O0lBQVY7UUFDQyxPQUFPLDZCQUE2QixDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVELHNEQUFPOzs7OztJQUFQLFVBQVEsU0FBNEIsRUFBRSxPQUF3QjtRQUM3RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQscURBQU07Ozs7O0lBQU4sVUFBTyxpQkFBb0MsRUFBRSxPQUFzQzs7WUFFNUUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUU7UUFFcEMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBbkJELFVBQVU7Ozs7Z0JBUDJCLG9CQUFvQjs7SUE0QjFELDJDQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksb0NBQW9DOzs7Ozs7SUFFcEMsb0VBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQgfSBmcm9tICcuL3RvZ2dsZS1saXN0LXZpZXctc2VsZWN0b3IuY29tbWFuZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0FnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2xpc3Qtdmlldy5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21tYW5kIH0gZnJvbSAnLi4vLi4vbGlzdC12aWV3LmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxMaXN0Vmlld0FnZ3JlZ2F0ZSwgVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZD4ge1xuXHRcdHJldHVybiBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBMaXN0Vmlld0FnZ3JlZ2F0ZSwgY29tbWFuZDogTGlzdFZpZXdDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cblx0aGFuZGxlKGxpc3RWaWV3QWdncmVnYXRlOiBMaXN0Vmlld0FnZ3JlZ2F0ZSwgY29tbWFuZDogVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGVuYWJsZWQgPSBjb21tYW5kLmlzZUVuYWJsZWQoKTtcblxuXHRcdGxpc3RWaWV3QWdncmVnYXRlLnRvZ2dsZU1vZGVTZWxlY3RvcihlbmFibGVkKTtcblx0fVxuXG59XG4iXX0=