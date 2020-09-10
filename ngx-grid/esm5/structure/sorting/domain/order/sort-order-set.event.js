/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var SortOrderSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SortOrderSetEvent, _super);
    function SortOrderSetEvent(aggregateId, compositionId, directions) {
        var _this = _super.call(this, aggregateId, 'SortOrderSetEvent') || this;
        _this.compositionId = compositionId;
        _this.directions = directions;
        return _this;
    }
    /**
     * @return {?}
     */
    SortOrderSetEvent.prototype.getCompositionId = /**
     * @return {?}
     */
    function () {
        return this.compositionId;
    };
    /**
     * @return {?}
     */
    SortOrderSetEvent.prototype.getDirections = /**
     * @return {?}
     */
    function () {
        return this.directions;
    };
    return SortOrderSetEvent;
}(DomainEvent));
export { SortOrderSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortOrderSetEvent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SortOrderSetEvent.prototype.directions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vcmRlci1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2RvbWFpbi9vcmRlci9zb3J0LW9yZGVyLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUtqRDtJQUF1Qyw2Q0FBd0I7SUFFOUQsMkJBQVksV0FBd0IsRUFDaEIsYUFBNEIsRUFDNUIsVUFBMkQ7UUFGL0UsWUFHQyxrQkFBTSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsU0FDdkM7UUFIbUIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVUsR0FBVixVQUFVLENBQWlEOztJQUUvRSxDQUFDOzs7O0lBRUQsNENBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHlDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBdUMsV0FBVyxHQWVqRDs7Ozs7OztJQVpHLDBDQUE2Qzs7Ozs7SUFDN0MsdUNBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5leHBvcnQgY2xhc3MgU29ydE9yZGVyU2V0RXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRpcmVjdGlvbnM6IEFycmF5PHsgZmllbGRJZDogRmllbGRJZCwgZGlyZWN0aW9uOiBib29sZWFuIH0+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTb3J0T3JkZXJTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0Q29tcG9zaXRpb25JZCgpOiBDb21wb3NpdGlvbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbklkO1xuXHR9XG5cblx0Z2V0RGlyZWN0aW9ucygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmRpcmVjdGlvbnM7XG5cdH1cbn1cbiJdfQ==