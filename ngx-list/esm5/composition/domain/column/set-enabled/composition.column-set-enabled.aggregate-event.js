/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionColumnSetEnabledEvent } from './composition.column-set-enabled.event';
var CompositionColumnSetEnabledAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionColumnSetEnabledAggregateEvent, _super);
    function CompositionColumnSetEnabledAggregateEvent(aggregateId, activeColumns) {
        var _this = _super.call(this, aggregateId, 'CompositionColumnSetEnabledAggregateEvent') || this;
        _this.activeColumns = activeColumns;
        return _this;
    }
    /**
     * @return {?}
     */
    CompositionColumnSetEnabledAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new CompositionColumnSetEnabledEvent(this.getAggregateId());
    };
    /**
     * @return {?}
     */
    CompositionColumnSetEnabledAggregateEvent.prototype.getActiveColumns = /**
     * @return {?}
     */
    function () {
        return this.activeColumns;
    };
    return CompositionColumnSetEnabledAggregateEvent;
}(AggregateEvent));
export { CompositionColumnSetEnabledAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionColumnSetEnabledAggregateEvent.prototype.activeColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBNEIsTUFBTSxvQkFBb0IsQ0FBQztBQUk5RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUxRjtJQUErRCxxRUFBNkI7SUFFM0YsbURBQVksV0FBd0IsRUFDaEIsYUFBd0M7UUFENUQsWUFFQyxrQkFBTSxXQUFXLEVBQUUsMkNBQTJDLENBQUMsU0FDL0Q7UUFGbUIsbUJBQWEsR0FBYixhQUFhLENBQTJCOztJQUU1RCxDQUFDOzs7O0lBRUQsaUVBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCxvRUFBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRUYsZ0RBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBK0QsY0FBYyxHQWU1RTs7Ozs7OztJQVpHLGtFQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0NvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRnZXRBY3RpdmVDb2x1bW5zKCk6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbnM7XG5cdH1cblxufVxuIl19