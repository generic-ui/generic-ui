/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureReadModelRepository } from './read/structure.read-model-repository';
import { structureGlobalId } from './structure.global-id';
import { VerticalFormationRepository } from './vertical-formation/vertical-formation.repository';
var StructureWarehouse = /** @class */ (function () {
    function StructureWarehouse(structureRepository, verticalFormationRepository) {
        this.structureRepository = structureRepository;
        this.verticalFormationRepository = verticalFormationRepository;
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    StructureWarehouse.prototype.onStructure = /**
     * @param {?=} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        if (aggregateId === void 0) { aggregateId = structureGlobalId; }
        return this.structureRepository.onStructure(aggregateId);
    };
    StructureWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureWarehouse.ctorParameters = function () { return [
        { type: StructureReadModelRepository },
        { type: VerticalFormationRepository }
    ]; };
    return StructureWarehouse;
}());
export { StructureWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureWarehouse.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    StructureWarehouse.prototype.verticalFormationRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N0cnVjdHVyZS53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFHakc7SUFHQyw0QkFBb0IsbUJBQWlELEVBQzFELDJCQUF3RDtRQUQvQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQThCO1FBQzFELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFDbkUsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDdkQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7O2dCQVRELFVBQVU7Ozs7Z0JBTkYsNEJBQTRCO2dCQUc1QiwyQkFBMkI7O0lBY3BDLHlCQUFDO0NBQUEsQUFYRCxJQVdDO1NBVlksa0JBQWtCOzs7Ozs7SUFFbEIsaURBQXlEOzs7OztJQUNsRSx5REFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblN0cnVjdHVyZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8U3RydWN0dXJlUmVhZE1vZGVsUm9vdD4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnkub25TdHJ1Y3R1cmUoYWdncmVnYXRlSWQpO1xuXHR9XG5cbn1cbiJdfQ==