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
var LocalStructureReadModelWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStructureReadModelWarehouse, _super);
    function LocalStructureReadModelWarehouse(structureId, structureRepository, verticalFormationRepository) {
        var _this = _super.call(this, structureRepository, verticalFormationRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalStructureReadModelWarehouse.prototype.onStructure = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onStructure.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureReadModelWarehouse.prototype.onVerticalScrollEnabled = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onVerticalScrollEnabled.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureReadModelWarehouse.prototype.onContainerHeight = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onContainerHeight.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureReadModelWarehouse.prototype.onRowHeight = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onRowHeight.call(this, this.structureId);
    };
    LocalStructureReadModelWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureReadModelWarehouse.ctorParameters = function () { return [
        { type: StructureId },
        { type: StructureReadModelRepository },
        { type: VerticalFormationRepository }
    ]; };
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
    return LocalStructureReadModelWarehouse;
}(StructureReadModelWarehouse));
export { LocalStructureReadModelWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureReadModelWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLnJlYWQtbW9kZWwtd2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL3N0cnVjdHVyZS9sb2NhbC1zdHJ1Y3R1cmUucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUV2RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUd2SDtJQUNzRCw0REFBMkI7SUFFaEYsMENBQW9CLFdBQXdCLEVBQ3pDLG1CQUFpRCxFQUNqRCwyQkFBd0Q7UUFGM0QsWUFHQyxrQkFBTSxtQkFBbUIsRUFBRSwyQkFBMkIsQ0FBQyxTQUN2RDtRQUptQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFJNUMsQ0FBQzs7OztJQUdELHNEQUFXOzs7SUFBWDtRQUNDLE9BQU8saUJBQU0sV0FBVyxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBR0Qsa0VBQXVCOzs7SUFBdkI7UUFDQyxPQUFPLGlCQUFNLHVCQUF1QixZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBR0QsNERBQWlCOzs7SUFBakI7UUFDQyxPQUFPLGlCQUFNLGlCQUFpQixZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBR0Qsc0RBQVc7OztJQUFYO1FBQ0MsT0FBTyxpQkFBTSxXQUFXLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQTNCRCxVQUFVOzs7O2dCQU5GLFdBQVc7Z0JBQ1gsNEJBQTRCO2dCQUU1QiwyQkFBMkI7O0lBYW5DO1FBREMsUUFBUTs7O2dEQUNNLFVBQVU7dUVBRXhCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ2tCLFVBQVU7bUZBRXBDO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1ksVUFBVTs2RUFFOUI7SUFHRDtRQURDLFFBQVE7OztnREFDTSxVQUFVO3VFQUV4QjtJQUVGLHVDQUFDO0NBQUEsQUE3QkQsQ0FDc0QsMkJBQTJCLEdBNEJoRjtTQTVCWSxnQ0FBZ0M7Ozs7OztJQUVoQyx1REFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3JlYWQvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RydWN0dXJlUmVhZE1vZGVsV2FyZWhvdXNlIGV4dGVuZHMgU3RydWN0dXJlUmVhZE1vZGVsV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0dmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVSZXBvc2l0b3J5LCB2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU3RydWN0dXJlKCk6IE9ic2VydmFibGU8U3RydWN0dXJlUmVhZE1vZGVsUm9vdD4ge1xuXHRcdHJldHVybiBzdXBlci5vblN0cnVjdHVyZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Db250YWluZXJIZWlnaHQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Db250YWluZXJIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Sb3dIZWlnaHQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Sb3dIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19