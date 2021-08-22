/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ListViewSelectorToggledEvent } from './list-view-selector-toggled.event';
import { ListViewAggregateEvent } from '../../list-view.aggregate-event';
var ListViewSelectorToggledAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewSelectorToggledAggregateEvent, _super);
    function ListViewSelectorToggledAggregateEvent(listViewId, enabled) {
        var _this = _super.call(this, listViewId, 'ListViewSelectorToggledAggregateEvent') || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewSelectorToggledAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new ListViewSelectorToggledEvent(this.getAggregateId(), this.enabled);
    };
    return ListViewSelectorToggledAggregateEvent;
}(ListViewAggregateEvent));
export { ListViewSelectorToggledAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewSelectorToggledAggregateEvent.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9jb3JlL2RvbWFpbi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3pFO0lBQTJELGlFQUFzQjtJQUVoRiwrQ0FBWSxVQUFzQixFQUNkLE9BQWdCO1FBRHBDLFlBRUMsa0JBQU0sVUFBVSxFQUFFLHVDQUF1QyxDQUFDLFNBQzFEO1FBRm1CLGFBQU8sR0FBUCxPQUFPLENBQVM7O0lBRXBDLENBQUM7Ozs7SUFFRCw2REFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksNEJBQTRCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ0YsNENBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBMkQsc0JBQXNCLEdBVWhGOzs7Ozs7O0lBUEcsd0RBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi9saXN0LXZpZXctc2VsZWN0b3ItdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vLi4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9saXN0LXZpZXcuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIExpc3RWaWV3QWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKGxpc3RWaWV3SWQsICdMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PExpc3RWaWV3SWQ+IHtcblx0XHRyZXR1cm4gbmV3IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLmVuYWJsZWQpO1xuXHR9XG59XG4iXX0=