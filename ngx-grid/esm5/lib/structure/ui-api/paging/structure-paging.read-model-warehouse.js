/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { PagingRepository } from '../../read/paging/paging.repository';
import { structureGlobalId } from '../structure.global-id';
var StructurePagingReadModelWarehouse = /** @class */ (function () {
    function StructurePagingReadModelWarehouse(pagingRepository) {
        this.pagingRepository = pagingRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructurePagingReadModelWarehouse.prototype.onPaging = /**
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
    StructurePagingReadModelWarehouse.prototype.onSinglePaging = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.onPaging(structureId)
            .pipe(take(1));
    };
    StructurePagingReadModelWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructurePagingReadModelWarehouse.ctorParameters = function () { return [
        { type: PagingRepository }
    ]; };
    return StructurePagingReadModelWarehouse;
}());
export { StructurePagingReadModelWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingReadModelWarehouse.prototype.pagingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5yZWFkLW1vZGVsLXdhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSTNEO0lBR0MsMkNBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7Ozs7O0lBRUQsb0RBQVE7Ozs7SUFBUixVQUFTLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELDBEQUFjOzs7O0lBQWQsVUFBZSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMxRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2FBQzNCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7O2dCQWZELFVBQVU7Ozs7Z0JBTkYsZ0JBQWdCOztJQXVCekIsd0NBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWhCWSxpQ0FBaUM7Ozs7OztJQUVqQyw2REFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBQYWdpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vcmVhZC9wYWdpbmcvcGFnaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi9yZWFkL3BhZ2luZy9wYWdpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdSZWFkTW9kZWxXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnaW5nUmVwb3NpdG9yeTogUGFnaW5nUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25QYWdpbmcoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFBhZ2luZz4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZ1JlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25TaW5nbGVQYWdpbmcoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFBhZ2luZz4ge1xuXHRcdHJldHVybiB0aGlzLm9uUGFnaW5nKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0YWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19