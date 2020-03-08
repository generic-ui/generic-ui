/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { ChangeSchemaTopHeaderCommand } from './change-schema-top-header.command';
import { SchemaTopHeaderChangedEvent } from './schema-top-header-changed.event';
export class ChangeSchemaTopHeaderCommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return ChangeSchemaTopHeaderCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const schema = aggregate.getSchema();
        /** @type {?} */
        const enabled = command.isEnabled();
        schema.setHeaderTop(enabled);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SchemaTopHeaderChangedEvent(command.getAggregateId()));
    }
}
ChangeSchemaTopHeaderCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ChangeSchemaTopHeaderCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangeSchemaTopHeaderCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    ChangeSchemaTopHeaderCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXNjaGVtYS10b3AtaGVhZGVyLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL2NvbW1hbmQvY29sdW1uLWhlYWRlci90b3AvY2hhbmdlLXNjaGVtYS10b3AtaGVhZGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWtCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLaEYsTUFBTSxPQUFPLG1DQUFtQzs7Ozs7SUFFL0MsWUFBb0IsNEJBQTBELEVBQ25FLG9CQUEwQztRQURqQyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQ25FLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDckQsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLDRCQUE0QixDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxTQUE2QixFQUFFLE9BQXFDOztjQUU3RSxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTs7Y0FDbkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFOUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxTQUE2QixFQUFFLE9BQXFDO1FBQ3ZGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7OztZQXJCRCxVQUFVOzs7O1lBTkYsNEJBQTRCO1lBRlosb0JBQW9COzs7Ozs7O0lBV2hDLDJFQUFrRTs7Ozs7SUFDM0UsbUVBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENoYW5nZVNjaGVtYVRvcEhlYWRlckNvbW1hbmQgfSBmcm9tICcuL2NoYW5nZS1zY2hlbWEtdG9wLWhlYWRlci5jb21tYW5kJztcbmltcG9ydCB7IFNjaGVtYVRvcEhlYWRlckNoYW5nZWRFdmVudCB9IGZyb20gJy4vc2NoZW1hLXRvcC1oZWFkZXItY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhbmdlU2NoZW1hVG9wSGVhZGVyQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIENoYW5nZVNjaGVtYVRvcEhlYWRlckNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8Q2hhbmdlU2NoZW1hVG9wSGVhZGVyQ29tbWFuZD4ge1xuXHRcdHJldHVybiBDaGFuZ2VTY2hlbWFUb3BIZWFkZXJDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBDaGFuZ2VTY2hlbWFUb3BIZWFkZXJDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBzY2hlbWEgPSBhZ2dyZWdhdGUuZ2V0U2NoZW1hKCksXG5cdFx0XHRlbmFibGVkID0gY29tbWFuZC5pc0VuYWJsZWQoKTtcblxuXHRcdHNjaGVtYS5zZXRIZWFkZXJUb3AoZW5hYmxlZCk7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBDaGFuZ2VTY2hlbWFUb3BIZWFkZXJDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTY2hlbWFUb3BIZWFkZXJDaGFuZ2VkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxufVxuIl19