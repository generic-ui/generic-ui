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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWx0ZXIvZmlsdGVyLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV2QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJbkQ7SUFBQTtRQUVrQixtQkFBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFFdEMsWUFBTyxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO0lBbUMvRCxDQUFDOzs7O0lBakNBLDhCQUFNOzs7SUFBTjtRQUNDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzNCLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBTixDQUFNLEVBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7SUFFRCxpQ0FBUzs7Ozs7O0lBQVQsVUFBVSxLQUFnQixFQUFFLGdCQUF3QixFQUFFLFdBQW1COztZQUVsRSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDOztZQUNyRCxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUM7UUFFM0QsSUFBSSxXQUFXLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDOzs7OztJQUVELDhCQUFNOzs7O0lBQU4sVUFBTyxRQUFpQzs7O1lBQ2pDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFOztZQUV6QixnQkFBZ0Isb0JBQU8sUUFBUSxDQUFDOztZQUVwQyxLQUFtQixJQUFBLFlBQUEsaUJBQUEsT0FBTyxDQUFBLGdDQUFBLHFEQUFFO2dCQUF2QixJQUFJLE1BQU0sb0JBQUE7Z0JBQ2QsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ25EOzs7Ozs7Ozs7UUFFRCxPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7SUFFRixvQkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7Ozs7Ozs7SUFyQ0EsdUNBQXVEOzs7OztJQUV2RCxnQ0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5maWx0ZXInO1xuaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRmlsdGVyU2V0dGluZ3MgfSBmcm9tICcuL2ZpbHRlci5zZXR0aW5ncyc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcblxuXG5leHBvcnQgY2xhc3MgRmlsdGVyTWFuYWdlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJTZXR0aW5ncyA9IG5ldyBGaWx0ZXJTZXR0aW5ncygpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVycyA9IG5ldyBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVGaWx0ZXI+KCk7XG5cblx0Z2V0QWxsKCk6IEFycmF5PFN0cnVjdHVyZUZpbHRlcj4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuZmlsdGVycylcblx0XHRcdFx0XHQubWFwKChhcnIpID0+IGFyclsxXSk7XG5cdH1cblxuXHRnZXRTZXR0aW5ncygpOiBGaWx0ZXJTZXR0aW5ncyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyU2V0dGluZ3M7XG5cdH1cblxuXHRhZGRGaWx0ZXIoZmllbGQ6IFR5cGVGaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZDogc3RyaW5nLCBmaWx0ZXJWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJJZCA9IG5ldyBGaWx0ZXJJZChmaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZCksXG5cdFx0XHRmaWx0ZXIgPSBuZXcgU3RydWN0dXJlRmlsdGVyKGZpbHRlcklkLCBmaWVsZCwgZmlsdGVyVmFsdWUpO1xuXG5cdFx0aWYgKGZpbHRlclZhbHVlID09PSAnJykge1xuXHRcdFx0dGhpcy5maWx0ZXJzLmRlbGV0ZShmaWx0ZXJJZC5nZXRJZCgpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJzLnNldChmaWx0ZXJJZC5nZXRJZCgpLCBmaWx0ZXIpO1xuXHRcdH1cblx0fVxuXG5cdGZpbHRlcihlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0Y29uc3QgZmlsdGVycyA9IHRoaXMuZ2V0QWxsKCk7XG5cblx0XHRsZXQgZmlsdGVyZWRFbnRpdGllcyA9IFsuLi5lbnRpdGllc107XG5cblx0XHRmb3IgKGxldCBmaWx0ZXIgb2YgZmlsdGVycykge1xuXHRcdFx0ZmlsdGVyZWRFbnRpdGllcyA9IGZpbHRlci5maWx0ZXIoZmlsdGVyZWRFbnRpdGllcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbHRlcmVkRW50aXRpZXM7XG5cdH1cblxufVxuIl19