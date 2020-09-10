/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { SelectedRowChangedEvent } from './selected-row-changed.event';
var SelectedRowChangedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedRowChangedAggregateEvent, _super);
    function SelectedRowChangedAggregateEvent(structureId, selectedRows, allSelected, allUnselected) {
        var _this = _super.call(this, structureId, 'SelectedRowChangedAggregateEvent') || this;
        _this.selectedRows = selectedRows;
        _this.allSelected = allSelected;
        _this.allUnselected = allUnselected;
        return _this;
    }
    /**
     * @return {?}
     */
    SelectedRowChangedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new SelectedRowChangedEvent(this.getAggregateId(), this.selectedRows, this.allSelected, this.allUnselected);
    };
    return SelectedRowChangedAggregateEvent;
}(AggregateEvent));
export { SelectedRowChangedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedAggregateEvent.prototype.selectedRows;
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedAggregateEvent.prototype.allSelected;
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedAggregateEvent.prototype.allUnselected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9mb3JtYXRpb24vc2VsZWN0ZWQtcm93LWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXZFO0lBQXNELDREQUEyQjtJQUVoRiwwQ0FBWSxXQUF3QixFQUNoQixZQUEyQixFQUMzQixXQUFvQixFQUNwQixhQUFzQjtRQUgxQyxZQUlDLGtCQUFNLFdBQVcsRUFBRSxrQ0FBa0MsQ0FBQyxTQUN0RDtRQUptQixrQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUMzQixpQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUNwQixtQkFBYSxHQUFiLGFBQWEsQ0FBUzs7SUFFMUMsQ0FBQzs7OztJQUVELHdEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwSCxDQUFDO0lBQ0YsdUNBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBc0QsY0FBYyxHQVluRTs7Ozs7OztJQVRHLHdEQUE0Qzs7Ozs7SUFDNUMsdURBQXFDOzs7OztJQUNyQyx5REFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCB9IGZyb20gJy4vc2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0ZWRSb3dDaGFuZ2VkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RlZFJvd3M6IEFycmF5PHN0cmluZz4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxsU2VsZWN0ZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxsVW5zZWxlY3RlZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2VsZWN0ZWRSb3dDaGFuZ2VkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5zZWxlY3RlZFJvd3MsIHRoaXMuYWxsU2VsZWN0ZWQsIHRoaXMuYWxsVW5zZWxlY3RlZCk7XG5cdH1cbn1cbiJdfQ==