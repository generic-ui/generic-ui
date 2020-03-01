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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTWpEO0lBQXNELDREQUFXO0lBRWhFLDBDQUFZLFdBQTBCLEVBQ2xCLGFBQXdDO1FBRDVELFlBRUMsa0JBQU0sV0FBVyxFQUFFLGtDQUFrQyxDQUFDLFNBQ3REO1FBRm1CLG1CQUFhLEdBQWIsYUFBYSxDQUEyQjs7SUFFNUQsQ0FBQzs7OztJQUVELDJEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELDJEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFFRix1Q0FBQztBQUFELENBQUMsQUFmRCxDQUFzRCxXQUFXLEdBZWhFOzs7Ozs7O0lBWkcseURBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQnKTtcblx0fVxuXG5cdGdldENvbXBvc2l0aW9uSWQoKTogQ29tcG9zaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWdncmVnYXRlSWQoKTtcblx0fVxuXG5cdGdldEFjdGl2ZUNvbHVtbnMoKTogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1ucztcblx0fVxuXG59XG4iXX0=