/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { StructurePagingWarehouse } from '../../../ui-api/paging/structure-paging.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { PagingRepository } from '../../../read/paging/paging.repository';
import { Override } from '../../../../../common/cdk/decorators';
var LocalPagingWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalPagingWarehouse, _super);
    function LocalPagingWarehouse(structureId, pagingRepository) {
        var _this = _super.call(this, pagingRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalPagingWarehouse.prototype.onPaging = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onPaging.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalPagingWarehouse.prototype.onSinglePaging = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onPaging.call(this, this.structureId)
            .pipe(take(1));
    };
    LocalPagingWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalPagingWarehouse.ctorParameters = function () { return [
        { type: StructureId },
        { type: PagingRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalPagingWarehouse.prototype, "onPaging", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalPagingWarehouse.prototype, "onSinglePaging", null);
    return LocalPagingWarehouse;
}(StructurePagingWarehouse));
export { LocalPagingWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9wYWdpbmcvbG9jYWwtcGFnaW5nLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUloRTtJQUMwQyxnREFBd0I7SUFFakUsOEJBQW9CLFdBQXdCLEVBQ3pDLGdCQUFrQztRQURyQyxZQUVDLGtCQUFNLGdCQUFnQixDQUFDLFNBQ3ZCO1FBSG1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUc1QyxDQUFDOzs7O0lBR0QsdUNBQVE7OztJQUFSO1FBQ0MsT0FBTyxpQkFBTSxRQUFRLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFHRCw2Q0FBYzs7O0lBQWQ7UUFDQyxPQUFPLGlCQUFNLFFBQVEsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ25DLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNOLENBQUM7O2dCQW5CRCxVQUFVOzs7O2dCQU5GLFdBQVc7Z0JBQ1gsZ0JBQWdCOztJQWN4QjtRQURDLFFBQVE7OztnREFDRyxVQUFVO3dEQUVyQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNTLFVBQVU7OERBSzNCO0lBRUYsMkJBQUM7Q0FBQSxBQXJCRCxDQUMwQyx3QkFBd0IsR0FvQmpFO1NBcEJZLG9CQUFvQjs7Ozs7O0lBRXBCLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9wYWdpbmcvcGFnaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9wYWdpbmcvcGFnaW5nJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxQYWdpbmdXYXJlaG91c2UgZXh0ZW5kcyBTdHJ1Y3R1cmVQYWdpbmdXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwYWdpbmdSZXBvc2l0b3J5OiBQYWdpbmdSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIocGFnaW5nUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25QYWdpbmcoKTogT2JzZXJ2YWJsZTxQYWdpbmc+IHtcblx0XHRyZXR1cm4gc3VwZXIub25QYWdpbmcodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TaW5nbGVQYWdpbmcoKTogT2JzZXJ2YWJsZTxQYWdpbmc+IHtcblx0XHRyZXR1cm4gc3VwZXIub25QYWdpbmcodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdHRha2UoMSlcblx0XHRcdFx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==