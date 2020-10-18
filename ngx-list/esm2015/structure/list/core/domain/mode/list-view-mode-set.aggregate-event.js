/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ListViewModeSetEvent } from './list-view-mode-set.event';
import { ListViewAggregateEvent } from '../list-view.aggregate-event';
export class ListViewModeSetAggregateEvent extends ListViewAggregateEvent {
    /**
     * @param {?} listViewId
     * @param {?} mode
     */
    constructor(listViewId, mode) {
        super(listViewId, 'ListViewModeSetAggregateEvent');
        this.mode = mode;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new ListViewModeSetEvent(this.getAggregateId(), this.mode);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewModeSetAggregateEvent.prototype.mode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUdsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV0RSxNQUFNLE9BQU8sNkJBQThCLFNBQVEsc0JBQXNCOzs7OztJQUV4RSxZQUFZLFVBQXNCLEVBQ2QsSUFBa0I7UUFDckMsS0FBSyxDQUFDLFVBQVUsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1FBRGhDLFNBQUksR0FBSixJQUFJLENBQWM7SUFFdEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0Q7Ozs7OztJQVBHLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdNb2RlU2V0RXZlbnQgfSBmcm9tICcuL2xpc3Qtdmlldy1tb2RlLXNldC5ldmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vLi4vYXBpL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9saXN0LXZpZXcuYWdncmVnYXRlLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZVNldEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgTGlzdFZpZXdBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IobGlzdFZpZXdJZDogTGlzdFZpZXdJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtb2RlOiBMaXN0Vmlld01vZGUpIHtcblx0XHRzdXBlcihsaXN0Vmlld0lkLCAnTGlzdFZpZXdNb2RlU2V0QWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8TGlzdFZpZXdJZD4ge1xuXHRcdHJldHVybiBuZXcgTGlzdFZpZXdNb2RlU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLm1vZGUpO1xuXHR9XG59XG4iXX0=