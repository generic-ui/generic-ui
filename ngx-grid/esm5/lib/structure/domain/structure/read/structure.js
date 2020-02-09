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
    Structure.prototype.getVerticalFormation = /**
     * @return {?}
     */
    function () {
        return this.verticalFormation;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFVNUQ7SUFBK0IscUNBQVM7SUFjdkMsbUJBQVksR0FBZ0IsRUFDekIsU0FBb0IsRUFDcEIsTUFBYyxFQUNkLE1BQWMsRUFDZCxRQUEyQixFQUMzQixNQUFjLEVBQ2QsaUJBQTZDO1FBTmhELFlBT0Msa0JBQU0sR0FBRyxDQUFDLFNBT1Y7UUFOQSxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7O0lBQzVDLENBQUM7Ozs7SUFFRCxnQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELDZCQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsNkJBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCwrQkFBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDZCQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsd0NBQW9COzs7SUFBcEI7UUFDQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsdUNBQW1COzs7SUFBbkI7O1lBRU8sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFFO1FBRTdELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxNQUFrQjtZQUM5QyxPQUFPLFdBQVcsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxFQUFVLElBQUssT0FBQSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFyQixDQUFxQixFQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsZ0NBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELHNDQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsbUNBQWU7OztJQUFmO1FBQ0MsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BDO2FBQU07WUFDTixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7OztJQUVELHNDQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUQsOEZBQThGO0lBQy9GLENBQUM7Ozs7SUFFRCx5Q0FBcUI7OztJQUFyQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdELGlHQUFpRztJQUNsRyxDQUFDOzs7O0lBRUQsb0NBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyw2RUFBNkU7SUFDOUUsQ0FBQzs7OztJQUVELDJDQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0FBQyxBQWxHRCxDQUErQixTQUFTLEdBa0d2Qzs7Ozs7OztJQWhHQSw4QkFBc0M7Ozs7O0lBRXRDLDJCQUFnQzs7Ozs7SUFFaEMsMkJBQWdDOzs7OztJQUVoQyw2QkFBNkM7Ozs7O0lBRTdDLDJCQUFnQzs7Ozs7SUFFaEMsc0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQsIFJlYWRNb2RlbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbiB9IGZyb20gJy4uLy4uL2Zvcm1hdGlvbi9yZWFkL2Zvcm1hdGlvbic7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuLi8uLi9zY2hlbWEvcmVhZC9zY2hlbWEnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vcGFnaW5nL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gJy4uLy4uL3NvdXJjZS9yZWFkL3NvdXJjZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmUgZXh0ZW5kcyBSZWFkTW9kZWwge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uOiBGb3JtYXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWE6IFNjaGVtYTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZzogUGFnaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc291cmNlOiBTb3VyY2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw7XG5cblx0Y29uc3RydWN0b3IodWlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0Zm9ybWF0aW9uOiBGb3JtYXRpb24sXG5cdFx0XHRcdHNjaGVtYTogU2NoZW1hLFxuXHRcdFx0XHRwYWdpbmc6IFBhZ2luZyxcblx0XHRcdFx0ZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+LFxuXHRcdFx0XHRzb3VyY2U6IFNvdXJjZSxcblx0XHRcdFx0dmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSB7XG5cdFx0c3VwZXIodWlkKTtcblx0XHR0aGlzLmZvcm1hdGlvbiA9IGZvcm1hdGlvbjtcblx0XHR0aGlzLnNjaGVtYSA9IHNjaGVtYTtcblx0XHR0aGlzLnBhZ2luZyA9IHBhZ2luZztcblx0XHR0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiA9IHZlcnRpY2FsRm9ybWF0aW9uO1xuXHR9XG5cblx0Z2V0Rm9ybWF0aW9uKCk6IEZvcm1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uO1xuXHR9XG5cblx0Z2V0U2NoZW1hKCk6IFNjaGVtYSB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hO1xuXHR9XG5cblx0Z2V0UGFnaW5nKCk6IFBhZ2luZyB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nO1xuXHR9XG5cblx0Z2V0RW50aXRpZXMoKTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzO1xuXHR9XG5cblx0Z2V0U291cmNlKCk6IFNvdXJjZSB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlO1xuXHR9XG5cblx0Z2V0VmVydGljYWxGb3JtYXRpb24oKTogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRFbnRpdGllcygpOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cblx0XHRjb25zdCBzZWxlY3RlZElkcyA9IHRoaXMuZm9ybWF0aW9uLmdldFNlbGVjdGVkUm93cygpLmdldElkcygpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXMuZmlsdGVyKChlbnRpdHk6IEl0ZW1FbnRpdHkpID0+IHtcblx0XHRcdHJldHVybiBzZWxlY3RlZElkcy5zb21lKChpZDogc3RyaW5nKSA9PiBlbnRpdHkuZXF1YWxzQnlJZChpZCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0VG9wTWFyZ2luKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0VG9wTWFyZ2luKCk7XG5cdH1cblxuXHRnZXRDb250YWluZXJIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5nZXRDb250YWluZXJIZWlnaHQoKTtcblx0fVxuXG5cdGlzTG9hZGVyVmlzaWJsZSgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5nZXRTY2hlbWEoKS5nZXRIZWlnaHQoKSA+IDE1MCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0U291cmNlKCkuaXNMb2FkaW5nKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRpc1RvcEhlYWRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hLmdldENvbHVtbkhlYWRlcigpLmlzVG9wSGVhZGVyRW5hYmxlZCgpO1xuXHRcdC8vICYmIHRoaXMucHJlc2VudGF0aW9uLmdldENvbHVtbnMoKS5sZW5ndGggPiAwOyAvLyBUT0RPIE1vdmUgc2NoZW1hLnRvcEhlYWRlciB0byBwcmVzZW50YXRpb25cblx0fVxuXG5cdGlzQm90dG9tSGVhZGVyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWEuZ2V0Q29sdW1uSGVhZGVyKCkuaXNCb3R0b21IZWFkZXJFbmFibGVkKCk7XG5cdFx0Ly8gJiYgdGhpcy5wcmVzZW50YXRpb24uZ2V0Q29sdW1ucygpLmxlbmd0aCA+IDA7IC8vIFRPRE8gTW92ZSBzY2hlbWEuYm90dG9tSGVhZGVyIHRvIHByZXNlbnRhdGlvblxuXHR9XG5cblx0aXNSZWFkeVRvRGlzcGxheSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcy5sZW5ndGggPiAwO1xuXHRcdC8vIHRoaXMucHJlc2VudGF0aW9uLmdldENvbHVtbnMoKS5sZW5ndGggPiAwOyAvLyBUT0RPIHByZXNlbnRhdGlvbiBnZXRDb2x1bW5zXG5cdH1cblxuXHRpc1ZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5pc0VuYWJsZWQoKTtcblx0fVxuXG59XG5cbiJdfQ==