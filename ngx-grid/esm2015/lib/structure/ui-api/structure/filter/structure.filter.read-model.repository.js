/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFilterRepository } from '../../../domain/structure/read/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../../domain/structure/read/filter/structure.quick-filter.repository';
export class StructureFilterReadModelRepository {
    /**
     * @param {?} structureFilterRepository
     * @param {?} structureQuickFilterRepository
     */
    constructor(structureFilterRepository, structureQuickFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onFilteringEnabled(structureId) {
        return this.structureFilterRepository.selectFilterEnabled(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onQuickFiltersEnabled(structureId) {
        return this.structureQuickFilterRepository.selectQuickFilterEnabled(structureId);
    }
}
StructureFilterReadModelRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFilterReadModelRepository.ctorParameters = () => [
    { type: StructureFilterRepository },
    { type: StructureQuickFilterRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterReadModelRepository.prototype.structureFilterRepository;
    /**
     * @type {?}
     * @private
     */
    StructureFilterReadModelRepository.prototype.structureQuickFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci5yZWFkLW1vZGVsLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5yZWFkLW1vZGVsLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDOUcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFLekgsTUFBTSxPQUFPLGtDQUFrQzs7Ozs7SUFFOUMsWUFBb0IseUJBQW9ELEVBQzdELDhCQUE4RDtRQURyRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQzdELG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7SUFBRyxDQUFDOzs7OztJQUU3RSxrQkFBa0IsQ0FBQyxXQUF3QjtRQUMxQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLFdBQXdCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7OztZQVpELFVBQVU7Ozs7WUFMRix5QkFBeUI7WUFDekIsOEJBQThCOzs7Ozs7O0lBTzFCLHVFQUE0RDs7Ozs7SUFDckUsNEVBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL2ZpbHRlci9zdHJ1Y3R1cmUucXVpY2stZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeTogU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5KSB7fVxuXG5cdG9uRmlsdGVyaW5nRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5LnNlbGVjdEZpbHRlckVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25RdWlja0ZpbHRlcnNFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeS5zZWxlY3RRdWlja0ZpbHRlckVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==