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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVVuRDtJQUE0QyxrREFBdUM7SUFZbEYsZ0NBQVksR0FBNkIsRUFDdEMsU0FBb0IsRUFDcEIsTUFBYyxFQUNkLFFBQTJCLEVBQzNCLE1BQWMsRUFDZCxpQkFBNkM7UUFMaEQsWUFNQyxrQkFBTSxHQUFHLENBQUMsU0FNVjtRQUxBLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQzs7SUFDNUMsQ0FBQzs7OztJQUVELDZDQUFZOzs7SUFBWjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsMENBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDBDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQscURBQW9COzs7SUFBcEI7UUFDQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsb0RBQW1COzs7SUFBbkI7O1lBRU8sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFFO1FBRTdELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxNQUFrQjtZQUM5QyxPQUFPLFdBQVcsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxFQUFVLElBQUssT0FBQSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFyQixDQUFxQixFQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYzs7Ozs7SUFDZCw2Q0FBWTs7Ozs7SUFBWjtRQUNDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsZ0RBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGlEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsNkVBQTZFO0lBQzlFLENBQUM7Ozs7SUFFRCx3REFBdUI7OztJQUF2QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRiw2QkFBQztBQUFELENBQUMsQUE3RUQsQ0FBNEMsYUFBYSxHQTZFeEQ7Ozs7Ozs7SUEzRUEsMkNBQXNDOzs7OztJQUV0Qyx3Q0FBZ0M7Ozs7O0lBRWhDLDBDQUE2Qzs7Ozs7SUFFN0Msd0NBQWdDOzs7OztJQUVoQyxtREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxSb290IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uIH0gZnJvbSAnLi4vZm9ybWF0aW9uL3JlYWQvZm9ybWF0aW9uJztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBTb3VyY2UgfSBmcm9tICcuLi9zb3VyY2Uvc291cmNlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIH0gZnJvbSAnLi4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgZXh0ZW5kcyBSZWFkTW9kZWxSb290PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uOiBGb3JtYXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmc6IFBhZ2luZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogU291cmNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsO1xuXG5cdGNvbnN0cnVjdG9yKHVpZDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRmb3JtYXRpb246IEZvcm1hdGlvbixcblx0XHRcdFx0cGFnaW5nOiBQYWdpbmcsXG5cdFx0XHRcdGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5Pixcblx0XHRcdFx0c291cmNlOiBTb3VyY2UsXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkge1xuXHRcdHN1cGVyKHVpZCk7XG5cdFx0dGhpcy5mb3JtYXRpb24gPSBmb3JtYXRpb247XG5cdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0dGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24gPSB2ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdGdldEZvcm1hdGlvbigpOiBGb3JtYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbjtcblx0fVxuXG5cdGdldFBhZ2luZygpOiBQYWdpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZztcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcztcblx0fVxuXG5cdGdldFNvdXJjZSgpOiBTb3VyY2Uge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZTtcblx0fVxuXG5cdGdldFZlcnRpY2FsRm9ybWF0aW9uKCk6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdGdldFNlbGVjdGVkRW50aXRpZXMoKTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRJZHMgPSB0aGlzLmZvcm1hdGlvbi5nZXRTZWxlY3RlZFJvd3MoKS5nZXRJZHMoKTtcblxuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzLmZpbHRlcigoZW50aXR5OiBJdGVtRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWRJZHMuc29tZSgoaWQ6IHN0cmluZykgPT4gZW50aXR5LmVxdWFsc0J5SWQoaWQpKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIFRPRE8gUmVtb3ZlXG5cdGdldFRvcE1hcmdpbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFRvcE1hcmdpbigpO1xuXHR9XG5cblx0aXNMb2FkZXJWaXNpYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldFNvdXJjZSgpLmlzTG9hZGluZygpO1xuXHR9XG5cblx0Z2V0U291cmNlSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0U291cmNlSGVpZ2h0KCk7XG5cdH1cblxuXHRpc1JlYWR5VG9EaXNwbGF5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzLmxlbmd0aCA+IDA7XG5cdFx0Ly8gdGhpcy5wcmVzZW50YXRpb24uZ2V0Q29sdW1ucygpLmxlbmd0aCA+IDA7IC8vIFRPRE8gcHJlc2VudGF0aW9uIGdldENvbHVtbnNcblx0fVxuXG5cdGlzVmVydGljYWxTY3JvbGxFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmlzRW5hYmxlZCgpO1xuXHR9XG5cbn1cblxuIl19