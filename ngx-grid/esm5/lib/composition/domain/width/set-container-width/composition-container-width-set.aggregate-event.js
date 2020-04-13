/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionContainerWidthSetEvent } from './composition-container-width-set.event';
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
}(AggregateEvent));
export { CompositionContainerWidthSetAggregateEvent };
if (false) {
    /** @type {?} */
    CompositionContainerWidthSetAggregateEvent.prototype.containerWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUc1RjtJQUFnRSxzRUFBNkI7SUFFNUYsb0RBQVksYUFBNEIsRUFDckIsY0FBc0I7UUFEekMsWUFFQyxrQkFBTSxhQUFhLEVBQUUsNENBQTRDLENBQUMsU0FDbEU7UUFGa0Isb0JBQWMsR0FBZCxjQUFjLENBQVE7O0lBRXpDLENBQUM7Ozs7SUFFRCxrRUFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksaUNBQWlDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0YsaURBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBZ0UsY0FBYyxHQVU3RTs7OztJQVBHLG9FQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPiB7XG5cblx0Y29uc3RydWN0b3IoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IGNvbnRhaW5lcldpZHRoOiBudW1iZXIpIHtcblx0XHRzdXBlcihjb21wb3NpdGlvbklkLCAnQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMuY29udGFpbmVyV2lkdGgpO1xuXHR9XG59XG4iXX0=