/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { OriginSetEvent } from './set-origin/origin-set.event';
var StructureOriginChangedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureOriginChangedAggregateEvent, _super);
    function StructureOriginChangedAggregateEvent(aggregateId, origin) {
        var _this = _super.call(this, aggregateId, 'StructureOriginChangedAggregateEvent') || this;
        _this.origin = origin;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureOriginChangedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new OriginSetEvent(this.getAggregateId(), this.origin);
    };
    /**
     * @return {?}
     */
    StructureOriginChangedAggregateEvent.prototype.getOrigin = /**
     * @return {?}
     */
    function () {
        return this.origin;
    };
    return StructureOriginChangedAggregateEvent;
}(AggregateEvent));
export { StructureOriginChangedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureOriginChangedAggregateEvent.prototype.origin;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL29yaWdpbi9zdHJ1Y3R1cmUub3JpZ2luLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBNEIsTUFBTSxvQkFBb0IsQ0FBQztBQUk5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFL0Q7SUFBMEQsZ0VBQTJCO0lBRXBGLDhDQUFZLFdBQXdCLEVBQ2hCLE1BQStCO1FBRG5ELFlBRUMsa0JBQU0sV0FBVyxFQUFFLHNDQUFzQyxDQUFDLFNBQzFEO1FBRm1CLFlBQU0sR0FBTixNQUFNLENBQXlCOztJQUVuRCxDQUFDOzs7O0lBRUQsNERBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFRCx3REFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUNGLDJDQUFDO0FBQUQsQ0FBQyxBQWRELENBQTBELGNBQWMsR0FjdkU7Ozs7Ozs7SUFYRyxzREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IE9yaWdpblNldEV2ZW50IH0gZnJvbSAnLi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgb3JpZ2luOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBPcmlnaW5TZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMub3JpZ2luKTtcblx0fVxuXG5cdGdldE9yaWdpbigpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luO1xuXHR9XG59XG4iXX0=