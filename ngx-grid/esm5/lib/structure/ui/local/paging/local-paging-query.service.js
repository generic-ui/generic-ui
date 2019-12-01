/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { PagingQueryService } from '../../../app/paging/paging-query.service';
import { StructureId } from '../../../domain/structure-id';
import { PagingRepository } from '../../../domain/paging/query/paging.repository';
import { Override } from '../../../../../common/cdk/decorators';
var LocalPagingQueryService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalPagingQueryService, _super);
    function LocalPagingQueryService(structureId, pagingRepository) {
        var _this = _super.call(this, pagingRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalPagingQueryService.prototype.select = /**
     * @return {?}
     */
    function () {
        return _super.prototype.select.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalPagingQueryService.prototype.selectOne = /**
     * @return {?}
     */
    function () {
        return _super.prototype.select.call(this, this.structureId)
            .pipe(take(1));
    };
    LocalPagingQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalPagingQueryService.ctorParameters = function () { return [
        { type: StructureId },
        { type: PagingRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalPagingQueryService.prototype, "select", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalPagingQueryService.prototype, "selectOne", null);
    return LocalPagingQueryService;
}(PagingQueryService));
export { LocalPagingQueryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingQueryService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvcGFnaW5nL2xvY2FsLXBhZ2luZy1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBS2hFO0lBQzZDLG1EQUFrQjtJQUU5RCxpQ0FBb0IsV0FBd0IsRUFDekMsZ0JBQWtDO1FBRHJDLFlBRUMsa0JBQU0sZ0JBQWdCLENBQUMsU0FDdkI7UUFIbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBRzVDLENBQUM7Ozs7SUFHRCx3Q0FBTTs7O0lBQU47UUFDQyxPQUFPLGlCQUFNLE1BQU0sWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUdELDJDQUFTOzs7SUFBVDtRQUNDLE9BQU8saUJBQU0sTUFBTSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDakMsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ04sQ0FBQzs7Z0JBbkJELFVBQVU7Ozs7Z0JBUEYsV0FBVztnQkFDWCxnQkFBZ0I7O0lBZXhCO1FBREMsUUFBUTs7O2dEQUNDLFVBQVU7eURBRW5CO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ0ksVUFBVTs0REFLdEI7SUFFRiw4QkFBQztDQUFBLEFBckJELENBQzZDLGtCQUFrQixHQW9COUQ7U0FwQlksdUJBQXVCOzs7Ozs7SUFFdkIsOENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2luZ1F1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FwcC9wYWdpbmcvcGFnaW5nLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFBhZ2luZ1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3F1ZXJ5L3BhZ2luZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcXVlcnkvcGFnaW5nJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFBhZ2luZ1F1ZXJ5U2VydmljZSBleHRlbmRzIFBhZ2luZ1F1ZXJ5U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHBhZ2luZ1JlcG9zaXRvcnk6IFBhZ2luZ1JlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihwYWdpbmdSZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3QoKTogT2JzZXJ2YWJsZTxQYWdpbmc+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0KHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlbGVjdE9uZSgpOiBPYnNlcnZhYmxlPFBhZ2luZz4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3QodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdHRha2UoMSlcblx0XHRcdFx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==