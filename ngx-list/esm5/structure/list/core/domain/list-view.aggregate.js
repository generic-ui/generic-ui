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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9kb21haW4vbGlzdC12aWV3LmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBc0MsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0YsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBR25IO0lBQXVDLDZDQUF5QjtJQU0vRCwyQkFBWSxVQUFzQjtRQUFsQyxZQUNDLGtCQUFNLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxTQUd0QztRQUZBLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDOztJQUMvQixDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0MsT0FBTyw2QkFBNkIsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELG1DQUFPOzs7O0lBQVAsVUFBUSxJQUFrQjtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksNkJBQTZCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRUQsOENBQWtCOzs7O0lBQWxCLFVBQW1CLE9BQWdCO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFTyxrREFBc0I7Ozs7SUFBOUI7UUFDQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRU8sa0VBQXNDOzs7O0lBQTlDO1FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFDQUFxQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBdUMsYUFBYSxHQWtDbkQ7Ozs7Ozs7SUFoQ0EsaUNBQTJCOzs7OztJQUUzQiwrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlRXZlbnRUeXBlLCBBZ2dyZWdhdGVSb290IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3Q3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jcmVhdGUvbGlzdC12aWV3LWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy1tb2RlLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IFNlbGVjdG9yVmlzaWJpbGl0eSB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci9zZWxlY3Rvci12aXNpYmlsaXR5JztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdBZ2dyZWdhdGUgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PExpc3RWaWV3SWQ+IHtcblxuXHRwcml2YXRlIG1vZGU6IExpc3RWaWV3TW9kZTtcblxuXHRwcml2YXRlIHNlbGVjdG9yVmlzaWJpbGl0eTogU2VsZWN0b3JWaXNpYmlsaXR5O1xuXG5cdGNvbnN0cnVjdG9yKGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpIHtcblx0XHRzdXBlcihsaXN0Vmlld0lkLCAnTGlzdFZpZXdBZ2dyZWdhdGUnKTtcblx0XHR0aGlzLnNldE1vZGUoTGlzdFZpZXdNb2RlLkxJU1QpO1xuXHRcdHRoaXMuaW5pdFNlbGVjdG9yVmlzaWJpbGl0eSgpO1xuXHR9XG5cblx0Y3JlYXRlRXZlbnQoKTogQWdncmVnYXRlRXZlbnRUeXBlPEFnZ3JlZ2F0ZUV2ZW50PExpc3RWaWV3SWQ+PiB7XG5cdFx0cmV0dXJuIExpc3RWaWV3Q3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50O1xuXHR9XG5cblx0c2V0TW9kZShtb2RlOiBMaXN0Vmlld01vZGUpOiB2b2lkIHtcblx0XHR0aGlzLm1vZGUgPSBtb2RlO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IExpc3RWaWV3TW9kZVNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5tb2RlKSk7XG5cdH1cblxuXHR0b2dnbGVNb2RlU2VsZWN0b3IoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0b3JWaXNpYmlsaXR5LnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cdFx0dGhpcy5lbWl0RXZlbnRBZnRlclNlbGVjdG9yVmlzaWJpbGl0eUNoYW5nZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0U2VsZWN0b3JWaXNpYmlsaXR5KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0b3JWaXNpYmlsaXR5ID0gbmV3IFNlbGVjdG9yVmlzaWJpbGl0eSgpO1xuXHRcdHRoaXMuZW1pdEV2ZW50QWZ0ZXJTZWxlY3RvclZpc2liaWxpdHlDaGFuZ2UoKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdEV2ZW50QWZ0ZXJTZWxlY3RvclZpc2liaWxpdHlDaGFuZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMuc2VsZWN0b3JWaXNpYmlsaXR5LmlzVmlzaWJsZSgpKSk7XG5cdH1cbn1cbiJdfQ==