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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFVbkQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQXVDOzs7Ozs7Ozs7SUFZbEYsWUFBWSxHQUE2QixFQUN0QyxTQUFvQixFQUNwQixNQUFjLEVBQ2QsUUFBMkIsRUFDM0IsTUFBYyxFQUNkLGlCQUE2QztRQUMvQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNuQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsbUJBQW1COztjQUVaLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUU3RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTs7OztRQUFDLENBQUMsTUFBa0IsRUFBRSxFQUFFO1lBQ2xELE9BQU8sV0FBVyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLEVBQVUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBQ2hFLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFHRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyw2RUFBNkU7SUFDOUUsQ0FBQzs7OztJQUVELHVCQUF1QjtRQUN0QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0NBRUQ7Ozs7OztJQTNFQSwyQ0FBc0M7Ozs7O0lBRXRDLHdDQUFnQzs7Ozs7SUFFaEMsMENBQTZDOzs7OztJQUU3Qyx3Q0FBZ0M7Ozs7O0lBRWhDLG1EQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWRNb2RlbFJvb3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb24gfSBmcm9tICcuLi9mb3JtYXRpb24vZm9ybWF0aW9uJztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uL3BhZ2luZy9wYWdpbmcnO1xuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnLi4vc291cmNlL3NvdXJjZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgZXh0ZW5kcyBSZWFkTW9kZWxSb290PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uOiBGb3JtYXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmc6IFBhZ2luZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogU291cmNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsO1xuXG5cdGNvbnN0cnVjdG9yKHVpZDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRmb3JtYXRpb246IEZvcm1hdGlvbixcblx0XHRcdFx0cGFnaW5nOiBQYWdpbmcsXG5cdFx0XHRcdGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5Pixcblx0XHRcdFx0c291cmNlOiBTb3VyY2UsXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkge1xuXHRcdHN1cGVyKHVpZCk7XG5cdFx0dGhpcy5mb3JtYXRpb24gPSBmb3JtYXRpb247XG5cdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0dGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24gPSB2ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdGdldEZvcm1hdGlvbigpOiBGb3JtYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbjtcblx0fVxuXG5cdGdldFBhZ2luZygpOiBQYWdpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZztcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcztcblx0fVxuXG5cdGdldFNvdXJjZSgpOiBTb3VyY2Uge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZTtcblx0fVxuXG5cdGdldFZlcnRpY2FsRm9ybWF0aW9uKCk6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdGdldFNlbGVjdGVkRW50aXRpZXMoKTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRJZHMgPSB0aGlzLmZvcm1hdGlvbi5nZXRTZWxlY3RlZFJvd3MoKS5nZXRJZHMoKTtcblxuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzLmZpbHRlcigoZW50aXR5OiBJdGVtRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWRJZHMuc29tZSgoaWQ6IHN0cmluZykgPT4gZW50aXR5LmVxdWFsc0J5SWQoaWQpKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIFRPRE8gUmVtb3ZlXG5cdGdldFRvcE1hcmdpbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFRvcE1hcmdpbigpO1xuXHR9XG5cblx0aXNMb2FkZXJWaXNpYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldFNvdXJjZSgpLmlzTG9hZGluZygpO1xuXHR9XG5cblx0Z2V0U291cmNlSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0U291cmNlSGVpZ2h0KCk7XG5cdH1cblxuXHRpc1JlYWR5VG9EaXNwbGF5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzLmxlbmd0aCA+IDA7XG5cdFx0Ly8gdGhpcy5wcmVzZW50YXRpb24uZ2V0Q29sdW1ucygpLmxlbmd0aCA+IDA7IC8vIFRPRE8gcHJlc2VudGF0aW9uIGdldENvbHVtbnNcblx0fVxuXG5cdGlzVmVydGljYWxTY3JvbGxFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmlzRW5hYmxlZCgpO1xuXHR9XG5cbn1cblxuIl19