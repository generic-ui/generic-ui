/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureSourceWarehouse } from '../../../ui-api/source/structure-source.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../read/structure/structure.read-model-repository';
import { StructureSourceOriginRepository } from '../../../read/source/origin/structure.source-origin.repository';
import { StructurePreparedItemsRepository } from '../../../read/source/prepared/structure.prepared-items.repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zb3VyY2UvbG9jYWwtc291cmNlLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBRWpILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBR3JIO0lBQzBDLGdEQUF3QjtJQUVqRSw4QkFBb0IsV0FBd0IsRUFDekMsbUJBQWlELEVBQ2pELGdDQUFrRSxFQUNsRSwrQkFBZ0U7UUFIbkUsWUFJQyxrQkFBTSxtQkFBbUIsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsQ0FBQyxTQUM3RjtRQUxtQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFLNUMsQ0FBQzs7OztJQUdELHlDQUFVOzs7SUFBVjtRQUNDLE9BQU8saUJBQU0sVUFBVSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBR0QsNkNBQWM7OztJQUFkO1FBQ0MsT0FBTyxpQkFBTSxjQUFjLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFHRCwrQ0FBZ0I7OztJQUFoQjtRQUNDLE9BQU8saUJBQU0sZ0JBQWdCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFHRCwyQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLGlCQUFNLFlBQVksWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUdELHdDQUFTOzs7SUFBVDtRQUNDLE9BQU8saUJBQU0sU0FBUyxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBR0QsaURBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLGlCQUFNLGtCQUFrQixZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkF0Q0QsVUFBVTs7OztnQkFQRixXQUFXO2dCQUNYLDRCQUE0QjtnQkFHNUIsZ0NBQWdDO2dCQUZoQywrQkFBK0I7O0lBZ0J2QztRQURDLFFBQVE7OztnREFDSyxVQUFVOzBEQUV2QjtJQUdEO1FBREMsUUFBUTs7O2dEQUNTLFVBQVU7OERBRTNCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1csVUFBVTtnRUFFN0I7SUFHRDtRQURDLFFBQVE7OztnREFDTyxVQUFVOzREQUV6QjtJQUdEO1FBREMsUUFBUTs7O2dEQUNJLFVBQVU7eURBRXRCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ2EsVUFBVTtrRUFFL0I7SUFFRiwyQkFBQztDQUFBLEFBeENELENBQzBDLHdCQUF3QixHQXVDakU7U0F2Q1ksb0JBQW9COzs7Ozs7SUFFcEIsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3NvdXJjZS9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3JlYWQvc291cmNlL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTb3VyY2VXYXJlaG91c2UgZXh0ZW5kcyBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRcdFx0XHRzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeTogU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnksXG5cdFx0XHRcdHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnk6IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVSZXBvc2l0b3J5LCBzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSwgc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25FbnRpdGllcygpOiBPYnNlcnZhYmxlPEFycmF5PEl0ZW1FbnRpdHk+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25FbnRpdGllc1NpemUoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25FbnRpdGllc1NpemUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TaW5nbGVFbnRpdGllcygpOiBPYnNlcnZhYmxlPEFycmF5PEl0ZW1FbnRpdHk+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU2luZ2xlRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25PcmlnaW5TaXplKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uT3JpZ2luU2l6ZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkxvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uTG9hZGluZyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblByZXBhcmVkRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUHJlcGFyZWRFbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=