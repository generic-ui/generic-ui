/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { PagingQueryService } from '../../../app/paging/paging-query.service';
import { StructureId } from '../../../domain/structure-id';
import { PagingRepository } from '../../../domain/paging/query/paging.repository';
import { Override } from '../../../../../common/cdk/decorators';
export class LocalPagingQueryService extends PagingQueryService {
    /**
     * @param {?} structureId
     * @param {?} pagingRepository
     */
    constructor(structureId, pagingRepository) {
        super(pagingRepository);
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
    selectOne() {
        return super.select(this.structureId)
            .pipe(take(1));
    }
}
LocalPagingQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalPagingQueryService.ctorParameters = () => [
    { type: StructureId },
    { type: PagingRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalPagingQueryService.prototype, "select", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalPagingQueryService.prototype, "selectOne", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingQueryService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvcGFnaW5nL2xvY2FsLXBhZ2luZy1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTWhFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxrQkFBa0I7Ozs7O0lBRTlELFlBQW9CLFdBQXdCLEVBQ3pDLGdCQUFrQztRQUNwQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUZMLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRzVDLENBQUM7Ozs7SUFHRCxNQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBR0QsU0FBUztRQUNSLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2pDLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNOLENBQUM7OztZQW5CRCxVQUFVOzs7O1lBUEYsV0FBVztZQUNYLGdCQUFnQjs7QUFleEI7SUFEQyxRQUFROzs7NENBQ0MsVUFBVTtxREFFbkI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDSSxVQUFVO3dEQUt0Qjs7Ozs7O0lBaEJXLDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdpbmdRdWVyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hcHAvcGFnaW5nL3BhZ2luZy1xdWVyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBQYWdpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9xdWVyeS9wYWdpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3F1ZXJ5L3BhZ2luZyc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxQYWdpbmdRdWVyeVNlcnZpY2UgZXh0ZW5kcyBQYWdpbmdRdWVyeVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwYWdpbmdSZXBvc2l0b3J5OiBQYWdpbmdSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIocGFnaW5nUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VsZWN0KCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlbGVjdCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RPbmUoKTogT2JzZXJ2YWJsZTxQYWdpbmc+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0KHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHR0YWtlKDEpXG5cdFx0XHRcdFx0KTtcblx0fVxuXG59XG4iXX0=