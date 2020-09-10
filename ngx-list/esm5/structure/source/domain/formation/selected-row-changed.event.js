/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var SelectedRowChangedEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedRowChangedEvent, _super);
    function SelectedRowChangedEvent(structureId, selectedRows, allSelected, allUnselected) {
        var _this = _super.call(this, structureId, 'SelectedRowChangedEvent') || this;
        _this.selectedRows = selectedRows;
        _this.allSelected = allSelected;
        _this.allUnselected = allUnselected;
        return _this;
    }
    /**
     * @return {?}
     */
    SelectedRowChangedEvent.prototype.getSelectedRows = /**
     * @return {?}
     */
    function () {
        return this.selectedRows;
    };
    /**
     * @return {?}
     */
    SelectedRowChangedEvent.prototype.isAllSelected = /**
     * @return {?}
     */
    function () {
        return this.allSelected;
    };
    /**
     * @return {?}
     */
    SelectedRowChangedEvent.prototype.isAllUnselected = /**
     * @return {?}
     */
    function () {
        return this.allUnselected;
    };
    return SelectedRowChangedEvent;
}(DomainEvent));
export { SelectedRowChangedEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedEvent.prototype.selectedRows;
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedEvent.prototype.allSelected;
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedEvent.prototype.allUnselected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlqRDtJQUE2QyxtREFBd0I7SUFFcEUsaUNBQVksV0FBd0IsRUFDaEIsWUFBMkIsRUFDM0IsV0FBb0IsRUFDcEIsYUFBc0I7UUFIMUMsWUFJQyxrQkFBTSxXQUFXLEVBQUUseUJBQXlCLENBQUMsU0FDN0M7UUFKbUIsa0JBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsaUJBQVcsR0FBWCxXQUFXLENBQVM7UUFDcEIsbUJBQWEsR0FBYixhQUFhLENBQVM7O0lBRTFDLENBQUM7Ozs7SUFFRCxpREFBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELCtDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsaURBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFDRiw4QkFBQztBQUFELENBQUMsQUFwQkQsQ0FBNkMsV0FBVyxHQW9CdkQ7Ozs7Ozs7SUFqQkcsK0NBQTRDOzs7OztJQUM1Qyw4Q0FBcUM7Ozs7O0lBQ3JDLGdEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RlZFJvd3M6IEFycmF5PHN0cmluZz4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxsU2VsZWN0ZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxsVW5zZWxlY3RlZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQnKTtcblx0fVxuXG5cdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZFJvd3M7XG5cdH1cblxuXHRpc0FsbFNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFNlbGVjdGVkO1xuXHR9XG5cblx0aXNBbGxVbnNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFVuc2VsZWN0ZWQ7XG5cdH1cbn1cbiJdfQ==