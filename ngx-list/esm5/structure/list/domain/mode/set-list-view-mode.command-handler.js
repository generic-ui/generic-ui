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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluL21vZGUvc2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQXdDLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJdEU7SUFHQyx1Q0FBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELGtEQUFVOzs7SUFBVjtRQUNDLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsMkRBQW1COzs7OztJQUFuQixVQUFvQixTQUE0QixFQUFFLE9BQWdCO1FBQ2pFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFRCx1REFBZTs7Ozs7SUFBZixVQUFnQixpQkFBb0MsRUFBRSxPQUErQjs7WUFFOUUsSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUU7UUFFOUIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQW5CRCxVQUFVOzs7O2dCQU5vQyxvQkFBb0I7O0lBMkJuRSxvQ0FBQztDQUFBLEFBckJELElBcUJDO1NBcEJZLDZCQUE2Qjs7Ozs7O0lBRTdCLDZEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZCwgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldExpc3RWaWV3TW9kZUNvbW1hbmQgfSBmcm9tICcuL3NldC1saXN0LXZpZXctbW9kZS5jb21tYW5kJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlIH0gZnJvbSAnLi4vbGlzdC12aWV3LmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldExpc3RWaWV3TW9kZUNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8TGlzdFZpZXdBZ2dyZWdhdGUsIFNldExpc3RWaWV3TW9kZUNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRMaXN0Vmlld01vZGVDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldExpc3RWaWV3TW9kZUNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogTGlzdFZpZXdBZ2dyZWdhdGUsIGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUobGlzdFZpZXdBZ2dyZWdhdGU6IExpc3RWaWV3QWdncmVnYXRlLCBjb21tYW5kOiBTZXRMaXN0Vmlld01vZGVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBtb2RlID0gY29tbWFuZC5nZXRNb2RlKCk7XG5cblx0XHRsaXN0Vmlld0FnZ3JlZ2F0ZS5zZXRNb2RlKG1vZGUpO1xuXHR9XG5cbn1cbiJdfQ==