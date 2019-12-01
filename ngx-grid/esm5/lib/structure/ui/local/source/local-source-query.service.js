/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { SourceQueryService } from '../../../app/source/source-query.service';
import { StructureId } from '../../../domain/structure-id';
import { StructureRepository } from '../../../domain/structure/query/structure.repository';
import { StructureSourceOriginRepository } from '../../../domain/source/query/origin/structure.source-origin.repository';
var LocalSourceQueryService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSourceQueryService, _super);
    function LocalSourceQueryService(structureId, structureRepository, structureSourceOriginRepository) {
        var _this = _super.call(this, structureRepository, structureSourceOriginRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalSourceQueryService.prototype.select = /**
     * @return {?}
     */
    function () {
        return _super.prototype.select.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceQueryService.prototype.selectOriginSize = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectOriginSize.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceQueryService.prototype.selectOne = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectOne.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceQueryService.prototype.selectLoading = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectLoading.call(this, this.structureId);
    };
    LocalSourceQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSourceQueryService.ctorParameters = function () { return [
        { type: StructureId },
        { type: StructureRepository },
        { type: StructureSourceOriginRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceQueryService.prototype, "select", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceQueryService.prototype, "selectOriginSize", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceQueryService.prototype, "selectOne", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSourceQueryService.prototype, "selectLoading", null);
    return LocalSourceQueryService;
}(SourceQueryService));
export { LocalSourceQueryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceQueryService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvc291cmNlL2xvY2FsLXNvdXJjZS1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDM0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFJekg7SUFDNkMsbURBQWtCO0lBRTlELGlDQUFvQixXQUF3QixFQUN6QyxtQkFBd0MsRUFDeEMsK0JBQWdFO1FBRm5FLFlBR0Msa0JBQU0sbUJBQW1CLEVBQUUsK0JBQStCLENBQUMsU0FDM0Q7UUFKbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBSTVDLENBQUM7Ozs7SUFHRCx3Q0FBTTs7O0lBQU47UUFDQyxPQUFPLGlCQUFNLE1BQU0sWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUdELGtEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxpQkFBTSxnQkFBZ0IsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUdELDJDQUFTOzs7SUFBVDtRQUNDLE9BQU8saUJBQU0sU0FBUyxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBR0QsK0NBQWE7OztJQUFiO1FBQ0MsT0FBTyxpQkFBTSxhQUFhLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQTNCRCxVQUFVOzs7O2dCQU5GLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQiwrQkFBK0I7O0lBY3ZDO1FBREMsUUFBUTs7O2dEQUNDLFVBQVU7eURBRW5CO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1csVUFBVTttRUFFN0I7SUFHRDtRQURDLFFBQVE7OztnREFDSSxVQUFVOzREQUV0QjtJQUdEO1FBREMsUUFBUTs7O2dEQUNRLFVBQVU7Z0VBRTFCO0lBRUYsOEJBQUM7Q0FBQSxBQTdCRCxDQUM2QyxrQkFBa0IsR0E0QjlEO1NBNUJZLHVCQUF1Qjs7Ozs7O0lBRXZCLDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTb3VyY2VRdWVyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hcHAvc291cmNlL3NvdXJjZS1xdWVyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9xdWVyeS9zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9xdWVyeS9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL2VudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU291cmNlUXVlcnlTZXJ2aWNlIGV4dGVuZHMgU291cmNlUXVlcnlTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVwb3NpdG9yeSxcblx0XHRcdFx0c3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeTogU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZVJlcG9zaXRvcnksIHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlbGVjdCgpOiBPYnNlcnZhYmxlPEFycmF5PEVudGl0eT4+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0KHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlbGVjdE9yaWdpblNpemUoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0T3JpZ2luU2l6ZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RPbmUoKTogT2JzZXJ2YWJsZTxBcnJheTxFbnRpdHk+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlbGVjdE9uZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RMb2FkaW5nKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==