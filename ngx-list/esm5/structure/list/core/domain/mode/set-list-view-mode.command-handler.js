/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetListViewModeCommand } from './set-list-view-mode.command';
var SetListViewModeCommandHandler = /** @class */ (function () {
    function SetListViewModeCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetListViewModeCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetListViewModeCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetListViewModeCommandHandler.prototype.publishDomainEvents = /**
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
    SetListViewModeCommandHandler.prototype.handleAggregate = /**
     * @param {?} listViewAggregate
     * @param {?} command
     * @return {?}
     */
    function (listViewAggregate, command) {
        /** @type {?} */
        var mode = command.getMode();
        listViewAggregate.setMode(mode);
    };
    SetListViewModeCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetListViewModeCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetListViewModeCommandHandler;
}());
export { SetListViewModeCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetListViewModeCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9kb21haW4vbW9kZS9zZXQtbGlzdC12aWV3LW1vZGUuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUt0RTtJQUdDLHVDQUE2QixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUN2RSxDQUFDOzs7O0lBRUQsa0RBQVU7OztJQUFWO1FBQ0MsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCwyREFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTRCLEVBQUUsT0FBd0I7UUFDekUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVELHVEQUFlOzs7OztJQUFmLFVBQWdCLGlCQUFvQyxFQUFFLE9BQStCOztZQUU5RSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRTtRQUU5QixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBbkJELFVBQVU7Ozs7Z0JBUDJCLG9CQUFvQjs7SUE0QjFELG9DQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksNkJBQTZCOzs7Ozs7SUFFN0IsNkRBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZCB9IGZyb20gJy4vc2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGUgfSBmcm9tICcuLi9saXN0LXZpZXcuYWdncmVnYXRlJztcbmltcG9ydCB7IExpc3RWaWV3Q29tbWFuZCB9IGZyb20gJy4uL2xpc3Qtdmlldy5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxMaXN0Vmlld0FnZ3JlZ2F0ZSwgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldExpc3RWaWV3TW9kZUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0TGlzdFZpZXdNb2RlQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBMaXN0Vmlld0FnZ3JlZ2F0ZSwgY29tbWFuZDogTGlzdFZpZXdDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGxpc3RWaWV3QWdncmVnYXRlOiBMaXN0Vmlld0FnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0TGlzdFZpZXdNb2RlQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgbW9kZSA9IGNvbW1hbmQuZ2V0TW9kZSgpO1xuXG5cdFx0bGlzdFZpZXdBZ2dyZWdhdGUuc2V0TW9kZShtb2RlKTtcblx0fVxuXG59XG4iXX0=