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
export class LocalPagingReadModelWarehouse extends StructurePagingReadModelWarehouse {
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
    onPaging() {
        return super.onPaging(this.structureId);
    }
    /**
     * @return {?}
     */
    onSinglePaging() {
        return super.onPaging(this.structureId)
            .pipe(take(1));
    }
}
LocalPagingReadModelWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalPagingReadModelWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: PagingRepository }
];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingReadModelWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLnJlYWQtbW9kZWwtd2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL3BhZ2luZy9sb2NhbC1wYWdpbmcucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ2pILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFLaEUsTUFBTSxPQUFPLDZCQUE4QixTQUFRLGlDQUFpQzs7Ozs7SUFFbkYsWUFBb0IsV0FBd0IsRUFDekMsZ0JBQWtDO1FBQ3BDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRkwsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFHNUMsQ0FBQzs7OztJQUdELFFBQVE7UUFDUCxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFHRCxjQUFjO1FBQ2IsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDbkMsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ04sQ0FBQzs7O1lBbkJELFVBQVU7Ozs7WUFORixXQUFXO1lBQ1gsZ0JBQWdCOztBQWN4QjtJQURDLFFBQVE7Ozs0Q0FDRyxVQUFVOzZEQUVyQjtBQUdEO0lBREMsUUFBUTs7OzRDQUNTLFVBQVU7bUVBSzNCOzs7Ozs7SUFoQlcsb0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ1JlYWRNb2RlbFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy5yZWFkLW1vZGVsLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3JlYWQvcGFnaW5nL3BhZ2luZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL3JlYWQvcGFnaW5nL3BhZ2luZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsUGFnaW5nUmVhZE1vZGVsV2FyZWhvdXNlIGV4dGVuZHMgU3RydWN0dXJlUGFnaW5nUmVhZE1vZGVsV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cGFnaW5nUmVwb3NpdG9yeTogUGFnaW5nUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHBhZ2luZ1JlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uUGFnaW5nKCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2luZ2xlUGFnaW5nKCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHR0YWtlKDEpXG5cdFx0XHRcdFx0KTtcblx0fVxuXG59XG4iXX0=