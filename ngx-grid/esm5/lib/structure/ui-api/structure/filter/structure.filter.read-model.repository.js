/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFilterRepository } from '../../../domain/structure/read/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../../domain/structure/read/filter/structure.quick-filter.repository';
var StructureFilterReadModelRepository = /** @class */ (function () {
    function StructureFilterReadModelRepository(structureFilterRepository, structureQuickFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterReadModelRepository.prototype.onFilteringEnabled = /**
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
    StructureFilterReadModelRepository.prototype.onQuickFiltersEnabled = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci5yZWFkLW1vZGVsLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5yZWFkLW1vZGVsLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDOUcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFJekg7SUFHQyw0Q0FBb0IseUJBQW9ELEVBQzdELDhCQUE4RDtRQURyRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQzdELG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7SUFDekUsQ0FBQzs7Ozs7SUFFRCwrREFBa0I7Ozs7SUFBbEIsVUFBbUIsV0FBd0I7UUFDMUMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxrRUFBcUI7Ozs7SUFBckIsVUFBc0IsV0FBd0I7UUFDN0MsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFMRix5QkFBeUI7Z0JBQ3pCLDhCQUE4Qjs7SUFtQnZDLHlDQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFksa0NBQWtDOzs7Ozs7SUFFbEMsdUVBQTREOzs7OztJQUNyRSw0RUFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvZmlsdGVyL3N0cnVjdHVyZS5xdWljay1maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWx0ZXJSZWFkTW9kZWxSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnk6IFN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uRmlsdGVyaW5nRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5LnNlbGVjdEZpbHRlckVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25RdWlja0ZpbHRlcnNFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeS5zZWxlY3RRdWlja0ZpbHRlckVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==