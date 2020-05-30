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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWx0ZXIvZmlsdGVyLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUluRCxNQUFNLE9BQU8sYUFBYTtJQUExQjtRQUVrQixtQkFBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFFdEMsWUFBTyxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO0lBbUMvRCxDQUFDOzs7O0lBakNBLE1BQU07UUFDTCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMzQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBZ0IsRUFBRSxnQkFBd0IsRUFBRSxXQUFtQjs7Y0FFbEUsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQzs7Y0FDckQsTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDO1FBRTNELElBQUksV0FBVyxLQUFLLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBaUM7O2NBQ2pDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFOztZQUV6QixnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBRXBDLEtBQUssSUFBSSxNQUFNLElBQUksT0FBTyxFQUFFO1lBQzNCLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNuRDtRQUVELE9BQU8sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQztDQUVEOzs7Ozs7SUFyQ0EsdUNBQXVEOzs7OztJQUV2RCxnQ0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5maWx0ZXInO1xuaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRmlsdGVyU2V0dGluZ3MgfSBmcm9tICcuL2ZpbHRlci5zZXR0aW5ncyc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcblxuXG5leHBvcnQgY2xhc3MgRmlsdGVyTWFuYWdlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJTZXR0aW5ncyA9IG5ldyBGaWx0ZXJTZXR0aW5ncygpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVycyA9IG5ldyBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVGaWx0ZXI+KCk7XG5cblx0Z2V0QWxsKCk6IEFycmF5PFN0cnVjdHVyZUZpbHRlcj4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuZmlsdGVycylcblx0XHRcdFx0XHQubWFwKChhcnIpID0+IGFyclsxXSk7XG5cdH1cblxuXHRnZXRTZXR0aW5ncygpOiBGaWx0ZXJTZXR0aW5ncyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyU2V0dGluZ3M7XG5cdH1cblxuXHRhZGRGaWx0ZXIoZmllbGQ6IFR5cGVGaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZDogc3RyaW5nLCBmaWx0ZXJWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJJZCA9IG5ldyBGaWx0ZXJJZChmaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZCksXG5cdFx0XHRmaWx0ZXIgPSBuZXcgU3RydWN0dXJlRmlsdGVyKGZpbHRlcklkLCBmaWVsZCwgZmlsdGVyVmFsdWUpO1xuXG5cdFx0aWYgKGZpbHRlclZhbHVlID09PSAnJykge1xuXHRcdFx0dGhpcy5maWx0ZXJzLmRlbGV0ZShmaWx0ZXJJZC5nZXRJZCgpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJzLnNldChmaWx0ZXJJZC5nZXRJZCgpLCBmaWx0ZXIpO1xuXHRcdH1cblx0fVxuXG5cdGZpbHRlcihlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0Y29uc3QgZmlsdGVycyA9IHRoaXMuZ2V0QWxsKCk7XG5cblx0XHRsZXQgZmlsdGVyZWRFbnRpdGllcyA9IFsuLi5lbnRpdGllc107XG5cblx0XHRmb3IgKGxldCBmaWx0ZXIgb2YgZmlsdGVycykge1xuXHRcdFx0ZmlsdGVyZWRFbnRpdGllcyA9IGZpbHRlci5maWx0ZXIoZmlsdGVyZWRFbnRpdGllcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbHRlcmVkRW50aXRpZXM7XG5cdH1cblxufVxuIl19