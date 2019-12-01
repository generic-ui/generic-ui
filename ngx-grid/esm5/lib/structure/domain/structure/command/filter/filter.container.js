/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureFilter } from './structure.filter';
import { FilterId } from './filter.id';
var FilterContainer = /** @class */ (function () {
    function FilterContainer(enabled) {
        if (enabled === void 0) { enabled = false; }
        this.filters = new Map();
        this.enabled = enabled;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    FilterContainer.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.enabled = config.enabled;
        }
    };
    /**
     * @param {?} field
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    FilterContainer.prototype.addFilter = /**
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
    FilterContainer.prototype.filter = /**
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
    /**
     * @return {?}
     */
    FilterContainer.prototype.getAll = /**
     * @return {?}
     */
    function () {
        if (!this.enabled) {
            return [];
        }
        return Array.from(this.filters)
            .map((/**
         * @param {?} arr
         * @return {?}
         */
        function (arr) { return arr[1]; }));
    };
    return FilterContainer;
}());
export { FilterContainer };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterContainer.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    FilterContainer.prototype.filters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL2ZpbHRlci5jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUl2QztJQU1DLHlCQUFZLE9BQXdCO1FBQXhCLHdCQUFBLEVBQUEsZUFBd0I7UUFGbkIsWUFBTyxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO1FBRzdELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsbUNBQVM7Ozs7SUFBVCxVQUFVLE1BQW9CO1FBRTdCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUM5QjtJQUNGLENBQUM7Ozs7Ozs7SUFFRCxtQ0FBUzs7Ozs7O0lBQVQsVUFBVSxLQUFZLEVBQUUsZ0JBQXdCLEVBQUUsV0FBbUI7O1lBRTlELFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUM7O1lBQ3JELE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQztRQUUzRCxJQUFJLFdBQVcsS0FBSyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUM7Ozs7O0lBRUQsZ0NBQU07Ozs7SUFBTixVQUFPLFFBQWlDOzs7WUFDakMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7O1lBRXpCLGdCQUFnQixvQkFBTyxRQUFRLENBQUM7O1lBRXBDLEtBQW1CLElBQUEsWUFBQSxpQkFBQSxPQUFPLENBQUEsZ0NBQUEscURBQUU7Z0JBQXZCLElBQUksTUFBTSxvQkFBQTtnQkFDZCxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDbkQ7Ozs7Ozs7OztRQUVELE9BQU8sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGdDQUFNOzs7SUFBTjtRQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMzQixHQUFHOzs7O1FBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQU4sQ0FBTSxFQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVGLHNCQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQzs7Ozs7OztJQWpEQSxrQ0FBeUI7Ozs7O0lBRXpCLGtDQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUZpbHRlciB9IGZyb20gJy4vc3RydWN0dXJlLmZpbHRlcic7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IEZpbHRlcklkIH0gZnJvbSAnLi9maWx0ZXIuaWQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb250YWluZXIge1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcnMgPSBuZXcgTWFwPHN0cmluZywgU3RydWN0dXJlRmlsdGVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRzZXRDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcpOiB2b2lkIHtcblxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXHR9XG5cblx0YWRkRmlsdGVyKGZpZWxkOiBGaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZDogc3RyaW5nLCBmaWx0ZXJWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJJZCA9IG5ldyBGaWx0ZXJJZChmaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZCksXG5cdFx0XHRmaWx0ZXIgPSBuZXcgU3RydWN0dXJlRmlsdGVyKGZpbHRlcklkLCBmaWVsZCwgZmlsdGVyVmFsdWUpO1xuXG5cdFx0aWYgKGZpbHRlclZhbHVlID09PSAnJykge1xuXHRcdFx0dGhpcy5maWx0ZXJzLmRlbGV0ZShmaWx0ZXJJZC5nZXRJZCgpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJzLnNldChmaWx0ZXJJZC5nZXRJZCgpLCBmaWx0ZXIpO1xuXHRcdH1cblx0fVxuXG5cdGZpbHRlcihlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0Y29uc3QgZmlsdGVycyA9IHRoaXMuZ2V0QWxsKCk7XG5cblx0XHRsZXQgZmlsdGVyZWRFbnRpdGllcyA9IFsuLi5lbnRpdGllc107XG5cblx0XHRmb3IgKGxldCBmaWx0ZXIgb2YgZmlsdGVycykge1xuXHRcdFx0ZmlsdGVyZWRFbnRpdGllcyA9IGZpbHRlci5maWx0ZXIoZmlsdGVyZWRFbnRpdGllcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbHRlcmVkRW50aXRpZXM7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8U3RydWN0dXJlRmlsdGVyPiB7XG5cblx0XHRpZiAoIXRoaXMuZW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuZmlsdGVycylcblx0XHRcdFx0XHQubWFwKChhcnIpID0+IGFyclsxXSk7XG5cdH1cblxufVxuIl19