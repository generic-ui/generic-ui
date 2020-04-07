/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { StructurePagingReadModelWarehouse } from '../../../ui-api/paging/structure-paging.read-model-warehouse';
import { StructureId } from '../../../domain/structure.id';
import { PagingRepository } from '../../../read/paging/paging.repository';
import { Override } from '../../../../../common/cdk/decorators';
var LocalPagingReadModelWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalPagingReadModelWarehouse, _super);
    function LocalPagingReadModelWarehouse(structureId, pagingRepository) {
        var _this = _super.call(this, pagingRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalPagingReadModelWarehouse.prototype.onPaging = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onPaging.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalPagingReadModelWarehouse.prototype.onSinglePaging = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onPaging.call(this, this.structureId)
            .pipe(take(1));
    };
    LocalPagingReadModelWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalPagingReadModelWarehouse.ctorParameters = function () { return [
        { type: StructureId },
        { type: PagingRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalPagingReadModelWarehouse.prototype, "onPaging", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalPagingReadModelWarehouse.prototype, "onSinglePaging", null);
    return LocalPagingReadModelWarehouse;
}(StructurePagingReadModelWarehouse));
export { LocalPagingReadModelWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingReadModelWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLnJlYWQtbW9kZWwtd2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL3BhZ2luZy9sb2NhbC1wYWdpbmcucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ2pILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJaEU7SUFDbUQseURBQWlDO0lBRW5GLHVDQUFvQixXQUF3QixFQUN6QyxnQkFBa0M7UUFEckMsWUFFQyxrQkFBTSxnQkFBZ0IsQ0FBQyxTQUN2QjtRQUhtQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFHNUMsQ0FBQzs7OztJQUdELGdEQUFROzs7SUFBUjtRQUNDLE9BQU8saUJBQU0sUUFBUSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBR0Qsc0RBQWM7OztJQUFkO1FBQ0MsT0FBTyxpQkFBTSxRQUFRLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNuQyxJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDTixDQUFDOztnQkFuQkQsVUFBVTs7OztnQkFORixXQUFXO2dCQUNYLGdCQUFnQjs7SUFjeEI7UUFEQyxRQUFROzs7Z0RBQ0csVUFBVTtpRUFFckI7SUFHRDtRQURDLFFBQVE7OztnREFDUyxVQUFVO3VFQUszQjtJQUVGLG9DQUFDO0NBQUEsQUFyQkQsQ0FDbUQsaUNBQWlDLEdBb0JuRjtTQXBCWSw2QkFBNkI7Ozs7OztJQUU3QixvREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9wYWdpbmcvcGFnaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9wYWdpbmcvcGFnaW5nJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxQYWdpbmdSZWFkTW9kZWxXYXJlaG91c2UgZXh0ZW5kcyBTdHJ1Y3R1cmVQYWdpbmdSZWFkTW9kZWxXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwYWdpbmdSZXBvc2l0b3J5OiBQYWdpbmdSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIocGFnaW5nUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25QYWdpbmcoKTogT2JzZXJ2YWJsZTxQYWdpbmc+IHtcblx0XHRyZXR1cm4gc3VwZXIub25QYWdpbmcodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TaW5nbGVQYWdpbmcoKTogT2JzZXJ2YWJsZTxQYWdpbmc+IHtcblx0XHRyZXR1cm4gc3VwZXIub25QYWdpbmcodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdHRha2UoMSlcblx0XHRcdFx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==