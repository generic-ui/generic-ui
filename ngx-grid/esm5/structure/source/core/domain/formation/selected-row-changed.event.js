/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
var SelectedRowChangedEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedRowChangedEvent, _super);
    function SelectedRowChangedEvent(structureId, selectedRows, allSelected, allUnselected) {
        var _this = _super.call(this, structureId, { selectedRows: selectedRows, allSelected: allSelected, allUnselected: allUnselected }, 'SelectedRowChangedEvent') || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEY7SUFBNkMsbURBQW9CO0lBRWhFLGlDQUFZLFdBQXdCLEVBQ2hCLFlBQTJCLEVBQzNCLFdBQW9CLEVBQ3BCLGFBQXNCO1FBSDFDLFlBSUMsa0JBQU0sV0FBVyxFQUFFLEVBQUUsWUFBWSxjQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsYUFBYSxlQUFBLEVBQUUsRUFBRSx5QkFBeUIsQ0FBQyxTQUMzRjtRQUptQixrQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUMzQixpQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUNwQixtQkFBYSxHQUFiLGFBQWEsQ0FBUzs7SUFFMUMsQ0FBQzs7OztJQUVELGlEQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsK0NBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxpREFBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUNGLDhCQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUE2QyxvQkFBb0IsR0FvQmhFOzs7Ozs7O0lBakJHLCtDQUE0Qzs7Ozs7SUFDNUMsOENBQXFDOzs7OztJQUNyQyxnREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGVkUm93czogQXJyYXk8c3RyaW5nPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxTZWxlY3RlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxVbnNlbGVjdGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIHsgc2VsZWN0ZWRSb3dzLCBhbGxTZWxlY3RlZCwgYWxsVW5zZWxlY3RlZCB9LCAnU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQnKTtcblx0fVxuXG5cdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZFJvd3M7XG5cdH1cblxuXHRpc0FsbFNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFNlbGVjdGVkO1xuXHR9XG5cblx0aXNBbGxVbnNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFVuc2VsZWN0ZWQ7XG5cdH1cbn1cbiJdfQ==