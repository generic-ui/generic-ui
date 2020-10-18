/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
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
}(StructureDomainEvent));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEY7SUFBNkMsbURBQW9CO0lBRWhFLGlDQUFZLFdBQXdCLEVBQ2hCLFlBQTJCLEVBQzNCLFdBQW9CLEVBQ3BCLGFBQXNCO1FBSDFDLFlBSUMsa0JBQU0sV0FBVyxFQUFFLHlCQUF5QixDQUFDLFNBQzdDO1FBSm1CLGtCQUFZLEdBQVosWUFBWSxDQUFlO1FBQzNCLGlCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLG1CQUFhLEdBQWIsYUFBYSxDQUFTOztJQUUxQyxDQUFDOzs7O0lBRUQsaURBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCwrQ0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGlEQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBQ0YsOEJBQUM7QUFBRCxDQUFDLEFBcEJELENBQTZDLG9CQUFvQixHQW9CaEU7Ozs7Ozs7SUFqQkcsK0NBQTRDOzs7OztJQUM1Qyw4Q0FBcUM7Ozs7O0lBQ3JDLGdEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0ZWRSb3dzOiBBcnJheTxzdHJpbmc+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFsbFNlbGVjdGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFsbFVuc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NlbGVjdGVkUm93Q2hhbmdlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3dzO1xuXHR9XG5cblx0aXNBbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxTZWxlY3RlZDtcblx0fVxuXG5cdGlzQWxsVW5zZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxVbnNlbGVjdGVkO1xuXHR9XG59XG4iXX0=