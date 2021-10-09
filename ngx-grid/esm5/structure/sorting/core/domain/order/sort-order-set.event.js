/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
var SortOrderSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SortOrderSetEvent, _super);
    function SortOrderSetEvent(aggregateId, compositionId, directions) {
        var _this = _super.call(this, aggregateId, { compositionId: compositionId, directions: directions }, 'SortOrderSetEvent') || this;
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
}(StructureDomainEvent));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vcmRlci1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2NvcmUvZG9tYWluL29yZGVyL3NvcnQtb3JkZXItc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEY7SUFBdUMsNkNBQW9CO0lBRTFELDJCQUFZLFdBQXdCLEVBQ2hCLGFBQTRCLEVBQzVCLFVBQTJEO1FBRi9FLFlBR0Msa0JBQU0sV0FBVyxFQUFFLEVBQUUsYUFBYSxlQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxTQUN0RTtRQUhtQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVSxHQUFWLFVBQVUsQ0FBaUQ7O0lBRS9FLENBQUM7Ozs7SUFFRCw0Q0FBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQseUNBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUFmRCxDQUF1QyxvQkFBb0IsR0FlMUQ7Ozs7Ozs7SUFaRywwQ0FBNkM7Ozs7O0lBQzdDLHVDQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNvcnRPcmRlclNldEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRpcmVjdGlvbnM6IEFycmF5PHsgZmllbGRJZDogRmllbGRJZCwgZGlyZWN0aW9uOiBib29sZWFuIH0+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIHsgY29tcG9zaXRpb25JZCwgZGlyZWN0aW9ucyB9LCAnU29ydE9yZGVyU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldENvbXBvc2l0aW9uSWQoKTogQ29tcG9zaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25JZDtcblx0fVxuXG5cdGdldERpcmVjdGlvbnMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5kaXJlY3Rpb25zO1xuXHR9XG59XG4iXX0=