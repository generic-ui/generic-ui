/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSourceLoadingEvent } from './set-source-loading.event';
import { SourceSetLoadingCommand } from './source-set-loading.command';
var SourceSetLoadingCommandHandler = /** @class */ (function () {
    function SourceSetLoadingCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SourceSetLoadingCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SourceSetLoadingCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SourceSetLoadingCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new SetSourceLoadingEvent(command.getAggregateId()));
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SourceSetLoadingCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var enabled = command.isEnabled();
        /** @type {?} */
        var source = aggregate.getSource();
        source.setLoading(enabled);
    };
    SourceSetLoadingCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceSetLoadingCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SourceSetLoadingCommandHandler;
}());
export { SourceSetLoadingCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceSetLoadingCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9sb2FkaW5nL3NvdXJjZS1zZXQtbG9hZGluZy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSXZFO0lBR0Msd0NBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzlELENBQUM7Ozs7SUFFRCxtREFBVTs7O0lBQVY7UUFDQyxPQUFPLHVCQUF1QixDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVELDREQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNkIsRUFBRSxPQUFnQztRQUNsRixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUkscUJBQXFCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDOzs7Ozs7SUFFRCx3REFBZTs7Ozs7SUFBZixVQUFnQixTQUE2QixFQUFFLE9BQWdDOztZQUV4RSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTs7WUFDbEMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFFL0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkFwQkQsVUFBVTs7OztnQkFQMkIsb0JBQW9COztJQTZCMUQscUNBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXJCWSw4QkFBOEI7Ozs7OztJQUU5Qiw4REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRTb3VyY2VMb2FkaW5nRXZlbnQgfSBmcm9tICcuL3NldC1zb3VyY2UtbG9hZGluZy5ldmVudCc7XG5pbXBvcnQgeyBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZCB9IGZyb20gJy4vc291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZVNldExvYWRpbmdDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU291cmNlU2V0TG9hZGluZ0NvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNvdXJjZVNldExvYWRpbmdDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTZXRTb3VyY2VMb2FkaW5nRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNvdXJjZVNldExvYWRpbmdDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gY29tbWFuZC5pc0VuYWJsZWQoKSxcblx0XHRcdHNvdXJjZSA9IGFnZ3JlZ2F0ZS5nZXRTb3VyY2UoKTtcblxuXHRcdHNvdXJjZS5zZXRMb2FkaW5nKGVuYWJsZWQpO1xuXHR9XG5cbn1cbiJdfQ==