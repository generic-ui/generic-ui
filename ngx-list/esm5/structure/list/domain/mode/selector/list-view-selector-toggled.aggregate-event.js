/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { ListViewSelectorToggledEvent } from './list-view-selector-toggled.event';
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
}(AggregateEvent));
export { ListViewSelectorToggledAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewSelectorToggledAggregateEvent.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9kb21haW4vbW9kZS9zZWxlY3Rvci9saXN0LXZpZXctc2VsZWN0b3ItdG9nZ2xlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFFakUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFJbEY7SUFBMkQsaUVBQTBCO0lBRXBGLCtDQUFZLFVBQXNCLEVBQ2QsT0FBZ0I7UUFEcEMsWUFFQyxrQkFBTSxVQUFVLEVBQUUsdUNBQXVDLENBQUMsU0FDMUQ7UUFGbUIsYUFBTyxHQUFQLE9BQU8sQ0FBUzs7SUFFcEMsQ0FBQzs7OztJQUVELDZEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFDRiw0Q0FBQztBQUFELENBQUMsQUFWRCxDQUEyRCxjQUFjLEdBVXhFOzs7Ozs7O0lBUEcsd0RBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudCB9IGZyb20gJy4vbGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2xpc3Qtdmlldy5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxMaXN0Vmlld0lkPiB7XG5cblx0Y29uc3RydWN0b3IobGlzdFZpZXdJZDogTGlzdFZpZXdJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIobGlzdFZpZXdJZCwgJ0xpc3RWaWV3U2VsZWN0b3JUb2dnbGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8TGlzdFZpZXdJZD4ge1xuXHRcdHJldHVybiBuZXcgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMuZW5hYmxlZCk7XG5cdH1cbn1cbiJdfQ==