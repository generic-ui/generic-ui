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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9kb21haW4vbGlzdC12aWV3LmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFzQyxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNERBQTRELENBQUM7QUFHbkgsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGFBQXlCOzs7O0lBTS9ELFlBQVksVUFBc0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyw2QkFBNkIsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxJQUFrQjtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksNkJBQTZCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsT0FBZ0I7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsc0NBQXNDLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVPLHNCQUFzQjtRQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRU8sc0NBQXNDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RyxDQUFDO0NBQ0Q7Ozs7OztJQWhDQSxpQ0FBMkI7Ozs7O0lBRTNCLCtDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVFdmVudFR5cGUsIEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vYXBpL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NyZWF0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY3JlYXRlL2xpc3Qtdmlldy1jcmVhdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBTZWxlY3RvclZpc2liaWxpdHkgfSBmcm9tICcuL21vZGUvc2VsZWN0b3Ivc2VsZWN0b3ItdmlzaWJpbGl0eSc7XG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3QWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxMaXN0Vmlld0lkPiB7XG5cblx0cHJpdmF0ZSBtb2RlOiBMaXN0Vmlld01vZGU7XG5cblx0cHJpdmF0ZSBzZWxlY3RvclZpc2liaWxpdHk6IFNlbGVjdG9yVmlzaWJpbGl0eTtcblxuXHRjb25zdHJ1Y3RvcihsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKSB7XG5cdFx0c3VwZXIobGlzdFZpZXdJZCwgJ0xpc3RWaWV3QWdncmVnYXRlJyk7XG5cdFx0dGhpcy5zZXRNb2RlKExpc3RWaWV3TW9kZS5MSVNUKTtcblx0XHR0aGlzLmluaXRTZWxlY3RvclZpc2liaWxpdHkoKTtcblx0fVxuXG5cdGNyZWF0ZUV2ZW50KCk6IEFnZ3JlZ2F0ZUV2ZW50VHlwZTxBZ2dyZWdhdGVFdmVudDxMaXN0Vmlld0lkPj4ge1xuXHRcdHJldHVybiBMaXN0Vmlld0NyZWF0ZWRBZ2dyZWdhdGVFdmVudDtcblx0fVxuXG5cdHNldE1vZGUobW9kZTogTGlzdFZpZXdNb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5tb2RlID0gbW9kZTtcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBMaXN0Vmlld01vZGVTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMubW9kZSkpO1xuXHR9XG5cblx0dG9nZ2xlTW9kZVNlbGVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdG9yVmlzaWJpbGl0eS5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXHRcdHRoaXMuZW1pdEV2ZW50QWZ0ZXJTZWxlY3RvclZpc2liaWxpdHlDaGFuZ2UoKTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdFNlbGVjdG9yVmlzaWJpbGl0eSgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdG9yVmlzaWJpbGl0eSA9IG5ldyBTZWxlY3RvclZpc2liaWxpdHkoKTtcblx0XHR0aGlzLmVtaXRFdmVudEFmdGVyU2VsZWN0b3JWaXNpYmlsaXR5Q2hhbmdlKCk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRFdmVudEFmdGVyU2VsZWN0b3JWaXNpYmlsaXR5Q2hhbmdlKCk6IHZvaWQge1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLnNlbGVjdG9yVmlzaWJpbGl0eS5pc1Zpc2libGUoKSkpO1xuXHR9XG59XG4iXX0=