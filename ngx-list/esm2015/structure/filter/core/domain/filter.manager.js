/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Filter } from './filter';
import { FilterSettings } from './filter.settings';
import { FilterTypeManager } from './type/filter-type.manager';
import { FilterIdGenerator } from '../api/filter.id-generator';
import { ActiveFilterReadModel } from '../api/active/active-filter.read-model';
export class FilterManager {
    constructor() {
        this.filterSettings = new FilterSettings();
        // string -> FilterId
        this.filters = new Map();
        this.activeFilters = [];
    }
    /**
     * @return {?}
     */
    getSettings() {
        return this.filterSettings;
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
     * @param {?} fields
     * @return {?}
     */
    getAllActiveFilters(fields) {
        return this.activeFilters
            .map((/**
         * @param {?} af
         * @return {?}
         */
        (af) => {
            return new ActiveFilterReadModel(af.getFilterId(), (fields.get(af.getFieldId().toString())).getName(), this.filterTypeManager.getFilterType(af.getFilterTypeId()).getName(), af.getFilterValue());
        }));
    }
    /**
     * @return {?}
     */
    getFilterTypes() {
        return this.filterTypeManager.getFieldIdsToFilterTypes();
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    assignFilterTypes(fields) {
        this.filterTypeManager = new FilterTypeManager(fields);
    }
    /**
     * @param {?} fieldId
     * @param {?} filterTypeId
     * @param {?} value
     * @return {?}
     */
    add(fieldId, filterTypeId, value) {
        /** @type {?} */
        const filter = new Filter(FilterIdGenerator.generateId(), fieldId, filterTypeId, value);
        this.activeFilters.push(filter);
    }
    /**
     * @param {?} entities
     * @param {?} fields
     * @return {?}
     */
    filter(entities, fields) {
        /** @type {?} */
        let filteredEntities = [...entities];
        for (const filter of this.activeFilters) {
            /** @type {?} */
            const filterTypeId = filter.getFilterTypeId();
            /** @type {?} */
            const filterType = this.getFilterType(filterTypeId);
            /** @type {?} */
            const value = filter.getFilterValue();
            filteredEntities = filterType.filterMany(filteredEntities, fields.get(filter.getFieldId().toString()), value);
        }
        return filteredEntities;
    }
    /**
     * @return {?}
     */
    removeAll() {
        this.activeFilters.length = 0;
    }
    /**
     * @param {?} filterId
     * @return {?}
     */
    remove(filterId) {
        this.activeFilters =
            this.activeFilters.filter((/**
             * @param {?} filter
             * @return {?}
             */
            (filter) => {
                return filter.getFilterId() !== filterId;
            }));
    }
    /**
     * @private
     * @param {?} filterTypeId
     * @return {?}
     */
    getFilterType(filterTypeId) {
        return this.filterTypeManager.getFilterType(filterTypeId);
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
    /**
     * @type {?}
     * @private
     */
    FilterManager.prototype.activeFilters;
    /**
     * @type {?}
     * @private
     */
    FilterManager.prototype.filterTypeManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vZmlsdGVyLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSW5ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSS9FLE1BQU0sT0FBTyxhQUFhO0lBV3pCO1FBVGlCLG1CQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQzs7UUFHdEMsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBRTdDLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztJQUsxQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzNCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxNQUEwQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ25CLEdBQUc7Ozs7UUFBQyxDQUFDLEVBQVUsRUFBRSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxxQkFBcUIsQ0FDL0IsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUNoQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFDbEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFDcEUsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUNuQixDQUFDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDVCxDQUFDOzs7O0lBRUQsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDMUQsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxNQUFvQjtRQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7O0lBRUQsR0FBRyxDQUFDLE9BQWdCLEVBQUUsWUFBMEIsRUFBRSxLQUFVOztjQUVyRCxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7UUFFdkYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWlDLEVBQUUsTUFBMEI7O1lBRS9ELGdCQUFnQixHQUE0QixDQUFDLEdBQUcsUUFBUSxDQUFDO1FBRTdELEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTs7a0JBRWxDLFlBQVksR0FBRyxNQUFNLENBQUMsZUFBZSxFQUFFOztrQkFDNUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDOztrQkFDN0MsS0FBSyxHQUFHLE1BQU0sQ0FBQyxjQUFjLEVBQUU7WUFFaEMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlHO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxRQUFrQjtRQUV4QixJQUFJLENBQUMsYUFBYTtZQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO2dCQUM1QyxPQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUM7WUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsWUFBMEI7UUFDL0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FHRDs7Ozs7O0lBakZBLHVDQUF1RDs7Ozs7SUFHdkQsZ0NBQXFEOzs7OztJQUVyRCxzQ0FBMEM7Ozs7O0lBRTFDLDBDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBGaWx0ZXJTZXR0aW5ncyB9IGZyb20gJy4vZmlsdGVyLnNldHRpbmdzJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlTWFuYWdlciB9IGZyb20gJy4vdHlwZS9maWx0ZXItdHlwZS5tYW5hZ2VyJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZWFkTW9kZWwgfSBmcm9tICcuLi9hcGkvdHlwZS9maWx0ZXItdHlwZS5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJUeXBlIH0gZnJvbSAnLi90eXBlL2Jhc2UtZmlsdGVyLXR5cGUnO1xuaW1wb3J0IHsgRmlsdGVySWRHZW5lcmF0b3IgfSBmcm9tICcuLi9hcGkvZmlsdGVyLmlkLWdlbmVyYXRvcic7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuLi9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4uL2FwaS9maWx0ZXIuaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclNldHRpbmdzID0gbmV3IEZpbHRlclNldHRpbmdzKCk7XG5cblx0Ly8gc3RyaW5nIC0+IEZpbHRlcklkXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVycyA9IG5ldyBNYXA8c3RyaW5nLCBGaWx0ZXI+KCk7XG5cblx0cHJpdmF0ZSBhY3RpdmVGaWx0ZXJzOiBBcnJheTxGaWx0ZXI+ID0gW107XG5cblx0cHJpdmF0ZSBmaWx0ZXJUeXBlTWFuYWdlcjogRmlsdGVyVHlwZU1hbmFnZXI7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRnZXRTZXR0aW5ncygpOiBGaWx0ZXJTZXR0aW5ncyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyU2V0dGluZ3M7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8RmlsdGVyPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5maWx0ZXJzKVxuXHRcdFx0XHRcdC5tYXAoKGFycikgPT4gYXJyWzFdKTtcblx0fVxuXG5cdGdldEFsbEFjdGl2ZUZpbHRlcnMoZmllbGRzOiBNYXA8c3RyaW5nLCBGaWVsZD4pOiBSZWFkb25seUFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUZpbHRlcnNcblx0XHRcdFx0ICAgLm1hcCgoYWY6IEZpbHRlcikgPT4ge1xuXHRcdFx0XHRcdCAgIHJldHVybiBuZXcgQWN0aXZlRmlsdGVyUmVhZE1vZGVsKFxuXHRcdFx0XHRcdFx0ICAgYWYuZ2V0RmlsdGVySWQoKSxcblx0XHRcdFx0XHRcdCAgIChmaWVsZHMuZ2V0KGFmLmdldEZpZWxkSWQoKS50b1N0cmluZygpKSkuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0ICAgdGhpcy5maWx0ZXJUeXBlTWFuYWdlci5nZXRGaWx0ZXJUeXBlKGFmLmdldEZpbHRlclR5cGVJZCgpKS5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHQgICBhZi5nZXRGaWx0ZXJWYWx1ZSgpXG5cdFx0XHRcdFx0ICAgKTtcblx0XHRcdFx0ICAgfSk7XG5cdH1cblxuXHRnZXRGaWx0ZXJUeXBlcygpOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPj4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclR5cGVNYW5hZ2VyLmdldEZpZWxkSWRzVG9GaWx0ZXJUeXBlcygpO1xuXHR9XG5cblx0YXNzaWduRmlsdGVyVHlwZXMoZmllbGRzOiBBcnJheTxGaWVsZD4pIHtcblx0XHR0aGlzLmZpbHRlclR5cGVNYW5hZ2VyID0gbmV3IEZpbHRlclR5cGVNYW5hZ2VyKGZpZWxkcyk7XG5cdH1cblxuXHRhZGQoZmllbGRJZDogRmllbGRJZCwgZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpbHRlciA9IG5ldyBGaWx0ZXIoRmlsdGVySWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpLCBmaWVsZElkLCBmaWx0ZXJUeXBlSWQsIHZhbHVlKTtcblxuXHRcdHRoaXMuYWN0aXZlRmlsdGVycy5wdXNoKGZpbHRlcik7XG5cdH1cblxuXHRmaWx0ZXIoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+LCBmaWVsZHM6IE1hcDxzdHJpbmcsIEZpZWxkPik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGxldCBmaWx0ZXJlZEVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFsuLi5lbnRpdGllc107XG5cblx0XHRmb3IgKGNvbnN0IGZpbHRlciBvZiB0aGlzLmFjdGl2ZUZpbHRlcnMpIHtcblxuXHRcdFx0Y29uc3QgZmlsdGVyVHlwZUlkID0gZmlsdGVyLmdldEZpbHRlclR5cGVJZCgpLFxuXHRcdFx0XHRmaWx0ZXJUeXBlID0gdGhpcy5nZXRGaWx0ZXJUeXBlKGZpbHRlclR5cGVJZCksXG5cdFx0XHRcdHZhbHVlID0gZmlsdGVyLmdldEZpbHRlclZhbHVlKCk7XG5cblx0XHRcdGZpbHRlcmVkRW50aXRpZXMgPSBmaWx0ZXJUeXBlLmZpbHRlck1hbnkoZmlsdGVyZWRFbnRpdGllcywgZmllbGRzLmdldChmaWx0ZXIuZ2V0RmllbGRJZCgpLnRvU3RyaW5nKCkpLCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbHRlcmVkRW50aXRpZXM7XG5cdH1cblxuXHRyZW1vdmVBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5hY3RpdmVGaWx0ZXJzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHRyZW1vdmUoZmlsdGVySWQ6IEZpbHRlcklkKTogdm9pZCB7XG5cblx0XHR0aGlzLmFjdGl2ZUZpbHRlcnMgPVxuXHRcdFx0dGhpcy5hY3RpdmVGaWx0ZXJzLmZpbHRlcigoZmlsdGVyOiBGaWx0ZXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIGZpbHRlci5nZXRGaWx0ZXJJZCgpICE9PSBmaWx0ZXJJZDtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRGaWx0ZXJUeXBlKGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKTogQmFzZUZpbHRlclR5cGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZU1hbmFnZXIuZ2V0RmlsdGVyVHlwZShmaWx0ZXJUeXBlSWQpO1xuXHR9XG5cblxufVxuIl19