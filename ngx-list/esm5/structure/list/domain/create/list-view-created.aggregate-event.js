/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { ListViewCreatedEvent } from './list-view-created.event';
var ListViewCreatedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewCreatedAggregateEvent, _super);
    function ListViewCreatedAggregateEvent(aggregateId) {
        return _super.call(this, aggregateId, 'ListViewCreatedAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    ListViewCreatedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new ListViewCreatedEvent(this.getAggregateId());
    };
    return ListViewCreatedAggregateEvent;
}(AggregateEvent));
export { ListViewCreatedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9kb21haW4vY3JlYXRlL2xpc3Qtdmlldy1jcmVhdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdqRTtJQUFtRCx5REFBMEI7SUFFNUUsdUNBQVksV0FBdUI7ZUFDbEMsa0JBQU0sV0FBVyxFQUFFLCtCQUErQixDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCxxREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNGLG9DQUFDO0FBQUQsQ0FBQyxBQVRELENBQW1ELGNBQWMsR0FTaEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0NyZWF0ZWRFdmVudCB9IGZyb20gJy4vbGlzdC12aWV3LWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uL2xpc3Qtdmlldy5pZCc7XG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NyZWF0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PExpc3RWaWV3SWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogTGlzdFZpZXdJZCkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnTGlzdFZpZXdDcmVhdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8TGlzdFZpZXdJZD4ge1xuXHRcdHJldHVybiBuZXcgTGlzdFZpZXdDcmVhdGVkRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0fVxufVxuIl19