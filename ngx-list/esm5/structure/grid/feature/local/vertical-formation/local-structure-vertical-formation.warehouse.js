/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureVerticalFormationWarehouse } from '../../../../vertical-formation/core/api/structure-vertical-formation.warehouse';
import { StructureId } from '../../../../core/api/structure.id';
import { VerticalFormationRepository } from '../../../../vertical-formation/core/api/vertical-formation.repository';
import { VerticalFormationScrollBarPositionRepository } from '../../../../vertical-formation/core/domain-read/scroll-bar/vertical-formation.scroll-bar-position.repository';
var LocalStructureVerticalFormationWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStructureVerticalFormationWarehouse, _super);
    function LocalStructureVerticalFormationWarehouse(structureId, verticalFormationRepository, positionRepository) {
        var _this = _super.call(this, verticalFormationRepository, positionRepository) || this;
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
    /**
     * @return {?}
     */
    LocalStructureVerticalFormationWarehouse.prototype.onScrollBarPosition = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onScrollBarPosition.call(this, this.structureId);
    };
    LocalStructureVerticalFormationWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureVerticalFormationWarehouse.ctorParameters = function () { return [
        { type: StructureId },
        { type: VerticalFormationRepository },
        { type: VerticalFormationScrollBarPositionRepository }
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
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalStructureVerticalFormationWarehouse.prototype, "onScrollBarPosition", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvbG9jYWwvdmVydGljYWwtZm9ybWF0aW9uL2xvY2FsLXN0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUNySSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDcEgsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sOEdBQThHLENBQUM7QUFHNUs7SUFDOEQsb0VBQW1DO0lBRWhHLGtEQUE2QixXQUF3QixFQUNsRCwyQkFBd0QsRUFDeEQsa0JBQWdFO1FBRm5FLFlBR0Msa0JBQU0sMkJBQTJCLEVBQUUsa0JBQWtCLENBQUMsU0FDdEQ7UUFKNEIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBSXJELENBQUM7Ozs7SUFHRCwwRUFBdUI7OztJQUF2QjtRQUNDLE9BQU8saUJBQU0sdUJBQXVCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFHRCw4REFBVzs7O0lBQVg7UUFDQyxPQUFPLGlCQUFNLFdBQVcsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUdELG9FQUFpQjs7O0lBQWpCO1FBQ0MsT0FBTyxpQkFBTSxpQkFBaUIsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUdELDhEQUFXOzs7SUFBWDtRQUNDLE9BQU8saUJBQU0sV0FBVyxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBR0Qsc0VBQW1COzs7SUFBbkI7UUFDQyxPQUFPLGlCQUFNLG1CQUFtQixZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDOztnQkFoQ0QsVUFBVTs7OztnQkFMRixXQUFXO2dCQUNYLDJCQUEyQjtnQkFDM0IsNENBQTRDOztJQWFwRDtRQURDLFFBQVE7OztnREFDa0IsVUFBVTsyRkFFcEM7SUFHRDtRQURDLFFBQVE7OztnREFDTSxVQUFVOytFQUV4QjtJQUdEO1FBREMsUUFBUTs7O2dEQUNZLFVBQVU7cUZBRTlCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ00sVUFBVTsrRUFFeEI7SUFHRDtRQURDLFFBQVE7OztnREFDYyxVQUFVO3VGQUVoQztJQUNGLCtDQUFDO0NBQUEsQUFqQ0QsQ0FDOEQsbUNBQW1DLEdBZ0NoRztTQWhDWSx3Q0FBd0M7Ozs7OztJQUV4QywrREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uU2Nyb2xsQmFyUG9zaXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluLXJlYWQvc2Nyb2xsLWJhci92ZXJ0aWNhbC1mb3JtYXRpb24uc2Nyb2xsLWJhci1wb3NpdGlvbi5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSBleHRlbmRzIFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0dmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnksXG5cdFx0XHRcdHBvc2l0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25TY3JvbGxCYXJQb3NpdGlvblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcih2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnksIHBvc2l0aW9uUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uVmVydGljYWxTY3JvbGxFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uUm93SGVpZ2h0KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUm93SGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQ29udGFpbmVySGVpZ2h0KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uQ29udGFpbmVySGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uVG9wTWFyZ2luKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uVG9wTWFyZ2luKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2Nyb2xsQmFyUG9zaXRpb24oKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25TY3JvbGxCYXJQb3NpdGlvbih0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19