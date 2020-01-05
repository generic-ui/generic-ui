/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { OriginSetEvent } from './origin/set-origin/origin-set.event';
import { StructureSourceItemEditedEvent } from './origin/edit/structure.source-item-edited.event';
import { StructureAggregationsChangedEvent } from '../../structure/command/aggregation/structure.aggregations-changed.event';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9zdHJ1Y3R1cmUuc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFrQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUVsRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUU3SCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUdyRztJQUdDLDZDQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7OztJQUVELHFEQUFPOzs7O0lBQVAsVUFBUSxNQUFxQztRQUE3QyxpQkFLQztRQUhBLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUFLO1lBQ3BCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTywwREFBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBcUI7UUFFekMsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssc0NBQXNDLEVBQUU7O2dCQUV6RCxvQ0FBb0MsR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBd0MsQ0FBQzs7Z0JBRXRGLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBQyxvQ0FBb0MsQ0FBQyxjQUFjLEVBQUUsRUFBRSxvQ0FBb0MsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUUvSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUsseUNBQXlDLEVBQUU7O2dCQUU1RCx1Q0FBdUMsR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBMkMsQ0FBQzs7Z0JBRTVGLFdBQVcsR0FBRyxJQUFJLDhCQUE4QixDQUNyRCx1Q0FBdUMsQ0FBQyxjQUFjLEVBQUUsRUFDeEQsdUNBQXVDLENBQUMsYUFBYSxFQUFFLEVBQ3ZELHVDQUF1QyxDQUFDLFlBQVksRUFBRSxDQUN0RDtZQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyw0Q0FBNEMsRUFBRTs7Z0JBRS9ELDBDQUEwQyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUE4QyxDQUFDOztnQkFFbEcsV0FBVyxHQUFHLElBQUksaUNBQWlDLENBQUMsMENBQTBDLENBQUMsY0FBYyxFQUFFLEVBQUUsMENBQTBDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFcEwsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUUvQztRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLDRDQUE0QyxFQUFFOztnQkFFL0QsMENBQTBDLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQThDLENBQUM7O2dCQUVsRyxXQUFXLEdBQUcsSUFBSSxpQ0FBaUMsQ0FBQywwQ0FBMEMsQ0FBQyxjQUFjLEVBQUUsRUFBRSwwQ0FBMEMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBRXJMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7SUFDRixDQUFDOztnQkF2REQsVUFBVTs7OztnQkFaYyxvQkFBb0I7O0lBcUU3QywwQ0FBQztDQUFBLEFBekRELElBeURDO1NBeERZLG1DQUFtQzs7Ozs7O0lBRW5DLG1FQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9vcmlnaW4vc3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4vb3JpZ2luL3NldC1vcmlnaW4vb3JpZ2luLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudCB9IGZyb20gJy4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb25zLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbnMtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1lbnRpdGllcy1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCB9IGZyb20gJy4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0cHVibGlzaChldmVudHM6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+KTogdm9pZCB7XG5cblx0XHRldmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcblx0XHRcdHRoaXMucHVibGlzaEV2ZW50KGV2ZW50KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEV2ZW50KGV2ZW50OiBBZ2dyZWdhdGVFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50LmdldFR5cGUoKSA9PT0gJ1N0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCcpIHtcblxuXHRcdFx0Y29uc3Qgc3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50ID0gKGV2ZW50IGFzIFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCk7XG5cblx0XHRcdGNvbnN0IGRvbWFpbkV2ZW50ID0gbmV3IE9yaWdpblNldEV2ZW50KHN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBzdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQuZ2V0T3JpZ2luKCkpO1xuXG5cdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnQpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5nZXRUeXBlKCkgPT09ICdTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQnKSB7XG5cblx0XHRcdGNvbnN0IHN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudCA9IChldmVudCBhcyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQpO1xuXG5cdFx0XHRjb25zdCBkb21haW5FdmVudCA9IG5ldyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQoXG5cdFx0XHRcdHN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQuZ2V0QmVmb3JlSXRlbSgpLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQuZ2V0QWZ0ZXJJdGVtKClcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LmdldFR5cGUoKSA9PT0gJ1N0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCcpIHtcblxuXHRcdFx0Y29uc3Qgc3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50ID0gKGV2ZW50IGFzIFN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCk7XG5cblx0XHRcdGNvbnN0IGRvbWFpbkV2ZW50ID0gbmV3IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRFdmVudChzdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgc3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0aW9ucygpKTtcblxuXHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50KTtcblxuXHRcdH1cblxuXHRcdGlmIChldmVudC5nZXRUeXBlKCkgPT09ICdTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQnKSB7XG5cblx0XHRcdGNvbnN0IHN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCA9IChldmVudCBhcyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQpO1xuXG5cdFx0XHRjb25zdCBkb21haW5FdmVudCA9IG5ldyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQoc3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudC5nZXRQcmVwYXJlZEl0ZW1zKCkpO1xuXG5cdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=