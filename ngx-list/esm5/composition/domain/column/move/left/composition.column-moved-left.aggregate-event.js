/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionColumnMovedLeftEvent } from './composition.column-moved-left.event';
var CompositionColumnMovedLeftAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionColumnMovedLeftAggregateEvent, _super);
    function CompositionColumnMovedLeftAggregateEvent(aggregateId, activeColumns) {
        var _this = _super.call(this, aggregateId, 'CompositionColumnMovedLeftAggregateEvent') || this;
        _this.activeColumns = activeColumns;
        return _this;
    }
    // getActiveColumns(): Array<ActiveColumnEntity> {
    // 	return this.activeColumns;
    // }
    // getActiveColumns(): Array<ActiveColumnEntity> {
    // 	return this.activeColumns;
    // }
    /**
     * @return {?}
     */
    CompositionColumnMovedLeftAggregateEvent.prototype.toDomainEvent = 
    // getActiveColumns(): Array<ActiveColumnEntity> {
    // 	return this.activeColumns;
    // }
    /**
     * @return {?}
     */
    function () {
        return new CompositionColumnMovedLeftEvent(this.getAggregateId());
    };
    return CompositionColumnMovedLeftAggregateEvent;
}(AggregateEvent));
export { CompositionColumnMovedLeftAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionColumnMovedLeftAggregateEvent.prototype.activeColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLWxlZnQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtbGVmdC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUE0QixNQUFNLG9CQUFvQixDQUFDO0FBSTlFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXhGO0lBQThELG9FQUE2QjtJQUUxRixrREFBWSxXQUF3QixFQUNoQixhQUF3QztRQUQ1RCxZQUVDLGtCQUFNLFdBQVcsRUFBRSwwQ0FBMEMsQ0FBQyxTQUM5RDtRQUZtQixtQkFBYSxHQUFiLGFBQWEsQ0FBMkI7O0lBRTVELENBQUM7SUFFRCxrREFBa0Q7SUFDbEQsOEJBQThCO0lBQzlCLElBQUk7Ozs7Ozs7SUFFSixnRUFBYTs7Ozs7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLCtCQUErQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRiwrQ0FBQztBQUFELENBQUMsQUFmRCxDQUE4RCxjQUFjLEdBZTNFOzs7Ozs7O0lBWkcsaUVBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4uLy4uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLWxlZnQuZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0Ly8gZ2V0QWN0aXZlQ29sdW1ucygpOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0Ly8gXHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5zO1xuXHQvLyB9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxDb21wb3NpdGlvbklkPiB7XG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cblxufVxuIl19