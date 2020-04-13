/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { structureGlobalId } from '../structure.global-id';
import { StructureSummariesRepository } from '../../read/structure/summaries/structure.summaries.repository';
var StructureSummariesWarehouse = /** @class */ (function () {
    function StructureSummariesWarehouse(structureSummariesRepository) {
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureSummariesWarehouse.prototype.onSummariesEnabled = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structureSummariesRepository.onSummariesEnabled(structureId);
    };
    StructureSummariesWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSummariesWarehouse.ctorParameters = function () { return [
        { type: StructureSummariesRepository }
    ]; };
    return StructureSummariesWarehouse;
}());
export { StructureSummariesWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesWarehouse.prototype.structureSummariesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3N1bW1hcmllcy9zdHJ1Y3R1cmUtc3VtbWFyaWVzLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUc3RztJQUdDLHFDQUFvQiw0QkFBMEQ7UUFBMUQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUM5RSxDQUFDOzs7OztJQUVELHdEQUFrQjs7OztJQUFsQixVQUFtQixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUM5RCxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRSxDQUFDOztnQkFSRCxVQUFVOzs7O2dCQUhGLDRCQUE0Qjs7SUFhckMsa0NBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSwyQkFBMkI7Ozs7OztJQUUzQixtRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3JlYWQvc3RydWN0dXJlL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeTogU3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25TdW1tYXJpZXNFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeS5vblN1bW1hcmllc0VuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==