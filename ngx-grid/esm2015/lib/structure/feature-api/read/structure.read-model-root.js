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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVVuRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBdUM7Ozs7Ozs7OztJQVlsRixZQUFZLEdBQTZCLEVBQ3RDLFNBQW9CLEVBQ3BCLE1BQWMsRUFDZCxRQUEyQixFQUMzQixNQUFjLEVBQ2QsaUJBQTZDO1FBQy9DLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsb0JBQW9CO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxtQkFBbUI7O2NBRVosV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFFO1FBRTdELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxNQUFrQixFQUFFLEVBQUU7WUFDbEQsT0FBTyxXQUFXLENBQUMsSUFBSTs7OztZQUFDLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUdELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLDZFQUE2RTtJQUM5RSxDQUFDOzs7O0lBRUQsdUJBQXVCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7Q0FFRDs7Ozs7O0lBM0VBLDJDQUFzQzs7Ozs7SUFFdEMsd0NBQWdDOzs7OztJQUVoQywwQ0FBNkM7Ozs7O0lBRTdDLHdDQUFnQzs7Ozs7SUFFaEMsbURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsUm9vdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbiB9IGZyb20gJy4uL2Zvcm1hdGlvbi9yZWFkL2Zvcm1hdGlvbic7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi9wYWdpbmcvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnLi4vc291cmNlL3NvdXJjZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB9IGZyb20gJy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IGV4dGVuZHMgUmVhZE1vZGVsUm9vdDxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbjogRm9ybWF0aW9uO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nOiBQYWdpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT47XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IFNvdXJjZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbDtcblxuXHRjb25zdHJ1Y3Rvcih1aWQ6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0Zm9ybWF0aW9uOiBGb3JtYXRpb24sXG5cdFx0XHRcdHBhZ2luZzogUGFnaW5nLFxuXHRcdFx0XHRlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT4sXG5cdFx0XHRcdHNvdXJjZTogU291cmNlLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpIHtcblx0XHRzdXBlcih1aWQpO1xuXHRcdHRoaXMuZm9ybWF0aW9uID0gZm9ybWF0aW9uO1xuXHRcdHRoaXMucGFnaW5nID0gcGFnaW5nO1xuXHRcdHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcztcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uID0gdmVydGljYWxGb3JtYXRpb247XG5cdH1cblxuXHRnZXRGb3JtYXRpb24oKTogRm9ybWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb247XG5cdH1cblxuXHRnZXRQYWdpbmcoKTogUGFnaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmc7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXM7XG5cdH1cblxuXHRnZXRTb3VyY2UoKTogU291cmNlIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2U7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbEZvcm1hdGlvbigpOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb247XG5cdH1cblxuXHRnZXRTZWxlY3RlZEVudGl0aWVzKCk6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblxuXHRcdGNvbnN0IHNlbGVjdGVkSWRzID0gdGhpcy5mb3JtYXRpb24uZ2V0U2VsZWN0ZWRSb3dzKCkuZ2V0SWRzKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcy5maWx0ZXIoKGVudGl0eTogSXRlbUVudGl0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIHNlbGVjdGVkSWRzLnNvbWUoKGlkOiBzdHJpbmcpID0+IGVudGl0eS5lcXVhbHNCeUlkKGlkKSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBUT0RPIFJlbW92ZVxuXHRnZXRUb3BNYXJnaW4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5nZXRUb3BNYXJnaW4oKTtcblx0fVxuXG5cdGlzTG9hZGVyVmlzaWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRTb3VyY2UoKS5pc0xvYWRpbmcoKTtcblx0fVxuXG5cdGdldFNvdXJjZUhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFNvdXJjZUhlaWdodCgpO1xuXHR9XG5cblx0aXNSZWFkeVRvRGlzcGxheSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcy5sZW5ndGggPiAwO1xuXHRcdC8vIHRoaXMucHJlc2VudGF0aW9uLmdldENvbHVtbnMoKS5sZW5ndGggPiAwOyAvLyBUT0RPIHByZXNlbnRhdGlvbiBnZXRDb2x1bW5zXG5cdH1cblxuXHRpc1ZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5pc0VuYWJsZWQoKTtcblx0fVxuXG59XG5cbiJdfQ==