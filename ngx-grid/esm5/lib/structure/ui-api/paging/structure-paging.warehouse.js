/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { PagingRepository } from '../../read/paging/paging.repository';
import { structureGlobalId } from '../structure.global-id';
var StructurePagingWarehouse = /** @class */ (function () {
    function StructurePagingWarehouse(pagingRepository) {
        this.pagingRepository = pagingRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructurePagingWarehouse.prototype.onPaging = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.pagingRepository.on(structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructurePagingWarehouse.prototype.onSinglePaging = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.onPaging(structureId)
            .pipe(take(1));
    };
    StructurePagingWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructurePagingWarehouse.ctorParameters = function () { return [
        { type: PagingRepository }
    ]; };
    return StructurePagingWarehouse;
}());
export { StructurePagingWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingWarehouse.prototype.pagingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFJM0Q7SUFHQyxrQ0FBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQzs7Ozs7SUFFRCwyQ0FBUTs7OztJQUFSLFVBQVMsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDcEQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsaURBQWM7Ozs7SUFBZCxVQUFlLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzFELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7YUFDM0IsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ1IsQ0FBQzs7Z0JBZkQsVUFBVTs7OztnQkFORixnQkFBZ0I7O0lBdUJ6QiwrQkFBQztDQUFBLEFBakJELElBaUJDO1NBaEJZLHdCQUF3Qjs7Ozs7O0lBRXhCLG9EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFBhZ2luZ1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9yZWFkL3BhZ2luZy9wYWdpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uL3JlYWQvcGFnaW5nL3BhZ2luZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ1dhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmdSZXBvc2l0b3J5OiBQYWdpbmdSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblBhZ2luZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblNpbmdsZVBhZ2luZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMub25QYWdpbmcoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIHRha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=