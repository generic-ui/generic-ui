/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseFilterType } from '../../base-filter-type';
export class ContainsFilterType extends BaseFilterType {
    /**
     * @param {?} filterTypeId
     */
    constructor(filterTypeId) {
        super(filterTypeId);
    }
    /**
     * @return {?}
     */
    getName() {
        return 'Contains';
    }
    /**
     * @protected
     * @param {?} entity
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    filterEntity(entity, field, value) {
        /** @type {?} */
        const fieldValue = field.getValue(entity);
        return !!fieldValue.includes(value);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbnMtZmlsdGVyLXR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluL3R5cGUvZmlsdGVyLXR5cGVzL2NvbnRhaW5zL2NvbnRhaW5zLWZpbHRlci10eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLeEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGNBQXNCOzs7O0lBRTdELFlBQVksWUFBMEI7UUFDckMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7Ozs7SUFFUyxZQUFZLENBQUMsTUFBd0IsRUFBRSxLQUFZLEVBQUUsS0FBYTs7Y0FFckUsVUFBVSxHQUFXLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRWpELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUZpbHRlclR5cGUgfSBmcm9tICcuLi8uLi9iYXNlLWZpbHRlci10eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi8uLi9maWx0ZXItdHlwZS5pZCc7XG5cbmV4cG9ydCBjbGFzcyBDb250YWluc0ZpbHRlclR5cGUgZXh0ZW5kcyBCYXNlRmlsdGVyVHlwZTxzdHJpbmc+IHtcblxuXHRjb25zdHJ1Y3RvcihmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCkge1xuXHRcdHN1cGVyKGZpbHRlclR5cGVJZCk7XG5cdH1cblxuXHRnZXROYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdDb250YWlucyc7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZmlsdGVyRW50aXR5KGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSwgZmllbGQ6IEZpZWxkLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cblx0XHRjb25zdCBmaWVsZFZhbHVlOiBzdHJpbmcgPSBmaWVsZC5nZXRWYWx1ZShlbnRpdHkpO1xuXG5cdFx0cmV0dXJuICEhZmllbGRWYWx1ZS5pbmNsdWRlcyh2YWx1ZSk7XG5cdH1cbn1cbiJdfQ==