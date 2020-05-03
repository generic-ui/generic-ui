/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureFilter } from './structure.filter';
import { FilterId } from './filter.id';
import { FilterSettings } from './filter.settings';
export class FilterManager {
    constructor() {
        this.filterSettings = new FilterSettings();
        this.filters = new Map();
    }
    /**
     * @return {?}
     */
    getAll() {
        return Array.from(this.filters)
            .map((/**
         * @param {?} arr
         * @return {?}
         */
        (arr) => arr[1]));
    }
    /**
     * @return {?}
     */
    getSettings() {
        return this.filterSettings;
    }
    /**
     * @param {?} field
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    addFilter(field, externalFilterId, filterValue) {
        /** @type {?} */
        const filterId = new FilterId(field, externalFilterId);
        /** @type {?} */
        const filter = new StructureFilter(filterId, field, filterValue);
        if (filterValue === '') {
            this.filters.delete(filterId.getId());
        }
        else {
            this.filters.set(filterId.getId(), filter);
        }
    }
    /**
     * @param {?} entities
     * @return {?}
     */
    filter(entities) {
        /** @type {?} */
        const filters = this.getAll();
        /** @type {?} */
        let filteredEntities = [...entities];
        for (let filter of filters) {
            filteredEntities = filter.filter(filteredEntities);
        }
        return filteredEntities;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterManager.prototype.filterSettings;
    /**
     * @type {?}
     * @private
     */
    FilterManager.prototype.filters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWx0ZXIvZmlsdGVyLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUluRCxNQUFNLE9BQU8sYUFBYTtJQUExQjtRQUVrQixtQkFBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFFdEMsWUFBTyxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO0lBbUMvRCxDQUFDOzs7O0lBakNBLE1BQU07UUFDTCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMzQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBZ0IsRUFBRSxnQkFBd0IsRUFBRSxXQUFtQjs7Y0FFbEUsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQzs7Y0FDckQsTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDO1FBRTNELElBQUksV0FBVyxLQUFLLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBaUM7O2NBQ2pDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFOztZQUV6QixnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBRXBDLEtBQUssSUFBSSxNQUFNLElBQUksT0FBTyxFQUFFO1lBQzNCLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNuRDtRQUVELE9BQU8sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQztDQUVEOzs7Ozs7SUFyQ0EsdUNBQXVEOzs7OztJQUV2RCxnQ0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5maWx0ZXInO1xuaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRmlsdGVyU2V0dGluZ3MgfSBmcm9tICcuL2ZpbHRlci5zZXR0aW5ncyc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlck1hbmFnZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyU2V0dGluZ3MgPSBuZXcgRmlsdGVyU2V0dGluZ3MoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcnMgPSBuZXcgTWFwPHN0cmluZywgU3RydWN0dXJlRmlsdGVyPigpO1xuXG5cdGdldEFsbCgpOiBBcnJheTxTdHJ1Y3R1cmVGaWx0ZXI+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpbHRlcnMpXG5cdFx0XHRcdFx0Lm1hcCgoYXJyKSA9PiBhcnJbMV0pO1xuXHR9XG5cblx0Z2V0U2V0dGluZ3MoKTogRmlsdGVyU2V0dGluZ3Mge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclNldHRpbmdzO1xuXHR9XG5cblx0YWRkRmlsdGVyKGZpZWxkOiBUeXBlRmllbGQsIGV4dGVybmFsRmlsdGVySWQ6IHN0cmluZywgZmlsdGVyVmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmlsdGVySWQgPSBuZXcgRmlsdGVySWQoZmllbGQsIGV4dGVybmFsRmlsdGVySWQpLFxuXHRcdFx0ZmlsdGVyID0gbmV3IFN0cnVjdHVyZUZpbHRlcihmaWx0ZXJJZCwgZmllbGQsIGZpbHRlclZhbHVlKTtcblxuXHRcdGlmIChmaWx0ZXJWYWx1ZSA9PT0gJycpIHtcblx0XHRcdHRoaXMuZmlsdGVycy5kZWxldGUoZmlsdGVySWQuZ2V0SWQoKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZmlsdGVycy5zZXQoZmlsdGVySWQuZ2V0SWQoKSwgZmlsdGVyKTtcblx0XHR9XG5cdH1cblxuXHRmaWx0ZXIoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdGNvbnN0IGZpbHRlcnMgPSB0aGlzLmdldEFsbCgpO1xuXG5cdFx0bGV0IGZpbHRlcmVkRW50aXRpZXMgPSBbLi4uZW50aXRpZXNdO1xuXG5cdFx0Zm9yIChsZXQgZmlsdGVyIG9mIGZpbHRlcnMpIHtcblx0XHRcdGZpbHRlcmVkRW50aXRpZXMgPSBmaWx0ZXIuZmlsdGVyKGZpbHRlcmVkRW50aXRpZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaWx0ZXJlZEVudGl0aWVzO1xuXHR9XG5cbn1cbiJdfQ==