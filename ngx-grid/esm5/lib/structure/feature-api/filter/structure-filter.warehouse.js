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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZpbHRlci53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvZmlsdGVyL3N0cnVjdHVyZS1maWx0ZXIud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBSTFGO0lBR0Msa0NBQW9CLHlCQUFvRCxFQUM3RCw4QkFBOEQ7UUFEckQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUM3RCxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO0lBQ3pFLENBQUM7Ozs7O0lBRUQscURBQWtCOzs7O0lBQWxCLFVBQW1CLFdBQXdCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsd0RBQXFCOzs7O0lBQXJCLFVBQXNCLFdBQXdCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBTEYseUJBQXlCO2dCQUN6Qiw4QkFBOEI7O0lBbUJ2QywrQkFBQztDQUFBLEFBZkQsSUFlQztTQWRZLHdCQUF3Qjs7Ozs7O0lBRXhCLDZEQUE0RDs7Ozs7SUFDckUsa0VBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL3N0cnVjdHVyZS5maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvc3RydWN0dXJlLnF1aWNrLWZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpbHRlcldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeTogU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvbkZpbHRlcmluZ0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeS5zZWxlY3RGaWx0ZXJFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uUXVpY2tGaWx0ZXJzRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkuc2VsZWN0UXVpY2tGaWx0ZXJFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=