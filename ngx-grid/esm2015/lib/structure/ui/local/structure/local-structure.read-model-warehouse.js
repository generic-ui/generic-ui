/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureReadModelWarehouse } from '../../../ui-api/structure/structure.read-model-warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../read/structure/structure.read-model-repository';
import { VerticalFormationRepository } from '../../../read/structure/vertical-formation/vertical-formation.repository';
export class LocalStructureReadModelWarehouse extends StructureReadModelWarehouse {
    /**
     * @param {?} structureId
     * @param {?} structureRepository
     * @param {?} verticalFormationRepository
     */
    constructor(structureId, structureRepository, verticalFormationRepository) {
        super(structureRepository, verticalFormationRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onStructure() {
        return super.onStructure(this.structureId);
    }
    /**
     * @return {?}
     */
    onVerticalScrollEnabled() {
        return super.onVerticalScrollEnabled(this.structureId);
    }
    /**
     * @return {?}
     */
    onContainerHeight() {
        return super.onContainerHeight(this.structureId);
    }
    /**
     * @return {?}
     */
    onRowHeight() {
        return super.onRowHeight(this.structureId);
    }
}
LocalStructureReadModelWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureReadModelWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: StructureReadModelRepository },
    { type: VerticalFormationRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalStructureReadModelWarehouse.prototype, "onStructure", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalStructureReadModelWarehouse.prototype, "onVerticalScrollEnabled", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalStructureReadModelWarehouse.prototype, "onContainerHeight", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalStructureReadModelWarehouse.prototype, "onRowHeight", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureReadModelWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLnJlYWQtbW9kZWwtd2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL3N0cnVjdHVyZS9sb2NhbC1zdHJ1Y3R1cmUucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUV2RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUl2SCxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsMkJBQTJCOzs7Ozs7SUFFaEYsWUFBb0IsV0FBd0IsRUFDekMsbUJBQWlELEVBQ2pELDJCQUF3RDtRQUMxRCxLQUFLLENBQUMsbUJBQW1CLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUhyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUk1QyxDQUFDOzs7O0lBR0QsV0FBVztRQUNWLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUdELHVCQUF1QjtRQUN0QixPQUFPLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUdELGlCQUFpQjtRQUNoQixPQUFPLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUdELFdBQVc7UUFDVixPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQTNCRCxVQUFVOzs7O1lBTkYsV0FBVztZQUNYLDRCQUE0QjtZQUU1QiwyQkFBMkI7O0FBYW5DO0lBREMsUUFBUTs7OzRDQUNNLFVBQVU7bUVBRXhCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ2tCLFVBQVU7K0VBRXBDO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1ksVUFBVTt5RUFFOUI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDTSxVQUFVO21FQUV4Qjs7Ozs7O0lBeEJXLHVEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3JlYWQvc3RydWN0dXJlL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uL3JlYWQvc3RydWN0dXJlL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTdHJ1Y3R1cmVSZWFkTW9kZWxXYXJlaG91c2UgZXh0ZW5kcyBTdHJ1Y3R1cmVSZWFkTW9kZWxXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZVJlcG9zaXRvcnksIHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TdHJ1Y3R1cmUoKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU3RydWN0dXJlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vblZlcnRpY2FsU2Nyb2xsRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkNvbnRhaW5lckhlaWdodCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNvbnRhaW5lckhlaWdodCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblJvd0hlaWdodCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vblJvd0hlaWdodCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=