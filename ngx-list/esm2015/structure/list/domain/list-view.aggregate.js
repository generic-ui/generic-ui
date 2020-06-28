/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateRoot } from '@generic-ui/hermes';
import { ListViewCreatedAggregateEvent } from './create/list-view-created.aggregate-event';
import { ListViewModeSetAggregateEvent } from './mode/list-view-mode-set.aggregate-event';
import { ListViewMode } from './mode/list-view-mode';
import { SelectorVisibility } from './mode/selector/selector-visibility';
import { ListViewSelectorToggledAggregateEvent } from './mode/selector/list-view-selector-toggled.aggregate-event';
export class ListViewAggregate extends AggregateRoot {
    /**
     * @param {?} listViewId
     */
    constructor(listViewId) {
        super(listViewId, 'ListViewAggregate');
        this.setMode(ListViewMode.LIST);
        this.initSelectorVisibility();
    }
    /**
     * @return {?}
     */
    createEvent() {
        return ListViewCreatedAggregateEvent;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setMode(mode) {
        this.mode = mode;
        this.addEvent(new ListViewModeSetAggregateEvent(this.getId(), this.mode));
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    toggleModeSelector(enabled) {
        this.selectorVisibility.setEnabled(enabled);
        this.emitEventAfterSelectorVisibilityChange();
    }
    /**
     * @private
     * @return {?}
     */
    initSelectorVisibility() {
        this.selectorVisibility = new SelectorVisibility();
        this.emitEventAfterSelectorVisibilityChange();
    }
    /**
     * @private
     * @return {?}
     */
    emitEventAfterSelectorVisibilityChange() {
        this.addEvent(new ListViewSelectorToggledAggregateEvent(this.getId(), this.selectorVisibility.isVisible()));
    }
}
if (false) {
    /** @type {?} */
    ListViewAggregate.prototype.mode;
    /** @type {?} */
    ListViewAggregate.prototype.selectorVisibility;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluL2xpc3Qtdmlldy5hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBc0MsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0YsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBR25ILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUF5Qjs7OztJQU0vRCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sNkJBQTZCLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBa0I7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLDZCQUE2QixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLE9BQWdCO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFTyxzQkFBc0I7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsc0NBQXNDLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVPLHNDQUFzQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUkscUNBQXFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0csQ0FBQztDQUNEOzs7SUFoQ0EsaUNBQW1COztJQUVuQiwrQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlRXZlbnRUeXBlLCBBZ2dyZWdhdGVSb290IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3Q3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jcmVhdGUvbGlzdC12aWV3LWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy1tb2RlLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IFNlbGVjdG9yVmlzaWJpbGl0eSB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci9zZWxlY3Rvci12aXNpYmlsaXR5JztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdBZ2dyZWdhdGUgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PExpc3RWaWV3SWQ+IHtcblxuXHRtb2RlOiBMaXN0Vmlld01vZGU7XG5cblx0c2VsZWN0b3JWaXNpYmlsaXR5OiBTZWxlY3RvclZpc2liaWxpdHk7XG5cblx0Y29uc3RydWN0b3IobGlzdFZpZXdJZDogTGlzdFZpZXdJZCkge1xuXHRcdHN1cGVyKGxpc3RWaWV3SWQsICdMaXN0Vmlld0FnZ3JlZ2F0ZScpO1xuXHRcdHRoaXMuc2V0TW9kZShMaXN0Vmlld01vZGUuTElTVCk7XG5cdFx0dGhpcy5pbml0U2VsZWN0b3JWaXNpYmlsaXR5KCk7XG5cdH1cblxuXHRjcmVhdGVFdmVudCgpOiBBZ2dyZWdhdGVFdmVudFR5cGU8QWdncmVnYXRlRXZlbnQ8TGlzdFZpZXdJZD4+IHtcblx0XHRyZXR1cm4gTGlzdFZpZXdDcmVhdGVkQWdncmVnYXRlRXZlbnQ7XG5cdH1cblxuXHRzZXRNb2RlKG1vZGU6IExpc3RWaWV3TW9kZSk6IHZvaWQge1xuXHRcdHRoaXMubW9kZSA9IG1vZGU7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgTGlzdFZpZXdNb2RlU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLm1vZGUpKTtcblx0fVxuXG5cdHRvZ2dsZU1vZGVTZWxlY3RvcihlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RvclZpc2liaWxpdHkuc2V0RW5hYmxlZChlbmFibGVkKTtcblx0XHR0aGlzLmVtaXRFdmVudEFmdGVyU2VsZWN0b3JWaXNpYmlsaXR5Q2hhbmdlKCk7XG5cdH1cblxuXHRwcml2YXRlIGluaXRTZWxlY3RvclZpc2liaWxpdHkoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RvclZpc2liaWxpdHkgPSBuZXcgU2VsZWN0b3JWaXNpYmlsaXR5KCk7XG5cdFx0dGhpcy5lbWl0RXZlbnRBZnRlclNlbGVjdG9yVmlzaWJpbGl0eUNoYW5nZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0RXZlbnRBZnRlclNlbGVjdG9yVmlzaWJpbGl0eUNoYW5nZSgpOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5zZWxlY3RvclZpc2liaWxpdHkuaXNWaXNpYmxlKCkpKTtcblx0fVxufVxuIl19