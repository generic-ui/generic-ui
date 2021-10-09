/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { hermesTake } from '@generic-ui/hermes';
import { PagingRepository } from '../api/read/paging.repository';
import { PagingWarehouse } from '../api/paging.warehouse';
var PagingDomainWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(PagingDomainWarehouse, _super);
    function PagingDomainWarehouse(pagingRepository) {
        var _this = _super.call(this) || this;
        _this.pagingRepository = pagingRepository;
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingDomainWarehouse.prototype.onPaging = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.pagingRepository.on(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingDomainWarehouse.prototype.oncePaging = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.pagingRepository
            .on(structureId)
            .pipe(hermesTake(1));
    };
    PagingDomainWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingDomainWarehouse.ctorParameters = function () { return [
        { type: PagingRepository }
    ]; };
    return PagingDomainWarehouse;
}(PagingWarehouse));
export { PagingDomainWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingDomainWarehouse.prototype.pagingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvY29yZS9kb21haW4tcmVhZC9wYWdpbmcuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFvQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHMUQ7SUFDMkMsaURBQWU7SUFFekQsK0JBQTZCLGdCQUFrQztRQUEvRCxZQUNDLGlCQUFPLFNBQ1A7UUFGNEIsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjs7SUFFL0QsQ0FBQzs7Ozs7SUFFRCx3Q0FBUTs7OztJQUFSLFVBQVMsV0FBd0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsMENBQVU7Ozs7SUFBVixVQUFXLFdBQXdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQjthQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ2YsSUFBSSxDQUNKLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDYixDQUFDO0lBQ1IsQ0FBQzs7Z0JBakJELFVBQVU7Ozs7Z0JBTEYsZ0JBQWdCOztJQXdCekIsNEJBQUM7Q0FBQSxBQW5CRCxDQUMyQyxlQUFlLEdBa0J6RDtTQWxCWSxxQkFBcUI7Ozs7OztJQUVyQixpREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIGhlcm1lc1Rha2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYXBpL3JlYWQvcGFnaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vYXBpL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2luZ1dhcmVob3VzZSB9IGZyb20gJy4uL2FwaS9wYWdpbmcud2FyZWhvdXNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nRG9tYWluV2FyZWhvdXNlIGV4dGVuZHMgUGFnaW5nV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1JlcG9zaXRvcnk6IFBhZ2luZ1JlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b25QYWdpbmcoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxQYWdpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmdSZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uY2VQYWdpbmcoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxQYWdpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmdSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzVGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==