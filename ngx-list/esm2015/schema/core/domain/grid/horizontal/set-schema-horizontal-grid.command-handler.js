/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaHorizontalGridCommand } from './set-schema-horizontal-grid.command';
export class SetSchemaHorizontalGridCommandHandler {
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
        return SetSchemaHorizontalGridCommand;
    }
    /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(schemaAggregate, command) {
        this.domainEventPublisher.publishFromAggregate(schemaAggregate);
    }
    /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(schemaAggregate, command) {
        /** @type {?} */
        const enabled = command.isEnabled();
        schemaAggregate.setHorizontalGrid(enabled);
    }
}
SetSchemaHorizontalGridCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetSchemaHorizontalGridCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaHorizontalGridCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvY29yZS9kb21haW4vZ3JpZC9ob3Jpem9udGFsL3NldC1zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFLdEYsTUFBTSxPQUFPLHFDQUFxQzs7OztJQUVqRCxZQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sOEJBQThCLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsZUFBZ0MsRUFBRSxPQUF1QztRQUM1RixJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLGVBQWdDLEVBQUUsT0FBdUM7O2NBRWxGLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRW5DLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUFuQkQsVUFBVTs7OztZQU4yQixvQkFBb0I7Ozs7Ozs7SUFTN0MscUVBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kIH0gZnJvbSAnLi9zZXQtc2NoZW1hLWhvcml6b250YWwtZ3JpZC5jb21tYW5kJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3NjaGVtYS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U2NoZW1hQWdncmVnYXRlLCBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhzY2hlbWFBZ2dyZWdhdGU6IFNjaGVtYUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShzY2hlbWFBZ2dyZWdhdGUpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKHNjaGVtYUFnZ3JlZ2F0ZTogU2NoZW1hQWdncmVnYXRlLCBjb21tYW5kOiBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGVuYWJsZWQgPSBjb21tYW5kLmlzRW5hYmxlZCgpO1xuXG5cdFx0c2NoZW1hQWdncmVnYXRlLnNldEhvcml6b250YWxHcmlkKGVuYWJsZWQpO1xuXHR9XG59XG4iXX0=