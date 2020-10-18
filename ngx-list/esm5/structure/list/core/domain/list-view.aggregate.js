/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateRoot } from '@generic-ui/hermes';
import { ListViewCreatedAggregateEvent } from './create/list-view-created.aggregate-event';
import { ListViewModeSetAggregateEvent } from './mode/list-view-mode-set.aggregate-event';
import { ListViewMode } from './mode/list-view-mode';
import { SelectorVisibility } from './mode/selector/selector-visibility';
import { ListViewSelectorToggledAggregateEvent } from './mode/selector/list-view-selector-toggled.aggregate-event';
var ListViewAggregate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewAggregate, _super);
    function ListViewAggregate(listViewId) {
        var _this = _super.call(this, listViewId, 'ListViewAggregate') || this;
        _this.setMode(ListViewMode.LIST);
        _this.initSelectorVisibility();
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewAggregate.prototype.createEvent = /**
     * @return {?}
     */
    function () {
        return ListViewCreatedAggregateEvent;
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ListViewAggregate.prototype.setMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.mode = mode;
        this.addEvent(new ListViewModeSetAggregateEvent(this.getId(), this.mode));
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    ListViewAggregate.prototype.toggleModeSelector = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.selectorVisibility.setEnabled(enabled);
        this.emitEventAfterSelectorVisibilityChange();
    };
    /**
     * @private
     * @return {?}
     */
    ListViewAggregate.prototype.initSelectorVisibility = /**
     * @private
     * @return {?}
     */
    function () {
        this.selectorVisibility = new SelectorVisibility();
        this.emitEventAfterSelectorVisibilityChange();
    };
    /**
     * @private
     * @return {?}
     */
    ListViewAggregate.prototype.emitEventAfterSelectorVisibilityChange = /**
     * @private
     * @return {?}
     */
    function () {
        this.addEvent(new ListViewSelectorToggledAggregateEvent(this.getId(), this.selectorVisibility.isVisible()));
    };
    return ListViewAggregate;
}(AggregateRoot));
export { ListViewAggregate };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewAggregate.prototype.mode;
    /**
     * @type {?}
     * @private
     */
    ListViewAggregate.prototype.selectorVisibility;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9kb21haW4vbGlzdC12aWV3LmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBc0MsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0YsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBR25IO0lBQXVDLDZDQUF5QjtJQU0vRCwyQkFBWSxVQUFzQjtRQUFsQyxZQUNDLGtCQUFNLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxTQUd0QztRQUZBLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDOztJQUMvQixDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0MsT0FBTyw2QkFBNkIsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELG1DQUFPOzs7O0lBQVAsVUFBUSxJQUFrQjtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksNkJBQTZCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRUQsOENBQWtCOzs7O0lBQWxCLFVBQW1CLE9BQWdCO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFTyxrREFBc0I7Ozs7SUFBOUI7UUFDQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRU8sa0VBQXNDOzs7O0lBQTlDO1FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFDQUFxQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBdUMsYUFBYSxHQWtDbkQ7Ozs7Ozs7SUFoQ0EsaUNBQTJCOzs7OztJQUUzQiwrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlRXZlbnRUeXBlLCBBZ2dyZWdhdGVSb290IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uL2FwaS9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDcmVhdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NyZWF0ZS9saXN0LXZpZXctY3JlYXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgU2VsZWN0b3JWaXNpYmlsaXR5IH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL3NlbGVjdG9yLXZpc2liaWxpdHknO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci9saXN0LXZpZXctc2VsZWN0b3ItdG9nZ2xlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0FnZ3JlZ2F0ZSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8TGlzdFZpZXdJZD4ge1xuXG5cdHByaXZhdGUgbW9kZTogTGlzdFZpZXdNb2RlO1xuXG5cdHByaXZhdGUgc2VsZWN0b3JWaXNpYmlsaXR5OiBTZWxlY3RvclZpc2liaWxpdHk7XG5cblx0Y29uc3RydWN0b3IobGlzdFZpZXdJZDogTGlzdFZpZXdJZCkge1xuXHRcdHN1cGVyKGxpc3RWaWV3SWQsICdMaXN0Vmlld0FnZ3JlZ2F0ZScpO1xuXHRcdHRoaXMuc2V0TW9kZShMaXN0Vmlld01vZGUuTElTVCk7XG5cdFx0dGhpcy5pbml0U2VsZWN0b3JWaXNpYmlsaXR5KCk7XG5cdH1cblxuXHRjcmVhdGVFdmVudCgpOiBBZ2dyZWdhdGVFdmVudFR5cGU8QWdncmVnYXRlRXZlbnQ8TGlzdFZpZXdJZD4+IHtcblx0XHRyZXR1cm4gTGlzdFZpZXdDcmVhdGVkQWdncmVnYXRlRXZlbnQ7XG5cdH1cblxuXHRzZXRNb2RlKG1vZGU6IExpc3RWaWV3TW9kZSk6IHZvaWQge1xuXHRcdHRoaXMubW9kZSA9IG1vZGU7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgTGlzdFZpZXdNb2RlU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLm1vZGUpKTtcblx0fVxuXG5cdHRvZ2dsZU1vZGVTZWxlY3RvcihlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RvclZpc2liaWxpdHkuc2V0RW5hYmxlZChlbmFibGVkKTtcblx0XHR0aGlzLmVtaXRFdmVudEFmdGVyU2VsZWN0b3JWaXNpYmlsaXR5Q2hhbmdlKCk7XG5cdH1cblxuXHRwcml2YXRlIGluaXRTZWxlY3RvclZpc2liaWxpdHkoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RvclZpc2liaWxpdHkgPSBuZXcgU2VsZWN0b3JWaXNpYmlsaXR5KCk7XG5cdFx0dGhpcy5lbWl0RXZlbnRBZnRlclNlbGVjdG9yVmlzaWJpbGl0eUNoYW5nZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0RXZlbnRBZnRlclNlbGVjdG9yVmlzaWJpbGl0eUNoYW5nZSgpOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5zZWxlY3RvclZpc2liaWxpdHkuaXNWaXNpYmxlKCkpKTtcblx0fVxufVxuIl19