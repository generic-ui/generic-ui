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
export class LocalStructureVerticalFormationWarehouse extends StructureVerticalFormationWarehouse {
    /**
     * @param {?} structureId
     * @param {?} verticalFormationRepository
     * @param {?} positionRepository
     */
    constructor(structureId, verticalFormationRepository, positionRepository) {
        super(verticalFormationRepository, positionRepository);
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
    /**
     * @return {?}
     */
    onScrollBarPosition() {
        return super.onScrollBarPosition(this.structureId);
    }
}
LocalStructureVerticalFormationWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureVerticalFormationWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: VerticalFormationRepository },
    { type: VerticalFormationScrollBarPositionRepository }
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
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalStructureVerticalFormationWarehouse.prototype, "onScrollBarPosition", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureVerticalFormationWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvbG9jYWwvdmVydGljYWwtZm9ybWF0aW9uL2xvY2FsLXN0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUNySSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDcEgsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sOEdBQThHLENBQUM7QUFJNUssTUFBTSxPQUFPLHdDQUF5QyxTQUFRLG1DQUFtQzs7Ozs7O0lBRWhHLFlBQTZCLFdBQXdCLEVBQ2xELDJCQUF3RCxFQUN4RCxrQkFBZ0U7UUFDbEUsS0FBSyxDQUFDLDJCQUEyQixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFIM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFJckQsQ0FBQzs7OztJQUdELHVCQUF1QjtRQUN0QixPQUFPLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUdELFdBQVc7UUFDVixPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFHRCxpQkFBaUI7UUFDaEIsT0FBTyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFHRCxXQUFXO1FBQ1YsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBR0QsbUJBQW1CO1FBQ2xCLE9BQU8sS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7WUFoQ0QsVUFBVTs7OztZQUxGLFdBQVc7WUFDWCwyQkFBMkI7WUFDM0IsNENBQTRDOztBQWFwRDtJQURDLFFBQVE7Ozs0Q0FDa0IsVUFBVTt1RkFFcEM7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDTSxVQUFVOzJFQUV4QjtBQUdEO0lBREMsUUFBUTs7OzRDQUNZLFVBQVU7aUZBRTlCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ00sVUFBVTsyRUFFeEI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDYyxVQUFVO21GQUVoQzs7Ozs7O0lBN0JXLCtEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2FwaS9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25TY3JvbGxCYXJQb3NpdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4tcmVhZC9zY3JvbGwtYmFyL3ZlcnRpY2FsLWZvcm1hdGlvbi5zY3JvbGwtYmFyLXBvc2l0aW9uLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIGV4dGVuZHMgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSxcblx0XHRcdFx0cG9zaXRpb25SZXBvc2l0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvblNjcm9sbEJhclBvc2l0aW9uUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSwgcG9zaXRpb25SZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Sb3dIZWlnaHQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Sb3dIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Db250YWluZXJIZWlnaHQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Db250YWluZXJIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Ub3BNYXJnaW4oKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Ub3BNYXJnaW4odGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TY3JvbGxCYXJQb3NpdGlvbigpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vblNjcm9sbEJhclBvc2l0aW9uKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=