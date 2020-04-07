/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { OriginSetEvent } from './origin/set-origin/origin-set.event';
import { StructureSourceItemEditedEvent } from './origin/edit/structure.source-item-edited.event';
import { StructureAggregationsChangedEvent } from '../structure/aggregation/structure.aggregations-changed.event';
import { StructurePreparedEntitiesSetEvent } from './prepared/structure.prepared-entities-set.event';
var StructureSourceDomainEventPublisher = /** @class */ (function () {
    function StructureSourceDomainEventPublisher(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} events
     * @return {?}
     */
    StructureSourceDomainEventPublisher.prototype.publish = /**
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
    StructureSourceDomainEventPublisher.prototype.publishEvent = /**
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
        if (event.getType() === 'StructureAggregationsChangedAggregateEvent') {
            /** @type {?} */
            var structureAggregationsChangedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            var domainEvent = new StructureAggregationsChangedEvent(structureAggregationsChangedAggregateEvent.getAggregateId(), structureAggregationsChangedAggregateEvent.getAggregations());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructurePreparedEntitiesSetAggregateEvent') {
            /** @type {?} */
            var structurePreparedEntitiesSetAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            var domainEvent = new StructurePreparedEntitiesSetEvent(structurePreparedEntitiesSetAggregateEvent.getAggregateId(), structurePreparedEntitiesSetAggregateEvent.getPreparedItems());
            this.domainEventPublisher.publish(domainEvent);
        }
    };
    StructureSourceDomainEventPublisher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSourceDomainEventPublisher.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return StructureSourceDomainEventPublisher;
}());
export { StructureSourceDomainEventPublisher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceDomainEventPublisher.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2Uvc3RydWN0dXJlLnNvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBa0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUcxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFbEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sK0RBQStELENBQUM7QUFFbEgsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJckc7SUFHQyw2Q0FBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7Ozs7SUFFRCxxREFBTzs7OztJQUFQLFVBQVEsTUFBa0Q7UUFBMUQsaUJBS0M7UUFIQSxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBSztZQUNwQixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sMERBQVk7Ozs7O0lBQXBCLFVBQXFCLEtBQWtDO1FBRXRELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLHNDQUFzQyxFQUFFOztnQkFFekQsb0NBQW9DLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQXdDLENBQUM7O2dCQUV0RixXQUFXLEdBQUcsSUFBSSxjQUFjLENBQUMsb0NBQW9DLENBQUMsY0FBYyxFQUFFLEVBQUUsb0NBQW9DLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFL0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLHlDQUF5QyxFQUFFOztnQkFFNUQsdUNBQXVDLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQTJDLENBQUM7O2dCQUU1RixXQUFXLEdBQUcsSUFBSSw4QkFBOEIsQ0FDckQsdUNBQXVDLENBQUMsY0FBYyxFQUFFLEVBQ3hELHVDQUF1QyxDQUFDLGFBQWEsRUFBRSxFQUN2RCx1Q0FBdUMsQ0FBQyxZQUFZLEVBQUUsQ0FDdEQ7WUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssNENBQTRDLEVBQUU7O2dCQUUvRCwwQ0FBMEMsR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBOEMsQ0FBQzs7Z0JBRWxHLFdBQVcsR0FBRyxJQUFJLGlDQUFpQyxDQUFDLDBDQUEwQyxDQUFDLGNBQWMsRUFBRSxFQUFFLDBDQUEwQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRXBMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FFL0M7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyw0Q0FBNEMsRUFBRTs7Z0JBRS9ELDBDQUEwQyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUE4QyxDQUFDOztnQkFFbEcsV0FBVyxHQUFHLElBQUksaUNBQWlDLENBQUMsMENBQTBDLENBQUMsY0FBYyxFQUFFLEVBQUUsMENBQTBDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUVyTCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO0lBQ0YsQ0FBQzs7Z0JBdkRELFVBQVU7Ozs7Z0JBYmMsb0JBQW9COztJQXNFN0MsMENBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXhEWSxtQ0FBbUM7Ozs7OztJQUVuQyxtRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgT3JpZ2luU2V0RXZlbnQgfSBmcm9tICcuL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQgfSBmcm9tICcuL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbnMtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbnMtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1lbnRpdGllcy1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCB9IGZyb20gJy4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0cHVibGlzaChldmVudHM6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+Pik6IHZvaWQge1xuXG5cdFx0ZXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG5cdFx0XHR0aGlzLnB1Ymxpc2hFdmVudChldmVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFdmVudChldmVudDogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQuZ2V0VHlwZSgpID09PSAnU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50Jykge1xuXG5cdFx0XHRjb25zdCBzdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQgPSAoZXZlbnQgYXMgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KTtcblxuXHRcdFx0Y29uc3QgZG9tYWluRXZlbnQgPSBuZXcgT3JpZ2luU2V0RXZlbnQoc3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudC5nZXRPcmlnaW4oKSk7XG5cblx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LmdldFR5cGUoKSA9PT0gJ1N0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudCcpIHtcblxuXHRcdFx0Y29uc3Qgc3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50ID0gKGV2ZW50IGFzIFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudCk7XG5cblx0XHRcdGNvbnN0IGRvbWFpbkV2ZW50ID0gbmV3IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudChcblx0XHRcdFx0c3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHRcdHN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudC5nZXRCZWZvcmVJdGVtKCksXG5cdFx0XHRcdHN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudC5nZXRBZnRlckl0ZW0oKVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50KTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQuZ2V0VHlwZSgpID09PSAnU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50Jykge1xuXG5cdFx0XHRjb25zdCBzdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQgPSAoZXZlbnQgYXMgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KTtcblxuXHRcdFx0Y29uc3QgZG9tYWluRXZlbnQgPSBuZXcgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRBZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBzdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRpb25zKCkpO1xuXG5cdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnQpO1xuXG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LmdldFR5cGUoKSA9PT0gJ1N0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCcpIHtcblxuXHRcdFx0Y29uc3Qgc3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50ID0gKGV2ZW50IGFzIFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCk7XG5cblx0XHRcdGNvbnN0IGRvbWFpbkV2ZW50ID0gbmV3IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudChzdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgc3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50LmdldFByZXBhcmVkSXRlbXMoKSk7XG5cblx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==