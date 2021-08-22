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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBSTNFLE1BQU0sT0FBTyxlQUFlOzs7Ozs7OztJQUUzQixZQUE2Qix5QkFBa0QsRUFDM0QsOEJBQTRELEVBQzVELG9CQUEwQyxFQUMxQyxzQkFBOEMsRUFDOUMsc0JBQThDO1FBSnJDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBeUI7UUFDM0QsbUNBQThCLEdBQTlCLDhCQUE4QixDQUE4QjtRQUM1RCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUNsRSxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLFdBQXdCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLFdBQXdCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFdBQXdCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxXQUF3QjtRQUN2QyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBd0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7OztZQTVCRCxVQUFVOzs7O1lBWEYsdUJBQXVCO1lBQ3ZCLDRCQUE0QjtZQUU1QixvQkFBb0I7WUFLcEIsc0JBQXNCO1lBRnRCLHNCQUFzQjs7Ozs7OztJQVFsQixvREFBbUU7Ozs7O0lBQzVFLHlEQUE2RTs7Ozs7SUFDN0UsK0NBQTJEOzs7OztJQUMzRCxpREFBK0Q7Ozs7O0lBQy9ELGlEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgV2FyZWhvdXNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmlsdGVyRW5hYmxlZFJlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvZmlsdGVyLWVuYWJsZWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlckVuYWJsZWRSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL3F1aWNrLWZpbHRlci1lbmFibGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlcG9zaXRvcnkgfSBmcm9tICcuL3R5cGUvZmlsdGVyLXR5cGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlTWFwIH0gZnJvbSAnLi90eXBlL2ZpbHRlci10eXBlLW1hcCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVwb3NpdG9yeSB9IGZyb20gJy4vYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwgfSBmcm9tICcuL3VuaXF1ZS91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzUmVwb3NpdG9yeSB9IGZyb20gJy4vdW5pcXVlL3VuaXF1ZS12YWx1ZXMucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbHRlcldhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5OiBGaWx0ZXJFbmFibGVkUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnk6IFF1aWNrRmlsdGVyRW5hYmxlZFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVHlwZVJlcG9zaXRvcnk6IEZpbHRlclR5cGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHVuaXF1ZVZhbHVlc1JlcG9zaXRvcnk6IFVuaXF1ZVZhbHVlc1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlRmlsdGVyUmVwb3NpdG9yeTogQWN0aXZlRmlsdGVyUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25GaWx0ZXJpbmdFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkub25GaWx0ZXJFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uUXVpY2tGaWx0ZXJzRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkub25RdWlja0ZpbHRlckVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25GaWx0ZXJUeXBlcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPEZpbHRlclR5cGVNYXA+IHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJUeXBlUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbkFjdGl2ZUZpbHRlcnMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVGaWx0ZXJSZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uVW5pcXVlVmFsdWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8VW5pcXVlVmFsdWVzUmVhZE1vZGVsPiB7XG5cdFx0cmV0dXJuIHRoaXMudW5pcXVlVmFsdWVzUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19