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
export class FilterWarehouse {
    /**
     * @param {?} structureFilterRepository
     * @param {?} structureQuickFilterRepository
     * @param {?} filterTypeRepository
     * @param {?} uniqueValuesRepository
     * @param {?} activeFilterRepository
     */
    constructor(structureFilterRepository, structureQuickFilterRepository, filterTypeRepository, uniqueValuesRepository, activeFilterRepository) {
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
    onFilteringEnabled(structureId) {
        return this.structureFilterRepository.onFilterEnabled(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onQuickFiltersEnabled(structureId) {
        return this.structureQuickFilterRepository.onQuickFilterEnabled(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onFilterTypes(structureId) {
        return this.filterTypeRepository.on(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onActiveFilters(structureId) {
        return this.activeFilterRepository.on(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onUniqueValues(structureId) {
        return this.uniqueValuesRepository.on(structureId);
    }
}
FilterWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FilterWarehouse.ctorParameters = () => [
    { type: FilterEnabledRepository },
    { type: QuickFilterEnabledRepository },
    { type: FilterTypeRepository },
    { type: UniqueValuesRepository },
    { type: ActiveFilterRepository }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4tYXBpL2ZpbHRlci53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFJM0UsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7O0lBRTNCLFlBQTZCLHlCQUFrRCxFQUMzRCw4QkFBNEQsRUFDNUQsb0JBQTBDLEVBQzFDLHNCQUE4QyxFQUM5QyxzQkFBOEM7UUFKckMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUF5QjtRQUMzRCxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQThCO1FBQzVELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBQ2xFLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsV0FBd0I7UUFDMUMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsV0FBd0I7UUFDN0MsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsV0FBd0I7UUFDckMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQXdCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxXQUF3QjtRQUN0QyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBNUJELFVBQVU7Ozs7WUFYRix1QkFBdUI7WUFDdkIsNEJBQTRCO1lBRTVCLG9CQUFvQjtZQUtwQixzQkFBc0I7WUFGdEIsc0JBQXNCOzs7Ozs7O0lBUWxCLG9EQUFtRTs7Ozs7SUFDNUUseURBQTZFOzs7OztJQUM3RSwrQ0FBMkQ7Ozs7O0lBQzNELGlEQUErRDs7Ozs7SUFDL0QsaURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJFbmFibGVkUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9maWx0ZXItZW5hYmxlZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFF1aWNrRmlsdGVyRW5hYmxlZFJlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvcXVpY2stZmlsdGVyLWVuYWJsZWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUmVwb3NpdG9yeSB9IGZyb20gJy4vdHlwZS9maWx0ZXItdHlwZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZpbHRlclR5cGVNYXAgfSBmcm9tICcuL3R5cGUvZmlsdGVyLXR5cGUtbWFwJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlYWRNb2RlbCB9IGZyb20gJy4vYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCB9IGZyb20gJy4vdW5pcXVlL3VuaXF1ZS12YWx1ZXMucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi91bmlxdWUvdW5pcXVlLXZhbHVlcy5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsdGVyV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnk6IEZpbHRlckVuYWJsZWRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeTogUXVpY2tGaWx0ZXJFbmFibGVkUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlUmVwb3NpdG9yeTogRmlsdGVyVHlwZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdW5pcXVlVmFsdWVzUmVwb3NpdG9yeTogVW5pcXVlVmFsdWVzUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVGaWx0ZXJSZXBvc2l0b3J5OiBBY3RpdmVGaWx0ZXJSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvbkZpbHRlcmluZ0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeS5vbkZpbHRlckVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25RdWlja0ZpbHRlcnNFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeS5vblF1aWNrRmlsdGVyRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbkZpbHRlclR5cGVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8RmlsdGVyVHlwZU1hcD4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclR5cGVSZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uQWN0aXZlRmlsdGVycyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPj4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUZpbHRlclJlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25VbmlxdWVWYWx1ZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxVbmlxdWVWYWx1ZXNSZWFkTW9kZWw+IHtcblx0XHRyZXR1cm4gdGhpcy51bmlxdWVWYWx1ZXNSZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=