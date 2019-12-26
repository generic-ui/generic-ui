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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFXNUQ7SUFBK0IscUNBQVM7SUFjdkMsbUJBQVksR0FBZ0IsRUFDekIsU0FBb0IsRUFDcEIsTUFBYyxFQUNkLE1BQWMsRUFDZCxRQUEyQixFQUMzQixNQUFjLEVBQ2QsaUJBQTZDO1FBTmhELFlBT0Msa0JBQU0sR0FBRyxDQUFDLFNBT1Y7UUFOQSxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7O0lBQzVDLENBQUM7Ozs7SUFFRCxnQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELDZCQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsNkJBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCwrQkFBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDZCQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsdUNBQW1COzs7SUFBbkI7O1lBRU8sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFFO1FBRTdELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxNQUFrQjtZQUM5QyxPQUFPLFdBQVcsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxFQUFVLElBQUssT0FBQSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFyQixDQUFxQixFQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsZ0NBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELHNDQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsbUNBQWU7OztJQUFmO1FBQ0MsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BDO2FBQU07WUFDTixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7OztJQUVELHNDQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUQsOEZBQThGO0lBQy9GLENBQUM7Ozs7SUFFRCx5Q0FBcUI7OztJQUFyQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzVELGlHQUFpRztJQUNuRyxDQUFDOzs7O0lBRUQsb0NBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyw2RUFBNkU7SUFDOUUsQ0FBQzs7OztJQUVELDJDQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0FBQyxBQTlGRCxDQUErQixTQUFTLEdBOEZ2Qzs7Ozs7OztJQTVGQSw4QkFBc0M7Ozs7O0lBRXRDLDJCQUFnQzs7Ozs7SUFFaEMsMkJBQWdDOzs7OztJQUVoQyw2QkFBNkM7Ozs7O0lBRTdDLDJCQUFnQzs7Ozs7SUFFaEMsc0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQsIFJlYWRNb2RlbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbiB9IGZyb20gJy4uLy4uL2Zvcm1hdGlvbi9yZWFkL2Zvcm1hdGlvbic7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuLi8uLi9zY2hlbWEvcmVhZC9zY2hlbWEnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vcGFnaW5nL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gJy4uLy4uL3NvdXJjZS9yZWFkL3NvdXJjZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwnO1xuXG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZSBleHRlbmRzIFJlYWRNb2RlbCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb246IEZvcm1hdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYTogU2NoZW1hO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nOiBQYWdpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT47XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IFNvdXJjZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbDtcblxuXHRjb25zdHJ1Y3Rvcih1aWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRmb3JtYXRpb246IEZvcm1hdGlvbixcblx0XHRcdFx0c2NoZW1hOiBTY2hlbWEsXG5cdFx0XHRcdHBhZ2luZzogUGFnaW5nLFxuXHRcdFx0XHRlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT4sXG5cdFx0XHRcdHNvdXJjZTogU291cmNlLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpIHtcblx0XHRzdXBlcih1aWQpO1xuXHRcdHRoaXMuZm9ybWF0aW9uID0gZm9ybWF0aW9uO1xuXHRcdHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuXHRcdHRoaXMucGFnaW5nID0gcGFnaW5nO1xuXHRcdHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcztcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uID0gdmVydGljYWxGb3JtYXRpb247XG5cdH1cblxuXHRnZXRGb3JtYXRpb24oKTogRm9ybWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb247XG5cdH1cblxuXHRnZXRTY2hlbWEoKTogU2NoZW1hIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWE7XG5cdH1cblxuXHRnZXRQYWdpbmcoKTogUGFnaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmc7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXM7XG5cdH1cblxuXHRnZXRTb3VyY2UoKTogU291cmNlIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2U7XG5cdH1cblxuXHRnZXRTZWxlY3RlZEVudGl0aWVzKCk6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblxuXHRcdGNvbnN0IHNlbGVjdGVkSWRzID0gdGhpcy5mb3JtYXRpb24uZ2V0U2VsZWN0ZWRSb3dzKCkuZ2V0SWRzKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcy5maWx0ZXIoKGVudGl0eTogSXRlbUVudGl0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIHNlbGVjdGVkSWRzLnNvbWUoKGlkOiBzdHJpbmcpID0+IGVudGl0eS5lcXVhbHNCeUlkKGlkKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXRUb3BNYXJnaW4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5nZXRUb3BNYXJnaW4oKTtcblx0fVxuXG5cdGdldENvbnRhaW5lckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldENvbnRhaW5lckhlaWdodCgpO1xuXHR9XG5cblx0aXNMb2FkZXJWaXNpYmxlKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmdldFNjaGVtYSgpLmdldEhlaWdodCgpID4gMTUwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRTb3VyY2UoKS5pc0xvYWRpbmcoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlzVG9wSGVhZGVyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWEuZ2V0Q29sdW1uSGVhZGVyKCkuaXNUb3BIZWFkZXJFbmFibGVkKCk7XG5cdFx0Ly8gJiYgdGhpcy5wcmVzZW50YXRpb24uZ2V0Q29sdW1ucygpLmxlbmd0aCA+IDA7IC8vIFRPRE8gTW92ZSBzY2hlbWEudG9wSGVhZGVyIHRvIHByZXNlbnRhdGlvblxuXHR9XG5cblx0aXNCb3R0b21IZWFkZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYS5nZXRDb2x1bW5IZWFkZXIoKS5pc0JvdHRvbUhlYWRlckVuYWJsZWQoKTtcblx0XHRcdC8vICYmIHRoaXMucHJlc2VudGF0aW9uLmdldENvbHVtbnMoKS5sZW5ndGggPiAwOyAvLyBUT0RPIE1vdmUgc2NoZW1hLmJvdHRvbUhlYWRlciB0byBwcmVzZW50YXRpb25cblx0fVxuXG5cdGlzUmVhZHlUb0Rpc3BsYXkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXMubGVuZ3RoID4gMDtcblx0XHQvLyB0aGlzLnByZXNlbnRhdGlvbi5nZXRDb2x1bW5zKCkubGVuZ3RoID4gMDsgLy8gVE9ETyBwcmVzZW50YXRpb24gZ2V0Q29sdW1uc1xuXHR9XG5cblx0aXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCk7XG5cdH1cblxufVxuXG4iXX0=