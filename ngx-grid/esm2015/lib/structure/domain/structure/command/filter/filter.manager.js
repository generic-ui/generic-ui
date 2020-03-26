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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9maWx0ZXIubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSW5ELE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBRWtCLG1CQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUV0QyxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQTJCLENBQUM7SUFtQy9ELENBQUM7Ozs7SUFqQ0EsTUFBTTtRQUNMLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzNCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFnQixFQUFFLGdCQUF3QixFQUFFLFdBQW1COztjQUVsRSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDOztjQUNyRCxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUM7UUFFM0QsSUFBSSxXQUFXLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxRQUFpQzs7Y0FDakMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7O1lBRXpCLGdCQUFnQixHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFcEMsS0FBSyxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDM0IsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDO0NBRUQ7Ozs7OztJQXJDQSx1Q0FBdUQ7Ozs7O0lBRXZELGdDQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUZpbHRlciB9IGZyb20gJy4vc3RydWN0dXJlLmZpbHRlcic7XG5pbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4vZmlsdGVyLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpbHRlclNldHRpbmdzIH0gZnJvbSAnLi9maWx0ZXIuc2V0dGluZ3MnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclNldHRpbmdzID0gbmV3IEZpbHRlclNldHRpbmdzKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJzID0gbmV3IE1hcDxzdHJpbmcsIFN0cnVjdHVyZUZpbHRlcj4oKTtcblxuXHRnZXRBbGwoKTogQXJyYXk8U3RydWN0dXJlRmlsdGVyPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5maWx0ZXJzKVxuXHRcdFx0XHRcdC5tYXAoKGFycikgPT4gYXJyWzFdKTtcblx0fVxuXG5cdGdldFNldHRpbmdzKCk6IEZpbHRlclNldHRpbmdzIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJTZXR0aW5ncztcblx0fVxuXG5cdGFkZEZpbHRlcihmaWVsZDogVHlwZUZpZWxkLCBleHRlcm5hbEZpbHRlcklkOiBzdHJpbmcsIGZpbHRlclZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpbHRlcklkID0gbmV3IEZpbHRlcklkKGZpZWxkLCBleHRlcm5hbEZpbHRlcklkKSxcblx0XHRcdGZpbHRlciA9IG5ldyBTdHJ1Y3R1cmVGaWx0ZXIoZmlsdGVySWQsIGZpZWxkLCBmaWx0ZXJWYWx1ZSk7XG5cblx0XHRpZiAoZmlsdGVyVmFsdWUgPT09ICcnKSB7XG5cdFx0XHR0aGlzLmZpbHRlcnMuZGVsZXRlKGZpbHRlcklkLmdldElkKCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlcnMuc2V0KGZpbHRlcklkLmdldElkKCksIGZpbHRlcik7XG5cdFx0fVxuXHR9XG5cblx0ZmlsdGVyKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRjb25zdCBmaWx0ZXJzID0gdGhpcy5nZXRBbGwoKTtcblxuXHRcdGxldCBmaWx0ZXJlZEVudGl0aWVzID0gWy4uLmVudGl0aWVzXTtcblxuXHRcdGZvciAobGV0IGZpbHRlciBvZiBmaWx0ZXJzKSB7XG5cdFx0XHRmaWx0ZXJlZEVudGl0aWVzID0gZmlsdGVyLmZpbHRlcihmaWx0ZXJlZEVudGl0aWVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmlsdGVyZWRFbnRpdGllcztcblx0fVxuXG59XG4iXX0=