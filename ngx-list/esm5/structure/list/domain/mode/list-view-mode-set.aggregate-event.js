/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { ListViewModeSetEvent } from './list-view-mode-set.event';
var ListViewModeSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewModeSetAggregateEvent, _super);
    function ListViewModeSetAggregateEvent(listViewId, mode) {
        var _this = _super.call(this, listViewId, 'ListViewModeSetAggregateEvent') || this;
        _this.mode = mode;
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewModeSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new ListViewModeSetEvent(this.getAggregateId(), this.mode);
    };
    return ListViewModeSetAggregateEvent;
}(AggregateEvent));
export { ListViewModeSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewModeSetAggregateEvent.prototype.mode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUlsRTtJQUFtRCx5REFBMEI7SUFFNUUsdUNBQVksVUFBc0IsRUFDZCxJQUFrQjtRQUR0QyxZQUVDLGtCQUFNLFVBQVUsRUFBRSwrQkFBK0IsQ0FBQyxTQUNsRDtRQUZtQixVQUFJLEdBQUosSUFBSSxDQUFjOztJQUV0QyxDQUFDOzs7O0lBRUQscURBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNGLG9DQUFDO0FBQUQsQ0FBQyxBQVZELENBQW1ELGNBQWMsR0FVaEU7Ozs7Ozs7SUFQRyw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld01vZGVTZXRFdmVudCB9IGZyb20gJy4vbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50JztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi9saXN0LXZpZXctbW9kZSc7XG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld01vZGVTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PExpc3RWaWV3SWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihsaXN0Vmlld0lkOiBMaXN0Vmlld0lkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1vZGU6IExpc3RWaWV3TW9kZSkge1xuXHRcdHN1cGVyKGxpc3RWaWV3SWQsICdMaXN0Vmlld01vZGVTZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxMaXN0Vmlld0lkPiB7XG5cdFx0cmV0dXJuIG5ldyBMaXN0Vmlld01vZGVTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMubW9kZSk7XG5cdH1cbn1cbiJdfQ==