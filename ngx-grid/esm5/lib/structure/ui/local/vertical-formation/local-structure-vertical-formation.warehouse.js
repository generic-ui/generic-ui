/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureVerticalFormationWarehouse } from '../../../ui-api/vertical-formation/structure-vertical-formation.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { VerticalFormationRepository } from '../../../read/structure/vertical-formation/vertical-formation.repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvdmVydGljYWwtZm9ybWF0aW9uL2xvY2FsLXN0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUNoSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFHdkg7SUFDOEQsb0VBQW1DO0lBRWhHLGtEQUE2QixXQUF3QixFQUNsRCwyQkFBd0Q7UUFEM0QsWUFFQyxrQkFBTSwyQkFBMkIsQ0FBQyxTQUNsQztRQUg0QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFHckQsQ0FBQzs7OztJQUdELDBFQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxpQkFBTSx1QkFBdUIsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUdELDhEQUFXOzs7SUFBWDtRQUNDLE9BQU8saUJBQU0sV0FBVyxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBR0Qsb0VBQWlCOzs7SUFBakI7UUFDQyxPQUFPLGlCQUFNLGlCQUFpQixZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBR0QsOERBQVc7OztJQUFYO1FBQ0MsT0FBTyxpQkFBTSxXQUFXLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQTFCRCxVQUFVOzs7O2dCQUpGLFdBQVc7Z0JBQ1gsMkJBQTJCOztJQVluQztRQURDLFFBQVE7OztnREFDa0IsVUFBVTsyRkFFcEM7SUFHRDtRQURDLFFBQVE7OztnREFDTSxVQUFVOytFQUV4QjtJQUdEO1FBREMsUUFBUTs7O2dEQUNZLFVBQVU7cUZBRTlCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ00sVUFBVTsrRUFFeEI7SUFDRiwrQ0FBQztDQUFBLEFBM0JELENBQzhELG1DQUFtQyxHQTBCaEc7U0ExQlksd0NBQXdDOzs7Ozs7SUFFeEMsK0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSBleHRlbmRzIFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0dmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcih2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vblZlcnRpY2FsU2Nyb2xsRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblJvd0hlaWdodCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vblJvd0hlaWdodCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkNvbnRhaW5lckhlaWdodCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNvbnRhaW5lckhlaWdodCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblRvcE1hcmdpbigpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vblRvcE1hcmdpbih0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19