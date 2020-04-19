/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureVerticalFormationWarehouse } from '../../../feature-api/vertical-formation/structure-vertical-formation.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { VerticalFormationRepository } from '../../../feature-api/vertical-formation/vertical-formation.repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9sb2NhbC92ZXJ0aWNhbC1mb3JtYXRpb24vbG9jYWwtc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3JJLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUdwSDtJQUM4RCxvRUFBbUM7SUFFaEcsa0RBQTZCLFdBQXdCLEVBQ2xELDJCQUF3RDtRQUQzRCxZQUVDLGtCQUFNLDJCQUEyQixDQUFDLFNBQ2xDO1FBSDRCLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUdyRCxDQUFDOzs7O0lBR0QsMEVBQXVCOzs7SUFBdkI7UUFDQyxPQUFPLGlCQUFNLHVCQUF1QixZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBR0QsOERBQVc7OztJQUFYO1FBQ0MsT0FBTyxpQkFBTSxXQUFXLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFHRCxvRUFBaUI7OztJQUFqQjtRQUNDLE9BQU8saUJBQU0saUJBQWlCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFHRCw4REFBVzs7O0lBQVg7UUFDQyxPQUFPLGlCQUFNLFdBQVcsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Z0JBMUJELFVBQVU7Ozs7Z0JBSkYsV0FBVztnQkFDWCwyQkFBMkI7O0lBWW5DO1FBREMsUUFBUTs7O2dEQUNrQixVQUFVOzJGQUVwQztJQUdEO1FBREMsUUFBUTs7O2dEQUNNLFVBQVU7K0VBRXhCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1ksVUFBVTtxRkFFOUI7SUFHRDtRQURDLFFBQVE7OztnREFDTSxVQUFVOytFQUV4QjtJQUNGLCtDQUFDO0NBQUEsQUEzQkQsQ0FDOEQsbUNBQW1DLEdBMEJoRztTQTFCWSx3Q0FBd0M7Ozs7OztJQUV4QywrREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS92ZXJ0aWNhbC1mb3JtYXRpb24vc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgZXh0ZW5kcyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIodmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Sb3dIZWlnaHQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Sb3dIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Db250YWluZXJIZWlnaHQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Db250YWluZXJIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Ub3BNYXJnaW4oKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Ub3BNYXJnaW4odGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==