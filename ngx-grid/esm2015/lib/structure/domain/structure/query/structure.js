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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvcXVlcnkvc3RydWN0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFXNUQsTUFBTSxPQUFPLFNBQVUsU0FBUSxTQUFTOzs7Ozs7Ozs7O0lBY3ZDLFlBQVksR0FBZ0IsRUFDekIsU0FBb0IsRUFDcEIsTUFBYyxFQUNkLE1BQWMsRUFDZCxRQUF1QixFQUN2QixNQUFjLEVBQ2QsaUJBQTZDO1FBQy9DLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsbUJBQW1COztjQUVaLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUU3RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDOUMsT0FBTyxXQUFXLENBQUMsSUFBSTs7OztZQUFDLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDakIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLEdBQUcsRUFBRTtZQUN2QyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQzthQUFNO1lBQ04sT0FBTyxLQUFLLENBQUM7U0FDYjtJQUNGLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUQsOEZBQThGO0lBQy9GLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDNUQsaUdBQWlHO0lBQ25HLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyw2RUFBNkU7SUFDOUUsQ0FBQzs7OztJQUVELHVCQUF1QjtRQUN0QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0NBRUQ7Ozs7OztJQTVGQSw4QkFBc0M7Ozs7O0lBRXRDLDJCQUFnQzs7Ozs7SUFFaEMsMkJBQWdDOzs7OztJQUVoQyw2QkFBeUM7Ozs7O0lBRXpDLDJCQUFnQzs7Ozs7SUFFaEMsc0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQsIFJlYWRNb2RlbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbiB9IGZyb20gJy4uLy4uL2Zvcm1hdGlvbi9xdWVyeS9mb3JtYXRpb24nO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3F1ZXJ5L3NjaGVtYSc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi9wYWdpbmcvcXVlcnkvcGFnaW5nJztcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL3NvdXJjZS9lbnRpdHknO1xuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnLi4vLi4vc291cmNlL3F1ZXJ5L3NvdXJjZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsJztcblxuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmUgZXh0ZW5kcyBSZWFkTW9kZWwge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uOiBGb3JtYXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWE6IFNjaGVtYTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZzogUGFnaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZW50aXRpZXM6IEFycmF5PEVudGl0eT47XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IFNvdXJjZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbDtcblxuXHRjb25zdHJ1Y3Rvcih1aWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRmb3JtYXRpb246IEZvcm1hdGlvbixcblx0XHRcdFx0c2NoZW1hOiBTY2hlbWEsXG5cdFx0XHRcdHBhZ2luZzogUGFnaW5nLFxuXHRcdFx0XHRlbnRpdGllczogQXJyYXk8RW50aXR5Pixcblx0XHRcdFx0c291cmNlOiBTb3VyY2UsXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkge1xuXHRcdHN1cGVyKHVpZCk7XG5cdFx0dGhpcy5mb3JtYXRpb24gPSBmb3JtYXRpb247XG5cdFx0dGhpcy5zY2hlbWEgPSBzY2hlbWE7XG5cdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0dGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24gPSB2ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdGdldEZvcm1hdGlvbigpOiBGb3JtYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbjtcblx0fVxuXG5cdGdldFNjaGVtYSgpOiBTY2hlbWEge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYTtcblx0fVxuXG5cdGdldFBhZ2luZygpOiBQYWdpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZztcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PEVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzO1xuXHR9XG5cblx0Z2V0U291cmNlKCk6IFNvdXJjZSB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRFbnRpdGllcygpOiBBcnJheTxFbnRpdHk+IHtcblxuXHRcdGNvbnN0IHNlbGVjdGVkSWRzID0gdGhpcy5mb3JtYXRpb24uZ2V0U2VsZWN0ZWRSb3dzKCkuZ2V0SWRzKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcy5maWx0ZXIoKGVudGl0eTogRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWRJZHMuc29tZSgoaWQ6IHN0cmluZykgPT4gZW50aXR5LmVxdWFsc0J5SWQoaWQpKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldFRvcE1hcmdpbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFRvcE1hcmdpbigpO1xuXHR9XG5cblx0Z2V0Q29udGFpbmVySGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0Q29udGFpbmVySGVpZ2h0KCk7XG5cdH1cblxuXHRpc0xvYWRlclZpc2libGUoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuZ2V0U2NoZW1hKCkuZ2V0SGVpZ2h0KCkgPiAxNTApIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFNvdXJjZSgpLmlzTG9hZGluZygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0aXNUb3BIZWFkZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYS5nZXRDb2x1bW5IZWFkZXIoKS5pc1RvcEhlYWRlckVuYWJsZWQoKTtcblx0XHQvLyAmJiB0aGlzLnByZXNlbnRhdGlvbi5nZXRDb2x1bW5zKCkubGVuZ3RoID4gMDsgLy8gVE9ETyBNb3ZlIHNjaGVtYS50b3BIZWFkZXIgdG8gcHJlc2VudGF0aW9uXG5cdH1cblxuXHRpc0JvdHRvbUhlYWRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hLmdldENvbHVtbkhlYWRlcigpLmlzQm90dG9tSGVhZGVyRW5hYmxlZCgpO1xuXHRcdFx0Ly8gJiYgdGhpcy5wcmVzZW50YXRpb24uZ2V0Q29sdW1ucygpLmxlbmd0aCA+IDA7IC8vIFRPRE8gTW92ZSBzY2hlbWEuYm90dG9tSGVhZGVyIHRvIHByZXNlbnRhdGlvblxuXHR9XG5cblx0aXNSZWFkeVRvRGlzcGxheSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcy5sZW5ndGggPiAwO1xuXHRcdC8vIHRoaXMucHJlc2VudGF0aW9uLmdldENvbHVtbnMoKS5sZW5ndGggPiAwOyAvLyBUT0RPIHByZXNlbnRhdGlvbiBnZXRDb2x1bW5zXG5cdH1cblxuXHRpc1ZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5pc0VuYWJsZWQoKTtcblx0fVxuXG59XG5cbiJdfQ==