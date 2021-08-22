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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdEU7SUFBbUQseURBQXNCO0lBRXhFLHVDQUFZLFVBQXNCLEVBQ2QsSUFBa0I7UUFEdEMsWUFFQyxrQkFBTSxVQUFVLEVBQUUsK0JBQStCLENBQUMsU0FDbEQ7UUFGbUIsVUFBSSxHQUFKLElBQUksQ0FBYzs7SUFFdEMsQ0FBQzs7OztJQUVELHFEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRixvQ0FBQztBQUFELENBQUMsQUFWRCxDQUFtRCxzQkFBc0IsR0FVeEU7Ozs7Ozs7SUFQRyw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEV2ZW50IH0gZnJvbSAnLi9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9saXN0LXZpZXcuYWdncmVnYXRlLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZVNldEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgTGlzdFZpZXdBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IobGlzdFZpZXdJZDogTGlzdFZpZXdJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtb2RlOiBMaXN0Vmlld01vZGUpIHtcblx0XHRzdXBlcihsaXN0Vmlld0lkLCAnTGlzdFZpZXdNb2RlU2V0QWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8TGlzdFZpZXdJZD4ge1xuXHRcdHJldHVybiBuZXcgTGlzdFZpZXdNb2RlU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLm1vZGUpO1xuXHR9XG59XG4iXX0=