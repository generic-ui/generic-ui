/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ListViewDomainEvent } from '../list-view.domain-event';
var ListViewModeSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewModeSetEvent, _super);
    function ListViewModeSetEvent(schemaId, mode) {
        var _this = _super.call(this, schemaId, mode, 'ListViewModeSetEvent') || this;
        _this.mode = mode;
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewModeSetEvent.prototype.getTheme = /**
     * @return {?}
     */
    function () {
        return this.mode;
    };
    return ListViewModeSetEvent;
}(ListViewDomainEvent));
export { ListViewModeSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewModeSetEvent.prototype.mode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9jb3JlL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR2hFO0lBQTBDLGdEQUFtQjtJQUU1RCw4QkFBWSxRQUFvQixFQUNaLElBQWtCO1FBRHRDLFlBRUMsa0JBQU0sUUFBUSxFQUFFLElBQUksRUFBRSxzQkFBc0IsQ0FBQyxTQUM3QztRQUZtQixVQUFJLEdBQUosSUFBSSxDQUFjOztJQUV0QyxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFDRiwyQkFBQztBQUFELENBQUMsQUFWRCxDQUEwQyxtQkFBbUIsR0FVNUQ7Ozs7Ozs7SUFQRyxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4vbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdEb21haW5FdmVudCB9IGZyb20gJy4uL2xpc3Qtdmlldy5kb21haW4tZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld01vZGVTZXRFdmVudCBleHRlbmRzIExpc3RWaWV3RG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHNjaGVtYUlkOiBMaXN0Vmlld0lkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1vZGU6IExpc3RWaWV3TW9kZSkge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCBtb2RlLCAnTGlzdFZpZXdNb2RlU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldFRoZW1lKCk6IExpc3RWaWV3TW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubW9kZTtcblx0fVxufVxuIl19