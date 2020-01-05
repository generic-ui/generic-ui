/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureFilter } from './structure.filter';
import { FilterId } from './filter.id';
import { FilterSettings } from './filter.settings';
var FilterManager = /** @class */ (function () {
    function FilterManager() {
        this.filterSettings = new FilterSettings();
        this.filters = new Map();
    }
    /**
     * @return {?}
     */
    FilterManager.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return Array.from(this.filters)
            .map((/**
         * @param {?} arr
         * @return {?}
         */
        function (arr) { return arr[1]; }));
    };
    /**
     * @return {?}
     */
    FilterManager.prototype.getSettings = /**
     * @return {?}
     */
    function () {
        return this.filterSettings;
    };
    /**
     * @param {?} field
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    FilterManager.prototype.addFilter = /**
     * @param {?} field
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    function (field, externalFilterId, filterValue) {
        /** @type {?} */
        var filterId = new FilterId(field, externalFilterId);
        /** @type {?} */
        var filter = new StructureFilter(filterId, field, filterValue);
        if (filterValue === '') {
            this.filters.delete(filterId.getId());
        }
        else {
            this.filters.set(filterId.getId(), filter);
        }
    };
    /**
     * @param {?} entities
     * @return {?}
     */
    FilterManager.prototype.filter = /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        var e_1, _a;
        /** @type {?} */
        var filters = this.getAll();
        /** @type {?} */
        var filteredEntities = tslib_1.__spread(entities);
        try {
            for (var filters_1 = tslib_1.__values(filters), filters_1_1 = filters_1.next(); !filters_1_1.done; filters_1_1 = filters_1.next()) {
                var filter = filters_1_1.value;
                filteredEntities = filter.filter(filteredEntities);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (filters_1_1 && !filters_1_1.done && (_a = filters_1.return)) _a.call(filters_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return filteredEntities;
    };
    return FilterManager;
}());
export { FilterManager };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9maWx0ZXIubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUduRDtJQUFBO1FBRWtCLG1CQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUV0QyxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQTJCLENBQUM7SUFtQy9ELENBQUM7Ozs7SUFqQ0EsOEJBQU07OztJQUFOO1FBQ0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDM0IsR0FBRzs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFOLENBQU0sRUFBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7Ozs7OztJQUVELGlDQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQVksRUFBRSxnQkFBd0IsRUFBRSxXQUFtQjs7WUFFOUQsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQzs7WUFDckQsTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDO1FBRTNELElBQUksV0FBVyxLQUFLLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCw4QkFBTTs7OztJQUFOLFVBQU8sUUFBaUM7OztZQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTs7WUFFekIsZ0JBQWdCLG9CQUFPLFFBQVEsQ0FBQzs7WUFFcEMsS0FBbUIsSUFBQSxZQUFBLGlCQUFBLE9BQU8sQ0FBQSxnQ0FBQSxxREFBRTtnQkFBdkIsSUFBSSxNQUFNLG9CQUFBO2dCQUNkLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUNuRDs7Ozs7Ozs7O1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDOzs7Ozs7O0lBckNBLHVDQUF1RDs7Ozs7SUFFdkQsZ0NBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmlsdGVyJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IEZpbHRlcklkIH0gZnJvbSAnLi9maWx0ZXIuaWQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRmlsdGVyU2V0dGluZ3MgfSBmcm9tICcuL2ZpbHRlci5zZXR0aW5ncyc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlck1hbmFnZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyU2V0dGluZ3MgPSBuZXcgRmlsdGVyU2V0dGluZ3MoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcnMgPSBuZXcgTWFwPHN0cmluZywgU3RydWN0dXJlRmlsdGVyPigpO1xuXG5cdGdldEFsbCgpOiBBcnJheTxTdHJ1Y3R1cmVGaWx0ZXI+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpbHRlcnMpXG5cdFx0XHRcdFx0Lm1hcCgoYXJyKSA9PiBhcnJbMV0pO1xuXHR9XG5cblx0Z2V0U2V0dGluZ3MoKTogRmlsdGVyU2V0dGluZ3Mge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclNldHRpbmdzO1xuXHR9XG5cblx0YWRkRmlsdGVyKGZpZWxkOiBGaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZDogc3RyaW5nLCBmaWx0ZXJWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJJZCA9IG5ldyBGaWx0ZXJJZChmaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZCksXG5cdFx0XHRmaWx0ZXIgPSBuZXcgU3RydWN0dXJlRmlsdGVyKGZpbHRlcklkLCBmaWVsZCwgZmlsdGVyVmFsdWUpO1xuXG5cdFx0aWYgKGZpbHRlclZhbHVlID09PSAnJykge1xuXHRcdFx0dGhpcy5maWx0ZXJzLmRlbGV0ZShmaWx0ZXJJZC5nZXRJZCgpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJzLnNldChmaWx0ZXJJZC5nZXRJZCgpLCBmaWx0ZXIpO1xuXHRcdH1cblx0fVxuXG5cdGZpbHRlcihlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0Y29uc3QgZmlsdGVycyA9IHRoaXMuZ2V0QWxsKCk7XG5cblx0XHRsZXQgZmlsdGVyZWRFbnRpdGllcyA9IFsuLi5lbnRpdGllc107XG5cblx0XHRmb3IgKGxldCBmaWx0ZXIgb2YgZmlsdGVycykge1xuXHRcdFx0ZmlsdGVyZWRFbnRpdGllcyA9IGZpbHRlci5maWx0ZXIoZmlsdGVyZWRFbnRpdGllcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbHRlcmVkRW50aXRpZXM7XG5cdH1cblxufVxuIl19