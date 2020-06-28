/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Filter } from './filter';
import { FilterSettings } from './filter.settings';
import { FilterTypeManager } from './type/filter-type.manager';
import { FilterIdGenerator } from './filter.id-generator';
import { ActiveFilterReadModel } from '../domain-api/active/active-filter.read-model';
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
        for (let filter of this.activeFilters) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluL2ZpbHRlci5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUluRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUcvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUl0RixNQUFNLE9BQU8sYUFBYTtJQVd6QjtRQVRpQixtQkFBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7O1FBR3RDLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUU3QyxrQkFBYSxHQUFrQixFQUFFLENBQUM7SUFLMUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMzQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsTUFBMEI7UUFDN0MsT0FBTyxJQUFJLENBQUMsYUFBYTthQUNuQixHQUFHOzs7O1FBQUMsQ0FBQyxFQUFVLEVBQUUsRUFBRTtZQUNuQixPQUFPLElBQUkscUJBQXFCLENBQy9CLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFDaEIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQ3BFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FDbkIsQ0FBQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1QsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBb0I7UUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7OztJQUVELEdBQUcsQ0FBQyxPQUFnQixFQUFFLFlBQTBCLEVBQUUsS0FBVTs7Y0FFckQsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDO1FBRXZGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxRQUFpQyxFQUFFLE1BQTBCOztZQUUvRCxnQkFBZ0IsR0FBNEIsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUU3RCxLQUFLLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7O2tCQUVoQyxZQUFZLEdBQUcsTUFBTSxDQUFDLGVBQWUsRUFBRTs7a0JBQzVDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQzs7a0JBQzdDLEtBQUssR0FBRyxNQUFNLENBQUMsY0FBYyxFQUFFO1lBRWhDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5RztRQUVELE9BQU8sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBa0I7UUFFeEIsSUFBSSxDQUFDLGFBQWE7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtnQkFDNUMsT0FBTyxNQUFNLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDO1lBQzFDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLFlBQTBCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBR0Q7Ozs7OztJQWpGQSx1Q0FBdUQ7Ozs7O0lBR3ZELGdDQUFxRDs7Ozs7SUFFckQsc0NBQTBDOzs7OztJQUUxQywwQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpbHRlclNldHRpbmdzIH0gZnJvbSAnLi9maWx0ZXIuc2V0dGluZ3MnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEZpbHRlclR5cGVNYW5hZ2VyIH0gZnJvbSAnLi90eXBlL2ZpbHRlci10eXBlLm1hbmFnZXInO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4uL2RvbWFpbi1hcGkvdHlwZS9maWx0ZXItdHlwZS5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJUeXBlIH0gZnJvbSAnLi90eXBlL2Jhc2UtZmlsdGVyLXR5cGUnO1xuaW1wb3J0IHsgRmlsdGVySWRHZW5lcmF0b3IgfSBmcm9tICcuL2ZpbHRlci5pZC1nZW5lcmF0b3InO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlcklkIH0gZnJvbSAnLi9maWx0ZXIuaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclNldHRpbmdzID0gbmV3IEZpbHRlclNldHRpbmdzKCk7XG5cblx0Ly8gc3RyaW5nIC0+IEZpbHRlcklkXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVycyA9IG5ldyBNYXA8c3RyaW5nLCBGaWx0ZXI+KCk7XG5cblx0cHJpdmF0ZSBhY3RpdmVGaWx0ZXJzOiBBcnJheTxGaWx0ZXI+ID0gW107XG5cblx0cHJpdmF0ZSBmaWx0ZXJUeXBlTWFuYWdlcjogRmlsdGVyVHlwZU1hbmFnZXI7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRnZXRTZXR0aW5ncygpOiBGaWx0ZXJTZXR0aW5ncyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyU2V0dGluZ3M7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8RmlsdGVyPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5maWx0ZXJzKVxuXHRcdFx0XHRcdC5tYXAoKGFycikgPT4gYXJyWzFdKTtcblx0fVxuXG5cdGdldEFsbEFjdGl2ZUZpbHRlcnMoZmllbGRzOiBNYXA8c3RyaW5nLCBGaWVsZD4pOiBSZWFkb25seUFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUZpbHRlcnNcblx0XHRcdFx0ICAgLm1hcCgoYWY6IEZpbHRlcikgPT4ge1xuXHRcdFx0XHRcdCAgIHJldHVybiBuZXcgQWN0aXZlRmlsdGVyUmVhZE1vZGVsKFxuXHRcdFx0XHRcdFx0ICAgYWYuZ2V0RmlsdGVySWQoKSxcblx0XHRcdFx0XHRcdCAgIChmaWVsZHMuZ2V0KGFmLmdldEZpZWxkSWQoKS50b1N0cmluZygpKSkuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0ICAgdGhpcy5maWx0ZXJUeXBlTWFuYWdlci5nZXRGaWx0ZXJUeXBlKGFmLmdldEZpbHRlclR5cGVJZCgpKS5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHQgICBhZi5nZXRGaWx0ZXJWYWx1ZSgpXG5cdFx0XHRcdFx0ICAgKTtcblx0XHRcdFx0ICAgfSk7XG5cdH1cblxuXHRnZXRGaWx0ZXJUeXBlcygpOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPj4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclR5cGVNYW5hZ2VyLmdldEZpZWxkSWRzVG9GaWx0ZXJUeXBlcygpO1xuXHR9XG5cblx0YXNzaWduRmlsdGVyVHlwZXMoZmllbGRzOiBBcnJheTxGaWVsZD4pIHtcblx0XHR0aGlzLmZpbHRlclR5cGVNYW5hZ2VyID0gbmV3IEZpbHRlclR5cGVNYW5hZ2VyKGZpZWxkcyk7XG5cdH1cblxuXHRhZGQoZmllbGRJZDogRmllbGRJZCwgZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpbHRlciA9IG5ldyBGaWx0ZXIoRmlsdGVySWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpLCBmaWVsZElkLCBmaWx0ZXJUeXBlSWQsIHZhbHVlKTtcblxuXHRcdHRoaXMuYWN0aXZlRmlsdGVycy5wdXNoKGZpbHRlcik7XG5cdH1cblxuXHRmaWx0ZXIoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+LCBmaWVsZHM6IE1hcDxzdHJpbmcsIEZpZWxkPik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGxldCBmaWx0ZXJlZEVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFsuLi5lbnRpdGllc107XG5cblx0XHRmb3IgKGxldCBmaWx0ZXIgb2YgdGhpcy5hY3RpdmVGaWx0ZXJzKSB7XG5cblx0XHRcdGNvbnN0IGZpbHRlclR5cGVJZCA9IGZpbHRlci5nZXRGaWx0ZXJUeXBlSWQoKSxcblx0XHRcdFx0ZmlsdGVyVHlwZSA9IHRoaXMuZ2V0RmlsdGVyVHlwZShmaWx0ZXJUeXBlSWQpLFxuXHRcdFx0XHR2YWx1ZSA9IGZpbHRlci5nZXRGaWx0ZXJWYWx1ZSgpO1xuXG5cdFx0XHRmaWx0ZXJlZEVudGl0aWVzID0gZmlsdGVyVHlwZS5maWx0ZXJNYW55KGZpbHRlcmVkRW50aXRpZXMsIGZpZWxkcy5nZXQoZmlsdGVyLmdldEZpZWxkSWQoKS50b1N0cmluZygpKSwgdmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaWx0ZXJlZEVudGl0aWVzO1xuXHR9XG5cblx0cmVtb3ZlQWxsKCk6IHZvaWQge1xuXHRcdHRoaXMuYWN0aXZlRmlsdGVycy5sZW5ndGggPSAwO1xuXHR9XG5cblx0cmVtb3ZlKGZpbHRlcklkOiBGaWx0ZXJJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy5hY3RpdmVGaWx0ZXJzID1cblx0XHRcdHRoaXMuYWN0aXZlRmlsdGVycy5maWx0ZXIoKGZpbHRlcjogRmlsdGVyKSA9PiB7XG5cdFx0XHRcdHJldHVybiBmaWx0ZXIuZ2V0RmlsdGVySWQoKSAhPT0gZmlsdGVySWQ7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RmlsdGVyVHlwZShmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCk6IEJhc2VGaWx0ZXJUeXBlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclR5cGVNYW5hZ2VyLmdldEZpbHRlclR5cGUoZmlsdGVyVHlwZUlkKTtcblx0fVxuXG5cbn1cbiJdfQ==