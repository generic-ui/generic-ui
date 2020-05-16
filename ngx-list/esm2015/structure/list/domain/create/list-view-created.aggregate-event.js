/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { ListViewCreatedEvent } from './list-view-created.event';
export class ListViewCreatedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'ListViewCreatedAggregateEvent');
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new ListViewCreatedEvent(this.getAggregateId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9kb21haW4vY3JlYXRlL2xpc3Qtdmlldy1jcmVhdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR2pFLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxjQUEwQjs7OztJQUU1RSxZQUFZLFdBQXVCO1FBQ2xDLEtBQUssQ0FBQyxXQUFXLEVBQUUsK0JBQStCLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0NyZWF0ZWRFdmVudCB9IGZyb20gJy4vbGlzdC12aWV3LWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uL2xpc3Qtdmlldy5pZCc7XG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NyZWF0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PExpc3RWaWV3SWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogTGlzdFZpZXdJZCkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnTGlzdFZpZXdDcmVhdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8TGlzdFZpZXdJZD4ge1xuXHRcdHJldHVybiBuZXcgTGlzdFZpZXdDcmVhdGVkRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0fVxufVxuIl19