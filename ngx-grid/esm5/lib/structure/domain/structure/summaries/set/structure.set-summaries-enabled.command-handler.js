/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureSourceDomainEventPublisher } from '../../../source/structure.source.domain-event.publisher';
import { StructureSetSummariesEnabledCommand } from './structure.set-summaries-enabled.command';
import { StructureSummariesEnabledSetEvent } from './structure.summaries-enabled-set.event';
var StructureSetSummariesEnabledCommandHandler = /** @class */ (function () {
    function StructureSetSummariesEnabledCommandHandler(structureSourceDomainEventPublisher, domainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    StructureSetSummariesEnabledCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return StructureSetSummariesEnabledCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureSetSummariesEnabledCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var enabled = command.isEnabled();
        /** @type {?} */
        var aggregateEvents = aggregate.getEvents();
        this.domainEventPublisher.publish(new StructureSummariesEnabledSetEvent(command.getAggregateId(), enabled));
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    StructureSetSummariesEnabledCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var enabled = command.isEnabled();
        structure.setSummariesEnabled(enabled);
    };
    StructureSetSummariesEnabledCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetSummariesEnabledCommandHandler.ctorParameters = function () { return [
        { type: StructureSourceDomainEventPublisher },
        { type: DomainEventPublisher }
    ]; };
    return StructureSetSummariesEnabledCommandHandler;
}());
export { StructureSetSummariesEnabledCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetSummariesEnabledCommandHandler.prototype.structureSourceDomainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    StructureSetSummariesEnabledCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1zdW1tYXJpZXMtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zdW1tYXJpZXMvc2V0L3N0cnVjdHVyZS5zZXQtc3VtbWFyaWVzLWVuYWJsZWQuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBa0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM5RyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUk1RjtJQUdDLG9EQUE2QixtQ0FBd0UsRUFDMUYsb0JBQTBDO1FBRHhCLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDMUYseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNyRCxDQUFDOzs7O0lBRUQsK0RBQVU7OztJQUFWO1FBQ0MsT0FBTyxtQ0FBbUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCx3RUFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBNEM7O1lBRXhGLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFOztZQUNsQyxlQUFlLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTtRQUV4QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksaUNBQWlDLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxvRUFBZTs7Ozs7SUFBZixVQUFnQixTQUE2QixFQUFFLE9BQTRDOztZQUVwRixPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUVuQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBekJELFVBQVU7Ozs7Z0JBTkYsbUNBQW1DO2dCQUZuQixvQkFBb0I7O0lBbUM3QyxpREFBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLDBDQUEwQzs7Ozs7O0lBRTFDLHlGQUF5Rjs7Ozs7SUFDbEcsMEVBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9zdHJ1Y3R1cmUuc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmQgfSBmcm9tICcuL3N0cnVjdHVyZS5zZXQtc3VtbWFyaWVzLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMtZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNldFN1bW1hcmllc0VuYWJsZWRDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyOiBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogVHlwZTxTdHJ1Y3R1cmVTZXRTdW1tYXJpZXNFbmFibGVkQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVTZXRTdW1tYXJpZXNFbmFibGVkQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFN0cnVjdHVyZVNldFN1bW1hcmllc0VuYWJsZWRDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gY29tbWFuZC5pc0VuYWJsZWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZUV2ZW50cyA9IGFnZ3JlZ2F0ZS5nZXRFdmVudHMoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSwgZW5hYmxlZCkpO1xuXHRcdHRoaXMuc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChhZ2dyZWdhdGVFdmVudHMpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTdHJ1Y3R1cmVTZXRTdW1tYXJpZXNFbmFibGVkQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZW5hYmxlZCA9IGNvbW1hbmQuaXNFbmFibGVkKCk7XG5cblx0XHRzdHJ1Y3R1cmUuc2V0U3VtbWFyaWVzRW5hYmxlZChlbmFibGVkKTtcblx0fVxuXG59XG4iXX0=