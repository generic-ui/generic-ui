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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4tYXBpL2ZpbHRlci53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHM0U7SUFHQyx5QkFBNkIseUJBQWtELEVBQzNELDhCQUE0RCxFQUM1RCxvQkFBMEMsRUFDMUMsc0JBQThDLEVBQzlDLHNCQUE4QztRQUpyQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQXlCO1FBQzNELG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBOEI7UUFDNUQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDbEUsQ0FBQzs7Ozs7SUFFRCw0Q0FBa0I7Ozs7SUFBbEIsVUFBbUIsV0FBd0I7UUFDMUMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBRUQsK0NBQXFCOzs7O0lBQXJCLFVBQXNCLFdBQXdCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBRUQsdUNBQWE7Ozs7SUFBYixVQUFjLFdBQXdCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELHlDQUFlOzs7O0lBQWYsVUFBZ0IsV0FBd0I7UUFDdkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQsd0NBQWM7Ozs7SUFBZCxVQUFlLFdBQXdCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDOztnQkE1QkQsVUFBVTs7OztnQkFYRix1QkFBdUI7Z0JBQ3ZCLDRCQUE0QjtnQkFFNUIsb0JBQW9CO2dCQUtwQixzQkFBc0I7Z0JBRnRCLHNCQUFzQjs7SUFtQy9CLHNCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E3QlksZUFBZTs7Ozs7O0lBRWYsb0RBQW1FOzs7OztJQUM1RSx5REFBNkU7Ozs7O0lBQzdFLCtDQUEyRDs7Ozs7SUFDM0QsaURBQStEOzs7OztJQUMvRCxpREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZpbHRlckVuYWJsZWRSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL2ZpbHRlci1lbmFibGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJFbmFibGVkUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9xdWljay1maWx0ZXItZW5hYmxlZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZXBvc2l0b3J5IH0gZnJvbSAnLi90eXBlL2ZpbHRlci10eXBlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRmlsdGVyVHlwZU1hcCB9IGZyb20gJy4vdHlwZS9maWx0ZXItdHlwZS1tYXAnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzUmVhZE1vZGVsIH0gZnJvbSAnLi91bmlxdWUvdW5pcXVlLXZhbHVlcy5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc1JlcG9zaXRvcnkgfSBmcm9tICcuL3VuaXF1ZS91bmlxdWUtdmFsdWVzLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWx0ZXJXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeTogRmlsdGVyRW5hYmxlZFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5OiBRdWlja0ZpbHRlckVuYWJsZWRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVSZXBvc2l0b3J5OiBGaWx0ZXJUeXBlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB1bmlxdWVWYWx1ZXNSZXBvc2l0b3J5OiBVbmlxdWVWYWx1ZXNSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUZpbHRlclJlcG9zaXRvcnk6IEFjdGl2ZUZpbHRlclJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uRmlsdGVyaW5nRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5Lm9uRmlsdGVyRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblF1aWNrRmlsdGVyc0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5Lm9uUXVpY2tGaWx0ZXJFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uRmlsdGVyVHlwZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxGaWx0ZXJUeXBlTWFwPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZVJlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25BY3RpdmVGaWx0ZXJzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8UmVhZG9ubHlBcnJheTxBY3RpdmVGaWx0ZXJSZWFkTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlRmlsdGVyUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblVuaXF1ZVZhbHVlcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFVuaXF1ZVZhbHVlc1JlYWRNb2RlbD4ge1xuXHRcdHJldHVybiB0aGlzLnVuaXF1ZVZhbHVlc1JlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==