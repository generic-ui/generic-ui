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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVW5EO0lBQTRDLGtEQUF1QztJQVlsRixnQ0FBWSxHQUE2QixFQUN0QyxTQUFvQixFQUNwQixNQUFjLEVBQ2QsUUFBMkIsRUFDM0IsTUFBYyxFQUNkLGlCQUE2QztRQUxoRCxZQU1DLGtCQUFNLEdBQUcsQ0FBQyxTQU1WO1FBTEEsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDOztJQUM1QyxDQUFDOzs7O0lBRUQsNkNBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCwwQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsMENBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxxREFBb0I7OztJQUFwQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxvREFBbUI7OztJQUFuQjs7WUFFTyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLEVBQUU7UUFFN0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLE1BQWtCO1lBQzlDLE9BQU8sV0FBVyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLEVBQVUsSUFBSyxPQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQXJCLENBQXFCLEVBQUMsQ0FBQztRQUNoRSxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjOzs7OztJQUNkLDZDQUFZOzs7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELGdEQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsaURBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyw2RUFBNkU7SUFDOUUsQ0FBQzs7OztJQUVELHdEQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVGLDZCQUFDO0FBQUQsQ0FBQyxBQTdFRCxDQUE0QyxhQUFhLEdBNkV4RDs7Ozs7OztJQTNFQSwyQ0FBc0M7Ozs7O0lBRXRDLHdDQUFnQzs7Ozs7SUFFaEMsMENBQTZDOzs7OztJQUU3Qyx3Q0FBZ0M7Ozs7O0lBRWhDLG1EQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWRNb2RlbFJvb3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb24gfSBmcm9tICcuLi9mb3JtYXRpb24vZm9ybWF0aW9uJztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uL3BhZ2luZy9wYWdpbmcnO1xuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnLi4vc291cmNlL3NvdXJjZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgZXh0ZW5kcyBSZWFkTW9kZWxSb290PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uOiBGb3JtYXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmc6IFBhZ2luZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogU291cmNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsO1xuXG5cdGNvbnN0cnVjdG9yKHVpZDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRmb3JtYXRpb246IEZvcm1hdGlvbixcblx0XHRcdFx0cGFnaW5nOiBQYWdpbmcsXG5cdFx0XHRcdGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5Pixcblx0XHRcdFx0c291cmNlOiBTb3VyY2UsXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkge1xuXHRcdHN1cGVyKHVpZCk7XG5cdFx0dGhpcy5mb3JtYXRpb24gPSBmb3JtYXRpb247XG5cdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0dGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24gPSB2ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdGdldEZvcm1hdGlvbigpOiBGb3JtYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbjtcblx0fVxuXG5cdGdldFBhZ2luZygpOiBQYWdpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZztcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcztcblx0fVxuXG5cdGdldFNvdXJjZSgpOiBTb3VyY2Uge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZTtcblx0fVxuXG5cdGdldFZlcnRpY2FsRm9ybWF0aW9uKCk6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdGdldFNlbGVjdGVkRW50aXRpZXMoKTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRJZHMgPSB0aGlzLmZvcm1hdGlvbi5nZXRTZWxlY3RlZFJvd3MoKS5nZXRJZHMoKTtcblxuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzLmZpbHRlcigoZW50aXR5OiBJdGVtRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWRJZHMuc29tZSgoaWQ6IHN0cmluZykgPT4gZW50aXR5LmVxdWFsc0J5SWQoaWQpKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIFRPRE8gUmVtb3ZlXG5cdGdldFRvcE1hcmdpbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFRvcE1hcmdpbigpO1xuXHR9XG5cblx0aXNMb2FkZXJWaXNpYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldFNvdXJjZSgpLmlzTG9hZGluZygpO1xuXHR9XG5cblx0Z2V0U291cmNlSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0U291cmNlSGVpZ2h0KCk7XG5cdH1cblxuXHRpc1JlYWR5VG9EaXNwbGF5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzLmxlbmd0aCA+IDA7XG5cdFx0Ly8gdGhpcy5wcmVzZW50YXRpb24uZ2V0Q29sdW1ucygpLmxlbmd0aCA+IDA7IC8vIFRPRE8gcHJlc2VudGF0aW9uIGdldENvbHVtbnNcblx0fVxuXG5cdGlzVmVydGljYWxTY3JvbGxFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmlzRW5hYmxlZCgpO1xuXHR9XG5cbn1cblxuIl19