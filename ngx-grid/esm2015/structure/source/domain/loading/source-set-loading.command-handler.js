/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSourceLoadingEvent } from './set-source-loading.event';
import { SourceSetLoadingCommand } from './source-set-loading.command';
export class SourceSetLoadingCommandHandler {
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
        return SourceSetLoadingCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SetSourceLoadingEvent(command.getAggregateId()));
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const enabled = command.isEnabled();
        /** @type {?} */
        const source = aggregate.getSource();
        source.setLoading(enabled);
    }
}
SourceSetLoadingCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceSetLoadingCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceSetLoadingCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4vbG9hZGluZy9zb3VyY2Utc2V0LWxvYWRpbmcuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUt2RSxNQUFNLE9BQU8sOEJBQThCOzs7O0lBRTFDLFlBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzlELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxTQUE2QixFQUFFLE9BQWdDO1FBQ2xGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxTQUE2QixFQUFFLE9BQWdDOztjQUV4RSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTs7Y0FDbEMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFFL0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFwQkQsVUFBVTs7OztZQVAyQixvQkFBb0I7Ozs7Ozs7SUFVN0MsOERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0U291cmNlTG9hZGluZ0V2ZW50IH0gZnJvbSAnLi9zZXQtc291cmNlLWxvYWRpbmcuZXZlbnQnO1xuaW1wb3J0IHsgU291cmNlU2V0TG9hZGluZ0NvbW1hbmQgfSBmcm9tICcuL3NvdXJjZS1zZXQtbG9hZGluZy5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNvdXJjZVNldExvYWRpbmdDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U291cmNlU2V0TG9hZGluZ0NvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU291cmNlU2V0TG9hZGluZ0NvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU2V0U291cmNlTG9hZGluZ0V2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSkpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZW5hYmxlZCA9IGNvbW1hbmQuaXNFbmFibGVkKCksXG5cdFx0XHRzb3VyY2UgPSBhZ2dyZWdhdGUuZ2V0U291cmNlKCk7XG5cblx0XHRzb3VyY2Uuc2V0TG9hZGluZyhlbmFibGVkKTtcblx0fVxuXG59XG4iXX0=