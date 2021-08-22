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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUdsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV0RSxNQUFNLE9BQU8sNkJBQThCLFNBQVEsc0JBQXNCOzs7OztJQUV4RSxZQUFZLFVBQXNCLEVBQ2QsSUFBa0I7UUFDckMsS0FBSyxDQUFDLFVBQVUsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1FBRGhDLFNBQUksR0FBSixJQUFJLENBQWM7SUFFdEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0Q7Ozs7OztJQVBHLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdNb2RlU2V0RXZlbnQgfSBmcm9tICcuL2xpc3Qtdmlldy1tb2RlLXNldC5ldmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4vbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL2xpc3Qtdmlldy5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdNb2RlU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBMaXN0Vmlld0FnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihsaXN0Vmlld0lkOiBMaXN0Vmlld0lkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1vZGU6IExpc3RWaWV3TW9kZSkge1xuXHRcdHN1cGVyKGxpc3RWaWV3SWQsICdMaXN0Vmlld01vZGVTZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxMaXN0Vmlld0lkPiB7XG5cdFx0cmV0dXJuIG5ldyBMaXN0Vmlld01vZGVTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMubW9kZSk7XG5cdH1cbn1cbiJdfQ==