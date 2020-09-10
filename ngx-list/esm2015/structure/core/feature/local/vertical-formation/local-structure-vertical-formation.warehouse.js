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
export class LocalStructureVerticalFormationWarehouse extends StructureVerticalFormationWarehouse {
    /**
     * @param {?} structureId
     * @param {?} verticalFormationRepository
     */
    constructor(structureId, verticalFormationRepository) {
        super(verticalFormationRepository);
        this.structureId = structureId;
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
    onRowHeight() {
        return super.onRowHeight(this.structureId);
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
    onTopMargin() {
        return super.onTopMargin(this.structureId);
    }
}
LocalStructureVerticalFormationWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureVerticalFormationWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: VerticalFormationRepository }
];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureVerticalFormationWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvbG9jYWwvdmVydGljYWwtZm9ybWF0aW9uL2xvY2FsLXN0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUNwSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFJbkgsTUFBTSxPQUFPLHdDQUF5QyxTQUFRLG1DQUFtQzs7Ozs7SUFFaEcsWUFBNkIsV0FBd0IsRUFDbEQsMkJBQXdEO1FBQzFELEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRlAsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFHckQsQ0FBQzs7OztJQUdELHVCQUF1QjtRQUN0QixPQUFPLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUdELFdBQVc7UUFDVixPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFHRCxpQkFBaUI7UUFDaEIsT0FBTyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFHRCxXQUFXO1FBQ1YsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUExQkQsVUFBVTs7OztZQUpGLFdBQVc7WUFDWCwyQkFBMkI7O0FBWW5DO0lBREMsUUFBUTs7OzRDQUNrQixVQUFVO3VGQUVwQztBQUdEO0lBREMsUUFBUTs7OzRDQUNNLFVBQVU7MkVBRXhCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1ksVUFBVTtpRkFFOUI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDTSxVQUFVOzJFQUV4Qjs7Ozs7O0lBdkJXLCtEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvdmVydGljYWwtZm9ybWF0aW9uL3N0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgZXh0ZW5kcyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIodmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Sb3dIZWlnaHQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Sb3dIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Db250YWluZXJIZWlnaHQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Db250YWluZXJIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Ub3BNYXJnaW4oKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Ub3BNYXJnaW4odGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==