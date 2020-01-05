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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9maWx0ZXIubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR25ELE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBRWtCLG1CQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUV0QyxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQTJCLENBQUM7SUFtQy9ELENBQUM7Ozs7SUFqQ0EsTUFBTTtRQUNMLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzNCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFZLEVBQUUsZ0JBQXdCLEVBQUUsV0FBbUI7O2NBRTlELFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUM7O2NBQ3JELE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQztRQUUzRCxJQUFJLFdBQVcsS0FBSyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWlDOztjQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTs7WUFFekIsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUVwQyxLQUFLLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUMzQixnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDbkQ7UUFFRCxPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7Q0FFRDs7Ozs7O0lBckNBLHVDQUF1RDs7Ozs7SUFFdkQsZ0NBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmlsdGVyJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IEZpbHRlcklkIH0gZnJvbSAnLi9maWx0ZXIuaWQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRmlsdGVyU2V0dGluZ3MgfSBmcm9tICcuL2ZpbHRlci5zZXR0aW5ncyc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlck1hbmFnZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyU2V0dGluZ3MgPSBuZXcgRmlsdGVyU2V0dGluZ3MoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcnMgPSBuZXcgTWFwPHN0cmluZywgU3RydWN0dXJlRmlsdGVyPigpO1xuXG5cdGdldEFsbCgpOiBBcnJheTxTdHJ1Y3R1cmVGaWx0ZXI+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpbHRlcnMpXG5cdFx0XHRcdFx0Lm1hcCgoYXJyKSA9PiBhcnJbMV0pO1xuXHR9XG5cblx0Z2V0U2V0dGluZ3MoKTogRmlsdGVyU2V0dGluZ3Mge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclNldHRpbmdzO1xuXHR9XG5cblx0YWRkRmlsdGVyKGZpZWxkOiBGaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZDogc3RyaW5nLCBmaWx0ZXJWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJJZCA9IG5ldyBGaWx0ZXJJZChmaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZCksXG5cdFx0XHRmaWx0ZXIgPSBuZXcgU3RydWN0dXJlRmlsdGVyKGZpbHRlcklkLCBmaWVsZCwgZmlsdGVyVmFsdWUpO1xuXG5cdFx0aWYgKGZpbHRlclZhbHVlID09PSAnJykge1xuXHRcdFx0dGhpcy5maWx0ZXJzLmRlbGV0ZShmaWx0ZXJJZC5nZXRJZCgpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJzLnNldChmaWx0ZXJJZC5nZXRJZCgpLCBmaWx0ZXIpO1xuXHRcdH1cblx0fVxuXG5cdGZpbHRlcihlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0Y29uc3QgZmlsdGVycyA9IHRoaXMuZ2V0QWxsKCk7XG5cblx0XHRsZXQgZmlsdGVyZWRFbnRpdGllcyA9IFsuLi5lbnRpdGllc107XG5cblx0XHRmb3IgKGxldCBmaWx0ZXIgb2YgZmlsdGVycykge1xuXHRcdFx0ZmlsdGVyZWRFbnRpdGllcyA9IGZpbHRlci5maWx0ZXIoZmlsdGVyZWRFbnRpdGllcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbHRlcmVkRW50aXRpZXM7XG5cdH1cblxufVxuIl19