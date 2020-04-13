/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { PageChangedEvent } from './page-changed.event';
export class PageChangedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} structureId
     */
    constructor(structureId) {
        super(structureId, 'PageChangedAggregateEvent');
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new PageChangedEvent(this.getAggregateId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL3BhZ2UvcGFnZS1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3hELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxjQUEyQjs7OztJQUV6RSxZQUFZLFdBQXdCO1FBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4vcGFnZS1jaGFuZ2VkLmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgUGFnZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdQYWdlQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBQYWdlQ2hhbmdlZEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cblxufVxuIl19