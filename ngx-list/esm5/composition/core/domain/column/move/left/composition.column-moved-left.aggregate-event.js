/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CompositionColumnMovedLeftEvent } from './composition.column-moved-left.event';
import { CompositionAggregateEvent } from '../../../composition.aggregate-event';
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
}(CompositionAggregateEvent));
export { CompositionColumnMovedLeftAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionColumnMovedLeftAggregateEvent.prototype.activeColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLWxlZnQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vbW92ZS9sZWZ0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1sZWZ0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWpGO0lBQThELG9FQUF5QjtJQUV0RixrREFBWSxXQUF3QixFQUNoQixhQUF3QztRQUQ1RCxZQUVDLGtCQUFNLFdBQVcsRUFBRSwwQ0FBMEMsQ0FBQyxTQUM5RDtRQUZtQixtQkFBYSxHQUFiLGFBQWEsQ0FBMkI7O0lBRTVELENBQUM7SUFFRCxrREFBa0Q7SUFDbEQsOEJBQThCO0lBQzlCLElBQUk7Ozs7Ozs7SUFFSixnRUFBYTs7Ozs7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLCtCQUErQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRiwrQ0FBQztBQUFELENBQUMsQUFmRCxDQUE4RCx5QkFBeUIsR0FldEY7Ozs7Ozs7SUFaRyxpRUFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi8uLi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtbGVmdC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0Ly8gZ2V0QWN0aXZlQ29sdW1ucygpOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0Ly8gXHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5zO1xuXHQvLyB9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxDb21wb3NpdGlvbklkPiB7XG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cblxufVxuIl19