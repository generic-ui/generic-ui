/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFilterRepository } from './read/structure.filter.repository';
import { StructureQuickFilterRepository } from './read/structure.quick-filter.repository';
var StructureFilterWarehouse = /** @class */ (function () {
    function StructureFilterWarehouse(structureFilterRepository, structureQuickFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterWarehouse.prototype.onFilteringEnabled = /**
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
    StructureFilterWarehouse.prototype.onQuickFiltersEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureQuickFilterRepository.selectQuickFilterEnabled(structureId);
    };
    StructureFilterWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFilterWarehouse.ctorParameters = function () { return [
        { type: StructureFilterRepository },
        { type: StructureQuickFilterRepository }
    ]; };
    return StructureFilterWarehouse;
}());
export { StructureFilterWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterWarehouse.prototype.structureFilterRepository;
    /**
     * @type {?}
     * @private
     */
    StructureFilterWarehouse.prototype.structureQuickFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZpbHRlci53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9maWx0ZXIvc3RydWN0dXJlLWZpbHRlci53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDL0UsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFJMUY7SUFHQyxrQ0FBb0IseUJBQW9ELEVBQzdELDhCQUE4RDtRQURyRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQzdELG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7SUFDekUsQ0FBQzs7Ozs7SUFFRCxxREFBa0I7Ozs7SUFBbEIsVUFBbUIsV0FBd0I7UUFDMUMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCx3REFBcUI7Ozs7SUFBckIsVUFBc0IsV0FBd0I7UUFDN0MsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFMRix5QkFBeUI7Z0JBQ3pCLDhCQUE4Qjs7SUFtQnZDLCtCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFksd0JBQXdCOzs7Ozs7SUFFeEIsNkRBQTREOzs7OztJQUNyRSxrRUFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvc3RydWN0dXJlLmZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9zdHJ1Y3R1cmUucXVpY2stZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmlsdGVyV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnk6IFN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uRmlsdGVyaW5nRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5LnNlbGVjdEZpbHRlckVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25RdWlja0ZpbHRlcnNFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeS5zZWxlY3RRdWlja0ZpbHRlckVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==