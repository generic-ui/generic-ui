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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9wYWdpbmcvbG9jYWwtcGFnaW5nLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUtoRSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsc0JBQXNCOzs7OztJQUV0RSxZQUFvQixXQUF3QixFQUN6QyxnQkFBa0M7UUFDcEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFGTCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUc1QyxDQUFDOzs7O0lBR0QsUUFBUTtRQUNQLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUdELGNBQWM7UUFDYixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNuQyxJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDTixDQUFDOzs7WUFuQkQsVUFBVTs7OztZQU5GLFdBQVc7WUFDWCxnQkFBZ0I7O0FBY3hCO0lBREMsUUFBUTs7OzRDQUNHLFVBQVU7MkRBRXJCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1MsVUFBVTtpRUFLM0I7Ozs7OztJQWhCVyxrREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnaW5nUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9wYWdpbmcvcGFnaW5nLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgUGFnaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcmVhZC9wYWdpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3JlYWQvcGFnaW5nJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxQYWdpbmdSZWFkTW9kZWxTZXJ2aWNlIGV4dGVuZHMgUGFnaW5nUmVhZE1vZGVsU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHBhZ2luZ1JlcG9zaXRvcnk6IFBhZ2luZ1JlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihwYWdpbmdSZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblBhZ2luZygpOiBPYnNlcnZhYmxlPFBhZ2luZz4ge1xuXHRcdHJldHVybiBzdXBlci5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNpbmdsZVBhZ2luZygpOiBPYnNlcnZhYmxlPFBhZ2luZz4ge1xuXHRcdHJldHVybiBzdXBlci5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0dGFrZSgxKVxuXHRcdFx0XHRcdCk7XG5cdH1cblxufVxuIl19