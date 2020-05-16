/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureVerticalFormationWarehouse } from '../../../domain-api/vertical-formation/structure-vertical-formation.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { VerticalFormationRepository } from '../../../domain-api/vertical-formation/vertical-formation.repository';
var LocalStructureVerticalFormationWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStructureVerticalFormationWarehouse, _super);
    function LocalStructureVerticalFormationWarehouse(structureId, verticalFormationRepository) {
        var _this = _super.call(this, verticalFormationRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalStructureVerticalFormationWarehouse.prototype.onVerticalScrollEnabled = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onVerticalScrollEnabled.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureVerticalFormationWarehouse.prototype.onRowHeight = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onRowHeight.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureVerticalFormationWarehouse.prototype.onContainerHeight = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onContainerHeight.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureVerticalFormationWarehouse.prototype.onTopMargin = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onTopMargin.call(this, this.structureId);
    };
    LocalStructureVerticalFormationWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureVerticalFormationWarehouse.ctorParameters = function () { return [
        { type: StructureId },
        { type: VerticalFormationRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalStructureVerticalFormationWarehouse.prototype, "onVerticalScrollEnabled", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalStructureVerticalFormationWarehouse.prototype, "onRowHeight", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalStructureVerticalFormationWarehouse.prototype, "onContainerHeight", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalStructureVerticalFormationWarehouse.prototype, "onTopMargin", null);
    return LocalStructureVerticalFormationWarehouse;
}(StructureVerticalFormationWarehouse));
export { LocalStructureVerticalFormationWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureVerticalFormationWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9sb2NhbC92ZXJ0aWNhbC1mb3JtYXRpb24vbG9jYWwtc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUduSDtJQUM4RCxvRUFBbUM7SUFFaEcsa0RBQTZCLFdBQXdCLEVBQ2xELDJCQUF3RDtRQUQzRCxZQUVDLGtCQUFNLDJCQUEyQixDQUFDLFNBQ2xDO1FBSDRCLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUdyRCxDQUFDOzs7O0lBR0QsMEVBQXVCOzs7SUFBdkI7UUFDQyxPQUFPLGlCQUFNLHVCQUF1QixZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBR0QsOERBQVc7OztJQUFYO1FBQ0MsT0FBTyxpQkFBTSxXQUFXLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFHRCxvRUFBaUI7OztJQUFqQjtRQUNDLE9BQU8saUJBQU0saUJBQWlCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFHRCw4REFBVzs7O0lBQVg7UUFDQyxPQUFPLGlCQUFNLFdBQVcsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Z0JBMUJELFVBQVU7Ozs7Z0JBSkYsV0FBVztnQkFDWCwyQkFBMkI7O0lBWW5DO1FBREMsUUFBUTs7O2dEQUNrQixVQUFVOzJGQUVwQztJQUdEO1FBREMsUUFBUTs7O2dEQUNNLFVBQVU7K0VBRXhCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1ksVUFBVTtxRkFFOUI7SUFHRDtRQURDLFFBQVE7OztnREFDTSxVQUFVOytFQUV4QjtJQUNGLCtDQUFDO0NBQUEsQUEzQkQsQ0FDOEQsbUNBQW1DLEdBMEJoRztTQTFCWSx3Q0FBd0M7Ozs7OztJQUV4QywrREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIGV4dGVuZHMgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uVmVydGljYWxTY3JvbGxFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uUm93SGVpZ2h0KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUm93SGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQ29udGFpbmVySGVpZ2h0KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uQ29udGFpbmVySGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uVG9wTWFyZ2luKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uVG9wTWFyZ2luKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=