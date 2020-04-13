/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { PagesizeChangedEvent } from '../change-pagesize/pagesize-changed.event';
var PagesizeChangedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(PagesizeChangedAggregateEvent, _super);
    function PagesizeChangedAggregateEvent(structureId) {
        return _super.call(this, structureId, 'PagesizeChangedAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    PagesizeChangedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new PagesizeChangedEvent(this.getAggregateId());
    };
    return PagesizeChangedAggregateEvent;
}(AggregateEvent));
export { PagesizeChangedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNpemUtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3BhZ2luZy9wYWdlc2l6ZS9wYWdlc2l6ZS1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUdqRjtJQUFtRCx5REFBMkI7SUFFN0UsdUNBQVksV0FBd0I7ZUFDbkMsa0JBQU0sV0FBVyxFQUFFLCtCQUErQixDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCxxREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVGLG9DQUFDO0FBQUQsQ0FBQyxBQVZELENBQW1ELGNBQWMsR0FVaEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uL2NoYW5nZS1wYWdlc2l6ZS9wYWdlc2l6ZS1jaGFuZ2VkLmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFBhZ2VzaXplQ2hhbmdlZEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cblxufVxuIl19