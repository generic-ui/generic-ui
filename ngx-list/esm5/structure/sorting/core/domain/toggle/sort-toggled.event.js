/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
var SortToggledEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SortToggledEvent, _super);
    function SortToggledEvent(aggregateId, compositionId, directions) {
        var _this = _super.call(this, aggregateId, { compositionId: compositionId, directions: directions }, 'SortToggledEvent') || this;
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
}(StructureDomainEvent));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC10b2dnbGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2RvbWFpbi90b2dnbGUvc29ydC10b2dnbGVkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFHdEY7SUFBc0MsNENBQW9CO0lBRXpELDBCQUFZLFdBQXdCLEVBQ2hCLGFBQTRCLEVBQzVCLFVBQTJEO1FBRi9FLFlBR0Msa0JBQU0sV0FBVyxFQUFFLEVBQUUsYUFBYSxlQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxTQUNyRTtRQUhtQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVSxHQUFWLFVBQVUsQ0FBaUQ7O0lBRS9FLENBQUM7Ozs7SUFFRCwyQ0FBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsd0NBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUFDRix1QkFBQztBQUFELENBQUMsQUFmRCxDQUFzQyxvQkFBb0IsR0FlekQ7Ozs7Ozs7SUFaRyx5Q0FBNkM7Ozs7O0lBQzdDLHNDQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU29ydFRvZ2dsZWRFdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkaXJlY3Rpb25zOiBBcnJheTx7IGZpZWxkSWQ6IEZpZWxkSWQsIGRpcmVjdGlvbjogYm9vbGVhbiB9Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCB7IGNvbXBvc2l0aW9uSWQsIGRpcmVjdGlvbnMgfSwgJ1NvcnRUb2dnbGVkRXZlbnQnKTtcblx0fVxuXG5cdGdldENvbXBvc2l0aW9uSWQoKTogQ29tcG9zaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25JZDtcblx0fVxuXG5cdGdldERpcmVjdGlvbnMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5kaXJlY3Rpb25zO1xuXHR9XG59XG4iXX0=