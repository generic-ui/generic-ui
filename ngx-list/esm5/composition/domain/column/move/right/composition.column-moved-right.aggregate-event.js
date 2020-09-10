/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionColumnMovedRightEvent } from './composition.column-moved-right.event';
var CompositionColumnMovedRightAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionColumnMovedRightAggregateEvent, _super);
    function CompositionColumnMovedRightAggregateEvent(aggregateId, activeColumns) {
        var _this = _super.call(this, aggregateId, 'CompositionColumnMovedRightAggregateEvent') || this;
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
    CompositionColumnMovedRightAggregateEvent.prototype.toDomainEvent = 
    // getActiveColumns(): Array<ActiveColumnEntity> {
    // 	return this.activeColumns;
    // }
    /**
     * @return {?}
     */
    function () {
        return new CompositionColumnMovedRightEvent(this.getAggregateId());
    };
    return CompositionColumnMovedRightAggregateEvent;
}(AggregateEvent));
export { CompositionColumnMovedRightAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionColumnMovedRightAggregateEvent.prototype.activeColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLXJpZ2h0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1yaWdodC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUE0QixNQUFNLG9CQUFvQixDQUFDO0FBRzlFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTFGO0lBQStELHFFQUE2QjtJQUUzRixtREFBWSxXQUF3QixFQUNoQixhQUF3QztRQUQ1RCxZQUVDLGtCQUFNLFdBQVcsRUFBRSwyQ0FBMkMsQ0FBQyxTQUMvRDtRQUZtQixtQkFBYSxHQUFiLGFBQWEsQ0FBMkI7O0lBRTVELENBQUM7SUFFRCxrREFBa0Q7SUFDbEQsOEJBQThCO0lBQzlCLElBQUk7Ozs7Ozs7SUFFSixpRUFBYTs7Ozs7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRixnREFBQztBQUFELENBQUMsQUFmRCxDQUErRCxjQUFjLEdBZTVFOzs7Ozs7O0lBWkcsa0VBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi8uLi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtcmlnaHQuZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0NvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHQvLyBnZXRBY3RpdmVDb2x1bW5zKCk6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4ge1xuXHQvLyBcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbnM7XG5cdC8vIH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cblxufVxuIl19