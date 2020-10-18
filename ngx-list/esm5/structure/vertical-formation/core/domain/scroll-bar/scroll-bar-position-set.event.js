/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
var ScrollBarPositionSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ScrollBarPositionSetEvent, _super);
    function ScrollBarPositionSetEvent(aggregateId, position) {
        var _this = _super.call(this, aggregateId, 'ScrollBarPositionSetEvent') || this;
        _this.position = position;
        return _this;
    }
    /**
     * @return {?}
     */
    ScrollBarPositionSetEvent.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        return this.position;
    };
    return ScrollBarPositionSetEvent;
}(StructureDomainEvent));
export { ScrollBarPositionSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollBarPositionSetEvent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2Nyb2xsLWJhci9zY3JvbGwtYmFyLXBvc2l0aW9uLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXRGO0lBQStDLHFEQUFvQjtJQUVsRSxtQ0FBWSxXQUF3QixFQUNoQixRQUFnQjtRQURwQyxZQUVDLGtCQUFNLFdBQVcsRUFBRSwyQkFBMkIsQ0FBQyxTQUMvQztRQUZtQixjQUFRLEdBQVIsUUFBUSxDQUFROztJQUVwQyxDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFDRixnQ0FBQztBQUFELENBQUMsQUFWRCxDQUErQyxvQkFBb0IsR0FVbEU7Ozs7Ozs7SUFQRyw2Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcG9zaXRpb246IG51bWJlcikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbjtcblx0fVxufVxuIl19