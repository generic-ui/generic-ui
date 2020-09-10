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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFTbkQ7SUFBNEMsa0RBQXVDO0lBVWxGLGdDQUFZLEdBQTZCLEVBQ3RDLE1BQWMsRUFDZCxRQUEyQixFQUMzQixNQUFjLEVBQ2QsaUJBQTZDO1FBSmhELFlBS0Msa0JBQU0sR0FBRyxDQUFDLFNBS1Y7UUFKQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7O0lBQzVDLENBQUM7Ozs7SUFFRCwwQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsMENBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxxREFBb0I7OztJQUFwQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQy9CLENBQUM7SUFFRCxjQUFjOzs7OztJQUNkLDZDQUFZOzs7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELGdEQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsaURBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyw2RUFBNkU7SUFDOUUsQ0FBQzs7OztJQUVELHdEQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVGLDZCQUFDO0FBQUQsQ0FBQyxBQTVERCxDQUE0QyxhQUFhLEdBNER4RDs7Ozs7OztJQTFEQSx3Q0FBZ0M7Ozs7O0lBRWhDLDBDQUE2Qzs7Ozs7SUFFN0Msd0NBQWdDOzs7OztJQUVoQyxtREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxSb290IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvcmVhZC9zb3VyY2UnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIH0gZnJvbSAnLi4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgZXh0ZW5kcyBSZWFkTW9kZWxSb290PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nOiBQYWdpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT47XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IFNvdXJjZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbDtcblxuXHRjb25zdHJ1Y3Rvcih1aWQ6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cGFnaW5nOiBQYWdpbmcsXG5cdFx0XHRcdGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5Pixcblx0XHRcdFx0c291cmNlOiBTb3VyY2UsXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkge1xuXHRcdHN1cGVyKHVpZCk7XG5cdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0dGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24gPSB2ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdGdldFBhZ2luZygpOiBQYWdpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZztcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcztcblx0fVxuXG5cdGdldFNvdXJjZSgpOiBTb3VyY2Uge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZTtcblx0fVxuXG5cdGdldFZlcnRpY2FsRm9ybWF0aW9uKCk6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdC8vIFRPRE8gUmVtb3ZlXG5cdGdldFRvcE1hcmdpbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFRvcE1hcmdpbigpO1xuXHR9XG5cblx0aXNMb2FkZXJWaXNpYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldFNvdXJjZSgpLmlzTG9hZGluZygpO1xuXHR9XG5cblx0Z2V0U291cmNlSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0U291cmNlSGVpZ2h0KCk7XG5cdH1cblxuXHRpc1JlYWR5VG9EaXNwbGF5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzLmxlbmd0aCA+IDA7XG5cdFx0Ly8gdGhpcy5wcmVzZW50YXRpb24uZ2V0Q29sdW1ucygpLmxlbmd0aCA+IDA7IC8vIFRPRE8gcHJlc2VudGF0aW9uIGdldENvbHVtbnNcblx0fVxuXG5cdGlzVmVydGljYWxTY3JvbGxFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmlzRW5hYmxlZCgpO1xuXHR9XG5cbn1cblxuIl19