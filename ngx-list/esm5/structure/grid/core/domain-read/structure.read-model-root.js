/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelRoot } from '@generic-ui/hermes';
var StructureReadModelRoot = /** @class */ (function (_super) {
    tslib_1.__extends(StructureReadModelRoot, _super);
    function StructureReadModelRoot(uid, paging, entities, source, verticalFormation) {
        var _this = _super.call(this, uid) || this;
        _this.paging = paging;
        _this.entities = entities;
        _this.source = source;
        _this.verticalFormation = verticalFormation;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureReadModelRoot.prototype.getPaging = /**
     * @return {?}
     */
    function () {
        return this.paging;
    };
    /**
     * @return {?}
     */
    StructureReadModelRoot.prototype.getEntities = /**
     * @return {?}
     */
    function () {
        return this.entities;
    };
    /**
     * @return {?}
     */
    StructureReadModelRoot.prototype.getSource = /**
     * @return {?}
     */
    function () {
        return this.source;
    };
    /**
     * @return {?}
     */
    StructureReadModelRoot.prototype.getVerticalFormation = /**
     * @return {?}
     */
    function () {
        return this.verticalFormation;
    };
    // TODO Remove
    // TODO Remove
    /**
     * @return {?}
     */
    StructureReadModelRoot.prototype.getTopMargin = 
    // TODO Remove
    /**
     * @return {?}
     */
    function () {
        return this.verticalFormation.getTopMargin();
    };
    /**
     * @return {?}
     */
    StructureReadModelRoot.prototype.isLoaderVisible = /**
     * @return {?}
     */
    function () {
        return this.getSource().isLoading();
    };
    /**
     * @return {?}
     */
    StructureReadModelRoot.prototype.getSourceHeight = /**
     * @return {?}
     */
    function () {
        return this.verticalFormation.getSourceHeight();
    };
    /**
     * @return {?}
     */
    StructureReadModelRoot.prototype.isReadyToDisplay = /**
     * @return {?}
     */
    function () {
        return this.entities.length > 0;
        // this.presentation.getColumns().length > 0; // TODO presentation getColumns
    };
    /**
     * @return {?}
     */
    StructureReadModelRoot.prototype.isVerticalScrollEnabled = /**
     * @return {?}
     */
    function () {
        return this.verticalFormation.isEnabled();
    };
    return StructureReadModelRoot;
}(ReadModelRoot));
export { StructureReadModelRoot };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRoot.prototype.paging;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRoot.prototype.entities;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRoot.prototype.source;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRoot.prototype.verticalFormation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvY29yZS9kb21haW4tcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBU25EO0lBQTRDLGtEQUF1QztJQVVsRixnQ0FBWSxHQUE2QixFQUN0QyxNQUFjLEVBQ2QsUUFBMkIsRUFDM0IsTUFBYyxFQUNkLGlCQUE2QztRQUpoRCxZQUtDLGtCQUFNLEdBQUcsQ0FBQyxTQUtWO1FBSkEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDOztJQUM1QyxDQUFDOzs7O0lBRUQsMENBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDBDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQscURBQW9COzs7SUFBcEI7UUFDQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsY0FBYzs7Ozs7SUFDZCw2Q0FBWTs7Ozs7SUFBWjtRQUNDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsZ0RBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGlEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsNkVBQTZFO0lBQzlFLENBQUM7Ozs7SUFFRCx3REFBdUI7OztJQUF2QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRiw2QkFBQztBQUFELENBQUMsQUE1REQsQ0FBNEMsYUFBYSxHQTREeEQ7Ozs7Ozs7SUExREEsd0NBQWdDOzs7OztJQUVoQywwQ0FBNkM7Ozs7O0lBRTdDLHdDQUFnQzs7Ozs7SUFFaEMsbURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsUm9vdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvcmVhZC9zb3VyY2UnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCBleHRlbmRzIFJlYWRNb2RlbFJvb3Q8U3RydWN0dXJlUmVhZE1vZGVsUm9vdElkPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmc6IFBhZ2luZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogU291cmNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsO1xuXG5cdGNvbnN0cnVjdG9yKHVpZDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwYWdpbmc6IFBhZ2luZyxcblx0XHRcdFx0ZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+LFxuXHRcdFx0XHRzb3VyY2U6IFNvdXJjZSxcblx0XHRcdFx0dmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSB7XG5cdFx0c3VwZXIodWlkKTtcblx0XHR0aGlzLnBhZ2luZyA9IHBhZ2luZztcblx0XHR0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiA9IHZlcnRpY2FsRm9ybWF0aW9uO1xuXHR9XG5cblx0Z2V0UGFnaW5nKCk6IFBhZ2luZyB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nO1xuXHR9XG5cblx0Z2V0RW50aXRpZXMoKTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzO1xuXHR9XG5cblx0Z2V0U291cmNlKCk6IFNvdXJjZSB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlO1xuXHR9XG5cblx0Z2V0VmVydGljYWxGb3JtYXRpb24oKTogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uO1xuXHR9XG5cblx0Ly8gVE9ETyBSZW1vdmVcblx0Z2V0VG9wTWFyZ2luKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0VG9wTWFyZ2luKCk7XG5cdH1cblxuXHRpc0xvYWRlclZpc2libGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0U291cmNlKCkuaXNMb2FkaW5nKCk7XG5cdH1cblxuXHRnZXRTb3VyY2VIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5nZXRTb3VyY2VIZWlnaHQoKTtcblx0fVxuXG5cdGlzUmVhZHlUb0Rpc3BsYXkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXMubGVuZ3RoID4gMDtcblx0XHQvLyB0aGlzLnByZXNlbnRhdGlvbi5nZXRDb2x1bW5zKCkubGVuZ3RoID4gMDsgLy8gVE9ETyBwcmVzZW50YXRpb24gZ2V0Q29sdW1uc1xuXHR9XG5cblx0aXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCk7XG5cdH1cblxufVxuXG4iXX0=