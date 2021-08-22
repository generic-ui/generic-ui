/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CompositionContainerWidthSetEvent } from './composition-container-width-set.event';
import { CompositionAggregateEvent } from '../../composition.aggregate-event';
var CompositionContainerWidthSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionContainerWidthSetAggregateEvent, _super);
    function CompositionContainerWidthSetAggregateEvent(compositionId, containerWidth) {
        var _this = _super.call(this, compositionId, 'CompositionContainerWidthSetAggregateEvent') || this;
        _this.containerWidth = containerWidth;
        return _this;
    }
    /**
     * @return {?}
     */
    CompositionContainerWidthSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new CompositionContainerWidthSetEvent(this.getAggregateId(), this.containerWidth);
    };
    return CompositionContainerWidthSetAggregateEvent;
}(CompositionAggregateEvent));
export { CompositionContainerWidthSetAggregateEvent };
if (false) {
    /** @type {?} */
    CompositionContainerWidthSetAggregateEvent.prototype.containerWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUc5RTtJQUFnRSxzRUFBeUI7SUFFeEYsb0RBQVksYUFBNEIsRUFDckIsY0FBc0I7UUFEekMsWUFFQyxrQkFBTSxhQUFhLEVBQUUsNENBQTRDLENBQUMsU0FDbEU7UUFGa0Isb0JBQWMsR0FBZCxjQUFjLENBQVE7O0lBRXpDLENBQUM7Ozs7SUFFRCxrRUFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksaUNBQWlDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0YsaURBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBZ0UseUJBQXlCLEdBVXhGOzs7O0lBUEcsb0VBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwdWJsaWMgcmVhZG9ubHkgY29udGFpbmVyV2lkdGg6IG51bWJlcikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uSWQsICdDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5jb250YWluZXJXaWR0aCk7XG5cdH1cbn1cbiJdfQ==