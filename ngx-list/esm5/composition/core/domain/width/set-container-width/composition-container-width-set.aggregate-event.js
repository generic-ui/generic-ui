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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUc5RTtJQUFnRSxzRUFBeUI7SUFFeEYsb0RBQVksYUFBNEIsRUFDckIsY0FBc0I7UUFEekMsWUFFQyxrQkFBTSxhQUFhLEVBQUUsNENBQTRDLENBQUMsU0FDbEU7UUFGa0Isb0JBQWMsR0FBZCxjQUFjLENBQVE7O0lBRXpDLENBQUM7Ozs7SUFFRCxrRUFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksaUNBQWlDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0YsaURBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBZ0UseUJBQXlCLEdBVXhGOzs7O0lBUEcsb0VBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IGNvbnRhaW5lcldpZHRoOiBudW1iZXIpIHtcblx0XHRzdXBlcihjb21wb3NpdGlvbklkLCAnQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMuY29udGFpbmVyV2lkdGgpO1xuXHR9XG59XG4iXX0=