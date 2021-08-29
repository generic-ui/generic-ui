/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { ToggleListViewSelectorCommand } from './toggle-list-view-selector.command';
export class ToggleListViewSelectorCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return ToggleListViewSelectorCommand;
    }
    /**
     * @param {?} listViewAggregate
     * @param {?} command
     * @return {?}
     */
    handle(listViewAggregate, command) {
        /** @type {?} */
        const enabled = command.iseEnabled();
        listViewAggregate.toggleModeSelector(enabled);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}
ToggleListViewSelectorCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ToggleListViewSelectorCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleListViewSelectorCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvZG9tYWluL21vZGUvc2VsZWN0b3IvdG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBTXBGLE1BQU0sT0FBTyxvQ0FBb0M7Ozs7SUFFaEQsWUFBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLDZCQUE2QixDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxpQkFBb0MsRUFBRSxPQUFzQzs7Y0FFNUUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUU7UUFFcEMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLFNBQTRCLEVBQUUsT0FBd0I7UUFDN0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQW5CRCxVQUFVOzs7O1lBUDJCLG9CQUFvQjs7Ozs7OztJQVU3QyxvRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZCB9IGZyb20gJy4vdG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vbGlzdC12aWV3LmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbW1hbmQgfSBmcm9tICcuLi8uLi9saXN0LXZpZXcuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPExpc3RWaWV3QWdncmVnYXRlLCBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlKGxpc3RWaWV3QWdncmVnYXRlOiBMaXN0Vmlld0FnZ3JlZ2F0ZSwgY29tbWFuZDogVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGVuYWJsZWQgPSBjb21tYW5kLmlzZUVuYWJsZWQoKTtcblxuXHRcdGxpc3RWaWV3QWdncmVnYXRlLnRvZ2dsZU1vZGVTZWxlY3RvcihlbmFibGVkKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBMaXN0Vmlld0FnZ3JlZ2F0ZSwgY29tbWFuZDogTGlzdFZpZXdDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==