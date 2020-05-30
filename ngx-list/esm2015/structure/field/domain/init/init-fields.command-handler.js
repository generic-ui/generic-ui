/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { InitFieldsCommand } from './init-fields.command';
import { FieldsInitedEvent } from './fields-inited.event';
export class InitFieldsCommandHandler {
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
        return InitFieldsCommand;
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const fieldConfigs = command.getFieldConfigs();
        structure.createFields(fieldConfigs);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const fieldConfigs = command.getFieldConfigs();
        /** @type {?} */
        const aggregateEvents = aggregate.getEvents();
        /** @type {?} */
        const fieldTypes = ((/** @type {?} */ (aggregateEvents[0]))).getFields();
        this.domainEventPublisher.publish(new FieldsInitedEvent(command.getAggregateId(), fieldConfigs, fieldTypes));
    }
}
InitFieldsCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InitFieldsCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBa0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU8xRCxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBRXBDLFlBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzlELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsU0FBNkIsRUFBRSxPQUEwQjs7Y0FFbEUsWUFBWSxHQUF1QixPQUFPLENBQUMsZUFBZSxFQUFFO1FBRWxFLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBNkIsRUFBRSxPQUEwQjs7Y0FFdEUsWUFBWSxHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUU7O2NBRXhDLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztjQUV2QyxVQUFVLEdBQUcsQ0FBQyxtQkFBQSxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQThCLENBQUMsQ0FBQyxTQUFTLEVBQUU7UUFFakYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM5RyxDQUFDOzs7WUExQkQsVUFBVTs7OztZQVRjLG9CQUFvQjs7Ozs7OztJQVloQyx3REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kIH0gZnJvbSAnLi9pbml0LWZpZWxkcy5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi9maWVsZHMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9maWVsZHMtaW5pdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvZmllbGQuY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5pdEZpZWxkc0NvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBJbml0RmllbGRzQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8SW5pdEZpZWxkc0NvbW1hbmQ+IHtcblx0XHRyZXR1cm4gSW5pdEZpZWxkc0NvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc3RydWN0dXJlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IEluaXRGaWVsZHNDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPiA9IGNvbW1hbmQuZ2V0RmllbGRDb25maWdzKCk7XG5cblx0XHRzdHJ1Y3R1cmUuY3JlYXRlRmllbGRzKGZpZWxkQ29uZmlncyk7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBJbml0RmllbGRzQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRDb25maWdzID0gY29tbWFuZC5nZXRGaWVsZENvbmZpZ3MoKTtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUV2ZW50cyA9IGFnZ3JlZ2F0ZS5nZXRFdmVudHMoKTtcblxuXHRcdGNvbnN0IGZpZWxkVHlwZXMgPSAoYWdncmVnYXRlRXZlbnRzWzBdIGFzIEZpZWxkc0luaXRlZEFnZ3JlZ2F0ZUV2ZW50KS5nZXRGaWVsZHMoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgRmllbGRzSW5pdGVkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLCBmaWVsZENvbmZpZ3MsIGZpZWxkVHlwZXMpKTtcblx0fVxuXG5cbn1cbiJdfQ==