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
    /** @type {?} */
    ListViewAggregate.prototype.mode;
    /** @type {?} */
    ListViewAggregate.prototype.selectorVisibility;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluL2xpc3Qtdmlldy5hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQWtCLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR25FLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUduSDtJQUF1Qyw2Q0FBeUI7SUFNL0QsMkJBQVksVUFBc0I7UUFBbEMsWUFDQyxrQkFBTSxVQUFVLEVBQUUsbUJBQW1CLENBQUMsU0FHdEM7UUFGQSxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzs7SUFDL0IsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNDLE9BQU8sNkJBQTZCLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxtQ0FBTzs7OztJQUFQLFVBQVEsSUFBa0I7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLDZCQUE2QixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVELDhDQUFrQjs7OztJQUFsQixVQUFtQixPQUFnQjtRQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRU8sa0RBQXNCOzs7O0lBQTlCO1FBQ0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsc0NBQXNDLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVPLGtFQUFzQzs7OztJQUE5QztRQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RyxDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBbENELENBQXVDLGFBQWEsR0FrQ25EOzs7O0lBaENBLGlDQUFtQjs7SUFFbkIsK0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlUm9vdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NyZWF0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY3JlYXRlL2xpc3Qtdmlldy1jcmVhdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBTZWxlY3RvclZpc2liaWxpdHkgfSBmcm9tICcuL21vZGUvc2VsZWN0b3Ivc2VsZWN0b3ItdmlzaWJpbGl0eSc7XG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3QWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxMaXN0Vmlld0lkPiB7XG5cblx0bW9kZTogTGlzdFZpZXdNb2RlO1xuXG5cdHNlbGVjdG9yVmlzaWJpbGl0eTogU2VsZWN0b3JWaXNpYmlsaXR5O1xuXG5cdGNvbnN0cnVjdG9yKGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpIHtcblx0XHRzdXBlcihsaXN0Vmlld0lkLCAnTGlzdFZpZXdBZ2dyZWdhdGUnKTtcblx0XHR0aGlzLnNldE1vZGUoTGlzdFZpZXdNb2RlLkxJU1QpO1xuXHRcdHRoaXMuaW5pdFNlbGVjdG9yVmlzaWJpbGl0eSgpO1xuXHR9XG5cblx0Y3JlYXRlRXZlbnQoKTogVHlwZTxBZ2dyZWdhdGVFdmVudDxMaXN0Vmlld0lkPj4ge1xuXHRcdHJldHVybiBMaXN0Vmlld0NyZWF0ZWRBZ2dyZWdhdGVFdmVudDtcblx0fVxuXG5cdHNldE1vZGUobW9kZTogTGlzdFZpZXdNb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5tb2RlID0gbW9kZTtcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBMaXN0Vmlld01vZGVTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMubW9kZSkpO1xuXHR9XG5cblx0dG9nZ2xlTW9kZVNlbGVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdG9yVmlzaWJpbGl0eS5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXHRcdHRoaXMuZW1pdEV2ZW50QWZ0ZXJTZWxlY3RvclZpc2liaWxpdHlDaGFuZ2UoKTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdFNlbGVjdG9yVmlzaWJpbGl0eSgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdG9yVmlzaWJpbGl0eSA9IG5ldyBTZWxlY3RvclZpc2liaWxpdHkoKTtcblx0XHR0aGlzLmVtaXRFdmVudEFmdGVyU2VsZWN0b3JWaXNpYmlsaXR5Q2hhbmdlKCk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRFdmVudEFmdGVyU2VsZWN0b3JWaXNpYmlsaXR5Q2hhbmdlKCk6IHZvaWQge1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLnNlbGVjdG9yVmlzaWJpbGl0eS5pc1Zpc2libGUoKSkpO1xuXHR9XG59XG4iXX0=