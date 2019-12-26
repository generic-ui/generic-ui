/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureFilter } from './structure.filter';
import { FilterId } from './filter.id';
export class FilterCollection {
    /**
     * @param {?=} enabled
     */
    constructor(enabled = false) {
        this.filters = new Map();
        this.enabled = enabled;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.enabled = config.enabled;
        }
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
    /**
     * @return {?}
     */
    getAll() {
        if (!this.enabled) {
            return [];
        }
        return Array.from(this.filters)
            .map((/**
         * @param {?} arr
         * @return {?}
         */
        (arr) => arr[1]));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterCollection.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    FilterCollection.prototype.filters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9maWx0ZXIuY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJdkMsTUFBTSxPQUFPLGdCQUFnQjs7OztJQU01QixZQUFZLFVBQW1CLEtBQUs7UUFGbkIsWUFBTyxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO1FBRzdELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQW9CO1FBRTdCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUM5QjtJQUNGLENBQUM7Ozs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBWSxFQUFFLGdCQUF3QixFQUFFLFdBQW1COztjQUU5RCxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDOztjQUNyRCxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUM7UUFFM0QsSUFBSSxXQUFXLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxRQUFpQzs7Y0FDakMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7O1lBRXpCLGdCQUFnQixHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFcEMsS0FBSyxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDM0IsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsTUFBTTtRQUVMLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMzQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQzFCLENBQUM7Q0FFRDs7Ozs7O0lBakRBLG1DQUF5Qjs7Ozs7SUFFekIsbUNBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmlsdGVyJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbGxlY3Rpb24ge1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcnMgPSBuZXcgTWFwPHN0cmluZywgU3RydWN0dXJlRmlsdGVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRzZXRDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcpOiB2b2lkIHtcblxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXHR9XG5cblx0YWRkRmlsdGVyKGZpZWxkOiBGaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZDogc3RyaW5nLCBmaWx0ZXJWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJJZCA9IG5ldyBGaWx0ZXJJZChmaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZCksXG5cdFx0XHRmaWx0ZXIgPSBuZXcgU3RydWN0dXJlRmlsdGVyKGZpbHRlcklkLCBmaWVsZCwgZmlsdGVyVmFsdWUpO1xuXG5cdFx0aWYgKGZpbHRlclZhbHVlID09PSAnJykge1xuXHRcdFx0dGhpcy5maWx0ZXJzLmRlbGV0ZShmaWx0ZXJJZC5nZXRJZCgpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJzLnNldChmaWx0ZXJJZC5nZXRJZCgpLCBmaWx0ZXIpO1xuXHRcdH1cblx0fVxuXG5cdGZpbHRlcihlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0Y29uc3QgZmlsdGVycyA9IHRoaXMuZ2V0QWxsKCk7XG5cblx0XHRsZXQgZmlsdGVyZWRFbnRpdGllcyA9IFsuLi5lbnRpdGllc107XG5cblx0XHRmb3IgKGxldCBmaWx0ZXIgb2YgZmlsdGVycykge1xuXHRcdFx0ZmlsdGVyZWRFbnRpdGllcyA9IGZpbHRlci5maWx0ZXIoZmlsdGVyZWRFbnRpdGllcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbHRlcmVkRW50aXRpZXM7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8U3RydWN0dXJlRmlsdGVyPiB7XG5cblx0XHRpZiAoIXRoaXMuZW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuZmlsdGVycylcblx0XHRcdFx0XHQubWFwKChhcnIpID0+IGFyclsxXSk7XG5cdH1cblxufVxuIl19