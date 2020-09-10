/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { SelectionModeSetEvent } from './selection-mode-set.event';
var SelectionModeSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectionModeSetAggregateEvent, _super);
    function SelectionModeSetAggregateEvent(structureId, mode) {
        var _this = _super.call(this, structureId, 'SelectionModeSetAggregateEvent') || this;
        _this.mode = mode;
        return _this;
    }
    /**
     * @return {?}
     */
    SelectionModeSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new SelectionModeSetEvent(this.getAggregateId(), this.mode);
    };
    return SelectionModeSetAggregateEvent;
}(AggregateEvent));
export { SelectionModeSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectionModeSetAggregateEvent.prototype.mode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4vZm9ybWF0aW9uL21vZGUvc2VsZWN0aW9uLW1vZGUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUduRTtJQUFvRCwwREFBMkI7SUFFOUUsd0NBQVksV0FBd0IsRUFDaEIsSUFBc0I7UUFEMUMsWUFFQyxrQkFBTSxXQUFXLEVBQUUsZ0NBQWdDLENBQUMsU0FDcEQ7UUFGbUIsVUFBSSxHQUFKLElBQUksQ0FBa0I7O0lBRTFDLENBQUM7Ozs7SUFFRCxzREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0YscUNBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBb0QsY0FBYyxHQVVqRTs7Ozs7OztJQVBHLDhDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVTZXRFdmVudCB9IGZyb20gJy4vc2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3Jvdy1zZWxlY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uTW9kZVNldEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbW9kZTogUm93U2VsZWN0aW9uTW9kZSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2VsZWN0aW9uTW9kZVNldEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTZWxlY3Rpb25Nb2RlU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLm1vZGUpO1xuXHR9XG59XG4iXX0=