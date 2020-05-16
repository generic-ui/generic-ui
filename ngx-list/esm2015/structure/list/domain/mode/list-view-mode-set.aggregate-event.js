/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { ListViewModeSetEvent } from './list-view-mode-set.event';
export class ListViewModeSetAggregateEvent extends AggregateEvent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSWxFLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxjQUEwQjs7Ozs7SUFFNUUsWUFBWSxVQUFzQixFQUNkLElBQWtCO1FBQ3JDLEtBQUssQ0FBQyxVQUFVLEVBQUUsK0JBQStCLENBQUMsQ0FBQztRQURoQyxTQUFJLEdBQUosSUFBSSxDQUFjO0lBRXRDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNEOzs7Ozs7SUFQRyw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld01vZGVTZXRFdmVudCB9IGZyb20gJy4vbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50JztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi9saXN0LXZpZXctbW9kZSc7XG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld01vZGVTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PExpc3RWaWV3SWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihsaXN0Vmlld0lkOiBMaXN0Vmlld0lkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1vZGU6IExpc3RWaWV3TW9kZSkge1xuXHRcdHN1cGVyKGxpc3RWaWV3SWQsICdMaXN0Vmlld01vZGVTZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxMaXN0Vmlld0lkPiB7XG5cdFx0cmV0dXJuIG5ldyBMaXN0Vmlld01vZGVTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMubW9kZSk7XG5cdH1cbn1cbiJdfQ==