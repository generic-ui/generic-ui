/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { PagingRepository } from './read/paging.repository';
import { structureGlobalId } from '../../../lib/structure/domain-api/structure.global-id';
var PagingWarehouse = /** @class */ (function () {
    function PagingWarehouse(pagingRepository) {
        this.pagingRepository = pagingRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingWarehouse.prototype.onPaging = /**
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
    PagingWarehouse.prototype.onSinglePaging = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.onPaging(structureId)
            .pipe(take(1));
    };
    PagingWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingWarehouse.ctorParameters = function () { return [
        { type: PagingRepository }
    ]; };
    return PagingWarehouse;
}());
export { PagingWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingWarehouse.prototype.pagingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBSTFGO0lBR0MseUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7Ozs7O0lBRUQsa0NBQVE7Ozs7SUFBUixVQUFTLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELHdDQUFjOzs7O0lBQWQsVUFBZSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMxRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2FBQzNCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7O2dCQWZELFVBQVU7Ozs7Z0JBTkYsZ0JBQWdCOztJQXVCekIsc0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWhCWSxlQUFlOzs7Ozs7SUFFZiwyQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBQYWdpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL3BhZ2luZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi9yZWFkL3BhZ2luZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2luZ1dhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmdSZXBvc2l0b3J5OiBQYWdpbmdSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblBhZ2luZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblNpbmdsZVBhZ2luZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMub25QYWdpbmcoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIHRha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=