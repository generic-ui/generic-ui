/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SourceDomainEventPublisher } from '../../source.domain-event.publisher';
import { SetOriginCommand } from './set-origin.command';
var SetOriginCommandHandler = /** @class */ (function () {
    function SetOriginCommandHandler(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetOriginCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetOriginCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetOriginCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var aggregateEvents = aggregate.getEvents();
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    SetOriginCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var items = command.getItems();
        structure.setOrigin(items);
    };
    SetOriginCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetOriginCommandHandler.ctorParameters = function () { return [
        { type: SourceDomainEventPublisher }
    ]; };
    return SetOriginCommandHandler;
}());
export { SetOriginCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetOriginCommandHandler.prototype.structureSourceDomainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW9yaWdpbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL29yaWdpbi9zZXQtb3JpZ2luL3NldC1vcmlnaW4uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBR2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3hEO0lBR0MsaUNBQW9CLG1DQUErRDtRQUEvRCx3Q0FBbUMsR0FBbkMsbUNBQW1DLENBQTRCO0lBQ25GLENBQUM7Ozs7SUFFRCw0Q0FBVTs7O0lBQVY7UUFDQyxPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELHFEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNkIsRUFBRSxPQUF5Qjs7WUFFckUsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFFN0MsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxpREFBZTs7Ozs7SUFBZixVQUFnQixTQUE2QixFQUFFLE9BQXlCOztZQUVqRSxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUVoQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQXRCRCxVQUFVOzs7O2dCQU5GLDBCQUEwQjs7SUE4Qm5DLDhCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlksdUJBQXVCOzs7Ozs7SUFFdkIsc0VBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi9zb3VyY2UuZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuaW1wb3J0IHsgU2V0T3JpZ2luQ29tbWFuZCB9IGZyb20gJy4vc2V0LW9yaWdpbi5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0T3JpZ2luQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldE9yaWdpbkNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyOiBTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRPcmlnaW5Db21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldE9yaWdpbkNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRPcmlnaW5Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVFdmVudHMgPSBhZ2dyZWdhdGUuZ2V0RXZlbnRzKCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goYWdncmVnYXRlRXZlbnRzKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0T3JpZ2luQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaXRlbXMgPSBjb21tYW5kLmdldEl0ZW1zKCk7XG5cblx0XHRzdHJ1Y3R1cmUuc2V0T3JpZ2luKGl0ZW1zKTtcblx0fVxuXG59XG4iXX0=