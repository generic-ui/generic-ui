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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9maWx0ZXIubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUluRDtJQUFBO1FBRWtCLG1CQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUV0QyxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQTJCLENBQUM7SUFtQy9ELENBQUM7Ozs7SUFqQ0EsOEJBQU07OztJQUFOO1FBQ0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDM0IsR0FBRzs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFOLENBQU0sRUFBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7Ozs7OztJQUVELGlDQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQWdCLEVBQUUsZ0JBQXdCLEVBQUUsV0FBbUI7O1lBRWxFLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUM7O1lBQ3JELE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQztRQUUzRCxJQUFJLFdBQVcsS0FBSyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUM7Ozs7O0lBRUQsOEJBQU07Ozs7SUFBTixVQUFPLFFBQWlDOzs7WUFDakMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7O1lBRXpCLGdCQUFnQixvQkFBTyxRQUFRLENBQUM7O1lBRXBDLEtBQW1CLElBQUEsWUFBQSxpQkFBQSxPQUFPLENBQUEsZ0NBQUEscURBQUU7Z0JBQXZCLElBQUksTUFBTSxvQkFBQTtnQkFDZCxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDbkQ7Ozs7Ozs7OztRQUVELE9BQU8sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQzs7Ozs7OztJQXJDQSx1Q0FBdUQ7Ozs7O0lBRXZELGdDQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUZpbHRlciB9IGZyb20gJy4vc3RydWN0dXJlLmZpbHRlcic7XG5pbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4vZmlsdGVyLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpbHRlclNldHRpbmdzIH0gZnJvbSAnLi9maWx0ZXIuc2V0dGluZ3MnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclNldHRpbmdzID0gbmV3IEZpbHRlclNldHRpbmdzKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJzID0gbmV3IE1hcDxzdHJpbmcsIFN0cnVjdHVyZUZpbHRlcj4oKTtcblxuXHRnZXRBbGwoKTogQXJyYXk8U3RydWN0dXJlRmlsdGVyPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5maWx0ZXJzKVxuXHRcdFx0XHRcdC5tYXAoKGFycikgPT4gYXJyWzFdKTtcblx0fVxuXG5cdGdldFNldHRpbmdzKCk6IEZpbHRlclNldHRpbmdzIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJTZXR0aW5ncztcblx0fVxuXG5cdGFkZEZpbHRlcihmaWVsZDogVHlwZUZpZWxkLCBleHRlcm5hbEZpbHRlcklkOiBzdHJpbmcsIGZpbHRlclZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpbHRlcklkID0gbmV3IEZpbHRlcklkKGZpZWxkLCBleHRlcm5hbEZpbHRlcklkKSxcblx0XHRcdGZpbHRlciA9IG5ldyBTdHJ1Y3R1cmVGaWx0ZXIoZmlsdGVySWQsIGZpZWxkLCBmaWx0ZXJWYWx1ZSk7XG5cblx0XHRpZiAoZmlsdGVyVmFsdWUgPT09ICcnKSB7XG5cdFx0XHR0aGlzLmZpbHRlcnMuZGVsZXRlKGZpbHRlcklkLmdldElkKCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlcnMuc2V0KGZpbHRlcklkLmdldElkKCksIGZpbHRlcik7XG5cdFx0fVxuXHR9XG5cblx0ZmlsdGVyKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRjb25zdCBmaWx0ZXJzID0gdGhpcy5nZXRBbGwoKTtcblxuXHRcdGxldCBmaWx0ZXJlZEVudGl0aWVzID0gWy4uLmVudGl0aWVzXTtcblxuXHRcdGZvciAobGV0IGZpbHRlciBvZiBmaWx0ZXJzKSB7XG5cdFx0XHRmaWx0ZXJlZEVudGl0aWVzID0gZmlsdGVyLmZpbHRlcihmaWx0ZXJlZEVudGl0aWVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmlsdGVyZWRFbnRpdGllcztcblx0fVxuXG59XG4iXX0=