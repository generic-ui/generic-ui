/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
import { StructureId } from '../../../domain/structure-id';
import { StructureRepository } from '../../../domain/structure/read/structure.repository';
import { StructureSourceOriginRepository } from '../../../domain/source/read/origin/structure.source-origin.repository';
var LocalSourceReadModelService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSourceReadModelService, _super);
    function LocalSourceReadModelService(structureId, structureRepository, structureSourceOriginRepository) {
        var _this = _super.call(this, structureRepository, structureSourceOriginRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalSourceReadModelService.prototype.onEntities = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onEntities.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceReadModelService.prototype.onOriginSize = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onOriginSize.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceReadModelService.prototype.onSingleEntities = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onSingleEntities.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceReadModelService.prototype.onLoading = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onLoading.call(this, this.structureId);
    };
    LocalSourceReadModelService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSourceReadModelService.ctorParameters = function () { return [
        { type: StructureId },
        { type: StructureRepository },
        { type: StructureSourceOriginRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceReadModelService.prototype, "onEntities", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceReadModelService.prototype, "onOriginSize", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceReadModelService.prototype, "onSingleEntities", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceReadModelService.prototype, "onLoading", null);
    return LocalSourceReadModelService;
}(SourceReadModelService));
export { LocalSourceReadModelService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceReadModelService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zb3VyY2UvbG9jYWwtc291cmNlLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBSXhIO0lBQ2lELHVEQUFzQjtJQUV0RSxxQ0FBb0IsV0FBd0IsRUFDekMsbUJBQXdDLEVBQ3hDLCtCQUFnRTtRQUZuRSxZQUdDLGtCQUFNLG1CQUFtQixFQUFFLCtCQUErQixDQUFDLFNBQzNEO1FBSm1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUk1QyxDQUFDOzs7O0lBR0QsZ0RBQVU7OztJQUFWO1FBQ0MsT0FBTyxpQkFBTSxVQUFVLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFHRCxrREFBWTs7O0lBQVo7UUFDQyxPQUFPLGlCQUFNLFlBQVksWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUdELHNEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxpQkFBTSxnQkFBZ0IsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUdELCtDQUFTOzs7SUFBVDtRQUNDLE9BQU8saUJBQU0sU0FBUyxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkEzQkQsVUFBVTs7OztnQkFORixXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkIsK0JBQStCOztJQWN2QztRQURDLFFBQVE7OztnREFDSyxVQUFVO2lFQUV2QjtJQUdEO1FBREMsUUFBUTs7O2dEQUNPLFVBQVU7bUVBRXpCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1csVUFBVTt1RUFFN0I7SUFHRDtRQURDLFFBQVE7OztnREFDSSxVQUFVO2dFQUV0QjtJQUVGLGtDQUFDO0NBQUEsQUE3QkQsQ0FDaUQsc0JBQXNCLEdBNEJ0RTtTQTVCWSwyQkFBMkI7Ozs7OztJQUUzQixrREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU291cmNlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zb3VyY2Uvc291cmNlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9yZWFkL29yaWdpbi9zdHJ1Y3R1cmUuc291cmNlLW9yaWdpbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlIGV4dGVuZHMgU291cmNlUmVhZE1vZGVsU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlcG9zaXRvcnksXG5cdFx0XHRcdHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnk6IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVSZXBvc2l0b3J5LCBzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkVudGl0aWVzKCk6IE9ic2VydmFibGU8QXJyYXk8SXRlbUVudGl0eT4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25FbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbk9yaWdpblNpemUoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25PcmlnaW5TaXplKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2luZ2xlRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxBcnJheTxJdGVtRW50aXR5Pj4ge1xuXHRcdHJldHVybiBzdXBlci5vblNpbmdsZUVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Mb2FkaW5nKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==