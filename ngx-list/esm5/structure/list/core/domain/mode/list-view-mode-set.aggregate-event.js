/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ListViewModeSetEvent } from './list-view-mode-set.event';
import { ListViewAggregateEvent } from '../list-view.aggregate-event';
var ListViewModeSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewModeSetAggregateEvent, _super);
    function ListViewModeSetAggregateEvent(listViewId, mode) {
        var _this = _super.call(this, listViewId, 'ListViewModeSetAggregateEvent') || this;
        _this.mode = mode;
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewModeSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new ListViewModeSetEvent(this.getAggregateId(), this.mode);
    };
    return ListViewModeSetAggregateEvent;
}(ListViewAggregateEvent));
export { ListViewModeSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewModeSetAggregateEvent.prototype.mode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdEU7SUFBbUQseURBQXNCO0lBRXhFLHVDQUFZLFVBQXNCLEVBQ2QsSUFBa0I7UUFEdEMsWUFFQyxrQkFBTSxVQUFVLEVBQUUsK0JBQStCLENBQUMsU0FDbEQ7UUFGbUIsVUFBSSxHQUFKLElBQUksQ0FBYzs7SUFFdEMsQ0FBQzs7OztJQUVELHFEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRixvQ0FBQztBQUFELENBQUMsQUFWRCxDQUFtRCxzQkFBc0IsR0FVeEU7Ozs7Ozs7SUFQRyw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEV2ZW50IH0gZnJvbSAnLi9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2FwaS9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0FnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vbGlzdC12aWV3LmFnZ3JlZ2F0ZS1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld01vZGVTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIExpc3RWaWV3QWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbW9kZTogTGlzdFZpZXdNb2RlKSB7XG5cdFx0c3VwZXIobGlzdFZpZXdJZCwgJ0xpc3RWaWV3TW9kZVNldEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PExpc3RWaWV3SWQ+IHtcblx0XHRyZXR1cm4gbmV3IExpc3RWaWV3TW9kZVNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5tb2RlKTtcblx0fVxufVxuIl19