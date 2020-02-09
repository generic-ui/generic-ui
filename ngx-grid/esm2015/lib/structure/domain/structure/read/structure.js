/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModel } from '@generic-ui/hermes';
export class Structure extends ReadModel {
    /**
     * @param {?} uid
     * @param {?} formation
     * @param {?} schema
     * @param {?} paging
     * @param {?} entities
     * @param {?} source
     * @param {?} verticalFormation
     */
    constructor(uid, formation, schema, paging, entities, source, verticalFormation) {
        super(uid);
        this.formation = formation;
        this.schema = schema;
        this.paging = paging;
        this.entities = entities;
        this.source = source;
        this.verticalFormation = verticalFormation;
    }
    /**
     * @return {?}
     */
    getFormation() {
        return this.formation;
    }
    /**
     * @return {?}
     */
    getSchema() {
        return this.schema;
    }
    /**
     * @return {?}
     */
    getPaging() {
        return this.paging;
    }
    /**
     * @return {?}
     */
    getEntities() {
        return this.entities;
    }
    /**
     * @return {?}
     */
    getSource() {
        return this.source;
    }
    /**
     * @return {?}
     */
    getVerticalFormation() {
        return this.verticalFormation;
    }
    /**
     * @return {?}
     */
    getSelectedEntities() {
        /** @type {?} */
        const selectedIds = this.formation.getSelectedRows().getIds();
        return this.entities.filter((/**
         * @param {?} entity
         * @return {?}
         */
        (entity) => {
            return selectedIds.some((/**
             * @param {?} id
             * @return {?}
             */
            (id) => entity.equalsById(id)));
        }));
    }
    /**
     * @return {?}
     */
    getTopMargin() {
        return this.verticalFormation.getTopMargin();
    }
    /**
     * @return {?}
     */
    getContainerHeight() {
        return this.verticalFormation.getContainerHeight();
    }
    /**
     * @return {?}
     */
    isLoaderVisible() {
        if (this.getSchema().getHeight() > 150) {
            return this.getSource().isLoading();
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    isTopHeaderEnabled() {
        return this.schema.getColumnHeader().isTopHeaderEnabled();
        // && this.presentation.getColumns().length > 0; // TODO Move schema.topHeader to presentation
    }
    /**
     * @return {?}
     */
    isBottomHeaderEnabled() {
        return this.schema.getColumnHeader().isBottomHeaderEnabled();
        // && this.presentation.getColumns().length > 0; // TODO Move schema.bottomHeader to presentation
    }
    /**
     * @return {?}
     */
    isReadyToDisplay() {
        return this.entities.length > 0;
        // this.presentation.getColumns().length > 0; // TODO presentation getColumns
    }
    /**
     * @return {?}
     */
    isVerticalScrollEnabled() {
        return this.verticalFormation.isEnabled();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVU1RCxNQUFNLE9BQU8sU0FBVSxTQUFRLFNBQVM7Ozs7Ozs7Ozs7SUFjdkMsWUFBWSxHQUFnQixFQUN6QixTQUFvQixFQUNwQixNQUFjLEVBQ2QsTUFBYyxFQUNkLFFBQTJCLEVBQzNCLE1BQWMsRUFDZCxpQkFBNkM7UUFDL0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELG1CQUFtQjs7Y0FFWixXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLEVBQUU7UUFFN0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLE1BQWtCLEVBQUUsRUFBRTtZQUNsRCxPQUFPLFdBQVcsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUNoRSxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BDO2FBQU07WUFDTixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxRCw4RkFBOEY7SUFDL0YsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3RCxpR0FBaUc7SUFDbEcsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLDZFQUE2RTtJQUM5RSxDQUFDOzs7O0lBRUQsdUJBQXVCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7Q0FFRDs7Ozs7O0lBaEdBLDhCQUFzQzs7Ozs7SUFFdEMsMkJBQWdDOzs7OztJQUVoQywyQkFBZ0M7Ozs7O0lBRWhDLDZCQUE2Qzs7Ozs7SUFFN0MsMkJBQWdDOzs7OztJQUVoQyxzQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCwgUmVhZE1vZGVsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uIH0gZnJvbSAnLi4vLi4vZm9ybWF0aW9uL3JlYWQvZm9ybWF0aW9uJztcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4uLy4uL3NjaGVtYS9yZWFkL3NjaGVtYSc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi9wYWdpbmcvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnLi4vLi4vc291cmNlL3JlYWQvc291cmNlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVhZC1tb2RlbCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZSBleHRlbmRzIFJlYWRNb2RlbCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb246IEZvcm1hdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYTogU2NoZW1hO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nOiBQYWdpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT47XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IFNvdXJjZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbDtcblxuXHRjb25zdHJ1Y3Rvcih1aWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRmb3JtYXRpb246IEZvcm1hdGlvbixcblx0XHRcdFx0c2NoZW1hOiBTY2hlbWEsXG5cdFx0XHRcdHBhZ2luZzogUGFnaW5nLFxuXHRcdFx0XHRlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT4sXG5cdFx0XHRcdHNvdXJjZTogU291cmNlLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpIHtcblx0XHRzdXBlcih1aWQpO1xuXHRcdHRoaXMuZm9ybWF0aW9uID0gZm9ybWF0aW9uO1xuXHRcdHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuXHRcdHRoaXMucGFnaW5nID0gcGFnaW5nO1xuXHRcdHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcztcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uID0gdmVydGljYWxGb3JtYXRpb247XG5cdH1cblxuXHRnZXRGb3JtYXRpb24oKTogRm9ybWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb247XG5cdH1cblxuXHRnZXRTY2hlbWEoKTogU2NoZW1hIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWE7XG5cdH1cblxuXHRnZXRQYWdpbmcoKTogUGFnaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmc7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXM7XG5cdH1cblxuXHRnZXRTb3VyY2UoKTogU291cmNlIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2U7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbEZvcm1hdGlvbigpOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb247XG5cdH1cblxuXHRnZXRTZWxlY3RlZEVudGl0aWVzKCk6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblxuXHRcdGNvbnN0IHNlbGVjdGVkSWRzID0gdGhpcy5mb3JtYXRpb24uZ2V0U2VsZWN0ZWRSb3dzKCkuZ2V0SWRzKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcy5maWx0ZXIoKGVudGl0eTogSXRlbUVudGl0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIHNlbGVjdGVkSWRzLnNvbWUoKGlkOiBzdHJpbmcpID0+IGVudGl0eS5lcXVhbHNCeUlkKGlkKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXRUb3BNYXJnaW4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5nZXRUb3BNYXJnaW4oKTtcblx0fVxuXG5cdGdldENvbnRhaW5lckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldENvbnRhaW5lckhlaWdodCgpO1xuXHR9XG5cblx0aXNMb2FkZXJWaXNpYmxlKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmdldFNjaGVtYSgpLmdldEhlaWdodCgpID4gMTUwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRTb3VyY2UoKS5pc0xvYWRpbmcoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlzVG9wSGVhZGVyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWEuZ2V0Q29sdW1uSGVhZGVyKCkuaXNUb3BIZWFkZXJFbmFibGVkKCk7XG5cdFx0Ly8gJiYgdGhpcy5wcmVzZW50YXRpb24uZ2V0Q29sdW1ucygpLmxlbmd0aCA+IDA7IC8vIFRPRE8gTW92ZSBzY2hlbWEudG9wSGVhZGVyIHRvIHByZXNlbnRhdGlvblxuXHR9XG5cblx0aXNCb3R0b21IZWFkZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYS5nZXRDb2x1bW5IZWFkZXIoKS5pc0JvdHRvbUhlYWRlckVuYWJsZWQoKTtcblx0XHQvLyAmJiB0aGlzLnByZXNlbnRhdGlvbi5nZXRDb2x1bW5zKCkubGVuZ3RoID4gMDsgLy8gVE9ETyBNb3ZlIHNjaGVtYS5ib3R0b21IZWFkZXIgdG8gcHJlc2VudGF0aW9uXG5cdH1cblxuXHRpc1JlYWR5VG9EaXNwbGF5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzLmxlbmd0aCA+IDA7XG5cdFx0Ly8gdGhpcy5wcmVzZW50YXRpb24uZ2V0Q29sdW1ucygpLmxlbmd0aCA+IDA7IC8vIFRPRE8gcHJlc2VudGF0aW9uIGdldENvbHVtbnNcblx0fVxuXG5cdGlzVmVydGljYWxTY3JvbGxFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmlzRW5hYmxlZCgpO1xuXHR9XG5cbn1cblxuIl19