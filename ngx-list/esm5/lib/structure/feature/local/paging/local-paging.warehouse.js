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
}(StructurePagingWarehouse));
export { LocalPagingWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3BhZ2luZy9sb2NhbC1wYWdpbmcud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBSWhFO0lBQzBDLGdEQUF3QjtJQUVqRSw4QkFBb0IsV0FBd0IsRUFDekMsZ0JBQWtDO1FBRHJDLFlBRUMsa0JBQU0sZ0JBQWdCLENBQUMsU0FDdkI7UUFIbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBRzVDLENBQUM7Ozs7SUFHRCx1Q0FBUTs7O0lBQVI7UUFDQyxPQUFPLGlCQUFNLFFBQVEsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUdELDZDQUFjOzs7SUFBZDtRQUNDLE9BQU8saUJBQU0sUUFBUSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDbkMsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ04sQ0FBQzs7Z0JBbkJELFVBQVU7Ozs7Z0JBTkYsV0FBVztnQkFDWCxnQkFBZ0I7O0lBY3hCO1FBREMsUUFBUTs7O2dEQUNHLFVBQVU7d0RBRXJCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1MsVUFBVTs4REFLM0I7SUFFRiwyQkFBQztDQUFBLEFBckJELENBQzBDLHdCQUF3QixHQW9CakU7U0FwQlksb0JBQW9COzs7Ozs7SUFFcEIsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ1dhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3BhZ2luZy9yZWFkL3BhZ2luZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3BhZ2luZy9yZWFkL3BhZ2luZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsUGFnaW5nV2FyZWhvdXNlIGV4dGVuZHMgU3RydWN0dXJlUGFnaW5nV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cGFnaW5nUmVwb3NpdG9yeTogUGFnaW5nUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHBhZ2luZ1JlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uUGFnaW5nKCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2luZ2xlUGFnaW5nKCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHR0YWtlKDEpXG5cdFx0XHRcdFx0KTtcblx0fVxuXG59XG4iXX0=