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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluL21vZGUvc2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQTJCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJdEU7SUFHQyx1Q0FBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELGtEQUFVOzs7SUFBVjtRQUNDLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsMkRBQW1COzs7OztJQUFuQixVQUFvQixTQUE0QixFQUFFLE9BQWdCO1FBQ2pFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFRCx1REFBZTs7Ozs7SUFBZixVQUFnQixpQkFBb0MsRUFBRSxPQUErQjs7WUFFOUUsSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUU7UUFFOUIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQW5CRCxVQUFVOzs7O2dCQU51QixvQkFBb0I7O0lBMkJ0RCxvQ0FBQztDQUFBLEFBckJELElBcUJDO1NBcEJZLDZCQUE2Qjs7Ozs7O0lBRTdCLDZEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZCwgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZCB9IGZyb20gJy4vc2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGUgfSBmcm9tICcuLi9saXN0LXZpZXcuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxMaXN0Vmlld0FnZ3JlZ2F0ZSwgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U2V0TGlzdFZpZXdNb2RlQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRMaXN0Vmlld01vZGVDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IExpc3RWaWV3QWdncmVnYXRlLCBjb21tYW5kOiBDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGxpc3RWaWV3QWdncmVnYXRlOiBMaXN0Vmlld0FnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0TGlzdFZpZXdNb2RlQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgbW9kZSA9IGNvbW1hbmQuZ2V0TW9kZSgpO1xuXG5cdFx0bGlzdFZpZXdBZ2dyZWdhdGUuc2V0TW9kZShtb2RlKTtcblx0fVxuXG59XG4iXX0=