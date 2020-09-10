/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { structureGlobalId } from '../structure.global-id';
import { StructureSummariesRepository } from './enabled/structure.summaries.repository';
export class StructureSummariesWarehouse {
    /**
     * @param {?} structureSummariesRepository
     */
    constructor(structureSummariesRepository) {
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSummariesEnabled(structureId = structureGlobalId) {
        return this.structureSummariesRepository.onSummariesEnabled(structureId);
    }
}
StructureSummariesWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesWarehouse.ctorParameters = () => [
    { type: StructureSummariesRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesWarehouse.prototype.structureSummariesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2RvbWFpbi1hcGkvc3VtbWFyaWVzL3N0cnVjdHVyZS1zdW1tYXJpZXMud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBSXhGLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFFdkMsWUFBb0IsNEJBQTBEO1FBQTFELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFDOUUsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxjQUEyQixpQkFBaUI7UUFDOUQsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7O1lBUkQsVUFBVTs7OztZQUhGLDRCQUE0Qjs7Ozs7OztJQU14QixtRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSB9IGZyb20gJy4vZW5hYmxlZC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeTogU3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25TdW1tYXJpZXNFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeS5vblN1bW1hcmllc0VuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==