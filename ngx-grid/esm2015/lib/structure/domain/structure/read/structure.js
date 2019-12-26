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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVc1RCxNQUFNLE9BQU8sU0FBVSxTQUFRLFNBQVM7Ozs7Ozs7Ozs7SUFjdkMsWUFBWSxHQUFnQixFQUN6QixTQUFvQixFQUNwQixNQUFjLEVBQ2QsTUFBYyxFQUNkLFFBQTJCLEVBQzNCLE1BQWMsRUFDZCxpQkFBNkM7UUFDL0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxtQkFBbUI7O2NBRVosV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFFO1FBRTdELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxNQUFrQixFQUFFLEVBQUU7WUFDbEQsT0FBTyxXQUFXLENBQUMsSUFBSTs7OztZQUFDLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDakIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLEdBQUcsRUFBRTtZQUN2QyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQzthQUFNO1lBQ04sT0FBTyxLQUFLLENBQUM7U0FDYjtJQUNGLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUQsOEZBQThGO0lBQy9GLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDNUQsaUdBQWlHO0lBQ25HLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyw2RUFBNkU7SUFDOUUsQ0FBQzs7OztJQUVELHVCQUF1QjtRQUN0QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0NBRUQ7Ozs7OztJQTVGQSw4QkFBc0M7Ozs7O0lBRXRDLDJCQUFnQzs7Ozs7SUFFaEMsMkJBQWdDOzs7OztJQUVoQyw2QkFBNkM7Ozs7O0lBRTdDLDJCQUFnQzs7Ozs7SUFFaEMsc0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQsIFJlYWRNb2RlbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbiB9IGZyb20gJy4uLy4uL2Zvcm1hdGlvbi9yZWFkL2Zvcm1hdGlvbic7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuLi8uLi9zY2hlbWEvcmVhZC9zY2hlbWEnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vcGFnaW5nL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gJy4uLy4uL3NvdXJjZS9yZWFkL3NvdXJjZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwnO1xuXG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZSBleHRlbmRzIFJlYWRNb2RlbCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb246IEZvcm1hdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYTogU2NoZW1hO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nOiBQYWdpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT47XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IFNvdXJjZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbDtcblxuXHRjb25zdHJ1Y3Rvcih1aWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRmb3JtYXRpb246IEZvcm1hdGlvbixcblx0XHRcdFx0c2NoZW1hOiBTY2hlbWEsXG5cdFx0XHRcdHBhZ2luZzogUGFnaW5nLFxuXHRcdFx0XHRlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT4sXG5cdFx0XHRcdHNvdXJjZTogU291cmNlLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpIHtcblx0XHRzdXBlcih1aWQpO1xuXHRcdHRoaXMuZm9ybWF0aW9uID0gZm9ybWF0aW9uO1xuXHRcdHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuXHRcdHRoaXMucGFnaW5nID0gcGFnaW5nO1xuXHRcdHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcztcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uID0gdmVydGljYWxGb3JtYXRpb247XG5cdH1cblxuXHRnZXRGb3JtYXRpb24oKTogRm9ybWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb247XG5cdH1cblxuXHRnZXRTY2hlbWEoKTogU2NoZW1hIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWE7XG5cdH1cblxuXHRnZXRQYWdpbmcoKTogUGFnaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmc7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXM7XG5cdH1cblxuXHRnZXRTb3VyY2UoKTogU291cmNlIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2U7XG5cdH1cblxuXHRnZXRTZWxlY3RlZEVudGl0aWVzKCk6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblxuXHRcdGNvbnN0IHNlbGVjdGVkSWRzID0gdGhpcy5mb3JtYXRpb24uZ2V0U2VsZWN0ZWRSb3dzKCkuZ2V0SWRzKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcy5maWx0ZXIoKGVudGl0eTogSXRlbUVudGl0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIHNlbGVjdGVkSWRzLnNvbWUoKGlkOiBzdHJpbmcpID0+IGVudGl0eS5lcXVhbHNCeUlkKGlkKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXRUb3BNYXJnaW4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5nZXRUb3BNYXJnaW4oKTtcblx0fVxuXG5cdGdldENvbnRhaW5lckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldENvbnRhaW5lckhlaWdodCgpO1xuXHR9XG5cblx0aXNMb2FkZXJWaXNpYmxlKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmdldFNjaGVtYSgpLmdldEhlaWdodCgpID4gMTUwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRTb3VyY2UoKS5pc0xvYWRpbmcoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlzVG9wSGVhZGVyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWEuZ2V0Q29sdW1uSGVhZGVyKCkuaXNUb3BIZWFkZXJFbmFibGVkKCk7XG5cdFx0Ly8gJiYgdGhpcy5wcmVzZW50YXRpb24uZ2V0Q29sdW1ucygpLmxlbmd0aCA+IDA7IC8vIFRPRE8gTW92ZSBzY2hlbWEudG9wSGVhZGVyIHRvIHByZXNlbnRhdGlvblxuXHR9XG5cblx0aXNCb3R0b21IZWFkZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYS5nZXRDb2x1bW5IZWFkZXIoKS5pc0JvdHRvbUhlYWRlckVuYWJsZWQoKTtcblx0XHRcdC8vICYmIHRoaXMucHJlc2VudGF0aW9uLmdldENvbHVtbnMoKS5sZW5ndGggPiAwOyAvLyBUT0RPIE1vdmUgc2NoZW1hLmJvdHRvbUhlYWRlciB0byBwcmVzZW50YXRpb25cblx0fVxuXG5cdGlzUmVhZHlUb0Rpc3BsYXkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXMubGVuZ3RoID4gMDtcblx0XHQvLyB0aGlzLnByZXNlbnRhdGlvbi5nZXRDb2x1bW5zKCkubGVuZ3RoID4gMDsgLy8gVE9ETyBwcmVzZW50YXRpb24gZ2V0Q29sdW1uc1xuXHR9XG5cblx0aXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCk7XG5cdH1cblxufVxuXG4iXX0=