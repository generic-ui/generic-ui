/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelRoot } from '@generic-ui/hermes';
export class StructureReadModelRoot extends ReadModelRoot {
    /**
     * @param {?} uid
     * @param {?} formation
     * @param {?} paging
     * @param {?} entities
     * @param {?} source
     * @param {?} verticalFormation
     */
    constructor(uid, formation, paging, entities, source, verticalFormation) {
        super(uid);
        this.formation = formation;
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
    // TODO Remove
    /**
     * @return {?}
     */
    getTopMargin() {
        return this.verticalFormation.getTopMargin();
    }
    /**
     * @return {?}
     */
    isLoaderVisible() {
        return this.getSource().isLoading();
    }
    /**
     * @return {?}
     */
    getSourceHeight() {
        return this.verticalFormation.getSourceHeight();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVW5ELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxhQUF1Qzs7Ozs7Ozs7O0lBWWxGLFlBQVksR0FBNkIsRUFDdEMsU0FBb0IsRUFDcEIsTUFBYyxFQUNkLFFBQTJCLEVBQzNCLE1BQWMsRUFDZCxpQkFBNkM7UUFDL0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELG1CQUFtQjs7Y0FFWixXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLEVBQUU7UUFFN0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLE1BQWtCLEVBQUUsRUFBRTtZQUNsRCxPQUFPLFdBQVcsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUNoRSxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBR0QsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsNkVBQTZFO0lBQzlFLENBQUM7Ozs7SUFFRCx1QkFBdUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztDQUVEOzs7Ozs7SUEzRUEsMkNBQXNDOzs7OztJQUV0Qyx3Q0FBZ0M7Ozs7O0lBRWhDLDBDQUE2Qzs7Ozs7SUFFN0Msd0NBQWdDOzs7OztJQUVoQyxtREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxSb290IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uIH0gZnJvbSAnLi4vZm9ybWF0aW9uL3JlYWQvZm9ybWF0aW9uJztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBTb3VyY2UgfSBmcm9tICcuLi9zb3VyY2Uvc291cmNlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIH0gZnJvbSAnLi4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgZXh0ZW5kcyBSZWFkTW9kZWxSb290PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uOiBGb3JtYXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmc6IFBhZ2luZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogU291cmNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsO1xuXG5cdGNvbnN0cnVjdG9yKHVpZDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRmb3JtYXRpb246IEZvcm1hdGlvbixcblx0XHRcdFx0cGFnaW5nOiBQYWdpbmcsXG5cdFx0XHRcdGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5Pixcblx0XHRcdFx0c291cmNlOiBTb3VyY2UsXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkge1xuXHRcdHN1cGVyKHVpZCk7XG5cdFx0dGhpcy5mb3JtYXRpb24gPSBmb3JtYXRpb247XG5cdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0dGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24gPSB2ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdGdldEZvcm1hdGlvbigpOiBGb3JtYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbjtcblx0fVxuXG5cdGdldFBhZ2luZygpOiBQYWdpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZztcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcztcblx0fVxuXG5cdGdldFNvdXJjZSgpOiBTb3VyY2Uge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZTtcblx0fVxuXG5cdGdldFZlcnRpY2FsRm9ybWF0aW9uKCk6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdGdldFNlbGVjdGVkRW50aXRpZXMoKTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRJZHMgPSB0aGlzLmZvcm1hdGlvbi5nZXRTZWxlY3RlZFJvd3MoKS5nZXRJZHMoKTtcblxuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzLmZpbHRlcigoZW50aXR5OiBJdGVtRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWRJZHMuc29tZSgoaWQ6IHN0cmluZykgPT4gZW50aXR5LmVxdWFsc0J5SWQoaWQpKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIFRPRE8gUmVtb3ZlXG5cdGdldFRvcE1hcmdpbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFRvcE1hcmdpbigpO1xuXHR9XG5cblx0aXNMb2FkZXJWaXNpYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldFNvdXJjZSgpLmlzTG9hZGluZygpO1xuXHR9XG5cblx0Z2V0U291cmNlSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0U291cmNlSGVpZ2h0KCk7XG5cdH1cblxuXHRpc1JlYWR5VG9EaXNwbGF5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzLmxlbmd0aCA+IDA7XG5cdFx0Ly8gdGhpcy5wcmVzZW50YXRpb24uZ2V0Q29sdW1ucygpLmxlbmd0aCA+IDA7IC8vIFRPRE8gcHJlc2VudGF0aW9uIGdldENvbHVtbnNcblx0fVxuXG5cdGlzVmVydGljYWxTY3JvbGxFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmlzRW5hYmxlZCgpO1xuXHR9XG5cbn1cblxuIl19