/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { StructurePagingWarehouse } from '../../../feature-api/paging/structure-paging.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { PagingRepository } from '../../../feature-api/paging/read/paging.repository';
import { Override } from '../../../../../common/cdk/decorators';
export class LocalPagingWarehouse extends StructurePagingWarehouse {
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
LocalPagingWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalPagingWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: PagingRepository }
];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3BhZ2luZy9sb2NhbC1wYWdpbmcud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBS2hFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx3QkFBd0I7Ozs7O0lBRWpFLFlBQW9CLFdBQXdCLEVBQ3pDLGdCQUFrQztRQUNwQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUZMLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRzVDLENBQUM7Ozs7SUFHRCxRQUFRO1FBQ1AsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBR0QsY0FBYztRQUNiLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ25DLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNOLENBQUM7OztZQW5CRCxVQUFVOzs7O1lBTkYsV0FBVztZQUNYLGdCQUFnQjs7QUFjeEI7SUFEQyxRQUFROzs7NENBQ0csVUFBVTtvREFFckI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDUyxVQUFVOzBEQUszQjs7Ozs7O0lBaEJXLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2luZ1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9wYWdpbmcvcmVhZC9wYWdpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9wYWdpbmcvcmVhZC9wYWdpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFBhZ2luZ1dhcmVob3VzZSBleHRlbmRzIFN0cnVjdHVyZVBhZ2luZ1dhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHBhZ2luZ1JlcG9zaXRvcnk6IFBhZ2luZ1JlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihwYWdpbmdSZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblBhZ2luZygpOiBPYnNlcnZhYmxlPFBhZ2luZz4ge1xuXHRcdHJldHVybiBzdXBlci5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNpbmdsZVBhZ2luZygpOiBPYnNlcnZhYmxlPFBhZ2luZz4ge1xuXHRcdHJldHVybiBzdXBlci5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0dGFrZSgxKVxuXHRcdFx0XHRcdCk7XG5cdH1cblxufVxuIl19