/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Filter } from './filter';
import { FilterSettings } from './filter.settings';
import { FilterTypeManager } from './type/filter-type.manager';
import { FilterIdGenerator } from './filter.id-generator';
import { ActiveFilterReadModel } from '../domain-api/active/active-filter.read-model';
var FilterManager = /** @class */ (function () {
    function FilterManager() {
        this.filterSettings = new FilterSettings();
        // string -> FilterId
        this.filters = new Map();
        this.activeFilters = [];
    }
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
     * @param {?} fields
     * @return {?}
     */
    FilterManager.prototype.getAllActiveFilters = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        var _this = this;
        return this.activeFilters
            .map((/**
         * @param {?} af
         * @return {?}
         */
        function (af) {
            return new ActiveFilterReadModel(af.getFilterId(), (fields.get(af.getFieldId().toString())).getName(), _this.filterTypeManager.getFilterType(af.getFilterTypeId()).getName(), af.getFilterValue());
        }));
    };
    /**
     * @return {?}
     */
    FilterManager.prototype.getFilterTypes = /**
     * @return {?}
     */
    function () {
        return this.filterTypeManager.getFieldIdsToFilterTypes();
    };
    /**
     * @param {?} fields
     * @return {?}
     */
    FilterManager.prototype.assignFilterTypes = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        this.filterTypeManager = new FilterTypeManager(fields);
    };
    /**
     * @param {?} fieldId
     * @param {?} filterTypeId
     * @param {?} value
     * @return {?}
     */
    FilterManager.prototype.add = /**
     * @param {?} fieldId
     * @param {?} filterTypeId
     * @param {?} value
     * @return {?}
     */
    function (fieldId, filterTypeId, value) {
        /** @type {?} */
        var filter = new Filter(FilterIdGenerator.generateId(), fieldId, filterTypeId, value);
        this.activeFilters.push(filter);
    };
    /**
     * @param {?} entities
     * @param {?} fields
     * @return {?}
     */
    FilterManager.prototype.filter = /**
     * @param {?} entities
     * @param {?} fields
     * @return {?}
     */
    function (entities, fields) {
        var e_1, _a;
        /** @type {?} */
        var filteredEntities = tslib_1.__spread(entities);
        try {
            for (var _b = tslib_1.__values(this.activeFilters), _c = _b.next(); !_c.done; _c = _b.next()) {
                var filter = _c.value;
                /** @type {?} */
                var filterTypeId = filter.getFilterTypeId();
                /** @type {?} */
                var filterType = this.getFilterType(filterTypeId);
                /** @type {?} */
                var value = filter.getFilterValue();
                filteredEntities = filterType.filterMany(filteredEntities, fields.get(filter.getFieldId().toString()), value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return filteredEntities;
    };
    /**
     * @return {?}
     */
    FilterManager.prototype.removeAll = /**
     * @return {?}
     */
    function () {
        this.activeFilters.length = 0;
    };
    /**
     * @param {?} filterId
     * @return {?}
     */
    FilterManager.prototype.remove = /**
     * @param {?} filterId
     * @return {?}
     */
    function (filterId) {
        this.activeFilters =
            this.activeFilters.filter((/**
             * @param {?} filter
             * @return {?}
             */
            function (filter) {
                return filter.getFilterId() !== filterId;
            }));
    };
    /**
     * @private
     * @param {?} filterTypeId
     * @return {?}
     */
    FilterManager.prototype.getFilterType = /**
     * @private
     * @param {?} filterTypeId
     * @return {?}
     */
    function (filterTypeId) {
        return this.filterTypeManager.getFilterType(filterTypeId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluL2ZpbHRlci5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFJdEY7SUFXQztRQVRpQixtQkFBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7O1FBR3RDLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUU3QyxrQkFBYSxHQUFrQixFQUFFLENBQUM7SUFLMUMsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsOEJBQU07OztJQUFOO1FBQ0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDM0IsR0FBRzs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFOLENBQU0sRUFBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsMkNBQW1COzs7O0lBQW5CLFVBQW9CLE1BQTBCO1FBQTlDLGlCQVVDO1FBVEEsT0FBTyxJQUFJLENBQUMsYUFBYTthQUNuQixHQUFHOzs7O1FBQUMsVUFBQyxFQUFVO1lBQ2YsT0FBTyxJQUFJLHFCQUFxQixDQUMvQixFQUFFLENBQUMsV0FBVyxFQUFFLEVBQ2hCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUNsRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUNwRSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQ25CLENBQUM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNULENBQUM7Ozs7SUFFRCxzQ0FBYzs7O0lBQWQ7UUFDQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRUQseUNBQWlCOzs7O0lBQWpCLFVBQWtCLE1BQW9CO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFFRCwyQkFBRzs7Ozs7O0lBQUgsVUFBSSxPQUFnQixFQUFFLFlBQTBCLEVBQUUsS0FBVTs7WUFFckQsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDO1FBRXZGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVELDhCQUFNOzs7OztJQUFOLFVBQU8sUUFBaUMsRUFBRSxNQUEwQjs7O1lBRS9ELGdCQUFnQixvQkFBZ0MsUUFBUSxDQUFDOztZQUU3RCxLQUFtQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBbEMsSUFBSSxNQUFNLFdBQUE7O29CQUVSLFlBQVksR0FBRyxNQUFNLENBQUMsZUFBZSxFQUFFOztvQkFDNUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDOztvQkFDN0MsS0FBSyxHQUFHLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBRWhDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUM5Rzs7Ozs7Ozs7O1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsaUNBQVM7OztJQUFUO1FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsOEJBQU07Ozs7SUFBTixVQUFPLFFBQWtCO1FBRXhCLElBQUksQ0FBQyxhQUFhO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTTs7OztZQUFDLFVBQUMsTUFBYztnQkFDeEMsT0FBTyxNQUFNLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDO1lBQzFDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8scUNBQWE7Ozs7O0lBQXJCLFVBQXNCLFlBQTBCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBR0Ysb0JBQUM7QUFBRCxDQUFDLEFBbkZELElBbUZDOzs7Ozs7O0lBakZBLHVDQUF1RDs7Ozs7SUFHdkQsZ0NBQXFEOzs7OztJQUVyRCxzQ0FBMEM7Ozs7O0lBRTFDLDBDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2UvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRmlsdGVyU2V0dGluZ3MgfSBmcm9tICcuL2ZpbHRlci5zZXR0aW5ncyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZU1hbmFnZXIgfSBmcm9tICcuL3R5cGUvZmlsdGVyLXR5cGUubWFuYWdlcic7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUmVhZE1vZGVsIH0gZnJvbSAnLi4vZG9tYWluLWFwaS90eXBlL2ZpbHRlci10eXBlLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgQmFzZUZpbHRlclR5cGUgfSBmcm9tICcuL3R5cGUvYmFzZS1maWx0ZXItdHlwZSc7XG5pbXBvcnQgeyBGaWx0ZXJJZEdlbmVyYXRvciB9IGZyb20gJy4vZmlsdGVyLmlkLWdlbmVyYXRvcic7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuLi9kb21haW4tYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuL2ZpbHRlci5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlck1hbmFnZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyU2V0dGluZ3MgPSBuZXcgRmlsdGVyU2V0dGluZ3MoKTtcblxuXHQvLyBzdHJpbmcgLT4gRmlsdGVySWRcblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJzID0gbmV3IE1hcDxzdHJpbmcsIEZpbHRlcj4oKTtcblxuXHRwcml2YXRlIGFjdGl2ZUZpbHRlcnM6IEFycmF5PEZpbHRlcj4gPSBbXTtcblxuXHRwcml2YXRlIGZpbHRlclR5cGVNYW5hZ2VyOiBGaWx0ZXJUeXBlTWFuYWdlcjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGdldFNldHRpbmdzKCk6IEZpbHRlclNldHRpbmdzIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJTZXR0aW5ncztcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxGaWx0ZXI+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpbHRlcnMpXG5cdFx0XHRcdFx0Lm1hcCgoYXJyKSA9PiBhcnJbMV0pO1xuXHR9XG5cblx0Z2V0QWxsQWN0aXZlRmlsdGVycyhmaWVsZHM6IE1hcDxzdHJpbmcsIEZpZWxkPik6IFJlYWRvbmx5QXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlRmlsdGVyc1xuXHRcdFx0XHQgICAubWFwKChhZjogRmlsdGVyKSA9PiB7XG5cdFx0XHRcdFx0ICAgcmV0dXJuIG5ldyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwoXG5cdFx0XHRcdFx0XHQgICBhZi5nZXRGaWx0ZXJJZCgpLFxuXHRcdFx0XHRcdFx0ICAgKGZpZWxkcy5nZXQoYWYuZ2V0RmllbGRJZCgpLnRvU3RyaW5nKCkpKS5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHQgICB0aGlzLmZpbHRlclR5cGVNYW5hZ2VyLmdldEZpbHRlclR5cGUoYWYuZ2V0RmlsdGVyVHlwZUlkKCkpLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdCAgIGFmLmdldEZpbHRlclZhbHVlKClcblx0XHRcdFx0XHQgICApO1xuXHRcdFx0XHQgICB9KTtcblx0fVxuXG5cdGdldEZpbHRlclR5cGVzKCk6IE1hcDxzdHJpbmcsIEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZU1hbmFnZXIuZ2V0RmllbGRJZHNUb0ZpbHRlclR5cGVzKCk7XG5cdH1cblxuXHRhc3NpZ25GaWx0ZXJUeXBlcyhmaWVsZHM6IEFycmF5PEZpZWxkPikge1xuXHRcdHRoaXMuZmlsdGVyVHlwZU1hbmFnZXIgPSBuZXcgRmlsdGVyVHlwZU1hbmFnZXIoZmllbGRzKTtcblx0fVxuXG5cdGFkZChmaWVsZElkOiBGaWVsZElkLCBmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCwgdmFsdWU6IGFueSk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmlsdGVyID0gbmV3IEZpbHRlcihGaWx0ZXJJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCksIGZpZWxkSWQsIGZpbHRlclR5cGVJZCwgdmFsdWUpO1xuXG5cdFx0dGhpcy5hY3RpdmVGaWx0ZXJzLnB1c2goZmlsdGVyKTtcblx0fVxuXG5cdGZpbHRlcihlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIGZpZWxkczogTWFwPHN0cmluZywgRmllbGQ+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0bGV0IGZpbHRlcmVkRW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gWy4uLmVudGl0aWVzXTtcblxuXHRcdGZvciAobGV0IGZpbHRlciBvZiB0aGlzLmFjdGl2ZUZpbHRlcnMpIHtcblxuXHRcdFx0Y29uc3QgZmlsdGVyVHlwZUlkID0gZmlsdGVyLmdldEZpbHRlclR5cGVJZCgpLFxuXHRcdFx0XHRmaWx0ZXJUeXBlID0gdGhpcy5nZXRGaWx0ZXJUeXBlKGZpbHRlclR5cGVJZCksXG5cdFx0XHRcdHZhbHVlID0gZmlsdGVyLmdldEZpbHRlclZhbHVlKCk7XG5cblx0XHRcdGZpbHRlcmVkRW50aXRpZXMgPSBmaWx0ZXJUeXBlLmZpbHRlck1hbnkoZmlsdGVyZWRFbnRpdGllcywgZmllbGRzLmdldChmaWx0ZXIuZ2V0RmllbGRJZCgpLnRvU3RyaW5nKCkpLCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbHRlcmVkRW50aXRpZXM7XG5cdH1cblxuXHRyZW1vdmVBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5hY3RpdmVGaWx0ZXJzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHRyZW1vdmUoZmlsdGVySWQ6IEZpbHRlcklkKTogdm9pZCB7XG5cblx0XHR0aGlzLmFjdGl2ZUZpbHRlcnMgPVxuXHRcdFx0dGhpcy5hY3RpdmVGaWx0ZXJzLmZpbHRlcigoZmlsdGVyOiBGaWx0ZXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIGZpbHRlci5nZXRGaWx0ZXJJZCgpICE9PSBmaWx0ZXJJZDtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRGaWx0ZXJUeXBlKGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKTogQmFzZUZpbHRlclR5cGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZU1hbmFnZXIuZ2V0RmlsdGVyVHlwZShmaWx0ZXJUeXBlSWQpO1xuXHR9XG5cblxufVxuIl19