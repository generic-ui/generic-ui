/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FilterEnabledRepository } from './read/filter-enabled.repository';
import { QuickFilterEnabledRepository } from './read/quick-filter-enabled.repository';
import { FilterTypeRepository } from './type/filter-type.repository';
import { ActiveFilterRepository } from './active/active-filter.repository';
import { UniqueValuesRepository } from './unique/unique-values.repository';
var FilterWarehouse = /** @class */ (function () {
    function FilterWarehouse(structureFilterRepository, structureQuickFilterRepository, filterTypeRepository, uniqueValuesRepository, activeFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
        this.structureQuickFilterRepository = structureQuickFilterRepository;
        this.filterTypeRepository = filterTypeRepository;
        this.uniqueValuesRepository = uniqueValuesRepository;
        this.activeFilterRepository = activeFilterRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FilterWarehouse.prototype.onFilteringEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureFilterRepository.onFilterEnabled(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    FilterWarehouse.prototype.onQuickFiltersEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureQuickFilterRepository.onQuickFilterEnabled(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    FilterWarehouse.prototype.onFilterTypes = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.filterTypeRepository.on(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    FilterWarehouse.prototype.onActiveFilters = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.activeFilterRepository.on(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    FilterWarehouse.prototype.onUniqueValues = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.uniqueValuesRepository.on(structureId);
    };
    FilterWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FilterWarehouse.ctorParameters = function () { return [
        { type: FilterEnabledRepository },
        { type: QuickFilterEnabledRepository },
        { type: FilterTypeRepository },
        { type: UniqueValuesRepository },
        { type: ActiveFilterRepository }
    ]; };
    return FilterWarehouse;
}());
export { FilterWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterWarehouse.prototype.structureFilterRepository;
    /**
     * @type {?}
     * @private
     */
    FilterWarehouse.prototype.structureQuickFilterRepository;
    /**
     * @type {?}
     * @private
     */
    FilterWarehouse.prototype.filterTypeRepository;
    /**
     * @type {?}
     * @private
     */
    FilterWarehouse.prototype.uniqueValuesRepository;
    /**
     * @type {?}
     * @private
     */
    FilterWarehouse.prototype.activeFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRzNFO0lBR0MseUJBQTZCLHlCQUFrRCxFQUMzRCw4QkFBNEQsRUFDNUQsb0JBQTBDLEVBQzFDLHNCQUE4QyxFQUM5QyxzQkFBOEM7UUFKckMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUF5QjtRQUMzRCxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQThCO1FBQzVELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBQ2xFLENBQUM7Ozs7O0lBRUQsNENBQWtCOzs7O0lBQWxCLFVBQW1CLFdBQXdCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7OztJQUVELCtDQUFxQjs7OztJQUFyQixVQUFzQixXQUF3QjtRQUM3QyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVELHVDQUFhOzs7O0lBQWIsVUFBYyxXQUF3QjtRQUNyQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCx5Q0FBZTs7OztJQUFmLFVBQWdCLFdBQXdCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELHdDQUFjOzs7O0lBQWQsVUFBZSxXQUF3QjtRQUN0QyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Z0JBNUJELFVBQVU7Ozs7Z0JBWEYsdUJBQXVCO2dCQUN2Qiw0QkFBNEI7Z0JBRTVCLG9CQUFvQjtnQkFLcEIsc0JBQXNCO2dCQUZ0QixzQkFBc0I7O0lBbUMvQixzQkFBQztDQUFBLEFBOUJELElBOEJDO1NBN0JZLGVBQWU7Ozs7OztJQUVmLG9EQUFtRTs7Ozs7SUFDNUUseURBQTZFOzs7OztJQUM3RSwrQ0FBMkQ7Ozs7O0lBQzNELGlEQUErRDs7Ozs7SUFDL0QsaURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJFbmFibGVkUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9maWx0ZXItZW5hYmxlZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFF1aWNrRmlsdGVyRW5hYmxlZFJlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvcXVpY2stZmlsdGVyLWVuYWJsZWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUmVwb3NpdG9yeSB9IGZyb20gJy4vdHlwZS9maWx0ZXItdHlwZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZpbHRlclR5cGVNYXAgfSBmcm9tICcuL3R5cGUvZmlsdGVyLXR5cGUtbWFwJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlYWRNb2RlbCB9IGZyb20gJy4vYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCB9IGZyb20gJy4vdW5pcXVlL3VuaXF1ZS12YWx1ZXMucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi91bmlxdWUvdW5pcXVlLXZhbHVlcy5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsdGVyV2FyZWhvdXNlIGltcGxlbWVudHMgV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnk6IEZpbHRlckVuYWJsZWRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeTogUXVpY2tGaWx0ZXJFbmFibGVkUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlUmVwb3NpdG9yeTogRmlsdGVyVHlwZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdW5pcXVlVmFsdWVzUmVwb3NpdG9yeTogVW5pcXVlVmFsdWVzUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVGaWx0ZXJSZXBvc2l0b3J5OiBBY3RpdmVGaWx0ZXJSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvbkZpbHRlcmluZ0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeS5vbkZpbHRlckVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25RdWlja0ZpbHRlcnNFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeS5vblF1aWNrRmlsdGVyRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbkZpbHRlclR5cGVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8RmlsdGVyVHlwZU1hcD4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclR5cGVSZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uQWN0aXZlRmlsdGVycyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPj4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUZpbHRlclJlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25VbmlxdWVWYWx1ZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxVbmlxdWVWYWx1ZXNSZWFkTW9kZWw+IHtcblx0XHRyZXR1cm4gdGhpcy51bmlxdWVWYWx1ZXNSZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=