/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ListViewDomainEvent } from '../../list-view.domain-event';
var ListViewSelectorToggledEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewSelectorToggledEvent, _super);
    function ListViewSelectorToggledEvent(schemaId, enabled) {
        var _this = _super.call(this, schemaId, enabled, 'ListViewSelectorToggledEvent') || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewSelectorToggledEvent.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    return ListViewSelectorToggledEvent;
}(ListViewDomainEvent));
export { ListViewSelectorToggledEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewSelectorToggledEvent.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvZG9tYWluL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUduRTtJQUFrRCx3REFBbUI7SUFFcEUsc0NBQVksUUFBb0IsRUFDWixPQUFnQjtRQURwQyxZQUVDLGtCQUFNLFFBQVEsRUFBRSxPQUFPLEVBQUUsOEJBQThCLENBQUMsU0FDeEQ7UUFGbUIsYUFBTyxHQUFQLE9BQU8sQ0FBUzs7SUFFcEMsQ0FBQzs7OztJQUVELGdEQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBQ0YsbUNBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBa0QsbUJBQW1CLEdBVXBFOzs7Ozs7O0lBUEcsK0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0RvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vbGlzdC12aWV3LmRvbWFpbi1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQgZXh0ZW5kcyBMaXN0Vmlld0RvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogTGlzdFZpZXdJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsIGVuYWJsZWQsICdMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50Jyk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxufVxuIl19