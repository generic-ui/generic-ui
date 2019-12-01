/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { OriginSetEvent } from './origin/set-origin/origin-set.event';
import { StructureSourceItemEditedEvent } from './origin/edit/structure.source-item-edited.event';
import { StructureAggregationsChangedEvent } from '../../structure/command/aggregation/structure.aggregations-changed.event';
export class StructureSourceDomainEventPublisher {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} events
     * @return {?}
     */
    publish(events) {
        events.forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.publishEvent(event);
        }));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    publishEvent(event) {
        if (event.getType() === 'StructureOriginChangedAggregateEvent') {
            /** @type {?} */
            const structureOriginChangedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            const domainEvent = new OriginSetEvent(structureOriginChangedAggregateEvent.getAggregateId(), structureOriginChangedAggregateEvent.getOrigin());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructureSourceItemEditedAggregateEvent') {
            /** @type {?} */
            const structureSourceItemEditedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            const domainEvent = new StructureSourceItemEditedEvent(structureSourceItemEditedAggregateEvent.getAggregateId(), structureSourceItemEditedAggregateEvent.getBeforeItem(), structureSourceItemEditedAggregateEvent.getAfterItem());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructureAggregationsChangedAggregateEvent') {
            /** @type {?} */
            const structureAggregationsChangedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            const domainEvent = new StructureAggregationsChangedEvent(structureAggregationsChangedAggregateEvent.getAggregateId(), structureAggregationsChangedAggregateEvent.getAggregations());
            this.domainEventPublisher.publish(domainEvent);
        }
    }
}
StructureSourceDomainEventPublisher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSourceDomainEventPublisher.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceDomainEventPublisher.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9zdHJ1Y3R1cmUuc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFrQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUVsRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUk3SCxNQUFNLE9BQU8sbUNBQW1DOzs7O0lBRS9DLFlBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzlELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQXFDO1FBRTVDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEtBQXFCO1FBRXpDLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLHNDQUFzQyxFQUFFOztrQkFFekQsb0NBQW9DLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQXdDLENBQUM7O2tCQUV0RixXQUFXLEdBQUcsSUFBSSxjQUFjLENBQUMsb0NBQW9DLENBQUMsY0FBYyxFQUFFLEVBQUUsb0NBQW9DLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFL0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLHlDQUF5QyxFQUFFOztrQkFFNUQsdUNBQXVDLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQTJDLENBQUM7O2tCQUU1RixXQUFXLEdBQUcsSUFBSSw4QkFBOEIsQ0FDckQsdUNBQXVDLENBQUMsY0FBYyxFQUFFLEVBQ3hELHVDQUF1QyxDQUFDLGFBQWEsRUFBRSxFQUN2RCx1Q0FBdUMsQ0FBQyxZQUFZLEVBQUUsQ0FDdEQ7WUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssNENBQTRDLEVBQUU7O2tCQUUvRCwwQ0FBMEMsR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBOEMsQ0FBQzs7a0JBRWxHLFdBQVcsR0FBRyxJQUFJLGlDQUFpQyxDQUFDLDBDQUEwQyxDQUFDLGNBQWMsRUFBRSxFQUFFLDBDQUEwQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRXBMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FFL0M7SUFDRixDQUFDOzs7WUE5Q0QsVUFBVTs7OztZQVZjLG9CQUFvQjs7Ozs7OztJQWFoQyxtRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgT3JpZ2luU2V0RXZlbnQgfSBmcm9tICcuL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQgfSBmcm9tICcuL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9ucy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb25zLWNoYW5nZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdHB1Ymxpc2goZXZlbnRzOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pik6IHZvaWQge1xuXG5cdFx0ZXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG5cdFx0XHR0aGlzLnB1Ymxpc2hFdmVudChldmVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFdmVudChldmVudDogQWdncmVnYXRlRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5nZXRUeXBlKCkgPT09ICdTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQnKSB7XG5cblx0XHRcdGNvbnN0IHN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCA9IChldmVudCBhcyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQpO1xuXG5cdFx0XHRjb25zdCBkb21haW5FdmVudCA9IG5ldyBPcmlnaW5TZXRFdmVudChzdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgc3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50LmdldE9yaWdpbigpKTtcblxuXHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50KTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQuZ2V0VHlwZSgpID09PSAnU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50Jykge1xuXG5cdFx0XHRjb25zdCBzdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQgPSAoZXZlbnQgYXMgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50KTtcblxuXHRcdFx0Y29uc3QgZG9tYWluRXZlbnQgPSBuZXcgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50KFxuXHRcdFx0XHRzdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdFx0c3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50LmdldEJlZm9yZUl0ZW0oKSxcblx0XHRcdFx0c3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50LmdldEFmdGVySXRlbSgpXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnQpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5nZXRUeXBlKCkgPT09ICdTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQnKSB7XG5cblx0XHRcdGNvbnN0IHN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCA9IChldmVudCBhcyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQpO1xuXG5cdFx0XHRjb25zdCBkb21haW5FdmVudCA9IG5ldyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkRXZlbnQoc3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRBZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGlvbnMoKSk7XG5cblx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudCk7XG5cblx0XHR9XG5cdH1cblxufVxuIl19