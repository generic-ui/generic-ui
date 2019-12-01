/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFilterRepository } from '../../../domain/structure/query/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../../domain/structure/query/filter/structure.quick-filter.repository';
var StructureFilterReadModelRepository = /** @class */ (function () {
    function StructureFilterReadModelRepository(structureFilterRepository, structureQuickFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterReadModelRepository.prototype.selectFilteringEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureFilterRepository.selectFilterEnabled(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterReadModelRepository.prototype.selectQuickFiltersEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureQuickFilterRepository.selectQuickFilterEnabled(structureId);
    };
    StructureFilterReadModelRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFilterReadModelRepository.ctorParameters = function () { return [
        { type: StructureFilterRepository },
        { type: StructureQuickFilterRepository }
    ]; };
    return StructureFilterReadModelRepository;
}());
export { StructureFilterReadModelRepository };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci5yZWFkLW1vZGVsLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5yZWFkLW1vZGVsLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDL0csT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFJMUg7SUFHQyw0Q0FBb0IseUJBQW9ELEVBQzdELDhCQUE4RDtRQURyRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQzdELG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7SUFBRyxDQUFDOzs7OztJQUU3RSxtRUFBc0I7Ozs7SUFBdEIsVUFBdUIsV0FBd0I7UUFDOUMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxzRUFBeUI7Ozs7SUFBekIsVUFBMEIsV0FBd0I7UUFDakQsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Z0JBWkQsVUFBVTs7OztnQkFMRix5QkFBeUI7Z0JBQ3pCLDhCQUE4Qjs7SUFrQnZDLHlDQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlksa0NBQWtDOzs7Ozs7SUFFbEMsdUVBQTREOzs7OztJQUNyRSw0RUFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9xdWVyeS9maWx0ZXIvc3RydWN0dXJlLnF1aWNrLWZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpbHRlclJlYWRNb2RlbFJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeTogU3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnk6IFN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeSkge31cblxuXHRzZWxlY3RGaWx0ZXJpbmdFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkuc2VsZWN0RmlsdGVyRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZWxlY3RRdWlja0ZpbHRlcnNFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeS5zZWxlY3RRdWlja0ZpbHRlckVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==