/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { PagingWarehouse } from '../../../../paging/domain-api/paging.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { PagingRepository } from '../../../../paging/domain-api/read/paging.repository';
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
}(PagingWarehouse));
export { LocalPagingWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9sb2NhbC9wYWdpbmcvbG9jYWwtcGFnaW5nLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJaEU7SUFDMEMsZ0RBQWU7SUFFeEQsOEJBQW9CLFdBQXdCLEVBQ3pDLGdCQUFrQztRQURyQyxZQUVDLGtCQUFNLGdCQUFnQixDQUFDLFNBQ3ZCO1FBSG1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUc1QyxDQUFDOzs7O0lBR0QsdUNBQVE7OztJQUFSO1FBQ0MsT0FBTyxpQkFBTSxRQUFRLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFHRCw2Q0FBYzs7O0lBQWQ7UUFDQyxPQUFPLGlCQUFNLFFBQVEsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ25DLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNOLENBQUM7O2dCQW5CRCxVQUFVOzs7O2dCQU5GLFdBQVc7Z0JBQ1gsZ0JBQWdCOztJQWN4QjtRQURDLFFBQVE7OztnREFDRyxVQUFVO3dEQUVyQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNTLFVBQVU7OERBSzNCO0lBRUYsMkJBQUM7Q0FBQSxBQXJCRCxDQUMwQyxlQUFlLEdBb0J4RDtTQXBCWSxvQkFBb0I7Ozs7OztJQUVwQiwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3JlYWQvcGFnaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcmVhZC9wYWdpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFBhZ2luZ1dhcmVob3VzZSBleHRlbmRzIFBhZ2luZ1dhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHBhZ2luZ1JlcG9zaXRvcnk6IFBhZ2luZ1JlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihwYWdpbmdSZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblBhZ2luZygpOiBPYnNlcnZhYmxlPFBhZ2luZz4ge1xuXHRcdHJldHVybiBzdXBlci5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNpbmdsZVBhZ2luZygpOiBPYnNlcnZhYmxlPFBhZ2luZz4ge1xuXHRcdHJldHVybiBzdXBlci5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0dGFrZSgxKVxuXHRcdFx0XHRcdCk7XG5cdH1cblxufVxuIl19