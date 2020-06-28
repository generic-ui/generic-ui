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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC10b2dnbGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9kb21haW4vdG9nZ2xlL3NvcnQtdG9nZ2xlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1qRDtJQUFzQyw0Q0FBd0I7SUFFN0QsMEJBQVksV0FBd0IsRUFDaEIsYUFBNEIsRUFDNUIsVUFBMkQ7UUFGL0UsWUFHQyxrQkFBTSxXQUFXLEVBQUUsa0JBQWtCLENBQUMsU0FDdEM7UUFIbUIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVUsR0FBVixVQUFVLENBQWlEOztJQUUvRSxDQUFDOzs7O0lBRUQsMkNBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHdDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBc0MsV0FBVyxHQWVoRDs7Ozs7OztJQVpHLHlDQUE2Qzs7Ozs7SUFDN0Msc0NBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU29ydFRvZ2dsZWRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGlyZWN0aW9uczogQXJyYXk8eyBmaWVsZElkOiBGaWVsZElkLCBkaXJlY3Rpb246IGJvb2xlYW4gfT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1NvcnRUb2dnbGVkRXZlbnQnKTtcblx0fVxuXG5cdGdldENvbXBvc2l0aW9uSWQoKTogQ29tcG9zaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25JZDtcblx0fVxuXG5cdGdldERpcmVjdGlvbnMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5kaXJlY3Rpb25zO1xuXHR9XG59XG4iXX0=