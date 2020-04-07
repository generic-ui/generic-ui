/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { StructureReadModelRepository } from '../../read/structure/structure.read-model-repository';
import { structureGlobalId } from '../structure.global-id';
import { VerticalFormationRepository } from '../../read/structure/vertical-formation/vertical-formation.repository';
export class StructureReadModelWarehouse {
    /**
     * @param {?} structureRepository
     * @param {?} verticalFormationRepository
     */
    constructor(structureRepository, verticalFormationRepository) {
        this.structureRepository = structureRepository;
        this.verticalFormationRepository = verticalFormationRepository;
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onStructure(aggregateId = structureGlobalId) {
        return this.structureRepository.onStructure(aggregateId);
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onVerticalScrollEnabled(aggregateId = structureGlobalId) {
        return this.structureRepository
            .onStructure(aggregateId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.isVerticalScrollEnabled())), distinctUntilChanged());
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onContainerHeight(aggregateId = structureGlobalId) {
        return this.verticalFormationRepository.onContainerHeight(aggregateId);
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onRowHeight(aggregateId = structureGlobalId) {
        return this.verticalFormationRepository.onRowHeight(aggregateId);
    }
}
StructureReadModelWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureReadModelWarehouse.ctorParameters = () => [
    { type: StructureReadModelRepository },
    { type: VerticalFormationRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureReadModelWarehouse.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelWarehouse.prototype.verticalFormationRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtd2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLnJlYWQtbW9kZWwtd2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUlwSCxNQUFNLE9BQU8sMkJBQTJCOzs7OztJQUV2QyxZQUFvQixtQkFBaUQsRUFDMUQsMkJBQXdEO1FBRC9DLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBOEI7UUFDMUQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtJQUNuRSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxjQUEyQixpQkFBaUI7UUFDdkQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsY0FBMkIsaUJBQWlCO1FBQ25FLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxTQUFpQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsRUFBQyxFQUMvRSxvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxjQUEyQixpQkFBaUI7UUFDN0QsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsY0FBMkIsaUJBQWlCO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7WUExQkQsVUFBVTs7OztZQU5GLDRCQUE0QjtZQUc1QiwyQkFBMkI7Ozs7Ozs7SUFNdkIsMERBQXlEOzs7OztJQUNsRSxrRUFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9yZWFkL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSZWFkTW9kZWxXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSB2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25TdHJ1Y3R1cmUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5Lm9uU3RydWN0dXJlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25TdHJ1Y3R1cmUoYWdncmVnYXRlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiBzdHJ1Y3R1cmUuaXNWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Db250YWluZXJIZWlnaHQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vbkNvbnRhaW5lckhlaWdodChhZ2dyZWdhdGVJZCk7XG5cdH1cblxuXHRvblJvd0hlaWdodChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5Lm9uUm93SGVpZ2h0KGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG59XG4iXX0=