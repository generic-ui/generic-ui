/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureSourceWarehouse } from '../../../domain-api/source/structure-source.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../domain-api/read/structure.read-model-repository';
import { StructureSourceOriginRepository } from '../../../domain-api/source/origin/structure.source-origin.repository';
import { StructurePreparedItemsRepository } from '../../../domain-api/source/prepared/structure.prepared-items.repository';
var LocalSourceWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSourceWarehouse, _super);
    function LocalSourceWarehouse(structureId, structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        var _this = _super.call(this, structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalSourceWarehouse.prototype.onEntities = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onEntities.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceWarehouse.prototype.onEntitiesSize = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onEntitiesSize.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceWarehouse.prototype.onSingleEntities = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onSingleEntities.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceWarehouse.prototype.onOriginSize = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onOriginSize.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceWarehouse.prototype.onLoading = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onLoading.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceWarehouse.prototype.onPreparedEntities = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onPreparedEntities.call(this, this.structureId);
    };
    LocalSourceWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSourceWarehouse.ctorParameters = function () { return [
        { type: StructureId },
        { type: StructureReadModelRepository },
        { type: StructurePreparedItemsRepository },
        { type: StructureSourceOriginRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceWarehouse.prototype, "onEntities", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceWarehouse.prototype, "onEntitiesSize", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceWarehouse.prototype, "onSingleEntities", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceWarehouse.prototype, "onOriginSize", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceWarehouse.prototype, "onLoading", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceWarehouse.prototype, "onPreparedEntities", null);
    return LocalSourceWarehouse;
}(StructureSourceWarehouse));
export { LocalSourceWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3NvdXJjZS9sb2NhbC1zb3VyY2Uud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDeEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFFdkgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFHM0g7SUFDMEMsZ0RBQXdCO0lBRWpFLDhCQUFvQixXQUF3QixFQUN6QyxtQkFBaUQsRUFDakQsZ0NBQWtFLEVBQ2xFLCtCQUFnRTtRQUhuRSxZQUlDLGtCQUFNLG1CQUFtQixFQUFFLGdDQUFnQyxFQUFFLCtCQUErQixDQUFDLFNBQzdGO1FBTG1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUs1QyxDQUFDOzs7O0lBR0QseUNBQVU7OztJQUFWO1FBQ0MsT0FBTyxpQkFBTSxVQUFVLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFHRCw2Q0FBYzs7O0lBQWQ7UUFDQyxPQUFPLGlCQUFNLGNBQWMsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUdELCtDQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxpQkFBTSxnQkFBZ0IsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUdELDJDQUFZOzs7SUFBWjtRQUNDLE9BQU8saUJBQU0sWUFBWSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBR0Qsd0NBQVM7OztJQUFUO1FBQ0MsT0FBTyxpQkFBTSxTQUFTLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFHRCxpREFBa0I7OztJQUFsQjtRQUNDLE9BQU8saUJBQU0sa0JBQWtCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQXRDRCxVQUFVOzs7O2dCQVBGLFdBQVc7Z0JBQ1gsNEJBQTRCO2dCQUc1QixnQ0FBZ0M7Z0JBRmhDLCtCQUErQjs7SUFnQnZDO1FBREMsUUFBUTs7O2dEQUNLLFVBQVU7MERBRXZCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1MsVUFBVTs4REFFM0I7SUFHRDtRQURDLFFBQVE7OztnREFDVyxVQUFVO2dFQUU3QjtJQUdEO1FBREMsUUFBUTs7O2dEQUNPLFVBQVU7NERBRXpCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ0ksVUFBVTt5REFFdEI7SUFHRDtRQURDLFFBQVE7OztnREFDYSxVQUFVO2tFQUUvQjtJQUVGLDJCQUFDO0NBQUEsQUF4Q0QsQ0FDMEMsd0JBQXdCLEdBdUNqRTtTQXZDWSxvQkFBb0I7Ozs7OztJQUVwQiwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9zb3VyY2Uvb3JpZ2luL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3NvdXJjZS9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU291cmNlV2FyZWhvdXNlIGV4dGVuZHMgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0c3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnk6IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5LFxuXHRcdFx0XHRzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlUmVwb3NpdG9yeSwgc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnksIHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxBcnJheTxJdGVtRW50aXR5Pj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uRW50aXRpZXNTaXplKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uRW50aXRpZXNTaXplKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2luZ2xlRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxBcnJheTxJdGVtRW50aXR5Pj4ge1xuXHRcdHJldHVybiBzdXBlci5vblNpbmdsZUVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uT3JpZ2luU2l6ZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbk9yaWdpblNpemUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Mb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkxvYWRpbmcodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25QcmVwYXJlZEVudGl0aWVzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vblByZXBhcmVkRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19