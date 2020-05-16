/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { ListViewSelectorToggledEvent } from './list-view-selector-toggled.event';
export class ListViewSelectorToggledAggregateEvent extends AggregateEvent {
    /**
     * @param {?} listViewId
     * @param {?} enabled
     */
    constructor(listViewId, enabled) {
        super(listViewId, 'ListViewSelectorToggledAggregateEvent');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new ListViewSelectorToggledEvent(this.getAggregateId(), this.enabled);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewSelectorToggledAggregateEvent.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9kb21haW4vbW9kZS9zZWxlY3Rvci9saXN0LXZpZXctc2VsZWN0b3ItdG9nZ2xlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUlsRixNQUFNLE9BQU8scUNBQXNDLFNBQVEsY0FBMEI7Ozs7O0lBRXBGLFlBQVksVUFBc0IsRUFDZCxPQUFnQjtRQUNuQyxLQUFLLENBQUMsVUFBVSxFQUFFLHVDQUF1QyxDQUFDLENBQUM7UUFEeEMsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUVwQyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlFLENBQUM7Q0FDRDs7Ozs7O0lBUEcsd0RBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudCB9IGZyb20gJy4vbGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2xpc3Qtdmlldy5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxMaXN0Vmlld0lkPiB7XG5cblx0Y29uc3RydWN0b3IobGlzdFZpZXdJZDogTGlzdFZpZXdJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIobGlzdFZpZXdJZCwgJ0xpc3RWaWV3U2VsZWN0b3JUb2dnbGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8TGlzdFZpZXdJZD4ge1xuXHRcdHJldHVybiBuZXcgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMuZW5hYmxlZCk7XG5cdH1cbn1cbiJdfQ==