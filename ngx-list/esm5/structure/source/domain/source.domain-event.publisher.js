/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { OriginSetEvent } from './origin/set-origin/origin-set.event';
import { StructureSourceItemEditedEvent } from './origin/edit/structure.source-item-edited.event';
import { StructureSummariesChangedAggregateEventName } from '../../core/domain/summaries/structure.summaries-changed.aggregate-event';
import { StructureSummariesChangedEvent } from '../../core/domain/summaries/structure.summaries-changed.event';
import { StructurePreparedEntitiesSetEvent } from './prepared/structure.prepared-entities-set.event';
var SourceDomainEventPublisher = /** @class */ (function () {
    function SourceDomainEventPublisher(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} events
     * @return {?}
     */
    SourceDomainEventPublisher.prototype.publish = /**
     * @param {?} events
     * @return {?}
     */
    function (events) {
        var _this = this;
        events.forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.publishEvent(event);
        }));
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SourceDomainEventPublisher.prototype.publishEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.getType() === 'StructureOriginChangedAggregateEvent') {
            /** @type {?} */
            var structureOriginChangedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            var domainEvent = new OriginSetEvent(structureOriginChangedAggregateEvent.getAggregateId(), structureOriginChangedAggregateEvent.getOrigin());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructureSourceItemEditedAggregateEvent') {
            /** @type {?} */
            var structureSourceItemEditedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            var domainEvent = new StructureSourceItemEditedEvent(structureSourceItemEditedAggregateEvent.getAggregateId(), structureSourceItemEditedAggregateEvent.getBeforeItem(), structureSourceItemEditedAggregateEvent.getAfterItem());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === StructureSummariesChangedAggregateEventName) {
            /** @type {?} */
            var structureSummariesChangedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            var domainEvent = new StructureSummariesChangedEvent(structureSummariesChangedAggregateEvent.getAggregateId(), structureSummariesChangedAggregateEvent.getSummaries());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructurePreparedEntitiesSetAggregateEvent') {
            /** @type {?} */
            var structurePreparedEntitiesSetAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            var domainEvent = new StructurePreparedEntitiesSetEvent(structurePreparedEntitiesSetAggregateEvent.getAggregateId(), structurePreparedEntitiesSetAggregateEvent.getPreparedItems());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'UniqueFilterCalculatedAggregateEvent') {
            /** @type {?} */
            var uniqueFilterCalculatedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            var domainEvent = uniqueFilterCalculatedAggregateEvent.toDomainEvent();
            this.domainEventPublisher.publish(domainEvent);
        }
    };
    SourceDomainEventPublisher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceDomainEventPublisher.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SourceDomainEventPublisher;
}());
export { SourceDomainEventPublisher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceDomainEventPublisher.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL3NvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBa0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUcxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDbEcsT0FBTyxFQUVOLDJDQUEyQyxFQUMzQyxNQUFNLHlFQUF5RSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRS9HLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBS3JHO0lBR0Msb0NBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzlELENBQUM7Ozs7O0lBRUQsNENBQU87Ozs7SUFBUCxVQUFRLE1BQWtEO1FBQTFELGlCQUtDO1FBSEEsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEtBQUs7WUFDcEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLGlEQUFZOzs7OztJQUFwQixVQUFxQixLQUFrQztRQUV0RCxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxzQ0FBc0MsRUFBRTs7Z0JBRXpELG9DQUFvQyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUF3QyxDQUFDOztnQkFFdEYsV0FBVyxHQUFHLElBQUksY0FBYyxDQUFDLG9DQUFvQyxDQUFDLGNBQWMsRUFBRSxFQUFFLG9DQUFvQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRS9JLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyx5Q0FBeUMsRUFBRTs7Z0JBRTVELHVDQUF1QyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUEyQyxDQUFDOztnQkFFNUYsV0FBVyxHQUFHLElBQUksOEJBQThCLENBQ3JELHVDQUF1QyxDQUFDLGNBQWMsRUFBRSxFQUN4RCx1Q0FBdUMsQ0FBQyxhQUFhLEVBQUUsRUFDdkQsdUNBQXVDLENBQUMsWUFBWSxFQUFFLENBQ3REO1lBRUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLDJDQUEyQyxFQUFFOztnQkFFOUQsdUNBQXVDLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQTJDLENBQUM7O2dCQUU1RixXQUFXLEdBQUcsSUFBSSw4QkFBOEIsQ0FBQyx1Q0FBdUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSx1Q0FBdUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUV4SyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBRS9DO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssNENBQTRDLEVBQUU7O2dCQUUvRCwwQ0FBMEMsR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBOEMsQ0FBQzs7Z0JBRWxHLFdBQVcsR0FBRyxJQUFJLGlDQUFpQyxDQUFDLDBDQUEwQyxDQUFDLGNBQWMsRUFBRSxFQUFFLDBDQUEwQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFFckwsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLHNDQUFzQyxFQUFFOztnQkFFekQsb0NBQW9DLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQXdDLENBQUM7O2dCQUV0RixXQUFXLEdBQUcsb0NBQW9DLENBQUMsYUFBYSxFQUFFO1lBRXhFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7SUFDRixDQUFDOztnQkFoRUQsVUFBVTs7OztnQkFqQmMsb0JBQW9COztJQW1GN0MsaUNBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQWpFWSwwQkFBMEI7Ozs7OztJQUUxQiwwREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgT3JpZ2luU2V0RXZlbnQgfSBmcm9tICcuL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQgfSBmcm9tICcuL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuZXZlbnQnO1xuaW1wb3J0IHtcblx0U3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50LFxuXHRTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnROYW1lXG59IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtZW50aXRpZXMtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQgfSBmcm9tICcuL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1lbnRpdGllcy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vZmlsdGVyL2RvbWFpbi91bmlxdWUvY2FsY3VsYXRlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdHB1Ymxpc2goZXZlbnRzOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4pOiB2b2lkIHtcblxuXHRcdGV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuXHRcdFx0dGhpcy5wdWJsaXNoRXZlbnQoZXZlbnQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRXZlbnQoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPik6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50LmdldFR5cGUoKSA9PT0gJ1N0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCcpIHtcblxuXHRcdFx0Y29uc3Qgc3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50ID0gKGV2ZW50IGFzIFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCk7XG5cblx0XHRcdGNvbnN0IGRvbWFpbkV2ZW50ID0gbmV3IE9yaWdpblNldEV2ZW50KHN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBzdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQuZ2V0T3JpZ2luKCkpO1xuXG5cdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnQpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5nZXRUeXBlKCkgPT09ICdTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQnKSB7XG5cblx0XHRcdGNvbnN0IHN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudCA9IChldmVudCBhcyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQpO1xuXG5cdFx0XHRjb25zdCBkb21haW5FdmVudCA9IG5ldyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQoXG5cdFx0XHRcdHN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQuZ2V0QmVmb3JlSXRlbSgpLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQuZ2V0QWZ0ZXJJdGVtKClcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LmdldFR5cGUoKSA9PT0gU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50TmFtZSkge1xuXG5cdFx0XHRjb25zdCBzdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnQgPSAoZXZlbnQgYXMgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KTtcblxuXHRcdFx0Y29uc3QgZG9tYWluRXZlbnQgPSBuZXcgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRBZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBzdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnQuZ2V0U3VtbWFyaWVzKCkpO1xuXG5cdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnQpO1xuXG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LmdldFR5cGUoKSA9PT0gJ1N0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCcpIHtcblxuXHRcdFx0Y29uc3Qgc3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50ID0gKGV2ZW50IGFzIFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCk7XG5cblx0XHRcdGNvbnN0IGRvbWFpbkV2ZW50ID0gbmV3IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudChzdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgc3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50LmdldFByZXBhcmVkSXRlbXMoKSk7XG5cblx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LmdldFR5cGUoKSA9PT0gJ1VuaXF1ZUZpbHRlckNhbGN1bGF0ZWRBZ2dyZWdhdGVFdmVudCcpIHtcblxuXHRcdFx0Y29uc3QgdW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEFnZ3JlZ2F0ZUV2ZW50ID0gKGV2ZW50IGFzIFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRBZ2dyZWdhdGVFdmVudCk7XG5cblx0XHRcdGNvbnN0IGRvbWFpbkV2ZW50ID0gdW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEFnZ3JlZ2F0ZUV2ZW50LnRvRG9tYWluRXZlbnQoKTtcblxuXHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50KTtcblx0XHR9XG5cdH1cblxufVxuIl19