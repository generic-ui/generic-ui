/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureReadModelRepository } from '../../core/domain-api/read/structure.read-model-repository';
import { structureGlobalId } from '../../core/domain-api/structure.global-id';
var SortingWarehouse = /** @class */ (function () {
    function SortingWarehouse(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    SortingWarehouse.prototype.onStructure = /**
     * @param {?=} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        if (aggregateId === void 0) { aggregateId = structureGlobalId; }
        return this.structureRepository.onStructure(aggregateId);
    };
    SortingWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SortingWarehouse.ctorParameters = function () { return [
        { type: StructureReadModelRepository }
    ]; };
    return SortingWarehouse;
}());
export { SortingWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortingWarehouse.prototype.structureRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2RvbWFpbi1hcGkvc29ydGluZy53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDMUcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFJOUU7SUFHQywwQkFBNkIsbUJBQWlEO1FBQWpELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBOEI7SUFDOUUsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDdkQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7O2dCQVJELFVBQVU7Ozs7Z0JBTEYsNEJBQTRCOztJQWVyQyx1QkFBQztDQUFBLEFBVkQsSUFVQztTQVRZLGdCQUFnQjs7Ozs7O0lBRWhCLCtDQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQsIFdhcmVob3VzZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4tYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3J0aW5nV2FyZWhvdXNlIGltcGxlbWVudHMgV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uU3RydWN0dXJlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeS5vblN0cnVjdHVyZShhZ2dyZWdhdGVJZCk7XG5cdH1cblxufVxuIl19