/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelRoot } from '@generic-ui/hermes';
var StructureReadModelRoot = /** @class */ (function (_super) {
    tslib_1.__extends(StructureReadModelRoot, _super);
    function StructureReadModelRoot(uid, formation, paging, entities, source, verticalFormation) {
        var _this = _super.call(this, uid) || this;
        _this.formation = formation;
        _this.paging = paging;
        _this.entities = entities;
        _this.source = source;
        _this.verticalFormation = verticalFormation;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureReadModelRoot.prototype.getFormation = /**
     * @return {?}
     */
    function () {
        return this.formation;
    };
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
    /**
     * @return {?}
     */
    StructureReadModelRoot.prototype.getSelectedEntities = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedIds = this.formation.getSelectedRows().getIds();
        return this.entities.filter((/**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            return selectedIds.some((/**
             * @param {?} id
             * @return {?}
             */
            function (id) { return entity.equalsById(id); }));
        }));
    };
    /**
     * @return {?}
     */
    StructureReadModelRoot.prototype.getTopMargin = /**
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
    StructureReadModelRoot.prototype.formation;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVW5EO0lBQTRDLGtEQUF1QztJQVlsRixnQ0FBWSxHQUE2QixFQUN0QyxTQUFvQixFQUNwQixNQUFjLEVBQ2QsUUFBMkIsRUFDM0IsTUFBYyxFQUNkLGlCQUE2QztRQUxoRCxZQU1DLGtCQUFNLEdBQUcsQ0FBQyxTQU1WO1FBTEEsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDOztJQUM1QyxDQUFDOzs7O0lBRUQsNkNBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCwwQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsMENBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxxREFBb0I7OztJQUFwQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxvREFBbUI7OztJQUFuQjs7WUFFTyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLEVBQUU7UUFFN0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLE1BQWtCO1lBQzlDLE9BQU8sV0FBVyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLEVBQVUsSUFBSyxPQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQXJCLENBQXFCLEVBQUMsQ0FBQztRQUNoRSxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw2Q0FBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsZ0RBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELGdEQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxpREFBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLDZFQUE2RTtJQUM5RSxDQUFDOzs7O0lBRUQsd0RBQXVCOzs7SUFBdkI7UUFDQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUYsNkJBQUM7QUFBRCxDQUFDLEFBNUVELENBQTRDLGFBQWEsR0E0RXhEOzs7Ozs7O0lBMUVBLDJDQUFzQzs7Ozs7SUFFdEMsd0NBQWdDOzs7OztJQUVoQywwQ0FBNkM7Ozs7O0lBRTdDLHdDQUFnQzs7Ozs7SUFFaEMsbURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsUm9vdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbiB9IGZyb20gJy4uL2Zvcm1hdGlvbi9mb3JtYXRpb24nO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vcGFnaW5nL3BhZ2luZyc7XG5pbXBvcnQgeyBTb3VyY2UgfSBmcm9tICcuLi9zb3VyY2Uvc291cmNlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCBleHRlbmRzIFJlYWRNb2RlbFJvb3Q8U3RydWN0dXJlUmVhZE1vZGVsUm9vdElkPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb246IEZvcm1hdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZzogUGFnaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc291cmNlOiBTb3VyY2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw7XG5cblx0Y29uc3RydWN0b3IodWlkOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdGZvcm1hdGlvbjogRm9ybWF0aW9uLFxuXHRcdFx0XHRwYWdpbmc6IFBhZ2luZyxcblx0XHRcdFx0ZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+LFxuXHRcdFx0XHRzb3VyY2U6IFNvdXJjZSxcblx0XHRcdFx0dmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSB7XG5cdFx0c3VwZXIodWlkKTtcblx0XHR0aGlzLmZvcm1hdGlvbiA9IGZvcm1hdGlvbjtcblx0XHR0aGlzLnBhZ2luZyA9IHBhZ2luZztcblx0XHR0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiA9IHZlcnRpY2FsRm9ybWF0aW9uO1xuXHR9XG5cblx0Z2V0Rm9ybWF0aW9uKCk6IEZvcm1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uO1xuXHR9XG5cblx0Z2V0UGFnaW5nKCk6IFBhZ2luZyB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nO1xuXHR9XG5cblx0Z2V0RW50aXRpZXMoKTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzO1xuXHR9XG5cblx0Z2V0U291cmNlKCk6IFNvdXJjZSB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlO1xuXHR9XG5cblx0Z2V0VmVydGljYWxGb3JtYXRpb24oKTogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRFbnRpdGllcygpOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cblx0XHRjb25zdCBzZWxlY3RlZElkcyA9IHRoaXMuZm9ybWF0aW9uLmdldFNlbGVjdGVkUm93cygpLmdldElkcygpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXMuZmlsdGVyKChlbnRpdHk6IEl0ZW1FbnRpdHkpID0+IHtcblx0XHRcdHJldHVybiBzZWxlY3RlZElkcy5zb21lKChpZDogc3RyaW5nKSA9PiBlbnRpdHkuZXF1YWxzQnlJZChpZCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0VG9wTWFyZ2luKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0VG9wTWFyZ2luKCk7XG5cdH1cblxuXHRpc0xvYWRlclZpc2libGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0U291cmNlKCkuaXNMb2FkaW5nKCk7XG5cdH1cblxuXHRnZXRTb3VyY2VIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5nZXRTb3VyY2VIZWlnaHQoKTtcblx0fVxuXG5cdGlzUmVhZHlUb0Rpc3BsYXkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXMubGVuZ3RoID4gMDtcblx0XHQvLyB0aGlzLnByZXNlbnRhdGlvbi5nZXRDb2x1bW5zKCkubGVuZ3RoID4gMDsgLy8gVE9ETyBwcmVzZW50YXRpb24gZ2V0Q29sdW1uc1xuXHR9XG5cblx0aXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCk7XG5cdH1cblxufVxuXG4iXX0=