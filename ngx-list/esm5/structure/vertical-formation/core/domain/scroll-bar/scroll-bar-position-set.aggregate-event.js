/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
import { ScrollBarPositionSetEvent } from './scroll-bar-position-set.event';
var ScrollBarPositionSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ScrollBarPositionSetAggregateEvent, _super);
    function ScrollBarPositionSetAggregateEvent(schemaId, position) {
        var _this = _super.call(this, schemaId, 'ScrollBarPositionSetAggregateEvent') || this;
        _this.position = position;
        return _this;
    }
    /**
     * @return {?}
     */
    ScrollBarPositionSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new ScrollBarPositionSetEvent(this.getAggregateId(), this.position);
    };
    return ScrollBarPositionSetAggregateEvent;
}(StructureAggregateEvent));
export { ScrollBarPositionSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollBarPositionSetAggregateEvent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3Njcm9sbC1iYXIvc2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFNUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHNUU7SUFBd0QsOERBQXVCO0lBRTlFLDRDQUFZLFFBQXFCLEVBQ2IsUUFBZ0I7UUFEcEMsWUFFQyxrQkFBTSxRQUFRLEVBQUUsb0NBQW9DLENBQUMsU0FDckQ7UUFGbUIsY0FBUSxHQUFSLFFBQVEsQ0FBUTs7SUFFcEMsQ0FBQzs7OztJQUVELDBEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDRix5Q0FBQztBQUFELENBQUMsQUFWRCxDQUF3RCx1QkFBdUIsR0FVOUU7Ozs7Ozs7SUFQRyxzREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTY3JvbGxCYXJQb3NpdGlvblNldEV2ZW50IH0gZnJvbSAnLi9zY3JvbGwtYmFyLXBvc2l0aW9uLXNldC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFNjcm9sbEJhclBvc2l0aW9uU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBvc2l0aW9uOiBudW1iZXIpIHtcblx0XHRzdXBlcihzY2hlbWFJZCwgJ1Njcm9sbEJhclBvc2l0aW9uU2V0QWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFNjcm9sbEJhclBvc2l0aW9uU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLnBvc2l0aW9uKTtcblx0fVxufVxuIl19