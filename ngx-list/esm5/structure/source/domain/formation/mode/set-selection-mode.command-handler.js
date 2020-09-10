/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSelectionModeCommand } from './set-selection-mode.command';
var SetSelectionModeCommandHandler = /** @class */ (function () {
    function SetSelectionModeCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetSelectionModeCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetSelectionModeCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetSelectionModeCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetSelectionModeCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        aggregate.setSelectionMode(command.getMode());
    };
    SetSelectionModeCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSelectionModeCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetSelectionModeCommandHandler;
}());
export { SetSelectionModeCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSelectionModeCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4vZm9ybWF0aW9uL21vZGUvc2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJdkU7SUFHQyx3Q0FBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELG1EQUFVOzs7SUFBVjtRQUNDLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsNERBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQWdDO1FBQ2xGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFRCx3REFBZTs7Ozs7SUFBZixVQUFnQixTQUE2QixFQUFFLE9BQWdDO1FBQzlFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFOMkIsb0JBQW9COztJQXdCMUQscUNBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSw4QkFBOEI7Ozs7OztJQUU5Qiw4REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZCB9IGZyb20gJy4vc2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFNlbGVjdGlvbk1vZGVDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0U2VsZWN0aW9uTW9kZUNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNlbGVjdGlvbk1vZGVDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZCk6IHZvaWQge1xuXHRcdGFnZ3JlZ2F0ZS5zZXRTZWxlY3Rpb25Nb2RlKGNvbW1hbmQuZ2V0TW9kZSgpKTtcblx0fVxuXG59XG4iXX0=