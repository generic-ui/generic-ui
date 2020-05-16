/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFilterRepository } from './read/structure.filter.repository';
import { StructureQuickFilterRepository } from './read/structure.quick-filter.repository';
export class StructureFilterWarehouse {
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
StructureFilterWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFilterWarehouse.ctorParameters = () => [
    { type: StructureFilterRepository },
    { type: StructureQuickFilterRepository }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZpbHRlci53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9maWx0ZXIvc3RydWN0dXJlLWZpbHRlci53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDL0UsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFLMUYsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFFcEMsWUFBb0IseUJBQW9ELEVBQzdELDhCQUE4RDtRQURyRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQzdELG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7SUFDekUsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxXQUF3QjtRQUMxQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLFdBQXdCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7OztZQWJELFVBQVU7Ozs7WUFMRix5QkFBeUI7WUFDekIsOEJBQThCOzs7Ozs7O0lBTzFCLDZEQUE0RDs7Ozs7SUFDckUsa0VBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL3N0cnVjdHVyZS5maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvc3RydWN0dXJlLnF1aWNrLWZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpbHRlcldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeTogU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvbkZpbHRlcmluZ0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeS5zZWxlY3RGaWx0ZXJFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uUXVpY2tGaWx0ZXJzRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkuc2VsZWN0UXVpY2tGaWx0ZXJFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=