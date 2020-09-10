/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var CompositionChangeSortStatusEvent = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionChangeSortStatusEvent, _super);
    function CompositionChangeSortStatusEvent(aggregateId, activeColumns) {
        var _this = _super.call(this, aggregateId, 'CompositionChangeSortStatusEvent') || this;
        _this.activeColumns = activeColumns;
        return _this;
    }
    /**
     * @return {?}
     */
    CompositionChangeSortStatusEvent.prototype.getCompositionId = /**
     * @return {?}
     */
    function () {
        return this.getAggregateId();
    };
    /**
     * @return {?}
     */
    CompositionChangeSortStatusEvent.prototype.getActiveColumns = /**
     * @return {?}
     */
    function () {
        return this.activeColumns;
    };
    return CompositionChangeSortStatusEvent;
}(DomainEvent));
export { CompositionChangeSortStatusEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusEvent.prototype.activeColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTWpEO0lBQXNELDREQUEwQjtJQUUvRSwwQ0FBWSxXQUEwQixFQUNsQixhQUF3QztRQUQ1RCxZQUVDLGtCQUFNLFdBQVcsRUFBRSxrQ0FBa0MsQ0FBQyxTQUN0RDtRQUZtQixtQkFBYSxHQUFiLGFBQWEsQ0FBMkI7O0lBRTVELENBQUM7Ozs7SUFFRCwyREFBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCwyREFBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRUYsdUNBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBc0QsV0FBVyxHQWVoRTs7Ozs7OztJQVpHLHlEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0NvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50Jyk7XG5cdH1cblxuXHRnZXRDb21wb3NpdGlvbklkKCk6IENvbXBvc2l0aW9uSWQge1xuXHRcdHJldHVybiB0aGlzLmdldEFnZ3JlZ2F0ZUlkKCk7XG5cdH1cblxuXHRnZXRBY3RpdmVDb2x1bW5zKCk6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbnM7XG5cdH1cblxufVxuIl19