/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Filter } from './filter';
import { FilterSettings } from './filter.settings';
import { FilterTypeManager } from './type/filter-type.manager';
import { FilterIdGenerator } from '../api/filter.id-generator';
import { ActiveFilterReadModel } from '../api/active/active-filter.read-model';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vZmlsdGVyLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUluRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUcvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUkvRTtJQVdDO1FBVGlCLG1CQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQzs7UUFHdEMsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBRTdDLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztJQUsxQyxDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCw4QkFBTTs7O0lBQU47UUFDQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMzQixHQUFHOzs7O1FBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQU4sQ0FBTSxFQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCwyQ0FBbUI7Ozs7SUFBbkIsVUFBb0IsTUFBMEI7UUFBOUMsaUJBVUM7UUFUQSxPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ25CLEdBQUc7Ozs7UUFBQyxVQUFDLEVBQVU7WUFDZixPQUFPLElBQUkscUJBQXFCLENBQy9CLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFDaEIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQ2xELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQ3BFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FDbkIsQ0FBQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1QsQ0FBQzs7OztJQUVELHNDQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDMUQsQ0FBQzs7Ozs7SUFFRCx5Q0FBaUI7Ozs7SUFBakIsVUFBa0IsTUFBb0I7UUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7OztJQUVELDJCQUFHOzs7Ozs7SUFBSCxVQUFJLE9BQWdCLEVBQUUsWUFBMEIsRUFBRSxLQUFVOztZQUVyRCxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7UUFFdkYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRUQsOEJBQU07Ozs7O0lBQU4sVUFBTyxRQUFpQyxFQUFFLE1BQTBCOzs7WUFFL0QsZ0JBQWdCLG9CQUFnQyxRQUFRLENBQUM7O1lBRTdELEtBQW1CLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFBLGdCQUFBLDRCQUFFO2dCQUFsQyxJQUFJLE1BQU0sV0FBQTs7b0JBRVIsWUFBWSxHQUFHLE1BQU0sQ0FBQyxlQUFlLEVBQUU7O29CQUM1QyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7O29CQUM3QyxLQUFLLEdBQUcsTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFFaEMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzlHOzs7Ozs7Ozs7UUFFRCxPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxpQ0FBUzs7O0lBQVQ7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCw4QkFBTTs7OztJQUFOLFVBQU8sUUFBa0I7UUFFeEIsSUFBSSxDQUFDLGFBQWE7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxNQUFjO2dCQUN4QyxPQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUM7WUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxxQ0FBYTs7Ozs7SUFBckIsVUFBc0IsWUFBMEI7UUFDL0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFHRixvQkFBQztBQUFELENBQUMsQUFuRkQsSUFtRkM7Ozs7Ozs7SUFqRkEsdUNBQXVEOzs7OztJQUd2RCxnQ0FBcUQ7Ozs7O0lBRXJELHNDQUEwQzs7Ozs7SUFFMUMsMENBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpbHRlclNldHRpbmdzIH0gZnJvbSAnLi9maWx0ZXIuc2V0dGluZ3MnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEZpbHRlclR5cGVNYW5hZ2VyIH0gZnJvbSAnLi90eXBlL2ZpbHRlci10eXBlLm1hbmFnZXInO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4uL2FwaS90eXBlL2ZpbHRlci10eXBlLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgQmFzZUZpbHRlclR5cGUgfSBmcm9tICcuL3R5cGUvYmFzZS1maWx0ZXItdHlwZSc7XG5pbXBvcnQgeyBGaWx0ZXJJZEdlbmVyYXRvciB9IGZyb20gJy4uL2FwaS9maWx0ZXIuaWQtZ2VuZXJhdG9yJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlYWRNb2RlbCB9IGZyb20gJy4uL2FwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlcklkIH0gZnJvbSAnLi4vYXBpL2ZpbHRlci5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlck1hbmFnZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyU2V0dGluZ3MgPSBuZXcgRmlsdGVyU2V0dGluZ3MoKTtcblxuXHQvLyBzdHJpbmcgLT4gRmlsdGVySWRcblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJzID0gbmV3IE1hcDxzdHJpbmcsIEZpbHRlcj4oKTtcblxuXHRwcml2YXRlIGFjdGl2ZUZpbHRlcnM6IEFycmF5PEZpbHRlcj4gPSBbXTtcblxuXHRwcml2YXRlIGZpbHRlclR5cGVNYW5hZ2VyOiBGaWx0ZXJUeXBlTWFuYWdlcjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGdldFNldHRpbmdzKCk6IEZpbHRlclNldHRpbmdzIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJTZXR0aW5ncztcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxGaWx0ZXI+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpbHRlcnMpXG5cdFx0XHRcdFx0Lm1hcCgoYXJyKSA9PiBhcnJbMV0pO1xuXHR9XG5cblx0Z2V0QWxsQWN0aXZlRmlsdGVycyhmaWVsZHM6IE1hcDxzdHJpbmcsIEZpZWxkPik6IFJlYWRvbmx5QXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlRmlsdGVyc1xuXHRcdFx0XHQgICAubWFwKChhZjogRmlsdGVyKSA9PiB7XG5cdFx0XHRcdFx0ICAgcmV0dXJuIG5ldyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwoXG5cdFx0XHRcdFx0XHQgICBhZi5nZXRGaWx0ZXJJZCgpLFxuXHRcdFx0XHRcdFx0ICAgKGZpZWxkcy5nZXQoYWYuZ2V0RmllbGRJZCgpLnRvU3RyaW5nKCkpKS5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHQgICB0aGlzLmZpbHRlclR5cGVNYW5hZ2VyLmdldEZpbHRlclR5cGUoYWYuZ2V0RmlsdGVyVHlwZUlkKCkpLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdCAgIGFmLmdldEZpbHRlclZhbHVlKClcblx0XHRcdFx0XHQgICApO1xuXHRcdFx0XHQgICB9KTtcblx0fVxuXG5cdGdldEZpbHRlclR5cGVzKCk6IE1hcDxzdHJpbmcsIEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZU1hbmFnZXIuZ2V0RmllbGRJZHNUb0ZpbHRlclR5cGVzKCk7XG5cdH1cblxuXHRhc3NpZ25GaWx0ZXJUeXBlcyhmaWVsZHM6IEFycmF5PEZpZWxkPikge1xuXHRcdHRoaXMuZmlsdGVyVHlwZU1hbmFnZXIgPSBuZXcgRmlsdGVyVHlwZU1hbmFnZXIoZmllbGRzKTtcblx0fVxuXG5cdGFkZChmaWVsZElkOiBGaWVsZElkLCBmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCwgdmFsdWU6IGFueSk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmlsdGVyID0gbmV3IEZpbHRlcihGaWx0ZXJJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCksIGZpZWxkSWQsIGZpbHRlclR5cGVJZCwgdmFsdWUpO1xuXG5cdFx0dGhpcy5hY3RpdmVGaWx0ZXJzLnB1c2goZmlsdGVyKTtcblx0fVxuXG5cdGZpbHRlcihlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIGZpZWxkczogTWFwPHN0cmluZywgRmllbGQ+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0bGV0IGZpbHRlcmVkRW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gWy4uLmVudGl0aWVzXTtcblxuXHRcdGZvciAobGV0IGZpbHRlciBvZiB0aGlzLmFjdGl2ZUZpbHRlcnMpIHtcblxuXHRcdFx0Y29uc3QgZmlsdGVyVHlwZUlkID0gZmlsdGVyLmdldEZpbHRlclR5cGVJZCgpLFxuXHRcdFx0XHRmaWx0ZXJUeXBlID0gdGhpcy5nZXRGaWx0ZXJUeXBlKGZpbHRlclR5cGVJZCksXG5cdFx0XHRcdHZhbHVlID0gZmlsdGVyLmdldEZpbHRlclZhbHVlKCk7XG5cblx0XHRcdGZpbHRlcmVkRW50aXRpZXMgPSBmaWx0ZXJUeXBlLmZpbHRlck1hbnkoZmlsdGVyZWRFbnRpdGllcywgZmllbGRzLmdldChmaWx0ZXIuZ2V0RmllbGRJZCgpLnRvU3RyaW5nKCkpLCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbHRlcmVkRW50aXRpZXM7XG5cdH1cblxuXHRyZW1vdmVBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5hY3RpdmVGaWx0ZXJzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHRyZW1vdmUoZmlsdGVySWQ6IEZpbHRlcklkKTogdm9pZCB7XG5cblx0XHR0aGlzLmFjdGl2ZUZpbHRlcnMgPVxuXHRcdFx0dGhpcy5hY3RpdmVGaWx0ZXJzLmZpbHRlcigoZmlsdGVyOiBGaWx0ZXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIGZpbHRlci5nZXRGaWx0ZXJJZCgpICE9PSBmaWx0ZXJJZDtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRGaWx0ZXJUeXBlKGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKTogQmFzZUZpbHRlclR5cGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZU1hbmFnZXIuZ2V0RmlsdGVyVHlwZShmaWx0ZXJUeXBlSWQpO1xuXHR9XG5cblxufVxuIl19