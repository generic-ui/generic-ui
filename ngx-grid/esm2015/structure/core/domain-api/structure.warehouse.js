/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureReadModelRepository } from './read/structure.read-model-repository';
import { structureGlobalId } from './structure.global-id';
export class StructureWarehouse {
    /**
     * @param {?} structureRepository
     */
    constructor(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onStructure(aggregateId = structureGlobalId) {
        return this.structureRepository.onStructure(aggregateId);
    }
}
StructureWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureWarehouse.ctorParameters = () => [
    { type: StructureReadModelRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureWarehouse.prototype.structureRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzFELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFFOUIsWUFBNkIsbUJBQWlEO1FBQWpELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBOEI7SUFDOUUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsY0FBMkIsaUJBQWlCO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7WUFSRCxVQUFVOzs7O1lBTEYsNEJBQTRCOzs7Ozs7O0lBUXhCLGlEQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4vcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uU3RydWN0dXJlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeS5vblN0cnVjdHVyZShhZ2dyZWdhdGVJZCk7XG5cdH1cblxufVxuIl19