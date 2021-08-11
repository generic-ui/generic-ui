/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { SourceWarehouse } from '../../../../source/core/api/source.warehouse';
import { StructureId } from '../../../../core/api/structure.id';
import { StructureReadModelRepository } from '../../../core/api/read/structure.read-model-repository';
import { StructureSourceOriginRepository } from '../../../../source/core/api/origin/structure.source-origin.repository';
import { StructurePreparedItemsRepository } from '../../../../source/core/api/prepared/structure.prepared-items.repository';
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
    LocalSourceWarehouse.prototype.getEntities = /**
     * @return {?}
     */
    function () {
        return _super.prototype.getEntities.call(this, this.structureId);
    };
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
        tslib_1.__metadata("design:returntype", Array)
    ], LocalSourceWarehouse.prototype, "getEntities", null);
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
}(SourceWarehouse));
export { LocalSourceWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9sb2NhbC9zb3VyY2UvbG9jYWwtc291cmNlLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUV4SCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUk1SDtJQUMwQyxnREFBZTtJQUV4RCw4QkFBb0IsV0FBd0IsRUFDekMsbUJBQWlELEVBQ2pELGdDQUFrRSxFQUNsRSwrQkFBZ0U7UUFIbkUsWUFJQyxrQkFBTSxtQkFBbUIsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsQ0FBQyxTQUM3RjtRQUxtQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFLNUMsQ0FBQzs7OztJQUdELDBDQUFXOzs7SUFBWDtRQUNDLE9BQU8saUJBQU0sV0FBVyxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBR0QseUNBQVU7OztJQUFWO1FBQ0MsT0FBTyxpQkFBTSxVQUFVLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFHRCw2Q0FBYzs7O0lBQWQ7UUFDQyxPQUFPLGlCQUFNLGNBQWMsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUdELCtDQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxpQkFBTSxnQkFBZ0IsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUdELDJDQUFZOzs7SUFBWjtRQUNDLE9BQU8saUJBQU0sWUFBWSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBR0Qsd0NBQVM7OztJQUFUO1FBQ0MsT0FBTyxpQkFBTSxTQUFTLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFHRCxpREFBa0I7OztJQUFsQjtRQUNDLE9BQU8saUJBQU0sa0JBQWtCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQTNDRCxVQUFVOzs7O2dCQVJGLFdBQVc7Z0JBQ1gsNEJBQTRCO2dCQUc1QixnQ0FBZ0M7Z0JBRmhDLCtCQUErQjs7SUFpQnZDO1FBREMsUUFBUTs7O2dEQUNNLEtBQUs7MkRBRW5CO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ0ssVUFBVTswREFFdkI7SUFHRDtRQURDLFFBQVE7OztnREFDUyxVQUFVOzhEQUUzQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNXLFVBQVU7Z0VBRTdCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ08sVUFBVTs0REFFekI7SUFHRDtRQURDLFFBQVE7OztnREFDSSxVQUFVO3lEQUV0QjtJQUdEO1FBREMsUUFBUTs7O2dEQUNhLFVBQVU7a0VBRS9CO0lBRUYsMkJBQUM7Q0FBQSxBQTdDRCxDQUMwQyxlQUFlLEdBNEN4RDtTQTVDWSxvQkFBb0I7Ozs7OztJQUVwQiwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL29yaWdpbi9zdHJ1Y3R1cmUuc291cmNlLW9yaWdpbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU291cmNlV2FyZWhvdXNlIGV4dGVuZHMgU291cmNlV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0c3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnk6IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5LFxuXHRcdFx0XHRzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlUmVwb3NpdG9yeSwgc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnksIHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gc3VwZXIuZ2V0RW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25FbnRpdGllcygpOiBPYnNlcnZhYmxlPEFycmF5PEl0ZW1FbnRpdHk+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25FbnRpdGllc1NpemUoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25FbnRpdGllc1NpemUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TaW5nbGVFbnRpdGllcygpOiBPYnNlcnZhYmxlPEFycmF5PEl0ZW1FbnRpdHk+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU2luZ2xlRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25PcmlnaW5TaXplKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uT3JpZ2luU2l6ZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkxvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uTG9hZGluZyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblByZXBhcmVkRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxBcnJheTxPcmlnaW5JdGVtRW50aXR5Pj4ge1xuXHRcdHJldHVybiBzdXBlci5vblByZXBhcmVkRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19