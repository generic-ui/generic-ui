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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2xvYWRpbmcvc291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWtCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJdkU7SUFHQyx3Q0FBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELG1EQUFVOzs7SUFBVjtRQUNDLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsNERBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQWdDO1FBQ2xGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7Ozs7OztJQUVELHdEQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBZ0M7O1lBRXhFLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFOztZQUNsQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTtRQUUvQixNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQXBCRCxVQUFVOzs7O2dCQVBjLG9CQUFvQjs7SUE2QjdDLHFDQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksOEJBQThCOzs7Ozs7SUFFOUIsOERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRTb3VyY2VMb2FkaW5nRXZlbnQgfSBmcm9tICcuL3NldC1zb3VyY2UtbG9hZGluZy5ldmVudCc7XG5pbXBvcnQgeyBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZCB9IGZyb20gJy4vc291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNvdXJjZVNldExvYWRpbmdDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogVHlwZTxTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNvdXJjZVNldExvYWRpbmdDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTZXRTb3VyY2VMb2FkaW5nRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNvdXJjZVNldExvYWRpbmdDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gY29tbWFuZC5pc0VuYWJsZWQoKSxcblx0XHRcdHNvdXJjZSA9IGFnZ3JlZ2F0ZS5nZXRTb3VyY2UoKTtcblxuXHRcdHNvdXJjZS5zZXRMb2FkaW5nKGVuYWJsZWQpO1xuXHR9XG5cbn1cbiJdfQ==