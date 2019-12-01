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
export class LocalSourceQueryService extends SourceQueryService {
    /**
     * @param {?} structureId
     * @param {?} structureRepository
     * @param {?} structureSourceOriginRepository
     */
    constructor(structureId, structureRepository, structureSourceOriginRepository) {
        super(structureRepository, structureSourceOriginRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    select() {
        return super.select(this.structureId);
    }
    /**
     * @return {?}
     */
    selectOriginSize() {
        return super.selectOriginSize(this.structureId);
    }
    /**
     * @return {?}
     */
    selectOne() {
        return super.selectOne(this.structureId);
    }
    /**
     * @return {?}
     */
    selectLoading() {
        return super.selectLoading(this.structureId);
    }
}
LocalSourceQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSourceQueryService.ctorParameters = () => [
    { type: StructureId },
    { type: StructureRepository },
    { type: StructureSourceOriginRepository }
];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceQueryService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvc291cmNlL2xvY2FsLXNvdXJjZS1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDM0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFLekgsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGtCQUFrQjs7Ozs7O0lBRTlELFlBQW9CLFdBQXdCLEVBQ3pDLG1CQUF3QyxFQUN4QywrQkFBZ0U7UUFDbEUsS0FBSyxDQUFDLG1CQUFtQixFQUFFLCtCQUErQixDQUFDLENBQUM7UUFIekMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFJNUMsQ0FBQzs7OztJQUdELE1BQU07UUFDTCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFHRCxnQkFBZ0I7UUFDZixPQUFPLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUdELFNBQVM7UUFDUixPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFHRCxhQUFhO1FBQ1osT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7WUEzQkQsVUFBVTs7OztZQU5GLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsK0JBQStCOztBQWN2QztJQURDLFFBQVE7Ozs0Q0FDQyxVQUFVO3FEQUVuQjtBQUdEO0lBREMsUUFBUTs7OzRDQUNXLFVBQVU7K0RBRTdCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ0ksVUFBVTt3REFFdEI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDUSxVQUFVOzREQUUxQjs7Ozs7O0lBeEJXLDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTb3VyY2VRdWVyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hcHAvc291cmNlL3NvdXJjZS1xdWVyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9xdWVyeS9zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9xdWVyeS9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL2VudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU291cmNlUXVlcnlTZXJ2aWNlIGV4dGVuZHMgU291cmNlUXVlcnlTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVwb3NpdG9yeSxcblx0XHRcdFx0c3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeTogU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZVJlcG9zaXRvcnksIHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlbGVjdCgpOiBPYnNlcnZhYmxlPEFycmF5PEVudGl0eT4+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0KHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlbGVjdE9yaWdpblNpemUoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0T3JpZ2luU2l6ZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RPbmUoKTogT2JzZXJ2YWJsZTxBcnJheTxFbnRpdHk+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlbGVjdE9uZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RMb2FkaW5nKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==