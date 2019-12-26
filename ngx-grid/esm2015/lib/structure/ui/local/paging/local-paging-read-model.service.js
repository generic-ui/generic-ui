/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { PagingReadModelService } from '../../../ui-api/paging/paging-read-model.service';
import { StructureId } from '../../../domain/structure-id';
import { PagingRepository } from '../../../domain/paging/read/paging.repository';
import { Override } from '../../../../../common/cdk/decorators';
export class LocalPagingReadModelService extends PagingReadModelService {
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
LocalPagingReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalPagingReadModelService.ctorParameters = () => [
    { type: StructureId },
    { type: PagingRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalPagingReadModelService.prototype, "onPaging", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalPagingReadModelService.prototype, "onSinglePaging", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingReadModelService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9wYWdpbmcvbG9jYWwtcGFnaW5nLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU1oRSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsc0JBQXNCOzs7OztJQUV0RSxZQUFvQixXQUF3QixFQUN6QyxnQkFBa0M7UUFDcEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFGTCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUc1QyxDQUFDOzs7O0lBR0QsUUFBUTtRQUNQLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUdELGNBQWM7UUFDYixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNuQyxJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDTixDQUFDOzs7WUFuQkQsVUFBVTs7OztZQVBGLFdBQVc7WUFDWCxnQkFBZ0I7O0FBZXhCO0lBREMsUUFBUTs7OzRDQUNHLFVBQVU7MkRBRXJCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1MsVUFBVTtpRUFLM0I7Ozs7OztJQWhCVyxrREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnaW5nUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9wYWdpbmcvcGFnaW5nLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgUGFnaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcmVhZC9wYWdpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3JlYWQvcGFnaW5nJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFBhZ2luZ1JlYWRNb2RlbFNlcnZpY2UgZXh0ZW5kcyBQYWdpbmdSZWFkTW9kZWxTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cGFnaW5nUmVwb3NpdG9yeTogUGFnaW5nUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHBhZ2luZ1JlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uUGFnaW5nKCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2luZ2xlUGFnaW5nKCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHR0YWtlKDEpXG5cdFx0XHRcdFx0KTtcblx0fVxuXG59XG4iXX0=