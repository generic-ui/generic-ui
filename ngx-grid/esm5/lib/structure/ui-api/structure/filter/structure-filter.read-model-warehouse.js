/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFilterRepository } from '../../../read/structure/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../../read/structure/filter/structure.quick-filter.repository';
var StructureFilterReadModelWarehouse = /** @class */ (function () {
    function StructureFilterReadModelWarehouse(structureFilterRepository, structureQuickFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterReadModelWarehouse.prototype.onFilteringEnabled = /**
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
    StructureFilterReadModelWarehouse.prototype.onQuickFiltersEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureQuickFilterRepository.selectQuickFilterEnabled(structureId);
    };
    StructureFilterReadModelWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFilterReadModelWarehouse.ctorParameters = function () { return [
        { type: StructureFilterRepository },
        { type: StructureQuickFilterRepository }
    ]; };
    return StructureFilterReadModelWarehouse;
}());
export { StructureFilterReadModelWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterReadModelWarehouse.prototype.structureFilterRepository;
    /**
     * @type {?}
     * @private
     */
    StructureFilterReadModelWarehouse.prototype.structureQuickFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZpbHRlci5yZWFkLW1vZGVsLXdhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUtZmlsdGVyLnJlYWQtbW9kZWwtd2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBSWxIO0lBR0MsMkNBQW9CLHlCQUFvRCxFQUM3RCw4QkFBOEQ7UUFEckQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUM3RCxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO0lBQ3pFLENBQUM7Ozs7O0lBRUQsOERBQWtCOzs7O0lBQWxCLFVBQW1CLFdBQXdCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsaUVBQXFCOzs7O0lBQXJCLFVBQXNCLFdBQXdCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBTEYseUJBQXlCO2dCQUN6Qiw4QkFBOEI7O0lBbUJ2Qyx3Q0FBQztDQUFBLEFBZkQsSUFlQztTQWRZLGlDQUFpQzs7Ozs7O0lBRWpDLHNFQUE0RDs7Ozs7SUFDckUsMkVBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLnF1aWNrLWZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpbHRlclJlYWRNb2RlbFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeTogU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvbkZpbHRlcmluZ0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeS5zZWxlY3RGaWx0ZXJFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uUXVpY2tGaWx0ZXJzRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkuc2VsZWN0UXVpY2tGaWx0ZXJFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=