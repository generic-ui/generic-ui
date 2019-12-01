/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { OriginSetEvent } from './origin/set-origin/origin-set.event';
import { StructureSourceItemEditedEvent } from './origin/edit/structure.source-item-edited.event';
import { StructureAggregationsChangedEvent } from '../../structure/command/aggregation/structure.aggregations-changed.event';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9zdHJ1Y3R1cmUuc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFrQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUVsRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUc3SDtJQUdDLDZDQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7OztJQUVELHFEQUFPOzs7O0lBQVAsVUFBUSxNQUFxQztRQUE3QyxpQkFLQztRQUhBLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUFLO1lBQ3BCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTywwREFBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBcUI7UUFFekMsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssc0NBQXNDLEVBQUU7O2dCQUV6RCxvQ0FBb0MsR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBd0MsQ0FBQzs7Z0JBRXRGLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBQyxvQ0FBb0MsQ0FBQyxjQUFjLEVBQUUsRUFBRSxvQ0FBb0MsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUUvSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUsseUNBQXlDLEVBQUU7O2dCQUU1RCx1Q0FBdUMsR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBMkMsQ0FBQzs7Z0JBRTVGLFdBQVcsR0FBRyxJQUFJLDhCQUE4QixDQUNyRCx1Q0FBdUMsQ0FBQyxjQUFjLEVBQUUsRUFDeEQsdUNBQXVDLENBQUMsYUFBYSxFQUFFLEVBQ3ZELHVDQUF1QyxDQUFDLFlBQVksRUFBRSxDQUN0RDtZQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyw0Q0FBNEMsRUFBRTs7Z0JBRS9ELDBDQUEwQyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUE4QyxDQUFDOztnQkFFbEcsV0FBVyxHQUFHLElBQUksaUNBQWlDLENBQUMsMENBQTBDLENBQUMsY0FBYyxFQUFFLEVBQUUsMENBQTBDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFcEwsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUUvQztJQUNGLENBQUM7O2dCQTlDRCxVQUFVOzs7O2dCQVZjLG9CQUFvQjs7SUEwRDdDLDBDQUFDO0NBQUEsQUFoREQsSUFnREM7U0EvQ1ksbUNBQW1DOzs7Ozs7SUFFbkMsbUVBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL29yaWdpbi9zdHJ1Y3R1cmUub3JpZ2luLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IE9yaWdpblNldEV2ZW50IH0gZnJvbSAnLi9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50IH0gZnJvbSAnLi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbnMtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9ucy1jaGFuZ2VkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRwdWJsaXNoKGV2ZW50czogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4pOiB2b2lkIHtcblxuXHRcdGV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuXHRcdFx0dGhpcy5wdWJsaXNoRXZlbnQoZXZlbnQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRXZlbnQoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQuZ2V0VHlwZSgpID09PSAnU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50Jykge1xuXG5cdFx0XHRjb25zdCBzdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQgPSAoZXZlbnQgYXMgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KTtcblxuXHRcdFx0Y29uc3QgZG9tYWluRXZlbnQgPSBuZXcgT3JpZ2luU2V0RXZlbnQoc3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudC5nZXRPcmlnaW4oKSk7XG5cblx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LmdldFR5cGUoKSA9PT0gJ1N0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudCcpIHtcblxuXHRcdFx0Y29uc3Qgc3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50ID0gKGV2ZW50IGFzIFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudCk7XG5cblx0XHRcdGNvbnN0IGRvbWFpbkV2ZW50ID0gbmV3IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudChcblx0XHRcdFx0c3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHRcdHN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudC5nZXRCZWZvcmVJdGVtKCksXG5cdFx0XHRcdHN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudC5nZXRBZnRlckl0ZW0oKVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50KTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQuZ2V0VHlwZSgpID09PSAnU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50Jykge1xuXG5cdFx0XHRjb25zdCBzdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQgPSAoZXZlbnQgYXMgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KTtcblxuXHRcdFx0Y29uc3QgZG9tYWluRXZlbnQgPSBuZXcgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRBZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBzdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRpb25zKCkpO1xuXG5cdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnQpO1xuXG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==