/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModel } from '@generic-ui/hermes';
var Structure = /** @class */ (function (_super) {
    tslib_1.__extends(Structure, _super);
    function Structure(uid, formation, schema, paging, entities, source, verticalFormation) {
        var _this = _super.call(this, uid) || this;
        _this.formation = formation;
        _this.schema = schema;
        _this.paging = paging;
        _this.entities = entities;
        _this.source = source;
        _this.verticalFormation = verticalFormation;
        return _this;
    }
    /**
     * @return {?}
     */
    Structure.prototype.getFormation = /**
     * @return {?}
     */
    function () {
        return this.formation;
    };
    /**
     * @return {?}
     */
    Structure.prototype.getSchema = /**
     * @return {?}
     */
    function () {
        return this.schema;
    };
    /**
     * @return {?}
     */
    Structure.prototype.getPaging = /**
     * @return {?}
     */
    function () {
        return this.paging;
    };
    /**
     * @return {?}
     */
    Structure.prototype.getEntities = /**
     * @return {?}
     */
    function () {
        return this.entities;
    };
    /**
     * @return {?}
     */
    Structure.prototype.getSource = /**
     * @return {?}
     */
    function () {
        return this.source;
    };
    /**
     * @return {?}
     */
    Structure.prototype.getSelectedEntities = /**
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
    Structure.prototype.getTopMargin = /**
     * @return {?}
     */
    function () {
        return this.verticalFormation.getTopMargin();
    };
    /**
     * @return {?}
     */
    Structure.prototype.getContainerHeight = /**
     * @return {?}
     */
    function () {
        return this.verticalFormation.getContainerHeight();
    };
    /**
     * @return {?}
     */
    Structure.prototype.isLoaderVisible = /**
     * @return {?}
     */
    function () {
        if (this.getSchema().getHeight() > 150) {
            return this.getSource().isLoading();
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    Structure.prototype.isTopHeaderEnabled = /**
     * @return {?}
     */
    function () {
        return this.schema.getColumnHeader().isTopHeaderEnabled();
        // && this.presentation.getColumns().length > 0; // TODO Move schema.topHeader to presentation
    };
    /**
     * @return {?}
     */
    Structure.prototype.isBottomHeaderEnabled = /**
     * @return {?}
     */
    function () {
        return this.schema.getColumnHeader().isBottomHeaderEnabled();
        // && this.presentation.getColumns().length > 0; // TODO Move schema.bottomHeader to presentation
    };
    /**
     * @return {?}
     */
    Structure.prototype.isReadyToDisplay = /**
     * @return {?}
     */
    function () {
        return this.entities.length > 0;
        // this.presentation.getColumns().length > 0; // TODO presentation getColumns
    };
    /**
     * @return {?}
     */
    Structure.prototype.isVerticalScrollEnabled = /**
     * @return {?}
     */
    function () {
        return this.verticalFormation.isEnabled();
    };
    return Structure;
}(ReadModel));
export { Structure };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.formation;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.schema;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.paging;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.entities;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.source;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.verticalFormation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvcXVlcnkvc3RydWN0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFlLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVzVEO0lBQStCLHFDQUFTO0lBY3ZDLG1CQUFZLEdBQWdCLEVBQ3pCLFNBQW9CLEVBQ3BCLE1BQWMsRUFDZCxNQUFjLEVBQ2QsUUFBdUIsRUFDdkIsTUFBYyxFQUNkLGlCQUE2QztRQU5oRCxZQU9DLGtCQUFNLEdBQUcsQ0FBQyxTQU9WO1FBTkEsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDOztJQUM1QyxDQUFDOzs7O0lBRUQsZ0NBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCw2QkFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDZCQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsK0JBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCw2QkFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHVDQUFtQjs7O0lBQW5COztZQUVPLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUU3RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsTUFBYztZQUMxQyxPQUFPLFdBQVcsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxFQUFVLElBQUssT0FBQSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFyQixDQUFxQixFQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsZ0NBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELHNDQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsbUNBQWU7OztJQUFmO1FBQ0MsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BDO2FBQU07WUFDTixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7OztJQUVELHNDQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUQsOEZBQThGO0lBQy9GLENBQUM7Ozs7SUFFRCx5Q0FBcUI7OztJQUFyQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzVELGlHQUFpRztJQUNuRyxDQUFDOzs7O0lBRUQsb0NBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyw2RUFBNkU7SUFDOUUsQ0FBQzs7OztJQUVELDJDQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0FBQyxBQTlGRCxDQUErQixTQUFTLEdBOEZ2Qzs7Ozs7OztJQTVGQSw4QkFBc0M7Ozs7O0lBRXRDLDJCQUFnQzs7Ozs7SUFFaEMsMkJBQWdDOzs7OztJQUVoQyw2QkFBeUM7Ozs7O0lBRXpDLDJCQUFnQzs7Ozs7SUFFaEMsc0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQsIFJlYWRNb2RlbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbiB9IGZyb20gJy4uLy4uL2Zvcm1hdGlvbi9xdWVyeS9mb3JtYXRpb24nO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3F1ZXJ5L3NjaGVtYSc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi9wYWdpbmcvcXVlcnkvcGFnaW5nJztcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL3NvdXJjZS9lbnRpdHknO1xuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnLi4vLi4vc291cmNlL3F1ZXJ5L3NvdXJjZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsJztcblxuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmUgZXh0ZW5kcyBSZWFkTW9kZWwge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uOiBGb3JtYXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWE6IFNjaGVtYTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZzogUGFnaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZW50aXRpZXM6IEFycmF5PEVudGl0eT47XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IFNvdXJjZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbDtcblxuXHRjb25zdHJ1Y3Rvcih1aWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRmb3JtYXRpb246IEZvcm1hdGlvbixcblx0XHRcdFx0c2NoZW1hOiBTY2hlbWEsXG5cdFx0XHRcdHBhZ2luZzogUGFnaW5nLFxuXHRcdFx0XHRlbnRpdGllczogQXJyYXk8RW50aXR5Pixcblx0XHRcdFx0c291cmNlOiBTb3VyY2UsXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkge1xuXHRcdHN1cGVyKHVpZCk7XG5cdFx0dGhpcy5mb3JtYXRpb24gPSBmb3JtYXRpb247XG5cdFx0dGhpcy5zY2hlbWEgPSBzY2hlbWE7XG5cdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0dGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24gPSB2ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdGdldEZvcm1hdGlvbigpOiBGb3JtYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbjtcblx0fVxuXG5cdGdldFNjaGVtYSgpOiBTY2hlbWEge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYTtcblx0fVxuXG5cdGdldFBhZ2luZygpOiBQYWdpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZztcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PEVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzO1xuXHR9XG5cblx0Z2V0U291cmNlKCk6IFNvdXJjZSB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRFbnRpdGllcygpOiBBcnJheTxFbnRpdHk+IHtcblxuXHRcdGNvbnN0IHNlbGVjdGVkSWRzID0gdGhpcy5mb3JtYXRpb24uZ2V0U2VsZWN0ZWRSb3dzKCkuZ2V0SWRzKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcy5maWx0ZXIoKGVudGl0eTogRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWRJZHMuc29tZSgoaWQ6IHN0cmluZykgPT4gZW50aXR5LmVxdWFsc0J5SWQoaWQpKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldFRvcE1hcmdpbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFRvcE1hcmdpbigpO1xuXHR9XG5cblx0Z2V0Q29udGFpbmVySGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0Q29udGFpbmVySGVpZ2h0KCk7XG5cdH1cblxuXHRpc0xvYWRlclZpc2libGUoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuZ2V0U2NoZW1hKCkuZ2V0SGVpZ2h0KCkgPiAxNTApIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFNvdXJjZSgpLmlzTG9hZGluZygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0aXNUb3BIZWFkZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYS5nZXRDb2x1bW5IZWFkZXIoKS5pc1RvcEhlYWRlckVuYWJsZWQoKTtcblx0XHQvLyAmJiB0aGlzLnByZXNlbnRhdGlvbi5nZXRDb2x1bW5zKCkubGVuZ3RoID4gMDsgLy8gVE9ETyBNb3ZlIHNjaGVtYS50b3BIZWFkZXIgdG8gcHJlc2VudGF0aW9uXG5cdH1cblxuXHRpc0JvdHRvbUhlYWRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hLmdldENvbHVtbkhlYWRlcigpLmlzQm90dG9tSGVhZGVyRW5hYmxlZCgpO1xuXHRcdFx0Ly8gJiYgdGhpcy5wcmVzZW50YXRpb24uZ2V0Q29sdW1ucygpLmxlbmd0aCA+IDA7IC8vIFRPRE8gTW92ZSBzY2hlbWEuYm90dG9tSGVhZGVyIHRvIHByZXNlbnRhdGlvblxuXHR9XG5cblx0aXNSZWFkeVRvRGlzcGxheSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcy5sZW5ndGggPiAwO1xuXHRcdC8vIHRoaXMucHJlc2VudGF0aW9uLmdldENvbHVtbnMoKS5sZW5ndGggPiAwOyAvLyBUT0RPIHByZXNlbnRhdGlvbiBnZXRDb2x1bW5zXG5cdH1cblxuXHRpc1ZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5pc0VuYWJsZWQoKTtcblx0fVxuXG59XG5cbiJdfQ==