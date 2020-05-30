/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var SortToggledEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SortToggledEvent, _super);
    function SortToggledEvent(aggregateId, compositionId, directions) {
        var _this = _super.call(this, aggregateId, 'SortToggledEvent') || this;
        _this.compositionId = compositionId;
        _this.directions = directions;
        return _this;
    }
    /**
     * @return {?}
     */
    SortToggledEvent.prototype.getCompositionId = /**
     * @return {?}
     */
    function () {
        return this.compositionId;
    };
    /**
     * @return {?}
     */
    SortToggledEvent.prototype.getDirections = /**
     * @return {?}
     */
    function () {
        return this.directions;
    };
    return SortToggledEvent;
}(DomainEvent));
export { SortToggledEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortToggledEvent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SortToggledEvent.prototype.directions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC10b2dnbGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9kb21haW4vdG9nZ2xlL3NvcnQtdG9nZ2xlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1qRDtJQUFzQyw0Q0FBd0I7SUFFN0QsMEJBQVksV0FBd0IsRUFDaEIsYUFBNEIsRUFDNUIsVUFBMkQ7UUFGL0UsWUFHQyxrQkFBTSxXQUFXLEVBQUUsa0JBQWtCLENBQUMsU0FDdEM7UUFIbUIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVUsR0FBVixVQUFVLENBQWlEOztJQUUvRSxDQUFDOzs7O0lBRUQsMkNBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHdDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBc0MsV0FBVyxHQWVoRDs7Ozs7OztJQVpHLHlDQUE2Qzs7Ozs7SUFDN0Msc0NBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTb3J0VG9nZ2xlZEV2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkaXJlY3Rpb25zOiBBcnJheTx7IGZpZWxkSWQ6IEZpZWxkSWQsIGRpcmVjdGlvbjogYm9vbGVhbiB9Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnU29ydFRvZ2dsZWRFdmVudCcpO1xuXHR9XG5cblx0Z2V0Q29tcG9zaXRpb25JZCgpOiBDb21wb3NpdGlvbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbklkO1xuXHR9XG5cblx0Z2V0RGlyZWN0aW9ucygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmRpcmVjdGlvbnM7XG5cdH1cbn1cbiJdfQ==