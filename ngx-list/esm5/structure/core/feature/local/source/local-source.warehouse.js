/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { SourceWarehouse } from '../../../../source/domain-api/source.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../domain-api/read/structure.read-model-repository';
import { StructureSourceOriginRepository } from '../../../../source/domain-api/origin/structure.source-origin.repository';
import { StructurePreparedItemsRepository } from '../../../../source/domain-api/prepared/structure.prepared-items.repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9sb2NhbC9zb3VyY2UvbG9jYWwtc291cmNlLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUUxSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUs5SDtJQUMwQyxnREFBZTtJQUV4RCw4QkFBb0IsV0FBd0IsRUFDekMsbUJBQWlELEVBQ2pELGdDQUFrRSxFQUNsRSwrQkFBZ0U7UUFIbkUsWUFJQyxrQkFBTSxtQkFBbUIsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsQ0FBQyxTQUM3RjtRQUxtQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFLNUMsQ0FBQzs7OztJQUdELDBDQUFXOzs7SUFBWDtRQUNDLE9BQU8saUJBQU0sV0FBVyxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBR0QseUNBQVU7OztJQUFWO1FBQ0MsT0FBTyxpQkFBTSxVQUFVLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFHRCw2Q0FBYzs7O0lBQWQ7UUFDQyxPQUFPLGlCQUFNLGNBQWMsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUdELCtDQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxpQkFBTSxnQkFBZ0IsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUdELDJDQUFZOzs7SUFBWjtRQUNDLE9BQU8saUJBQU0sWUFBWSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBR0Qsd0NBQVM7OztJQUFUO1FBQ0MsT0FBTyxpQkFBTSxTQUFTLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFHRCxpREFBa0I7OztJQUFsQjtRQUNDLE9BQU8saUJBQU0sa0JBQWtCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQTNDRCxVQUFVOzs7O2dCQVRGLFdBQVc7Z0JBQ1gsNEJBQTRCO2dCQUc1QixnQ0FBZ0M7Z0JBRmhDLCtCQUErQjs7SUFrQnZDO1FBREMsUUFBUTs7O2dEQUNNLEtBQUs7MkRBRW5CO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ0ssVUFBVTswREFFdkI7SUFHRDtRQURDLFFBQVE7OztnREFDUyxVQUFVOzhEQUUzQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNXLFVBQVU7Z0VBRTdCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ08sVUFBVTs0REFFekI7SUFHRDtRQURDLFFBQVE7OztnREFDSSxVQUFVO3lEQUV0QjtJQUdEO1FBREMsUUFBUTs7O2dEQUNhLFVBQVU7a0VBRS9CO0lBRUYsMkJBQUM7Q0FBQSxBQTdDRCxDQUMwQyxlQUFlLEdBNEN4RDtTQTVDWSxvQkFBb0I7Ozs7OztJQUVwQiwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTb3VyY2VXYXJlaG91c2UgZXh0ZW5kcyBTb3VyY2VXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRcdFx0XHRzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeTogU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnksXG5cdFx0XHRcdHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnk6IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVSZXBvc2l0b3J5LCBzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSwgc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Z2V0RW50aXRpZXMoKTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiBzdXBlci5nZXRFbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkVudGl0aWVzKCk6IE9ic2VydmFibGU8QXJyYXk8SXRlbUVudGl0eT4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25FbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkVudGl0aWVzU2l6ZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkVudGl0aWVzU2l6ZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNpbmdsZUVudGl0aWVzKCk6IE9ic2VydmFibGU8QXJyYXk8SXRlbUVudGl0eT4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25TaW5nbGVFbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbk9yaWdpblNpemUoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25PcmlnaW5TaXplKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Mb2FkaW5nKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uUHJlcGFyZWRFbnRpdGllcygpOiBPYnNlcnZhYmxlPEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUHJlcGFyZWRFbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=